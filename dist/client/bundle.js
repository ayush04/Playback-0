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
            this.updateElapsedTime();
        }
    }
    queueAndPlay(song) {
        queue_1.Queue.queue(song);
        if (Player._isPlaying) {
            this.pauseTrack();
            this.resetElapsedTime();
        }
        this.loadTrack(song.getId());
        queue_1.Queue.updateCurrentPlayingTrack(song.getId());
        Player._isPlaying = true;
        this.togglePlay();
        Player.player.play();
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
    updateSongTotalTime(time) {
        const totalTimeEl = document.getElementById('total-time');
        if (totalTimeEl) {
            totalTimeEl.innerHTML = utils_1.Utils.formatTime(time);
        }
    }
    updateElapsedTime() {
        if (Player.currentTime < Player.player.getDuration()) {
            Player._timer = setInterval(() => {
                this.update(++Player.currentTime);
            }, 1000);
        }
    }
    update(currentTime) {
        const ellapsedTimeEl = document.getElementById('ellapsed-time');
        if (ellapsedTimeEl) {
            ellapsedTimeEl.innerHTML = utils_1.Utils.formatTime(currentTime);
        }
    }
    stopTimer() {
        clearInterval(Player._timer);
    }
    resetElapsedTime() {
        this.stopTimer();
        Player.currentTime = 0;
        this.update(0);
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
            this.updateSongTotalTime(Player.player.getDuration());
            this.updateElapsedTime();
            this.progress.start();
        });
        Player.player.on('ended', () => {
            this.resetElapsedTime();
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
                _tempQueue.push(new song_1.Song(item.id, item.title, item.description, item.thumbnail));
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
                if (item.snippet.channelTitle.toLowerCase().indexOf('vevo') > -1 || item.snippet.channelTitle.toLowerCase().indexOf('official') > -1
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
                    const resObj = new song_1.Song(item.id.videoId, item.snippet.title, item.snippet.description, thumbnail);
                    processedResponse.push(resObj);
                }
            }
        }
        return processedResponse;
    }
}
exports.Search = Search;
Search.MAX_RESULTS = 12;


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2V2ZW50cy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvYWQtc2NyaXB0Mi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMveXQtcGxheWVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvYXBwLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29tcG9uZW50cy9wbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb21wb25lbnRzL3Byb2dlc3MtYmFyLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29tcG9uZW50cy9xdWV1ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L21vZGVscy9zb25nLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvc2VydmljZXMvZXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9zZXJ2aWNlcy9nb29nbGUtYXV0aGVudGljYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9zZXJ2aWNlcy9zZWFyY2gudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9zZXJ2aWNlcy9zdG9yYWdlLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvc2VydmljZXMvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFdBQVcscUJBQXFCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FB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RCxNQUFNLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN6QztRQUNELE9BQU8sQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzNDLENBQUM7O0FBM0JMLDBCQTRCQztBQTNCa0IsdUJBQWUseUJBQWtDO0FBQ2pELHNCQUFjLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDTnhELE1BQWEsS0FBSztJQUNkLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBWTtRQUMxQixJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQztRQUNsQyxNQUFNLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDOUIsTUFBTSxNQUFNLEdBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQztRQUMvQyxNQUFNLE1BQU0sR0FBRyxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDO1FBQy9DLE9BQU8sTUFBTSxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUM7SUFDakMsQ0FBQztDQUNKO0FBVEQsc0JBU0MiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvY2xpZW50L2FwcC50c1wiKTtcbiIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSID0gdHlwZW9mIFJlZmxlY3QgPT09ICdvYmplY3QnID8gUmVmbGVjdCA6IG51bGxcbnZhciBSZWZsZWN0QXBwbHkgPSBSICYmIHR5cGVvZiBSLmFwcGx5ID09PSAnZnVuY3Rpb24nXG4gID8gUi5hcHBseVxuICA6IGZ1bmN0aW9uIFJlZmxlY3RBcHBseSh0YXJnZXQsIHJlY2VpdmVyLCBhcmdzKSB7XG4gICAgcmV0dXJuIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKHRhcmdldCwgcmVjZWl2ZXIsIGFyZ3MpO1xuICB9XG5cbnZhciBSZWZsZWN0T3duS2V5c1xuaWYgKFIgJiYgdHlwZW9mIFIub3duS2V5cyA9PT0gJ2Z1bmN0aW9uJykge1xuICBSZWZsZWN0T3duS2V5cyA9IFIub3duS2V5c1xufSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gIFJlZmxlY3RPd25LZXlzID0gZnVuY3Rpb24gUmVmbGVjdE93bktleXModGFyZ2V0KSB7XG4gICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRhcmdldClcbiAgICAgIC5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyh0YXJnZXQpKTtcbiAgfTtcbn0gZWxzZSB7XG4gIFJlZmxlY3RPd25LZXlzID0gZnVuY3Rpb24gUmVmbGVjdE93bktleXModGFyZ2V0KSB7XG4gICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRhcmdldCk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIFByb2Nlc3NFbWl0V2FybmluZyh3YXJuaW5nKSB7XG4gIGlmIChjb25zb2xlICYmIGNvbnNvbGUud2FybikgY29uc29sZS53YXJuKHdhcm5pbmcpO1xufVxuXG52YXIgTnVtYmVySXNOYU4gPSBOdW1iZXIuaXNOYU4gfHwgZnVuY3Rpb24gTnVtYmVySXNOYU4odmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9PSB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gRXZlbnRFbWl0dGVyKCkge1xuICBFdmVudEVtaXR0ZXIuaW5pdC5jYWxsKHRoaXMpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBFdmVudEVtaXR0ZXI7XG5cbi8vIEJhY2t3YXJkcy1jb21wYXQgd2l0aCBub2RlIDAuMTAueFxuRXZlbnRFbWl0dGVyLkV2ZW50RW1pdHRlciA9IEV2ZW50RW1pdHRlcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fZXZlbnRzID0gdW5kZWZpbmVkO1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fZXZlbnRzQ291bnQgPSAwO1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fbWF4TGlzdGVuZXJzID0gdW5kZWZpbmVkO1xuXG4vLyBCeSBkZWZhdWx0IEV2ZW50RW1pdHRlcnMgd2lsbCBwcmludCBhIHdhcm5pbmcgaWYgbW9yZSB0aGFuIDEwIGxpc3RlbmVycyBhcmVcbi8vIGFkZGVkIHRvIGl0LiBUaGlzIGlzIGEgdXNlZnVsIGRlZmF1bHQgd2hpY2ggaGVscHMgZmluZGluZyBtZW1vcnkgbGVha3MuXG52YXIgZGVmYXVsdE1heExpc3RlbmVycyA9IDEwO1xuXG5mdW5jdGlvbiBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKSB7XG4gIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgXCJsaXN0ZW5lclwiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBGdW5jdGlvbi4gUmVjZWl2ZWQgdHlwZSAnICsgdHlwZW9mIGxpc3RlbmVyKTtcbiAgfVxufVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoRXZlbnRFbWl0dGVyLCAnZGVmYXVsdE1heExpc3RlbmVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZGVmYXVsdE1heExpc3RlbmVycztcbiAgfSxcbiAgc2V0OiBmdW5jdGlvbihhcmcpIHtcbiAgICBpZiAodHlwZW9mIGFyZyAhPT0gJ251bWJlcicgfHwgYXJnIDwgMCB8fCBOdW1iZXJJc05hTihhcmcpKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVGhlIHZhbHVlIG9mIFwiZGVmYXVsdE1heExpc3RlbmVyc1wiIGlzIG91dCBvZiByYW5nZS4gSXQgbXVzdCBiZSBhIG5vbi1uZWdhdGl2ZSBudW1iZXIuIFJlY2VpdmVkICcgKyBhcmcgKyAnLicpO1xuICAgIH1cbiAgICBkZWZhdWx0TWF4TGlzdGVuZXJzID0gYXJnO1xuICB9XG59KTtcblxuRXZlbnRFbWl0dGVyLmluaXQgPSBmdW5jdGlvbigpIHtcblxuICBpZiAodGhpcy5fZXZlbnRzID09PSB1bmRlZmluZWQgfHxcbiAgICAgIHRoaXMuX2V2ZW50cyA9PT0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpLl9ldmVudHMpIHtcbiAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHRoaXMuX2V2ZW50c0NvdW50ID0gMDtcbiAgfVxuXG4gIHRoaXMuX21heExpc3RlbmVycyA9IHRoaXMuX21heExpc3RlbmVycyB8fCB1bmRlZmluZWQ7XG59O1xuXG4vLyBPYnZpb3VzbHkgbm90IGFsbCBFbWl0dGVycyBzaG91bGQgYmUgbGltaXRlZCB0byAxMC4gVGhpcyBmdW5jdGlvbiBhbGxvd3Ncbi8vIHRoYXQgdG8gYmUgaW5jcmVhc2VkLiBTZXQgdG8gemVybyBmb3IgdW5saW1pdGVkLlxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5zZXRNYXhMaXN0ZW5lcnMgPSBmdW5jdGlvbiBzZXRNYXhMaXN0ZW5lcnMobikge1xuICBpZiAodHlwZW9mIG4gIT09ICdudW1iZXInIHx8IG4gPCAwIHx8IE51bWJlcklzTmFOKG4pKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RoZSB2YWx1ZSBvZiBcIm5cIiBpcyBvdXQgb2YgcmFuZ2UuIEl0IG11c3QgYmUgYSBub24tbmVnYXRpdmUgbnVtYmVyLiBSZWNlaXZlZCAnICsgbiArICcuJyk7XG4gIH1cbiAgdGhpcy5fbWF4TGlzdGVuZXJzID0gbjtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5mdW5jdGlvbiBfZ2V0TWF4TGlzdGVuZXJzKHRoYXQpIHtcbiAgaWYgKHRoYXQuX21heExpc3RlbmVycyA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBFdmVudEVtaXR0ZXIuZGVmYXVsdE1heExpc3RlbmVycztcbiAgcmV0dXJuIHRoYXQuX21heExpc3RlbmVycztcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5nZXRNYXhMaXN0ZW5lcnMgPSBmdW5jdGlvbiBnZXRNYXhMaXN0ZW5lcnMoKSB7XG4gIHJldHVybiBfZ2V0TWF4TGlzdGVuZXJzKHRoaXMpO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24gZW1pdCh0eXBlKSB7XG4gIHZhciBhcmdzID0gW107XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSBhcmdzLnB1c2goYXJndW1lbnRzW2ldKTtcbiAgdmFyIGRvRXJyb3IgPSAodHlwZSA9PT0gJ2Vycm9yJyk7XG5cbiAgdmFyIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcbiAgaWYgKGV2ZW50cyAhPT0gdW5kZWZpbmVkKVxuICAgIGRvRXJyb3IgPSAoZG9FcnJvciAmJiBldmVudHMuZXJyb3IgPT09IHVuZGVmaW5lZCk7XG4gIGVsc2UgaWYgKCFkb0Vycm9yKVxuICAgIHJldHVybiBmYWxzZTtcblxuICAvLyBJZiB0aGVyZSBpcyBubyAnZXJyb3InIGV2ZW50IGxpc3RlbmVyIHRoZW4gdGhyb3cuXG4gIGlmIChkb0Vycm9yKSB7XG4gICAgdmFyIGVyO1xuICAgIGlmIChhcmdzLmxlbmd0aCA+IDApXG4gICAgICBlciA9IGFyZ3NbMF07XG4gICAgaWYgKGVyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgIC8vIE5vdGU6IFRoZSBjb21tZW50cyBvbiB0aGUgYHRocm93YCBsaW5lcyBhcmUgaW50ZW50aW9uYWwsIHRoZXkgc2hvd1xuICAgICAgLy8gdXAgaW4gTm9kZSdzIG91dHB1dCBpZiB0aGlzIHJlc3VsdHMgaW4gYW4gdW5oYW5kbGVkIGV4Y2VwdGlvbi5cbiAgICAgIHRocm93IGVyOyAvLyBVbmhhbmRsZWQgJ2Vycm9yJyBldmVudFxuICAgIH1cbiAgICAvLyBBdCBsZWFzdCBnaXZlIHNvbWUga2luZCBvZiBjb250ZXh0IHRvIHRoZSB1c2VyXG4gICAgdmFyIGVyciA9IG5ldyBFcnJvcignVW5oYW5kbGVkIGVycm9yLicgKyAoZXIgPyAnICgnICsgZXIubWVzc2FnZSArICcpJyA6ICcnKSk7XG4gICAgZXJyLmNvbnRleHQgPSBlcjtcbiAgICB0aHJvdyBlcnI7IC8vIFVuaGFuZGxlZCAnZXJyb3InIGV2ZW50XG4gIH1cblxuICB2YXIgaGFuZGxlciA9IGV2ZW50c1t0eXBlXTtcblxuICBpZiAoaGFuZGxlciA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBmYWxzZTtcblxuICBpZiAodHlwZW9mIGhhbmRsZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICBSZWZsZWN0QXBwbHkoaGFuZGxlciwgdGhpcywgYXJncyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGxlbiA9IGhhbmRsZXIubGVuZ3RoO1xuICAgIHZhciBsaXN0ZW5lcnMgPSBhcnJheUNsb25lKGhhbmRsZXIsIGxlbik7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47ICsraSlcbiAgICAgIFJlZmxlY3RBcHBseShsaXN0ZW5lcnNbaV0sIHRoaXMsIGFyZ3MpO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5mdW5jdGlvbiBfYWRkTGlzdGVuZXIodGFyZ2V0LCB0eXBlLCBsaXN0ZW5lciwgcHJlcGVuZCkge1xuICB2YXIgbTtcbiAgdmFyIGV2ZW50cztcbiAgdmFyIGV4aXN0aW5nO1xuXG4gIGNoZWNrTGlzdGVuZXIobGlzdGVuZXIpO1xuXG4gIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzO1xuICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpIHtcbiAgICBldmVudHMgPSB0YXJnZXQuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgdGFyZ2V0Ll9ldmVudHNDb3VudCA9IDA7XG4gIH0gZWxzZSB7XG4gICAgLy8gVG8gYXZvaWQgcmVjdXJzaW9uIGluIHRoZSBjYXNlIHRoYXQgdHlwZSA9PT0gXCJuZXdMaXN0ZW5lclwiISBCZWZvcmVcbiAgICAvLyBhZGRpbmcgaXQgdG8gdGhlIGxpc3RlbmVycywgZmlyc3QgZW1pdCBcIm5ld0xpc3RlbmVyXCIuXG4gICAgaWYgKGV2ZW50cy5uZXdMaXN0ZW5lciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0YXJnZXQuZW1pdCgnbmV3TGlzdGVuZXInLCB0eXBlLFxuICAgICAgICAgICAgICAgICAgbGlzdGVuZXIubGlzdGVuZXIgPyBsaXN0ZW5lci5saXN0ZW5lciA6IGxpc3RlbmVyKTtcblxuICAgICAgLy8gUmUtYXNzaWduIGBldmVudHNgIGJlY2F1c2UgYSBuZXdMaXN0ZW5lciBoYW5kbGVyIGNvdWxkIGhhdmUgY2F1c2VkIHRoZVxuICAgICAgLy8gdGhpcy5fZXZlbnRzIHRvIGJlIGFzc2lnbmVkIHRvIGEgbmV3IG9iamVjdFxuICAgICAgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHM7XG4gICAgfVxuICAgIGV4aXN0aW5nID0gZXZlbnRzW3R5cGVdO1xuICB9XG5cbiAgaWYgKGV4aXN0aW5nID09PSB1bmRlZmluZWQpIHtcbiAgICAvLyBPcHRpbWl6ZSB0aGUgY2FzZSBvZiBvbmUgbGlzdGVuZXIuIERvbid0IG5lZWQgdGhlIGV4dHJhIGFycmF5IG9iamVjdC5cbiAgICBleGlzdGluZyA9IGV2ZW50c1t0eXBlXSA9IGxpc3RlbmVyO1xuICAgICsrdGFyZ2V0Ll9ldmVudHNDb3VudDtcbiAgfSBlbHNlIHtcbiAgICBpZiAodHlwZW9mIGV4aXN0aW5nID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyBBZGRpbmcgdGhlIHNlY29uZCBlbGVtZW50LCBuZWVkIHRvIGNoYW5nZSB0byBhcnJheS5cbiAgICAgIGV4aXN0aW5nID0gZXZlbnRzW3R5cGVdID1cbiAgICAgICAgcHJlcGVuZCA/IFtsaXN0ZW5lciwgZXhpc3RpbmddIDogW2V4aXN0aW5nLCBsaXN0ZW5lcl07XG4gICAgICAvLyBJZiB3ZSd2ZSBhbHJlYWR5IGdvdCBhbiBhcnJheSwganVzdCBhcHBlbmQuXG4gICAgfSBlbHNlIGlmIChwcmVwZW5kKSB7XG4gICAgICBleGlzdGluZy51bnNoaWZ0KGxpc3RlbmVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXhpc3RpbmcucHVzaChsaXN0ZW5lcik7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgZm9yIGxpc3RlbmVyIGxlYWtcbiAgICBtID0gX2dldE1heExpc3RlbmVycyh0YXJnZXQpO1xuICAgIGlmIChtID4gMCAmJiBleGlzdGluZy5sZW5ndGggPiBtICYmICFleGlzdGluZy53YXJuZWQpIHtcbiAgICAgIGV4aXN0aW5nLndhcm5lZCA9IHRydWU7XG4gICAgICAvLyBObyBlcnJvciBjb2RlIGZvciB0aGlzIHNpbmNlIGl0IGlzIGEgV2FybmluZ1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG4gICAgICB2YXIgdyA9IG5ldyBFcnJvcignUG9zc2libGUgRXZlbnRFbWl0dGVyIG1lbW9yeSBsZWFrIGRldGVjdGVkLiAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmcubGVuZ3RoICsgJyAnICsgU3RyaW5nKHR5cGUpICsgJyBsaXN0ZW5lcnMgJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdhZGRlZC4gVXNlIGVtaXR0ZXIuc2V0TWF4TGlzdGVuZXJzKCkgdG8gJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdpbmNyZWFzZSBsaW1pdCcpO1xuICAgICAgdy5uYW1lID0gJ01heExpc3RlbmVyc0V4Y2VlZGVkV2FybmluZyc7XG4gICAgICB3LmVtaXR0ZXIgPSB0YXJnZXQ7XG4gICAgICB3LnR5cGUgPSB0eXBlO1xuICAgICAgdy5jb3VudCA9IGV4aXN0aW5nLmxlbmd0aDtcbiAgICAgIFByb2Nlc3NFbWl0V2FybmluZyh3KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyID0gZnVuY3Rpb24gYWRkTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgcmV0dXJuIF9hZGRMaXN0ZW5lcih0aGlzLCB0eXBlLCBsaXN0ZW5lciwgZmFsc2UpO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbiA9IEV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucHJlcGVuZExpc3RlbmVyID1cbiAgICBmdW5jdGlvbiBwcmVwZW5kTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgIHJldHVybiBfYWRkTGlzdGVuZXIodGhpcywgdHlwZSwgbGlzdGVuZXIsIHRydWUpO1xuICAgIH07XG5cbmZ1bmN0aW9uIG9uY2VXcmFwcGVyKCkge1xuICBpZiAoIXRoaXMuZmlyZWQpIHtcbiAgICB0aGlzLnRhcmdldC5yZW1vdmVMaXN0ZW5lcih0aGlzLnR5cGUsIHRoaXMud3JhcEZuKTtcbiAgICB0aGlzLmZpcmVkID0gdHJ1ZTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMClcbiAgICAgIHJldHVybiB0aGlzLmxpc3RlbmVyLmNhbGwodGhpcy50YXJnZXQpO1xuICAgIHJldHVybiB0aGlzLmxpc3RlbmVyLmFwcGx5KHRoaXMudGFyZ2V0LCBhcmd1bWVudHMpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9vbmNlV3JhcCh0YXJnZXQsIHR5cGUsIGxpc3RlbmVyKSB7XG4gIHZhciBzdGF0ZSA9IHsgZmlyZWQ6IGZhbHNlLCB3cmFwRm46IHVuZGVmaW5lZCwgdGFyZ2V0OiB0YXJnZXQsIHR5cGU6IHR5cGUsIGxpc3RlbmVyOiBsaXN0ZW5lciB9O1xuICB2YXIgd3JhcHBlZCA9IG9uY2VXcmFwcGVyLmJpbmQoc3RhdGUpO1xuICB3cmFwcGVkLmxpc3RlbmVyID0gbGlzdGVuZXI7XG4gIHN0YXRlLndyYXBGbiA9IHdyYXBwZWQ7XG4gIHJldHVybiB3cmFwcGVkO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbiBvbmNlKHR5cGUsIGxpc3RlbmVyKSB7XG4gIGNoZWNrTGlzdGVuZXIobGlzdGVuZXIpO1xuICB0aGlzLm9uKHR5cGUsIF9vbmNlV3JhcCh0aGlzLCB0eXBlLCBsaXN0ZW5lcikpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucHJlcGVuZE9uY2VMaXN0ZW5lciA9XG4gICAgZnVuY3Rpb24gcHJlcGVuZE9uY2VMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICAgICAgY2hlY2tMaXN0ZW5lcihsaXN0ZW5lcik7XG4gICAgICB0aGlzLnByZXBlbmRMaXN0ZW5lcih0eXBlLCBfb25jZVdyYXAodGhpcywgdHlwZSwgbGlzdGVuZXIpKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbi8vIEVtaXRzIGEgJ3JlbW92ZUxpc3RlbmVyJyBldmVudCBpZiBhbmQgb25seSBpZiB0aGUgbGlzdGVuZXIgd2FzIHJlbW92ZWQuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID1cbiAgICBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICAgICAgdmFyIGxpc3QsIGV2ZW50cywgcG9zaXRpb24sIGksIG9yaWdpbmFsTGlzdGVuZXI7XG5cbiAgICAgIGNoZWNrTGlzdGVuZXIobGlzdGVuZXIpO1xuXG4gICAgICBldmVudHMgPSB0aGlzLl9ldmVudHM7XG4gICAgICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICBsaXN0ID0gZXZlbnRzW3R5cGVdO1xuICAgICAgaWYgKGxpc3QgPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgIGlmIChsaXN0ID09PSBsaXN0ZW5lciB8fCBsaXN0Lmxpc3RlbmVyID09PSBsaXN0ZW5lcikge1xuICAgICAgICBpZiAoLS10aGlzLl9ldmVudHNDb3VudCA9PT0gMClcbiAgICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBkZWxldGUgZXZlbnRzW3R5cGVdO1xuICAgICAgICAgIGlmIChldmVudHMucmVtb3ZlTGlzdGVuZXIpXG4gICAgICAgICAgICB0aGlzLmVtaXQoJ3JlbW92ZUxpc3RlbmVyJywgdHlwZSwgbGlzdC5saXN0ZW5lciB8fCBsaXN0ZW5lcik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGxpc3QgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcG9zaXRpb24gPSAtMTtcblxuICAgICAgICBmb3IgKGkgPSBsaXN0Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgaWYgKGxpc3RbaV0gPT09IGxpc3RlbmVyIHx8IGxpc3RbaV0ubGlzdGVuZXIgPT09IGxpc3RlbmVyKSB7XG4gICAgICAgICAgICBvcmlnaW5hbExpc3RlbmVyID0gbGlzdFtpXS5saXN0ZW5lcjtcbiAgICAgICAgICAgIHBvc2l0aW9uID0gaTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwb3NpdGlvbiA8IDApXG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgICAgaWYgKHBvc2l0aW9uID09PSAwKVxuICAgICAgICAgIGxpc3Quc2hpZnQoKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgc3BsaWNlT25lKGxpc3QsIHBvc2l0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChsaXN0Lmxlbmd0aCA9PT0gMSlcbiAgICAgICAgICBldmVudHNbdHlwZV0gPSBsaXN0WzBdO1xuXG4gICAgICAgIGlmIChldmVudHMucmVtb3ZlTGlzdGVuZXIgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICB0aGlzLmVtaXQoJ3JlbW92ZUxpc3RlbmVyJywgdHlwZSwgb3JpZ2luYWxMaXN0ZW5lciB8fCBsaXN0ZW5lcik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub2ZmID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVBbGxMaXN0ZW5lcnMgPVxuICAgIGZ1bmN0aW9uIHJlbW92ZUFsbExpc3RlbmVycyh0eXBlKSB7XG4gICAgICB2YXIgbGlzdGVuZXJzLCBldmVudHMsIGk7XG5cbiAgICAgIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcbiAgICAgIGlmIChldmVudHMgPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgIC8vIG5vdCBsaXN0ZW5pbmcgZm9yIHJlbW92ZUxpc3RlbmVyLCBubyBuZWVkIHRvIGVtaXRcbiAgICAgIGlmIChldmVudHMucmVtb3ZlTGlzdGVuZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgICAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50c1t0eXBlXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgaWYgKC0tdGhpcy5fZXZlbnRzQ291bnQgPT09IDApXG4gICAgICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIGRlbGV0ZSBldmVudHNbdHlwZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIC8vIGVtaXQgcmVtb3ZlTGlzdGVuZXIgZm9yIGFsbCBsaXN0ZW5lcnMgb24gYWxsIGV2ZW50c1xuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhldmVudHMpO1xuICAgICAgICB2YXIga2V5O1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgIGtleSA9IGtleXNbaV07XG4gICAgICAgICAgaWYgKGtleSA9PT0gJ3JlbW92ZUxpc3RlbmVyJykgY29udGludWU7XG4gICAgICAgICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoa2V5KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycygncmVtb3ZlTGlzdGVuZXInKTtcbiAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgbGlzdGVuZXJzID0gZXZlbnRzW3R5cGVdO1xuXG4gICAgICBpZiAodHlwZW9mIGxpc3RlbmVycyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVycyk7XG4gICAgICB9IGVsc2UgaWYgKGxpc3RlbmVycyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vIExJRk8gb3JkZXJcbiAgICAgICAgZm9yIChpID0gbGlzdGVuZXJzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcnNbaV0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbmZ1bmN0aW9uIF9saXN0ZW5lcnModGFyZ2V0LCB0eXBlLCB1bndyYXApIHtcbiAgdmFyIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzO1xuXG4gIGlmIChldmVudHMgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gW107XG5cbiAgdmFyIGV2bGlzdGVuZXIgPSBldmVudHNbdHlwZV07XG4gIGlmIChldmxpc3RlbmVyID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIFtdO1xuXG4gIGlmICh0eXBlb2YgZXZsaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJylcbiAgICByZXR1cm4gdW53cmFwID8gW2V2bGlzdGVuZXIubGlzdGVuZXIgfHwgZXZsaXN0ZW5lcl0gOiBbZXZsaXN0ZW5lcl07XG5cbiAgcmV0dXJuIHVud3JhcCA/XG4gICAgdW53cmFwTGlzdGVuZXJzKGV2bGlzdGVuZXIpIDogYXJyYXlDbG9uZShldmxpc3RlbmVyLCBldmxpc3RlbmVyLmxlbmd0aCk7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJzID0gZnVuY3Rpb24gbGlzdGVuZXJzKHR5cGUpIHtcbiAgcmV0dXJuIF9saXN0ZW5lcnModGhpcywgdHlwZSwgdHJ1ZSk7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJhd0xpc3RlbmVycyA9IGZ1bmN0aW9uIHJhd0xpc3RlbmVycyh0eXBlKSB7XG4gIHJldHVybiBfbGlzdGVuZXJzKHRoaXMsIHR5cGUsIGZhbHNlKTtcbn07XG5cbkV2ZW50RW1pdHRlci5saXN0ZW5lckNvdW50ID0gZnVuY3Rpb24oZW1pdHRlciwgdHlwZSkge1xuICBpZiAodHlwZW9mIGVtaXR0ZXIubGlzdGVuZXJDb3VudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBlbWl0dGVyLmxpc3RlbmVyQ291bnQodHlwZSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGxpc3RlbmVyQ291bnQuY2FsbChlbWl0dGVyLCB0eXBlKTtcbiAgfVxufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lckNvdW50ID0gbGlzdGVuZXJDb3VudDtcbmZ1bmN0aW9uIGxpc3RlbmVyQ291bnQodHlwZSkge1xuICB2YXIgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuXG4gIGlmIChldmVudHMgIT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBldmxpc3RlbmVyID0gZXZlbnRzW3R5cGVdO1xuXG4gICAgaWYgKHR5cGVvZiBldmxpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9IGVsc2UgaWYgKGV2bGlzdGVuZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGV2bGlzdGVuZXIubGVuZ3RoO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAwO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmV2ZW50TmFtZXMgPSBmdW5jdGlvbiBldmVudE5hbWVzKCkge1xuICByZXR1cm4gdGhpcy5fZXZlbnRzQ291bnQgPiAwID8gUmVmbGVjdE93bktleXModGhpcy5fZXZlbnRzKSA6IFtdO1xufTtcblxuZnVuY3Rpb24gYXJyYXlDbG9uZShhcnIsIG4pIHtcbiAgdmFyIGNvcHkgPSBuZXcgQXJyYXkobik7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbjsgKytpKVxuICAgIGNvcHlbaV0gPSBhcnJbaV07XG4gIHJldHVybiBjb3B5O1xufVxuXG5mdW5jdGlvbiBzcGxpY2VPbmUobGlzdCwgaW5kZXgpIHtcbiAgZm9yICg7IGluZGV4ICsgMSA8IGxpc3QubGVuZ3RoOyBpbmRleCsrKVxuICAgIGxpc3RbaW5kZXhdID0gbGlzdFtpbmRleCArIDFdO1xuICBsaXN0LnBvcCgpO1xufVxuXG5mdW5jdGlvbiB1bndyYXBMaXN0ZW5lcnMoYXJyKSB7XG4gIHZhciByZXQgPSBuZXcgQXJyYXkoYXJyLmxlbmd0aCk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcmV0Lmxlbmd0aDsgKytpKSB7XG4gICAgcmV0W2ldID0gYXJyW2ldLmxpc3RlbmVyIHx8IGFycltpXTtcbiAgfVxuICByZXR1cm4gcmV0O1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBsb2FkU2NyaXB0MiAoc3JjLCBhdHRycywgcGFyZW50Tm9kZSkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpXG4gICAgc2NyaXB0LmFzeW5jID0gdHJ1ZVxuICAgIHNjcmlwdC5zcmMgPSBzcmNcblxuICAgIGZvciAoY29uc3QgW2ssIHZdIG9mIE9iamVjdC5lbnRyaWVzKGF0dHJzIHx8IHt9KSkge1xuICAgICAgc2NyaXB0LnNldEF0dHJpYnV0ZShrLCB2KVxuICAgIH1cblxuICAgIHNjcmlwdC5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICBzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBudWxsXG4gICAgICByZXNvbHZlKHNjcmlwdClcbiAgICB9XG5cbiAgICBzY3JpcHQub25lcnJvciA9ICgpID0+IHtcbiAgICAgIHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG51bGxcbiAgICAgIHJlamVjdChuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkICR7c3JjfWApKVxuICAgIH1cblxuICAgIGNvbnN0IG5vZGUgPSBwYXJlbnROb2RlIHx8IGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXVxuICAgIG5vZGUuYXBwZW5kQ2hpbGQoc2NyaXB0KVxuICB9KVxufVxuIiwiY29uc3QgRXZlbnRFbWl0dGVyID0gcmVxdWlyZSgnZXZlbnRzJykuRXZlbnRFbWl0dGVyXG5jb25zdCBsb2FkU2NyaXB0ID0gcmVxdWlyZSgnbG9hZC1zY3JpcHQyJylcblxuY29uc3QgWU9VVFVCRV9JRlJBTUVfQVBJX1NSQyA9ICdodHRwczovL3d3dy55b3V0dWJlLmNvbS9pZnJhbWVfYXBpJ1xuXG5jb25zdCBZT1VUVUJFX1NUQVRFUyA9IHtcbiAgJy0xJzogJ3Vuc3RhcnRlZCcsXG4gIDA6ICdlbmRlZCcsXG4gIDE6ICdwbGF5aW5nJyxcbiAgMjogJ3BhdXNlZCcsXG4gIDM6ICdidWZmZXJpbmcnLFxuICA1OiAnY3VlZCdcbn1cblxuY29uc3QgWU9VVFVCRV9FUlJPUiA9IHtcbiAgLy8gVGhlIHJlcXVlc3QgY29udGFpbnMgYW4gaW52YWxpZCBwYXJhbWV0ZXIgdmFsdWUuIEZvciBleGFtcGxlLCB0aGlzIGVycm9yXG4gIC8vIG9jY3VycyBpZiB5b3Ugc3BlY2lmeSBhIHZpZGVvSWQgdGhhdCBkb2VzIG5vdCBoYXZlIDExIGNoYXJhY3RlcnMsIG9yIGlmIHRoZVxuICAvLyB2aWRlb0lkIGNvbnRhaW5zIGludmFsaWQgY2hhcmFjdGVycywgc3VjaCBhcyBleGNsYW1hdGlvbiBwb2ludHMgb3IgYXN0ZXJpc2tzLlxuICBJTlZBTElEX1BBUkFNOiAyLFxuXG4gIC8vIFRoZSByZXF1ZXN0ZWQgY29udGVudCBjYW5ub3QgYmUgcGxheWVkIGluIGFuIEhUTUw1IHBsYXllciBvciBhbm90aGVyIGVycm9yXG4gIC8vIHJlbGF0ZWQgdG8gdGhlIEhUTUw1IHBsYXllciBoYXMgb2NjdXJyZWQuXG4gIEhUTUw1X0VSUk9SOiA1LFxuXG4gIC8vIFRoZSB2aWRlbyByZXF1ZXN0ZWQgd2FzIG5vdCBmb3VuZC4gVGhpcyBlcnJvciBvY2N1cnMgd2hlbiBhIHZpZGVvIGhhcyBiZWVuXG4gIC8vIHJlbW92ZWQgKGZvciBhbnkgcmVhc29uKSBvciBoYXMgYmVlbiBtYXJrZWQgYXMgcHJpdmF0ZS5cbiAgTk9UX0ZPVU5EOiAxMDAsXG5cbiAgLy8gVGhlIG93bmVyIG9mIHRoZSByZXF1ZXN0ZWQgdmlkZW8gZG9lcyBub3QgYWxsb3cgaXQgdG8gYmUgcGxheWVkIGluIGVtYmVkZGVkXG4gIC8vIHBsYXllcnMuXG4gIFVOUExBWUFCTEVfMTogMTAxLFxuXG4gIC8vIFRoaXMgZXJyb3IgaXMgdGhlIHNhbWUgYXMgMTAxLiBJdCdzIGp1c3QgYSAxMDEgZXJyb3IgaW4gZGlzZ3Vpc2UhXG4gIFVOUExBWUFCTEVfMjogMTUwXG59XG5cbmNvbnN0IGxvYWRJZnJhbWVBUElDYWxsYmFja3MgPSBbXVxuXG4vKipcbiAqIFlvdVR1YmUgUGxheWVyLiBFeHBvc2VzIGEgYmV0dGVyIEFQSSwgd2l0aCBuaWNlciBldmVudHMuXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fHNlbGVjdG9yfSBlbGVtZW50XG4gKi9cbmNsYXNzIFlvdVR1YmVQbGF5ZXIgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAoZWxlbWVudCwgb3B0cykge1xuICAgIHN1cGVyKClcblxuICAgIGNvbnN0IGVsZW0gPSB0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZydcbiAgICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtZW50KVxuICAgICAgOiBlbGVtZW50XG5cbiAgICBpZiAoZWxlbS5pZCkge1xuICAgICAgdGhpcy5faWQgPSBlbGVtLmlkIC8vIHVzZSBleGlzdGluZyBlbGVtZW50IGlkXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2lkID0gZWxlbS5pZCA9ICd5dHBsYXllci0nICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygxNikuc2xpY2UoMiwgOClcbiAgICB9XG5cbiAgICB0aGlzLl9vcHRzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICB3aWR0aDogNjQwLFxuICAgICAgaGVpZ2h0OiAzNjAsXG4gICAgICBhdXRvcGxheTogZmFsc2UsXG4gICAgICBjYXB0aW9uczogdW5kZWZpbmVkLFxuICAgICAgY29udHJvbHM6IHRydWUsXG4gICAgICBrZXlib2FyZDogdHJ1ZSxcbiAgICAgIGZ1bGxzY3JlZW46IHRydWUsXG4gICAgICBhbm5vdGF0aW9uczogdHJ1ZSxcbiAgICAgIG1vZGVzdEJyYW5kaW5nOiBmYWxzZSxcbiAgICAgIHJlbGF0ZWQ6IHRydWUsXG4gICAgICB0aW1ldXBkYXRlRnJlcXVlbmN5OiAxMDAwLFxuICAgICAgcGxheXNJbmxpbmU6IHRydWVcbiAgICB9LCBvcHRzKVxuXG4gICAgdGhpcy52aWRlb0lkID0gbnVsbFxuICAgIHRoaXMuZGVzdHJveWVkID0gZmFsc2VcblxuICAgIHRoaXMuX2FwaSA9IG51bGxcbiAgICB0aGlzLl9hdXRvcGxheSA9IGZhbHNlIC8vIGF1dG9wbGF5IHRoZSBmaXJzdCB2aWRlbz9cbiAgICB0aGlzLl9wbGF5ZXIgPSBudWxsXG4gICAgdGhpcy5fcmVhZHkgPSBmYWxzZSAvLyBpcyBwbGF5ZXIgcmVhZHk/XG4gICAgdGhpcy5fcXVldWUgPSBbXVxuXG4gICAgdGhpcy5faW50ZXJ2YWwgPSBudWxsXG5cbiAgICAvLyBTZXR1cCBsaXN0ZW5lcnMgZm9yICd0aW1ldXBkYXRlJyBldmVudHMuIFRoZSBZb3VUdWJlIFBsYXllciBkb2VzIG5vdCBmaXJlXG4gICAgLy8gJ3RpbWV1cGRhdGUnIGV2ZW50cywgc28gdGhleSBhcmUgc2ltdWxhdGVkIHVzaW5nIGEgc2V0SW50ZXJ2YWwoKS5cbiAgICB0aGlzLl9zdGFydEludGVydmFsID0gdGhpcy5fc3RhcnRJbnRlcnZhbC5iaW5kKHRoaXMpXG4gICAgdGhpcy5fc3RvcEludGVydmFsID0gdGhpcy5fc3RvcEludGVydmFsLmJpbmQodGhpcylcblxuICAgIHRoaXMub24oJ3BsYXlpbmcnLCB0aGlzLl9zdGFydEludGVydmFsKVxuICAgIHRoaXMub24oJ3Vuc3RhcnRlZCcsIHRoaXMuX3N0b3BJbnRlcnZhbClcbiAgICB0aGlzLm9uKCdlbmRlZCcsIHRoaXMuX3N0b3BJbnRlcnZhbClcbiAgICB0aGlzLm9uKCdwYXVzZWQnLCB0aGlzLl9zdG9wSW50ZXJ2YWwpXG4gICAgdGhpcy5vbignYnVmZmVyaW5nJywgdGhpcy5fc3RvcEludGVydmFsKVxuXG4gICAgdGhpcy5fbG9hZElmcmFtZUFQSSgoZXJyLCBhcGkpID0+IHtcbiAgICAgIGlmIChlcnIpIHJldHVybiB0aGlzLl9kZXN0cm95KG5ldyBFcnJvcignWW91VHViZSBJZnJhbWUgQVBJIGZhaWxlZCB0byBsb2FkJykpXG4gICAgICB0aGlzLl9hcGkgPSBhcGlcblxuICAgICAgLy8gSWYgbG9hZCh2aWRlb0lkLCBbYXV0b3BsYXldKSB3YXMgY2FsbGVkIGJlZm9yZSBJZnJhbWUgQVBJIGxvYWRlZCwgZW5zdXJlIGl0IGdldHNcbiAgICAgIC8vIGNhbGxlZCBhZ2FpbiBub3dcbiAgICAgIGlmICh0aGlzLnZpZGVvSWQpIHRoaXMubG9hZCh0aGlzLnZpZGVvSWQsIHRoaXMuX2F1dG9wbGF5KVxuICAgIH0pXG4gIH1cblxuICBsb2FkICh2aWRlb0lkLCBhdXRvcGxheSA9IGZhbHNlKSB7XG4gICAgaWYgKHRoaXMuZGVzdHJveWVkKSByZXR1cm5cblxuICAgIHRoaXMudmlkZW9JZCA9IHZpZGVvSWRcbiAgICB0aGlzLl9hdXRvcGxheSA9IGF1dG9wbGF5XG5cbiAgICAvLyBJZiB0aGUgSWZyYW1lIEFQSSBpcyBub3QgcmVhZHkgeWV0LCBkbyBub3RoaW5nLiBPbmNlIHRoZSBJZnJhbWUgQVBJIGlzXG4gICAgLy8gcmVhZHksIGBsb2FkKHRoaXMudmlkZW9JZClgIHdpbGwgYmUgY2FsbGVkLlxuICAgIGlmICghdGhpcy5fYXBpKSByZXR1cm5cblxuICAgIC8vIElmIHRoZXJlIGlzIG5vIHBsYXllciBpbnN0YW5jZSwgY3JlYXRlIG9uZS5cbiAgICBpZiAoIXRoaXMuX3BsYXllcikge1xuICAgICAgdGhpcy5fY3JlYXRlUGxheWVyKHZpZGVvSWQpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgcGxheWVyIGluc3RhbmNlIGlzIG5vdCByZWFkeSB5ZXQsIGRvIG5vdGhpbmcuIE9uY2UgdGhlIHBsYXllclxuICAgIC8vIGluc3RhbmNlIGlzIHJlYWR5LCBgbG9hZCh0aGlzLnZpZGVvSWQpYCB3aWxsIGJlIGNhbGxlZC4gVGhpcyBlbnN1cmVzIHRoYXRcbiAgICAvLyB0aGUgbGFzdCBjYWxsIHRvIGBsb2FkKClgIGlzIHRoZSBvbmUgdGhhdCB0YWtlcyBlZmZlY3QuXG4gICAgaWYgKCF0aGlzLl9yZWFkeSkgcmV0dXJuXG5cbiAgICAvLyBJZiB0aGUgcGxheWVyIGluc3RhbmNlIGlzIHJlYWR5LCBsb2FkIHRoZSBnaXZlbiBgdmlkZW9JZGAuXG4gICAgaWYgKGF1dG9wbGF5KSB7XG4gICAgICB0aGlzLl9wbGF5ZXIubG9hZFZpZGVvQnlJZCh2aWRlb0lkKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9wbGF5ZXIuY3VlVmlkZW9CeUlkKHZpZGVvSWQpXG4gICAgfVxuICB9XG5cbiAgcGxheSAoKSB7XG4gICAgaWYgKHRoaXMuX3JlYWR5KSB0aGlzLl9wbGF5ZXIucGxheVZpZGVvKClcbiAgICBlbHNlIHRoaXMuX3F1ZXVlQ29tbWFuZCgncGxheScpXG4gIH1cblxuICBwYXVzZSAoKSB7XG4gICAgaWYgKHRoaXMuX3JlYWR5KSB0aGlzLl9wbGF5ZXIucGF1c2VWaWRlbygpXG4gICAgZWxzZSB0aGlzLl9xdWV1ZUNvbW1hbmQoJ3BhdXNlJylcbiAgfVxuXG4gIHN0b3AgKCkge1xuICAgIGlmICh0aGlzLl9yZWFkeSkgdGhpcy5fcGxheWVyLnN0b3BWaWRlbygpXG4gICAgZWxzZSB0aGlzLl9xdWV1ZUNvbW1hbmQoJ3N0b3AnKVxuICB9XG5cbiAgc2VlayAoc2Vjb25kcykge1xuICAgIGlmICh0aGlzLl9yZWFkeSkgdGhpcy5fcGxheWVyLnNlZWtUbyhzZWNvbmRzLCB0cnVlKVxuICAgIGVsc2UgdGhpcy5fcXVldWVDb21tYW5kKCdzZWVrJywgc2Vjb25kcylcbiAgfVxuXG4gIHNldFZvbHVtZSAodm9sdW1lKSB7XG4gICAgaWYgKHRoaXMuX3JlYWR5KSB0aGlzLl9wbGF5ZXIuc2V0Vm9sdW1lKHZvbHVtZSlcbiAgICBlbHNlIHRoaXMuX3F1ZXVlQ29tbWFuZCgnc2V0Vm9sdW1lJywgdm9sdW1lKVxuICB9XG5cbiAgZ2V0Vm9sdW1lICgpIHtcbiAgICByZXR1cm4gKHRoaXMuX3JlYWR5ICYmIHRoaXMuX3BsYXllci5nZXRWb2x1bWUoKSkgfHwgMFxuICB9XG5cbiAgbXV0ZSAoKSB7XG4gICAgaWYgKHRoaXMuX3JlYWR5KSB0aGlzLl9wbGF5ZXIubXV0ZSgpXG4gICAgZWxzZSB0aGlzLl9xdWV1ZUNvbW1hbmQoJ211dGUnKVxuICB9XG5cbiAgdW5NdXRlICgpIHtcbiAgICBpZiAodGhpcy5fcmVhZHkpIHRoaXMuX3BsYXllci51bk11dGUoKVxuICAgIGVsc2UgdGhpcy5fcXVldWVDb21tYW5kKCd1bk11dGUnKVxuICB9XG5cbiAgaXNNdXRlZCAoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9yZWFkeSAmJiB0aGlzLl9wbGF5ZXIuaXNNdXRlZCgpKSB8fCBmYWxzZVxuICB9XG5cbiAgc2V0U2l6ZSAod2lkdGgsIGhlaWdodCkge1xuICAgIGlmICh0aGlzLl9yZWFkeSkgdGhpcy5fcGxheWVyLnNldFNpemUod2lkdGgsIGhlaWdodClcbiAgICBlbHNlIHRoaXMuX3F1ZXVlQ29tbWFuZCgnc2V0U2l6ZScsIHdpZHRoLCBoZWlnaHQpXG4gIH1cblxuICBzZXRQbGF5YmFja1JhdGUgKHJhdGUpIHtcbiAgICBpZiAodGhpcy5fcmVhZHkpIHRoaXMuX3BsYXllci5zZXRQbGF5YmFja1JhdGUocmF0ZSlcbiAgICBlbHNlIHRoaXMuX3F1ZXVlQ29tbWFuZCgnc2V0UGxheWJhY2tSYXRlJywgcmF0ZSlcbiAgfVxuXG4gIHNldFBsYXliYWNrUXVhbGl0eSAoc3VnZ2VzdGVkUXVhbGl0eSkge1xuICAgIGlmICh0aGlzLl9yZWFkeSkgdGhpcy5fcGxheWVyLnNldFBsYXliYWNrUXVhbGl0eShzdWdnZXN0ZWRRdWFsaXR5KVxuICAgIGVsc2UgdGhpcy5fcXVldWVDb21tYW5kKCdzZXRQbGF5YmFja1F1YWxpdHknLCBzdWdnZXN0ZWRRdWFsaXR5KVxuICB9XG5cbiAgZ2V0UGxheWJhY2tSYXRlICgpIHtcbiAgICByZXR1cm4gKHRoaXMuX3JlYWR5ICYmIHRoaXMuX3BsYXllci5nZXRQbGF5YmFja1JhdGUoKSkgfHwgMVxuICB9XG5cbiAgZ2V0QXZhaWxhYmxlUGxheWJhY2tSYXRlcyAoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9yZWFkeSAmJiB0aGlzLl9wbGF5ZXIuZ2V0QXZhaWxhYmxlUGxheWJhY2tSYXRlcygpKSB8fCBbMV1cbiAgfVxuXG4gIGdldER1cmF0aW9uICgpIHtcbiAgICByZXR1cm4gKHRoaXMuX3JlYWR5ICYmIHRoaXMuX3BsYXllci5nZXREdXJhdGlvbigpKSB8fCAwXG4gIH1cblxuICBnZXRQcm9ncmVzcyAoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9yZWFkeSAmJiB0aGlzLl9wbGF5ZXIuZ2V0VmlkZW9Mb2FkZWRGcmFjdGlvbigpKSB8fCAwXG4gIH1cblxuICBnZXRTdGF0ZSAoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9yZWFkeSAmJiBZT1VUVUJFX1NUQVRFU1t0aGlzLl9wbGF5ZXIuZ2V0UGxheWVyU3RhdGUoKV0pIHx8ICd1bnN0YXJ0ZWQnXG4gIH1cblxuICBnZXRDdXJyZW50VGltZSAoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9yZWFkeSAmJiB0aGlzLl9wbGF5ZXIuZ2V0Q3VycmVudFRpbWUoKSkgfHwgMFxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5fZGVzdHJveSgpXG4gIH1cblxuICBfZGVzdHJveSAoZXJyKSB7XG4gICAgaWYgKHRoaXMuZGVzdHJveWVkKSByZXR1cm5cbiAgICB0aGlzLmRlc3Ryb3llZCA9IHRydWVcblxuICAgIGlmICh0aGlzLl9wbGF5ZXIpIHtcbiAgICAgIHRoaXMuX3BsYXllci5zdG9wVmlkZW8gJiYgdGhpcy5fcGxheWVyLnN0b3BWaWRlbygpXG4gICAgICB0aGlzLl9wbGF5ZXIuZGVzdHJveSgpXG4gICAgfVxuXG4gICAgdGhpcy52aWRlb0lkID0gbnVsbFxuXG4gICAgdGhpcy5faWQgPSBudWxsXG4gICAgdGhpcy5fb3B0cyA9IG51bGxcbiAgICB0aGlzLl9hcGkgPSBudWxsXG4gICAgdGhpcy5fcGxheWVyID0gbnVsbFxuICAgIHRoaXMuX3JlYWR5ID0gZmFsc2VcbiAgICB0aGlzLl9xdWV1ZSA9IG51bGxcblxuICAgIHRoaXMuX3N0b3BJbnRlcnZhbCgpXG5cbiAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKCdwbGF5aW5nJywgdGhpcy5fc3RhcnRJbnRlcnZhbClcbiAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKCdwYXVzZWQnLCB0aGlzLl9zdG9wSW50ZXJ2YWwpXG4gICAgdGhpcy5yZW1vdmVMaXN0ZW5lcignYnVmZmVyaW5nJywgdGhpcy5fc3RvcEludGVydmFsKVxuICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIoJ3Vuc3RhcnRlZCcsIHRoaXMuX3N0b3BJbnRlcnZhbClcbiAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKCdlbmRlZCcsIHRoaXMuX3N0b3BJbnRlcnZhbClcblxuICAgIGlmIChlcnIpIHRoaXMuZW1pdCgnZXJyb3InLCBlcnIpXG4gIH1cblxuICBfcXVldWVDb21tYW5kIChjb21tYW5kLCAuLi5hcmdzKSB7XG4gICAgaWYgKHRoaXMuZGVzdHJveWVkKSByZXR1cm5cbiAgICB0aGlzLl9xdWV1ZS5wdXNoKFtjb21tYW5kLCBhcmdzXSlcbiAgfVxuXG4gIF9mbHVzaFF1ZXVlICgpIHtcbiAgICB3aGlsZSAodGhpcy5fcXVldWUubGVuZ3RoKSB7XG4gICAgICBjb25zdCBjb21tYW5kID0gdGhpcy5fcXVldWUuc2hpZnQoKVxuICAgICAgdGhpc1tjb21tYW5kWzBdXS5hcHBseSh0aGlzLCBjb21tYW5kWzFdKVxuICAgIH1cbiAgfVxuXG4gIF9sb2FkSWZyYW1lQVBJIChjYikge1xuICAgIC8vIElmIEFQSSBpcyBsb2FkZWQsIHRoZXJlIGlzIG5vdGhpbmcgZWxzZSB0byBkb1xuICAgIGlmICh3aW5kb3cuWVQgJiYgdHlwZW9mIHdpbmRvdy5ZVC5QbGF5ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBjYihudWxsLCB3aW5kb3cuWVQpXG4gICAgfVxuXG4gICAgLy8gT3RoZXJ3aXNlLCBxdWV1ZSBjYWxsYmFjayB1bnRpbCBBUEkgaXMgbG9hZGVkXG4gICAgbG9hZElmcmFtZUFQSUNhbGxiYWNrcy5wdXNoKGNiKVxuXG4gICAgY29uc3Qgc2NyaXB0cyA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpKVxuICAgIGNvbnN0IGlzTG9hZGluZyA9IHNjcmlwdHMuc29tZShzY3JpcHQgPT4gc2NyaXB0LnNyYyA9PT0gWU9VVFVCRV9JRlJBTUVfQVBJX1NSQylcblxuICAgIC8vIElmIEFQSSA8c2NyaXB0PiB0YWcgaXMgbm90IHByZXNlbnQgaW4gdGhlIHBhZ2UsIGluamVjdCBpdC4gRW5zdXJlcyB0aGF0XG4gICAgLy8gaWYgdXNlciBpbmNsdWRlcyBhIGhhcmRjb2RlZCA8c2NyaXB0PiB0YWcgaW4gSFRNTCBmb3IgcGVyZm9ybWFuY2UsIGFub3RoZXJcbiAgICAvLyBvbmUgd2lsbCBub3QgYmUgYWRkZWRcbiAgICBpZiAoIWlzTG9hZGluZykge1xuICAgICAgbG9hZFNjcmlwdChZT1VUVUJFX0lGUkFNRV9BUElfU1JDKS5jYXRjaChlcnIgPT4ge1xuICAgICAgICB3aGlsZSAobG9hZElmcmFtZUFQSUNhbGxiYWNrcy5sZW5ndGgpIHtcbiAgICAgICAgICBjb25zdCBsb2FkQ2IgPSBsb2FkSWZyYW1lQVBJQ2FsbGJhY2tzLnNoaWZ0KClcbiAgICAgICAgICBsb2FkQ2IoZXJyKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIC8vIElmIHJlYWR5IGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50LCBjcmVhdGUgaXRcbiAgICBpZiAodHlwZW9mIHdpbmRvdy5vbllvdVR1YmVJZnJhbWVBUElSZWFkeSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgd2luZG93Lm9uWW91VHViZUlmcmFtZUFQSVJlYWR5ID0gKCkgPT4ge1xuICAgICAgICB3aGlsZSAobG9hZElmcmFtZUFQSUNhbGxiYWNrcy5sZW5ndGgpIHtcbiAgICAgICAgICBjb25zdCBsb2FkQ2IgPSBsb2FkSWZyYW1lQVBJQ2FsbGJhY2tzLnNoaWZ0KClcbiAgICAgICAgICBsb2FkQ2IobnVsbCwgd2luZG93LllUKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX2NyZWF0ZVBsYXllciAodmlkZW9JZCkge1xuICAgIGlmICh0aGlzLmRlc3Ryb3llZCkgcmV0dXJuXG5cbiAgICBjb25zdCBvcHRzID0gdGhpcy5fb3B0c1xuXG4gICAgdGhpcy5fcGxheWVyID0gbmV3IHRoaXMuX2FwaS5QbGF5ZXIodGhpcy5faWQsIHtcbiAgICAgIHdpZHRoOiBvcHRzLndpZHRoLFxuICAgICAgaGVpZ2h0OiBvcHRzLmhlaWdodCxcbiAgICAgIHZpZGVvSWQ6IHZpZGVvSWQsXG4gICAgICBwbGF5ZXJWYXJzOiB7XG4gICAgICAgIC8vIFRoaXMgcGFyYW1ldGVyIHNwZWNpZmllcyB3aGV0aGVyIHRoZSBpbml0aWFsIHZpZGVvIHdpbGwgYXV0b21hdGljYWxseVxuICAgICAgICAvLyBzdGFydCB0byBwbGF5IHdoZW4gdGhlIHBsYXllciBsb2Fkcy4gU3VwcG9ydGVkIHZhbHVlcyBhcmUgMCBvciAxLiBUaGVcbiAgICAgICAgLy8gZGVmYXVsdCB2YWx1ZSBpcyAwLlxuICAgICAgICBhdXRvcGxheTogb3B0cy5hdXRvcGxheSA/IDEgOiAwLFxuXG4gICAgICAgIC8vIFNldHRpbmcgdGhlIHBhcmFtZXRlcidzIHZhbHVlIHRvIDEgY2F1c2VzIGNsb3NlZCBjYXB0aW9ucyB0byBiZSBzaG93blxuICAgICAgICAvLyBieSBkZWZhdWx0LCBldmVuIGlmIHRoZSB1c2VyIGhhcyB0dXJuZWQgY2FwdGlvbnMgb2ZmLiBUaGUgZGVmYXVsdFxuICAgICAgICAvLyBiZWhhdmlvciBpcyBiYXNlZCBvbiB1c2VyIHByZWZlcmVuY2UuXG4gICAgICAgIGNjX2xvYWRfcG9saWN5OiBvcHRzLmNhcHRpb25zICE9IG51bGxcbiAgICAgICAgICA/IG9wdHMuY2FwdGlvbnMgIT09IGZhbHNlID8gMSA6IDBcbiAgICAgICAgICA6IHVuZGVmaW5lZCwgLy8gZGVmYXVsdCB0byBub3Qgc2V0dGluZyB0aGlzIG9wdGlvblxuXG4gICAgICAgIC8vIFNldHMgdGhlIHBsYXllcidzIGludGVyZmFjZSBsYW5ndWFnZS4gVGhlIHBhcmFtZXRlciB2YWx1ZSBpcyBhbiBJU09cbiAgICAgICAgLy8gNjM5LTEgdHdvLWxldHRlciBsYW5ndWFnZSBjb2RlIG9yIGEgZnVsbHkgc3BlY2lmaWVkIGxvY2FsZS4gRm9yXG4gICAgICAgIC8vIGV4YW1wbGUsIGZyIGFuZCBmci1jYSBhcmUgYm90aCB2YWxpZCB2YWx1ZXMuIE90aGVyIGxhbmd1YWdlIGlucHV0XG4gICAgICAgIC8vIGNvZGVzLCBzdWNoIGFzIElFVEYgbGFuZ3VhZ2UgdGFncyAoQkNQIDQ3KSBtaWdodCBhbHNvIGJlIGhhbmRsZWRcbiAgICAgICAgLy8gcHJvcGVybHkuXG4gICAgICAgIGhsOiAob3B0cy5jYXB0aW9ucyAhPSBudWxsICYmIG9wdHMuY2FwdGlvbnMgIT09IGZhbHNlKVxuICAgICAgICAgID8gb3B0cy5jYXB0aW9uc1xuICAgICAgICAgIDogdW5kZWZpbmVkLCAvLyBkZWZhdWx0IHRvIG5vdCBzZXR0aW5nIHRoaXMgb3B0aW9uXG5cbiAgICAgICAgLy8gVGhpcyBwYXJhbWV0ZXIgc3BlY2lmaWVzIHRoZSBkZWZhdWx0IGxhbmd1YWdlIHRoYXQgdGhlIHBsYXllciB3aWxsXG4gICAgICAgIC8vIHVzZSB0byBkaXNwbGF5IGNhcHRpb25zLiBTZXQgdGhlIHBhcmFtZXRlcidzIHZhbHVlIHRvIGFuIElTTyA2MzktMVxuICAgICAgICAvLyB0d28tbGV0dGVyIGxhbmd1YWdlIGNvZGUuXG4gICAgICAgIGNjX2xhbmdfcHJlZjogKG9wdHMuY2FwdGlvbnMgIT0gbnVsbCAmJiBvcHRzLmNhcHRpb25zICE9PSBmYWxzZSlcbiAgICAgICAgICA/IG9wdHMuY2FwdGlvbnNcbiAgICAgICAgICA6IHVuZGVmaW5lZCwgLy8gZGVmYXVsdCB0byBub3Qgc2V0dGluZyB0aGlzIG9wdGlvblxuXG4gICAgICAgIC8vIFRoaXMgcGFyYW1ldGVyIGluZGljYXRlcyB3aGV0aGVyIHRoZSB2aWRlbyBwbGF5ZXIgY29udHJvbHMgYXJlXG4gICAgICAgIC8vIGRpc3BsYXllZC4gRm9yIElGcmFtZSBlbWJlZHMgdGhhdCBsb2FkIGEgRmxhc2ggcGxheWVyLCBpdCBhbHNvIGRlZmluZXNcbiAgICAgICAgLy8gd2hlbiB0aGUgY29udHJvbHMgZGlzcGxheSBpbiB0aGUgcGxheWVyIGFzIHdlbGwgYXMgd2hlbiB0aGUgcGxheWVyXG4gICAgICAgIC8vIHdpbGwgbG9hZC4gU3VwcG9ydGVkIHZhbHVlcyBhcmU6XG4gICAgICAgIC8vICAgLSBjb250cm9scz0wIOKAkyBQbGF5ZXIgY29udHJvbHMgZG8gbm90IGRpc3BsYXkgaW4gdGhlIHBsYXllci4gRm9yXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgSUZyYW1lIGVtYmVkcywgdGhlIEZsYXNoIHBsYXllciBsb2FkcyBpbW1lZGlhdGVseS5cbiAgICAgICAgLy8gICAtIGNvbnRyb2xzPTEg4oCTIChkZWZhdWx0KSBQbGF5ZXIgY29udHJvbHMgZGlzcGxheSBpbiB0aGUgcGxheWVyLiBGb3JcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICBJRnJhbWUgZW1iZWRzLCB0aGUgY29udHJvbHMgZGlzcGxheSBpbW1lZGlhdGVseSBhbmRcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICB0aGUgRmxhc2ggcGxheWVyIGFsc28gbG9hZHMgaW1tZWRpYXRlbHkuXG4gICAgICAgIC8vICAgLSBjb250cm9scz0yIOKAkyBQbGF5ZXIgY29udHJvbHMgZGlzcGxheSBpbiB0aGUgcGxheWVyLiBGb3IgSUZyYW1lXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgZW1iZWRzLCB0aGUgY29udHJvbHMgZGlzcGxheSBhbmQgdGhlIEZsYXNoIHBsYXllclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgIGxvYWRzIGFmdGVyIHRoZSB1c2VyIGluaXRpYXRlcyB0aGUgdmlkZW8gcGxheWJhY2suXG4gICAgICAgIGNvbnRyb2xzOiBvcHRzLmNvbnRyb2xzID8gMiA6IDAsXG5cbiAgICAgICAgLy8gU2V0dGluZyB0aGUgcGFyYW1ldGVyJ3MgdmFsdWUgdG8gMSBjYXVzZXMgdGhlIHBsYXllciB0byBub3QgcmVzcG9uZCB0b1xuICAgICAgICAvLyBrZXlib2FyZCBjb250cm9scy4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgMCwgd2hpY2ggbWVhbnMgdGhhdCBrZXlib2FyZFxuICAgICAgICAvLyBjb250cm9scyBhcmUgZW5hYmxlZC5cbiAgICAgICAgZGlzYWJsZWtiOiBvcHRzLmtleWJvYXJkID8gMCA6IDEsXG5cbiAgICAgICAgLy8gU2V0dGluZyB0aGUgcGFyYW1ldGVyJ3MgdmFsdWUgdG8gMSBlbmFibGVzIHRoZSBwbGF5ZXIgdG8gYmVcbiAgICAgICAgLy8gY29udHJvbGxlZCB2aWEgSUZyYW1lIG9yIEphdmFTY3JpcHQgUGxheWVyIEFQSSBjYWxscy4gVGhlIGRlZmF1bHRcbiAgICAgICAgLy8gdmFsdWUgaXMgMCwgd2hpY2ggbWVhbnMgdGhhdCB0aGUgcGxheWVyIGNhbm5vdCBiZSBjb250cm9sbGVkIHVzaW5nXG4gICAgICAgIC8vIHRob3NlIEFQSXMuXG4gICAgICAgIGVuYWJsZWpzYXBpOiAxLFxuXG4gICAgICAgIC8vIFNldHRpbmcgdGhpcyBwYXJhbWV0ZXIgdG8gMCBwcmV2ZW50cyB0aGUgZnVsbHNjcmVlbiBidXR0b24gZnJvbVxuICAgICAgICAvLyBkaXNwbGF5aW5nIGluIHRoZSBwbGF5ZXIuIFRoZSBkZWZhdWx0IHZhbHVlIGlzIDEsIHdoaWNoIGNhdXNlcyB0aGVcbiAgICAgICAgLy8gZnVsbHNjcmVlbiBidXR0b24gdG8gZGlzcGxheS5cbiAgICAgICAgZnM6IG9wdHMuZnVsbHNjcmVlbiA/IDEgOiAwLFxuXG4gICAgICAgIC8vIFNldHRpbmcgdGhlIHBhcmFtZXRlcidzIHZhbHVlIHRvIDEgY2F1c2VzIHZpZGVvIGFubm90YXRpb25zIHRvIGJlXG4gICAgICAgIC8vIHNob3duIGJ5IGRlZmF1bHQsIHdoZXJlYXMgc2V0dGluZyB0byAzIGNhdXNlcyB2aWRlbyBhbm5vdGF0aW9ucyB0byBub3RcbiAgICAgICAgLy8gYmUgc2hvd24gYnkgZGVmYXVsdC4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgMS5cbiAgICAgICAgaXZfbG9hZF9wb2xpY3k6IG9wdHMuYW5ub3RhdGlvbnMgPyAxIDogMyxcblxuICAgICAgICAvLyBUaGlzIHBhcmFtZXRlciBsZXRzIHlvdSB1c2UgYSBZb3VUdWJlIHBsYXllciB0aGF0IGRvZXMgbm90IHNob3cgYVxuICAgICAgICAvLyBZb3VUdWJlIGxvZ28uIFNldCB0aGUgcGFyYW1ldGVyIHZhbHVlIHRvIDEgdG8gcHJldmVudCB0aGUgWW91VHViZSBsb2dvXG4gICAgICAgIC8vIGZyb20gZGlzcGxheWluZyBpbiB0aGUgY29udHJvbCBiYXIuIE5vdGUgdGhhdCBhIHNtYWxsIFlvdVR1YmUgdGV4dFxuICAgICAgICAvLyBsYWJlbCB3aWxsIHN0aWxsIGRpc3BsYXkgaW4gdGhlIHVwcGVyLXJpZ2h0IGNvcm5lciBvZiBhIHBhdXNlZCB2aWRlb1xuICAgICAgICAvLyB3aGVuIHRoZSB1c2VyJ3MgbW91c2UgcG9pbnRlciBob3ZlcnMgb3ZlciB0aGUgcGxheWVyLlxuICAgICAgICBtb2Rlc3RicmFuZGluZzogb3B0cy5tb2Rlc3RCcmFuZGluZyA/IDEgOiAwLFxuXG4gICAgICAgIC8vIFRoaXMgcGFyYW1ldGVyIHByb3ZpZGVzIGFuIGV4dHJhIHNlY3VyaXR5IG1lYXN1cmUgZm9yIHRoZSBJRnJhbWUgQVBJXG4gICAgICAgIC8vIGFuZCBpcyBvbmx5IHN1cHBvcnRlZCBmb3IgSUZyYW1lIGVtYmVkcy4gSWYgeW91IGFyZSB1c2luZyB0aGUgSUZyYW1lXG4gICAgICAgIC8vIEFQSSwgd2hpY2ggbWVhbnMgeW91IGFyZSBzZXR0aW5nIHRoZSBlbmFibGVqc2FwaSBwYXJhbWV0ZXIgdmFsdWUgdG8gMSxcbiAgICAgICAgLy8geW91IHNob3VsZCBhbHdheXMgc3BlY2lmeSB5b3VyIGRvbWFpbiBhcyB0aGUgb3JpZ2luIHBhcmFtZXRlciB2YWx1ZS5cbiAgICAgICAgb3JpZ2luOiB3aW5kb3cubG9jYXRpb24ub3JpZ2luLFxuXG4gICAgICAgIC8vIFRoaXMgcGFyYW1ldGVyIGNvbnRyb2xzIHdoZXRoZXIgdmlkZW9zIHBsYXkgaW5saW5lIG9yIGZ1bGxzY3JlZW4gaW4gYW5cbiAgICAgICAgLy8gSFRNTDUgcGxheWVyIG9uIGlPUy4gVmFsaWQgdmFsdWVzIGFyZTpcbiAgICAgICAgLy8gICAtIDA6IFRoaXMgdmFsdWUgY2F1c2VzIGZ1bGxzY3JlZW4gcGxheWJhY2suIFRoaXMgaXMgY3VycmVudGx5IHRoZVxuICAgICAgICAvLyAgICAgICAgZGVmYXVsdCB2YWx1ZSwgdGhvdWdoIHRoZSBkZWZhdWx0IGlzIHN1YmplY3QgdG8gY2hhbmdlLlxuICAgICAgICAvLyAgIC0gMTogVGhpcyB2YWx1ZSBjYXVzZXMgaW5saW5lIHBsYXliYWNrIGZvciBVSVdlYlZpZXdzIGNyZWF0ZWQgd2l0aFxuICAgICAgICAvLyAgICAgICAgdGhlIGFsbG93c0lubGluZU1lZGlhUGxheWJhY2sgcHJvcGVydHkgc2V0IHRvIFRSVUUuXG4gICAgICAgIHBsYXlzaW5saW5lOiBvcHRzLnBsYXlzSW5saW5lID8gMSA6IDAsXG5cbiAgICAgICAgLy8gVGhpcyBwYXJhbWV0ZXIgaW5kaWNhdGVzIHdoZXRoZXIgdGhlIHBsYXllciBzaG91bGQgc2hvdyByZWxhdGVkXG4gICAgICAgIC8vIHZpZGVvcyBmcm9tIHRoZSBzYW1lIGNoYW5uZWwgKDApIG9yIGZyb20gYW55IGNoYW5uZWwgKDEpIHdoZW5cbiAgICAgICAgLy8gcGxheWJhY2sgb2YgdGhlIHZpZGVvIGVuZHMuIFRoZSBkZWZhdWx0IHZhbHVlIGlzIDEuXG4gICAgICAgIHJlbDogb3B0cy5yZWxhdGVkID8gMSA6IDAsXG5cbiAgICAgICAgLy8gKE5vdCBwYXJ0IG9mIGRvY3VtZW50ZWQgQVBJKSBBbGxvdyBodG1sIGVsZW1lbnRzIHdpdGggaGlnaGVyIHotaW5kZXhcbiAgICAgICAgLy8gdG8gYmUgc2hvd24gb24gdG9wIG9mIHRoZSBZb3VUdWJlIHBsYXllci5cbiAgICAgICAgd21vZGU6ICdvcGFxdWUnXG4gICAgICB9LFxuICAgICAgZXZlbnRzOiB7XG4gICAgICAgIG9uUmVhZHk6ICgpID0+IHRoaXMuX29uUmVhZHkodmlkZW9JZCksXG4gICAgICAgIG9uU3RhdGVDaGFuZ2U6IChkYXRhKSA9PiB0aGlzLl9vblN0YXRlQ2hhbmdlKGRhdGEpLFxuICAgICAgICBvblBsYXliYWNrUXVhbGl0eUNoYW5nZTogKGRhdGEpID0+IHRoaXMuX29uUGxheWJhY2tRdWFsaXR5Q2hhbmdlKGRhdGEpLFxuICAgICAgICBvblBsYXliYWNrUmF0ZUNoYW5nZTogKGRhdGEpID0+IHRoaXMuX29uUGxheWJhY2tSYXRlQ2hhbmdlKGRhdGEpLFxuICAgICAgICBvbkVycm9yOiAoZGF0YSkgPT4gdGhpcy5fb25FcnJvcihkYXRhKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogVGhpcyBldmVudCBmaXJlcyB3aGVuIHRoZSBwbGF5ZXIgaGFzIGZpbmlzaGVkIGxvYWRpbmcgYW5kIGlzIHJlYWR5IHRvIGJlZ2luXG4gICAqIHJlY2VpdmluZyBBUEkgY2FsbHMuXG4gICAqL1xuICBfb25SZWFkeSAodmlkZW9JZCkge1xuICAgIGlmICh0aGlzLmRlc3Ryb3llZCkgcmV0dXJuXG5cbiAgICB0aGlzLl9yZWFkeSA9IHRydWVcblxuICAgIC8vIE9uY2UgdGhlIHBsYXllciBpcyByZWFkeSwgYWx3YXlzIGNhbGwgYGxvYWQodmlkZW9JZCwgW2F1dG9wbGF5XSlgIHRvIGhhbmRsZVxuICAgIC8vIHRoZXNlIHBvc3NpYmxlIGNhc2VzOlxuICAgIC8vXG4gICAgLy8gICAxLiBgbG9hZCh2aWRlb0lkLCB0cnVlKWAgd2FzIGNhbGxlZCBiZWZvcmUgdGhlIHBsYXllciB3YXMgcmVhZHkuIEVuc3VyZSB0aGF0XG4gICAgLy8gICAgICB0aGUgc2VsZWN0ZWQgdmlkZW8gc3RhcnRzIHRvIHBsYXkuXG4gICAgLy9cbiAgICAvLyAgIDIuIGBsb2FkKHZpZGVvSWQsIGZhbHNlKWAgd2FzIGNhbGxlZCBiZWZvcmUgdGhlIHBsYXllciB3YXMgcmVhZHkuIE5vdyB0aGVcbiAgICAvLyAgICAgIHBsYXllciBpcyByZWFkeSBhbmQgdGhlcmUncyBub3RoaW5nIHRvIGRvLlxuICAgIC8vXG4gICAgLy8gICAzLiBgbG9hZCh2aWRlb0lkLCBbYXV0b3BsYXldKWAgd2FzIGNhbGxlZCBtdWx0aXBsZSB0aW1lcyBiZWZvcmUgdGhlIHBsYXllclxuICAgIC8vICAgICAgd2FzIHJlYWR5LiBUaGVyZWZvcmUsIHRoZSBwbGF5ZXIgd2FzIGluaXRpYWxpemVkIHdpdGggdGhlIHdyb25nIHZpZGVvSWQsXG4gICAgLy8gICAgICBzbyBsb2FkIHRoZSBsYXRlc3QgdmlkZW9JZCBhbmQgcG90ZW50aWFsbHkgYXV0b3BsYXkgaXQuXG4gICAgdGhpcy5sb2FkKHRoaXMudmlkZW9JZCwgdGhpcy5fYXV0b3BsYXkpXG5cbiAgICB0aGlzLl9mbHVzaFF1ZXVlKClcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiB0aGUgcGxheWVyJ3Mgc3RhdGUgY2hhbmdlcy4gV2UgZW1pdCBmcmllbmRseSBldmVudHMgc28gdGhlIHVzZXJcbiAgICogZG9lc24ndCBuZWVkIHRvIHVzZSBZb3VUdWJlJ3MgWVQuUGxheWVyU3RhdGUuKiBldmVudCBjb25zdGFudHMuXG4gICAqL1xuICBfb25TdGF0ZUNoYW5nZSAoZGF0YSkge1xuICAgIGlmICh0aGlzLmRlc3Ryb3llZCkgcmV0dXJuXG5cbiAgICBjb25zdCBzdGF0ZSA9IFlPVVRVQkVfU1RBVEVTW2RhdGEuZGF0YV1cblxuICAgIGlmIChzdGF0ZSkge1xuICAgICAgLy8gU2VuZCBhICd0aW1ldXBkYXRlJyBhbnl0aW1lIHRoZSBzdGF0ZSBjaGFuZ2VzLiBXaGVuIHRoZSB2aWRlbyBoYWx0cyBmb3IgYW55XG4gICAgICAvLyByZWFzb24gKCdwYXVzZWQnLCAnYnVmZmVyaW5nJywgb3IgJ2VuZGVkJykgbm8gZnVydGhlciAndGltZXVwZGF0ZScgZXZlbnRzXG4gICAgICAvLyBzaG91bGQgZmlyZSB1bnRpbCB0aGUgdmlkZW8gdW5oYWx0cy5cbiAgICAgIGlmIChbJ3BhdXNlZCcsICdidWZmZXJpbmcnLCAnZW5kZWQnXS5pbmNsdWRlcyhzdGF0ZSkpIHRoaXMuX29uVGltZXVwZGF0ZSgpXG5cbiAgICAgIHRoaXMuZW1pdChzdGF0ZSlcblxuICAgICAgLy8gV2hlbiB0aGUgdmlkZW8gY2hhbmdlcyAoJ3Vuc3RhcnRlZCcgb3IgJ2N1ZWQnKSBvciBzdGFydHMgKCdwbGF5aW5nJykgdGhlbiBhXG4gICAgICAvLyAndGltZXVwZGF0ZScgc2hvdWxkIGZvbGxvdyBhZnRlcndhcmRzIChuZXZlciBiZWZvcmUhKSB0byByZXNldCB0aGUgdGltZS5cbiAgICAgIGlmIChbJ3Vuc3RhcnRlZCcsICdwbGF5aW5nJywgJ2N1ZWQnXS5pbmNsdWRlcyhzdGF0ZSkpIHRoaXMuX29uVGltZXVwZGF0ZSgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVW5yZWNvZ25pemVkIHN0YXRlIGNoYW5nZTogJyArIGRhdGEpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgZXZlbnQgZmlyZXMgd2hlbmV2ZXIgdGhlIHZpZGVvIHBsYXliYWNrIHF1YWxpdHkgY2hhbmdlcy4gUG9zc2libGVcbiAgICogdmFsdWVzIGFyZTogJ3NtYWxsJywgJ21lZGl1bScsICdsYXJnZScsICdoZDcyMCcsICdoZDEwODAnLCAnaGlnaHJlcycuXG4gICAqL1xuICBfb25QbGF5YmFja1F1YWxpdHlDaGFuZ2UgKGRhdGEpIHtcbiAgICBpZiAodGhpcy5kZXN0cm95ZWQpIHJldHVyblxuICAgIHRoaXMuZW1pdCgncGxheWJhY2tRdWFsaXR5Q2hhbmdlJywgZGF0YS5kYXRhKVxuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgZXZlbnQgZmlyZXMgd2hlbmV2ZXIgdGhlIHZpZGVvIHBsYXliYWNrIHJhdGUgY2hhbmdlcy5cbiAgICovXG4gIF9vblBsYXliYWNrUmF0ZUNoYW5nZSAoZGF0YSkge1xuICAgIGlmICh0aGlzLmRlc3Ryb3llZCkgcmV0dXJuXG4gICAgdGhpcy5lbWl0KCdwbGF5YmFja1JhdGVDaGFuZ2UnLCBkYXRhLmRhdGEpXG4gIH1cblxuICAvKipcbiAgICogVGhpcyBldmVudCBmaXJlcyBpZiBhbiBlcnJvciBvY2N1cnMgaW4gdGhlIHBsYXllci5cbiAgICovXG4gIF9vbkVycm9yIChkYXRhKSB7XG4gICAgaWYgKHRoaXMuZGVzdHJveWVkKSByZXR1cm5cblxuICAgIGNvbnN0IGNvZGUgPSBkYXRhLmRhdGFcblxuICAgIC8vIFRoZSBIVE1MNV9FUlJPUiBlcnJvciBvY2N1cnMgd2hlbiB0aGUgWW91VHViZSBwbGF5ZXIgbmVlZHMgdG8gc3dpdGNoIGZyb21cbiAgICAvLyBIVE1MNSB0byBGbGFzaCB0byBzaG93IGFuIGFkLiBJZ25vcmUgaXQuXG4gICAgaWYgKGNvZGUgPT09IFlPVVRVQkVfRVJST1IuSFRNTDVfRVJST1IpIHJldHVyblxuXG4gICAgLy8gVGhlIHJlbWFpbmluZyBlcnJvciB0eXBlcyBvY2N1ciB3aGVuIHRoZSBZb3VUdWJlIHBsYXllciBjYW5ub3QgcGxheSB0aGVcbiAgICAvLyBnaXZlbiB2aWRlby4gVGhpcyBpcyBub3QgYSBmYXRhbCBlcnJvci4gUmVwb3J0IGl0IGFzIHVucGxheWFibGUgc28gdGhlIHVzZXJcbiAgICAvLyBoYXMgYW4gb3Bwb3J0dW5pdHkgdG8gcGxheSBhbm90aGVyIHZpZGVvLlxuICAgIGlmIChjb2RlID09PSBZT1VUVUJFX0VSUk9SLlVOUExBWUFCTEVfMSB8fFxuICAgICAgICBjb2RlID09PSBZT1VUVUJFX0VSUk9SLlVOUExBWUFCTEVfMiB8fFxuICAgICAgICBjb2RlID09PSBZT1VUVUJFX0VSUk9SLk5PVF9GT1VORCB8fFxuICAgICAgICBjb2RlID09PSBZT1VUVUJFX0VSUk9SLklOVkFMSURfUEFSQU0pIHtcbiAgICAgIHJldHVybiB0aGlzLmVtaXQoJ3VucGxheWFibGUnLCB0aGlzLnZpZGVvSWQpXG4gICAgfVxuXG4gICAgLy8gVW5leHBlY3RlZCBlcnJvciwgZG9lcyBub3QgbWF0Y2ggYW55IGtub3duIHR5cGVcbiAgICB0aGlzLl9kZXN0cm95KG5ldyBFcnJvcignWW91VHViZSBQbGF5ZXIgRXJyb3IuIFVua25vd24gZXJyb3IgY29kZTogJyArIGNvZGUpKVxuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgZXZlbnQgZmlyZXMgd2hlbiB0aGUgdGltZSBpbmRpY2F0ZWQgYnkgdGhlIGBnZXRDdXJyZW50VGltZSgpYCBtZXRob2RcbiAgICogaGFzIGJlZW4gdXBkYXRlZC5cbiAgICovXG4gIF9vblRpbWV1cGRhdGUgKCkge1xuICAgIHRoaXMuZW1pdCgndGltZXVwZGF0ZScsIHRoaXMuZ2V0Q3VycmVudFRpbWUoKSlcbiAgfVxuXG4gIF9zdGFydEludGVydmFsICgpIHtcbiAgICB0aGlzLl9pbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHRoaXMuX29uVGltZXVwZGF0ZSgpLCB0aGlzLl9vcHRzLnRpbWV1cGRhdGVGcmVxdWVuY3kpXG4gIH1cblxuICBfc3RvcEludGVydmFsICgpIHtcbiAgICBjbGVhckludGVydmFsKHRoaXMuX2ludGVydmFsKVxuICAgIHRoaXMuX2ludGVydmFsID0gbnVsbFxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gWW91VHViZVBsYXllclxuIiwiaW1wb3J0IHsgUGxheWVyIH0gZnJvbSAnLi9jb21wb25lbnRzL3BsYXllcic7XHJcbmltcG9ydCB7IFF1ZXVlIH0gZnJvbSAnLi9jb21wb25lbnRzL3F1ZXVlJztcclxuaW1wb3J0IHsgR29vZ2xlQXV0aGVudGljYXRpb24gfSBmcm9tICcuL3NlcnZpY2VzL2dvb2dsZS1hdXRoZW50aWNhdGlvbic7XHJcbmltcG9ydCB7IFNlYXJjaCB9IGZyb20gJy4vc2VydmljZXMvc2VhcmNoJztcclxuaW1wb3J0IHsgU29uZyB9IGZyb20gJy4vbW9kZWxzL3NvbmcnO1xyXG5pbXBvcnQgeyBBcHBFdmVudCB9IGZyb20gJy4vc2VydmljZXMvZXZlbnQnO1xyXG5cclxuY29uc3QgcGxheWVyID0gUGxheWVyLmdldEluc3RhbmNlKCcjcGxheWVyJyk7XHJcblxyXG4vL1F1ZXVlLnF1ZXVlKCdEeURmZ01PVWpDSScpO1xyXG4vKiBRdWV1ZS5xdWV1ZSgna0pRUDdraXc1RmsnKTtcclxuUXVldWUucXVldWUoJ3NXTFFWQTlObDVzJyk7XHJcblF1ZXVlLnF1ZXVlKCdFYklsZ0Q1SW5TZycpO1xyXG5RdWV1ZS5xdWV1ZSgndGl5THZvMjRBMmcnKTtcclxuUXVldWUucXVldWUoJ18xdUdOYUU2cXZVJyk7ICovXHJcblxyXG5wbGF5ZXIucmVnaXN0ZXJFdmVudEhhbmRsZXJzKCk7XHJcblxyXG5jb25zdCBzaWduQnRuSGFuZGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZ25pbi1idG4nKTsgXHJcbmNvbnN0IHNlYXJjaEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWZvcm0nKTtcclxuY29uc3Qgc2VhcmNoQmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1iYXInKTtcclxuY29uc3Qgc2VhcmNoQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1idXR0b24nKTtcclxuXHJcbmNvbnN0IGNoZWNrSWZBdXRoZW50aWNhdGVkID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgaWYgKEdvb2dsZUF1dGhlbnRpY2F0aW9uLmlzQXV0aGVudGljYXRlZCgpKSB7XHJcbiAgICAgICAgc2lnbkJ0bkhhbmRsZT8uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICAgICAgc2VhcmNoRm9ybT8uY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZWQnKTtcclxuICAgICAgICBzZWFyY2hCYXI/LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnU2VhcmNoIHNvbmdzIGFuZCBhcnRpc3RzJyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBzaWduQnRuSGFuZGxlPy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgICAgICBzZWFyY2hGb3JtPy5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlZCcpO1xyXG4gICAgfVxyXG59XHJcbmNoZWNrSWZBdXRoZW50aWNhdGVkKCk7XHJcbnNpZ25CdG5IYW5kbGU/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgR29vZ2xlQXV0aGVudGljYXRpb24uYXV0aGVudGljYXRlKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgY2hlY2tJZkF1dGhlbnRpY2F0ZWQoKTsgICBcclxuICAgIH0pO1xyXG59KTtcclxuXHJcbmNvbnN0IG1haW5Db250YWluZXJCbG9jazogc3RyaW5nID0gYFxyXG48ZGl2IGNsYXNzPVwiY29sLXhzLTYgY29sLXNtLTQgY29sLW1kLTQgY29sLWxnLTNcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJpdGVtXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInBvcy1ybHRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW0tb3ZlcmxheSBiZy1ibGFjay1vcGFjaXR5XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VudGVyIHRleHQtY2VudGVyIHctZnVsbCBtLXQtblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWYgY2xhc3M9XCJwbGF5TGlua1wiIGRhdGEtYXR0cmlidXRlPVwie3tpZH19XCIgZGF0YS1hdHRyaWJ1dGUtYWN0aW9uPVwicGxheVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLTJ4IGZhLXBsYXktY2lyY2xlIHRleHQtd2hpdGUgbS1yLXNtXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmIGNsYXNzPVwicGxheUxpbmtcIiBkYXRhLWF0dHJpYnV0ZT1cInt7aWR9fVwiIGRhdGEtYXR0cmlidXRlLWFjdGlvbj1cInF1ZXVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtMnggZmEtYXJyb3ctYWx0LWNpcmNsZS1kb3duIHRleHQtd2hpdGVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwici0yeFwiPlxyXG4gICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImltZy1mbHVpZFwiIHNyYz1cInt7dGh1bWJuYWlsfX1cIi8+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwLTIgdGV4dC1jZW50ZXIgdGV4dC1tdXRlZFwiPlxyXG4gICAgICAgICAgICB7e3RpdGxlfX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuYDtcclxuXHJcbmNvbnN0IG5hdkJsb2NrID0gYFxyXG48bGkgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gbm8tYm9yZGVyIG5vLXBhZGRlciBwYWRkZXItaC1zbSBxdWV1ZS1saXN0XCIgZGF0YS1hdHRyaWJ1dGU9e3tpZH19PlxyXG4gICAgPHNwYW4gY2xhc3M9XCJmbG9hdC1sZWZ0IHRodW1iLXNtIG0tciBtLXQteHNcIj5cclxuICAgICAgICA8aW1nIHNyYz1cInt7dGh1bWJuYWlsfX1cIiBhbHQ9XCIuLi5cIiBjbGFzcz1cInJcIj5cclxuICAgIDwvc3Bhbj5cclxuICAgIDxkaXYgY2xhc3M9XCJjbGVhclwiPlxyXG4gICAgICAgIDxkaXY+PHNtYWxsPnt7dGl0bGV9fTwvc21hbGw+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC9saT5cclxuYDsgXHJcbnNlYXJjaEJ0bj8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBzZWFyY2hUZXJtID0gKDxIVE1MSW5wdXRFbGVtZW50PnNlYXJjaEJhcik/LnZhbHVlO1xyXG4gICAgaWYgKHNlYXJjaFRlcm0pIHtcclxuICAgICAgICBTZWFyY2guc2VhcmNoKHNlYXJjaFRlcm0pLnRoZW4oKHJlc3BvbnNlOiBBcnJheTxTb25nPikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzZWFyY2hSZXN1bHREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLXJlc3VsdHMnKTtcclxuICAgICAgICAgICAgaWYgKHNlYXJjaFJlc3VsdERpdikge1xyXG4gICAgICAgICAgICAgICAgc2VhcmNoUmVzdWx0RGl2LmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgbGV0IHNvbmc6IFNvbmc7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHNvbmcgb2YgcmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZmlsbGVkVGVtcGxhdGUgPSBtYWluQ29udGFpbmVyQmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbGVkVGVtcGxhdGUgPSBmaWxsZWRUZW1wbGF0ZS5yZXBsYWNlKCd7e3RodW1ibmFpbH19Jywgc29uZy5nZXRUaHVtYm5haWwoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbGVkVGVtcGxhdGUgPSBmaWxsZWRUZW1wbGF0ZS5yZXBsYWNlKCd7e3RpdGxlfX0nLCBzb25nLmdldFRpdGxlKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbGxlZFRlbXBsYXRlID0gZmlsbGVkVGVtcGxhdGUucmVwbGFjZSgve3tpZH19L2csIHNvbmcuZ2V0SWQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoUmVzdWx0RGl2LmlubmVySFRNTCA9IHNlYXJjaFJlc3VsdERpdj8uaW5uZXJIVE1MICsgZmlsbGVkVGVtcGxhdGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwbGF5TGluaycpKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaWQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1hdHRyaWJ1dGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYWN0aW9uID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXR0cmlidXRlLWFjdGlvbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNvbmcgPSBTb25nLmdldFNvbmdGcm9tTGlzdChyZXNwb25zZSwgaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNvbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWN0aW9uID09PSAncGxheScpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyLnF1ZXVlQW5kUGxheShzb25nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFF1ZXVlLnF1ZXVlKHNvbmcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhRdWV1ZS5nZXRDdXJyZW50UXVldWUoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnSW52YWxpZCBzb25nIElEIDogJywgaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbmNvbnN0IHVwZGF0ZVF1ZXVlTGlzdGVuZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnUXVldWUgdXBkYXRlZCcpO1xyXG4gICAgY29uc3QgY3VycmVudFF1ZXVlOiBBcnJheTxTb25nPiA9IFF1ZXVlLmdldEN1cnJlbnRRdWV1ZSgpO1xyXG4gICAgY29uc3QgcGxheWxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWxpc3QnKTtcclxuICAgIGlmIChwbGF5bGlzdCkge1xyXG4gICAgICAgIGxldCBzb25nOiBTb25nO1xyXG4gICAgICAgIHBsYXlsaXN0LmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIGZvciAoc29uZyBvZiBjdXJyZW50UXVldWUpIHtcclxuICAgICAgICAgICAgbGV0IGZpbGxlZFRlbXBsYXRlID0gbmF2QmxvY2s7XHJcbiAgICAgICAgICAgIGZpbGxlZFRlbXBsYXRlID0gZmlsbGVkVGVtcGxhdGUucmVwbGFjZSgne3t0aHVtYm5haWx9fScsIHNvbmcuZ2V0VGh1bWJuYWlsKCkpO1xyXG4gICAgICAgICAgICBmaWxsZWRUZW1wbGF0ZSA9IGZpbGxlZFRlbXBsYXRlLnJlcGxhY2UoJ3t7dGl0bGV9fScsIHNvbmcuZ2V0VGl0bGUoKSk7XHJcbiAgICAgICAgICAgIGZpbGxlZFRlbXBsYXRlID0gZmlsbGVkVGVtcGxhdGUucmVwbGFjZSgve3tpZH19L2csIHNvbmcuZ2V0SWQoKSk7XHJcbiAgICAgICAgICAgIHBsYXlsaXN0LmlubmVySFRNTCA9IHBsYXlsaXN0Py5pbm5lckhUTUwgKyBmaWxsZWRUZW1wbGF0ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncXVldWUtbGlzdCcpKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7IFxyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXR0cmlidXRlJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBwbGF5ZXIucGxheVRyYWNrKGlkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuQXBwRXZlbnQubGlzdGVuKCdxdWV1ZS11cGRhdGVkJywgdXBkYXRlUXVldWVMaXN0ZW5lcik7XHJcblF1ZXVlLmluaXRhbGl6ZSgpOyIsImltcG9ydCBZb3VUdWJlUGxheWVyIGZyb20gJ3l0LXBsYXllcic7XHJcblxyXG5pbXBvcnQgeyBRdWV1ZSB9IGZyb20gJy4vcXVldWUnO1xyXG5pbXBvcnQgeyBTb25nIH0gZnJvbSAnLi4vbW9kZWxzL3NvbmcnO1xyXG5pbXBvcnQgeyBQcm9ncmVzc0JhciB9IGZyb20gJy4vcHJvZ2Vzcy1iYXInO1xyXG5pbXBvcnQgeyBVdGlscyB9IGZyb20gJy4uL3NlcnZpY2VzL3V0aWxzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBZb3VUdWJlUGxheWVyIHtcclxuICAgIHByaXZhdGUgc3RhdGljIHBsYXllcjogUGxheWVyO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2lzUGxheWluZzogYm9vbGVhbjtcclxuICAgIHByaXZhdGUgc3RhdGljIF9jdXJyZW50VHJhY2tJZDogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBwcm9ncmVzczogUHJvZ3Jlc3NCYXIgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKGRvbUVsSUQ6IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKGRvbUVsSUQpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZShkb21FbElEOiBzdHJpbmcpOiBQbGF5ZXIge1xyXG4gICAgICAgIGlmICghUGxheWVyLnBsYXllcikge1xyXG4gICAgICAgICAgICBQbGF5ZXIucGxheWVyID0gbmV3IFBsYXllcihkb21FbElEKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFBsYXllci5wbGF5ZXI7XHJcbiAgICB9O1xyXG5cclxuICAgIHByaXZhdGUgbG9hZFRyYWNrKHRyYWNrSWQ6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIFBsYXllci5fY3VycmVudFRyYWNrSWQgPSB0cmFja0lkO1xyXG4gICAgICAgIFBsYXllci5wbGF5ZXIubG9hZCh0cmFja0lkKTtcclxuICAgIH1cclxuXHJcbiAgICBwbGF5VHJhY2sodHJhY2tJZD86IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0cmFja0lkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcFRyYWNrKCk7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZFRyYWNrKHRyYWNrSWQpO1xyXG4gICAgICAgICAgICBRdWV1ZS51cGRhdGVDdXJyZW50UGxheWluZ1RyYWNrKHRyYWNrSWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIVBsYXllci5fY3VycmVudFRyYWNrSWQpIHtcclxuICAgICAgICAgICAgbGV0IHRyYWNrID0gUXVldWUubmV4dCgpO1xyXG4gICAgICAgICAgICBpZiAodHJhY2spIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZFRyYWNrKHRyYWNrLmdldElkKCkpO1xyXG4gICAgICAgICAgICAgICAgUGxheWVyLl9pc1BsYXlpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGVQbGF5KCk7XHJcbiAgICAgICAgICAgICAgICBQbGF5ZXIucGxheWVyLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlRWxhcHNlZFRpbWUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdObyB0cmFja3MgdG8gcGxheScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBQbGF5ZXIuX2lzUGxheWluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlUGxheSgpO1xyXG4gICAgICAgICAgICBQbGF5ZXIucGxheWVyLnBsYXkoKTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVFbGFwc2VkVGltZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBxdWV1ZUFuZFBsYXkoc29uZzogU29uZyk6IHZvaWQge1xyXG4gICAgICAgIFF1ZXVlLnF1ZXVlKHNvbmcpO1xyXG4gICAgICAgIGlmIChQbGF5ZXIuX2lzUGxheWluZykge1xyXG4gICAgICAgICAgICB0aGlzLnBhdXNlVHJhY2soKTtcclxuICAgICAgICAgICAgdGhpcy5yZXNldEVsYXBzZWRUaW1lKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubG9hZFRyYWNrKHNvbmcuZ2V0SWQoKSk7XHJcbiAgICAgICAgUXVldWUudXBkYXRlQ3VycmVudFBsYXlpbmdUcmFjayhzb25nLmdldElkKCkpO1xyXG4gICAgICAgIFBsYXllci5faXNQbGF5aW5nID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnRvZ2dsZVBsYXkoKTtcclxuICAgICAgICBQbGF5ZXIucGxheWVyLnBsYXkoKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUVsYXBzZWRUaW1lKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcGF1c2VUcmFjaygpOiB2b2lkIHtcclxuICAgICAgICBQbGF5ZXIuX2lzUGxheWluZyA9IGZhbHNlO1xyXG4gICAgICAgIFBsYXllci5wbGF5ZXIucGF1c2UoKTtcclxuICAgICAgICB0aGlzLnRvZ2dsZVBsYXkoKTtcclxuICAgICAgICB0aGlzLnN0b3BUaW1lcigpO1xyXG4gICAgICAgIGlmICh0aGlzLnByb2dyZXNzKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3Muc3RvcCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuZXh0VHJhY2soKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5wYXVzZVRyYWNrKCk7XHJcbiAgICAgICAgbGV0IG5leHRUcmFjayA9IFF1ZXVlLm5leHQoKTtcclxuICAgICAgICB0aGlzLnByb2dyZXNzPy5yZXNldCgpO1xyXG4gICAgICAgIHRoaXMucmVzZXRFbGFwc2VkVGltZSgpO1xyXG4gICAgICAgIGlmIChuZXh0VHJhY2spIHtcclxuICAgICAgICAgICAgdGhpcy5sb2FkVHJhY2sobmV4dFRyYWNrLmdldElkKCkpO1xyXG4gICAgICAgICAgICBQbGF5ZXIuX2lzUGxheWluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlUGxheSgpO1xyXG4gICAgICAgICAgICBQbGF5ZXIucGxheWVyLnBsYXkoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJldmlvdXNUcmFjaygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnBhdXNlVHJhY2soKTtcclxuICAgICAgICBsZXQgcHJldmlvdXNUcmFjayA9IFF1ZXVlLnByZXZpb3VzKCk7XHJcbiAgICAgICAgdGhpcy5wcm9ncmVzcz8ucmVzZXQoKTtcclxuICAgICAgICBpZiAocHJldmlvdXNUcmFjaykge1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRUcmFjayhwcmV2aW91c1RyYWNrLmdldElkKCkpO1xyXG4gICAgICAgICAgICBQbGF5ZXIuX2lzUGxheWluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlUGxheSgpO1xyXG4gICAgICAgICAgICBQbGF5ZXIucGxheWVyLnBsYXkoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RvcFRyYWNrKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucGF1c2VUcmFjaygpO1xyXG4gICAgICAgIHRoaXMucHJvZ3Jlc3M/LnJlc2V0KCk7XHJcbiAgICAgICAgUGxheWVyLnBsYXllci5zdG9wKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlUGxheSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAoUGxheWVyLl9pc1BsYXlpbmcpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhdXNlLWJ1dHRvbicpPy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXktYnV0dG9uJyk/LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhdXNlLWJ1dHRvbicpPy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXktYnV0dG9uJyk/LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgc3RhdGljIHNlZWtUbyh0aW1lOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBQbGF5ZXIucGxheWVyLnNlZWsodGltZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVUaXRsZSgpOiB2b2lkIHtcclxuICAgICAgICBsZXQgY3VycmVudFF1ZXVlID0gUXVldWUuZ2V0Q3VycmVudFF1ZXVlKCk7XHJcbiAgICAgICAgY29uc3Qgc29uZyA9IFNvbmcuZ2V0U29uZ0Zyb21MaXN0KGN1cnJlbnRRdWV1ZSwgUGxheWVyLl9jdXJyZW50VHJhY2tJZCk7XHJcbiAgICAgICAgY29uc3QgdGl0bGVEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKTtcclxuICAgICAgICBpZiAodGl0bGVEaXYgJiYgc29uZykge1xyXG4gICAgICAgICAgICB0aXRsZURpdi5pbm5lckhUTUwgPSBzb25nLmdldFRpdGxlKCk7ICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVwZGF0ZVNvbmdUb3RhbFRpbWUodGltZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgdG90YWxUaW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG90YWwtdGltZScpO1xyXG4gICAgICAgIGlmICh0b3RhbFRpbWVFbCkge1xyXG4gICAgICAgICAgICB0b3RhbFRpbWVFbC5pbm5lckhUTUwgPSBVdGlscy5mb3JtYXRUaW1lKHRpbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfdGltZXI6IGFueTtcclxuICAgIHByaXZhdGUgc3RhdGljIGN1cnJlbnRUaW1lID0gMDtcclxuICAgIHByaXZhdGUgdXBkYXRlRWxhcHNlZFRpbWUoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKFBsYXllci5jdXJyZW50VGltZSA8IFBsYXllci5wbGF5ZXIuZ2V0RHVyYXRpb24oKSkge1xyXG4gICAgICAgICAgICBQbGF5ZXIuX3RpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGUoKytQbGF5ZXIuY3VycmVudFRpbWUpO1xyXG4gICAgICAgICAgICB9LCAxMDAwKTsgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlKGN1cnJlbnRUaW1lOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBlbGxhcHNlZFRpbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbGxhcHNlZC10aW1lJyk7XHJcbiAgICAgICAgaWYgKGVsbGFwc2VkVGltZUVsKSB7XHJcbiAgICAgICAgICAgIGVsbGFwc2VkVGltZUVsLmlubmVySFRNTCA9IFV0aWxzLmZvcm1hdFRpbWUoY3VycmVudFRpbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0b3BUaW1lcigpOiB2b2lkIHtcclxuICAgICAgICBjbGVhckludGVydmFsKFBsYXllci5fdGltZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVzZXRFbGFwc2VkVGltZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnN0b3BUaW1lcigpO1xyXG4gICAgICAgIFBsYXllci5jdXJyZW50VGltZSA9IDA7XHJcbiAgICAgICAgdGhpcy51cGRhdGUoMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXJFdmVudEhhbmRsZXJzKCk6IHZvaWQge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5LWJ1dHRvbicpPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1BsYXlpbmcnKTtcclxuICAgICAgICAgICAgdGhpcy5wbGF5VHJhY2soKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGF1c2UtYnV0dG9uJyk/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUGF1c2VkJyk7XHJcbiAgICAgICAgICAgIHRoaXMucGF1c2VUcmFjaygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXh0LWJ1dHRvbicpPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ05leHQgdHJhY2snKTtcclxuICAgICAgICAgICAgdGhpcy5uZXh0VHJhY2soKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJldmlvdXMtYnV0dG9uJyk/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUHJldmlvdXMgdHJhY2snKTtcclxuICAgICAgICAgICAgdGhpcy5wcmV2aW91c1RyYWNrKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIFBsYXllci5wbGF5ZXIub24oJ3BsYXlpbmcnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVGl0bGUoKTtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnByb2dyZXNzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb2dyZXNzID0gUHJvZ3Jlc3NCYXIuZ2V0SW5zdGFuY2UoJ3Byb2dyZXNzLWJhcicpOyAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzLnNldFRpbWUoUGxheWVyLnBsYXllci5nZXREdXJhdGlvbigpKTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVTb25nVG90YWxUaW1lKFBsYXllci5wbGF5ZXIuZ2V0RHVyYXRpb24oKSk7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRWxhcHNlZFRpbWUoKTtcclxuICAgICAgICAgICAgdGhpcy5wcm9ncmVzcy5zdGFydCgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBQbGF5ZXIucGxheWVyLm9uKCdlbmRlZCcsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5yZXNldEVsYXBzZWRUaW1lKCk7XHJcbiAgICAgICAgICAgIHRoaXMubmV4dFRyYWNrKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBQbGF5ZXIgfSBmcm9tICcuL3BsYXllcic7XHJcblxyXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NCYXIge1xyXG4gICAgcHJpdmF0ZSB0b3RhbFRpbWU6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRQb3NpdGlvbjogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgdGljazogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgc3RhdGljIHRpbWVyOiBhbnk7XHJcbiAgICBwcml2YXRlIGVsZW1lbnQ6IHN0cmluZztcclxuICAgIHByaXZhdGUgcHJvZ3Jlc3NCYXJFbDogSFRNTEVsZW1lbnQgfCBudWxsO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBQcm9ncmVzc0JhcjtcclxuXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5wcm9ncmVzc0JhckVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5lbGVtZW50KTtcclxuICAgICAgICB0aGlzLl9hZGRDbGlja0xpc3RlbmVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldEluc3RhbmNlKGVsZW1lbnQ6IHN0cmluZyk6IFByb2dyZXNzQmFyIHtcclxuICAgICAgICBpZiAoIVByb2dyZXNzQmFyLl9pbnN0YW5jZSkge1xyXG4gICAgICAgICAgICBQcm9ncmVzc0Jhci5faW5zdGFuY2UgPSBuZXcgUHJvZ3Jlc3NCYXIoZWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBQcm9ncmVzc0Jhci5faW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VGltZSh0b3RhbFRpbWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudG90YWxUaW1lID0gdG90YWxUaW1lO1xyXG4gICAgICAgIHRoaXMudGljayA9IHRoaXMudG90YWxUaW1lIC8gMTAwO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSB1cGRhdGUoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFBvc2l0aW9uIDwgMTAwKSB7IFxyXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9ncmVzc0JhckVsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQb3NpdGlvbiA9IHRoaXMuY3VycmVudFBvc2l0aW9uICsgMC4xO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9ncmVzc0JhckVsLnN0eWxlLndpZHRoID0gdGhpcy5jdXJyZW50UG9zaXRpb24gKyAnJSc7IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIFByb2dyZXNzQmFyLnRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSgpOyBcclxuICAgICAgICB9LCAodGhpcy50aWNrICogMTAwKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RvcCgpOiB2b2lkIHtcclxuICAgICAgICBjbGVhckludGVydmFsKFByb2dyZXNzQmFyLnRpbWVyKTtcclxuICAgIH1cclxuXHJcbiAgICByZXNldCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnN0b3AoKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRQb3NpdGlvbiA9IDA7XHJcbiAgICAgICAgdGhpcy50aWNrID0gMDtcclxuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2FkZENsaWNrTGlzdGVuZXIoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvZ3Jlc3NCYXJFbCAmJiB0aGlzLnByb2dyZXNzQmFyRWwucGFyZW50RWxlbWVudCkge1xyXG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzQmFyRWwucGFyZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvZ3Jlc3NCYXJFbCAmJiB0aGlzLnByb2dyZXNzQmFyRWwucGFyZW50RWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlZWsgPSAodGhpcy50b3RhbFRpbWUgLyB0aGlzLnByb2dyZXNzQmFyRWwucGFyZW50RWxlbWVudC5jbGllbnRXaWR0aCkgKiAoZXZlbnQucGFnZVggLSAyMDApO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBvcyA9IChzZWVrIC8gdGhpcy50b3RhbFRpbWUpICogMTAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBvc2l0aW9uID0gcGFyc2VGbG9hdCgoTWF0aC5yb3VuZChwb3MgKiAxMCkgLyAxMCkudG9GaXhlZCgxKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgUGxheWVyLnNlZWtUbyhzZWVrKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgU29uZyB9IGZyb20gXCIuLi9tb2RlbHMvc29uZ1wiO1xyXG5pbXBvcnQgeyBBcHBFdmVudCB9IGZyb20gJy4uL3NlcnZpY2VzL2V2ZW50JztcclxuaW1wb3J0IHsgU3RvcmFnZSB9IGZyb20gJy4uL3NlcnZpY2VzL3N0b3JhZ2UnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFF1ZXVlIHtcclxuICAgIHByaXZhdGUgc3RhdGljIF9xdWV1ZTogQXJyYXk8U29uZz47XHJcbiAgICBwcml2YXRlIHN0YXRpYyBfY3VycmVudFRyYWNrID0gLTE7XHJcblxyXG4gICAgc3RhdGljIGluaXRhbGl6ZSgpIHtcclxuICAgICAgICBRdWV1ZS5fcXVldWUgPSBRdWV1ZS5fZmV0Y2hQcmV2aW91c1F1ZXVlKCk7XHJcbiAgICAgICAgQXBwRXZlbnQuZW1pdCgncXVldWUtdXBkYXRlZCcpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2ZldGNoUHJldmlvdXNRdWV1ZSgpOiBhbnkge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gU3RvcmFnZS5nZXQoJ0NVUlJFTlRfUVVFVUUnKTtcclxuICAgICAgICBjb25zdCBfdGVtcFF1ZXVlID0gbmV3IEFycmF5PFNvbmc+KCk7XHJcbiAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHZhbHVlLmZvckVhY2goKGl0ZW06IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgX3RlbXBRdWV1ZS5wdXNoKG5ldyBTb25nKGl0ZW0uaWQsIGl0ZW0udGl0bGUsIGl0ZW0uZGVzY3JpcHRpb24sIGl0ZW0udGh1bWJuYWlsKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gX3RlbXBRdWV1ZTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBxdWV1ZShzb25nOiBTb25nKTogdm9pZCB7XHJcbiAgICAgICAgUXVldWUuX3F1ZXVlLnB1c2goc29uZyk7XHJcbiAgICAgICAgU3RvcmFnZS5zYXZlKCdDVVJSRU5UX1FVRVVFJywgUXVldWUuX3F1ZXVlKTtcclxuICAgICAgICBBcHBFdmVudC5lbWl0KCdxdWV1ZS11cGRhdGVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGRlcXVldWUoKTogU29uZyB8IHVuZGVmaW5lZCB7XHJcbiAgICAgICAgY29uc3Qgc29uZyA9IFF1ZXVlLl9xdWV1ZS5zaGlmdCgpO1xyXG4gICAgICAgIEFwcEV2ZW50LmVtaXQoJ3F1ZXVlLXVwZGF0ZWQnKTtcclxuICAgICAgICBTdG9yYWdlLnNhdmUoJ0NVUlJFTlRfUVVFVUUnLCBRdWV1ZS5fcXVldWUpO1xyXG4gICAgICAgIHJldHVybiBzb25nO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBuZXh0KCk6IFNvbmcgfCB1bmRlZmluZWQge1xyXG4gICAgICAgIGlmIChRdWV1ZS5fcXVldWVbUXVldWUuX2N1cnJlbnRUcmFjayArIDFdKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBRdWV1ZS5fcXVldWVbKytRdWV1ZS5fY3VycmVudFRyYWNrXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcHJldmlvdXMoKTogU29uZyB8IHVuZGVmaW5lZCB7XHJcbiAgICAgICAgaWYgKFF1ZXVlLl9xdWV1ZVtRdWV1ZS5fY3VycmVudFRyYWNrIC0gMV0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIFF1ZXVlLl9xdWV1ZVstLVF1ZXVlLl9jdXJyZW50VHJhY2tdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRDdXJyZW50UXVldWUoKTogQXJyYXk8U29uZz4ge1xyXG4gICAgICAgIHJldHVybiBRdWV1ZS5fcXVldWU7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHVwZGF0ZUN1cnJlbnRQbGF5aW5nVHJhY2sodHJhY2tJZDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgUXVldWUuX2N1cnJlbnRUcmFjayA9IFF1ZXVlLl9xdWV1ZS5maW5kSW5kZXgoc29uZyA9PiBzb25nLmdldElkKCkgPT09IHRyYWNrSWQpO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIFNvbmcge1xyXG4gICAgcHJpdmF0ZSBpZDogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSB0aXRsZTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSB0aHVtYm5haWw6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihpZDogc3RyaW5nLCB0aXRsZTogc3RyaW5nLCBkZXNjcmlwdGlvbjogc3RyaW5nLCB0aHVtYm5haWw6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgICAgIHRoaXMudGh1bWJuYWlsID0gdGh1bWJuYWlsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRJZCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRUaXRsZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRpdGxlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXREZXNjcmlwdGlvbigpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRUaHVtYm5haWwoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50aHVtYm5haWw7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldFNvbmdGcm9tTGlzdChsaXN0OiBBcnJheTxTb25nPiwgaWQ6IHN0cmluZyk6IFNvbmcgfCBudWxsIHtcclxuICAgICAgICBjb25zdCBmaWx0ZXJlZExpc3QgPSBsaXN0LmZpbHRlcihzb25nID0+IHNvbmcuZ2V0SWQoKSA9PT0gaWQpO1xyXG4gICAgICAgIHJldHVybiBmaWx0ZXJlZExpc3QubGVuZ3RoID4gMCA/IGZpbHRlcmVkTGlzdFswXTogbnVsbDtcclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBBcHBFdmVudCB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBsaXN0ZW5lcnM6IHtbbmFtZTogc3RyaW5nXTogQXJyYXk8RnVuY3Rpb24+fSA9IHt9O1xyXG5cclxuICAgIHN0YXRpYyBsaXN0ZW4oZXZlbnQ6IHN0cmluZywgZnVuYzogRnVuY3Rpb24pOiB2b2lkIHtcclxuICAgICAgICBpZiAoQXBwRXZlbnQubGlzdGVuZXJzW2V2ZW50XSkge1xyXG4gICAgICAgICAgICBBcHBFdmVudC5saXN0ZW5lcnNbZXZlbnRdLnB1c2goZnVuYyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgYXJyID0gW107XHJcbiAgICAgICAgICAgIGFyci5wdXNoKGZ1bmMpO1xyXG4gICAgICAgICAgICBBcHBFdmVudC5saXN0ZW5lcnNbZXZlbnRdID0gYXJyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZW1pdChldmVudDogc3RyaW5nLCBkYXRhPzogT2JqZWN0KTogdm9pZCB7XHJcbiAgICAgICAgaWYgKEFwcEV2ZW50Lmxpc3RlbmVyc1tldmVudF0pIHtcclxuICAgICAgICAgICAgQXBwRXZlbnQubGlzdGVuZXJzW2V2ZW50XS5mb3JFYWNoKChmdW5jOiBGdW5jdGlvbikgPT4gZnVuYyhkYXRhKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIEdvb2dsZUF1dGhlbnRpY2F0aW9uIHtcclxuICAgIHByaXZhdGUgc3RhdGljIF9pc0F1dGhlbnRpY2F0ZWQ6IGJvb2xlYW4gPSB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnZ29vZ2xlLWF1dGhlbnRpY2F0ZWQnKSA9PT0gJ3RydWUnPyB0cnVlOiBmYWxzZTtcclxuXHJcbiAgICBzdGF0aWMgaXNBdXRoZW50aWNhdGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBHb29nbGVBdXRoZW50aWNhdGlvbi5faXNBdXRoZW50aWNhdGVkO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBhdXRoZW50aWNhdGUoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBnYXBpLmxvYWQoJ2F1dGgyJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICAgICAgZ2FwaS5hdXRoMi5pbml0KHtcclxuICAgICAgICAgICAgICAgICAgICBjbGllbnRfaWQ6ICc0OTQ2MTU0MDAyNjItZjdtNHVzY3Q3cHRoNjRscm11Yzc2dnNjY3A3NmZ1M2MuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20nXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGdhcGkuYXV0aDIuZ2V0QXV0aEluc3RhbmNlKCkuc2lnbkluKHtcclxuICAgICAgICAgICAgICAgICAgICBzY29wZTogJ2h0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgveW91dHViZS5mb3JjZS1zc2wnXHJcbiAgICAgICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBHb29nbGVBdXRoZW50aWNhdGlvbi5faXNBdXRoZW50aWNhdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnZ29vZ2xlLWF1dGhlbnRpY2F0ZWQnLCAndHJ1ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBdXRoZW50aWNhdGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoR29vZ2xlQXV0aGVudGljYXRpb24ubG9hZENsaWVudCgpKTtcclxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBsb2FkQ2xpZW50KCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGdhcGkubG9hZCgnY2xpZW50JywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZ2FwaS5jbGllbnQuc2V0QXBpS2V5KCdBSXphU3lERHZqQmVkcmhMZjBydDYyY2toczJmd1d4dEVMY1llVTgnKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGdhcGkuY2xpZW50LmxvYWQoXCJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9kaXNjb3ZlcnkvdjEvYXBpcy95b3V0dWJlL3YzL3Jlc3RcIiwgXCJ2M1wiKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgR29vZ2xlQXV0aGVudGljYXRpb24gfSBmcm9tICcuL2dvb2dsZS1hdXRoZW50aWNhdGlvbic7XHJcbmltcG9ydCB7IFNvbmcgfSBmcm9tICcuLi9tb2RlbHMvc29uZyc7XHJcblxyXG5leHBvcnQgY2xhc3MgU2VhcmNoIHtcclxuICAgIHByaXZhdGUgc3RhdGljIE1BWF9SRVNVTFRTID0gMTI7XHJcblxyXG4gICAgc3RhdGljIHNlYXJjaChxOiBzdHJpbmcsIHBhcnQ/OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGdhcGkubG9hZCgnY2xpZW50JywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgICAgICBpZiAoIWdhcGkuY2xpZW50LnlvdXR1YmUpIHtcclxuICAgICAgICAgICAgICAgICAgICBHb29nbGVBdXRoZW50aWNhdGlvbi5sb2FkQ2xpZW50KCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBTZWFyY2guX3NlYXJjaChxLCBwYXJ0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlOiBBcnJheTxTb25nPikgPT4gcmVzb2x2ZShTZWFyY2guX3Byb2Nlc3NSZXNwb25zZShyZXNwb25zZSkpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pOyAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gU2VhcmNoLl9zZWFyY2gocSwgcGFydClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlOiBBcnJheTxTb25nPikgPT4gcmVzb2x2ZShTZWFyY2guX3Byb2Nlc3NSZXNwb25zZShyZXNwb25zZSkpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9zZWFyY2gocTogc3RyaW5nLCBwYXJ0Pzogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgcmV0dXJuIGdhcGkuY2xpZW50LnlvdXR1YmUuc2VhcmNoLmxpc3Qoe1xyXG4gICAgICAgICAgICBwYXJ0OiBwYXJ0ID8gcGFydCA6ICdzbmlwcGV0JyxcclxuICAgICAgICAgICAgcTogcSxcclxuICAgICAgICAgICAgdHlwZTogJ3ZpZGVvJyxcclxuICAgICAgICAgICAgbWF4UmVzdWx0czogU2VhcmNoLk1BWF9SRVNVTFRTXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIHByaXZhdGUgc3RhdGljIF9wcm9jZXNzUmVzcG9uc2UocmVzcG9uc2U6IGFueSk6IE9iamVjdCB7XHJcbiAgICAgICAgbGV0IHByb2Nlc3NlZFJlc3BvbnNlID0gbmV3IEFycmF5PFNvbmc+KCk7XHJcblxyXG4gICAgICAgIGlmICghcmVzcG9uc2UgfHwgcmVzcG9uc2Uuc3RhdHVzICE9PSAyMDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHt9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocmVzcG9uc2UucmVzdWx0Lml0ZW1zICYmIHJlc3BvbnNlLnJlc3VsdC5pdGVtcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGl0ZW0gb2YgcmVzcG9uc2UucmVzdWx0Lml0ZW1zKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5zbmlwcGV0LmNoYW5uZWxUaXRsZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ3Zldm8nKSA+IC0xIHx8IGl0ZW0uc25pcHBldC5jaGFubmVsVGl0bGUudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdvZmZpY2lhbCcpID4gLTFcclxuICAgICAgICAgICAgICAgICAgICB8fCBpdGVtLnNuaXBwZXQudGl0bGUudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdvZmZpY2lhbCcpID4gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdGh1bWJuYWlsID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uc25pcHBldC50aHVtYm5haWxzLmhpZ2gpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGh1bWJuYWlsID0gaXRlbS5zbmlwcGV0LnRodW1ibmFpbHMuaGlnaC51cmw7IFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChpdGVtLnNuaXBwZXQudGh1bWJuYWlscy5tZWRpdW0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGh1bWJuYWlsID0gaXRlbS5zbmlwcGV0LnRodW1ibmFpbHMubWVkaXVtLnVybDsgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHVtYm5haWwgPSBpdGVtLnNuaXBwZXQudGh1bWJuYWlscy5kZWZhdWx0LnVybDsgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXNPYmogPSBuZXcgU29uZyhpdGVtLmlkLnZpZGVvSWQsIGl0ZW0uc25pcHBldC50aXRsZSwgaXRlbS5zbmlwcGV0LmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHVtYm5haWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2Nlc3NlZFJlc3BvbnNlLnB1c2gocmVzT2JqKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcHJvY2Vzc2VkUmVzcG9uc2U7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY29uc3QgZW51bSBTVE9SQUdFIHtcclxuICAgIExPQ0FMX1NUT1JBR0UsXHJcbiAgICBTRVNTSU9OX1NUT1JBR0VcclxufVxyXG5leHBvcnQgY2xhc3MgU3RvcmFnZSB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBERUZBVUxUX1NUT1JBR0U6IFNUT1JBR0UgPSBTVE9SQUdFLkxPQ0FMX1NUT1JBR0U7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBzdG9yYWdlSGFuZGxlciA9IHdpbmRvdy5sb2NhbFN0b3JhZ2U7XHJcblxyXG4gICAgc3RhdGljIHNhdmUoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnksIHN0b3JhZ2U/OiBTVE9SQUdFKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHN0b3JhZ2UgJiYgc3RvcmFnZSAhPT0gU3RvcmFnZS5ERUZBVUxUX1NUT1JBR0UpIHtcclxuICAgICAgICAgICAgd2luZG93LnNlc3Npb25TdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgU3RvcmFnZS5zdG9yYWdlSGFuZGxlci5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldChrZXk6IHN0cmluZywgc3RvcmFnZT86IFNUT1JBR0UpOiBhbnkge1xyXG4gICAgICAgIGlmIChzdG9yYWdlICYmIHN0b3JhZ2UgIT09IFN0b3JhZ2UuREVGQVVMVF9TVE9SQUdFKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gd2luZG93LnNlc3Npb25TdG9yYWdlLmdldEl0ZW0oa2V5KTtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlID8gSlNPTi5wYXJzZSh2YWx1ZSk6IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB2YWx1ZSA9IFN0b3JhZ2Uuc3RvcmFnZUhhbmRsZXIuZ2V0SXRlbShrZXkpO1xyXG4gICAgICAgIHJldHVybiB2YWx1ZSA/IEpTT04ucGFyc2UodmFsdWUpIDogdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGRlbGV0ZShrZXk6IHN0cmluZywgc3RvcmFnZT86IFNUT1JBR0UpOiB2b2lkIHtcclxuICAgICAgICBpZiAoc3RvcmFnZSAmJiBzdG9yYWdlICE9PSBTdG9yYWdlLkRFRkFVTFRfU1RPUkFHRSkge1xyXG4gICAgICAgICAgICB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBTdG9yYWdlLnN0b3JhZ2VIYW5kbGVyLnJlbW92ZUl0ZW0oa2V5KTtcclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBVdGlscyB7XHJcbiAgICBzdGF0aWMgZm9ybWF0VGltZSh0aW1lOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgICAgIHRpbWUgPSBNYXRoLmZsb29yKHRpbWUpO1xyXG4gICAgICAgIGNvbnN0IG1pbiA9IE1hdGguZmxvb3IodGltZSAvIDYwKTtcclxuICAgICAgICBjb25zdCBzZWMgPSB0aW1lIC0gKG1pbiAqIDYwKTtcclxuICAgICAgICBjb25zdCBtaW5TdHIgPSBtaW4gPCAxMCA/ICcwJyArIG1pbiA6ICcnICsgbWluO1xyXG4gICAgICAgIGNvbnN0IHNlY1N0ciA9IHNlYyA8IDEwID8gJzAnICsgc2VjIDogJycgKyBzZWM7XHJcbiAgICAgICAgcmV0dXJuIG1pblN0ciArICc6JyArIHNlY1N0cjtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=