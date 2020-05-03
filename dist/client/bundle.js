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
const template = `
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
                    let filledTemplate = template;
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
    playTrack() {
        if (!Player._currentTrackId) {
            let track = queue_1.Queue.next();
            if (track) {
                this.loadTrack(track.getId());
                Player._isPlaying = true;
                this.togglePlay();
                Player.player.play();
                if (this.progress) {
                    this.progress.start();
                }
            }
            else {
                console.log('No tracks to play');
            }
        }
        else {
            Player._isPlaying = true;
            this.togglePlay();
            Player.player.play();
            if (this.progress) {
                this.progress.start();
            }
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
        if (this.progress) {
            this.progress.start();
        }
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
        this.pauseTrack();
        let nextTrack = queue_1.Queue.next();
        if (nextTrack) {
            this.loadTrack(nextTrack.getId());
            Player._isPlaying = true;
            this.togglePlay();
            Player.player.play();
            this.progress = null;
        }
    }
    previousTrack() {
        this.pauseTrack();
        let previousTrack = queue_1.Queue.previous();
        if (previousTrack) {
            this.loadTrack(previousTrack.getId());
            Player._isPlaying = true;
            this.togglePlay();
            Player.player.play();
            this.progress = null;
        }
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
                this.progress = new progess_bar_1.ProgressBar(Player.player.getDuration());
                this.progress.start();
            }
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
class ProgressBar {
    constructor(totalTime) {
        this.currentPosition = 0;
        this.totalTime = totalTime;
        this.tick = this.totalTime / 100;
    }
    update() {
        if (this.currentPosition < 100) {
            const progressBarEl = document.getElementById('progress-bar');
            if (progressBarEl) {
                this.currentPosition = this.currentPosition + 0.1;
                progressBarEl.style.width = this.currentPosition + '%';
            }
        }
    }
    start() {
        this.timer = setInterval(() => {
            this.update();
        }, (this.tick * 100));
    }
    stop() {
        clearInterval(this.timer);
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
class Queue {
    static queue(song) {
        Queue._queue.push(song);
    }
    static dequeue() {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2V2ZW50cy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvYWQtc2NyaXB0Mi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMveXQtcGxheWVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvYXBwLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29tcG9uZW50cy9wbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb21wb25lbnRzL3Byb2dlc3MtYmFyLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29tcG9uZW50cy9xdWV1ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L21vZGVscy9zb25nLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvc2VydmljZXMvZ29vZ2xlLWF1dGhlbnRpY2F0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvc2VydmljZXMvc2VhcmNoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLG1CQUFtQixTQUFTO0FBQzVCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsaUNBQWlDLFFBQVE7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixpQkFBaUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxzQ0FBc0MsUUFBUTtBQUM5QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLE9BQU87QUFDeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSx5QkFBeUI7QUFDakM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsZ0JBQWdCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUM3YkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtREFBbUQ7QUFDbkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUNBQXlDLElBQUk7QUFDN0M7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7O0FDdkJBLHFCQUFxQixtQkFBTyxDQUFDLCtDQUFRO0FBQ3JDLG1CQUFtQixtQkFBTyxDQUFDLDBEQUFjOztBQUV6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLHFCQUFxQjtBQUNoQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7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QkFtRUM7QUFsRWtCLGtCQUFXLEdBQUcsRUFBRSxDQUFDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2NsaWVudC9hcHAudHNcIik7XG4iLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUiA9IHR5cGVvZiBSZWZsZWN0ID09PSAnb2JqZWN0JyA/IFJlZmxlY3QgOiBudWxsXG52YXIgUmVmbGVjdEFwcGx5ID0gUiAmJiB0eXBlb2YgUi5hcHBseSA9PT0gJ2Z1bmN0aW9uJ1xuICA/IFIuYXBwbHlcbiAgOiBmdW5jdGlvbiBSZWZsZWN0QXBwbHkodGFyZ2V0LCByZWNlaXZlciwgYXJncykge1xuICAgIHJldHVybiBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbCh0YXJnZXQsIHJlY2VpdmVyLCBhcmdzKTtcbiAgfVxuXG52YXIgUmVmbGVjdE93bktleXNcbmlmIChSICYmIHR5cGVvZiBSLm93bktleXMgPT09ICdmdW5jdGlvbicpIHtcbiAgUmVmbGVjdE93bktleXMgPSBSLm93bktleXNcbn0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICBSZWZsZWN0T3duS2V5cyA9IGZ1bmN0aW9uIFJlZmxlY3RPd25LZXlzKHRhcmdldCkge1xuICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0YXJnZXQpXG4gICAgICAuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHModGFyZ2V0KSk7XG4gIH07XG59IGVsc2Uge1xuICBSZWZsZWN0T3duS2V5cyA9IGZ1bmN0aW9uIFJlZmxlY3RPd25LZXlzKHRhcmdldCkge1xuICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0YXJnZXQpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBQcm9jZXNzRW1pdFdhcm5pbmcod2FybmluZykge1xuICBpZiAoY29uc29sZSAmJiBjb25zb2xlLndhcm4pIGNvbnNvbGUud2Fybih3YXJuaW5nKTtcbn1cblxudmFyIE51bWJlcklzTmFOID0gTnVtYmVyLmlzTmFOIHx8IGZ1bmN0aW9uIE51bWJlcklzTmFOKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPT0gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIEV2ZW50RW1pdHRlcigpIHtcbiAgRXZlbnRFbWl0dGVyLmluaXQuY2FsbCh0aGlzKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gRXZlbnRFbWl0dGVyO1xuXG4vLyBCYWNrd2FyZHMtY29tcGF0IHdpdGggbm9kZSAwLjEwLnhcbkV2ZW50RW1pdHRlci5FdmVudEVtaXR0ZXIgPSBFdmVudEVtaXR0ZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX2V2ZW50cyA9IHVuZGVmaW5lZDtcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX2V2ZW50c0NvdW50ID0gMDtcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX21heExpc3RlbmVycyA9IHVuZGVmaW5lZDtcblxuLy8gQnkgZGVmYXVsdCBFdmVudEVtaXR0ZXJzIHdpbGwgcHJpbnQgYSB3YXJuaW5nIGlmIG1vcmUgdGhhbiAxMCBsaXN0ZW5lcnMgYXJlXG4vLyBhZGRlZCB0byBpdC4gVGhpcyBpcyBhIHVzZWZ1bCBkZWZhdWx0IHdoaWNoIGhlbHBzIGZpbmRpbmcgbWVtb3J5IGxlYWtzLlxudmFyIGRlZmF1bHRNYXhMaXN0ZW5lcnMgPSAxMDtcblxuZnVuY3Rpb24gY2hlY2tMaXN0ZW5lcihsaXN0ZW5lcikge1xuICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwibGlzdGVuZXJcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24uIFJlY2VpdmVkIHR5cGUgJyArIHR5cGVvZiBsaXN0ZW5lcik7XG4gIH1cbn1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KEV2ZW50RW1pdHRlciwgJ2RlZmF1bHRNYXhMaXN0ZW5lcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGRlZmF1bHRNYXhMaXN0ZW5lcnM7XG4gIH0sXG4gIHNldDogZnVuY3Rpb24oYXJnKSB7XG4gICAgaWYgKHR5cGVvZiBhcmcgIT09ICdudW1iZXInIHx8IGFyZyA8IDAgfHwgTnVtYmVySXNOYU4oYXJnKSkge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RoZSB2YWx1ZSBvZiBcImRlZmF1bHRNYXhMaXN0ZW5lcnNcIiBpcyBvdXQgb2YgcmFuZ2UuIEl0IG11c3QgYmUgYSBub24tbmVnYXRpdmUgbnVtYmVyLiBSZWNlaXZlZCAnICsgYXJnICsgJy4nKTtcbiAgICB9XG4gICAgZGVmYXVsdE1heExpc3RlbmVycyA9IGFyZztcbiAgfVxufSk7XG5cbkV2ZW50RW1pdHRlci5pbml0ID0gZnVuY3Rpb24oKSB7XG5cbiAgaWYgKHRoaXMuX2V2ZW50cyA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICB0aGlzLl9ldmVudHMgPT09IE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKS5fZXZlbnRzKSB7XG4gICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gIH1cblxuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSB0aGlzLl9tYXhMaXN0ZW5lcnMgfHwgdW5kZWZpbmVkO1xufTtcblxuLy8gT2J2aW91c2x5IG5vdCBhbGwgRW1pdHRlcnMgc2hvdWxkIGJlIGxpbWl0ZWQgdG8gMTAuIFRoaXMgZnVuY3Rpb24gYWxsb3dzXG4vLyB0aGF0IHRvIGJlIGluY3JlYXNlZC4gU2V0IHRvIHplcm8gZm9yIHVubGltaXRlZC5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuc2V0TWF4TGlzdGVuZXJzID0gZnVuY3Rpb24gc2V0TWF4TGlzdGVuZXJzKG4pIHtcbiAgaWYgKHR5cGVvZiBuICE9PSAnbnVtYmVyJyB8fCBuIDwgMCB8fCBOdW1iZXJJc05hTihuKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdUaGUgdmFsdWUgb2YgXCJuXCIgaXMgb3V0IG9mIHJhbmdlLiBJdCBtdXN0IGJlIGEgbm9uLW5lZ2F0aXZlIG51bWJlci4gUmVjZWl2ZWQgJyArIG4gKyAnLicpO1xuICB9XG4gIHRoaXMuX21heExpc3RlbmVycyA9IG47XG4gIHJldHVybiB0aGlzO1xufTtcblxuZnVuY3Rpb24gX2dldE1heExpc3RlbmVycyh0aGF0KSB7XG4gIGlmICh0aGF0Ll9tYXhMaXN0ZW5lcnMgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gRXZlbnRFbWl0dGVyLmRlZmF1bHRNYXhMaXN0ZW5lcnM7XG4gIHJldHVybiB0aGF0Ll9tYXhMaXN0ZW5lcnM7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZ2V0TWF4TGlzdGVuZXJzID0gZnVuY3Rpb24gZ2V0TWF4TGlzdGVuZXJzKCkge1xuICByZXR1cm4gX2dldE1heExpc3RlbmVycyh0aGlzKTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uIGVtaXQodHlwZSkge1xuICB2YXIgYXJncyA9IFtdO1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgYXJncy5wdXNoKGFyZ3VtZW50c1tpXSk7XG4gIHZhciBkb0Vycm9yID0gKHR5cGUgPT09ICdlcnJvcicpO1xuXG4gIHZhciBldmVudHMgPSB0aGlzLl9ldmVudHM7XG4gIGlmIChldmVudHMgIT09IHVuZGVmaW5lZClcbiAgICBkb0Vycm9yID0gKGRvRXJyb3IgJiYgZXZlbnRzLmVycm9yID09PSB1bmRlZmluZWQpO1xuICBlbHNlIGlmICghZG9FcnJvcilcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgLy8gSWYgdGhlcmUgaXMgbm8gJ2Vycm9yJyBldmVudCBsaXN0ZW5lciB0aGVuIHRocm93LlxuICBpZiAoZG9FcnJvcikge1xuICAgIHZhciBlcjtcbiAgICBpZiAoYXJncy5sZW5ndGggPiAwKVxuICAgICAgZXIgPSBhcmdzWzBdO1xuICAgIGlmIChlciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAvLyBOb3RlOiBUaGUgY29tbWVudHMgb24gdGhlIGB0aHJvd2AgbGluZXMgYXJlIGludGVudGlvbmFsLCB0aGV5IHNob3dcbiAgICAgIC8vIHVwIGluIE5vZGUncyBvdXRwdXQgaWYgdGhpcyByZXN1bHRzIGluIGFuIHVuaGFuZGxlZCBleGNlcHRpb24uXG4gICAgICB0aHJvdyBlcjsgLy8gVW5oYW5kbGVkICdlcnJvcicgZXZlbnRcbiAgICB9XG4gICAgLy8gQXQgbGVhc3QgZ2l2ZSBzb21lIGtpbmQgb2YgY29udGV4dCB0byB0aGUgdXNlclxuICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoJ1VuaGFuZGxlZCBlcnJvci4nICsgKGVyID8gJyAoJyArIGVyLm1lc3NhZ2UgKyAnKScgOiAnJykpO1xuICAgIGVyci5jb250ZXh0ID0gZXI7XG4gICAgdGhyb3cgZXJyOyAvLyBVbmhhbmRsZWQgJ2Vycm9yJyBldmVudFxuICB9XG5cbiAgdmFyIGhhbmRsZXIgPSBldmVudHNbdHlwZV07XG5cbiAgaWYgKGhhbmRsZXIgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgUmVmbGVjdEFwcGx5KGhhbmRsZXIsIHRoaXMsIGFyZ3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBsZW4gPSBoYW5kbGVyLmxlbmd0aDtcbiAgICB2YXIgbGlzdGVuZXJzID0gYXJyYXlDbG9uZShoYW5kbGVyLCBsZW4pO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpXG4gICAgICBSZWZsZWN0QXBwbHkobGlzdGVuZXJzW2ldLCB0aGlzLCBhcmdzKTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuZnVuY3Rpb24gX2FkZExpc3RlbmVyKHRhcmdldCwgdHlwZSwgbGlzdGVuZXIsIHByZXBlbmQpIHtcbiAgdmFyIG07XG4gIHZhciBldmVudHM7XG4gIHZhciBleGlzdGluZztcblxuICBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKTtcblxuICBldmVudHMgPSB0YXJnZXQuX2V2ZW50cztcbiAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHRhcmdldC5fZXZlbnRzQ291bnQgPSAwO1xuICB9IGVsc2Uge1xuICAgIC8vIFRvIGF2b2lkIHJlY3Vyc2lvbiBpbiB0aGUgY2FzZSB0aGF0IHR5cGUgPT09IFwibmV3TGlzdGVuZXJcIiEgQmVmb3JlXG4gICAgLy8gYWRkaW5nIGl0IHRvIHRoZSBsaXN0ZW5lcnMsIGZpcnN0IGVtaXQgXCJuZXdMaXN0ZW5lclwiLlxuICAgIGlmIChldmVudHMubmV3TGlzdGVuZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGFyZ2V0LmVtaXQoJ25ld0xpc3RlbmVyJywgdHlwZSxcbiAgICAgICAgICAgICAgICAgIGxpc3RlbmVyLmxpc3RlbmVyID8gbGlzdGVuZXIubGlzdGVuZXIgOiBsaXN0ZW5lcik7XG5cbiAgICAgIC8vIFJlLWFzc2lnbiBgZXZlbnRzYCBiZWNhdXNlIGEgbmV3TGlzdGVuZXIgaGFuZGxlciBjb3VsZCBoYXZlIGNhdXNlZCB0aGVcbiAgICAgIC8vIHRoaXMuX2V2ZW50cyB0byBiZSBhc3NpZ25lZCB0byBhIG5ldyBvYmplY3RcbiAgICAgIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzO1xuICAgIH1cbiAgICBleGlzdGluZyA9IGV2ZW50c1t0eXBlXTtcbiAgfVxuXG4gIGlmIChleGlzdGluZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gT3B0aW1pemUgdGhlIGNhc2Ugb2Ygb25lIGxpc3RlbmVyLiBEb24ndCBuZWVkIHRoZSBleHRyYSBhcnJheSBvYmplY3QuXG4gICAgZXhpc3RpbmcgPSBldmVudHNbdHlwZV0gPSBsaXN0ZW5lcjtcbiAgICArK3RhcmdldC5fZXZlbnRzQ291bnQ7XG4gIH0gZWxzZSB7XG4gICAgaWYgKHR5cGVvZiBleGlzdGluZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gQWRkaW5nIHRoZSBzZWNvbmQgZWxlbWVudCwgbmVlZCB0byBjaGFuZ2UgdG8gYXJyYXkuXG4gICAgICBleGlzdGluZyA9IGV2ZW50c1t0eXBlXSA9XG4gICAgICAgIHByZXBlbmQgPyBbbGlzdGVuZXIsIGV4aXN0aW5nXSA6IFtleGlzdGluZywgbGlzdGVuZXJdO1xuICAgICAgLy8gSWYgd2UndmUgYWxyZWFkeSBnb3QgYW4gYXJyYXksIGp1c3QgYXBwZW5kLlxuICAgIH0gZWxzZSBpZiAocHJlcGVuZCkge1xuICAgICAgZXhpc3RpbmcudW5zaGlmdChsaXN0ZW5lcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV4aXN0aW5nLnB1c2gobGlzdGVuZXIpO1xuICAgIH1cblxuICAgIC8vIENoZWNrIGZvciBsaXN0ZW5lciBsZWFrXG4gICAgbSA9IF9nZXRNYXhMaXN0ZW5lcnModGFyZ2V0KTtcbiAgICBpZiAobSA+IDAgJiYgZXhpc3RpbmcubGVuZ3RoID4gbSAmJiAhZXhpc3Rpbmcud2FybmVkKSB7XG4gICAgICBleGlzdGluZy53YXJuZWQgPSB0cnVlO1xuICAgICAgLy8gTm8gZXJyb3IgY29kZSBmb3IgdGhpcyBzaW5jZSBpdCBpcyBhIFdhcm5pbmdcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxuICAgICAgdmFyIHcgPSBuZXcgRXJyb3IoJ1Bvc3NpYmxlIEV2ZW50RW1pdHRlciBtZW1vcnkgbGVhayBkZXRlY3RlZC4gJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nLmxlbmd0aCArICcgJyArIFN0cmluZyh0eXBlKSArICcgbGlzdGVuZXJzICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAnYWRkZWQuIFVzZSBlbWl0dGVyLnNldE1heExpc3RlbmVycygpIHRvICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAnaW5jcmVhc2UgbGltaXQnKTtcbiAgICAgIHcubmFtZSA9ICdNYXhMaXN0ZW5lcnNFeGNlZWRlZFdhcm5pbmcnO1xuICAgICAgdy5lbWl0dGVyID0gdGFyZ2V0O1xuICAgICAgdy50eXBlID0gdHlwZTtcbiAgICAgIHcuY291bnQgPSBleGlzdGluZy5sZW5ndGg7XG4gICAgICBQcm9jZXNzRW1pdFdhcm5pbmcodyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lciA9IGZ1bmN0aW9uIGFkZExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gIHJldHVybiBfYWRkTGlzdGVuZXIodGhpcywgdHlwZSwgbGlzdGVuZXIsIGZhbHNlKTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub24gPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnByZXBlbmRMaXN0ZW5lciA9XG4gICAgZnVuY3Rpb24gcHJlcGVuZExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgICByZXR1cm4gX2FkZExpc3RlbmVyKHRoaXMsIHR5cGUsIGxpc3RlbmVyLCB0cnVlKTtcbiAgICB9O1xuXG5mdW5jdGlvbiBvbmNlV3JhcHBlcigpIHtcbiAgaWYgKCF0aGlzLmZpcmVkKSB7XG4gICAgdGhpcy50YXJnZXQucmVtb3ZlTGlzdGVuZXIodGhpcy50eXBlLCB0aGlzLndyYXBGbik7XG4gICAgdGhpcy5maXJlZCA9IHRydWU7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApXG4gICAgICByZXR1cm4gdGhpcy5saXN0ZW5lci5jYWxsKHRoaXMudGFyZ2V0KTtcbiAgICByZXR1cm4gdGhpcy5saXN0ZW5lci5hcHBseSh0aGlzLnRhcmdldCwgYXJndW1lbnRzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfb25jZVdyYXAodGFyZ2V0LCB0eXBlLCBsaXN0ZW5lcikge1xuICB2YXIgc3RhdGUgPSB7IGZpcmVkOiBmYWxzZSwgd3JhcEZuOiB1bmRlZmluZWQsIHRhcmdldDogdGFyZ2V0LCB0eXBlOiB0eXBlLCBsaXN0ZW5lcjogbGlzdGVuZXIgfTtcbiAgdmFyIHdyYXBwZWQgPSBvbmNlV3JhcHBlci5iaW5kKHN0YXRlKTtcbiAgd3JhcHBlZC5saXN0ZW5lciA9IGxpc3RlbmVyO1xuICBzdGF0ZS53cmFwRm4gPSB3cmFwcGVkO1xuICByZXR1cm4gd3JhcHBlZDtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24gb25jZSh0eXBlLCBsaXN0ZW5lcikge1xuICBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKTtcbiAgdGhpcy5vbih0eXBlLCBfb25jZVdyYXAodGhpcywgdHlwZSwgbGlzdGVuZXIpKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnByZXBlbmRPbmNlTGlzdGVuZXIgPVxuICAgIGZ1bmN0aW9uIHByZXBlbmRPbmNlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgIGNoZWNrTGlzdGVuZXIobGlzdGVuZXIpO1xuICAgICAgdGhpcy5wcmVwZW5kTGlzdGVuZXIodHlwZSwgX29uY2VXcmFwKHRoaXMsIHR5cGUsIGxpc3RlbmVyKSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4vLyBFbWl0cyBhICdyZW1vdmVMaXN0ZW5lcicgZXZlbnQgaWYgYW5kIG9ubHkgaWYgdGhlIGxpc3RlbmVyIHdhcyByZW1vdmVkLlxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9XG4gICAgZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgIHZhciBsaXN0LCBldmVudHMsIHBvc2l0aW9uLCBpLCBvcmlnaW5hbExpc3RlbmVyO1xuXG4gICAgICBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKTtcblxuICAgICAgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICAgICAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgbGlzdCA9IGV2ZW50c1t0eXBlXTtcbiAgICAgIGlmIChsaXN0ID09PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICBpZiAobGlzdCA9PT0gbGlzdGVuZXIgfHwgbGlzdC5saXN0ZW5lciA9PT0gbGlzdGVuZXIpIHtcbiAgICAgICAgaWYgKC0tdGhpcy5fZXZlbnRzQ291bnQgPT09IDApXG4gICAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgZGVsZXRlIGV2ZW50c1t0eXBlXTtcbiAgICAgICAgICBpZiAoZXZlbnRzLnJlbW92ZUxpc3RlbmVyKVxuICAgICAgICAgICAgdGhpcy5lbWl0KCdyZW1vdmVMaXN0ZW5lcicsIHR5cGUsIGxpc3QubGlzdGVuZXIgfHwgbGlzdGVuZXIpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBsaXN0ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHBvc2l0aW9uID0gLTE7XG5cbiAgICAgICAgZm9yIChpID0gbGlzdC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgIGlmIChsaXN0W2ldID09PSBsaXN0ZW5lciB8fCBsaXN0W2ldLmxpc3RlbmVyID09PSBsaXN0ZW5lcikge1xuICAgICAgICAgICAgb3JpZ2luYWxMaXN0ZW5lciA9IGxpc3RbaV0ubGlzdGVuZXI7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IGk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocG9zaXRpb24gPCAwKVxuICAgICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICAgIGlmIChwb3NpdGlvbiA9PT0gMClcbiAgICAgICAgICBsaXN0LnNoaWZ0KCk7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHNwbGljZU9uZShsaXN0LCBwb3NpdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobGlzdC5sZW5ndGggPT09IDEpXG4gICAgICAgICAgZXZlbnRzW3R5cGVdID0gbGlzdFswXTtcblxuICAgICAgICBpZiAoZXZlbnRzLnJlbW92ZUxpc3RlbmVyICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgdGhpcy5lbWl0KCdyZW1vdmVMaXN0ZW5lcicsIHR5cGUsIG9yaWdpbmFsTGlzdGVuZXIgfHwgbGlzdGVuZXIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9mZiA9IEV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzID1cbiAgICBmdW5jdGlvbiByZW1vdmVBbGxMaXN0ZW5lcnModHlwZSkge1xuICAgICAgdmFyIGxpc3RlbmVycywgZXZlbnRzLCBpO1xuXG4gICAgICBldmVudHMgPSB0aGlzLl9ldmVudHM7XG4gICAgICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICAvLyBub3QgbGlzdGVuaW5nIGZvciByZW1vdmVMaXN0ZW5lciwgbm8gbmVlZCB0byBlbWl0XG4gICAgICBpZiAoZXZlbnRzLnJlbW92ZUxpc3RlbmVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICAgIHRoaXMuX2V2ZW50c0NvdW50ID0gMDtcbiAgICAgICAgfSBlbHNlIGlmIChldmVudHNbdHlwZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGlmICgtLXRoaXMuX2V2ZW50c0NvdW50ID09PSAwKVxuICAgICAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICBkZWxldGUgZXZlbnRzW3R5cGVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICAvLyBlbWl0IHJlbW92ZUxpc3RlbmVyIGZvciBhbGwgbGlzdGVuZXJzIG9uIGFsbCBldmVudHNcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZXZlbnRzKTtcbiAgICAgICAgdmFyIGtleTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICBrZXkgPSBrZXlzW2ldO1xuICAgICAgICAgIGlmIChrZXkgPT09ICdyZW1vdmVMaXN0ZW5lcicpIGNvbnRpbnVlO1xuICAgICAgICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoJ3JlbW92ZUxpc3RlbmVyJyk7XG4gICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHRoaXMuX2V2ZW50c0NvdW50ID0gMDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIGxpc3RlbmVycyA9IGV2ZW50c1t0eXBlXTtcblxuICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lcnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcnMpO1xuICAgICAgfSBlbHNlIGlmIChsaXN0ZW5lcnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAvLyBMSUZPIG9yZGVyXG4gICAgICAgIGZvciAoaSA9IGxpc3RlbmVycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzW2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG5mdW5jdGlvbiBfbGlzdGVuZXJzKHRhcmdldCwgdHlwZSwgdW53cmFwKSB7XG4gIHZhciBldmVudHMgPSB0YXJnZXQuX2V2ZW50cztcblxuICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIFtdO1xuXG4gIHZhciBldmxpc3RlbmVyID0gZXZlbnRzW3R5cGVdO1xuICBpZiAoZXZsaXN0ZW5lciA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBbXTtcblxuICBpZiAodHlwZW9mIGV2bGlzdGVuZXIgPT09ICdmdW5jdGlvbicpXG4gICAgcmV0dXJuIHVud3JhcCA/IFtldmxpc3RlbmVyLmxpc3RlbmVyIHx8IGV2bGlzdGVuZXJdIDogW2V2bGlzdGVuZXJdO1xuXG4gIHJldHVybiB1bndyYXAgP1xuICAgIHVud3JhcExpc3RlbmVycyhldmxpc3RlbmVyKSA6IGFycmF5Q2xvbmUoZXZsaXN0ZW5lciwgZXZsaXN0ZW5lci5sZW5ndGgpO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uIGxpc3RlbmVycyh0eXBlKSB7XG4gIHJldHVybiBfbGlzdGVuZXJzKHRoaXMsIHR5cGUsIHRydWUpO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yYXdMaXN0ZW5lcnMgPSBmdW5jdGlvbiByYXdMaXN0ZW5lcnModHlwZSkge1xuICByZXR1cm4gX2xpc3RlbmVycyh0aGlzLCB0eXBlLCBmYWxzZSk7XG59O1xuXG5FdmVudEVtaXR0ZXIubGlzdGVuZXJDb3VudCA9IGZ1bmN0aW9uKGVtaXR0ZXIsIHR5cGUpIHtcbiAgaWYgKHR5cGVvZiBlbWl0dGVyLmxpc3RlbmVyQ291bnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gZW1pdHRlci5saXN0ZW5lckNvdW50KHR5cGUpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBsaXN0ZW5lckNvdW50LmNhbGwoZW1pdHRlciwgdHlwZSk7XG4gIH1cbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJDb3VudCA9IGxpc3RlbmVyQ291bnQ7XG5mdW5jdGlvbiBsaXN0ZW5lckNvdW50KHR5cGUpIHtcbiAgdmFyIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcblxuICBpZiAoZXZlbnRzICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgZXZsaXN0ZW5lciA9IGV2ZW50c1t0eXBlXTtcblxuICAgIGlmICh0eXBlb2YgZXZsaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfSBlbHNlIGlmIChldmxpc3RlbmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBldmxpc3RlbmVyLmxlbmd0aDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gMDtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5ldmVudE5hbWVzID0gZnVuY3Rpb24gZXZlbnROYW1lcygpIHtcbiAgcmV0dXJuIHRoaXMuX2V2ZW50c0NvdW50ID4gMCA/IFJlZmxlY3RPd25LZXlzKHRoaXMuX2V2ZW50cykgOiBbXTtcbn07XG5cbmZ1bmN0aW9uIGFycmF5Q2xvbmUoYXJyLCBuKSB7XG4gIHZhciBjb3B5ID0gbmV3IEFycmF5KG4pO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IG47ICsraSlcbiAgICBjb3B5W2ldID0gYXJyW2ldO1xuICByZXR1cm4gY29weTtcbn1cblxuZnVuY3Rpb24gc3BsaWNlT25lKGxpc3QsIGluZGV4KSB7XG4gIGZvciAoOyBpbmRleCArIDEgPCBsaXN0Lmxlbmd0aDsgaW5kZXgrKylcbiAgICBsaXN0W2luZGV4XSA9IGxpc3RbaW5kZXggKyAxXTtcbiAgbGlzdC5wb3AoKTtcbn1cblxuZnVuY3Rpb24gdW53cmFwTGlzdGVuZXJzKGFycikge1xuICB2YXIgcmV0ID0gbmV3IEFycmF5KGFyci5sZW5ndGgpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHJldC5sZW5ndGg7ICsraSkge1xuICAgIHJldFtpXSA9IGFycltpXS5saXN0ZW5lciB8fCBhcnJbaV07XG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbG9hZFNjcmlwdDIgKHNyYywgYXR0cnMsIHBhcmVudE5vZGUpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKVxuICAgIHNjcmlwdC5hc3luYyA9IHRydWVcbiAgICBzY3JpcHQuc3JjID0gc3JjXG5cbiAgICBmb3IgKGNvbnN0IFtrLCB2XSBvZiBPYmplY3QuZW50cmllcyhhdHRycyB8fCB7fSkpIHtcbiAgICAgIHNjcmlwdC5zZXRBdHRyaWJ1dGUoaywgdilcbiAgICB9XG5cbiAgICBzY3JpcHQub25sb2FkID0gKCkgPT4ge1xuICAgICAgc2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gbnVsbFxuICAgICAgcmVzb2x2ZShzY3JpcHQpXG4gICAgfVxuXG4gICAgc2NyaXB0Lm9uZXJyb3IgPSAoKSA9PiB7XG4gICAgICBzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBudWxsXG4gICAgICByZWplY3QobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCAke3NyY31gKSlcbiAgICB9XG5cbiAgICBjb25zdCBub2RlID0gcGFyZW50Tm9kZSB8fCBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF1cbiAgICBub2RlLmFwcGVuZENoaWxkKHNjcmlwdClcbiAgfSlcbn1cbiIsImNvbnN0IEV2ZW50RW1pdHRlciA9IHJlcXVpcmUoJ2V2ZW50cycpLkV2ZW50RW1pdHRlclxuY29uc3QgbG9hZFNjcmlwdCA9IHJlcXVpcmUoJ2xvYWQtc2NyaXB0MicpXG5cbmNvbnN0IFlPVVRVQkVfSUZSQU1FX0FQSV9TUkMgPSAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vaWZyYW1lX2FwaSdcblxuY29uc3QgWU9VVFVCRV9TVEFURVMgPSB7XG4gICctMSc6ICd1bnN0YXJ0ZWQnLFxuICAwOiAnZW5kZWQnLFxuICAxOiAncGxheWluZycsXG4gIDI6ICdwYXVzZWQnLFxuICAzOiAnYnVmZmVyaW5nJyxcbiAgNTogJ2N1ZWQnXG59XG5cbmNvbnN0IFlPVVRVQkVfRVJST1IgPSB7XG4gIC8vIFRoZSByZXF1ZXN0IGNvbnRhaW5zIGFuIGludmFsaWQgcGFyYW1ldGVyIHZhbHVlLiBGb3IgZXhhbXBsZSwgdGhpcyBlcnJvclxuICAvLyBvY2N1cnMgaWYgeW91IHNwZWNpZnkgYSB2aWRlb0lkIHRoYXQgZG9lcyBub3QgaGF2ZSAxMSBjaGFyYWN0ZXJzLCBvciBpZiB0aGVcbiAgLy8gdmlkZW9JZCBjb250YWlucyBpbnZhbGlkIGNoYXJhY3RlcnMsIHN1Y2ggYXMgZXhjbGFtYXRpb24gcG9pbnRzIG9yIGFzdGVyaXNrcy5cbiAgSU5WQUxJRF9QQVJBTTogMixcblxuICAvLyBUaGUgcmVxdWVzdGVkIGNvbnRlbnQgY2Fubm90IGJlIHBsYXllZCBpbiBhbiBIVE1MNSBwbGF5ZXIgb3IgYW5vdGhlciBlcnJvclxuICAvLyByZWxhdGVkIHRvIHRoZSBIVE1MNSBwbGF5ZXIgaGFzIG9jY3VycmVkLlxuICBIVE1MNV9FUlJPUjogNSxcblxuICAvLyBUaGUgdmlkZW8gcmVxdWVzdGVkIHdhcyBub3QgZm91bmQuIFRoaXMgZXJyb3Igb2NjdXJzIHdoZW4gYSB2aWRlbyBoYXMgYmVlblxuICAvLyByZW1vdmVkIChmb3IgYW55IHJlYXNvbikgb3IgaGFzIGJlZW4gbWFya2VkIGFzIHByaXZhdGUuXG4gIE5PVF9GT1VORDogMTAwLFxuXG4gIC8vIFRoZSBvd25lciBvZiB0aGUgcmVxdWVzdGVkIHZpZGVvIGRvZXMgbm90IGFsbG93IGl0IHRvIGJlIHBsYXllZCBpbiBlbWJlZGRlZFxuICAvLyBwbGF5ZXJzLlxuICBVTlBMQVlBQkxFXzE6IDEwMSxcblxuICAvLyBUaGlzIGVycm9yIGlzIHRoZSBzYW1lIGFzIDEwMS4gSXQncyBqdXN0IGEgMTAxIGVycm9yIGluIGRpc2d1aXNlIVxuICBVTlBMQVlBQkxFXzI6IDE1MFxufVxuXG5jb25zdCBsb2FkSWZyYW1lQVBJQ2FsbGJhY2tzID0gW11cblxuLyoqXG4gKiBZb3VUdWJlIFBsYXllci4gRXhwb3NlcyBhIGJldHRlciBBUEksIHdpdGggbmljZXIgZXZlbnRzLlxuICogQHBhcmFtIHtIVE1MRWxlbWVudHxzZWxlY3Rvcn0gZWxlbWVudFxuICovXG5jbGFzcyBZb3VUdWJlUGxheWVyIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IgKGVsZW1lbnQsIG9wdHMpIHtcbiAgICBzdXBlcigpXG5cbiAgICBjb25zdCBlbGVtID0gdHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnXG4gICAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbWVudClcbiAgICAgIDogZWxlbWVudFxuXG4gICAgaWYgKGVsZW0uaWQpIHtcbiAgICAgIHRoaXMuX2lkID0gZWxlbS5pZCAvLyB1c2UgZXhpc3RpbmcgZWxlbWVudCBpZFxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9pZCA9IGVsZW0uaWQgPSAneXRwbGF5ZXItJyArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMTYpLnNsaWNlKDIsIDgpXG4gICAgfVxuXG4gICAgdGhpcy5fb3B0cyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgd2lkdGg6IDY0MCxcbiAgICAgIGhlaWdodDogMzYwLFxuICAgICAgYXV0b3BsYXk6IGZhbHNlLFxuICAgICAgY2FwdGlvbnM6IHVuZGVmaW5lZCxcbiAgICAgIGNvbnRyb2xzOiB0cnVlLFxuICAgICAga2V5Ym9hcmQ6IHRydWUsXG4gICAgICBmdWxsc2NyZWVuOiB0cnVlLFxuICAgICAgYW5ub3RhdGlvbnM6IHRydWUsXG4gICAgICBtb2Rlc3RCcmFuZGluZzogZmFsc2UsXG4gICAgICByZWxhdGVkOiB0cnVlLFxuICAgICAgdGltZXVwZGF0ZUZyZXF1ZW5jeTogMTAwMCxcbiAgICAgIHBsYXlzSW5saW5lOiB0cnVlXG4gICAgfSwgb3B0cylcblxuICAgIHRoaXMudmlkZW9JZCA9IG51bGxcbiAgICB0aGlzLmRlc3Ryb3llZCA9IGZhbHNlXG5cbiAgICB0aGlzLl9hcGkgPSBudWxsXG4gICAgdGhpcy5fYXV0b3BsYXkgPSBmYWxzZSAvLyBhdXRvcGxheSB0aGUgZmlyc3QgdmlkZW8/XG4gICAgdGhpcy5fcGxheWVyID0gbnVsbFxuICAgIHRoaXMuX3JlYWR5ID0gZmFsc2UgLy8gaXMgcGxheWVyIHJlYWR5P1xuICAgIHRoaXMuX3F1ZXVlID0gW11cblxuICAgIHRoaXMuX2ludGVydmFsID0gbnVsbFxuXG4gICAgLy8gU2V0dXAgbGlzdGVuZXJzIGZvciAndGltZXVwZGF0ZScgZXZlbnRzLiBUaGUgWW91VHViZSBQbGF5ZXIgZG9lcyBub3QgZmlyZVxuICAgIC8vICd0aW1ldXBkYXRlJyBldmVudHMsIHNvIHRoZXkgYXJlIHNpbXVsYXRlZCB1c2luZyBhIHNldEludGVydmFsKCkuXG4gICAgdGhpcy5fc3RhcnRJbnRlcnZhbCA9IHRoaXMuX3N0YXJ0SW50ZXJ2YWwuYmluZCh0aGlzKVxuICAgIHRoaXMuX3N0b3BJbnRlcnZhbCA9IHRoaXMuX3N0b3BJbnRlcnZhbC5iaW5kKHRoaXMpXG5cbiAgICB0aGlzLm9uKCdwbGF5aW5nJywgdGhpcy5fc3RhcnRJbnRlcnZhbClcbiAgICB0aGlzLm9uKCd1bnN0YXJ0ZWQnLCB0aGlzLl9zdG9wSW50ZXJ2YWwpXG4gICAgdGhpcy5vbignZW5kZWQnLCB0aGlzLl9zdG9wSW50ZXJ2YWwpXG4gICAgdGhpcy5vbigncGF1c2VkJywgdGhpcy5fc3RvcEludGVydmFsKVxuICAgIHRoaXMub24oJ2J1ZmZlcmluZycsIHRoaXMuX3N0b3BJbnRlcnZhbClcblxuICAgIHRoaXMuX2xvYWRJZnJhbWVBUEkoKGVyciwgYXBpKSA9PiB7XG4gICAgICBpZiAoZXJyKSByZXR1cm4gdGhpcy5fZGVzdHJveShuZXcgRXJyb3IoJ1lvdVR1YmUgSWZyYW1lIEFQSSBmYWlsZWQgdG8gbG9hZCcpKVxuICAgICAgdGhpcy5fYXBpID0gYXBpXG5cbiAgICAgIC8vIElmIGxvYWQodmlkZW9JZCwgW2F1dG9wbGF5XSkgd2FzIGNhbGxlZCBiZWZvcmUgSWZyYW1lIEFQSSBsb2FkZWQsIGVuc3VyZSBpdCBnZXRzXG4gICAgICAvLyBjYWxsZWQgYWdhaW4gbm93XG4gICAgICBpZiAodGhpcy52aWRlb0lkKSB0aGlzLmxvYWQodGhpcy52aWRlb0lkLCB0aGlzLl9hdXRvcGxheSlcbiAgICB9KVxuICB9XG5cbiAgbG9hZCAodmlkZW9JZCwgYXV0b3BsYXkgPSBmYWxzZSkge1xuICAgIGlmICh0aGlzLmRlc3Ryb3llZCkgcmV0dXJuXG5cbiAgICB0aGlzLnZpZGVvSWQgPSB2aWRlb0lkXG4gICAgdGhpcy5fYXV0b3BsYXkgPSBhdXRvcGxheVxuXG4gICAgLy8gSWYgdGhlIElmcmFtZSBBUEkgaXMgbm90IHJlYWR5IHlldCwgZG8gbm90aGluZy4gT25jZSB0aGUgSWZyYW1lIEFQSSBpc1xuICAgIC8vIHJlYWR5LCBgbG9hZCh0aGlzLnZpZGVvSWQpYCB3aWxsIGJlIGNhbGxlZC5cbiAgICBpZiAoIXRoaXMuX2FwaSkgcmV0dXJuXG5cbiAgICAvLyBJZiB0aGVyZSBpcyBubyBwbGF5ZXIgaW5zdGFuY2UsIGNyZWF0ZSBvbmUuXG4gICAgaWYgKCF0aGlzLl9wbGF5ZXIpIHtcbiAgICAgIHRoaXMuX2NyZWF0ZVBsYXllcih2aWRlb0lkKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHBsYXllciBpbnN0YW5jZSBpcyBub3QgcmVhZHkgeWV0LCBkbyBub3RoaW5nLiBPbmNlIHRoZSBwbGF5ZXJcbiAgICAvLyBpbnN0YW5jZSBpcyByZWFkeSwgYGxvYWQodGhpcy52aWRlb0lkKWAgd2lsbCBiZSBjYWxsZWQuIFRoaXMgZW5zdXJlcyB0aGF0XG4gICAgLy8gdGhlIGxhc3QgY2FsbCB0byBgbG9hZCgpYCBpcyB0aGUgb25lIHRoYXQgdGFrZXMgZWZmZWN0LlxuICAgIGlmICghdGhpcy5fcmVhZHkpIHJldHVyblxuXG4gICAgLy8gSWYgdGhlIHBsYXllciBpbnN0YW5jZSBpcyByZWFkeSwgbG9hZCB0aGUgZ2l2ZW4gYHZpZGVvSWRgLlxuICAgIGlmIChhdXRvcGxheSkge1xuICAgICAgdGhpcy5fcGxheWVyLmxvYWRWaWRlb0J5SWQodmlkZW9JZClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcGxheWVyLmN1ZVZpZGVvQnlJZCh2aWRlb0lkKVxuICAgIH1cbiAgfVxuXG4gIHBsYXkgKCkge1xuICAgIGlmICh0aGlzLl9yZWFkeSkgdGhpcy5fcGxheWVyLnBsYXlWaWRlbygpXG4gICAgZWxzZSB0aGlzLl9xdWV1ZUNvbW1hbmQoJ3BsYXknKVxuICB9XG5cbiAgcGF1c2UgKCkge1xuICAgIGlmICh0aGlzLl9yZWFkeSkgdGhpcy5fcGxheWVyLnBhdXNlVmlkZW8oKVxuICAgIGVsc2UgdGhpcy5fcXVldWVDb21tYW5kKCdwYXVzZScpXG4gIH1cblxuICBzdG9wICgpIHtcbiAgICBpZiAodGhpcy5fcmVhZHkpIHRoaXMuX3BsYXllci5zdG9wVmlkZW8oKVxuICAgIGVsc2UgdGhpcy5fcXVldWVDb21tYW5kKCdzdG9wJylcbiAgfVxuXG4gIHNlZWsgKHNlY29uZHMpIHtcbiAgICBpZiAodGhpcy5fcmVhZHkpIHRoaXMuX3BsYXllci5zZWVrVG8oc2Vjb25kcywgdHJ1ZSlcbiAgICBlbHNlIHRoaXMuX3F1ZXVlQ29tbWFuZCgnc2VlaycsIHNlY29uZHMpXG4gIH1cblxuICBzZXRWb2x1bWUgKHZvbHVtZSkge1xuICAgIGlmICh0aGlzLl9yZWFkeSkgdGhpcy5fcGxheWVyLnNldFZvbHVtZSh2b2x1bWUpXG4gICAgZWxzZSB0aGlzLl9xdWV1ZUNvbW1hbmQoJ3NldFZvbHVtZScsIHZvbHVtZSlcbiAgfVxuXG4gIGdldFZvbHVtZSAoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9yZWFkeSAmJiB0aGlzLl9wbGF5ZXIuZ2V0Vm9sdW1lKCkpIHx8IDBcbiAgfVxuXG4gIG11dGUgKCkge1xuICAgIGlmICh0aGlzLl9yZWFkeSkgdGhpcy5fcGxheWVyLm11dGUoKVxuICAgIGVsc2UgdGhpcy5fcXVldWVDb21tYW5kKCdtdXRlJylcbiAgfVxuXG4gIHVuTXV0ZSAoKSB7XG4gICAgaWYgKHRoaXMuX3JlYWR5KSB0aGlzLl9wbGF5ZXIudW5NdXRlKClcbiAgICBlbHNlIHRoaXMuX3F1ZXVlQ29tbWFuZCgndW5NdXRlJylcbiAgfVxuXG4gIGlzTXV0ZWQgKCkge1xuICAgIHJldHVybiAodGhpcy5fcmVhZHkgJiYgdGhpcy5fcGxheWVyLmlzTXV0ZWQoKSkgfHwgZmFsc2VcbiAgfVxuXG4gIHNldFNpemUgKHdpZHRoLCBoZWlnaHQpIHtcbiAgICBpZiAodGhpcy5fcmVhZHkpIHRoaXMuX3BsYXllci5zZXRTaXplKHdpZHRoLCBoZWlnaHQpXG4gICAgZWxzZSB0aGlzLl9xdWV1ZUNvbW1hbmQoJ3NldFNpemUnLCB3aWR0aCwgaGVpZ2h0KVxuICB9XG5cbiAgc2V0UGxheWJhY2tSYXRlIChyYXRlKSB7XG4gICAgaWYgKHRoaXMuX3JlYWR5KSB0aGlzLl9wbGF5ZXIuc2V0UGxheWJhY2tSYXRlKHJhdGUpXG4gICAgZWxzZSB0aGlzLl9xdWV1ZUNvbW1hbmQoJ3NldFBsYXliYWNrUmF0ZScsIHJhdGUpXG4gIH1cblxuICBzZXRQbGF5YmFja1F1YWxpdHkgKHN1Z2dlc3RlZFF1YWxpdHkpIHtcbiAgICBpZiAodGhpcy5fcmVhZHkpIHRoaXMuX3BsYXllci5zZXRQbGF5YmFja1F1YWxpdHkoc3VnZ2VzdGVkUXVhbGl0eSlcbiAgICBlbHNlIHRoaXMuX3F1ZXVlQ29tbWFuZCgnc2V0UGxheWJhY2tRdWFsaXR5Jywgc3VnZ2VzdGVkUXVhbGl0eSlcbiAgfVxuXG4gIGdldFBsYXliYWNrUmF0ZSAoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9yZWFkeSAmJiB0aGlzLl9wbGF5ZXIuZ2V0UGxheWJhY2tSYXRlKCkpIHx8IDFcbiAgfVxuXG4gIGdldEF2YWlsYWJsZVBsYXliYWNrUmF0ZXMgKCkge1xuICAgIHJldHVybiAodGhpcy5fcmVhZHkgJiYgdGhpcy5fcGxheWVyLmdldEF2YWlsYWJsZVBsYXliYWNrUmF0ZXMoKSkgfHwgWzFdXG4gIH1cblxuICBnZXREdXJhdGlvbiAoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9yZWFkeSAmJiB0aGlzLl9wbGF5ZXIuZ2V0RHVyYXRpb24oKSkgfHwgMFxuICB9XG5cbiAgZ2V0UHJvZ3Jlc3MgKCkge1xuICAgIHJldHVybiAodGhpcy5fcmVhZHkgJiYgdGhpcy5fcGxheWVyLmdldFZpZGVvTG9hZGVkRnJhY3Rpb24oKSkgfHwgMFxuICB9XG5cbiAgZ2V0U3RhdGUgKCkge1xuICAgIHJldHVybiAodGhpcy5fcmVhZHkgJiYgWU9VVFVCRV9TVEFURVNbdGhpcy5fcGxheWVyLmdldFBsYXllclN0YXRlKCldKSB8fCAndW5zdGFydGVkJ1xuICB9XG5cbiAgZ2V0Q3VycmVudFRpbWUgKCkge1xuICAgIHJldHVybiAodGhpcy5fcmVhZHkgJiYgdGhpcy5fcGxheWVyLmdldEN1cnJlbnRUaW1lKCkpIHx8IDBcbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMuX2Rlc3Ryb3koKVxuICB9XG5cbiAgX2Rlc3Ryb3kgKGVycikge1xuICAgIGlmICh0aGlzLmRlc3Ryb3llZCkgcmV0dXJuXG4gICAgdGhpcy5kZXN0cm95ZWQgPSB0cnVlXG5cbiAgICBpZiAodGhpcy5fcGxheWVyKSB7XG4gICAgICB0aGlzLl9wbGF5ZXIuc3RvcFZpZGVvICYmIHRoaXMuX3BsYXllci5zdG9wVmlkZW8oKVxuICAgICAgdGhpcy5fcGxheWVyLmRlc3Ryb3koKVxuICAgIH1cblxuICAgIHRoaXMudmlkZW9JZCA9IG51bGxcblxuICAgIHRoaXMuX2lkID0gbnVsbFxuICAgIHRoaXMuX29wdHMgPSBudWxsXG4gICAgdGhpcy5fYXBpID0gbnVsbFxuICAgIHRoaXMuX3BsYXllciA9IG51bGxcbiAgICB0aGlzLl9yZWFkeSA9IGZhbHNlXG4gICAgdGhpcy5fcXVldWUgPSBudWxsXG5cbiAgICB0aGlzLl9zdG9wSW50ZXJ2YWwoKVxuXG4gICAgdGhpcy5yZW1vdmVMaXN0ZW5lcigncGxheWluZycsIHRoaXMuX3N0YXJ0SW50ZXJ2YWwpXG4gICAgdGhpcy5yZW1vdmVMaXN0ZW5lcigncGF1c2VkJywgdGhpcy5fc3RvcEludGVydmFsKVxuICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIoJ2J1ZmZlcmluZycsIHRoaXMuX3N0b3BJbnRlcnZhbClcbiAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKCd1bnN0YXJ0ZWQnLCB0aGlzLl9zdG9wSW50ZXJ2YWwpXG4gICAgdGhpcy5yZW1vdmVMaXN0ZW5lcignZW5kZWQnLCB0aGlzLl9zdG9wSW50ZXJ2YWwpXG5cbiAgICBpZiAoZXJyKSB0aGlzLmVtaXQoJ2Vycm9yJywgZXJyKVxuICB9XG5cbiAgX3F1ZXVlQ29tbWFuZCAoY29tbWFuZCwgLi4uYXJncykge1xuICAgIGlmICh0aGlzLmRlc3Ryb3llZCkgcmV0dXJuXG4gICAgdGhpcy5fcXVldWUucHVzaChbY29tbWFuZCwgYXJnc10pXG4gIH1cblxuICBfZmx1c2hRdWV1ZSAoKSB7XG4gICAgd2hpbGUgKHRoaXMuX3F1ZXVlLmxlbmd0aCkge1xuICAgICAgY29uc3QgY29tbWFuZCA9IHRoaXMuX3F1ZXVlLnNoaWZ0KClcbiAgICAgIHRoaXNbY29tbWFuZFswXV0uYXBwbHkodGhpcywgY29tbWFuZFsxXSlcbiAgICB9XG4gIH1cblxuICBfbG9hZElmcmFtZUFQSSAoY2IpIHtcbiAgICAvLyBJZiBBUEkgaXMgbG9hZGVkLCB0aGVyZSBpcyBub3RoaW5nIGVsc2UgdG8gZG9cbiAgICBpZiAod2luZG93LllUICYmIHR5cGVvZiB3aW5kb3cuWVQuUGxheWVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gY2IobnVsbCwgd2luZG93LllUKVxuICAgIH1cblxuICAgIC8vIE90aGVyd2lzZSwgcXVldWUgY2FsbGJhY2sgdW50aWwgQVBJIGlzIGxvYWRlZFxuICAgIGxvYWRJZnJhbWVBUElDYWxsYmFja3MucHVzaChjYilcblxuICAgIGNvbnN0IHNjcmlwdHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzY3JpcHQnKSlcbiAgICBjb25zdCBpc0xvYWRpbmcgPSBzY3JpcHRzLnNvbWUoc2NyaXB0ID0+IHNjcmlwdC5zcmMgPT09IFlPVVRVQkVfSUZSQU1FX0FQSV9TUkMpXG5cbiAgICAvLyBJZiBBUEkgPHNjcmlwdD4gdGFnIGlzIG5vdCBwcmVzZW50IGluIHRoZSBwYWdlLCBpbmplY3QgaXQuIEVuc3VyZXMgdGhhdFxuICAgIC8vIGlmIHVzZXIgaW5jbHVkZXMgYSBoYXJkY29kZWQgPHNjcmlwdD4gdGFnIGluIEhUTUwgZm9yIHBlcmZvcm1hbmNlLCBhbm90aGVyXG4gICAgLy8gb25lIHdpbGwgbm90IGJlIGFkZGVkXG4gICAgaWYgKCFpc0xvYWRpbmcpIHtcbiAgICAgIGxvYWRTY3JpcHQoWU9VVFVCRV9JRlJBTUVfQVBJX1NSQykuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgd2hpbGUgKGxvYWRJZnJhbWVBUElDYWxsYmFja3MubGVuZ3RoKSB7XG4gICAgICAgICAgY29uc3QgbG9hZENiID0gbG9hZElmcmFtZUFQSUNhbGxiYWNrcy5zaGlmdCgpXG4gICAgICAgICAgbG9hZENiKGVycilcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBJZiByZWFkeSBmdW5jdGlvbiBpcyBub3QgcHJlc2VudCwgY3JlYXRlIGl0XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cub25Zb3VUdWJlSWZyYW1lQVBJUmVhZHkgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHdpbmRvdy5vbllvdVR1YmVJZnJhbWVBUElSZWFkeSA9ICgpID0+IHtcbiAgICAgICAgd2hpbGUgKGxvYWRJZnJhbWVBUElDYWxsYmFja3MubGVuZ3RoKSB7XG4gICAgICAgICAgY29uc3QgbG9hZENiID0gbG9hZElmcmFtZUFQSUNhbGxiYWNrcy5zaGlmdCgpXG4gICAgICAgICAgbG9hZENiKG51bGwsIHdpbmRvdy5ZVClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9jcmVhdGVQbGF5ZXIgKHZpZGVvSWQpIHtcbiAgICBpZiAodGhpcy5kZXN0cm95ZWQpIHJldHVyblxuXG4gICAgY29uc3Qgb3B0cyA9IHRoaXMuX29wdHNcblxuICAgIHRoaXMuX3BsYXllciA9IG5ldyB0aGlzLl9hcGkuUGxheWVyKHRoaXMuX2lkLCB7XG4gICAgICB3aWR0aDogb3B0cy53aWR0aCxcbiAgICAgIGhlaWdodDogb3B0cy5oZWlnaHQsXG4gICAgICB2aWRlb0lkOiB2aWRlb0lkLFxuICAgICAgcGxheWVyVmFyczoge1xuICAgICAgICAvLyBUaGlzIHBhcmFtZXRlciBzcGVjaWZpZXMgd2hldGhlciB0aGUgaW5pdGlhbCB2aWRlbyB3aWxsIGF1dG9tYXRpY2FsbHlcbiAgICAgICAgLy8gc3RhcnQgdG8gcGxheSB3aGVuIHRoZSBwbGF5ZXIgbG9hZHMuIFN1cHBvcnRlZCB2YWx1ZXMgYXJlIDAgb3IgMS4gVGhlXG4gICAgICAgIC8vIGRlZmF1bHQgdmFsdWUgaXMgMC5cbiAgICAgICAgYXV0b3BsYXk6IG9wdHMuYXV0b3BsYXkgPyAxIDogMCxcblxuICAgICAgICAvLyBTZXR0aW5nIHRoZSBwYXJhbWV0ZXIncyB2YWx1ZSB0byAxIGNhdXNlcyBjbG9zZWQgY2FwdGlvbnMgdG8gYmUgc2hvd25cbiAgICAgICAgLy8gYnkgZGVmYXVsdCwgZXZlbiBpZiB0aGUgdXNlciBoYXMgdHVybmVkIGNhcHRpb25zIG9mZi4gVGhlIGRlZmF1bHRcbiAgICAgICAgLy8gYmVoYXZpb3IgaXMgYmFzZWQgb24gdXNlciBwcmVmZXJlbmNlLlxuICAgICAgICBjY19sb2FkX3BvbGljeTogb3B0cy5jYXB0aW9ucyAhPSBudWxsXG4gICAgICAgICAgPyBvcHRzLmNhcHRpb25zICE9PSBmYWxzZSA/IDEgOiAwXG4gICAgICAgICAgOiB1bmRlZmluZWQsIC8vIGRlZmF1bHQgdG8gbm90IHNldHRpbmcgdGhpcyBvcHRpb25cblxuICAgICAgICAvLyBTZXRzIHRoZSBwbGF5ZXIncyBpbnRlcmZhY2UgbGFuZ3VhZ2UuIFRoZSBwYXJhbWV0ZXIgdmFsdWUgaXMgYW4gSVNPXG4gICAgICAgIC8vIDYzOS0xIHR3by1sZXR0ZXIgbGFuZ3VhZ2UgY29kZSBvciBhIGZ1bGx5IHNwZWNpZmllZCBsb2NhbGUuIEZvclxuICAgICAgICAvLyBleGFtcGxlLCBmciBhbmQgZnItY2EgYXJlIGJvdGggdmFsaWQgdmFsdWVzLiBPdGhlciBsYW5ndWFnZSBpbnB1dFxuICAgICAgICAvLyBjb2Rlcywgc3VjaCBhcyBJRVRGIGxhbmd1YWdlIHRhZ3MgKEJDUCA0NykgbWlnaHQgYWxzbyBiZSBoYW5kbGVkXG4gICAgICAgIC8vIHByb3Blcmx5LlxuICAgICAgICBobDogKG9wdHMuY2FwdGlvbnMgIT0gbnVsbCAmJiBvcHRzLmNhcHRpb25zICE9PSBmYWxzZSlcbiAgICAgICAgICA/IG9wdHMuY2FwdGlvbnNcbiAgICAgICAgICA6IHVuZGVmaW5lZCwgLy8gZGVmYXVsdCB0byBub3Qgc2V0dGluZyB0aGlzIG9wdGlvblxuXG4gICAgICAgIC8vIFRoaXMgcGFyYW1ldGVyIHNwZWNpZmllcyB0aGUgZGVmYXVsdCBsYW5ndWFnZSB0aGF0IHRoZSBwbGF5ZXIgd2lsbFxuICAgICAgICAvLyB1c2UgdG8gZGlzcGxheSBjYXB0aW9ucy4gU2V0IHRoZSBwYXJhbWV0ZXIncyB2YWx1ZSB0byBhbiBJU08gNjM5LTFcbiAgICAgICAgLy8gdHdvLWxldHRlciBsYW5ndWFnZSBjb2RlLlxuICAgICAgICBjY19sYW5nX3ByZWY6IChvcHRzLmNhcHRpb25zICE9IG51bGwgJiYgb3B0cy5jYXB0aW9ucyAhPT0gZmFsc2UpXG4gICAgICAgICAgPyBvcHRzLmNhcHRpb25zXG4gICAgICAgICAgOiB1bmRlZmluZWQsIC8vIGRlZmF1bHQgdG8gbm90IHNldHRpbmcgdGhpcyBvcHRpb25cblxuICAgICAgICAvLyBUaGlzIHBhcmFtZXRlciBpbmRpY2F0ZXMgd2hldGhlciB0aGUgdmlkZW8gcGxheWVyIGNvbnRyb2xzIGFyZVxuICAgICAgICAvLyBkaXNwbGF5ZWQuIEZvciBJRnJhbWUgZW1iZWRzIHRoYXQgbG9hZCBhIEZsYXNoIHBsYXllciwgaXQgYWxzbyBkZWZpbmVzXG4gICAgICAgIC8vIHdoZW4gdGhlIGNvbnRyb2xzIGRpc3BsYXkgaW4gdGhlIHBsYXllciBhcyB3ZWxsIGFzIHdoZW4gdGhlIHBsYXllclxuICAgICAgICAvLyB3aWxsIGxvYWQuIFN1cHBvcnRlZCB2YWx1ZXMgYXJlOlxuICAgICAgICAvLyAgIC0gY29udHJvbHM9MCDigJMgUGxheWVyIGNvbnRyb2xzIGRvIG5vdCBkaXNwbGF5IGluIHRoZSBwbGF5ZXIuIEZvclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgIElGcmFtZSBlbWJlZHMsIHRoZSBGbGFzaCBwbGF5ZXIgbG9hZHMgaW1tZWRpYXRlbHkuXG4gICAgICAgIC8vICAgLSBjb250cm9scz0xIOKAkyAoZGVmYXVsdCkgUGxheWVyIGNvbnRyb2xzIGRpc3BsYXkgaW4gdGhlIHBsYXllci4gRm9yXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgSUZyYW1lIGVtYmVkcywgdGhlIGNvbnRyb2xzIGRpc3BsYXkgaW1tZWRpYXRlbHkgYW5kXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgdGhlIEZsYXNoIHBsYXllciBhbHNvIGxvYWRzIGltbWVkaWF0ZWx5LlxuICAgICAgICAvLyAgIC0gY29udHJvbHM9MiDigJMgUGxheWVyIGNvbnRyb2xzIGRpc3BsYXkgaW4gdGhlIHBsYXllci4gRm9yIElGcmFtZVxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgIGVtYmVkcywgdGhlIGNvbnRyb2xzIGRpc3BsYXkgYW5kIHRoZSBGbGFzaCBwbGF5ZXJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICBsb2FkcyBhZnRlciB0aGUgdXNlciBpbml0aWF0ZXMgdGhlIHZpZGVvIHBsYXliYWNrLlxuICAgICAgICBjb250cm9sczogb3B0cy5jb250cm9scyA/IDIgOiAwLFxuXG4gICAgICAgIC8vIFNldHRpbmcgdGhlIHBhcmFtZXRlcidzIHZhbHVlIHRvIDEgY2F1c2VzIHRoZSBwbGF5ZXIgdG8gbm90IHJlc3BvbmQgdG9cbiAgICAgICAgLy8ga2V5Ym9hcmQgY29udHJvbHMuIFRoZSBkZWZhdWx0IHZhbHVlIGlzIDAsIHdoaWNoIG1lYW5zIHRoYXQga2V5Ym9hcmRcbiAgICAgICAgLy8gY29udHJvbHMgYXJlIGVuYWJsZWQuXG4gICAgICAgIGRpc2FibGVrYjogb3B0cy5rZXlib2FyZCA/IDAgOiAxLFxuXG4gICAgICAgIC8vIFNldHRpbmcgdGhlIHBhcmFtZXRlcidzIHZhbHVlIHRvIDEgZW5hYmxlcyB0aGUgcGxheWVyIHRvIGJlXG4gICAgICAgIC8vIGNvbnRyb2xsZWQgdmlhIElGcmFtZSBvciBKYXZhU2NyaXB0IFBsYXllciBBUEkgY2FsbHMuIFRoZSBkZWZhdWx0XG4gICAgICAgIC8vIHZhbHVlIGlzIDAsIHdoaWNoIG1lYW5zIHRoYXQgdGhlIHBsYXllciBjYW5ub3QgYmUgY29udHJvbGxlZCB1c2luZ1xuICAgICAgICAvLyB0aG9zZSBBUElzLlxuICAgICAgICBlbmFibGVqc2FwaTogMSxcblxuICAgICAgICAvLyBTZXR0aW5nIHRoaXMgcGFyYW1ldGVyIHRvIDAgcHJldmVudHMgdGhlIGZ1bGxzY3JlZW4gYnV0dG9uIGZyb21cbiAgICAgICAgLy8gZGlzcGxheWluZyBpbiB0aGUgcGxheWVyLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyAxLCB3aGljaCBjYXVzZXMgdGhlXG4gICAgICAgIC8vIGZ1bGxzY3JlZW4gYnV0dG9uIHRvIGRpc3BsYXkuXG4gICAgICAgIGZzOiBvcHRzLmZ1bGxzY3JlZW4gPyAxIDogMCxcblxuICAgICAgICAvLyBTZXR0aW5nIHRoZSBwYXJhbWV0ZXIncyB2YWx1ZSB0byAxIGNhdXNlcyB2aWRlbyBhbm5vdGF0aW9ucyB0byBiZVxuICAgICAgICAvLyBzaG93biBieSBkZWZhdWx0LCB3aGVyZWFzIHNldHRpbmcgdG8gMyBjYXVzZXMgdmlkZW8gYW5ub3RhdGlvbnMgdG8gbm90XG4gICAgICAgIC8vIGJlIHNob3duIGJ5IGRlZmF1bHQuIFRoZSBkZWZhdWx0IHZhbHVlIGlzIDEuXG4gICAgICAgIGl2X2xvYWRfcG9saWN5OiBvcHRzLmFubm90YXRpb25zID8gMSA6IDMsXG5cbiAgICAgICAgLy8gVGhpcyBwYXJhbWV0ZXIgbGV0cyB5b3UgdXNlIGEgWW91VHViZSBwbGF5ZXIgdGhhdCBkb2VzIG5vdCBzaG93IGFcbiAgICAgICAgLy8gWW91VHViZSBsb2dvLiBTZXQgdGhlIHBhcmFtZXRlciB2YWx1ZSB0byAxIHRvIHByZXZlbnQgdGhlIFlvdVR1YmUgbG9nb1xuICAgICAgICAvLyBmcm9tIGRpc3BsYXlpbmcgaW4gdGhlIGNvbnRyb2wgYmFyLiBOb3RlIHRoYXQgYSBzbWFsbCBZb3VUdWJlIHRleHRcbiAgICAgICAgLy8gbGFiZWwgd2lsbCBzdGlsbCBkaXNwbGF5IGluIHRoZSB1cHBlci1yaWdodCBjb3JuZXIgb2YgYSBwYXVzZWQgdmlkZW9cbiAgICAgICAgLy8gd2hlbiB0aGUgdXNlcidzIG1vdXNlIHBvaW50ZXIgaG92ZXJzIG92ZXIgdGhlIHBsYXllci5cbiAgICAgICAgbW9kZXN0YnJhbmRpbmc6IG9wdHMubW9kZXN0QnJhbmRpbmcgPyAxIDogMCxcblxuICAgICAgICAvLyBUaGlzIHBhcmFtZXRlciBwcm92aWRlcyBhbiBleHRyYSBzZWN1cml0eSBtZWFzdXJlIGZvciB0aGUgSUZyYW1lIEFQSVxuICAgICAgICAvLyBhbmQgaXMgb25seSBzdXBwb3J0ZWQgZm9yIElGcmFtZSBlbWJlZHMuIElmIHlvdSBhcmUgdXNpbmcgdGhlIElGcmFtZVxuICAgICAgICAvLyBBUEksIHdoaWNoIG1lYW5zIHlvdSBhcmUgc2V0dGluZyB0aGUgZW5hYmxlanNhcGkgcGFyYW1ldGVyIHZhbHVlIHRvIDEsXG4gICAgICAgIC8vIHlvdSBzaG91bGQgYWx3YXlzIHNwZWNpZnkgeW91ciBkb21haW4gYXMgdGhlIG9yaWdpbiBwYXJhbWV0ZXIgdmFsdWUuXG4gICAgICAgIG9yaWdpbjogd2luZG93LmxvY2F0aW9uLm9yaWdpbixcblxuICAgICAgICAvLyBUaGlzIHBhcmFtZXRlciBjb250cm9scyB3aGV0aGVyIHZpZGVvcyBwbGF5IGlubGluZSBvciBmdWxsc2NyZWVuIGluIGFuXG4gICAgICAgIC8vIEhUTUw1IHBsYXllciBvbiBpT1MuIFZhbGlkIHZhbHVlcyBhcmU6XG4gICAgICAgIC8vICAgLSAwOiBUaGlzIHZhbHVlIGNhdXNlcyBmdWxsc2NyZWVuIHBsYXliYWNrLiBUaGlzIGlzIGN1cnJlbnRseSB0aGVcbiAgICAgICAgLy8gICAgICAgIGRlZmF1bHQgdmFsdWUsIHRob3VnaCB0aGUgZGVmYXVsdCBpcyBzdWJqZWN0IHRvIGNoYW5nZS5cbiAgICAgICAgLy8gICAtIDE6IFRoaXMgdmFsdWUgY2F1c2VzIGlubGluZSBwbGF5YmFjayBmb3IgVUlXZWJWaWV3cyBjcmVhdGVkIHdpdGhcbiAgICAgICAgLy8gICAgICAgIHRoZSBhbGxvd3NJbmxpbmVNZWRpYVBsYXliYWNrIHByb3BlcnR5IHNldCB0byBUUlVFLlxuICAgICAgICBwbGF5c2lubGluZTogb3B0cy5wbGF5c0lubGluZSA/IDEgOiAwLFxuXG4gICAgICAgIC8vIFRoaXMgcGFyYW1ldGVyIGluZGljYXRlcyB3aGV0aGVyIHRoZSBwbGF5ZXIgc2hvdWxkIHNob3cgcmVsYXRlZFxuICAgICAgICAvLyB2aWRlb3MgZnJvbSB0aGUgc2FtZSBjaGFubmVsICgwKSBvciBmcm9tIGFueSBjaGFubmVsICgxKSB3aGVuXG4gICAgICAgIC8vIHBsYXliYWNrIG9mIHRoZSB2aWRlbyBlbmRzLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyAxLlxuICAgICAgICByZWw6IG9wdHMucmVsYXRlZCA/IDEgOiAwLFxuXG4gICAgICAgIC8vIChOb3QgcGFydCBvZiBkb2N1bWVudGVkIEFQSSkgQWxsb3cgaHRtbCBlbGVtZW50cyB3aXRoIGhpZ2hlciB6LWluZGV4XG4gICAgICAgIC8vIHRvIGJlIHNob3duIG9uIHRvcCBvZiB0aGUgWW91VHViZSBwbGF5ZXIuXG4gICAgICAgIHdtb2RlOiAnb3BhcXVlJ1xuICAgICAgfSxcbiAgICAgIGV2ZW50czoge1xuICAgICAgICBvblJlYWR5OiAoKSA9PiB0aGlzLl9vblJlYWR5KHZpZGVvSWQpLFxuICAgICAgICBvblN0YXRlQ2hhbmdlOiAoZGF0YSkgPT4gdGhpcy5fb25TdGF0ZUNoYW5nZShkYXRhKSxcbiAgICAgICAgb25QbGF5YmFja1F1YWxpdHlDaGFuZ2U6IChkYXRhKSA9PiB0aGlzLl9vblBsYXliYWNrUXVhbGl0eUNoYW5nZShkYXRhKSxcbiAgICAgICAgb25QbGF5YmFja1JhdGVDaGFuZ2U6IChkYXRhKSA9PiB0aGlzLl9vblBsYXliYWNrUmF0ZUNoYW5nZShkYXRhKSxcbiAgICAgICAgb25FcnJvcjogKGRhdGEpID0+IHRoaXMuX29uRXJyb3IoZGF0YSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgZXZlbnQgZmlyZXMgd2hlbiB0aGUgcGxheWVyIGhhcyBmaW5pc2hlZCBsb2FkaW5nIGFuZCBpcyByZWFkeSB0byBiZWdpblxuICAgKiByZWNlaXZpbmcgQVBJIGNhbGxzLlxuICAgKi9cbiAgX29uUmVhZHkgKHZpZGVvSWQpIHtcbiAgICBpZiAodGhpcy5kZXN0cm95ZWQpIHJldHVyblxuXG4gICAgdGhpcy5fcmVhZHkgPSB0cnVlXG5cbiAgICAvLyBPbmNlIHRoZSBwbGF5ZXIgaXMgcmVhZHksIGFsd2F5cyBjYWxsIGBsb2FkKHZpZGVvSWQsIFthdXRvcGxheV0pYCB0byBoYW5kbGVcbiAgICAvLyB0aGVzZSBwb3NzaWJsZSBjYXNlczpcbiAgICAvL1xuICAgIC8vICAgMS4gYGxvYWQodmlkZW9JZCwgdHJ1ZSlgIHdhcyBjYWxsZWQgYmVmb3JlIHRoZSBwbGF5ZXIgd2FzIHJlYWR5LiBFbnN1cmUgdGhhdFxuICAgIC8vICAgICAgdGhlIHNlbGVjdGVkIHZpZGVvIHN0YXJ0cyB0byBwbGF5LlxuICAgIC8vXG4gICAgLy8gICAyLiBgbG9hZCh2aWRlb0lkLCBmYWxzZSlgIHdhcyBjYWxsZWQgYmVmb3JlIHRoZSBwbGF5ZXIgd2FzIHJlYWR5LiBOb3cgdGhlXG4gICAgLy8gICAgICBwbGF5ZXIgaXMgcmVhZHkgYW5kIHRoZXJlJ3Mgbm90aGluZyB0byBkby5cbiAgICAvL1xuICAgIC8vICAgMy4gYGxvYWQodmlkZW9JZCwgW2F1dG9wbGF5XSlgIHdhcyBjYWxsZWQgbXVsdGlwbGUgdGltZXMgYmVmb3JlIHRoZSBwbGF5ZXJcbiAgICAvLyAgICAgIHdhcyByZWFkeS4gVGhlcmVmb3JlLCB0aGUgcGxheWVyIHdhcyBpbml0aWFsaXplZCB3aXRoIHRoZSB3cm9uZyB2aWRlb0lkLFxuICAgIC8vICAgICAgc28gbG9hZCB0aGUgbGF0ZXN0IHZpZGVvSWQgYW5kIHBvdGVudGlhbGx5IGF1dG9wbGF5IGl0LlxuICAgIHRoaXMubG9hZCh0aGlzLnZpZGVvSWQsIHRoaXMuX2F1dG9wbGF5KVxuXG4gICAgdGhpcy5fZmx1c2hRdWV1ZSgpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gdGhlIHBsYXllcidzIHN0YXRlIGNoYW5nZXMuIFdlIGVtaXQgZnJpZW5kbHkgZXZlbnRzIHNvIHRoZSB1c2VyXG4gICAqIGRvZXNuJ3QgbmVlZCB0byB1c2UgWW91VHViZSdzIFlULlBsYXllclN0YXRlLiogZXZlbnQgY29uc3RhbnRzLlxuICAgKi9cbiAgX29uU3RhdGVDaGFuZ2UgKGRhdGEpIHtcbiAgICBpZiAodGhpcy5kZXN0cm95ZWQpIHJldHVyblxuXG4gICAgY29uc3Qgc3RhdGUgPSBZT1VUVUJFX1NUQVRFU1tkYXRhLmRhdGFdXG5cbiAgICBpZiAoc3RhdGUpIHtcbiAgICAgIC8vIFNlbmQgYSAndGltZXVwZGF0ZScgYW55dGltZSB0aGUgc3RhdGUgY2hhbmdlcy4gV2hlbiB0aGUgdmlkZW8gaGFsdHMgZm9yIGFueVxuICAgICAgLy8gcmVhc29uICgncGF1c2VkJywgJ2J1ZmZlcmluZycsIG9yICdlbmRlZCcpIG5vIGZ1cnRoZXIgJ3RpbWV1cGRhdGUnIGV2ZW50c1xuICAgICAgLy8gc2hvdWxkIGZpcmUgdW50aWwgdGhlIHZpZGVvIHVuaGFsdHMuXG4gICAgICBpZiAoWydwYXVzZWQnLCAnYnVmZmVyaW5nJywgJ2VuZGVkJ10uaW5jbHVkZXMoc3RhdGUpKSB0aGlzLl9vblRpbWV1cGRhdGUoKVxuXG4gICAgICB0aGlzLmVtaXQoc3RhdGUpXG5cbiAgICAgIC8vIFdoZW4gdGhlIHZpZGVvIGNoYW5nZXMgKCd1bnN0YXJ0ZWQnIG9yICdjdWVkJykgb3Igc3RhcnRzICgncGxheWluZycpIHRoZW4gYVxuICAgICAgLy8gJ3RpbWV1cGRhdGUnIHNob3VsZCBmb2xsb3cgYWZ0ZXJ3YXJkcyAobmV2ZXIgYmVmb3JlISkgdG8gcmVzZXQgdGhlIHRpbWUuXG4gICAgICBpZiAoWyd1bnN0YXJ0ZWQnLCAncGxheWluZycsICdjdWVkJ10uaW5jbHVkZXMoc3RhdGUpKSB0aGlzLl9vblRpbWV1cGRhdGUoKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VucmVjb2duaXplZCBzdGF0ZSBjaGFuZ2U6ICcgKyBkYXRhKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIGV2ZW50IGZpcmVzIHdoZW5ldmVyIHRoZSB2aWRlbyBwbGF5YmFjayBxdWFsaXR5IGNoYW5nZXMuIFBvc3NpYmxlXG4gICAqIHZhbHVlcyBhcmU6ICdzbWFsbCcsICdtZWRpdW0nLCAnbGFyZ2UnLCAnaGQ3MjAnLCAnaGQxMDgwJywgJ2hpZ2hyZXMnLlxuICAgKi9cbiAgX29uUGxheWJhY2tRdWFsaXR5Q2hhbmdlIChkYXRhKSB7XG4gICAgaWYgKHRoaXMuZGVzdHJveWVkKSByZXR1cm5cbiAgICB0aGlzLmVtaXQoJ3BsYXliYWNrUXVhbGl0eUNoYW5nZScsIGRhdGEuZGF0YSlcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIGV2ZW50IGZpcmVzIHdoZW5ldmVyIHRoZSB2aWRlbyBwbGF5YmFjayByYXRlIGNoYW5nZXMuXG4gICAqL1xuICBfb25QbGF5YmFja1JhdGVDaGFuZ2UgKGRhdGEpIHtcbiAgICBpZiAodGhpcy5kZXN0cm95ZWQpIHJldHVyblxuICAgIHRoaXMuZW1pdCgncGxheWJhY2tSYXRlQ2hhbmdlJywgZGF0YS5kYXRhKVxuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgZXZlbnQgZmlyZXMgaWYgYW4gZXJyb3Igb2NjdXJzIGluIHRoZSBwbGF5ZXIuXG4gICAqL1xuICBfb25FcnJvciAoZGF0YSkge1xuICAgIGlmICh0aGlzLmRlc3Ryb3llZCkgcmV0dXJuXG5cbiAgICBjb25zdCBjb2RlID0gZGF0YS5kYXRhXG5cbiAgICAvLyBUaGUgSFRNTDVfRVJST1IgZXJyb3Igb2NjdXJzIHdoZW4gdGhlIFlvdVR1YmUgcGxheWVyIG5lZWRzIHRvIHN3aXRjaCBmcm9tXG4gICAgLy8gSFRNTDUgdG8gRmxhc2ggdG8gc2hvdyBhbiBhZC4gSWdub3JlIGl0LlxuICAgIGlmIChjb2RlID09PSBZT1VUVUJFX0VSUk9SLkhUTUw1X0VSUk9SKSByZXR1cm5cblxuICAgIC8vIFRoZSByZW1haW5pbmcgZXJyb3IgdHlwZXMgb2NjdXIgd2hlbiB0aGUgWW91VHViZSBwbGF5ZXIgY2Fubm90IHBsYXkgdGhlXG4gICAgLy8gZ2l2ZW4gdmlkZW8uIFRoaXMgaXMgbm90IGEgZmF0YWwgZXJyb3IuIFJlcG9ydCBpdCBhcyB1bnBsYXlhYmxlIHNvIHRoZSB1c2VyXG4gICAgLy8gaGFzIGFuIG9wcG9ydHVuaXR5IHRvIHBsYXkgYW5vdGhlciB2aWRlby5cbiAgICBpZiAoY29kZSA9PT0gWU9VVFVCRV9FUlJPUi5VTlBMQVlBQkxFXzEgfHxcbiAgICAgICAgY29kZSA9PT0gWU9VVFVCRV9FUlJPUi5VTlBMQVlBQkxFXzIgfHxcbiAgICAgICAgY29kZSA9PT0gWU9VVFVCRV9FUlJPUi5OT1RfRk9VTkQgfHxcbiAgICAgICAgY29kZSA9PT0gWU9VVFVCRV9FUlJPUi5JTlZBTElEX1BBUkFNKSB7XG4gICAgICByZXR1cm4gdGhpcy5lbWl0KCd1bnBsYXlhYmxlJywgdGhpcy52aWRlb0lkKVxuICAgIH1cblxuICAgIC8vIFVuZXhwZWN0ZWQgZXJyb3IsIGRvZXMgbm90IG1hdGNoIGFueSBrbm93biB0eXBlXG4gICAgdGhpcy5fZGVzdHJveShuZXcgRXJyb3IoJ1lvdVR1YmUgUGxheWVyIEVycm9yLiBVbmtub3duIGVycm9yIGNvZGU6ICcgKyBjb2RlKSlcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIGV2ZW50IGZpcmVzIHdoZW4gdGhlIHRpbWUgaW5kaWNhdGVkIGJ5IHRoZSBgZ2V0Q3VycmVudFRpbWUoKWAgbWV0aG9kXG4gICAqIGhhcyBiZWVuIHVwZGF0ZWQuXG4gICAqL1xuICBfb25UaW1ldXBkYXRlICgpIHtcbiAgICB0aGlzLmVtaXQoJ3RpbWV1cGRhdGUnLCB0aGlzLmdldEN1cnJlbnRUaW1lKCkpXG4gIH1cblxuICBfc3RhcnRJbnRlcnZhbCAoKSB7XG4gICAgdGhpcy5faW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB0aGlzLl9vblRpbWV1cGRhdGUoKSwgdGhpcy5fb3B0cy50aW1ldXBkYXRlRnJlcXVlbmN5KVxuICB9XG5cbiAgX3N0b3BJbnRlcnZhbCAoKSB7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9pbnRlcnZhbClcbiAgICB0aGlzLl9pbnRlcnZhbCA9IG51bGxcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFlvdVR1YmVQbGF5ZXJcbiIsImltcG9ydCB7IFBsYXllciB9IGZyb20gJy4vY29tcG9uZW50cy9wbGF5ZXInO1xyXG5pbXBvcnQgeyBRdWV1ZSB9IGZyb20gJy4vY29tcG9uZW50cy9xdWV1ZSc7XHJcbmltcG9ydCB7IEdvb2dsZUF1dGhlbnRpY2F0aW9uIH0gZnJvbSAnLi9zZXJ2aWNlcy9nb29nbGUtYXV0aGVudGljYXRpb24nO1xyXG5pbXBvcnQgeyBTZWFyY2ggfSBmcm9tICcuL3NlcnZpY2VzL3NlYXJjaCc7XHJcbmltcG9ydCB7IFNvbmcgfSBmcm9tICcuL21vZGVscy9zb25nJztcclxuXHJcbmNvbnN0IHBsYXllciA9IFBsYXllci5nZXRJbnN0YW5jZSgnI3BsYXllcicpO1xyXG5cclxuLy9RdWV1ZS5xdWV1ZSgnRHlEZmdNT1VqQ0knKTtcclxuLyogUXVldWUucXVldWUoJ2tKUVA3a2l3NUZrJyk7XHJcblF1ZXVlLnF1ZXVlKCdzV0xRVkE5Tmw1cycpO1xyXG5RdWV1ZS5xdWV1ZSgnRWJJbGdENUluU2cnKTtcclxuUXVldWUucXVldWUoJ3RpeUx2bzI0QTJnJyk7XHJcblF1ZXVlLnF1ZXVlKCdfMXVHTmFFNnF2VScpOyAqL1xyXG5cclxucGxheWVyLnJlZ2lzdGVyRXZlbnRIYW5kbGVycygpO1xyXG5cclxuY29uc3Qgc2lnbkJ0bkhhbmRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWduaW4tYnRuJyk7IFxyXG5jb25zdCBzZWFyY2hGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1mb3JtJyk7XHJcbmNvbnN0IHNlYXJjaEJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtYmFyJyk7XHJcbmNvbnN0IHNlYXJjaEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtYnV0dG9uJyk7XHJcblxyXG5jb25zdCBjaGVja0lmQXV0aGVudGljYXRlZCA9ICgpOiB2b2lkID0+IHtcclxuICAgIGlmIChHb29nbGVBdXRoZW50aWNhdGlvbi5pc0F1dGhlbnRpY2F0ZWQoKSkge1xyXG4gICAgICAgIHNpZ25CdG5IYW5kbGU/LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgICAgIHNlYXJjaEZvcm0/LmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgc2VhcmNoQmFyPy5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1NlYXJjaCBzb25ncyBhbmQgYXJ0aXN0cycpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgc2lnbkJ0bkhhbmRsZT8uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICAgICAgc2VhcmNoRm9ybT8uY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQnKTtcclxuICAgIH1cclxufVxyXG5jaGVja0lmQXV0aGVudGljYXRlZCgpO1xyXG5zaWduQnRuSGFuZGxlPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIEdvb2dsZUF1dGhlbnRpY2F0aW9uLmF1dGhlbnRpY2F0ZSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIGNoZWNrSWZBdXRoZW50aWNhdGVkKCk7ICAgXHJcbiAgICB9KTtcclxufSk7XHJcblxyXG5jb25zdCB0ZW1wbGF0ZTogc3RyaW5nID0gYFxyXG48ZGl2IGNsYXNzPVwiY29sLXhzLTYgY29sLXNtLTQgY29sLW1kLTQgY29sLWxnLTNcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJpdGVtXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInBvcy1ybHRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW0tb3ZlcmxheSBiZy1ibGFjay1vcGFjaXR5XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VudGVyIHRleHQtY2VudGVyIHctZnVsbCBtLXQtblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWYgY2xhc3M9XCJwbGF5TGlua1wiIGRhdGEtYXR0cmlidXRlPVwie3tpZH19XCIgZGF0YS1hdHRyaWJ1dGUtYWN0aW9uPVwicGxheVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLTJ4IGZhLXBsYXktY2lyY2xlIHRleHQtd2hpdGUgbS1yLXNtXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmIGNsYXNzPVwicGxheUxpbmtcIiBkYXRhLWF0dHJpYnV0ZT1cInt7aWR9fVwiIGRhdGEtYXR0cmlidXRlLWFjdGlvbj1cInF1ZXVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtMnggZmEtYXJyb3ctYWx0LWNpcmNsZS1kb3duIHRleHQtd2hpdGVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwici0yeFwiPlxyXG4gICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImltZy1mbHVpZFwiIHNyYz1cInt7dGh1bWJuYWlsfX1cIi8+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwLTIgdGV4dC1jZW50ZXIgdGV4dC1tdXRlZFwiPlxyXG4gICAgICAgICAgICB7e3RpdGxlfX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuYDtcclxuc2VhcmNoQnRuPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHNlYXJjaFRlcm0gPSAoPEhUTUxJbnB1dEVsZW1lbnQ+c2VhcmNoQmFyKT8udmFsdWU7XHJcbiAgICBpZiAoc2VhcmNoVGVybSkge1xyXG4gICAgICAgIFNlYXJjaC5zZWFyY2goc2VhcmNoVGVybSkudGhlbigocmVzcG9uc2U6IEFycmF5PFNvbmc+KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlYXJjaFJlc3VsdERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtcmVzdWx0cycpO1xyXG4gICAgICAgICAgICBpZiAoc2VhcmNoUmVzdWx0RGl2KSB7XHJcbiAgICAgICAgICAgICAgICBzZWFyY2hSZXN1bHREaXYuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgICAgICAgICBsZXQgc29uZzogU29uZztcclxuICAgICAgICAgICAgICAgIGZvciAoc29uZyBvZiByZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBmaWxsZWRUZW1wbGF0ZSA9IHRlbXBsYXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbGxlZFRlbXBsYXRlID0gZmlsbGVkVGVtcGxhdGUucmVwbGFjZSgne3t0aHVtYm5haWx9fScsIHNvbmcuZ2V0VGh1bWJuYWlsKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbGxlZFRlbXBsYXRlID0gZmlsbGVkVGVtcGxhdGUucmVwbGFjZSgne3t0aXRsZX19Jywgc29uZy5nZXRUaXRsZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICBmaWxsZWRUZW1wbGF0ZSA9IGZpbGxlZFRlbXBsYXRlLnJlcGxhY2UoL3t7aWR9fS9nLCBzb25nLmdldElkKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaFJlc3VsdERpdi5pbm5lckhUTUwgPSBzZWFyY2hSZXN1bHREaXY/LmlubmVySFRNTCArIGZpbGxlZFRlbXBsYXRlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncGxheUxpbmsnKSkuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXR0cmlidXRlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFjdGlvbiA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWF0dHJpYnV0ZS1hY3Rpb24nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzb25nID0gU29uZy5nZXRTb25nRnJvbUxpc3QocmVzcG9uc2UsIGlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzb25nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFjdGlvbiA9PT0gJ3BsYXknKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllci5xdWV1ZUFuZFBsYXkoc29uZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBRdWV1ZS5xdWV1ZShzb25nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coUXVldWUuZ2V0Q3VycmVudFF1ZXVlKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0ludmFsaWQgc29uZyBJRCA6ICcsIGlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSk7XHJcbiIsImltcG9ydCBZb3VUdWJlUGxheWVyIGZyb20gJ3l0LXBsYXllcic7XHJcblxyXG5pbXBvcnQgeyBRdWV1ZSB9IGZyb20gJy4vcXVldWUnO1xyXG5pbXBvcnQgeyBTb25nIH0gZnJvbSAnLi4vbW9kZWxzL3NvbmcnO1xyXG5pbXBvcnQgeyBQcm9ncmVzc0JhciB9IGZyb20gJy4vcHJvZ2Vzcy1iYXInO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBsYXllciBleHRlbmRzIFlvdVR1YmVQbGF5ZXIge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcGxheWVyOiBQbGF5ZXI7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBfaXNQbGF5aW5nOiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2N1cnJlbnRUcmFja0lkOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIHByb2dyZXNzOiBQcm9ncmVzc0JhciB8IG51bGwgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoZG9tRWxJRDogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIoZG9tRWxJRCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldEluc3RhbmNlKGRvbUVsSUQ6IHN0cmluZyk6IFBsYXllciB7XHJcbiAgICAgICAgaWYgKCFQbGF5ZXIucGxheWVyKSB7XHJcbiAgICAgICAgICAgIFBsYXllci5wbGF5ZXIgPSBuZXcgUGxheWVyKGRvbUVsSUQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gUGxheWVyLnBsYXllcjtcclxuICAgIH07XHJcblxyXG4gICAgcHJpdmF0ZSBsb2FkVHJhY2sodHJhY2tJZDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgUGxheWVyLl9jdXJyZW50VHJhY2tJZCA9IHRyYWNrSWQ7XHJcbiAgICAgICAgUGxheWVyLnBsYXllci5sb2FkKHRyYWNrSWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHBsYXlUcmFjaygpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIVBsYXllci5fY3VycmVudFRyYWNrSWQpIHtcclxuICAgICAgICAgICAgbGV0IHRyYWNrID0gUXVldWUubmV4dCgpO1xyXG4gICAgICAgICAgICBpZiAodHJhY2spIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZFRyYWNrKHRyYWNrLmdldElkKCkpO1xyXG4gICAgICAgICAgICAgICAgUGxheWVyLl9pc1BsYXlpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGVQbGF5KCk7XHJcbiAgICAgICAgICAgICAgICBQbGF5ZXIucGxheWVyLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb2dyZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9ncmVzcy5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ05vIHRyYWNrcyB0byBwbGF5Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIFBsYXllci5faXNQbGF5aW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy50b2dnbGVQbGF5KCk7XHJcbiAgICAgICAgICAgIFBsYXllci5wbGF5ZXIucGxheSgpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9ncmVzcykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9ncmVzcy5zdGFydCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHF1ZXVlQW5kUGxheShzb25nOiBTb25nKTogdm9pZCB7XHJcbiAgICAgICAgUXVldWUucXVldWUoc29uZyk7XHJcbiAgICAgICAgaWYgKFBsYXllci5faXNQbGF5aW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGF1c2VUcmFjaygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxvYWRUcmFjayhzb25nLmdldElkKCkpO1xyXG4gICAgICAgIFF1ZXVlLnVwZGF0ZUN1cnJlbnRQbGF5aW5nVHJhY2soc29uZy5nZXRJZCgpKTtcclxuICAgICAgICBQbGF5ZXIuX2lzUGxheWluZyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy50b2dnbGVQbGF5KCk7XHJcbiAgICAgICAgUGxheWVyLnBsYXllci5wbGF5KCk7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvZ3Jlc3MpIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9ncmVzcy5zdGFydCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwYXVzZVRyYWNrKCk6IHZvaWQge1xyXG4gICAgICAgIFBsYXllci5faXNQbGF5aW5nID0gZmFsc2U7XHJcbiAgICAgICAgUGxheWVyLnBsYXllci5wYXVzZSgpO1xyXG4gICAgICAgIHRoaXMudG9nZ2xlUGxheSgpO1xyXG4gICAgICAgIGlmICh0aGlzLnByb2dyZXNzKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3Muc3RvcCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuZXh0VHJhY2soKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5wYXVzZVRyYWNrKCk7XHJcbiAgICAgICAgbGV0IG5leHRUcmFjayA9IFF1ZXVlLm5leHQoKTtcclxuICAgICAgICBpZiAobmV4dFRyYWNrKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZFRyYWNrKG5leHRUcmFjay5nZXRJZCgpKTtcclxuICAgICAgICAgICAgUGxheWVyLl9pc1BsYXlpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnRvZ2dsZVBsYXkoKTtcclxuICAgICAgICAgICAgUGxheWVyLnBsYXllci5wbGF5KCk7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3MgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcmV2aW91c1RyYWNrKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucGF1c2VUcmFjaygpO1xyXG4gICAgICAgIGxldCBwcmV2aW91c1RyYWNrID0gUXVldWUucHJldmlvdXMoKTtcclxuICAgICAgICBpZiAocHJldmlvdXNUcmFjaykge1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRUcmFjayhwcmV2aW91c1RyYWNrLmdldElkKCkpO1xyXG4gICAgICAgICAgICBQbGF5ZXIuX2lzUGxheWluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlUGxheSgpO1xyXG4gICAgICAgICAgICBQbGF5ZXIucGxheWVyLnBsYXkoKTtcclxuICAgICAgICAgICAgdGhpcy5wcm9ncmVzcyA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZVBsYXkoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKFBsYXllci5faXNQbGF5aW5nKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXVzZS1idXR0b24nKT8uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5LWJ1dHRvbicpPy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXVzZS1idXR0b24nKT8uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5LWJ1dHRvbicpPy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVUaXRsZSgpIHtcclxuICAgICAgICBsZXQgY3VycmVudFF1ZXVlID0gUXVldWUuZ2V0Q3VycmVudFF1ZXVlKCk7XHJcbiAgICAgICAgY29uc3Qgc29uZyA9IFNvbmcuZ2V0U29uZ0Zyb21MaXN0KGN1cnJlbnRRdWV1ZSwgUGxheWVyLl9jdXJyZW50VHJhY2tJZCk7XHJcbiAgICAgICAgY29uc3QgdGl0bGVEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKTtcclxuICAgICAgICBpZiAodGl0bGVEaXYgJiYgc29uZykge1xyXG4gICAgICAgICAgICB0aXRsZURpdi5pbm5lckhUTUwgPSBzb25nLmdldFRpdGxlKCk7ICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZWdpc3RlckV2ZW50SGFuZGxlcnMoKTogdm9pZCB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXktYnV0dG9uJyk/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUGxheWluZycpO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXlUcmFjaygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXVzZS1idXR0b24nKT8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdQYXVzZWQnKTtcclxuICAgICAgICAgICAgdGhpcy5wYXVzZVRyYWNrKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25leHQtYnV0dG9uJyk/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnTmV4dCB0cmFjaycpO1xyXG4gICAgICAgICAgICB0aGlzLm5leHRUcmFjaygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmV2aW91cy1idXR0b24nKT8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdQcmV2aW91cyB0cmFjaycpO1xyXG4gICAgICAgICAgICB0aGlzLnByZXZpb3VzVHJhY2soKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgUGxheWVyLnBsYXllci5vbigncGxheWluZycsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVUaXRsZSgpO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMucHJvZ3Jlc3MpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3MgPSBuZXcgUHJvZ3Jlc3NCYXIoUGxheWVyLnBsYXllci5nZXREdXJhdGlvbigpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3Muc3RhcnQoKTsgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuLyogZXhwb3J0IGNsYXNzIFBsYXllciB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBwbGF5ZXI6IFlULlBsYXllcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihkb21FbElkOiBzdHJpbmcsIGNvbmZpZ09iajogYW55KSB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldEluc3RhbmNlKGRvbUVsSWQ6IHN0cmluZyk6IFlULlBsYXllciB7XHJcbiAgICAgICAgaWYgKCFQbGF5ZXIucGxheWVyKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbmZpZ09iaiA9IHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogJzM5MCcsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogJzY0MCcsXHJcbiAgICAgICAgICAgICAgICBldmVudHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAvL29uUmVhZHk6IFBsYXllci5vblJlYWR5LFxyXG4gICAgICAgICAgICAgICAgICAgIC8vb25TdGF0ZUNoYW5nZTogUGxheWVyLm9uU3RhdGVDaGFuZ2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgUGxheWVyLnBsYXllciA9IG5ldyBZVC5QbGF5ZXIoZG9tRWxJZCwgY29uZmlnT2JqKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFBsYXllci5wbGF5ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZFRyYWNrKHZpZGVvSWQ6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIFBsYXllci5wbGF5ZXIubG9hZFZpZGVvQnlJZCh2aWRlb0lkKTtcclxuICAgIH1cclxuXHJcbiAgICBwbGF5VHJhY2soKTogdm9pZCB7XHJcbiAgICAgICAgUGxheWVyLnBsYXllci5wbGF5VmlkZW8oKTtcclxuICAgIH1cclxuXHJcbiAgICBwYXVzZVRyYWNrKCk6IHZvaWQge1xyXG4gICAgICAgIFBsYXllci5wbGF5ZXIucGF1c2VWaWRlbygpO1xyXG4gICAgfVxyXG4gICAgXHJcbn0gKi9cclxuXHJcbi8qIGltcG9ydCBZb3VUdWJlUGxheWVyIGZyb20gXCJ5dC1wbGF5ZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXIge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcGxheWVyOiBZb3VUdWJlUGxheWVyO1xyXG5cclxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZShkb21FbElkOiBzdHJpbmcpIDogWW91VHViZVBsYXllciB7XHJcbiAgICAgICAgaWYgKCFQbGF5ZXIucGxheWVyKSB7XHJcbiAgICAgICAgICAgIFBsYXllci5wbGF5ZXIgPSBuZXcgWW91VHViZVBsYXllcihkb21FbElkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFBsYXllci5wbGF5ZXI7XHJcbiAgICB9XHJcbn0gKi9cclxuIiwiZXhwb3J0IGNsYXNzIFByb2dyZXNzQmFyIHtcclxuICAgIHByaXZhdGUgdG90YWxUaW1lOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRQb3NpdGlvbjogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgdGljazogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSB0aW1lcjogYW55O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHRvdGFsVGltZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy50b3RhbFRpbWUgPSB0b3RhbFRpbWU7XHJcbiAgICAgICAgdGhpcy50aWNrID0gdGhpcy50b3RhbFRpbWUgLyAxMDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1cGRhdGUoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFBvc2l0aW9uIDwgMTAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2dyZXNzQmFyRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZ3Jlc3MtYmFyJyk7XHJcbiAgICAgICAgICAgIGlmIChwcm9ncmVzc0JhckVsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQb3NpdGlvbiA9IHRoaXMuY3VycmVudFBvc2l0aW9uICsgMC4xO1xyXG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3NCYXJFbC5zdHlsZS53aWR0aCA9IHRoaXMuY3VycmVudFBvc2l0aW9uICsgJyUnOyBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSgpOyBcclxuICAgICAgICB9LCAodGhpcy50aWNrICogMTAwKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RvcCgpOiB2b2lkIHtcclxuICAgICAgICBjbGVhckludGVydmFsKHRoaXMudGltZXIpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgU29uZyB9IGZyb20gXCIuLi9tb2RlbHMvc29uZ1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFF1ZXVlIHtcclxuICAgIHByaXZhdGUgc3RhdGljIF9xdWV1ZTogQXJyYXk8U29uZz4gPSBuZXcgQXJyYXk8U29uZz4oKTtcclxuICAgIHByaXZhdGUgc3RhdGljIF9jdXJyZW50VHJhY2sgPSAtMTtcclxuXHJcbiAgICBzdGF0aWMgcXVldWUoc29uZzogU29uZyk6IHZvaWQge1xyXG4gICAgICAgIFF1ZXVlLl9xdWV1ZS5wdXNoKHNvbmcpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBkZXF1ZXVlKCk6IFNvbmcgfCB1bmRlZmluZWQge1xyXG4gICAgICAgIHJldHVybiBRdWV1ZS5fcXVldWUuc2hpZnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbmV4dCgpOiBTb25nIHwgdW5kZWZpbmVkIHtcclxuICAgICAgICBpZiAoUXVldWUuX3F1ZXVlW1F1ZXVlLl9jdXJyZW50VHJhY2sgKyAxXSkge1xyXG4gICAgICAgICAgICByZXR1cm4gUXVldWUuX3F1ZXVlWysrUXVldWUuX2N1cnJlbnRUcmFja107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHByZXZpb3VzKCk6IFNvbmcgfCB1bmRlZmluZWQge1xyXG4gICAgICAgIGlmIChRdWV1ZS5fcXVldWVbUXVldWUuX2N1cnJlbnRUcmFjayAtIDFdKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBRdWV1ZS5fcXVldWVbLS1RdWV1ZS5fY3VycmVudFRyYWNrXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0Q3VycmVudFF1ZXVlKCk6IEFycmF5PFNvbmc+IHtcclxuICAgICAgICByZXR1cm4gUXVldWUuX3F1ZXVlO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyB1cGRhdGVDdXJyZW50UGxheWluZ1RyYWNrKHRyYWNrSWQ6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIFF1ZXVlLl9jdXJyZW50VHJhY2sgPSBRdWV1ZS5fcXVldWUuZmluZEluZGV4KHNvbmcgPT4gc29uZy5nZXRJZCgpID09PSB0cmFja0lkKTtcclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBTb25nIHtcclxuICAgIHByaXZhdGUgaWQ6IHN0cmluZztcclxuICAgIHByaXZhdGUgdGl0bGU6IHN0cmluZztcclxuICAgIHByaXZhdGUgZGVzY3JpcHRpb246IHN0cmluZztcclxuICAgIHByaXZhdGUgdGh1bWJuYWlsOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaWQ6IHN0cmluZywgdGl0bGU6IHN0cmluZywgZGVzY3JpcHRpb246IHN0cmluZywgdGh1bWJuYWlsOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgICAgICB0aGlzLnRodW1ibmFpbCA9IHRodW1ibmFpbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0SWQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0VGl0bGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50aXRsZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0RGVzY3JpcHRpb24oKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0VGh1bWJuYWlsKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGh1bWJuYWlsO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRTb25nRnJvbUxpc3QobGlzdDogQXJyYXk8U29uZz4sIGlkOiBzdHJpbmcpOiBTb25nIHwgbnVsbCB7XHJcbiAgICAgICAgY29uc3QgZmlsdGVyZWRMaXN0ID0gbGlzdC5maWx0ZXIoc29uZyA9PiBzb25nLmdldElkKCkgPT09IGlkKTtcclxuICAgICAgICByZXR1cm4gZmlsdGVyZWRMaXN0Lmxlbmd0aCA+IDAgPyBmaWx0ZXJlZExpc3RbMF06IG51bGw7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgR29vZ2xlQXV0aGVudGljYXRpb24ge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2lzQXV0aGVudGljYXRlZDogYm9vbGVhbiA9IHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdnb29nbGUtYXV0aGVudGljYXRlZCcpID09PSAndHJ1ZSc/IHRydWU6IGZhbHNlO1xyXG5cclxuICAgIHN0YXRpYyBpc0F1dGhlbnRpY2F0ZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIEdvb2dsZUF1dGhlbnRpY2F0aW9uLl9pc0F1dGhlbnRpY2F0ZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGF1dGhlbnRpY2F0ZSgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGdhcGkubG9hZCgnYXV0aDInLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgICAgICBnYXBpLmF1dGgyLmluaXQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGNsaWVudF9pZDogJzQ5NDYxNTQwMDI2Mi1mN200dXNjdDdwdGg2NGxybXVjNzZ2c2NjcDc2ZnUzYy5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSdcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2FwaS5hdXRoMi5nZXRBdXRoSW5zdGFuY2UoKS5zaWduSW4oe1xyXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlOiAnaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYXV0aC95b3V0dWJlLmZvcmNlLXNzbCdcclxuICAgICAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIEdvb2dsZUF1dGhlbnRpY2F0aW9uLl9pc0F1dGhlbnRpY2F0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdnb29nbGUtYXV0aGVudGljYXRlZCcsICd0cnVlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0F1dGhlbnRpY2F0ZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShHb29nbGVBdXRoZW50aWNhdGlvbi5sb2FkQ2xpZW50KCkpO1xyXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGxvYWRDbGllbnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgZ2FwaS5sb2FkKCdjbGllbnQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBnYXBpLmNsaWVudC5zZXRBcGlLZXkoJ0FJemFTeUREdmpCZWRyaExmMHJ0NjJja2hzMmZ3V3h0RUxjWWVVOCcpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoZ2FwaS5jbGllbnQubG9hZChcImh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2Rpc2NvdmVyeS92MS9hcGlzL3lvdXR1YmUvdjMvcmVzdFwiLCBcInYzXCIpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBHb29nbGVBdXRoZW50aWNhdGlvbiB9IGZyb20gJy4vZ29vZ2xlLWF1dGhlbnRpY2F0aW9uJztcclxuaW1wb3J0IHsgU29uZyB9IGZyb20gJy4uL21vZGVscy9zb25nJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTZWFyY2gge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgTUFYX1JFU1VMVFMgPSAxMjtcclxuXHJcbiAgICBzdGF0aWMgc2VhcmNoKHE6IHN0cmluZywgcGFydD86IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgZ2FwaS5sb2FkKCdjbGllbnQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgICAgIGlmICghZ2FwaS5jbGllbnQueW91dHViZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIEdvb2dsZUF1dGhlbnRpY2F0aW9uLmxvYWRDbGllbnQoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFNlYXJjaC5fc2VhcmNoKHEsIHBhcnQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2U6IEFycmF5PFNvbmc+KSA9PiByZXNvbHZlKFNlYXJjaC5fcHJvY2Vzc1Jlc3BvbnNlKHJlc3BvbnNlKSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTZWFyY2guX3NlYXJjaChxLCBwYXJ0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2U6IEFycmF5PFNvbmc+KSA9PiByZXNvbHZlKFNlYXJjaC5fcHJvY2Vzc1Jlc3BvbnNlKHJlc3BvbnNlKSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX3NlYXJjaChxOiBzdHJpbmcsIHBhcnQ/OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICByZXR1cm4gZ2FwaS5jbGllbnQueW91dHViZS5zZWFyY2gubGlzdCh7XHJcbiAgICAgICAgICAgIHBhcnQ6IHBhcnQgPyBwYXJ0IDogJ3NuaXBwZXQnLFxyXG4gICAgICAgICAgICBxOiBxLFxyXG4gICAgICAgICAgICB0eXBlOiAndmlkZW8nLFxyXG4gICAgICAgICAgICBtYXhSZXN1bHRzOiBTZWFyY2guTUFYX1JFU1VMVFNcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX3Byb2Nlc3NSZXNwb25zZShyZXNwb25zZTogYW55KTogT2JqZWN0IHtcclxuICAgICAgICBsZXQgcHJvY2Vzc2VkUmVzcG9uc2UgPSBuZXcgQXJyYXk8U29uZz4oKTtcclxuXHJcbiAgICAgICAgaWYgKCFyZXNwb25zZSB8fCByZXNwb25zZS5zdGF0dXMgIT09IDIwMCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge307XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyZXNwb25zZS5yZXN1bHQuaXRlbXMgJiYgcmVzcG9uc2UucmVzdWx0Lml0ZW1zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaXRlbSBvZiByZXNwb25zZS5yZXN1bHQuaXRlbXMpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgdGh1bWJuYWlsID0gJyc7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5zbmlwcGV0LnRodW1ibmFpbHMuaGlnaCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRodW1ibmFpbCA9IGl0ZW0uc25pcHBldC50aHVtYm5haWxzLmhpZ2gudXJsOyBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGl0ZW0uc25pcHBldC50aHVtYm5haWxzLm1lZGl1bSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRodW1ibmFpbCA9IGl0ZW0uc25pcHBldC50aHVtYm5haWxzLm1lZGl1bS51cmw7IFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGh1bWJuYWlsID0gaXRlbS5zbmlwcGV0LnRodW1ibmFpbHMuZGVmYXVsdC51cmw7IFxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc09iaiA9IG5ldyBTb25nKGl0ZW0uaWQudmlkZW9JZCwgaXRlbS5zbmlwcGV0LnRpdGxlLCBpdGVtLnNuaXBwZXQuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgdGh1bWJuYWlsKTtcclxuICAgICAgICAgICAgICAgIHByb2Nlc3NlZFJlc3BvbnNlLnB1c2gocmVzT2JqKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcHJvY2Vzc2VkUmVzcG9uc2U7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9