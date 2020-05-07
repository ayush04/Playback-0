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

Object.defineProperty(exports, "__esModule", { value: true });
const player_1 = __webpack_require__(/*! ./components/player */ "./src/client/components/player.ts");
const queue_1 = __webpack_require__(/*! ./components/queue */ "./src/client/components/queue.ts");
const google_authentication_1 = __webpack_require__(/*! ./services/google-authentication */ "./src/client/services/google-authentication.ts");
const search_1 = __webpack_require__(/*! ./services/search */ "./src/client/services/search.ts");
const song_1 = __webpack_require__(/*! ./models/song */ "./src/client/models/song.ts");
const event_1 = __webpack_require__(/*! ./services/event */ "./src/client/services/event.ts");
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
const mainContainerBlock = `
<div class="col-xs-6 col-sm-4 col-md-4 col-lg-3">
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
        <div class="p-2 text-center text-muted">
            {{title}}
        </div>
    </div>
</div>
`;
const navBlock = `
<li class="list-group-item no-border no-padder padder-h-sm queue-list" data-attribute={{id}}>
    <span class="float-left thumb-sm m-r m-t-xs">
        <img src="{{thumbnail}}" alt="..." class="r">
    </span>
    <div class="clear">
        <div><small>{{title}}</small></div>
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
                        const action = element.getAttribute('data-attribute-action');
                        if (id) {
                            const song = song_1.Song.getSongFromList(response, id);
                            if (song) {
                                if (action === 'play') {
                                    player.queueAndPlay(song);
                                }
                                else {
                                    queue_1.Queue.queue(song);
                                }
                                console.log(queue_1.Queue.getCurrentQueue());
                            }
                            else {
                                console.log('Invalid song ID : ', id);
                            }
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
            filledTemplate = filledTemplate.replace(/{{id}}/g, song.getId());
            playlist.innerHTML = (playlist === null || playlist === void 0 ? void 0 : playlist.innerHTML) + filledTemplate;
        }
        Array.from(document.getElementsByClassName('queue-list')).forEach(element => {
            element.addEventListener('click', (event) => {
                event.preventDefault();
                const id = element.getAttribute('data-attribute');
                if (id) {
                    player.playTrack(id);
                }
            });
        });
    }
};
event_1.AppEvent.listen('queue-updated', updateQueueListener);


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
class Player extends yt_player_1.default {
    constructor(domElID) {
        super(domElID);
        this.progress = null;
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
            queue_1.Queue.updateCurrentPlayingTrack(trackId);
        }
        if (!Player._currentTrackId) {
            let track = queue_1.Queue.next();
            if (track) {
                this.loadTrack(track.getId());
                Player._isPlaying = true;
                this.togglePlay();
                Player.player.play();
                /*if (this.progress) {
                    this.progress.start();
                }*/
            }
            else {
                console.log('No tracks to play');
            }
        }
        else {
            Player._isPlaying = true;
            this.togglePlay();
            Player.player.play();
            /*if (this.progress) {
                this.progress.start();
            }*/
        }
    }
    queueAndPlay(song) {
        queue_1.Queue.queue(song);
        if (Player._isPlaying) {
            this.pauseTrack();
        }
        this.loadTrack(song.getId());
        queue_1.Queue.updateCurrentPlayingTrack(song.getId());
        Player._isPlaying = true;
        this.togglePlay();
        Player.player.play();
        /*if (this.progress) {
            this.progress.start();
        }*/
    }
    pauseTrack() {
        Player._isPlaying = false;
        Player.player.pause();
        this.togglePlay();
        if (this.progress) {
            this.progress.stop();
        }
    }
    nextTrack() {
        var _a;
        this.pauseTrack();
        let nextTrack = queue_1.Queue.next();
        (_a = this.progress) === null || _a === void 0 ? void 0 : _a.reset();
        if (nextTrack) {
            this.loadTrack(nextTrack.getId());
            Player._isPlaying = true;
            this.togglePlay();
            Player.player.play();
        }
    }
    previousTrack() {
        var _a;
        this.pauseTrack();
        let previousTrack = queue_1.Queue.previous();
        (_a = this.progress) === null || _a === void 0 ? void 0 : _a.reset();
        if (previousTrack) {
            this.loadTrack(previousTrack.getId());
            Player._isPlaying = true;
            this.togglePlay();
            Player.player.play();
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
    registerEventHandlers() {
        var _a, _b, _c, _d;
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
        Player.player.on('playing', () => {
            this.updateTitle();
            if (!this.progress) {
                this.progress = progess_bar_1.ProgressBar.getInstance('progress-bar');
            }
            this.progress.setTime(Player.player.getDuration());
            this.progress.start();
        });
        Player.player.on('ended', () => {
            this.nextTrack();
        });
    }
}
exports.Player = Player;
/* export class Player {
    private static player: YT.Player;

    constructor(domElId: string, configObj: any) {
        
    }

    static getInstance(domElId: string): YT.Player {
        if (!Player.player) {
            const configObj = {
                height: '390',
                width: '640',
                events: {
                    //onReady: Player.onReady,
                    //onStateChange: Player.onStateChange
                }
            };
            Player.player = new YT.Player(domElId, configObj);
        }
        return Player.player;
    }

    loadTrack(videoId: string): void {
        Player.player.loadVideoById(videoId);
    }

    playTrack(): void {
        Player.player.playVideo();
    }

    pauseTrack(): void {
        Player.player.pauseVideo();
    }
    
} */
/* import YouTubePlayer from "yt-player";

export class Player {
    private static player: YouTubePlayer;

    static getInstance(domElId: string) : YouTubePlayer {
        if (!Player.player) {
            Player.player = new YouTubePlayer(domElId);
        }
        return Player.player;
    }
} */


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
const event_1 = __webpack_require__(/*! ../services/event */ "./src/client/services/event.ts");
class Queue {
    static queue(song) {
        Queue._queue.push(song);
        event_1.AppEvent.emit('queue-updated');
    }
    static dequeue() {
        event_1.AppEvent.emit('queue-updated');
        return Queue._queue.shift();
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
    static updateCurrentPlayingTrack(trackId) {
        Queue._currentTrack = Queue._queue.findIndex(song => song.getId() === trackId);
    }
}
exports.Queue = Queue;
Queue._queue = new Array();
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
    constructor(id, title, description, thumbnail) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.thumbnail = thumbnail;
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
    getThumbnail() {
        return this.thumbnail;
    }
    static getSongFromList(list, id) {
        const filteredList = list.filter(song => song.getId() === id);
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
                // @ts-ignore
                gapi.auth2.init({
                    client_id: '494615400262-f7m4usct7pth64lrmuc76vsccp76fu3c.apps.googleusercontent.com'
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
    }
    static loadClient() {
        return new Promise((resolve, reject) => {
            gapi.load('client', () => {
                gapi.client.setApiKey('AIzaSyDDvjBedrhLf0rt62ckhs2fwWxtELcYeU8');
                return resolve(gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest", "v3"));
            });
        });
    }
}
exports.GoogleAuthentication = GoogleAuthentication;
GoogleAuthentication._isAuthenticated = window.sessionStorage.getItem('google-authenticated') === 'true' ? true : false;


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
    static search(q, part) {
        return new Promise((resolve, reject) => {
            gapi.load('client', () => {
                //@ts-ignore
                if (!gapi.client.youtube) {
                    google_authentication_1.GoogleAuthentication.loadClient().then(() => {
                        return Search._search(q, part)
                            .then((response) => resolve(Search._processResponse(response)))
                            .catch((err) => {
                            console.log(err);
                            reject(err);
                        });
                    });
                }
                else {
                    return Search._search(q, part)
                        .then((response) => resolve(Search._processResponse(response)))
                        .catch((err) => {
                        console.log(err);
                        reject(err);
                    });
                }
            });
        });
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
    static _processResponse(response) {
        let processedResponse = new Array();
        if (!response || response.status !== 200) {
            return {};
        }
        if (response.result.items && response.result.items.length > 0) {
            for (let item of response.result.items) {
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
                const resObj = new song_1.Song(item.id.videoId, item.snippet.title, item.snippet.description, thumbnail);
                processedResponse.push(resObj);
            }
        }
        return processedResponse;
    }
}
exports.Search = Search;
Search.MAX_RESULTS = 12;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2V2ZW50cy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvYWQtc2NyaXB0Mi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMveXQtcGxheWVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvYXBwLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29tcG9uZW50cy9wbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb21wb25lbnRzL3Byb2dlc3MtYmFyLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29tcG9uZW50cy9xdWV1ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L21vZGVscy9zb25nLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvc2VydmljZXMvZXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9zZXJ2aWNlcy9nb29nbGUtYXV0aGVudGljYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9zZXJ2aWNlcy9zZWFyY2gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixzQkFBc0I7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsbUJBQW1CLFNBQVM7QUFDNUI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQSxpQ0FBaUMsUUFBUTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGlCQUFpQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLHNDQUFzQyxRQUFRO0FBQzlDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsT0FBTztBQUN4QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLHlCQUF5QjtBQUNqQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixnQkFBZ0I7QUFDakM7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzdiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1EQUFtRDtBQUNuRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5Q0FBeUMsSUFBSTtBQUM3Qzs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7QUN2QkEscUJBQXFCLG1CQUFPLENBQUMsK0NBQVE7QUFDckMsbUJBQW1CLG1CQUFPLENBQUMsMERBQWM7O0FBRXpDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFdBQVcscUJBQXFCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FB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QzNELEtBQUssSUFBSSxJQUFJLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7Z0JBRXBDLElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQztnQkFDbkIsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUU7b0JBQzlCLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO2lCQUNoRDtxQkFDSSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRTtvQkFDckMsU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7aUJBQ2xEO3FCQUNJO29CQUNELFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO2lCQUNuRDtnQkFFRCxNQUFNLE1BQU0sR0FBRyxJQUFJLFdBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFDakYsU0FBUyxDQUFDLENBQUM7Z0JBQ2YsaUJBQWlCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ2xDO1NBQ0o7UUFDRCxPQUFPLGlCQUFpQixDQUFDO0lBQzdCLENBQUM7O0FBbEVMLHdCQW1FQztBQWxFa0Isa0JBQVcsR0FBRyxFQUFFLENBQUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvY2xpZW50L2FwcC50c1wiKTtcbiIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSID0gdHlwZW9mIFJlZmxlY3QgPT09ICdvYmplY3QnID8gUmVmbGVjdCA6IG51bGxcbnZhciBSZWZsZWN0QXBwbHkgPSBSICYmIHR5cGVvZiBSLmFwcGx5ID09PSAnZnVuY3Rpb24nXG4gID8gUi5hcHBseVxuICA6IGZ1bmN0aW9uIFJlZmxlY3RBcHBseSh0YXJnZXQsIHJlY2VpdmVyLCBhcmdzKSB7XG4gICAgcmV0dXJuIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKHRhcmdldCwgcmVjZWl2ZXIsIGFyZ3MpO1xuICB9XG5cbnZhciBSZWZsZWN0T3duS2V5c1xuaWYgKFIgJiYgdHlwZW9mIFIub3duS2V5cyA9PT0gJ2Z1bmN0aW9uJykge1xuICBSZWZsZWN0T3duS2V5cyA9IFIub3duS2V5c1xufSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gIFJlZmxlY3RPd25LZXlzID0gZnVuY3Rpb24gUmVmbGVjdE93bktleXModGFyZ2V0KSB7XG4gICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRhcmdldClcbiAgICAgIC5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyh0YXJnZXQpKTtcbiAgfTtcbn0gZWxzZSB7XG4gIFJlZmxlY3RPd25LZXlzID0gZnVuY3Rpb24gUmVmbGVjdE93bktleXModGFyZ2V0KSB7XG4gICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRhcmdldCk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIFByb2Nlc3NFbWl0V2FybmluZyh3YXJuaW5nKSB7XG4gIGlmIChjb25zb2xlICYmIGNvbnNvbGUud2FybikgY29uc29sZS53YXJuKHdhcm5pbmcpO1xufVxuXG52YXIgTnVtYmVySXNOYU4gPSBOdW1iZXIuaXNOYU4gfHwgZnVuY3Rpb24gTnVtYmVySXNOYU4odmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9PSB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gRXZlbnRFbWl0dGVyKCkge1xuICBFdmVudEVtaXR0ZXIuaW5pdC5jYWxsKHRoaXMpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBFdmVudEVtaXR0ZXI7XG5cbi8vIEJhY2t3YXJkcy1jb21wYXQgd2l0aCBub2RlIDAuMTAueFxuRXZlbnRFbWl0dGVyLkV2ZW50RW1pdHRlciA9IEV2ZW50RW1pdHRlcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fZXZlbnRzID0gdW5kZWZpbmVkO1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fZXZlbnRzQ291bnQgPSAwO1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fbWF4TGlzdGVuZXJzID0gdW5kZWZpbmVkO1xuXG4vLyBCeSBkZWZhdWx0IEV2ZW50RW1pdHRlcnMgd2lsbCBwcmludCBhIHdhcm5pbmcgaWYgbW9yZSB0aGFuIDEwIGxpc3RlbmVycyBhcmVcbi8vIGFkZGVkIHRvIGl0LiBUaGlzIGlzIGEgdXNlZnVsIGRlZmF1bHQgd2hpY2ggaGVscHMgZmluZGluZyBtZW1vcnkgbGVha3MuXG52YXIgZGVmYXVsdE1heExpc3RlbmVycyA9IDEwO1xuXG5mdW5jdGlvbiBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKSB7XG4gIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgXCJsaXN0ZW5lclwiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBGdW5jdGlvbi4gUmVjZWl2ZWQgdHlwZSAnICsgdHlwZW9mIGxpc3RlbmVyKTtcbiAgfVxufVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoRXZlbnRFbWl0dGVyLCAnZGVmYXVsdE1heExpc3RlbmVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZGVmYXVsdE1heExpc3RlbmVycztcbiAgfSxcbiAgc2V0OiBmdW5jdGlvbihhcmcpIHtcbiAgICBpZiAodHlwZW9mIGFyZyAhPT0gJ251bWJlcicgfHwgYXJnIDwgMCB8fCBOdW1iZXJJc05hTihhcmcpKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVGhlIHZhbHVlIG9mIFwiZGVmYXVsdE1heExpc3RlbmVyc1wiIGlzIG91dCBvZiByYW5nZS4gSXQgbXVzdCBiZSBhIG5vbi1uZWdhdGl2ZSBudW1iZXIuIFJlY2VpdmVkICcgKyBhcmcgKyAnLicpO1xuICAgIH1cbiAgICBkZWZhdWx0TWF4TGlzdGVuZXJzID0gYXJnO1xuICB9XG59KTtcblxuRXZlbnRFbWl0dGVyLmluaXQgPSBmdW5jdGlvbigpIHtcblxuICBpZiAodGhpcy5fZXZlbnRzID09PSB1bmRlZmluZWQgfHxcbiAgICAgIHRoaXMuX2V2ZW50cyA9PT0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpLl9ldmVudHMpIHtcbiAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHRoaXMuX2V2ZW50c0NvdW50ID0gMDtcbiAgfVxuXG4gIHRoaXMuX21heExpc3RlbmVycyA9IHRoaXMuX21heExpc3RlbmVycyB8fCB1bmRlZmluZWQ7XG59O1xuXG4vLyBPYnZpb3VzbHkgbm90IGFsbCBFbWl0dGVycyBzaG91bGQgYmUgbGltaXRlZCB0byAxMC4gVGhpcyBmdW5jdGlvbiBhbGxvd3Ncbi8vIHRoYXQgdG8gYmUgaW5jcmVhc2VkLiBTZXQgdG8gemVybyBmb3IgdW5saW1pdGVkLlxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5zZXRNYXhMaXN0ZW5lcnMgPSBmdW5jdGlvbiBzZXRNYXhMaXN0ZW5lcnMobikge1xuICBpZiAodHlwZW9mIG4gIT09ICdudW1iZXInIHx8IG4gPCAwIHx8IE51bWJlcklzTmFOKG4pKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RoZSB2YWx1ZSBvZiBcIm5cIiBpcyBvdXQgb2YgcmFuZ2UuIEl0IG11c3QgYmUgYSBub24tbmVnYXRpdmUgbnVtYmVyLiBSZWNlaXZlZCAnICsgbiArICcuJyk7XG4gIH1cbiAgdGhpcy5fbWF4TGlzdGVuZXJzID0gbjtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5mdW5jdGlvbiBfZ2V0TWF4TGlzdGVuZXJzKHRoYXQpIHtcbiAgaWYgKHRoYXQuX21heExpc3RlbmVycyA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBFdmVudEVtaXR0ZXIuZGVmYXVsdE1heExpc3RlbmVycztcbiAgcmV0dXJuIHRoYXQuX21heExpc3RlbmVycztcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5nZXRNYXhMaXN0ZW5lcnMgPSBmdW5jdGlvbiBnZXRNYXhMaXN0ZW5lcnMoKSB7XG4gIHJldHVybiBfZ2V0TWF4TGlzdGVuZXJzKHRoaXMpO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24gZW1pdCh0eXBlKSB7XG4gIHZhciBhcmdzID0gW107XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSBhcmdzLnB1c2goYXJndW1lbnRzW2ldKTtcbiAgdmFyIGRvRXJyb3IgPSAodHlwZSA9PT0gJ2Vycm9yJyk7XG5cbiAgdmFyIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcbiAgaWYgKGV2ZW50cyAhPT0gdW5kZWZpbmVkKVxuICAgIGRvRXJyb3IgPSAoZG9FcnJvciAmJiBldmVudHMuZXJyb3IgPT09IHVuZGVmaW5lZCk7XG4gIGVsc2UgaWYgKCFkb0Vycm9yKVxuICAgIHJldHVybiBmYWxzZTtcblxuICAvLyBJZiB0aGVyZSBpcyBubyAnZXJyb3InIGV2ZW50IGxpc3RlbmVyIHRoZW4gdGhyb3cuXG4gIGlmIChkb0Vycm9yKSB7XG4gICAgdmFyIGVyO1xuICAgIGlmIChhcmdzLmxlbmd0aCA+IDApXG4gICAgICBlciA9IGFyZ3NbMF07XG4gICAgaWYgKGVyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgIC8vIE5vdGU6IFRoZSBjb21tZW50cyBvbiB0aGUgYHRocm93YCBsaW5lcyBhcmUgaW50ZW50aW9uYWwsIHRoZXkgc2hvd1xuICAgICAgLy8gdXAgaW4gTm9kZSdzIG91dHB1dCBpZiB0aGlzIHJlc3VsdHMgaW4gYW4gdW5oYW5kbGVkIGV4Y2VwdGlvbi5cbiAgICAgIHRocm93IGVyOyAvLyBVbmhhbmRsZWQgJ2Vycm9yJyBldmVudFxuICAgIH1cbiAgICAvLyBBdCBsZWFzdCBnaXZlIHNvbWUga2luZCBvZiBjb250ZXh0IHRvIHRoZSB1c2VyXG4gICAgdmFyIGVyciA9IG5ldyBFcnJvcignVW5oYW5kbGVkIGVycm9yLicgKyAoZXIgPyAnICgnICsgZXIubWVzc2FnZSArICcpJyA6ICcnKSk7XG4gICAgZXJyLmNvbnRleHQgPSBlcjtcbiAgICB0aHJvdyBlcnI7IC8vIFVuaGFuZGxlZCAnZXJyb3InIGV2ZW50XG4gIH1cblxuICB2YXIgaGFuZGxlciA9IGV2ZW50c1t0eXBlXTtcblxuICBpZiAoaGFuZGxlciA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBmYWxzZTtcblxuICBpZiAodHlwZW9mIGhhbmRsZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICBSZWZsZWN0QXBwbHkoaGFuZGxlciwgdGhpcywgYXJncyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGxlbiA9IGhhbmRsZXIubGVuZ3RoO1xuICAgIHZhciBsaXN0ZW5lcnMgPSBhcnJheUNsb25lKGhhbmRsZXIsIGxlbik7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47ICsraSlcbiAgICAgIFJlZmxlY3RBcHBseShsaXN0ZW5lcnNbaV0sIHRoaXMsIGFyZ3MpO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5mdW5jdGlvbiBfYWRkTGlzdGVuZXIodGFyZ2V0LCB0eXBlLCBsaXN0ZW5lciwgcHJlcGVuZCkge1xuICB2YXIgbTtcbiAgdmFyIGV2ZW50cztcbiAgdmFyIGV4aXN0aW5nO1xuXG4gIGNoZWNrTGlzdGVuZXIobGlzdGVuZXIpO1xuXG4gIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzO1xuICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpIHtcbiAgICBldmVudHMgPSB0YXJnZXQuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgdGFyZ2V0Ll9ldmVudHNDb3VudCA9IDA7XG4gIH0gZWxzZSB7XG4gICAgLy8gVG8gYXZvaWQgcmVjdXJzaW9uIGluIHRoZSBjYXNlIHRoYXQgdHlwZSA9PT0gXCJuZXdMaXN0ZW5lclwiISBCZWZvcmVcbiAgICAvLyBhZGRpbmcgaXQgdG8gdGhlIGxpc3RlbmVycywgZmlyc3QgZW1pdCBcIm5ld0xpc3RlbmVyXCIuXG4gICAgaWYgKGV2ZW50cy5uZXdMaXN0ZW5lciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0YXJnZXQuZW1pdCgnbmV3TGlzdGVuZXInLCB0eXBlLFxuICAgICAgICAgICAgICAgICAgbGlzdGVuZXIubGlzdGVuZXIgPyBsaXN0ZW5lci5saXN0ZW5lciA6IGxpc3RlbmVyKTtcblxuICAgICAgLy8gUmUtYXNzaWduIGBldmVudHNgIGJlY2F1c2UgYSBuZXdMaXN0ZW5lciBoYW5kbGVyIGNvdWxkIGhhdmUgY2F1c2VkIHRoZVxuICAgICAgLy8gdGhpcy5fZXZlbnRzIHRvIGJlIGFzc2lnbmVkIHRvIGEgbmV3IG9iamVjdFxuICAgICAgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHM7XG4gICAgfVxuICAgIGV4aXN0aW5nID0gZXZlbnRzW3R5cGVdO1xuICB9XG5cbiAgaWYgKGV4aXN0aW5nID09PSB1bmRlZmluZWQpIHtcbiAgICAvLyBPcHRpbWl6ZSB0aGUgY2FzZSBvZiBvbmUgbGlzdGVuZXIuIERvbid0IG5lZWQgdGhlIGV4dHJhIGFycmF5IG9iamVjdC5cbiAgICBleGlzdGluZyA9IGV2ZW50c1t0eXBlXSA9IGxpc3RlbmVyO1xuICAgICsrdGFyZ2V0Ll9ldmVudHNDb3VudDtcbiAgfSBlbHNlIHtcbiAgICBpZiAodHlwZW9mIGV4aXN0aW5nID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyBBZGRpbmcgdGhlIHNlY29uZCBlbGVtZW50LCBuZWVkIHRvIGNoYW5nZSB0byBhcnJheS5cbiAgICAgIGV4aXN0aW5nID0gZXZlbnRzW3R5cGVdID1cbiAgICAgICAgcHJlcGVuZCA/IFtsaXN0ZW5lciwgZXhpc3RpbmddIDogW2V4aXN0aW5nLCBsaXN0ZW5lcl07XG4gICAgICAvLyBJZiB3ZSd2ZSBhbHJlYWR5IGdvdCBhbiBhcnJheSwganVzdCBhcHBlbmQuXG4gICAgfSBlbHNlIGlmIChwcmVwZW5kKSB7XG4gICAgICBleGlzdGluZy51bnNoaWZ0KGxpc3RlbmVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXhpc3RpbmcucHVzaChsaXN0ZW5lcik7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgZm9yIGxpc3RlbmVyIGxlYWtcbiAgICBtID0gX2dldE1heExpc3RlbmVycyh0YXJnZXQpO1xuICAgIGlmIChtID4gMCAmJiBleGlzdGluZy5sZW5ndGggPiBtICYmICFleGlzdGluZy53YXJuZWQpIHtcbiAgICAgIGV4aXN0aW5nLndhcm5lZCA9IHRydWU7XG4gICAgICAvLyBObyBlcnJvciBjb2RlIGZvciB0aGlzIHNpbmNlIGl0IGlzIGEgV2FybmluZ1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG4gICAgICB2YXIgdyA9IG5ldyBFcnJvcignUG9zc2libGUgRXZlbnRFbWl0dGVyIG1lbW9yeSBsZWFrIGRldGVjdGVkLiAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmcubGVuZ3RoICsgJyAnICsgU3RyaW5nKHR5cGUpICsgJyBsaXN0ZW5lcnMgJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdhZGRlZC4gVXNlIGVtaXR0ZXIuc2V0TWF4TGlzdGVuZXJzKCkgdG8gJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdpbmNyZWFzZSBsaW1pdCcpO1xuICAgICAgdy5uYW1lID0gJ01heExpc3RlbmVyc0V4Y2VlZGVkV2FybmluZyc7XG4gICAgICB3LmVtaXR0ZXIgPSB0YXJnZXQ7XG4gICAgICB3LnR5cGUgPSB0eXBlO1xuICAgICAgdy5jb3VudCA9IGV4aXN0aW5nLmxlbmd0aDtcbiAgICAgIFByb2Nlc3NFbWl0V2FybmluZyh3KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyID0gZnVuY3Rpb24gYWRkTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgcmV0dXJuIF9hZGRMaXN0ZW5lcih0aGlzLCB0eXBlLCBsaXN0ZW5lciwgZmFsc2UpO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbiA9IEV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucHJlcGVuZExpc3RlbmVyID1cbiAgICBmdW5jdGlvbiBwcmVwZW5kTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgIHJldHVybiBfYWRkTGlzdGVuZXIodGhpcywgdHlwZSwgbGlzdGVuZXIsIHRydWUpO1xuICAgIH07XG5cbmZ1bmN0aW9uIG9uY2VXcmFwcGVyKCkge1xuICBpZiAoIXRoaXMuZmlyZWQpIHtcbiAgICB0aGlzLnRhcmdldC5yZW1vdmVMaXN0ZW5lcih0aGlzLnR5cGUsIHRoaXMud3JhcEZuKTtcbiAgICB0aGlzLmZpcmVkID0gdHJ1ZTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMClcbiAgICAgIHJldHVybiB0aGlzLmxpc3RlbmVyLmNhbGwodGhpcy50YXJnZXQpO1xuICAgIHJldHVybiB0aGlzLmxpc3RlbmVyLmFwcGx5KHRoaXMudGFyZ2V0LCBhcmd1bWVudHMpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9vbmNlV3JhcCh0YXJnZXQsIHR5cGUsIGxpc3RlbmVyKSB7XG4gIHZhciBzdGF0ZSA9IHsgZmlyZWQ6IGZhbHNlLCB3cmFwRm46IHVuZGVmaW5lZCwgdGFyZ2V0OiB0YXJnZXQsIHR5cGU6IHR5cGUsIGxpc3RlbmVyOiBsaXN0ZW5lciB9O1xuICB2YXIgd3JhcHBlZCA9IG9uY2VXcmFwcGVyLmJpbmQoc3RhdGUpO1xuICB3cmFwcGVkLmxpc3RlbmVyID0gbGlzdGVuZXI7XG4gIHN0YXRlLndyYXBGbiA9IHdyYXBwZWQ7XG4gIHJldHVybiB3cmFwcGVkO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbiBvbmNlKHR5cGUsIGxpc3RlbmVyKSB7XG4gIGNoZWNrTGlzdGVuZXIobGlzdGVuZXIpO1xuICB0aGlzLm9uKHR5cGUsIF9vbmNlV3JhcCh0aGlzLCB0eXBlLCBsaXN0ZW5lcikpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucHJlcGVuZE9uY2VMaXN0ZW5lciA9XG4gICAgZnVuY3Rpb24gcHJlcGVuZE9uY2VMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICAgICAgY2hlY2tMaXN0ZW5lcihsaXN0ZW5lcik7XG4gICAgICB0aGlzLnByZXBlbmRMaXN0ZW5lcih0eXBlLCBfb25jZVdyYXAodGhpcywgdHlwZSwgbGlzdGVuZXIpKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbi8vIEVtaXRzIGEgJ3JlbW92ZUxpc3RlbmVyJyBldmVudCBpZiBhbmQgb25seSBpZiB0aGUgbGlzdGVuZXIgd2FzIHJlbW92ZWQuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID1cbiAgICBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICAgICAgdmFyIGxpc3QsIGV2ZW50cywgcG9zaXRpb24sIGksIG9yaWdpbmFsTGlzdGVuZXI7XG5cbiAgICAgIGNoZWNrTGlzdGVuZXIobGlzdGVuZXIpO1xuXG4gICAgICBldmVudHMgPSB0aGlzLl9ldmVudHM7XG4gICAgICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICBsaXN0ID0gZXZlbnRzW3R5cGVdO1xuICAgICAgaWYgKGxpc3QgPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgIGlmIChsaXN0ID09PSBsaXN0ZW5lciB8fCBsaXN0Lmxpc3RlbmVyID09PSBsaXN0ZW5lcikge1xuICAgICAgICBpZiAoLS10aGlzLl9ldmVudHNDb3VudCA9PT0gMClcbiAgICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBkZWxldGUgZXZlbnRzW3R5cGVdO1xuICAgICAgICAgIGlmIChldmVudHMucmVtb3ZlTGlzdGVuZXIpXG4gICAgICAgICAgICB0aGlzLmVtaXQoJ3JlbW92ZUxpc3RlbmVyJywgdHlwZSwgbGlzdC5saXN0ZW5lciB8fCBsaXN0ZW5lcik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGxpc3QgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcG9zaXRpb24gPSAtMTtcblxuICAgICAgICBmb3IgKGkgPSBsaXN0Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgaWYgKGxpc3RbaV0gPT09IGxpc3RlbmVyIHx8IGxpc3RbaV0ubGlzdGVuZXIgPT09IGxpc3RlbmVyKSB7XG4gICAgICAgICAgICBvcmlnaW5hbExpc3RlbmVyID0gbGlzdFtpXS5saXN0ZW5lcjtcbiAgICAgICAgICAgIHBvc2l0aW9uID0gaTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwb3NpdGlvbiA8IDApXG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgICAgaWYgKHBvc2l0aW9uID09PSAwKVxuICAgICAgICAgIGxpc3Quc2hpZnQoKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgc3BsaWNlT25lKGxpc3QsIHBvc2l0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChsaXN0Lmxlbmd0aCA9PT0gMSlcbiAgICAgICAgICBldmVudHNbdHlwZV0gPSBsaXN0WzBdO1xuXG4gICAgICAgIGlmIChldmVudHMucmVtb3ZlTGlzdGVuZXIgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICB0aGlzLmVtaXQoJ3JlbW92ZUxpc3RlbmVyJywgdHlwZSwgb3JpZ2luYWxMaXN0ZW5lciB8fCBsaXN0ZW5lcik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub2ZmID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVBbGxMaXN0ZW5lcnMgPVxuICAgIGZ1bmN0aW9uIHJlbW92ZUFsbExpc3RlbmVycyh0eXBlKSB7XG4gICAgICB2YXIgbGlzdGVuZXJzLCBldmVudHMsIGk7XG5cbiAgICAgIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcbiAgICAgIGlmIChldmVudHMgPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgIC8vIG5vdCBsaXN0ZW5pbmcgZm9yIHJlbW92ZUxpc3RlbmVyLCBubyBuZWVkIHRvIGVtaXRcbiAgICAgIGlmIChldmVudHMucmVtb3ZlTGlzdGVuZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgICAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50c1t0eXBlXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgaWYgKC0tdGhpcy5fZXZlbnRzQ291bnQgPT09IDApXG4gICAgICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIGRlbGV0ZSBldmVudHNbdHlwZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIC8vIGVtaXQgcmVtb3ZlTGlzdGVuZXIgZm9yIGFsbCBsaXN0ZW5lcnMgb24gYWxsIGV2ZW50c1xuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhldmVudHMpO1xuICAgICAgICB2YXIga2V5O1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgIGtleSA9IGtleXNbaV07XG4gICAgICAgICAgaWYgKGtleSA9PT0gJ3JlbW92ZUxpc3RlbmVyJykgY29udGludWU7XG4gICAgICAgICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoa2V5KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycygncmVtb3ZlTGlzdGVuZXInKTtcbiAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgbGlzdGVuZXJzID0gZXZlbnRzW3R5cGVdO1xuXG4gICAgICBpZiAodHlwZW9mIGxpc3RlbmVycyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVycyk7XG4gICAgICB9IGVsc2UgaWYgKGxpc3RlbmVycyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vIExJRk8gb3JkZXJcbiAgICAgICAgZm9yIChpID0gbGlzdGVuZXJzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcnNbaV0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbmZ1bmN0aW9uIF9saXN0ZW5lcnModGFyZ2V0LCB0eXBlLCB1bndyYXApIHtcbiAgdmFyIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzO1xuXG4gIGlmIChldmVudHMgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gW107XG5cbiAgdmFyIGV2bGlzdGVuZXIgPSBldmVudHNbdHlwZV07XG4gIGlmIChldmxpc3RlbmVyID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIFtdO1xuXG4gIGlmICh0eXBlb2YgZXZsaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJylcbiAgICByZXR1cm4gdW53cmFwID8gW2V2bGlzdGVuZXIubGlzdGVuZXIgfHwgZXZsaXN0ZW5lcl0gOiBbZXZsaXN0ZW5lcl07XG5cbiAgcmV0dXJuIHVud3JhcCA/XG4gICAgdW53cmFwTGlzdGVuZXJzKGV2bGlzdGVuZXIpIDogYXJyYXlDbG9uZShldmxpc3RlbmVyLCBldmxpc3RlbmVyLmxlbmd0aCk7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJzID0gZnVuY3Rpb24gbGlzdGVuZXJzKHR5cGUpIHtcbiAgcmV0dXJuIF9saXN0ZW5lcnModGhpcywgdHlwZSwgdHJ1ZSk7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJhd0xpc3RlbmVycyA9IGZ1bmN0aW9uIHJhd0xpc3RlbmVycyh0eXBlKSB7XG4gIHJldHVybiBfbGlzdGVuZXJzKHRoaXMsIHR5cGUsIGZhbHNlKTtcbn07XG5cbkV2ZW50RW1pdHRlci5saXN0ZW5lckNvdW50ID0gZnVuY3Rpb24oZW1pdHRlciwgdHlwZSkge1xuICBpZiAodHlwZW9mIGVtaXR0ZXIubGlzdGVuZXJDb3VudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBlbWl0dGVyLmxpc3RlbmVyQ291bnQodHlwZSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGxpc3RlbmVyQ291bnQuY2FsbChlbWl0dGVyLCB0eXBlKTtcbiAgfVxufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lckNvdW50ID0gbGlzdGVuZXJDb3VudDtcbmZ1bmN0aW9uIGxpc3RlbmVyQ291bnQodHlwZSkge1xuICB2YXIgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuXG4gIGlmIChldmVudHMgIT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBldmxpc3RlbmVyID0gZXZlbnRzW3R5cGVdO1xuXG4gICAgaWYgKHR5cGVvZiBldmxpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9IGVsc2UgaWYgKGV2bGlzdGVuZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGV2bGlzdGVuZXIubGVuZ3RoO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAwO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmV2ZW50TmFtZXMgPSBmdW5jdGlvbiBldmVudE5hbWVzKCkge1xuICByZXR1cm4gdGhpcy5fZXZlbnRzQ291bnQgPiAwID8gUmVmbGVjdE93bktleXModGhpcy5fZXZlbnRzKSA6IFtdO1xufTtcblxuZnVuY3Rpb24gYXJyYXlDbG9uZShhcnIsIG4pIHtcbiAgdmFyIGNvcHkgPSBuZXcgQXJyYXkobik7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbjsgKytpKVxuICAgIGNvcHlbaV0gPSBhcnJbaV07XG4gIHJldHVybiBjb3B5O1xufVxuXG5mdW5jdGlvbiBzcGxpY2VPbmUobGlzdCwgaW5kZXgpIHtcbiAgZm9yICg7IGluZGV4ICsgMSA8IGxpc3QubGVuZ3RoOyBpbmRleCsrKVxuICAgIGxpc3RbaW5kZXhdID0gbGlzdFtpbmRleCArIDFdO1xuICBsaXN0LnBvcCgpO1xufVxuXG5mdW5jdGlvbiB1bndyYXBMaXN0ZW5lcnMoYXJyKSB7XG4gIHZhciByZXQgPSBuZXcgQXJyYXkoYXJyLmxlbmd0aCk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcmV0Lmxlbmd0aDsgKytpKSB7XG4gICAgcmV0W2ldID0gYXJyW2ldLmxpc3RlbmVyIHx8IGFycltpXTtcbiAgfVxuICByZXR1cm4gcmV0O1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBsb2FkU2NyaXB0MiAoc3JjLCBhdHRycywgcGFyZW50Tm9kZSkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpXG4gICAgc2NyaXB0LmFzeW5jID0gdHJ1ZVxuICAgIHNjcmlwdC5zcmMgPSBzcmNcblxuICAgIGZvciAoY29uc3QgW2ssIHZdIG9mIE9iamVjdC5lbnRyaWVzKGF0dHJzIHx8IHt9KSkge1xuICAgICAgc2NyaXB0LnNldEF0dHJpYnV0ZShrLCB2KVxuICAgIH1cblxuICAgIHNjcmlwdC5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICBzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBudWxsXG4gICAgICByZXNvbHZlKHNjcmlwdClcbiAgICB9XG5cbiAgICBzY3JpcHQub25lcnJvciA9ICgpID0+IHtcbiAgICAgIHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG51bGxcbiAgICAgIHJlamVjdChuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkICR7c3JjfWApKVxuICAgIH1cblxuICAgIGNvbnN0IG5vZGUgPSBwYXJlbnROb2RlIHx8IGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXVxuICAgIG5vZGUuYXBwZW5kQ2hpbGQoc2NyaXB0KVxuICB9KVxufVxuIiwiY29uc3QgRXZlbnRFbWl0dGVyID0gcmVxdWlyZSgnZXZlbnRzJykuRXZlbnRFbWl0dGVyXG5jb25zdCBsb2FkU2NyaXB0ID0gcmVxdWlyZSgnbG9hZC1zY3JpcHQyJylcblxuY29uc3QgWU9VVFVCRV9JRlJBTUVfQVBJX1NSQyA9ICdodHRwczovL3d3dy55b3V0dWJlLmNvbS9pZnJhbWVfYXBpJ1xuXG5jb25zdCBZT1VUVUJFX1NUQVRFUyA9IHtcbiAgJy0xJzogJ3Vuc3RhcnRlZCcsXG4gIDA6ICdlbmRlZCcsXG4gIDE6ICdwbGF5aW5nJyxcbiAgMjogJ3BhdXNlZCcsXG4gIDM6ICdidWZmZXJpbmcnLFxuICA1OiAnY3VlZCdcbn1cblxuY29uc3QgWU9VVFVCRV9FUlJPUiA9IHtcbiAgLy8gVGhlIHJlcXVlc3QgY29udGFpbnMgYW4gaW52YWxpZCBwYXJhbWV0ZXIgdmFsdWUuIEZvciBleGFtcGxlLCB0aGlzIGVycm9yXG4gIC8vIG9jY3VycyBpZiB5b3Ugc3BlY2lmeSBhIHZpZGVvSWQgdGhhdCBkb2VzIG5vdCBoYXZlIDExIGNoYXJhY3RlcnMsIG9yIGlmIHRoZVxuICAvLyB2aWRlb0lkIGNvbnRhaW5zIGludmFsaWQgY2hhcmFjdGVycywgc3VjaCBhcyBleGNsYW1hdGlvbiBwb2ludHMgb3IgYXN0ZXJpc2tzLlxuICBJTlZBTElEX1BBUkFNOiAyLFxuXG4gIC8vIFRoZSByZXF1ZXN0ZWQgY29udGVudCBjYW5ub3QgYmUgcGxheWVkIGluIGFuIEhUTUw1IHBsYXllciBvciBhbm90aGVyIGVycm9yXG4gIC8vIHJlbGF0ZWQgdG8gdGhlIEhUTUw1IHBsYXllciBoYXMgb2NjdXJyZWQuXG4gIEhUTUw1X0VSUk9SOiA1LFxuXG4gIC8vIFRoZSB2aWRlbyByZXF1ZXN0ZWQgd2FzIG5vdCBmb3VuZC4gVGhpcyBlcnJvciBvY2N1cnMgd2hlbiBhIHZpZGVvIGhhcyBiZWVuXG4gIC8vIHJlbW92ZWQgKGZvciBhbnkgcmVhc29uKSBvciBoYXMgYmVlbiBtYXJrZWQgYXMgcHJpdmF0ZS5cbiAgTk9UX0ZPVU5EOiAxMDAsXG5cbiAgLy8gVGhlIG93bmVyIG9mIHRoZSByZXF1ZXN0ZWQgdmlkZW8gZG9lcyBub3QgYWxsb3cgaXQgdG8gYmUgcGxheWVkIGluIGVtYmVkZGVkXG4gIC8vIHBsYXllcnMuXG4gIFVOUExBWUFCTEVfMTogMTAxLFxuXG4gIC8vIFRoaXMgZXJyb3IgaXMgdGhlIHNhbWUgYXMgMTAxLiBJdCdzIGp1c3QgYSAxMDEgZXJyb3IgaW4gZGlzZ3Vpc2UhXG4gIFVOUExBWUFCTEVfMjogMTUwXG59XG5cbmNvbnN0IGxvYWRJZnJhbWVBUElDYWxsYmFja3MgPSBbXVxuXG4vKipcbiAqIFlvdVR1YmUgUGxheWVyLiBFeHBvc2VzIGEgYmV0dGVyIEFQSSwgd2l0aCBuaWNlciBldmVudHMuXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fHNlbGVjdG9yfSBlbGVtZW50XG4gKi9cbmNsYXNzIFlvdVR1YmVQbGF5ZXIgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAoZWxlbWVudCwgb3B0cykge1xuICAgIHN1cGVyKClcblxuICAgIGNvbnN0IGVsZW0gPSB0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZydcbiAgICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtZW50KVxuICAgICAgOiBlbGVtZW50XG5cbiAgICBpZiAoZWxlbS5pZCkge1xuICAgICAgdGhpcy5faWQgPSBlbGVtLmlkIC8vIHVzZSBleGlzdGluZyBlbGVtZW50IGlkXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2lkID0gZWxlbS5pZCA9ICd5dHBsYXllci0nICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygxNikuc2xpY2UoMiwgOClcbiAgICB9XG5cbiAgICB0aGlzLl9vcHRzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICB3aWR0aDogNjQwLFxuICAgICAgaGVpZ2h0OiAzNjAsXG4gICAgICBhdXRvcGxheTogZmFsc2UsXG4gICAgICBjYXB0aW9uczogdW5kZWZpbmVkLFxuICAgICAgY29udHJvbHM6IHRydWUsXG4gICAgICBrZXlib2FyZDogdHJ1ZSxcbiAgICAgIGZ1bGxzY3JlZW46IHRydWUsXG4gICAgICBhbm5vdGF0aW9uczogdHJ1ZSxcbiAgICAgIG1vZGVzdEJyYW5kaW5nOiBmYWxzZSxcbiAgICAgIHJlbGF0ZWQ6IHRydWUsXG4gICAgICB0aW1ldXBkYXRlRnJlcXVlbmN5OiAxMDAwLFxuICAgICAgcGxheXNJbmxpbmU6IHRydWVcbiAgICB9LCBvcHRzKVxuXG4gICAgdGhpcy52aWRlb0lkID0gbnVsbFxuICAgIHRoaXMuZGVzdHJveWVkID0gZmFsc2VcblxuICAgIHRoaXMuX2FwaSA9IG51bGxcbiAgICB0aGlzLl9hdXRvcGxheSA9IGZhbHNlIC8vIGF1dG9wbGF5IHRoZSBmaXJzdCB2aWRlbz9cbiAgICB0aGlzLl9wbGF5ZXIgPSBudWxsXG4gICAgdGhpcy5fcmVhZHkgPSBmYWxzZSAvLyBpcyBwbGF5ZXIgcmVhZHk/XG4gICAgdGhpcy5fcXVldWUgPSBbXVxuXG4gICAgdGhpcy5faW50ZXJ2YWwgPSBudWxsXG5cbiAgICAvLyBTZXR1cCBsaXN0ZW5lcnMgZm9yICd0aW1ldXBkYXRlJyBldmVudHMuIFRoZSBZb3VUdWJlIFBsYXllciBkb2VzIG5vdCBmaXJlXG4gICAgLy8gJ3RpbWV1cGRhdGUnIGV2ZW50cywgc28gdGhleSBhcmUgc2ltdWxhdGVkIHVzaW5nIGEgc2V0SW50ZXJ2YWwoKS5cbiAgICB0aGlzLl9zdGFydEludGVydmFsID0gdGhpcy5fc3RhcnRJbnRlcnZhbC5iaW5kKHRoaXMpXG4gICAgdGhpcy5fc3RvcEludGVydmFsID0gdGhpcy5fc3RvcEludGVydmFsLmJpbmQodGhpcylcblxuICAgIHRoaXMub24oJ3BsYXlpbmcnLCB0aGlzLl9zdGFydEludGVydmFsKVxuICAgIHRoaXMub24oJ3Vuc3RhcnRlZCcsIHRoaXMuX3N0b3BJbnRlcnZhbClcbiAgICB0aGlzLm9uKCdlbmRlZCcsIHRoaXMuX3N0b3BJbnRlcnZhbClcbiAgICB0aGlzLm9uKCdwYXVzZWQnLCB0aGlzLl9zdG9wSW50ZXJ2YWwpXG4gICAgdGhpcy5vbignYnVmZmVyaW5nJywgdGhpcy5fc3RvcEludGVydmFsKVxuXG4gICAgdGhpcy5fbG9hZElmcmFtZUFQSSgoZXJyLCBhcGkpID0+IHtcbiAgICAgIGlmIChlcnIpIHJldHVybiB0aGlzLl9kZXN0cm95KG5ldyBFcnJvcignWW91VHViZSBJZnJhbWUgQVBJIGZhaWxlZCB0byBsb2FkJykpXG4gICAgICB0aGlzLl9hcGkgPSBhcGlcblxuICAgICAgLy8gSWYgbG9hZCh2aWRlb0lkLCBbYXV0b3BsYXldKSB3YXMgY2FsbGVkIGJlZm9yZSBJZnJhbWUgQVBJIGxvYWRlZCwgZW5zdXJlIGl0IGdldHNcbiAgICAgIC8vIGNhbGxlZCBhZ2FpbiBub3dcbiAgICAgIGlmICh0aGlzLnZpZGVvSWQpIHRoaXMubG9hZCh0aGlzLnZpZGVvSWQsIHRoaXMuX2F1dG9wbGF5KVxuICAgIH0pXG4gIH1cblxuICBsb2FkICh2aWRlb0lkLCBhdXRvcGxheSA9IGZhbHNlKSB7XG4gICAgaWYgKHRoaXMuZGVzdHJveWVkKSByZXR1cm5cblxuICAgIHRoaXMudmlkZW9JZCA9IHZpZGVvSWRcbiAgICB0aGlzLl9hdXRvcGxheSA9IGF1dG9wbGF5XG5cbiAgICAvLyBJZiB0aGUgSWZyYW1lIEFQSSBpcyBub3QgcmVhZHkgeWV0LCBkbyBub3RoaW5nLiBPbmNlIHRoZSBJZnJhbWUgQVBJIGlzXG4gICAgLy8gcmVhZHksIGBsb2FkKHRoaXMudmlkZW9JZClgIHdpbGwgYmUgY2FsbGVkLlxuICAgIGlmICghdGhpcy5fYXBpKSByZXR1cm5cblxuICAgIC8vIElmIHRoZXJlIGlzIG5vIHBsYXllciBpbnN0YW5jZSwgY3JlYXRlIG9uZS5cbiAgICBpZiAoIXRoaXMuX3BsYXllcikge1xuICAgICAgdGhpcy5fY3JlYXRlUGxheWVyKHZpZGVvSWQpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgcGxheWVyIGluc3RhbmNlIGlzIG5vdCByZWFkeSB5ZXQsIGRvIG5vdGhpbmcuIE9uY2UgdGhlIHBsYXllclxuICAgIC8vIGluc3RhbmNlIGlzIHJlYWR5LCBgbG9hZCh0aGlzLnZpZGVvSWQpYCB3aWxsIGJlIGNhbGxlZC4gVGhpcyBlbnN1cmVzIHRoYXRcbiAgICAvLyB0aGUgbGFzdCBjYWxsIHRvIGBsb2FkKClgIGlzIHRoZSBvbmUgdGhhdCB0YWtlcyBlZmZlY3QuXG4gICAgaWYgKCF0aGlzLl9yZWFkeSkgcmV0dXJuXG5cbiAgICAvLyBJZiB0aGUgcGxheWVyIGluc3RhbmNlIGlzIHJlYWR5LCBsb2FkIHRoZSBnaXZlbiBgdmlkZW9JZGAuXG4gICAgaWYgKGF1dG9wbGF5KSB7XG4gICAgICB0aGlzLl9wbGF5ZXIubG9hZFZpZGVvQnlJZCh2aWRlb0lkKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9wbGF5ZXIuY3VlVmlkZW9CeUlkKHZpZGVvSWQpXG4gICAgfVxuICB9XG5cbiAgcGxheSAoKSB7XG4gICAgaWYgKHRoaXMuX3JlYWR5KSB0aGlzLl9wbGF5ZXIucGxheVZpZGVvKClcbiAgICBlbHNlIHRoaXMuX3F1ZXVlQ29tbWFuZCgncGxheScpXG4gIH1cblxuICBwYXVzZSAoKSB7XG4gICAgaWYgKHRoaXMuX3JlYWR5KSB0aGlzLl9wbGF5ZXIucGF1c2VWaWRlbygpXG4gICAgZWxzZSB0aGlzLl9xdWV1ZUNvbW1hbmQoJ3BhdXNlJylcbiAgfVxuXG4gIHN0b3AgKCkge1xuICAgIGlmICh0aGlzLl9yZWFkeSkgdGhpcy5fcGxheWVyLnN0b3BWaWRlbygpXG4gICAgZWxzZSB0aGlzLl9xdWV1ZUNvbW1hbmQoJ3N0b3AnKVxuICB9XG5cbiAgc2VlayAoc2Vjb25kcykge1xuICAgIGlmICh0aGlzLl9yZWFkeSkgdGhpcy5fcGxheWVyLnNlZWtUbyhzZWNvbmRzLCB0cnVlKVxuICAgIGVsc2UgdGhpcy5fcXVldWVDb21tYW5kKCdzZWVrJywgc2Vjb25kcylcbiAgfVxuXG4gIHNldFZvbHVtZSAodm9sdW1lKSB7XG4gICAgaWYgKHRoaXMuX3JlYWR5KSB0aGlzLl9wbGF5ZXIuc2V0Vm9sdW1lKHZvbHVtZSlcbiAgICBlbHNlIHRoaXMuX3F1ZXVlQ29tbWFuZCgnc2V0Vm9sdW1lJywgdm9sdW1lKVxuICB9XG5cbiAgZ2V0Vm9sdW1lICgpIHtcbiAgICByZXR1cm4gKHRoaXMuX3JlYWR5ICYmIHRoaXMuX3BsYXllci5nZXRWb2x1bWUoKSkgfHwgMFxuICB9XG5cbiAgbXV0ZSAoKSB7XG4gICAgaWYgKHRoaXMuX3JlYWR5KSB0aGlzLl9wbGF5ZXIubXV0ZSgpXG4gICAgZWxzZSB0aGlzLl9xdWV1ZUNvbW1hbmQoJ211dGUnKVxuICB9XG5cbiAgdW5NdXRlICgpIHtcbiAgICBpZiAodGhpcy5fcmVhZHkpIHRoaXMuX3BsYXllci51bk11dGUoKVxuICAgIGVsc2UgdGhpcy5fcXVldWVDb21tYW5kKCd1bk11dGUnKVxuICB9XG5cbiAgaXNNdXRlZCAoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9yZWFkeSAmJiB0aGlzLl9wbGF5ZXIuaXNNdXRlZCgpKSB8fCBmYWxzZVxuICB9XG5cbiAgc2V0U2l6ZSAod2lkdGgsIGhlaWdodCkge1xuICAgIGlmICh0aGlzLl9yZWFkeSkgdGhpcy5fcGxheWVyLnNldFNpemUod2lkdGgsIGhlaWdodClcbiAgICBlbHNlIHRoaXMuX3F1ZXVlQ29tbWFuZCgnc2V0U2l6ZScsIHdpZHRoLCBoZWlnaHQpXG4gIH1cblxuICBzZXRQbGF5YmFja1JhdGUgKHJhdGUpIHtcbiAgICBpZiAodGhpcy5fcmVhZHkpIHRoaXMuX3BsYXllci5zZXRQbGF5YmFja1JhdGUocmF0ZSlcbiAgICBlbHNlIHRoaXMuX3F1ZXVlQ29tbWFuZCgnc2V0UGxheWJhY2tSYXRlJywgcmF0ZSlcbiAgfVxuXG4gIHNldFBsYXliYWNrUXVhbGl0eSAoc3VnZ2VzdGVkUXVhbGl0eSkge1xuICAgIGlmICh0aGlzLl9yZWFkeSkgdGhpcy5fcGxheWVyLnNldFBsYXliYWNrUXVhbGl0eShzdWdnZXN0ZWRRdWFsaXR5KVxuICAgIGVsc2UgdGhpcy5fcXVldWVDb21tYW5kKCdzZXRQbGF5YmFja1F1YWxpdHknLCBzdWdnZXN0ZWRRdWFsaXR5KVxuICB9XG5cbiAgZ2V0UGxheWJhY2tSYXRlICgpIHtcbiAgICByZXR1cm4gKHRoaXMuX3JlYWR5ICYmIHRoaXMuX3BsYXllci5nZXRQbGF5YmFja1JhdGUoKSkgfHwgMVxuICB9XG5cbiAgZ2V0QXZhaWxhYmxlUGxheWJhY2tSYXRlcyAoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9yZWFkeSAmJiB0aGlzLl9wbGF5ZXIuZ2V0QXZhaWxhYmxlUGxheWJhY2tSYXRlcygpKSB8fCBbMV1cbiAgfVxuXG4gIGdldER1cmF0aW9uICgpIHtcbiAgICByZXR1cm4gKHRoaXMuX3JlYWR5ICYmIHRoaXMuX3BsYXllci5nZXREdXJhdGlvbigpKSB8fCAwXG4gIH1cblxuICBnZXRQcm9ncmVzcyAoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9yZWFkeSAmJiB0aGlzLl9wbGF5ZXIuZ2V0VmlkZW9Mb2FkZWRGcmFjdGlvbigpKSB8fCAwXG4gIH1cblxuICBnZXRTdGF0ZSAoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9yZWFkeSAmJiBZT1VUVUJFX1NUQVRFU1t0aGlzLl9wbGF5ZXIuZ2V0UGxheWVyU3RhdGUoKV0pIHx8ICd1bnN0YXJ0ZWQnXG4gIH1cblxuICBnZXRDdXJyZW50VGltZSAoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9yZWFkeSAmJiB0aGlzLl9wbGF5ZXIuZ2V0Q3VycmVudFRpbWUoKSkgfHwgMFxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5fZGVzdHJveSgpXG4gIH1cblxuICBfZGVzdHJveSAoZXJyKSB7XG4gICAgaWYgKHRoaXMuZGVzdHJveWVkKSByZXR1cm5cbiAgICB0aGlzLmRlc3Ryb3llZCA9IHRydWVcblxuICAgIGlmICh0aGlzLl9wbGF5ZXIpIHtcbiAgICAgIHRoaXMuX3BsYXllci5zdG9wVmlkZW8gJiYgdGhpcy5fcGxheWVyLnN0b3BWaWRlbygpXG4gICAgICB0aGlzLl9wbGF5ZXIuZGVzdHJveSgpXG4gICAgfVxuXG4gICAgdGhpcy52aWRlb0lkID0gbnVsbFxuXG4gICAgdGhpcy5faWQgPSBudWxsXG4gICAgdGhpcy5fb3B0cyA9IG51bGxcbiAgICB0aGlzLl9hcGkgPSBudWxsXG4gICAgdGhpcy5fcGxheWVyID0gbnVsbFxuICAgIHRoaXMuX3JlYWR5ID0gZmFsc2VcbiAgICB0aGlzLl9xdWV1ZSA9IG51bGxcblxuICAgIHRoaXMuX3N0b3BJbnRlcnZhbCgpXG5cbiAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKCdwbGF5aW5nJywgdGhpcy5fc3RhcnRJbnRlcnZhbClcbiAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKCdwYXVzZWQnLCB0aGlzLl9zdG9wSW50ZXJ2YWwpXG4gICAgdGhpcy5yZW1vdmVMaXN0ZW5lcignYnVmZmVyaW5nJywgdGhpcy5fc3RvcEludGVydmFsKVxuICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIoJ3Vuc3RhcnRlZCcsIHRoaXMuX3N0b3BJbnRlcnZhbClcbiAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKCdlbmRlZCcsIHRoaXMuX3N0b3BJbnRlcnZhbClcblxuICAgIGlmIChlcnIpIHRoaXMuZW1pdCgnZXJyb3InLCBlcnIpXG4gIH1cblxuICBfcXVldWVDb21tYW5kIChjb21tYW5kLCAuLi5hcmdzKSB7XG4gICAgaWYgKHRoaXMuZGVzdHJveWVkKSByZXR1cm5cbiAgICB0aGlzLl9xdWV1ZS5wdXNoKFtjb21tYW5kLCBhcmdzXSlcbiAgfVxuXG4gIF9mbHVzaFF1ZXVlICgpIHtcbiAgICB3aGlsZSAodGhpcy5fcXVldWUubGVuZ3RoKSB7XG4gICAgICBjb25zdCBjb21tYW5kID0gdGhpcy5fcXVldWUuc2hpZnQoKVxuICAgICAgdGhpc1tjb21tYW5kWzBdXS5hcHBseSh0aGlzLCBjb21tYW5kWzFdKVxuICAgIH1cbiAgfVxuXG4gIF9sb2FkSWZyYW1lQVBJIChjYikge1xuICAgIC8vIElmIEFQSSBpcyBsb2FkZWQsIHRoZXJlIGlzIG5vdGhpbmcgZWxzZSB0byBkb1xuICAgIGlmICh3aW5kb3cuWVQgJiYgdHlwZW9mIHdpbmRvdy5ZVC5QbGF5ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBjYihudWxsLCB3aW5kb3cuWVQpXG4gICAgfVxuXG4gICAgLy8gT3RoZXJ3aXNlLCBxdWV1ZSBjYWxsYmFjayB1bnRpbCBBUEkgaXMgbG9hZGVkXG4gICAgbG9hZElmcmFtZUFQSUNhbGxiYWNrcy5wdXNoKGNiKVxuXG4gICAgY29uc3Qgc2NyaXB0cyA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpKVxuICAgIGNvbnN0IGlzTG9hZGluZyA9IHNjcmlwdHMuc29tZShzY3JpcHQgPT4gc2NyaXB0LnNyYyA9PT0gWU9VVFVCRV9JRlJBTUVfQVBJX1NSQylcblxuICAgIC8vIElmIEFQSSA8c2NyaXB0PiB0YWcgaXMgbm90IHByZXNlbnQgaW4gdGhlIHBhZ2UsIGluamVjdCBpdC4gRW5zdXJlcyB0aGF0XG4gICAgLy8gaWYgdXNlciBpbmNsdWRlcyBhIGhhcmRjb2RlZCA8c2NyaXB0PiB0YWcgaW4gSFRNTCBmb3IgcGVyZm9ybWFuY2UsIGFub3RoZXJcbiAgICAvLyBvbmUgd2lsbCBub3QgYmUgYWRkZWRcbiAgICBpZiAoIWlzTG9hZGluZykge1xuICAgICAgbG9hZFNjcmlwdChZT1VUVUJFX0lGUkFNRV9BUElfU1JDKS5jYXRjaChlcnIgPT4ge1xuICAgICAgICB3aGlsZSAobG9hZElmcmFtZUFQSUNhbGxiYWNrcy5sZW5ndGgpIHtcbiAgICAgICAgICBjb25zdCBsb2FkQ2IgPSBsb2FkSWZyYW1lQVBJQ2FsbGJhY2tzLnNoaWZ0KClcbiAgICAgICAgICBsb2FkQ2IoZXJyKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIC8vIElmIHJlYWR5IGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50LCBjcmVhdGUgaXRcbiAgICBpZiAodHlwZW9mIHdpbmRvdy5vbllvdVR1YmVJZnJhbWVBUElSZWFkeSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgd2luZG93Lm9uWW91VHViZUlmcmFtZUFQSVJlYWR5ID0gKCkgPT4ge1xuICAgICAgICB3aGlsZSAobG9hZElmcmFtZUFQSUNhbGxiYWNrcy5sZW5ndGgpIHtcbiAgICAgICAgICBjb25zdCBsb2FkQ2IgPSBsb2FkSWZyYW1lQVBJQ2FsbGJhY2tzLnNoaWZ0KClcbiAgICAgICAgICBsb2FkQ2IobnVsbCwgd2luZG93LllUKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX2NyZWF0ZVBsYXllciAodmlkZW9JZCkge1xuICAgIGlmICh0aGlzLmRlc3Ryb3llZCkgcmV0dXJuXG5cbiAgICBjb25zdCBvcHRzID0gdGhpcy5fb3B0c1xuXG4gICAgdGhpcy5fcGxheWVyID0gbmV3IHRoaXMuX2FwaS5QbGF5ZXIodGhpcy5faWQsIHtcbiAgICAgIHdpZHRoOiBvcHRzLndpZHRoLFxuICAgICAgaGVpZ2h0OiBvcHRzLmhlaWdodCxcbiAgICAgIHZpZGVvSWQ6IHZpZGVvSWQsXG4gICAgICBwbGF5ZXJWYXJzOiB7XG4gICAgICAgIC8vIFRoaXMgcGFyYW1ldGVyIHNwZWNpZmllcyB3aGV0aGVyIHRoZSBpbml0aWFsIHZpZGVvIHdpbGwgYXV0b21hdGljYWxseVxuICAgICAgICAvLyBzdGFydCB0byBwbGF5IHdoZW4gdGhlIHBsYXllciBsb2Fkcy4gU3VwcG9ydGVkIHZhbHVlcyBhcmUgMCBvciAxLiBUaGVcbiAgICAgICAgLy8gZGVmYXVsdCB2YWx1ZSBpcyAwLlxuICAgICAgICBhdXRvcGxheTogb3B0cy5hdXRvcGxheSA/IDEgOiAwLFxuXG4gICAgICAgIC8vIFNldHRpbmcgdGhlIHBhcmFtZXRlcidzIHZhbHVlIHRvIDEgY2F1c2VzIGNsb3NlZCBjYXB0aW9ucyB0byBiZSBzaG93blxuICAgICAgICAvLyBieSBkZWZhdWx0LCBldmVuIGlmIHRoZSB1c2VyIGhhcyB0dXJuZWQgY2FwdGlvbnMgb2ZmLiBUaGUgZGVmYXVsdFxuICAgICAgICAvLyBiZWhhdmlvciBpcyBiYXNlZCBvbiB1c2VyIHByZWZlcmVuY2UuXG4gICAgICAgIGNjX2xvYWRfcG9saWN5OiBvcHRzLmNhcHRpb25zICE9IG51bGxcbiAgICAgICAgICA/IG9wdHMuY2FwdGlvbnMgIT09IGZhbHNlID8gMSA6IDBcbiAgICAgICAgICA6IHVuZGVmaW5lZCwgLy8gZGVmYXVsdCB0byBub3Qgc2V0dGluZyB0aGlzIG9wdGlvblxuXG4gICAgICAgIC8vIFNldHMgdGhlIHBsYXllcidzIGludGVyZmFjZSBsYW5ndWFnZS4gVGhlIHBhcmFtZXRlciB2YWx1ZSBpcyBhbiBJU09cbiAgICAgICAgLy8gNjM5LTEgdHdvLWxldHRlciBsYW5ndWFnZSBjb2RlIG9yIGEgZnVsbHkgc3BlY2lmaWVkIGxvY2FsZS4gRm9yXG4gICAgICAgIC8vIGV4YW1wbGUsIGZyIGFuZCBmci1jYSBhcmUgYm90aCB2YWxpZCB2YWx1ZXMuIE90aGVyIGxhbmd1YWdlIGlucHV0XG4gICAgICAgIC8vIGNvZGVzLCBzdWNoIGFzIElFVEYgbGFuZ3VhZ2UgdGFncyAoQkNQIDQ3KSBtaWdodCBhbHNvIGJlIGhhbmRsZWRcbiAgICAgICAgLy8gcHJvcGVybHkuXG4gICAgICAgIGhsOiAob3B0cy5jYXB0aW9ucyAhPSBudWxsICYmIG9wdHMuY2FwdGlvbnMgIT09IGZhbHNlKVxuICAgICAgICAgID8gb3B0cy5jYXB0aW9uc1xuICAgICAgICAgIDogdW5kZWZpbmVkLCAvLyBkZWZhdWx0IHRvIG5vdCBzZXR0aW5nIHRoaXMgb3B0aW9uXG5cbiAgICAgICAgLy8gVGhpcyBwYXJhbWV0ZXIgc3BlY2lmaWVzIHRoZSBkZWZhdWx0IGxhbmd1YWdlIHRoYXQgdGhlIHBsYXllciB3aWxsXG4gICAgICAgIC8vIHVzZSB0byBkaXNwbGF5IGNhcHRpb25zLiBTZXQgdGhlIHBhcmFtZXRlcidzIHZhbHVlIHRvIGFuIElTTyA2MzktMVxuICAgICAgICAvLyB0d28tbGV0dGVyIGxhbmd1YWdlIGNvZGUuXG4gICAgICAgIGNjX2xhbmdfcHJlZjogKG9wdHMuY2FwdGlvbnMgIT0gbnVsbCAmJiBvcHRzLmNhcHRpb25zICE9PSBmYWxzZSlcbiAgICAgICAgICA/IG9wdHMuY2FwdGlvbnNcbiAgICAgICAgICA6IHVuZGVmaW5lZCwgLy8gZGVmYXVsdCB0byBub3Qgc2V0dGluZyB0aGlzIG9wdGlvblxuXG4gICAgICAgIC8vIFRoaXMgcGFyYW1ldGVyIGluZGljYXRlcyB3aGV0aGVyIHRoZSB2aWRlbyBwbGF5ZXIgY29udHJvbHMgYXJlXG4gICAgICAgIC8vIGRpc3BsYXllZC4gRm9yIElGcmFtZSBlbWJlZHMgdGhhdCBsb2FkIGEgRmxhc2ggcGxheWVyLCBpdCBhbHNvIGRlZmluZXNcbiAgICAgICAgLy8gd2hlbiB0aGUgY29udHJvbHMgZGlzcGxheSBpbiB0aGUgcGxheWVyIGFzIHdlbGwgYXMgd2hlbiB0aGUgcGxheWVyXG4gICAgICAgIC8vIHdpbGwgbG9hZC4gU3VwcG9ydGVkIHZhbHVlcyBhcmU6XG4gICAgICAgIC8vICAgLSBjb250cm9scz0wIOKAkyBQbGF5ZXIgY29udHJvbHMgZG8gbm90IGRpc3BsYXkgaW4gdGhlIHBsYXllci4gRm9yXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgSUZyYW1lIGVtYmVkcywgdGhlIEZsYXNoIHBsYXllciBsb2FkcyBpbW1lZGlhdGVseS5cbiAgICAgICAgLy8gICAtIGNvbnRyb2xzPTEg4oCTIChkZWZhdWx0KSBQbGF5ZXIgY29udHJvbHMgZGlzcGxheSBpbiB0aGUgcGxheWVyLiBGb3JcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICBJRnJhbWUgZW1iZWRzLCB0aGUgY29udHJvbHMgZGlzcGxheSBpbW1lZGlhdGVseSBhbmRcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICB0aGUgRmxhc2ggcGxheWVyIGFsc28gbG9hZHMgaW1tZWRpYXRlbHkuXG4gICAgICAgIC8vICAgLSBjb250cm9scz0yIOKAkyBQbGF5ZXIgY29udHJvbHMgZGlzcGxheSBpbiB0aGUgcGxheWVyLiBGb3IgSUZyYW1lXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgZW1iZWRzLCB0aGUgY29udHJvbHMgZGlzcGxheSBhbmQgdGhlIEZsYXNoIHBsYXllclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgIGxvYWRzIGFmdGVyIHRoZSB1c2VyIGluaXRpYXRlcyB0aGUgdmlkZW8gcGxheWJhY2suXG4gICAgICAgIGNvbnRyb2xzOiBvcHRzLmNvbnRyb2xzID8gMiA6IDAsXG5cbiAgICAgICAgLy8gU2V0dGluZyB0aGUgcGFyYW1ldGVyJ3MgdmFsdWUgdG8gMSBjYXVzZXMgdGhlIHBsYXllciB0byBub3QgcmVzcG9uZCB0b1xuICAgICAgICAvLyBrZXlib2FyZCBjb250cm9scy4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgMCwgd2hpY2ggbWVhbnMgdGhhdCBrZXlib2FyZFxuICAgICAgICAvLyBjb250cm9scyBhcmUgZW5hYmxlZC5cbiAgICAgICAgZGlzYWJsZWtiOiBvcHRzLmtleWJvYXJkID8gMCA6IDEsXG5cbiAgICAgICAgLy8gU2V0dGluZyB0aGUgcGFyYW1ldGVyJ3MgdmFsdWUgdG8gMSBlbmFibGVzIHRoZSBwbGF5ZXIgdG8gYmVcbiAgICAgICAgLy8gY29udHJvbGxlZCB2aWEgSUZyYW1lIG9yIEphdmFTY3JpcHQgUGxheWVyIEFQSSBjYWxscy4gVGhlIGRlZmF1bHRcbiAgICAgICAgLy8gdmFsdWUgaXMgMCwgd2hpY2ggbWVhbnMgdGhhdCB0aGUgcGxheWVyIGNhbm5vdCBiZSBjb250cm9sbGVkIHVzaW5nXG4gICAgICAgIC8vIHRob3NlIEFQSXMuXG4gICAgICAgIGVuYWJsZWpzYXBpOiAxLFxuXG4gICAgICAgIC8vIFNldHRpbmcgdGhpcyBwYXJhbWV0ZXIgdG8gMCBwcmV2ZW50cyB0aGUgZnVsbHNjcmVlbiBidXR0b24gZnJvbVxuICAgICAgICAvLyBkaXNwbGF5aW5nIGluIHRoZSBwbGF5ZXIuIFRoZSBkZWZhdWx0IHZhbHVlIGlzIDEsIHdoaWNoIGNhdXNlcyB0aGVcbiAgICAgICAgLy8gZnVsbHNjcmVlbiBidXR0b24gdG8gZGlzcGxheS5cbiAgICAgICAgZnM6IG9wdHMuZnVsbHNjcmVlbiA/IDEgOiAwLFxuXG4gICAgICAgIC8vIFNldHRpbmcgdGhlIHBhcmFtZXRlcidzIHZhbHVlIHRvIDEgY2F1c2VzIHZpZGVvIGFubm90YXRpb25zIHRvIGJlXG4gICAgICAgIC8vIHNob3duIGJ5IGRlZmF1bHQsIHdoZXJlYXMgc2V0dGluZyB0byAzIGNhdXNlcyB2aWRlbyBhbm5vdGF0aW9ucyB0byBub3RcbiAgICAgICAgLy8gYmUgc2hvd24gYnkgZGVmYXVsdC4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgMS5cbiAgICAgICAgaXZfbG9hZF9wb2xpY3k6IG9wdHMuYW5ub3RhdGlvbnMgPyAxIDogMyxcblxuICAgICAgICAvLyBUaGlzIHBhcmFtZXRlciBsZXRzIHlvdSB1c2UgYSBZb3VUdWJlIHBsYXllciB0aGF0IGRvZXMgbm90IHNob3cgYVxuICAgICAgICAvLyBZb3VUdWJlIGxvZ28uIFNldCB0aGUgcGFyYW1ldGVyIHZhbHVlIHRvIDEgdG8gcHJldmVudCB0aGUgWW91VHViZSBsb2dvXG4gICAgICAgIC8vIGZyb20gZGlzcGxheWluZyBpbiB0aGUgY29udHJvbCBiYXIuIE5vdGUgdGhhdCBhIHNtYWxsIFlvdVR1YmUgdGV4dFxuICAgICAgICAvLyBsYWJlbCB3aWxsIHN0aWxsIGRpc3BsYXkgaW4gdGhlIHVwcGVyLXJpZ2h0IGNvcm5lciBvZiBhIHBhdXNlZCB2aWRlb1xuICAgICAgICAvLyB3aGVuIHRoZSB1c2VyJ3MgbW91c2UgcG9pbnRlciBob3ZlcnMgb3ZlciB0aGUgcGxheWVyLlxuICAgICAgICBtb2Rlc3RicmFuZGluZzogb3B0cy5tb2Rlc3RCcmFuZGluZyA/IDEgOiAwLFxuXG4gICAgICAgIC8vIFRoaXMgcGFyYW1ldGVyIHByb3ZpZGVzIGFuIGV4dHJhIHNlY3VyaXR5IG1lYXN1cmUgZm9yIHRoZSBJRnJhbWUgQVBJXG4gICAgICAgIC8vIGFuZCBpcyBvbmx5IHN1cHBvcnRlZCBmb3IgSUZyYW1lIGVtYmVkcy4gSWYgeW91IGFyZSB1c2luZyB0aGUgSUZyYW1lXG4gICAgICAgIC8vIEFQSSwgd2hpY2ggbWVhbnMgeW91IGFyZSBzZXR0aW5nIHRoZSBlbmFibGVqc2FwaSBwYXJhbWV0ZXIgdmFsdWUgdG8gMSxcbiAgICAgICAgLy8geW91IHNob3VsZCBhbHdheXMgc3BlY2lmeSB5b3VyIGRvbWFpbiBhcyB0aGUgb3JpZ2luIHBhcmFtZXRlciB2YWx1ZS5cbiAgICAgICAgb3JpZ2luOiB3aW5kb3cubG9jYXRpb24ub3JpZ2luLFxuXG4gICAgICAgIC8vIFRoaXMgcGFyYW1ldGVyIGNvbnRyb2xzIHdoZXRoZXIgdmlkZW9zIHBsYXkgaW5saW5lIG9yIGZ1bGxzY3JlZW4gaW4gYW5cbiAgICAgICAgLy8gSFRNTDUgcGxheWVyIG9uIGlPUy4gVmFsaWQgdmFsdWVzIGFyZTpcbiAgICAgICAgLy8gICAtIDA6IFRoaXMgdmFsdWUgY2F1c2VzIGZ1bGxzY3JlZW4gcGxheWJhY2suIFRoaXMgaXMgY3VycmVudGx5IHRoZVxuICAgICAgICAvLyAgICAgICAgZGVmYXVsdCB2YWx1ZSwgdGhvdWdoIHRoZSBkZWZhdWx0IGlzIHN1YmplY3QgdG8gY2hhbmdlLlxuICAgICAgICAvLyAgIC0gMTogVGhpcyB2YWx1ZSBjYXVzZXMgaW5saW5lIHBsYXliYWNrIGZvciBVSVdlYlZpZXdzIGNyZWF0ZWQgd2l0aFxuICAgICAgICAvLyAgICAgICAgdGhlIGFsbG93c0lubGluZU1lZGlhUGxheWJhY2sgcHJvcGVydHkgc2V0IHRvIFRSVUUuXG4gICAgICAgIHBsYXlzaW5saW5lOiBvcHRzLnBsYXlzSW5saW5lID8gMSA6IDAsXG5cbiAgICAgICAgLy8gVGhpcyBwYXJhbWV0ZXIgaW5kaWNhdGVzIHdoZXRoZXIgdGhlIHBsYXllciBzaG91bGQgc2hvdyByZWxhdGVkXG4gICAgICAgIC8vIHZpZGVvcyBmcm9tIHRoZSBzYW1lIGNoYW5uZWwgKDApIG9yIGZyb20gYW55IGNoYW5uZWwgKDEpIHdoZW5cbiAgICAgICAgLy8gcGxheWJhY2sgb2YgdGhlIHZpZGVvIGVuZHMuIFRoZSBkZWZhdWx0IHZhbHVlIGlzIDEuXG4gICAgICAgIHJlbDogb3B0cy5yZWxhdGVkID8gMSA6IDAsXG5cbiAgICAgICAgLy8gKE5vdCBwYXJ0IG9mIGRvY3VtZW50ZWQgQVBJKSBBbGxvdyBodG1sIGVsZW1lbnRzIHdpdGggaGlnaGVyIHotaW5kZXhcbiAgICAgICAgLy8gdG8gYmUgc2hvd24gb24gdG9wIG9mIHRoZSBZb3VUdWJlIHBsYXllci5cbiAgICAgICAgd21vZGU6ICdvcGFxdWUnXG4gICAgICB9LFxuICAgICAgZXZlbnRzOiB7XG4gICAgICAgIG9uUmVhZHk6ICgpID0+IHRoaXMuX29uUmVhZHkodmlkZW9JZCksXG4gICAgICAgIG9uU3RhdGVDaGFuZ2U6IChkYXRhKSA9PiB0aGlzLl9vblN0YXRlQ2hhbmdlKGRhdGEpLFxuICAgICAgICBvblBsYXliYWNrUXVhbGl0eUNoYW5nZTogKGRhdGEpID0+IHRoaXMuX29uUGxheWJhY2tRdWFsaXR5Q2hhbmdlKGRhdGEpLFxuICAgICAgICBvblBsYXliYWNrUmF0ZUNoYW5nZTogKGRhdGEpID0+IHRoaXMuX29uUGxheWJhY2tSYXRlQ2hhbmdlKGRhdGEpLFxuICAgICAgICBvbkVycm9yOiAoZGF0YSkgPT4gdGhpcy5fb25FcnJvcihkYXRhKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogVGhpcyBldmVudCBmaXJlcyB3aGVuIHRoZSBwbGF5ZXIgaGFzIGZpbmlzaGVkIGxvYWRpbmcgYW5kIGlzIHJlYWR5IHRvIGJlZ2luXG4gICAqIHJlY2VpdmluZyBBUEkgY2FsbHMuXG4gICAqL1xuICBfb25SZWFkeSAodmlkZW9JZCkge1xuICAgIGlmICh0aGlzLmRlc3Ryb3llZCkgcmV0dXJuXG5cbiAgICB0aGlzLl9yZWFkeSA9IHRydWVcblxuICAgIC8vIE9uY2UgdGhlIHBsYXllciBpcyByZWFkeSwgYWx3YXlzIGNhbGwgYGxvYWQodmlkZW9JZCwgW2F1dG9wbGF5XSlgIHRvIGhhbmRsZVxuICAgIC8vIHRoZXNlIHBvc3NpYmxlIGNhc2VzOlxuICAgIC8vXG4gICAgLy8gICAxLiBgbG9hZCh2aWRlb0lkLCB0cnVlKWAgd2FzIGNhbGxlZCBiZWZvcmUgdGhlIHBsYXllciB3YXMgcmVhZHkuIEVuc3VyZSB0aGF0XG4gICAgLy8gICAgICB0aGUgc2VsZWN0ZWQgdmlkZW8gc3RhcnRzIHRvIHBsYXkuXG4gICAgLy9cbiAgICAvLyAgIDIuIGBsb2FkKHZpZGVvSWQsIGZhbHNlKWAgd2FzIGNhbGxlZCBiZWZvcmUgdGhlIHBsYXllciB3YXMgcmVhZHkuIE5vdyB0aGVcbiAgICAvLyAgICAgIHBsYXllciBpcyByZWFkeSBhbmQgdGhlcmUncyBub3RoaW5nIHRvIGRvLlxuICAgIC8vXG4gICAgLy8gICAzLiBgbG9hZCh2aWRlb0lkLCBbYXV0b3BsYXldKWAgd2FzIGNhbGxlZCBtdWx0aXBsZSB0aW1lcyBiZWZvcmUgdGhlIHBsYXllclxuICAgIC8vICAgICAgd2FzIHJlYWR5LiBUaGVyZWZvcmUsIHRoZSBwbGF5ZXIgd2FzIGluaXRpYWxpemVkIHdpdGggdGhlIHdyb25nIHZpZGVvSWQsXG4gICAgLy8gICAgICBzbyBsb2FkIHRoZSBsYXRlc3QgdmlkZW9JZCBhbmQgcG90ZW50aWFsbHkgYXV0b3BsYXkgaXQuXG4gICAgdGhpcy5sb2FkKHRoaXMudmlkZW9JZCwgdGhpcy5fYXV0b3BsYXkpXG5cbiAgICB0aGlzLl9mbHVzaFF1ZXVlKClcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiB0aGUgcGxheWVyJ3Mgc3RhdGUgY2hhbmdlcy4gV2UgZW1pdCBmcmllbmRseSBldmVudHMgc28gdGhlIHVzZXJcbiAgICogZG9lc24ndCBuZWVkIHRvIHVzZSBZb3VUdWJlJ3MgWVQuUGxheWVyU3RhdGUuKiBldmVudCBjb25zdGFudHMuXG4gICAqL1xuICBfb25TdGF0ZUNoYW5nZSAoZGF0YSkge1xuICAgIGlmICh0aGlzLmRlc3Ryb3llZCkgcmV0dXJuXG5cbiAgICBjb25zdCBzdGF0ZSA9IFlPVVRVQkVfU1RBVEVTW2RhdGEuZGF0YV1cblxuICAgIGlmIChzdGF0ZSkge1xuICAgICAgLy8gU2VuZCBhICd0aW1ldXBkYXRlJyBhbnl0aW1lIHRoZSBzdGF0ZSBjaGFuZ2VzLiBXaGVuIHRoZSB2aWRlbyBoYWx0cyBmb3IgYW55XG4gICAgICAvLyByZWFzb24gKCdwYXVzZWQnLCAnYnVmZmVyaW5nJywgb3IgJ2VuZGVkJykgbm8gZnVydGhlciAndGltZXVwZGF0ZScgZXZlbnRzXG4gICAgICAvLyBzaG91bGQgZmlyZSB1bnRpbCB0aGUgdmlkZW8gdW5oYWx0cy5cbiAgICAgIGlmIChbJ3BhdXNlZCcsICdidWZmZXJpbmcnLCAnZW5kZWQnXS5pbmNsdWRlcyhzdGF0ZSkpIHRoaXMuX29uVGltZXVwZGF0ZSgpXG5cbiAgICAgIHRoaXMuZW1pdChzdGF0ZSlcblxuICAgICAgLy8gV2hlbiB0aGUgdmlkZW8gY2hhbmdlcyAoJ3Vuc3RhcnRlZCcgb3IgJ2N1ZWQnKSBvciBzdGFydHMgKCdwbGF5aW5nJykgdGhlbiBhXG4gICAgICAvLyAndGltZXVwZGF0ZScgc2hvdWxkIGZvbGxvdyBhZnRlcndhcmRzIChuZXZlciBiZWZvcmUhKSB0byByZXNldCB0aGUgdGltZS5cbiAgICAgIGlmIChbJ3Vuc3RhcnRlZCcsICdwbGF5aW5nJywgJ2N1ZWQnXS5pbmNsdWRlcyhzdGF0ZSkpIHRoaXMuX29uVGltZXVwZGF0ZSgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVW5yZWNvZ25pemVkIHN0YXRlIGNoYW5nZTogJyArIGRhdGEpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgZXZlbnQgZmlyZXMgd2hlbmV2ZXIgdGhlIHZpZGVvIHBsYXliYWNrIHF1YWxpdHkgY2hhbmdlcy4gUG9zc2libGVcbiAgICogdmFsdWVzIGFyZTogJ3NtYWxsJywgJ21lZGl1bScsICdsYXJnZScsICdoZDcyMCcsICdoZDEwODAnLCAnaGlnaHJlcycuXG4gICAqL1xuICBfb25QbGF5YmFja1F1YWxpdHlDaGFuZ2UgKGRhdGEpIHtcbiAgICBpZiAodGhpcy5kZXN0cm95ZWQpIHJldHVyblxuICAgIHRoaXMuZW1pdCgncGxheWJhY2tRdWFsaXR5Q2hhbmdlJywgZGF0YS5kYXRhKVxuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgZXZlbnQgZmlyZXMgd2hlbmV2ZXIgdGhlIHZpZGVvIHBsYXliYWNrIHJhdGUgY2hhbmdlcy5cbiAgICovXG4gIF9vblBsYXliYWNrUmF0ZUNoYW5nZSAoZGF0YSkge1xuICAgIGlmICh0aGlzLmRlc3Ryb3llZCkgcmV0dXJuXG4gICAgdGhpcy5lbWl0KCdwbGF5YmFja1JhdGVDaGFuZ2UnLCBkYXRhLmRhdGEpXG4gIH1cblxuICAvKipcbiAgICogVGhpcyBldmVudCBmaXJlcyBpZiBhbiBlcnJvciBvY2N1cnMgaW4gdGhlIHBsYXllci5cbiAgICovXG4gIF9vbkVycm9yIChkYXRhKSB7XG4gICAgaWYgKHRoaXMuZGVzdHJveWVkKSByZXR1cm5cblxuICAgIGNvbnN0IGNvZGUgPSBkYXRhLmRhdGFcblxuICAgIC8vIFRoZSBIVE1MNV9FUlJPUiBlcnJvciBvY2N1cnMgd2hlbiB0aGUgWW91VHViZSBwbGF5ZXIgbmVlZHMgdG8gc3dpdGNoIGZyb21cbiAgICAvLyBIVE1MNSB0byBGbGFzaCB0byBzaG93IGFuIGFkLiBJZ25vcmUgaXQuXG4gICAgaWYgKGNvZGUgPT09IFlPVVRVQkVfRVJST1IuSFRNTDVfRVJST1IpIHJldHVyblxuXG4gICAgLy8gVGhlIHJlbWFpbmluZyBlcnJvciB0eXBlcyBvY2N1ciB3aGVuIHRoZSBZb3VUdWJlIHBsYXllciBjYW5ub3QgcGxheSB0aGVcbiAgICAvLyBnaXZlbiB2aWRlby4gVGhpcyBpcyBub3QgYSBmYXRhbCBlcnJvci4gUmVwb3J0IGl0IGFzIHVucGxheWFibGUgc28gdGhlIHVzZXJcbiAgICAvLyBoYXMgYW4gb3Bwb3J0dW5pdHkgdG8gcGxheSBhbm90aGVyIHZpZGVvLlxuICAgIGlmIChjb2RlID09PSBZT1VUVUJFX0VSUk9SLlVOUExBWUFCTEVfMSB8fFxuICAgICAgICBjb2RlID09PSBZT1VUVUJFX0VSUk9SLlVOUExBWUFCTEVfMiB8fFxuICAgICAgICBjb2RlID09PSBZT1VUVUJFX0VSUk9SLk5PVF9GT1VORCB8fFxuICAgICAgICBjb2RlID09PSBZT1VUVUJFX0VSUk9SLklOVkFMSURfUEFSQU0pIHtcbiAgICAgIHJldHVybiB0aGlzLmVtaXQoJ3VucGxheWFibGUnLCB0aGlzLnZpZGVvSWQpXG4gICAgfVxuXG4gICAgLy8gVW5leHBlY3RlZCBlcnJvciwgZG9lcyBub3QgbWF0Y2ggYW55IGtub3duIHR5cGVcbiAgICB0aGlzLl9kZXN0cm95KG5ldyBFcnJvcignWW91VHViZSBQbGF5ZXIgRXJyb3IuIFVua25vd24gZXJyb3IgY29kZTogJyArIGNvZGUpKVxuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgZXZlbnQgZmlyZXMgd2hlbiB0aGUgdGltZSBpbmRpY2F0ZWQgYnkgdGhlIGBnZXRDdXJyZW50VGltZSgpYCBtZXRob2RcbiAgICogaGFzIGJlZW4gdXBkYXRlZC5cbiAgICovXG4gIF9vblRpbWV1cGRhdGUgKCkge1xuICAgIHRoaXMuZW1pdCgndGltZXVwZGF0ZScsIHRoaXMuZ2V0Q3VycmVudFRpbWUoKSlcbiAgfVxuXG4gIF9zdGFydEludGVydmFsICgpIHtcbiAgICB0aGlzLl9pbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHRoaXMuX29uVGltZXVwZGF0ZSgpLCB0aGlzLl9vcHRzLnRpbWV1cGRhdGVGcmVxdWVuY3kpXG4gIH1cblxuICBfc3RvcEludGVydmFsICgpIHtcbiAgICBjbGVhckludGVydmFsKHRoaXMuX2ludGVydmFsKVxuICAgIHRoaXMuX2ludGVydmFsID0gbnVsbFxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gWW91VHViZVBsYXllclxuIiwiaW1wb3J0IHsgUGxheWVyIH0gZnJvbSAnLi9jb21wb25lbnRzL3BsYXllcic7XHJcbmltcG9ydCB7IFF1ZXVlIH0gZnJvbSAnLi9jb21wb25lbnRzL3F1ZXVlJztcclxuaW1wb3J0IHsgR29vZ2xlQXV0aGVudGljYXRpb24gfSBmcm9tICcuL3NlcnZpY2VzL2dvb2dsZS1hdXRoZW50aWNhdGlvbic7XHJcbmltcG9ydCB7IFNlYXJjaCB9IGZyb20gJy4vc2VydmljZXMvc2VhcmNoJztcclxuaW1wb3J0IHsgU29uZyB9IGZyb20gJy4vbW9kZWxzL3NvbmcnO1xyXG5pbXBvcnQgeyBBcHBFdmVudCB9IGZyb20gJy4vc2VydmljZXMvZXZlbnQnO1xyXG5cclxuY29uc3QgcGxheWVyID0gUGxheWVyLmdldEluc3RhbmNlKCcjcGxheWVyJyk7XHJcblxyXG4vL1F1ZXVlLnF1ZXVlKCdEeURmZ01PVWpDSScpO1xyXG4vKiBRdWV1ZS5xdWV1ZSgna0pRUDdraXc1RmsnKTtcclxuUXVldWUucXVldWUoJ3NXTFFWQTlObDVzJyk7XHJcblF1ZXVlLnF1ZXVlKCdFYklsZ0Q1SW5TZycpO1xyXG5RdWV1ZS5xdWV1ZSgndGl5THZvMjRBMmcnKTtcclxuUXVldWUucXVldWUoJ18xdUdOYUU2cXZVJyk7ICovXHJcblxyXG5wbGF5ZXIucmVnaXN0ZXJFdmVudEhhbmRsZXJzKCk7XHJcblxyXG5jb25zdCBzaWduQnRuSGFuZGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZ25pbi1idG4nKTsgXHJcbmNvbnN0IHNlYXJjaEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWZvcm0nKTtcclxuY29uc3Qgc2VhcmNoQmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1iYXInKTtcclxuY29uc3Qgc2VhcmNoQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1idXR0b24nKTtcclxuXHJcbmNvbnN0IGNoZWNrSWZBdXRoZW50aWNhdGVkID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgaWYgKEdvb2dsZUF1dGhlbnRpY2F0aW9uLmlzQXV0aGVudGljYXRlZCgpKSB7XHJcbiAgICAgICAgc2lnbkJ0bkhhbmRsZT8uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICAgICAgc2VhcmNoRm9ybT8uY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZWQnKTtcclxuICAgICAgICBzZWFyY2hCYXI/LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnU2VhcmNoIHNvbmdzIGFuZCBhcnRpc3RzJyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBzaWduQnRuSGFuZGxlPy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgICAgICBzZWFyY2hGb3JtPy5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlZCcpO1xyXG4gICAgfVxyXG59XHJcbmNoZWNrSWZBdXRoZW50aWNhdGVkKCk7XHJcbnNpZ25CdG5IYW5kbGU/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgR29vZ2xlQXV0aGVudGljYXRpb24uYXV0aGVudGljYXRlKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgY2hlY2tJZkF1dGhlbnRpY2F0ZWQoKTsgICBcclxuICAgIH0pO1xyXG59KTtcclxuXHJcbmNvbnN0IG1haW5Db250YWluZXJCbG9jazogc3RyaW5nID0gYFxyXG48ZGl2IGNsYXNzPVwiY29sLXhzLTYgY29sLXNtLTQgY29sLW1kLTQgY29sLWxnLTNcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJpdGVtXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInBvcy1ybHRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW0tb3ZlcmxheSBiZy1ibGFjay1vcGFjaXR5XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VudGVyIHRleHQtY2VudGVyIHctZnVsbCBtLXQtblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWYgY2xhc3M9XCJwbGF5TGlua1wiIGRhdGEtYXR0cmlidXRlPVwie3tpZH19XCIgZGF0YS1hdHRyaWJ1dGUtYWN0aW9uPVwicGxheVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLTJ4IGZhLXBsYXktY2lyY2xlIHRleHQtd2hpdGUgbS1yLXNtXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmIGNsYXNzPVwicGxheUxpbmtcIiBkYXRhLWF0dHJpYnV0ZT1cInt7aWR9fVwiIGRhdGEtYXR0cmlidXRlLWFjdGlvbj1cInF1ZXVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtMnggZmEtYXJyb3ctYWx0LWNpcmNsZS1kb3duIHRleHQtd2hpdGVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwici0yeFwiPlxyXG4gICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImltZy1mbHVpZFwiIHNyYz1cInt7dGh1bWJuYWlsfX1cIi8+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwLTIgdGV4dC1jZW50ZXIgdGV4dC1tdXRlZFwiPlxyXG4gICAgICAgICAgICB7e3RpdGxlfX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuYDtcclxuXHJcbmNvbnN0IG5hdkJsb2NrID0gYFxyXG48bGkgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gbm8tYm9yZGVyIG5vLXBhZGRlciBwYWRkZXItaC1zbSBxdWV1ZS1saXN0XCIgZGF0YS1hdHRyaWJ1dGU9e3tpZH19PlxyXG4gICAgPHNwYW4gY2xhc3M9XCJmbG9hdC1sZWZ0IHRodW1iLXNtIG0tciBtLXQteHNcIj5cclxuICAgICAgICA8aW1nIHNyYz1cInt7dGh1bWJuYWlsfX1cIiBhbHQ9XCIuLi5cIiBjbGFzcz1cInJcIj5cclxuICAgIDwvc3Bhbj5cclxuICAgIDxkaXYgY2xhc3M9XCJjbGVhclwiPlxyXG4gICAgICAgIDxkaXY+PHNtYWxsPnt7dGl0bGV9fTwvc21hbGw+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC9saT5cclxuYDsgXHJcbnNlYXJjaEJ0bj8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBzZWFyY2hUZXJtID0gKDxIVE1MSW5wdXRFbGVtZW50PnNlYXJjaEJhcik/LnZhbHVlO1xyXG4gICAgaWYgKHNlYXJjaFRlcm0pIHtcclxuICAgICAgICBTZWFyY2guc2VhcmNoKHNlYXJjaFRlcm0pLnRoZW4oKHJlc3BvbnNlOiBBcnJheTxTb25nPikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzZWFyY2hSZXN1bHREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLXJlc3VsdHMnKTtcclxuICAgICAgICAgICAgaWYgKHNlYXJjaFJlc3VsdERpdikge1xyXG4gICAgICAgICAgICAgICAgc2VhcmNoUmVzdWx0RGl2LmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgbGV0IHNvbmc6IFNvbmc7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHNvbmcgb2YgcmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZmlsbGVkVGVtcGxhdGUgPSBtYWluQ29udGFpbmVyQmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbGVkVGVtcGxhdGUgPSBmaWxsZWRUZW1wbGF0ZS5yZXBsYWNlKCd7e3RodW1ibmFpbH19Jywgc29uZy5nZXRUaHVtYm5haWwoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbGVkVGVtcGxhdGUgPSBmaWxsZWRUZW1wbGF0ZS5yZXBsYWNlKCd7e3RpdGxlfX0nLCBzb25nLmdldFRpdGxlKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbGxlZFRlbXBsYXRlID0gZmlsbGVkVGVtcGxhdGUucmVwbGFjZSgve3tpZH19L2csIHNvbmcuZ2V0SWQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoUmVzdWx0RGl2LmlubmVySFRNTCA9IHNlYXJjaFJlc3VsdERpdj8uaW5uZXJIVE1MICsgZmlsbGVkVGVtcGxhdGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwbGF5TGluaycpKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaWQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1hdHRyaWJ1dGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYWN0aW9uID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXR0cmlidXRlLWFjdGlvbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNvbmcgPSBTb25nLmdldFNvbmdGcm9tTGlzdChyZXNwb25zZSwgaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNvbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWN0aW9uID09PSAncGxheScpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyLnF1ZXVlQW5kUGxheShzb25nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFF1ZXVlLnF1ZXVlKHNvbmcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhRdWV1ZS5nZXRDdXJyZW50UXVldWUoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnSW52YWxpZCBzb25nIElEIDogJywgaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbmNvbnN0IHVwZGF0ZVF1ZXVlTGlzdGVuZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnUXVldWUgdXBkYXRlZCcpO1xyXG4gICAgY29uc3QgY3VycmVudFF1ZXVlOiBBcnJheTxTb25nPiA9IFF1ZXVlLmdldEN1cnJlbnRRdWV1ZSgpO1xyXG4gICAgY29uc3QgcGxheWxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWxpc3QnKTtcclxuICAgIGlmIChwbGF5bGlzdCkge1xyXG4gICAgICAgIGxldCBzb25nOiBTb25nO1xyXG4gICAgICAgIHBsYXlsaXN0LmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIGZvciAoc29uZyBvZiBjdXJyZW50UXVldWUpIHtcclxuICAgICAgICAgICAgbGV0IGZpbGxlZFRlbXBsYXRlID0gbmF2QmxvY2s7XHJcbiAgICAgICAgICAgIGZpbGxlZFRlbXBsYXRlID0gZmlsbGVkVGVtcGxhdGUucmVwbGFjZSgne3t0aHVtYm5haWx9fScsIHNvbmcuZ2V0VGh1bWJuYWlsKCkpO1xyXG4gICAgICAgICAgICBmaWxsZWRUZW1wbGF0ZSA9IGZpbGxlZFRlbXBsYXRlLnJlcGxhY2UoJ3t7dGl0bGV9fScsIHNvbmcuZ2V0VGl0bGUoKSk7XHJcbiAgICAgICAgICAgIGZpbGxlZFRlbXBsYXRlID0gZmlsbGVkVGVtcGxhdGUucmVwbGFjZSgve3tpZH19L2csIHNvbmcuZ2V0SWQoKSk7XHJcbiAgICAgICAgICAgIHBsYXlsaXN0LmlubmVySFRNTCA9IHBsYXlsaXN0Py5pbm5lckhUTUwgKyBmaWxsZWRUZW1wbGF0ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncXVldWUtbGlzdCcpKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7IFxyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXR0cmlidXRlJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBwbGF5ZXIucGxheVRyYWNrKGlkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuQXBwRXZlbnQubGlzdGVuKCdxdWV1ZS11cGRhdGVkJywgdXBkYXRlUXVldWVMaXN0ZW5lcik7IiwiaW1wb3J0IFlvdVR1YmVQbGF5ZXIgZnJvbSAneXQtcGxheWVyJztcclxuXHJcbmltcG9ydCB7IFF1ZXVlIH0gZnJvbSAnLi9xdWV1ZSc7XHJcbmltcG9ydCB7IFNvbmcgfSBmcm9tICcuLi9tb2RlbHMvc29uZyc7XHJcbmltcG9ydCB7IFByb2dyZXNzQmFyIH0gZnJvbSAnLi9wcm9nZXNzLWJhcic7XHJcblxyXG5leHBvcnQgY2xhc3MgUGxheWVyIGV4dGVuZHMgWW91VHViZVBsYXllciB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBwbGF5ZXI6IFBsYXllcjtcclxuICAgIHByaXZhdGUgc3RhdGljIF9pc1BsYXlpbmc6IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIHN0YXRpYyBfY3VycmVudFRyYWNrSWQ6IHN0cmluZztcclxuICAgIHByaXZhdGUgcHJvZ3Jlc3M6IFByb2dyZXNzQmFyIHwgbnVsbCA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3Rvcihkb21FbElEOiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcihkb21FbElEKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2UoZG9tRWxJRDogc3RyaW5nKTogUGxheWVyIHtcclxuICAgICAgICBpZiAoIVBsYXllci5wbGF5ZXIpIHtcclxuICAgICAgICAgICAgUGxheWVyLnBsYXllciA9IG5ldyBQbGF5ZXIoZG9tRWxJRCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBQbGF5ZXIucGxheWVyO1xyXG4gICAgfTtcclxuXHJcbiAgICBwcml2YXRlIGxvYWRUcmFjayh0cmFja0lkOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBQbGF5ZXIuX2N1cnJlbnRUcmFja0lkID0gdHJhY2tJZDtcclxuICAgICAgICBQbGF5ZXIucGxheWVyLmxvYWQodHJhY2tJZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcGxheVRyYWNrKHRyYWNrSWQ/OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBpZiAodHJhY2tJZCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0b3BUcmFjaygpO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRUcmFjayh0cmFja0lkKTtcclxuICAgICAgICAgICAgUXVldWUudXBkYXRlQ3VycmVudFBsYXlpbmdUcmFjayh0cmFja0lkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFQbGF5ZXIuX2N1cnJlbnRUcmFja0lkKSB7XHJcbiAgICAgICAgICAgIGxldCB0cmFjayA9IFF1ZXVlLm5leHQoKTtcclxuICAgICAgICAgICAgaWYgKHRyYWNrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRUcmFjayh0cmFjay5nZXRJZCgpKTtcclxuICAgICAgICAgICAgICAgIFBsYXllci5faXNQbGF5aW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlUGxheSgpO1xyXG4gICAgICAgICAgICAgICAgUGxheWVyLnBsYXllci5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAvKmlmICh0aGlzLnByb2dyZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9ncmVzcy5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgfSovXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTm8gdHJhY2tzIHRvIHBsYXknKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgUGxheWVyLl9pc1BsYXlpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnRvZ2dsZVBsYXkoKTtcclxuICAgICAgICAgICAgUGxheWVyLnBsYXllci5wbGF5KCk7XHJcbiAgICAgICAgICAgIC8qaWYgKHRoaXMucHJvZ3Jlc3MpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3Muc3RhcnQoKTtcclxuICAgICAgICAgICAgfSovXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHF1ZXVlQW5kUGxheShzb25nOiBTb25nKTogdm9pZCB7XHJcbiAgICAgICAgUXVldWUucXVldWUoc29uZyk7XHJcbiAgICAgICAgaWYgKFBsYXllci5faXNQbGF5aW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGF1c2VUcmFjaygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxvYWRUcmFjayhzb25nLmdldElkKCkpO1xyXG4gICAgICAgIFF1ZXVlLnVwZGF0ZUN1cnJlbnRQbGF5aW5nVHJhY2soc29uZy5nZXRJZCgpKTtcclxuICAgICAgICBQbGF5ZXIuX2lzUGxheWluZyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy50b2dnbGVQbGF5KCk7XHJcbiAgICAgICAgUGxheWVyLnBsYXllci5wbGF5KCk7XHJcbiAgICAgICAgLyppZiAodGhpcy5wcm9ncmVzcykge1xyXG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzLnN0YXJ0KCk7XHJcbiAgICAgICAgfSovXHJcbiAgICB9XHJcblxyXG4gICAgcGF1c2VUcmFjaygpOiB2b2lkIHtcclxuICAgICAgICBQbGF5ZXIuX2lzUGxheWluZyA9IGZhbHNlO1xyXG4gICAgICAgIFBsYXllci5wbGF5ZXIucGF1c2UoKTtcclxuICAgICAgICB0aGlzLnRvZ2dsZVBsYXkoKTtcclxuICAgICAgICBpZiAodGhpcy5wcm9ncmVzcykge1xyXG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzLnN0b3AoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmV4dFRyYWNrKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucGF1c2VUcmFjaygpO1xyXG4gICAgICAgIGxldCBuZXh0VHJhY2sgPSBRdWV1ZS5uZXh0KCk7XHJcbiAgICAgICAgdGhpcy5wcm9ncmVzcz8ucmVzZXQoKTtcclxuICAgICAgICBpZiAobmV4dFRyYWNrKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZFRyYWNrKG5leHRUcmFjay5nZXRJZCgpKTtcclxuICAgICAgICAgICAgUGxheWVyLl9pc1BsYXlpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnRvZ2dsZVBsYXkoKTtcclxuICAgICAgICAgICAgUGxheWVyLnBsYXllci5wbGF5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByZXZpb3VzVHJhY2soKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5wYXVzZVRyYWNrKCk7XHJcbiAgICAgICAgbGV0IHByZXZpb3VzVHJhY2sgPSBRdWV1ZS5wcmV2aW91cygpO1xyXG4gICAgICAgIHRoaXMucHJvZ3Jlc3M/LnJlc2V0KCk7XHJcbiAgICAgICAgaWYgKHByZXZpb3VzVHJhY2spIHtcclxuICAgICAgICAgICAgdGhpcy5sb2FkVHJhY2socHJldmlvdXNUcmFjay5nZXRJZCgpKTtcclxuICAgICAgICAgICAgUGxheWVyLl9pc1BsYXlpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnRvZ2dsZVBsYXkoKTtcclxuICAgICAgICAgICAgUGxheWVyLnBsYXllci5wbGF5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0b3BUcmFjaygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnBhdXNlVHJhY2soKTtcclxuICAgICAgICB0aGlzLnByb2dyZXNzPy5yZXNldCgpO1xyXG4gICAgICAgIFBsYXllci5wbGF5ZXIuc3RvcCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZVBsYXkoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKFBsYXllci5faXNQbGF5aW5nKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXVzZS1idXR0b24nKT8uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5LWJ1dHRvbicpPy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXVzZS1idXR0b24nKT8uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5LWJ1dHRvbicpPy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHN0YXRpYyBzZWVrVG8odGltZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgUGxheWVyLnBsYXllci5zZWVrKHRpbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlVGl0bGUoKSB7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRRdWV1ZSA9IFF1ZXVlLmdldEN1cnJlbnRRdWV1ZSgpO1xyXG4gICAgICAgIGNvbnN0IHNvbmcgPSBTb25nLmdldFNvbmdGcm9tTGlzdChjdXJyZW50UXVldWUsIFBsYXllci5fY3VycmVudFRyYWNrSWQpO1xyXG4gICAgICAgIGNvbnN0IHRpdGxlRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJyk7XHJcbiAgICAgICAgaWYgKHRpdGxlRGl2ICYmIHNvbmcpIHtcclxuICAgICAgICAgICAgdGl0bGVEaXYuaW5uZXJIVE1MID0gc29uZy5nZXRUaXRsZSgpOyAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXJFdmVudEhhbmRsZXJzKCk6IHZvaWQge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5LWJ1dHRvbicpPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1BsYXlpbmcnKTtcclxuICAgICAgICAgICAgdGhpcy5wbGF5VHJhY2soKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGF1c2UtYnV0dG9uJyk/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUGF1c2VkJyk7XHJcbiAgICAgICAgICAgIHRoaXMucGF1c2VUcmFjaygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXh0LWJ1dHRvbicpPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ05leHQgdHJhY2snKTtcclxuICAgICAgICAgICAgdGhpcy5uZXh0VHJhY2soKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJldmlvdXMtYnV0dG9uJyk/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUHJldmlvdXMgdHJhY2snKTtcclxuICAgICAgICAgICAgdGhpcy5wcmV2aW91c1RyYWNrKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIFBsYXllci5wbGF5ZXIub24oJ3BsYXlpbmcnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVGl0bGUoKTtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnByb2dyZXNzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb2dyZXNzID0gUHJvZ3Jlc3NCYXIuZ2V0SW5zdGFuY2UoJ3Byb2dyZXNzLWJhcicpOyAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzLnNldFRpbWUoUGxheWVyLnBsYXllci5nZXREdXJhdGlvbigpKTtcclxuICAgICAgICAgICAgdGhpcy5wcm9ncmVzcy5zdGFydCgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBQbGF5ZXIucGxheWVyLm9uKCdlbmRlZCcsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5uZXh0VHJhY2soKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuLyogZXhwb3J0IGNsYXNzIFBsYXllciB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBwbGF5ZXI6IFlULlBsYXllcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihkb21FbElkOiBzdHJpbmcsIGNvbmZpZ09iajogYW55KSB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldEluc3RhbmNlKGRvbUVsSWQ6IHN0cmluZyk6IFlULlBsYXllciB7XHJcbiAgICAgICAgaWYgKCFQbGF5ZXIucGxheWVyKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbmZpZ09iaiA9IHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogJzM5MCcsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogJzY0MCcsXHJcbiAgICAgICAgICAgICAgICBldmVudHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAvL29uUmVhZHk6IFBsYXllci5vblJlYWR5LFxyXG4gICAgICAgICAgICAgICAgICAgIC8vb25TdGF0ZUNoYW5nZTogUGxheWVyLm9uU3RhdGVDaGFuZ2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgUGxheWVyLnBsYXllciA9IG5ldyBZVC5QbGF5ZXIoZG9tRWxJZCwgY29uZmlnT2JqKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFBsYXllci5wbGF5ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZFRyYWNrKHZpZGVvSWQ6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIFBsYXllci5wbGF5ZXIubG9hZFZpZGVvQnlJZCh2aWRlb0lkKTtcclxuICAgIH1cclxuXHJcbiAgICBwbGF5VHJhY2soKTogdm9pZCB7XHJcbiAgICAgICAgUGxheWVyLnBsYXllci5wbGF5VmlkZW8oKTtcclxuICAgIH1cclxuXHJcbiAgICBwYXVzZVRyYWNrKCk6IHZvaWQge1xyXG4gICAgICAgIFBsYXllci5wbGF5ZXIucGF1c2VWaWRlbygpO1xyXG4gICAgfVxyXG4gICAgXHJcbn0gKi9cclxuXHJcbi8qIGltcG9ydCBZb3VUdWJlUGxheWVyIGZyb20gXCJ5dC1wbGF5ZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXIge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcGxheWVyOiBZb3VUdWJlUGxheWVyO1xyXG5cclxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZShkb21FbElkOiBzdHJpbmcpIDogWW91VHViZVBsYXllciB7XHJcbiAgICAgICAgaWYgKCFQbGF5ZXIucGxheWVyKSB7XHJcbiAgICAgICAgICAgIFBsYXllci5wbGF5ZXIgPSBuZXcgWW91VHViZVBsYXllcihkb21FbElkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFBsYXllci5wbGF5ZXI7XHJcbiAgICB9XHJcbn0gKi9cclxuIiwiaW1wb3J0IHsgUGxheWVyIH0gZnJvbSAnLi9wbGF5ZXInO1xyXG5cclxuZXhwb3J0IGNsYXNzIFByb2dyZXNzQmFyIHtcclxuICAgIHByaXZhdGUgdG90YWxUaW1lOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50UG9zaXRpb246IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIHRpY2s6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIHN0YXRpYyB0aW1lcjogYW55O1xyXG4gICAgcHJpdmF0ZSBlbGVtZW50OiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIHByb2dyZXNzQmFyRWw6IEhUTUxFbGVtZW50IHwgbnVsbDtcclxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogUHJvZ3Jlc3NCYXI7XHJcblxyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcihlbGVtZW50OiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xyXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NCYXJFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZWxlbWVudCk7XHJcbiAgICAgICAgdGhpcy5fYWRkQ2xpY2tMaXN0ZW5lcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZShlbGVtZW50OiBzdHJpbmcpOiBQcm9ncmVzc0JhciB7XHJcbiAgICAgICAgaWYgKCFQcm9ncmVzc0Jhci5faW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgUHJvZ3Jlc3NCYXIuX2luc3RhbmNlID0gbmV3IFByb2dyZXNzQmFyKGVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gUHJvZ3Jlc3NCYXIuX2luc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFRpbWUodG90YWxUaW1lOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnRvdGFsVGltZSA9IHRvdGFsVGltZTtcclxuICAgICAgICB0aGlzLnRpY2sgPSB0aGlzLnRvdGFsVGltZSAvIDEwMDtcclxuICAgIH1cclxuICAgIHByaXZhdGUgdXBkYXRlKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRQb3NpdGlvbiA8IDEwMCkgeyBcclxuICAgICAgICAgICAgaWYgKHRoaXMucHJvZ3Jlc3NCYXJFbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UG9zaXRpb24gPSB0aGlzLmN1cnJlbnRQb3NpdGlvbiArIDAuMTtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NCYXJFbC5zdHlsZS53aWR0aCA9IHRoaXMuY3VycmVudFBvc2l0aW9uICsgJyUnOyBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpOiB2b2lkIHtcclxuICAgICAgICBQcm9ncmVzc0Jhci50aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGUoKTsgXHJcbiAgICAgICAgfSwgKHRoaXMudGljayAqIDEwMCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0b3AoKTogdm9pZCB7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbChQcm9ncmVzc0Jhci50aW1lcik7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UG9zaXRpb24gPSAwO1xyXG4gICAgICAgIHRoaXMudGljayA9IDA7XHJcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9hZGRDbGlja0xpc3RlbmVyKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLnByb2dyZXNzQmFyRWwgJiYgdGhpcy5wcm9ncmVzc0JhckVsLnBhcmVudEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9ncmVzc0JhckVsLnBhcmVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb2dyZXNzQmFyRWwgJiYgdGhpcy5wcm9ncmVzc0JhckVsLnBhcmVudEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWVrID0gKHRoaXMudG90YWxUaW1lIC8gdGhpcy5wcm9ncmVzc0JhckVsLnBhcmVudEVsZW1lbnQuY2xpZW50V2lkdGgpICogKGV2ZW50LnBhZ2VYIC0gMjAwKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwb3MgPSAoc2VlayAvIHRoaXMudG90YWxUaW1lKSAqIDEwMDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQb3NpdGlvbiA9IHBhcnNlRmxvYXQoKE1hdGgucm91bmQocG9zICogMTApIC8gMTApLnRvRml4ZWQoMSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIFBsYXllci5zZWVrVG8oc2Vlayk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7IFNvbmcgfSBmcm9tIFwiLi4vbW9kZWxzL3NvbmdcIjtcclxuaW1wb3J0IHsgQXBwRXZlbnQgfSBmcm9tICcuLi9zZXJ2aWNlcy9ldmVudCc7XHJcblxyXG5leHBvcnQgY2xhc3MgUXVldWUge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX3F1ZXVlOiBBcnJheTxTb25nPiA9IG5ldyBBcnJheTxTb25nPigpO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2N1cnJlbnRUcmFjayA9IC0xO1xyXG5cclxuICAgIHN0YXRpYyBxdWV1ZShzb25nOiBTb25nKTogdm9pZCB7XHJcbiAgICAgICAgUXVldWUuX3F1ZXVlLnB1c2goc29uZyk7XHJcbiAgICAgICAgQXBwRXZlbnQuZW1pdCgncXVldWUtdXBkYXRlZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBkZXF1ZXVlKCk6IFNvbmcgfCB1bmRlZmluZWQge1xyXG4gICAgICAgIEFwcEV2ZW50LmVtaXQoJ3F1ZXVlLXVwZGF0ZWQnKTtcclxuICAgICAgICByZXR1cm4gUXVldWUuX3F1ZXVlLnNoaWZ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIG5leHQoKTogU29uZyB8IHVuZGVmaW5lZCB7XHJcbiAgICAgICAgaWYgKFF1ZXVlLl9xdWV1ZVtRdWV1ZS5fY3VycmVudFRyYWNrICsgMV0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIFF1ZXVlLl9xdWV1ZVsrK1F1ZXVlLl9jdXJyZW50VHJhY2tdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBwcmV2aW91cygpOiBTb25nIHwgdW5kZWZpbmVkIHtcclxuICAgICAgICBpZiAoUXVldWUuX3F1ZXVlW1F1ZXVlLl9jdXJyZW50VHJhY2sgLSAxXSkge1xyXG4gICAgICAgICAgICByZXR1cm4gUXVldWUuX3F1ZXVlWy0tUXVldWUuX2N1cnJlbnRUcmFja107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldEN1cnJlbnRRdWV1ZSgpOiBBcnJheTxTb25nPiB7XHJcbiAgICAgICAgcmV0dXJuIFF1ZXVlLl9xdWV1ZTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgdXBkYXRlQ3VycmVudFBsYXlpbmdUcmFjayh0cmFja0lkOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBRdWV1ZS5fY3VycmVudFRyYWNrID0gUXVldWUuX3F1ZXVlLmZpbmRJbmRleChzb25nID0+IHNvbmcuZ2V0SWQoKSA9PT0gdHJhY2tJZCk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgU29uZyB7XHJcbiAgICBwcml2YXRlIGlkOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIHRodW1ibmFpbDogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGlkOiBzdHJpbmcsIHRpdGxlOiBzdHJpbmcsIGRlc2NyaXB0aW9uOiBzdHJpbmcsIHRodW1ibmFpbDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICAgICAgdGhpcy50aHVtYm5haWwgPSB0aHVtYm5haWw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldElkKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFRpdGxlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGl0bGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldERlc2NyaXB0aW9uKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb247XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFRodW1ibmFpbCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRodW1ibmFpbDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0U29uZ0Zyb21MaXN0KGxpc3Q6IEFycmF5PFNvbmc+LCBpZDogc3RyaW5nKTogU29uZyB8IG51bGwge1xyXG4gICAgICAgIGNvbnN0IGZpbHRlcmVkTGlzdCA9IGxpc3QuZmlsdGVyKHNvbmcgPT4gc29uZy5nZXRJZCgpID09PSBpZCk7XHJcbiAgICAgICAgcmV0dXJuIGZpbHRlcmVkTGlzdC5sZW5ndGggPiAwID8gZmlsdGVyZWRMaXN0WzBdOiBudWxsO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIEFwcEV2ZW50IHtcclxuICAgIHByaXZhdGUgc3RhdGljIGxpc3RlbmVyczoge1tuYW1lOiBzdHJpbmddOiBBcnJheTxGdW5jdGlvbj59ID0ge307XHJcblxyXG4gICAgc3RhdGljIGxpc3RlbihldmVudDogc3RyaW5nLCBmdW5jOiBGdW5jdGlvbik6IHZvaWQge1xyXG4gICAgICAgIGlmIChBcHBFdmVudC5saXN0ZW5lcnNbZXZlbnRdKSB7XHJcbiAgICAgICAgICAgIEFwcEV2ZW50Lmxpc3RlbmVyc1tldmVudF0ucHVzaChmdW5jKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBhcnIgPSBbXTtcclxuICAgICAgICAgICAgYXJyLnB1c2goZnVuYyk7XHJcbiAgICAgICAgICAgIEFwcEV2ZW50Lmxpc3RlbmVyc1tldmVudF0gPSBhcnI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBlbWl0KGV2ZW50OiBzdHJpbmcsIGRhdGE/OiBPYmplY3QpOiB2b2lkIHtcclxuICAgICAgICBpZiAoQXBwRXZlbnQubGlzdGVuZXJzW2V2ZW50XSkge1xyXG4gICAgICAgICAgICBBcHBFdmVudC5saXN0ZW5lcnNbZXZlbnRdLmZvckVhY2goKGZ1bmM6IEZ1bmN0aW9uKSA9PiBmdW5jKGRhdGEpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgR29vZ2xlQXV0aGVudGljYXRpb24ge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2lzQXV0aGVudGljYXRlZDogYm9vbGVhbiA9IHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdnb29nbGUtYXV0aGVudGljYXRlZCcpID09PSAndHJ1ZSc/IHRydWU6IGZhbHNlO1xyXG5cclxuICAgIHN0YXRpYyBpc0F1dGhlbnRpY2F0ZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIEdvb2dsZUF1dGhlbnRpY2F0aW9uLl9pc0F1dGhlbnRpY2F0ZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGF1dGhlbnRpY2F0ZSgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGdhcGkubG9hZCgnYXV0aDInLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgICAgICBnYXBpLmF1dGgyLmluaXQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGNsaWVudF9pZDogJzQ5NDYxNTQwMDI2Mi1mN200dXNjdDdwdGg2NGxybXVjNzZ2c2NjcDc2ZnUzYy5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSdcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2FwaS5hdXRoMi5nZXRBdXRoSW5zdGFuY2UoKS5zaWduSW4oe1xyXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlOiAnaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYXV0aC95b3V0dWJlLmZvcmNlLXNzbCdcclxuICAgICAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIEdvb2dsZUF1dGhlbnRpY2F0aW9uLl9pc0F1dGhlbnRpY2F0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdnb29nbGUtYXV0aGVudGljYXRlZCcsICd0cnVlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0F1dGhlbnRpY2F0ZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShHb29nbGVBdXRoZW50aWNhdGlvbi5sb2FkQ2xpZW50KCkpO1xyXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGxvYWRDbGllbnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgZ2FwaS5sb2FkKCdjbGllbnQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBnYXBpLmNsaWVudC5zZXRBcGlLZXkoJ0FJemFTeUREdmpCZWRyaExmMHJ0NjJja2hzMmZ3V3h0RUxjWWVVOCcpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoZ2FwaS5jbGllbnQubG9hZChcImh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2Rpc2NvdmVyeS92MS9hcGlzL3lvdXR1YmUvdjMvcmVzdFwiLCBcInYzXCIpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBHb29nbGVBdXRoZW50aWNhdGlvbiB9IGZyb20gJy4vZ29vZ2xlLWF1dGhlbnRpY2F0aW9uJztcclxuaW1wb3J0IHsgU29uZyB9IGZyb20gJy4uL21vZGVscy9zb25nJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTZWFyY2gge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgTUFYX1JFU1VMVFMgPSAxMjtcclxuXHJcbiAgICBzdGF0aWMgc2VhcmNoKHE6IHN0cmluZywgcGFydD86IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgZ2FwaS5sb2FkKCdjbGllbnQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgICAgIGlmICghZ2FwaS5jbGllbnQueW91dHViZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIEdvb2dsZUF1dGhlbnRpY2F0aW9uLmxvYWRDbGllbnQoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFNlYXJjaC5fc2VhcmNoKHEsIHBhcnQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2U6IEFycmF5PFNvbmc+KSA9PiByZXNvbHZlKFNlYXJjaC5fcHJvY2Vzc1Jlc3BvbnNlKHJlc3BvbnNlKSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTZWFyY2guX3NlYXJjaChxLCBwYXJ0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2U6IEFycmF5PFNvbmc+KSA9PiByZXNvbHZlKFNlYXJjaC5fcHJvY2Vzc1Jlc3BvbnNlKHJlc3BvbnNlKSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX3NlYXJjaChxOiBzdHJpbmcsIHBhcnQ/OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICByZXR1cm4gZ2FwaS5jbGllbnQueW91dHViZS5zZWFyY2gubGlzdCh7XHJcbiAgICAgICAgICAgIHBhcnQ6IHBhcnQgPyBwYXJ0IDogJ3NuaXBwZXQnLFxyXG4gICAgICAgICAgICBxOiBxLFxyXG4gICAgICAgICAgICB0eXBlOiAndmlkZW8nLFxyXG4gICAgICAgICAgICBtYXhSZXN1bHRzOiBTZWFyY2guTUFYX1JFU1VMVFNcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX3Byb2Nlc3NSZXNwb25zZShyZXNwb25zZTogYW55KTogT2JqZWN0IHtcclxuICAgICAgICBsZXQgcHJvY2Vzc2VkUmVzcG9uc2UgPSBuZXcgQXJyYXk8U29uZz4oKTtcclxuXHJcbiAgICAgICAgaWYgKCFyZXNwb25zZSB8fCByZXNwb25zZS5zdGF0dXMgIT09IDIwMCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge307XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyZXNwb25zZS5yZXN1bHQuaXRlbXMgJiYgcmVzcG9uc2UucmVzdWx0Lml0ZW1zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaXRlbSBvZiByZXNwb25zZS5yZXN1bHQuaXRlbXMpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgdGh1bWJuYWlsID0gJyc7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5zbmlwcGV0LnRodW1ibmFpbHMuaGlnaCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRodW1ibmFpbCA9IGl0ZW0uc25pcHBldC50aHVtYm5haWxzLmhpZ2gudXJsOyBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGl0ZW0uc25pcHBldC50aHVtYm5haWxzLm1lZGl1bSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRodW1ibmFpbCA9IGl0ZW0uc25pcHBldC50aHVtYm5haWxzLm1lZGl1bS51cmw7IFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGh1bWJuYWlsID0gaXRlbS5zbmlwcGV0LnRodW1ibmFpbHMuZGVmYXVsdC51cmw7IFxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc09iaiA9IG5ldyBTb25nKGl0ZW0uaWQudmlkZW9JZCwgaXRlbS5zbmlwcGV0LnRpdGxlLCBpdGVtLnNuaXBwZXQuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgdGh1bWJuYWlsKTtcclxuICAgICAgICAgICAgICAgIHByb2Nlc3NlZFJlc3BvbnNlLnB1c2gocmVzT2JqKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcHJvY2Vzc2VkUmVzcG9uc2U7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9