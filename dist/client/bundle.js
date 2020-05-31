/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/client/app.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/events/events.js":
/*!***************************************!*\
  !*** ./node_modules/events/events.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  checkListener(listener);

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}


/***/ }),

/***/ "./node_modules/load-script2/index.js":
/*!********************************************!*\
  !*** ./node_modules/load-script2/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function loadScript2 (src, attrs, parentNode) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.async = true
    script.src = src

    for (const [k, v] of Object.entries(attrs || {})) {
      script.setAttribute(k, v)
    }

    script.onload = () => {
      script.onerror = script.onload = null
      resolve(script)
    }

    script.onerror = () => {
      script.onerror = script.onload = null
      reject(new Error(`Failed to load ${src}`))
    }

    const node = parentNode || document.head || document.getElementsByTagName('head')[0]
    node.appendChild(script)
  })
}


/***/ }),

/***/ "./node_modules/yt-player/index.js":
/*!*****************************************!*\
  !*** ./node_modules/yt-player/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const EventEmitter = __webpack_require__(/*! events */ "./node_modules/events/events.js").EventEmitter
const loadScript = __webpack_require__(/*! load-script2 */ "./node_modules/load-script2/index.js")

const YOUTUBE_IFRAME_API_SRC = 'https://www.youtube.com/iframe_api'

const YOUTUBE_STATES = {
  '-1': 'unstarted',
  0: 'ended',
  1: 'playing',
  2: 'paused',
  3: 'buffering',
  5: 'cued'
}

const YOUTUBE_ERROR = {
  // The request contains an invalid parameter value. For example, this error
  // occurs if you specify a videoId that does not have 11 characters, or if the
  // videoId contains invalid characters, such as exclamation points or asterisks.
  INVALID_PARAM: 2,

  // The requested content cannot be played in an HTML5 player or another error
  // related to the HTML5 player has occurred.
  HTML5_ERROR: 5,

  // The video requested was not found. This error occurs when a video has been
  // removed (for any reason) or has been marked as private.
  NOT_FOUND: 100,

  // The owner of the requested video does not allow it to be played in embedded
  // players.
  UNPLAYABLE_1: 101,

  // This error is the same as 101. It's just a 101 error in disguise!
  UNPLAYABLE_2: 150
}

const loadIframeAPICallbacks = []

/**
 * YouTube Player. Exposes a better API, with nicer events.
 * @param {HTMLElement|selector} element
 */
class YouTubePlayer extends EventEmitter {
  constructor (element, opts) {
    super()

    const elem = typeof element === 'string'
      ? document.querySelector(element)
      : element

    if (elem.id) {
      this._id = elem.id // use existing element id
    } else {
      this._id = elem.id = 'ytplayer-' + Math.random().toString(16).slice(2, 8)
    }

    this._opts = Object.assign({
      width: 640,
      height: 360,
      autoplay: false,
      captions: undefined,
      controls: true,
      keyboard: true,
      fullscreen: true,
      annotations: true,
      modestBranding: false,
      related: true,
      timeupdateFrequency: 1000,
      playsInline: true
    }, opts)

    this.videoId = null
    this.destroyed = false

    this._api = null
    this._autoplay = false // autoplay the first video?
    this._player = null
    this._ready = false // is player ready?
    this._queue = []

    this._interval = null

    // Setup listeners for 'timeupdate' events. The YouTube Player does not fire
    // 'timeupdate' events, so they are simulated using a setInterval().
    this._startInterval = this._startInterval.bind(this)
    this._stopInterval = this._stopInterval.bind(this)

    this.on('playing', this._startInterval)
    this.on('unstarted', this._stopInterval)
    this.on('ended', this._stopInterval)
    this.on('paused', this._stopInterval)
    this.on('buffering', this._stopInterval)

    this._loadIframeAPI((err, api) => {
      if (err) return this._destroy(new Error('YouTube Iframe API failed to load'))
      this._api = api

      // If load(videoId, [autoplay]) was called before Iframe API loaded, ensure it gets
      // called again now
      if (this.videoId) this.load(this.videoId, this._autoplay)
    })
  }

  load (videoId, autoplay = false) {
    if (this.destroyed) return

    this.videoId = videoId
    this._autoplay = autoplay

    // If the Iframe API is not ready yet, do nothing. Once the Iframe API is
    // ready, `load(this.videoId)` will be called.
    if (!this._api) return

    // If there is no player instance, create one.
    if (!this._player) {
      this._createPlayer(videoId)
      return
    }

    // If the player instance is not ready yet, do nothing. Once the player
    // instance is ready, `load(this.videoId)` will be called. This ensures that
    // the last call to `load()` is the one that takes effect.
    if (!this._ready) return

    // If the player instance is ready, load the given `videoId`.
    if (autoplay) {
      this._player.loadVideoById(videoId)
    } else {
      this._player.cueVideoById(videoId)
    }
  }

  play () {
    if (this._ready) this._player.playVideo()
    else this._queueCommand('play')
  }

  pause () {
    if (this._ready) this._player.pauseVideo()
    else this._queueCommand('pause')
  }

  stop () {
    if (this._ready) this._player.stopVideo()
    else this._queueCommand('stop')
  }

  seek (seconds) {
    if (this._ready) this._player.seekTo(seconds, true)
    else this._queueCommand('seek', seconds)
  }

  setVolume (volume) {
    if (this._ready) this._player.setVolume(volume)
    else this._queueCommand('setVolume', volume)
  }

  getVolume () {
    return (this._ready && this._player.getVolume()) || 0
  }

  mute () {
    if (this._ready) this._player.mute()
    else this._queueCommand('mute')
  }

  unMute () {
    if (this._ready) this._player.unMute()
    else this._queueCommand('unMute')
  }

  isMuted () {
    return (this._ready && this._player.isMuted()) || false
  }

  setSize (width, height) {
    if (this._ready) this._player.setSize(width, height)
    else this._queueCommand('setSize', width, height)
  }

  setPlaybackRate (rate) {
    if (this._ready) this._player.setPlaybackRate(rate)
    else this._queueCommand('setPlaybackRate', rate)
  }

  setPlaybackQuality (suggestedQuality) {
    if (this._ready) this._player.setPlaybackQuality(suggestedQuality)
    else this._queueCommand('setPlaybackQuality', suggestedQuality)
  }

  getPlaybackRate () {
    return (this._ready && this._player.getPlaybackRate()) || 1
  }

  getAvailablePlaybackRates () {
    return (this._ready && this._player.getAvailablePlaybackRates()) || [1]
  }

  getDuration () {
    return (this._ready && this._player.getDuration()) || 0
  }

  getProgress () {
    return (this._ready && this._player.getVideoLoadedFraction()) || 0
  }

  getState () {
    return (this._ready && YOUTUBE_STATES[this._player.getPlayerState()]) || 'unstarted'
  }

  getCurrentTime () {
    return (this._ready && this._player.getCurrentTime()) || 0
  }

  destroy () {
    this._destroy()
  }

  _destroy (err) {
    if (this.destroyed) return
    this.destroyed = true

    if (this._player) {
      this._player.stopVideo && this._player.stopVideo()
      this._player.destroy()
    }

    this.videoId = null

    this._id = null
    this._opts = null
    this._api = null
    this._player = null
    this._ready = false
    this._queue = null

    this._stopInterval()

    this.removeListener('playing', this._startInterval)
    this.removeListener('paused', this._stopInterval)
    this.removeListener('buffering', this._stopInterval)
    this.removeListener('unstarted', this._stopInterval)
    this.removeListener('ended', this._stopInterval)

    if (err) this.emit('error', err)
  }

  _queueCommand (command, ...args) {
    if (this.destroyed) return
    this._queue.push([command, args])
  }

  _flushQueue () {
    while (this._queue.length) {
      const command = this._queue.shift()
      this[command[0]].apply(this, command[1])
    }
  }

  _loadIframeAPI (cb) {
    // If API is loaded, there is nothing else to do
    if (window.YT && typeof window.YT.Player === 'function') {
      return cb(null, window.YT)
    }

    // Otherwise, queue callback until API is loaded
    loadIframeAPICallbacks.push(cb)

    const scripts = Array.from(document.getElementsByTagName('script'))
    const isLoading = scripts.some(script => script.src === YOUTUBE_IFRAME_API_SRC)

    // If API <script> tag is not present in the page, inject it. Ensures that
    // if user includes a hardcoded <script> tag in HTML for performance, another
    // one will not be added
    if (!isLoading) {
      loadScript(YOUTUBE_IFRAME_API_SRC).catch(err => {
        while (loadIframeAPICallbacks.length) {
          const loadCb = loadIframeAPICallbacks.shift()
          loadCb(err)
        }
      })
    }

    // If ready function is not present, create it
    if (typeof window.onYouTubeIframeAPIReady !== 'function') {
      window.onYouTubeIframeAPIReady = () => {
        while (loadIframeAPICallbacks.length) {
          const loadCb = loadIframeAPICallbacks.shift()
          loadCb(null, window.YT)
        }
      }
    }
  }

  _createPlayer (videoId) {
    if (this.destroyed) return

    const opts = this._opts

    this._player = new this._api.Player(this._id, {
      width: opts.width,
      height: opts.height,
      videoId: videoId,
      playerVars: {
        // This parameter specifies whether the initial video will automatically
        // start to play when the player loads. Supported values are 0 or 1. The
        // default value is 0.
        autoplay: opts.autoplay ? 1 : 0,

        // Setting the parameter's value to 1 causes closed captions to be shown
        // by default, even if the user has turned captions off. The default
        // behavior is based on user preference.
        cc_load_policy: opts.captions != null
          ? opts.captions !== false ? 1 : 0
          : undefined, // default to not setting this option

        // Sets the player's interface language. The parameter value is an ISO
        // 639-1 two-letter language code or a fully specified locale. For
        // example, fr and fr-ca are both valid values. Other language input
        // codes, such as IETF language tags (BCP 47) might also be handled
        // properly.
        hl: (opts.captions != null && opts.captions !== false)
          ? opts.captions
          : undefined, // default to not setting this option

        // This parameter specifies the default language that the player will
        // use to display captions. Set the parameter's value to an ISO 639-1
        // two-letter language code.
        cc_lang_pref: (opts.captions != null && opts.captions !== false)
          ? opts.captions
          : undefined, // default to not setting this option

        // This parameter indicates whether the video player controls are
        // displayed. For IFrame embeds that load a Flash player, it also defines
        // when the controls display in the player as well as when the player
        // will load. Supported values are:
        //   - controls=0 – Player controls do not display in the player. For
        //                  IFrame embeds, the Flash player loads immediately.
        //   - controls=1 – (default) Player controls display in the player. For
        //                  IFrame embeds, the controls display immediately and
        //                  the Flash player also loads immediately.
        //   - controls=2 – Player controls display in the player. For IFrame
        //                  embeds, the controls display and the Flash player
        //                  loads after the user initiates the video playback.
        controls: opts.controls ? 2 : 0,

        // Setting the parameter's value to 1 causes the player to not respond to
        // keyboard controls. The default value is 0, which means that keyboard
        // controls are enabled.
        disablekb: opts.keyboard ? 0 : 1,

        // Setting the parameter's value to 1 enables the player to be
        // controlled via IFrame or JavaScript Player API calls. The default
        // value is 0, which means that the player cannot be controlled using
        // those APIs.
        enablejsapi: 1,

        // Setting this parameter to 0 prevents the fullscreen button from
        // displaying in the player. The default value is 1, which causes the
        // fullscreen button to display.
        fs: opts.fullscreen ? 1 : 0,

        // Setting the parameter's value to 1 causes video annotations to be
        // shown by default, whereas setting to 3 causes video annotations to not
        // be shown by default. The default value is 1.
        iv_load_policy: opts.annotations ? 1 : 3,

        // This parameter lets you use a YouTube player that does not show a
        // YouTube logo. Set the parameter value to 1 to prevent the YouTube logo
        // from displaying in the control bar. Note that a small YouTube text
        // label will still display in the upper-right corner of a paused video
        // when the user's mouse pointer hovers over the player.
        modestbranding: opts.modestBranding ? 1 : 0,

        // This parameter provides an extra security measure for the IFrame API
        // and is only supported for IFrame embeds. If you are using the IFrame
        // API, which means you are setting the enablejsapi parameter value to 1,
        // you should always specify your domain as the origin parameter value.
        origin: window.location.origin,

        // This parameter controls whether videos play inline or fullscreen in an
        // HTML5 player on iOS. Valid values are:
        //   - 0: This value causes fullscreen playback. This is currently the
        //        default value, though the default is subject to change.
        //   - 1: This value causes inline playback for UIWebViews created with
        //        the allowsInlineMediaPlayback property set to TRUE.
        playsinline: opts.playsInline ? 1 : 0,

        // This parameter indicates whether the player should show related
        // videos from the same channel (0) or from any channel (1) when
        // playback of the video ends. The default value is 1.
        rel: opts.related ? 1 : 0,

        // (Not part of documented API) Allow html elements with higher z-index
        // to be shown on top of the YouTube player.
        wmode: 'opaque'
      },
      events: {
        onReady: () => this._onReady(videoId),
        onStateChange: (data) => this._onStateChange(data),
        onPlaybackQualityChange: (data) => this._onPlaybackQualityChange(data),
        onPlaybackRateChange: (data) => this._onPlaybackRateChange(data),
        onError: (data) => this._onError(data)
      }
    })
  }

  /**
   * This event fires when the player has finished loading and is ready to begin
   * receiving API calls.
   */
  _onReady (videoId) {
    if (this.destroyed) return

    this._ready = true

    // Once the player is ready, always call `load(videoId, [autoplay])` to handle
    // these possible cases:
    //
    //   1. `load(videoId, true)` was called before the player was ready. Ensure that
    //      the selected video starts to play.
    //
    //   2. `load(videoId, false)` was called before the player was ready. Now the
    //      player is ready and there's nothing to do.
    //
    //   3. `load(videoId, [autoplay])` was called multiple times before the player
    //      was ready. Therefore, the player was initialized with the wrong videoId,
    //      so load the latest videoId and potentially autoplay it.
    this.load(this.videoId, this._autoplay)

    this._flushQueue()
  }

  /**
   * Called when the player's state changes. We emit friendly events so the user
   * doesn't need to use YouTube's YT.PlayerState.* event constants.
   */
  _onStateChange (data) {
    if (this.destroyed) return

    const state = YOUTUBE_STATES[data.data]

    if (state) {
      // Send a 'timeupdate' anytime the state changes. When the video halts for any
      // reason ('paused', 'buffering', or 'ended') no further 'timeupdate' events
      // should fire until the video unhalts.
      if (['paused', 'buffering', 'ended'].includes(state)) this._onTimeupdate()

      this.emit(state)

      // When the video changes ('unstarted' or 'cued') or starts ('playing') then a
      // 'timeupdate' should follow afterwards (never before!) to reset the time.
      if (['unstarted', 'playing', 'cued'].includes(state)) this._onTimeupdate()
    } else {
      throw new Error('Unrecognized state change: ' + data)
    }
  }

  /**
   * This event fires whenever the video playback quality changes. Possible
   * values are: 'small', 'medium', 'large', 'hd720', 'hd1080', 'highres'.
   */
  _onPlaybackQualityChange (data) {
    if (this.destroyed) return
    this.emit('playbackQualityChange', data.data)
  }

  /**
   * This event fires whenever the video playback rate changes.
   */
  _onPlaybackRateChange (data) {
    if (this.destroyed) return
    this.emit('playbackRateChange', data.data)
  }

  /**
   * This event fires if an error occurs in the player.
   */
  _onError (data) {
    if (this.destroyed) return

    const code = data.data

    // The HTML5_ERROR error occurs when the YouTube player needs to switch from
    // HTML5 to Flash to show an ad. Ignore it.
    if (code === YOUTUBE_ERROR.HTML5_ERROR) return

    // The remaining error types occur when the YouTube player cannot play the
    // given video. This is not a fatal error. Report it as unplayable so the user
    // has an opportunity to play another video.
    if (code === YOUTUBE_ERROR.UNPLAYABLE_1 ||
        code === YOUTUBE_ERROR.UNPLAYABLE_2 ||
        code === YOUTUBE_ERROR.NOT_FOUND ||
        code === YOUTUBE_ERROR.INVALID_PARAM) {
      return this.emit('unplayable', this.videoId)
    }

    // Unexpected error, does not match any known type
    this._destroy(new Error('YouTube Player Error. Unknown error code: ' + code))
  }

  /**
   * This event fires when the time indicated by the `getCurrentTime()` method
   * has been updated.
   */
  _onTimeupdate () {
    this.emit('timeupdate', this.getCurrentTime())
  }

  _startInterval () {
    this._interval = setInterval(() => this._onTimeupdate(), this._opts.timeupdateFrequency)
  }

  _stopInterval () {
    clearInterval(this._interval)
    this._interval = null
  }
}

module.exports = YouTubePlayer


/***/ }),

/***/ "./src/client/app.ts":
/*!***************************!*\
  !*** ./src/client/app.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const player_1 = __webpack_require__(/*! ./components/player */ "./src/client/components/player.ts");
const queue_1 = __webpack_require__(/*! ./components/queue */ "./src/client/components/queue.ts");
const google_authentication_1 = __webpack_require__(/*! ./services/google-authentication */ "./src/client/services/google-authentication.ts");
const search_1 = __webpack_require__(/*! ./services/search */ "./src/client/services/search.ts");
const song_1 = __webpack_require__(/*! ./models/song */ "./src/client/models/song.ts");
const event_1 = __webpack_require__(/*! ./services/event */ "./src/client/services/event.ts");
const playlist_1 = __webpack_require__(/*! ./services/playlist */ "./src/client/services/playlist.ts");
const utils_1 = __webpack_require__(/*! ./services/utils */ "./src/client/services/utils.ts");
const storage_1 = __webpack_require__(/*! ./services/storage */ "./src/client/services/storage.ts");
const player = player_1.Player.getInstance('#player');
//Queue.queue('DyDfgMOUjCI');
/* Queue.queue('kJQP7kiw5Fk');
Queue.queue('sWLQVA9Nl5s');
Queue.queue('EbIlgD5InSg');
Queue.queue('tiyLvo24A2g');
Queue.queue('_1uGNaE6qvU'); */
player.registerEventHandlers();
const signBtnHandle = document.getElementById('signin-btn');
const searchForm = document.getElementById('search-form');
const searchBar = document.getElementById('search-bar');
const searchBtn = document.getElementById('search-button');
const checkIfAuthenticated = () => {
    if (google_authentication_1.GoogleAuthentication.isAuthenticated()) {
        signBtnHandle === null || signBtnHandle === void 0 ? void 0 : signBtnHandle.classList.add('hidden');
        searchForm === null || searchForm === void 0 ? void 0 : searchForm.classList.remove('disabled');
        searchBar === null || searchBar === void 0 ? void 0 : searchBar.setAttribute('placeholder', 'Search songs and artists');
    }
    else {
        signBtnHandle === null || signBtnHandle === void 0 ? void 0 : signBtnHandle.classList.remove('hidden');
        searchForm === null || searchForm === void 0 ? void 0 : searchForm.classList.add('disabled');
    }
};
checkIfAuthenticated();
signBtnHandle === null || signBtnHandle === void 0 ? void 0 : signBtnHandle.addEventListener('click', () => {
    google_authentication_1.GoogleAuthentication.authenticate().then(() => {
        checkIfAuthenticated();
    });
});
const onSignIn = (googleUser) => {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
};
const mainContainerBlock = `
<div class="col-xs-4 col-sm-3 col-md-3 col-lg-2">
    <div class="item">
        <div class="pos-rlt">
            <div class="item-overlay bg-black-opacity">
                <div class="center text-center w-full m-t-n">
                    <a href class="playLink" data-attribute="{{id}}" data-attribute-action="play">
                        <i class="fa fa-2x fa-play-circle text-white m-r-sm"></i>
                    </a>
                    <a href class="playLink" data-attribute="{{id}}" data-attribute-action="queue">
                        <i class="fa fa-2x fa-arrow-alt-circle-down text-white"></i>
                    </a>
                </div>
            </div>
            <div class="r-2x">
                <a>
                    <img class="img-fluid" src="{{thumbnail}}"/>
                </a>
            </div>
        </div>
        <div class="p-2 text-center text-muted text-ellipsis">
            {{title}}
        </div>
    </div>
</div>
`;
/*const navBlock = `
<li class="list-group-item no-border no-padder padder-h-sm queue-list" data-attribute={{id}}>
    <span class="float-left thumb-sm m-r m-t-xs">
        <img src="{{thumbnail}}" alt="..." class="r">
    </span>
    <div class="clear">
        <div><small>{{title}}</small></div>
    </div>
</li>
`;*/
const navBlock = `
<li class="list-group-item no-border no-padder padder-h-sm">
    <div class="float-right m-l padder-h-sm">
        <a class="delete-track" data-attribute={{id}}><i class="fa fa-times-circle"></i></a>
    </div>
    <span class="m-r-sm float-left padder-h-sm">
        <button class="playlist-play-btn player-attribute bg-light no-padder" data-attribute={{id}}><i class="fas fa-play"></i></button>
        <button class="playlist-pause-btn player-attribute bg-light no-padder hidden"><i class="fas fa-pause"></i></button>
    </span>
    <div class="clear">
        <span class="float-left thumb-sm m-r m-t-xs">
            <img src="{{thumbnail}}" alt="..." class="r">
        </span>
        <span class="title text-ellipsis">{{title}}</span>
    </div>
</li> 
`;
searchBtn === null || searchBtn === void 0 ? void 0 : searchBtn.addEventListener('click', (event) => {
    var _a;
    event.preventDefault();
    const searchTerm = (_a = searchBar) === null || _a === void 0 ? void 0 : _a.value;
    if (searchTerm) {
        search_1.Search.search(searchTerm).then((response) => {
            const searchResultDiv = document.getElementById('search-results');
            if (searchResultDiv) {
                searchResultDiv.innerHTML = '';
                let song;
                for (song of response) {
                    let filledTemplate = mainContainerBlock;
                    filledTemplate = filledTemplate.replace('{{thumbnail}}', song.getThumbnail());
                    filledTemplate = filledTemplate.replace('{{title}}', song.getTitle());
                    filledTemplate = filledTemplate.replace(/{{id}}/g, song.getId());
                    searchResultDiv.innerHTML = (searchResultDiv === null || searchResultDiv === void 0 ? void 0 : searchResultDiv.innerHTML) + filledTemplate;
                }
                Array.from(document.getElementsByClassName('playLink')).forEach(element => {
                    element.addEventListener('click', (event) => {
                        event.preventDefault();
                        const id = element.getAttribute('data-attribute');
                        const song = song_1.Song.getSongFromList(response, id);
                        if (song) {
                            const action = element.getAttribute('data-attribute-action');
                            playlist_1.Playlist.getSong(song.getId())
                                .then(savedSong => {
                                if (savedSong && savedSong.length > 0) {
                                    song.setVideoId(savedSong[0].videoId);
                                    if (action === 'play') {
                                        player.queueAndPlay(song);
                                    }
                                    else {
                                        queue_1.Queue.queue(song);
                                    }
                                }
                                else {
                                    // fetch videoId and save song
                                    search_1.Search.youTubeSearch(song.getTitle() + ' ' + song.getArtistName())
                                        .then(videoId => {
                                        const action = element.getAttribute('data-attribute-action');
                                        if (videoId) {
                                            song.setVideoId(videoId);
                                            if (action === 'play') {
                                                player.queueAndPlay(song);
                                            }
                                            else {
                                                queue_1.Queue.queue(song);
                                            }
                                            playlist_1.Playlist.saveSong(song)
                                                .then(() => console.log('Song saved'))
                                                .catch(err => console.log(err));
                                            console.log(queue_1.Queue.getCurrentQueue());
                                        }
                                        else {
                                            console.log('Invalid song ID : ', id);
                                        }
                                    });
                                }
                            });
                        }
                    });
                });
            }
        });
    }
});
const updateQueueListener = () => {
    console.log('Queue updated');
    const currentQueue = queue_1.Queue.getCurrentQueue();
    const playlist = document.getElementById('playlist');
    if (playlist) {
        let song;
        playlist.innerHTML = '';
        for (song of currentQueue) {
            let filledTemplate = navBlock;
            filledTemplate = filledTemplate.replace('{{thumbnail}}', song.getThumbnail());
            filledTemplate = filledTemplate.replace('{{title}}', song.getTitle());
            filledTemplate = filledTemplate.replace(/{{id}}/g, song.getVideoId());
            playlist.innerHTML = (playlist === null || playlist === void 0 ? void 0 : playlist.innerHTML) + filledTemplate;
        }
        Array.from(document.getElementsByClassName('playlist-play-btn')).forEach(element => {
            element.addEventListener('click', (event) => {
                var _a;
                event.preventDefault();
                const id = element.getAttribute('data-attribute');
                if (id) {
                    player.playTrack(id);
                    element.classList.add('hidden');
                    (_a = element.nextElementSibling) === null || _a === void 0 ? void 0 : _a.classList.remove('hidden');
                }
            });
        });
        Array.from(document.getElementsByClassName('playlist-pause-btn')).forEach(element => {
            element.addEventListener('click', (event) => {
                var _a;
                event.preventDefault();
                player.pauseTrack();
                element.classList.add('hidden');
                (_a = element.previousElementSibling) === null || _a === void 0 ? void 0 : _a.classList.remove('hidden');
            });
        });
        Array.from(document.getElementsByClassName('delete-track')).forEach(element => {
            element.addEventListener('click', (event) => {
                event.preventDefault();
                const id = element.getAttribute('data-attribute');
                if (id) {
                    queue_1.Queue.deleteTrack(id);
                }
            });
        });
    }
};
(_a = document.getElementById('save-playlist')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', (event) => {
    event.preventDefault();
    if (!storage_1.Storage.get('CURRENT_PLAYLIST_ID')) {
        playlist_1.Playlist.savePlaylist(utils_1.Utils.randomNumber(), queue_1.Queue.getCurrentSongIds())
            .then(response => {
            console.log(response);
            if (response && response.id) {
                storage_1.Storage.save('CURRENT_PLAYLIST_ID', response.id);
            }
        })
            .catch(err => console.log(err));
    }
    else {
    }
});
event_1.AppEvent.listen('queue-updated', updateQueueListener);
queue_1.Queue.initalize();


/***/ }),

/***/ "./src/client/components/player.ts":
/*!*****************************************!*\
  !*** ./src/client/components/player.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const yt_player_1 = __importDefault(__webpack_require__(/*! yt-player */ "./node_modules/yt-player/index.js"));
const queue_1 = __webpack_require__(/*! ./queue */ "./src/client/components/queue.ts");
const song_1 = __webpack_require__(/*! ../models/song */ "./src/client/models/song.ts");
const progess_bar_1 = __webpack_require__(/*! ./progess-bar */ "./src/client/components/progess-bar.ts");
const utils_1 = __webpack_require__(/*! ../services/utils */ "./src/client/services/utils.ts");
/**
 * TODO: Format this class - messy code
 */
class Player extends yt_player_1.default {
    constructor(domElID) {
        super(domElID);
        this.progress = null;
        this.elapsedTimeEl = document.getElementById('elapsed-time');
    }
    static getInstance(domElID) {
        if (!Player.player) {
            Player.player = new Player(domElID);
        }
        return Player.player;
    }
    ;
    loadTrack(trackId) {
        Player._currentTrackId = trackId;
        Player.player.load(trackId);
    }
    playTrack(trackId) {
        if (trackId) {
            this.stopTrack();
            this.loadTrack(trackId);
            this.resetElapsedTime();
            queue_1.Queue.updateCurrentPlayingTrack(trackId);
        }
        if (!Player._currentTrackId) {
            let track = queue_1.Queue.next();
            if (track) {
                this.loadTrack(track.getVideoId());
                Player._isPlaying = true;
                this.togglePlay();
                Player.player.play();
                this.resetElapsedTime();
                this.updateElapsedTime();
            }
            else {
                console.log('No tracks to play');
            }
        }
        else {
            Player._isPlaying = true;
            this.togglePlay();
            Player.player.play();
            //this.resetElapsedTime();
            this.updateElapsedTime();
        }
    }
    queueAndPlay(song) {
        queue_1.Queue.queue(song);
        if (Player._isPlaying) {
            this.pauseTrack();
            this.resetElapsedTime();
        }
        this.loadTrack(song.getVideoId());
        queue_1.Queue.updateCurrentPlayingTrack(song.getId());
        Player._isPlaying = true;
        this.togglePlay();
        Player.player.play();
        this.resetElapsedTime();
        this.updateElapsedTime();
    }
    pauseTrack() {
        Player._isPlaying = false;
        Player.player.pause();
        this.togglePlay();
        this.stopTimer();
        if (this.progress) {
            this.progress.stop();
        }
    }
    nextTrack() {
        var _a;
        this.pauseTrack();
        let nextTrack = queue_1.Queue.next();
        (_a = this.progress) === null || _a === void 0 ? void 0 : _a.reset();
        this.resetElapsedTime();
        if (nextTrack) {
            this.loadTrack(nextTrack.getVideoId());
            Player._isPlaying = true;
            this.togglePlay();
            this.resetElapsedTime();
            Player.player.play();
            this.updateElapsedTime();
        }
    }
    previousTrack() {
        var _a;
        this.pauseTrack();
        let previousTrack = queue_1.Queue.previous();
        (_a = this.progress) === null || _a === void 0 ? void 0 : _a.reset();
        if (previousTrack) {
            this.loadTrack(previousTrack.getVideoId());
            Player._isPlaying = true;
            this.togglePlay();
            this.resetElapsedTime();
            Player.player.play();
            this.updateElapsedTime();
        }
    }
    stopTrack() {
        var _a;
        this.pauseTrack();
        (_a = this.progress) === null || _a === void 0 ? void 0 : _a.reset();
        Player.player.stop();
    }
    togglePlay() {
        var _a, _b, _c, _d;
        if (Player._isPlaying) {
            (_a = document.getElementById('pause-button')) === null || _a === void 0 ? void 0 : _a.classList.remove('hidden');
            (_b = document.getElementById('play-button')) === null || _b === void 0 ? void 0 : _b.classList.add('hidden');
        }
        else {
            (_c = document.getElementById('pause-button')) === null || _c === void 0 ? void 0 : _c.classList.add('hidden');
            (_d = document.getElementById('play-button')) === null || _d === void 0 ? void 0 : _d.classList.remove('hidden');
        }
    }
    static seekTo(time) {
        Player.currentTime = time;
        Player.player.seek(time);
    }
    updateTitle() {
        let currentQueue = queue_1.Queue.getCurrentQueue();
        const song = song_1.Song.getSongFromList(currentQueue, Player._currentTrackId);
        const titleDiv = document.getElementById('title');
        if (titleDiv && song) {
            titleDiv.innerHTML = song.getTitle();
        }
    }
    updateSongTotalTime(time) {
        const totalTimeEl = document.getElementById('total-time');
        if (totalTimeEl) {
            totalTimeEl.innerHTML = utils_1.Utils.formatTime(time);
        }
    }
    updateElapsedTime() {
        if ((Player.currentTime < Player.player.getDuration()) && !Player._timer) {
            Player._timer = setInterval(() => {
                this.update(++Player.currentTime);
            }, 1000);
        }
    }
    update(currentTime) {
        if (this.elapsedTimeEl) {
            this.elapsedTimeEl.innerHTML = utils_1.Utils.formatTime(currentTime);
        }
    }
    stopTimer() {
        clearInterval(Player._timer);
        Player._timer = null;
    }
    resetElapsedTime() {
        this.stopTimer();
        Player.currentTime = 0;
        this.update(0);
    }
    registerEventHandlers() {
        var _a, _b, _c, _d, _e, _f;
        (_a = document.getElementById('play-button')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
            console.log('Playing');
            this.playTrack();
        });
        (_b = document.getElementById('pause-button')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => {
            console.log('Paused');
            this.pauseTrack();
        });
        (_c = document.getElementById('next-button')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', () => {
            console.log('Next track');
            this.nextTrack();
        });
        (_d = document.getElementById('previous-button')) === null || _d === void 0 ? void 0 : _d.addEventListener('click', () => {
            console.log('Previous track');
            this.previousTrack();
        });
        (_e = document.getElementById('vol-up')) === null || _e === void 0 ? void 0 : _e.addEventListener('click', () => {
            var _a, _b;
            Player.player.mute();
            (_a = document.getElementById('vol-up')) === null || _a === void 0 ? void 0 : _a.classList.add('hidden');
            (_b = document.getElementById('vol-mute')) === null || _b === void 0 ? void 0 : _b.classList.remove('hidden');
        });
        (_f = document.getElementById('vol-mute')) === null || _f === void 0 ? void 0 : _f.addEventListener('click', () => {
            var _a, _b;
            Player.player.unMute();
            (_a = document.getElementById('vol-mute')) === null || _a === void 0 ? void 0 : _a.classList.add('hidden');
            (_b = document.getElementById('vol-up')) === null || _b === void 0 ? void 0 : _b.classList.remove('hidden');
        });
        Player.player.on('playing', () => {
            this.updateTitle();
            if (!this.progress) {
                this.progress = progess_bar_1.ProgressBar.getInstance('progress-bar');
            }
            this.progress.setTime(Player.player.getDuration());
            this.updateSongTotalTime(Player.player.getDuration());
            this.updateElapsedTime();
            this.progress.start();
        });
        Player.player.on('ended', () => {
            this.nextTrack();
        });
    }
}
exports.Player = Player;
Player.currentTime = 0;


/***/ }),

/***/ "./src/client/components/progess-bar.ts":
/*!**********************************************!*\
  !*** ./src/client/components/progess-bar.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const player_1 = __webpack_require__(/*! ./player */ "./src/client/components/player.ts");
class ProgressBar {
    constructor(element) {
        this.totalTime = 0;
        this.currentPosition = 0;
        this.tick = 0;
        this.element = element;
        this.progressBarEl = document.getElementById(this.element);
        this._addClickListener();
    }
    static getInstance(element) {
        if (!ProgressBar._instance) {
            ProgressBar._instance = new ProgressBar(element);
        }
        return ProgressBar._instance;
    }
    setTime(totalTime) {
        this.totalTime = totalTime;
        this.tick = this.totalTime / 100;
    }
    update() {
        if (this.currentPosition < 100) {
            if (this.progressBarEl) {
                this.currentPosition = this.currentPosition + 0.1;
                this.progressBarEl.style.width = this.currentPosition + '%';
            }
        }
    }
    start() {
        ProgressBar.timer = setInterval(() => {
            this.update();
        }, (this.tick * 100));
    }
    stop() {
        clearInterval(ProgressBar.timer);
    }
    reset() {
        this.stop();
        this.currentPosition = 0;
        this.tick = 0;
        this.update();
    }
    _addClickListener() {
        if (this.progressBarEl && this.progressBarEl.parentElement) {
            this.progressBarEl.parentElement.addEventListener('click', (event) => {
                if (this.progressBarEl && this.progressBarEl.parentElement) {
                    const seek = (this.totalTime / this.progressBarEl.parentElement.clientWidth) * (event.pageX - 200);
                    this.stop();
                    const pos = (seek / this.totalTime) * 100;
                    this.currentPosition = parseFloat((Math.round(pos * 10) / 10).toFixed(1));
                    player_1.Player.seekTo(seek);
                }
            });
        }
    }
}
exports.ProgressBar = ProgressBar;


/***/ }),

/***/ "./src/client/components/queue.ts":
/*!****************************************!*\
  !*** ./src/client/components/queue.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const song_1 = __webpack_require__(/*! ../models/song */ "./src/client/models/song.ts");
const event_1 = __webpack_require__(/*! ../services/event */ "./src/client/services/event.ts");
const storage_1 = __webpack_require__(/*! ../services/storage */ "./src/client/services/storage.ts");
const playlist_1 = __webpack_require__(/*! ../services/playlist */ "./src/client/services/playlist.ts");
class Queue {
    static initalize() {
        Queue._queue = Queue._fetchPreviousQueue();
        event_1.AppEvent.emit('queue-updated');
    }
    static _fetchPreviousQueue() {
        const value = storage_1.Storage.get('CURRENT_QUEUE');
        const _tempQueue = new Array();
        if (value) {
            value.forEach((item) => {
                _tempQueue.push(new song_1.Song(item.id, item.title, item.description, item.artistName, item.thumbnail, item.videoId));
            });
        }
        return _tempQueue;
    }
    static queue(song) {
        Queue._queue.push(song);
        playlist_1.Playlist.addSongToPlaylist(song.getId());
        storage_1.Storage.save('CURRENT_QUEUE', Queue._queue);
        event_1.AppEvent.emit('queue-updated');
    }
    static dequeue() {
        const song = Queue._queue.shift();
        event_1.AppEvent.emit('queue-updated');
        storage_1.Storage.save('CURRENT_QUEUE', Queue._queue);
        return song;
    }
    static next() {
        if (Queue._queue[Queue._currentTrack + 1]) {
            return Queue._queue[++Queue._currentTrack];
        }
        return undefined;
    }
    static previous() {
        if (Queue._queue[Queue._currentTrack - 1]) {
            return Queue._queue[--Queue._currentTrack];
        }
        return undefined;
    }
    static getCurrentQueue() {
        return Queue._queue;
    }
    static getCurrentSongIds() {
        return Queue._queue.map(song => song.getId());
    }
    static updateCurrentPlayingTrack(trackId) {
        Queue._currentTrack = Queue._queue.findIndex(song => song.getId() === trackId);
    }
    static deleteTrack(videoId) {
        const pos = Queue._queue.findIndex(song => song.getVideoId() === videoId);
        const song = Queue._queue[pos];
        Queue._queue.splice(pos, 1);
        playlist_1.Playlist.removeSongFromPlaylist(song.getId());
        event_1.AppEvent.emit('queue-updated');
        storage_1.Storage.save('CURRENT_QUEUE', Queue._queue);
    }
}
exports.Queue = Queue;
Queue._currentTrack = -1;


/***/ }),

/***/ "./src/client/models/song.ts":
/*!***********************************!*\
  !*** ./src/client/models/song.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Song {
    constructor(id, title, description, artistName, thumbnail, videoId) {
        this.id = id;
        this.title = title;
        this.artistName = artistName;
        this.description = description;
        this.thumbnail = thumbnail;
        this.videoId = videoId;
    }
    getId() {
        return this.id;
    }
    getTitle() {
        return this.title;
    }
    getDescription() {
        return this.description;
    }
    getArtistName() {
        return this.artistName;
    }
    getThumbnail() {
        return this.thumbnail;
    }
    getVideoId() {
        return this.videoId;
    }
    setVideoId(videoId) {
        this.videoId = videoId;
    }
    static getSongFromList(list, id) {
        let filteredList = list.filter(song => song.getId() == id);
        if (filteredList.length === 0) {
            filteredList = list.filter(song => song.getVideoId() == id);
        }
        return filteredList.length > 0 ? filteredList[0] : null;
    }
}
exports.Song = Song;


/***/ }),

/***/ "./src/client/services/event.ts":
/*!**************************************!*\
  !*** ./src/client/services/event.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class AppEvent {
    static listen(event, func) {
        if (AppEvent.listeners[event]) {
            AppEvent.listeners[event].push(func);
        }
        else {
            let arr = [];
            arr.push(func);
            AppEvent.listeners[event] = arr;
        }
    }
    static emit(event, data) {
        if (AppEvent.listeners[event]) {
            AppEvent.listeners[event].forEach((func) => func(data));
        }
    }
}
exports.AppEvent = AppEvent;
AppEvent.listeners = {};


/***/ }),

/***/ "./src/client/services/google-authentication.ts":
/*!******************************************************!*\
  !*** ./src/client/services/google-authentication.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class GoogleAuthentication {
    static isAuthenticated() {
        return GoogleAuthentication._isAuthenticated;
    }
    static authenticate() {
        return new Promise((resolve, reject) => {
            gapi.load('auth2', () => {
                fetch('http://playback.io:3000/secret/id')
                    .then(response => response.json())
                    .then(responseJson => {
                    // @ts-ignore
                    gapi.auth2.getAuthInstance({
                        client_id: responseJson.CLIENT_ID
                    });
                    // @ts-ignore
                    return gapi.auth2.getAuthInstance().signIn({
                        scope: 'https://www.googleapis.com/auth/youtube.force-ssl'
                    }).then(() => {
                        GoogleAuthentication._isAuthenticated = true;
                        window.sessionStorage.setItem('google-authenticated', 'true');
                        console.log('Authenticated');
                        return resolve(GoogleAuthentication.loadClient());
                    }).catch((err) => {
                        console.log(err);
                        return reject(true);
                    });
                });
            });
        });
    }
    static loadClient() {
        return new Promise((resolve, reject) => {
            gapi.load('client', () => {
                fetch('http://playback.io:3000/secret/key')
                    .then(response => response.json())
                    .then(responseJson => {
                    gapi.client.setApiKey(responseJson.API_KEY);
                    return resolve(gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest", "v3"));
                });
            });
        });
    }
}
exports.GoogleAuthentication = GoogleAuthentication;
GoogleAuthentication._isAuthenticated = window.sessionStorage.getItem('google-authenticated') === 'true' ? true : false;


/***/ }),

/***/ "./src/client/services/playlist.ts":
/*!*****************************************!*\
  !*** ./src/client/services/playlist.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const storage_1 = __webpack_require__(/*! ../services/storage */ "./src/client/services/storage.ts");
class Playlist {
    static savePlaylist(name, songs) {
        return fetch(this.API_PATH + 'playlist/create/' + name, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'songs': songs
            })
        })
            .then(response => response.json())
            .catch(err => console.log(err));
    }
    static saveSong(song) {
        return fetch(this.API_PATH + 'song/save', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: song.getId(),
                title: song.getTitle(),
                description: song.getDescription(),
                artistName: song.getArtistName(),
                thumbnail: song.getThumbnail(),
                videoId: song.getVideoId()
            })
        })
            .then(response => response.json())
            .catch(err => console.log(err));
    }
    static getSong(id) {
        return fetch(this.API_PATH + 'song/' + id)
            .then(response => response.json())
            .catch(err => console.log(err));
    }
    static addSongToPlaylist(id) {
        const playlistId = storage_1.Storage.get('CURRENT_PLAYLIST_ID');
        if (playlistId) {
            return fetch(this.API_PATH + 'playlist/' + playlistId + '/add', {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'songs': [id]
                })
            });
        }
        else {
            return Promise.resolve('Playlist not yet saved');
        }
    }
    static removeSongFromPlaylist(id) {
        const playlistId = storage_1.Storage.get('CURRENT_PLAYLIST_ID');
        if (playlistId) {
            return fetch(this.API_PATH + 'playlist/' + playlistId + '/remove/' + id, {
                method: 'DELETE',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }
        else {
            return Promise.resolve('Playlist not yet saved');
        }
    }
}
exports.Playlist = Playlist;
Playlist.API_PATH = 'http://localhost:3000/';


/***/ }),

/***/ "./src/client/services/search.ts":
/*!***************************************!*\
  !*** ./src/client/services/search.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const google_authentication_1 = __webpack_require__(/*! ./google-authentication */ "./src/client/services/google-authentication.ts");
const song_1 = __webpack_require__(/*! ../models/song */ "./src/client/models/song.ts");
class Search {
    static youTubeSearch(q, part) {
        return new Promise((resolve, reject) => {
            gapi.load('client', () => {
                //@ts-ignore
                if (!gapi.client.youtube) {
                    google_authentication_1.GoogleAuthentication.loadClient().then(() => {
                        return Search._search(q, part)
                            .then((response) => resolve(Search._processYoutubeResponse(response)))
                            .catch((err) => {
                            console.log(err);
                            reject(err);
                        });
                    });
                }
                else {
                    return Search._search(q, part)
                        .then((response) => resolve(Search._processYoutubeResponse(response)))
                        .catch((err) => {
                        console.log(err);
                        reject(err);
                    });
                }
            });
        });
    }
    static search(q) {
        return fetch('http://playback.io:3000/search/' + encodeURIComponent(q))
            .then(response => response.json())
            .then(responseJson => Search._processResponse(responseJson))
            .catch(error => console.log(error));
    }
    static _search(q, part) {
        // @ts-ignore
        return gapi.client.youtube.search.list({
            part: part ? part : 'snippet',
            q: q,
            type: 'video',
            maxResults: Search.MAX_RESULTS
        });
    }
    static _processYoutubeResponse(response) {
        let songId = '';
        if (response && response.result && response.result.items) {
            songId = response.result.items[0].id.videoId;
        }
        return songId;
    }
    static _processResponse(response) {
        let processedResponse = new Array();
        if (!response || !response.results) {
            return {};
        }
        for (let item of response.results) {
            let thumbnail = item.artworkUrl100 ? item.artworkUrl100 :
                (item.artworkUrl60 ? item.artworkUrl60 : (item.artworkUrl30 ? item.artworkUrl30 : ''));
            const resObj = new song_1.Song(item.trackId, item.trackName, item.collectionName, item.artistName, thumbnail);
            processedResponse.push(resObj);
        }
        /* if (!response || response.status !== 200) {
            return {};
        }
        if (response.result.items && response.result.items.length > 0) {
            for (let item of response.result.items) {
                if (true || item.snippet.channelTitle.toLowerCase().indexOf('vevo') > -1 || item.snippet.channelTitle.toLowerCase().indexOf('official') > -1
                    || item.snippet.title.toLowerCase().indexOf('official') > -1) {
                    let thumbnail = '';
                    if (item.snippet.thumbnails.high) {
                        thumbnail = item.snippet.thumbnails.high.url;
                    }
                    else if (item.snippet.thumbnails.medium) {
                        thumbnail = item.snippet.thumbnails.medium.url;
                    }
                    else {
                        thumbnail = item.snippet.thumbnails.default.url;
                    }

                    const resObj = new Song(item.id.videoId, item.snippet.title, item.snippet.description,
                        thumbnail);
                    processedResponse.push(resObj);
                }
            }
        }*/
        return processedResponse;
    }
}
exports.Search = Search;
Search.MAX_RESULTS = 1;


/***/ }),

/***/ "./src/client/services/storage.ts":
/*!****************************************!*\
  !*** ./src/client/services/storage.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Storage {
    static save(key, value, storage) {
        if (storage && storage !== Storage.DEFAULT_STORAGE) {
            window.sessionStorage.setItem(key, JSON.stringify(value));
        }
        else {
            Storage.storageHandler.setItem(key, JSON.stringify(value));
        }
    }
    static get(key, storage) {
        if (storage && storage !== Storage.DEFAULT_STORAGE) {
            const value = window.sessionStorage.getItem(key);
            return value ? JSON.parse(value) : value;
        }
        const value = Storage.storageHandler.getItem(key);
        return value ? JSON.parse(value) : value;
    }
    static delete(key, storage) {
        if (storage && storage !== Storage.DEFAULT_STORAGE) {
            window.sessionStorage.removeItem(key);
        }
        Storage.storageHandler.removeItem(key);
    }
}
exports.Storage = Storage;
Storage.DEFAULT_STORAGE = 0 /* LOCAL_STORAGE */;
Storage.storageHandler = window.localStorage;


/***/ }),

/***/ "./src/client/services/utils.ts":
/*!**************************************!*\
  !*** ./src/client/services/utils.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Utils {
    static formatTime(time) {
        time = Math.floor(time);
        const min = Math.floor(time / 60);
        const sec = time - (min * 60);
        const minStr = min < 10 ? '0' + min : '' + min;
        const secStr = sec < 10 ? '0' + sec : '' + sec;
        return minStr + ':' + secStr;
    }
}
exports.Utils = Utils;
Utils.randomNumber = () => {
    const random = function () {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (random() + '-' + random());
};


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2V2ZW50cy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvYWQtc2NyaXB0Mi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMveXQtcGxheWVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvYXBwLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29tcG9uZW50cy9wbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb21wb25lbnRzL3Byb2dlc3MtYmFyLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29tcG9uZW50cy9xdWV1ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L21vZGVscy9zb25nLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvc2VydmljZXMvZXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9zZXJ2aWNlcy9nb29nbGUtYXV0aGVudGljYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9zZXJ2aWNlcy9wbGF5bGlzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3NlcnZpY2VzL3NlYXJjaC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3NlcnZpY2VzL3N0b3JhZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9zZXJ2aWNlcy91dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLHNCQUFzQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxtQkFBbUIsU0FBUztBQUM1QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLGlDQUFpQyxRQUFRO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsaUJBQWlCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0Esc0NBQXNDLFFBQVE7QUFDOUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixPQUFPO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEseUJBQXlCO0FBQ2pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLGdCQUFnQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDN2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbURBQW1EO0FBQ25EO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlDQUF5QyxJQUFJO0FBQzdDOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7OztBQ3ZCQSxxQkFBcUIsbUJBQU8sQ0FBQywrQ0FBUTtBQUNyQyxtQkFBbUIsbUJBQU8sQ0FBQywwREFBYzs7QUFFekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxxQkFBcUI7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUcsR0FBRyxHQUFHLE1BQU0sRUFBRSxDQUFDLENBQUM7QUFDdkMsQ0FBQyxDQUFDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2NsaWVudC9hcHAudHNcIik7XG4iLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUiA9IHR5cGVvZiBSZWZsZWN0ID09PSAnb2JqZWN0JyA/IFJlZmxlY3QgOiBudWxsXG52YXIgUmVmbGVjdEFwcGx5ID0gUiAmJiB0eXBlb2YgUi5hcHBseSA9PT0gJ2Z1bmN0aW9uJ1xuICA/IFIuYXBwbHlcbiAgOiBmdW5jdGlvbiBSZWZsZWN0QXBwbHkodGFyZ2V0LCByZWNlaXZlciwgYXJncykge1xuICAgIHJldHVybiBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbCh0YXJnZXQsIHJlY2VpdmVyLCBhcmdzKTtcbiAgfVxuXG52YXIgUmVmbGVjdE93bktleXNcbmlmIChSICYmIHR5cGVvZiBSLm93bktleXMgPT09ICdmdW5jdGlvbicpIHtcbiAgUmVmbGVjdE93bktleXMgPSBSLm93bktleXNcbn0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICBSZWZsZWN0T3duS2V5cyA9IGZ1bmN0aW9uIFJlZmxlY3RPd25LZXlzKHRhcmdldCkge1xuICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0YXJnZXQpXG4gICAgICAuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHModGFyZ2V0KSk7XG4gIH07XG59IGVsc2Uge1xuICBSZWZsZWN0T3duS2V5cyA9IGZ1bmN0aW9uIFJlZmxlY3RPd25LZXlzKHRhcmdldCkge1xuICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0YXJnZXQpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBQcm9jZXNzRW1pdFdhcm5pbmcod2FybmluZykge1xuICBpZiAoY29uc29sZSAmJiBjb25zb2xlLndhcm4pIGNvbnNvbGUud2Fybih3YXJuaW5nKTtcbn1cblxudmFyIE51bWJlcklzTmFOID0gTnVtYmVyLmlzTmFOIHx8IGZ1bmN0aW9uIE51bWJlcklzTmFOKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPT0gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIEV2ZW50RW1pdHRlcigpIHtcbiAgRXZlbnRFbWl0dGVyLmluaXQuY2FsbCh0aGlzKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gRXZlbnRFbWl0dGVyO1xuXG4vLyBCYWNrd2FyZHMtY29tcGF0IHdpdGggbm9kZSAwLjEwLnhcbkV2ZW50RW1pdHRlci5FdmVudEVtaXR0ZXIgPSBFdmVudEVtaXR0ZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX2V2ZW50cyA9IHVuZGVmaW5lZDtcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX2V2ZW50c0NvdW50ID0gMDtcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX21heExpc3RlbmVycyA9IHVuZGVmaW5lZDtcblxuLy8gQnkgZGVmYXVsdCBFdmVudEVtaXR0ZXJzIHdpbGwgcHJpbnQgYSB3YXJuaW5nIGlmIG1vcmUgdGhhbiAxMCBsaXN0ZW5lcnMgYXJlXG4vLyBhZGRlZCB0byBpdC4gVGhpcyBpcyBhIHVzZWZ1bCBkZWZhdWx0IHdoaWNoIGhlbHBzIGZpbmRpbmcgbWVtb3J5IGxlYWtzLlxudmFyIGRlZmF1bHRNYXhMaXN0ZW5lcnMgPSAxMDtcblxuZnVuY3Rpb24gY2hlY2tMaXN0ZW5lcihsaXN0ZW5lcikge1xuICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwibGlzdGVuZXJcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24uIFJlY2VpdmVkIHR5cGUgJyArIHR5cGVvZiBsaXN0ZW5lcik7XG4gIH1cbn1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KEV2ZW50RW1pdHRlciwgJ2RlZmF1bHRNYXhMaXN0ZW5lcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGRlZmF1bHRNYXhMaXN0ZW5lcnM7XG4gIH0sXG4gIHNldDogZnVuY3Rpb24oYXJnKSB7XG4gICAgaWYgKHR5cGVvZiBhcmcgIT09ICdudW1iZXInIHx8IGFyZyA8IDAgfHwgTnVtYmVySXNOYU4oYXJnKSkge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RoZSB2YWx1ZSBvZiBcImRlZmF1bHRNYXhMaXN0ZW5lcnNcIiBpcyBvdXQgb2YgcmFuZ2UuIEl0IG11c3QgYmUgYSBub24tbmVnYXRpdmUgbnVtYmVyLiBSZWNlaXZlZCAnICsgYXJnICsgJy4nKTtcbiAgICB9XG4gICAgZGVmYXVsdE1heExpc3RlbmVycyA9IGFyZztcbiAgfVxufSk7XG5cbkV2ZW50RW1pdHRlci5pbml0ID0gZnVuY3Rpb24oKSB7XG5cbiAgaWYgKHRoaXMuX2V2ZW50cyA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICB0aGlzLl9ldmVudHMgPT09IE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKS5fZXZlbnRzKSB7XG4gICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gIH1cblxuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSB0aGlzLl9tYXhMaXN0ZW5lcnMgfHwgdW5kZWZpbmVkO1xufTtcblxuLy8gT2J2aW91c2x5IG5vdCBhbGwgRW1pdHRlcnMgc2hvdWxkIGJlIGxpbWl0ZWQgdG8gMTAuIFRoaXMgZnVuY3Rpb24gYWxsb3dzXG4vLyB0aGF0IHRvIGJlIGluY3JlYXNlZC4gU2V0IHRvIHplcm8gZm9yIHVubGltaXRlZC5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuc2V0TWF4TGlzdGVuZXJzID0gZnVuY3Rpb24gc2V0TWF4TGlzdGVuZXJzKG4pIHtcbiAgaWYgKHR5cGVvZiBuICE9PSAnbnVtYmVyJyB8fCBuIDwgMCB8fCBOdW1iZXJJc05hTihuKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdUaGUgdmFsdWUgb2YgXCJuXCIgaXMgb3V0IG9mIHJhbmdlLiBJdCBtdXN0IGJlIGEgbm9uLW5lZ2F0aXZlIG51bWJlci4gUmVjZWl2ZWQgJyArIG4gKyAnLicpO1xuICB9XG4gIHRoaXMuX21heExpc3RlbmVycyA9IG47XG4gIHJldHVybiB0aGlzO1xufTtcblxuZnVuY3Rpb24gX2dldE1heExpc3RlbmVycyh0aGF0KSB7XG4gIGlmICh0aGF0Ll9tYXhMaXN0ZW5lcnMgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gRXZlbnRFbWl0dGVyLmRlZmF1bHRNYXhMaXN0ZW5lcnM7XG4gIHJldHVybiB0aGF0Ll9tYXhMaXN0ZW5lcnM7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZ2V0TWF4TGlzdGVuZXJzID0gZnVuY3Rpb24gZ2V0TWF4TGlzdGVuZXJzKCkge1xuICByZXR1cm4gX2dldE1heExpc3RlbmVycyh0aGlzKTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uIGVtaXQodHlwZSkge1xuICB2YXIgYXJncyA9IFtdO1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgYXJncy5wdXNoKGFyZ3VtZW50c1tpXSk7XG4gIHZhciBkb0Vycm9yID0gKHR5cGUgPT09ICdlcnJvcicpO1xuXG4gIHZhciBldmVudHMgPSB0aGlzLl9ldmVudHM7XG4gIGlmIChldmVudHMgIT09IHVuZGVmaW5lZClcbiAgICBkb0Vycm9yID0gKGRvRXJyb3IgJiYgZXZlbnRzLmVycm9yID09PSB1bmRlZmluZWQpO1xuICBlbHNlIGlmICghZG9FcnJvcilcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgLy8gSWYgdGhlcmUgaXMgbm8gJ2Vycm9yJyBldmVudCBsaXN0ZW5lciB0aGVuIHRocm93LlxuICBpZiAoZG9FcnJvcikge1xuICAgIHZhciBlcjtcbiAgICBpZiAoYXJncy5sZW5ndGggPiAwKVxuICAgICAgZXIgPSBhcmdzWzBdO1xuICAgIGlmIChlciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAvLyBOb3RlOiBUaGUgY29tbWVudHMgb24gdGhlIGB0aHJvd2AgbGluZXMgYXJlIGludGVudGlvbmFsLCB0aGV5IHNob3dcbiAgICAgIC8vIHVwIGluIE5vZGUncyBvdXRwdXQgaWYgdGhpcyByZXN1bHRzIGluIGFuIHVuaGFuZGxlZCBleGNlcHRpb24uXG4gICAgICB0aHJvdyBlcjsgLy8gVW5oYW5kbGVkICdlcnJvcicgZXZlbnRcbiAgICB9XG4gICAgLy8gQXQgbGVhc3QgZ2l2ZSBzb21lIGtpbmQgb2YgY29udGV4dCB0byB0aGUgdXNlclxuICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoJ1VuaGFuZGxlZCBlcnJvci4nICsgKGVyID8gJyAoJyArIGVyLm1lc3NhZ2UgKyAnKScgOiAnJykpO1xuICAgIGVyci5jb250ZXh0ID0gZXI7XG4gICAgdGhyb3cgZXJyOyAvLyBVbmhhbmRsZWQgJ2Vycm9yJyBldmVudFxuICB9XG5cbiAgdmFyIGhhbmRsZXIgPSBldmVudHNbdHlwZV07XG5cbiAgaWYgKGhhbmRsZXIgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgUmVmbGVjdEFwcGx5KGhhbmRsZXIsIHRoaXMsIGFyZ3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBsZW4gPSBoYW5kbGVyLmxlbmd0aDtcbiAgICB2YXIgbGlzdGVuZXJzID0gYXJyYXlDbG9uZShoYW5kbGVyLCBsZW4pO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpXG4gICAgICBSZWZsZWN0QXBwbHkobGlzdGVuZXJzW2ldLCB0aGlzLCBhcmdzKTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuZnVuY3Rpb24gX2FkZExpc3RlbmVyKHRhcmdldCwgdHlwZSwgbGlzdGVuZXIsIHByZXBlbmQpIHtcbiAgdmFyIG07XG4gIHZhciBldmVudHM7XG4gIHZhciBleGlzdGluZztcblxuICBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKTtcblxuICBldmVudHMgPSB0YXJnZXQuX2V2ZW50cztcbiAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHRhcmdldC5fZXZlbnRzQ291bnQgPSAwO1xuICB9IGVsc2Uge1xuICAgIC8vIFRvIGF2b2lkIHJlY3Vyc2lvbiBpbiB0aGUgY2FzZSB0aGF0IHR5cGUgPT09IFwibmV3TGlzdGVuZXJcIiEgQmVmb3JlXG4gICAgLy8gYWRkaW5nIGl0IHRvIHRoZSBsaXN0ZW5lcnMsIGZpcnN0IGVtaXQgXCJuZXdMaXN0ZW5lclwiLlxuICAgIGlmIChldmVudHMubmV3TGlzdGVuZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGFyZ2V0LmVtaXQoJ25ld0xpc3RlbmVyJywgdHlwZSxcbiAgICAgICAgICAgICAgICAgIGxpc3RlbmVyLmxpc3RlbmVyID8gbGlzdGVuZXIubGlzdGVuZXIgOiBsaXN0ZW5lcik7XG5cbiAgICAgIC8vIFJlLWFzc2lnbiBgZXZlbnRzYCBiZWNhdXNlIGEgbmV3TGlzdGVuZXIgaGFuZGxlciBjb3VsZCBoYXZlIGNhdXNlZCB0aGVcbiAgICAgIC8vIHRoaXMuX2V2ZW50cyB0byBiZSBhc3NpZ25lZCB0byBhIG5ldyBvYmplY3RcbiAgICAgIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzO1xuICAgIH1cbiAgICBleGlzdGluZyA9IGV2ZW50c1t0eXBlXTtcbiAgfVxuXG4gIGlmIChleGlzdGluZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gT3B0aW1pemUgdGhlIGNhc2Ugb2Ygb25lIGxpc3RlbmVyLiBEb24ndCBuZWVkIHRoZSBleHRyYSBhcnJheSBvYmplY3QuXG4gICAgZXhpc3RpbmcgPSBldmVudHNbdHlwZV0gPSBsaXN0ZW5lcjtcbiAgICArK3RhcmdldC5fZXZlbnRzQ291bnQ7XG4gIH0gZWxzZSB7XG4gICAgaWYgKHR5cGVvZiBleGlzdGluZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gQWRkaW5nIHRoZSBzZWNvbmQgZWxlbWVudCwgbmVlZCB0byBjaGFuZ2UgdG8gYXJyYXkuXG4gICAgICBleGlzdGluZyA9IGV2ZW50c1t0eXBlXSA9XG4gICAgICAgIHByZXBlbmQgPyBbbGlzdGVuZXIsIGV4aXN0aW5nXSA6IFtleGlzdGluZywgbGlzdGVuZXJdO1xuICAgICAgLy8gSWYgd2UndmUgYWxyZWFkeSBnb3QgYW4gYXJyYXksIGp1c3QgYXBwZW5kLlxuICAgIH0gZWxzZSBpZiAocHJlcGVuZCkge1xuICAgICAgZXhpc3RpbmcudW5zaGlmdChsaXN0ZW5lcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV4aXN0aW5nLnB1c2gobGlzdGVuZXIpO1xuICAgIH1cblxuICAgIC8vIENoZWNrIGZvciBsaXN0ZW5lciBsZWFrXG4gICAgbSA9IF9nZXRNYXhMaXN0ZW5lcnModGFyZ2V0KTtcbiAgICBpZiAobSA+IDAgJiYgZXhpc3RpbmcubGVuZ3RoID4gbSAmJiAhZXhpc3Rpbmcud2FybmVkKSB7XG4gICAgICBleGlzdGluZy53YXJuZWQgPSB0cnVlO1xuICAgICAgLy8gTm8gZXJyb3IgY29kZSBmb3IgdGhpcyBzaW5jZSBpdCBpcyBhIFdhcm5pbmdcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxuICAgICAgdmFyIHcgPSBuZXcgRXJyb3IoJ1Bvc3NpYmxlIEV2ZW50RW1pdHRlciBtZW1vcnkgbGVhayBkZXRlY3RlZC4gJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nLmxlbmd0aCArICcgJyArIFN0cmluZyh0eXBlKSArICcgbGlzdGVuZXJzICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAnYWRkZWQuIFVzZSBlbWl0dGVyLnNldE1heExpc3RlbmVycygpIHRvICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAnaW5jcmVhc2UgbGltaXQnKTtcbiAgICAgIHcubmFtZSA9ICdNYXhMaXN0ZW5lcnNFeGNlZWRlZFdhcm5pbmcnO1xuICAgICAgdy5lbWl0dGVyID0gdGFyZ2V0O1xuICAgICAgdy50eXBlID0gdHlwZTtcbiAgICAgIHcuY291bnQgPSBleGlzdGluZy5sZW5ndGg7XG4gICAgICBQcm9jZXNzRW1pdFdhcm5pbmcodyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lciA9IGZ1bmN0aW9uIGFkZExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gIHJldHVybiBfYWRkTGlzdGVuZXIodGhpcywgdHlwZSwgbGlzdGVuZXIsIGZhbHNlKTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub24gPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnByZXBlbmRMaXN0ZW5lciA9XG4gICAgZnVuY3Rpb24gcHJlcGVuZExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgICByZXR1cm4gX2FkZExpc3RlbmVyKHRoaXMsIHR5cGUsIGxpc3RlbmVyLCB0cnVlKTtcbiAgICB9O1xuXG5mdW5jdGlvbiBvbmNlV3JhcHBlcigpIHtcbiAgaWYgKCF0aGlzLmZpcmVkKSB7XG4gICAgdGhpcy50YXJnZXQucmVtb3ZlTGlzdGVuZXIodGhpcy50eXBlLCB0aGlzLndyYXBGbik7XG4gICAgdGhpcy5maXJlZCA9IHRydWU7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApXG4gICAgICByZXR1cm4gdGhpcy5saXN0ZW5lci5jYWxsKHRoaXMudGFyZ2V0KTtcbiAgICByZXR1cm4gdGhpcy5saXN0ZW5lci5hcHBseSh0aGlzLnRhcmdldCwgYXJndW1lbnRzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfb25jZVdyYXAodGFyZ2V0LCB0eXBlLCBsaXN0ZW5lcikge1xuICB2YXIgc3RhdGUgPSB7IGZpcmVkOiBmYWxzZSwgd3JhcEZuOiB1bmRlZmluZWQsIHRhcmdldDogdGFyZ2V0LCB0eXBlOiB0eXBlLCBsaXN0ZW5lcjogbGlzdGVuZXIgfTtcbiAgdmFyIHdyYXBwZWQgPSBvbmNlV3JhcHBlci5iaW5kKHN0YXRlKTtcbiAgd3JhcHBlZC5saXN0ZW5lciA9IGxpc3RlbmVyO1xuICBzdGF0ZS53cmFwRm4gPSB3cmFwcGVkO1xuICByZXR1cm4gd3JhcHBlZDtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24gb25jZSh0eXBlLCBsaXN0ZW5lcikge1xuICBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKTtcbiAgdGhpcy5vbih0eXBlLCBfb25jZVdyYXAodGhpcywgdHlwZSwgbGlzdGVuZXIpKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnByZXBlbmRPbmNlTGlzdGVuZXIgPVxuICAgIGZ1bmN0aW9uIHByZXBlbmRPbmNlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgIGNoZWNrTGlzdGVuZXIobGlzdGVuZXIpO1xuICAgICAgdGhpcy5wcmVwZW5kTGlzdGVuZXIodHlwZSwgX29uY2VXcmFwKHRoaXMsIHR5cGUsIGxpc3RlbmVyKSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4vLyBFbWl0cyBhICdyZW1vdmVMaXN0ZW5lcicgZXZlbnQgaWYgYW5kIG9ubHkgaWYgdGhlIGxpc3RlbmVyIHdhcyByZW1vdmVkLlxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9XG4gICAgZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgIHZhciBsaXN0LCBldmVudHMsIHBvc2l0aW9uLCBpLCBvcmlnaW5hbExpc3RlbmVyO1xuXG4gICAgICBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKTtcblxuICAgICAgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICAgICAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgbGlzdCA9IGV2ZW50c1t0eXBlXTtcbiAgICAgIGlmIChsaXN0ID09PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICBpZiAobGlzdCA9PT0gbGlzdGVuZXIgfHwgbGlzdC5saXN0ZW5lciA9PT0gbGlzdGVuZXIpIHtcbiAgICAgICAgaWYgKC0tdGhpcy5fZXZlbnRzQ291bnQgPT09IDApXG4gICAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgZGVsZXRlIGV2ZW50c1t0eXBlXTtcbiAgICAgICAgICBpZiAoZXZlbnRzLnJlbW92ZUxpc3RlbmVyKVxuICAgICAgICAgICAgdGhpcy5lbWl0KCdyZW1vdmVMaXN0ZW5lcicsIHR5cGUsIGxpc3QubGlzdGVuZXIgfHwgbGlzdGVuZXIpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBsaXN0ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHBvc2l0aW9uID0gLTE7XG5cbiAgICAgICAgZm9yIChpID0gbGlzdC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgIGlmIChsaXN0W2ldID09PSBsaXN0ZW5lciB8fCBsaXN0W2ldLmxpc3RlbmVyID09PSBsaXN0ZW5lcikge1xuICAgICAgICAgICAgb3JpZ2luYWxMaXN0ZW5lciA9IGxpc3RbaV0ubGlzdGVuZXI7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IGk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocG9zaXRpb24gPCAwKVxuICAgICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICAgIGlmIChwb3NpdGlvbiA9PT0gMClcbiAgICAgICAgICBsaXN0LnNoaWZ0KCk7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHNwbGljZU9uZShsaXN0LCBwb3NpdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobGlzdC5sZW5ndGggPT09IDEpXG4gICAgICAgICAgZXZlbnRzW3R5cGVdID0gbGlzdFswXTtcblxuICAgICAgICBpZiAoZXZlbnRzLnJlbW92ZUxpc3RlbmVyICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgdGhpcy5lbWl0KCdyZW1vdmVMaXN0ZW5lcicsIHR5cGUsIG9yaWdpbmFsTGlzdGVuZXIgfHwgbGlzdGVuZXIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9mZiA9IEV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzID1cbiAgICBmdW5jdGlvbiByZW1vdmVBbGxMaXN0ZW5lcnModHlwZSkge1xuICAgICAgdmFyIGxpc3RlbmVycywgZXZlbnRzLCBpO1xuXG4gICAgICBldmVudHMgPSB0aGlzLl9ldmVudHM7XG4gICAgICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICAvLyBub3QgbGlzdGVuaW5nIGZvciByZW1vdmVMaXN0ZW5lciwgbm8gbmVlZCB0byBlbWl0XG4gICAgICBpZiAoZXZlbnRzLnJlbW92ZUxpc3RlbmVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICAgIHRoaXMuX2V2ZW50c0NvdW50ID0gMDtcbiAgICAgICAgfSBlbHNlIGlmIChldmVudHNbdHlwZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGlmICgtLXRoaXMuX2V2ZW50c0NvdW50ID09PSAwKVxuICAgICAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICBkZWxldGUgZXZlbnRzW3R5cGVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICAvLyBlbWl0IHJlbW92ZUxpc3RlbmVyIGZvciBhbGwgbGlzdGVuZXJzIG9uIGFsbCBldmVudHNcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZXZlbnRzKTtcbiAgICAgICAgdmFyIGtleTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICBrZXkgPSBrZXlzW2ldO1xuICAgICAgICAgIGlmIChrZXkgPT09ICdyZW1vdmVMaXN0ZW5lcicpIGNvbnRpbnVlO1xuICAgICAgICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoJ3JlbW92ZUxpc3RlbmVyJyk7XG4gICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHRoaXMuX2V2ZW50c0NvdW50ID0gMDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIGxpc3RlbmVycyA9IGV2ZW50c1t0eXBlXTtcblxuICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lcnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcnMpO1xuICAgICAgfSBlbHNlIGlmIChsaXN0ZW5lcnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAvLyBMSUZPIG9yZGVyXG4gICAgICAgIGZvciAoaSA9IGxpc3RlbmVycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzW2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG5mdW5jdGlvbiBfbGlzdGVuZXJzKHRhcmdldCwgdHlwZSwgdW53cmFwKSB7XG4gIHZhciBldmVudHMgPSB0YXJnZXQuX2V2ZW50cztcblxuICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIFtdO1xuXG4gIHZhciBldmxpc3RlbmVyID0gZXZlbnRzW3R5cGVdO1xuICBpZiAoZXZsaXN0ZW5lciA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBbXTtcblxuICBpZiAodHlwZW9mIGV2bGlzdGVuZXIgPT09ICdmdW5jdGlvbicpXG4gICAgcmV0dXJuIHVud3JhcCA/IFtldmxpc3RlbmVyLmxpc3RlbmVyIHx8IGV2bGlzdGVuZXJdIDogW2V2bGlzdGVuZXJdO1xuXG4gIHJldHVybiB1bndyYXAgP1xuICAgIHVud3JhcExpc3RlbmVycyhldmxpc3RlbmVyKSA6IGFycmF5Q2xvbmUoZXZsaXN0ZW5lciwgZXZsaXN0ZW5lci5sZW5ndGgpO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uIGxpc3RlbmVycyh0eXBlKSB7XG4gIHJldHVybiBfbGlzdGVuZXJzKHRoaXMsIHR5cGUsIHRydWUpO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yYXdMaXN0ZW5lcnMgPSBmdW5jdGlvbiByYXdMaXN0ZW5lcnModHlwZSkge1xuICByZXR1cm4gX2xpc3RlbmVycyh0aGlzLCB0eXBlLCBmYWxzZSk7XG59O1xuXG5FdmVudEVtaXR0ZXIubGlzdGVuZXJDb3VudCA9IGZ1bmN0aW9uKGVtaXR0ZXIsIHR5cGUpIHtcbiAgaWYgKHR5cGVvZiBlbWl0dGVyLmxpc3RlbmVyQ291bnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gZW1pdHRlci5saXN0ZW5lckNvdW50KHR5cGUpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBsaXN0ZW5lckNvdW50LmNhbGwoZW1pdHRlciwgdHlwZSk7XG4gIH1cbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJDb3VudCA9IGxpc3RlbmVyQ291bnQ7XG5mdW5jdGlvbiBsaXN0ZW5lckNvdW50KHR5cGUpIHtcbiAgdmFyIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcblxuICBpZiAoZXZlbnRzICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgZXZsaXN0ZW5lciA9IGV2ZW50c1t0eXBlXTtcblxuICAgIGlmICh0eXBlb2YgZXZsaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfSBlbHNlIGlmIChldmxpc3RlbmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBldmxpc3RlbmVyLmxlbmd0aDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gMDtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5ldmVudE5hbWVzID0gZnVuY3Rpb24gZXZlbnROYW1lcygpIHtcbiAgcmV0dXJuIHRoaXMuX2V2ZW50c0NvdW50ID4gMCA/IFJlZmxlY3RPd25LZXlzKHRoaXMuX2V2ZW50cykgOiBbXTtcbn07XG5cbmZ1bmN0aW9uIGFycmF5Q2xvbmUoYXJyLCBuKSB7XG4gIHZhciBjb3B5ID0gbmV3IEFycmF5KG4pO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IG47ICsraSlcbiAgICBjb3B5W2ldID0gYXJyW2ldO1xuICByZXR1cm4gY29weTtcbn1cblxuZnVuY3Rpb24gc3BsaWNlT25lKGxpc3QsIGluZGV4KSB7XG4gIGZvciAoOyBpbmRleCArIDEgPCBsaXN0Lmxlbmd0aDsgaW5kZXgrKylcbiAgICBsaXN0W2luZGV4XSA9IGxpc3RbaW5kZXggKyAxXTtcbiAgbGlzdC5wb3AoKTtcbn1cblxuZnVuY3Rpb24gdW53cmFwTGlzdGVuZXJzKGFycikge1xuICB2YXIgcmV0ID0gbmV3IEFycmF5KGFyci5sZW5ndGgpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHJldC5sZW5ndGg7ICsraSkge1xuICAgIHJldFtpXSA9IGFycltpXS5saXN0ZW5lciB8fCBhcnJbaV07XG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbG9hZFNjcmlwdDIgKHNyYywgYXR0cnMsIHBhcmVudE5vZGUpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKVxuICAgIHNjcmlwdC5hc3luYyA9IHRydWVcbiAgICBzY3JpcHQuc3JjID0gc3JjXG5cbiAgICBmb3IgKGNvbnN0IFtrLCB2XSBvZiBPYmplY3QuZW50cmllcyhhdHRycyB8fCB7fSkpIHtcbiAgICAgIHNjcmlwdC5zZXRBdHRyaWJ1dGUoaywgdilcbiAgICB9XG5cbiAgICBzY3JpcHQub25sb2FkID0gKCkgPT4ge1xuICAgICAgc2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gbnVsbFxuICAgICAgcmVzb2x2ZShzY3JpcHQpXG4gICAgfVxuXG4gICAgc2NyaXB0Lm9uZXJyb3IgPSAoKSA9PiB7XG4gICAgICBzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBudWxsXG4gICAgICByZWplY3QobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCAke3NyY31gKSlcbiAgICB9XG5cbiAgICBjb25zdCBub2RlID0gcGFyZW50Tm9kZSB8fCBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF1cbiAgICBub2RlLmFwcGVuZENoaWxkKHNjcmlwdClcbiAgfSlcbn1cbiIsImNvbnN0IEV2ZW50RW1pdHRlciA9IHJlcXVpcmUoJ2V2ZW50cycpLkV2ZW50RW1pdHRlclxuY29uc3QgbG9hZFNjcmlwdCA9IHJlcXVpcmUoJ2xvYWQtc2NyaXB0MicpXG5cbmNvbnN0IFlPVVRVQkVfSUZSQU1FX0FQSV9TUkMgPSAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vaWZyYW1lX2FwaSdcblxuY29uc3QgWU9VVFVCRV9TVEFURVMgPSB7XG4gICctMSc6ICd1bnN0YXJ0ZWQnLFxuICAwOiAnZW5kZWQnLFxuICAxOiAncGxheWluZycsXG4gIDI6ICdwYXVzZWQnLFxuICAzOiAnYnVmZmVyaW5nJyxcbiAgNTogJ2N1ZWQnXG59XG5cbmNvbnN0IFlPVVRVQkVfRVJST1IgPSB7XG4gIC8vIFRoZSByZXF1ZXN0IGNvbnRhaW5zIGFuIGludmFsaWQgcGFyYW1ldGVyIHZhbHVlLiBGb3IgZXhhbXBsZSwgdGhpcyBlcnJvclxuICAvLyBvY2N1cnMgaWYgeW91IHNwZWNpZnkgYSB2aWRlb0lkIHRoYXQgZG9lcyBub3QgaGF2ZSAxMSBjaGFyYWN0ZXJzLCBvciBpZiB0aGVcbiAgLy8gdmlkZW9JZCBjb250YWlucyBpbnZhbGlkIGNoYXJhY3RlcnMsIHN1Y2ggYXMgZXhjbGFtYXRpb24gcG9pbnRzIG9yIGFzdGVyaXNrcy5cbiAgSU5WQUxJRF9QQVJBTTogMixcblxuICAvLyBUaGUgcmVxdWVzdGVkIGNvbnRlbnQgY2Fubm90IGJlIHBsYXllZCBpbiBhbiBIVE1MNSBwbGF5ZXIgb3IgYW5vdGhlciBlcnJvclxuICAvLyByZWxhdGVkIHRvIHRoZSBIVE1MNSBwbGF5ZXIgaGFzIG9jY3VycmVkLlxuICBIVE1MNV9FUlJPUjogNSxcblxuICAvLyBUaGUgdmlkZW8gcmVxdWVzdGVkIHdhcyBub3QgZm91bmQuIFRoaXMgZXJyb3Igb2NjdXJzIHdoZW4gYSB2aWRlbyBoYXMgYmVlblxuICAvLyByZW1vdmVkIChmb3IgYW55IHJlYXNvbikgb3IgaGFzIGJlZW4gbWFya2VkIGFzIHByaXZhdGUuXG4gIE5PVF9GT1VORDogMTAwLFxuXG4gIC8vIFRoZSBvd25lciBvZiB0aGUgcmVxdWVzdGVkIHZpZGVvIGRvZXMgbm90IGFsbG93IGl0IHRvIGJlIHBsYXllZCBpbiBlbWJlZGRlZFxuICAvLyBwbGF5ZXJzLlxuICBVTlBMQVlBQkxFXzE6IDEwMSxcblxuICAvLyBUaGlzIGVycm9yIGlzIHRoZSBzYW1lIGFzIDEwMS4gSXQncyBqdXN0IGEgMTAxIGVycm9yIGluIGRpc2d1aXNlIVxuICBVTlBMQVlBQkxFXzI6IDE1MFxufVxuXG5jb25zdCBsb2FkSWZyYW1lQVBJQ2FsbGJhY2tzID0gW11cblxuLyoqXG4gKiBZb3VUdWJlIFBsYXllci4gRXhwb3NlcyBhIGJldHRlciBBUEksIHdpdGggbmljZXIgZXZlbnRzLlxuICogQHBhcmFtIHtIVE1MRWxlbWVudHxzZWxlY3Rvcn0gZWxlbWVudFxuICovXG5jbGFzcyBZb3VUdWJlUGxheWVyIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IgKGVsZW1lbnQsIG9wdHMpIHtcbiAgICBzdXBlcigpXG5cbiAgICBjb25zdCBlbGVtID0gdHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnXG4gICAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbWVudClcbiAgICAgIDogZWxlbWVudFxuXG4gICAgaWYgKGVsZW0uaWQpIHtcbiAgICAgIHRoaXMuX2lkID0gZWxlbS5pZCAvLyB1c2UgZXhpc3RpbmcgZWxlbWVudCBpZFxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9pZCA9IGVsZW0uaWQgPSAneXRwbGF5ZXItJyArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMTYpLnNsaWNlKDIsIDgpXG4gICAgfVxuXG4gICAgdGhpcy5fb3B0cyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgd2lkdGg6IDY0MCxcbiAgICAgIGhlaWdodDogMzYwLFxuICAgICAgYXV0b3BsYXk6IGZhbHNlLFxuICAgICAgY2FwdGlvbnM6IHVuZGVmaW5lZCxcbiAgICAgIGNvbnRyb2xzOiB0cnVlLFxuICAgICAga2V5Ym9hcmQ6IHRydWUsXG4gICAgICBmdWxsc2NyZWVuOiB0cnVlLFxuICAgICAgYW5ub3RhdGlvbnM6IHRydWUsXG4gICAgICBtb2Rlc3RCcmFuZGluZzogZmFsc2UsXG4gICAgICByZWxhdGVkOiB0cnVlLFxuICAgICAgdGltZXVwZGF0ZUZyZXF1ZW5jeTogMTAwMCxcbiAgICAgIHBsYXlzSW5saW5lOiB0cnVlXG4gICAgfSwgb3B0cylcblxuICAgIHRoaXMudmlkZW9JZCA9IG51bGxcbiAgICB0aGlzLmRlc3Ryb3llZCA9IGZhbHNlXG5cbiAgICB0aGlzLl9hcGkgPSBudWxsXG4gICAgdGhpcy5fYXV0b3BsYXkgPSBmYWxzZSAvLyBhdXRvcGxheSB0aGUgZmlyc3QgdmlkZW8/XG4gICAgdGhpcy5fcGxheWVyID0gbnVsbFxuICAgIHRoaXMuX3JlYWR5ID0gZmFsc2UgLy8gaXMgcGxheWVyIHJlYWR5P1xuICAgIHRoaXMuX3F1ZXVlID0gW11cblxuICAgIHRoaXMuX2ludGVydmFsID0gbnVsbFxuXG4gICAgLy8gU2V0dXAgbGlzdGVuZXJzIGZvciAndGltZXVwZGF0ZScgZXZlbnRzLiBUaGUgWW91VHViZSBQbGF5ZXIgZG9lcyBub3QgZmlyZVxuICAgIC8vICd0aW1ldXBkYXRlJyBldmVudHMsIHNvIHRoZXkgYXJlIHNpbXVsYXRlZCB1c2luZyBhIHNldEludGVydmFsKCkuXG4gICAgdGhpcy5fc3RhcnRJbnRlcnZhbCA9IHRoaXMuX3N0YXJ0SW50ZXJ2YWwuYmluZCh0aGlzKVxuICAgIHRoaXMuX3N0b3BJbnRlcnZhbCA9IHRoaXMuX3N0b3BJbnRlcnZhbC5iaW5kKHRoaXMpXG5cbiAgICB0aGlzLm9uKCdwbGF5aW5nJywgdGhpcy5fc3RhcnRJbnRlcnZhbClcbiAgICB0aGlzLm9uKCd1bnN0YXJ0ZWQnLCB0aGlzLl9zdG9wSW50ZXJ2YWwpXG4gICAgdGhpcy5vbignZW5kZWQnLCB0aGlzLl9zdG9wSW50ZXJ2YWwpXG4gICAgdGhpcy5vbigncGF1c2VkJywgdGhpcy5fc3RvcEludGVydmFsKVxuICAgIHRoaXMub24oJ2J1ZmZlcmluZycsIHRoaXMuX3N0b3BJbnRlcnZhbClcblxuICAgIHRoaXMuX2xvYWRJZnJhbWVBUEkoKGVyciwgYXBpKSA9PiB7XG4gICAgICBpZiAoZXJyKSByZXR1cm4gdGhpcy5fZGVzdHJveShuZXcgRXJyb3IoJ1lvdVR1YmUgSWZyYW1lIEFQSSBmYWlsZWQgdG8gbG9hZCcpKVxuICAgICAgdGhpcy5fYXBpID0gYXBpXG5cbiAgICAgIC8vIElmIGxvYWQodmlkZW9JZCwgW2F1dG9wbGF5XSkgd2FzIGNhbGxlZCBiZWZvcmUgSWZyYW1lIEFQSSBsb2FkZWQsIGVuc3VyZSBpdCBnZXRzXG4gICAgICAvLyBjYWxsZWQgYWdhaW4gbm93XG4gICAgICBpZiAodGhpcy52aWRlb0lkKSB0aGlzLmxvYWQodGhpcy52aWRlb0lkLCB0aGlzLl9hdXRvcGxheSlcbiAgICB9KVxuICB9XG5cbiAgbG9hZCAodmlkZW9JZCwgYXV0b3BsYXkgPSBmYWxzZSkge1xuICAgIGlmICh0aGlzLmRlc3Ryb3llZCkgcmV0dXJuXG5cbiAgICB0aGlzLnZpZGVvSWQgPSB2aWRlb0lkXG4gICAgdGhpcy5fYXV0b3BsYXkgPSBhdXRvcGxheVxuXG4gICAgLy8gSWYgdGhlIElmcmFtZSBBUEkgaXMgbm90IHJlYWR5IHlldCwgZG8gbm90aGluZy4gT25jZSB0aGUgSWZyYW1lIEFQSSBpc1xuICAgIC8vIHJlYWR5LCBgbG9hZCh0aGlzLnZpZGVvSWQpYCB3aWxsIGJlIGNhbGxlZC5cbiAgICBpZiAoIXRoaXMuX2FwaSkgcmV0dXJuXG5cbiAgICAvLyBJZiB0aGVyZSBpcyBubyBwbGF5ZXIgaW5zdGFuY2UsIGNyZWF0ZSBvbmUuXG4gICAgaWYgKCF0aGlzLl9wbGF5ZXIpIHtcbiAgICAgIHRoaXMuX2NyZWF0ZVBsYXllcih2aWRlb0lkKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHBsYXllciBpbnN0YW5jZSBpcyBub3QgcmVhZHkgeWV0LCBkbyBub3RoaW5nLiBPbmNlIHRoZSBwbGF5ZXJcbiAgICAvLyBpbnN0YW5jZSBpcyByZWFkeSwgYGxvYWQodGhpcy52aWRlb0lkKWAgd2lsbCBiZSBjYWxsZWQuIFRoaXMgZW5zdXJlcyB0aGF0XG4gICAgLy8gdGhlIGxhc3QgY2FsbCB0byBgbG9hZCgpYCBpcyB0aGUgb25lIHRoYXQgdGFrZXMgZWZmZWN0LlxuICAgIGlmICghdGhpcy5fcmVhZHkpIHJldHVyblxuXG4gICAgLy8gSWYgdGhlIHBsYXllciBpbnN0YW5jZSBpcyByZWFkeSwgbG9hZCB0aGUgZ2l2ZW4gYHZpZGVvSWRgLlxuICAgIGlmIChhdXRvcGxheSkge1xuICAgICAgdGhpcy5fcGxheWVyLmxvYWRWaWRlb0J5SWQodmlkZW9JZClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcGxheWVyLmN1ZVZpZGVvQnlJZCh2aWRlb0lkKVxuICAgIH1cbiAgfVxuXG4gIHBsYXkgKCkge1xuICAgIGlmICh0aGlzLl9yZWFkeSkgdGhpcy5fcGxheWVyLnBsYXlWaWRlbygpXG4gICAgZWxzZSB0aGlzLl9xdWV1ZUNvbW1hbmQoJ3BsYXknKVxuICB9XG5cbiAgcGF1c2UgKCkge1xuICAgIGlmICh0aGlzLl9yZWFkeSkgdGhpcy5fcGxheWVyLnBhdXNlVmlkZW8oKVxuICAgIGVsc2UgdGhpcy5fcXVldWVDb21tYW5kKCdwYXVzZScpXG4gIH1cblxuICBzdG9wICgpIHtcbiAgICBpZiAodGhpcy5fcmVhZHkpIHRoaXMuX3BsYXllci5zdG9wVmlkZW8oKVxuICAgIGVsc2UgdGhpcy5fcXVldWVDb21tYW5kKCdzdG9wJylcbiAgfVxuXG4gIHNlZWsgKHNlY29uZHMpIHtcbiAgICBpZiAodGhpcy5fcmVhZHkpIHRoaXMuX3BsYXllci5zZWVrVG8oc2Vjb25kcywgdHJ1ZSlcbiAgICBlbHNlIHRoaXMuX3F1ZXVlQ29tbWFuZCgnc2VlaycsIHNlY29uZHMpXG4gIH1cblxuICBzZXRWb2x1bWUgKHZvbHVtZSkge1xuICAgIGlmICh0aGlzLl9yZWFkeSkgdGhpcy5fcGxheWVyLnNldFZvbHVtZSh2b2x1bWUpXG4gICAgZWxzZSB0aGlzLl9xdWV1ZUNvbW1hbmQoJ3NldFZvbHVtZScsIHZvbHVtZSlcbiAgfVxuXG4gIGdldFZvbHVtZSAoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9yZWFkeSAmJiB0aGlzLl9wbGF5ZXIuZ2V0Vm9sdW1lKCkpIHx8IDBcbiAgfVxuXG4gIG11dGUgKCkge1xuICAgIGlmICh0aGlzLl9yZWFkeSkgdGhpcy5fcGxheWVyLm11dGUoKVxuICAgIGVsc2UgdGhpcy5fcXVldWVDb21tYW5kKCdtdXRlJylcbiAgfVxuXG4gIHVuTXV0ZSAoKSB7XG4gICAgaWYgKHRoaXMuX3JlYWR5KSB0aGlzLl9wbGF5ZXIudW5NdXRlKClcbiAgICBlbHNlIHRoaXMuX3F1ZXVlQ29tbWFuZCgndW5NdXRlJylcbiAgfVxuXG4gIGlzTXV0ZWQgKCkge1xuICAgIHJldHVybiAodGhpcy5fcmVhZHkgJiYgdGhpcy5fcGxheWVyLmlzTXV0ZWQoKSkgfHwgZmFsc2VcbiAgfVxuXG4gIHNldFNpemUgKHdpZHRoLCBoZWlnaHQpIHtcbiAgICBpZiAodGhpcy5fcmVhZHkpIHRoaXMuX3BsYXllci5zZXRTaXplKHdpZHRoLCBoZWlnaHQpXG4gICAgZWxzZSB0aGlzLl9xdWV1ZUNvbW1hbmQoJ3NldFNpemUnLCB3aWR0aCwgaGVpZ2h0KVxuICB9XG5cbiAgc2V0UGxheWJhY2tSYXRlIChyYXRlKSB7XG4gICAgaWYgKHRoaXMuX3JlYWR5KSB0aGlzLl9wbGF5ZXIuc2V0UGxheWJhY2tSYXRlKHJhdGUpXG4gICAgZWxzZSB0aGlzLl9xdWV1ZUNvbW1hbmQoJ3NldFBsYXliYWNrUmF0ZScsIHJhdGUpXG4gIH1cblxuICBzZXRQbGF5YmFja1F1YWxpdHkgKHN1Z2dlc3RlZFF1YWxpdHkpIHtcbiAgICBpZiAodGhpcy5fcmVhZHkpIHRoaXMuX3BsYXllci5zZXRQbGF5YmFja1F1YWxpdHkoc3VnZ2VzdGVkUXVhbGl0eSlcbiAgICBlbHNlIHRoaXMuX3F1ZXVlQ29tbWFuZCgnc2V0UGxheWJhY2tRdWFsaXR5Jywgc3VnZ2VzdGVkUXVhbGl0eSlcbiAgfVxuXG4gIGdldFBsYXliYWNrUmF0ZSAoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9yZWFkeSAmJiB0aGlzLl9wbGF5ZXIuZ2V0UGxheWJhY2tSYXRlKCkpIHx8IDFcbiAgfVxuXG4gIGdldEF2YWlsYWJsZVBsYXliYWNrUmF0ZXMgKCkge1xuICAgIHJldHVybiAodGhpcy5fcmVhZHkgJiYgdGhpcy5fcGxheWVyLmdldEF2YWlsYWJsZVBsYXliYWNrUmF0ZXMoKSkgfHwgWzFdXG4gIH1cblxuICBnZXREdXJhdGlvbiAoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9yZWFkeSAmJiB0aGlzLl9wbGF5ZXIuZ2V0RHVyYXRpb24oKSkgfHwgMFxuICB9XG5cbiAgZ2V0UHJvZ3Jlc3MgKCkge1xuICAgIHJldHVybiAodGhpcy5fcmVhZHkgJiYgdGhpcy5fcGxheWVyLmdldFZpZGVvTG9hZGVkRnJhY3Rpb24oKSkgfHwgMFxuICB9XG5cbiAgZ2V0U3RhdGUgKCkge1xuICAgIHJldHVybiAodGhpcy5fcmVhZHkgJiYgWU9VVFVCRV9TVEFURVNbdGhpcy5fcGxheWVyLmdldFBsYXllclN0YXRlKCldKSB8fCAndW5zdGFydGVkJ1xuICB9XG5cbiAgZ2V0Q3VycmVudFRpbWUgKCkge1xuICAgIHJldHVybiAodGhpcy5fcmVhZHkgJiYgdGhpcy5fcGxheWVyLmdldEN1cnJlbnRUaW1lKCkpIHx8IDBcbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMuX2Rlc3Ryb3koKVxuICB9XG5cbiAgX2Rlc3Ryb3kgKGVycikge1xuICAgIGlmICh0aGlzLmRlc3Ryb3llZCkgcmV0dXJuXG4gICAgdGhpcy5kZXN0cm95ZWQgPSB0cnVlXG5cbiAgICBpZiAodGhpcy5fcGxheWVyKSB7XG4gICAgICB0aGlzLl9wbGF5ZXIuc3RvcFZpZGVvICYmIHRoaXMuX3BsYXllci5zdG9wVmlkZW8oKVxuICAgICAgdGhpcy5fcGxheWVyLmRlc3Ryb3koKVxuICAgIH1cblxuICAgIHRoaXMudmlkZW9JZCA9IG51bGxcblxuICAgIHRoaXMuX2lkID0gbnVsbFxuICAgIHRoaXMuX29wdHMgPSBudWxsXG4gICAgdGhpcy5fYXBpID0gbnVsbFxuICAgIHRoaXMuX3BsYXllciA9IG51bGxcbiAgICB0aGlzLl9yZWFkeSA9IGZhbHNlXG4gICAgdGhpcy5fcXVldWUgPSBudWxsXG5cbiAgICB0aGlzLl9zdG9wSW50ZXJ2YWwoKVxuXG4gICAgdGhpcy5yZW1vdmVMaXN0ZW5lcigncGxheWluZycsIHRoaXMuX3N0YXJ0SW50ZXJ2YWwpXG4gICAgdGhpcy5yZW1vdmVMaXN0ZW5lcigncGF1c2VkJywgdGhpcy5fc3RvcEludGVydmFsKVxuICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIoJ2J1ZmZlcmluZycsIHRoaXMuX3N0b3BJbnRlcnZhbClcbiAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKCd1bnN0YXJ0ZWQnLCB0aGlzLl9zdG9wSW50ZXJ2YWwpXG4gICAgdGhpcy5yZW1vdmVMaXN0ZW5lcignZW5kZWQnLCB0aGlzLl9zdG9wSW50ZXJ2YWwpXG5cbiAgICBpZiAoZXJyKSB0aGlzLmVtaXQoJ2Vycm9yJywgZXJyKVxuICB9XG5cbiAgX3F1ZXVlQ29tbWFuZCAoY29tbWFuZCwgLi4uYXJncykge1xuICAgIGlmICh0aGlzLmRlc3Ryb3llZCkgcmV0dXJuXG4gICAgdGhpcy5fcXVldWUucHVzaChbY29tbWFuZCwgYXJnc10pXG4gIH1cblxuICBfZmx1c2hRdWV1ZSAoKSB7XG4gICAgd2hpbGUgKHRoaXMuX3F1ZXVlLmxlbmd0aCkge1xuICAgICAgY29uc3QgY29tbWFuZCA9IHRoaXMuX3F1ZXVlLnNoaWZ0KClcbiAgICAgIHRoaXNbY29tbWFuZFswXV0uYXBwbHkodGhpcywgY29tbWFuZFsxXSlcbiAgICB9XG4gIH1cblxuICBfbG9hZElmcmFtZUFQSSAoY2IpIHtcbiAgICAvLyBJZiBBUEkgaXMgbG9hZGVkLCB0aGVyZSBpcyBub3RoaW5nIGVsc2UgdG8gZG9cbiAgICBpZiAod2luZG93LllUICYmIHR5cGVvZiB3aW5kb3cuWVQuUGxheWVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gY2IobnVsbCwgd2luZG93LllUKVxuICAgIH1cblxuICAgIC8vIE90aGVyd2lzZSwgcXVldWUgY2FsbGJhY2sgdW50aWwgQVBJIGlzIGxvYWRlZFxuICAgIGxvYWRJZnJhbWVBUElDYWxsYmFja3MucHVzaChjYilcblxuICAgIGNvbnN0IHNjcmlwdHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzY3JpcHQnKSlcbiAgICBjb25zdCBpc0xvYWRpbmcgPSBzY3JpcHRzLnNvbWUoc2NyaXB0ID0+IHNjcmlwdC5zcmMgPT09IFlPVVRVQkVfSUZSQU1FX0FQSV9TUkMpXG5cbiAgICAvLyBJZiBBUEkgPHNjcmlwdD4gdGFnIGlzIG5vdCBwcmVzZW50IGluIHRoZSBwYWdlLCBpbmplY3QgaXQuIEVuc3VyZXMgdGhhdFxuICAgIC8vIGlmIHVzZXIgaW5jbHVkZXMgYSBoYXJkY29kZWQgPHNjcmlwdD4gdGFnIGluIEhUTUwgZm9yIHBlcmZvcm1hbmNlLCBhbm90aGVyXG4gICAgLy8gb25lIHdpbGwgbm90IGJlIGFkZGVkXG4gICAgaWYgKCFpc0xvYWRpbmcpIHtcbiAgICAgIGxvYWRTY3JpcHQoWU9VVFVCRV9JRlJBTUVfQVBJX1NSQykuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgd2hpbGUgKGxvYWRJZnJhbWVBUElDYWxsYmFja3MubGVuZ3RoKSB7XG4gICAgICAgICAgY29uc3QgbG9hZENiID0gbG9hZElmcmFtZUFQSUNhbGxiYWNrcy5zaGlmdCgpXG4gICAgICAgICAgbG9hZENiKGVycilcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBJZiByZWFkeSBmdW5jdGlvbiBpcyBub3QgcHJlc2VudCwgY3JlYXRlIGl0XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cub25Zb3VUdWJlSWZyYW1lQVBJUmVhZHkgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHdpbmRvdy5vbllvdVR1YmVJZnJhbWVBUElSZWFkeSA9ICgpID0+IHtcbiAgICAgICAgd2hpbGUgKGxvYWRJZnJhbWVBUElDYWxsYmFja3MubGVuZ3RoKSB7XG4gICAgICAgICAgY29uc3QgbG9hZENiID0gbG9hZElmcmFtZUFQSUNhbGxiYWNrcy5zaGlmdCgpXG4gICAgICAgICAgbG9hZENiKG51bGwsIHdpbmRvdy5ZVClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9jcmVhdGVQbGF5ZXIgKHZpZGVvSWQpIHtcbiAgICBpZiAodGhpcy5kZXN0cm95ZWQpIHJldHVyblxuXG4gICAgY29uc3Qgb3B0cyA9IHRoaXMuX29wdHNcblxuICAgIHRoaXMuX3BsYXllciA9IG5ldyB0aGlzLl9hcGkuUGxheWVyKHRoaXMuX2lkLCB7XG4gICAgICB3aWR0aDogb3B0cy53aWR0aCxcbiAgICAgIGhlaWdodDogb3B0cy5oZWlnaHQsXG4gICAgICB2aWRlb0lkOiB2aWRlb0lkLFxuICAgICAgcGxheWVyVmFyczoge1xuICAgICAgICAvLyBUaGlzIHBhcmFtZXRlciBzcGVjaWZpZXMgd2hldGhlciB0aGUgaW5pdGlhbCB2aWRlbyB3aWxsIGF1dG9tYXRpY2FsbHlcbiAgICAgICAgLy8gc3RhcnQgdG8gcGxheSB3aGVuIHRoZSBwbGF5ZXIgbG9hZHMuIFN1cHBvcnRlZCB2YWx1ZXMgYXJlIDAgb3IgMS4gVGhlXG4gICAgICAgIC8vIGRlZmF1bHQgdmFsdWUgaXMgMC5cbiAgICAgICAgYXV0b3BsYXk6IG9wdHMuYXV0b3BsYXkgPyAxIDogMCxcblxuICAgICAgICAvLyBTZXR0aW5nIHRoZSBwYXJhbWV0ZXIncyB2YWx1ZSB0byAxIGNhdXNlcyBjbG9zZWQgY2FwdGlvbnMgdG8gYmUgc2hvd25cbiAgICAgICAgLy8gYnkgZGVmYXVsdCwgZXZlbiBpZiB0aGUgdXNlciBoYXMgdHVybmVkIGNhcHRpb25zIG9mZi4gVGhlIGRlZmF1bHRcbiAgICAgICAgLy8gYmVoYXZpb3IgaXMgYmFzZWQgb24gdXNlciBwcmVmZXJlbmNlLlxuICAgICAgICBjY19sb2FkX3BvbGljeTogb3B0cy5jYXB0aW9ucyAhPSBudWxsXG4gICAgICAgICAgPyBvcHRzLmNhcHRpb25zICE9PSBmYWxzZSA/IDEgOiAwXG4gICAgICAgICAgOiB1bmRlZmluZWQsIC8vIGRlZmF1bHQgdG8gbm90IHNldHRpbmcgdGhpcyBvcHRpb25cblxuICAgICAgICAvLyBTZXRzIHRoZSBwbGF5ZXIncyBpbnRlcmZhY2UgbGFuZ3VhZ2UuIFRoZSBwYXJhbWV0ZXIgdmFsdWUgaXMgYW4gSVNPXG4gICAgICAgIC8vIDYzOS0xIHR3by1sZXR0ZXIgbGFuZ3VhZ2UgY29kZSBvciBhIGZ1bGx5IHNwZWNpZmllZCBsb2NhbGUuIEZvclxuICAgICAgICAvLyBleGFtcGxlLCBmciBhbmQgZnItY2EgYXJlIGJvdGggdmFsaWQgdmFsdWVzLiBPdGhlciBsYW5ndWFnZSBpbnB1dFxuICAgICAgICAvLyBjb2Rlcywgc3VjaCBhcyBJRVRGIGxhbmd1YWdlIHRhZ3MgKEJDUCA0NykgbWlnaHQgYWxzbyBiZSBoYW5kbGVkXG4gICAgICAgIC8vIHByb3Blcmx5LlxuICAgICAgICBobDogKG9wdHMuY2FwdGlvbnMgIT0gbnVsbCAmJiBvcHRzLmNhcHRpb25zICE9PSBmYWxzZSlcbiAgICAgICAgICA/IG9wdHMuY2FwdGlvbnNcbiAgICAgICAgICA6IHVuZGVmaW5lZCwgLy8gZGVmYXVsdCB0byBub3Qgc2V0dGluZyB0aGlzIG9wdGlvblxuXG4gICAgICAgIC8vIFRoaXMgcGFyYW1ldGVyIHNwZWNpZmllcyB0aGUgZGVmYXVsdCBsYW5ndWFnZSB0aGF0IHRoZSBwbGF5ZXIgd2lsbFxuICAgICAgICAvLyB1c2UgdG8gZGlzcGxheSBjYXB0aW9ucy4gU2V0IHRoZSBwYXJhbWV0ZXIncyB2YWx1ZSB0byBhbiBJU08gNjM5LTFcbiAgICAgICAgLy8gdHdvLWxldHRlciBsYW5ndWFnZSBjb2RlLlxuICAgICAgICBjY19sYW5nX3ByZWY6IChvcHRzLmNhcHRpb25zICE9IG51bGwgJiYgb3B0cy5jYXB0aW9ucyAhPT0gZmFsc2UpXG4gICAgICAgICAgPyBvcHRzLmNhcHRpb25zXG4gICAgICAgICAgOiB1bmRlZmluZWQsIC8vIGRlZmF1bHQgdG8gbm90IHNldHRpbmcgdGhpcyBvcHRpb25cblxuICAgICAgICAvLyBUaGlzIHBhcmFtZXRlciBpbmRpY2F0ZXMgd2hldGhlciB0aGUgdmlkZW8gcGxheWVyIGNvbnRyb2xzIGFyZVxuICAgICAgICAvLyBkaXNwbGF5ZWQuIEZvciBJRnJhbWUgZW1iZWRzIHRoYXQgbG9hZCBhIEZsYXNoIHBsYXllciwgaXQgYWxzbyBkZWZpbmVzXG4gICAgICAgIC8vIHdoZW4gdGhlIGNvbnRyb2xzIGRpc3BsYXkgaW4gdGhlIHBsYXllciBhcyB3ZWxsIGFzIHdoZW4gdGhlIHBsYXllclxuICAgICAgICAvLyB3aWxsIGxvYWQuIFN1cHBvcnRlZCB2YWx1ZXMgYXJlOlxuICAgICAgICAvLyAgIC0gY29udHJvbHM9MCDigJMgUGxheWVyIGNvbnRyb2xzIGRvIG5vdCBkaXNwbGF5IGluIHRoZSBwbGF5ZXIuIEZvclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgIElGcmFtZSBlbWJlZHMsIHRoZSBGbGFzaCBwbGF5ZXIgbG9hZHMgaW1tZWRpYXRlbHkuXG4gICAgICAgIC8vICAgLSBjb250cm9scz0xIOKAkyAoZGVmYXVsdCkgUGxheWVyIGNvbnRyb2xzIGRpc3BsYXkgaW4gdGhlIHBsYXllci4gRm9yXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgSUZyYW1lIGVtYmVkcywgdGhlIGNvbnRyb2xzIGRpc3BsYXkgaW1tZWRpYXRlbHkgYW5kXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgdGhlIEZsYXNoIHBsYXllciBhbHNvIGxvYWRzIGltbWVkaWF0ZWx5LlxuICAgICAgICAvLyAgIC0gY29udHJvbHM9MiDigJMgUGxheWVyIGNvbnRyb2xzIGRpc3BsYXkgaW4gdGhlIHBsYXllci4gRm9yIElGcmFtZVxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgIGVtYmVkcywgdGhlIGNvbnRyb2xzIGRpc3BsYXkgYW5kIHRoZSBGbGFzaCBwbGF5ZXJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICBsb2FkcyBhZnRlciB0aGUgdXNlciBpbml0aWF0ZXMgdGhlIHZpZGVvIHBsYXliYWNrLlxuICAgICAgICBjb250cm9sczogb3B0cy5jb250cm9scyA/IDIgOiAwLFxuXG4gICAgICAgIC8vIFNldHRpbmcgdGhlIHBhcmFtZXRlcidzIHZhbHVlIHRvIDEgY2F1c2VzIHRoZSBwbGF5ZXIgdG8gbm90IHJlc3BvbmQgdG9cbiAgICAgICAgLy8ga2V5Ym9hcmQgY29udHJvbHMuIFRoZSBkZWZhdWx0IHZhbHVlIGlzIDAsIHdoaWNoIG1lYW5zIHRoYXQga2V5Ym9hcmRcbiAgICAgICAgLy8gY29udHJvbHMgYXJlIGVuYWJsZWQuXG4gICAgICAgIGRpc2FibGVrYjogb3B0cy5rZXlib2FyZCA/IDAgOiAxLFxuXG4gICAgICAgIC8vIFNldHRpbmcgdGhlIHBhcmFtZXRlcidzIHZhbHVlIHRvIDEgZW5hYmxlcyB0aGUgcGxheWVyIHRvIGJlXG4gICAgICAgIC8vIGNvbnRyb2xsZWQgdmlhIElGcmFtZSBvciBKYXZhU2NyaXB0IFBsYXllciBBUEkgY2FsbHMuIFRoZSBkZWZhdWx0XG4gICAgICAgIC8vIHZhbHVlIGlzIDAsIHdoaWNoIG1lYW5zIHRoYXQgdGhlIHBsYXllciBjYW5ub3QgYmUgY29udHJvbGxlZCB1c2luZ1xuICAgICAgICAvLyB0aG9zZSBBUElzLlxuICAgICAgICBlbmFibGVqc2FwaTogMSxcblxuICAgICAgICAvLyBTZXR0aW5nIHRoaXMgcGFyYW1ldGVyIHRvIDAgcHJldmVudHMgdGhlIGZ1bGxzY3JlZW4gYnV0dG9uIGZyb21cbiAgICAgICAgLy8gZGlzcGxheWluZyBpbiB0aGUgcGxheWVyLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyAxLCB3aGljaCBjYXVzZXMgdGhlXG4gICAgICAgIC8vIGZ1bGxzY3JlZW4gYnV0dG9uIHRvIGRpc3BsYXkuXG4gICAgICAgIGZzOiBvcHRzLmZ1bGxzY3JlZW4gPyAxIDogMCxcblxuICAgICAgICAvLyBTZXR0aW5nIHRoZSBwYXJhbWV0ZXIncyB2YWx1ZSB0byAxIGNhdXNlcyB2aWRlbyBhbm5vdGF0aW9ucyB0byBiZVxuICAgICAgICAvLyBzaG93biBieSBkZWZhdWx0LCB3aGVyZWFzIHNldHRpbmcgdG8gMyBjYXVzZXMgdmlkZW8gYW5ub3RhdGlvbnMgdG8gbm90XG4gICAgICAgIC8vIGJlIHNob3duIGJ5IGRlZmF1bHQuIFRoZSBkZWZhdWx0IHZhbHVlIGlzIDEuXG4gICAgICAgIGl2X2xvYWRfcG9saWN5OiBvcHRzLmFubm90YXRpb25zID8gMSA6IDMsXG5cbiAgICAgICAgLy8gVGhpcyBwYXJhbWV0ZXIgbGV0cyB5b3UgdXNlIGEgWW91VHViZSBwbGF5ZXIgdGhhdCBkb2VzIG5vdCBzaG93IGFcbiAgICAgICAgLy8gWW91VHViZSBsb2dvLiBTZXQgdGhlIHBhcmFtZXRlciB2YWx1ZSB0byAxIHRvIHByZXZlbnQgdGhlIFlvdVR1YmUgbG9nb1xuICAgICAgICAvLyBmcm9tIGRpc3BsYXlpbmcgaW4gdGhlIGNvbnRyb2wgYmFyLiBOb3RlIHRoYXQgYSBzbWFsbCBZb3VUdWJlIHRleHRcbiAgICAgICAgLy8gbGFiZWwgd2lsbCBzdGlsbCBkaXNwbGF5IGluIHRoZSB1cHBlci1yaWdodCBjb3JuZXIgb2YgYSBwYXVzZWQgdmlkZW9cbiAgICAgICAgLy8gd2hlbiB0aGUgdXNlcidzIG1vdXNlIHBvaW50ZXIgaG92ZXJzIG92ZXIgdGhlIHBsYXllci5cbiAgICAgICAgbW9kZXN0YnJhbmRpbmc6IG9wdHMubW9kZXN0QnJhbmRpbmcgPyAxIDogMCxcblxuICAgICAgICAvLyBUaGlzIHBhcmFtZXRlciBwcm92aWRlcyBhbiBleHRyYSBzZWN1cml0eSBtZWFzdXJlIGZvciB0aGUgSUZyYW1lIEFQSVxuICAgICAgICAvLyBhbmQgaXMgb25seSBzdXBwb3J0ZWQgZm9yIElGcmFtZSBlbWJlZHMuIElmIHlvdSBhcmUgdXNpbmcgdGhlIElGcmFtZVxuICAgICAgICAvLyBBUEksIHdoaWNoIG1lYW5zIHlvdSBhcmUgc2V0dGluZyB0aGUgZW5hYmxlanNhcGkgcGFyYW1ldGVyIHZhbHVlIHRvIDEsXG4gICAgICAgIC8vIHlvdSBzaG91bGQgYWx3YXlzIHNwZWNpZnkgeW91ciBkb21haW4gYXMgdGhlIG9yaWdpbiBwYXJhbWV0ZXIgdmFsdWUuXG4gICAgICAgIG9yaWdpbjogd2luZG93LmxvY2F0aW9uLm9yaWdpbixcblxuICAgICAgICAvLyBUaGlzIHBhcmFtZXRlciBjb250cm9scyB3aGV0aGVyIHZpZGVvcyBwbGF5IGlubGluZSBvciBmdWxsc2NyZWVuIGluIGFuXG4gICAgICAgIC8vIEhUTUw1IHBsYXllciBvbiBpT1MuIFZhbGlkIHZhbHVlcyBhcmU6XG4gICAgICAgIC8vICAgLSAwOiBUaGlzIHZhbHVlIGNhdXNlcyBmdWxsc2NyZWVuIHBsYXliYWNrLiBUaGlzIGlzIGN1cnJlbnRseSB0aGVcbiAgICAgICAgLy8gICAgICAgIGRlZmF1bHQgdmFsdWUsIHRob3VnaCB0aGUgZGVmYXVsdCBpcyBzdWJqZWN0IHRvIGNoYW5nZS5cbiAgICAgICAgLy8gICAtIDE6IFRoaXMgdmFsdWUgY2F1c2VzIGlubGluZSBwbGF5YmFjayBmb3IgVUlXZWJWaWV3cyBjcmVhdGVkIHdpdGhcbiAgICAgICAgLy8gICAgICAgIHRoZSBhbGxvd3NJbmxpbmVNZWRpYVBsYXliYWNrIHByb3BlcnR5IHNldCB0byBUUlVFLlxuICAgICAgICBwbGF5c2lubGluZTogb3B0cy5wbGF5c0lubGluZSA/IDEgOiAwLFxuXG4gICAgICAgIC8vIFRoaXMgcGFyYW1ldGVyIGluZGljYXRlcyB3aGV0aGVyIHRoZSBwbGF5ZXIgc2hvdWxkIHNob3cgcmVsYXRlZFxuICAgICAgICAvLyB2aWRlb3MgZnJvbSB0aGUgc2FtZSBjaGFubmVsICgwKSBvciBmcm9tIGFueSBjaGFubmVsICgxKSB3aGVuXG4gICAgICAgIC8vIHBsYXliYWNrIG9mIHRoZSB2aWRlbyBlbmRzLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyAxLlxuICAgICAgICByZWw6IG9wdHMucmVsYXRlZCA/IDEgOiAwLFxuXG4gICAgICAgIC8vIChOb3QgcGFydCBvZiBkb2N1bWVudGVkIEFQSSkgQWxsb3cgaHRtbCBlbGVtZW50cyB3aXRoIGhpZ2hlciB6LWluZGV4XG4gICAgICAgIC8vIHRvIGJlIHNob3duIG9uIHRvcCBvZiB0aGUgWW91VHViZSBwbGF5ZXIuXG4gICAgICAgIHdtb2RlOiAnb3BhcXVlJ1xuICAgICAgfSxcbiAgICAgIGV2ZW50czoge1xuICAgICAgICBvblJlYWR5OiAoKSA9PiB0aGlzLl9vblJlYWR5KHZpZGVvSWQpLFxuICAgICAgICBvblN0YXRlQ2hhbmdlOiAoZGF0YSkgPT4gdGhpcy5fb25TdGF0ZUNoYW5nZShkYXRhKSxcbiAgICAgICAgb25QbGF5YmFja1F1YWxpdHlDaGFuZ2U6IChkYXRhKSA9PiB0aGlzLl9vblBsYXliYWNrUXVhbGl0eUNoYW5nZShkYXRhKSxcbiAgICAgICAgb25QbGF5YmFja1JhdGVDaGFuZ2U6IChkYXRhKSA9PiB0aGlzLl9vblBsYXliYWNrUmF0ZUNoYW5nZShkYXRhKSxcbiAgICAgICAgb25FcnJvcjogKGRhdGEpID0+IHRoaXMuX29uRXJyb3IoZGF0YSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgZXZlbnQgZmlyZXMgd2hlbiB0aGUgcGxheWVyIGhhcyBmaW5pc2hlZCBsb2FkaW5nIGFuZCBpcyByZWFkeSB0byBiZWdpblxuICAgKiByZWNlaXZpbmcgQVBJIGNhbGxzLlxuICAgKi9cbiAgX29uUmVhZHkgKHZpZGVvSWQpIHtcbiAgICBpZiAodGhpcy5kZXN0cm95ZWQpIHJldHVyblxuXG4gICAgdGhpcy5fcmVhZHkgPSB0cnVlXG5cbiAgICAvLyBPbmNlIHRoZSBwbGF5ZXIgaXMgcmVhZHksIGFsd2F5cyBjYWxsIGBsb2FkKHZpZGVvSWQsIFthdXRvcGxheV0pYCB0byBoYW5kbGVcbiAgICAvLyB0aGVzZSBwb3NzaWJsZSBjYXNlczpcbiAgICAvL1xuICAgIC8vICAgMS4gYGxvYWQodmlkZW9JZCwgdHJ1ZSlgIHdhcyBjYWxsZWQgYmVmb3JlIHRoZSBwbGF5ZXIgd2FzIHJlYWR5LiBFbnN1cmUgdGhhdFxuICAgIC8vICAgICAgdGhlIHNlbGVjdGVkIHZpZGVvIHN0YXJ0cyB0byBwbGF5LlxuICAgIC8vXG4gICAgLy8gICAyLiBgbG9hZCh2aWRlb0lkLCBmYWxzZSlgIHdhcyBjYWxsZWQgYmVmb3JlIHRoZSBwbGF5ZXIgd2FzIHJlYWR5LiBOb3cgdGhlXG4gICAgLy8gICAgICBwbGF5ZXIgaXMgcmVhZHkgYW5kIHRoZXJlJ3Mgbm90aGluZyB0byBkby5cbiAgICAvL1xuICAgIC8vICAgMy4gYGxvYWQodmlkZW9JZCwgW2F1dG9wbGF5XSlgIHdhcyBjYWxsZWQgbXVsdGlwbGUgdGltZXMgYmVmb3JlIHRoZSBwbGF5ZXJcbiAgICAvLyAgICAgIHdhcyByZWFkeS4gVGhlcmVmb3JlLCB0aGUgcGxheWVyIHdhcyBpbml0aWFsaXplZCB3aXRoIHRoZSB3cm9uZyB2aWRlb0lkLFxuICAgIC8vICAgICAgc28gbG9hZCB0aGUgbGF0ZXN0IHZpZGVvSWQgYW5kIHBvdGVudGlhbGx5IGF1dG9wbGF5IGl0LlxuICAgIHRoaXMubG9hZCh0aGlzLnZpZGVvSWQsIHRoaXMuX2F1dG9wbGF5KVxuXG4gICAgdGhpcy5fZmx1c2hRdWV1ZSgpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gdGhlIHBsYXllcidzIHN0YXRlIGNoYW5nZXMuIFdlIGVtaXQgZnJpZW5kbHkgZXZlbnRzIHNvIHRoZSB1c2VyXG4gICAqIGRvZXNuJ3QgbmVlZCB0byB1c2UgWW91VHViZSdzIFlULlBsYXllclN0YXRlLiogZXZlbnQgY29uc3RhbnRzLlxuICAgKi9cbiAgX29uU3RhdGVDaGFuZ2UgKGRhdGEpIHtcbiAgICBpZiAodGhpcy5kZXN0cm95ZWQpIHJldHVyblxuXG4gICAgY29uc3Qgc3RhdGUgPSBZT1VUVUJFX1NUQVRFU1tkYXRhLmRhdGFdXG5cbiAgICBpZiAoc3RhdGUpIHtcbiAgICAgIC8vIFNlbmQgYSAndGltZXVwZGF0ZScgYW55dGltZSB0aGUgc3RhdGUgY2hhbmdlcy4gV2hlbiB0aGUgdmlkZW8gaGFsdHMgZm9yIGFueVxuICAgICAgLy8gcmVhc29uICgncGF1c2VkJywgJ2J1ZmZlcmluZycsIG9yICdlbmRlZCcpIG5vIGZ1cnRoZXIgJ3RpbWV1cGRhdGUnIGV2ZW50c1xuICAgICAgLy8gc2hvdWxkIGZpcmUgdW50aWwgdGhlIHZpZGVvIHVuaGFsdHMuXG4gICAgICBpZiAoWydwYXVzZWQnLCAnYnVmZmVyaW5nJywgJ2VuZGVkJ10uaW5jbHVkZXMoc3RhdGUpKSB0aGlzLl9vblRpbWV1cGRhdGUoKVxuXG4gICAgICB0aGlzLmVtaXQoc3RhdGUpXG5cbiAgICAgIC8vIFdoZW4gdGhlIHZpZGVvIGNoYW5nZXMgKCd1bnN0YXJ0ZWQnIG9yICdjdWVkJykgb3Igc3RhcnRzICgncGxheWluZycpIHRoZW4gYVxuICAgICAgLy8gJ3RpbWV1cGRhdGUnIHNob3VsZCBmb2xsb3cgYWZ0ZXJ3YXJkcyAobmV2ZXIgYmVmb3JlISkgdG8gcmVzZXQgdGhlIHRpbWUuXG4gICAgICBpZiAoWyd1bnN0YXJ0ZWQnLCAncGxheWluZycsICdjdWVkJ10uaW5jbHVkZXMoc3RhdGUpKSB0aGlzLl9vblRpbWV1cGRhdGUoKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VucmVjb2duaXplZCBzdGF0ZSBjaGFuZ2U6ICcgKyBkYXRhKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIGV2ZW50IGZpcmVzIHdoZW5ldmVyIHRoZSB2aWRlbyBwbGF5YmFjayBxdWFsaXR5IGNoYW5nZXMuIFBvc3NpYmxlXG4gICAqIHZhbHVlcyBhcmU6ICdzbWFsbCcsICdtZWRpdW0nLCAnbGFyZ2UnLCAnaGQ3MjAnLCAnaGQxMDgwJywgJ2hpZ2hyZXMnLlxuICAgKi9cbiAgX29uUGxheWJhY2tRdWFsaXR5Q2hhbmdlIChkYXRhKSB7XG4gICAgaWYgKHRoaXMuZGVzdHJveWVkKSByZXR1cm5cbiAgICB0aGlzLmVtaXQoJ3BsYXliYWNrUXVhbGl0eUNoYW5nZScsIGRhdGEuZGF0YSlcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIGV2ZW50IGZpcmVzIHdoZW5ldmVyIHRoZSB2aWRlbyBwbGF5YmFjayByYXRlIGNoYW5nZXMuXG4gICAqL1xuICBfb25QbGF5YmFja1JhdGVDaGFuZ2UgKGRhdGEpIHtcbiAgICBpZiAodGhpcy5kZXN0cm95ZWQpIHJldHVyblxuICAgIHRoaXMuZW1pdCgncGxheWJhY2tSYXRlQ2hhbmdlJywgZGF0YS5kYXRhKVxuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgZXZlbnQgZmlyZXMgaWYgYW4gZXJyb3Igb2NjdXJzIGluIHRoZSBwbGF5ZXIuXG4gICAqL1xuICBfb25FcnJvciAoZGF0YSkge1xuICAgIGlmICh0aGlzLmRlc3Ryb3llZCkgcmV0dXJuXG5cbiAgICBjb25zdCBjb2RlID0gZGF0YS5kYXRhXG5cbiAgICAvLyBUaGUgSFRNTDVfRVJST1IgZXJyb3Igb2NjdXJzIHdoZW4gdGhlIFlvdVR1YmUgcGxheWVyIG5lZWRzIHRvIHN3aXRjaCBmcm9tXG4gICAgLy8gSFRNTDUgdG8gRmxhc2ggdG8gc2hvdyBhbiBhZC4gSWdub3JlIGl0LlxuICAgIGlmIChjb2RlID09PSBZT1VUVUJFX0VSUk9SLkhUTUw1X0VSUk9SKSByZXR1cm5cblxuICAgIC8vIFRoZSByZW1haW5pbmcgZXJyb3IgdHlwZXMgb2NjdXIgd2hlbiB0aGUgWW91VHViZSBwbGF5ZXIgY2Fubm90IHBsYXkgdGhlXG4gICAgLy8gZ2l2ZW4gdmlkZW8uIFRoaXMgaXMgbm90IGEgZmF0YWwgZXJyb3IuIFJlcG9ydCBpdCBhcyB1bnBsYXlhYmxlIHNvIHRoZSB1c2VyXG4gICAgLy8gaGFzIGFuIG9wcG9ydHVuaXR5IHRvIHBsYXkgYW5vdGhlciB2aWRlby5cbiAgICBpZiAoY29kZSA9PT0gWU9VVFVCRV9FUlJPUi5VTlBMQVlBQkxFXzEgfHxcbiAgICAgICAgY29kZSA9PT0gWU9VVFVCRV9FUlJPUi5VTlBMQVlBQkxFXzIgfHxcbiAgICAgICAgY29kZSA9PT0gWU9VVFVCRV9FUlJPUi5OT1RfRk9VTkQgfHxcbiAgICAgICAgY29kZSA9PT0gWU9VVFVCRV9FUlJPUi5JTlZBTElEX1BBUkFNKSB7XG4gICAgICByZXR1cm4gdGhpcy5lbWl0KCd1bnBsYXlhYmxlJywgdGhpcy52aWRlb0lkKVxuICAgIH1cblxuICAgIC8vIFVuZXhwZWN0ZWQgZXJyb3IsIGRvZXMgbm90IG1hdGNoIGFueSBrbm93biB0eXBlXG4gICAgdGhpcy5fZGVzdHJveShuZXcgRXJyb3IoJ1lvdVR1YmUgUGxheWVyIEVycm9yLiBVbmtub3duIGVycm9yIGNvZGU6ICcgKyBjb2RlKSlcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIGV2ZW50IGZpcmVzIHdoZW4gdGhlIHRpbWUgaW5kaWNhdGVkIGJ5IHRoZSBgZ2V0Q3VycmVudFRpbWUoKWAgbWV0aG9kXG4gICAqIGhhcyBiZWVuIHVwZGF0ZWQuXG4gICAqL1xuICBfb25UaW1ldXBkYXRlICgpIHtcbiAgICB0aGlzLmVtaXQoJ3RpbWV1cGRhdGUnLCB0aGlzLmdldEN1cnJlbnRUaW1lKCkpXG4gIH1cblxuICBfc3RhcnRJbnRlcnZhbCAoKSB7XG4gICAgdGhpcy5faW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB0aGlzLl9vblRpbWV1cGRhdGUoKSwgdGhpcy5fb3B0cy50aW1ldXBkYXRlRnJlcXVlbmN5KVxuICB9XG5cbiAgX3N0b3BJbnRlcnZhbCAoKSB7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9pbnRlcnZhbClcbiAgICB0aGlzLl9pbnRlcnZhbCA9IG51bGxcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFlvdVR1YmVQbGF5ZXJcbiIsImltcG9ydCB7IFBsYXllciB9IGZyb20gJy4vY29tcG9uZW50cy9wbGF5ZXInO1xyXG5pbXBvcnQgeyBRdWV1ZSB9IGZyb20gJy4vY29tcG9uZW50cy9xdWV1ZSc7XHJcbmltcG9ydCB7IEdvb2dsZUF1dGhlbnRpY2F0aW9uIH0gZnJvbSAnLi9zZXJ2aWNlcy9nb29nbGUtYXV0aGVudGljYXRpb24nO1xyXG5pbXBvcnQgeyBTZWFyY2ggfSBmcm9tICcuL3NlcnZpY2VzL3NlYXJjaCc7XHJcbmltcG9ydCB7IFNvbmcgfSBmcm9tICcuL21vZGVscy9zb25nJztcclxuaW1wb3J0IHsgQXBwRXZlbnQgfSBmcm9tICcuL3NlcnZpY2VzL2V2ZW50JztcclxuaW1wb3J0IHsgUGxheWxpc3QgfSBmcm9tICcuL3NlcnZpY2VzL3BsYXlsaXN0JztcclxuaW1wb3J0IHsgVXRpbHMgfSBmcm9tICcuL3NlcnZpY2VzL3V0aWxzJztcclxuaW1wb3J0IHsgU3RvcmFnZSB9IGZyb20gJy4vc2VydmljZXMvc3RvcmFnZSc7XHJcblxyXG5jb25zdCBwbGF5ZXIgPSBQbGF5ZXIuZ2V0SW5zdGFuY2UoJyNwbGF5ZXInKTtcclxuXHJcbi8vUXVldWUucXVldWUoJ0R5RGZnTU9VakNJJyk7XHJcbi8qIFF1ZXVlLnF1ZXVlKCdrSlFQN2tpdzVGaycpO1xyXG5RdWV1ZS5xdWV1ZSgnc1dMUVZBOU5sNXMnKTtcclxuUXVldWUucXVldWUoJ0ViSWxnRDVJblNnJyk7XHJcblF1ZXVlLnF1ZXVlKCd0aXlMdm8yNEEyZycpO1xyXG5RdWV1ZS5xdWV1ZSgnXzF1R05hRTZxdlUnKTsgKi9cclxuXHJcbnBsYXllci5yZWdpc3RlckV2ZW50SGFuZGxlcnMoKTtcclxuXHJcbmNvbnN0IHNpZ25CdG5IYW5kbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lnbmluLWJ0bicpOyBcclxuY29uc3Qgc2VhcmNoRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtZm9ybScpO1xyXG5jb25zdCBzZWFyY2hCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWJhcicpO1xyXG5jb25zdCBzZWFyY2hCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWJ1dHRvbicpO1xyXG5cclxuY29uc3QgY2hlY2tJZkF1dGhlbnRpY2F0ZWQgPSAoKTogdm9pZCA9PiB7XHJcbiAgICBpZiAoR29vZ2xlQXV0aGVudGljYXRpb24uaXNBdXRoZW50aWNhdGVkKCkpIHtcclxuICAgICAgICBzaWduQnRuSGFuZGxlPy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgICAgICBzZWFyY2hGb3JtPy5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhYmxlZCcpO1xyXG4gICAgICAgIHNlYXJjaEJhcj8uc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdTZWFyY2ggc29uZ3MgYW5kIGFydGlzdHMnKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHNpZ25CdG5IYW5kbGU/LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgICAgIHNlYXJjaEZvcm0/LmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkJyk7XHJcbiAgICB9XHJcbn1cclxuY2hlY2tJZkF1dGhlbnRpY2F0ZWQoKTtcclxuc2lnbkJ0bkhhbmRsZT8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBHb29nbGVBdXRoZW50aWNhdGlvbi5hdXRoZW50aWNhdGUoKS50aGVuKCgpID0+IHtcclxuICAgICAgICBjaGVja0lmQXV0aGVudGljYXRlZCgpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuY29uc3Qgb25TaWduSW4gPSAoZ29vZ2xlVXNlcjogYW55KSA9PiB7XHJcbiAgICB2YXIgcHJvZmlsZSA9IGdvb2dsZVVzZXIuZ2V0QmFzaWNQcm9maWxlKCk7XHJcbiAgICBjb25zb2xlLmxvZygnSUQ6ICcgKyBwcm9maWxlLmdldElkKCkpOyAvLyBEbyBub3Qgc2VuZCB0byB5b3VyIGJhY2tlbmQhIFVzZSBhbiBJRCB0b2tlbiBpbnN0ZWFkLlxyXG4gICAgY29uc29sZS5sb2coJ05hbWU6ICcgKyBwcm9maWxlLmdldE5hbWUoKSk7XHJcbiAgICBjb25zb2xlLmxvZygnSW1hZ2UgVVJMOiAnICsgcHJvZmlsZS5nZXRJbWFnZVVybCgpKTtcclxuICAgIGNvbnNvbGUubG9nKCdFbWFpbDogJyArIHByb2ZpbGUuZ2V0RW1haWwoKSk7IC8vIFRoaXMgaXMgbnVsbCBpZiB0aGUgJ2VtYWlsJyBzY29wZSBpcyBub3QgcHJlc2VudC5cclxufVxyXG5cclxuY29uc3QgbWFpbkNvbnRhaW5lckJsb2NrOiBzdHJpbmcgPSBgXHJcbjxkaXYgY2xhc3M9XCJjb2wteHMtNCBjb2wtc20tMyBjb2wtbWQtMyBjb2wtbGctMlwiPlxyXG4gICAgPGRpdiBjbGFzcz1cIml0ZW1cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicG9zLXJsdFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbS1vdmVybGF5IGJnLWJsYWNrLW9wYWNpdHlcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZW50ZXIgdGV4dC1jZW50ZXIgdy1mdWxsIG0tdC1uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZiBjbGFzcz1cInBsYXlMaW5rXCIgZGF0YS1hdHRyaWJ1dGU9XCJ7e2lkfX1cIiBkYXRhLWF0dHJpYnV0ZS1hY3Rpb249XCJwbGF5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtMnggZmEtcGxheS1jaXJjbGUgdGV4dC13aGl0ZSBtLXItc21cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWYgY2xhc3M9XCJwbGF5TGlua1wiIGRhdGEtYXR0cmlidXRlPVwie3tpZH19XCIgZGF0YS1hdHRyaWJ1dGUtYWN0aW9uPVwicXVldWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS0yeCBmYS1hcnJvdy1hbHQtY2lyY2xlLWRvd24gdGV4dC13aGl0ZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyLTJ4XCI+XHJcbiAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwiaW1nLWZsdWlkXCIgc3JjPVwie3t0aHVtYm5haWx9fVwiLz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInAtMiB0ZXh0LWNlbnRlciB0ZXh0LW11dGVkIHRleHQtZWxsaXBzaXNcIj5cclxuICAgICAgICAgICAge3t0aXRsZX19XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+XHJcbmA7XHJcblxyXG4vKmNvbnN0IG5hdkJsb2NrID0gYFxyXG48bGkgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gbm8tYm9yZGVyIG5vLXBhZGRlciBwYWRkZXItaC1zbSBxdWV1ZS1saXN0XCIgZGF0YS1hdHRyaWJ1dGU9e3tpZH19PlxyXG4gICAgPHNwYW4gY2xhc3M9XCJmbG9hdC1sZWZ0IHRodW1iLXNtIG0tciBtLXQteHNcIj5cclxuICAgICAgICA8aW1nIHNyYz1cInt7dGh1bWJuYWlsfX1cIiBhbHQ9XCIuLi5cIiBjbGFzcz1cInJcIj5cclxuICAgIDwvc3Bhbj5cclxuICAgIDxkaXYgY2xhc3M9XCJjbGVhclwiPlxyXG4gICAgICAgIDxkaXY+PHNtYWxsPnt7dGl0bGV9fTwvc21hbGw+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC9saT5cclxuYDsqL1xyXG5cclxuY29uc3QgbmF2QmxvY2sgPSBgXHJcbjxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBuby1ib3JkZXIgbm8tcGFkZGVyIHBhZGRlci1oLXNtXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZmxvYXQtcmlnaHQgbS1sIHBhZGRlci1oLXNtXCI+XHJcbiAgICAgICAgPGEgY2xhc3M9XCJkZWxldGUtdHJhY2tcIiBkYXRhLWF0dHJpYnV0ZT17e2lkfX0+PGkgY2xhc3M9XCJmYSBmYS10aW1lcy1jaXJjbGVcIj48L2k+PC9hPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8c3BhbiBjbGFzcz1cIm0tci1zbSBmbG9hdC1sZWZ0IHBhZGRlci1oLXNtXCI+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInBsYXlsaXN0LXBsYXktYnRuIHBsYXllci1hdHRyaWJ1dGUgYmctbGlnaHQgbm8tcGFkZGVyXCIgZGF0YS1hdHRyaWJ1dGU9e3tpZH19PjxpIGNsYXNzPVwiZmFzIGZhLXBsYXlcIj48L2k+PC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInBsYXlsaXN0LXBhdXNlLWJ0biBwbGF5ZXItYXR0cmlidXRlIGJnLWxpZ2h0IG5vLXBhZGRlciBoaWRkZW5cIj48aSBjbGFzcz1cImZhcyBmYS1wYXVzZVwiPjwvaT48L2J1dHRvbj5cclxuICAgIDwvc3Bhbj5cclxuICAgIDxkaXYgY2xhc3M9XCJjbGVhclwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZmxvYXQtbGVmdCB0aHVtYi1zbSBtLXIgbS10LXhzXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwie3t0aHVtYm5haWx9fVwiIGFsdD1cIi4uLlwiIGNsYXNzPVwiclwiPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cInRpdGxlIHRleHQtZWxsaXBzaXNcIj57e3RpdGxlfX08L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuPC9saT4gXHJcbmA7XHJcbnNlYXJjaEJ0bj8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBzZWFyY2hUZXJtID0gKDxIVE1MSW5wdXRFbGVtZW50PnNlYXJjaEJhcik/LnZhbHVlO1xyXG4gICAgaWYgKHNlYXJjaFRlcm0pIHtcclxuICAgICAgICBTZWFyY2guc2VhcmNoKHNlYXJjaFRlcm0pLnRoZW4oKHJlc3BvbnNlOiBBcnJheTxTb25nPikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzZWFyY2hSZXN1bHREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLXJlc3VsdHMnKTtcclxuICAgICAgICAgICAgaWYgKHNlYXJjaFJlc3VsdERpdikge1xyXG4gICAgICAgICAgICAgICAgc2VhcmNoUmVzdWx0RGl2LmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgbGV0IHNvbmc6IFNvbmc7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHNvbmcgb2YgcmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZmlsbGVkVGVtcGxhdGUgPSBtYWluQ29udGFpbmVyQmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbGVkVGVtcGxhdGUgPSBmaWxsZWRUZW1wbGF0ZS5yZXBsYWNlKCd7e3RodW1ibmFpbH19Jywgc29uZy5nZXRUaHVtYm5haWwoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbGVkVGVtcGxhdGUgPSBmaWxsZWRUZW1wbGF0ZS5yZXBsYWNlKCd7e3RpdGxlfX0nLCBzb25nLmdldFRpdGxlKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbGxlZFRlbXBsYXRlID0gZmlsbGVkVGVtcGxhdGUucmVwbGFjZSgve3tpZH19L2csIHNvbmcuZ2V0SWQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoUmVzdWx0RGl2LmlubmVySFRNTCA9IHNlYXJjaFJlc3VsdERpdj8uaW5uZXJIVE1MICsgZmlsbGVkVGVtcGxhdGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwbGF5TGluaycpKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaWQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1hdHRyaWJ1dGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc29uZyA9IFNvbmcuZ2V0U29uZ0Zyb21MaXN0KHJlc3BvbnNlLCBpZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzb25nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhY3Rpb24gPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1hdHRyaWJ1dGUtYWN0aW9uJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQbGF5bGlzdC5nZXRTb25nKHNvbmcuZ2V0SWQoKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKHNhdmVkU29uZyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNhdmVkU29uZyAmJiBzYXZlZFNvbmcubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb25nLnNldFZpZGVvSWQoc2F2ZWRTb25nWzBdLnZpZGVvSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWN0aW9uID09PSAncGxheScpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllci5xdWV1ZUFuZFBsYXkoc29uZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBRdWV1ZS5xdWV1ZShzb25nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZmV0Y2ggdmlkZW9JZCBhbmQgc2F2ZSBzb25nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlYXJjaC55b3VUdWJlU2VhcmNoKHNvbmcuZ2V0VGl0bGUoKSArICcgJyArIHNvbmcuZ2V0QXJ0aXN0TmFtZSgpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbih2aWRlb0lkID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFjdGlvbiA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWF0dHJpYnV0ZS1hY3Rpb24nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2aWRlb0lkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc29uZy5zZXRWaWRlb0lkKHZpZGVvSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhY3Rpb24gPT09ICdwbGF5Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIucXVldWVBbmRQbGF5KHNvbmcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUXVldWUucXVldWUoc29uZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBsYXlsaXN0LnNhdmVTb25nKHNvbmcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IGNvbnNvbGUubG9nKCdTb25nIHNhdmVkJykpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coUXVldWUuZ2V0Q3VycmVudFF1ZXVlKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0ludmFsaWQgc29uZyBJRCA6ICcsIGlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuY29uc3QgdXBkYXRlUXVldWVMaXN0ZW5lciA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdRdWV1ZSB1cGRhdGVkJyk7XHJcbiAgICBjb25zdCBjdXJyZW50UXVldWU6IEFycmF5PFNvbmc+ID0gUXVldWUuZ2V0Q3VycmVudFF1ZXVlKCk7XHJcbiAgICBjb25zdCBwbGF5bGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5bGlzdCcpO1xyXG4gICAgaWYgKHBsYXlsaXN0KSB7XHJcbiAgICAgICAgbGV0IHNvbmc6IFNvbmc7XHJcbiAgICAgICAgcGxheWxpc3QuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgZm9yIChzb25nIG9mIGN1cnJlbnRRdWV1ZSkge1xyXG4gICAgICAgICAgICBsZXQgZmlsbGVkVGVtcGxhdGUgPSBuYXZCbG9jaztcclxuICAgICAgICAgICAgZmlsbGVkVGVtcGxhdGUgPSBmaWxsZWRUZW1wbGF0ZS5yZXBsYWNlKCd7e3RodW1ibmFpbH19Jywgc29uZy5nZXRUaHVtYm5haWwoKSk7XHJcbiAgICAgICAgICAgIGZpbGxlZFRlbXBsYXRlID0gZmlsbGVkVGVtcGxhdGUucmVwbGFjZSgne3t0aXRsZX19Jywgc29uZy5nZXRUaXRsZSgpKTtcclxuICAgICAgICAgICAgZmlsbGVkVGVtcGxhdGUgPSBmaWxsZWRUZW1wbGF0ZS5yZXBsYWNlKC97e2lkfX0vZywgc29uZy5nZXRWaWRlb0lkKCkhKTtcclxuICAgICAgICAgICAgcGxheWxpc3QuaW5uZXJIVE1MID0gcGxheWxpc3Q/LmlubmVySFRNTCArIGZpbGxlZFRlbXBsYXRlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwbGF5bGlzdC1wbGF5LWJ0bicpKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7IFxyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXR0cmlidXRlJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBwbGF5ZXIucGxheVRyYWNrKGlkKTtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nPy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncGxheWxpc3QtcGF1c2UtYnRuJykpLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHsgXHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgcGxheWVyLnBhdXNlVHJhY2soKTtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmc/LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkZWxldGUtdHJhY2snKSkuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXR0cmlidXRlJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBRdWV1ZS5kZWxldGVUcmFjayhpZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2F2ZS1wbGF5bGlzdCcpPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmICghU3RvcmFnZS5nZXQoJ0NVUlJFTlRfUExBWUxJU1RfSUQnKSkge1xyXG4gICAgICAgIFBsYXlsaXN0LnNhdmVQbGF5bGlzdChVdGlscy5yYW5kb21OdW1iZXIoKSwgUXVldWUuZ2V0Q3VycmVudFNvbmdJZHMoKSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UgJiYgcmVzcG9uc2UuaWQpIHtcclxuICAgICAgICAgICAgICAgIFN0b3JhZ2Uuc2F2ZSgnQ1VSUkVOVF9QTEFZTElTVF9JRCcsIHJlc3BvbnNlLmlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTsgICAgXHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgIH1cclxufSk7XHJcbkFwcEV2ZW50Lmxpc3RlbigncXVldWUtdXBkYXRlZCcsIHVwZGF0ZVF1ZXVlTGlzdGVuZXIpO1xyXG5RdWV1ZS5pbml0YWxpemUoKTsiLCJpbXBvcnQgWW91VHViZVBsYXllciBmcm9tICd5dC1wbGF5ZXInO1xyXG5cclxuaW1wb3J0IHsgUXVldWUgfSBmcm9tICcuL3F1ZXVlJztcclxuaW1wb3J0IHsgU29uZyB9IGZyb20gJy4uL21vZGVscy9zb25nJztcclxuaW1wb3J0IHsgUHJvZ3Jlc3NCYXIgfSBmcm9tICcuL3Byb2dlc3MtYmFyJztcclxuaW1wb3J0IHsgVXRpbHMgfSBmcm9tICcuLi9zZXJ2aWNlcy91dGlscyc7XHJcblxyXG4vKipcclxuICogVE9ETzogRm9ybWF0IHRoaXMgY2xhc3MgLSBtZXNzeSBjb2RlXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUGxheWVyIGV4dGVuZHMgWW91VHViZVBsYXllciB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBwbGF5ZXI6IFBsYXllcjtcclxuICAgIHByaXZhdGUgc3RhdGljIF9pc1BsYXlpbmc6IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIHN0YXRpYyBfY3VycmVudFRyYWNrSWQ6IHN0cmluZztcclxuICAgIHByaXZhdGUgcHJvZ3Jlc3M6IFByb2dyZXNzQmFyIHwgbnVsbCA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3Rvcihkb21FbElEOiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcihkb21FbElEKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2UoZG9tRWxJRDogc3RyaW5nKTogUGxheWVyIHtcclxuICAgICAgICBpZiAoIVBsYXllci5wbGF5ZXIpIHtcclxuICAgICAgICAgICAgUGxheWVyLnBsYXllciA9IG5ldyBQbGF5ZXIoZG9tRWxJRCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBQbGF5ZXIucGxheWVyO1xyXG4gICAgfTtcclxuXHJcbiAgICBwcml2YXRlIGxvYWRUcmFjayh0cmFja0lkOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBQbGF5ZXIuX2N1cnJlbnRUcmFja0lkID0gdHJhY2tJZDtcclxuICAgICAgICBQbGF5ZXIucGxheWVyLmxvYWQodHJhY2tJZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcGxheVRyYWNrKHRyYWNrSWQ/OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBpZiAodHJhY2tJZCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0b3BUcmFjaygpO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRUcmFjayh0cmFja0lkKTtcclxuICAgICAgICAgICAgdGhpcy5yZXNldEVsYXBzZWRUaW1lKCk7XHJcbiAgICAgICAgICAgIFF1ZXVlLnVwZGF0ZUN1cnJlbnRQbGF5aW5nVHJhY2sodHJhY2tJZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghUGxheWVyLl9jdXJyZW50VHJhY2tJZCkge1xyXG4gICAgICAgICAgICBsZXQgdHJhY2sgPSBRdWV1ZS5uZXh0KCk7XHJcbiAgICAgICAgICAgIGlmICh0cmFjaykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkVHJhY2sodHJhY2suZ2V0VmlkZW9JZCgpISk7XHJcbiAgICAgICAgICAgICAgICBQbGF5ZXIuX2lzUGxheWluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZVBsYXkoKTtcclxuICAgICAgICAgICAgICAgIFBsYXllci5wbGF5ZXIucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldEVsYXBzZWRUaW1lKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUVsYXBzZWRUaW1lKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTm8gdHJhY2tzIHRvIHBsYXknKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgUGxheWVyLl9pc1BsYXlpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnRvZ2dsZVBsYXkoKTtcclxuICAgICAgICAgICAgUGxheWVyLnBsYXllci5wbGF5KCk7XHJcbiAgICAgICAgICAgIC8vdGhpcy5yZXNldEVsYXBzZWRUaW1lKCk7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRWxhcHNlZFRpbWUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcXVldWVBbmRQbGF5KHNvbmc6IFNvbmcpOiB2b2lkIHtcclxuICAgICAgICBRdWV1ZS5xdWV1ZShzb25nKTtcclxuICAgICAgICBpZiAoUGxheWVyLl9pc1BsYXlpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5wYXVzZVRyYWNrKCk7XHJcbiAgICAgICAgICAgIHRoaXMucmVzZXRFbGFwc2VkVGltZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxvYWRUcmFjayhzb25nLmdldFZpZGVvSWQoKSEpO1xyXG4gICAgICAgIFF1ZXVlLnVwZGF0ZUN1cnJlbnRQbGF5aW5nVHJhY2soc29uZy5nZXRJZCgpKTtcclxuICAgICAgICBQbGF5ZXIuX2lzUGxheWluZyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy50b2dnbGVQbGF5KCk7XHJcbiAgICAgICAgUGxheWVyLnBsYXllci5wbGF5KCk7XHJcbiAgICAgICAgdGhpcy5yZXNldEVsYXBzZWRUaW1lKCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVFbGFwc2VkVGltZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHBhdXNlVHJhY2soKTogdm9pZCB7XHJcbiAgICAgICAgUGxheWVyLl9pc1BsYXlpbmcgPSBmYWxzZTtcclxuICAgICAgICBQbGF5ZXIucGxheWVyLnBhdXNlKCk7XHJcbiAgICAgICAgdGhpcy50b2dnbGVQbGF5KCk7XHJcbiAgICAgICAgdGhpcy5zdG9wVGltZXIoKTtcclxuICAgICAgICBpZiAodGhpcy5wcm9ncmVzcykge1xyXG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzLnN0b3AoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmV4dFRyYWNrKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucGF1c2VUcmFjaygpO1xyXG4gICAgICAgIGxldCBuZXh0VHJhY2sgPSBRdWV1ZS5uZXh0KCk7XHJcbiAgICAgICAgdGhpcy5wcm9ncmVzcz8ucmVzZXQoKTtcclxuICAgICAgICB0aGlzLnJlc2V0RWxhcHNlZFRpbWUoKTtcclxuICAgICAgICBpZiAobmV4dFRyYWNrKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZFRyYWNrKG5leHRUcmFjay5nZXRWaWRlb0lkKCkhKTtcclxuICAgICAgICAgICAgUGxheWVyLl9pc1BsYXlpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnRvZ2dsZVBsYXkoKTtcclxuICAgICAgICAgICAgdGhpcy5yZXNldEVsYXBzZWRUaW1lKCk7XHJcbiAgICAgICAgICAgIFBsYXllci5wbGF5ZXIucGxheSgpO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUVsYXBzZWRUaW1lKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByZXZpb3VzVHJhY2soKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5wYXVzZVRyYWNrKCk7XHJcbiAgICAgICAgbGV0IHByZXZpb3VzVHJhY2sgPSBRdWV1ZS5wcmV2aW91cygpO1xyXG4gICAgICAgIHRoaXMucHJvZ3Jlc3M/LnJlc2V0KCk7XHJcbiAgICAgICAgaWYgKHByZXZpb3VzVHJhY2spIHtcclxuICAgICAgICAgICAgdGhpcy5sb2FkVHJhY2socHJldmlvdXNUcmFjay5nZXRWaWRlb0lkKCkhKTtcclxuICAgICAgICAgICAgUGxheWVyLl9pc1BsYXlpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnRvZ2dsZVBsYXkoKTtcclxuICAgICAgICAgICAgdGhpcy5yZXNldEVsYXBzZWRUaW1lKCk7XHJcbiAgICAgICAgICAgIFBsYXllci5wbGF5ZXIucGxheSgpO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUVsYXBzZWRUaW1lKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0b3BUcmFjaygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnBhdXNlVHJhY2soKTtcclxuICAgICAgICB0aGlzLnByb2dyZXNzPy5yZXNldCgpO1xyXG4gICAgICAgIFBsYXllci5wbGF5ZXIuc3RvcCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZVBsYXkoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKFBsYXllci5faXNQbGF5aW5nKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXVzZS1idXR0b24nKT8uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5LWJ1dHRvbicpPy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXVzZS1idXR0b24nKT8uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5LWJ1dHRvbicpPy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHN0YXRpYyBzZWVrVG8odGltZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgUGxheWVyLmN1cnJlbnRUaW1lID0gdGltZTtcclxuICAgICAgICBQbGF5ZXIucGxheWVyLnNlZWsodGltZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVUaXRsZSgpOiB2b2lkIHtcclxuICAgICAgICBsZXQgY3VycmVudFF1ZXVlID0gUXVldWUuZ2V0Q3VycmVudFF1ZXVlKCk7XHJcbiAgICAgICAgY29uc3Qgc29uZyA9IFNvbmcuZ2V0U29uZ0Zyb21MaXN0KGN1cnJlbnRRdWV1ZSwgUGxheWVyLl9jdXJyZW50VHJhY2tJZCk7XHJcbiAgICAgICAgY29uc3QgdGl0bGVEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKTtcclxuICAgICAgICBpZiAodGl0bGVEaXYgJiYgc29uZykge1xyXG4gICAgICAgICAgICB0aXRsZURpdi5pbm5lckhUTUwgPSBzb25nLmdldFRpdGxlKCk7ICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVwZGF0ZVNvbmdUb3RhbFRpbWUodGltZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgdG90YWxUaW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG90YWwtdGltZScpO1xyXG4gICAgICAgIGlmICh0b3RhbFRpbWVFbCkge1xyXG4gICAgICAgICAgICB0b3RhbFRpbWVFbC5pbm5lckhUTUwgPSBVdGlscy5mb3JtYXRUaW1lKHRpbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfdGltZXI6IGFueTtcclxuICAgIHByaXZhdGUgc3RhdGljIGN1cnJlbnRUaW1lID0gMDtcclxuICAgIHByaXZhdGUgdXBkYXRlRWxhcHNlZFRpbWUoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKChQbGF5ZXIuY3VycmVudFRpbWUgPCBQbGF5ZXIucGxheWVyLmdldER1cmF0aW9uKCkpICYmICFQbGF5ZXIuX3RpbWVyKSB7XHJcbiAgICAgICAgICAgIFBsYXllci5fdGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZSgrK1BsYXllci5jdXJyZW50VGltZSk7XHJcbiAgICAgICAgICAgIH0sIDEwMDApOyAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBlbGFwc2VkVGltZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VsYXBzZWQtdGltZScpO1xyXG4gICAgcHJpdmF0ZSB1cGRhdGUoY3VycmVudFRpbWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmVsYXBzZWRUaW1lRWwpIHtcclxuICAgICAgICAgICAgdGhpcy5lbGFwc2VkVGltZUVsLmlubmVySFRNTCA9IFV0aWxzLmZvcm1hdFRpbWUoY3VycmVudFRpbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0b3BUaW1lcigpOiB2b2lkIHtcclxuICAgICAgICBjbGVhckludGVydmFsKFBsYXllci5fdGltZXIpO1xyXG4gICAgICAgIFBsYXllci5fdGltZXIgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVzZXRFbGFwc2VkVGltZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnN0b3BUaW1lcigpO1xyXG4gICAgICAgIFBsYXllci5jdXJyZW50VGltZSA9IDA7XHJcbiAgICAgICAgdGhpcy51cGRhdGUoMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXJFdmVudEhhbmRsZXJzKCk6IHZvaWQge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5LWJ1dHRvbicpPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1BsYXlpbmcnKTtcclxuICAgICAgICAgICAgdGhpcy5wbGF5VHJhY2soKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGF1c2UtYnV0dG9uJyk/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUGF1c2VkJyk7XHJcbiAgICAgICAgICAgIHRoaXMucGF1c2VUcmFjaygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXh0LWJ1dHRvbicpPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ05leHQgdHJhY2snKTtcclxuICAgICAgICAgICAgdGhpcy5uZXh0VHJhY2soKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJldmlvdXMtYnV0dG9uJyk/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUHJldmlvdXMgdHJhY2snKTtcclxuICAgICAgICAgICAgdGhpcy5wcmV2aW91c1RyYWNrKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2b2wtdXAnKT8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIFBsYXllci5wbGF5ZXIubXV0ZSgpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndm9sLXVwJyk/LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndm9sLW11dGUnKT8uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2b2wtbXV0ZScpPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgUGxheWVyLnBsYXllci51bk11dGUoKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZvbC1tdXRlJyk/LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndm9sLXVwJyk/LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBQbGF5ZXIucGxheWVyLm9uKCdwbGF5aW5nJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVRpdGxlKCk7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5wcm9ncmVzcykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9ncmVzcyA9IFByb2dyZXNzQmFyLmdldEluc3RhbmNlKCdwcm9ncmVzcy1iYXInKTsgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5wcm9ncmVzcy5zZXRUaW1lKFBsYXllci5wbGF5ZXIuZ2V0RHVyYXRpb24oKSk7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU29uZ1RvdGFsVGltZShQbGF5ZXIucGxheWVyLmdldER1cmF0aW9uKCkpO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUVsYXBzZWRUaW1lKCk7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3Muc3RhcnQoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgUGxheWVyLnBsYXllci5vbignZW5kZWQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubmV4dFRyYWNrKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBQbGF5ZXIgfSBmcm9tICcuL3BsYXllcic7XHJcblxyXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NCYXIge1xyXG4gICAgcHJpdmF0ZSB0b3RhbFRpbWU6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRQb3NpdGlvbjogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgdGljazogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgc3RhdGljIHRpbWVyOiBhbnk7XHJcbiAgICBwcml2YXRlIGVsZW1lbnQ6IHN0cmluZztcclxuICAgIHByaXZhdGUgcHJvZ3Jlc3NCYXJFbDogSFRNTEVsZW1lbnQgfCBudWxsO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBQcm9ncmVzc0JhcjtcclxuXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5wcm9ncmVzc0JhckVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5lbGVtZW50KTtcclxuICAgICAgICB0aGlzLl9hZGRDbGlja0xpc3RlbmVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldEluc3RhbmNlKGVsZW1lbnQ6IHN0cmluZyk6IFByb2dyZXNzQmFyIHtcclxuICAgICAgICBpZiAoIVByb2dyZXNzQmFyLl9pbnN0YW5jZSkge1xyXG4gICAgICAgICAgICBQcm9ncmVzc0Jhci5faW5zdGFuY2UgPSBuZXcgUHJvZ3Jlc3NCYXIoZWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBQcm9ncmVzc0Jhci5faW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VGltZSh0b3RhbFRpbWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudG90YWxUaW1lID0gdG90YWxUaW1lO1xyXG4gICAgICAgIHRoaXMudGljayA9IHRoaXMudG90YWxUaW1lIC8gMTAwO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSB1cGRhdGUoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFBvc2l0aW9uIDwgMTAwKSB7IFxyXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9ncmVzc0JhckVsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQb3NpdGlvbiA9IHRoaXMuY3VycmVudFBvc2l0aW9uICsgMC4xO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9ncmVzc0JhckVsLnN0eWxlLndpZHRoID0gdGhpcy5jdXJyZW50UG9zaXRpb24gKyAnJSc7IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIFByb2dyZXNzQmFyLnRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSgpOyBcclxuICAgICAgICB9LCAodGhpcy50aWNrICogMTAwKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RvcCgpOiB2b2lkIHtcclxuICAgICAgICBjbGVhckludGVydmFsKFByb2dyZXNzQmFyLnRpbWVyKTtcclxuICAgIH1cclxuXHJcbiAgICByZXNldCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnN0b3AoKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRQb3NpdGlvbiA9IDA7XHJcbiAgICAgICAgdGhpcy50aWNrID0gMDtcclxuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2FkZENsaWNrTGlzdGVuZXIoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvZ3Jlc3NCYXJFbCAmJiB0aGlzLnByb2dyZXNzQmFyRWwucGFyZW50RWxlbWVudCkge1xyXG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzQmFyRWwucGFyZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvZ3Jlc3NCYXJFbCAmJiB0aGlzLnByb2dyZXNzQmFyRWwucGFyZW50RWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlZWsgPSAodGhpcy50b3RhbFRpbWUgLyB0aGlzLnByb2dyZXNzQmFyRWwucGFyZW50RWxlbWVudC5jbGllbnRXaWR0aCkgKiAoZXZlbnQucGFnZVggLSAyMDApO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBvcyA9IChzZWVrIC8gdGhpcy50b3RhbFRpbWUpICogMTAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBvc2l0aW9uID0gcGFyc2VGbG9hdCgoTWF0aC5yb3VuZChwb3MgKiAxMCkgLyAxMCkudG9GaXhlZCgxKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgUGxheWVyLnNlZWtUbyhzZWVrKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgU29uZyB9IGZyb20gXCIuLi9tb2RlbHMvc29uZ1wiO1xyXG5pbXBvcnQgeyBBcHBFdmVudCB9IGZyb20gJy4uL3NlcnZpY2VzL2V2ZW50JztcclxuaW1wb3J0IHsgU3RvcmFnZSB9IGZyb20gJy4uL3NlcnZpY2VzL3N0b3JhZ2UnO1xyXG5pbXBvcnQgeyBQbGF5bGlzdCB9IGZyb20gXCIuLi9zZXJ2aWNlcy9wbGF5bGlzdFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFF1ZXVlIHtcclxuICAgIHByaXZhdGUgc3RhdGljIF9xdWV1ZTogQXJyYXk8U29uZz47XHJcbiAgICBwcml2YXRlIHN0YXRpYyBfY3VycmVudFRyYWNrID0gLTE7XHJcblxyXG4gICAgc3RhdGljIGluaXRhbGl6ZSgpIHtcclxuICAgICAgICBRdWV1ZS5fcXVldWUgPSBRdWV1ZS5fZmV0Y2hQcmV2aW91c1F1ZXVlKCk7XHJcbiAgICAgICAgQXBwRXZlbnQuZW1pdCgncXVldWUtdXBkYXRlZCcpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2ZldGNoUHJldmlvdXNRdWV1ZSgpOiBhbnkge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gU3RvcmFnZS5nZXQoJ0NVUlJFTlRfUVVFVUUnKTtcclxuICAgICAgICBjb25zdCBfdGVtcFF1ZXVlID0gbmV3IEFycmF5PFNvbmc+KCk7XHJcbiAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHZhbHVlLmZvckVhY2goKGl0ZW06IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgX3RlbXBRdWV1ZS5wdXNoKG5ldyBTb25nKGl0ZW0uaWQsIGl0ZW0udGl0bGUsIGl0ZW0uZGVzY3JpcHRpb24sIGl0ZW0uYXJ0aXN0TmFtZSwgaXRlbS50aHVtYm5haWwsIGl0ZW0udmlkZW9JZCkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIF90ZW1wUXVldWU7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgcXVldWUoc29uZzogU29uZyk6IHZvaWQge1xyXG4gICAgICAgIFF1ZXVlLl9xdWV1ZS5wdXNoKHNvbmcpO1xyXG4gICAgICAgIFBsYXlsaXN0LmFkZFNvbmdUb1BsYXlsaXN0KHNvbmcuZ2V0SWQoKSk7XHJcbiAgICAgICAgU3RvcmFnZS5zYXZlKCdDVVJSRU5UX1FVRVVFJywgUXVldWUuX3F1ZXVlKTtcclxuICAgICAgICBBcHBFdmVudC5lbWl0KCdxdWV1ZS11cGRhdGVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGRlcXVldWUoKTogU29uZyB8IHVuZGVmaW5lZCB7XHJcbiAgICAgICAgY29uc3Qgc29uZyA9IFF1ZXVlLl9xdWV1ZS5zaGlmdCgpO1xyXG4gICAgICAgIEFwcEV2ZW50LmVtaXQoJ3F1ZXVlLXVwZGF0ZWQnKTtcclxuICAgICAgICBTdG9yYWdlLnNhdmUoJ0NVUlJFTlRfUVVFVUUnLCBRdWV1ZS5fcXVldWUpO1xyXG4gICAgICAgIHJldHVybiBzb25nO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBuZXh0KCk6IFNvbmcgfCB1bmRlZmluZWQge1xyXG4gICAgICAgIGlmIChRdWV1ZS5fcXVldWVbUXVldWUuX2N1cnJlbnRUcmFjayArIDFdKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBRdWV1ZS5fcXVldWVbKytRdWV1ZS5fY3VycmVudFRyYWNrXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcHJldmlvdXMoKTogU29uZyB8IHVuZGVmaW5lZCB7XHJcbiAgICAgICAgaWYgKFF1ZXVlLl9xdWV1ZVtRdWV1ZS5fY3VycmVudFRyYWNrIC0gMV0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIFF1ZXVlLl9xdWV1ZVstLVF1ZXVlLl9jdXJyZW50VHJhY2tdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRDdXJyZW50UXVldWUoKTogQXJyYXk8U29uZz4ge1xyXG4gICAgICAgIHJldHVybiBRdWV1ZS5fcXVldWU7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldEN1cnJlbnRTb25nSWRzKCk6IEFycmF5PFN0cmluZz4ge1xyXG4gICAgICAgIHJldHVybiBRdWV1ZS5fcXVldWUubWFwKHNvbmcgPT4gc29uZy5nZXRJZCgpKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgdXBkYXRlQ3VycmVudFBsYXlpbmdUcmFjayh0cmFja0lkOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBRdWV1ZS5fY3VycmVudFRyYWNrID0gUXVldWUuX3F1ZXVlLmZpbmRJbmRleChzb25nID0+IHNvbmcuZ2V0SWQoKSA9PT0gdHJhY2tJZCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGRlbGV0ZVRyYWNrKHZpZGVvSWQ6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHBvcyA9IFF1ZXVlLl9xdWV1ZS5maW5kSW5kZXgoc29uZyA9PiBzb25nLmdldFZpZGVvSWQoKSA9PT0gdmlkZW9JZCk7XHJcbiAgICAgICAgY29uc3Qgc29uZyA9IFF1ZXVlLl9xdWV1ZVtwb3NdO1xyXG4gICAgICAgIFF1ZXVlLl9xdWV1ZS5zcGxpY2UocG9zLCAxKTtcclxuICAgICAgICBQbGF5bGlzdC5yZW1vdmVTb25nRnJvbVBsYXlsaXN0KHNvbmcuZ2V0SWQoKSk7XHJcbiAgICAgICAgQXBwRXZlbnQuZW1pdCgncXVldWUtdXBkYXRlZCcpO1xyXG4gICAgICAgIFN0b3JhZ2Uuc2F2ZSgnQ1VSUkVOVF9RVUVVRScsIFF1ZXVlLl9xdWV1ZSk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgU29uZyB7XHJcbiAgICBwcml2YXRlIGlkOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIGFydGlzdE5hbWU6IHN0cmluZztcclxuICAgIHByaXZhdGUgdGh1bWJuYWlsOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIHZpZGVvSWQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihpZDogc3RyaW5nLCB0aXRsZTogc3RyaW5nLCBkZXNjcmlwdGlvbjogc3RyaW5nLCBhcnRpc3ROYW1lOiBzdHJpbmcsIHRodW1ibmFpbDogc3RyaW5nLCB2aWRlb0lkPzogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgICAgICB0aGlzLmFydGlzdE5hbWUgPSBhcnRpc3ROYW1lO1xyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgICAgICB0aGlzLnRodW1ibmFpbCA9IHRodW1ibmFpbDtcclxuICAgICAgICB0aGlzLnZpZGVvSWQgPSB2aWRlb0lkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRJZCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRUaXRsZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRpdGxlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXREZXNjcmlwdGlvbigpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRBcnRpc3ROYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXJ0aXN0TmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0VGh1bWJuYWlsKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGh1bWJuYWlsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRWaWRlb0lkKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmlkZW9JZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0VmlkZW9JZCh2aWRlb0lkOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnZpZGVvSWQgPSB2aWRlb0lkO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRTb25nRnJvbUxpc3QobGlzdDogQXJyYXk8U29uZz4sIGlkOiBzdHJpbmcgfCBudWxsKTogU29uZyB8IG51bGwge1xyXG4gICAgICAgIGxldCBmaWx0ZXJlZExpc3QgPSBsaXN0LmZpbHRlcihzb25nID0+IHNvbmcuZ2V0SWQoKSA9PSBpZCk7XHJcbiAgICAgICAgaWYgKGZpbHRlcmVkTGlzdC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgZmlsdGVyZWRMaXN0ID0gbGlzdC5maWx0ZXIoc29uZyA9PiBzb25nLmdldFZpZGVvSWQoKSA9PSBpZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmaWx0ZXJlZExpc3QubGVuZ3RoID4gMCA/IGZpbHRlcmVkTGlzdFswXTogbnVsbDtcclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBBcHBFdmVudCB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBsaXN0ZW5lcnM6IHtbbmFtZTogc3RyaW5nXTogQXJyYXk8RnVuY3Rpb24+fSA9IHt9O1xyXG5cclxuICAgIHN0YXRpYyBsaXN0ZW4oZXZlbnQ6IHN0cmluZywgZnVuYzogRnVuY3Rpb24pOiB2b2lkIHtcclxuICAgICAgICBpZiAoQXBwRXZlbnQubGlzdGVuZXJzW2V2ZW50XSkge1xyXG4gICAgICAgICAgICBBcHBFdmVudC5saXN0ZW5lcnNbZXZlbnRdLnB1c2goZnVuYyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgYXJyID0gW107XHJcbiAgICAgICAgICAgIGFyci5wdXNoKGZ1bmMpO1xyXG4gICAgICAgICAgICBBcHBFdmVudC5saXN0ZW5lcnNbZXZlbnRdID0gYXJyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZW1pdChldmVudDogc3RyaW5nLCBkYXRhPzogT2JqZWN0KTogdm9pZCB7XHJcbiAgICAgICAgaWYgKEFwcEV2ZW50Lmxpc3RlbmVyc1tldmVudF0pIHtcclxuICAgICAgICAgICAgQXBwRXZlbnQubGlzdGVuZXJzW2V2ZW50XS5mb3JFYWNoKChmdW5jOiBGdW5jdGlvbikgPT4gZnVuYyhkYXRhKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIEdvb2dsZUF1dGhlbnRpY2F0aW9uIHtcclxuICAgIHByaXZhdGUgc3RhdGljIF9pc0F1dGhlbnRpY2F0ZWQ6IGJvb2xlYW4gPSB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnZ29vZ2xlLWF1dGhlbnRpY2F0ZWQnKSA9PT0gJ3RydWUnPyB0cnVlOiBmYWxzZTtcclxuXHJcbiAgICBzdGF0aWMgaXNBdXRoZW50aWNhdGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBHb29nbGVBdXRoZW50aWNhdGlvbi5faXNBdXRoZW50aWNhdGVkO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBhdXRoZW50aWNhdGUoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBnYXBpLmxvYWQoJ2F1dGgyJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZmV0Y2goJ2h0dHA6Ly9wbGF5YmFjay5pbzozMDAwL3NlY3JldC9pZCcpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlSnNvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2FwaS5hdXRoMi5nZXRBdXRoSW5zdGFuY2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpZW50X2lkOiByZXNwb25zZUpzb24uQ0xJRU5UX0lEXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ2FwaS5hdXRoMi5nZXRBdXRoSW5zdGFuY2UoKS5zaWduSW4oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGU6ICdodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL3lvdXR1YmUuZm9yY2Utc3NsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdvb2dsZUF1dGhlbnRpY2F0aW9uLl9pc0F1dGhlbnRpY2F0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2dvb2dsZS1hdXRoZW50aWNhdGVkJywgJ3RydWUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBdXRoZW50aWNhdGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShHb29nbGVBdXRoZW50aWNhdGlvbi5sb2FkQ2xpZW50KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbG9hZENsaWVudCgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBnYXBpLmxvYWQoJ2NsaWVudCcsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGZldGNoKCdodHRwOi8vcGxheWJhY2suaW86MzAwMC9zZWNyZXQva2V5JylcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2VKc29uID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2FwaS5jbGllbnQuc2V0QXBpS2V5KHJlc3BvbnNlSnNvbi5BUElfS0VZKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoZ2FwaS5jbGllbnQubG9hZChcImh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2Rpc2NvdmVyeS92MS9hcGlzL3lvdXR1YmUvdjMvcmVzdFwiLCBcInYzXCIpKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBTb25nIH0gZnJvbSBcIi4uL21vZGVscy9zb25nXCI7XHJcbmltcG9ydCB7IFN0b3JhZ2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9zdG9yYWdlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBQbGF5bGlzdCB7XHJcbiAgICBzdGF0aWMgQVBJX1BBVEggPSAnaHR0cDovL2xvY2FsaG9zdDozMDAwLyc7XHJcblxyXG4gICAgc3RhdGljIHNhdmVQbGF5bGlzdChuYW1lOiBTdHJpbmcsIHNvbmdzOiBBcnJheTxTdHJpbmc+KTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gZmV0Y2godGhpcy5BUElfUEFUSCArICdwbGF5bGlzdC9jcmVhdGUvJyArIG5hbWUsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIG1vZGU6ICdjb3JzJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICAnc29uZ3MnOiBzb25nc1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHNhdmVTb25nKHNvbmc6IFNvbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIHJldHVybiBmZXRjaCh0aGlzLkFQSV9QQVRIICsgJ3Nvbmcvc2F2ZScsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIG1vZGU6ICdjb3JzJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICBpZDogc29uZy5nZXRJZCgpLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IHNvbmcuZ2V0VGl0bGUoKSxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBzb25nLmdldERlc2NyaXB0aW9uKCksXHJcbiAgICAgICAgICAgICAgICBhcnRpc3ROYW1lOiBzb25nLmdldEFydGlzdE5hbWUoKSxcclxuICAgICAgICAgICAgICAgIHRodW1ibmFpbDogc29uZy5nZXRUaHVtYm5haWwoKSxcclxuICAgICAgICAgICAgICAgIHZpZGVvSWQ6IHNvbmcuZ2V0VmlkZW9JZCgpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0U29uZyhpZDogU3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gZmV0Y2godGhpcy5BUElfUEFUSCArICdzb25nLycgKyBpZClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBhZGRTb25nVG9QbGF5bGlzdChpZDogU3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICBjb25zdCBwbGF5bGlzdElkID0gU3RvcmFnZS5nZXQoJ0NVUlJFTlRfUExBWUxJU1RfSUQnKTtcclxuICAgICAgICBpZiAocGxheWxpc3RJZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmV0Y2godGhpcy5BUElfUEFUSCArICdwbGF5bGlzdC8nICsgcGxheWxpc3RJZCArICcvYWRkJywge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBtb2RlOiAnY29ycycsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgICAgICAnc29uZ3MnOiBbaWRdXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoJ1BsYXlsaXN0IG5vdCB5ZXQgc2F2ZWQnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHJlbW92ZVNvbmdGcm9tUGxheWxpc3QoaWQ6IFN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgY29uc3QgcGxheWxpc3RJZCA9IFN0b3JhZ2UuZ2V0KCdDVVJSRU5UX1BMQVlMSVNUX0lEJyk7XHJcbiAgICAgICAgaWYgKHBsYXlsaXN0SWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZldGNoKHRoaXMuQVBJX1BBVEggKyAncGxheWxpc3QvJyArIHBsYXlsaXN0SWQgKyAnL3JlbW92ZS8nICsgaWQsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ0RFTEVURScsXHJcbiAgICAgICAgICAgICAgICBtb2RlOiAnY29ycycsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoJ1BsYXlsaXN0IG5vdCB5ZXQgc2F2ZWQnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBHb29nbGVBdXRoZW50aWNhdGlvbiB9IGZyb20gJy4vZ29vZ2xlLWF1dGhlbnRpY2F0aW9uJztcclxuaW1wb3J0IHsgU29uZyB9IGZyb20gJy4uL21vZGVscy9zb25nJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTZWFyY2gge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgTUFYX1JFU1VMVFMgPSAxO1xyXG5cclxuICAgIHN0YXRpYyB5b3VUdWJlU2VhcmNoKHE6IHN0cmluZywgcGFydD86IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgZ2FwaS5sb2FkKCdjbGllbnQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgICAgIGlmICghZ2FwaS5jbGllbnQueW91dHViZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIEdvb2dsZUF1dGhlbnRpY2F0aW9uLmxvYWRDbGllbnQoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFNlYXJjaC5fc2VhcmNoKHEsIHBhcnQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2U6IEFycmF5PFNvbmc+KSA9PiByZXNvbHZlKFNlYXJjaC5fcHJvY2Vzc1lvdXR1YmVSZXNwb25zZShyZXNwb25zZSkpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pOyAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gU2VhcmNoLl9zZWFyY2gocSwgcGFydClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlOiBBcnJheTxTb25nPikgPT4gcmVzb2x2ZShTZWFyY2guX3Byb2Nlc3NZb3V0dWJlUmVzcG9uc2UocmVzcG9uc2UpKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc2VhcmNoKHE6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKCdodHRwOi8vcGxheWJhY2suaW86MzAwMC9zZWFyY2gvJyArIGVuY29kZVVSSUNvbXBvbmVudChxKSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZUpzb24gPT4gU2VhcmNoLl9wcm9jZXNzUmVzcG9uc2UocmVzcG9uc2VKc29uKSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX3NlYXJjaChxOiBzdHJpbmcsIHBhcnQ/OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICByZXR1cm4gZ2FwaS5jbGllbnQueW91dHViZS5zZWFyY2gubGlzdCh7XHJcbiAgICAgICAgICAgIHBhcnQ6IHBhcnQgPyBwYXJ0IDogJ3NuaXBwZXQnLFxyXG4gICAgICAgICAgICBxOiBxLFxyXG4gICAgICAgICAgICB0eXBlOiAndmlkZW8nLFxyXG4gICAgICAgICAgICBtYXhSZXN1bHRzOiBTZWFyY2guTUFYX1JFU1VMVFNcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9wcm9jZXNzWW91dHViZVJlc3BvbnNlKHJlc3BvbnNlOiBhbnkpOiBTdHJpbmcge1xyXG4gICAgICAgIGxldCBzb25nSWQgPSAnJztcclxuICAgICAgICBpZiAocmVzcG9uc2UgJiYgcmVzcG9uc2UucmVzdWx0ICYmIHJlc3BvbnNlLnJlc3VsdC5pdGVtcykge1xyXG4gICAgICAgICAgICBzb25nSWQgPSByZXNwb25zZS5yZXN1bHQuaXRlbXNbMF0uaWQudmlkZW9JZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHNvbmdJZDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX3Byb2Nlc3NSZXNwb25zZShyZXNwb25zZTogYW55KTogT2JqZWN0IHtcclxuICAgICAgICBsZXQgcHJvY2Vzc2VkUmVzcG9uc2UgPSBuZXcgQXJyYXk8U29uZz4oKTtcclxuXHJcbiAgICAgICAgaWYgKCFyZXNwb25zZSB8fCAhcmVzcG9uc2UucmVzdWx0cykge1xyXG4gICAgICAgICAgICByZXR1cm4ge307XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGl0ZW0gb2YgcmVzcG9uc2UucmVzdWx0cykge1xyXG4gICAgICAgICAgICBsZXQgdGh1bWJuYWlsID0gaXRlbS5hcnR3b3JrVXJsMTAwID8gaXRlbS5hcnR3b3JrVXJsMTAwIDpcclxuICAgICAgICAgICAgICAgIChpdGVtLmFydHdvcmtVcmw2MCA/IGl0ZW0uYXJ0d29ya1VybDYwIDogKGl0ZW0uYXJ0d29ya1VybDMwID8gaXRlbS5hcnR3b3JrVXJsMzAgOiAnJykpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgcmVzT2JqID0gbmV3IFNvbmcoaXRlbS50cmFja0lkLCBpdGVtLnRyYWNrTmFtZSwgaXRlbS5jb2xsZWN0aW9uTmFtZSwgaXRlbS5hcnRpc3ROYW1lLFxyXG4gICAgICAgICAgICAgICAgdGh1bWJuYWlsKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHByb2Nlc3NlZFJlc3BvbnNlLnB1c2gocmVzT2JqKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLyogaWYgKCFyZXNwb25zZSB8fCByZXNwb25zZS5zdGF0dXMgIT09IDIwMCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge307XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyZXNwb25zZS5yZXN1bHQuaXRlbXMgJiYgcmVzcG9uc2UucmVzdWx0Lml0ZW1zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaXRlbSBvZiByZXNwb25zZS5yZXN1bHQuaXRlbXMpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0cnVlIHx8IGl0ZW0uc25pcHBldC5jaGFubmVsVGl0bGUudG9Mb3dlckNhc2UoKS5pbmRleE9mKCd2ZXZvJykgPiAtMSB8fCBpdGVtLnNuaXBwZXQuY2hhbm5lbFRpdGxlLnRvTG93ZXJDYXNlKCkuaW5kZXhPZignb2ZmaWNpYWwnKSA+IC0xXHJcbiAgICAgICAgICAgICAgICAgICAgfHwgaXRlbS5zbmlwcGV0LnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5kZXhPZignb2ZmaWNpYWwnKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRodW1ibmFpbCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLnNuaXBwZXQudGh1bWJuYWlscy5oaWdoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRodW1ibmFpbCA9IGl0ZW0uc25pcHBldC50aHVtYm5haWxzLmhpZ2gudXJsOyBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoaXRlbS5zbmlwcGV0LnRodW1ibmFpbHMubWVkaXVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRodW1ibmFpbCA9IGl0ZW0uc25pcHBldC50aHVtYm5haWxzLm1lZGl1bS51cmw7IFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGh1bWJuYWlsID0gaXRlbS5zbmlwcGV0LnRodW1ibmFpbHMuZGVmYXVsdC51cmw7IFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzT2JqID0gbmV3IFNvbmcoaXRlbS5pZC52aWRlb0lkLCBpdGVtLnNuaXBwZXQudGl0bGUsIGl0ZW0uc25pcHBldC5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGh1bWJuYWlsKTtcclxuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzZWRSZXNwb25zZS5wdXNoKHJlc09iaik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgfSovXHJcbiAgICAgICAgcmV0dXJuIHByb2Nlc3NlZFJlc3BvbnNlO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNvbnN0IGVudW0gU1RPUkFHRSB7XHJcbiAgICBMT0NBTF9TVE9SQUdFLFxyXG4gICAgU0VTU0lPTl9TVE9SQUdFXHJcbn1cclxuZXhwb3J0IGNsYXNzIFN0b3JhZ2Uge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgREVGQVVMVF9TVE9SQUdFOiBTVE9SQUdFID0gU1RPUkFHRS5MT0NBTF9TVE9SQUdFO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgc3RvcmFnZUhhbmRsZXIgPSB3aW5kb3cubG9jYWxTdG9yYWdlO1xyXG5cclxuICAgIHN0YXRpYyBzYXZlKGtleTogc3RyaW5nLCB2YWx1ZTogYW55LCBzdG9yYWdlPzogU1RPUkFHRSk6IHZvaWQge1xyXG4gICAgICAgIGlmIChzdG9yYWdlICYmIHN0b3JhZ2UgIT09IFN0b3JhZ2UuREVGQVVMVF9TVE9SQUdFKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIFN0b3JhZ2Uuc3RvcmFnZUhhbmRsZXIuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQoa2V5OiBzdHJpbmcsIHN0b3JhZ2U/OiBTVE9SQUdFKTogYW55IHtcclxuICAgICAgICBpZiAoc3RvcmFnZSAmJiBzdG9yYWdlICE9PSBTdG9yYWdlLkRFRkFVTFRfU1RPUkFHRSkge1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5nZXRJdGVtKGtleSk7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZSA/IEpTT04ucGFyc2UodmFsdWUpOiB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBTdG9yYWdlLnN0b3JhZ2VIYW5kbGVyLmdldEl0ZW0oa2V5KTtcclxuICAgICAgICByZXR1cm4gdmFsdWUgPyBKU09OLnBhcnNlKHZhbHVlKSA6IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBkZWxldGUoa2V5OiBzdHJpbmcsIHN0b3JhZ2U/OiBTVE9SQUdFKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHN0b3JhZ2UgJiYgc3RvcmFnZSAhPT0gU3RvcmFnZS5ERUZBVUxUX1NUT1JBR0UpIHtcclxuICAgICAgICAgICAgd2luZG93LnNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgU3RvcmFnZS5zdG9yYWdlSGFuZGxlci5yZW1vdmVJdGVtKGtleSk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgVXRpbHMge1xyXG4gICAgc3RhdGljIGZvcm1hdFRpbWUodGltZTogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgICAgICB0aW1lID0gTWF0aC5mbG9vcih0aW1lKTtcclxuICAgICAgICBjb25zdCBtaW4gPSBNYXRoLmZsb29yKHRpbWUgLyA2MCk7XHJcbiAgICAgICAgY29uc3Qgc2VjID0gdGltZSAtIChtaW4gKiA2MCk7XHJcbiAgICAgICAgY29uc3QgbWluU3RyID0gbWluIDwgMTAgPyAnMCcgKyBtaW4gOiAnJyArIG1pbjtcclxuICAgICAgICBjb25zdCBzZWNTdHIgPSBzZWMgPCAxMCA/ICcwJyArIHNlYyA6ICcnICsgc2VjO1xyXG4gICAgICAgIHJldHVybiBtaW5TdHIgKyAnOicgKyBzZWNTdHI7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHJhbmRvbU51bWJlciA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCByYW5kb20gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoKCgxICsgTWF0aC5yYW5kb20oKSkgKiAweDEwMDAwKSB8IDApLnRvU3RyaW5nKDE2KS5zdWJzdHJpbmcoMSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gKHJhbmRvbSgpICsgJy0nICsgcmFuZG9tKCkpO1xyXG4gICAgfTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=