(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~image_cropper"],{

/***/ "./node_modules/cropperjs/dist/cropper.js":
/*!************************************************!*\
  !*** ./node_modules/cropperjs/dist/cropper.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Cropper.js v1.5.9
 * https://fengyuanchen.github.io/cropperjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2020-09-10T13:16:26.743Z
 */

(function (global, factory) {
   true ? module.exports = factory() :
  undefined;
}(this, (function () { 'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var IS_BROWSER = typeof window !== 'undefined' && typeof window.document !== 'undefined';
  var WINDOW = IS_BROWSER ? window : {};
  var IS_TOUCH_DEVICE = IS_BROWSER && WINDOW.document.documentElement ? 'ontouchstart' in WINDOW.document.documentElement : false;
  var HAS_POINTER_EVENT = IS_BROWSER ? 'PointerEvent' in WINDOW : false;
  var NAMESPACE = 'cropper'; // Actions

  var ACTION_ALL = 'all';
  var ACTION_CROP = 'crop';
  var ACTION_MOVE = 'move';
  var ACTION_ZOOM = 'zoom';
  var ACTION_EAST = 'e';
  var ACTION_WEST = 'w';
  var ACTION_SOUTH = 's';
  var ACTION_NORTH = 'n';
  var ACTION_NORTH_EAST = 'ne';
  var ACTION_NORTH_WEST = 'nw';
  var ACTION_SOUTH_EAST = 'se';
  var ACTION_SOUTH_WEST = 'sw'; // Classes

  var CLASS_CROP = "".concat(NAMESPACE, "-crop");
  var CLASS_DISABLED = "".concat(NAMESPACE, "-disabled");
  var CLASS_HIDDEN = "".concat(NAMESPACE, "-hidden");
  var CLASS_HIDE = "".concat(NAMESPACE, "-hide");
  var CLASS_INVISIBLE = "".concat(NAMESPACE, "-invisible");
  var CLASS_MODAL = "".concat(NAMESPACE, "-modal");
  var CLASS_MOVE = "".concat(NAMESPACE, "-move"); // Data keys

  var DATA_ACTION = "".concat(NAMESPACE, "Action");
  var DATA_PREVIEW = "".concat(NAMESPACE, "Preview"); // Drag modes

  var DRAG_MODE_CROP = 'crop';
  var DRAG_MODE_MOVE = 'move';
  var DRAG_MODE_NONE = 'none'; // Events

  var EVENT_CROP = 'crop';
  var EVENT_CROP_END = 'cropend';
  var EVENT_CROP_MOVE = 'cropmove';
  var EVENT_CROP_START = 'cropstart';
  var EVENT_DBLCLICK = 'dblclick';
  var EVENT_TOUCH_START = IS_TOUCH_DEVICE ? 'touchstart' : 'mousedown';
  var EVENT_TOUCH_MOVE = IS_TOUCH_DEVICE ? 'touchmove' : 'mousemove';
  var EVENT_TOUCH_END = IS_TOUCH_DEVICE ? 'touchend touchcancel' : 'mouseup';
  var EVENT_POINTER_DOWN = HAS_POINTER_EVENT ? 'pointerdown' : EVENT_TOUCH_START;
  var EVENT_POINTER_MOVE = HAS_POINTER_EVENT ? 'pointermove' : EVENT_TOUCH_MOVE;
  var EVENT_POINTER_UP = HAS_POINTER_EVENT ? 'pointerup pointercancel' : EVENT_TOUCH_END;
  var EVENT_READY = 'ready';
  var EVENT_RESIZE = 'resize';
  var EVENT_WHEEL = 'wheel';
  var EVENT_ZOOM = 'zoom'; // Mime types

  var MIME_TYPE_JPEG = 'image/jpeg'; // RegExps

  var REGEXP_ACTIONS = /^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/;
  var REGEXP_DATA_URL = /^data:/;
  var REGEXP_DATA_URL_JPEG = /^data:image\/jpeg;base64,/;
  var REGEXP_TAG_NAME = /^img|canvas$/i; // Misc
  // Inspired by the default width and height of a canvas element.

  var MIN_CONTAINER_WIDTH = 200;
  var MIN_CONTAINER_HEIGHT = 100;

  var DEFAULTS = {
    // Define the view mode of the cropper
    viewMode: 0,
    // 0, 1, 2, 3
    // Define the dragging mode of the cropper
    dragMode: DRAG_MODE_CROP,
    // 'crop', 'move' or 'none'
    // Define the initial aspect ratio of the crop box
    initialAspectRatio: NaN,
    // Define the aspect ratio of the crop box
    aspectRatio: NaN,
    // An object with the previous cropping result data
    data: null,
    // A selector for adding extra containers to preview
    preview: '',
    // Re-render the cropper when resize the window
    responsive: true,
    // Restore the cropped area after resize the window
    restore: true,
    // Check if the current image is a cross-origin image
    checkCrossOrigin: true,
    // Check the current image's Exif Orientation information
    checkOrientation: true,
    // Show the black modal
    modal: true,
    // Show the dashed lines for guiding
    guides: true,
    // Show the center indicator for guiding
    center: true,
    // Show the white modal to highlight the crop box
    highlight: true,
    // Show the grid background
    background: true,
    // Enable to crop the image automatically when initialize
    autoCrop: true,
    // Define the percentage of automatic cropping area when initializes
    autoCropArea: 0.8,
    // Enable to move the image
    movable: true,
    // Enable to rotate the image
    rotatable: true,
    // Enable to scale the image
    scalable: true,
    // Enable to zoom the image
    zoomable: true,
    // Enable to zoom the image by dragging touch
    zoomOnTouch: true,
    // Enable to zoom the image by wheeling mouse
    zoomOnWheel: true,
    // Define zoom ratio when zoom the image by wheeling mouse
    wheelZoomRatio: 0.1,
    // Enable to move the crop box
    cropBoxMovable: true,
    // Enable to resize the crop box
    cropBoxResizable: true,
    // Toggle drag mode between "crop" and "move" when click twice on the cropper
    toggleDragModeOnDblclick: true,
    // Size limitation
    minCanvasWidth: 0,
    minCanvasHeight: 0,
    minCropBoxWidth: 0,
    minCropBoxHeight: 0,
    minContainerWidth: MIN_CONTAINER_WIDTH,
    minContainerHeight: MIN_CONTAINER_HEIGHT,
    // Shortcuts of events
    ready: null,
    cropstart: null,
    cropmove: null,
    cropend: null,
    crop: null,
    zoom: null
  };

  var TEMPLATE = '<div class="cropper-container" touch-action="none">' + '<div class="cropper-wrap-box">' + '<div class="cropper-canvas"></div>' + '</div>' + '<div class="cropper-drag-box"></div>' + '<div class="cropper-crop-box">' + '<span class="cropper-view-box"></span>' + '<span class="cropper-dashed dashed-h"></span>' + '<span class="cropper-dashed dashed-v"></span>' + '<span class="cropper-center"></span>' + '<span class="cropper-face"></span>' + '<span class="cropper-line line-e" data-cropper-action="e"></span>' + '<span class="cropper-line line-n" data-cropper-action="n"></span>' + '<span class="cropper-line line-w" data-cropper-action="w"></span>' + '<span class="cropper-line line-s" data-cropper-action="s"></span>' + '<span class="cropper-point point-e" data-cropper-action="e"></span>' + '<span class="cropper-point point-n" data-cropper-action="n"></span>' + '<span class="cropper-point point-w" data-cropper-action="w"></span>' + '<span class="cropper-point point-s" data-cropper-action="s"></span>' + '<span class="cropper-point point-ne" data-cropper-action="ne"></span>' + '<span class="cropper-point point-nw" data-cropper-action="nw"></span>' + '<span class="cropper-point point-sw" data-cropper-action="sw"></span>' + '<span class="cropper-point point-se" data-cropper-action="se"></span>' + '</div>' + '</div>';

  /**
   * Check if the given value is not a number.
   */

  var isNaN = Number.isNaN || WINDOW.isNaN;
  /**
   * Check if the given value is a number.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is a number, else `false`.
   */

  function isNumber(value) {
    return typeof value === 'number' && !isNaN(value);
  }
  /**
   * Check if the given value is a positive number.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is a positive number, else `false`.
   */

  var isPositiveNumber = function isPositiveNumber(value) {
    return value > 0 && value < Infinity;
  };
  /**
   * Check if the given value is undefined.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is undefined, else `false`.
   */

  function isUndefined(value) {
    return typeof value === 'undefined';
  }
  /**
   * Check if the given value is an object.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is an object, else `false`.
   */

  function isObject(value) {
    return _typeof(value) === 'object' && value !== null;
  }
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  /**
   * Check if the given value is a plain object.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is a plain object, else `false`.
   */

  function isPlainObject(value) {
    if (!isObject(value)) {
      return false;
    }

    try {
      var _constructor = value.constructor;
      var prototype = _constructor.prototype;
      return _constructor && prototype && hasOwnProperty.call(prototype, 'isPrototypeOf');
    } catch (error) {
      return false;
    }
  }
  /**
   * Check if the given value is a function.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is a function, else `false`.
   */

  function isFunction(value) {
    return typeof value === 'function';
  }
  var slice = Array.prototype.slice;
  /**
   * Convert array-like or iterable object to an array.
   * @param {*} value - The value to convert.
   * @returns {Array} Returns a new array.
   */

  function toArray(value) {
    return Array.from ? Array.from(value) : slice.call(value);
  }
  /**
   * Iterate the given data.
   * @param {*} data - The data to iterate.
   * @param {Function} callback - The process function for each element.
   * @returns {*} The original data.
   */

  function forEach(data, callback) {
    if (data && isFunction(callback)) {
      if (Array.isArray(data) || isNumber(data.length)
      /* array-like */
      ) {
          toArray(data).forEach(function (value, key) {
            callback.call(data, value, key, data);
          });
        } else if (isObject(data)) {
        Object.keys(data).forEach(function (key) {
          callback.call(data, data[key], key, data);
        });
      }
    }

    return data;
  }
  /**
   * Extend the given object.
   * @param {*} target - The target object to extend.
   * @param {*} args - The rest objects for merging to the target object.
   * @returns {Object} The extended object.
   */

  var assign = Object.assign || function assign(target) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    if (isObject(target) && args.length > 0) {
      args.forEach(function (arg) {
        if (isObject(arg)) {
          Object.keys(arg).forEach(function (key) {
            target[key] = arg[key];
          });
        }
      });
    }

    return target;
  };
  var REGEXP_DECIMALS = /\.\d*(?:0|9){12}\d*$/;
  /**
   * Normalize decimal number.
   * Check out {@link https://0.30000000000000004.com/}
   * @param {number} value - The value to normalize.
   * @param {number} [times=100000000000] - The times for normalizing.
   * @returns {number} Returns the normalized number.
   */

  function normalizeDecimalNumber(value) {
    var times = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100000000000;
    return REGEXP_DECIMALS.test(value) ? Math.round(value * times) / times : value;
  }
  var REGEXP_SUFFIX = /^width|height|left|top|marginLeft|marginTop$/;
  /**
   * Apply styles to the given element.
   * @param {Element} element - The target element.
   * @param {Object} styles - The styles for applying.
   */

  function setStyle(element, styles) {
    var style = element.style;
    forEach(styles, function (value, property) {
      if (REGEXP_SUFFIX.test(property) && isNumber(value)) {
        value = "".concat(value, "px");
      }

      style[property] = value;
    });
  }
  /**
   * Check if the given element has a special class.
   * @param {Element} element - The element to check.
   * @param {string} value - The class to search.
   * @returns {boolean} Returns `true` if the special class was found.
   */

  function hasClass(element, value) {
    return element.classList ? element.classList.contains(value) : element.className.indexOf(value) > -1;
  }
  /**
   * Add classes to the given element.
   * @param {Element} element - The target element.
   * @param {string} value - The classes to be added.
   */

  function addClass(element, value) {
    if (!value) {
      return;
    }

    if (isNumber(element.length)) {
      forEach(element, function (elem) {
        addClass(elem, value);
      });
      return;
    }

    if (element.classList) {
      element.classList.add(value);
      return;
    }

    var className = element.className.trim();

    if (!className) {
      element.className = value;
    } else if (className.indexOf(value) < 0) {
      element.className = "".concat(className, " ").concat(value);
    }
  }
  /**
   * Remove classes from the given element.
   * @param {Element} element - The target element.
   * @param {string} value - The classes to be removed.
   */

  function removeClass(element, value) {
    if (!value) {
      return;
    }

    if (isNumber(element.length)) {
      forEach(element, function (elem) {
        removeClass(elem, value);
      });
      return;
    }

    if (element.classList) {
      element.classList.remove(value);
      return;
    }

    if (element.className.indexOf(value) >= 0) {
      element.className = element.className.replace(value, '');
    }
  }
  /**
   * Add or remove classes from the given element.
   * @param {Element} element - The target element.
   * @param {string} value - The classes to be toggled.
   * @param {boolean} added - Add only.
   */

  function toggleClass(element, value, added) {
    if (!value) {
      return;
    }

    if (isNumber(element.length)) {
      forEach(element, function (elem) {
        toggleClass(elem, value, added);
      });
      return;
    } // IE10-11 doesn't support the second parameter of `classList.toggle`


    if (added) {
      addClass(element, value);
    } else {
      removeClass(element, value);
    }
  }
  var REGEXP_CAMEL_CASE = /([a-z\d])([A-Z])/g;
  /**
   * Transform the given string from camelCase to kebab-case
   * @param {string} value - The value to transform.
   * @returns {string} The transformed value.
   */

  function toParamCase(value) {
    return value.replace(REGEXP_CAMEL_CASE, '$1-$2').toLowerCase();
  }
  /**
   * Get data from the given element.
   * @param {Element} element - The target element.
   * @param {string} name - The data key to get.
   * @returns {string} The data value.
   */

  function getData(element, name) {
    if (isObject(element[name])) {
      return element[name];
    }

    if (element.dataset) {
      return element.dataset[name];
    }

    return element.getAttribute("data-".concat(toParamCase(name)));
  }
  /**
   * Set data to the given element.
   * @param {Element} element - The target element.
   * @param {string} name - The data key to set.
   * @param {string} data - The data value.
   */

  function setData(element, name, data) {
    if (isObject(data)) {
      element[name] = data;
    } else if (element.dataset) {
      element.dataset[name] = data;
    } else {
      element.setAttribute("data-".concat(toParamCase(name)), data);
    }
  }
  /**
   * Remove data from the given element.
   * @param {Element} element - The target element.
   * @param {string} name - The data key to remove.
   */

  function removeData(element, name) {
    if (isObject(element[name])) {
      try {
        delete element[name];
      } catch (error) {
        element[name] = undefined;
      }
    } else if (element.dataset) {
      // #128 Safari not allows to delete dataset property
      try {
        delete element.dataset[name];
      } catch (error) {
        element.dataset[name] = undefined;
      }
    } else {
      element.removeAttribute("data-".concat(toParamCase(name)));
    }
  }
  var REGEXP_SPACES = /\s\s*/;

  var onceSupported = function () {
    var supported = false;

    if (IS_BROWSER) {
      var once = false;

      var listener = function listener() {};

      var options = Object.defineProperty({}, 'once', {
        get: function get() {
          supported = true;
          return once;
        },

        /**
         * This setter can fix a `TypeError` in strict mode
         * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Getter_only}
         * @param {boolean} value - The value to set
         */
        set: function set(value) {
          once = value;
        }
      });
      WINDOW.addEventListener('test', listener, options);
      WINDOW.removeEventListener('test', listener, options);
    }

    return supported;
  }();
  /**
   * Remove event listener from the target element.
   * @param {Element} element - The event target.
   * @param {string} type - The event type(s).
   * @param {Function} listener - The event listener.
   * @param {Object} options - The event options.
   */


  function removeListener(element, type, listener) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    var handler = listener;
    type.trim().split(REGEXP_SPACES).forEach(function (event) {
      if (!onceSupported) {
        var listeners = element.listeners;

        if (listeners && listeners[event] && listeners[event][listener]) {
          handler = listeners[event][listener];
          delete listeners[event][listener];

          if (Object.keys(listeners[event]).length === 0) {
            delete listeners[event];
          }

          if (Object.keys(listeners).length === 0) {
            delete element.listeners;
          }
        }
      }

      element.removeEventListener(event, handler, options);
    });
  }
  /**
   * Add event listener to the target element.
   * @param {Element} element - The event target.
   * @param {string} type - The event type(s).
   * @param {Function} listener - The event listener.
   * @param {Object} options - The event options.
   */

  function addListener(element, type, listener) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    var _handler = listener;
    type.trim().split(REGEXP_SPACES).forEach(function (event) {
      if (options.once && !onceSupported) {
        var _element$listeners = element.listeners,
            listeners = _element$listeners === void 0 ? {} : _element$listeners;

        _handler = function handler() {
          delete listeners[event][listener];
          element.removeEventListener(event, _handler, options);

          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          listener.apply(element, args);
        };

        if (!listeners[event]) {
          listeners[event] = {};
        }

        if (listeners[event][listener]) {
          element.removeEventListener(event, listeners[event][listener], options);
        }

        listeners[event][listener] = _handler;
        element.listeners = listeners;
      }

      element.addEventListener(event, _handler, options);
    });
  }
  /**
   * Dispatch event on the target element.
   * @param {Element} element - The event target.
   * @param {string} type - The event type(s).
   * @param {Object} data - The additional event data.
   * @returns {boolean} Indicate if the event is default prevented or not.
   */

  function dispatchEvent(element, type, data) {
    var event; // Event and CustomEvent on IE9-11 are global objects, not constructors

    if (isFunction(Event) && isFunction(CustomEvent)) {
      event = new CustomEvent(type, {
        detail: data,
        bubbles: true,
        cancelable: true
      });
    } else {
      event = document.createEvent('CustomEvent');
      event.initCustomEvent(type, true, true, data);
    }

    return element.dispatchEvent(event);
  }
  /**
   * Get the offset base on the document.
   * @param {Element} element - The target element.
   * @returns {Object} The offset data.
   */

  function getOffset(element) {
    var box = element.getBoundingClientRect();
    return {
      left: box.left + (window.pageXOffset - document.documentElement.clientLeft),
      top: box.top + (window.pageYOffset - document.documentElement.clientTop)
    };
  }
  var location = WINDOW.location;
  var REGEXP_ORIGINS = /^(\w+:)\/\/([^:/?#]*):?(\d*)/i;
  /**
   * Check if the given URL is a cross origin URL.
   * @param {string} url - The target URL.
   * @returns {boolean} Returns `true` if the given URL is a cross origin URL, else `false`.
   */

  function isCrossOriginURL(url) {
    var parts = url.match(REGEXP_ORIGINS);
    return parts !== null && (parts[1] !== location.protocol || parts[2] !== location.hostname || parts[3] !== location.port);
  }
  /**
   * Add timestamp to the given URL.
   * @param {string} url - The target URL.
   * @returns {string} The result URL.
   */

  function addTimestamp(url) {
    var timestamp = "timestamp=".concat(new Date().getTime());
    return url + (url.indexOf('?') === -1 ? '?' : '&') + timestamp;
  }
  /**
   * Get transforms base on the given object.
   * @param {Object} obj - The target object.
   * @returns {string} A string contains transform values.
   */

  function getTransforms(_ref) {
    var rotate = _ref.rotate,
        scaleX = _ref.scaleX,
        scaleY = _ref.scaleY,
        translateX = _ref.translateX,
        translateY = _ref.translateY;
    var values = [];

    if (isNumber(translateX) && translateX !== 0) {
      values.push("translateX(".concat(translateX, "px)"));
    }

    if (isNumber(translateY) && translateY !== 0) {
      values.push("translateY(".concat(translateY, "px)"));
    } // Rotate should come first before scale to match orientation transform


    if (isNumber(rotate) && rotate !== 0) {
      values.push("rotate(".concat(rotate, "deg)"));
    }

    if (isNumber(scaleX) && scaleX !== 1) {
      values.push("scaleX(".concat(scaleX, ")"));
    }

    if (isNumber(scaleY) && scaleY !== 1) {
      values.push("scaleY(".concat(scaleY, ")"));
    }

    var transform = values.length ? values.join(' ') : 'none';
    return {
      WebkitTransform: transform,
      msTransform: transform,
      transform: transform
    };
  }
  /**
   * Get the max ratio of a group of pointers.
   * @param {string} pointers - The target pointers.
   * @returns {number} The result ratio.
   */

  function getMaxZoomRatio(pointers) {
    var pointers2 = _objectSpread2({}, pointers);

    var maxRatio = 0;
    forEach(pointers, function (pointer, pointerId) {
      delete pointers2[pointerId];
      forEach(pointers2, function (pointer2) {
        var x1 = Math.abs(pointer.startX - pointer2.startX);
        var y1 = Math.abs(pointer.startY - pointer2.startY);
        var x2 = Math.abs(pointer.endX - pointer2.endX);
        var y2 = Math.abs(pointer.endY - pointer2.endY);
        var z1 = Math.sqrt(x1 * x1 + y1 * y1);
        var z2 = Math.sqrt(x2 * x2 + y2 * y2);
        var ratio = (z2 - z1) / z1;

        if (Math.abs(ratio) > Math.abs(maxRatio)) {
          maxRatio = ratio;
        }
      });
    });
    return maxRatio;
  }
  /**
   * Get a pointer from an event object.
   * @param {Object} event - The target event object.
   * @param {boolean} endOnly - Indicates if only returns the end point coordinate or not.
   * @returns {Object} The result pointer contains start and/or end point coordinates.
   */

  function getPointer(_ref2, endOnly) {
    var pageX = _ref2.pageX,
        pageY = _ref2.pageY;
    var end = {
      endX: pageX,
      endY: pageY
    };
    return endOnly ? end : _objectSpread2({
      startX: pageX,
      startY: pageY
    }, end);
  }
  /**
   * Get the center point coordinate of a group of pointers.
   * @param {Object} pointers - The target pointers.
   * @returns {Object} The center point coordinate.
   */

  function getPointersCenter(pointers) {
    var pageX = 0;
    var pageY = 0;
    var count = 0;
    forEach(pointers, function (_ref3) {
      var startX = _ref3.startX,
          startY = _ref3.startY;
      pageX += startX;
      pageY += startY;
      count += 1;
    });
    pageX /= count;
    pageY /= count;
    return {
      pageX: pageX,
      pageY: pageY
    };
  }
  /**
   * Get the max sizes in a rectangle under the given aspect ratio.
   * @param {Object} data - The original sizes.
   * @param {string} [type='contain'] - The adjust type.
   * @returns {Object} The result sizes.
   */

  function getAdjustedSizes(_ref4) // or 'cover'
  {
    var aspectRatio = _ref4.aspectRatio,
        height = _ref4.height,
        width = _ref4.width;
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'contain';
    var isValidWidth = isPositiveNumber(width);
    var isValidHeight = isPositiveNumber(height);

    if (isValidWidth && isValidHeight) {
      var adjustedWidth = height * aspectRatio;

      if (type === 'contain' && adjustedWidth > width || type === 'cover' && adjustedWidth < width) {
        height = width / aspectRatio;
      } else {
        width = height * aspectRatio;
      }
    } else if (isValidWidth) {
      height = width / aspectRatio;
    } else if (isValidHeight) {
      width = height * aspectRatio;
    }

    return {
      width: width,
      height: height
    };
  }
  /**
   * Get the new sizes of a rectangle after rotated.
   * @param {Object} data - The original sizes.
   * @returns {Object} The result sizes.
   */

  function getRotatedSizes(_ref5) {
    var width = _ref5.width,
        height = _ref5.height,
        degree = _ref5.degree;
    degree = Math.abs(degree) % 180;

    if (degree === 90) {
      return {
        width: height,
        height: width
      };
    }

    var arc = degree % 90 * Math.PI / 180;
    var sinArc = Math.sin(arc);
    var cosArc = Math.cos(arc);
    var newWidth = width * cosArc + height * sinArc;
    var newHeight = width * sinArc + height * cosArc;
    return degree > 90 ? {
      width: newHeight,
      height: newWidth
    } : {
      width: newWidth,
      height: newHeight
    };
  }
  /**
   * Get a canvas which drew the given image.
   * @param {HTMLImageElement} image - The image for drawing.
   * @param {Object} imageData - The image data.
   * @param {Object} canvasData - The canvas data.
   * @param {Object} options - The options.
   * @returns {HTMLCanvasElement} The result canvas.
   */

  function getSourceCanvas(image, _ref6, _ref7, _ref8) {
    var imageAspectRatio = _ref6.aspectRatio,
        imageNaturalWidth = _ref6.naturalWidth,
        imageNaturalHeight = _ref6.naturalHeight,
        _ref6$rotate = _ref6.rotate,
        rotate = _ref6$rotate === void 0 ? 0 : _ref6$rotate,
        _ref6$scaleX = _ref6.scaleX,
        scaleX = _ref6$scaleX === void 0 ? 1 : _ref6$scaleX,
        _ref6$scaleY = _ref6.scaleY,
        scaleY = _ref6$scaleY === void 0 ? 1 : _ref6$scaleY;
    var aspectRatio = _ref7.aspectRatio,
        naturalWidth = _ref7.naturalWidth,
        naturalHeight = _ref7.naturalHeight;
    var _ref8$fillColor = _ref8.fillColor,
        fillColor = _ref8$fillColor === void 0 ? 'transparent' : _ref8$fillColor,
        _ref8$imageSmoothingE = _ref8.imageSmoothingEnabled,
        imageSmoothingEnabled = _ref8$imageSmoothingE === void 0 ? true : _ref8$imageSmoothingE,
        _ref8$imageSmoothingQ = _ref8.imageSmoothingQuality,
        imageSmoothingQuality = _ref8$imageSmoothingQ === void 0 ? 'low' : _ref8$imageSmoothingQ,
        _ref8$maxWidth = _ref8.maxWidth,
        maxWidth = _ref8$maxWidth === void 0 ? Infinity : _ref8$maxWidth,
        _ref8$maxHeight = _ref8.maxHeight,
        maxHeight = _ref8$maxHeight === void 0 ? Infinity : _ref8$maxHeight,
        _ref8$minWidth = _ref8.minWidth,
        minWidth = _ref8$minWidth === void 0 ? 0 : _ref8$minWidth,
        _ref8$minHeight = _ref8.minHeight,
        minHeight = _ref8$minHeight === void 0 ? 0 : _ref8$minHeight;
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    var maxSizes = getAdjustedSizes({
      aspectRatio: aspectRatio,
      width: maxWidth,
      height: maxHeight
    });
    var minSizes = getAdjustedSizes({
      aspectRatio: aspectRatio,
      width: minWidth,
      height: minHeight
    }, 'cover');
    var width = Math.min(maxSizes.width, Math.max(minSizes.width, naturalWidth));
    var height = Math.min(maxSizes.height, Math.max(minSizes.height, naturalHeight)); // Note: should always use image's natural sizes for drawing as
    // imageData.naturalWidth === canvasData.naturalHeight when rotate % 180 === 90

    var destMaxSizes = getAdjustedSizes({
      aspectRatio: imageAspectRatio,
      width: maxWidth,
      height: maxHeight
    });
    var destMinSizes = getAdjustedSizes({
      aspectRatio: imageAspectRatio,
      width: minWidth,
      height: minHeight
    }, 'cover');
    var destWidth = Math.min(destMaxSizes.width, Math.max(destMinSizes.width, imageNaturalWidth));
    var destHeight = Math.min(destMaxSizes.height, Math.max(destMinSizes.height, imageNaturalHeight));
    var params = [-destWidth / 2, -destHeight / 2, destWidth, destHeight];
    canvas.width = normalizeDecimalNumber(width);
    canvas.height = normalizeDecimalNumber(height);
    context.fillStyle = fillColor;
    context.fillRect(0, 0, width, height);
    context.save();
    context.translate(width / 2, height / 2);
    context.rotate(rotate * Math.PI / 180);
    context.scale(scaleX, scaleY);
    context.imageSmoothingEnabled = imageSmoothingEnabled;
    context.imageSmoothingQuality = imageSmoothingQuality;
    context.drawImage.apply(context, [image].concat(_toConsumableArray(params.map(function (param) {
      return Math.floor(normalizeDecimalNumber(param));
    }))));
    context.restore();
    return canvas;
  }
  var fromCharCode = String.fromCharCode;
  /**
   * Get string from char code in data view.
   * @param {DataView} dataView - The data view for read.
   * @param {number} start - The start index.
   * @param {number} length - The read length.
   * @returns {string} The read result.
   */

  function getStringFromCharCode(dataView, start, length) {
    var str = '';
    length += start;

    for (var i = start; i < length; i += 1) {
      str += fromCharCode(dataView.getUint8(i));
    }

    return str;
  }
  var REGEXP_DATA_URL_HEAD = /^data:.*,/;
  /**
   * Transform Data URL to array buffer.
   * @param {string} dataURL - The Data URL to transform.
   * @returns {ArrayBuffer} The result array buffer.
   */

  function dataURLToArrayBuffer(dataURL) {
    var base64 = dataURL.replace(REGEXP_DATA_URL_HEAD, '');
    var binary = atob(base64);
    var arrayBuffer = new ArrayBuffer(binary.length);
    var uint8 = new Uint8Array(arrayBuffer);
    forEach(uint8, function (value, i) {
      uint8[i] = binary.charCodeAt(i);
    });
    return arrayBuffer;
  }
  /**
   * Transform array buffer to Data URL.
   * @param {ArrayBuffer} arrayBuffer - The array buffer to transform.
   * @param {string} mimeType - The mime type of the Data URL.
   * @returns {string} The result Data URL.
   */

  function arrayBufferToDataURL(arrayBuffer, mimeType) {
    var chunks = []; // Chunk Typed Array for better performance (#435)

    var chunkSize = 8192;
    var uint8 = new Uint8Array(arrayBuffer);

    while (uint8.length > 0) {
      // XXX: Babel's `toConsumableArray` helper will throw error in IE or Safari 9
      // eslint-disable-next-line prefer-spread
      chunks.push(fromCharCode.apply(null, toArray(uint8.subarray(0, chunkSize))));
      uint8 = uint8.subarray(chunkSize);
    }

    return "data:".concat(mimeType, ";base64,").concat(btoa(chunks.join('')));
  }
  /**
   * Get orientation value from given array buffer.
   * @param {ArrayBuffer} arrayBuffer - The array buffer to read.
   * @returns {number} The read orientation value.
   */

  function resetAndGetOrientation(arrayBuffer) {
    var dataView = new DataView(arrayBuffer);
    var orientation; // Ignores range error when the image does not have correct Exif information

    try {
      var littleEndian;
      var app1Start;
      var ifdStart; // Only handle JPEG image (start by 0xFFD8)

      if (dataView.getUint8(0) === 0xFF && dataView.getUint8(1) === 0xD8) {
        var length = dataView.byteLength;
        var offset = 2;

        while (offset + 1 < length) {
          if (dataView.getUint8(offset) === 0xFF && dataView.getUint8(offset + 1) === 0xE1) {
            app1Start = offset;
            break;
          }

          offset += 1;
        }
      }

      if (app1Start) {
        var exifIDCode = app1Start + 4;
        var tiffOffset = app1Start + 10;

        if (getStringFromCharCode(dataView, exifIDCode, 4) === 'Exif') {
          var endianness = dataView.getUint16(tiffOffset);
          littleEndian = endianness === 0x4949;

          if (littleEndian || endianness === 0x4D4D
          /* bigEndian */
          ) {
              if (dataView.getUint16(tiffOffset + 2, littleEndian) === 0x002A) {
                var firstIFDOffset = dataView.getUint32(tiffOffset + 4, littleEndian);

                if (firstIFDOffset >= 0x00000008) {
                  ifdStart = tiffOffset + firstIFDOffset;
                }
              }
            }
        }
      }

      if (ifdStart) {
        var _length = dataView.getUint16(ifdStart, littleEndian);

        var _offset;

        var i;

        for (i = 0; i < _length; i += 1) {
          _offset = ifdStart + i * 12 + 2;

          if (dataView.getUint16(_offset, littleEndian) === 0x0112
          /* Orientation */
          ) {
              // 8 is the offset of the current tag's value
              _offset += 8; // Get the original orientation value

              orientation = dataView.getUint16(_offset, littleEndian); // Override the orientation with its default value

              dataView.setUint16(_offset, 1, littleEndian);
              break;
            }
        }
      }
    } catch (error) {
      orientation = 1;
    }

    return orientation;
  }
  /**
   * Parse Exif Orientation value.
   * @param {number} orientation - The orientation to parse.
   * @returns {Object} The parsed result.
   */

  function parseOrientation(orientation) {
    var rotate = 0;
    var scaleX = 1;
    var scaleY = 1;

    switch (orientation) {
      // Flip horizontal
      case 2:
        scaleX = -1;
        break;
      // Rotate left 180°

      case 3:
        rotate = -180;
        break;
      // Flip vertical

      case 4:
        scaleY = -1;
        break;
      // Flip vertical and rotate right 90°

      case 5:
        rotate = 90;
        scaleY = -1;
        break;
      // Rotate right 90°

      case 6:
        rotate = 90;
        break;
      // Flip horizontal and rotate right 90°

      case 7:
        rotate = 90;
        scaleX = -1;
        break;
      // Rotate left 90°

      case 8:
        rotate = -90;
        break;
    }

    return {
      rotate: rotate,
      scaleX: scaleX,
      scaleY: scaleY
    };
  }

  var render = {
    render: function render() {
      this.initContainer();
      this.initCanvas();
      this.initCropBox();
      this.renderCanvas();

      if (this.cropped) {
        this.renderCropBox();
      }
    },
    initContainer: function initContainer() {
      var element = this.element,
          options = this.options,
          container = this.container,
          cropper = this.cropper;
      var minWidth = Number(options.minContainerWidth);
      var minHeight = Number(options.minContainerHeight);
      addClass(cropper, CLASS_HIDDEN);
      removeClass(element, CLASS_HIDDEN);
      var containerData = {
        width: Math.max(container.offsetWidth, minWidth >= 0 ? minWidth : MIN_CONTAINER_WIDTH),
        height: Math.max(container.offsetHeight, minHeight >= 0 ? minHeight : MIN_CONTAINER_HEIGHT)
      };
      this.containerData = containerData;
      setStyle(cropper, {
        width: containerData.width,
        height: containerData.height
      });
      addClass(element, CLASS_HIDDEN);
      removeClass(cropper, CLASS_HIDDEN);
    },
    // Canvas (image wrapper)
    initCanvas: function initCanvas() {
      var containerData = this.containerData,
          imageData = this.imageData;
      var viewMode = this.options.viewMode;
      var rotated = Math.abs(imageData.rotate) % 180 === 90;
      var naturalWidth = rotated ? imageData.naturalHeight : imageData.naturalWidth;
      var naturalHeight = rotated ? imageData.naturalWidth : imageData.naturalHeight;
      var aspectRatio = naturalWidth / naturalHeight;
      var canvasWidth = containerData.width;
      var canvasHeight = containerData.height;

      if (containerData.height * aspectRatio > containerData.width) {
        if (viewMode === 3) {
          canvasWidth = containerData.height * aspectRatio;
        } else {
          canvasHeight = containerData.width / aspectRatio;
        }
      } else if (viewMode === 3) {
        canvasHeight = containerData.width / aspectRatio;
      } else {
        canvasWidth = containerData.height * aspectRatio;
      }

      var canvasData = {
        aspectRatio: aspectRatio,
        naturalWidth: naturalWidth,
        naturalHeight: naturalHeight,
        width: canvasWidth,
        height: canvasHeight
      };
      this.canvasData = canvasData;
      this.limited = viewMode === 1 || viewMode === 2;
      this.limitCanvas(true, true);
      canvasData.width = Math.min(Math.max(canvasData.width, canvasData.minWidth), canvasData.maxWidth);
      canvasData.height = Math.min(Math.max(canvasData.height, canvasData.minHeight), canvasData.maxHeight);
      canvasData.left = (containerData.width - canvasData.width) / 2;
      canvasData.top = (containerData.height - canvasData.height) / 2;
      canvasData.oldLeft = canvasData.left;
      canvasData.oldTop = canvasData.top;
      this.initialCanvasData = assign({}, canvasData);
    },
    limitCanvas: function limitCanvas(sizeLimited, positionLimited) {
      var options = this.options,
          containerData = this.containerData,
          canvasData = this.canvasData,
          cropBoxData = this.cropBoxData;
      var viewMode = options.viewMode;
      var aspectRatio = canvasData.aspectRatio;
      var cropped = this.cropped && cropBoxData;

      if (sizeLimited) {
        var minCanvasWidth = Number(options.minCanvasWidth) || 0;
        var minCanvasHeight = Number(options.minCanvasHeight) || 0;

        if (viewMode > 1) {
          minCanvasWidth = Math.max(minCanvasWidth, containerData.width);
          minCanvasHeight = Math.max(minCanvasHeight, containerData.height);

          if (viewMode === 3) {
            if (minCanvasHeight * aspectRatio > minCanvasWidth) {
              minCanvasWidth = minCanvasHeight * aspectRatio;
            } else {
              minCanvasHeight = minCanvasWidth / aspectRatio;
            }
          }
        } else if (viewMode > 0) {
          if (minCanvasWidth) {
            minCanvasWidth = Math.max(minCanvasWidth, cropped ? cropBoxData.width : 0);
          } else if (minCanvasHeight) {
            minCanvasHeight = Math.max(minCanvasHeight, cropped ? cropBoxData.height : 0);
          } else if (cropped) {
            minCanvasWidth = cropBoxData.width;
            minCanvasHeight = cropBoxData.height;

            if (minCanvasHeight * aspectRatio > minCanvasWidth) {
              minCanvasWidth = minCanvasHeight * aspectRatio;
            } else {
              minCanvasHeight = minCanvasWidth / aspectRatio;
            }
          }
        }

        var _getAdjustedSizes = getAdjustedSizes({
          aspectRatio: aspectRatio,
          width: minCanvasWidth,
          height: minCanvasHeight
        });

        minCanvasWidth = _getAdjustedSizes.width;
        minCanvasHeight = _getAdjustedSizes.height;
        canvasData.minWidth = minCanvasWidth;
        canvasData.minHeight = minCanvasHeight;
        canvasData.maxWidth = Infinity;
        canvasData.maxHeight = Infinity;
      }

      if (positionLimited) {
        if (viewMode > (cropped ? 0 : 1)) {
          var newCanvasLeft = containerData.width - canvasData.width;
          var newCanvasTop = containerData.height - canvasData.height;
          canvasData.minLeft = Math.min(0, newCanvasLeft);
          canvasData.minTop = Math.min(0, newCanvasTop);
          canvasData.maxLeft = Math.max(0, newCanvasLeft);
          canvasData.maxTop = Math.max(0, newCanvasTop);

          if (cropped && this.limited) {
            canvasData.minLeft = Math.min(cropBoxData.left, cropBoxData.left + (cropBoxData.width - canvasData.width));
            canvasData.minTop = Math.min(cropBoxData.top, cropBoxData.top + (cropBoxData.height - canvasData.height));
            canvasData.maxLeft = cropBoxData.left;
            canvasData.maxTop = cropBoxData.top;

            if (viewMode === 2) {
              if (canvasData.width >= containerData.width) {
                canvasData.minLeft = Math.min(0, newCanvasLeft);
                canvasData.maxLeft = Math.max(0, newCanvasLeft);
              }

              if (canvasData.height >= containerData.height) {
                canvasData.minTop = Math.min(0, newCanvasTop);
                canvasData.maxTop = Math.max(0, newCanvasTop);
              }
            }
          }
        } else {
          canvasData.minLeft = -canvasData.width;
          canvasData.minTop = -canvasData.height;
          canvasData.maxLeft = containerData.width;
          canvasData.maxTop = containerData.height;
        }
      }
    },
    renderCanvas: function renderCanvas(changed, transformed) {
      var canvasData = this.canvasData,
          imageData = this.imageData;

      if (transformed) {
        var _getRotatedSizes = getRotatedSizes({
          width: imageData.naturalWidth * Math.abs(imageData.scaleX || 1),
          height: imageData.naturalHeight * Math.abs(imageData.scaleY || 1),
          degree: imageData.rotate || 0
        }),
            naturalWidth = _getRotatedSizes.width,
            naturalHeight = _getRotatedSizes.height;

        var width = canvasData.width * (naturalWidth / canvasData.naturalWidth);
        var height = canvasData.height * (naturalHeight / canvasData.naturalHeight);
        canvasData.left -= (width - canvasData.width) / 2;
        canvasData.top -= (height - canvasData.height) / 2;
        canvasData.width = width;
        canvasData.height = height;
        canvasData.aspectRatio = naturalWidth / naturalHeight;
        canvasData.naturalWidth = naturalWidth;
        canvasData.naturalHeight = naturalHeight;
        this.limitCanvas(true, false);
      }

      if (canvasData.width > canvasData.maxWidth || canvasData.width < canvasData.minWidth) {
        canvasData.left = canvasData.oldLeft;
      }

      if (canvasData.height > canvasData.maxHeight || canvasData.height < canvasData.minHeight) {
        canvasData.top = canvasData.oldTop;
      }

      canvasData.width = Math.min(Math.max(canvasData.width, canvasData.minWidth), canvasData.maxWidth);
      canvasData.height = Math.min(Math.max(canvasData.height, canvasData.minHeight), canvasData.maxHeight);
      this.limitCanvas(false, true);
      canvasData.left = Math.min(Math.max(canvasData.left, canvasData.minLeft), canvasData.maxLeft);
      canvasData.top = Math.min(Math.max(canvasData.top, canvasData.minTop), canvasData.maxTop);
      canvasData.oldLeft = canvasData.left;
      canvasData.oldTop = canvasData.top;
      setStyle(this.canvas, assign({
        width: canvasData.width,
        height: canvasData.height
      }, getTransforms({
        translateX: canvasData.left,
        translateY: canvasData.top
      })));
      this.renderImage(changed);

      if (this.cropped && this.limited) {
        this.limitCropBox(true, true);
      }
    },
    renderImage: function renderImage(changed) {
      var canvasData = this.canvasData,
          imageData = this.imageData;
      var width = imageData.naturalWidth * (canvasData.width / canvasData.naturalWidth);
      var height = imageData.naturalHeight * (canvasData.height / canvasData.naturalHeight);
      assign(imageData, {
        width: width,
        height: height,
        left: (canvasData.width - width) / 2,
        top: (canvasData.height - height) / 2
      });
      setStyle(this.image, assign({
        width: imageData.width,
        height: imageData.height
      }, getTransforms(assign({
        translateX: imageData.left,
        translateY: imageData.top
      }, imageData))));

      if (changed) {
        this.output();
      }
    },
    initCropBox: function initCropBox() {
      var options = this.options,
          canvasData = this.canvasData;
      var aspectRatio = options.aspectRatio || options.initialAspectRatio;
      var autoCropArea = Number(options.autoCropArea) || 0.8;
      var cropBoxData = {
        width: canvasData.width,
        height: canvasData.height
      };

      if (aspectRatio) {
        if (canvasData.height * aspectRatio > canvasData.width) {
          cropBoxData.height = cropBoxData.width / aspectRatio;
        } else {
          cropBoxData.width = cropBoxData.height * aspectRatio;
        }
      }

      this.cropBoxData = cropBoxData;
      this.limitCropBox(true, true); // Initialize auto crop area

      cropBoxData.width = Math.min(Math.max(cropBoxData.width, cropBoxData.minWidth), cropBoxData.maxWidth);
      cropBoxData.height = Math.min(Math.max(cropBoxData.height, cropBoxData.minHeight), cropBoxData.maxHeight); // The width/height of auto crop area must large than "minWidth/Height"

      cropBoxData.width = Math.max(cropBoxData.minWidth, cropBoxData.width * autoCropArea);
      cropBoxData.height = Math.max(cropBoxData.minHeight, cropBoxData.height * autoCropArea);
      cropBoxData.left = canvasData.left + (canvasData.width - cropBoxData.width) / 2;
      cropBoxData.top = canvasData.top + (canvasData.height - cropBoxData.height) / 2;
      cropBoxData.oldLeft = cropBoxData.left;
      cropBoxData.oldTop = cropBoxData.top;
      this.initialCropBoxData = assign({}, cropBoxData);
    },
    limitCropBox: function limitCropBox(sizeLimited, positionLimited) {
      var options = this.options,
          containerData = this.containerData,
          canvasData = this.canvasData,
          cropBoxData = this.cropBoxData,
          limited = this.limited;
      var aspectRatio = options.aspectRatio;

      if (sizeLimited) {
        var minCropBoxWidth = Number(options.minCropBoxWidth) || 0;
        var minCropBoxHeight = Number(options.minCropBoxHeight) || 0;
        var maxCropBoxWidth = limited ? Math.min(containerData.width, canvasData.width, canvasData.width + canvasData.left, containerData.width - canvasData.left) : containerData.width;
        var maxCropBoxHeight = limited ? Math.min(containerData.height, canvasData.height, canvasData.height + canvasData.top, containerData.height - canvasData.top) : containerData.height; // The min/maxCropBoxWidth/Height must be less than container's width/height

        minCropBoxWidth = Math.min(minCropBoxWidth, containerData.width);
        minCropBoxHeight = Math.min(minCropBoxHeight, containerData.height);

        if (aspectRatio) {
          if (minCropBoxWidth && minCropBoxHeight) {
            if (minCropBoxHeight * aspectRatio > minCropBoxWidth) {
              minCropBoxHeight = minCropBoxWidth / aspectRatio;
            } else {
              minCropBoxWidth = minCropBoxHeight * aspectRatio;
            }
          } else if (minCropBoxWidth) {
            minCropBoxHeight = minCropBoxWidth / aspectRatio;
          } else if (minCropBoxHeight) {
            minCropBoxWidth = minCropBoxHeight * aspectRatio;
          }

          if (maxCropBoxHeight * aspectRatio > maxCropBoxWidth) {
            maxCropBoxHeight = maxCropBoxWidth / aspectRatio;
          } else {
            maxCropBoxWidth = maxCropBoxHeight * aspectRatio;
          }
        } // The minWidth/Height must be less than maxWidth/Height


        cropBoxData.minWidth = Math.min(minCropBoxWidth, maxCropBoxWidth);
        cropBoxData.minHeight = Math.min(minCropBoxHeight, maxCropBoxHeight);
        cropBoxData.maxWidth = maxCropBoxWidth;
        cropBoxData.maxHeight = maxCropBoxHeight;
      }

      if (positionLimited) {
        if (limited) {
          cropBoxData.minLeft = Math.max(0, canvasData.left);
          cropBoxData.minTop = Math.max(0, canvasData.top);
          cropBoxData.maxLeft = Math.min(containerData.width, canvasData.left + canvasData.width) - cropBoxData.width;
          cropBoxData.maxTop = Math.min(containerData.height, canvasData.top + canvasData.height) - cropBoxData.height;
        } else {
          cropBoxData.minLeft = 0;
          cropBoxData.minTop = 0;
          cropBoxData.maxLeft = containerData.width - cropBoxData.width;
          cropBoxData.maxTop = containerData.height - cropBoxData.height;
        }
      }
    },
    renderCropBox: function renderCropBox() {
      var options = this.options,
          containerData = this.containerData,
          cropBoxData = this.cropBoxData;

      if (cropBoxData.width > cropBoxData.maxWidth || cropBoxData.width < cropBoxData.minWidth) {
        cropBoxData.left = cropBoxData.oldLeft;
      }

      if (cropBoxData.height > cropBoxData.maxHeight || cropBoxData.height < cropBoxData.minHeight) {
        cropBoxData.top = cropBoxData.oldTop;
      }

      cropBoxData.width = Math.min(Math.max(cropBoxData.width, cropBoxData.minWidth), cropBoxData.maxWidth);
      cropBoxData.height = Math.min(Math.max(cropBoxData.height, cropBoxData.minHeight), cropBoxData.maxHeight);
      this.limitCropBox(false, true);
      cropBoxData.left = Math.min(Math.max(cropBoxData.left, cropBoxData.minLeft), cropBoxData.maxLeft);
      cropBoxData.top = Math.min(Math.max(cropBoxData.top, cropBoxData.minTop), cropBoxData.maxTop);
      cropBoxData.oldLeft = cropBoxData.left;
      cropBoxData.oldTop = cropBoxData.top;

      if (options.movable && options.cropBoxMovable) {
        // Turn to move the canvas when the crop box is equal to the container
        setData(this.face, DATA_ACTION, cropBoxData.width >= containerData.width && cropBoxData.height >= containerData.height ? ACTION_MOVE : ACTION_ALL);
      }

      setStyle(this.cropBox, assign({
        width: cropBoxData.width,
        height: cropBoxData.height
      }, getTransforms({
        translateX: cropBoxData.left,
        translateY: cropBoxData.top
      })));

      if (this.cropped && this.limited) {
        this.limitCanvas(true, true);
      }

      if (!this.disabled) {
        this.output();
      }
    },
    output: function output() {
      this.preview();
      dispatchEvent(this.element, EVENT_CROP, this.getData());
    }
  };

  var preview = {
    initPreview: function initPreview() {
      var element = this.element,
          crossOrigin = this.crossOrigin;
      var preview = this.options.preview;
      var url = crossOrigin ? this.crossOriginUrl : this.url;
      var alt = element.alt || 'The image to preview';
      var image = document.createElement('img');

      if (crossOrigin) {
        image.crossOrigin = crossOrigin;
      }

      image.src = url;
      image.alt = alt;
      this.viewBox.appendChild(image);
      this.viewBoxImage = image;

      if (!preview) {
        return;
      }

      var previews = preview;

      if (typeof preview === 'string') {
        previews = element.ownerDocument.querySelectorAll(preview);
      } else if (preview.querySelector) {
        previews = [preview];
      }

      this.previews = previews;
      forEach(previews, function (el) {
        var img = document.createElement('img'); // Save the original size for recover

        setData(el, DATA_PREVIEW, {
          width: el.offsetWidth,
          height: el.offsetHeight,
          html: el.innerHTML
        });

        if (crossOrigin) {
          img.crossOrigin = crossOrigin;
        }

        img.src = url;
        img.alt = alt;
        /**
         * Override img element styles
         * Add `display:block` to avoid margin top issue
         * Add `height:auto` to override `height` attribute on IE8
         * (Occur only when margin-top <= -height)
         */

        img.style.cssText = 'display:block;' + 'width:100%;' + 'height:auto;' + 'min-width:0!important;' + 'min-height:0!important;' + 'max-width:none!important;' + 'max-height:none!important;' + 'image-orientation:0deg!important;"';
        el.innerHTML = '';
        el.appendChild(img);
      });
    },
    resetPreview: function resetPreview() {
      forEach(this.previews, function (element) {
        var data = getData(element, DATA_PREVIEW);
        setStyle(element, {
          width: data.width,
          height: data.height
        });
        element.innerHTML = data.html;
        removeData(element, DATA_PREVIEW);
      });
    },
    preview: function preview() {
      var imageData = this.imageData,
          canvasData = this.canvasData,
          cropBoxData = this.cropBoxData;
      var cropBoxWidth = cropBoxData.width,
          cropBoxHeight = cropBoxData.height;
      var width = imageData.width,
          height = imageData.height;
      var left = cropBoxData.left - canvasData.left - imageData.left;
      var top = cropBoxData.top - canvasData.top - imageData.top;

      if (!this.cropped || this.disabled) {
        return;
      }

      setStyle(this.viewBoxImage, assign({
        width: width,
        height: height
      }, getTransforms(assign({
        translateX: -left,
        translateY: -top
      }, imageData))));
      forEach(this.previews, function (element) {
        var data = getData(element, DATA_PREVIEW);
        var originalWidth = data.width;
        var originalHeight = data.height;
        var newWidth = originalWidth;
        var newHeight = originalHeight;
        var ratio = 1;

        if (cropBoxWidth) {
          ratio = originalWidth / cropBoxWidth;
          newHeight = cropBoxHeight * ratio;
        }

        if (cropBoxHeight && newHeight > originalHeight) {
          ratio = originalHeight / cropBoxHeight;
          newWidth = cropBoxWidth * ratio;
          newHeight = originalHeight;
        }

        setStyle(element, {
          width: newWidth,
          height: newHeight
        });
        setStyle(element.getElementsByTagName('img')[0], assign({
          width: width * ratio,
          height: height * ratio
        }, getTransforms(assign({
          translateX: -left * ratio,
          translateY: -top * ratio
        }, imageData))));
      });
    }
  };

  var events = {
    bind: function bind() {
      var element = this.element,
          options = this.options,
          cropper = this.cropper;

      if (isFunction(options.cropstart)) {
        addListener(element, EVENT_CROP_START, options.cropstart);
      }

      if (isFunction(options.cropmove)) {
        addListener(element, EVENT_CROP_MOVE, options.cropmove);
      }

      if (isFunction(options.cropend)) {
        addListener(element, EVENT_CROP_END, options.cropend);
      }

      if (isFunction(options.crop)) {
        addListener(element, EVENT_CROP, options.crop);
      }

      if (isFunction(options.zoom)) {
        addListener(element, EVENT_ZOOM, options.zoom);
      }

      addListener(cropper, EVENT_POINTER_DOWN, this.onCropStart = this.cropStart.bind(this));

      if (options.zoomable && options.zoomOnWheel) {
        addListener(cropper, EVENT_WHEEL, this.onWheel = this.wheel.bind(this), {
          passive: false,
          capture: true
        });
      }

      if (options.toggleDragModeOnDblclick) {
        addListener(cropper, EVENT_DBLCLICK, this.onDblclick = this.dblclick.bind(this));
      }

      addListener(element.ownerDocument, EVENT_POINTER_MOVE, this.onCropMove = this.cropMove.bind(this));
      addListener(element.ownerDocument, EVENT_POINTER_UP, this.onCropEnd = this.cropEnd.bind(this));

      if (options.responsive) {
        addListener(window, EVENT_RESIZE, this.onResize = this.resize.bind(this));
      }
    },
    unbind: function unbind() {
      var element = this.element,
          options = this.options,
          cropper = this.cropper;

      if (isFunction(options.cropstart)) {
        removeListener(element, EVENT_CROP_START, options.cropstart);
      }

      if (isFunction(options.cropmove)) {
        removeListener(element, EVENT_CROP_MOVE, options.cropmove);
      }

      if (isFunction(options.cropend)) {
        removeListener(element, EVENT_CROP_END, options.cropend);
      }

      if (isFunction(options.crop)) {
        removeListener(element, EVENT_CROP, options.crop);
      }

      if (isFunction(options.zoom)) {
        removeListener(element, EVENT_ZOOM, options.zoom);
      }

      removeListener(cropper, EVENT_POINTER_DOWN, this.onCropStart);

      if (options.zoomable && options.zoomOnWheel) {
        removeListener(cropper, EVENT_WHEEL, this.onWheel, {
          passive: false,
          capture: true
        });
      }

      if (options.toggleDragModeOnDblclick) {
        removeListener(cropper, EVENT_DBLCLICK, this.onDblclick);
      }

      removeListener(element.ownerDocument, EVENT_POINTER_MOVE, this.onCropMove);
      removeListener(element.ownerDocument, EVENT_POINTER_UP, this.onCropEnd);

      if (options.responsive) {
        removeListener(window, EVENT_RESIZE, this.onResize);
      }
    }
  };

  var handlers = {
    resize: function resize() {
      if (this.disabled) {
        return;
      }

      var options = this.options,
          container = this.container,
          containerData = this.containerData;
      var ratio = container.offsetWidth / containerData.width; // Resize when width changed or height changed

      if (ratio !== 1 || container.offsetHeight !== containerData.height) {
        var canvasData;
        var cropBoxData;

        if (options.restore) {
          canvasData = this.getCanvasData();
          cropBoxData = this.getCropBoxData();
        }

        this.render();

        if (options.restore) {
          this.setCanvasData(forEach(canvasData, function (n, i) {
            canvasData[i] = n * ratio;
          }));
          this.setCropBoxData(forEach(cropBoxData, function (n, i) {
            cropBoxData[i] = n * ratio;
          }));
        }
      }
    },
    dblclick: function dblclick() {
      if (this.disabled || this.options.dragMode === DRAG_MODE_NONE) {
        return;
      }

      this.setDragMode(hasClass(this.dragBox, CLASS_CROP) ? DRAG_MODE_MOVE : DRAG_MODE_CROP);
    },
    wheel: function wheel(event) {
      var _this = this;

      var ratio = Number(this.options.wheelZoomRatio) || 0.1;
      var delta = 1;

      if (this.disabled) {
        return;
      }

      event.preventDefault(); // Limit wheel speed to prevent zoom too fast (#21)

      if (this.wheeling) {
        return;
      }

      this.wheeling = true;
      setTimeout(function () {
        _this.wheeling = false;
      }, 50);

      if (event.deltaY) {
        delta = event.deltaY > 0 ? 1 : -1;
      } else if (event.wheelDelta) {
        delta = -event.wheelDelta / 120;
      } else if (event.detail) {
        delta = event.detail > 0 ? 1 : -1;
      }

      this.zoom(-delta * ratio, event);
    },
    cropStart: function cropStart(event) {
      var buttons = event.buttons,
          button = event.button;

      if (this.disabled // Handle mouse event and pointer event and ignore touch event
      || (event.type === 'mousedown' || event.type === 'pointerdown' && event.pointerType === 'mouse') && ( // No primary button (Usually the left button)
      isNumber(buttons) && buttons !== 1 || isNumber(button) && button !== 0 // Open context menu
      || event.ctrlKey)) {
        return;
      }

      var options = this.options,
          pointers = this.pointers;
      var action;

      if (event.changedTouches) {
        // Handle touch event
        forEach(event.changedTouches, function (touch) {
          pointers[touch.identifier] = getPointer(touch);
        });
      } else {
        // Handle mouse event and pointer event
        pointers[event.pointerId || 0] = getPointer(event);
      }

      if (Object.keys(pointers).length > 1 && options.zoomable && options.zoomOnTouch) {
        action = ACTION_ZOOM;
      } else {
        action = getData(event.target, DATA_ACTION);
      }

      if (!REGEXP_ACTIONS.test(action)) {
        return;
      }

      if (dispatchEvent(this.element, EVENT_CROP_START, {
        originalEvent: event,
        action: action
      }) === false) {
        return;
      } // This line is required for preventing page zooming in iOS browsers


      event.preventDefault();
      this.action = action;
      this.cropping = false;

      if (action === ACTION_CROP) {
        this.cropping = true;
        addClass(this.dragBox, CLASS_MODAL);
      }
    },
    cropMove: function cropMove(event) {
      var action = this.action;

      if (this.disabled || !action) {
        return;
      }

      var pointers = this.pointers;
      event.preventDefault();

      if (dispatchEvent(this.element, EVENT_CROP_MOVE, {
        originalEvent: event,
        action: action
      }) === false) {
        return;
      }

      if (event.changedTouches) {
        forEach(event.changedTouches, function (touch) {
          // The first parameter should not be undefined (#432)
          assign(pointers[touch.identifier] || {}, getPointer(touch, true));
        });
      } else {
        assign(pointers[event.pointerId || 0] || {}, getPointer(event, true));
      }

      this.change(event);
    },
    cropEnd: function cropEnd(event) {
      if (this.disabled) {
        return;
      }

      var action = this.action,
          pointers = this.pointers;

      if (event.changedTouches) {
        forEach(event.changedTouches, function (touch) {
          delete pointers[touch.identifier];
        });
      } else {
        delete pointers[event.pointerId || 0];
      }

      if (!action) {
        return;
      }

      event.preventDefault();

      if (!Object.keys(pointers).length) {
        this.action = '';
      }

      if (this.cropping) {
        this.cropping = false;
        toggleClass(this.dragBox, CLASS_MODAL, this.cropped && this.options.modal);
      }

      dispatchEvent(this.element, EVENT_CROP_END, {
        originalEvent: event,
        action: action
      });
    }
  };

  var change = {
    change: function change(event) {
      var options = this.options,
          canvasData = this.canvasData,
          containerData = this.containerData,
          cropBoxData = this.cropBoxData,
          pointers = this.pointers;
      var action = this.action;
      var aspectRatio = options.aspectRatio;
      var left = cropBoxData.left,
          top = cropBoxData.top,
          width = cropBoxData.width,
          height = cropBoxData.height;
      var right = left + width;
      var bottom = top + height;
      var minLeft = 0;
      var minTop = 0;
      var maxWidth = containerData.width;
      var maxHeight = containerData.height;
      var renderable = true;
      var offset; // Locking aspect ratio in "free mode" by holding shift key

      if (!aspectRatio && event.shiftKey) {
        aspectRatio = width && height ? width / height : 1;
      }

      if (this.limited) {
        minLeft = cropBoxData.minLeft;
        minTop = cropBoxData.minTop;
        maxWidth = minLeft + Math.min(containerData.width, canvasData.width, canvasData.left + canvasData.width);
        maxHeight = minTop + Math.min(containerData.height, canvasData.height, canvasData.top + canvasData.height);
      }

      var pointer = pointers[Object.keys(pointers)[0]];
      var range = {
        x: pointer.endX - pointer.startX,
        y: pointer.endY - pointer.startY
      };

      var check = function check(side) {
        switch (side) {
          case ACTION_EAST:
            if (right + range.x > maxWidth) {
              range.x = maxWidth - right;
            }

            break;

          case ACTION_WEST:
            if (left + range.x < minLeft) {
              range.x = minLeft - left;
            }

            break;

          case ACTION_NORTH:
            if (top + range.y < minTop) {
              range.y = minTop - top;
            }

            break;

          case ACTION_SOUTH:
            if (bottom + range.y > maxHeight) {
              range.y = maxHeight - bottom;
            }

            break;
        }
      };

      switch (action) {
        // Move crop box
        case ACTION_ALL:
          left += range.x;
          top += range.y;
          break;
        // Resize crop box

        case ACTION_EAST:
          if (range.x >= 0 && (right >= maxWidth || aspectRatio && (top <= minTop || bottom >= maxHeight))) {
            renderable = false;
            break;
          }

          check(ACTION_EAST);
          width += range.x;

          if (width < 0) {
            action = ACTION_WEST;
            width = -width;
            left -= width;
          }

          if (aspectRatio) {
            height = width / aspectRatio;
            top += (cropBoxData.height - height) / 2;
          }

          break;

        case ACTION_NORTH:
          if (range.y <= 0 && (top <= minTop || aspectRatio && (left <= minLeft || right >= maxWidth))) {
            renderable = false;
            break;
          }

          check(ACTION_NORTH);
          height -= range.y;
          top += range.y;

          if (height < 0) {
            action = ACTION_SOUTH;
            height = -height;
            top -= height;
          }

          if (aspectRatio) {
            width = height * aspectRatio;
            left += (cropBoxData.width - width) / 2;
          }

          break;

        case ACTION_WEST:
          if (range.x <= 0 && (left <= minLeft || aspectRatio && (top <= minTop || bottom >= maxHeight))) {
            renderable = false;
            break;
          }

          check(ACTION_WEST);
          width -= range.x;
          left += range.x;

          if (width < 0) {
            action = ACTION_EAST;
            width = -width;
            left -= width;
          }

          if (aspectRatio) {
            height = width / aspectRatio;
            top += (cropBoxData.height - height) / 2;
          }

          break;

        case ACTION_SOUTH:
          if (range.y >= 0 && (bottom >= maxHeight || aspectRatio && (left <= minLeft || right >= maxWidth))) {
            renderable = false;
            break;
          }

          check(ACTION_SOUTH);
          height += range.y;

          if (height < 0) {
            action = ACTION_NORTH;
            height = -height;
            top -= height;
          }

          if (aspectRatio) {
            width = height * aspectRatio;
            left += (cropBoxData.width - width) / 2;
          }

          break;

        case ACTION_NORTH_EAST:
          if (aspectRatio) {
            if (range.y <= 0 && (top <= minTop || right >= maxWidth)) {
              renderable = false;
              break;
            }

            check(ACTION_NORTH);
            height -= range.y;
            top += range.y;
            width = height * aspectRatio;
          } else {
            check(ACTION_NORTH);
            check(ACTION_EAST);

            if (range.x >= 0) {
              if (right < maxWidth) {
                width += range.x;
              } else if (range.y <= 0 && top <= minTop) {
                renderable = false;
              }
            } else {
              width += range.x;
            }

            if (range.y <= 0) {
              if (top > minTop) {
                height -= range.y;
                top += range.y;
              }
            } else {
              height -= range.y;
              top += range.y;
            }
          }

          if (width < 0 && height < 0) {
            action = ACTION_SOUTH_WEST;
            height = -height;
            width = -width;
            top -= height;
            left -= width;
          } else if (width < 0) {
            action = ACTION_NORTH_WEST;
            width = -width;
            left -= width;
          } else if (height < 0) {
            action = ACTION_SOUTH_EAST;
            height = -height;
            top -= height;
          }

          break;

        case ACTION_NORTH_WEST:
          if (aspectRatio) {
            if (range.y <= 0 && (top <= minTop || left <= minLeft)) {
              renderable = false;
              break;
            }

            check(ACTION_NORTH);
            height -= range.y;
            top += range.y;
            width = height * aspectRatio;
            left += cropBoxData.width - width;
          } else {
            check(ACTION_NORTH);
            check(ACTION_WEST);

            if (range.x <= 0) {
              if (left > minLeft) {
                width -= range.x;
                left += range.x;
              } else if (range.y <= 0 && top <= minTop) {
                renderable = false;
              }
            } else {
              width -= range.x;
              left += range.x;
            }

            if (range.y <= 0) {
              if (top > minTop) {
                height -= range.y;
                top += range.y;
              }
            } else {
              height -= range.y;
              top += range.y;
            }
          }

          if (width < 0 && height < 0) {
            action = ACTION_SOUTH_EAST;
            height = -height;
            width = -width;
            top -= height;
            left -= width;
          } else if (width < 0) {
            action = ACTION_NORTH_EAST;
            width = -width;
            left -= width;
          } else if (height < 0) {
            action = ACTION_SOUTH_WEST;
            height = -height;
            top -= height;
          }

          break;

        case ACTION_SOUTH_WEST:
          if (aspectRatio) {
            if (range.x <= 0 && (left <= minLeft || bottom >= maxHeight)) {
              renderable = false;
              break;
            }

            check(ACTION_WEST);
            width -= range.x;
            left += range.x;
            height = width / aspectRatio;
          } else {
            check(ACTION_SOUTH);
            check(ACTION_WEST);

            if (range.x <= 0) {
              if (left > minLeft) {
                width -= range.x;
                left += range.x;
              } else if (range.y >= 0 && bottom >= maxHeight) {
                renderable = false;
              }
            } else {
              width -= range.x;
              left += range.x;
            }

            if (range.y >= 0) {
              if (bottom < maxHeight) {
                height += range.y;
              }
            } else {
              height += range.y;
            }
          }

          if (width < 0 && height < 0) {
            action = ACTION_NORTH_EAST;
            height = -height;
            width = -width;
            top -= height;
            left -= width;
          } else if (width < 0) {
            action = ACTION_SOUTH_EAST;
            width = -width;
            left -= width;
          } else if (height < 0) {
            action = ACTION_NORTH_WEST;
            height = -height;
            top -= height;
          }

          break;

        case ACTION_SOUTH_EAST:
          if (aspectRatio) {
            if (range.x >= 0 && (right >= maxWidth || bottom >= maxHeight)) {
              renderable = false;
              break;
            }

            check(ACTION_EAST);
            width += range.x;
            height = width / aspectRatio;
          } else {
            check(ACTION_SOUTH);
            check(ACTION_EAST);

            if (range.x >= 0) {
              if (right < maxWidth) {
                width += range.x;
              } else if (range.y >= 0 && bottom >= maxHeight) {
                renderable = false;
              }
            } else {
              width += range.x;
            }

            if (range.y >= 0) {
              if (bottom < maxHeight) {
                height += range.y;
              }
            } else {
              height += range.y;
            }
          }

          if (width < 0 && height < 0) {
            action = ACTION_NORTH_WEST;
            height = -height;
            width = -width;
            top -= height;
            left -= width;
          } else if (width < 0) {
            action = ACTION_SOUTH_WEST;
            width = -width;
            left -= width;
          } else if (height < 0) {
            action = ACTION_NORTH_EAST;
            height = -height;
            top -= height;
          }

          break;
        // Move canvas

        case ACTION_MOVE:
          this.move(range.x, range.y);
          renderable = false;
          break;
        // Zoom canvas

        case ACTION_ZOOM:
          this.zoom(getMaxZoomRatio(pointers), event);
          renderable = false;
          break;
        // Create crop box

        case ACTION_CROP:
          if (!range.x || !range.y) {
            renderable = false;
            break;
          }

          offset = getOffset(this.cropper);
          left = pointer.startX - offset.left;
          top = pointer.startY - offset.top;
          width = cropBoxData.minWidth;
          height = cropBoxData.minHeight;

          if (range.x > 0) {
            action = range.y > 0 ? ACTION_SOUTH_EAST : ACTION_NORTH_EAST;
          } else if (range.x < 0) {
            left -= width;
            action = range.y > 0 ? ACTION_SOUTH_WEST : ACTION_NORTH_WEST;
          }

          if (range.y < 0) {
            top -= height;
          } // Show the crop box if is hidden


          if (!this.cropped) {
            removeClass(this.cropBox, CLASS_HIDDEN);
            this.cropped = true;

            if (this.limited) {
              this.limitCropBox(true, true);
            }
          }

          break;
      }

      if (renderable) {
        cropBoxData.width = width;
        cropBoxData.height = height;
        cropBoxData.left = left;
        cropBoxData.top = top;
        this.action = action;
        this.renderCropBox();
      } // Override


      forEach(pointers, function (p) {
        p.startX = p.endX;
        p.startY = p.endY;
      });
    }
  };

  var methods = {
    // Show the crop box manually
    crop: function crop() {
      if (this.ready && !this.cropped && !this.disabled) {
        this.cropped = true;
        this.limitCropBox(true, true);

        if (this.options.modal) {
          addClass(this.dragBox, CLASS_MODAL);
        }

        removeClass(this.cropBox, CLASS_HIDDEN);
        this.setCropBoxData(this.initialCropBoxData);
      }

      return this;
    },
    // Reset the image and crop box to their initial states
    reset: function reset() {
      if (this.ready && !this.disabled) {
        this.imageData = assign({}, this.initialImageData);
        this.canvasData = assign({}, this.initialCanvasData);
        this.cropBoxData = assign({}, this.initialCropBoxData);
        this.renderCanvas();

        if (this.cropped) {
          this.renderCropBox();
        }
      }

      return this;
    },
    // Clear the crop box
    clear: function clear() {
      if (this.cropped && !this.disabled) {
        assign(this.cropBoxData, {
          left: 0,
          top: 0,
          width: 0,
          height: 0
        });
        this.cropped = false;
        this.renderCropBox();
        this.limitCanvas(true, true); // Render canvas after crop box rendered

        this.renderCanvas();
        removeClass(this.dragBox, CLASS_MODAL);
        addClass(this.cropBox, CLASS_HIDDEN);
      }

      return this;
    },

    /**
     * Replace the image's src and rebuild the cropper
     * @param {string} url - The new URL.
     * @param {boolean} [hasSameSize] - Indicate if the new image has the same size as the old one.
     * @returns {Cropper} this
     */
    replace: function replace(url) {
      var hasSameSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (!this.disabled && url) {
        if (this.isImg) {
          this.element.src = url;
        }

        if (hasSameSize) {
          this.url = url;
          this.image.src = url;

          if (this.ready) {
            this.viewBoxImage.src = url;
            forEach(this.previews, function (element) {
              element.getElementsByTagName('img')[0].src = url;
            });
          }
        } else {
          if (this.isImg) {
            this.replaced = true;
          }

          this.options.data = null;
          this.uncreate();
          this.load(url);
        }
      }

      return this;
    },
    // Enable (unfreeze) the cropper
    enable: function enable() {
      if (this.ready && this.disabled) {
        this.disabled = false;
        removeClass(this.cropper, CLASS_DISABLED);
      }

      return this;
    },
    // Disable (freeze) the cropper
    disable: function disable() {
      if (this.ready && !this.disabled) {
        this.disabled = true;
        addClass(this.cropper, CLASS_DISABLED);
      }

      return this;
    },

    /**
     * Destroy the cropper and remove the instance from the image
     * @returns {Cropper} this
     */
    destroy: function destroy() {
      var element = this.element;

      if (!element[NAMESPACE]) {
        return this;
      }

      element[NAMESPACE] = undefined;

      if (this.isImg && this.replaced) {
        element.src = this.originalUrl;
      }

      this.uncreate();
      return this;
    },

    /**
     * Move the canvas with relative offsets
     * @param {number} offsetX - The relative offset distance on the x-axis.
     * @param {number} [offsetY=offsetX] - The relative offset distance on the y-axis.
     * @returns {Cropper} this
     */
    move: function move(offsetX) {
      var offsetY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : offsetX;
      var _this$canvasData = this.canvasData,
          left = _this$canvasData.left,
          top = _this$canvasData.top;
      return this.moveTo(isUndefined(offsetX) ? offsetX : left + Number(offsetX), isUndefined(offsetY) ? offsetY : top + Number(offsetY));
    },

    /**
     * Move the canvas to an absolute point
     * @param {number} x - The x-axis coordinate.
     * @param {number} [y=x] - The y-axis coordinate.
     * @returns {Cropper} this
     */
    moveTo: function moveTo(x) {
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x;
      var canvasData = this.canvasData;
      var changed = false;
      x = Number(x);
      y = Number(y);

      if (this.ready && !this.disabled && this.options.movable) {
        if (isNumber(x)) {
          canvasData.left = x;
          changed = true;
        }

        if (isNumber(y)) {
          canvasData.top = y;
          changed = true;
        }

        if (changed) {
          this.renderCanvas(true);
        }
      }

      return this;
    },

    /**
     * Zoom the canvas with a relative ratio
     * @param {number} ratio - The target ratio.
     * @param {Event} _originalEvent - The original event if any.
     * @returns {Cropper} this
     */
    zoom: function zoom(ratio, _originalEvent) {
      var canvasData = this.canvasData;
      ratio = Number(ratio);

      if (ratio < 0) {
        ratio = 1 / (1 - ratio);
      } else {
        ratio = 1 + ratio;
      }

      return this.zoomTo(canvasData.width * ratio / canvasData.naturalWidth, null, _originalEvent);
    },

    /**
     * Zoom the canvas to an absolute ratio
     * @param {number} ratio - The target ratio.
     * @param {Object} pivot - The zoom pivot point coordinate.
     * @param {Event} _originalEvent - The original event if any.
     * @returns {Cropper} this
     */
    zoomTo: function zoomTo(ratio, pivot, _originalEvent) {
      var options = this.options,
          canvasData = this.canvasData;
      var width = canvasData.width,
          height = canvasData.height,
          naturalWidth = canvasData.naturalWidth,
          naturalHeight = canvasData.naturalHeight;
      ratio = Number(ratio);

      if (ratio >= 0 && this.ready && !this.disabled && options.zoomable) {
        var newWidth = naturalWidth * ratio;
        var newHeight = naturalHeight * ratio;

        if (dispatchEvent(this.element, EVENT_ZOOM, {
          ratio: ratio,
          oldRatio: width / naturalWidth,
          originalEvent: _originalEvent
        }) === false) {
          return this;
        }

        if (_originalEvent) {
          var pointers = this.pointers;
          var offset = getOffset(this.cropper);
          var center = pointers && Object.keys(pointers).length ? getPointersCenter(pointers) : {
            pageX: _originalEvent.pageX,
            pageY: _originalEvent.pageY
          }; // Zoom from the triggering point of the event

          canvasData.left -= (newWidth - width) * ((center.pageX - offset.left - canvasData.left) / width);
          canvasData.top -= (newHeight - height) * ((center.pageY - offset.top - canvasData.top) / height);
        } else if (isPlainObject(pivot) && isNumber(pivot.x) && isNumber(pivot.y)) {
          canvasData.left -= (newWidth - width) * ((pivot.x - canvasData.left) / width);
          canvasData.top -= (newHeight - height) * ((pivot.y - canvasData.top) / height);
        } else {
          // Zoom from the center of the canvas
          canvasData.left -= (newWidth - width) / 2;
          canvasData.top -= (newHeight - height) / 2;
        }

        canvasData.width = newWidth;
        canvasData.height = newHeight;
        this.renderCanvas(true);
      }

      return this;
    },

    /**
     * Rotate the canvas with a relative degree
     * @param {number} degree - The rotate degree.
     * @returns {Cropper} this
     */
    rotate: function rotate(degree) {
      return this.rotateTo((this.imageData.rotate || 0) + Number(degree));
    },

    /**
     * Rotate the canvas to an absolute degree
     * @param {number} degree - The rotate degree.
     * @returns {Cropper} this
     */
    rotateTo: function rotateTo(degree) {
      degree = Number(degree);

      if (isNumber(degree) && this.ready && !this.disabled && this.options.rotatable) {
        this.imageData.rotate = degree % 360;
        this.renderCanvas(true, true);
      }

      return this;
    },

    /**
     * Scale the image on the x-axis.
     * @param {number} scaleX - The scale ratio on the x-axis.
     * @returns {Cropper} this
     */
    scaleX: function scaleX(_scaleX) {
      var scaleY = this.imageData.scaleY;
      return this.scale(_scaleX, isNumber(scaleY) ? scaleY : 1);
    },

    /**
     * Scale the image on the y-axis.
     * @param {number} scaleY - The scale ratio on the y-axis.
     * @returns {Cropper} this
     */
    scaleY: function scaleY(_scaleY) {
      var scaleX = this.imageData.scaleX;
      return this.scale(isNumber(scaleX) ? scaleX : 1, _scaleY);
    },

    /**
     * Scale the image
     * @param {number} scaleX - The scale ratio on the x-axis.
     * @param {number} [scaleY=scaleX] - The scale ratio on the y-axis.
     * @returns {Cropper} this
     */
    scale: function scale(scaleX) {
      var scaleY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : scaleX;
      var imageData = this.imageData;
      var transformed = false;
      scaleX = Number(scaleX);
      scaleY = Number(scaleY);

      if (this.ready && !this.disabled && this.options.scalable) {
        if (isNumber(scaleX)) {
          imageData.scaleX = scaleX;
          transformed = true;
        }

        if (isNumber(scaleY)) {
          imageData.scaleY = scaleY;
          transformed = true;
        }

        if (transformed) {
          this.renderCanvas(true, true);
        }
      }

      return this;
    },

    /**
     * Get the cropped area position and size data (base on the original image)
     * @param {boolean} [rounded=false] - Indicate if round the data values or not.
     * @returns {Object} The result cropped data.
     */
    getData: function getData() {
      var rounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var options = this.options,
          imageData = this.imageData,
          canvasData = this.canvasData,
          cropBoxData = this.cropBoxData;
      var data;

      if (this.ready && this.cropped) {
        data = {
          x: cropBoxData.left - canvasData.left,
          y: cropBoxData.top - canvasData.top,
          width: cropBoxData.width,
          height: cropBoxData.height
        };
        var ratio = imageData.width / imageData.naturalWidth;
        forEach(data, function (n, i) {
          data[i] = n / ratio;
        });

        if (rounded) {
          // In case rounding off leads to extra 1px in right or bottom border
          // we should round the top-left corner and the dimension (#343).
          var bottom = Math.round(data.y + data.height);
          var right = Math.round(data.x + data.width);
          data.x = Math.round(data.x);
          data.y = Math.round(data.y);
          data.width = right - data.x;
          data.height = bottom - data.y;
        }
      } else {
        data = {
          x: 0,
          y: 0,
          width: 0,
          height: 0
        };
      }

      if (options.rotatable) {
        data.rotate = imageData.rotate || 0;
      }

      if (options.scalable) {
        data.scaleX = imageData.scaleX || 1;
        data.scaleY = imageData.scaleY || 1;
      }

      return data;
    },

    /**
     * Set the cropped area position and size with new data
     * @param {Object} data - The new data.
     * @returns {Cropper} this
     */
    setData: function setData(data) {
      var options = this.options,
          imageData = this.imageData,
          canvasData = this.canvasData;
      var cropBoxData = {};

      if (this.ready && !this.disabled && isPlainObject(data)) {
        var transformed = false;

        if (options.rotatable) {
          if (isNumber(data.rotate) && data.rotate !== imageData.rotate) {
            imageData.rotate = data.rotate;
            transformed = true;
          }
        }

        if (options.scalable) {
          if (isNumber(data.scaleX) && data.scaleX !== imageData.scaleX) {
            imageData.scaleX = data.scaleX;
            transformed = true;
          }

          if (isNumber(data.scaleY) && data.scaleY !== imageData.scaleY) {
            imageData.scaleY = data.scaleY;
            transformed = true;
          }
        }

        if (transformed) {
          this.renderCanvas(true, true);
        }

        var ratio = imageData.width / imageData.naturalWidth;

        if (isNumber(data.x)) {
          cropBoxData.left = data.x * ratio + canvasData.left;
        }

        if (isNumber(data.y)) {
          cropBoxData.top = data.y * ratio + canvasData.top;
        }

        if (isNumber(data.width)) {
          cropBoxData.width = data.width * ratio;
        }

        if (isNumber(data.height)) {
          cropBoxData.height = data.height * ratio;
        }

        this.setCropBoxData(cropBoxData);
      }

      return this;
    },

    /**
     * Get the container size data.
     * @returns {Object} The result container data.
     */
    getContainerData: function getContainerData() {
      return this.ready ? assign({}, this.containerData) : {};
    },

    /**
     * Get the image position and size data.
     * @returns {Object} The result image data.
     */
    getImageData: function getImageData() {
      return this.sized ? assign({}, this.imageData) : {};
    },

    /**
     * Get the canvas position and size data.
     * @returns {Object} The result canvas data.
     */
    getCanvasData: function getCanvasData() {
      var canvasData = this.canvasData;
      var data = {};

      if (this.ready) {
        forEach(['left', 'top', 'width', 'height', 'naturalWidth', 'naturalHeight'], function (n) {
          data[n] = canvasData[n];
        });
      }

      return data;
    },

    /**
     * Set the canvas position and size with new data.
     * @param {Object} data - The new canvas data.
     * @returns {Cropper} this
     */
    setCanvasData: function setCanvasData(data) {
      var canvasData = this.canvasData;
      var aspectRatio = canvasData.aspectRatio;

      if (this.ready && !this.disabled && isPlainObject(data)) {
        if (isNumber(data.left)) {
          canvasData.left = data.left;
        }

        if (isNumber(data.top)) {
          canvasData.top = data.top;
        }

        if (isNumber(data.width)) {
          canvasData.width = data.width;
          canvasData.height = data.width / aspectRatio;
        } else if (isNumber(data.height)) {
          canvasData.height = data.height;
          canvasData.width = data.height * aspectRatio;
        }

        this.renderCanvas(true);
      }

      return this;
    },

    /**
     * Get the crop box position and size data.
     * @returns {Object} The result crop box data.
     */
    getCropBoxData: function getCropBoxData() {
      var cropBoxData = this.cropBoxData;
      var data;

      if (this.ready && this.cropped) {
        data = {
          left: cropBoxData.left,
          top: cropBoxData.top,
          width: cropBoxData.width,
          height: cropBoxData.height
        };
      }

      return data || {};
    },

    /**
     * Set the crop box position and size with new data.
     * @param {Object} data - The new crop box data.
     * @returns {Cropper} this
     */
    setCropBoxData: function setCropBoxData(data) {
      var cropBoxData = this.cropBoxData;
      var aspectRatio = this.options.aspectRatio;
      var widthChanged;
      var heightChanged;

      if (this.ready && this.cropped && !this.disabled && isPlainObject(data)) {
        if (isNumber(data.left)) {
          cropBoxData.left = data.left;
        }

        if (isNumber(data.top)) {
          cropBoxData.top = data.top;
        }

        if (isNumber(data.width) && data.width !== cropBoxData.width) {
          widthChanged = true;
          cropBoxData.width = data.width;
        }

        if (isNumber(data.height) && data.height !== cropBoxData.height) {
          heightChanged = true;
          cropBoxData.height = data.height;
        }

        if (aspectRatio) {
          if (widthChanged) {
            cropBoxData.height = cropBoxData.width / aspectRatio;
          } else if (heightChanged) {
            cropBoxData.width = cropBoxData.height * aspectRatio;
          }
        }

        this.renderCropBox();
      }

      return this;
    },

    /**
     * Get a canvas drawn the cropped image.
     * @param {Object} [options={}] - The config options.
     * @returns {HTMLCanvasElement} - The result canvas.
     */
    getCroppedCanvas: function getCroppedCanvas() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (!this.ready || !window.HTMLCanvasElement) {
        return null;
      }

      var canvasData = this.canvasData;
      var source = getSourceCanvas(this.image, this.imageData, canvasData, options); // Returns the source canvas if it is not cropped.

      if (!this.cropped) {
        return source;
      }

      var _this$getData = this.getData(),
          initialX = _this$getData.x,
          initialY = _this$getData.y,
          initialWidth = _this$getData.width,
          initialHeight = _this$getData.height;

      var ratio = source.width / Math.floor(canvasData.naturalWidth);

      if (ratio !== 1) {
        initialX *= ratio;
        initialY *= ratio;
        initialWidth *= ratio;
        initialHeight *= ratio;
      }

      var aspectRatio = initialWidth / initialHeight;
      var maxSizes = getAdjustedSizes({
        aspectRatio: aspectRatio,
        width: options.maxWidth || Infinity,
        height: options.maxHeight || Infinity
      });
      var minSizes = getAdjustedSizes({
        aspectRatio: aspectRatio,
        width: options.minWidth || 0,
        height: options.minHeight || 0
      }, 'cover');

      var _getAdjustedSizes = getAdjustedSizes({
        aspectRatio: aspectRatio,
        width: options.width || (ratio !== 1 ? source.width : initialWidth),
        height: options.height || (ratio !== 1 ? source.height : initialHeight)
      }),
          width = _getAdjustedSizes.width,
          height = _getAdjustedSizes.height;

      width = Math.min(maxSizes.width, Math.max(minSizes.width, width));
      height = Math.min(maxSizes.height, Math.max(minSizes.height, height));
      var canvas = document.createElement('canvas');
      var context = canvas.getContext('2d');
      canvas.width = normalizeDecimalNumber(width);
      canvas.height = normalizeDecimalNumber(height);
      context.fillStyle = options.fillColor || 'transparent';
      context.fillRect(0, 0, width, height);
      var _options$imageSmoothi = options.imageSmoothingEnabled,
          imageSmoothingEnabled = _options$imageSmoothi === void 0 ? true : _options$imageSmoothi,
          imageSmoothingQuality = options.imageSmoothingQuality;
      context.imageSmoothingEnabled = imageSmoothingEnabled;

      if (imageSmoothingQuality) {
        context.imageSmoothingQuality = imageSmoothingQuality;
      } // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D.drawImage


      var sourceWidth = source.width;
      var sourceHeight = source.height; // Source canvas parameters

      var srcX = initialX;
      var srcY = initialY;
      var srcWidth;
      var srcHeight; // Destination canvas parameters

      var dstX;
      var dstY;
      var dstWidth;
      var dstHeight;

      if (srcX <= -initialWidth || srcX > sourceWidth) {
        srcX = 0;
        srcWidth = 0;
        dstX = 0;
        dstWidth = 0;
      } else if (srcX <= 0) {
        dstX = -srcX;
        srcX = 0;
        srcWidth = Math.min(sourceWidth, initialWidth + srcX);
        dstWidth = srcWidth;
      } else if (srcX <= sourceWidth) {
        dstX = 0;
        srcWidth = Math.min(initialWidth, sourceWidth - srcX);
        dstWidth = srcWidth;
      }

      if (srcWidth <= 0 || srcY <= -initialHeight || srcY > sourceHeight) {
        srcY = 0;
        srcHeight = 0;
        dstY = 0;
        dstHeight = 0;
      } else if (srcY <= 0) {
        dstY = -srcY;
        srcY = 0;
        srcHeight = Math.min(sourceHeight, initialHeight + srcY);
        dstHeight = srcHeight;
      } else if (srcY <= sourceHeight) {
        dstY = 0;
        srcHeight = Math.min(initialHeight, sourceHeight - srcY);
        dstHeight = srcHeight;
      }

      var params = [srcX, srcY, srcWidth, srcHeight]; // Avoid "IndexSizeError"

      if (dstWidth > 0 && dstHeight > 0) {
        var scale = width / initialWidth;
        params.push(dstX * scale, dstY * scale, dstWidth * scale, dstHeight * scale);
      } // All the numerical parameters should be integer for `drawImage`
      // https://github.com/fengyuanchen/cropper/issues/476


      context.drawImage.apply(context, [source].concat(_toConsumableArray(params.map(function (param) {
        return Math.floor(normalizeDecimalNumber(param));
      }))));
      return canvas;
    },

    /**
     * Change the aspect ratio of the crop box.
     * @param {number} aspectRatio - The new aspect ratio.
     * @returns {Cropper} this
     */
    setAspectRatio: function setAspectRatio(aspectRatio) {
      var options = this.options;

      if (!this.disabled && !isUndefined(aspectRatio)) {
        // 0 -> NaN
        options.aspectRatio = Math.max(0, aspectRatio) || NaN;

        if (this.ready) {
          this.initCropBox();

          if (this.cropped) {
            this.renderCropBox();
          }
        }
      }

      return this;
    },

    /**
     * Change the drag mode.
     * @param {string} mode - The new drag mode.
     * @returns {Cropper} this
     */
    setDragMode: function setDragMode(mode) {
      var options = this.options,
          dragBox = this.dragBox,
          face = this.face;

      if (this.ready && !this.disabled) {
        var croppable = mode === DRAG_MODE_CROP;
        var movable = options.movable && mode === DRAG_MODE_MOVE;
        mode = croppable || movable ? mode : DRAG_MODE_NONE;
        options.dragMode = mode;
        setData(dragBox, DATA_ACTION, mode);
        toggleClass(dragBox, CLASS_CROP, croppable);
        toggleClass(dragBox, CLASS_MOVE, movable);

        if (!options.cropBoxMovable) {
          // Sync drag mode to crop box when it is not movable
          setData(face, DATA_ACTION, mode);
          toggleClass(face, CLASS_CROP, croppable);
          toggleClass(face, CLASS_MOVE, movable);
        }
      }

      return this;
    }
  };

  var AnotherCropper = WINDOW.Cropper;

  var Cropper = /*#__PURE__*/function () {
    /**
     * Create a new Cropper.
     * @param {Element} element - The target element for cropping.
     * @param {Object} [options={}] - The configuration options.
     */
    function Cropper(element) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, Cropper);

      if (!element || !REGEXP_TAG_NAME.test(element.tagName)) {
        throw new Error('The first argument is required and must be an <img> or <canvas> element.');
      }

      this.element = element;
      this.options = assign({}, DEFAULTS, isPlainObject(options) && options);
      this.cropped = false;
      this.disabled = false;
      this.pointers = {};
      this.ready = false;
      this.reloading = false;
      this.replaced = false;
      this.sized = false;
      this.sizing = false;
      this.init();
    }

    _createClass(Cropper, [{
      key: "init",
      value: function init() {
        var element = this.element;
        var tagName = element.tagName.toLowerCase();
        var url;

        if (element[NAMESPACE]) {
          return;
        }

        element[NAMESPACE] = this;

        if (tagName === 'img') {
          this.isImg = true; // e.g.: "img/picture.jpg"

          url = element.getAttribute('src') || '';
          this.originalUrl = url; // Stop when it's a blank image

          if (!url) {
            return;
          } // e.g.: "https://example.com/img/picture.jpg"


          url = element.src;
        } else if (tagName === 'canvas' && window.HTMLCanvasElement) {
          url = element.toDataURL();
        }

        this.load(url);
      }
    }, {
      key: "load",
      value: function load(url) {
        var _this = this;

        if (!url) {
          return;
        }

        this.url = url;
        this.imageData = {};
        var element = this.element,
            options = this.options;

        if (!options.rotatable && !options.scalable) {
          options.checkOrientation = false;
        } // Only IE10+ supports Typed Arrays


        if (!options.checkOrientation || !window.ArrayBuffer) {
          this.clone();
          return;
        } // Detect the mime type of the image directly if it is a Data URL


        if (REGEXP_DATA_URL.test(url)) {
          // Read ArrayBuffer from Data URL of JPEG images directly for better performance
          if (REGEXP_DATA_URL_JPEG.test(url)) {
            this.read(dataURLToArrayBuffer(url));
          } else {
            // Only a JPEG image may contains Exif Orientation information,
            // the rest types of Data URLs are not necessary to check orientation at all.
            this.clone();
          }

          return;
        } // 1. Detect the mime type of the image by a XMLHttpRequest.
        // 2. Load the image as ArrayBuffer for reading orientation if its a JPEG image.


        var xhr = new XMLHttpRequest();
        var clone = this.clone.bind(this);
        this.reloading = true;
        this.xhr = xhr; // 1. Cross origin requests are only supported for protocol schemes:
        // http, https, data, chrome, chrome-extension.
        // 2. Access to XMLHttpRequest from a Data URL will be blocked by CORS policy
        // in some browsers as IE11 and Safari.

        xhr.onabort = clone;
        xhr.onerror = clone;
        xhr.ontimeout = clone;

        xhr.onprogress = function () {
          // Abort the request directly if it not a JPEG image for better performance
          if (xhr.getResponseHeader('content-type') !== MIME_TYPE_JPEG) {
            xhr.abort();
          }
        };

        xhr.onload = function () {
          _this.read(xhr.response);
        };

        xhr.onloadend = function () {
          _this.reloading = false;
          _this.xhr = null;
        }; // Bust cache when there is a "crossOrigin" property to avoid browser cache error


        if (options.checkCrossOrigin && isCrossOriginURL(url) && element.crossOrigin) {
          url = addTimestamp(url);
        }

        xhr.open('GET', url);
        xhr.responseType = 'arraybuffer';
        xhr.withCredentials = element.crossOrigin === 'use-credentials';
        xhr.send();
      }
    }, {
      key: "read",
      value: function read(arrayBuffer) {
        var options = this.options,
            imageData = this.imageData; // Reset the orientation value to its default value 1
        // as some iOS browsers will render image with its orientation

        var orientation = resetAndGetOrientation(arrayBuffer);
        var rotate = 0;
        var scaleX = 1;
        var scaleY = 1;

        if (orientation > 1) {
          // Generate a new URL which has the default orientation value
          this.url = arrayBufferToDataURL(arrayBuffer, MIME_TYPE_JPEG);

          var _parseOrientation = parseOrientation(orientation);

          rotate = _parseOrientation.rotate;
          scaleX = _parseOrientation.scaleX;
          scaleY = _parseOrientation.scaleY;
        }

        if (options.rotatable) {
          imageData.rotate = rotate;
        }

        if (options.scalable) {
          imageData.scaleX = scaleX;
          imageData.scaleY = scaleY;
        }

        this.clone();
      }
    }, {
      key: "clone",
      value: function clone() {
        var element = this.element,
            url = this.url;
        var crossOrigin = element.crossOrigin;
        var crossOriginUrl = url;

        if (this.options.checkCrossOrigin && isCrossOriginURL(url)) {
          if (!crossOrigin) {
            crossOrigin = 'anonymous';
          } // Bust cache when there is not a "crossOrigin" property (#519)


          crossOriginUrl = addTimestamp(url);
        }

        this.crossOrigin = crossOrigin;
        this.crossOriginUrl = crossOriginUrl;
        var image = document.createElement('img');

        if (crossOrigin) {
          image.crossOrigin = crossOrigin;
        }

        image.src = crossOriginUrl || url;
        image.alt = element.alt || 'The image to crop';
        this.image = image;
        image.onload = this.start.bind(this);
        image.onerror = this.stop.bind(this);
        addClass(image, CLASS_HIDE);
        element.parentNode.insertBefore(image, element.nextSibling);
      }
    }, {
      key: "start",
      value: function start() {
        var _this2 = this;

        var image = this.image;
        image.onload = null;
        image.onerror = null;
        this.sizing = true; // Match all browsers that use WebKit as the layout engine in iOS devices,
        // such as Safari for iOS, Chrome for iOS, and in-app browsers.

        var isIOSWebKit = WINDOW.navigator && /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(WINDOW.navigator.userAgent);

        var done = function done(naturalWidth, naturalHeight) {
          assign(_this2.imageData, {
            naturalWidth: naturalWidth,
            naturalHeight: naturalHeight,
            aspectRatio: naturalWidth / naturalHeight
          });
          _this2.initialImageData = assign({}, _this2.imageData);
          _this2.sizing = false;
          _this2.sized = true;

          _this2.build();
        }; // Most modern browsers (excepts iOS WebKit)


        if (image.naturalWidth && !isIOSWebKit) {
          done(image.naturalWidth, image.naturalHeight);
          return;
        }

        var sizingImage = document.createElement('img');
        var body = document.body || document.documentElement;
        this.sizingImage = sizingImage;

        sizingImage.onload = function () {
          done(sizingImage.width, sizingImage.height);

          if (!isIOSWebKit) {
            body.removeChild(sizingImage);
          }
        };

        sizingImage.src = image.src; // iOS WebKit will convert the image automatically
        // with its orientation once append it into DOM (#279)

        if (!isIOSWebKit) {
          sizingImage.style.cssText = 'left:0;' + 'max-height:none!important;' + 'max-width:none!important;' + 'min-height:0!important;' + 'min-width:0!important;' + 'opacity:0;' + 'position:absolute;' + 'top:0;' + 'z-index:-1;';
          body.appendChild(sizingImage);
        }
      }
    }, {
      key: "stop",
      value: function stop() {
        var image = this.image;
        image.onload = null;
        image.onerror = null;
        image.parentNode.removeChild(image);
        this.image = null;
      }
    }, {
      key: "build",
      value: function build() {
        if (!this.sized || this.ready) {
          return;
        }

        var element = this.element,
            options = this.options,
            image = this.image; // Create cropper elements

        var container = element.parentNode;
        var template = document.createElement('div');
        template.innerHTML = TEMPLATE;
        var cropper = template.querySelector(".".concat(NAMESPACE, "-container"));
        var canvas = cropper.querySelector(".".concat(NAMESPACE, "-canvas"));
        var dragBox = cropper.querySelector(".".concat(NAMESPACE, "-drag-box"));
        var cropBox = cropper.querySelector(".".concat(NAMESPACE, "-crop-box"));
        var face = cropBox.querySelector(".".concat(NAMESPACE, "-face"));
        this.container = container;
        this.cropper = cropper;
        this.canvas = canvas;
        this.dragBox = dragBox;
        this.cropBox = cropBox;
        this.viewBox = cropper.querySelector(".".concat(NAMESPACE, "-view-box"));
        this.face = face;
        canvas.appendChild(image); // Hide the original image

        addClass(element, CLASS_HIDDEN); // Inserts the cropper after to the current image

        container.insertBefore(cropper, element.nextSibling); // Show the image if is hidden

        if (!this.isImg) {
          removeClass(image, CLASS_HIDE);
        }

        this.initPreview();
        this.bind();
        options.initialAspectRatio = Math.max(0, options.initialAspectRatio) || NaN;
        options.aspectRatio = Math.max(0, options.aspectRatio) || NaN;
        options.viewMode = Math.max(0, Math.min(3, Math.round(options.viewMode))) || 0;
        addClass(cropBox, CLASS_HIDDEN);

        if (!options.guides) {
          addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-dashed")), CLASS_HIDDEN);
        }

        if (!options.center) {
          addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-center")), CLASS_HIDDEN);
        }

        if (options.background) {
          addClass(cropper, "".concat(NAMESPACE, "-bg"));
        }

        if (!options.highlight) {
          addClass(face, CLASS_INVISIBLE);
        }

        if (options.cropBoxMovable) {
          addClass(face, CLASS_MOVE);
          setData(face, DATA_ACTION, ACTION_ALL);
        }

        if (!options.cropBoxResizable) {
          addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-line")), CLASS_HIDDEN);
          addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-point")), CLASS_HIDDEN);
        }

        this.render();
        this.ready = true;
        this.setDragMode(options.dragMode);

        if (options.autoCrop) {
          this.crop();
        }

        this.setData(options.data);

        if (isFunction(options.ready)) {
          addListener(element, EVENT_READY, options.ready, {
            once: true
          });
        }

        dispatchEvent(element, EVENT_READY);
      }
    }, {
      key: "unbuild",
      value: function unbuild() {
        if (!this.ready) {
          return;
        }

        this.ready = false;
        this.unbind();
        this.resetPreview();
        this.cropper.parentNode.removeChild(this.cropper);
        removeClass(this.element, CLASS_HIDDEN);
      }
    }, {
      key: "uncreate",
      value: function uncreate() {
        if (this.ready) {
          this.unbuild();
          this.ready = false;
          this.cropped = false;
        } else if (this.sizing) {
          this.sizingImage.onload = null;
          this.sizing = false;
          this.sized = false;
        } else if (this.reloading) {
          this.xhr.onabort = null;
          this.xhr.abort();
        } else if (this.image) {
          this.stop();
        }
      }
      /**
       * Get the no conflict cropper class.
       * @returns {Cropper} The cropper class.
       */

    }], [{
      key: "noConflict",
      value: function noConflict() {
        window.Cropper = AnotherCropper;
        return Cropper;
      }
      /**
       * Change the default options.
       * @param {Object} options - The new default options.
       */

    }, {
      key: "setDefaults",
      value: function setDefaults(options) {
        assign(DEFAULTS, isPlainObject(options) && options);
      }
    }]);

    return Cropper;
  }();

  assign(Cropper.prototype, render, preview, events, handlers, change, methods);

  return Cropper;

})));


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3JvcHBlcmpzL2Rpc3QvY3JvcHBlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLEtBQTREO0FBQzlELEVBQUUsU0FDc0c7QUFDeEcsQ0FBQyxxQkFBcUI7O0FBRXRCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLGtCQUFrQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsc0JBQXNCO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDBDQUEwQyxTQUFTOztBQUVuRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qjs7QUFFNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNB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RUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQ7O0FBRTlEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsNkJBQTZCOztBQUU3QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87OztBQUdQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRDtBQUNqRCxTQUFTO0FBQ1QsT0FBTztBQUNQLG1EQUFtRDtBQUNuRDs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVc7OztBQUdYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7O0FBR1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDLG1DQUFtQztBQUNuQyxvQ0FBb0M7QUFDcEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQzs7QUFFbEMsd0NBQXdDOztBQUV4Qyw2REFBNkQ7O0FBRTdEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsUUFBUTtBQUMzQjs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsT0FBTztBQUN4Qjs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTs7QUFFQSxDQUFDIiwiZmlsZSI6InZlbmRvcnN+aW1hZ2VfY3JvcHBlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogQ3JvcHBlci5qcyB2MS41LjlcbiAqIGh0dHBzOi8vZmVuZ3l1YW5jaGVuLmdpdGh1Yi5pby9jcm9wcGVyanNcbiAqXG4gKiBDb3B5cmlnaHQgMjAxNS1wcmVzZW50IENoZW4gRmVuZ3l1YW5cbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuICpcbiAqIERhdGU6IDIwMjAtMDktMTBUMTM6MTY6MjYuNzQzWlxuICovXG5cbihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpIDpcbiAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKGZhY3RvcnkpIDpcbiAgKGdsb2JhbCA9IHR5cGVvZiBnbG9iYWxUaGlzICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbFRoaXMgOiBnbG9iYWwgfHwgc2VsZiwgZ2xvYmFsLkNyb3BwZXIgPSBmYWN0b3J5KCkpO1xufSh0aGlzLCAoZnVuY3Rpb24gKCkgeyAndXNlIHN0cmljdCc7XG5cbiAgZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICAgIF90eXBlb2YgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgX3R5cGVvZiA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBfdHlwZW9mKG9iaik7XG4gIH1cblxuICBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gICAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9XG5cbiAgZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpO1xuXG4gICAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICAgIHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpO1xuICAgICAgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTtcbiAgICAgIH0pO1xuICAgICAga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpO1xuICAgIH1cblxuICAgIHJldHVybiBrZXlzO1xuICB9XG5cbiAgZnVuY3Rpb24gX29iamVjdFNwcmVhZDIodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9O1xuXG4gICAgICBpZiAoaSAlIDIpIHtcbiAgICAgICAgb3duS2V5cyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH1cblxuICBmdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gICAgcmV0dXJuIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfbm9uSXRlcmFibGVTcHJlYWQoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkoYXJyKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICAgIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoaXRlcikpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xuICB9XG5cbiAgZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICAgIGlmICghbykgcmV0dXJuO1xuICAgIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gICAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICAgIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gICAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB9XG5cbiAgZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICAgIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgYXJyMltpXSA9IGFycltpXTtcblxuICAgIHJldHVybiBhcnIyO1xuICB9XG5cbiAgZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xuICB9XG5cbiAgdmFyIElTX0JST1dTRVIgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LmRvY3VtZW50ICE9PSAndW5kZWZpbmVkJztcbiAgdmFyIFdJTkRPVyA9IElTX0JST1dTRVIgPyB3aW5kb3cgOiB7fTtcbiAgdmFyIElTX1RPVUNIX0RFVklDRSA9IElTX0JST1dTRVIgJiYgV0lORE9XLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudCA/ICdvbnRvdWNoc3RhcnQnIGluIFdJTkRPVy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgOiBmYWxzZTtcbiAgdmFyIEhBU19QT0lOVEVSX0VWRU5UID0gSVNfQlJPV1NFUiA/ICdQb2ludGVyRXZlbnQnIGluIFdJTkRPVyA6IGZhbHNlO1xuICB2YXIgTkFNRVNQQUNFID0gJ2Nyb3BwZXInOyAvLyBBY3Rpb25zXG5cbiAgdmFyIEFDVElPTl9BTEwgPSAnYWxsJztcbiAgdmFyIEFDVElPTl9DUk9QID0gJ2Nyb3AnO1xuICB2YXIgQUNUSU9OX01PVkUgPSAnbW92ZSc7XG4gIHZhciBBQ1RJT05fWk9PTSA9ICd6b29tJztcbiAgdmFyIEFDVElPTl9FQVNUID0gJ2UnO1xuICB2YXIgQUNUSU9OX1dFU1QgPSAndyc7XG4gIHZhciBBQ1RJT05fU09VVEggPSAncyc7XG4gIHZhciBBQ1RJT05fTk9SVEggPSAnbic7XG4gIHZhciBBQ1RJT05fTk9SVEhfRUFTVCA9ICduZSc7XG4gIHZhciBBQ1RJT05fTk9SVEhfV0VTVCA9ICdudyc7XG4gIHZhciBBQ1RJT05fU09VVEhfRUFTVCA9ICdzZSc7XG4gIHZhciBBQ1RJT05fU09VVEhfV0VTVCA9ICdzdyc7IC8vIENsYXNzZXNcblxuICB2YXIgQ0xBU1NfQ1JPUCA9IFwiXCIuY29uY2F0KE5BTUVTUEFDRSwgXCItY3JvcFwiKTtcbiAgdmFyIENMQVNTX0RJU0FCTEVEID0gXCJcIi5jb25jYXQoTkFNRVNQQUNFLCBcIi1kaXNhYmxlZFwiKTtcbiAgdmFyIENMQVNTX0hJRERFTiA9IFwiXCIuY29uY2F0KE5BTUVTUEFDRSwgXCItaGlkZGVuXCIpO1xuICB2YXIgQ0xBU1NfSElERSA9IFwiXCIuY29uY2F0KE5BTUVTUEFDRSwgXCItaGlkZVwiKTtcbiAgdmFyIENMQVNTX0lOVklTSUJMRSA9IFwiXCIuY29uY2F0KE5BTUVTUEFDRSwgXCItaW52aXNpYmxlXCIpO1xuICB2YXIgQ0xBU1NfTU9EQUwgPSBcIlwiLmNvbmNhdChOQU1FU1BBQ0UsIFwiLW1vZGFsXCIpO1xuICB2YXIgQ0xBU1NfTU9WRSA9IFwiXCIuY29uY2F0KE5BTUVTUEFDRSwgXCItbW92ZVwiKTsgLy8gRGF0YSBrZXlzXG5cbiAgdmFyIERBVEFfQUNUSU9OID0gXCJcIi5jb25jYXQoTkFNRVNQQUNFLCBcIkFjdGlvblwiKTtcbiAgdmFyIERBVEFfUFJFVklFVyA9IFwiXCIuY29uY2F0KE5BTUVTUEFDRSwgXCJQcmV2aWV3XCIpOyAvLyBEcmFnIG1vZGVzXG5cbiAgdmFyIERSQUdfTU9ERV9DUk9QID0gJ2Nyb3AnO1xuICB2YXIgRFJBR19NT0RFX01PVkUgPSAnbW92ZSc7XG4gIHZhciBEUkFHX01PREVfTk9ORSA9ICdub25lJzsgLy8gRXZlbnRzXG5cbiAgdmFyIEVWRU5UX0NST1AgPSAnY3JvcCc7XG4gIHZhciBFVkVOVF9DUk9QX0VORCA9ICdjcm9wZW5kJztcbiAgdmFyIEVWRU5UX0NST1BfTU9WRSA9ICdjcm9wbW92ZSc7XG4gIHZhciBFVkVOVF9DUk9QX1NUQVJUID0gJ2Nyb3BzdGFydCc7XG4gIHZhciBFVkVOVF9EQkxDTElDSyA9ICdkYmxjbGljayc7XG4gIHZhciBFVkVOVF9UT1VDSF9TVEFSVCA9IElTX1RPVUNIX0RFVklDRSA/ICd0b3VjaHN0YXJ0JyA6ICdtb3VzZWRvd24nO1xuICB2YXIgRVZFTlRfVE9VQ0hfTU9WRSA9IElTX1RPVUNIX0RFVklDRSA/ICd0b3VjaG1vdmUnIDogJ21vdXNlbW92ZSc7XG4gIHZhciBFVkVOVF9UT1VDSF9FTkQgPSBJU19UT1VDSF9ERVZJQ0UgPyAndG91Y2hlbmQgdG91Y2hjYW5jZWwnIDogJ21vdXNldXAnO1xuICB2YXIgRVZFTlRfUE9JTlRFUl9ET1dOID0gSEFTX1BPSU5URVJfRVZFTlQgPyAncG9pbnRlcmRvd24nIDogRVZFTlRfVE9VQ0hfU1RBUlQ7XG4gIHZhciBFVkVOVF9QT0lOVEVSX01PVkUgPSBIQVNfUE9JTlRFUl9FVkVOVCA/ICdwb2ludGVybW92ZScgOiBFVkVOVF9UT1VDSF9NT1ZFO1xuICB2YXIgRVZFTlRfUE9JTlRFUl9VUCA9IEhBU19QT0lOVEVSX0VWRU5UID8gJ3BvaW50ZXJ1cCBwb2ludGVyY2FuY2VsJyA6IEVWRU5UX1RPVUNIX0VORDtcbiAgdmFyIEVWRU5UX1JFQURZID0gJ3JlYWR5JztcbiAgdmFyIEVWRU5UX1JFU0laRSA9ICdyZXNpemUnO1xuICB2YXIgRVZFTlRfV0hFRUwgPSAnd2hlZWwnO1xuICB2YXIgRVZFTlRfWk9PTSA9ICd6b29tJzsgLy8gTWltZSB0eXBlc1xuXG4gIHZhciBNSU1FX1RZUEVfSlBFRyA9ICdpbWFnZS9qcGVnJzsgLy8gUmVnRXhwc1xuXG4gIHZhciBSRUdFWFBfQUNUSU9OUyA9IC9eZXx3fHN8bnxzZXxzd3xuZXxud3xhbGx8Y3JvcHxtb3ZlfHpvb20kLztcbiAgdmFyIFJFR0VYUF9EQVRBX1VSTCA9IC9eZGF0YTovO1xuICB2YXIgUkVHRVhQX0RBVEFfVVJMX0pQRUcgPSAvXmRhdGE6aW1hZ2VcXC9qcGVnO2Jhc2U2NCwvO1xuICB2YXIgUkVHRVhQX1RBR19OQU1FID0gL15pbWd8Y2FudmFzJC9pOyAvLyBNaXNjXG4gIC8vIEluc3BpcmVkIGJ5IHRoZSBkZWZhdWx0IHdpZHRoIGFuZCBoZWlnaHQgb2YgYSBjYW52YXMgZWxlbWVudC5cblxuICB2YXIgTUlOX0NPTlRBSU5FUl9XSURUSCA9IDIwMDtcbiAgdmFyIE1JTl9DT05UQUlORVJfSEVJR0hUID0gMTAwO1xuXG4gIHZhciBERUZBVUxUUyA9IHtcbiAgICAvLyBEZWZpbmUgdGhlIHZpZXcgbW9kZSBvZiB0aGUgY3JvcHBlclxuICAgIHZpZXdNb2RlOiAwLFxuICAgIC8vIDAsIDEsIDIsIDNcbiAgICAvLyBEZWZpbmUgdGhlIGRyYWdnaW5nIG1vZGUgb2YgdGhlIGNyb3BwZXJcbiAgICBkcmFnTW9kZTogRFJBR19NT0RFX0NST1AsXG4gICAgLy8gJ2Nyb3AnLCAnbW92ZScgb3IgJ25vbmUnXG4gICAgLy8gRGVmaW5lIHRoZSBpbml0aWFsIGFzcGVjdCByYXRpbyBvZiB0aGUgY3JvcCBib3hcbiAgICBpbml0aWFsQXNwZWN0UmF0aW86IE5hTixcbiAgICAvLyBEZWZpbmUgdGhlIGFzcGVjdCByYXRpbyBvZiB0aGUgY3JvcCBib3hcbiAgICBhc3BlY3RSYXRpbzogTmFOLFxuICAgIC8vIEFuIG9iamVjdCB3aXRoIHRoZSBwcmV2aW91cyBjcm9wcGluZyByZXN1bHQgZGF0YVxuICAgIGRhdGE6IG51bGwsXG4gICAgLy8gQSBzZWxlY3RvciBmb3IgYWRkaW5nIGV4dHJhIGNvbnRhaW5lcnMgdG8gcHJldmlld1xuICAgIHByZXZpZXc6ICcnLFxuICAgIC8vIFJlLXJlbmRlciB0aGUgY3JvcHBlciB3aGVuIHJlc2l6ZSB0aGUgd2luZG93XG4gICAgcmVzcG9uc2l2ZTogdHJ1ZSxcbiAgICAvLyBSZXN0b3JlIHRoZSBjcm9wcGVkIGFyZWEgYWZ0ZXIgcmVzaXplIHRoZSB3aW5kb3dcbiAgICByZXN0b3JlOiB0cnVlLFxuICAgIC8vIENoZWNrIGlmIHRoZSBjdXJyZW50IGltYWdlIGlzIGEgY3Jvc3Mtb3JpZ2luIGltYWdlXG4gICAgY2hlY2tDcm9zc09yaWdpbjogdHJ1ZSxcbiAgICAvLyBDaGVjayB0aGUgY3VycmVudCBpbWFnZSdzIEV4aWYgT3JpZW50YXRpb24gaW5mb3JtYXRpb25cbiAgICBjaGVja09yaWVudGF0aW9uOiB0cnVlLFxuICAgIC8vIFNob3cgdGhlIGJsYWNrIG1vZGFsXG4gICAgbW9kYWw6IHRydWUsXG4gICAgLy8gU2hvdyB0aGUgZGFzaGVkIGxpbmVzIGZvciBndWlkaW5nXG4gICAgZ3VpZGVzOiB0cnVlLFxuICAgIC8vIFNob3cgdGhlIGNlbnRlciBpbmRpY2F0b3IgZm9yIGd1aWRpbmdcbiAgICBjZW50ZXI6IHRydWUsXG4gICAgLy8gU2hvdyB0aGUgd2hpdGUgbW9kYWwgdG8gaGlnaGxpZ2h0IHRoZSBjcm9wIGJveFxuICAgIGhpZ2hsaWdodDogdHJ1ZSxcbiAgICAvLyBTaG93IHRoZSBncmlkIGJhY2tncm91bmRcbiAgICBiYWNrZ3JvdW5kOiB0cnVlLFxuICAgIC8vIEVuYWJsZSB0byBjcm9wIHRoZSBpbWFnZSBhdXRvbWF0aWNhbGx5IHdoZW4gaW5pdGlhbGl6ZVxuICAgIGF1dG9Dcm9wOiB0cnVlLFxuICAgIC8vIERlZmluZSB0aGUgcGVyY2VudGFnZSBvZiBhdXRvbWF0aWMgY3JvcHBpbmcgYXJlYSB3aGVuIGluaXRpYWxpemVzXG4gICAgYXV0b0Nyb3BBcmVhOiAwLjgsXG4gICAgLy8gRW5hYmxlIHRvIG1vdmUgdGhlIGltYWdlXG4gICAgbW92YWJsZTogdHJ1ZSxcbiAgICAvLyBFbmFibGUgdG8gcm90YXRlIHRoZSBpbWFnZVxuICAgIHJvdGF0YWJsZTogdHJ1ZSxcbiAgICAvLyBFbmFibGUgdG8gc2NhbGUgdGhlIGltYWdlXG4gICAgc2NhbGFibGU6IHRydWUsXG4gICAgLy8gRW5hYmxlIHRvIHpvb20gdGhlIGltYWdlXG4gICAgem9vbWFibGU6IHRydWUsXG4gICAgLy8gRW5hYmxlIHRvIHpvb20gdGhlIGltYWdlIGJ5IGRyYWdnaW5nIHRvdWNoXG4gICAgem9vbU9uVG91Y2g6IHRydWUsXG4gICAgLy8gRW5hYmxlIHRvIHpvb20gdGhlIGltYWdlIGJ5IHdoZWVsaW5nIG1vdXNlXG4gICAgem9vbU9uV2hlZWw6IHRydWUsXG4gICAgLy8gRGVmaW5lIHpvb20gcmF0aW8gd2hlbiB6b29tIHRoZSBpbWFnZSBieSB3aGVlbGluZyBtb3VzZVxuICAgIHdoZWVsWm9vbVJhdGlvOiAwLjEsXG4gICAgLy8gRW5hYmxlIHRvIG1vdmUgdGhlIGNyb3AgYm94XG4gICAgY3JvcEJveE1vdmFibGU6IHRydWUsXG4gICAgLy8gRW5hYmxlIHRvIHJlc2l6ZSB0aGUgY3JvcCBib3hcbiAgICBjcm9wQm94UmVzaXphYmxlOiB0cnVlLFxuICAgIC8vIFRvZ2dsZSBkcmFnIG1vZGUgYmV0d2VlbiBcImNyb3BcIiBhbmQgXCJtb3ZlXCIgd2hlbiBjbGljayB0d2ljZSBvbiB0aGUgY3JvcHBlclxuICAgIHRvZ2dsZURyYWdNb2RlT25EYmxjbGljazogdHJ1ZSxcbiAgICAvLyBTaXplIGxpbWl0YXRpb25cbiAgICBtaW5DYW52YXNXaWR0aDogMCxcbiAgICBtaW5DYW52YXNIZWlnaHQ6IDAsXG4gICAgbWluQ3JvcEJveFdpZHRoOiAwLFxuICAgIG1pbkNyb3BCb3hIZWlnaHQ6IDAsXG4gICAgbWluQ29udGFpbmVyV2lkdGg6IE1JTl9DT05UQUlORVJfV0lEVEgsXG4gICAgbWluQ29udGFpbmVySGVpZ2h0OiBNSU5fQ09OVEFJTkVSX0hFSUdIVCxcbiAgICAvLyBTaG9ydGN1dHMgb2YgZXZlbnRzXG4gICAgcmVhZHk6IG51bGwsXG4gICAgY3JvcHN0YXJ0OiBudWxsLFxuICAgIGNyb3Btb3ZlOiBudWxsLFxuICAgIGNyb3BlbmQ6IG51bGwsXG4gICAgY3JvcDogbnVsbCxcbiAgICB6b29tOiBudWxsXG4gIH07XG5cbiAgdmFyIFRFTVBMQVRFID0gJzxkaXYgY2xhc3M9XCJjcm9wcGVyLWNvbnRhaW5lclwiIHRvdWNoLWFjdGlvbj1cIm5vbmVcIj4nICsgJzxkaXYgY2xhc3M9XCJjcm9wcGVyLXdyYXAtYm94XCI+JyArICc8ZGl2IGNsYXNzPVwiY3JvcHBlci1jYW52YXNcIj48L2Rpdj4nICsgJzwvZGl2PicgKyAnPGRpdiBjbGFzcz1cImNyb3BwZXItZHJhZy1ib3hcIj48L2Rpdj4nICsgJzxkaXYgY2xhc3M9XCJjcm9wcGVyLWNyb3AtYm94XCI+JyArICc8c3BhbiBjbGFzcz1cImNyb3BwZXItdmlldy1ib3hcIj48L3NwYW4+JyArICc8c3BhbiBjbGFzcz1cImNyb3BwZXItZGFzaGVkIGRhc2hlZC1oXCI+PC9zcGFuPicgKyAnPHNwYW4gY2xhc3M9XCJjcm9wcGVyLWRhc2hlZCBkYXNoZWQtdlwiPjwvc3Bhbj4nICsgJzxzcGFuIGNsYXNzPVwiY3JvcHBlci1jZW50ZXJcIj48L3NwYW4+JyArICc8c3BhbiBjbGFzcz1cImNyb3BwZXItZmFjZVwiPjwvc3Bhbj4nICsgJzxzcGFuIGNsYXNzPVwiY3JvcHBlci1saW5lIGxpbmUtZVwiIGRhdGEtY3JvcHBlci1hY3Rpb249XCJlXCI+PC9zcGFuPicgKyAnPHNwYW4gY2xhc3M9XCJjcm9wcGVyLWxpbmUgbGluZS1uXCIgZGF0YS1jcm9wcGVyLWFjdGlvbj1cIm5cIj48L3NwYW4+JyArICc8c3BhbiBjbGFzcz1cImNyb3BwZXItbGluZSBsaW5lLXdcIiBkYXRhLWNyb3BwZXItYWN0aW9uPVwid1wiPjwvc3Bhbj4nICsgJzxzcGFuIGNsYXNzPVwiY3JvcHBlci1saW5lIGxpbmUtc1wiIGRhdGEtY3JvcHBlci1hY3Rpb249XCJzXCI+PC9zcGFuPicgKyAnPHNwYW4gY2xhc3M9XCJjcm9wcGVyLXBvaW50IHBvaW50LWVcIiBkYXRhLWNyb3BwZXItYWN0aW9uPVwiZVwiPjwvc3Bhbj4nICsgJzxzcGFuIGNsYXNzPVwiY3JvcHBlci1wb2ludCBwb2ludC1uXCIgZGF0YS1jcm9wcGVyLWFjdGlvbj1cIm5cIj48L3NwYW4+JyArICc8c3BhbiBjbGFzcz1cImNyb3BwZXItcG9pbnQgcG9pbnQtd1wiIGRhdGEtY3JvcHBlci1hY3Rpb249XCJ3XCI+PC9zcGFuPicgKyAnPHNwYW4gY2xhc3M9XCJjcm9wcGVyLXBvaW50IHBvaW50LXNcIiBkYXRhLWNyb3BwZXItYWN0aW9uPVwic1wiPjwvc3Bhbj4nICsgJzxzcGFuIGNsYXNzPVwiY3JvcHBlci1wb2ludCBwb2ludC1uZVwiIGRhdGEtY3JvcHBlci1hY3Rpb249XCJuZVwiPjwvc3Bhbj4nICsgJzxzcGFuIGNsYXNzPVwiY3JvcHBlci1wb2ludCBwb2ludC1ud1wiIGRhdGEtY3JvcHBlci1hY3Rpb249XCJud1wiPjwvc3Bhbj4nICsgJzxzcGFuIGNsYXNzPVwiY3JvcHBlci1wb2ludCBwb2ludC1zd1wiIGRhdGEtY3JvcHBlci1hY3Rpb249XCJzd1wiPjwvc3Bhbj4nICsgJzxzcGFuIGNsYXNzPVwiY3JvcHBlci1wb2ludCBwb2ludC1zZVwiIGRhdGEtY3JvcHBlci1hY3Rpb249XCJzZVwiPjwvc3Bhbj4nICsgJzwvZGl2PicgKyAnPC9kaXY+JztcblxuICAvKipcbiAgICogQ2hlY2sgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIG5vdCBhIG51bWJlci5cbiAgICovXG5cbiAgdmFyIGlzTmFOID0gTnVtYmVyLmlzTmFOIHx8IFdJTkRPVy5pc05hTjtcbiAgLyoqXG4gICAqIENoZWNrIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhIG51bWJlci5cbiAgICogQHBhcmFtIHsqfSB2YWx1ZSAtIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAgICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhIG51bWJlciwgZWxzZSBgZmFsc2VgLlxuICAgKi9cblxuICBmdW5jdGlvbiBpc051bWJlcih2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmICFpc05hTih2YWx1ZSk7XG4gIH1cbiAgLyoqXG4gICAqIENoZWNrIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhIHBvc2l0aXZlIG51bWJlci5cbiAgICogQHBhcmFtIHsqfSB2YWx1ZSAtIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAgICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhIHBvc2l0aXZlIG51bWJlciwgZWxzZSBgZmFsc2VgLlxuICAgKi9cblxuICB2YXIgaXNQb3NpdGl2ZU51bWJlciA9IGZ1bmN0aW9uIGlzUG9zaXRpdmVOdW1iZXIodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPiAwICYmIHZhbHVlIDwgSW5maW5pdHk7XG4gIH07XG4gIC8qKlxuICAgKiBDaGVjayBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgdW5kZWZpbmVkLlxuICAgKiBAcGFyYW0geyp9IHZhbHVlIC0gVGhlIHZhbHVlIHRvIGNoZWNrLlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIHVuZGVmaW5lZCwgZWxzZSBgZmFsc2VgLlxuICAgKi9cblxuICBmdW5jdGlvbiBpc1VuZGVmaW5lZCh2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnO1xuICB9XG4gIC8qKlxuICAgKiBDaGVjayBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYW4gb2JqZWN0LlxuICAgKiBAcGFyYW0geyp9IHZhbHVlIC0gVGhlIHZhbHVlIHRvIGNoZWNrLlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICAgKi9cblxuICBmdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICAgIHJldHVybiBfdHlwZW9mKHZhbHVlKSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgIT09IG51bGw7XG4gIH1cbiAgdmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbiAgLyoqXG4gICAqIENoZWNrIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhIHBsYWluIG9iamVjdC5cbiAgICogQHBhcmFtIHsqfSB2YWx1ZSAtIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAgICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhIHBsYWluIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICAgKi9cblxuICBmdW5jdGlvbiBpc1BsYWluT2JqZWN0KHZhbHVlKSB7XG4gICAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgdmFyIF9jb25zdHJ1Y3RvciA9IHZhbHVlLmNvbnN0cnVjdG9yO1xuICAgICAgdmFyIHByb3RvdHlwZSA9IF9jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gICAgICByZXR1cm4gX2NvbnN0cnVjdG9yICYmIHByb3RvdHlwZSAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKHByb3RvdHlwZSwgJ2lzUHJvdG90eXBlT2YnKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogQ2hlY2sgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGEgZnVuY3Rpb24uXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gICAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYSBmdW5jdGlvbiwgZWxzZSBgZmFsc2VgLlxuICAgKi9cblxuICBmdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJztcbiAgfVxuICB2YXIgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG4gIC8qKlxuICAgKiBDb252ZXJ0IGFycmF5LWxpa2Ugb3IgaXRlcmFibGUgb2JqZWN0IHRvIGFuIGFycmF5LlxuICAgKiBAcGFyYW0geyp9IHZhbHVlIC0gVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gICAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBhIG5ldyBhcnJheS5cbiAgICovXG5cbiAgZnVuY3Rpb24gdG9BcnJheSh2YWx1ZSkge1xuICAgIHJldHVybiBBcnJheS5mcm9tID8gQXJyYXkuZnJvbSh2YWx1ZSkgOiBzbGljZS5jYWxsKHZhbHVlKTtcbiAgfVxuICAvKipcbiAgICogSXRlcmF0ZSB0aGUgZ2l2ZW4gZGF0YS5cbiAgICogQHBhcmFtIHsqfSBkYXRhIC0gVGhlIGRhdGEgdG8gaXRlcmF0ZS5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgLSBUaGUgcHJvY2VzcyBmdW5jdGlvbiBmb3IgZWFjaCBlbGVtZW50LlxuICAgKiBAcmV0dXJucyB7Kn0gVGhlIG9yaWdpbmFsIGRhdGEuXG4gICAqL1xuXG4gIGZ1bmN0aW9uIGZvckVhY2goZGF0YSwgY2FsbGJhY2spIHtcbiAgICBpZiAoZGF0YSAmJiBpc0Z1bmN0aW9uKGNhbGxiYWNrKSkge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkgfHwgaXNOdW1iZXIoZGF0YS5sZW5ndGgpXG4gICAgICAvKiBhcnJheS1saWtlICovXG4gICAgICApIHtcbiAgICAgICAgICB0b0FycmF5KGRhdGEpLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoZGF0YSwgdmFsdWUsIGtleSwgZGF0YSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNPYmplY3QoZGF0YSkpIHtcbiAgICAgICAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgY2FsbGJhY2suY2FsbChkYXRhLCBkYXRhW2tleV0sIGtleSwgZGF0YSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBkYXRhO1xuICB9XG4gIC8qKlxuICAgKiBFeHRlbmQgdGhlIGdpdmVuIG9iamVjdC5cbiAgICogQHBhcmFtIHsqfSB0YXJnZXQgLSBUaGUgdGFyZ2V0IG9iamVjdCB0byBleHRlbmQuXG4gICAqIEBwYXJhbSB7Kn0gYXJncyAtIFRoZSByZXN0IG9iamVjdHMgZm9yIG1lcmdpbmcgdG8gdGhlIHRhcmdldCBvYmplY3QuXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBleHRlbmRlZCBvYmplY3QuXG4gICAqL1xuXG4gIHZhciBhc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBpZiAoaXNPYmplY3QodGFyZ2V0KSAmJiBhcmdzLmxlbmd0aCA+IDApIHtcbiAgICAgIGFyZ3MuZm9yRWFjaChmdW5jdGlvbiAoYXJnKSB7XG4gICAgICAgIGlmIChpc09iamVjdChhcmcpKSB7XG4gICAgICAgICAgT2JqZWN0LmtleXMoYXJnKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIHRhcmdldFtrZXldID0gYXJnW2tleV07XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG4gIHZhciBSRUdFWFBfREVDSU1BTFMgPSAvXFwuXFxkKig/OjB8OSl7MTJ9XFxkKiQvO1xuICAvKipcbiAgICogTm9ybWFsaXplIGRlY2ltYWwgbnVtYmVyLlxuICAgKiBDaGVjayBvdXQge0BsaW5rIGh0dHBzOi8vMC4zMDAwMDAwMDAwMDAwMDAwNC5jb20vfVxuICAgKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gbm9ybWFsaXplLlxuICAgKiBAcGFyYW0ge251bWJlcn0gW3RpbWVzPTEwMDAwMDAwMDAwMF0gLSBUaGUgdGltZXMgZm9yIG5vcm1hbGl6aW5nLlxuICAgKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBub3JtYWxpemVkIG51bWJlci5cbiAgICovXG5cbiAgZnVuY3Rpb24gbm9ybWFsaXplRGVjaW1hbE51bWJlcih2YWx1ZSkge1xuICAgIHZhciB0aW1lcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMTAwMDAwMDAwMDAwO1xuICAgIHJldHVybiBSRUdFWFBfREVDSU1BTFMudGVzdCh2YWx1ZSkgPyBNYXRoLnJvdW5kKHZhbHVlICogdGltZXMpIC8gdGltZXMgOiB2YWx1ZTtcbiAgfVxuICB2YXIgUkVHRVhQX1NVRkZJWCA9IC9ed2lkdGh8aGVpZ2h0fGxlZnR8dG9wfG1hcmdpbkxlZnR8bWFyZ2luVG9wJC87XG4gIC8qKlxuICAgKiBBcHBseSBzdHlsZXMgdG8gdGhlIGdpdmVuIGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudCAtIFRoZSB0YXJnZXQgZWxlbWVudC5cbiAgICogQHBhcmFtIHtPYmplY3R9IHN0eWxlcyAtIFRoZSBzdHlsZXMgZm9yIGFwcGx5aW5nLlxuICAgKi9cblxuICBmdW5jdGlvbiBzZXRTdHlsZShlbGVtZW50LCBzdHlsZXMpIHtcbiAgICB2YXIgc3R5bGUgPSBlbGVtZW50LnN0eWxlO1xuICAgIGZvckVhY2goc3R5bGVzLCBmdW5jdGlvbiAodmFsdWUsIHByb3BlcnR5KSB7XG4gICAgICBpZiAoUkVHRVhQX1NVRkZJWC50ZXN0KHByb3BlcnR5KSAmJiBpc051bWJlcih2YWx1ZSkpIHtcbiAgICAgICAgdmFsdWUgPSBcIlwiLmNvbmNhdCh2YWx1ZSwgXCJweFwiKTtcbiAgICAgIH1cblxuICAgICAgc3R5bGVbcHJvcGVydHldID0gdmFsdWU7XG4gICAgfSk7XG4gIH1cbiAgLyoqXG4gICAqIENoZWNrIGlmIHRoZSBnaXZlbiBlbGVtZW50IGhhcyBhIHNwZWNpYWwgY2xhc3MuXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudCAtIFRoZSBlbGVtZW50IHRvIGNoZWNrLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgLSBUaGUgY2xhc3MgdG8gc2VhcmNoLlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHNwZWNpYWwgY2xhc3Mgd2FzIGZvdW5kLlxuICAgKi9cblxuICBmdW5jdGlvbiBoYXNDbGFzcyhlbGVtZW50LCB2YWx1ZSkge1xuICAgIHJldHVybiBlbGVtZW50LmNsYXNzTGlzdCA/IGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKHZhbHVlKSA6IGVsZW1lbnQuY2xhc3NOYW1lLmluZGV4T2YodmFsdWUpID4gLTE7XG4gIH1cbiAgLyoqXG4gICAqIEFkZCBjbGFzc2VzIHRvIHRoZSBnaXZlbiBlbGVtZW50LlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnQgLSBUaGUgdGFyZ2V0IGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSAtIFRoZSBjbGFzc2VzIHRvIGJlIGFkZGVkLlxuICAgKi9cblxuICBmdW5jdGlvbiBhZGRDbGFzcyhlbGVtZW50LCB2YWx1ZSkge1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoaXNOdW1iZXIoZWxlbWVudC5sZW5ndGgpKSB7XG4gICAgICBmb3JFYWNoKGVsZW1lbnQsIGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgICAgIGFkZENsYXNzKGVsZW0sIHZhbHVlKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdCkge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKHZhbHVlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgY2xhc3NOYW1lID0gZWxlbWVudC5jbGFzc05hbWUudHJpbSgpO1xuXG4gICAgaWYgKCFjbGFzc05hbWUpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gdmFsdWU7XG4gICAgfSBlbHNlIGlmIChjbGFzc05hbWUuaW5kZXhPZih2YWx1ZSkgPCAwKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTmFtZSA9IFwiXCIuY29uY2F0KGNsYXNzTmFtZSwgXCIgXCIpLmNvbmNhdCh2YWx1ZSk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBSZW1vdmUgY2xhc3NlcyBmcm9tIHRoZSBnaXZlbiBlbGVtZW50LlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnQgLSBUaGUgdGFyZ2V0IGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSAtIFRoZSBjbGFzc2VzIHRvIGJlIHJlbW92ZWQuXG4gICAqL1xuXG4gIGZ1bmN0aW9uIHJlbW92ZUNsYXNzKGVsZW1lbnQsIHZhbHVlKSB7XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChpc051bWJlcihlbGVtZW50Lmxlbmd0aCkpIHtcbiAgICAgIGZvckVhY2goZWxlbWVudCwgZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgcmVtb3ZlQ2xhc3MoZWxlbSwgdmFsdWUpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0KSB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodmFsdWUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChlbGVtZW50LmNsYXNzTmFtZS5pbmRleE9mKHZhbHVlKSA+PSAwKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTmFtZSA9IGVsZW1lbnQuY2xhc3NOYW1lLnJlcGxhY2UodmFsdWUsICcnKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIEFkZCBvciByZW1vdmUgY2xhc3NlcyBmcm9tIHRoZSBnaXZlbiBlbGVtZW50LlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnQgLSBUaGUgdGFyZ2V0IGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSAtIFRoZSBjbGFzc2VzIHRvIGJlIHRvZ2dsZWQuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gYWRkZWQgLSBBZGQgb25seS5cbiAgICovXG5cbiAgZnVuY3Rpb24gdG9nZ2xlQ2xhc3MoZWxlbWVudCwgdmFsdWUsIGFkZGVkKSB7XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChpc051bWJlcihlbGVtZW50Lmxlbmd0aCkpIHtcbiAgICAgIGZvckVhY2goZWxlbWVudCwgZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgdG9nZ2xlQ2xhc3MoZWxlbSwgdmFsdWUsIGFkZGVkKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gSUUxMC0xMSBkb2Vzbid0IHN1cHBvcnQgdGhlIHNlY29uZCBwYXJhbWV0ZXIgb2YgYGNsYXNzTGlzdC50b2dnbGVgXG5cblxuICAgIGlmIChhZGRlZCkge1xuICAgICAgYWRkQ2xhc3MoZWxlbWVudCwgdmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmVDbGFzcyhlbGVtZW50LCB2YWx1ZSk7XG4gICAgfVxuICB9XG4gIHZhciBSRUdFWFBfQ0FNRUxfQ0FTRSA9IC8oW2EtelxcZF0pKFtBLVpdKS9nO1xuICAvKipcbiAgICogVHJhbnNmb3JtIHRoZSBnaXZlbiBzdHJpbmcgZnJvbSBjYW1lbENhc2UgdG8ga2ViYWItY2FzZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgLSBUaGUgdmFsdWUgdG8gdHJhbnNmb3JtLlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgdHJhbnNmb3JtZWQgdmFsdWUuXG4gICAqL1xuXG4gIGZ1bmN0aW9uIHRvUGFyYW1DYXNlKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoUkVHRVhQX0NBTUVMX0NBU0UsICckMS0kMicpLnRvTG93ZXJDYXNlKCk7XG4gIH1cbiAgLyoqXG4gICAqIEdldCBkYXRhIGZyb20gdGhlIGdpdmVuIGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudCAtIFRoZSB0YXJnZXQgZWxlbWVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBUaGUgZGF0YSBrZXkgdG8gZ2V0LlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgZGF0YSB2YWx1ZS5cbiAgICovXG5cbiAgZnVuY3Rpb24gZ2V0RGF0YShlbGVtZW50LCBuYW1lKSB7XG4gICAgaWYgKGlzT2JqZWN0KGVsZW1lbnRbbmFtZV0pKSB7XG4gICAgICByZXR1cm4gZWxlbWVudFtuYW1lXTtcbiAgICB9XG5cbiAgICBpZiAoZWxlbWVudC5kYXRhc2V0KSB7XG4gICAgICByZXR1cm4gZWxlbWVudC5kYXRhc2V0W25hbWVdO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtXCIuY29uY2F0KHRvUGFyYW1DYXNlKG5hbWUpKSk7XG4gIH1cbiAgLyoqXG4gICAqIFNldCBkYXRhIHRvIHRoZSBnaXZlbiBlbGVtZW50LlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnQgLSBUaGUgdGFyZ2V0IGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gVGhlIGRhdGEga2V5IHRvIHNldC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGRhdGEgLSBUaGUgZGF0YSB2YWx1ZS5cbiAgICovXG5cbiAgZnVuY3Rpb24gc2V0RGF0YShlbGVtZW50LCBuYW1lLCBkYXRhKSB7XG4gICAgaWYgKGlzT2JqZWN0KGRhdGEpKSB7XG4gICAgICBlbGVtZW50W25hbWVdID0gZGF0YTtcbiAgICB9IGVsc2UgaWYgKGVsZW1lbnQuZGF0YXNldCkge1xuICAgICAgZWxlbWVudC5kYXRhc2V0W25hbWVdID0gZGF0YTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLVwiLmNvbmNhdCh0b1BhcmFtQ2FzZShuYW1lKSksIGRhdGEpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogUmVtb3ZlIGRhdGEgZnJvbSB0aGUgZ2l2ZW4gZWxlbWVudC5cbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50IC0gVGhlIHRhcmdldCBlbGVtZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIFRoZSBkYXRhIGtleSB0byByZW1vdmUuXG4gICAqL1xuXG4gIGZ1bmN0aW9uIHJlbW92ZURhdGEoZWxlbWVudCwgbmFtZSkge1xuICAgIGlmIChpc09iamVjdChlbGVtZW50W25hbWVdKSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZGVsZXRlIGVsZW1lbnRbbmFtZV07XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBlbGVtZW50W25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZWxlbWVudC5kYXRhc2V0KSB7XG4gICAgICAvLyAjMTI4IFNhZmFyaSBub3QgYWxsb3dzIHRvIGRlbGV0ZSBkYXRhc2V0IHByb3BlcnR5XG4gICAgICB0cnkge1xuICAgICAgICBkZWxldGUgZWxlbWVudC5kYXRhc2V0W25hbWVdO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgZWxlbWVudC5kYXRhc2V0W25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtXCIuY29uY2F0KHRvUGFyYW1DYXNlKG5hbWUpKSk7XG4gICAgfVxuICB9XG4gIHZhciBSRUdFWFBfU1BBQ0VTID0gL1xcc1xccyovO1xuXG4gIHZhciBvbmNlU3VwcG9ydGVkID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzdXBwb3J0ZWQgPSBmYWxzZTtcblxuICAgIGlmIChJU19CUk9XU0VSKSB7XG4gICAgICB2YXIgb25jZSA9IGZhbHNlO1xuXG4gICAgICB2YXIgbGlzdGVuZXIgPSBmdW5jdGlvbiBsaXN0ZW5lcigpIHt9O1xuXG4gICAgICB2YXIgb3B0aW9ucyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ29uY2UnLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHN1cHBvcnRlZCA9IHRydWU7XG4gICAgICAgICAgcmV0dXJuIG9uY2U7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgc2V0dGVyIGNhbiBmaXggYSBgVHlwZUVycm9yYCBpbiBzdHJpY3QgbW9kZVxuICAgICAgICAgKiB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvRXJyb3JzL0dldHRlcl9vbmx5fVxuICAgICAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHZhbHVlIC0gVGhlIHZhbHVlIHRvIHNldFxuICAgICAgICAgKi9cbiAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgICAgICBvbmNlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgV0lORE9XLmFkZEV2ZW50TGlzdGVuZXIoJ3Rlc3QnLCBsaXN0ZW5lciwgb3B0aW9ucyk7XG4gICAgICBXSU5ET1cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndGVzdCcsIGxpc3RlbmVyLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VwcG9ydGVkO1xuICB9KCk7XG4gIC8qKlxuICAgKiBSZW1vdmUgZXZlbnQgbGlzdGVuZXIgZnJvbSB0aGUgdGFyZ2V0IGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudCAtIFRoZSBldmVudCB0YXJnZXQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIC0gVGhlIGV2ZW50IHR5cGUocykuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyIC0gVGhlIGV2ZW50IGxpc3RlbmVyLlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIFRoZSBldmVudCBvcHRpb25zLlxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVyKGVsZW1lbnQsIHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IHt9O1xuICAgIHZhciBoYW5kbGVyID0gbGlzdGVuZXI7XG4gICAgdHlwZS50cmltKCkuc3BsaXQoUkVHRVhQX1NQQUNFUykuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmICghb25jZVN1cHBvcnRlZCkge1xuICAgICAgICB2YXIgbGlzdGVuZXJzID0gZWxlbWVudC5saXN0ZW5lcnM7XG5cbiAgICAgICAgaWYgKGxpc3RlbmVycyAmJiBsaXN0ZW5lcnNbZXZlbnRdICYmIGxpc3RlbmVyc1tldmVudF1bbGlzdGVuZXJdKSB7XG4gICAgICAgICAgaGFuZGxlciA9IGxpc3RlbmVyc1tldmVudF1bbGlzdGVuZXJdO1xuICAgICAgICAgIGRlbGV0ZSBsaXN0ZW5lcnNbZXZlbnRdW2xpc3RlbmVyXTtcblxuICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhsaXN0ZW5lcnNbZXZlbnRdKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGRlbGV0ZSBsaXN0ZW5lcnNbZXZlbnRdO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhsaXN0ZW5lcnMpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgZGVsZXRlIGVsZW1lbnQubGlzdGVuZXJzO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIsIG9wdGlvbnMpO1xuICAgIH0pO1xuICB9XG4gIC8qKlxuICAgKiBBZGQgZXZlbnQgbGlzdGVuZXIgdG8gdGhlIHRhcmdldCBlbGVtZW50LlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnQgLSBUaGUgZXZlbnQgdGFyZ2V0LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSAtIFRoZSBldmVudCB0eXBlKHMpLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lciAtIFRoZSBldmVudCBsaXN0ZW5lci5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBUaGUgZXZlbnQgb3B0aW9ucy5cbiAgICovXG5cbiAgZnVuY3Rpb24gYWRkTGlzdGVuZXIoZWxlbWVudCwgdHlwZSwgbGlzdGVuZXIpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDoge307XG4gICAgdmFyIF9oYW5kbGVyID0gbGlzdGVuZXI7XG4gICAgdHlwZS50cmltKCkuc3BsaXQoUkVHRVhQX1NQQUNFUykuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChvcHRpb25zLm9uY2UgJiYgIW9uY2VTdXBwb3J0ZWQpIHtcbiAgICAgICAgdmFyIF9lbGVtZW50JGxpc3RlbmVycyA9IGVsZW1lbnQubGlzdGVuZXJzLFxuICAgICAgICAgICAgbGlzdGVuZXJzID0gX2VsZW1lbnQkbGlzdGVuZXJzID09PSB2b2lkIDAgPyB7fSA6IF9lbGVtZW50JGxpc3RlbmVycztcblxuICAgICAgICBfaGFuZGxlciA9IGZ1bmN0aW9uIGhhbmRsZXIoKSB7XG4gICAgICAgICAgZGVsZXRlIGxpc3RlbmVyc1tldmVudF1bbGlzdGVuZXJdO1xuICAgICAgICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgX2hhbmRsZXIsIG9wdGlvbnMpO1xuXG4gICAgICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgICAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGlzdGVuZXIuYXBwbHkoZWxlbWVudCwgYXJncyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKCFsaXN0ZW5lcnNbZXZlbnRdKSB7XG4gICAgICAgICAgbGlzdGVuZXJzW2V2ZW50XSA9IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGxpc3RlbmVyc1tldmVudF1bbGlzdGVuZXJdKSB7XG4gICAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcnNbZXZlbnRdW2xpc3RlbmVyXSwgb3B0aW9ucyk7XG4gICAgICAgIH1cblxuICAgICAgICBsaXN0ZW5lcnNbZXZlbnRdW2xpc3RlbmVyXSA9IF9oYW5kbGVyO1xuICAgICAgICBlbGVtZW50Lmxpc3RlbmVycyA9IGxpc3RlbmVycztcbiAgICAgIH1cblxuICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBfaGFuZGxlciwgb3B0aW9ucyk7XG4gICAgfSk7XG4gIH1cbiAgLyoqXG4gICAqIERpc3BhdGNoIGV2ZW50IG9uIHRoZSB0YXJnZXQgZWxlbWVudC5cbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50IC0gVGhlIGV2ZW50IHRhcmdldC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgLSBUaGUgZXZlbnQgdHlwZShzKS5cbiAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEgLSBUaGUgYWRkaXRpb25hbCBldmVudCBkYXRhLlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gSW5kaWNhdGUgaWYgdGhlIGV2ZW50IGlzIGRlZmF1bHQgcHJldmVudGVkIG9yIG5vdC5cbiAgICovXG5cbiAgZnVuY3Rpb24gZGlzcGF0Y2hFdmVudChlbGVtZW50LCB0eXBlLCBkYXRhKSB7XG4gICAgdmFyIGV2ZW50OyAvLyBFdmVudCBhbmQgQ3VzdG9tRXZlbnQgb24gSUU5LTExIGFyZSBnbG9iYWwgb2JqZWN0cywgbm90IGNvbnN0cnVjdG9yc1xuXG4gICAgaWYgKGlzRnVuY3Rpb24oRXZlbnQpICYmIGlzRnVuY3Rpb24oQ3VzdG9tRXZlbnQpKSB7XG4gICAgICBldmVudCA9IG5ldyBDdXN0b21FdmVudCh0eXBlLCB7XG4gICAgICAgIGRldGFpbDogZGF0YSxcbiAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgICAgY2FuY2VsYWJsZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0N1c3RvbUV2ZW50Jyk7XG4gICAgICBldmVudC5pbml0Q3VzdG9tRXZlbnQodHlwZSwgdHJ1ZSwgdHJ1ZSwgZGF0YSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gIH1cbiAgLyoqXG4gICAqIEdldCB0aGUgb2Zmc2V0IGJhc2Ugb24gdGhlIGRvY3VtZW50LlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnQgLSBUaGUgdGFyZ2V0IGVsZW1lbnQuXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBvZmZzZXQgZGF0YS5cbiAgICovXG5cbiAgZnVuY3Rpb24gZ2V0T2Zmc2V0KGVsZW1lbnQpIHtcbiAgICB2YXIgYm94ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICByZXR1cm4ge1xuICAgICAgbGVmdDogYm94LmxlZnQgKyAod2luZG93LnBhZ2VYT2Zmc2V0IC0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudExlZnQpLFxuICAgICAgdG9wOiBib3gudG9wICsgKHdpbmRvdy5wYWdlWU9mZnNldCAtIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRUb3ApXG4gICAgfTtcbiAgfVxuICB2YXIgbG9jYXRpb24gPSBXSU5ET1cubG9jYXRpb247XG4gIHZhciBSRUdFWFBfT1JJR0lOUyA9IC9eKFxcdys6KVxcL1xcLyhbXjovPyNdKik6PyhcXGQqKS9pO1xuICAvKipcbiAgICogQ2hlY2sgaWYgdGhlIGdpdmVuIFVSTCBpcyBhIGNyb3NzIG9yaWdpbiBVUkwuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgLSBUaGUgdGFyZ2V0IFVSTC5cbiAgICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBnaXZlbiBVUkwgaXMgYSBjcm9zcyBvcmlnaW4gVVJMLCBlbHNlIGBmYWxzZWAuXG4gICAqL1xuXG4gIGZ1bmN0aW9uIGlzQ3Jvc3NPcmlnaW5VUkwodXJsKSB7XG4gICAgdmFyIHBhcnRzID0gdXJsLm1hdGNoKFJFR0VYUF9PUklHSU5TKTtcbiAgICByZXR1cm4gcGFydHMgIT09IG51bGwgJiYgKHBhcnRzWzFdICE9PSBsb2NhdGlvbi5wcm90b2NvbCB8fCBwYXJ0c1syXSAhPT0gbG9jYXRpb24uaG9zdG5hbWUgfHwgcGFydHNbM10gIT09IGxvY2F0aW9uLnBvcnQpO1xuICB9XG4gIC8qKlxuICAgKiBBZGQgdGltZXN0YW1wIHRvIHRoZSBnaXZlbiBVUkwuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgLSBUaGUgdGFyZ2V0IFVSTC5cbiAgICogQHJldHVybnMge3N0cmluZ30gVGhlIHJlc3VsdCBVUkwuXG4gICAqL1xuXG4gIGZ1bmN0aW9uIGFkZFRpbWVzdGFtcCh1cmwpIHtcbiAgICB2YXIgdGltZXN0YW1wID0gXCJ0aW1lc3RhbXA9XCIuY29uY2F0KG5ldyBEYXRlKCkuZ2V0VGltZSgpKTtcbiAgICByZXR1cm4gdXJsICsgKHVybC5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyYnKSArIHRpbWVzdGFtcDtcbiAgfVxuICAvKipcbiAgICogR2V0IHRyYW5zZm9ybXMgYmFzZSBvbiB0aGUgZ2l2ZW4gb2JqZWN0LlxuICAgKiBAcGFyYW0ge09iamVjdH0gb2JqIC0gVGhlIHRhcmdldCBvYmplY3QuXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IEEgc3RyaW5nIGNvbnRhaW5zIHRyYW5zZm9ybSB2YWx1ZXMuXG4gICAqL1xuXG4gIGZ1bmN0aW9uIGdldFRyYW5zZm9ybXMoX3JlZikge1xuICAgIHZhciByb3RhdGUgPSBfcmVmLnJvdGF0ZSxcbiAgICAgICAgc2NhbGVYID0gX3JlZi5zY2FsZVgsXG4gICAgICAgIHNjYWxlWSA9IF9yZWYuc2NhbGVZLFxuICAgICAgICB0cmFuc2xhdGVYID0gX3JlZi50cmFuc2xhdGVYLFxuICAgICAgICB0cmFuc2xhdGVZID0gX3JlZi50cmFuc2xhdGVZO1xuICAgIHZhciB2YWx1ZXMgPSBbXTtcblxuICAgIGlmIChpc051bWJlcih0cmFuc2xhdGVYKSAmJiB0cmFuc2xhdGVYICE9PSAwKSB7XG4gICAgICB2YWx1ZXMucHVzaChcInRyYW5zbGF0ZVgoXCIuY29uY2F0KHRyYW5zbGF0ZVgsIFwicHgpXCIpKTtcbiAgICB9XG5cbiAgICBpZiAoaXNOdW1iZXIodHJhbnNsYXRlWSkgJiYgdHJhbnNsYXRlWSAhPT0gMCkge1xuICAgICAgdmFsdWVzLnB1c2goXCJ0cmFuc2xhdGVZKFwiLmNvbmNhdCh0cmFuc2xhdGVZLCBcInB4KVwiKSk7XG4gICAgfSAvLyBSb3RhdGUgc2hvdWxkIGNvbWUgZmlyc3QgYmVmb3JlIHNjYWxlIHRvIG1hdGNoIG9yaWVudGF0aW9uIHRyYW5zZm9ybVxuXG5cbiAgICBpZiAoaXNOdW1iZXIocm90YXRlKSAmJiByb3RhdGUgIT09IDApIHtcbiAgICAgIHZhbHVlcy5wdXNoKFwicm90YXRlKFwiLmNvbmNhdChyb3RhdGUsIFwiZGVnKVwiKSk7XG4gICAgfVxuXG4gICAgaWYgKGlzTnVtYmVyKHNjYWxlWCkgJiYgc2NhbGVYICE9PSAxKSB7XG4gICAgICB2YWx1ZXMucHVzaChcInNjYWxlWChcIi5jb25jYXQoc2NhbGVYLCBcIilcIikpO1xuICAgIH1cblxuICAgIGlmIChpc051bWJlcihzY2FsZVkpICYmIHNjYWxlWSAhPT0gMSkge1xuICAgICAgdmFsdWVzLnB1c2goXCJzY2FsZVkoXCIuY29uY2F0KHNjYWxlWSwgXCIpXCIpKTtcbiAgICB9XG5cbiAgICB2YXIgdHJhbnNmb3JtID0gdmFsdWVzLmxlbmd0aCA/IHZhbHVlcy5qb2luKCcgJykgOiAnbm9uZSc7XG4gICAgcmV0dXJuIHtcbiAgICAgIFdlYmtpdFRyYW5zZm9ybTogdHJhbnNmb3JtLFxuICAgICAgbXNUcmFuc2Zvcm06IHRyYW5zZm9ybSxcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNmb3JtXG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogR2V0IHRoZSBtYXggcmF0aW8gb2YgYSBncm91cCBvZiBwb2ludGVycy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHBvaW50ZXJzIC0gVGhlIHRhcmdldCBwb2ludGVycy5cbiAgICogQHJldHVybnMge251bWJlcn0gVGhlIHJlc3VsdCByYXRpby5cbiAgICovXG5cbiAgZnVuY3Rpb24gZ2V0TWF4Wm9vbVJhdGlvKHBvaW50ZXJzKSB7XG4gICAgdmFyIHBvaW50ZXJzMiA9IF9vYmplY3RTcHJlYWQyKHt9LCBwb2ludGVycyk7XG5cbiAgICB2YXIgbWF4UmF0aW8gPSAwO1xuICAgIGZvckVhY2gocG9pbnRlcnMsIGZ1bmN0aW9uIChwb2ludGVyLCBwb2ludGVySWQpIHtcbiAgICAgIGRlbGV0ZSBwb2ludGVyczJbcG9pbnRlcklkXTtcbiAgICAgIGZvckVhY2gocG9pbnRlcnMyLCBmdW5jdGlvbiAocG9pbnRlcjIpIHtcbiAgICAgICAgdmFyIHgxID0gTWF0aC5hYnMocG9pbnRlci5zdGFydFggLSBwb2ludGVyMi5zdGFydFgpO1xuICAgICAgICB2YXIgeTEgPSBNYXRoLmFicyhwb2ludGVyLnN0YXJ0WSAtIHBvaW50ZXIyLnN0YXJ0WSk7XG4gICAgICAgIHZhciB4MiA9IE1hdGguYWJzKHBvaW50ZXIuZW5kWCAtIHBvaW50ZXIyLmVuZFgpO1xuICAgICAgICB2YXIgeTIgPSBNYXRoLmFicyhwb2ludGVyLmVuZFkgLSBwb2ludGVyMi5lbmRZKTtcbiAgICAgICAgdmFyIHoxID0gTWF0aC5zcXJ0KHgxICogeDEgKyB5MSAqIHkxKTtcbiAgICAgICAgdmFyIHoyID0gTWF0aC5zcXJ0KHgyICogeDIgKyB5MiAqIHkyKTtcbiAgICAgICAgdmFyIHJhdGlvID0gKHoyIC0gejEpIC8gejE7XG5cbiAgICAgICAgaWYgKE1hdGguYWJzKHJhdGlvKSA+IE1hdGguYWJzKG1heFJhdGlvKSkge1xuICAgICAgICAgIG1heFJhdGlvID0gcmF0aW87XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiBtYXhSYXRpbztcbiAgfVxuICAvKipcbiAgICogR2V0IGEgcG9pbnRlciBmcm9tIGFuIGV2ZW50IG9iamVjdC5cbiAgICogQHBhcmFtIHtPYmplY3R9IGV2ZW50IC0gVGhlIHRhcmdldCBldmVudCBvYmplY3QuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gZW5kT25seSAtIEluZGljYXRlcyBpZiBvbmx5IHJldHVybnMgdGhlIGVuZCBwb2ludCBjb29yZGluYXRlIG9yIG5vdC5cbiAgICogQHJldHVybnMge09iamVjdH0gVGhlIHJlc3VsdCBwb2ludGVyIGNvbnRhaW5zIHN0YXJ0IGFuZC9vciBlbmQgcG9pbnQgY29vcmRpbmF0ZXMuXG4gICAqL1xuXG4gIGZ1bmN0aW9uIGdldFBvaW50ZXIoX3JlZjIsIGVuZE9ubHkpIHtcbiAgICB2YXIgcGFnZVggPSBfcmVmMi5wYWdlWCxcbiAgICAgICAgcGFnZVkgPSBfcmVmMi5wYWdlWTtcbiAgICB2YXIgZW5kID0ge1xuICAgICAgZW5kWDogcGFnZVgsXG4gICAgICBlbmRZOiBwYWdlWVxuICAgIH07XG4gICAgcmV0dXJuIGVuZE9ubHkgPyBlbmQgOiBfb2JqZWN0U3ByZWFkMih7XG4gICAgICBzdGFydFg6IHBhZ2VYLFxuICAgICAgc3RhcnRZOiBwYWdlWVxuICAgIH0sIGVuZCk7XG4gIH1cbiAgLyoqXG4gICAqIEdldCB0aGUgY2VudGVyIHBvaW50IGNvb3JkaW5hdGUgb2YgYSBncm91cCBvZiBwb2ludGVycy5cbiAgICogQHBhcmFtIHtPYmplY3R9IHBvaW50ZXJzIC0gVGhlIHRhcmdldCBwb2ludGVycy5cbiAgICogQHJldHVybnMge09iamVjdH0gVGhlIGNlbnRlciBwb2ludCBjb29yZGluYXRlLlxuICAgKi9cblxuICBmdW5jdGlvbiBnZXRQb2ludGVyc0NlbnRlcihwb2ludGVycykge1xuICAgIHZhciBwYWdlWCA9IDA7XG4gICAgdmFyIHBhZ2VZID0gMDtcbiAgICB2YXIgY291bnQgPSAwO1xuICAgIGZvckVhY2gocG9pbnRlcnMsIGZ1bmN0aW9uIChfcmVmMykge1xuICAgICAgdmFyIHN0YXJ0WCA9IF9yZWYzLnN0YXJ0WCxcbiAgICAgICAgICBzdGFydFkgPSBfcmVmMy5zdGFydFk7XG4gICAgICBwYWdlWCArPSBzdGFydFg7XG4gICAgICBwYWdlWSArPSBzdGFydFk7XG4gICAgICBjb3VudCArPSAxO1xuICAgIH0pO1xuICAgIHBhZ2VYIC89IGNvdW50O1xuICAgIHBhZ2VZIC89IGNvdW50O1xuICAgIHJldHVybiB7XG4gICAgICBwYWdlWDogcGFnZVgsXG4gICAgICBwYWdlWTogcGFnZVlcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBHZXQgdGhlIG1heCBzaXplcyBpbiBhIHJlY3RhbmdsZSB1bmRlciB0aGUgZ2l2ZW4gYXNwZWN0IHJhdGlvLlxuICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YSAtIFRoZSBvcmlnaW5hbCBzaXplcy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IFt0eXBlPSdjb250YWluJ10gLSBUaGUgYWRqdXN0IHR5cGUuXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSByZXN1bHQgc2l6ZXMuXG4gICAqL1xuXG4gIGZ1bmN0aW9uIGdldEFkanVzdGVkU2l6ZXMoX3JlZjQpIC8vIG9yICdjb3ZlcidcbiAge1xuICAgIHZhciBhc3BlY3RSYXRpbyA9IF9yZWY0LmFzcGVjdFJhdGlvLFxuICAgICAgICBoZWlnaHQgPSBfcmVmNC5oZWlnaHQsXG4gICAgICAgIHdpZHRoID0gX3JlZjQud2lkdGg7XG4gICAgdmFyIHR5cGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6ICdjb250YWluJztcbiAgICB2YXIgaXNWYWxpZFdpZHRoID0gaXNQb3NpdGl2ZU51bWJlcih3aWR0aCk7XG4gICAgdmFyIGlzVmFsaWRIZWlnaHQgPSBpc1Bvc2l0aXZlTnVtYmVyKGhlaWdodCk7XG5cbiAgICBpZiAoaXNWYWxpZFdpZHRoICYmIGlzVmFsaWRIZWlnaHQpIHtcbiAgICAgIHZhciBhZGp1c3RlZFdpZHRoID0gaGVpZ2h0ICogYXNwZWN0UmF0aW87XG5cbiAgICAgIGlmICh0eXBlID09PSAnY29udGFpbicgJiYgYWRqdXN0ZWRXaWR0aCA+IHdpZHRoIHx8IHR5cGUgPT09ICdjb3ZlcicgJiYgYWRqdXN0ZWRXaWR0aCA8IHdpZHRoKSB7XG4gICAgICAgIGhlaWdodCA9IHdpZHRoIC8gYXNwZWN0UmF0aW87XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aWR0aCA9IGhlaWdodCAqIGFzcGVjdFJhdGlvO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaXNWYWxpZFdpZHRoKSB7XG4gICAgICBoZWlnaHQgPSB3aWR0aCAvIGFzcGVjdFJhdGlvO1xuICAgIH0gZWxzZSBpZiAoaXNWYWxpZEhlaWdodCkge1xuICAgICAgd2lkdGggPSBoZWlnaHQgKiBhc3BlY3RSYXRpbztcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgaGVpZ2h0OiBoZWlnaHRcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBHZXQgdGhlIG5ldyBzaXplcyBvZiBhIHJlY3RhbmdsZSBhZnRlciByb3RhdGVkLlxuICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YSAtIFRoZSBvcmlnaW5hbCBzaXplcy5cbiAgICogQHJldHVybnMge09iamVjdH0gVGhlIHJlc3VsdCBzaXplcy5cbiAgICovXG5cbiAgZnVuY3Rpb24gZ2V0Um90YXRlZFNpemVzKF9yZWY1KSB7XG4gICAgdmFyIHdpZHRoID0gX3JlZjUud2lkdGgsXG4gICAgICAgIGhlaWdodCA9IF9yZWY1LmhlaWdodCxcbiAgICAgICAgZGVncmVlID0gX3JlZjUuZGVncmVlO1xuICAgIGRlZ3JlZSA9IE1hdGguYWJzKGRlZ3JlZSkgJSAxODA7XG5cbiAgICBpZiAoZGVncmVlID09PSA5MCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgd2lkdGg6IGhlaWdodCxcbiAgICAgICAgaGVpZ2h0OiB3aWR0aFxuICAgICAgfTtcbiAgICB9XG5cbiAgICB2YXIgYXJjID0gZGVncmVlICUgOTAgKiBNYXRoLlBJIC8gMTgwO1xuICAgIHZhciBzaW5BcmMgPSBNYXRoLnNpbihhcmMpO1xuICAgIHZhciBjb3NBcmMgPSBNYXRoLmNvcyhhcmMpO1xuICAgIHZhciBuZXdXaWR0aCA9IHdpZHRoICogY29zQXJjICsgaGVpZ2h0ICogc2luQXJjO1xuICAgIHZhciBuZXdIZWlnaHQgPSB3aWR0aCAqIHNpbkFyYyArIGhlaWdodCAqIGNvc0FyYztcbiAgICByZXR1cm4gZGVncmVlID4gOTAgPyB7XG4gICAgICB3aWR0aDogbmV3SGVpZ2h0LFxuICAgICAgaGVpZ2h0OiBuZXdXaWR0aFxuICAgIH0gOiB7XG4gICAgICB3aWR0aDogbmV3V2lkdGgsXG4gICAgICBoZWlnaHQ6IG5ld0hlaWdodFxuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIEdldCBhIGNhbnZhcyB3aGljaCBkcmV3IHRoZSBnaXZlbiBpbWFnZS5cbiAgICogQHBhcmFtIHtIVE1MSW1hZ2VFbGVtZW50fSBpbWFnZSAtIFRoZSBpbWFnZSBmb3IgZHJhd2luZy5cbiAgICogQHBhcmFtIHtPYmplY3R9IGltYWdlRGF0YSAtIFRoZSBpbWFnZSBkYXRhLlxuICAgKiBAcGFyYW0ge09iamVjdH0gY2FudmFzRGF0YSAtIFRoZSBjYW52YXMgZGF0YS5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBUaGUgb3B0aW9ucy5cbiAgICogQHJldHVybnMge0hUTUxDYW52YXNFbGVtZW50fSBUaGUgcmVzdWx0IGNhbnZhcy5cbiAgICovXG5cbiAgZnVuY3Rpb24gZ2V0U291cmNlQ2FudmFzKGltYWdlLCBfcmVmNiwgX3JlZjcsIF9yZWY4KSB7XG4gICAgdmFyIGltYWdlQXNwZWN0UmF0aW8gPSBfcmVmNi5hc3BlY3RSYXRpbyxcbiAgICAgICAgaW1hZ2VOYXR1cmFsV2lkdGggPSBfcmVmNi5uYXR1cmFsV2lkdGgsXG4gICAgICAgIGltYWdlTmF0dXJhbEhlaWdodCA9IF9yZWY2Lm5hdHVyYWxIZWlnaHQsXG4gICAgICAgIF9yZWY2JHJvdGF0ZSA9IF9yZWY2LnJvdGF0ZSxcbiAgICAgICAgcm90YXRlID0gX3JlZjYkcm90YXRlID09PSB2b2lkIDAgPyAwIDogX3JlZjYkcm90YXRlLFxuICAgICAgICBfcmVmNiRzY2FsZVggPSBfcmVmNi5zY2FsZVgsXG4gICAgICAgIHNjYWxlWCA9IF9yZWY2JHNjYWxlWCA9PT0gdm9pZCAwID8gMSA6IF9yZWY2JHNjYWxlWCxcbiAgICAgICAgX3JlZjYkc2NhbGVZID0gX3JlZjYuc2NhbGVZLFxuICAgICAgICBzY2FsZVkgPSBfcmVmNiRzY2FsZVkgPT09IHZvaWQgMCA/IDEgOiBfcmVmNiRzY2FsZVk7XG4gICAgdmFyIGFzcGVjdFJhdGlvID0gX3JlZjcuYXNwZWN0UmF0aW8sXG4gICAgICAgIG5hdHVyYWxXaWR0aCA9IF9yZWY3Lm5hdHVyYWxXaWR0aCxcbiAgICAgICAgbmF0dXJhbEhlaWdodCA9IF9yZWY3Lm5hdHVyYWxIZWlnaHQ7XG4gICAgdmFyIF9yZWY4JGZpbGxDb2xvciA9IF9yZWY4LmZpbGxDb2xvcixcbiAgICAgICAgZmlsbENvbG9yID0gX3JlZjgkZmlsbENvbG9yID09PSB2b2lkIDAgPyAndHJhbnNwYXJlbnQnIDogX3JlZjgkZmlsbENvbG9yLFxuICAgICAgICBfcmVmOCRpbWFnZVNtb290aGluZ0UgPSBfcmVmOC5pbWFnZVNtb290aGluZ0VuYWJsZWQsXG4gICAgICAgIGltYWdlU21vb3RoaW5nRW5hYmxlZCA9IF9yZWY4JGltYWdlU21vb3RoaW5nRSA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9yZWY4JGltYWdlU21vb3RoaW5nRSxcbiAgICAgICAgX3JlZjgkaW1hZ2VTbW9vdGhpbmdRID0gX3JlZjguaW1hZ2VTbW9vdGhpbmdRdWFsaXR5LFxuICAgICAgICBpbWFnZVNtb290aGluZ1F1YWxpdHkgPSBfcmVmOCRpbWFnZVNtb290aGluZ1EgPT09IHZvaWQgMCA/ICdsb3cnIDogX3JlZjgkaW1hZ2VTbW9vdGhpbmdRLFxuICAgICAgICBfcmVmOCRtYXhXaWR0aCA9IF9yZWY4Lm1heFdpZHRoLFxuICAgICAgICBtYXhXaWR0aCA9IF9yZWY4JG1heFdpZHRoID09PSB2b2lkIDAgPyBJbmZpbml0eSA6IF9yZWY4JG1heFdpZHRoLFxuICAgICAgICBfcmVmOCRtYXhIZWlnaHQgPSBfcmVmOC5tYXhIZWlnaHQsXG4gICAgICAgIG1heEhlaWdodCA9IF9yZWY4JG1heEhlaWdodCA9PT0gdm9pZCAwID8gSW5maW5pdHkgOiBfcmVmOCRtYXhIZWlnaHQsXG4gICAgICAgIF9yZWY4JG1pbldpZHRoID0gX3JlZjgubWluV2lkdGgsXG4gICAgICAgIG1pbldpZHRoID0gX3JlZjgkbWluV2lkdGggPT09IHZvaWQgMCA/IDAgOiBfcmVmOCRtaW5XaWR0aCxcbiAgICAgICAgX3JlZjgkbWluSGVpZ2h0ID0gX3JlZjgubWluSGVpZ2h0LFxuICAgICAgICBtaW5IZWlnaHQgPSBfcmVmOCRtaW5IZWlnaHQgPT09IHZvaWQgMCA/IDAgOiBfcmVmOCRtaW5IZWlnaHQ7XG4gICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIHZhciBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgdmFyIG1heFNpemVzID0gZ2V0QWRqdXN0ZWRTaXplcyh7XG4gICAgICBhc3BlY3RSYXRpbzogYXNwZWN0UmF0aW8sXG4gICAgICB3aWR0aDogbWF4V2lkdGgsXG4gICAgICBoZWlnaHQ6IG1heEhlaWdodFxuICAgIH0pO1xuICAgIHZhciBtaW5TaXplcyA9IGdldEFkanVzdGVkU2l6ZXMoe1xuICAgICAgYXNwZWN0UmF0aW86IGFzcGVjdFJhdGlvLFxuICAgICAgd2lkdGg6IG1pbldpZHRoLFxuICAgICAgaGVpZ2h0OiBtaW5IZWlnaHRcbiAgICB9LCAnY292ZXInKTtcbiAgICB2YXIgd2lkdGggPSBNYXRoLm1pbihtYXhTaXplcy53aWR0aCwgTWF0aC5tYXgobWluU2l6ZXMud2lkdGgsIG5hdHVyYWxXaWR0aCkpO1xuICAgIHZhciBoZWlnaHQgPSBNYXRoLm1pbihtYXhTaXplcy5oZWlnaHQsIE1hdGgubWF4KG1pblNpemVzLmhlaWdodCwgbmF0dXJhbEhlaWdodCkpOyAvLyBOb3RlOiBzaG91bGQgYWx3YXlzIHVzZSBpbWFnZSdzIG5hdHVyYWwgc2l6ZXMgZm9yIGRyYXdpbmcgYXNcbiAgICAvLyBpbWFnZURhdGEubmF0dXJhbFdpZHRoID09PSBjYW52YXNEYXRhLm5hdHVyYWxIZWlnaHQgd2hlbiByb3RhdGUgJSAxODAgPT09IDkwXG5cbiAgICB2YXIgZGVzdE1heFNpemVzID0gZ2V0QWRqdXN0ZWRTaXplcyh7XG4gICAgICBhc3BlY3RSYXRpbzogaW1hZ2VBc3BlY3RSYXRpbyxcbiAgICAgIHdpZHRoOiBtYXhXaWR0aCxcbiAgICAgIGhlaWdodDogbWF4SGVpZ2h0XG4gICAgfSk7XG4gICAgdmFyIGRlc3RNaW5TaXplcyA9IGdldEFkanVzdGVkU2l6ZXMoe1xuICAgICAgYXNwZWN0UmF0aW86IGltYWdlQXNwZWN0UmF0aW8sXG4gICAgICB3aWR0aDogbWluV2lkdGgsXG4gICAgICBoZWlnaHQ6IG1pbkhlaWdodFxuICAgIH0sICdjb3ZlcicpO1xuICAgIHZhciBkZXN0V2lkdGggPSBNYXRoLm1pbihkZXN0TWF4U2l6ZXMud2lkdGgsIE1hdGgubWF4KGRlc3RNaW5TaXplcy53aWR0aCwgaW1hZ2VOYXR1cmFsV2lkdGgpKTtcbiAgICB2YXIgZGVzdEhlaWdodCA9IE1hdGgubWluKGRlc3RNYXhTaXplcy5oZWlnaHQsIE1hdGgubWF4KGRlc3RNaW5TaXplcy5oZWlnaHQsIGltYWdlTmF0dXJhbEhlaWdodCkpO1xuICAgIHZhciBwYXJhbXMgPSBbLWRlc3RXaWR0aCAvIDIsIC1kZXN0SGVpZ2h0IC8gMiwgZGVzdFdpZHRoLCBkZXN0SGVpZ2h0XTtcbiAgICBjYW52YXMud2lkdGggPSBub3JtYWxpemVEZWNpbWFsTnVtYmVyKHdpZHRoKTtcbiAgICBjYW52YXMuaGVpZ2h0ID0gbm9ybWFsaXplRGVjaW1hbE51bWJlcihoZWlnaHQpO1xuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gZmlsbENvbG9yO1xuICAgIGNvbnRleHQuZmlsbFJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG4gICAgY29udGV4dC5zYXZlKCk7XG4gICAgY29udGV4dC50cmFuc2xhdGUod2lkdGggLyAyLCBoZWlnaHQgLyAyKTtcbiAgICBjb250ZXh0LnJvdGF0ZShyb3RhdGUgKiBNYXRoLlBJIC8gMTgwKTtcbiAgICBjb250ZXh0LnNjYWxlKHNjYWxlWCwgc2NhbGVZKTtcbiAgICBjb250ZXh0LmltYWdlU21vb3RoaW5nRW5hYmxlZCA9IGltYWdlU21vb3RoaW5nRW5hYmxlZDtcbiAgICBjb250ZXh0LmltYWdlU21vb3RoaW5nUXVhbGl0eSA9IGltYWdlU21vb3RoaW5nUXVhbGl0eTtcbiAgICBjb250ZXh0LmRyYXdJbWFnZS5hcHBseShjb250ZXh0LCBbaW1hZ2VdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkocGFyYW1zLm1hcChmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgIHJldHVybiBNYXRoLmZsb29yKG5vcm1hbGl6ZURlY2ltYWxOdW1iZXIocGFyYW0pKTtcbiAgICB9KSkpKTtcbiAgICBjb250ZXh0LnJlc3RvcmUoKTtcbiAgICByZXR1cm4gY2FudmFzO1xuICB9XG4gIHZhciBmcm9tQ2hhckNvZGUgPSBTdHJpbmcuZnJvbUNoYXJDb2RlO1xuICAvKipcbiAgICogR2V0IHN0cmluZyBmcm9tIGNoYXIgY29kZSBpbiBkYXRhIHZpZXcuXG4gICAqIEBwYXJhbSB7RGF0YVZpZXd9IGRhdGFWaWV3IC0gVGhlIGRhdGEgdmlldyBmb3IgcmVhZC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IHN0YXJ0IC0gVGhlIHN0YXJ0IGluZGV4LlxuICAgKiBAcGFyYW0ge251bWJlcn0gbGVuZ3RoIC0gVGhlIHJlYWQgbGVuZ3RoLlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgcmVhZCByZXN1bHQuXG4gICAqL1xuXG4gIGZ1bmN0aW9uIGdldFN0cmluZ0Zyb21DaGFyQ29kZShkYXRhVmlldywgc3RhcnQsIGxlbmd0aCkge1xuICAgIHZhciBzdHIgPSAnJztcbiAgICBsZW5ndGggKz0gc3RhcnQ7XG5cbiAgICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgc3RyICs9IGZyb21DaGFyQ29kZShkYXRhVmlldy5nZXRVaW50OChpKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cjtcbiAgfVxuICB2YXIgUkVHRVhQX0RBVEFfVVJMX0hFQUQgPSAvXmRhdGE6LiosLztcbiAgLyoqXG4gICAqIFRyYW5zZm9ybSBEYXRhIFVSTCB0byBhcnJheSBidWZmZXIuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkYXRhVVJMIC0gVGhlIERhdGEgVVJMIHRvIHRyYW5zZm9ybS5cbiAgICogQHJldHVybnMge0FycmF5QnVmZmVyfSBUaGUgcmVzdWx0IGFycmF5IGJ1ZmZlci5cbiAgICovXG5cbiAgZnVuY3Rpb24gZGF0YVVSTFRvQXJyYXlCdWZmZXIoZGF0YVVSTCkge1xuICAgIHZhciBiYXNlNjQgPSBkYXRhVVJMLnJlcGxhY2UoUkVHRVhQX0RBVEFfVVJMX0hFQUQsICcnKTtcbiAgICB2YXIgYmluYXJ5ID0gYXRvYihiYXNlNjQpO1xuICAgIHZhciBhcnJheUJ1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcihiaW5hcnkubGVuZ3RoKTtcbiAgICB2YXIgdWludDggPSBuZXcgVWludDhBcnJheShhcnJheUJ1ZmZlcik7XG4gICAgZm9yRWFjaCh1aW50OCwgZnVuY3Rpb24gKHZhbHVlLCBpKSB7XG4gICAgICB1aW50OFtpXSA9IGJpbmFyeS5jaGFyQ29kZUF0KGkpO1xuICAgIH0pO1xuICAgIHJldHVybiBhcnJheUJ1ZmZlcjtcbiAgfVxuICAvKipcbiAgICogVHJhbnNmb3JtIGFycmF5IGJ1ZmZlciB0byBEYXRhIFVSTC5cbiAgICogQHBhcmFtIHtBcnJheUJ1ZmZlcn0gYXJyYXlCdWZmZXIgLSBUaGUgYXJyYXkgYnVmZmVyIHRvIHRyYW5zZm9ybS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IG1pbWVUeXBlIC0gVGhlIG1pbWUgdHlwZSBvZiB0aGUgRGF0YSBVUkwuXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSByZXN1bHQgRGF0YSBVUkwuXG4gICAqL1xuXG4gIGZ1bmN0aW9uIGFycmF5QnVmZmVyVG9EYXRhVVJMKGFycmF5QnVmZmVyLCBtaW1lVHlwZSkge1xuICAgIHZhciBjaHVua3MgPSBbXTsgLy8gQ2h1bmsgVHlwZWQgQXJyYXkgZm9yIGJldHRlciBwZXJmb3JtYW5jZSAoIzQzNSlcblxuICAgIHZhciBjaHVua1NpemUgPSA4MTkyO1xuICAgIHZhciB1aW50OCA9IG5ldyBVaW50OEFycmF5KGFycmF5QnVmZmVyKTtcblxuICAgIHdoaWxlICh1aW50OC5sZW5ndGggPiAwKSB7XG4gICAgICAvLyBYWFg6IEJhYmVsJ3MgYHRvQ29uc3VtYWJsZUFycmF5YCBoZWxwZXIgd2lsbCB0aHJvdyBlcnJvciBpbiBJRSBvciBTYWZhcmkgOVxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1zcHJlYWRcbiAgICAgIGNodW5rcy5wdXNoKGZyb21DaGFyQ29kZS5hcHBseShudWxsLCB0b0FycmF5KHVpbnQ4LnN1YmFycmF5KDAsIGNodW5rU2l6ZSkpKSk7XG4gICAgICB1aW50OCA9IHVpbnQ4LnN1YmFycmF5KGNodW5rU2l6ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFwiZGF0YTpcIi5jb25jYXQobWltZVR5cGUsIFwiO2Jhc2U2NCxcIikuY29uY2F0KGJ0b2EoY2h1bmtzLmpvaW4oJycpKSk7XG4gIH1cbiAgLyoqXG4gICAqIEdldCBvcmllbnRhdGlvbiB2YWx1ZSBmcm9tIGdpdmVuIGFycmF5IGJ1ZmZlci5cbiAgICogQHBhcmFtIHtBcnJheUJ1ZmZlcn0gYXJyYXlCdWZmZXIgLSBUaGUgYXJyYXkgYnVmZmVyIHRvIHJlYWQuXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IFRoZSByZWFkIG9yaWVudGF0aW9uIHZhbHVlLlxuICAgKi9cblxuICBmdW5jdGlvbiByZXNldEFuZEdldE9yaWVudGF0aW9uKGFycmF5QnVmZmVyKSB7XG4gICAgdmFyIGRhdGFWaWV3ID0gbmV3IERhdGFWaWV3KGFycmF5QnVmZmVyKTtcbiAgICB2YXIgb3JpZW50YXRpb247IC8vIElnbm9yZXMgcmFuZ2UgZXJyb3Igd2hlbiB0aGUgaW1hZ2UgZG9lcyBub3QgaGF2ZSBjb3JyZWN0IEV4aWYgaW5mb3JtYXRpb25cblxuICAgIHRyeSB7XG4gICAgICB2YXIgbGl0dGxlRW5kaWFuO1xuICAgICAgdmFyIGFwcDFTdGFydDtcbiAgICAgIHZhciBpZmRTdGFydDsgLy8gT25seSBoYW5kbGUgSlBFRyBpbWFnZSAoc3RhcnQgYnkgMHhGRkQ4KVxuXG4gICAgICBpZiAoZGF0YVZpZXcuZ2V0VWludDgoMCkgPT09IDB4RkYgJiYgZGF0YVZpZXcuZ2V0VWludDgoMSkgPT09IDB4RDgpIHtcbiAgICAgICAgdmFyIGxlbmd0aCA9IGRhdGFWaWV3LmJ5dGVMZW5ndGg7XG4gICAgICAgIHZhciBvZmZzZXQgPSAyO1xuXG4gICAgICAgIHdoaWxlIChvZmZzZXQgKyAxIDwgbGVuZ3RoKSB7XG4gICAgICAgICAgaWYgKGRhdGFWaWV3LmdldFVpbnQ4KG9mZnNldCkgPT09IDB4RkYgJiYgZGF0YVZpZXcuZ2V0VWludDgob2Zmc2V0ICsgMSkgPT09IDB4RTEpIHtcbiAgICAgICAgICAgIGFwcDFTdGFydCA9IG9mZnNldDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIG9mZnNldCArPSAxO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChhcHAxU3RhcnQpIHtcbiAgICAgICAgdmFyIGV4aWZJRENvZGUgPSBhcHAxU3RhcnQgKyA0O1xuICAgICAgICB2YXIgdGlmZk9mZnNldCA9IGFwcDFTdGFydCArIDEwO1xuXG4gICAgICAgIGlmIChnZXRTdHJpbmdGcm9tQ2hhckNvZGUoZGF0YVZpZXcsIGV4aWZJRENvZGUsIDQpID09PSAnRXhpZicpIHtcbiAgICAgICAgICB2YXIgZW5kaWFubmVzcyA9IGRhdGFWaWV3LmdldFVpbnQxNih0aWZmT2Zmc2V0KTtcbiAgICAgICAgICBsaXR0bGVFbmRpYW4gPSBlbmRpYW5uZXNzID09PSAweDQ5NDk7XG5cbiAgICAgICAgICBpZiAobGl0dGxlRW5kaWFuIHx8IGVuZGlhbm5lc3MgPT09IDB4NEQ0RFxuICAgICAgICAgIC8qIGJpZ0VuZGlhbiAqL1xuICAgICAgICAgICkge1xuICAgICAgICAgICAgICBpZiAoZGF0YVZpZXcuZ2V0VWludDE2KHRpZmZPZmZzZXQgKyAyLCBsaXR0bGVFbmRpYW4pID09PSAweDAwMkEpIHtcbiAgICAgICAgICAgICAgICB2YXIgZmlyc3RJRkRPZmZzZXQgPSBkYXRhVmlldy5nZXRVaW50MzIodGlmZk9mZnNldCArIDQsIGxpdHRsZUVuZGlhbik7XG5cbiAgICAgICAgICAgICAgICBpZiAoZmlyc3RJRkRPZmZzZXQgPj0gMHgwMDAwMDAwOCkge1xuICAgICAgICAgICAgICAgICAgaWZkU3RhcnQgPSB0aWZmT2Zmc2V0ICsgZmlyc3RJRkRPZmZzZXQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGlmZFN0YXJ0KSB7XG4gICAgICAgIHZhciBfbGVuZ3RoID0gZGF0YVZpZXcuZ2V0VWludDE2KGlmZFN0YXJ0LCBsaXR0bGVFbmRpYW4pO1xuXG4gICAgICAgIHZhciBfb2Zmc2V0O1xuXG4gICAgICAgIHZhciBpO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBfbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICBfb2Zmc2V0ID0gaWZkU3RhcnQgKyBpICogMTIgKyAyO1xuXG4gICAgICAgICAgaWYgKGRhdGFWaWV3LmdldFVpbnQxNihfb2Zmc2V0LCBsaXR0bGVFbmRpYW4pID09PSAweDAxMTJcbiAgICAgICAgICAvKiBPcmllbnRhdGlvbiAqL1xuICAgICAgICAgICkge1xuICAgICAgICAgICAgICAvLyA4IGlzIHRoZSBvZmZzZXQgb2YgdGhlIGN1cnJlbnQgdGFnJ3MgdmFsdWVcbiAgICAgICAgICAgICAgX29mZnNldCArPSA4OyAvLyBHZXQgdGhlIG9yaWdpbmFsIG9yaWVudGF0aW9uIHZhbHVlXG5cbiAgICAgICAgICAgICAgb3JpZW50YXRpb24gPSBkYXRhVmlldy5nZXRVaW50MTYoX29mZnNldCwgbGl0dGxlRW5kaWFuKTsgLy8gT3ZlcnJpZGUgdGhlIG9yaWVudGF0aW9uIHdpdGggaXRzIGRlZmF1bHQgdmFsdWVcblxuICAgICAgICAgICAgICBkYXRhVmlldy5zZXRVaW50MTYoX29mZnNldCwgMSwgbGl0dGxlRW5kaWFuKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgb3JpZW50YXRpb24gPSAxO1xuICAgIH1cblxuICAgIHJldHVybiBvcmllbnRhdGlvbjtcbiAgfVxuICAvKipcbiAgICogUGFyc2UgRXhpZiBPcmllbnRhdGlvbiB2YWx1ZS5cbiAgICogQHBhcmFtIHtudW1iZXJ9IG9yaWVudGF0aW9uIC0gVGhlIG9yaWVudGF0aW9uIHRvIHBhcnNlLlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgcGFyc2VkIHJlc3VsdC5cbiAgICovXG5cbiAgZnVuY3Rpb24gcGFyc2VPcmllbnRhdGlvbihvcmllbnRhdGlvbikge1xuICAgIHZhciByb3RhdGUgPSAwO1xuICAgIHZhciBzY2FsZVggPSAxO1xuICAgIHZhciBzY2FsZVkgPSAxO1xuXG4gICAgc3dpdGNoIChvcmllbnRhdGlvbikge1xuICAgICAgLy8gRmxpcCBob3Jpem9udGFsXG4gICAgICBjYXNlIDI6XG4gICAgICAgIHNjYWxlWCA9IC0xO1xuICAgICAgICBicmVhaztcbiAgICAgIC8vIFJvdGF0ZSBsZWZ0IDE4MMKwXG5cbiAgICAgIGNhc2UgMzpcbiAgICAgICAgcm90YXRlID0gLTE4MDtcbiAgICAgICAgYnJlYWs7XG4gICAgICAvLyBGbGlwIHZlcnRpY2FsXG5cbiAgICAgIGNhc2UgNDpcbiAgICAgICAgc2NhbGVZID0gLTE7XG4gICAgICAgIGJyZWFrO1xuICAgICAgLy8gRmxpcCB2ZXJ0aWNhbCBhbmQgcm90YXRlIHJpZ2h0IDkwwrBcblxuICAgICAgY2FzZSA1OlxuICAgICAgICByb3RhdGUgPSA5MDtcbiAgICAgICAgc2NhbGVZID0gLTE7XG4gICAgICAgIGJyZWFrO1xuICAgICAgLy8gUm90YXRlIHJpZ2h0IDkwwrBcblxuICAgICAgY2FzZSA2OlxuICAgICAgICByb3RhdGUgPSA5MDtcbiAgICAgICAgYnJlYWs7XG4gICAgICAvLyBGbGlwIGhvcml6b250YWwgYW5kIHJvdGF0ZSByaWdodCA5MMKwXG5cbiAgICAgIGNhc2UgNzpcbiAgICAgICAgcm90YXRlID0gOTA7XG4gICAgICAgIHNjYWxlWCA9IC0xO1xuICAgICAgICBicmVhaztcbiAgICAgIC8vIFJvdGF0ZSBsZWZ0IDkwwrBcblxuICAgICAgY2FzZSA4OlxuICAgICAgICByb3RhdGUgPSAtOTA7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICByb3RhdGU6IHJvdGF0ZSxcbiAgICAgIHNjYWxlWDogc2NhbGVYLFxuICAgICAgc2NhbGVZOiBzY2FsZVlcbiAgICB9O1xuICB9XG5cbiAgdmFyIHJlbmRlciA9IHtcbiAgICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHRoaXMuaW5pdENvbnRhaW5lcigpO1xuICAgICAgdGhpcy5pbml0Q2FudmFzKCk7XG4gICAgICB0aGlzLmluaXRDcm9wQm94KCk7XG4gICAgICB0aGlzLnJlbmRlckNhbnZhcygpO1xuXG4gICAgICBpZiAodGhpcy5jcm9wcGVkKSB7XG4gICAgICAgIHRoaXMucmVuZGVyQ3JvcEJveCgpO1xuICAgICAgfVxuICAgIH0sXG4gICAgaW5pdENvbnRhaW5lcjogZnVuY3Rpb24gaW5pdENvbnRhaW5lcigpIHtcbiAgICAgIHZhciBlbGVtZW50ID0gdGhpcy5lbGVtZW50LFxuICAgICAgICAgIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMsXG4gICAgICAgICAgY29udGFpbmVyID0gdGhpcy5jb250YWluZXIsXG4gICAgICAgICAgY3JvcHBlciA9IHRoaXMuY3JvcHBlcjtcbiAgICAgIHZhciBtaW5XaWR0aCA9IE51bWJlcihvcHRpb25zLm1pbkNvbnRhaW5lcldpZHRoKTtcbiAgICAgIHZhciBtaW5IZWlnaHQgPSBOdW1iZXIob3B0aW9ucy5taW5Db250YWluZXJIZWlnaHQpO1xuICAgICAgYWRkQ2xhc3MoY3JvcHBlciwgQ0xBU1NfSElEREVOKTtcbiAgICAgIHJlbW92ZUNsYXNzKGVsZW1lbnQsIENMQVNTX0hJRERFTik7XG4gICAgICB2YXIgY29udGFpbmVyRGF0YSA9IHtcbiAgICAgICAgd2lkdGg6IE1hdGgubWF4KGNvbnRhaW5lci5vZmZzZXRXaWR0aCwgbWluV2lkdGggPj0gMCA/IG1pbldpZHRoIDogTUlOX0NPTlRBSU5FUl9XSURUSCksXG4gICAgICAgIGhlaWdodDogTWF0aC5tYXgoY29udGFpbmVyLm9mZnNldEhlaWdodCwgbWluSGVpZ2h0ID49IDAgPyBtaW5IZWlnaHQgOiBNSU5fQ09OVEFJTkVSX0hFSUdIVClcbiAgICAgIH07XG4gICAgICB0aGlzLmNvbnRhaW5lckRhdGEgPSBjb250YWluZXJEYXRhO1xuICAgICAgc2V0U3R5bGUoY3JvcHBlciwge1xuICAgICAgICB3aWR0aDogY29udGFpbmVyRGF0YS53aWR0aCxcbiAgICAgICAgaGVpZ2h0OiBjb250YWluZXJEYXRhLmhlaWdodFxuICAgICAgfSk7XG4gICAgICBhZGRDbGFzcyhlbGVtZW50LCBDTEFTU19ISURERU4pO1xuICAgICAgcmVtb3ZlQ2xhc3MoY3JvcHBlciwgQ0xBU1NfSElEREVOKTtcbiAgICB9LFxuICAgIC8vIENhbnZhcyAoaW1hZ2Ugd3JhcHBlcilcbiAgICBpbml0Q2FudmFzOiBmdW5jdGlvbiBpbml0Q2FudmFzKCkge1xuICAgICAgdmFyIGNvbnRhaW5lckRhdGEgPSB0aGlzLmNvbnRhaW5lckRhdGEsXG4gICAgICAgICAgaW1hZ2VEYXRhID0gdGhpcy5pbWFnZURhdGE7XG4gICAgICB2YXIgdmlld01vZGUgPSB0aGlzLm9wdGlvbnMudmlld01vZGU7XG4gICAgICB2YXIgcm90YXRlZCA9IE1hdGguYWJzKGltYWdlRGF0YS5yb3RhdGUpICUgMTgwID09PSA5MDtcbiAgICAgIHZhciBuYXR1cmFsV2lkdGggPSByb3RhdGVkID8gaW1hZ2VEYXRhLm5hdHVyYWxIZWlnaHQgOiBpbWFnZURhdGEubmF0dXJhbFdpZHRoO1xuICAgICAgdmFyIG5hdHVyYWxIZWlnaHQgPSByb3RhdGVkID8gaW1hZ2VEYXRhLm5hdHVyYWxXaWR0aCA6IGltYWdlRGF0YS5uYXR1cmFsSGVpZ2h0O1xuICAgICAgdmFyIGFzcGVjdFJhdGlvID0gbmF0dXJhbFdpZHRoIC8gbmF0dXJhbEhlaWdodDtcbiAgICAgIHZhciBjYW52YXNXaWR0aCA9IGNvbnRhaW5lckRhdGEud2lkdGg7XG4gICAgICB2YXIgY2FudmFzSGVpZ2h0ID0gY29udGFpbmVyRGF0YS5oZWlnaHQ7XG5cbiAgICAgIGlmIChjb250YWluZXJEYXRhLmhlaWdodCAqIGFzcGVjdFJhdGlvID4gY29udGFpbmVyRGF0YS53aWR0aCkge1xuICAgICAgICBpZiAodmlld01vZGUgPT09IDMpIHtcbiAgICAgICAgICBjYW52YXNXaWR0aCA9IGNvbnRhaW5lckRhdGEuaGVpZ2h0ICogYXNwZWN0UmF0aW87XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2FudmFzSGVpZ2h0ID0gY29udGFpbmVyRGF0YS53aWR0aCAvIGFzcGVjdFJhdGlvO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHZpZXdNb2RlID09PSAzKSB7XG4gICAgICAgIGNhbnZhc0hlaWdodCA9IGNvbnRhaW5lckRhdGEud2lkdGggLyBhc3BlY3RSYXRpbztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhbnZhc1dpZHRoID0gY29udGFpbmVyRGF0YS5oZWlnaHQgKiBhc3BlY3RSYXRpbztcbiAgICAgIH1cblxuICAgICAgdmFyIGNhbnZhc0RhdGEgPSB7XG4gICAgICAgIGFzcGVjdFJhdGlvOiBhc3BlY3RSYXRpbyxcbiAgICAgICAgbmF0dXJhbFdpZHRoOiBuYXR1cmFsV2lkdGgsXG4gICAgICAgIG5hdHVyYWxIZWlnaHQ6IG5hdHVyYWxIZWlnaHQsXG4gICAgICAgIHdpZHRoOiBjYW52YXNXaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBjYW52YXNIZWlnaHRcbiAgICAgIH07XG4gICAgICB0aGlzLmNhbnZhc0RhdGEgPSBjYW52YXNEYXRhO1xuICAgICAgdGhpcy5saW1pdGVkID0gdmlld01vZGUgPT09IDEgfHwgdmlld01vZGUgPT09IDI7XG4gICAgICB0aGlzLmxpbWl0Q2FudmFzKHRydWUsIHRydWUpO1xuICAgICAgY2FudmFzRGF0YS53aWR0aCA9IE1hdGgubWluKE1hdGgubWF4KGNhbnZhc0RhdGEud2lkdGgsIGNhbnZhc0RhdGEubWluV2lkdGgpLCBjYW52YXNEYXRhLm1heFdpZHRoKTtcbiAgICAgIGNhbnZhc0RhdGEuaGVpZ2h0ID0gTWF0aC5taW4oTWF0aC5tYXgoY2FudmFzRGF0YS5oZWlnaHQsIGNhbnZhc0RhdGEubWluSGVpZ2h0KSwgY2FudmFzRGF0YS5tYXhIZWlnaHQpO1xuICAgICAgY2FudmFzRGF0YS5sZWZ0ID0gKGNvbnRhaW5lckRhdGEud2lkdGggLSBjYW52YXNEYXRhLndpZHRoKSAvIDI7XG4gICAgICBjYW52YXNEYXRhLnRvcCA9IChjb250YWluZXJEYXRhLmhlaWdodCAtIGNhbnZhc0RhdGEuaGVpZ2h0KSAvIDI7XG4gICAgICBjYW52YXNEYXRhLm9sZExlZnQgPSBjYW52YXNEYXRhLmxlZnQ7XG4gICAgICBjYW52YXNEYXRhLm9sZFRvcCA9IGNhbnZhc0RhdGEudG9wO1xuICAgICAgdGhpcy5pbml0aWFsQ2FudmFzRGF0YSA9IGFzc2lnbih7fSwgY2FudmFzRGF0YSk7XG4gICAgfSxcbiAgICBsaW1pdENhbnZhczogZnVuY3Rpb24gbGltaXRDYW52YXMoc2l6ZUxpbWl0ZWQsIHBvc2l0aW9uTGltaXRlZCkge1xuICAgICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMsXG4gICAgICAgICAgY29udGFpbmVyRGF0YSA9IHRoaXMuY29udGFpbmVyRGF0YSxcbiAgICAgICAgICBjYW52YXNEYXRhID0gdGhpcy5jYW52YXNEYXRhLFxuICAgICAgICAgIGNyb3BCb3hEYXRhID0gdGhpcy5jcm9wQm94RGF0YTtcbiAgICAgIHZhciB2aWV3TW9kZSA9IG9wdGlvbnMudmlld01vZGU7XG4gICAgICB2YXIgYXNwZWN0UmF0aW8gPSBjYW52YXNEYXRhLmFzcGVjdFJhdGlvO1xuICAgICAgdmFyIGNyb3BwZWQgPSB0aGlzLmNyb3BwZWQgJiYgY3JvcEJveERhdGE7XG5cbiAgICAgIGlmIChzaXplTGltaXRlZCkge1xuICAgICAgICB2YXIgbWluQ2FudmFzV2lkdGggPSBOdW1iZXIob3B0aW9ucy5taW5DYW52YXNXaWR0aCkgfHwgMDtcbiAgICAgICAgdmFyIG1pbkNhbnZhc0hlaWdodCA9IE51bWJlcihvcHRpb25zLm1pbkNhbnZhc0hlaWdodCkgfHwgMDtcblxuICAgICAgICBpZiAodmlld01vZGUgPiAxKSB7XG4gICAgICAgICAgbWluQ2FudmFzV2lkdGggPSBNYXRoLm1heChtaW5DYW52YXNXaWR0aCwgY29udGFpbmVyRGF0YS53aWR0aCk7XG4gICAgICAgICAgbWluQ2FudmFzSGVpZ2h0ID0gTWF0aC5tYXgobWluQ2FudmFzSGVpZ2h0LCBjb250YWluZXJEYXRhLmhlaWdodCk7XG5cbiAgICAgICAgICBpZiAodmlld01vZGUgPT09IDMpIHtcbiAgICAgICAgICAgIGlmIChtaW5DYW52YXNIZWlnaHQgKiBhc3BlY3RSYXRpbyA+IG1pbkNhbnZhc1dpZHRoKSB7XG4gICAgICAgICAgICAgIG1pbkNhbnZhc1dpZHRoID0gbWluQ2FudmFzSGVpZ2h0ICogYXNwZWN0UmF0aW87XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBtaW5DYW52YXNIZWlnaHQgPSBtaW5DYW52YXNXaWR0aCAvIGFzcGVjdFJhdGlvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh2aWV3TW9kZSA+IDApIHtcbiAgICAgICAgICBpZiAobWluQ2FudmFzV2lkdGgpIHtcbiAgICAgICAgICAgIG1pbkNhbnZhc1dpZHRoID0gTWF0aC5tYXgobWluQ2FudmFzV2lkdGgsIGNyb3BwZWQgPyBjcm9wQm94RGF0YS53aWR0aCA6IDApO1xuICAgICAgICAgIH0gZWxzZSBpZiAobWluQ2FudmFzSGVpZ2h0KSB7XG4gICAgICAgICAgICBtaW5DYW52YXNIZWlnaHQgPSBNYXRoLm1heChtaW5DYW52YXNIZWlnaHQsIGNyb3BwZWQgPyBjcm9wQm94RGF0YS5oZWlnaHQgOiAwKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGNyb3BwZWQpIHtcbiAgICAgICAgICAgIG1pbkNhbnZhc1dpZHRoID0gY3JvcEJveERhdGEud2lkdGg7XG4gICAgICAgICAgICBtaW5DYW52YXNIZWlnaHQgPSBjcm9wQm94RGF0YS5oZWlnaHQ7XG5cbiAgICAgICAgICAgIGlmIChtaW5DYW52YXNIZWlnaHQgKiBhc3BlY3RSYXRpbyA+IG1pbkNhbnZhc1dpZHRoKSB7XG4gICAgICAgICAgICAgIG1pbkNhbnZhc1dpZHRoID0gbWluQ2FudmFzSGVpZ2h0ICogYXNwZWN0UmF0aW87XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBtaW5DYW52YXNIZWlnaHQgPSBtaW5DYW52YXNXaWR0aCAvIGFzcGVjdFJhdGlvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBfZ2V0QWRqdXN0ZWRTaXplcyA9IGdldEFkanVzdGVkU2l6ZXMoe1xuICAgICAgICAgIGFzcGVjdFJhdGlvOiBhc3BlY3RSYXRpbyxcbiAgICAgICAgICB3aWR0aDogbWluQ2FudmFzV2lkdGgsXG4gICAgICAgICAgaGVpZ2h0OiBtaW5DYW52YXNIZWlnaHRcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWluQ2FudmFzV2lkdGggPSBfZ2V0QWRqdXN0ZWRTaXplcy53aWR0aDtcbiAgICAgICAgbWluQ2FudmFzSGVpZ2h0ID0gX2dldEFkanVzdGVkU2l6ZXMuaGVpZ2h0O1xuICAgICAgICBjYW52YXNEYXRhLm1pbldpZHRoID0gbWluQ2FudmFzV2lkdGg7XG4gICAgICAgIGNhbnZhc0RhdGEubWluSGVpZ2h0ID0gbWluQ2FudmFzSGVpZ2h0O1xuICAgICAgICBjYW52YXNEYXRhLm1heFdpZHRoID0gSW5maW5pdHk7XG4gICAgICAgIGNhbnZhc0RhdGEubWF4SGVpZ2h0ID0gSW5maW5pdHk7XG4gICAgICB9XG5cbiAgICAgIGlmIChwb3NpdGlvbkxpbWl0ZWQpIHtcbiAgICAgICAgaWYgKHZpZXdNb2RlID4gKGNyb3BwZWQgPyAwIDogMSkpIHtcbiAgICAgICAgICB2YXIgbmV3Q2FudmFzTGVmdCA9IGNvbnRhaW5lckRhdGEud2lkdGggLSBjYW52YXNEYXRhLndpZHRoO1xuICAgICAgICAgIHZhciBuZXdDYW52YXNUb3AgPSBjb250YWluZXJEYXRhLmhlaWdodCAtIGNhbnZhc0RhdGEuaGVpZ2h0O1xuICAgICAgICAgIGNhbnZhc0RhdGEubWluTGVmdCA9IE1hdGgubWluKDAsIG5ld0NhbnZhc0xlZnQpO1xuICAgICAgICAgIGNhbnZhc0RhdGEubWluVG9wID0gTWF0aC5taW4oMCwgbmV3Q2FudmFzVG9wKTtcbiAgICAgICAgICBjYW52YXNEYXRhLm1heExlZnQgPSBNYXRoLm1heCgwLCBuZXdDYW52YXNMZWZ0KTtcbiAgICAgICAgICBjYW52YXNEYXRhLm1heFRvcCA9IE1hdGgubWF4KDAsIG5ld0NhbnZhc1RvcCk7XG5cbiAgICAgICAgICBpZiAoY3JvcHBlZCAmJiB0aGlzLmxpbWl0ZWQpIHtcbiAgICAgICAgICAgIGNhbnZhc0RhdGEubWluTGVmdCA9IE1hdGgubWluKGNyb3BCb3hEYXRhLmxlZnQsIGNyb3BCb3hEYXRhLmxlZnQgKyAoY3JvcEJveERhdGEud2lkdGggLSBjYW52YXNEYXRhLndpZHRoKSk7XG4gICAgICAgICAgICBjYW52YXNEYXRhLm1pblRvcCA9IE1hdGgubWluKGNyb3BCb3hEYXRhLnRvcCwgY3JvcEJveERhdGEudG9wICsgKGNyb3BCb3hEYXRhLmhlaWdodCAtIGNhbnZhc0RhdGEuaGVpZ2h0KSk7XG4gICAgICAgICAgICBjYW52YXNEYXRhLm1heExlZnQgPSBjcm9wQm94RGF0YS5sZWZ0O1xuICAgICAgICAgICAgY2FudmFzRGF0YS5tYXhUb3AgPSBjcm9wQm94RGF0YS50b3A7XG5cbiAgICAgICAgICAgIGlmICh2aWV3TW9kZSA9PT0gMikge1xuICAgICAgICAgICAgICBpZiAoY2FudmFzRGF0YS53aWR0aCA+PSBjb250YWluZXJEYXRhLndpZHRoKSB7XG4gICAgICAgICAgICAgICAgY2FudmFzRGF0YS5taW5MZWZ0ID0gTWF0aC5taW4oMCwgbmV3Q2FudmFzTGVmdCk7XG4gICAgICAgICAgICAgICAgY2FudmFzRGF0YS5tYXhMZWZ0ID0gTWF0aC5tYXgoMCwgbmV3Q2FudmFzTGVmdCk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoY2FudmFzRGF0YS5oZWlnaHQgPj0gY29udGFpbmVyRGF0YS5oZWlnaHQpIHtcbiAgICAgICAgICAgICAgICBjYW52YXNEYXRhLm1pblRvcCA9IE1hdGgubWluKDAsIG5ld0NhbnZhc1RvcCk7XG4gICAgICAgICAgICAgICAgY2FudmFzRGF0YS5tYXhUb3AgPSBNYXRoLm1heCgwLCBuZXdDYW52YXNUb3ApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNhbnZhc0RhdGEubWluTGVmdCA9IC1jYW52YXNEYXRhLndpZHRoO1xuICAgICAgICAgIGNhbnZhc0RhdGEubWluVG9wID0gLWNhbnZhc0RhdGEuaGVpZ2h0O1xuICAgICAgICAgIGNhbnZhc0RhdGEubWF4TGVmdCA9IGNvbnRhaW5lckRhdGEud2lkdGg7XG4gICAgICAgICAgY2FudmFzRGF0YS5tYXhUb3AgPSBjb250YWluZXJEYXRhLmhlaWdodDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgcmVuZGVyQ2FudmFzOiBmdW5jdGlvbiByZW5kZXJDYW52YXMoY2hhbmdlZCwgdHJhbnNmb3JtZWQpIHtcbiAgICAgIHZhciBjYW52YXNEYXRhID0gdGhpcy5jYW52YXNEYXRhLFxuICAgICAgICAgIGltYWdlRGF0YSA9IHRoaXMuaW1hZ2VEYXRhO1xuXG4gICAgICBpZiAodHJhbnNmb3JtZWQpIHtcbiAgICAgICAgdmFyIF9nZXRSb3RhdGVkU2l6ZXMgPSBnZXRSb3RhdGVkU2l6ZXMoe1xuICAgICAgICAgIHdpZHRoOiBpbWFnZURhdGEubmF0dXJhbFdpZHRoICogTWF0aC5hYnMoaW1hZ2VEYXRhLnNjYWxlWCB8fCAxKSxcbiAgICAgICAgICBoZWlnaHQ6IGltYWdlRGF0YS5uYXR1cmFsSGVpZ2h0ICogTWF0aC5hYnMoaW1hZ2VEYXRhLnNjYWxlWSB8fCAxKSxcbiAgICAgICAgICBkZWdyZWU6IGltYWdlRGF0YS5yb3RhdGUgfHwgMFxuICAgICAgICB9KSxcbiAgICAgICAgICAgIG5hdHVyYWxXaWR0aCA9IF9nZXRSb3RhdGVkU2l6ZXMud2lkdGgsXG4gICAgICAgICAgICBuYXR1cmFsSGVpZ2h0ID0gX2dldFJvdGF0ZWRTaXplcy5oZWlnaHQ7XG5cbiAgICAgICAgdmFyIHdpZHRoID0gY2FudmFzRGF0YS53aWR0aCAqIChuYXR1cmFsV2lkdGggLyBjYW52YXNEYXRhLm5hdHVyYWxXaWR0aCk7XG4gICAgICAgIHZhciBoZWlnaHQgPSBjYW52YXNEYXRhLmhlaWdodCAqIChuYXR1cmFsSGVpZ2h0IC8gY2FudmFzRGF0YS5uYXR1cmFsSGVpZ2h0KTtcbiAgICAgICAgY2FudmFzRGF0YS5sZWZ0IC09ICh3aWR0aCAtIGNhbnZhc0RhdGEud2lkdGgpIC8gMjtcbiAgICAgICAgY2FudmFzRGF0YS50b3AgLT0gKGhlaWdodCAtIGNhbnZhc0RhdGEuaGVpZ2h0KSAvIDI7XG4gICAgICAgIGNhbnZhc0RhdGEud2lkdGggPSB3aWR0aDtcbiAgICAgICAgY2FudmFzRGF0YS5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIGNhbnZhc0RhdGEuYXNwZWN0UmF0aW8gPSBuYXR1cmFsV2lkdGggLyBuYXR1cmFsSGVpZ2h0O1xuICAgICAgICBjYW52YXNEYXRhLm5hdHVyYWxXaWR0aCA9IG5hdHVyYWxXaWR0aDtcbiAgICAgICAgY2FudmFzRGF0YS5uYXR1cmFsSGVpZ2h0ID0gbmF0dXJhbEhlaWdodDtcbiAgICAgICAgdGhpcy5saW1pdENhbnZhcyh0cnVlLCBmYWxzZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChjYW52YXNEYXRhLndpZHRoID4gY2FudmFzRGF0YS5tYXhXaWR0aCB8fCBjYW52YXNEYXRhLndpZHRoIDwgY2FudmFzRGF0YS5taW5XaWR0aCkge1xuICAgICAgICBjYW52YXNEYXRhLmxlZnQgPSBjYW52YXNEYXRhLm9sZExlZnQ7XG4gICAgICB9XG5cbiAgICAgIGlmIChjYW52YXNEYXRhLmhlaWdodCA+IGNhbnZhc0RhdGEubWF4SGVpZ2h0IHx8IGNhbnZhc0RhdGEuaGVpZ2h0IDwgY2FudmFzRGF0YS5taW5IZWlnaHQpIHtcbiAgICAgICAgY2FudmFzRGF0YS50b3AgPSBjYW52YXNEYXRhLm9sZFRvcDtcbiAgICAgIH1cblxuICAgICAgY2FudmFzRGF0YS53aWR0aCA9IE1hdGgubWluKE1hdGgubWF4KGNhbnZhc0RhdGEud2lkdGgsIGNhbnZhc0RhdGEubWluV2lkdGgpLCBjYW52YXNEYXRhLm1heFdpZHRoKTtcbiAgICAgIGNhbnZhc0RhdGEuaGVpZ2h0ID0gTWF0aC5taW4oTWF0aC5tYXgoY2FudmFzRGF0YS5oZWlnaHQsIGNhbnZhc0RhdGEubWluSGVpZ2h0KSwgY2FudmFzRGF0YS5tYXhIZWlnaHQpO1xuICAgICAgdGhpcy5saW1pdENhbnZhcyhmYWxzZSwgdHJ1ZSk7XG4gICAgICBjYW52YXNEYXRhLmxlZnQgPSBNYXRoLm1pbihNYXRoLm1heChjYW52YXNEYXRhLmxlZnQsIGNhbnZhc0RhdGEubWluTGVmdCksIGNhbnZhc0RhdGEubWF4TGVmdCk7XG4gICAgICBjYW52YXNEYXRhLnRvcCA9IE1hdGgubWluKE1hdGgubWF4KGNhbnZhc0RhdGEudG9wLCBjYW52YXNEYXRhLm1pblRvcCksIGNhbnZhc0RhdGEubWF4VG9wKTtcbiAgICAgIGNhbnZhc0RhdGEub2xkTGVmdCA9IGNhbnZhc0RhdGEubGVmdDtcbiAgICAgIGNhbnZhc0RhdGEub2xkVG9wID0gY2FudmFzRGF0YS50b3A7XG4gICAgICBzZXRTdHlsZSh0aGlzLmNhbnZhcywgYXNzaWduKHtcbiAgICAgICAgd2lkdGg6IGNhbnZhc0RhdGEud2lkdGgsXG4gICAgICAgIGhlaWdodDogY2FudmFzRGF0YS5oZWlnaHRcbiAgICAgIH0sIGdldFRyYW5zZm9ybXMoe1xuICAgICAgICB0cmFuc2xhdGVYOiBjYW52YXNEYXRhLmxlZnQsXG4gICAgICAgIHRyYW5zbGF0ZVk6IGNhbnZhc0RhdGEudG9wXG4gICAgICB9KSkpO1xuICAgICAgdGhpcy5yZW5kZXJJbWFnZShjaGFuZ2VkKTtcblxuICAgICAgaWYgKHRoaXMuY3JvcHBlZCAmJiB0aGlzLmxpbWl0ZWQpIHtcbiAgICAgICAgdGhpcy5saW1pdENyb3BCb3godHJ1ZSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgfSxcbiAgICByZW5kZXJJbWFnZTogZnVuY3Rpb24gcmVuZGVySW1hZ2UoY2hhbmdlZCkge1xuICAgICAgdmFyIGNhbnZhc0RhdGEgPSB0aGlzLmNhbnZhc0RhdGEsXG4gICAgICAgICAgaW1hZ2VEYXRhID0gdGhpcy5pbWFnZURhdGE7XG4gICAgICB2YXIgd2lkdGggPSBpbWFnZURhdGEubmF0dXJhbFdpZHRoICogKGNhbnZhc0RhdGEud2lkdGggLyBjYW52YXNEYXRhLm5hdHVyYWxXaWR0aCk7XG4gICAgICB2YXIgaGVpZ2h0ID0gaW1hZ2VEYXRhLm5hdHVyYWxIZWlnaHQgKiAoY2FudmFzRGF0YS5oZWlnaHQgLyBjYW52YXNEYXRhLm5hdHVyYWxIZWlnaHQpO1xuICAgICAgYXNzaWduKGltYWdlRGF0YSwge1xuICAgICAgICB3aWR0aDogd2lkdGgsXG4gICAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgICBsZWZ0OiAoY2FudmFzRGF0YS53aWR0aCAtIHdpZHRoKSAvIDIsXG4gICAgICAgIHRvcDogKGNhbnZhc0RhdGEuaGVpZ2h0IC0gaGVpZ2h0KSAvIDJcbiAgICAgIH0pO1xuICAgICAgc2V0U3R5bGUodGhpcy5pbWFnZSwgYXNzaWduKHtcbiAgICAgICAgd2lkdGg6IGltYWdlRGF0YS53aWR0aCxcbiAgICAgICAgaGVpZ2h0OiBpbWFnZURhdGEuaGVpZ2h0XG4gICAgICB9LCBnZXRUcmFuc2Zvcm1zKGFzc2lnbih7XG4gICAgICAgIHRyYW5zbGF0ZVg6IGltYWdlRGF0YS5sZWZ0LFxuICAgICAgICB0cmFuc2xhdGVZOiBpbWFnZURhdGEudG9wXG4gICAgICB9LCBpbWFnZURhdGEpKSkpO1xuXG4gICAgICBpZiAoY2hhbmdlZCkge1xuICAgICAgICB0aGlzLm91dHB1dCgpO1xuICAgICAgfVxuICAgIH0sXG4gICAgaW5pdENyb3BCb3g6IGZ1bmN0aW9uIGluaXRDcm9wQm94KCkge1xuICAgICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMsXG4gICAgICAgICAgY2FudmFzRGF0YSA9IHRoaXMuY2FudmFzRGF0YTtcbiAgICAgIHZhciBhc3BlY3RSYXRpbyA9IG9wdGlvbnMuYXNwZWN0UmF0aW8gfHwgb3B0aW9ucy5pbml0aWFsQXNwZWN0UmF0aW87XG4gICAgICB2YXIgYXV0b0Nyb3BBcmVhID0gTnVtYmVyKG9wdGlvbnMuYXV0b0Nyb3BBcmVhKSB8fCAwLjg7XG4gICAgICB2YXIgY3JvcEJveERhdGEgPSB7XG4gICAgICAgIHdpZHRoOiBjYW52YXNEYXRhLndpZHRoLFxuICAgICAgICBoZWlnaHQ6IGNhbnZhc0RhdGEuaGVpZ2h0XG4gICAgICB9O1xuXG4gICAgICBpZiAoYXNwZWN0UmF0aW8pIHtcbiAgICAgICAgaWYgKGNhbnZhc0RhdGEuaGVpZ2h0ICogYXNwZWN0UmF0aW8gPiBjYW52YXNEYXRhLndpZHRoKSB7XG4gICAgICAgICAgY3JvcEJveERhdGEuaGVpZ2h0ID0gY3JvcEJveERhdGEud2lkdGggLyBhc3BlY3RSYXRpbztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjcm9wQm94RGF0YS53aWR0aCA9IGNyb3BCb3hEYXRhLmhlaWdodCAqIGFzcGVjdFJhdGlvO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY3JvcEJveERhdGEgPSBjcm9wQm94RGF0YTtcbiAgICAgIHRoaXMubGltaXRDcm9wQm94KHRydWUsIHRydWUpOyAvLyBJbml0aWFsaXplIGF1dG8gY3JvcCBhcmVhXG5cbiAgICAgIGNyb3BCb3hEYXRhLndpZHRoID0gTWF0aC5taW4oTWF0aC5tYXgoY3JvcEJveERhdGEud2lkdGgsIGNyb3BCb3hEYXRhLm1pbldpZHRoKSwgY3JvcEJveERhdGEubWF4V2lkdGgpO1xuICAgICAgY3JvcEJveERhdGEuaGVpZ2h0ID0gTWF0aC5taW4oTWF0aC5tYXgoY3JvcEJveERhdGEuaGVpZ2h0LCBjcm9wQm94RGF0YS5taW5IZWlnaHQpLCBjcm9wQm94RGF0YS5tYXhIZWlnaHQpOyAvLyBUaGUgd2lkdGgvaGVpZ2h0IG9mIGF1dG8gY3JvcCBhcmVhIG11c3QgbGFyZ2UgdGhhbiBcIm1pbldpZHRoL0hlaWdodFwiXG5cbiAgICAgIGNyb3BCb3hEYXRhLndpZHRoID0gTWF0aC5tYXgoY3JvcEJveERhdGEubWluV2lkdGgsIGNyb3BCb3hEYXRhLndpZHRoICogYXV0b0Nyb3BBcmVhKTtcbiAgICAgIGNyb3BCb3hEYXRhLmhlaWdodCA9IE1hdGgubWF4KGNyb3BCb3hEYXRhLm1pbkhlaWdodCwgY3JvcEJveERhdGEuaGVpZ2h0ICogYXV0b0Nyb3BBcmVhKTtcbiAgICAgIGNyb3BCb3hEYXRhLmxlZnQgPSBjYW52YXNEYXRhLmxlZnQgKyAoY2FudmFzRGF0YS53aWR0aCAtIGNyb3BCb3hEYXRhLndpZHRoKSAvIDI7XG4gICAgICBjcm9wQm94RGF0YS50b3AgPSBjYW52YXNEYXRhLnRvcCArIChjYW52YXNEYXRhLmhlaWdodCAtIGNyb3BCb3hEYXRhLmhlaWdodCkgLyAyO1xuICAgICAgY3JvcEJveERhdGEub2xkTGVmdCA9IGNyb3BCb3hEYXRhLmxlZnQ7XG4gICAgICBjcm9wQm94RGF0YS5vbGRUb3AgPSBjcm9wQm94RGF0YS50b3A7XG4gICAgICB0aGlzLmluaXRpYWxDcm9wQm94RGF0YSA9IGFzc2lnbih7fSwgY3JvcEJveERhdGEpO1xuICAgIH0sXG4gICAgbGltaXRDcm9wQm94OiBmdW5jdGlvbiBsaW1pdENyb3BCb3goc2l6ZUxpbWl0ZWQsIHBvc2l0aW9uTGltaXRlZCkge1xuICAgICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMsXG4gICAgICAgICAgY29udGFpbmVyRGF0YSA9IHRoaXMuY29udGFpbmVyRGF0YSxcbiAgICAgICAgICBjYW52YXNEYXRhID0gdGhpcy5jYW52YXNEYXRhLFxuICAgICAgICAgIGNyb3BCb3hEYXRhID0gdGhpcy5jcm9wQm94RGF0YSxcbiAgICAgICAgICBsaW1pdGVkID0gdGhpcy5saW1pdGVkO1xuICAgICAgdmFyIGFzcGVjdFJhdGlvID0gb3B0aW9ucy5hc3BlY3RSYXRpbztcblxuICAgICAgaWYgKHNpemVMaW1pdGVkKSB7XG4gICAgICAgIHZhciBtaW5Dcm9wQm94V2lkdGggPSBOdW1iZXIob3B0aW9ucy5taW5Dcm9wQm94V2lkdGgpIHx8IDA7XG4gICAgICAgIHZhciBtaW5Dcm9wQm94SGVpZ2h0ID0gTnVtYmVyKG9wdGlvbnMubWluQ3JvcEJveEhlaWdodCkgfHwgMDtcbiAgICAgICAgdmFyIG1heENyb3BCb3hXaWR0aCA9IGxpbWl0ZWQgPyBNYXRoLm1pbihjb250YWluZXJEYXRhLndpZHRoLCBjYW52YXNEYXRhLndpZHRoLCBjYW52YXNEYXRhLndpZHRoICsgY2FudmFzRGF0YS5sZWZ0LCBjb250YWluZXJEYXRhLndpZHRoIC0gY2FudmFzRGF0YS5sZWZ0KSA6IGNvbnRhaW5lckRhdGEud2lkdGg7XG4gICAgICAgIHZhciBtYXhDcm9wQm94SGVpZ2h0ID0gbGltaXRlZCA/IE1hdGgubWluKGNvbnRhaW5lckRhdGEuaGVpZ2h0LCBjYW52YXNEYXRhLmhlaWdodCwgY2FudmFzRGF0YS5oZWlnaHQgKyBjYW52YXNEYXRhLnRvcCwgY29udGFpbmVyRGF0YS5oZWlnaHQgLSBjYW52YXNEYXRhLnRvcCkgOiBjb250YWluZXJEYXRhLmhlaWdodDsgLy8gVGhlIG1pbi9tYXhDcm9wQm94V2lkdGgvSGVpZ2h0IG11c3QgYmUgbGVzcyB0aGFuIGNvbnRhaW5lcidzIHdpZHRoL2hlaWdodFxuXG4gICAgICAgIG1pbkNyb3BCb3hXaWR0aCA9IE1hdGgubWluKG1pbkNyb3BCb3hXaWR0aCwgY29udGFpbmVyRGF0YS53aWR0aCk7XG4gICAgICAgIG1pbkNyb3BCb3hIZWlnaHQgPSBNYXRoLm1pbihtaW5Dcm9wQm94SGVpZ2h0LCBjb250YWluZXJEYXRhLmhlaWdodCk7XG5cbiAgICAgICAgaWYgKGFzcGVjdFJhdGlvKSB7XG4gICAgICAgICAgaWYgKG1pbkNyb3BCb3hXaWR0aCAmJiBtaW5Dcm9wQm94SGVpZ2h0KSB7XG4gICAgICAgICAgICBpZiAobWluQ3JvcEJveEhlaWdodCAqIGFzcGVjdFJhdGlvID4gbWluQ3JvcEJveFdpZHRoKSB7XG4gICAgICAgICAgICAgIG1pbkNyb3BCb3hIZWlnaHQgPSBtaW5Dcm9wQm94V2lkdGggLyBhc3BlY3RSYXRpbztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG1pbkNyb3BCb3hXaWR0aCA9IG1pbkNyb3BCb3hIZWlnaHQgKiBhc3BlY3RSYXRpbztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKG1pbkNyb3BCb3hXaWR0aCkge1xuICAgICAgICAgICAgbWluQ3JvcEJveEhlaWdodCA9IG1pbkNyb3BCb3hXaWR0aCAvIGFzcGVjdFJhdGlvO1xuICAgICAgICAgIH0gZWxzZSBpZiAobWluQ3JvcEJveEhlaWdodCkge1xuICAgICAgICAgICAgbWluQ3JvcEJveFdpZHRoID0gbWluQ3JvcEJveEhlaWdodCAqIGFzcGVjdFJhdGlvO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChtYXhDcm9wQm94SGVpZ2h0ICogYXNwZWN0UmF0aW8gPiBtYXhDcm9wQm94V2lkdGgpIHtcbiAgICAgICAgICAgIG1heENyb3BCb3hIZWlnaHQgPSBtYXhDcm9wQm94V2lkdGggLyBhc3BlY3RSYXRpbztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWF4Q3JvcEJveFdpZHRoID0gbWF4Q3JvcEJveEhlaWdodCAqIGFzcGVjdFJhdGlvO1xuICAgICAgICAgIH1cbiAgICAgICAgfSAvLyBUaGUgbWluV2lkdGgvSGVpZ2h0IG11c3QgYmUgbGVzcyB0aGFuIG1heFdpZHRoL0hlaWdodFxuXG5cbiAgICAgICAgY3JvcEJveERhdGEubWluV2lkdGggPSBNYXRoLm1pbihtaW5Dcm9wQm94V2lkdGgsIG1heENyb3BCb3hXaWR0aCk7XG4gICAgICAgIGNyb3BCb3hEYXRhLm1pbkhlaWdodCA9IE1hdGgubWluKG1pbkNyb3BCb3hIZWlnaHQsIG1heENyb3BCb3hIZWlnaHQpO1xuICAgICAgICBjcm9wQm94RGF0YS5tYXhXaWR0aCA9IG1heENyb3BCb3hXaWR0aDtcbiAgICAgICAgY3JvcEJveERhdGEubWF4SGVpZ2h0ID0gbWF4Q3JvcEJveEhlaWdodDtcbiAgICAgIH1cblxuICAgICAgaWYgKHBvc2l0aW9uTGltaXRlZCkge1xuICAgICAgICBpZiAobGltaXRlZCkge1xuICAgICAgICAgIGNyb3BCb3hEYXRhLm1pbkxlZnQgPSBNYXRoLm1heCgwLCBjYW52YXNEYXRhLmxlZnQpO1xuICAgICAgICAgIGNyb3BCb3hEYXRhLm1pblRvcCA9IE1hdGgubWF4KDAsIGNhbnZhc0RhdGEudG9wKTtcbiAgICAgICAgICBjcm9wQm94RGF0YS5tYXhMZWZ0ID0gTWF0aC5taW4oY29udGFpbmVyRGF0YS53aWR0aCwgY2FudmFzRGF0YS5sZWZ0ICsgY2FudmFzRGF0YS53aWR0aCkgLSBjcm9wQm94RGF0YS53aWR0aDtcbiAgICAgICAgICBjcm9wQm94RGF0YS5tYXhUb3AgPSBNYXRoLm1pbihjb250YWluZXJEYXRhLmhlaWdodCwgY2FudmFzRGF0YS50b3AgKyBjYW52YXNEYXRhLmhlaWdodCkgLSBjcm9wQm94RGF0YS5oZWlnaHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY3JvcEJveERhdGEubWluTGVmdCA9IDA7XG4gICAgICAgICAgY3JvcEJveERhdGEubWluVG9wID0gMDtcbiAgICAgICAgICBjcm9wQm94RGF0YS5tYXhMZWZ0ID0gY29udGFpbmVyRGF0YS53aWR0aCAtIGNyb3BCb3hEYXRhLndpZHRoO1xuICAgICAgICAgIGNyb3BCb3hEYXRhLm1heFRvcCA9IGNvbnRhaW5lckRhdGEuaGVpZ2h0IC0gY3JvcEJveERhdGEuaGVpZ2h0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICByZW5kZXJDcm9wQm94OiBmdW5jdGlvbiByZW5kZXJDcm9wQm94KCkge1xuICAgICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMsXG4gICAgICAgICAgY29udGFpbmVyRGF0YSA9IHRoaXMuY29udGFpbmVyRGF0YSxcbiAgICAgICAgICBjcm9wQm94RGF0YSA9IHRoaXMuY3JvcEJveERhdGE7XG5cbiAgICAgIGlmIChjcm9wQm94RGF0YS53aWR0aCA+IGNyb3BCb3hEYXRhLm1heFdpZHRoIHx8IGNyb3BCb3hEYXRhLndpZHRoIDwgY3JvcEJveERhdGEubWluV2lkdGgpIHtcbiAgICAgICAgY3JvcEJveERhdGEubGVmdCA9IGNyb3BCb3hEYXRhLm9sZExlZnQ7XG4gICAgICB9XG5cbiAgICAgIGlmIChjcm9wQm94RGF0YS5oZWlnaHQgPiBjcm9wQm94RGF0YS5tYXhIZWlnaHQgfHwgY3JvcEJveERhdGEuaGVpZ2h0IDwgY3JvcEJveERhdGEubWluSGVpZ2h0KSB7XG4gICAgICAgIGNyb3BCb3hEYXRhLnRvcCA9IGNyb3BCb3hEYXRhLm9sZFRvcDtcbiAgICAgIH1cblxuICAgICAgY3JvcEJveERhdGEud2lkdGggPSBNYXRoLm1pbihNYXRoLm1heChjcm9wQm94RGF0YS53aWR0aCwgY3JvcEJveERhdGEubWluV2lkdGgpLCBjcm9wQm94RGF0YS5tYXhXaWR0aCk7XG4gICAgICBjcm9wQm94RGF0YS5oZWlnaHQgPSBNYXRoLm1pbihNYXRoLm1heChjcm9wQm94RGF0YS5oZWlnaHQsIGNyb3BCb3hEYXRhLm1pbkhlaWdodCksIGNyb3BCb3hEYXRhLm1heEhlaWdodCk7XG4gICAgICB0aGlzLmxpbWl0Q3JvcEJveChmYWxzZSwgdHJ1ZSk7XG4gICAgICBjcm9wQm94RGF0YS5sZWZ0ID0gTWF0aC5taW4oTWF0aC5tYXgoY3JvcEJveERhdGEubGVmdCwgY3JvcEJveERhdGEubWluTGVmdCksIGNyb3BCb3hEYXRhLm1heExlZnQpO1xuICAgICAgY3JvcEJveERhdGEudG9wID0gTWF0aC5taW4oTWF0aC5tYXgoY3JvcEJveERhdGEudG9wLCBjcm9wQm94RGF0YS5taW5Ub3ApLCBjcm9wQm94RGF0YS5tYXhUb3ApO1xuICAgICAgY3JvcEJveERhdGEub2xkTGVmdCA9IGNyb3BCb3hEYXRhLmxlZnQ7XG4gICAgICBjcm9wQm94RGF0YS5vbGRUb3AgPSBjcm9wQm94RGF0YS50b3A7XG5cbiAgICAgIGlmIChvcHRpb25zLm1vdmFibGUgJiYgb3B0aW9ucy5jcm9wQm94TW92YWJsZSkge1xuICAgICAgICAvLyBUdXJuIHRvIG1vdmUgdGhlIGNhbnZhcyB3aGVuIHRoZSBjcm9wIGJveCBpcyBlcXVhbCB0byB0aGUgY29udGFpbmVyXG4gICAgICAgIHNldERhdGEodGhpcy5mYWNlLCBEQVRBX0FDVElPTiwgY3JvcEJveERhdGEud2lkdGggPj0gY29udGFpbmVyRGF0YS53aWR0aCAmJiBjcm9wQm94RGF0YS5oZWlnaHQgPj0gY29udGFpbmVyRGF0YS5oZWlnaHQgPyBBQ1RJT05fTU9WRSA6IEFDVElPTl9BTEwpO1xuICAgICAgfVxuXG4gICAgICBzZXRTdHlsZSh0aGlzLmNyb3BCb3gsIGFzc2lnbih7XG4gICAgICAgIHdpZHRoOiBjcm9wQm94RGF0YS53aWR0aCxcbiAgICAgICAgaGVpZ2h0OiBjcm9wQm94RGF0YS5oZWlnaHRcbiAgICAgIH0sIGdldFRyYW5zZm9ybXMoe1xuICAgICAgICB0cmFuc2xhdGVYOiBjcm9wQm94RGF0YS5sZWZ0LFxuICAgICAgICB0cmFuc2xhdGVZOiBjcm9wQm94RGF0YS50b3BcbiAgICAgIH0pKSk7XG5cbiAgICAgIGlmICh0aGlzLmNyb3BwZWQgJiYgdGhpcy5saW1pdGVkKSB7XG4gICAgICAgIHRoaXMubGltaXRDYW52YXModHJ1ZSwgdHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgICB0aGlzLm91dHB1dCgpO1xuICAgICAgfVxuICAgIH0sXG4gICAgb3V0cHV0OiBmdW5jdGlvbiBvdXRwdXQoKSB7XG4gICAgICB0aGlzLnByZXZpZXcoKTtcbiAgICAgIGRpc3BhdGNoRXZlbnQodGhpcy5lbGVtZW50LCBFVkVOVF9DUk9QLCB0aGlzLmdldERhdGEoKSk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBwcmV2aWV3ID0ge1xuICAgIGluaXRQcmV2aWV3OiBmdW5jdGlvbiBpbml0UHJldmlldygpIHtcbiAgICAgIHZhciBlbGVtZW50ID0gdGhpcy5lbGVtZW50LFxuICAgICAgICAgIGNyb3NzT3JpZ2luID0gdGhpcy5jcm9zc09yaWdpbjtcbiAgICAgIHZhciBwcmV2aWV3ID0gdGhpcy5vcHRpb25zLnByZXZpZXc7XG4gICAgICB2YXIgdXJsID0gY3Jvc3NPcmlnaW4gPyB0aGlzLmNyb3NzT3JpZ2luVXJsIDogdGhpcy51cmw7XG4gICAgICB2YXIgYWx0ID0gZWxlbWVudC5hbHQgfHwgJ1RoZSBpbWFnZSB0byBwcmV2aWV3JztcbiAgICAgIHZhciBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXG4gICAgICBpZiAoY3Jvc3NPcmlnaW4pIHtcbiAgICAgICAgaW1hZ2UuY3Jvc3NPcmlnaW4gPSBjcm9zc09yaWdpbjtcbiAgICAgIH1cblxuICAgICAgaW1hZ2Uuc3JjID0gdXJsO1xuICAgICAgaW1hZ2UuYWx0ID0gYWx0O1xuICAgICAgdGhpcy52aWV3Qm94LmFwcGVuZENoaWxkKGltYWdlKTtcbiAgICAgIHRoaXMudmlld0JveEltYWdlID0gaW1hZ2U7XG5cbiAgICAgIGlmICghcHJldmlldykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBwcmV2aWV3cyA9IHByZXZpZXc7XG5cbiAgICAgIGlmICh0eXBlb2YgcHJldmlldyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcHJldmlld3MgPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChwcmV2aWV3KTtcbiAgICAgIH0gZWxzZSBpZiAocHJldmlldy5xdWVyeVNlbGVjdG9yKSB7XG4gICAgICAgIHByZXZpZXdzID0gW3ByZXZpZXddO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnByZXZpZXdzID0gcHJldmlld3M7XG4gICAgICBmb3JFYWNoKHByZXZpZXdzLCBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgdmFyIGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpOyAvLyBTYXZlIHRoZSBvcmlnaW5hbCBzaXplIGZvciByZWNvdmVyXG5cbiAgICAgICAgc2V0RGF0YShlbCwgREFUQV9QUkVWSUVXLCB7XG4gICAgICAgICAgd2lkdGg6IGVsLm9mZnNldFdpZHRoLFxuICAgICAgICAgIGhlaWdodDogZWwub2Zmc2V0SGVpZ2h0LFxuICAgICAgICAgIGh0bWw6IGVsLmlubmVySFRNTFxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoY3Jvc3NPcmlnaW4pIHtcbiAgICAgICAgICBpbWcuY3Jvc3NPcmlnaW4gPSBjcm9zc09yaWdpbjtcbiAgICAgICAgfVxuXG4gICAgICAgIGltZy5zcmMgPSB1cmw7XG4gICAgICAgIGltZy5hbHQgPSBhbHQ7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBPdmVycmlkZSBpbWcgZWxlbWVudCBzdHlsZXNcbiAgICAgICAgICogQWRkIGBkaXNwbGF5OmJsb2NrYCB0byBhdm9pZCBtYXJnaW4gdG9wIGlzc3VlXG4gICAgICAgICAqIEFkZCBgaGVpZ2h0OmF1dG9gIHRvIG92ZXJyaWRlIGBoZWlnaHRgIGF0dHJpYnV0ZSBvbiBJRThcbiAgICAgICAgICogKE9jY3VyIG9ubHkgd2hlbiBtYXJnaW4tdG9wIDw9IC1oZWlnaHQpXG4gICAgICAgICAqL1xuXG4gICAgICAgIGltZy5zdHlsZS5jc3NUZXh0ID0gJ2Rpc3BsYXk6YmxvY2s7JyArICd3aWR0aDoxMDAlOycgKyAnaGVpZ2h0OmF1dG87JyArICdtaW4td2lkdGg6MCFpbXBvcnRhbnQ7JyArICdtaW4taGVpZ2h0OjAhaW1wb3J0YW50OycgKyAnbWF4LXdpZHRoOm5vbmUhaW1wb3J0YW50OycgKyAnbWF4LWhlaWdodDpub25lIWltcG9ydGFudDsnICsgJ2ltYWdlLW9yaWVudGF0aW9uOjBkZWchaW1wb3J0YW50O1wiJztcbiAgICAgICAgZWwuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGVsLmFwcGVuZENoaWxkKGltZyk7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIHJlc2V0UHJldmlldzogZnVuY3Rpb24gcmVzZXRQcmV2aWV3KCkge1xuICAgICAgZm9yRWFjaCh0aGlzLnByZXZpZXdzLCBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICB2YXIgZGF0YSA9IGdldERhdGEoZWxlbWVudCwgREFUQV9QUkVWSUVXKTtcbiAgICAgICAgc2V0U3R5bGUoZWxlbWVudCwge1xuICAgICAgICAgIHdpZHRoOiBkYXRhLndpZHRoLFxuICAgICAgICAgIGhlaWdodDogZGF0YS5oZWlnaHRcbiAgICAgICAgfSk7XG4gICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gZGF0YS5odG1sO1xuICAgICAgICByZW1vdmVEYXRhKGVsZW1lbnQsIERBVEFfUFJFVklFVyk7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIHByZXZpZXc6IGZ1bmN0aW9uIHByZXZpZXcoKSB7XG4gICAgICB2YXIgaW1hZ2VEYXRhID0gdGhpcy5pbWFnZURhdGEsXG4gICAgICAgICAgY2FudmFzRGF0YSA9IHRoaXMuY2FudmFzRGF0YSxcbiAgICAgICAgICBjcm9wQm94RGF0YSA9IHRoaXMuY3JvcEJveERhdGE7XG4gICAgICB2YXIgY3JvcEJveFdpZHRoID0gY3JvcEJveERhdGEud2lkdGgsXG4gICAgICAgICAgY3JvcEJveEhlaWdodCA9IGNyb3BCb3hEYXRhLmhlaWdodDtcbiAgICAgIHZhciB3aWR0aCA9IGltYWdlRGF0YS53aWR0aCxcbiAgICAgICAgICBoZWlnaHQgPSBpbWFnZURhdGEuaGVpZ2h0O1xuICAgICAgdmFyIGxlZnQgPSBjcm9wQm94RGF0YS5sZWZ0IC0gY2FudmFzRGF0YS5sZWZ0IC0gaW1hZ2VEYXRhLmxlZnQ7XG4gICAgICB2YXIgdG9wID0gY3JvcEJveERhdGEudG9wIC0gY2FudmFzRGF0YS50b3AgLSBpbWFnZURhdGEudG9wO1xuXG4gICAgICBpZiAoIXRoaXMuY3JvcHBlZCB8fCB0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc2V0U3R5bGUodGhpcy52aWV3Qm94SW1hZ2UsIGFzc2lnbih7XG4gICAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgICAgaGVpZ2h0OiBoZWlnaHRcbiAgICAgIH0sIGdldFRyYW5zZm9ybXMoYXNzaWduKHtcbiAgICAgICAgdHJhbnNsYXRlWDogLWxlZnQsXG4gICAgICAgIHRyYW5zbGF0ZVk6IC10b3BcbiAgICAgIH0sIGltYWdlRGF0YSkpKSk7XG4gICAgICBmb3JFYWNoKHRoaXMucHJldmlld3MsIGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIHZhciBkYXRhID0gZ2V0RGF0YShlbGVtZW50LCBEQVRBX1BSRVZJRVcpO1xuICAgICAgICB2YXIgb3JpZ2luYWxXaWR0aCA9IGRhdGEud2lkdGg7XG4gICAgICAgIHZhciBvcmlnaW5hbEhlaWdodCA9IGRhdGEuaGVpZ2h0O1xuICAgICAgICB2YXIgbmV3V2lkdGggPSBvcmlnaW5hbFdpZHRoO1xuICAgICAgICB2YXIgbmV3SGVpZ2h0ID0gb3JpZ2luYWxIZWlnaHQ7XG4gICAgICAgIHZhciByYXRpbyA9IDE7XG5cbiAgICAgICAgaWYgKGNyb3BCb3hXaWR0aCkge1xuICAgICAgICAgIHJhdGlvID0gb3JpZ2luYWxXaWR0aCAvIGNyb3BCb3hXaWR0aDtcbiAgICAgICAgICBuZXdIZWlnaHQgPSBjcm9wQm94SGVpZ2h0ICogcmF0aW87XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY3JvcEJveEhlaWdodCAmJiBuZXdIZWlnaHQgPiBvcmlnaW5hbEhlaWdodCkge1xuICAgICAgICAgIHJhdGlvID0gb3JpZ2luYWxIZWlnaHQgLyBjcm9wQm94SGVpZ2h0O1xuICAgICAgICAgIG5ld1dpZHRoID0gY3JvcEJveFdpZHRoICogcmF0aW87XG4gICAgICAgICAgbmV3SGVpZ2h0ID0gb3JpZ2luYWxIZWlnaHQ7XG4gICAgICAgIH1cblxuICAgICAgICBzZXRTdHlsZShlbGVtZW50LCB7XG4gICAgICAgICAgd2lkdGg6IG5ld1dpZHRoLFxuICAgICAgICAgIGhlaWdodDogbmV3SGVpZ2h0XG4gICAgICAgIH0pO1xuICAgICAgICBzZXRTdHlsZShlbGVtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbWcnKVswXSwgYXNzaWduKHtcbiAgICAgICAgICB3aWR0aDogd2lkdGggKiByYXRpbyxcbiAgICAgICAgICBoZWlnaHQ6IGhlaWdodCAqIHJhdGlvXG4gICAgICAgIH0sIGdldFRyYW5zZm9ybXMoYXNzaWduKHtcbiAgICAgICAgICB0cmFuc2xhdGVYOiAtbGVmdCAqIHJhdGlvLFxuICAgICAgICAgIHRyYW5zbGF0ZVk6IC10b3AgKiByYXRpb1xuICAgICAgICB9LCBpbWFnZURhdGEpKSkpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBldmVudHMgPSB7XG4gICAgYmluZDogZnVuY3Rpb24gYmluZCgpIHtcbiAgICAgIHZhciBlbGVtZW50ID0gdGhpcy5lbGVtZW50LFxuICAgICAgICAgIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMsXG4gICAgICAgICAgY3JvcHBlciA9IHRoaXMuY3JvcHBlcjtcblxuICAgICAgaWYgKGlzRnVuY3Rpb24ob3B0aW9ucy5jcm9wc3RhcnQpKSB7XG4gICAgICAgIGFkZExpc3RlbmVyKGVsZW1lbnQsIEVWRU5UX0NST1BfU1RBUlQsIG9wdGlvbnMuY3JvcHN0YXJ0KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRnVuY3Rpb24ob3B0aW9ucy5jcm9wbW92ZSkpIHtcbiAgICAgICAgYWRkTGlzdGVuZXIoZWxlbWVudCwgRVZFTlRfQ1JPUF9NT1ZFLCBvcHRpb25zLmNyb3Btb3ZlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRnVuY3Rpb24ob3B0aW9ucy5jcm9wZW5kKSkge1xuICAgICAgICBhZGRMaXN0ZW5lcihlbGVtZW50LCBFVkVOVF9DUk9QX0VORCwgb3B0aW9ucy5jcm9wZW5kKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRnVuY3Rpb24ob3B0aW9ucy5jcm9wKSkge1xuICAgICAgICBhZGRMaXN0ZW5lcihlbGVtZW50LCBFVkVOVF9DUk9QLCBvcHRpb25zLmNyb3ApO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNGdW5jdGlvbihvcHRpb25zLnpvb20pKSB7XG4gICAgICAgIGFkZExpc3RlbmVyKGVsZW1lbnQsIEVWRU5UX1pPT00sIG9wdGlvbnMuem9vbSk7XG4gICAgICB9XG5cbiAgICAgIGFkZExpc3RlbmVyKGNyb3BwZXIsIEVWRU5UX1BPSU5URVJfRE9XTiwgdGhpcy5vbkNyb3BTdGFydCA9IHRoaXMuY3JvcFN0YXJ0LmJpbmQodGhpcykpO1xuXG4gICAgICBpZiAob3B0aW9ucy56b29tYWJsZSAmJiBvcHRpb25zLnpvb21PbldoZWVsKSB7XG4gICAgICAgIGFkZExpc3RlbmVyKGNyb3BwZXIsIEVWRU5UX1dIRUVMLCB0aGlzLm9uV2hlZWwgPSB0aGlzLndoZWVsLmJpbmQodGhpcyksIHtcbiAgICAgICAgICBwYXNzaXZlOiBmYWxzZSxcbiAgICAgICAgICBjYXB0dXJlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy50b2dnbGVEcmFnTW9kZU9uRGJsY2xpY2spIHtcbiAgICAgICAgYWRkTGlzdGVuZXIoY3JvcHBlciwgRVZFTlRfREJMQ0xJQ0ssIHRoaXMub25EYmxjbGljayA9IHRoaXMuZGJsY2xpY2suYmluZCh0aGlzKSk7XG4gICAgICB9XG5cbiAgICAgIGFkZExpc3RlbmVyKGVsZW1lbnQub3duZXJEb2N1bWVudCwgRVZFTlRfUE9JTlRFUl9NT1ZFLCB0aGlzLm9uQ3JvcE1vdmUgPSB0aGlzLmNyb3BNb3ZlLmJpbmQodGhpcykpO1xuICAgICAgYWRkTGlzdGVuZXIoZWxlbWVudC5vd25lckRvY3VtZW50LCBFVkVOVF9QT0lOVEVSX1VQLCB0aGlzLm9uQ3JvcEVuZCA9IHRoaXMuY3JvcEVuZC5iaW5kKHRoaXMpKTtcblxuICAgICAgaWYgKG9wdGlvbnMucmVzcG9uc2l2ZSkge1xuICAgICAgICBhZGRMaXN0ZW5lcih3aW5kb3csIEVWRU5UX1JFU0laRSwgdGhpcy5vblJlc2l6ZSA9IHRoaXMucmVzaXplLmJpbmQodGhpcykpO1xuICAgICAgfVxuICAgIH0sXG4gICAgdW5iaW5kOiBmdW5jdGlvbiB1bmJpbmQoKSB7XG4gICAgICB2YXIgZWxlbWVudCA9IHRoaXMuZWxlbWVudCxcbiAgICAgICAgICBvcHRpb25zID0gdGhpcy5vcHRpb25zLFxuICAgICAgICAgIGNyb3BwZXIgPSB0aGlzLmNyb3BwZXI7XG5cbiAgICAgIGlmIChpc0Z1bmN0aW9uKG9wdGlvbnMuY3JvcHN0YXJ0KSkge1xuICAgICAgICByZW1vdmVMaXN0ZW5lcihlbGVtZW50LCBFVkVOVF9DUk9QX1NUQVJULCBvcHRpb25zLmNyb3BzdGFydCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChpc0Z1bmN0aW9uKG9wdGlvbnMuY3JvcG1vdmUpKSB7XG4gICAgICAgIHJlbW92ZUxpc3RlbmVyKGVsZW1lbnQsIEVWRU5UX0NST1BfTU9WRSwgb3B0aW9ucy5jcm9wbW92ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChpc0Z1bmN0aW9uKG9wdGlvbnMuY3JvcGVuZCkpIHtcbiAgICAgICAgcmVtb3ZlTGlzdGVuZXIoZWxlbWVudCwgRVZFTlRfQ1JPUF9FTkQsIG9wdGlvbnMuY3JvcGVuZCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChpc0Z1bmN0aW9uKG9wdGlvbnMuY3JvcCkpIHtcbiAgICAgICAgcmVtb3ZlTGlzdGVuZXIoZWxlbWVudCwgRVZFTlRfQ1JPUCwgb3B0aW9ucy5jcm9wKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRnVuY3Rpb24ob3B0aW9ucy56b29tKSkge1xuICAgICAgICByZW1vdmVMaXN0ZW5lcihlbGVtZW50LCBFVkVOVF9aT09NLCBvcHRpb25zLnpvb20pO1xuICAgICAgfVxuXG4gICAgICByZW1vdmVMaXN0ZW5lcihjcm9wcGVyLCBFVkVOVF9QT0lOVEVSX0RPV04sIHRoaXMub25Dcm9wU3RhcnQpO1xuXG4gICAgICBpZiAob3B0aW9ucy56b29tYWJsZSAmJiBvcHRpb25zLnpvb21PbldoZWVsKSB7XG4gICAgICAgIHJlbW92ZUxpc3RlbmVyKGNyb3BwZXIsIEVWRU5UX1dIRUVMLCB0aGlzLm9uV2hlZWwsIHtcbiAgICAgICAgICBwYXNzaXZlOiBmYWxzZSxcbiAgICAgICAgICBjYXB0dXJlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy50b2dnbGVEcmFnTW9kZU9uRGJsY2xpY2spIHtcbiAgICAgICAgcmVtb3ZlTGlzdGVuZXIoY3JvcHBlciwgRVZFTlRfREJMQ0xJQ0ssIHRoaXMub25EYmxjbGljayk7XG4gICAgICB9XG5cbiAgICAgIHJlbW92ZUxpc3RlbmVyKGVsZW1lbnQub3duZXJEb2N1bWVudCwgRVZFTlRfUE9JTlRFUl9NT1ZFLCB0aGlzLm9uQ3JvcE1vdmUpO1xuICAgICAgcmVtb3ZlTGlzdGVuZXIoZWxlbWVudC5vd25lckRvY3VtZW50LCBFVkVOVF9QT0lOVEVSX1VQLCB0aGlzLm9uQ3JvcEVuZCk7XG5cbiAgICAgIGlmIChvcHRpb25zLnJlc3BvbnNpdmUpIHtcbiAgICAgICAgcmVtb3ZlTGlzdGVuZXIod2luZG93LCBFVkVOVF9SRVNJWkUsIHRoaXMub25SZXNpemUpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB2YXIgaGFuZGxlcnMgPSB7XG4gICAgcmVzaXplOiBmdW5jdGlvbiByZXNpemUoKSB7XG4gICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zLFxuICAgICAgICAgIGNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyLFxuICAgICAgICAgIGNvbnRhaW5lckRhdGEgPSB0aGlzLmNvbnRhaW5lckRhdGE7XG4gICAgICB2YXIgcmF0aW8gPSBjb250YWluZXIub2Zmc2V0V2lkdGggLyBjb250YWluZXJEYXRhLndpZHRoOyAvLyBSZXNpemUgd2hlbiB3aWR0aCBjaGFuZ2VkIG9yIGhlaWdodCBjaGFuZ2VkXG5cbiAgICAgIGlmIChyYXRpbyAhPT0gMSB8fCBjb250YWluZXIub2Zmc2V0SGVpZ2h0ICE9PSBjb250YWluZXJEYXRhLmhlaWdodCkge1xuICAgICAgICB2YXIgY2FudmFzRGF0YTtcbiAgICAgICAgdmFyIGNyb3BCb3hEYXRhO1xuXG4gICAgICAgIGlmIChvcHRpb25zLnJlc3RvcmUpIHtcbiAgICAgICAgICBjYW52YXNEYXRhID0gdGhpcy5nZXRDYW52YXNEYXRhKCk7XG4gICAgICAgICAgY3JvcEJveERhdGEgPSB0aGlzLmdldENyb3BCb3hEYXRhKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJlbmRlcigpO1xuXG4gICAgICAgIGlmIChvcHRpb25zLnJlc3RvcmUpIHtcbiAgICAgICAgICB0aGlzLnNldENhbnZhc0RhdGEoZm9yRWFjaChjYW52YXNEYXRhLCBmdW5jdGlvbiAobiwgaSkge1xuICAgICAgICAgICAgY2FudmFzRGF0YVtpXSA9IG4gKiByYXRpbztcbiAgICAgICAgICB9KSk7XG4gICAgICAgICAgdGhpcy5zZXRDcm9wQm94RGF0YShmb3JFYWNoKGNyb3BCb3hEYXRhLCBmdW5jdGlvbiAobiwgaSkge1xuICAgICAgICAgICAgY3JvcEJveERhdGFbaV0gPSBuICogcmF0aW87XG4gICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBkYmxjbGljazogZnVuY3Rpb24gZGJsY2xpY2soKSB7XG4gICAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCB0aGlzLm9wdGlvbnMuZHJhZ01vZGUgPT09IERSQUdfTU9ERV9OT05FKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXREcmFnTW9kZShoYXNDbGFzcyh0aGlzLmRyYWdCb3gsIENMQVNTX0NST1ApID8gRFJBR19NT0RFX01PVkUgOiBEUkFHX01PREVfQ1JPUCk7XG4gICAgfSxcbiAgICB3aGVlbDogZnVuY3Rpb24gd2hlZWwoZXZlbnQpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIHZhciByYXRpbyA9IE51bWJlcih0aGlzLm9wdGlvbnMud2hlZWxab29tUmF0aW8pIHx8IDAuMTtcbiAgICAgIHZhciBkZWx0YSA9IDE7XG5cbiAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTsgLy8gTGltaXQgd2hlZWwgc3BlZWQgdG8gcHJldmVudCB6b29tIHRvbyBmYXN0ICgjMjEpXG5cbiAgICAgIGlmICh0aGlzLndoZWVsaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy53aGVlbGluZyA9IHRydWU7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMud2hlZWxpbmcgPSBmYWxzZTtcbiAgICAgIH0sIDUwKTtcblxuICAgICAgaWYgKGV2ZW50LmRlbHRhWSkge1xuICAgICAgICBkZWx0YSA9IGV2ZW50LmRlbHRhWSA+IDAgPyAxIDogLTE7XG4gICAgICB9IGVsc2UgaWYgKGV2ZW50LndoZWVsRGVsdGEpIHtcbiAgICAgICAgZGVsdGEgPSAtZXZlbnQud2hlZWxEZWx0YSAvIDEyMDtcbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQuZGV0YWlsKSB7XG4gICAgICAgIGRlbHRhID0gZXZlbnQuZGV0YWlsID4gMCA/IDEgOiAtMTtcbiAgICAgIH1cblxuICAgICAgdGhpcy56b29tKC1kZWx0YSAqIHJhdGlvLCBldmVudCk7XG4gICAgfSxcbiAgICBjcm9wU3RhcnQ6IGZ1bmN0aW9uIGNyb3BTdGFydChldmVudCkge1xuICAgICAgdmFyIGJ1dHRvbnMgPSBldmVudC5idXR0b25zLFxuICAgICAgICAgIGJ1dHRvbiA9IGV2ZW50LmJ1dHRvbjtcblxuICAgICAgaWYgKHRoaXMuZGlzYWJsZWQgLy8gSGFuZGxlIG1vdXNlIGV2ZW50IGFuZCBwb2ludGVyIGV2ZW50IGFuZCBpZ25vcmUgdG91Y2ggZXZlbnRcbiAgICAgIHx8IChldmVudC50eXBlID09PSAnbW91c2Vkb3duJyB8fCBldmVudC50eXBlID09PSAncG9pbnRlcmRvd24nICYmIGV2ZW50LnBvaW50ZXJUeXBlID09PSAnbW91c2UnKSAmJiAoIC8vIE5vIHByaW1hcnkgYnV0dG9uIChVc3VhbGx5IHRoZSBsZWZ0IGJ1dHRvbilcbiAgICAgIGlzTnVtYmVyKGJ1dHRvbnMpICYmIGJ1dHRvbnMgIT09IDEgfHwgaXNOdW1iZXIoYnV0dG9uKSAmJiBidXR0b24gIT09IDAgLy8gT3BlbiBjb250ZXh0IG1lbnVcbiAgICAgIHx8IGV2ZW50LmN0cmxLZXkpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMsXG4gICAgICAgICAgcG9pbnRlcnMgPSB0aGlzLnBvaW50ZXJzO1xuICAgICAgdmFyIGFjdGlvbjtcblxuICAgICAgaWYgKGV2ZW50LmNoYW5nZWRUb3VjaGVzKSB7XG4gICAgICAgIC8vIEhhbmRsZSB0b3VjaCBldmVudFxuICAgICAgICBmb3JFYWNoKGV2ZW50LmNoYW5nZWRUb3VjaGVzLCBmdW5jdGlvbiAodG91Y2gpIHtcbiAgICAgICAgICBwb2ludGVyc1t0b3VjaC5pZGVudGlmaWVyXSA9IGdldFBvaW50ZXIodG91Y2gpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEhhbmRsZSBtb3VzZSBldmVudCBhbmQgcG9pbnRlciBldmVudFxuICAgICAgICBwb2ludGVyc1tldmVudC5wb2ludGVySWQgfHwgMF0gPSBnZXRQb2ludGVyKGV2ZW50KTtcbiAgICAgIH1cblxuICAgICAgaWYgKE9iamVjdC5rZXlzKHBvaW50ZXJzKS5sZW5ndGggPiAxICYmIG9wdGlvbnMuem9vbWFibGUgJiYgb3B0aW9ucy56b29tT25Ub3VjaCkge1xuICAgICAgICBhY3Rpb24gPSBBQ1RJT05fWk9PTTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFjdGlvbiA9IGdldERhdGEoZXZlbnQudGFyZ2V0LCBEQVRBX0FDVElPTik7XG4gICAgICB9XG5cbiAgICAgIGlmICghUkVHRVhQX0FDVElPTlMudGVzdChhY3Rpb24pKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGRpc3BhdGNoRXZlbnQodGhpcy5lbGVtZW50LCBFVkVOVF9DUk9QX1NUQVJULCB7XG4gICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2ZW50LFxuICAgICAgICBhY3Rpb246IGFjdGlvblxuICAgICAgfSkgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gLy8gVGhpcyBsaW5lIGlzIHJlcXVpcmVkIGZvciBwcmV2ZW50aW5nIHBhZ2Ugem9vbWluZyBpbiBpT1MgYnJvd3NlcnNcblxuXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5hY3Rpb24gPSBhY3Rpb247XG4gICAgICB0aGlzLmNyb3BwaW5nID0gZmFsc2U7XG5cbiAgICAgIGlmIChhY3Rpb24gPT09IEFDVElPTl9DUk9QKSB7XG4gICAgICAgIHRoaXMuY3JvcHBpbmcgPSB0cnVlO1xuICAgICAgICBhZGRDbGFzcyh0aGlzLmRyYWdCb3gsIENMQVNTX01PREFMKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGNyb3BNb3ZlOiBmdW5jdGlvbiBjcm9wTW92ZShldmVudCkge1xuICAgICAgdmFyIGFjdGlvbiA9IHRoaXMuYWN0aW9uO1xuXG4gICAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCAhYWN0aW9uKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIHBvaW50ZXJzID0gdGhpcy5wb2ludGVycztcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGlmIChkaXNwYXRjaEV2ZW50KHRoaXMuZWxlbWVudCwgRVZFTlRfQ1JPUF9NT1ZFLCB7XG4gICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2ZW50LFxuICAgICAgICBhY3Rpb246IGFjdGlvblxuICAgICAgfSkgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGV2ZW50LmNoYW5nZWRUb3VjaGVzKSB7XG4gICAgICAgIGZvckVhY2goZXZlbnQuY2hhbmdlZFRvdWNoZXMsIGZ1bmN0aW9uICh0b3VjaCkge1xuICAgICAgICAgIC8vIFRoZSBmaXJzdCBwYXJhbWV0ZXIgc2hvdWxkIG5vdCBiZSB1bmRlZmluZWQgKCM0MzIpXG4gICAgICAgICAgYXNzaWduKHBvaW50ZXJzW3RvdWNoLmlkZW50aWZpZXJdIHx8IHt9LCBnZXRQb2ludGVyKHRvdWNoLCB0cnVlKSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXNzaWduKHBvaW50ZXJzW2V2ZW50LnBvaW50ZXJJZCB8fCAwXSB8fCB7fSwgZ2V0UG9pbnRlcihldmVudCwgdHJ1ZSkpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmNoYW5nZShldmVudCk7XG4gICAgfSxcbiAgICBjcm9wRW5kOiBmdW5jdGlvbiBjcm9wRW5kKGV2ZW50KSB7XG4gICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBhY3Rpb24gPSB0aGlzLmFjdGlvbixcbiAgICAgICAgICBwb2ludGVycyA9IHRoaXMucG9pbnRlcnM7XG5cbiAgICAgIGlmIChldmVudC5jaGFuZ2VkVG91Y2hlcykge1xuICAgICAgICBmb3JFYWNoKGV2ZW50LmNoYW5nZWRUb3VjaGVzLCBmdW5jdGlvbiAodG91Y2gpIHtcbiAgICAgICAgICBkZWxldGUgcG9pbnRlcnNbdG91Y2guaWRlbnRpZmllcl07XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGVsZXRlIHBvaW50ZXJzW2V2ZW50LnBvaW50ZXJJZCB8fCAwXTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFhY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBpZiAoIU9iamVjdC5rZXlzKHBvaW50ZXJzKS5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5hY3Rpb24gPSAnJztcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuY3JvcHBpbmcpIHtcbiAgICAgICAgdGhpcy5jcm9wcGluZyA9IGZhbHNlO1xuICAgICAgICB0b2dnbGVDbGFzcyh0aGlzLmRyYWdCb3gsIENMQVNTX01PREFMLCB0aGlzLmNyb3BwZWQgJiYgdGhpcy5vcHRpb25zLm1vZGFsKTtcbiAgICAgIH1cblxuICAgICAgZGlzcGF0Y2hFdmVudCh0aGlzLmVsZW1lbnQsIEVWRU5UX0NST1BfRU5ELCB7XG4gICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2ZW50LFxuICAgICAgICBhY3Rpb246IGFjdGlvblxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBjaGFuZ2UgPSB7XG4gICAgY2hhbmdlOiBmdW5jdGlvbiBjaGFuZ2UoZXZlbnQpIHtcbiAgICAgIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zLFxuICAgICAgICAgIGNhbnZhc0RhdGEgPSB0aGlzLmNhbnZhc0RhdGEsXG4gICAgICAgICAgY29udGFpbmVyRGF0YSA9IHRoaXMuY29udGFpbmVyRGF0YSxcbiAgICAgICAgICBjcm9wQm94RGF0YSA9IHRoaXMuY3JvcEJveERhdGEsXG4gICAgICAgICAgcG9pbnRlcnMgPSB0aGlzLnBvaW50ZXJzO1xuICAgICAgdmFyIGFjdGlvbiA9IHRoaXMuYWN0aW9uO1xuICAgICAgdmFyIGFzcGVjdFJhdGlvID0gb3B0aW9ucy5hc3BlY3RSYXRpbztcbiAgICAgIHZhciBsZWZ0ID0gY3JvcEJveERhdGEubGVmdCxcbiAgICAgICAgICB0b3AgPSBjcm9wQm94RGF0YS50b3AsXG4gICAgICAgICAgd2lkdGggPSBjcm9wQm94RGF0YS53aWR0aCxcbiAgICAgICAgICBoZWlnaHQgPSBjcm9wQm94RGF0YS5oZWlnaHQ7XG4gICAgICB2YXIgcmlnaHQgPSBsZWZ0ICsgd2lkdGg7XG4gICAgICB2YXIgYm90dG9tID0gdG9wICsgaGVpZ2h0O1xuICAgICAgdmFyIG1pbkxlZnQgPSAwO1xuICAgICAgdmFyIG1pblRvcCA9IDA7XG4gICAgICB2YXIgbWF4V2lkdGggPSBjb250YWluZXJEYXRhLndpZHRoO1xuICAgICAgdmFyIG1heEhlaWdodCA9IGNvbnRhaW5lckRhdGEuaGVpZ2h0O1xuICAgICAgdmFyIHJlbmRlcmFibGUgPSB0cnVlO1xuICAgICAgdmFyIG9mZnNldDsgLy8gTG9ja2luZyBhc3BlY3QgcmF0aW8gaW4gXCJmcmVlIG1vZGVcIiBieSBob2xkaW5nIHNoaWZ0IGtleVxuXG4gICAgICBpZiAoIWFzcGVjdFJhdGlvICYmIGV2ZW50LnNoaWZ0S2V5KSB7XG4gICAgICAgIGFzcGVjdFJhdGlvID0gd2lkdGggJiYgaGVpZ2h0ID8gd2lkdGggLyBoZWlnaHQgOiAxO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5saW1pdGVkKSB7XG4gICAgICAgIG1pbkxlZnQgPSBjcm9wQm94RGF0YS5taW5MZWZ0O1xuICAgICAgICBtaW5Ub3AgPSBjcm9wQm94RGF0YS5taW5Ub3A7XG4gICAgICAgIG1heFdpZHRoID0gbWluTGVmdCArIE1hdGgubWluKGNvbnRhaW5lckRhdGEud2lkdGgsIGNhbnZhc0RhdGEud2lkdGgsIGNhbnZhc0RhdGEubGVmdCArIGNhbnZhc0RhdGEud2lkdGgpO1xuICAgICAgICBtYXhIZWlnaHQgPSBtaW5Ub3AgKyBNYXRoLm1pbihjb250YWluZXJEYXRhLmhlaWdodCwgY2FudmFzRGF0YS5oZWlnaHQsIGNhbnZhc0RhdGEudG9wICsgY2FudmFzRGF0YS5oZWlnaHQpO1xuICAgICAgfVxuXG4gICAgICB2YXIgcG9pbnRlciA9IHBvaW50ZXJzW09iamVjdC5rZXlzKHBvaW50ZXJzKVswXV07XG4gICAgICB2YXIgcmFuZ2UgPSB7XG4gICAgICAgIHg6IHBvaW50ZXIuZW5kWCAtIHBvaW50ZXIuc3RhcnRYLFxuICAgICAgICB5OiBwb2ludGVyLmVuZFkgLSBwb2ludGVyLnN0YXJ0WVxuICAgICAgfTtcblxuICAgICAgdmFyIGNoZWNrID0gZnVuY3Rpb24gY2hlY2soc2lkZSkge1xuICAgICAgICBzd2l0Y2ggKHNpZGUpIHtcbiAgICAgICAgICBjYXNlIEFDVElPTl9FQVNUOlxuICAgICAgICAgICAgaWYgKHJpZ2h0ICsgcmFuZ2UueCA+IG1heFdpZHRoKSB7XG4gICAgICAgICAgICAgIHJhbmdlLnggPSBtYXhXaWR0aCAtIHJpZ2h0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgQUNUSU9OX1dFU1Q6XG4gICAgICAgICAgICBpZiAobGVmdCArIHJhbmdlLnggPCBtaW5MZWZ0KSB7XG4gICAgICAgICAgICAgIHJhbmdlLnggPSBtaW5MZWZ0IC0gbGVmdDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIEFDVElPTl9OT1JUSDpcbiAgICAgICAgICAgIGlmICh0b3AgKyByYW5nZS55IDwgbWluVG9wKSB7XG4gICAgICAgICAgICAgIHJhbmdlLnkgPSBtaW5Ub3AgLSB0b3A7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSBBQ1RJT05fU09VVEg6XG4gICAgICAgICAgICBpZiAoYm90dG9tICsgcmFuZ2UueSA+IG1heEhlaWdodCkge1xuICAgICAgICAgICAgICByYW5nZS55ID0gbWF4SGVpZ2h0IC0gYm90dG9tO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgc3dpdGNoIChhY3Rpb24pIHtcbiAgICAgICAgLy8gTW92ZSBjcm9wIGJveFxuICAgICAgICBjYXNlIEFDVElPTl9BTEw6XG4gICAgICAgICAgbGVmdCArPSByYW5nZS54O1xuICAgICAgICAgIHRvcCArPSByYW5nZS55O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICAvLyBSZXNpemUgY3JvcCBib3hcblxuICAgICAgICBjYXNlIEFDVElPTl9FQVNUOlxuICAgICAgICAgIGlmIChyYW5nZS54ID49IDAgJiYgKHJpZ2h0ID49IG1heFdpZHRoIHx8IGFzcGVjdFJhdGlvICYmICh0b3AgPD0gbWluVG9wIHx8IGJvdHRvbSA+PSBtYXhIZWlnaHQpKSkge1xuICAgICAgICAgICAgcmVuZGVyYWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2hlY2soQUNUSU9OX0VBU1QpO1xuICAgICAgICAgIHdpZHRoICs9IHJhbmdlLng7XG5cbiAgICAgICAgICBpZiAod2lkdGggPCAwKSB7XG4gICAgICAgICAgICBhY3Rpb24gPSBBQ1RJT05fV0VTVDtcbiAgICAgICAgICAgIHdpZHRoID0gLXdpZHRoO1xuICAgICAgICAgICAgbGVmdCAtPSB3aWR0aDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoYXNwZWN0UmF0aW8pIHtcbiAgICAgICAgICAgIGhlaWdodCA9IHdpZHRoIC8gYXNwZWN0UmF0aW87XG4gICAgICAgICAgICB0b3AgKz0gKGNyb3BCb3hEYXRhLmhlaWdodCAtIGhlaWdodCkgLyAyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgQUNUSU9OX05PUlRIOlxuICAgICAgICAgIGlmIChyYW5nZS55IDw9IDAgJiYgKHRvcCA8PSBtaW5Ub3AgfHwgYXNwZWN0UmF0aW8gJiYgKGxlZnQgPD0gbWluTGVmdCB8fCByaWdodCA+PSBtYXhXaWR0aCkpKSB7XG4gICAgICAgICAgICByZW5kZXJhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjaGVjayhBQ1RJT05fTk9SVEgpO1xuICAgICAgICAgIGhlaWdodCAtPSByYW5nZS55O1xuICAgICAgICAgIHRvcCArPSByYW5nZS55O1xuXG4gICAgICAgICAgaWYgKGhlaWdodCA8IDApIHtcbiAgICAgICAgICAgIGFjdGlvbiA9IEFDVElPTl9TT1VUSDtcbiAgICAgICAgICAgIGhlaWdodCA9IC1oZWlnaHQ7XG4gICAgICAgICAgICB0b3AgLT0gaGVpZ2h0O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChhc3BlY3RSYXRpbykge1xuICAgICAgICAgICAgd2lkdGggPSBoZWlnaHQgKiBhc3BlY3RSYXRpbztcbiAgICAgICAgICAgIGxlZnQgKz0gKGNyb3BCb3hEYXRhLndpZHRoIC0gd2lkdGgpIC8gMjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIEFDVElPTl9XRVNUOlxuICAgICAgICAgIGlmIChyYW5nZS54IDw9IDAgJiYgKGxlZnQgPD0gbWluTGVmdCB8fCBhc3BlY3RSYXRpbyAmJiAodG9wIDw9IG1pblRvcCB8fCBib3R0b20gPj0gbWF4SGVpZ2h0KSkpIHtcbiAgICAgICAgICAgIHJlbmRlcmFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNoZWNrKEFDVElPTl9XRVNUKTtcbiAgICAgICAgICB3aWR0aCAtPSByYW5nZS54O1xuICAgICAgICAgIGxlZnQgKz0gcmFuZ2UueDtcblxuICAgICAgICAgIGlmICh3aWR0aCA8IDApIHtcbiAgICAgICAgICAgIGFjdGlvbiA9IEFDVElPTl9FQVNUO1xuICAgICAgICAgICAgd2lkdGggPSAtd2lkdGg7XG4gICAgICAgICAgICBsZWZ0IC09IHdpZHRoO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChhc3BlY3RSYXRpbykge1xuICAgICAgICAgICAgaGVpZ2h0ID0gd2lkdGggLyBhc3BlY3RSYXRpbztcbiAgICAgICAgICAgIHRvcCArPSAoY3JvcEJveERhdGEuaGVpZ2h0IC0gaGVpZ2h0KSAvIDI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBBQ1RJT05fU09VVEg6XG4gICAgICAgICAgaWYgKHJhbmdlLnkgPj0gMCAmJiAoYm90dG9tID49IG1heEhlaWdodCB8fCBhc3BlY3RSYXRpbyAmJiAobGVmdCA8PSBtaW5MZWZ0IHx8IHJpZ2h0ID49IG1heFdpZHRoKSkpIHtcbiAgICAgICAgICAgIHJlbmRlcmFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNoZWNrKEFDVElPTl9TT1VUSCk7XG4gICAgICAgICAgaGVpZ2h0ICs9IHJhbmdlLnk7XG5cbiAgICAgICAgICBpZiAoaGVpZ2h0IDwgMCkge1xuICAgICAgICAgICAgYWN0aW9uID0gQUNUSU9OX05PUlRIO1xuICAgICAgICAgICAgaGVpZ2h0ID0gLWhlaWdodDtcbiAgICAgICAgICAgIHRvcCAtPSBoZWlnaHQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGFzcGVjdFJhdGlvKSB7XG4gICAgICAgICAgICB3aWR0aCA9IGhlaWdodCAqIGFzcGVjdFJhdGlvO1xuICAgICAgICAgICAgbGVmdCArPSAoY3JvcEJveERhdGEud2lkdGggLSB3aWR0aCkgLyAyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgQUNUSU9OX05PUlRIX0VBU1Q6XG4gICAgICAgICAgaWYgKGFzcGVjdFJhdGlvKSB7XG4gICAgICAgICAgICBpZiAocmFuZ2UueSA8PSAwICYmICh0b3AgPD0gbWluVG9wIHx8IHJpZ2h0ID49IG1heFdpZHRoKSkge1xuICAgICAgICAgICAgICByZW5kZXJhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjaGVjayhBQ1RJT05fTk9SVEgpO1xuICAgICAgICAgICAgaGVpZ2h0IC09IHJhbmdlLnk7XG4gICAgICAgICAgICB0b3AgKz0gcmFuZ2UueTtcbiAgICAgICAgICAgIHdpZHRoID0gaGVpZ2h0ICogYXNwZWN0UmF0aW87XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNoZWNrKEFDVElPTl9OT1JUSCk7XG4gICAgICAgICAgICBjaGVjayhBQ1RJT05fRUFTVCk7XG5cbiAgICAgICAgICAgIGlmIChyYW5nZS54ID49IDApIHtcbiAgICAgICAgICAgICAgaWYgKHJpZ2h0IDwgbWF4V2lkdGgpIHtcbiAgICAgICAgICAgICAgICB3aWR0aCArPSByYW5nZS54O1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJhbmdlLnkgPD0gMCAmJiB0b3AgPD0gbWluVG9wKSB7XG4gICAgICAgICAgICAgICAgcmVuZGVyYWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB3aWR0aCArPSByYW5nZS54O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocmFuZ2UueSA8PSAwKSB7XG4gICAgICAgICAgICAgIGlmICh0b3AgPiBtaW5Ub3ApIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQgLT0gcmFuZ2UueTtcbiAgICAgICAgICAgICAgICB0b3AgKz0gcmFuZ2UueTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaGVpZ2h0IC09IHJhbmdlLnk7XG4gICAgICAgICAgICAgIHRvcCArPSByYW5nZS55O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh3aWR0aCA8IDAgJiYgaGVpZ2h0IDwgMCkge1xuICAgICAgICAgICAgYWN0aW9uID0gQUNUSU9OX1NPVVRIX1dFU1Q7XG4gICAgICAgICAgICBoZWlnaHQgPSAtaGVpZ2h0O1xuICAgICAgICAgICAgd2lkdGggPSAtd2lkdGg7XG4gICAgICAgICAgICB0b3AgLT0gaGVpZ2h0O1xuICAgICAgICAgICAgbGVmdCAtPSB3aWR0aDtcbiAgICAgICAgICB9IGVsc2UgaWYgKHdpZHRoIDwgMCkge1xuICAgICAgICAgICAgYWN0aW9uID0gQUNUSU9OX05PUlRIX1dFU1Q7XG4gICAgICAgICAgICB3aWR0aCA9IC13aWR0aDtcbiAgICAgICAgICAgIGxlZnQgLT0gd2lkdGg7XG4gICAgICAgICAgfSBlbHNlIGlmIChoZWlnaHQgPCAwKSB7XG4gICAgICAgICAgICBhY3Rpb24gPSBBQ1RJT05fU09VVEhfRUFTVDtcbiAgICAgICAgICAgIGhlaWdodCA9IC1oZWlnaHQ7XG4gICAgICAgICAgICB0b3AgLT0gaGVpZ2h0O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgQUNUSU9OX05PUlRIX1dFU1Q6XG4gICAgICAgICAgaWYgKGFzcGVjdFJhdGlvKSB7XG4gICAgICAgICAgICBpZiAocmFuZ2UueSA8PSAwICYmICh0b3AgPD0gbWluVG9wIHx8IGxlZnQgPD0gbWluTGVmdCkpIHtcbiAgICAgICAgICAgICAgcmVuZGVyYWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2hlY2soQUNUSU9OX05PUlRIKTtcbiAgICAgICAgICAgIGhlaWdodCAtPSByYW5nZS55O1xuICAgICAgICAgICAgdG9wICs9IHJhbmdlLnk7XG4gICAgICAgICAgICB3aWR0aCA9IGhlaWdodCAqIGFzcGVjdFJhdGlvO1xuICAgICAgICAgICAgbGVmdCArPSBjcm9wQm94RGF0YS53aWR0aCAtIHdpZHRoO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjaGVjayhBQ1RJT05fTk9SVEgpO1xuICAgICAgICAgICAgY2hlY2soQUNUSU9OX1dFU1QpO1xuXG4gICAgICAgICAgICBpZiAocmFuZ2UueCA8PSAwKSB7XG4gICAgICAgICAgICAgIGlmIChsZWZ0ID4gbWluTGVmdCkge1xuICAgICAgICAgICAgICAgIHdpZHRoIC09IHJhbmdlLng7XG4gICAgICAgICAgICAgICAgbGVmdCArPSByYW5nZS54O1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJhbmdlLnkgPD0gMCAmJiB0b3AgPD0gbWluVG9wKSB7XG4gICAgICAgICAgICAgICAgcmVuZGVyYWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB3aWR0aCAtPSByYW5nZS54O1xuICAgICAgICAgICAgICBsZWZ0ICs9IHJhbmdlLng7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChyYW5nZS55IDw9IDApIHtcbiAgICAgICAgICAgICAgaWYgKHRvcCA+IG1pblRvcCkge1xuICAgICAgICAgICAgICAgIGhlaWdodCAtPSByYW5nZS55O1xuICAgICAgICAgICAgICAgIHRvcCArPSByYW5nZS55O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBoZWlnaHQgLT0gcmFuZ2UueTtcbiAgICAgICAgICAgICAgdG9wICs9IHJhbmdlLnk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHdpZHRoIDwgMCAmJiBoZWlnaHQgPCAwKSB7XG4gICAgICAgICAgICBhY3Rpb24gPSBBQ1RJT05fU09VVEhfRUFTVDtcbiAgICAgICAgICAgIGhlaWdodCA9IC1oZWlnaHQ7XG4gICAgICAgICAgICB3aWR0aCA9IC13aWR0aDtcbiAgICAgICAgICAgIHRvcCAtPSBoZWlnaHQ7XG4gICAgICAgICAgICBsZWZ0IC09IHdpZHRoO1xuICAgICAgICAgIH0gZWxzZSBpZiAod2lkdGggPCAwKSB7XG4gICAgICAgICAgICBhY3Rpb24gPSBBQ1RJT05fTk9SVEhfRUFTVDtcbiAgICAgICAgICAgIHdpZHRoID0gLXdpZHRoO1xuICAgICAgICAgICAgbGVmdCAtPSB3aWR0aDtcbiAgICAgICAgICB9IGVsc2UgaWYgKGhlaWdodCA8IDApIHtcbiAgICAgICAgICAgIGFjdGlvbiA9IEFDVElPTl9TT1VUSF9XRVNUO1xuICAgICAgICAgICAgaGVpZ2h0ID0gLWhlaWdodDtcbiAgICAgICAgICAgIHRvcCAtPSBoZWlnaHQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBBQ1RJT05fU09VVEhfV0VTVDpcbiAgICAgICAgICBpZiAoYXNwZWN0UmF0aW8pIHtcbiAgICAgICAgICAgIGlmIChyYW5nZS54IDw9IDAgJiYgKGxlZnQgPD0gbWluTGVmdCB8fCBib3R0b20gPj0gbWF4SGVpZ2h0KSkge1xuICAgICAgICAgICAgICByZW5kZXJhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjaGVjayhBQ1RJT05fV0VTVCk7XG4gICAgICAgICAgICB3aWR0aCAtPSByYW5nZS54O1xuICAgICAgICAgICAgbGVmdCArPSByYW5nZS54O1xuICAgICAgICAgICAgaGVpZ2h0ID0gd2lkdGggLyBhc3BlY3RSYXRpbztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2hlY2soQUNUSU9OX1NPVVRIKTtcbiAgICAgICAgICAgIGNoZWNrKEFDVElPTl9XRVNUKTtcblxuICAgICAgICAgICAgaWYgKHJhbmdlLnggPD0gMCkge1xuICAgICAgICAgICAgICBpZiAobGVmdCA+IG1pbkxlZnQpIHtcbiAgICAgICAgICAgICAgICB3aWR0aCAtPSByYW5nZS54O1xuICAgICAgICAgICAgICAgIGxlZnQgKz0gcmFuZ2UueDtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChyYW5nZS55ID49IDAgJiYgYm90dG9tID49IG1heEhlaWdodCkge1xuICAgICAgICAgICAgICAgIHJlbmRlcmFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgd2lkdGggLT0gcmFuZ2UueDtcbiAgICAgICAgICAgICAgbGVmdCArPSByYW5nZS54O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocmFuZ2UueSA+PSAwKSB7XG4gICAgICAgICAgICAgIGlmIChib3R0b20gPCBtYXhIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQgKz0gcmFuZ2UueTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaGVpZ2h0ICs9IHJhbmdlLnk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHdpZHRoIDwgMCAmJiBoZWlnaHQgPCAwKSB7XG4gICAgICAgICAgICBhY3Rpb24gPSBBQ1RJT05fTk9SVEhfRUFTVDtcbiAgICAgICAgICAgIGhlaWdodCA9IC1oZWlnaHQ7XG4gICAgICAgICAgICB3aWR0aCA9IC13aWR0aDtcbiAgICAgICAgICAgIHRvcCAtPSBoZWlnaHQ7XG4gICAgICAgICAgICBsZWZ0IC09IHdpZHRoO1xuICAgICAgICAgIH0gZWxzZSBpZiAod2lkdGggPCAwKSB7XG4gICAgICAgICAgICBhY3Rpb24gPSBBQ1RJT05fU09VVEhfRUFTVDtcbiAgICAgICAgICAgIHdpZHRoID0gLXdpZHRoO1xuICAgICAgICAgICAgbGVmdCAtPSB3aWR0aDtcbiAgICAgICAgICB9IGVsc2UgaWYgKGhlaWdodCA8IDApIHtcbiAgICAgICAgICAgIGFjdGlvbiA9IEFDVElPTl9OT1JUSF9XRVNUO1xuICAgICAgICAgICAgaGVpZ2h0ID0gLWhlaWdodDtcbiAgICAgICAgICAgIHRvcCAtPSBoZWlnaHQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBBQ1RJT05fU09VVEhfRUFTVDpcbiAgICAgICAgICBpZiAoYXNwZWN0UmF0aW8pIHtcbiAgICAgICAgICAgIGlmIChyYW5nZS54ID49IDAgJiYgKHJpZ2h0ID49IG1heFdpZHRoIHx8IGJvdHRvbSA+PSBtYXhIZWlnaHQpKSB7XG4gICAgICAgICAgICAgIHJlbmRlcmFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNoZWNrKEFDVElPTl9FQVNUKTtcbiAgICAgICAgICAgIHdpZHRoICs9IHJhbmdlLng7XG4gICAgICAgICAgICBoZWlnaHQgPSB3aWR0aCAvIGFzcGVjdFJhdGlvO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjaGVjayhBQ1RJT05fU09VVEgpO1xuICAgICAgICAgICAgY2hlY2soQUNUSU9OX0VBU1QpO1xuXG4gICAgICAgICAgICBpZiAocmFuZ2UueCA+PSAwKSB7XG4gICAgICAgICAgICAgIGlmIChyaWdodCA8IG1heFdpZHRoKSB7XG4gICAgICAgICAgICAgICAgd2lkdGggKz0gcmFuZ2UueDtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChyYW5nZS55ID49IDAgJiYgYm90dG9tID49IG1heEhlaWdodCkge1xuICAgICAgICAgICAgICAgIHJlbmRlcmFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgd2lkdGggKz0gcmFuZ2UueDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHJhbmdlLnkgPj0gMCkge1xuICAgICAgICAgICAgICBpZiAoYm90dG9tIDwgbWF4SGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0ICs9IHJhbmdlLnk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGhlaWdodCArPSByYW5nZS55O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh3aWR0aCA8IDAgJiYgaGVpZ2h0IDwgMCkge1xuICAgICAgICAgICAgYWN0aW9uID0gQUNUSU9OX05PUlRIX1dFU1Q7XG4gICAgICAgICAgICBoZWlnaHQgPSAtaGVpZ2h0O1xuICAgICAgICAgICAgd2lkdGggPSAtd2lkdGg7XG4gICAgICAgICAgICB0b3AgLT0gaGVpZ2h0O1xuICAgICAgICAgICAgbGVmdCAtPSB3aWR0aDtcbiAgICAgICAgICB9IGVsc2UgaWYgKHdpZHRoIDwgMCkge1xuICAgICAgICAgICAgYWN0aW9uID0gQUNUSU9OX1NPVVRIX1dFU1Q7XG4gICAgICAgICAgICB3aWR0aCA9IC13aWR0aDtcbiAgICAgICAgICAgIGxlZnQgLT0gd2lkdGg7XG4gICAgICAgICAgfSBlbHNlIGlmIChoZWlnaHQgPCAwKSB7XG4gICAgICAgICAgICBhY3Rpb24gPSBBQ1RJT05fTk9SVEhfRUFTVDtcbiAgICAgICAgICAgIGhlaWdodCA9IC1oZWlnaHQ7XG4gICAgICAgICAgICB0b3AgLT0gaGVpZ2h0O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICAvLyBNb3ZlIGNhbnZhc1xuXG4gICAgICAgIGNhc2UgQUNUSU9OX01PVkU6XG4gICAgICAgICAgdGhpcy5tb3ZlKHJhbmdlLngsIHJhbmdlLnkpO1xuICAgICAgICAgIHJlbmRlcmFibGUgPSBmYWxzZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgLy8gWm9vbSBjYW52YXNcblxuICAgICAgICBjYXNlIEFDVElPTl9aT09NOlxuICAgICAgICAgIHRoaXMuem9vbShnZXRNYXhab29tUmF0aW8ocG9pbnRlcnMpLCBldmVudCk7XG4gICAgICAgICAgcmVuZGVyYWJsZSA9IGZhbHNlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICAvLyBDcmVhdGUgY3JvcCBib3hcblxuICAgICAgICBjYXNlIEFDVElPTl9DUk9QOlxuICAgICAgICAgIGlmICghcmFuZ2UueCB8fCAhcmFuZ2UueSkge1xuICAgICAgICAgICAgcmVuZGVyYWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgb2Zmc2V0ID0gZ2V0T2Zmc2V0KHRoaXMuY3JvcHBlcik7XG4gICAgICAgICAgbGVmdCA9IHBvaW50ZXIuc3RhcnRYIC0gb2Zmc2V0LmxlZnQ7XG4gICAgICAgICAgdG9wID0gcG9pbnRlci5zdGFydFkgLSBvZmZzZXQudG9wO1xuICAgICAgICAgIHdpZHRoID0gY3JvcEJveERhdGEubWluV2lkdGg7XG4gICAgICAgICAgaGVpZ2h0ID0gY3JvcEJveERhdGEubWluSGVpZ2h0O1xuXG4gICAgICAgICAgaWYgKHJhbmdlLnggPiAwKSB7XG4gICAgICAgICAgICBhY3Rpb24gPSByYW5nZS55ID4gMCA/IEFDVElPTl9TT1VUSF9FQVNUIDogQUNUSU9OX05PUlRIX0VBU1Q7XG4gICAgICAgICAgfSBlbHNlIGlmIChyYW5nZS54IDwgMCkge1xuICAgICAgICAgICAgbGVmdCAtPSB3aWR0aDtcbiAgICAgICAgICAgIGFjdGlvbiA9IHJhbmdlLnkgPiAwID8gQUNUSU9OX1NPVVRIX1dFU1QgOiBBQ1RJT05fTk9SVEhfV0VTVDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAocmFuZ2UueSA8IDApIHtcbiAgICAgICAgICAgIHRvcCAtPSBoZWlnaHQ7XG4gICAgICAgICAgfSAvLyBTaG93IHRoZSBjcm9wIGJveCBpZiBpcyBoaWRkZW5cblxuXG4gICAgICAgICAgaWYgKCF0aGlzLmNyb3BwZWQpIHtcbiAgICAgICAgICAgIHJlbW92ZUNsYXNzKHRoaXMuY3JvcEJveCwgQ0xBU1NfSElEREVOKTtcbiAgICAgICAgICAgIHRoaXMuY3JvcHBlZCA9IHRydWU7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmxpbWl0ZWQpIHtcbiAgICAgICAgICAgICAgdGhpcy5saW1pdENyb3BCb3godHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZW5kZXJhYmxlKSB7XG4gICAgICAgIGNyb3BCb3hEYXRhLndpZHRoID0gd2lkdGg7XG4gICAgICAgIGNyb3BCb3hEYXRhLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgY3JvcEJveERhdGEubGVmdCA9IGxlZnQ7XG4gICAgICAgIGNyb3BCb3hEYXRhLnRvcCA9IHRvcDtcbiAgICAgICAgdGhpcy5hY3Rpb24gPSBhY3Rpb247XG4gICAgICAgIHRoaXMucmVuZGVyQ3JvcEJveCgpO1xuICAgICAgfSAvLyBPdmVycmlkZVxuXG5cbiAgICAgIGZvckVhY2gocG9pbnRlcnMsIGZ1bmN0aW9uIChwKSB7XG4gICAgICAgIHAuc3RhcnRYID0gcC5lbmRYO1xuICAgICAgICBwLnN0YXJ0WSA9IHAuZW5kWTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICB2YXIgbWV0aG9kcyA9IHtcbiAgICAvLyBTaG93IHRoZSBjcm9wIGJveCBtYW51YWxseVxuICAgIGNyb3A6IGZ1bmN0aW9uIGNyb3AoKSB7XG4gICAgICBpZiAodGhpcy5yZWFkeSAmJiAhdGhpcy5jcm9wcGVkICYmICF0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgIHRoaXMuY3JvcHBlZCA9IHRydWU7XG4gICAgICAgIHRoaXMubGltaXRDcm9wQm94KHRydWUsIHRydWUpO1xuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMubW9kYWwpIHtcbiAgICAgICAgICBhZGRDbGFzcyh0aGlzLmRyYWdCb3gsIENMQVNTX01PREFMKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlbW92ZUNsYXNzKHRoaXMuY3JvcEJveCwgQ0xBU1NfSElEREVOKTtcbiAgICAgICAgdGhpcy5zZXRDcm9wQm94RGF0YSh0aGlzLmluaXRpYWxDcm9wQm94RGF0YSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgLy8gUmVzZXQgdGhlIGltYWdlIGFuZCBjcm9wIGJveCB0byB0aGVpciBpbml0aWFsIHN0YXRlc1xuICAgIHJlc2V0OiBmdW5jdGlvbiByZXNldCgpIHtcbiAgICAgIGlmICh0aGlzLnJlYWR5ICYmICF0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgIHRoaXMuaW1hZ2VEYXRhID0gYXNzaWduKHt9LCB0aGlzLmluaXRpYWxJbWFnZURhdGEpO1xuICAgICAgICB0aGlzLmNhbnZhc0RhdGEgPSBhc3NpZ24oe30sIHRoaXMuaW5pdGlhbENhbnZhc0RhdGEpO1xuICAgICAgICB0aGlzLmNyb3BCb3hEYXRhID0gYXNzaWduKHt9LCB0aGlzLmluaXRpYWxDcm9wQm94RGF0YSk7XG4gICAgICAgIHRoaXMucmVuZGVyQ2FudmFzKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuY3JvcHBlZCkge1xuICAgICAgICAgIHRoaXMucmVuZGVyQ3JvcEJveCgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgLy8gQ2xlYXIgdGhlIGNyb3AgYm94XG4gICAgY2xlYXI6IGZ1bmN0aW9uIGNsZWFyKCkge1xuICAgICAgaWYgKHRoaXMuY3JvcHBlZCAmJiAhdGhpcy5kaXNhYmxlZCkge1xuICAgICAgICBhc3NpZ24odGhpcy5jcm9wQm94RGF0YSwge1xuICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgIHdpZHRoOiAwLFxuICAgICAgICAgIGhlaWdodDogMFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jcm9wcGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMucmVuZGVyQ3JvcEJveCgpO1xuICAgICAgICB0aGlzLmxpbWl0Q2FudmFzKHRydWUsIHRydWUpOyAvLyBSZW5kZXIgY2FudmFzIGFmdGVyIGNyb3AgYm94IHJlbmRlcmVkXG5cbiAgICAgICAgdGhpcy5yZW5kZXJDYW52YXMoKTtcbiAgICAgICAgcmVtb3ZlQ2xhc3ModGhpcy5kcmFnQm94LCBDTEFTU19NT0RBTCk7XG4gICAgICAgIGFkZENsYXNzKHRoaXMuY3JvcEJveCwgQ0xBU1NfSElEREVOKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJlcGxhY2UgdGhlIGltYWdlJ3Mgc3JjIGFuZCByZWJ1aWxkIHRoZSBjcm9wcGVyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybCAtIFRoZSBuZXcgVVJMLlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2hhc1NhbWVTaXplXSAtIEluZGljYXRlIGlmIHRoZSBuZXcgaW1hZ2UgaGFzIHRoZSBzYW1lIHNpemUgYXMgdGhlIG9sZCBvbmUuXG4gICAgICogQHJldHVybnMge0Nyb3BwZXJ9IHRoaXNcbiAgICAgKi9cbiAgICByZXBsYWNlOiBmdW5jdGlvbiByZXBsYWNlKHVybCkge1xuICAgICAgdmFyIGhhc1NhbWVTaXplID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBmYWxzZTtcblxuICAgICAgaWYgKCF0aGlzLmRpc2FibGVkICYmIHVybCkge1xuICAgICAgICBpZiAodGhpcy5pc0ltZykge1xuICAgICAgICAgIHRoaXMuZWxlbWVudC5zcmMgPSB1cmw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaGFzU2FtZVNpemUpIHtcbiAgICAgICAgICB0aGlzLnVybCA9IHVybDtcbiAgICAgICAgICB0aGlzLmltYWdlLnNyYyA9IHVybDtcblxuICAgICAgICAgIGlmICh0aGlzLnJlYWR5KSB7XG4gICAgICAgICAgICB0aGlzLnZpZXdCb3hJbWFnZS5zcmMgPSB1cmw7XG4gICAgICAgICAgICBmb3JFYWNoKHRoaXMucHJldmlld3MsIGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgIGVsZW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2ltZycpWzBdLnNyYyA9IHVybDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAodGhpcy5pc0ltZykge1xuICAgICAgICAgICAgdGhpcy5yZXBsYWNlZCA9IHRydWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5vcHRpb25zLmRhdGEgPSBudWxsO1xuICAgICAgICAgIHRoaXMudW5jcmVhdGUoKTtcbiAgICAgICAgICB0aGlzLmxvYWQodXJsKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIC8vIEVuYWJsZSAodW5mcmVlemUpIHRoZSBjcm9wcGVyXG4gICAgZW5hYmxlOiBmdW5jdGlvbiBlbmFibGUoKSB7XG4gICAgICBpZiAodGhpcy5yZWFkeSAmJiB0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgcmVtb3ZlQ2xhc3ModGhpcy5jcm9wcGVyLCBDTEFTU19ESVNBQkxFRCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgLy8gRGlzYWJsZSAoZnJlZXplKSB0aGUgY3JvcHBlclxuICAgIGRpc2FibGU6IGZ1bmN0aW9uIGRpc2FibGUoKSB7XG4gICAgICBpZiAodGhpcy5yZWFkeSAmJiAhdGhpcy5kaXNhYmxlZCkge1xuICAgICAgICB0aGlzLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgYWRkQ2xhc3ModGhpcy5jcm9wcGVyLCBDTEFTU19ESVNBQkxFRCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBEZXN0cm95IHRoZSBjcm9wcGVyIGFuZCByZW1vdmUgdGhlIGluc3RhbmNlIGZyb20gdGhlIGltYWdlXG4gICAgICogQHJldHVybnMge0Nyb3BwZXJ9IHRoaXNcbiAgICAgKi9cbiAgICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgdmFyIGVsZW1lbnQgPSB0aGlzLmVsZW1lbnQ7XG5cbiAgICAgIGlmICghZWxlbWVudFtOQU1FU1BBQ0VdKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICBlbGVtZW50W05BTUVTUEFDRV0gPSB1bmRlZmluZWQ7XG5cbiAgICAgIGlmICh0aGlzLmlzSW1nICYmIHRoaXMucmVwbGFjZWQpIHtcbiAgICAgICAgZWxlbWVudC5zcmMgPSB0aGlzLm9yaWdpbmFsVXJsO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnVuY3JlYXRlKCk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogTW92ZSB0aGUgY2FudmFzIHdpdGggcmVsYXRpdmUgb2Zmc2V0c1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXRYIC0gVGhlIHJlbGF0aXZlIG9mZnNldCBkaXN0YW5jZSBvbiB0aGUgeC1heGlzLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbb2Zmc2V0WT1vZmZzZXRYXSAtIFRoZSByZWxhdGl2ZSBvZmZzZXQgZGlzdGFuY2Ugb24gdGhlIHktYXhpcy5cbiAgICAgKiBAcmV0dXJucyB7Q3JvcHBlcn0gdGhpc1xuICAgICAqL1xuICAgIG1vdmU6IGZ1bmN0aW9uIG1vdmUob2Zmc2V0WCkge1xuICAgICAgdmFyIG9mZnNldFkgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IG9mZnNldFg7XG4gICAgICB2YXIgX3RoaXMkY2FudmFzRGF0YSA9IHRoaXMuY2FudmFzRGF0YSxcbiAgICAgICAgICBsZWZ0ID0gX3RoaXMkY2FudmFzRGF0YS5sZWZ0LFxuICAgICAgICAgIHRvcCA9IF90aGlzJGNhbnZhc0RhdGEudG9wO1xuICAgICAgcmV0dXJuIHRoaXMubW92ZVRvKGlzVW5kZWZpbmVkKG9mZnNldFgpID8gb2Zmc2V0WCA6IGxlZnQgKyBOdW1iZXIob2Zmc2V0WCksIGlzVW5kZWZpbmVkKG9mZnNldFkpID8gb2Zmc2V0WSA6IHRvcCArIE51bWJlcihvZmZzZXRZKSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIE1vdmUgdGhlIGNhbnZhcyB0byBhbiBhYnNvbHV0ZSBwb2ludFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4IC0gVGhlIHgtYXhpcyBjb29yZGluYXRlLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbeT14XSAtIFRoZSB5LWF4aXMgY29vcmRpbmF0ZS5cbiAgICAgKiBAcmV0dXJucyB7Q3JvcHBlcn0gdGhpc1xuICAgICAqL1xuICAgIG1vdmVUbzogZnVuY3Rpb24gbW92ZVRvKHgpIHtcbiAgICAgIHZhciB5ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB4O1xuICAgICAgdmFyIGNhbnZhc0RhdGEgPSB0aGlzLmNhbnZhc0RhdGE7XG4gICAgICB2YXIgY2hhbmdlZCA9IGZhbHNlO1xuICAgICAgeCA9IE51bWJlcih4KTtcbiAgICAgIHkgPSBOdW1iZXIoeSk7XG5cbiAgICAgIGlmICh0aGlzLnJlYWR5ICYmICF0aGlzLmRpc2FibGVkICYmIHRoaXMub3B0aW9ucy5tb3ZhYmxlKSB7XG4gICAgICAgIGlmIChpc051bWJlcih4KSkge1xuICAgICAgICAgIGNhbnZhc0RhdGEubGVmdCA9IHg7XG4gICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNOdW1iZXIoeSkpIHtcbiAgICAgICAgICBjYW52YXNEYXRhLnRvcCA9IHk7XG4gICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2hhbmdlZCkge1xuICAgICAgICAgIHRoaXMucmVuZGVyQ2FudmFzKHRydWUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBab29tIHRoZSBjYW52YXMgd2l0aCBhIHJlbGF0aXZlIHJhdGlvXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHJhdGlvIC0gVGhlIHRhcmdldCByYXRpby5cbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBfb3JpZ2luYWxFdmVudCAtIFRoZSBvcmlnaW5hbCBldmVudCBpZiBhbnkuXG4gICAgICogQHJldHVybnMge0Nyb3BwZXJ9IHRoaXNcbiAgICAgKi9cbiAgICB6b29tOiBmdW5jdGlvbiB6b29tKHJhdGlvLCBfb3JpZ2luYWxFdmVudCkge1xuICAgICAgdmFyIGNhbnZhc0RhdGEgPSB0aGlzLmNhbnZhc0RhdGE7XG4gICAgICByYXRpbyA9IE51bWJlcihyYXRpbyk7XG5cbiAgICAgIGlmIChyYXRpbyA8IDApIHtcbiAgICAgICAgcmF0aW8gPSAxIC8gKDEgLSByYXRpbyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByYXRpbyA9IDEgKyByYXRpbztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuem9vbVRvKGNhbnZhc0RhdGEud2lkdGggKiByYXRpbyAvIGNhbnZhc0RhdGEubmF0dXJhbFdpZHRoLCBudWxsLCBfb3JpZ2luYWxFdmVudCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFpvb20gdGhlIGNhbnZhcyB0byBhbiBhYnNvbHV0ZSByYXRpb1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSByYXRpbyAtIFRoZSB0YXJnZXQgcmF0aW8uXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHBpdm90IC0gVGhlIHpvb20gcGl2b3QgcG9pbnQgY29vcmRpbmF0ZS5cbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBfb3JpZ2luYWxFdmVudCAtIFRoZSBvcmlnaW5hbCBldmVudCBpZiBhbnkuXG4gICAgICogQHJldHVybnMge0Nyb3BwZXJ9IHRoaXNcbiAgICAgKi9cbiAgICB6b29tVG86IGZ1bmN0aW9uIHpvb21UbyhyYXRpbywgcGl2b3QsIF9vcmlnaW5hbEV2ZW50KSB7XG4gICAgICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucyxcbiAgICAgICAgICBjYW52YXNEYXRhID0gdGhpcy5jYW52YXNEYXRhO1xuICAgICAgdmFyIHdpZHRoID0gY2FudmFzRGF0YS53aWR0aCxcbiAgICAgICAgICBoZWlnaHQgPSBjYW52YXNEYXRhLmhlaWdodCxcbiAgICAgICAgICBuYXR1cmFsV2lkdGggPSBjYW52YXNEYXRhLm5hdHVyYWxXaWR0aCxcbiAgICAgICAgICBuYXR1cmFsSGVpZ2h0ID0gY2FudmFzRGF0YS5uYXR1cmFsSGVpZ2h0O1xuICAgICAgcmF0aW8gPSBOdW1iZXIocmF0aW8pO1xuXG4gICAgICBpZiAocmF0aW8gPj0gMCAmJiB0aGlzLnJlYWR5ICYmICF0aGlzLmRpc2FibGVkICYmIG9wdGlvbnMuem9vbWFibGUpIHtcbiAgICAgICAgdmFyIG5ld1dpZHRoID0gbmF0dXJhbFdpZHRoICogcmF0aW87XG4gICAgICAgIHZhciBuZXdIZWlnaHQgPSBuYXR1cmFsSGVpZ2h0ICogcmF0aW87XG5cbiAgICAgICAgaWYgKGRpc3BhdGNoRXZlbnQodGhpcy5lbGVtZW50LCBFVkVOVF9aT09NLCB7XG4gICAgICAgICAgcmF0aW86IHJhdGlvLFxuICAgICAgICAgIG9sZFJhdGlvOiB3aWR0aCAvIG5hdHVyYWxXaWR0aCxcbiAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBfb3JpZ2luYWxFdmVudFxuICAgICAgICB9KSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfb3JpZ2luYWxFdmVudCkge1xuICAgICAgICAgIHZhciBwb2ludGVycyA9IHRoaXMucG9pbnRlcnM7XG4gICAgICAgICAgdmFyIG9mZnNldCA9IGdldE9mZnNldCh0aGlzLmNyb3BwZXIpO1xuICAgICAgICAgIHZhciBjZW50ZXIgPSBwb2ludGVycyAmJiBPYmplY3Qua2V5cyhwb2ludGVycykubGVuZ3RoID8gZ2V0UG9pbnRlcnNDZW50ZXIocG9pbnRlcnMpIDoge1xuICAgICAgICAgICAgcGFnZVg6IF9vcmlnaW5hbEV2ZW50LnBhZ2VYLFxuICAgICAgICAgICAgcGFnZVk6IF9vcmlnaW5hbEV2ZW50LnBhZ2VZXG4gICAgICAgICAgfTsgLy8gWm9vbSBmcm9tIHRoZSB0cmlnZ2VyaW5nIHBvaW50IG9mIHRoZSBldmVudFxuXG4gICAgICAgICAgY2FudmFzRGF0YS5sZWZ0IC09IChuZXdXaWR0aCAtIHdpZHRoKSAqICgoY2VudGVyLnBhZ2VYIC0gb2Zmc2V0LmxlZnQgLSBjYW52YXNEYXRhLmxlZnQpIC8gd2lkdGgpO1xuICAgICAgICAgIGNhbnZhc0RhdGEudG9wIC09IChuZXdIZWlnaHQgLSBoZWlnaHQpICogKChjZW50ZXIucGFnZVkgLSBvZmZzZXQudG9wIC0gY2FudmFzRGF0YS50b3ApIC8gaGVpZ2h0KTtcbiAgICAgICAgfSBlbHNlIGlmIChpc1BsYWluT2JqZWN0KHBpdm90KSAmJiBpc051bWJlcihwaXZvdC54KSAmJiBpc051bWJlcihwaXZvdC55KSkge1xuICAgICAgICAgIGNhbnZhc0RhdGEubGVmdCAtPSAobmV3V2lkdGggLSB3aWR0aCkgKiAoKHBpdm90LnggLSBjYW52YXNEYXRhLmxlZnQpIC8gd2lkdGgpO1xuICAgICAgICAgIGNhbnZhc0RhdGEudG9wIC09IChuZXdIZWlnaHQgLSBoZWlnaHQpICogKChwaXZvdC55IC0gY2FudmFzRGF0YS50b3ApIC8gaGVpZ2h0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBab29tIGZyb20gdGhlIGNlbnRlciBvZiB0aGUgY2FudmFzXG4gICAgICAgICAgY2FudmFzRGF0YS5sZWZ0IC09IChuZXdXaWR0aCAtIHdpZHRoKSAvIDI7XG4gICAgICAgICAgY2FudmFzRGF0YS50b3AgLT0gKG5ld0hlaWdodCAtIGhlaWdodCkgLyAyO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FudmFzRGF0YS53aWR0aCA9IG5ld1dpZHRoO1xuICAgICAgICBjYW52YXNEYXRhLmhlaWdodCA9IG5ld0hlaWdodDtcbiAgICAgICAgdGhpcy5yZW5kZXJDYW52YXModHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSb3RhdGUgdGhlIGNhbnZhcyB3aXRoIGEgcmVsYXRpdmUgZGVncmVlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGRlZ3JlZSAtIFRoZSByb3RhdGUgZGVncmVlLlxuICAgICAqIEByZXR1cm5zIHtDcm9wcGVyfSB0aGlzXG4gICAgICovXG4gICAgcm90YXRlOiBmdW5jdGlvbiByb3RhdGUoZGVncmVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5yb3RhdGVUbygodGhpcy5pbWFnZURhdGEucm90YXRlIHx8IDApICsgTnVtYmVyKGRlZ3JlZSkpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSb3RhdGUgdGhlIGNhbnZhcyB0byBhbiBhYnNvbHV0ZSBkZWdyZWVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZGVncmVlIC0gVGhlIHJvdGF0ZSBkZWdyZWUuXG4gICAgICogQHJldHVybnMge0Nyb3BwZXJ9IHRoaXNcbiAgICAgKi9cbiAgICByb3RhdGVUbzogZnVuY3Rpb24gcm90YXRlVG8oZGVncmVlKSB7XG4gICAgICBkZWdyZWUgPSBOdW1iZXIoZGVncmVlKTtcblxuICAgICAgaWYgKGlzTnVtYmVyKGRlZ3JlZSkgJiYgdGhpcy5yZWFkeSAmJiAhdGhpcy5kaXNhYmxlZCAmJiB0aGlzLm9wdGlvbnMucm90YXRhYmxlKSB7XG4gICAgICAgIHRoaXMuaW1hZ2VEYXRhLnJvdGF0ZSA9IGRlZ3JlZSAlIDM2MDtcbiAgICAgICAgdGhpcy5yZW5kZXJDYW52YXModHJ1ZSwgdHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTY2FsZSB0aGUgaW1hZ2Ugb24gdGhlIHgtYXhpcy5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc2NhbGVYIC0gVGhlIHNjYWxlIHJhdGlvIG9uIHRoZSB4LWF4aXMuXG4gICAgICogQHJldHVybnMge0Nyb3BwZXJ9IHRoaXNcbiAgICAgKi9cbiAgICBzY2FsZVg6IGZ1bmN0aW9uIHNjYWxlWChfc2NhbGVYKSB7XG4gICAgICB2YXIgc2NhbGVZID0gdGhpcy5pbWFnZURhdGEuc2NhbGVZO1xuICAgICAgcmV0dXJuIHRoaXMuc2NhbGUoX3NjYWxlWCwgaXNOdW1iZXIoc2NhbGVZKSA/IHNjYWxlWSA6IDEpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTY2FsZSB0aGUgaW1hZ2Ugb24gdGhlIHktYXhpcy5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc2NhbGVZIC0gVGhlIHNjYWxlIHJhdGlvIG9uIHRoZSB5LWF4aXMuXG4gICAgICogQHJldHVybnMge0Nyb3BwZXJ9IHRoaXNcbiAgICAgKi9cbiAgICBzY2FsZVk6IGZ1bmN0aW9uIHNjYWxlWShfc2NhbGVZKSB7XG4gICAgICB2YXIgc2NhbGVYID0gdGhpcy5pbWFnZURhdGEuc2NhbGVYO1xuICAgICAgcmV0dXJuIHRoaXMuc2NhbGUoaXNOdW1iZXIoc2NhbGVYKSA/IHNjYWxlWCA6IDEsIF9zY2FsZVkpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTY2FsZSB0aGUgaW1hZ2VcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc2NhbGVYIC0gVGhlIHNjYWxlIHJhdGlvIG9uIHRoZSB4LWF4aXMuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtzY2FsZVk9c2NhbGVYXSAtIFRoZSBzY2FsZSByYXRpbyBvbiB0aGUgeS1heGlzLlxuICAgICAqIEByZXR1cm5zIHtDcm9wcGVyfSB0aGlzXG4gICAgICovXG4gICAgc2NhbGU6IGZ1bmN0aW9uIHNjYWxlKHNjYWxlWCkge1xuICAgICAgdmFyIHNjYWxlWSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogc2NhbGVYO1xuICAgICAgdmFyIGltYWdlRGF0YSA9IHRoaXMuaW1hZ2VEYXRhO1xuICAgICAgdmFyIHRyYW5zZm9ybWVkID0gZmFsc2U7XG4gICAgICBzY2FsZVggPSBOdW1iZXIoc2NhbGVYKTtcbiAgICAgIHNjYWxlWSA9IE51bWJlcihzY2FsZVkpO1xuXG4gICAgICBpZiAodGhpcy5yZWFkeSAmJiAhdGhpcy5kaXNhYmxlZCAmJiB0aGlzLm9wdGlvbnMuc2NhbGFibGUpIHtcbiAgICAgICAgaWYgKGlzTnVtYmVyKHNjYWxlWCkpIHtcbiAgICAgICAgICBpbWFnZURhdGEuc2NhbGVYID0gc2NhbGVYO1xuICAgICAgICAgIHRyYW5zZm9ybWVkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc051bWJlcihzY2FsZVkpKSB7XG4gICAgICAgICAgaW1hZ2VEYXRhLnNjYWxlWSA9IHNjYWxlWTtcbiAgICAgICAgICB0cmFuc2Zvcm1lZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHJhbnNmb3JtZWQpIHtcbiAgICAgICAgICB0aGlzLnJlbmRlckNhbnZhcyh0cnVlLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBjcm9wcGVkIGFyZWEgcG9zaXRpb24gYW5kIHNpemUgZGF0YSAoYmFzZSBvbiB0aGUgb3JpZ2luYWwgaW1hZ2UpXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbcm91bmRlZD1mYWxzZV0gLSBJbmRpY2F0ZSBpZiByb3VuZCB0aGUgZGF0YSB2YWx1ZXMgb3Igbm90LlxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSByZXN1bHQgY3JvcHBlZCBkYXRhLlxuICAgICAqL1xuICAgIGdldERhdGE6IGZ1bmN0aW9uIGdldERhdGEoKSB7XG4gICAgICB2YXIgcm91bmRlZCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogZmFsc2U7XG4gICAgICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucyxcbiAgICAgICAgICBpbWFnZURhdGEgPSB0aGlzLmltYWdlRGF0YSxcbiAgICAgICAgICBjYW52YXNEYXRhID0gdGhpcy5jYW52YXNEYXRhLFxuICAgICAgICAgIGNyb3BCb3hEYXRhID0gdGhpcy5jcm9wQm94RGF0YTtcbiAgICAgIHZhciBkYXRhO1xuXG4gICAgICBpZiAodGhpcy5yZWFkeSAmJiB0aGlzLmNyb3BwZWQpIHtcbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICB4OiBjcm9wQm94RGF0YS5sZWZ0IC0gY2FudmFzRGF0YS5sZWZ0LFxuICAgICAgICAgIHk6IGNyb3BCb3hEYXRhLnRvcCAtIGNhbnZhc0RhdGEudG9wLFxuICAgICAgICAgIHdpZHRoOiBjcm9wQm94RGF0YS53aWR0aCxcbiAgICAgICAgICBoZWlnaHQ6IGNyb3BCb3hEYXRhLmhlaWdodFxuICAgICAgICB9O1xuICAgICAgICB2YXIgcmF0aW8gPSBpbWFnZURhdGEud2lkdGggLyBpbWFnZURhdGEubmF0dXJhbFdpZHRoO1xuICAgICAgICBmb3JFYWNoKGRhdGEsIGZ1bmN0aW9uIChuLCBpKSB7XG4gICAgICAgICAgZGF0YVtpXSA9IG4gLyByYXRpbztcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHJvdW5kZWQpIHtcbiAgICAgICAgICAvLyBJbiBjYXNlIHJvdW5kaW5nIG9mZiBsZWFkcyB0byBleHRyYSAxcHggaW4gcmlnaHQgb3IgYm90dG9tIGJvcmRlclxuICAgICAgICAgIC8vIHdlIHNob3VsZCByb3VuZCB0aGUgdG9wLWxlZnQgY29ybmVyIGFuZCB0aGUgZGltZW5zaW9uICgjMzQzKS5cbiAgICAgICAgICB2YXIgYm90dG9tID0gTWF0aC5yb3VuZChkYXRhLnkgKyBkYXRhLmhlaWdodCk7XG4gICAgICAgICAgdmFyIHJpZ2h0ID0gTWF0aC5yb3VuZChkYXRhLnggKyBkYXRhLndpZHRoKTtcbiAgICAgICAgICBkYXRhLnggPSBNYXRoLnJvdW5kKGRhdGEueCk7XG4gICAgICAgICAgZGF0YS55ID0gTWF0aC5yb3VuZChkYXRhLnkpO1xuICAgICAgICAgIGRhdGEud2lkdGggPSByaWdodCAtIGRhdGEueDtcbiAgICAgICAgICBkYXRhLmhlaWdodCA9IGJvdHRvbSAtIGRhdGEueTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICB4OiAwLFxuICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgICAgaGVpZ2h0OiAwXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLnJvdGF0YWJsZSkge1xuICAgICAgICBkYXRhLnJvdGF0ZSA9IGltYWdlRGF0YS5yb3RhdGUgfHwgMDtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMuc2NhbGFibGUpIHtcbiAgICAgICAgZGF0YS5zY2FsZVggPSBpbWFnZURhdGEuc2NhbGVYIHx8IDE7XG4gICAgICAgIGRhdGEuc2NhbGVZID0gaW1hZ2VEYXRhLnNjYWxlWSB8fCAxO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2V0IHRoZSBjcm9wcGVkIGFyZWEgcG9zaXRpb24gYW5kIHNpemUgd2l0aCBuZXcgZGF0YVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIC0gVGhlIG5ldyBkYXRhLlxuICAgICAqIEByZXR1cm5zIHtDcm9wcGVyfSB0aGlzXG4gICAgICovXG4gICAgc2V0RGF0YTogZnVuY3Rpb24gc2V0RGF0YShkYXRhKSB7XG4gICAgICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucyxcbiAgICAgICAgICBpbWFnZURhdGEgPSB0aGlzLmltYWdlRGF0YSxcbiAgICAgICAgICBjYW52YXNEYXRhID0gdGhpcy5jYW52YXNEYXRhO1xuICAgICAgdmFyIGNyb3BCb3hEYXRhID0ge307XG5cbiAgICAgIGlmICh0aGlzLnJlYWR5ICYmICF0aGlzLmRpc2FibGVkICYmIGlzUGxhaW5PYmplY3QoZGF0YSkpIHtcbiAgICAgICAgdmFyIHRyYW5zZm9ybWVkID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMucm90YXRhYmxlKSB7XG4gICAgICAgICAgaWYgKGlzTnVtYmVyKGRhdGEucm90YXRlKSAmJiBkYXRhLnJvdGF0ZSAhPT0gaW1hZ2VEYXRhLnJvdGF0ZSkge1xuICAgICAgICAgICAgaW1hZ2VEYXRhLnJvdGF0ZSA9IGRhdGEucm90YXRlO1xuICAgICAgICAgICAgdHJhbnNmb3JtZWQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLnNjYWxhYmxlKSB7XG4gICAgICAgICAgaWYgKGlzTnVtYmVyKGRhdGEuc2NhbGVYKSAmJiBkYXRhLnNjYWxlWCAhPT0gaW1hZ2VEYXRhLnNjYWxlWCkge1xuICAgICAgICAgICAgaW1hZ2VEYXRhLnNjYWxlWCA9IGRhdGEuc2NhbGVYO1xuICAgICAgICAgICAgdHJhbnNmb3JtZWQgPSB0cnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpc051bWJlcihkYXRhLnNjYWxlWSkgJiYgZGF0YS5zY2FsZVkgIT09IGltYWdlRGF0YS5zY2FsZVkpIHtcbiAgICAgICAgICAgIGltYWdlRGF0YS5zY2FsZVkgPSBkYXRhLnNjYWxlWTtcbiAgICAgICAgICAgIHRyYW5zZm9ybWVkID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHJhbnNmb3JtZWQpIHtcbiAgICAgICAgICB0aGlzLnJlbmRlckNhbnZhcyh0cnVlLCB0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciByYXRpbyA9IGltYWdlRGF0YS53aWR0aCAvIGltYWdlRGF0YS5uYXR1cmFsV2lkdGg7XG5cbiAgICAgICAgaWYgKGlzTnVtYmVyKGRhdGEueCkpIHtcbiAgICAgICAgICBjcm9wQm94RGF0YS5sZWZ0ID0gZGF0YS54ICogcmF0aW8gKyBjYW52YXNEYXRhLmxlZnQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNOdW1iZXIoZGF0YS55KSkge1xuICAgICAgICAgIGNyb3BCb3hEYXRhLnRvcCA9IGRhdGEueSAqIHJhdGlvICsgY2FudmFzRGF0YS50b3A7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNOdW1iZXIoZGF0YS53aWR0aCkpIHtcbiAgICAgICAgICBjcm9wQm94RGF0YS53aWR0aCA9IGRhdGEud2lkdGggKiByYXRpbztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc051bWJlcihkYXRhLmhlaWdodCkpIHtcbiAgICAgICAgICBjcm9wQm94RGF0YS5oZWlnaHQgPSBkYXRhLmhlaWdodCAqIHJhdGlvO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRDcm9wQm94RGF0YShjcm9wQm94RGF0YSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGNvbnRhaW5lciBzaXplIGRhdGEuXG4gICAgICogQHJldHVybnMge09iamVjdH0gVGhlIHJlc3VsdCBjb250YWluZXIgZGF0YS5cbiAgICAgKi9cbiAgICBnZXRDb250YWluZXJEYXRhOiBmdW5jdGlvbiBnZXRDb250YWluZXJEYXRhKCkge1xuICAgICAgcmV0dXJuIHRoaXMucmVhZHkgPyBhc3NpZ24oe30sIHRoaXMuY29udGFpbmVyRGF0YSkgOiB7fTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBpbWFnZSBwb3NpdGlvbiBhbmQgc2l6ZSBkYXRhLlxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSByZXN1bHQgaW1hZ2UgZGF0YS5cbiAgICAgKi9cbiAgICBnZXRJbWFnZURhdGE6IGZ1bmN0aW9uIGdldEltYWdlRGF0YSgpIHtcbiAgICAgIHJldHVybiB0aGlzLnNpemVkID8gYXNzaWduKHt9LCB0aGlzLmltYWdlRGF0YSkgOiB7fTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBjYW52YXMgcG9zaXRpb24gYW5kIHNpemUgZGF0YS5cbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgcmVzdWx0IGNhbnZhcyBkYXRhLlxuICAgICAqL1xuICAgIGdldENhbnZhc0RhdGE6IGZ1bmN0aW9uIGdldENhbnZhc0RhdGEoKSB7XG4gICAgICB2YXIgY2FudmFzRGF0YSA9IHRoaXMuY2FudmFzRGF0YTtcbiAgICAgIHZhciBkYXRhID0ge307XG5cbiAgICAgIGlmICh0aGlzLnJlYWR5KSB7XG4gICAgICAgIGZvckVhY2goWydsZWZ0JywgJ3RvcCcsICd3aWR0aCcsICdoZWlnaHQnLCAnbmF0dXJhbFdpZHRoJywgJ25hdHVyYWxIZWlnaHQnXSwgZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgICBkYXRhW25dID0gY2FudmFzRGF0YVtuXTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIGNhbnZhcyBwb3NpdGlvbiBhbmQgc2l6ZSB3aXRoIG5ldyBkYXRhLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIC0gVGhlIG5ldyBjYW52YXMgZGF0YS5cbiAgICAgKiBAcmV0dXJucyB7Q3JvcHBlcn0gdGhpc1xuICAgICAqL1xuICAgIHNldENhbnZhc0RhdGE6IGZ1bmN0aW9uIHNldENhbnZhc0RhdGEoZGF0YSkge1xuICAgICAgdmFyIGNhbnZhc0RhdGEgPSB0aGlzLmNhbnZhc0RhdGE7XG4gICAgICB2YXIgYXNwZWN0UmF0aW8gPSBjYW52YXNEYXRhLmFzcGVjdFJhdGlvO1xuXG4gICAgICBpZiAodGhpcy5yZWFkeSAmJiAhdGhpcy5kaXNhYmxlZCAmJiBpc1BsYWluT2JqZWN0KGRhdGEpKSB7XG4gICAgICAgIGlmIChpc051bWJlcihkYXRhLmxlZnQpKSB7XG4gICAgICAgICAgY2FudmFzRGF0YS5sZWZ0ID0gZGF0YS5sZWZ0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzTnVtYmVyKGRhdGEudG9wKSkge1xuICAgICAgICAgIGNhbnZhc0RhdGEudG9wID0gZGF0YS50b3A7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNOdW1iZXIoZGF0YS53aWR0aCkpIHtcbiAgICAgICAgICBjYW52YXNEYXRhLndpZHRoID0gZGF0YS53aWR0aDtcbiAgICAgICAgICBjYW52YXNEYXRhLmhlaWdodCA9IGRhdGEud2lkdGggLyBhc3BlY3RSYXRpbztcbiAgICAgICAgfSBlbHNlIGlmIChpc051bWJlcihkYXRhLmhlaWdodCkpIHtcbiAgICAgICAgICBjYW52YXNEYXRhLmhlaWdodCA9IGRhdGEuaGVpZ2h0O1xuICAgICAgICAgIGNhbnZhc0RhdGEud2lkdGggPSBkYXRhLmhlaWdodCAqIGFzcGVjdFJhdGlvO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZW5kZXJDYW52YXModHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGNyb3AgYm94IHBvc2l0aW9uIGFuZCBzaXplIGRhdGEuXG4gICAgICogQHJldHVybnMge09iamVjdH0gVGhlIHJlc3VsdCBjcm9wIGJveCBkYXRhLlxuICAgICAqL1xuICAgIGdldENyb3BCb3hEYXRhOiBmdW5jdGlvbiBnZXRDcm9wQm94RGF0YSgpIHtcbiAgICAgIHZhciBjcm9wQm94RGF0YSA9IHRoaXMuY3JvcEJveERhdGE7XG4gICAgICB2YXIgZGF0YTtcblxuICAgICAgaWYgKHRoaXMucmVhZHkgJiYgdGhpcy5jcm9wcGVkKSB7XG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgbGVmdDogY3JvcEJveERhdGEubGVmdCxcbiAgICAgICAgICB0b3A6IGNyb3BCb3hEYXRhLnRvcCxcbiAgICAgICAgICB3aWR0aDogY3JvcEJveERhdGEud2lkdGgsXG4gICAgICAgICAgaGVpZ2h0OiBjcm9wQm94RGF0YS5oZWlnaHRcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGEgfHwge307XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgY3JvcCBib3ggcG9zaXRpb24gYW5kIHNpemUgd2l0aCBuZXcgZGF0YS5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YSAtIFRoZSBuZXcgY3JvcCBib3ggZGF0YS5cbiAgICAgKiBAcmV0dXJucyB7Q3JvcHBlcn0gdGhpc1xuICAgICAqL1xuICAgIHNldENyb3BCb3hEYXRhOiBmdW5jdGlvbiBzZXRDcm9wQm94RGF0YShkYXRhKSB7XG4gICAgICB2YXIgY3JvcEJveERhdGEgPSB0aGlzLmNyb3BCb3hEYXRhO1xuICAgICAgdmFyIGFzcGVjdFJhdGlvID0gdGhpcy5vcHRpb25zLmFzcGVjdFJhdGlvO1xuICAgICAgdmFyIHdpZHRoQ2hhbmdlZDtcbiAgICAgIHZhciBoZWlnaHRDaGFuZ2VkO1xuXG4gICAgICBpZiAodGhpcy5yZWFkeSAmJiB0aGlzLmNyb3BwZWQgJiYgIXRoaXMuZGlzYWJsZWQgJiYgaXNQbGFpbk9iamVjdChkYXRhKSkge1xuICAgICAgICBpZiAoaXNOdW1iZXIoZGF0YS5sZWZ0KSkge1xuICAgICAgICAgIGNyb3BCb3hEYXRhLmxlZnQgPSBkYXRhLmxlZnQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNOdW1iZXIoZGF0YS50b3ApKSB7XG4gICAgICAgICAgY3JvcEJveERhdGEudG9wID0gZGF0YS50b3A7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNOdW1iZXIoZGF0YS53aWR0aCkgJiYgZGF0YS53aWR0aCAhPT0gY3JvcEJveERhdGEud2lkdGgpIHtcbiAgICAgICAgICB3aWR0aENoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgIGNyb3BCb3hEYXRhLndpZHRoID0gZGF0YS53aWR0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc051bWJlcihkYXRhLmhlaWdodCkgJiYgZGF0YS5oZWlnaHQgIT09IGNyb3BCb3hEYXRhLmhlaWdodCkge1xuICAgICAgICAgIGhlaWdodENoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgIGNyb3BCb3hEYXRhLmhlaWdodCA9IGRhdGEuaGVpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFzcGVjdFJhdGlvKSB7XG4gICAgICAgICAgaWYgKHdpZHRoQ2hhbmdlZCkge1xuICAgICAgICAgICAgY3JvcEJveERhdGEuaGVpZ2h0ID0gY3JvcEJveERhdGEud2lkdGggLyBhc3BlY3RSYXRpbztcbiAgICAgICAgICB9IGVsc2UgaWYgKGhlaWdodENoYW5nZWQpIHtcbiAgICAgICAgICAgIGNyb3BCb3hEYXRhLndpZHRoID0gY3JvcEJveERhdGEuaGVpZ2h0ICogYXNwZWN0UmF0aW87XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZW5kZXJDcm9wQm94KCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBHZXQgYSBjYW52YXMgZHJhd24gdGhlIGNyb3BwZWQgaW1hZ2UuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSAtIFRoZSBjb25maWcgb3B0aW9ucy5cbiAgICAgKiBAcmV0dXJucyB7SFRNTENhbnZhc0VsZW1lbnR9IC0gVGhlIHJlc3VsdCBjYW52YXMuXG4gICAgICovXG4gICAgZ2V0Q3JvcHBlZENhbnZhczogZnVuY3Rpb24gZ2V0Q3JvcHBlZENhbnZhcygpIHtcbiAgICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICAgICAgaWYgKCF0aGlzLnJlYWR5IHx8ICF3aW5kb3cuSFRNTENhbnZhc0VsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciBjYW52YXNEYXRhID0gdGhpcy5jYW52YXNEYXRhO1xuICAgICAgdmFyIHNvdXJjZSA9IGdldFNvdXJjZUNhbnZhcyh0aGlzLmltYWdlLCB0aGlzLmltYWdlRGF0YSwgY2FudmFzRGF0YSwgb3B0aW9ucyk7IC8vIFJldHVybnMgdGhlIHNvdXJjZSBjYW52YXMgaWYgaXQgaXMgbm90IGNyb3BwZWQuXG5cbiAgICAgIGlmICghdGhpcy5jcm9wcGVkKSB7XG4gICAgICAgIHJldHVybiBzb3VyY2U7XG4gICAgICB9XG5cbiAgICAgIHZhciBfdGhpcyRnZXREYXRhID0gdGhpcy5nZXREYXRhKCksXG4gICAgICAgICAgaW5pdGlhbFggPSBfdGhpcyRnZXREYXRhLngsXG4gICAgICAgICAgaW5pdGlhbFkgPSBfdGhpcyRnZXREYXRhLnksXG4gICAgICAgICAgaW5pdGlhbFdpZHRoID0gX3RoaXMkZ2V0RGF0YS53aWR0aCxcbiAgICAgICAgICBpbml0aWFsSGVpZ2h0ID0gX3RoaXMkZ2V0RGF0YS5oZWlnaHQ7XG5cbiAgICAgIHZhciByYXRpbyA9IHNvdXJjZS53aWR0aCAvIE1hdGguZmxvb3IoY2FudmFzRGF0YS5uYXR1cmFsV2lkdGgpO1xuXG4gICAgICBpZiAocmF0aW8gIT09IDEpIHtcbiAgICAgICAgaW5pdGlhbFggKj0gcmF0aW87XG4gICAgICAgIGluaXRpYWxZICo9IHJhdGlvO1xuICAgICAgICBpbml0aWFsV2lkdGggKj0gcmF0aW87XG4gICAgICAgIGluaXRpYWxIZWlnaHQgKj0gcmF0aW87XG4gICAgICB9XG5cbiAgICAgIHZhciBhc3BlY3RSYXRpbyA9IGluaXRpYWxXaWR0aCAvIGluaXRpYWxIZWlnaHQ7XG4gICAgICB2YXIgbWF4U2l6ZXMgPSBnZXRBZGp1c3RlZFNpemVzKHtcbiAgICAgICAgYXNwZWN0UmF0aW86IGFzcGVjdFJhdGlvLFxuICAgICAgICB3aWR0aDogb3B0aW9ucy5tYXhXaWR0aCB8fCBJbmZpbml0eSxcbiAgICAgICAgaGVpZ2h0OiBvcHRpb25zLm1heEhlaWdodCB8fCBJbmZpbml0eVxuICAgICAgfSk7XG4gICAgICB2YXIgbWluU2l6ZXMgPSBnZXRBZGp1c3RlZFNpemVzKHtcbiAgICAgICAgYXNwZWN0UmF0aW86IGFzcGVjdFJhdGlvLFxuICAgICAgICB3aWR0aDogb3B0aW9ucy5taW5XaWR0aCB8fCAwLFxuICAgICAgICBoZWlnaHQ6IG9wdGlvbnMubWluSGVpZ2h0IHx8IDBcbiAgICAgIH0sICdjb3ZlcicpO1xuXG4gICAgICB2YXIgX2dldEFkanVzdGVkU2l6ZXMgPSBnZXRBZGp1c3RlZFNpemVzKHtcbiAgICAgICAgYXNwZWN0UmF0aW86IGFzcGVjdFJhdGlvLFxuICAgICAgICB3aWR0aDogb3B0aW9ucy53aWR0aCB8fCAocmF0aW8gIT09IDEgPyBzb3VyY2Uud2lkdGggOiBpbml0aWFsV2lkdGgpLFxuICAgICAgICBoZWlnaHQ6IG9wdGlvbnMuaGVpZ2h0IHx8IChyYXRpbyAhPT0gMSA/IHNvdXJjZS5oZWlnaHQgOiBpbml0aWFsSGVpZ2h0KVxuICAgICAgfSksXG4gICAgICAgICAgd2lkdGggPSBfZ2V0QWRqdXN0ZWRTaXplcy53aWR0aCxcbiAgICAgICAgICBoZWlnaHQgPSBfZ2V0QWRqdXN0ZWRTaXplcy5oZWlnaHQ7XG5cbiAgICAgIHdpZHRoID0gTWF0aC5taW4obWF4U2l6ZXMud2lkdGgsIE1hdGgubWF4KG1pblNpemVzLndpZHRoLCB3aWR0aCkpO1xuICAgICAgaGVpZ2h0ID0gTWF0aC5taW4obWF4U2l6ZXMuaGVpZ2h0LCBNYXRoLm1heChtaW5TaXplcy5oZWlnaHQsIGhlaWdodCkpO1xuICAgICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgdmFyIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgIGNhbnZhcy53aWR0aCA9IG5vcm1hbGl6ZURlY2ltYWxOdW1iZXIod2lkdGgpO1xuICAgICAgY2FudmFzLmhlaWdodCA9IG5vcm1hbGl6ZURlY2ltYWxOdW1iZXIoaGVpZ2h0KTtcbiAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gb3B0aW9ucy5maWxsQ29sb3IgfHwgJ3RyYW5zcGFyZW50JztcbiAgICAgIGNvbnRleHQuZmlsbFJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG4gICAgICB2YXIgX29wdGlvbnMkaW1hZ2VTbW9vdGhpID0gb3B0aW9ucy5pbWFnZVNtb290aGluZ0VuYWJsZWQsXG4gICAgICAgICAgaW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gX29wdGlvbnMkaW1hZ2VTbW9vdGhpID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkaW1hZ2VTbW9vdGhpLFxuICAgICAgICAgIGltYWdlU21vb3RoaW5nUXVhbGl0eSA9IG9wdGlvbnMuaW1hZ2VTbW9vdGhpbmdRdWFsaXR5O1xuICAgICAgY29udGV4dC5pbWFnZVNtb290aGluZ0VuYWJsZWQgPSBpbWFnZVNtb290aGluZ0VuYWJsZWQ7XG5cbiAgICAgIGlmIChpbWFnZVNtb290aGluZ1F1YWxpdHkpIHtcbiAgICAgICAgY29udGV4dC5pbWFnZVNtb290aGluZ1F1YWxpdHkgPSBpbWFnZVNtb290aGluZ1F1YWxpdHk7XG4gICAgICB9IC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9DYW52YXNSZW5kZXJpbmdDb250ZXh0MkQuZHJhd0ltYWdlXG5cblxuICAgICAgdmFyIHNvdXJjZVdpZHRoID0gc291cmNlLndpZHRoO1xuICAgICAgdmFyIHNvdXJjZUhlaWdodCA9IHNvdXJjZS5oZWlnaHQ7IC8vIFNvdXJjZSBjYW52YXMgcGFyYW1ldGVyc1xuXG4gICAgICB2YXIgc3JjWCA9IGluaXRpYWxYO1xuICAgICAgdmFyIHNyY1kgPSBpbml0aWFsWTtcbiAgICAgIHZhciBzcmNXaWR0aDtcbiAgICAgIHZhciBzcmNIZWlnaHQ7IC8vIERlc3RpbmF0aW9uIGNhbnZhcyBwYXJhbWV0ZXJzXG5cbiAgICAgIHZhciBkc3RYO1xuICAgICAgdmFyIGRzdFk7XG4gICAgICB2YXIgZHN0V2lkdGg7XG4gICAgICB2YXIgZHN0SGVpZ2h0O1xuXG4gICAgICBpZiAoc3JjWCA8PSAtaW5pdGlhbFdpZHRoIHx8IHNyY1ggPiBzb3VyY2VXaWR0aCkge1xuICAgICAgICBzcmNYID0gMDtcbiAgICAgICAgc3JjV2lkdGggPSAwO1xuICAgICAgICBkc3RYID0gMDtcbiAgICAgICAgZHN0V2lkdGggPSAwO1xuICAgICAgfSBlbHNlIGlmIChzcmNYIDw9IDApIHtcbiAgICAgICAgZHN0WCA9IC1zcmNYO1xuICAgICAgICBzcmNYID0gMDtcbiAgICAgICAgc3JjV2lkdGggPSBNYXRoLm1pbihzb3VyY2VXaWR0aCwgaW5pdGlhbFdpZHRoICsgc3JjWCk7XG4gICAgICAgIGRzdFdpZHRoID0gc3JjV2lkdGg7XG4gICAgICB9IGVsc2UgaWYgKHNyY1ggPD0gc291cmNlV2lkdGgpIHtcbiAgICAgICAgZHN0WCA9IDA7XG4gICAgICAgIHNyY1dpZHRoID0gTWF0aC5taW4oaW5pdGlhbFdpZHRoLCBzb3VyY2VXaWR0aCAtIHNyY1gpO1xuICAgICAgICBkc3RXaWR0aCA9IHNyY1dpZHRoO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3JjV2lkdGggPD0gMCB8fCBzcmNZIDw9IC1pbml0aWFsSGVpZ2h0IHx8IHNyY1kgPiBzb3VyY2VIZWlnaHQpIHtcbiAgICAgICAgc3JjWSA9IDA7XG4gICAgICAgIHNyY0hlaWdodCA9IDA7XG4gICAgICAgIGRzdFkgPSAwO1xuICAgICAgICBkc3RIZWlnaHQgPSAwO1xuICAgICAgfSBlbHNlIGlmIChzcmNZIDw9IDApIHtcbiAgICAgICAgZHN0WSA9IC1zcmNZO1xuICAgICAgICBzcmNZID0gMDtcbiAgICAgICAgc3JjSGVpZ2h0ID0gTWF0aC5taW4oc291cmNlSGVpZ2h0LCBpbml0aWFsSGVpZ2h0ICsgc3JjWSk7XG4gICAgICAgIGRzdEhlaWdodCA9IHNyY0hlaWdodDtcbiAgICAgIH0gZWxzZSBpZiAoc3JjWSA8PSBzb3VyY2VIZWlnaHQpIHtcbiAgICAgICAgZHN0WSA9IDA7XG4gICAgICAgIHNyY0hlaWdodCA9IE1hdGgubWluKGluaXRpYWxIZWlnaHQsIHNvdXJjZUhlaWdodCAtIHNyY1kpO1xuICAgICAgICBkc3RIZWlnaHQgPSBzcmNIZWlnaHQ7XG4gICAgICB9XG5cbiAgICAgIHZhciBwYXJhbXMgPSBbc3JjWCwgc3JjWSwgc3JjV2lkdGgsIHNyY0hlaWdodF07IC8vIEF2b2lkIFwiSW5kZXhTaXplRXJyb3JcIlxuXG4gICAgICBpZiAoZHN0V2lkdGggPiAwICYmIGRzdEhlaWdodCA+IDApIHtcbiAgICAgICAgdmFyIHNjYWxlID0gd2lkdGggLyBpbml0aWFsV2lkdGg7XG4gICAgICAgIHBhcmFtcy5wdXNoKGRzdFggKiBzY2FsZSwgZHN0WSAqIHNjYWxlLCBkc3RXaWR0aCAqIHNjYWxlLCBkc3RIZWlnaHQgKiBzY2FsZSk7XG4gICAgICB9IC8vIEFsbCB0aGUgbnVtZXJpY2FsIHBhcmFtZXRlcnMgc2hvdWxkIGJlIGludGVnZXIgZm9yIGBkcmF3SW1hZ2VgXG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZmVuZ3l1YW5jaGVuL2Nyb3BwZXIvaXNzdWVzLzQ3NlxuXG5cbiAgICAgIGNvbnRleHQuZHJhd0ltYWdlLmFwcGx5KGNvbnRleHQsIFtzb3VyY2VdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkocGFyYW1zLm1hcChmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3Iobm9ybWFsaXplRGVjaW1hbE51bWJlcihwYXJhbSkpO1xuICAgICAgfSkpKSk7XG4gICAgICByZXR1cm4gY2FudmFzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2UgdGhlIGFzcGVjdCByYXRpbyBvZiB0aGUgY3JvcCBib3guXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGFzcGVjdFJhdGlvIC0gVGhlIG5ldyBhc3BlY3QgcmF0aW8uXG4gICAgICogQHJldHVybnMge0Nyb3BwZXJ9IHRoaXNcbiAgICAgKi9cbiAgICBzZXRBc3BlY3RSYXRpbzogZnVuY3Rpb24gc2V0QXNwZWN0UmF0aW8oYXNwZWN0UmF0aW8pIHtcbiAgICAgIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuXG4gICAgICBpZiAoIXRoaXMuZGlzYWJsZWQgJiYgIWlzVW5kZWZpbmVkKGFzcGVjdFJhdGlvKSkge1xuICAgICAgICAvLyAwIC0+IE5hTlxuICAgICAgICBvcHRpb25zLmFzcGVjdFJhdGlvID0gTWF0aC5tYXgoMCwgYXNwZWN0UmF0aW8pIHx8IE5hTjtcblxuICAgICAgICBpZiAodGhpcy5yZWFkeSkge1xuICAgICAgICAgIHRoaXMuaW5pdENyb3BCb3goKTtcblxuICAgICAgICAgIGlmICh0aGlzLmNyb3BwZWQpIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyQ3JvcEJveCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlIHRoZSBkcmFnIG1vZGUuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1vZGUgLSBUaGUgbmV3IGRyYWcgbW9kZS5cbiAgICAgKiBAcmV0dXJucyB7Q3JvcHBlcn0gdGhpc1xuICAgICAqL1xuICAgIHNldERyYWdNb2RlOiBmdW5jdGlvbiBzZXREcmFnTW9kZShtb2RlKSB7XG4gICAgICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucyxcbiAgICAgICAgICBkcmFnQm94ID0gdGhpcy5kcmFnQm94LFxuICAgICAgICAgIGZhY2UgPSB0aGlzLmZhY2U7XG5cbiAgICAgIGlmICh0aGlzLnJlYWR5ICYmICF0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgIHZhciBjcm9wcGFibGUgPSBtb2RlID09PSBEUkFHX01PREVfQ1JPUDtcbiAgICAgICAgdmFyIG1vdmFibGUgPSBvcHRpb25zLm1vdmFibGUgJiYgbW9kZSA9PT0gRFJBR19NT0RFX01PVkU7XG4gICAgICAgIG1vZGUgPSBjcm9wcGFibGUgfHwgbW92YWJsZSA/IG1vZGUgOiBEUkFHX01PREVfTk9ORTtcbiAgICAgICAgb3B0aW9ucy5kcmFnTW9kZSA9IG1vZGU7XG4gICAgICAgIHNldERhdGEoZHJhZ0JveCwgREFUQV9BQ1RJT04sIG1vZGUpO1xuICAgICAgICB0b2dnbGVDbGFzcyhkcmFnQm94LCBDTEFTU19DUk9QLCBjcm9wcGFibGUpO1xuICAgICAgICB0b2dnbGVDbGFzcyhkcmFnQm94LCBDTEFTU19NT1ZFLCBtb3ZhYmxlKTtcblxuICAgICAgICBpZiAoIW9wdGlvbnMuY3JvcEJveE1vdmFibGUpIHtcbiAgICAgICAgICAvLyBTeW5jIGRyYWcgbW9kZSB0byBjcm9wIGJveCB3aGVuIGl0IGlzIG5vdCBtb3ZhYmxlXG4gICAgICAgICAgc2V0RGF0YShmYWNlLCBEQVRBX0FDVElPTiwgbW9kZSk7XG4gICAgICAgICAgdG9nZ2xlQ2xhc3MoZmFjZSwgQ0xBU1NfQ1JPUCwgY3JvcHBhYmxlKTtcbiAgICAgICAgICB0b2dnbGVDbGFzcyhmYWNlLCBDTEFTU19NT1ZFLCBtb3ZhYmxlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH07XG5cbiAgdmFyIEFub3RoZXJDcm9wcGVyID0gV0lORE9XLkNyb3BwZXI7XG5cbiAgdmFyIENyb3BwZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBDcm9wcGVyLlxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudCAtIFRoZSB0YXJnZXQgZWxlbWVudCBmb3IgY3JvcHBpbmcuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSAtIFRoZSBjb25maWd1cmF0aW9uIG9wdGlvbnMuXG4gICAgICovXG4gICAgZnVuY3Rpb24gQ3JvcHBlcihlbGVtZW50KSB7XG4gICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG5cbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDcm9wcGVyKTtcblxuICAgICAgaWYgKCFlbGVtZW50IHx8ICFSRUdFWFBfVEFHX05BTUUudGVzdChlbGVtZW50LnRhZ05hbWUpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGZpcnN0IGFyZ3VtZW50IGlzIHJlcXVpcmVkIGFuZCBtdXN0IGJlIGFuIDxpbWc+IG9yIDxjYW52YXM+IGVsZW1lbnQuJyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICB0aGlzLm9wdGlvbnMgPSBhc3NpZ24oe30sIERFRkFVTFRTLCBpc1BsYWluT2JqZWN0KG9wdGlvbnMpICYmIG9wdGlvbnMpO1xuICAgICAgdGhpcy5jcm9wcGVkID0gZmFsc2U7XG4gICAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICB0aGlzLnBvaW50ZXJzID0ge307XG4gICAgICB0aGlzLnJlYWR5ID0gZmFsc2U7XG4gICAgICB0aGlzLnJlbG9hZGluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5yZXBsYWNlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5zaXplZCA9IGZhbHNlO1xuICAgICAgdGhpcy5zaXppbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhDcm9wcGVyLCBbe1xuICAgICAga2V5OiBcImluaXRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICB2YXIgZWxlbWVudCA9IHRoaXMuZWxlbWVudDtcbiAgICAgICAgdmFyIHRhZ05hbWUgPSBlbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgdmFyIHVybDtcblxuICAgICAgICBpZiAoZWxlbWVudFtOQU1FU1BBQ0VdKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZWxlbWVudFtOQU1FU1BBQ0VdID0gdGhpcztcblxuICAgICAgICBpZiAodGFnTmFtZSA9PT0gJ2ltZycpIHtcbiAgICAgICAgICB0aGlzLmlzSW1nID0gdHJ1ZTsgLy8gZS5nLjogXCJpbWcvcGljdHVyZS5qcGdcIlxuXG4gICAgICAgICAgdXJsID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3NyYycpIHx8ICcnO1xuICAgICAgICAgIHRoaXMub3JpZ2luYWxVcmwgPSB1cmw7IC8vIFN0b3Agd2hlbiBpdCdzIGEgYmxhbmsgaW1hZ2VcblxuICAgICAgICAgIGlmICghdXJsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfSAvLyBlLmcuOiBcImh0dHBzOi8vZXhhbXBsZS5jb20vaW1nL3BpY3R1cmUuanBnXCJcblxuXG4gICAgICAgICAgdXJsID0gZWxlbWVudC5zcmM7XG4gICAgICAgIH0gZWxzZSBpZiAodGFnTmFtZSA9PT0gJ2NhbnZhcycgJiYgd2luZG93LkhUTUxDYW52YXNFbGVtZW50KSB7XG4gICAgICAgICAgdXJsID0gZWxlbWVudC50b0RhdGFVUkwoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubG9hZCh1cmwpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJsb2FkXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gbG9hZCh1cmwpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICBpZiAoIXVybCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudXJsID0gdXJsO1xuICAgICAgICB0aGlzLmltYWdlRGF0YSA9IHt9O1xuICAgICAgICB2YXIgZWxlbWVudCA9IHRoaXMuZWxlbWVudCxcbiAgICAgICAgICAgIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG5cbiAgICAgICAgaWYgKCFvcHRpb25zLnJvdGF0YWJsZSAmJiAhb3B0aW9ucy5zY2FsYWJsZSkge1xuICAgICAgICAgIG9wdGlvbnMuY2hlY2tPcmllbnRhdGlvbiA9IGZhbHNlO1xuICAgICAgICB9IC8vIE9ubHkgSUUxMCsgc3VwcG9ydHMgVHlwZWQgQXJyYXlzXG5cblxuICAgICAgICBpZiAoIW9wdGlvbnMuY2hlY2tPcmllbnRhdGlvbiB8fCAhd2luZG93LkFycmF5QnVmZmVyKSB7XG4gICAgICAgICAgdGhpcy5jbG9uZSgpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSAvLyBEZXRlY3QgdGhlIG1pbWUgdHlwZSBvZiB0aGUgaW1hZ2UgZGlyZWN0bHkgaWYgaXQgaXMgYSBEYXRhIFVSTFxuXG5cbiAgICAgICAgaWYgKFJFR0VYUF9EQVRBX1VSTC50ZXN0KHVybCkpIHtcbiAgICAgICAgICAvLyBSZWFkIEFycmF5QnVmZmVyIGZyb20gRGF0YSBVUkwgb2YgSlBFRyBpbWFnZXMgZGlyZWN0bHkgZm9yIGJldHRlciBwZXJmb3JtYW5jZVxuICAgICAgICAgIGlmIChSRUdFWFBfREFUQV9VUkxfSlBFRy50ZXN0KHVybCkpIHtcbiAgICAgICAgICAgIHRoaXMucmVhZChkYXRhVVJMVG9BcnJheUJ1ZmZlcih1cmwpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gT25seSBhIEpQRUcgaW1hZ2UgbWF5IGNvbnRhaW5zIEV4aWYgT3JpZW50YXRpb24gaW5mb3JtYXRpb24sXG4gICAgICAgICAgICAvLyB0aGUgcmVzdCB0eXBlcyBvZiBEYXRhIFVSTHMgYXJlIG5vdCBuZWNlc3NhcnkgdG8gY2hlY2sgb3JpZW50YXRpb24gYXQgYWxsLlxuICAgICAgICAgICAgdGhpcy5jbG9uZSgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSAvLyAxLiBEZXRlY3QgdGhlIG1pbWUgdHlwZSBvZiB0aGUgaW1hZ2UgYnkgYSBYTUxIdHRwUmVxdWVzdC5cbiAgICAgICAgLy8gMi4gTG9hZCB0aGUgaW1hZ2UgYXMgQXJyYXlCdWZmZXIgZm9yIHJlYWRpbmcgb3JpZW50YXRpb24gaWYgaXRzIGEgSlBFRyBpbWFnZS5cblxuXG4gICAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgdmFyIGNsb25lID0gdGhpcy5jbG9uZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnJlbG9hZGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMueGhyID0geGhyOyAvLyAxLiBDcm9zcyBvcmlnaW4gcmVxdWVzdHMgYXJlIG9ubHkgc3VwcG9ydGVkIGZvciBwcm90b2NvbCBzY2hlbWVzOlxuICAgICAgICAvLyBodHRwLCBodHRwcywgZGF0YSwgY2hyb21lLCBjaHJvbWUtZXh0ZW5zaW9uLlxuICAgICAgICAvLyAyLiBBY2Nlc3MgdG8gWE1MSHR0cFJlcXVlc3QgZnJvbSBhIERhdGEgVVJMIHdpbGwgYmUgYmxvY2tlZCBieSBDT1JTIHBvbGljeVxuICAgICAgICAvLyBpbiBzb21lIGJyb3dzZXJzIGFzIElFMTEgYW5kIFNhZmFyaS5cblxuICAgICAgICB4aHIub25hYm9ydCA9IGNsb25lO1xuICAgICAgICB4aHIub25lcnJvciA9IGNsb25lO1xuICAgICAgICB4aHIub250aW1lb3V0ID0gY2xvbmU7XG5cbiAgICAgICAgeGhyLm9ucHJvZ3Jlc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gQWJvcnQgdGhlIHJlcXVlc3QgZGlyZWN0bHkgaWYgaXQgbm90IGEgSlBFRyBpbWFnZSBmb3IgYmV0dGVyIHBlcmZvcm1hbmNlXG4gICAgICAgICAgaWYgKHhoci5nZXRSZXNwb25zZUhlYWRlcignY29udGVudC10eXBlJykgIT09IE1JTUVfVFlQRV9KUEVHKSB7XG4gICAgICAgICAgICB4aHIuYWJvcnQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBfdGhpcy5yZWFkKHhoci5yZXNwb25zZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgeGhyLm9ubG9hZGVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBfdGhpcy5yZWxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICBfdGhpcy54aHIgPSBudWxsO1xuICAgICAgICB9OyAvLyBCdXN0IGNhY2hlIHdoZW4gdGhlcmUgaXMgYSBcImNyb3NzT3JpZ2luXCIgcHJvcGVydHkgdG8gYXZvaWQgYnJvd3NlciBjYWNoZSBlcnJvclxuXG5cbiAgICAgICAgaWYgKG9wdGlvbnMuY2hlY2tDcm9zc09yaWdpbiAmJiBpc0Nyb3NzT3JpZ2luVVJMKHVybCkgJiYgZWxlbWVudC5jcm9zc09yaWdpbikge1xuICAgICAgICAgIHVybCA9IGFkZFRpbWVzdGFtcCh1cmwpO1xuICAgICAgICB9XG5cbiAgICAgICAgeGhyLm9wZW4oJ0dFVCcsIHVybCk7XG4gICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSAnYXJyYXlidWZmZXInO1xuICAgICAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gZWxlbWVudC5jcm9zc09yaWdpbiA9PT0gJ3VzZS1jcmVkZW50aWFscyc7XG4gICAgICAgIHhoci5zZW5kKCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInJlYWRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZWFkKGFycmF5QnVmZmVyKSB7XG4gICAgICAgIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zLFxuICAgICAgICAgICAgaW1hZ2VEYXRhID0gdGhpcy5pbWFnZURhdGE7IC8vIFJlc2V0IHRoZSBvcmllbnRhdGlvbiB2YWx1ZSB0byBpdHMgZGVmYXVsdCB2YWx1ZSAxXG4gICAgICAgIC8vIGFzIHNvbWUgaU9TIGJyb3dzZXJzIHdpbGwgcmVuZGVyIGltYWdlIHdpdGggaXRzIG9yaWVudGF0aW9uXG5cbiAgICAgICAgdmFyIG9yaWVudGF0aW9uID0gcmVzZXRBbmRHZXRPcmllbnRhdGlvbihhcnJheUJ1ZmZlcik7XG4gICAgICAgIHZhciByb3RhdGUgPSAwO1xuICAgICAgICB2YXIgc2NhbGVYID0gMTtcbiAgICAgICAgdmFyIHNjYWxlWSA9IDE7XG5cbiAgICAgICAgaWYgKG9yaWVudGF0aW9uID4gMSkge1xuICAgICAgICAgIC8vIEdlbmVyYXRlIGEgbmV3IFVSTCB3aGljaCBoYXMgdGhlIGRlZmF1bHQgb3JpZW50YXRpb24gdmFsdWVcbiAgICAgICAgICB0aGlzLnVybCA9IGFycmF5QnVmZmVyVG9EYXRhVVJMKGFycmF5QnVmZmVyLCBNSU1FX1RZUEVfSlBFRyk7XG5cbiAgICAgICAgICB2YXIgX3BhcnNlT3JpZW50YXRpb24gPSBwYXJzZU9yaWVudGF0aW9uKG9yaWVudGF0aW9uKTtcblxuICAgICAgICAgIHJvdGF0ZSA9IF9wYXJzZU9yaWVudGF0aW9uLnJvdGF0ZTtcbiAgICAgICAgICBzY2FsZVggPSBfcGFyc2VPcmllbnRhdGlvbi5zY2FsZVg7XG4gICAgICAgICAgc2NhbGVZID0gX3BhcnNlT3JpZW50YXRpb24uc2NhbGVZO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMucm90YXRhYmxlKSB7XG4gICAgICAgICAgaW1hZ2VEYXRhLnJvdGF0ZSA9IHJvdGF0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLnNjYWxhYmxlKSB7XG4gICAgICAgICAgaW1hZ2VEYXRhLnNjYWxlWCA9IHNjYWxlWDtcbiAgICAgICAgICBpbWFnZURhdGEuc2NhbGVZID0gc2NhbGVZO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jbG9uZSgpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJjbG9uZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNsb25lKCkge1xuICAgICAgICB2YXIgZWxlbWVudCA9IHRoaXMuZWxlbWVudCxcbiAgICAgICAgICAgIHVybCA9IHRoaXMudXJsO1xuICAgICAgICB2YXIgY3Jvc3NPcmlnaW4gPSBlbGVtZW50LmNyb3NzT3JpZ2luO1xuICAgICAgICB2YXIgY3Jvc3NPcmlnaW5VcmwgPSB1cmw7XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5jaGVja0Nyb3NzT3JpZ2luICYmIGlzQ3Jvc3NPcmlnaW5VUkwodXJsKSkge1xuICAgICAgICAgIGlmICghY3Jvc3NPcmlnaW4pIHtcbiAgICAgICAgICAgIGNyb3NzT3JpZ2luID0gJ2Fub255bW91cyc7XG4gICAgICAgICAgfSAvLyBCdXN0IGNhY2hlIHdoZW4gdGhlcmUgaXMgbm90IGEgXCJjcm9zc09yaWdpblwiIHByb3BlcnR5ICgjNTE5KVxuXG5cbiAgICAgICAgICBjcm9zc09yaWdpblVybCA9IGFkZFRpbWVzdGFtcCh1cmwpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jcm9zc09yaWdpbiA9IGNyb3NzT3JpZ2luO1xuICAgICAgICB0aGlzLmNyb3NzT3JpZ2luVXJsID0gY3Jvc3NPcmlnaW5Vcmw7XG4gICAgICAgIHZhciBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXG4gICAgICAgIGlmIChjcm9zc09yaWdpbikge1xuICAgICAgICAgIGltYWdlLmNyb3NzT3JpZ2luID0gY3Jvc3NPcmlnaW47XG4gICAgICAgIH1cblxuICAgICAgICBpbWFnZS5zcmMgPSBjcm9zc09yaWdpblVybCB8fCB1cmw7XG4gICAgICAgIGltYWdlLmFsdCA9IGVsZW1lbnQuYWx0IHx8ICdUaGUgaW1hZ2UgdG8gY3JvcCc7XG4gICAgICAgIHRoaXMuaW1hZ2UgPSBpbWFnZTtcbiAgICAgICAgaW1hZ2Uub25sb2FkID0gdGhpcy5zdGFydC5iaW5kKHRoaXMpO1xuICAgICAgICBpbWFnZS5vbmVycm9yID0gdGhpcy5zdG9wLmJpbmQodGhpcyk7XG4gICAgICAgIGFkZENsYXNzKGltYWdlLCBDTEFTU19ISURFKTtcbiAgICAgICAgZWxlbWVudC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShpbWFnZSwgZWxlbWVudC5uZXh0U2libGluZyk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInN0YXJ0XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgIHZhciBpbWFnZSA9IHRoaXMuaW1hZ2U7XG4gICAgICAgIGltYWdlLm9ubG9hZCA9IG51bGw7XG4gICAgICAgIGltYWdlLm9uZXJyb3IgPSBudWxsO1xuICAgICAgICB0aGlzLnNpemluZyA9IHRydWU7IC8vIE1hdGNoIGFsbCBicm93c2VycyB0aGF0IHVzZSBXZWJLaXQgYXMgdGhlIGxheW91dCBlbmdpbmUgaW4gaU9TIGRldmljZXMsXG4gICAgICAgIC8vIHN1Y2ggYXMgU2FmYXJpIGZvciBpT1MsIENocm9tZSBmb3IgaU9TLCBhbmQgaW4tYXBwIGJyb3dzZXJzLlxuXG4gICAgICAgIHZhciBpc0lPU1dlYktpdCA9IFdJTkRPVy5uYXZpZ2F0b3IgJiYgLyg/OmlQYWR8aVBob25lfGlQb2QpLio/QXBwbGVXZWJLaXQvaS50ZXN0KFdJTkRPVy5uYXZpZ2F0b3IudXNlckFnZW50KTtcblxuICAgICAgICB2YXIgZG9uZSA9IGZ1bmN0aW9uIGRvbmUobmF0dXJhbFdpZHRoLCBuYXR1cmFsSGVpZ2h0KSB7XG4gICAgICAgICAgYXNzaWduKF90aGlzMi5pbWFnZURhdGEsIHtcbiAgICAgICAgICAgIG5hdHVyYWxXaWR0aDogbmF0dXJhbFdpZHRoLFxuICAgICAgICAgICAgbmF0dXJhbEhlaWdodDogbmF0dXJhbEhlaWdodCxcbiAgICAgICAgICAgIGFzcGVjdFJhdGlvOiBuYXR1cmFsV2lkdGggLyBuYXR1cmFsSGVpZ2h0XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgX3RoaXMyLmluaXRpYWxJbWFnZURhdGEgPSBhc3NpZ24oe30sIF90aGlzMi5pbWFnZURhdGEpO1xuICAgICAgICAgIF90aGlzMi5zaXppbmcgPSBmYWxzZTtcbiAgICAgICAgICBfdGhpczIuc2l6ZWQgPSB0cnVlO1xuXG4gICAgICAgICAgX3RoaXMyLmJ1aWxkKCk7XG4gICAgICAgIH07IC8vIE1vc3QgbW9kZXJuIGJyb3dzZXJzIChleGNlcHRzIGlPUyBXZWJLaXQpXG5cblxuICAgICAgICBpZiAoaW1hZ2UubmF0dXJhbFdpZHRoICYmICFpc0lPU1dlYktpdCkge1xuICAgICAgICAgIGRvbmUoaW1hZ2UubmF0dXJhbFdpZHRoLCBpbWFnZS5uYXR1cmFsSGVpZ2h0KTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc2l6aW5nSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgdmFyIGJvZHkgPSBkb2N1bWVudC5ib2R5IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgdGhpcy5zaXppbmdJbWFnZSA9IHNpemluZ0ltYWdlO1xuXG4gICAgICAgIHNpemluZ0ltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBkb25lKHNpemluZ0ltYWdlLndpZHRoLCBzaXppbmdJbWFnZS5oZWlnaHQpO1xuXG4gICAgICAgICAgaWYgKCFpc0lPU1dlYktpdCkge1xuICAgICAgICAgICAgYm9keS5yZW1vdmVDaGlsZChzaXppbmdJbWFnZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHNpemluZ0ltYWdlLnNyYyA9IGltYWdlLnNyYzsgLy8gaU9TIFdlYktpdCB3aWxsIGNvbnZlcnQgdGhlIGltYWdlIGF1dG9tYXRpY2FsbHlcbiAgICAgICAgLy8gd2l0aCBpdHMgb3JpZW50YXRpb24gb25jZSBhcHBlbmQgaXQgaW50byBET00gKCMyNzkpXG5cbiAgICAgICAgaWYgKCFpc0lPU1dlYktpdCkge1xuICAgICAgICAgIHNpemluZ0ltYWdlLnN0eWxlLmNzc1RleHQgPSAnbGVmdDowOycgKyAnbWF4LWhlaWdodDpub25lIWltcG9ydGFudDsnICsgJ21heC13aWR0aDpub25lIWltcG9ydGFudDsnICsgJ21pbi1oZWlnaHQ6MCFpbXBvcnRhbnQ7JyArICdtaW4td2lkdGg6MCFpbXBvcnRhbnQ7JyArICdvcGFjaXR5OjA7JyArICdwb3NpdGlvbjphYnNvbHV0ZTsnICsgJ3RvcDowOycgKyAnei1pbmRleDotMTsnO1xuICAgICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoc2l6aW5nSW1hZ2UpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInN0b3BcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgICB2YXIgaW1hZ2UgPSB0aGlzLmltYWdlO1xuICAgICAgICBpbWFnZS5vbmxvYWQgPSBudWxsO1xuICAgICAgICBpbWFnZS5vbmVycm9yID0gbnVsbDtcbiAgICAgICAgaW1hZ2UucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChpbWFnZSk7XG4gICAgICAgIHRoaXMuaW1hZ2UgPSBudWxsO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJidWlsZFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGJ1aWxkKCkge1xuICAgICAgICBpZiAoIXRoaXMuc2l6ZWQgfHwgdGhpcy5yZWFkeSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBlbGVtZW50ID0gdGhpcy5lbGVtZW50LFxuICAgICAgICAgICAgb3B0aW9ucyA9IHRoaXMub3B0aW9ucyxcbiAgICAgICAgICAgIGltYWdlID0gdGhpcy5pbWFnZTsgLy8gQ3JlYXRlIGNyb3BwZXIgZWxlbWVudHNcblxuICAgICAgICB2YXIgY29udGFpbmVyID0gZWxlbWVudC5wYXJlbnROb2RlO1xuICAgICAgICB2YXIgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGVtcGxhdGUuaW5uZXJIVE1MID0gVEVNUExBVEU7XG4gICAgICAgIHZhciBjcm9wcGVyID0gdGVtcGxhdGUucXVlcnlTZWxlY3RvcihcIi5cIi5jb25jYXQoTkFNRVNQQUNFLCBcIi1jb250YWluZXJcIikpO1xuICAgICAgICB2YXIgY2FudmFzID0gY3JvcHBlci5xdWVyeVNlbGVjdG9yKFwiLlwiLmNvbmNhdChOQU1FU1BBQ0UsIFwiLWNhbnZhc1wiKSk7XG4gICAgICAgIHZhciBkcmFnQm94ID0gY3JvcHBlci5xdWVyeVNlbGVjdG9yKFwiLlwiLmNvbmNhdChOQU1FU1BBQ0UsIFwiLWRyYWctYm94XCIpKTtcbiAgICAgICAgdmFyIGNyb3BCb3ggPSBjcm9wcGVyLnF1ZXJ5U2VsZWN0b3IoXCIuXCIuY29uY2F0KE5BTUVTUEFDRSwgXCItY3JvcC1ib3hcIikpO1xuICAgICAgICB2YXIgZmFjZSA9IGNyb3BCb3gucXVlcnlTZWxlY3RvcihcIi5cIi5jb25jYXQoTkFNRVNQQUNFLCBcIi1mYWNlXCIpKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG4gICAgICAgIHRoaXMuY3JvcHBlciA9IGNyb3BwZXI7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmRyYWdCb3ggPSBkcmFnQm94O1xuICAgICAgICB0aGlzLmNyb3BCb3ggPSBjcm9wQm94O1xuICAgICAgICB0aGlzLnZpZXdCb3ggPSBjcm9wcGVyLnF1ZXJ5U2VsZWN0b3IoXCIuXCIuY29uY2F0KE5BTUVTUEFDRSwgXCItdmlldy1ib3hcIikpO1xuICAgICAgICB0aGlzLmZhY2UgPSBmYWNlO1xuICAgICAgICBjYW52YXMuYXBwZW5kQ2hpbGQoaW1hZ2UpOyAvLyBIaWRlIHRoZSBvcmlnaW5hbCBpbWFnZVxuXG4gICAgICAgIGFkZENsYXNzKGVsZW1lbnQsIENMQVNTX0hJRERFTik7IC8vIEluc2VydHMgdGhlIGNyb3BwZXIgYWZ0ZXIgdG8gdGhlIGN1cnJlbnQgaW1hZ2VcblxuICAgICAgICBjb250YWluZXIuaW5zZXJ0QmVmb3JlKGNyb3BwZXIsIGVsZW1lbnQubmV4dFNpYmxpbmcpOyAvLyBTaG93IHRoZSBpbWFnZSBpZiBpcyBoaWRkZW5cblxuICAgICAgICBpZiAoIXRoaXMuaXNJbWcpIHtcbiAgICAgICAgICByZW1vdmVDbGFzcyhpbWFnZSwgQ0xBU1NfSElERSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmluaXRQcmV2aWV3KCk7XG4gICAgICAgIHRoaXMuYmluZCgpO1xuICAgICAgICBvcHRpb25zLmluaXRpYWxBc3BlY3RSYXRpbyA9IE1hdGgubWF4KDAsIG9wdGlvbnMuaW5pdGlhbEFzcGVjdFJhdGlvKSB8fCBOYU47XG4gICAgICAgIG9wdGlvbnMuYXNwZWN0UmF0aW8gPSBNYXRoLm1heCgwLCBvcHRpb25zLmFzcGVjdFJhdGlvKSB8fCBOYU47XG4gICAgICAgIG9wdGlvbnMudmlld01vZGUgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigzLCBNYXRoLnJvdW5kKG9wdGlvbnMudmlld01vZGUpKSkgfHwgMDtcbiAgICAgICAgYWRkQ2xhc3MoY3JvcEJveCwgQ0xBU1NfSElEREVOKTtcblxuICAgICAgICBpZiAoIW9wdGlvbnMuZ3VpZGVzKSB7XG4gICAgICAgICAgYWRkQ2xhc3MoY3JvcEJveC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiXCIuY29uY2F0KE5BTUVTUEFDRSwgXCItZGFzaGVkXCIpKSwgQ0xBU1NfSElEREVOKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghb3B0aW9ucy5jZW50ZXIpIHtcbiAgICAgICAgICBhZGRDbGFzcyhjcm9wQm94LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJcIi5jb25jYXQoTkFNRVNQQUNFLCBcIi1jZW50ZXJcIikpLCBDTEFTU19ISURERU4pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuYmFja2dyb3VuZCkge1xuICAgICAgICAgIGFkZENsYXNzKGNyb3BwZXIsIFwiXCIuY29uY2F0KE5BTUVTUEFDRSwgXCItYmdcIikpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFvcHRpb25zLmhpZ2hsaWdodCkge1xuICAgICAgICAgIGFkZENsYXNzKGZhY2UsIENMQVNTX0lOVklTSUJMRSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy5jcm9wQm94TW92YWJsZSkge1xuICAgICAgICAgIGFkZENsYXNzKGZhY2UsIENMQVNTX01PVkUpO1xuICAgICAgICAgIHNldERhdGEoZmFjZSwgREFUQV9BQ1RJT04sIEFDVElPTl9BTEwpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFvcHRpb25zLmNyb3BCb3hSZXNpemFibGUpIHtcbiAgICAgICAgICBhZGRDbGFzcyhjcm9wQm94LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJcIi5jb25jYXQoTkFNRVNQQUNFLCBcIi1saW5lXCIpKSwgQ0xBU1NfSElEREVOKTtcbiAgICAgICAgICBhZGRDbGFzcyhjcm9wQm94LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJcIi5jb25jYXQoTkFNRVNQQUNFLCBcIi1wb2ludFwiKSksIENMQVNTX0hJRERFTik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICB0aGlzLnJlYWR5ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zZXREcmFnTW9kZShvcHRpb25zLmRyYWdNb2RlKTtcblxuICAgICAgICBpZiAob3B0aW9ucy5hdXRvQ3JvcCkge1xuICAgICAgICAgIHRoaXMuY3JvcCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXREYXRhKG9wdGlvbnMuZGF0YSk7XG5cbiAgICAgICAgaWYgKGlzRnVuY3Rpb24ob3B0aW9ucy5yZWFkeSkpIHtcbiAgICAgICAgICBhZGRMaXN0ZW5lcihlbGVtZW50LCBFVkVOVF9SRUFEWSwgb3B0aW9ucy5yZWFkeSwge1xuICAgICAgICAgICAgb25jZTogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZGlzcGF0Y2hFdmVudChlbGVtZW50LCBFVkVOVF9SRUFEWSk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInVuYnVpbGRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiB1bmJ1aWxkKCkge1xuICAgICAgICBpZiAoIXRoaXMucmVhZHkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJlYWR5ID0gZmFsc2U7XG4gICAgICAgIHRoaXMudW5iaW5kKCk7XG4gICAgICAgIHRoaXMucmVzZXRQcmV2aWV3KCk7XG4gICAgICAgIHRoaXMuY3JvcHBlci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuY3JvcHBlcik7XG4gICAgICAgIHJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudCwgQ0xBU1NfSElEREVOKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwidW5jcmVhdGVcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiB1bmNyZWF0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMucmVhZHkpIHtcbiAgICAgICAgICB0aGlzLnVuYnVpbGQoKTtcbiAgICAgICAgICB0aGlzLnJlYWR5ID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5jcm9wcGVkID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zaXppbmcpIHtcbiAgICAgICAgICB0aGlzLnNpemluZ0ltYWdlLm9ubG9hZCA9IG51bGw7XG4gICAgICAgICAgdGhpcy5zaXppbmcgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLnNpemVkID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5yZWxvYWRpbmcpIHtcbiAgICAgICAgICB0aGlzLnhoci5vbmFib3J0ID0gbnVsbDtcbiAgICAgICAgICB0aGlzLnhoci5hYm9ydCgpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaW1hZ2UpIHtcbiAgICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLyoqXG4gICAgICAgKiBHZXQgdGhlIG5vIGNvbmZsaWN0IGNyb3BwZXIgY2xhc3MuXG4gICAgICAgKiBAcmV0dXJucyB7Q3JvcHBlcn0gVGhlIGNyb3BwZXIgY2xhc3MuXG4gICAgICAgKi9cblxuICAgIH1dLCBbe1xuICAgICAga2V5OiBcIm5vQ29uZmxpY3RcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBub0NvbmZsaWN0KCkge1xuICAgICAgICB3aW5kb3cuQ3JvcHBlciA9IEFub3RoZXJDcm9wcGVyO1xuICAgICAgICByZXR1cm4gQ3JvcHBlcjtcbiAgICAgIH1cbiAgICAgIC8qKlxuICAgICAgICogQ2hhbmdlIHRoZSBkZWZhdWx0IG9wdGlvbnMuXG4gICAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIFRoZSBuZXcgZGVmYXVsdCBvcHRpb25zLlxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwic2V0RGVmYXVsdHNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXREZWZhdWx0cyhvcHRpb25zKSB7XG4gICAgICAgIGFzc2lnbihERUZBVUxUUywgaXNQbGFpbk9iamVjdChvcHRpb25zKSAmJiBvcHRpb25zKTtcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gQ3JvcHBlcjtcbiAgfSgpO1xuXG4gIGFzc2lnbihDcm9wcGVyLnByb3RvdHlwZSwgcmVuZGVyLCBwcmV2aWV3LCBldmVudHMsIGhhbmRsZXJzLCBjaGFuZ2UsIG1ldGhvZHMpO1xuXG4gIHJldHVybiBDcm9wcGVyO1xuXG59KSkpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==