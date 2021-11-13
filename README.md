# Cover-icon-element

Improved cover icon for home assistant's picture-element which visually displays the cover's position.

![element-states](https://github.com/queimadus/cover-icon-element/blob/main/cover-icon-element.jpg)

### Instalation
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

### Options

| Name              | Type    | Requirement  | Description                                 | Default             |
| ----------------- | ------- | ------------ | ------------------------------------------- | ------------------- |
| type              | string  | **Required** | `custom:cover-icon-element`                 |                     |
| entity            | string  | **Required** | Home Assistant cover entity ID.             |                     |
| breakpoints       | array   | **Optional** | Sorted array of 4 elements which maps a cover's position to the number of bars shown in the Icon. <br /> <pre>     0 - arr[0] => 4 bars <br/>arr[0] - arr[1] => 3 bars<br/>arr[1] - arr[2] => 2 bars<br/>arr[2] - arr[3] => 1 bars<br/>arr[3] - 100    => 0 bars</pre>    | `[1, 50, 75, 100]`    |
| style             | object  | **Optional** | CSS style properties to apply               |                     | 
