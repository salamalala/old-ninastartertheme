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
function (module, exports, __webpack_require__) {
  "use strict";

  document.addEventListener('DOMContentLoaded', function () {}, false);
  /***/
}
/******/
]);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjg2NDUxZTQ3MGFlZWExYmNkNzFkLmpzIl0sIm5hbWVzIjpbIm1vZHVsZXMiLCJpbnN0YWxsZWRNb2R1bGVzIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiZXhwb3J0cyIsIm1vZHVsZSIsImkiLCJsIiwiY2FsbCIsIm0iLCJjIiwiZCIsIm5hbWUiLCJnZXR0ZXIiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiciIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIiwidmFsdWUiLCJ0IiwibW9kZSIsIl9fZXNNb2R1bGUiLCJucyIsImNyZWF0ZSIsImtleSIsImJpbmQiLCJuIiwiZ2V0RGVmYXVsdCIsImdldE1vZHVsZUV4cG9ydHMiLCJvYmplY3QiLCJwcm9wZXJ0eSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwicCIsInMiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUFTLENBQUMsVUFBU0EsT0FBVCxFQUFrQjtBQUFFOztBQUM5QjtBQUFVOztBQUNWO0FBQVUsTUFBSUMsZ0JBQWdCLEdBQUcsRUFBdkI7QUFDVjs7QUFDQTtBQUFVOztBQUNWOztBQUFVLFdBQVNDLG1CQUFULENBQTZCQyxRQUE3QixFQUF1QztBQUNqRDs7QUFDQTtBQUFXOztBQUNYO0FBQVcsUUFBR0YsZ0JBQWdCLENBQUNFLFFBQUQsQ0FBbkIsRUFBK0I7QUFDMUM7QUFBWSxhQUFPRixnQkFBZ0IsQ0FBQ0UsUUFBRCxDQUFoQixDQUEyQkMsT0FBbEM7QUFDWjtBQUFZO0FBQ1o7QUFBVzs7QUFDWDs7O0FBQVcsUUFBSUMsTUFBTSxHQUFHSixnQkFBZ0IsQ0FBQ0UsUUFBRCxDQUFoQixHQUE2QjtBQUNyRDtBQUFZRyxNQUFBQSxDQUFDLEVBQUVILFFBRHNDOztBQUVyRDtBQUFZSSxNQUFBQSxDQUFDLEVBQUUsS0FGc0M7O0FBR3JEO0FBQVlILE1BQUFBLE9BQU8sRUFBRTtB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R0FBd0IsRUFBeEI7QUFDVjs7QUFDQTs7QUFDQTtBQUFVOztBQUNWOztBQUFVLFNBQU9uQyxtQkFBbUIsQ0FBQ0EsbUJBQW1CLENBQUNvQyxDQUFwQixHQUF3QixDQUF6QixDQUExQjtBQUNWO0FBQVUsQ0FwRkQ7QUFxRlQ7O0FBQ0E7QUFBVTtBQUNWOztBQUNBO0FBQU8sVUFBU2pDLE1BQVQsRUFBaUJELE9BQWpCLEVBQTBCRixtQkFBMUIsRUFBK0M7QUFFdEQ7O0FBR0FxQyxFQUFBQSxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFZLENBQUUsQ0FBNUQsRUFBOEQsS0FBOUQ7QUFFQTtBQUFPO0FBQ1A7QUFWVSxDQXRGRCIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRpOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGw6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbi8qKioqKiovIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbi8qKioqKiovIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4vKioqKioqLyBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4vKioqKioqLyBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuLyoqKioqKi8gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4vKioqKioqLyBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuLyoqKioqKi8gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4vKioqKioqLyBcdFx0cmV0dXJuIG5zO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4vKioqKioqLyBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4vKioqKioqLyBcdFx0cmV0dXJuIGdldHRlcjtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKFtcbi8qIDAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHt9LCBmYWxzZSk7XG5cbi8qKiovIH0pXG4vKioqKioqLyBdKTsiXX0=
