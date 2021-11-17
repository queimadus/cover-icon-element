class CoverIconElement extends HTMLElement {

  defaults = {
    breakpoints: [1, 50, 75, 100],
    color: "#4d4d4d",
    opacity: 0.3
  }

  setImage(hass) {
    if (hass && this._config) {
      let image = CoverIconElement.dataImageError(this._config.color);

      if (this._config.entity) {
        const stateObj = hass.states[this._config.entity];
        if (stateObj) {
          const position = stateObj.attributes.current_position;
          const state = stateObj.state;

          if (state === "unavailable") {
            image = CoverIconElement.dataImageError(this._config.color);
          } else if (state === "closing") {
            image = CoverIconElement.dataImageClosing(this._config.color);
          } else if(state === "opening") {
            image = CoverIconElement.dataImageOpening(this._config.color);
          } else if (position >= this._config.breakpoints[3]) {
            image = CoverIconElement.dataImage0(this._config.color, this._config.opacity);
          } else if (position >= this._config.breakpoints[2]) {
            image = CoverIconElement.dataImage1(this._config.color, this._config.opacity);
          } else if (position >= this._config.breakpoints[1]) {
            image = CoverIconElement.dataImage2(this._config.color, this._config.opacity);
          } else if (position >= this._config.breakpoints[0]) {
            image = CoverIconElement.dataImage3(this._config.color, this._config.opacity);
          } else {
            image = CoverIconElement.dataImage4(this._config.color, this._config.opacity);
          }
        }
      }

      if (this.img && this.prevImage !== image) {
        this.prevImage = image;
        this.img.setConfig({
          ...this._config,
          // We need to set a non false-ish filter, otherwise the hui-image's
          // DEFAULT_FILTER (greyscale(100%)) gets applied when entity state is 'off'
          filter: this._config.filter || " ",
          image: image
        });
      }
    }
  }

  validateConfig(oldConfig) {
    const config = {...this.defaults, ...oldConfig};

    if (!(Array.isArray(config.breakpoints) && config.breakpoints.length === 4)) {
      throw new Error("Config 'breakpoints' must be an 4 element number array");
    } else {
      config.breakpoints.reduce((prev, curr) => {
        if (prev >= curr) {
          throw new Error("Config 'breakpoints' elements must be sorted in ascending order");
        }
      })
    }

    return config;
  }

  setConfig(config) {
    if (!this.img) {
      this.img = document.createElement('hui-image-element');
      this.appendChild(this.img);
    }

    const configWithDefaults = this.validateConfig(config);

    this._config = configWithDefaults;
    this.setImage();
  }

  set hass(hass) {
    this.img.hass = hass;
    this.setImage(hass);
  }
}

CoverIconElement.dataImage4 = (color, opacity) => `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='${encodeURIComponent(color)}' preserveAspectRatio='xMidYMid meet' focusable='false' viewBox='0 0 24 24'%3E%3Cg%3E%3Cpath d='M3 4H21V8H19V20H17V8H7V20H5V8H3V4'%3E%3C/path%3E%3Cpath d='M3 9H16V11H8V9' opacity='1'%3E%3C/path%3E%3Cpath d='M3 12H16V14H8V12' opacity='1'%3E%3C/path%3E%3Cpath d='M3 15H16V17H8V15' opacity='1'%3E%3C/path%3E%3Cpath d='M3 18H16V20H8V18' opacity='1'%3E%3C/path%3E%3C/g%3E%3C/svg%3E`;

CoverIconElement.dataImage3 = (color, opacity) => `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='${encodeURIComponent(color)}' preserveAspectRatio='xMidYMid meet' focusable='false' viewBox='0 0 24 24'%3E%3Cg%3E%3Cpath d='M3 4H21V8H19V20H17V8H7V20H5V8H3V4'%3E%3C/path%3E%3Cpath d='M3 9H16V11H8V9' opacity='1'%3E%3C/path%3E%3Cpath d='M3 12H16V14H8V12' opacity='1'%3E%3C/path%3E%3Cpath d='M3 15H16V17H8V15' opacity='1'%3E%3C/path%3E%3Cpath d='M3 18H16V20H8V18' opacity='${encodeURIComponent(opacity)}'%3E%3C/path%3E%3C/g%3E%3C/svg%3E`;

CoverIconElement.dataImage2 = (color, opacity) => `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='${encodeURIComponent(color)}' preserveAspectRatio='xMidYMid meet' focusable='false' viewBox='0 0 24 24'%3E%3Cg%3E%3Cpath d='M3 4H21V8H19V20H17V8H7V20H5V8H3V4'%3E%3C/path%3E%3Cpath d='M3 9H16V11H8V9' opacity='1'%3E%3C/path%3E%3Cpath d='M3 12H16V14H8V12' opacity='1'%3E%3C/path%3E%3Cpath d='M3 15H16V17H8V15' opacity='${encodeURIComponent(opacity)}'%3E%3C/path%3E%3Cpath d='M3 18H16V20H8V18' opacity='${encodeURIComponent(opacity)}'%3E%3C/path%3E%3C/g%3E%3C/svg%3E`;

CoverIconElement.dataImage1 = (color, opacity) => `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='${encodeURIComponent(color)}' preserveAspectRatio='xMidYMid meet' focusable='false' viewBox='0 0 24 24'%3E%3Cg%3E%3Cpath d='M3 4H21V8H19V20H17V8H7V20H5V8H3V4'%3E%3C/path%3E%3Cpath d='M3 9H16V11H8V9' opacity='1'%3E%3C/path%3E%3Cpath d='M3 12H16V14H8V12' opacity='${encodeURIComponent(opacity)}'%3E%3C/path%3E%3Cpath d='M3 15H16V17H8V15' opacity='${encodeURIComponent(opacity)}'%3E%3C/path%3E%3Cpath d='M3 18H16V20H8V18' opacity='${encodeURIComponent(opacity)}'%3E%3C/path%3E%3C/g%3E%3C/svg%3E`;

CoverIconElement.dataImage0 = (color, opacity) => `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='${encodeURIComponent(color)}' preserveAspectRatio='xMidYMid meet' focusable='false' viewBox='0 0 24 24'%3E%3Cg%3E%3Cpath d='M3 4H21V8H19V20H17V8H7V20H5V8H3V4'%3E%3C/path%3E%3Cpath d='M3 9H16V11H8V9' opacity='${encodeURIComponent(opacity)}'%3E%3C/path%3E%3Cpath d='M3 12H16V14H8V12' opacity='${encodeURIComponent(opacity)}'%3E%3C/path%3E%3Cpath d='M3 15H16V17H8V15' opacity='${encodeURIComponent(opacity)}'%3E%3C/path%3E%3Cpath d='M3 18H16V20H8V18' opacity='${encodeURIComponent(opacity)}'%3E%3C/path%3E%3C/g%3E%3C/svg%3E`;

CoverIconElement.dataImageClosing = (color) => `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='${encodeURIComponent(color)}' preserveAspectRatio='xMidYMid meet' focusable='false' viewBox='0 0 24 24'%3E%3Cg%3E%3Cpath d='M3 4H21V8H19V20H17V8H7V20H5V8H3V4'%3E%3C/path%3E%3Cpath d='M10 9 H14 V15 H16 L12 19 L 8 15 H10 Z' opacity='0.7'%3E%3C/path%3E%3C/g%3E%3C/svg%3E`;

CoverIconElement.dataImageOpening = (color) => `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='${encodeURIComponent(color)}' preserveAspectRatio='xMidYMid meet' focusable='false' viewBox='0 0 24 24'%3E%3Cg%3E%3Cpath d='M3 4H21V8H19V20H17V8H7V20H5V8H3V4'%3E%3C/path%3E%3Cpath d='M10 19 H14 V13 H16 L12 9 L8 13 H10 Z' opacity='0.7'%3E%3C/path%3E%3C/g%3E%3C/svg%3E`;

CoverIconElement.dataImageError = (color) => `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='${encodeURIComponent(color)}' preserveAspectRatio='xMidYMid meet' focusable='false' viewBox='0 0 24 24'%3E%3Cg%3E%3Cpath d='M3 4H21V8H19V20H17V8H7V20H5V8H3V4'%3E%3C/path%3E%3Cpath d='M11 9.5 H13 V15 H 11 Z' opacity='0.9'%3E%3C/path%3E%3Cpath d='M11 16 H13 V18 H 11 Z' opacity='0.9'%3E%3C/path%3E%3C/g%3E%3C/svg%3E`;

customElements.define('cover-icon-element', CoverIconElement);
