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
                this.loadTrack(track.getVideoId());
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
        this.loadTrack(song.getVideoId());
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
            this.loadTrack(nextTrack.getVideoId());
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
            this.loadTrack(previousTrack.getVideoId());
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
        const elapsedTimeEl = document.getElementById('elapsed-time');
        if (elapsedTimeEl) {
            elapsedTimeEl.innerHTML = utils_1.Utils.formatTime(currentTime);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2V2ZW50cy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvYWQtc2NyaXB0Mi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMveXQtcGxheWVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvYXBwLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29tcG9uZW50cy9wbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb21wb25lbnRzL3Byb2dlc3MtYmFyLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29tcG9uZW50cy9xdWV1ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L21vZGVscy9zb25nLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvc2VydmljZXMvZXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9zZXJ2aWNlcy9nb29nbGUtYXV0aGVudGljYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9zZXJ2aWNlcy9zZWFyY2gudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9zZXJ2aWNlcy9zdG9yYWdlLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvc2VydmljZXMvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFdBQVcscUJBQXFCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FB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eEQsTUFBYSxLQUFLO0lBQ2QsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFZO1FBQzFCLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ2xDLE1BQU0sR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUM5QixNQUFNLE1BQU0sR0FBRyxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDO1FBQy9DLE1BQU0sTUFBTSxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUM7UUFDL0MsT0FBTyxNQUFNLEdBQUcsR0FBRyxHQUFHLE1BQU0sQ0FBQztJQUNqQyxDQUFDO0NBQ0o7QUFURCxzQkFTQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9jbGllbnQvYXBwLnRzXCIpO1xuIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFIgPSB0eXBlb2YgUmVmbGVjdCA9PT0gJ29iamVjdCcgPyBSZWZsZWN0IDogbnVsbFxudmFyIFJlZmxlY3RBcHBseSA9IFIgJiYgdHlwZW9mIFIuYXBwbHkgPT09ICdmdW5jdGlvbidcbiAgPyBSLmFwcGx5XG4gIDogZnVuY3Rpb24gUmVmbGVjdEFwcGx5KHRhcmdldCwgcmVjZWl2ZXIsIGFyZ3MpIHtcbiAgICByZXR1cm4gRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwodGFyZ2V0LCByZWNlaXZlciwgYXJncyk7XG4gIH1cblxudmFyIFJlZmxlY3RPd25LZXlzXG5pZiAoUiAmJiB0eXBlb2YgUi5vd25LZXlzID09PSAnZnVuY3Rpb24nKSB7XG4gIFJlZmxlY3RPd25LZXlzID0gUi5vd25LZXlzXG59IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgUmVmbGVjdE93bktleXMgPSBmdW5jdGlvbiBSZWZsZWN0T3duS2V5cyh0YXJnZXQpIHtcbiAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGFyZ2V0KVxuICAgICAgLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHRhcmdldCkpO1xuICB9O1xufSBlbHNlIHtcbiAgUmVmbGVjdE93bktleXMgPSBmdW5jdGlvbiBSZWZsZWN0T3duS2V5cyh0YXJnZXQpIHtcbiAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGFyZ2V0KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gUHJvY2Vzc0VtaXRXYXJuaW5nKHdhcm5pbmcpIHtcbiAgaWYgKGNvbnNvbGUgJiYgY29uc29sZS53YXJuKSBjb25zb2xlLndhcm4od2FybmluZyk7XG59XG5cbnZhciBOdW1iZXJJc05hTiA9IE51bWJlci5pc05hTiB8fCBmdW5jdGlvbiBOdW1iZXJJc05hTih2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT09IHZhbHVlO1xufVxuXG5mdW5jdGlvbiBFdmVudEVtaXR0ZXIoKSB7XG4gIEV2ZW50RW1pdHRlci5pbml0LmNhbGwodGhpcyk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IEV2ZW50RW1pdHRlcjtcblxuLy8gQmFja3dhcmRzLWNvbXBhdCB3aXRoIG5vZGUgMC4xMC54XG5FdmVudEVtaXR0ZXIuRXZlbnRFbWl0dGVyID0gRXZlbnRFbWl0dGVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9ldmVudHMgPSB1bmRlZmluZWQ7XG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9ldmVudHNDb3VudCA9IDA7XG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9tYXhMaXN0ZW5lcnMgPSB1bmRlZmluZWQ7XG5cbi8vIEJ5IGRlZmF1bHQgRXZlbnRFbWl0dGVycyB3aWxsIHByaW50IGEgd2FybmluZyBpZiBtb3JlIHRoYW4gMTAgbGlzdGVuZXJzIGFyZVxuLy8gYWRkZWQgdG8gaXQuIFRoaXMgaXMgYSB1c2VmdWwgZGVmYXVsdCB3aGljaCBoZWxwcyBmaW5kaW5nIG1lbW9yeSBsZWFrcy5cbnZhciBkZWZhdWx0TWF4TGlzdGVuZXJzID0gMTA7XG5cbmZ1bmN0aW9uIGNoZWNrTGlzdGVuZXIobGlzdGVuZXIpIHtcbiAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcImxpc3RlbmVyXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEZ1bmN0aW9uLiBSZWNlaXZlZCB0eXBlICcgKyB0eXBlb2YgbGlzdGVuZXIpO1xuICB9XG59XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShFdmVudEVtaXR0ZXIsICdkZWZhdWx0TWF4TGlzdGVuZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBkZWZhdWx0TWF4TGlzdGVuZXJzO1xuICB9LFxuICBzZXQ6IGZ1bmN0aW9uKGFyZykge1xuICAgIGlmICh0eXBlb2YgYXJnICE9PSAnbnVtYmVyJyB8fCBhcmcgPCAwIHx8IE51bWJlcklzTmFOKGFyZykpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdUaGUgdmFsdWUgb2YgXCJkZWZhdWx0TWF4TGlzdGVuZXJzXCIgaXMgb3V0IG9mIHJhbmdlLiBJdCBtdXN0IGJlIGEgbm9uLW5lZ2F0aXZlIG51bWJlci4gUmVjZWl2ZWQgJyArIGFyZyArICcuJyk7XG4gICAgfVxuICAgIGRlZmF1bHRNYXhMaXN0ZW5lcnMgPSBhcmc7XG4gIH1cbn0pO1xuXG5FdmVudEVtaXR0ZXIuaW5pdCA9IGZ1bmN0aW9uKCkge1xuXG4gIGlmICh0aGlzLl9ldmVudHMgPT09IHVuZGVmaW5lZCB8fFxuICAgICAgdGhpcy5fZXZlbnRzID09PSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcykuX2V2ZW50cykge1xuICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xuICB9XG5cbiAgdGhpcy5fbWF4TGlzdGVuZXJzID0gdGhpcy5fbWF4TGlzdGVuZXJzIHx8IHVuZGVmaW5lZDtcbn07XG5cbi8vIE9idmlvdXNseSBub3QgYWxsIEVtaXR0ZXJzIHNob3VsZCBiZSBsaW1pdGVkIHRvIDEwLiBUaGlzIGZ1bmN0aW9uIGFsbG93c1xuLy8gdGhhdCB0byBiZSBpbmNyZWFzZWQuIFNldCB0byB6ZXJvIGZvciB1bmxpbWl0ZWQuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnNldE1heExpc3RlbmVycyA9IGZ1bmN0aW9uIHNldE1heExpc3RlbmVycyhuKSB7XG4gIGlmICh0eXBlb2YgbiAhPT0gJ251bWJlcicgfHwgbiA8IDAgfHwgTnVtYmVySXNOYU4obikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVGhlIHZhbHVlIG9mIFwiblwiIGlzIG91dCBvZiByYW5nZS4gSXQgbXVzdCBiZSBhIG5vbi1uZWdhdGl2ZSBudW1iZXIuIFJlY2VpdmVkICcgKyBuICsgJy4nKTtcbiAgfVxuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSBuO1xuICByZXR1cm4gdGhpcztcbn07XG5cbmZ1bmN0aW9uIF9nZXRNYXhMaXN0ZW5lcnModGhhdCkge1xuICBpZiAodGhhdC5fbWF4TGlzdGVuZXJzID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIEV2ZW50RW1pdHRlci5kZWZhdWx0TWF4TGlzdGVuZXJzO1xuICByZXR1cm4gdGhhdC5fbWF4TGlzdGVuZXJzO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmdldE1heExpc3RlbmVycyA9IGZ1bmN0aW9uIGdldE1heExpc3RlbmVycygpIHtcbiAgcmV0dXJuIF9nZXRNYXhMaXN0ZW5lcnModGhpcyk7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbiBlbWl0KHR5cGUpIHtcbiAgdmFyIGFyZ3MgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIGFyZ3MucHVzaChhcmd1bWVudHNbaV0pO1xuICB2YXIgZG9FcnJvciA9ICh0eXBlID09PSAnZXJyb3InKTtcblxuICB2YXIgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICBpZiAoZXZlbnRzICE9PSB1bmRlZmluZWQpXG4gICAgZG9FcnJvciA9IChkb0Vycm9yICYmIGV2ZW50cy5lcnJvciA9PT0gdW5kZWZpbmVkKTtcbiAgZWxzZSBpZiAoIWRvRXJyb3IpXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIC8vIElmIHRoZXJlIGlzIG5vICdlcnJvcicgZXZlbnQgbGlzdGVuZXIgdGhlbiB0aHJvdy5cbiAgaWYgKGRvRXJyb3IpIHtcbiAgICB2YXIgZXI7XG4gICAgaWYgKGFyZ3MubGVuZ3RoID4gMClcbiAgICAgIGVyID0gYXJnc1swXTtcbiAgICBpZiAoZXIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgLy8gTm90ZTogVGhlIGNvbW1lbnRzIG9uIHRoZSBgdGhyb3dgIGxpbmVzIGFyZSBpbnRlbnRpb25hbCwgdGhleSBzaG93XG4gICAgICAvLyB1cCBpbiBOb2RlJ3Mgb3V0cHV0IGlmIHRoaXMgcmVzdWx0cyBpbiBhbiB1bmhhbmRsZWQgZXhjZXB0aW9uLlxuICAgICAgdGhyb3cgZXI7IC8vIFVuaGFuZGxlZCAnZXJyb3InIGV2ZW50XG4gICAgfVxuICAgIC8vIEF0IGxlYXN0IGdpdmUgc29tZSBraW5kIG9mIGNvbnRleHQgdG8gdGhlIHVzZXJcbiAgICB2YXIgZXJyID0gbmV3IEVycm9yKCdVbmhhbmRsZWQgZXJyb3IuJyArIChlciA/ICcgKCcgKyBlci5tZXNzYWdlICsgJyknIDogJycpKTtcbiAgICBlcnIuY29udGV4dCA9IGVyO1xuICAgIHRocm93IGVycjsgLy8gVW5oYW5kbGVkICdlcnJvcicgZXZlbnRcbiAgfVxuXG4gIHZhciBoYW5kbGVyID0gZXZlbnRzW3R5cGVdO1xuXG4gIGlmIChoYW5kbGVyID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIFJlZmxlY3RBcHBseShoYW5kbGVyLCB0aGlzLCBhcmdzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbGVuID0gaGFuZGxlci5sZW5ndGg7XG4gICAgdmFyIGxpc3RlbmVycyA9IGFycmF5Q2xvbmUoaGFuZGxlciwgbGVuKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKVxuICAgICAgUmVmbGVjdEFwcGx5KGxpc3RlbmVyc1tpXSwgdGhpcywgYXJncyk7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmZ1bmN0aW9uIF9hZGRMaXN0ZW5lcih0YXJnZXQsIHR5cGUsIGxpc3RlbmVyLCBwcmVwZW5kKSB7XG4gIHZhciBtO1xuICB2YXIgZXZlbnRzO1xuICB2YXIgZXhpc3Rpbmc7XG5cbiAgY2hlY2tMaXN0ZW5lcihsaXN0ZW5lcik7XG5cbiAgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHM7XG4gIGlmIChldmVudHMgPT09IHVuZGVmaW5lZCkge1xuICAgIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB0YXJnZXQuX2V2ZW50c0NvdW50ID0gMDtcbiAgfSBlbHNlIHtcbiAgICAvLyBUbyBhdm9pZCByZWN1cnNpb24gaW4gdGhlIGNhc2UgdGhhdCB0eXBlID09PSBcIm5ld0xpc3RlbmVyXCIhIEJlZm9yZVxuICAgIC8vIGFkZGluZyBpdCB0byB0aGUgbGlzdGVuZXJzLCBmaXJzdCBlbWl0IFwibmV3TGlzdGVuZXJcIi5cbiAgICBpZiAoZXZlbnRzLm5ld0xpc3RlbmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRhcmdldC5lbWl0KCduZXdMaXN0ZW5lcicsIHR5cGUsXG4gICAgICAgICAgICAgICAgICBsaXN0ZW5lci5saXN0ZW5lciA/IGxpc3RlbmVyLmxpc3RlbmVyIDogbGlzdGVuZXIpO1xuXG4gICAgICAvLyBSZS1hc3NpZ24gYGV2ZW50c2AgYmVjYXVzZSBhIG5ld0xpc3RlbmVyIGhhbmRsZXIgY291bGQgaGF2ZSBjYXVzZWQgdGhlXG4gICAgICAvLyB0aGlzLl9ldmVudHMgdG8gYmUgYXNzaWduZWQgdG8gYSBuZXcgb2JqZWN0XG4gICAgICBldmVudHMgPSB0YXJnZXQuX2V2ZW50cztcbiAgICB9XG4gICAgZXhpc3RpbmcgPSBldmVudHNbdHlwZV07XG4gIH1cblxuICBpZiAoZXhpc3RpbmcgPT09IHVuZGVmaW5lZCkge1xuICAgIC8vIE9wdGltaXplIHRoZSBjYXNlIG9mIG9uZSBsaXN0ZW5lci4gRG9uJ3QgbmVlZCB0aGUgZXh0cmEgYXJyYXkgb2JqZWN0LlxuICAgIGV4aXN0aW5nID0gZXZlbnRzW3R5cGVdID0gbGlzdGVuZXI7XG4gICAgKyt0YXJnZXQuX2V2ZW50c0NvdW50O1xuICB9IGVsc2Uge1xuICAgIGlmICh0eXBlb2YgZXhpc3RpbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vIEFkZGluZyB0aGUgc2Vjb25kIGVsZW1lbnQsIG5lZWQgdG8gY2hhbmdlIHRvIGFycmF5LlxuICAgICAgZXhpc3RpbmcgPSBldmVudHNbdHlwZV0gPVxuICAgICAgICBwcmVwZW5kID8gW2xpc3RlbmVyLCBleGlzdGluZ10gOiBbZXhpc3RpbmcsIGxpc3RlbmVyXTtcbiAgICAgIC8vIElmIHdlJ3ZlIGFscmVhZHkgZ290IGFuIGFycmF5LCBqdXN0IGFwcGVuZC5cbiAgICB9IGVsc2UgaWYgKHByZXBlbmQpIHtcbiAgICAgIGV4aXN0aW5nLnVuc2hpZnQobGlzdGVuZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBleGlzdGluZy5wdXNoKGxpc3RlbmVyKTtcbiAgICB9XG5cbiAgICAvLyBDaGVjayBmb3IgbGlzdGVuZXIgbGVha1xuICAgIG0gPSBfZ2V0TWF4TGlzdGVuZXJzKHRhcmdldCk7XG4gICAgaWYgKG0gPiAwICYmIGV4aXN0aW5nLmxlbmd0aCA+IG0gJiYgIWV4aXN0aW5nLndhcm5lZCkge1xuICAgICAgZXhpc3Rpbmcud2FybmVkID0gdHJ1ZTtcbiAgICAgIC8vIE5vIGVycm9yIGNvZGUgZm9yIHRoaXMgc2luY2UgaXQgaXMgYSBXYXJuaW5nXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcbiAgICAgIHZhciB3ID0gbmV3IEVycm9yKCdQb3NzaWJsZSBFdmVudEVtaXR0ZXIgbWVtb3J5IGxlYWsgZGV0ZWN0ZWQuICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZy5sZW5ndGggKyAnICcgKyBTdHJpbmcodHlwZSkgKyAnIGxpc3RlbmVycyAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FkZGVkLiBVc2UgZW1pdHRlci5zZXRNYXhMaXN0ZW5lcnMoKSB0byAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2luY3JlYXNlIGxpbWl0Jyk7XG4gICAgICB3Lm5hbWUgPSAnTWF4TGlzdGVuZXJzRXhjZWVkZWRXYXJuaW5nJztcbiAgICAgIHcuZW1pdHRlciA9IHRhcmdldDtcbiAgICAgIHcudHlwZSA9IHR5cGU7XG4gICAgICB3LmNvdW50ID0gZXhpc3RpbmcubGVuZ3RoO1xuICAgICAgUHJvY2Vzc0VtaXRXYXJuaW5nKHcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBmdW5jdGlvbiBhZGRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICByZXR1cm4gX2FkZExpc3RlbmVyKHRoaXMsIHR5cGUsIGxpc3RlbmVyLCBmYWxzZSk7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5wcmVwZW5kTGlzdGVuZXIgPVxuICAgIGZ1bmN0aW9uIHByZXBlbmRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICAgICAgcmV0dXJuIF9hZGRMaXN0ZW5lcih0aGlzLCB0eXBlLCBsaXN0ZW5lciwgdHJ1ZSk7XG4gICAgfTtcblxuZnVuY3Rpb24gb25jZVdyYXBwZXIoKSB7XG4gIGlmICghdGhpcy5maXJlZCkge1xuICAgIHRoaXMudGFyZ2V0LnJlbW92ZUxpc3RlbmVyKHRoaXMudHlwZSwgdGhpcy53cmFwRm4pO1xuICAgIHRoaXMuZmlyZWQgPSB0cnVlO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKVxuICAgICAgcmV0dXJuIHRoaXMubGlzdGVuZXIuY2FsbCh0aGlzLnRhcmdldCk7XG4gICAgcmV0dXJuIHRoaXMubGlzdGVuZXIuYXBwbHkodGhpcy50YXJnZXQsIGFyZ3VtZW50cyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gX29uY2VXcmFwKHRhcmdldCwgdHlwZSwgbGlzdGVuZXIpIHtcbiAgdmFyIHN0YXRlID0geyBmaXJlZDogZmFsc2UsIHdyYXBGbjogdW5kZWZpbmVkLCB0YXJnZXQ6IHRhcmdldCwgdHlwZTogdHlwZSwgbGlzdGVuZXI6IGxpc3RlbmVyIH07XG4gIHZhciB3cmFwcGVkID0gb25jZVdyYXBwZXIuYmluZChzdGF0ZSk7XG4gIHdyYXBwZWQubGlzdGVuZXIgPSBsaXN0ZW5lcjtcbiAgc3RhdGUud3JhcEZuID0gd3JhcHBlZDtcbiAgcmV0dXJuIHdyYXBwZWQ7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uIG9uY2UodHlwZSwgbGlzdGVuZXIpIHtcbiAgY2hlY2tMaXN0ZW5lcihsaXN0ZW5lcik7XG4gIHRoaXMub24odHlwZSwgX29uY2VXcmFwKHRoaXMsIHR5cGUsIGxpc3RlbmVyKSk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5wcmVwZW5kT25jZUxpc3RlbmVyID1cbiAgICBmdW5jdGlvbiBwcmVwZW5kT25jZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgICBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKTtcbiAgICAgIHRoaXMucHJlcGVuZExpc3RlbmVyKHR5cGUsIF9vbmNlV3JhcCh0aGlzLCB0eXBlLCBsaXN0ZW5lcikpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuLy8gRW1pdHMgYSAncmVtb3ZlTGlzdGVuZXInIGV2ZW50IGlmIGFuZCBvbmx5IGlmIHRoZSBsaXN0ZW5lciB3YXMgcmVtb3ZlZC5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPVxuICAgIGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgICB2YXIgbGlzdCwgZXZlbnRzLCBwb3NpdGlvbiwgaSwgb3JpZ2luYWxMaXN0ZW5lcjtcblxuICAgICAgY2hlY2tMaXN0ZW5lcihsaXN0ZW5lcik7XG5cbiAgICAgIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcbiAgICAgIGlmIChldmVudHMgPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgIGxpc3QgPSBldmVudHNbdHlwZV07XG4gICAgICBpZiAobGlzdCA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgaWYgKGxpc3QgPT09IGxpc3RlbmVyIHx8IGxpc3QubGlzdGVuZXIgPT09IGxpc3RlbmVyKSB7XG4gICAgICAgIGlmICgtLXRoaXMuX2V2ZW50c0NvdW50ID09PSAwKVxuICAgICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGRlbGV0ZSBldmVudHNbdHlwZV07XG4gICAgICAgICAgaWYgKGV2ZW50cy5yZW1vdmVMaXN0ZW5lcilcbiAgICAgICAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBsaXN0Lmxpc3RlbmVyIHx8IGxpc3RlbmVyKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgbGlzdCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwb3NpdGlvbiA9IC0xO1xuXG4gICAgICAgIGZvciAoaSA9IGxpc3QubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICBpZiAobGlzdFtpXSA9PT0gbGlzdGVuZXIgfHwgbGlzdFtpXS5saXN0ZW5lciA9PT0gbGlzdGVuZXIpIHtcbiAgICAgICAgICAgIG9yaWdpbmFsTGlzdGVuZXIgPSBsaXN0W2ldLmxpc3RlbmVyO1xuICAgICAgICAgICAgcG9zaXRpb24gPSBpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBvc2l0aW9uIDwgMClcbiAgICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgICBpZiAocG9zaXRpb24gPT09IDApXG4gICAgICAgICAgbGlzdC5zaGlmdCgpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBzcGxpY2VPbmUobGlzdCwgcG9zaXRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGxpc3QubGVuZ3RoID09PSAxKVxuICAgICAgICAgIGV2ZW50c1t0eXBlXSA9IGxpc3RbMF07XG5cbiAgICAgICAgaWYgKGV2ZW50cy5yZW1vdmVMaXN0ZW5lciAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBvcmlnaW5hbExpc3RlbmVyIHx8IGxpc3RlbmVyKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vZmYgPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9XG4gICAgZnVuY3Rpb24gcmVtb3ZlQWxsTGlzdGVuZXJzKHR5cGUpIHtcbiAgICAgIHZhciBsaXN0ZW5lcnMsIGV2ZW50cywgaTtcblxuICAgICAgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICAgICAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgLy8gbm90IGxpc3RlbmluZyBmb3IgcmVtb3ZlTGlzdGVuZXIsIG5vIG5lZWQgdG8gZW1pdFxuICAgICAgaWYgKGV2ZW50cy5yZW1vdmVMaXN0ZW5lciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnRzW3R5cGVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBpZiAoLS10aGlzLl9ldmVudHNDb3VudCA9PT0gMClcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgZGVsZXRlIGV2ZW50c1t0eXBlXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgLy8gZW1pdCByZW1vdmVMaXN0ZW5lciBmb3IgYWxsIGxpc3RlbmVycyBvbiBhbGwgZXZlbnRzXG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGV2ZW50cyk7XG4gICAgICAgIHZhciBrZXk7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgICBpZiAoa2V5ID09PSAncmVtb3ZlTGlzdGVuZXInKSBjb250aW51ZTtcbiAgICAgICAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycyhrZXkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKCdyZW1vdmVMaXN0ZW5lcicpO1xuICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICBsaXN0ZW5lcnMgPSBldmVudHNbdHlwZV07XG5cbiAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXJzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzKTtcbiAgICAgIH0gZWxzZSBpZiAobGlzdGVuZXJzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgLy8gTElGTyBvcmRlclxuICAgICAgICBmb3IgKGkgPSBsaXN0ZW5lcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyc1tpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuZnVuY3Rpb24gX2xpc3RlbmVycyh0YXJnZXQsIHR5cGUsIHVud3JhcCkge1xuICB2YXIgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHM7XG5cbiAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBbXTtcblxuICB2YXIgZXZsaXN0ZW5lciA9IGV2ZW50c1t0eXBlXTtcbiAgaWYgKGV2bGlzdGVuZXIgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gW107XG5cbiAgaWYgKHR5cGVvZiBldmxpc3RlbmVyID09PSAnZnVuY3Rpb24nKVxuICAgIHJldHVybiB1bndyYXAgPyBbZXZsaXN0ZW5lci5saXN0ZW5lciB8fCBldmxpc3RlbmVyXSA6IFtldmxpc3RlbmVyXTtcblxuICByZXR1cm4gdW53cmFwID9cbiAgICB1bndyYXBMaXN0ZW5lcnMoZXZsaXN0ZW5lcikgOiBhcnJheUNsb25lKGV2bGlzdGVuZXIsIGV2bGlzdGVuZXIubGVuZ3RoKTtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lcnMgPSBmdW5jdGlvbiBsaXN0ZW5lcnModHlwZSkge1xuICByZXR1cm4gX2xpc3RlbmVycyh0aGlzLCB0eXBlLCB0cnVlKTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmF3TGlzdGVuZXJzID0gZnVuY3Rpb24gcmF3TGlzdGVuZXJzKHR5cGUpIHtcbiAgcmV0dXJuIF9saXN0ZW5lcnModGhpcywgdHlwZSwgZmFsc2UpO1xufTtcblxuRXZlbnRFbWl0dGVyLmxpc3RlbmVyQ291bnQgPSBmdW5jdGlvbihlbWl0dGVyLCB0eXBlKSB7XG4gIGlmICh0eXBlb2YgZW1pdHRlci5saXN0ZW5lckNvdW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGVtaXR0ZXIubGlzdGVuZXJDb3VudCh0eXBlKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbGlzdGVuZXJDb3VudC5jYWxsKGVtaXR0ZXIsIHR5cGUpO1xuICB9XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVyQ291bnQgPSBsaXN0ZW5lckNvdW50O1xuZnVuY3Rpb24gbGlzdGVuZXJDb3VudCh0eXBlKSB7XG4gIHZhciBldmVudHMgPSB0aGlzLl9ldmVudHM7XG5cbiAgaWYgKGV2ZW50cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGV2bGlzdGVuZXIgPSBldmVudHNbdHlwZV07XG5cbiAgICBpZiAodHlwZW9mIGV2bGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH0gZWxzZSBpZiAoZXZsaXN0ZW5lciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZXZsaXN0ZW5lci5sZW5ndGg7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIDA7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZXZlbnROYW1lcyA9IGZ1bmN0aW9uIGV2ZW50TmFtZXMoKSB7XG4gIHJldHVybiB0aGlzLl9ldmVudHNDb3VudCA+IDAgPyBSZWZsZWN0T3duS2V5cyh0aGlzLl9ldmVudHMpIDogW107XG59O1xuXG5mdW5jdGlvbiBhcnJheUNsb25lKGFyciwgbikge1xuICB2YXIgY29weSA9IG5ldyBBcnJheShuKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBuOyArK2kpXG4gICAgY29weVtpXSA9IGFycltpXTtcbiAgcmV0dXJuIGNvcHk7XG59XG5cbmZ1bmN0aW9uIHNwbGljZU9uZShsaXN0LCBpbmRleCkge1xuICBmb3IgKDsgaW5kZXggKyAxIDwgbGlzdC5sZW5ndGg7IGluZGV4KyspXG4gICAgbGlzdFtpbmRleF0gPSBsaXN0W2luZGV4ICsgMV07XG4gIGxpc3QucG9wKCk7XG59XG5cbmZ1bmN0aW9uIHVud3JhcExpc3RlbmVycyhhcnIpIHtcbiAgdmFyIHJldCA9IG5ldyBBcnJheShhcnIubGVuZ3RoKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXQubGVuZ3RoOyArK2kpIHtcbiAgICByZXRbaV0gPSBhcnJbaV0ubGlzdGVuZXIgfHwgYXJyW2ldO1xuICB9XG4gIHJldHVybiByZXQ7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGxvYWRTY3JpcHQyIChzcmMsIGF0dHJzLCBwYXJlbnROb2RlKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0JylcbiAgICBzY3JpcHQuYXN5bmMgPSB0cnVlXG4gICAgc2NyaXB0LnNyYyA9IHNyY1xuXG4gICAgZm9yIChjb25zdCBbaywgdl0gb2YgT2JqZWN0LmVudHJpZXMoYXR0cnMgfHwge30pKSB7XG4gICAgICBzY3JpcHQuc2V0QXR0cmlidXRlKGssIHYpXG4gICAgfVxuXG4gICAgc2NyaXB0Lm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG51bGxcbiAgICAgIHJlc29sdmUoc2NyaXB0KVxuICAgIH1cblxuICAgIHNjcmlwdC5vbmVycm9yID0gKCkgPT4ge1xuICAgICAgc2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gbnVsbFxuICAgICAgcmVqZWN0KG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgJHtzcmN9YCkpXG4gICAgfVxuXG4gICAgY29uc3Qgbm9kZSA9IHBhcmVudE5vZGUgfHwgZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdXG4gICAgbm9kZS5hcHBlbmRDaGlsZChzY3JpcHQpXG4gIH0pXG59XG4iLCJjb25zdCBFdmVudEVtaXR0ZXIgPSByZXF1aXJlKCdldmVudHMnKS5FdmVudEVtaXR0ZXJcbmNvbnN0IGxvYWRTY3JpcHQgPSByZXF1aXJlKCdsb2FkLXNjcmlwdDInKVxuXG5jb25zdCBZT1VUVUJFX0lGUkFNRV9BUElfU1JDID0gJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2lmcmFtZV9hcGknXG5cbmNvbnN0IFlPVVRVQkVfU1RBVEVTID0ge1xuICAnLTEnOiAndW5zdGFydGVkJyxcbiAgMDogJ2VuZGVkJyxcbiAgMTogJ3BsYXlpbmcnLFxuICAyOiAncGF1c2VkJyxcbiAgMzogJ2J1ZmZlcmluZycsXG4gIDU6ICdjdWVkJ1xufVxuXG5jb25zdCBZT1VUVUJFX0VSUk9SID0ge1xuICAvLyBUaGUgcmVxdWVzdCBjb250YWlucyBhbiBpbnZhbGlkIHBhcmFtZXRlciB2YWx1ZS4gRm9yIGV4YW1wbGUsIHRoaXMgZXJyb3JcbiAgLy8gb2NjdXJzIGlmIHlvdSBzcGVjaWZ5IGEgdmlkZW9JZCB0aGF0IGRvZXMgbm90IGhhdmUgMTEgY2hhcmFjdGVycywgb3IgaWYgdGhlXG4gIC8vIHZpZGVvSWQgY29udGFpbnMgaW52YWxpZCBjaGFyYWN0ZXJzLCBzdWNoIGFzIGV4Y2xhbWF0aW9uIHBvaW50cyBvciBhc3Rlcmlza3MuXG4gIElOVkFMSURfUEFSQU06IDIsXG5cbiAgLy8gVGhlIHJlcXVlc3RlZCBjb250ZW50IGNhbm5vdCBiZSBwbGF5ZWQgaW4gYW4gSFRNTDUgcGxheWVyIG9yIGFub3RoZXIgZXJyb3JcbiAgLy8gcmVsYXRlZCB0byB0aGUgSFRNTDUgcGxheWVyIGhhcyBvY2N1cnJlZC5cbiAgSFRNTDVfRVJST1I6IDUsXG5cbiAgLy8gVGhlIHZpZGVvIHJlcXVlc3RlZCB3YXMgbm90IGZvdW5kLiBUaGlzIGVycm9yIG9jY3VycyB3aGVuIGEgdmlkZW8gaGFzIGJlZW5cbiAgLy8gcmVtb3ZlZCAoZm9yIGFueSByZWFzb24pIG9yIGhhcyBiZWVuIG1hcmtlZCBhcyBwcml2YXRlLlxuICBOT1RfRk9VTkQ6IDEwMCxcblxuICAvLyBUaGUgb3duZXIgb2YgdGhlIHJlcXVlc3RlZCB2aWRlbyBkb2VzIG5vdCBhbGxvdyBpdCB0byBiZSBwbGF5ZWQgaW4gZW1iZWRkZWRcbiAgLy8gcGxheWVycy5cbiAgVU5QTEFZQUJMRV8xOiAxMDEsXG5cbiAgLy8gVGhpcyBlcnJvciBpcyB0aGUgc2FtZSBhcyAxMDEuIEl0J3MganVzdCBhIDEwMSBlcnJvciBpbiBkaXNndWlzZSFcbiAgVU5QTEFZQUJMRV8yOiAxNTBcbn1cblxuY29uc3QgbG9hZElmcmFtZUFQSUNhbGxiYWNrcyA9IFtdXG5cbi8qKlxuICogWW91VHViZSBQbGF5ZXIuIEV4cG9zZXMgYSBiZXR0ZXIgQVBJLCB3aXRoIG5pY2VyIGV2ZW50cy5cbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR8c2VsZWN0b3J9IGVsZW1lbnRcbiAqL1xuY2xhc3MgWW91VHViZVBsYXllciBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yIChlbGVtZW50LCBvcHRzKSB7XG4gICAgc3VwZXIoKVxuXG4gICAgY29uc3QgZWxlbSA9IHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJ1xuICAgICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW1lbnQpXG4gICAgICA6IGVsZW1lbnRcblxuICAgIGlmIChlbGVtLmlkKSB7XG4gICAgICB0aGlzLl9pZCA9IGVsZW0uaWQgLy8gdXNlIGV4aXN0aW5nIGVsZW1lbnQgaWRcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5faWQgPSBlbGVtLmlkID0gJ3l0cGxheWVyLScgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDE2KS5zbGljZSgyLCA4KVxuICAgIH1cblxuICAgIHRoaXMuX29wdHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIHdpZHRoOiA2NDAsXG4gICAgICBoZWlnaHQ6IDM2MCxcbiAgICAgIGF1dG9wbGF5OiBmYWxzZSxcbiAgICAgIGNhcHRpb25zOiB1bmRlZmluZWQsXG4gICAgICBjb250cm9sczogdHJ1ZSxcbiAgICAgIGtleWJvYXJkOiB0cnVlLFxuICAgICAgZnVsbHNjcmVlbjogdHJ1ZSxcbiAgICAgIGFubm90YXRpb25zOiB0cnVlLFxuICAgICAgbW9kZXN0QnJhbmRpbmc6IGZhbHNlLFxuICAgICAgcmVsYXRlZDogdHJ1ZSxcbiAgICAgIHRpbWV1cGRhdGVGcmVxdWVuY3k6IDEwMDAsXG4gICAgICBwbGF5c0lubGluZTogdHJ1ZVxuICAgIH0sIG9wdHMpXG5cbiAgICB0aGlzLnZpZGVvSWQgPSBudWxsXG4gICAgdGhpcy5kZXN0cm95ZWQgPSBmYWxzZVxuXG4gICAgdGhpcy5fYXBpID0gbnVsbFxuICAgIHRoaXMuX2F1dG9wbGF5ID0gZmFsc2UgLy8gYXV0b3BsYXkgdGhlIGZpcnN0IHZpZGVvP1xuICAgIHRoaXMuX3BsYXllciA9IG51bGxcbiAgICB0aGlzLl9yZWFkeSA9IGZhbHNlIC8vIGlzIHBsYXllciByZWFkeT9cbiAgICB0aGlzLl9xdWV1ZSA9IFtdXG5cbiAgICB0aGlzLl9pbnRlcnZhbCA9IG51bGxcblxuICAgIC8vIFNldHVwIGxpc3RlbmVycyBmb3IgJ3RpbWV1cGRhdGUnIGV2ZW50cy4gVGhlIFlvdVR1YmUgUGxheWVyIGRvZXMgbm90IGZpcmVcbiAgICAvLyAndGltZXVwZGF0ZScgZXZlbnRzLCBzbyB0aGV5IGFyZSBzaW11bGF0ZWQgdXNpbmcgYSBzZXRJbnRlcnZhbCgpLlxuICAgIHRoaXMuX3N0YXJ0SW50ZXJ2YWwgPSB0aGlzLl9zdGFydEludGVydmFsLmJpbmQodGhpcylcbiAgICB0aGlzLl9zdG9wSW50ZXJ2YWwgPSB0aGlzLl9zdG9wSW50ZXJ2YWwuYmluZCh0aGlzKVxuXG4gICAgdGhpcy5vbigncGxheWluZycsIHRoaXMuX3N0YXJ0SW50ZXJ2YWwpXG4gICAgdGhpcy5vbigndW5zdGFydGVkJywgdGhpcy5fc3RvcEludGVydmFsKVxuICAgIHRoaXMub24oJ2VuZGVkJywgdGhpcy5fc3RvcEludGVydmFsKVxuICAgIHRoaXMub24oJ3BhdXNlZCcsIHRoaXMuX3N0b3BJbnRlcnZhbClcbiAgICB0aGlzLm9uKCdidWZmZXJpbmcnLCB0aGlzLl9zdG9wSW50ZXJ2YWwpXG5cbiAgICB0aGlzLl9sb2FkSWZyYW1lQVBJKChlcnIsIGFwaSkgPT4ge1xuICAgICAgaWYgKGVycikgcmV0dXJuIHRoaXMuX2Rlc3Ryb3kobmV3IEVycm9yKCdZb3VUdWJlIElmcmFtZSBBUEkgZmFpbGVkIHRvIGxvYWQnKSlcbiAgICAgIHRoaXMuX2FwaSA9IGFwaVxuXG4gICAgICAvLyBJZiBsb2FkKHZpZGVvSWQsIFthdXRvcGxheV0pIHdhcyBjYWxsZWQgYmVmb3JlIElmcmFtZSBBUEkgbG9hZGVkLCBlbnN1cmUgaXQgZ2V0c1xuICAgICAgLy8gY2FsbGVkIGFnYWluIG5vd1xuICAgICAgaWYgKHRoaXMudmlkZW9JZCkgdGhpcy5sb2FkKHRoaXMudmlkZW9JZCwgdGhpcy5fYXV0b3BsYXkpXG4gICAgfSlcbiAgfVxuXG4gIGxvYWQgKHZpZGVvSWQsIGF1dG9wbGF5ID0gZmFsc2UpIHtcbiAgICBpZiAodGhpcy5kZXN0cm95ZWQpIHJldHVyblxuXG4gICAgdGhpcy52aWRlb0lkID0gdmlkZW9JZFxuICAgIHRoaXMuX2F1dG9wbGF5ID0gYXV0b3BsYXlcblxuICAgIC8vIElmIHRoZSBJZnJhbWUgQVBJIGlzIG5vdCByZWFkeSB5ZXQsIGRvIG5vdGhpbmcuIE9uY2UgdGhlIElmcmFtZSBBUEkgaXNcbiAgICAvLyByZWFkeSwgYGxvYWQodGhpcy52aWRlb0lkKWAgd2lsbCBiZSBjYWxsZWQuXG4gICAgaWYgKCF0aGlzLl9hcGkpIHJldHVyblxuXG4gICAgLy8gSWYgdGhlcmUgaXMgbm8gcGxheWVyIGluc3RhbmNlLCBjcmVhdGUgb25lLlxuICAgIGlmICghdGhpcy5fcGxheWVyKSB7XG4gICAgICB0aGlzLl9jcmVhdGVQbGF5ZXIodmlkZW9JZClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBwbGF5ZXIgaW5zdGFuY2UgaXMgbm90IHJlYWR5IHlldCwgZG8gbm90aGluZy4gT25jZSB0aGUgcGxheWVyXG4gICAgLy8gaW5zdGFuY2UgaXMgcmVhZHksIGBsb2FkKHRoaXMudmlkZW9JZClgIHdpbGwgYmUgY2FsbGVkLiBUaGlzIGVuc3VyZXMgdGhhdFxuICAgIC8vIHRoZSBsYXN0IGNhbGwgdG8gYGxvYWQoKWAgaXMgdGhlIG9uZSB0aGF0IHRha2VzIGVmZmVjdC5cbiAgICBpZiAoIXRoaXMuX3JlYWR5KSByZXR1cm5cblxuICAgIC8vIElmIHRoZSBwbGF5ZXIgaW5zdGFuY2UgaXMgcmVhZHksIGxvYWQgdGhlIGdpdmVuIGB2aWRlb0lkYC5cbiAgICBpZiAoYXV0b3BsYXkpIHtcbiAgICAgIHRoaXMuX3BsYXllci5sb2FkVmlkZW9CeUlkKHZpZGVvSWQpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3BsYXllci5jdWVWaWRlb0J5SWQodmlkZW9JZClcbiAgICB9XG4gIH1cblxuICBwbGF5ICgpIHtcbiAgICBpZiAodGhpcy5fcmVhZHkpIHRoaXMuX3BsYXllci5wbGF5VmlkZW8oKVxuICAgIGVsc2UgdGhpcy5fcXVldWVDb21tYW5kKCdwbGF5JylcbiAgfVxuXG4gIHBhdXNlICgpIHtcbiAgICBpZiAodGhpcy5fcmVhZHkpIHRoaXMuX3BsYXllci5wYXVzZVZpZGVvKClcbiAgICBlbHNlIHRoaXMuX3F1ZXVlQ29tbWFuZCgncGF1c2UnKVxuICB9XG5cbiAgc3RvcCAoKSB7XG4gICAgaWYgKHRoaXMuX3JlYWR5KSB0aGlzLl9wbGF5ZXIuc3RvcFZpZGVvKClcbiAgICBlbHNlIHRoaXMuX3F1ZXVlQ29tbWFuZCgnc3RvcCcpXG4gIH1cblxuICBzZWVrIChzZWNvbmRzKSB7XG4gICAgaWYgKHRoaXMuX3JlYWR5KSB0aGlzLl9wbGF5ZXIuc2Vla1RvKHNlY29uZHMsIHRydWUpXG4gICAgZWxzZSB0aGlzLl9xdWV1ZUNvbW1hbmQoJ3NlZWsnLCBzZWNvbmRzKVxuICB9XG5cbiAgc2V0Vm9sdW1lICh2b2x1bWUpIHtcbiAgICBpZiAodGhpcy5fcmVhZHkpIHRoaXMuX3BsYXllci5zZXRWb2x1bWUodm9sdW1lKVxuICAgIGVsc2UgdGhpcy5fcXVldWVDb21tYW5kKCdzZXRWb2x1bWUnLCB2b2x1bWUpXG4gIH1cblxuICBnZXRWb2x1bWUgKCkge1xuICAgIHJldHVybiAodGhpcy5fcmVhZHkgJiYgdGhpcy5fcGxheWVyLmdldFZvbHVtZSgpKSB8fCAwXG4gIH1cblxuICBtdXRlICgpIHtcbiAgICBpZiAodGhpcy5fcmVhZHkpIHRoaXMuX3BsYXllci5tdXRlKClcbiAgICBlbHNlIHRoaXMuX3F1ZXVlQ29tbWFuZCgnbXV0ZScpXG4gIH1cblxuICB1bk11dGUgKCkge1xuICAgIGlmICh0aGlzLl9yZWFkeSkgdGhpcy5fcGxheWVyLnVuTXV0ZSgpXG4gICAgZWxzZSB0aGlzLl9xdWV1ZUNvbW1hbmQoJ3VuTXV0ZScpXG4gIH1cblxuICBpc011dGVkICgpIHtcbiAgICByZXR1cm4gKHRoaXMuX3JlYWR5ICYmIHRoaXMuX3BsYXllci5pc011dGVkKCkpIHx8IGZhbHNlXG4gIH1cblxuICBzZXRTaXplICh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgaWYgKHRoaXMuX3JlYWR5KSB0aGlzLl9wbGF5ZXIuc2V0U2l6ZSh3aWR0aCwgaGVpZ2h0KVxuICAgIGVsc2UgdGhpcy5fcXVldWVDb21tYW5kKCdzZXRTaXplJywgd2lkdGgsIGhlaWdodClcbiAgfVxuXG4gIHNldFBsYXliYWNrUmF0ZSAocmF0ZSkge1xuICAgIGlmICh0aGlzLl9yZWFkeSkgdGhpcy5fcGxheWVyLnNldFBsYXliYWNrUmF0ZShyYXRlKVxuICAgIGVsc2UgdGhpcy5fcXVldWVDb21tYW5kKCdzZXRQbGF5YmFja1JhdGUnLCByYXRlKVxuICB9XG5cbiAgc2V0UGxheWJhY2tRdWFsaXR5IChzdWdnZXN0ZWRRdWFsaXR5KSB7XG4gICAgaWYgKHRoaXMuX3JlYWR5KSB0aGlzLl9wbGF5ZXIuc2V0UGxheWJhY2tRdWFsaXR5KHN1Z2dlc3RlZFF1YWxpdHkpXG4gICAgZWxzZSB0aGlzLl9xdWV1ZUNvbW1hbmQoJ3NldFBsYXliYWNrUXVhbGl0eScsIHN1Z2dlc3RlZFF1YWxpdHkpXG4gIH1cblxuICBnZXRQbGF5YmFja1JhdGUgKCkge1xuICAgIHJldHVybiAodGhpcy5fcmVhZHkgJiYgdGhpcy5fcGxheWVyLmdldFBsYXliYWNrUmF0ZSgpKSB8fCAxXG4gIH1cblxuICBnZXRBdmFpbGFibGVQbGF5YmFja1JhdGVzICgpIHtcbiAgICByZXR1cm4gKHRoaXMuX3JlYWR5ICYmIHRoaXMuX3BsYXllci5nZXRBdmFpbGFibGVQbGF5YmFja1JhdGVzKCkpIHx8IFsxXVxuICB9XG5cbiAgZ2V0RHVyYXRpb24gKCkge1xuICAgIHJldHVybiAodGhpcy5fcmVhZHkgJiYgdGhpcy5fcGxheWVyLmdldER1cmF0aW9uKCkpIHx8IDBcbiAgfVxuXG4gIGdldFByb2dyZXNzICgpIHtcbiAgICByZXR1cm4gKHRoaXMuX3JlYWR5ICYmIHRoaXMuX3BsYXllci5nZXRWaWRlb0xvYWRlZEZyYWN0aW9uKCkpIHx8IDBcbiAgfVxuXG4gIGdldFN0YXRlICgpIHtcbiAgICByZXR1cm4gKHRoaXMuX3JlYWR5ICYmIFlPVVRVQkVfU1RBVEVTW3RoaXMuX3BsYXllci5nZXRQbGF5ZXJTdGF0ZSgpXSkgfHwgJ3Vuc3RhcnRlZCdcbiAgfVxuXG4gIGdldEN1cnJlbnRUaW1lICgpIHtcbiAgICByZXR1cm4gKHRoaXMuX3JlYWR5ICYmIHRoaXMuX3BsYXllci5nZXRDdXJyZW50VGltZSgpKSB8fCAwXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLl9kZXN0cm95KClcbiAgfVxuXG4gIF9kZXN0cm95IChlcnIpIHtcbiAgICBpZiAodGhpcy5kZXN0cm95ZWQpIHJldHVyblxuICAgIHRoaXMuZGVzdHJveWVkID0gdHJ1ZVxuXG4gICAgaWYgKHRoaXMuX3BsYXllcikge1xuICAgICAgdGhpcy5fcGxheWVyLnN0b3BWaWRlbyAmJiB0aGlzLl9wbGF5ZXIuc3RvcFZpZGVvKClcbiAgICAgIHRoaXMuX3BsYXllci5kZXN0cm95KClcbiAgICB9XG5cbiAgICB0aGlzLnZpZGVvSWQgPSBudWxsXG5cbiAgICB0aGlzLl9pZCA9IG51bGxcbiAgICB0aGlzLl9vcHRzID0gbnVsbFxuICAgIHRoaXMuX2FwaSA9IG51bGxcbiAgICB0aGlzLl9wbGF5ZXIgPSBudWxsXG4gICAgdGhpcy5fcmVhZHkgPSBmYWxzZVxuICAgIHRoaXMuX3F1ZXVlID0gbnVsbFxuXG4gICAgdGhpcy5fc3RvcEludGVydmFsKClcblxuICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIoJ3BsYXlpbmcnLCB0aGlzLl9zdGFydEludGVydmFsKVxuICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIoJ3BhdXNlZCcsIHRoaXMuX3N0b3BJbnRlcnZhbClcbiAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKCdidWZmZXJpbmcnLCB0aGlzLl9zdG9wSW50ZXJ2YWwpXG4gICAgdGhpcy5yZW1vdmVMaXN0ZW5lcigndW5zdGFydGVkJywgdGhpcy5fc3RvcEludGVydmFsKVxuICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIoJ2VuZGVkJywgdGhpcy5fc3RvcEludGVydmFsKVxuXG4gICAgaWYgKGVycikgdGhpcy5lbWl0KCdlcnJvcicsIGVycilcbiAgfVxuXG4gIF9xdWV1ZUNvbW1hbmQgKGNvbW1hbmQsIC4uLmFyZ3MpIHtcbiAgICBpZiAodGhpcy5kZXN0cm95ZWQpIHJldHVyblxuICAgIHRoaXMuX3F1ZXVlLnB1c2goW2NvbW1hbmQsIGFyZ3NdKVxuICB9XG5cbiAgX2ZsdXNoUXVldWUgKCkge1xuICAgIHdoaWxlICh0aGlzLl9xdWV1ZS5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IGNvbW1hbmQgPSB0aGlzLl9xdWV1ZS5zaGlmdCgpXG4gICAgICB0aGlzW2NvbW1hbmRbMF1dLmFwcGx5KHRoaXMsIGNvbW1hbmRbMV0pXG4gICAgfVxuICB9XG5cbiAgX2xvYWRJZnJhbWVBUEkgKGNiKSB7XG4gICAgLy8gSWYgQVBJIGlzIGxvYWRlZCwgdGhlcmUgaXMgbm90aGluZyBlbHNlIHRvIGRvXG4gICAgaWYgKHdpbmRvdy5ZVCAmJiB0eXBlb2Ygd2luZG93LllULlBsYXllciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGNiKG51bGwsIHdpbmRvdy5ZVClcbiAgICB9XG5cbiAgICAvLyBPdGhlcndpc2UsIHF1ZXVlIGNhbGxiYWNrIHVudGlsIEFQSSBpcyBsb2FkZWRcbiAgICBsb2FkSWZyYW1lQVBJQ2FsbGJhY2tzLnB1c2goY2IpXG5cbiAgICBjb25zdCBzY3JpcHRzID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0JykpXG4gICAgY29uc3QgaXNMb2FkaW5nID0gc2NyaXB0cy5zb21lKHNjcmlwdCA9PiBzY3JpcHQuc3JjID09PSBZT1VUVUJFX0lGUkFNRV9BUElfU1JDKVxuXG4gICAgLy8gSWYgQVBJIDxzY3JpcHQ+IHRhZyBpcyBub3QgcHJlc2VudCBpbiB0aGUgcGFnZSwgaW5qZWN0IGl0LiBFbnN1cmVzIHRoYXRcbiAgICAvLyBpZiB1c2VyIGluY2x1ZGVzIGEgaGFyZGNvZGVkIDxzY3JpcHQ+IHRhZyBpbiBIVE1MIGZvciBwZXJmb3JtYW5jZSwgYW5vdGhlclxuICAgIC8vIG9uZSB3aWxsIG5vdCBiZSBhZGRlZFxuICAgIGlmICghaXNMb2FkaW5nKSB7XG4gICAgICBsb2FkU2NyaXB0KFlPVVRVQkVfSUZSQU1FX0FQSV9TUkMpLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIHdoaWxlIChsb2FkSWZyYW1lQVBJQ2FsbGJhY2tzLmxlbmd0aCkge1xuICAgICAgICAgIGNvbnN0IGxvYWRDYiA9IGxvYWRJZnJhbWVBUElDYWxsYmFja3Muc2hpZnQoKVxuICAgICAgICAgIGxvYWRDYihlcnIpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gSWYgcmVhZHkgZnVuY3Rpb24gaXMgbm90IHByZXNlbnQsIGNyZWF0ZSBpdFxuICAgIGlmICh0eXBlb2Ygd2luZG93Lm9uWW91VHViZUlmcmFtZUFQSVJlYWR5ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB3aW5kb3cub25Zb3VUdWJlSWZyYW1lQVBJUmVhZHkgPSAoKSA9PiB7XG4gICAgICAgIHdoaWxlIChsb2FkSWZyYW1lQVBJQ2FsbGJhY2tzLmxlbmd0aCkge1xuICAgICAgICAgIGNvbnN0IGxvYWRDYiA9IGxvYWRJZnJhbWVBUElDYWxsYmFja3Muc2hpZnQoKVxuICAgICAgICAgIGxvYWRDYihudWxsLCB3aW5kb3cuWVQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfY3JlYXRlUGxheWVyICh2aWRlb0lkKSB7XG4gICAgaWYgKHRoaXMuZGVzdHJveWVkKSByZXR1cm5cblxuICAgIGNvbnN0IG9wdHMgPSB0aGlzLl9vcHRzXG5cbiAgICB0aGlzLl9wbGF5ZXIgPSBuZXcgdGhpcy5fYXBpLlBsYXllcih0aGlzLl9pZCwge1xuICAgICAgd2lkdGg6IG9wdHMud2lkdGgsXG4gICAgICBoZWlnaHQ6IG9wdHMuaGVpZ2h0LFxuICAgICAgdmlkZW9JZDogdmlkZW9JZCxcbiAgICAgIHBsYXllclZhcnM6IHtcbiAgICAgICAgLy8gVGhpcyBwYXJhbWV0ZXIgc3BlY2lmaWVzIHdoZXRoZXIgdGhlIGluaXRpYWwgdmlkZW8gd2lsbCBhdXRvbWF0aWNhbGx5XG4gICAgICAgIC8vIHN0YXJ0IHRvIHBsYXkgd2hlbiB0aGUgcGxheWVyIGxvYWRzLiBTdXBwb3J0ZWQgdmFsdWVzIGFyZSAwIG9yIDEuIFRoZVxuICAgICAgICAvLyBkZWZhdWx0IHZhbHVlIGlzIDAuXG4gICAgICAgIGF1dG9wbGF5OiBvcHRzLmF1dG9wbGF5ID8gMSA6IDAsXG5cbiAgICAgICAgLy8gU2V0dGluZyB0aGUgcGFyYW1ldGVyJ3MgdmFsdWUgdG8gMSBjYXVzZXMgY2xvc2VkIGNhcHRpb25zIHRvIGJlIHNob3duXG4gICAgICAgIC8vIGJ5IGRlZmF1bHQsIGV2ZW4gaWYgdGhlIHVzZXIgaGFzIHR1cm5lZCBjYXB0aW9ucyBvZmYuIFRoZSBkZWZhdWx0XG4gICAgICAgIC8vIGJlaGF2aW9yIGlzIGJhc2VkIG9uIHVzZXIgcHJlZmVyZW5jZS5cbiAgICAgICAgY2NfbG9hZF9wb2xpY3k6IG9wdHMuY2FwdGlvbnMgIT0gbnVsbFxuICAgICAgICAgID8gb3B0cy5jYXB0aW9ucyAhPT0gZmFsc2UgPyAxIDogMFxuICAgICAgICAgIDogdW5kZWZpbmVkLCAvLyBkZWZhdWx0IHRvIG5vdCBzZXR0aW5nIHRoaXMgb3B0aW9uXG5cbiAgICAgICAgLy8gU2V0cyB0aGUgcGxheWVyJ3MgaW50ZXJmYWNlIGxhbmd1YWdlLiBUaGUgcGFyYW1ldGVyIHZhbHVlIGlzIGFuIElTT1xuICAgICAgICAvLyA2MzktMSB0d28tbGV0dGVyIGxhbmd1YWdlIGNvZGUgb3IgYSBmdWxseSBzcGVjaWZpZWQgbG9jYWxlLiBGb3JcbiAgICAgICAgLy8gZXhhbXBsZSwgZnIgYW5kIGZyLWNhIGFyZSBib3RoIHZhbGlkIHZhbHVlcy4gT3RoZXIgbGFuZ3VhZ2UgaW5wdXRcbiAgICAgICAgLy8gY29kZXMsIHN1Y2ggYXMgSUVURiBsYW5ndWFnZSB0YWdzIChCQ1AgNDcpIG1pZ2h0IGFsc28gYmUgaGFuZGxlZFxuICAgICAgICAvLyBwcm9wZXJseS5cbiAgICAgICAgaGw6IChvcHRzLmNhcHRpb25zICE9IG51bGwgJiYgb3B0cy5jYXB0aW9ucyAhPT0gZmFsc2UpXG4gICAgICAgICAgPyBvcHRzLmNhcHRpb25zXG4gICAgICAgICAgOiB1bmRlZmluZWQsIC8vIGRlZmF1bHQgdG8gbm90IHNldHRpbmcgdGhpcyBvcHRpb25cblxuICAgICAgICAvLyBUaGlzIHBhcmFtZXRlciBzcGVjaWZpZXMgdGhlIGRlZmF1bHQgbGFuZ3VhZ2UgdGhhdCB0aGUgcGxheWVyIHdpbGxcbiAgICAgICAgLy8gdXNlIHRvIGRpc3BsYXkgY2FwdGlvbnMuIFNldCB0aGUgcGFyYW1ldGVyJ3MgdmFsdWUgdG8gYW4gSVNPIDYzOS0xXG4gICAgICAgIC8vIHR3by1sZXR0ZXIgbGFuZ3VhZ2UgY29kZS5cbiAgICAgICAgY2NfbGFuZ19wcmVmOiAob3B0cy5jYXB0aW9ucyAhPSBudWxsICYmIG9wdHMuY2FwdGlvbnMgIT09IGZhbHNlKVxuICAgICAgICAgID8gb3B0cy5jYXB0aW9uc1xuICAgICAgICAgIDogdW5kZWZpbmVkLCAvLyBkZWZhdWx0IHRvIG5vdCBzZXR0aW5nIHRoaXMgb3B0aW9uXG5cbiAgICAgICAgLy8gVGhpcyBwYXJhbWV0ZXIgaW5kaWNhdGVzIHdoZXRoZXIgdGhlIHZpZGVvIHBsYXllciBjb250cm9scyBhcmVcbiAgICAgICAgLy8gZGlzcGxheWVkLiBGb3IgSUZyYW1lIGVtYmVkcyB0aGF0IGxvYWQgYSBGbGFzaCBwbGF5ZXIsIGl0IGFsc28gZGVmaW5lc1xuICAgICAgICAvLyB3aGVuIHRoZSBjb250cm9scyBkaXNwbGF5IGluIHRoZSBwbGF5ZXIgYXMgd2VsbCBhcyB3aGVuIHRoZSBwbGF5ZXJcbiAgICAgICAgLy8gd2lsbCBsb2FkLiBTdXBwb3J0ZWQgdmFsdWVzIGFyZTpcbiAgICAgICAgLy8gICAtIGNvbnRyb2xzPTAg4oCTIFBsYXllciBjb250cm9scyBkbyBub3QgZGlzcGxheSBpbiB0aGUgcGxheWVyLiBGb3JcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICBJRnJhbWUgZW1iZWRzLCB0aGUgRmxhc2ggcGxheWVyIGxvYWRzIGltbWVkaWF0ZWx5LlxuICAgICAgICAvLyAgIC0gY29udHJvbHM9MSDigJMgKGRlZmF1bHQpIFBsYXllciBjb250cm9scyBkaXNwbGF5IGluIHRoZSBwbGF5ZXIuIEZvclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgIElGcmFtZSBlbWJlZHMsIHRoZSBjb250cm9scyBkaXNwbGF5IGltbWVkaWF0ZWx5IGFuZFxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgIHRoZSBGbGFzaCBwbGF5ZXIgYWxzbyBsb2FkcyBpbW1lZGlhdGVseS5cbiAgICAgICAgLy8gICAtIGNvbnRyb2xzPTIg4oCTIFBsYXllciBjb250cm9scyBkaXNwbGF5IGluIHRoZSBwbGF5ZXIuIEZvciBJRnJhbWVcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICBlbWJlZHMsIHRoZSBjb250cm9scyBkaXNwbGF5IGFuZCB0aGUgRmxhc2ggcGxheWVyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgbG9hZHMgYWZ0ZXIgdGhlIHVzZXIgaW5pdGlhdGVzIHRoZSB2aWRlbyBwbGF5YmFjay5cbiAgICAgICAgY29udHJvbHM6IG9wdHMuY29udHJvbHMgPyAyIDogMCxcblxuICAgICAgICAvLyBTZXR0aW5nIHRoZSBwYXJhbWV0ZXIncyB2YWx1ZSB0byAxIGNhdXNlcyB0aGUgcGxheWVyIHRvIG5vdCByZXNwb25kIHRvXG4gICAgICAgIC8vIGtleWJvYXJkIGNvbnRyb2xzLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyAwLCB3aGljaCBtZWFucyB0aGF0IGtleWJvYXJkXG4gICAgICAgIC8vIGNvbnRyb2xzIGFyZSBlbmFibGVkLlxuICAgICAgICBkaXNhYmxla2I6IG9wdHMua2V5Ym9hcmQgPyAwIDogMSxcblxuICAgICAgICAvLyBTZXR0aW5nIHRoZSBwYXJhbWV0ZXIncyB2YWx1ZSB0byAxIGVuYWJsZXMgdGhlIHBsYXllciB0byBiZVxuICAgICAgICAvLyBjb250cm9sbGVkIHZpYSBJRnJhbWUgb3IgSmF2YVNjcmlwdCBQbGF5ZXIgQVBJIGNhbGxzLiBUaGUgZGVmYXVsdFxuICAgICAgICAvLyB2YWx1ZSBpcyAwLCB3aGljaCBtZWFucyB0aGF0IHRoZSBwbGF5ZXIgY2Fubm90IGJlIGNvbnRyb2xsZWQgdXNpbmdcbiAgICAgICAgLy8gdGhvc2UgQVBJcy5cbiAgICAgICAgZW5hYmxlanNhcGk6IDEsXG5cbiAgICAgICAgLy8gU2V0dGluZyB0aGlzIHBhcmFtZXRlciB0byAwIHByZXZlbnRzIHRoZSBmdWxsc2NyZWVuIGJ1dHRvbiBmcm9tXG4gICAgICAgIC8vIGRpc3BsYXlpbmcgaW4gdGhlIHBsYXllci4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgMSwgd2hpY2ggY2F1c2VzIHRoZVxuICAgICAgICAvLyBmdWxsc2NyZWVuIGJ1dHRvbiB0byBkaXNwbGF5LlxuICAgICAgICBmczogb3B0cy5mdWxsc2NyZWVuID8gMSA6IDAsXG5cbiAgICAgICAgLy8gU2V0dGluZyB0aGUgcGFyYW1ldGVyJ3MgdmFsdWUgdG8gMSBjYXVzZXMgdmlkZW8gYW5ub3RhdGlvbnMgdG8gYmVcbiAgICAgICAgLy8gc2hvd24gYnkgZGVmYXVsdCwgd2hlcmVhcyBzZXR0aW5nIHRvIDMgY2F1c2VzIHZpZGVvIGFubm90YXRpb25zIHRvIG5vdFxuICAgICAgICAvLyBiZSBzaG93biBieSBkZWZhdWx0LiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyAxLlxuICAgICAgICBpdl9sb2FkX3BvbGljeTogb3B0cy5hbm5vdGF0aW9ucyA/IDEgOiAzLFxuXG4gICAgICAgIC8vIFRoaXMgcGFyYW1ldGVyIGxldHMgeW91IHVzZSBhIFlvdVR1YmUgcGxheWVyIHRoYXQgZG9lcyBub3Qgc2hvdyBhXG4gICAgICAgIC8vIFlvdVR1YmUgbG9nby4gU2V0IHRoZSBwYXJhbWV0ZXIgdmFsdWUgdG8gMSB0byBwcmV2ZW50IHRoZSBZb3VUdWJlIGxvZ29cbiAgICAgICAgLy8gZnJvbSBkaXNwbGF5aW5nIGluIHRoZSBjb250cm9sIGJhci4gTm90ZSB0aGF0IGEgc21hbGwgWW91VHViZSB0ZXh0XG4gICAgICAgIC8vIGxhYmVsIHdpbGwgc3RpbGwgZGlzcGxheSBpbiB0aGUgdXBwZXItcmlnaHQgY29ybmVyIG9mIGEgcGF1c2VkIHZpZGVvXG4gICAgICAgIC8vIHdoZW4gdGhlIHVzZXIncyBtb3VzZSBwb2ludGVyIGhvdmVycyBvdmVyIHRoZSBwbGF5ZXIuXG4gICAgICAgIG1vZGVzdGJyYW5kaW5nOiBvcHRzLm1vZGVzdEJyYW5kaW5nID8gMSA6IDAsXG5cbiAgICAgICAgLy8gVGhpcyBwYXJhbWV0ZXIgcHJvdmlkZXMgYW4gZXh0cmEgc2VjdXJpdHkgbWVhc3VyZSBmb3IgdGhlIElGcmFtZSBBUElcbiAgICAgICAgLy8gYW5kIGlzIG9ubHkgc3VwcG9ydGVkIGZvciBJRnJhbWUgZW1iZWRzLiBJZiB5b3UgYXJlIHVzaW5nIHRoZSBJRnJhbWVcbiAgICAgICAgLy8gQVBJLCB3aGljaCBtZWFucyB5b3UgYXJlIHNldHRpbmcgdGhlIGVuYWJsZWpzYXBpIHBhcmFtZXRlciB2YWx1ZSB0byAxLFxuICAgICAgICAvLyB5b3Ugc2hvdWxkIGFsd2F5cyBzcGVjaWZ5IHlvdXIgZG9tYWluIGFzIHRoZSBvcmlnaW4gcGFyYW1ldGVyIHZhbHVlLlxuICAgICAgICBvcmlnaW46IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4sXG5cbiAgICAgICAgLy8gVGhpcyBwYXJhbWV0ZXIgY29udHJvbHMgd2hldGhlciB2aWRlb3MgcGxheSBpbmxpbmUgb3IgZnVsbHNjcmVlbiBpbiBhblxuICAgICAgICAvLyBIVE1MNSBwbGF5ZXIgb24gaU9TLiBWYWxpZCB2YWx1ZXMgYXJlOlxuICAgICAgICAvLyAgIC0gMDogVGhpcyB2YWx1ZSBjYXVzZXMgZnVsbHNjcmVlbiBwbGF5YmFjay4gVGhpcyBpcyBjdXJyZW50bHkgdGhlXG4gICAgICAgIC8vICAgICAgICBkZWZhdWx0IHZhbHVlLCB0aG91Z2ggdGhlIGRlZmF1bHQgaXMgc3ViamVjdCB0byBjaGFuZ2UuXG4gICAgICAgIC8vICAgLSAxOiBUaGlzIHZhbHVlIGNhdXNlcyBpbmxpbmUgcGxheWJhY2sgZm9yIFVJV2ViVmlld3MgY3JlYXRlZCB3aXRoXG4gICAgICAgIC8vICAgICAgICB0aGUgYWxsb3dzSW5saW5lTWVkaWFQbGF5YmFjayBwcm9wZXJ0eSBzZXQgdG8gVFJVRS5cbiAgICAgICAgcGxheXNpbmxpbmU6IG9wdHMucGxheXNJbmxpbmUgPyAxIDogMCxcblxuICAgICAgICAvLyBUaGlzIHBhcmFtZXRlciBpbmRpY2F0ZXMgd2hldGhlciB0aGUgcGxheWVyIHNob3VsZCBzaG93IHJlbGF0ZWRcbiAgICAgICAgLy8gdmlkZW9zIGZyb20gdGhlIHNhbWUgY2hhbm5lbCAoMCkgb3IgZnJvbSBhbnkgY2hhbm5lbCAoMSkgd2hlblxuICAgICAgICAvLyBwbGF5YmFjayBvZiB0aGUgdmlkZW8gZW5kcy4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgMS5cbiAgICAgICAgcmVsOiBvcHRzLnJlbGF0ZWQgPyAxIDogMCxcblxuICAgICAgICAvLyAoTm90IHBhcnQgb2YgZG9jdW1lbnRlZCBBUEkpIEFsbG93IGh0bWwgZWxlbWVudHMgd2l0aCBoaWdoZXIgei1pbmRleFxuICAgICAgICAvLyB0byBiZSBzaG93biBvbiB0b3Agb2YgdGhlIFlvdVR1YmUgcGxheWVyLlxuICAgICAgICB3bW9kZTogJ29wYXF1ZSdcbiAgICAgIH0sXG4gICAgICBldmVudHM6IHtcbiAgICAgICAgb25SZWFkeTogKCkgPT4gdGhpcy5fb25SZWFkeSh2aWRlb0lkKSxcbiAgICAgICAgb25TdGF0ZUNoYW5nZTogKGRhdGEpID0+IHRoaXMuX29uU3RhdGVDaGFuZ2UoZGF0YSksXG4gICAgICAgIG9uUGxheWJhY2tRdWFsaXR5Q2hhbmdlOiAoZGF0YSkgPT4gdGhpcy5fb25QbGF5YmFja1F1YWxpdHlDaGFuZ2UoZGF0YSksXG4gICAgICAgIG9uUGxheWJhY2tSYXRlQ2hhbmdlOiAoZGF0YSkgPT4gdGhpcy5fb25QbGF5YmFja1JhdGVDaGFuZ2UoZGF0YSksXG4gICAgICAgIG9uRXJyb3I6IChkYXRhKSA9PiB0aGlzLl9vbkVycm9yKGRhdGEpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIGV2ZW50IGZpcmVzIHdoZW4gdGhlIHBsYXllciBoYXMgZmluaXNoZWQgbG9hZGluZyBhbmQgaXMgcmVhZHkgdG8gYmVnaW5cbiAgICogcmVjZWl2aW5nIEFQSSBjYWxscy5cbiAgICovXG4gIF9vblJlYWR5ICh2aWRlb0lkKSB7XG4gICAgaWYgKHRoaXMuZGVzdHJveWVkKSByZXR1cm5cblxuICAgIHRoaXMuX3JlYWR5ID0gdHJ1ZVxuXG4gICAgLy8gT25jZSB0aGUgcGxheWVyIGlzIHJlYWR5LCBhbHdheXMgY2FsbCBgbG9hZCh2aWRlb0lkLCBbYXV0b3BsYXldKWAgdG8gaGFuZGxlXG4gICAgLy8gdGhlc2UgcG9zc2libGUgY2FzZXM6XG4gICAgLy9cbiAgICAvLyAgIDEuIGBsb2FkKHZpZGVvSWQsIHRydWUpYCB3YXMgY2FsbGVkIGJlZm9yZSB0aGUgcGxheWVyIHdhcyByZWFkeS4gRW5zdXJlIHRoYXRcbiAgICAvLyAgICAgIHRoZSBzZWxlY3RlZCB2aWRlbyBzdGFydHMgdG8gcGxheS5cbiAgICAvL1xuICAgIC8vICAgMi4gYGxvYWQodmlkZW9JZCwgZmFsc2UpYCB3YXMgY2FsbGVkIGJlZm9yZSB0aGUgcGxheWVyIHdhcyByZWFkeS4gTm93IHRoZVxuICAgIC8vICAgICAgcGxheWVyIGlzIHJlYWR5IGFuZCB0aGVyZSdzIG5vdGhpbmcgdG8gZG8uXG4gICAgLy9cbiAgICAvLyAgIDMuIGBsb2FkKHZpZGVvSWQsIFthdXRvcGxheV0pYCB3YXMgY2FsbGVkIG11bHRpcGxlIHRpbWVzIGJlZm9yZSB0aGUgcGxheWVyXG4gICAgLy8gICAgICB3YXMgcmVhZHkuIFRoZXJlZm9yZSwgdGhlIHBsYXllciB3YXMgaW5pdGlhbGl6ZWQgd2l0aCB0aGUgd3JvbmcgdmlkZW9JZCxcbiAgICAvLyAgICAgIHNvIGxvYWQgdGhlIGxhdGVzdCB2aWRlb0lkIGFuZCBwb3RlbnRpYWxseSBhdXRvcGxheSBpdC5cbiAgICB0aGlzLmxvYWQodGhpcy52aWRlb0lkLCB0aGlzLl9hdXRvcGxheSlcblxuICAgIHRoaXMuX2ZsdXNoUXVldWUoKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIHRoZSBwbGF5ZXIncyBzdGF0ZSBjaGFuZ2VzLiBXZSBlbWl0IGZyaWVuZGx5IGV2ZW50cyBzbyB0aGUgdXNlclxuICAgKiBkb2Vzbid0IG5lZWQgdG8gdXNlIFlvdVR1YmUncyBZVC5QbGF5ZXJTdGF0ZS4qIGV2ZW50IGNvbnN0YW50cy5cbiAgICovXG4gIF9vblN0YXRlQ2hhbmdlIChkYXRhKSB7XG4gICAgaWYgKHRoaXMuZGVzdHJveWVkKSByZXR1cm5cblxuICAgIGNvbnN0IHN0YXRlID0gWU9VVFVCRV9TVEFURVNbZGF0YS5kYXRhXVxuXG4gICAgaWYgKHN0YXRlKSB7XG4gICAgICAvLyBTZW5kIGEgJ3RpbWV1cGRhdGUnIGFueXRpbWUgdGhlIHN0YXRlIGNoYW5nZXMuIFdoZW4gdGhlIHZpZGVvIGhhbHRzIGZvciBhbnlcbiAgICAgIC8vIHJlYXNvbiAoJ3BhdXNlZCcsICdidWZmZXJpbmcnLCBvciAnZW5kZWQnKSBubyBmdXJ0aGVyICd0aW1ldXBkYXRlJyBldmVudHNcbiAgICAgIC8vIHNob3VsZCBmaXJlIHVudGlsIHRoZSB2aWRlbyB1bmhhbHRzLlxuICAgICAgaWYgKFsncGF1c2VkJywgJ2J1ZmZlcmluZycsICdlbmRlZCddLmluY2x1ZGVzKHN0YXRlKSkgdGhpcy5fb25UaW1ldXBkYXRlKClcblxuICAgICAgdGhpcy5lbWl0KHN0YXRlKVxuXG4gICAgICAvLyBXaGVuIHRoZSB2aWRlbyBjaGFuZ2VzICgndW5zdGFydGVkJyBvciAnY3VlZCcpIG9yIHN0YXJ0cyAoJ3BsYXlpbmcnKSB0aGVuIGFcbiAgICAgIC8vICd0aW1ldXBkYXRlJyBzaG91bGQgZm9sbG93IGFmdGVyd2FyZHMgKG5ldmVyIGJlZm9yZSEpIHRvIHJlc2V0IHRoZSB0aW1lLlxuICAgICAgaWYgKFsndW5zdGFydGVkJywgJ3BsYXlpbmcnLCAnY3VlZCddLmluY2x1ZGVzKHN0YXRlKSkgdGhpcy5fb25UaW1ldXBkYXRlKClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbnJlY29nbml6ZWQgc3RhdGUgY2hhbmdlOiAnICsgZGF0YSlcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBldmVudCBmaXJlcyB3aGVuZXZlciB0aGUgdmlkZW8gcGxheWJhY2sgcXVhbGl0eSBjaGFuZ2VzLiBQb3NzaWJsZVxuICAgKiB2YWx1ZXMgYXJlOiAnc21hbGwnLCAnbWVkaXVtJywgJ2xhcmdlJywgJ2hkNzIwJywgJ2hkMTA4MCcsICdoaWdocmVzJy5cbiAgICovXG4gIF9vblBsYXliYWNrUXVhbGl0eUNoYW5nZSAoZGF0YSkge1xuICAgIGlmICh0aGlzLmRlc3Ryb3llZCkgcmV0dXJuXG4gICAgdGhpcy5lbWl0KCdwbGF5YmFja1F1YWxpdHlDaGFuZ2UnLCBkYXRhLmRhdGEpXG4gIH1cblxuICAvKipcbiAgICogVGhpcyBldmVudCBmaXJlcyB3aGVuZXZlciB0aGUgdmlkZW8gcGxheWJhY2sgcmF0ZSBjaGFuZ2VzLlxuICAgKi9cbiAgX29uUGxheWJhY2tSYXRlQ2hhbmdlIChkYXRhKSB7XG4gICAgaWYgKHRoaXMuZGVzdHJveWVkKSByZXR1cm5cbiAgICB0aGlzLmVtaXQoJ3BsYXliYWNrUmF0ZUNoYW5nZScsIGRhdGEuZGF0YSlcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIGV2ZW50IGZpcmVzIGlmIGFuIGVycm9yIG9jY3VycyBpbiB0aGUgcGxheWVyLlxuICAgKi9cbiAgX29uRXJyb3IgKGRhdGEpIHtcbiAgICBpZiAodGhpcy5kZXN0cm95ZWQpIHJldHVyblxuXG4gICAgY29uc3QgY29kZSA9IGRhdGEuZGF0YVxuXG4gICAgLy8gVGhlIEhUTUw1X0VSUk9SIGVycm9yIG9jY3VycyB3aGVuIHRoZSBZb3VUdWJlIHBsYXllciBuZWVkcyB0byBzd2l0Y2ggZnJvbVxuICAgIC8vIEhUTUw1IHRvIEZsYXNoIHRvIHNob3cgYW4gYWQuIElnbm9yZSBpdC5cbiAgICBpZiAoY29kZSA9PT0gWU9VVFVCRV9FUlJPUi5IVE1MNV9FUlJPUikgcmV0dXJuXG5cbiAgICAvLyBUaGUgcmVtYWluaW5nIGVycm9yIHR5cGVzIG9jY3VyIHdoZW4gdGhlIFlvdVR1YmUgcGxheWVyIGNhbm5vdCBwbGF5IHRoZVxuICAgIC8vIGdpdmVuIHZpZGVvLiBUaGlzIGlzIG5vdCBhIGZhdGFsIGVycm9yLiBSZXBvcnQgaXQgYXMgdW5wbGF5YWJsZSBzbyB0aGUgdXNlclxuICAgIC8vIGhhcyBhbiBvcHBvcnR1bml0eSB0byBwbGF5IGFub3RoZXIgdmlkZW8uXG4gICAgaWYgKGNvZGUgPT09IFlPVVRVQkVfRVJST1IuVU5QTEFZQUJMRV8xIHx8XG4gICAgICAgIGNvZGUgPT09IFlPVVRVQkVfRVJST1IuVU5QTEFZQUJMRV8yIHx8XG4gICAgICAgIGNvZGUgPT09IFlPVVRVQkVfRVJST1IuTk9UX0ZPVU5EIHx8XG4gICAgICAgIGNvZGUgPT09IFlPVVRVQkVfRVJST1IuSU5WQUxJRF9QQVJBTSkge1xuICAgICAgcmV0dXJuIHRoaXMuZW1pdCgndW5wbGF5YWJsZScsIHRoaXMudmlkZW9JZClcbiAgICB9XG5cbiAgICAvLyBVbmV4cGVjdGVkIGVycm9yLCBkb2VzIG5vdCBtYXRjaCBhbnkga25vd24gdHlwZVxuICAgIHRoaXMuX2Rlc3Ryb3kobmV3IEVycm9yKCdZb3VUdWJlIFBsYXllciBFcnJvci4gVW5rbm93biBlcnJvciBjb2RlOiAnICsgY29kZSkpXG4gIH1cblxuICAvKipcbiAgICogVGhpcyBldmVudCBmaXJlcyB3aGVuIHRoZSB0aW1lIGluZGljYXRlZCBieSB0aGUgYGdldEN1cnJlbnRUaW1lKClgIG1ldGhvZFxuICAgKiBoYXMgYmVlbiB1cGRhdGVkLlxuICAgKi9cbiAgX29uVGltZXVwZGF0ZSAoKSB7XG4gICAgdGhpcy5lbWl0KCd0aW1ldXBkYXRlJywgdGhpcy5nZXRDdXJyZW50VGltZSgpKVxuICB9XG5cbiAgX3N0YXJ0SW50ZXJ2YWwgKCkge1xuICAgIHRoaXMuX2ludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4gdGhpcy5fb25UaW1ldXBkYXRlKCksIHRoaXMuX29wdHMudGltZXVwZGF0ZUZyZXF1ZW5jeSlcbiAgfVxuXG4gIF9zdG9wSW50ZXJ2YWwgKCkge1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5faW50ZXJ2YWwpXG4gICAgdGhpcy5faW50ZXJ2YWwgPSBudWxsXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBZb3VUdWJlUGxheWVyXG4iLCJpbXBvcnQgeyBQbGF5ZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvcGxheWVyJztcclxuaW1wb3J0IHsgUXVldWUgfSBmcm9tICcuL2NvbXBvbmVudHMvcXVldWUnO1xyXG5pbXBvcnQgeyBHb29nbGVBdXRoZW50aWNhdGlvbiB9IGZyb20gJy4vc2VydmljZXMvZ29vZ2xlLWF1dGhlbnRpY2F0aW9uJztcclxuaW1wb3J0IHsgU2VhcmNoIH0gZnJvbSAnLi9zZXJ2aWNlcy9zZWFyY2gnO1xyXG5pbXBvcnQgeyBTb25nIH0gZnJvbSAnLi9tb2RlbHMvc29uZyc7XHJcbmltcG9ydCB7IEFwcEV2ZW50IH0gZnJvbSAnLi9zZXJ2aWNlcy9ldmVudCc7XHJcblxyXG5jb25zdCBwbGF5ZXIgPSBQbGF5ZXIuZ2V0SW5zdGFuY2UoJyNwbGF5ZXInKTtcclxuXHJcbi8vUXVldWUucXVldWUoJ0R5RGZnTU9VakNJJyk7XHJcbi8qIFF1ZXVlLnF1ZXVlKCdrSlFQN2tpdzVGaycpO1xyXG5RdWV1ZS5xdWV1ZSgnc1dMUVZBOU5sNXMnKTtcclxuUXVldWUucXVldWUoJ0ViSWxnRDVJblNnJyk7XHJcblF1ZXVlLnF1ZXVlKCd0aXlMdm8yNEEyZycpO1xyXG5RdWV1ZS5xdWV1ZSgnXzF1R05hRTZxdlUnKTsgKi9cclxuXHJcbnBsYXllci5yZWdpc3RlckV2ZW50SGFuZGxlcnMoKTtcclxuXHJcbmNvbnN0IHNpZ25CdG5IYW5kbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lnbmluLWJ0bicpOyBcclxuY29uc3Qgc2VhcmNoRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtZm9ybScpO1xyXG5jb25zdCBzZWFyY2hCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWJhcicpO1xyXG5jb25zdCBzZWFyY2hCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWJ1dHRvbicpO1xyXG5cclxuY29uc3QgY2hlY2tJZkF1dGhlbnRpY2F0ZWQgPSAoKTogdm9pZCA9PiB7XHJcbiAgICBpZiAoR29vZ2xlQXV0aGVudGljYXRpb24uaXNBdXRoZW50aWNhdGVkKCkpIHtcclxuICAgICAgICBzaWduQnRuSGFuZGxlPy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgICAgICBzZWFyY2hGb3JtPy5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhYmxlZCcpO1xyXG4gICAgICAgIHNlYXJjaEJhcj8uc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdTZWFyY2ggc29uZ3MgYW5kIGFydGlzdHMnKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHNpZ25CdG5IYW5kbGU/LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgICAgIHNlYXJjaEZvcm0/LmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkJyk7XHJcbiAgICB9XHJcbn1cclxuY2hlY2tJZkF1dGhlbnRpY2F0ZWQoKTtcclxuc2lnbkJ0bkhhbmRsZT8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBHb29nbGVBdXRoZW50aWNhdGlvbi5hdXRoZW50aWNhdGUoKS50aGVuKCgpID0+IHtcclxuICAgICAgICBjaGVja0lmQXV0aGVudGljYXRlZCgpOyAgIFxyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuY29uc3QgbWFpbkNvbnRhaW5lckJsb2NrOiBzdHJpbmcgPSBgXHJcbjxkaXYgY2xhc3M9XCJjb2wteHMtNiBjb2wtc20tNCBjb2wtbWQtNCBjb2wtbGctM1wiPlxyXG4gICAgPGRpdiBjbGFzcz1cIml0ZW1cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicG9zLXJsdFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbS1vdmVybGF5IGJnLWJsYWNrLW9wYWNpdHlcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZW50ZXIgdGV4dC1jZW50ZXIgdy1mdWxsIG0tdC1uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZiBjbGFzcz1cInBsYXlMaW5rXCIgZGF0YS1hdHRyaWJ1dGU9XCJ7e2lkfX1cIiBkYXRhLWF0dHJpYnV0ZS1hY3Rpb249XCJwbGF5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtMnggZmEtcGxheS1jaXJjbGUgdGV4dC13aGl0ZSBtLXItc21cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWYgY2xhc3M9XCJwbGF5TGlua1wiIGRhdGEtYXR0cmlidXRlPVwie3tpZH19XCIgZGF0YS1hdHRyaWJ1dGUtYWN0aW9uPVwicXVldWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS0yeCBmYS1hcnJvdy1hbHQtY2lyY2xlLWRvd24gdGV4dC13aGl0ZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyLTJ4XCI+XHJcbiAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwiaW1nLWZsdWlkXCIgc3JjPVwie3t0aHVtYm5haWx9fVwiLz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInAtMiB0ZXh0LWNlbnRlciB0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgIHt7dGl0bGV9fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PlxyXG5gO1xyXG5cclxuY29uc3QgbmF2QmxvY2sgPSBgXHJcbjxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBuby1ib3JkZXIgbm8tcGFkZGVyIHBhZGRlci1oLXNtIHF1ZXVlLWxpc3RcIiBkYXRhLWF0dHJpYnV0ZT17e2lkfX0+XHJcbiAgICA8c3BhbiBjbGFzcz1cImZsb2F0LWxlZnQgdGh1bWItc20gbS1yIG0tdC14c1wiPlxyXG4gICAgICAgIDxpbWcgc3JjPVwie3t0aHVtYm5haWx9fVwiIGFsdD1cIi4uLlwiIGNsYXNzPVwiclwiPlxyXG4gICAgPC9zcGFuPlxyXG4gICAgPGRpdiBjbGFzcz1cImNsZWFyXCI+XHJcbiAgICAgICAgPGRpdj48c21hbGw+e3t0aXRsZX19PC9zbWFsbD48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L2xpPlxyXG5gOyBcclxuc2VhcmNoQnRuPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHNlYXJjaFRlcm0gPSAoPEhUTUxJbnB1dEVsZW1lbnQ+c2VhcmNoQmFyKT8udmFsdWU7XHJcbiAgICBpZiAoc2VhcmNoVGVybSkge1xyXG4gICAgICAgIFNlYXJjaC5zZWFyY2goc2VhcmNoVGVybSkudGhlbigocmVzcG9uc2U6IEFycmF5PFNvbmc+KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlYXJjaFJlc3VsdERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtcmVzdWx0cycpO1xyXG4gICAgICAgICAgICBpZiAoc2VhcmNoUmVzdWx0RGl2KSB7XHJcbiAgICAgICAgICAgICAgICBzZWFyY2hSZXN1bHREaXYuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgICAgICAgICBsZXQgc29uZzogU29uZztcclxuICAgICAgICAgICAgICAgIGZvciAoc29uZyBvZiByZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBmaWxsZWRUZW1wbGF0ZSA9IG1haW5Db250YWluZXJCbG9jaztcclxuICAgICAgICAgICAgICAgICAgICBmaWxsZWRUZW1wbGF0ZSA9IGZpbGxlZFRlbXBsYXRlLnJlcGxhY2UoJ3t7dGh1bWJuYWlsfX0nLCBzb25nLmdldFRodW1ibmFpbCgpKTtcclxuICAgICAgICAgICAgICAgICAgICBmaWxsZWRUZW1wbGF0ZSA9IGZpbGxlZFRlbXBsYXRlLnJlcGxhY2UoJ3t7dGl0bGV9fScsIHNvbmcuZ2V0VGl0bGUoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbGVkVGVtcGxhdGUgPSBmaWxsZWRUZW1wbGF0ZS5yZXBsYWNlKC97e2lkfX0vZywgc29uZy5nZXRJZCgpKTtcclxuICAgICAgICAgICAgICAgICAgICBzZWFyY2hSZXN1bHREaXYuaW5uZXJIVE1MID0gc2VhcmNoUmVzdWx0RGl2Py5pbm5lckhUTUwgKyBmaWxsZWRUZW1wbGF0ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3BsYXlMaW5rJykpLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpZCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWF0dHJpYnV0ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzb25nID0gU29uZy5nZXRTb25nRnJvbUxpc3QocmVzcG9uc2UsIGlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNvbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlYXJjaC55b3VUdWJlU2VhcmNoKHNvbmcuZ2V0VGl0bGUoKSArICcgJyArIHNvbmcuZ2V0QXJ0aXN0TmFtZSgpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4odmlkZW9JZCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYWN0aW9uID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXR0cmlidXRlLWFjdGlvbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2aWRlb0lkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvbmcuc2V0VmlkZW9JZCh2aWRlb0lkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFjdGlvbiA9PT0gJ3BsYXknKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIucXVldWVBbmRQbGF5KHNvbmcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUXVldWUucXVldWUoc29uZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coUXVldWUuZ2V0Q3VycmVudFF1ZXVlKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0ludmFsaWQgc29uZyBJRCA6ICcsIGlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTsgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuY29uc3QgdXBkYXRlUXVldWVMaXN0ZW5lciA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdRdWV1ZSB1cGRhdGVkJyk7XHJcbiAgICBjb25zdCBjdXJyZW50UXVldWU6IEFycmF5PFNvbmc+ID0gUXVldWUuZ2V0Q3VycmVudFF1ZXVlKCk7XHJcbiAgICBjb25zdCBwbGF5bGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5bGlzdCcpO1xyXG4gICAgaWYgKHBsYXlsaXN0KSB7XHJcbiAgICAgICAgbGV0IHNvbmc6IFNvbmc7XHJcbiAgICAgICAgcGxheWxpc3QuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgZm9yIChzb25nIG9mIGN1cnJlbnRRdWV1ZSkge1xyXG4gICAgICAgICAgICBsZXQgZmlsbGVkVGVtcGxhdGUgPSBuYXZCbG9jaztcclxuICAgICAgICAgICAgZmlsbGVkVGVtcGxhdGUgPSBmaWxsZWRUZW1wbGF0ZS5yZXBsYWNlKCd7e3RodW1ibmFpbH19Jywgc29uZy5nZXRUaHVtYm5haWwoKSk7XHJcbiAgICAgICAgICAgIGZpbGxlZFRlbXBsYXRlID0gZmlsbGVkVGVtcGxhdGUucmVwbGFjZSgne3t0aXRsZX19Jywgc29uZy5nZXRUaXRsZSgpKTtcclxuICAgICAgICAgICAgZmlsbGVkVGVtcGxhdGUgPSBmaWxsZWRUZW1wbGF0ZS5yZXBsYWNlKC97e2lkfX0vZywgc29uZy5nZXRWaWRlb0lkKCkhKTtcclxuICAgICAgICAgICAgcGxheWxpc3QuaW5uZXJIVE1MID0gcGxheWxpc3Q/LmlubmVySFRNTCArIGZpbGxlZFRlbXBsYXRlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdxdWV1ZS1saXN0JykpLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHsgXHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaWQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1hdHRyaWJ1dGUnKTtcclxuICAgICAgICAgICAgICAgIGlmIChpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBsYXllci5wbGF5VHJhY2soaWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5BcHBFdmVudC5saXN0ZW4oJ3F1ZXVlLXVwZGF0ZWQnLCB1cGRhdGVRdWV1ZUxpc3RlbmVyKTtcclxuUXVldWUuaW5pdGFsaXplKCk7IiwiaW1wb3J0IFlvdVR1YmVQbGF5ZXIgZnJvbSAneXQtcGxheWVyJztcclxuXHJcbmltcG9ydCB7IFF1ZXVlIH0gZnJvbSAnLi9xdWV1ZSc7XHJcbmltcG9ydCB7IFNvbmcgfSBmcm9tICcuLi9tb2RlbHMvc29uZyc7XHJcbmltcG9ydCB7IFByb2dyZXNzQmFyIH0gZnJvbSAnLi9wcm9nZXNzLWJhcic7XHJcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSAnLi4vc2VydmljZXMvdXRpbHMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBsYXllciBleHRlbmRzIFlvdVR1YmVQbGF5ZXIge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcGxheWVyOiBQbGF5ZXI7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBfaXNQbGF5aW5nOiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2N1cnJlbnRUcmFja0lkOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIHByb2dyZXNzOiBQcm9ncmVzc0JhciB8IG51bGwgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoZG9tRWxJRDogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIoZG9tRWxJRCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldEluc3RhbmNlKGRvbUVsSUQ6IHN0cmluZyk6IFBsYXllciB7XHJcbiAgICAgICAgaWYgKCFQbGF5ZXIucGxheWVyKSB7XHJcbiAgICAgICAgICAgIFBsYXllci5wbGF5ZXIgPSBuZXcgUGxheWVyKGRvbUVsSUQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gUGxheWVyLnBsYXllcjtcclxuICAgIH07XHJcblxyXG4gICAgcHJpdmF0ZSBsb2FkVHJhY2sodHJhY2tJZDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgUGxheWVyLl9jdXJyZW50VHJhY2tJZCA9IHRyYWNrSWQ7XHJcbiAgICAgICAgUGxheWVyLnBsYXllci5sb2FkKHRyYWNrSWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHBsYXlUcmFjayh0cmFja0lkPzogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRyYWNrSWQpIHtcclxuICAgICAgICAgICAgdGhpcy5zdG9wVHJhY2soKTtcclxuICAgICAgICAgICAgdGhpcy5sb2FkVHJhY2sodHJhY2tJZCk7XHJcbiAgICAgICAgICAgIFF1ZXVlLnVwZGF0ZUN1cnJlbnRQbGF5aW5nVHJhY2sodHJhY2tJZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghUGxheWVyLl9jdXJyZW50VHJhY2tJZCkge1xyXG4gICAgICAgICAgICBsZXQgdHJhY2sgPSBRdWV1ZS5uZXh0KCk7XHJcbiAgICAgICAgICAgIGlmICh0cmFjaykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkVHJhY2sodHJhY2suZ2V0VmlkZW9JZCgpISk7XHJcbiAgICAgICAgICAgICAgICBQbGF5ZXIuX2lzUGxheWluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZVBsYXkoKTtcclxuICAgICAgICAgICAgICAgIFBsYXllci5wbGF5ZXIucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVFbGFwc2VkVGltZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ05vIHRyYWNrcyB0byBwbGF5Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIFBsYXllci5faXNQbGF5aW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy50b2dnbGVQbGF5KCk7XHJcbiAgICAgICAgICAgIFBsYXllci5wbGF5ZXIucGxheSgpO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUVsYXBzZWRUaW1lKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHF1ZXVlQW5kUGxheShzb25nOiBTb25nKTogdm9pZCB7XHJcbiAgICAgICAgUXVldWUucXVldWUoc29uZyk7XHJcbiAgICAgICAgaWYgKFBsYXllci5faXNQbGF5aW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGF1c2VUcmFjaygpO1xyXG4gICAgICAgICAgICB0aGlzLnJlc2V0RWxhcHNlZFRpbWUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5sb2FkVHJhY2soc29uZy5nZXRWaWRlb0lkKCkhKTtcclxuICAgICAgICBRdWV1ZS51cGRhdGVDdXJyZW50UGxheWluZ1RyYWNrKHNvbmcuZ2V0SWQoKSk7XHJcbiAgICAgICAgUGxheWVyLl9pc1BsYXlpbmcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudG9nZ2xlUGxheSgpO1xyXG4gICAgICAgIFBsYXllci5wbGF5ZXIucGxheSgpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlRWxhcHNlZFRpbWUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwYXVzZVRyYWNrKCk6IHZvaWQge1xyXG4gICAgICAgIFBsYXllci5faXNQbGF5aW5nID0gZmFsc2U7XHJcbiAgICAgICAgUGxheWVyLnBsYXllci5wYXVzZSgpO1xyXG4gICAgICAgIHRoaXMudG9nZ2xlUGxheSgpO1xyXG4gICAgICAgIHRoaXMuc3RvcFRpbWVyKCk7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvZ3Jlc3MpIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9ncmVzcy5zdG9wKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5leHRUcmFjaygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnBhdXNlVHJhY2soKTtcclxuICAgICAgICBsZXQgbmV4dFRyYWNrID0gUXVldWUubmV4dCgpO1xyXG4gICAgICAgIHRoaXMucHJvZ3Jlc3M/LnJlc2V0KCk7XHJcbiAgICAgICAgdGhpcy5yZXNldEVsYXBzZWRUaW1lKCk7XHJcbiAgICAgICAgaWYgKG5leHRUcmFjaykge1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRUcmFjayhuZXh0VHJhY2suZ2V0VmlkZW9JZCgpISk7XHJcbiAgICAgICAgICAgIFBsYXllci5faXNQbGF5aW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy50b2dnbGVQbGF5KCk7XHJcbiAgICAgICAgICAgIFBsYXllci5wbGF5ZXIucGxheSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcmV2aW91c1RyYWNrKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucGF1c2VUcmFjaygpO1xyXG4gICAgICAgIGxldCBwcmV2aW91c1RyYWNrID0gUXVldWUucHJldmlvdXMoKTtcclxuICAgICAgICB0aGlzLnByb2dyZXNzPy5yZXNldCgpO1xyXG4gICAgICAgIGlmIChwcmV2aW91c1RyYWNrKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZFRyYWNrKHByZXZpb3VzVHJhY2suZ2V0VmlkZW9JZCgpISk7XHJcbiAgICAgICAgICAgIFBsYXllci5faXNQbGF5aW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy50b2dnbGVQbGF5KCk7XHJcbiAgICAgICAgICAgIFBsYXllci5wbGF5ZXIucGxheSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdG9wVHJhY2soKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5wYXVzZVRyYWNrKCk7XHJcbiAgICAgICAgdGhpcy5wcm9ncmVzcz8ucmVzZXQoKTtcclxuICAgICAgICBQbGF5ZXIucGxheWVyLnN0b3AoKTtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVQbGF5KCk6IHZvaWQge1xyXG4gICAgICAgIGlmIChQbGF5ZXIuX2lzUGxheWluZykge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGF1c2UtYnV0dG9uJyk/LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheS1idXR0b24nKT8uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGF1c2UtYnV0dG9uJyk/LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheS1idXR0b24nKT8uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzdGF0aWMgc2Vla1RvKHRpbWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIFBsYXllci5wbGF5ZXIuc2Vlayh0aW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVwZGF0ZVRpdGxlKCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBjdXJyZW50UXVldWUgPSBRdWV1ZS5nZXRDdXJyZW50UXVldWUoKTtcclxuICAgICAgICBjb25zdCBzb25nID0gU29uZy5nZXRTb25nRnJvbUxpc3QoY3VycmVudFF1ZXVlLCBQbGF5ZXIuX2N1cnJlbnRUcmFja0lkKTtcclxuICAgICAgICBjb25zdCB0aXRsZURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpO1xyXG4gICAgICAgIGlmICh0aXRsZURpdiAmJiBzb25nKSB7XHJcbiAgICAgICAgICAgIHRpdGxlRGl2LmlubmVySFRNTCA9IHNvbmcuZ2V0VGl0bGUoKTsgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlU29uZ1RvdGFsVGltZSh0aW1lOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCB0b3RhbFRpbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b3RhbC10aW1lJyk7XHJcbiAgICAgICAgaWYgKHRvdGFsVGltZUVsKSB7XHJcbiAgICAgICAgICAgIHRvdGFsVGltZUVsLmlubmVySFRNTCA9IFV0aWxzLmZvcm1hdFRpbWUodGltZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF90aW1lcjogYW55O1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgY3VycmVudFRpbWUgPSAwO1xyXG4gICAgcHJpdmF0ZSB1cGRhdGVFbGFwc2VkVGltZSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAoUGxheWVyLmN1cnJlbnRUaW1lIDwgUGxheWVyLnBsYXllci5nZXREdXJhdGlvbigpKSB7XHJcbiAgICAgICAgICAgIFBsYXllci5fdGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZSgrK1BsYXllci5jdXJyZW50VGltZSk7XHJcbiAgICAgICAgICAgIH0sIDEwMDApOyAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1cGRhdGUoY3VycmVudFRpbWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGVsbGFwc2VkVGltZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VsbGFwc2VkLXRpbWUnKTtcclxuICAgICAgICBpZiAoZWxsYXBzZWRUaW1lRWwpIHtcclxuICAgICAgICAgICAgZWxsYXBzZWRUaW1lRWwuaW5uZXJIVE1MID0gVXRpbHMuZm9ybWF0VGltZShjdXJyZW50VGltZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RvcFRpbWVyKCk6IHZvaWQge1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwoUGxheWVyLl90aW1lcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZXNldEVsYXBzZWRUaW1lKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc3RvcFRpbWVyKCk7XHJcbiAgICAgICAgUGxheWVyLmN1cnJlbnRUaW1lID0gMDtcclxuICAgICAgICB0aGlzLnVwZGF0ZSgwKTtcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3RlckV2ZW50SGFuZGxlcnMoKTogdm9pZCB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXktYnV0dG9uJyk/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUGxheWluZycpO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXlUcmFjaygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXVzZS1idXR0b24nKT8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdQYXVzZWQnKTtcclxuICAgICAgICAgICAgdGhpcy5wYXVzZVRyYWNrKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25leHQtYnV0dG9uJyk/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnTmV4dCB0cmFjaycpO1xyXG4gICAgICAgICAgICB0aGlzLm5leHRUcmFjaygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmV2aW91cy1idXR0b24nKT8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdQcmV2aW91cyB0cmFjaycpO1xyXG4gICAgICAgICAgICB0aGlzLnByZXZpb3VzVHJhY2soKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgUGxheWVyLnBsYXllci5vbigncGxheWluZycsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVUaXRsZSgpO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMucHJvZ3Jlc3MpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3MgPSBQcm9ncmVzc0Jhci5nZXRJbnN0YW5jZSgncHJvZ3Jlc3MtYmFyJyk7ICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3Muc2V0VGltZShQbGF5ZXIucGxheWVyLmdldER1cmF0aW9uKCkpO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNvbmdUb3RhbFRpbWUoUGxheWVyLnBsYXllci5nZXREdXJhdGlvbigpKTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVFbGFwc2VkVGltZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzLnN0YXJ0KCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIFBsYXllci5wbGF5ZXIub24oJ2VuZGVkJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnJlc2V0RWxhcHNlZFRpbWUoKTtcclxuICAgICAgICAgICAgdGhpcy5uZXh0VHJhY2soKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFBsYXllciB9IGZyb20gJy4vcGxheWVyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBQcm9ncmVzc0JhciB7XHJcbiAgICBwcml2YXRlIHRvdGFsVGltZTogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgY3VycmVudFBvc2l0aW9uOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSB0aWNrOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgdGltZXI6IGFueTtcclxuICAgIHByaXZhdGUgZWxlbWVudDogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBwcm9ncmVzc0JhckVsOiBIVE1MRWxlbWVudCB8IG51bGw7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IFByb2dyZXNzQmFyO1xyXG5cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoZWxlbWVudDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxuICAgICAgICB0aGlzLnByb2dyZXNzQmFyRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmVsZW1lbnQpO1xyXG4gICAgICAgIHRoaXMuX2FkZENsaWNrTGlzdGVuZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2UoZWxlbWVudDogc3RyaW5nKTogUHJvZ3Jlc3NCYXIge1xyXG4gICAgICAgIGlmICghUHJvZ3Jlc3NCYXIuX2luc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIFByb2dyZXNzQmFyLl9pbnN0YW5jZSA9IG5ldyBQcm9ncmVzc0JhcihlbGVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFByb2dyZXNzQmFyLl9pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRUaW1lKHRvdGFsVGltZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy50b3RhbFRpbWUgPSB0b3RhbFRpbWU7XHJcbiAgICAgICAgdGhpcy50aWNrID0gdGhpcy50b3RhbFRpbWUgLyAxMDA7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHVwZGF0ZSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50UG9zaXRpb24gPCAxMDApIHsgXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnByb2dyZXNzQmFyRWwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBvc2l0aW9uID0gdGhpcy5jdXJyZW50UG9zaXRpb24gKyAwLjE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb2dyZXNzQmFyRWwuc3R5bGUud2lkdGggPSB0aGlzLmN1cnJlbnRQb3NpdGlvbiArICclJzsgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgUHJvZ3Jlc3NCYXIudGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7IFxyXG4gICAgICAgIH0sICh0aGlzLnRpY2sgKiAxMDApKTtcclxuICAgIH1cclxuXHJcbiAgICBzdG9wKCk6IHZvaWQge1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwoUHJvZ3Jlc3NCYXIudGltZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFBvc2l0aW9uID0gMDtcclxuICAgICAgICB0aGlzLnRpY2sgPSAwO1xyXG4gICAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfYWRkQ2xpY2tMaXN0ZW5lcigpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5wcm9ncmVzc0JhckVsICYmIHRoaXMucHJvZ3Jlc3NCYXJFbC5wYXJlbnRFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NCYXJFbC5wYXJlbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9ncmVzc0JhckVsICYmIHRoaXMucHJvZ3Jlc3NCYXJFbC5wYXJlbnRFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VlayA9ICh0aGlzLnRvdGFsVGltZSAvIHRoaXMucHJvZ3Jlc3NCYXJFbC5wYXJlbnRFbGVtZW50LmNsaWVudFdpZHRoKSAqIChldmVudC5wYWdlWCAtIDIwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcG9zID0gKHNlZWsgLyB0aGlzLnRvdGFsVGltZSkgKiAxMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UG9zaXRpb24gPSBwYXJzZUZsb2F0KChNYXRoLnJvdW5kKHBvcyAqIDEwKSAvIDEwKS50b0ZpeGVkKDEpKTtcclxuICAgICAgICAgICAgICAgICAgICBQbGF5ZXIuc2Vla1RvKHNlZWspO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBTb25nIH0gZnJvbSBcIi4uL21vZGVscy9zb25nXCI7XHJcbmltcG9ydCB7IEFwcEV2ZW50IH0gZnJvbSAnLi4vc2VydmljZXMvZXZlbnQnO1xyXG5pbXBvcnQgeyBTdG9yYWdlIH0gZnJvbSAnLi4vc2VydmljZXMvc3RvcmFnZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgUXVldWUge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX3F1ZXVlOiBBcnJheTxTb25nPjtcclxuICAgIHByaXZhdGUgc3RhdGljIF9jdXJyZW50VHJhY2sgPSAtMTtcclxuXHJcbiAgICBzdGF0aWMgaW5pdGFsaXplKCkge1xyXG4gICAgICAgIFF1ZXVlLl9xdWV1ZSA9IFF1ZXVlLl9mZXRjaFByZXZpb3VzUXVldWUoKTtcclxuICAgICAgICBBcHBFdmVudC5lbWl0KCdxdWV1ZS11cGRhdGVkJyk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHN0YXRpYyBfZmV0Y2hQcmV2aW91c1F1ZXVlKCk6IGFueSB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBTdG9yYWdlLmdldCgnQ1VSUkVOVF9RVUVVRScpO1xyXG4gICAgICAgIGNvbnN0IF90ZW1wUXVldWUgPSBuZXcgQXJyYXk8U29uZz4oKTtcclxuICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBfdGVtcFF1ZXVlLnB1c2gobmV3IFNvbmcoaXRlbS5pZCwgaXRlbS50aXRsZSwgaXRlbS5kZXNjcmlwdGlvbiwgaXRlbS5hcnRpc3ROYW1lLCBpdGVtLnRodW1ibmFpbCwgaXRlbS52aWRlb0lkKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gX3RlbXBRdWV1ZTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBxdWV1ZShzb25nOiBTb25nKTogdm9pZCB7XHJcbiAgICAgICAgUXVldWUuX3F1ZXVlLnB1c2goc29uZyk7XHJcbiAgICAgICAgU3RvcmFnZS5zYXZlKCdDVVJSRU5UX1FVRVVFJywgUXVldWUuX3F1ZXVlKTtcclxuICAgICAgICBBcHBFdmVudC5lbWl0KCdxdWV1ZS11cGRhdGVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGRlcXVldWUoKTogU29uZyB8IHVuZGVmaW5lZCB7XHJcbiAgICAgICAgY29uc3Qgc29uZyA9IFF1ZXVlLl9xdWV1ZS5zaGlmdCgpO1xyXG4gICAgICAgIEFwcEV2ZW50LmVtaXQoJ3F1ZXVlLXVwZGF0ZWQnKTtcclxuICAgICAgICBTdG9yYWdlLnNhdmUoJ0NVUlJFTlRfUVVFVUUnLCBRdWV1ZS5fcXVldWUpO1xyXG4gICAgICAgIHJldHVybiBzb25nO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBuZXh0KCk6IFNvbmcgfCB1bmRlZmluZWQge1xyXG4gICAgICAgIGlmIChRdWV1ZS5fcXVldWVbUXVldWUuX2N1cnJlbnRUcmFjayArIDFdKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBRdWV1ZS5fcXVldWVbKytRdWV1ZS5fY3VycmVudFRyYWNrXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcHJldmlvdXMoKTogU29uZyB8IHVuZGVmaW5lZCB7XHJcbiAgICAgICAgaWYgKFF1ZXVlLl9xdWV1ZVtRdWV1ZS5fY3VycmVudFRyYWNrIC0gMV0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIFF1ZXVlLl9xdWV1ZVstLVF1ZXVlLl9jdXJyZW50VHJhY2tdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRDdXJyZW50UXVldWUoKTogQXJyYXk8U29uZz4ge1xyXG4gICAgICAgIHJldHVybiBRdWV1ZS5fcXVldWU7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHVwZGF0ZUN1cnJlbnRQbGF5aW5nVHJhY2sodHJhY2tJZDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgUXVldWUuX2N1cnJlbnRUcmFjayA9IFF1ZXVlLl9xdWV1ZS5maW5kSW5kZXgoc29uZyA9PiBzb25nLmdldElkKCkgPT09IHRyYWNrSWQpO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIFNvbmcge1xyXG4gICAgcHJpdmF0ZSBpZDogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSB0aXRsZTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBhcnRpc3ROYW1lOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIHRodW1ibmFpbDogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSB2aWRlb0lkOiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaWQ6IHN0cmluZywgdGl0bGU6IHN0cmluZywgZGVzY3JpcHRpb246IHN0cmluZywgYXJ0aXN0TmFtZTogc3RyaW5nLCB0aHVtYm5haWw6IHN0cmluZywgdmlkZW9JZD86IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgICAgdGhpcy5hcnRpc3ROYW1lID0gYXJ0aXN0TmFtZTtcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICAgICAgdGhpcy50aHVtYm5haWwgPSB0aHVtYm5haWw7XHJcbiAgICAgICAgdGhpcy52aWRlb0lkID0gdmlkZW9JZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0SWQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0VGl0bGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50aXRsZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0RGVzY3JpcHRpb24oKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0QXJ0aXN0TmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFydGlzdE5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFRodW1ibmFpbCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRodW1ibmFpbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0VmlkZW9JZCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZpZGVvSWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFZpZGVvSWQodmlkZW9JZDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy52aWRlb0lkID0gdmlkZW9JZDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0U29uZ0Zyb21MaXN0KGxpc3Q6IEFycmF5PFNvbmc+LCBpZDogc3RyaW5nIHwgbnVsbCk6IFNvbmcgfCBudWxsIHtcclxuICAgICAgICBsZXQgZmlsdGVyZWRMaXN0ID0gbGlzdC5maWx0ZXIoc29uZyA9PiBzb25nLmdldElkKCkgPT0gaWQpO1xyXG4gICAgICAgIGlmIChmaWx0ZXJlZExpc3QubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIGZpbHRlcmVkTGlzdCA9IGxpc3QuZmlsdGVyKHNvbmcgPT4gc29uZy5nZXRWaWRlb0lkKCkgPT0gaWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmlsdGVyZWRMaXN0Lmxlbmd0aCA+IDAgPyBmaWx0ZXJlZExpc3RbMF06IG51bGw7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgQXBwRXZlbnQge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgbGlzdGVuZXJzOiB7W25hbWU6IHN0cmluZ106IEFycmF5PEZ1bmN0aW9uPn0gPSB7fTtcclxuXHJcbiAgICBzdGF0aWMgbGlzdGVuKGV2ZW50OiBzdHJpbmcsIGZ1bmM6IEZ1bmN0aW9uKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKEFwcEV2ZW50Lmxpc3RlbmVyc1tldmVudF0pIHtcclxuICAgICAgICAgICAgQXBwRXZlbnQubGlzdGVuZXJzW2V2ZW50XS5wdXNoKGZ1bmMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGFyciA9IFtdO1xyXG4gICAgICAgICAgICBhcnIucHVzaChmdW5jKTtcclxuICAgICAgICAgICAgQXBwRXZlbnQubGlzdGVuZXJzW2V2ZW50XSA9IGFycjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGVtaXQoZXZlbnQ6IHN0cmluZywgZGF0YT86IE9iamVjdCk6IHZvaWQge1xyXG4gICAgICAgIGlmIChBcHBFdmVudC5saXN0ZW5lcnNbZXZlbnRdKSB7XHJcbiAgICAgICAgICAgIEFwcEV2ZW50Lmxpc3RlbmVyc1tldmVudF0uZm9yRWFjaCgoZnVuYzogRnVuY3Rpb24pID0+IGZ1bmMoZGF0YSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBHb29nbGVBdXRoZW50aWNhdGlvbiB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBfaXNBdXRoZW50aWNhdGVkOiBib29sZWFuID0gd2luZG93LnNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2dvb2dsZS1hdXRoZW50aWNhdGVkJykgPT09ICd0cnVlJz8gdHJ1ZTogZmFsc2U7XHJcblxyXG4gICAgc3RhdGljIGlzQXV0aGVudGljYXRlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gR29vZ2xlQXV0aGVudGljYXRpb24uX2lzQXV0aGVudGljYXRlZDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgYXV0aGVudGljYXRlKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgZ2FwaS5sb2FkKCdhdXRoMicsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICAgICAgICAgIGdhcGkuYXV0aDIuaW5pdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xpZW50X2lkOiAnNDk0NjE1NDAwMjYyLWY3bTR1c2N0N3B0aDY0bHJtdWM3NnZzY2NwNzZmdTNjLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICAgICAgICAgIHJldHVybiBnYXBpLmF1dGgyLmdldEF1dGhJbnN0YW5jZSgpLnNpZ25Jbih7XHJcbiAgICAgICAgICAgICAgICAgICAgc2NvcGU6ICdodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL3lvdXR1YmUuZm9yY2Utc3NsJ1xyXG4gICAgICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgR29vZ2xlQXV0aGVudGljYXRpb24uX2lzQXV0aGVudGljYXRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2dvb2dsZS1hdXRoZW50aWNhdGVkJywgJ3RydWUnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQXV0aGVudGljYXRlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKEdvb2dsZUF1dGhlbnRpY2F0aW9uLmxvYWRDbGllbnQoKSk7XHJcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdCh0cnVlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbG9hZENsaWVudCgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBnYXBpLmxvYWQoJ2NsaWVudCcsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGdhcGkuY2xpZW50LnNldEFwaUtleSgnQUl6YVN5RER2akJlZHJoTGYwcnQ2MmNraHMyZndXeHRFTGNZZVU4Jyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShnYXBpLmNsaWVudC5sb2FkKFwiaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vZGlzY292ZXJ5L3YxL2FwaXMveW91dHViZS92My9yZXN0XCIsIFwidjNcIikpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEdvb2dsZUF1dGhlbnRpY2F0aW9uIH0gZnJvbSAnLi9nb29nbGUtYXV0aGVudGljYXRpb24nO1xyXG5pbXBvcnQgeyBTb25nIH0gZnJvbSAnLi4vbW9kZWxzL3NvbmcnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNlYXJjaCB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBNQVhfUkVTVUxUUyA9IDE7XHJcblxyXG4gICAgc3RhdGljIHlvdVR1YmVTZWFyY2gocTogc3RyaW5nLCBwYXJ0Pzogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBnYXBpLmxvYWQoJ2NsaWVudCcsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICAgICAgaWYgKCFnYXBpLmNsaWVudC55b3V0dWJlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgR29vZ2xlQXV0aGVudGljYXRpb24ubG9hZENsaWVudCgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gU2VhcmNoLl9zZWFyY2gocSwgcGFydClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZTogQXJyYXk8U29uZz4pID0+IHJlc29sdmUoU2VhcmNoLl9wcm9jZXNzWW91dHViZVJlc3BvbnNlKHJlc3BvbnNlKSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTZWFyY2guX3NlYXJjaChxLCBwYXJ0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2U6IEFycmF5PFNvbmc+KSA9PiByZXNvbHZlKFNlYXJjaC5fcHJvY2Vzc1lvdXR1YmVSZXNwb25zZShyZXNwb25zZSkpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzZWFyY2gocTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gZmV0Y2goJ2h0dHA6Ly9wbGF5YmFjay5pbzozMDAwL3NlYXJjaC8nICsgZW5jb2RlVVJJQ29tcG9uZW50KHEpKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlSnNvbiA9PiBTZWFyY2guX3Byb2Nlc3NSZXNwb25zZShyZXNwb25zZUpzb24pKVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfc2VhcmNoKHE6IHN0cmluZywgcGFydD86IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgIHJldHVybiBnYXBpLmNsaWVudC55b3V0dWJlLnNlYXJjaC5saXN0KHtcclxuICAgICAgICAgICAgcGFydDogcGFydCA/IHBhcnQgOiAnc25pcHBldCcsXHJcbiAgICAgICAgICAgIHE6IHEsXHJcbiAgICAgICAgICAgIHR5cGU6ICd2aWRlbycsXHJcbiAgICAgICAgICAgIG1heFJlc3VsdHM6IFNlYXJjaC5NQVhfUkVTVUxUU1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX3Byb2Nlc3NZb3V0dWJlUmVzcG9uc2UocmVzcG9uc2U6IGFueSk6IFN0cmluZyB7XHJcbiAgICAgICAgbGV0IHNvbmdJZCA9ICcnO1xyXG4gICAgICAgIGlmIChyZXNwb25zZSAmJiByZXNwb25zZS5yZXN1bHQgJiYgcmVzcG9uc2UucmVzdWx0Lml0ZW1zKSB7XHJcbiAgICAgICAgICAgIHNvbmdJZCA9IHJlc3BvbnNlLnJlc3VsdC5pdGVtc1swXS5pZC52aWRlb0lkO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc29uZ0lkO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfcHJvY2Vzc1Jlc3BvbnNlKHJlc3BvbnNlOiBhbnkpOiBPYmplY3Qge1xyXG4gICAgICAgIGxldCBwcm9jZXNzZWRSZXNwb25zZSA9IG5ldyBBcnJheTxTb25nPigpO1xyXG5cclxuICAgICAgICBpZiAoIXJlc3BvbnNlIHx8ICFyZXNwb25zZS5yZXN1bHRzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7fTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaXRlbSBvZiByZXNwb25zZS5yZXN1bHRzKSB7XHJcbiAgICAgICAgICAgIGxldCB0aHVtYm5haWwgPSBpdGVtLmFydHdvcmtVcmwxMDAgPyBpdGVtLmFydHdvcmtVcmwxMDAgOlxyXG4gICAgICAgICAgICAgICAgKGl0ZW0uYXJ0d29ya1VybDYwID8gaXRlbS5hcnR3b3JrVXJsNjAgOiAoaXRlbS5hcnR3b3JrVXJsMzAgPyBpdGVtLmFydHdvcmtVcmwzMCA6ICcnKSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCByZXNPYmogPSBuZXcgU29uZyhpdGVtLnRyYWNrSWQsIGl0ZW0udHJhY2tOYW1lLCBpdGVtLmNvbGxlY3Rpb25OYW1lLCBpdGVtLmFydGlzdE5hbWUsXHJcbiAgICAgICAgICAgICAgICB0aHVtYm5haWwpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcHJvY2Vzc2VkUmVzcG9uc2UucHVzaChyZXNPYmopO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvKiBpZiAoIXJlc3BvbnNlIHx8IHJlc3BvbnNlLnN0YXR1cyAhPT0gMjAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7fTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLnJlc3VsdC5pdGVtcyAmJiByZXNwb25zZS5yZXN1bHQuaXRlbXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpdGVtIG9mIHJlc3BvbnNlLnJlc3VsdC5pdGVtcykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRydWUgfHwgaXRlbS5zbmlwcGV0LmNoYW5uZWxUaXRsZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ3Zldm8nKSA+IC0xIHx8IGl0ZW0uc25pcHBldC5jaGFubmVsVGl0bGUudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdvZmZpY2lhbCcpID4gLTFcclxuICAgICAgICAgICAgICAgICAgICB8fCBpdGVtLnNuaXBwZXQudGl0bGUudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdvZmZpY2lhbCcpID4gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdGh1bWJuYWlsID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uc25pcHBldC50aHVtYm5haWxzLmhpZ2gpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGh1bWJuYWlsID0gaXRlbS5zbmlwcGV0LnRodW1ibmFpbHMuaGlnaC51cmw7IFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChpdGVtLnNuaXBwZXQudGh1bWJuYWlscy5tZWRpdW0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGh1bWJuYWlsID0gaXRlbS5zbmlwcGV0LnRodW1ibmFpbHMubWVkaXVtLnVybDsgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHVtYm5haWwgPSBpdGVtLnNuaXBwZXQudGh1bWJuYWlscy5kZWZhdWx0LnVybDsgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXNPYmogPSBuZXcgU29uZyhpdGVtLmlkLnZpZGVvSWQsIGl0ZW0uc25pcHBldC50aXRsZSwgaXRlbS5zbmlwcGV0LmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHVtYm5haWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2Nlc3NlZFJlc3BvbnNlLnB1c2gocmVzT2JqKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBcclxuICAgICAgICB9Ki9cclxuICAgICAgICByZXR1cm4gcHJvY2Vzc2VkUmVzcG9uc2U7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY29uc3QgZW51bSBTVE9SQUdFIHtcclxuICAgIExPQ0FMX1NUT1JBR0UsXHJcbiAgICBTRVNTSU9OX1NUT1JBR0VcclxufVxyXG5leHBvcnQgY2xhc3MgU3RvcmFnZSB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBERUZBVUxUX1NUT1JBR0U6IFNUT1JBR0UgPSBTVE9SQUdFLkxPQ0FMX1NUT1JBR0U7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBzdG9yYWdlSGFuZGxlciA9IHdpbmRvdy5sb2NhbFN0b3JhZ2U7XHJcblxyXG4gICAgc3RhdGljIHNhdmUoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnksIHN0b3JhZ2U/OiBTVE9SQUdFKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHN0b3JhZ2UgJiYgc3RvcmFnZSAhPT0gU3RvcmFnZS5ERUZBVUxUX1NUT1JBR0UpIHtcclxuICAgICAgICAgICAgd2luZG93LnNlc3Npb25TdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgU3RvcmFnZS5zdG9yYWdlSGFuZGxlci5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldChrZXk6IHN0cmluZywgc3RvcmFnZT86IFNUT1JBR0UpOiBhbnkge1xyXG4gICAgICAgIGlmIChzdG9yYWdlICYmIHN0b3JhZ2UgIT09IFN0b3JhZ2UuREVGQVVMVF9TVE9SQUdFKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gd2luZG93LnNlc3Npb25TdG9yYWdlLmdldEl0ZW0oa2V5KTtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlID8gSlNPTi5wYXJzZSh2YWx1ZSk6IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB2YWx1ZSA9IFN0b3JhZ2Uuc3RvcmFnZUhhbmRsZXIuZ2V0SXRlbShrZXkpO1xyXG4gICAgICAgIHJldHVybiB2YWx1ZSA/IEpTT04ucGFyc2UodmFsdWUpIDogdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGRlbGV0ZShrZXk6IHN0cmluZywgc3RvcmFnZT86IFNUT1JBR0UpOiB2b2lkIHtcclxuICAgICAgICBpZiAoc3RvcmFnZSAmJiBzdG9yYWdlICE9PSBTdG9yYWdlLkRFRkFVTFRfU1RPUkFHRSkge1xyXG4gICAgICAgICAgICB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBTdG9yYWdlLnN0b3JhZ2VIYW5kbGVyLnJlbW92ZUl0ZW0oa2V5KTtcclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBVdGlscyB7XHJcbiAgICBzdGF0aWMgZm9ybWF0VGltZSh0aW1lOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgICAgIHRpbWUgPSBNYXRoLmZsb29yKHRpbWUpO1xyXG4gICAgICAgIGNvbnN0IG1pbiA9IE1hdGguZmxvb3IodGltZSAvIDYwKTtcclxuICAgICAgICBjb25zdCBzZWMgPSB0aW1lIC0gKG1pbiAqIDYwKTtcclxuICAgICAgICBjb25zdCBtaW5TdHIgPSBtaW4gPCAxMCA/ICcwJyArIG1pbiA6ICcnICsgbWluO1xyXG4gICAgICAgIGNvbnN0IHNlY1N0ciA9IHNlYyA8IDEwID8gJzAnICsgc2VjIDogJycgKyBzZWM7XHJcbiAgICAgICAgcmV0dXJuIG1pblN0ciArICc6JyArIHNlY1N0cjtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=