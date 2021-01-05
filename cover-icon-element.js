class CoverIconElement extends HTMLElement {

  setImage(hass) {
    if (hass && this._config) {
      let image = CoverIconElement.dataImage0;

      if (this._config.entity) {
        const stateObj = hass.states[this._config.entity];
        if (stateObj) {
          const position = stateObj.attributes.current_position;

          if (position === 0) {
            image = CoverIconElement.dataImage4;
          } else if (position > 0 && position <= 50) {
            image = CoverIconElement.dataImage3;
          } else if (position > 50 && position <= 77) {
            image = CoverIconElement.dataImage2;
          } else if (position > 77 && position <= 99) {
            image = CoverIconElement.dataImage1;
          }
        }
      }

      if (this.img && this.prevImage !== image) {
        this.prevImage = image;
        this.img.setConfig({
          ...this._config,
          image: image
        });
      }
    }
  }

  async setConfig(config) {
    if (!this.img) {
      this.img = document.createElement('hui-image-element');
      this.appendChild(this.img);
    }
    this._config = config;
    this.setImage();
  }

  set hass(hass) {
    this.img.hass = hass;
    this.setImage(hass);
  }
}

CoverIconElement.dataImage4 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%234d4d4d' preserveAspectRatio='xMidYMid meet' focusable='false' viewBox='0 0 24 24'%3E%3Cg%3E%3Cpath d='M3 4H21V8H19V20H17V8H7V20H5V8H3V4'%3E%3C/path%3E%3Cpath d='M3 9H16V11H8V9' opacity='1'%3E%3C/path%3E%3Cpath d='M3 12H16V14H8V12' opacity='1'%3E%3C/path%3E%3Cpath d='M3 15H16V17H8V15' opacity='1'%3E%3C/path%3E%3Cpath d='M3 18H16V20H8V18' opacity='1'%3E%3C/path%3E%3C/g%3E%3C/svg%3E";

CoverIconElement.dataImage3 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%234d4d4d' preserveAspectRatio='xMidYMid meet' focusable='false' viewBox='0 0 24 24'%3E%3Cg%3E%3Cpath d='M3 4H21V8H19V20H17V8H7V20H5V8H3V4'%3E%3C/path%3E%3Cpath d='M3 9H16V11H8V9' opacity='1'%3E%3C/path%3E%3Cpath d='M3 12H16V14H8V12' opacity='1'%3E%3C/path%3E%3Cpath d='M3 15H16V17H8V15' opacity='1'%3E%3C/path%3E%3Cpath d='M3 18H16V20H8V18' opacity='0.3'%3E%3C/path%3E%3C/g%3E%3C/svg%3E";

CoverIconElement.dataImage2 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%234d4d4d' preserveAspectRatio='xMidYMid meet' focusable='false' viewBox='0 0 24 24'%3E%3Cg%3E%3Cpath d='M3 4H21V8H19V20H17V8H7V20H5V8H3V4'%3E%3C/path%3E%3Cpath d='M3 9H16V11H8V9' opacity='1'%3E%3C/path%3E%3Cpath d='M3 12H16V14H8V12' opacity='1'%3E%3C/path%3E%3Cpath d='M3 15H16V17H8V15' opacity='0.3'%3E%3C/path%3E%3Cpath d='M3 18H16V20H8V18' opacity='0.3'%3E%3C/path%3E%3C/g%3E%3C/svg%3E";

CoverIconElement.dataImage1 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%234d4d4d' preserveAspectRatio='xMidYMid meet' focusable='false' viewBox='0 0 24 24'%3E%3Cg%3E%3Cpath d='M3 4H21V8H19V20H17V8H7V20H5V8H3V4'%3E%3C/path%3E%3Cpath d='M3 9H16V11H8V9' opacity='1'%3E%3C/path%3E%3Cpath d='M3 12H16V14H8V12' opacity='0.3'%3E%3C/path%3E%3Cpath d='M3 15H16V17H8V15' opacity='0.3'%3E%3C/path%3E%3Cpath d='M3 18H16V20H8V18' opacity='0.3'%3E%3C/path%3E%3C/g%3E%3C/svg%3E";

CoverIconElement.dataImage0 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%234d4d4d' preserveAspectRatio='xMidYMid meet' focusable='false' viewBox='0 0 24 24'%3E%3Cg%3E%3Cpath d='M3 4H21V8H19V20H17V8H7V20H5V8H3V4'%3E%3C/path%3E%3Cpath d='M3 9H16V11H8V9' opacity='0.3'%3E%3C/path%3E%3Cpath d='M3 12H16V14H8V12' opacity='0.3'%3E%3C/path%3E%3Cpath d='M3 15H16V17H8V15' opacity='0.3'%3E%3C/path%3E%3Cpath d='M3 18H16V20H8V18' opacity='0.3'%3E%3C/path%3E%3C/g%3E%3C/svg%3E";

customElements.define('cover-icon-element', CoverIconElement);
