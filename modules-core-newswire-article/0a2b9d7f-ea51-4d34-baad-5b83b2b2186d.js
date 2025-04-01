! function() {
  try {
    var t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      e = (new Error).stack;
    e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "0a2b9d7f-ea51-4d34-baad-5b83b2b2186d", t._sentryDebugIdIdentifier = "sentry-dbid-0a2b9d7f-ea51-4d34-baad-5b83b2b2186d")
  } catch (t) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-newswire-article",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [4246], {
    13699: (t, e, r) => {
      "use strict";
      r.d(e, {
        $: () => i,
        V: () => a
      });
      var i = function() {},
        a = function() {}
    },
    28786: function(t, e, r) {
      ! function(t, e, r) {
        "use strict";

        function i(t) {
          return t && "object" == typeof t && "default" in t ? t : {
            default: t
          }
        }
        var a = i(e),
          s = i(r);

        function n(t, e) {
          var r = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(t);
            e && (i = i.filter((function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), r.push.apply(r, i)
          }
          return r
        }

        function o(t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2 ? n(Object(r), !0).forEach((function(e) {
              l(t, e, r[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : n(Object(r)).forEach((function(e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
            }))
          }
          return t
        }

        function l(t, e, r) {
          return (e = function(t) {
            var e = function(t, e) {
              if ("object" != typeof t || null === t) return t;
              var r = t[Symbol.toPrimitive];
              if (void 0 !== r) {
                var i = r.call(t, e || "default");
                if ("object" != typeof i) return i;
                throw new TypeError("@@toPrimitive must return a primitive value.")
              }
              return ("string" === e ? String : Number)(t)
            }(t, "string");
            return "symbol" == typeof e ? e : String(e)
          }(e)) in t ? Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : t[e] = r, t
        }

        function h(t, e) {
          if (null == t) return {};
          var r, i, a = function(t, e) {
            if (null == t) return {};
            var r, i, a = {},
              s = Object.keys(t);
            for (i = 0; i < s.length; i++) r = s[i], e.indexOf(r) >= 0 || (a[r] = t[r]);
            return a
          }(t, e);
          if (Object.getOwnPropertySymbols) {
            var s = Object.getOwnPropertySymbols(t);
            for (i = 0; i < s.length; i++) r = s[i], e.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(t, r) && (a[r] = t[r])
          }
          return a
        }

        function p(t, e) {
          return function(t) {
            if (Array.isArray(t)) return t
          }(t) || function(t, e) {
            var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (null != r) {
              var i, a, s, n, o = [],
                l = !0,
                h = !1;
              try {
                if (s = (r = r.call(t)).next, 0 === e) {
                  if (Object(r) !== r) return;
                  l = !1
                } else
                  for (; !(l = (i = s.call(r)).done) && (o.push(i.value), o.length !== e); l = !0);
              } catch (t) {
                h = !0, a = t
              } finally {
                try {
                  if (!l && null != r.return && (n = r.return(), Object(n) !== n)) return
                } finally {
                  if (h) throw a
                }
              }
              return o
            }
          }(t, e) || function(t, e) {
            if (t) {
              if ("string" == typeof t) return c(t, e);
              var r = Object.prototype.toString.call(t).slice(8, -1);
              return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? c(t, e) : void 0
            }
          }(t, e) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
          }()
        }

        function c(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var r = 0, i = new Array(e); r < e; r++) i[r] = t[r];
          return i
        }
        var f = ["animationData", "loop", "autoplay", "initialSegment", "onComplete", "onLoopComplete", "onEnterFrame", "onSegmentStart", "onConfigReady", "onDataReady", "onDataFailed", "onLoadedImages", "onDOMLoaded", "onDestroy", "lottieRef", "renderer", "name", "assetsPath", "rendererSettings"],
          u = function(t, e) {
            var i = t.animationData,
              n = t.loop,
              l = t.autoplay,
              c = t.initialSegment,
              u = t.onComplete,
              d = t.onLoopComplete,
              m = t.onEnterFrame,
              y = t.onSegmentStart,
              g = t.onConfigReady,
              v = t.onDataReady,
              b = t.onDataFailed,
              x = t.onLoadedImages,
              C = t.onDOMLoaded,
              A = t.onDestroy;
            t.lottieRef, t.renderer, t.name, t.assetsPath, t.rendererSettings;
            var _ = h(t, f),
              E = p(r.useState(!1), 2),
              S = E[0],
              P = E[1],
              T = r.useRef(),
              F = r.useRef(null);
            return r.useEffect((function() {
              var e = function() {
                var e, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (F.current) {
                  null === (e = T.current) || void 0 === e || e.destroy();
                  var i = o(o(o({}, t), r), {}, {
                    container: F.current
                  });
                  return T.current = a.default.loadAnimation(i), P(!!T.current),
                    function() {
                      var t;
                      null === (t = T.current) || void 0 === t || t.destroy(), T.current = void 0
                    }
                }
              }();
              return function() {
                return null == e ? void 0 : e()
              }
            }), [i, n]), r.useEffect((function() {
              T.current && (T.current.autoplay = !!l)
            }), [l]), r.useEffect((function() {
              T.current && (c ? Array.isArray(c) && c.length && ((T.current.currentRawFrame < c[0] || T.current.currentRawFrame > c[1]) && (T.current.currentRawFrame = c[0]), T.current.setSegment(c[0], c[1])) : T.current.resetSegments(!0))
            }), [c]), r.useEffect((function() {
              var t = [{
                name: "complete",
                handler: u
              }, {
                name: "loopComplete",
                handler: d
              }, {
                name: "enterFrame",
                handler: m
              }, {
                name: "segmentStart",
                handler: y
              }, {
                name: "config_ready",
                handler: g
              }, {
                name: "data_ready",
                handler: v
              }, {
                name: "data_failed",
                handler: b
              }, {
                name: "loaded_images",
                handler: x
              }, {
                name: "DOMLoaded",
                handler: C
              }, {
                name: "destroy",
                handler: A
              }].filter((function(t) {
                return null != t.handler
              }));
              if (t.length) {
                var e = t.map((function(t) {
                  var e;
                  return null === (e = T.current) || void 0 === e || e.addEventListener(t.name, t.handler),
                    function() {
                      var e;
                      null === (e = T.current) || void 0 === e || e.removeEventListener(t.name, t.handler)
                    }
                }));
                return function() {
                  e.forEach((function(t) {
                    return t()
                  }))
                }
              }
            }), [u, d, m, y, g, v, b, x, C, A]), {
              View: s.default.createElement("div", o({
                style: e,
                ref: F
              }, _)),
              play: function() {
                var t;
                null === (t = T.current) || void 0 === t || t.play()
              },
              stop: function() {
                var t;
                null === (t = T.current) || void 0 === t || t.stop()
              },
              pause: function() {
                var t;
                null === (t = T.current) || void 0 === t || t.pause()
              },
              setSpeed: function(t) {
                var e;
                null === (e = T.current) || void 0 === e || e.setSpeed(t)
              },
              goToAndStop: function(t, e) {
                var r;
                null === (r = T.current) || void 0 === r || r.goToAndStop(t, e)
              },
              goToAndPlay: function(t, e) {
                var r;
                null === (r = T.current) || void 0 === r || r.goToAndPlay(t, e)
              },
              setDirection: function(t) {
                var e;
                null === (e = T.current) || void 0 === e || e.setDirection(t)
              },
              playSegments: function(t, e) {
                var r;
                null === (r = T.current) || void 0 === r || r.playSegments(t, e)
              },
              setSubframe: function(t) {
                var e;
                null === (e = T.current) || void 0 === e || e.setSubframe(t)
              },
              getDuration: function(t) {
                var e;
                return null === (e = T.current) || void 0 === e ? void 0 : e.getDuration(t)
              },
              destroy: function() {
                var t;
                null === (t = T.current) || void 0 === t || t.destroy(), T.current = void 0
              },
              animationContainerRef: F,
              animationLoaded: S,
              animationItem: T.current
            }
          };
        var d = function(t) {
            var e = t.wrapperRef,
              i = t.animationItem,
              a = t.mode,
              s = t.actions;
            r.useEffect((function() {
              var t, r, n, o, l, h = e.current;
              if (h && i && s.length) {
                i.stop();
                switch (a) {
                  case "scroll":
                    return o = null, l = function() {
                        var t, e, r, a = (e = (t = h.getBoundingClientRect()).top, r = t.height, (window.innerHeight - e) / (window.innerHeight + r)),
                          n = s.find((function(t) {
                            var e = t.visibility;
                            return e && a >= e[0] && a <= e[1]
                          }));
                        if (n) {
                          if ("seek" === n.type && n.visibility && 2 === n.frames.length) {
                            var l = n.frames[0] + Math.ceil((a - n.visibility[0]) / (n.visibility[1] - n.visibility[0]) * n.frames[1]);
                            i.goToAndStop(l - i.firstFrame - 1, !0)
                          }
                          "loop" === n.type && (null === o || o !== n.frames || i.isPaused) && (i.playSegments(n.frames, !0), o = n.frames), "play" === n.type && i.isPaused && (i.resetSegments(!0), i.play()), "stop" === n.type && i.goToAndStop(n.frames[0] - i.firstFrame - 1, !0)
                        }
                      }, document.addEventListener("scroll", l),
                      function() {
                        document.removeEventListener("scroll", l)
                      };
                  case "cursor":
                    return t = function(t, e) {
                        var r, a, n, o, l = t,
                          p = e;
                        if (-1 !== l && -1 !== p) {
                          var c = (r = l, a = p, o = (n = h.getBoundingClientRect()).top, {
                            x: (r - n.left) / n.width,
                            y: (a - o) / n.height
                          });
                          l = c.x, p = c.y
                        }
                        var f = s.find((function(t) {
                          var e = t.position;
                          return e && Array.isArray(e.x) && Array.isArray(e.y) ? l >= e.x[0] && l <= e.x[1] && p >= e.y[0] && p <= e.y[1] : !(!e || Number.isNaN(e.x) || Number.isNaN(e.y)) && l === e.x && p === e.y
                        }));
                        if (f) {
                          if ("seek" === f.type && f.position && Array.isArray(f.position.x) && Array.isArray(f.position.y) && 2 === f.frames.length) {
                            var u = (l - f.position.x[0]) / (f.position.x[1] - f.position.x[0]),
                              d = (p - f.position.y[0]) / (f.position.y[1] - f.position.y[0]);
                            i.playSegments(f.frames, !0), i.goToAndStop(Math.ceil((u + d) / 2 * (f.frames[1] - f.frames[0])), !0)
                          }
                          "loop" === f.type && i.playSegments(f.frames, !0), "play" === f.type && (i.isPaused && i.resetSegments(!1), i.playSegments(f.frames)), "stop" === f.type && i.goToAndStop(f.frames[0], !0)
                        }
                      }, r = function(e) {
                        t(e.clientX, e.clientY)
                      }, n = function() {
                        t(-1, -1)
                      }, h.addEventListener("mousemove", r), h.addEventListener("mouseout", n),
                      function() {
                        h.removeEventListener("mousemove", r), h.removeEventListener("mouseout", n)
                      }
                }
              }
            }), [a, i])
          },
          m = function(t) {
            var e = t.actions,
              r = t.mode,
              i = t.lottieObj,
              a = i.animationItem,
              s = i.View,
              n = i.animationContainerRef;
            return d({
              actions: e,
              animationItem: a,
              mode: r,
              wrapperRef: n
            }), s
          },
          y = ["style", "interactivity"];
        Object.defineProperty(t, "LottiePlayer", {
          enumerable: !0,
          get: function() {
            return a.default
          }
        }), t.default = function(t) {
          var e, i, a, s = t.style,
            n = t.interactivity,
            o = h(t, y),
            l = u(o, s),
            p = l.View,
            c = l.play,
            f = l.stop,
            d = l.pause,
            g = l.setSpeed,
            v = l.goToAndStop,
            b = l.goToAndPlay,
            x = l.setDirection,
            C = l.playSegments,
            A = l.setSubframe,
            _ = l.getDuration,
            E = l.destroy,
            S = l.animationContainerRef,
            P = l.animationLoaded,
            T = l.animationItem;
          return r.useEffect((function() {
            t.lottieRef && (t.lottieRef.current = {
              play: c,
              stop: f,
              pause: d,
              setSpeed: g,
              goToAndPlay: b,
              goToAndStop: v,
              setDirection: x,
              playSegments: C,
              setSubframe: A,
              getDuration: _,
              destroy: E,
              animationContainerRef: S,
              animationLoaded: P,
              animationItem: T
            })
          }), [null === (e = t.lottieRef) || void 0 === e ? void 0 : e.current]), m({
            lottieObj: {
              View: p,
              play: c,
              stop: f,
              pause: d,
              setSpeed: g,
              goToAndStop: v,
              goToAndPlay: b,
              setDirection: x,
              playSegments: C,
              setSubframe: A,
              getDuration: _,
              destroy: E,
              animationContainerRef: S,
              animationLoaded: P,
              animationItem: T
            },
            actions: null !== (i = null == n ? void 0 : n.actions) && void 0 !== i ? i : [],
            mode: null !== (a = null == n ? void 0 : n.mode) && void 0 !== a ? a : "scroll"
          })
        }, t.useLottie = u, t.useLottieInteractivity = m, Object.defineProperty(t, "__esModule", {
          value: !0
        })
      }(e, r(84410), r(62229))
    },
    84410: function(module, exports, __webpack_require__) {
      var factory;
      "undefined" != typeof navigator && (factory = function() {
        "use strict";
        var svgNS = "http://www.w3.org/2000/svg",
          locationHref = "",
          _useWebWorker = !1,
          initialDefaultFrame = -999999,
          setWebWorker = function(t) {
            _useWebWorker = !!t
          },
          getWebWorker = function() {
            return _useWebWorker
          },
          setLocationHref = function(t) {
            locationHref = t
          },
          getLocationHref = function() {
            return locationHref
          };

        function createTag(t) {
          return document.createElement(t)
        }

        function extendPrototype(t, e) {
          var r, i, a = t.length;
          for (r = 0; r < a; r += 1)
            for (var s in i = t[r].prototype) Object.prototype.hasOwnProperty.call(i, s) && (e.prototype[s] = i[s])
        }

        function getDescriptor(t, e) {
          return Object.getOwnPropertyDescriptor(t, e)
        }

        function createProxyFunction(t) {
          function e() {}
          return e.prototype = t, e
        }
        var audioControllerFactory = function() {
            function t(t) {
              this.audios = [], this.audioFactory = t, this._volume = 1, this._isMuted = !1
            }
            return t.prototype = {
                addAudio: function(t) {
                  this.audios.push(t)
                },
                pause: function() {
                  var t, e = this.audios.length;
                  for (t = 0; t < e; t += 1) this.audios[t].pause()
                },
                resume: function() {
                  var t, e = this.audios.length;
                  for (t = 0; t < e; t += 1) this.audios[t].resume()
                },
                setRate: function(t) {
                  var e, r = this.audios.length;
                  for (e = 0; e < r; e += 1) this.audios[e].setRate(t)
                },
                createAudio: function(t) {
                  return this.audioFactory ? this.audioFactory(t) : window.Howl ? new window.Howl({
                    src: [t]
                  }) : {
                    isPlaying: !1,
                    play: function() {
                      this.isPlaying = !0
                    },
                    seek: function() {
                      this.isPlaying = !1
                    },
                    playing: function() {},
                    rate: function() {},
                    setVolume: function() {}
                  }
                },
                setAudioFactory: function(t) {
                  this.audioFactory = t
                },
                setVolume: function(t) {
                  this._volume = t, this._updateVolume()
                },
                mute: function() {
                  this._isMuted = !0, this._updateVolume()
                },
                unmute: function() {
                  this._isMuted = !1, this._updateVolume()
                },
                getVolume: function() {
                  return this._volume
                },
                _updateVolume: function() {
                  var t, e = this.audios.length;
                  for (t = 0; t < e; t += 1) this.audios[t].volume(this._volume * (this._isMuted ? 0 : 1))
                }
              },
              function() {
                return new t
              }
          }(),
          createTypedArray = function() {
            function t(t, e) {
              var r, i = 0,
                a = [];
              switch (t) {
                case "int16":
                case "uint8c":
                  r = 1;
                  break;
                default:
                  r = 1.1
              }
              for (i = 0; i < e; i += 1) a.push(r);
              return a
            }
            return "function" == typeof Uint8ClampedArray && "function" == typeof Float32Array ? function(e, r) {
              return "float32" === e ? new Float32Array(r) : "int16" === e ? new Int16Array(r) : "uint8c" === e ? new Uint8ClampedArray(r) : t(e, r)
            } : t
          }();

        function createSizedArray(t) {
          return Array.apply(null, {
            length: t
          })
        }

        function _typeof$6(t) {
          return _typeof$6 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
          } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
          }, _typeof$6(t)
        }
        var subframeEnabled = !0,
          expressionsPlugin = null,
          expressionsInterfaces = null,
          idPrefix$1 = "",
          isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
          _shouldRoundValues = !1,
          bmPow = Math.pow,
          bmSqrt = Math.sqrt,
          bmFloor = Math.floor,
          bmMax = Math.max,
          bmMin = Math.min,
          BMMath = {};

        function ProjectInterface$1() {
          return {}
        }! function() {
          var t, e = ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"],
            r = e.length;
          for (t = 0; t < r; t += 1) BMMath[e[t]] = Math[e[t]]
        }(), BMMath.random = Math.random, BMMath.abs = function(t) {
          if ("object" === _typeof$6(t) && t.length) {
            var e, r = createSizedArray(t.length),
              i = t.length;
            for (e = 0; e < i; e += 1) r[e] = Math.abs(t[e]);
            return r
          }
          return Math.abs(t)
        };
        var defaultCurveSegments = 150,
          degToRads = Math.PI / 180,
          roundCorner = .5519;

        function roundValues(t) {
          _shouldRoundValues = !!t
        }

        function bmRnd(t) {
          return _shouldRoundValues ? Math.round(t) : t
        }

        function styleDiv(t) {
          t.style.position = "absolute", t.style.top = 0, t.style.left = 0, t.style.display = "block", t.style.transformOrigin = "0 0", t.style.webkitTransformOrigin = "0 0", t.style.backfaceVisibility = "visible", t.style.webkitBackfaceVisibility = "visible", t.style.transformStyle = "preserve-3d", t.style.webkitTransformStyle = "preserve-3d", t.style.mozTransformStyle = "preserve-3d"
        }

        function BMEnterFrameEvent(t, e, r, i) {
          this.type = t, this.currentTime = e, this.totalTime = r, this.direction = i < 0 ? -1 : 1
        }

        function BMCompleteEvent(t, e) {
          this.type = t, this.direction = e < 0 ? -1 : 1
        }

        function BMCompleteLoopEvent(t, e, r, i) {
          this.type = t, this.currentLoop = r, this.totalLoops = e, this.direction = i < 0 ? -1 : 1
        }

        function BMSegmentStartEvent(t, e, r) {
          this.type = t, this.firstFrame = e, this.totalFrames = r
        }

        function BMDestroyEvent(t, e) {
          this.type = t, this.target = e
        }

        function BMRenderFrameErrorEvent(t, e) {
          this.type = "renderFrameError", this.nativeError = t, this.currentTime = e
        }

        function BMConfigErrorEvent(t) {
          this.type = "configError", this.nativeError = t
        }

        function BMAnimationConfigErrorEvent(t, e) {
          this.type = t, this.nativeError = e
        }
        var createElementID = (_count = 0, function() {
            return idPrefix$1 + "__lottie_element_" + (_count += 1)
          }),
          _count;

        function HSVtoRGB(t, e, r) {
          var i, a, s, n, o, l, h, p;
          switch (l = r * (1 - e), h = r * (1 - (o = 6 * t - (n = Math.floor(6 * t))) * e), p = r * (1 - (1 - o) * e), n % 6) {
            case 0:
              i = r, a = p, s = l;
              break;
            case 1:
              i = h, a = r, s = l;
              break;
            case 2:
              i = l, a = r, s = p;
              break;
            case 3:
              i = l, a = h, s = r;
              break;
            case 4:
              i = p, a = l, s = r;
              break;
            case 5:
              i = r, a = l, s = h
          }
          return [i, a, s]
        }

        function RGBtoHSV(t, e, r) {
          var i, a = Math.max(t, e, r),
            s = Math.min(t, e, r),
            n = a - s,
            o = 0 === a ? 0 : n / a,
            l = a / 255;
          switch (a) {
            case s:
              i = 0;
              break;
            case t:
              i = e - r + n * (e < r ? 6 : 0), i /= 6 * n;
              break;
            case e:
              i = r - t + 2 * n, i /= 6 * n;
              break;
            case r:
              i = t - e + 4 * n, i /= 6 * n
          }
          return [i, o, l]
        }

        function addSaturationToRGB(t, e) {
          var r = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
          return r[1] += e, r[1] > 1 ? r[1] = 1 : r[1] <= 0 && (r[1] = 0), HSVtoRGB(r[0], r[1], r[2])
        }

        function addBrightnessToRGB(t, e) {
          var r = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
          return r[2] += e, r[2] > 1 ? r[2] = 1 : r[2] < 0 && (r[2] = 0), HSVtoRGB(r[0], r[1], r[2])
        }

        function addHueToRGB(t, e) {
          var r = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
          return r[0] += e / 360, r[0] > 1 ? r[0] -= 1 : r[0] < 0 && (r[0] += 1), HSVtoRGB(r[0], r[1], r[2])
        }
        var rgbToHex = function() {
            var t, e, r = [];
            for (t = 0; t < 256; t += 1) e = t.toString(16), r[t] = 1 === e.length ? "0" + e : e;
            return function(t, e, i) {
              return t < 0 && (t = 0), e < 0 && (e = 0), i < 0 && (i = 0), "#" + r[t] + r[e] + r[i]
            }
          }(),
          setSubframeEnabled = function(t) {
            subframeEnabled = !!t
          },
          getSubframeEnabled = function() {
            return subframeEnabled
          },
          setExpressionsPlugin = function(t) {
            expressionsPlugin = t
          },
          getExpressionsPlugin = function() {
            return expressionsPlugin
          },
          setExpressionInterfaces = function(t) {
            expressionsInterfaces = t
          },
          getExpressionInterfaces = function() {
            return expressionsInterfaces
          },
          setDefaultCurveSegments = function(t) {
            defaultCurveSegments = t
          },
          getDefaultCurveSegments = function() {
            return defaultCurveSegments
          },
          setIdPrefix = function(t) {
            idPrefix$1 = t
          },
          getIdPrefix = function() {
            return idPrefix$1
          };

        function createNS(t) {
          return document.createElementNS(svgNS, t)
        }

        function _typeof$5(t) {
          return _typeof$5 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
          } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
          }, _typeof$5(t)
        }
        var dataManager = function() {
            var t, e, r = 1,
              i = [],
              a = {
                onmessage: function() {},
                postMessage: function(e) {
                  t({
                    data: e
                  })
                }
              },
              s = {
                postMessage: function(t) {
                  a.onmessage({
                    data: t
                  })
                }
              };

            function n() {
              e || (e = function(e) {
                if (window.Worker && window.Blob && getWebWorker()) {
                  var r = new Blob(["var _workerSelf = self; self.onmessage = ", e.toString()], {
                      type: "text/javascript"
                    }),
                    i = URL.createObjectURL(r);
                  return new Worker(i)
                }
                return t = e, a
              }((function(t) {
                if (s.dataManager || (s.dataManager = function() {
                    function t(a, s) {
                      var n, o, l, h, p, c, f, u = a.length;
                      for (o = 0; o < u; o += 1)
                        if ("ks" in (n = a[o]) && !n.completed) {
                          if (n.completed = !0, n.hasMask) {
                            var d = n.masksProperties;
                            for (h = d.length, l = 0; l < h; l += 1)
                              if (d[l].pt.k.i) i(d[l].pt.k);
                              else
                                for (c = d[l].pt.k.length, p = 0; p < c; p += 1) d[l].pt.k[p].s && i(d[l].pt.k[p].s[0]), d[l].pt.k[p].e && i(d[l].pt.k[p].e[0])
                          }
                          0 === n.ty ? (n.layers = e(n.refId, s), t(n.layers, s)) : 4 === n.ty ? r(n.shapes) : 5 === n.ty && (0 === (f = n).t.a.length && f.t.p)
                        }
                    }

                    function e(t, e) {
                      var r = function(t, e) {
                        for (var r = 0, i = e.length; r < i;) {
                          if (e[r].id === t) return e[r];
                          r += 1
                        }
                        return null
                      }(t, e);
                      return r ? r.layers.__used ? JSON.parse(JSON.stringify(r.layers)) : (r.layers.__used = !0, r.layers) : null
                    }

                    function r(t) {
                      var e, a, s;
                      for (e = t.length - 1; e >= 0; e -= 1)
                        if ("sh" === t[e].ty)
                          if (t[e].ks.k.i) i(t[e].ks.k);
                          else
                            for (s = t[e].ks.k.length, a = 0; a < s; a += 1) t[e].ks.k[a].s && i(t[e].ks.k[a].s[0]), t[e].ks.k[a].e && i(t[e].ks.k[a].e[0]);
                      else "gr" === t[e].ty && r(t[e].it)
                    }

                    function i(t) {
                      var e, r = t.i.length;
                      for (e = 0; e < r; e += 1) t.i[e][0] += t.v[e][0], t.i[e][1] += t.v[e][1], t.o[e][0] += t.v[e][0], t.o[e][1] += t.v[e][1]
                    }

                    function a(t, e) {
                      var r = e ? e.split(".") : [100, 100, 100];
                      return t[0] > r[0] || !(r[0] > t[0]) && (t[1] > r[1] || !(r[1] > t[1]) && (t[2] > r[2] || !(r[2] > t[2]) && null))
                    }
                    var s, n = function() {
                        var t = [4, 4, 14];

                        function e(t) {
                          var e, r, i, a = t.length;
                          for (e = 0; e < a; e += 1) 5 === t[e].ty && (void 0, i = (r = t[e]).t.d, r.t.d = {
                            k: [{
                              s: i,
                              t: 0
                            }]
                          })
                        }
                        return function(r) {
                          if (a(t, r.v) && (e(r.layers), r.assets)) {
                            var i, s = r.assets.length;
                            for (i = 0; i < s; i += 1) r.assets[i].layers && e(r.assets[i].layers)
                          }
                        }
                      }(),
                      o = (s = [4, 7, 99], function(t) {
                        if (t.chars && !a(s, t.v)) {
                          var e, i = t.chars.length;
                          for (e = 0; e < i; e += 1) {
                            var n = t.chars[e];
                            n.data && n.data.shapes && (r(n.data.shapes), n.data.ip = 0, n.data.op = 99999, n.data.st = 0, n.data.sr = 1, n.data.ks = {
                              p: {
                                k: [0, 0],
                                a: 0
                              },
                              s: {
                                k: [100, 100],
                                a: 0
                              },
                              a: {
                                k: [0, 0],
                                a: 0
                              },
                              r: {
                                k: 0,
                                a: 0
                              },
                              o: {
                                k: 100,
                                a: 0
                              }
                            }, t.chars[e].t || (n.data.shapes.push({
                              ty: "no"
                            }), n.data.shapes[0].it.push({
                              p: {
                                k: [0, 0],
                                a: 0
                              },
                              s: {
                                k: [100, 100],
                                a: 0
                              },
                              a: {
                                k: [0, 0],
                                a: 0
                              },
                              r: {
                                k: 0,
                                a: 0
                              },
                              o: {
                                k: 100,
                                a: 0
                              },
                              sk: {
                                k: 0,
                                a: 0
                              },
                              sa: {
                                k: 0,
                                a: 0
                              },
                              ty: "tr"
                            })))
                          }
                        }
                      }),
                      l = function() {
                        var t = [5, 7, 15];

                        function e(t) {
                          var e, r, i = t.length;
                          for (e = 0; e < i; e += 1) 5 === t[e].ty && (r = void 0, "number" == typeof(r = t[e].t.p).a && (r.a = {
                            a: 0,
                            k: r.a
                          }), "number" == typeof r.p && (r.p = {
                            a: 0,
                            k: r.p
                          }), "number" == typeof r.r && (r.r = {
                            a: 0,
                            k: r.r
                          }))
                        }
                        return function(r) {
                          if (a(t, r.v) && (e(r.layers), r.assets)) {
                            var i, s = r.assets.length;
                            for (i = 0; i < s; i += 1) r.assets[i].layers && e(r.assets[i].layers)
                          }
                        }
                      }(),
                      h = function() {
                        var t = [4, 1, 9];

                        function e(t) {
                          var r, i, a, s = t.length;
                          for (r = 0; r < s; r += 1)
                            if ("gr" === t[r].ty) e(t[r].it);
                            else if ("fl" === t[r].ty || "st" === t[r].ty)
                            if (t[r].c.k && t[r].c.k[0].i)
                              for (a = t[r].c.k.length, i = 0; i < a; i += 1) t[r].c.k[i].s && (t[r].c.k[i].s[0] /= 255, t[r].c.k[i].s[1] /= 255, t[r].c.k[i].s[2] /= 255, t[r].c.k[i].s[3] /= 255), t[r].c.k[i].e && (t[r].c.k[i].e[0] /= 255, t[r].c.k[i].e[1] /= 255, t[r].c.k[i].e[2] /= 255, t[r].c.k[i].e[3] /= 255);
                            else t[r].c.k[0] /= 255, t[r].c.k[1] /= 255, t[r].c.k[2] /= 255, t[r].c.k[3] /= 255
                        }

                        function r(t) {
                          var r, i = t.length;
                          for (r = 0; r < i; r += 1) 4 === t[r].ty && e(t[r].shapes)
                        }
                        return function(e) {
                          if (a(t, e.v) && (r(e.layers), e.assets)) {
                            var i, s = e.assets.length;
                            for (i = 0; i < s; i += 1) e.assets[i].layers && r(e.assets[i].layers)
                          }
                        }
                      }(),
                      p = function() {
                        var t = [4, 4, 18];

                        function e(t) {
                          var r, i, a;
                          for (r = t.length - 1; r >= 0; r -= 1)
                            if ("sh" === t[r].ty)
                              if (t[r].ks.k.i) t[r].ks.k.c = t[r].closed;
                              else
                                for (a = t[r].ks.k.length, i = 0; i < a; i += 1) t[r].ks.k[i].s && (t[r].ks.k[i].s[0].c = t[r].closed), t[r].ks.k[i].e && (t[r].ks.k[i].e[0].c = t[r].closed);
                          else "gr" === t[r].ty && e(t[r].it)
                        }

                        function r(t) {
                          var r, i, a, s, n, o, l = t.length;
                          for (i = 0; i < l; i += 1) {
                            if ((r = t[i]).hasMask) {
                              var h = r.masksProperties;
                              for (s = h.length, a = 0; a < s; a += 1)
                                if (h[a].pt.k.i) h[a].pt.k.c = h[a].cl;
                                else
                                  for (o = h[a].pt.k.length, n = 0; n < o; n += 1) h[a].pt.k[n].s && (h[a].pt.k[n].s[0].c = h[a].cl), h[a].pt.k[n].e && (h[a].pt.k[n].e[0].c = h[a].cl)
                            }
                            4 === r.ty && e(r.shapes)
                          }
                        }
                        return function(e) {
                          if (a(t, e.v) && (r(e.layers), e.assets)) {
                            var i, s = e.assets.length;
                            for (i = 0; i < s; i += 1) e.assets[i].layers && r(e.assets[i].layers)
                          }
                        }
                      }();
                    var c = {
                      completeData: function(r) {
                        r.__complete || (h(r), n(r), o(r), l(r), p(r), t(r.layers, r.assets), function(r, i) {
                          if (r) {
                            var a = 0,
                              s = r.length;
                            for (a = 0; a < s; a += 1) 1 === r[a].t && (r[a].data.layers = e(r[a].data.refId, i), t(r[a].data.layers, i))
                          }
                        }(r.chars, r.assets), r.__complete = !0)
                      }
                    };
                    return c.checkColors = h, c.checkChars = o, c.checkPathProperties = l, c.checkShapes = p, c.completeLayers = t, c
                  }()), s.assetLoader || (s.assetLoader = function() {
                    function t(t) {
                      var e = t.getResponseHeader("content-type");
                      return e && "json" === t.responseType && -1 !== e.indexOf("json") || t.response && "object" === _typeof$5(t.response) ? t.response : t.response && "string" == typeof t.response ? JSON.parse(t.response) : t.responseText ? JSON.parse(t.responseText) : null
                    }
                    return {
                      load: function(e, r, i, a) {
                        var s, n = new XMLHttpRequest;
                        try {
                          n.responseType = "json"
                        } catch (t) {}
                        n.onreadystatechange = function() {
                          if (4 === n.readyState)
                            if (200 === n.status) s = t(n), i(s);
                            else try {
                              s = t(n), i(s)
                            } catch (t) {
                              a && a(t)
                            }
                        };
                        try {
                          n.open(["G", "E", "T"].join(""), e, !0)
                        } catch (t) {
                          n.open(["G", "E", "T"].join(""), r + "/" + e, !0)
                        }
                        n.send()
                      }
                    }
                  }()), "loadAnimation" === t.data.type) s.assetLoader.load(t.data.path, t.data.fullPath, (function(e) {
                  s.dataManager.completeData(e), s.postMessage({
                    id: t.data.id,
                    payload: e,
                    status: "success"
                  })
                }), (function() {
                  s.postMessage({
                    id: t.data.id,
                    status: "error"
                  })
                }));
                else if ("complete" === t.data.type) {
                  var e = t.data.animation;
                  s.dataManager.completeData(e), s.postMessage({
                    id: t.data.id,
                    payload: e,
                    status: "success"
                  })
                } else "loadData" === t.data.type && s.assetLoader.load(t.data.path, t.data.fullPath, (function(e) {
                  s.postMessage({
                    id: t.data.id,
                    payload: e,
                    status: "success"
                  })
                }), (function() {
                  s.postMessage({
                    id: t.data.id,
                    status: "error"
                  })
                }))
              })), e.onmessage = function(t) {
                var e = t.data,
                  r = e.id,
                  a = i[r];
                i[r] = null, "success" === e.status ? a.onComplete(e.payload) : a.onError && a.onError()
              })
            }

            function o(t, e) {
              var a = "processId_" + (r += 1);
              return i[a] = {
                onComplete: t,
                onError: e
              }, a
            }
            return {
              loadAnimation: function(t, r, i) {
                n();
                var a = o(r, i);
                e.postMessage({
                  type: "loadAnimation",
                  path: t,
                  fullPath: window.location.origin + window.location.pathname,
                  id: a
                })
              },
              loadData: function(t, r, i) {
                n();
                var a = o(r, i);
                e.postMessage({
                  type: "loadData",
                  path: t,
                  fullPath: window.location.origin + window.location.pathname,
                  id: a
                })
              },
              completeAnimation: function(t, r, i) {
                n();
                var a = o(r, i);
                e.postMessage({
                  type: "complete",
                  animation: t,
                  id: a
                })
              }
            }
          }(),
          ImagePreloader = function() {
            var t = function() {
              var t = createTag("canvas");
              t.width = 1, t.height = 1;
              var e = t.getContext("2d");
              return e.fillStyle = "rgba(0,0,0,0)", e.fillRect(0, 0, 1, 1), t
            }();

            function e() {
              this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
            }

            function r() {
              this.loadedFootagesCount += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
            }

            function i(t, e, r) {
              var i = "";
              if (t.e) i = t.p;
              else if (e) {
                var a = t.p; - 1 !== a.indexOf("images/") && (a = a.split("/")[1]), i = e + a
              } else i = r, i += t.u ? t.u : "", i += t.p;
              return i
            }

            function a(t) {
              var e = 0,
                r = setInterval(function() {
                  (t.getBBox().width || e > 500) && (this._imageLoaded(), clearInterval(r)), e += 1
                }.bind(this), 50)
            }

            function s(t) {
              var e = {
                  assetData: t
                },
                r = i(t, this.assetsPath, this.path);
              return dataManager.loadData(r, function(t) {
                e.img = t, this._footageLoaded()
              }.bind(this), function() {
                e.img = {}, this._footageLoaded()
              }.bind(this)), e
            }

            function n() {
              this._imageLoaded = e.bind(this), this._footageLoaded = r.bind(this), this.testImageLoaded = a.bind(this), this.createFootageData = s.bind(this), this.assetsPath = "", this.path = "", this.totalImages = 0, this.totalFootages = 0, this.loadedAssets = 0, this.loadedFootagesCount = 0, this.imagesLoadedCb = null, this.images = []
            }
            return n.prototype = {
              loadAssets: function(t, e) {
                var r;
                this.imagesLoadedCb = e;
                var i = t.length;
                for (r = 0; r < i; r += 1) t[r].layers || (t[r].t && "seq" !== t[r].t ? 3 === t[r].t && (this.totalFootages += 1, this.images.push(this.createFootageData(t[r]))) : (this.totalImages += 1, this.images.push(this._createImageData(t[r]))))
              },
              setAssetsPath: function(t) {
                this.assetsPath = t || ""
              },
              setPath: function(t) {
                this.path = t || ""
              },
              loadedImages: function() {
                return this.totalImages === this.loadedAssets
              },
              loadedFootages: function() {
                return this.totalFootages === this.loadedFootagesCount
              },
              destroy: function() {
                this.imagesLoadedCb = null, this.images.length = 0
              },
              getAsset: function(t) {
                for (var e = 0, r = this.images.length; e < r;) {
                  if (this.images[e].assetData === t) return this.images[e].img;
                  e += 1
                }
                return null
              },
              createImgData: function(e) {
                var r = i(e, this.assetsPath, this.path),
                  a = createTag("img");
                a.crossOrigin = "anonymous", a.addEventListener("load", this._imageLoaded, !1), a.addEventListener("error", function() {
                  s.img = t, this._imageLoaded()
                }.bind(this), !1), a.src = r;
                var s = {
                  img: a,
                  assetData: e
                };
                return s
              },
              createImageData: function(e) {
                var r = i(e, this.assetsPath, this.path),
                  a = createNS("image");
                isSafari ? this.testImageLoaded(a) : a.addEventListener("load", this._imageLoaded, !1), a.addEventListener("error", function() {
                  s.img = t, this._imageLoaded()
                }.bind(this), !1), a.setAttributeNS("http://www.w3.org/1999/xlink", "href", r), this._elementHelper.append ? this._elementHelper.append(a) : this._elementHelper.appendChild(a);
                var s = {
                  img: a,
                  assetData: e
                };
                return s
              },
              imageLoaded: e,
              footageLoaded: r,
              setCacheType: function(t, e) {
                "svg" === t ? (this._elementHelper = e, this._createImageData = this.createImageData.bind(this)) : this._createImageData = this.createImgData.bind(this)
              }
            }, n
          }();

        function BaseEvent() {}
        BaseEvent.prototype = {
          triggerEvent: function(t, e) {
            if (this._cbs[t])
              for (var r = this._cbs[t], i = 0; i < r.length; i += 1) r[i](e)
          },
          addEventListener: function(t, e) {
            return this._cbs[t] || (this._cbs[t] = []), this._cbs[t].push(e),
              function() {
                this.removeEventListener(t, e)
              }.bind(this)
          },
          removeEventListener: function(t, e) {
            if (e) {
              if (this._cbs[t]) {
                for (var r = 0, i = this._cbs[t].length; r < i;) this._cbs[t][r] === e && (this._cbs[t].splice(r, 1), r -= 1, i -= 1), r += 1;
                this._cbs[t].length || (this._cbs[t] = null)
              }
            } else this._cbs[t] = null
          }
        };
        var markerParser = function() {
            function t(t) {
              for (var e, r = t.split("\r\n"), i = {}, a = 0, s = 0; s < r.length; s += 1) 2 === (e = r[s].split(":")).length && (i[e[0]] = e[1].trim(), a += 1);
              if (0 === a) throw new Error;
              return i
            }
            return function(e) {
              for (var r = [], i = 0; i < e.length; i += 1) {
                var a = e[i],
                  s = {
                    time: a.tm,
                    duration: a.dr
                  };
                try {
                  s.payload = JSON.parse(e[i].cm)
                } catch (r) {
                  try {
                    s.payload = t(e[i].cm)
                  } catch (t) {
                    s.payload = {
                      name: e[i].cm
                    }
                  }
                }
                r.push(s)
              }
              return r
            }
          }(),
          ProjectInterface = function() {
            function t(t) {
              this.compositions.push(t)
            }
            return function() {
              function e(t) {
                for (var e = 0, r = this.compositions.length; e < r;) {
                  if (this.compositions[e].data && this.compositions[e].data.nm === t) return this.compositions[e].prepareFrame && this.compositions[e].data.xt && this.compositions[e].prepareFrame(this.currentFrame), this.compositions[e].compInterface;
                  e += 1
                }
                return null
              }
              return e.compositions = [], e.currentFrame = 0, e.registerComposition = t, e
            }
          }(),
          renderers = {},
          registerRenderer = function(t, e) {
            renderers[t] = e
          };

        function getRenderer(t) {
          return renderers[t]
        }

        function getRegisteredRenderer() {
          if (renderers.canvas) return "canvas";
          for (var t in renderers)
            if (renderers[t]) return t;
          return ""
        }

        function _typeof$4(t) {
          return _typeof$4 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
          } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
          }, _typeof$4(t)
        }
        var AnimationItem = function() {
          this._cbs = [], this.name = "", this.path = "", this.isLoaded = !1, this.currentFrame = 0, this.currentRawFrame = 0, this.firstFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, this.playSpeed = 1, this.playDirection = 1, this.playCount = 0, this.animationData = {}, this.assets = [], this.isPaused = !0, this.autoplay = !1, this.loop = !0, this.renderer = null, this.animationID = createElementID(), this.assetsPath = "", this.timeCompleted = 0, this.segmentPos = 0, this.isSubframeEnabled = getSubframeEnabled(), this.segments = [], this._idle = !0, this._completedLoop = !1, this.projectInterface = ProjectInterface(), this.imagePreloader = new ImagePreloader, this.audioController = audioControllerFactory(), this.markers = [], this.configAnimation = this.configAnimation.bind(this), this.onSetupError = this.onSetupError.bind(this), this.onSegmentComplete = this.onSegmentComplete.bind(this), this.drawnFrameEvent = new BMEnterFrameEvent("drawnFrame", 0, 0, 0), this.expressionsPlugin = getExpressionsPlugin()
        };
        extendPrototype([BaseEvent], AnimationItem), AnimationItem.prototype.setParams = function(t) {
          (t.wrapper || t.container) && (this.wrapper = t.wrapper || t.container);
          var e = "svg";
          t.animType ? e = t.animType : t.renderer && (e = t.renderer);
          var r = getRenderer(e);
          this.renderer = new r(this, t.rendererSettings), this.imagePreloader.setCacheType(e, this.renderer.globalData.defs), this.renderer.setProjectInterface(this.projectInterface), this.animType = e, "" === t.loop || null === t.loop || void 0 === t.loop || !0 === t.loop ? this.loop = !0 : !1 === t.loop ? this.loop = !1 : this.loop = parseInt(t.loop, 10), this.autoplay = !("autoplay" in t) || t.autoplay, this.name = t.name ? t.name : "", this.autoloadSegments = !Object.prototype.hasOwnProperty.call(t, "autoloadSegments") || t.autoloadSegments, this.assetsPath = t.assetsPath, this.initialSegment = t.initialSegment, t.audioFactory && this.audioController.setAudioFactory(t.audioFactory), t.animationData ? this.setupAnimation(t.animationData) : t.path && (-1 !== t.path.lastIndexOf("\\") ? this.path = t.path.substr(0, t.path.lastIndexOf("\\") + 1) : this.path = t.path.substr(0, t.path.lastIndexOf("/") + 1), this.fileName = t.path.substr(t.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), dataManager.loadAnimation(t.path, this.configAnimation, this.onSetupError))
        }, AnimationItem.prototype.onSetupError = function() {
          this.trigger("data_failed")
        }, AnimationItem.prototype.setupAnimation = function(t) {
          dataManager.completeAnimation(t, this.configAnimation)
        }, AnimationItem.prototype.setData = function(t, e) {
          e && "object" !== _typeof$4(e) && (e = JSON.parse(e));
          var r = {
              wrapper: t,
              animationData: e
            },
            i = t.attributes;
          r.path = i.getNamedItem("data-animation-path") ? i.getNamedItem("data-animation-path").value : i.getNamedItem("data-bm-path") ? i.getNamedItem("data-bm-path").value : i.getNamedItem("bm-path") ? i.getNamedItem("bm-path").value : "", r.animType = i.getNamedItem("data-anim-type") ? i.getNamedItem("data-anim-type").value : i.getNamedItem("data-bm-type") ? i.getNamedItem("data-bm-type").value : i.getNamedItem("bm-type") ? i.getNamedItem("bm-type").value : i.getNamedItem("data-bm-renderer") ? i.getNamedItem("data-bm-renderer").value : i.getNamedItem("bm-renderer") ? i.getNamedItem("bm-renderer").value : getRegisteredRenderer() || "canvas";
          var a = i.getNamedItem("data-anim-loop") ? i.getNamedItem("data-anim-loop").value : i.getNamedItem("data-bm-loop") ? i.getNamedItem("data-bm-loop").value : i.getNamedItem("bm-loop") ? i.getNamedItem("bm-loop").value : "";
          "false" === a ? r.loop = !1 : "true" === a ? r.loop = !0 : "" !== a && (r.loop = parseInt(a, 10));
          var s = i.getNamedItem("data-anim-autoplay") ? i.getNamedItem("data-anim-autoplay").value : i.getNamedItem("data-bm-autoplay") ? i.getNamedItem("data-bm-autoplay").value : !i.getNamedItem("bm-autoplay") || i.getNamedItem("bm-autoplay").value;
          r.autoplay = "false" !== s, r.name = i.getNamedItem("data-name") ? i.getNamedItem("data-name").value : i.getNamedItem("data-bm-name") ? i.getNamedItem("data-bm-name").value : i.getNamedItem("bm-name") ? i.getNamedItem("bm-name").value : "", "false" === (i.getNamedItem("data-anim-prerender") ? i.getNamedItem("data-anim-prerender").value : i.getNamedItem("data-bm-prerender") ? i.getNamedItem("data-bm-prerender").value : i.getNamedItem("bm-prerender") ? i.getNamedItem("bm-prerender").value : "") && (r.prerender = !1), r.path ? this.setParams(r) : this.trigger("destroy")
        }, AnimationItem.prototype.includeLayers = function(t) {
          t.op > this.animationData.op && (this.animationData.op = t.op, this.totalFrames = Math.floor(t.op - this.animationData.ip));
          var e, r, i = this.animationData.layers,
            a = i.length,
            s = t.layers,
            n = s.length;
          for (r = 0; r < n; r += 1)
            for (e = 0; e < a;) {
              if (i[e].id === s[r].id) {
                i[e] = s[r];
                break
              }
              e += 1
            }
          if ((t.chars || t.fonts) && (this.renderer.globalData.fontManager.addChars(t.chars), this.renderer.globalData.fontManager.addFonts(t.fonts, this.renderer.globalData.defs)), t.assets)
            for (a = t.assets.length, e = 0; e < a; e += 1) this.animationData.assets.push(t.assets[e]);
          this.animationData.__complete = !1, dataManager.completeAnimation(this.animationData, this.onSegmentComplete)
        }, AnimationItem.prototype.onSegmentComplete = function(t) {
          this.animationData = t;
          var e = getExpressionsPlugin();
          e && e.initExpressions(this), this.loadNextSegment()
        }, AnimationItem.prototype.loadNextSegment = function() {
          var t = this.animationData.segments;
          if (!t || 0 === t.length || !this.autoloadSegments) return this.trigger("data_ready"), void(this.timeCompleted = this.totalFrames);
          var e = t.shift();
          this.timeCompleted = e.time * this.frameRate;
          var r = this.path + this.fileName + "_" + this.segmentPos + ".json";
          this.segmentPos += 1, dataManager.loadData(r, this.includeLayers.bind(this), function() {
            this.trigger("data_failed")
          }.bind(this))
        }, AnimationItem.prototype.loadSegments = function() {
          this.animationData.segments || (this.timeCompleted = this.totalFrames), this.loadNextSegment()
        }, AnimationItem.prototype.imagesLoaded = function() {
          this.trigger("loaded_images"), this.checkLoaded()
        }, AnimationItem.prototype.preloadImages = function() {
          this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this))
        }, AnimationItem.prototype.configAnimation = function(t) {
          if (this.renderer) try {
            this.animationData = t, this.initialSegment ? (this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]), this.firstFrame = Math.round(this.initialSegment[0])) : (this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.firstFrame = Math.round(this.animationData.ip)), this.renderer.configAnimation(t), t.assets || (t.assets = []), this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.frameMult = this.animationData.fr / 1e3, this.renderer.searchExtraCompositions(t.assets), this.markers = markerParser(t.markers || []), this.trigger("config_ready"), this.preloadImages(), this.loadSegments(), this.updaFrameModifier(), this.waitForFontsLoaded(), this.isPaused && this.audioController.pause()
          } catch (t) {
            this.triggerConfigError(t)
          }
        }, AnimationItem.prototype.waitForFontsLoaded = function() {
          this.renderer && (this.renderer.globalData.fontManager.isLoaded ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20))
        }, AnimationItem.prototype.checkLoaded = function() {
          if (!this.isLoaded && this.renderer.globalData.fontManager.isLoaded && (this.imagePreloader.loadedImages() || "canvas" !== this.renderer.rendererType) && this.imagePreloader.loadedFootages()) {
            this.isLoaded = !0;
            var t = getExpressionsPlugin();
            t && t.initExpressions(this), this.renderer.initItems(), setTimeout(function() {
              this.trigger("DOMLoaded")
            }.bind(this), 0), this.gotoFrame(), this.autoplay && this.play()
          }
        }, AnimationItem.prototype.resize = function(t, e) {
          var r = "number" == typeof t ? t : void 0,
            i = "number" == typeof e ? e : void 0;
          this.renderer.updateContainerSize(r, i)
        }, AnimationItem.prototype.setSubframe = function(t) {
          this.isSubframeEnabled = !!t
        }, AnimationItem.prototype.gotoFrame = function() {
          this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame, this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger("enterFrame"), this.renderFrame(), this.trigger("drawnFrame")
        }, AnimationItem.prototype.renderFrame = function() {
          if (!1 !== this.isLoaded && this.renderer) try {
            this.expressionsPlugin && this.expressionsPlugin.resetFrame(), this.renderer.renderFrame(this.currentFrame + this.firstFrame)
          } catch (t) {
            this.triggerRenderFrameError(t)
          }
        }, AnimationItem.prototype.play = function(t) {
          t && this.name !== t || !0 === this.isPaused && (this.isPaused = !1, this.trigger("_play"), this.audioController.resume(), this._idle && (this._idle = !1, this.trigger("_active")))
        }, AnimationItem.prototype.pause = function(t) {
          t && this.name !== t || !1 === this.isPaused && (this.isPaused = !0, this.trigger("_pause"), this._idle = !0, this.trigger("_idle"), this.audioController.pause())
        }, AnimationItem.prototype.togglePause = function(t) {
          t && this.name !== t || (!0 === this.isPaused ? this.play() : this.pause())
        }, AnimationItem.prototype.stop = function(t) {
          t && this.name !== t || (this.pause(), this.playCount = 0, this._completedLoop = !1, this.setCurrentRawFrameValue(0))
        }, AnimationItem.prototype.getMarkerData = function(t) {
          for (var e, r = 0; r < this.markers.length; r += 1)
            if ((e = this.markers[r]).payload && e.payload.name === t) return e;
          return null
        }, AnimationItem.prototype.goToAndStop = function(t, e, r) {
          if (!r || this.name === r) {
            var i = Number(t);
            if (isNaN(i)) {
              var a = this.getMarkerData(t);
              a && this.goToAndStop(a.time, !0)
            } else e ? this.setCurrentRawFrameValue(t) : this.setCurrentRawFrameValue(t * this.frameModifier);
            this.pause()
          }
        }, AnimationItem.prototype.goToAndPlay = function(t, e, r) {
          if (!r || this.name === r) {
            var i = Number(t);
            if (isNaN(i)) {
              var a = this.getMarkerData(t);
              a && (a.duration ? this.playSegments([a.time, a.time + a.duration], !0) : this.goToAndStop(a.time, !0))
            } else this.goToAndStop(i, e, r);
            this.play()
          }
        }, AnimationItem.prototype.advanceTime = function(t) {
          if (!0 !== this.isPaused && !1 !== this.isLoaded) {
            var e = this.currentRawFrame + t * this.frameModifier,
              r = !1;
            e >= this.totalFrames - 1 && this.frameModifier > 0 ? this.loop && this.playCount !== this.loop ? e >= this.totalFrames ? (this.playCount += 1, this.checkSegments(e % this.totalFrames) || (this.setCurrentRawFrameValue(e % this.totalFrames), this._completedLoop = !0, this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(e) : this.checkSegments(e > this.totalFrames ? e % this.totalFrames : 0) || (r = !0, e = this.totalFrames - 1) : e < 0 ? this.checkSegments(e % this.totalFrames) || (!this.loop || this.playCount-- <= 0 && !0 !== this.loop ? (r = !0, e = 0) : (this.setCurrentRawFrameValue(this.totalFrames + e % this.totalFrames), this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = !0)) : this.setCurrentRawFrameValue(e), r && (this.setCurrentRawFrameValue(e), this.pause(), this.trigger("complete"))
          }
        }, AnimationItem.prototype.adjustSegment = function(t, e) {
          this.playCount = 0, t[1] < t[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.totalFrames = t[0] - t[1], this.timeCompleted = this.totalFrames, this.firstFrame = t[1], this.setCurrentRawFrameValue(this.totalFrames - .001 - e)) : t[1] > t[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.totalFrames = t[1] - t[0], this.timeCompleted = this.totalFrames, this.firstFrame = t[0], this.setCurrentRawFrameValue(.001 + e)), this.trigger("segmentStart")
        }, AnimationItem.prototype.setSegment = function(t, e) {
          var r = -1;
          this.isPaused && (this.currentRawFrame + this.firstFrame < t ? r = t : this.currentRawFrame + this.firstFrame > e && (r = e - t)), this.firstFrame = t, this.totalFrames = e - t, this.timeCompleted = this.totalFrames, -1 !== r && this.goToAndStop(r, !0)
        }, AnimationItem.prototype.playSegments = function(t, e) {
          if (e && (this.segments.length = 0), "object" === _typeof$4(t[0])) {
            var r, i = t.length;
            for (r = 0; r < i; r += 1) this.segments.push(t[r])
          } else this.segments.push(t);
          this.segments.length && e && this.adjustSegment(this.segments.shift(), 0), this.isPaused && this.play()
        }, AnimationItem.prototype.resetSegments = function(t) {
          this.segments.length = 0, this.segments.push([this.animationData.ip, this.animationData.op]), t && this.checkSegments(0)
        }, AnimationItem.prototype.checkSegments = function(t) {
          return !!this.segments.length && (this.adjustSegment(this.segments.shift(), t), !0)
        }, AnimationItem.prototype.destroy = function(t) {
          t && this.name !== t || !this.renderer || (this.renderer.destroy(), this.imagePreloader.destroy(), this.trigger("destroy"), this._cbs = null, this.onEnterFrame = null, this.onLoopComplete = null, this.onComplete = null, this.onSegmentStart = null, this.onDestroy = null, this.renderer = null, this.expressionsPlugin = null, this.imagePreloader = null, this.projectInterface = null)
        }, AnimationItem.prototype.setCurrentRawFrameValue = function(t) {
          this.currentRawFrame = t, this.gotoFrame()
        }, AnimationItem.prototype.setSpeed = function(t) {
          this.playSpeed = t, this.updaFrameModifier()
        }, AnimationItem.prototype.setDirection = function(t) {
          this.playDirection = t < 0 ? -1 : 1, this.updaFrameModifier()
        }, AnimationItem.prototype.setLoop = function(t) {
          this.loop = t
        }, AnimationItem.prototype.setVolume = function(t, e) {
          e && this.name !== e || this.audioController.setVolume(t)
        }, AnimationItem.prototype.getVolume = function() {
          return this.audioController.getVolume()
        }, AnimationItem.prototype.mute = function(t) {
          t && this.name !== t || this.audioController.mute()
        }, AnimationItem.prototype.unmute = function(t) {
          t && this.name !== t || this.audioController.unmute()
        }, AnimationItem.prototype.updaFrameModifier = function() {
          this.frameModifier = this.frameMult * this.playSpeed * this.playDirection, this.audioController.setRate(this.playSpeed * this.playDirection)
        }, AnimationItem.prototype.getPath = function() {
          return this.path
        }, AnimationItem.prototype.getAssetsPath = function(t) {
          var e = "";
          if (t.e) e = t.p;
          else if (this.assetsPath) {
            var r = t.p; - 1 !== r.indexOf("images/") && (r = r.split("/")[1]), e = this.assetsPath + r
          } else e = this.path, e += t.u ? t.u : "", e += t.p;
          return e
        }, AnimationItem.prototype.getAssetData = function(t) {
          for (var e = 0, r = this.assets.length; e < r;) {
            if (t === this.assets[e].id) return this.assets[e];
            e += 1
          }
          return null
        }, AnimationItem.prototype.hide = function() {
          this.renderer.hide()
        }, AnimationItem.prototype.show = function() {
          this.renderer.show()
        }, AnimationItem.prototype.getDuration = function(t) {
          return t ? this.totalFrames : this.totalFrames / this.frameRate
        }, AnimationItem.prototype.updateDocumentData = function(t, e, r) {
          try {
            this.renderer.getElementByPath(t).updateDocumentData(e, r)
          } catch (t) {}
        }, AnimationItem.prototype.trigger = function(t) {
          if (this._cbs && this._cbs[t]) switch (t) {
            case "enterFrame":
              this.triggerEvent(t, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameModifier));
              break;
            case "drawnFrame":
              this.drawnFrameEvent.currentTime = this.currentFrame, this.drawnFrameEvent.totalTime = this.totalFrames, this.drawnFrameEvent.direction = this.frameModifier, this.triggerEvent(t, this.drawnFrameEvent);
              break;
            case "loopComplete":
              this.triggerEvent(t, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult));
              break;
            case "complete":
              this.triggerEvent(t, new BMCompleteEvent(t, this.frameMult));
              break;
            case "segmentStart":
              this.triggerEvent(t, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames));
              break;
            case "destroy":
              this.triggerEvent(t, new BMDestroyEvent(t, this));
              break;
            default:
              this.triggerEvent(t)
          }
          "enterFrame" === t && this.onEnterFrame && this.onEnterFrame.call(this, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameMult)), "loopComplete" === t && this.onLoopComplete && this.onLoopComplete.call(this, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult)), "complete" === t && this.onComplete && this.onComplete.call(this, new BMCompleteEvent(t, this.frameMult)), "segmentStart" === t && this.onSegmentStart && this.onSegmentStart.call(this, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames)), "destroy" === t && this.onDestroy && this.onDestroy.call(this, new BMDestroyEvent(t, this))
        }, AnimationItem.prototype.triggerRenderFrameError = function(t) {
          var e = new BMRenderFrameErrorEvent(t, this.currentFrame);
          this.triggerEvent("error", e), this.onError && this.onError.call(this, e)
        }, AnimationItem.prototype.triggerConfigError = function(t) {
          var e = new BMConfigErrorEvent(t, this.currentFrame);
          this.triggerEvent("error", e), this.onError && this.onError.call(this, e)
        };
        var animationManager = function() {
            var t = {},
              e = [],
              r = 0,
              i = 0,
              a = 0,
              s = !0,
              n = !1;

            function o(t) {
              for (var r = 0, a = t.target; r < i;) e[r].animation === a && (e.splice(r, 1), r -= 1, i -= 1, a.isPaused || p()), r += 1
            }

            function l(t, r) {
              if (!t) return null;
              for (var a = 0; a < i;) {
                if (e[a].elem === t && null !== e[a].elem) return e[a].animation;
                a += 1
              }
              var s = new AnimationItem;
              return c(s, t), s.setData(t, r), s
            }

            function h() {
              a += 1, d()
            }

            function p() {
              a -= 1
            }

            function c(t, r) {
              t.addEventListener("destroy", o), t.addEventListener("_active", h), t.addEventListener("_idle", p), e.push({
                elem: r,
                animation: t
              }), i += 1
            }

            function f(t) {
              var o, l = t - r;
              for (o = 0; o < i; o += 1) e[o].animation.advanceTime(l);
              r = t, a && !n ? window.requestAnimationFrame(f) : s = !0
            }

            function u(t) {
              r = t, window.requestAnimationFrame(f)
            }

            function d() {
              !n && a && s && (window.requestAnimationFrame(u), s = !1)
            }
            return t.registerAnimation = l, t.loadAnimation = function(t) {
              var e = new AnimationItem;
              return c(e, null), e.setParams(t), e
            }, t.setSpeed = function(t, r) {
              var a;
              for (a = 0; a < i; a += 1) e[a].animation.setSpeed(t, r)
            }, t.setDirection = function(t, r) {
              var a;
              for (a = 0; a < i; a += 1) e[a].animation.setDirection(t, r)
            }, t.play = function(t) {
              var r;
              for (r = 0; r < i; r += 1) e[r].animation.play(t)
            }, t.pause = function(t) {
              var r;
              for (r = 0; r < i; r += 1) e[r].animation.pause(t)
            }, t.stop = function(t) {
              var r;
              for (r = 0; r < i; r += 1) e[r].animation.stop(t)
            }, t.togglePause = function(t) {
              var r;
              for (r = 0; r < i; r += 1) e[r].animation.togglePause(t)
            }, t.searchAnimations = function(t, e, r) {
              var i, a = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))),
                s = a.length;
              for (i = 0; i < s; i += 1) r && a[i].setAttribute("data-bm-type", r), l(a[i], t);
              if (e && 0 === s) {
                r || (r = "svg");
                var n = document.getElementsByTagName("body")[0];
                n.innerText = "";
                var o = createTag("div");
                o.style.width = "100%", o.style.height = "100%", o.setAttribute("data-bm-type", r), n.appendChild(o), l(o, t)
              }
            }, t.resize = function() {
              var t;
              for (t = 0; t < i; t += 1) e[t].animation.resize()
            }, t.goToAndStop = function(t, r, a) {
              var s;
              for (s = 0; s < i; s += 1) e[s].animation.goToAndStop(t, r, a)
            }, t.destroy = function(t) {
              var r;
              for (r = i - 1; r >= 0; r -= 1) e[r].animation.destroy(t)
            }, t.freeze = function() {
              n = !0
            }, t.unfreeze = function() {
              n = !1, d()
            }, t.setVolume = function(t, r) {
              var a;
              for (a = 0; a < i; a += 1) e[a].animation.setVolume(t, r)
            }, t.mute = function(t) {
              var r;
              for (r = 0; r < i; r += 1) e[r].animation.mute(t)
            }, t.unmute = function(t) {
              var r;
              for (r = 0; r < i; r += 1) e[r].animation.unmute(t)
            }, t.getRegisteredAnimations = function() {
              var t, r = e.length,
                i = [];
              for (t = 0; t < r; t += 1) i.push(e[t].animation);
              return i
            }, t
          }(),
          BezierFactory = function() {
            var t = {
                getBezierEasing: function(t, r, i, a, s) {
                  var n = s || ("bez_" + t + "_" + r + "_" + i + "_" + a).replace(/\./g, "p");
                  if (e[n]) return e[n];
                  var o = new p([t, r, i, a]);
                  return e[n] = o, o
                }
              },
              e = {},
              r = 11,
              i = 1 / (r - 1),
              a = "function" == typeof Float32Array;

            function s(t, e) {
              return 1 - 3 * e + 3 * t
            }

            function n(t, e) {
              return 3 * e - 6 * t
            }

            function o(t) {
              return 3 * t
            }

            function l(t, e, r) {
              return ((s(e, r) * t + n(e, r)) * t + o(e)) * t
            }

            function h(t, e, r) {
              return 3 * s(e, r) * t * t + 2 * n(e, r) * t + o(e)
            }

            function p(t) {
              this._p = t, this._mSampleValues = a ? new Float32Array(r) : new Array(r), this._precomputed = !1, this.get = this.get.bind(this)
            }
            return p.prototype = {
              get: function(t) {
                var e = this._p[0],
                  r = this._p[1],
                  i = this._p[2],
                  a = this._p[3];
                return this._precomputed || this._precompute(), e === r && i === a ? t : 0 === t ? 0 : 1 === t ? 1 : l(this._getTForX(t), r, a)
              },
              _precompute: function() {
                var t = this._p[0],
                  e = this._p[1],
                  r = this._p[2],
                  i = this._p[3];
                this._precomputed = !0, t === e && r === i || this._calcSampleValues()
              },
              _calcSampleValues: function() {
                for (var t = this._p[0], e = this._p[2], a = 0; a < r; ++a) this._mSampleValues[a] = l(a * i, t, e)
              },
              _getTForX: function(t) {
                for (var e = this._p[0], a = this._p[2], s = this._mSampleValues, n = 0, o = 1, p = r - 1; o !== p && s[o] <= t; ++o) n += i;
                var c = n + (t - s[--o]) / (s[o + 1] - s[o]) * i,
                  f = h(c, e, a);
                return f >= .001 ? function(t, e, r, i) {
                  for (var a = 0; a < 4; ++a) {
                    var s = h(e, r, i);
                    if (0 === s) return e;
                    e -= (l(e, r, i) - t) / s
                  }
                  return e
                }(t, c, e, a) : 0 === f ? c : function(t, e, r, i, a) {
                  var s, n, o = 0;
                  do {
                    (s = l(n = e + (r - e) / 2, i, a) - t) > 0 ? r = n : e = n
                  } while (Math.abs(s) > 1e-7 && ++o < 10);
                  return n
                }(t, n, n + i, e, a)
              }
            }, t
          }(),
          pooling = {
            double: function(t) {
              return t.concat(createSizedArray(t.length))
            }
          },
          poolFactory = function(t, e, r) {
            var i = 0,
              a = t,
              s = createSizedArray(a);
            return {
              newElement: function() {
                return i ? s[i -= 1] : e()
              },
              release: function(t) {
                i === a && (s = pooling.double(s), a *= 2), r && r(t), s[i] = t, i += 1
              }
            }
          },
          bezierLengthPool = poolFactory(8, (function() {
            return {
              addedLength: 0,
              percents: createTypedArray("float32", getDefaultCurveSegments()),
              lengths: createTypedArray("float32", getDefaultCurveSegments())
            }
          })),
          segmentsLengthPool = poolFactory(8, (function() {
            return {
              lengths: [],
              totalLength: 0
            }
          }), (function(t) {
            var e, r = t.lengths.length;
            for (e = 0; e < r; e += 1) bezierLengthPool.release(t.lengths[e]);
            t.lengths.length = 0
          }));

        function bezFunction() {
          var t = Math;

          function e(t, e, r, i, a, s) {
            var n = t * i + e * a + r * s - a * i - s * t - r * e;
            return n > -.001 && n < .001
          }
          var r = function(t, e, r, i) {
            var a, s, n, o, l, h, p = getDefaultCurveSegments(),
              c = 0,
              f = [],
              u = [],
              d = bezierLengthPool.newElement();
            for (n = r.length, a = 0; a < p; a += 1) {
              for (l = a / (p - 1), h = 0, s = 0; s < n; s += 1) o = bmPow(1 - l, 3) * t[s] + 3 * bmPow(1 - l, 2) * l * r[s] + 3 * (1 - l) * bmPow(l, 2) * i[s] + bmPow(l, 3) * e[s], f[s] = o, null !== u[s] && (h += bmPow(f[s] - u[s], 2)), u[s] = f[s];
              h && (c += h = bmSqrt(h)), d.percents[a] = l, d.lengths[a] = c
            }
            return d.addedLength = c, d
          };

          function i(t) {
            this.segmentLength = 0, this.points = new Array(t)
          }

          function a(t, e) {
            this.partialLength = t, this.point = e
          }
          var s, n = (s = {}, function(t, r, n, o) {
            var l = (t[0] + "_" + t[1] + "_" + r[0] + "_" + r[1] + "_" + n[0] + "_" + n[1] + "_" + o[0] + "_" + o[1]).replace(/\./g, "p");
            if (!s[l]) {
              var h, p, c, f, u, d, m, y = getDefaultCurveSegments(),
                g = 0,
                v = null;
              2 === t.length && (t[0] !== r[0] || t[1] !== r[1]) && e(t[0], t[1], r[0], r[1], t[0] + n[0], t[1] + n[1]) && e(t[0], t[1], r[0], r[1], r[0] + o[0], r[1] + o[1]) && (y = 2);
              var b = new i(y);
              for (c = n.length, h = 0; h < y; h += 1) {
                for (m = createSizedArray(c), u = h / (y - 1), d = 0, p = 0; p < c; p += 1) f = bmPow(1 - u, 3) * t[p] + 3 * bmPow(1 - u, 2) * u * (t[p] + n[p]) + 3 * (1 - u) * bmPow(u, 2) * (r[p] + o[p]) + bmPow(u, 3) * r[p], m[p] = f, null !== v && (d += bmPow(m[p] - v[p], 2));
                g += d = bmSqrt(d), b.points[h] = new a(d, m), v = m
              }
              b.segmentLength = g, s[l] = b
            }
            return s[l]
          });

          function o(t, e) {
            var r = e.percents,
              i = e.lengths,
              a = r.length,
              s = bmFloor((a - 1) * t),
              n = t * e.addedLength,
              o = 0;
            if (s === a - 1 || 0 === s || n === i[s]) return r[s];
            for (var l = i[s] > n ? -1 : 1, h = !0; h;)
              if (i[s] <= n && i[s + 1] > n ? (o = (n - i[s]) / (i[s + 1] - i[s]), h = !1) : s += l, s < 0 || s >= a - 1) {
                if (s === a - 1) return r[s];
                h = !1
              } return r[s] + (r[s + 1] - r[s]) * o
          }
          var l = createTypedArray("float32", 8);
          return {
            getSegmentsLength: function(t) {
              var e, i = segmentsLengthPool.newElement(),
                a = t.c,
                s = t.v,
                n = t.o,
                o = t.i,
                l = t._length,
                h = i.lengths,
                p = 0;
              for (e = 0; e < l - 1; e += 1) h[e] = r(s[e], s[e + 1], n[e], o[e + 1]), p += h[e].addedLength;
              return a && l && (h[e] = r(s[e], s[0], n[e], o[0]), p += h[e].addedLength), i.totalLength = p, i
            },
            getNewSegment: function(e, r, i, a, s, n, h) {
              s < 0 ? s = 0 : s > 1 && (s = 1);
              var p, c = o(s, h),
                f = o(n = n > 1 ? 1 : n, h),
                u = e.length,
                d = 1 - c,
                m = 1 - f,
                y = d * d * d,
                g = c * d * d * 3,
                v = c * c * d * 3,
                b = c * c * c,
                x = d * d * m,
                C = c * d * m + d * c * m + d * d * f,
                A = c * c * m + d * c * f + c * d * f,
                _ = c * c * f,
                E = d * m * m,
                S = c * m * m + d * f * m + d * m * f,
                P = c * f * m + d * f * f + c * m * f,
                T = c * f * f,
                F = m * m * m,
                w = f * m * m + m * f * m + m * m * f,
                M = f * f * m + m * f * f + f * m * f,
                k = f * f * f;
              for (p = 0; p < u; p += 1) l[4 * p] = t.round(1e3 * (y * e[p] + g * i[p] + v * a[p] + b * r[p])) / 1e3, l[4 * p + 1] = t.round(1e3 * (x * e[p] + C * i[p] + A * a[p] + _ * r[p])) / 1e3, l[4 * p + 2] = t.round(1e3 * (E * e[p] + S * i[p] + P * a[p] + T * r[p])) / 1e3, l[4 * p + 3] = t.round(1e3 * (F * e[p] + w * i[p] + M * a[p] + k * r[p])) / 1e3;
              return l
            },
            getPointInSegment: function(e, r, i, a, s, n) {
              var l = o(s, n),
                h = 1 - l;
              return [t.round(1e3 * (h * h * h * e[0] + (l * h * h + h * l * h + h * h * l) * i[0] + (l * l * h + h * l * l + l * h * l) * a[0] + l * l * l * r[0])) / 1e3, t.round(1e3 * (h * h * h * e[1] + (l * h * h + h * l * h + h * h * l) * i[1] + (l * l * h + h * l * l + l * h * l) * a[1] + l * l * l * r[1])) / 1e3]
            },
            buildBezierData: n,
            pointOnLine2D: e,
            pointOnLine3D: function(r, i, a, s, n, o, l, h, p) {
              if (0 === a && 0 === o && 0 === p) return e(r, i, s, n, l, h);
              var c, f = t.sqrt(t.pow(s - r, 2) + t.pow(n - i, 2) + t.pow(o - a, 2)),
                u = t.sqrt(t.pow(l - r, 2) + t.pow(h - i, 2) + t.pow(p - a, 2)),
                d = t.sqrt(t.pow(l - s, 2) + t.pow(h - n, 2) + t.pow(p - o, 2));
              return (c = f > u ? f > d ? f - u - d : d - u - f : d > u ? d - u - f : u - f - d) > -1e-4 && c < 1e-4
            }
          }
        }
        var bez = bezFunction(),
          initFrame = initialDefaultFrame,
          mathAbs = Math.abs;

        function interpolateValue(t, e) {
          var r, i = this.offsetTime;
          "multidimensional" === this.propType && (r = createTypedArray("float32", this.pv.length));
          for (var a, s, n, o, l, h, p, c, f, u = e.lastIndex, d = u, m = this.keyframes.length - 1, y = !0; y;) {
            if (a = this.keyframes[d], s = this.keyframes[d + 1], d === m - 1 && t >= s.t - i) {
              a.h && (a = s), u = 0;
              break
            }
            if (s.t - i > t) {
              u = d;
              break
            }
            d < m - 1 ? d += 1 : (u = 0, y = !1)
          }
          n = this.keyframesMetadata[d] || {};
          var g, v = s.t - i,
            b = a.t - i;
          if (a.to) {
            n.bezierData || (n.bezierData = bez.buildBezierData(a.s, s.s || a.e, a.to, a.ti));
            var x = n.bezierData;
            if (t >= v || t < b) {
              var C = t >= v ? x.points.length - 1 : 0;
              for (l = x.points[C].point.length, o = 0; o < l; o += 1) r[o] = x.points[C].point[o]
            } else {
              n.__fnct ? f = n.__fnct : (f = BezierFactory.getBezierEasing(a.o.x, a.o.y, a.i.x, a.i.y, a.n).get, n.__fnct = f), h = f((t - b) / (v - b));
              var A, _ = x.segmentLength * h,
                E = e.lastFrame < t && e._lastKeyframeIndex === d ? e._lastAddedLength : 0;
              for (c = e.lastFrame < t && e._lastKeyframeIndex === d ? e._lastPoint : 0, y = !0, p = x.points.length; y;) {
                if (E += x.points[c].partialLength, 0 === _ || 0 === h || c === x.points.length - 1) {
                  for (l = x.points[c].point.length, o = 0; o < l; o += 1) r[o] = x.points[c].point[o];
                  break
                }
                if (_ >= E && _ < E + x.points[c + 1].partialLength) {
                  for (A = (_ - E) / x.points[c + 1].partialLength, l = x.points[c].point.length, o = 0; o < l; o += 1) r[o] = x.points[c].point[o] + (x.points[c + 1].point[o] - x.points[c].point[o]) * A;
                  break
                }
                c < p - 1 ? c += 1 : y = !1
              }
              e._lastPoint = c, e._lastAddedLength = E - x.points[c].partialLength, e._lastKeyframeIndex = d
            }
          } else {
            var S, P, T, F, w;
            if (m = a.s.length, g = s.s || a.e, this.sh && 1 !== a.h) t >= v ? (r[0] = g[0], r[1] = g[1], r[2] = g[2]) : t <= b ? (r[0] = a.s[0], r[1] = a.s[1], r[2] = a.s[2]) : quaternionToEuler(r, slerp(createQuaternion(a.s), createQuaternion(g), (t - b) / (v - b)));
            else
              for (d = 0; d < m; d += 1) 1 !== a.h && (t >= v ? h = 1 : t < b ? h = 0 : (a.o.x.constructor === Array ? (n.__fnct || (n.__fnct = []), n.__fnct[d] ? f = n.__fnct[d] : (S = void 0 === a.o.x[d] ? a.o.x[0] : a.o.x[d], P = void 0 === a.o.y[d] ? a.o.y[0] : a.o.y[d], T = void 0 === a.i.x[d] ? a.i.x[0] : a.i.x[d], F = void 0 === a.i.y[d] ? a.i.y[0] : a.i.y[d], f = BezierFactory.getBezierEasing(S, P, T, F).get, n.__fnct[d] = f)) : n.__fnct ? f = n.__fnct : (S = a.o.x, P = a.o.y, T = a.i.x, F = a.i.y, f = BezierFactory.getBezierEasing(S, P, T, F).get, a.keyframeMetadata = f), h = f((t - b) / (v - b)))), g = s.s || a.e, w = 1 === a.h ? a.s[d] : a.s[d] + (g[d] - a.s[d]) * h, "multidimensional" === this.propType ? r[d] = w : r = w
          }
          return e.lastIndex = u, r
        }

        function slerp(t, e, r) {
          var i, a, s, n, o, l = [],
            h = t[0],
            p = t[1],
            c = t[2],
            f = t[3],
            u = e[0],
            d = e[1],
            m = e[2],
            y = e[3];
          return (a = h * u + p * d + c * m + f * y) < 0 && (a = -a, u = -u, d = -d, m = -m, y = -y), 1 - a > 1e-6 ? (i = Math.acos(a), s = Math.sin(i), n = Math.sin((1 - r) * i) / s, o = Math.sin(r * i) / s) : (n = 1 - r, o = r), l[0] = n * h + o * u, l[1] = n * p + o * d, l[2] = n * c + o * m, l[3] = n * f + o * y, l
        }

        function quaternionToEuler(t, e) {
          var r = e[0],
            i = e[1],
            a = e[2],
            s = e[3],
            n = Math.atan2(2 * i * s - 2 * r * a, 1 - 2 * i * i - 2 * a * a),
            o = Math.asin(2 * r * i + 2 * a * s),
            l = Math.atan2(2 * r * s - 2 * i * a, 1 - 2 * r * r - 2 * a * a);
          t[0] = n / degToRads, t[1] = o / degToRads, t[2] = l / degToRads
        }

        function createQuaternion(t) {
          var e = t[0] * degToRads,
            r = t[1] * degToRads,
            i = t[2] * degToRads,
            a = Math.cos(e / 2),
            s = Math.cos(r / 2),
            n = Math.cos(i / 2),
            o = Math.sin(e / 2),
            l = Math.sin(r / 2),
            h = Math.sin(i / 2);
          return [o * l * n + a * s * h, o * s * n + a * l * h, a * l * n - o * s * h, a * s * n - o * l * h]
        }

        function getValueAtCurrentTime() {
          var t = this.comp.renderedFrame - this.offsetTime,
            e = this.keyframes[0].t - this.offsetTime,
            r = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
          if (!(t === this._caching.lastFrame || this._caching.lastFrame !== initFrame && (this._caching.lastFrame >= r && t >= r || this._caching.lastFrame < e && t < e))) {
            this._caching.lastFrame >= t && (this._caching._lastKeyframeIndex = -1, this._caching.lastIndex = 0);
            var i = this.interpolateValue(t, this._caching);
            this.pv = i
          }
          return this._caching.lastFrame = t, this.pv
        }

        function setVValue(t) {
          var e;
          if ("unidimensional" === this.propType) e = t * this.mult, mathAbs(this.v - e) > 1e-5 && (this.v = e, this._mdf = !0);
          else
            for (var r = 0, i = this.v.length; r < i;) e = t[r] * this.mult, mathAbs(this.v[r] - e) > 1e-5 && (this.v[r] = e, this._mdf = !0), r += 1
        }

        function processEffectsSequence() {
          if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length)
            if (this.lock) this.setVValue(this.pv);
            else {
              var t;
              this.lock = !0, this._mdf = this._isFirstFrame;
              var e = this.effectsSequence.length,
                r = this.kf ? this.pv : this.data.k;
              for (t = 0; t < e; t += 1) r = this.effectsSequence[t](r);
              this.setVValue(r), this._isFirstFrame = !1, this.lock = !1, this.frameId = this.elem.globalData.frameId
            }
        }

        function addEffect(t) {
          this.effectsSequence.push(t), this.container.addDynamicProperty(this)
        }

        function ValueProperty(t, e, r, i) {
          this.propType = "unidimensional", this.mult = r || 1, this.data = e, this.v = r ? e.k * r : e.k, this.pv = e.k, this._mdf = !1, this.elem = t, this.container = i, this.comp = t.comp, this.k = !1, this.kf = !1, this.vel = 0, this.effectsSequence = [], this._isFirstFrame = !0, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.addEffect = addEffect
        }

        function MultiDimensionalProperty(t, e, r, i) {
          var a;
          this.propType = "multidimensional", this.mult = r || 1, this.data = e, this._mdf = !1, this.elem = t, this.container = i, this.comp = t.comp, this.k = !1, this.kf = !1, this.frameId = -1;
          var s = e.k.length;
          for (this.v = createTypedArray("float32", s), this.pv = createTypedArray("float32", s), this.vel = createTypedArray("float32", s), a = 0; a < s; a += 1) this.v[a] = e.k[a] * this.mult, this.pv[a] = e.k[a];
          this._isFirstFrame = !0, this.effectsSequence = [], this.getValue = processEffectsSequence, this.setVValue = setVValue, this.addEffect = addEffect
        }

        function KeyframedValueProperty(t, e, r, i) {
          this.propType = "unidimensional", this.keyframes = e.k, this.keyframesMetadata = [], this.offsetTime = t.data.st, this.frameId = -1, this._caching = {
            lastFrame: initFrame,
            lastIndex: 0,
            value: 0,
            _lastKeyframeIndex: -1
          }, this.k = !0, this.kf = !0, this.data = e, this.mult = r || 1, this.elem = t, this.container = i, this.comp = t.comp, this.v = initFrame, this.pv = initFrame, this._isFirstFrame = !0, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.interpolateValue = interpolateValue, this.effectsSequence = [getValueAtCurrentTime.bind(this)], this.addEffect = addEffect
        }

        function KeyframedMultidimensionalProperty(t, e, r, i) {
          var a;
          this.propType = "multidimensional";
          var s, n, o, l, h = e.k.length;
          for (a = 0; a < h - 1; a += 1) e.k[a].to && e.k[a].s && e.k[a + 1] && e.k[a + 1].s && (s = e.k[a].s, n = e.k[a + 1].s, o = e.k[a].to, l = e.k[a].ti, (2 === s.length && (s[0] !== n[0] || s[1] !== n[1]) && bez.pointOnLine2D(s[0], s[1], n[0], n[1], s[0] + o[0], s[1] + o[1]) && bez.pointOnLine2D(s[0], s[1], n[0], n[1], n[0] + l[0], n[1] + l[1]) || 3 === s.length && (s[0] !== n[0] || s[1] !== n[1] || s[2] !== n[2]) && bez.pointOnLine3D(s[0], s[1], s[2], n[0], n[1], n[2], s[0] + o[0], s[1] + o[1], s[2] + o[2]) && bez.pointOnLine3D(s[0], s[1], s[2], n[0], n[1], n[2], n[0] + l[0], n[1] + l[1], n[2] + l[2])) && (e.k[a].to = null, e.k[a].ti = null), s[0] === n[0] && s[1] === n[1] && 0 === o[0] && 0 === o[1] && 0 === l[0] && 0 === l[1] && (2 === s.length || s[2] === n[2] && 0 === o[2] && 0 === l[2]) && (e.k[a].to = null, e.k[a].ti = null));
          this.effectsSequence = [getValueAtCurrentTime.bind(this)], this.data = e, this.keyframes = e.k, this.keyframesMetadata = [], this.offsetTime = t.data.st, this.k = !0, this.kf = !0, this._isFirstFrame = !0, this.mult = r || 1, this.elem = t, this.container = i, this.comp = t.comp, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.interpolateValue = interpolateValue, this.frameId = -1;
          var p = e.k[0].s.length;
          for (this.v = createTypedArray("float32", p), this.pv = createTypedArray("float32", p), a = 0; a < p; a += 1) this.v[a] = initFrame, this.pv[a] = initFrame;
          this._caching = {
            lastFrame: initFrame,
            lastIndex: 0,
            value: createTypedArray("float32", p)
          }, this.addEffect = addEffect
        }
        var PropertyFactory = {
          getProp: function(t, e, r, i, a) {
            var s;
            if (e.sid && (e = t.globalData.slotManager.getProp(e)), e.k.length)
              if ("number" == typeof e.k[0]) s = new MultiDimensionalProperty(t, e, i, a);
              else switch (r) {
                case 0:
                  s = new KeyframedValueProperty(t, e, i, a);
                  break;
                case 1:
                  s = new KeyframedMultidimensionalProperty(t, e, i, a)
              } else s = new ValueProperty(t, e, i, a);
            return s.effectsSequence.length && a.addDynamicProperty(s), s
          }
        };

        function DynamicPropertyContainer() {}
        DynamicPropertyContainer.prototype = {
          addDynamicProperty: function(t) {
            -1 === this.dynamicProperties.indexOf(t) && (this.dynamicProperties.push(t), this.container.addDynamicProperty(this), this._isAnimated = !0)
          },
          iterateDynamicProperties: function() {
            var t;
            this._mdf = !1;
            var e = this.dynamicProperties.length;
            for (t = 0; t < e; t += 1) this.dynamicProperties[t].getValue(), this.dynamicProperties[t]._mdf && (this._mdf = !0)
          },
          initDynamicPropertyContainer: function(t) {
            this.container = t, this.dynamicProperties = [], this._mdf = !1, this._isAnimated = !1
          }
        };
        var pointPool = poolFactory(8, (function() {
          return createTypedArray("float32", 2)
        }));

        function ShapePath() {
          this.c = !1, this._length = 0, this._maxLength = 8, this.v = createSizedArray(this._maxLength), this.o = createSizedArray(this._maxLength), this.i = createSizedArray(this._maxLength)
        }
        ShapePath.prototype.setPathData = function(t, e) {
          this.c = t, this.setLength(e);
          for (var r = 0; r < e;) this.v[r] = pointPool.newElement(), this.o[r] = pointPool.newElement(), this.i[r] = pointPool.newElement(), r += 1
        }, ShapePath.prototype.setLength = function(t) {
          for (; this._maxLength < t;) this.doubleArrayLength();
          this._length = t
        }, ShapePath.prototype.doubleArrayLength = function() {
          this.v = this.v.concat(createSizedArray(this._maxLength)), this.i = this.i.concat(createSizedArray(this._maxLength)), this.o = this.o.concat(createSizedArray(this._maxLength)), this._maxLength *= 2
        }, ShapePath.prototype.setXYAt = function(t, e, r, i, a) {
          var s;
          switch (this._length = Math.max(this._length, i + 1), this._length >= this._maxLength && this.doubleArrayLength(), r) {
            case "v":
              s = this.v;
              break;
            case "i":
              s = this.i;
              break;
            case "o":
              s = this.o;
              break;
            default:
              s = []
          }(!s[i] || s[i] && !a) && (s[i] = pointPool.newElement()), s[i][0] = t, s[i][1] = e
        }, ShapePath.prototype.setTripleAt = function(t, e, r, i, a, s, n, o) {
          this.setXYAt(t, e, "v", n, o), this.setXYAt(r, i, "o", n, o), this.setXYAt(a, s, "i", n, o)
        }, ShapePath.prototype.reverse = function() {
          var t = new ShapePath;
          t.setPathData(this.c, this._length);
          var e = this.v,
            r = this.o,
            i = this.i,
            a = 0;
          this.c && (t.setTripleAt(e[0][0], e[0][1], i[0][0], i[0][1], r[0][0], r[0][1], 0, !1), a = 1);
          var s, n = this._length - 1,
            o = this._length;
          for (s = a; s < o; s += 1) t.setTripleAt(e[n][0], e[n][1], i[n][0], i[n][1], r[n][0], r[n][1], s, !1), n -= 1;
          return t
        }, ShapePath.prototype.length = function() {
          return this._length
        };
        var shapePool = (factory = poolFactory(4, (function() {
            return new ShapePath
          }), (function(t) {
            var e, r = t._length;
            for (e = 0; e < r; e += 1) pointPool.release(t.v[e]), pointPool.release(t.i[e]), pointPool.release(t.o[e]), t.v[e] = null, t.i[e] = null, t.o[e] = null;
            t._length = 0, t.c = !1
          })), factory.clone = function(t) {
            var e, r = factory.newElement(),
              i = void 0 === t._length ? t.v.length : t._length;
            for (r.setLength(i), r.c = t.c, e = 0; e < i; e += 1) r.setTripleAt(t.v[e][0], t.v[e][1], t.o[e][0], t.o[e][1], t.i[e][0], t.i[e][1], e);
            return r
          }, factory),
          factory;

        function ShapeCollection() {
          this._length = 0, this._maxLength = 4, this.shapes = createSizedArray(this._maxLength)
        }
        ShapeCollection.prototype.addShape = function(t) {
          this._length === this._maxLength && (this.shapes = this.shapes.concat(createSizedArray(this._maxLength)), this._maxLength *= 2), this.shapes[this._length] = t, this._length += 1
        }, ShapeCollection.prototype.releaseShapes = function() {
          var t;
          for (t = 0; t < this._length; t += 1) shapePool.release(this.shapes[t]);
          this._length = 0
        };
        var shapeCollectionPool = (ob = {
            newShapeCollection: function() {
              return _length ? pool[_length -= 1] : new ShapeCollection
            },
            release: function(t) {
              var e, r = t._length;
              for (e = 0; e < r; e += 1) shapePool.release(t.shapes[e]);
              t._length = 0, _length === _maxLength && (pool = pooling.double(pool), _maxLength *= 2), pool[_length] = t, _length += 1
            }
          }, _length = 0, _maxLength = 4, pool = createSizedArray(_maxLength), ob),
          ob, _length, _maxLength, pool, ShapePropertyFactory = function() {
            var t = -999999;

            function e(t, e, r) {
              var i, a, s, n, o, l, h, p, c, f = r.lastIndex,
                u = this.keyframes;
              if (t < u[0].t - this.offsetTime) i = u[0].s[0], s = !0, f = 0;
              else if (t >= u[u.length - 1].t - this.offsetTime) i = u[u.length - 1].s ? u[u.length - 1].s[0] : u[u.length - 2].e[0], s = !0;
              else {
                for (var d, m, y, g = f, v = u.length - 1, b = !0; b && (d = u[g], !((m = u[g + 1]).t - this.offsetTime > t));) g < v - 1 ? g += 1 : b = !1;
                if (y = this.keyframesMetadata[g] || {}, f = g, !(s = 1 === d.h)) {
                  if (t >= m.t - this.offsetTime) p = 1;
                  else if (t < d.t - this.offsetTime) p = 0;
                  else {
                    var x;
                    y.__fnct ? x = y.__fnct : (x = BezierFactory.getBezierEasing(d.o.x, d.o.y, d.i.x, d.i.y).get, y.__fnct = x), p = x((t - (d.t - this.offsetTime)) / (m.t - this.offsetTime - (d.t - this.offsetTime)))
                  }
                  a = m.s ? m.s[0] : d.e[0]
                }
                i = d.s[0]
              }
              for (l = e._length, h = i.i[0].length, r.lastIndex = f, n = 0; n < l; n += 1)
                for (o = 0; o < h; o += 1) c = s ? i.i[n][o] : i.i[n][o] + (a.i[n][o] - i.i[n][o]) * p, e.i[n][o] = c, c = s ? i.o[n][o] : i.o[n][o] + (a.o[n][o] - i.o[n][o]) * p, e.o[n][o] = c, c = s ? i.v[n][o] : i.v[n][o] + (a.v[n][o] - i.v[n][o]) * p, e.v[n][o] = c
            }

            function r() {
              var e = this.comp.renderedFrame - this.offsetTime,
                r = this.keyframes[0].t - this.offsetTime,
                i = this.keyframes[this.keyframes.length - 1].t - this.offsetTime,
                a = this._caching.lastFrame;
              return a !== t && (a < r && e < r || a > i && e > i) || (this._caching.lastIndex = a < e ? this._caching.lastIndex : 0, this.interpolateShape(e, this.pv, this._caching)), this._caching.lastFrame = e, this.pv
            }

            function i() {
              this.paths = this.localShapeCollection
            }

            function a(t) {
              (function(t, e) {
                if (t._length !== e._length || t.c !== e.c) return !1;
                var r, i = t._length;
                for (r = 0; r < i; r += 1)
                  if (t.v[r][0] !== e.v[r][0] || t.v[r][1] !== e.v[r][1] || t.o[r][0] !== e.o[r][0] || t.o[r][1] !== e.o[r][1] || t.i[r][0] !== e.i[r][0] || t.i[r][1] !== e.i[r][1]) return !1;
                return !0
              })(this.v, t) || (this.v = shapePool.clone(t), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = !0, this.paths = this.localShapeCollection)
            }

            function s() {
              if (this.elem.globalData.frameId !== this.frameId)
                if (this.effectsSequence.length)
                  if (this.lock) this.setVValue(this.pv);
                  else {
                    var t, e;
                    this.lock = !0, this._mdf = !1, t = this.kf ? this.pv : this.data.ks ? this.data.ks.k : this.data.pt.k;
                    var r = this.effectsSequence.length;
                    for (e = 0; e < r; e += 1) t = this.effectsSequence[e](t);
                    this.setVValue(t), this.lock = !1, this.frameId = this.elem.globalData.frameId
                  }
              else this._mdf = !1
            }

            function n(t, e, r) {
              this.propType = "shape", this.comp = t.comp, this.container = t, this.elem = t, this.data = e, this.k = !1, this.kf = !1, this._mdf = !1;
              var a = 3 === r ? e.pt.k : e.ks.k;
              this.v = shapePool.clone(a), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = i, this.effectsSequence = []
            }

            function o(t) {
              this.effectsSequence.push(t), this.container.addDynamicProperty(this)
            }

            function l(e, a, s) {
              this.propType = "shape", this.comp = e.comp, this.elem = e, this.container = e, this.offsetTime = e.data.st, this.keyframes = 3 === s ? a.pt.k : a.ks.k, this.keyframesMetadata = [], this.k = !0, this.kf = !0;
              var n = this.keyframes[0].s[0].i.length;
              this.v = shapePool.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, n), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = t, this.reset = i, this._caching = {
                lastFrame: t,
                lastIndex: 0
              }, this.effectsSequence = [r.bind(this)]
            }
            n.prototype.interpolateShape = e, n.prototype.getValue = s, n.prototype.setVValue = a, n.prototype.addEffect = o, l.prototype.getValue = s, l.prototype.interpolateShape = e, l.prototype.setVValue = a, l.prototype.addEffect = o;
            var h = function() {
                var t = roundCorner;

                function e(t, e) {
                  this.v = shapePool.newElement(), this.v.setPathData(!0, 4), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = e.d, this.elem = t, this.comp = t.comp, this.frameId = -1, this.initDynamicPropertyContainer(t), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s, 1, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertEllToPath())
                }
                return e.prototype = {
                  reset: i,
                  getValue: function() {
                    this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath())
                  },
                  convertEllToPath: function() {
                    var e = this.p.v[0],
                      r = this.p.v[1],
                      i = this.s.v[0] / 2,
                      a = this.s.v[1] / 2,
                      s = 3 !== this.d,
                      n = this.v;
                    n.v[0][0] = e, n.v[0][1] = r - a, n.v[1][0] = s ? e + i : e - i, n.v[1][1] = r, n.v[2][0] = e, n.v[2][1] = r + a, n.v[3][0] = s ? e - i : e + i, n.v[3][1] = r, n.i[0][0] = s ? e - i * t : e + i * t, n.i[0][1] = r - a, n.i[1][0] = s ? e + i : e - i, n.i[1][1] = r - a * t, n.i[2][0] = s ? e + i * t : e - i * t, n.i[2][1] = r + a, n.i[3][0] = s ? e - i : e + i, n.i[3][1] = r + a * t, n.o[0][0] = s ? e + i * t : e - i * t, n.o[0][1] = r - a, n.o[1][0] = s ? e + i : e - i, n.o[1][1] = r + a * t, n.o[2][0] = s ? e - i * t : e + i * t, n.o[2][1] = r + a, n.o[3][0] = s ? e - i : e + i, n.o[3][1] = r - a * t
                  }
                }, extendPrototype([DynamicPropertyContainer], e), e
              }(),
              p = function() {
                function t(t, e) {
                  this.v = shapePool.newElement(), this.v.setPathData(!0, 0), this.elem = t, this.comp = t.comp, this.data = e, this.frameId = -1, this.d = e.d, this.initDynamicPropertyContainer(t), 1 === e.sy ? (this.ir = PropertyFactory.getProp(t, e.ir, 0, 0, this), this.is = PropertyFactory.getProp(t, e.is, 0, .01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = PropertyFactory.getProp(t, e.pt, 0, 0, this), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.r = PropertyFactory.getProp(t, e.r, 0, degToRads, this), this.or = PropertyFactory.getProp(t, e.or, 0, 0, this), this.os = PropertyFactory.getProp(t, e.os, 0, .01, this), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertToPath())
                }
                return t.prototype = {
                  reset: i,
                  getValue: function() {
                    this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath())
                  },
                  convertStarToPath: function() {
                    var t, e, r, i, a = 2 * Math.floor(this.pt.v),
                      s = 2 * Math.PI / a,
                      n = !0,
                      o = this.or.v,
                      l = this.ir.v,
                      h = this.os.v,
                      p = this.is.v,
                      c = 2 * Math.PI * o / (2 * a),
                      f = 2 * Math.PI * l / (2 * a),
                      u = -Math.PI / 2;
                    u += this.r.v;
                    var d = 3 === this.data.d ? -1 : 1;
                    for (this.v._length = 0, t = 0; t < a; t += 1) {
                      r = n ? h : p, i = n ? c : f;
                      var m = (e = n ? o : l) * Math.cos(u),
                        y = e * Math.sin(u),
                        g = 0 === m && 0 === y ? 0 : y / Math.sqrt(m * m + y * y),
                        v = 0 === m && 0 === y ? 0 : -m / Math.sqrt(m * m + y * y);
                      m += +this.p.v[0], y += +this.p.v[1], this.v.setTripleAt(m, y, m - g * i * r * d, y - v * i * r * d, m + g * i * r * d, y + v * i * r * d, t, !0), n = !n, u += s * d
                    }
                  },
                  convertPolygonToPath: function() {
                    var t, e = Math.floor(this.pt.v),
                      r = 2 * Math.PI / e,
                      i = this.or.v,
                      a = this.os.v,
                      s = 2 * Math.PI * i / (4 * e),
                      n = .5 * -Math.PI,
                      o = 3 === this.data.d ? -1 : 1;
                    for (n += this.r.v, this.v._length = 0, t = 0; t < e; t += 1) {
                      var l = i * Math.cos(n),
                        h = i * Math.sin(n),
                        p = 0 === l && 0 === h ? 0 : h / Math.sqrt(l * l + h * h),
                        c = 0 === l && 0 === h ? 0 : -l / Math.sqrt(l * l + h * h);
                      l += +this.p.v[0], h += +this.p.v[1], this.v.setTripleAt(l, h, l - p * s * a * o, h - c * s * a * o, l + p * s * a * o, h + c * s * a * o, t, !0), n += r * o
                    }
                    this.paths.length = 0, this.paths[0] = this.v
                  }
                }, extendPrototype([DynamicPropertyContainer], t), t
              }(),
              c = function() {
                function t(t, e) {
                  this.v = shapePool.newElement(), this.v.c = !0, this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = t, this.comp = t.comp, this.frameId = -1, this.d = e.d, this.initDynamicPropertyContainer(t), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s, 1, 0, this), this.r = PropertyFactory.getProp(t, e.r, 0, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertRectToPath())
                }
                return t.prototype = {
                  convertRectToPath: function() {
                    var t = this.p.v[0],
                      e = this.p.v[1],
                      r = this.s.v[0] / 2,
                      i = this.s.v[1] / 2,
                      a = bmMin(r, i, this.r.v),
                      s = a * (1 - roundCorner);
                    this.v._length = 0, 2 === this.d || 1 === this.d ? (this.v.setTripleAt(t + r, e - i + a, t + r, e - i + a, t + r, e - i + s, 0, !0), this.v.setTripleAt(t + r, e + i - a, t + r, e + i - s, t + r, e + i - a, 1, !0), 0 !== a ? (this.v.setTripleAt(t + r - a, e + i, t + r - a, e + i, t + r - s, e + i, 2, !0), this.v.setTripleAt(t - r + a, e + i, t - r + s, e + i, t - r + a, e + i, 3, !0), this.v.setTripleAt(t - r, e + i - a, t - r, e + i - a, t - r, e + i - s, 4, !0), this.v.setTripleAt(t - r, e - i + a, t - r, e - i + s, t - r, e - i + a, 5, !0), this.v.setTripleAt(t - r + a, e - i, t - r + a, e - i, t - r + s, e - i, 6, !0), this.v.setTripleAt(t + r - a, e - i, t + r - s, e - i, t + r - a, e - i, 7, !0)) : (this.v.setTripleAt(t - r, e + i, t - r + s, e + i, t - r, e + i, 2), this.v.setTripleAt(t - r, e - i, t - r, e - i + s, t - r, e - i, 3))) : (this.v.setTripleAt(t + r, e - i + a, t + r, e - i + s, t + r, e - i + a, 0, !0), 0 !== a ? (this.v.setTripleAt(t + r - a, e - i, t + r - a, e - i, t + r - s, e - i, 1, !0), this.v.setTripleAt(t - r + a, e - i, t - r + s, e - i, t - r + a, e - i, 2, !0), this.v.setTripleAt(t - r, e - i + a, t - r, e - i + a, t - r, e - i + s, 3, !0), this.v.setTripleAt(t - r, e + i - a, t - r, e + i - s, t - r, e + i - a, 4, !0), this.v.setTripleAt(t - r + a, e + i, t - r + a, e + i, t - r + s, e + i, 5, !0), this.v.setTripleAt(t + r - a, e + i, t + r - s, e + i, t + r - a, e + i, 6, !0), this.v.setTripleAt(t + r, e + i - a, t + r, e + i - a, t + r, e + i - s, 7, !0)) : (this.v.setTripleAt(t - r, e - i, t - r + s, e - i, t - r, e - i, 1, !0), this.v.setTripleAt(t - r, e + i, t - r, e + i - s, t - r, e + i, 2, !0), this.v.setTripleAt(t + r, e + i, t + r - s, e + i, t + r, e + i, 3, !0)))
                  },
                  getValue: function() {
                    this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath())
                  },
                  reset: i
                }, extendPrototype([DynamicPropertyContainer], t), t
              }();
            return {
              getShapeProp: function(t, e, r) {
                var i;
                return 3 === r || 4 === r ? i = (3 === r ? e.pt : e.ks).k.length ? new l(t, e, r) : new n(t, e, r) : 5 === r ? i = new c(t, e) : 6 === r ? i = new h(t, e) : 7 === r && (i = new p(t, e)), i.k && t.addDynamicProperty(i), i
              },
              getConstructorFunction: function() {
                return n
              },
              getKeyframedConstructorFunction: function() {
                return l
              }
            }
          }(),
          Matrix = function() {
            var t = Math.cos,
              e = Math.sin,
              r = Math.tan,
              i = Math.round;

            function a() {
              return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this
            }

            function s(r) {
              if (0 === r) return this;
              var i = t(r),
                a = e(r);
              return this._t(i, -a, 0, 0, a, i, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
            }

            function n(r) {
              if (0 === r) return this;
              var i = t(r),
                a = e(r);
              return this._t(1, 0, 0, 0, 0, i, -a, 0, 0, a, i, 0, 0, 0, 0, 1)
            }

            function o(r) {
              if (0 === r) return this;
              var i = t(r),
                a = e(r);
              return this._t(i, 0, a, 0, 0, 1, 0, 0, -a, 0, i, 0, 0, 0, 0, 1)
            }

            function l(r) {
              if (0 === r) return this;
              var i = t(r),
                a = e(r);
              return this._t(i, -a, 0, 0, a, i, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
            }

            function h(t, e) {
              return this._t(1, e, t, 1, 0, 0)
            }

            function p(t, e) {
              return this.shear(r(t), r(e))
            }

            function c(i, a) {
              var s = t(a),
                n = e(a);
              return this._t(s, n, 0, 0, -n, s, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, r(i), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(s, -n, 0, 0, n, s, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
            }

            function f(t, e, r) {
              return r || 0 === r || (r = 1), 1 === t && 1 === e && 1 === r ? this : this._t(t, 0, 0, 0, 0, e, 0, 0, 0, 0, r, 0, 0, 0, 0, 1)
            }

            function u(t, e, r, i, a, s, n, o, l, h, p, c, f, u, d, m) {
              return this.props[0] = t, this.props[1] = e, this.props[2] = r, this.props[3] = i, this.props[4] = a, this.props[5] = s, this.props[6] = n, this.props[7] = o, this.props[8] = l, this.props[9] = h, this.props[10] = p, this.props[11] = c, this.props[12] = f, this.props[13] = u, this.props[14] = d, this.props[15] = m, this
            }

            function d(t, e, r) {
              return r = r || 0, 0 !== t || 0 !== e || 0 !== r ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, r, 1) : this
            }

            function m(t, e, r, i, a, s, n, o, l, h, p, c, f, u, d, m) {
              var y = this.props;
              if (1 === t && 0 === e && 0 === r && 0 === i && 0 === a && 1 === s && 0 === n && 0 === o && 0 === l && 0 === h && 1 === p && 0 === c) return y[12] = y[12] * t + y[15] * f, y[13] = y[13] * s + y[15] * u, y[14] = y[14] * p + y[15] * d, y[15] *= m, this._identityCalculated = !1, this;
              var g = y[0],
                v = y[1],
                b = y[2],
                x = y[3],
                C = y[4],
                A = y[5],
                _ = y[6],
                E = y[7],
                S = y[8],
                P = y[9],
                T = y[10],
                F = y[11],
                w = y[12],
                M = y[13],
                k = y[14],
                D = y[15];
              return y[0] = g * t + v * a + b * l + x * f, y[1] = g * e + v * s + b * h + x * u, y[2] = g * r + v * n + b * p + x * d, y[3] = g * i + v * o + b * c + x * m, y[4] = C * t + A * a + _ * l + E * f, y[5] = C * e + A * s + _ * h + E * u, y[6] = C * r + A * n + _ * p + E * d, y[7] = C * i + A * o + _ * c + E * m, y[8] = S * t + P * a + T * l + F * f, y[9] = S * e + P * s + T * h + F * u, y[10] = S * r + P * n + T * p + F * d, y[11] = S * i + P * o + T * c + F * m, y[12] = w * t + M * a + k * l + D * f, y[13] = w * e + M * s + k * h + D * u, y[14] = w * r + M * n + k * p + D * d, y[15] = w * i + M * o + k * c + D * m, this._identityCalculated = !1, this
            }

            function y(t) {
              var e = t.props;
              return this.transform(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15])
            }

            function g() {
              return this._identityCalculated || (this._identity = !(1 !== this.props[0] || 0 !== this.props[1] || 0 !== this.props[2] || 0 !== this.props[3] || 0 !== this.props[4] || 1 !== this.props[5] || 0 !== this.props[6] || 0 !== this.props[7] || 0 !== this.props[8] || 0 !== this.props[9] || 1 !== this.props[10] || 0 !== this.props[11] || 0 !== this.props[12] || 0 !== this.props[13] || 0 !== this.props[14] || 1 !== this.props[15]), this._identityCalculated = !0), this._identity
            }

            function v(t) {
              for (var e = 0; e < 16;) {
                if (t.props[e] !== this.props[e]) return !1;
                e += 1
              }
              return !0
            }

            function b(t) {
              var e;
              for (e = 0; e < 16; e += 1) t.props[e] = this.props[e];
              return t
            }

            function x(t) {
              var e;
              for (e = 0; e < 16; e += 1) this.props[e] = t[e]
            }

            function C(t, e, r) {
              return {
                x: t * this.props[0] + e * this.props[4] + r * this.props[8] + this.props[12],
                y: t * this.props[1] + e * this.props[5] + r * this.props[9] + this.props[13],
                z: t * this.props[2] + e * this.props[6] + r * this.props[10] + this.props[14]
              }
            }

            function A(t, e, r) {
              return t * this.props[0] + e * this.props[4] + r * this.props[8] + this.props[12]
            }

            function _(t, e, r) {
              return t * this.props[1] + e * this.props[5] + r * this.props[9] + this.props[13]
            }

            function E(t, e, r) {
              return t * this.props[2] + e * this.props[6] + r * this.props[10] + this.props[14]
            }

            function S() {
              var t = this.props[0] * this.props[5] - this.props[1] * this.props[4],
                e = this.props[5] / t,
                r = -this.props[1] / t,
                i = -this.props[4] / t,
                a = this.props[0] / t,
                s = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / t,
                n = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / t,
                o = new Matrix;
              return o.props[0] = e, o.props[1] = r, o.props[4] = i, o.props[5] = a, o.props[12] = s, o.props[13] = n, o
            }

            function P(t) {
              return this.getInverseMatrix().applyToPointArray(t[0], t[1], t[2] || 0)
            }

            function T(t) {
              var e, r = t.length,
                i = [];
              for (e = 0; e < r; e += 1) i[e] = P(t[e]);
              return i
            }

            function F(t, e, r) {
              var i = createTypedArray("float32", 6);
              if (this.isIdentity()) i[0] = t[0], i[1] = t[1], i[2] = e[0], i[3] = e[1], i[4] = r[0], i[5] = r[1];
              else {
                var a = this.props[0],
                  s = this.props[1],
                  n = this.props[4],
                  o = this.props[5],
                  l = this.props[12],
                  h = this.props[13];
                i[0] = t[0] * a + t[1] * n + l, i[1] = t[0] * s + t[1] * o + h, i[2] = e[0] * a + e[1] * n + l, i[3] = e[0] * s + e[1] * o + h, i[4] = r[0] * a + r[1] * n + l, i[5] = r[0] * s + r[1] * o + h
              }
              return i
            }

            function w(t, e, r) {
              return this.isIdentity() ? [t, e, r] : [t * this.props[0] + e * this.props[4] + r * this.props[8] + this.props[12], t * this.props[1] + e * this.props[5] + r * this.props[9] + this.props[13], t * this.props[2] + e * this.props[6] + r * this.props[10] + this.props[14]]
            }

            function M(t, e) {
              if (this.isIdentity()) return t + "," + e;
              var r = this.props;
              return Math.round(100 * (t * r[0] + e * r[4] + r[12])) / 100 + "," + Math.round(100 * (t * r[1] + e * r[5] + r[13])) / 100
            }

            function k() {
              for (var t = 0, e = this.props, r = "matrix3d("; t < 16;) r += i(1e4 * e[t]) / 1e4, r += 15 === t ? ")" : ",", t += 1;
              return r
            }

            function D(t) {
              return t < 1e-6 && t > 0 || t > -1e-6 && t < 0 ? i(1e4 * t) / 1e4 : t
            }

            function I() {
              var t = this.props;
              return "matrix(" + D(t[0]) + "," + D(t[1]) + "," + D(t[4]) + "," + D(t[5]) + "," + D(t[12]) + "," + D(t[13]) + ")"
            }
            return function() {
              this.reset = a, this.rotate = s, this.rotateX = n, this.rotateY = o, this.rotateZ = l, this.skew = p, this.skewFromAxis = c, this.shear = h, this.scale = f, this.setTransform = u, this.translate = d, this.transform = m, this.multiply = y, this.applyToPoint = C, this.applyToX = A, this.applyToY = _, this.applyToZ = E, this.applyToPointArray = w, this.applyToTriplePoints = F, this.applyToPointStringified = M, this.toCSS = k, this.to2dCSS = I, this.clone = b, this.cloneFromProps = x, this.equals = v, this.inversePoints = T, this.inversePoint = P, this.getInverseMatrix = S, this._t = this.transform, this.isIdentity = g, this._identity = !0, this._identityCalculated = !1, this.props = createTypedArray("float32", 16), this.reset()
            }
          }();

        function _typeof$3(t) {
          return _typeof$3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
          } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
          }, _typeof$3(t)
        }
        var lottie = {},
          standalone = "__[STANDALONE]__",
          animationData = "__[ANIMATIONDATA]__",
          renderer = "";

        function setLocation(t) {
          setLocationHref(t)
        }

        function searchAnimations() {
          !0 === standalone ? animationManager.searchAnimations(animationData, standalone, renderer) : animationManager.searchAnimations()
        }

        function setSubframeRendering(t) {
          setSubframeEnabled(t)
        }

        function setPrefix(t) {
          setIdPrefix(t)
        }

        function loadAnimation(t) {
          return !0 === standalone && (t.animationData = JSON.parse(animationData)), animationManager.loadAnimation(t)
        }

        function setQuality(t) {
          if ("string" == typeof t) switch (t) {
            case "high":
              setDefaultCurveSegments(200);
              break;
            default:
            case "medium":
              setDefaultCurveSegments(50);
              break;
            case "low":
              setDefaultCurveSegments(10)
          } else !isNaN(t) && t > 1 && setDefaultCurveSegments(t);
          getDefaultCurveSegments() >= 50 ? roundValues(!1) : roundValues(!0)
        }

        function inBrowser() {
          return "undefined" != typeof navigator
        }

        function installPlugin(t, e) {
          "expressions" === t && setExpressionsPlugin(e)
        }

        function getFactory(t) {
          switch (t) {
            case "propertyFactory":
              return PropertyFactory;
            case "shapePropertyFactory":
              return ShapePropertyFactory;
            case "matrix":
              return Matrix;
            default:
              return null
          }
        }

        function checkReady() {
          "complete" === document.readyState && (clearInterval(readyStateCheckInterval), searchAnimations())
        }

        function getQueryVariable(t) {
          for (var e = queryString.split("&"), r = 0; r < e.length; r += 1) {
            var i = e[r].split("=");
            if (decodeURIComponent(i[0]) == t) return decodeURIComponent(i[1])
          }
          return null
        }
        lottie.play = animationManager.play, lottie.pause = animationManager.pause, lottie.setLocationHref = setLocation, lottie.togglePause = animationManager.togglePause, lottie.setSpeed = animationManager.setSpeed, lottie.setDirection = animationManager.setDirection, lottie.stop = animationManager.stop, lottie.searchAnimations = searchAnimations, lottie.registerAnimation = animationManager.registerAnimation, lottie.loadAnimation = loadAnimation, lottie.setSubframeRendering = setSubframeRendering, lottie.resize = animationManager.resize, lottie.goToAndStop = animationManager.goToAndStop, lottie.destroy = animationManager.destroy, lottie.setQuality = setQuality, lottie.inBrowser = inBrowser, lottie.installPlugin = installPlugin, lottie.freeze = animationManager.freeze, lottie.unfreeze = animationManager.unfreeze, lottie.setVolume = animationManager.setVolume, lottie.mute = animationManager.mute, lottie.unmute = animationManager.unmute, lottie.getRegisteredAnimations = animationManager.getRegisteredAnimations, lottie.useWebWorker = setWebWorker, lottie.setIDPrefix = setPrefix, lottie.__getFactory = getFactory, lottie.version = "5.12.2";
        var queryString = "";
        if (standalone) {
          var scripts = document.getElementsByTagName("script"),
            index = scripts.length - 1,
            myScript = scripts[index] || {
              src: ""
            };
          queryString = myScript.src ? myScript.src.replace(/^[^\?]+\??/, "") : "", renderer = getQueryVariable("renderer")
        }
        var readyStateCheckInterval = setInterval(checkReady, 100);
        try {
          "object" !== _typeof$3(exports) && __webpack_require__.amdO
        } catch (t) {}
        var ShapeModifiers = function() {
          var t = {},
            e = {};
          return t.registerModifier = function(t, r) {
            e[t] || (e[t] = r)
          }, t.getModifier = function(t, r, i) {
            return new e[t](r, i)
          }, t
        }();

        function ShapeModifier() {}

        function TrimModifier() {}

        function PuckerAndBloatModifier() {}
        ShapeModifier.prototype.initModifierProperties = function() {}, ShapeModifier.prototype.addShapeToModifier = function() {}, ShapeModifier.prototype.addShape = function(t) {
          if (!this.closed) {
            t.sh.container.addDynamicProperty(t.sh);
            var e = {
              shape: t.sh,
              data: t,
              localShapeCollection: shapeCollectionPool.newShapeCollection()
            };
            this.shapes.push(e), this.addShapeToModifier(e), this._isAnimated && t.setAsAnimated()
          }
        }, ShapeModifier.prototype.init = function(t, e) {
          this.shapes = [], this.elem = t, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e), this.frameId = initialDefaultFrame, this.closed = !1, this.k = !1, this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
        }, ShapeModifier.prototype.processKeys = function() {
          this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties())
        }, extendPrototype([DynamicPropertyContainer], ShapeModifier), extendPrototype([ShapeModifier], TrimModifier), TrimModifier.prototype.initModifierProperties = function(t, e) {
          this.s = PropertyFactory.getProp(t, e.s, 0, .01, this), this.e = PropertyFactory.getProp(t, e.e, 0, .01, this), this.o = PropertyFactory.getProp(t, e.o, 0, 0, this), this.sValue = 0, this.eValue = 0, this.getValue = this.processKeys, this.m = e.m, this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length
        }, TrimModifier.prototype.addShapeToModifier = function(t) {
          t.pathsData = []
        }, TrimModifier.prototype.calculateShapeEdges = function(t, e, r, i, a) {
          var s = [];
          e <= 1 ? s.push({
            s: t,
            e
          }) : t >= 1 ? s.push({
            s: t - 1,
            e: e - 1
          }) : (s.push({
            s: t,
            e: 1
          }), s.push({
            s: 0,
            e: e - 1
          }));
          var n, o, l = [],
            h = s.length;
          for (n = 0; n < h; n += 1) {
            var p, c;
            (o = s[n]).e * a < i || o.s * a > i + r || (p = o.s * a <= i ? 0 : (o.s * a - i) / r, c = o.e * a >= i + r ? 1 : (o.e * a - i) / r, l.push([p, c]))
          }
          return l.length || l.push([0, 0]), l
        }, TrimModifier.prototype.releasePathsData = function(t) {
          var e, r = t.length;
          for (e = 0; e < r; e += 1) segmentsLengthPool.release(t[e]);
          return t.length = 0, t
        }, TrimModifier.prototype.processShapes = function(t) {
          var e, r, i, a;
          if (this._mdf || t) {
            var s = this.o.v % 360 / 360;
            if (s < 0 && (s += 1), (e = this.s.v > 1 ? 1 + s : this.s.v < 0 ? 0 + s : this.s.v + s) > (r = this.e.v > 1 ? 1 + s : this.e.v < 0 ? 0 + s : this.e.v + s)) {
              var n = e;
              e = r, r = n
            }
            e = 1e-4 * Math.round(1e4 * e), r = 1e-4 * Math.round(1e4 * r), this.sValue = e, this.eValue = r
          } else e = this.sValue, r = this.eValue;
          var o, l, h, p, c, f = this.shapes.length,
            u = 0;
          if (r === e)
            for (a = 0; a < f; a += 1) this.shapes[a].localShapeCollection.releaseShapes(), this.shapes[a].shape._mdf = !0, this.shapes[a].shape.paths = this.shapes[a].localShapeCollection, this._mdf && (this.shapes[a].pathsData.length = 0);
          else if (1 === r && 0 === e || 0 === r && 1 === e) {
            if (this._mdf)
              for (a = 0; a < f; a += 1) this.shapes[a].pathsData.length = 0, this.shapes[a].shape._mdf = !0
          } else {
            var d, m, y = [];
            for (a = 0; a < f; a += 1)
              if ((d = this.shapes[a]).shape._mdf || this._mdf || t || 2 === this.m) {
                if (l = (i = d.shape.paths)._length, c = 0, !d.shape._mdf && d.pathsData.length) c = d.totalShapeLength;
                else {
                  for (h = this.releasePathsData(d.pathsData), o = 0; o < l; o += 1) p = bez.getSegmentsLength(i.shapes[o]), h.push(p), c += p.totalLength;
                  d.totalShapeLength = c, d.pathsData = h
                }
                u += c, d.shape._mdf = !0
              } else d.shape.paths = d.localShapeCollection;
            var g, v = e,
              b = r,
              x = 0;
            for (a = f - 1; a >= 0; a -= 1)
              if ((d = this.shapes[a]).shape._mdf) {
                for ((m = d.localShapeCollection).releaseShapes(), 2 === this.m && f > 1 ? (g = this.calculateShapeEdges(e, r, d.totalShapeLength, x, u), x += d.totalShapeLength) : g = [
                    [v, b]
                  ], l = g.length, o = 0; o < l; o += 1) {
                  v = g[o][0], b = g[o][1], y.length = 0, b <= 1 ? y.push({
                    s: d.totalShapeLength * v,
                    e: d.totalShapeLength * b
                  }) : v >= 1 ? y.push({
                    s: d.totalShapeLength * (v - 1),
                    e: d.totalShapeLength * (b - 1)
                  }) : (y.push({
                    s: d.totalShapeLength * v,
                    e: d.totalShapeLength
                  }), y.push({
                    s: 0,
                    e: d.totalShapeLength * (b - 1)
                  }));
                  var C = this.addShapes(d, y[0]);
                  if (y[0].s !== y[0].e) {
                    if (y.length > 1)
                      if (d.shape.paths.shapes[d.shape.paths._length - 1].c) {
                        var A = C.pop();
                        this.addPaths(C, m), C = this.addShapes(d, y[1], A)
                      } else this.addPaths(C, m), C = this.addShapes(d, y[1]);
                    this.addPaths(C, m)
                  }
                }
                d.shape.paths = m
              }
          }
        }, TrimModifier.prototype.addPaths = function(t, e) {
          var r, i = t.length;
          for (r = 0; r < i; r += 1) e.addShape(t[r])
        }, TrimModifier.prototype.addSegment = function(t, e, r, i, a, s, n) {
          a.setXYAt(e[0], e[1], "o", s), a.setXYAt(r[0], r[1], "i", s + 1), n && a.setXYAt(t[0], t[1], "v", s), a.setXYAt(i[0], i[1], "v", s + 1)
        }, TrimModifier.prototype.addSegmentFromArray = function(t, e, r, i) {
          e.setXYAt(t[1], t[5], "o", r), e.setXYAt(t[2], t[6], "i", r + 1), i && e.setXYAt(t[0], t[4], "v", r), e.setXYAt(t[3], t[7], "v", r + 1)
        }, TrimModifier.prototype.addShapes = function(t, e, r) {
          var i, a, s, n, o, l, h, p, c = t.pathsData,
            f = t.shape.paths.shapes,
            u = t.shape.paths._length,
            d = 0,
            m = [],
            y = !0;
          for (r ? (o = r._length, p = r._length) : (r = shapePool.newElement(), o = 0, p = 0), m.push(r), i = 0; i < u; i += 1) {
            for (l = c[i].lengths, r.c = f[i].c, s = f[i].c ? l.length : l.length + 1, a = 1; a < s; a += 1)
              if (d + (n = l[a - 1]).addedLength < e.s) d += n.addedLength, r.c = !1;
              else {
                if (d > e.e) {
                  r.c = !1;
                  break
                }
                e.s <= d && e.e >= d + n.addedLength ? (this.addSegment(f[i].v[a - 1], f[i].o[a - 1], f[i].i[a], f[i].v[a], r, o, y), y = !1) : (h = bez.getNewSegment(f[i].v[a - 1], f[i].v[a], f[i].o[a - 1], f[i].i[a], (e.s - d) / n.addedLength, (e.e - d) / n.addedLength, l[a - 1]), this.addSegmentFromArray(h, r, o, y), y = !1, r.c = !1), d += n.addedLength, o += 1
              } if (f[i].c && l.length) {
              if (n = l[a - 1], d <= e.e) {
                var g = l[a - 1].addedLength;
                e.s <= d && e.e >= d + g ? (this.addSegment(f[i].v[a - 1], f[i].o[a - 1], f[i].i[0], f[i].v[0], r, o, y), y = !1) : (h = bez.getNewSegment(f[i].v[a - 1], f[i].v[0], f[i].o[a - 1], f[i].i[0], (e.s - d) / g, (e.e - d) / g, l[a - 1]), this.addSegmentFromArray(h, r, o, y), y = !1, r.c = !1)
              } else r.c = !1;
              d += n.addedLength, o += 1
            }
            if (r._length && (r.setXYAt(r.v[p][0], r.v[p][1], "i", p), r.setXYAt(r.v[r._length - 1][0], r.v[r._length - 1][1], "o", r._length - 1)), d > e.e) break;
            i < u - 1 && (r = shapePool.newElement(), y = !0, m.push(r), o = 0)
          }
          return m
        }, extendPrototype([ShapeModifier], PuckerAndBloatModifier), PuckerAndBloatModifier.prototype.initModifierProperties = function(t, e) {
          this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(t, e.a, 0, null, this), this._isAnimated = !!this.amount.effectsSequence.length
        }, PuckerAndBloatModifier.prototype.processPath = function(t, e) {
          var r = e / 100,
            i = [0, 0],
            a = t._length,
            s = 0;
          for (s = 0; s < a; s += 1) i[0] += t.v[s][0], i[1] += t.v[s][1];
          i[0] /= a, i[1] /= a;
          var n, o, l, h, p, c, f = shapePool.newElement();
          for (f.c = t.c, s = 0; s < a; s += 1) n = t.v[s][0] + (i[0] - t.v[s][0]) * r, o = t.v[s][1] + (i[1] - t.v[s][1]) * r, l = t.o[s][0] + (i[0] - t.o[s][0]) * -r, h = t.o[s][1] + (i[1] - t.o[s][1]) * -r, p = t.i[s][0] + (i[0] - t.i[s][0]) * -r, c = t.i[s][1] + (i[1] - t.i[s][1]) * -r, f.setTripleAt(n, o, l, h, p, c, s);
          return f
        }, PuckerAndBloatModifier.prototype.processShapes = function(t) {
          var e, r, i, a, s, n, o = this.shapes.length,
            l = this.amount.v;
          if (0 !== l)
            for (r = 0; r < o; r += 1) {
              if (n = (s = this.shapes[r]).localShapeCollection, s.shape._mdf || this._mdf || t)
                for (n.releaseShapes(), s.shape._mdf = !0, e = s.shape.paths.shapes, a = s.shape.paths._length, i = 0; i < a; i += 1) n.addShape(this.processPath(e[i], l));
              s.shape.paths = s.localShapeCollection
            }
          this.dynamicProperties.length || (this._mdf = !1)
        };
        var TransformPropertyFactory = function() {
          var t = [0, 0];

          function e(t, e, r) {
            if (this.elem = t, this.frameId = -1, this.propType = "transform", this.data = e, this.v = new Matrix, this.pre = new Matrix, this.appliedTransformations = 0, this.initDynamicPropertyContainer(r || t), e.p && e.p.s ? (this.px = PropertyFactory.getProp(t, e.p.x, 0, 0, this), this.py = PropertyFactory.getProp(t, e.p.y, 0, 0, this), e.p.z && (this.pz = PropertyFactory.getProp(t, e.p.z, 0, 0, this))) : this.p = PropertyFactory.getProp(t, e.p || {
                k: [0, 0, 0]
              }, 1, 0, this), e.rx) {
              if (this.rx = PropertyFactory.getProp(t, e.rx, 0, degToRads, this), this.ry = PropertyFactory.getProp(t, e.ry, 0, degToRads, this), this.rz = PropertyFactory.getProp(t, e.rz, 0, degToRads, this), e.or.k[0].ti) {
                var i, a = e.or.k.length;
                for (i = 0; i < a; i += 1) e.or.k[i].to = null, e.or.k[i].ti = null
              }
              this.or = PropertyFactory.getProp(t, e.or, 1, degToRads, this), this.or.sh = !0
            } else this.r = PropertyFactory.getProp(t, e.r || {
              k: 0
            }, 0, degToRads, this);
            e.sk && (this.sk = PropertyFactory.getProp(t, e.sk, 0, degToRads, this), this.sa = PropertyFactory.getProp(t, e.sa, 0, degToRads, this)), this.a = PropertyFactory.getProp(t, e.a || {
              k: [0, 0, 0]
            }, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s || {
              k: [100, 100, 100]
            }, 1, .01, this), e.o ? this.o = PropertyFactory.getProp(t, e.o, 0, .01, t) : this.o = {
              _mdf: !1,
              v: 1
            }, this._isDirty = !0, this.dynamicProperties.length || this.getValue(!0)
          }
          return e.prototype = {
            applyToMatrix: function(t) {
              var e = this._mdf;
              this.iterateDynamicProperties(), this._mdf = this._mdf || e, this.a && t.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && t.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && t.skewFromAxis(-this.sk.v, this.sa.v), this.r ? t.rotate(-this.r.v) : t.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? t.translate(this.px.v, this.py.v, -this.pz.v) : t.translate(this.px.v, this.py.v, 0) : t.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
            },
            getValue: function(e) {
              if (this.elem.globalData.frameId !== this.frameId) {
                if (this._isDirty && (this.precalculateMatrix(), this._isDirty = !1), this.iterateDynamicProperties(), this._mdf || e) {
                  var r;
                  if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) {
                    var i, a;
                    if (r = this.elem.globalData.frameRate, this.p && this.p.keyframes && this.p.getValueAtTime) this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (i = this.p.getValueAtTime((this.p.keyframes[0].t + .01) / r, 0), a = this.p.getValueAtTime(this.p.keyframes[0].t / r, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (i = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / r, 0), a = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - .05) / r, 0)) : (i = this.p.pv, a = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - .01) / r, this.p.offsetTime));
                    else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                      i = [], a = [];
                      var s = this.px,
                        n = this.py;
                      s._caching.lastFrame + s.offsetTime <= s.keyframes[0].t ? (i[0] = s.getValueAtTime((s.keyframes[0].t + .01) / r, 0), i[1] = n.getValueAtTime((n.keyframes[0].t + .01) / r, 0), a[0] = s.getValueAtTime(s.keyframes[0].t / r, 0), a[1] = n.getValueAtTime(n.keyframes[0].t / r, 0)) : s._caching.lastFrame + s.offsetTime >= s.keyframes[s.keyframes.length - 1].t ? (i[0] = s.getValueAtTime(s.keyframes[s.keyframes.length - 1].t / r, 0), i[1] = n.getValueAtTime(n.keyframes[n.keyframes.length - 1].t / r, 0), a[0] = s.getValueAtTime((s.keyframes[s.keyframes.length - 1].t - .01) / r, 0), a[1] = n.getValueAtTime((n.keyframes[n.keyframes.length - 1].t - .01) / r, 0)) : (i = [s.pv, n.pv], a[0] = s.getValueAtTime((s._caching.lastFrame + s.offsetTime - .01) / r, s.offsetTime), a[1] = n.getValueAtTime((n._caching.lastFrame + n.offsetTime - .01) / r, n.offsetTime))
                    } else i = a = t;
                    this.v.rotate(-Math.atan2(i[1] - a[1], i[0] - a[0]))
                  }
                  this.data.p && this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
                }
                this.frameId = this.elem.globalData.frameId
              }
            },
            precalculateMatrix: function() {
              if (this.appliedTransformations = 0, this.pre.reset(), !this.a.effectsSequence.length && (this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations = 1, !this.s.effectsSequence.length)) {
                if (this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.appliedTransformations = 2, this.sk) {
                  if (this.sk.effectsSequence.length || this.sa.effectsSequence.length) return;
                  this.pre.skewFromAxis(-this.sk.v, this.sa.v), this.appliedTransformations = 3
                }
                this.r ? this.r.effectsSequence.length || (this.pre.rotate(-this.r.v), this.appliedTransformations = 4) : this.rz.effectsSequence.length || this.ry.effectsSequence.length || this.rx.effectsSequence.length || this.or.effectsSequence.length || (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.appliedTransformations = 4)
              }
            },
            autoOrient: function() {}
          }, extendPrototype([DynamicPropertyContainer], e), e.prototype.addDynamicProperty = function(t) {
            this._addDynamicProperty(t), this.elem.addDynamicProperty(t), this._isDirty = !0
          }, e.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty, {
            getTransformProperty: function(t, r, i) {
              return new e(t, r, i)
            }
          }
        }();

        function RepeaterModifier() {}

        function RoundCornersModifier() {}

        function floatEqual(t, e) {
          return 1e5 * Math.abs(t - e) <= Math.min(Math.abs(t), Math.abs(e))
        }

        function floatZero(t) {
          return Math.abs(t) <= 1e-5
        }

        function lerp(t, e, r) {
          return t * (1 - r) + e * r
        }

        function lerpPoint(t, e, r) {
          return [lerp(t[0], e[0], r), lerp(t[1], e[1], r)]
        }

        function quadRoots(t, e, r) {
          if (0 === t) return [];
          var i = e * e - 4 * t * r;
          if (i < 0) return [];
          var a = -e / (2 * t);
          if (0 === i) return [a];
          var s = Math.sqrt(i) / (2 * t);
          return [a - s, a + s]
        }

        function polynomialCoefficients(t, e, r, i) {
          return [3 * e - t - 3 * r + i, 3 * t - 6 * e + 3 * r, -3 * t + 3 * e, t]
        }

        function singlePoint(t) {
          return new PolynomialBezier(t, t, t, t, !1)
        }

        function PolynomialBezier(t, e, r, i, a) {
          a && pointEqual(t, e) && (e = lerpPoint(t, i, 1 / 3)), a && pointEqual(r, i) && (r = lerpPoint(t, i, 2 / 3));
          var s = polynomialCoefficients(t[0], e[0], r[0], i[0]),
            n = polynomialCoefficients(t[1], e[1], r[1], i[1]);
          this.a = [s[0], n[0]], this.b = [s[1], n[1]], this.c = [s[2], n[2]], this.d = [s[3], n[3]], this.points = [t, e, r, i]
        }

        function extrema(t, e) {
          var r = t.points[0][e],
            i = t.points[t.points.length - 1][e];
          if (r > i) {
            var a = i;
            i = r, r = a
          }
          for (var s = quadRoots(3 * t.a[e], 2 * t.b[e], t.c[e]), n = 0; n < s.length; n += 1)
            if (s[n] > 0 && s[n] < 1) {
              var o = t.point(s[n])[e];
              o < r ? r = o : o > i && (i = o)
            } return {
            min: r,
            max: i
          }
        }

        function intersectData(t, e, r) {
          var i = t.boundingBox();
          return {
            cx: i.cx,
            cy: i.cy,
            width: i.width,
            height: i.height,
            bez: t,
            t: (e + r) / 2,
            t1: e,
            t2: r
          }
        }

        function splitData(t) {
          var e = t.bez.split(.5);
          return [intersectData(e[0], t.t1, t.t), intersectData(e[1], t.t, t.t2)]
        }

        function boxIntersect(t, e) {
          return 2 * Math.abs(t.cx - e.cx) < t.width + e.width && 2 * Math.abs(t.cy - e.cy) < t.height + e.height
        }

        function intersectsImpl(t, e, r, i, a, s) {
          if (boxIntersect(t, e))
            if (r >= s || t.width <= i && t.height <= i && e.width <= i && e.height <= i) a.push([t.t, e.t]);
            else {
              var n = splitData(t),
                o = splitData(e);
              intersectsImpl(n[0], o[0], r + 1, i, a, s), intersectsImpl(n[0], o[1], r + 1, i, a, s), intersectsImpl(n[1], o[0], r + 1, i, a, s), intersectsImpl(n[1], o[1], r + 1, i, a, s)
            }
        }

        function crossProduct(t, e) {
          return [t[1] * e[2] - t[2] * e[1], t[2] * e[0] - t[0] * e[2], t[0] * e[1] - t[1] * e[0]]
        }

        function lineIntersection(t, e, r, i) {
          var a = [t[0], t[1], 1],
            s = [e[0], e[1], 1],
            n = [r[0], r[1], 1],
            o = [i[0], i[1], 1],
            l = crossProduct(crossProduct(a, s), crossProduct(n, o));
          return floatZero(l[2]) ? null : [l[0] / l[2], l[1] / l[2]]
        }

        function polarOffset(t, e, r) {
          return [t[0] + Math.cos(e) * r, t[1] - Math.sin(e) * r]
        }

        function pointDistance(t, e) {
          return Math.hypot(t[0] - e[0], t[1] - e[1])
        }

        function pointEqual(t, e) {
          return floatEqual(t[0], e[0]) && floatEqual(t[1], e[1])
        }

        function ZigZagModifier() {}

        function setPoint(t, e, r, i, a, s, n) {
          var o = r - Math.PI / 2,
            l = r + Math.PI / 2,
            h = e[0] + Math.cos(r) * i * a,
            p = e[1] - Math.sin(r) * i * a;
          t.setTripleAt(h, p, h + Math.cos(o) * s, p - Math.sin(o) * s, h + Math.cos(l) * n, p - Math.sin(l) * n, t.length())
        }

        function getPerpendicularVector(t, e) {
          var r = [e[0] - t[0], e[1] - t[1]],
            i = .5 * -Math.PI;
          return [Math.cos(i) * r[0] - Math.sin(i) * r[1], Math.sin(i) * r[0] + Math.cos(i) * r[1]]
        }

        function getProjectingAngle(t, e) {
          var r = 0 === e ? t.length() - 1 : e - 1,
            i = (e + 1) % t.length(),
            a = getPerpendicularVector(t.v[r], t.v[i]);
          return Math.atan2(0, 1) - Math.atan2(a[1], a[0])
        }

        function zigZagCorner(t, e, r, i, a, s, n) {
          var o = getProjectingAngle(e, r),
            l = e.v[r % e._length],
            h = e.v[0 === r ? e._length - 1 : r - 1],
            p = e.v[(r + 1) % e._length],
            c = 2 === s ? Math.sqrt(Math.pow(l[0] - h[0], 2) + Math.pow(l[1] - h[1], 2)) : 0,
            f = 2 === s ? Math.sqrt(Math.pow(l[0] - p[0], 2) + Math.pow(l[1] - p[1], 2)) : 0;
          setPoint(t, e.v[r % e._length], o, n, i, f / (2 * (a + 1)), c / (2 * (a + 1)), s)
        }

        function zigZagSegment(t, e, r, i, a, s) {
          for (var n = 0; n < i; n += 1) {
            var o = (n + 1) / (i + 1),
              l = 2 === a ? Math.sqrt(Math.pow(e.points[3][0] - e.points[0][0], 2) + Math.pow(e.points[3][1] - e.points[0][1], 2)) : 0,
              h = e.normalAngle(o);
            setPoint(t, e.point(o), h, s, r, l / (2 * (i + 1)), l / (2 * (i + 1)), a), s = -s
          }
          return s
        }

        function linearOffset(t, e, r) {
          var i = Math.atan2(e[0] - t[0], e[1] - t[1]);
          return [polarOffset(t, i, r), polarOffset(e, i, r)]
        }

        function offsetSegment(t, e) {
          var r, i, a, s, n, o, l;
          r = (l = linearOffset(t.points[0], t.points[1], e))[0], i = l[1], a = (l = linearOffset(t.points[1], t.points[2], e))[0], s = l[1], n = (l = linearOffset(t.points[2], t.points[3], e))[0], o = l[1];
          var h = lineIntersection(r, i, a, s);
          null === h && (h = i);
          var p = lineIntersection(n, o, a, s);
          return null === p && (p = n), new PolynomialBezier(r, h, p, o)
        }

        function joinLines(t, e, r, i, a) {
          var s = e.points[3],
            n = r.points[0];
          if (3 === i) return s;
          if (pointEqual(s, n)) return s;
          if (2 === i) {
            var o = -e.tangentAngle(1),
              l = -r.tangentAngle(0) + Math.PI,
              h = lineIntersection(s, polarOffset(s, o + Math.PI / 2, 100), n, polarOffset(n, o + Math.PI / 2, 100)),
              p = h ? pointDistance(h, s) : pointDistance(s, n) / 2,
              c = polarOffset(s, o, 2 * p * roundCorner);
            return t.setXYAt(c[0], c[1], "o", t.length() - 1), c = polarOffset(n, l, 2 * p * roundCorner), t.setTripleAt(n[0], n[1], n[0], n[1], c[0], c[1], t.length()), n
          }
          var f = lineIntersection(pointEqual(s, e.points[2]) ? e.points[0] : e.points[2], s, n, pointEqual(n, r.points[1]) ? r.points[3] : r.points[1]);
          return f && pointDistance(f, s) < a ? (t.setTripleAt(f[0], f[1], f[0], f[1], f[0], f[1], t.length()), f) : s
        }

        function getIntersection(t, e) {
          var r = t.intersections(e);
          return r.length && floatEqual(r[0][0], 1) && r.shift(), r.length ? r[0] : null
        }

        function pruneSegmentIntersection(t, e) {
          var r = t.slice(),
            i = e.slice(),
            a = getIntersection(t[t.length - 1], e[0]);
          return a && (r[t.length - 1] = t[t.length - 1].split(a[0])[0], i[0] = e[0].split(a[1])[1]), t.length > 1 && e.length > 1 && (a = getIntersection(t[0], e[e.length - 1])) ? [
            [t[0].split(a[0])[0]],
            [e[e.length - 1].split(a[1])[1]]
          ] : [r, i]
        }

        function pruneIntersections(t) {
          for (var e, r = 1; r < t.length; r += 1) e = pruneSegmentIntersection(t[r - 1], t[r]), t[r - 1] = e[0], t[r] = e[1];
          return t.length > 1 && (e = pruneSegmentIntersection(t[t.length - 1], t[0]), t[t.length - 1] = e[0], t[0] = e[1]), t
        }

        function offsetSegmentSplit(t, e) {
          var r, i, a, s, n = t.inflectionPoints();
          if (0 === n.length) return [offsetSegment(t, e)];
          if (1 === n.length || floatEqual(n[1], 1)) return r = (a = t.split(n[0]))[0], i = a[1], [offsetSegment(r, e), offsetSegment(i, e)];
          r = (a = t.split(n[0]))[0];
          var o = (n[1] - n[0]) / (1 - n[0]);
          return s = (a = a[1].split(o))[0], i = a[1], [offsetSegment(r, e), offsetSegment(s, e), offsetSegment(i, e)]
        }

        function OffsetPathModifier() {}

        function getFontProperties(t) {
          for (var e = t.fStyle ? t.fStyle.split(" ") : [], r = "normal", i = "normal", a = e.length, s = 0; s < a; s += 1) switch (e[s].toLowerCase()) {
            case "italic":
              i = "italic";
              break;
            case "bold":
              r = "700";
              break;
            case "black":
              r = "900";
              break;
            case "medium":
              r = "500";
              break;
            case "regular":
            case "normal":
              r = "400";
              break;
            case "light":
            case "thin":
              r = "200"
          }
          return {
            style: i,
            weight: t.fWeight || r
          }
        }
        extendPrototype([ShapeModifier], RepeaterModifier), RepeaterModifier.prototype.initModifierProperties = function(t, e) {
          this.getValue = this.processKeys, this.c = PropertyFactory.getProp(t, e.c, 0, null, this), this.o = PropertyFactory.getProp(t, e.o, 0, null, this), this.tr = TransformPropertyFactory.getTransformProperty(t, e.tr, this), this.so = PropertyFactory.getProp(t, e.tr.so, 0, .01, this), this.eo = PropertyFactory.getProp(t, e.tr.eo, 0, .01, this), this.data = e, this.dynamicProperties.length || this.getValue(!0), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new Matrix, this.rMatrix = new Matrix, this.sMatrix = new Matrix, this.tMatrix = new Matrix, this.matrix = new Matrix
        }, RepeaterModifier.prototype.applyTransforms = function(t, e, r, i, a, s) {
          var n = s ? -1 : 1,
            o = i.s.v[0] + (1 - i.s.v[0]) * (1 - a),
            l = i.s.v[1] + (1 - i.s.v[1]) * (1 - a);
          t.translate(i.p.v[0] * n * a, i.p.v[1] * n * a, i.p.v[2]), e.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]), e.rotate(-i.r.v * n * a), e.translate(i.a.v[0], i.a.v[1], i.a.v[2]), r.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]), r.scale(s ? 1 / o : o, s ? 1 / l : l), r.translate(i.a.v[0], i.a.v[1], i.a.v[2])
        }, RepeaterModifier.prototype.init = function(t, e, r, i) {
          for (this.elem = t, this.arr = e, this.pos = r, this.elemsData = i, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e[r]); r > 0;) r -= 1, this._elements.unshift(e[r]);
          this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
        }, RepeaterModifier.prototype.resetElements = function(t) {
          var e, r = t.length;
          for (e = 0; e < r; e += 1) t[e]._processed = !1, "gr" === t[e].ty && this.resetElements(t[e].it)
        }, RepeaterModifier.prototype.cloneElements = function(t) {
          var e = JSON.parse(JSON.stringify(t));
          return this.resetElements(e), e
        }, RepeaterModifier.prototype.changeGroupRender = function(t, e) {
          var r, i = t.length;
          for (r = 0; r < i; r += 1) t[r]._render = e, "gr" === t[r].ty && this.changeGroupRender(t[r].it, e)
        }, RepeaterModifier.prototype.processShapes = function(t) {
          var e, r, i, a, s, n = !1;
          if (this._mdf || t) {
            var o, l = Math.ceil(this.c.v);
            if (this._groups.length < l) {
              for (; this._groups.length < l;) {
                var h = {
                  it: this.cloneElements(this._elements),
                  ty: "gr"
                };
                h.it.push({
                  a: {
                    a: 0,
                    ix: 1,
                    k: [0, 0]
                  },
                  nm: "Transform",
                  o: {
                    a: 0,
                    ix: 7,
                    k: 100
                  },
                  p: {
                    a: 0,
                    ix: 2,
                    k: [0, 0]
                  },
                  r: {
                    a: 1,
                    ix: 6,
                    k: [{
                      s: 0,
                      e: 0,
                      t: 0
                    }, {
                      s: 0,
                      e: 0,
                      t: 1
                    }]
                  },
                  s: {
                    a: 0,
                    ix: 3,
                    k: [100, 100]
                  },
                  sa: {
                    a: 0,
                    ix: 5,
                    k: 0
                  },
                  sk: {
                    a: 0,
                    ix: 4,
                    k: 0
                  },
                  ty: "tr"
                }), this.arr.splice(0, 0, h), this._groups.splice(0, 0, h), this._currentCopies += 1
              }
              this.elem.reloadShapes(), n = !0
            }
            for (s = 0, i = 0; i <= this._groups.length - 1; i += 1) {
              if (o = s < l, this._groups[i]._render = o, this.changeGroupRender(this._groups[i].it, o), !o) {
                var p = this.elemsData[i].it,
                  c = p[p.length - 1];
                0 !== c.transform.op.v ? (c.transform.op._mdf = !0, c.transform.op.v = 0) : c.transform.op._mdf = !1
              }
              s += 1
            }
            this._currentCopies = l;
            var f = this.o.v,
              u = f % 1,
              d = f > 0 ? Math.floor(f) : Math.ceil(f),
              m = this.pMatrix.props,
              y = this.rMatrix.props,
              g = this.sMatrix.props;
            this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
            var v, b, x = 0;
            if (f > 0) {
              for (; x < d;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), x += 1;
              u && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, u, !1), x += u)
            } else if (f < 0) {
              for (; x > d;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), x -= 1;
              u && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -u, !0), x -= u)
            }
            for (i = 1 === this.data.m ? 0 : this._currentCopies - 1, a = 1 === this.data.m ? 1 : -1, s = this._currentCopies; s;) {
              if (b = (r = (e = this.elemsData[i].it)[e.length - 1].transform.mProps.v.props).length, e[e.length - 1].transform.mProps._mdf = !0, e[e.length - 1].transform.op._mdf = !0, e[e.length - 1].transform.op.v = 1 === this._currentCopies ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (i / (this._currentCopies - 1)), 0 !== x) {
                for ((0 !== i && 1 === a || i !== this._currentCopies - 1 && -1 === a) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(y[0], y[1], y[2], y[3], y[4], y[5], y[6], y[7], y[8], y[9], y[10], y[11], y[12], y[13], y[14], y[15]), this.matrix.transform(g[0], g[1], g[2], g[3], g[4], g[5], g[6], g[7], g[8], g[9], g[10], g[11], g[12], g[13], g[14], g[15]), this.matrix.transform(m[0], m[1], m[2], m[3], m[4], m[5], m[6], m[7], m[8], m[9], m[10], m[11], m[12], m[13], m[14], m[15]), v = 0; v < b; v += 1) r[v] = this.matrix.props[v];
                this.matrix.reset()
              } else
                for (this.matrix.reset(), v = 0; v < b; v += 1) r[v] = this.matrix.props[v];
              x += 1, s -= 1, i += a
            }
          } else
            for (s = this._currentCopies, i = 0, a = 1; s;) r = (e = this.elemsData[i].it)[e.length - 1].transform.mProps.v.props, e[e.length - 1].transform.mProps._mdf = !1, e[e.length - 1].transform.op._mdf = !1, s -= 1, i += a;
          return n
        }, RepeaterModifier.prototype.addShape = function() {}, extendPrototype([ShapeModifier], RoundCornersModifier), RoundCornersModifier.prototype.initModifierProperties = function(t, e) {
          this.getValue = this.processKeys, this.rd = PropertyFactory.getProp(t, e.r, 0, null, this), this._isAnimated = !!this.rd.effectsSequence.length
        }, RoundCornersModifier.prototype.processPath = function(t, e) {
          var r, i = shapePool.newElement();
          i.c = t.c;
          var a, s, n, o, l, h, p, c, f, u, d, m, y = t._length,
            g = 0;
          for (r = 0; r < y; r += 1) a = t.v[r], n = t.o[r], s = t.i[r], a[0] === n[0] && a[1] === n[1] && a[0] === s[0] && a[1] === s[1] ? 0 !== r && r !== y - 1 || t.c ? (o = 0 === r ? t.v[y - 1] : t.v[r - 1], h = (l = Math.sqrt(Math.pow(a[0] - o[0], 2) + Math.pow(a[1] - o[1], 2))) ? Math.min(l / 2, e) / l : 0, p = d = a[0] + (o[0] - a[0]) * h, c = m = a[1] - (a[1] - o[1]) * h, f = p - (p - a[0]) * roundCorner, u = c - (c - a[1]) * roundCorner, i.setTripleAt(p, c, f, u, d, m, g), g += 1, o = r === y - 1 ? t.v[0] : t.v[r + 1], h = (l = Math.sqrt(Math.pow(a[0] - o[0], 2) + Math.pow(a[1] - o[1], 2))) ? Math.min(l / 2, e) / l : 0, p = f = a[0] + (o[0] - a[0]) * h, c = u = a[1] + (o[1] - a[1]) * h, d = p - (p - a[0]) * roundCorner, m = c - (c - a[1]) * roundCorner, i.setTripleAt(p, c, f, u, d, m, g), g += 1) : (i.setTripleAt(a[0], a[1], n[0], n[1], s[0], s[1], g), g += 1) : (i.setTripleAt(t.v[r][0], t.v[r][1], t.o[r][0], t.o[r][1], t.i[r][0], t.i[r][1], g), g += 1);
          return i
        }, RoundCornersModifier.prototype.processShapes = function(t) {
          var e, r, i, a, s, n, o = this.shapes.length,
            l = this.rd.v;
          if (0 !== l)
            for (r = 0; r < o; r += 1) {
              if (n = (s = this.shapes[r]).localShapeCollection, s.shape._mdf || this._mdf || t)
                for (n.releaseShapes(), s.shape._mdf = !0, e = s.shape.paths.shapes, a = s.shape.paths._length, i = 0; i < a; i += 1) n.addShape(this.processPath(e[i], l));
              s.shape.paths = s.localShapeCollection
            }
          this.dynamicProperties.length || (this._mdf = !1)
        }, PolynomialBezier.prototype.point = function(t) {
          return [((this.a[0] * t + this.b[0]) * t + this.c[0]) * t + this.d[0], ((this.a[1] * t + this.b[1]) * t + this.c[1]) * t + this.d[1]]
        }, PolynomialBezier.prototype.derivative = function(t) {
          return [(3 * t * this.a[0] + 2 * this.b[0]) * t + this.c[0], (3 * t * this.a[1] + 2 * this.b[1]) * t + this.c[1]]
        }, PolynomialBezier.prototype.tangentAngle = function(t) {
          var e = this.derivative(t);
          return Math.atan2(e[1], e[0])
        }, PolynomialBezier.prototype.normalAngle = function(t) {
          var e = this.derivative(t);
          return Math.atan2(e[0], e[1])
        }, PolynomialBezier.prototype.inflectionPoints = function() {
          var t = this.a[1] * this.b[0] - this.a[0] * this.b[1];
          if (floatZero(t)) return [];
          var e = -.5 * (this.a[1] * this.c[0] - this.a[0] * this.c[1]) / t,
            r = e * e - 1 / 3 * (this.b[1] * this.c[0] - this.b[0] * this.c[1]) / t;
          if (r < 0) return [];
          var i = Math.sqrt(r);
          return floatZero(i) ? i > 0 && i < 1 ? [e] : [] : [e - i, e + i].filter((function(t) {
            return t > 0 && t < 1
          }))
        }, PolynomialBezier.prototype.split = function(t) {
          if (t <= 0) return [singlePoint(this.points[0]), this];
          if (t >= 1) return [this, singlePoint(this.points[this.points.length - 1])];
          var e = lerpPoint(this.points[0], this.points[1], t),
            r = lerpPoint(this.points[1], this.points[2], t),
            i = lerpPoint(this.points[2], this.points[3], t),
            a = lerpPoint(e, r, t),
            s = lerpPoint(r, i, t),
            n = lerpPoint(a, s, t);
          return [new PolynomialBezier(this.points[0], e, a, n, !0), new PolynomialBezier(n, s, i, this.points[3], !0)]
        }, PolynomialBezier.prototype.bounds = function() {
          return {
            x: extrema(this, 0),
            y: extrema(this, 1)
          }
        }, PolynomialBezier.prototype.boundingBox = function() {
          var t = this.bounds();
          return {
            left: t.x.min,
            right: t.x.max,
            top: t.y.min,
            bottom: t.y.max,
            width: t.x.max - t.x.min,
            height: t.y.max - t.y.min,
            cx: (t.x.max + t.x.min) / 2,
            cy: (t.y.max + t.y.min) / 2
          }
        }, PolynomialBezier.prototype.intersections = function(t, e, r) {
          void 0 === e && (e = 2), void 0 === r && (r = 7);
          var i = [];
          return intersectsImpl(intersectData(this, 0, 1), intersectData(t, 0, 1), 0, e, i, r), i
        }, PolynomialBezier.shapeSegment = function(t, e) {
          var r = (e + 1) % t.length();
          return new PolynomialBezier(t.v[e], t.o[e], t.i[r], t.v[r], !0)
        }, PolynomialBezier.shapeSegmentInverted = function(t, e) {
          var r = (e + 1) % t.length();
          return new PolynomialBezier(t.v[r], t.i[r], t.o[e], t.v[e], !0)
        }, extendPrototype([ShapeModifier], ZigZagModifier), ZigZagModifier.prototype.initModifierProperties = function(t, e) {
          this.getValue = this.processKeys, this.amplitude = PropertyFactory.getProp(t, e.s, 0, null, this), this.frequency = PropertyFactory.getProp(t, e.r, 0, null, this), this.pointsType = PropertyFactory.getProp(t, e.pt, 0, null, this), this._isAnimated = 0 !== this.amplitude.effectsSequence.length || 0 !== this.frequency.effectsSequence.length || 0 !== this.pointsType.effectsSequence.length
        }, ZigZagModifier.prototype.processPath = function(t, e, r, i) {
          var a = t._length,
            s = shapePool.newElement();
          if (s.c = t.c, t.c || (a -= 1), 0 === a) return s;
          var n = -1,
            o = PolynomialBezier.shapeSegment(t, 0);
          zigZagCorner(s, t, 0, e, r, i, n);
          for (var l = 0; l < a; l += 1) n = zigZagSegment(s, o, e, r, i, -n), o = l !== a - 1 || t.c ? PolynomialBezier.shapeSegment(t, (l + 1) % a) : null, zigZagCorner(s, t, l + 1, e, r, i, n);
          return s
        }, ZigZagModifier.prototype.processShapes = function(t) {
          var e, r, i, a, s, n, o = this.shapes.length,
            l = this.amplitude.v,
            h = Math.max(0, Math.round(this.frequency.v)),
            p = this.pointsType.v;
          if (0 !== l)
            for (r = 0; r < o; r += 1) {
              if (n = (s = this.shapes[r]).localShapeCollection, s.shape._mdf || this._mdf || t)
                for (n.releaseShapes(), s.shape._mdf = !0, e = s.shape.paths.shapes, a = s.shape.paths._length, i = 0; i < a; i += 1) n.addShape(this.processPath(e[i], l, h, p));
              s.shape.paths = s.localShapeCollection
            }
          this.dynamicProperties.length || (this._mdf = !1)
        }, extendPrototype([ShapeModifier], OffsetPathModifier), OffsetPathModifier.prototype.initModifierProperties = function(t, e) {
          this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(t, e.a, 0, null, this), this.miterLimit = PropertyFactory.getProp(t, e.ml, 0, null, this), this.lineJoin = e.lj, this._isAnimated = 0 !== this.amount.effectsSequence.length
        }, OffsetPathModifier.prototype.processPath = function(t, e, r, i) {
          var a = shapePool.newElement();
          a.c = t.c;
          var s, n, o, l = t.length();
          t.c || (l -= 1);
          var h = [];
          for (s = 0; s < l; s += 1) o = PolynomialBezier.shapeSegment(t, s), h.push(offsetSegmentSplit(o, e));
          if (!t.c)
            for (s = l - 1; s >= 0; s -= 1) o = PolynomialBezier.shapeSegmentInverted(t, s), h.push(offsetSegmentSplit(o, e));
          h = pruneIntersections(h);
          var p = null,
            c = null;
          for (s = 0; s < h.length; s += 1) {
            var f = h[s];
            for (c && (p = joinLines(a, c, f[0], r, i)), c = f[f.length - 1], n = 0; n < f.length; n += 1) o = f[n], p && pointEqual(o.points[0], p) ? a.setXYAt(o.points[1][0], o.points[1][1], "o", a.length() - 1) : a.setTripleAt(o.points[0][0], o.points[0][1], o.points[1][0], o.points[1][1], o.points[0][0], o.points[0][1], a.length()), a.setTripleAt(o.points[3][0], o.points[3][1], o.points[3][0], o.points[3][1], o.points[2][0], o.points[2][1], a.length()), p = o.points[3]
          }
          return h.length && joinLines(a, c, h[0][0], r, i), a
        }, OffsetPathModifier.prototype.processShapes = function(t) {
          var e, r, i, a, s, n, o = this.shapes.length,
            l = this.amount.v,
            h = this.miterLimit.v,
            p = this.lineJoin;
          if (0 !== l)
            for (r = 0; r < o; r += 1) {
              if (n = (s = this.shapes[r]).localShapeCollection, s.shape._mdf || this._mdf || t)
                for (n.releaseShapes(), s.shape._mdf = !0, e = s.shape.paths.shapes, a = s.shape.paths._length, i = 0; i < a; i += 1) n.addShape(this.processPath(e[i], l, p, h));
              s.shape.paths = s.localShapeCollection
            }
          this.dynamicProperties.length || (this._mdf = !1)
        };
        var FontManager = function() {
          var t = {
              w: 0,
              size: 0,
              shapes: [],
              data: {
                shapes: []
              }
            },
            e = [];
          e = e.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]);
          var r = 127988,
            i = ["d83cdffb", "d83cdffc", "d83cdffd", "d83cdffe", "d83cdfff"];

          function a(t, e) {
            var r = createTag("span");
            r.setAttribute("aria-hidden", !0), r.style.fontFamily = e;
            var i = createTag("span");
            i.innerText = "giItT1WQy@!-/#", r.style.position = "absolute", r.style.left = "-10000px", r.style.top = "-10000px", r.style.fontSize = "300px", r.style.fontVariant = "normal", r.style.fontStyle = "normal", r.style.fontWeight = "normal", r.style.letterSpacing = "0", r.appendChild(i), document.body.appendChild(r);
            var a = i.offsetWidth;
            return i.style.fontFamily = function(t) {
              var e, r = t.split(","),
                i = r.length,
                a = [];
              for (e = 0; e < i; e += 1) "sans-serif" !== r[e] && "monospace" !== r[e] && a.push(r[e]);
              return a.join(",")
            }(t) + ", " + e, {
              node: i,
              w: a,
              parent: r
            }
          }

          function s(t, e) {
            var r, i = document.body && e ? "svg" : "canvas",
              a = getFontProperties(t);
            if ("svg" === i) {
              var s = createNS("text");
              s.style.fontSize = "100px", s.setAttribute("font-family", t.fFamily), s.setAttribute("font-style", a.style), s.setAttribute("font-weight", a.weight), s.textContent = "1", t.fClass ? (s.style.fontFamily = "inherit", s.setAttribute("class", t.fClass)) : s.style.fontFamily = t.fFamily, e.appendChild(s), r = s
            } else {
              var n = new OffscreenCanvas(500, 500).getContext("2d");
              n.font = a.style + " " + a.weight + " 100px " + t.fFamily, r = n
            }
            return {
              measureText: function(t) {
                return "svg" === i ? (r.textContent = t, r.getComputedTextLength()) : r.measureText(t).width
              }
            }
          }

          function n(t) {
            var e = 0,
              r = t.charCodeAt(0);
            if (r >= 55296 && r <= 56319) {
              var i = t.charCodeAt(1);
              i >= 56320 && i <= 57343 && (e = 1024 * (r - 55296) + i - 56320 + 65536)
            }
            return e
          }

          function o(t) {
            var e = n(t);
            return e >= 127462 && e <= 127487
          }
          var l = function() {
            this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = !1, this._warned = !1, this.initTime = Date.now(), this.setIsLoadedBinded = this.setIsLoaded.bind(this), this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this)
          };
          l.isModifier = function(t, e) {
            var r = t.toString(16) + e.toString(16);
            return -1 !== i.indexOf(r)
          }, l.isZeroWidthJoiner = function(t) {
            return 8205 === t
          }, l.isFlagEmoji = function(t) {
            return o(t.substr(0, 2)) && o(t.substr(2, 2))
          }, l.isRegionalCode = o, l.isCombinedCharacter = function(t) {
            return -1 !== e.indexOf(t)
          }, l.isRegionalFlag = function(t, e) {
            var i = n(t.substr(e, 2));
            if (i !== r) return !1;
            var a = 0;
            for (e += 2; a < 5;) {
              if ((i = n(t.substr(e, 2))) < 917601 || i > 917626) return !1;
              a += 1, e += 2
            }
            return 917631 === n(t.substr(e, 2))
          }, l.isVariationSelector = function(t) {
            return 65039 === t
          }, l.BLACK_FLAG_CODE_POINT = r;
          var h = {
            addChars: function(t) {
              if (t) {
                var e;
                this.chars || (this.chars = []);
                var r, i, a = t.length,
                  s = this.chars.length;
                for (e = 0; e < a; e += 1) {
                  for (r = 0, i = !1; r < s;) this.chars[r].style === t[e].style && this.chars[r].fFamily === t[e].fFamily && this.chars[r].ch === t[e].ch && (i = !0), r += 1;
                  i || (this.chars.push(t[e]), s += 1)
                }
              }
            },
            addFonts: function(t, e) {
              if (t) {
                if (this.chars) return this.isLoaded = !0, void(this.fonts = t.list);
                if (!document.body) return this.isLoaded = !0, t.list.forEach((function(t) {
                  t.helper = s(t), t.cache = {}
                })), void(this.fonts = t.list);
                var r, i = t.list,
                  n = i.length,
                  o = n;
                for (r = 0; r < n; r += 1) {
                  var l, h, p = !0;
                  if (i[r].loaded = !1, i[r].monoCase = a(i[r].fFamily, "monospace"), i[r].sansCase = a(i[r].fFamily, "sans-serif"), i[r].fPath) {
                    if ("p" === i[r].fOrigin || 3 === i[r].origin) {
                      if ((l = document.querySelectorAll('style[f-forigin="p"][f-family="' + i[r].fFamily + '"], style[f-origin="3"][f-family="' + i[r].fFamily + '"]')).length > 0 && (p = !1), p) {
                        var c = createTag("style");
                        c.setAttribute("f-forigin", i[r].fOrigin), c.setAttribute("f-origin", i[r].origin), c.setAttribute("f-family", i[r].fFamily), c.type = "text/css", c.innerText = "@font-face {font-family: " + i[r].fFamily + "; font-style: normal; src: url('" + i[r].fPath + "');}", e.appendChild(c)
                      }
                    } else if ("g" === i[r].fOrigin || 1 === i[r].origin) {
                      for (l = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), h = 0; h < l.length; h += 1) - 1 !== l[h].href.indexOf(i[r].fPath) && (p = !1);
                      if (p) {
                        var f = createTag("link");
                        f.setAttribute("f-forigin", i[r].fOrigin), f.setAttribute("f-origin", i[r].origin), f.type = "text/css", f.rel = "stylesheet", f.href = i[r].fPath, document.body.appendChild(f)
                      }
                    } else if ("t" === i[r].fOrigin || 2 === i[r].origin) {
                      for (l = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), h = 0; h < l.length; h += 1) i[r].fPath === l[h].src && (p = !1);
                      if (p) {
                        var u = createTag("link");
                        u.setAttribute("f-forigin", i[r].fOrigin), u.setAttribute("f-origin", i[r].origin), u.setAttribute("rel", "stylesheet"), u.setAttribute("href", i[r].fPath), e.appendChild(u)
                      }
                    }
                  } else i[r].loaded = !0, o -= 1;
                  i[r].helper = s(i[r], e), i[r].cache = {}, this.fonts.push(i[r])
                }
                0 === o ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100)
              } else this.isLoaded = !0
            },
            getCharData: function(e, r, i) {
              for (var a = 0, s = this.chars.length; a < s;) {
                if (this.chars[a].ch === e && this.chars[a].style === r && this.chars[a].fFamily === i) return this.chars[a];
                a += 1
              }
              return ("string" == typeof e && 13 !== e.charCodeAt(0) || !e) && console && console.warn && !this._warned && (this._warned = !0, console.warn("Missing character from exported characters list: ", e, r, i)), t
            },
            getFontByName: function(t) {
              for (var e = 0, r = this.fonts.length; e < r;) {
                if (this.fonts[e].fName === t) return this.fonts[e];
                e += 1
              }
              return this.fonts[0]
            },
            measureText: function(t, e, r) {
              var i = this.getFontByName(e),
                a = t;
              if (!i.cache[a]) {
                var s = i.helper;
                if (" " === t) {
                  var n = s.measureText("|" + t + "|"),
                    o = s.measureText("||");
                  i.cache[a] = (n - o) / 100
                } else i.cache[a] = s.measureText(t) / 100
              }
              return i.cache[a] * r
            },
            checkLoadedFonts: function() {
              var t, e, r, i = this.fonts.length,
                a = i;
              for (t = 0; t < i; t += 1) this.fonts[t].loaded ? a -= 1 : "n" === this.fonts[t].fOrigin || 0 === this.fonts[t].origin ? this.fonts[t].loaded = !0 : (e = this.fonts[t].monoCase.node, r = this.fonts[t].monoCase.w, e.offsetWidth !== r ? (a -= 1, this.fonts[t].loaded = !0) : (e = this.fonts[t].sansCase.node, r = this.fonts[t].sansCase.w, e.offsetWidth !== r && (a -= 1, this.fonts[t].loaded = !0)), this.fonts[t].loaded && (this.fonts[t].sansCase.parent.parentNode.removeChild(this.fonts[t].sansCase.parent), this.fonts[t].monoCase.parent.parentNode.removeChild(this.fonts[t].monoCase.parent)));
              0 !== a && Date.now() - this.initTime < 5e3 ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10)
            },
            setIsLoaded: function() {
              this.isLoaded = !0
            }
          };
          return l.prototype = h, l
        }();

        function SlotManager(t) {
          this.animationData = t
        }

        function slotFactory(t) {
          return new SlotManager(t)
        }

        function RenderableElement() {}
        SlotManager.prototype.getProp = function(t) {
          return this.animationData.slots && this.animationData.slots[t.sid] ? Object.assign(t, this.animationData.slots[t.sid].p) : t
        }, RenderableElement.prototype = {
          initRenderable: function() {
            this.isInRange = !1, this.hidden = !1, this.isTransparent = !1, this.renderableComponents = []
          },
          addRenderableComponent: function(t) {
            -1 === this.renderableComponents.indexOf(t) && this.renderableComponents.push(t)
          },
          removeRenderableComponent: function(t) {
            -1 !== this.renderableComponents.indexOf(t) && this.renderableComponents.splice(this.renderableComponents.indexOf(t), 1)
          },
          prepareRenderableFrame: function(t) {
            this.checkLayerLimits(t)
          },
          checkTransparency: function() {
            this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = !0, this.hide()) : this.isTransparent && (this.isTransparent = !1, this.show())
          },
          checkLayerLimits: function(t) {
            this.data.ip - this.data.st <= t && this.data.op - this.data.st > t ? !0 !== this.isInRange && (this.globalData._mdf = !0, this._mdf = !0, this.isInRange = !0, this.show()) : !1 !== this.isInRange && (this.globalData._mdf = !0, this.isInRange = !1, this.hide())
          },
          renderRenderable: function() {
            var t, e = this.renderableComponents.length;
            for (t = 0; t < e; t += 1) this.renderableComponents[t].renderFrame(this._isFirstFrame)
          },
          sourceRectAtTime: function() {
            return {
              top: 0,
              left: 0,
              width: 100,
              height: 100
            }
          },
          getLayerSize: function() {
            return 5 === this.data.ty ? {
              w: this.data.textData.width,
              h: this.data.textData.height
            } : {
              w: this.data.width,
              h: this.data.height
            }
          }
        };
        var getBlendMode = (blendModeEnums = {
            0: "source-over",
            1: "multiply",
            2: "screen",
            3: "overlay",
            4: "darken",
            5: "lighten",
            6: "color-dodge",
            7: "color-burn",
            8: "hard-light",
            9: "soft-light",
            10: "difference",
            11: "exclusion",
            12: "hue",
            13: "saturation",
            14: "color",
            15: "luminosity"
          }, function(t) {
            return blendModeEnums[t] || ""
          }),
          blendModeEnums;

        function SliderEffect(t, e, r) {
          this.p = PropertyFactory.getProp(e, t.v, 0, 0, r)
        }

        function AngleEffect(t, e, r) {
          this.p = PropertyFactory.getProp(e, t.v, 0, 0, r)
        }

        function ColorEffect(t, e, r) {
          this.p = PropertyFactory.getProp(e, t.v, 1, 0, r)
        }

        function PointEffect(t, e, r) {
          this.p = PropertyFactory.getProp(e, t.v, 1, 0, r)
        }

        function LayerIndexEffect(t, e, r) {
          this.p = PropertyFactory.getProp(e, t.v, 0, 0, r)
        }

        function MaskIndexEffect(t, e, r) {
          this.p = PropertyFactory.getProp(e, t.v, 0, 0, r)
        }

        function CheckboxEffect(t, e, r) {
          this.p = PropertyFactory.getProp(e, t.v, 0, 0, r)
        }

        function NoValueEffect() {
          this.p = {}
        }

        function EffectsManager(t, e) {
          var r, i = t.ef || [];
          this.effectElements = [];
          var a, s = i.length;
          for (r = 0; r < s; r += 1) a = new GroupEffect(i[r], e), this.effectElements.push(a)
        }

        function GroupEffect(t, e) {
          this.init(t, e)
        }

        function BaseElement() {}

        function FrameElement() {}

        function FootageElement(t, e, r) {
          this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.footageData = e.imageLoader.getAsset(this.assetData), this.initBaseData(t, e, r)
        }

        function AudioElement(t, e, r) {
          this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.initBaseData(t, e, r), this._isPlaying = !1, this._canPlay = !1;
          var i = this.globalData.getAssetsPath(this.assetData);
          this.audio = this.globalData.audioController.createAudio(i), this._currentTime = 0, this.globalData.audioController.addAudio(this), this._volumeMultiplier = 1, this._volume = 1, this._previousVolume = null, this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
            _placeholder: !0
          }, this.lv = PropertyFactory.getProp(this, t.au && t.au.lv ? t.au.lv : {
            k: [100]
          }, 1, .01, this)
        }

        function BaseRenderer() {}
        extendPrototype([DynamicPropertyContainer], GroupEffect), GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties, GroupEffect.prototype.init = function(t, e) {
          var r;
          this.data = t, this.effectElements = [], this.initDynamicPropertyContainer(e);
          var i, a = this.data.ef.length,
            s = this.data.ef;
          for (r = 0; r < a; r += 1) {
            switch (i = null, s[r].ty) {
              case 0:
                i = new SliderEffect(s[r], e, this);
                break;
              case 1:
                i = new AngleEffect(s[r], e, this);
                break;
              case 2:
                i = new ColorEffect(s[r], e, this);
                break;
              case 3:
                i = new PointEffect(s[r], e, this);
                break;
              case 4:
              case 7:
                i = new CheckboxEffect(s[r], e, this);
                break;
              case 10:
                i = new LayerIndexEffect(s[r], e, this);
                break;
              case 11:
                i = new MaskIndexEffect(s[r], e, this);
                break;
              case 5:
                i = new EffectsManager(s[r], e, this);
                break;
              default:
                i = new NoValueEffect(s[r], e, this)
            }
            i && this.effectElements.push(i)
          }
        }, BaseElement.prototype = {
          checkMasks: function() {
            if (!this.data.hasMask) return !1;
            for (var t = 0, e = this.data.masksProperties.length; t < e;) {
              if ("n" !== this.data.masksProperties[t].mode && !1 !== this.data.masksProperties[t].cl) return !0;
              t += 1
            }
            return !1
          },
          initExpressions: function() {
            var t = getExpressionInterfaces();
            if (t) {
              var e = t("layer"),
                r = t("effects"),
                i = t("shape"),
                a = t("text"),
                s = t("comp");
              this.layerInterface = e(this), this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
              var n = r.createEffectsInterface(this, this.layerInterface);
              this.layerInterface.registerEffectsInterface(n), 0 === this.data.ty || this.data.xt ? this.compInterface = s(this) : 4 === this.data.ty ? (this.layerInterface.shapeInterface = i(this.shapesData, this.itemsData, this.layerInterface), this.layerInterface.content = this.layerInterface.shapeInterface) : 5 === this.data.ty && (this.layerInterface.textInterface = a(this), this.layerInterface.text = this.layerInterface.textInterface)
            }
          },
          setBlendMode: function() {
            var t = getBlendMode(this.data.bm);
            (this.baseElement || this.layerElement).style["mix-blend-mode"] = t
          },
          initBaseData: function(t, e, r) {
            this.globalData = e, this.comp = r, this.data = t, this.layerId = createElementID(), this.data.sr || (this.data.sr = 1), this.effectsManager = new EffectsManager(this.data, this, this.dynamicProperties)
          },
          getType: function() {
            return this.type
          },
          sourceRectAtTime: function() {}
        }, FrameElement.prototype = {
          initFrame: function() {
            this._isFirstFrame = !1, this.dynamicProperties = [], this._mdf = !1
          },
          prepareProperties: function(t, e) {
            var r, i = this.dynamicProperties.length;
            for (r = 0; r < i; r += 1)(e || this._isParent && "transform" === this.dynamicProperties[r].propType) && (this.dynamicProperties[r].getValue(), this.dynamicProperties[r]._mdf && (this.globalData._mdf = !0, this._mdf = !0))
          },
          addDynamicProperty: function(t) {
            -1 === this.dynamicProperties.indexOf(t) && this.dynamicProperties.push(t)
          }
        }, FootageElement.prototype.prepareFrame = function() {}, extendPrototype([RenderableElement, BaseElement, FrameElement], FootageElement), FootageElement.prototype.getBaseElement = function() {
          return null
        }, FootageElement.prototype.renderFrame = function() {}, FootageElement.prototype.destroy = function() {}, FootageElement.prototype.initExpressions = function() {
          var t = getExpressionInterfaces();
          if (t) {
            var e = t("footage");
            this.layerInterface = e(this)
          }
        }, FootageElement.prototype.getFootageData = function() {
          return this.footageData
        }, AudioElement.prototype.prepareFrame = function(t) {
          if (this.prepareRenderableFrame(t, !0), this.prepareProperties(t, !0), this.tm._placeholder) this._currentTime = t / this.data.sr;
          else {
            var e = this.tm.v;
            this._currentTime = e
          }
          this._volume = this.lv.v[0];
          var r = this._volume * this._volumeMultiplier;
          this._previousVolume !== r && (this._previousVolume = r, this.audio.volume(r))
        }, extendPrototype([RenderableElement, BaseElement, FrameElement], AudioElement), AudioElement.prototype.renderFrame = function() {
          this.isInRange && this._canPlay && (this._isPlaying ? (!this.audio.playing() || Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek()) > .1) && this.audio.seek(this._currentTime / this.globalData.frameRate) : (this.audio.play(), this.audio.seek(this._currentTime / this.globalData.frameRate), this._isPlaying = !0))
        }, AudioElement.prototype.show = function() {}, AudioElement.prototype.hide = function() {
          this.audio.pause(), this._isPlaying = !1
        }, AudioElement.prototype.pause = function() {
          this.audio.pause(), this._isPlaying = !1, this._canPlay = !1
        }, AudioElement.prototype.resume = function() {
          this._canPlay = !0
        }, AudioElement.prototype.setRate = function(t) {
          this.audio.rate(t)
        }, AudioElement.prototype.volume = function(t) {
          this._volumeMultiplier = t, this._previousVolume = t * this._volume, this.audio.volume(this._previousVolume)
        }, AudioElement.prototype.getBaseElement = function() {
          return null
        }, AudioElement.prototype.destroy = function() {}, AudioElement.prototype.sourceRectAtTime = function() {}, AudioElement.prototype.initExpressions = function() {}, BaseRenderer.prototype.checkLayers = function(t) {
          var e, r, i = this.layers.length;
          for (this.completeLayers = !0, e = i - 1; e >= 0; e -= 1) this.elements[e] || (r = this.layers[e]).ip - r.st <= t - this.layers[e].st && r.op - r.st > t - this.layers[e].st && this.buildItem(e), this.completeLayers = !!this.elements[e] && this.completeLayers;
          this.checkPendingElements()
        }, BaseRenderer.prototype.createItem = function(t) {
          switch (t.ty) {
            case 2:
              return this.createImage(t);
            case 0:
              return this.createComp(t);
            case 1:
              return this.createSolid(t);
            case 3:
            default:
              return this.createNull(t);
            case 4:
              return this.createShape(t);
            case 5:
              return this.createText(t);
            case 6:
              return this.createAudio(t);
            case 13:
              return this.createCamera(t);
            case 15:
              return this.createFootage(t)
          }
        }, BaseRenderer.prototype.createCamera = function() {
          throw new Error("You're using a 3d camera. Try the html renderer.")
        }, BaseRenderer.prototype.createAudio = function(t) {
          return new AudioElement(t, this.globalData, this)
        }, BaseRenderer.prototype.createFootage = function(t) {
          return new FootageElement(t, this.globalData, this)
        }, BaseRenderer.prototype.buildAllItems = function() {
          var t, e = this.layers.length;
          for (t = 0; t < e; t += 1) this.buildItem(t);
          this.checkPendingElements()
        }, BaseRenderer.prototype.includeLayers = function(t) {
          var e;
          this.completeLayers = !1;
          var r, i = t.length,
            a = this.layers.length;
          for (e = 0; e < i; e += 1)
            for (r = 0; r < a;) {
              if (this.layers[r].id === t[e].id) {
                this.layers[r] = t[e];
                break
              }
              r += 1
            }
        }, BaseRenderer.prototype.setProjectInterface = function(t) {
          this.globalData.projectInterface = t
        }, BaseRenderer.prototype.initItems = function() {
          this.globalData.progressiveLoad || this.buildAllItems()
        }, BaseRenderer.prototype.buildElementParenting = function(t, e, r) {
          for (var i = this.elements, a = this.layers, s = 0, n = a.length; s < n;) a[s].ind == e && (i[s] && !0 !== i[s] ? (r.push(i[s]), i[s].setAsParent(), void 0 !== a[s].parent ? this.buildElementParenting(t, a[s].parent, r) : t.setHierarchy(r)) : (this.buildItem(s), this.addPendingElement(t))), s += 1
        }, BaseRenderer.prototype.addPendingElement = function(t) {
          this.pendingElements.push(t)
        }, BaseRenderer.prototype.searchExtraCompositions = function(t) {
          var e, r = t.length;
          for (e = 0; e < r; e += 1)
            if (t[e].xt) {
              var i = this.createComp(t[e]);
              i.initExpressions(), this.globalData.projectInterface.registerComposition(i)
            }
        }, BaseRenderer.prototype.getElementById = function(t) {
          var e, r = this.elements.length;
          for (e = 0; e < r; e += 1)
            if (this.elements[e].data.ind === t) return this.elements[e];
          return null
        }, BaseRenderer.prototype.getElementByPath = function(t) {
          var e, r = t.shift();
          if ("number" == typeof r) e = this.elements[r];
          else {
            var i, a = this.elements.length;
            for (i = 0; i < a; i += 1)
              if (this.elements[i].data.nm === r) {
                e = this.elements[i];
                break
              }
          }
          return 0 === t.length ? e : e.getElementByPath(t)
        }, BaseRenderer.prototype.setupGlobalData = function(t, e) {
          this.globalData.fontManager = new FontManager, this.globalData.slotManager = slotFactory(t), this.globalData.fontManager.addChars(t.chars), this.globalData.fontManager.addFonts(t.fonts, e), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.imageLoader = this.animationItem.imagePreloader, this.globalData.audioController = this.animationItem.audioController, this.globalData.frameId = 0, this.globalData.frameRate = t.fr, this.globalData.nm = t.nm, this.globalData.compSize = {
            w: t.w,
            h: t.h
          }
        };
        var effectTypes = {
          TRANSFORM_EFFECT: "transformEFfect"
        };

        function TransformElement() {}

        function MaskElement(t, e, r) {
          this.data = t, this.element = e, this.globalData = r, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null;
          var i, a, s = this.globalData.defs,
            n = this.masksProperties ? this.masksProperties.length : 0;
          this.viewData = createSizedArray(n), this.solidPath = "";
          var o, l, h, p, c, f, u = this.masksProperties,
            d = 0,
            m = [],
            y = createElementID(),
            g = "clipPath",
            v = "clip-path";
          for (i = 0; i < n; i += 1)
            if (("a" !== u[i].mode && "n" !== u[i].mode || u[i].inv || 100 !== u[i].o.k || u[i].o.x) && (g = "mask", v = "mask"), "s" !== u[i].mode && "i" !== u[i].mode || 0 !== d ? h = null : ((h = createNS("rect")).setAttribute("fill", "#ffffff"), h.setAttribute("width", this.element.comp.data.w || 0), h.setAttribute("height", this.element.comp.data.h || 0), m.push(h)), a = createNS("path"), "n" === u[i].mode) this.viewData[i] = {
              op: PropertyFactory.getProp(this.element, u[i].o, 0, .01, this.element),
              prop: ShapePropertyFactory.getShapeProp(this.element, u[i], 3),
              elem: a,
              lastPath: ""
            }, s.appendChild(a);
            else {
              var b;
              if (d += 1, a.setAttribute("fill", "s" === u[i].mode ? "#000000" : "#ffffff"), a.setAttribute("clip-rule", "nonzero"), 0 !== u[i].x.k ? (g = "mask", v = "mask", f = PropertyFactory.getProp(this.element, u[i].x, 0, null, this.element), b = createElementID(), (p = createNS("filter")).setAttribute("id", b), (c = createNS("feMorphology")).setAttribute("operator", "erode"), c.setAttribute("in", "SourceGraphic"), c.setAttribute("radius", "0"), p.appendChild(c), s.appendChild(p), a.setAttribute("stroke", "s" === u[i].mode ? "#000000" : "#ffffff")) : (c = null, f = null), this.storedData[i] = {
                  elem: a,
                  x: f,
                  expan: c,
                  lastPath: "",
                  lastOperator: "",
                  filterId: b,
                  lastRadius: 0
                }, "i" === u[i].mode) {
                l = m.length;
                var x = createNS("g");
                for (o = 0; o < l; o += 1) x.appendChild(m[o]);
                var C = createNS("mask");
                C.setAttribute("mask-type", "alpha"), C.setAttribute("id", y + "_" + d), C.appendChild(a), s.appendChild(C), x.setAttribute("mask", "url(" + getLocationHref() + "#" + y + "_" + d + ")"), m.length = 0, m.push(x)
              } else m.push(a);
              u[i].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[i] = {
                elem: a,
                lastPath: "",
                op: PropertyFactory.getProp(this.element, u[i].o, 0, .01, this.element),
                prop: ShapePropertyFactory.getShapeProp(this.element, u[i], 3),
                invRect: h
              }, this.viewData[i].prop.k || this.drawPath(u[i], this.viewData[i].prop.v, this.viewData[i])
            } for (this.maskElement = createNS(g), n = m.length, i = 0; i < n; i += 1) this.maskElement.appendChild(m[i]);
          d > 0 && (this.maskElement.setAttribute("id", y), this.element.maskedElement.setAttribute(v, "url(" + getLocationHref() + "#" + y + ")"), s.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this)
        }
        TransformElement.prototype = {
          initTransform: function() {
            var t = new Matrix;
            this.finalTransform = {
              mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this) : {
                o: 0
              },
              _matMdf: !1,
              _localMatMdf: !1,
              _opMdf: !1,
              mat: t,
              localMat: t,
              localOpacity: 1
            }, this.data.ao && (this.finalTransform.mProp.autoOriented = !0), this.data.ty
          },
          renderTransform: function() {
            if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame, this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame, this.hierarchy) {
              var t, e = this.finalTransform.mat,
                r = 0,
                i = this.hierarchy.length;
              if (!this.finalTransform._matMdf)
                for (; r < i;) {
                  if (this.hierarchy[r].finalTransform.mProp._mdf) {
                    this.finalTransform._matMdf = !0;
                    break
                  }
                  r += 1
                }
              if (this.finalTransform._matMdf)
                for (t = this.finalTransform.mProp.v.props, e.cloneFromProps(t), r = 0; r < i; r += 1) e.multiply(this.hierarchy[r].finalTransform.mProp.v)
            }
            this.finalTransform._matMdf && (this.finalTransform._localMatMdf = this.finalTransform._matMdf), this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v)
          },
          renderLocalTransform: function() {
            if (this.localTransforms) {
              var t = 0,
                e = this.localTransforms.length;
              if (this.finalTransform._localMatMdf = this.finalTransform._matMdf, !this.finalTransform._localMatMdf || !this.finalTransform._opMdf)
                for (; t < e;) this.localTransforms[t]._mdf && (this.finalTransform._localMatMdf = !0), this.localTransforms[t]._opMdf && !this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v, this.finalTransform._opMdf = !0), t += 1;
              if (this.finalTransform._localMatMdf) {
                var r = this.finalTransform.localMat;
                for (this.localTransforms[0].matrix.clone(r), t = 1; t < e; t += 1) {
                  var i = this.localTransforms[t].matrix;
                  r.multiply(i)
                }
                r.multiply(this.finalTransform.mat)
              }
              if (this.finalTransform._opMdf) {
                var a = this.finalTransform.localOpacity;
                for (t = 0; t < e; t += 1) a *= .01 * this.localTransforms[t].opacity;
                this.finalTransform.localOpacity = a
              }
            }
          },
          searchEffectTransforms: function() {
            if (this.renderableEffectsManager) {
              var t = this.renderableEffectsManager.getEffects(effectTypes.TRANSFORM_EFFECT);
              if (t.length) {
                this.localTransforms = [], this.finalTransform.localMat = new Matrix;
                var e = 0,
                  r = t.length;
                for (e = 0; e < r; e += 1) this.localTransforms.push(t[e])
              }
            }
          },
          globalToLocal: function(t) {
            var e = [];
            e.push(this.finalTransform);
            for (var r, i = !0, a = this.comp; i;) a.finalTransform ? (a.data.hasMask && e.splice(0, 0, a.finalTransform), a = a.comp) : i = !1;
            var s, n = e.length;
            for (r = 0; r < n; r += 1) s = e[r].mat.applyToPointArray(0, 0, 0), t = [t[0] - s[0], t[1] - s[1], 0];
            return t
          },
          mHelper: new Matrix
        }, MaskElement.prototype.getMaskProperty = function(t) {
          return this.viewData[t].prop
        }, MaskElement.prototype.renderFrame = function(t) {
          var e, r = this.element.finalTransform.mat,
            i = this.masksProperties.length;
          for (e = 0; e < i; e += 1)
            if ((this.viewData[e].prop._mdf || t) && this.drawPath(this.masksProperties[e], this.viewData[e].prop.v, this.viewData[e]), (this.viewData[e].op._mdf || t) && this.viewData[e].elem.setAttribute("fill-opacity", this.viewData[e].op.v), "n" !== this.masksProperties[e].mode && (this.viewData[e].invRect && (this.element.finalTransform.mProp._mdf || t) && this.viewData[e].invRect.setAttribute("transform", r.getInverseMatrix().to2dCSS()), this.storedData[e].x && (this.storedData[e].x._mdf || t))) {
              var a = this.storedData[e].expan;
              this.storedData[e].x.v < 0 ? ("erode" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "erode", this.storedData[e].elem.setAttribute("filter", "url(" + getLocationHref() + "#" + this.storedData[e].filterId + ")")), a.setAttribute("radius", -this.storedData[e].x.v)) : ("dilate" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "dilate", this.storedData[e].elem.setAttribute("filter", null)), this.storedData[e].elem.setAttribute("stroke-width", 2 * this.storedData[e].x.v))
            }
        }, MaskElement.prototype.getMaskelement = function() {
          return this.maskElement
        }, MaskElement.prototype.createLayerSolidPath = function() {
          var t = "M0,0 ";
          return t += " h" + this.globalData.compSize.w, t += " v" + this.globalData.compSize.h, (t += " h-" + this.globalData.compSize.w) + " v-" + this.globalData.compSize.h + " "
        }, MaskElement.prototype.drawPath = function(t, e, r) {
          var i, a, s = " M" + e.v[0][0] + "," + e.v[0][1];
          for (a = e._length, i = 1; i < a; i += 1) s += " C" + e.o[i - 1][0] + "," + e.o[i - 1][1] + " " + e.i[i][0] + "," + e.i[i][1] + " " + e.v[i][0] + "," + e.v[i][1];
          if (e.c && a > 1 && (s += " C" + e.o[i - 1][0] + "," + e.o[i - 1][1] + " " + e.i[0][0] + "," + e.i[0][1] + " " + e.v[0][0] + "," + e.v[0][1]), r.lastPath !== s) {
            var n = "";
            r.elem && (e.c && (n = t.inv ? this.solidPath + s : s), r.elem.setAttribute("d", n)), r.lastPath = s
          }
        }, MaskElement.prototype.destroy = function() {
          this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null
        };
        var filtersFactory = {
            createFilter: function(t, e) {
              var r = createNS("filter");
              return r.setAttribute("id", t), !0 !== e && (r.setAttribute("filterUnits", "objectBoundingBox"), r.setAttribute("x", "0%"), r.setAttribute("y", "0%"), r.setAttribute("width", "100%"), r.setAttribute("height", "100%")), r
            },
            createAlphaToLuminanceFilter: function() {
              var t = createNS("feColorMatrix");
              return t.setAttribute("type", "matrix"), t.setAttribute("color-interpolation-filters", "sRGB"), t.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), t
            }
          },
          featureSupport = function() {
            var t = {
              maskType: !0,
              svgLumaHidden: !0,
              offscreenCanvas: "undefined" != typeof OffscreenCanvas
            };
            return (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (t.maskType = !1), /firefox/i.test(navigator.userAgent) && (t.svgLumaHidden = !1), t
          }(),
          registeredEffects$1 = {},
          idPrefix = "filter_result_";

        function SVGEffects(t) {
          var e, r, i = "SourceGraphic",
            a = t.data.ef ? t.data.ef.length : 0,
            s = createElementID(),
            n = filtersFactory.createFilter(s, !0),
            o = 0;
          for (this.filters = [], e = 0; e < a; e += 1) {
            r = null;
            var l = t.data.ef[e].ty;
            registeredEffects$1[l] && (r = new(0, registeredEffects$1[l].effect)(n, t.effectsManager.effectElements[e], t, idPrefix + o, i), i = idPrefix + o, registeredEffects$1[l].countsAsEffect && (o += 1)), r && this.filters.push(r)
          }
          o && (t.globalData.defs.appendChild(n), t.layerElement.setAttribute("filter", "url(" + getLocationHref() + "#" + s + ")")), this.filters.length && t.addRenderableComponent(this)
        }

        function registerEffect$1(t, e, r) {
          registeredEffects$1[t] = {
            effect: e,
            countsAsEffect: r
          }
        }

        function SVGBaseElement() {}

        function HierarchyElement() {}

        function RenderableDOMElement() {}

        function IImageElement(t, e, r) {
          this.assetData = e.getAssetData(t.refId), this.assetData && this.assetData.sid && (this.assetData = e.slotManager.getProp(this.assetData)), this.initElement(t, e, r), this.sourceRect = {
            top: 0,
            left: 0,
            width: this.assetData.w,
            height: this.assetData.h
          }
        }

        function ProcessedElement(t, e) {
          this.elem = t, this.pos = e
        }

        function IShapeElement() {}
        SVGEffects.prototype.renderFrame = function(t) {
          var e, r = this.filters.length;
          for (e = 0; e < r; e += 1) this.filters[e].renderFrame(t)
        }, SVGEffects.prototype.getEffects = function(t) {
          var e, r = this.filters.length,
            i = [];
          for (e = 0; e < r; e += 1) this.filters[e].type === t && i.push(this.filters[e]);
          return i
        }, SVGBaseElement.prototype = {
          initRendererElement: function() {
            this.layerElement = createNS("g")
          },
          createContainerElements: function() {
            this.matteElement = createNS("g"), this.transformedElement = this.layerElement, this.maskedElement = this.layerElement, this._sizeChanged = !1;
            var t = null;
            if (this.data.td) {
              this.matteMasks = {};
              var e = createNS("g");
              e.setAttribute("id", this.layerId), e.appendChild(this.layerElement), t = e, this.globalData.defs.appendChild(e)
            } else this.data.tt ? (this.matteElement.appendChild(this.layerElement), t = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement;
            if (this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 === this.data.ty && !this.data.hd) {
              var r = createNS("clipPath"),
                i = createNS("path");
              i.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
              var a = createElementID();
              if (r.setAttribute("id", a), r.appendChild(i), this.globalData.defs.appendChild(r), this.checkMasks()) {
                var s = createNS("g");
                s.setAttribute("clip-path", "url(" + getLocationHref() + "#" + a + ")"), s.appendChild(this.layerElement), this.transformedElement = s, t ? t.appendChild(this.transformedElement) : this.baseElement = this.transformedElement
              } else this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + a + ")")
            }
            0 !== this.data.bm && this.setBlendMode()
          },
          renderElement: function() {
            this.finalTransform._localMatMdf && this.transformedElement.setAttribute("transform", this.finalTransform.localMat.to2dCSS()), this.finalTransform._opMdf && this.transformedElement.setAttribute("opacity", this.finalTransform.localOpacity)
          },
          destroyBaseElement: function() {
            this.layerElement = null, this.matteElement = null, this.maskManager.destroy()
          },
          getBaseElement: function() {
            return this.data.hd ? null : this.baseElement
          },
          createRenderableComponents: function() {
            this.maskManager = new MaskElement(this.data, this, this.globalData), this.renderableEffectsManager = new SVGEffects(this), this.searchEffectTransforms()
          },
          getMatte: function(t) {
            if (this.matteMasks || (this.matteMasks = {}), !this.matteMasks[t]) {
              var e, r, i, a, s = this.layerId + "_" + t;
              if (1 === t || 3 === t) {
                var n = createNS("mask");
                n.setAttribute("id", s), n.setAttribute("mask-type", 3 === t ? "luminance" : "alpha"), (i = createNS("use")).setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), n.appendChild(i), this.globalData.defs.appendChild(n), featureSupport.maskType || 1 !== t || (n.setAttribute("mask-type", "luminance"), e = createElementID(), r = filtersFactory.createFilter(e), this.globalData.defs.appendChild(r), r.appendChild(filtersFactory.createAlphaToLuminanceFilter()), (a = createNS("g")).appendChild(i), n.appendChild(a), a.setAttribute("filter", "url(" + getLocationHref() + "#" + e + ")"))
              } else if (2 === t) {
                var o = createNS("mask");
                o.setAttribute("id", s), o.setAttribute("mask-type", "alpha");
                var l = createNS("g");
                o.appendChild(l), e = createElementID(), r = filtersFactory.createFilter(e);
                var h = createNS("feComponentTransfer");
                h.setAttribute("in", "SourceGraphic"), r.appendChild(h);
                var p = createNS("feFuncA");
                p.setAttribute("type", "table"), p.setAttribute("tableValues", "1.0 0.0"), h.appendChild(p), this.globalData.defs.appendChild(r);
                var c = createNS("rect");
                c.setAttribute("width", this.comp.data.w), c.setAttribute("height", this.comp.data.h), c.setAttribute("x", "0"), c.setAttribute("y", "0"), c.setAttribute("fill", "#ffffff"), c.setAttribute("opacity", "0"), l.setAttribute("filter", "url(" + getLocationHref() + "#" + e + ")"), l.appendChild(c), (i = createNS("use")).setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), l.appendChild(i), featureSupport.maskType || (o.setAttribute("mask-type", "luminance"), r.appendChild(filtersFactory.createAlphaToLuminanceFilter()), a = createNS("g"), l.appendChild(c), a.appendChild(this.layerElement), l.appendChild(a)), this.globalData.defs.appendChild(o)
              }
              this.matteMasks[t] = s
            }
            return this.matteMasks[t]
          },
          setMatte: function(t) {
            this.matteElement && this.matteElement.setAttribute("mask", "url(" + getLocationHref() + "#" + t + ")")
          }
        }, HierarchyElement.prototype = {
          initHierarchy: function() {
            this.hierarchy = [], this._isParent = !1, this.checkParenting()
          },
          setHierarchy: function(t) {
            this.hierarchy = t
          },
          setAsParent: function() {
            this._isParent = !0
          },
          checkParenting: function() {
            void 0 !== this.data.parent && this.comp.buildElementParenting(this, this.data.parent, [])
          }
        }, extendPrototype([RenderableElement, createProxyFunction({
          initElement: function(t, e, r) {
            this.initFrame(), this.initBaseData(t, e, r), this.initTransform(t, e, r), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide()
          },
          hide: function() {
            this.hidden || this.isInRange && !this.isTransparent || ((this.baseElement || this.layerElement).style.display = "none", this.hidden = !0)
          },
          show: function() {
            this.isInRange && !this.isTransparent && (this.data.hd || ((this.baseElement || this.layerElement).style.display = "block"), this.hidden = !1, this._isFirstFrame = !0)
          },
          renderFrame: function() {
            this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderLocalTransform(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
          },
          renderInnerContent: function() {},
          prepareFrame: function(t) {
            this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.checkTransparency()
          },
          destroy: function() {
            this.innerElem = null, this.destroyBaseElement()
          }
        })], RenderableDOMElement), extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], IImageElement), IImageElement.prototype.createContent = function() {
          var t = this.globalData.getAssetsPath(this.assetData);
          this.innerElem = createNS("image"), this.innerElem.setAttribute("width", this.assetData.w + "px"), this.innerElem.setAttribute("height", this.assetData.h + "px"), this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio), this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.innerElem)
        }, IImageElement.prototype.sourceRectAtTime = function() {
          return this.sourceRect
        }, IShapeElement.prototype = {
          addShapeToModifiers: function(t) {
            var e, r = this.shapeModifiers.length;
            for (e = 0; e < r; e += 1) this.shapeModifiers[e].addShape(t)
          },
          isShapeInAnimatedModifiers: function(t) {
            for (var e = this.shapeModifiers.length; 0 < e;)
              if (this.shapeModifiers[0].isAnimatedWithShape(t)) return !0;
            return !1
          },
          renderModifiers: function() {
            if (this.shapeModifiers.length) {
              var t, e = this.shapes.length;
              for (t = 0; t < e; t += 1) this.shapes[t].sh.reset();
              for (t = (e = this.shapeModifiers.length) - 1; t >= 0 && !this.shapeModifiers[t].processShapes(this._isFirstFrame); t -= 1);
            }
          },
          searchProcessedElement: function(t) {
            for (var e = this.processedElements, r = 0, i = e.length; r < i;) {
              if (e[r].elem === t) return e[r].pos;
              r += 1
            }
            return 0
          },
          addProcessedElement: function(t, e) {
            for (var r = this.processedElements, i = r.length; i;)
              if (r[i -= 1].elem === t) return void(r[i].pos = e);
            r.push(new ProcessedElement(t, e))
          },
          prepareFrame: function(t) {
            this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange)
          }
        };
        var lineCapEnum = {
            1: "butt",
            2: "round",
            3: "square"
          },
          lineJoinEnum = {
            1: "miter",
            2: "round",
            3: "bevel"
          };

        function SVGShapeData(t, e, r) {
          this.caches = [], this.styles = [], this.transformers = t, this.lStr = "", this.sh = r, this.lvl = e, this._isAnimated = !!r.k;
          for (var i = 0, a = t.length; i < a;) {
            if (t[i].mProps.dynamicProperties.length) {
              this._isAnimated = !0;
              break
            }
            i += 1
          }
        }

        function SVGStyleData(t, e) {
          this.data = t, this.type = t.ty, this.d = "", this.lvl = e, this._mdf = !1, this.closed = !0 === t.hd, this.pElem = createNS("path"), this.msElem = null
        }

        function DashProperty(t, e, r, i) {
          var a;
          this.elem = t, this.frameId = -1, this.dataProps = createSizedArray(e.length), this.renderer = r, this.k = !1, this.dashStr = "", this.dashArray = createTypedArray("float32", e.length ? e.length - 1 : 0), this.dashoffset = createTypedArray("float32", 1), this.initDynamicPropertyContainer(i);
          var s, n = e.length || 0;
          for (a = 0; a < n; a += 1) s = PropertyFactory.getProp(t, e[a].v, 0, 0, this), this.k = s.k || this.k, this.dataProps[a] = {
            n: e[a].n,
            p: s
          };
          this.k || this.getValue(!0), this._isAnimated = this.k
        }

        function SVGStrokeStyleData(t, e, r) {
          this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, "svg", this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = r, this._isAnimated = !!this._isAnimated
        }

        function SVGFillStyleData(t, e, r) {
          this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = r
        }

        function SVGNoStyleData(t, e, r) {
          this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.style = r
        }

        function GradientProperty(t, e, r) {
          this.data = e, this.c = createTypedArray("uint8c", 4 * e.p);
          var i = e.k.k[0].s ? e.k.k[0].s.length - 4 * e.p : e.k.k.length - 4 * e.p;
          this.o = createTypedArray("float32", i), this._cmdf = !1, this._omdf = !1, this._collapsable = this.checkCollapsable(), this._hasOpacity = i, this.initDynamicPropertyContainer(r), this.prop = PropertyFactory.getProp(t, e.k, 1, null, this), this.k = this.prop.k, this.getValue(!0)
        }

        function SVGGradientFillStyleData(t, e, r) {
          this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.initGradientData(t, e, r)
        }

        function SVGGradientStrokeStyleData(t, e, r) {
          this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, "svg", this), this.initGradientData(t, e, r), this._isAnimated = !!this._isAnimated
        }

        function ShapeGroupData() {
          this.it = [], this.prevViewData = [], this.gr = createNS("g")
        }

        function SVGTransformData(t, e, r) {
          this.transform = {
            mProps: t,
            op: e,
            container: r
          }, this.elements = [], this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length
        }
        SVGShapeData.prototype.setAsAnimated = function() {
          this._isAnimated = !0
        }, SVGStyleData.prototype.reset = function() {
          this.d = "", this._mdf = !1
        }, DashProperty.prototype.getValue = function(t) {
          if ((this.elem.globalData.frameId !== this.frameId || t) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || t, this._mdf)) {
            var e = 0,
              r = this.dataProps.length;
            for ("svg" === this.renderer && (this.dashStr = ""), e = 0; e < r; e += 1) "o" !== this.dataProps[e].n ? "svg" === this.renderer ? this.dashStr += " " + this.dataProps[e].p.v : this.dashArray[e] = this.dataProps[e].p.v : this.dashoffset[0] = this.dataProps[e].p.v
          }
        }, extendPrototype([DynamicPropertyContainer], DashProperty), extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData), extendPrototype([DynamicPropertyContainer], SVGFillStyleData), extendPrototype([DynamicPropertyContainer], SVGNoStyleData), GradientProperty.prototype.comparePoints = function(t, e) {
          for (var r = 0, i = this.o.length / 2; r < i;) {
            if (Math.abs(t[4 * r] - t[4 * e + 2 * r]) > .01) return !1;
            r += 1
          }
          return !0
        }, GradientProperty.prototype.checkCollapsable = function() {
          if (this.o.length / 2 != this.c.length / 4) return !1;
          if (this.data.k.k[0].s)
            for (var t = 0, e = this.data.k.k.length; t < e;) {
              if (!this.comparePoints(this.data.k.k[t].s, this.data.p)) return !1;
              t += 1
            } else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1;
          return !0
        }, GradientProperty.prototype.getValue = function(t) {
          if (this.prop.getValue(), this._mdf = !1, this._cmdf = !1, this._omdf = !1, this.prop._mdf || t) {
            var e, r, i, a = 4 * this.data.p;
            for (e = 0; e < a; e += 1) r = e % 4 == 0 ? 100 : 255, i = Math.round(this.prop.v[e] * r), this.c[e] !== i && (this.c[e] = i, this._cmdf = !t);
            if (this.o.length)
              for (a = this.prop.v.length, e = 4 * this.data.p; e < a; e += 1) r = e % 2 == 0 ? 100 : 1, i = e % 2 == 0 ? Math.round(100 * this.prop.v[e]) : this.prop.v[e], this.o[e - 4 * this.data.p] !== i && (this.o[e - 4 * this.data.p] = i, this._omdf = !t);
            this._mdf = !t
          }
        }, extendPrototype([DynamicPropertyContainer], GradientProperty), SVGGradientFillStyleData.prototype.initGradientData = function(t, e, r) {
          this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.s = PropertyFactory.getProp(t, e.s, 1, null, this), this.e = PropertyFactory.getProp(t, e.e, 1, null, this), this.h = PropertyFactory.getProp(t, e.h || {
            k: 0
          }, 0, .01, this), this.a = PropertyFactory.getProp(t, e.a || {
            k: 0
          }, 0, degToRads, this), this.g = new GradientProperty(t, e.g, this), this.style = r, this.stops = [], this.setGradientData(r.pElem, e), this.setGradientOpacity(e, r), this._isAnimated = !!this._isAnimated
        }, SVGGradientFillStyleData.prototype.setGradientData = function(t, e) {
          var r = createElementID(),
            i = createNS(1 === e.t ? "linearGradient" : "radialGradient");
          i.setAttribute("id", r), i.setAttribute("spreadMethod", "pad"), i.setAttribute("gradientUnits", "userSpaceOnUse");
          var a, s, n, o = [];
          for (n = 4 * e.g.p, s = 0; s < n; s += 4) a = createNS("stop"), i.appendChild(a), o.push(a);
          t.setAttribute("gf" === e.ty ? "fill" : "stroke", "url(" + getLocationHref() + "#" + r + ")"), this.gf = i, this.cst = o
        }, SVGGradientFillStyleData.prototype.setGradientOpacity = function(t, e) {
          if (this.g._hasOpacity && !this.g._collapsable) {
            var r, i, a, s = createNS("mask"),
              n = createNS("path");
            s.appendChild(n);
            var o = createElementID(),
              l = createElementID();
            s.setAttribute("id", l);
            var h = createNS(1 === t.t ? "linearGradient" : "radialGradient");
            h.setAttribute("id", o), h.setAttribute("spreadMethod", "pad"), h.setAttribute("gradientUnits", "userSpaceOnUse"), a = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length;
            var p = this.stops;
            for (i = 4 * t.g.p; i < a; i += 2)(r = createNS("stop")).setAttribute("stop-color", "rgb(255,255,255)"), h.appendChild(r), p.push(r);
            n.setAttribute("gf" === t.ty ? "fill" : "stroke", "url(" + getLocationHref() + "#" + o + ")"), "gs" === t.ty && (n.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]), n.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]), 1 === t.lj && n.setAttribute("stroke-miterlimit", t.ml)), this.of = h, this.ms = s, this.ost = p, this.maskId = l, e.msElem = n
          }
        }, extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData), extendPrototype([SVGGradientFillStyleData, DynamicPropertyContainer], SVGGradientStrokeStyleData);
        var buildShapeString = function(t, e, r, i) {
            if (0 === e) return "";
            var a, s = t.o,
              n = t.i,
              o = t.v,
              l = " M" + i.applyToPointStringified(o[0][0], o[0][1]);
            for (a = 1; a < e; a += 1) l += " C" + i.applyToPointStringified(s[a - 1][0], s[a - 1][1]) + " " + i.applyToPointStringified(n[a][0], n[a][1]) + " " + i.applyToPointStringified(o[a][0], o[a][1]);
            return r && e && (l += " C" + i.applyToPointStringified(s[a - 1][0], s[a - 1][1]) + " " + i.applyToPointStringified(n[0][0], n[0][1]) + " " + i.applyToPointStringified(o[0][0], o[0][1]), l += "z"), l
          },
          SVGElementsRenderer = function() {
            var t = new Matrix,
              e = new Matrix;

            function r(t, e, r) {
              (r || e.transform.op._mdf) && e.transform.container.setAttribute("opacity", e.transform.op.v), (r || e.transform.mProps._mdf) && e.transform.container.setAttribute("transform", e.transform.mProps.v.to2dCSS())
            }

            function i() {}

            function a(r, i, a) {
              var s, n, o, l, h, p, c, f, u, d, m = i.styles.length,
                y = i.lvl;
              for (p = 0; p < m; p += 1) {
                if (l = i.sh._mdf || a, i.styles[p].lvl < y) {
                  for (f = e.reset(), u = y - i.styles[p].lvl, d = i.transformers.length - 1; !l && u > 0;) l = i.transformers[d].mProps._mdf || l, u -= 1, d -= 1;
                  if (l)
                    for (u = y - i.styles[p].lvl, d = i.transformers.length - 1; u > 0;) f.multiply(i.transformers[d].mProps.v), u -= 1, d -= 1
                } else f = t;
                if (n = (c = i.sh.paths)._length, l) {
                  for (o = "", s = 0; s < n; s += 1)(h = c.shapes[s]) && h._length && (o += buildShapeString(h, h._length, h.c, f));
                  i.caches[p] = o
                } else o = i.caches[p];
                i.styles[p].d += !0 === r.hd ? "" : o, i.styles[p]._mdf = l || i.styles[p]._mdf
              }
            }

            function s(t, e, r) {
              var i = e.style;
              (e.c._mdf || r) && i.pElem.setAttribute("fill", "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || r) && i.pElem.setAttribute("fill-opacity", e.o.v)
            }

            function n(t, e, r) {
              o(t, e, r), l(0, e, r)
            }

            function o(t, e, r) {
              var i, a, s, n, o, l = e.gf,
                h = e.g._hasOpacity,
                p = e.s.v,
                c = e.e.v;
              if (e.o._mdf || r) {
                var f = "gf" === t.ty ? "fill-opacity" : "stroke-opacity";
                e.style.pElem.setAttribute(f, e.o.v)
              }
              if (e.s._mdf || r) {
                var u = 1 === t.t ? "x1" : "cx",
                  d = "x1" === u ? "y1" : "cy";
                l.setAttribute(u, p[0]), l.setAttribute(d, p[1]), h && !e.g._collapsable && (e.of.setAttribute(u, p[0]), e.of.setAttribute(d, p[1]))
              }
              if (e.g._cmdf || r) {
                i = e.cst;
                var m = e.g.c;
                for (s = i.length, a = 0; a < s; a += 1)(n = i[a]).setAttribute("offset", m[4 * a] + "%"), n.setAttribute("stop-color", "rgb(" + m[4 * a + 1] + "," + m[4 * a + 2] + "," + m[4 * a + 3] + ")")
              }
              if (h && (e.g._omdf || r)) {
                var y = e.g.o;
                for (s = (i = e.g._collapsable ? e.cst : e.ost).length, a = 0; a < s; a += 1) n = i[a], e.g._collapsable || n.setAttribute("offset", y[2 * a] + "%"), n.setAttribute("stop-opacity", y[2 * a + 1])
              }
              if (1 === t.t)(e.e._mdf || r) && (l.setAttribute("x2", c[0]), l.setAttribute("y2", c[1]), h && !e.g._collapsable && (e.of.setAttribute("x2", c[0]), e.of.setAttribute("y2", c[1])));
              else if ((e.s._mdf || e.e._mdf || r) && (o = Math.sqrt(Math.pow(p[0] - c[0], 2) + Math.pow(p[1] - c[1], 2)), l.setAttribute("r", o), h && !e.g._collapsable && e.of.setAttribute("r", o)), e.e._mdf || e.h._mdf || e.a._mdf || r) {
                o || (o = Math.sqrt(Math.pow(p[0] - c[0], 2) + Math.pow(p[1] - c[1], 2)));
                var g = Math.atan2(c[1] - p[1], c[0] - p[0]),
                  v = e.h.v;
                v >= 1 ? v = .99 : v <= -1 && (v = -.99);
                var b = o * v,
                  x = Math.cos(g + e.a.v) * b + p[0],
                  C = Math.sin(g + e.a.v) * b + p[1];
                l.setAttribute("fx", x), l.setAttribute("fy", C), h && !e.g._collapsable && (e.of.setAttribute("fx", x), e.of.setAttribute("fy", C))
              }
            }

            function l(t, e, r) {
              var i = e.style,
                a = e.d;
              a && (a._mdf || r) && a.dashStr && (i.pElem.setAttribute("stroke-dasharray", a.dashStr), i.pElem.setAttribute("stroke-dashoffset", a.dashoffset[0])), e.c && (e.c._mdf || r) && i.pElem.setAttribute("stroke", "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || r) && i.pElem.setAttribute("stroke-opacity", e.o.v), (e.w._mdf || r) && (i.pElem.setAttribute("stroke-width", e.w.v), i.msElem && i.msElem.setAttribute("stroke-width", e.w.v))
            }
            return {
              createRenderFunction: function(t) {
                switch (t.ty) {
                  case "fl":
                    return s;
                  case "gf":
                    return o;
                  case "gs":
                    return n;
                  case "st":
                    return l;
                  case "sh":
                  case "el":
                  case "rc":
                  case "sr":
                    return a;
                  case "tr":
                    return r;
                  case "no":
                    return i;
                  default:
                    return null
                }
              }
            }
          }();

        function SVGShapeElement(t, e, r) {
          this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.initElement(t, e, r), this.prevViewData = []
        }

        function LetterProps(t, e, r, i, a, s) {
          this.o = t, this.sw = e, this.sc = r, this.fc = i, this.m = a, this.p = s, this._mdf = {
            o: !0,
            sw: !!e,
            sc: !!r,
            fc: !!i,
            m: !0,
            p: !0
          }
        }

        function TextProperty(t, e) {
          this._frameId = initialDefaultFrame, this.pv = "", this.v = "", this.kf = !1, this._isFirstFrame = !0, this._mdf = !1, e.d && e.d.sid && (e.d = t.globalData.slotManager.getProp(e.d)), this.data = e, this.elem = t, this.comp = this.elem.comp, this.keysIndex = 0, this.canResize = !1, this.minimumFontSize = 1, this.effectsSequence = [], this.currentData = {
            ascent: 0,
            boxWidth: this.defaultBoxWidth,
            f: "",
            fStyle: "",
            fWeight: "",
            fc: "",
            j: "",
            justifyOffset: "",
            l: [],
            lh: 0,
            lineWidths: [],
            ls: "",
            of: "",
            s: "",
            sc: "",
            sw: 0,
            t: 0,
            tr: 0,
            sz: 0,
            ps: null,
            fillColorAnim: !1,
            strokeColorAnim: !1,
            strokeWidthAnim: !1,
            yOffset: 0,
            finalSize: 0,
            finalText: [],
            finalLineHeight: 0,
            __complete: !1
          }, this.copyData(this.currentData, this.data.d.k[0].s), this.searchProperty() || this.completeTextData(this.currentData)
        }
        extendPrototype([BaseElement, TransformElement, SVGBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableDOMElement], SVGShapeElement), SVGShapeElement.prototype.initSecondaryElement = function() {}, SVGShapeElement.prototype.identityMatrix = new Matrix, SVGShapeElement.prototype.buildExpressionInterface = function() {}, SVGShapeElement.prototype.createContent = function() {
          this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes()
        }, SVGShapeElement.prototype.filterUniqueShapes = function() {
          var t, e, r, i, a = this.shapes.length,
            s = this.stylesList.length,
            n = [],
            o = !1;
          for (r = 0; r < s; r += 1) {
            for (i = this.stylesList[r], o = !1, n.length = 0, t = 0; t < a; t += 1) - 1 !== (e = this.shapes[t]).styles.indexOf(i) && (n.push(e), o = e._isAnimated || o);
            n.length > 1 && o && this.setShapesAsAnimated(n)
          }
        }, SVGShapeElement.prototype.setShapesAsAnimated = function(t) {
          var e, r = t.length;
          for (e = 0; e < r; e += 1) t[e].setAsAnimated()
        }, SVGShapeElement.prototype.createStyleElement = function(t, e) {
          var r, i = new SVGStyleData(t, e),
            a = i.pElem;
          return "st" === t.ty ? r = new SVGStrokeStyleData(this, t, i) : "fl" === t.ty ? r = new SVGFillStyleData(this, t, i) : "gf" === t.ty || "gs" === t.ty ? (r = new("gf" === t.ty ? SVGGradientFillStyleData : SVGGradientStrokeStyleData)(this, t, i), this.globalData.defs.appendChild(r.gf), r.maskId && (this.globalData.defs.appendChild(r.ms), this.globalData.defs.appendChild(r.of), a.setAttribute("mask", "url(" + getLocationHref() + "#" + r.maskId + ")"))) : "no" === t.ty && (r = new SVGNoStyleData(this, t, i)), "st" !== t.ty && "gs" !== t.ty || (a.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]), a.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]), a.setAttribute("fill-opacity", "0"), 1 === t.lj && a.setAttribute("stroke-miterlimit", t.ml)), 2 === t.r && a.setAttribute("fill-rule", "evenodd"), t.ln && a.setAttribute("id", t.ln), t.cl && a.setAttribute("class", t.cl), t.bm && (a.style["mix-blend-mode"] = getBlendMode(t.bm)), this.stylesList.push(i), this.addToAnimatedContents(t, r), r
        }, SVGShapeElement.prototype.createGroupElement = function(t) {
          var e = new ShapeGroupData;
          return t.ln && e.gr.setAttribute("id", t.ln), t.cl && e.gr.setAttribute("class", t.cl), t.bm && (e.gr.style["mix-blend-mode"] = getBlendMode(t.bm)), e
        }, SVGShapeElement.prototype.createTransformElement = function(t, e) {
          var r = TransformPropertyFactory.getTransformProperty(this, t, this),
            i = new SVGTransformData(r, r.o, e);
          return this.addToAnimatedContents(t, i), i
        }, SVGShapeElement.prototype.createShapeElement = function(t, e, r) {
          var i = 4;
          "rc" === t.ty ? i = 5 : "el" === t.ty ? i = 6 : "sr" === t.ty && (i = 7);
          var a = new SVGShapeData(e, r, ShapePropertyFactory.getShapeProp(this, t, i, this));
          return this.shapes.push(a), this.addShapeToModifiers(a), this.addToAnimatedContents(t, a), a
        }, SVGShapeElement.prototype.addToAnimatedContents = function(t, e) {
          for (var r = 0, i = this.animatedContents.length; r < i;) {
            if (this.animatedContents[r].element === e) return;
            r += 1
          }
          this.animatedContents.push({
            fn: SVGElementsRenderer.createRenderFunction(t),
            element: e,
            data: t
          })
        }, SVGShapeElement.prototype.setElementStyles = function(t) {
          var e, r = t.styles,
            i = this.stylesList.length;
          for (e = 0; e < i; e += 1) this.stylesList[e].closed || r.push(this.stylesList[e])
        }, SVGShapeElement.prototype.reloadShapes = function() {
          var t;
          this._isFirstFrame = !0;
          var e = this.itemsData.length;
          for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
          for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes(), e = this.dynamicProperties.length, t = 0; t < e; t += 1) this.dynamicProperties[t].getValue();
          this.renderModifiers()
        }, SVGShapeElement.prototype.searchShapes = function(t, e, r, i, a, s, n) {
          var o, l, h, p, c, f, u = [].concat(s),
            d = t.length - 1,
            m = [],
            y = [];
          for (o = d; o >= 0; o -= 1) {
            if ((f = this.searchProcessedElement(t[o])) ? e[o] = r[f - 1] : t[o]._render = n, "fl" === t[o].ty || "st" === t[o].ty || "gf" === t[o].ty || "gs" === t[o].ty || "no" === t[o].ty) f ? e[o].style.closed = !1 : e[o] = this.createStyleElement(t[o], a), t[o]._render && e[o].style.pElem.parentNode !== i && i.appendChild(e[o].style.pElem), m.push(e[o].style);
            else if ("gr" === t[o].ty) {
              if (f)
                for (h = e[o].it.length, l = 0; l < h; l += 1) e[o].prevViewData[l] = e[o].it[l];
              else e[o] = this.createGroupElement(t[o]);
              this.searchShapes(t[o].it, e[o].it, e[o].prevViewData, e[o].gr, a + 1, u, n), t[o]._render && e[o].gr.parentNode !== i && i.appendChild(e[o].gr)
            } else "tr" === t[o].ty ? (f || (e[o] = this.createTransformElement(t[o], i)), p = e[o].transform, u.push(p)) : "sh" === t[o].ty || "rc" === t[o].ty || "el" === t[o].ty || "sr" === t[o].ty ? (f || (e[o] = this.createShapeElement(t[o], u, a)), this.setElementStyles(e[o])) : "tm" === t[o].ty || "rd" === t[o].ty || "ms" === t[o].ty || "pb" === t[o].ty || "zz" === t[o].ty || "op" === t[o].ty ? (f ? (c = e[o]).closed = !1 : ((c = ShapeModifiers.getModifier(t[o].ty)).init(this, t[o]), e[o] = c, this.shapeModifiers.push(c)), y.push(c)) : "rp" === t[o].ty && (f ? (c = e[o]).closed = !0 : (c = ShapeModifiers.getModifier(t[o].ty), e[o] = c, c.init(this, t, o, e), this.shapeModifiers.push(c), n = !1), y.push(c));
            this.addProcessedElement(t[o], o + 1)
          }
          for (d = m.length, o = 0; o < d; o += 1) m[o].closed = !0;
          for (d = y.length, o = 0; o < d; o += 1) y[o].closed = !0
        }, SVGShapeElement.prototype.renderInnerContent = function() {
          var t;
          this.renderModifiers();
          var e = this.stylesList.length;
          for (t = 0; t < e; t += 1) this.stylesList[t].reset();
          for (this.renderShape(), t = 0; t < e; t += 1)(this.stylesList[t]._mdf || this._isFirstFrame) && (this.stylesList[t].msElem && (this.stylesList[t].msElem.setAttribute("d", this.stylesList[t].d), this.stylesList[t].d = "M0 0" + this.stylesList[t].d), this.stylesList[t].pElem.setAttribute("d", this.stylesList[t].d || "M0 0"))
        }, SVGShapeElement.prototype.renderShape = function() {
          var t, e, r = this.animatedContents.length;
          for (t = 0; t < r; t += 1) e = this.animatedContents[t], (this._isFirstFrame || e.element._isAnimated) && !0 !== e.data && e.fn(e.data, e.element, this._isFirstFrame)
        }, SVGShapeElement.prototype.destroy = function() {
          this.destroyBaseElement(), this.shapesData = null, this.itemsData = null
        }, LetterProps.prototype.update = function(t, e, r, i, a, s) {
          this._mdf.o = !1, this._mdf.sw = !1, this._mdf.sc = !1, this._mdf.fc = !1, this._mdf.m = !1, this._mdf.p = !1;
          var n = !1;
          return this.o !== t && (this.o = t, this._mdf.o = !0, n = !0), this.sw !== e && (this.sw = e, this._mdf.sw = !0, n = !0), this.sc !== r && (this.sc = r, this._mdf.sc = !0, n = !0), this.fc !== i && (this.fc = i, this._mdf.fc = !0, n = !0), this.m !== a && (this.m = a, this._mdf.m = !0, n = !0), !s.length || this.p[0] === s[0] && this.p[1] === s[1] && this.p[4] === s[4] && this.p[5] === s[5] && this.p[12] === s[12] && this.p[13] === s[13] || (this.p = s, this._mdf.p = !0, n = !0), n
        }, TextProperty.prototype.defaultBoxWidth = [0, 0], TextProperty.prototype.copyData = function(t, e) {
          for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
          return t
        }, TextProperty.prototype.setCurrentData = function(t) {
          t.__complete || this.completeTextData(t), this.currentData = t, this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth, this._mdf = !0
        }, TextProperty.prototype.searchProperty = function() {
          return this.searchKeyframes()
        }, TextProperty.prototype.searchKeyframes = function() {
          return this.kf = this.data.d.k.length > 1, this.kf && this.addEffect(this.getKeyframeValue.bind(this)), this.kf
        }, TextProperty.prototype.addEffect = function(t) {
          this.effectsSequence.push(t), this.elem.addDynamicProperty(this)
        }, TextProperty.prototype.getValue = function(t) {
          if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length || t) {
            this.currentData.t = this.data.d.k[this.keysIndex].s.t;
            var e = this.currentData,
              r = this.keysIndex;
            if (this.lock) this.setCurrentData(this.currentData);
            else {
              var i;
              this.lock = !0, this._mdf = !1;
              var a = this.effectsSequence.length,
                s = t || this.data.d.k[this.keysIndex].s;
              for (i = 0; i < a; i += 1) s = r !== this.keysIndex ? this.effectsSequence[i](s, s.t) : this.effectsSequence[i](this.currentData, s.t);
              e !== s && this.setCurrentData(s), this.v = this.currentData, this.pv = this.v, this.lock = !1, this.frameId = this.elem.globalData.frameId
            }
          }
        }, TextProperty.prototype.getKeyframeValue = function() {
          for (var t = this.data.d.k, e = this.elem.comp.renderedFrame, r = 0, i = t.length; r <= i - 1 && !(r === i - 1 || t[r + 1].t > e);) r += 1;
          return this.keysIndex !== r && (this.keysIndex = r), this.data.d.k[this.keysIndex].s
        }, TextProperty.prototype.buildFinalText = function(t) {
          for (var e, r, i = [], a = 0, s = t.length, n = !1, o = !1, l = ""; a < s;) n = o, o = !1, e = t.charCodeAt(a), l = t.charAt(a), FontManager.isCombinedCharacter(e) ? n = !0 : e >= 55296 && e <= 56319 ? FontManager.isRegionalFlag(t, a) ? l = t.substr(a, 14) : (r = t.charCodeAt(a + 1)) >= 56320 && r <= 57343 && (FontManager.isModifier(e, r) ? (l = t.substr(a, 2), n = !0) : l = FontManager.isFlagEmoji(t.substr(a, 4)) ? t.substr(a, 4) : t.substr(a, 2)) : e > 56319 ? (r = t.charCodeAt(a + 1), FontManager.isVariationSelector(e) && (n = !0)) : FontManager.isZeroWidthJoiner(e) && (n = !0, o = !0), n ? (i[i.length - 1] += l, n = !1) : i.push(l), a += l.length;
          return i
        }, TextProperty.prototype.completeTextData = function(t) {
          t.__complete = !0;
          var e, r, i, a, s, n, o, l = this.elem.globalData.fontManager,
            h = this.data,
            p = [],
            c = 0,
            f = h.m.g,
            u = 0,
            d = 0,
            m = 0,
            y = [],
            g = 0,
            v = 0,
            b = l.getFontByName(t.f),
            x = 0,
            C = getFontProperties(b);
          t.fWeight = C.weight, t.fStyle = C.style, t.finalSize = t.s, t.finalText = this.buildFinalText(t.t), r = t.finalText.length, t.finalLineHeight = t.lh;
          var A, _ = t.tr / 1e3 * t.finalSize;
          if (t.sz)
            for (var E, S, P = !0, T = t.sz[0], F = t.sz[1]; P;) {
              E = 0, g = 0, r = (S = this.buildFinalText(t.t)).length, _ = t.tr / 1e3 * t.finalSize;
              var w = -1;
              for (e = 0; e < r; e += 1) A = S[e].charCodeAt(0), i = !1, " " === S[e] ? w = e : 13 !== A && 3 !== A || (g = 0, i = !0, E += t.finalLineHeight || 1.2 * t.finalSize), l.chars ? (o = l.getCharData(S[e], b.fStyle, b.fFamily), x = i ? 0 : o.w * t.finalSize / 100) : x = l.measureText(S[e], t.f, t.finalSize), g + x > T && " " !== S[e] ? (-1 === w ? r += 1 : e = w, E += t.finalLineHeight || 1.2 * t.finalSize, S.splice(e, w === e ? 1 : 0, "\r"), w = -1, g = 0) : (g += x, g += _);
              E += b.ascent * t.finalSize / 100, this.canResize && t.finalSize > this.minimumFontSize && F < E ? (t.finalSize -= 1, t.finalLineHeight = t.finalSize * t.lh / t.s) : (t.finalText = S, r = t.finalText.length, P = !1)
            }
          g = -_, x = 0;
          var M, k = 0;
          for (e = 0; e < r; e += 1)
            if (i = !1, 13 === (A = (M = t.finalText[e]).charCodeAt(0)) || 3 === A ? (k = 0, y.push(g), v = g > v ? g : v, g = -2 * _, a = "", i = !0, m += 1) : a = M, l.chars ? (o = l.getCharData(M, b.fStyle, l.getFontByName(t.f).fFamily), x = i ? 0 : o.w * t.finalSize / 100) : x = l.measureText(a, t.f, t.finalSize), " " === M ? k += x + _ : (g += x + _ + k, k = 0), p.push({
                l: x,
                an: x,
                add: u,
                n: i,
                anIndexes: [],
                val: a,
                line: m,
                animatorJustifyOffset: 0
              }), 2 == f) {
              if (u += x, "" === a || " " === a || e === r - 1) {
                for ("" !== a && " " !== a || (u -= x); d <= e;) p[d].an = u, p[d].ind = c, p[d].extra = x, d += 1;
                c += 1, u = 0
              }
            } else if (3 == f) {
            if (u += x, "" === a || e === r - 1) {
              for ("" === a && (u -= x); d <= e;) p[d].an = u, p[d].ind = c, p[d].extra = x, d += 1;
              u = 0, c += 1
            }
          } else p[c].ind = c, p[c].extra = 0, c += 1;
          if (t.l = p, v = g > v ? g : v, y.push(g), t.sz) t.boxWidth = t.sz[0], t.justifyOffset = 0;
          else switch (t.boxWidth = v, t.j) {
            case 1:
              t.justifyOffset = -t.boxWidth;
              break;
            case 2:
              t.justifyOffset = -t.boxWidth / 2;
              break;
            default:
              t.justifyOffset = 0
          }
          t.lineWidths = y;
          var D, I, V, B, R = h.a;
          n = R.length;
          var L = [];
          for (s = 0; s < n; s += 1) {
            for ((D = R[s]).a.sc && (t.strokeColorAnim = !0), D.a.sw && (t.strokeWidthAnim = !0), (D.a.fc || D.a.fh || D.a.fs || D.a.fb) && (t.fillColorAnim = !0), B = 0, V = D.s.b, e = 0; e < r; e += 1)(I = p[e]).anIndexes[s] = B, (1 == V && "" !== I.val || 2 == V && "" !== I.val && " " !== I.val || 3 == V && (I.n || " " == I.val || e == r - 1) || 4 == V && (I.n || e == r - 1)) && (1 === D.s.rn && L.push(B), B += 1);
            h.a[s].s.totalChars = B;
            var G, O = -1;
            if (1 === D.s.rn)
              for (e = 0; e < r; e += 1) O != (I = p[e]).anIndexes[s] && (O = I.anIndexes[s], G = L.splice(Math.floor(Math.random() * L.length), 1)[0]), I.anIndexes[s] = G
          }
          t.yOffset = t.finalLineHeight || 1.2 * t.finalSize, t.ls = t.ls || 0, t.ascent = b.ascent * t.finalSize / 100
        }, TextProperty.prototype.updateDocumentData = function(t, e) {
          e = void 0 === e ? this.keysIndex : e;
          var r = this.copyData({}, this.data.d.k[e].s);
          r = this.copyData(r, t), this.data.d.k[e].s = r, this.recalculate(e), this.setCurrentData(r), this.elem.addDynamicProperty(this)
        }, TextProperty.prototype.recalculate = function(t) {
          var e = this.data.d.k[t].s;
          e.__complete = !1, this.keysIndex = 0, this._isFirstFrame = !0, this.getValue(e)
        }, TextProperty.prototype.canResizeFont = function(t) {
          this.canResize = t, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
        }, TextProperty.prototype.setMinimumFontSize = function(t) {
          this.minimumFontSize = Math.floor(t) || 1, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
        };
        var TextSelectorProp = function() {
          var t = Math.max,
            e = Math.min,
            r = Math.floor;

          function i(t, e) {
            this._currentTextLength = -1, this.k = !1, this.data = e, this.elem = t, this.comp = t.comp, this.finalS = 0, this.finalE = 0, this.initDynamicPropertyContainer(t), this.s = PropertyFactory.getProp(t, e.s || {
              k: 0
            }, 0, 0, this), this.e = "e" in e ? PropertyFactory.getProp(t, e.e, 0, 0, this) : {
              v: 100
            }, this.o = PropertyFactory.getProp(t, e.o || {
              k: 0
            }, 0, 0, this), this.xe = PropertyFactory.getProp(t, e.xe || {
              k: 0
            }, 0, 0, this), this.ne = PropertyFactory.getProp(t, e.ne || {
              k: 0
            }, 0, 0, this), this.sm = PropertyFactory.getProp(t, e.sm || {
              k: 100
            }, 0, 0, this), this.a = PropertyFactory.getProp(t, e.a, 0, .01, this), this.dynamicProperties.length || this.getValue()
          }
          return i.prototype = {
            getMult: function(i) {
              this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
              var a = 0,
                s = 0,
                n = 1,
                o = 1;
              this.ne.v > 0 ? a = this.ne.v / 100 : s = -this.ne.v / 100, this.xe.v > 0 ? n = 1 - this.xe.v / 100 : o = 1 + this.xe.v / 100;
              var l = BezierFactory.getBezierEasing(a, s, n, o).get,
                h = 0,
                p = this.finalS,
                c = this.finalE,
                f = this.data.sh;
              if (2 === f) h = l(h = c === p ? i >= c ? 1 : 0 : t(0, e(.5 / (c - p) + (i - p) / (c - p), 1)));
              else if (3 === f) h = l(h = c === p ? i >= c ? 0 : 1 : 1 - t(0, e(.5 / (c - p) + (i - p) / (c - p), 1)));
              else if (4 === f) c === p ? h = 0 : (h = t(0, e(.5 / (c - p) + (i - p) / (c - p), 1))) < .5 ? h *= 2 : h = 1 - 2 * (h - .5), h = l(h);
              else if (5 === f) {
                if (c === p) h = 0;
                else {
                  var u = c - p,
                    d = -u / 2 + (i = e(t(0, i + .5 - p), c - p)),
                    m = u / 2;
                  h = Math.sqrt(1 - d * d / (m * m))
                }
                h = l(h)
              } else 6 === f ? (c === p ? h = 0 : (i = e(t(0, i + .5 - p), c - p), h = (1 + Math.cos(Math.PI + 2 * Math.PI * i / (c - p))) / 2), h = l(h)) : (i >= r(p) && (h = t(0, e(i - p < 0 ? e(c, 1) - (p - i) : c - i, 1))), h = l(h));
              if (100 !== this.sm.v) {
                var y = .01 * this.sm.v;
                0 === y && (y = 1e-8);
                var g = .5 - .5 * y;
                h < g ? h = 0 : (h = (h - g) / y) > 1 && (h = 1)
              }
              return h * this.a.v
            },
            getValue: function(t) {
              this.iterateDynamicProperties(), this._mdf = t || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, t && 2 === this.data.r && (this.e.v = this._currentTextLength);
              var e = 2 === this.data.r ? 1 : 100 / this.data.totalChars,
                r = this.o.v / e,
                i = this.s.v / e + r,
                a = this.e.v / e + r;
              if (i > a) {
                var s = i;
                i = a, a = s
              }
              this.finalS = i, this.finalE = a
            }
          }, extendPrototype([DynamicPropertyContainer], i), {
            getTextSelectorProp: function(t, e, r) {
              return new i(t, e, r)
            }
          }
        }();

        function TextAnimatorDataProperty(t, e, r) {
          var i = {
              propType: !1
            },
            a = PropertyFactory.getProp,
            s = e.a;
          this.a = {
            r: s.r ? a(t, s.r, 0, degToRads, r) : i,
            rx: s.rx ? a(t, s.rx, 0, degToRads, r) : i,
            ry: s.ry ? a(t, s.ry, 0, degToRads, r) : i,
            sk: s.sk ? a(t, s.sk, 0, degToRads, r) : i,
            sa: s.sa ? a(t, s.sa, 0, degToRads, r) : i,
            s: s.s ? a(t, s.s, 1, .01, r) : i,
            a: s.a ? a(t, s.a, 1, 0, r) : i,
            o: s.o ? a(t, s.o, 0, .01, r) : i,
            p: s.p ? a(t, s.p, 1, 0, r) : i,
            sw: s.sw ? a(t, s.sw, 0, 0, r) : i,
            sc: s.sc ? a(t, s.sc, 1, 0, r) : i,
            fc: s.fc ? a(t, s.fc, 1, 0, r) : i,
            fh: s.fh ? a(t, s.fh, 0, 0, r) : i,
            fs: s.fs ? a(t, s.fs, 0, .01, r) : i,
            fb: s.fb ? a(t, s.fb, 0, .01, r) : i,
            t: s.t ? a(t, s.t, 0, 0, r) : i
          }, this.s = TextSelectorProp.getTextSelectorProp(t, e.s, r), this.s.t = e.s.t
        }

        function TextAnimatorProperty(t, e, r) {
          this._isFirstFrame = !0, this._hasMaskedPath = !1, this._frameId = -1, this._textData = t, this._renderType = e, this._elem = r, this._animatorsData = createSizedArray(this._textData.a.length), this._pathData = {}, this._moreOptions = {
            alignment: {}
          }, this.renderedLetters = [], this.lettersChangedFlag = !1, this.initDynamicPropertyContainer(r)
        }

        function ITextElement() {}
        TextAnimatorProperty.prototype.searchProperties = function() {
          var t, e, r = this._textData.a.length,
            i = PropertyFactory.getProp;
          for (t = 0; t < r; t += 1) e = this._textData.a[t], this._animatorsData[t] = new TextAnimatorDataProperty(this._elem, e, this);
          this._textData.p && "m" in this._textData.p ? (this._pathData = {
            a: i(this._elem, this._textData.p.a, 0, 0, this),
            f: i(this._elem, this._textData.p.f, 0, 0, this),
            l: i(this._elem, this._textData.p.l, 0, 0, this),
            r: i(this._elem, this._textData.p.r, 0, 0, this),
            p: i(this._elem, this._textData.p.p, 0, 0, this),
            m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
          }, this._hasMaskedPath = !0) : this._hasMaskedPath = !1, this._moreOptions.alignment = i(this._elem, this._textData.m.a, 1, 0, this)
        }, TextAnimatorProperty.prototype.getMeasures = function(t, e) {
          if (this.lettersChangedFlag = e, this._mdf || this._isFirstFrame || e || this._hasMaskedPath && this._pathData.m._mdf) {
            this._isFirstFrame = !1;
            var r, i, a, s, n, o, l, h, p, c, f, u, d, m, y, g, v, b, x, C = this._moreOptions.alignment.v,
              A = this._animatorsData,
              _ = this._textData,
              E = this.mHelper,
              S = this._renderType,
              P = this.renderedLetters.length,
              T = t.l;
            if (this._hasMaskedPath) {
              if (x = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
                var F, w = x.v;
                for (this._pathData.r.v && (w = w.reverse()), n = {
                    tLength: 0,
                    segments: []
                  }, s = w._length - 1, g = 0, a = 0; a < s; a += 1) F = bez.buildBezierData(w.v[a], w.v[a + 1], [w.o[a][0] - w.v[a][0], w.o[a][1] - w.v[a][1]], [w.i[a + 1][0] - w.v[a + 1][0], w.i[a + 1][1] - w.v[a + 1][1]]), n.tLength += F.segmentLength, n.segments.push(F), g += F.segmentLength;
                a = s, x.v.c && (F = bez.buildBezierData(w.v[a], w.v[0], [w.o[a][0] - w.v[a][0], w.o[a][1] - w.v[a][1]], [w.i[0][0] - w.v[0][0], w.i[0][1] - w.v[0][1]]), n.tLength += F.segmentLength, n.segments.push(F), g += F.segmentLength), this._pathData.pi = n
              }
              if (n = this._pathData.pi, o = this._pathData.f.v, f = 0, c = 1, h = 0, p = !0, m = n.segments, o < 0 && x.v.c)
                for (n.tLength < Math.abs(o) && (o = -Math.abs(o) % n.tLength), c = (d = m[f = m.length - 1].points).length - 1; o < 0;) o += d[c].partialLength, (c -= 1) < 0 && (c = (d = m[f -= 1].points).length - 1);
              u = (d = m[f].points)[c - 1], y = (l = d[c]).partialLength
            }
            s = T.length, r = 0, i = 0;
            var M, k, D, I, V, B = 1.2 * t.finalSize * .714,
              R = !0;
            D = A.length;
            var L, G, O, z, N, j, H, q, W, $, U, Y, X = -1,
              J = o,
              K = f,
              Z = c,
              Q = -1,
              tt = "",
              et = this.defaultPropsArray;
            if (2 === t.j || 1 === t.j) {
              var rt = 0,
                it = 0,
                at = 2 === t.j ? -.5 : -1,
                st = 0,
                nt = !0;
              for (a = 0; a < s; a += 1)
                if (T[a].n) {
                  for (rt && (rt += it); st < a;) T[st].animatorJustifyOffset = rt, st += 1;
                  rt = 0, nt = !0
                } else {
                  for (k = 0; k < D; k += 1)(M = A[k].a).t.propType && (nt && 2 === t.j && (it += M.t.v * at), (V = A[k].s.getMult(T[a].anIndexes[k], _.a[k].s.totalChars)).length ? rt += M.t.v * V[0] * at : rt += M.t.v * V * at);
                  nt = !1
                } for (rt && (rt += it); st < a;) T[st].animatorJustifyOffset = rt, st += 1
            }
            for (a = 0; a < s; a += 1) {
              if (E.reset(), z = 1, T[a].n) r = 0, i += t.yOffset, i += R ? 1 : 0, o = J, R = !1, this._hasMaskedPath && (c = Z, u = (d = m[f = K].points)[c - 1], y = (l = d[c]).partialLength, h = 0), tt = "", U = "", W = "", Y = "", et = this.defaultPropsArray;
              else {
                if (this._hasMaskedPath) {
                  if (Q !== T[a].line) {
                    switch (t.j) {
                      case 1:
                        o += g - t.lineWidths[T[a].line];
                        break;
                      case 2:
                        o += (g - t.lineWidths[T[a].line]) / 2
                    }
                    Q = T[a].line
                  }
                  X !== T[a].ind && (T[X] && (o += T[X].extra), o += T[a].an / 2, X = T[a].ind), o += C[0] * T[a].an * .005;
                  var ot = 0;
                  for (k = 0; k < D; k += 1)(M = A[k].a).p.propType && ((V = A[k].s.getMult(T[a].anIndexes[k], _.a[k].s.totalChars)).length ? ot += M.p.v[0] * V[0] : ot += M.p.v[0] * V), M.a.propType && ((V = A[k].s.getMult(T[a].anIndexes[k], _.a[k].s.totalChars)).length ? ot += M.a.v[0] * V[0] : ot += M.a.v[0] * V);
                  for (p = !0, this._pathData.a.v && (o = .5 * T[0].an + (g - this._pathData.f.v - .5 * T[0].an - .5 * T[T.length - 1].an) * X / (s - 1), o += this._pathData.f.v); p;) h + y >= o + ot || !d ? (v = (o + ot - h) / l.partialLength, G = u.point[0] + (l.point[0] - u.point[0]) * v, O = u.point[1] + (l.point[1] - u.point[1]) * v, E.translate(-C[0] * T[a].an * .005, -C[1] * B * .01), p = !1) : d && (h += l.partialLength, (c += 1) >= d.length && (c = 0, m[f += 1] ? d = m[f].points : x.v.c ? (c = 0, d = m[f = 0].points) : (h -= l.partialLength, d = null)), d && (u = l, y = (l = d[c]).partialLength));
                  L = T[a].an / 2 - T[a].add, E.translate(-L, 0, 0)
                } else L = T[a].an / 2 - T[a].add, E.translate(-L, 0, 0), E.translate(-C[0] * T[a].an * .005, -C[1] * B * .01, 0);
                for (k = 0; k < D; k += 1)(M = A[k].a).t.propType && (V = A[k].s.getMult(T[a].anIndexes[k], _.a[k].s.totalChars), 0 === r && 0 === t.j || (this._hasMaskedPath ? V.length ? o += M.t.v * V[0] : o += M.t.v * V : V.length ? r += M.t.v * V[0] : r += M.t.v * V));
                for (t.strokeWidthAnim && (j = t.sw || 0), t.strokeColorAnim && (N = t.sc ? [t.sc[0], t.sc[1], t.sc[2]] : [0, 0, 0]), t.fillColorAnim && t.fc && (H = [t.fc[0], t.fc[1], t.fc[2]]), k = 0; k < D; k += 1)(M = A[k].a).a.propType && ((V = A[k].s.getMult(T[a].anIndexes[k], _.a[k].s.totalChars)).length ? E.translate(-M.a.v[0] * V[0], -M.a.v[1] * V[1], M.a.v[2] * V[2]) : E.translate(-M.a.v[0] * V, -M.a.v[1] * V, M.a.v[2] * V));
                for (k = 0; k < D; k += 1)(M = A[k].a).s.propType && ((V = A[k].s.getMult(T[a].anIndexes[k], _.a[k].s.totalChars)).length ? E.scale(1 + (M.s.v[0] - 1) * V[0], 1 + (M.s.v[1] - 1) * V[1], 1) : E.scale(1 + (M.s.v[0] - 1) * V, 1 + (M.s.v[1] - 1) * V, 1));
                for (k = 0; k < D; k += 1) {
                  if (M = A[k].a, V = A[k].s.getMult(T[a].anIndexes[k], _.a[k].s.totalChars), M.sk.propType && (V.length ? E.skewFromAxis(-M.sk.v * V[0], M.sa.v * V[1]) : E.skewFromAxis(-M.sk.v * V, M.sa.v * V)), M.r.propType && (V.length ? E.rotateZ(-M.r.v * V[2]) : E.rotateZ(-M.r.v * V)), M.ry.propType && (V.length ? E.rotateY(M.ry.v * V[1]) : E.rotateY(M.ry.v * V)), M.rx.propType && (V.length ? E.rotateX(M.rx.v * V[0]) : E.rotateX(M.rx.v * V)), M.o.propType && (V.length ? z += (M.o.v * V[0] - z) * V[0] : z += (M.o.v * V - z) * V), t.strokeWidthAnim && M.sw.propType && (V.length ? j += M.sw.v * V[0] : j += M.sw.v * V), t.strokeColorAnim && M.sc.propType)
                    for (q = 0; q < 3; q += 1) V.length ? N[q] += (M.sc.v[q] - N[q]) * V[0] : N[q] += (M.sc.v[q] - N[q]) * V;
                  if (t.fillColorAnim && t.fc) {
                    if (M.fc.propType)
                      for (q = 0; q < 3; q += 1) V.length ? H[q] += (M.fc.v[q] - H[q]) * V[0] : H[q] += (M.fc.v[q] - H[q]) * V;
                    M.fh.propType && (H = V.length ? addHueToRGB(H, M.fh.v * V[0]) : addHueToRGB(H, M.fh.v * V)), M.fs.propType && (H = V.length ? addSaturationToRGB(H, M.fs.v * V[0]) : addSaturationToRGB(H, M.fs.v * V)), M.fb.propType && (H = V.length ? addBrightnessToRGB(H, M.fb.v * V[0]) : addBrightnessToRGB(H, M.fb.v * V))
                  }
                }
                for (k = 0; k < D; k += 1)(M = A[k].a).p.propType && (V = A[k].s.getMult(T[a].anIndexes[k], _.a[k].s.totalChars), this._hasMaskedPath ? V.length ? E.translate(0, M.p.v[1] * V[0], -M.p.v[2] * V[1]) : E.translate(0, M.p.v[1] * V, -M.p.v[2] * V) : V.length ? E.translate(M.p.v[0] * V[0], M.p.v[1] * V[1], -M.p.v[2] * V[2]) : E.translate(M.p.v[0] * V, M.p.v[1] * V, -M.p.v[2] * V));
                if (t.strokeWidthAnim && (W = j < 0 ? 0 : j), t.strokeColorAnim && ($ = "rgb(" + Math.round(255 * N[0]) + "," + Math.round(255 * N[1]) + "," + Math.round(255 * N[2]) + ")"), t.fillColorAnim && t.fc && (U = "rgb(" + Math.round(255 * H[0]) + "," + Math.round(255 * H[1]) + "," + Math.round(255 * H[2]) + ")"), this._hasMaskedPath) {
                  if (E.translate(0, -t.ls), E.translate(0, C[1] * B * .01 + i, 0), this._pathData.p.v) {
                    b = (l.point[1] - u.point[1]) / (l.point[0] - u.point[0]);
                    var lt = 180 * Math.atan(b) / Math.PI;
                    l.point[0] < u.point[0] && (lt += 180), E.rotate(-lt * Math.PI / 180)
                  }
                  E.translate(G, O, 0), o -= C[0] * T[a].an * .005, T[a + 1] && X !== T[a + 1].ind && (o += T[a].an / 2, o += .001 * t.tr * t.finalSize)
                } else {
                  switch (E.translate(r, i, 0), t.ps && E.translate(t.ps[0], t.ps[1] + t.ascent, 0), t.j) {
                    case 1:
                      E.translate(T[a].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[T[a].line]), 0, 0);
                      break;
                    case 2:
                      E.translate(T[a].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[T[a].line]) / 2, 0, 0)
                  }
                  E.translate(0, -t.ls), E.translate(L, 0, 0), E.translate(C[0] * T[a].an * .005, C[1] * B * .01, 0), r += T[a].l + .001 * t.tr * t.finalSize
                }
                "html" === S ? tt = E.toCSS() : "svg" === S ? tt = E.to2dCSS() : et = [E.props[0], E.props[1], E.props[2], E.props[3], E.props[4], E.props[5], E.props[6], E.props[7], E.props[8], E.props[9], E.props[10], E.props[11], E.props[12], E.props[13], E.props[14], E.props[15]], Y = z
              }
              P <= a ? (I = new LetterProps(Y, W, $, U, tt, et), this.renderedLetters.push(I), P += 1, this.lettersChangedFlag = !0) : (I = this.renderedLetters[a], this.lettersChangedFlag = I.update(Y, W, $, U, tt, et) || this.lettersChangedFlag)
            }
          }
        }, TextAnimatorProperty.prototype.getValue = function() {
          this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties())
        }, TextAnimatorProperty.prototype.mHelper = new Matrix, TextAnimatorProperty.prototype.defaultPropsArray = [], extendPrototype([DynamicPropertyContainer], TextAnimatorProperty), ITextElement.prototype.initElement = function(t, e, r) {
          this.lettersChangedFlag = !0, this.initFrame(), this.initBaseData(t, e, r), this.textProperty = new TextProperty(this, t.t, this.dynamicProperties), this.textAnimator = new TextAnimatorProperty(t.t, this.renderType, this), this.initTransform(t, e, r), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties)
        }, ITextElement.prototype.prepareFrame = function(t) {
          this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange)
        }, ITextElement.prototype.createPathShape = function(t, e) {
          var r, i, a = e.length,
            s = "";
          for (r = 0; r < a; r += 1) "sh" === e[r].ty && (i = e[r].ks.k, s += buildShapeString(i, i.i.length, !0, t));
          return s
        }, ITextElement.prototype.updateDocumentData = function(t, e) {
          this.textProperty.updateDocumentData(t, e)
        }, ITextElement.prototype.canResizeFont = function(t) {
          this.textProperty.canResizeFont(t)
        }, ITextElement.prototype.setMinimumFontSize = function(t) {
          this.textProperty.setMinimumFontSize(t)
        }, ITextElement.prototype.applyTextPropertiesToMatrix = function(t, e, r, i, a) {
          switch (t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0), e.translate(0, -t.ls, 0), t.j) {
            case 1:
              e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[r]), 0, 0);
              break;
            case 2:
              e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[r]) / 2, 0, 0)
          }
          e.translate(i, a, 0)
        }, ITextElement.prototype.buildColor = function(t) {
          return "rgb(" + Math.round(255 * t[0]) + "," + Math.round(255 * t[1]) + "," + Math.round(255 * t[2]) + ")"
        }, ITextElement.prototype.emptyProp = new LetterProps, ITextElement.prototype.destroy = function() {}, ITextElement.prototype.validateText = function() {
          (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), this.textProperty._isFirstFrame = !1, this.textProperty._mdf = !1)
        };
        var emptyShapeData = {
          shapes: []
        };

        function SVGTextLottieElement(t, e, r) {
          this.textSpans = [], this.renderType = "svg", this.initElement(t, e, r)
        }

        function ISolidElement(t, e, r) {
          this.initElement(t, e, r)
        }

        function NullElement(t, e, r) {
          this.initFrame(), this.initBaseData(t, e, r), this.initFrame(), this.initTransform(t, e, r), this.initHierarchy()
        }

        function SVGRendererBase() {}

        function ICompElement() {}

        function SVGCompElement(t, e, r) {
          this.layers = t.layers, this.supports3d = !0, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t, e, r), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
            _placeholder: !0
          }
        }

        function SVGRenderer(t, e) {
          this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.svgElement = createNS("svg");
          var r = "";
          if (e && e.title) {
            var i = createNS("title"),
              a = createElementID();
            i.setAttribute("id", a), i.textContent = e.title, this.svgElement.appendChild(i), r += a
          }
          if (e && e.description) {
            var s = createNS("desc"),
              n = createElementID();
            s.setAttribute("id", n), s.textContent = e.description, this.svgElement.appendChild(s), r += " " + n
          }
          r && this.svgElement.setAttribute("aria-labelledby", r);
          var o = createNS("defs");
          this.svgElement.appendChild(o);
          var l = createNS("g");
          this.svgElement.appendChild(l), this.layerElement = l, this.renderConfig = {
            preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
            imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
            contentVisibility: e && e.contentVisibility || "visible",
            progressiveLoad: e && e.progressiveLoad || !1,
            hideOnTransparent: !(e && !1 === e.hideOnTransparent),
            viewBoxOnly: e && e.viewBoxOnly || !1,
            viewBoxSize: e && e.viewBoxSize || !1,
            className: e && e.className || "",
            id: e && e.id || "",
            focusable: e && e.focusable,
            filterSize: {
              width: e && e.filterSize && e.filterSize.width || "100%",
              height: e && e.filterSize && e.filterSize.height || "100%",
              x: e && e.filterSize && e.filterSize.x || "0%",
              y: e && e.filterSize && e.filterSize.y || "0%"
            },
            width: e && e.width,
            height: e && e.height,
            runExpressions: !e || void 0 === e.runExpressions || e.runExpressions
          }, this.globalData = {
            _mdf: !1,
            frameNum: -1,
            defs: o,
            renderConfig: this.renderConfig
          }, this.elements = [], this.pendingElements = [], this.destroyed = !1, this.rendererType = "svg"
        }

        function ShapeTransformManager() {
          this.sequences = {}, this.sequenceList = [], this.transform_key_count = 0
        }
        extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], SVGTextLottieElement), SVGTextLottieElement.prototype.createContent = function() {
          this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = createNS("text"))
        }, SVGTextLottieElement.prototype.buildTextContents = function(t) {
          for (var e = 0, r = t.length, i = [], a = ""; e < r;) t[e] === String.fromCharCode(13) || t[e] === String.fromCharCode(3) ? (i.push(a), a = "") : a += t[e], e += 1;
          return i.push(a), i
        }, SVGTextLottieElement.prototype.buildShapeData = function(t, e) {
          if (t.shapes && t.shapes.length) {
            var r = t.shapes[0];
            if (r.it) {
              var i = r.it[r.it.length - 1];
              i.s && (i.s.k[0] = e, i.s.k[1] = e)
            }
          }
          return t
        }, SVGTextLottieElement.prototype.buildNewText = function() {
          var t, e;
          this.addDynamicProperty(this);
          var r = this.textProperty.currentData;
          this.renderedLetters = createSizedArray(r ? r.l.length : 0), r.fc ? this.layerElement.setAttribute("fill", this.buildColor(r.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"), r.sc && (this.layerElement.setAttribute("stroke", this.buildColor(r.sc)), this.layerElement.setAttribute("stroke-width", r.sw)), this.layerElement.setAttribute("font-size", r.finalSize);
          var i = this.globalData.fontManager.getFontByName(r.f);
          if (i.fClass) this.layerElement.setAttribute("class", i.fClass);
          else {
            this.layerElement.setAttribute("font-family", i.fFamily);
            var a = r.fWeight,
              s = r.fStyle;
            this.layerElement.setAttribute("font-style", s), this.layerElement.setAttribute("font-weight", a)
          }
          this.layerElement.setAttribute("aria-label", r.t);
          var n, o = r.l || [],
            l = !!this.globalData.fontManager.chars;
          e = o.length;
          var h = this.mHelper,
            p = this.data.singleShape,
            c = 0,
            f = 0,
            u = !0,
            d = .001 * r.tr * r.finalSize;
          if (!p || l || r.sz) {
            var m, y = this.textSpans.length;
            for (t = 0; t < e; t += 1) {
              if (this.textSpans[t] || (this.textSpans[t] = {
                  span: null,
                  childSpan: null,
                  glyph: null
                }), !l || !p || 0 === t) {
                if (n = y > t ? this.textSpans[t].span : createNS(l ? "g" : "text"), y <= t) {
                  if (n.setAttribute("stroke-linecap", "butt"), n.setAttribute("stroke-linejoin", "round"), n.setAttribute("stroke-miterlimit", "4"), this.textSpans[t].span = n, l) {
                    var g = createNS("g");
                    n.appendChild(g), this.textSpans[t].childSpan = g
                  }
                  this.textSpans[t].span = n, this.layerElement.appendChild(n)
                }
                n.style.display = "inherit"
              }
              if (h.reset(), p && (o[t].n && (c = -d, f += r.yOffset, f += u ? 1 : 0, u = !1), this.applyTextPropertiesToMatrix(r, h, o[t].line, c, f), c += o[t].l || 0, c += d), l) {
                var v;
                if (1 === (m = this.globalData.fontManager.getCharData(r.finalText[t], i.fStyle, this.globalData.fontManager.getFontByName(r.f).fFamily)).t) v = new SVGCompElement(m.data, this.globalData, this);
                else {
                  var b = emptyShapeData;
                  m.data && m.data.shapes && (b = this.buildShapeData(m.data, r.finalSize)), v = new SVGShapeElement(b, this.globalData, this)
                }
                if (this.textSpans[t].glyph) {
                  var x = this.textSpans[t].glyph;
                  this.textSpans[t].childSpan.removeChild(x.layerElement), x.destroy()
                }
                this.textSpans[t].glyph = v, v._debug = !0, v.prepareFrame(0), v.renderFrame(), this.textSpans[t].childSpan.appendChild(v.layerElement), 1 === m.t && this.textSpans[t].childSpan.setAttribute("transform", "scale(" + r.finalSize / 100 + "," + r.finalSize / 100 + ")")
              } else p && n.setAttribute("transform", "translate(" + h.props[12] + "," + h.props[13] + ")"), n.textContent = o[t].val, n.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve")
            }
            p && n && n.setAttribute("d", "")
          } else {
            var C = this.textContainer,
              A = "start";
            switch (r.j) {
              case 1:
                A = "end";
                break;
              case 2:
                A = "middle";
                break;
              default:
                A = "start"
            }
            C.setAttribute("text-anchor", A), C.setAttribute("letter-spacing", d);
            var _ = this.buildTextContents(r.finalText);
            for (e = _.length, f = r.ps ? r.ps[1] + r.ascent : 0, t = 0; t < e; t += 1)(n = this.textSpans[t].span || createNS("tspan")).textContent = _[t], n.setAttribute("x", 0), n.setAttribute("y", f), n.style.display = "inherit", C.appendChild(n), this.textSpans[t] || (this.textSpans[t] = {
              span: null,
              glyph: null
            }), this.textSpans[t].span = n, f += r.finalLineHeight;
            this.layerElement.appendChild(C)
          }
          for (; t < this.textSpans.length;) this.textSpans[t].span.style.display = "none", t += 1;
          this._sizeChanged = !0
        }, SVGTextLottieElement.prototype.sourceRectAtTime = function() {
          if (this.prepareFrame(this.comp.renderedFrame - this.data.st), this.renderInnerContent(), this._sizeChanged) {
            this._sizeChanged = !1;
            var t = this.layerElement.getBBox();
            this.bbox = {
              top: t.y,
              left: t.x,
              width: t.width,
              height: t.height
            }
          }
          return this.bbox
        }, SVGTextLottieElement.prototype.getValue = function() {
          var t, e, r = this.textSpans.length;
          for (this.renderedFrame = this.comp.renderedFrame, t = 0; t < r; t += 1)(e = this.textSpans[t].glyph) && (e.prepareFrame(this.comp.renderedFrame - this.data.st), e._mdf && (this._mdf = !0))
        }, SVGTextLottieElement.prototype.renderInnerContent = function() {
          if (this.validateText(), (!this.data.singleShape || this._mdf) && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
            var t, e;
            this._sizeChanged = !0;
            var r, i, a, s = this.textAnimator.renderedLetters,
              n = this.textProperty.currentData.l;
            for (e = n.length, t = 0; t < e; t += 1) n[t].n || (r = s[t], i = this.textSpans[t].span, (a = this.textSpans[t].glyph) && a.renderFrame(), r._mdf.m && i.setAttribute("transform", r.m), r._mdf.o && i.setAttribute("opacity", r.o), r._mdf.sw && i.setAttribute("stroke-width", r.sw), r._mdf.sc && i.setAttribute("stroke", r.sc), r._mdf.fc && i.setAttribute("fill", r.fc))
          }
        }, extendPrototype([IImageElement], ISolidElement), ISolidElement.prototype.createContent = function() {
          var t = createNS("rect");
          t.setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.layerElement.appendChild(t)
        }, NullElement.prototype.prepareFrame = function(t) {
          this.prepareProperties(t, !0)
        }, NullElement.prototype.renderFrame = function() {}, NullElement.prototype.getBaseElement = function() {
          return null
        }, NullElement.prototype.destroy = function() {}, NullElement.prototype.sourceRectAtTime = function() {}, NullElement.prototype.hide = function() {}, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement], NullElement), extendPrototype([BaseRenderer], SVGRendererBase), SVGRendererBase.prototype.createNull = function(t) {
          return new NullElement(t, this.globalData, this)
        }, SVGRendererBase.prototype.createShape = function(t) {
          return new SVGShapeElement(t, this.globalData, this)
        }, SVGRendererBase.prototype.createText = function(t) {
          return new SVGTextLottieElement(t, this.globalData, this)
        }, SVGRendererBase.prototype.createImage = function(t) {
          return new IImageElement(t, this.globalData, this)
        }, SVGRendererBase.prototype.createSolid = function(t) {
          return new ISolidElement(t, this.globalData, this)
        }, SVGRendererBase.prototype.configAnimation = function(t) {
          this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.svgElement.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"), this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + t.w + " " + t.h), this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", t.w), this.svgElement.setAttribute("height", t.h), this.svgElement.style.width = "100%", this.svgElement.style.height = "100%", this.svgElement.style.transform = "translate3d(0,0,0)", this.svgElement.style.contentVisibility = this.renderConfig.contentVisibility), this.renderConfig.width && this.svgElement.setAttribute("width", this.renderConfig.width), this.renderConfig.height && this.svgElement.setAttribute("height", this.renderConfig.height), this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.svgElement.setAttribute("id", this.renderConfig.id), void 0 !== this.renderConfig.focusable && this.svgElement.setAttribute("focusable", this.renderConfig.focusable), this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio), this.animationItem.wrapper.appendChild(this.svgElement);
          var e = this.globalData.defs;
          this.setupGlobalData(t, e), this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.data = t;
          var r = createNS("clipPath"),
            i = createNS("rect");
          i.setAttribute("width", t.w), i.setAttribute("height", t.h), i.setAttribute("x", 0), i.setAttribute("y", 0);
          var a = createElementID();
          r.setAttribute("id", a), r.appendChild(i), this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + a + ")"), e.appendChild(r), this.layers = t.layers, this.elements = createSizedArray(t.layers.length)
        }, SVGRendererBase.prototype.destroy = function() {
          var t;
          this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.layerElement = null, this.globalData.defs = null;
          var e = this.layers ? this.layers.length : 0;
          for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy && this.elements[t].destroy();
          this.elements.length = 0, this.destroyed = !0, this.animationItem = null
        }, SVGRendererBase.prototype.updateContainerSize = function() {}, SVGRendererBase.prototype.findIndexByInd = function(t) {
          var e = 0,
            r = this.layers.length;
          for (e = 0; e < r; e += 1)
            if (this.layers[e].ind === t) return e;
          return -1
        }, SVGRendererBase.prototype.buildItem = function(t) {
          var e = this.elements;
          if (!e[t] && 99 !== this.layers[t].ty) {
            e[t] = !0;
            var r = this.createItem(this.layers[t]);
            if (e[t] = r, getExpressionsPlugin() && (0 === this.layers[t].ty && this.globalData.projectInterface.registerComposition(r), r.initExpressions()), this.appendElementInPos(r, t), this.layers[t].tt) {
              var i = "tp" in this.layers[t] ? this.findIndexByInd(this.layers[t].tp) : t - 1;
              if (-1 === i) return;
              if (this.elements[i] && !0 !== this.elements[i]) {
                var a = e[i].getMatte(this.layers[t].tt);
                r.setMatte(a)
              } else this.buildItem(i), this.addPendingElement(r)
            }
          }
        }, SVGRendererBase.prototype.checkPendingElements = function() {
          for (; this.pendingElements.length;) {
            var t = this.pendingElements.pop();
            if (t.checkParenting(), t.data.tt)
              for (var e = 0, r = this.elements.length; e < r;) {
                if (this.elements[e] === t) {
                  var i = "tp" in t.data ? this.findIndexByInd(t.data.tp) : e - 1,
                    a = this.elements[i].getMatte(this.layers[e].tt);
                  t.setMatte(a);
                  break
                }
                e += 1
              }
          }
        }, SVGRendererBase.prototype.renderFrame = function(t) {
          if (this.renderedFrame !== t && !this.destroyed) {
            var e;
            null === t ? t = this.renderedFrame : this.renderedFrame = t, this.globalData.frameNum = t, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = t, this.globalData._mdf = !1;
            var r = this.layers.length;
            for (this.completeLayers || this.checkLayers(t), e = r - 1; e >= 0; e -= 1)(this.completeLayers || this.elements[e]) && this.elements[e].prepareFrame(t - this.layers[e].st);
            if (this.globalData._mdf)
              for (e = 0; e < r; e += 1)(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame()
          }
        }, SVGRendererBase.prototype.appendElementInPos = function(t, e) {
          var r = t.getBaseElement();
          if (r) {
            for (var i, a = 0; a < e;) this.elements[a] && !0 !== this.elements[a] && this.elements[a].getBaseElement() && (i = this.elements[a].getBaseElement()), a += 1;
            i ? this.layerElement.insertBefore(r, i) : this.layerElement.appendChild(r)
          }
        }, SVGRendererBase.prototype.hide = function() {
          this.layerElement.style.display = "none"
        }, SVGRendererBase.prototype.show = function() {
          this.layerElement.style.display = "block"
        }, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement], ICompElement), ICompElement.prototype.initElement = function(t, e, r) {
          this.initFrame(), this.initBaseData(t, e, r), this.initTransform(t, e, r), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), !this.data.xt && e.progressiveLoad || this.buildAllItems(), this.hide()
        }, ICompElement.prototype.prepareFrame = function(t) {
          if (this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.isInRange || this.data.xt) {
            if (this.tm._placeholder) this.renderedFrame = t / this.data.sr;
            else {
              var e = this.tm.v;
              e === this.data.op && (e = this.data.op - 1), this.renderedFrame = e
            }
            var r, i = this.elements.length;
            for (this.completeLayers || this.checkLayers(this.renderedFrame), r = i - 1; r >= 0; r -= 1)(this.completeLayers || this.elements[r]) && (this.elements[r].prepareFrame(this.renderedFrame - this.layers[r].st), this.elements[r]._mdf && (this._mdf = !0))
          }
        }, ICompElement.prototype.renderInnerContent = function() {
          var t, e = this.layers.length;
          for (t = 0; t < e; t += 1)(this.completeLayers || this.elements[t]) && this.elements[t].renderFrame()
        }, ICompElement.prototype.setElements = function(t) {
          this.elements = t
        }, ICompElement.prototype.getElements = function() {
          return this.elements
        }, ICompElement.prototype.destroyElements = function() {
          var t, e = this.layers.length;
          for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy()
        }, ICompElement.prototype.destroy = function() {
          this.destroyElements(), this.destroyBaseElement()
        }, extendPrototype([SVGRendererBase, ICompElement, SVGBaseElement], SVGCompElement), SVGCompElement.prototype.createComp = function(t) {
          return new SVGCompElement(t, this.globalData, this)
        }, extendPrototype([SVGRendererBase], SVGRenderer), SVGRenderer.prototype.createComp = function(t) {
          return new SVGCompElement(t, this.globalData, this)
        }, ShapeTransformManager.prototype = {
          addTransformSequence: function(t) {
            var e, r = t.length,
              i = "_";
            for (e = 0; e < r; e += 1) i += t[e].transform.key + "_";
            var a = this.sequences[i];
            return a || (a = {
              transforms: [].concat(t),
              finalTransform: new Matrix,
              _mdf: !1
            }, this.sequences[i] = a, this.sequenceList.push(a)), a
          },
          processSequence: function(t, e) {
            for (var r = 0, i = t.transforms.length, a = e; r < i && !e;) {
              if (t.transforms[r].transform.mProps._mdf) {
                a = !0;
                break
              }
              r += 1
            }
            if (a)
              for (t.finalTransform.reset(), r = i - 1; r >= 0; r -= 1) t.finalTransform.multiply(t.transforms[r].transform.mProps.v);
            t._mdf = a
          },
          processSequences: function(t) {
            var e, r = this.sequenceList.length;
            for (e = 0; e < r; e += 1) this.processSequence(this.sequenceList[e], t)
          },
          getNewKey: function() {
            return this.transform_key_count += 1, "_" + this.transform_key_count
          }
        };
        var lumaLoader = function() {
          var t = "__lottie_element_luma_buffer",
            e = null,
            r = null,
            i = null;

          function a() {
            var a, s, n;
            e || (a = createNS("svg"), s = createNS("filter"), n = createNS("feColorMatrix"), s.setAttribute("id", t), n.setAttribute("type", "matrix"), n.setAttribute("color-interpolation-filters", "sRGB"), n.setAttribute("values", "0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0"), s.appendChild(n), a.appendChild(s), a.setAttribute("id", t + "_svg"), featureSupport.svgLumaHidden && (a.style.display = "none"), i = a, document.body.appendChild(i), e = createTag("canvas"), (r = e.getContext("2d")).filter = "url(#" + t + ")", r.fillStyle = "rgba(0,0,0,0)", r.fillRect(0, 0, 1, 1))
          }
          return {
            load: a,
            get: function(i) {
              return e || a(), e.width = i.width, e.height = i.height, r.filter = "url(#" + t + ")", e
            }
          }
        };

        function createCanvas(t, e) {
          if (featureSupport.offscreenCanvas) return new OffscreenCanvas(t, e);
          var r = createTag("canvas");
          return r.width = t, r.height = e, r
        }
        var assetLoader = {
            loadLumaCanvas: lumaLoader.load,
            getLumaCanvas: lumaLoader.get,
            createCanvas
          },
          registeredEffects = {};

        function CVEffects(t) {
          var e, r, i = t.data.ef ? t.data.ef.length : 0;
          for (this.filters = [], e = 0; e < i; e += 1) {
            r = null;
            var a = t.data.ef[e].ty;
            registeredEffects[a] && (r = new(0, registeredEffects[a].effect)(t.effectsManager.effectElements[e], t)), r && this.filters.push(r)
          }
          this.filters.length && t.addRenderableComponent(this)
        }

        function registerEffect(t, e) {
          registeredEffects[t] = {
            effect: e
          }
        }

        function CVMaskElement(t, e) {
          var r;
          this.data = t, this.element = e, this.masksProperties = this.data.masksProperties || [], this.viewData = createSizedArray(this.masksProperties.length);
          var i = this.masksProperties.length,
            a = !1;
          for (r = 0; r < i; r += 1) "n" !== this.masksProperties[r].mode && (a = !0), this.viewData[r] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[r], 3);
          this.hasMasks = a, a && this.element.addRenderableComponent(this)
        }

        function CVBaseElement() {}
        CVEffects.prototype.renderFrame = function(t) {
          var e, r = this.filters.length;
          for (e = 0; e < r; e += 1) this.filters[e].renderFrame(t)
        }, CVEffects.prototype.getEffects = function(t) {
          var e, r = this.filters.length,
            i = [];
          for (e = 0; e < r; e += 1) this.filters[e].type === t && i.push(this.filters[e]);
          return i
        }, CVMaskElement.prototype.renderFrame = function() {
          if (this.hasMasks) {
            var t, e, r, i, a = this.element.finalTransform.mat,
              s = this.element.canvasContext,
              n = this.masksProperties.length;
            for (s.beginPath(), t = 0; t < n; t += 1)
              if ("n" !== this.masksProperties[t].mode) {
                var o;
                this.masksProperties[t].inv && (s.moveTo(0, 0), s.lineTo(this.element.globalData.compSize.w, 0), s.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h), s.lineTo(0, this.element.globalData.compSize.h), s.lineTo(0, 0)), i = this.viewData[t].v, e = a.applyToPointArray(i.v[0][0], i.v[0][1], 0), s.moveTo(e[0], e[1]);
                var l = i._length;
                for (o = 1; o < l; o += 1) r = a.applyToTriplePoints(i.o[o - 1], i.i[o], i.v[o]), s.bezierCurveTo(r[0], r[1], r[2], r[3], r[4], r[5]);
                r = a.applyToTriplePoints(i.o[o - 1], i.i[0], i.v[0]), s.bezierCurveTo(r[0], r[1], r[2], r[3], r[4], r[5])
              } this.element.globalData.renderer.save(!0), s.clip()
          }
        }, CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty, CVMaskElement.prototype.destroy = function() {
          this.element = null
        };
        var operationsMap = {
          1: "source-in",
          2: "source-out",
          3: "source-in",
          4: "source-out"
        };

        function CVShapeData(t, e, r, i) {
          this.styledShapes = [], this.tr = [0, 0, 0, 0, 0, 0];
          var a, s = 4;
          "rc" === e.ty ? s = 5 : "el" === e.ty ? s = 6 : "sr" === e.ty && (s = 7), this.sh = ShapePropertyFactory.getShapeProp(t, e, s, t);
          var n, o = r.length;
          for (a = 0; a < o; a += 1) r[a].closed || (n = {
            transforms: i.addTransformSequence(r[a].transforms),
            trNodes: []
          }, this.styledShapes.push(n), r[a].elements.push(n))
        }

        function CVShapeElement(t, e, r) {
          this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.itemsData = [], this.prevViewData = [], this.shapeModifiers = [], this.processedElements = [], this.transformsManager = new ShapeTransformManager, this.initElement(t, e, r)
        }

        function CVTextElement(t, e, r) {
          this.textSpans = [], this.yOffset = 0, this.fillColorAnim = !1, this.strokeColorAnim = !1, this.strokeWidthAnim = !1, this.stroke = !1, this.fill = !1, this.justifyOffset = 0, this.currentRender = null, this.renderType = "canvas", this.values = {
            fill: "rgba(0,0,0,0)",
            stroke: "rgba(0,0,0,0)",
            sWidth: 0,
            fValue: ""
          }, this.initElement(t, e, r)
        }

        function CVImageElement(t, e, r) {
          this.assetData = e.getAssetData(t.refId), this.img = e.imageLoader.getAsset(this.assetData), this.initElement(t, e, r)
        }

        function CVSolidElement(t, e, r) {
          this.initElement(t, e, r)
        }

        function CanvasRendererBase() {}

        function CanvasContext() {
          this.opacity = -1, this.transform = createTypedArray("float32", 16), this.fillStyle = "", this.strokeStyle = "", this.lineWidth = "", this.lineCap = "", this.lineJoin = "", this.miterLimit = "", this.id = Math.random()
        }

        function CVContextData() {
          var t;
          for (this.stack = [], this.cArrPos = 0, this.cTr = new Matrix, t = 0; t < 15; t += 1) {
            var e = new CanvasContext;
            this.stack[t] = e
          }
          this._length = 15, this.nativeContext = null, this.transformMat = new Matrix, this.currentOpacity = 1, this.currentFillStyle = "", this.appliedFillStyle = "", this.currentStrokeStyle = "", this.appliedStrokeStyle = "", this.currentLineWidth = "", this.appliedLineWidth = "", this.currentLineCap = "", this.appliedLineCap = "", this.currentLineJoin = "", this.appliedLineJoin = "", this.appliedMiterLimit = "", this.currentMiterLimit = ""
        }

        function CVCompElement(t, e, r) {
          this.completeLayers = !1, this.layers = t.layers, this.pendingElements = [], this.elements = createSizedArray(this.layers.length), this.initElement(t, e, r), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
            _placeholder: !0
          }
        }

        function CanvasRenderer(t, e) {
          this.animationItem = t, this.renderConfig = {
            clearCanvas: !e || void 0 === e.clearCanvas || e.clearCanvas,
            context: e && e.context || null,
            progressiveLoad: e && e.progressiveLoad || !1,
            preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
            imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
            contentVisibility: e && e.contentVisibility || "visible",
            className: e && e.className || "",
            id: e && e.id || "",
            runExpressions: !e || void 0 === e.runExpressions || e.runExpressions
          }, this.renderConfig.dpr = e && e.dpr || 1, this.animationItem.wrapper && (this.renderConfig.dpr = e && e.dpr || window.devicePixelRatio || 1), this.renderedFrame = -1, this.globalData = {
            frameNum: -1,
            _mdf: !1,
            renderConfig: this.renderConfig,
            currentGlobalAlpha: -1
          }, this.contextData = new CVContextData, this.elements = [], this.pendingElements = [], this.transformMat = new Matrix, this.completeLayers = !1, this.rendererType = "canvas", this.renderConfig.clearCanvas && (this.ctxTransform = this.contextData.transform.bind(this.contextData), this.ctxOpacity = this.contextData.opacity.bind(this.contextData), this.ctxFillStyle = this.contextData.fillStyle.bind(this.contextData), this.ctxStrokeStyle = this.contextData.strokeStyle.bind(this.contextData), this.ctxLineWidth = this.contextData.lineWidth.bind(this.contextData), this.ctxLineCap = this.contextData.lineCap.bind(this.contextData), this.ctxLineJoin = this.contextData.lineJoin.bind(this.contextData), this.ctxMiterLimit = this.contextData.miterLimit.bind(this.contextData), this.ctxFill = this.contextData.fill.bind(this.contextData), this.ctxFillRect = this.contextData.fillRect.bind(this.contextData), this.ctxStroke = this.contextData.stroke.bind(this.contextData), this.save = this.contextData.save.bind(this.contextData))
        }

        function HBaseElement() {}

        function HSolidElement(t, e, r) {
          this.initElement(t, e, r)
        }

        function HShapeElement(t, e, r) {
          this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.shapesContainer = createNS("g"), this.initElement(t, e, r), this.prevViewData = [], this.currentBBox = {
            x: 999999,
            y: -999999,
            h: 0,
            w: 0
          }
        }

        function HTextElement(t, e, r) {
          this.textSpans = [], this.textPaths = [], this.currentBBox = {
            x: 999999,
            y: -999999,
            h: 0,
            w: 0
          }, this.renderType = "svg", this.isMasked = !1, this.initElement(t, e, r)
        }

        function HCameraElement(t, e, r) {
          this.initFrame(), this.initBaseData(t, e, r), this.initHierarchy();
          var i = PropertyFactory.getProp;
          if (this.pe = i(this, t.pe, 0, 0, this), t.ks.p.s ? (this.px = i(this, t.ks.p.x, 1, 0, this), this.py = i(this, t.ks.p.y, 1, 0, this), this.pz = i(this, t.ks.p.z, 1, 0, this)) : this.p = i(this, t.ks.p, 1, 0, this), t.ks.a && (this.a = i(this, t.ks.a, 1, 0, this)), t.ks.or.k.length && t.ks.or.k[0].to) {
            var a, s = t.ks.or.k.length;
            for (a = 0; a < s; a += 1) t.ks.or.k[a].to = null, t.ks.or.k[a].ti = null
          }
          this.or = i(this, t.ks.or, 1, degToRads, this), this.or.sh = !0, this.rx = i(this, t.ks.rx, 0, degToRads, this), this.ry = i(this, t.ks.ry, 0, degToRads, this), this.rz = i(this, t.ks.rz, 0, degToRads, this), this.mat = new Matrix, this._prevMat = new Matrix, this._isFirstFrame = !0, this.finalTransform = {
            mProp: this
          }
        }

        function HImageElement(t, e, r) {
          this.assetData = e.getAssetData(t.refId), this.initElement(t, e, r)
        }

        function HybridRendererBase(t, e) {
          this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
            className: e && e.className || "",
            imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
            hideOnTransparent: !(e && !1 === e.hideOnTransparent),
            filterSize: {
              width: e && e.filterSize && e.filterSize.width || "400%",
              height: e && e.filterSize && e.filterSize.height || "400%",
              x: e && e.filterSize && e.filterSize.x || "-100%",
              y: e && e.filterSize && e.filterSize.y || "-100%"
            }
          }, this.globalData = {
            _mdf: !1,
            frameNum: -1,
            renderConfig: this.renderConfig
          }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html"
        }

        function HCompElement(t, e, r) {
          this.layers = t.layers, this.supports3d = !t.hasMask, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t, e, r), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
            _placeholder: !0
          }
        }

        function HybridRenderer(t, e) {
          this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
            className: e && e.className || "",
            imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
            hideOnTransparent: !(e && !1 === e.hideOnTransparent),
            filterSize: {
              width: e && e.filterSize && e.filterSize.width || "400%",
              height: e && e.filterSize && e.filterSize.height || "400%",
              x: e && e.filterSize && e.filterSize.x || "-100%",
              y: e && e.filterSize && e.filterSize.y || "-100%"
            },
            runExpressions: !e || void 0 === e.runExpressions || e.runExpressions
          }, this.globalData = {
            _mdf: !1,
            frameNum: -1,
            renderConfig: this.renderConfig
          }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html"
        }
        CVBaseElement.prototype = {
          createElements: function() {},
          initRendererElement: function() {},
          createContainerElements: function() {
            if (this.data.tt >= 1) {
              this.buffers = [];
              var t = this.globalData.canvasContext,
                e = assetLoader.createCanvas(t.canvas.width, t.canvas.height);
              this.buffers.push(e);
              var r = assetLoader.createCanvas(t.canvas.width, t.canvas.height);
              this.buffers.push(r), this.data.tt >= 3 && !document._isProxy && assetLoader.loadLumaCanvas()
            }
            this.canvasContext = this.globalData.canvasContext, this.transformCanvas = this.globalData.transformCanvas, this.renderableEffectsManager = new CVEffects(this), this.searchEffectTransforms()
          },
          createContent: function() {},
          setBlendMode: function() {
            var t = this.globalData;
            if (t.blendMode !== this.data.bm) {
              t.blendMode = this.data.bm;
              var e = getBlendMode(this.data.bm);
              t.canvasContext.globalCompositeOperation = e
            }
          },
          createRenderableComponents: function() {
            this.maskManager = new CVMaskElement(this.data, this), this.transformEffects = this.renderableEffectsManager.getEffects(effectTypes.TRANSFORM_EFFECT)
          },
          hideElement: function() {
            this.hidden || this.isInRange && !this.isTransparent || (this.hidden = !0)
          },
          showElement: function() {
            this.isInRange && !this.isTransparent && (this.hidden = !1, this._isFirstFrame = !0, this.maskManager._isFirstFrame = !0)
          },
          clearCanvas: function(t) {
            t.clearRect(this.transformCanvas.tx, this.transformCanvas.ty, this.transformCanvas.w * this.transformCanvas.sx, this.transformCanvas.h * this.transformCanvas.sy)
          },
          prepareLayer: function() {
            if (this.data.tt >= 1) {
              var t = this.buffers[0].getContext("2d");
              this.clearCanvas(t), t.drawImage(this.canvasContext.canvas, 0, 0), this.currentTransform = this.canvasContext.getTransform(), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.setTransform(this.currentTransform)
            }
          },
          exitLayer: function() {
            if (this.data.tt >= 1) {
              var t = this.buffers[1],
                e = t.getContext("2d");
              if (this.clearCanvas(e), e.drawImage(this.canvasContext.canvas, 0, 0), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.setTransform(this.currentTransform), this.comp.getElementById("tp" in this.data ? this.data.tp : this.data.ind - 1).renderFrame(!0), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.data.tt >= 3 && !document._isProxy) {
                var r = assetLoader.getLumaCanvas(this.canvasContext.canvas);
                r.getContext("2d").drawImage(this.canvasContext.canvas, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.drawImage(r, 0, 0)
              }
              this.canvasContext.globalCompositeOperation = operationsMap[this.data.tt], this.canvasContext.drawImage(t, 0, 0), this.canvasContext.globalCompositeOperation = "destination-over", this.canvasContext.drawImage(this.buffers[0], 0, 0), this.canvasContext.setTransform(this.currentTransform), this.canvasContext.globalCompositeOperation = "source-over"
            }
          },
          renderFrame: function(t) {
            if (!this.hidden && !this.data.hd && (1 !== this.data.td || t)) {
              this.renderTransform(), this.renderRenderable(), this.renderLocalTransform(), this.setBlendMode();
              var e = 0 === this.data.ty;
              this.prepareLayer(), this.globalData.renderer.save(e), this.globalData.renderer.ctxTransform(this.finalTransform.localMat.props), this.globalData.renderer.ctxOpacity(this.finalTransform.localOpacity), this.renderInnerContent(), this.globalData.renderer.restore(e), this.exitLayer(), this.maskManager.hasMasks && this.globalData.renderer.restore(!0), this._isFirstFrame && (this._isFirstFrame = !1)
            }
          },
          destroy: function() {
            this.canvasContext = null, this.data = null, this.globalData = null, this.maskManager.destroy()
          },
          mHelper: new Matrix
        }, CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement, CVBaseElement.prototype.show = CVBaseElement.prototype.showElement, CVShapeData.prototype.setAsAnimated = SVGShapeData.prototype.setAsAnimated, extendPrototype([BaseElement, TransformElement, CVBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableElement], CVShapeElement), CVShapeElement.prototype.initElement = RenderableDOMElement.prototype.initElement, CVShapeElement.prototype.transformHelper = {
          opacity: 1,
          _opMdf: !1
        }, CVShapeElement.prototype.dashResetter = [], CVShapeElement.prototype.createContent = function() {
          this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, [])
        }, CVShapeElement.prototype.createStyleElement = function(t, e) {
          var r = {
              data: t,
              type: t.ty,
              preTransforms: this.transformsManager.addTransformSequence(e),
              transforms: [],
              elements: [],
              closed: !0 === t.hd
            },
            i = {};
          if ("fl" === t.ty || "st" === t.ty ? (i.c = PropertyFactory.getProp(this, t.c, 1, 255, this), i.c.k || (r.co = "rgb(" + bmFloor(i.c.v[0]) + "," + bmFloor(i.c.v[1]) + "," + bmFloor(i.c.v[2]) + ")")) : "gf" !== t.ty && "gs" !== t.ty || (i.s = PropertyFactory.getProp(this, t.s, 1, null, this), i.e = PropertyFactory.getProp(this, t.e, 1, null, this), i.h = PropertyFactory.getProp(this, t.h || {
              k: 0
            }, 0, .01, this), i.a = PropertyFactory.getProp(this, t.a || {
              k: 0
            }, 0, degToRads, this), i.g = new GradientProperty(this, t.g, this)), i.o = PropertyFactory.getProp(this, t.o, 0, .01, this), "st" === t.ty || "gs" === t.ty) {
            if (r.lc = lineCapEnum[t.lc || 2], r.lj = lineJoinEnum[t.lj || 2], 1 == t.lj && (r.ml = t.ml), i.w = PropertyFactory.getProp(this, t.w, 0, null, this), i.w.k || (r.wi = i.w.v), t.d) {
              var a = new DashProperty(this, t.d, "canvas", this);
              i.d = a, i.d.k || (r.da = i.d.dashArray, r.do = i.d.dashoffset[0])
            }
          } else r.r = 2 === t.r ? "evenodd" : "nonzero";
          return this.stylesList.push(r), i.style = r, i
        }, CVShapeElement.prototype.createGroupElement = function() {
          return {
            it: [],
            prevViewData: []
          }
        }, CVShapeElement.prototype.createTransformElement = function(t) {
          return {
            transform: {
              opacity: 1,
              _opMdf: !1,
              key: this.transformsManager.getNewKey(),
              op: PropertyFactory.getProp(this, t.o, 0, .01, this),
              mProps: TransformPropertyFactory.getTransformProperty(this, t, this)
            }
          }
        }, CVShapeElement.prototype.createShapeElement = function(t) {
          var e = new CVShapeData(this, t, this.stylesList, this.transformsManager);
          return this.shapes.push(e), this.addShapeToModifiers(e), e
        }, CVShapeElement.prototype.reloadShapes = function() {
          var t;
          this._isFirstFrame = !0;
          var e = this.itemsData.length;
          for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
          for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []), e = this.dynamicProperties.length, t = 0; t < e; t += 1) this.dynamicProperties[t].getValue();
          this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame)
        }, CVShapeElement.prototype.addTransformToStyleList = function(t) {
          var e, r = this.stylesList.length;
          for (e = 0; e < r; e += 1) this.stylesList[e].closed || this.stylesList[e].transforms.push(t)
        }, CVShapeElement.prototype.removeTransformFromStyleList = function() {
          var t, e = this.stylesList.length;
          for (t = 0; t < e; t += 1) this.stylesList[t].closed || this.stylesList[t].transforms.pop()
        }, CVShapeElement.prototype.closeStyles = function(t) {
          var e, r = t.length;
          for (e = 0; e < r; e += 1) t[e].closed = !0
        }, CVShapeElement.prototype.searchShapes = function(t, e, r, i, a) {
          var s, n, o, l, h, p, c = t.length - 1,
            f = [],
            u = [],
            d = [].concat(a);
          for (s = c; s >= 0; s -= 1) {
            if ((l = this.searchProcessedElement(t[s])) ? e[s] = r[l - 1] : t[s]._shouldRender = i, "fl" === t[s].ty || "st" === t[s].ty || "gf" === t[s].ty || "gs" === t[s].ty) l ? e[s].style.closed = !1 : e[s] = this.createStyleElement(t[s], d), f.push(e[s].style);
            else if ("gr" === t[s].ty) {
              if (l)
                for (o = e[s].it.length, n = 0; n < o; n += 1) e[s].prevViewData[n] = e[s].it[n];
              else e[s] = this.createGroupElement(t[s]);
              this.searchShapes(t[s].it, e[s].it, e[s].prevViewData, i, d)
            } else "tr" === t[s].ty ? (l || (p = this.createTransformElement(t[s]), e[s] = p), d.push(e[s]), this.addTransformToStyleList(e[s])) : "sh" === t[s].ty || "rc" === t[s].ty || "el" === t[s].ty || "sr" === t[s].ty ? l || (e[s] = this.createShapeElement(t[s])) : "tm" === t[s].ty || "rd" === t[s].ty || "pb" === t[s].ty || "zz" === t[s].ty || "op" === t[s].ty ? (l ? (h = e[s]).closed = !1 : ((h = ShapeModifiers.getModifier(t[s].ty)).init(this, t[s]), e[s] = h, this.shapeModifiers.push(h)), u.push(h)) : "rp" === t[s].ty && (l ? (h = e[s]).closed = !0 : (h = ShapeModifiers.getModifier(t[s].ty), e[s] = h, h.init(this, t, s, e), this.shapeModifiers.push(h), i = !1), u.push(h));
            this.addProcessedElement(t[s], s + 1)
          }
          for (this.removeTransformFromStyleList(), this.closeStyles(f), c = u.length, s = 0; s < c; s += 1) u[s].closed = !0
        }, CVShapeElement.prototype.renderInnerContent = function() {
          this.transformHelper.opacity = 1, this.transformHelper._opMdf = !1, this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame), this.renderShape(this.transformHelper, this.shapesData, this.itemsData, !0)
        }, CVShapeElement.prototype.renderShapeTransform = function(t, e) {
          (t._opMdf || e.op._mdf || this._isFirstFrame) && (e.opacity = t.opacity, e.opacity *= e.op.v, e._opMdf = !0)
        }, CVShapeElement.prototype.drawLayer = function() {
          var t, e, r, i, a, s, n, o, l, h = this.stylesList.length,
            p = this.globalData.renderer,
            c = this.globalData.canvasContext;
          for (t = 0; t < h; t += 1)
            if (("st" !== (o = (l = this.stylesList[t]).type) && "gs" !== o || 0 !== l.wi) && l.data._shouldRender && 0 !== l.coOp && 0 !== this.globalData.currentGlobalAlpha) {
              for (p.save(), s = l.elements, "st" === o || "gs" === o ? (p.ctxStrokeStyle("st" === o ? l.co : l.grd), p.ctxLineWidth(l.wi), p.ctxLineCap(l.lc), p.ctxLineJoin(l.lj), p.ctxMiterLimit(l.ml || 0)) : p.ctxFillStyle("fl" === o ? l.co : l.grd), p.ctxOpacity(l.coOp), "st" !== o && "gs" !== o && c.beginPath(), p.ctxTransform(l.preTransforms.finalTransform.props), r = s.length, e = 0; e < r; e += 1) {
                for ("st" !== o && "gs" !== o || (c.beginPath(), l.da && (c.setLineDash(l.da), c.lineDashOffset = l.do)), a = (n = s[e].trNodes).length, i = 0; i < a; i += 1) "m" === n[i].t ? c.moveTo(n[i].p[0], n[i].p[1]) : "c" === n[i].t ? c.bezierCurveTo(n[i].pts[0], n[i].pts[1], n[i].pts[2], n[i].pts[3], n[i].pts[4], n[i].pts[5]) : c.closePath();
                "st" !== o && "gs" !== o || (p.ctxStroke(), l.da && c.setLineDash(this.dashResetter))
              }
              "st" !== o && "gs" !== o && this.globalData.renderer.ctxFill(l.r), p.restore()
            }
        }, CVShapeElement.prototype.renderShape = function(t, e, r, i) {
          var a, s;
          for (s = t, a = e.length - 1; a >= 0; a -= 1) "tr" === e[a].ty ? (s = r[a].transform, this.renderShapeTransform(t, s)) : "sh" === e[a].ty || "el" === e[a].ty || "rc" === e[a].ty || "sr" === e[a].ty ? this.renderPath(e[a], r[a]) : "fl" === e[a].ty ? this.renderFill(e[a], r[a], s) : "st" === e[a].ty ? this.renderStroke(e[a], r[a], s) : "gf" === e[a].ty || "gs" === e[a].ty ? this.renderGradientFill(e[a], r[a], s) : "gr" === e[a].ty ? this.renderShape(s, e[a].it, r[a].it) : e[a].ty;
          i && this.drawLayer()
        }, CVShapeElement.prototype.renderStyledShape = function(t, e) {
          if (this._isFirstFrame || e._mdf || t.transforms._mdf) {
            var r, i, a, s = t.trNodes,
              n = e.paths,
              o = n._length;
            s.length = 0;
            var l = t.transforms.finalTransform;
            for (a = 0; a < o; a += 1) {
              var h = n.shapes[a];
              if (h && h.v) {
                for (i = h._length, r = 1; r < i; r += 1) 1 === r && s.push({
                  t: "m",
                  p: l.applyToPointArray(h.v[0][0], h.v[0][1], 0)
                }), s.push({
                  t: "c",
                  pts: l.applyToTriplePoints(h.o[r - 1], h.i[r], h.v[r])
                });
                1 === i && s.push({
                  t: "m",
                  p: l.applyToPointArray(h.v[0][0], h.v[0][1], 0)
                }), h.c && i && (s.push({
                  t: "c",
                  pts: l.applyToTriplePoints(h.o[r - 1], h.i[0], h.v[0])
                }), s.push({
                  t: "z"
                }))
              }
            }
            t.trNodes = s
          }
        }, CVShapeElement.prototype.renderPath = function(t, e) {
          if (!0 !== t.hd && t._shouldRender) {
            var r, i = e.styledShapes.length;
            for (r = 0; r < i; r += 1) this.renderStyledShape(e.styledShapes[r], e.sh)
          }
        }, CVShapeElement.prototype.renderFill = function(t, e, r) {
          var i = e.style;
          (e.c._mdf || this._isFirstFrame) && (i.co = "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || r._opMdf || this._isFirstFrame) && (i.coOp = e.o.v * r.opacity)
        }, CVShapeElement.prototype.renderGradientFill = function(t, e, r) {
          var i, a = e.style;
          if (!a.grd || e.g._mdf || e.s._mdf || e.e._mdf || 1 !== t.t && (e.h._mdf || e.a._mdf)) {
            var s, n = this.globalData.canvasContext,
              o = e.s.v,
              l = e.e.v;
            if (1 === t.t) i = n.createLinearGradient(o[0], o[1], l[0], l[1]);
            else {
              var h = Math.sqrt(Math.pow(o[0] - l[0], 2) + Math.pow(o[1] - l[1], 2)),
                p = Math.atan2(l[1] - o[1], l[0] - o[0]),
                c = e.h.v;
              c >= 1 ? c = .99 : c <= -1 && (c = -.99);
              var f = h * c,
                u = Math.cos(p + e.a.v) * f + o[0],
                d = Math.sin(p + e.a.v) * f + o[1];
              i = n.createRadialGradient(u, d, 0, o[0], o[1], h)
            }
            var m = t.g.p,
              y = e.g.c,
              g = 1;
            for (s = 0; s < m; s += 1) e.g._hasOpacity && e.g._collapsable && (g = e.g.o[2 * s + 1]), i.addColorStop(y[4 * s] / 100, "rgba(" + y[4 * s + 1] + "," + y[4 * s + 2] + "," + y[4 * s + 3] + "," + g + ")");
            a.grd = i
          }
          a.coOp = e.o.v * r.opacity
        }, CVShapeElement.prototype.renderStroke = function(t, e, r) {
          var i = e.style,
            a = e.d;
          a && (a._mdf || this._isFirstFrame) && (i.da = a.dashArray, i.do = a.dashoffset[0]), (e.c._mdf || this._isFirstFrame) && (i.co = "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || r._opMdf || this._isFirstFrame) && (i.coOp = e.o.v * r.opacity), (e.w._mdf || this._isFirstFrame) && (i.wi = e.w.v)
        }, CVShapeElement.prototype.destroy = function() {
          this.shapesData = null, this.globalData = null, this.canvasContext = null, this.stylesList.length = 0, this.itemsData.length = 0
        }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement, ITextElement], CVTextElement), CVTextElement.prototype.tHelper = createTag("canvas").getContext("2d"), CVTextElement.prototype.buildNewText = function() {
          var t = this.textProperty.currentData;
          this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
          var e = !1;
          t.fc ? (e = !0, this.values.fill = this.buildColor(t.fc)) : this.values.fill = "rgba(0,0,0,0)", this.fill = e;
          var r = !1;
          t.sc && (r = !0, this.values.stroke = this.buildColor(t.sc), this.values.sWidth = t.sw);
          var i, a, s, n, o, l, h, p, c, f, u, d, m = this.globalData.fontManager.getFontByName(t.f),
            y = t.l,
            g = this.mHelper;
          this.stroke = r, this.values.fValue = t.finalSize + "px " + this.globalData.fontManager.getFontByName(t.f).fFamily, a = t.finalText.length;
          var v = this.data.singleShape,
            b = .001 * t.tr * t.finalSize,
            x = 0,
            C = 0,
            A = !0,
            _ = 0;
          for (i = 0; i < a; i += 1) {
            n = (s = this.globalData.fontManager.getCharData(t.finalText[i], m.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily)) && s.data || {}, g.reset(), v && y[i].n && (x = -b, C += t.yOffset, C += A ? 1 : 0, A = !1), c = (h = n.shapes ? n.shapes[0].it : []).length, g.scale(t.finalSize / 100, t.finalSize / 100), v && this.applyTextPropertiesToMatrix(t, g, y[i].line, x, C), u = createSizedArray(c - 1);
            var E = 0;
            for (p = 0; p < c; p += 1)
              if ("sh" === h[p].ty) {
                for (l = h[p].ks.k.i.length, f = h[p].ks.k, d = [], o = 1; o < l; o += 1) 1 === o && d.push(g.applyToX(f.v[0][0], f.v[0][1], 0), g.applyToY(f.v[0][0], f.v[0][1], 0)), d.push(g.applyToX(f.o[o - 1][0], f.o[o - 1][1], 0), g.applyToY(f.o[o - 1][0], f.o[o - 1][1], 0), g.applyToX(f.i[o][0], f.i[o][1], 0), g.applyToY(f.i[o][0], f.i[o][1], 0), g.applyToX(f.v[o][0], f.v[o][1], 0), g.applyToY(f.v[o][0], f.v[o][1], 0));
                d.push(g.applyToX(f.o[o - 1][0], f.o[o - 1][1], 0), g.applyToY(f.o[o - 1][0], f.o[o - 1][1], 0), g.applyToX(f.i[0][0], f.i[0][1], 0), g.applyToY(f.i[0][0], f.i[0][1], 0), g.applyToX(f.v[0][0], f.v[0][1], 0), g.applyToY(f.v[0][0], f.v[0][1], 0)), u[E] = d, E += 1
              } v && (x += y[i].l, x += b), this.textSpans[_] ? this.textSpans[_].elem = u : this.textSpans[_] = {
              elem: u
            }, _ += 1
          }
        }, CVTextElement.prototype.renderInnerContent = function() {
          var t, e, r, i, a, s;
          this.validateText(), this.canvasContext.font = this.values.fValue, this.globalData.renderer.ctxLineCap("butt"), this.globalData.renderer.ctxLineJoin("miter"), this.globalData.renderer.ctxMiterLimit(4), this.data.singleShape || this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
          var n, o = this.textAnimator.renderedLetters,
            l = this.textProperty.currentData.l;
          e = l.length;
          var h, p, c = null,
            f = null,
            u = null,
            d = this.globalData.renderer;
          for (t = 0; t < e; t += 1)
            if (!l[t].n) {
              if ((n = o[t]) && (d.save(), d.ctxTransform(n.p), d.ctxOpacity(n.o)), this.fill) {
                for (n && n.fc ? c !== n.fc && (d.ctxFillStyle(n.fc), c = n.fc) : c !== this.values.fill && (c = this.values.fill, d.ctxFillStyle(this.values.fill)), i = (h = this.textSpans[t].elem).length, this.globalData.canvasContext.beginPath(), r = 0; r < i; r += 1)
                  for (s = (p = h[r]).length, this.globalData.canvasContext.moveTo(p[0], p[1]), a = 2; a < s; a += 6) this.globalData.canvasContext.bezierCurveTo(p[a], p[a + 1], p[a + 2], p[a + 3], p[a + 4], p[a + 5]);
                this.globalData.canvasContext.closePath(), d.ctxFill()
              }
              if (this.stroke) {
                for (n && n.sw ? u !== n.sw && (u = n.sw, d.ctxLineWidth(n.sw)) : u !== this.values.sWidth && (u = this.values.sWidth, d.ctxLineWidth(this.values.sWidth)), n && n.sc ? f !== n.sc && (f = n.sc, d.ctxStrokeStyle(n.sc)) : f !== this.values.stroke && (f = this.values.stroke, d.ctxStrokeStyle(this.values.stroke)), i = (h = this.textSpans[t].elem).length, this.globalData.canvasContext.beginPath(), r = 0; r < i; r += 1)
                  for (s = (p = h[r]).length, this.globalData.canvasContext.moveTo(p[0], p[1]), a = 2; a < s; a += 6) this.globalData.canvasContext.bezierCurveTo(p[a], p[a + 1], p[a + 2], p[a + 3], p[a + 4], p[a + 5]);
                this.globalData.canvasContext.closePath(), d.ctxStroke()
              }
              n && this.globalData.renderer.restore()
            }
        }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVImageElement), CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVImageElement.prototype.createContent = function() {
          if (this.img.width && (this.assetData.w !== this.img.width || this.assetData.h !== this.img.height)) {
            var t = createTag("canvas");
            t.width = this.assetData.w, t.height = this.assetData.h;
            var e, r, i = t.getContext("2d"),
              a = this.img.width,
              s = this.img.height,
              n = a / s,
              o = this.assetData.w / this.assetData.h,
              l = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;
            n > o && "xMidYMid slice" === l || n < o && "xMidYMid slice" !== l ? e = (r = s) * o : r = (e = a) / o, i.drawImage(this.img, (a - e) / 2, (s - r) / 2, e, r, 0, 0, this.assetData.w, this.assetData.h), this.img = t
          }
        }, CVImageElement.prototype.renderInnerContent = function() {
          this.canvasContext.drawImage(this.img, 0, 0)
        }, CVImageElement.prototype.destroy = function() {
          this.img = null
        }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVSolidElement), CVSolidElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVSolidElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVSolidElement.prototype.renderInnerContent = function() {
          this.globalData.renderer.ctxFillStyle(this.data.sc), this.globalData.renderer.ctxFillRect(0, 0, this.data.sw, this.data.sh)
        }, extendPrototype([BaseRenderer], CanvasRendererBase), CanvasRendererBase.prototype.createShape = function(t) {
          return new CVShapeElement(t, this.globalData, this)
        }, CanvasRendererBase.prototype.createText = function(t) {
          return new CVTextElement(t, this.globalData, this)
        }, CanvasRendererBase.prototype.createImage = function(t) {
          return new CVImageElement(t, this.globalData, this)
        }, CanvasRendererBase.prototype.createSolid = function(t) {
          return new CVSolidElement(t, this.globalData, this)
        }, CanvasRendererBase.prototype.createNull = SVGRenderer.prototype.createNull, CanvasRendererBase.prototype.ctxTransform = function(t) {
          1 === t[0] && 0 === t[1] && 0 === t[4] && 1 === t[5] && 0 === t[12] && 0 === t[13] || this.canvasContext.transform(t[0], t[1], t[4], t[5], t[12], t[13])
        }, CanvasRendererBase.prototype.ctxOpacity = function(t) {
          this.canvasContext.globalAlpha *= t < 0 ? 0 : t
        }, CanvasRendererBase.prototype.ctxFillStyle = function(t) {
          this.canvasContext.fillStyle = t
        }, CanvasRendererBase.prototype.ctxStrokeStyle = function(t) {
          this.canvasContext.strokeStyle = t
        }, CanvasRendererBase.prototype.ctxLineWidth = function(t) {
          this.canvasContext.lineWidth = t
        }, CanvasRendererBase.prototype.ctxLineCap = function(t) {
          this.canvasContext.lineCap = t
        }, CanvasRendererBase.prototype.ctxLineJoin = function(t) {
          this.canvasContext.lineJoin = t
        }, CanvasRendererBase.prototype.ctxMiterLimit = function(t) {
          this.canvasContext.miterLimit = t
        }, CanvasRendererBase.prototype.ctxFill = function(t) {
          this.canvasContext.fill(t)
        }, CanvasRendererBase.prototype.ctxFillRect = function(t, e, r, i) {
          this.canvasContext.fillRect(t, e, r, i)
        }, CanvasRendererBase.prototype.ctxStroke = function() {
          this.canvasContext.stroke()
        }, CanvasRendererBase.prototype.reset = function() {
          this.renderConfig.clearCanvas ? this.contextData.reset() : this.canvasContext.restore()
        }, CanvasRendererBase.prototype.save = function() {
          this.canvasContext.save()
        }, CanvasRendererBase.prototype.restore = function(t) {
          this.renderConfig.clearCanvas ? (t && (this.globalData.blendMode = "source-over"), this.contextData.restore(t)) : this.canvasContext.restore()
        }, CanvasRendererBase.prototype.configAnimation = function(t) {
          if (this.animationItem.wrapper) {
            this.animationItem.container = createTag("canvas");
            var e = this.animationItem.container.style;
            e.width = "100%", e.height = "100%";
            var r = "0px 0px 0px";
            e.transformOrigin = r, e.mozTransformOrigin = r, e.webkitTransformOrigin = r, e["-webkit-transform"] = r, e.contentVisibility = this.renderConfig.contentVisibility, this.animationItem.wrapper.appendChild(this.animationItem.container), this.canvasContext = this.animationItem.container.getContext("2d"), this.renderConfig.className && this.animationItem.container.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.animationItem.container.setAttribute("id", this.renderConfig.id)
          } else this.canvasContext = this.renderConfig.context;
          this.contextData.setContext(this.canvasContext), this.data = t, this.layers = t.layers, this.transformCanvas = {
            w: t.w,
            h: t.h,
            sx: 0,
            sy: 0,
            tx: 0,
            ty: 0
          }, this.setupGlobalData(t, document.body), this.globalData.canvasContext = this.canvasContext, this.globalData.renderer = this, this.globalData.isDashed = !1, this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.globalData.transformCanvas = this.transformCanvas, this.elements = createSizedArray(t.layers.length), this.updateContainerSize()
        }, CanvasRendererBase.prototype.updateContainerSize = function(t, e) {
          var r, i, a, s;
          if (this.reset(), t ? (r = t, i = e, this.canvasContext.canvas.width = r, this.canvasContext.canvas.height = i) : (this.animationItem.wrapper && this.animationItem.container ? (r = this.animationItem.wrapper.offsetWidth, i = this.animationItem.wrapper.offsetHeight) : (r = this.canvasContext.canvas.width, i = this.canvasContext.canvas.height), this.canvasContext.canvas.width = r * this.renderConfig.dpr, this.canvasContext.canvas.height = i * this.renderConfig.dpr), -1 !== this.renderConfig.preserveAspectRatio.indexOf("meet") || -1 !== this.renderConfig.preserveAspectRatio.indexOf("slice")) {
            var n = this.renderConfig.preserveAspectRatio.split(" "),
              o = n[1] || "meet",
              l = n[0] || "xMidYMid",
              h = l.substr(0, 4),
              p = l.substr(4);
            a = r / i, (s = this.transformCanvas.w / this.transformCanvas.h) > a && "meet" === o || s < a && "slice" === o ? (this.transformCanvas.sx = r / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = r / (this.transformCanvas.w / this.renderConfig.dpr)) : (this.transformCanvas.sx = i / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.sy = i / (this.transformCanvas.h / this.renderConfig.dpr)), this.transformCanvas.tx = "xMid" === h && (s < a && "meet" === o || s > a && "slice" === o) ? (r - this.transformCanvas.w * (i / this.transformCanvas.h)) / 2 * this.renderConfig.dpr : "xMax" === h && (s < a && "meet" === o || s > a && "slice" === o) ? (r - this.transformCanvas.w * (i / this.transformCanvas.h)) * this.renderConfig.dpr : 0, this.transformCanvas.ty = "YMid" === p && (s > a && "meet" === o || s < a && "slice" === o) ? (i - this.transformCanvas.h * (r / this.transformCanvas.w)) / 2 * this.renderConfig.dpr : "YMax" === p && (s > a && "meet" === o || s < a && "slice" === o) ? (i - this.transformCanvas.h * (r / this.transformCanvas.w)) * this.renderConfig.dpr : 0
          } else "none" === this.renderConfig.preserveAspectRatio ? (this.transformCanvas.sx = r / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = i / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.tx = 0, this.transformCanvas.ty = 0) : (this.transformCanvas.sx = this.renderConfig.dpr, this.transformCanvas.sy = this.renderConfig.dpr, this.transformCanvas.tx = 0, this.transformCanvas.ty = 0);
          this.transformCanvas.props = [this.transformCanvas.sx, 0, 0, 0, 0, this.transformCanvas.sy, 0, 0, 0, 0, 1, 0, this.transformCanvas.tx, this.transformCanvas.ty, 0, 1], this.ctxTransform(this.transformCanvas.props), this.canvasContext.beginPath(), this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h), this.canvasContext.closePath(), this.canvasContext.clip(), this.renderFrame(this.renderedFrame, !0)
        }, CanvasRendererBase.prototype.destroy = function() {
          var t;
          for (this.renderConfig.clearCanvas && this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), t = (this.layers ? this.layers.length : 0) - 1; t >= 0; t -= 1) this.elements[t] && this.elements[t].destroy && this.elements[t].destroy();
          this.elements.length = 0, this.globalData.canvasContext = null, this.animationItem.container = null, this.destroyed = !0
        }, CanvasRendererBase.prototype.renderFrame = function(t, e) {
          if ((this.renderedFrame !== t || !0 !== this.renderConfig.clearCanvas || e) && !this.destroyed && -1 !== t) {
            var r;
            this.renderedFrame = t, this.globalData.frameNum = t - this.animationItem._isFirstFrame, this.globalData.frameId += 1, this.globalData._mdf = !this.renderConfig.clearCanvas || e, this.globalData.projectInterface.currentFrame = t;
            var i = this.layers.length;
            for (this.completeLayers || this.checkLayers(t), r = i - 1; r >= 0; r -= 1)(this.completeLayers || this.elements[r]) && this.elements[r].prepareFrame(t - this.layers[r].st);
            if (this.globalData._mdf) {
              for (!0 === this.renderConfig.clearCanvas ? this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h) : this.save(), r = i - 1; r >= 0; r -= 1)(this.completeLayers || this.elements[r]) && this.elements[r].renderFrame();
              !0 !== this.renderConfig.clearCanvas && this.restore()
            }
          }
        }, CanvasRendererBase.prototype.buildItem = function(t) {
          var e = this.elements;
          if (!e[t] && 99 !== this.layers[t].ty) {
            var r = this.createItem(this.layers[t], this, this.globalData);
            e[t] = r, r.initExpressions()
          }
        }, CanvasRendererBase.prototype.checkPendingElements = function() {
          for (; this.pendingElements.length;) this.pendingElements.pop().checkParenting()
        }, CanvasRendererBase.prototype.hide = function() {
          this.animationItem.container.style.display = "none"
        }, CanvasRendererBase.prototype.show = function() {
          this.animationItem.container.style.display = "block"
        }, CVContextData.prototype.duplicate = function() {
          var t = 2 * this._length,
            e = 0;
          for (e = this._length; e < t; e += 1) this.stack[e] = new CanvasContext;
          this._length = t
        }, CVContextData.prototype.reset = function() {
          this.cArrPos = 0, this.cTr.reset(), this.stack[this.cArrPos].opacity = 1
        }, CVContextData.prototype.restore = function(t) {
          this.cArrPos -= 1;
          var e, r = this.stack[this.cArrPos],
            i = r.transform,
            a = this.cTr.props;
          for (e = 0; e < 16; e += 1) a[e] = i[e];
          if (t) {
            this.nativeContext.restore();
            var s = this.stack[this.cArrPos + 1];
            this.appliedFillStyle = s.fillStyle, this.appliedStrokeStyle = s.strokeStyle, this.appliedLineWidth = s.lineWidth, this.appliedLineCap = s.lineCap, this.appliedLineJoin = s.lineJoin, this.appliedMiterLimit = s.miterLimit
          }
          this.nativeContext.setTransform(i[0], i[1], i[4], i[5], i[12], i[13]), (t || -1 !== r.opacity && this.currentOpacity !== r.opacity) && (this.nativeContext.globalAlpha = r.opacity, this.currentOpacity = r.opacity), this.currentFillStyle = r.fillStyle, this.currentStrokeStyle = r.strokeStyle, this.currentLineWidth = r.lineWidth, this.currentLineCap = r.lineCap, this.currentLineJoin = r.lineJoin, this.currentMiterLimit = r.miterLimit
        }, CVContextData.prototype.save = function(t) {
          t && this.nativeContext.save();
          var e = this.cTr.props;
          this._length <= this.cArrPos && this.duplicate();
          var r, i = this.stack[this.cArrPos];
          for (r = 0; r < 16; r += 1) i.transform[r] = e[r];
          this.cArrPos += 1;
          var a = this.stack[this.cArrPos];
          a.opacity = i.opacity, a.fillStyle = i.fillStyle, a.strokeStyle = i.strokeStyle, a.lineWidth = i.lineWidth, a.lineCap = i.lineCap, a.lineJoin = i.lineJoin, a.miterLimit = i.miterLimit
        }, CVContextData.prototype.setOpacity = function(t) {
          this.stack[this.cArrPos].opacity = t
        }, CVContextData.prototype.setContext = function(t) {
          this.nativeContext = t
        }, CVContextData.prototype.fillStyle = function(t) {
          this.stack[this.cArrPos].fillStyle !== t && (this.currentFillStyle = t, this.stack[this.cArrPos].fillStyle = t)
        }, CVContextData.prototype.strokeStyle = function(t) {
          this.stack[this.cArrPos].strokeStyle !== t && (this.currentStrokeStyle = t, this.stack[this.cArrPos].strokeStyle = t)
        }, CVContextData.prototype.lineWidth = function(t) {
          this.stack[this.cArrPos].lineWidth !== t && (this.currentLineWidth = t, this.stack[this.cArrPos].lineWidth = t)
        }, CVContextData.prototype.lineCap = function(t) {
          this.stack[this.cArrPos].lineCap !== t && (this.currentLineCap = t, this.stack[this.cArrPos].lineCap = t)
        }, CVContextData.prototype.lineJoin = function(t) {
          this.stack[this.cArrPos].lineJoin !== t && (this.currentLineJoin = t, this.stack[this.cArrPos].lineJoin = t)
        }, CVContextData.prototype.miterLimit = function(t) {
          this.stack[this.cArrPos].miterLimit !== t && (this.currentMiterLimit = t, this.stack[this.cArrPos].miterLimit = t)
        }, CVContextData.prototype.transform = function(t) {
          this.transformMat.cloneFromProps(t);
          var e = this.cTr;
          this.transformMat.multiply(e), e.cloneFromProps(this.transformMat.props);
          var r = e.props;
          this.nativeContext.setTransform(r[0], r[1], r[4], r[5], r[12], r[13])
        }, CVContextData.prototype.opacity = function(t) {
          var e = this.stack[this.cArrPos].opacity;
          e *= t < 0 ? 0 : t, this.stack[this.cArrPos].opacity !== e && (this.currentOpacity !== t && (this.nativeContext.globalAlpha = t, this.currentOpacity = t), this.stack[this.cArrPos].opacity = e)
        }, CVContextData.prototype.fill = function(t) {
          this.appliedFillStyle !== this.currentFillStyle && (this.appliedFillStyle = this.currentFillStyle, this.nativeContext.fillStyle = this.appliedFillStyle), this.nativeContext.fill(t)
        }, CVContextData.prototype.fillRect = function(t, e, r, i) {
          this.appliedFillStyle !== this.currentFillStyle && (this.appliedFillStyle = this.currentFillStyle, this.nativeContext.fillStyle = this.appliedFillStyle), this.nativeContext.fillRect(t, e, r, i)
        }, CVContextData.prototype.stroke = function() {
          this.appliedStrokeStyle !== this.currentStrokeStyle && (this.appliedStrokeStyle = this.currentStrokeStyle, this.nativeContext.strokeStyle = this.appliedStrokeStyle), this.appliedLineWidth !== this.currentLineWidth && (this.appliedLineWidth = this.currentLineWidth, this.nativeContext.lineWidth = this.appliedLineWidth), this.appliedLineCap !== this.currentLineCap && (this.appliedLineCap = this.currentLineCap, this.nativeContext.lineCap = this.appliedLineCap), this.appliedLineJoin !== this.currentLineJoin && (this.appliedLineJoin = this.currentLineJoin, this.nativeContext.lineJoin = this.appliedLineJoin), this.appliedMiterLimit !== this.currentMiterLimit && (this.appliedMiterLimit = this.currentMiterLimit, this.nativeContext.miterLimit = this.appliedMiterLimit), this.nativeContext.stroke()
        }, extendPrototype([CanvasRendererBase, ICompElement, CVBaseElement], CVCompElement), CVCompElement.prototype.renderInnerContent = function() {
          var t, e = this.canvasContext;
          for (e.beginPath(), e.moveTo(0, 0), e.lineTo(this.data.w, 0), e.lineTo(this.data.w, this.data.h), e.lineTo(0, this.data.h), e.lineTo(0, 0), e.clip(), t = this.layers.length - 1; t >= 0; t -= 1)(this.completeLayers || this.elements[t]) && this.elements[t].renderFrame()
        }, CVCompElement.prototype.destroy = function() {
          var t;
          for (t = this.layers.length - 1; t >= 0; t -= 1) this.elements[t] && this.elements[t].destroy();
          this.layers = null, this.elements = null
        }, CVCompElement.prototype.createComp = function(t) {
          return new CVCompElement(t, this.globalData, this)
        }, extendPrototype([CanvasRendererBase], CanvasRenderer), CanvasRenderer.prototype.createComp = function(t) {
          return new CVCompElement(t, this.globalData, this)
        }, HBaseElement.prototype = {
          checkBlendMode: function() {},
          initRendererElement: function() {
            this.baseElement = createTag(this.data.tg || "div"), this.data.hasMask ? (this.svgElement = createNS("svg"), this.layerElement = createNS("g"), this.maskedElement = this.layerElement, this.svgElement.appendChild(this.layerElement), this.baseElement.appendChild(this.svgElement)) : this.layerElement = this.baseElement, styleDiv(this.baseElement)
          },
          createContainerElements: function() {
            this.renderableEffectsManager = new CVEffects(this), this.transformedElement = this.baseElement, this.maskedElement = this.layerElement, this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 !== this.data.bm && this.setBlendMode()
          },
          renderElement: function() {
            var t = this.transformedElement ? this.transformedElement.style : {};
            if (this.finalTransform._matMdf) {
              var e = this.finalTransform.mat.toCSS();
              t.transform = e, t.webkitTransform = e
            }
            this.finalTransform._opMdf && (t.opacity = this.finalTransform.mProp.o.v)
          },
          renderFrame: function() {
            this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
          },
          destroy: function() {
            this.layerElement = null, this.transformedElement = null, this.matteElement && (this.matteElement = null), this.maskManager && (this.maskManager.destroy(), this.maskManager = null)
          },
          createRenderableComponents: function() {
            this.maskManager = new MaskElement(this.data, this, this.globalData)
          },
          addEffects: function() {},
          setMatte: function() {}
        }, HBaseElement.prototype.getBaseElement = SVGBaseElement.prototype.getBaseElement, HBaseElement.prototype.destroyBaseElement = HBaseElement.prototype.destroy, HBaseElement.prototype.buildElementParenting = BaseRenderer.prototype.buildElementParenting, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], HSolidElement), HSolidElement.prototype.createContent = function() {
          var t;
          this.data.hasMask ? ((t = createNS("rect")).setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.svgElement.setAttribute("width", this.data.sw), this.svgElement.setAttribute("height", this.data.sh)) : ((t = createTag("div")).style.width = this.data.sw + "px", t.style.height = this.data.sh + "px", t.style.backgroundColor = this.data.sc), this.layerElement.appendChild(t)
        }, extendPrototype([BaseElement, TransformElement, HSolidElement, SVGShapeElement, HBaseElement, HierarchyElement, FrameElement, RenderableElement], HShapeElement), HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderInnerContent, HShapeElement.prototype.createContent = function() {
          var t;
          if (this.baseElement.style.fontSize = 0, this.data.hasMask) this.layerElement.appendChild(this.shapesContainer), t = this.svgElement;
          else {
            t = createNS("svg");
            var e = this.comp.data ? this.comp.data : this.globalData.compSize;
            t.setAttribute("width", e.w), t.setAttribute("height", e.h), t.appendChild(this.shapesContainer), this.layerElement.appendChild(t)
          }
          this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.shapesContainer, 0, [], !0), this.filterUniqueShapes(), this.shapeCont = t
        }, HShapeElement.prototype.getTransformedPoint = function(t, e) {
          var r, i = t.length;
          for (r = 0; r < i; r += 1) e = t[r].mProps.v.applyToPointArray(e[0], e[1], 0);
          return e
        }, HShapeElement.prototype.calculateShapeBoundingBox = function(t, e) {
          var r, i, a, s, n, o = t.sh.v,
            l = t.transformers,
            h = o._length;
          if (!(h <= 1)) {
            for (r = 0; r < h - 1; r += 1) i = this.getTransformedPoint(l, o.v[r]), a = this.getTransformedPoint(l, o.o[r]), s = this.getTransformedPoint(l, o.i[r + 1]), n = this.getTransformedPoint(l, o.v[r + 1]), this.checkBounds(i, a, s, n, e);
            o.c && (i = this.getTransformedPoint(l, o.v[r]), a = this.getTransformedPoint(l, o.o[r]), s = this.getTransformedPoint(l, o.i[0]), n = this.getTransformedPoint(l, o.v[0]), this.checkBounds(i, a, s, n, e))
          }
        }, HShapeElement.prototype.checkBounds = function(t, e, r, i, a) {
          this.getBoundsOfCurve(t, e, r, i);
          var s = this.shapeBoundingBox;
          a.x = bmMin(s.left, a.x), a.xMax = bmMax(s.right, a.xMax), a.y = bmMin(s.top, a.y), a.yMax = bmMax(s.bottom, a.yMax)
        }, HShapeElement.prototype.shapeBoundingBox = {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        }, HShapeElement.prototype.tempBoundingBox = {
          x: 0,
          xMax: 0,
          y: 0,
          yMax: 0,
          width: 0,
          height: 0
        }, HShapeElement.prototype.getBoundsOfCurve = function(t, e, r, i) {
          for (var a, s, n, o, l, h, p, c = [
              [t[0], i[0]],
              [t[1], i[1]]
            ], f = 0; f < 2; ++f) s = 6 * t[f] - 12 * e[f] + 6 * r[f], a = -3 * t[f] + 9 * e[f] - 9 * r[f] + 3 * i[f], n = 3 * e[f] - 3 * t[f], s |= 0, n |= 0, 0 == (a |= 0) && 0 === s || (0 === a ? (o = -n / s) > 0 && o < 1 && c[f].push(this.calculateF(o, t, e, r, i, f)) : (l = s * s - 4 * n * a) >= 0 && ((h = (-s + bmSqrt(l)) / (2 * a)) > 0 && h < 1 && c[f].push(this.calculateF(h, t, e, r, i, f)), (p = (-s - bmSqrt(l)) / (2 * a)) > 0 && p < 1 && c[f].push(this.calculateF(p, t, e, r, i, f))));
          this.shapeBoundingBox.left = bmMin.apply(null, c[0]), this.shapeBoundingBox.top = bmMin.apply(null, c[1]), this.shapeBoundingBox.right = bmMax.apply(null, c[0]), this.shapeBoundingBox.bottom = bmMax.apply(null, c[1])
        }, HShapeElement.prototype.calculateF = function(t, e, r, i, a, s) {
          return bmPow(1 - t, 3) * e[s] + 3 * bmPow(1 - t, 2) * t * r[s] + 3 * (1 - t) * bmPow(t, 2) * i[s] + bmPow(t, 3) * a[s]
        }, HShapeElement.prototype.calculateBoundingBox = function(t, e) {
          var r, i = t.length;
          for (r = 0; r < i; r += 1) t[r] && t[r].sh ? this.calculateShapeBoundingBox(t[r], e) : t[r] && t[r].it ? this.calculateBoundingBox(t[r].it, e) : t[r] && t[r].style && t[r].w && this.expandStrokeBoundingBox(t[r].w, e)
        }, HShapeElement.prototype.expandStrokeBoundingBox = function(t, e) {
          var r = 0;
          if (t.keyframes) {
            for (var i = 0; i < t.keyframes.length; i += 1) {
              var a = t.keyframes[i].s;
              a > r && (r = a)
            }
            r *= t.mult
          } else r = t.v * t.mult;
          e.x -= r, e.xMax += r, e.y -= r, e.yMax += r
        }, HShapeElement.prototype.currentBoxContains = function(t) {
          return this.currentBBox.x <= t.x && this.currentBBox.y <= t.y && this.currentBBox.width + this.currentBBox.x >= t.x + t.width && this.currentBBox.height + this.currentBBox.y >= t.y + t.height
        }, HShapeElement.prototype.renderInnerContent = function() {
          if (this._renderShapeFrame(), !this.hidden && (this._isFirstFrame || this._mdf)) {
            var t = this.tempBoundingBox,
              e = 999999;
            if (t.x = e, t.xMax = -e, t.y = e, t.yMax = -e, this.calculateBoundingBox(this.itemsData, t), t.width = t.xMax < t.x ? 0 : t.xMax - t.x, t.height = t.yMax < t.y ? 0 : t.yMax - t.y, this.currentBoxContains(t)) return;
            var r = !1;
            if (this.currentBBox.w !== t.width && (this.currentBBox.w = t.width, this.shapeCont.setAttribute("width", t.width), r = !0), this.currentBBox.h !== t.height && (this.currentBBox.h = t.height, this.shapeCont.setAttribute("height", t.height), r = !0), r || this.currentBBox.x !== t.x || this.currentBBox.y !== t.y) {
              this.currentBBox.w = t.width, this.currentBBox.h = t.height, this.currentBBox.x = t.x, this.currentBBox.y = t.y, this.shapeCont.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h);
              var i = this.shapeCont.style,
                a = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
              i.transform = a, i.webkitTransform = a
            }
          }
        }, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], HTextElement), HTextElement.prototype.createContent = function() {
          if (this.isMasked = this.checkMasks(), this.isMasked) {
            this.renderType = "svg", this.compW = this.comp.data.w, this.compH = this.comp.data.h, this.svgElement.setAttribute("width", this.compW), this.svgElement.setAttribute("height", this.compH);
            var t = createNS("g");
            this.maskedElement.appendChild(t), this.innerElem = t
          } else this.renderType = "html", this.innerElem = this.layerElement;
          this.checkParenting()
        }, HTextElement.prototype.buildNewText = function() {
          var t = this.textProperty.currentData;
          this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
          var e = this.innerElem.style,
            r = t.fc ? this.buildColor(t.fc) : "rgba(0,0,0,0)";
          e.fill = r, e.color = r, t.sc && (e.stroke = this.buildColor(t.sc), e.strokeWidth = t.sw + "px");
          var i, a, s = this.globalData.fontManager.getFontByName(t.f);
          if (!this.globalData.fontManager.chars)
            if (e.fontSize = t.finalSize + "px", e.lineHeight = t.finalSize + "px", s.fClass) this.innerElem.className = s.fClass;
            else {
              e.fontFamily = s.fFamily;
              var n = t.fWeight,
                o = t.fStyle;
              e.fontStyle = o, e.fontWeight = n
            } var l, h, p, c = t.l;
          a = c.length;
          var f, u = this.mHelper,
            d = "",
            m = 0;
          for (i = 0; i < a; i += 1) {
            if (this.globalData.fontManager.chars ? (this.textPaths[m] ? l = this.textPaths[m] : ((l = createNS("path")).setAttribute("stroke-linecap", lineCapEnum[1]), l.setAttribute("stroke-linejoin", lineJoinEnum[2]), l.setAttribute("stroke-miterlimit", "4")), this.isMasked || (this.textSpans[m] ? p = (h = this.textSpans[m]).children[0] : ((h = createTag("div")).style.lineHeight = 0, (p = createNS("svg")).appendChild(l), styleDiv(h)))) : this.isMasked ? l = this.textPaths[m] ? this.textPaths[m] : createNS("text") : this.textSpans[m] ? (h = this.textSpans[m], l = this.textPaths[m]) : (styleDiv(h = createTag("span")), styleDiv(l = createTag("span")), h.appendChild(l)), this.globalData.fontManager.chars) {
              var y, g = this.globalData.fontManager.getCharData(t.finalText[i], s.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily);
              if (y = g ? g.data : null, u.reset(), y && y.shapes && y.shapes.length && (f = y.shapes[0].it, u.scale(t.finalSize / 100, t.finalSize / 100), d = this.createPathShape(u, f), l.setAttribute("d", d)), this.isMasked) this.innerElem.appendChild(l);
              else {
                if (this.innerElem.appendChild(h), y && y.shapes) {
                  document.body.appendChild(p);
                  var v = p.getBBox();
                  p.setAttribute("width", v.width + 2), p.setAttribute("height", v.height + 2), p.setAttribute("viewBox", v.x - 1 + " " + (v.y - 1) + " " + (v.width + 2) + " " + (v.height + 2));
                  var b = p.style,
                    x = "translate(" + (v.x - 1) + "px," + (v.y - 1) + "px)";
                  b.transform = x, b.webkitTransform = x, c[i].yOffset = v.y - 1
                } else p.setAttribute("width", 1), p.setAttribute("height", 1);
                h.appendChild(p)
              }
            } else if (l.textContent = c[i].val, l.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), this.isMasked) this.innerElem.appendChild(l);
            else {
              this.innerElem.appendChild(h);
              var C = l.style,
                A = "translate3d(0," + -t.finalSize / 1.2 + "px,0)";
              C.transform = A, C.webkitTransform = A
            }
            this.isMasked ? this.textSpans[m] = l : this.textSpans[m] = h, this.textSpans[m].style.display = "block", this.textPaths[m] = l, m += 1
          }
          for (; m < this.textSpans.length;) this.textSpans[m].style.display = "none", m += 1
        }, HTextElement.prototype.renderInnerContent = function() {
          var t;
          if (this.validateText(), this.data.singleShape) {
            if (!this._isFirstFrame && !this.lettersChangedFlag) return;
            if (this.isMasked && this.finalTransform._matMdf) {
              this.svgElement.setAttribute("viewBox", -this.finalTransform.mProp.p.v[0] + " " + -this.finalTransform.mProp.p.v[1] + " " + this.compW + " " + this.compH), t = this.svgElement.style;
              var e = "translate(" + -this.finalTransform.mProp.p.v[0] + "px," + -this.finalTransform.mProp.p.v[1] + "px)";
              t.transform = e, t.webkitTransform = e
            }
          }
          if (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag) {
            var r, i, a, s, n, o = 0,
              l = this.textAnimator.renderedLetters,
              h = this.textProperty.currentData.l;
            for (i = h.length, r = 0; r < i; r += 1) h[r].n ? o += 1 : (s = this.textSpans[r], n = this.textPaths[r], a = l[o], o += 1, a._mdf.m && (this.isMasked ? s.setAttribute("transform", a.m) : (s.style.webkitTransform = a.m, s.style.transform = a.m)), s.style.opacity = a.o, a.sw && a._mdf.sw && n.setAttribute("stroke-width", a.sw), a.sc && a._mdf.sc && n.setAttribute("stroke", a.sc), a.fc && a._mdf.fc && (n.setAttribute("fill", a.fc), n.style.color = a.fc));
            if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) {
              var p = this.innerElem.getBBox();
              if (this.currentBBox.w !== p.width && (this.currentBBox.w = p.width, this.svgElement.setAttribute("width", p.width)), this.currentBBox.h !== p.height && (this.currentBBox.h = p.height, this.svgElement.setAttribute("height", p.height)), this.currentBBox.w !== p.width + 2 || this.currentBBox.h !== p.height + 2 || this.currentBBox.x !== p.x - 1 || this.currentBBox.y !== p.y - 1) {
                this.currentBBox.w = p.width + 2, this.currentBBox.h = p.height + 2, this.currentBBox.x = p.x - 1, this.currentBBox.y = p.y - 1, this.svgElement.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), t = this.svgElement.style;
                var c = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
                t.transform = c, t.webkitTransform = c
              }
            }
          }
        }, extendPrototype([BaseElement, FrameElement, HierarchyElement], HCameraElement), HCameraElement.prototype.setup = function() {
          var t, e, r, i, a = this.comp.threeDElements.length;
          for (t = 0; t < a; t += 1)
            if ("3d" === (e = this.comp.threeDElements[t]).type) {
              r = e.perspectiveElem.style, i = e.container.style;
              var s = this.pe.v + "px",
                n = "0px 0px 0px",
                o = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
              r.perspective = s, r.webkitPerspective = s, i.transformOrigin = n, i.mozTransformOrigin = n, i.webkitTransformOrigin = n, r.transform = o, r.webkitTransform = o
            }
        }, HCameraElement.prototype.createElements = function() {}, HCameraElement.prototype.hide = function() {}, HCameraElement.prototype.renderFrame = function() {
          var t, e, r = this._isFirstFrame;
          if (this.hierarchy)
            for (e = this.hierarchy.length, t = 0; t < e; t += 1) r = this.hierarchy[t].finalTransform.mProp._mdf || r;
          if (r || this.pe._mdf || this.p && this.p._mdf || this.px && (this.px._mdf || this.py._mdf || this.pz._mdf) || this.rx._mdf || this.ry._mdf || this.rz._mdf || this.or._mdf || this.a && this.a._mdf) {
            if (this.mat.reset(), this.hierarchy)
              for (t = e = this.hierarchy.length - 1; t >= 0; t -= 1) {
                var i = this.hierarchy[t].finalTransform.mProp;
                this.mat.translate(-i.p.v[0], -i.p.v[1], i.p.v[2]), this.mat.rotateX(-i.or.v[0]).rotateY(-i.or.v[1]).rotateZ(i.or.v[2]), this.mat.rotateX(-i.rx.v).rotateY(-i.ry.v).rotateZ(i.rz.v), this.mat.scale(1 / i.s.v[0], 1 / i.s.v[1], 1 / i.s.v[2]), this.mat.translate(i.a.v[0], i.a.v[1], i.a.v[2])
              }
            if (this.p ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]) : this.mat.translate(-this.px.v, -this.py.v, this.pz.v), this.a) {
              var a;
              a = this.p ? [this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2]] : [this.px.v - this.a.v[0], this.py.v - this.a.v[1], this.pz.v - this.a.v[2]];
              var s = Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2)),
                n = [a[0] / s, a[1] / s, a[2] / s],
                o = Math.sqrt(n[2] * n[2] + n[0] * n[0]),
                l = Math.atan2(n[1], o),
                h = Math.atan2(n[0], -n[2]);
              this.mat.rotateY(h).rotateX(-l)
            }
            this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v), this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]), this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0), this.mat.translate(0, 0, this.pe.v);
            var p = !this._prevMat.equals(this.mat);
            if ((p || this.pe._mdf) && this.comp.threeDElements) {
              var c, f, u;
              for (e = this.comp.threeDElements.length, t = 0; t < e; t += 1)
                if ("3d" === (c = this.comp.threeDElements[t]).type) {
                  if (p) {
                    var d = this.mat.toCSS();
                    (u = c.container.style).transform = d, u.webkitTransform = d
                  }
                  this.pe._mdf && ((f = c.perspectiveElem.style).perspective = this.pe.v + "px", f.webkitPerspective = this.pe.v + "px")
                } this.mat.clone(this._prevMat)
            }
          }
          this._isFirstFrame = !1
        }, HCameraElement.prototype.prepareFrame = function(t) {
          this.prepareProperties(t, !0)
        }, HCameraElement.prototype.destroy = function() {}, HCameraElement.prototype.getBaseElement = function() {
          return null
        }, extendPrototype([BaseElement, TransformElement, HBaseElement, HSolidElement, HierarchyElement, FrameElement, RenderableElement], HImageElement), HImageElement.prototype.createContent = function() {
          var t = this.globalData.getAssetsPath(this.assetData),
            e = new Image;
          this.data.hasMask ? (this.imageElem = createNS("image"), this.imageElem.setAttribute("width", this.assetData.w + "px"), this.imageElem.setAttribute("height", this.assetData.h + "px"), this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.imageElem), this.baseElement.setAttribute("width", this.assetData.w), this.baseElement.setAttribute("height", this.assetData.h)) : this.layerElement.appendChild(e), e.crossOrigin = "anonymous", e.src = t, this.data.ln && this.baseElement.setAttribute("id", this.data.ln)
        }, extendPrototype([BaseRenderer], HybridRendererBase), HybridRendererBase.prototype.buildItem = SVGRenderer.prototype.buildItem, HybridRendererBase.prototype.checkPendingElements = function() {
          for (; this.pendingElements.length;) this.pendingElements.pop().checkParenting()
        }, HybridRendererBase.prototype.appendElementInPos = function(t, e) {
          var r = t.getBaseElement();
          if (r) {
            var i = this.layers[e];
            if (i.ddd && this.supports3d) this.addTo3dContainer(r, e);
            else if (this.threeDElements) this.addTo3dContainer(r, e);
            else {
              for (var a, s, n = 0; n < e;) this.elements[n] && !0 !== this.elements[n] && this.elements[n].getBaseElement && (s = this.elements[n], a = (this.layers[n].ddd ? this.getThreeDContainerByPos(n) : s.getBaseElement()) || a), n += 1;
              a ? i.ddd && this.supports3d || this.layerElement.insertBefore(r, a) : i.ddd && this.supports3d || this.layerElement.appendChild(r)
            }
          }
        }, HybridRendererBase.prototype.createShape = function(t) {
          return this.supports3d ? new HShapeElement(t, this.globalData, this) : new SVGShapeElement(t, this.globalData, this)
        }, HybridRendererBase.prototype.createText = function(t) {
          return this.supports3d ? new HTextElement(t, this.globalData, this) : new SVGTextLottieElement(t, this.globalData, this)
        }, HybridRendererBase.prototype.createCamera = function(t) {
          return this.camera = new HCameraElement(t, this.globalData, this), this.camera
        }, HybridRendererBase.prototype.createImage = function(t) {
          return this.supports3d ? new HImageElement(t, this.globalData, this) : new IImageElement(t, this.globalData, this)
        }, HybridRendererBase.prototype.createSolid = function(t) {
          return this.supports3d ? new HSolidElement(t, this.globalData, this) : new ISolidElement(t, this.globalData, this)
        }, HybridRendererBase.prototype.createNull = SVGRenderer.prototype.createNull, HybridRendererBase.prototype.getThreeDContainerByPos = function(t) {
          for (var e = 0, r = this.threeDElements.length; e < r;) {
            if (this.threeDElements[e].startPos <= t && this.threeDElements[e].endPos >= t) return this.threeDElements[e].perspectiveElem;
            e += 1
          }
          return null
        }, HybridRendererBase.prototype.createThreeDContainer = function(t, e) {
          var r, i, a = createTag("div");
          styleDiv(a);
          var s = createTag("div");
          if (styleDiv(s), "3d" === e) {
            (r = a.style).width = this.globalData.compSize.w + "px", r.height = this.globalData.compSize.h + "px";
            var n = "50% 50%";
            r.webkitTransformOrigin = n, r.mozTransformOrigin = n, r.transformOrigin = n;
            var o = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
            (i = s.style).transform = o, i.webkitTransform = o
          }
          a.appendChild(s);
          var l = {
            container: s,
            perspectiveElem: a,
            startPos: t,
            endPos: t,
            type: e
          };
          return this.threeDElements.push(l), l
        }, HybridRendererBase.prototype.build3dContainers = function() {
          var t, e, r = this.layers.length,
            i = "";
          for (t = 0; t < r; t += 1) this.layers[t].ddd && 3 !== this.layers[t].ty ? ("3d" !== i && (i = "3d", e = this.createThreeDContainer(t, "3d")), e.endPos = Math.max(e.endPos, t)) : ("2d" !== i && (i = "2d", e = this.createThreeDContainer(t, "2d")), e.endPos = Math.max(e.endPos, t));
          for (t = (r = this.threeDElements.length) - 1; t >= 0; t -= 1) this.resizerElem.appendChild(this.threeDElements[t].perspectiveElem)
        }, HybridRendererBase.prototype.addTo3dContainer = function(t, e) {
          for (var r = 0, i = this.threeDElements.length; r < i;) {
            if (e <= this.threeDElements[r].endPos) {
              for (var a, s = this.threeDElements[r].startPos; s < e;) this.elements[s] && this.elements[s].getBaseElement && (a = this.elements[s].getBaseElement()), s += 1;
              a ? this.threeDElements[r].container.insertBefore(t, a) : this.threeDElements[r].container.appendChild(t);
              break
            }
            r += 1
          }
        }, HybridRendererBase.prototype.configAnimation = function(t) {
          var e = createTag("div"),
            r = this.animationItem.wrapper,
            i = e.style;
          i.width = t.w + "px", i.height = t.h + "px", this.resizerElem = e, styleDiv(e), i.transformStyle = "flat", i.mozTransformStyle = "flat", i.webkitTransformStyle = "flat", this.renderConfig.className && e.setAttribute("class", this.renderConfig.className), r.appendChild(e), i.overflow = "hidden";
          var a = createNS("svg");
          a.setAttribute("width", "1"), a.setAttribute("height", "1"), styleDiv(a), this.resizerElem.appendChild(a);
          var s = createNS("defs");
          a.appendChild(s), this.data = t, this.setupGlobalData(t, a), this.globalData.defs = s, this.layers = t.layers, this.layerElement = this.resizerElem, this.build3dContainers(), this.updateContainerSize()
        }, HybridRendererBase.prototype.destroy = function() {
          var t;
          this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.animationItem.container = null, this.globalData.defs = null;
          var e = this.layers ? this.layers.length : 0;
          for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy && this.elements[t].destroy();
          this.elements.length = 0, this.destroyed = !0, this.animationItem = null
        }, HybridRendererBase.prototype.updateContainerSize = function() {
          var t, e, r, i, a = this.animationItem.wrapper.offsetWidth,
            s = this.animationItem.wrapper.offsetHeight,
            n = a / s;
          this.globalData.compSize.w / this.globalData.compSize.h > n ? (t = a / this.globalData.compSize.w, e = a / this.globalData.compSize.w, r = 0, i = (s - this.globalData.compSize.h * (a / this.globalData.compSize.w)) / 2) : (t = s / this.globalData.compSize.h, e = s / this.globalData.compSize.h, r = (a - this.globalData.compSize.w * (s / this.globalData.compSize.h)) / 2, i = 0);
          var o = this.resizerElem.style;
          o.webkitTransform = "matrix3d(" + t + ",0,0,0,0," + e + ",0,0,0,0,1,0," + r + "," + i + ",0,1)", o.transform = o.webkitTransform
        }, HybridRendererBase.prototype.renderFrame = SVGRenderer.prototype.renderFrame, HybridRendererBase.prototype.hide = function() {
          this.resizerElem.style.display = "none"
        }, HybridRendererBase.prototype.show = function() {
          this.resizerElem.style.display = "block"
        }, HybridRendererBase.prototype.initItems = function() {
          if (this.buildAllItems(), this.camera) this.camera.setup();
          else {
            var t, e = this.globalData.compSize.w,
              r = this.globalData.compSize.h,
              i = this.threeDElements.length;
            for (t = 0; t < i; t += 1) {
              var a = this.threeDElements[t].perspectiveElem.style;
              a.webkitPerspective = Math.sqrt(Math.pow(e, 2) + Math.pow(r, 2)) + "px", a.perspective = a.webkitPerspective
            }
          }
        }, HybridRendererBase.prototype.searchExtraCompositions = function(t) {
          var e, r = t.length,
            i = createTag("div");
          for (e = 0; e < r; e += 1)
            if (t[e].xt) {
              var a = this.createComp(t[e], i, this.globalData.comp, null);
              a.initExpressions(), this.globalData.projectInterface.registerComposition(a)
            }
        }, extendPrototype([HybridRendererBase, ICompElement, HBaseElement], HCompElement), HCompElement.prototype._createBaseContainerElements = HCompElement.prototype.createContainerElements, HCompElement.prototype.createContainerElements = function() {
          this._createBaseContainerElements(), this.data.hasMask ? (this.svgElement.setAttribute("width", this.data.w), this.svgElement.setAttribute("height", this.data.h), this.transformedElement = this.baseElement) : this.transformedElement = this.layerElement
        }, HCompElement.prototype.addTo3dContainer = function(t, e) {
          for (var r, i = 0; i < e;) this.elements[i] && this.elements[i].getBaseElement && (r = this.elements[i].getBaseElement()), i += 1;
          r ? this.layerElement.insertBefore(t, r) : this.layerElement.appendChild(t)
        }, HCompElement.prototype.createComp = function(t) {
          return this.supports3d ? new HCompElement(t, this.globalData, this) : new SVGCompElement(t, this.globalData, this)
        }, extendPrototype([HybridRendererBase], HybridRenderer), HybridRenderer.prototype.createComp = function(t) {
          return this.supports3d ? new HCompElement(t, this.globalData, this) : new SVGCompElement(t, this.globalData, this)
        };
        var CompExpressionInterface = function(t) {
          function e(e) {
            for (var r = 0, i = t.layers.length; r < i;) {
              if (t.layers[r].nm === e || t.layers[r].ind === e) return t.elements[r].layerInterface;
              r += 1
            }
            return null
          }
          return Object.defineProperty(e, "_name", {
            value: t.data.nm
          }), e.layer = e, e.pixelAspect = 1, e.height = t.data.h || t.globalData.compSize.h, e.width = t.data.w || t.globalData.compSize.w, e.pixelAspect = 1, e.frameDuration = 1 / t.globalData.frameRate, e.displayStartTime = 0, e.numLayers = t.layers.length, e
        };

        function _typeof$2(t) {
          return _typeof$2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
          } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
          }, _typeof$2(t)
        }

        function seedRandom(t, e) {
          var r, i = this,
            a = 256,
            s = "random",
            n = e.pow(a, 6),
            o = e.pow(2, 52),
            l = 2 * o,
            h = 255;

          function p(t) {
            var e, r = t.length,
              i = this,
              s = 0,
              n = i.i = i.j = 0,
              o = i.S = [];
            for (r || (t = [r++]); s < a;) o[s] = s++;
            for (s = 0; s < a; s++) o[s] = o[n = h & n + t[s % r] + (e = o[s])], o[n] = e;
            i.g = function(t) {
              for (var e, r = 0, s = i.i, n = i.j, o = i.S; t--;) e = o[s = h & s + 1], r = r * a + o[h & (o[s] = o[n = h & n + e]) + (o[n] = e)];
              return i.i = s, i.j = n, r
            }
          }

          function c(t, e) {
            return e.i = t.i, e.j = t.j, e.S = t.S.slice(), e
          }

          function f(t, e) {
            var r, i = [],
              a = _typeof$2(t);
            if (e && "object" == a)
              for (r in t) try {
                i.push(f(t[r], e - 1))
              } catch (t) {}
            return i.length ? i : "string" == a ? t : t + "\0"
          }

          function u(t, e) {
            for (var r, i = t + "", a = 0; a < i.length;) e[h & a] = h & (r ^= 19 * e[h & a]) + i.charCodeAt(a++);
            return d(e)
          }

          function d(t) {
            return String.fromCharCode.apply(0, t)
          }
          e["seed" + s] = function(h, m, y) {
            var g = [],
              v = u(f((m = !0 === m ? {
                entropy: !0
              } : m || {}).entropy ? [h, d(t)] : null === h ? function() {
                try {
                  r;
                  var e = new Uint8Array(a);
                  return (i.crypto || i.msCrypto).getRandomValues(e), d(e)
                } catch (e) {
                  var s = i.navigator,
                    n = s && s.plugins;
                  return [+new Date, i, n, i.screen, d(t)]
                }
              }() : h, 3), g),
              b = new p(g),
              x = function() {
                for (var t = b.g(6), e = n, r = 0; t < o;) t = (t + r) * a, e *= a, r = b.g(1);
                for (; t >= l;) t /= 2, e /= 2, r >>>= 1;
                return (t + r) / e
              };
            return x.int32 = function() {
              return 0 | b.g(4)
            }, x.quick = function() {
              return b.g(4) / 4294967296
            }, x.double = x, u(d(b.S), t), (m.pass || y || function(t, r, i, a) {
              return a && (a.S && c(a, b), t.state = function() {
                return c(b, {})
              }), i ? (e[s] = t, r) : t
            })(x, v, "global" in m ? m.global : this == e, m.state)
          }, u(e.random(), t)
        }

        function initialize$2(t) {
          seedRandom([], t)
        }
        var propTypes = {
          SHAPE: "shape"
        };

        function _typeof$1(t) {
          return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
          } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
          }, _typeof$1(t)
        }
        var ExpressionManager = function() {
            var ob = {},
              Math = BMMath,
              window = null,
              document = null,
              XMLHttpRequest = null,
              fetch = null,
              frames = null,
              _lottieGlobal = {};

            function resetFrame() {
              _lottieGlobal = {}
            }

            function $bm_isInstanceOfArray(t) {
              return t.constructor === Array || t.constructor === Float32Array
            }

            function isNumerable(t, e) {
              return "number" === t || e instanceof Number || "boolean" === t || "string" === t
            }

            function $bm_neg(t) {
              var e = _typeof$1(t);
              if ("number" === e || t instanceof Number || "boolean" === e) return -t;
              if ($bm_isInstanceOfArray(t)) {
                var r, i = t.length,
                  a = [];
                for (r = 0; r < i; r += 1) a[r] = -t[r];
                return a
              }
              return t.propType ? t.v : -t
            }
            initialize$2(BMMath);
            var easeInBez = BezierFactory.getBezierEasing(.333, 0, .833, .833, "easeIn").get,
              easeOutBez = BezierFactory.getBezierEasing(.167, .167, .667, 1, "easeOut").get,
              easeInOutBez = BezierFactory.getBezierEasing(.33, 0, .667, 1, "easeInOut").get;

            function sum(t, e) {
              var r = _typeof$1(t),
                i = _typeof$1(e);
              if (isNumerable(r, t) && isNumerable(i, e) || "string" === r || "string" === i) return t + e;
              if ($bm_isInstanceOfArray(t) && isNumerable(i, e)) return (t = t.slice(0))[0] += e, t;
              if (isNumerable(r, t) && $bm_isInstanceOfArray(e)) return (e = e.slice(0))[0] = t + e[0], e;
              if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                for (var a = 0, s = t.length, n = e.length, o = []; a < s || a < n;)("number" == typeof t[a] || t[a] instanceof Number) && ("number" == typeof e[a] || e[a] instanceof Number) ? o[a] = t[a] + e[a] : o[a] = void 0 === e[a] ? t[a] : t[a] || e[a], a += 1;
                return o
              }
              return 0
            }
            var add = sum;

            function sub(t, e) {
              var r = _typeof$1(t),
                i = _typeof$1(e);
              if (isNumerable(r, t) && isNumerable(i, e)) return "string" === r && (t = parseInt(t, 10)), "string" === i && (e = parseInt(e, 10)), t - e;
              if ($bm_isInstanceOfArray(t) && isNumerable(i, e)) return (t = t.slice(0))[0] -= e, t;
              if (isNumerable(r, t) && $bm_isInstanceOfArray(e)) return (e = e.slice(0))[0] = t - e[0], e;
              if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                for (var a = 0, s = t.length, n = e.length, o = []; a < s || a < n;)("number" == typeof t[a] || t[a] instanceof Number) && ("number" == typeof e[a] || e[a] instanceof Number) ? o[a] = t[a] - e[a] : o[a] = void 0 === e[a] ? t[a] : t[a] || e[a], a += 1;
                return o
              }
              return 0
            }

            function mul(t, e) {
              var r, i, a, s = _typeof$1(t),
                n = _typeof$1(e);
              if (isNumerable(s, t) && isNumerable(n, e)) return t * e;
              if ($bm_isInstanceOfArray(t) && isNumerable(n, e)) {
                for (a = t.length, r = createTypedArray("float32", a), i = 0; i < a; i += 1) r[i] = t[i] * e;
                return r
              }
              if (isNumerable(s, t) && $bm_isInstanceOfArray(e)) {
                for (a = e.length, r = createTypedArray("float32", a), i = 0; i < a; i += 1) r[i] = t * e[i];
                return r
              }
              return 0
            }

            function div(t, e) {
              var r, i, a, s = _typeof$1(t),
                n = _typeof$1(e);
              if (isNumerable(s, t) && isNumerable(n, e)) return t / e;
              if ($bm_isInstanceOfArray(t) && isNumerable(n, e)) {
                for (a = t.length, r = createTypedArray("float32", a), i = 0; i < a; i += 1) r[i] = t[i] / e;
                return r
              }
              if (isNumerable(s, t) && $bm_isInstanceOfArray(e)) {
                for (a = e.length, r = createTypedArray("float32", a), i = 0; i < a; i += 1) r[i] = t / e[i];
                return r
              }
              return 0
            }

            function mod(t, e) {
              return "string" == typeof t && (t = parseInt(t, 10)), "string" == typeof e && (e = parseInt(e, 10)), t % e
            }
            var $bm_sum = sum,
              $bm_sub = sub,
              $bm_mul = mul,
              $bm_div = div,
              $bm_mod = mod;

            function clamp(t, e, r) {
              if (e > r) {
                var i = r;
                r = e, e = i
              }
              return Math.min(Math.max(t, e), r)
            }

            function radiansToDegrees(t) {
              return t / degToRads
            }
            var radians_to_degrees = radiansToDegrees;

            function degreesToRadians(t) {
              return t * degToRads
            }
            var degrees_to_radians = radiansToDegrees,
              helperLengthArray = [0, 0, 0, 0, 0, 0];

            function length(t, e) {
              if ("number" == typeof t || t instanceof Number) return e = e || 0, Math.abs(t - e);
              var r;
              e || (e = helperLengthArray);
              var i = Math.min(t.length, e.length),
                a = 0;
              for (r = 0; r < i; r += 1) a += Math.pow(e[r] - t[r], 2);
              return Math.sqrt(a)
            }

            function normalize(t) {
              return div(t, length(t))
            }

            function rgbToHsl(t) {
              var e, r, i = t[0],
                a = t[1],
                s = t[2],
                n = Math.max(i, a, s),
                o = Math.min(i, a, s),
                l = (n + o) / 2;
              if (n === o) e = 0, r = 0;
              else {
                var h = n - o;
                switch (r = l > .5 ? h / (2 - n - o) : h / (n + o), n) {
                  case i:
                    e = (a - s) / h + (a < s ? 6 : 0);
                    break;
                  case a:
                    e = (s - i) / h + 2;
                    break;
                  case s:
                    e = (i - a) / h + 4
                }
                e /= 6
              }
              return [e, r, l, t[3]]
            }

            function hue2rgb(t, e, r) {
              return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? t + 6 * (e - t) * r : r < .5 ? e : r < 2 / 3 ? t + (e - t) * (2 / 3 - r) * 6 : t
            }

            function hslToRgb(t) {
              var e, r, i, a = t[0],
                s = t[1],
                n = t[2];
              if (0 === s) e = n, i = n, r = n;
              else {
                var o = n < .5 ? n * (1 + s) : n + s - n * s,
                  l = 2 * n - o;
                e = hue2rgb(l, o, a + 1 / 3), r = hue2rgb(l, o, a), i = hue2rgb(l, o, a - 1 / 3)
              }
              return [e, r, i, t[3]]
            }

            function linear(t, e, r, i, a) {
              if (void 0 !== i && void 0 !== a || (i = e, a = r, e = 0, r = 1), r < e) {
                var s = r;
                r = e, e = s
              }
              if (t <= e) return i;
              if (t >= r) return a;
              var n, o = r === e ? 0 : (t - e) / (r - e);
              if (!i.length) return i + (a - i) * o;
              var l = i.length,
                h = createTypedArray("float32", l);
              for (n = 0; n < l; n += 1) h[n] = i[n] + (a[n] - i[n]) * o;
              return h
            }

            function random(t, e) {
              if (void 0 === e && (void 0 === t ? (t = 0, e = 1) : (e = t, t = void 0)), e.length) {
                var r, i = e.length;
                t || (t = createTypedArray("float32", i));
                var a = createTypedArray("float32", i),
                  s = BMMath.random();
                for (r = 0; r < i; r += 1) a[r] = t[r] + s * (e[r] - t[r]);
                return a
              }
              return void 0 === t && (t = 0), t + BMMath.random() * (e - t)
            }

            function createPath(t, e, r, i) {
              var a, s = t.length,
                n = shapePool.newElement();
              n.setPathData(!!i, s);
              var o, l, h = [0, 0];
              for (a = 0; a < s; a += 1) o = e && e[a] ? e[a] : h, l = r && r[a] ? r[a] : h, n.setTripleAt(t[a][0], t[a][1], l[0] + t[a][0], l[1] + t[a][1], o[0] + t[a][0], o[1] + t[a][1], a, !0);
              return n
            }

            function initiateExpression(elem, data, property) {
              function noOp(t) {
                return t
              }
              if (!elem.globalData.renderConfig.runExpressions) return noOp;
              var val = data.x,
                needsVelocity = /velocity(?![\w\d])/.test(val),
                _needsRandom = -1 !== val.indexOf("random"),
                elemType = elem.data.ty,
                transform, $bm_transform, content, effect, thisProperty = property;
              thisProperty.valueAtTime = thisProperty.getValueAtTime, Object.defineProperty(thisProperty, "value", {
                get: function() {
                  return thisProperty.v
                }
              }), elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate, elem.comp.displayStartTime = 0;
              var inPoint = elem.data.ip / elem.comp.globalData.frameRate,
                outPoint = elem.data.op / elem.comp.globalData.frameRate,
                width = elem.data.sw ? elem.data.sw : 0,
                height = elem.data.sh ? elem.data.sh : 0,
                name = elem.data.nm,
                loopIn, loop_in, loopOut, loop_out, smooth, toWorld, fromWorld, fromComp, toComp, fromCompToSurface, position, rotation, anchorPoint, scale, thisLayer, thisComp, mask, valueAtTime, velocityAtTime, scoped_bm_rt, expression_function = eval("[function _expression_function(){" + val + ";scoped_bm_rt=$bm_rt}]")[0],
                numKeys = property.kf ? data.k.length : 0,
                active = !this.data || !0 !== this.data.hd,
                wiggle = function(t, e) {
                  var r, i, a = this.pv.length ? this.pv.length : 1,
                    s = createTypedArray("float32", a),
                    n = Math.floor(5 * time);
                  for (r = 0, i = 0; r < n;) {
                    for (i = 0; i < a; i += 1) s[i] += -e + 2 * e * BMMath.random();
                    r += 1
                  }
                  var o = 5 * time,
                    l = o - Math.floor(o),
                    h = createTypedArray("float32", a);
                  if (a > 1) {
                    for (i = 0; i < a; i += 1) h[i] = this.pv[i] + s[i] + (-e + 2 * e * BMMath.random()) * l;
                    return h
                  }
                  return this.pv + s[0] + (-e + 2 * e * BMMath.random()) * l
                }.bind(this);

              function loopInDuration(t, e) {
                return loopIn(t, e, !0)
              }

              function loopOutDuration(t, e) {
                return loopOut(t, e, !0)
              }
              thisProperty.loopIn && (loopIn = thisProperty.loopIn.bind(thisProperty), loop_in = loopIn), thisProperty.loopOut && (loopOut = thisProperty.loopOut.bind(thisProperty), loop_out = loopOut), thisProperty.smooth && (smooth = thisProperty.smooth.bind(thisProperty)), this.getValueAtTime && (valueAtTime = this.getValueAtTime.bind(this)), this.getVelocityAtTime && (velocityAtTime = this.getVelocityAtTime.bind(this));
              var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface),
                time, velocity, value, text, textIndex, textTotal, selectorValue;

              function lookAt(t, e) {
                var r = [e[0] - t[0], e[1] - t[1], e[2] - t[2]],
                  i = Math.atan2(r[0], Math.sqrt(r[1] * r[1] + r[2] * r[2])) / degToRads;
                return [-Math.atan2(r[1], r[2]) / degToRads, i, 0]
              }

              function easeOut(t, e, r, i, a) {
                return applyEase(easeOutBez, t, e, r, i, a)
              }

              function easeIn(t, e, r, i, a) {
                return applyEase(easeInBez, t, e, r, i, a)
              }

              function ease(t, e, r, i, a) {
                return applyEase(easeInOutBez, t, e, r, i, a)
              }

              function applyEase(t, e, r, i, a, s) {
                void 0 === a ? (a = r, s = i) : e = (e - r) / (i - r), e > 1 ? e = 1 : e < 0 && (e = 0);
                var n = t(e);
                if ($bm_isInstanceOfArray(a)) {
                  var o, l = a.length,
                    h = createTypedArray("float32", l);
                  for (o = 0; o < l; o += 1) h[o] = (s[o] - a[o]) * n + a[o];
                  return h
                }
                return (s - a) * n + a
              }

              function nearestKey(t) {
                var e, r, i, a = data.k.length;
                if (data.k.length && "number" != typeof data.k[0])
                  if (r = -1, (t *= elem.comp.globalData.frameRate) < data.k[0].t) r = 1, i = data.k[0].t;
                  else {
                    for (e = 0; e < a - 1; e += 1) {
                      if (t === data.k[e].t) {
                        r = e + 1, i = data.k[e].t;
                        break
                      }
                      if (t > data.k[e].t && t < data.k[e + 1].t) {
                        t - data.k[e].t > data.k[e + 1].t - t ? (r = e + 2, i = data.k[e + 1].t) : (r = e + 1, i = data.k[e].t);
                        break
                      }
                    } - 1 === r && (r = e + 1, i = data.k[e].t)
                  }
                else r = 0, i = 0;
                var s = {};
                return s.index = r, s.time = i / elem.comp.globalData.frameRate, s
              }

              function key(t) {
                var e, r, i;
                if (!data.k.length || "number" == typeof data.k[0]) throw new Error("The property has no keyframe at index " + t);
                t -= 1, e = {
                  time: data.k[t].t / elem.comp.globalData.frameRate,
                  value: []
                };
                var a = Object.prototype.hasOwnProperty.call(data.k[t], "s") ? data.k[t].s : data.k[t - 1].e;
                for (i = a.length, r = 0; r < i; r += 1) e[r] = a[r], e.value[r] = a[r];
                return e
              }

              function framesToTime(t, e) {
                return e || (e = elem.comp.globalData.frameRate), t / e
              }

              function timeToFrames(t, e) {
                return t || 0 === t || (t = time), e || (e = elem.comp.globalData.frameRate), t * e
              }

              function seedRandom(t) {
                BMMath.seedrandom(randSeed + t)
              }

              function sourceRectAtTime() {
                return elem.sourceRectAtTime()
              }

              function substring(t, e) {
                return "string" == typeof value ? void 0 === e ? value.substring(t) : value.substring(t, e) : ""
              }

              function substr(t, e) {
                return "string" == typeof value ? void 0 === e ? value.substr(t) : value.substr(t, e) : ""
              }

              function posterizeTime(t) {
                time = 0 === t ? 0 : Math.floor(time * t) / t, value = valueAtTime(time)
              }
              var index = elem.data.ind,
                hasParent = !(!elem.hierarchy || !elem.hierarchy.length),
                parent, randSeed = Math.floor(1e6 * Math.random()),
                globalData = elem.globalData;

              function executeExpression(t) {
                return value = t, this.frameExpressionId === elem.globalData.frameId && "textSelector" !== this.propType ? value : ("textSelector" === this.propType && (textIndex = this.textIndex, textTotal = this.textTotal, selectorValue = this.selectorValue), thisLayer || (text = elem.layerInterface.text, thisLayer = elem.layerInterface, thisComp = elem.comp.compInterface, toWorld = thisLayer.toWorld.bind(thisLayer), fromWorld = thisLayer.fromWorld.bind(thisLayer), fromComp = thisLayer.fromComp.bind(thisLayer), toComp = thisLayer.toComp.bind(thisLayer), mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null, fromCompToSurface = fromComp), transform || (transform = elem.layerInterface("ADBE Transform Group"), $bm_transform = transform, transform && (anchorPoint = transform.anchorPoint)), 4 !== elemType || content || (content = thisLayer("ADBE Root Vectors Group")), effect || (effect = thisLayer(4)), (hasParent = !(!elem.hierarchy || !elem.hierarchy.length)) && !parent && (parent = elem.hierarchy[0].layerInterface), time = this.comp.renderedFrame / this.comp.globalData.frameRate, _needsRandom && seedRandom(randSeed + time), needsVelocity && (velocity = velocityAtTime(time)), expression_function(), this.frameExpressionId = elem.globalData.frameId, scoped_bm_rt = scoped_bm_rt.propType === propTypes.SHAPE ? scoped_bm_rt.v : scoped_bm_rt)
              }
              return executeExpression.__preventDeadCodeRemoval = [$bm_transform, anchorPoint, time, velocity, inPoint, outPoint, width, height, name, loop_in, loop_out, smooth, toComp, fromCompToSurface, toWorld, fromWorld, mask, position, rotation, scale, thisComp, numKeys, active, wiggle, loopInDuration, loopOutDuration, comp, lookAt, easeOut, easeIn, ease, nearestKey, key, text, textIndex, textTotal, selectorValue, framesToTime, timeToFrames, sourceRectAtTime, substring, substr, posterizeTime, index, globalData], executeExpression
            }
            return ob.initiateExpression = initiateExpression, ob.__preventDeadCodeRemoval = [window, document, XMLHttpRequest, fetch, frames, $bm_neg, add, $bm_sum, $bm_sub, $bm_mul, $bm_div, $bm_mod, clamp, radians_to_degrees, degreesToRadians, degrees_to_radians, normalize, rgbToHsl, hslToRgb, linear, random, createPath, _lottieGlobal], ob.resetFrame = resetFrame, ob
          }(),
          Expressions = function() {
            var t = {
              initExpressions: function(t) {
                var e = 0,
                  r = [];
                t.renderer.compInterface = CompExpressionInterface(t.renderer), t.renderer.globalData.projectInterface.registerComposition(t.renderer), t.renderer.globalData.pushExpression = function() {
                  e += 1
                }, t.renderer.globalData.popExpression = function() {
                  0 == (e -= 1) && function() {
                    var t, e = r.length;
                    for (t = 0; t < e; t += 1) r[t].release();
                    r.length = 0
                  }()
                }, t.renderer.globalData.registerExpressionProperty = function(t) {
                  -1 === r.indexOf(t) && r.push(t)
                }
              }
            };
            return t.resetFrame = ExpressionManager.resetFrame, t
          }(),
          MaskManagerInterface = function() {
            function t(t, e) {
              this._mask = t, this._data = e
            }
            return Object.defineProperty(t.prototype, "maskPath", {
                get: function() {
                  return this._mask.prop.k && this._mask.prop.getValue(), this._mask.prop
                }
              }), Object.defineProperty(t.prototype, "maskOpacity", {
                get: function() {
                  return this._mask.op.k && this._mask.op.getValue(), 100 * this._mask.op.v
                }
              }),
              function(e) {
                var r, i = createSizedArray(e.viewData.length),
                  a = e.viewData.length;
                for (r = 0; r < a; r += 1) i[r] = new t(e.viewData[r], e.masksProperties[r]);
                return function(t) {
                  for (r = 0; r < a;) {
                    if (e.masksProperties[r].nm === t) return i[r];
                    r += 1
                  }
                  return null
                }
              }
          }(),
          ExpressionPropertyInterface = function() {
            var t = {
                pv: 0,
                v: 0,
                mult: 1
              },
              e = {
                pv: [0, 0, 0],
                v: [0, 0, 0],
                mult: 1
              };

            function r(t, e, r) {
              Object.defineProperty(t, "velocity", {
                get: function() {
                  return e.getVelocityAtTime(e.comp.currentFrame)
                }
              }), t.numKeys = e.keyframes ? e.keyframes.length : 0, t.key = function(i) {
                if (!t.numKeys) return 0;
                var a;
                a = "s" in e.keyframes[i - 1] ? e.keyframes[i - 1].s : "e" in e.keyframes[i - 2] ? e.keyframes[i - 2].e : e.keyframes[i - 2].s;
                var s = "unidimensional" === r ? new Number(a) : Object.assign({}, a);
                return s.time = e.keyframes[i - 1].t / e.elem.comp.globalData.frameRate, s.value = "unidimensional" === r ? a[0] : a, s
              }, t.valueAtTime = e.getValueAtTime, t.speedAtTime = e.getSpeedAtTime, t.velocityAtTime = e.getVelocityAtTime, t.propertyGroup = e.propertyGroup
            }

            function i() {
              return t
            }
            return function(a) {
              return a ? "unidimensional" === a.propType ? function(e) {
                e && "pv" in e || (e = t);
                var i = 1 / e.mult,
                  a = e.pv * i,
                  s = new Number(a);
                return s.value = a, r(s, e, "unidimensional"),
                  function() {
                    return e.k && e.getValue(), a = e.v * i, s.value !== a && ((s = new Number(a)).value = a, r(s, e, "unidimensional")), s
                  }
              }(a) : function(t) {
                t && "pv" in t || (t = e);
                var i = 1 / t.mult,
                  a = t.data && t.data.l || t.pv.length,
                  s = createTypedArray("float32", a),
                  n = createTypedArray("float32", a);
                return s.value = n, r(s, t, "multidimensional"),
                  function() {
                    t.k && t.getValue();
                    for (var e = 0; e < a; e += 1) n[e] = t.v[e] * i, s[e] = n[e];
                    return s
                  }
              }(a) : i
            }
          }(),
          TransformExpressionInterface = function(t) {
            function e(t) {
              switch (t) {
                case "scale":
                case "Scale":
                case "ADBE Scale":
                case 6:
                  return e.scale;
                case "rotation":
                case "Rotation":
                case "ADBE Rotation":
                case "ADBE Rotate Z":
                case 10:
                  return e.rotation;
                case "ADBE Rotate X":
                  return e.xRotation;
                case "ADBE Rotate Y":
                  return e.yRotation;
                case "position":
                case "Position":
                case "ADBE Position":
                case 2:
                  return e.position;
                case "ADBE Position_0":
                  return e.xPosition;
                case "ADBE Position_1":
                  return e.yPosition;
                case "ADBE Position_2":
                  return e.zPosition;
                case "anchorPoint":
                case "AnchorPoint":
                case "Anchor Point":
                case "ADBE AnchorPoint":
                case 1:
                  return e.anchorPoint;
                case "opacity":
                case "Opacity":
                case 11:
                  return e.opacity;
                default:
                  return null
              }
            }
            var r, i, a, s;
            return Object.defineProperty(e, "rotation", {
              get: ExpressionPropertyInterface(t.r || t.rz)
            }), Object.defineProperty(e, "zRotation", {
              get: ExpressionPropertyInterface(t.rz || t.r)
            }), Object.defineProperty(e, "xRotation", {
              get: ExpressionPropertyInterface(t.rx)
            }), Object.defineProperty(e, "yRotation", {
              get: ExpressionPropertyInterface(t.ry)
            }), Object.defineProperty(e, "scale", {
              get: ExpressionPropertyInterface(t.s)
            }), t.p ? s = ExpressionPropertyInterface(t.p) : (r = ExpressionPropertyInterface(t.px), i = ExpressionPropertyInterface(t.py), t.pz && (a = ExpressionPropertyInterface(t.pz))), Object.defineProperty(e, "position", {
              get: function() {
                return t.p ? s() : [r(), i(), a ? a() : 0]
              }
            }), Object.defineProperty(e, "xPosition", {
              get: ExpressionPropertyInterface(t.px)
            }), Object.defineProperty(e, "yPosition", {
              get: ExpressionPropertyInterface(t.py)
            }), Object.defineProperty(e, "zPosition", {
              get: ExpressionPropertyInterface(t.pz)
            }), Object.defineProperty(e, "anchorPoint", {
              get: ExpressionPropertyInterface(t.a)
            }), Object.defineProperty(e, "opacity", {
              get: ExpressionPropertyInterface(t.o)
            }), Object.defineProperty(e, "skew", {
              get: ExpressionPropertyInterface(t.sk)
            }), Object.defineProperty(e, "skewAxis", {
              get: ExpressionPropertyInterface(t.sa)
            }), Object.defineProperty(e, "orientation", {
              get: ExpressionPropertyInterface(t.or)
            }), e
          },
          LayerExpressionInterface = function() {
            function t(t) {
              var e = new Matrix;
              return void 0 !== t ? this._elem.finalTransform.mProp.getValueAtTime(t).clone(e) : this._elem.finalTransform.mProp.applyToMatrix(e), e
            }

            function e(t, e) {
              var r = this.getMatrix(e);
              return r.props[12] = 0, r.props[13] = 0, r.props[14] = 0, this.applyPoint(r, t)
            }

            function r(t, e) {
              var r = this.getMatrix(e);
              return this.applyPoint(r, t)
            }

            function i(t, e) {
              var r = this.getMatrix(e);
              return r.props[12] = 0, r.props[13] = 0, r.props[14] = 0, this.invertPoint(r, t)
            }

            function a(t, e) {
              var r = this.getMatrix(e);
              return this.invertPoint(r, t)
            }

            function s(t, e) {
              if (this._elem.hierarchy && this._elem.hierarchy.length) {
                var r, i = this._elem.hierarchy.length;
                for (r = 0; r < i; r += 1) this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(t)
              }
              return t.applyToPointArray(e[0], e[1], e[2] || 0)
            }

            function n(t, e) {
              if (this._elem.hierarchy && this._elem.hierarchy.length) {
                var r, i = this._elem.hierarchy.length;
                for (r = 0; r < i; r += 1) this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(t)
              }
              return t.inversePoint(e)
            }

            function o(t) {
              var e = new Matrix;
              if (e.reset(), this._elem.finalTransform.mProp.applyToMatrix(e), this._elem.hierarchy && this._elem.hierarchy.length) {
                var r, i = this._elem.hierarchy.length;
                for (r = 0; r < i; r += 1) this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(e);
                return e.inversePoint(t)
              }
              return e.inversePoint(t)
            }

            function l() {
              return [1, 1, 1, 1]
            }
            return function(h) {
              var p;

              function c(t) {
                switch (t) {
                  case "ADBE Root Vectors Group":
                  case "Contents":
                  case 2:
                    return c.shapeInterface;
                  case 1:
                  case 6:
                  case "Transform":
                  case "transform":
                  case "ADBE Transform Group":
                    return p;
                  case 4:
                  case "ADBE Effect Parade":
                  case "effects":
                  case "Effects":
                    return c.effect;
                  case "ADBE Text Properties":
                    return c.textInterface;
                  default:
                    return null
                }
              }
              c.getMatrix = t, c.invertPoint = n, c.applyPoint = s, c.toWorld = r, c.toWorldVec = e, c.fromWorld = a, c.fromWorldVec = i, c.toComp = r, c.fromComp = o, c.sampleImage = l, c.sourceRectAtTime = h.sourceRectAtTime.bind(h), c._elem = h;
              var f = getDescriptor(p = TransformExpressionInterface(h.finalTransform.mProp), "anchorPoint");
              return Object.defineProperties(c, {
                hasParent: {
                  get: function() {
                    return h.hierarchy.length
                  }
                },
                parent: {
                  get: function() {
                    return h.hierarchy[0].layerInterface
                  }
                },
                rotation: getDescriptor(p, "rotation"),
                scale: getDescriptor(p, "scale"),
                position: getDescriptor(p, "position"),
                opacity: getDescriptor(p, "opacity"),
                anchorPoint: f,
                anchor_point: f,
                transform: {
                  get: function() {
                    return p
                  }
                },
                active: {
                  get: function() {
                    return h.isInRange
                  }
                }
              }), c.startTime = h.data.st, c.index = h.data.ind, c.source = h.data.refId, c.height = 0 === h.data.ty ? h.data.h : 100, c.width = 0 === h.data.ty ? h.data.w : 100, c.inPoint = h.data.ip / h.comp.globalData.frameRate, c.outPoint = h.data.op / h.comp.globalData.frameRate, c._name = h.data.nm, c.registerMaskInterface = function(t) {
                c.mask = new MaskManagerInterface(t, h)
              }, c.registerEffectsInterface = function(t) {
                c.effect = t
              }, c
            }
          }(),
          propertyGroupFactory = function(t, e) {
            return function(r) {
              return (r = void 0 === r ? 1 : r) <= 0 ? t : e(r - 1)
            }
          },
          PropertyInterface = function(t, e) {
            var r = {
              _name: t
            };
            return function(t) {
              return (t = void 0 === t ? 1 : t) <= 0 ? r : e(t - 1)
            }
          },
          EffectsExpressionInterface = function() {
            function t(r, i, a, s) {
              function n(t) {
                for (var e = r.ef, i = 0, a = e.length; i < a;) {
                  if (t === e[i].nm || t === e[i].mn || t === e[i].ix) return 5 === e[i].ty ? h[i] : h[i]();
                  i += 1
                }
                throw new Error
              }
              var o, l = propertyGroupFactory(n, a),
                h = [],
                p = r.ef.length;
              for (o = 0; o < p; o += 1) 5 === r.ef[o].ty ? h.push(t(r.ef[o], i.effectElements[o], i.effectElements[o].propertyGroup, s)) : h.push(e(i.effectElements[o], r.ef[o].ty, s, l));
              return "ADBE Color Control" === r.mn && Object.defineProperty(n, "color", {
                get: function() {
                  return h[0]()
                }
              }), Object.defineProperties(n, {
                numProperties: {
                  get: function() {
                    return r.np
                  }
                },
                _name: {
                  value: r.nm
                },
                propertyGroup: {
                  value: l
                }
              }), n.enabled = 0 !== r.en, n.active = n.enabled, n
            }

            function e(t, e, r, i) {
              var a = ExpressionPropertyInterface(t.p);
              return t.p.setGroupProperty && t.p.setGroupProperty(PropertyInterface("", i)),
                function() {
                  return 10 === e ? r.comp.compInterface(t.p.v) : a()
                }
            }
            return {
              createEffectsInterface: function(e, r) {
                if (e.effectsManager) {
                  var i, a = [],
                    s = e.data.ef,
                    n = e.effectsManager.effectElements.length;
                  for (i = 0; i < n; i += 1) a.push(t(s[i], e.effectsManager.effectElements[i], r, e));
                  var o = e.data.ef || [],
                    l = function(t) {
                      for (i = 0, n = o.length; i < n;) {
                        if (t === o[i].nm || t === o[i].mn || t === o[i].ix) return a[i];
                        i += 1
                      }
                      return null
                    };
                  return Object.defineProperty(l, "numProperties", {
                    get: function() {
                      return o.length
                    }
                  }), l
                }
                return null
              }
            }
          }(),
          ShapePathInterface = function(t, e, r) {
            var i = e.sh;

            function a(t) {
              return "Shape" === t || "shape" === t || "Path" === t || "path" === t || "ADBE Vector Shape" === t || 2 === t ? a.path : null
            }
            var s = propertyGroupFactory(a, r);
            return i.setGroupProperty(PropertyInterface("Path", s)), Object.defineProperties(a, {
              path: {
                get: function() {
                  return i.k && i.getValue(), i
                }
              },
              shape: {
                get: function() {
                  return i.k && i.getValue(), i
                }
              },
              _name: {
                value: t.nm
              },
              ix: {
                value: t.ix
              },
              propertyIndex: {
                value: t.ix
              },
              mn: {
                value: t.mn
              },
              propertyGroup: {
                value: r
              }
            }), a
          },
          ShapeExpressionInterface = function() {
            function t(t, n, f) {
              var u, d = [],
                m = t ? t.length : 0;
              for (u = 0; u < m; u += 1) "gr" === t[u].ty ? d.push(e(t[u], n[u], f)) : "fl" === t[u].ty ? d.push(r(t[u], n[u], f)) : "st" === t[u].ty ? d.push(a(t[u], n[u], f)) : "tm" === t[u].ty ? d.push(s(t[u], n[u], f)) : "tr" === t[u].ty || ("el" === t[u].ty ? d.push(o(t[u], n[u], f)) : "sr" === t[u].ty ? d.push(l(t[u], n[u], f)) : "sh" === t[u].ty ? d.push(ShapePathInterface(t[u], n[u], f)) : "rc" === t[u].ty ? d.push(h(t[u], n[u], f)) : "rd" === t[u].ty ? d.push(p(t[u], n[u], f)) : "rp" === t[u].ty ? d.push(c(t[u], n[u], f)) : "gf" === t[u].ty ? d.push(i(t[u], n[u], f)) : d.push((t[u], n[u], function() {
                return null
              })));
              return d
            }

            function e(e, r, i) {
              var a = function(t) {
                switch (t) {
                  case "ADBE Vectors Group":
                  case "Contents":
                  case 2:
                    return a.content;
                  default:
                    return a.transform
                }
              };
              a.propertyGroup = propertyGroupFactory(a, i);
              var s = function(e, r, i) {
                  var a, s = function(t) {
                    for (var e = 0, r = a.length; e < r;) {
                      if (a[e]._name === t || a[e].mn === t || a[e].propertyIndex === t || a[e].ix === t || a[e].ind === t) return a[e];
                      e += 1
                    }
                    return "number" == typeof t ? a[t - 1] : null
                  };
                  s.propertyGroup = propertyGroupFactory(s, i), a = t(e.it, r.it, s.propertyGroup), s.numProperties = a.length;
                  var o = n(e.it[e.it.length - 1], r.it[r.it.length - 1], s.propertyGroup);
                  return s.transform = o, s.propertyIndex = e.cix, s._name = e.nm, s
                }(e, r, a.propertyGroup),
                o = n(e.it[e.it.length - 1], r.it[r.it.length - 1], a.propertyGroup);
              return a.content = s, a.transform = o, Object.defineProperty(a, "_name", {
                get: function() {
                  return e.nm
                }
              }), a.numProperties = e.np, a.propertyIndex = e.ix, a.nm = e.nm, a.mn = e.mn, a
            }

            function r(t, e, r) {
              function i(t) {
                return "Color" === t || "color" === t ? i.color : "Opacity" === t || "opacity" === t ? i.opacity : null
              }
              return Object.defineProperties(i, {
                color: {
                  get: ExpressionPropertyInterface(e.c)
                },
                opacity: {
                  get: ExpressionPropertyInterface(e.o)
                },
                _name: {
                  value: t.nm
                },
                mn: {
                  value: t.mn
                }
              }), e.c.setGroupProperty(PropertyInterface("Color", r)), e.o.setGroupProperty(PropertyInterface("Opacity", r)), i
            }

            function i(t, e, r) {
              function i(t) {
                return "Start Point" === t || "start point" === t ? i.startPoint : "End Point" === t || "end point" === t ? i.endPoint : "Opacity" === t || "opacity" === t ? i.opacity : null
              }
              return Object.defineProperties(i, {
                startPoint: {
                  get: ExpressionPropertyInterface(e.s)
                },
                endPoint: {
                  get: ExpressionPropertyInterface(e.e)
                },
                opacity: {
                  get: ExpressionPropertyInterface(e.o)
                },
                type: {
                  get: function() {
                    return "a"
                  }
                },
                _name: {
                  value: t.nm
                },
                mn: {
                  value: t.mn
                }
              }), e.s.setGroupProperty(PropertyInterface("Start Point", r)), e.e.setGroupProperty(PropertyInterface("End Point", r)), e.o.setGroupProperty(PropertyInterface("Opacity", r)), i
            }

            function a(t, e, r) {
              var i, a = propertyGroupFactory(h, r),
                s = propertyGroupFactory(l, a);

              function n(r) {
                Object.defineProperty(l, t.d[r].nm, {
                  get: ExpressionPropertyInterface(e.d.dataProps[r].p)
                })
              }
              var o = t.d ? t.d.length : 0,
                l = {};
              for (i = 0; i < o; i += 1) n(i), e.d.dataProps[i].p.setGroupProperty(s);

              function h(t) {
                return "Color" === t || "color" === t ? h.color : "Opacity" === t || "opacity" === t ? h.opacity : "Stroke Width" === t || "stroke width" === t ? h.strokeWidth : null
              }
              return Object.defineProperties(h, {
                color: {
                  get: ExpressionPropertyInterface(e.c)
                },
                opacity: {
                  get: ExpressionPropertyInterface(e.o)
                },
                strokeWidth: {
                  get: ExpressionPropertyInterface(e.w)
                },
                dash: {
                  get: function() {
                    return l
                  }
                },
                _name: {
                  value: t.nm
                },
                mn: {
                  value: t.mn
                }
              }), e.c.setGroupProperty(PropertyInterface("Color", a)), e.o.setGroupProperty(PropertyInterface("Opacity", a)), e.w.setGroupProperty(PropertyInterface("Stroke Width", a)), h
            }

            function s(t, e, r) {
              function i(e) {
                return e === t.e.ix || "End" === e || "end" === e ? i.end : e === t.s.ix ? i.start : e === t.o.ix ? i.offset : null
              }
              var a = propertyGroupFactory(i, r);
              return i.propertyIndex = t.ix, e.s.setGroupProperty(PropertyInterface("Start", a)), e.e.setGroupProperty(PropertyInterface("End", a)), e.o.setGroupProperty(PropertyInterface("Offset", a)), i.propertyIndex = t.ix, i.propertyGroup = r, Object.defineProperties(i, {
                start: {
                  get: ExpressionPropertyInterface(e.s)
                },
                end: {
                  get: ExpressionPropertyInterface(e.e)
                },
                offset: {
                  get: ExpressionPropertyInterface(e.o)
                },
                _name: {
                  value: t.nm
                }
              }), i.mn = t.mn, i
            }

            function n(t, e, r) {
              function i(e) {
                return t.a.ix === e || "Anchor Point" === e ? i.anchorPoint : t.o.ix === e || "Opacity" === e ? i.opacity : t.p.ix === e || "Position" === e ? i.position : t.r.ix === e || "Rotation" === e || "ADBE Vector Rotation" === e ? i.rotation : t.s.ix === e || "Scale" === e ? i.scale : t.sk && t.sk.ix === e || "Skew" === e ? i.skew : t.sa && t.sa.ix === e || "Skew Axis" === e ? i.skewAxis : null
              }
              var a = propertyGroupFactory(i, r);
              return e.transform.mProps.o.setGroupProperty(PropertyInterface("Opacity", a)), e.transform.mProps.p.setGroupProperty(PropertyInterface("Position", a)), e.transform.mProps.a.setGroupProperty(PropertyInterface("Anchor Point", a)), e.transform.mProps.s.setGroupProperty(PropertyInterface("Scale", a)), e.transform.mProps.r.setGroupProperty(PropertyInterface("Rotation", a)), e.transform.mProps.sk && (e.transform.mProps.sk.setGroupProperty(PropertyInterface("Skew", a)), e.transform.mProps.sa.setGroupProperty(PropertyInterface("Skew Angle", a))), e.transform.op.setGroupProperty(PropertyInterface("Opacity", a)), Object.defineProperties(i, {
                opacity: {
                  get: ExpressionPropertyInterface(e.transform.mProps.o)
                },
                position: {
                  get: ExpressionPropertyInterface(e.transform.mProps.p)
                },
                anchorPoint: {
                  get: ExpressionPropertyInterface(e.transform.mProps.a)
                },
                scale: {
                  get: ExpressionPropertyInterface(e.transform.mProps.s)
                },
                rotation: {
                  get: ExpressionPropertyInterface(e.transform.mProps.r)
                },
                skew: {
                  get: ExpressionPropertyInterface(e.transform.mProps.sk)
                },
                skewAxis: {
                  get: ExpressionPropertyInterface(e.transform.mProps.sa)
                },
                _name: {
                  value: t.nm
                }
              }), i.ty = "tr", i.mn = t.mn, i.propertyGroup = r, i
            }

            function o(t, e, r) {
              function i(e) {
                return t.p.ix === e ? i.position : t.s.ix === e ? i.size : null
              }
              var a = propertyGroupFactory(i, r);
              i.propertyIndex = t.ix;
              var s = "tm" === e.sh.ty ? e.sh.prop : e.sh;
              return s.s.setGroupProperty(PropertyInterface("Size", a)), s.p.setGroupProperty(PropertyInterface("Position", a)), Object.defineProperties(i, {
                size: {
                  get: ExpressionPropertyInterface(s.s)
                },
                position: {
                  get: ExpressionPropertyInterface(s.p)
                },
                _name: {
                  value: t.nm
                }
              }), i.mn = t.mn, i
            }

            function l(t, e, r) {
              function i(e) {
                return t.p.ix === e ? i.position : t.r.ix === e ? i.rotation : t.pt.ix === e ? i.points : t.or.ix === e || "ADBE Vector Star Outer Radius" === e ? i.outerRadius : t.os.ix === e ? i.outerRoundness : !t.ir || t.ir.ix !== e && "ADBE Vector Star Inner Radius" !== e ? t.is && t.is.ix === e ? i.innerRoundness : null : i.innerRadius
              }
              var a = propertyGroupFactory(i, r),
                s = "tm" === e.sh.ty ? e.sh.prop : e.sh;
              return i.propertyIndex = t.ix, s.or.setGroupProperty(PropertyInterface("Outer Radius", a)), s.os.setGroupProperty(PropertyInterface("Outer Roundness", a)), s.pt.setGroupProperty(PropertyInterface("Points", a)), s.p.setGroupProperty(PropertyInterface("Position", a)), s.r.setGroupProperty(PropertyInterface("Rotation", a)), t.ir && (s.ir.setGroupProperty(PropertyInterface("Inner Radius", a)), s.is.setGroupProperty(PropertyInterface("Inner Roundness", a))), Object.defineProperties(i, {
                position: {
                  get: ExpressionPropertyInterface(s.p)
                },
                rotation: {
                  get: ExpressionPropertyInterface(s.r)
                },
                points: {
                  get: ExpressionPropertyInterface(s.pt)
                },
                outerRadius: {
                  get: ExpressionPropertyInterface(s.or)
                },
                outerRoundness: {
                  get: ExpressionPropertyInterface(s.os)
                },
                innerRadius: {
                  get: ExpressionPropertyInterface(s.ir)
                },
                innerRoundness: {
                  get: ExpressionPropertyInterface(s.is)
                },
                _name: {
                  value: t.nm
                }
              }), i.mn = t.mn, i
            }

            function h(t, e, r) {
              function i(e) {
                return t.p.ix === e ? i.position : t.r.ix === e ? i.roundness : t.s.ix === e || "Size" === e || "ADBE Vector Rect Size" === e ? i.size : null
              }
              var a = propertyGroupFactory(i, r),
                s = "tm" === e.sh.ty ? e.sh.prop : e.sh;
              return i.propertyIndex = t.ix, s.p.setGroupProperty(PropertyInterface("Position", a)), s.s.setGroupProperty(PropertyInterface("Size", a)), s.r.setGroupProperty(PropertyInterface("Rotation", a)), Object.defineProperties(i, {
                position: {
                  get: ExpressionPropertyInterface(s.p)
                },
                roundness: {
                  get: ExpressionPropertyInterface(s.r)
                },
                size: {
                  get: ExpressionPropertyInterface(s.s)
                },
                _name: {
                  value: t.nm
                }
              }), i.mn = t.mn, i
            }

            function p(t, e, r) {
              function i(e) {
                return t.r.ix === e || "Round Corners 1" === e ? i.radius : null
              }
              var a = propertyGroupFactory(i, r),
                s = e;
              return i.propertyIndex = t.ix, s.rd.setGroupProperty(PropertyInterface("Radius", a)), Object.defineProperties(i, {
                radius: {
                  get: ExpressionPropertyInterface(s.rd)
                },
                _name: {
                  value: t.nm
                }
              }), i.mn = t.mn, i
            }

            function c(t, e, r) {
              function i(e) {
                return t.c.ix === e || "Copies" === e ? i.copies : t.o.ix === e || "Offset" === e ? i.offset : null
              }
              var a = propertyGroupFactory(i, r),
                s = e;
              return i.propertyIndex = t.ix, s.c.setGroupProperty(PropertyInterface("Copies", a)), s.o.setGroupProperty(PropertyInterface("Offset", a)), Object.defineProperties(i, {
                copies: {
                  get: ExpressionPropertyInterface(s.c)
                },
                offset: {
                  get: ExpressionPropertyInterface(s.o)
                },
                _name: {
                  value: t.nm
                }
              }), i.mn = t.mn, i
            }
            return function(e, r, i) {
              var a;

              function s(t) {
                if ("number" == typeof t) return 0 === (t = void 0 === t ? 1 : t) ? i : a[t - 1];
                for (var e = 0, r = a.length; e < r;) {
                  if (a[e]._name === t) return a[e];
                  e += 1
                }
                return null
              }
              return s.propertyGroup = propertyGroupFactory(s, (function() {
                return i
              })), a = t(e, r, s.propertyGroup), s.numProperties = a.length, s._name = "Contents", s
            }
          }(),
          TextExpressionInterface = function(t) {
            var e;

            function r(t) {
              return "ADBE Text Document" === t ? r.sourceText : null
            }
            return Object.defineProperty(r, "sourceText", {
              get: function() {
                t.textProperty.getValue();
                var r = t.textProperty.currentData.t;
                return e && r === e.value || ((e = new String(r)).value = r || new String(r), Object.defineProperty(e, "style", {
                  get: function() {
                    return {
                      fillColor: t.textProperty.currentData.fc
                    }
                  }
                })), e
              }
            }), r
          };

        function _typeof(t) {
          return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
          } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
          }, _typeof(t)
        }
        var FootageInterface = (dataInterfaceFactory = function(t) {
            function e(t) {
              return "Outline" === t ? e.outlineInterface() : null
            }
            return e._name = "Outline", e.outlineInterface = function(t) {
              var e = "",
                r = t.getFootageData();

              function i(t) {
                if (r[t]) return e = t, "object" === _typeof(r = r[t]) ? i : r;
                var a = t.indexOf(e);
                if (-1 !== a) {
                  var s = parseInt(t.substr(a + e.length), 10);
                  return "object" === _typeof(r = r[s]) ? i : r
                }
                return ""
              }
              return function() {
                return e = "", r = t.getFootageData(), i
              }
            }(t), e
          }, function(t) {
            function e(t) {
              return "Data" === t ? e.dataInterface : null
            }
            return e._name = "Data", e.dataInterface = dataInterfaceFactory(t), e
          }),
          dataInterfaceFactory, interfaces = {
            layer: LayerExpressionInterface,
            effects: EffectsExpressionInterface,
            comp: CompExpressionInterface,
            shape: ShapeExpressionInterface,
            text: TextExpressionInterface,
            footage: FootageInterface
          };

        function getInterface(t) {
          return interfaces[t] || null
        }
        var expressionHelpers = {
          searchExpressions: function(t, e, r) {
            e.x && (r.k = !0, r.x = !0, r.initiateExpression = ExpressionManager.initiateExpression, r.effectsSequence.push(r.initiateExpression(t, e, r).bind(r)))
          },
          getSpeedAtTime: function(t) {
            var e = this.getValueAtTime(t),
              r = this.getValueAtTime(t + -.01),
              i = 0;
            if (e.length) {
              var a;
              for (a = 0; a < e.length; a += 1) i += Math.pow(r[a] - e[a], 2);
              i = 100 * Math.sqrt(i)
            } else i = 0;
            return i
          },
          getVelocityAtTime: function(t) {
            if (void 0 !== this.vel) return this.vel;
            var e, r, i = -.001,
              a = this.getValueAtTime(t),
              s = this.getValueAtTime(t + i);
            if (a.length)
              for (e = createTypedArray("float32", a.length), r = 0; r < a.length; r += 1) e[r] = (s[r] - a[r]) / i;
            else e = (s - a) / i;
            return e
          },
          getValueAtTime: function(t) {
            return t *= this.elem.globalData.frameRate, (t -= this.offsetTime) !== this._cachingAtTime.lastFrame && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < t ? this._cachingAtTime.lastIndex : 0, this._cachingAtTime.value = this.interpolateValue(t, this._cachingAtTime), this._cachingAtTime.lastFrame = t), this._cachingAtTime.value
          },
          getStaticValueAtTime: function() {
            return this.pv
          },
          setGroupProperty: function(t) {
            this.propertyGroup = t
          }
        };

        function addPropertyDecorator() {
          function t(t, e, r) {
            if (!this.k || !this.keyframes) return this.pv;
            t = t ? t.toLowerCase() : "";
            var i, a, s, n, o, l = this.comp.renderedFrame,
              h = this.keyframes,
              p = h[h.length - 1].t;
            if (l <= p) return this.pv;
            if (r ? a = p - (i = e ? Math.abs(p - this.elem.comp.globalData.frameRate * e) : Math.max(0, p - this.elem.data.ip)) : ((!e || e > h.length - 1) && (e = h.length - 1), i = p - (a = h[h.length - 1 - e].t)), "pingpong" === t) {
              if (Math.floor((l - a) / i) % 2 != 0) return this.getValueAtTime((i - (l - a) % i + a) / this.comp.globalData.frameRate, 0)
            } else {
              if ("offset" === t) {
                var c = this.getValueAtTime(a / this.comp.globalData.frameRate, 0),
                  f = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
                  u = this.getValueAtTime(((l - a) % i + a) / this.comp.globalData.frameRate, 0),
                  d = Math.floor((l - a) / i);
                if (this.pv.length) {
                  for (n = (o = new Array(c.length)).length, s = 0; s < n; s += 1) o[s] = (f[s] - c[s]) * d + u[s];
                  return o
                }
                return (f - c) * d + u
              }
              if ("continue" === t) {
                var m = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
                  y = this.getValueAtTime((p - .001) / this.comp.globalData.frameRate, 0);
                if (this.pv.length) {
                  for (n = (o = new Array(m.length)).length, s = 0; s < n; s += 1) o[s] = m[s] + (m[s] - y[s]) * ((l - p) / this.comp.globalData.frameRate) / 5e-4;
                  return o
                }
                return m + (l - p) / .001 * (m - y)
              }
            }
            return this.getValueAtTime(((l - a) % i + a) / this.comp.globalData.frameRate, 0)
          }

          function e(t, e, r) {
            if (!this.k) return this.pv;
            t = t ? t.toLowerCase() : "";
            var i, a, s, n, o, l = this.comp.renderedFrame,
              h = this.keyframes,
              p = h[0].t;
            if (l >= p) return this.pv;
            if (r ? a = p + (i = e ? Math.abs(this.elem.comp.globalData.frameRate * e) : Math.max(0, this.elem.data.op - p)) : ((!e || e > h.length - 1) && (e = h.length - 1), i = (a = h[e].t) - p), "pingpong" === t) {
              if (Math.floor((p - l) / i) % 2 == 0) return this.getValueAtTime(((p - l) % i + p) / this.comp.globalData.frameRate, 0)
            } else {
              if ("offset" === t) {
                var c = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
                  f = this.getValueAtTime(a / this.comp.globalData.frameRate, 0),
                  u = this.getValueAtTime((i - (p - l) % i + p) / this.comp.globalData.frameRate, 0),
                  d = Math.floor((p - l) / i) + 1;
                if (this.pv.length) {
                  for (n = (o = new Array(c.length)).length, s = 0; s < n; s += 1) o[s] = u[s] - (f[s] - c[s]) * d;
                  return o
                }
                return u - (f - c) * d
              }
              if ("continue" === t) {
                var m = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
                  y = this.getValueAtTime((p + .001) / this.comp.globalData.frameRate, 0);
                if (this.pv.length) {
                  for (n = (o = new Array(m.length)).length, s = 0; s < n; s += 1) o[s] = m[s] + (m[s] - y[s]) * (p - l) / .001;
                  return o
                }
                return m + (m - y) * (p - l) / .001
              }
            }
            return this.getValueAtTime((i - ((p - l) % i + p)) / this.comp.globalData.frameRate, 0)
          }

          function r(t, e) {
            if (!this.k) return this.pv;
            if (t = .5 * (t || .4), (e = Math.floor(e || 5)) <= 1) return this.pv;
            var r, i, a = this.comp.renderedFrame / this.comp.globalData.frameRate,
              s = a - t,
              n = e > 1 ? (a + t - s) / (e - 1) : 1,
              o = 0,
              l = 0;
            for (r = this.pv.length ? createTypedArray("float32", this.pv.length) : 0; o < e;) {
              if (i = this.getValueAtTime(s + o * n), this.pv.length)
                for (l = 0; l < this.pv.length; l += 1) r[l] += i[l];
              else r += i;
              o += 1
            }
            if (this.pv.length)
              for (l = 0; l < this.pv.length; l += 1) r[l] /= e;
            else r /= e;
            return r
          }

          function i(t) {
            this._transformCachingAtTime || (this._transformCachingAtTime = {
              v: new Matrix
            });
            var e = this._transformCachingAtTime.v;
            if (e.cloneFromProps(this.pre.props), this.appliedTransformations < 1) {
              var r = this.a.getValueAtTime(t);
              e.translate(-r[0] * this.a.mult, -r[1] * this.a.mult, r[2] * this.a.mult)
            }
            if (this.appliedTransformations < 2) {
              var i = this.s.getValueAtTime(t);
              e.scale(i[0] * this.s.mult, i[1] * this.s.mult, i[2] * this.s.mult)
            }
            if (this.sk && this.appliedTransformations < 3) {
              var a = this.sk.getValueAtTime(t),
                s = this.sa.getValueAtTime(t);
              e.skewFromAxis(-a * this.sk.mult, s * this.sa.mult)
            }
            if (this.r && this.appliedTransformations < 4) {
              var n = this.r.getValueAtTime(t);
              e.rotate(-n * this.r.mult)
            } else if (!this.r && this.appliedTransformations < 4) {
              var o = this.rz.getValueAtTime(t),
                l = this.ry.getValueAtTime(t),
                h = this.rx.getValueAtTime(t),
                p = this.or.getValueAtTime(t);
              e.rotateZ(-o * this.rz.mult).rotateY(l * this.ry.mult).rotateX(h * this.rx.mult).rotateZ(-p[2] * this.or.mult).rotateY(p[1] * this.or.mult).rotateX(p[0] * this.or.mult)
            }
            if (this.data.p && this.data.p.s) {
              var c = this.px.getValueAtTime(t),
                f = this.py.getValueAtTime(t);
              if (this.data.p.z) {
                var u = this.pz.getValueAtTime(t);
                e.translate(c * this.px.mult, f * this.py.mult, -u * this.pz.mult)
              } else e.translate(c * this.px.mult, f * this.py.mult, 0)
            } else {
              var d = this.p.getValueAtTime(t);
              e.translate(d[0] * this.p.mult, d[1] * this.p.mult, -d[2] * this.p.mult)
            }
            return e
          }

          function a() {
            return this.v.clone(new Matrix)
          }
          var s = TransformPropertyFactory.getTransformProperty;
          TransformPropertyFactory.getTransformProperty = function(t, e, r) {
            var n = s(t, e, r);
            return n.dynamicProperties.length ? n.getValueAtTime = i.bind(n) : n.getValueAtTime = a.bind(n), n.setGroupProperty = expressionHelpers.setGroupProperty, n
          };
          var n = PropertyFactory.getProp;
          PropertyFactory.getProp = function(i, a, s, o, l) {
            var h = n(i, a, s, o, l);
            h.kf ? h.getValueAtTime = expressionHelpers.getValueAtTime.bind(h) : h.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(h), h.setGroupProperty = expressionHelpers.setGroupProperty, h.loopOut = t, h.loopIn = e, h.smooth = r, h.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(h), h.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(h), h.numKeys = 1 === a.a ? a.k.length : 0, h.propertyIndex = a.ix;
            var p = 0;
            return 0 !== s && (p = createTypedArray("float32", 1 === a.a ? a.k[0].s.length : a.k.length)), h._cachingAtTime = {
              lastFrame: initialDefaultFrame,
              lastIndex: 0,
              value: p
            }, expressionHelpers.searchExpressions(i, a, h), h.k && l.addDynamicProperty(h), h
          };
          var o = ShapePropertyFactory.getConstructorFunction(),
            l = ShapePropertyFactory.getKeyframedConstructorFunction();

          function h() {}
          h.prototype = {
            vertices: function(t, e) {
              this.k && this.getValue();
              var r, i = this.v;
              void 0 !== e && (i = this.getValueAtTime(e, 0));
              var a = i._length,
                s = i[t],
                n = i.v,
                o = createSizedArray(a);
              for (r = 0; r < a; r += 1) o[r] = "i" === t || "o" === t ? [s[r][0] - n[r][0], s[r][1] - n[r][1]] : [s[r][0], s[r][1]];
              return o
            },
            points: function(t) {
              return this.vertices("v", t)
            },
            inTangents: function(t) {
              return this.vertices("i", t)
            },
            outTangents: function(t) {
              return this.vertices("o", t)
            },
            isClosed: function() {
              return this.v.c
            },
            pointOnPath: function(t, e) {
              var r = this.v;
              void 0 !== e && (r = this.getValueAtTime(e, 0)), this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(r));
              for (var i, a = this._segmentsLength, s = a.lengths, n = a.totalLength * t, o = 0, l = s.length, h = 0; o < l;) {
                if (h + s[o].addedLength > n) {
                  var p = o,
                    c = r.c && o === l - 1 ? 0 : o + 1,
                    f = (n - h) / s[o].addedLength;
                  i = bez.getPointInSegment(r.v[p], r.v[c], r.o[p], r.i[c], f, s[o]);
                  break
                }
                h += s[o].addedLength, o += 1
              }
              return i || (i = r.c ? [r.v[0][0], r.v[0][1]] : [r.v[r._length - 1][0], r.v[r._length - 1][1]]), i
            },
            vectorOnPath: function(t, e, r) {
              1 == t ? t = this.v.c : 0 == t && (t = .999);
              var i = this.pointOnPath(t, e),
                a = this.pointOnPath(t + .001, e),
                s = a[0] - i[0],
                n = a[1] - i[1],
                o = Math.sqrt(Math.pow(s, 2) + Math.pow(n, 2));
              return 0 === o ? [0, 0] : "tangent" === r ? [s / o, n / o] : [-n / o, s / o]
            },
            tangentOnPath: function(t, e) {
              return this.vectorOnPath(t, e, "tangent")
            },
            normalOnPath: function(t, e) {
              return this.vectorOnPath(t, e, "normal")
            },
            setGroupProperty: expressionHelpers.setGroupProperty,
            getValueAtTime: expressionHelpers.getStaticValueAtTime
          }, extendPrototype([h], o), extendPrototype([h], l), l.prototype.getValueAtTime = function(t) {
            return this._cachingAtTime || (this._cachingAtTime = {
              shapeValue: shapePool.clone(this.pv),
              lastIndex: 0,
              lastTime: initialDefaultFrame
            }), t *= this.elem.globalData.frameRate, (t -= this.offsetTime) !== this._cachingAtTime.lastTime && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < t ? this._caching.lastIndex : 0, this._cachingAtTime.lastTime = t, this.interpolateShape(t, this._cachingAtTime.shapeValue, this._cachingAtTime)), this._cachingAtTime.shapeValue
          }, l.prototype.initiateExpression = ExpressionManager.initiateExpression;
          var p = ShapePropertyFactory.getShapeProp;
          ShapePropertyFactory.getShapeProp = function(t, e, r, i, a) {
            var s = p(t, e, r, i, a);
            return s.propertyIndex = e.ix, s.lock = !1, 3 === r ? expressionHelpers.searchExpressions(t, e.pt, s) : 4 === r && expressionHelpers.searchExpressions(t, e.ks, s), s.k && t.addDynamicProperty(s), s
          }
        }

        function initialize$1() {
          addPropertyDecorator()
        }

        function addDecorator() {
          TextProperty.prototype.getExpressionValue = function(t, e) {
            var r = this.calculateExpression(e);
            if (t.t !== r) {
              var i = {};
              return this.copyData(i, t), i.t = r.toString(), i.__complete = !1, i
            }
            return t
          }, TextProperty.prototype.searchProperty = function() {
            var t = this.searchKeyframes(),
              e = this.searchExpressions();
            return this.kf = t || e, this.kf
          }, TextProperty.prototype.searchExpressions = function() {
            return this.data.d.x ? (this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem, this.data.d, this), this.addEffect(this.getExpressionValue.bind(this)), !0) : null
          }
        }

        function initialize() {
          addDecorator()
        }

        function SVGComposableEffect() {}
        SVGComposableEffect.prototype = {
          createMergeNode: function(t, e) {
            var r, i, a = createNS("feMerge");
            for (a.setAttribute("result", t), i = 0; i < e.length; i += 1)(r = createNS("feMergeNode")).setAttribute("in", e[i]), a.appendChild(r), a.appendChild(r);
            return a
          }
        };
        var linearFilterValue = "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0";

        function SVGTintFilter(t, e, r, i, a) {
          this.filterManager = e;
          var s = createNS("feColorMatrix");
          s.setAttribute("type", "matrix"), s.setAttribute("color-interpolation-filters", "linearRGB"), s.setAttribute("values", linearFilterValue + " 1 0"), this.linearFilter = s, s.setAttribute("result", i + "_tint_1"), t.appendChild(s), (s = createNS("feColorMatrix")).setAttribute("type", "matrix"), s.setAttribute("color-interpolation-filters", "sRGB"), s.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), s.setAttribute("result", i + "_tint_2"), t.appendChild(s), this.matrixFilter = s;
          var n = this.createMergeNode(i, [a, i + "_tint_1", i + "_tint_2"]);
          t.appendChild(n)
        }

        function SVGFillFilter(t, e, r, i) {
          this.filterManager = e;
          var a = createNS("feColorMatrix");
          a.setAttribute("type", "matrix"), a.setAttribute("color-interpolation-filters", "sRGB"), a.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), a.setAttribute("result", i), t.appendChild(a), this.matrixFilter = a
        }

        function SVGStrokeEffect(t, e, r) {
          this.initialized = !1, this.filterManager = e, this.elem = r, this.paths = []
        }

        function SVGTritoneFilter(t, e, r, i) {
          this.filterManager = e;
          var a = createNS("feColorMatrix");
          a.setAttribute("type", "matrix"), a.setAttribute("color-interpolation-filters", "linearRGB"), a.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), t.appendChild(a);
          var s = createNS("feComponentTransfer");
          s.setAttribute("color-interpolation-filters", "sRGB"), s.setAttribute("result", i), this.matrixFilter = s;
          var n = createNS("feFuncR");
          n.setAttribute("type", "table"), s.appendChild(n), this.feFuncR = n;
          var o = createNS("feFuncG");
          o.setAttribute("type", "table"), s.appendChild(o), this.feFuncG = o;
          var l = createNS("feFuncB");
          l.setAttribute("type", "table"), s.appendChild(l), this.feFuncB = l, t.appendChild(s)
        }

        function SVGProLevelsFilter(t, e, r, i) {
          this.filterManager = e;
          var a = this.filterManager.effectElements,
            s = createNS("feComponentTransfer");
          (a[10].p.k || 0 !== a[10].p.v || a[11].p.k || 1 !== a[11].p.v || a[12].p.k || 1 !== a[12].p.v || a[13].p.k || 0 !== a[13].p.v || a[14].p.k || 1 !== a[14].p.v) && (this.feFuncR = this.createFeFunc("feFuncR", s)), (a[17].p.k || 0 !== a[17].p.v || a[18].p.k || 1 !== a[18].p.v || a[19].p.k || 1 !== a[19].p.v || a[20].p.k || 0 !== a[20].p.v || a[21].p.k || 1 !== a[21].p.v) && (this.feFuncG = this.createFeFunc("feFuncG", s)), (a[24].p.k || 0 !== a[24].p.v || a[25].p.k || 1 !== a[25].p.v || a[26].p.k || 1 !== a[26].p.v || a[27].p.k || 0 !== a[27].p.v || a[28].p.k || 1 !== a[28].p.v) && (this.feFuncB = this.createFeFunc("feFuncB", s)), (a[31].p.k || 0 !== a[31].p.v || a[32].p.k || 1 !== a[32].p.v || a[33].p.k || 1 !== a[33].p.v || a[34].p.k || 0 !== a[34].p.v || a[35].p.k || 1 !== a[35].p.v) && (this.feFuncA = this.createFeFunc("feFuncA", s)), (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (s.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(s)), (a[3].p.k || 0 !== a[3].p.v || a[4].p.k || 1 !== a[4].p.v || a[5].p.k || 1 !== a[5].p.v || a[6].p.k || 0 !== a[6].p.v || a[7].p.k || 1 !== a[7].p.v) && ((s = createNS("feComponentTransfer")).setAttribute("color-interpolation-filters", "sRGB"), s.setAttribute("result", i), t.appendChild(s), this.feFuncRComposed = this.createFeFunc("feFuncR", s), this.feFuncGComposed = this.createFeFunc("feFuncG", s), this.feFuncBComposed = this.createFeFunc("feFuncB", s))
        }

        function SVGDropShadowEffect(t, e, r, i, a) {
          var s = e.container.globalData.renderConfig.filterSize,
            n = e.data.fs || s;
          t.setAttribute("x", n.x || s.x), t.setAttribute("y", n.y || s.y), t.setAttribute("width", n.width || s.width), t.setAttribute("height", n.height || s.height), this.filterManager = e;
          var o = createNS("feGaussianBlur");
          o.setAttribute("in", "SourceAlpha"), o.setAttribute("result", i + "_drop_shadow_1"), o.setAttribute("stdDeviation", "0"), this.feGaussianBlur = o, t.appendChild(o);
          var l = createNS("feOffset");
          l.setAttribute("dx", "25"), l.setAttribute("dy", "0"), l.setAttribute("in", i + "_drop_shadow_1"), l.setAttribute("result", i + "_drop_shadow_2"), this.feOffset = l, t.appendChild(l);
          var h = createNS("feFlood");
          h.setAttribute("flood-color", "#00ff00"), h.setAttribute("flood-opacity", "1"), h.setAttribute("result", i + "_drop_shadow_3"), this.feFlood = h, t.appendChild(h);
          var p = createNS("feComposite");
          p.setAttribute("in", i + "_drop_shadow_3"), p.setAttribute("in2", i + "_drop_shadow_2"), p.setAttribute("operator", "in"), p.setAttribute("result", i + "_drop_shadow_4"), t.appendChild(p);
          var c = this.createMergeNode(i, [i + "_drop_shadow_4", a]);
          t.appendChild(c)
        }
        extendPrototype([SVGComposableEffect], SVGTintFilter), SVGTintFilter.prototype.renderFrame = function(t) {
          if (t || this.filterManager._mdf) {
            var e = this.filterManager.effectElements[0].p.v,
              r = this.filterManager.effectElements[1].p.v,
              i = this.filterManager.effectElements[2].p.v / 100;
            this.linearFilter.setAttribute("values", linearFilterValue + " " + i + " 0"), this.matrixFilter.setAttribute("values", r[0] - e[0] + " 0 0 0 " + e[0] + " " + (r[1] - e[1]) + " 0 0 0 " + e[1] + " " + (r[2] - e[2]) + " 0 0 0 " + e[2] + " 0 0 0 1 0")
          }
        }, SVGFillFilter.prototype.renderFrame = function(t) {
          if (t || this.filterManager._mdf) {
            var e = this.filterManager.effectElements[2].p.v,
              r = this.filterManager.effectElements[6].p.v;
            this.matrixFilter.setAttribute("values", "0 0 0 0 " + e[0] + " 0 0 0 0 " + e[1] + " 0 0 0 0 " + e[2] + " 0 0 0 " + r + " 0")
          }
        }, SVGStrokeEffect.prototype.initialize = function() {
          var t, e, r, i, a = this.elem.layerElement.children || this.elem.layerElement.childNodes;
          for (1 === this.filterManager.effectElements[1].p.v ? (i = this.elem.maskManager.masksProperties.length, r = 0) : i = 1 + (r = this.filterManager.effectElements[0].p.v - 1), (e = createNS("g")).setAttribute("fill", "none"), e.setAttribute("stroke-linecap", "round"), e.setAttribute("stroke-dashoffset", 1); r < i; r += 1) t = createNS("path"), e.appendChild(t), this.paths.push({
            p: t,
            m: r
          });
          if (3 === this.filterManager.effectElements[10].p.v) {
            var s = createNS("mask"),
              n = createElementID();
            s.setAttribute("id", n), s.setAttribute("mask-type", "alpha"), s.appendChild(e), this.elem.globalData.defs.appendChild(s);
            var o = createNS("g");
            for (o.setAttribute("mask", "url(" + getLocationHref() + "#" + n + ")"); a[0];) o.appendChild(a[0]);
            this.elem.layerElement.appendChild(o), this.masker = s, e.setAttribute("stroke", "#fff")
          } else if (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) {
            if (2 === this.filterManager.effectElements[10].p.v)
              for (a = this.elem.layerElement.children || this.elem.layerElement.childNodes; a.length;) this.elem.layerElement.removeChild(a[0]);
            this.elem.layerElement.appendChild(e), this.elem.layerElement.removeAttribute("mask"), e.setAttribute("stroke", "#fff")
          }
          this.initialized = !0, this.pathMasker = e
        }, SVGStrokeEffect.prototype.renderFrame = function(t) {
          var e;
          this.initialized || this.initialize();
          var r, i, a = this.paths.length;
          for (e = 0; e < a; e += 1)
            if (-1 !== this.paths[e].m && (r = this.elem.maskManager.viewData[this.paths[e].m], i = this.paths[e].p, (t || this.filterManager._mdf || r.prop._mdf) && i.setAttribute("d", r.lastPath), t || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || r.prop._mdf)) {
              var s;
              if (0 !== this.filterManager.effectElements[7].p.v || 100 !== this.filterManager.effectElements[8].p.v) {
                var n = .01 * Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v),
                  o = .01 * Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v),
                  l = i.getTotalLength();
                s = "0 0 0 " + l * n + " ";
                var h, p = l * (o - n),
                  c = 1 + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01,
                  f = Math.floor(p / c);
                for (h = 0; h < f; h += 1) s += "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01 + " ";
                s += "0 " + 10 * l + " 0 0"
              } else s = "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01;
              i.setAttribute("stroke-dasharray", s)
            } if ((t || this.filterManager.effectElements[4].p._mdf) && this.pathMasker.setAttribute("stroke-width", 2 * this.filterManager.effectElements[4].p.v), (t || this.filterManager.effectElements[6].p._mdf) && this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v), (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) && (t || this.filterManager.effectElements[3].p._mdf)) {
            var u = this.filterManager.effectElements[3].p.v;
            this.pathMasker.setAttribute("stroke", "rgb(" + bmFloor(255 * u[0]) + "," + bmFloor(255 * u[1]) + "," + bmFloor(255 * u[2]) + ")")
          }
        }, SVGTritoneFilter.prototype.renderFrame = function(t) {
          if (t || this.filterManager._mdf) {
            var e = this.filterManager.effectElements[0].p.v,
              r = this.filterManager.effectElements[1].p.v,
              i = this.filterManager.effectElements[2].p.v,
              a = i[0] + " " + r[0] + " " + e[0],
              s = i[1] + " " + r[1] + " " + e[1],
              n = i[2] + " " + r[2] + " " + e[2];
            this.feFuncR.setAttribute("tableValues", a), this.feFuncG.setAttribute("tableValues", s), this.feFuncB.setAttribute("tableValues", n)
          }
        }, SVGProLevelsFilter.prototype.createFeFunc = function(t, e) {
          var r = createNS(t);
          return r.setAttribute("type", "table"), e.appendChild(r), r
        }, SVGProLevelsFilter.prototype.getTableValue = function(t, e, r, i, a) {
          for (var s, n, o = 0, l = Math.min(t, e), h = Math.max(t, e), p = Array.call(null, {
              length: 256
            }), c = 0, f = a - i, u = e - t; o <= 256;) n = (s = o / 256) <= l ? u < 0 ? a : i : s >= h ? u < 0 ? i : a : i + f * Math.pow((s - t) / u, 1 / r), p[c] = n, c += 1, o += 256 / 255;
          return p.join(" ")
        }, SVGProLevelsFilter.prototype.renderFrame = function(t) {
          if (t || this.filterManager._mdf) {
            var e, r = this.filterManager.effectElements;
            this.feFuncRComposed && (t || r[3].p._mdf || r[4].p._mdf || r[5].p._mdf || r[6].p._mdf || r[7].p._mdf) && (e = this.getTableValue(r[3].p.v, r[4].p.v, r[5].p.v, r[6].p.v, r[7].p.v), this.feFuncRComposed.setAttribute("tableValues", e), this.feFuncGComposed.setAttribute("tableValues", e), this.feFuncBComposed.setAttribute("tableValues", e)), this.feFuncR && (t || r[10].p._mdf || r[11].p._mdf || r[12].p._mdf || r[13].p._mdf || r[14].p._mdf) && (e = this.getTableValue(r[10].p.v, r[11].p.v, r[12].p.v, r[13].p.v, r[14].p.v), this.feFuncR.setAttribute("tableValues", e)), this.feFuncG && (t || r[17].p._mdf || r[18].p._mdf || r[19].p._mdf || r[20].p._mdf || r[21].p._mdf) && (e = this.getTableValue(r[17].p.v, r[18].p.v, r[19].p.v, r[20].p.v, r[21].p.v), this.feFuncG.setAttribute("tableValues", e)), this.feFuncB && (t || r[24].p._mdf || r[25].p._mdf || r[26].p._mdf || r[27].p._mdf || r[28].p._mdf) && (e = this.getTableValue(r[24].p.v, r[25].p.v, r[26].p.v, r[27].p.v, r[28].p.v), this.feFuncB.setAttribute("tableValues", e)), this.feFuncA && (t || r[31].p._mdf || r[32].p._mdf || r[33].p._mdf || r[34].p._mdf || r[35].p._mdf) && (e = this.getTableValue(r[31].p.v, r[32].p.v, r[33].p.v, r[34].p.v, r[35].p.v), this.feFuncA.setAttribute("tableValues", e))
          }
        }, extendPrototype([SVGComposableEffect], SVGDropShadowEffect), SVGDropShadowEffect.prototype.renderFrame = function(t) {
          if (t || this.filterManager._mdf) {
            if ((t || this.filterManager.effectElements[4].p._mdf) && this.feGaussianBlur.setAttribute("stdDeviation", this.filterManager.effectElements[4].p.v / 4), t || this.filterManager.effectElements[0].p._mdf) {
              var e = this.filterManager.effectElements[0].p.v;
              this.feFlood.setAttribute("flood-color", rgbToHex(Math.round(255 * e[0]), Math.round(255 * e[1]), Math.round(255 * e[2])))
            }
            if ((t || this.filterManager.effectElements[1].p._mdf) && this.feFlood.setAttribute("flood-opacity", this.filterManager.effectElements[1].p.v / 255), t || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf) {
              var r = this.filterManager.effectElements[3].p.v,
                i = (this.filterManager.effectElements[2].p.v - 90) * degToRads,
                a = r * Math.cos(i),
                s = r * Math.sin(i);
              this.feOffset.setAttribute("dx", a), this.feOffset.setAttribute("dy", s)
            }
          }
        };
        var _svgMatteSymbols = [];

        function SVGMatte3Effect(t, e, r) {
          this.initialized = !1, this.filterManager = e, this.filterElem = t, this.elem = r, r.matteElement = createNS("g"), r.matteElement.appendChild(r.layerElement), r.matteElement.appendChild(r.transformedElement), r.baseElement = r.matteElement
        }

        function SVGGaussianBlurEffect(t, e, r, i) {
          t.setAttribute("x", "-100%"), t.setAttribute("y", "-100%"), t.setAttribute("width", "300%"), t.setAttribute("height", "300%"), this.filterManager = e;
          var a = createNS("feGaussianBlur");
          a.setAttribute("result", i), t.appendChild(a), this.feGaussianBlur = a
        }

        function TransformEffect() {}

        function SVGTransformEffect(t, e) {
          this.init(e)
        }

        function CVTransformEffect(t) {
          this.init(t)
        }
        return SVGMatte3Effect.prototype.findSymbol = function(t) {
          for (var e = 0, r = _svgMatteSymbols.length; e < r;) {
            if (_svgMatteSymbols[e] === t) return _svgMatteSymbols[e];
            e += 1
          }
          return null
        }, SVGMatte3Effect.prototype.replaceInParent = function(t, e) {
          var r = t.layerElement.parentNode;
          if (r) {
            for (var i, a = r.children, s = 0, n = a.length; s < n && a[s] !== t.layerElement;) s += 1;
            s <= n - 2 && (i = a[s + 1]);
            var o = createNS("use");
            o.setAttribute("href", "#" + e), i ? r.insertBefore(o, i) : r.appendChild(o)
          }
        }, SVGMatte3Effect.prototype.setElementAsMask = function(t, e) {
          if (!this.findSymbol(e)) {
            var r = createElementID(),
              i = createNS("mask");
            i.setAttribute("id", e.layerId), i.setAttribute("mask-type", "alpha"), _svgMatteSymbols.push(e);
            var a = t.globalData.defs;
            a.appendChild(i);
            var s = createNS("symbol");
            s.setAttribute("id", r), this.replaceInParent(e, r), s.appendChild(e.layerElement), a.appendChild(s);
            var n = createNS("use");
            n.setAttribute("href", "#" + r), i.appendChild(n), e.data.hd = !1, e.show()
          }
          t.setMatte(e.layerId)
        }, SVGMatte3Effect.prototype.initialize = function() {
          for (var t = this.filterManager.effectElements[0].p.v, e = this.elem.comp.elements, r = 0, i = e.length; r < i;) e[r] && e[r].data.ind === t && this.setElementAsMask(this.elem, e[r]), r += 1;
          this.initialized = !0
        }, SVGMatte3Effect.prototype.renderFrame = function() {
          this.initialized || this.initialize()
        }, SVGGaussianBlurEffect.prototype.renderFrame = function(t) {
          if (t || this.filterManager._mdf) {
            var e = .3 * this.filterManager.effectElements[0].p.v,
              r = this.filterManager.effectElements[1].p.v,
              i = 3 == r ? 0 : e,
              a = 2 == r ? 0 : e;
            this.feGaussianBlur.setAttribute("stdDeviation", i + " " + a);
            var s = 1 == this.filterManager.effectElements[2].p.v ? "wrap" : "duplicate";
            this.feGaussianBlur.setAttribute("edgeMode", s)
          }
        }, TransformEffect.prototype.init = function(t) {
          this.effectsManager = t, this.type = effectTypes.TRANSFORM_EFFECT, this.matrix = new Matrix, this.opacity = -1, this._mdf = !1, this._opMdf = !1
        }, TransformEffect.prototype.renderFrame = function(t) {
          if (this._opMdf = !1, this._mdf = !1, t || this.effectsManager._mdf) {
            var e = this.effectsManager.effectElements,
              r = e[0].p.v,
              i = e[1].p.v,
              a = 1 === e[2].p.v,
              s = e[3].p.v,
              n = a ? s : e[4].p.v,
              o = e[5].p.v,
              l = e[6].p.v,
              h = e[7].p.v;
            this.matrix.reset(), this.matrix.translate(-r[0], -r[1], r[2]), this.matrix.scale(.01 * n, .01 * s, 1), this.matrix.rotate(-h * degToRads), this.matrix.skewFromAxis(-o * degToRads, (l + 90) * degToRads), this.matrix.translate(i[0], i[1], 0), this._mdf = !0, this.opacity !== e[8].p.v && (this.opacity = e[8].p.v, this._opMdf = !0)
          }
        }, extendPrototype([TransformEffect], SVGTransformEffect), extendPrototype([TransformEffect], CVTransformEffect), registerRenderer("canvas", CanvasRenderer), registerRenderer("html", HybridRenderer), registerRenderer("svg", SVGRenderer), ShapeModifiers.registerModifier("tm", TrimModifier), ShapeModifiers.registerModifier("pb", PuckerAndBloatModifier), ShapeModifiers.registerModifier("rp", RepeaterModifier), ShapeModifiers.registerModifier("rd", RoundCornersModifier), ShapeModifiers.registerModifier("zz", ZigZagModifier), ShapeModifiers.registerModifier("op", OffsetPathModifier), setExpressionsPlugin(Expressions), setExpressionInterfaces(getInterface), initialize$1(), initialize(), registerEffect$1(20, SVGTintFilter, !0), registerEffect$1(21, SVGFillFilter, !0), registerEffect$1(22, SVGStrokeEffect, !1), registerEffect$1(23, SVGTritoneFilter, !0), registerEffect$1(24, SVGProLevelsFilter, !0), registerEffect$1(25, SVGDropShadowEffect, !0), registerEffect$1(28, SVGMatte3Effect, !1), registerEffect$1(29, SVGGaussianBlurEffect, !0), registerEffect$1(35, SVGTransformEffect, !1), registerEffect(35, CVTransformEffect), lottie
      }, module.exports = factory())
    },
    44051: (t, e, r) => {
      "use strict";
      r.d(e, {
        A: () => o
      });
      var i = r(42587),
        a = r.n(i),
        s = r(15081),
        n = r.n(s)()(a());
      n.push([t.id, ':root{--foundry-global-font-line-height-150:150%;--foundry-global-font-line-height-130:130%;--foundry-global-font-letter-spacing-neg-10:-1%;--foundry-global-font-letter-spacing-neg-33:-2.5%;--foundry-global-font-letter-spacing-33:2.5%;--foundry-global-font-letter-spacing-10:1%;--foundry-global-font-letter-spacing-0:0%;--foundry-global-font-weight-700:700;--foundry-global-font-weight-400:400;--foundry-global-font-family-consolas:"Consolas";--foundry-global-font-family-helvetica-now-text:"Helvetica Now Text";--foundry-global-font-family-helvetica-now-display:"Helvetica Now Display";--foundry-global-font-family-arial:"Arial";--foundry-global-border-width-50:4px;--foundry-global-border-width-33:3px;--foundry-global-border-width-25:2px;--foundry-global-border-width-10:1px;--foundry-global-border-width-0:0px;--foundry-global-border-radius-pill:1000px;--foundry-global-border-radius-circle:9999px;--foundry-global-border-radius-400:32px;--foundry-global-border-radius-300:24px;--foundry-global-border-radius-200:16px;--foundry-global-border-radius-150:12px;--foundry-global-border-radius-100:8px;--foundry-global-border-radius-50:4px;--foundry-global-border-radius-25:2px;--foundry-global-border-radius-0:0px;--foundry-alias-font-line-height-body:var(--foundry-global-font-line-height-150);--foundry-alias-font-line-height-heading:var(--foundry-global-font-line-height-130);--foundry-alias-font-weight-bold:var(--foundry-global-font-weight-700);--foundry-alias-font-weight-regular:var(--foundry-global-font-weight-400);--foundry-alias-font-letter-spacing-all-caps-fallback:var(--foundry-global-font-letter-spacing-10);--foundry-alias-font-letter-spacing-all-caps-primary:var(--foundry-global-font-letter-spacing-10);--foundry-alias-font-letter-spacing-body-fallback:var(--foundry-global-font-letter-spacing-neg-33);--foundry-alias-font-letter-spacing-body-primary:var(--foundry-global-font-letter-spacing-neg-33);--foundry-alias-font-letter-spacing-heading-fallback:var(--foundry-global-font-letter-spacing-neg-33);--foundry-alias-font-letter-spacing-heading-primary:var(--foundry-global-font-letter-spacing-neg-33);--foundry-alias-font-family-code-fallback:var(--foundry-global-font-family-consolas);--foundry-alias-font-family-code-primary:var(--foundry-global-font-family-consolas);--foundry-alias-font-family-body-fallback:var(--foundry-global-font-family-arial);--foundry-alias-font-family-body-primary:var(--foundry-global-font-family-helvetica-now-text);--foundry-alias-font-family-heading-fallback:var(--foundry-global-font-family-arial);--foundry-alias-font-family-heading-primary:var(--foundry-global-font-family-helvetica-now-display);--__foundry-global-platform-scales-scale-6250:calc(500px * var(--__foundry-global-platform-scales-ratio));--__foundry-global-platform-scales-scale-5000:calc(400px * var(--__foundry-global-platform-scales-ratio));--__foundry-global-platform-scales-scale-4500:calc(360px * var(--__foundry-global-platform-scales-ratio));--__foundry-global-platform-scales-scale-4000:calc(320px * var(--__foundry-global-platform-scales-ratio));--__foundry-global-platform-scales-scale-3500:calc(280px * var(--__foundry-global-platform-scales-ratio));--__foundry-global-platform-scales-scale-3000:calc(240px * var(--__foundry-global-platform-scales-ratio));--__foundry-global-platform-scales-scale-2500:calc(200px * var(--__foundry-global-platform-scales-ratio));--__foundry-global-platform-scales-scale-2200:calc(176px * var(--__foundry-global-platform-scales-ratio));--__foundry-global-platform-scales-scale-2000:calc(160px * var(--__foundry-global-platform-scales-ratio));--__foundry-global-platform-scales-scale-1800:calc(144px * var(--__foundry-global-platform-scales-ratio));--__foundry-global-platform-scales-scale-1600:calc(128px * var(--__foundry-global-platform-scales-ratio));--__foundry-global-platform-scales-scale-1400:calc(112px * var(--__foundry-global-platform-scales-ratio));--__foundry-global-platform-scales-scale-1200:calc(96px * var(--__foundry-global-platform-scales-ratio));--__foundry-global-platform-scales-scale-1100:calc(88px * var(--__foundry-global-platform-scales-ratio));--__foundry-global-platform-scales-scale-1000:calc(80px * var(--__foundry-global-platform-scales-ratio));--__foundry-global-platform-scales-scale-900:calc(72px * var(--__foundry-global-platform-scales-ratio));--__foundry-global-platform-scales-scale-800:calc(64px * var(--__foundry-global-platform-scales-ratio));--__foundry-global-platform-scales-scale-700:calc(56px * var(--__foundry-global-platform-scales-ratio));--__foundry-global-platform-scales-scale-600:calc(48px * var(--__foundry-global-platform-scales-ratio));--__foundry-global-platform-scales-scale-500:calc(40px * var(--__foundry-global-platform-scales-ratio));--__foundry-global-platform-scales-scale-400:calc(32px * var(--__foundry-global-platform-scales-ratio));--__foundry-global-platform-scales-scale-300:calc(24px * var(--__foundry-global-platform-scales-ratio));--__foundry-global-platform-scales-scale-250:calc(20px * var(--__foundry-global-platform-scales-ratio));--__foundry-global-platform-scales-scale-225:calc(18px * var(--__foundry-global-platform-scales-ratio));--__foundry-global-platform-scales-scale-200:calc(16px * var(--__foundry-global-platform-scales-ratio));--__foundry-global-platform-scales-scale-175:calc(14px * var(--__foundry-global-platform-scales-ratio));--__foundry-global-platform-scales-scale-150:calc(12px * var(--__foundry-global-platform-scales-ratio));--__foundry-global-platform-scales-scale-100:calc(8px * var(--__foundry-global-platform-scales-ratio));--__foundry-global-platform-scales-scale-50:calc(4px * var(--__foundry-global-platform-scales-ratio));--__foundry-global-platform-scales-scale-33:calc(3px * var(--__foundry-global-platform-scales-ratio));--__foundry-global-platform-scales-scale-25:calc(2px * var(--__foundry-global-platform-scales-ratio));--__foundry-global-platform-scales-scale-10:calc(1px * var(--__foundry-global-platform-scales-ratio));--__foundry-global-platform-scales-scale-0:calc(0px * var(--__foundry-global-platform-scales-ratio));--foundry-global-font-spacing-400:var(--__foundry-global-platform-scales-scale-400);--foundry-global-font-size-1100:var(--__foundry-global-platform-scales-scale-1100);--foundry-global-font-size-1000:var(--__foundry-global-platform-scales-scale-1000);--foundry-global-font-size-900:var(--__foundry-global-platform-scales-scale-900);--foundry-global-font-size-800:var(--__foundry-global-platform-scales-scale-800);--foundry-global-font-size-700:var(--__foundry-global-platform-scales-scale-700);--foundry-global-font-size-600:var(--__foundry-global-platform-scales-scale-600);--foundry-global-font-size-500:var(--__foundry-global-platform-scales-scale-500);--foundry-global-font-size-400:var(--__foundry-global-platform-scales-scale-400);--foundry-global-font-size-300:var(--__foundry-global-platform-scales-scale-300);--foundry-global-font-size-250:var(--__foundry-global-platform-scales-scale-250);--foundry-global-font-size-225:var(--__foundry-global-platform-scales-scale-225);--foundry-global-font-size-200:var(--__foundry-global-platform-scales-scale-200);--foundry-global-font-size-175:var(--__foundry-global-platform-scales-scale-175);--foundry-global-font-size-150:var(--__foundry-global-platform-scales-scale-150);--foundry-global-spacing-dimensions-6250:var(--__foundry-global-platform-scales-scale-6250);--foundry-global-spacing-dimensions-5000:var(--__foundry-global-platform-scales-scale-5000);--foundry-global-spacing-dimensions-4500:var(--__foundry-global-platform-scales-scale-4500);--foundry-global-spacing-dimensions-4000:var(--__foundry-global-platform-scales-scale-4000);--foundry-global-spacing-dimensions-3500:var(--__foundry-global-platform-scales-scale-3500);--foundry-global-spacing-dimensions-3000:var(--__foundry-global-platform-scales-scale-3000);--foundry-global-spacing-dimensions-2500:var(--__foundry-global-platform-scales-scale-2500);--foundry-global-spacing-dimensions-2200:var(--__foundry-global-platform-scales-scale-2200);--foundry-global-spacing-dimensions-2000:var(--__foundry-global-platform-scales-scale-2000);--foundry-global-spacing-dimensions-1800:var(--__foundry-global-platform-scales-scale-1800);--foundry-global-spacing-dimensions-1600:var(--__foundry-global-platform-scales-scale-1600);--foundry-global-spacing-dimensions-1400:var(--__foundry-global-platform-scales-scale-1400);--foundry-global-spacing-dimensions-1200:var(--__foundry-global-platform-scales-scale-1200);--foundry-global-spacing-dimensions-1100:var(--__foundry-global-platform-scales-scale-1100);--foundry-global-spacing-dimensions-1000:var(--__foundry-global-platform-scales-scale-1000);--foundry-global-spacing-dimensions-900:var(--__foundry-global-platform-scales-scale-900);--foundry-global-spacing-dimensions-800:var(--__foundry-global-platform-scales-scale-800);--foundry-global-spacing-dimensions-700:var(--__foundry-global-platform-scales-scale-700);--foundry-global-spacing-dimensions-600:var(--__foundry-global-platform-scales-scale-600);--foundry-global-spacing-dimensions-500:var(--__foundry-global-platform-scales-scale-500);--foundry-global-spacing-dimensions-400:var(--__foundry-global-platform-scales-scale-400);--foundry-global-spacing-dimensions-300:var(--__foundry-global-platform-scales-scale-300);--foundry-global-spacing-dimensions-250:var(--__foundry-global-platform-scales-scale-250);--foundry-global-spacing-dimensions-200:var(--__foundry-global-platform-scales-scale-200);--foundry-global-spacing-dimensions-175:var(--__foundry-global-platform-scales-scale-175);--foundry-global-spacing-dimensions-150:var(--__foundry-global-platform-scales-scale-150);--foundry-global-spacing-dimensions-100:var(--__foundry-global-platform-scales-scale-100);--foundry-global-spacing-dimensions-50:var(--__foundry-global-platform-scales-scale-50);--foundry-global-spacing-dimensions-25:var(--__foundry-global-platform-scales-scale-25);--foundry-global-spacing-gap-1600:var(--__foundry-global-platform-scales-scale-1600);--foundry-global-spacing-gap-1400:var(--__foundry-global-platform-scales-scale-1400);--foundry-global-spacing-gap-1200:var(--__foundry-global-platform-scales-scale-1200);--foundry-global-spacing-gap-1100:var(--__foundry-global-platform-scales-scale-1100);--foundry-global-spacing-gap-1000:var(--__foundry-global-platform-scales-scale-1000);--foundry-global-spacing-gap-900:var(--__foundry-global-platform-scales-scale-900);--foundry-global-spacing-gap-800:var(--__foundry-global-platform-scales-scale-800);--foundry-global-spacing-gap-700:var(--__foundry-global-platform-scales-scale-700);--foundry-global-spacing-gap-600:var(--__foundry-global-platform-scales-scale-600);--foundry-global-spacing-gap-500:var(--__foundry-global-platform-scales-scale-500);--foundry-global-spacing-gap-400:var(--__foundry-global-platform-scales-scale-400);--foundry-global-spacing-gap-300:var(--__foundry-global-platform-scales-scale-300);--foundry-global-spacing-gap-250:var(--__foundry-global-platform-scales-scale-250);--foundry-global-spacing-gap-200:var(--__foundry-global-platform-scales-scale-200);--foundry-global-spacing-gap-175:var(--__foundry-global-platform-scales-scale-175);--foundry-global-spacing-gap-150:var(--__foundry-global-platform-scales-scale-150);--foundry-global-spacing-gap-100:var(--__foundry-global-platform-scales-scale-100);--foundry-global-spacing-gap-50:var(--__foundry-global-platform-scales-scale-50);--foundry-global-spacing-gap-25:var(--__foundry-global-platform-scales-scale-25);--foundry-alias-font-size-body-code:var(--foundry-global-font-size-200);--foundry-alias-font-size-body-all-caps:var(--foundry-global-font-size-150);--foundry-alias-font-size-body-metadata:var(--foundry-global-font-size-150);--foundry-alias-font-size-body-caption:var(--foundry-global-font-size-175);--foundry-alias-font-size-body-paragraph:var(--foundry-global-font-size-200);--foundry-alias-font-size-heading-06:var(--foundry-global-font-size-250);--foundry-alias-font-size-heading-05:var(--foundry-global-font-size-250);--foundry-alias-font-size-heading-04:var(--foundry-global-font-size-300);--foundry-alias-font-size-heading-03:var(--foundry-global-font-size-400);--foundry-alias-font-size-heading-02:var(--foundry-global-font-size-500);--foundry-alias-font-size-heading-01:var(--foundry-global-font-size-700);--foundry-alias-font-spacing-paragraph:var(--foundry-global-font-spacing-400)}', "", {
        version: 3,
        sources: ["webpack://./../../../../node_modules/@foundry/tokens/dist/css/common.css"],
        names: [],
        mappings: "AAKA,MACE,0CAA2C,CAC3C,0CAA2C,CAC3C,+CAAgD,CAChD,iDAAkD,CAClD,4CAA6C,CAC7C,0CAA2C,CAC3C,yCAA0C,CAC1C,oCAAqC,CACrC,oCAAqC,CACrC,gDAAiD,CACjD,oEAAqE,CACrE,0EAA2E,CAC3E,0CAA2C,CAC3C,oCAAqC,CACrC,oCAAqC,CACrC,oCAAqC,CACrC,oCAAqC,CACrC,mCAAoC,CACpC,0CAA2C,CAC3C,4CAA6C,CAC7C,uCAAwC,CACxC,uCAAwC,CACxC,uCAAwC,CACxC,uCAAwC,CACxC,sCAAuC,CACvC,qCAAsC,CACtC,qCAAsC,CACtC,oCAAqC,CACrC,gFAAiF,CACjF,mFAAoF,CACpF,sEAAuE,CACvE,yEAA0E,CAC1E,kGAAmG,CACnG,iGAAkG,CAClG,kGAAmG,CACnG,iGAAkG,CAClG,qGAAsG,CACtG,oGAAqG,CACrG,oFAAqF,CACrF,mFAAoF,CACpF,iFAAkF,CAClF,6FAA8F,CAC9F,oFAAqF,CACrF,mGAAoG,CACpG,yGAA0G,CAC1G,yGAA0G,CAC1G,yGAA0G,CAC1G,yGAA0G,CAC1G,yGAA0G,CAC1G,yGAA0G,CAC1G,yGAA0G,CAC1G,yGAA0G,CAC1G,yGAA0G,CAC1G,yGAA0G,CAC1G,yGAA0G,CAC1G,yGAA0G,CAC1G,wGAAyG,CACzG,wGAAyG,CACzG,wGAAyG,CACzG,uGAAwG,CACxG,uGAAwG,CACxG,uGAAwG,CACxG,uGAAwG,CACxG,uGAAwG,CACxG,uGAAwG,CACxG,uGAAwG,CACxG,uGAAwG,CACxG,uGAAwG,CACxG,uGAAwG,CACxG,uGAAwG,CACxG,uGAAwG,CACxG,sGAAuG,CACvG,qGAAsG,CACtG,qGAAsG,CACtG,qGAAsG,CACtG,qGAAsG,CACtG,oGAAqG,CACrG,mFAAoF,CACpF,kFAAmF,CACnF,kFAAmF,CACnF,gFAAiF,CACjF,gFAAiF,CACjF,gFAAiF,CACjF,gFAAiF,CACjF,gFAAiF,CACjF,gFAAiF,CACjF,gFAAiF,CACjF,gFAAiF,CACjF,gFAAiF,CACjF,gFAAiF,CACjF,gFAAiF,CACjF,gFAAiF,CACjF,2FAA4F,CAC5F,2FAA4F,CAC5F,2FAA4F,CAC5F,2FAA4F,CAC5F,2FAA4F,CAC5F,2FAA4F,CAC5F,2FAA4F,CAC5F,2FAA4F,CAC5F,2FAA4F,CAC5F,2FAA4F,CAC5F,2FAA4F,CAC5F,2FAA4F,CAC5F,2FAA4F,CAC5F,2FAA4F,CAC5F,2FAA4F,CAC5F,yFAA0F,CAC1F,yFAA0F,CAC1F,yFAA0F,CAC1F,yFAA0F,CAC1F,yFAA0F,CAC1F,yFAA0F,CAC1F,yFAA0F,CAC1F,yFAA0F,CAC1F,yFAA0F,CAC1F,yFAA0F,CAC1F,yFAA0F,CAC1F,yFAA0F,CAC1F,uFAAwF,CACxF,uFAAwF,CACxF,oFAAqF,CACrF,oFAAqF,CACrF,oFAAqF,CACrF,oFAAqF,CACrF,oFAAqF,CACrF,kFAAmF,CACnF,kFAAmF,CACnF,kFAAmF,CACnF,kFAAmF,CACnF,kFAAmF,CACnF,kFAAmF,CACnF,kFAAmF,CACnF,kFAAmF,CACnF,kFAAmF,CACnF,kFAAmF,CACnF,kFAAmF,CACnF,kFAAmF,CACnF,gFAAiF,CACjF,gFAAiF,CACjF,uEAAwE,CACxE,2EAA4E,CAC5E,2EAA4E,CAC5E,0EAA2E,CAC3E,4EAA6E,CAC7E,wEAAyE,CACzE,wEAAyE,CACzE,wEAAyE,CACzE,wEAAyE,CACzE,wEAAyE,CACzE,wEAAyE,CACzE,6EACF",
        sourcesContent: ['/**\n * Do not edit directly\n * Generated on Thu, 08 Aug 2024 09:34:15 GMT\n */\n\n:root {\n  --foundry-global-font-line-height-150: 150%;\n  --foundry-global-font-line-height-130: 130%;\n  --foundry-global-font-letter-spacing-neg-10: -1%;\n  --foundry-global-font-letter-spacing-neg-33: -2.5%;\n  --foundry-global-font-letter-spacing-33: 2.5%;\n  --foundry-global-font-letter-spacing-10: 1%;\n  --foundry-global-font-letter-spacing-0: 0%;\n  --foundry-global-font-weight-700: 700;\n  --foundry-global-font-weight-400: 400;\n  --foundry-global-font-family-consolas: "Consolas";\n  --foundry-global-font-family-helvetica-now-text: "Helvetica Now Text";\n  --foundry-global-font-family-helvetica-now-display: "Helvetica Now Display";\n  --foundry-global-font-family-arial: "Arial";\n  --foundry-global-border-width-50: 4px;\n  --foundry-global-border-width-33: 3px;\n  --foundry-global-border-width-25: 2px;\n  --foundry-global-border-width-10: 1px;\n  --foundry-global-border-width-0: 0px;\n  --foundry-global-border-radius-pill: 1000px;\n  --foundry-global-border-radius-circle: 9999px;\n  --foundry-global-border-radius-400: 32px;\n  --foundry-global-border-radius-300: 24px;\n  --foundry-global-border-radius-200: 16px;\n  --foundry-global-border-radius-150: 12px;\n  --foundry-global-border-radius-100: 8px;\n  --foundry-global-border-radius-50: 4px;\n  --foundry-global-border-radius-25: 2px;\n  --foundry-global-border-radius-0: 0px;\n  --foundry-alias-font-line-height-body: var(--foundry-global-font-line-height-150);\n  --foundry-alias-font-line-height-heading: var(--foundry-global-font-line-height-130);\n  --foundry-alias-font-weight-bold: var(--foundry-global-font-weight-700);\n  --foundry-alias-font-weight-regular: var(--foundry-global-font-weight-400);\n  --foundry-alias-font-letter-spacing-all-caps-fallback: var(--foundry-global-font-letter-spacing-10);\n  --foundry-alias-font-letter-spacing-all-caps-primary: var(--foundry-global-font-letter-spacing-10);\n  --foundry-alias-font-letter-spacing-body-fallback: var(--foundry-global-font-letter-spacing-neg-33);\n  --foundry-alias-font-letter-spacing-body-primary: var(--foundry-global-font-letter-spacing-neg-33);\n  --foundry-alias-font-letter-spacing-heading-fallback: var(--foundry-global-font-letter-spacing-neg-33);\n  --foundry-alias-font-letter-spacing-heading-primary: var(--foundry-global-font-letter-spacing-neg-33);\n  --foundry-alias-font-family-code-fallback: var(--foundry-global-font-family-consolas);\n  --foundry-alias-font-family-code-primary: var(--foundry-global-font-family-consolas);\n  --foundry-alias-font-family-body-fallback: var(--foundry-global-font-family-arial);\n  --foundry-alias-font-family-body-primary: var(--foundry-global-font-family-helvetica-now-text);\n  --foundry-alias-font-family-heading-fallback: var(--foundry-global-font-family-arial);\n  --foundry-alias-font-family-heading-primary: var(--foundry-global-font-family-helvetica-now-display);\n  --__foundry-global-platform-scales-scale-6250: calc(500px * var(--__foundry-global-platform-scales-ratio));\n  --__foundry-global-platform-scales-scale-5000: calc(400px * var(--__foundry-global-platform-scales-ratio));\n  --__foundry-global-platform-scales-scale-4500: calc(360px * var(--__foundry-global-platform-scales-ratio));\n  --__foundry-global-platform-scales-scale-4000: calc(320px * var(--__foundry-global-platform-scales-ratio));\n  --__foundry-global-platform-scales-scale-3500: calc(280px * var(--__foundry-global-platform-scales-ratio));\n  --__foundry-global-platform-scales-scale-3000: calc(240px * var(--__foundry-global-platform-scales-ratio));\n  --__foundry-global-platform-scales-scale-2500: calc(200px * var(--__foundry-global-platform-scales-ratio));\n  --__foundry-global-platform-scales-scale-2200: calc(176px * var(--__foundry-global-platform-scales-ratio));\n  --__foundry-global-platform-scales-scale-2000: calc(160px * var(--__foundry-global-platform-scales-ratio));\n  --__foundry-global-platform-scales-scale-1800: calc(144px * var(--__foundry-global-platform-scales-ratio));\n  --__foundry-global-platform-scales-scale-1600: calc(128px * var(--__foundry-global-platform-scales-ratio));\n  --__foundry-global-platform-scales-scale-1400: calc(112px * var(--__foundry-global-platform-scales-ratio));\n  --__foundry-global-platform-scales-scale-1200: calc(96px * var(--__foundry-global-platform-scales-ratio));\n  --__foundry-global-platform-scales-scale-1100: calc(88px * var(--__foundry-global-platform-scales-ratio));\n  --__foundry-global-platform-scales-scale-1000: calc(80px * var(--__foundry-global-platform-scales-ratio));\n  --__foundry-global-platform-scales-scale-900: calc(72px * var(--__foundry-global-platform-scales-ratio));\n  --__foundry-global-platform-scales-scale-800: calc(64px * var(--__foundry-global-platform-scales-ratio));\n  --__foundry-global-platform-scales-scale-700: calc(56px * var(--__foundry-global-platform-scales-ratio));\n  --__foundry-global-platform-scales-scale-600: calc(48px * var(--__foundry-global-platform-scales-ratio));\n  --__foundry-global-platform-scales-scale-500: calc(40px * var(--__foundry-global-platform-scales-ratio));\n  --__foundry-global-platform-scales-scale-400: calc(32px * var(--__foundry-global-platform-scales-ratio));\n  --__foundry-global-platform-scales-scale-300: calc(24px * var(--__foundry-global-platform-scales-ratio));\n  --__foundry-global-platform-scales-scale-250: calc(20px * var(--__foundry-global-platform-scales-ratio));\n  --__foundry-global-platform-scales-scale-225: calc(18px * var(--__foundry-global-platform-scales-ratio));\n  --__foundry-global-platform-scales-scale-200: calc(16px * var(--__foundry-global-platform-scales-ratio));\n  --__foundry-global-platform-scales-scale-175: calc(14px * var(--__foundry-global-platform-scales-ratio));\n  --__foundry-global-platform-scales-scale-150: calc(12px * var(--__foundry-global-platform-scales-ratio));\n  --__foundry-global-platform-scales-scale-100: calc(8px * var(--__foundry-global-platform-scales-ratio));\n  --__foundry-global-platform-scales-scale-50: calc(4px * var(--__foundry-global-platform-scales-ratio));\n  --__foundry-global-platform-scales-scale-33: calc(3px * var(--__foundry-global-platform-scales-ratio));\n  --__foundry-global-platform-scales-scale-25: calc(2px * var(--__foundry-global-platform-scales-ratio));\n  --__foundry-global-platform-scales-scale-10: calc(1px * var(--__foundry-global-platform-scales-ratio));\n  --__foundry-global-platform-scales-scale-0: calc(0px * var(--__foundry-global-platform-scales-ratio));\n  --foundry-global-font-spacing-400: var(--__foundry-global-platform-scales-scale-400);\n  --foundry-global-font-size-1100: var(--__foundry-global-platform-scales-scale-1100);\n  --foundry-global-font-size-1000: var(--__foundry-global-platform-scales-scale-1000);\n  --foundry-global-font-size-900: var(--__foundry-global-platform-scales-scale-900);\n  --foundry-global-font-size-800: var(--__foundry-global-platform-scales-scale-800);\n  --foundry-global-font-size-700: var(--__foundry-global-platform-scales-scale-700);\n  --foundry-global-font-size-600: var(--__foundry-global-platform-scales-scale-600);\n  --foundry-global-font-size-500: var(--__foundry-global-platform-scales-scale-500);\n  --foundry-global-font-size-400: var(--__foundry-global-platform-scales-scale-400);\n  --foundry-global-font-size-300: var(--__foundry-global-platform-scales-scale-300);\n  --foundry-global-font-size-250: var(--__foundry-global-platform-scales-scale-250);\n  --foundry-global-font-size-225: var(--__foundry-global-platform-scales-scale-225);\n  --foundry-global-font-size-200: var(--__foundry-global-platform-scales-scale-200);\n  --foundry-global-font-size-175: var(--__foundry-global-platform-scales-scale-175);\n  --foundry-global-font-size-150: var(--__foundry-global-platform-scales-scale-150);\n  --foundry-global-spacing-dimensions-6250: var(--__foundry-global-platform-scales-scale-6250);\n  --foundry-global-spacing-dimensions-5000: var(--__foundry-global-platform-scales-scale-5000);\n  --foundry-global-spacing-dimensions-4500: var(--__foundry-global-platform-scales-scale-4500);\n  --foundry-global-spacing-dimensions-4000: var(--__foundry-global-platform-scales-scale-4000);\n  --foundry-global-spacing-dimensions-3500: var(--__foundry-global-platform-scales-scale-3500);\n  --foundry-global-spacing-dimensions-3000: var(--__foundry-global-platform-scales-scale-3000);\n  --foundry-global-spacing-dimensions-2500: var(--__foundry-global-platform-scales-scale-2500);\n  --foundry-global-spacing-dimensions-2200: var(--__foundry-global-platform-scales-scale-2200);\n  --foundry-global-spacing-dimensions-2000: var(--__foundry-global-platform-scales-scale-2000);\n  --foundry-global-spacing-dimensions-1800: var(--__foundry-global-platform-scales-scale-1800);\n  --foundry-global-spacing-dimensions-1600: var(--__foundry-global-platform-scales-scale-1600);\n  --foundry-global-spacing-dimensions-1400: var(--__foundry-global-platform-scales-scale-1400);\n  --foundry-global-spacing-dimensions-1200: var(--__foundry-global-platform-scales-scale-1200);\n  --foundry-global-spacing-dimensions-1100: var(--__foundry-global-platform-scales-scale-1100);\n  --foundry-global-spacing-dimensions-1000: var(--__foundry-global-platform-scales-scale-1000);\n  --foundry-global-spacing-dimensions-900: var(--__foundry-global-platform-scales-scale-900);\n  --foundry-global-spacing-dimensions-800: var(--__foundry-global-platform-scales-scale-800);\n  --foundry-global-spacing-dimensions-700: var(--__foundry-global-platform-scales-scale-700);\n  --foundry-global-spacing-dimensions-600: var(--__foundry-global-platform-scales-scale-600);\n  --foundry-global-spacing-dimensions-500: var(--__foundry-global-platform-scales-scale-500);\n  --foundry-global-spacing-dimensions-400: var(--__foundry-global-platform-scales-scale-400);\n  --foundry-global-spacing-dimensions-300: var(--__foundry-global-platform-scales-scale-300);\n  --foundry-global-spacing-dimensions-250: var(--__foundry-global-platform-scales-scale-250);\n  --foundry-global-spacing-dimensions-200: var(--__foundry-global-platform-scales-scale-200);\n  --foundry-global-spacing-dimensions-175: var(--__foundry-global-platform-scales-scale-175);\n  --foundry-global-spacing-dimensions-150: var(--__foundry-global-platform-scales-scale-150);\n  --foundry-global-spacing-dimensions-100: var(--__foundry-global-platform-scales-scale-100);\n  --foundry-global-spacing-dimensions-50: var(--__foundry-global-platform-scales-scale-50);\n  --foundry-global-spacing-dimensions-25: var(--__foundry-global-platform-scales-scale-25);\n  --foundry-global-spacing-gap-1600: var(--__foundry-global-platform-scales-scale-1600);\n  --foundry-global-spacing-gap-1400: var(--__foundry-global-platform-scales-scale-1400);\n  --foundry-global-spacing-gap-1200: var(--__foundry-global-platform-scales-scale-1200);\n  --foundry-global-spacing-gap-1100: var(--__foundry-global-platform-scales-scale-1100);\n  --foundry-global-spacing-gap-1000: var(--__foundry-global-platform-scales-scale-1000);\n  --foundry-global-spacing-gap-900: var(--__foundry-global-platform-scales-scale-900);\n  --foundry-global-spacing-gap-800: var(--__foundry-global-platform-scales-scale-800);\n  --foundry-global-spacing-gap-700: var(--__foundry-global-platform-scales-scale-700);\n  --foundry-global-spacing-gap-600: var(--__foundry-global-platform-scales-scale-600);\n  --foundry-global-spacing-gap-500: var(--__foundry-global-platform-scales-scale-500);\n  --foundry-global-spacing-gap-400: var(--__foundry-global-platform-scales-scale-400);\n  --foundry-global-spacing-gap-300: var(--__foundry-global-platform-scales-scale-300);\n  --foundry-global-spacing-gap-250: var(--__foundry-global-platform-scales-scale-250);\n  --foundry-global-spacing-gap-200: var(--__foundry-global-platform-scales-scale-200);\n  --foundry-global-spacing-gap-175: var(--__foundry-global-platform-scales-scale-175);\n  --foundry-global-spacing-gap-150: var(--__foundry-global-platform-scales-scale-150);\n  --foundry-global-spacing-gap-100: var(--__foundry-global-platform-scales-scale-100);\n  --foundry-global-spacing-gap-50: var(--__foundry-global-platform-scales-scale-50);\n  --foundry-global-spacing-gap-25: var(--__foundry-global-platform-scales-scale-25);\n  --foundry-alias-font-size-body-code: var(--foundry-global-font-size-200);\n  --foundry-alias-font-size-body-all-caps: var(--foundry-global-font-size-150);\n  --foundry-alias-font-size-body-metadata: var(--foundry-global-font-size-150);\n  --foundry-alias-font-size-body-caption: var(--foundry-global-font-size-175);\n  --foundry-alias-font-size-body-paragraph: var(--foundry-global-font-size-200);\n  --foundry-alias-font-size-heading-06: var(--foundry-global-font-size-250);\n  --foundry-alias-font-size-heading-05: var(--foundry-global-font-size-250);\n  --foundry-alias-font-size-heading-04: var(--foundry-global-font-size-300);\n  --foundry-alias-font-size-heading-03: var(--foundry-global-font-size-400);\n  --foundry-alias-font-size-heading-02: var(--foundry-global-font-size-500);\n  --foundry-alias-font-size-heading-01: var(--foundry-global-font-size-700);\n  --foundry-alias-font-spacing-paragraph: var(--foundry-global-font-spacing-400);\n}\n'],
        sourceRoot: ""
      }]), n.locals = {};
      const o = n
    },
    22758: (t, e, r) => {
      "use strict";
      r.d(e, {
        A: () => o
      });
      var i = r(42587),
        a = r.n(i),
        s = r(15081),
        n = r.n(s)()(a());
      n.push([t.id, ":root{--__foundry-global-platform-scales-ratio:1}", "", {
        version: 3,
        sources: ["webpack://./../../../../node_modules/@foundry/tokens/dist/css/mobile.css"],
        names: [],
        mappings: "AAKA,MACE,0CACF",
        sourcesContent: ["/**\n * Do not edit directly\n * Generated on Thu, 08 Aug 2024 09:34:15 GMT\n */\n\n:root {\n  --__foundry-global-platform-scales-ratio: 1;\n}\n"],
        sourceRoot: ""
      }]), n.locals = {};
      const o = n
    },
    53315: (t, e) => {
      var r;
      ! function() {
        "use strict";
        var i = {}.hasOwnProperty;

        function a() {
          for (var t = "", e = 0; e < arguments.length; e++) {
            var r = arguments[e];
            r && (t = n(t, s(r)))
          }
          return t
        }

        function s(t) {
          if ("string" == typeof t || "number" == typeof t) return t;
          if ("object" != typeof t) return "";
          if (Array.isArray(t)) return a.apply(null, t);
          if (t.toString !== Object.prototype.toString && !t.toString.toString().includes("[native code]")) return t.toString();
          var e = "";
          for (var r in t) i.call(t, r) && t[r] && (e = n(e, r));
          return e
        }

        function n(t, e) {
          return e ? t ? t + " " + e : t + e : t
        }
        t.exports ? (a.default = a, t.exports = a) : void 0 === (r = function() {
          return a
        }.apply(e, [])) || (t.exports = r)
      }()
    },
    83698: (t, e, r) => {
      "use strict";
      r.d(e, {
        O: () => _t
      });
      var i = r(13699),
        a = r(17761);
      var s = r(80890),
        n = r(41585),
        o = r(90306);
      const l = t => t * t,
        h = (0, o.G)(l),
        p = (0, n.V)(l);
      var c = r(34219),
        f = r(25168),
        u = r(10631);

      function d(t, e, r) {
        return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? t + 6 * (e - t) * r : r < .5 ? e : r < 2 / 3 ? t + (e - t) * (2 / 3 - r) * 6 : t
      }
      var m = r(33556),
        y = r(77719),
        g = r(66603);
      const v = (t, e, r) => {
          const i = t * t;
          return Math.sqrt(Math.max(0, r * (e * e - i) + i))
        },
        b = [m.u, y.B, g.V];

      function x(t) {
        const e = (r = t, b.find((t => t.test(r))));
        var r;
        (0, i.V)(Boolean(e), `'${t}' is not an animatable color. Use the equivalent color code instead.`);
        let a = e.parse(t);
        return e === g.V && (a = function({
          hue: t,
          saturation: e,
          lightness: r,
          alpha: i
        }) {
          t /= 360, r /= 100;
          let a = 0,
            s = 0,
            n = 0;
          if (e /= 100) {
            const i = r < .5 ? r * (1 + e) : r + e - r * e,
              o = 2 * r - i;
            a = d(o, i, t + 1 / 3), s = d(o, i, t), n = d(o, i, t - 1 / 3)
          } else a = s = n = r;
          return {
            red: Math.round(255 * a),
            green: Math.round(255 * s),
            blue: Math.round(255 * n),
            alpha: i
          }
        }(a)), a
      }
      const C = (t, e) => {
        const r = x(t),
          i = x(e),
          a = {
            ...r
          };
        return t => (a.red = v(r.red, i.red, t), a.green = v(r.green, i.green, t), a.blue = v(r.blue, i.blue, t), a.alpha = (0, u.j)(r.alpha, i.alpha, t), y.B.transform(a))
      };
      var A = r(95611),
        _ = r(81982);

      function E(t, e) {
        return "number" == typeof t ? r => (0, u.j)(t, e, r) : c.y.test(t) ? C(t, e) : T(t, e)
      }
      const S = (t, e) => {
          const r = [...t],
            i = r.length,
            a = t.map(((t, r) => E(t, e[r])));
          return t => {
            for (let e = 0; e < i; e++) r[e] = a[e](t);
            return r
          }
        },
        P = (t, e) => {
          const r = {
              ...t,
              ...e
            },
            i = {};
          for (const a in r) void 0 !== t[a] && void 0 !== e[a] && (i[a] = E(t[a], e[a]));
          return t => {
            for (const e in i) r[e] = i[e](t);
            return r
          }
        },
        T = (t, e) => {
          const r = _.f.createTransformer(e),
            a = (0, _.V)(t),
            s = (0, _.V)(e);
          return a.numColors === s.numColors && a.numNumbers >= s.numNumbers ? (0, A.F)(S(a.values, s.values), r) : ((0, i.$)(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), r => `${r>0?e:t}`)
        };
      var F = r(67026);
      const w = (t, e) => r => (0, u.j)(t, e, r);

      function M(t, e, {
        clamp: r = !0,
        ease: a,
        mixer: s
      } = {}) {
        const n = t.length;
        (0, i.V)(n === e.length, "Both input and output ranges must be the same length"), (0, i.V)(!a || !Array.isArray(a) || a.length === n - 1, "Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."), t[0] > t[n - 1] && (t = [...t].reverse(), e = [...e].reverse());
        const o = function(t, e, r) {
            const i = [],
              a = r || ("number" == typeof(s = t[0]) ? w : "string" == typeof s ? c.y.test(s) ? C : T : Array.isArray(s) ? S : "object" == typeof s ? P : w);
            var s;
            const n = t.length - 1;
            for (let r = 0; r < n; r++) {
              let s = a(t[r], t[r + 1]);
              if (e) {
                const t = Array.isArray(e) ? e[r] : e;
                s = (0, A.F)(t, s)
              }
              i.push(s)
            }
            return i
          }(e, a, s),
          l = o.length,
          h = e => {
            let r = 0;
            if (l > 1)
              for (; r < t.length - 2 && !(e < t[r + 1]); r++);
            const i = (0, F.q)(t[r], t[r + 1], e);
            return o[r](i)
          };
        return r ? e => h((0, f.q)(t[0], t[n - 1], e)) : h
      }
      var k = r(36763);
      const D = (t, e, r) => (((1 - 3 * r + 3 * e) * t + (3 * r - 6 * e)) * t + 3 * e) * t;

      function I(t, e, r, i) {
        if (t === e && r === i) return k.l;
        return a => 0 === a || 1 === a ? a : D(function(t, e, r, i, a) {
          let s, n, o = 0;
          do {
            n = e + (r - e) / 2, s = D(n, i, a) - t, s > 0 ? r = n : e = n
          } while (Math.abs(s) > 1e-7 && ++o < 12);
          return n
        }(a, 0, 1, t, r), e, i)
      }
      var V = r(16660);
      const B = I(.33, 1.53, .69, .99),
        R = (0, o.G)(B),
        L = (0, n.V)(R),
        G = {
          linear: k.l,
          easeIn: l,
          easeInOut: p,
          easeOut: h,
          circIn: V.po,
          circInOut: V.tn,
          circOut: V.yT,
          backIn: R,
          backInOut: L,
          backOut: B,
          anticipate: t => (t *= 2) < 1 ? .5 * R(t) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
        },
        O = t => {
          if (Array.isArray(t)) {
            (0, i.V)(4 === t.length, "Cubic bezier arrays must contain four numerical values.");
            const [e, r, a, s] = t;
            return I(e, r, a, s)
          }
          return "string" == typeof t ? ((0, i.V)(void 0 !== G[t], `Invalid easing type '${t}'`), G[t]) : t
        };

      function z({
        keyframes: t,
        ease: e = p,
        times: r,
        duration: i = 300
      }) {
        t = [...t];
        const a = z[0],
          s = (t => Array.isArray(t) && "number" != typeof t[0])(e) ? e.map(O) : O(e),
          n = {
            done: !1,
            value: a
          },
          o = function(t, e) {
            return t.map((t => t * e))
          }(r && r.length === z.length ? r : function(t) {
            const e = t.length;
            return t.map(((t, r) => 0 !== r ? r / (e - 1) : 0))
          }(t), i);

        function l() {
          return M(o, t, {
            ease: Array.isArray(s) ? s : (e = t, r = s, e.map((() => r || p)).splice(0, e.length - 1))
          });
          var e, r
        }
        let h = l();
        return {
          next: t => (n.value = h(t), n.done = t >= i, n),
          flipTarget: () => {
            t.reverse(), h = l()
          }
        }
      }
      const N = .001,
        j = .01,
        H = 10,
        q = .05,
        W = 1;
      const $ = 12;

      function U(t, e) {
        return t * Math.sqrt(1 - e * e)
      }
      var Y = r(22729);
      const X = ["duration", "bounce"],
        J = ["stiffness", "damping", "mass"];

      function K(t, e) {
        return e.some((e => void 0 !== t[e]))
      }

      function Z({
        keyframes: t,
        restSpeed: e = 2,
        restDelta: r = .01,
        ...a
      }) {
        let s = t[0],
          n = t[t.length - 1];
        const o = {
            done: !1,
            value: s
          },
          {
            stiffness: l,
            damping: h,
            mass: p,
            velocity: c,
            duration: u,
            isResolvedFromDuration: d
          } = function(t) {
            let e = {
              velocity: 0,
              stiffness: 100,
              damping: 10,
              mass: 1,
              isResolvedFromDuration: !1,
              ...t
            };
            if (!K(t, J) && K(t, X)) {
              const r = function({
                duration: t = 800,
                bounce: e = .25,
                velocity: r = 0,
                mass: a = 1
              }) {
                let s, n;
                (0, i.$)(t <= 1e3 * H, "Spring duration must be 10 seconds or less");
                let o = 1 - e;
                o = (0, f.q)(q, W, o), t = (0, f.q)(j, H, t / 1e3), o < 1 ? (s = e => {
                  const i = e * o,
                    a = i * t,
                    s = i - r,
                    n = U(e, o),
                    l = Math.exp(-a);
                  return N - s / n * l
                }, n = e => {
                  const i = e * o * t,
                    a = i * r + r,
                    n = Math.pow(o, 2) * Math.pow(e, 2) * t,
                    l = Math.exp(-i),
                    h = U(Math.pow(e, 2), o);
                  return (-s(e) + N > 0 ? -1 : 1) * ((a - n) * l) / h
                }) : (s = e => Math.exp(-e * t) * ((e - r) * t + 1) - N, n = e => Math.exp(-e * t) * (t * t * (r - e)));
                const l = function(t, e, r) {
                  let i = r;
                  for (let r = 1; r < $; r++) i -= t(i) / e(i);
                  return i
                }(s, n, 5 / t);
                if (t *= 1e3, isNaN(l)) return {
                  stiffness: 100,
                  damping: 10,
                  duration: t
                }; {
                  const e = Math.pow(l, 2) * a;
                  return {
                    stiffness: e,
                    damping: 2 * o * Math.sqrt(a * e),
                    duration: t
                  }
                }
              }(t);
              e = {
                ...e,
                ...r,
                velocity: 0,
                mass: 1
              }, e.isResolvedFromDuration = !0
            }
            return e
          }(a);
        let m = Q,
          y = c ? -c / 1e3 : 0;
        const g = h / (2 * Math.sqrt(l * p));

        function v() {
          const t = n - s,
            e = Math.sqrt(l / p) / 1e3;
          if (void 0 === r && (r = Math.min(Math.abs(n - s) / 100, .4)), g < 1) {
            const r = U(e, g);
            m = i => {
              const a = Math.exp(-g * e * i);
              return n - a * ((y + g * e * t) / r * Math.sin(r * i) + t * Math.cos(r * i))
            }
          } else if (1 === g) m = r => n - Math.exp(-e * r) * (t + (y + e * t) * r);
          else {
            const r = e * Math.sqrt(g * g - 1);
            m = i => {
              const a = Math.exp(-g * e * i),
                s = Math.min(r * i, 300);
              return n - a * ((y + g * e * t) * Math.sinh(s) + r * t * Math.cosh(s)) / r
            }
          }
        }
        return v(), {
          next: t => {
            const i = m(t);
            if (d) o.done = t >= u;
            else {
              let a = y;
              if (0 !== t)
                if (g < 1) {
                  const e = Math.max(0, t - 5);
                  a = (0, Y.f)(i - m(e), t - e)
                } else a = 0;
              const s = Math.abs(a) <= e,
                l = Math.abs(n - i) <= r;
              o.done = s && l
            }
            return o.value = o.done ? n : i, o
          },
          flipTarget: () => {
            y = -y, [s, n] = [n, s], v()
          }
        }
      }
      Z.needsInterpolation = (t, e) => "string" == typeof t || "string" == typeof e;
      const Q = t => 0,
        tt = {
          decay: function({
            keyframes: t = [0],
            velocity: e = 0,
            power: r = .8,
            timeConstant: i = 350,
            restDelta: a = .5,
            modifyTarget: s
          }) {
            const n = t[0],
              o = {
                done: !1,
                value: n
              };
            let l = r * e;
            const h = n + l,
              p = void 0 === s ? h : s(h);
            return p !== h && (l = p - n), {
              next: t => {
                const e = -l * Math.exp(-t / i);
                return o.done = !(e > a || e < -a), o.value = o.done ? p : p + e, o
              },
              flipTarget: () => {}
            }
          },
          keyframes: z,
          tween: z,
          spring: Z
        };

      function et(t, e, r = 0) {
        return t - e - r
      }
      const rt = t => {
        const e = ({
          delta: e
        }) => t(e);
        return {
          start: () => s.OH.update(e, !0),
          stop: () => s.eO.update(e)
        }
      };

      function it({
        duration: t,
        driver: e = rt,
        elapsed: r = 0,
        repeat: i = 0,
        repeatType: a = "loop",
        repeatDelay: s = 0,
        keyframes: n,
        autoplay: o = !0,
        onPlay: l,
        onStop: h,
        onComplete: p,
        onRepeat: c,
        onUpdate: f,
        type: u = "keyframes",
        ...d
      }) {
        var m, y;
        let g, v, b, x = 0,
          C = t,
          A = !1,
          _ = !0;
        const E = tt[n.length > 2 ? "keyframes" : u],
          S = n[0],
          P = n[n.length - 1];
        (null === (y = (m = E).needsInterpolation) || void 0 === y ? void 0 : y.call(m, S, P)) && (b = M([0, 100], [S, P], {
          clamp: !1
        }), n = [0, 100]);
        const T = E({
          ...d,
          duration: t,
          keyframes: n
        });
        return o && (l && l(), g = e((function(t) {
          if (_ || (t = -t), r += t, !A) {
            const t = T.next(Math.max(0, r));
            v = t.value, b && (v = b(v)), A = _ ? t.done : r <= 0
          }
          f && f(v), A && (0 === x && (C = void 0 !== C ? C : r), x < i ? function(t, e, r, i) {
            return i ? t >= e + r : t <= -r
          }(r, C, s, _) && (x++, "reverse" === a ? (_ = x % 2 == 0, r = function(t, e = 0, r = 0, i = !0) {
            return i ? et(e + -t, e, r) : e - (t - e) + r
          }(r, C, s, _)) : (r = et(r, C, s), "mirror" === a && T.flipTarget()), A = !1, c && c()) : (g.stop(), p && p()))
        })), g.start()), {
          stop: () => {
            h && h(), g.stop()
          },
          sample: t => T.next(Math.max(0, t))
        }
      }
      const at = ([t, e, r, i]) => `cubic-bezier(${t}, ${e}, ${r}, ${i})`,
        st = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: at([0, .65, .55, 1]),
          circOut: at([.55, 0, 1, .45]),
          backIn: at([.31, .01, .66, -.59]),
          backOut: at([.33, 1.53, .69, .99])
        };

      function nt(t) {
        if (t) return Array.isArray(t) ? at(t) : st[t]
      }
      var ot = r(82448);

      function lt({
        keyframes: t,
        elapsed: e,
        onUpdate: r,
        onComplete: i
      }) {
        const a = () => (r && r(t[t.length - 1]), i && i(), () => {});
        return e ? (0, ot.c)(a, -e) : a()
      }
      var ht = r(9581);
      const pt = () => ({
          type: "spring",
          stiffness: 500,
          damping: 25,
          restSpeed: 10
        }),
        ct = t => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === t ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10
        }),
        ft = () => ({
          type: "keyframes",
          ease: "linear",
          duration: .3
        }),
        ut = {
          type: "keyframes",
          duration: .8
        },
        dt = {
          x: pt,
          y: pt,
          z: pt,
          rotate: pt,
          rotateX: pt,
          rotateY: pt,
          rotateZ: pt,
          scaleX: ct,
          scaleY: ct,
          scale: ct,
          opacity: ft,
          backgroundColor: ft,
          color: ft,
          default: ct
        },
        mt = (t, {
          keyframes: e
        }) => e.length > 2 ? ut : (dt[t] || dt.default)(e[1]),
        yt = (t, e) => !("zIndex" === t || "number" != typeof e && !Array.isArray(e) && ("string" != typeof e || !_.f.test(e) || e.startsWith("url(")));
      var gt = r(14680),
        vt = r(47402);
      const bt = {
          waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate")
        },
        xt = {},
        Ct = {};
      for (const t in bt) Ct[t] = () => (void 0 === xt[t] && (xt[t] = bt[t]()), xt[t]);
      const At = new Set(["opacity"]),
        _t = (t, e, r, n = {}) => o => {
          const l = (0, vt.rU)(n, t) || {},
            h = l.delay || n.delay || 0;
          let {
            elapsed: p = 0
          } = n;
          p -= (0, a.f)(h);
          const c = function(t, e, r, i) {
              const a = yt(e, r);
              let s = void 0 !== i.from ? i.from : t.get();
              return "none" === s && a && "string" == typeof r ? s = (0, gt.J)(e, r) : (0, vt.be)(s) && "string" == typeof r ? s = (0, vt.RL)(r) : !Array.isArray(r) && (0, vt.be)(r) && "string" == typeof s && (r = (0, vt.RL)(s)), Array.isArray(r) ? (null === r[0] && (r[0] = s), r) : [s, r]
            }(e, t, r, l),
            f = c[0],
            u = c[c.length - 1],
            d = yt(t, f),
            m = yt(t, u);
          (0, i.$)(d === m, `You are trying to animate ${t} from "${f}" to "${u}". ${f} is not an animatable value - to enable this animation set ${f} to a value animatable to ${u} via the \`style\` property.`);
          let y = {
            keyframes: c,
            velocity: e.getVelocity(),
            ...l,
            elapsed: p,
            onUpdate: t => {
              e.set(t), l.onUpdate && l.onUpdate(t)
            },
            onComplete: () => {
              o(), l.onComplete && l.onComplete()
            }
          };
          if (!d || !m || !1 === l.type) return lt(y);
          if ("inertia" === l.type) {
            const t = function({
              keyframes: t,
              velocity: e = 0,
              min: r,
              max: i,
              power: a = .8,
              timeConstant: s = 750,
              bounceStiffness: n = 500,
              bounceDamping: o = 10,
              restDelta: l = 1,
              modifyTarget: h,
              driver: p,
              onUpdate: c,
              onComplete: f,
              onStop: u
            }) {
              const d = t[0];
              let m;

              function y(t) {
                return void 0 !== r && t < r || void 0 !== i && t > i
              }

              function g(t) {
                return void 0 === r ? i : void 0 === i || Math.abs(r - t) < Math.abs(i - t) ? r : i
              }

              function v(t) {
                null == m || m.stop(), m = it({
                  keyframes: [0, 1],
                  velocity: 0,
                  ...t,
                  driver: p,
                  onUpdate: e => {
                    var r;
                    null == c || c(e), null === (r = t.onUpdate) || void 0 === r || r.call(t, e)
                  },
                  onComplete: f,
                  onStop: u
                })
              }

              function b(t) {
                v({
                  type: "spring",
                  stiffness: n,
                  damping: o,
                  restDelta: l,
                  ...t
                })
              }
              if (y(d)) b({
                velocity: e,
                keyframes: [d, g(d)]
              });
              else {
                let t = a * e + d;
                void 0 !== h && (t = h(t));
                const i = g(t),
                  n = i === r ? -1 : 1;
                let o, p;
                const c = t => {
                  o = p, p = t, e = (0, Y.f)(t - o, ht.u.delta), (1 === n && t > i || -1 === n && t < i) && b({
                    keyframes: [t, i],
                    velocity: e
                  })
                };
                v({
                  type: "decay",
                  keyframes: [d, 0],
                  velocity: e,
                  timeConstant: s,
                  power: a,
                  restDelta: l,
                  modifyTarget: h,
                  onUpdate: y(t) ? c : void 0
                })
              }
              return {
                stop: () => null == m ? void 0 : m.stop()
              }
            }(y);
            return () => t.stop()
          }(0, vt.D2)(l) || (y = {
            ...y,
            ...mt(t, y)
          }), y.duration && (y.duration = (0, a.f)(y.duration)), y.repeatDelay && (y.repeatDelay = (0, a.f)(y.repeatDelay));
          const g = e.owner,
            v = g && g.current;
          if (Ct.waapi() && At.has(t) && !y.repeatDelay && "mirror" !== y.repeatType && 0 !== y.damping && g && v instanceof HTMLElement && !g.getProps().onUpdate) return function(t, e, {
            onUpdate: r,
            onComplete: i,
            ...a
          }) {
            let {
              keyframes: n,
              duration: o = .3,
              elapsed: l = 0,
              ease: h
            } = a;
            if ("spring" === a.type || !(!(p = a.ease) || Array.isArray(p) || "string" == typeof p && st[p])) {
              const t = it(a);
              let e = {
                done: !1,
                value: n[0]
              };
              const r = [];
              let i = 0;
              for (; !e.done;) e = t.sample(i), r.push(e.value), i += 10;
              n = r, o = i - 10, h = "linear"
            }
            var p;
            const c = function(t, e, r, {
              delay: i = 0,
              duration: a,
              repeat: s = 0,
              repeatType: n = "loop",
              ease: o,
              times: l
            } = {}) {
              return t.animate({
                [e]: r,
                offset: l
              }, {
                delay: i,
                duration: a,
                easing: nt(o),
                fill: "both",
                iterations: s + 1,
                direction: "reverse" === n ? "alternate" : "normal"
              })
            }(t.owner.current, e, n, {
              ...a,
              delay: -l,
              duration: o,
              ease: h
            });
            return c.onfinish = () => {
              t.set(n[n.length - 1]), i && i()
            }, () => {
              const {
                currentTime: e
              } = c;
              if (e) {
                const r = it(a);
                t.setWithVelocity(r.sample(e - 10).value, r.sample(e).value, 10)
              }
              s.OH.update((() => c.cancel()))
            }
          }(e, t, y); {
            const t = it(y);
            return () => t.stop()
          }
        }
    },
    24866: (t, e, r) => {
      "use strict";

      function i(t) {
        return "object" == typeof t && "function" == typeof t.start
      }
      r.d(e, {
        N: () => i
      })
    },
    74496: (t, e, r) => {
      "use strict";
      r.d(e, {
        p: () => i
      });
      const i = t => Array.isArray(t)
    },
    47402: (t, e, r) => {
      "use strict";
      r.d(e, {
        D2: () => a,
        RL: () => n,
        be: () => s,
        rU: () => o
      });
      var i = r(14680);

      function a({
        when: t,
        delay: e,
        delayChildren: r,
        staggerChildren: i,
        staggerDirection: a,
        repeat: s,
        repeatType: n,
        repeatDelay: o,
        from: l,
        ...h
      }) {
        return !!Object.keys(h).length
      }

      function s(t) {
        return 0 === t || "string" == typeof t && 0 === parseFloat(t) && -1 === t.indexOf(" ")
      }

      function n(t) {
        return "number" == typeof t ? 0 : (0, i.J)("", t)
      }

      function o(t, e) {
        return t[e] || t.default || t
      }
    },
    88944: (t, e, r) => {
      "use strict";
      r.d(e, {
        xQ: () => s
      });
      var i = r(62229),
        a = r(64143);

      function s() {
        const t = (0, i.useContext)(a.t);
        if (null === t) return [!0, null];
        const {
          isPresent: e,
          onExitComplete: r,
          register: s
        } = t, n = (0, i.useId)();
        return (0, i.useEffect)((() => s(n)), []), !e && r ? [!1, () => r && r(n)] : [!0]
      }
    },
    91281: (t, e, r) => {
      "use strict";
      r.d(e, {
        L: () => i
      });
      const i = (0, r(62229).createContext)({})
    },
    6128: (t, e, r) => {
      "use strict";
      r.d(e, {
        Y: () => i
      });
      const i = (0, r(62229).createContext)({
        strict: !1
      })
    },
    83014: (t, e, r) => {
      "use strict";
      r.d(e, {
        Q: () => i
      });
      const i = (0, r(62229).createContext)({
        transformPagePoint: t => t,
        isStatic: !1,
        reducedMotion: "never"
      })
    },
    6417: (t, e, r) => {
      "use strict";
      r.d(e, {
        A: () => a,
        f: () => s
      });
      var i = r(62229);
      const a = (0, i.createContext)({});

      function s() {
        return (0, i.useContext)(a).visualElement
      }
    },
    64143: (t, e, r) => {
      "use strict";
      r.d(e, {
        t: () => i
      });
      const i = (0, r(62229).createContext)(null)
    },
    83413: (t, e, r) => {
      "use strict";
      r.d(e, {
        N: () => i
      });
      const i = (0, r(62229).createContext)({})
    },
    16660: (t, e, r) => {
      "use strict";
      r.d(e, {
        po: () => s,
        tn: () => o,
        yT: () => n
      });
      var i = r(41585),
        a = r(90306);
      const s = t => 1 - Math.sin(Math.acos(t)),
        n = (0, a.G)(s),
        o = (0, i.V)(n)
    },
    41585: (t, e, r) => {
      "use strict";
      r.d(e, {
        V: () => i
      });
      const i = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2
    },
    90306: (t, e, r) => {
      "use strict";
      r.d(e, {
        G: () => i
      });
      const i = t => e => 1 - t(1 - e)
    },
    40216: (t, e, r) => {
      "use strict";
      r.d(e, {
        J: () => l,
        e: () => o
      });
      var i = r(77863);
      const a = {
        pageX: 0,
        pageY: 0
      };

      function s(t, e = "page") {
        const r = t.touches[0] || t.changedTouches[0] || a;
        return {
          x: r[e + "X"],
          y: r[e + "Y"]
        }
      }

      function n(t, e = "page") {
        return {
          x: t[e + "X"],
          y: t[e + "Y"]
        }
      }

      function o(t, e = "page") {
        return {
          point: (0, i.k)(t) ? s(t, e) : n(t, e)
        }
      }
      const l = (t, e = !1) => {
        const r = e => t(e, o(e));
        return e ? (i = r, t => {
          const e = t instanceof MouseEvent;
          (!e || e && 0 === t.button) && i(t)
        }) : r;
        var i
      }
    },
    3902: (t, e, r) => {
      "use strict";
      r.d(e, {
        Q: () => s,
        k: () => a
      });
      var i = r(62229);

      function a(t, e, r, i = {
        passive: !0
      }) {
        return t.addEventListener(e, r, i), () => t.removeEventListener(e, r)
      }

      function s(t, e, r, s) {
        (0, i.useEffect)((() => {
          const i = t.current;
          if (r && i) return a(i, e, r, s)
        }), [t, e, r, s])
      }
    },
    53372: (t, e, r) => {
      "use strict";
      r.d(e, {
        h: () => f,
        B: () => u
      });
      var i = r(3902),
        a = r(40216),
        s = r(32576);
      const n = () => s.B && null === window.onpointerdown,
        o = () => s.B && null === window.ontouchstart,
        l = () => s.B && null === window.onmousedown,
        h = {
          pointerdown: "mousedown",
          pointermove: "mousemove",
          pointerup: "mouseup",
          pointercancel: "mousecancel",
          pointerover: "mouseover",
          pointerout: "mouseout",
          pointerenter: "mouseenter",
          pointerleave: "mouseleave"
        },
        p = {
          pointerdown: "touchstart",
          pointermove: "touchmove",
          pointerup: "touchend",
          pointercancel: "touchcancel"
        };

      function c(t) {
        return n() ? t : o() ? p[t] : l() ? h[t] : t
      }

      function f(t, e, r, s) {
        return (0, i.k)(t, c(e), (0, a.J)(r, "pointerdown" === e), s)
      }

      function u(t, e, r, s) {
        return (0, i.Q)(t, c(e), r && (0, a.J)(r, "pointerdown" === e), s)
      }
    },
    9581: (t, e, r) => {
      "use strict";
      r.d(e, {
        u: () => i
      });
      const i = {
        delta: 0,
        timestamp: 0
      }
    },
    80890: (t, e, r) => {
      "use strict";
      r.d(e, {
        eO: () => u,
        qX: () => d,
        OH: () => f
      });
      const i = 1 / 60 * 1e3,
        a = "undefined" != typeof performance ? () => performance.now() : () => Date.now(),
        s = "undefined" != typeof window ? t => window.requestAnimationFrame(t) : t => setTimeout((() => t(a())), i);
      var n = r(9581);
      let o = !0,
        l = !1,
        h = !1;
      const p = ["read", "update", "preRender", "render", "postRender"],
        c = p.reduce(((t, e) => (t[e] = function(t) {
          let e = [],
            r = [],
            i = 0,
            a = !1,
            s = !1;
          const n = new WeakSet,
            o = {
              schedule: (t, s = !1, o = !1) => {
                const l = o && a,
                  h = l ? e : r;
                return s && n.add(t), -1 === h.indexOf(t) && (h.push(t), l && a && (i = e.length)), t
              },
              cancel: t => {
                const e = r.indexOf(t); - 1 !== e && r.splice(e, 1), n.delete(t)
              },
              process: l => {
                if (a) s = !0;
                else {
                  if (a = !0, [e, r] = [r, e], r.length = 0, i = e.length, i)
                    for (let r = 0; r < i; r++) {
                      const i = e[r];
                      i(l), n.has(i) && (o.schedule(i), t())
                    }
                  a = !1, s && (s = !1, o.process(l))
                }
              }
            };
          return o
        }((() => l = !0)), t)), {}),
        f = p.reduce(((t, e) => {
          const r = c[e];
          return t[e] = (t, e = !1, i = !1) => (l || g(), r.schedule(t, e, i)), t
        }), {}),
        u = p.reduce(((t, e) => (t[e] = c[e].cancel, t)), {}),
        d = p.reduce(((t, e) => (t[e] = () => c[e].process(n.u), t)), {}),
        m = t => c[t].process(n.u),
        y = t => {
          l = !1, n.u.delta = o ? i : Math.max(Math.min(t - n.u.timestamp, 40), 1), n.u.timestamp = t, h = !0, p.forEach(m), h = !1, l && (o = !1, s(y))
        },
        g = () => {
          l = !0, o = !0, h || s(y)
        }
    },
    81298: (t, e, r) => {
      "use strict";

      function i(t) {
        let e = null;
        return () => null === e && (e = t, () => {
          e = null
        })
      }
      r.d(e, {
        D3: () => o,
        nQ: () => n
      });
      const a = i("dragHorizontal"),
        s = i("dragVertical");

      function n(t) {
        let e = !1;
        if ("y" === t) e = s();
        else if ("x" === t) e = a();
        else {
          const t = a(),
            r = s();
          t && r ? e = () => {
            t(), r()
          } : (t && t(), r && r())
        }
        return e
      }

      function o() {
        const t = n(!0);
        return !t || (t(), !1)
      }
    },
    77863: (t, e, r) => {
      "use strict";

      function i(t) {
        return "undefined" != typeof PointerEvent && t instanceof PointerEvent ? !("mouse" !== t.pointerType) : t instanceof MouseEvent
      }

      function a(t) {
        return !!t.touches
      }
      r.d(e, {
        E: () => i,
        k: () => a
      })
    },
    33491: (t, e, r) => {
      "use strict";
      r.d(e, {
        W: () => p
      });
      var i = r(62229),
        a = r(24866),
        s = r(88944),
        n = r(64143),
        o = r(88091),
        l = r(80985),
        h = r(56822);
      const p = {
        animation: (0, h.n)((({
          visualElement: t,
          animate: e
        }) => {
          t.animationState || (t.animationState = (0, o.ci)(t)), (0, a.N)(e) && (0, i.useEffect)((() => e.subscribe(t)), [e])
        })),
        exit: (0, h.n)((t => {
          const {
            custom: e,
            visualElement: r
          } = t, [a, o] = (0, s.xQ)(), h = (0, i.useContext)(n.t);
          (0, i.useEffect)((() => {
            r.isPresent = a;
            const t = r.animationState && r.animationState.setActive(l.J.Exit, !a, {
              custom: h && h.custom || e
            });
            t && !a && t.then(o)
          }), [a])
        }))
      }
    },
    54012: (t, e, r) => {
      "use strict";
      r.d(e, {
        B: () => a
      });
      const i = t => ({
          isEnabled: e => t.some((t => !!e[t]))
        }),
        a = {
          measureLayout: i(["layout", "layoutId", "drag"]),
          animation: i(["animate", "exit", "variants", "whileHover", "whileTap", "whileFocus", "whileDrag", "whileInView"]),
          exit: i(["exit"]),
          drag: i(["drag", "dragControls"]),
          focus: i(["whileFocus"]),
          hover: i(["whileHover", "onHoverStart", "onHoverEnd"]),
          tap: i(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
          pan: i(["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]),
          inView: i(["whileInView", "onViewportEnter", "onViewportLeave"])
        }
    },
    24718: (t, e, r) => {
      "use strict";
      r.d(e, {
        n: () => _
      });
      var i = r(80985),
        a = r(3902),
        s = r(77863),
        n = r(53372),
        o = r(81298);

      function l(t, e, r) {
        return (a, n) => {
          (0, s.E)(a) && !(0, o.D3)() && (t.animationState && t.animationState.setActive(i.J.Hover, e), r && r(a, n))
        }
      }
      var h = r(62229);
      const p = (t, e) => !!e && (t === e || p(t, e.parentElement));
      var c = r(19651),
        f = r(95611),
        u = r(39318);
      const d = new Set,
        m = new WeakMap,
        y = new WeakMap,
        g = t => {
          const e = m.get(t.target);
          e && e(t)
        },
        v = t => {
          t.forEach(g)
        };
      const b = {
        some: 0,
        all: 1
      };

      function x(t, e, r, {
        root: a,
        margin: s,
        amount: n = "some",
        once: o
      }) {
        (0, h.useEffect)((() => {
          if (!t || !r.current) return;
          const l = {
            root: null == a ? void 0 : a.current,
            rootMargin: s,
            threshold: "number" == typeof n ? n : b[n]
          };
          return function(t, e, r) {
            const i = function({
              root: t,
              ...e
            }) {
              const r = t || document;
              y.has(r) || y.set(r, {});
              const i = y.get(r),
                a = JSON.stringify(e);
              return i[a] || (i[a] = new IntersectionObserver(v, {
                root: t,
                ...e
              })), i[a]
            }(e);
            return m.set(t, r), i.observe(t), () => {
              m.delete(t), i.unobserve(t)
            }
          }(r.current, l, (t => {
            const {
              isIntersecting: a
            } = t;
            if (e.isInView === a) return;
            if (e.isInView = a, o && !a && e.hasEnteredView) return;
            a && (e.hasEnteredView = !0), r.animationState && r.animationState.setActive(i.J.InView, a);
            const s = r.getProps(),
              n = a ? s.onViewportEnter : s.onViewportLeave;
            n && n(t)
          }))
        }), [t, a, s, n])
      }

      function C(t, e, r, {
        fallback: a = !0
      }) {
        (0, h.useEffect)((() => {
          var s;
          t && a && ("production" !== u._ && (s = "IntersectionObserver not available on this device. whileInView animations will trigger on mount.", d.has(s) || (console.warn(s), d.add(s))), requestAnimationFrame((() => {
            e.hasEnteredView = !0;
            const {
              onViewportEnter: t
            } = r.getProps();
            t && t(null), r.animationState && r.animationState.setActive(i.J.InView, !0)
          })))
        }), [t])
      }
      var A = r(56822);
      const _ = {
        inView: (0, A.n)((function({
          visualElement: t,
          whileInView: e,
          onViewportEnter: r,
          onViewportLeave: i,
          viewport: a = {}
        }) {
          const s = (0, h.useRef)({
            hasEnteredView: !1,
            isInView: !1
          });
          let n = Boolean(e || r || i);
          a.once && s.current.hasEnteredView && (n = !1), ("undefined" == typeof IntersectionObserver ? C : x)(n, s.current, t, a)
        })),
        tap: (0, A.n)((function({
          onTap: t,
          onTapStart: e,
          onTapCancel: r,
          whileTap: a,
          visualElement: s
        }) {
          const l = t || e || r || a,
            u = (0, h.useRef)(!1),
            d = (0, h.useRef)(null),
            m = {
              passive: !(e || t || r || x)
            };

          function y() {
            d.current && d.current(), d.current = null
          }

          function g() {
            return y(), u.current = !1, s.animationState && s.animationState.setActive(i.J.Tap, !1), !(0, o.D3)()
          }

          function v(e, i) {
            g() && (p(s.current, e.target) ? t && t(e, i) : r && r(e, i))
          }

          function b(t, e) {
            g() && r && r(t, e)
          }

          function x(t, r) {
            y(), u.current || (u.current = !0, d.current = (0, f.F)((0, n.h)(window, "pointerup", v, m), (0, n.h)(window, "pointercancel", b, m)), s.animationState && s.animationState.setActive(i.J.Tap, !0), e && e(t, r))
          }(0, n.B)(s, "pointerdown", l ? x : void 0, m), (0, c.l)(y)
        })),
        focus: (0, A.n)((function({
          whileFocus: t,
          visualElement: e
        }) {
          const {
            animationState: r
          } = e;
          (0, a.Q)(e, "focus", t ? () => {
            r && r.setActive(i.J.Focus, !0)
          } : void 0), (0, a.Q)(e, "blur", t ? () => {
            r && r.setActive(i.J.Focus, !1)
          } : void 0)
        })),
        hover: (0, A.n)((function({
          onHoverStart: t,
          onHoverEnd: e,
          whileHover: r,
          visualElement: i
        }) {
          (0, n.B)(i, "pointerenter", t || r ? l(i, !0, t) : void 0, {
            passive: !t
          }), (0, n.B)(i, "pointerleave", e || r ? l(i, !1, e) : void 0, {
            passive: !e
          })
        }))
      }
    },
    15634: (t, e, r) => {
      "use strict";
      r.d(e, {
        Y: () => a
      });
      var i = r(54012);

      function a(t) {
        for (const e in t) "projectionNodeConstructor" === e ? i.B.projectionNodeConstructor = t[e] : i.B[e].Component = t[e]
      }
    },
    13517: (t, e, r) => {
      "use strict";
      r.d(e, {
        z: () => s
      });
      var i = r(70181),
        a = r(17915);

      function s(t, {
        layout: e,
        layoutId: r
      }) {
        return a.f.has(t) || t.startsWith("origin") || (e || void 0 !== r) && (!!i.H[t] || "opacity" === t)
      }
    },
    56822: (t, e, r) => {
      "use strict";
      r.d(e, {
        n: () => i
      });
      const i = t => e => (t(e), null)
    },
    20928: (t, e, r) => {
      "use strict";

      function i({
        top: t,
        left: e,
        right: r,
        bottom: i
      }) {
        return {
          x: {
            min: e,
            max: r
          },
          y: {
            min: t,
            max: i
          }
        }
      }

      function a({
        x: t,
        y: e
      }) {
        return {
          top: e.min,
          right: t.max,
          bottom: e.max,
          left: t.min
        }
      }

      function s(t, e) {
        if (!e) return t;
        const r = e({
            x: t.left,
            y: t.top
          }),
          i = e({
            x: t.right,
            y: t.bottom
          });
        return {
          top: r.y,
          left: r.x,
          bottom: i.y,
          right: i.x
        }
      }
      r.d(e, {
        FY: () => i,
        bS: () => s,
        pA: () => a
      })
    },
    28761: (t, e, r) => {
      "use strict";
      r.d(e, {
        OU: () => h,
        Ql: () => c,
        Ww: () => m,
        hq: () => s,
        o4: () => l
      });
      var i = r(10631),
        a = r(15822);

      function s(t, e, r) {
        return r + e * (t - r)
      }

      function n(t, e, r, i, a) {
        return void 0 !== a && (t = s(t, a, i)), s(t, r, i) + e
      }

      function o(t, e = 0, r = 1, i, a) {
        t.min = n(t.min, e, r, i, a), t.max = n(t.max, e, r, i, a)
      }

      function l(t, {
        x: e,
        y: r
      }) {
        o(t.x, e.translate, e.scale, e.originPoint), o(t.y, r.translate, r.scale, r.originPoint)
      }

      function h(t, e, r, i = !1) {
        var s, n;
        const o = r.length;
        if (!o) return;
        let h, c;
        e.x = e.y = 1;
        for (let p = 0; p < o; p++) h = r[p], c = h.projectionDelta, "contents" !== (null === (n = null === (s = h.instance) || void 0 === s ? void 0 : s.style) || void 0 === n ? void 0 : n.display) && (i && h.options.layoutScroll && h.scroll && h !== h.root && m(t, {
          x: -h.scroll.offset.x,
          y: -h.scroll.offset.y
        }), c && (e.x *= c.x.scale, e.y *= c.y.scale, l(t, c)), i && (0, a.HD)(h.latestValues) && m(t, h.latestValues));
        e.x = p(e.x), e.y = p(e.y)
      }

      function p(t) {
        return Number.isInteger(t) || t > 1.0000000000001 || t < .999999999999 ? t : 1
      }

      function c(t, e) {
        t.min = t.min + e, t.max = t.max + e
      }

      function f(t, e, [r, a, s]) {
        const n = void 0 !== e[s] ? e[s] : .5,
          l = (0, i.j)(t.min, t.max, n);
        o(t, e[r], e[a], l, e.scale)
      }
      const u = ["x", "scaleX", "originX"],
        d = ["y", "scaleY", "originY"];

      function m(t, e) {
        f(t.x, e, u), f(t.y, e, d)
      }
    },
    79242: (t, e, r) => {
      "use strict";
      r.d(e, {
        ge: () => a,
        xU: () => i
      });
      const i = () => ({
          x: {
            translate: 0,
            scale: 1,
            origin: 0,
            originPoint: 0
          },
          y: {
            translate: 0,
            scale: 1,
            origin: 0,
            originPoint: 0
          }
        }),
        a = () => ({
          x: {
            min: 0,
            max: 0
          },
          y: {
            min: 0,
            max: 0
          }
        })
    },
    67207: (t, e, r) => {
      "use strict";
      r.d(e, {
        w: () => i
      });
      const i = {
        hasAnimatedSinceResize: !0,
        hasEverUpdated: !1
      }
    },
    70181: (t, e, r) => {
      "use strict";
      r.d(e, {
        $: () => a,
        H: () => i
      });
      const i = {};

      function a(t) {
        Object.assign(i, t)
      }
    },
    15822: (t, e, r) => {
      "use strict";

      function i(t) {
        return void 0 === t || 1 === t
      }

      function a({
        scale: t,
        scaleX: e,
        scaleY: r
      }) {
        return !i(t) || !i(e) || !i(r)
      }

      function s(t) {
        return a(t) || n(t) || t.z || t.rotate || t.rotateX || t.rotateY
      }

      function n(t) {
        return o(t.x) || o(t.y)
      }

      function o(t) {
        return t && "0%" !== t
      }
      r.d(e, {
        HD: () => s,
        vF: () => n,
        vk: () => a
      })
    },
    44645: (t, e, r) => {
      "use strict";
      r.d(e, {
        L: () => n,
        m: () => s
      });
      var i = r(20928),
        a = r(28761);

      function s(t, e) {
        return (0, i.FY)((0, i.bS)(t.getBoundingClientRect(), e))
      }

      function n(t, e, r) {
        const i = s(t, r),
          {
            scroll: n
          } = e;
        return n && ((0, a.Ql)(i.x, n.offset.x), (0, a.Ql)(i.y, n.offset.y)), i
      }
    },
    1816: (t, e, r) => {
      "use strict";
      r.d(e, {
        J: () => ot
      });
      var i = r(33307),
        a = r(97992),
        s = r(17915),
        n = r(15582),
        o = r(3052),
        l = r(21763),
        h = r(44645),
        p = r(4175),
        c = r(19203),
        f = r(74496),
        u = r(13699),
        d = r(84273),
        m = r(32576),
        y = r(4208),
        g = r(51906);
      const v = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y"]),
        b = t => v.has(t),
        x = (t, e) => {
          t.set(e, !1), t.set(e)
        },
        C = t => t === y.ai || t === g.px;
      var A;
      ! function(t) {
        t.width = "width", t.height = "height", t.left = "left", t.right = "right", t.top = "top", t.bottom = "bottom"
      }(A || (A = {}));
      const _ = (t, e) => parseFloat(t.split(", ")[e]),
        E = (t, e) => (r, {
          transform: i
        }) => {
          if ("none" === i || !i) return 0;
          const a = i.match(/^matrix3d\((.+)\)$/);
          if (a) return _(a[1], e); {
            const e = i.match(/^matrix\((.+)\)$/);
            return e ? _(e[1], t) : 0
          }
        },
        S = new Set(["x", "y", "z"]),
        P = s.U.filter((t => !S.has(t))),
        T = {
          width: ({
            x: t
          }, {
            paddingLeft: e = "0",
            paddingRight: r = "0"
          }) => t.max - t.min - parseFloat(e) - parseFloat(r),
          height: ({
            y: t
          }, {
            paddingTop: e = "0",
            paddingBottom: r = "0"
          }) => t.max - t.min - parseFloat(e) - parseFloat(r),
          top: (t, {
            top: e
          }) => parseFloat(e),
          left: (t, {
            left: e
          }) => parseFloat(e),
          bottom: ({
            y: t
          }, {
            top: e
          }) => parseFloat(e) + (t.max - t.min),
          right: ({
            x: t
          }, {
            left: e
          }) => parseFloat(e) + (t.max - t.min),
          x: E(4, 13),
          y: E(5, 14)
        };

      function F(t, e, r, i) {
        return (t => Object.keys(t).some(b))(e) ? ((t, e, r = {}, i = {}) => {
          e = {
            ...e
          }, i = {
            ...i
          };
          const a = Object.keys(e).filter(b);
          let s = [],
            n = !1;
          const o = [];
          if (a.forEach((a => {
              const l = t.getValue(a);
              if (!t.hasValue(a)) return;
              let h = r[a],
                p = (0, d.n)(h);
              const c = e[a];
              let m;
              if ((0, f.p)(c)) {
                const t = c.length,
                  e = null === c[0] ? 1 : 0;
                h = c[e], p = (0, d.n)(h);
                for (let r = e; r < t; r++) m ? (0, u.V)((0, d.n)(c[r]) === m, "All keyframes must be of the same type") : (m = (0, d.n)(c[r]), (0, u.V)(m === p || C(p) && C(m), "Keyframes must be of the same dimension as the current value"))
              } else m = (0, d.n)(c);
              if (p !== m)
                if (C(p) && C(m)) {
                  const t = l.get();
                  "string" == typeof t && l.set(parseFloat(t)), "string" == typeof c ? e[a] = parseFloat(c) : Array.isArray(c) && m === g.px && (e[a] = c.map(parseFloat))
                } else(null == p ? void 0 : p.transform) && (null == m ? void 0 : m.transform) && (0 === h || 0 === c) ? 0 === h ? l.set(m.transform(h)) : e[a] = p.transform(c) : (n || (s = function(t) {
                  const e = [];
                  return P.forEach((r => {
                    const i = t.getValue(r);
                    void 0 !== i && (e.push([r, i.get()]), i.set(r.startsWith("scale") ? 1 : 0))
                  })), e.length && t.render(), e
                }(t), n = !0), o.push(a), i[a] = void 0 !== i[a] ? i[a] : e[a], x(l, c))
            })), o.length) {
            const r = o.indexOf("height") >= 0 ? window.pageYOffset : null,
              a = ((t, e, r) => {
                const i = e.measureViewportBox(),
                  a = e.current,
                  s = getComputedStyle(a),
                  {
                    display: n
                  } = s,
                  o = {};
                "none" === n && e.setStaticValue("display", t.display || "block"), r.forEach((t => {
                  o[t] = T[t](i, s)
                })), e.render();
                const l = e.measureViewportBox();
                return r.forEach((r => {
                  const i = e.getValue(r);
                  x(i, o[r]), t[r] = T[r](l, s)
                })), t
              })(e, t, o);
            return s.length && s.forEach((([e, r]) => {
              t.getValue(e).set(r)
            })), t.render(), m.B && null !== r && window.scrollTo({
              top: r
            }), {
              target: a,
              transitionEnd: i
            }
          }
          return {
            target: e,
            transitionEnd: i
          }
        })(t, e, r, i) : {
          target: e,
          transitionEnd: i
        }
      }
      var w = r(80890),
        M = r(62229),
        k = r(54012),
        D = r(79242),
        I = r(69569),
        V = r(39318);
      const B = {
          current: null
        },
        R = {
          current: !1
        };
      var L = r(78558),
        G = r(6273),
        O = r(54165),
        z = r(29592),
        N = r(88091),
        j = r(79458),
        H = r(71031),
        q = r(98405);
      const W = Object.keys(k.B),
        $ = W.length,
        U = ["AnimationStart", "AnimationComplete", "Update", "Unmount", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
      class Y {
        constructor({
          parent: t,
          props: e,
          reducedMotionConfig: r,
          visualState: i
        }, a = {}) {
          this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.isPresent = !0, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
            this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
          }, this.scheduleRender = () => w.OH.render(this.render, !1, !0);
          const {
            latestValues: s,
            renderState: n
          } = i;
          this.latestValues = s, this.baseTarget = {
            ...s
          }, this.initialValues = e.initial ? {
            ...s
          } : {}, this.renderState = n, this.parent = t, this.props = e, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = r, this.options = a, this.isControllingVariants = (0, j.e)(e), this.isVariantNode = (0, j.O)(e), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = Boolean(t && t.current);
          const {
            willChange: o,
            ...l
          } = this.scrapeMotionValuesFromProps(e);
          for (const t in l) {
            const e = l[t];
            void 0 !== s[t] && (0, z.S)(e) && (e.set(s[t], !1), (0, O.k)(o) && o.add(t))
          }
        }
        scrapeMotionValuesFromProps(t) {
          return {}
        }
        mount(t) {
          var e;
          this.current = t, this.projection && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = null === (e = this.parent) || void 0 === e ? void 0 : e.addVariantChild(this)), this.values.forEach(((t, e) => this.bindToMotionValue(e, t))), R.current || function() {
            if (R.current = !0, m.B)
              if (window.matchMedia) {
                const t = window.matchMedia("(prefers-reduced-motion)"),
                  e = () => B.current = t.matches;
                t.addListener(e), e()
              } else B.current = !1
          }(), this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || B.current), this.parent && this.parent.children.add(this), this.setProps(this.props)
        }
        unmount() {
          var t, e, r;
          null === (t = this.projection) || void 0 === t || t.unmount(), w.eO.update(this.notifyUpdate), w.eO.render(this.render), this.valueSubscriptions.forEach((t => t())), null === (e = this.removeFromVariantTree) || void 0 === e || e.call(this), null === (r = this.parent) || void 0 === r || r.children.delete(this);
          for (const t in this.events) this.events[t].clear();
          this.current = null
        }
        bindToMotionValue(t, e) {
          const r = s.f.has(t),
            i = e.on("change", (e => {
              this.latestValues[t] = e, this.props.onUpdate && w.OH.update(this.notifyUpdate, !1, !0), r && this.projection && (this.projection.isTransformDirty = !0)
            })),
            a = e.on("renderRequest", this.scheduleRender);
          this.valueSubscriptions.set(t, (() => {
            i(), a()
          }))
        }
        sortNodePosition(t) {
          return this.current && this.sortInstanceNodePosition && this.type === t.type ? this.sortInstanceNodePosition(this.current, t.current) : 0
        }
        loadFeatures(t, e, r, i, a, s) {
          const n = [];
          "production" !== V._ && r && e && (0, u.V)(!1, "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.");
          for (let e = 0; e < $; e++) {
            const r = W[e],
              {
                isEnabled: i,
                Component: a
              } = k.B[r];
            i(t) && a && n.push((0, M.createElement)(a, {
              key: r,
              ...t,
              visualElement: this
            }))
          }
          if (!this.projection && a) {
            this.projection = new a(i, this.latestValues, this.parent && this.parent.projection);
            const {
              layoutId: e,
              layout: r,
              drag: n,
              dragConstraints: o,
              layoutScroll: l
            } = t;
            this.projection.setOptions({
              layoutId: e,
              layout: r,
              alwaysMeasureLayout: Boolean(n) || o && (0, I.X)(o),
              visualElement: this,
              scheduleRender: () => this.scheduleRender(),
              animationType: "string" == typeof r ? r : "both",
              initialPromotionConfig: s,
              layoutScroll: l
            })
          }
          return n
        }
        triggerBuild() {
          this.build(this.renderState, this.latestValues, this.options, this.props)
        }
        measureViewportBox() {
          return this.current ? this.measureInstanceViewportBox(this.current, this.props) : (0, D.ge)()
        }
        getStaticValue(t) {
          return this.latestValues[t]
        }
        setStaticValue(t, e) {
          this.latestValues[t] = e
        }
        makeTargetAnimatable(t, e = !0) {
          return this.makeTargetAnimatableFromInstance(t, this.props, e)
        }
        setProps(t) {
          (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.props = t;
          for (let e = 0; e < U.length; e++) {
            const r = U[e];
            this.propEventSubscriptions[r] && (this.propEventSubscriptions[r](), delete this.propEventSubscriptions[r]);
            const i = t["on" + r];
            i && (this.propEventSubscriptions[r] = this.on(r, i))
          }
          this.prevMotionValues = function(t, e, r) {
            const {
              willChange: i
            } = e;
            for (const a in e) {
              const s = e[a],
                n = r[a];
              if ((0, z.S)(s)) t.addValue(a, s), (0, O.k)(i) && i.add(a);
              else if ((0, z.S)(n)) t.addValue(a, (0, G.O)(s, {
                owner: t
              })), (0, O.k)(i) && i.remove(a);
              else if (n !== s)
                if (t.hasValue(a)) {
                  const e = t.getValue(a);
                  !e.hasAnimated && e.set(s)
                } else {
                  const e = t.getStaticValue(a);
                  t.addValue(a, (0, G.O)(void 0 !== e ? e : s))
                }
            }
            for (const i in r) void 0 === e[i] && t.removeValue(i);
            return e
          }(this, this.scrapeMotionValuesFromProps(t), this.prevMotionValues)
        }
        getProps() {
          return this.props
        }
        getVariant(t) {
          var e;
          return null === (e = this.props.variants) || void 0 === e ? void 0 : e[t]
        }
        getDefaultTransition() {
          return this.props.transition
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint
        }
        getClosestVariantNode() {
          var t;
          return this.isVariantNode ? this : null === (t = this.parent) || void 0 === t ? void 0 : t.getClosestVariantNode()
        }
        getVariantContext(t = !1) {
          var e, r;
          if (t) return null === (e = this.parent) || void 0 === e ? void 0 : e.getVariantContext();
          if (!this.isControllingVariants) {
            const t = (null === (r = this.parent) || void 0 === r ? void 0 : r.getVariantContext()) || {};
            return void 0 !== this.props.initial && (t.initial = this.props.initial), t
          }
          const i = {};
          for (let t = 0; t < J; t++) {
            const e = X[t],
              r = this.props[e];
            ((0, H.w)(r) || !1 === r) && (i[e] = r)
          }
          return i
        }
        addVariantChild(t) {
          var e;
          const r = this.getClosestVariantNode();
          if (r) return null === (e = r.variantChildren) || void 0 === e || e.add(t), () => r.variantChildren.delete(t)
        }
        addValue(t, e) {
          this.hasValue(t) && this.removeValue(t), this.values.set(t, e), this.latestValues[t] = e.get(), this.bindToMotionValue(t, e)
        }
        removeValue(t) {
          var e;
          this.values.delete(t), null === (e = this.valueSubscriptions.get(t)) || void 0 === e || e(), this.valueSubscriptions.delete(t), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState)
        }
        hasValue(t) {
          return this.values.has(t)
        }
        getValue(t, e) {
          if (this.props.values && this.props.values[t]) return this.props.values[t];
          let r = this.values.get(t);
          return void 0 === r && void 0 !== e && (r = (0, G.O)(e, {
            owner: this
          }), this.addValue(t, r)), r
        }
        readValue(t) {
          return void 0 === this.latestValues[t] && this.current ? this.readValueFromInstance(this.current, t, this.options) : this.latestValues[t]
        }
        setBaseTarget(t, e) {
          this.baseTarget[t] = e
        }
        getBaseTarget(t) {
          var e;
          const {
            initial: r
          } = this.props, i = "string" == typeof r || "object" == typeof r ? null === (e = (0, q.a)(this.props, r)) || void 0 === e ? void 0 : e[t] : void 0;
          if (r && void 0 !== i) return i;
          const a = this.getBaseTargetFromProps(this.props, t);
          return void 0 === a || (0, z.S)(a) ? void 0 !== this.initialValues[t] && void 0 === i ? void 0 : this.baseTarget[t] : a
        }
        on(t, e) {
          return this.events[t] || (this.events[t] = new L.v), this.events[t].add(e)
        }
        notify(t, ...e) {
          var r;
          null === (r = this.events[t]) || void 0 === r || r.notify(...e)
        }
      }
      const X = ["initial", ...N.US],
        J = X.length;
      class K extends Y {
        sortInstanceNodePosition(t, e) {
          return 2 & t.compareDocumentPosition(e) ? 1 : -1
        }
        getBaseTargetFromProps(t, e) {
          var r;
          return null === (r = t.style) || void 0 === r ? void 0 : r[e]
        }
        removeValueFromRenderState(t, {
          vars: e,
          style: r
        }) {
          delete e[t], delete r[t]
        }
        makeTargetAnimatableFromInstance({
          transition: t,
          transitionEnd: e,
          ...r
        }, {
          transformValues: i
        }, a) {
          let s = (0, p.$z)(r, t || {}, this);
          if (i && (e && (e = i(e)), r && (r = i(r)), s && (s = i(s))), a) {
            (0, p.TM)(this, r, s);
            const t = ((t, e, r, i) => {
              const a = (0, c.d9)(t, e, i);
              return F(t, e = a.target, r, i = a.transitionEnd)
            })(this, r, s, e);
            e = t.transitionEnd, r = t.target
          }
          return {
            transition: t,
            transitionEnd: e,
            ...r
          }
        }
      }
      class Z extends K {
        readValueFromInstance(t, e) {
          if (s.f.has(e)) {
            const t = (0, l.D)(e);
            return t && t.default || 0
          } {
            const i = (r = t, window.getComputedStyle(r)),
              s = ((0, a.Y)(e) ? i.getPropertyValue(e) : i[e]) || 0;
            return "string" == typeof s ? s.trim() : s
          }
          var r
        }
        measureInstanceViewportBox(t, {
          transformPagePoint: e
        }) {
          return (0, h.m)(t, e)
        }
        build(t, e, r, a) {
          (0, i.O)(t, e, r, a.transformTemplate)
        }
        scrapeMotionValuesFromProps(t) {
          return (0, n.x)(t)
        }
        renderInstance(t, e, r, i) {
          (0, o.e)(t, e, r, i)
        }
      }
      var Q = r(81721),
        tt = r(85404),
        et = r(37774),
        rt = r(51991),
        it = r(42967),
        at = r(97641);
      class st extends K {
        constructor() {
          super(...arguments), this.isSVGTag = !1
        }
        getBaseTargetFromProps(t, e) {
          return t[e]
        }
        readValueFromInstance(t, e) {
          var r;
          return s.f.has(e) ? (null === (r = (0, l.D)(e)) || void 0 === r ? void 0 : r.default) || 0 : (e = rt.e.has(e) ? e : (0, et.I)(e), t.getAttribute(e))
        }
        measureInstanceViewportBox() {
          return (0, D.ge)()
        }
        scrapeMotionValuesFromProps(t) {
          return (0, Q.x)(t)
        }
        build(t, e, r, i) {
          (0, tt.B)(t, e, r, this.isSVGTag, i.transformTemplate)
        }
        renderInstance(t, e, r, i) {
          (0, it.d)(t, e, r, i)
        }
        mount(t) {
          this.isSVGTag = (0, at.n)(t.tagName), super.mount(t)
        }
      }
      var nt = r(19155);
      const ot = (t, e) => (0, nt.Q)(t) ? new st(e, {
        enableHardwareAcceleration: !1
      }) : new Z(e, {
        enableHardwareAcceleration: !0
      })
    },
    44736: (t, e, r) => {
      "use strict";
      r.d(e, {
        H: () => S
      });
      var i = r(62229),
        a = r(83014),
        s = r(6417),
        n = r(64143),
        o = r(32576);
      const l = o.B ? i.useLayoutEffect : i.useEffect;
      var h = r(6128),
        p = r(69569),
        c = r(71031),
        f = r(79458);

      function u(t) {
        return Array.isArray(t) ? t.join(" ") : t
      }
      var d = r(54012),
        m = r(15634),
        y = r(7593),
        g = r(67207);
      let v = 1;
      var b = r(91281);
      class x extends i.Component {
        getSnapshotBeforeUpdate() {
          const {
            visualElement: t,
            props: e
          } = this.props;
          return t && t.setProps(e), null
        }
        componentDidUpdate() {}
        render() {
          return this.props.children
        }
      }
      var C = r(83413);
      const A = Symbol.for("motionComponentSymbol");

      function _({
        preloadedFeatures: t,
        createVisualElement: e,
        projectionNodeConstructor: r,
        useRender: b,
        useVisualState: _,
        Component: S
      }) {
        t && (0, m.Y)(t);
        const P = (0, i.forwardRef)((function(m, A) {
          const P = {
              ...(0, i.useContext)(a.Q),
              ...m,
              layoutId: E(m)
            },
            {
              isStatic: T
            } = P;
          let F = null;
          const w = function(t) {
              const {
                initial: e,
                animate: r
              } = function(t, e) {
                if ((0, f.e)(t)) {
                  const {
                    initial: e,
                    animate: r
                  } = t;
                  return {
                    initial: !1 === e || (0, c.w)(e) ? e : void 0,
                    animate: (0, c.w)(r) ? r : void 0
                  }
                }
                return !1 !== t.inherit ? e : {}
              }(t, (0, i.useContext)(s.A));
              return (0, i.useMemo)((() => ({
                initial: e,
                animate: r
              })), [u(e), u(r)])
            }(m),
            M = T ? void 0 : (0, y.M)((() => {
              if (g.w.hasEverUpdated) return v++
            })),
            k = _(m, T);
          if (!T && o.B) {
            w.visualElement = function(t, e, r, o) {
              const p = (0, s.f)(),
                c = (0, i.useContext)(h.Y),
                f = (0, i.useContext)(n.t),
                u = (0, i.useContext)(a.Q).reducedMotion,
                d = (0, i.useRef)();
              o = o || c.renderer, !d.current && o && (d.current = o(t, {
                visualState: e,
                parent: p,
                props: r,
                presenceId: f ? f.id : void 0,
                blockInitialAnimation: !!f && !1 === f.initial,
                reducedMotionConfig: u
              }));
              const m = d.current;
              return l((() => {
                m && m.render()
              })), l((() => {
                m && m.animationState && m.animationState.animateChanges()
              })), l((() => () => m && m.notify("Unmount")), []), m
            }(S, k, P, e);
            const o = (0, i.useContext)(h.Y).strict,
              p = (0, i.useContext)(C.N);
            w.visualElement && (F = w.visualElement.loadFeatures(P, o, t, M, r || d.B.projectionNodeConstructor, p))
          }
          return i.createElement(x, {
            visualElement: w.visualElement,
            props: P
          }, F, i.createElement(s.A.Provider, {
            value: w
          }, b(S, m, M, function(t, e, r) {
            return (0, i.useCallback)((i => {
              i && t.mount && t.mount(i), e && (i ? e.mount(i) : e.unmount()), r && ("function" == typeof r ? r(i) : (0, p.X)(r) && (r.current = i))
            }), [e])
          }(k, w.visualElement, A), k, T, w.visualElement)))
        }));
        return P[A] = S, P
      }

      function E({
        layoutId: t
      }) {
        const e = (0, i.useContext)(b.L).id;
        return e && void 0 !== t ? e + "-" + t : t
      }

      function S(t) {
        function e(e, r = {}) {
          return _(t(e, r))
        }
        if ("undefined" == typeof Proxy) return e;
        const r = new Map;
        return new Proxy(e, {
          get: (t, i) => (r.has(i) || r.set(i, e(i)), r.get(i))
        })
      }
    },
    82752: (t, e, r) => {
      "use strict";
      r.d(e, {
        P: () => _e
      });
      var i = r(44736),
        a = r(8935),
        s = r(24718),
        n = r(33491),
        o = r(62229),
        l = r(13699),
        h = r(77863),
        p = r(40216),
        c = r(80890),
        f = r(17761),
        u = r(53372),
        d = r(95611);
      const m = (t, e) => Math.abs(t - e);
      var y = r(9581);
      class g {
        constructor(t, e, {
          transformPagePoint: r
        } = {}) {
          if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = () => {
              if (!this.lastMoveEvent || !this.lastMoveEventInfo) return;
              const t = x(this.lastMoveEventInfo, this.history),
                e = null !== this.startEvent,
                r = function(t, e) {
                  const r = m(t.x, e.x),
                    i = m(t.y, e.y);
                  return Math.sqrt(r ** 2 + i ** 2)
                }(t.offset, {
                  x: 0,
                  y: 0
                }) >= 3;
              if (!e && !r) return;
              const {
                point: i
              } = t, {
                timestamp: a
              } = y.u;
              this.history.push({
                ...i,
                timestamp: a
              });
              const {
                onStart: s,
                onMove: n
              } = this.handlers;
              e || (s && s(this.lastMoveEvent, t), this.startEvent = this.lastMoveEvent), n && n(this.lastMoveEvent, t)
            }, this.handlePointerMove = (t, e) => {
              this.lastMoveEvent = t, this.lastMoveEventInfo = v(e, this.transformPagePoint), (0, h.E)(t) && 0 === t.buttons ? this.handlePointerUp(t, e) : c.OH.update(this.updatePoint, !0)
            }, this.handlePointerUp = (t, e) => {
              this.end();
              const {
                onEnd: r,
                onSessionEnd: i
              } = this.handlers, a = x(v(e, this.transformPagePoint), this.history);
              this.startEvent && r && r(t, a), i && i(t, a)
            }, (0, h.k)(t) && t.touches.length > 1) return;
          this.handlers = e, this.transformPagePoint = r;
          const i = v((0, p.e)(t), this.transformPagePoint),
            {
              point: a
            } = i,
            {
              timestamp: s
            } = y.u;
          this.history = [{
            ...a,
            timestamp: s
          }];
          const {
            onSessionStart: n
          } = e;
          n && n(t, x(i, this.history)), this.removeListeners = (0, d.F)((0, u.h)(window, "pointermove", this.handlePointerMove), (0, u.h)(window, "pointerup", this.handlePointerUp), (0, u.h)(window, "pointercancel", this.handlePointerUp))
        }
        updateHandlers(t) {
          this.handlers = t
        }
        end() {
          this.removeListeners && this.removeListeners(), c.eO.update(this.updatePoint)
        }
      }

      function v(t, e) {
        return e ? {
          point: e(t.point)
        } : t
      }

      function b(t, e) {
        return {
          x: t.x - e.x,
          y: t.y - e.y
        }
      }

      function x({
        point: t
      }, e) {
        return {
          point: t,
          delta: b(t, A(e)),
          offset: b(t, C(e)),
          velocity: _(e, .1)
        }
      }

      function C(t) {
        return t[0]
      }

      function A(t) {
        return t[t.length - 1]
      }

      function _(t, e) {
        if (t.length < 2) return {
          x: 0,
          y: 0
        };
        let r = t.length - 1,
          i = null;
        const a = A(t);
        for (; r >= 0 && (i = t[r], !(a.timestamp - i.timestamp > (0, f.f)(e)));) r--;
        if (!i) return {
          x: 0,
          y: 0
        };
        const s = (a.timestamp - i.timestamp) / 1e3;
        if (0 === s) return {
          x: 0,
          y: 0
        };
        const n = {
          x: (a.x - i.x) / s,
          y: (a.y - i.y) / s
        };
        return n.x === 1 / 0 && (n.x = 0), n.y === 1 / 0 && (n.y = 0), n
      }
      var E = r(81298),
        S = r(69569),
        P = r(67026),
        T = r(10631);

      function F(t) {
        return t.max - t.min
      }

      function w(t, e = 0, r = .01) {
        return Math.abs(t - e) <= r
      }

      function M(t, e, r, i = .5) {
        t.origin = i, t.originPoint = (0, T.j)(e.min, e.max, t.origin), t.scale = F(r) / F(e), (w(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1), t.translate = (0, T.j)(r.min, r.max, t.origin) - t.originPoint, (w(t.translate) || isNaN(t.translate)) && (t.translate = 0)
      }

      function k(t, e, r, i) {
        M(t.x, e.x, r.x, null == i ? void 0 : i.originX), M(t.y, e.y, r.y, null == i ? void 0 : i.originY)
      }

      function D(t, e, r) {
        t.min = r.min + e.min, t.max = t.min + F(e)
      }

      function I(t, e, r) {
        t.min = e.min - r.min, t.max = t.min + F(e)
      }

      function V(t, e, r) {
        I(t.x, e.x, r.x), I(t.y, e.y, r.y)
      }
      var B = r(25168);

      function R(t, e, r) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== r ? t.max + r - (t.max - t.min) : void 0
        }
      }

      function L(t, e) {
        let r = e.min - t.min,
          i = e.max - t.max;
        return e.max - e.min < t.max - t.min && ([r, i] = [i, r]), {
          min: r,
          max: i
        }
      }
      const G = .35;

      function O(t, e, r) {
        return {
          min: z(t, e),
          max: z(t, r)
        }
      }

      function z(t, e) {
        return "number" == typeof t ? t : t[e] || 0
      }
      var N = r(80985),
        j = r(79242);

      function H(t) {
        return [t("x"), t("y")]
      }
      var q = r(44645),
        W = r(20928),
        $ = r(3902),
        U = r(51906),
        Y = r(83698);
      const X = new WeakMap;
      class J {
        constructor(t) {
          this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
            x: 0,
            y: 0
          }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = (0, j.ge)(), this.visualElement = t
        }
        start(t, {
          snapToCursor: e = !1
        } = {}) {
          !1 !== this.visualElement.isPresent && (this.panSession = new g(t, {
            onSessionStart: t => {
              this.stopAnimation(), e && this.snapToCursor((0, p.e)(t, "page").point)
            },
            onStart: (t, e) => {
              var r;
              const {
                drag: i,
                dragPropagation: a,
                onDragStart: s
              } = this.getProps();
              (!i || a || (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = (0, E.nQ)(i), this.openGlobalLock)) && (this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), H((t => {
                var e, r;
                let i = this.getAxisMotionValue(t).get() || 0;
                if (U.KN.test(i)) {
                  const a = null === (r = null === (e = this.visualElement.projection) || void 0 === e ? void 0 : e.layout) || void 0 === r ? void 0 : r.layoutBox[t];
                  a && (i = F(a) * (parseFloat(i) / 100))
                }
                this.originPoint[t] = i
              })), null == s || s(t, e), null === (r = this.visualElement.animationState) || void 0 === r || r.setActive(N.J.Drag, !0))
            },
            onMove: (t, e) => {
              const {
                dragPropagation: r,
                dragDirectionLock: i,
                onDirectionLock: a,
                onDrag: s
              } = this.getProps();
              if (!r && !this.openGlobalLock) return;
              const {
                offset: n
              } = e;
              if (i && null === this.currentDirection) return this.currentDirection = function(t, e = 10) {
                let r = null;
                return Math.abs(t.y) > e ? r = "y" : Math.abs(t.x) > e && (r = "x"), r
              }(n), void(null !== this.currentDirection && (null == a || a(this.currentDirection)));
              this.updateAxis("x", e.point, n), this.updateAxis("y", e.point, n), this.visualElement.render(), null == s || s(t, e)
            },
            onSessionEnd: (t, e) => this.stop(t, e)
          }, {
            transformPagePoint: this.visualElement.getTransformPagePoint()
          }))
        }
        stop(t, e) {
          const r = this.isDragging;
          if (this.cancel(), !r) return;
          const {
            velocity: i
          } = e;
          this.startAnimation(i);
          const {
            onDragEnd: a
          } = this.getProps();
          null == a || a(t, e)
        }
        cancel() {
          var t, e;
          this.isDragging = !1, this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !1), null === (t = this.panSession) || void 0 === t || t.end(), this.panSession = void 0;
          const {
            dragPropagation: r
          } = this.getProps();
          !r && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), null === (e = this.visualElement.animationState) || void 0 === e || e.setActive(N.J.Drag, !1)
        }
        updateAxis(t, e, r) {
          const {
            drag: i
          } = this.getProps();
          if (!r || !K(t, i, this.currentDirection)) return;
          const a = this.getAxisMotionValue(t);
          let s = this.originPoint[t] + r[t];
          this.constraints && this.constraints[t] && (s = function(t, {
            min: e,
            max: r
          }, i) {
            return void 0 !== e && t < e ? t = i ? (0, T.j)(e, t, i.min) : Math.max(t, e) : void 0 !== r && t > r && (t = i ? (0, T.j)(r, t, i.max) : Math.min(t, r)), t
          }(s, this.constraints[t], this.elastic[t])), a.set(s)
        }
        resolveConstraints() {
          const {
            dragConstraints: t,
            dragElastic: e
          } = this.getProps(), {
            layout: r
          } = this.visualElement.projection || {}, i = this.constraints;
          t && (0, S.X)(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : this.constraints = !(!t || !r) && function(t, {
            top: e,
            left: r,
            bottom: i,
            right: a
          }) {
            return {
              x: R(t.x, r, a),
              y: R(t.y, e, i)
            }
          }(r.layoutBox, t), this.elastic = function(t = G) {
            return !1 === t ? t = 0 : !0 === t && (t = G), {
              x: O(t, "left", "right"),
              y: O(t, "top", "bottom")
            }
          }(e), i !== this.constraints && r && this.constraints && !this.hasMutatedConstraints && H((t => {
            this.getAxisMotionValue(t) && (this.constraints[t] = function(t, e) {
              const r = {};
              return void 0 !== e.min && (r.min = e.min - t.min), void 0 !== e.max && (r.max = e.max - t.min), r
            }(r.layoutBox[t], this.constraints[t]))
          }))
        }
        resolveRefConstraints() {
          const {
            dragConstraints: t,
            onMeasureDragConstraints: e
          } = this.getProps();
          if (!t || !(0, S.X)(t)) return !1;
          const r = t.current;
          (0, l.V)(null !== r, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
          const {
            projection: i
          } = this.visualElement;
          if (!i || !i.layout) return !1;
          const a = (0, q.L)(r, i.root, this.visualElement.getTransformPagePoint());
          let s = function(t, e) {
            return {
              x: L(t.x, e.x),
              y: L(t.y, e.y)
            }
          }(i.layout.layoutBox, a);
          if (e) {
            const t = e((0, W.pA)(s));
            this.hasMutatedConstraints = !!t, t && (s = (0, W.FY)(t))
          }
          return s
        }
        startAnimation(t) {
          const {
            drag: e,
            dragMomentum: r,
            dragElastic: i,
            dragTransition: a,
            dragSnapToOrigin: s,
            onDragTransitionEnd: n
          } = this.getProps(), o = this.constraints || {}, l = H((n => {
            if (!K(n, e, this.currentDirection)) return;
            let l = (null == o ? void 0 : o[n]) || {};
            s && (l = {
              min: 0,
              max: 0
            });
            const h = i ? 200 : 1e6,
              p = i ? 40 : 1e7,
              c = {
                type: "inertia",
                velocity: r ? t[n] : 0,
                bounceStiffness: h,
                bounceDamping: p,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...a,
                ...l
              };
            return this.startAxisValueAnimation(n, c)
          }));
          return Promise.all(l).then(n)
        }
        startAxisValueAnimation(t, e) {
          const r = this.getAxisMotionValue(t);
          return r.start((0, Y.O)(t, r, 0, e))
        }
        stopAnimation() {
          H((t => this.getAxisMotionValue(t).stop()))
        }
        getAxisMotionValue(t) {
          var e;
          const r = "_drag" + t.toUpperCase();
          return this.visualElement.getProps()[r] || this.visualElement.getValue(t, (null === (e = this.visualElement.getProps().initial) || void 0 === e ? void 0 : e[t]) || 0)
        }
        snapToCursor(t) {
          H((e => {
            const {
              drag: r
            } = this.getProps();
            if (!K(e, r, this.currentDirection)) return;
            const {
              projection: i
            } = this.visualElement, a = this.getAxisMotionValue(e);
            if (i && i.layout) {
              const {
                min: r,
                max: s
              } = i.layout.layoutBox[e];
              a.set(t[e] - (0, T.j)(r, s, .5))
            }
          }))
        }
        scalePositionWithinConstraints() {
          var t;
          if (!this.visualElement.current) return;
          const {
            drag: e,
            dragConstraints: r
          } = this.getProps(), {
            projection: i
          } = this.visualElement;
          if (!(0, S.X)(r) || !i || !this.constraints) return;
          this.stopAnimation();
          const a = {
            x: 0,
            y: 0
          };
          H((t => {
            const e = this.getAxisMotionValue(t);
            if (e) {
              const r = e.get();
              a[t] = function(t, e) {
                let r = .5;
                const i = F(t),
                  a = F(e);
                return a > i ? r = (0, P.q)(e.min, e.max - i, t.min) : i > a && (r = (0, P.q)(t.min, t.max - a, e.min)), (0, B.q)(0, 1, r)
              }({
                min: r,
                max: r
              }, this.constraints[t])
            }
          }));
          const {
            transformTemplate: s
          } = this.visualElement.getProps();
          this.visualElement.current.style.transform = s ? s({}, "") : "none", null === (t = i.root) || void 0 === t || t.updateScroll(), i.updateLayout(), this.resolveConstraints(), H((t => {
            if (!K(t, e, null)) return;
            const r = this.getAxisMotionValue(t),
              {
                min: i,
                max: s
              } = this.constraints[t];
            r.set((0, T.j)(i, s, a[t]))
          }))
        }
        addListeners() {
          var t;
          if (!this.visualElement.current) return;
          X.set(this.visualElement, this);
          const e = this.visualElement.current,
            r = (0, u.h)(e, "pointerdown", (t => {
              const {
                drag: e,
                dragListener: r = !0
              } = this.getProps();
              e && r && this.start(t)
            })),
            i = () => {
              const {
                dragConstraints: t
              } = this.getProps();
              (0, S.X)(t) && (this.constraints = this.resolveRefConstraints())
            },
            {
              projection: a
            } = this.visualElement,
            s = a.addEventListener("measure", i);
          a && !a.layout && (null === (t = a.root) || void 0 === t || t.updateScroll(), a.updateLayout()), i();
          const n = (0, $.k)(window, "resize", (() => this.scalePositionWithinConstraints())),
            o = a.addEventListener("didUpdate", (({
              delta: t,
              hasLayoutChanged: e
            }) => {
              this.isDragging && e && (H((e => {
                const r = this.getAxisMotionValue(e);
                r && (this.originPoint[e] += t[e].translate, r.set(r.get() + t[e].translate))
              })), this.visualElement.render())
            }));
          return () => {
            n(), r(), s(), null == o || o()
          }
        }
        getProps() {
          const t = this.visualElement.getProps(),
            {
              drag: e = !1,
              dragDirectionLock: r = !1,
              dragPropagation: i = !1,
              dragConstraints: a = !1,
              dragElastic: s = G,
              dragMomentum: n = !0
            } = t;
          return {
            ...t,
            drag: e,
            dragDirectionLock: r,
            dragPropagation: i,
            dragConstraints: a,
            dragElastic: s,
            dragMomentum: n
          }
        }
      }

      function K(t, e, r) {
        return !(!0 !== e && e !== t || null !== r && r !== t)
      }
      var Z = r(7593),
        Q = r(83014),
        tt = r(19651),
        et = r(56822);
      const rt = {
        pan: (0, et.n)((function({
          onPan: t,
          onPanStart: e,
          onPanEnd: r,
          onPanSessionStart: i,
          visualElement: a
        }) {
          const s = t || e || r || i,
            n = (0, o.useRef)(null),
            {
              transformPagePoint: l
            } = (0, o.useContext)(Q.Q),
            h = {
              onSessionStart: i,
              onStart: e,
              onMove: t,
              onEnd: (t, e) => {
                n.current = null, r && r(t, e)
              }
            };
          (0, o.useEffect)((() => {
            null !== n.current && n.current.updateHandlers(h)
          })), (0, u.B)(a, "pointerdown", s && function(t) {
            n.current = new g(t, h, {
              transformPagePoint: l
            })
          }), (0, tt.l)((() => n.current && n.current.end()))
        })),
        drag: (0, et.n)((function(t) {
          const {
            dragControls: e,
            visualElement: r
          } = t, i = (0, Z.M)((() => new J(r)));
          (0, o.useEffect)((() => e && e.subscribe(i)), [i, e]), (0, o.useEffect)((() => i.addListeners()), [i])
        }))
      };
      var it = r(1816),
        at = r(88944),
        st = r(91281),
        nt = r(83413),
        ot = r(67207);

      function lt(t, e) {
        return e.max === e.min ? 0 : t / (e.max - e.min) * 100
      }
      const ht = {
        correct: (t, e) => {
          if (!e.target) return t;
          if ("string" == typeof t) {
            if (!U.px.test(t)) return t;
            t = parseFloat(t)
          }
          return `${lt(t,e.target.x)}% ${lt(t,e.target.y)}%`
        }
      };
      var pt = r(19203),
        ct = r(81982);
      const ft = "_$css",
        ut = {
          correct: (t, {
            treeScale: e,
            projectionDelta: r
          }) => {
            const i = t,
              a = t.includes("var("),
              s = [];
            a && (t = t.replace(pt.z2, (t => (s.push(t), ft))));
            const n = ct.f.parse(t);
            if (n.length > 5) return i;
            const o = ct.f.createTransformer(t),
              l = "number" != typeof n[0] ? 1 : 0,
              h = r.x.scale * e.x,
              p = r.y.scale * e.y;
            n[0 + l] /= h, n[1 + l] /= p;
            const c = (0, T.j)(h, p, .5);
            "number" == typeof n[2 + l] && (n[2 + l] /= c), "number" == typeof n[3 + l] && (n[3 + l] /= c);
            let f = o(n);
            if (a) {
              let t = 0;
              f = f.replace(ft, (() => {
                const e = s[t];
                return t++, e
              }))
            }
            return f
          }
        };
      var dt = r(70181);
      class mt extends o.Component {
        componentDidMount() {
          const {
            visualElement: t,
            layoutGroup: e,
            switchLayoutGroup: r,
            layoutId: i
          } = this.props, {
            projection: a
          } = t;
          (0, dt.$)(yt), a && (e.group && e.group.add(a), r && r.register && i && r.register(a), a.root.didUpdate(), a.addEventListener("animationComplete", (() => {
            this.safeToRemove()
          })), a.setOptions({
            ...a.options,
            onExitComplete: () => this.safeToRemove()
          })), ot.w.hasEverUpdated = !0
        }
        getSnapshotBeforeUpdate(t) {
          const {
            layoutDependency: e,
            visualElement: r,
            drag: i,
            isPresent: a
          } = this.props, s = r.projection;
          return s ? (s.isPresent = a, i || t.layoutDependency !== e || void 0 === e ? s.willUpdate() : this.safeToRemove(), t.isPresent !== a && (a ? s.promote() : s.relegate() || c.OH.postRender((() => {
            var t;
            (null === (t = s.getStack()) || void 0 === t ? void 0 : t.members.length) || this.safeToRemove()
          }))), null) : null
        }
        componentDidUpdate() {
          const {
            projection: t
          } = this.props.visualElement;
          t && (t.root.didUpdate(), !t.currentAnimation && t.isLead() && this.safeToRemove())
        }
        componentWillUnmount() {
          const {
            visualElement: t,
            layoutGroup: e,
            switchLayoutGroup: r
          } = this.props, {
            projection: i
          } = t;
          i && (i.scheduleCheckAfterUnmount(), (null == e ? void 0 : e.group) && e.group.remove(i), (null == r ? void 0 : r.deregister) && r.deregister(i))
        }
        safeToRemove() {
          const {
            safeToRemove: t
          } = this.props;
          null == t || t()
        }
        render() {
          return null
        }
      }
      const yt = {
          borderRadius: {
            ...ht,
            applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
          },
          borderTopLeftRadius: ht,
          borderTopRightRadius: ht,
          borderBottomLeftRadius: ht,
          borderBottomRightRadius: ht,
          boxShadow: ut
        },
        gt = {
          measureLayout: function(t) {
            const [e, r] = (0, at.xQ)(), i = (0, o.useContext)(st.L);
            return o.createElement(mt, {
              ...t,
              layoutGroup: i,
              switchLayoutGroup: (0, o.useContext)(nt.N),
              isPresent: e,
              safeToRemove: r
            })
          }
        };
      var vt = r(6273),
        bt = r(29592),
        xt = r(78558),
        Ct = r(16660),
        At = r(36763);
      const _t = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        Et = _t.length,
        St = t => "string" == typeof t ? parseFloat(t) : t,
        Pt = t => "number" == typeof t || U.px.test(t);

      function Tt(t, e) {
        return void 0 !== t[e] ? t[e] : t.borderRadius
      }
      const Ft = Mt(0, .5, Ct.yT),
        wt = Mt(.5, .95, At.l);

      function Mt(t, e, r) {
        return i => i < t ? 0 : i > e ? 1 : r((0, P.q)(t, e, i))
      }

      function kt(t, e) {
        t.min = e.min, t.max = e.max
      }

      function Dt(t, e) {
        kt(t.x, e.x), kt(t.y, e.y)
      }
      var It = r(28761);

      function Vt(t, e, r, i, a) {
        return t -= e, t = (0, It.hq)(t, 1 / r, i), void 0 !== a && (t = (0, It.hq)(t, 1 / a, i)), t
      }

      function Bt(t, e, [r, i, a], s, n) {
        ! function(t, e = 0, r = 1, i = .5, a, s = t, n = t) {
          if (U.KN.test(e) && (e = parseFloat(e), e = (0, T.j)(n.min, n.max, e / 100) - n.min), "number" != typeof e) return;
          let o = (0, T.j)(s.min, s.max, i);
          t === s && (o -= e), t.min = Vt(t.min, e, r, o, a), t.max = Vt(t.max, e, r, o, a)
        }(t, e[r], e[i], e[a], e.scale, s, n)
      }
      const Rt = ["x", "scaleX", "originX"],
        Lt = ["y", "scaleY", "originY"];

      function Gt(t, e, r, i) {
        Bt(t.x, e, Rt, null == r ? void 0 : r.x, null == i ? void 0 : i.x), Bt(t.y, e, Lt, null == r ? void 0 : r.y, null == i ? void 0 : i.y)
      }
      var Ot = r(47402);

      function zt(t) {
        return 0 === t.translate && 1 === t.scale
      }

      function Nt(t) {
        return zt(t.x) && zt(t.y)
      }

      function jt(t, e) {
        return t.x.min === e.x.min && t.x.max === e.x.max && t.y.min === e.y.min && t.y.max === e.y.max
      }

      function Ht(t) {
        return F(t.x) / F(t.y)
      }
      var qt = r(14646);
      class Wt {
        constructor() {
          this.members = []
        }
        add(t) {
          (0, qt.Kq)(this.members, t), t.scheduleRender()
        }
        remove(t) {
          if ((0, qt.Ai)(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
            const t = this.members[this.members.length - 1];
            t && this.promote(t)
          }
        }
        relegate(t) {
          const e = this.members.findIndex((e => t === e));
          if (0 === e) return !1;
          let r;
          for (let t = e; t >= 0; t--) {
            const e = this.members[t];
            if (!1 !== e.isPresent) {
              r = e;
              break
            }
          }
          return !!r && (this.promote(r), !0)
        }
        promote(t, e) {
          var r;
          const i = this.lead;
          if (t !== i && (this.prevLead = i, this.lead = t, t.show(), i)) {
            i.instance && i.scheduleRender(), t.scheduleRender(), t.resumeFrom = i, e && (t.resumeFrom.preserveOpacity = !0), i.snapshot && (t.snapshot = i.snapshot, t.snapshot.latestValues = i.animationValues || i.latestValues), (null === (r = t.root) || void 0 === r ? void 0 : r.isUpdating) && (t.isLayoutDirty = !0);
            const {
              crossfade: a
            } = t.options;
            !1 === a && i.hide()
          }
        }
        exitAnimationComplete() {
          this.members.forEach((t => {
            var e, r, i, a, s;
            null === (r = (e = t.options).onExitComplete) || void 0 === r || r.call(e), null === (s = null === (i = t.resumingFrom) || void 0 === i ? void 0 : (a = i.options).onExitComplete) || void 0 === s || s.call(a)
          }))
        }
        scheduleRender() {
          this.members.forEach((t => {
            t.instance && t.scheduleRender(!1)
          }))
        }
        removeLeadSnapshot() {
          this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
        }
      }

      function $t(t, e, r) {
        let i = "";
        const a = t.x.translate / e.x,
          s = t.y.translate / e.y;
        if ((a || s) && (i = `translate3d(${a}px, ${s}px, 0) `), 1 === e.x && 1 === e.y || (i += `scale(${1/e.x}, ${1/e.y}) `), r) {
          const {
            rotate: t,
            rotateX: e,
            rotateY: a
          } = r;
          t && (i += `rotate(${t}deg) `), e && (i += `rotateX(${e}deg) `), a && (i += `rotateY(${a}deg) `)
        }
        const n = t.x.scale * e.x,
          o = t.y.scale * e.y;
        return 1 === n && 1 === o || (i += `scale(${n}, ${o})`), i || "none"
      }
      var Ut = r(15822);
      const Yt = (t, e) => t.depth - e.depth;
      class Xt {
        constructor() {
          this.children = [], this.isDirty = !1
        }
        add(t) {
          (0, qt.Kq)(this.children, t), this.isDirty = !0
        }
        remove(t) {
          (0, qt.Ai)(this.children, t), this.isDirty = !0
        }
        forEach(t) {
          this.isDirty && this.children.sort(Yt), this.isDirty = !1, this.children.forEach(t)
        }
      }
      var Jt = r(23228),
        Kt = r(82448);
      const Zt = ["", "X", "Y", "Z"];
      let Qt = 0;

      function te({
        attachResizeListener: t,
        defaultParent: e,
        measureScroll: r,
        checkIsScrollRoot: i,
        resetTransform: a
      }) {
        return class {
          constructor(t, r = {}, i = (null == e ? void 0 : e())) {
            this.id = Qt++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isTransformDirty = !1, this.isProjectionDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = {
              x: 1,
              y: 1
            }, this.eventHandlers = new Map, this.potentialNodes = new Map, this.checkUpdateFailed = () => {
              this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
            }, this.updateProjection = () => {
              this.nodes.forEach(ie), this.nodes.forEach(le), this.nodes.forEach(he)
            }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.elementId = t, this.latestValues = r, this.root = i ? i.root || i : this, this.path = i ? [...i.path, i] : [], this.parent = i, this.depth = i ? i.depth + 1 : 0, t && this.root.registerPotentialNode(t, this);
            for (let t = 0; t < this.path.length; t++) this.path[t].shouldResetTransform = !0;
            this.root === this && (this.nodes = new Xt)
          }
          addEventListener(t, e) {
            return this.eventHandlers.has(t) || this.eventHandlers.set(t, new xt.v), this.eventHandlers.get(t).add(e)
          }
          notifyListeners(t, ...e) {
            const r = this.eventHandlers.get(t);
            null == r || r.notify(...e)
          }
          hasListeners(t) {
            return this.eventHandlers.has(t)
          }
          registerPotentialNode(t, e) {
            this.potentialNodes.set(t, e)
          }
          mount(e, r = !1) {
            var i;
            if (this.instance) return;
            this.isSVG = e instanceof SVGElement && "svg" !== e.tagName, this.instance = e;
            const {
              layoutId: a,
              layout: s,
              visualElement: n
            } = this.options;
            if (n && !n.current && n.mount(e), this.root.nodes.add(this), null === (i = this.parent) || void 0 === i || i.children.add(this), this.elementId && this.root.potentialNodes.delete(this.elementId), r && (s || a) && (this.isLayoutDirty = !0), t) {
              let r;
              const i = () => this.root.updateBlockedByResize = !1;
              t(e, (() => {
                this.root.updateBlockedByResize = !0, r && r(), r = (0, Kt.c)(i, 250), ot.w.hasAnimatedSinceResize && (ot.w.hasAnimatedSinceResize = !1, this.nodes.forEach(oe))
              }))
            }
            a && this.root.registerSharedNode(a, this), !1 !== this.options.animate && n && (a || s) && this.addEventListener("didUpdate", (({
              delta: t,
              hasLayoutChanged: e,
              hasRelativeTargetChanged: r,
              layout: i
            }) => {
              var a, s, o, l, h;
              if (this.isTreeAnimationBlocked()) return this.target = void 0, void(this.relativeTarget = void 0);
              const p = null !== (s = null !== (a = this.options.transition) && void 0 !== a ? a : n.getDefaultTransition()) && void 0 !== s ? s : me,
                {
                  onLayoutAnimationStart: c,
                  onLayoutAnimationComplete: f
                } = n.getProps(),
                u = !this.targetLayout || !jt(this.targetLayout, i) || r,
                d = !e && r;
              if ((null === (o = this.resumeFrom) || void 0 === o ? void 0 : o.instance) || d || e && (u || !this.currentAnimation)) {
                this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(t, d);
                const e = {
                  ...(0, Ot.rU)(p, "layout"),
                  onPlay: c,
                  onComplete: f
                };
                n.shouldReduceMotion && (e.delay = 0, e.type = !1), this.startAnimation(e)
              } else e || 0 !== this.animationProgress || oe(this), this.isLead() && (null === (h = (l = this.options).onExitComplete) || void 0 === h || h.call(l));
              this.targetLayout = i
            }))
          }
          unmount() {
            var t, e;
            this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this), null === (t = this.getStack()) || void 0 === t || t.remove(this), null === (e = this.parent) || void 0 === e || e.children.delete(this), this.instance = void 0, c.eO.preRender(this.updateProjection)
          }
          blockUpdate() {
            this.updateManuallyBlocked = !0
          }
          unblockUpdate() {
            this.updateManuallyBlocked = !1
          }
          isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
          }
          isTreeAnimationBlocked() {
            var t;
            return this.isAnimationBlocked || (null === (t = this.parent) || void 0 === t ? void 0 : t.isTreeAnimationBlocked()) || !1
          }
          startUpdate() {
            var t;
            this.isUpdateBlocked() || (this.isUpdating = !0, null === (t = this.nodes) || void 0 === t || t.forEach(pe), this.animationId++)
          }
          willUpdate(t = !0) {
            var e, r, i;
            if (this.root.isUpdateBlocked()) return void(null === (r = (e = this.options).onExitComplete) || void 0 === r || r.call(e));
            if (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
            this.isLayoutDirty = !0;
            for (let t = 0; t < this.path.length; t++) {
              const e = this.path[t];
              e.shouldResetTransform = !0, e.updateScroll("snapshot")
            }
            const {
              layoutId: a,
              layout: s
            } = this.options;
            if (void 0 === a && !s) return;
            const n = null === (i = this.options.visualElement) || void 0 === i ? void 0 : i.getProps().transformTemplate;
            this.prevTransformTemplateValue = null == n ? void 0 : n(this.latestValues, ""), this.updateSnapshot(), t && this.notifyListeners("willUpdate")
          }
          didUpdate() {
            if (this.isUpdateBlocked()) return this.unblockUpdate(), this.clearAllSnapshots(), void this.nodes.forEach(se);
            this.isUpdating && (this.isUpdating = !1, this.potentialNodes.size && (this.potentialNodes.forEach(ye), this.potentialNodes.clear()), this.nodes.forEach(ne), this.nodes.forEach(ee), this.nodes.forEach(re), this.clearAllSnapshots(), c.qX.update(), c.qX.preRender(), c.qX.render())
          }
          clearAllSnapshots() {
            this.nodes.forEach(ae), this.sharedNodes.forEach(ce)
          }
          scheduleUpdateProjection() {
            c.OH.preRender(this.updateProjection, !1, !0)
          }
          scheduleCheckAfterUnmount() {
            c.OH.postRender((() => {
              this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            }))
          }
          updateSnapshot() {
            !this.snapshot && this.instance && (this.snapshot = this.measure())
          }
          updateLayout() {
            var t;
            if (!this.instance) return;
            if (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead() || this.isLayoutDirty)) return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let t = 0; t < this.path.length; t++) this.path[t].updateScroll();
            const e = this.layout;
            this.layout = this.measure(!1), this.layoutCorrected = (0, j.ge)(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox), null === (t = this.options.visualElement) || void 0 === t || t.notify("LayoutMeasure", this.layout.layoutBox, null == e ? void 0 : e.layoutBox)
          }
          updateScroll(t = "measure") {
            let e = Boolean(this.options.layoutScroll && this.instance);
            this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === t && (e = !1), e && (this.scroll = {
              animationId: this.root.animationId,
              phase: t,
              isRoot: i(this.instance),
              offset: r(this.instance)
            })
          }
          resetTransform() {
            var t;
            if (!a) return;
            const e = this.isLayoutDirty || this.shouldResetTransform,
              r = this.projectionDelta && !Nt(this.projectionDelta),
              i = null === (t = this.options.visualElement) || void 0 === t ? void 0 : t.getProps().transformTemplate,
              s = null == i ? void 0 : i(this.latestValues, ""),
              n = s !== this.prevTransformTemplateValue;
            e && (r || (0, Ut.HD)(this.latestValues) || n) && (a(this.instance, s), this.shouldResetTransform = !1, this.scheduleRender())
          }
          measure(t = !0) {
            const e = this.measurePageBox();
            let r = this.removeElementScroll(e);
            var i;
            return t && (r = this.removeTransform(r)), ge((i = r).x), ge(i.y), {
              animationId: this.root.animationId,
              measuredBox: e,
              layoutBox: r,
              latestValues: {},
              source: this.id
            }
          }
          measurePageBox() {
            const {
              visualElement: t
            } = this.options;
            if (!t) return (0, j.ge)();
            const e = t.measureViewportBox(),
              {
                scroll: r
              } = this.root;
            return r && ((0, It.Ql)(e.x, r.offset.x), (0, It.Ql)(e.y, r.offset.y)), e
          }
          removeElementScroll(t) {
            const e = (0, j.ge)();
            Dt(e, t);
            for (let r = 0; r < this.path.length; r++) {
              const i = this.path[r],
                {
                  scroll: a,
                  options: s
                } = i;
              if (i !== this.root && a && s.layoutScroll) {
                if (a.isRoot) {
                  Dt(e, t);
                  const {
                    scroll: r
                  } = this.root;
                  r && ((0, It.Ql)(e.x, -r.offset.x), (0, It.Ql)(e.y, -r.offset.y))
                }(0, It.Ql)(e.x, a.offset.x), (0, It.Ql)(e.y, a.offset.y)
              }
            }
            return e
          }
          applyTransform(t, e = !1) {
            const r = (0, j.ge)();
            Dt(r, t);
            for (let t = 0; t < this.path.length; t++) {
              const i = this.path[t];
              !e && i.options.layoutScroll && i.scroll && i !== i.root && (0, It.Ww)(r, {
                x: -i.scroll.offset.x,
                y: -i.scroll.offset.y
              }), (0, Ut.HD)(i.latestValues) && (0, It.Ww)(r, i.latestValues)
            }
            return (0, Ut.HD)(this.latestValues) && (0, It.Ww)(r, this.latestValues), r
          }
          removeTransform(t) {
            var e;
            const r = (0, j.ge)();
            Dt(r, t);
            for (let t = 0; t < this.path.length; t++) {
              const i = this.path[t];
              if (!i.instance) continue;
              if (!(0, Ut.HD)(i.latestValues)) continue;
              (0, Ut.vk)(i.latestValues) && i.updateSnapshot();
              const a = (0, j.ge)();
              Dt(a, i.measurePageBox()), Gt(r, i.latestValues, null === (e = i.snapshot) || void 0 === e ? void 0 : e.layoutBox, a)
            }
            return (0, Ut.HD)(this.latestValues) && Gt(r, this.latestValues), r
          }
          setTargetDelta(t) {
            this.targetDelta = t, this.isProjectionDirty = !0, this.root.scheduleUpdateProjection()
          }
          setOptions(t) {
            this.options = {
              ...this.options,
              ...t,
              crossfade: void 0 === t.crossfade || t.crossfade
            }
          }
          clearMeasurements() {
            this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
          }
          resolveTargetDelta() {
            var t;
            const e = this.getLead();
            if (this.isProjectionDirty || (this.isProjectionDirty = e.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = e.isTransformDirty), !this.isProjectionDirty && !this.attemptToResolveRelativeTarget) return;
            const {
              layout: r,
              layoutId: i
            } = this.options;
            if (this.layout && (r || i)) {
              if (!this.targetDelta && !this.relativeTarget) {
                const t = this.getClosestProjectingParent();
                t && t.layout ? (this.relativeParent = t, this.relativeTarget = (0, j.ge)(), this.relativeTargetOrigin = (0, j.ge)(), V(this.relativeTargetOrigin, this.layout.layoutBox, t.layout.layoutBox), Dt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
              }
              var a, s, n;
              if ((this.relativeTarget || this.targetDelta) && (this.target || (this.target = (0, j.ge)(), this.targetWithTransforms = (0, j.ge)()), this.relativeTarget && this.relativeTargetOrigin && (null === (t = this.relativeParent) || void 0 === t ? void 0 : t.target) ? (a = this.target, s = this.relativeTarget, n = this.relativeParent.target, D(a.x, s.x, n.x), D(a.y, s.y, n.y)) : this.targetDelta ? (Boolean(this.resumingFrom) ? this.target = this.applyTransform(this.layout.layoutBox) : Dt(this.target, this.layout.layoutBox), (0, It.o4)(this.target, this.targetDelta)) : Dt(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget)) {
                this.attemptToResolveRelativeTarget = !1;
                const t = this.getClosestProjectingParent();
                t && Boolean(t.resumingFrom) === Boolean(this.resumingFrom) && !t.options.layoutScroll && t.target ? (this.relativeParent = t, this.relativeTarget = (0, j.ge)(), this.relativeTargetOrigin = (0, j.ge)(), V(this.relativeTargetOrigin, this.target, t.target), Dt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
              }
            }
          }
          getClosestProjectingParent() {
            if (this.parent && !(0, Ut.vk)(this.parent.latestValues) && !(0, Ut.vF)(this.parent.latestValues)) return (this.parent.relativeTarget || this.parent.targetDelta) && this.parent.layout ? this.parent : this.parent.getClosestProjectingParent()
          }
          calcProjection() {
            var t;
            const {
              isProjectionDirty: e,
              isTransformDirty: r
            } = this;
            this.isProjectionDirty = this.isTransformDirty = !1;
            const i = this.getLead(),
              a = Boolean(this.resumingFrom) || this !== i;
            let s = !0;
            if (e && (s = !1), a && r && (s = !1), s) return;
            const {
              layout: n,
              layoutId: o
            } = this.options;
            if (this.isTreeAnimating = Boolean((null === (t = this.parent) || void 0 === t ? void 0 : t.isTreeAnimating) || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !n && !o) return;
            Dt(this.layoutCorrected, this.layout.layoutBox), (0, It.OU)(this.layoutCorrected, this.treeScale, this.path, a);
            const {
              target: l
            } = i;
            if (!l) return;
            this.projectionDelta || (this.projectionDelta = (0, j.xU)(), this.projectionDeltaWithTransform = (0, j.xU)());
            const h = this.treeScale.x,
              p = this.treeScale.y,
              c = this.projectionTransform;
            k(this.projectionDelta, this.layoutCorrected, l, this.latestValues), this.projectionTransform = $t(this.projectionDelta, this.treeScale), this.projectionTransform === c && this.treeScale.x === h && this.treeScale.y === p || (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", l))
          }
          hide() {
            this.isVisible = !1
          }
          show() {
            this.isVisible = !0
          }
          scheduleRender(t = !0) {
            var e, r, i;
            null === (r = (e = this.options).scheduleRender) || void 0 === r || r.call(e), t && (null === (i = this.getStack()) || void 0 === i || i.scheduleRender()), this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
          }
          setAnimationOrigin(t, e = !1) {
            var r, i;
            const a = this.snapshot,
              s = (null == a ? void 0 : a.latestValues) || {},
              n = {
                ...this.latestValues
              },
              o = (0, j.xU)();
            this.relativeTarget = this.relativeTargetOrigin = void 0, this.attemptToResolveRelativeTarget = !e;
            const l = (0, j.ge)(),
              h = (null == a ? void 0 : a.source) !== (null === (r = this.layout) || void 0 === r ? void 0 : r.source),
              p = ((null === (i = this.getStack()) || void 0 === i ? void 0 : i.members.length) || 0) <= 1,
              c = Boolean(h && !p && !0 === this.options.crossfade && !this.path.some(de));
            this.animationProgress = 0, this.mixTargetDelta = e => {
              var r;
              const i = e / 1e3;
              var a, f, u, d;
              fe(o.x, t.x, i), fe(o.y, t.y, i), this.setTargetDelta(o), this.relativeTarget && this.relativeTargetOrigin && this.layout && (null === (r = this.relativeParent) || void 0 === r ? void 0 : r.layout) && (V(l, this.layout.layoutBox, this.relativeParent.layout.layoutBox), a = this.relativeTarget, f = this.relativeTargetOrigin, u = l, d = i, ue(a.x, f.x, u.x, d), ue(a.y, f.y, u.y, d)), h && (this.animationValues = n, function(t, e, r, i, a, s) {
                a ? (t.opacity = (0, T.j)(0, void 0 !== r.opacity ? r.opacity : 1, Ft(i)), t.opacityExit = (0, T.j)(void 0 !== e.opacity ? e.opacity : 1, 0, wt(i))) : s && (t.opacity = (0, T.j)(void 0 !== e.opacity ? e.opacity : 1, void 0 !== r.opacity ? r.opacity : 1, i));
                for (let a = 0; a < Et; a++) {
                  const s = `border${_t[a]}Radius`;
                  let n = Tt(e, s),
                    o = Tt(r, s);
                  void 0 === n && void 0 === o || (n || (n = 0), o || (o = 0), 0 === n || 0 === o || Pt(n) === Pt(o) ? (t[s] = Math.max((0, T.j)(St(n), St(o), i), 0), (U.KN.test(o) || U.KN.test(n)) && (t[s] += "%")) : t[s] = o)
                }(e.rotate || r.rotate) && (t.rotate = (0, T.j)(e.rotate || 0, r.rotate || 0, i))
              }(n, s, this.latestValues, i, c, p)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = i
            }, this.mixTargetDelta(0)
          }
          startAnimation(t) {
            var e, r;
            this.notifyListeners("animationStart"), null === (e = this.currentAnimation) || void 0 === e || e.stop(), this.resumingFrom && (null === (r = this.resumingFrom.currentAnimation) || void 0 === r || r.stop()), this.pendingAnimation && (c.eO.update(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = c.OH.update((() => {
              ot.w.hasAnimatedSinceResize = !0, this.currentAnimation = function(t, e, r = {}) {
                const i = (0, bt.S)(t) ? t : (0, vt.O)(t);
                return i.start((0, Y.O)("", i, e, r)), {
                  stop: () => i.stop(),
                  isAnimating: () => i.isAnimating()
                }
              }(0, 1e3, {
                ...t,
                onUpdate: e => {
                  var r;
                  this.mixTargetDelta(e), null === (r = t.onUpdate) || void 0 === r || r.call(t, e)
                },
                onComplete: () => {
                  var e;
                  null === (e = t.onComplete) || void 0 === e || e.call(t), this.completeAnimation()
                }
              }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
            }))
          }
          completeAnimation() {
            var t;
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0), null === (t = this.getStack()) || void 0 === t || t.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
          }
          finishAnimation() {
            var t;
            this.currentAnimation && (null === (t = this.mixTargetDelta) || void 0 === t || t.call(this, 1e3), this.currentAnimation.stop()), this.completeAnimation()
          }
          applyTransformsToTarget() {
            const t = this.getLead();
            let {
              targetWithTransforms: e,
              target: r,
              layout: i,
              latestValues: a
            } = t;
            if (e && r && i) {
              if (this !== t && this.layout && i && ve(this.options.animationType, this.layout.layoutBox, i.layoutBox)) {
                r = this.target || (0, j.ge)();
                const e = F(this.layout.layoutBox.x);
                r.x.min = t.target.x.min, r.x.max = r.x.min + e;
                const i = F(this.layout.layoutBox.y);
                r.y.min = t.target.y.min, r.y.max = r.y.min + i
              }
              Dt(e, r), (0, It.Ww)(e, a), k(this.projectionDeltaWithTransform, this.layoutCorrected, e, a)
            }
          }
          registerSharedNode(t, e) {
            var r, i, a;
            this.sharedNodes.has(t) || this.sharedNodes.set(t, new Wt), this.sharedNodes.get(t).add(e), e.promote({
              transition: null === (r = e.options.initialPromotionConfig) || void 0 === r ? void 0 : r.transition,
              preserveFollowOpacity: null === (a = null === (i = e.options.initialPromotionConfig) || void 0 === i ? void 0 : i.shouldPreserveFollowOpacity) || void 0 === a ? void 0 : a.call(i, e)
            })
          }
          isLead() {
            const t = this.getStack();
            return !t || t.lead === this
          }
          getLead() {
            var t;
            const {
              layoutId: e
            } = this.options;
            return e && (null === (t = this.getStack()) || void 0 === t ? void 0 : t.lead) || this
          }
          getPrevLead() {
            var t;
            const {
              layoutId: e
            } = this.options;
            return e ? null === (t = this.getStack()) || void 0 === t ? void 0 : t.prevLead : void 0
          }
          getStack() {
            const {
              layoutId: t
            } = this.options;
            if (t) return this.root.sharedNodes.get(t)
          }
          promote({
            needsReset: t,
            transition: e,
            preserveFollowOpacity: r
          } = {}) {
            const i = this.getStack();
            i && i.promote(this, r), t && (this.projectionDelta = void 0, this.needsReset = !0), e && this.setOptions({
              transition: e
            })
          }
          relegate() {
            const t = this.getStack();
            return !!t && t.relegate(this)
          }
          resetRotation() {
            const {
              visualElement: t
            } = this.options;
            if (!t) return;
            let e = !1;
            const {
              latestValues: r
            } = t;
            if ((r.rotate || r.rotateX || r.rotateY || r.rotateZ) && (e = !0), !e) return;
            const i = {};
            for (let e = 0; e < Zt.length; e++) {
              const a = "rotate" + Zt[e];
              r[a] && (i[a] = r[a], t.setStaticValue(a, 0))
            }
            null == t || t.render();
            for (const e in i) t.setStaticValue(e, i[e]);
            t.scheduleRender()
          }
          getProjectionStyles(t = {}) {
            var e, r, i;
            const a = {};
            if (!this.instance || this.isSVG) return a;
            if (!this.isVisible) return {
              visibility: "hidden"
            };
            a.visibility = "";
            const s = null === (e = this.options.visualElement) || void 0 === e ? void 0 : e.getProps().transformTemplate;
            if (this.needsReset) return this.needsReset = !1, a.opacity = "", a.pointerEvents = (0, Jt.u)(t.pointerEvents) || "", a.transform = s ? s(this.latestValues, "") : "none", a;
            const n = this.getLead();
            if (!this.projectionDelta || !this.layout || !n.target) {
              const e = {};
              return this.options.layoutId && (e.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1, e.pointerEvents = (0, Jt.u)(t.pointerEvents) || ""), this.hasProjected && !(0, Ut.HD)(this.latestValues) && (e.transform = s ? s({}, "") : "none", this.hasProjected = !1), e
            }
            const o = n.animationValues || n.latestValues;
            this.applyTransformsToTarget(), a.transform = $t(this.projectionDeltaWithTransform, this.treeScale, o), s && (a.transform = s(o, a.transform));
            const {
              x: l,
              y: h
            } = this.projectionDelta;
            a.transformOrigin = `${100*l.origin}% ${100*h.origin}% 0`, n.animationValues ? a.opacity = n === this ? null !== (i = null !== (r = o.opacity) && void 0 !== r ? r : this.latestValues.opacity) && void 0 !== i ? i : 1 : this.preserveOpacity ? this.latestValues.opacity : o.opacityExit : a.opacity = n === this ? void 0 !== o.opacity ? o.opacity : "" : void 0 !== o.opacityExit ? o.opacityExit : 0;
            for (const t in dt.H) {
              if (void 0 === o[t]) continue;
              const {
                correct: e,
                applyTo: r
              } = dt.H[t], i = e(o[t], n);
              if (r) {
                const t = r.length;
                for (let e = 0; e < t; e++) a[r[e]] = i
              } else a[t] = i
            }
            return this.options.layoutId && (a.pointerEvents = n === this ? (0, Jt.u)(t.pointerEvents) || "" : "none"), a
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
          }
          resetTree() {
            this.root.nodes.forEach((t => {
              var e;
              return null === (e = t.currentAnimation) || void 0 === e ? void 0 : e.stop()
            })), this.root.nodes.forEach(se), this.root.sharedNodes.clear()
          }
        }
      }

      function ee(t) {
        t.updateLayout()
      }

      function re(t) {
        var e, r, i;
        const a = (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) || t.snapshot;
        if (t.isLead() && t.layout && a && t.hasListeners("didUpdate")) {
          const {
            layoutBox: e,
            measuredBox: r
          } = t.layout, {
            animationType: i
          } = t.options, s = a.source !== t.layout.source;
          "size" === i ? H((t => {
            const r = s ? a.measuredBox[t] : a.layoutBox[t],
              i = F(r);
            r.min = e[t].min, r.max = r.min + i
          })) : ve(i, a.layoutBox, e) && H((t => {
            const r = s ? a.measuredBox[t] : a.layoutBox[t],
              i = F(e[t]);
            r.max = r.min + i
          }));
          const n = (0, j.xU)();
          k(n, e, a.layoutBox);
          const o = (0, j.xU)();
          s ? k(o, t.applyTransform(r, !0), a.measuredBox) : k(o, e, a.layoutBox);
          const l = !Nt(n);
          let h = !1;
          if (!t.resumeFrom) {
            const r = t.getClosestProjectingParent();
            if (r && !r.resumeFrom) {
              const {
                snapshot: t,
                layout: i
              } = r;
              if (t && i) {
                const r = (0, j.ge)();
                V(r, a.layoutBox, t.layoutBox);
                const s = (0, j.ge)();
                V(s, e, i.layoutBox), jt(r, s) || (h = !0)
              }
            }
          }
          t.notifyListeners("didUpdate", {
            layout: e,
            snapshot: a,
            delta: o,
            layoutDelta: n,
            hasLayoutChanged: l,
            hasRelativeTargetChanged: h
          })
        } else t.isLead() && (null === (i = (r = t.options).onExitComplete) || void 0 === i || i.call(r));
        t.options.transition = void 0
      }

      function ie(t) {
        t.isProjectionDirty || (t.isProjectionDirty = Boolean(t.parent && t.parent.isProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = Boolean(t.parent && t.parent.isTransformDirty))
      }

      function ae(t) {
        t.clearSnapshot()
      }

      function se(t) {
        t.clearMeasurements()
      }

      function ne(t) {
        const {
          visualElement: e
        } = t.options;
        (null == e ? void 0 : e.getProps().onBeforeLayoutMeasure) && e.notify("BeforeLayoutMeasure"), t.resetTransform()
      }

      function oe(t) {
        t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0
      }

      function le(t) {
        t.resolveTargetDelta()
      }

      function he(t) {
        t.calcProjection()
      }

      function pe(t) {
        t.resetRotation()
      }

      function ce(t) {
        t.removeLeadSnapshot()
      }

      function fe(t, e, r) {
        t.translate = (0, T.j)(e.translate, 0, r), t.scale = (0, T.j)(e.scale, 1, r), t.origin = e.origin, t.originPoint = e.originPoint
      }

      function ue(t, e, r, i) {
        t.min = (0, T.j)(e.min, r.min, i), t.max = (0, T.j)(e.max, r.max, i)
      }

      function de(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit
      }
      const me = {
        duration: .45,
        ease: [.4, 0, .1, 1]
      };

      function ye(t, e) {
        let r = t.root;
        for (let e = t.path.length - 1; e >= 0; e--)
          if (Boolean(t.path[e].instance)) {
            r = t.path[e];
            break
          } const i = (r && r !== t.root ? r.instance : document).querySelector(`[data-projection-id="${e}"]`);
        i && t.mount(i, !0)
      }

      function ge(t) {
        t.min = Math.round(t.min), t.max = Math.round(t.max)
      }

      function ve(t, e, r) {
        return "position" === t || "preserve-aspect" === t && !w(Ht(e), Ht(r), .2)
      }
      const be = te({
          attachResizeListener: (t, e) => (0, $.k)(t, "resize", e),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop
          }),
          checkIsScrollRoot: () => !0
        }),
        xe = {
          current: void 0
        },
        Ce = te({
          measureScroll: t => ({
            x: t.scrollLeft,
            y: t.scrollTop
          }),
          defaultParent: () => {
            if (!xe.current) {
              const t = new be(0, {});
              t.mount(window), t.setOptions({
                layoutScroll: !0
              }), xe.current = t
            }
            return xe.current
          },
          resetTransform: (t, e) => {
            t.style.transform = void 0 !== e ? e : "none"
          },
          checkIsScrollRoot: t => Boolean("fixed" === window.getComputedStyle(t).position)
        }),
        Ae = {
          ...n.W,
          ...s.n,
          ...rt,
          ...gt
        },
        _e = (0, i.H)(((t, e) => (0, a.P)(t, e, Ae, it.J, Ce)))
    },
    37774: (t, e, r) => {
      "use strict";
      r.d(e, {
        I: () => i
      });
      const i = t => t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
    },
    8935: (t, e, r) => {
      "use strict";
      r.d(e, {
        P: () => I
      });
      var i = r(19155),
        a = r(62229),
        s = r(13517),
        n = r(29592),
        o = r(33307);
      const l = () => ({
        style: {},
        transform: {},
        transformKeys: [],
        transformOrigin: {},
        vars: {}
      });

      function h(t, e, r) {
        for (const i in e)(0, n.S)(e[i]) || (0, s.z)(i, r) || (t[i] = e[i])
      }

      function p(t, e, r) {
        const i = {},
          s = function(t, e, r) {
            const i = {};
            return h(i, t.style || {}, t), Object.assign(i, function({
              transformTemplate: t
            }, e, r) {
              return (0, a.useMemo)((() => {
                const i = l();
                return (0, o.O)(i, e, {
                  enableHardwareAcceleration: !r
                }, t), Object.assign({}, i.vars, i.style)
              }), [e])
            }(t, e, r)), t.transformValues ? t.transformValues(i) : i
          }(t, e, r);
        return t.drag && !1 !== t.dragListener && (i.draggable = !1, s.userSelect = s.WebkitUserSelect = s.WebkitTouchCallout = "none", s.touchAction = !0 === t.drag ? "none" : "pan-" + ("x" === t.drag ? "y" : "x")), i.style = s, i
      }
      const c = new Set(["initial", "style", "values", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "layout", "layoutId", "layoutDependency", "onLayoutAnimationStart", "onLayoutAnimationComplete", "onLayoutMeasure", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "drag", "dragControls", "dragListener", "dragConstraints", "dragDirectionLock", "dragSnapToOrigin", "_dragX", "_dragY", "dragElastic", "dragMomentum", "dragPropagation", "dragTransition", "onHoverStart", "onHoverEnd", "layoutScroll", "whileInView", "onViewportEnter", "onViewportLeave", "viewport", "whileTap", "onTap", "onTapStart", "onTapCancel", "animate", "exit", "variants", "whileHover", "whileTap", "whileFocus", "whileDrag", "whileInView", "onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]);

      function f(t) {
        return c.has(t)
      }
      let u = t => !f(t);
      try {
        (d = require("@emotion/is-prop-valid").default) && (u = t => t.startsWith("on") ? !f(t) : d(t))
      } catch (t) {}
      var d, m = r(85404);
      const y = () => ({
        ...l(),
        attrs: {}
      });
      var g = r(97641);

      function v(t, e, r, i) {
        const s = (0, a.useMemo)((() => {
          const r = y();
          return (0, m.B)(r, e, {
            enableHardwareAcceleration: !1
          }, (0, g.n)(i), t.transformTemplate), {
            ...r.attrs,
            style: {
              ...r.style
            }
          }
        }), [e]);
        if (t.style) {
          const e = {};
          h(e, t.style, t), s.style = {
            ...e,
            ...s.style
          }
        }
        return s
      }

      function b(t = !1) {
        return (e, r, s, n, {
          latestValues: o
        }, l) => {
          const h = ((0, i.Q)(e) ? v : p)(r, o, l, e),
            c = function(t, e, r) {
              const i = {};
              for (const a in t)(u(a) || !0 === r && f(a) || !e && !f(a) || t.draggable && a.startsWith("onDrag")) && (i[a] = t[a]);
              return i
            }(r, "string" == typeof e, t),
            d = {
              ...c,
              ...h,
              ref: n
            };
          return s && (d["data-projection-id"] = s), (0, a.createElement)(e, d)
        }
      }
      var x = r(42967),
        C = r(81721),
        A = r(24866),
        _ = r(64143),
        E = r(98405),
        S = r(7593),
        P = r(23228),
        T = r(6417),
        F = r(79458);
      const w = t => (e, r) => {
        const i = (0, a.useContext)(T.A),
          s = (0, a.useContext)(_.t),
          n = () => function({
            scrapeMotionValuesFromProps: t,
            createRenderState: e,
            onMount: r
          }, i, a, s) {
            const n = {
              latestValues: M(i, a, s, t),
              renderState: e()
            };
            return r && (n.mount = t => r(i, t, n)), n
          }(t, e, i, s);
        return r ? n() : (0, S.M)(n)
      };

      function M(t, e, r, i) {
        const a = {},
          s = i(t);
        for (const t in s) a[t] = (0, P.u)(s[t]);
        let {
          initial: n,
          animate: o
        } = t;
        const l = (0, F.e)(t),
          h = (0, F.O)(t);
        e && h && !l && !1 !== t.inherit && (void 0 === n && (n = e.initial), void 0 === o && (o = e.animate));
        let p = !!r && !1 === r.initial;
        p = p || !1 === n;
        const c = p ? o : n;
        return c && "boolean" != typeof c && !(0, A.N)(c) && (Array.isArray(c) ? c : [c]).forEach((e => {
          const r = (0, E.a)(t, e);
          if (!r) return;
          const {
            transitionEnd: i,
            transition: s,
            ...n
          } = r;
          for (const t in n) {
            let e = n[t];
            Array.isArray(e) && (e = e[p ? e.length - 1 : 0]), null !== e && (a[t] = e)
          }
          for (const t in i) a[t] = i[t]
        })), a
      }
      const k = {
          useVisualState: w({
            scrapeMotionValuesFromProps: C.x,
            createRenderState: y,
            onMount: (t, e, {
              renderState: r,
              latestValues: i
            }) => {
              try {
                r.dimensions = "function" == typeof e.getBBox ? e.getBBox() : e.getBoundingClientRect()
              } catch (t) {
                r.dimensions = {
                  x: 0,
                  y: 0,
                  width: 0,
                  height: 0
                }
              }(0, m.B)(r, i, {
                enableHardwareAcceleration: !1
              }, (0, g.n)(e.tagName), t.transformTemplate), (0, x.d)(e, r)
            }
          })
        },
        D = {
          useVisualState: w({
            scrapeMotionValuesFromProps: r(15582).x,
            createRenderState: l
          })
        };

      function I(t, {
        forwardMotionProps: e = !1
      }, r, a, s) {
        return {
          ...(0, i.Q)(t) ? k : D,
          preloadedFeatures: r,
          useRender: b(e),
          createVisualElement: a,
          projectionNodeConstructor: s,
          Component: t
        }
      }
    },
    19203: (t, e, r) => {
      "use strict";
      r.d(e, {
        d9: () => l,
        z2: () => s
      });
      var i = r(13699);

      function a(t) {
        return "string" == typeof t && t.startsWith("var(--")
      }
      const s = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
        n = 4;

      function o(t, e, r = 1) {
        (0, i.V)(r <= n, `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`);
        const [l, h] = function(t) {
          const e = s.exec(t);
          if (!e) return [, ];
          const [, r, i] = e;
          return [r, i]
        }(t);
        if (!l) return;
        const p = window.getComputedStyle(e).getPropertyValue(l);
        return p ? p.trim() : a(h) ? o(h, e, r + 1) : h
      }

      function l(t, {
        ...e
      }, r) {
        const i = t.current;
        if (!(i instanceof Element)) return {
          target: e,
          transitionEnd: r
        };
        r && (r = {
          ...r
        }), t.values.forEach((t => {
          const e = t.get();
          if (!a(e)) return;
          const r = o(e, i);
          r && t.set(r)
        }));
        for (const t in e) {
          const s = e[t];
          if (!a(s)) continue;
          const n = o(s, i);
          n && (e[t] = n, r && void 0 === r[t] && (r[t] = s))
        }
        return {
          target: e,
          transitionEnd: r
        }
      }
    },
    97992: (t, e, r) => {
      "use strict";

      function i(t) {
        return t.startsWith("--")
      }
      r.d(e, {
        Y: () => i
      })
    },
    19155: (t, e, r) => {
      "use strict";
      r.d(e, {
        Q: () => a
      });
      const i = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

      function a(t) {
        return "string" == typeof t && !t.includes("-") && !!(i.indexOf(t) > -1 || /[A-Z]/.test(t))
      }
    },
    14680: (t, e, r) => {
      "use strict";
      r.d(e, {
        J: () => n
      });
      var i = r(81982),
        a = r(53580),
        s = r(21763);

      function n(t, e) {
        var r;
        let n = (0, s.D)(t);
        return n !== a.p && (n = i.f), null === (r = n.getAnimatableNone) || void 0 === r ? void 0 : r.call(n, e)
      }
    },
    21763: (t, e, r) => {
      "use strict";
      r.d(e, {
        D: () => n
      });
      var i = r(34219),
        a = r(53580);
      const s = {
          ...r(59782).W,
          color: i.y,
          backgroundColor: i.y,
          outlineColor: i.y,
          fill: i.y,
          stroke: i.y,
          borderColor: i.y,
          borderTopColor: i.y,
          borderRightColor: i.y,
          borderBottomColor: i.y,
          borderLeftColor: i.y,
          filter: a.p,
          WebkitFilter: a.p
        },
        n = t => s[t]
    },
    84273: (t, e, r) => {
      "use strict";
      r.d(e, {
        T: () => n,
        n: () => o
      });
      var i = r(4208),
        a = r(51906),
        s = r(26161);
      const n = [i.ai, a.px, a.KN, a.uj, a.vw, a.vh, {
          test: t => "auto" === t,
          parse: t => t
        }],
        o = t => n.find((0, s.w)(t))
    },
    59782: (t, e, r) => {
      "use strict";
      r.d(e, {
        W: () => n
      });
      var i = r(4208),
        a = r(51906);
      const s = {
          ...i.ai,
          transform: Math.round
        },
        n = {
          borderWidth: a.px,
          borderTopWidth: a.px,
          borderRightWidth: a.px,
          borderBottomWidth: a.px,
          borderLeftWidth: a.px,
          borderRadius: a.px,
          radius: a.px,
          borderTopLeftRadius: a.px,
          borderTopRightRadius: a.px,
          borderBottomRightRadius: a.px,
          borderBottomLeftRadius: a.px,
          width: a.px,
          maxWidth: a.px,
          height: a.px,
          maxHeight: a.px,
          size: a.px,
          top: a.px,
          right: a.px,
          bottom: a.px,
          left: a.px,
          padding: a.px,
          paddingTop: a.px,
          paddingRight: a.px,
          paddingBottom: a.px,
          paddingLeft: a.px,
          margin: a.px,
          marginTop: a.px,
          marginRight: a.px,
          marginBottom: a.px,
          marginLeft: a.px,
          rotate: a.uj,
          rotateX: a.uj,
          rotateY: a.uj,
          rotateZ: a.uj,
          scale: i.hs,
          scaleX: i.hs,
          scaleY: i.hs,
          scaleZ: i.hs,
          skew: a.uj,
          skewX: a.uj,
          skewY: a.uj,
          distance: a.px,
          translateX: a.px,
          translateY: a.px,
          translateZ: a.px,
          x: a.px,
          y: a.px,
          z: a.px,
          perspective: a.px,
          transformPerspective: a.px,
          opacity: i.X4,
          originX: a.gQ,
          originY: a.gQ,
          originZ: a.px,
          zIndex: s,
          fillOpacity: i.X4,
          strokeOpacity: i.X4,
          numOctaves: s
        }
    },
    26161: (t, e, r) => {
      "use strict";
      r.d(e, {
        w: () => i
      });
      const i = t => e => e.test(t)
    },
    33307: (t, e, r) => {
      "use strict";
      r.d(e, {
        O: () => h
      });
      var i = r(17915);
      const a = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective"
        },
        s = (t, e) => i.U.indexOf(t) - i.U.indexOf(e);
      var n = r(97992);
      const o = (t, e) => e && "number" == typeof t ? e.transform(t) : t;
      var l = r(59782);

      function h(t, e, r, h) {
        const {
          style: p,
          vars: c,
          transform: f,
          transformKeys: u,
          transformOrigin: d
        } = t;
        u.length = 0;
        let m = !1,
          y = !1,
          g = !0;
        for (const t in e) {
          const r = e[t];
          if ((0, n.Y)(t)) {
            c[t] = r;
            continue
          }
          const a = l.W[t],
            s = o(r, a);
          if (i.f.has(t)) {
            if (m = !0, f[t] = s, u.push(t), !g) continue;
            r !== (a.default || 0) && (g = !1)
          } else t.startsWith("origin") ? (y = !0, d[t] = s) : p[t] = s
        }
        if (e.transform || (m || h ? p.transform = function({
            transform: t,
            transformKeys: e
          }, {
            enableHardwareAcceleration: r = !0,
            allowTransformNone: i = !0
          }, n, o) {
            let l = "";
            e.sort(s);
            for (const r of e) l += `${a[r]||r}(${t[r]}) `;
            return r && !t.z && (l += "translateZ(0)"), l = l.trim(), o ? l = o(t, n ? "" : l) : i && n && (l = "none"), l
          }(t, r, g, h) : p.transform && (p.transform = "none")), y) {
          const {
            originX: t = "50%",
            originY: e = "50%",
            originZ: r = 0
          } = d;
          p.transformOrigin = `${t} ${e} ${r}`
        }
      }
    },
    3052: (t, e, r) => {
      "use strict";

      function i(t, {
        style: e,
        vars: r
      }, i, a) {
        Object.assign(t.style, e, a && a.getProjectionStyles(i));
        for (const e in r) t.style.setProperty(e, r[e])
      }
      r.d(e, {
        e: () => i
      })
    },
    15582: (t, e, r) => {
      "use strict";
      r.d(e, {
        x: () => s
      });
      var i = r(13517),
        a = r(29592);

      function s(t) {
        const {
          style: e
        } = t, r = {};
        for (const s in e)((0, a.S)(e[s]) || (0, i.z)(s, t)) && (r[s] = e[s]);
        return r
      }
    },
    17915: (t, e, r) => {
      "use strict";
      r.d(e, {
        U: () => i,
        f: () => a
      });
      const i = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
        a = new Set(i)
    },
    85404: (t, e, r) => {
      "use strict";
      r.d(e, {
        B: () => l
      });
      var i = r(33307),
        a = r(51906);

      function s(t, e, r) {
        return "string" == typeof t ? t : a.px.transform(e + r * t)
      }
      const n = {
          offset: "stroke-dashoffset",
          array: "stroke-dasharray"
        },
        o = {
          offset: "strokeDashoffset",
          array: "strokeDasharray"
        };

      function l(t, {
        attrX: e,
        attrY: r,
        originX: l,
        originY: h,
        pathLength: p,
        pathSpacing: c = 1,
        pathOffset: f = 0,
        ...u
      }, d, m, y) {
        if ((0, i.O)(t, u, d, y), m) return void(t.style.viewBox && (t.attrs.viewBox = t.style.viewBox));
        t.attrs = t.style, t.style = {};
        const {
          attrs: g,
          style: v,
          dimensions: b
        } = t;
        g.transform && (b && (v.transform = g.transform), delete g.transform), b && (void 0 !== l || void 0 !== h || v.transform) && (v.transformOrigin = function(t, e, r) {
          return `${s(e,t.x,t.width)} ${s(r,t.y,t.height)}`
        }(b, void 0 !== l ? l : .5, void 0 !== h ? h : .5)), void 0 !== e && (g.x = e), void 0 !== r && (g.y = r), void 0 !== p && function(t, e, r = 1, i = 0, s = !0) {
          t.pathLength = 1;
          const l = s ? n : o;
          t[l.offset] = a.px.transform(-i);
          const h = a.px.transform(e),
            p = a.px.transform(r);
          t[l.array] = `${h} ${p}`
        }(g, p, c, f, !1)
      }
    },
    51991: (t, e, r) => {
      "use strict";
      r.d(e, {
        e: () => i
      });
      const i = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"])
    },
    97641: (t, e, r) => {
      "use strict";
      r.d(e, {
        n: () => i
      });
      const i = t => "string" == typeof t && "svg" === t.toLowerCase()
    },
    42967: (t, e, r) => {
      "use strict";
      r.d(e, {
        d: () => n
      });
      var i = r(37774),
        a = r(3052),
        s = r(51991);

      function n(t, e, r, n) {
        (0, a.e)(t, e, void 0, n);
        for (const r in e.attrs) t.setAttribute(s.e.has(r) ? r : (0, i.I)(r), e.attrs[r])
      }
    },
    81721: (t, e, r) => {
      "use strict";
      r.d(e, {
        x: () => s
      });
      var i = r(29592),
        a = r(15582);

      function s(t) {
        const e = (0, a.x)(t);
        for (const r in t)(0, i.S)(t[r]) && (e["x" === r || "y" === r ? "attr" + r.toUpperCase() : r] = t[r]);
        return e
      }
    },
    88091: (t, e, r) => {
      "use strict";
      r.d(e, {
        ci: () => E,
        US: () => C
      });
      var i = r(24866),
        a = r(74496);

      function s(t, e) {
        if (!Array.isArray(e)) return !1;
        const r = e.length;
        if (r !== t.length) return !1;
        for (let i = 0; i < r; i++)
          if (e[i] !== t[i]) return !1;
        return !0
      }
      var n = r(4175),
        o = r(62369),
        l = r(17915),
        h = r(54165),
        p = r(80890);
      const c = (t, e) => `${t}: ${e}`;

      function f(t, e) {
        const {
          MotionAppearAnimations: r
        } = window, i = c(t, l.f.has(e) ? "transform" : e), a = r && r.get(i);
        return a ? (p.OH.render((() => {
          try {
            a.cancel(), r.delete(i)
          } catch (t) {}
        })), a.currentTime || 0) : 0
      }
      const u = "data-" + (0, r(37774).I)("framerAppearId");
      var d = r(83698);

      function m(t, e, r = {}) {
        var i;
        const a = (0, o.K)(t, e, r.custom);
        let {
          transition: s = t.getDefaultTransition() || {}
        } = a || {};
        r.transitionOverride && (s = r.transitionOverride);
        const n = a ? () => y(t, a, r) : () => Promise.resolve(),
          l = (null === (i = t.variantChildren) || void 0 === i ? void 0 : i.size) ? (i = 0) => {
            const {
              delayChildren: a = 0,
              staggerChildren: n,
              staggerDirection: o
            } = s;
            return function(t, e, r = 0, i = 0, a = 1, s) {
              const n = [],
                o = (t.variantChildren.size - 1) * i,
                l = 1 === a ? (t = 0) => t * i : (t = 0) => o - t * i;
              return Array.from(t.variantChildren).sort(g).forEach(((t, i) => {
                n.push(m(t, e, {
                  ...s,
                  delay: r + l(i)
                }).then((() => t.notify("AnimationComplete", e))))
              })), Promise.all(n)
            }(t, e, a + i, n, o, r)
          } : () => Promise.resolve(),
          {
            when: h
          } = s;
        if (h) {
          const [t, e] = "beforeChildren" === h ? [n, l] : [l, n];
          return t().then(e)
        }
        return Promise.all([n(), l(r.delay)])
      }

      function y(t, e, {
        delay: r = 0,
        transitionOverride: i,
        type: a
      } = {}) {
        var s;
        let {
          transition: o = t.getDefaultTransition(),
          transitionEnd: p,
          ...c
        } = t.makeTargetAnimatable(e);
        const m = t.getValue("willChange");
        i && (o = i);
        const y = [],
          g = a && (null === (s = t.animationState) || void 0 === s ? void 0 : s.getState()[a]);
        for (const e in c) {
          const i = t.getValue(e),
            a = c[e];
          if (!i || void 0 === a || g && v(g, e)) continue;
          let s = {
            delay: r,
            elapsed: 0,
            ...o
          };
          if (t.shouldReduceMotion && l.f.has(e) && (s = {
              ...s,
              type: !1,
              delay: 0
            }), !i.hasAnimated) {
            const r = t.getProps()[u];
            r && (s.elapsed = f(r, e))
          }
          let n = i.start((0, d.O)(e, i, a, s));
          (0, h.k)(m) && (m.add(e), n = n.then((() => m.remove(e)))), y.push(n)
        }
        return Promise.all(y).then((() => {
          p && (0, n.Uo)(t, p)
        }))
      }

      function g(t, e) {
        return t.sortNodePosition(e)
      }

      function v({
        protectedKeys: t,
        needsAnimating: e
      }, r) {
        const i = t.hasOwnProperty(r) && !0 !== e[r];
        return e[r] = !1, i
      }
      var b = r(71031),
        x = r(80985);
      const C = [x.J.Animate, x.J.InView, x.J.Focus, x.J.Hover, x.J.Tap, x.J.Drag, x.J.Exit],
        A = [...C].reverse(),
        _ = C.length;

      function E(t) {
        let e = function(t) {
          return e => Promise.all(e.map((({
            animation: e,
            options: r
          }) => function(t, e, r = {}) {
            let i;
            if (t.notify("AnimationStart", e), Array.isArray(e)) {
              const a = e.map((e => m(t, e, r)));
              i = Promise.all(a)
            } else if ("string" == typeof e) i = m(t, e, r);
            else {
              const a = "function" == typeof e ? (0, o.K)(t, e, r.custom) : e;
              i = y(t, a, r)
            }
            return i.then((() => t.notify("AnimationComplete", e)))
          }(t, e, r))))
        }(t);
        const r = {
          [x.J.Animate]: S(!0),
          [x.J.InView]: S(),
          [x.J.Hover]: S(),
          [x.J.Tap]: S(),
          [x.J.Drag]: S(),
          [x.J.Focus]: S(),
          [x.J.Exit]: S()
        };
        let n = !0;
        const l = (e, r) => {
          const i = (0, o.K)(t, r);
          if (i) {
            const {
              transition: t,
              transitionEnd: r,
              ...a
            } = i;
            e = {
              ...e,
              ...a,
              ...r
            }
          }
          return e
        };

        function h(o, h) {
          const p = t.getProps(),
            c = t.getVariantContext(!0) || {},
            f = [],
            u = new Set;
          let d = {},
            m = 1 / 0;
          for (let e = 0; e < _; e++) {
            const v = A[e],
              x = r[v],
              C = void 0 !== p[v] ? p[v] : c[v],
              _ = (0, b.w)(C),
              E = v === h ? x.isActive : null;
            !1 === E && (m = e);
            let S = C === c[v] && C !== p[v] && _;
            if (S && n && t.manuallyAnimateOnMount && (S = !1), x.protectedKeys = {
                ...d
              }, !x.isActive && null === E || !C && !x.prevProp || (0, i.N)(C) || "boolean" == typeof C) continue;
            const P = (y = x.prevProp, "string" == typeof(g = C) ? g !== y : !!Array.isArray(g) && !s(g, y));
            let T = P || v === h && x.isActive && !S && _ || e > m && _;
            const F = Array.isArray(C) ? C : [C];
            let w = F.reduce(l, {});
            !1 === E && (w = {});
            const {
              prevResolvedValues: M = {}
            } = x, k = {
              ...M,
              ...w
            }, D = t => {
              T = !0, u.delete(t), x.needsAnimating[t] = !0
            };
            for (const t in k) {
              const e = w[t],
                r = M[t];
              d.hasOwnProperty(t) || (e !== r ? (0, a.p)(e) && (0, a.p)(r) ? !s(e, r) || P ? D(t) : x.protectedKeys[t] = !0 : void 0 !== e ? D(t) : u.add(t) : void 0 !== e && u.has(t) ? D(t) : x.protectedKeys[t] = !0)
            }
            x.prevProp = C, x.prevResolvedValues = w, x.isActive && (d = {
              ...d,
              ...w
            }), n && t.blockInitialAnimation && (T = !1), T && !S && f.push(...F.map((t => ({
              animation: t,
              options: {
                type: v,
                ...o
              }
            }))))
          }
          var y, g;
          if (u.size) {
            const e = {};
            u.forEach((r => {
              const i = t.getBaseTarget(r);
              void 0 !== i && (e[r] = i)
            })), f.push({
              animation: e
            })
          }
          let v = Boolean(f.length);
          return n && !1 === p.initial && !t.manuallyAnimateOnMount && (v = !1), n = !1, v ? e(f) : Promise.resolve()
        }
        return {
          animateChanges: h,
          setActive: function(e, i, a) {
            var s;
            if (r[e].isActive === i) return Promise.resolve();
            null === (s = t.variantChildren) || void 0 === s || s.forEach((t => {
              var r;
              return null === (r = t.animationState) || void 0 === r ? void 0 : r.setActive(e, i)
            })), r[e].isActive = i;
            const n = h(a, e);
            for (const t in r) r[t].protectedKeys = {};
            return n
          },
          setAnimateFunction: function(r) {
            e = r(t)
          },
          getState: () => r
        }
      }

      function S(t = !1) {
        return {
          isActive: t,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {}
        }
      }
    },
    79458: (t, e, r) => {
      "use strict";
      r.d(e, {
        O: () => o,
        e: () => n
      });
      var i = r(24866),
        a = r(71031);
      const s = ["initial", "animate", "exit", "whileHover", "whileDrag", "whileTap", "whileFocus", "whileInView"];

      function n(t) {
        return (0, i.N)(t.animate) || s.some((e => (0, a.w)(t[e])))
      }

      function o(t) {
        return Boolean(n(t) || t.variants)
      }
    },
    71031: (t, e, r) => {
      "use strict";

      function i(t) {
        return "string" == typeof t || Array.isArray(t)
      }
      r.d(e, {
        w: () => i
      })
    },
    62369: (t, e, r) => {
      "use strict";
      r.d(e, {
        K: () => a
      });
      var i = r(98405);

      function a(t, e, r) {
        const a = t.getProps();
        return (0, i.a)(a, e, void 0 !== r ? r : a.custom, function(t) {
          const e = {};
          return t.values.forEach(((t, r) => e[r] = t.get())), e
        }(t), function(t) {
          const e = {};
          return t.values.forEach(((t, r) => e[r] = t.getVelocity())), e
        }(t))
      }
    },
    98405: (t, e, r) => {
      "use strict";

      function i(t, e, r, i = {}, a = {}) {
        return "function" == typeof e && (e = e(void 0 !== r ? r : t.custom, i, a)), "string" == typeof e && (e = t.variants && t.variants[e]), "function" == typeof e && (e = e(void 0 !== r ? r : t.custom, i, a)), e
      }
      r.d(e, {
        a: () => i
      })
    },
    4175: (t, e, r) => {
      "use strict";
      r.d(e, {
        TM: () => g,
        $z: () => b,
        Uo: () => y
      });
      const i = t => /^\-?\d*\.?\d+$/.test(t),
        a = t => /^0[^.\s]+$/.test(t);
      var s = r(60885),
        n = r(6273),
        o = r(81982),
        l = r(14680),
        h = r(34219),
        p = r(84273),
        c = r(26161);
      const f = [...p.T, h.y, o.f],
        u = t => f.find((0, c.w)(t));
      var d = r(62369);

      function m(t, e, r) {
        t.hasValue(e) ? t.getValue(e).set(r) : t.addValue(e, (0, n.O)(r))
      }

      function y(t, e) {
        const r = (0, d.K)(t, e);
        let {
          transitionEnd: i = {},
          transition: a = {},
          ...n
        } = r ? t.makeTargetAnimatable(r, !1) : {};
        n = {
          ...n,
          ...i
        };
        for (const e in n) m(t, e, (0, s.K)(n[e]))
      }

      function g(t, e, r) {
        var s, h;
        const p = Object.keys(e).filter((e => !t.hasValue(e))),
          c = p.length;
        if (c)
          for (let f = 0; f < c; f++) {
            const c = p[f],
              d = e[c];
            let m = null;
            Array.isArray(d) && (m = d[0]), null === m && (m = null !== (h = null !== (s = r[c]) && void 0 !== s ? s : t.readValue(c)) && void 0 !== h ? h : e[c]), null != m && ("string" == typeof m && (i(m) || a(m)) ? m = parseFloat(m) : !u(m) && o.f.test(d) && (m = (0, l.J)(c, d)), t.addValue(c, (0, n.O)(m, {
              owner: t
            })), void 0 === r[c] && (r[c] = m), null !== m && t.setBaseTarget(c, m))
          }
      }

      function v(t, e) {
        if (e) return (e[t] || e.default || e).from
      }

      function b(t, e, r) {
        var i;
        const a = {};
        for (const s in t) {
          const t = v(s, e);
          a[s] = void 0 !== t ? t : null === (i = r.getValue(s)) || void 0 === i ? void 0 : i.get()
        }
        return a
      }
    },
    80985: (t, e, r) => {
      "use strict";
      var i;
      r.d(e, {
          J: () => i
        }),
        function(t) {
          t.Animate = "animate", t.Hover = "whileHover", t.Tap = "whileTap", t.Drag = "whileDrag", t.Focus = "whileFocus", t.InView = "whileInView", t.Exit = "exit"
        }(i || (i = {}))
    },
    14646: (t, e, r) => {
      "use strict";

      function i(t, e) {
        -1 === t.indexOf(e) && t.push(e)
      }

      function a(t, e) {
        const r = t.indexOf(e);
        r > -1 && t.splice(r, 1)
      }
      r.d(e, {
        Ai: () => a,
        Kq: () => i
      })
    },
    25168: (t, e, r) => {
      "use strict";
      r.d(e, {
        q: () => i
      });
      const i = (t, e, r) => Math.min(Math.max(r, t), e)
    },
    82448: (t, e, r) => {
      "use strict";
      r.d(e, {
        c: () => a
      });
      var i = r(80890);

      function a(t, e) {
        const r = performance.now(),
          a = ({
            timestamp: s
          }) => {
            const n = s - r;
            n >= e && (i.eO.read(a), t(n - e))
          };
        return i.OH.read(a, !0), () => i.eO.read(a)
      }
    },
    32576: (t, e, r) => {
      "use strict";
      r.d(e, {
        B: () => i
      });
      const i = "undefined" != typeof document
    },
    69569: (t, e, r) => {
      "use strict";

      function i(t) {
        return "object" == typeof t && Object.prototype.hasOwnProperty.call(t, "current")
      }
      r.d(e, {
        X: () => i
      })
    },
    10631: (t, e, r) => {
      "use strict";
      r.d(e, {
        j: () => i
      });
      const i = (t, e, r) => -r * t + r * e + t
    },
    36763: (t, e, r) => {
      "use strict";
      r.d(e, {
        l: () => i
      });
      const i = t => t
    },
    95611: (t, e, r) => {
      "use strict";
      r.d(e, {
        F: () => a
      });
      const i = (t, e) => r => e(t(r)),
        a = (...t) => t.reduce(i)
    },
    39318: (t, e, r) => {
      "use strict";
      r.d(e, {
        _: () => a
      });
      var i = r(18113);
      const a = (void 0 === i || i.env, "production")
    },
    67026: (t, e, r) => {
      "use strict";
      r.d(e, {
        q: () => i
      });
      const i = (t, e, r) => {
        const i = e - t;
        return 0 === i ? 1 : (r - t) / i
      }
    },
    60885: (t, e, r) => {
      "use strict";
      r.d(e, {
        B: () => a,
        K: () => s
      });
      var i = r(74496);
      const a = t => Boolean(t && "object" == typeof t && t.mix && t.toValue),
        s = t => (0, i.p)(t) ? t[t.length - 1] || 0 : t
    },
    78558: (t, e, r) => {
      "use strict";
      r.d(e, {
        v: () => a
      });
      var i = r(14646);
      class a {
        constructor() {
          this.subscriptions = []
        }
        add(t) {
          return (0, i.Kq)(this.subscriptions, t), () => (0, i.Ai)(this.subscriptions, t)
        }
        notify(t, e, r) {
          const i = this.subscriptions.length;
          if (i)
            if (1 === i) this.subscriptions[0](t, e, r);
            else
              for (let a = 0; a < i; a++) {
                const i = this.subscriptions[a];
                i && i(t, e, r)
              }
        }
        getSize() {
          return this.subscriptions.length
        }
        clear() {
          this.subscriptions.length = 0
        }
      }
    },
    17761: (t, e, r) => {
      "use strict";
      r.d(e, {
        f: () => i
      });
      const i = t => 1e3 * t
    },
    7593: (t, e, r) => {
      "use strict";
      r.d(e, {
        M: () => a
      });
      var i = r(62229);

      function a(t) {
        const e = (0, i.useRef)(null);
        return null === e.current && (e.current = t()), e.current
      }
    },
    19651: (t, e, r) => {
      "use strict";
      r.d(e, {
        l: () => a
      });
      var i = r(62229);

      function a(t) {
        return (0, i.useEffect)((() => () => t()), [])
      }
    },
    22729: (t, e, r) => {
      "use strict";

      function i(t, e) {
        return e ? t * (1e3 / e) : 0
      }
      r.d(e, {
        f: () => i
      })
    },
    6273: (t, e, r) => {
      "use strict";
      r.d(e, {
        O: () => l
      });
      var i = r(9581),
        a = r(80890),
        s = r(78558),
        n = r(22729);
      class o {
        constructor(t, e = {}) {
          var r;
          this.version = "7.10.3", this.timeDelta = 0, this.lastUpdated = 0, this.canTrackVelocity = !1, this.events = {}, this.updateAndNotify = (t, e = !0) => {
            this.prev = this.current, this.current = t;
            const {
              delta: r,
              timestamp: s
            } = i.u;
            this.lastUpdated !== s && (this.timeDelta = r, this.lastUpdated = s, a.OH.postRender(this.scheduleVelocityCheck)), this.prev !== this.current && this.events.change && this.events.change.notify(this.current), this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()), e && this.events.renderRequest && this.events.renderRequest.notify(this.current)
          }, this.scheduleVelocityCheck = () => a.OH.postRender(this.velocityCheck), this.velocityCheck = ({
            timestamp: t
          }) => {
            t !== this.lastUpdated && (this.prev = this.current, this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()))
          }, this.hasAnimated = !1, this.prev = this.current = t, this.canTrackVelocity = (r = this.current, !isNaN(parseFloat(r))), this.owner = e.owner
        }
        onChange(t) {
          return this.on("change", t)
        }
        on(t, e) {
          return this.events[t] || (this.events[t] = new s.v), this.events[t].add(e)
        }
        clearListeners() {
          for (const t in this.events) this.events[t].clear()
        }
        attach(t) {
          this.passiveEffect = t
        }
        set(t, e = !0) {
          e && this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t, e)
        }
        setWithVelocity(t, e, r) {
          this.set(e), this.prev = t, this.timeDelta = r
        }
        get() {
          return this.current
        }
        getPrevious() {
          return this.prev
        }
        getVelocity() {
          return this.canTrackVelocity ? (0, n.f)(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0
        }
        start(t) {
          return this.stop(), new Promise((e => {
            this.hasAnimated = !0, this.stopAnimation = t(e), this.events.animationStart && this.events.animationStart.notify()
          })).then((() => {
            this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
          }))
        }
        stop() {
          this.stopAnimation && (this.stopAnimation(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
        }
        isAnimating() {
          return !!this.stopAnimation
        }
        clearAnimation() {
          this.stopAnimation = null
        }
        destroy() {
          this.clearListeners(), this.stop()
        }
      }

      function l(t, e) {
        return new o(t, e)
      }
    },
    33556: (t, e, r) => {
      "use strict";
      r.d(e, {
        u: () => a
      });
      var i = r(77719);
      const a = {
        test: (0, r(74848).$)("#"),
        parse: function(t) {
          let e = "",
            r = "",
            i = "",
            a = "";
          return t.length > 5 ? (e = t.substring(1, 3), r = t.substring(3, 5), i = t.substring(5, 7), a = t.substring(7, 9)) : (e = t.substring(1, 2), r = t.substring(2, 3), i = t.substring(3, 4), a = t.substring(4, 5), e += e, r += r, i += i, a += a), {
            red: parseInt(e, 16),
            green: parseInt(r, 16),
            blue: parseInt(i, 16),
            alpha: a ? parseInt(a, 16) / 255 : 1
          }
        },
        transform: i.B.transform
      }
    },
    66603: (t, e, r) => {
      "use strict";
      r.d(e, {
        V: () => o
      });
      var i = r(4208),
        a = r(51906),
        s = r(98416),
        n = r(74848);
      const o = {
        test: (0, n.$)("hsl", "hue"),
        parse: (0, n.q)("hue", "saturation", "lightness"),
        transform: ({
          hue: t,
          saturation: e,
          lightness: r,
          alpha: n = 1
        }) => "hsla(" + Math.round(t) + ", " + a.KN.transform((0, s.aj)(e)) + ", " + a.KN.transform((0, s.aj)(r)) + ", " + (0, s.aj)(i.X4.transform(n)) + ")"
      }
    },
    34219: (t, e, r) => {
      "use strict";
      r.d(e, {
        y: () => o
      });
      var i = r(98416),
        a = r(33556),
        s = r(66603),
        n = r(77719);
      const o = {
        test: t => n.B.test(t) || a.u.test(t) || s.V.test(t),
        parse: t => n.B.test(t) ? n.B.parse(t) : s.V.test(t) ? s.V.parse(t) : a.u.parse(t),
        transform: t => (0, i.Kg)(t) ? t : t.hasOwnProperty("red") ? n.B.transform(t) : s.V.transform(t)
      }
    },
    77719: (t, e, r) => {
      "use strict";
      r.d(e, {
        B: () => l
      });
      var i = r(25168),
        a = r(4208),
        s = r(98416),
        n = r(74848);
      const o = {
          ...a.ai,
          transform: t => Math.round((t => (0, i.q)(0, 255, t))(t))
        },
        l = {
          test: (0, n.$)("rgb", "red"),
          parse: (0, n.q)("red", "green", "blue"),
          transform: ({
            red: t,
            green: e,
            blue: r,
            alpha: i = 1
          }) => "rgba(" + o.transform(t) + ", " + o.transform(e) + ", " + o.transform(r) + ", " + (0, s.aj)(a.X4.transform(i)) + ")"
        }
    },
    74848: (t, e, r) => {
      "use strict";
      r.d(e, {
        $: () => a,
        q: () => s
      });
      var i = r(98416);
      const a = (t, e) => r => Boolean((0, i.Kg)(r) && i.Fl.test(r) && r.startsWith(t) || e && Object.prototype.hasOwnProperty.call(r, e)),
        s = (t, e, r) => a => {
          if (!(0, i.Kg)(a)) return a;
          const [s, n, o, l] = a.match(i.SY);
          return {
            [t]: parseFloat(s),
            [e]: parseFloat(n),
            [r]: parseFloat(o),
            alpha: void 0 !== l ? parseFloat(l) : 1
          }
        }
    },
    53580: (t, e, r) => {
      "use strict";
      r.d(e, {
        p: () => l
      });
      var i = r(81982),
        a = r(98416);
      const s = new Set(["brightness", "contrast", "saturate", "opacity"]);

      function n(t) {
        const [e, r] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        const [i] = r.match(a.SY) || [];
        if (!i) return t;
        const n = r.replace(i, "");
        let o = s.has(e) ? 1 : 0;
        return i !== r && (o *= 100), e + "(" + o + n + ")"
      }
      const o = /([a-z-]*)\(.*?\)/g,
        l = {
          ...i.f,
          getAnimatableNone: t => {
            const e = t.match(o);
            return e ? e.map(n).join(" ") : t
          }
        }
    },
    81982: (t, e, r) => {
      "use strict";
      r.d(e, {
        V: () => l,
        f: () => f
      });
      var i = r(34219),
        a = r(4208),
        s = r(98416);
      const n = "${c}",
        o = "${n}";

      function l(t) {
        "number" == typeof t && (t = `${t}`);
        const e = [];
        let r = 0,
          l = 0;
        const h = t.match(s.ne);
        h && (r = h.length, t = t.replace(s.ne, n), e.push(...h.map(i.y.parse)));
        const p = t.match(s.SY);
        return p && (l = p.length, t = t.replace(s.SY, o), e.push(...p.map(a.ai.parse))), {
          values: e,
          numColors: r,
          numNumbers: l,
          tokenised: t
        }
      }

      function h(t) {
        return l(t).values
      }

      function p(t) {
        const {
          values: e,
          numColors: r,
          tokenised: a
        } = l(t), h = e.length;
        return t => {
          let e = a;
          for (let a = 0; a < h; a++) e = e.replace(a < r ? n : o, a < r ? i.y.transform(t[a]) : (0, s.aj)(t[a]));
          return e
        }
      }
      const c = t => "number" == typeof t ? 0 : t,
        f = {
          test: function(t) {
            var e, r;
            return isNaN(t) && (0, s.Kg)(t) && ((null === (e = t.match(s.SY)) || void 0 === e ? void 0 : e.length) || 0) + ((null === (r = t.match(s.ne)) || void 0 === r ? void 0 : r.length) || 0) > 0
          },
          parse: h,
          createTransformer: p,
          getAnimatableNone: function(t) {
            const e = h(t);
            return p(t)(e.map(c))
          }
        }
    },
    4208: (t, e, r) => {
      "use strict";
      r.d(e, {
        X4: () => s,
        ai: () => a,
        hs: () => n
      });
      var i = r(25168);
      const a = {
          test: t => "number" == typeof t,
          parse: parseFloat,
          transform: t => t
        },
        s = {
          ...a,
          transform: t => (0, i.q)(0, 1, t)
        },
        n = {
          ...a,
          default: 1
        }
    },
    51906: (t, e, r) => {
      "use strict";
      r.d(e, {
        KN: () => n,
        gQ: () => p,
        px: () => o,
        uj: () => s,
        vh: () => l,
        vw: () => h
      });
      var i = r(98416);
      const a = t => ({
          test: e => (0, i.Kg)(e) && e.endsWith(t) && 1 === e.split(" ").length,
          parse: parseFloat,
          transform: e => `${e}${t}`
        }),
        s = a("deg"),
        n = a("%"),
        o = a("px"),
        l = a("vh"),
        h = a("vw"),
        p = {
          ...n,
          parse: t => n.parse(t) / 100,
          transform: t => n.transform(100 * t)
        }
    },
    98416: (t, e, r) => {
      "use strict";
      r.d(e, {
        Fl: () => n,
        Kg: () => o,
        SY: () => a,
        aj: () => i,
        ne: () => s
      });
      const i = t => Math.round(1e5 * t) / 1e5,
        a = /(-)?([\d]*\.?[\d])+/g,
        s = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
        n = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;

      function o(t) {
        return "string" == typeof t
      }
    },
    54165: (t, e, r) => {
      "use strict";
      r.d(e, {
        k: () => a
      });
      var i = r(29592);

      function a(t) {
        return Boolean((0, i.S)(t) && t.add)
      }
    },
    29592: (t, e, r) => {
      "use strict";
      r.d(e, {
        S: () => i
      });
      const i = t => !!(null == t ? void 0 : t.getVelocity)
    },
    23228: (t, e, r) => {
      "use strict";
      r.d(e, {
        u: () => s
      });
      var i = r(60885),
        a = r(29592);

      function s(t) {
        const e = (0, a.S)(t) ? t.get() : t;
        return (0, i.B)(e) ? e.toValue() : e
      }
    },
    56383: (t, e, r) => {
      "use strict";
      r.d(e, {
        Wx: () => f,
        pL: () => c
      });
      var i = r(62229),
        a = Object.defineProperty,
        s = (t, e, r) => (((t, e, r) => {
          e in t ? a(t, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r
          }) : t[e] = r
        })(t, "symbol" != typeof e ? e + "" : e, r), r),
        n = new Map,
        o = new WeakMap,
        l = 0,
        h = void 0;

      function p(t, e, r = {}, i = h) {
        if (void 0 === window.IntersectionObserver && void 0 !== i) {
          const a = t.getBoundingClientRect();
          return e(i, {
            isIntersecting: i,
            target: t,
            intersectionRatio: "number" == typeof r.threshold ? r.threshold : 0,
            time: 0,
            boundingClientRect: a,
            intersectionRect: a,
            rootBounds: a
          }), () => {}
        }
        const {
          id: a,
          observer: s,
          elements: p
        } = function(t) {
          const e = function(t) {
            return Object.keys(t).sort().filter((e => void 0 !== t[e])).map((e => {
              return `${e}_${"root"===e?(r=t.root,r?(o.has(r)||(l+=1,o.set(r,l.toString())),o.get(r)):"0"):t[e]}`;
              var r
            })).toString()
          }(t);
          let r = n.get(e);
          if (!r) {
            const i = new Map;
            let a;
            const s = new IntersectionObserver((e => {
              e.forEach((e => {
                var r;
                const s = e.isIntersecting && a.some((t => e.intersectionRatio >= t));
                t.trackVisibility && void 0 === e.isVisible && (e.isVisible = s), null == (r = i.get(e.target)) || r.forEach((t => {
                  t(s, e)
                }))
              }))
            }), t);
            a = s.thresholds || (Array.isArray(t.threshold) ? t.threshold : [t.threshold || 0]), r = {
              id: e,
              observer: s,
              elements: i
            }, n.set(e, r)
          }
          return r
        }(r), c = p.get(t) || [];
        return p.has(t) || p.set(t, c), c.push(e), s.observe(t),
          function() {
            c.splice(c.indexOf(e), 1), 0 === c.length && (p.delete(t), s.unobserve(t)), 0 === p.size && (s.disconnect(), n.delete(a))
          }
      }
      var c = class extends i.Component {
        constructor(t) {
          super(t), s(this, "node", null), s(this, "_unobserveCb", null), s(this, "handleNode", (t => {
            this.node && (this.unobserve(), t || this.props.triggerOnce || this.props.skip || this.setState({
              inView: !!this.props.initialInView,
              entry: void 0
            })), this.node = t || null, this.observeNode()
          })), s(this, "handleChange", ((t, e) => {
            t && this.props.triggerOnce && this.unobserve(),
              function(t) {
                return "function" != typeof t.children
              }(this.props) || this.setState({
                inView: t,
                entry: e
              }), this.props.onChange && this.props.onChange(t, e)
          })), this.state = {
            inView: !!t.initialInView,
            entry: void 0
          }
        }
        componentDidMount() {
          this.unobserve(), this.observeNode()
        }
        componentDidUpdate(t) {
          t.rootMargin === this.props.rootMargin && t.root === this.props.root && t.threshold === this.props.threshold && t.skip === this.props.skip && t.trackVisibility === this.props.trackVisibility && t.delay === this.props.delay || (this.unobserve(), this.observeNode())
        }
        componentWillUnmount() {
          this.unobserve()
        }
        observeNode() {
          if (!this.node || this.props.skip) return;
          const {
            threshold: t,
            root: e,
            rootMargin: r,
            trackVisibility: i,
            delay: a,
            fallbackInView: s
          } = this.props;
          this._unobserveCb = p(this.node, this.handleChange, {
            threshold: t,
            root: e,
            rootMargin: r,
            trackVisibility: i,
            delay: a
          }, s)
        }
        unobserve() {
          this._unobserveCb && (this._unobserveCb(), this._unobserveCb = null)
        }
        render() {
          const {
            children: t
          } = this.props;
          if ("function" == typeof t) {
            const {
              inView: e,
              entry: r
            } = this.state;
            return t({
              inView: e,
              entry: r,
              ref: this.handleNode
            })
          }
          const {
            as: e,
            triggerOnce: r,
            threshold: a,
            root: s,
            rootMargin: n,
            onChange: o,
            skip: l,
            trackVisibility: h,
            delay: p,
            initialInView: c,
            fallbackInView: f,
            ...u
          } = this.props;
          return i.createElement(e || "div", {
            ref: this.handleNode,
            ...u
          }, t)
        }
      };

      function f({
        threshold: t,
        delay: e,
        trackVisibility: r,
        rootMargin: a,
        root: s,
        triggerOnce: n,
        skip: o,
        initialInView: l,
        fallbackInView: h,
        onChange: c
      } = {}) {
        var f;
        const [u, d] = i.useState(null), m = i.useRef(), [y, g] = i.useState({
          inView: !!l,
          entry: void 0
        });
        m.current = c, i.useEffect((() => {
          if (o || !u) return;
          let i;
          return i = p(u, ((t, e) => {
            g({
              inView: t,
              entry: e
            }), m.current && m.current(t, e), e.isIntersecting && n && i && (i(), i = void 0)
          }), {
            root: s,
            rootMargin: a,
            threshold: t,
            trackVisibility: r,
            delay: e
          }, h), () => {
            i && i()
          }
        }), [Array.isArray(t) ? t.toString() : t, u, s, a, n, o, r, h, e]);
        const v = null == (f = y.entry) ? void 0 : f.target,
          b = i.useRef();
        u || !v || n || o || b.current === v || (b.current = v, g({
          inView: !!l,
          entry: void 0
        }));
        const x = [d, y.inView, y.entry];
        return x.ref = x[0], x.inView = x[1], x.entry = x[2], x
      }
    }
  }
]);