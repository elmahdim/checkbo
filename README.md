checkBo lightweight jQuery plugin v0.1.4
=======

Custom Checkbox and Radio, lightweight jQuery Plugin
---

Demo and Documentation are available [here](http://elmahdim.com/checkbo/)

## Features

* Cross browsers: Chrome, Firefox, Safari, Opera ( PC, MACOS ). IE8+ (CSS3 not supported)
* Hand-held/Touch devices support: Andriod, IOS, BlackBerry
* Lightweight Plugin
* Check all checkboxes
* Size options: Default, Small, Medium, Large
* NO classes or custom attributes are required for states :checked.
* Toggle Check all text
* Show, Hide and Toggle elements
* Switcher **new**
* More options are Coming soon..

## Getting Started

`git clone https://github.com/elmahdim/checkbo.git`

### Usage: Include required files:

1. `<link rel="stylesheet" href="PATH-TO/checkBo.css">`
2. `<link rel="stylesheet" href="PATH-TO/checkBo.js">`

### How to use:

```javascript
$('ANY').checkBo();
```
## Checkbox

```html
<!-- Default -->
<label class="cb-checkbox">
  <input type="checkbox" name="..." />
  ...
</label>

<!-- Disabled -->
<label class="cb-checkbox">
  <input type="checkbox" disabled="disabled" name="..." />
  ...
</label>

<!-- Checked -->
<label class="cb-checkbox">
  <input type="checkbox" checked="checked" name="..." />
  ...
</label>

<!-- Checked Disabled -->
<label class="cb-checkbox">
  <input type="checkbox" checked="checked" disabled="disabled" name="..." />
  ...
</label>
```

## Radio

```html
<!-- Default -->
<label class="cb-radio">
  <input type="radio" name="..." />
  ...
</label>

<!-- Disabled -->
<label class="cb-radio">
  <input type="radio" disabled="disabled" name="..." />
  ...
</label>

<!-- Checked Disabled -->
<label class="cb-radio">
  <input type="radio" checked="checked" disabled="disabled" name="..." />
  ...
</label>
```

## Methods

### States
Change a specific checkbox or radio state.
```javascript
$("ANY").prop('checked', true).change();
// OR
$('ANY').prop('checked', true).trigger('change');
```

### Check all

Check all method

```javascript
$('ANY').checkBo({
    checkAllButton : 'SELECTOR',      // Default: null
    checkAllTarget : 'SELECTOR',      // Default: null
    checkAllTextDefault : 'Check All',    // Default: null, Type: String
    checkAllTextToggle  : 'Un-check All'  // Default: null, Type: String
});
```

Check all toggle markup
```html
<table>
  <tr>
    <th>
      <label class="cb-checkbox m-0" id="checkAllButton-SELECTOR">
        <input type="checkbox" name="check-all" />
        <ANY class="toggle-text">Check All</ANY>
      </label>
    </th>
  </tr>
  <tr class="checkAllTarget-SELECTOR">
    <td>
      <label class="cb-checkbox">
      <input type="checkbox"  name="..." />
      ... </label>
    </td>
  </tr>
</table>
```

## Sizes

### Checkbox size options
```html
<label class="cb-checkbox">       <input type="checkbox" name="..." /> ... </label>
<label class="cb-checkbox cb-sm"> <input type="checkbox" name="..." /> ... </label>
<label class="cb-checkbox cb-md"> <input type="checkbox" name="..." /> ... </label>
<label class="cb-checkbox cb-lg"> <input type="checkbox" name="..." /> ... </label>
```

### Radio size options
```html
<label class="cb-radio">       <input type="radio" name="..." /> ... </label>
<label class="cb-radio cb-sm"> <input type="radio" name="..." /> ... </label>
<label class="cb-radio cb-md"> <input type="radio" name="..." /> ... </label>
<label class="cb-radio cb-lg"> <input type="radio" name="..." /> ... </label>
```

## Show, Hide and Toggle

### Show

```html
<label class="cb-radio" data-show="#SELECTOR">  <!-- value as an id selector -->
    <input type="radio" name="..." />
    ...
</label>
<ANY class="is-hidden" id="SELECTOR">...</ANY>

<label class="cb-checkbox" data-show=".SELECTOR"> <!-- value as an class selector -->
    <input type="checkbox" name="..." />
    ...
</label>
<ANY class="is-hidden SELECTOR">...</ANY>
```

### Hide
```html
<label class="cb-radio" data-hide="#SELECTOR">
    <input type="radio" name="..." />
    ...
</label>
<ANY id="SELECTOR">...</ANY>

<label class="cb-checkbox" data-hide=".SELECTOR">
    <input type="checkbox" name="..." />
    ...
</label>
<ANY class="SELECTOR">...</ANY>
```

### Toggle
```html
<label class="cb-checkbox" data-toggle="#SELECTOR1" data-hide=".SELECTOR2" data-show="#SELECTOR3">
	<input type="checkbox" name="..." />
	...
</label>

<ANY id="SELECTOR1">...</ANY>
<ANY class="SELECTOR2">...</ANY>
<ANY class="is-hidden" id="SELECTOR3">...</ANY>

<label class="cb-checkbox" data-toggle="#X">
	<input type="checkbox" name="..." />
	...
</label>
<ANY class="is-hidden" id="X"></ANY>

<label class="cb-checkbox" data-toggle="#XX">
	<input type="checkbox" name="..." />
	...
</label>
<ANY id="XX">...</ANY>
```

### Radio group toggle
```html
<label class="cb-radio" data-show=".ONE" data-hide=".TWO,.THREE">
	<input type="radio" name="radio-group" checked="checked"/>
	...
</label>
<label class="cb-radio" data-show=".TWO,.ONE"  data-hide=".THREE">
	<input type="radio" name="radio-group"/>
	...
</label>
<label class="cb-radio" data-show=".THREE" data-hide=".ONE">
	<input type="radio" name="radio-group"/>
	...
</label>


<ANY class="ONE">
	...

	<ANY class="TWO is-hidden">
		...
	</ANY>
</ANY>

<ANY class="THREE is-hidden">
	...
</ANY>
```

## Links
```html
<label class="cb-checkbox">
    <input type="checkbox" />
    ... <a href="">...</a>
</label>
```

## Switcher

### Switcher Group
```html
<div class="cb-switcher-group">
 <span class="cb-state">OFF</span>
 <div class="cb-switcher">
  <label class="inner-switcher"><input type="checkbox"/></label>
 </div>
 <span class="cb-state">ON</span>
</div>
```

### Switcher Off/Default State
```html
<div class="cb-switcher">
 <label class="inner-switcher">
  <input type="checkbox" data-state-on="ON" data-state-off="OFF"/>
 </label>
 <span class="cb-state">ON</span>
</div>
```
### Switcher On/Checked State
```html
<div class="cb-switcher">
 <label class="inner-switcher">
  <input type="checkbox" checked data-state-on="ON" data-state-off="OFF"/>
 </label>
 <span class="cb-state">ON</span>
</div>
```

### Switcher Toggle visibility
```html
<div class="cb-switcher" data-toggle=".switch-toggle">
 <label class="inner-switcher">
  <input type="checkbox" checked data-state-on="Yes" data-state-off="No"/>
 </label>
 <span class="cb-state">Yes</span>
</div>

<div class="switch-toggle"> ... </div>
```


## LICENSE

The MIT License (MIT)

Copyright (c) 2014 Mahmoud

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


### Changelog
* v0.1.0 - First release.
* v0.1.1 - Bug fix, improvements and new features:
	* Bug fix: radio group
	* Improvements: re-structure `src` folder versions and general improvements
	* New features: Check all toggle text. Show, Hide and Toggle.
* v0.1.2 - BUg fix: fix radio buttons animation  in Safari
* v0.1.3 - Improvements: Kill the bubbling on the click event ( link inside label ), Radio group toggle ( show hide ).
* v0.1.4 - New feature: Switcher
