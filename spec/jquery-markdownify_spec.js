describe('jquery-markdownify', function() {
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
  });

  afterEach(function() {
    clock.restore();
  });

  describe('without options', function() {
    var $markdownifyButton, $workspace;

    beforeEach(function() {
      loadFixtures('simple_markdownify_fixture.html');
      $workspace = $('.workspace').markdownify();
      $markdownifyButton = $('#submit');
    });

    it("changes markdown to html", function() {
      $workspace.find('textarea').text('## Test');
      $markdownifyButton.click();

      clock.tick(9000);

      expect($('.markdownify h2').is(':visible')).toEqual(true);
    });

    it("changes html text to html", function() {
      $workspace.find('textarea').text('<h3>Test</h3>');
      $markdownifyButton.click();

      clock.tick(9000);

      expect($('.markdownify h3').is(':visible')).toEqual(true);
    });
  });

  describe('with options', function() {
    var $markdownifyButton, $workspace;

    beforeEach(function() {
      loadFixtures('options_markdownify_fixture.html');

      $workspace = $('.workspace').markdownify({
        wrapper: $('<p class="expected-class">')
      });
      $markdownifyButton = $('#submit');
    });

    it("uses provided wrapper", function() {
      $workspace.find('textarea').text('# Test');
      $markdownifyButton.click();

      clock.tick(9000);

      expect($('.expected-class h1').is(':visible')).toEqual(true);
    });
  });

});
