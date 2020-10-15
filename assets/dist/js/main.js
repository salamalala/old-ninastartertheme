"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/******/
(function (modules) {
  // webpackBootstrap

  /******/
  // The module cache

  /******/
  var installedModules = {};
  /******/

  /******/
  // The require function

  /******/

  function __webpack_require__(moduleId) {
    /******/

    /******/
    // Check if module is in cache

    /******/
    if (installedModules[moduleId]) {
      /******/
      return installedModules[moduleId].exports;
      /******/
    }
    /******/
    // Create a new module (and put it into the cache)

    /******/


    var module = installedModules[moduleId] = {
      /******/
      i: moduleId,

      /******/
      l: false,

      /******/
      exports: {}
      /******/

    };
    /******/

    /******/
    // Execute the module function

    /******/

    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/

    /******/
    // Flag the module as loaded

    /******/

    module.l = true;
    /******/

    /******/
    // Return the exports of the module

    /******/

    return module.exports;
    /******/
  }
  /******/

  /******/

  /******/
  // expose the modules object (__webpack_modules__)

  /******/


  __webpack_require__.m = modules;
  /******/

  /******/
  // expose the module cache

  /******/

  __webpack_require__.c = installedModules;
  /******/

  /******/
  // define getter function for harmony exports

  /******/

  __webpack_require__.d = function (exports, name, getter) {
    /******/
    if (!__webpack_require__.o(exports, name)) {
      /******/
      Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter
      });
      /******/
    }
    /******/

  };
  /******/

  /******/
  // define __esModule on exports

  /******/


  __webpack_require__.r = function (exports) {
    /******/
    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/
      Object.defineProperty(exports, Symbol.toStringTag, {
        value: 'Module'
      });
      /******/
    }
    /******/


    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    /******/
  };
  /******/

  /******/
  // create a fake namespace object

  /******/
  // mode & 1: value is a module id, require it

  /******/
  // mode & 2: merge all properties of value into the ns

  /******/
  // mode & 4: return value when already ns object

  /******/
  // mode & 8|1: behave like require

  /******/


  __webpack_require__.t = function (value, mode) {
    /******/
    if (mode & 1) value = __webpack_require__(value);
    /******/

    if (mode & 8) return value;
    /******/

    if (mode & 4 && _typeof(value) === 'object' && value && value.__esModule) return value;
    /******/

    var ns = Object.create(null);
    /******/

    __webpack_require__.r(ns);
    /******/


    Object.defineProperty(ns, 'default', {
      enumerable: true,
      value: value
    });
    /******/

    if (mode & 2 && typeof value != 'string') for (var key in value) {
      __webpack_require__.d(ns, key, function (key) {
        return value[key];
      }.bind(null, key));
    }
    /******/

    return ns;
    /******/
  };
  /******/

  /******/
  // getDefaultExport function for compatibility with non-harmony modules

  /******/


  __webpack_require__.n = function (module) {
    /******/
    var getter = module && module.__esModule ?
    /******/
    function getDefault() {
      return module['default'];
    } :
    /******/
    function getModuleExports() {
      return module;
    };
    /******/

    __webpack_require__.d(getter, 'a', getter);
    /******/


    return getter;
    /******/
  };
  /******/

  /******/
  // Object.prototype.hasOwnProperty.call

  /******/


  __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/

  /******/
  // __webpack_public_path__

  /******/


  __webpack_require__.p = "";
  /******/

  /******/

  /******/
  // Load entry module and return exports

  /******/

  return __webpack_require__(__webpack_require__.s = 0);
  /******/
})(
/************************************************************************/

/******/
[
/* 0 */

/***/
function (module, __webpack_exports__, __webpack_require__) {
  "use strict";

  __webpack_require__.r(__webpack_exports__);
  /* harmony import */


  var object_fit_images__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
  /* harmony import */


  var object_fit_images__WEBPACK_IMPORTED_MODULE_0___default =
  /*#__PURE__*/
  __webpack_require__.n(object_fit_images__WEBPACK_IMPORTED_MODULE_0__);
  /* harmony import */


  var css_vars_ponyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);

  document.addEventListener('DOMContentLoaded', function () {
    //fallback for ie and edge:
    Object(css_vars_ponyfill__WEBPACK_IMPORTED_MODULE_1__["default"])();
    object_fit_images__WEBPACK_IMPORTED_MODULE_0___default()();
  }, false);
  /***/
},
/* 1 */

/***/
function (module, exports, __webpack_require__) {
  "use strict";
  /*! npm.im/object-fit-images 3.2.4 */

  var OFI = 'bfred-it:object-fit-images';
  var propRegex = /(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g;
  var testImg = typeof Image === 'undefined' ? {
    style: {
      'object-position': 1
    }
  } : new Image();
  var supportsObjectFit = 'object-fit' in testImg.style;
  var supportsObjectPosition = 'object-position' in testImg.style;
  var supportsOFI = 'background-size' in testImg.style;
  var supportsCurrentSrc = typeof testImg.currentSrc === 'string';
  var nativeGetAttribute = testImg.getAttribute;
  var nativeSetAttribute = testImg.setAttribute;
  var autoModeEnabled = false;

  function createPlaceholder(w, h) {
    return "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" + w + "' height='" + h + "'%3E%3C/svg%3E";
  }

  function polyfillCurrentSrc(el) {
    if (el.srcset && !supportsCurrentSrc && window.picturefill) {
      var pf = window.picturefill._; // parse srcset with picturefill where currentSrc isn't available

      if (!el[pf.ns] || !el[pf.ns].evaled) {
        // force synchronous srcset parsing
        pf.fillImg(el, {
          reselect: true
        });
      }

      if (!el[pf.ns].curSrc) {
        // force picturefill to parse srcset
        el[pf.ns].supported = false;
        pf.fillImg(el, {
          reselect: true
        });
      } // retrieve parsed currentSrc, if any


      el.currentSrc = el[pf.ns].curSrc || el.src;
    }
  }

  function getStyle(el) {
    var style = getComputedStyle(el).fontFamily;
    var parsed;
    var props = {};

    while ((parsed = propRegex.exec(style)) !== null) {
      props[parsed[1]] = parsed[2];
    }

    return props;
  }

  function setPlaceholder(img, width, height) {
    // Default: fill width, no height
    var placeholder = createPlaceholder(width || 1, height || 0); // Only set placeholder if it's different

    if (nativeGetAttribute.call(img, 'src') !== placeholder) {
      nativeSetAttribute.call(img, 'src', placeholder);
    }
  }

  function onImageReady(img, callback) {
    // naturalWidth is only available when the image headers are loaded,
    // this loop will poll it every 100ms.
    if (img.naturalWidth) {
      callback(img);
    } else {
      setTimeout(onImageReady, 100, img, callback);
    }
  }

  function fixOne(el) {
    var style = getStyle(el);
    var ofi = el[OFI];
    style['object-fit'] = style['object-fit'] || 'fill'; // default value
    // Avoid running where unnecessary, unless OFI had already done its deed

    if (!ofi.img) {
      // fill is the default behavior so no action is necessary
      if (style['object-fit'] === 'fill') {
        return;
      } // Where object-fit is supported and object-position isn't (Safari < 10)


      if (!ofi.skipTest && // unless user wants to apply regardless of browser support
      supportsObjectFit && // if browser already supports object-fit
      !style['object-position'] // unless object-position is used
      ) {
          return;
        }
    } // keep a clone in memory while resetting the original to a blank


    if (!ofi.img) {
      ofi.img = new Image(el.width, el.height);
      ofi.img.srcset = nativeGetAttribute.call(el, "data-ofi-srcset") || el.srcset;
      ofi.img.src = nativeGetAttribute.call(el, "data-ofi-src") || el.src; // preserve for any future cloneNode calls
      // https://github.com/bfred-it/object-fit-images/issues/53

      nativeSetAttribute.call(el, "data-ofi-src", el.src);

      if (el.srcset) {
        nativeSetAttribute.call(el, "data-ofi-srcset", el.srcset);
      }

      setPlaceholder(el, el.naturalWidth || el.width, el.naturalHeight || el.height); // remove srcset because it overrides src

      if (el.srcset) {
        el.srcset = '';
      }

      try {
        keepSrcUsable(el);
      } catch (err) {
        if (window.console) {
          console.warn('https://bit.ly/ofi-old-browser');
        }
      }
    }

    polyfillCurrentSrc(ofi.img);
    el.style.backgroundImage = "url(\"" + (ofi.img.currentSrc || ofi.img.src).replace(/"/g, '\\"') + "\")";
    el.style.backgroundPosition = style['object-position'] || 'center';
    el.style.backgroundRepeat = 'no-repeat';
    el.style.backgroundOrigin = 'content-box';

    if (/scale-down/.test(style['object-fit'])) {
      onImageReady(ofi.img, function () {
        if (ofi.img.naturalWidth > el.width || ofi.img.naturalHeight > el.height) {
          el.style.backgroundSize = 'contain';
        } else {
          el.style.backgroundSize = 'auto';
        }
      });
    } else {
      el.style.backgroundSize = style['object-fit'].replace('none', 'auto').replace('fill', '100% 100%');
    }

    onImageReady(ofi.img, function (img) {
      setPlaceholder(el, img.naturalWidth, img.naturalHeight);
    });
  }

  function keepSrcUsable(el) {
    var descriptors = {
      get: function get(prop) {
        return el[OFI].img[prop ? prop : 'src'];
      },
      set: function set(value, prop) {
        el[OFI].img[prop ? prop : 'src'] = value;
        nativeSetAttribute.call(el, "data-ofi-" + prop, value); // preserve for any future cloneNode

        fixOne(el);
        return value;
      }
    };
    Object.defineProperty(el, 'src', descriptors);
    Object.defineProperty(el, 'currentSrc', {
      get: function get() {
        return descriptors.get('currentSrc');
      }
    });
    Object.defineProperty(el, 'srcset', {
      get: function get() {
        return descriptors.get('srcset');
      },
      set: function set(ss) {
        return descriptors.set(ss, 'srcset');
      }
    });
  }

  function hijackAttributes() {
    function getOfiImageMaybe(el, name) {
      return el[OFI] && el[OFI].img && (name === 'src' || name === 'srcset') ? el[OFI].img : el;
    }

    if (!supportsObjectPosition) {
      HTMLImageElement.prototype.getAttribute = function (name) {
        return nativeGetAttribute.call(getOfiImageMaybe(this, name), name);
      };

      HTMLImageElement.prototype.setAttribute = function (name, value) {
        return nativeSetAttribute.call(getOfiImageMaybe(this, name), name, String(value));
      };
    }
  }

  function fix(imgs, opts) {
    var startAutoMode = !autoModeEnabled && !imgs;
    opts = opts || {};
    imgs = imgs || 'img';

    if (supportsObjectPosition && !opts.skipTest || !supportsOFI) {
      return false;
    } // use imgs as a selector or just select all images


    if (imgs === 'img') {
      imgs = document.getElementsByTagName('img');
    } else if (typeof imgs === 'string') {
      imgs = document.querySelectorAll(imgs);
    } else if (!('length' in imgs)) {
      imgs = [imgs];
    } // apply fix to all


    for (var i = 0; i < imgs.length; i++) {
      imgs[i][OFI] = imgs[i][OFI] || {
        skipTest: opts.skipTest
      };
      fixOne(imgs[i]);
    }

    if (startAutoMode) {
      document.body.addEventListener('load', function (e) {
        if (e.target.tagName === 'IMG') {
          fix(e.target, {
            skipTest: opts.skipTest
          });
        }
      }, true);
      autoModeEnabled = true;
      imgs = 'img'; // reset to a generic selector for watchMQ
    } // if requested, watch media queries for object-fit change


    if (opts.watchMQ) {
      window.addEventListener('resize', fix.bind(null, imgs, {
        skipTest: opts.skipTest
      }));
    }
  }

  fix.supportsObjectFit = supportsObjectFit;
  fix.supportsObjectPosition = supportsObjectPosition;
  hijackAttributes();
  module.exports = fix;
  /***/
},
/* 2 */

/***/
function (module, __webpack_exports__, __webpack_require__) {
  "use strict";

  __webpack_require__.r(__webpack_exports__);
  /*!
   * css-vars-ponyfill
   * v1.17.2
   * https://github.com/jhildenbiddle/css-vars-ponyfill
   * (c) 2018-2019 John Hildenbiddle <http://hildenbiddle.com>
   * MIT license
   */


  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    }
  }

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }
  /*!
   * get-css-data
   * v1.6.3
   * https://github.com/jhildenbiddle/get-css-data
   * (c) 2018-2019 John Hildenbiddle <http://hildenbiddle.com>
   * MIT license
   */


  function getUrls(urls) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var settings = {
      mimeType: options.mimeType || null,
      onBeforeSend: options.onBeforeSend || Function.prototype,
      onSuccess: options.onSuccess || Function.prototype,
      onError: options.onError || Function.prototype,
      onComplete: options.onComplete || Function.prototype
    };
    var urlArray = Array.isArray(urls) ? urls : [urls];
    var urlQueue = Array.apply(null, Array(urlArray.length)).map(function (x) {
      return null;
    });

    function isValidCss() {
      var cssText = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      var isHTML = cssText.trim().charAt(0) === "<";
      return !isHTML;
    }

    function onError(xhr, urlIndex) {
      settings.onError(xhr, urlArray[urlIndex], urlIndex);
    }

    function onSuccess(responseText, urlIndex) {
      var returnVal = settings.onSuccess(responseText, urlArray[urlIndex], urlIndex);
      responseText = returnVal === false ? "" : returnVal || responseText;
      urlQueue[urlIndex] = responseText;

      if (urlQueue.indexOf(null) === -1) {
        settings.onComplete(urlQueue);
      }
    }

    var parser = document.createElement("a");
    urlArray.forEach(function (url, i) {
      parser.setAttribute("href", url);
      parser.href = String(parser.href);
      var isIElte9 = Boolean(document.all && !window.atob);
      var isIElte9CORS = isIElte9 && parser.host.split(":")[0] !== location.host.split(":")[0];

      if (isIElte9CORS) {
        var isSameProtocol = parser.protocol === location.protocol;

        if (isSameProtocol) {
          var xdr = new XDomainRequest();
          xdr.open("GET", url);
          xdr.timeout = 0;
          xdr.onprogress = Function.prototype;
          xdr.ontimeout = Function.prototype;

          xdr.onload = function () {
            if (isValidCss(xdr.responseText)) {
              onSuccess(xdr.responseText, i);
            } else {
              onError(xdr, i);
            }
          };

          xdr.onerror = function (err) {
            onError(xdr, i);
          };

          setTimeout(function () {
            xdr.send();
          }, 0);
        } else {
          console.warn("Internet Explorer 9 Cross-Origin (CORS) requests must use the same protocol (".concat(url, ")"));
          onError(null, i);
        }
      } else {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url);

        if (settings.mimeType && xhr.overrideMimeType) {
          xhr.overrideMimeType(settings.mimeType);
        }

        settings.onBeforeSend(xhr, url, i);

        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            if (xhr.status === 200 && isValidCss(xhr.responseText)) {
              onSuccess(xhr.responseText, i);
            } else {
              onError(xhr, i);
            }
          }
        };

        xhr.send();
      }
    });
  }
  /**
   * Gets CSS data from <style> and <link> nodes (including @imports), then
   * returns data in order processed by DOM. Allows specifying nodes to
   * include/exclude and filtering CSS data using RegEx.
   *
   * @preserve
   * @param {object}   [options] The options object
   * @param {object}   [options.rootElement=document] Root element to traverse for
   *                   <link> and <style> nodes.
   * @param {string}   [options.include] CSS selector matching <link> and <style>
   *                   nodes to include
   * @param {string}   [options.exclude] CSS selector matching <link> and <style>
   *                   nodes to exclude
   * @param {object}   [options.filter] Regular expression used to filter node CSS
   *                   data. Each block of CSS data is tested against the filter,
   *                   and only matching data is included.
   * @param {object}   [options.useCSSOM=false] Determines if CSS data will be
   *                   collected from a stylesheet's runtime values instead of its
   *                   text content. This is required to get accurate CSS data
   *                   when a stylesheet has been modified using the deleteRule()
   *                   or insertRule() methods because these modifications will
   *                   not be reflected in the stylesheet's text content.
   * @param {function} [options.onBeforeSend] Callback before XHR is sent. Passes
   *                   1) the XHR object, 2) source node reference, and 3) the
   *                   source URL as arguments.
   * @param {function} [options.onSuccess] Callback on each CSS node read. Passes
   *                   1) CSS text, 2) source node reference, and 3) the source
   *                   URL as arguments.
   * @param {function} [options.onError] Callback on each error. Passes 1) the XHR
   *                   object for inspection, 2) soure node reference, and 3) the
   *                   source URL that failed (either a <link> href or an @import)
   *                   as arguments
   * @param {function} [options.onComplete] Callback after all nodes have been
   *                   processed. Passes 1) concatenated CSS text, 2) an array of
   *                   CSS text in DOM order, and 3) an array of nodes in DOM
   *                   order as arguments.
   *
   * @example
   *
   *   getCssData({
   *     rootElement: document,
   *     include    : 'style,link[rel="stylesheet"]',
   *     exclude    : '[href="skip.css"]',
   *     filter     : /red/,
   *     useCSSOM   : false,
   *     onBeforeSend(xhr, node, url) {
   *       // ...
   *     }
   *     onSuccess(cssText, node, url) {
   *       // ...
   *     }
   *     onError(xhr, node, url) {
   *       // ...
   *     },
   *     onComplete(cssText, cssArray, nodeArray) {
   *       // ...
   *     }
   *   });
   */


  function getCssData(options) {
    var regex = {
      cssComments: /\/\*[\s\S]+?\*\//g,
      cssImports: /(?:@import\s*)(?:url\(\s*)?(?:['"])([^'"]*)(?:['"])(?:\s*\))?(?:[^;]*;)/g
    };
    var settings = {
      rootElement: options.rootElement || document,
      include: options.include || 'style,link[rel="stylesheet"]',
      exclude: options.exclude || null,
      filter: options.filter || null,
      useCSSOM: options.useCSSOM || false,
      onBeforeSend: options.onBeforeSend || Function.prototype,
      onSuccess: options.onSuccess || Function.prototype,
      onError: options.onError || Function.prototype,
      onComplete: options.onComplete || Function.prototype
    };
    var sourceNodes = Array.apply(null, settings.rootElement.querySelectorAll(settings.include)).filter(function (node) {
      return !matchesSelector(node, settings.exclude);
    });
    var cssArray = Array.apply(null, Array(sourceNodes.length)).map(function (x) {
      return null;
    });

    function handleComplete() {
      var isComplete = cssArray.indexOf(null) === -1;

      if (isComplete) {
        var cssText = cssArray.join("");
        settings.onComplete(cssText, cssArray, sourceNodes);
      }
    }

    function handleSuccess(cssText, cssIndex, node, sourceUrl) {
      var returnVal = settings.onSuccess(cssText, node, sourceUrl);
      cssText = returnVal !== undefined && Boolean(returnVal) === false ? "" : returnVal || cssText;
      resolveImports(cssText, node, sourceUrl, function (resolvedCssText, errorData) {
        if (cssArray[cssIndex] === null) {
          errorData.forEach(function (data) {
            return settings.onError(data.xhr, node, data.url);
          });

          if (!settings.filter || settings.filter.test(resolvedCssText)) {
            cssArray[cssIndex] = resolvedCssText;
          } else {
            cssArray[cssIndex] = "";
          }

          handleComplete();
        }
      });
    }

    function parseImportData(cssText, baseUrl) {
      var ignoreRules = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      var importData = {};
      importData.rules = (cssText.replace(regex.cssComments, "").match(regex.cssImports) || []).filter(function (rule) {
        return ignoreRules.indexOf(rule) === -1;
      });
      importData.urls = importData.rules.map(function (rule) {
        return rule.replace(regex.cssImports, "$1");
      });
      importData.absoluteUrls = importData.urls.map(function (url) {
        return getFullUrl(url, baseUrl);
      });
      importData.absoluteRules = importData.rules.map(function (rule, i) {
        var oldUrl = importData.urls[i];
        var newUrl = getFullUrl(importData.absoluteUrls[i], baseUrl);
        return rule.replace(oldUrl, newUrl);
      });
      return importData;
    }

    function resolveImports(cssText, node, baseUrl, callbackFn) {
      var __errorData = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];

      var __errorRules = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : [];

      var importData = parseImportData(cssText, baseUrl, __errorRules);

      if (importData.rules.length) {
        getUrls(importData.absoluteUrls, {
          onBeforeSend: function onBeforeSend(xhr, url, urlIndex) {
            settings.onBeforeSend(xhr, node, url);
          },
          onSuccess: function onSuccess(cssText, url, urlIndex) {
            var returnVal = settings.onSuccess(cssText, node, url);
            cssText = returnVal === false ? "" : returnVal || cssText;
            var responseImportData = parseImportData(cssText, url, __errorRules);
            responseImportData.rules.forEach(function (rule, i) {
              cssText = cssText.replace(rule, responseImportData.absoluteRules[i]);
            });
            return cssText;
          },
          onError: function onError(xhr, url, urlIndex) {
            __errorData.push({
              xhr: xhr,
              url: url
            });

            __errorRules.push(importData.rules[urlIndex]);

            resolveImports(cssText, node, baseUrl, callbackFn, __errorData, __errorRules);
          },
          onComplete: function onComplete(responseArray) {
            responseArray.forEach(function (importText, i) {
              cssText = cssText.replace(importData.rules[i], importText);
            });
            resolveImports(cssText, node, baseUrl, callbackFn, __errorData, __errorRules);
          }
        });
      } else {
        callbackFn(cssText, __errorData);
      }
    }

    if (sourceNodes.length) {
      sourceNodes.forEach(function (node, i) {
        var linkHref = node.getAttribute("href");
        var linkRel = node.getAttribute("rel");
        var isLink = node.nodeName === "LINK" && linkHref && linkRel && linkRel.toLowerCase() === "stylesheet";
        var isStyle = node.nodeName === "STYLE";

        if (isLink) {
          getUrls(linkHref, {
            mimeType: "text/css",
            onBeforeSend: function onBeforeSend(xhr, url, urlIndex) {
              settings.onBeforeSend(xhr, node, url);
            },
            onSuccess: function onSuccess(cssText, url, urlIndex) {
              var sourceUrl = getFullUrl(linkHref, location.href);
              handleSuccess(cssText, i, node, sourceUrl);
            },
            onError: function onError(xhr, url, urlIndex) {
              cssArray[i] = "";
              settings.onError(xhr, node, url);
              handleComplete();
            }
          });
        } else if (isStyle) {
          var cssText = node.textContent;

          if (settings.useCSSOM) {
            cssText = Array.apply(null, node.sheet.cssRules).map(function (rule) {
              return rule.cssText;
            }).join("");
          }

          handleSuccess(cssText, i, node, location.href);
        } else {
          cssArray[i] = "";
          handleComplete();
        }
      });
    } else {
      settings.onComplete("", []);
    }
  }

  function getFullUrl(url) {
    var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : location.href;
    var d = document.implementation.createHTMLDocument("");
    var b = d.createElement("base");
    var a = d.createElement("a");
    d.head.appendChild(b);
    d.body.appendChild(a);
    b.href = base;
    a.href = url;
    return a.href;
  }

  function matchesSelector(elm, selector) {
    var matches = elm.matches || elm.matchesSelector || elm.webkitMatchesSelector || elm.mozMatchesSelector || elm.msMatchesSelector || elm.oMatchesSelector;
    return matches.call(elm, selector);
  }

  var balancedMatch = balanced;

  function balanced(a, b, str) {
    if (a instanceof RegExp) a = maybeMatch(a, str);
    if (b instanceof RegExp) b = maybeMatch(b, str);
    var r = range(a, b, str);
    return r && {
      start: r[0],
      end: r[1],
      pre: str.slice(0, r[0]),
      body: str.slice(r[0] + a.length, r[1]),
      post: str.slice(r[1] + b.length)
    };
  }

  function maybeMatch(reg, str) {
    var m = str.match(reg);
    return m ? m[0] : null;
  }

  balanced.range = range;

  function range(a, b, str) {
    var begs, beg, left, right, result;
    var ai = str.indexOf(a);
    var bi = str.indexOf(b, ai + 1);
    var i = ai;

    if (ai >= 0 && bi > 0) {
      begs = [];
      left = str.length;

      while (i >= 0 && !result) {
        if (i == ai) {
          begs.push(i);
          ai = str.indexOf(a, i + 1);
        } else if (begs.length == 1) {
          result = [begs.pop(), bi];
        } else {
          beg = begs.pop();

          if (beg < left) {
            left = beg;
            right = bi;
          }

          bi = str.indexOf(b, i + 1);
        }

        i = ai < bi && ai >= 0 ? ai : bi;
      }

      if (begs.length) {
        result = [left, right];
      }
    }

    return result;
  }

  function parseCss(css) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var defaults = {
      onlyVars: false,
      removeComments: false
    };

    var settings = _extends({}, defaults, options);

    var errors = [];

    function error(msg) {
      throw new Error("CSS parse error: ".concat(msg));
    }

    function match(re) {
      var m = re.exec(css);

      if (m) {
        css = css.slice(m[0].length);
        return m;
      }
    }

    function open() {
      return match(/^{\s*/);
    }

    function close() {
      return match(/^}/);
    }

    function whitespace() {
      match(/^\s*/);
    }

    function comment() {
      whitespace();

      if (css[0] !== "/" || css[1] !== "*") {
        return;
      }

      var i = 2;

      while (css[i] && (css[i] !== "*" || css[i + 1] !== "/")) {
        i++;
      }

      if (!css[i]) {
        return error("end of comment is missing");
      }

      var str = css.slice(2, i);
      css = css.slice(i + 2);
      return {
        type: "comment",
        comment: str
      };
    }

    function comments() {
      var cmnts = [];
      var c;

      while (c = comment()) {
        cmnts.push(c);
      }

      return settings.removeComments ? [] : cmnts;
    }

    function selector() {
      whitespace();

      while (css[0] === "}") {
        error("extra closing bracket");
      }

      var m = match(/^(("(?:\\"|[^"])*"|'(?:\\'|[^'])*'|[^{])+)/);

      if (m) {
        return m[0].trim().replace(/\/\*([^*]|[\r\n]|(\*+([^*\/]|[\r\n])))*\*\/+/g, "").replace(/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'/g, function (m) {
          return m.replace(/,/g, "‌");
        }).split(/\s*(?![^(]*\)),\s*/).map(function (s) {
          return s.replace(/\u200C/g, ",");
        });
      }
    }

    function declaration() {
      match(/^([;\s]*)+/);
      var comment_regexp = /\/\*[^*]*\*+([^\/*][^*]*\*+)*\//g;
      var prop = match(/^(\*?[-#\/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/);

      if (!prop) {
        return;
      }

      prop = prop[0].trim();

      if (!match(/^:\s*/)) {
        return error("property missing ':'");
      }

      var val = match(/^((?:\/\*.*?\*\/|'(?:\\'|.)*?'|"(?:\\"|.)*?"|\((\s*'(?:\\'|.)*?'|"(?:\\"|.)*?"|[^)]*?)\s*\)|[^};])+)/);
      var ret = {
        type: "declaration",
        property: prop.replace(comment_regexp, ""),
        value: val ? val[0].replace(comment_regexp, "").trim() : ""
      };
      match(/^[;\s]*/);
      return ret;
    }

    function declarations() {
      if (!open()) {
        return error("missing '{'");
      }

      var d;
      var decls = comments();

      while (d = declaration()) {
        decls.push(d);
        decls = decls.concat(comments());
      }

      if (!close()) {
        return error("missing '}'");
      }

      return decls;
    }

    function keyframe() {
      whitespace();
      var vals = [];
      var m;

      while (m = match(/^((\d+\.\d+|\.\d+|\d+)%?|[a-z]+)\s*/)) {
        vals.push(m[1]);
        match(/^,\s*/);
      }

      if (vals.length) {
        return {
          type: "keyframe",
          values: vals,
          declarations: declarations()
        };
      }
    }

    function at_keyframes() {
      var m = match(/^@([-\w]+)?keyframes\s*/);

      if (!m) {
        return;
      }

      var vendor = m[1];
      m = match(/^([-\w]+)\s*/);

      if (!m) {
        return error("@keyframes missing name");
      }

      var name = m[1];

      if (!open()) {
        return error("@keyframes missing '{'");
      }

      var frame;
      var frames = comments();

      while (frame = keyframe()) {
        frames.push(frame);
        frames = frames.concat(comments());
      }

      if (!close()) {
        return error("@keyframes missing '}'");
      }

      return {
        type: "keyframes",
        name: name,
        vendor: vendor,
        keyframes: frames
      };
    }

    function at_page() {
      var m = match(/^@page */);

      if (m) {
        var sel = selector() || [];
        return {
          type: "page",
          selectors: sel,
          declarations: declarations()
        };
      }
    }

    function at_fontface() {
      var m = match(/^@font-face\s*/);

      if (m) {
        return {
          type: "font-face",
          declarations: declarations()
        };
      }
    }

    function at_supports() {
      var m = match(/^@supports *([^{]+)/);

      if (m) {
        return {
          type: "supports",
          supports: m[1].trim(),
          rules: rules()
        };
      }
    }

    function at_host() {
      var m = match(/^@host\s*/);

      if (m) {
        return {
          type: "host",
          rules: rules()
        };
      }
    }

    function at_media() {
      var m = match(/^@media *([^{]+)/);

      if (m) {
        return {
          type: "media",
          media: m[1].trim(),
          rules: rules()
        };
      }
    }

    function at_custom_m() {
      var m = match(/^@custom-media\s+(--[^\s]+)\s*([^{;]+);/);

      if (m) {
        return {
          type: "custom-media",
          name: m[1].trim(),
          media: m[2].trim()
        };
      }
    }

    function at_document() {
      var m = match(/^@([-\w]+)?document *([^{]+)/);

      if (m) {
        return {
          type: "document",
          document: m[2].trim(),
          vendor: m[1] ? m[1].trim() : null,
          rules: rules()
        };
      }
    }

    function at_x() {
      var m = match(/^@(import|charset|namespace)\s*([^;]+);/);

      if (m) {
        return {
          type: m[1],
          name: m[2].trim()
        };
      }
    }

    function at_rule() {
      whitespace();

      if (css[0] === "@") {
        var ret = at_keyframes() || at_supports() || at_host() || at_media() || at_custom_m() || at_page() || at_document() || at_fontface() || at_x();

        if (ret && settings.onlyVars) {
          var hasVarFunc = false;

          if (ret.declarations) {
            hasVarFunc = ret.declarations.some(function (decl) {
              return /var\(/.test(decl.value);
            });
          } else {
            var arr = ret.keyframes || ret.rules || [];
            hasVarFunc = arr.some(function (obj) {
              return (obj.declarations || []).some(function (decl) {
                return /var\(/.test(decl.value);
              });
            });
          }

          return hasVarFunc ? ret : {};
        }

        return ret;
      }
    }

    function rule() {
      if (settings.onlyVars) {
        var balancedMatch$$1 = balancedMatch("{", "}", css);

        if (balancedMatch$$1) {
          var hasVarDecl = balancedMatch$$1.pre.indexOf(":root") !== -1 && /--\S*\s*:/.test(balancedMatch$$1.body);
          var hasVarFunc = /var\(/.test(balancedMatch$$1.body);

          if (!hasVarDecl && !hasVarFunc) {
            css = css.slice(balancedMatch$$1.end + 1);
            return {};
          }
        }
      }

      var sel = selector() || [];
      var decls = !settings.onlyVars ? declarations() : declarations().filter(function (decl) {
        var hasVarDecl = sel.some(function (s) {
          return s.indexOf(":root") !== -1;
        }) && /^--\S/.test(decl.property);
        var hasVarFunc = /var\(/.test(decl.value);
        return hasVarDecl || hasVarFunc;
      });

      if (!sel.length) {
        error("selector missing");
      }

      return {
        type: "rule",
        selectors: sel,
        declarations: decls
      };
    }

    function rules(core) {
      if (!core && !open()) {
        return error("missing '{'");
      }

      var node;
      var rules = comments();

      while (css.length && (core || css[0] !== "}") && (node = at_rule() || rule())) {
        if (node.type) {
          rules.push(node);
        }

        rules = rules.concat(comments());
      }

      if (!core && !close()) {
        return error("missing '}'");
      }

      return rules;
    }

    return {
      type: "stylesheet",
      stylesheet: {
        rules: rules(true),
        errors: errors
      }
    };
  }

  function stringifyCss(tree) {
    var delim = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    var cb = arguments.length > 2 ? arguments[2] : undefined;
    var renderMethods = {
      charset: function charset(node) {
        return "@charset " + node.name + ";";
      },
      comment: function comment(node) {
        return node.comment.indexOf("__CSSVARSPONYFILL") === 0 ? "/*" + node.comment + "*/" : "";
      },
      "custom-media": function customMedia(node) {
        return "@custom-media " + node.name + " " + node.media + ";";
      },
      declaration: function declaration(node) {
        return node.property + ":" + node.value + ";";
      },
      document: function document(node) {
        return "@" + (node.vendor || "") + "document " + node.document + "{" + visit(node.rules) + "}";
      },
      "font-face": function fontFace(node) {
        return "@font-face" + "{" + visit(node.declarations) + "}";
      },
      host: function host(node) {
        return "@host" + "{" + visit(node.rules) + "}";
      },
      "import": function _import(node) {
        return "@import " + node.name + ";";
      },
      keyframe: function keyframe(node) {
        return node.values.join(",") + "{" + visit(node.declarations) + "}";
      },
      keyframes: function keyframes(node) {
        return "@" + (node.vendor || "") + "keyframes " + node.name + "{" + visit(node.keyframes) + "}";
      },
      media: function media(node) {
        return "@media " + node.media + "{" + visit(node.rules) + "}";
      },
      namespace: function namespace(node) {
        return "@namespace " + node.name + ";";
      },
      page: function page(node) {
        return "@page " + (node.selectors.length ? node.selectors.join(", ") : "") + "{" + visit(node.declarations) + "}";
      },
      rule: function rule(node) {
        var decls = node.declarations;

        if (decls.length) {
          return node.selectors.join(",") + "{" + visit(decls) + "}";
        }
      },
      supports: function supports(node) {
        return "@supports " + node.supports + "{" + visit(node.rules) + "}";
      }
    };

    function visit(nodes) {
      var buf = "";

      for (var i = 0; i < nodes.length; i++) {
        var n = nodes[i];

        if (cb) {
          cb(n);
        }

        var txt = renderMethods[n.type](n);

        if (txt) {
          buf += txt;

          if (txt.length && n.selectors) {
            buf += delim;
          }
        }
      }

      return buf;
    }

    return visit(tree.stylesheet.rules);
  }

  function walkCss(node, fn) {
    node.rules.forEach(function (rule) {
      if (rule.rules) {
        walkCss(rule, fn);
        return;
      }

      if (rule.keyframes) {
        rule.keyframes.forEach(function (keyframe) {
          if (keyframe.type === "keyframe") {
            fn(keyframe.declarations, rule);
          }
        });
        return;
      }

      if (!rule.declarations) {
        return;
      }

      fn(rule.declarations, node);
    });
  }

  var VAR_PROP_IDENTIFIER = "--";
  var VAR_FUNC_IDENTIFIER = "var";
  var variableStore = {
    dom: {},
    temp: {},
    user: {}
  };

  function transformVars(cssText) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var defaults = {
      fixNestedCalc: true,
      onlyVars: false,
      persist: false,
      preserve: false,
      variables: {},
      onWarning: function onWarning() {}
    };

    var settings = _extends({}, defaults, options);

    var map = settings.persist ? variableStore.dom : variableStore.temp = JSON.parse(JSON.stringify(variableStore.dom));
    var cssTree = parseCss(cssText, {
      onlyVars: settings.onlyVars
    });
    cssTree.stylesheet.rules.forEach(function (rule) {
      var varNameIndices = [];

      if (rule.type !== "rule") {
        return;
      }

      if (rule.selectors.length !== 1 || rule.selectors[0] !== ":root") {
        return;
      }

      rule.declarations.forEach(function (decl, i) {
        var prop = decl.property;
        var value = decl.value;

        if (prop && prop.indexOf(VAR_PROP_IDENTIFIER) === 0) {
          map[prop] = value;
          varNameIndices.push(i);
        }
      });

      if (!settings.preserve) {
        for (var i = varNameIndices.length - 1; i >= 0; i--) {
          rule.declarations.splice(varNameIndices[i], 1);
        }
      }
    });
    Object.keys(variableStore.user).forEach(function (key) {
      map[key] = variableStore.user[key];
    });

    if (Object.keys(settings.variables).length) {
      var newRule = {
        declarations: [],
        selectors: [":root"],
        type: "rule"
      };
      Object.keys(settings.variables).forEach(function (key) {
        var prop = "--".concat(key.replace(/^-+/, ""));
        var value = settings.variables[key];

        if (settings.persist) {
          variableStore.user[prop] = value;
        }

        if (map[prop] !== value) {
          map[prop] = value;
          newRule.declarations.push({
            type: "declaration",
            property: prop,
            value: value
          });
        }
      });

      if (settings.preserve && newRule.declarations.length) {
        cssTree.stylesheet.rules.push(newRule);
      }
    }

    walkCss(cssTree.stylesheet, function (declarations, node) {
      var decl;
      var resolvedValue;
      var value;

      for (var i = 0; i < declarations.length; i++) {
        decl = declarations[i];
        value = decl.value;

        if (decl.type !== "declaration") {
          continue;
        }

        if (!value || value.indexOf(VAR_FUNC_IDENTIFIER + "(") === -1) {
          continue;
        }

        resolvedValue = resolveValue(value, map, settings);

        if (resolvedValue !== decl.value) {
          if (!settings.preserve) {
            decl.value = resolvedValue;
          } else {
            declarations.splice(i, 0, {
              type: decl.type,
              property: decl.property,
              value: resolvedValue
            });
            i++;
          }
        }
      }
    });

    if (settings.fixNestedCalc) {
      fixNestedCalc(cssTree.stylesheet.rules);
    }

    return stringifyCss(cssTree);
  }

  function fixNestedCalc(rules) {
    var reCalcExp = /(-[a-z]+-)?calc\(/;
    rules.forEach(function (rule) {
      if (rule.declarations) {
        rule.declarations.forEach(function (decl) {
          var oldValue = decl.value;
          var newValue = "";

          while (reCalcExp.test(oldValue)) {
            var rootCalc = balancedMatch("calc(", ")", oldValue || "");
            oldValue = oldValue.slice(rootCalc.end);

            while (reCalcExp.test(rootCalc.body)) {
              var nestedCalc = balancedMatch(reCalcExp, ")", rootCalc.body);
              rootCalc.body = "".concat(nestedCalc.pre, "(").concat(nestedCalc.body, ")").concat(nestedCalc.post);
            }

            newValue += "".concat(rootCalc.pre, "calc(").concat(rootCalc.body);
            newValue += !reCalcExp.test(oldValue) ? ")".concat(rootCalc.post) : "";
          }

          decl.value = newValue || decl.value;
        });
      }
    });
  }

  function resolveValue(value, map) {
    var settings = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    var __recursiveFallback = arguments.length > 3 ? arguments[3] : undefined;

    if (value.indexOf("var(") === -1) {
      return value;
    }

    var valueData = balancedMatch("(", ")", value);

    function resolveFunc(value) {
      var name = value.split(",")[0].replace(/[\s\n\t]/g, "");
      var fallback = (value.match(/(?:\s*,\s*){1}(.*)?/) || [])[1];
      var match = map.hasOwnProperty(name) ? String(map[name]) : undefined;
      var replacement = match || (fallback ? String(fallback) : undefined);
      var unresolvedFallback = __recursiveFallback || value;

      if (!match) {
        settings.onWarning('variable "'.concat(name, '" is undefined'));
      }

      if (replacement && replacement !== "undefined" && replacement.length > 0) {
        return resolveValue(replacement, map, settings, unresolvedFallback);
      } else {
        return "var(".concat(unresolvedFallback, ")");
      }
    }

    if (!valueData) {
      if (value.indexOf("var(") !== -1) {
        settings.onWarning('missing closing ")" in the value "'.concat(value, '"'));
      }

      return value;
    } else if (valueData.pre.slice(-3) === "var") {
      var isEmptyVarFunc = valueData.body.trim().length === 0;

      if (isEmptyVarFunc) {
        settings.onWarning("var() must contain a non-whitespace string");
        return value;
      } else {
        return valueData.pre.slice(0, -3) + resolveFunc(valueData.body) + resolveValue(valueData.post, map, settings);
      }
    } else {
      return valueData.pre + "(".concat(resolveValue(valueData.body, map, settings), ")") + resolveValue(valueData.post, map, settings);
    }
  }

  var name = "css-vars-ponyfill";
  var isBrowser = typeof window !== "undefined";
  var isNativeSupport = isBrowser && window.CSS && window.CSS.supports && window.CSS.supports("(--a: 0)");
  var consoleMsgPrefix = "cssVars(): ";
  var defaults = {
    rootElement: isBrowser ? document : null,
    shadowDOM: false,
    include: "style,link[rel=stylesheet]",
    exclude: "",
    variables: {},
    fixNestedCalc: true,
    onlyLegacy: true,
    onlyVars: false,
    preserve: false,
    silent: false,
    updateDOM: true,
    updateURLs: true,
    watch: null,
    onBeforeSend: function onBeforeSend() {},
    onSuccess: function onSuccess() {},
    onWarning: function onWarning() {},
    onError: function onError() {},
    onComplete: function onComplete() {}
  };
  var regex = {
    cssComments: /\/\*[\s\S]+?\*\//g,
    cssKeyframes: /@(?:-\w*-)?keyframes/,
    cssRootRules: /(?::root\s*{\s*[^}]*})/g,
    cssUrls: /url\((?!['"]?(?:data|http|\/\/):)['"]?([^'")]*)['"]?\)/g,
    cssVars: /(?:(?::root\s*{\s*[^;]*;*\s*)|(?:var\(\s*))(--[^:)]+)(?:\s*[:)])/
  };
  var cssVarsObserver = null;
  var debounceTimer = null;
  var isShadowDOMReady = false;
  /**
   * Fetches, parses, and transforms CSS custom properties from specified
   * <style> and <link> elements into static values, then appends a new <style>
   * element with static values to the DOM to provide CSS custom property
   * compatibility for legacy browsers. Also provides a single interface for
   * live updates of runtime values in both modern and legacy browsers.
   *
   * @preserve
   * @param {object}   [options] Options object
   * @param {object}   [options.rootElement=document] Root element to traverse for
   *                   <link> and <style> nodes.
   * @param {boolean}  [options.shadowDOM=false] Determines if shadow DOM <link>
   *                   and <style> nodes will be processed.
   * @param {string}   [options.include="style,link[rel=stylesheet]"] CSS selector
   *                   matching <link re="stylesheet"> and <style> nodes to
   *                   process
   * @param {string}   [options.exclude] CSS selector matching <link
   *                   rel="stylehseet"> and <style> nodes to exclude from those
   *                   matches by options.include
   * @param {object}   [options.variables] A map of custom property name/value
   *                   pairs. Property names can omit or include the leading
   *                   double-hyphen (—), and values specified will override
   *                   previous values.
   * @param {boolean}  [options.fixNestedCalc=true] Removes nested 'calc' keywords
   *                   for legacy browser compatibility.
   * @param {boolean}  [options.onlyLegacy=true] Determines if the ponyfill will
   *                   only generate legacy-compatible CSS in browsers that lack
   *                   native support (i.e., legacy browsers)
   * @param {boolean}  [options.onlyVars=false] Determines if CSS rulesets and
   *                   declarations without a custom property value should be
   *                   removed from the ponyfill-generated CSS
   * @param {boolean}  [options.preserve=false] Determines if the original CSS
   *                   custom property declaration will be retained in the
   *                   ponyfill-generated CSS.
   * @param {boolean}  [options.silent=false] Determines if warning and error
   *                   messages will be displayed on the console
   * @param {boolean}  [options.updateDOM=true] Determines if the ponyfill will
   *                   update the DOM after processing CSS custom properties
   * @param {boolean}  [options.updateURLs=true] Determines if the ponyfill will
   *                   convert relative url() paths to absolute urls.
   * @param {boolean}  [options.watch=false] Determines if a MutationObserver will
   *                   be created that will execute the ponyfill when a <link> or
   *                   <style> DOM mutation is observed.
   * @param {function} [options.onBeforeSend] Callback before XHR is sent. Passes
   *                   1) the XHR object, 2) source node reference, and 3) the
   *                   source URL as arguments.
   * @param {function} [options.onSuccess] Callback after CSS data has been
   *                   collected from each node and before CSS custom properties
   *                   have been transformed. Allows modifying the CSS data before
   *                   it is transformed by returning any string value (or false
   *                   to skip). Passes 1) CSS text, 2) source node reference, and
   *                   3) the source URL as arguments.
   * @param {function} [options.onWarning] Callback after each CSS parsing warning
   *                   has occurred. Passes 1) a warning message as an argument.
   * @param {function} [options.onError] Callback after a CSS parsing error has
   *                   occurred or an XHR request has failed. Passes 1) an error
   *                   message, and 2) source node reference, 3) xhr, and 4 url as
   *                   arguments.
   * @param {function} [options.onComplete] Callback after all CSS has been
   *                   processed, legacy-compatible CSS has been generated, and
   *                   (optionally) the DOM has been updated. Passes 1) a CSS
   *                   string with CSS variable values resolved, 2) a reference to
   *                   the appended <style> node, 3) an object containing all
   *                   custom properies names and values, and 4) the ponyfill
   *                   execution time in milliseconds.
   *
   * @example
   *
   *   cssVars({
   *     rootElement  : document,
   *     shadowDOM    : false,
   *     include      : 'style,link[rel="stylesheet"]',
   *     exclude      : '',
   *     variables    : {},
   *     fixNestedCalc: true,
   *     onlyLegacy   : true,
   *     onlyVars     : false,
   *     preserve     : false,
   *     silent       : false,
   *     updateDOM    : true,
   *     updateURLs   : true,
   *     watch        : false,
   *     onBeforeSend(xhr, node, url) {},
   *     onSuccess(cssText, node, url) {},
   *     onWarning(message) {},
   *     onError(message, node, xhr, url) {},
   *     onComplete(cssText, styleNode, cssVariables, benchmark) {}
   *   });
   */

  function cssVars() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var settings = _extends({}, defaults, options);

    var styleNodeId = name;
    settings.exclude = "#".concat(styleNodeId) + (settings.exclude ? ",".concat(settings.exclude) : "");
    settings._benchmark = !settings._benchmark ? getTimeStamp() : settings._benchmark;

    function handleError(message, sourceNode, xhr, url) {
      if (!settings.silent) {
        console.error("".concat(consoleMsgPrefix).concat(message, "\n"), sourceNode);
      }

      settings.onError(message, sourceNode, xhr, url);
    }

    function handleWarning(message) {
      if (!settings.silent) {
        console.warn("".concat(consoleMsgPrefix).concat(message));
      }

      settings.onWarning(message);
    }

    if (!isBrowser) {
      return;
    }

    if (settings.watch === false && cssVarsObserver) {
      cssVarsObserver.disconnect();
    }

    if (settings.watch) {
      addMutationObserver(settings, styleNodeId);
      cssVarsDebounced(settings);
    } else if (document.readyState !== "loading") {
      var isShadowElm = settings.shadowDOM || settings.rootElement.shadowRoot || settings.rootElement.host;

      if (isNativeSupport && settings.onlyLegacy) {
        if (settings.updateDOM) {
          var targetElm = settings.rootElement.host || (settings.rootElement === document ? document.documentElement : settings.rootElement);
          Object.keys(settings.variables).forEach(function (key) {
            var prop = "--".concat(key.replace(/^-+/, ""));
            var value = settings.variables[key];
            targetElm.style.setProperty(prop, value);
          });
        }
      } else if (isShadowElm && !isShadowDOMReady) {
        getCssData({
          rootElement: defaults.rootElement,
          include: defaults.include,
          exclude: settings.exclude,
          onSuccess: function onSuccess(cssText, node, url) {
            var cssRootDecls = (cssText.match(regex.cssRootRules) || []).join("");
            return cssRootDecls || false;
          },
          onComplete: function onComplete(cssText, cssArray, nodeArray) {
            transformVars(cssText, {
              persist: true
            });
            isShadowDOMReady = true;
            cssVars(settings);
          }
        });
      } else {
        getCssData({
          rootElement: settings.rootElement,
          include: settings.include,
          exclude: settings.exclude,
          filter: settings.onlyVars ? regex.cssVars : null,
          onBeforeSend: settings.onBeforeSend,
          onSuccess: function onSuccess(cssText, node, url) {
            var returnVal = settings.onSuccess(cssText, node, url);
            cssText = returnVal !== undefined && Boolean(returnVal) === false ? "" : returnVal || cssText;
            node.setAttribute("data-cssvars", "");

            if (settings.updateURLs) {
              var cssUrls = cssText.replace(regex.cssComments, "").match(regex.cssUrls) || [];
              cssUrls.forEach(function (cssUrl) {
                var oldUrl = cssUrl.replace(regex.cssUrls, "$1");
                var newUrl = getFullUrl$1(oldUrl, url);
                cssText = cssText.replace(cssUrl, cssUrl.replace(oldUrl, newUrl));
              });
            }

            return cssText;
          },
          onError: function onError(xhr, node, url) {
            var responseUrl = xhr.responseURL || getFullUrl$1(url, location.href);
            var statusText = xhr.statusText ? "(".concat(xhr.statusText, ")") : "Unspecified Error" + (xhr.status === 0 ? " (possibly CORS related)" : "");
            var errorMsg = "CSS XHR Error: ".concat(responseUrl, " ").concat(xhr.status, " ").concat(statusText);
            handleError(errorMsg, node, xhr, responseUrl);
          },
          onComplete: function onComplete(cssText, cssArray, nodeArray) {
            var cssMarker = /\/\*__CSSVARSPONYFILL-(\d+)__\*\//g;
            var cssSettings = JSON.stringify({
              include: settings.include,
              exclude: settings.exclude,
              variables: settings.variables,
              fixNestedCalc: settings.fixNestedCalc,
              onlyVars: settings.onlyVars,
              preserve: settings.preserve,
              silent: settings.silent,
              updateURLs: settings.updateURLs
            });
            var styleNode = settings.rootElement.querySelector("#".concat(styleNodeId)) || document.createElement("style");
            var prevData = styleNode.__cssVars || {};
            var isSameData = prevData.cssText === cssText && prevData.settings === cssSettings;
            var hasKeyframesWithVars;

            if (isSameData) {
              cssText = styleNode.textContent;

              if (!settings.silent) {
                console.info("".concat(consoleMsgPrefix, "No changes"), styleNode);
              }
            } else {
              styleNode.__cssVars = {
                cssText: cssText,
                settings: cssSettings
              };
              cssText = cssArray.map(function (css, i) {
                return regex.cssVars.test(css) ? css : "/*__CSSVARSPONYFILL-".concat(i, "__*/");
              }).join("");

              try {
                cssText = transformVars(cssText, {
                  fixNestedCalc: settings.fixNestedCalc,
                  onlyVars: settings.onlyVars,
                  persist: settings.updateDOM,
                  preserve: settings.preserve,
                  variables: settings.variables,
                  onWarning: handleWarning
                });
                hasKeyframesWithVars = regex.cssKeyframes.test(cssText);
                cssText = cssText.replace(cssMarker, function (match, group1) {
                  return cssArray[group1];
                });
              } catch (err) {
                var errorThrown = false;
                cssArray.forEach(function (cssText, i) {
                  try {
                    cssText = transformVars(cssText, settings);
                  } catch (err) {
                    var errorNode = nodeArray[i - 0];
                    errorThrown = true;
                    handleError(err.message, errorNode);
                  }
                });

                if (!errorThrown) {
                  handleError(err.message || err);
                }
              }
            }

            if (settings.shadowDOM) {
              var elms = [settings.rootElement].concat(_toConsumableArray(settings.rootElement.querySelectorAll("*")));

              for (var i = 0, elm; elm = elms[i]; ++i) {
                if (elm.shadowRoot && elm.shadowRoot.querySelector("style")) {
                  var shadowSettings = _extends({}, settings, {
                    rootElement: elm.shadowRoot,
                    variables: variableStore.dom
                  });

                  cssVars(shadowSettings);
                }
              }
            }

            if (!isSameData && nodeArray && nodeArray.length) {
              var cssNodes = settings.rootElement.querySelectorAll("link[data-cssvars],style[data-cssvars]") || settings.rootElement.querySelectorAll('link[rel+="stylesheet"],style');
              var lastNode = cssNodes ? cssNodes[cssNodes.length - 1] : null;

              if (lastNode) {
                lastNode.parentNode.insertBefore(styleNode, lastNode.nextSibling);
              } else {
                var targetNode = settings.rootElement.head || settings.rootElement.body || settings.rootElement;
                targetNode.appendChild(styleNode);
              }

              if (settings.updateDOM) {
                styleNode.setAttribute("id", styleNodeId);
                styleNode.textContent = cssText;

                if (hasKeyframesWithVars) {
                  fixKeyframes(settings.rootElement);
                }
              }

              settings.onComplete(cssText, styleNode, JSON.parse(JSON.stringify(settings.updateDOM ? variableStore.dom : variableStore.temp)), getTimeStamp() - settings._benchmark);
            }
          }
        });
      }
    } else {
      document.addEventListener("DOMContentLoaded", function init(evt) {
        cssVars(options);
        document.removeEventListener("DOMContentLoaded", init);
      });
    }
  }

  function cssVarsDebounced(settings) {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(function () {
      settings._benchmark = null;
      cssVars(settings);
    }, 100);
  }

  function addMutationObserver(settings, ignoreId) {
    if (!window.MutationObserver) {
      return;
    }

    var isLink = function isLink(node) {
      return node.tagName === "LINK" && (node.getAttribute("rel") || "").indexOf("stylesheet") !== -1;
    };

    var isStyle = function isStyle(node) {
      return node.tagName === "STYLE" && (ignoreId ? node.id !== ignoreId : true);
    };

    if (cssVarsObserver) {
      cssVarsObserver.disconnect();
    }

    settings.watch = defaults.watch;
    cssVarsObserver = new MutationObserver(function (mutations) {
      var hasCSSMutation = mutations.some(function (mutation) {
        var isCSSMutation = false;

        if (mutation.type === "attributes") {
          isCSSMutation = isLink(mutation.target) || isStyle(mutation.target);
        } else if (mutation.type === "childList") {
          var addedNodes = Array.apply(null, mutation.addedNodes);
          var removedNodes = Array.apply(null, mutation.removedNodes);
          isCSSMutation = [].concat(addedNodes, removedNodes).some(function (node) {
            var isValidLink = isLink(node) && !node.disabled;
            var isValidStyle = isStyle(node) && regex.cssVars.test(node.textContent);
            return isValidLink || isValidStyle;
          });
        }

        return isCSSMutation;
      });

      if (hasCSSMutation) {
        cssVarsDebounced(settings);
      }
    });
    cssVarsObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["disabled", "href"],
      childList: true,
      subtree: true
    });
  }

  function fixKeyframes(rootElement) {
    var animationNameProp = ["animation-name", "-moz-animation-name", "-webkit-animation-name"].filter(function (prop) {
      return getComputedStyle(document.body)[prop];
    })[0];

    if (animationNameProp) {
      var allNodes = rootElement.getElementsByTagName("*");
      var keyframeNodes = [];
      var nameMarker = "__CSSVARSPONYFILL-KEYFRAMES__";

      for (var i = 0, len = allNodes.length; i < len; i++) {
        var node = allNodes[i];
        var animationName = getComputedStyle(node)[animationNameProp];

        if (animationName !== "none") {
          node.style[animationNameProp] += nameMarker;
          keyframeNodes.push(node);
        }
      }

      void document.body.offsetHeight;

      for (var _i = 0, _len = keyframeNodes.length; _i < _len; _i++) {
        var nodeStyle = keyframeNodes[_i].style;
        nodeStyle[animationNameProp] = nodeStyle[animationNameProp].replace(nameMarker, "");
      }
    }
  }

  function getFullUrl$1(url) {
    var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : location.href;
    var d = document.implementation.createHTMLDocument("");
    var b = d.createElement("base");
    var a = d.createElement("a");
    d.head.appendChild(b);
    d.body.appendChild(a);
    b.href = base;
    a.href = url;
    return a.href;
  }

  function getTimeStamp() {
    return isBrowser && (window.performance || {}).now ? window.performance.now() : new Date().getTime();
  }
  /* harmony default export */


  __webpack_exports__["default"] = cssVars;
  /***/
}
/******/
]);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImYzMzUwODQ5YmJjMTY5Y2UxNzdmLmpzIl0sIm5hbWVzIjpbIm1vZHVsZXMiLCJpbnN0YWxsZWRNb2R1bGVzIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiZXhwb3J0cyIsIm1vZHVsZSIsImkiLCJsIiwiY2FsbCIsIm0iLCJjIiwiZCIsIm5hbWUiLCJnZXR0ZXIiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiciIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIiwidmFsdWUiLCJ0IiwibW9kZSIsIl9fZXNNb2R1bGUiLCJucyIsImNyZWF0ZSIsImtleSIsImJpbmQiLCJuIiwiZ2V0RGVmYXVsdCIsImdldE1vZHVsZUV4cG9ydHMiLCJvYmplY3QiLCJwcm9wZXJ0eSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwicCIsInMiLCJfX3dlYnBhY2tfZXhwb3J0c19fIiwib2JqZWN0X2ZpdF9pbWFnZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyIsIm9iamVjdF9maXRfaW1hZ2VzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19fZGVmYXVsdCIsImNzc192YXJzX3BvbnlmaWxsX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX18iLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJPRkkiLCJwcm9wUmVnZXgiLCJ0ZXN0SW1nIiwiSW1hZ2UiLCJzdHlsZSIsInN1cHBvcnRzT2JqZWN0Rml0Iiwic3VwcG9ydHNPYmplY3RQb3NpdGlvbiIsInN1cHBvcnRzT0ZJIiwic3VwcG9ydHNDdXJyZW50U3JjIiwiY3VycmVudFNyYyIsIm5hdGl2ZUdldEF0dHJpYnV0ZSIsImdldEF0dHJpYnV0ZSIsIm5hdGl2ZVNldEF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsImF1dG9Nb2RlRW5hYmxlZCIsImNyZWF0ZVBsYWNlaG9sZGVyIiwidyIsImgiLCJwb2x5ZmlsbEN1cnJlbnRTcmMiLCJlbCIsInNyY3NldCIsIndpbmRvdyIsInBpY3R1cmVmaWxsIiwicGYiLCJfIiwiZXZhbGVkIiwiZmlsbEltZyIsInJlc2VsZWN0IiwiY3VyU3JjIiwic3VwcG9ydGVkIiwic3JjIiwiZ2V0U3R5bGUiLCJnZXRDb21wdXRlZFN0eWxlIiwiZm9udEZhbWlseSIsInBhcnNlZCIsInByb3BzIiwiZXhlYyIsInNldFBsYWNlaG9sZGVyIiwiaW1nIiwid2lkdGgiLCJoZWlnaHQiLCJwbGFjZWhvbGRlciIsIm9uSW1hZ2VSZWFkeSIsImNhbGxiYWNrIiwibmF0dXJhbFdpZHRoIiwic2V0VGltZW91dCIsImZpeE9uZSIsIm9maSIsInNraXBUZXN0IiwibmF0dXJhbEhlaWdodCIsImtlZXBTcmNVc2FibGUiLCJlcnIiLCJjb25zb2xlIiwid2FybiIsImJhY2tncm91bmRJbWFnZSIsInJlcGxhY2UiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJiYWNrZ3JvdW5kUmVwZWF0IiwiYmFja2dyb3VuZE9yaWdpbiIsInRlc3QiLCJiYWNrZ3JvdW5kU2l6ZSIsImRlc2NyaXB0b3JzIiwicHJvcCIsInNldCIsInNzIiwiaGlqYWNrQXR0cmlidXRlcyIsImdldE9maUltYWdlTWF5YmUiLCJIVE1MSW1hZ2VFbGVtZW50IiwiU3RyaW5nIiwiZml4IiwiaW1ncyIsIm9wdHMiLCJzdGFydEF1dG9Nb2RlIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwiYm9keSIsImUiLCJ0YXJnZXQiLCJ0YWdOYW1lIiwid2F0Y2hNUSIsIl9leHRlbmRzIiwiYXNzaWduIiwiYXJndW1lbnRzIiwic291cmNlIiwiYXBwbHkiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJhcnIiLCJfYXJyYXlXaXRob3V0SG9sZXMiLCJfaXRlcmFibGVUb0FycmF5IiwiX25vbkl0ZXJhYmxlU3ByZWFkIiwiQXJyYXkiLCJpc0FycmF5IiwiYXJyMiIsIml0ZXIiLCJpdGVyYXRvciIsInRvU3RyaW5nIiwiZnJvbSIsIlR5cGVFcnJvciIsImdldFVybHMiLCJ1cmxzIiwib3B0aW9ucyIsInVuZGVmaW5lZCIsInNldHRpbmdzIiwibWltZVR5cGUiLCJvbkJlZm9yZVNlbmQiLCJGdW5jdGlvbiIsIm9uU3VjY2VzcyIsIm9uRXJyb3IiLCJvbkNvbXBsZXRlIiwidXJsQXJyYXkiLCJ1cmxRdWV1ZSIsIm1hcCIsIngiLCJpc1ZhbGlkQ3NzIiwiY3NzVGV4dCIsImlzSFRNTCIsInRyaW0iLCJjaGFyQXQiLCJ4aHIiLCJ1cmxJbmRleCIsInJlc3BvbnNlVGV4dCIsInJldHVyblZhbCIsImluZGV4T2YiLCJwYXJzZXIiLCJjcmVhdGVFbGVtZW50IiwiZm9yRWFjaCIsInVybCIsImhyZWYiLCJpc0lFbHRlOSIsIkJvb2xlYW4iLCJhbGwiLCJhdG9iIiwiaXNJRWx0ZTlDT1JTIiwiaG9zdCIsInNwbGl0IiwibG9jYXRpb24iLCJpc1NhbWVQcm90b2NvbCIsInByb3RvY29sIiwieGRyIiwiWERvbWFpblJlcXVlc3QiLCJvcGVuIiwidGltZW91dCIsIm9ucHJvZ3Jlc3MiLCJvbnRpbWVvdXQiLCJvbmxvYWQiLCJvbmVycm9yIiwic2VuZCIsImNvbmNhdCIsIlhNTEh0dHBSZXF1ZXN0Iiwib3ZlcnJpZGVNaW1lVHlwZSIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlYWR5U3RhdGUiLCJzdGF0dXMiLCJnZXRDc3NEYXRhIiwicmVnZXgiLCJjc3NDb21tZW50cyIsImNzc0ltcG9ydHMiLCJyb290RWxlbWVudCIsImluY2x1ZGUiLCJleGNsdWRlIiwiZmlsdGVyIiwidXNlQ1NTT00iLCJzb3VyY2VOb2RlcyIsIm5vZGUiLCJtYXRjaGVzU2VsZWN0b3IiLCJjc3NBcnJheSIsImhhbmRsZUNvbXBsZXRlIiwiaXNDb21wbGV0ZSIsImpvaW4iLCJoYW5kbGVTdWNjZXNzIiwiY3NzSW5kZXgiLCJzb3VyY2VVcmwiLCJyZXNvbHZlSW1wb3J0cyIsInJlc29sdmVkQ3NzVGV4dCIsImVycm9yRGF0YSIsImRhdGEiLCJwYXJzZUltcG9ydERhdGEiLCJiYXNlVXJsIiwiaWdub3JlUnVsZXMiLCJpbXBvcnREYXRhIiwicnVsZXMiLCJtYXRjaCIsInJ1bGUiLCJhYnNvbHV0ZVVybHMiLCJnZXRGdWxsVXJsIiwiYWJzb2x1dGVSdWxlcyIsIm9sZFVybCIsIm5ld1VybCIsImNhbGxiYWNrRm4iLCJfX2Vycm9yRGF0YSIsIl9fZXJyb3JSdWxlcyIsInJlc3BvbnNlSW1wb3J0RGF0YSIsInB1c2giLCJyZXNwb25zZUFycmF5IiwiaW1wb3J0VGV4dCIsImxpbmtIcmVmIiwibGlua1JlbCIsImlzTGluayIsIm5vZGVOYW1lIiwidG9Mb3dlckNhc2UiLCJpc1N0eWxlIiwidGV4dENvbnRlbnQiLCJzaGVldCIsImNzc1J1bGVzIiwiYmFzZSIsImltcGxlbWVudGF0aW9uIiwiY3JlYXRlSFRNTERvY3VtZW50IiwiYiIsImEiLCJoZWFkIiwiYXBwZW5kQ2hpbGQiLCJlbG0iLCJzZWxlY3RvciIsIm1hdGNoZXMiLCJ3ZWJraXRNYXRjaGVzU2VsZWN0b3IiLCJtb3pNYXRjaGVzU2VsZWN0b3IiLCJtc01hdGNoZXNTZWxlY3RvciIsIm9NYXRjaGVzU2VsZWN0b3IiLCJiYWxhbmNlZE1hdGNoIiwiYmFsYW5jZWQiLCJzdHIiLCJSZWdFeHAiLCJtYXliZU1hdGNoIiwicmFuZ2UiLCJzdGFydCIsImVuZCIsInByZSIsInNsaWNlIiwicG9zdCIsInJlZyIsImJlZ3MiLCJiZWciLCJsZWZ0IiwicmlnaHQiLCJyZXN1bHQiLCJhaSIsImJpIiwicG9wIiwicGFyc2VDc3MiLCJjc3MiLCJkZWZhdWx0cyIsIm9ubHlWYXJzIiwicmVtb3ZlQ29tbWVudHMiLCJlcnJvcnMiLCJlcnJvciIsIm1zZyIsIkVycm9yIiwicmUiLCJjbG9zZSIsIndoaXRlc3BhY2UiLCJjb21tZW50IiwidHlwZSIsImNvbW1lbnRzIiwiY21udHMiLCJkZWNsYXJhdGlvbiIsImNvbW1lbnRfcmVnZXhwIiwidmFsIiwicmV0IiwiZGVjbGFyYXRpb25zIiwiZGVjbHMiLCJrZXlmcmFtZSIsInZhbHMiLCJ2YWx1ZXMiLCJhdF9rZXlmcmFtZXMiLCJ2ZW5kb3IiLCJmcmFtZSIsImZyYW1lcyIsImtleWZyYW1lcyIsImF0X3BhZ2UiLCJzZWwiLCJzZWxlY3RvcnMiLCJhdF9mb250ZmFjZSIsImF0X3N1cHBvcnRzIiwic3VwcG9ydHMiLCJhdF9ob3N0IiwiYXRfbWVkaWEiLCJtZWRpYSIsImF0X2N1c3RvbV9tIiwiYXRfZG9jdW1lbnQiLCJhdF94IiwiYXRfcnVsZSIsImhhc1ZhckZ1bmMiLCJzb21lIiwiZGVjbCIsIm9iaiIsImJhbGFuY2VkTWF0Y2gkJDEiLCJoYXNWYXJEZWNsIiwiY29yZSIsInN0eWxlc2hlZXQiLCJzdHJpbmdpZnlDc3MiLCJ0cmVlIiwiZGVsaW0iLCJjYiIsInJlbmRlck1ldGhvZHMiLCJjaGFyc2V0IiwiY3VzdG9tTWVkaWEiLCJ2aXNpdCIsImZvbnRGYWNlIiwiX2ltcG9ydCIsIm5hbWVzcGFjZSIsInBhZ2UiLCJub2RlcyIsImJ1ZiIsInR4dCIsIndhbGtDc3MiLCJmbiIsIlZBUl9QUk9QX0lERU5USUZJRVIiLCJWQVJfRlVOQ19JREVOVElGSUVSIiwidmFyaWFibGVTdG9yZSIsImRvbSIsInRlbXAiLCJ1c2VyIiwidHJhbnNmb3JtVmFycyIsImZpeE5lc3RlZENhbGMiLCJwZXJzaXN0IiwicHJlc2VydmUiLCJ2YXJpYWJsZXMiLCJvbldhcm5pbmciLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJjc3NUcmVlIiwidmFyTmFtZUluZGljZXMiLCJzcGxpY2UiLCJrZXlzIiwibmV3UnVsZSIsInJlc29sdmVkVmFsdWUiLCJyZXNvbHZlVmFsdWUiLCJyZUNhbGNFeHAiLCJvbGRWYWx1ZSIsIm5ld1ZhbHVlIiwicm9vdENhbGMiLCJuZXN0ZWRDYWxjIiwiX19yZWN1cnNpdmVGYWxsYmFjayIsInZhbHVlRGF0YSIsInJlc29sdmVGdW5jIiwiZmFsbGJhY2siLCJyZXBsYWNlbWVudCIsInVucmVzb2x2ZWRGYWxsYmFjayIsImlzRW1wdHlWYXJGdW5jIiwiaXNCcm93c2VyIiwiaXNOYXRpdmVTdXBwb3J0IiwiQ1NTIiwiY29uc29sZU1zZ1ByZWZpeCIsInNoYWRvd0RPTSIsIm9ubHlMZWdhY3kiLCJzaWxlbnQiLCJ1cGRhdGVET00iLCJ1cGRhdGVVUkxzIiwid2F0Y2giLCJjc3NLZXlmcmFtZXMiLCJjc3NSb290UnVsZXMiLCJjc3NVcmxzIiwiY3NzVmFycyIsImNzc1ZhcnNPYnNlcnZlciIsImRlYm91bmNlVGltZXIiLCJpc1NoYWRvd0RPTVJlYWR5Iiwic3R5bGVOb2RlSWQiLCJfYmVuY2htYXJrIiwiZ2V0VGltZVN0YW1wIiwiaGFuZGxlRXJyb3IiLCJtZXNzYWdlIiwic291cmNlTm9kZSIsImhhbmRsZVdhcm5pbmciLCJkaXNjb25uZWN0IiwiYWRkTXV0YXRpb25PYnNlcnZlciIsImNzc1ZhcnNEZWJvdW5jZWQiLCJpc1NoYWRvd0VsbSIsInNoYWRvd1Jvb3QiLCJ0YXJnZXRFbG0iLCJkb2N1bWVudEVsZW1lbnQiLCJzZXRQcm9wZXJ0eSIsImNzc1Jvb3REZWNscyIsIm5vZGVBcnJheSIsImNzc1VybCIsImdldEZ1bGxVcmwkMSIsInJlc3BvbnNlVXJsIiwicmVzcG9uc2VVUkwiLCJzdGF0dXNUZXh0IiwiZXJyb3JNc2ciLCJjc3NNYXJrZXIiLCJjc3NTZXR0aW5ncyIsInN0eWxlTm9kZSIsInF1ZXJ5U2VsZWN0b3IiLCJwcmV2RGF0YSIsIl9fY3NzVmFycyIsImlzU2FtZURhdGEiLCJoYXNLZXlmcmFtZXNXaXRoVmFycyIsImluZm8iLCJncm91cDEiLCJlcnJvclRocm93biIsImVycm9yTm9kZSIsImVsbXMiLCJzaGFkb3dTZXR0aW5ncyIsImNzc05vZGVzIiwibGFzdE5vZGUiLCJwYXJlbnROb2RlIiwiaW5zZXJ0QmVmb3JlIiwibmV4dFNpYmxpbmciLCJ0YXJnZXROb2RlIiwiZml4S2V5ZnJhbWVzIiwiaW5pdCIsImV2dCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjbGVhclRpbWVvdXQiLCJpZ25vcmVJZCIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJpZCIsIm11dGF0aW9ucyIsImhhc0NTU011dGF0aW9uIiwibXV0YXRpb24iLCJpc0NTU011dGF0aW9uIiwiYWRkZWROb2RlcyIsInJlbW92ZWROb2RlcyIsImlzVmFsaWRMaW5rIiwiZGlzYWJsZWQiLCJpc1ZhbGlkU3R5bGUiLCJvYnNlcnZlIiwiYXR0cmlidXRlcyIsImF0dHJpYnV0ZUZpbHRlciIsImNoaWxkTGlzdCIsInN1YnRyZWUiLCJhbmltYXRpb25OYW1lUHJvcCIsImFsbE5vZGVzIiwia2V5ZnJhbWVOb2RlcyIsIm5hbWVNYXJrZXIiLCJsZW4iLCJhbmltYXRpb25OYW1lIiwib2Zmc2V0SGVpZ2h0IiwiX2kiLCJfbGVuIiwibm9kZVN0eWxlIiwicGVyZm9ybWFuY2UiLCJub3ciLCJEYXRlIiwiZ2V0VGltZSJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQVMsQ0FBQyxVQUFTQSxPQUFULEVBQWtCO0FBQUU7O0FBQzlCO0FBQVU7O0FBQ1Y7QUFBVSxNQUFJQyxnQkFBZ0IsR0FBRyxFQUF2QjtBQUNWOztBQUNBO0FBQVU7O0FBQ1Y7O0FBQVUsV0FBU0MsbUJBQVQsQ0FBNkJDLFFBQTdCLEVBQXVDO0FBQ2pEOztBQUNBO0FBQVc7O0FBQ1g7QUFBVyxRQUFHRixnQkFBZ0IsQ0FBQ0UsUUFBRCxDQUFuQixFQUErQjtBQUMxQztBQUFZLGFBQU9GLGdCQUFnQixDQUFDRSxRQUFELENBQWhCLENBQTJCQyxPQUFsQztBQUNaO0FBQVk7QUFDWjtBQUFXOztBQUNYOzs7QUFBVyxRQUFJQyxNQUFNLEdBQUdKLGdCQUFnQixDQUFDRSxRQUFELENBQWhCLEdBQTZCO0FBQ3JEO0FBQVlHLE1BQUFBLENBQUMsRUFBRUgsUUFEc0M7O0FBRXJEO0FBQVlJLE1BQUFBLENBQUMsRUFBRSxLQUZzQzs7QUFHckQ7QUFBWUgsTUFBQUEsT0FBTyxFQUFFO0FBQ3JCOztBQUpxRCxLQUExQztBQUtYOztBQUNBO0FBQVc7O0FBQ1g7O0FBQVdKLElBQUFBLE9BQU8sQ0FBQ0csUUFBRCxDQUFQLENBQWtCSyxJQUFsQixDQUF1QkgsTUFBTSxDQUFDRCxPQUE5QixFQUF1Q0MsTUFBdkMsRUFBK0NB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LEdBQW9FcUQsUUFBUSxDQUFDUixJQUF4RjtBQUNBLFFBQUlsSyxDQUFDLEdBQUdnQyxRQUFRLENBQUNnTixjQUFULENBQXdCQyxrQkFBeEIsQ0FBMkMsRUFBM0MsQ0FBUjtBQUNBLFFBQUlDLENBQUMsR0FBR2xQLENBQUMsQ0FBQytKLGFBQUYsQ0FBZ0IsTUFBaEIsQ0FBUjtBQUNBLFFBQUlvRixDQUFDLEdBQUduUCxDQUFDLENBQUMrSixhQUFGLENBQWdCLEdBQWhCLENBQVI7QUFDQS9KLElBQUFBLENBQUMsQ0FBQ29QLElBQUYsQ0FBT0MsV0FBUCxDQUFtQkgsQ0FBbkI7QUFDQWxQLElBQUFBLENBQUMsQ0FBQzhHLElBQUYsQ0FBT3VJLFdBQVAsQ0FBbUJGLENBQW5CO0FBQ0FELElBQUFBLENBQUMsQ0FBQ2hGLElBQUYsR0FBUzZFLElBQVQ7QUFDQUksSUFBQUEsQ0FBQyxDQUFDakYsSUFBRixHQUFTRCxHQUFUO0FBQ0EsV0FBT2tGLENBQUMsQ0FBQ2pGLElBQVQ7QUFDSDs7QUFFRCxXQUFTd08sWUFBVCxHQUF3QjtBQUNwQixXQUFPbkIsU0FBUyxJQUFJLENBQUNoVSxNQUFNLENBQUM0WixXQUFQLElBQXNCLEVBQXZCLEVBQTJCQyxHQUF4QyxHQUE4QzdaLE1BQU0sQ0FBQzRaLFdBQVAsQ0FBbUJDLEdBQW5CLEVBQTlDLEdBQXlFLElBQUlDLElBQUosR0FBV0MsT0FBWCxFQUFoRjtBQUNIO0FBRUQ7OztBQUE2QjFiLEVBQUFBLG1CQUFtQixDQUFDLFNBQUQsQ0FBbkIsR0FBa0N3VyxPQUFsQztBQUk3QjtBQUFPO0FBQ1A7QUF0bURVLENBdEZEIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGk6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bDogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuLyoqKioqKi8gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuLyoqKioqKi8gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3Rcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4vKioqKioqLyBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuLyoqKioqKi8gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3Rcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4vKioqKioqLyBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbi8qKioqKiovIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4vKioqKioqLyBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gbnM7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbi8qKioqKiovIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gZ2V0dGVyO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoW1xuLyogMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBvYmplY3RfZml0X2ltYWdlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBvYmplY3RfZml0X2ltYWdlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXy5uKG9iamVjdF9maXRfaW1hZ2VzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIGNzc192YXJzX3BvbnlmaWxsX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG4gIC8vZmFsbGJhY2sgZm9yIGllIGFuZCBlZGdlOlxuICBPYmplY3QoY3NzX3ZhcnNfcG9ueWZpbGxfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX1tcImRlZmF1bHRcIl0pKCk7XG4gIG9iamVjdF9maXRfaW1hZ2VzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19fZGVmYXVsdCgpKCk7XG59LCBmYWxzZSk7XG5cbi8qKiovIH0pLFxuLyogMSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbi8qISBucG0uaW0vb2JqZWN0LWZpdC1pbWFnZXMgMy4yLjQgKi9cblxuXG52YXIgT0ZJID0gJ2JmcmVkLWl0Om9iamVjdC1maXQtaW1hZ2VzJztcbnZhciBwcm9wUmVnZXggPSAvKG9iamVjdC1maXR8b2JqZWN0LXBvc2l0aW9uKVxccyo6XFxzKihbLS5cXHdcXHMlXSspL2c7XG52YXIgdGVzdEltZyA9IHR5cGVvZiBJbWFnZSA9PT0gJ3VuZGVmaW5lZCcgPyB7c3R5bGU6IHsnb2JqZWN0LXBvc2l0aW9uJzogMX19IDogbmV3IEltYWdlKCk7XG52YXIgc3VwcG9ydHNPYmplY3RGaXQgPSAnb2JqZWN0LWZpdCcgaW4gdGVzdEltZy5zdHlsZTtcbnZhciBzdXBwb3J0c09iamVjdFBvc2l0aW9uID0gJ29iamVjdC1wb3NpdGlvbicgaW4gdGVzdEltZy5zdHlsZTtcbnZhciBzdXBwb3J0c09GSSA9ICdiYWNrZ3JvdW5kLXNpemUnIGluIHRlc3RJbWcuc3R5bGU7XG52YXIgc3VwcG9ydHNDdXJyZW50U3JjID0gdHlwZW9mIHRlc3RJbWcuY3VycmVudFNyYyA9PT0gJ3N0cmluZyc7XG52YXIgbmF0aXZlR2V0QXR0cmlidXRlID0gdGVzdEltZy5nZXRBdHRyaWJ1dGU7XG52YXIgbmF0aXZlU2V0QXR0cmlidXRlID0gdGVzdEltZy5zZXRBdHRyaWJ1dGU7XG52YXIgYXV0b01vZGVFbmFibGVkID0gZmFsc2U7XG5cbmZ1bmN0aW9uIGNyZWF0ZVBsYWNlaG9sZGVyKHcsIGgpIHtcblx0cmV0dXJuIChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nXCIgKyB3ICsgXCInIGhlaWdodD0nXCIgKyBoICsgXCInJTNFJTNDL3N2ZyUzRVwiKTtcbn1cblxuZnVuY3Rpb24gcG9seWZpbGxDdXJyZW50U3JjKGVsKSB7XG5cdGlmIChlbC5zcmNzZXQgJiYgIXN1cHBvcnRzQ3VycmVudFNyYyAmJiB3aW5kb3cucGljdHVyZWZpbGwpIHtcblx0XHR2YXIgcGYgPSB3aW5kb3cucGljdHVyZWZpbGwuXztcblx0XHQvLyBwYXJzZSBzcmNzZXQgd2l0aCBwaWN0dXJlZmlsbCB3aGVyZSBjdXJyZW50U3JjIGlzbid0IGF2YWlsYWJsZVxuXHRcdGlmICghZWxbcGYubnNdIHx8ICFlbFtwZi5uc10uZXZhbGVkKSB7XG5cdFx0XHQvLyBmb3JjZSBzeW5jaHJvbm91cyBzcmNzZXQgcGFyc2luZ1xuXHRcdFx0cGYuZmlsbEltZyhlbCwge3Jlc2VsZWN0OiB0cnVlfSk7XG5cdFx0fVxuXG5cdFx0aWYgKCFlbFtwZi5uc10uY3VyU3JjKSB7XG5cdFx0XHQvLyBmb3JjZSBwaWN0dXJlZmlsbCB0byBwYXJzZSBzcmNzZXRcblx0XHRcdGVsW3BmLm5zXS5zdXBwb3J0ZWQgPSBmYWxzZTtcblx0XHRcdHBmLmZpbGxJbWcoZWwsIHtyZXNlbGVjdDogdHJ1ZX0pO1xuXHRcdH1cblxuXHRcdC8vIHJldHJpZXZlIHBhcnNlZCBjdXJyZW50U3JjLCBpZiBhbnlcblx0XHRlbC5jdXJyZW50U3JjID0gZWxbcGYubnNdLmN1clNyYyB8fCBlbC5zcmM7XG5cdH1cbn1cblxuZnVuY3Rpb24gZ2V0U3R5bGUoZWwpIHtcblx0dmFyIHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbCkuZm9udEZhbWlseTtcblx0dmFyIHBhcnNlZDtcblx0dmFyIHByb3BzID0ge307XG5cdHdoaWxlICgocGFyc2VkID0gcHJvcFJlZ2V4LmV4ZWMoc3R5bGUpKSAhPT0gbnVsbCkge1xuXHRcdHByb3BzW3BhcnNlZFsxXV0gPSBwYXJzZWRbMl07XG5cdH1cblx0cmV0dXJuIHByb3BzO1xufVxuXG5mdW5jdGlvbiBzZXRQbGFjZWhvbGRlcihpbWcsIHdpZHRoLCBoZWlnaHQpIHtcblx0Ly8gRGVmYXVsdDogZmlsbCB3aWR0aCwgbm8gaGVpZ2h0XG5cdHZhciBwbGFjZWhvbGRlciA9IGNyZWF0ZVBsYWNlaG9sZGVyKHdpZHRoIHx8IDEsIGhlaWdodCB8fCAwKTtcblxuXHQvLyBPbmx5IHNldCBwbGFjZWhvbGRlciBpZiBpdCdzIGRpZmZlcmVudFxuXHRpZiAobmF0aXZlR2V0QXR0cmlidXRlLmNhbGwoaW1nLCAnc3JjJykgIT09IHBsYWNlaG9sZGVyKSB7XG5cdFx0bmF0aXZlU2V0QXR0cmlidXRlLmNhbGwoaW1nLCAnc3JjJywgcGxhY2Vob2xkZXIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIG9uSW1hZ2VSZWFkeShpbWcsIGNhbGxiYWNrKSB7XG5cdC8vIG5hdHVyYWxXaWR0aCBpcyBvbmx5IGF2YWlsYWJsZSB3aGVuIHRoZSBpbWFnZSBoZWFkZXJzIGFyZSBsb2FkZWQsXG5cdC8vIHRoaXMgbG9vcCB3aWxsIHBvbGwgaXQgZXZlcnkgMTAwbXMuXG5cdGlmIChpbWcubmF0dXJhbFdpZHRoKSB7XG5cdFx0Y2FsbGJhY2soaW1nKTtcblx0fSBlbHNlIHtcblx0XHRzZXRUaW1lb3V0KG9uSW1hZ2VSZWFkeSwgMTAwLCBpbWcsIGNhbGxiYWNrKTtcblx0fVxufVxuXG5mdW5jdGlvbiBmaXhPbmUoZWwpIHtcblx0dmFyIHN0eWxlID0gZ2V0U3R5bGUoZWwpO1xuXHR2YXIgb2ZpID0gZWxbT0ZJXTtcblx0c3R5bGVbJ29iamVjdC1maXQnXSA9IHN0eWxlWydvYmplY3QtZml0J10gfHwgJ2ZpbGwnOyAvLyBkZWZhdWx0IHZhbHVlXG5cblx0Ly8gQXZvaWQgcnVubmluZyB3aGVyZSB1bm5lY2Vzc2FyeSwgdW5sZXNzIE9GSSBoYWQgYWxyZWFkeSBkb25lIGl0cyBkZWVkXG5cdGlmICghb2ZpLmltZykge1xuXHRcdC8vIGZpbGwgaXMgdGhlIGRlZmF1bHQgYmVoYXZpb3Igc28gbm8gYWN0aW9uIGlzIG5lY2Vzc2FyeVxuXHRcdGlmIChzdHlsZVsnb2JqZWN0LWZpdCddID09PSAnZmlsbCcpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBXaGVyZSBvYmplY3QtZml0IGlzIHN1cHBvcnRlZCBhbmQgb2JqZWN0LXBvc2l0aW9uIGlzbid0IChTYWZhcmkgPCAxMClcblx0XHRpZiAoXG5cdFx0XHQhb2ZpLnNraXBUZXN0ICYmIC8vIHVubGVzcyB1c2VyIHdhbnRzIHRvIGFwcGx5IHJlZ2FyZGxlc3Mgb2YgYnJvd3NlciBzdXBwb3J0XG5cdFx0XHRzdXBwb3J0c09iamVjdEZpdCAmJiAvLyBpZiBicm93c2VyIGFscmVhZHkgc3VwcG9ydHMgb2JqZWN0LWZpdFxuXHRcdFx0IXN0eWxlWydvYmplY3QtcG9zaXRpb24nXSAvLyB1bmxlc3Mgb2JqZWN0LXBvc2l0aW9uIGlzIHVzZWRcblx0XHQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdH1cblxuXHQvLyBrZWVwIGEgY2xvbmUgaW4gbWVtb3J5IHdoaWxlIHJlc2V0dGluZyB0aGUgb3JpZ2luYWwgdG8gYSBibGFua1xuXHRpZiAoIW9maS5pbWcpIHtcblx0XHRvZmkuaW1nID0gbmV3IEltYWdlKGVsLndpZHRoLCBlbC5oZWlnaHQpO1xuXHRcdG9maS5pbWcuc3Jjc2V0ID0gbmF0aXZlR2V0QXR0cmlidXRlLmNhbGwoZWwsIFwiZGF0YS1vZmktc3Jjc2V0XCIpIHx8IGVsLnNyY3NldDtcblx0XHRvZmkuaW1nLnNyYyA9IG5hdGl2ZUdldEF0dHJpYnV0ZS5jYWxsKGVsLCBcImRhdGEtb2ZpLXNyY1wiKSB8fCBlbC5zcmM7XG5cblx0XHQvLyBwcmVzZXJ2ZSBmb3IgYW55IGZ1dHVyZSBjbG9uZU5vZGUgY2FsbHNcblx0XHQvLyBodHRwczovL2dpdGh1Yi5jb20vYmZyZWQtaXQvb2JqZWN0LWZpdC1pbWFnZXMvaXNzdWVzLzUzXG5cdFx0bmF0aXZlU2V0QXR0cmlidXRlLmNhbGwoZWwsIFwiZGF0YS1vZmktc3JjXCIsIGVsLnNyYyk7XG5cdFx0aWYgKGVsLnNyY3NldCkge1xuXHRcdFx0bmF0aXZlU2V0QXR0cmlidXRlLmNhbGwoZWwsIFwiZGF0YS1vZmktc3Jjc2V0XCIsIGVsLnNyY3NldCk7XG5cdFx0fVxuXG5cdFx0c2V0UGxhY2Vob2xkZXIoZWwsIGVsLm5hdHVyYWxXaWR0aCB8fCBlbC53aWR0aCwgZWwubmF0dXJhbEhlaWdodCB8fCBlbC5oZWlnaHQpO1xuXG5cdFx0Ly8gcmVtb3ZlIHNyY3NldCBiZWNhdXNlIGl0IG92ZXJyaWRlcyBzcmNcblx0XHRpZiAoZWwuc3Jjc2V0KSB7XG5cdFx0XHRlbC5zcmNzZXQgPSAnJztcblx0XHR9XG5cdFx0dHJ5IHtcblx0XHRcdGtlZXBTcmNVc2FibGUoZWwpO1xuXHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0aWYgKHdpbmRvdy5jb25zb2xlKSB7XG5cdFx0XHRcdGNvbnNvbGUud2FybignaHR0cHM6Ly9iaXQubHkvb2ZpLW9sZC1icm93c2VyJyk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cG9seWZpbGxDdXJyZW50U3JjKG9maS5pbWcpO1xuXG5cdGVsLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKFxcXCJcIiArICgob2ZpLmltZy5jdXJyZW50U3JjIHx8IG9maS5pbWcuc3JjKS5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykpICsgXCJcXFwiKVwiO1xuXHRlbC5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb24gPSBzdHlsZVsnb2JqZWN0LXBvc2l0aW9uJ10gfHwgJ2NlbnRlcic7XG5cdGVsLnN0eWxlLmJhY2tncm91bmRSZXBlYXQgPSAnbm8tcmVwZWF0Jztcblx0ZWwuc3R5bGUuYmFja2dyb3VuZE9yaWdpbiA9ICdjb250ZW50LWJveCc7XG5cblx0aWYgKC9zY2FsZS1kb3duLy50ZXN0KHN0eWxlWydvYmplY3QtZml0J10pKSB7XG5cdFx0b25JbWFnZVJlYWR5KG9maS5pbWcsIGZ1bmN0aW9uICgpIHtcblx0XHRcdGlmIChvZmkuaW1nLm5hdHVyYWxXaWR0aCA+IGVsLndpZHRoIHx8IG9maS5pbWcubmF0dXJhbEhlaWdodCA+IGVsLmhlaWdodCkge1xuXHRcdFx0XHRlbC5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9ICdjb250YWluJztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGVsLnN0eWxlLmJhY2tncm91bmRTaXplID0gJ2F1dG8nO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdGVsLnN0eWxlLmJhY2tncm91bmRTaXplID0gc3R5bGVbJ29iamVjdC1maXQnXS5yZXBsYWNlKCdub25lJywgJ2F1dG8nKS5yZXBsYWNlKCdmaWxsJywgJzEwMCUgMTAwJScpO1xuXHR9XG5cblx0b25JbWFnZVJlYWR5KG9maS5pbWcsIGZ1bmN0aW9uIChpbWcpIHtcblx0XHRzZXRQbGFjZWhvbGRlcihlbCwgaW1nLm5hdHVyYWxXaWR0aCwgaW1nLm5hdHVyYWxIZWlnaHQpO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24ga2VlcFNyY1VzYWJsZShlbCkge1xuXHR2YXIgZGVzY3JpcHRvcnMgPSB7XG5cdFx0Z2V0OiBmdW5jdGlvbiBnZXQocHJvcCkge1xuXHRcdFx0cmV0dXJuIGVsW09GSV0uaW1nW3Byb3AgPyBwcm9wIDogJ3NyYyddO1xuXHRcdH0sXG5cdFx0c2V0OiBmdW5jdGlvbiBzZXQodmFsdWUsIHByb3ApIHtcblx0XHRcdGVsW09GSV0uaW1nW3Byb3AgPyBwcm9wIDogJ3NyYyddID0gdmFsdWU7XG5cdFx0XHRuYXRpdmVTZXRBdHRyaWJ1dGUuY2FsbChlbCwgKFwiZGF0YS1vZmktXCIgKyBwcm9wKSwgdmFsdWUpOyAvLyBwcmVzZXJ2ZSBmb3IgYW55IGZ1dHVyZSBjbG9uZU5vZGVcblx0XHRcdGZpeE9uZShlbCk7XG5cdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0fVxuXHR9O1xuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZWwsICdzcmMnLCBkZXNjcmlwdG9ycyk7XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbCwgJ2N1cnJlbnRTcmMnLCB7XG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBkZXNjcmlwdG9ycy5nZXQoJ2N1cnJlbnRTcmMnKTsgfVxuXHR9KTtcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGVsLCAnc3Jjc2V0Jywge1xuXHRcdGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZGVzY3JpcHRvcnMuZ2V0KCdzcmNzZXQnKTsgfSxcblx0XHRzZXQ6IGZ1bmN0aW9uIChzcykgeyByZXR1cm4gZGVzY3JpcHRvcnMuc2V0KHNzLCAnc3Jjc2V0Jyk7IH1cblx0fSk7XG59XG5cbmZ1bmN0aW9uIGhpamFja0F0dHJpYnV0ZXMoKSB7XG5cdGZ1bmN0aW9uIGdldE9maUltYWdlTWF5YmUoZWwsIG5hbWUpIHtcblx0XHRyZXR1cm4gZWxbT0ZJXSAmJiBlbFtPRkldLmltZyAmJiAobmFtZSA9PT0gJ3NyYycgfHwgbmFtZSA9PT0gJ3NyY3NldCcpID8gZWxbT0ZJXS5pbWcgOiBlbDtcblx0fVxuXHRpZiAoIXN1cHBvcnRzT2JqZWN0UG9zaXRpb24pIHtcblx0XHRIVE1MSW1hZ2VFbGVtZW50LnByb3RvdHlwZS5nZXRBdHRyaWJ1dGUgPSBmdW5jdGlvbiAobmFtZSkge1xuXHRcdFx0cmV0dXJuIG5hdGl2ZUdldEF0dHJpYnV0ZS5jYWxsKGdldE9maUltYWdlTWF5YmUodGhpcywgbmFtZSksIG5hbWUpO1xuXHRcdH07XG5cblx0XHRIVE1MSW1hZ2VFbGVtZW50LnByb3RvdHlwZS5zZXRBdHRyaWJ1dGUgPSBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcblx0XHRcdHJldHVybiBuYXRpdmVTZXRBdHRyaWJ1dGUuY2FsbChnZXRPZmlJbWFnZU1heWJlKHRoaXMsIG5hbWUpLCBuYW1lLCBTdHJpbmcodmFsdWUpKTtcblx0XHR9O1xuXHR9XG59XG5cbmZ1bmN0aW9uIGZpeChpbWdzLCBvcHRzKSB7XG5cdHZhciBzdGFydEF1dG9Nb2RlID0gIWF1dG9Nb2RlRW5hYmxlZCAmJiAhaW1ncztcblx0b3B0cyA9IG9wdHMgfHwge307XG5cdGltZ3MgPSBpbWdzIHx8ICdpbWcnO1xuXG5cdGlmICgoc3VwcG9ydHNPYmplY3RQb3NpdGlvbiAmJiAhb3B0cy5za2lwVGVzdCkgfHwgIXN1cHBvcnRzT0ZJKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0Ly8gdXNlIGltZ3MgYXMgYSBzZWxlY3RvciBvciBqdXN0IHNlbGVjdCBhbGwgaW1hZ2VzXG5cdGlmIChpbWdzID09PSAnaW1nJykge1xuXHRcdGltZ3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW1nJyk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGltZ3MgPT09ICdzdHJpbmcnKSB7XG5cdFx0aW1ncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoaW1ncyk7XG5cdH0gZWxzZSBpZiAoISgnbGVuZ3RoJyBpbiBpbWdzKSkge1xuXHRcdGltZ3MgPSBbaW1nc107XG5cdH1cblxuXHQvLyBhcHBseSBmaXggdG8gYWxsXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgaW1ncy5sZW5ndGg7IGkrKykge1xuXHRcdGltZ3NbaV1bT0ZJXSA9IGltZ3NbaV1bT0ZJXSB8fCB7XG5cdFx0XHRza2lwVGVzdDogb3B0cy5za2lwVGVzdFxuXHRcdH07XG5cdFx0Zml4T25lKGltZ3NbaV0pO1xuXHR9XG5cblx0aWYgKHN0YXJ0QXV0b01vZGUpIHtcblx0XHRkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoZSkge1xuXHRcdFx0aWYgKGUudGFyZ2V0LnRhZ05hbWUgPT09ICdJTUcnKSB7XG5cdFx0XHRcdGZpeChlLnRhcmdldCwge1xuXHRcdFx0XHRcdHNraXBUZXN0OiBvcHRzLnNraXBUZXN0XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH0sIHRydWUpO1xuXHRcdGF1dG9Nb2RlRW5hYmxlZCA9IHRydWU7XG5cdFx0aW1ncyA9ICdpbWcnOyAvLyByZXNldCB0byBhIGdlbmVyaWMgc2VsZWN0b3IgZm9yIHdhdGNoTVFcblx0fVxuXG5cdC8vIGlmIHJlcXVlc3RlZCwgd2F0Y2ggbWVkaWEgcXVlcmllcyBmb3Igb2JqZWN0LWZpdCBjaGFuZ2Vcblx0aWYgKG9wdHMud2F0Y2hNUSkge1xuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBmaXguYmluZChudWxsLCBpbWdzLCB7XG5cdFx0XHRza2lwVGVzdDogb3B0cy5za2lwVGVzdFxuXHRcdH0pKTtcblx0fVxufVxuXG5maXguc3VwcG9ydHNPYmplY3RGaXQgPSBzdXBwb3J0c09iamVjdEZpdDtcbmZpeC5zdXBwb3J0c09iamVjdFBvc2l0aW9uID0gc3VwcG9ydHNPYmplY3RQb3NpdGlvbjtcblxuaGlqYWNrQXR0cmlidXRlcygpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZpeDtcblxuXG4vKioqLyB9KSxcbi8qIDIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiFcbiAqIGNzcy12YXJzLXBvbnlmaWxsXG4gKiB2MS4xNy4yXG4gKiBodHRwczovL2dpdGh1Yi5jb20vamhpbGRlbmJpZGRsZS9jc3MtdmFycy1wb255ZmlsbFxuICogKGMpIDIwMTgtMjAxOSBKb2huIEhpbGRlbmJpZGRsZSA8aHR0cDovL2hpbGRlbmJpZGRsZS5jb20+XG4gKiBNSVQgbGljZW5zZVxuICovXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfTtcbiAgICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICAgIHJldHVybiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5KGFycikgfHwgX25vbkl0ZXJhYmxlU3ByZWFkKCk7XG59XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSBhcnIyW2ldID0gYXJyW2ldO1xuICAgICAgICByZXR1cm4gYXJyMjtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICAgIGlmIChTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGl0ZXIpIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpdGVyKSA9PT0gXCJbb2JqZWN0IEFyZ3VtZW50c11cIikgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2VcIik7XG59XG5cbi8qIVxuICogZ2V0LWNzcy1kYXRhXG4gKiB2MS42LjNcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9qaGlsZGVuYmlkZGxlL2dldC1jc3MtZGF0YVxuICogKGMpIDIwMTgtMjAxOSBKb2huIEhpbGRlbmJpZGRsZSA8aHR0cDovL2hpbGRlbmJpZGRsZS5jb20+XG4gKiBNSVQgbGljZW5zZVxuICovIGZ1bmN0aW9uIGdldFVybHModXJscykge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB2YXIgc2V0dGluZ3MgPSB7XG4gICAgICAgIG1pbWVUeXBlOiBvcHRpb25zLm1pbWVUeXBlIHx8IG51bGwsXG4gICAgICAgIG9uQmVmb3JlU2VuZDogb3B0aW9ucy5vbkJlZm9yZVNlbmQgfHwgRnVuY3Rpb24ucHJvdG90eXBlLFxuICAgICAgICBvblN1Y2Nlc3M6IG9wdGlvbnMub25TdWNjZXNzIHx8IEZ1bmN0aW9uLnByb3RvdHlwZSxcbiAgICAgICAgb25FcnJvcjogb3B0aW9ucy5vbkVycm9yIHx8IEZ1bmN0aW9uLnByb3RvdHlwZSxcbiAgICAgICAgb25Db21wbGV0ZTogb3B0aW9ucy5vbkNvbXBsZXRlIHx8IEZ1bmN0aW9uLnByb3RvdHlwZVxuICAgIH07XG4gICAgdmFyIHVybEFycmF5ID0gQXJyYXkuaXNBcnJheSh1cmxzKSA/IHVybHMgOiBbIHVybHMgXTtcbiAgICB2YXIgdXJsUXVldWUgPSBBcnJheS5hcHBseShudWxsLCBBcnJheSh1cmxBcnJheS5sZW5ndGgpKS5tYXAoZnVuY3Rpb24oeCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9KTtcbiAgICBmdW5jdGlvbiBpc1ZhbGlkQ3NzKCkge1xuICAgICAgICB2YXIgY3NzVGV4dCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogXCJcIjtcbiAgICAgICAgdmFyIGlzSFRNTCA9IGNzc1RleHQudHJpbSgpLmNoYXJBdCgwKSA9PT0gXCI8XCI7XG4gICAgICAgIHJldHVybiAhaXNIVE1MO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvbkVycm9yKHhociwgdXJsSW5kZXgpIHtcbiAgICAgICAgc2V0dGluZ3Mub25FcnJvcih4aHIsIHVybEFycmF5W3VybEluZGV4XSwgdXJsSW5kZXgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvblN1Y2Nlc3MocmVzcG9uc2VUZXh0LCB1cmxJbmRleCkge1xuICAgICAgICB2YXIgcmV0dXJuVmFsID0gc2V0dGluZ3Mub25TdWNjZXNzKHJlc3BvbnNlVGV4dCwgdXJsQXJyYXlbdXJsSW5kZXhdLCB1cmxJbmRleCk7XG4gICAgICAgIHJlc3BvbnNlVGV4dCA9IHJldHVyblZhbCA9PT0gZmFsc2UgPyBcIlwiIDogcmV0dXJuVmFsIHx8IHJlc3BvbnNlVGV4dDtcbiAgICAgICAgdXJsUXVldWVbdXJsSW5kZXhdID0gcmVzcG9uc2VUZXh0O1xuICAgICAgICBpZiAodXJsUXVldWUuaW5kZXhPZihudWxsKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIHNldHRpbmdzLm9uQ29tcGxldGUodXJsUXVldWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHZhciBwYXJzZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICB1cmxBcnJheS5mb3JFYWNoKGZ1bmN0aW9uKHVybCwgaSkge1xuICAgICAgICBwYXJzZXIuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCB1cmwpO1xuICAgICAgICBwYXJzZXIuaHJlZiA9IFN0cmluZyhwYXJzZXIuaHJlZik7XG4gICAgICAgIHZhciBpc0lFbHRlOSA9IEJvb2xlYW4oZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgICAgIHZhciBpc0lFbHRlOUNPUlMgPSBpc0lFbHRlOSAmJiBwYXJzZXIuaG9zdC5zcGxpdChcIjpcIilbMF0gIT09IGxvY2F0aW9uLmhvc3Quc3BsaXQoXCI6XCIpWzBdO1xuICAgICAgICBpZiAoaXNJRWx0ZTlDT1JTKSB7XG4gICAgICAgICAgICB2YXIgaXNTYW1lUHJvdG9jb2wgPSBwYXJzZXIucHJvdG9jb2wgPT09IGxvY2F0aW9uLnByb3RvY29sO1xuICAgICAgICAgICAgaWYgKGlzU2FtZVByb3RvY29sKSB7XG4gICAgICAgICAgICAgICAgdmFyIHhkciA9IG5ldyBYRG9tYWluUmVxdWVzdCgpO1xuICAgICAgICAgICAgICAgIHhkci5vcGVuKFwiR0VUXCIsIHVybCk7XG4gICAgICAgICAgICAgICAgeGRyLnRpbWVvdXQgPSAwO1xuICAgICAgICAgICAgICAgIHhkci5vbnByb2dyZXNzID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuICAgICAgICAgICAgICAgIHhkci5vbnRpbWVvdXQgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4gICAgICAgICAgICAgICAgeGRyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNWYWxpZENzcyh4ZHIucmVzcG9uc2VUZXh0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb25TdWNjZXNzKHhkci5yZXNwb25zZVRleHQsIGkpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgb25FcnJvcih4ZHIsIGkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB4ZHIub25lcnJvciA9IGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgICAgICAgICBvbkVycm9yKHhkciwgaSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB4ZHIuc2VuZCgpO1xuICAgICAgICAgICAgICAgIH0sIDApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJJbnRlcm5ldCBFeHBsb3JlciA5IENyb3NzLU9yaWdpbiAoQ09SUykgcmVxdWVzdHMgbXVzdCB1c2UgdGhlIHNhbWUgcHJvdG9jb2wgKFwiLmNvbmNhdCh1cmwsIFwiKVwiKSk7XG4gICAgICAgICAgICAgICAgb25FcnJvcihudWxsLCBpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgICAgIHhoci5vcGVuKFwiR0VUXCIsIHVybCk7XG4gICAgICAgICAgICBpZiAoc2V0dGluZ3MubWltZVR5cGUgJiYgeGhyLm92ZXJyaWRlTWltZVR5cGUpIHtcbiAgICAgICAgICAgICAgICB4aHIub3ZlcnJpZGVNaW1lVHlwZShzZXR0aW5ncy5taW1lVHlwZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXR0aW5ncy5vbkJlZm9yZVNlbmQoeGhyLCB1cmwsIGkpO1xuICAgICAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PT0gMjAwICYmIGlzVmFsaWRDc3MoeGhyLnJlc3BvbnNlVGV4dCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU3VjY2Vzcyh4aHIucmVzcG9uc2VUZXh0LCBpKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uRXJyb3IoeGhyLCBpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB4aHIuc2VuZCgpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbi8qKlxuICogR2V0cyBDU1MgZGF0YSBmcm9tIDxzdHlsZT4gYW5kIDxsaW5rPiBub2RlcyAoaW5jbHVkaW5nIEBpbXBvcnRzKSwgdGhlblxuICogcmV0dXJucyBkYXRhIGluIG9yZGVyIHByb2Nlc3NlZCBieSBET00uIEFsbG93cyBzcGVjaWZ5aW5nIG5vZGVzIHRvXG4gKiBpbmNsdWRlL2V4Y2x1ZGUgYW5kIGZpbHRlcmluZyBDU1MgZGF0YSB1c2luZyBSZWdFeC5cbiAqXG4gKiBAcHJlc2VydmVcbiAqIEBwYXJhbSB7b2JqZWN0fSAgIFtvcHRpb25zXSBUaGUgb3B0aW9ucyBvYmplY3RcbiAqIEBwYXJhbSB7b2JqZWN0fSAgIFtvcHRpb25zLnJvb3RFbGVtZW50PWRvY3VtZW50XSBSb290IGVsZW1lbnQgdG8gdHJhdmVyc2UgZm9yXG4gKiAgICAgICAgICAgICAgICAgICA8bGluaz4gYW5kIDxzdHlsZT4gbm9kZXMuXG4gKiBAcGFyYW0ge3N0cmluZ30gICBbb3B0aW9ucy5pbmNsdWRlXSBDU1Mgc2VsZWN0b3IgbWF0Y2hpbmcgPGxpbms+IGFuZCA8c3R5bGU+XG4gKiAgICAgICAgICAgICAgICAgICBub2RlcyB0byBpbmNsdWRlXG4gKiBAcGFyYW0ge3N0cmluZ30gICBbb3B0aW9ucy5leGNsdWRlXSBDU1Mgc2VsZWN0b3IgbWF0Y2hpbmcgPGxpbms+IGFuZCA8c3R5bGU+XG4gKiAgICAgICAgICAgICAgICAgICBub2RlcyB0byBleGNsdWRlXG4gKiBAcGFyYW0ge29iamVjdH0gICBbb3B0aW9ucy5maWx0ZXJdIFJlZ3VsYXIgZXhwcmVzc2lvbiB1c2VkIHRvIGZpbHRlciBub2RlIENTU1xuICogICAgICAgICAgICAgICAgICAgZGF0YS4gRWFjaCBibG9jayBvZiBDU1MgZGF0YSBpcyB0ZXN0ZWQgYWdhaW5zdCB0aGUgZmlsdGVyLFxuICogICAgICAgICAgICAgICAgICAgYW5kIG9ubHkgbWF0Y2hpbmcgZGF0YSBpcyBpbmNsdWRlZC5cbiAqIEBwYXJhbSB7b2JqZWN0fSAgIFtvcHRpb25zLnVzZUNTU09NPWZhbHNlXSBEZXRlcm1pbmVzIGlmIENTUyBkYXRhIHdpbGwgYmVcbiAqICAgICAgICAgICAgICAgICAgIGNvbGxlY3RlZCBmcm9tIGEgc3R5bGVzaGVldCdzIHJ1bnRpbWUgdmFsdWVzIGluc3RlYWQgb2YgaXRzXG4gKiAgICAgICAgICAgICAgICAgICB0ZXh0IGNvbnRlbnQuIFRoaXMgaXMgcmVxdWlyZWQgdG8gZ2V0IGFjY3VyYXRlIENTUyBkYXRhXG4gKiAgICAgICAgICAgICAgICAgICB3aGVuIGEgc3R5bGVzaGVldCBoYXMgYmVlbiBtb2RpZmllZCB1c2luZyB0aGUgZGVsZXRlUnVsZSgpXG4gKiAgICAgICAgICAgICAgICAgICBvciBpbnNlcnRSdWxlKCkgbWV0aG9kcyBiZWNhdXNlIHRoZXNlIG1vZGlmaWNhdGlvbnMgd2lsbFxuICogICAgICAgICAgICAgICAgICAgbm90IGJlIHJlZmxlY3RlZCBpbiB0aGUgc3R5bGVzaGVldCdzIHRleHQgY29udGVudC5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IFtvcHRpb25zLm9uQmVmb3JlU2VuZF0gQ2FsbGJhY2sgYmVmb3JlIFhIUiBpcyBzZW50LiBQYXNzZXNcbiAqICAgICAgICAgICAgICAgICAgIDEpIHRoZSBYSFIgb2JqZWN0LCAyKSBzb3VyY2Ugbm9kZSByZWZlcmVuY2UsIGFuZCAzKSB0aGVcbiAqICAgICAgICAgICAgICAgICAgIHNvdXJjZSBVUkwgYXMgYXJndW1lbnRzLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gW29wdGlvbnMub25TdWNjZXNzXSBDYWxsYmFjayBvbiBlYWNoIENTUyBub2RlIHJlYWQuIFBhc3Nlc1xuICogICAgICAgICAgICAgICAgICAgMSkgQ1NTIHRleHQsIDIpIHNvdXJjZSBub2RlIHJlZmVyZW5jZSwgYW5kIDMpIHRoZSBzb3VyY2VcbiAqICAgICAgICAgICAgICAgICAgIFVSTCBhcyBhcmd1bWVudHMuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBbb3B0aW9ucy5vbkVycm9yXSBDYWxsYmFjayBvbiBlYWNoIGVycm9yLiBQYXNzZXMgMSkgdGhlIFhIUlxuICogICAgICAgICAgICAgICAgICAgb2JqZWN0IGZvciBpbnNwZWN0aW9uLCAyKSBzb3VyZSBub2RlIHJlZmVyZW5jZSwgYW5kIDMpIHRoZVxuICogICAgICAgICAgICAgICAgICAgc291cmNlIFVSTCB0aGF0IGZhaWxlZCAoZWl0aGVyIGEgPGxpbms+IGhyZWYgb3IgYW4gQGltcG9ydClcbiAqICAgICAgICAgICAgICAgICAgIGFzIGFyZ3VtZW50c1xuICogQHBhcmFtIHtmdW5jdGlvbn0gW29wdGlvbnMub25Db21wbGV0ZV0gQ2FsbGJhY2sgYWZ0ZXIgYWxsIG5vZGVzIGhhdmUgYmVlblxuICogICAgICAgICAgICAgICAgICAgcHJvY2Vzc2VkLiBQYXNzZXMgMSkgY29uY2F0ZW5hdGVkIENTUyB0ZXh0LCAyKSBhbiBhcnJheSBvZlxuICogICAgICAgICAgICAgICAgICAgQ1NTIHRleHQgaW4gRE9NIG9yZGVyLCBhbmQgMykgYW4gYXJyYXkgb2Ygbm9kZXMgaW4gRE9NXG4gKiAgICAgICAgICAgICAgICAgICBvcmRlciBhcyBhcmd1bWVudHMuXG4gKlxuICogQGV4YW1wbGVcbiAqXG4gKiAgIGdldENzc0RhdGEoe1xuICogICAgIHJvb3RFbGVtZW50OiBkb2N1bWVudCxcbiAqICAgICBpbmNsdWRlICAgIDogJ3N0eWxlLGxpbmtbcmVsPVwic3R5bGVzaGVldFwiXScsXG4gKiAgICAgZXhjbHVkZSAgICA6ICdbaHJlZj1cInNraXAuY3NzXCJdJyxcbiAqICAgICBmaWx0ZXIgICAgIDogL3JlZC8sXG4gKiAgICAgdXNlQ1NTT00gICA6IGZhbHNlLFxuICogICAgIG9uQmVmb3JlU2VuZCh4aHIsIG5vZGUsIHVybCkge1xuICogICAgICAgLy8gLi4uXG4gKiAgICAgfVxuICogICAgIG9uU3VjY2Vzcyhjc3NUZXh0LCBub2RlLCB1cmwpIHtcbiAqICAgICAgIC8vIC4uLlxuICogICAgIH1cbiAqICAgICBvbkVycm9yKHhociwgbm9kZSwgdXJsKSB7XG4gKiAgICAgICAvLyAuLi5cbiAqICAgICB9LFxuICogICAgIG9uQ29tcGxldGUoY3NzVGV4dCwgY3NzQXJyYXksIG5vZGVBcnJheSkge1xuICogICAgICAgLy8gLi4uXG4gKiAgICAgfVxuICogICB9KTtcbiAqLyBmdW5jdGlvbiBnZXRDc3NEYXRhKG9wdGlvbnMpIHtcbiAgICB2YXIgcmVnZXggPSB7XG4gICAgICAgIGNzc0NvbW1lbnRzOiAvXFwvXFwqW1xcc1xcU10rP1xcKlxcLy9nLFxuICAgICAgICBjc3NJbXBvcnRzOiAvKD86QGltcG9ydFxccyopKD86dXJsXFwoXFxzKik/KD86WydcIl0pKFteJ1wiXSopKD86WydcIl0pKD86XFxzKlxcKSk/KD86W147XSo7KS9nXG4gICAgfTtcbiAgICB2YXIgc2V0dGluZ3MgPSB7XG4gICAgICAgIHJvb3RFbGVtZW50OiBvcHRpb25zLnJvb3RFbGVtZW50IHx8IGRvY3VtZW50LFxuICAgICAgICBpbmNsdWRlOiBvcHRpb25zLmluY2x1ZGUgfHwgJ3N0eWxlLGxpbmtbcmVsPVwic3R5bGVzaGVldFwiXScsXG4gICAgICAgIGV4Y2x1ZGU6IG9wdGlvbnMuZXhjbHVkZSB8fCBudWxsLFxuICAgICAgICBmaWx0ZXI6IG9wdGlvbnMuZmlsdGVyIHx8IG51bGwsXG4gICAgICAgIHVzZUNTU09NOiBvcHRpb25zLnVzZUNTU09NIHx8IGZhbHNlLFxuICAgICAgICBvbkJlZm9yZVNlbmQ6IG9wdGlvbnMub25CZWZvcmVTZW5kIHx8IEZ1bmN0aW9uLnByb3RvdHlwZSxcbiAgICAgICAgb25TdWNjZXNzOiBvcHRpb25zLm9uU3VjY2VzcyB8fCBGdW5jdGlvbi5wcm90b3R5cGUsXG4gICAgICAgIG9uRXJyb3I6IG9wdGlvbnMub25FcnJvciB8fCBGdW5jdGlvbi5wcm90b3R5cGUsXG4gICAgICAgIG9uQ29tcGxldGU6IG9wdGlvbnMub25Db21wbGV0ZSB8fCBGdW5jdGlvbi5wcm90b3R5cGVcbiAgICB9O1xuICAgIHZhciBzb3VyY2VOb2RlcyA9IEFycmF5LmFwcGx5KG51bGwsIHNldHRpbmdzLnJvb3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2V0dGluZ3MuaW5jbHVkZSkpLmZpbHRlcihmdW5jdGlvbihub2RlKSB7XG4gICAgICAgIHJldHVybiAhbWF0Y2hlc1NlbGVjdG9yKG5vZGUsIHNldHRpbmdzLmV4Y2x1ZGUpO1xuICAgIH0pO1xuICAgIHZhciBjc3NBcnJheSA9IEFycmF5LmFwcGx5KG51bGwsIEFycmF5KHNvdXJjZU5vZGVzLmxlbmd0aCkpLm1hcChmdW5jdGlvbih4KSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH0pO1xuICAgIGZ1bmN0aW9uIGhhbmRsZUNvbXBsZXRlKCkge1xuICAgICAgICB2YXIgaXNDb21wbGV0ZSA9IGNzc0FycmF5LmluZGV4T2YobnVsbCkgPT09IC0xO1xuICAgICAgICBpZiAoaXNDb21wbGV0ZSkge1xuICAgICAgICAgICAgdmFyIGNzc1RleHQgPSBjc3NBcnJheS5qb2luKFwiXCIpO1xuICAgICAgICAgICAgc2V0dGluZ3Mub25Db21wbGV0ZShjc3NUZXh0LCBjc3NBcnJheSwgc291cmNlTm9kZXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGhhbmRsZVN1Y2Nlc3MoY3NzVGV4dCwgY3NzSW5kZXgsIG5vZGUsIHNvdXJjZVVybCkge1xuICAgICAgICB2YXIgcmV0dXJuVmFsID0gc2V0dGluZ3Mub25TdWNjZXNzKGNzc1RleHQsIG5vZGUsIHNvdXJjZVVybCk7XG4gICAgICAgIGNzc1RleHQgPSByZXR1cm5WYWwgIT09IHVuZGVmaW5lZCAmJiBCb29sZWFuKHJldHVyblZhbCkgPT09IGZhbHNlID8gXCJcIiA6IHJldHVyblZhbCB8fCBjc3NUZXh0O1xuICAgICAgICByZXNvbHZlSW1wb3J0cyhjc3NUZXh0LCBub2RlLCBzb3VyY2VVcmwsIGZ1bmN0aW9uKHJlc29sdmVkQ3NzVGV4dCwgZXJyb3JEYXRhKSB7XG4gICAgICAgICAgICBpZiAoY3NzQXJyYXlbY3NzSW5kZXhdID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgZXJyb3JEYXRhLmZvckVhY2goZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2V0dGluZ3Mub25FcnJvcihkYXRhLnhociwgbm9kZSwgZGF0YS51cmwpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmICghc2V0dGluZ3MuZmlsdGVyIHx8IHNldHRpbmdzLmZpbHRlci50ZXN0KHJlc29sdmVkQ3NzVGV4dCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3NzQXJyYXlbY3NzSW5kZXhdID0gcmVzb2x2ZWRDc3NUZXh0O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNzc0FycmF5W2Nzc0luZGV4XSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGhhbmRsZUNvbXBsZXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBwYXJzZUltcG9ydERhdGEoY3NzVGV4dCwgYmFzZVVybCkge1xuICAgICAgICB2YXIgaWdub3JlUnVsZXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IFtdO1xuICAgICAgICB2YXIgaW1wb3J0RGF0YSA9IHt9O1xuICAgICAgICBpbXBvcnREYXRhLnJ1bGVzID0gKGNzc1RleHQucmVwbGFjZShyZWdleC5jc3NDb21tZW50cywgXCJcIikubWF0Y2gocmVnZXguY3NzSW1wb3J0cykgfHwgW10pLmZpbHRlcihmdW5jdGlvbihydWxlKSB7XG4gICAgICAgICAgICByZXR1cm4gaWdub3JlUnVsZXMuaW5kZXhPZihydWxlKSA9PT0gLTE7XG4gICAgICAgIH0pO1xuICAgICAgICBpbXBvcnREYXRhLnVybHMgPSBpbXBvcnREYXRhLnJ1bGVzLm1hcChmdW5jdGlvbihydWxlKSB7XG4gICAgICAgICAgICByZXR1cm4gcnVsZS5yZXBsYWNlKHJlZ2V4LmNzc0ltcG9ydHMsIFwiJDFcIik7XG4gICAgICAgIH0pO1xuICAgICAgICBpbXBvcnREYXRhLmFic29sdXRlVXJscyA9IGltcG9ydERhdGEudXJscy5tYXAoZnVuY3Rpb24odXJsKSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0RnVsbFVybCh1cmwsIGJhc2VVcmwpO1xuICAgICAgICB9KTtcbiAgICAgICAgaW1wb3J0RGF0YS5hYnNvbHV0ZVJ1bGVzID0gaW1wb3J0RGF0YS5ydWxlcy5tYXAoZnVuY3Rpb24ocnVsZSwgaSkge1xuICAgICAgICAgICAgdmFyIG9sZFVybCA9IGltcG9ydERhdGEudXJsc1tpXTtcbiAgICAgICAgICAgIHZhciBuZXdVcmwgPSBnZXRGdWxsVXJsKGltcG9ydERhdGEuYWJzb2x1dGVVcmxzW2ldLCBiYXNlVXJsKTtcbiAgICAgICAgICAgIHJldHVybiBydWxlLnJlcGxhY2Uob2xkVXJsLCBuZXdVcmwpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGltcG9ydERhdGE7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlc29sdmVJbXBvcnRzKGNzc1RleHQsIG5vZGUsIGJhc2VVcmwsIGNhbGxiYWNrRm4pIHtcbiAgICAgICAgdmFyIF9fZXJyb3JEYXRhID0gYXJndW1lbnRzLmxlbmd0aCA+IDQgJiYgYXJndW1lbnRzWzRdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbNF0gOiBbXTtcbiAgICAgICAgdmFyIF9fZXJyb3JSdWxlcyA9IGFyZ3VtZW50cy5sZW5ndGggPiA1ICYmIGFyZ3VtZW50c1s1XSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzVdIDogW107XG4gICAgICAgIHZhciBpbXBvcnREYXRhID0gcGFyc2VJbXBvcnREYXRhKGNzc1RleHQsIGJhc2VVcmwsIF9fZXJyb3JSdWxlcyk7XG4gICAgICAgIGlmIChpbXBvcnREYXRhLnJ1bGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgZ2V0VXJscyhpbXBvcnREYXRhLmFic29sdXRlVXJscywge1xuICAgICAgICAgICAgICAgIG9uQmVmb3JlU2VuZDogZnVuY3Rpb24gb25CZWZvcmVTZW5kKHhociwgdXJsLCB1cmxJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICBzZXR0aW5ncy5vbkJlZm9yZVNlbmQoeGhyLCBub2RlLCB1cmwpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25TdWNjZXNzOiBmdW5jdGlvbiBvblN1Y2Nlc3MoY3NzVGV4dCwgdXJsLCB1cmxJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmV0dXJuVmFsID0gc2V0dGluZ3Mub25TdWNjZXNzKGNzc1RleHQsIG5vZGUsIHVybCk7XG4gICAgICAgICAgICAgICAgICAgIGNzc1RleHQgPSByZXR1cm5WYWwgPT09IGZhbHNlID8gXCJcIiA6IHJldHVyblZhbCB8fCBjc3NUZXh0O1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzcG9uc2VJbXBvcnREYXRhID0gcGFyc2VJbXBvcnREYXRhKGNzc1RleHQsIHVybCwgX19lcnJvclJ1bGVzKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VJbXBvcnREYXRhLnJ1bGVzLmZvckVhY2goZnVuY3Rpb24ocnVsZSwgaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3NzVGV4dCA9IGNzc1RleHQucmVwbGFjZShydWxlLCByZXNwb25zZUltcG9ydERhdGEuYWJzb2x1dGVSdWxlc1tpXSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3NzVGV4dDtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uRXJyb3I6IGZ1bmN0aW9uIG9uRXJyb3IoeGhyLCB1cmwsIHVybEluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIF9fZXJyb3JEYXRhLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgeGhyOiB4aHIsXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IHVybFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgX19lcnJvclJ1bGVzLnB1c2goaW1wb3J0RGF0YS5ydWxlc1t1cmxJbmRleF0pO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlSW1wb3J0cyhjc3NUZXh0LCBub2RlLCBiYXNlVXJsLCBjYWxsYmFja0ZuLCBfX2Vycm9yRGF0YSwgX19lcnJvclJ1bGVzKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uQ29tcGxldGU6IGZ1bmN0aW9uIG9uQ29tcGxldGUocmVzcG9uc2VBcnJheSkge1xuICAgICAgICAgICAgICAgICAgICByZXNwb25zZUFycmF5LmZvckVhY2goZnVuY3Rpb24oaW1wb3J0VGV4dCwgaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3NzVGV4dCA9IGNzc1RleHQucmVwbGFjZShpbXBvcnREYXRhLnJ1bGVzW2ldLCBpbXBvcnRUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmVJbXBvcnRzKGNzc1RleHQsIG5vZGUsIGJhc2VVcmwsIGNhbGxiYWNrRm4sIF9fZXJyb3JEYXRhLCBfX2Vycm9yUnVsZXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FsbGJhY2tGbihjc3NUZXh0LCBfX2Vycm9yRGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHNvdXJjZU5vZGVzLmxlbmd0aCkge1xuICAgICAgICBzb3VyY2VOb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uKG5vZGUsIGkpIHtcbiAgICAgICAgICAgIHZhciBsaW5rSHJlZiA9IG5vZGUuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKTtcbiAgICAgICAgICAgIHZhciBsaW5rUmVsID0gbm9kZS5nZXRBdHRyaWJ1dGUoXCJyZWxcIik7XG4gICAgICAgICAgICB2YXIgaXNMaW5rID0gbm9kZS5ub2RlTmFtZSA9PT0gXCJMSU5LXCIgJiYgbGlua0hyZWYgJiYgbGlua1JlbCAmJiBsaW5rUmVsLnRvTG93ZXJDYXNlKCkgPT09IFwic3R5bGVzaGVldFwiO1xuICAgICAgICAgICAgdmFyIGlzU3R5bGUgPSBub2RlLm5vZGVOYW1lID09PSBcIlNUWUxFXCI7XG4gICAgICAgICAgICBpZiAoaXNMaW5rKSB7XG4gICAgICAgICAgICAgICAgZ2V0VXJscyhsaW5rSHJlZiwge1xuICAgICAgICAgICAgICAgICAgICBtaW1lVHlwZTogXCJ0ZXh0L2Nzc1wiLFxuICAgICAgICAgICAgICAgICAgICBvbkJlZm9yZVNlbmQ6IGZ1bmN0aW9uIG9uQmVmb3JlU2VuZCh4aHIsIHVybCwgdXJsSW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzLm9uQmVmb3JlU2VuZCh4aHIsIG5vZGUsIHVybCk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uU3VjY2VzczogZnVuY3Rpb24gb25TdWNjZXNzKGNzc1RleHQsIHVybCwgdXJsSW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzb3VyY2VVcmwgPSBnZXRGdWxsVXJsKGxpbmtIcmVmLCBsb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVN1Y2Nlc3MoY3NzVGV4dCwgaSwgbm9kZSwgc291cmNlVXJsKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgb25FcnJvcjogZnVuY3Rpb24gb25FcnJvcih4aHIsIHVybCwgdXJsSW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNzc0FycmF5W2ldID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzLm9uRXJyb3IoeGhyLCBub2RlLCB1cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpc1N0eWxlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNzc1RleHQgPSBub2RlLnRleHRDb250ZW50O1xuICAgICAgICAgICAgICAgIGlmIChzZXR0aW5ncy51c2VDU1NPTSkge1xuICAgICAgICAgICAgICAgICAgICBjc3NUZXh0ID0gQXJyYXkuYXBwbHkobnVsbCwgbm9kZS5zaGVldC5jc3NSdWxlcykubWFwKGZ1bmN0aW9uKHJ1bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBydWxlLmNzc1RleHQ7XG4gICAgICAgICAgICAgICAgICAgIH0pLmpvaW4oXCJcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGhhbmRsZVN1Y2Nlc3MoY3NzVGV4dCwgaSwgbm9kZSwgbG9jYXRpb24uaHJlZik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNzc0FycmF5W2ldID0gXCJcIjtcbiAgICAgICAgICAgICAgICBoYW5kbGVDb21wbGV0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBzZXR0aW5ncy5vbkNvbXBsZXRlKFwiXCIsIFtdKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdldEZ1bGxVcmwodXJsKSB7XG4gICAgdmFyIGJhc2UgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGxvY2F0aW9uLmhyZWY7XG4gICAgdmFyIGQgPSBkb2N1bWVudC5pbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnQoXCJcIik7XG4gICAgdmFyIGIgPSBkLmNyZWF0ZUVsZW1lbnQoXCJiYXNlXCIpO1xuICAgIHZhciBhID0gZC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBkLmhlYWQuYXBwZW5kQ2hpbGQoYik7XG4gICAgZC5ib2R5LmFwcGVuZENoaWxkKGEpO1xuICAgIGIuaHJlZiA9IGJhc2U7XG4gICAgYS5ocmVmID0gdXJsO1xuICAgIHJldHVybiBhLmhyZWY7XG59XG5cbmZ1bmN0aW9uIG1hdGNoZXNTZWxlY3RvcihlbG0sIHNlbGVjdG9yKSB7XG4gICAgdmFyIG1hdGNoZXMgPSBlbG0ubWF0Y2hlcyB8fCBlbG0ubWF0Y2hlc1NlbGVjdG9yIHx8IGVsbS53ZWJraXRNYXRjaGVzU2VsZWN0b3IgfHwgZWxtLm1vek1hdGNoZXNTZWxlY3RvciB8fCBlbG0ubXNNYXRjaGVzU2VsZWN0b3IgfHwgZWxtLm9NYXRjaGVzU2VsZWN0b3I7XG4gICAgcmV0dXJuIG1hdGNoZXMuY2FsbChlbG0sIHNlbGVjdG9yKTtcbn1cblxudmFyIGJhbGFuY2VkTWF0Y2ggPSBiYWxhbmNlZDtcblxuZnVuY3Rpb24gYmFsYW5jZWQoYSwgYiwgc3RyKSB7XG4gICAgaWYgKGEgaW5zdGFuY2VvZiBSZWdFeHApIGEgPSBtYXliZU1hdGNoKGEsIHN0cik7XG4gICAgaWYgKGIgaW5zdGFuY2VvZiBSZWdFeHApIGIgPSBtYXliZU1hdGNoKGIsIHN0cik7XG4gICAgdmFyIHIgPSByYW5nZShhLCBiLCBzdHIpO1xuICAgIHJldHVybiByICYmIHtcbiAgICAgICAgc3RhcnQ6IHJbMF0sXG4gICAgICAgIGVuZDogclsxXSxcbiAgICAgICAgcHJlOiBzdHIuc2xpY2UoMCwgclswXSksXG4gICAgICAgIGJvZHk6IHN0ci5zbGljZShyWzBdICsgYS5sZW5ndGgsIHJbMV0pLFxuICAgICAgICBwb3N0OiBzdHIuc2xpY2UoclsxXSArIGIubGVuZ3RoKVxuICAgIH07XG59XG5cbmZ1bmN0aW9uIG1heWJlTWF0Y2gocmVnLCBzdHIpIHtcbiAgICB2YXIgbSA9IHN0ci5tYXRjaChyZWcpO1xuICAgIHJldHVybiBtID8gbVswXSA6IG51bGw7XG59XG5cbmJhbGFuY2VkLnJhbmdlID0gcmFuZ2U7XG5cbmZ1bmN0aW9uIHJhbmdlKGEsIGIsIHN0cikge1xuICAgIHZhciBiZWdzLCBiZWcsIGxlZnQsIHJpZ2h0LCByZXN1bHQ7XG4gICAgdmFyIGFpID0gc3RyLmluZGV4T2YoYSk7XG4gICAgdmFyIGJpID0gc3RyLmluZGV4T2YoYiwgYWkgKyAxKTtcbiAgICB2YXIgaSA9IGFpO1xuICAgIGlmIChhaSA+PSAwICYmIGJpID4gMCkge1xuICAgICAgICBiZWdzID0gW107XG4gICAgICAgIGxlZnQgPSBzdHIubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoaSA+PSAwICYmICFyZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChpID09IGFpKSB7XG4gICAgICAgICAgICAgICAgYmVncy5wdXNoKGkpO1xuICAgICAgICAgICAgICAgIGFpID0gc3RyLmluZGV4T2YoYSwgaSArIDEpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChiZWdzLmxlbmd0aCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gWyBiZWdzLnBvcCgpLCBiaSBdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBiZWcgPSBiZWdzLnBvcCgpO1xuICAgICAgICAgICAgICAgIGlmIChiZWcgPCBsZWZ0KSB7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQgPSBiZWc7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0ID0gYmk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJpID0gc3RyLmluZGV4T2YoYiwgaSArIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaSA9IGFpIDwgYmkgJiYgYWkgPj0gMCA/IGFpIDogYmk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJlZ3MubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBbIGxlZnQsIHJpZ2h0IF07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gcGFyc2VDc3MoY3NzKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciBkZWZhdWx0cyA9IHtcbiAgICAgICAgb25seVZhcnM6IGZhbHNlLFxuICAgICAgICByZW1vdmVDb21tZW50czogZmFsc2VcbiAgICB9O1xuICAgIHZhciBzZXR0aW5ncyA9IF9leHRlbmRzKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG4gICAgdmFyIGVycm9ycyA9IFtdO1xuICAgIGZ1bmN0aW9uIGVycm9yKG1zZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDU1MgcGFyc2UgZXJyb3I6IFwiLmNvbmNhdChtc2cpKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gbWF0Y2gocmUpIHtcbiAgICAgICAgdmFyIG0gPSByZS5leGVjKGNzcyk7XG4gICAgICAgIGlmIChtKSB7XG4gICAgICAgICAgICBjc3MgPSBjc3Muc2xpY2UobVswXS5sZW5ndGgpO1xuICAgICAgICAgICAgcmV0dXJuIG07XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gb3BlbigpIHtcbiAgICAgICAgcmV0dXJuIG1hdGNoKC9ee1xccyovKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2xvc2UoKSB7XG4gICAgICAgIHJldHVybiBtYXRjaCgvXn0vKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gd2hpdGVzcGFjZSgpIHtcbiAgICAgICAgbWF0Y2goL15cXHMqLyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNvbW1lbnQoKSB7XG4gICAgICAgIHdoaXRlc3BhY2UoKTtcbiAgICAgICAgaWYgKGNzc1swXSAhPT0gXCIvXCIgfHwgY3NzWzFdICE9PSBcIipcIikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpID0gMjtcbiAgICAgICAgd2hpbGUgKGNzc1tpXSAmJiAoY3NzW2ldICE9PSBcIipcIiB8fCBjc3NbaSArIDFdICE9PSBcIi9cIikpIHtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWNzc1tpXSkge1xuICAgICAgICAgICAgcmV0dXJuIGVycm9yKFwiZW5kIG9mIGNvbW1lbnQgaXMgbWlzc2luZ1wiKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc3RyID0gY3NzLnNsaWNlKDIsIGkpO1xuICAgICAgICBjc3MgPSBjc3Muc2xpY2UoaSArIDIpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdHlwZTogXCJjb21tZW50XCIsXG4gICAgICAgICAgICBjb21tZW50OiBzdHJcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY29tbWVudHMoKSB7XG4gICAgICAgIHZhciBjbW50cyA9IFtdO1xuICAgICAgICB2YXIgYztcbiAgICAgICAgd2hpbGUgKGMgPSBjb21tZW50KCkpIHtcbiAgICAgICAgICAgIGNtbnRzLnB1c2goYyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNldHRpbmdzLnJlbW92ZUNvbW1lbnRzID8gW10gOiBjbW50cztcbiAgICB9XG4gICAgZnVuY3Rpb24gc2VsZWN0b3IoKSB7XG4gICAgICAgIHdoaXRlc3BhY2UoKTtcbiAgICAgICAgd2hpbGUgKGNzc1swXSA9PT0gXCJ9XCIpIHtcbiAgICAgICAgICAgIGVycm9yKFwiZXh0cmEgY2xvc2luZyBicmFja2V0XCIpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBtID0gbWF0Y2goL14oKFwiKD86XFxcXFwifFteXCJdKSpcInwnKD86XFxcXCd8W14nXSkqJ3xbXntdKSspLyk7XG4gICAgICAgIGlmIChtKSB7XG4gICAgICAgICAgICByZXR1cm4gbVswXS50cmltKCkucmVwbGFjZSgvXFwvXFwqKFteKl18W1xcclxcbl18KFxcKisoW14qXFwvXXxbXFxyXFxuXSkpKSpcXCpcXC8rL2csIFwiXCIpLnJlcGxhY2UoL1wiKD86XFxcXFwifFteXCJdKSpcInwnKD86XFxcXCd8W14nXSkqJy9nLCBmdW5jdGlvbihtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG0ucmVwbGFjZSgvLC9nLCBcIuKAjFwiKTtcbiAgICAgICAgICAgIH0pLnNwbGl0KC9cXHMqKD8hW14oXSpcXCkpLFxccyovKS5tYXAoZnVuY3Rpb24ocykge1xuICAgICAgICAgICAgICAgIHJldHVybiBzLnJlcGxhY2UoL1xcdTIwMEMvZywgXCIsXCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gZGVjbGFyYXRpb24oKSB7XG4gICAgICAgIG1hdGNoKC9eKFs7XFxzXSopKy8pO1xuICAgICAgICB2YXIgY29tbWVudF9yZWdleHAgPSAvXFwvXFwqW14qXSpcXCorKFteXFwvKl1bXipdKlxcKispKlxcLy9nO1xuICAgICAgICB2YXIgcHJvcCA9IG1hdGNoKC9eKFxcKj9bLSNcXC8qXFxcXFxcd10rKFxcW1swLTlhLXpfLV0rXFxdKT8pXFxzKi8pO1xuICAgICAgICBpZiAoIXByb3ApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBwcm9wID0gcHJvcFswXS50cmltKCk7XG4gICAgICAgIGlmICghbWF0Y2goL146XFxzKi8pKSB7XG4gICAgICAgICAgICByZXR1cm4gZXJyb3IoXCJwcm9wZXJ0eSBtaXNzaW5nICc6J1wiKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdmFsID0gbWF0Y2goL14oKD86XFwvXFwqLio/XFwqXFwvfCcoPzpcXFxcJ3wuKSo/J3xcIig/OlxcXFxcInwuKSo/XCJ8XFwoKFxccyonKD86XFxcXCd8LikqPyd8XCIoPzpcXFxcXCJ8LikqP1wifFteKV0qPylcXHMqXFwpfFtefTtdKSspLyk7XG4gICAgICAgIHZhciByZXQgPSB7XG4gICAgICAgICAgICB0eXBlOiBcImRlY2xhcmF0aW9uXCIsXG4gICAgICAgICAgICBwcm9wZXJ0eTogcHJvcC5yZXBsYWNlKGNvbW1lbnRfcmVnZXhwLCBcIlwiKSxcbiAgICAgICAgICAgIHZhbHVlOiB2YWwgPyB2YWxbMF0ucmVwbGFjZShjb21tZW50X3JlZ2V4cCwgXCJcIikudHJpbSgpIDogXCJcIlxuICAgICAgICB9O1xuICAgICAgICBtYXRjaCgvXls7XFxzXSovKTtcbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG4gICAgZnVuY3Rpb24gZGVjbGFyYXRpb25zKCkge1xuICAgICAgICBpZiAoIW9wZW4oKSkge1xuICAgICAgICAgICAgcmV0dXJuIGVycm9yKFwibWlzc2luZyAneydcIik7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGQ7XG4gICAgICAgIHZhciBkZWNscyA9IGNvbW1lbnRzKCk7XG4gICAgICAgIHdoaWxlIChkID0gZGVjbGFyYXRpb24oKSkge1xuICAgICAgICAgICAgZGVjbHMucHVzaChkKTtcbiAgICAgICAgICAgIGRlY2xzID0gZGVjbHMuY29uY2F0KGNvbW1lbnRzKCkpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghY2xvc2UoKSkge1xuICAgICAgICAgICAgcmV0dXJuIGVycm9yKFwibWlzc2luZyAnfSdcIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRlY2xzO1xuICAgIH1cbiAgICBmdW5jdGlvbiBrZXlmcmFtZSgpIHtcbiAgICAgICAgd2hpdGVzcGFjZSgpO1xuICAgICAgICB2YXIgdmFscyA9IFtdO1xuICAgICAgICB2YXIgbTtcbiAgICAgICAgd2hpbGUgKG0gPSBtYXRjaCgvXigoXFxkK1xcLlxcZCt8XFwuXFxkK3xcXGQrKSU/fFthLXpdKylcXHMqLykpIHtcbiAgICAgICAgICAgIHZhbHMucHVzaChtWzFdKTtcbiAgICAgICAgICAgIG1hdGNoKC9eLFxccyovKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFscy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJrZXlmcmFtZVwiLFxuICAgICAgICAgICAgICAgIHZhbHVlczogdmFscyxcbiAgICAgICAgICAgICAgICBkZWNsYXJhdGlvbnM6IGRlY2xhcmF0aW9ucygpXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGF0X2tleWZyYW1lcygpIHtcbiAgICAgICAgdmFyIG0gPSBtYXRjaCgvXkAoWy1cXHddKyk/a2V5ZnJhbWVzXFxzKi8pO1xuICAgICAgICBpZiAoIW0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdmVuZG9yID0gbVsxXTtcbiAgICAgICAgbSA9IG1hdGNoKC9eKFstXFx3XSspXFxzKi8pO1xuICAgICAgICBpZiAoIW0pIHtcbiAgICAgICAgICAgIHJldHVybiBlcnJvcihcIkBrZXlmcmFtZXMgbWlzc2luZyBuYW1lXCIpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBuYW1lID0gbVsxXTtcbiAgICAgICAgaWYgKCFvcGVuKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBlcnJvcihcIkBrZXlmcmFtZXMgbWlzc2luZyAneydcIik7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGZyYW1lO1xuICAgICAgICB2YXIgZnJhbWVzID0gY29tbWVudHMoKTtcbiAgICAgICAgd2hpbGUgKGZyYW1lID0ga2V5ZnJhbWUoKSkge1xuICAgICAgICAgICAgZnJhbWVzLnB1c2goZnJhbWUpO1xuICAgICAgICAgICAgZnJhbWVzID0gZnJhbWVzLmNvbmNhdChjb21tZW50cygpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWNsb3NlKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBlcnJvcihcIkBrZXlmcmFtZXMgbWlzc2luZyAnfSdcIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHR5cGU6IFwia2V5ZnJhbWVzXCIsXG4gICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgdmVuZG9yOiB2ZW5kb3IsXG4gICAgICAgICAgICBrZXlmcmFtZXM6IGZyYW1lc1xuICAgICAgICB9O1xuICAgIH1cbiAgICBmdW5jdGlvbiBhdF9wYWdlKCkge1xuICAgICAgICB2YXIgbSA9IG1hdGNoKC9eQHBhZ2UgKi8pO1xuICAgICAgICBpZiAobSkge1xuICAgICAgICAgICAgdmFyIHNlbCA9IHNlbGVjdG9yKCkgfHwgW107XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwicGFnZVwiLFxuICAgICAgICAgICAgICAgIHNlbGVjdG9yczogc2VsLFxuICAgICAgICAgICAgICAgIGRlY2xhcmF0aW9uczogZGVjbGFyYXRpb25zKClcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gYXRfZm9udGZhY2UoKSB7XG4gICAgICAgIHZhciBtID0gbWF0Y2goL15AZm9udC1mYWNlXFxzKi8pO1xuICAgICAgICBpZiAobSkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcImZvbnQtZmFjZVwiLFxuICAgICAgICAgICAgICAgIGRlY2xhcmF0aW9uczogZGVjbGFyYXRpb25zKClcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gYXRfc3VwcG9ydHMoKSB7XG4gICAgICAgIHZhciBtID0gbWF0Y2goL15Ac3VwcG9ydHMgKihbXntdKykvKTtcbiAgICAgICAgaWYgKG0pIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJzdXBwb3J0c1wiLFxuICAgICAgICAgICAgICAgIHN1cHBvcnRzOiBtWzFdLnRyaW0oKSxcbiAgICAgICAgICAgICAgICBydWxlczogcnVsZXMoKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBhdF9ob3N0KCkge1xuICAgICAgICB2YXIgbSA9IG1hdGNoKC9eQGhvc3RcXHMqLyk7XG4gICAgICAgIGlmIChtKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwiaG9zdFwiLFxuICAgICAgICAgICAgICAgIHJ1bGVzOiBydWxlcygpXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGF0X21lZGlhKCkge1xuICAgICAgICB2YXIgbSA9IG1hdGNoKC9eQG1lZGlhICooW157XSspLyk7XG4gICAgICAgIGlmIChtKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwibWVkaWFcIixcbiAgICAgICAgICAgICAgICBtZWRpYTogbVsxXS50cmltKCksXG4gICAgICAgICAgICAgICAgcnVsZXM6IHJ1bGVzKClcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gYXRfY3VzdG9tX20oKSB7XG4gICAgICAgIHZhciBtID0gbWF0Y2goL15AY3VzdG9tLW1lZGlhXFxzKygtLVteXFxzXSspXFxzKihbXns7XSspOy8pO1xuICAgICAgICBpZiAobSkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcImN1c3RvbS1tZWRpYVwiLFxuICAgICAgICAgICAgICAgIG5hbWU6IG1bMV0udHJpbSgpLFxuICAgICAgICAgICAgICAgIG1lZGlhOiBtWzJdLnRyaW0oKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBhdF9kb2N1bWVudCgpIHtcbiAgICAgICAgdmFyIG0gPSBtYXRjaCgvXkAoWy1cXHddKyk/ZG9jdW1lbnQgKihbXntdKykvKTtcbiAgICAgICAgaWYgKG0pIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJkb2N1bWVudFwiLFxuICAgICAgICAgICAgICAgIGRvY3VtZW50OiBtWzJdLnRyaW0oKSxcbiAgICAgICAgICAgICAgICB2ZW5kb3I6IG1bMV0gPyBtWzFdLnRyaW0oKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgcnVsZXM6IHJ1bGVzKClcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gYXRfeCgpIHtcbiAgICAgICAgdmFyIG0gPSBtYXRjaCgvXkAoaW1wb3J0fGNoYXJzZXR8bmFtZXNwYWNlKVxccyooW147XSspOy8pO1xuICAgICAgICBpZiAobSkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0eXBlOiBtWzFdLFxuICAgICAgICAgICAgICAgIG5hbWU6IG1bMl0udHJpbSgpXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGF0X3J1bGUoKSB7XG4gICAgICAgIHdoaXRlc3BhY2UoKTtcbiAgICAgICAgaWYgKGNzc1swXSA9PT0gXCJAXCIpIHtcbiAgICAgICAgICAgIHZhciByZXQgPSBhdF9rZXlmcmFtZXMoKSB8fCBhdF9zdXBwb3J0cygpIHx8IGF0X2hvc3QoKSB8fCBhdF9tZWRpYSgpIHx8IGF0X2N1c3RvbV9tKCkgfHwgYXRfcGFnZSgpIHx8IGF0X2RvY3VtZW50KCkgfHwgYXRfZm9udGZhY2UoKSB8fCBhdF94KCk7XG4gICAgICAgICAgICBpZiAocmV0ICYmIHNldHRpbmdzLm9ubHlWYXJzKSB7XG4gICAgICAgICAgICAgICAgdmFyIGhhc1ZhckZ1bmMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZiAocmV0LmRlY2xhcmF0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICBoYXNWYXJGdW5jID0gcmV0LmRlY2xhcmF0aW9ucy5zb21lKGZ1bmN0aW9uKGRlY2wpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAvdmFyXFwoLy50ZXN0KGRlY2wudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYXJyID0gcmV0LmtleWZyYW1lcyB8fCByZXQucnVsZXMgfHwgW107XG4gICAgICAgICAgICAgICAgICAgIGhhc1ZhckZ1bmMgPSBhcnIuc29tZShmdW5jdGlvbihvYmopIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAob2JqLmRlY2xhcmF0aW9ucyB8fCBbXSkuc29tZShmdW5jdGlvbihkZWNsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC92YXJcXCgvLnRlc3QoZGVjbC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBoYXNWYXJGdW5jID8gcmV0IDoge307XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJ1bGUoKSB7XG4gICAgICAgIGlmIChzZXR0aW5ncy5vbmx5VmFycykge1xuICAgICAgICAgICAgdmFyIGJhbGFuY2VkTWF0Y2gkJDEgPSBiYWxhbmNlZE1hdGNoKFwie1wiLCBcIn1cIiwgY3NzKTtcbiAgICAgICAgICAgIGlmIChiYWxhbmNlZE1hdGNoJCQxKSB7XG4gICAgICAgICAgICAgICAgdmFyIGhhc1ZhckRlY2wgPSBiYWxhbmNlZE1hdGNoJCQxLnByZS5pbmRleE9mKFwiOnJvb3RcIikgIT09IC0xICYmIC8tLVxcUypcXHMqOi8udGVzdChiYWxhbmNlZE1hdGNoJCQxLmJvZHkpO1xuICAgICAgICAgICAgICAgIHZhciBoYXNWYXJGdW5jID0gL3ZhclxcKC8udGVzdChiYWxhbmNlZE1hdGNoJCQxLmJvZHkpO1xuICAgICAgICAgICAgICAgIGlmICghaGFzVmFyRGVjbCAmJiAhaGFzVmFyRnVuYykge1xuICAgICAgICAgICAgICAgICAgICBjc3MgPSBjc3Muc2xpY2UoYmFsYW5jZWRNYXRjaCQkMS5lbmQgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgc2VsID0gc2VsZWN0b3IoKSB8fCBbXTtcbiAgICAgICAgdmFyIGRlY2xzID0gIXNldHRpbmdzLm9ubHlWYXJzID8gZGVjbGFyYXRpb25zKCkgOiBkZWNsYXJhdGlvbnMoKS5maWx0ZXIoZnVuY3Rpb24oZGVjbCkge1xuICAgICAgICAgICAgdmFyIGhhc1ZhckRlY2wgPSBzZWwuc29tZShmdW5jdGlvbihzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHMuaW5kZXhPZihcIjpyb290XCIpICE9PSAtMTtcbiAgICAgICAgICAgIH0pICYmIC9eLS1cXFMvLnRlc3QoZGVjbC5wcm9wZXJ0eSk7XG4gICAgICAgICAgICB2YXIgaGFzVmFyRnVuYyA9IC92YXJcXCgvLnRlc3QoZGVjbC52YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm4gaGFzVmFyRGVjbCB8fCBoYXNWYXJGdW5jO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCFzZWwubGVuZ3RoKSB7XG4gICAgICAgICAgICBlcnJvcihcInNlbGVjdG9yIG1pc3NpbmdcIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHR5cGU6IFwicnVsZVwiLFxuICAgICAgICAgICAgc2VsZWN0b3JzOiBzZWwsXG4gICAgICAgICAgICBkZWNsYXJhdGlvbnM6IGRlY2xzXG4gICAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJ1bGVzKGNvcmUpIHtcbiAgICAgICAgaWYgKCFjb3JlICYmICFvcGVuKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBlcnJvcihcIm1pc3NpbmcgJ3snXCIpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBub2RlO1xuICAgICAgICB2YXIgcnVsZXMgPSBjb21tZW50cygpO1xuICAgICAgICB3aGlsZSAoY3NzLmxlbmd0aCAmJiAoY29yZSB8fCBjc3NbMF0gIT09IFwifVwiKSAmJiAobm9kZSA9IGF0X3J1bGUoKSB8fCBydWxlKCkpKSB7XG4gICAgICAgICAgICBpZiAobm9kZS50eXBlKSB7XG4gICAgICAgICAgICAgICAgcnVsZXMucHVzaChub2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJ1bGVzID0gcnVsZXMuY29uY2F0KGNvbW1lbnRzKCkpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghY29yZSAmJiAhY2xvc2UoKSkge1xuICAgICAgICAgICAgcmV0dXJuIGVycm9yKFwibWlzc2luZyAnfSdcIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJ1bGVzO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBcInN0eWxlc2hlZXRcIixcbiAgICAgICAgc3R5bGVzaGVldDoge1xuICAgICAgICAgICAgcnVsZXM6IHJ1bGVzKHRydWUpLFxuICAgICAgICAgICAgZXJyb3JzOiBlcnJvcnNcbiAgICAgICAgfVxuICAgIH07XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeUNzcyh0cmVlKSB7XG4gICAgdmFyIGRlbGltID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBcIlwiO1xuICAgIHZhciBjYiA9IGFyZ3VtZW50cy5sZW5ndGggPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkO1xuICAgIHZhciByZW5kZXJNZXRob2RzID0ge1xuICAgICAgICBjaGFyc2V0OiBmdW5jdGlvbiBjaGFyc2V0KG5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBcIkBjaGFyc2V0IFwiICsgbm9kZS5uYW1lICsgXCI7XCI7XG4gICAgICAgIH0sXG4gICAgICAgIGNvbW1lbnQ6IGZ1bmN0aW9uIGNvbW1lbnQobm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIG5vZGUuY29tbWVudC5pbmRleE9mKFwiX19DU1NWQVJTUE9OWUZJTExcIikgPT09IDAgPyBcIi8qXCIgKyBub2RlLmNvbW1lbnQgKyBcIiovXCIgOiBcIlwiO1xuICAgICAgICB9LFxuICAgICAgICBcImN1c3RvbS1tZWRpYVwiOiBmdW5jdGlvbiBjdXN0b21NZWRpYShub2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJAY3VzdG9tLW1lZGlhIFwiICsgbm9kZS5uYW1lICsgXCIgXCIgKyBub2RlLm1lZGlhICsgXCI7XCI7XG4gICAgICAgIH0sXG4gICAgICAgIGRlY2xhcmF0aW9uOiBmdW5jdGlvbiBkZWNsYXJhdGlvbihub2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gbm9kZS5wcm9wZXJ0eSArIFwiOlwiICsgbm9kZS52YWx1ZSArIFwiO1wiO1xuICAgICAgICB9LFxuICAgICAgICBkb2N1bWVudDogZnVuY3Rpb24gZG9jdW1lbnQobm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIFwiQFwiICsgKG5vZGUudmVuZG9yIHx8IFwiXCIpICsgXCJkb2N1bWVudCBcIiArIG5vZGUuZG9jdW1lbnQgKyBcIntcIiArIHZpc2l0KG5vZGUucnVsZXMpICsgXCJ9XCI7XG4gICAgICAgIH0sXG4gICAgICAgIFwiZm9udC1mYWNlXCI6IGZ1bmN0aW9uIGZvbnRGYWNlKG5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBcIkBmb250LWZhY2VcIiArIFwie1wiICsgdmlzaXQobm9kZS5kZWNsYXJhdGlvbnMpICsgXCJ9XCI7XG4gICAgICAgIH0sXG4gICAgICAgIGhvc3Q6IGZ1bmN0aW9uIGhvc3Qobm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIFwiQGhvc3RcIiArIFwie1wiICsgdmlzaXQobm9kZS5ydWxlcykgKyBcIn1cIjtcbiAgICAgICAgfSxcbiAgICAgICAgaW1wb3J0OiBmdW5jdGlvbiBfaW1wb3J0KG5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBcIkBpbXBvcnQgXCIgKyBub2RlLm5hbWUgKyBcIjtcIjtcbiAgICAgICAgfSxcbiAgICAgICAga2V5ZnJhbWU6IGZ1bmN0aW9uIGtleWZyYW1lKG5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBub2RlLnZhbHVlcy5qb2luKFwiLFwiKSArIFwie1wiICsgdmlzaXQobm9kZS5kZWNsYXJhdGlvbnMpICsgXCJ9XCI7XG4gICAgICAgIH0sXG4gICAgICAgIGtleWZyYW1lczogZnVuY3Rpb24ga2V5ZnJhbWVzKG5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBcIkBcIiArIChub2RlLnZlbmRvciB8fCBcIlwiKSArIFwia2V5ZnJhbWVzIFwiICsgbm9kZS5uYW1lICsgXCJ7XCIgKyB2aXNpdChub2RlLmtleWZyYW1lcykgKyBcIn1cIjtcbiAgICAgICAgfSxcbiAgICAgICAgbWVkaWE6IGZ1bmN0aW9uIG1lZGlhKG5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBcIkBtZWRpYSBcIiArIG5vZGUubWVkaWEgKyBcIntcIiArIHZpc2l0KG5vZGUucnVsZXMpICsgXCJ9XCI7XG4gICAgICAgIH0sXG4gICAgICAgIG5hbWVzcGFjZTogZnVuY3Rpb24gbmFtZXNwYWNlKG5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBcIkBuYW1lc3BhY2UgXCIgKyBub2RlLm5hbWUgKyBcIjtcIjtcbiAgICAgICAgfSxcbiAgICAgICAgcGFnZTogZnVuY3Rpb24gcGFnZShub2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJAcGFnZSBcIiArIChub2RlLnNlbGVjdG9ycy5sZW5ndGggPyBub2RlLnNlbGVjdG9ycy5qb2luKFwiLCBcIikgOiBcIlwiKSArIFwie1wiICsgdmlzaXQobm9kZS5kZWNsYXJhdGlvbnMpICsgXCJ9XCI7XG4gICAgICAgIH0sXG4gICAgICAgIHJ1bGU6IGZ1bmN0aW9uIHJ1bGUobm9kZSkge1xuICAgICAgICAgICAgdmFyIGRlY2xzID0gbm9kZS5kZWNsYXJhdGlvbnM7XG4gICAgICAgICAgICBpZiAoZGVjbHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGUuc2VsZWN0b3JzLmpvaW4oXCIsXCIpICsgXCJ7XCIgKyB2aXNpdChkZWNscykgKyBcIn1cIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgc3VwcG9ydHM6IGZ1bmN0aW9uIHN1cHBvcnRzKG5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBcIkBzdXBwb3J0cyBcIiArIG5vZGUuc3VwcG9ydHMgKyBcIntcIiArIHZpc2l0KG5vZGUucnVsZXMpICsgXCJ9XCI7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGZ1bmN0aW9uIHZpc2l0KG5vZGVzKSB7XG4gICAgICAgIHZhciBidWYgPSBcIlwiO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgbiA9IG5vZGVzW2ldO1xuICAgICAgICAgICAgaWYgKGNiKSB7XG4gICAgICAgICAgICAgICAgY2Iobik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdHh0ID0gcmVuZGVyTWV0aG9kc1tuLnR5cGVdKG4pO1xuICAgICAgICAgICAgaWYgKHR4dCkge1xuICAgICAgICAgICAgICAgIGJ1ZiArPSB0eHQ7XG4gICAgICAgICAgICAgICAgaWYgKHR4dC5sZW5ndGggJiYgbi5zZWxlY3RvcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgYnVmICs9IGRlbGltO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYnVmO1xuICAgIH1cbiAgICByZXR1cm4gdmlzaXQodHJlZS5zdHlsZXNoZWV0LnJ1bGVzKTtcbn1cblxuZnVuY3Rpb24gd2Fsa0Nzcyhub2RlLCBmbikge1xuICAgIG5vZGUucnVsZXMuZm9yRWFjaChmdW5jdGlvbihydWxlKSB7XG4gICAgICAgIGlmIChydWxlLnJ1bGVzKSB7XG4gICAgICAgICAgICB3YWxrQ3NzKHJ1bGUsIGZuKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocnVsZS5rZXlmcmFtZXMpIHtcbiAgICAgICAgICAgIHJ1bGUua2V5ZnJhbWVzLmZvckVhY2goZnVuY3Rpb24oa2V5ZnJhbWUpIHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5ZnJhbWUudHlwZSA9PT0gXCJrZXlmcmFtZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGZuKGtleWZyYW1lLmRlY2xhcmF0aW9ucywgcnVsZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFydWxlLmRlY2xhcmF0aW9ucykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGZuKHJ1bGUuZGVjbGFyYXRpb25zLCBub2RlKTtcbiAgICB9KTtcbn1cblxudmFyIFZBUl9QUk9QX0lERU5USUZJRVIgPSBcIi0tXCI7XG5cbnZhciBWQVJfRlVOQ19JREVOVElGSUVSID0gXCJ2YXJcIjtcblxudmFyIHZhcmlhYmxlU3RvcmUgPSB7XG4gICAgZG9tOiB7fSxcbiAgICB0ZW1wOiB7fSxcbiAgICB1c2VyOiB7fVxufTtcblxuZnVuY3Rpb24gdHJhbnNmb3JtVmFycyhjc3NUZXh0KSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciBkZWZhdWx0cyA9IHtcbiAgICAgICAgZml4TmVzdGVkQ2FsYzogdHJ1ZSxcbiAgICAgICAgb25seVZhcnM6IGZhbHNlLFxuICAgICAgICBwZXJzaXN0OiBmYWxzZSxcbiAgICAgICAgcHJlc2VydmU6IGZhbHNlLFxuICAgICAgICB2YXJpYWJsZXM6IHt9LFxuICAgICAgICBvbldhcm5pbmc6IGZ1bmN0aW9uIG9uV2FybmluZygpIHt9XG4gICAgfTtcbiAgICB2YXIgc2V0dGluZ3MgPSBfZXh0ZW5kcyh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuICAgIHZhciBtYXAgPSBzZXR0aW5ncy5wZXJzaXN0ID8gdmFyaWFibGVTdG9yZS5kb20gOiB2YXJpYWJsZVN0b3JlLnRlbXAgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHZhcmlhYmxlU3RvcmUuZG9tKSk7XG4gICAgdmFyIGNzc1RyZWUgPSBwYXJzZUNzcyhjc3NUZXh0LCB7XG4gICAgICAgIG9ubHlWYXJzOiBzZXR0aW5ncy5vbmx5VmFyc1xuICAgIH0pO1xuICAgIGNzc1RyZWUuc3R5bGVzaGVldC5ydWxlcy5mb3JFYWNoKGZ1bmN0aW9uKHJ1bGUpIHtcbiAgICAgICAgdmFyIHZhck5hbWVJbmRpY2VzID0gW107XG4gICAgICAgIGlmIChydWxlLnR5cGUgIT09IFwicnVsZVwiKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJ1bGUuc2VsZWN0b3JzLmxlbmd0aCAhPT0gMSB8fCBydWxlLnNlbGVjdG9yc1swXSAhPT0gXCI6cm9vdFwiKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcnVsZS5kZWNsYXJhdGlvbnMuZm9yRWFjaChmdW5jdGlvbihkZWNsLCBpKSB7XG4gICAgICAgICAgICB2YXIgcHJvcCA9IGRlY2wucHJvcGVydHk7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBkZWNsLnZhbHVlO1xuICAgICAgICAgICAgaWYgKHByb3AgJiYgcHJvcC5pbmRleE9mKFZBUl9QUk9QX0lERU5USUZJRVIpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgbWFwW3Byb3BdID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgdmFyTmFtZUluZGljZXMucHVzaChpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmICghc2V0dGluZ3MucHJlc2VydmUpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSB2YXJOYW1lSW5kaWNlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgIHJ1bGUuZGVjbGFyYXRpb25zLnNwbGljZSh2YXJOYW1lSW5kaWNlc1tpXSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBPYmplY3Qua2V5cyh2YXJpYWJsZVN0b3JlLnVzZXIpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgIG1hcFtrZXldID0gdmFyaWFibGVTdG9yZS51c2VyW2tleV07XG4gICAgfSk7XG4gICAgaWYgKE9iamVjdC5rZXlzKHNldHRpbmdzLnZhcmlhYmxlcykubGVuZ3RoKSB7XG4gICAgICAgIHZhciBuZXdSdWxlID0ge1xuICAgICAgICAgICAgZGVjbGFyYXRpb25zOiBbXSxcbiAgICAgICAgICAgIHNlbGVjdG9yczogWyBcIjpyb290XCIgXSxcbiAgICAgICAgICAgIHR5cGU6IFwicnVsZVwiXG4gICAgICAgIH07XG4gICAgICAgIE9iamVjdC5rZXlzKHNldHRpbmdzLnZhcmlhYmxlcykuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICAgIHZhciBwcm9wID0gXCItLVwiLmNvbmNhdChrZXkucmVwbGFjZSgvXi0rLywgXCJcIikpO1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gc2V0dGluZ3MudmFyaWFibGVzW2tleV07XG4gICAgICAgICAgICBpZiAoc2V0dGluZ3MucGVyc2lzdCkge1xuICAgICAgICAgICAgICAgIHZhcmlhYmxlU3RvcmUudXNlcltwcm9wXSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG1hcFtwcm9wXSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICBtYXBbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICBuZXdSdWxlLmRlY2xhcmF0aW9ucy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJkZWNsYXJhdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eTogcHJvcCxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoc2V0dGluZ3MucHJlc2VydmUgJiYgbmV3UnVsZS5kZWNsYXJhdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjc3NUcmVlLnN0eWxlc2hlZXQucnVsZXMucHVzaChuZXdSdWxlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB3YWxrQ3NzKGNzc1RyZWUuc3R5bGVzaGVldCwgZnVuY3Rpb24oZGVjbGFyYXRpb25zLCBub2RlKSB7XG4gICAgICAgIHZhciBkZWNsO1xuICAgICAgICB2YXIgcmVzb2x2ZWRWYWx1ZTtcbiAgICAgICAgdmFyIHZhbHVlO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRlY2xhcmF0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZGVjbCA9IGRlY2xhcmF0aW9uc1tpXTtcbiAgICAgICAgICAgIHZhbHVlID0gZGVjbC52YWx1ZTtcbiAgICAgICAgICAgIGlmIChkZWNsLnR5cGUgIT09IFwiZGVjbGFyYXRpb25cIikge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF2YWx1ZSB8fCB2YWx1ZS5pbmRleE9mKFZBUl9GVU5DX0lERU5USUZJRVIgKyBcIihcIikgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXNvbHZlZFZhbHVlID0gcmVzb2x2ZVZhbHVlKHZhbHVlLCBtYXAsIHNldHRpbmdzKTtcbiAgICAgICAgICAgIGlmIChyZXNvbHZlZFZhbHVlICE9PSBkZWNsLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFzZXR0aW5ncy5wcmVzZXJ2ZSkge1xuICAgICAgICAgICAgICAgICAgICBkZWNsLnZhbHVlID0gcmVzb2x2ZWRWYWx1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkZWNsYXJhdGlvbnMuc3BsaWNlKGksIDAsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IGRlY2wudHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5OiBkZWNsLnByb3BlcnR5LFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHJlc29sdmVkVmFsdWVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoc2V0dGluZ3MuZml4TmVzdGVkQ2FsYykge1xuICAgICAgICBmaXhOZXN0ZWRDYWxjKGNzc1RyZWUuc3R5bGVzaGVldC5ydWxlcyk7XG4gICAgfVxuICAgIHJldHVybiBzdHJpbmdpZnlDc3MoY3NzVHJlZSk7XG59XG5cbmZ1bmN0aW9uIGZpeE5lc3RlZENhbGMocnVsZXMpIHtcbiAgICB2YXIgcmVDYWxjRXhwID0gLygtW2Etel0rLSk/Y2FsY1xcKC87XG4gICAgcnVsZXMuZm9yRWFjaChmdW5jdGlvbihydWxlKSB7XG4gICAgICAgIGlmIChydWxlLmRlY2xhcmF0aW9ucykge1xuICAgICAgICAgICAgcnVsZS5kZWNsYXJhdGlvbnMuZm9yRWFjaChmdW5jdGlvbihkZWNsKSB7XG4gICAgICAgICAgICAgICAgdmFyIG9sZFZhbHVlID0gZGVjbC52YWx1ZTtcbiAgICAgICAgICAgICAgICB2YXIgbmV3VmFsdWUgPSBcIlwiO1xuICAgICAgICAgICAgICAgIHdoaWxlIChyZUNhbGNFeHAudGVzdChvbGRWYWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJvb3RDYWxjID0gYmFsYW5jZWRNYXRjaChcImNhbGMoXCIsIFwiKVwiLCBvbGRWYWx1ZSB8fCBcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgb2xkVmFsdWUgPSBvbGRWYWx1ZS5zbGljZShyb290Q2FsYy5lbmQpO1xuICAgICAgICAgICAgICAgICAgICB3aGlsZSAocmVDYWxjRXhwLnRlc3Qocm9vdENhbGMuYm9keSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuZXN0ZWRDYWxjID0gYmFsYW5jZWRNYXRjaChyZUNhbGNFeHAsIFwiKVwiLCByb290Q2FsYy5ib2R5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvb3RDYWxjLmJvZHkgPSBcIlwiLmNvbmNhdChuZXN0ZWRDYWxjLnByZSwgXCIoXCIpLmNvbmNhdChuZXN0ZWRDYWxjLmJvZHksIFwiKVwiKS5jb25jYXQobmVzdGVkQ2FsYy5wb3N0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZSArPSBcIlwiLmNvbmNhdChyb290Q2FsYy5wcmUsIFwiY2FsYyhcIikuY29uY2F0KHJvb3RDYWxjLmJvZHkpO1xuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZSArPSAhcmVDYWxjRXhwLnRlc3Qob2xkVmFsdWUpID8gXCIpXCIuY29uY2F0KHJvb3RDYWxjLnBvc3QpIDogXCJcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGVjbC52YWx1ZSA9IG5ld1ZhbHVlIHx8IGRlY2wudmFsdWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiByZXNvbHZlVmFsdWUodmFsdWUsIG1hcCkge1xuICAgIHZhciBzZXR0aW5ncyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gICAgdmFyIF9fcmVjdXJzaXZlRmFsbGJhY2sgPSBhcmd1bWVudHMubGVuZ3RoID4gMyA/IGFyZ3VtZW50c1szXSA6IHVuZGVmaW5lZDtcbiAgICBpZiAodmFsdWUuaW5kZXhPZihcInZhcihcIikgPT09IC0xKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgdmFyIHZhbHVlRGF0YSA9IGJhbGFuY2VkTWF0Y2goXCIoXCIsIFwiKVwiLCB2YWx1ZSk7XG4gICAgZnVuY3Rpb24gcmVzb2x2ZUZ1bmModmFsdWUpIHtcbiAgICAgICAgdmFyIG5hbWUgPSB2YWx1ZS5zcGxpdChcIixcIilbMF0ucmVwbGFjZSgvW1xcc1xcblxcdF0vZywgXCJcIik7XG4gICAgICAgIHZhciBmYWxsYmFjayA9ICh2YWx1ZS5tYXRjaCgvKD86XFxzKixcXHMqKXsxfSguKik/LykgfHwgW10pWzFdO1xuICAgICAgICB2YXIgbWF0Y2ggPSBtYXAuaGFzT3duUHJvcGVydHkobmFtZSkgPyBTdHJpbmcobWFwW25hbWVdKSA6IHVuZGVmaW5lZDtcbiAgICAgICAgdmFyIHJlcGxhY2VtZW50ID0gbWF0Y2ggfHwgKGZhbGxiYWNrID8gU3RyaW5nKGZhbGxiYWNrKSA6IHVuZGVmaW5lZCk7XG4gICAgICAgIHZhciB1bnJlc29sdmVkRmFsbGJhY2sgPSBfX3JlY3Vyc2l2ZUZhbGxiYWNrIHx8IHZhbHVlO1xuICAgICAgICBpZiAoIW1hdGNoKSB7XG4gICAgICAgICAgICBzZXR0aW5ncy5vbldhcm5pbmcoJ3ZhcmlhYmxlIFwiJy5jb25jYXQobmFtZSwgJ1wiIGlzIHVuZGVmaW5lZCcpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVwbGFjZW1lbnQgJiYgcmVwbGFjZW1lbnQgIT09IFwidW5kZWZpbmVkXCIgJiYgcmVwbGFjZW1lbnQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmVWYWx1ZShyZXBsYWNlbWVudCwgbWFwLCBzZXR0aW5ncywgdW5yZXNvbHZlZEZhbGxiYWNrKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBcInZhcihcIi5jb25jYXQodW5yZXNvbHZlZEZhbGxiYWNrLCBcIilcIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKCF2YWx1ZURhdGEpIHtcbiAgICAgICAgaWYgKHZhbHVlLmluZGV4T2YoXCJ2YXIoXCIpICE9PSAtMSkge1xuICAgICAgICAgICAgc2V0dGluZ3Mub25XYXJuaW5nKCdtaXNzaW5nIGNsb3NpbmcgXCIpXCIgaW4gdGhlIHZhbHVlIFwiJy5jb25jYXQodmFsdWUsICdcIicpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfSBlbHNlIGlmICh2YWx1ZURhdGEucHJlLnNsaWNlKC0zKSA9PT0gXCJ2YXJcIikge1xuICAgICAgICB2YXIgaXNFbXB0eVZhckZ1bmMgPSB2YWx1ZURhdGEuYm9keS50cmltKCkubGVuZ3RoID09PSAwO1xuICAgICAgICBpZiAoaXNFbXB0eVZhckZ1bmMpIHtcbiAgICAgICAgICAgIHNldHRpbmdzLm9uV2FybmluZyhcInZhcigpIG11c3QgY29udGFpbiBhIG5vbi13aGl0ZXNwYWNlIHN0cmluZ1wiKTtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZURhdGEucHJlLnNsaWNlKDAsIC0zKSArIHJlc29sdmVGdW5jKHZhbHVlRGF0YS5ib2R5KSArIHJlc29sdmVWYWx1ZSh2YWx1ZURhdGEucG9zdCwgbWFwLCBzZXR0aW5ncyk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdmFsdWVEYXRhLnByZSArIFwiKFwiLmNvbmNhdChyZXNvbHZlVmFsdWUodmFsdWVEYXRhLmJvZHksIG1hcCwgc2V0dGluZ3MpLCBcIilcIikgKyByZXNvbHZlVmFsdWUodmFsdWVEYXRhLnBvc3QsIG1hcCwgc2V0dGluZ3MpO1xuICAgIH1cbn1cblxudmFyIG5hbWUgPSBcImNzcy12YXJzLXBvbnlmaWxsXCI7XG5cbnZhciBpc0Jyb3dzZXIgPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiO1xuXG52YXIgaXNOYXRpdmVTdXBwb3J0ID0gaXNCcm93c2VyICYmIHdpbmRvdy5DU1MgJiYgd2luZG93LkNTUy5zdXBwb3J0cyAmJiB3aW5kb3cuQ1NTLnN1cHBvcnRzKFwiKC0tYTogMClcIik7XG5cbnZhciBjb25zb2xlTXNnUHJlZml4ID0gXCJjc3NWYXJzKCk6IFwiO1xuXG52YXIgZGVmYXVsdHMgPSB7XG4gICAgcm9vdEVsZW1lbnQ6IGlzQnJvd3NlciA/IGRvY3VtZW50IDogbnVsbCxcbiAgICBzaGFkb3dET006IGZhbHNlLFxuICAgIGluY2x1ZGU6IFwic3R5bGUsbGlua1tyZWw9c3R5bGVzaGVldF1cIixcbiAgICBleGNsdWRlOiBcIlwiLFxuICAgIHZhcmlhYmxlczoge30sXG4gICAgZml4TmVzdGVkQ2FsYzogdHJ1ZSxcbiAgICBvbmx5TGVnYWN5OiB0cnVlLFxuICAgIG9ubHlWYXJzOiBmYWxzZSxcbiAgICBwcmVzZXJ2ZTogZmFsc2UsXG4gICAgc2lsZW50OiBmYWxzZSxcbiAgICB1cGRhdGVET006IHRydWUsXG4gICAgdXBkYXRlVVJMczogdHJ1ZSxcbiAgICB3YXRjaDogbnVsbCxcbiAgICBvbkJlZm9yZVNlbmQ6IGZ1bmN0aW9uIG9uQmVmb3JlU2VuZCgpIHt9LFxuICAgIG9uU3VjY2VzczogZnVuY3Rpb24gb25TdWNjZXNzKCkge30sXG4gICAgb25XYXJuaW5nOiBmdW5jdGlvbiBvbldhcm5pbmcoKSB7fSxcbiAgICBvbkVycm9yOiBmdW5jdGlvbiBvbkVycm9yKCkge30sXG4gICAgb25Db21wbGV0ZTogZnVuY3Rpb24gb25Db21wbGV0ZSgpIHt9XG59O1xuXG52YXIgcmVnZXggPSB7XG4gICAgY3NzQ29tbWVudHM6IC9cXC9cXCpbXFxzXFxTXSs/XFwqXFwvL2csXG4gICAgY3NzS2V5ZnJhbWVzOiAvQCg/Oi1cXHcqLSk/a2V5ZnJhbWVzLyxcbiAgICBjc3NSb290UnVsZXM6IC8oPzo6cm9vdFxccyp7XFxzKltefV0qfSkvZyxcbiAgICBjc3NVcmxzOiAvdXJsXFwoKD8hWydcIl0/KD86ZGF0YXxodHRwfFxcL1xcLyk6KVsnXCJdPyhbXidcIildKilbJ1wiXT9cXCkvZyxcbiAgICBjc3NWYXJzOiAvKD86KD86OnJvb3RcXHMqe1xccypbXjtdKjsqXFxzKil8KD86dmFyXFwoXFxzKikpKC0tW146KV0rKSg/OlxccypbOildKS9cbn07XG5cbnZhciBjc3NWYXJzT2JzZXJ2ZXIgPSBudWxsO1xuXG52YXIgZGVib3VuY2VUaW1lciA9IG51bGw7XG5cbnZhciBpc1NoYWRvd0RPTVJlYWR5ID0gZmFsc2U7XG5cbi8qKlxuICogRmV0Y2hlcywgcGFyc2VzLCBhbmQgdHJhbnNmb3JtcyBDU1MgY3VzdG9tIHByb3BlcnRpZXMgZnJvbSBzcGVjaWZpZWRcbiAqIDxzdHlsZT4gYW5kIDxsaW5rPiBlbGVtZW50cyBpbnRvIHN0YXRpYyB2YWx1ZXMsIHRoZW4gYXBwZW5kcyBhIG5ldyA8c3R5bGU+XG4gKiBlbGVtZW50IHdpdGggc3RhdGljIHZhbHVlcyB0byB0aGUgRE9NIHRvIHByb3ZpZGUgQ1NTIGN1c3RvbSBwcm9wZXJ0eVxuICogY29tcGF0aWJpbGl0eSBmb3IgbGVnYWN5IGJyb3dzZXJzLiBBbHNvIHByb3ZpZGVzIGEgc2luZ2xlIGludGVyZmFjZSBmb3JcbiAqIGxpdmUgdXBkYXRlcyBvZiBydW50aW1lIHZhbHVlcyBpbiBib3RoIG1vZGVybiBhbmQgbGVnYWN5IGJyb3dzZXJzLlxuICpcbiAqIEBwcmVzZXJ2ZVxuICogQHBhcmFtIHtvYmplY3R9ICAgW29wdGlvbnNdIE9wdGlvbnMgb2JqZWN0XG4gKiBAcGFyYW0ge29iamVjdH0gICBbb3B0aW9ucy5yb290RWxlbWVudD1kb2N1bWVudF0gUm9vdCBlbGVtZW50IHRvIHRyYXZlcnNlIGZvclxuICogICAgICAgICAgICAgICAgICAgPGxpbms+IGFuZCA8c3R5bGU+IG5vZGVzLlxuICogQHBhcmFtIHtib29sZWFufSAgW29wdGlvbnMuc2hhZG93RE9NPWZhbHNlXSBEZXRlcm1pbmVzIGlmIHNoYWRvdyBET00gPGxpbms+XG4gKiAgICAgICAgICAgICAgICAgICBhbmQgPHN0eWxlPiBub2RlcyB3aWxsIGJlIHByb2Nlc3NlZC5cbiAqIEBwYXJhbSB7c3RyaW5nfSAgIFtvcHRpb25zLmluY2x1ZGU9XCJzdHlsZSxsaW5rW3JlbD1zdHlsZXNoZWV0XVwiXSBDU1Mgc2VsZWN0b3JcbiAqICAgICAgICAgICAgICAgICAgIG1hdGNoaW5nIDxsaW5rIHJlPVwic3R5bGVzaGVldFwiPiBhbmQgPHN0eWxlPiBub2RlcyB0b1xuICogICAgICAgICAgICAgICAgICAgcHJvY2Vzc1xuICogQHBhcmFtIHtzdHJpbmd9ICAgW29wdGlvbnMuZXhjbHVkZV0gQ1NTIHNlbGVjdG9yIG1hdGNoaW5nIDxsaW5rXG4gKiAgICAgICAgICAgICAgICAgICByZWw9XCJzdHlsZWhzZWV0XCI+IGFuZCA8c3R5bGU+IG5vZGVzIHRvIGV4Y2x1ZGUgZnJvbSB0aG9zZVxuICogICAgICAgICAgICAgICAgICAgbWF0Y2hlcyBieSBvcHRpb25zLmluY2x1ZGVcbiAqIEBwYXJhbSB7b2JqZWN0fSAgIFtvcHRpb25zLnZhcmlhYmxlc10gQSBtYXAgb2YgY3VzdG9tIHByb3BlcnR5IG5hbWUvdmFsdWVcbiAqICAgICAgICAgICAgICAgICAgIHBhaXJzLiBQcm9wZXJ0eSBuYW1lcyBjYW4gb21pdCBvciBpbmNsdWRlIHRoZSBsZWFkaW5nXG4gKiAgICAgICAgICAgICAgICAgICBkb3VibGUtaHlwaGVuICjigJQpLCBhbmQgdmFsdWVzIHNwZWNpZmllZCB3aWxsIG92ZXJyaWRlXG4gKiAgICAgICAgICAgICAgICAgICBwcmV2aW91cyB2YWx1ZXMuXG4gKiBAcGFyYW0ge2Jvb2xlYW59ICBbb3B0aW9ucy5maXhOZXN0ZWRDYWxjPXRydWVdIFJlbW92ZXMgbmVzdGVkICdjYWxjJyBrZXl3b3Jkc1xuICogICAgICAgICAgICAgICAgICAgZm9yIGxlZ2FjeSBicm93c2VyIGNvbXBhdGliaWxpdHkuXG4gKiBAcGFyYW0ge2Jvb2xlYW59ICBbb3B0aW9ucy5vbmx5TGVnYWN5PXRydWVdIERldGVybWluZXMgaWYgdGhlIHBvbnlmaWxsIHdpbGxcbiAqICAgICAgICAgICAgICAgICAgIG9ubHkgZ2VuZXJhdGUgbGVnYWN5LWNvbXBhdGlibGUgQ1NTIGluIGJyb3dzZXJzIHRoYXQgbGFja1xuICogICAgICAgICAgICAgICAgICAgbmF0aXZlIHN1cHBvcnQgKGkuZS4sIGxlZ2FjeSBicm93c2VycylcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gIFtvcHRpb25zLm9ubHlWYXJzPWZhbHNlXSBEZXRlcm1pbmVzIGlmIENTUyBydWxlc2V0cyBhbmRcbiAqICAgICAgICAgICAgICAgICAgIGRlY2xhcmF0aW9ucyB3aXRob3V0IGEgY3VzdG9tIHByb3BlcnR5IHZhbHVlIHNob3VsZCBiZVxuICogICAgICAgICAgICAgICAgICAgcmVtb3ZlZCBmcm9tIHRoZSBwb255ZmlsbC1nZW5lcmF0ZWQgQ1NTXG4gKiBAcGFyYW0ge2Jvb2xlYW59ICBbb3B0aW9ucy5wcmVzZXJ2ZT1mYWxzZV0gRGV0ZXJtaW5lcyBpZiB0aGUgb3JpZ2luYWwgQ1NTXG4gKiAgICAgICAgICAgICAgICAgICBjdXN0b20gcHJvcGVydHkgZGVjbGFyYXRpb24gd2lsbCBiZSByZXRhaW5lZCBpbiB0aGVcbiAqICAgICAgICAgICAgICAgICAgIHBvbnlmaWxsLWdlbmVyYXRlZCBDU1MuXG4gKiBAcGFyYW0ge2Jvb2xlYW59ICBbb3B0aW9ucy5zaWxlbnQ9ZmFsc2VdIERldGVybWluZXMgaWYgd2FybmluZyBhbmQgZXJyb3JcbiAqICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VzIHdpbGwgYmUgZGlzcGxheWVkIG9uIHRoZSBjb25zb2xlXG4gKiBAcGFyYW0ge2Jvb2xlYW59ICBbb3B0aW9ucy51cGRhdGVET009dHJ1ZV0gRGV0ZXJtaW5lcyBpZiB0aGUgcG9ueWZpbGwgd2lsbFxuICogICAgICAgICAgICAgICAgICAgdXBkYXRlIHRoZSBET00gYWZ0ZXIgcHJvY2Vzc2luZyBDU1MgY3VzdG9tIHByb3BlcnRpZXNcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gIFtvcHRpb25zLnVwZGF0ZVVSTHM9dHJ1ZV0gRGV0ZXJtaW5lcyBpZiB0aGUgcG9ueWZpbGwgd2lsbFxuICogICAgICAgICAgICAgICAgICAgY29udmVydCByZWxhdGl2ZSB1cmwoKSBwYXRocyB0byBhYnNvbHV0ZSB1cmxzLlxuICogQHBhcmFtIHtib29sZWFufSAgW29wdGlvbnMud2F0Y2g9ZmFsc2VdIERldGVybWluZXMgaWYgYSBNdXRhdGlvbk9ic2VydmVyIHdpbGxcbiAqICAgICAgICAgICAgICAgICAgIGJlIGNyZWF0ZWQgdGhhdCB3aWxsIGV4ZWN1dGUgdGhlIHBvbnlmaWxsIHdoZW4gYSA8bGluaz4gb3JcbiAqICAgICAgICAgICAgICAgICAgIDxzdHlsZT4gRE9NIG11dGF0aW9uIGlzIG9ic2VydmVkLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gW29wdGlvbnMub25CZWZvcmVTZW5kXSBDYWxsYmFjayBiZWZvcmUgWEhSIGlzIHNlbnQuIFBhc3Nlc1xuICogICAgICAgICAgICAgICAgICAgMSkgdGhlIFhIUiBvYmplY3QsIDIpIHNvdXJjZSBub2RlIHJlZmVyZW5jZSwgYW5kIDMpIHRoZVxuICogICAgICAgICAgICAgICAgICAgc291cmNlIFVSTCBhcyBhcmd1bWVudHMuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBbb3B0aW9ucy5vblN1Y2Nlc3NdIENhbGxiYWNrIGFmdGVyIENTUyBkYXRhIGhhcyBiZWVuXG4gKiAgICAgICAgICAgICAgICAgICBjb2xsZWN0ZWQgZnJvbSBlYWNoIG5vZGUgYW5kIGJlZm9yZSBDU1MgY3VzdG9tIHByb3BlcnRpZXNcbiAqICAgICAgICAgICAgICAgICAgIGhhdmUgYmVlbiB0cmFuc2Zvcm1lZC4gQWxsb3dzIG1vZGlmeWluZyB0aGUgQ1NTIGRhdGEgYmVmb3JlXG4gKiAgICAgICAgICAgICAgICAgICBpdCBpcyB0cmFuc2Zvcm1lZCBieSByZXR1cm5pbmcgYW55IHN0cmluZyB2YWx1ZSAob3IgZmFsc2VcbiAqICAgICAgICAgICAgICAgICAgIHRvIHNraXApLiBQYXNzZXMgMSkgQ1NTIHRleHQsIDIpIHNvdXJjZSBub2RlIHJlZmVyZW5jZSwgYW5kXG4gKiAgICAgICAgICAgICAgICAgICAzKSB0aGUgc291cmNlIFVSTCBhcyBhcmd1bWVudHMuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBbb3B0aW9ucy5vbldhcm5pbmddIENhbGxiYWNrIGFmdGVyIGVhY2ggQ1NTIHBhcnNpbmcgd2FybmluZ1xuICogICAgICAgICAgICAgICAgICAgaGFzIG9jY3VycmVkLiBQYXNzZXMgMSkgYSB3YXJuaW5nIG1lc3NhZ2UgYXMgYW4gYXJndW1lbnQuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBbb3B0aW9ucy5vbkVycm9yXSBDYWxsYmFjayBhZnRlciBhIENTUyBwYXJzaW5nIGVycm9yIGhhc1xuICogICAgICAgICAgICAgICAgICAgb2NjdXJyZWQgb3IgYW4gWEhSIHJlcXVlc3QgaGFzIGZhaWxlZC4gUGFzc2VzIDEpIGFuIGVycm9yXG4gKiAgICAgICAgICAgICAgICAgICBtZXNzYWdlLCBhbmQgMikgc291cmNlIG5vZGUgcmVmZXJlbmNlLCAzKSB4aHIsIGFuZCA0IHVybCBhc1xuICogICAgICAgICAgICAgICAgICAgYXJndW1lbnRzLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gW29wdGlvbnMub25Db21wbGV0ZV0gQ2FsbGJhY2sgYWZ0ZXIgYWxsIENTUyBoYXMgYmVlblxuICogICAgICAgICAgICAgICAgICAgcHJvY2Vzc2VkLCBsZWdhY3ktY29tcGF0aWJsZSBDU1MgaGFzIGJlZW4gZ2VuZXJhdGVkLCBhbmRcbiAqICAgICAgICAgICAgICAgICAgIChvcHRpb25hbGx5KSB0aGUgRE9NIGhhcyBiZWVuIHVwZGF0ZWQuIFBhc3NlcyAxKSBhIENTU1xuICogICAgICAgICAgICAgICAgICAgc3RyaW5nIHdpdGggQ1NTIHZhcmlhYmxlIHZhbHVlcyByZXNvbHZlZCwgMikgYSByZWZlcmVuY2UgdG9cbiAqICAgICAgICAgICAgICAgICAgIHRoZSBhcHBlbmRlZCA8c3R5bGU+IG5vZGUsIDMpIGFuIG9iamVjdCBjb250YWluaW5nIGFsbFxuICogICAgICAgICAgICAgICAgICAgY3VzdG9tIHByb3BlcmllcyBuYW1lcyBhbmQgdmFsdWVzLCBhbmQgNCkgdGhlIHBvbnlmaWxsXG4gKiAgICAgICAgICAgICAgICAgICBleGVjdXRpb24gdGltZSBpbiBtaWxsaXNlY29uZHMuXG4gKlxuICogQGV4YW1wbGVcbiAqXG4gKiAgIGNzc1ZhcnMoe1xuICogICAgIHJvb3RFbGVtZW50ICA6IGRvY3VtZW50LFxuICogICAgIHNoYWRvd0RPTSAgICA6IGZhbHNlLFxuICogICAgIGluY2x1ZGUgICAgICA6ICdzdHlsZSxsaW5rW3JlbD1cInN0eWxlc2hlZXRcIl0nLFxuICogICAgIGV4Y2x1ZGUgICAgICA6ICcnLFxuICogICAgIHZhcmlhYmxlcyAgICA6IHt9LFxuICogICAgIGZpeE5lc3RlZENhbGM6IHRydWUsXG4gKiAgICAgb25seUxlZ2FjeSAgIDogdHJ1ZSxcbiAqICAgICBvbmx5VmFycyAgICAgOiBmYWxzZSxcbiAqICAgICBwcmVzZXJ2ZSAgICAgOiBmYWxzZSxcbiAqICAgICBzaWxlbnQgICAgICAgOiBmYWxzZSxcbiAqICAgICB1cGRhdGVET00gICAgOiB0cnVlLFxuICogICAgIHVwZGF0ZVVSTHMgICA6IHRydWUsXG4gKiAgICAgd2F0Y2ggICAgICAgIDogZmFsc2UsXG4gKiAgICAgb25CZWZvcmVTZW5kKHhociwgbm9kZSwgdXJsKSB7fSxcbiAqICAgICBvblN1Y2Nlc3MoY3NzVGV4dCwgbm9kZSwgdXJsKSB7fSxcbiAqICAgICBvbldhcm5pbmcobWVzc2FnZSkge30sXG4gKiAgICAgb25FcnJvcihtZXNzYWdlLCBub2RlLCB4aHIsIHVybCkge30sXG4gKiAgICAgb25Db21wbGV0ZShjc3NUZXh0LCBzdHlsZU5vZGUsIGNzc1ZhcmlhYmxlcywgYmVuY2htYXJrKSB7fVxuICogICB9KTtcbiAqLyBmdW5jdGlvbiBjc3NWYXJzKCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICB2YXIgc2V0dGluZ3MgPSBfZXh0ZW5kcyh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuICAgIHZhciBzdHlsZU5vZGVJZCA9IG5hbWU7XG4gICAgc2V0dGluZ3MuZXhjbHVkZSA9IFwiI1wiLmNvbmNhdChzdHlsZU5vZGVJZCkgKyAoc2V0dGluZ3MuZXhjbHVkZSA/IFwiLFwiLmNvbmNhdChzZXR0aW5ncy5leGNsdWRlKSA6IFwiXCIpO1xuICAgIHNldHRpbmdzLl9iZW5jaG1hcmsgPSAhc2V0dGluZ3MuX2JlbmNobWFyayA/IGdldFRpbWVTdGFtcCgpIDogc2V0dGluZ3MuX2JlbmNobWFyaztcbiAgICBmdW5jdGlvbiBoYW5kbGVFcnJvcihtZXNzYWdlLCBzb3VyY2VOb2RlLCB4aHIsIHVybCkge1xuICAgICAgICBpZiAoIXNldHRpbmdzLnNpbGVudCkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlwiLmNvbmNhdChjb25zb2xlTXNnUHJlZml4KS5jb25jYXQobWVzc2FnZSwgXCJcXG5cIiksIHNvdXJjZU5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIHNldHRpbmdzLm9uRXJyb3IobWVzc2FnZSwgc291cmNlTm9kZSwgeGhyLCB1cmwpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBoYW5kbGVXYXJuaW5nKG1lc3NhZ2UpIHtcbiAgICAgICAgaWYgKCFzZXR0aW5ncy5zaWxlbnQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIlwiLmNvbmNhdChjb25zb2xlTXNnUHJlZml4KS5jb25jYXQobWVzc2FnZSkpO1xuICAgICAgICB9XG4gICAgICAgIHNldHRpbmdzLm9uV2FybmluZyhtZXNzYWdlKTtcbiAgICB9XG4gICAgaWYgKCFpc0Jyb3dzZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoc2V0dGluZ3Mud2F0Y2ggPT09IGZhbHNlICYmIGNzc1ZhcnNPYnNlcnZlcikge1xuICAgICAgICBjc3NWYXJzT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgIH1cbiAgICBpZiAoc2V0dGluZ3Mud2F0Y2gpIHtcbiAgICAgICAgYWRkTXV0YXRpb25PYnNlcnZlcihzZXR0aW5ncywgc3R5bGVOb2RlSWQpO1xuICAgICAgICBjc3NWYXJzRGVib3VuY2VkKHNldHRpbmdzKTtcbiAgICB9IGVsc2UgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgIT09IFwibG9hZGluZ1wiKSB7XG4gICAgICAgIHZhciBpc1NoYWRvd0VsbSA9IHNldHRpbmdzLnNoYWRvd0RPTSB8fCBzZXR0aW5ncy5yb290RWxlbWVudC5zaGFkb3dSb290IHx8IHNldHRpbmdzLnJvb3RFbGVtZW50Lmhvc3Q7XG4gICAgICAgIGlmIChpc05hdGl2ZVN1cHBvcnQgJiYgc2V0dGluZ3Mub25seUxlZ2FjeSkge1xuICAgICAgICAgICAgaWYgKHNldHRpbmdzLnVwZGF0ZURPTSkge1xuICAgICAgICAgICAgICAgIHZhciB0YXJnZXRFbG0gPSBzZXR0aW5ncy5yb290RWxlbWVudC5ob3N0IHx8IChzZXR0aW5ncy5yb290RWxlbWVudCA9PT0gZG9jdW1lbnQgPyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgOiBzZXR0aW5ncy5yb290RWxlbWVudCk7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoc2V0dGluZ3MudmFyaWFibGVzKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcHJvcCA9IFwiLS1cIi5jb25jYXQoa2V5LnJlcGxhY2UoL14tKy8sIFwiXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gc2V0dGluZ3MudmFyaWFibGVzW2tleV07XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldEVsbS5zdHlsZS5zZXRQcm9wZXJ0eShwcm9wLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoaXNTaGFkb3dFbG0gJiYgIWlzU2hhZG93RE9NUmVhZHkpIHtcbiAgICAgICAgICAgIGdldENzc0RhdGEoe1xuICAgICAgICAgICAgICAgIHJvb3RFbGVtZW50OiBkZWZhdWx0cy5yb290RWxlbWVudCxcbiAgICAgICAgICAgICAgICBpbmNsdWRlOiBkZWZhdWx0cy5pbmNsdWRlLFxuICAgICAgICAgICAgICAgIGV4Y2x1ZGU6IHNldHRpbmdzLmV4Y2x1ZGUsXG4gICAgICAgICAgICAgICAgb25TdWNjZXNzOiBmdW5jdGlvbiBvblN1Y2Nlc3MoY3NzVGV4dCwgbm9kZSwgdXJsKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjc3NSb290RGVjbHMgPSAoY3NzVGV4dC5tYXRjaChyZWdleC5jc3NSb290UnVsZXMpIHx8IFtdKS5qb2luKFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3NzUm9vdERlY2xzIHx8IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25Db21wbGV0ZTogZnVuY3Rpb24gb25Db21wbGV0ZShjc3NUZXh0LCBjc3NBcnJheSwgbm9kZUFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybVZhcnMoY3NzVGV4dCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGVyc2lzdDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgaXNTaGFkb3dET01SZWFkeSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGNzc1ZhcnMoc2V0dGluZ3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ2V0Q3NzRGF0YSh7XG4gICAgICAgICAgICAgICAgcm9vdEVsZW1lbnQ6IHNldHRpbmdzLnJvb3RFbGVtZW50LFxuICAgICAgICAgICAgICAgIGluY2x1ZGU6IHNldHRpbmdzLmluY2x1ZGUsXG4gICAgICAgICAgICAgICAgZXhjbHVkZTogc2V0dGluZ3MuZXhjbHVkZSxcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IHNldHRpbmdzLm9ubHlWYXJzID8gcmVnZXguY3NzVmFycyA6IG51bGwsXG4gICAgICAgICAgICAgICAgb25CZWZvcmVTZW5kOiBzZXR0aW5ncy5vbkJlZm9yZVNlbmQsXG4gICAgICAgICAgICAgICAgb25TdWNjZXNzOiBmdW5jdGlvbiBvblN1Y2Nlc3MoY3NzVGV4dCwgbm9kZSwgdXJsKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXR1cm5WYWwgPSBzZXR0aW5ncy5vblN1Y2Nlc3MoY3NzVGV4dCwgbm9kZSwgdXJsKTtcbiAgICAgICAgICAgICAgICAgICAgY3NzVGV4dCA9IHJldHVyblZhbCAhPT0gdW5kZWZpbmVkICYmIEJvb2xlYW4ocmV0dXJuVmFsKSA9PT0gZmFsc2UgPyBcIlwiIDogcmV0dXJuVmFsIHx8IGNzc1RleHQ7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKFwiZGF0YS1jc3N2YXJzXCIsIFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2V0dGluZ3MudXBkYXRlVVJMcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNzc1VybHMgPSBjc3NUZXh0LnJlcGxhY2UocmVnZXguY3NzQ29tbWVudHMsIFwiXCIpLm1hdGNoKHJlZ2V4LmNzc1VybHMpIHx8IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3NzVXJscy5mb3JFYWNoKGZ1bmN0aW9uKGNzc1VybCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvbGRVcmwgPSBjc3NVcmwucmVwbGFjZShyZWdleC5jc3NVcmxzLCBcIiQxXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuZXdVcmwgPSBnZXRGdWxsVXJsJDEob2xkVXJsLCB1cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNzc1RleHQgPSBjc3NUZXh0LnJlcGxhY2UoY3NzVXJsLCBjc3NVcmwucmVwbGFjZShvbGRVcmwsIG5ld1VybCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNzc1RleHQ7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbkVycm9yOiBmdW5jdGlvbiBvbkVycm9yKHhociwgbm9kZSwgdXJsKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXNwb25zZVVybCA9IHhoci5yZXNwb25zZVVSTCB8fCBnZXRGdWxsVXJsJDEodXJsLCBsb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0YXR1c1RleHQgPSB4aHIuc3RhdHVzVGV4dCA/IFwiKFwiLmNvbmNhdCh4aHIuc3RhdHVzVGV4dCwgXCIpXCIpIDogXCJVbnNwZWNpZmllZCBFcnJvclwiICsgKHhoci5zdGF0dXMgPT09IDAgPyBcIiAocG9zc2libHkgQ09SUyByZWxhdGVkKVwiIDogXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlcnJvck1zZyA9IFwiQ1NTIFhIUiBFcnJvcjogXCIuY29uY2F0KHJlc3BvbnNlVXJsLCBcIiBcIikuY29uY2F0KHhoci5zdGF0dXMsIFwiIFwiKS5jb25jYXQoc3RhdHVzVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZUVycm9yKGVycm9yTXNnLCBub2RlLCB4aHIsIHJlc3BvbnNlVXJsKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uQ29tcGxldGU6IGZ1bmN0aW9uIG9uQ29tcGxldGUoY3NzVGV4dCwgY3NzQXJyYXksIG5vZGVBcnJheSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY3NzTWFya2VyID0gL1xcL1xcKl9fQ1NTVkFSU1BPTllGSUxMLShcXGQrKV9fXFwqXFwvL2c7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjc3NTZXR0aW5ncyA9IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluY2x1ZGU6IHNldHRpbmdzLmluY2x1ZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBleGNsdWRlOiBzZXR0aW5ncy5leGNsdWRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiBzZXR0aW5ncy52YXJpYWJsZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICBmaXhOZXN0ZWRDYWxjOiBzZXR0aW5ncy5maXhOZXN0ZWRDYWxjLFxuICAgICAgICAgICAgICAgICAgICAgICAgb25seVZhcnM6IHNldHRpbmdzLm9ubHlWYXJzLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VydmU6IHNldHRpbmdzLnByZXNlcnZlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2lsZW50OiBzZXR0aW5ncy5zaWxlbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVVUkxzOiBzZXR0aW5ncy51cGRhdGVVUkxzXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3R5bGVOb2RlID0gc2V0dGluZ3Mucm9vdEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIiNcIi5jb25jYXQoc3R5bGVOb2RlSWQpKSB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwcmV2RGF0YSA9IHN0eWxlTm9kZS5fX2Nzc1ZhcnMgfHwge307XG4gICAgICAgICAgICAgICAgICAgIHZhciBpc1NhbWVEYXRhID0gcHJldkRhdGEuY3NzVGV4dCA9PT0gY3NzVGV4dCAmJiBwcmV2RGF0YS5zZXR0aW5ncyA9PT0gY3NzU2V0dGluZ3M7XG4gICAgICAgICAgICAgICAgICAgIHZhciBoYXNLZXlmcmFtZXNXaXRoVmFycztcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzU2FtZURhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNzc1RleHQgPSBzdHlsZU5vZGUudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXNldHRpbmdzLnNpbGVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuaW5mbyhcIlwiLmNvbmNhdChjb25zb2xlTXNnUHJlZml4LCBcIk5vIGNoYW5nZXNcIiksIHN0eWxlTm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZU5vZGUuX19jc3NWYXJzID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNzc1RleHQ6IGNzc1RleHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IGNzc1NldHRpbmdzXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgY3NzVGV4dCA9IGNzc0FycmF5Lm1hcChmdW5jdGlvbihjc3MsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVnZXguY3NzVmFycy50ZXN0KGNzcykgPyBjc3MgOiBcIi8qX19DU1NWQVJTUE9OWUZJTEwtXCIuY29uY2F0KGksIFwiX18qL1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLmpvaW4oXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNzc1RleHQgPSB0cmFuc2Zvcm1WYXJzKGNzc1RleHQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZml4TmVzdGVkQ2FsYzogc2V0dGluZ3MuZml4TmVzdGVkQ2FsYyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25seVZhcnM6IHNldHRpbmdzLm9ubHlWYXJzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZXJzaXN0OiBzZXR0aW5ncy51cGRhdGVET00sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlcnZlOiBzZXR0aW5ncy5wcmVzZXJ2ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiBzZXR0aW5ncy52YXJpYWJsZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uV2FybmluZzogaGFuZGxlV2FybmluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc0tleWZyYW1lc1dpdGhWYXJzID0gcmVnZXguY3NzS2V5ZnJhbWVzLnRlc3QoY3NzVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3NzVGV4dCA9IGNzc1RleHQucmVwbGFjZShjc3NNYXJrZXIsIGZ1bmN0aW9uKG1hdGNoLCBncm91cDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNzc0FycmF5W2dyb3VwMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXJyb3JUaHJvd24gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjc3NBcnJheS5mb3JFYWNoKGZ1bmN0aW9uKGNzc1RleHQsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNzc1RleHQgPSB0cmFuc2Zvcm1WYXJzKGNzc1RleHQsIHNldHRpbmdzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXJyb3JOb2RlID0gbm9kZUFycmF5W2kgLSAwXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yVGhyb3duID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUVycm9yKGVyci5tZXNzYWdlLCBlcnJvck5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFlcnJvclRocm93bikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVFcnJvcihlcnIubWVzc2FnZSB8fCBlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoc2V0dGluZ3Muc2hhZG93RE9NKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZWxtcyA9IFsgc2V0dGluZ3Mucm9vdEVsZW1lbnQgXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KHNldHRpbmdzLnJvb3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIqXCIpKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgZWxtOyBlbG0gPSBlbG1zW2ldOyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxtLnNoYWRvd1Jvb3QgJiYgZWxtLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihcInN0eWxlXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzaGFkb3dTZXR0aW5ncyA9IF9leHRlbmRzKHt9LCBzZXR0aW5ncywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9vdEVsZW1lbnQ6IGVsbS5zaGFkb3dSb290LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiB2YXJpYWJsZVN0b3JlLmRvbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3NzVmFycyhzaGFkb3dTZXR0aW5ncyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNTYW1lRGF0YSAmJiBub2RlQXJyYXkgJiYgbm9kZUFycmF5Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNzc05vZGVzID0gc2V0dGluZ3Mucm9vdEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcImxpbmtbZGF0YS1jc3N2YXJzXSxzdHlsZVtkYXRhLWNzc3ZhcnNdXCIpIHx8IHNldHRpbmdzLnJvb3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpbmtbcmVsKz1cInN0eWxlc2hlZXRcIl0sc3R5bGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsYXN0Tm9kZSA9IGNzc05vZGVzID8gY3NzTm9kZXNbY3NzTm9kZXMubGVuZ3RoIC0gMV0gOiBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhc3ROb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdE5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoc3R5bGVOb2RlLCBsYXN0Tm9kZS5uZXh0U2libGluZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0YXJnZXROb2RlID0gc2V0dGluZ3Mucm9vdEVsZW1lbnQuaGVhZCB8fCBzZXR0aW5ncy5yb290RWxlbWVudC5ib2R5IHx8IHNldHRpbmdzLnJvb3RFbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldE5vZGUuYXBwZW5kQ2hpbGQoc3R5bGVOb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZXR0aW5ncy51cGRhdGVET00pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZU5vZGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgc3R5bGVOb2RlSWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlTm9kZS50ZXh0Q29udGVudCA9IGNzc1RleHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGhhc0tleWZyYW1lc1dpdGhWYXJzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpeEtleWZyYW1lcyhzZXR0aW5ncy5yb290RWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3Mub25Db21wbGV0ZShjc3NUZXh0LCBzdHlsZU5vZGUsIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoc2V0dGluZ3MudXBkYXRlRE9NID8gdmFyaWFibGVTdG9yZS5kb20gOiB2YXJpYWJsZVN0b3JlLnRlbXApKSwgZ2V0VGltZVN0YW1wKCkgLSBzZXR0aW5ncy5fYmVuY2htYXJrKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gaW5pdChldnQpIHtcbiAgICAgICAgICAgIGNzc1ZhcnMob3B0aW9ucyk7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBpbml0KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjc3NWYXJzRGVib3VuY2VkKHNldHRpbmdzKSB7XG4gICAgY2xlYXJUaW1lb3V0KGRlYm91bmNlVGltZXIpO1xuICAgIGRlYm91bmNlVGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBzZXR0aW5ncy5fYmVuY2htYXJrID0gbnVsbDtcbiAgICAgICAgY3NzVmFycyhzZXR0aW5ncyk7XG4gICAgfSwgMTAwKTtcbn1cblxuZnVuY3Rpb24gYWRkTXV0YXRpb25PYnNlcnZlcihzZXR0aW5ncywgaWdub3JlSWQpIHtcbiAgICBpZiAoIXdpbmRvdy5NdXRhdGlvbk9ic2VydmVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIGlzTGluayA9IGZ1bmN0aW9uIGlzTGluayhub2RlKSB7XG4gICAgICAgIHJldHVybiBub2RlLnRhZ05hbWUgPT09IFwiTElOS1wiICYmIChub2RlLmdldEF0dHJpYnV0ZShcInJlbFwiKSB8fCBcIlwiKS5pbmRleE9mKFwic3R5bGVzaGVldFwiKSAhPT0gLTE7XG4gICAgfTtcbiAgICB2YXIgaXNTdHlsZSA9IGZ1bmN0aW9uIGlzU3R5bGUobm9kZSkge1xuICAgICAgICByZXR1cm4gbm9kZS50YWdOYW1lID09PSBcIlNUWUxFXCIgJiYgKGlnbm9yZUlkID8gbm9kZS5pZCAhPT0gaWdub3JlSWQgOiB0cnVlKTtcbiAgICB9O1xuICAgIGlmIChjc3NWYXJzT2JzZXJ2ZXIpIHtcbiAgICAgICAgY3NzVmFyc09ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICB9XG4gICAgc2V0dGluZ3Mud2F0Y2ggPSBkZWZhdWx0cy53YXRjaDtcbiAgICBjc3NWYXJzT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbihtdXRhdGlvbnMpIHtcbiAgICAgICAgdmFyIGhhc0NTU011dGF0aW9uID0gbXV0YXRpb25zLnNvbWUoZnVuY3Rpb24obXV0YXRpb24pIHtcbiAgICAgICAgICAgIHZhciBpc0NTU011dGF0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAobXV0YXRpb24udHlwZSA9PT0gXCJhdHRyaWJ1dGVzXCIpIHtcbiAgICAgICAgICAgICAgICBpc0NTU011dGF0aW9uID0gaXNMaW5rKG11dGF0aW9uLnRhcmdldCkgfHwgaXNTdHlsZShtdXRhdGlvbi50YXJnZXQpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChtdXRhdGlvbi50eXBlID09PSBcImNoaWxkTGlzdFwiKSB7XG4gICAgICAgICAgICAgICAgdmFyIGFkZGVkTm9kZXMgPSBBcnJheS5hcHBseShudWxsLCBtdXRhdGlvbi5hZGRlZE5vZGVzKTtcbiAgICAgICAgICAgICAgICB2YXIgcmVtb3ZlZE5vZGVzID0gQXJyYXkuYXBwbHkobnVsbCwgbXV0YXRpb24ucmVtb3ZlZE5vZGVzKTtcbiAgICAgICAgICAgICAgICBpc0NTU011dGF0aW9uID0gW10uY29uY2F0KGFkZGVkTm9kZXMsIHJlbW92ZWROb2Rlcykuc29tZShmdW5jdGlvbihub2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpc1ZhbGlkTGluayA9IGlzTGluayhub2RlKSAmJiAhbm9kZS5kaXNhYmxlZDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlzVmFsaWRTdHlsZSA9IGlzU3R5bGUobm9kZSkgJiYgcmVnZXguY3NzVmFycy50ZXN0KG5vZGUudGV4dENvbnRlbnQpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXNWYWxpZExpbmsgfHwgaXNWYWxpZFN0eWxlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGlzQ1NTTXV0YXRpb247XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoaGFzQ1NTTXV0YXRpb24pIHtcbiAgICAgICAgICAgIGNzc1ZhcnNEZWJvdW5jZWQoc2V0dGluZ3MpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgY3NzVmFyc09ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCB7XG4gICAgICAgIGF0dHJpYnV0ZXM6IHRydWUsXG4gICAgICAgIGF0dHJpYnV0ZUZpbHRlcjogWyBcImRpc2FibGVkXCIsIFwiaHJlZlwiIF0sXG4gICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgc3VidHJlZTogdHJ1ZVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBmaXhLZXlmcmFtZXMocm9vdEVsZW1lbnQpIHtcbiAgICB2YXIgYW5pbWF0aW9uTmFtZVByb3AgPSBbIFwiYW5pbWF0aW9uLW5hbWVcIiwgXCItbW96LWFuaW1hdGlvbi1uYW1lXCIsIFwiLXdlYmtpdC1hbmltYXRpb24tbmFtZVwiIF0uZmlsdGVyKGZ1bmN0aW9uKHByb3ApIHtcbiAgICAgICAgcmV0dXJuIGdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuYm9keSlbcHJvcF07XG4gICAgfSlbMF07XG4gICAgaWYgKGFuaW1hdGlvbk5hbWVQcm9wKSB7XG4gICAgICAgIHZhciBhbGxOb2RlcyA9IHJvb3RFbGVtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiKlwiKTtcbiAgICAgICAgdmFyIGtleWZyYW1lTm9kZXMgPSBbXTtcbiAgICAgICAgdmFyIG5hbWVNYXJrZXIgPSBcIl9fQ1NTVkFSU1BPTllGSUxMLUtFWUZSQU1FU19fXCI7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBhbGxOb2Rlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgdmFyIG5vZGUgPSBhbGxOb2Rlc1tpXTtcbiAgICAgICAgICAgIHZhciBhbmltYXRpb25OYW1lID0gZ2V0Q29tcHV0ZWRTdHlsZShub2RlKVthbmltYXRpb25OYW1lUHJvcF07XG4gICAgICAgICAgICBpZiAoYW5pbWF0aW9uTmFtZSAhPT0gXCJub25lXCIpIHtcbiAgICAgICAgICAgICAgICBub2RlLnN0eWxlW2FuaW1hdGlvbk5hbWVQcm9wXSArPSBuYW1lTWFya2VyO1xuICAgICAgICAgICAgICAgIGtleWZyYW1lTm9kZXMucHVzaChub2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2b2lkIGRvY3VtZW50LmJvZHkub2Zmc2V0SGVpZ2h0O1xuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9sZW4gPSBrZXlmcmFtZU5vZGVzLmxlbmd0aDsgX2kgPCBfbGVuOyBfaSsrKSB7XG4gICAgICAgICAgICB2YXIgbm9kZVN0eWxlID0ga2V5ZnJhbWVOb2Rlc1tfaV0uc3R5bGU7XG4gICAgICAgICAgICBub2RlU3R5bGVbYW5pbWF0aW9uTmFtZVByb3BdID0gbm9kZVN0eWxlW2FuaW1hdGlvbk5hbWVQcm9wXS5yZXBsYWNlKG5hbWVNYXJrZXIsIFwiXCIpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXRGdWxsVXJsJDEodXJsKSB7XG4gICAgdmFyIGJhc2UgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGxvY2F0aW9uLmhyZWY7XG4gICAgdmFyIGQgPSBkb2N1bWVudC5pbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnQoXCJcIik7XG4gICAgdmFyIGIgPSBkLmNyZWF0ZUVsZW1lbnQoXCJiYXNlXCIpO1xuICAgIHZhciBhID0gZC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBkLmhlYWQuYXBwZW5kQ2hpbGQoYik7XG4gICAgZC5ib2R5LmFwcGVuZENoaWxkKGEpO1xuICAgIGIuaHJlZiA9IGJhc2U7XG4gICAgYS5ocmVmID0gdXJsO1xuICAgIHJldHVybiBhLmhyZWY7XG59XG5cbmZ1bmN0aW9uIGdldFRpbWVTdGFtcCgpIHtcbiAgICByZXR1cm4gaXNCcm93c2VyICYmICh3aW5kb3cucGVyZm9ybWFuY2UgfHwge30pLm5vdyA/IHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKSA6IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xufVxuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIF9fd2VicGFja19leHBvcnRzX19bXCJkZWZhdWx0XCJdID0gKGNzc1ZhcnMpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y3NzLXZhcnMtcG9ueWZpbGwuZXNtLmpzLm1hcFxuXG5cbi8qKiovIH0pXG4vKioqKioqLyBdKTsiXX0=
