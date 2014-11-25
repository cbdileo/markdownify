describe('jquery-markdownify', function() {
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
  });

  afterEach(function() {
    clock.restore();
  });

  describe('without options', function() {
    var $button, $input, $workspace;

    beforeEach(function() {
      loadFixtures('simple_markdownify_fixture.html');

      $workspace = $('.workspace').markdownify();
      $button = $('#submit');
      $input = $workspace.find('textarea');
    });

    it("changes markdown to html", function() {
      $input.text('## Test');
      $button.click();

      clock.tick(9000);

      expect($('.markdownify h2').is(':visible')).toEqual(true);
    });

    it("changes html text to html", function() {
      $input.text('<h3>Test</h3>');
      $button.click();

      clock.tick(9000);

      expect($('.markdownify h3').is(':visible')).toEqual(true);
    });
  });

  describe('with options', function() {
    var $button, $input, $workspace;

    beforeEach(function() {
      loadFixtures('options_markdownify_fixture.html');

      $('.workspace').markdownify({
        input: '.textfield',
        submit: '.btn',
        wrapper: $('<p class="expected-class">')
      });

      $input = $('#provided-input');
      $submit = $('#provided-submit');
    });

    it("uses provided configuration", function() {
      $input.val('## Special');
      $submit.click();

      clock.tick(9000);

      expect($('.expected-class h2').is(':visible')).toEqual(true);
    });
  });

  describe('with invalid configure', function() {
    var $button, $input, $workspace;

    beforeEach(function() {
      loadFixtures('simple_markdownify_fixture.html');

      $button = $('#submit');
    });

    it("raises error if input invalid", function() {
      expect( function(){
        $workspace = $('.workspace').markdownify({
          input: 'bad'
        });
      }).toThrow(new Error("Unable to find 'bad' in 'markdownify'"));
    });

    it("raises error if submit invalid", function() {
      expect( function(){
        $workspace = $('.workspace').markdownify({
          submit: 'bad2'
        });
      }).toThrow(new Error("Unable to find 'bad2' in 'markdownify'"));
    });
  });
});
