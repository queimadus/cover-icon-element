# Cover-icon-element

Improved cover icon for home assistant's picture-element which visually displays the cover's position.

![element-states](https://github.com/queimadus/cover-icon-element/blob/main/cover-icon-element.jpg)

### Installation
It's recommended to install this via [HACS](https://github.com/custom-components/hacs).
This repository is part of the defaults and can be found by searching for `cover-icon-element`.

### Usage

Use it as a custom element inside a `picture-elements`.
```
elements:
   - type: 'custom:cover-icon-element'
     entity: cover.my_cover
     style:
       left: 50%
       top: 50%
       width: 10%
image: /local/images/floorplan.svg
type: picture-elements
```
If you want to include the (optional) breakpoints, opacity and color options:
```
elements:
   - type: 'custom:cover-icon-element'
     entity: cover.my_cover
     color: gold
     opacity: 0.1
     breakpoints:
       - 16
       - 50
       - 75
       - 95
     style:
       left: 50%
       top: 50%
       width: 10%
image: /local/images/floorplan.svg
type: picture-elements
```

### Options

| Name              | Type    | Requirement  | Description                                 | Default             |
| ----------------- | ------- | ------------ | ------------------------------------------- | ------------------- |
| type              | string  | **Required** | `custom:cover-icon-element`                 |                     |
| entity            | string  | **Required** | Home Assistant cover entity ID              |                     |
| breakpoints       | array   | **Optional** | Sorted array of 4 elements which maps a cover's position to the number of bars shown in the Icon. <br /> <pre>     0 <= pos < arr[0] -> 4 bars <br/>arr[0] <= pos < arr[1] -> 3 bars<br/>arr[1] <= pos < arr[2] -> 2 bars<br/>arr[2] <= pos < arr[3] -> 1 bars<br/>arr[3] <= pos <= 100   -> 0 bars</pre>    | `[1, 50, 75, 100]`    |
| color             | string  | **Optional** | Sets the base Icon color                    | `"#4d4d4d"`         |
| opacity           | float   | **Optional** | Sets opacity (0..1) for the Icon open bars  | `0.3`               |
| style             | object  | **Optional** | CSS style properties to apply               |                     | 
