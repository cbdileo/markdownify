# Markdownify
------
Markdownify is a jQuery plugin that makes any input/textarea a markdown
editing field.

## Install
------
`$ bower install markdownify`

## Usage
------
Create the HTML that markdownify will use. By default it will look for a `textarea` as the input for the markdown and a `button` as the element to bind a click event that converts the value of the `textarea` to HTML. 
```html
<div class="workspace">
  <textarea></textarea>
  <button>Convert To Html</button>
</div>
```
To use the plugin, select an element that wraps the input and button you want to enhance. When the button (or any clickable element) is clicked, the input with the markdown will replace the markdownified element. 
```javascript
// We markdownify all elements with the workspace class
$('.workspace').markdownify();
```
### Options
**input** Allows you to change the selector used to find the input field where the markdown will be entered
***submit** Allows you to change the selector used to find the element that will bind to the click event
***wrapper** Specify the element to wrap the new HTML created from markdown.

```javascript
// Fully configured
$('.workspace').markdownify({
  wrapper: $('<div class="something">'),
  input: '.special-input',
  submit: '.special-button'
});
```
## [View Demo](http://codeshoppe.io/markdownify/example/portfolio.html)
![](http://g.recordit.co/Mh3WzKTAjp.gif)
- Demo shows markdownify being used as a profile editor

## Requirements
- [Marked](https://github.com/chjj/marked)
