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
                                    console.log(queue_1.Queue.getCurrentQueue());
                                }
                                else {
                                    console.log('Invalid song ID : ', id);
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
    static updateCurrentPlayingTrack(trackId) {
        Queue._currentTrack = Queue._queue.findIndex(song => song.getId() === trackId);
    }
    static deleteTrack(videoId) {
        const pos = Queue._queue.findIndex(song => song.getVideoId() === videoId);
        Queue._queue.splice(pos, 1);
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


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2V2ZW50cy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvYWQtc2NyaXB0Mi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMveXQtcGxheWVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvYXBwLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29tcG9uZW50cy9wbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb21wb25lbnRzL3Byb2dlc3MtYmFyLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29tcG9uZW50cy9xdWV1ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L21vZGVscy9zb25nLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvc2VydmljZXMvZXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9zZXJ2aWNlcy9nb29nbGUtYXV0aGVudGljYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9zZXJ2aWNlcy9zZWFyY2gudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9zZXJ2aWNlcy9zdG9yYWdlLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvc2VydmljZXMvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFdBQVcscUJBQXFCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FB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dUJBQWUseUJBQWtDO0FBQ2pELHNCQUFjLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDTnhELE1BQWEsS0FBSztJQUNkLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBWTtRQUMxQixJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQztRQUNsQyxNQUFNLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDOUIsTUFBTSxNQUFNLEdBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQztRQUMvQyxNQUFNLE1BQU0sR0FBRyxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDO1FBQy9DLE9BQU8sTUFBTSxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUM7SUFDakMsQ0FBQztDQUNKO0FBVEQsc0JBU0MiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvY2xpZW50L2FwcC50c1wiKTtcbiIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSID0gdHlwZW9mIFJlZmxlY3QgPT09ICdvYmplY3QnID8gUmVmbGVjdCA6IG51bGxcbnZhciBSZWZsZWN0QXBwbHkgPSBSICYmIHR5cGVvZiBSLmFwcGx5ID09PSAnZnVuY3Rpb24nXG4gID8gUi5hcHBseVxuICA6IGZ1bmN0aW9uIFJlZmxlY3RBcHBseSh0YXJnZXQsIHJlY2VpdmVyLCBhcmdzKSB7XG4gICAgcmV0dXJuIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKHRhcmdldCwgcmVjZWl2ZXIsIGFyZ3MpO1xuICB9XG5cbnZhciBSZWZsZWN0T3duS2V5c1xuaWYgKFIgJiYgdHlwZW9mIFIub3duS2V5cyA9PT0gJ2Z1bmN0aW9uJykge1xuICBSZWZsZWN0T3duS2V5cyA9IFIub3duS2V5c1xufSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gIFJlZmxlY3RPd25LZXlzID0gZnVuY3Rpb24gUmVmbGVjdE93bktleXModGFyZ2V0KSB7XG4gICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRhcmdldClcbiAgICAgIC5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyh0YXJnZXQpKTtcbiAgfTtcbn0gZWxzZSB7XG4gIFJlZmxlY3RPd25LZXlzID0gZnVuY3Rpb24gUmVmbGVjdE93bktleXModGFyZ2V0KSB7XG4gICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRhcmdldCk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIFByb2Nlc3NFbWl0V2FybmluZyh3YXJuaW5nKSB7XG4gIGlmIChjb25zb2xlICYmIGNvbnNvbGUud2FybikgY29uc29sZS53YXJuKHdhcm5pbmcpO1xufVxuXG52YXIgTnVtYmVySXNOYU4gPSBOdW1iZXIuaXNOYU4gfHwgZnVuY3Rpb24gTnVtYmVySXNOYU4odmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9PSB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gRXZlbnRFbWl0dGVyKCkge1xuICBFdmVudEVtaXR0ZXIuaW5pdC5jYWxsKHRoaXMpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBFdmVudEVtaXR0ZXI7XG5cbi8vIEJhY2t3YXJkcy1jb21wYXQgd2l0aCBub2RlIDAuMTAueFxuRXZlbnRFbWl0dGVyLkV2ZW50RW1pdHRlciA9IEV2ZW50RW1pdHRlcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fZXZlbnRzID0gdW5kZWZpbmVkO1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fZXZlbnRzQ291bnQgPSAwO1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fbWF4TGlzdGVuZXJzID0gdW5kZWZpbmVkO1xuXG4vLyBCeSBkZWZhdWx0IEV2ZW50RW1pdHRlcnMgd2lsbCBwcmludCBhIHdhcm5pbmcgaWYgbW9yZSB0aGFuIDEwIGxpc3RlbmVycyBhcmVcbi8vIGFkZGVkIHRvIGl0LiBUaGlzIGlzIGEgdXNlZnVsIGRlZmF1bHQgd2hpY2ggaGVscHMgZmluZGluZyBtZW1vcnkgbGVha3MuXG52YXIgZGVmYXVsdE1heExpc3RlbmVycyA9IDEwO1xuXG5mdW5jdGlvbiBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKSB7XG4gIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgXCJsaXN0ZW5lclwiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBGdW5jdGlvbi4gUmVjZWl2ZWQgdHlwZSAnICsgdHlwZW9mIGxpc3RlbmVyKTtcbiAgfVxufVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoRXZlbnRFbWl0dGVyLCAnZGVmYXVsdE1heExpc3RlbmVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZGVmYXVsdE1heExpc3RlbmVycztcbiAgfSxcbiAgc2V0OiBmdW5jdGlvbihhcmcpIHtcbiAgICBpZiAodHlwZW9mIGFyZyAhPT0gJ251bWJlcicgfHwgYXJnIDwgMCB8fCBOdW1iZXJJc05hTihhcmcpKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVGhlIHZhbHVlIG9mIFwiZGVmYXVsdE1heExpc3RlbmVyc1wiIGlzIG91dCBvZiByYW5nZS4gSXQgbXVzdCBiZSBhIG5vbi1uZWdhdGl2ZSBudW1iZXIuIFJlY2VpdmVkICcgKyBhcmcgKyAnLicpO1xuICAgIH1cbiAgICBkZWZhdWx0TWF4TGlzdGVuZXJzID0gYXJnO1xuICB9XG59KTtcblxuRXZlbnRFbWl0dGVyLmluaXQgPSBmdW5jdGlvbigpIHtcblxuICBpZiAodGhpcy5fZXZlbnRzID09PSB1bmRlZmluZWQgfHxcbiAgICAgIHRoaXMuX2V2ZW50cyA9PT0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpLl9ldmVudHMpIHtcbiAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHRoaXMuX2V2ZW50c0NvdW50ID0gMDtcbiAgfVxuXG4gIHRoaXMuX21heExpc3RlbmVycyA9IHRoaXMuX21heExpc3RlbmVycyB8fCB1bmRlZmluZWQ7XG59O1xuXG4vLyBPYnZpb3VzbHkgbm90IGFsbCBFbWl0dGVycyBzaG91bGQgYmUgbGltaXRlZCB0byAxMC4gVGhpcyBmdW5jdGlvbiBhbGxvd3Ncbi8vIHRoYXQgdG8gYmUgaW5jcmVhc2VkLiBTZXQgdG8gemVybyBmb3IgdW5saW1pdGVkLlxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5zZXRNYXhMaXN0ZW5lcnMgPSBmdW5jdGlvbiBzZXRNYXhMaXN0ZW5lcnMobikge1xuICBpZiAodHlwZW9mIG4gIT09ICdudW1iZXInIHx8IG4gPCAwIHx8IE51bWJlcklzTmFOKG4pKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RoZSB2YWx1ZSBvZiBcIm5cIiBpcyBvdXQgb2YgcmFuZ2UuIEl0IG11c3QgYmUgYSBub24tbmVnYXRpdmUgbnVtYmVyLiBSZWNlaXZlZCAnICsgbiArICcuJyk7XG4gIH1cbiAgdGhpcy5fbWF4TGlzdGVuZXJzID0gbjtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5mdW5jdGlvbiBfZ2V0TWF4TGlzdGVuZXJzKHRoYXQpIHtcbiAgaWYgKHRoYXQuX21heExpc3RlbmVycyA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBFdmVudEVtaXR0ZXIuZGVmYXVsdE1heExpc3RlbmVycztcbiAgcmV0dXJuIHRoYXQuX21heExpc3RlbmVycztcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5nZXRNYXhMaXN0ZW5lcnMgPSBmdW5jdGlvbiBnZXRNYXhMaXN0ZW5lcnMoKSB7XG4gIHJldHVybiBfZ2V0TWF4TGlzdGVuZXJzKHRoaXMpO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24gZW1pdCh0eXBlKSB7XG4gIHZhciBhcmdzID0gW107XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSBhcmdzLnB1c2goYXJndW1lbnRzW2ldKTtcbiAgdmFyIGRvRXJyb3IgPSAodHlwZSA9PT0gJ2Vycm9yJyk7XG5cbiAgdmFyIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcbiAgaWYgKGV2ZW50cyAhPT0gdW5kZWZpbmVkKVxuICAgIGRvRXJyb3IgPSAoZG9FcnJvciAmJiBldmVudHMuZXJyb3IgPT09IHVuZGVmaW5lZCk7XG4gIGVsc2UgaWYgKCFkb0Vycm9yKVxuICAgIHJldHVybiBmYWxzZTtcblxuICAvLyBJZiB0aGVyZSBpcyBubyAnZXJyb3InIGV2ZW50IGxpc3RlbmVyIHRoZW4gdGhyb3cuXG4gIGlmIChkb0Vycm9yKSB7XG4gICAgdmFyIGVyO1xuICAgIGlmIChhcmdzLmxlbmd0aCA+IDApXG4gICAgICBlciA9IGFyZ3NbMF07XG4gICAgaWYgKGVyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgIC8vIE5vdGU6IFRoZSBjb21tZW50cyBvbiB0aGUgYHRocm93YCBsaW5lcyBhcmUgaW50ZW50aW9uYWwsIHRoZXkgc2hvd1xuICAgICAgLy8gdXAgaW4gTm9kZSdzIG91dHB1dCBpZiB0aGlzIHJlc3VsdHMgaW4gYW4gdW5oYW5kbGVkIGV4Y2VwdGlvbi5cbiAgICAgIHRocm93IGVyOyAvLyBVbmhhbmRsZWQgJ2Vycm9yJyBldmVudFxuICAgIH1cbiAgICAvLyBBdCBsZWFzdCBnaXZlIHNvbWUga2luZCBvZiBjb250ZXh0IHRvIHRoZSB1c2VyXG4gICAgdmFyIGVyciA9IG5ldyBFcnJvcignVW5oYW5kbGVkIGVycm9yLicgKyAoZXIgPyAnICgnICsgZXIubWVzc2FnZSArICcpJyA6ICcnKSk7XG4gICAgZXJyLmNvbnRleHQgPSBlcjtcbiAgICB0aHJvdyBlcnI7IC8vIFVuaGFuZGxlZCAnZXJyb3InIGV2ZW50XG4gIH1cblxuICB2YXIgaGFuZGxlciA9IGV2ZW50c1t0eXBlXTtcblxuICBpZiAoaGFuZGxlciA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBmYWxzZTtcblxuICBpZiAodHlwZW9mIGhhbmRsZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICBSZWZsZWN0QXBwbHkoaGFuZGxlciwgdGhpcywgYXJncyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGxlbiA9IGhhbmRsZXIubGVuZ3RoO1xuICAgIHZhciBsaXN0ZW5lcnMgPSBhcnJheUNsb25lKGhhbmRsZXIsIGxlbik7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47ICsraSlcbiAgICAgIFJlZmxlY3RBcHBseShsaXN0ZW5lcnNbaV0sIHRoaXMsIGFyZ3MpO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5mdW5jdGlvbiBfYWRkTGlzdGVuZXIodGFyZ2V0LCB0eXBlLCBsaXN0ZW5lciwgcHJlcGVuZCkge1xuICB2YXIgbTtcbiAgdmFyIGV2ZW50cztcbiAgdmFyIGV4aXN0aW5nO1xuXG4gIGNoZWNrTGlzdGVuZXIobGlzdGVuZXIpO1xuXG4gIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzO1xuICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpIHtcbiAgICBldmVudHMgPSB0YXJnZXQuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgdGFyZ2V0Ll9ldmVudHNDb3VudCA9IDA7XG4gIH0gZWxzZSB7XG4gICAgLy8gVG8gYXZvaWQgcmVjdXJzaW9uIGluIHRoZSBjYXNlIHRoYXQgdHlwZSA9PT0gXCJuZXdMaXN0ZW5lclwiISBCZWZvcmVcbiAgICAvLyBhZGRpbmcgaXQgdG8gdGhlIGxpc3RlbmVycywgZmlyc3QgZW1pdCBcIm5ld0xpc3RlbmVyXCIuXG4gICAgaWYgKGV2ZW50cy5uZXdMaXN0ZW5lciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0YXJnZXQuZW1pdCgnbmV3TGlzdGVuZXInLCB0eXBlLFxuICAgICAgICAgICAgICAgICAgbGlzdGVuZXIubGlzdGVuZXIgPyBsaXN0ZW5lci5saXN0ZW5lciA6IGxpc3RlbmVyKTtcblxuICAgICAgLy8gUmUtYXNzaWduIGBldmVudHNgIGJlY2F1c2UgYSBuZXdMaXN0ZW5lciBoYW5kbGVyIGNvdWxkIGhhdmUgY2F1c2VkIHRoZVxuICAgICAgLy8gdGhpcy5fZXZlbnRzIHRvIGJlIGFzc2lnbmVkIHRvIGEgbmV3IG9iamVjdFxuICAgICAgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHM7XG4gICAgfVxuICAgIGV4aXN0aW5nID0gZXZlbnRzW3R5cGVdO1xuICB9XG5cbiAgaWYgKGV4aXN0aW5nID09PSB1bmRlZmluZWQpIHtcbiAgICAvLyBPcHRpbWl6ZSB0aGUgY2FzZSBvZiBvbmUgbGlzdGVuZXIuIERvbid0IG5lZWQgdGhlIGV4dHJhIGFycmF5IG9iamVjdC5cbiAgICBleGlzdGluZyA9IGV2ZW50c1t0eXBlXSA9IGxpc3RlbmVyO1xuICAgICsrdGFyZ2V0Ll9ldmVudHNDb3VudDtcbiAgfSBlbHNlIHtcbiAgICBpZiAodHlwZW9mIGV4aXN0aW5nID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyBBZGRpbmcgdGhlIHNlY29uZCBlbGVtZW50LCBuZWVkIHRvIGNoYW5nZSB0byBhcnJheS5cbiAgICAgIGV4aXN0aW5nID0gZXZlbnRzW3R5cGVdID1cbiAgICAgICAgcHJlcGVuZCA/IFtsaXN0ZW5lciwgZXhpc3RpbmddIDogW2V4aXN0aW5nLCBsaXN0ZW5lcl07XG4gICAgICAvLyBJZiB3ZSd2ZSBhbHJlYWR5IGdvdCBhbiBhcnJheSwganVzdCBhcHBlbmQuXG4gICAgfSBlbHNlIGlmIChwcmVwZW5kKSB7XG4gICAgICBleGlzdGluZy51bnNoaWZ0KGxpc3RlbmVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXhpc3RpbmcucHVzaChsaXN0ZW5lcik7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgZm9yIGxpc3RlbmVyIGxlYWtcbiAgICBtID0gX2dldE1heExpc3RlbmVycyh0YXJnZXQpO1xuICAgIGlmIChtID4gMCAmJiBleGlzdGluZy5sZW5ndGggPiBtICYmICFleGlzdGluZy53YXJuZWQpIHtcbiAgICAgIGV4aXN0aW5nLndhcm5lZCA9IHRydWU7XG4gICAgICAvLyBObyBlcnJvciBjb2RlIGZvciB0aGlzIHNpbmNlIGl0IGlzIGEgV2FybmluZ1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG4gICAgICB2YXIgdyA9IG5ldyBFcnJvcignUG9zc2libGUgRXZlbnRFbWl0dGVyIG1lbW9yeSBsZWFrIGRldGVjdGVkLiAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmcubGVuZ3RoICsgJyAnICsgU3RyaW5nKHR5cGUpICsgJyBsaXN0ZW5lcnMgJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdhZGRlZC4gVXNlIGVtaXR0ZXIuc2V0TWF4TGlzdGVuZXJzKCkgdG8gJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdpbmNyZWFzZSBsaW1pdCcpO1xuICAgICAgdy5uYW1lID0gJ01heExpc3RlbmVyc0V4Y2VlZGVkV2FybmluZyc7XG4gICAgICB3LmVtaXR0ZXIgPSB0YXJnZXQ7XG4gICAgICB3LnR5cGUgPSB0eXBlO1xuICAgICAgdy5jb3VudCA9IGV4aXN0aW5nLmxlbmd0aDtcbiAgICAgIFByb2Nlc3NFbWl0V2FybmluZyh3KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyID0gZnVuY3Rpb24gYWRkTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgcmV0dXJuIF9hZGRMaXN0ZW5lcih0aGlzLCB0eXBlLCBsaXN0ZW5lciwgZmFsc2UpO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbiA9IEV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucHJlcGVuZExpc3RlbmVyID1cbiAgICBmdW5jdGlvbiBwcmVwZW5kTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgIHJldHVybiBfYWRkTGlzdGVuZXIodGhpcywgdHlwZSwgbGlzdGVuZXIsIHRydWUpO1xuICAgIH07XG5cbmZ1bmN0aW9uIG9uY2VXcmFwcGVyKCkge1xuICBpZiAoIXRoaXMuZmlyZWQpIHtcbiAgICB0aGlzLnRhcmdldC5yZW1vdmVMaXN0ZW5lcih0aGlzLnR5cGUsIHRoaXMud3JhcEZuKTtcbiAgICB0aGlzLmZpcmVkID0gdHJ1ZTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMClcbiAgICAgIHJldHVybiB0aGlzLmxpc3RlbmVyLmNhbGwodGhpcy50YXJnZXQpO1xuICAgIHJldHVybiB0aGlzLmxpc3RlbmVyLmFwcGx5KHRoaXMudGFyZ2V0LCBhcmd1bWVudHMpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9vbmNlV3JhcCh0YXJnZXQsIHR5cGUsIGxpc3RlbmVyKSB7XG4gIHZhciBzdGF0ZSA9IHsgZmlyZWQ6IGZhbHNlLCB3cmFwRm46IHVuZGVmaW5lZCwgdGFyZ2V0OiB0YXJnZXQsIHR5cGU6IHR5cGUsIGxpc3RlbmVyOiBsaXN0ZW5lciB9O1xuICB2YXIgd3JhcHBlZCA9IG9uY2VXcmFwcGVyLmJpbmQoc3RhdGUpO1xuICB3cmFwcGVkLmxpc3RlbmVyID0gbGlzdGVuZXI7XG4gIHN0YXRlLndyYXBGbiA9IHdyYXBwZWQ7XG4gIHJldHVybiB3cmFwcGVkO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbiBvbmNlKHR5cGUsIGxpc3RlbmVyKSB7XG4gIGNoZWNrTGlzdGVuZXIobGlzdGVuZXIpO1xuICB0aGlzLm9uKHR5cGUsIF9vbmNlV3JhcCh0aGlzLCB0eXBlLCBsaXN0ZW5lcikpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucHJlcGVuZE9uY2VMaXN0ZW5lciA9XG4gICAgZnVuY3Rpb24gcHJlcGVuZE9uY2VMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICAgICAgY2hlY2tMaXN0ZW5lcihsaXN0ZW5lcik7XG4gICAgICB0aGlzLnByZXBlbmRMaXN0ZW5lcih0eXBlLCBfb25jZVdyYXAodGhpcywgdHlwZSwgbGlzdGVuZXIpKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbi8vIEVtaXRzIGEgJ3JlbW92ZUxpc3RlbmVyJyBldmVudCBpZiBhbmQgb25seSBpZiB0aGUgbGlzdGVuZXIgd2FzIHJlbW92ZWQuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID1cbiAgICBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICAgICAgdmFyIGxpc3QsIGV2ZW50cywgcG9zaXRpb24sIGksIG9yaWdpbmFsTGlzdGVuZXI7XG5cbiAgICAgIGNoZWNrTGlzdGVuZXIobGlzdGVuZXIpO1xuXG4gICAgICBldmVudHMgPSB0aGlzLl9ldmVudHM7XG4gICAgICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICBsaXN0ID0gZXZlbnRzW3R5cGVdO1xuICAgICAgaWYgKGxpc3QgPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgIGlmIChsaXN0ID09PSBsaXN0ZW5lciB8fCBsaXN0Lmxpc3RlbmVyID09PSBsaXN0ZW5lcikge1xuICAgICAgICBpZiAoLS10aGlzLl9ldmVudHNDb3VudCA9PT0gMClcbiAgICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBkZWxldGUgZXZlbnRzW3R5cGVdO1xuICAgICAgICAgIGlmIChldmVudHMucmVtb3ZlTGlzdGVuZXIpXG4gICAgICAgICAgICB0aGlzLmVtaXQoJ3JlbW92ZUxpc3RlbmVyJywgdHlwZSwgbGlzdC5saXN0ZW5lciB8fCBsaXN0ZW5lcik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGxpc3QgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcG9zaXRpb24gPSAtMTtcblxuICAgICAgICBmb3IgKGkgPSBsaXN0Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgaWYgKGxpc3RbaV0gPT09IGxpc3RlbmVyIHx8IGxpc3RbaV0ubGlzdGVuZXIgPT09IGxpc3RlbmVyKSB7XG4gICAgICAgICAgICBvcmlnaW5hbExpc3RlbmVyID0gbGlzdFtpXS5saXN0ZW5lcjtcbiAgICAgICAgICAgIHBvc2l0aW9uID0gaTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwb3NpdGlvbiA8IDApXG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgICAgaWYgKHBvc2l0aW9uID09PSAwKVxuICAgICAgICAgIGxpc3Quc2hpZnQoKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgc3BsaWNlT25lKGxpc3QsIHBvc2l0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChsaXN0Lmxlbmd0aCA9PT0gMSlcbiAgICAgICAgICBldmVudHNbdHlwZV0gPSBsaXN0WzBdO1xuXG4gICAgICAgIGlmIChldmVudHMucmVtb3ZlTGlzdGVuZXIgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICB0aGlzLmVtaXQoJ3JlbW92ZUxpc3RlbmVyJywgdHlwZSwgb3JpZ2luYWxMaXN0ZW5lciB8fCBsaXN0ZW5lcik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub2ZmID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVBbGxMaXN0ZW5lcnMgPVxuICAgIGZ1bmN0aW9uIHJlbW92ZUFsbExpc3RlbmVycyh0eXBlKSB7XG4gICAgICB2YXIgbGlzdGVuZXJzLCBldmVudHMsIGk7XG5cbiAgICAgIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcbiAgICAgIGlmIChldmVudHMgPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgIC8vIG5vdCBsaXN0ZW5pbmcgZm9yIHJlbW92ZUxpc3RlbmVyLCBubyBuZWVkIHRvIGVtaXRcbiAgICAgIGlmIChldmVudHMucmVtb3ZlTGlzdGVuZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgICAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50c1t0eXBlXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgaWYgKC0tdGhpcy5fZXZlbnRzQ291bnQgPT09IDApXG4gICAgICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIGRlbGV0ZSBldmVudHNbdHlwZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIC8vIGVtaXQgcmVtb3ZlTGlzdGVuZXIgZm9yIGFsbCBsaXN0ZW5lcnMgb24gYWxsIGV2ZW50c1xuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhldmVudHMpO1xuICAgICAgICB2YXIga2V5O1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgIGtleSA9IGtleXNbaV07XG4gICAgICAgICAgaWYgKGtleSA9PT0gJ3JlbW92ZUxpc3RlbmVyJykgY29udGludWU7XG4gICAgICAgICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoa2V5KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycygncmVtb3ZlTGlzdGVuZXInKTtcbiAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgbGlzdGVuZXJzID0gZXZlbnRzW3R5cGVdO1xuXG4gICAgICBpZiAodHlwZW9mIGxpc3RlbmVycyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVycyk7XG4gICAgICB9IGVsc2UgaWYgKGxpc3RlbmVycyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vIExJRk8gb3JkZXJcbiAgICAgICAgZm9yIChpID0gbGlzdGVuZXJzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcnNbaV0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbmZ1bmN0aW9uIF9saXN0ZW5lcnModGFyZ2V0LCB0eXBlLCB1bndyYXApIHtcbiAgdmFyIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzO1xuXG4gIGlmIChldmVudHMgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gW107XG5cbiAgdmFyIGV2bGlzdGVuZXIgPSBldmVudHNbdHlwZV07XG4gIGlmIChldmxpc3RlbmVyID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIFtdO1xuXG4gIGlmICh0eXBlb2YgZXZsaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJylcbiAgICByZXR1cm4gdW53cmFwID8gW2V2bGlzdGVuZXIubGlzdGVuZXIgfHwgZXZsaXN0ZW5lcl0gOiBbZXZsaXN0ZW5lcl07XG5cbiAgcmV0dXJuIHVud3JhcCA/XG4gICAgdW53cmFwTGlzdGVuZXJzKGV2bGlzdGVuZXIpIDogYXJyYXlDbG9uZShldmxpc3RlbmVyLCBldmxpc3RlbmVyLmxlbmd0aCk7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJzID0gZnVuY3Rpb24gbGlzdGVuZXJzKHR5cGUpIHtcbiAgcmV0dXJuIF9saXN0ZW5lcnModGhpcywgdHlwZSwgdHJ1ZSk7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJhd0xpc3RlbmVycyA9IGZ1bmN0aW9uIHJhd0xpc3RlbmVycyh0eXBlKSB7XG4gIHJldHVybiBfbGlzdGVuZXJzKHRoaXMsIHR5cGUsIGZhbHNlKTtcbn07XG5cbkV2ZW50RW1pdHRlci5saXN0ZW5lckNvdW50ID0gZnVuY3Rpb24oZW1pdHRlciwgdHlwZSkge1xuICBpZiAodHlwZW9mIGVtaXR0ZXIubGlzdGVuZXJDb3VudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBlbWl0dGVyLmxpc3RlbmVyQ291bnQodHlwZSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGxpc3RlbmVyQ291bnQuY2FsbChlbWl0dGVyLCB0eXBlKTtcbiAgfVxufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lckNvdW50ID0gbGlzdGVuZXJDb3VudDtcbmZ1bmN0aW9uIGxpc3RlbmVyQ291bnQodHlwZSkge1xuICB2YXIgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuXG4gIGlmIChldmVudHMgIT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBldmxpc3RlbmVyID0gZXZlbnRzW3R5cGVdO1xuXG4gICAgaWYgKHR5cGVvZiBldmxpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9IGVsc2UgaWYgKGV2bGlzdGVuZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGV2bGlzdGVuZXIubGVuZ3RoO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAwO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmV2ZW50TmFtZXMgPSBmdW5jdGlvbiBldmVudE5hbWVzKCkge1xuICByZXR1cm4gdGhpcy5fZXZlbnRzQ291bnQgPiAwID8gUmVmbGVjdE93bktleXModGhpcy5fZXZlbnRzKSA6IFtdO1xufTtcblxuZnVuY3Rpb24gYXJyYXlDbG9uZShhcnIsIG4pIHtcbiAgdmFyIGNvcHkgPSBuZXcgQXJyYXkobik7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbjsgKytpKVxuICAgIGNvcHlbaV0gPSBhcnJbaV07XG4gIHJldHVybiBjb3B5O1xufVxuXG5mdW5jdGlvbiBzcGxpY2VPbmUobGlzdCwgaW5kZXgpIHtcbiAgZm9yICg7IGluZGV4ICsgMSA8IGxpc3QubGVuZ3RoOyBpbmRleCsrKVxuICAgIGxpc3RbaW5kZXhdID0gbGlzdFtpbmRleCArIDFdO1xuICBsaXN0LnBvcCgpO1xufVxuXG5mdW5jdGlvbiB1bndyYXBMaXN0ZW5lcnMoYXJyKSB7XG4gIHZhciByZXQgPSBuZXcgQXJyYXkoYXJyLmxlbmd0aCk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcmV0Lmxlbmd0aDsgKytpKSB7XG4gICAgcmV0W2ldID0gYXJyW2ldLmxpc3RlbmVyIHx8IGFycltpXTtcbiAgfVxuICByZXR1cm4gcmV0O1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBsb2FkU2NyaXB0MiAoc3JjLCBhdHRycywgcGFyZW50Tm9kZSkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpXG4gICAgc2NyaXB0LmFzeW5jID0gdHJ1ZVxuICAgIHNjcmlwdC5zcmMgPSBzcmNcblxuICAgIGZvciAoY29uc3QgW2ssIHZdIG9mIE9iamVjdC5lbnRyaWVzKGF0dHJzIHx8IHt9KSkge1xuICAgICAgc2NyaXB0LnNldEF0dHJpYnV0ZShrLCB2KVxuICAgIH1cblxuICAgIHNjcmlwdC5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICBzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBudWxsXG4gICAgICByZXNvbHZlKHNjcmlwdClcbiAgICB9XG5cbiAgICBzY3JpcHQub25lcnJvciA9ICgpID0+IHtcbiAgICAgIHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG51bGxcbiAgICAgIHJlamVjdChuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkICR7c3JjfWApKVxuICAgIH1cblxuICAgIGNvbnN0IG5vZGUgPSBwYXJlbnROb2RlIHx8IGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXVxuICAgIG5vZGUuYXBwZW5kQ2hpbGQoc2NyaXB0KVxuICB9KVxufVxuIiwiY29uc3QgRXZlbnRFbWl0dGVyID0gcmVxdWlyZSgnZXZlbnRzJykuRXZlbnRFbWl0dGVyXG5jb25zdCBsb2FkU2NyaXB0ID0gcmVxdWlyZSgnbG9hZC1zY3JpcHQyJylcblxuY29uc3QgWU9VVFVCRV9JRlJBTUVfQVBJX1NSQyA9ICdodHRwczovL3d3dy55b3V0dWJlLmNvbS9pZnJhbWVfYXBpJ1xuXG5jb25zdCBZT1VUVUJFX1NUQVRFUyA9IHtcbiAgJy0xJzogJ3Vuc3RhcnRlZCcsXG4gIDA6ICdlbmRlZCcsXG4gIDE6ICdwbGF5aW5nJyxcbiAgMjogJ3BhdXNlZCcsXG4gIDM6ICdidWZmZXJpbmcnLFxuICA1OiAnY3VlZCdcbn1cblxuY29uc3QgWU9VVFVCRV9FUlJPUiA9IHtcbiAgLy8gVGhlIHJlcXVlc3QgY29udGFpbnMgYW4gaW52YWxpZCBwYXJhbWV0ZXIgdmFsdWUuIEZvciBleGFtcGxlLCB0aGlzIGVycm9yXG4gIC8vIG9jY3VycyBpZiB5b3Ugc3BlY2lmeSBhIHZpZGVvSWQgdGhhdCBkb2VzIG5vdCBoYXZlIDExIGNoYXJhY3RlcnMsIG9yIGlmIHRoZVxuICAvLyB2aWRlb0lkIGNvbnRhaW5zIGludmFsaWQgY2hhcmFjdGVycywgc3VjaCBhcyBleGNsYW1hdGlvbiBwb2ludHMgb3IgYXN0ZXJpc2tzLlxuICBJTlZBTElEX1BBUkFNOiAyLFxuXG4gIC8vIFRoZSByZXF1ZXN0ZWQgY29udGVudCBjYW5ub3QgYmUgcGxheWVkIGluIGFuIEhUTUw1IHBsYXllciBvciBhbm90aGVyIGVycm9yXG4gIC8vIHJlbGF0ZWQgdG8gdGhlIEhUTUw1IHBsYXllciBoYXMgb2NjdXJyZWQuXG4gIEhUTUw1X0VSUk9SOiA1LFxuXG4gIC8vIFRoZSB2aWRlbyByZXF1ZXN0ZWQgd2FzIG5vdCBmb3VuZC4gVGhpcyBlcnJvciBvY2N1cnMgd2hlbiBhIHZpZGVvIGhhcyBiZWVuXG4gIC8vIHJlbW92ZWQgKGZvciBhbnkgcmVhc29uKSBvciBoYXMgYmVlbiBtYXJrZWQgYXMgcHJpdmF0ZS5cbiAgTk9UX0ZPVU5EOiAxMDAsXG5cbiAgLy8gVGhlIG93bmVyIG9mIHRoZSByZXF1ZXN0ZWQgdmlkZW8gZG9lcyBub3QgYWxsb3cgaXQgdG8gYmUgcGxheWVkIGluIGVtYmVkZGVkXG4gIC8vIHBsYXllcnMuXG4gIFVOUExBWUFCTEVfMTogMTAxLFxuXG4gIC8vIFRoaXMgZXJyb3IgaXMgdGhlIHNhbWUgYXMgMTAxLiBJdCdzIGp1c3QgYSAxMDEgZXJyb3IgaW4gZGlzZ3Vpc2UhXG4gIFVOUExBWUFCTEVfMjogMTUwXG59XG5cbmNvbnN0IGxvYWRJZnJhbWVBUElDYWxsYmFja3MgPSBbXVxuXG4vKipcbiAqIFlvdVR1YmUgUGxheWVyLiBFeHBvc2VzIGEgYmV0dGVyIEFQSSwgd2l0aCBuaWNlciBldmVudHMuXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fHNlbGVjdG9yfSBlbGVtZW50XG4gKi9cbmNsYXNzIFlvdVR1YmVQbGF5ZXIgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAoZWxlbWVudCwgb3B0cykge1xuICAgIHN1cGVyKClcblxuICAgIGNvbnN0IGVsZW0gPSB0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZydcbiAgICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtZW50KVxuICAgICAgOiBlbGVtZW50XG5cbiAgICBpZiAoZWxlbS5pZCkge1xuICAgICAgdGhpcy5faWQgPSBlbGVtLmlkIC8vIHVzZSBleGlzdGluZyBlbGVtZW50IGlkXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2lkID0gZWxlbS5pZCA9ICd5dHBsYXllci0nICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygxNikuc2xpY2UoMiwgOClcbiAgICB9XG5cbiAgICB0aGlzLl9vcHRzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICB3aWR0aDogNjQwLFxuICAgICAgaGVpZ2h0OiAzNjAsXG4gICAgICBhdXRvcGxheTogZmFsc2UsXG4gICAgICBjYXB0aW9uczogdW5kZWZpbmVkLFxuICAgICAgY29udHJvbHM6IHRydWUsXG4gICAgICBrZXlib2FyZDogdHJ1ZSxcbiAgICAgIGZ1bGxzY3JlZW46IHRydWUsXG4gICAgICBhbm5vdGF0aW9uczogdHJ1ZSxcbiAgICAgIG1vZGVzdEJyYW5kaW5nOiBmYWxzZSxcbiAgICAgIHJlbGF0ZWQ6IHRydWUsXG4gICAgICB0aW1ldXBkYXRlRnJlcXVlbmN5OiAxMDAwLFxuICAgICAgcGxheXNJbmxpbmU6IHRydWVcbiAgICB9LCBvcHRzKVxuXG4gICAgdGhpcy52aWRlb0lkID0gbnVsbFxuICAgIHRoaXMuZGVzdHJveWVkID0gZmFsc2VcblxuICAgIHRoaXMuX2FwaSA9IG51bGxcbiAgICB0aGlzLl9hdXRvcGxheSA9IGZhbHNlIC8vIGF1dG9wbGF5IHRoZSBmaXJzdCB2aWRlbz9cbiAgICB0aGlzLl9wbGF5ZXIgPSBudWxsXG4gICAgdGhpcy5fcmVhZHkgPSBmYWxzZSAvLyBpcyBwbGF5ZXIgcmVhZHk/XG4gICAgdGhpcy5fcXVldWUgPSBbXVxuXG4gICAgdGhpcy5faW50ZXJ2YWwgPSBudWxsXG5cbiAgICAvLyBTZXR1cCBsaXN0ZW5lcnMgZm9yICd0aW1ldXBkYXRlJyBldmVudHMuIFRoZSBZb3VUdWJlIFBsYXllciBkb2VzIG5vdCBmaXJlXG4gICAgLy8gJ3RpbWV1cGRhdGUnIGV2ZW50cywgc28gdGhleSBhcmUgc2ltdWxhdGVkIHVzaW5nIGEgc2V0SW50ZXJ2YWwoKS5cbiAgICB0aGlzLl9zdGFydEludGVydmFsID0gdGhpcy5fc3RhcnRJbnRlcnZhbC5iaW5kKHRoaXMpXG4gICAgdGhpcy5fc3RvcEludGVydmFsID0gdGhpcy5fc3RvcEludGVydmFsLmJpbmQodGhpcylcblxuICAgIHRoaXMub24oJ3BsYXlpbmcnLCB0aGlzLl9zdGFydEludGVydmFsKVxuICAgIHRoaXMub24oJ3Vuc3RhcnRlZCcsIHRoaXMuX3N0b3BJbnRlcnZhbClcbiAgICB0aGlzLm9uKCdlbmRlZCcsIHRoaXMuX3N0b3BJbnRlcnZhbClcbiAgICB0aGlzLm9uKCdwYXVzZWQnLCB0aGlzLl9zdG9wSW50ZXJ2YWwpXG4gICAgdGhpcy5vbignYnVmZmVyaW5nJywgdGhpcy5fc3RvcEludGVydmFsKVxuXG4gICAgdGhpcy5fbG9hZElmcmFtZUFQSSgoZXJyLCBhcGkpID0+IHtcbiAgICAgIGlmIChlcnIpIHJldHVybiB0aGlzLl9kZXN0cm95KG5ldyBFcnJvcignWW91VHViZSBJZnJhbWUgQVBJIGZhaWxlZCB0byBsb2FkJykpXG4gICAgICB0aGlzLl9hcGkgPSBhcGlcblxuICAgICAgLy8gSWYgbG9hZCh2aWRlb0lkLCBbYXV0b3BsYXldKSB3YXMgY2FsbGVkIGJlZm9yZSBJZnJhbWUgQVBJIGxvYWRlZCwgZW5zdXJlIGl0IGdldHNcbiAgICAgIC8vIGNhbGxlZCBhZ2FpbiBub3dcbiAgICAgIGlmICh0aGlzLnZpZGVvSWQpIHRoaXMubG9hZCh0aGlzLnZpZGVvSWQsIHRoaXMuX2F1dG9wbGF5KVxuICAgIH0pXG4gIH1cblxuICBsb2FkICh2aWRlb0lkLCBhdXRvcGxheSA9IGZhbHNlKSB7XG4gICAgaWYgKHRoaXMuZGVzdHJveWVkKSByZXR1cm5cblxuICAgIHRoaXMudmlkZW9JZCA9IHZpZGVvSWRcbiAgICB0aGlzLl9hdXRvcGxheSA9IGF1dG9wbGF5XG5cbiAgICAvLyBJZiB0aGUgSWZyYW1lIEFQSSBpcyBub3QgcmVhZHkgeWV0LCBkbyBub3RoaW5nLiBPbmNlIHRoZSBJZnJhbWUgQVBJIGlzXG4gICAgLy8gcmVhZHksIGBsb2FkKHRoaXMudmlkZW9JZClgIHdpbGwgYmUgY2FsbGVkLlxuICAgIGlmICghdGhpcy5fYXBpKSByZXR1cm5cblxuICAgIC8vIElmIHRoZXJlIGlzIG5vIHBsYXllciBpbnN0YW5jZSwgY3JlYXRlIG9uZS5cbiAgICBpZiAoIXRoaXMuX3BsYXllcikge1xuICAgICAgdGhpcy5fY3JlYXRlUGxheWVyKHZpZGVvSWQpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgcGxheWVyIGluc3RhbmNlIGlzIG5vdCByZWFkeSB5ZXQsIGRvIG5vdGhpbmcuIE9uY2UgdGhlIHBsYXllclxuICAgIC8vIGluc3RhbmNlIGlzIHJlYWR5LCBgbG9hZCh0aGlzLnZpZGVvSWQpYCB3aWxsIGJlIGNhbGxlZC4gVGhpcyBlbnN1cmVzIHRoYXRcbiAgICAvLyB0aGUgbGFzdCBjYWxsIHRvIGBsb2FkKClgIGlzIHRoZSBvbmUgdGhhdCB0YWtlcyBlZmZlY3QuXG4gICAgaWYgKCF0aGlzLl9yZWFkeSkgcmV0dXJuXG5cbiAgICAvLyBJZiB0aGUgcGxheWVyIGluc3RhbmNlIGlzIHJlYWR5LCBsb2FkIHRoZSBnaXZlbiBgdmlkZW9JZGAuXG4gICAgaWYgKGF1dG9wbGF5KSB7XG4gICAgICB0aGlzLl9wbGF5ZXIubG9hZFZpZGVvQnlJZCh2aWRlb0lkKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9wbGF5ZXIuY3VlVmlkZW9CeUlkKHZpZGVvSWQpXG4gICAgfVxuICB9XG5cbiAgcGxheSAoKSB7XG4gICAgaWYgKHRoaXMuX3JlYWR5KSB0aGlzLl9wbGF5ZXIucGxheVZpZGVvKClcbiAgICBlbHNlIHRoaXMuX3F1ZXVlQ29tbWFuZCgncGxheScpXG4gIH1cblxuICBwYXVzZSAoKSB7XG4gICAgaWYgKHRoaXMuX3JlYWR5KSB0aGlzLl9wbGF5ZXIucGF1c2VWaWRlbygpXG4gICAgZWxzZSB0aGlzLl9xdWV1ZUNvbW1hbmQoJ3BhdXNlJylcbiAgfVxuXG4gIHN0b3AgKCkge1xuICAgIGlmICh0aGlzLl9yZWFkeSkgdGhpcy5fcGxheWVyLnN0b3BWaWRlbygpXG4gICAgZWxzZSB0aGlzLl9xdWV1ZUNvbW1hbmQoJ3N0b3AnKVxuICB9XG5cbiAgc2VlayAoc2Vjb25kcykge1xuICAgIGlmICh0aGlzLl9yZWFkeSkgdGhpcy5fcGxheWVyLnNlZWtUbyhzZWNvbmRzLCB0cnVlKVxuICAgIGVsc2UgdGhpcy5fcXVldWVDb21tYW5kKCdzZWVrJywgc2Vjb25kcylcbiAgfVxuXG4gIHNldFZvbHVtZSAodm9sdW1lKSB7XG4gICAgaWYgKHRoaXMuX3JlYWR5KSB0aGlzLl9wbGF5ZXIuc2V0Vm9sdW1lKHZvbHVtZSlcbiAgICBlbHNlIHRoaXMuX3F1ZXVlQ29tbWFuZCgnc2V0Vm9sdW1lJywgdm9sdW1lKVxuICB9XG5cbiAgZ2V0Vm9sdW1lICgpIHtcbiAgICByZXR1cm4gKHRoaXMuX3JlYWR5ICYmIHRoaXMuX3BsYXllci5nZXRWb2x1bWUoKSkgfHwgMFxuICB9XG5cbiAgbXV0ZSAoKSB7XG4gICAgaWYgKHRoaXMuX3JlYWR5KSB0aGlzLl9wbGF5ZXIubXV0ZSgpXG4gICAgZWxzZSB0aGlzLl9xdWV1ZUNvbW1hbmQoJ211dGUnKVxuICB9XG5cbiAgdW5NdXRlICgpIHtcbiAgICBpZiAodGhpcy5fcmVhZHkpIHRoaXMuX3BsYXllci51bk11dGUoKVxuICAgIGVsc2UgdGhpcy5fcXVldWVDb21tYW5kKCd1bk11dGUnKVxuICB9XG5cbiAgaXNNdXRlZCAoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9yZWFkeSAmJiB0aGlzLl9wbGF5ZXIuaXNNdXRlZCgpKSB8fCBmYWxzZVxuICB9XG5cbiAgc2V0U2l6ZSAod2lkdGgsIGhlaWdodCkge1xuICAgIGlmICh0aGlzLl9yZWFkeSkgdGhpcy5fcGxheWVyLnNldFNpemUod2lkdGgsIGhlaWdodClcbiAgICBlbHNlIHRoaXMuX3F1ZXVlQ29tbWFuZCgnc2V0U2l6ZScsIHdpZHRoLCBoZWlnaHQpXG4gIH1cblxuICBzZXRQbGF5YmFja1JhdGUgKHJhdGUpIHtcbiAgICBpZiAodGhpcy5fcmVhZHkpIHRoaXMuX3BsYXllci5zZXRQbGF5YmFja1JhdGUocmF0ZSlcbiAgICBlbHNlIHRoaXMuX3F1ZXVlQ29tbWFuZCgnc2V0UGxheWJhY2tSYXRlJywgcmF0ZSlcbiAgfVxuXG4gIHNldFBsYXliYWNrUXVhbGl0eSAoc3VnZ2VzdGVkUXVhbGl0eSkge1xuICAgIGlmICh0aGlzLl9yZWFkeSkgdGhpcy5fcGxheWVyLnNldFBsYXliYWNrUXVhbGl0eShzdWdnZXN0ZWRRdWFsaXR5KVxuICAgIGVsc2UgdGhpcy5fcXVldWVDb21tYW5kKCdzZXRQbGF5YmFja1F1YWxpdHknLCBzdWdnZXN0ZWRRdWFsaXR5KVxuICB9XG5cbiAgZ2V0UGxheWJhY2tSYXRlICgpIHtcbiAgICByZXR1cm4gKHRoaXMuX3JlYWR5ICYmIHRoaXMuX3BsYXllci5nZXRQbGF5YmFja1JhdGUoKSkgfHwgMVxuICB9XG5cbiAgZ2V0QXZhaWxhYmxlUGxheWJhY2tSYXRlcyAoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9yZWFkeSAmJiB0aGlzLl9wbGF5ZXIuZ2V0QXZhaWxhYmxlUGxheWJhY2tSYXRlcygpKSB8fCBbMV1cbiAgfVxuXG4gIGdldER1cmF0aW9uICgpIHtcbiAgICByZXR1cm4gKHRoaXMuX3JlYWR5ICYmIHRoaXMuX3BsYXllci5nZXREdXJhdGlvbigpKSB8fCAwXG4gIH1cblxuICBnZXRQcm9ncmVzcyAoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9yZWFkeSAmJiB0aGlzLl9wbGF5ZXIuZ2V0VmlkZW9Mb2FkZWRGcmFjdGlvbigpKSB8fCAwXG4gIH1cblxuICBnZXRTdGF0ZSAoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9yZWFkeSAmJiBZT1VUVUJFX1NUQVRFU1t0aGlzLl9wbGF5ZXIuZ2V0UGxheWVyU3RhdGUoKV0pIHx8ICd1bnN0YXJ0ZWQnXG4gIH1cblxuICBnZXRDdXJyZW50VGltZSAoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9yZWFkeSAmJiB0aGlzLl9wbGF5ZXIuZ2V0Q3VycmVudFRpbWUoKSkgfHwgMFxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5fZGVzdHJveSgpXG4gIH1cblxuICBfZGVzdHJveSAoZXJyKSB7XG4gICAgaWYgKHRoaXMuZGVzdHJveWVkKSByZXR1cm5cbiAgICB0aGlzLmRlc3Ryb3llZCA9IHRydWVcblxuICAgIGlmICh0aGlzLl9wbGF5ZXIpIHtcbiAgICAgIHRoaXMuX3BsYXllci5zdG9wVmlkZW8gJiYgdGhpcy5fcGxheWVyLnN0b3BWaWRlbygpXG4gICAgICB0aGlzLl9wbGF5ZXIuZGVzdHJveSgpXG4gICAgfVxuXG4gICAgdGhpcy52aWRlb0lkID0gbnVsbFxuXG4gICAgdGhpcy5faWQgPSBudWxsXG4gICAgdGhpcy5fb3B0cyA9IG51bGxcbiAgICB0aGlzLl9hcGkgPSBudWxsXG4gICAgdGhpcy5fcGxheWVyID0gbnVsbFxuICAgIHRoaXMuX3JlYWR5ID0gZmFsc2VcbiAgICB0aGlzLl9xdWV1ZSA9IG51bGxcblxuICAgIHRoaXMuX3N0b3BJbnRlcnZhbCgpXG5cbiAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKCdwbGF5aW5nJywgdGhpcy5fc3RhcnRJbnRlcnZhbClcbiAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKCdwYXVzZWQnLCB0aGlzLl9zdG9wSW50ZXJ2YWwpXG4gICAgdGhpcy5yZW1vdmVMaXN0ZW5lcignYnVmZmVyaW5nJywgdGhpcy5fc3RvcEludGVydmFsKVxuICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIoJ3Vuc3RhcnRlZCcsIHRoaXMuX3N0b3BJbnRlcnZhbClcbiAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKCdlbmRlZCcsIHRoaXMuX3N0b3BJbnRlcnZhbClcblxuICAgIGlmIChlcnIpIHRoaXMuZW1pdCgnZXJyb3InLCBlcnIpXG4gIH1cblxuICBfcXVldWVDb21tYW5kIChjb21tYW5kLCAuLi5hcmdzKSB7XG4gICAgaWYgKHRoaXMuZGVzdHJveWVkKSByZXR1cm5cbiAgICB0aGlzLl9xdWV1ZS5wdXNoKFtjb21tYW5kLCBhcmdzXSlcbiAgfVxuXG4gIF9mbHVzaFF1ZXVlICgpIHtcbiAgICB3aGlsZSAodGhpcy5fcXVldWUubGVuZ3RoKSB7XG4gICAgICBjb25zdCBjb21tYW5kID0gdGhpcy5fcXVldWUuc2hpZnQoKVxuICAgICAgdGhpc1tjb21tYW5kWzBdXS5hcHBseSh0aGlzLCBjb21tYW5kWzFdKVxuICAgIH1cbiAgfVxuXG4gIF9sb2FkSWZyYW1lQVBJIChjYikge1xuICAgIC8vIElmIEFQSSBpcyBsb2FkZWQsIHRoZXJlIGlzIG5vdGhpbmcgZWxzZSB0byBkb1xuICAgIGlmICh3aW5kb3cuWVQgJiYgdHlwZW9mIHdpbmRvdy5ZVC5QbGF5ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBjYihudWxsLCB3aW5kb3cuWVQpXG4gICAgfVxuXG4gICAgLy8gT3RoZXJ3aXNlLCBxdWV1ZSBjYWxsYmFjayB1bnRpbCBBUEkgaXMgbG9hZGVkXG4gICAgbG9hZElmcmFtZUFQSUNhbGxiYWNrcy5wdXNoKGNiKVxuXG4gICAgY29uc3Qgc2NyaXB0cyA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpKVxuICAgIGNvbnN0IGlzTG9hZGluZyA9IHNjcmlwdHMuc29tZShzY3JpcHQgPT4gc2NyaXB0LnNyYyA9PT0gWU9VVFVCRV9JRlJBTUVfQVBJX1NSQylcblxuICAgIC8vIElmIEFQSSA8c2NyaXB0PiB0YWcgaXMgbm90IHByZXNlbnQgaW4gdGhlIHBhZ2UsIGluamVjdCBpdC4gRW5zdXJlcyB0aGF0XG4gICAgLy8gaWYgdXNlciBpbmNsdWRlcyBhIGhhcmRjb2RlZCA8c2NyaXB0PiB0YWcgaW4gSFRNTCBmb3IgcGVyZm9ybWFuY2UsIGFub3RoZXJcbiAgICAvLyBvbmUgd2lsbCBub3QgYmUgYWRkZWRcbiAgICBpZiAoIWlzTG9hZGluZykge1xuICAgICAgbG9hZFNjcmlwdChZT1VUVUJFX0lGUkFNRV9BUElfU1JDKS5jYXRjaChlcnIgPT4ge1xuICAgICAgICB3aGlsZSAobG9hZElmcmFtZUFQSUNhbGxiYWNrcy5sZW5ndGgpIHtcbiAgICAgICAgICBjb25zdCBsb2FkQ2IgPSBsb2FkSWZyYW1lQVBJQ2FsbGJhY2tzLnNoaWZ0KClcbiAgICAgICAgICBsb2FkQ2IoZXJyKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIC8vIElmIHJlYWR5IGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50LCBjcmVhdGUgaXRcbiAgICBpZiAodHlwZW9mIHdpbmRvdy5vbllvdVR1YmVJZnJhbWVBUElSZWFkeSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgd2luZG93Lm9uWW91VHViZUlmcmFtZUFQSVJlYWR5ID0gKCkgPT4ge1xuICAgICAgICB3aGlsZSAobG9hZElmcmFtZUFQSUNhbGxiYWNrcy5sZW5ndGgpIHtcbiAgICAgICAgICBjb25zdCBsb2FkQ2IgPSBsb2FkSWZyYW1lQVBJQ2FsbGJhY2tzLnNoaWZ0KClcbiAgICAgICAgICBsb2FkQ2IobnVsbCwgd2luZG93LllUKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX2NyZWF0ZVBsYXllciAodmlkZW9JZCkge1xuICAgIGlmICh0aGlzLmRlc3Ryb3llZCkgcmV0dXJuXG5cbiAgICBjb25zdCBvcHRzID0gdGhpcy5fb3B0c1xuXG4gICAgdGhpcy5fcGxheWVyID0gbmV3IHRoaXMuX2FwaS5QbGF5ZXIodGhpcy5faWQsIHtcbiAgICAgIHdpZHRoOiBvcHRzLndpZHRoLFxuICAgICAgaGVpZ2h0OiBvcHRzLmhlaWdodCxcbiAgICAgIHZpZGVvSWQ6IHZpZGVvSWQsXG4gICAgICBwbGF5ZXJWYXJzOiB7XG4gICAgICAgIC8vIFRoaXMgcGFyYW1ldGVyIHNwZWNpZmllcyB3aGV0aGVyIHRoZSBpbml0aWFsIHZpZGVvIHdpbGwgYXV0b21hdGljYWxseVxuICAgICAgICAvLyBzdGFydCB0byBwbGF5IHdoZW4gdGhlIHBsYXllciBsb2Fkcy4gU3VwcG9ydGVkIHZhbHVlcyBhcmUgMCBvciAxLiBUaGVcbiAgICAgICAgLy8gZGVmYXVsdCB2YWx1ZSBpcyAwLlxuICAgICAgICBhdXRvcGxheTogb3B0cy5hdXRvcGxheSA/IDEgOiAwLFxuXG4gICAgICAgIC8vIFNldHRpbmcgdGhlIHBhcmFtZXRlcidzIHZhbHVlIHRvIDEgY2F1c2VzIGNsb3NlZCBjYXB0aW9ucyB0byBiZSBzaG93blxuICAgICAgICAvLyBieSBkZWZhdWx0LCBldmVuIGlmIHRoZSB1c2VyIGhhcyB0dXJuZWQgY2FwdGlvbnMgb2ZmLiBUaGUgZGVmYXVsdFxuICAgICAgICAvLyBiZWhhdmlvciBpcyBiYXNlZCBvbiB1c2VyIHByZWZlcmVuY2UuXG4gICAgICAgIGNjX2xvYWRfcG9saWN5OiBvcHRzLmNhcHRpb25zICE9IG51bGxcbiAgICAgICAgICA/IG9wdHMuY2FwdGlvbnMgIT09IGZhbHNlID8gMSA6IDBcbiAgICAgICAgICA6IHVuZGVmaW5lZCwgLy8gZGVmYXVsdCB0byBub3Qgc2V0dGluZyB0aGlzIG9wdGlvblxuXG4gICAgICAgIC8vIFNldHMgdGhlIHBsYXllcidzIGludGVyZmFjZSBsYW5ndWFnZS4gVGhlIHBhcmFtZXRlciB2YWx1ZSBpcyBhbiBJU09cbiAgICAgICAgLy8gNjM5LTEgdHdvLWxldHRlciBsYW5ndWFnZSBjb2RlIG9yIGEgZnVsbHkgc3BlY2lmaWVkIGxvY2FsZS4gRm9yXG4gICAgICAgIC8vIGV4YW1wbGUsIGZyIGFuZCBmci1jYSBhcmUgYm90aCB2YWxpZCB2YWx1ZXMuIE90aGVyIGxhbmd1YWdlIGlucHV0XG4gICAgICAgIC8vIGNvZGVzLCBzdWNoIGFzIElFVEYgbGFuZ3VhZ2UgdGFncyAoQkNQIDQ3KSBtaWdodCBhbHNvIGJlIGhhbmRsZWRcbiAgICAgICAgLy8gcHJvcGVybHkuXG4gICAgICAgIGhsOiAob3B0cy5jYXB0aW9ucyAhPSBudWxsICYmIG9wdHMuY2FwdGlvbnMgIT09IGZhbHNlKVxuICAgICAgICAgID8gb3B0cy5jYXB0aW9uc1xuICAgICAgICAgIDogdW5kZWZpbmVkLCAvLyBkZWZhdWx0IHRvIG5vdCBzZXR0aW5nIHRoaXMgb3B0aW9uXG5cbiAgICAgICAgLy8gVGhpcyBwYXJhbWV0ZXIgc3BlY2lmaWVzIHRoZSBkZWZhdWx0IGxhbmd1YWdlIHRoYXQgdGhlIHBsYXllciB3aWxsXG4gICAgICAgIC8vIHVzZSB0byBkaXNwbGF5IGNhcHRpb25zLiBTZXQgdGhlIHBhcmFtZXRlcidzIHZhbHVlIHRvIGFuIElTTyA2MzktMVxuICAgICAgICAvLyB0d28tbGV0dGVyIGxhbmd1YWdlIGNvZGUuXG4gICAgICAgIGNjX2xhbmdfcHJlZjogKG9wdHMuY2FwdGlvbnMgIT0gbnVsbCAmJiBvcHRzLmNhcHRpb25zICE9PSBmYWxzZSlcbiAgICAgICAgICA/IG9wdHMuY2FwdGlvbnNcbiAgICAgICAgICA6IHVuZGVmaW5lZCwgLy8gZGVmYXVsdCB0byBub3Qgc2V0dGluZyB0aGlzIG9wdGlvblxuXG4gICAgICAgIC8vIFRoaXMgcGFyYW1ldGVyIGluZGljYXRlcyB3aGV0aGVyIHRoZSB2aWRlbyBwbGF5ZXIgY29udHJvbHMgYXJlXG4gICAgICAgIC8vIGRpc3BsYXllZC4gRm9yIElGcmFtZSBlbWJlZHMgdGhhdCBsb2FkIGEgRmxhc2ggcGxheWVyLCBpdCBhbHNvIGRlZmluZXNcbiAgICAgICAgLy8gd2hlbiB0aGUgY29udHJvbHMgZGlzcGxheSBpbiB0aGUgcGxheWVyIGFzIHdlbGwgYXMgd2hlbiB0aGUgcGxheWVyXG4gICAgICAgIC8vIHdpbGwgbG9hZC4gU3VwcG9ydGVkIHZhbHVlcyBhcmU6XG4gICAgICAgIC8vICAgLSBjb250cm9scz0wIOKAkyBQbGF5ZXIgY29udHJvbHMgZG8gbm90IGRpc3BsYXkgaW4gdGhlIHBsYXllci4gRm9yXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgSUZyYW1lIGVtYmVkcywgdGhlIEZsYXNoIHBsYXllciBsb2FkcyBpbW1lZGlhdGVseS5cbiAgICAgICAgLy8gICAtIGNvbnRyb2xzPTEg4oCTIChkZWZhdWx0KSBQbGF5ZXIgY29udHJvbHMgZGlzcGxheSBpbiB0aGUgcGxheWVyLiBGb3JcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICBJRnJhbWUgZW1iZWRzLCB0aGUgY29udHJvbHMgZGlzcGxheSBpbW1lZGlhdGVseSBhbmRcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICB0aGUgRmxhc2ggcGxheWVyIGFsc28gbG9hZHMgaW1tZWRpYXRlbHkuXG4gICAgICAgIC8vICAgLSBjb250cm9scz0yIOKAkyBQbGF5ZXIgY29udHJvbHMgZGlzcGxheSBpbiB0aGUgcGxheWVyLiBGb3IgSUZyYW1lXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgZW1iZWRzLCB0aGUgY29udHJvbHMgZGlzcGxheSBhbmQgdGhlIEZsYXNoIHBsYXllclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgIGxvYWRzIGFmdGVyIHRoZSB1c2VyIGluaXRpYXRlcyB0aGUgdmlkZW8gcGxheWJhY2suXG4gICAgICAgIGNvbnRyb2xzOiBvcHRzLmNvbnRyb2xzID8gMiA6IDAsXG5cbiAgICAgICAgLy8gU2V0dGluZyB0aGUgcGFyYW1ldGVyJ3MgdmFsdWUgdG8gMSBjYXVzZXMgdGhlIHBsYXllciB0byBub3QgcmVzcG9uZCB0b1xuICAgICAgICAvLyBrZXlib2FyZCBjb250cm9scy4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgMCwgd2hpY2ggbWVhbnMgdGhhdCBrZXlib2FyZFxuICAgICAgICAvLyBjb250cm9scyBhcmUgZW5hYmxlZC5cbiAgICAgICAgZGlzYWJsZWtiOiBvcHRzLmtleWJvYXJkID8gMCA6IDEsXG5cbiAgICAgICAgLy8gU2V0dGluZyB0aGUgcGFyYW1ldGVyJ3MgdmFsdWUgdG8gMSBlbmFibGVzIHRoZSBwbGF5ZXIgdG8gYmVcbiAgICAgICAgLy8gY29udHJvbGxlZCB2aWEgSUZyYW1lIG9yIEphdmFTY3JpcHQgUGxheWVyIEFQSSBjYWxscy4gVGhlIGRlZmF1bHRcbiAgICAgICAgLy8gdmFsdWUgaXMgMCwgd2hpY2ggbWVhbnMgdGhhdCB0aGUgcGxheWVyIGNhbm5vdCBiZSBjb250cm9sbGVkIHVzaW5nXG4gICAgICAgIC8vIHRob3NlIEFQSXMuXG4gICAgICAgIGVuYWJsZWpzYXBpOiAxLFxuXG4gICAgICAgIC8vIFNldHRpbmcgdGhpcyBwYXJhbWV0ZXIgdG8gMCBwcmV2ZW50cyB0aGUgZnVsbHNjcmVlbiBidXR0b24gZnJvbVxuICAgICAgICAvLyBkaXNwbGF5aW5nIGluIHRoZSBwbGF5ZXIuIFRoZSBkZWZhdWx0IHZhbHVlIGlzIDEsIHdoaWNoIGNhdXNlcyB0aGVcbiAgICAgICAgLy8gZnVsbHNjcmVlbiBidXR0b24gdG8gZGlzcGxheS5cbiAgICAgICAgZnM6IG9wdHMuZnVsbHNjcmVlbiA/IDEgOiAwLFxuXG4gICAgICAgIC8vIFNldHRpbmcgdGhlIHBhcmFtZXRlcidzIHZhbHVlIHRvIDEgY2F1c2VzIHZpZGVvIGFubm90YXRpb25zIHRvIGJlXG4gICAgICAgIC8vIHNob3duIGJ5IGRlZmF1bHQsIHdoZXJlYXMgc2V0dGluZyB0byAzIGNhdXNlcyB2aWRlbyBhbm5vdGF0aW9ucyB0byBub3RcbiAgICAgICAgLy8gYmUgc2hvd24gYnkgZGVmYXVsdC4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgMS5cbiAgICAgICAgaXZfbG9hZF9wb2xpY3k6IG9wdHMuYW5ub3RhdGlvbnMgPyAxIDogMyxcblxuICAgICAgICAvLyBUaGlzIHBhcmFtZXRlciBsZXRzIHlvdSB1c2UgYSBZb3VUdWJlIHBsYXllciB0aGF0IGRvZXMgbm90IHNob3cgYVxuICAgICAgICAvLyBZb3VUdWJlIGxvZ28uIFNldCB0aGUgcGFyYW1ldGVyIHZhbHVlIHRvIDEgdG8gcHJldmVudCB0aGUgWW91VHViZSBsb2dvXG4gICAgICAgIC8vIGZyb20gZGlzcGxheWluZyBpbiB0aGUgY29udHJvbCBiYXIuIE5vdGUgdGhhdCBhIHNtYWxsIFlvdVR1YmUgdGV4dFxuICAgICAgICAvLyBsYWJlbCB3aWxsIHN0aWxsIGRpc3BsYXkgaW4gdGhlIHVwcGVyLXJpZ2h0IGNvcm5lciBvZiBhIHBhdXNlZCB2aWRlb1xuICAgICAgICAvLyB3aGVuIHRoZSB1c2VyJ3MgbW91c2UgcG9pbnRlciBob3ZlcnMgb3ZlciB0aGUgcGxheWVyLlxuICAgICAgICBtb2Rlc3RicmFuZGluZzogb3B0cy5tb2Rlc3RCcmFuZGluZyA/IDEgOiAwLFxuXG4gICAgICAgIC8vIFRoaXMgcGFyYW1ldGVyIHByb3ZpZGVzIGFuIGV4dHJhIHNlY3VyaXR5IG1lYXN1cmUgZm9yIHRoZSBJRnJhbWUgQVBJXG4gICAgICAgIC8vIGFuZCBpcyBvbmx5IHN1cHBvcnRlZCBmb3IgSUZyYW1lIGVtYmVkcy4gSWYgeW91IGFyZSB1c2luZyB0aGUgSUZyYW1lXG4gICAgICAgIC8vIEFQSSwgd2hpY2ggbWVhbnMgeW91IGFyZSBzZXR0aW5nIHRoZSBlbmFibGVqc2FwaSBwYXJhbWV0ZXIgdmFsdWUgdG8gMSxcbiAgICAgICAgLy8geW91IHNob3VsZCBhbHdheXMgc3BlY2lmeSB5b3VyIGRvbWFpbiBhcyB0aGUgb3JpZ2luIHBhcmFtZXRlciB2YWx1ZS5cbiAgICAgICAgb3JpZ2luOiB3aW5kb3cubG9jYXRpb24ub3JpZ2luLFxuXG4gICAgICAgIC8vIFRoaXMgcGFyYW1ldGVyIGNvbnRyb2xzIHdoZXRoZXIgdmlkZW9zIHBsYXkgaW5saW5lIG9yIGZ1bGxzY3JlZW4gaW4gYW5cbiAgICAgICAgLy8gSFRNTDUgcGxheWVyIG9uIGlPUy4gVmFsaWQgdmFsdWVzIGFyZTpcbiAgICAgICAgLy8gICAtIDA6IFRoaXMgdmFsdWUgY2F1c2VzIGZ1bGxzY3JlZW4gcGxheWJhY2suIFRoaXMgaXMgY3VycmVudGx5IHRoZVxuICAgICAgICAvLyAgICAgICAgZGVmYXVsdCB2YWx1ZSwgdGhvdWdoIHRoZSBkZWZhdWx0IGlzIHN1YmplY3QgdG8gY2hhbmdlLlxuICAgICAgICAvLyAgIC0gMTogVGhpcyB2YWx1ZSBjYXVzZXMgaW5saW5lIHBsYXliYWNrIGZvciBVSVdlYlZpZXdzIGNyZWF0ZWQgd2l0aFxuICAgICAgICAvLyAgICAgICAgdGhlIGFsbG93c0lubGluZU1lZGlhUGxheWJhY2sgcHJvcGVydHkgc2V0IHRvIFRSVUUuXG4gICAgICAgIHBsYXlzaW5saW5lOiBvcHRzLnBsYXlzSW5saW5lID8gMSA6IDAsXG5cbiAgICAgICAgLy8gVGhpcyBwYXJhbWV0ZXIgaW5kaWNhdGVzIHdoZXRoZXIgdGhlIHBsYXllciBzaG91bGQgc2hvdyByZWxhdGVkXG4gICAgICAgIC8vIHZpZGVvcyBmcm9tIHRoZSBzYW1lIGNoYW5uZWwgKDApIG9yIGZyb20gYW55IGNoYW5uZWwgKDEpIHdoZW5cbiAgICAgICAgLy8gcGxheWJhY2sgb2YgdGhlIHZpZGVvIGVuZHMuIFRoZSBkZWZhdWx0IHZhbHVlIGlzIDEuXG4gICAgICAgIHJlbDogb3B0cy5yZWxhdGVkID8gMSA6IDAsXG5cbiAgICAgICAgLy8gKE5vdCBwYXJ0IG9mIGRvY3VtZW50ZWQgQVBJKSBBbGxvdyBodG1sIGVsZW1lbnRzIHdpdGggaGlnaGVyIHotaW5kZXhcbiAgICAgICAgLy8gdG8gYmUgc2hvd24gb24gdG9wIG9mIHRoZSBZb3VUdWJlIHBsYXllci5cbiAgICAgICAgd21vZGU6ICdvcGFxdWUnXG4gICAgICB9LFxuICAgICAgZXZlbnRzOiB7XG4gICAgICAgIG9uUmVhZHk6ICgpID0+IHRoaXMuX29uUmVhZHkodmlkZW9JZCksXG4gICAgICAgIG9uU3RhdGVDaGFuZ2U6IChkYXRhKSA9PiB0aGlzLl9vblN0YXRlQ2hhbmdlKGRhdGEpLFxuICAgICAgICBvblBsYXliYWNrUXVhbGl0eUNoYW5nZTogKGRhdGEpID0+IHRoaXMuX29uUGxheWJhY2tRdWFsaXR5Q2hhbmdlKGRhdGEpLFxuICAgICAgICBvblBsYXliYWNrUmF0ZUNoYW5nZTogKGRhdGEpID0+IHRoaXMuX29uUGxheWJhY2tSYXRlQ2hhbmdlKGRhdGEpLFxuICAgICAgICBvbkVycm9yOiAoZGF0YSkgPT4gdGhpcy5fb25FcnJvcihkYXRhKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogVGhpcyBldmVudCBmaXJlcyB3aGVuIHRoZSBwbGF5ZXIgaGFzIGZpbmlzaGVkIGxvYWRpbmcgYW5kIGlzIHJlYWR5IHRvIGJlZ2luXG4gICAqIHJlY2VpdmluZyBBUEkgY2FsbHMuXG4gICAqL1xuICBfb25SZWFkeSAodmlkZW9JZCkge1xuICAgIGlmICh0aGlzLmRlc3Ryb3llZCkgcmV0dXJuXG5cbiAgICB0aGlzLl9yZWFkeSA9IHRydWVcblxuICAgIC8vIE9uY2UgdGhlIHBsYXllciBpcyByZWFkeSwgYWx3YXlzIGNhbGwgYGxvYWQodmlkZW9JZCwgW2F1dG9wbGF5XSlgIHRvIGhhbmRsZVxuICAgIC8vIHRoZXNlIHBvc3NpYmxlIGNhc2VzOlxuICAgIC8vXG4gICAgLy8gICAxLiBgbG9hZCh2aWRlb0lkLCB0cnVlKWAgd2FzIGNhbGxlZCBiZWZvcmUgdGhlIHBsYXllciB3YXMgcmVhZHkuIEVuc3VyZSB0aGF0XG4gICAgLy8gICAgICB0aGUgc2VsZWN0ZWQgdmlkZW8gc3RhcnRzIHRvIHBsYXkuXG4gICAgLy9cbiAgICAvLyAgIDIuIGBsb2FkKHZpZGVvSWQsIGZhbHNlKWAgd2FzIGNhbGxlZCBiZWZvcmUgdGhlIHBsYXllciB3YXMgcmVhZHkuIE5vdyB0aGVcbiAgICAvLyAgICAgIHBsYXllciBpcyByZWFkeSBhbmQgdGhlcmUncyBub3RoaW5nIHRvIGRvLlxuICAgIC8vXG4gICAgLy8gICAzLiBgbG9hZCh2aWRlb0lkLCBbYXV0b3BsYXldKWAgd2FzIGNhbGxlZCBtdWx0aXBsZSB0aW1lcyBiZWZvcmUgdGhlIHBsYXllclxuICAgIC8vICAgICAgd2FzIHJlYWR5LiBUaGVyZWZvcmUsIHRoZSBwbGF5ZXIgd2FzIGluaXRpYWxpemVkIHdpdGggdGhlIHdyb25nIHZpZGVvSWQsXG4gICAgLy8gICAgICBzbyBsb2FkIHRoZSBsYXRlc3QgdmlkZW9JZCBhbmQgcG90ZW50aWFsbHkgYXV0b3BsYXkgaXQuXG4gICAgdGhpcy5sb2FkKHRoaXMudmlkZW9JZCwgdGhpcy5fYXV0b3BsYXkpXG5cbiAgICB0aGlzLl9mbHVzaFF1ZXVlKClcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiB0aGUgcGxheWVyJ3Mgc3RhdGUgY2hhbmdlcy4gV2UgZW1pdCBmcmllbmRseSBldmVudHMgc28gdGhlIHVzZXJcbiAgICogZG9lc24ndCBuZWVkIHRvIHVzZSBZb3VUdWJlJ3MgWVQuUGxheWVyU3RhdGUuKiBldmVudCBjb25zdGFudHMuXG4gICAqL1xuICBfb25TdGF0ZUNoYW5nZSAoZGF0YSkge1xuICAgIGlmICh0aGlzLmRlc3Ryb3llZCkgcmV0dXJuXG5cbiAgICBjb25zdCBzdGF0ZSA9IFlPVVRVQkVfU1RBVEVTW2RhdGEuZGF0YV1cblxuICAgIGlmIChzdGF0ZSkge1xuICAgICAgLy8gU2VuZCBhICd0aW1ldXBkYXRlJyBhbnl0aW1lIHRoZSBzdGF0ZSBjaGFuZ2VzLiBXaGVuIHRoZSB2aWRlbyBoYWx0cyBmb3IgYW55XG4gICAgICAvLyByZWFzb24gKCdwYXVzZWQnLCAnYnVmZmVyaW5nJywgb3IgJ2VuZGVkJykgbm8gZnVydGhlciAndGltZXVwZGF0ZScgZXZlbnRzXG4gICAgICAvLyBzaG91bGQgZmlyZSB1bnRpbCB0aGUgdmlkZW8gdW5oYWx0cy5cbiAgICAgIGlmIChbJ3BhdXNlZCcsICdidWZmZXJpbmcnLCAnZW5kZWQnXS5pbmNsdWRlcyhzdGF0ZSkpIHRoaXMuX29uVGltZXVwZGF0ZSgpXG5cbiAgICAgIHRoaXMuZW1pdChzdGF0ZSlcblxuICAgICAgLy8gV2hlbiB0aGUgdmlkZW8gY2hhbmdlcyAoJ3Vuc3RhcnRlZCcgb3IgJ2N1ZWQnKSBvciBzdGFydHMgKCdwbGF5aW5nJykgdGhlbiBhXG4gICAgICAvLyAndGltZXVwZGF0ZScgc2hvdWxkIGZvbGxvdyBhZnRlcndhcmRzIChuZXZlciBiZWZvcmUhKSB0byByZXNldCB0aGUgdGltZS5cbiAgICAgIGlmIChbJ3Vuc3RhcnRlZCcsICdwbGF5aW5nJywgJ2N1ZWQnXS5pbmNsdWRlcyhzdGF0ZSkpIHRoaXMuX29uVGltZXVwZGF0ZSgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVW5yZWNvZ25pemVkIHN0YXRlIGNoYW5nZTogJyArIGRhdGEpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgZXZlbnQgZmlyZXMgd2hlbmV2ZXIgdGhlIHZpZGVvIHBsYXliYWNrIHF1YWxpdHkgY2hhbmdlcy4gUG9zc2libGVcbiAgICogdmFsdWVzIGFyZTogJ3NtYWxsJywgJ21lZGl1bScsICdsYXJnZScsICdoZDcyMCcsICdoZDEwODAnLCAnaGlnaHJlcycuXG4gICAqL1xuICBfb25QbGF5YmFja1F1YWxpdHlDaGFuZ2UgKGRhdGEpIHtcbiAgICBpZiAodGhpcy5kZXN0cm95ZWQpIHJldHVyblxuICAgIHRoaXMuZW1pdCgncGxheWJhY2tRdWFsaXR5Q2hhbmdlJywgZGF0YS5kYXRhKVxuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgZXZlbnQgZmlyZXMgd2hlbmV2ZXIgdGhlIHZpZGVvIHBsYXliYWNrIHJhdGUgY2hhbmdlcy5cbiAgICovXG4gIF9vblBsYXliYWNrUmF0ZUNoYW5nZSAoZGF0YSkge1xuICAgIGlmICh0aGlzLmRlc3Ryb3llZCkgcmV0dXJuXG4gICAgdGhpcy5lbWl0KCdwbGF5YmFja1JhdGVDaGFuZ2UnLCBkYXRhLmRhdGEpXG4gIH1cblxuICAvKipcbiAgICogVGhpcyBldmVudCBmaXJlcyBpZiBhbiBlcnJvciBvY2N1cnMgaW4gdGhlIHBsYXllci5cbiAgICovXG4gIF9vbkVycm9yIChkYXRhKSB7XG4gICAgaWYgKHRoaXMuZGVzdHJveWVkKSByZXR1cm5cblxuICAgIGNvbnN0IGNvZGUgPSBkYXRhLmRhdGFcblxuICAgIC8vIFRoZSBIVE1MNV9FUlJPUiBlcnJvciBvY2N1cnMgd2hlbiB0aGUgWW91VHViZSBwbGF5ZXIgbmVlZHMgdG8gc3dpdGNoIGZyb21cbiAgICAvLyBIVE1MNSB0byBGbGFzaCB0byBzaG93IGFuIGFkLiBJZ25vcmUgaXQuXG4gICAgaWYgKGNvZGUgPT09IFlPVVRVQkVfRVJST1IuSFRNTDVfRVJST1IpIHJldHVyblxuXG4gICAgLy8gVGhlIHJlbWFpbmluZyBlcnJvciB0eXBlcyBvY2N1ciB3aGVuIHRoZSBZb3VUdWJlIHBsYXllciBjYW5ub3QgcGxheSB0aGVcbiAgICAvLyBnaXZlbiB2aWRlby4gVGhpcyBpcyBub3QgYSBmYXRhbCBlcnJvci4gUmVwb3J0IGl0IGFzIHVucGxheWFibGUgc28gdGhlIHVzZXJcbiAgICAvLyBoYXMgYW4gb3Bwb3J0dW5pdHkgdG8gcGxheSBhbm90aGVyIHZpZGVvLlxuICAgIGlmIChjb2RlID09PSBZT1VUVUJFX0VSUk9SLlVOUExBWUFCTEVfMSB8fFxuICAgICAgICBjb2RlID09PSBZT1VUVUJFX0VSUk9SLlVOUExBWUFCTEVfMiB8fFxuICAgICAgICBjb2RlID09PSBZT1VUVUJFX0VSUk9SLk5PVF9GT1VORCB8fFxuICAgICAgICBjb2RlID09PSBZT1VUVUJFX0VSUk9SLklOVkFMSURfUEFSQU0pIHtcbiAgICAgIHJldHVybiB0aGlzLmVtaXQoJ3VucGxheWFibGUnLCB0aGlzLnZpZGVvSWQpXG4gICAgfVxuXG4gICAgLy8gVW5leHBlY3RlZCBlcnJvciwgZG9lcyBub3QgbWF0Y2ggYW55IGtub3duIHR5cGVcbiAgICB0aGlzLl9kZXN0cm95KG5ldyBFcnJvcignWW91VHViZSBQbGF5ZXIgRXJyb3IuIFVua25vd24gZXJyb3IgY29kZTogJyArIGNvZGUpKVxuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgZXZlbnQgZmlyZXMgd2hlbiB0aGUgdGltZSBpbmRpY2F0ZWQgYnkgdGhlIGBnZXRDdXJyZW50VGltZSgpYCBtZXRob2RcbiAgICogaGFzIGJlZW4gdXBkYXRlZC5cbiAgICovXG4gIF9vblRpbWV1cGRhdGUgKCkge1xuICAgIHRoaXMuZW1pdCgndGltZXVwZGF0ZScsIHRoaXMuZ2V0Q3VycmVudFRpbWUoKSlcbiAgfVxuXG4gIF9zdGFydEludGVydmFsICgpIHtcbiAgICB0aGlzLl9pbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHRoaXMuX29uVGltZXVwZGF0ZSgpLCB0aGlzLl9vcHRzLnRpbWV1cGRhdGVGcmVxdWVuY3kpXG4gIH1cblxuICBfc3RvcEludGVydmFsICgpIHtcbiAgICBjbGVhckludGVydmFsKHRoaXMuX2ludGVydmFsKVxuICAgIHRoaXMuX2ludGVydmFsID0gbnVsbFxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gWW91VHViZVBsYXllclxuIiwiaW1wb3J0IHsgUGxheWVyIH0gZnJvbSAnLi9jb21wb25lbnRzL3BsYXllcic7XHJcbmltcG9ydCB7IFF1ZXVlIH0gZnJvbSAnLi9jb21wb25lbnRzL3F1ZXVlJztcclxuaW1wb3J0IHsgR29vZ2xlQXV0aGVudGljYXRpb24gfSBmcm9tICcuL3NlcnZpY2VzL2dvb2dsZS1hdXRoZW50aWNhdGlvbic7XHJcbmltcG9ydCB7IFNlYXJjaCB9IGZyb20gJy4vc2VydmljZXMvc2VhcmNoJztcclxuaW1wb3J0IHsgU29uZyB9IGZyb20gJy4vbW9kZWxzL3NvbmcnO1xyXG5pbXBvcnQgeyBBcHBFdmVudCB9IGZyb20gJy4vc2VydmljZXMvZXZlbnQnO1xyXG5cclxuY29uc3QgcGxheWVyID0gUGxheWVyLmdldEluc3RhbmNlKCcjcGxheWVyJyk7XHJcblxyXG4vL1F1ZXVlLnF1ZXVlKCdEeURmZ01PVWpDSScpO1xyXG4vKiBRdWV1ZS5xdWV1ZSgna0pRUDdraXc1RmsnKTtcclxuUXVldWUucXVldWUoJ3NXTFFWQTlObDVzJyk7XHJcblF1ZXVlLnF1ZXVlKCdFYklsZ0Q1SW5TZycpO1xyXG5RdWV1ZS5xdWV1ZSgndGl5THZvMjRBMmcnKTtcclxuUXVldWUucXVldWUoJ18xdUdOYUU2cXZVJyk7ICovXHJcblxyXG5wbGF5ZXIucmVnaXN0ZXJFdmVudEhhbmRsZXJzKCk7XHJcblxyXG5jb25zdCBzaWduQnRuSGFuZGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZ25pbi1idG4nKTsgXHJcbmNvbnN0IHNlYXJjaEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWZvcm0nKTtcclxuY29uc3Qgc2VhcmNoQmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1iYXInKTtcclxuY29uc3Qgc2VhcmNoQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1idXR0b24nKTtcclxuXHJcbmNvbnN0IGNoZWNrSWZBdXRoZW50aWNhdGVkID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgaWYgKEdvb2dsZUF1dGhlbnRpY2F0aW9uLmlzQXV0aGVudGljYXRlZCgpKSB7XHJcbiAgICAgICAgc2lnbkJ0bkhhbmRsZT8uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICAgICAgc2VhcmNoRm9ybT8uY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZWQnKTtcclxuICAgICAgICBzZWFyY2hCYXI/LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnU2VhcmNoIHNvbmdzIGFuZCBhcnRpc3RzJyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBzaWduQnRuSGFuZGxlPy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgICAgICBzZWFyY2hGb3JtPy5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlZCcpO1xyXG4gICAgfVxyXG59XHJcbmNoZWNrSWZBdXRoZW50aWNhdGVkKCk7XHJcbnNpZ25CdG5IYW5kbGU/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgR29vZ2xlQXV0aGVudGljYXRpb24uYXV0aGVudGljYXRlKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgY2hlY2tJZkF1dGhlbnRpY2F0ZWQoKTtcclxuICAgIH0pO1xyXG59KTtcclxuXHJcbmNvbnN0IG9uU2lnbkluID0gKGdvb2dsZVVzZXI6IGFueSkgPT4ge1xyXG4gICAgdmFyIHByb2ZpbGUgPSBnb29nbGVVc2VyLmdldEJhc2ljUHJvZmlsZSgpO1xyXG4gICAgY29uc29sZS5sb2coJ0lEOiAnICsgcHJvZmlsZS5nZXRJZCgpKTsgLy8gRG8gbm90IHNlbmQgdG8geW91ciBiYWNrZW5kISBVc2UgYW4gSUQgdG9rZW4gaW5zdGVhZC5cclxuICAgIGNvbnNvbGUubG9nKCdOYW1lOiAnICsgcHJvZmlsZS5nZXROYW1lKCkpO1xyXG4gICAgY29uc29sZS5sb2coJ0ltYWdlIFVSTDogJyArIHByb2ZpbGUuZ2V0SW1hZ2VVcmwoKSk7XHJcbiAgICBjb25zb2xlLmxvZygnRW1haWw6ICcgKyBwcm9maWxlLmdldEVtYWlsKCkpOyAvLyBUaGlzIGlzIG51bGwgaWYgdGhlICdlbWFpbCcgc2NvcGUgaXMgbm90IHByZXNlbnQuXHJcbiAgfVxyXG5cclxuY29uc3QgbWFpbkNvbnRhaW5lckJsb2NrOiBzdHJpbmcgPSBgXHJcbjxkaXYgY2xhc3M9XCJjb2wteHMtNCBjb2wtc20tMyBjb2wtbWQtMyBjb2wtbGctMlwiPlxyXG4gICAgPGRpdiBjbGFzcz1cIml0ZW1cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicG9zLXJsdFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbS1vdmVybGF5IGJnLWJsYWNrLW9wYWNpdHlcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZW50ZXIgdGV4dC1jZW50ZXIgdy1mdWxsIG0tdC1uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZiBjbGFzcz1cInBsYXlMaW5rXCIgZGF0YS1hdHRyaWJ1dGU9XCJ7e2lkfX1cIiBkYXRhLWF0dHJpYnV0ZS1hY3Rpb249XCJwbGF5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtMnggZmEtcGxheS1jaXJjbGUgdGV4dC13aGl0ZSBtLXItc21cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWYgY2xhc3M9XCJwbGF5TGlua1wiIGRhdGEtYXR0cmlidXRlPVwie3tpZH19XCIgZGF0YS1hdHRyaWJ1dGUtYWN0aW9uPVwicXVldWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS0yeCBmYS1hcnJvdy1hbHQtY2lyY2xlLWRvd24gdGV4dC13aGl0ZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyLTJ4XCI+XHJcbiAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwiaW1nLWZsdWlkXCIgc3JjPVwie3t0aHVtYm5haWx9fVwiLz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInAtMiB0ZXh0LWNlbnRlciB0ZXh0LW11dGVkIHRleHQtZWxsaXBzaXNcIj5cclxuICAgICAgICAgICAge3t0aXRsZX19XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+XHJcbmA7XHJcblxyXG4vKmNvbnN0IG5hdkJsb2NrID0gYFxyXG48bGkgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gbm8tYm9yZGVyIG5vLXBhZGRlciBwYWRkZXItaC1zbSBxdWV1ZS1saXN0XCIgZGF0YS1hdHRyaWJ1dGU9e3tpZH19PlxyXG4gICAgPHNwYW4gY2xhc3M9XCJmbG9hdC1sZWZ0IHRodW1iLXNtIG0tciBtLXQteHNcIj5cclxuICAgICAgICA8aW1nIHNyYz1cInt7dGh1bWJuYWlsfX1cIiBhbHQ9XCIuLi5cIiBjbGFzcz1cInJcIj5cclxuICAgIDwvc3Bhbj5cclxuICAgIDxkaXYgY2xhc3M9XCJjbGVhclwiPlxyXG4gICAgICAgIDxkaXY+PHNtYWxsPnt7dGl0bGV9fTwvc21hbGw+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC9saT5cclxuYDsqL1xyXG5cclxuY29uc3QgbmF2QmxvY2sgPSBgXHJcbjxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBuby1ib3JkZXIgbm8tcGFkZGVyIHBhZGRlci1oLXNtXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZmxvYXQtcmlnaHQgbS1sIHBhZGRlci1oLXNtXCI+XHJcbiAgICAgICAgPGEgY2xhc3M9XCJkZWxldGUtdHJhY2tcIiBkYXRhLWF0dHJpYnV0ZT17e2lkfX0+PGkgY2xhc3M9XCJmYSBmYS10aW1lcy1jaXJjbGVcIj48L2k+PC9hPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8c3BhbiBjbGFzcz1cIm0tci1zbSBmbG9hdC1sZWZ0IHBhZGRlci1oLXNtXCI+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInBsYXlsaXN0LXBsYXktYnRuIHBsYXllci1hdHRyaWJ1dGUgYmctbGlnaHQgbm8tcGFkZGVyXCIgZGF0YS1hdHRyaWJ1dGU9e3tpZH19PjxpIGNsYXNzPVwiZmFzIGZhLXBsYXlcIj48L2k+PC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInBsYXlsaXN0LXBhdXNlLWJ0biBwbGF5ZXItYXR0cmlidXRlIGJnLWxpZ2h0IG5vLXBhZGRlciBoaWRkZW5cIj48aSBjbGFzcz1cImZhcyBmYS1wYXVzZVwiPjwvaT48L2J1dHRvbj5cclxuICAgIDwvc3Bhbj5cclxuICAgIDxkaXYgY2xhc3M9XCJjbGVhclwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZmxvYXQtbGVmdCB0aHVtYi1zbSBtLXIgbS10LXhzXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwie3t0aHVtYm5haWx9fVwiIGFsdD1cIi4uLlwiIGNsYXNzPVwiclwiPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cInRpdGxlIHRleHQtZWxsaXBzaXNcIj57e3RpdGxlfX08L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuPC9saT4gXHJcbmA7XHJcbnNlYXJjaEJ0bj8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBzZWFyY2hUZXJtID0gKDxIVE1MSW5wdXRFbGVtZW50PnNlYXJjaEJhcik/LnZhbHVlO1xyXG4gICAgaWYgKHNlYXJjaFRlcm0pIHtcclxuICAgICAgICBTZWFyY2guc2VhcmNoKHNlYXJjaFRlcm0pLnRoZW4oKHJlc3BvbnNlOiBBcnJheTxTb25nPikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzZWFyY2hSZXN1bHREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLXJlc3VsdHMnKTtcclxuICAgICAgICAgICAgaWYgKHNlYXJjaFJlc3VsdERpdikge1xyXG4gICAgICAgICAgICAgICAgc2VhcmNoUmVzdWx0RGl2LmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgbGV0IHNvbmc6IFNvbmc7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHNvbmcgb2YgcmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZmlsbGVkVGVtcGxhdGUgPSBtYWluQ29udGFpbmVyQmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbGVkVGVtcGxhdGUgPSBmaWxsZWRUZW1wbGF0ZS5yZXBsYWNlKCd7e3RodW1ibmFpbH19Jywgc29uZy5nZXRUaHVtYm5haWwoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbGVkVGVtcGxhdGUgPSBmaWxsZWRUZW1wbGF0ZS5yZXBsYWNlKCd7e3RpdGxlfX0nLCBzb25nLmdldFRpdGxlKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbGxlZFRlbXBsYXRlID0gZmlsbGVkVGVtcGxhdGUucmVwbGFjZSgve3tpZH19L2csIHNvbmcuZ2V0SWQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoUmVzdWx0RGl2LmlubmVySFRNTCA9IHNlYXJjaFJlc3VsdERpdj8uaW5uZXJIVE1MICsgZmlsbGVkVGVtcGxhdGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwbGF5TGluaycpKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaWQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1hdHRyaWJ1dGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc29uZyA9IFNvbmcuZ2V0U29uZ0Zyb21MaXN0KHJlc3BvbnNlLCBpZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzb25nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZWFyY2gueW91VHViZVNlYXJjaChzb25nLmdldFRpdGxlKCkgKyAnICcgKyBzb25nLmdldEFydGlzdE5hbWUoKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKHZpZGVvSWQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFjdGlvbiA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWF0dHJpYnV0ZS1hY3Rpb24nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmlkZW9JZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb25nLnNldFZpZGVvSWQodmlkZW9JZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhY3Rpb24gPT09ICdwbGF5Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyLnF1ZXVlQW5kUGxheShzb25nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFF1ZXVlLnF1ZXVlKHNvbmcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFF1ZXVlLmdldEN1cnJlbnRRdWV1ZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdJbnZhbGlkIHNvbmcgSUQgOiAnLCBpZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbmNvbnN0IHVwZGF0ZVF1ZXVlTGlzdGVuZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnUXVldWUgdXBkYXRlZCcpO1xyXG4gICAgY29uc3QgY3VycmVudFF1ZXVlOiBBcnJheTxTb25nPiA9IFF1ZXVlLmdldEN1cnJlbnRRdWV1ZSgpO1xyXG4gICAgY29uc3QgcGxheWxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWxpc3QnKTtcclxuICAgIGlmIChwbGF5bGlzdCkge1xyXG4gICAgICAgIGxldCBzb25nOiBTb25nO1xyXG4gICAgICAgIHBsYXlsaXN0LmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIGZvciAoc29uZyBvZiBjdXJyZW50UXVldWUpIHtcclxuICAgICAgICAgICAgbGV0IGZpbGxlZFRlbXBsYXRlID0gbmF2QmxvY2s7XHJcbiAgICAgICAgICAgIGZpbGxlZFRlbXBsYXRlID0gZmlsbGVkVGVtcGxhdGUucmVwbGFjZSgne3t0aHVtYm5haWx9fScsIHNvbmcuZ2V0VGh1bWJuYWlsKCkpO1xyXG4gICAgICAgICAgICBmaWxsZWRUZW1wbGF0ZSA9IGZpbGxlZFRlbXBsYXRlLnJlcGxhY2UoJ3t7dGl0bGV9fScsIHNvbmcuZ2V0VGl0bGUoKSk7XHJcbiAgICAgICAgICAgIGZpbGxlZFRlbXBsYXRlID0gZmlsbGVkVGVtcGxhdGUucmVwbGFjZSgve3tpZH19L2csIHNvbmcuZ2V0VmlkZW9JZCgpISk7XHJcbiAgICAgICAgICAgIHBsYXlsaXN0LmlubmVySFRNTCA9IHBsYXlsaXN0Py5pbm5lckhUTUwgKyBmaWxsZWRUZW1wbGF0ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncGxheWxpc3QtcGxheS1idG4nKSkuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4geyBcclxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpZCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWF0dHJpYnV0ZScpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyLnBsYXlUcmFjayhpZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50Lm5leHRFbGVtZW50U2libGluZz8uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3BsYXlsaXN0LXBhdXNlLWJ0bicpKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7IFxyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIHBsYXllci5wYXVzZVRyYWNrKCk7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nPy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZGVsZXRlLXRyYWNrJykpLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpZCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWF0dHJpYnV0ZScpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgUXVldWUuZGVsZXRlVHJhY2soaWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5BcHBFdmVudC5saXN0ZW4oJ3F1ZXVlLXVwZGF0ZWQnLCB1cGRhdGVRdWV1ZUxpc3RlbmVyKTtcclxuUXVldWUuaW5pdGFsaXplKCk7IiwiaW1wb3J0IFlvdVR1YmVQbGF5ZXIgZnJvbSAneXQtcGxheWVyJztcclxuXHJcbmltcG9ydCB7IFF1ZXVlIH0gZnJvbSAnLi9xdWV1ZSc7XHJcbmltcG9ydCB7IFNvbmcgfSBmcm9tICcuLi9tb2RlbHMvc29uZyc7XHJcbmltcG9ydCB7IFByb2dyZXNzQmFyIH0gZnJvbSAnLi9wcm9nZXNzLWJhcic7XHJcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSAnLi4vc2VydmljZXMvdXRpbHMnO1xyXG5cclxuLyoqXHJcbiAqIFRPRE86IEZvcm1hdCB0aGlzIGNsYXNzIC0gbWVzc3kgY29kZVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFBsYXllciBleHRlbmRzIFlvdVR1YmVQbGF5ZXIge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcGxheWVyOiBQbGF5ZXI7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBfaXNQbGF5aW5nOiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2N1cnJlbnRUcmFja0lkOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIHByb2dyZXNzOiBQcm9ncmVzc0JhciB8IG51bGwgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoZG9tRWxJRDogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIoZG9tRWxJRCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldEluc3RhbmNlKGRvbUVsSUQ6IHN0cmluZyk6IFBsYXllciB7XHJcbiAgICAgICAgaWYgKCFQbGF5ZXIucGxheWVyKSB7XHJcbiAgICAgICAgICAgIFBsYXllci5wbGF5ZXIgPSBuZXcgUGxheWVyKGRvbUVsSUQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gUGxheWVyLnBsYXllcjtcclxuICAgIH07XHJcblxyXG4gICAgcHJpdmF0ZSBsb2FkVHJhY2sodHJhY2tJZDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgUGxheWVyLl9jdXJyZW50VHJhY2tJZCA9IHRyYWNrSWQ7XHJcbiAgICAgICAgUGxheWVyLnBsYXllci5sb2FkKHRyYWNrSWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHBsYXlUcmFjayh0cmFja0lkPzogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRyYWNrSWQpIHtcclxuICAgICAgICAgICAgdGhpcy5zdG9wVHJhY2soKTtcclxuICAgICAgICAgICAgdGhpcy5sb2FkVHJhY2sodHJhY2tJZCk7XHJcbiAgICAgICAgICAgIHRoaXMucmVzZXRFbGFwc2VkVGltZSgpO1xyXG4gICAgICAgICAgICBRdWV1ZS51cGRhdGVDdXJyZW50UGxheWluZ1RyYWNrKHRyYWNrSWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIVBsYXllci5fY3VycmVudFRyYWNrSWQpIHtcclxuICAgICAgICAgICAgbGV0IHRyYWNrID0gUXVldWUubmV4dCgpO1xyXG4gICAgICAgICAgICBpZiAodHJhY2spIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZFRyYWNrKHRyYWNrLmdldFZpZGVvSWQoKSEpO1xyXG4gICAgICAgICAgICAgICAgUGxheWVyLl9pc1BsYXlpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGVQbGF5KCk7XHJcbiAgICAgICAgICAgICAgICBQbGF5ZXIucGxheWVyLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzZXRFbGFwc2VkVGltZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVFbGFwc2VkVGltZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ05vIHRyYWNrcyB0byBwbGF5Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIFBsYXllci5faXNQbGF5aW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy50b2dnbGVQbGF5KCk7XHJcbiAgICAgICAgICAgIFBsYXllci5wbGF5ZXIucGxheSgpO1xyXG4gICAgICAgICAgICAvL3RoaXMucmVzZXRFbGFwc2VkVGltZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUVsYXBzZWRUaW1lKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHF1ZXVlQW5kUGxheShzb25nOiBTb25nKTogdm9pZCB7XHJcbiAgICAgICAgUXVldWUucXVldWUoc29uZyk7XHJcbiAgICAgICAgaWYgKFBsYXllci5faXNQbGF5aW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGF1c2VUcmFjaygpO1xyXG4gICAgICAgICAgICB0aGlzLnJlc2V0RWxhcHNlZFRpbWUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5sb2FkVHJhY2soc29uZy5nZXRWaWRlb0lkKCkhKTtcclxuICAgICAgICBRdWV1ZS51cGRhdGVDdXJyZW50UGxheWluZ1RyYWNrKHNvbmcuZ2V0SWQoKSk7XHJcbiAgICAgICAgUGxheWVyLl9pc1BsYXlpbmcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudG9nZ2xlUGxheSgpO1xyXG4gICAgICAgIFBsYXllci5wbGF5ZXIucGxheSgpO1xyXG4gICAgICAgIHRoaXMucmVzZXRFbGFwc2VkVGltZSgpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlRWxhcHNlZFRpbWUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwYXVzZVRyYWNrKCk6IHZvaWQge1xyXG4gICAgICAgIFBsYXllci5faXNQbGF5aW5nID0gZmFsc2U7XHJcbiAgICAgICAgUGxheWVyLnBsYXllci5wYXVzZSgpO1xyXG4gICAgICAgIHRoaXMudG9nZ2xlUGxheSgpO1xyXG4gICAgICAgIHRoaXMuc3RvcFRpbWVyKCk7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvZ3Jlc3MpIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9ncmVzcy5zdG9wKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5leHRUcmFjaygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnBhdXNlVHJhY2soKTtcclxuICAgICAgICBsZXQgbmV4dFRyYWNrID0gUXVldWUubmV4dCgpO1xyXG4gICAgICAgIHRoaXMucHJvZ3Jlc3M/LnJlc2V0KCk7XHJcbiAgICAgICAgdGhpcy5yZXNldEVsYXBzZWRUaW1lKCk7XHJcbiAgICAgICAgaWYgKG5leHRUcmFjaykge1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRUcmFjayhuZXh0VHJhY2suZ2V0VmlkZW9JZCgpISk7XHJcbiAgICAgICAgICAgIFBsYXllci5faXNQbGF5aW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy50b2dnbGVQbGF5KCk7XHJcbiAgICAgICAgICAgIHRoaXMucmVzZXRFbGFwc2VkVGltZSgpO1xyXG4gICAgICAgICAgICBQbGF5ZXIucGxheWVyLnBsYXkoKTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVFbGFwc2VkVGltZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcmV2aW91c1RyYWNrKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucGF1c2VUcmFjaygpO1xyXG4gICAgICAgIGxldCBwcmV2aW91c1RyYWNrID0gUXVldWUucHJldmlvdXMoKTtcclxuICAgICAgICB0aGlzLnByb2dyZXNzPy5yZXNldCgpO1xyXG4gICAgICAgIGlmIChwcmV2aW91c1RyYWNrKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZFRyYWNrKHByZXZpb3VzVHJhY2suZ2V0VmlkZW9JZCgpISk7XHJcbiAgICAgICAgICAgIFBsYXllci5faXNQbGF5aW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy50b2dnbGVQbGF5KCk7XHJcbiAgICAgICAgICAgIHRoaXMucmVzZXRFbGFwc2VkVGltZSgpO1xyXG4gICAgICAgICAgICBQbGF5ZXIucGxheWVyLnBsYXkoKTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVFbGFwc2VkVGltZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdG9wVHJhY2soKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5wYXVzZVRyYWNrKCk7XHJcbiAgICAgICAgdGhpcy5wcm9ncmVzcz8ucmVzZXQoKTtcclxuICAgICAgICBQbGF5ZXIucGxheWVyLnN0b3AoKTtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVQbGF5KCk6IHZvaWQge1xyXG4gICAgICAgIGlmIChQbGF5ZXIuX2lzUGxheWluZykge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGF1c2UtYnV0dG9uJyk/LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheS1idXR0b24nKT8uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGF1c2UtYnV0dG9uJyk/LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheS1idXR0b24nKT8uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzdGF0aWMgc2Vla1RvKHRpbWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIFBsYXllci5jdXJyZW50VGltZSA9IHRpbWU7XHJcbiAgICAgICAgUGxheWVyLnBsYXllci5zZWVrKHRpbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlVGl0bGUoKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRRdWV1ZSA9IFF1ZXVlLmdldEN1cnJlbnRRdWV1ZSgpO1xyXG4gICAgICAgIGNvbnN0IHNvbmcgPSBTb25nLmdldFNvbmdGcm9tTGlzdChjdXJyZW50UXVldWUsIFBsYXllci5fY3VycmVudFRyYWNrSWQpO1xyXG4gICAgICAgIGNvbnN0IHRpdGxlRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJyk7XHJcbiAgICAgICAgaWYgKHRpdGxlRGl2ICYmIHNvbmcpIHtcclxuICAgICAgICAgICAgdGl0bGVEaXYuaW5uZXJIVE1MID0gc29uZy5nZXRUaXRsZSgpOyAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVTb25nVG90YWxUaW1lKHRpbWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHRvdGFsVGltZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvdGFsLXRpbWUnKTtcclxuICAgICAgICBpZiAodG90YWxUaW1lRWwpIHtcclxuICAgICAgICAgICAgdG90YWxUaW1lRWwuaW5uZXJIVE1MID0gVXRpbHMuZm9ybWF0VGltZSh0aW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX3RpbWVyOiBhbnk7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBjdXJyZW50VGltZSA9IDA7XHJcbiAgICBwcml2YXRlIHVwZGF0ZUVsYXBzZWRUaW1lKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICgoUGxheWVyLmN1cnJlbnRUaW1lIDwgUGxheWVyLnBsYXllci5nZXREdXJhdGlvbigpKSAmJiAhUGxheWVyLl90aW1lcikge1xyXG4gICAgICAgICAgICBQbGF5ZXIuX3RpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGUoKytQbGF5ZXIuY3VycmVudFRpbWUpO1xyXG4gICAgICAgICAgICB9LCAxMDAwKTsgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZWxhcHNlZFRpbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbGFwc2VkLXRpbWUnKTtcclxuICAgIHByaXZhdGUgdXBkYXRlKGN1cnJlbnRUaW1lOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5lbGFwc2VkVGltZUVsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWxhcHNlZFRpbWVFbC5pbm5lckhUTUwgPSBVdGlscy5mb3JtYXRUaW1lKGN1cnJlbnRUaW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdG9wVGltZXIoKTogdm9pZCB7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbChQbGF5ZXIuX3RpbWVyKTtcclxuICAgICAgICBQbGF5ZXIuX3RpbWVyID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlc2V0RWxhcHNlZFRpbWUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zdG9wVGltZXIoKTtcclxuICAgICAgICBQbGF5ZXIuY3VycmVudFRpbWUgPSAwO1xyXG4gICAgICAgIHRoaXMudXBkYXRlKDApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyRXZlbnRIYW5kbGVycygpOiB2b2lkIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheS1idXR0b24nKT8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdQbGF5aW5nJyk7XHJcbiAgICAgICAgICAgIHRoaXMucGxheVRyYWNrKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhdXNlLWJ1dHRvbicpPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1BhdXNlZCcpO1xyXG4gICAgICAgICAgICB0aGlzLnBhdXNlVHJhY2soKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV4dC1idXR0b24nKT8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdOZXh0IHRyYWNrJyk7XHJcbiAgICAgICAgICAgIHRoaXMubmV4dFRyYWNrKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZXZpb3VzLWJ1dHRvbicpPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1ByZXZpb3VzIHRyYWNrJyk7XHJcbiAgICAgICAgICAgIHRoaXMucHJldmlvdXNUcmFjaygpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndm9sLXVwJyk/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBQbGF5ZXIucGxheWVyLm11dGUoKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZvbC11cCcpPy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZvbC1tdXRlJyk/LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndm9sLW11dGUnKT8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIFBsYXllci5wbGF5ZXIudW5NdXRlKCk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2b2wtbXV0ZScpPy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZvbC11cCcpPy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgUGxheWVyLnBsYXllci5vbigncGxheWluZycsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVUaXRsZSgpO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMucHJvZ3Jlc3MpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3MgPSBQcm9ncmVzc0Jhci5nZXRJbnN0YW5jZSgncHJvZ3Jlc3MtYmFyJyk7ICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3Muc2V0VGltZShQbGF5ZXIucGxheWVyLmdldER1cmF0aW9uKCkpO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNvbmdUb3RhbFRpbWUoUGxheWVyLnBsYXllci5nZXREdXJhdGlvbigpKTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVFbGFwc2VkVGltZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzLnN0YXJ0KCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIFBsYXllci5wbGF5ZXIub24oJ2VuZGVkJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm5leHRUcmFjaygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgUGxheWVyIH0gZnJvbSAnLi9wbGF5ZXInO1xyXG5cclxuZXhwb3J0IGNsYXNzIFByb2dyZXNzQmFyIHtcclxuICAgIHByaXZhdGUgdG90YWxUaW1lOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50UG9zaXRpb246IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIHRpY2s6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIHN0YXRpYyB0aW1lcjogYW55O1xyXG4gICAgcHJpdmF0ZSBlbGVtZW50OiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIHByb2dyZXNzQmFyRWw6IEhUTUxFbGVtZW50IHwgbnVsbDtcclxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogUHJvZ3Jlc3NCYXI7XHJcblxyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcihlbGVtZW50OiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xyXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NCYXJFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZWxlbWVudCk7XHJcbiAgICAgICAgdGhpcy5fYWRkQ2xpY2tMaXN0ZW5lcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZShlbGVtZW50OiBzdHJpbmcpOiBQcm9ncmVzc0JhciB7XHJcbiAgICAgICAgaWYgKCFQcm9ncmVzc0Jhci5faW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgUHJvZ3Jlc3NCYXIuX2luc3RhbmNlID0gbmV3IFByb2dyZXNzQmFyKGVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gUHJvZ3Jlc3NCYXIuX2luc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFRpbWUodG90YWxUaW1lOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnRvdGFsVGltZSA9IHRvdGFsVGltZTtcclxuICAgICAgICB0aGlzLnRpY2sgPSB0aGlzLnRvdGFsVGltZSAvIDEwMDtcclxuICAgIH1cclxuICAgIHByaXZhdGUgdXBkYXRlKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRQb3NpdGlvbiA8IDEwMCkgeyBcclxuICAgICAgICAgICAgaWYgKHRoaXMucHJvZ3Jlc3NCYXJFbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UG9zaXRpb24gPSB0aGlzLmN1cnJlbnRQb3NpdGlvbiArIDAuMTtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NCYXJFbC5zdHlsZS53aWR0aCA9IHRoaXMuY3VycmVudFBvc2l0aW9uICsgJyUnOyBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpOiB2b2lkIHtcclxuICAgICAgICBQcm9ncmVzc0Jhci50aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGUoKTsgXHJcbiAgICAgICAgfSwgKHRoaXMudGljayAqIDEwMCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0b3AoKTogdm9pZCB7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbChQcm9ncmVzc0Jhci50aW1lcik7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UG9zaXRpb24gPSAwO1xyXG4gICAgICAgIHRoaXMudGljayA9IDA7XHJcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9hZGRDbGlja0xpc3RlbmVyKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLnByb2dyZXNzQmFyRWwgJiYgdGhpcy5wcm9ncmVzc0JhckVsLnBhcmVudEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9ncmVzc0JhckVsLnBhcmVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb2dyZXNzQmFyRWwgJiYgdGhpcy5wcm9ncmVzc0JhckVsLnBhcmVudEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWVrID0gKHRoaXMudG90YWxUaW1lIC8gdGhpcy5wcm9ncmVzc0JhckVsLnBhcmVudEVsZW1lbnQuY2xpZW50V2lkdGgpICogKGV2ZW50LnBhZ2VYIC0gMjAwKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwb3MgPSAoc2VlayAvIHRoaXMudG90YWxUaW1lKSAqIDEwMDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQb3NpdGlvbiA9IHBhcnNlRmxvYXQoKE1hdGgucm91bmQocG9zICogMTApIC8gMTApLnRvRml4ZWQoMSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIFBsYXllci5zZWVrVG8oc2Vlayk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7IFNvbmcgfSBmcm9tIFwiLi4vbW9kZWxzL3NvbmdcIjtcclxuaW1wb3J0IHsgQXBwRXZlbnQgfSBmcm9tICcuLi9zZXJ2aWNlcy9ldmVudCc7XHJcbmltcG9ydCB7IFN0b3JhZ2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9zdG9yYWdlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBRdWV1ZSB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBfcXVldWU6IEFycmF5PFNvbmc+O1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2N1cnJlbnRUcmFjayA9IC0xO1xyXG5cclxuICAgIHN0YXRpYyBpbml0YWxpemUoKSB7XHJcbiAgICAgICAgUXVldWUuX3F1ZXVlID0gUXVldWUuX2ZldGNoUHJldmlvdXNRdWV1ZSgpO1xyXG4gICAgICAgIEFwcEV2ZW50LmVtaXQoJ3F1ZXVlLXVwZGF0ZWQnKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgc3RhdGljIF9mZXRjaFByZXZpb3VzUXVldWUoKTogYW55IHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IFN0b3JhZ2UuZ2V0KCdDVVJSRU5UX1FVRVVFJyk7XHJcbiAgICAgICAgY29uc3QgX3RlbXBRdWV1ZSA9IG5ldyBBcnJheTxTb25nPigpO1xyXG4gICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIF90ZW1wUXVldWUucHVzaChuZXcgU29uZyhpdGVtLmlkLCBpdGVtLnRpdGxlLCBpdGVtLmRlc2NyaXB0aW9uLCBpdGVtLmFydGlzdE5hbWUsIGl0ZW0udGh1bWJuYWlsLCBpdGVtLnZpZGVvSWQpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBfdGVtcFF1ZXVlO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIHF1ZXVlKHNvbmc6IFNvbmcpOiB2b2lkIHtcclxuICAgICAgICBRdWV1ZS5fcXVldWUucHVzaChzb25nKTtcclxuICAgICAgICBTdG9yYWdlLnNhdmUoJ0NVUlJFTlRfUVVFVUUnLCBRdWV1ZS5fcXVldWUpO1xyXG4gICAgICAgIEFwcEV2ZW50LmVtaXQoJ3F1ZXVlLXVwZGF0ZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZGVxdWV1ZSgpOiBTb25nIHwgdW5kZWZpbmVkIHtcclxuICAgICAgICBjb25zdCBzb25nID0gUXVldWUuX3F1ZXVlLnNoaWZ0KCk7XHJcbiAgICAgICAgQXBwRXZlbnQuZW1pdCgncXVldWUtdXBkYXRlZCcpO1xyXG4gICAgICAgIFN0b3JhZ2Uuc2F2ZSgnQ1VSUkVOVF9RVUVVRScsIFF1ZXVlLl9xdWV1ZSk7XHJcbiAgICAgICAgcmV0dXJuIHNvbmc7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIG5leHQoKTogU29uZyB8IHVuZGVmaW5lZCB7XHJcbiAgICAgICAgaWYgKFF1ZXVlLl9xdWV1ZVtRdWV1ZS5fY3VycmVudFRyYWNrICsgMV0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIFF1ZXVlLl9xdWV1ZVsrK1F1ZXVlLl9jdXJyZW50VHJhY2tdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBwcmV2aW91cygpOiBTb25nIHwgdW5kZWZpbmVkIHtcclxuICAgICAgICBpZiAoUXVldWUuX3F1ZXVlW1F1ZXVlLl9jdXJyZW50VHJhY2sgLSAxXSkge1xyXG4gICAgICAgICAgICByZXR1cm4gUXVldWUuX3F1ZXVlWy0tUXVldWUuX2N1cnJlbnRUcmFja107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldEN1cnJlbnRRdWV1ZSgpOiBBcnJheTxTb25nPiB7XHJcbiAgICAgICAgcmV0dXJuIFF1ZXVlLl9xdWV1ZTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgdXBkYXRlQ3VycmVudFBsYXlpbmdUcmFjayh0cmFja0lkOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBRdWV1ZS5fY3VycmVudFRyYWNrID0gUXVldWUuX3F1ZXVlLmZpbmRJbmRleChzb25nID0+IHNvbmcuZ2V0SWQoKSA9PT0gdHJhY2tJZCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGRlbGV0ZVRyYWNrKHZpZGVvSWQ6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHBvcyA9IFF1ZXVlLl9xdWV1ZS5maW5kSW5kZXgoc29uZyA9PiBzb25nLmdldFZpZGVvSWQoKSA9PT0gdmlkZW9JZCk7XHJcbiAgICAgICAgUXVldWUuX3F1ZXVlLnNwbGljZShwb3MsIDEpO1xyXG4gICAgICAgIEFwcEV2ZW50LmVtaXQoJ3F1ZXVlLXVwZGF0ZWQnKTtcclxuICAgICAgICBTdG9yYWdlLnNhdmUoJ0NVUlJFTlRfUVVFVUUnLCBRdWV1ZS5fcXVldWUpO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIFNvbmcge1xyXG4gICAgcHJpdmF0ZSBpZDogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSB0aXRsZTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBhcnRpc3ROYW1lOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIHRodW1ibmFpbDogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSB2aWRlb0lkOiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaWQ6IHN0cmluZywgdGl0bGU6IHN0cmluZywgZGVzY3JpcHRpb246IHN0cmluZywgYXJ0aXN0TmFtZTogc3RyaW5nLCB0aHVtYm5haWw6IHN0cmluZywgdmlkZW9JZD86IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgICAgdGhpcy5hcnRpc3ROYW1lID0gYXJ0aXN0TmFtZTtcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICAgICAgdGhpcy50aHVtYm5haWwgPSB0aHVtYm5haWw7XHJcbiAgICAgICAgdGhpcy52aWRlb0lkID0gdmlkZW9JZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0SWQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0VGl0bGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50aXRsZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0RGVzY3JpcHRpb24oKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0QXJ0aXN0TmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFydGlzdE5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFRodW1ibmFpbCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRodW1ibmFpbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0VmlkZW9JZCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZpZGVvSWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFZpZGVvSWQodmlkZW9JZDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy52aWRlb0lkID0gdmlkZW9JZDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0U29uZ0Zyb21MaXN0KGxpc3Q6IEFycmF5PFNvbmc+LCBpZDogc3RyaW5nIHwgbnVsbCk6IFNvbmcgfCBudWxsIHtcclxuICAgICAgICBsZXQgZmlsdGVyZWRMaXN0ID0gbGlzdC5maWx0ZXIoc29uZyA9PiBzb25nLmdldElkKCkgPT0gaWQpO1xyXG4gICAgICAgIGlmIChmaWx0ZXJlZExpc3QubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIGZpbHRlcmVkTGlzdCA9IGxpc3QuZmlsdGVyKHNvbmcgPT4gc29uZy5nZXRWaWRlb0lkKCkgPT0gaWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmlsdGVyZWRMaXN0Lmxlbmd0aCA+IDAgPyBmaWx0ZXJlZExpc3RbMF06IG51bGw7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgQXBwRXZlbnQge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgbGlzdGVuZXJzOiB7W25hbWU6IHN0cmluZ106IEFycmF5PEZ1bmN0aW9uPn0gPSB7fTtcclxuXHJcbiAgICBzdGF0aWMgbGlzdGVuKGV2ZW50OiBzdHJpbmcsIGZ1bmM6IEZ1bmN0aW9uKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKEFwcEV2ZW50Lmxpc3RlbmVyc1tldmVudF0pIHtcclxuICAgICAgICAgICAgQXBwRXZlbnQubGlzdGVuZXJzW2V2ZW50XS5wdXNoKGZ1bmMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGFyciA9IFtdO1xyXG4gICAgICAgICAgICBhcnIucHVzaChmdW5jKTtcclxuICAgICAgICAgICAgQXBwRXZlbnQubGlzdGVuZXJzW2V2ZW50XSA9IGFycjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGVtaXQoZXZlbnQ6IHN0cmluZywgZGF0YT86IE9iamVjdCk6IHZvaWQge1xyXG4gICAgICAgIGlmIChBcHBFdmVudC5saXN0ZW5lcnNbZXZlbnRdKSB7XHJcbiAgICAgICAgICAgIEFwcEV2ZW50Lmxpc3RlbmVyc1tldmVudF0uZm9yRWFjaCgoZnVuYzogRnVuY3Rpb24pID0+IGZ1bmMoZGF0YSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBHb29nbGVBdXRoZW50aWNhdGlvbiB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBfaXNBdXRoZW50aWNhdGVkOiBib29sZWFuID0gd2luZG93LnNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2dvb2dsZS1hdXRoZW50aWNhdGVkJykgPT09ICd0cnVlJz8gdHJ1ZTogZmFsc2U7XHJcblxyXG4gICAgc3RhdGljIGlzQXV0aGVudGljYXRlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gR29vZ2xlQXV0aGVudGljYXRpb24uX2lzQXV0aGVudGljYXRlZDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgYXV0aGVudGljYXRlKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgZ2FwaS5sb2FkKCdhdXRoMicsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGZldGNoKCdodHRwOi8vcGxheWJhY2suaW86MzAwMC9zZWNyZXQvaWQnKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZUpzb24gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhcGkuYXV0aDIuZ2V0QXV0aEluc3RhbmNlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWVudF9pZDogcmVzcG9uc2VKc29uLkNMSUVOVF9JRFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdhcGkuYXV0aDIuZ2V0QXV0aEluc3RhbmNlKCkuc2lnbkluKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlOiAnaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYXV0aC95b3V0dWJlLmZvcmNlLXNzbCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBHb29nbGVBdXRoZW50aWNhdGlvbi5faXNBdXRoZW50aWNhdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdnb29nbGUtYXV0aGVudGljYXRlZCcsICd0cnVlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQXV0aGVudGljYXRlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoR29vZ2xlQXV0aGVudGljYXRpb24ubG9hZENsaWVudCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGxvYWRDbGllbnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgZ2FwaS5sb2FkKCdjbGllbnQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBmZXRjaCgnaHR0cDovL3BsYXliYWNrLmlvOjMwMDAvc2VjcmV0L2tleScpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlSnNvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhcGkuY2xpZW50LnNldEFwaUtleShyZXNwb25zZUpzb24uQVBJX0tFWSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGdhcGkuY2xpZW50LmxvYWQoXCJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9kaXNjb3ZlcnkvdjEvYXBpcy95b3V0dWJlL3YzL3Jlc3RcIiwgXCJ2M1wiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgR29vZ2xlQXV0aGVudGljYXRpb24gfSBmcm9tICcuL2dvb2dsZS1hdXRoZW50aWNhdGlvbic7XHJcbmltcG9ydCB7IFNvbmcgfSBmcm9tICcuLi9tb2RlbHMvc29uZyc7XHJcblxyXG5leHBvcnQgY2xhc3MgU2VhcmNoIHtcclxuICAgIHByaXZhdGUgc3RhdGljIE1BWF9SRVNVTFRTID0gMTtcclxuXHJcbiAgICBzdGF0aWMgeW91VHViZVNlYXJjaChxOiBzdHJpbmcsIHBhcnQ/OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGdhcGkubG9hZCgnY2xpZW50JywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgICAgICBpZiAoIWdhcGkuY2xpZW50LnlvdXR1YmUpIHtcclxuICAgICAgICAgICAgICAgICAgICBHb29nbGVBdXRoZW50aWNhdGlvbi5sb2FkQ2xpZW50KCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBTZWFyY2guX3NlYXJjaChxLCBwYXJ0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlOiBBcnJheTxTb25nPikgPT4gcmVzb2x2ZShTZWFyY2guX3Byb2Nlc3NZb3V0dWJlUmVzcG9uc2UocmVzcG9uc2UpKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTsgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFNlYXJjaC5fc2VhcmNoKHEsIHBhcnQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZTogQXJyYXk8U29uZz4pID0+IHJlc29sdmUoU2VhcmNoLl9wcm9jZXNzWW91dHViZVJlc3BvbnNlKHJlc3BvbnNlKSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHNlYXJjaChxOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIHJldHVybiBmZXRjaCgnaHR0cDovL3BsYXliYWNrLmlvOjMwMDAvc2VhcmNoLycgKyBlbmNvZGVVUklDb21wb25lbnQocSkpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2VKc29uID0+IFNlYXJjaC5fcHJvY2Vzc1Jlc3BvbnNlKHJlc3BvbnNlSnNvbikpXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9zZWFyY2gocTogc3RyaW5nLCBwYXJ0Pzogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgcmV0dXJuIGdhcGkuY2xpZW50LnlvdXR1YmUuc2VhcmNoLmxpc3Qoe1xyXG4gICAgICAgICAgICBwYXJ0OiBwYXJ0ID8gcGFydCA6ICdzbmlwcGV0JyxcclxuICAgICAgICAgICAgcTogcSxcclxuICAgICAgICAgICAgdHlwZTogJ3ZpZGVvJyxcclxuICAgICAgICAgICAgbWF4UmVzdWx0czogU2VhcmNoLk1BWF9SRVNVTFRTXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfcHJvY2Vzc1lvdXR1YmVSZXNwb25zZShyZXNwb25zZTogYW55KTogU3RyaW5nIHtcclxuICAgICAgICBsZXQgc29uZ0lkID0gJyc7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlICYmIHJlc3BvbnNlLnJlc3VsdCAmJiByZXNwb25zZS5yZXN1bHQuaXRlbXMpIHtcclxuICAgICAgICAgICAgc29uZ0lkID0gcmVzcG9uc2UucmVzdWx0Lml0ZW1zWzBdLmlkLnZpZGVvSWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzb25nSWQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHByaXZhdGUgc3RhdGljIF9wcm9jZXNzUmVzcG9uc2UocmVzcG9uc2U6IGFueSk6IE9iamVjdCB7XHJcbiAgICAgICAgbGV0IHByb2Nlc3NlZFJlc3BvbnNlID0gbmV3IEFycmF5PFNvbmc+KCk7XHJcblxyXG4gICAgICAgIGlmICghcmVzcG9uc2UgfHwgIXJlc3BvbnNlLnJlc3VsdHMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHt9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpdGVtIG9mIHJlc3BvbnNlLnJlc3VsdHMpIHtcclxuICAgICAgICAgICAgbGV0IHRodW1ibmFpbCA9IGl0ZW0uYXJ0d29ya1VybDEwMCA/IGl0ZW0uYXJ0d29ya1VybDEwMCA6XHJcbiAgICAgICAgICAgICAgICAoaXRlbS5hcnR3b3JrVXJsNjAgPyBpdGVtLmFydHdvcmtVcmw2MCA6IChpdGVtLmFydHdvcmtVcmwzMCA/IGl0ZW0uYXJ0d29ya1VybDMwIDogJycpKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc09iaiA9IG5ldyBTb25nKGl0ZW0udHJhY2tJZCwgaXRlbS50cmFja05hbWUsIGl0ZW0uY29sbGVjdGlvbk5hbWUsIGl0ZW0uYXJ0aXN0TmFtZSxcclxuICAgICAgICAgICAgICAgIHRodW1ibmFpbCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBwcm9jZXNzZWRSZXNwb25zZS5wdXNoKHJlc09iaik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qIGlmICghcmVzcG9uc2UgfHwgcmVzcG9uc2Uuc3RhdHVzICE9PSAyMDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHt9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocmVzcG9uc2UucmVzdWx0Lml0ZW1zICYmIHJlc3BvbnNlLnJlc3VsdC5pdGVtcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGl0ZW0gb2YgcmVzcG9uc2UucmVzdWx0Lml0ZW1zKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHJ1ZSB8fCBpdGVtLnNuaXBwZXQuY2hhbm5lbFRpdGxlLnRvTG93ZXJDYXNlKCkuaW5kZXhPZigndmV2bycpID4gLTEgfHwgaXRlbS5zbmlwcGV0LmNoYW5uZWxUaXRsZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ29mZmljaWFsJykgPiAtMVxyXG4gICAgICAgICAgICAgICAgICAgIHx8IGl0ZW0uc25pcHBldC50aXRsZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ29mZmljaWFsJykgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0aHVtYm5haWwgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5zbmlwcGV0LnRodW1ibmFpbHMuaGlnaCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHVtYm5haWwgPSBpdGVtLnNuaXBwZXQudGh1bWJuYWlscy5oaWdoLnVybDsgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGl0ZW0uc25pcHBldC50aHVtYm5haWxzLm1lZGl1bSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHVtYm5haWwgPSBpdGVtLnNuaXBwZXQudGh1bWJuYWlscy5tZWRpdW0udXJsOyBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRodW1ibmFpbCA9IGl0ZW0uc25pcHBldC50aHVtYm5haWxzLmRlZmF1bHQudXJsOyBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc09iaiA9IG5ldyBTb25nKGl0ZW0uaWQudmlkZW9JZCwgaXRlbS5zbmlwcGV0LnRpdGxlLCBpdGVtLnNuaXBwZXQuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRodW1ibmFpbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc2VkUmVzcG9uc2UucHVzaChyZXNPYmopO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgIH0qL1xyXG4gICAgICAgIHJldHVybiBwcm9jZXNzZWRSZXNwb25zZTtcclxuICAgIH1cclxufSIsImV4cG9ydCBjb25zdCBlbnVtIFNUT1JBR0Uge1xyXG4gICAgTE9DQUxfU1RPUkFHRSxcclxuICAgIFNFU1NJT05fU1RPUkFHRVxyXG59XHJcbmV4cG9ydCBjbGFzcyBTdG9yYWdlIHtcclxuICAgIHByaXZhdGUgc3RhdGljIERFRkFVTFRfU1RPUkFHRTogU1RPUkFHRSA9IFNUT1JBR0UuTE9DQUxfU1RPUkFHRTtcclxuICAgIHByaXZhdGUgc3RhdGljIHN0b3JhZ2VIYW5kbGVyID0gd2luZG93LmxvY2FsU3RvcmFnZTtcclxuXHJcbiAgICBzdGF0aWMgc2F2ZShrZXk6IHN0cmluZywgdmFsdWU6IGFueSwgc3RvcmFnZT86IFNUT1JBR0UpOiB2b2lkIHtcclxuICAgICAgICBpZiAoc3RvcmFnZSAmJiBzdG9yYWdlICE9PSBTdG9yYWdlLkRFRkFVTFRfU1RPUkFHRSkge1xyXG4gICAgICAgICAgICB3aW5kb3cuc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBTdG9yYWdlLnN0b3JhZ2VIYW5kbGVyLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0KGtleTogc3RyaW5nLCBzdG9yYWdlPzogU1RPUkFHRSk6IGFueSB7XHJcbiAgICAgICAgaWYgKHN0b3JhZ2UgJiYgc3RvcmFnZSAhPT0gU3RvcmFnZS5ERUZBVUxUX1NUT1JBR0UpIHtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWUgPyBKU09OLnBhcnNlKHZhbHVlKTogdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gU3RvcmFnZS5zdG9yYWdlSGFuZGxlci5nZXRJdGVtKGtleSk7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlID8gSlNPTi5wYXJzZSh2YWx1ZSkgOiB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZGVsZXRlKGtleTogc3RyaW5nLCBzdG9yYWdlPzogU1RPUkFHRSk6IHZvaWQge1xyXG4gICAgICAgIGlmIChzdG9yYWdlICYmIHN0b3JhZ2UgIT09IFN0b3JhZ2UuREVGQVVMVF9TVE9SQUdFKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFN0b3JhZ2Uuc3RvcmFnZUhhbmRsZXIucmVtb3ZlSXRlbShrZXkpO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIFV0aWxzIHtcclxuICAgIHN0YXRpYyBmb3JtYXRUaW1lKHRpbWU6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICAgICAgdGltZSA9IE1hdGguZmxvb3IodGltZSk7XHJcbiAgICAgICAgY29uc3QgbWluID0gTWF0aC5mbG9vcih0aW1lIC8gNjApO1xyXG4gICAgICAgIGNvbnN0IHNlYyA9IHRpbWUgLSAobWluICogNjApO1xyXG4gICAgICAgIGNvbnN0IG1pblN0ciA9IG1pbiA8IDEwID8gJzAnICsgbWluIDogJycgKyBtaW47XHJcbiAgICAgICAgY29uc3Qgc2VjU3RyID0gc2VjIDwgMTAgPyAnMCcgKyBzZWMgOiAnJyArIHNlYztcclxuICAgICAgICByZXR1cm4gbWluU3RyICsgJzonICsgc2VjU3RyO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==