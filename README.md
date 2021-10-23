# Cover-icon-element

Improved cover icon for home assistant's picture-element which visually displays the cover's position.

![element-states](https://github.com/queimadus/cover-icon-element/blob/main/cover-icon-element.jpg)

### Instalation
Add this repo to `HACS` as a custom repository and install it. You're all set!

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
