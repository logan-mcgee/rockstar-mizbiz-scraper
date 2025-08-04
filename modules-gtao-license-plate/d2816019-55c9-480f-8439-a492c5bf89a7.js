try {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    e = (new t.Error).stack;
  e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "d2816019-55c9-480f-8439-a492c5bf89a7", t._sentryDebugIdIdentifier = "sentry-dbid-d2816019-55c9-480f-8439-a492c5bf89a7")
} catch (t) {} {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  t._sentryModuleMetadata = t._sentryModuleMetadata || {}, t._sentryModuleMetadata[(new t.Error).stack] = Object.assign({}, t._sentryModuleMetadata[(new t.Error).stack], {
    release: "dde524f11ca2e811c948d868f62c7d544de61cc3",
    packageName: "@rockstargames/modules-gtao-license-plate",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
} {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  t.SENTRY_RELEASE = {
    id: "dde524f11ca2e811c948d868f62c7d544de61cc3"
  }
}(self.webpackChunk_rockstargames_modules_gtao_license_plate = self.webpackChunk_rockstargames_modules_gtao_license_plate || []).push([
  [1296], {
    12273: function(module, exports, __webpack_require__) {
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
          var r, i, s = t.length;
          for (r = 0; r < s; r += 1)
            for (var a in i = t[r].prototype) Object.prototype.hasOwnProperty.call(i, a) && (e.prototype[a] = i[a])
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
                s = [];
              switch (t) {
                case "int16":
                case "uint8c":
                  r = 1;
                  break;
                default:
                  r = 1.1
              }
              for (i = 0; i < e; i += 1) s.push(r);
              return s
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
          var i, s, a, n, o, h, l, p;
          switch (h = r * (1 - e), l = r * (1 - (o = 6 * t - (n = Math.floor(6 * t))) * e), p = r * (1 - (1 - o) * e), n % 6) {
            case 0:
              i = r, s = p, a = h;
              break;
            case 1:
              i = l, s = r, a = h;
              break;
            case 2:
              i = h, s = r, a = p;
              break;
            case 3:
              i = h, s = l, a = r;
              break;
            case 4:
              i = p, s = h, a = r;
              break;
            case 5:
              i = r, s = h, a = l
          }
          return [i, s, a]
        }

        function RGBtoHSV(t, e, r) {
          var i, s = Math.max(t, e, r),
            a = Math.min(t, e, r),
            n = s - a,
            o = 0 === s ? 0 : n / s,
            h = s / 255;
          switch (s) {
            case a:
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
          return [i, o, h]
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
              s = {
                onmessage: function() {},
                postMessage: function(e) {
                  t({
                    data: e
                  })
                }
              },
              a = {
                postMessage: function(t) {
                  s.onmessage({
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
                return t = e, s
              }((function(t) {
                if (a.dataManager || (a.dataManager = function() {
                    function t(s, a) {
                      var n, o, h, l, p, c, f, m = s.length;
                      for (o = 0; o < m; o += 1)
                        if ("ks" in (n = s[o]) && !n.completed) {
                          if (n.completed = !0, n.hasMask) {
                            var u = n.masksProperties;
                            for (l = u.length, h = 0; h < l; h += 1)
                              if (u[h].pt.k.i) i(u[h].pt.k);
                              else
                                for (c = u[h].pt.k.length, p = 0; p < c; p += 1) u[h].pt.k[p].s && i(u[h].pt.k[p].s[0]), u[h].pt.k[p].e && i(u[h].pt.k[p].e[0])
                          }
                          0 === n.ty ? (n.layers = e(n.refId, a), t(n.layers, a)) : 4 === n.ty ? r(n.shapes) : 5 === n.ty && (0 === (f = n).t.a.length && f.t.p)
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
                      var e, s, a;
                      for (e = t.length - 1; e >= 0; e -= 1)
                        if ("sh" === t[e].ty)
                          if (t[e].ks.k.i) i(t[e].ks.k);
                          else
                            for (a = t[e].ks.k.length, s = 0; s < a; s += 1) t[e].ks.k[s].s && i(t[e].ks.k[s].s[0]), t[e].ks.k[s].e && i(t[e].ks.k[s].e[0]);
                      else "gr" === t[e].ty && r(t[e].it)
                    }

                    function i(t) {
                      var e, r = t.i.length;
                      for (e = 0; e < r; e += 1) t.i[e][0] += t.v[e][0], t.i[e][1] += t.v[e][1], t.o[e][0] += t.v[e][0], t.o[e][1] += t.v[e][1]
                    }

                    function s(t, e) {
                      var r = e ? e.split(".") : [100, 100, 100];
                      return t[0] > r[0] || !(r[0] > t[0]) && (t[1] > r[1] || !(r[1] > t[1]) && (t[2] > r[2] || !(r[2] > t[2]) && null))
                    }
                    var a, n = function() {
                        var t = [4, 4, 14];

                        function e(t) {
                          var e, r, i, s = t.length;
                          for (e = 0; e < s; e += 1) 5 === t[e].ty && (void 0, i = (r = t[e]).t.d, r.t.d = {
                            k: [{
                              s: i,
                              t: 0
                            }]
                          })
                        }
                        return function(r) {
                          if (s(t, r.v) && (e(r.layers), r.assets)) {
                            var i, a = r.assets.length;
                            for (i = 0; i < a; i += 1) r.assets[i].layers && e(r.assets[i].layers)
                          }
                        }
                      }(),
                      o = (a = [4, 7, 99], function(t) {
                        if (t.chars && !s(a, t.v)) {
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
                      h = function() {
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
                          if (s(t, r.v) && (e(r.layers), r.assets)) {
                            var i, a = r.assets.length;
                            for (i = 0; i < a; i += 1) r.assets[i].layers && e(r.assets[i].layers)
                          }
                        }
                      }(),
                      l = function() {
                        var t = [4, 1, 9];

                        function e(t) {
                          var r, i, s, a = t.length;
                          for (r = 0; r < a; r += 1)
                            if ("gr" === t[r].ty) e(t[r].it);
                            else if ("fl" === t[r].ty || "st" === t[r].ty)
                            if (t[r].c.k && t[r].c.k[0].i)
                              for (s = t[r].c.k.length, i = 0; i < s; i += 1) t[r].c.k[i].s && (t[r].c.k[i].s[0] /= 255, t[r].c.k[i].s[1] /= 255, t[r].c.k[i].s[2] /= 255, t[r].c.k[i].s[3] /= 255), t[r].c.k[i].e && (t[r].c.k[i].e[0] /= 255, t[r].c.k[i].e[1] /= 255, t[r].c.k[i].e[2] /= 255, t[r].c.k[i].e[3] /= 255);
                            else t[r].c.k[0] /= 255, t[r].c.k[1] /= 255, t[r].c.k[2] /= 255, t[r].c.k[3] /= 255
                        }

                        function r(t) {
                          var r, i = t.length;
                          for (r = 0; r < i; r += 1) 4 === t[r].ty && e(t[r].shapes)
                        }
                        return function(e) {
                          if (s(t, e.v) && (r(e.layers), e.assets)) {
                            var i, a = e.assets.length;
                            for (i = 0; i < a; i += 1) e.assets[i].layers && r(e.assets[i].layers)
                          }
                        }
                      }(),
                      p = function() {
                        var t = [4, 4, 18];

                        function e(t) {
                          var r, i, s;
                          for (r = t.length - 1; r >= 0; r -= 1)
                            if ("sh" === t[r].ty)
                              if (t[r].ks.k.i) t[r].ks.k.c = t[r].closed;
                              else
                                for (s = t[r].ks.k.length, i = 0; i < s; i += 1) t[r].ks.k[i].s && (t[r].ks.k[i].s[0].c = t[r].closed), t[r].ks.k[i].e && (t[r].ks.k[i].e[0].c = t[r].closed);
                          else "gr" === t[r].ty && e(t[r].it)
                        }

                        function r(t) {
                          var r, i, s, a, n, o, h = t.length;
                          for (i = 0; i < h; i += 1) {
                            if ((r = t[i]).hasMask) {
                              var l = r.masksProperties;
                              for (a = l.length, s = 0; s < a; s += 1)
                                if (l[s].pt.k.i) l[s].pt.k.c = l[s].cl;
                                else
                                  for (o = l[s].pt.k.length, n = 0; n < o; n += 1) l[s].pt.k[n].s && (l[s].pt.k[n].s[0].c = l[s].cl), l[s].pt.k[n].e && (l[s].pt.k[n].e[0].c = l[s].cl)
                            }
                            4 === r.ty && e(r.shapes)
                          }
                        }
                        return function(e) {
                          if (s(t, e.v) && (r(e.layers), e.assets)) {
                            var i, a = e.assets.length;
                            for (i = 0; i < a; i += 1) e.assets[i].layers && r(e.assets[i].layers)
                          }
                        }
                      }();
                    var c = {
                      completeData: function(r) {
                        r.__complete || (l(r), n(r), o(r), h(r), p(r), t(r.layers, r.assets), function(r, i) {
                          if (r) {
                            var s = 0,
                              a = r.length;
                            for (s = 0; s < a; s += 1) 1 === r[s].t && (r[s].data.layers = e(r[s].data.refId, i), t(r[s].data.layers, i))
                          }
                        }(r.chars, r.assets), r.__complete = !0)
                      }
                    };
                    return c.checkColors = l, c.checkChars = o, c.checkPathProperties = h, c.checkShapes = p, c.completeLayers = t, c
                  }()), a.assetLoader || (a.assetLoader = function() {
                    function t(t) {
                      var e = t.getResponseHeader("content-type");
                      return e && "json" === t.responseType && -1 !== e.indexOf("json") || t.response && "object" === _typeof$5(t.response) ? t.response : t.response && "string" == typeof t.response ? JSON.parse(t.response) : t.responseText ? JSON.parse(t.responseText) : null
                    }
                    return {
                      load: function(e, r, i, s) {
                        var a, n = new XMLHttpRequest;
                        try {
                          n.responseType = "json"
                        } catch (t) {}
                        n.onreadystatechange = function() {
                          if (4 === n.readyState)
                            if (200 === n.status) a = t(n), i(a);
                            else try {
                              a = t(n), i(a)
                            } catch (t) {
                              s && s(t)
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
                  }()), "loadAnimation" === t.data.type) a.assetLoader.load(t.data.path, t.data.fullPath, (function(e) {
                  a.dataManager.completeData(e), a.postMessage({
                    id: t.data.id,
                    payload: e,
                    status: "success"
                  })
                }), (function() {
                  a.postMessage({
                    id: t.data.id,
                    status: "error"
                  })
                }));
                else if ("complete" === t.data.type) {
                  var e = t.data.animation;
                  a.dataManager.completeData(e), a.postMessage({
                    id: t.data.id,
                    payload: e,
                    status: "success"
                  })
                } else "loadData" === t.data.type && a.assetLoader.load(t.data.path, t.data.fullPath, (function(e) {
                  a.postMessage({
                    id: t.data.id,
                    payload: e,
                    status: "success"
                  })
                }), (function() {
                  a.postMessage({
                    id: t.data.id,
                    status: "error"
                  })
                }))
              })), e.onmessage = function(t) {
                var e = t.data,
                  r = e.id,
                  s = i[r];
                i[r] = null, "success" === e.status ? s.onComplete(e.payload) : s.onError && s.onError()
              })
            }

            function o(t, e) {
              var s = "processId_" + (r += 1);
              return i[s] = {
                onComplete: t,
                onError: e
              }, s
            }
            return {
              loadAnimation: function(t, r, i) {
                n();
                var s = o(r, i);
                e.postMessage({
                  type: "loadAnimation",
                  path: t,
                  fullPath: window.location.origin + window.location.pathname,
                  id: s
                })
              },
              loadData: function(t, r, i) {
                n();
                var s = o(r, i);
                e.postMessage({
                  type: "loadData",
                  path: t,
                  fullPath: window.location.origin + window.location.pathname,
                  id: s
                })
              },
              completeAnimation: function(t, r, i) {
                n();
                var s = o(r, i);
                e.postMessage({
                  type: "complete",
                  animation: t,
                  id: s
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
                var s = t.p; - 1 !== s.indexOf("images/") && (s = s.split("/")[1]), i = e + s
              } else i = r, i += t.u ? t.u : "", i += t.p;
              return i
            }

            function s(t) {
              var e = 0,
                r = setInterval(function() {
                  (t.getBBox().width || e > 500) && (this._imageLoaded(), clearInterval(r)), e += 1
                }.bind(this), 50)
            }

            function a(t) {
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
              this._imageLoaded = e.bind(this), this._footageLoaded = r.bind(this), this.testImageLoaded = s.bind(this), this.createFootageData = a.bind(this), this.assetsPath = "", this.path = "", this.totalImages = 0, this.totalFootages = 0, this.loadedAssets = 0, this.loadedFootagesCount = 0, this.imagesLoadedCb = null, this.images = []
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
                  s = createTag("img");
                s.crossOrigin = "anonymous", s.addEventListener("load", this._imageLoaded, !1), s.addEventListener("error", function() {
                  a.img = t, this._imageLoaded()
                }.bind(this), !1), s.src = r;
                var a = {
                  img: s,
                  assetData: e
                };
                return a
              },
              createImageData: function(e) {
                var r = i(e, this.assetsPath, this.path),
                  s = createNS("image");
                isSafari ? this.testImageLoaded(s) : s.addEventListener("load", this._imageLoaded, !1), s.addEventListener("error", function() {
                  a.img = t, this._imageLoaded()
                }.bind(this), !1), s.setAttributeNS("http://www.w3.org/1999/xlink", "href", r), this._elementHelper.append ? this._elementHelper.append(s) : this._elementHelper.appendChild(s);
                var a = {
                  img: s,
                  assetData: e
                };
                return a
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
              for (var e, r = t.split("\r\n"), i = {}, s = 0, a = 0; a < r.length; a += 1) 2 === (e = r[a].split(":")).length && (i[e[0]] = e[1].trim(), s += 1);
              if (0 === s) throw new Error;
              return i
            }
            return function(e) {
              for (var r = [], i = 0; i < e.length; i += 1) {
                var s = e[i],
                  a = {
                    time: s.tm,
                    duration: s.dr
                  };
                try {
                  a.payload = JSON.parse(e[i].cm)
                } catch (r) {
                  try {
                    a.payload = t(e[i].cm)
                  } catch (t) {
                    a.payload = {
                      name: e[i].cm
                    }
                  }
                }
                r.push(a)
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
          var s = i.getNamedItem("data-anim-loop") ? i.getNamedItem("data-anim-loop").value : i.getNamedItem("data-bm-loop") ? i.getNamedItem("data-bm-loop").value : i.getNamedItem("bm-loop") ? i.getNamedItem("bm-loop").value : "";
          "false" === s ? r.loop = !1 : "true" === s ? r.loop = !0 : "" !== s && (r.loop = parseInt(s, 10));
          var a = i.getNamedItem("data-anim-autoplay") ? i.getNamedItem("data-anim-autoplay").value : i.getNamedItem("data-bm-autoplay") ? i.getNamedItem("data-bm-autoplay").value : !i.getNamedItem("bm-autoplay") || i.getNamedItem("bm-autoplay").value;
          r.autoplay = "false" !== a, r.name = i.getNamedItem("data-name") ? i.getNamedItem("data-name").value : i.getNamedItem("data-bm-name") ? i.getNamedItem("data-bm-name").value : i.getNamedItem("bm-name") ? i.getNamedItem("bm-name").value : "", "false" === (i.getNamedItem("data-anim-prerender") ? i.getNamedItem("data-anim-prerender").value : i.getNamedItem("data-bm-prerender") ? i.getNamedItem("data-bm-prerender").value : i.getNamedItem("bm-prerender") ? i.getNamedItem("bm-prerender").value : "") && (r.prerender = !1), r.path ? this.setParams(r) : this.trigger("destroy")
        }, AnimationItem.prototype.includeLayers = function(t) {
          t.op > this.animationData.op && (this.animationData.op = t.op, this.totalFrames = Math.floor(t.op - this.animationData.ip));
          var e, r, i = this.animationData.layers,
            s = i.length,
            a = t.layers,
            n = a.length;
          for (r = 0; r < n; r += 1)
            for (e = 0; e < s;) {
              if (i[e].id === a[r].id) {
                i[e] = a[r];
                break
              }
              e += 1
            }
          if ((t.chars || t.fonts) && (this.renderer.globalData.fontManager.addChars(t.chars), this.renderer.globalData.fontManager.addFonts(t.fonts, this.renderer.globalData.defs)), t.assets)
            for (s = t.assets.length, e = 0; e < s; e += 1) this.animationData.assets.push(t.assets[e]);
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
              var s = this.getMarkerData(t);
              s && this.goToAndStop(s.time, !0)
            } else e ? this.setCurrentRawFrameValue(t) : this.setCurrentRawFrameValue(t * this.frameModifier);
            this.pause()
          }
        }, AnimationItem.prototype.goToAndPlay = function(t, e, r) {
          if (!r || this.name === r) {
            var i = Number(t);
            if (isNaN(i)) {
              var s = this.getMarkerData(t);
              s && (s.duration ? this.playSegments([s.time, s.time + s.duration], !0) : this.goToAndStop(s.time, !0))
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
              s = 0,
              a = !0,
              n = !1;

            function o(t) {
              for (var r = 0, s = t.target; r < i;) e[r].animation === s && (e.splice(r, 1), r -= 1, i -= 1, s.isPaused || p()), r += 1
            }

            function h(t, r) {
              if (!t) return null;
              for (var s = 0; s < i;) {
                if (e[s].elem === t && null !== e[s].elem) return e[s].animation;
                s += 1
              }
              var a = new AnimationItem;
              return c(a, t), a.setData(t, r), a
            }

            function l() {
              s += 1, u()
            }

            function p() {
              s -= 1
            }

            function c(t, r) {
              t.addEventListener("destroy", o), t.addEventListener("_active", l), t.addEventListener("_idle", p), e.push({
                elem: r,
                animation: t
              }), i += 1
            }

            function f(t) {
              var o, h = t - r;
              for (o = 0; o < i; o += 1) e[o].animation.advanceTime(h);
              r = t, s && !n ? window.requestAnimationFrame(f) : a = !0
            }

            function m(t) {
              r = t, window.requestAnimationFrame(f)
            }

            function u() {
              !n && s && a && (window.requestAnimationFrame(m), a = !1)
            }
            return t.registerAnimation = h, t.loadAnimation = function(t) {
              var e = new AnimationItem;
              return c(e, null), e.setParams(t), e
            }, t.setSpeed = function(t, r) {
              var s;
              for (s = 0; s < i; s += 1) e[s].animation.setSpeed(t, r)
            }, t.setDirection = function(t, r) {
              var s;
              for (s = 0; s < i; s += 1) e[s].animation.setDirection(t, r)
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
              var i, s = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))),
                a = s.length;
              for (i = 0; i < a; i += 1) r && s[i].setAttribute("data-bm-type", r), h(s[i], t);
              if (e && 0 === a) {
                r || (r = "svg");
                var n = document.getElementsByTagName("body")[0];
                n.innerText = "";
                var o = createTag("div");
                o.style.width = "100%", o.style.height = "100%", o.setAttribute("data-bm-type", r), n.appendChild(o), h(o, t)
              }
            }, t.resize = function() {
              var t;
              for (t = 0; t < i; t += 1) e[t].animation.resize()
            }, t.goToAndStop = function(t, r, s) {
              var a;
              for (a = 0; a < i; a += 1) e[a].animation.goToAndStop(t, r, s)
            }, t.destroy = function(t) {
              var r;
              for (r = i - 1; r >= 0; r -= 1) e[r].animation.destroy(t)
            }, t.freeze = function() {
              n = !0
            }, t.unfreeze = function() {
              n = !1, u()
            }, t.setVolume = function(t, r) {
              var s;
              for (s = 0; s < i; s += 1) e[s].animation.setVolume(t, r)
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
                getBezierEasing: function(t, r, i, s, a) {
                  var n = a || ("bez_" + t + "_" + r + "_" + i + "_" + s).replace(/\./g, "p");
                  if (e[n]) return e[n];
                  var o = new p([t, r, i, s]);
                  return e[n] = o, o
                }
              },
              e = {},
              r = 11,
              i = 1 / (r - 1),
              s = "function" == typeof Float32Array;

            function a(t, e) {
              return 1 - 3 * e + 3 * t
            }

            function n(t, e) {
              return 3 * e - 6 * t
            }

            function o(t) {
              return 3 * t
            }

            function h(t, e, r) {
              return ((a(e, r) * t + n(e, r)) * t + o(e)) * t
            }

            function l(t, e, r) {
              return 3 * a(e, r) * t * t + 2 * n(e, r) * t + o(e)
            }

            function p(t) {
              this._p = t, this._mSampleValues = s ? new Float32Array(r) : new Array(r), this._precomputed = !1, this.get = this.get.bind(this)
            }
            return p.prototype = {
              get: function(t) {
                var e = this._p[0],
                  r = this._p[1],
                  i = this._p[2],
                  s = this._p[3];
                return this._precomputed || this._precompute(), e === r && i === s ? t : 0 === t ? 0 : 1 === t ? 1 : h(this._getTForX(t), r, s)
              },
              _precompute: function() {
                var t = this._p[0],
                  e = this._p[1],
                  r = this._p[2],
                  i = this._p[3];
                this._precomputed = !0, t === e && r === i || this._calcSampleValues()
              },
              _calcSampleValues: function() {
                for (var t = this._p[0], e = this._p[2], s = 0; s < r; ++s) this._mSampleValues[s] = h(s * i, t, e)
              },
              _getTForX: function(t) {
                for (var e = this._p[0], s = this._p[2], a = this._mSampleValues, n = 0, o = 1, p = r - 1; o !== p && a[o] <= t; ++o) n += i;
                var c = n + (t - a[--o]) / (a[o + 1] - a[o]) * i,
                  f = l(c, e, s);
                return f >= .001 ? function(t, e, r, i) {
                  for (var s = 0; s < 4; ++s) {
                    var a = l(e, r, i);
                    if (0 === a) return e;
                    e -= (h(e, r, i) - t) / a
                  }
                  return e
                }(t, c, e, s) : 0 === f ? c : function(t, e, r, i, s) {
                  var a, n, o = 0;
                  do {
                    (a = h(n = e + (r - e) / 2, i, s) - t) > 0 ? r = n : e = n
                  } while (Math.abs(a) > 1e-7 && ++o < 10);
                  return n
                }(t, n, n + i, e, s)
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
              s = t,
              a = createSizedArray(s);
            return {
              newElement: function() {
                return i ? a[i -= 1] : e()
              },
              release: function(t) {
                i === s && (a = pooling.double(a), s *= 2), r && r(t), a[i] = t, i += 1
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

          function e(t, e, r, i, s, a) {
            var n = t * i + e * s + r * a - s * i - a * t - r * e;
            return n > -.001 && n < .001
          }
          var r = function(t, e, r, i) {
            var s, a, n, o, h, l, p = getDefaultCurveSegments(),
              c = 0,
              f = [],
              m = [],
              u = bezierLengthPool.newElement();
            for (n = r.length, s = 0; s < p; s += 1) {
              for (h = s / (p - 1), l = 0, a = 0; a < n; a += 1) o = bmPow(1 - h, 3) * t[a] + 3 * bmPow(1 - h, 2) * h * r[a] + 3 * (1 - h) * bmPow(h, 2) * i[a] + bmPow(h, 3) * e[a], f[a] = o, null !== m[a] && (l += bmPow(f[a] - m[a], 2)), m[a] = f[a];
              l && (c += l = bmSqrt(l)), u.percents[s] = h, u.lengths[s] = c
            }
            return u.addedLength = c, u
          };

          function i(t) {
            this.segmentLength = 0, this.points = new Array(t)
          }

          function s(t, e) {
            this.partialLength = t, this.point = e
          }
          var a, n = (a = {}, function(t, r, n, o) {
            var h = (t[0] + "_" + t[1] + "_" + r[0] + "_" + r[1] + "_" + n[0] + "_" + n[1] + "_" + o[0] + "_" + o[1]).replace(/\./g, "p");
            if (!a[h]) {
              var l, p, c, f, m, u, d, g = getDefaultCurveSegments(),
                y = 0,
                v = null;
              2 === t.length && (t[0] !== r[0] || t[1] !== r[1]) && e(t[0], t[1], r[0], r[1], t[0] + n[0], t[1] + n[1]) && e(t[0], t[1], r[0], r[1], r[0] + o[0], r[1] + o[1]) && (g = 2);
              var b = new i(g);
              for (c = n.length, l = 0; l < g; l += 1) {
                for (d = createSizedArray(c), m = l / (g - 1), u = 0, p = 0; p < c; p += 1) f = bmPow(1 - m, 3) * t[p] + 3 * bmPow(1 - m, 2) * m * (t[p] + n[p]) + 3 * (1 - m) * bmPow(m, 2) * (r[p] + o[p]) + bmPow(m, 3) * r[p], d[p] = f, null !== v && (u += bmPow(d[p] - v[p], 2));
                y += u = bmSqrt(u), b.points[l] = new s(u, d), v = d
              }
              b.segmentLength = y, a[h] = b
            }
            return a[h]
          });

          function o(t, e) {
            var r = e.percents,
              i = e.lengths,
              s = r.length,
              a = bmFloor((s - 1) * t),
              n = t * e.addedLength,
              o = 0;
            if (a === s - 1 || 0 === a || n === i[a]) return r[a];
            for (var h = i[a] > n ? -1 : 1, l = !0; l;)
              if (i[a] <= n && i[a + 1] > n ? (o = (n - i[a]) / (i[a + 1] - i[a]), l = !1) : a += h, a < 0 || a >= s - 1) {
                if (a === s - 1) return r[a];
                l = !1
              } return r[a] + (r[a + 1] - r[a]) * o
          }
          var h = createTypedArray("float32", 8);
          return {
            getSegmentsLength: function(t) {
              var e, i = segmentsLengthPool.newElement(),
                s = t.c,
                a = t.v,
                n = t.o,
                o = t.i,
                h = t._length,
                l = i.lengths,
                p = 0;
              for (e = 0; e < h - 1; e += 1) l[e] = r(a[e], a[e + 1], n[e], o[e + 1]), p += l[e].addedLength;
              return s && h && (l[e] = r(a[e], a[0], n[e], o[0]), p += l[e].addedLength), i.totalLength = p, i
            },
            getNewSegment: function(e, r, i, s, a, n, l) {
              a < 0 ? a = 0 : a > 1 && (a = 1);
              var p, c = o(a, l),
                f = o(n = n > 1 ? 1 : n, l),
                m = e.length,
                u = 1 - c,
                d = 1 - f,
                g = u * u * u,
                y = c * u * u * 3,
                v = c * c * u * 3,
                b = c * c * c,
                x = u * u * d,
                E = c * u * d + u * c * d + u * u * f,
                S = c * c * d + u * c * f + c * u * f,
                P = c * c * f,
                T = u * d * d,
                _ = c * d * d + u * f * d + u * d * f,
                C = c * f * d + u * f * f + c * d * f,
                A = c * f * f,
                M = d * d * d,
                w = f * d * d + d * f * d + d * d * f,
                k = f * f * d + d * f * f + f * d * f,
                D = f * f * f;
              for (p = 0; p < m; p += 1) h[4 * p] = t.round(1e3 * (g * e[p] + y * i[p] + v * s[p] + b * r[p])) / 1e3, h[4 * p + 1] = t.round(1e3 * (x * e[p] + E * i[p] + S * s[p] + P * r[p])) / 1e3, h[4 * p + 2] = t.round(1e3 * (T * e[p] + _ * i[p] + C * s[p] + A * r[p])) / 1e3, h[4 * p + 3] = t.round(1e3 * (M * e[p] + w * i[p] + k * s[p] + D * r[p])) / 1e3;
              return h
            },
            getPointInSegment: function(e, r, i, s, a, n) {
              var h = o(a, n),
                l = 1 - h;
              return [t.round(1e3 * (l * l * l * e[0] + (h * l * l + l * h * l + l * l * h) * i[0] + (h * h * l + l * h * h + h * l * h) * s[0] + h * h * h * r[0])) / 1e3, t.round(1e3 * (l * l * l * e[1] + (h * l * l + l * h * l + l * l * h) * i[1] + (h * h * l + l * h * h + h * l * h) * s[1] + h * h * h * r[1])) / 1e3]
            },
            buildBezierData: n,
            pointOnLine2D: e,
            pointOnLine3D: function(r, i, s, a, n, o, h, l, p) {
              if (0 === s && 0 === o && 0 === p) return e(r, i, a, n, h, l);
              var c, f = t.sqrt(t.pow(a - r, 2) + t.pow(n - i, 2) + t.pow(o - s, 2)),
                m = t.sqrt(t.pow(h - r, 2) + t.pow(l - i, 2) + t.pow(p - s, 2)),
                u = t.sqrt(t.pow(h - a, 2) + t.pow(l - n, 2) + t.pow(p - o, 2));
              return (c = f > m ? f > u ? f - m - u : u - m - f : u > m ? u - m - f : m - f - u) > -1e-4 && c < 1e-4
            }
          }
        }
        var bez = bezFunction(),
          initFrame = initialDefaultFrame,
          mathAbs = Math.abs;

        function interpolateValue(t, e) {
          var r, i = this.offsetTime;
          "multidimensional" === this.propType && (r = createTypedArray("float32", this.pv.length));
          for (var s, a, n, o, h, l, p, c, f, m = e.lastIndex, u = m, d = this.keyframes.length - 1, g = !0; g;) {
            if (s = this.keyframes[u], a = this.keyframes[u + 1], u === d - 1 && t >= a.t - i) {
              s.h && (s = a), m = 0;
              break
            }
            if (a.t - i > t) {
              m = u;
              break
            }
            u < d - 1 ? u += 1 : (m = 0, g = !1)
          }
          n = this.keyframesMetadata[u] || {};
          var y, v = a.t - i,
            b = s.t - i;
          if (s.to) {
            n.bezierData || (n.bezierData = bez.buildBezierData(s.s, a.s || s.e, s.to, s.ti));
            var x = n.bezierData;
            if (t >= v || t < b) {
              var E = t >= v ? x.points.length - 1 : 0;
              for (h = x.points[E].point.length, o = 0; o < h; o += 1) r[o] = x.points[E].point[o]
            } else {
              n.__fnct ? f = n.__fnct : (f = BezierFactory.getBezierEasing(s.o.x, s.o.y, s.i.x, s.i.y, s.n).get, n.__fnct = f), l = f((t - b) / (v - b));
              var S, P = x.segmentLength * l,
                T = e.lastFrame < t && e._lastKeyframeIndex === u ? e._lastAddedLength : 0;
              for (c = e.lastFrame < t && e._lastKeyframeIndex === u ? e._lastPoint : 0, g = !0, p = x.points.length; g;) {
                if (T += x.points[c].partialLength, 0 === P || 0 === l || c === x.points.length - 1) {
                  for (h = x.points[c].point.length, o = 0; o < h; o += 1) r[o] = x.points[c].point[o];
                  break
                }
                if (P >= T && P < T + x.points[c + 1].partialLength) {
                  for (S = (P - T) / x.points[c + 1].partialLength, h = x.points[c].point.length, o = 0; o < h; o += 1) r[o] = x.points[c].point[o] + (x.points[c + 1].point[o] - x.points[c].point[o]) * S;
                  break
                }
                c < p - 1 ? c += 1 : g = !1
              }
              e._lastPoint = c, e._lastAddedLength = T - x.points[c].partialLength, e._lastKeyframeIndex = u
            }
          } else {
            var _, C, A, M, w;
            if (d = s.s.length, y = a.s || s.e, this.sh && 1 !== s.h) t >= v ? (r[0] = y[0], r[1] = y[1], r[2] = y[2]) : t <= b ? (r[0] = s.s[0], r[1] = s.s[1], r[2] = s.s[2]) : quaternionToEuler(r, slerp(createQuaternion(s.s), createQuaternion(y), (t - b) / (v - b)));
            else
              for (u = 0; u < d; u += 1) 1 !== s.h && (t >= v ? l = 1 : t < b ? l = 0 : (s.o.x.constructor === Array ? (n.__fnct || (n.__fnct = []), n.__fnct[u] ? f = n.__fnct[u] : (_ = void 0 === s.o.x[u] ? s.o.x[0] : s.o.x[u], C = void 0 === s.o.y[u] ? s.o.y[0] : s.o.y[u], A = void 0 === s.i.x[u] ? s.i.x[0] : s.i.x[u], M = void 0 === s.i.y[u] ? s.i.y[0] : s.i.y[u], f = BezierFactory.getBezierEasing(_, C, A, M).get, n.__fnct[u] = f)) : n.__fnct ? f = n.__fnct : (_ = s.o.x, C = s.o.y, A = s.i.x, M = s.i.y, f = BezierFactory.getBezierEasing(_, C, A, M).get, s.keyframeMetadata = f), l = f((t - b) / (v - b)))), y = a.s || s.e, w = 1 === s.h ? s.s[u] : s.s[u] + (y[u] - s.s[u]) * l, "multidimensional" === this.propType ? r[u] = w : r = w
          }
          return e.lastIndex = m, r
        }

        function slerp(t, e, r) {
          var i, s, a, n, o, h = [],
            l = t[0],
            p = t[1],
            c = t[2],
            f = t[3],
            m = e[0],
            u = e[1],
            d = e[2],
            g = e[3];
          return (s = l * m + p * u + c * d + f * g) < 0 && (s = -s, m = -m, u = -u, d = -d, g = -g), 1 - s > 1e-6 ? (i = Math.acos(s), a = Math.sin(i), n = Math.sin((1 - r) * i) / a, o = Math.sin(r * i) / a) : (n = 1 - r, o = r), h[0] = n * l + o * m, h[1] = n * p + o * u, h[2] = n * c + o * d, h[3] = n * f + o * g, h
        }

        function quaternionToEuler(t, e) {
          var r = e[0],
            i = e[1],
            s = e[2],
            a = e[3],
            n = Math.atan2(2 * i * a - 2 * r * s, 1 - 2 * i * i - 2 * s * s),
            o = Math.asin(2 * r * i + 2 * s * a),
            h = Math.atan2(2 * r * a - 2 * i * s, 1 - 2 * r * r - 2 * s * s);
          t[0] = n / degToRads, t[1] = o / degToRads, t[2] = h / degToRads
        }

        function createQuaternion(t) {
          var e = t[0] * degToRads,
            r = t[1] * degToRads,
            i = t[2] * degToRads,
            s = Math.cos(e / 2),
            a = Math.cos(r / 2),
            n = Math.cos(i / 2),
            o = Math.sin(e / 2),
            h = Math.sin(r / 2),
            l = Math.sin(i / 2);
          return [o * h * n + s * a * l, o * a * n + s * h * l, s * h * n - o * a * l, s * a * n - o * h * l]
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
          var s;
          this.propType = "multidimensional", this.mult = r || 1, this.data = e, this._mdf = !1, this.elem = t, this.container = i, this.comp = t.comp, this.k = !1, this.kf = !1, this.frameId = -1;
          var a = e.k.length;
          for (this.v = createTypedArray("float32", a), this.pv = createTypedArray("float32", a), this.vel = createTypedArray("float32", a), s = 0; s < a; s += 1) this.v[s] = e.k[s] * this.mult, this.pv[s] = e.k[s];
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
          var s;
          this.propType = "multidimensional";
          var a, n, o, h, l = e.k.length;
          for (s = 0; s < l - 1; s += 1) e.k[s].to && e.k[s].s && e.k[s + 1] && e.k[s + 1].s && (a = e.k[s].s, n = e.k[s + 1].s, o = e.k[s].to, h = e.k[s].ti, (2 === a.length && (a[0] !== n[0] || a[1] !== n[1]) && bez.pointOnLine2D(a[0], a[1], n[0], n[1], a[0] + o[0], a[1] + o[1]) && bez.pointOnLine2D(a[0], a[1], n[0], n[1], n[0] + h[0], n[1] + h[1]) || 3 === a.length && (a[0] !== n[0] || a[1] !== n[1] || a[2] !== n[2]) && bez.pointOnLine3D(a[0], a[1], a[2], n[0], n[1], n[2], a[0] + o[0], a[1] + o[1], a[2] + o[2]) && bez.pointOnLine3D(a[0], a[1], a[2], n[0], n[1], n[2], n[0] + h[0], n[1] + h[1], n[2] + h[2])) && (e.k[s].to = null, e.k[s].ti = null), a[0] === n[0] && a[1] === n[1] && 0 === o[0] && 0 === o[1] && 0 === h[0] && 0 === h[1] && (2 === a.length || a[2] === n[2] && 0 === o[2] && 0 === h[2]) && (e.k[s].to = null, e.k[s].ti = null));
          this.effectsSequence = [getValueAtCurrentTime.bind(this)], this.data = e, this.keyframes = e.k, this.keyframesMetadata = [], this.offsetTime = t.data.st, this.k = !0, this.kf = !0, this._isFirstFrame = !0, this.mult = r || 1, this.elem = t, this.container = i, this.comp = t.comp, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.interpolateValue = interpolateValue, this.frameId = -1;
          var p = e.k[0].s.length;
          for (this.v = createTypedArray("float32", p), this.pv = createTypedArray("float32", p), s = 0; s < p; s += 1) this.v[s] = initFrame, this.pv[s] = initFrame;
          this._caching = {
            lastFrame: initFrame,
            lastIndex: 0,
            value: createTypedArray("float32", p)
          }, this.addEffect = addEffect
        }
        var PropertyFactory = {
          getProp: function(t, e, r, i, s) {
            var a;
            if (e.sid && (e = t.globalData.slotManager.getProp(e)), e.k.length)
              if ("number" == typeof e.k[0]) a = new MultiDimensionalProperty(t, e, i, s);
              else switch (r) {
                case 0:
                  a = new KeyframedValueProperty(t, e, i, s);
                  break;
                case 1:
                  a = new KeyframedMultidimensionalProperty(t, e, i, s)
              } else a = new ValueProperty(t, e, i, s);
            return a.effectsSequence.length && s.addDynamicProperty(a), a
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
        }, ShapePath.prototype.setXYAt = function(t, e, r, i, s) {
          var a;
          switch (this._length = Math.max(this._length, i + 1), this._length >= this._maxLength && this.doubleArrayLength(), r) {
            case "v":
              a = this.v;
              break;
            case "i":
              a = this.i;
              break;
            case "o":
              a = this.o;
              break;
            default:
              a = []
          }(!a[i] || a[i] && !s) && (a[i] = pointPool.newElement()), a[i][0] = t, a[i][1] = e
        }, ShapePath.prototype.setTripleAt = function(t, e, r, i, s, a, n, o) {
          this.setXYAt(t, e, "v", n, o), this.setXYAt(r, i, "o", n, o), this.setXYAt(s, a, "i", n, o)
        }, ShapePath.prototype.reverse = function() {
          var t = new ShapePath;
          t.setPathData(this.c, this._length);
          var e = this.v,
            r = this.o,
            i = this.i,
            s = 0;
          this.c && (t.setTripleAt(e[0][0], e[0][1], i[0][0], i[0][1], r[0][0], r[0][1], 0, !1), s = 1);
          var a, n = this._length - 1,
            o = this._length;
          for (a = s; a < o; a += 1) t.setTripleAt(e[n][0], e[n][1], i[n][0], i[n][1], r[n][0], r[n][1], a, !1), n -= 1;
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
              var i, s, a, n, o, h, l, p, c, f = r.lastIndex,
                m = this.keyframes;
              if (t < m[0].t - this.offsetTime) i = m[0].s[0], a = !0, f = 0;
              else if (t >= m[m.length - 1].t - this.offsetTime) i = m[m.length - 1].s ? m[m.length - 1].s[0] : m[m.length - 2].e[0], a = !0;
              else {
                for (var u, d, g, y = f, v = m.length - 1, b = !0; b && (u = m[y], !((d = m[y + 1]).t - this.offsetTime > t));) y < v - 1 ? y += 1 : b = !1;
                if (g = this.keyframesMetadata[y] || {}, f = y, !(a = 1 === u.h)) {
                  if (t >= d.t - this.offsetTime) p = 1;
                  else if (t < u.t - this.offsetTime) p = 0;
                  else {
                    var x;
                    g.__fnct ? x = g.__fnct : (x = BezierFactory.getBezierEasing(u.o.x, u.o.y, u.i.x, u.i.y).get, g.__fnct = x), p = x((t - (u.t - this.offsetTime)) / (d.t - this.offsetTime - (u.t - this.offsetTime)))
                  }
                  s = d.s ? d.s[0] : u.e[0]
                }
                i = u.s[0]
              }
              for (h = e._length, l = i.i[0].length, r.lastIndex = f, n = 0; n < h; n += 1)
                for (o = 0; o < l; o += 1) c = a ? i.i[n][o] : i.i[n][o] + (s.i[n][o] - i.i[n][o]) * p, e.i[n][o] = c, c = a ? i.o[n][o] : i.o[n][o] + (s.o[n][o] - i.o[n][o]) * p, e.o[n][o] = c, c = a ? i.v[n][o] : i.v[n][o] + (s.v[n][o] - i.v[n][o]) * p, e.v[n][o] = c
            }

            function r() {
              var e = this.comp.renderedFrame - this.offsetTime,
                r = this.keyframes[0].t - this.offsetTime,
                i = this.keyframes[this.keyframes.length - 1].t - this.offsetTime,
                s = this._caching.lastFrame;
              return s !== t && (s < r && e < r || s > i && e > i) || (this._caching.lastIndex = s < e ? this._caching.lastIndex : 0, this.interpolateShape(e, this.pv, this._caching)), this._caching.lastFrame = e, this.pv
            }

            function i() {
              this.paths = this.localShapeCollection
            }

            function s(t) {
              (function(t, e) {
                if (t._length !== e._length || t.c !== e.c) return !1;
                var r, i = t._length;
                for (r = 0; r < i; r += 1)
                  if (t.v[r][0] !== e.v[r][0] || t.v[r][1] !== e.v[r][1] || t.o[r][0] !== e.o[r][0] || t.o[r][1] !== e.o[r][1] || t.i[r][0] !== e.i[r][0] || t.i[r][1] !== e.i[r][1]) return !1;
                return !0
              })(this.v, t) || (this.v = shapePool.clone(t), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = !0, this.paths = this.localShapeCollection)
            }

            function a() {
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
              var s = 3 === r ? e.pt.k : e.ks.k;
              this.v = shapePool.clone(s), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = i, this.effectsSequence = []
            }

            function o(t) {
              this.effectsSequence.push(t), this.container.addDynamicProperty(this)
            }

            function h(e, s, a) {
              this.propType = "shape", this.comp = e.comp, this.elem = e, this.container = e, this.offsetTime = e.data.st, this.keyframes = 3 === a ? s.pt.k : s.ks.k, this.keyframesMetadata = [], this.k = !0, this.kf = !0;
              var n = this.keyframes[0].s[0].i.length;
              this.v = shapePool.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, n), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = t, this.reset = i, this._caching = {
                lastFrame: t,
                lastIndex: 0
              }, this.effectsSequence = [r.bind(this)]
            }
            n.prototype.interpolateShape = e, n.prototype.getValue = a, n.prototype.setVValue = s, n.prototype.addEffect = o, h.prototype.getValue = a, h.prototype.interpolateShape = e, h.prototype.setVValue = s, h.prototype.addEffect = o;
            var l = function() {
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
                      s = this.s.v[1] / 2,
                      a = 3 !== this.d,
                      n = this.v;
                    n.v[0][0] = e, n.v[0][1] = r - s, n.v[1][0] = a ? e + i : e - i, n.v[1][1] = r, n.v[2][0] = e, n.v[2][1] = r + s, n.v[3][0] = a ? e - i : e + i, n.v[3][1] = r, n.i[0][0] = a ? e - i * t : e + i * t, n.i[0][1] = r - s, n.i[1][0] = a ? e + i : e - i, n.i[1][1] = r - s * t, n.i[2][0] = a ? e + i * t : e - i * t, n.i[2][1] = r + s, n.i[3][0] = a ? e - i : e + i, n.i[3][1] = r + s * t, n.o[0][0] = a ? e + i * t : e - i * t, n.o[0][1] = r - s, n.o[1][0] = a ? e + i : e - i, n.o[1][1] = r + s * t, n.o[2][0] = a ? e - i * t : e + i * t, n.o[2][1] = r + s, n.o[3][0] = a ? e - i : e + i, n.o[3][1] = r - s * t
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
                    var t, e, r, i, s = 2 * Math.floor(this.pt.v),
                      a = 2 * Math.PI / s,
                      n = !0,
                      o = this.or.v,
                      h = this.ir.v,
                      l = this.os.v,
                      p = this.is.v,
                      c = 2 * Math.PI * o / (2 * s),
                      f = 2 * Math.PI * h / (2 * s),
                      m = -Math.PI / 2;
                    m += this.r.v;
                    var u = 3 === this.data.d ? -1 : 1;
                    for (this.v._length = 0, t = 0; t < s; t += 1) {
                      r = n ? l : p, i = n ? c : f;
                      var d = (e = n ? o : h) * Math.cos(m),
                        g = e * Math.sin(m),
                        y = 0 === d && 0 === g ? 0 : g / Math.sqrt(d * d + g * g),
                        v = 0 === d && 0 === g ? 0 : -d / Math.sqrt(d * d + g * g);
                      d += +this.p.v[0], g += +this.p.v[1], this.v.setTripleAt(d, g, d - y * i * r * u, g - v * i * r * u, d + y * i * r * u, g + v * i * r * u, t, !0), n = !n, m += a * u
                    }
                  },
                  convertPolygonToPath: function() {
                    var t, e = Math.floor(this.pt.v),
                      r = 2 * Math.PI / e,
                      i = this.or.v,
                      s = this.os.v,
                      a = 2 * Math.PI * i / (4 * e),
                      n = .5 * -Math.PI,
                      o = 3 === this.data.d ? -1 : 1;
                    for (n += this.r.v, this.v._length = 0, t = 0; t < e; t += 1) {
                      var h = i * Math.cos(n),
                        l = i * Math.sin(n),
                        p = 0 === h && 0 === l ? 0 : l / Math.sqrt(h * h + l * l),
                        c = 0 === h && 0 === l ? 0 : -h / Math.sqrt(h * h + l * l);
                      h += +this.p.v[0], l += +this.p.v[1], this.v.setTripleAt(h, l, h - p * a * s * o, l - c * a * s * o, h + p * a * s * o, l + c * a * s * o, t, !0), n += r * o
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
                      s = bmMin(r, i, this.r.v),
                      a = s * (1 - roundCorner);
                    this.v._length = 0, 2 === this.d || 1 === this.d ? (this.v.setTripleAt(t + r, e - i + s, t + r, e - i + s, t + r, e - i + a, 0, !0), this.v.setTripleAt(t + r, e + i - s, t + r, e + i - a, t + r, e + i - s, 1, !0), 0 !== s ? (this.v.setTripleAt(t + r - s, e + i, t + r - s, e + i, t + r - a, e + i, 2, !0), this.v.setTripleAt(t - r + s, e + i, t - r + a, e + i, t - r + s, e + i, 3, !0), this.v.setTripleAt(t - r, e + i - s, t - r, e + i - s, t - r, e + i - a, 4, !0), this.v.setTripleAt(t - r, e - i + s, t - r, e - i + a, t - r, e - i + s, 5, !0), this.v.setTripleAt(t - r + s, e - i, t - r + s, e - i, t - r + a, e - i, 6, !0), this.v.setTripleAt(t + r - s, e - i, t + r - a, e - i, t + r - s, e - i, 7, !0)) : (this.v.setTripleAt(t - r, e + i, t - r + a, e + i, t - r, e + i, 2), this.v.setTripleAt(t - r, e - i, t - r, e - i + a, t - r, e - i, 3))) : (this.v.setTripleAt(t + r, e - i + s, t + r, e - i + a, t + r, e - i + s, 0, !0), 0 !== s ? (this.v.setTripleAt(t + r - s, e - i, t + r - s, e - i, t + r - a, e - i, 1, !0), this.v.setTripleAt(t - r + s, e - i, t - r + a, e - i, t - r + s, e - i, 2, !0), this.v.setTripleAt(t - r, e - i + s, t - r, e - i + s, t - r, e - i + a, 3, !0), this.v.setTripleAt(t - r, e + i - s, t - r, e + i - a, t - r, e + i - s, 4, !0), this.v.setTripleAt(t - r + s, e + i, t - r + s, e + i, t - r + a, e + i, 5, !0), this.v.setTripleAt(t + r - s, e + i, t + r - a, e + i, t + r - s, e + i, 6, !0), this.v.setTripleAt(t + r, e + i - s, t + r, e + i - s, t + r, e + i - a, 7, !0)) : (this.v.setTripleAt(t - r, e - i, t - r + a, e - i, t - r, e - i, 1, !0), this.v.setTripleAt(t - r, e + i, t - r, e + i - a, t - r, e + i, 2, !0), this.v.setTripleAt(t + r, e + i, t + r - a, e + i, t + r, e + i, 3, !0)))
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
                return 3 === r || 4 === r ? i = (3 === r ? e.pt : e.ks).k.length ? new h(t, e, r) : new n(t, e, r) : 5 === r ? i = new c(t, e) : 6 === r ? i = new l(t, e) : 7 === r && (i = new p(t, e)), i.k && t.addDynamicProperty(i), i
              },
              getConstructorFunction: function() {
                return n
              },
              getKeyframedConstructorFunction: function() {
                return h
              }
            }
          }(),
          Matrix = function() {
            var t = Math.cos,
              e = Math.sin,
              r = Math.tan,
              i = Math.round;

            function s() {
              return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this
            }

            function a(r) {
              if (0 === r) return this;
              var i = t(r),
                s = e(r);
              return this._t(i, -s, 0, 0, s, i, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
            }

            function n(r) {
              if (0 === r) return this;
              var i = t(r),
                s = e(r);
              return this._t(1, 0, 0, 0, 0, i, -s, 0, 0, s, i, 0, 0, 0, 0, 1)
            }

            function o(r) {
              if (0 === r) return this;
              var i = t(r),
                s = e(r);
              return this._t(i, 0, s, 0, 0, 1, 0, 0, -s, 0, i, 0, 0, 0, 0, 1)
            }

            function h(r) {
              if (0 === r) return this;
              var i = t(r),
                s = e(r);
              return this._t(i, -s, 0, 0, s, i, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
            }

            function l(t, e) {
              return this._t(1, e, t, 1, 0, 0)
            }

            function p(t, e) {
              return this.shear(r(t), r(e))
            }

            function c(i, s) {
              var a = t(s),
                n = e(s);
              return this._t(a, n, 0, 0, -n, a, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, r(i), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(a, -n, 0, 0, n, a, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
            }

            function f(t, e, r) {
              return r || 0 === r || (r = 1), 1 === t && 1 === e && 1 === r ? this : this._t(t, 0, 0, 0, 0, e, 0, 0, 0, 0, r, 0, 0, 0, 0, 1)
            }

            function m(t, e, r, i, s, a, n, o, h, l, p, c, f, m, u, d) {
              return this.props[0] = t, this.props[1] = e, this.props[2] = r, this.props[3] = i, this.props[4] = s, this.props[5] = a, this.props[6] = n, this.props[7] = o, this.props[8] = h, this.props[9] = l, this.props[10] = p, this.props[11] = c, this.props[12] = f, this.props[13] = m, this.props[14] = u, this.props[15] = d, this
            }

            function u(t, e, r) {
              return r = r || 0, 0 !== t || 0 !== e || 0 !== r ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, r, 1) : this
            }

            function d(t, e, r, i, s, a, n, o, h, l, p, c, f, m, u, d) {
              var g = this.props;
              if (1 === t && 0 === e && 0 === r && 0 === i && 0 === s && 1 === a && 0 === n && 0 === o && 0 === h && 0 === l && 1 === p && 0 === c) return g[12] = g[12] * t + g[15] * f, g[13] = g[13] * a + g[15] * m, g[14] = g[14] * p + g[15] * u, g[15] *= d, this._identityCalculated = !1, this;
              var y = g[0],
                v = g[1],
                b = g[2],
                x = g[3],
                E = g[4],
                S = g[5],
                P = g[6],
                T = g[7],
                _ = g[8],
                C = g[9],
                A = g[10],
                M = g[11],
                w = g[12],
                k = g[13],
                D = g[14],
                F = g[15];
              return g[0] = y * t + v * s + b * h + x * f, g[1] = y * e + v * a + b * l + x * m, g[2] = y * r + v * n + b * p + x * u, g[3] = y * i + v * o + b * c + x * d, g[4] = E * t + S * s + P * h + T * f, g[5] = E * e + S * a + P * l + T * m, g[6] = E * r + S * n + P * p + T * u, g[7] = E * i + S * o + P * c + T * d, g[8] = _ * t + C * s + A * h + M * f, g[9] = _ * e + C * a + A * l + M * m, g[10] = _ * r + C * n + A * p + M * u, g[11] = _ * i + C * o + A * c + M * d, g[12] = w * t + k * s + D * h + F * f, g[13] = w * e + k * a + D * l + F * m, g[14] = w * r + k * n + D * p + F * u, g[15] = w * i + k * o + D * c + F * d, this._identityCalculated = !1, this
            }

            function g(t) {
              var e = t.props;
              return this.transform(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15])
            }

            function y() {
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

            function E(t, e, r) {
              return {
                x: t * this.props[0] + e * this.props[4] + r * this.props[8] + this.props[12],
                y: t * this.props[1] + e * this.props[5] + r * this.props[9] + this.props[13],
                z: t * this.props[2] + e * this.props[6] + r * this.props[10] + this.props[14]
              }
            }

            function S(t, e, r) {
              return t * this.props[0] + e * this.props[4] + r * this.props[8] + this.props[12]
            }

            function P(t, e, r) {
              return t * this.props[1] + e * this.props[5] + r * this.props[9] + this.props[13]
            }

            function T(t, e, r) {
              return t * this.props[2] + e * this.props[6] + r * this.props[10] + this.props[14]
            }

            function _() {
              var t = this.props[0] * this.props[5] - this.props[1] * this.props[4],
                e = this.props[5] / t,
                r = -this.props[1] / t,
                i = -this.props[4] / t,
                s = this.props[0] / t,
                a = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / t,
                n = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / t,
                o = new Matrix;
              return o.props[0] = e, o.props[1] = r, o.props[4] = i, o.props[5] = s, o.props[12] = a, o.props[13] = n, o
            }

            function C(t) {
              return this.getInverseMatrix().applyToPointArray(t[0], t[1], t[2] || 0)
            }

            function A(t) {
              var e, r = t.length,
                i = [];
              for (e = 0; e < r; e += 1) i[e] = C(t[e]);
              return i
            }

            function M(t, e, r) {
              var i = createTypedArray("float32", 6);
              if (this.isIdentity()) i[0] = t[0], i[1] = t[1], i[2] = e[0], i[3] = e[1], i[4] = r[0], i[5] = r[1];
              else {
                var s = this.props[0],
                  a = this.props[1],
                  n = this.props[4],
                  o = this.props[5],
                  h = this.props[12],
                  l = this.props[13];
                i[0] = t[0] * s + t[1] * n + h, i[1] = t[0] * a + t[1] * o + l, i[2] = e[0] * s + e[1] * n + h, i[3] = e[0] * a + e[1] * o + l, i[4] = r[0] * s + r[1] * n + h, i[5] = r[0] * a + r[1] * o + l
              }
              return i
            }

            function w(t, e, r) {
              return this.isIdentity() ? [t, e, r] : [t * this.props[0] + e * this.props[4] + r * this.props[8] + this.props[12], t * this.props[1] + e * this.props[5] + r * this.props[9] + this.props[13], t * this.props[2] + e * this.props[6] + r * this.props[10] + this.props[14]]
            }

            function k(t, e) {
              if (this.isIdentity()) return t + "," + e;
              var r = this.props;
              return Math.round(100 * (t * r[0] + e * r[4] + r[12])) / 100 + "," + Math.round(100 * (t * r[1] + e * r[5] + r[13])) / 100
            }

            function D() {
              for (var t = 0, e = this.props, r = "matrix3d("; t < 16;) r += i(1e4 * e[t]) / 1e4, r += 15 === t ? ")" : ",", t += 1;
              return r
            }

            function F(t) {
              return t < 1e-6 && t > 0 || t > -1e-6 && t < 0 ? i(1e4 * t) / 1e4 : t
            }

            function I() {
              var t = this.props;
              return "matrix(" + F(t[0]) + "," + F(t[1]) + "," + F(t[4]) + "," + F(t[5]) + "," + F(t[12]) + "," + F(t[13]) + ")"
            }
            return function() {
              this.reset = s, this.rotate = a, this.rotateX = n, this.rotateY = o, this.rotateZ = h, this.skew = p, this.skewFromAxis = c, this.shear = l, this.scale = f, this.setTransform = m, this.translate = u, this.transform = d, this.multiply = g, this.applyToPoint = E, this.applyToX = S, this.applyToY = P, this.applyToZ = T, this.applyToPointArray = w, this.applyToTriplePoints = M, this.applyToPointStringified = k, this.toCSS = D, this.to2dCSS = I, this.clone = b, this.cloneFromProps = x, this.equals = v, this.inversePoints = A, this.inversePoint = C, this.getInverseMatrix = _, this._t = this.transform, this.isIdentity = y, this._identity = !0, this._identityCalculated = !1, this.props = createTypedArray("float32", 16), this.reset()
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
        }, TrimModifier.prototype.calculateShapeEdges = function(t, e, r, i, s) {
          var a = [];
          e <= 1 ? a.push({
            s: t,
            e
          }) : t >= 1 ? a.push({
            s: t - 1,
            e: e - 1
          }) : (a.push({
            s: t,
            e: 1
          }), a.push({
            s: 0,
            e: e - 1
          }));
          var n, o, h = [],
            l = a.length;
          for (n = 0; n < l; n += 1) {
            var p, c;
            (o = a[n]).e * s < i || o.s * s > i + r || (p = o.s * s <= i ? 0 : (o.s * s - i) / r, c = o.e * s >= i + r ? 1 : (o.e * s - i) / r, h.push([p, c]))
          }
          return h.length || h.push([0, 0]), h
        }, TrimModifier.prototype.releasePathsData = function(t) {
          var e, r = t.length;
          for (e = 0; e < r; e += 1) segmentsLengthPool.release(t[e]);
          return t.length = 0, t
        }, TrimModifier.prototype.processShapes = function(t) {
          var e, r, i, s;
          if (this._mdf || t) {
            var a = this.o.v % 360 / 360;
            if (a < 0 && (a += 1), (e = this.s.v > 1 ? 1 + a : this.s.v < 0 ? 0 + a : this.s.v + a) > (r = this.e.v > 1 ? 1 + a : this.e.v < 0 ? 0 + a : this.e.v + a)) {
              var n = e;
              e = r, r = n
            }
            e = 1e-4 * Math.round(1e4 * e), r = 1e-4 * Math.round(1e4 * r), this.sValue = e, this.eValue = r
          } else e = this.sValue, r = this.eValue;
          var o, h, l, p, c, f = this.shapes.length,
            m = 0;
          if (r === e)
            for (s = 0; s < f; s += 1) this.shapes[s].localShapeCollection.releaseShapes(), this.shapes[s].shape._mdf = !0, this.shapes[s].shape.paths = this.shapes[s].localShapeCollection, this._mdf && (this.shapes[s].pathsData.length = 0);
          else if (1 === r && 0 === e || 0 === r && 1 === e) {
            if (this._mdf)
              for (s = 0; s < f; s += 1) this.shapes[s].pathsData.length = 0, this.shapes[s].shape._mdf = !0
          } else {
            var u, d, g = [];
            for (s = 0; s < f; s += 1)
              if ((u = this.shapes[s]).shape._mdf || this._mdf || t || 2 === this.m) {
                if (h = (i = u.shape.paths)._length, c = 0, !u.shape._mdf && u.pathsData.length) c = u.totalShapeLength;
                else {
                  for (l = this.releasePathsData(u.pathsData), o = 0; o < h; o += 1) p = bez.getSegmentsLength(i.shapes[o]), l.push(p), c += p.totalLength;
                  u.totalShapeLength = c, u.pathsData = l
                }
                m += c, u.shape._mdf = !0
              } else u.shape.paths = u.localShapeCollection;
            var y, v = e,
              b = r,
              x = 0;
            for (s = f - 1; s >= 0; s -= 1)
              if ((u = this.shapes[s]).shape._mdf) {
                for ((d = u.localShapeCollection).releaseShapes(), 2 === this.m && f > 1 ? (y = this.calculateShapeEdges(e, r, u.totalShapeLength, x, m), x += u.totalShapeLength) : y = [
                    [v, b]
                  ], h = y.length, o = 0; o < h; o += 1) {
                  v = y[o][0], b = y[o][1], g.length = 0, b <= 1 ? g.push({
                    s: u.totalShapeLength * v,
                    e: u.totalShapeLength * b
                  }) : v >= 1 ? g.push({
                    s: u.totalShapeLength * (v - 1),
                    e: u.totalShapeLength * (b - 1)
                  }) : (g.push({
                    s: u.totalShapeLength * v,
                    e: u.totalShapeLength
                  }), g.push({
                    s: 0,
                    e: u.totalShapeLength * (b - 1)
                  }));
                  var E = this.addShapes(u, g[0]);
                  if (g[0].s !== g[0].e) {
                    if (g.length > 1)
                      if (u.shape.paths.shapes[u.shape.paths._length - 1].c) {
                        var S = E.pop();
                        this.addPaths(E, d), E = this.addShapes(u, g[1], S)
                      } else this.addPaths(E, d), E = this.addShapes(u, g[1]);
                    this.addPaths(E, d)
                  }
                }
                u.shape.paths = d
              }
          }
        }, TrimModifier.prototype.addPaths = function(t, e) {
          var r, i = t.length;
          for (r = 0; r < i; r += 1) e.addShape(t[r])
        }, TrimModifier.prototype.addSegment = function(t, e, r, i, s, a, n) {
          s.setXYAt(e[0], e[1], "o", a), s.setXYAt(r[0], r[1], "i", a + 1), n && s.setXYAt(t[0], t[1], "v", a), s.setXYAt(i[0], i[1], "v", a + 1)
        }, TrimModifier.prototype.addSegmentFromArray = function(t, e, r, i) {
          e.setXYAt(t[1], t[5], "o", r), e.setXYAt(t[2], t[6], "i", r + 1), i && e.setXYAt(t[0], t[4], "v", r), e.setXYAt(t[3], t[7], "v", r + 1)
        }, TrimModifier.prototype.addShapes = function(t, e, r) {
          var i, s, a, n, o, h, l, p, c = t.pathsData,
            f = t.shape.paths.shapes,
            m = t.shape.paths._length,
            u = 0,
            d = [],
            g = !0;
          for (r ? (o = r._length, p = r._length) : (r = shapePool.newElement(), o = 0, p = 0), d.push(r), i = 0; i < m; i += 1) {
            for (h = c[i].lengths, r.c = f[i].c, a = f[i].c ? h.length : h.length + 1, s = 1; s < a; s += 1)
              if (u + (n = h[s - 1]).addedLength < e.s) u += n.addedLength, r.c = !1;
              else {
                if (u > e.e) {
                  r.c = !1;
                  break
                }
                e.s <= u && e.e >= u + n.addedLength ? (this.addSegment(f[i].v[s - 1], f[i].o[s - 1], f[i].i[s], f[i].v[s], r, o, g), g = !1) : (l = bez.getNewSegment(f[i].v[s - 1], f[i].v[s], f[i].o[s - 1], f[i].i[s], (e.s - u) / n.addedLength, (e.e - u) / n.addedLength, h[s - 1]), this.addSegmentFromArray(l, r, o, g), g = !1, r.c = !1), u += n.addedLength, o += 1
              } if (f[i].c && h.length) {
              if (n = h[s - 1], u <= e.e) {
                var y = h[s - 1].addedLength;
                e.s <= u && e.e >= u + y ? (this.addSegment(f[i].v[s - 1], f[i].o[s - 1], f[i].i[0], f[i].v[0], r, o, g), g = !1) : (l = bez.getNewSegment(f[i].v[s - 1], f[i].v[0], f[i].o[s - 1], f[i].i[0], (e.s - u) / y, (e.e - u) / y, h[s - 1]), this.addSegmentFromArray(l, r, o, g), g = !1, r.c = !1)
              } else r.c = !1;
              u += n.addedLength, o += 1
            }
            if (r._length && (r.setXYAt(r.v[p][0], r.v[p][1], "i", p), r.setXYAt(r.v[r._length - 1][0], r.v[r._length - 1][1], "o", r._length - 1)), u > e.e) break;
            i < m - 1 && (r = shapePool.newElement(), g = !0, d.push(r), o = 0)
          }
          return d
        }, extendPrototype([ShapeModifier], PuckerAndBloatModifier), PuckerAndBloatModifier.prototype.initModifierProperties = function(t, e) {
          this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(t, e.a, 0, null, this), this._isAnimated = !!this.amount.effectsSequence.length
        }, PuckerAndBloatModifier.prototype.processPath = function(t, e) {
          var r = e / 100,
            i = [0, 0],
            s = t._length,
            a = 0;
          for (a = 0; a < s; a += 1) i[0] += t.v[a][0], i[1] += t.v[a][1];
          i[0] /= s, i[1] /= s;
          var n, o, h, l, p, c, f = shapePool.newElement();
          for (f.c = t.c, a = 0; a < s; a += 1) n = t.v[a][0] + (i[0] - t.v[a][0]) * r, o = t.v[a][1] + (i[1] - t.v[a][1]) * r, h = t.o[a][0] + (i[0] - t.o[a][0]) * -r, l = t.o[a][1] + (i[1] - t.o[a][1]) * -r, p = t.i[a][0] + (i[0] - t.i[a][0]) * -r, c = t.i[a][1] + (i[1] - t.i[a][1]) * -r, f.setTripleAt(n, o, h, l, p, c, a);
          return f
        }, PuckerAndBloatModifier.prototype.processShapes = function(t) {
          var e, r, i, s, a, n, o = this.shapes.length,
            h = this.amount.v;
          if (0 !== h)
            for (r = 0; r < o; r += 1) {
              if (n = (a = this.shapes[r]).localShapeCollection, a.shape._mdf || this._mdf || t)
                for (n.releaseShapes(), a.shape._mdf = !0, e = a.shape.paths.shapes, s = a.shape.paths._length, i = 0; i < s; i += 1) n.addShape(this.processPath(e[i], h));
              a.shape.paths = a.localShapeCollection
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
                var i, s = e.or.k.length;
                for (i = 0; i < s; i += 1) e.or.k[i].to = null, e.or.k[i].ti = null
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
                    var i, s;
                    if (r = this.elem.globalData.frameRate, this.p && this.p.keyframes && this.p.getValueAtTime) this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (i = this.p.getValueAtTime((this.p.keyframes[0].t + .01) / r, 0), s = this.p.getValueAtTime(this.p.keyframes[0].t / r, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (i = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / r, 0), s = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - .05) / r, 0)) : (i = this.p.pv, s = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - .01) / r, this.p.offsetTime));
                    else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                      i = [], s = [];
                      var a = this.px,
                        n = this.py;
                      a._caching.lastFrame + a.offsetTime <= a.keyframes[0].t ? (i[0] = a.getValueAtTime((a.keyframes[0].t + .01) / r, 0), i[1] = n.getValueAtTime((n.keyframes[0].t + .01) / r, 0), s[0] = a.getValueAtTime(a.keyframes[0].t / r, 0), s[1] = n.getValueAtTime(n.keyframes[0].t / r, 0)) : a._caching.lastFrame + a.offsetTime >= a.keyframes[a.keyframes.length - 1].t ? (i[0] = a.getValueAtTime(a.keyframes[a.keyframes.length - 1].t / r, 0), i[1] = n.getValueAtTime(n.keyframes[n.keyframes.length - 1].t / r, 0), s[0] = a.getValueAtTime((a.keyframes[a.keyframes.length - 1].t - .01) / r, 0), s[1] = n.getValueAtTime((n.keyframes[n.keyframes.length - 1].t - .01) / r, 0)) : (i = [a.pv, n.pv], s[0] = a.getValueAtTime((a._caching.lastFrame + a.offsetTime - .01) / r, a.offsetTime), s[1] = n.getValueAtTime((n._caching.lastFrame + n.offsetTime - .01) / r, n.offsetTime))
                    } else i = s = t;
                    this.v.rotate(-Math.atan2(i[1] - s[1], i[0] - s[0]))
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
          var s = -e / (2 * t);
          if (0 === i) return [s];
          var a = Math.sqrt(i) / (2 * t);
          return [s - a, s + a]
        }

        function polynomialCoefficients(t, e, r, i) {
          return [3 * e - t - 3 * r + i, 3 * t - 6 * e + 3 * r, -3 * t + 3 * e, t]
        }

        function singlePoint(t) {
          return new PolynomialBezier(t, t, t, t, !1)
        }

        function PolynomialBezier(t, e, r, i, s) {
          s && pointEqual(t, e) && (e = lerpPoint(t, i, 1 / 3)), s && pointEqual(r, i) && (r = lerpPoint(t, i, 2 / 3));
          var a = polynomialCoefficients(t[0], e[0], r[0], i[0]),
            n = polynomialCoefficients(t[1], e[1], r[1], i[1]);
          this.a = [a[0], n[0]], this.b = [a[1], n[1]], this.c = [a[2], n[2]], this.d = [a[3], n[3]], this.points = [t, e, r, i]
        }

        function extrema(t, e) {
          var r = t.points[0][e],
            i = t.points[t.points.length - 1][e];
          if (r > i) {
            var s = i;
            i = r, r = s
          }
          for (var a = quadRoots(3 * t.a[e], 2 * t.b[e], t.c[e]), n = 0; n < a.length; n += 1)
            if (a[n] > 0 && a[n] < 1) {
              var o = t.point(a[n])[e];
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

        function intersectsImpl(t, e, r, i, s, a) {
          if (boxIntersect(t, e))
            if (r >= a || t.width <= i && t.height <= i && e.width <= i && e.height <= i) s.push([t.t, e.t]);
            else {
              var n = splitData(t),
                o = splitData(e);
              intersectsImpl(n[0], o[0], r + 1, i, s, a), intersectsImpl(n[0], o[1], r + 1, i, s, a), intersectsImpl(n[1], o[0], r + 1, i, s, a), intersectsImpl(n[1], o[1], r + 1, i, s, a)
            }
        }

        function crossProduct(t, e) {
          return [t[1] * e[2] - t[2] * e[1], t[2] * e[0] - t[0] * e[2], t[0] * e[1] - t[1] * e[0]]
        }

        function lineIntersection(t, e, r, i) {
          var s = [t[0], t[1], 1],
            a = [e[0], e[1], 1],
            n = [r[0], r[1], 1],
            o = [i[0], i[1], 1],
            h = crossProduct(crossProduct(s, a), crossProduct(n, o));
          return floatZero(h[2]) ? null : [h[0] / h[2], h[1] / h[2]]
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

        function setPoint(t, e, r, i, s, a, n) {
          var o = r - Math.PI / 2,
            h = r + Math.PI / 2,
            l = e[0] + Math.cos(r) * i * s,
            p = e[1] - Math.sin(r) * i * s;
          t.setTripleAt(l, p, l + Math.cos(o) * a, p - Math.sin(o) * a, l + Math.cos(h) * n, p - Math.sin(h) * n, t.length())
        }

        function getPerpendicularVector(t, e) {
          var r = [e[0] - t[0], e[1] - t[1]],
            i = .5 * -Math.PI;
          return [Math.cos(i) * r[0] - Math.sin(i) * r[1], Math.sin(i) * r[0] + Math.cos(i) * r[1]]
        }

        function getProjectingAngle(t, e) {
          var r = 0 === e ? t.length() - 1 : e - 1,
            i = (e + 1) % t.length(),
            s = getPerpendicularVector(t.v[r], t.v[i]);
          return Math.atan2(0, 1) - Math.atan2(s[1], s[0])
        }

        function zigZagCorner(t, e, r, i, s, a, n) {
          var o = getProjectingAngle(e, r),
            h = e.v[r % e._length],
            l = e.v[0 === r ? e._length - 1 : r - 1],
            p = e.v[(r + 1) % e._length],
            c = 2 === a ? Math.sqrt(Math.pow(h[0] - l[0], 2) + Math.pow(h[1] - l[1], 2)) : 0,
            f = 2 === a ? Math.sqrt(Math.pow(h[0] - p[0], 2) + Math.pow(h[1] - p[1], 2)) : 0;
          setPoint(t, e.v[r % e._length], o, n, i, f / (2 * (s + 1)), c / (2 * (s + 1)), a)
        }

        function zigZagSegment(t, e, r, i, s, a) {
          for (var n = 0; n < i; n += 1) {
            var o = (n + 1) / (i + 1),
              h = 2 === s ? Math.sqrt(Math.pow(e.points[3][0] - e.points[0][0], 2) + Math.pow(e.points[3][1] - e.points[0][1], 2)) : 0,
              l = e.normalAngle(o);
            setPoint(t, e.point(o), l, a, r, h / (2 * (i + 1)), h / (2 * (i + 1)), s), a = -a
          }
          return a
        }

        function linearOffset(t, e, r) {
          var i = Math.atan2(e[0] - t[0], e[1] - t[1]);
          return [polarOffset(t, i, r), polarOffset(e, i, r)]
        }

        function offsetSegment(t, e) {
          var r, i, s, a, n, o, h;
          r = (h = linearOffset(t.points[0], t.points[1], e))[0], i = h[1], s = (h = linearOffset(t.points[1], t.points[2], e))[0], a = h[1], n = (h = linearOffset(t.points[2], t.points[3], e))[0], o = h[1];
          var l = lineIntersection(r, i, s, a);
          null === l && (l = i);
          var p = lineIntersection(n, o, s, a);
          return null === p && (p = n), new PolynomialBezier(r, l, p, o)
        }

        function joinLines(t, e, r, i, s) {
          var a = e.points[3],
            n = r.points[0];
          if (3 === i) return a;
          if (pointEqual(a, n)) return a;
          if (2 === i) {
            var o = -e.tangentAngle(1),
              h = -r.tangentAngle(0) + Math.PI,
              l = lineIntersection(a, polarOffset(a, o + Math.PI / 2, 100), n, polarOffset(n, o + Math.PI / 2, 100)),
              p = l ? pointDistance(l, a) : pointDistance(a, n) / 2,
              c = polarOffset(a, o, 2 * p * roundCorner);
            return t.setXYAt(c[0], c[1], "o", t.length() - 1), c = polarOffset(n, h, 2 * p * roundCorner), t.setTripleAt(n[0], n[1], n[0], n[1], c[0], c[1], t.length()), n
          }
          var f = lineIntersection(pointEqual(a, e.points[2]) ? e.points[0] : e.points[2], a, n, pointEqual(n, r.points[1]) ? r.points[3] : r.points[1]);
          return f && pointDistance(f, a) < s ? (t.setTripleAt(f[0], f[1], f[0], f[1], f[0], f[1], t.length()), f) : a
        }

        function getIntersection(t, e) {
          var r = t.intersections(e);
          return r.length && floatEqual(r[0][0], 1) && r.shift(), r.length ? r[0] : null
        }

        function pruneSegmentIntersection(t, e) {
          var r = t.slice(),
            i = e.slice(),
            s = getIntersection(t[t.length - 1], e[0]);
          return s && (r[t.length - 1] = t[t.length - 1].split(s[0])[0], i[0] = e[0].split(s[1])[1]), t.length > 1 && e.length > 1 && (s = getIntersection(t[0], e[e.length - 1])) ? [
            [t[0].split(s[0])[0]],
            [e[e.length - 1].split(s[1])[1]]
          ] : [r, i]
        }

        function pruneIntersections(t) {
          for (var e, r = 1; r < t.length; r += 1) e = pruneSegmentIntersection(t[r - 1], t[r]), t[r - 1] = e[0], t[r] = e[1];
          return t.length > 1 && (e = pruneSegmentIntersection(t[t.length - 1], t[0]), t[t.length - 1] = e[0], t[0] = e[1]), t
        }

        function offsetSegmentSplit(t, e) {
          var r, i, s, a, n = t.inflectionPoints();
          if (0 === n.length) return [offsetSegment(t, e)];
          if (1 === n.length || floatEqual(n[1], 1)) return r = (s = t.split(n[0]))[0], i = s[1], [offsetSegment(r, e), offsetSegment(i, e)];
          r = (s = t.split(n[0]))[0];
          var o = (n[1] - n[0]) / (1 - n[0]);
          return a = (s = s[1].split(o))[0], i = s[1], [offsetSegment(r, e), offsetSegment(a, e), offsetSegment(i, e)]
        }

        function OffsetPathModifier() {}

        function getFontProperties(t) {
          for (var e = t.fStyle ? t.fStyle.split(" ") : [], r = "normal", i = "normal", s = e.length, a = 0; a < s; a += 1) switch (e[a].toLowerCase()) {
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
        }, RepeaterModifier.prototype.applyTransforms = function(t, e, r, i, s, a) {
          var n = a ? -1 : 1,
            o = i.s.v[0] + (1 - i.s.v[0]) * (1 - s),
            h = i.s.v[1] + (1 - i.s.v[1]) * (1 - s);
          t.translate(i.p.v[0] * n * s, i.p.v[1] * n * s, i.p.v[2]), e.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]), e.rotate(-i.r.v * n * s), e.translate(i.a.v[0], i.a.v[1], i.a.v[2]), r.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]), r.scale(a ? 1 / o : o, a ? 1 / h : h), r.translate(i.a.v[0], i.a.v[1], i.a.v[2])
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
          var e, r, i, s, a, n = !1;
          if (this._mdf || t) {
            var o, h = Math.ceil(this.c.v);
            if (this._groups.length < h) {
              for (; this._groups.length < h;) {
                var l = {
                  it: this.cloneElements(this._elements),
                  ty: "gr"
                };
                l.it.push({
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
                }), this.arr.splice(0, 0, l), this._groups.splice(0, 0, l), this._currentCopies += 1
              }
              this.elem.reloadShapes(), n = !0
            }
            for (a = 0, i = 0; i <= this._groups.length - 1; i += 1) {
              if (o = a < h, this._groups[i]._render = o, this.changeGroupRender(this._groups[i].it, o), !o) {
                var p = this.elemsData[i].it,
                  c = p[p.length - 1];
                0 !== c.transform.op.v ? (c.transform.op._mdf = !0, c.transform.op.v = 0) : c.transform.op._mdf = !1
              }
              a += 1
            }
            this._currentCopies = h;
            var f = this.o.v,
              m = f % 1,
              u = f > 0 ? Math.floor(f) : Math.ceil(f),
              d = this.pMatrix.props,
              g = this.rMatrix.props,
              y = this.sMatrix.props;
            this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
            var v, b, x = 0;
            if (f > 0) {
              for (; x < u;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), x += 1;
              m && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, m, !1), x += m)
            } else if (f < 0) {
              for (; x > u;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), x -= 1;
              m && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -m, !0), x -= m)
            }
            for (i = 1 === this.data.m ? 0 : this._currentCopies - 1, s = 1 === this.data.m ? 1 : -1, a = this._currentCopies; a;) {
              if (b = (r = (e = this.elemsData[i].it)[e.length - 1].transform.mProps.v.props).length, e[e.length - 1].transform.mProps._mdf = !0, e[e.length - 1].transform.op._mdf = !0, e[e.length - 1].transform.op.v = 1 === this._currentCopies ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (i / (this._currentCopies - 1)), 0 !== x) {
                for ((0 !== i && 1 === s || i !== this._currentCopies - 1 && -1 === s) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(g[0], g[1], g[2], g[3], g[4], g[5], g[6], g[7], g[8], g[9], g[10], g[11], g[12], g[13], g[14], g[15]), this.matrix.transform(y[0], y[1], y[2], y[3], y[4], y[5], y[6], y[7], y[8], y[9], y[10], y[11], y[12], y[13], y[14], y[15]), this.matrix.transform(d[0], d[1], d[2], d[3], d[4], d[5], d[6], d[7], d[8], d[9], d[10], d[11], d[12], d[13], d[14], d[15]), v = 0; v < b; v += 1) r[v] = this.matrix.props[v];
                this.matrix.reset()
              } else
                for (this.matrix.reset(), v = 0; v < b; v += 1) r[v] = this.matrix.props[v];
              x += 1, a -= 1, i += s
            }
          } else
            for (a = this._currentCopies, i = 0, s = 1; a;) r = (e = this.elemsData[i].it)[e.length - 1].transform.mProps.v.props, e[e.length - 1].transform.mProps._mdf = !1, e[e.length - 1].transform.op._mdf = !1, a -= 1, i += s;
          return n
        }, RepeaterModifier.prototype.addShape = function() {}, extendPrototype([ShapeModifier], RoundCornersModifier), RoundCornersModifier.prototype.initModifierProperties = function(t, e) {
          this.getValue = this.processKeys, this.rd = PropertyFactory.getProp(t, e.r, 0, null, this), this._isAnimated = !!this.rd.effectsSequence.length
        }, RoundCornersModifier.prototype.processPath = function(t, e) {
          var r, i = shapePool.newElement();
          i.c = t.c;
          var s, a, n, o, h, l, p, c, f, m, u, d, g = t._length,
            y = 0;
          for (r = 0; r < g; r += 1) s = t.v[r], n = t.o[r], a = t.i[r], s[0] === n[0] && s[1] === n[1] && s[0] === a[0] && s[1] === a[1] ? 0 !== r && r !== g - 1 || t.c ? (o = 0 === r ? t.v[g - 1] : t.v[r - 1], l = (h = Math.sqrt(Math.pow(s[0] - o[0], 2) + Math.pow(s[1] - o[1], 2))) ? Math.min(h / 2, e) / h : 0, p = u = s[0] + (o[0] - s[0]) * l, c = d = s[1] - (s[1] - o[1]) * l, f = p - (p - s[0]) * roundCorner, m = c - (c - s[1]) * roundCorner, i.setTripleAt(p, c, f, m, u, d, y), y += 1, o = r === g - 1 ? t.v[0] : t.v[r + 1], l = (h = Math.sqrt(Math.pow(s[0] - o[0], 2) + Math.pow(s[1] - o[1], 2))) ? Math.min(h / 2, e) / h : 0, p = f = s[0] + (o[0] - s[0]) * l, c = m = s[1] + (o[1] - s[1]) * l, u = p - (p - s[0]) * roundCorner, d = c - (c - s[1]) * roundCorner, i.setTripleAt(p, c, f, m, u, d, y), y += 1) : (i.setTripleAt(s[0], s[1], n[0], n[1], a[0], a[1], y), y += 1) : (i.setTripleAt(t.v[r][0], t.v[r][1], t.o[r][0], t.o[r][1], t.i[r][0], t.i[r][1], y), y += 1);
          return i
        }, RoundCornersModifier.prototype.processShapes = function(t) {
          var e, r, i, s, a, n, o = this.shapes.length,
            h = this.rd.v;
          if (0 !== h)
            for (r = 0; r < o; r += 1) {
              if (n = (a = this.shapes[r]).localShapeCollection, a.shape._mdf || this._mdf || t)
                for (n.releaseShapes(), a.shape._mdf = !0, e = a.shape.paths.shapes, s = a.shape.paths._length, i = 0; i < s; i += 1) n.addShape(this.processPath(e[i], h));
              a.shape.paths = a.localShapeCollection
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
            s = lerpPoint(e, r, t),
            a = lerpPoint(r, i, t),
            n = lerpPoint(s, a, t);
          return [new PolynomialBezier(this.points[0], e, s, n, !0), new PolynomialBezier(n, a, i, this.points[3], !0)]
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
          var s = t._length,
            a = shapePool.newElement();
          if (a.c = t.c, t.c || (s -= 1), 0 === s) return a;
          var n = -1,
            o = PolynomialBezier.shapeSegment(t, 0);
          zigZagCorner(a, t, 0, e, r, i, n);
          for (var h = 0; h < s; h += 1) n = zigZagSegment(a, o, e, r, i, -n), o = h !== s - 1 || t.c ? PolynomialBezier.shapeSegment(t, (h + 1) % s) : null, zigZagCorner(a, t, h + 1, e, r, i, n);
          return a
        }, ZigZagModifier.prototype.processShapes = function(t) {
          var e, r, i, s, a, n, o = this.shapes.length,
            h = this.amplitude.v,
            l = Math.max(0, Math.round(this.frequency.v)),
            p = this.pointsType.v;
          if (0 !== h)
            for (r = 0; r < o; r += 1) {
              if (n = (a = this.shapes[r]).localShapeCollection, a.shape._mdf || this._mdf || t)
                for (n.releaseShapes(), a.shape._mdf = !0, e = a.shape.paths.shapes, s = a.shape.paths._length, i = 0; i < s; i += 1) n.addShape(this.processPath(e[i], h, l, p));
              a.shape.paths = a.localShapeCollection
            }
          this.dynamicProperties.length || (this._mdf = !1)
        }, extendPrototype([ShapeModifier], OffsetPathModifier), OffsetPathModifier.prototype.initModifierProperties = function(t, e) {
          this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(t, e.a, 0, null, this), this.miterLimit = PropertyFactory.getProp(t, e.ml, 0, null, this), this.lineJoin = e.lj, this._isAnimated = 0 !== this.amount.effectsSequence.length
        }, OffsetPathModifier.prototype.processPath = function(t, e, r, i) {
          var s = shapePool.newElement();
          s.c = t.c;
          var a, n, o, h = t.length();
          t.c || (h -= 1);
          var l = [];
          for (a = 0; a < h; a += 1) o = PolynomialBezier.shapeSegment(t, a), l.push(offsetSegmentSplit(o, e));
          if (!t.c)
            for (a = h - 1; a >= 0; a -= 1) o = PolynomialBezier.shapeSegmentInverted(t, a), l.push(offsetSegmentSplit(o, e));
          l = pruneIntersections(l);
          var p = null,
            c = null;
          for (a = 0; a < l.length; a += 1) {
            var f = l[a];
            for (c && (p = joinLines(s, c, f[0], r, i)), c = f[f.length - 1], n = 0; n < f.length; n += 1) o = f[n], p && pointEqual(o.points[0], p) ? s.setXYAt(o.points[1][0], o.points[1][1], "o", s.length() - 1) : s.setTripleAt(o.points[0][0], o.points[0][1], o.points[1][0], o.points[1][1], o.points[0][0], o.points[0][1], s.length()), s.setTripleAt(o.points[3][0], o.points[3][1], o.points[3][0], o.points[3][1], o.points[2][0], o.points[2][1], s.length()), p = o.points[3]
          }
          return l.length && joinLines(s, c, l[0][0], r, i), s
        }, OffsetPathModifier.prototype.processShapes = function(t) {
          var e, r, i, s, a, n, o = this.shapes.length,
            h = this.amount.v,
            l = this.miterLimit.v,
            p = this.lineJoin;
          if (0 !== h)
            for (r = 0; r < o; r += 1) {
              if (n = (a = this.shapes[r]).localShapeCollection, a.shape._mdf || this._mdf || t)
                for (n.releaseShapes(), a.shape._mdf = !0, e = a.shape.paths.shapes, s = a.shape.paths._length, i = 0; i < s; i += 1) n.addShape(this.processPath(e[i], h, p, l));
              a.shape.paths = a.localShapeCollection
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

          function s(t, e) {
            var r = createTag("span");
            r.setAttribute("aria-hidden", !0), r.style.fontFamily = e;
            var i = createTag("span");
            i.innerText = "giItT1WQy@!-/#", r.style.position = "absolute", r.style.left = "-10000px", r.style.top = "-10000px", r.style.fontSize = "300px", r.style.fontVariant = "normal", r.style.fontStyle = "normal", r.style.fontWeight = "normal", r.style.letterSpacing = "0", r.appendChild(i), document.body.appendChild(r);
            var s = i.offsetWidth;
            return i.style.fontFamily = function(t) {
              var e, r = t.split(","),
                i = r.length,
                s = [];
              for (e = 0; e < i; e += 1) "sans-serif" !== r[e] && "monospace" !== r[e] && s.push(r[e]);
              return s.join(",")
            }(t) + ", " + e, {
              node: i,
              w: s,
              parent: r
            }
          }

          function a(t, e) {
            var r, i = document.body && e ? "svg" : "canvas",
              s = getFontProperties(t);
            if ("svg" === i) {
              var a = createNS("text");
              a.style.fontSize = "100px", a.setAttribute("font-family", t.fFamily), a.setAttribute("font-style", s.style), a.setAttribute("font-weight", s.weight), a.textContent = "1", t.fClass ? (a.style.fontFamily = "inherit", a.setAttribute("class", t.fClass)) : a.style.fontFamily = t.fFamily, e.appendChild(a), r = a
            } else {
              var n = new OffscreenCanvas(500, 500).getContext("2d");
              n.font = s.style + " " + s.weight + " 100px " + t.fFamily, r = n
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
          var h = function() {
            this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = !1, this._warned = !1, this.initTime = Date.now(), this.setIsLoadedBinded = this.setIsLoaded.bind(this), this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this)
          };
          h.isModifier = function(t, e) {
            var r = t.toString(16) + e.toString(16);
            return -1 !== i.indexOf(r)
          }, h.isZeroWidthJoiner = function(t) {
            return 8205 === t
          }, h.isFlagEmoji = function(t) {
            return o(t.substr(0, 2)) && o(t.substr(2, 2))
          }, h.isRegionalCode = o, h.isCombinedCharacter = function(t) {
            return -1 !== e.indexOf(t)
          }, h.isRegionalFlag = function(t, e) {
            var i = n(t.substr(e, 2));
            if (i !== r) return !1;
            var s = 0;
            for (e += 2; s < 5;) {
              if ((i = n(t.substr(e, 2))) < 917601 || i > 917626) return !1;
              s += 1, e += 2
            }
            return 917631 === n(t.substr(e, 2))
          }, h.isVariationSelector = function(t) {
            return 65039 === t
          }, h.BLACK_FLAG_CODE_POINT = r;
          var l = {
            addChars: function(t) {
              if (t) {
                var e;
                this.chars || (this.chars = []);
                var r, i, s = t.length,
                  a = this.chars.length;
                for (e = 0; e < s; e += 1) {
                  for (r = 0, i = !1; r < a;) this.chars[r].style === t[e].style && this.chars[r].fFamily === t[e].fFamily && this.chars[r].ch === t[e].ch && (i = !0), r += 1;
                  i || (this.chars.push(t[e]), a += 1)
                }
              }
            },
            addFonts: function(t, e) {
              if (t) {
                if (this.chars) return this.isLoaded = !0, void(this.fonts = t.list);
                if (!document.body) return this.isLoaded = !0, t.list.forEach((function(t) {
                  t.helper = a(t), t.cache = {}
                })), void(this.fonts = t.list);
                var r, i = t.list,
                  n = i.length,
                  o = n;
                for (r = 0; r < n; r += 1) {
                  var h, l, p = !0;
                  if (i[r].loaded = !1, i[r].monoCase = s(i[r].fFamily, "monospace"), i[r].sansCase = s(i[r].fFamily, "sans-serif"), i[r].fPath) {
                    if ("p" === i[r].fOrigin || 3 === i[r].origin) {
                      if ((h = document.querySelectorAll('style[f-forigin="p"][f-family="' + i[r].fFamily + '"], style[f-origin="3"][f-family="' + i[r].fFamily + '"]')).length > 0 && (p = !1), p) {
                        var c = createTag("style");
                        c.setAttribute("f-forigin", i[r].fOrigin), c.setAttribute("f-origin", i[r].origin), c.setAttribute("f-family", i[r].fFamily), c.type = "text/css", c.innerText = "@font-face {font-family: " + i[r].fFamily + "; font-style: normal; src: url('" + i[r].fPath + "');}", e.appendChild(c)
                      }
                    } else if ("g" === i[r].fOrigin || 1 === i[r].origin) {
                      for (h = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), l = 0; l < h.length; l += 1) - 1 !== h[l].href.indexOf(i[r].fPath) && (p = !1);
                      if (p) {
                        var f = createTag("link");
                        f.setAttribute("f-forigin", i[r].fOrigin), f.setAttribute("f-origin", i[r].origin), f.type = "text/css", f.rel = "stylesheet", f.href = i[r].fPath, document.body.appendChild(f)
                      }
                    } else if ("t" === i[r].fOrigin || 2 === i[r].origin) {
                      for (h = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), l = 0; l < h.length; l += 1) i[r].fPath === h[l].src && (p = !1);
                      if (p) {
                        var m = createTag("link");
                        m.setAttribute("f-forigin", i[r].fOrigin), m.setAttribute("f-origin", i[r].origin), m.setAttribute("rel", "stylesheet"), m.setAttribute("href", i[r].fPath), e.appendChild(m)
                      }
                    }
                  } else i[r].loaded = !0, o -= 1;
                  i[r].helper = a(i[r], e), i[r].cache = {}, this.fonts.push(i[r])
                }
                0 === o ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100)
              } else this.isLoaded = !0
            },
            getCharData: function(e, r, i) {
              for (var s = 0, a = this.chars.length; s < a;) {
                if (this.chars[s].ch === e && this.chars[s].style === r && this.chars[s].fFamily === i) return this.chars[s];
                s += 1
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
                s = t;
              if (!i.cache[s]) {
                var a = i.helper;
                if (" " === t) {
                  var n = a.measureText("|" + t + "|"),
                    o = a.measureText("||");
                  i.cache[s] = (n - o) / 100
                } else i.cache[s] = a.measureText(t) / 100
              }
              return i.cache[s] * r
            },
            checkLoadedFonts: function() {
              var t, e, r, i = this.fonts.length,
                s = i;
              for (t = 0; t < i; t += 1) this.fonts[t].loaded ? s -= 1 : "n" === this.fonts[t].fOrigin || 0 === this.fonts[t].origin ? this.fonts[t].loaded = !0 : (e = this.fonts[t].monoCase.node, r = this.fonts[t].monoCase.w, e.offsetWidth !== r ? (s -= 1, this.fonts[t].loaded = !0) : (e = this.fonts[t].sansCase.node, r = this.fonts[t].sansCase.w, e.offsetWidth !== r && (s -= 1, this.fonts[t].loaded = !0)), this.fonts[t].loaded && (this.fonts[t].sansCase.parent.parentNode.removeChild(this.fonts[t].sansCase.parent), this.fonts[t].monoCase.parent.parentNode.removeChild(this.fonts[t].monoCase.parent)));
              0 !== s && Date.now() - this.initTime < 5e3 ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10)
            },
            setIsLoaded: function() {
              this.isLoaded = !0
            }
          };
          return h.prototype = l, h
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
          var s, a = i.length;
          for (r = 0; r < a; r += 1) s = new GroupEffect(i[r], e), this.effectElements.push(s)
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
          var i, s = this.data.ef.length,
            a = this.data.ef;
          for (r = 0; r < s; r += 1) {
            switch (i = null, a[r].ty) {
              case 0:
                i = new SliderEffect(a[r], e, this);
                break;
              case 1:
                i = new AngleEffect(a[r], e, this);
                break;
              case 2:
                i = new ColorEffect(a[r], e, this);
                break;
              case 3:
                i = new PointEffect(a[r], e, this);
                break;
              case 4:
              case 7:
                i = new CheckboxEffect(a[r], e, this);
                break;
              case 10:
                i = new LayerIndexEffect(a[r], e, this);
                break;
              case 11:
                i = new MaskIndexEffect(a[r], e, this);
                break;
              case 5:
                i = new EffectsManager(a[r], e, this);
                break;
              default:
                i = new NoValueEffect(a[r], e, this)
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
                s = t("text"),
                a = t("comp");
              this.layerInterface = e(this), this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
              var n = r.createEffectsInterface(this, this.layerInterface);
              this.layerInterface.registerEffectsInterface(n), 0 === this.data.ty || this.data.xt ? this.compInterface = a(this) : 4 === this.data.ty ? (this.layerInterface.shapeInterface = i(this.shapesData, this.itemsData, this.layerInterface), this.layerInterface.content = this.layerInterface.shapeInterface) : 5 === this.data.ty && (this.layerInterface.textInterface = s(this), this.layerInterface.text = this.layerInterface.textInterface)
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
            s = this.layers.length;
          for (e = 0; e < i; e += 1)
            for (r = 0; r < s;) {
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
          for (var i = this.elements, s = this.layers, a = 0, n = s.length; a < n;) s[a].ind == e && (i[a] && !0 !== i[a] ? (r.push(i[a]), i[a].setAsParent(), void 0 !== s[a].parent ? this.buildElementParenting(t, s[a].parent, r) : t.setHierarchy(r)) : (this.buildItem(a), this.addPendingElement(t))), a += 1
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
            var i, s = this.elements.length;
            for (i = 0; i < s; i += 1)
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
          var i, s, a = this.globalData.defs,
            n = this.masksProperties ? this.masksProperties.length : 0;
          this.viewData = createSizedArray(n), this.solidPath = "";
          var o, h, l, p, c, f, m = this.masksProperties,
            u = 0,
            d = [],
            g = createElementID(),
            y = "clipPath",
            v = "clip-path";
          for (i = 0; i < n; i += 1)
            if (("a" !== m[i].mode && "n" !== m[i].mode || m[i].inv || 100 !== m[i].o.k || m[i].o.x) && (y = "mask", v = "mask"), "s" !== m[i].mode && "i" !== m[i].mode || 0 !== u ? l = null : ((l = createNS("rect")).setAttribute("fill", "#ffffff"), l.setAttribute("width", this.element.comp.data.w || 0), l.setAttribute("height", this.element.comp.data.h || 0), d.push(l)), s = createNS("path"), "n" === m[i].mode) this.viewData[i] = {
              op: PropertyFactory.getProp(this.element, m[i].o, 0, .01, this.element),
              prop: ShapePropertyFactory.getShapeProp(this.element, m[i], 3),
              elem: s,
              lastPath: ""
            }, a.appendChild(s);
            else {
              var b;
              if (u += 1, s.setAttribute("fill", "s" === m[i].mode ? "#000000" : "#ffffff"), s.setAttribute("clip-rule", "nonzero"), 0 !== m[i].x.k ? (y = "mask", v = "mask", f = PropertyFactory.getProp(this.element, m[i].x, 0, null, this.element), b = createElementID(), (p = createNS("filter")).setAttribute("id", b), (c = createNS("feMorphology")).setAttribute("operator", "erode"), c.setAttribute("in", "SourceGraphic"), c.setAttribute("radius", "0"), p.appendChild(c), a.appendChild(p), s.setAttribute("stroke", "s" === m[i].mode ? "#000000" : "#ffffff")) : (c = null, f = null), this.storedData[i] = {
                  elem: s,
                  x: f,
                  expan: c,
                  lastPath: "",
                  lastOperator: "",
                  filterId: b,
                  lastRadius: 0
                }, "i" === m[i].mode) {
                h = d.length;
                var x = createNS("g");
                for (o = 0; o < h; o += 1) x.appendChild(d[o]);
                var E = createNS("mask");
                E.setAttribute("mask-type", "alpha"), E.setAttribute("id", g + "_" + u), E.appendChild(s), a.appendChild(E), x.setAttribute("mask", "url(" + getLocationHref() + "#" + g + "_" + u + ")"), d.length = 0, d.push(x)
              } else d.push(s);
              m[i].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[i] = {
                elem: s,
                lastPath: "",
                op: PropertyFactory.getProp(this.element, m[i].o, 0, .01, this.element),
                prop: ShapePropertyFactory.getShapeProp(this.element, m[i], 3),
                invRect: l
              }, this.viewData[i].prop.k || this.drawPath(m[i], this.viewData[i].prop.v, this.viewData[i])
            } for (this.maskElement = createNS(y), n = d.length, i = 0; i < n; i += 1) this.maskElement.appendChild(d[i]);
          u > 0 && (this.maskElement.setAttribute("id", g), this.element.maskedElement.setAttribute(v, "url(" + getLocationHref() + "#" + g + ")"), a.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this)
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
                var s = this.finalTransform.localOpacity;
                for (t = 0; t < e; t += 1) s *= .01 * this.localTransforms[t].opacity;
                this.finalTransform.localOpacity = s
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
            for (var r, i = !0, s = this.comp; i;) s.finalTransform ? (s.data.hasMask && e.splice(0, 0, s.finalTransform), s = s.comp) : i = !1;
            var a, n = e.length;
            for (r = 0; r < n; r += 1) a = e[r].mat.applyToPointArray(0, 0, 0), t = [t[0] - a[0], t[1] - a[1], 0];
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
              var s = this.storedData[e].expan;
              this.storedData[e].x.v < 0 ? ("erode" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "erode", this.storedData[e].elem.setAttribute("filter", "url(" + getLocationHref() + "#" + this.storedData[e].filterId + ")")), s.setAttribute("radius", -this.storedData[e].x.v)) : ("dilate" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "dilate", this.storedData[e].elem.setAttribute("filter", null)), this.storedData[e].elem.setAttribute("stroke-width", 2 * this.storedData[e].x.v))
            }
        }, MaskElement.prototype.getMaskelement = function() {
          return this.maskElement
        }, MaskElement.prototype.createLayerSolidPath = function() {
          var t = "M0,0 ";
          return t += " h" + this.globalData.compSize.w, t += " v" + this.globalData.compSize.h, (t += " h-" + this.globalData.compSize.w) + " v-" + this.globalData.compSize.h + " "
        }, MaskElement.prototype.drawPath = function(t, e, r) {
          var i, s, a = " M" + e.v[0][0] + "," + e.v[0][1];
          for (s = e._length, i = 1; i < s; i += 1) a += " C" + e.o[i - 1][0] + "," + e.o[i - 1][1] + " " + e.i[i][0] + "," + e.i[i][1] + " " + e.v[i][0] + "," + e.v[i][1];
          if (e.c && s > 1 && (a += " C" + e.o[i - 1][0] + "," + e.o[i - 1][1] + " " + e.i[0][0] + "," + e.i[0][1] + " " + e.v[0][0] + "," + e.v[0][1]), r.lastPath !== a) {
            var n = "";
            r.elem && (e.c && (n = t.inv ? this.solidPath + a : a), r.elem.setAttribute("d", n)), r.lastPath = a
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
            s = t.data.ef ? t.data.ef.length : 0,
            a = createElementID(),
            n = filtersFactory.createFilter(a, !0),
            o = 0;
          for (this.filters = [], e = 0; e < s; e += 1) {
            r = null;
            var h = t.data.ef[e].ty;
            registeredEffects$1[h] && (r = new(0, registeredEffects$1[h].effect)(n, t.effectsManager.effectElements[e], t, idPrefix + o, i), i = idPrefix + o, registeredEffects$1[h].countsAsEffect && (o += 1)), r && this.filters.push(r)
          }
          o && (t.globalData.defs.appendChild(n), t.layerElement.setAttribute("filter", "url(" + getLocationHref() + "#" + a + ")")), this.filters.length && t.addRenderableComponent(this)
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
              var s = createElementID();
              if (r.setAttribute("id", s), r.appendChild(i), this.globalData.defs.appendChild(r), this.checkMasks()) {
                var a = createNS("g");
                a.setAttribute("clip-path", "url(" + getLocationHref() + "#" + s + ")"), a.appendChild(this.layerElement), this.transformedElement = a, t ? t.appendChild(this.transformedElement) : this.baseElement = this.transformedElement
              } else this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + s + ")")
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
              var e, r, i, s, a = this.layerId + "_" + t;
              if (1 === t || 3 === t) {
                var n = createNS("mask");
                n.setAttribute("id", a), n.setAttribute("mask-type", 3 === t ? "luminance" : "alpha"), (i = createNS("use")).setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), n.appendChild(i), this.globalData.defs.appendChild(n), featureSupport.maskType || 1 !== t || (n.setAttribute("mask-type", "luminance"), e = createElementID(), r = filtersFactory.createFilter(e), this.globalData.defs.appendChild(r), r.appendChild(filtersFactory.createAlphaToLuminanceFilter()), (s = createNS("g")).appendChild(i), n.appendChild(s), s.setAttribute("filter", "url(" + getLocationHref() + "#" + e + ")"))
              } else if (2 === t) {
                var o = createNS("mask");
                o.setAttribute("id", a), o.setAttribute("mask-type", "alpha");
                var h = createNS("g");
                o.appendChild(h), e = createElementID(), r = filtersFactory.createFilter(e);
                var l = createNS("feComponentTransfer");
                l.setAttribute("in", "SourceGraphic"), r.appendChild(l);
                var p = createNS("feFuncA");
                p.setAttribute("type", "table"), p.setAttribute("tableValues", "1.0 0.0"), l.appendChild(p), this.globalData.defs.appendChild(r);
                var c = createNS("rect");
                c.setAttribute("width", this.comp.data.w), c.setAttribute("height", this.comp.data.h), c.setAttribute("x", "0"), c.setAttribute("y", "0"), c.setAttribute("fill", "#ffffff"), c.setAttribute("opacity", "0"), h.setAttribute("filter", "url(" + getLocationHref() + "#" + e + ")"), h.appendChild(c), (i = createNS("use")).setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), h.appendChild(i), featureSupport.maskType || (o.setAttribute("mask-type", "luminance"), r.appendChild(filtersFactory.createAlphaToLuminanceFilter()), s = createNS("g"), h.appendChild(c), s.appendChild(this.layerElement), h.appendChild(s)), this.globalData.defs.appendChild(o)
              }
              this.matteMasks[t] = a
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
          for (var i = 0, s = t.length; i < s;) {
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
          var s;
          this.elem = t, this.frameId = -1, this.dataProps = createSizedArray(e.length), this.renderer = r, this.k = !1, this.dashStr = "", this.dashArray = createTypedArray("float32", e.length ? e.length - 1 : 0), this.dashoffset = createTypedArray("float32", 1), this.initDynamicPropertyContainer(i);
          var a, n = e.length || 0;
          for (s = 0; s < n; s += 1) a = PropertyFactory.getProp(t, e[s].v, 0, 0, this), this.k = a.k || this.k, this.dataProps[s] = {
            n: e[s].n,
            p: a
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
            var e, r, i, s = 4 * this.data.p;
            for (e = 0; e < s; e += 1) r = e % 4 == 0 ? 100 : 255, i = Math.round(this.prop.v[e] * r), this.c[e] !== i && (this.c[e] = i, this._cmdf = !t);
            if (this.o.length)
              for (s = this.prop.v.length, e = 4 * this.data.p; e < s; e += 1) r = e % 2 == 0 ? 100 : 1, i = e % 2 == 0 ? Math.round(100 * this.prop.v[e]) : this.prop.v[e], this.o[e - 4 * this.data.p] !== i && (this.o[e - 4 * this.data.p] = i, this._omdf = !t);
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
          var s, a, n, o = [];
          for (n = 4 * e.g.p, a = 0; a < n; a += 4) s = createNS("stop"), i.appendChild(s), o.push(s);
          t.setAttribute("gf" === e.ty ? "fill" : "stroke", "url(" + getLocationHref() + "#" + r + ")"), this.gf = i, this.cst = o
        }, SVGGradientFillStyleData.prototype.setGradientOpacity = function(t, e) {
          if (this.g._hasOpacity && !this.g._collapsable) {
            var r, i, s, a = createNS("mask"),
              n = createNS("path");
            a.appendChild(n);
            var o = createElementID(),
              h = createElementID();
            a.setAttribute("id", h);
            var l = createNS(1 === t.t ? "linearGradient" : "radialGradient");
            l.setAttribute("id", o), l.setAttribute("spreadMethod", "pad"), l.setAttribute("gradientUnits", "userSpaceOnUse"), s = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length;
            var p = this.stops;
            for (i = 4 * t.g.p; i < s; i += 2)(r = createNS("stop")).setAttribute("stop-color", "rgb(255,255,255)"), l.appendChild(r), p.push(r);
            n.setAttribute("gf" === t.ty ? "fill" : "stroke", "url(" + getLocationHref() + "#" + o + ")"), "gs" === t.ty && (n.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]), n.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]), 1 === t.lj && n.setAttribute("stroke-miterlimit", t.ml)), this.of = l, this.ms = a, this.ost = p, this.maskId = h, e.msElem = n
          }
        }, extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData), extendPrototype([SVGGradientFillStyleData, DynamicPropertyContainer], SVGGradientStrokeStyleData);
        var buildShapeString = function(t, e, r, i) {
            if (0 === e) return "";
            var s, a = t.o,
              n = t.i,
              o = t.v,
              h = " M" + i.applyToPointStringified(o[0][0], o[0][1]);
            for (s = 1; s < e; s += 1) h += " C" + i.applyToPointStringified(a[s - 1][0], a[s - 1][1]) + " " + i.applyToPointStringified(n[s][0], n[s][1]) + " " + i.applyToPointStringified(o[s][0], o[s][1]);
            return r && e && (h += " C" + i.applyToPointStringified(a[s - 1][0], a[s - 1][1]) + " " + i.applyToPointStringified(n[0][0], n[0][1]) + " " + i.applyToPointStringified(o[0][0], o[0][1]), h += "z"), h
          },
          SVGElementsRenderer = function() {
            var t = new Matrix,
              e = new Matrix;

            function r(t, e, r) {
              (r || e.transform.op._mdf) && e.transform.container.setAttribute("opacity", e.transform.op.v), (r || e.transform.mProps._mdf) && e.transform.container.setAttribute("transform", e.transform.mProps.v.to2dCSS())
            }

            function i() {}

            function s(r, i, s) {
              var a, n, o, h, l, p, c, f, m, u, d = i.styles.length,
                g = i.lvl;
              for (p = 0; p < d; p += 1) {
                if (h = i.sh._mdf || s, i.styles[p].lvl < g) {
                  for (f = e.reset(), m = g - i.styles[p].lvl, u = i.transformers.length - 1; !h && m > 0;) h = i.transformers[u].mProps._mdf || h, m -= 1, u -= 1;
                  if (h)
                    for (m = g - i.styles[p].lvl, u = i.transformers.length - 1; m > 0;) f.multiply(i.transformers[u].mProps.v), m -= 1, u -= 1
                } else f = t;
                if (n = (c = i.sh.paths)._length, h) {
                  for (o = "", a = 0; a < n; a += 1)(l = c.shapes[a]) && l._length && (o += buildShapeString(l, l._length, l.c, f));
                  i.caches[p] = o
                } else o = i.caches[p];
                i.styles[p].d += !0 === r.hd ? "" : o, i.styles[p]._mdf = h || i.styles[p]._mdf
              }
            }

            function a(t, e, r) {
              var i = e.style;
              (e.c._mdf || r) && i.pElem.setAttribute("fill", "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || r) && i.pElem.setAttribute("fill-opacity", e.o.v)
            }

            function n(t, e, r) {
              o(t, e, r), h(0, e, r)
            }

            function o(t, e, r) {
              var i, s, a, n, o, h = e.gf,
                l = e.g._hasOpacity,
                p = e.s.v,
                c = e.e.v;
              if (e.o._mdf || r) {
                var f = "gf" === t.ty ? "fill-opacity" : "stroke-opacity";
                e.style.pElem.setAttribute(f, e.o.v)
              }
              if (e.s._mdf || r) {
                var m = 1 === t.t ? "x1" : "cx",
                  u = "x1" === m ? "y1" : "cy";
                h.setAttribute(m, p[0]), h.setAttribute(u, p[1]), l && !e.g._collapsable && (e.of.setAttribute(m, p[0]), e.of.setAttribute(u, p[1]))
              }
              if (e.g._cmdf || r) {
                i = e.cst;
                var d = e.g.c;
                for (a = i.length, s = 0; s < a; s += 1)(n = i[s]).setAttribute("offset", d[4 * s] + "%"), n.setAttribute("stop-color", "rgb(" + d[4 * s + 1] + "," + d[4 * s + 2] + "," + d[4 * s + 3] + ")")
              }
              if (l && (e.g._omdf || r)) {
                var g = e.g.o;
                for (a = (i = e.g._collapsable ? e.cst : e.ost).length, s = 0; s < a; s += 1) n = i[s], e.g._collapsable || n.setAttribute("offset", g[2 * s] + "%"), n.setAttribute("stop-opacity", g[2 * s + 1])
              }
              if (1 === t.t)(e.e._mdf || r) && (h.setAttribute("x2", c[0]), h.setAttribute("y2", c[1]), l && !e.g._collapsable && (e.of.setAttribute("x2", c[0]), e.of.setAttribute("y2", c[1])));
              else if ((e.s._mdf || e.e._mdf || r) && (o = Math.sqrt(Math.pow(p[0] - c[0], 2) + Math.pow(p[1] - c[1], 2)), h.setAttribute("r", o), l && !e.g._collapsable && e.of.setAttribute("r", o)), e.e._mdf || e.h._mdf || e.a._mdf || r) {
                o || (o = Math.sqrt(Math.pow(p[0] - c[0], 2) + Math.pow(p[1] - c[1], 2)));
                var y = Math.atan2(c[1] - p[1], c[0] - p[0]),
                  v = e.h.v;
                v >= 1 ? v = .99 : v <= -1 && (v = -.99);
                var b = o * v,
                  x = Math.cos(y + e.a.v) * b + p[0],
                  E = Math.sin(y + e.a.v) * b + p[1];
                h.setAttribute("fx", x), h.setAttribute("fy", E), l && !e.g._collapsable && (e.of.setAttribute("fx", x), e.of.setAttribute("fy", E))
              }
            }

            function h(t, e, r) {
              var i = e.style,
                s = e.d;
              s && (s._mdf || r) && s.dashStr && (i.pElem.setAttribute("stroke-dasharray", s.dashStr), i.pElem.setAttribute("stroke-dashoffset", s.dashoffset[0])), e.c && (e.c._mdf || r) && i.pElem.setAttribute("stroke", "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || r) && i.pElem.setAttribute("stroke-opacity", e.o.v), (e.w._mdf || r) && (i.pElem.setAttribute("stroke-width", e.w.v), i.msElem && i.msElem.setAttribute("stroke-width", e.w.v))
            }
            return {
              createRenderFunction: function(t) {
                switch (t.ty) {
                  case "fl":
                    return a;
                  case "gf":
                    return o;
                  case "gs":
                    return n;
                  case "st":
                    return h;
                  case "sh":
                  case "el":
                  case "rc":
                  case "sr":
                    return s;
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

        function LetterProps(t, e, r, i, s, a) {
          this.o = t, this.sw = e, this.sc = r, this.fc = i, this.m = s, this.p = a, this._mdf = {
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
          var t, e, r, i, s = this.shapes.length,
            a = this.stylesList.length,
            n = [],
            o = !1;
          for (r = 0; r < a; r += 1) {
            for (i = this.stylesList[r], o = !1, n.length = 0, t = 0; t < s; t += 1) - 1 !== (e = this.shapes[t]).styles.indexOf(i) && (n.push(e), o = e._isAnimated || o);
            n.length > 1 && o && this.setShapesAsAnimated(n)
          }
        }, SVGShapeElement.prototype.setShapesAsAnimated = function(t) {
          var e, r = t.length;
          for (e = 0; e < r; e += 1) t[e].setAsAnimated()
        }, SVGShapeElement.prototype.createStyleElement = function(t, e) {
          var r, i = new SVGStyleData(t, e),
            s = i.pElem;
          return "st" === t.ty ? r = new SVGStrokeStyleData(this, t, i) : "fl" === t.ty ? r = new SVGFillStyleData(this, t, i) : "gf" === t.ty || "gs" === t.ty ? (r = new("gf" === t.ty ? SVGGradientFillStyleData : SVGGradientStrokeStyleData)(this, t, i), this.globalData.defs.appendChild(r.gf), r.maskId && (this.globalData.defs.appendChild(r.ms), this.globalData.defs.appendChild(r.of), s.setAttribute("mask", "url(" + getLocationHref() + "#" + r.maskId + ")"))) : "no" === t.ty && (r = new SVGNoStyleData(this, t, i)), "st" !== t.ty && "gs" !== t.ty || (s.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]), s.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]), s.setAttribute("fill-opacity", "0"), 1 === t.lj && s.setAttribute("stroke-miterlimit", t.ml)), 2 === t.r && s.setAttribute("fill-rule", "evenodd"), t.ln && s.setAttribute("id", t.ln), t.cl && s.setAttribute("class", t.cl), t.bm && (s.style["mix-blend-mode"] = getBlendMode(t.bm)), this.stylesList.push(i), this.addToAnimatedContents(t, r), r
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
          var s = new SVGShapeData(e, r, ShapePropertyFactory.getShapeProp(this, t, i, this));
          return this.shapes.push(s), this.addShapeToModifiers(s), this.addToAnimatedContents(t, s), s
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
        }, SVGShapeElement.prototype.searchShapes = function(t, e, r, i, s, a, n) {
          var o, h, l, p, c, f, m = [].concat(a),
            u = t.length - 1,
            d = [],
            g = [];
          for (o = u; o >= 0; o -= 1) {
            if ((f = this.searchProcessedElement(t[o])) ? e[o] = r[f - 1] : t[o]._render = n, "fl" === t[o].ty || "st" === t[o].ty || "gf" === t[o].ty || "gs" === t[o].ty || "no" === t[o].ty) f ? e[o].style.closed = !1 : e[o] = this.createStyleElement(t[o], s), t[o]._render && e[o].style.pElem.parentNode !== i && i.appendChild(e[o].style.pElem), d.push(e[o].style);
            else if ("gr" === t[o].ty) {
              if (f)
                for (l = e[o].it.length, h = 0; h < l; h += 1) e[o].prevViewData[h] = e[o].it[h];
              else e[o] = this.createGroupElement(t[o]);
              this.searchShapes(t[o].it, e[o].it, e[o].prevViewData, e[o].gr, s + 1, m, n), t[o]._render && e[o].gr.parentNode !== i && i.appendChild(e[o].gr)
            } else "tr" === t[o].ty ? (f || (e[o] = this.createTransformElement(t[o], i)), p = e[o].transform, m.push(p)) : "sh" === t[o].ty || "rc" === t[o].ty || "el" === t[o].ty || "sr" === t[o].ty ? (f || (e[o] = this.createShapeElement(t[o], m, s)), this.setElementStyles(e[o])) : "tm" === t[o].ty || "rd" === t[o].ty || "ms" === t[o].ty || "pb" === t[o].ty || "zz" === t[o].ty || "op" === t[o].ty ? (f ? (c = e[o]).closed = !1 : ((c = ShapeModifiers.getModifier(t[o].ty)).init(this, t[o]), e[o] = c, this.shapeModifiers.push(c)), g.push(c)) : "rp" === t[o].ty && (f ? (c = e[o]).closed = !0 : (c = ShapeModifiers.getModifier(t[o].ty), e[o] = c, c.init(this, t, o, e), this.shapeModifiers.push(c), n = !1), g.push(c));
            this.addProcessedElement(t[o], o + 1)
          }
          for (u = d.length, o = 0; o < u; o += 1) d[o].closed = !0;
          for (u = g.length, o = 0; o < u; o += 1) g[o].closed = !0
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
        }, LetterProps.prototype.update = function(t, e, r, i, s, a) {
          this._mdf.o = !1, this._mdf.sw = !1, this._mdf.sc = !1, this._mdf.fc = !1, this._mdf.m = !1, this._mdf.p = !1;
          var n = !1;
          return this.o !== t && (this.o = t, this._mdf.o = !0, n = !0), this.sw !== e && (this.sw = e, this._mdf.sw = !0, n = !0), this.sc !== r && (this.sc = r, this._mdf.sc = !0, n = !0), this.fc !== i && (this.fc = i, this._mdf.fc = !0, n = !0), this.m !== s && (this.m = s, this._mdf.m = !0, n = !0), !a.length || this.p[0] === a[0] && this.p[1] === a[1] && this.p[4] === a[4] && this.p[5] === a[5] && this.p[12] === a[12] && this.p[13] === a[13] || (this.p = a, this._mdf.p = !0, n = !0), n
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
              var s = this.effectsSequence.length,
                a = t || this.data.d.k[this.keysIndex].s;
              for (i = 0; i < s; i += 1) a = r !== this.keysIndex ? this.effectsSequence[i](a, a.t) : this.effectsSequence[i](this.currentData, a.t);
              e !== a && this.setCurrentData(a), this.v = this.currentData, this.pv = this.v, this.lock = !1, this.frameId = this.elem.globalData.frameId
            }
          }
        }, TextProperty.prototype.getKeyframeValue = function() {
          for (var t = this.data.d.k, e = this.elem.comp.renderedFrame, r = 0, i = t.length; r <= i - 1 && !(r === i - 1 || t[r + 1].t > e);) r += 1;
          return this.keysIndex !== r && (this.keysIndex = r), this.data.d.k[this.keysIndex].s
        }, TextProperty.prototype.buildFinalText = function(t) {
          for (var e, r, i = [], s = 0, a = t.length, n = !1, o = !1, h = ""; s < a;) n = o, o = !1, e = t.charCodeAt(s), h = t.charAt(s), FontManager.isCombinedCharacter(e) ? n = !0 : e >= 55296 && e <= 56319 ? FontManager.isRegionalFlag(t, s) ? h = t.substr(s, 14) : (r = t.charCodeAt(s + 1)) >= 56320 && r <= 57343 && (FontManager.isModifier(e, r) ? (h = t.substr(s, 2), n = !0) : h = FontManager.isFlagEmoji(t.substr(s, 4)) ? t.substr(s, 4) : t.substr(s, 2)) : e > 56319 ? (r = t.charCodeAt(s + 1), FontManager.isVariationSelector(e) && (n = !0)) : FontManager.isZeroWidthJoiner(e) && (n = !0, o = !0), n ? (i[i.length - 1] += h, n = !1) : i.push(h), s += h.length;
          return i
        }, TextProperty.prototype.completeTextData = function(t) {
          t.__complete = !0;
          var e, r, i, s, a, n, o, h = this.elem.globalData.fontManager,
            l = this.data,
            p = [],
            c = 0,
            f = l.m.g,
            m = 0,
            u = 0,
            d = 0,
            g = [],
            y = 0,
            v = 0,
            b = h.getFontByName(t.f),
            x = 0,
            E = getFontProperties(b);
          t.fWeight = E.weight, t.fStyle = E.style, t.finalSize = t.s, t.finalText = this.buildFinalText(t.t), r = t.finalText.length, t.finalLineHeight = t.lh;
          var S, P = t.tr / 1e3 * t.finalSize;
          if (t.sz)
            for (var T, _, C = !0, A = t.sz[0], M = t.sz[1]; C;) {
              T = 0, y = 0, r = (_ = this.buildFinalText(t.t)).length, P = t.tr / 1e3 * t.finalSize;
              var w = -1;
              for (e = 0; e < r; e += 1) S = _[e].charCodeAt(0), i = !1, " " === _[e] ? w = e : 13 !== S && 3 !== S || (y = 0, i = !0, T += t.finalLineHeight || 1.2 * t.finalSize), h.chars ? (o = h.getCharData(_[e], b.fStyle, b.fFamily), x = i ? 0 : o.w * t.finalSize / 100) : x = h.measureText(_[e], t.f, t.finalSize), y + x > A && " " !== _[e] ? (-1 === w ? r += 1 : e = w, T += t.finalLineHeight || 1.2 * t.finalSize, _.splice(e, w === e ? 1 : 0, "\r"), w = -1, y = 0) : (y += x, y += P);
              T += b.ascent * t.finalSize / 100, this.canResize && t.finalSize > this.minimumFontSize && M < T ? (t.finalSize -= 1, t.finalLineHeight = t.finalSize * t.lh / t.s) : (t.finalText = _, r = t.finalText.length, C = !1)
            }
          y = -P, x = 0;
          var k, D = 0;
          for (e = 0; e < r; e += 1)
            if (i = !1, 13 === (S = (k = t.finalText[e]).charCodeAt(0)) || 3 === S ? (D = 0, g.push(y), v = y > v ? y : v, y = -2 * P, s = "", i = !0, d += 1) : s = k, h.chars ? (o = h.getCharData(k, b.fStyle, h.getFontByName(t.f).fFamily), x = i ? 0 : o.w * t.finalSize / 100) : x = h.measureText(s, t.f, t.finalSize), " " === k ? D += x + P : (y += x + P + D, D = 0), p.push({
                l: x,
                an: x,
                add: m,
                n: i,
                anIndexes: [],
                val: s,
                line: d,
                animatorJustifyOffset: 0
              }), 2 == f) {
              if (m += x, "" === s || " " === s || e === r - 1) {
                for ("" !== s && " " !== s || (m -= x); u <= e;) p[u].an = m, p[u].ind = c, p[u].extra = x, u += 1;
                c += 1, m = 0
              }
            } else if (3 == f) {
            if (m += x, "" === s || e === r - 1) {
              for ("" === s && (m -= x); u <= e;) p[u].an = m, p[u].ind = c, p[u].extra = x, u += 1;
              m = 0, c += 1
            }
          } else p[c].ind = c, p[c].extra = 0, c += 1;
          if (t.l = p, v = y > v ? y : v, g.push(y), t.sz) t.boxWidth = t.sz[0], t.justifyOffset = 0;
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
          t.lineWidths = g;
          var F, I, R, L, B = l.a;
          n = B.length;
          var V = [];
          for (a = 0; a < n; a += 1) {
            for ((F = B[a]).a.sc && (t.strokeColorAnim = !0), F.a.sw && (t.strokeWidthAnim = !0), (F.a.fc || F.a.fh || F.a.fs || F.a.fb) && (t.fillColorAnim = !0), L = 0, R = F.s.b, e = 0; e < r; e += 1)(I = p[e]).anIndexes[a] = L, (1 == R && "" !== I.val || 2 == R && "" !== I.val && " " !== I.val || 3 == R && (I.n || " " == I.val || e == r - 1) || 4 == R && (I.n || e == r - 1)) && (1 === F.s.rn && V.push(L), L += 1);
            l.a[a].s.totalChars = L;
            var O, G = -1;
            if (1 === F.s.rn)
              for (e = 0; e < r; e += 1) G != (I = p[e]).anIndexes[a] && (G = I.anIndexes[a], O = V.splice(Math.floor(Math.random() * V.length), 1)[0]), I.anIndexes[a] = O
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
              var s = 0,
                a = 0,
                n = 1,
                o = 1;
              this.ne.v > 0 ? s = this.ne.v / 100 : a = -this.ne.v / 100, this.xe.v > 0 ? n = 1 - this.xe.v / 100 : o = 1 + this.xe.v / 100;
              var h = BezierFactory.getBezierEasing(s, a, n, o).get,
                l = 0,
                p = this.finalS,
                c = this.finalE,
                f = this.data.sh;
              if (2 === f) l = h(l = c === p ? i >= c ? 1 : 0 : t(0, e(.5 / (c - p) + (i - p) / (c - p), 1)));
              else if (3 === f) l = h(l = c === p ? i >= c ? 0 : 1 : 1 - t(0, e(.5 / (c - p) + (i - p) / (c - p), 1)));
              else if (4 === f) c === p ? l = 0 : (l = t(0, e(.5 / (c - p) + (i - p) / (c - p), 1))) < .5 ? l *= 2 : l = 1 - 2 * (l - .5), l = h(l);
              else if (5 === f) {
                if (c === p) l = 0;
                else {
                  var m = c - p,
                    u = -m / 2 + (i = e(t(0, i + .5 - p), c - p)),
                    d = m / 2;
                  l = Math.sqrt(1 - u * u / (d * d))
                }
                l = h(l)
              } else 6 === f ? (c === p ? l = 0 : (i = e(t(0, i + .5 - p), c - p), l = (1 + Math.cos(Math.PI + 2 * Math.PI * i / (c - p))) / 2), l = h(l)) : (i >= r(p) && (l = t(0, e(i - p < 0 ? e(c, 1) - (p - i) : c - i, 1))), l = h(l));
              if (100 !== this.sm.v) {
                var g = .01 * this.sm.v;
                0 === g && (g = 1e-8);
                var y = .5 - .5 * g;
                l < y ? l = 0 : (l = (l - y) / g) > 1 && (l = 1)
              }
              return l * this.a.v
            },
            getValue: function(t) {
              this.iterateDynamicProperties(), this._mdf = t || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, t && 2 === this.data.r && (this.e.v = this._currentTextLength);
              var e = 2 === this.data.r ? 1 : 100 / this.data.totalChars,
                r = this.o.v / e,
                i = this.s.v / e + r,
                s = this.e.v / e + r;
              if (i > s) {
                var a = i;
                i = s, s = a
              }
              this.finalS = i, this.finalE = s
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
            s = PropertyFactory.getProp,
            a = e.a;
          this.a = {
            r: a.r ? s(t, a.r, 0, degToRads, r) : i,
            rx: a.rx ? s(t, a.rx, 0, degToRads, r) : i,
            ry: a.ry ? s(t, a.ry, 0, degToRads, r) : i,
            sk: a.sk ? s(t, a.sk, 0, degToRads, r) : i,
            sa: a.sa ? s(t, a.sa, 0, degToRads, r) : i,
            s: a.s ? s(t, a.s, 1, .01, r) : i,
            a: a.a ? s(t, a.a, 1, 0, r) : i,
            o: a.o ? s(t, a.o, 0, .01, r) : i,
            p: a.p ? s(t, a.p, 1, 0, r) : i,
            sw: a.sw ? s(t, a.sw, 0, 0, r) : i,
            sc: a.sc ? s(t, a.sc, 1, 0, r) : i,
            fc: a.fc ? s(t, a.fc, 1, 0, r) : i,
            fh: a.fh ? s(t, a.fh, 0, 0, r) : i,
            fs: a.fs ? s(t, a.fs, 0, .01, r) : i,
            fb: a.fb ? s(t, a.fb, 0, .01, r) : i,
            t: a.t ? s(t, a.t, 0, 0, r) : i
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
            var r, i, s, a, n, o, h, l, p, c, f, m, u, d, g, y, v, b, x, E = this._moreOptions.alignment.v,
              S = this._animatorsData,
              P = this._textData,
              T = this.mHelper,
              _ = this._renderType,
              C = this.renderedLetters.length,
              A = t.l;
            if (this._hasMaskedPath) {
              if (x = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
                var M, w = x.v;
                for (this._pathData.r.v && (w = w.reverse()), n = {
                    tLength: 0,
                    segments: []
                  }, a = w._length - 1, y = 0, s = 0; s < a; s += 1) M = bez.buildBezierData(w.v[s], w.v[s + 1], [w.o[s][0] - w.v[s][0], w.o[s][1] - w.v[s][1]], [w.i[s + 1][0] - w.v[s + 1][0], w.i[s + 1][1] - w.v[s + 1][1]]), n.tLength += M.segmentLength, n.segments.push(M), y += M.segmentLength;
                s = a, x.v.c && (M = bez.buildBezierData(w.v[s], w.v[0], [w.o[s][0] - w.v[s][0], w.o[s][1] - w.v[s][1]], [w.i[0][0] - w.v[0][0], w.i[0][1] - w.v[0][1]]), n.tLength += M.segmentLength, n.segments.push(M), y += M.segmentLength), this._pathData.pi = n
              }
              if (n = this._pathData.pi, o = this._pathData.f.v, f = 0, c = 1, l = 0, p = !0, d = n.segments, o < 0 && x.v.c)
                for (n.tLength < Math.abs(o) && (o = -Math.abs(o) % n.tLength), c = (u = d[f = d.length - 1].points).length - 1; o < 0;) o += u[c].partialLength, (c -= 1) < 0 && (c = (u = d[f -= 1].points).length - 1);
              m = (u = d[f].points)[c - 1], g = (h = u[c]).partialLength
            }
            a = A.length, r = 0, i = 0;
            var k, D, F, I, R, L = 1.2 * t.finalSize * .714,
              B = !0;
            F = S.length;
            var V, O, G, N, z, H, j, U, q, W, K, X, Y = -1,
              $ = o,
              Z = f,
              J = c,
              Q = -1,
              tt = "",
              et = this.defaultPropsArray;
            if (2 === t.j || 1 === t.j) {
              var rt = 0,
                it = 0,
                st = 2 === t.j ? -.5 : -1,
                at = 0,
                nt = !0;
              for (s = 0; s < a; s += 1)
                if (A[s].n) {
                  for (rt && (rt += it); at < s;) A[at].animatorJustifyOffset = rt, at += 1;
                  rt = 0, nt = !0
                } else {
                  for (D = 0; D < F; D += 1)(k = S[D].a).t.propType && (nt && 2 === t.j && (it += k.t.v * st), (R = S[D].s.getMult(A[s].anIndexes[D], P.a[D].s.totalChars)).length ? rt += k.t.v * R[0] * st : rt += k.t.v * R * st);
                  nt = !1
                } for (rt && (rt += it); at < s;) A[at].animatorJustifyOffset = rt, at += 1
            }
            for (s = 0; s < a; s += 1) {
              if (T.reset(), N = 1, A[s].n) r = 0, i += t.yOffset, i += B ? 1 : 0, o = $, B = !1, this._hasMaskedPath && (c = J, m = (u = d[f = Z].points)[c - 1], g = (h = u[c]).partialLength, l = 0), tt = "", K = "", q = "", X = "", et = this.defaultPropsArray;
              else {
                if (this._hasMaskedPath) {
                  if (Q !== A[s].line) {
                    switch (t.j) {
                      case 1:
                        o += y - t.lineWidths[A[s].line];
                        break;
                      case 2:
                        o += (y - t.lineWidths[A[s].line]) / 2
                    }
                    Q = A[s].line
                  }
                  Y !== A[s].ind && (A[Y] && (o += A[Y].extra), o += A[s].an / 2, Y = A[s].ind), o += E[0] * A[s].an * .005;
                  var ot = 0;
                  for (D = 0; D < F; D += 1)(k = S[D].a).p.propType && ((R = S[D].s.getMult(A[s].anIndexes[D], P.a[D].s.totalChars)).length ? ot += k.p.v[0] * R[0] : ot += k.p.v[0] * R), k.a.propType && ((R = S[D].s.getMult(A[s].anIndexes[D], P.a[D].s.totalChars)).length ? ot += k.a.v[0] * R[0] : ot += k.a.v[0] * R);
                  for (p = !0, this._pathData.a.v && (o = .5 * A[0].an + (y - this._pathData.f.v - .5 * A[0].an - .5 * A[A.length - 1].an) * Y / (a - 1), o += this._pathData.f.v); p;) l + g >= o + ot || !u ? (v = (o + ot - l) / h.partialLength, O = m.point[0] + (h.point[0] - m.point[0]) * v, G = m.point[1] + (h.point[1] - m.point[1]) * v, T.translate(-E[0] * A[s].an * .005, -E[1] * L * .01), p = !1) : u && (l += h.partialLength, (c += 1) >= u.length && (c = 0, d[f += 1] ? u = d[f].points : x.v.c ? (c = 0, u = d[f = 0].points) : (l -= h.partialLength, u = null)), u && (m = h, g = (h = u[c]).partialLength));
                  V = A[s].an / 2 - A[s].add, T.translate(-V, 0, 0)
                } else V = A[s].an / 2 - A[s].add, T.translate(-V, 0, 0), T.translate(-E[0] * A[s].an * .005, -E[1] * L * .01, 0);
                for (D = 0; D < F; D += 1)(k = S[D].a).t.propType && (R = S[D].s.getMult(A[s].anIndexes[D], P.a[D].s.totalChars), 0 === r && 0 === t.j || (this._hasMaskedPath ? R.length ? o += k.t.v * R[0] : o += k.t.v * R : R.length ? r += k.t.v * R[0] : r += k.t.v * R));
                for (t.strokeWidthAnim && (H = t.sw || 0), t.strokeColorAnim && (z = t.sc ? [t.sc[0], t.sc[1], t.sc[2]] : [0, 0, 0]), t.fillColorAnim && t.fc && (j = [t.fc[0], t.fc[1], t.fc[2]]), D = 0; D < F; D += 1)(k = S[D].a).a.propType && ((R = S[D].s.getMult(A[s].anIndexes[D], P.a[D].s.totalChars)).length ? T.translate(-k.a.v[0] * R[0], -k.a.v[1] * R[1], k.a.v[2] * R[2]) : T.translate(-k.a.v[0] * R, -k.a.v[1] * R, k.a.v[2] * R));
                for (D = 0; D < F; D += 1)(k = S[D].a).s.propType && ((R = S[D].s.getMult(A[s].anIndexes[D], P.a[D].s.totalChars)).length ? T.scale(1 + (k.s.v[0] - 1) * R[0], 1 + (k.s.v[1] - 1) * R[1], 1) : T.scale(1 + (k.s.v[0] - 1) * R, 1 + (k.s.v[1] - 1) * R, 1));
                for (D = 0; D < F; D += 1) {
                  if (k = S[D].a, R = S[D].s.getMult(A[s].anIndexes[D], P.a[D].s.totalChars), k.sk.propType && (R.length ? T.skewFromAxis(-k.sk.v * R[0], k.sa.v * R[1]) : T.skewFromAxis(-k.sk.v * R, k.sa.v * R)), k.r.propType && (R.length ? T.rotateZ(-k.r.v * R[2]) : T.rotateZ(-k.r.v * R)), k.ry.propType && (R.length ? T.rotateY(k.ry.v * R[1]) : T.rotateY(k.ry.v * R)), k.rx.propType && (R.length ? T.rotateX(k.rx.v * R[0]) : T.rotateX(k.rx.v * R)), k.o.propType && (R.length ? N += (k.o.v * R[0] - N) * R[0] : N += (k.o.v * R - N) * R), t.strokeWidthAnim && k.sw.propType && (R.length ? H += k.sw.v * R[0] : H += k.sw.v * R), t.strokeColorAnim && k.sc.propType)
                    for (U = 0; U < 3; U += 1) R.length ? z[U] += (k.sc.v[U] - z[U]) * R[0] : z[U] += (k.sc.v[U] - z[U]) * R;
                  if (t.fillColorAnim && t.fc) {
                    if (k.fc.propType)
                      for (U = 0; U < 3; U += 1) R.length ? j[U] += (k.fc.v[U] - j[U]) * R[0] : j[U] += (k.fc.v[U] - j[U]) * R;
                    k.fh.propType && (j = R.length ? addHueToRGB(j, k.fh.v * R[0]) : addHueToRGB(j, k.fh.v * R)), k.fs.propType && (j = R.length ? addSaturationToRGB(j, k.fs.v * R[0]) : addSaturationToRGB(j, k.fs.v * R)), k.fb.propType && (j = R.length ? addBrightnessToRGB(j, k.fb.v * R[0]) : addBrightnessToRGB(j, k.fb.v * R))
                  }
                }
                for (D = 0; D < F; D += 1)(k = S[D].a).p.propType && (R = S[D].s.getMult(A[s].anIndexes[D], P.a[D].s.totalChars), this._hasMaskedPath ? R.length ? T.translate(0, k.p.v[1] * R[0], -k.p.v[2] * R[1]) : T.translate(0, k.p.v[1] * R, -k.p.v[2] * R) : R.length ? T.translate(k.p.v[0] * R[0], k.p.v[1] * R[1], -k.p.v[2] * R[2]) : T.translate(k.p.v[0] * R, k.p.v[1] * R, -k.p.v[2] * R));
                if (t.strokeWidthAnim && (q = H < 0 ? 0 : H), t.strokeColorAnim && (W = "rgb(" + Math.round(255 * z[0]) + "," + Math.round(255 * z[1]) + "," + Math.round(255 * z[2]) + ")"), t.fillColorAnim && t.fc && (K = "rgb(" + Math.round(255 * j[0]) + "," + Math.round(255 * j[1]) + "," + Math.round(255 * j[2]) + ")"), this._hasMaskedPath) {
                  if (T.translate(0, -t.ls), T.translate(0, E[1] * L * .01 + i, 0), this._pathData.p.v) {
                    b = (h.point[1] - m.point[1]) / (h.point[0] - m.point[0]);
                    var ht = 180 * Math.atan(b) / Math.PI;
                    h.point[0] < m.point[0] && (ht += 180), T.rotate(-ht * Math.PI / 180)
                  }
                  T.translate(O, G, 0), o -= E[0] * A[s].an * .005, A[s + 1] && Y !== A[s + 1].ind && (o += A[s].an / 2, o += .001 * t.tr * t.finalSize)
                } else {
                  switch (T.translate(r, i, 0), t.ps && T.translate(t.ps[0], t.ps[1] + t.ascent, 0), t.j) {
                    case 1:
                      T.translate(A[s].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[A[s].line]), 0, 0);
                      break;
                    case 2:
                      T.translate(A[s].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[A[s].line]) / 2, 0, 0)
                  }
                  T.translate(0, -t.ls), T.translate(V, 0, 0), T.translate(E[0] * A[s].an * .005, E[1] * L * .01, 0), r += A[s].l + .001 * t.tr * t.finalSize
                }
                "html" === _ ? tt = T.toCSS() : "svg" === _ ? tt = T.to2dCSS() : et = [T.props[0], T.props[1], T.props[2], T.props[3], T.props[4], T.props[5], T.props[6], T.props[7], T.props[8], T.props[9], T.props[10], T.props[11], T.props[12], T.props[13], T.props[14], T.props[15]], X = N
              }
              C <= s ? (I = new LetterProps(X, q, W, K, tt, et), this.renderedLetters.push(I), C += 1, this.lettersChangedFlag = !0) : (I = this.renderedLetters[s], this.lettersChangedFlag = I.update(X, q, W, K, tt, et) || this.lettersChangedFlag)
            }
          }
        }, TextAnimatorProperty.prototype.getValue = function() {
          this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties())
        }, TextAnimatorProperty.prototype.mHelper = new Matrix, TextAnimatorProperty.prototype.defaultPropsArray = [], extendPrototype([DynamicPropertyContainer], TextAnimatorProperty), ITextElement.prototype.initElement = function(t, e, r) {
          this.lettersChangedFlag = !0, this.initFrame(), this.initBaseData(t, e, r), this.textProperty = new TextProperty(this, t.t, this.dynamicProperties), this.textAnimator = new TextAnimatorProperty(t.t, this.renderType, this), this.initTransform(t, e, r), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties)
        }, ITextElement.prototype.prepareFrame = function(t) {
          this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange)
        }, ITextElement.prototype.createPathShape = function(t, e) {
          var r, i, s = e.length,
            a = "";
          for (r = 0; r < s; r += 1) "sh" === e[r].ty && (i = e[r].ks.k, a += buildShapeString(i, i.i.length, !0, t));
          return a
        }, ITextElement.prototype.updateDocumentData = function(t, e) {
          this.textProperty.updateDocumentData(t, e)
        }, ITextElement.prototype.canResizeFont = function(t) {
          this.textProperty.canResizeFont(t)
        }, ITextElement.prototype.setMinimumFontSize = function(t) {
          this.textProperty.setMinimumFontSize(t)
        }, ITextElement.prototype.applyTextPropertiesToMatrix = function(t, e, r, i, s) {
          switch (t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0), e.translate(0, -t.ls, 0), t.j) {
            case 1:
              e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[r]), 0, 0);
              break;
            case 2:
              e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[r]) / 2, 0, 0)
          }
          e.translate(i, s, 0)
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
              s = createElementID();
            i.setAttribute("id", s), i.textContent = e.title, this.svgElement.appendChild(i), r += s
          }
          if (e && e.description) {
            var a = createNS("desc"),
              n = createElementID();
            a.setAttribute("id", n), a.textContent = e.description, this.svgElement.appendChild(a), r += " " + n
          }
          r && this.svgElement.setAttribute("aria-labelledby", r);
          var o = createNS("defs");
          this.svgElement.appendChild(o);
          var h = createNS("g");
          this.svgElement.appendChild(h), this.layerElement = h, this.renderConfig = {
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
          for (var e = 0, r = t.length, i = [], s = ""; e < r;) t[e] === String.fromCharCode(13) || t[e] === String.fromCharCode(3) ? (i.push(s), s = "") : s += t[e], e += 1;
          return i.push(s), i
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
            var s = r.fWeight,
              a = r.fStyle;
            this.layerElement.setAttribute("font-style", a), this.layerElement.setAttribute("font-weight", s)
          }
          this.layerElement.setAttribute("aria-label", r.t);
          var n, o = r.l || [],
            h = !!this.globalData.fontManager.chars;
          e = o.length;
          var l = this.mHelper,
            p = this.data.singleShape,
            c = 0,
            f = 0,
            m = !0,
            u = .001 * r.tr * r.finalSize;
          if (!p || h || r.sz) {
            var d, g = this.textSpans.length;
            for (t = 0; t < e; t += 1) {
              if (this.textSpans[t] || (this.textSpans[t] = {
                  span: null,
                  childSpan: null,
                  glyph: null
                }), !h || !p || 0 === t) {
                if (n = g > t ? this.textSpans[t].span : createNS(h ? "g" : "text"), g <= t) {
                  if (n.setAttribute("stroke-linecap", "butt"), n.setAttribute("stroke-linejoin", "round"), n.setAttribute("stroke-miterlimit", "4"), this.textSpans[t].span = n, h) {
                    var y = createNS("g");
                    n.appendChild(y), this.textSpans[t].childSpan = y
                  }
                  this.textSpans[t].span = n, this.layerElement.appendChild(n)
                }
                n.style.display = "inherit"
              }
              if (l.reset(), p && (o[t].n && (c = -u, f += r.yOffset, f += m ? 1 : 0, m = !1), this.applyTextPropertiesToMatrix(r, l, o[t].line, c, f), c += o[t].l || 0, c += u), h) {
                var v;
                if (1 === (d = this.globalData.fontManager.getCharData(r.finalText[t], i.fStyle, this.globalData.fontManager.getFontByName(r.f).fFamily)).t) v = new SVGCompElement(d.data, this.globalData, this);
                else {
                  var b = emptyShapeData;
                  d.data && d.data.shapes && (b = this.buildShapeData(d.data, r.finalSize)), v = new SVGShapeElement(b, this.globalData, this)
                }
                if (this.textSpans[t].glyph) {
                  var x = this.textSpans[t].glyph;
                  this.textSpans[t].childSpan.removeChild(x.layerElement), x.destroy()
                }
                this.textSpans[t].glyph = v, v._debug = !0, v.prepareFrame(0), v.renderFrame(), this.textSpans[t].childSpan.appendChild(v.layerElement), 1 === d.t && this.textSpans[t].childSpan.setAttribute("transform", "scale(" + r.finalSize / 100 + "," + r.finalSize / 100 + ")")
              } else p && n.setAttribute("transform", "translate(" + l.props[12] + "," + l.props[13] + ")"), n.textContent = o[t].val, n.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve")
            }
            p && n && n.setAttribute("d", "")
          } else {
            var E = this.textContainer,
              S = "start";
            switch (r.j) {
              case 1:
                S = "end";
                break;
              case 2:
                S = "middle";
                break;
              default:
                S = "start"
            }
            E.setAttribute("text-anchor", S), E.setAttribute("letter-spacing", u);
            var P = this.buildTextContents(r.finalText);
            for (e = P.length, f = r.ps ? r.ps[1] + r.ascent : 0, t = 0; t < e; t += 1)(n = this.textSpans[t].span || createNS("tspan")).textContent = P[t], n.setAttribute("x", 0), n.setAttribute("y", f), n.style.display = "inherit", E.appendChild(n), this.textSpans[t] || (this.textSpans[t] = {
              span: null,
              glyph: null
            }), this.textSpans[t].span = n, f += r.finalLineHeight;
            this.layerElement.appendChild(E)
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
            var r, i, s, a = this.textAnimator.renderedLetters,
              n = this.textProperty.currentData.l;
            for (e = n.length, t = 0; t < e; t += 1) n[t].n || (r = a[t], i = this.textSpans[t].span, (s = this.textSpans[t].glyph) && s.renderFrame(), r._mdf.m && i.setAttribute("transform", r.m), r._mdf.o && i.setAttribute("opacity", r.o), r._mdf.sw && i.setAttribute("stroke-width", r.sw), r._mdf.sc && i.setAttribute("stroke", r.sc), r._mdf.fc && i.setAttribute("fill", r.fc))
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
          var s = createElementID();
          r.setAttribute("id", s), r.appendChild(i), this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + s + ")"), e.appendChild(r), this.layers = t.layers, this.elements = createSizedArray(t.layers.length)
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
                var s = e[i].getMatte(this.layers[t].tt);
                r.setMatte(s)
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
                    s = this.elements[i].getMatte(this.layers[e].tt);
                  t.setMatte(s);
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
            for (var i, s = 0; s < e;) this.elements[s] && !0 !== this.elements[s] && this.elements[s].getBaseElement() && (i = this.elements[s].getBaseElement()), s += 1;
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
            var s = this.sequences[i];
            return s || (s = {
              transforms: [].concat(t),
              finalTransform: new Matrix,
              _mdf: !1
            }, this.sequences[i] = s, this.sequenceList.push(s)), s
          },
          processSequence: function(t, e) {
            for (var r = 0, i = t.transforms.length, s = e; r < i && !e;) {
              if (t.transforms[r].transform.mProps._mdf) {
                s = !0;
                break
              }
              r += 1
            }
            if (s)
              for (t.finalTransform.reset(), r = i - 1; r >= 0; r -= 1) t.finalTransform.multiply(t.transforms[r].transform.mProps.v);
            t._mdf = s
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

          function s() {
            var s, a, n;
            e || (s = createNS("svg"), a = createNS("filter"), n = createNS("feColorMatrix"), a.setAttribute("id", t), n.setAttribute("type", "matrix"), n.setAttribute("color-interpolation-filters", "sRGB"), n.setAttribute("values", "0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0"), a.appendChild(n), s.appendChild(a), s.setAttribute("id", t + "_svg"), featureSupport.svgLumaHidden && (s.style.display = "none"), i = s, document.body.appendChild(i), e = createTag("canvas"), (r = e.getContext("2d")).filter = "url(#" + t + ")", r.fillStyle = "rgba(0,0,0,0)", r.fillRect(0, 0, 1, 1))
          }
          return {
            load: s,
            get: function(i) {
              return e || s(), e.width = i.width, e.height = i.height, r.filter = "url(#" + t + ")", e
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
            var s = t.data.ef[e].ty;
            registeredEffects[s] && (r = new(0, registeredEffects[s].effect)(t.effectsManager.effectElements[e], t)), r && this.filters.push(r)
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
            s = !1;
          for (r = 0; r < i; r += 1) "n" !== this.masksProperties[r].mode && (s = !0), this.viewData[r] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[r], 3);
          this.hasMasks = s, s && this.element.addRenderableComponent(this)
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
            var t, e, r, i, s = this.element.finalTransform.mat,
              a = this.element.canvasContext,
              n = this.masksProperties.length;
            for (a.beginPath(), t = 0; t < n; t += 1)
              if ("n" !== this.masksProperties[t].mode) {
                var o;
                this.masksProperties[t].inv && (a.moveTo(0, 0), a.lineTo(this.element.globalData.compSize.w, 0), a.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h), a.lineTo(0, this.element.globalData.compSize.h), a.lineTo(0, 0)), i = this.viewData[t].v, e = s.applyToPointArray(i.v[0][0], i.v[0][1], 0), a.moveTo(e[0], e[1]);
                var h = i._length;
                for (o = 1; o < h; o += 1) r = s.applyToTriplePoints(i.o[o - 1], i.i[o], i.v[o]), a.bezierCurveTo(r[0], r[1], r[2], r[3], r[4], r[5]);
                r = s.applyToTriplePoints(i.o[o - 1], i.i[0], i.v[0]), a.bezierCurveTo(r[0], r[1], r[2], r[3], r[4], r[5])
              } this.element.globalData.renderer.save(!0), a.clip()
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
          var s, a = 4;
          "rc" === e.ty ? a = 5 : "el" === e.ty ? a = 6 : "sr" === e.ty && (a = 7), this.sh = ShapePropertyFactory.getShapeProp(t, e, a, t);
          var n, o = r.length;
          for (s = 0; s < o; s += 1) r[s].closed || (n = {
            transforms: i.addTransformSequence(r[s].transforms),
            trNodes: []
          }, this.styledShapes.push(n), r[s].elements.push(n))
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
            var s, a = t.ks.or.k.length;
            for (s = 0; s < a; s += 1) t.ks.or.k[s].to = null, t.ks.or.k[s].ti = null
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
              var s = new DashProperty(this, t.d, "canvas", this);
              i.d = s, i.d.k || (r.da = i.d.dashArray, r.do = i.d.dashoffset[0])
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
        }, CVShapeElement.prototype.searchShapes = function(t, e, r, i, s) {
          var a, n, o, h, l, p, c = t.length - 1,
            f = [],
            m = [],
            u = [].concat(s);
          for (a = c; a >= 0; a -= 1) {
            if ((h = this.searchProcessedElement(t[a])) ? e[a] = r[h - 1] : t[a]._shouldRender = i, "fl" === t[a].ty || "st" === t[a].ty || "gf" === t[a].ty || "gs" === t[a].ty) h ? e[a].style.closed = !1 : e[a] = this.createStyleElement(t[a], u), f.push(e[a].style);
            else if ("gr" === t[a].ty) {
              if (h)
                for (o = e[a].it.length, n = 0; n < o; n += 1) e[a].prevViewData[n] = e[a].it[n];
              else e[a] = this.createGroupElement(t[a]);
              this.searchShapes(t[a].it, e[a].it, e[a].prevViewData, i, u)
            } else "tr" === t[a].ty ? (h || (p = this.createTransformElement(t[a]), e[a] = p), u.push(e[a]), this.addTransformToStyleList(e[a])) : "sh" === t[a].ty || "rc" === t[a].ty || "el" === t[a].ty || "sr" === t[a].ty ? h || (e[a] = this.createShapeElement(t[a])) : "tm" === t[a].ty || "rd" === t[a].ty || "pb" === t[a].ty || "zz" === t[a].ty || "op" === t[a].ty ? (h ? (l = e[a]).closed = !1 : ((l = ShapeModifiers.getModifier(t[a].ty)).init(this, t[a]), e[a] = l, this.shapeModifiers.push(l)), m.push(l)) : "rp" === t[a].ty && (h ? (l = e[a]).closed = !0 : (l = ShapeModifiers.getModifier(t[a].ty), e[a] = l, l.init(this, t, a, e), this.shapeModifiers.push(l), i = !1), m.push(l));
            this.addProcessedElement(t[a], a + 1)
          }
          for (this.removeTransformFromStyleList(), this.closeStyles(f), c = m.length, a = 0; a < c; a += 1) m[a].closed = !0
        }, CVShapeElement.prototype.renderInnerContent = function() {
          this.transformHelper.opacity = 1, this.transformHelper._opMdf = !1, this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame), this.renderShape(this.transformHelper, this.shapesData, this.itemsData, !0)
        }, CVShapeElement.prototype.renderShapeTransform = function(t, e) {
          (t._opMdf || e.op._mdf || this._isFirstFrame) && (e.opacity = t.opacity, e.opacity *= e.op.v, e._opMdf = !0)
        }, CVShapeElement.prototype.drawLayer = function() {
          var t, e, r, i, s, a, n, o, h, l = this.stylesList.length,
            p = this.globalData.renderer,
            c = this.globalData.canvasContext;
          for (t = 0; t < l; t += 1)
            if (("st" !== (o = (h = this.stylesList[t]).type) && "gs" !== o || 0 !== h.wi) && h.data._shouldRender && 0 !== h.coOp && 0 !== this.globalData.currentGlobalAlpha) {
              for (p.save(), a = h.elements, "st" === o || "gs" === o ? (p.ctxStrokeStyle("st" === o ? h.co : h.grd), p.ctxLineWidth(h.wi), p.ctxLineCap(h.lc), p.ctxLineJoin(h.lj), p.ctxMiterLimit(h.ml || 0)) : p.ctxFillStyle("fl" === o ? h.co : h.grd), p.ctxOpacity(h.coOp), "st" !== o && "gs" !== o && c.beginPath(), p.ctxTransform(h.preTransforms.finalTransform.props), r = a.length, e = 0; e < r; e += 1) {
                for ("st" !== o && "gs" !== o || (c.beginPath(), h.da && (c.setLineDash(h.da), c.lineDashOffset = h.do)), s = (n = a[e].trNodes).length, i = 0; i < s; i += 1) "m" === n[i].t ? c.moveTo(n[i].p[0], n[i].p[1]) : "c" === n[i].t ? c.bezierCurveTo(n[i].pts[0], n[i].pts[1], n[i].pts[2], n[i].pts[3], n[i].pts[4], n[i].pts[5]) : c.closePath();
                "st" !== o && "gs" !== o || (p.ctxStroke(), h.da && c.setLineDash(this.dashResetter))
              }
              "st" !== o && "gs" !== o && this.globalData.renderer.ctxFill(h.r), p.restore()
            }
        }, CVShapeElement.prototype.renderShape = function(t, e, r, i) {
          var s, a;
          for (a = t, s = e.length - 1; s >= 0; s -= 1) "tr" === e[s].ty ? (a = r[s].transform, this.renderShapeTransform(t, a)) : "sh" === e[s].ty || "el" === e[s].ty || "rc" === e[s].ty || "sr" === e[s].ty ? this.renderPath(e[s], r[s]) : "fl" === e[s].ty ? this.renderFill(e[s], r[s], a) : "st" === e[s].ty ? this.renderStroke(e[s], r[s], a) : "gf" === e[s].ty || "gs" === e[s].ty ? this.renderGradientFill(e[s], r[s], a) : "gr" === e[s].ty ? this.renderShape(a, e[s].it, r[s].it) : e[s].ty;
          i && this.drawLayer()
        }, CVShapeElement.prototype.renderStyledShape = function(t, e) {
          if (this._isFirstFrame || e._mdf || t.transforms._mdf) {
            var r, i, s, a = t.trNodes,
              n = e.paths,
              o = n._length;
            a.length = 0;
            var h = t.transforms.finalTransform;
            for (s = 0; s < o; s += 1) {
              var l = n.shapes[s];
              if (l && l.v) {
                for (i = l._length, r = 1; r < i; r += 1) 1 === r && a.push({
                  t: "m",
                  p: h.applyToPointArray(l.v[0][0], l.v[0][1], 0)
                }), a.push({
                  t: "c",
                  pts: h.applyToTriplePoints(l.o[r - 1], l.i[r], l.v[r])
                });
                1 === i && a.push({
                  t: "m",
                  p: h.applyToPointArray(l.v[0][0], l.v[0][1], 0)
                }), l.c && i && (a.push({
                  t: "c",
                  pts: h.applyToTriplePoints(l.o[r - 1], l.i[0], l.v[0])
                }), a.push({
                  t: "z"
                }))
              }
            }
            t.trNodes = a
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
          var i, s = e.style;
          if (!s.grd || e.g._mdf || e.s._mdf || e.e._mdf || 1 !== t.t && (e.h._mdf || e.a._mdf)) {
            var a, n = this.globalData.canvasContext,
              o = e.s.v,
              h = e.e.v;
            if (1 === t.t) i = n.createLinearGradient(o[0], o[1], h[0], h[1]);
            else {
              var l = Math.sqrt(Math.pow(o[0] - h[0], 2) + Math.pow(o[1] - h[1], 2)),
                p = Math.atan2(h[1] - o[1], h[0] - o[0]),
                c = e.h.v;
              c >= 1 ? c = .99 : c <= -1 && (c = -.99);
              var f = l * c,
                m = Math.cos(p + e.a.v) * f + o[0],
                u = Math.sin(p + e.a.v) * f + o[1];
              i = n.createRadialGradient(m, u, 0, o[0], o[1], l)
            }
            var d = t.g.p,
              g = e.g.c,
              y = 1;
            for (a = 0; a < d; a += 1) e.g._hasOpacity && e.g._collapsable && (y = e.g.o[2 * a + 1]), i.addColorStop(g[4 * a] / 100, "rgba(" + g[4 * a + 1] + "," + g[4 * a + 2] + "," + g[4 * a + 3] + "," + y + ")");
            s.grd = i
          }
          s.coOp = e.o.v * r.opacity
        }, CVShapeElement.prototype.renderStroke = function(t, e, r) {
          var i = e.style,
            s = e.d;
          s && (s._mdf || this._isFirstFrame) && (i.da = s.dashArray, i.do = s.dashoffset[0]), (e.c._mdf || this._isFirstFrame) && (i.co = "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || r._opMdf || this._isFirstFrame) && (i.coOp = e.o.v * r.opacity), (e.w._mdf || this._isFirstFrame) && (i.wi = e.w.v)
        }, CVShapeElement.prototype.destroy = function() {
          this.shapesData = null, this.globalData = null, this.canvasContext = null, this.stylesList.length = 0, this.itemsData.length = 0
        }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement, ITextElement], CVTextElement), CVTextElement.prototype.tHelper = createTag("canvas").getContext("2d"), CVTextElement.prototype.buildNewText = function() {
          var t = this.textProperty.currentData;
          this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
          var e = !1;
          t.fc ? (e = !0, this.values.fill = this.buildColor(t.fc)) : this.values.fill = "rgba(0,0,0,0)", this.fill = e;
          var r = !1;
          t.sc && (r = !0, this.values.stroke = this.buildColor(t.sc), this.values.sWidth = t.sw);
          var i, s, a, n, o, h, l, p, c, f, m, u, d = this.globalData.fontManager.getFontByName(t.f),
            g = t.l,
            y = this.mHelper;
          this.stroke = r, this.values.fValue = t.finalSize + "px " + this.globalData.fontManager.getFontByName(t.f).fFamily, s = t.finalText.length;
          var v = this.data.singleShape,
            b = .001 * t.tr * t.finalSize,
            x = 0,
            E = 0,
            S = !0,
            P = 0;
          for (i = 0; i < s; i += 1) {
            n = (a = this.globalData.fontManager.getCharData(t.finalText[i], d.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily)) && a.data || {}, y.reset(), v && g[i].n && (x = -b, E += t.yOffset, E += S ? 1 : 0, S = !1), c = (l = n.shapes ? n.shapes[0].it : []).length, y.scale(t.finalSize / 100, t.finalSize / 100), v && this.applyTextPropertiesToMatrix(t, y, g[i].line, x, E), m = createSizedArray(c - 1);
            var T = 0;
            for (p = 0; p < c; p += 1)
              if ("sh" === l[p].ty) {
                for (h = l[p].ks.k.i.length, f = l[p].ks.k, u = [], o = 1; o < h; o += 1) 1 === o && u.push(y.applyToX(f.v[0][0], f.v[0][1], 0), y.applyToY(f.v[0][0], f.v[0][1], 0)), u.push(y.applyToX(f.o[o - 1][0], f.o[o - 1][1], 0), y.applyToY(f.o[o - 1][0], f.o[o - 1][1], 0), y.applyToX(f.i[o][0], f.i[o][1], 0), y.applyToY(f.i[o][0], f.i[o][1], 0), y.applyToX(f.v[o][0], f.v[o][1], 0), y.applyToY(f.v[o][0], f.v[o][1], 0));
                u.push(y.applyToX(f.o[o - 1][0], f.o[o - 1][1], 0), y.applyToY(f.o[o - 1][0], f.o[o - 1][1], 0), y.applyToX(f.i[0][0], f.i[0][1], 0), y.applyToY(f.i[0][0], f.i[0][1], 0), y.applyToX(f.v[0][0], f.v[0][1], 0), y.applyToY(f.v[0][0], f.v[0][1], 0)), m[T] = u, T += 1
              } v && (x += g[i].l, x += b), this.textSpans[P] ? this.textSpans[P].elem = m : this.textSpans[P] = {
              elem: m
            }, P += 1
          }
        }, CVTextElement.prototype.renderInnerContent = function() {
          var t, e, r, i, s, a;
          this.validateText(), this.canvasContext.font = this.values.fValue, this.globalData.renderer.ctxLineCap("butt"), this.globalData.renderer.ctxLineJoin("miter"), this.globalData.renderer.ctxMiterLimit(4), this.data.singleShape || this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
          var n, o = this.textAnimator.renderedLetters,
            h = this.textProperty.currentData.l;
          e = h.length;
          var l, p, c = null,
            f = null,
            m = null,
            u = this.globalData.renderer;
          for (t = 0; t < e; t += 1)
            if (!h[t].n) {
              if ((n = o[t]) && (u.save(), u.ctxTransform(n.p), u.ctxOpacity(n.o)), this.fill) {
                for (n && n.fc ? c !== n.fc && (u.ctxFillStyle(n.fc), c = n.fc) : c !== this.values.fill && (c = this.values.fill, u.ctxFillStyle(this.values.fill)), i = (l = this.textSpans[t].elem).length, this.globalData.canvasContext.beginPath(), r = 0; r < i; r += 1)
                  for (a = (p = l[r]).length, this.globalData.canvasContext.moveTo(p[0], p[1]), s = 2; s < a; s += 6) this.globalData.canvasContext.bezierCurveTo(p[s], p[s + 1], p[s + 2], p[s + 3], p[s + 4], p[s + 5]);
                this.globalData.canvasContext.closePath(), u.ctxFill()
              }
              if (this.stroke) {
                for (n && n.sw ? m !== n.sw && (m = n.sw, u.ctxLineWidth(n.sw)) : m !== this.values.sWidth && (m = this.values.sWidth, u.ctxLineWidth(this.values.sWidth)), n && n.sc ? f !== n.sc && (f = n.sc, u.ctxStrokeStyle(n.sc)) : f !== this.values.stroke && (f = this.values.stroke, u.ctxStrokeStyle(this.values.stroke)), i = (l = this.textSpans[t].elem).length, this.globalData.canvasContext.beginPath(), r = 0; r < i; r += 1)
                  for (a = (p = l[r]).length, this.globalData.canvasContext.moveTo(p[0], p[1]), s = 2; s < a; s += 6) this.globalData.canvasContext.bezierCurveTo(p[s], p[s + 1], p[s + 2], p[s + 3], p[s + 4], p[s + 5]);
                this.globalData.canvasContext.closePath(), u.ctxStroke()
              }
              n && this.globalData.renderer.restore()
            }
        }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVImageElement), CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVImageElement.prototype.createContent = function() {
          if (this.img.width && (this.assetData.w !== this.img.width || this.assetData.h !== this.img.height)) {
            var t = createTag("canvas");
            t.width = this.assetData.w, t.height = this.assetData.h;
            var e, r, i = t.getContext("2d"),
              s = this.img.width,
              a = this.img.height,
              n = s / a,
              o = this.assetData.w / this.assetData.h,
              h = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;
            n > o && "xMidYMid slice" === h || n < o && "xMidYMid slice" !== h ? e = (r = a) * o : r = (e = s) / o, i.drawImage(this.img, (s - e) / 2, (a - r) / 2, e, r, 0, 0, this.assetData.w, this.assetData.h), this.img = t
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
          var r, i, s, a;
          if (this.reset(), t ? (r = t, i = e, this.canvasContext.canvas.width = r, this.canvasContext.canvas.height = i) : (this.animationItem.wrapper && this.animationItem.container ? (r = this.animationItem.wrapper.offsetWidth, i = this.animationItem.wrapper.offsetHeight) : (r = this.canvasContext.canvas.width, i = this.canvasContext.canvas.height), this.canvasContext.canvas.width = r * this.renderConfig.dpr, this.canvasContext.canvas.height = i * this.renderConfig.dpr), -1 !== this.renderConfig.preserveAspectRatio.indexOf("meet") || -1 !== this.renderConfig.preserveAspectRatio.indexOf("slice")) {
            var n = this.renderConfig.preserveAspectRatio.split(" "),
              o = n[1] || "meet",
              h = n[0] || "xMidYMid",
              l = h.substr(0, 4),
              p = h.substr(4);
            s = r / i, (a = this.transformCanvas.w / this.transformCanvas.h) > s && "meet" === o || a < s && "slice" === o ? (this.transformCanvas.sx = r / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = r / (this.transformCanvas.w / this.renderConfig.dpr)) : (this.transformCanvas.sx = i / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.sy = i / (this.transformCanvas.h / this.renderConfig.dpr)), this.transformCanvas.tx = "xMid" === l && (a < s && "meet" === o || a > s && "slice" === o) ? (r - this.transformCanvas.w * (i / this.transformCanvas.h)) / 2 * this.renderConfig.dpr : "xMax" === l && (a < s && "meet" === o || a > s && "slice" === o) ? (r - this.transformCanvas.w * (i / this.transformCanvas.h)) * this.renderConfig.dpr : 0, this.transformCanvas.ty = "YMid" === p && (a > s && "meet" === o || a < s && "slice" === o) ? (i - this.transformCanvas.h * (r / this.transformCanvas.w)) / 2 * this.renderConfig.dpr : "YMax" === p && (a > s && "meet" === o || a < s && "slice" === o) ? (i - this.transformCanvas.h * (r / this.transformCanvas.w)) * this.renderConfig.dpr : 0
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
            s = this.cTr.props;
          for (e = 0; e < 16; e += 1) s[e] = i[e];
          if (t) {
            this.nativeContext.restore();
            var a = this.stack[this.cArrPos + 1];
            this.appliedFillStyle = a.fillStyle, this.appliedStrokeStyle = a.strokeStyle, this.appliedLineWidth = a.lineWidth, this.appliedLineCap = a.lineCap, this.appliedLineJoin = a.lineJoin, this.appliedMiterLimit = a.miterLimit
          }
          this.nativeContext.setTransform(i[0], i[1], i[4], i[5], i[12], i[13]), (t || -1 !== r.opacity && this.currentOpacity !== r.opacity) && (this.nativeContext.globalAlpha = r.opacity, this.currentOpacity = r.opacity), this.currentFillStyle = r.fillStyle, this.currentStrokeStyle = r.strokeStyle, this.currentLineWidth = r.lineWidth, this.currentLineCap = r.lineCap, this.currentLineJoin = r.lineJoin, this.currentMiterLimit = r.miterLimit
        }, CVContextData.prototype.save = function(t) {
          t && this.nativeContext.save();
          var e = this.cTr.props;
          this._length <= this.cArrPos && this.duplicate();
          var r, i = this.stack[this.cArrPos];
          for (r = 0; r < 16; r += 1) i.transform[r] = e[r];
          this.cArrPos += 1;
          var s = this.stack[this.cArrPos];
          s.opacity = i.opacity, s.fillStyle = i.fillStyle, s.strokeStyle = i.strokeStyle, s.lineWidth = i.lineWidth, s.lineCap = i.lineCap, s.lineJoin = i.lineJoin, s.miterLimit = i.miterLimit
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
          var r, i, s, a, n, o = t.sh.v,
            h = t.transformers,
            l = o._length;
          if (!(l <= 1)) {
            for (r = 0; r < l - 1; r += 1) i = this.getTransformedPoint(h, o.v[r]), s = this.getTransformedPoint(h, o.o[r]), a = this.getTransformedPoint(h, o.i[r + 1]), n = this.getTransformedPoint(h, o.v[r + 1]), this.checkBounds(i, s, a, n, e);
            o.c && (i = this.getTransformedPoint(h, o.v[r]), s = this.getTransformedPoint(h, o.o[r]), a = this.getTransformedPoint(h, o.i[0]), n = this.getTransformedPoint(h, o.v[0]), this.checkBounds(i, s, a, n, e))
          }
        }, HShapeElement.prototype.checkBounds = function(t, e, r, i, s) {
          this.getBoundsOfCurve(t, e, r, i);
          var a = this.shapeBoundingBox;
          s.x = bmMin(a.left, s.x), s.xMax = bmMax(a.right, s.xMax), s.y = bmMin(a.top, s.y), s.yMax = bmMax(a.bottom, s.yMax)
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
          for (var s, a, n, o, h, l, p, c = [
              [t[0], i[0]],
              [t[1], i[1]]
            ], f = 0; f < 2; ++f) a = 6 * t[f] - 12 * e[f] + 6 * r[f], s = -3 * t[f] + 9 * e[f] - 9 * r[f] + 3 * i[f], n = 3 * e[f] - 3 * t[f], a |= 0, n |= 0, 0 == (s |= 0) && 0 === a || (0 === s ? (o = -n / a) > 0 && o < 1 && c[f].push(this.calculateF(o, t, e, r, i, f)) : (h = a * a - 4 * n * s) >= 0 && ((l = (-a + bmSqrt(h)) / (2 * s)) > 0 && l < 1 && c[f].push(this.calculateF(l, t, e, r, i, f)), (p = (-a - bmSqrt(h)) / (2 * s)) > 0 && p < 1 && c[f].push(this.calculateF(p, t, e, r, i, f))));
          this.shapeBoundingBox.left = bmMin.apply(null, c[0]), this.shapeBoundingBox.top = bmMin.apply(null, c[1]), this.shapeBoundingBox.right = bmMax.apply(null, c[0]), this.shapeBoundingBox.bottom = bmMax.apply(null, c[1])
        }, HShapeElement.prototype.calculateF = function(t, e, r, i, s, a) {
          return bmPow(1 - t, 3) * e[a] + 3 * bmPow(1 - t, 2) * t * r[a] + 3 * (1 - t) * bmPow(t, 2) * i[a] + bmPow(t, 3) * s[a]
        }, HShapeElement.prototype.calculateBoundingBox = function(t, e) {
          var r, i = t.length;
          for (r = 0; r < i; r += 1) t[r] && t[r].sh ? this.calculateShapeBoundingBox(t[r], e) : t[r] && t[r].it ? this.calculateBoundingBox(t[r].it, e) : t[r] && t[r].style && t[r].w && this.expandStrokeBoundingBox(t[r].w, e)
        }, HShapeElement.prototype.expandStrokeBoundingBox = function(t, e) {
          var r = 0;
          if (t.keyframes) {
            for (var i = 0; i < t.keyframes.length; i += 1) {
              var s = t.keyframes[i].s;
              s > r && (r = s)
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
                s = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
              i.transform = s, i.webkitTransform = s
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
          var i, s, a = this.globalData.fontManager.getFontByName(t.f);
          if (!this.globalData.fontManager.chars)
            if (e.fontSize = t.finalSize + "px", e.lineHeight = t.finalSize + "px", a.fClass) this.innerElem.className = a.fClass;
            else {
              e.fontFamily = a.fFamily;
              var n = t.fWeight,
                o = t.fStyle;
              e.fontStyle = o, e.fontWeight = n
            } var h, l, p, c = t.l;
          s = c.length;
          var f, m = this.mHelper,
            u = "",
            d = 0;
          for (i = 0; i < s; i += 1) {
            if (this.globalData.fontManager.chars ? (this.textPaths[d] ? h = this.textPaths[d] : ((h = createNS("path")).setAttribute("stroke-linecap", lineCapEnum[1]), h.setAttribute("stroke-linejoin", lineJoinEnum[2]), h.setAttribute("stroke-miterlimit", "4")), this.isMasked || (this.textSpans[d] ? p = (l = this.textSpans[d]).children[0] : ((l = createTag("div")).style.lineHeight = 0, (p = createNS("svg")).appendChild(h), styleDiv(l)))) : this.isMasked ? h = this.textPaths[d] ? this.textPaths[d] : createNS("text") : this.textSpans[d] ? (l = this.textSpans[d], h = this.textPaths[d]) : (styleDiv(l = createTag("span")), styleDiv(h = createTag("span")), l.appendChild(h)), this.globalData.fontManager.chars) {
              var g, y = this.globalData.fontManager.getCharData(t.finalText[i], a.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily);
              if (g = y ? y.data : null, m.reset(), g && g.shapes && g.shapes.length && (f = g.shapes[0].it, m.scale(t.finalSize / 100, t.finalSize / 100), u = this.createPathShape(m, f), h.setAttribute("d", u)), this.isMasked) this.innerElem.appendChild(h);
              else {
                if (this.innerElem.appendChild(l), g && g.shapes) {
                  document.body.appendChild(p);
                  var v = p.getBBox();
                  p.setAttribute("width", v.width + 2), p.setAttribute("height", v.height + 2), p.setAttribute("viewBox", v.x - 1 + " " + (v.y - 1) + " " + (v.width + 2) + " " + (v.height + 2));
                  var b = p.style,
                    x = "translate(" + (v.x - 1) + "px," + (v.y - 1) + "px)";
                  b.transform = x, b.webkitTransform = x, c[i].yOffset = v.y - 1
                } else p.setAttribute("width", 1), p.setAttribute("height", 1);
                l.appendChild(p)
              }
            } else if (h.textContent = c[i].val, h.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), this.isMasked) this.innerElem.appendChild(h);
            else {
              this.innerElem.appendChild(l);
              var E = h.style,
                S = "translate3d(0," + -t.finalSize / 1.2 + "px,0)";
              E.transform = S, E.webkitTransform = S
            }
            this.isMasked ? this.textSpans[d] = h : this.textSpans[d] = l, this.textSpans[d].style.display = "block", this.textPaths[d] = h, d += 1
          }
          for (; d < this.textSpans.length;) this.textSpans[d].style.display = "none", d += 1
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
            var r, i, s, a, n, o = 0,
              h = this.textAnimator.renderedLetters,
              l = this.textProperty.currentData.l;
            for (i = l.length, r = 0; r < i; r += 1) l[r].n ? o += 1 : (a = this.textSpans[r], n = this.textPaths[r], s = h[o], o += 1, s._mdf.m && (this.isMasked ? a.setAttribute("transform", s.m) : (a.style.webkitTransform = s.m, a.style.transform = s.m)), a.style.opacity = s.o, s.sw && s._mdf.sw && n.setAttribute("stroke-width", s.sw), s.sc && s._mdf.sc && n.setAttribute("stroke", s.sc), s.fc && s._mdf.fc && (n.setAttribute("fill", s.fc), n.style.color = s.fc));
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
          var t, e, r, i, s = this.comp.threeDElements.length;
          for (t = 0; t < s; t += 1)
            if ("3d" === (e = this.comp.threeDElements[t]).type) {
              r = e.perspectiveElem.style, i = e.container.style;
              var a = this.pe.v + "px",
                n = "0px 0px 0px",
                o = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
              r.perspective = a, r.webkitPerspective = a, i.transformOrigin = n, i.mozTransformOrigin = n, i.webkitTransformOrigin = n, r.transform = o, r.webkitTransform = o
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
              var s;
              s = this.p ? [this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2]] : [this.px.v - this.a.v[0], this.py.v - this.a.v[1], this.pz.v - this.a.v[2]];
              var a = Math.sqrt(Math.pow(s[0], 2) + Math.pow(s[1], 2) + Math.pow(s[2], 2)),
                n = [s[0] / a, s[1] / a, s[2] / a],
                o = Math.sqrt(n[2] * n[2] + n[0] * n[0]),
                h = Math.atan2(n[1], o),
                l = Math.atan2(n[0], -n[2]);
              this.mat.rotateY(l).rotateX(-h)
            }
            this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v), this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]), this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0), this.mat.translate(0, 0, this.pe.v);
            var p = !this._prevMat.equals(this.mat);
            if ((p || this.pe._mdf) && this.comp.threeDElements) {
              var c, f, m;
              for (e = this.comp.threeDElements.length, t = 0; t < e; t += 1)
                if ("3d" === (c = this.comp.threeDElements[t]).type) {
                  if (p) {
                    var u = this.mat.toCSS();
                    (m = c.container.style).transform = u, m.webkitTransform = u
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
              for (var s, a, n = 0; n < e;) this.elements[n] && !0 !== this.elements[n] && this.elements[n].getBaseElement && (a = this.elements[n], s = (this.layers[n].ddd ? this.getThreeDContainerByPos(n) : a.getBaseElement()) || s), n += 1;
              s ? i.ddd && this.supports3d || this.layerElement.insertBefore(r, s) : i.ddd && this.supports3d || this.layerElement.appendChild(r)
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
          var r, i, s = createTag("div");
          styleDiv(s);
          var a = createTag("div");
          if (styleDiv(a), "3d" === e) {
            (r = s.style).width = this.globalData.compSize.w + "px", r.height = this.globalData.compSize.h + "px";
            var n = "50% 50%";
            r.webkitTransformOrigin = n, r.mozTransformOrigin = n, r.transformOrigin = n;
            var o = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
            (i = a.style).transform = o, i.webkitTransform = o
          }
          s.appendChild(a);
          var h = {
            container: a,
            perspectiveElem: s,
            startPos: t,
            endPos: t,
            type: e
          };
          return this.threeDElements.push(h), h
        }, HybridRendererBase.prototype.build3dContainers = function() {
          var t, e, r = this.layers.length,
            i = "";
          for (t = 0; t < r; t += 1) this.layers[t].ddd && 3 !== this.layers[t].ty ? ("3d" !== i && (i = "3d", e = this.createThreeDContainer(t, "3d")), e.endPos = Math.max(e.endPos, t)) : ("2d" !== i && (i = "2d", e = this.createThreeDContainer(t, "2d")), e.endPos = Math.max(e.endPos, t));
          for (t = (r = this.threeDElements.length) - 1; t >= 0; t -= 1) this.resizerElem.appendChild(this.threeDElements[t].perspectiveElem)
        }, HybridRendererBase.prototype.addTo3dContainer = function(t, e) {
          for (var r = 0, i = this.threeDElements.length; r < i;) {
            if (e <= this.threeDElements[r].endPos) {
              for (var s, a = this.threeDElements[r].startPos; a < e;) this.elements[a] && this.elements[a].getBaseElement && (s = this.elements[a].getBaseElement()), a += 1;
              s ? this.threeDElements[r].container.insertBefore(t, s) : this.threeDElements[r].container.appendChild(t);
              break
            }
            r += 1
          }
        }, HybridRendererBase.prototype.configAnimation = function(t) {
          var e = createTag("div"),
            r = this.animationItem.wrapper,
            i = e.style;
          i.width = t.w + "px", i.height = t.h + "px", this.resizerElem = e, styleDiv(e), i.transformStyle = "flat", i.mozTransformStyle = "flat", i.webkitTransformStyle = "flat", this.renderConfig.className && e.setAttribute("class", this.renderConfig.className), r.appendChild(e), i.overflow = "hidden";
          var s = createNS("svg");
          s.setAttribute("width", "1"), s.setAttribute("height", "1"), styleDiv(s), this.resizerElem.appendChild(s);
          var a = createNS("defs");
          s.appendChild(a), this.data = t, this.setupGlobalData(t, s), this.globalData.defs = a, this.layers = t.layers, this.layerElement = this.resizerElem, this.build3dContainers(), this.updateContainerSize()
        }, HybridRendererBase.prototype.destroy = function() {
          var t;
          this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.animationItem.container = null, this.globalData.defs = null;
          var e = this.layers ? this.layers.length : 0;
          for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy && this.elements[t].destroy();
          this.elements.length = 0, this.destroyed = !0, this.animationItem = null
        }, HybridRendererBase.prototype.updateContainerSize = function() {
          var t, e, r, i, s = this.animationItem.wrapper.offsetWidth,
            a = this.animationItem.wrapper.offsetHeight,
            n = s / a;
          this.globalData.compSize.w / this.globalData.compSize.h > n ? (t = s / this.globalData.compSize.w, e = s / this.globalData.compSize.w, r = 0, i = (a - this.globalData.compSize.h * (s / this.globalData.compSize.w)) / 2) : (t = a / this.globalData.compSize.h, e = a / this.globalData.compSize.h, r = (s - this.globalData.compSize.w * (a / this.globalData.compSize.h)) / 2, i = 0);
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
              var s = this.threeDElements[t].perspectiveElem.style;
              s.webkitPerspective = Math.sqrt(Math.pow(e, 2) + Math.pow(r, 2)) + "px", s.perspective = s.webkitPerspective
            }
          }
        }, HybridRendererBase.prototype.searchExtraCompositions = function(t) {
          var e, r = t.length,
            i = createTag("div");
          for (e = 0; e < r; e += 1)
            if (t[e].xt) {
              var s = this.createComp(t[e], i, this.globalData.comp, null);
              s.initExpressions(), this.globalData.projectInterface.registerComposition(s)
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
          var r = this,
            i = 256,
            s = "random",
            a = e.pow(i, 6),
            n = e.pow(2, 52),
            o = 2 * n,
            h = 255;

          function l(t) {
            var e, r = t.length,
              s = this,
              a = 0,
              n = s.i = s.j = 0,
              o = s.S = [];
            for (r || (t = [r++]); a < i;) o[a] = a++;
            for (a = 0; a < i; a++) o[a] = o[n = h & n + t[a % r] + (e = o[a])], o[n] = e;
            s.g = function(t) {
              for (var e, r = 0, a = s.i, n = s.j, o = s.S; t--;) e = o[a = h & a + 1], r = r * i + o[h & (o[a] = o[n = h & n + e]) + (o[n] = e)];
              return s.i = a, s.j = n, r
            }
          }

          function p(t, e) {
            return e.i = t.i, e.j = t.j, e.S = t.S.slice(), e
          }

          function c(t, e) {
            var r, i = [],
              s = _typeof$2(t);
            if (e && "object" == s)
              for (r in t) try {
                i.push(c(t[r], e - 1))
              } catch (t) {}
            return i.length ? i : "string" == s ? t : t + "\0"
          }

          function f(t, e) {
            for (var r, i = t + "", s = 0; s < i.length;) e[h & s] = h & (r ^= 19 * e[h & s]) + i.charCodeAt(s++);
            return m(e)
          }

          function m(t) {
            return String.fromCharCode.apply(0, t)
          }
          e["seed" + s] = function(h, u, d) {
            var g = [],
              y = f(c((u = !0 === u ? {
                entropy: !0
              } : u || {}).entropy ? [h, m(t)] : null === h ? function() {
                try {
                  var e = new Uint8Array(i);
                  return (r.crypto || r.msCrypto).getRandomValues(e), m(e)
                } catch (e) {
                  var s = r.navigator,
                    a = s && s.plugins;
                  return [+new Date, r, a, r.screen, m(t)]
                }
              }() : h, 3), g),
              v = new l(g),
              b = function() {
                for (var t = v.g(6), e = a, r = 0; t < n;) t = (t + r) * i, e *= i, r = v.g(1);
                for (; t >= o;) t /= 2, e /= 2, r >>>= 1;
                return (t + r) / e
              };
            return b.int32 = function() {
              return 0 | v.g(4)
            }, b.quick = function() {
              return v.g(4) / 4294967296
            }, b.double = b, f(m(v.S), t), (u.pass || d || function(t, r, i, a) {
              return a && (a.S && p(a, v), t.state = function() {
                return p(v, {})
              }), i ? (e[s] = t, r) : t
            })(b, y, "global" in u ? u.global : this == e, u.state)
          }, f(e.random(), t)
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
                  s = [];
                for (r = 0; r < i; r += 1) s[r] = -t[r];
                return s
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
                for (var s = 0, a = t.length, n = e.length, o = []; s < a || s < n;)("number" == typeof t[s] || t[s] instanceof Number) && ("number" == typeof e[s] || e[s] instanceof Number) ? o[s] = t[s] + e[s] : o[s] = void 0 === e[s] ? t[s] : t[s] || e[s], s += 1;
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
                for (var s = 0, a = t.length, n = e.length, o = []; s < a || s < n;)("number" == typeof t[s] || t[s] instanceof Number) && ("number" == typeof e[s] || e[s] instanceof Number) ? o[s] = t[s] - e[s] : o[s] = void 0 === e[s] ? t[s] : t[s] || e[s], s += 1;
                return o
              }
              return 0
            }

            function mul(t, e) {
              var r, i, s, a = _typeof$1(t),
                n = _typeof$1(e);
              if (isNumerable(a, t) && isNumerable(n, e)) return t * e;
              if ($bm_isInstanceOfArray(t) && isNumerable(n, e)) {
                for (s = t.length, r = createTypedArray("float32", s), i = 0; i < s; i += 1) r[i] = t[i] * e;
                return r
              }
              if (isNumerable(a, t) && $bm_isInstanceOfArray(e)) {
                for (s = e.length, r = createTypedArray("float32", s), i = 0; i < s; i += 1) r[i] = t * e[i];
                return r
              }
              return 0
            }

            function div(t, e) {
              var r, i, s, a = _typeof$1(t),
                n = _typeof$1(e);
              if (isNumerable(a, t) && isNumerable(n, e)) return t / e;
              if ($bm_isInstanceOfArray(t) && isNumerable(n, e)) {
                for (s = t.length, r = createTypedArray("float32", s), i = 0; i < s; i += 1) r[i] = t[i] / e;
                return r
              }
              if (isNumerable(a, t) && $bm_isInstanceOfArray(e)) {
                for (s = e.length, r = createTypedArray("float32", s), i = 0; i < s; i += 1) r[i] = t / e[i];
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
                s = 0;
              for (r = 0; r < i; r += 1) s += Math.pow(e[r] - t[r], 2);
              return Math.sqrt(s)
            }

            function normalize(t) {
              return div(t, length(t))
            }

            function rgbToHsl(t) {
              var e, r, i = t[0],
                s = t[1],
                a = t[2],
                n = Math.max(i, s, a),
                o = Math.min(i, s, a),
                h = (n + o) / 2;
              if (n === o) e = 0, r = 0;
              else {
                var l = n - o;
                switch (r = h > .5 ? l / (2 - n - o) : l / (n + o), n) {
                  case i:
                    e = (s - a) / l + (s < a ? 6 : 0);
                    break;
                  case s:
                    e = (a - i) / l + 2;
                    break;
                  case a:
                    e = (i - s) / l + 4
                }
                e /= 6
              }
              return [e, r, h, t[3]]
            }

            function hue2rgb(t, e, r) {
              return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? t + 6 * (e - t) * r : r < .5 ? e : r < 2 / 3 ? t + (e - t) * (2 / 3 - r) * 6 : t
            }

            function hslToRgb(t) {
              var e, r, i, s = t[0],
                a = t[1],
                n = t[2];
              if (0 === a) e = n, i = n, r = n;
              else {
                var o = n < .5 ? n * (1 + a) : n + a - n * a,
                  h = 2 * n - o;
                e = hue2rgb(h, o, s + 1 / 3), r = hue2rgb(h, o, s), i = hue2rgb(h, o, s - 1 / 3)
              }
              return [e, r, i, t[3]]
            }

            function linear(t, e, r, i, s) {
              if (void 0 !== i && void 0 !== s || (i = e, s = r, e = 0, r = 1), r < e) {
                var a = r;
                r = e, e = a
              }
              if (t <= e) return i;
              if (t >= r) return s;
              var n, o = r === e ? 0 : (t - e) / (r - e);
              if (!i.length) return i + (s - i) * o;
              var h = i.length,
                l = createTypedArray("float32", h);
              for (n = 0; n < h; n += 1) l[n] = i[n] + (s[n] - i[n]) * o;
              return l
            }

            function random(t, e) {
              if (void 0 === e && (void 0 === t ? (t = 0, e = 1) : (e = t, t = void 0)), e.length) {
                var r, i = e.length;
                t || (t = createTypedArray("float32", i));
                var s = createTypedArray("float32", i),
                  a = BMMath.random();
                for (r = 0; r < i; r += 1) s[r] = t[r] + a * (e[r] - t[r]);
                return s
              }
              return void 0 === t && (t = 0), t + BMMath.random() * (e - t)
            }

            function createPath(t, e, r, i) {
              var s, a = t.length,
                n = shapePool.newElement();
              n.setPathData(!!i, a);
              var o, h, l = [0, 0];
              for (s = 0; s < a; s += 1) o = e && e[s] ? e[s] : l, h = r && r[s] ? r[s] : l, n.setTripleAt(t[s][0], t[s][1], h[0] + t[s][0], h[1] + t[s][1], o[0] + t[s][0], o[1] + t[s][1], s, !0);
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
                  var r, i, s = this.pv.length ? this.pv.length : 1,
                    a = createTypedArray("float32", s),
                    n = Math.floor(5 * time);
                  for (r = 0, i = 0; r < n;) {
                    for (i = 0; i < s; i += 1) a[i] += -e + 2 * e * BMMath.random();
                    r += 1
                  }
                  var o = 5 * time,
                    h = o - Math.floor(o),
                    l = createTypedArray("float32", s);
                  if (s > 1) {
                    for (i = 0; i < s; i += 1) l[i] = this.pv[i] + a[i] + (-e + 2 * e * BMMath.random()) * h;
                    return l
                  }
                  return this.pv + a[0] + (-e + 2 * e * BMMath.random()) * h
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

              function easeOut(t, e, r, i, s) {
                return applyEase(easeOutBez, t, e, r, i, s)
              }

              function easeIn(t, e, r, i, s) {
                return applyEase(easeInBez, t, e, r, i, s)
              }

              function ease(t, e, r, i, s) {
                return applyEase(easeInOutBez, t, e, r, i, s)
              }

              function applyEase(t, e, r, i, s, a) {
                void 0 === s ? (s = r, a = i) : e = (e - r) / (i - r), e > 1 ? e = 1 : e < 0 && (e = 0);
                var n = t(e);
                if ($bm_isInstanceOfArray(s)) {
                  var o, h = s.length,
                    l = createTypedArray("float32", h);
                  for (o = 0; o < h; o += 1) l[o] = (a[o] - s[o]) * n + s[o];
                  return l
                }
                return (a - s) * n + s
              }

              function nearestKey(t) {
                var e, r, i, s = data.k.length;
                if (data.k.length && "number" != typeof data.k[0])
                  if (r = -1, (t *= elem.comp.globalData.frameRate) < data.k[0].t) r = 1, i = data.k[0].t;
                  else {
                    for (e = 0; e < s - 1; e += 1) {
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
                var a = {};
                return a.index = r, a.time = i / elem.comp.globalData.frameRate, a
              }

              function key(t) {
                var e, r, i;
                if (!data.k.length || "number" == typeof data.k[0]) throw new Error("The property has no keyframe at index " + t);
                t -= 1, e = {
                  time: data.k[t].t / elem.comp.globalData.frameRate,
                  value: []
                };
                var s = Object.prototype.hasOwnProperty.call(data.k[t], "s") ? data.k[t].s : data.k[t - 1].e;
                for (i = s.length, r = 0; r < i; r += 1) e[r] = s[r], e.value[r] = s[r];
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
                  s = e.viewData.length;
                for (r = 0; r < s; r += 1) i[r] = new t(e.viewData[r], e.masksProperties[r]);
                return function(t) {
                  for (r = 0; r < s;) {
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
                var s;
                s = "s" in e.keyframes[i - 1] ? e.keyframes[i - 1].s : "e" in e.keyframes[i - 2] ? e.keyframes[i - 2].e : e.keyframes[i - 2].s;
                var a = "unidimensional" === r ? new Number(s) : Object.assign({}, s);
                return a.time = e.keyframes[i - 1].t / e.elem.comp.globalData.frameRate, a.value = "unidimensional" === r ? s[0] : s, a
              }, t.valueAtTime = e.getValueAtTime, t.speedAtTime = e.getSpeedAtTime, t.velocityAtTime = e.getVelocityAtTime, t.propertyGroup = e.propertyGroup
            }

            function i() {
              return t
            }
            return function(s) {
              return s ? "unidimensional" === s.propType ? function(e) {
                e && "pv" in e || (e = t);
                var i = 1 / e.mult,
                  s = e.pv * i,
                  a = new Number(s);
                return a.value = s, r(a, e, "unidimensional"),
                  function() {
                    return e.k && e.getValue(), s = e.v * i, a.value !== s && ((a = new Number(s)).value = s, r(a, e, "unidimensional")), a
                  }
              }(s) : function(t) {
                t && "pv" in t || (t = e);
                var i = 1 / t.mult,
                  s = t.data && t.data.l || t.pv.length,
                  a = createTypedArray("float32", s),
                  n = createTypedArray("float32", s);
                return a.value = n, r(a, t, "multidimensional"),
                  function() {
                    t.k && t.getValue();
                    for (var e = 0; e < s; e += 1) n[e] = t.v[e] * i, a[e] = n[e];
                    return a
                  }
              }(s) : i
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
            var r, i, s, a;
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
            }), t.p ? a = ExpressionPropertyInterface(t.p) : (r = ExpressionPropertyInterface(t.px), i = ExpressionPropertyInterface(t.py), t.pz && (s = ExpressionPropertyInterface(t.pz))), Object.defineProperty(e, "position", {
              get: function() {
                return t.p ? a() : [r(), i(), s ? s() : 0]
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

            function s(t, e) {
              var r = this.getMatrix(e);
              return this.invertPoint(r, t)
            }

            function a(t, e) {
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

            function h() {
              return [1, 1, 1, 1]
            }
            return function(l) {
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
              c.getMatrix = t, c.invertPoint = n, c.applyPoint = a, c.toWorld = r, c.toWorldVec = e, c.fromWorld = s, c.fromWorldVec = i, c.toComp = r, c.fromComp = o, c.sampleImage = h, c.sourceRectAtTime = l.sourceRectAtTime.bind(l), c._elem = l;
              var f = getDescriptor(p = TransformExpressionInterface(l.finalTransform.mProp), "anchorPoint");
              return Object.defineProperties(c, {
                hasParent: {
                  get: function() {
                    return l.hierarchy.length
                  }
                },
                parent: {
                  get: function() {
                    return l.hierarchy[0].layerInterface
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
                    return l.isInRange
                  }
                }
              }), c.startTime = l.data.st, c.index = l.data.ind, c.source = l.data.refId, c.height = 0 === l.data.ty ? l.data.h : 100, c.width = 0 === l.data.ty ? l.data.w : 100, c.inPoint = l.data.ip / l.comp.globalData.frameRate, c.outPoint = l.data.op / l.comp.globalData.frameRate, c._name = l.data.nm, c.registerMaskInterface = function(t) {
                c.mask = new MaskManagerInterface(t, l)
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
            function t(r, i, s, a) {
              function n(t) {
                for (var e = r.ef, i = 0, s = e.length; i < s;) {
                  if (t === e[i].nm || t === e[i].mn || t === e[i].ix) return 5 === e[i].ty ? l[i] : l[i]();
                  i += 1
                }
                throw new Error
              }
              var o, h = propertyGroupFactory(n, s),
                l = [],
                p = r.ef.length;
              for (o = 0; o < p; o += 1) 5 === r.ef[o].ty ? l.push(t(r.ef[o], i.effectElements[o], i.effectElements[o].propertyGroup, a)) : l.push(e(i.effectElements[o], r.ef[o].ty, a, h));
              return "ADBE Color Control" === r.mn && Object.defineProperty(n, "color", {
                get: function() {
                  return l[0]()
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
                  value: h
                }
              }), n.enabled = 0 !== r.en, n.active = n.enabled, n
            }

            function e(t, e, r, i) {
              var s = ExpressionPropertyInterface(t.p);
              return t.p.setGroupProperty && t.p.setGroupProperty(PropertyInterface("", i)),
                function() {
                  return 10 === e ? r.comp.compInterface(t.p.v) : s()
                }
            }
            return {
              createEffectsInterface: function(e, r) {
                if (e.effectsManager) {
                  var i, s = [],
                    a = e.data.ef,
                    n = e.effectsManager.effectElements.length;
                  for (i = 0; i < n; i += 1) s.push(t(a[i], e.effectsManager.effectElements[i], r, e));
                  var o = e.data.ef || [],
                    h = function(t) {
                      for (i = 0, n = o.length; i < n;) {
                        if (t === o[i].nm || t === o[i].mn || t === o[i].ix) return s[i];
                        i += 1
                      }
                      return null
                    };
                  return Object.defineProperty(h, "numProperties", {
                    get: function() {
                      return o.length
                    }
                  }), h
                }
                return null
              }
            }
          }(),
          ShapePathInterface = function(t, e, r) {
            var i = e.sh;

            function s(t) {
              return "Shape" === t || "shape" === t || "Path" === t || "path" === t || "ADBE Vector Shape" === t || 2 === t ? s.path : null
            }
            var a = propertyGroupFactory(s, r);
            return i.setGroupProperty(PropertyInterface("Path", a)), Object.defineProperties(s, {
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
            }), s
          },
          ShapeExpressionInterface = function() {
            function t(t, n, f) {
              var m, u = [],
                d = t ? t.length : 0;
              for (m = 0; m < d; m += 1) "gr" === t[m].ty ? u.push(e(t[m], n[m], f)) : "fl" === t[m].ty ? u.push(r(t[m], n[m], f)) : "st" === t[m].ty ? u.push(s(t[m], n[m], f)) : "tm" === t[m].ty ? u.push(a(t[m], n[m], f)) : "tr" === t[m].ty || ("el" === t[m].ty ? u.push(o(t[m], n[m], f)) : "sr" === t[m].ty ? u.push(h(t[m], n[m], f)) : "sh" === t[m].ty ? u.push(ShapePathInterface(t[m], n[m], f)) : "rc" === t[m].ty ? u.push(l(t[m], n[m], f)) : "rd" === t[m].ty ? u.push(p(t[m], n[m], f)) : "rp" === t[m].ty ? u.push(c(t[m], n[m], f)) : "gf" === t[m].ty ? u.push(i(t[m], n[m], f)) : u.push((t[m], n[m], function() {
                return null
              })));
              return u
            }

            function e(e, r, i) {
              var s = function(t) {
                switch (t) {
                  case "ADBE Vectors Group":
                  case "Contents":
                  case 2:
                    return s.content;
                  default:
                    return s.transform
                }
              };
              s.propertyGroup = propertyGroupFactory(s, i);
              var a = function(e, r, i) {
                  var s, a = function(t) {
                    for (var e = 0, r = s.length; e < r;) {
                      if (s[e]._name === t || s[e].mn === t || s[e].propertyIndex === t || s[e].ix === t || s[e].ind === t) return s[e];
                      e += 1
                    }
                    return "number" == typeof t ? s[t - 1] : null
                  };
                  a.propertyGroup = propertyGroupFactory(a, i), s = t(e.it, r.it, a.propertyGroup), a.numProperties = s.length;
                  var o = n(e.it[e.it.length - 1], r.it[r.it.length - 1], a.propertyGroup);
                  return a.transform = o, a.propertyIndex = e.cix, a._name = e.nm, a
                }(e, r, s.propertyGroup),
                o = n(e.it[e.it.length - 1], r.it[r.it.length - 1], s.propertyGroup);
              return s.content = a, s.transform = o, Object.defineProperty(s, "_name", {
                get: function() {
                  return e.nm
                }
              }), s.numProperties = e.np, s.propertyIndex = e.ix, s.nm = e.nm, s.mn = e.mn, s
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

            function s(t, e, r) {
              var i, s = propertyGroupFactory(l, r),
                a = propertyGroupFactory(h, s);

              function n(r) {
                Object.defineProperty(h, t.d[r].nm, {
                  get: ExpressionPropertyInterface(e.d.dataProps[r].p)
                })
              }
              var o = t.d ? t.d.length : 0,
                h = {};
              for (i = 0; i < o; i += 1) n(i), e.d.dataProps[i].p.setGroupProperty(a);

              function l(t) {
                return "Color" === t || "color" === t ? l.color : "Opacity" === t || "opacity" === t ? l.opacity : "Stroke Width" === t || "stroke width" === t ? l.strokeWidth : null
              }
              return Object.defineProperties(l, {
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
                    return h
                  }
                },
                _name: {
                  value: t.nm
                },
                mn: {
                  value: t.mn
                }
              }), e.c.setGroupProperty(PropertyInterface("Color", s)), e.o.setGroupProperty(PropertyInterface("Opacity", s)), e.w.setGroupProperty(PropertyInterface("Stroke Width", s)), l
            }

            function a(t, e, r) {
              function i(e) {
                return e === t.e.ix || "End" === e || "end" === e ? i.end : e === t.s.ix ? i.start : e === t.o.ix ? i.offset : null
              }
              var s = propertyGroupFactory(i, r);
              return i.propertyIndex = t.ix, e.s.setGroupProperty(PropertyInterface("Start", s)), e.e.setGroupProperty(PropertyInterface("End", s)), e.o.setGroupProperty(PropertyInterface("Offset", s)), i.propertyIndex = t.ix, i.propertyGroup = r, Object.defineProperties(i, {
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
              var s = propertyGroupFactory(i, r);
              return e.transform.mProps.o.setGroupProperty(PropertyInterface("Opacity", s)), e.transform.mProps.p.setGroupProperty(PropertyInterface("Position", s)), e.transform.mProps.a.setGroupProperty(PropertyInterface("Anchor Point", s)), e.transform.mProps.s.setGroupProperty(PropertyInterface("Scale", s)), e.transform.mProps.r.setGroupProperty(PropertyInterface("Rotation", s)), e.transform.mProps.sk && (e.transform.mProps.sk.setGroupProperty(PropertyInterface("Skew", s)), e.transform.mProps.sa.setGroupProperty(PropertyInterface("Skew Angle", s))), e.transform.op.setGroupProperty(PropertyInterface("Opacity", s)), Object.defineProperties(i, {
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
              var s = propertyGroupFactory(i, r);
              i.propertyIndex = t.ix;
              var a = "tm" === e.sh.ty ? e.sh.prop : e.sh;
              return a.s.setGroupProperty(PropertyInterface("Size", s)), a.p.setGroupProperty(PropertyInterface("Position", s)), Object.defineProperties(i, {
                size: {
                  get: ExpressionPropertyInterface(a.s)
                },
                position: {
                  get: ExpressionPropertyInterface(a.p)
                },
                _name: {
                  value: t.nm
                }
              }), i.mn = t.mn, i
            }

            function h(t, e, r) {
              function i(e) {
                return t.p.ix === e ? i.position : t.r.ix === e ? i.rotation : t.pt.ix === e ? i.points : t.or.ix === e || "ADBE Vector Star Outer Radius" === e ? i.outerRadius : t.os.ix === e ? i.outerRoundness : !t.ir || t.ir.ix !== e && "ADBE Vector Star Inner Radius" !== e ? t.is && t.is.ix === e ? i.innerRoundness : null : i.innerRadius
              }
              var s = propertyGroupFactory(i, r),
                a = "tm" === e.sh.ty ? e.sh.prop : e.sh;
              return i.propertyIndex = t.ix, a.or.setGroupProperty(PropertyInterface("Outer Radius", s)), a.os.setGroupProperty(PropertyInterface("Outer Roundness", s)), a.pt.setGroupProperty(PropertyInterface("Points", s)), a.p.setGroupProperty(PropertyInterface("Position", s)), a.r.setGroupProperty(PropertyInterface("Rotation", s)), t.ir && (a.ir.setGroupProperty(PropertyInterface("Inner Radius", s)), a.is.setGroupProperty(PropertyInterface("Inner Roundness", s))), Object.defineProperties(i, {
                position: {
                  get: ExpressionPropertyInterface(a.p)
                },
                rotation: {
                  get: ExpressionPropertyInterface(a.r)
                },
                points: {
                  get: ExpressionPropertyInterface(a.pt)
                },
                outerRadius: {
                  get: ExpressionPropertyInterface(a.or)
                },
                outerRoundness: {
                  get: ExpressionPropertyInterface(a.os)
                },
                innerRadius: {
                  get: ExpressionPropertyInterface(a.ir)
                },
                innerRoundness: {
                  get: ExpressionPropertyInterface(a.is)
                },
                _name: {
                  value: t.nm
                }
              }), i.mn = t.mn, i
            }

            function l(t, e, r) {
              function i(e) {
                return t.p.ix === e ? i.position : t.r.ix === e ? i.roundness : t.s.ix === e || "Size" === e || "ADBE Vector Rect Size" === e ? i.size : null
              }
              var s = propertyGroupFactory(i, r),
                a = "tm" === e.sh.ty ? e.sh.prop : e.sh;
              return i.propertyIndex = t.ix, a.p.setGroupProperty(PropertyInterface("Position", s)), a.s.setGroupProperty(PropertyInterface("Size", s)), a.r.setGroupProperty(PropertyInterface("Rotation", s)), Object.defineProperties(i, {
                position: {
                  get: ExpressionPropertyInterface(a.p)
                },
                roundness: {
                  get: ExpressionPropertyInterface(a.r)
                },
                size: {
                  get: ExpressionPropertyInterface(a.s)
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
              var s = propertyGroupFactory(i, r),
                a = e;
              return i.propertyIndex = t.ix, a.rd.setGroupProperty(PropertyInterface("Radius", s)), Object.defineProperties(i, {
                radius: {
                  get: ExpressionPropertyInterface(a.rd)
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
              var s = propertyGroupFactory(i, r),
                a = e;
              return i.propertyIndex = t.ix, a.c.setGroupProperty(PropertyInterface("Copies", s)), a.o.setGroupProperty(PropertyInterface("Offset", s)), Object.defineProperties(i, {
                copies: {
                  get: ExpressionPropertyInterface(a.c)
                },
                offset: {
                  get: ExpressionPropertyInterface(a.o)
                },
                _name: {
                  value: t.nm
                }
              }), i.mn = t.mn, i
            }
            return function(e, r, i) {
              var s;

              function a(t) {
                if ("number" == typeof t) return 0 === (t = void 0 === t ? 1 : t) ? i : s[t - 1];
                for (var e = 0, r = s.length; e < r;) {
                  if (s[e]._name === t) return s[e];
                  e += 1
                }
                return null
              }
              return a.propertyGroup = propertyGroupFactory(a, (function() {
                return i
              })), s = t(e, r, a.propertyGroup), a.numProperties = s.length, a._name = "Contents", a
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
                var s = t.indexOf(e);
                if (-1 !== s) {
                  var a = parseInt(t.substr(s + e.length), 10);
                  return "object" === _typeof(r = r[a]) ? i : r
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
              var s;
              for (s = 0; s < e.length; s += 1) i += Math.pow(r[s] - e[s], 2);
              i = 100 * Math.sqrt(i)
            } else i = 0;
            return i
          },
          getVelocityAtTime: function(t) {
            if (void 0 !== this.vel) return this.vel;
            var e, r, i = -.001,
              s = this.getValueAtTime(t),
              a = this.getValueAtTime(t + i);
            if (s.length)
              for (e = createTypedArray("float32", s.length), r = 0; r < s.length; r += 1) e[r] = (a[r] - s[r]) / i;
            else e = (a - s) / i;
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
            var i, s, a, n, o, h = this.comp.renderedFrame,
              l = this.keyframes,
              p = l[l.length - 1].t;
            if (h <= p) return this.pv;
            if (r ? s = p - (i = e ? Math.abs(p - this.elem.comp.globalData.frameRate * e) : Math.max(0, p - this.elem.data.ip)) : ((!e || e > l.length - 1) && (e = l.length - 1), i = p - (s = l[l.length - 1 - e].t)), "pingpong" === t) {
              if (Math.floor((h - s) / i) % 2 != 0) return this.getValueAtTime((i - (h - s) % i + s) / this.comp.globalData.frameRate, 0)
            } else {
              if ("offset" === t) {
                var c = this.getValueAtTime(s / this.comp.globalData.frameRate, 0),
                  f = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
                  m = this.getValueAtTime(((h - s) % i + s) / this.comp.globalData.frameRate, 0),
                  u = Math.floor((h - s) / i);
                if (this.pv.length) {
                  for (n = (o = new Array(c.length)).length, a = 0; a < n; a += 1) o[a] = (f[a] - c[a]) * u + m[a];
                  return o
                }
                return (f - c) * u + m
              }
              if ("continue" === t) {
                var d = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
                  g = this.getValueAtTime((p - .001) / this.comp.globalData.frameRate, 0);
                if (this.pv.length) {
                  for (n = (o = new Array(d.length)).length, a = 0; a < n; a += 1) o[a] = d[a] + (d[a] - g[a]) * ((h - p) / this.comp.globalData.frameRate) / 5e-4;
                  return o
                }
                return d + (h - p) / .001 * (d - g)
              }
            }
            return this.getValueAtTime(((h - s) % i + s) / this.comp.globalData.frameRate, 0)
          }

          function e(t, e, r) {
            if (!this.k) return this.pv;
            t = t ? t.toLowerCase() : "";
            var i, s, a, n, o, h = this.comp.renderedFrame,
              l = this.keyframes,
              p = l[0].t;
            if (h >= p) return this.pv;
            if (r ? s = p + (i = e ? Math.abs(this.elem.comp.globalData.frameRate * e) : Math.max(0, this.elem.data.op - p)) : ((!e || e > l.length - 1) && (e = l.length - 1), i = (s = l[e].t) - p), "pingpong" === t) {
              if (Math.floor((p - h) / i) % 2 == 0) return this.getValueAtTime(((p - h) % i + p) / this.comp.globalData.frameRate, 0)
            } else {
              if ("offset" === t) {
                var c = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
                  f = this.getValueAtTime(s / this.comp.globalData.frameRate, 0),
                  m = this.getValueAtTime((i - (p - h) % i + p) / this.comp.globalData.frameRate, 0),
                  u = Math.floor((p - h) / i) + 1;
                if (this.pv.length) {
                  for (n = (o = new Array(c.length)).length, a = 0; a < n; a += 1) o[a] = m[a] - (f[a] - c[a]) * u;
                  return o
                }
                return m - (f - c) * u
              }
              if ("continue" === t) {
                var d = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
                  g = this.getValueAtTime((p + .001) / this.comp.globalData.frameRate, 0);
                if (this.pv.length) {
                  for (n = (o = new Array(d.length)).length, a = 0; a < n; a += 1) o[a] = d[a] + (d[a] - g[a]) * (p - h) / .001;
                  return o
                }
                return d + (d - g) * (p - h) / .001
              }
            }
            return this.getValueAtTime((i - ((p - h) % i + p)) / this.comp.globalData.frameRate, 0)
          }

          function r(t, e) {
            if (!this.k) return this.pv;
            if (t = .5 * (t || .4), (e = Math.floor(e || 5)) <= 1) return this.pv;
            var r, i, s = this.comp.renderedFrame / this.comp.globalData.frameRate,
              a = s - t,
              n = e > 1 ? (s + t - a) / (e - 1) : 1,
              o = 0,
              h = 0;
            for (r = this.pv.length ? createTypedArray("float32", this.pv.length) : 0; o < e;) {
              if (i = this.getValueAtTime(a + o * n), this.pv.length)
                for (h = 0; h < this.pv.length; h += 1) r[h] += i[h];
              else r += i;
              o += 1
            }
            if (this.pv.length)
              for (h = 0; h < this.pv.length; h += 1) r[h] /= e;
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
              var s = this.sk.getValueAtTime(t),
                a = this.sa.getValueAtTime(t);
              e.skewFromAxis(-s * this.sk.mult, a * this.sa.mult)
            }
            if (this.r && this.appliedTransformations < 4) {
              var n = this.r.getValueAtTime(t);
              e.rotate(-n * this.r.mult)
            } else if (!this.r && this.appliedTransformations < 4) {
              var o = this.rz.getValueAtTime(t),
                h = this.ry.getValueAtTime(t),
                l = this.rx.getValueAtTime(t),
                p = this.or.getValueAtTime(t);
              e.rotateZ(-o * this.rz.mult).rotateY(h * this.ry.mult).rotateX(l * this.rx.mult).rotateZ(-p[2] * this.or.mult).rotateY(p[1] * this.or.mult).rotateX(p[0] * this.or.mult)
            }
            if (this.data.p && this.data.p.s) {
              var c = this.px.getValueAtTime(t),
                f = this.py.getValueAtTime(t);
              if (this.data.p.z) {
                var m = this.pz.getValueAtTime(t);
                e.translate(c * this.px.mult, f * this.py.mult, -m * this.pz.mult)
              } else e.translate(c * this.px.mult, f * this.py.mult, 0)
            } else {
              var u = this.p.getValueAtTime(t);
              e.translate(u[0] * this.p.mult, u[1] * this.p.mult, -u[2] * this.p.mult)
            }
            return e
          }

          function s() {
            return this.v.clone(new Matrix)
          }
          var a = TransformPropertyFactory.getTransformProperty;
          TransformPropertyFactory.getTransformProperty = function(t, e, r) {
            var n = a(t, e, r);
            return n.dynamicProperties.length ? n.getValueAtTime = i.bind(n) : n.getValueAtTime = s.bind(n), n.setGroupProperty = expressionHelpers.setGroupProperty, n
          };
          var n = PropertyFactory.getProp;
          PropertyFactory.getProp = function(i, s, a, o, h) {
            var l = n(i, s, a, o, h);
            l.kf ? l.getValueAtTime = expressionHelpers.getValueAtTime.bind(l) : l.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(l), l.setGroupProperty = expressionHelpers.setGroupProperty, l.loopOut = t, l.loopIn = e, l.smooth = r, l.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(l), l.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(l), l.numKeys = 1 === s.a ? s.k.length : 0, l.propertyIndex = s.ix;
            var p = 0;
            return 0 !== a && (p = createTypedArray("float32", 1 === s.a ? s.k[0].s.length : s.k.length)), l._cachingAtTime = {
              lastFrame: initialDefaultFrame,
              lastIndex: 0,
              value: p
            }, expressionHelpers.searchExpressions(i, s, l), l.k && h.addDynamicProperty(l), l
          };
          var o = ShapePropertyFactory.getConstructorFunction(),
            h = ShapePropertyFactory.getKeyframedConstructorFunction();

          function l() {}
          l.prototype = {
            vertices: function(t, e) {
              this.k && this.getValue();
              var r, i = this.v;
              void 0 !== e && (i = this.getValueAtTime(e, 0));
              var s = i._length,
                a = i[t],
                n = i.v,
                o = createSizedArray(s);
              for (r = 0; r < s; r += 1) o[r] = "i" === t || "o" === t ? [a[r][0] - n[r][0], a[r][1] - n[r][1]] : [a[r][0], a[r][1]];
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
              for (var i, s = this._segmentsLength, a = s.lengths, n = s.totalLength * t, o = 0, h = a.length, l = 0; o < h;) {
                if (l + a[o].addedLength > n) {
                  var p = o,
                    c = r.c && o === h - 1 ? 0 : o + 1,
                    f = (n - l) / a[o].addedLength;
                  i = bez.getPointInSegment(r.v[p], r.v[c], r.o[p], r.i[c], f, a[o]);
                  break
                }
                l += a[o].addedLength, o += 1
              }
              return i || (i = r.c ? [r.v[0][0], r.v[0][1]] : [r.v[r._length - 1][0], r.v[r._length - 1][1]]), i
            },
            vectorOnPath: function(t, e, r) {
              1 == t ? t = this.v.c : 0 == t && (t = .999);
              var i = this.pointOnPath(t, e),
                s = this.pointOnPath(t + .001, e),
                a = s[0] - i[0],
                n = s[1] - i[1],
                o = Math.sqrt(Math.pow(a, 2) + Math.pow(n, 2));
              return 0 === o ? [0, 0] : "tangent" === r ? [a / o, n / o] : [-n / o, a / o]
            },
            tangentOnPath: function(t, e) {
              return this.vectorOnPath(t, e, "tangent")
            },
            normalOnPath: function(t, e) {
              return this.vectorOnPath(t, e, "normal")
            },
            setGroupProperty: expressionHelpers.setGroupProperty,
            getValueAtTime: expressionHelpers.getStaticValueAtTime
          }, extendPrototype([l], o), extendPrototype([l], h), h.prototype.getValueAtTime = function(t) {
            return this._cachingAtTime || (this._cachingAtTime = {
              shapeValue: shapePool.clone(this.pv),
              lastIndex: 0,
              lastTime: initialDefaultFrame
            }), t *= this.elem.globalData.frameRate, (t -= this.offsetTime) !== this._cachingAtTime.lastTime && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < t ? this._caching.lastIndex : 0, this._cachingAtTime.lastTime = t, this.interpolateShape(t, this._cachingAtTime.shapeValue, this._cachingAtTime)), this._cachingAtTime.shapeValue
          }, h.prototype.initiateExpression = ExpressionManager.initiateExpression;
          var p = ShapePropertyFactory.getShapeProp;
          ShapePropertyFactory.getShapeProp = function(t, e, r, i, s) {
            var a = p(t, e, r, i, s);
            return a.propertyIndex = e.ix, a.lock = !1, 3 === r ? expressionHelpers.searchExpressions(t, e.pt, a) : 4 === r && expressionHelpers.searchExpressions(t, e.ks, a), a.k && t.addDynamicProperty(a), a
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
            var r, i, s = createNS("feMerge");
            for (s.setAttribute("result", t), i = 0; i < e.length; i += 1)(r = createNS("feMergeNode")).setAttribute("in", e[i]), s.appendChild(r), s.appendChild(r);
            return s
          }
        };
        var linearFilterValue = "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0";

        function SVGTintFilter(t, e, r, i, s) {
          this.filterManager = e;
          var a = createNS("feColorMatrix");
          a.setAttribute("type", "matrix"), a.setAttribute("color-interpolation-filters", "linearRGB"), a.setAttribute("values", linearFilterValue + " 1 0"), this.linearFilter = a, a.setAttribute("result", i + "_tint_1"), t.appendChild(a), (a = createNS("feColorMatrix")).setAttribute("type", "matrix"), a.setAttribute("color-interpolation-filters", "sRGB"), a.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), a.setAttribute("result", i + "_tint_2"), t.appendChild(a), this.matrixFilter = a;
          var n = this.createMergeNode(i, [s, i + "_tint_1", i + "_tint_2"]);
          t.appendChild(n)
        }

        function SVGFillFilter(t, e, r, i) {
          this.filterManager = e;
          var s = createNS("feColorMatrix");
          s.setAttribute("type", "matrix"), s.setAttribute("color-interpolation-filters", "sRGB"), s.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), s.setAttribute("result", i), t.appendChild(s), this.matrixFilter = s
        }

        function SVGStrokeEffect(t, e, r) {
          this.initialized = !1, this.filterManager = e, this.elem = r, this.paths = []
        }

        function SVGTritoneFilter(t, e, r, i) {
          this.filterManager = e;
          var s = createNS("feColorMatrix");
          s.setAttribute("type", "matrix"), s.setAttribute("color-interpolation-filters", "linearRGB"), s.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), t.appendChild(s);
          var a = createNS("feComponentTransfer");
          a.setAttribute("color-interpolation-filters", "sRGB"), a.setAttribute("result", i), this.matrixFilter = a;
          var n = createNS("feFuncR");
          n.setAttribute("type", "table"), a.appendChild(n), this.feFuncR = n;
          var o = createNS("feFuncG");
          o.setAttribute("type", "table"), a.appendChild(o), this.feFuncG = o;
          var h = createNS("feFuncB");
          h.setAttribute("type", "table"), a.appendChild(h), this.feFuncB = h, t.appendChild(a)
        }

        function SVGProLevelsFilter(t, e, r, i) {
          this.filterManager = e;
          var s = this.filterManager.effectElements,
            a = createNS("feComponentTransfer");
          (s[10].p.k || 0 !== s[10].p.v || s[11].p.k || 1 !== s[11].p.v || s[12].p.k || 1 !== s[12].p.v || s[13].p.k || 0 !== s[13].p.v || s[14].p.k || 1 !== s[14].p.v) && (this.feFuncR = this.createFeFunc("feFuncR", a)), (s[17].p.k || 0 !== s[17].p.v || s[18].p.k || 1 !== s[18].p.v || s[19].p.k || 1 !== s[19].p.v || s[20].p.k || 0 !== s[20].p.v || s[21].p.k || 1 !== s[21].p.v) && (this.feFuncG = this.createFeFunc("feFuncG", a)), (s[24].p.k || 0 !== s[24].p.v || s[25].p.k || 1 !== s[25].p.v || s[26].p.k || 1 !== s[26].p.v || s[27].p.k || 0 !== s[27].p.v || s[28].p.k || 1 !== s[28].p.v) && (this.feFuncB = this.createFeFunc("feFuncB", a)), (s[31].p.k || 0 !== s[31].p.v || s[32].p.k || 1 !== s[32].p.v || s[33].p.k || 1 !== s[33].p.v || s[34].p.k || 0 !== s[34].p.v || s[35].p.k || 1 !== s[35].p.v) && (this.feFuncA = this.createFeFunc("feFuncA", a)), (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (a.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(a)), (s[3].p.k || 0 !== s[3].p.v || s[4].p.k || 1 !== s[4].p.v || s[5].p.k || 1 !== s[5].p.v || s[6].p.k || 0 !== s[6].p.v || s[7].p.k || 1 !== s[7].p.v) && ((a = createNS("feComponentTransfer")).setAttribute("color-interpolation-filters", "sRGB"), a.setAttribute("result", i), t.appendChild(a), this.feFuncRComposed = this.createFeFunc("feFuncR", a), this.feFuncGComposed = this.createFeFunc("feFuncG", a), this.feFuncBComposed = this.createFeFunc("feFuncB", a))
        }

        function SVGDropShadowEffect(t, e, r, i, s) {
          var a = e.container.globalData.renderConfig.filterSize,
            n = e.data.fs || a;
          t.setAttribute("x", n.x || a.x), t.setAttribute("y", n.y || a.y), t.setAttribute("width", n.width || a.width), t.setAttribute("height", n.height || a.height), this.filterManager = e;
          var o = createNS("feGaussianBlur");
          o.setAttribute("in", "SourceAlpha"), o.setAttribute("result", i + "_drop_shadow_1"), o.setAttribute("stdDeviation", "0"), this.feGaussianBlur = o, t.appendChild(o);
          var h = createNS("feOffset");
          h.setAttribute("dx", "25"), h.setAttribute("dy", "0"), h.setAttribute("in", i + "_drop_shadow_1"), h.setAttribute("result", i + "_drop_shadow_2"), this.feOffset = h, t.appendChild(h);
          var l = createNS("feFlood");
          l.setAttribute("flood-color", "#00ff00"), l.setAttribute("flood-opacity", "1"), l.setAttribute("result", i + "_drop_shadow_3"), this.feFlood = l, t.appendChild(l);
          var p = createNS("feComposite");
          p.setAttribute("in", i + "_drop_shadow_3"), p.setAttribute("in2", i + "_drop_shadow_2"), p.setAttribute("operator", "in"), p.setAttribute("result", i + "_drop_shadow_4"), t.appendChild(p);
          var c = this.createMergeNode(i, [i + "_drop_shadow_4", s]);
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
          var t, e, r, i, s = this.elem.layerElement.children || this.elem.layerElement.childNodes;
          for (1 === this.filterManager.effectElements[1].p.v ? (i = this.elem.maskManager.masksProperties.length, r = 0) : i = 1 + (r = this.filterManager.effectElements[0].p.v - 1), (e = createNS("g")).setAttribute("fill", "none"), e.setAttribute("stroke-linecap", "round"), e.setAttribute("stroke-dashoffset", 1); r < i; r += 1) t = createNS("path"), e.appendChild(t), this.paths.push({
            p: t,
            m: r
          });
          if (3 === this.filterManager.effectElements[10].p.v) {
            var a = createNS("mask"),
              n = createElementID();
            a.setAttribute("id", n), a.setAttribute("mask-type", "alpha"), a.appendChild(e), this.elem.globalData.defs.appendChild(a);
            var o = createNS("g");
            for (o.setAttribute("mask", "url(" + getLocationHref() + "#" + n + ")"); s[0];) o.appendChild(s[0]);
            this.elem.layerElement.appendChild(o), this.masker = a, e.setAttribute("stroke", "#fff")
          } else if (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) {
            if (2 === this.filterManager.effectElements[10].p.v)
              for (s = this.elem.layerElement.children || this.elem.layerElement.childNodes; s.length;) this.elem.layerElement.removeChild(s[0]);
            this.elem.layerElement.appendChild(e), this.elem.layerElement.removeAttribute("mask"), e.setAttribute("stroke", "#fff")
          }
          this.initialized = !0, this.pathMasker = e
        }, SVGStrokeEffect.prototype.renderFrame = function(t) {
          var e;
          this.initialized || this.initialize();
          var r, i, s = this.paths.length;
          for (e = 0; e < s; e += 1)
            if (-1 !== this.paths[e].m && (r = this.elem.maskManager.viewData[this.paths[e].m], i = this.paths[e].p, (t || this.filterManager._mdf || r.prop._mdf) && i.setAttribute("d", r.lastPath), t || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || r.prop._mdf)) {
              var a;
              if (0 !== this.filterManager.effectElements[7].p.v || 100 !== this.filterManager.effectElements[8].p.v) {
                var n = .01 * Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v),
                  o = .01 * Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v),
                  h = i.getTotalLength();
                a = "0 0 0 " + h * n + " ";
                var l, p = h * (o - n),
                  c = 1 + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01,
                  f = Math.floor(p / c);
                for (l = 0; l < f; l += 1) a += "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01 + " ";
                a += "0 " + 10 * h + " 0 0"
              } else a = "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01;
              i.setAttribute("stroke-dasharray", a)
            } if ((t || this.filterManager.effectElements[4].p._mdf) && this.pathMasker.setAttribute("stroke-width", 2 * this.filterManager.effectElements[4].p.v), (t || this.filterManager.effectElements[6].p._mdf) && this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v), (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) && (t || this.filterManager.effectElements[3].p._mdf)) {
            var m = this.filterManager.effectElements[3].p.v;
            this.pathMasker.setAttribute("stroke", "rgb(" + bmFloor(255 * m[0]) + "," + bmFloor(255 * m[1]) + "," + bmFloor(255 * m[2]) + ")")
          }
        }, SVGTritoneFilter.prototype.renderFrame = function(t) {
          if (t || this.filterManager._mdf) {
            var e = this.filterManager.effectElements[0].p.v,
              r = this.filterManager.effectElements[1].p.v,
              i = this.filterManager.effectElements[2].p.v,
              s = i[0] + " " + r[0] + " " + e[0],
              a = i[1] + " " + r[1] + " " + e[1],
              n = i[2] + " " + r[2] + " " + e[2];
            this.feFuncR.setAttribute("tableValues", s), this.feFuncG.setAttribute("tableValues", a), this.feFuncB.setAttribute("tableValues", n)
          }
        }, SVGProLevelsFilter.prototype.createFeFunc = function(t, e) {
          var r = createNS(t);
          return r.setAttribute("type", "table"), e.appendChild(r), r
        }, SVGProLevelsFilter.prototype.getTableValue = function(t, e, r, i, s) {
          for (var a, n, o = 0, h = Math.min(t, e), l = Math.max(t, e), p = Array.call(null, {
              length: 256
            }), c = 0, f = s - i, m = e - t; o <= 256;) n = (a = o / 256) <= h ? m < 0 ? s : i : a >= l ? m < 0 ? i : s : i + f * Math.pow((a - t) / m, 1 / r), p[c] = n, c += 1, o += 256 / 255;
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
                s = r * Math.cos(i),
                a = r * Math.sin(i);
              this.feOffset.setAttribute("dx", s), this.feOffset.setAttribute("dy", a)
            }
          }
        };
        var _svgMatteSymbols = [];

        function SVGMatte3Effect(t, e, r) {
          this.initialized = !1, this.filterManager = e, this.filterElem = t, this.elem = r, r.matteElement = createNS("g"), r.matteElement.appendChild(r.layerElement), r.matteElement.appendChild(r.transformedElement), r.baseElement = r.matteElement
        }

        function SVGGaussianBlurEffect(t, e, r, i) {
          t.setAttribute("x", "-100%"), t.setAttribute("y", "-100%"), t.setAttribute("width", "300%"), t.setAttribute("height", "300%"), this.filterManager = e;
          var s = createNS("feGaussianBlur");
          s.setAttribute("result", i), t.appendChild(s), this.feGaussianBlur = s
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
            for (var i, s = r.children, a = 0, n = s.length; a < n && s[a] !== t.layerElement;) a += 1;
            a <= n - 2 && (i = s[a + 1]);
            var o = createNS("use");
            o.setAttribute("href", "#" + e), i ? r.insertBefore(o, i) : r.appendChild(o)
          }
        }, SVGMatte3Effect.prototype.setElementAsMask = function(t, e) {
          if (!this.findSymbol(e)) {
            var r = createElementID(),
              i = createNS("mask");
            i.setAttribute("id", e.layerId), i.setAttribute("mask-type", "alpha"), _svgMatteSymbols.push(e);
            var s = t.globalData.defs;
            s.appendChild(i);
            var a = createNS("symbol");
            a.setAttribute("id", r), this.replaceInParent(e, r), a.appendChild(e.layerElement), s.appendChild(a);
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
              s = 2 == r ? 0 : e;
            this.feGaussianBlur.setAttribute("stdDeviation", i + " " + s);
            var a = 1 == this.filterManager.effectElements[2].p.v ? "wrap" : "duplicate";
            this.feGaussianBlur.setAttribute("edgeMode", a)
          }
        }, TransformEffect.prototype.init = function(t) {
          this.effectsManager = t, this.type = effectTypes.TRANSFORM_EFFECT, this.matrix = new Matrix, this.opacity = -1, this._mdf = !1, this._opMdf = !1
        }, TransformEffect.prototype.renderFrame = function(t) {
          if (this._opMdf = !1, this._mdf = !1, t || this.effectsManager._mdf) {
            var e = this.effectsManager.effectElements,
              r = e[0].p.v,
              i = e[1].p.v,
              s = 1 === e[2].p.v,
              a = e[3].p.v,
              n = s ? a : e[4].p.v,
              o = e[5].p.v,
              h = e[6].p.v,
              l = e[7].p.v;
            this.matrix.reset(), this.matrix.translate(-r[0], -r[1], r[2]), this.matrix.scale(.01 * n, .01 * a, 1), this.matrix.rotate(-l * degToRads), this.matrix.skewFromAxis(-o * degToRads, (h + 90) * degToRads), this.matrix.translate(i[0], i[1], 0), this._mdf = !0, this.opacity !== e[8].p.v && (this.opacity = e[8].p.v, this._opMdf = !0)
          }
        }, extendPrototype([TransformEffect], SVGTransformEffect), extendPrototype([TransformEffect], CVTransformEffect), registerRenderer("canvas", CanvasRenderer), registerRenderer("html", HybridRenderer), registerRenderer("svg", SVGRenderer), ShapeModifiers.registerModifier("tm", TrimModifier), ShapeModifiers.registerModifier("pb", PuckerAndBloatModifier), ShapeModifiers.registerModifier("rp", RepeaterModifier), ShapeModifiers.registerModifier("rd", RoundCornersModifier), ShapeModifiers.registerModifier("zz", ZigZagModifier), ShapeModifiers.registerModifier("op", OffsetPathModifier), setExpressionsPlugin(Expressions), setExpressionInterfaces(getInterface), initialize$1(), initialize(), registerEffect$1(20, SVGTintFilter, !0), registerEffect$1(21, SVGFillFilter, !0), registerEffect$1(22, SVGStrokeEffect, !1), registerEffect$1(23, SVGTritoneFilter, !0), registerEffect$1(24, SVGProLevelsFilter, !0), registerEffect$1(25, SVGDropShadowEffect, !0), registerEffect$1(28, SVGMatte3Effect, !1), registerEffect$1(29, SVGGaussianBlurEffect, !0), registerEffect$1(35, SVGTransformEffect, !1), registerEffect(35, CVTransformEffect), lottie
      }, module.exports = factory())
    },
    15674: (t, e, r) => {
      "use strict";
      r.d(e, {
        p: () => o
      });
      var i = r(3988);
      class s {
        constructor(t = 4) {
          this.pool = t, this.queue = [], this.workers = [], this.workersResolve = [], this.workerStatus = 0
        }
        _initWorker(t) {
          if (!this.workers[t]) {
            const e = this.workerCreator();
            e.addEventListener("message", this._onMessage.bind(this, t)), this.workers[t] = e
          }
        }
        _getIdleWorker() {
          for (let t = 0; t < this.pool; t++)
            if (!(this.workerStatus & 1 << t)) return t;
          return -1
        }
        _onMessage(t, e) {
          const r = this.workersResolve[t];
          if (r && r(e), this.queue.length) {
            const {
              resolve: e,
              msg: r,
              transfer: i
            } = this.queue.shift();
            this.workersResolve[t] = e, this.workers[t].postMessage(r, i)
          } else this.workerStatus ^= 1 << t
        }
        setWorkerCreator(t) {
          this.workerCreator = t
        }
        setWorkerLimit(t) {
          this.pool = t
        }
        postMessage(t, e) {
          return new Promise((r => {
            const i = this._getIdleWorker(); - 1 !== i ? (this._initWorker(i), this.workerStatus |= 1 << i, this.workersResolve[i] = r, this.workers[i].postMessage(t, e)) : this.queue.push({
              resolve: r,
              msg: t,
              transfer: e
            })
          }))
        }
        dispose() {
          this.workers.forEach((t => t.terminate())), this.workersResolve.length = 0, this.workers.length = 0, this.queue.length = 0, this.workerStatus = 0
        }
      }
      const a = new WeakMap;
      let n = 0;
      class o extends i.Loader {
        constructor(t) {
          super(t), this.transcoderPath = "", this.transcoderBinary = null, this.transcoderPending = null, this.workerPool = new s, this.workerSourceURL = "", this.workerConfig = null, "undefined" != typeof MSC_TRANSCODER && console.warn('THREE.KTX2Loader: Please update to latest "basis_transcoder". "msc_basis_transcoder" is no longer supported in three.js r125+.')
        }
        setTranscoderPath(t) {
          return this.transcoderPath = t, this
        }
        setWorkerLimit(t) {
          return this.workerPool.setWorkerLimit(t), this
        }
        detectSupport(t) {
          return this.workerConfig = {
            astcSupported: t.extensions.has("WEBGL_compressed_texture_astc"),
            etc1Supported: t.extensions.has("WEBGL_compressed_texture_etc1"),
            etc2Supported: t.extensions.has("WEBGL_compressed_texture_etc"),
            dxtSupported: t.extensions.has("WEBGL_compressed_texture_s3tc"),
            bptcSupported: t.extensions.has("EXT_texture_compression_bptc"),
            pvrtcSupported: t.extensions.has("WEBGL_compressed_texture_pvrtc") || t.extensions.has("WEBKIT_WEBGL_compressed_texture_pvrtc")
          }, t.capabilities.isWebGL2 && (this.workerConfig.etc1Supported = !1), this
        }
        init() {
          if (!this.transcoderPending) {
            const t = new i.FileLoader(this.manager);
            t.setPath(this.transcoderPath), t.setWithCredentials(this.withCredentials);
            const e = t.loadAsync("basis_transcoder.js"),
              r = new i.FileLoader(this.manager);
            r.setPath(this.transcoderPath), r.setResponseType("arraybuffer"), r.setWithCredentials(this.withCredentials);
            const s = r.loadAsync("basis_transcoder.wasm");
            this.transcoderPending = Promise.all([e, s]).then((([t, e]) => {
              const r = o.BasisWorker.toString(),
                i = ["/* constants */", "let _EngineFormat = " + JSON.stringify(o.EngineFormat), "let _TranscoderFormat = " + JSON.stringify(o.TranscoderFormat), "let _BasisFormat = " + JSON.stringify(o.BasisFormat), "/* basis_transcoder.js */", t, "/* worker */", r.substring(r.indexOf("{") + 1, r.lastIndexOf("}"))].join("\n");
              this.workerSourceURL = URL.createObjectURL(new Blob([i])), this.transcoderBinary = e, this.workerPool.setWorkerCreator((() => {
                const t = new Worker(this.workerSourceURL),
                  e = this.transcoderBinary.slice(0);
                return t.postMessage({
                  type: "init",
                  config: this.workerConfig,
                  transcoderBinary: e
                }, [e]), t
              }))
            })), n > 0 && console.warn("THREE.KTX2Loader: Multiple active KTX2 loaders may cause performance issues. Use a single KTX2Loader instance, or call .dispose() on old instances."), n++
          }
          return this.transcoderPending
        }
        load(t, e, r, s) {
          if (null === this.workerConfig) throw new Error("THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.");
          const n = new i.FileLoader(this.manager);
          n.setResponseType("arraybuffer"), n.setWithCredentials(this.withCredentials);
          const o = new i.CompressedTexture;
          return n.load(t, (t => {
            if (a.has(t)) return a.get(t).promise.then(e).catch(s);
            this._createTexture([t]).then((function(t) {
              o.copy(t), o.needsUpdate = !0, e && e(o)
            })).catch(s)
          }), r, s), o
        }
        _createTextureFrom(t) {
          const {
            mipmaps: e,
            width: r,
            height: s,
            format: a,
            type: n,
            error: o,
            dfdTransferFn: h,
            dfdFlags: l
          } = t;
          if ("error" === n) return Promise.reject(o);
          const p = new i.CompressedTexture(e, r, s, a, i.UnsignedByteType);
          return p.minFilter = 1 === e.length ? i.LinearFilter : i.LinearMipmapLinearFilter, p.magFilter = i.LinearFilter, p.generateMipmaps = !1, p.needsUpdate = !0, p.encoding = 2 === h ? i.sRGBEncoding : i.LinearEncoding, p.premultiplyAlpha = !!(1 & l), p
        }
        _createTexture(t, e = {}) {
          const r = e,
            i = this.init().then((() => this.workerPool.postMessage({
              type: "transcode",
              buffers: t,
              taskConfig: r
            }, t))).then((t => this._createTextureFrom(t.data)));
          return a.set(t[0], {
            promise: i
          }), i
        }
        dispose() {
          return this.workerPool.dispose(), this.workerSourceURL && URL.revokeObjectURL(this.workerSourceURL), n--, this
        }
      }
      o.BasisFormat = {
        ETC1S: 0,
        UASTC_4x4: 1
      }, o.TranscoderFormat = {
        ETC1: 0,
        ETC2: 1,
        BC1: 2,
        BC3: 3,
        BC4: 4,
        BC5: 5,
        BC7_M6_OPAQUE_ONLY: 6,
        BC7_M5: 7,
        PVRTC1_4_RGB: 8,
        PVRTC1_4_RGBA: 9,
        ASTC_4x4: 10,
        ATC_RGB: 11,
        ATC_RGBA_INTERPOLATED_ALPHA: 12,
        RGBA32: 13,
        RGB565: 14,
        BGR565: 15,
        RGBA4444: 16
      }, o.EngineFormat = {
        RGBAFormat: i.RGBAFormat,
        RGBA_ASTC_4x4_Format: i.RGBA_ASTC_4x4_Format,
        RGBA_BPTC_Format: i.RGBA_BPTC_Format,
        RGBA_ETC2_EAC_Format: i.RGBA_ETC2_EAC_Format,
        RGBA_PVRTC_4BPPV1_Format: i.RGBA_PVRTC_4BPPV1_Format,
        RGBA_S3TC_DXT5_Format: i.RGBA_S3TC_DXT5_Format,
        RGB_ETC1_Format: i.RGB_ETC1_Format,
        RGB_ETC2_Format: i.RGB_ETC2_Format,
        RGB_PVRTC_4BPPV1_Format: i.RGB_PVRTC_4BPPV1_Format,
        RGB_S3TC_DXT1_Format: i.RGB_S3TC_DXT1_Format
      }, o.BasisWorker = function() {
        let t, e, r;
        const i = _EngineFormat,
          s = _TranscoderFormat,
          a = _BasisFormat;
        self.addEventListener("message", (function(n) {
          const p = n.data;
          switch (p.type) {
            case "init":
              t = p.config, c = p.transcoderBinary, e = new Promise((t => {
                r = {
                  wasmBinary: c,
                  onRuntimeInitialized: t
                }, BASIS(r)
              })).then((() => {
                r.initializeBasis(), void 0 === r.KTX2File && console.warn("THREE.KTX2Loader: Please update Basis Universal transcoder.")
              }));
              break;
            case "transcode":
              e.then((() => {
                try {
                  const {
                    width: e,
                    height: n,
                    hasAlpha: c,
                    mipmaps: f,
                    format: m,
                    dfdTransferFn: u,
                    dfdFlags: d
                  } = function(e) {
                    const n = new r.KTX2File(new Uint8Array(e));

                    function p() {
                      n.close(), n.delete()
                    }
                    if (!n.isValid()) throw p(), new Error("THREE.KTX2Loader:\tInvalid or unsupported .ktx2 file");
                    const c = n.isUASTC() ? a.UASTC_4x4 : a.ETC1S,
                      f = n.getWidth(),
                      m = n.getHeight(),
                      u = n.getLevels(),
                      d = n.getHasAlpha(),
                      g = n.getDFDTransferFunc(),
                      y = n.getDFDFlags(),
                      {
                        transcoderFormat: v,
                        engineFormat: b
                      } = function(e, r, n, p) {
                        let c, f;
                        const m = e === a.ETC1S ? o : h;
                        for (let i = 0; i < m.length; i++) {
                          const s = m[i];
                          if (t[s.if] && s.basisFormat.includes(e) && !(p && s.transcoderFormat.length < 2) && (!s.needsPowerOfTwo || l(r) && l(n))) return c = s.transcoderFormat[p ? 1 : 0], f = s.engineFormat[p ? 1 : 0], {
                            transcoderFormat: c,
                            engineFormat: f
                          }
                        }
                        return console.warn("THREE.KTX2Loader: No suitable compressed texture format found. Decoding to RGBA32."), c = s.RGBA32, f = i.RGBAFormat, {
                          transcoderFormat: c,
                          engineFormat: f
                        }
                      }(c, f, m, d);
                    if (!f || !m || !u) throw p(), new Error("THREE.KTX2Loader:\tInvalid texture");
                    if (!n.startTranscoding()) throw p(), new Error("THREE.KTX2Loader: .startTranscoding failed");
                    const x = [];
                    for (let t = 0; t < u; t++) {
                      const e = n.getImageLevelInfo(t, 0, 0),
                        r = e.origWidth,
                        i = e.origHeight,
                        s = new Uint8Array(n.getImageTranscodedSizeInBytes(t, 0, 0, v));
                      if (!n.transcodeImage(s, t, 0, 0, v, 0, -1, -1)) throw p(), new Error("THREE.KTX2Loader: .transcodeImage failed.");
                      x.push({
                        data: s,
                        width: r,
                        height: i
                      })
                    }
                    return p(), {
                      width: f,
                      height: m,
                      hasAlpha: d,
                      mipmaps: x,
                      format: b,
                      dfdTransferFn: g,
                      dfdFlags: y
                    }
                  }(p.buffers[0]), g = [];
                  for (let t = 0; t < f.length; ++t) g.push(f[t].data.buffer);
                  self.postMessage({
                    type: "transcode",
                    id: p.id,
                    width: e,
                    height: n,
                    hasAlpha: c,
                    mipmaps: f,
                    format: m,
                    dfdTransferFn: u,
                    dfdFlags: d
                  }, g)
                } catch (t) {
                  console.error(t), self.postMessage({
                    type: "error",
                    id: p.id,
                    error: t.message
                  })
                }
              }))
          }
          var c
        }));
        const n = [{
            if: "astcSupported",
            basisFormat: [a.UASTC_4x4],
            transcoderFormat: [s.ASTC_4x4, s.ASTC_4x4],
            engineFormat: [i.RGBA_ASTC_4x4_Format, i.RGBA_ASTC_4x4_Format],
            priorityETC1S: 1 / 0,
            priorityUASTC: 1,
            needsPowerOfTwo: !1
          }, {
            if: "bptcSupported",
            basisFormat: [a.ETC1S, a.UASTC_4x4],
            transcoderFormat: [s.BC7_M5, s.BC7_M5],
            engineFormat: [i.RGBA_BPTC_Format, i.RGBA_BPTC_Format],
            priorityETC1S: 3,
            priorityUASTC: 2,
            needsPowerOfTwo: !1
          }, {
            if: "dxtSupported",
            basisFormat: [a.ETC1S, a.UASTC_4x4],
            transcoderFormat: [s.BC1, s.BC3],
            engineFormat: [i.RGB_S3TC_DXT1_Format, i.RGBA_S3TC_DXT5_Format],
            priorityETC1S: 4,
            priorityUASTC: 5,
            needsPowerOfTwo: !1
          }, {
            if: "etc2Supported",
            basisFormat: [a.ETC1S, a.UASTC_4x4],
            transcoderFormat: [s.ETC1, s.ETC2],
            engineFormat: [i.RGB_ETC2_Format, i.RGBA_ETC2_EAC_Format],
            priorityETC1S: 1,
            priorityUASTC: 3,
            needsPowerOfTwo: !1
          }, {
            if: "etc1Supported",
            basisFormat: [a.ETC1S, a.UASTC_4x4],
            transcoderFormat: [s.ETC1],
            engineFormat: [i.RGB_ETC1_Format],
            priorityETC1S: 2,
            priorityUASTC: 4,
            needsPowerOfTwo: !1
          }, {
            if: "pvrtcSupported",
            basisFormat: [a.ETC1S, a.UASTC_4x4],
            transcoderFormat: [s.PVRTC1_4_RGB, s.PVRTC1_4_RGBA],
            engineFormat: [i.RGB_PVRTC_4BPPV1_Format, i.RGBA_PVRTC_4BPPV1_Format],
            priorityETC1S: 5,
            priorityUASTC: 6,
            needsPowerOfTwo: !0
          }],
          o = n.sort((function(t, e) {
            return t.priorityETC1S - e.priorityETC1S
          })),
          h = n.sort((function(t, e) {
            return t.priorityUASTC - e.priorityUASTC
          }));

        function l(t) {
          return t <= 2 || !(t & t - 1) && 0 !== t
        }
      }
    },
    19588: (t, e, r) => {
      "use strict";
      r.d(e, {
        N: () => o
      });
      var i = r(3988);
      const s = {
          type: "change"
        },
        a = {
          type: "start"
        },
        n = {
          type: "end"
        };
      class o extends i.EventDispatcher {
        constructor(t, e) {
          super(), void 0 === e && console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'), e === document && console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'), this.object = t, this.domElement = e, this.domElement.style.touchAction = "none", this.enabled = !0, this.target = new i.Vector3, this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = .05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = {
            LEFT: "ArrowLeft",
            UP: "ArrowUp",
            RIGHT: "ArrowRight",
            BOTTOM: "ArrowDown"
          }, this.mouseButtons = {
            LEFT: i.MOUSE.ROTATE,
            MIDDLE: i.MOUSE.DOLLY,
            RIGHT: i.MOUSE.PAN
          }, this.touches = {
            ONE: i.TOUCH.ROTATE,
            TWO: i.TOUCH.DOLLY_PAN
          }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this.getPolarAngle = function() {
            return p.phi
          }, this.getAzimuthalAngle = function() {
            return p.theta
          }, this.getDistance = function() {
            return this.object.position.distanceTo(this.target)
          }, this.listenToKeyEvents = function(t) {
            t.addEventListener("keydown", K), this._domElementKeyEvents = t
          }, this.saveState = function() {
            r.target0.copy(r.target), r.position0.copy(r.object.position), r.zoom0 = r.object.zoom
          }, this.reset = function() {
            r.target.copy(r.target0), r.object.position.copy(r.position0), r.object.zoom = r.zoom0, r.object.updateProjectionMatrix(), r.dispatchEvent(s), r.update(), h = o.NONE
          }, this.update = function() {
            const e = new i.Vector3,
              a = (new i.Quaternion).setFromUnitVectors(t.up, new i.Vector3(0, 1, 0)),
              n = a.clone().invert(),
              d = new i.Vector3,
              g = new i.Quaternion,
              y = 2 * Math.PI;
            return function() {
              const t = r.object.position;
              e.copy(t).sub(r.target), e.applyQuaternion(a), p.setFromVector3(e), r.autoRotate && h === o.NONE && A(2 * Math.PI / 60 / 60 * r.autoRotateSpeed), r.enableDamping ? (p.theta += c.theta * r.dampingFactor, p.phi += c.phi * r.dampingFactor) : (p.theta += c.theta, p.phi += c.phi);
              let i = r.minAzimuthAngle,
                v = r.maxAzimuthAngle;
              return isFinite(i) && isFinite(v) && (i < -Math.PI ? i += y : i > Math.PI && (i -= y), v < -Math.PI ? v += y : v > Math.PI && (v -= y), p.theta = i <= v ? Math.max(i, Math.min(v, p.theta)) : p.theta > (i + v) / 2 ? Math.max(i, p.theta) : Math.min(v, p.theta)), p.phi = Math.max(r.minPolarAngle, Math.min(r.maxPolarAngle, p.phi)), p.makeSafe(), p.radius *= f, p.radius = Math.max(r.minDistance, Math.min(r.maxDistance, p.radius)), !0 === r.enableDamping ? r.target.addScaledVector(m, r.dampingFactor) : r.target.add(m), e.setFromSpherical(p), e.applyQuaternion(n), t.copy(r.target).add(e), r.object.lookAt(r.target), !0 === r.enableDamping ? (c.theta *= 1 - r.dampingFactor, c.phi *= 1 - r.dampingFactor, m.multiplyScalar(1 - r.dampingFactor)) : (c.set(0, 0, 0), m.set(0, 0, 0)), f = 1, !!(u || d.distanceToSquared(r.object.position) > l || 8 * (1 - g.dot(r.object.quaternion)) > l) && (r.dispatchEvent(s), d.copy(r.object.position), g.copy(r.object.quaternion), u = !1, !0)
            }
          }(), this.dispose = function() {
            r.domElement.removeEventListener("contextmenu", X), r.domElement.removeEventListener("pointerdown", H), r.domElement.removeEventListener("pointercancel", q), r.domElement.removeEventListener("wheel", W), r.domElement.removeEventListener("pointermove", j), r.domElement.removeEventListener("pointerup", U), null !== r._domElementKeyEvents && r._domElementKeyEvents.removeEventListener("keydown", K)
          };
          const r = this,
            o = {
              NONE: -1,
              ROTATE: 0,
              DOLLY: 1,
              PAN: 2,
              TOUCH_ROTATE: 3,
              TOUCH_PAN: 4,
              TOUCH_DOLLY_PAN: 5,
              TOUCH_DOLLY_ROTATE: 6
            };
          let h = o.NONE;
          const l = 1e-6,
            p = new i.Spherical,
            c = new i.Spherical;
          let f = 1;
          const m = new i.Vector3;
          let u = !1;
          const d = new i.Vector2,
            g = new i.Vector2,
            y = new i.Vector2,
            v = new i.Vector2,
            b = new i.Vector2,
            x = new i.Vector2,
            E = new i.Vector2,
            S = new i.Vector2,
            P = new i.Vector2,
            T = [],
            _ = {};

          function C() {
            return Math.pow(.95, r.zoomSpeed)
          }

          function A(t) {
            c.theta -= t
          }

          function M(t) {
            c.phi -= t
          }
          const w = function() {
              const t = new i.Vector3;
              return function(e, r) {
                t.setFromMatrixColumn(r, 0), t.multiplyScalar(-e), m.add(t)
              }
            }(),
            k = function() {
              const t = new i.Vector3;
              return function(e, i) {
                !0 === r.screenSpacePanning ? t.setFromMatrixColumn(i, 1) : (t.setFromMatrixColumn(i, 0), t.crossVectors(r.object.up, t)), t.multiplyScalar(e), m.add(t)
              }
            }(),
            D = function() {
              const t = new i.Vector3;
              return function(e, i) {
                const s = r.domElement;
                if (r.object.isPerspectiveCamera) {
                  const a = r.object.position;
                  t.copy(a).sub(r.target);
                  let n = t.length();
                  n *= Math.tan(r.object.fov / 2 * Math.PI / 180), w(2 * e * n / s.clientHeight, r.object.matrix), k(2 * i * n / s.clientHeight, r.object.matrix)
                } else r.object.isOrthographicCamera ? (w(e * (r.object.right - r.object.left) / r.object.zoom / s.clientWidth, r.object.matrix), k(i * (r.object.top - r.object.bottom) / r.object.zoom / s.clientHeight, r.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), r.enablePan = !1)
              }
            }();

          function F(t) {
            r.object.isPerspectiveCamera ? f /= t : r.object.isOrthographicCamera ? (r.object.zoom = Math.max(r.minZoom, Math.min(r.maxZoom, r.object.zoom * t)), r.object.updateProjectionMatrix(), u = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), r.enableZoom = !1)
          }

          function I(t) {
            r.object.isPerspectiveCamera ? f *= t : r.object.isOrthographicCamera ? (r.object.zoom = Math.max(r.minZoom, Math.min(r.maxZoom, r.object.zoom / t)), r.object.updateProjectionMatrix(), u = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), r.enableZoom = !1)
          }

          function R(t) {
            d.set(t.clientX, t.clientY)
          }

          function L(t) {
            v.set(t.clientX, t.clientY)
          }

          function B() {
            if (1 === T.length) d.set(T[0].pageX, T[0].pageY);
            else {
              const t = .5 * (T[0].pageX + T[1].pageX),
                e = .5 * (T[0].pageY + T[1].pageY);
              d.set(t, e)
            }
          }

          function V() {
            if (1 === T.length) v.set(T[0].pageX, T[0].pageY);
            else {
              const t = .5 * (T[0].pageX + T[1].pageX),
                e = .5 * (T[0].pageY + T[1].pageY);
              v.set(t, e)
            }
          }

          function O() {
            const t = T[0].pageX - T[1].pageX,
              e = T[0].pageY - T[1].pageY,
              r = Math.sqrt(t * t + e * e);
            E.set(0, r)
          }

          function G(t) {
            if (1 == T.length) g.set(t.pageX, t.pageY);
            else {
              const e = Z(t),
                r = .5 * (t.pageX + e.x),
                i = .5 * (t.pageY + e.y);
              g.set(r, i)
            }
            y.subVectors(g, d).multiplyScalar(r.rotateSpeed);
            const e = r.domElement;
            A(2 * Math.PI * y.x / e.clientHeight), M(2 * Math.PI * y.y / e.clientHeight), d.copy(g)
          }

          function N(t) {
            if (1 === T.length) b.set(t.pageX, t.pageY);
            else {
              const e = Z(t),
                r = .5 * (t.pageX + e.x),
                i = .5 * (t.pageY + e.y);
              b.set(r, i)
            }
            x.subVectors(b, v).multiplyScalar(r.panSpeed), D(x.x, x.y), v.copy(b)
          }

          function z(t) {
            const e = Z(t),
              i = t.pageX - e.x,
              s = t.pageY - e.y,
              a = Math.sqrt(i * i + s * s);
            S.set(0, a), P.set(0, Math.pow(S.y / E.y, r.zoomSpeed)), F(P.y), E.copy(S)
          }

          function H(t) {
            !1 !== r.enabled && (0 === T.length && (r.domElement.setPointerCapture(t.pointerId), r.domElement.addEventListener("pointermove", j), r.domElement.addEventListener("pointerup", U)), function(t) {
              T.push(t)
            }(t), "touch" === t.pointerType ? function(t) {
              switch ($(t), T.length) {
                case 1:
                  switch (r.touches.ONE) {
                    case i.TOUCH.ROTATE:
                      if (!1 === r.enableRotate) return;
                      B(), h = o.TOUCH_ROTATE;
                      break;
                    case i.TOUCH.PAN:
                      if (!1 === r.enablePan) return;
                      V(), h = o.TOUCH_PAN;
                      break;
                    default:
                      h = o.NONE
                  }
                  break;
                case 2:
                  switch (r.touches.TWO) {
                    case i.TOUCH.DOLLY_PAN:
                      if (!1 === r.enableZoom && !1 === r.enablePan) return;
                      r.enableZoom && O(), r.enablePan && V(), h = o.TOUCH_DOLLY_PAN;
                      break;
                    case i.TOUCH.DOLLY_ROTATE:
                      if (!1 === r.enableZoom && !1 === r.enableRotate) return;
                      r.enableZoom && O(), r.enableRotate && B(), h = o.TOUCH_DOLLY_ROTATE;
                      break;
                    default:
                      h = o.NONE
                  }
                  break;
                default:
                  h = o.NONE
              }
              h !== o.NONE && r.dispatchEvent(a)
            }(t) : function(t) {
              let e;
              switch (t.button) {
                case 0:
                  e = r.mouseButtons.LEFT;
                  break;
                case 1:
                  e = r.mouseButtons.MIDDLE;
                  break;
                case 2:
                  e = r.mouseButtons.RIGHT;
                  break;
                default:
                  e = -1
              }
              switch (e) {
                case i.MOUSE.DOLLY:
                  if (!1 === r.enableZoom) return;
                  ! function(t) {
                    E.set(t.clientX, t.clientY)
                  }(t), h = o.DOLLY;
                  break;
                case i.MOUSE.ROTATE:
                  if (t.ctrlKey || t.metaKey || t.shiftKey) {
                    if (!1 === r.enablePan) return;
                    L(t), h = o.PAN
                  } else {
                    if (!1 === r.enableRotate) return;
                    R(t), h = o.ROTATE
                  }
                  break;
                case i.MOUSE.PAN:
                  if (t.ctrlKey || t.metaKey || t.shiftKey) {
                    if (!1 === r.enableRotate) return;
                    R(t), h = o.ROTATE
                  } else {
                    if (!1 === r.enablePan) return;
                    L(t), h = o.PAN
                  }
                  break;
                default:
                  h = o.NONE
              }
              h !== o.NONE && r.dispatchEvent(a)
            }(t))
          }

          function j(t) {
            !1 !== r.enabled && ("touch" === t.pointerType ? function(t) {
              switch ($(t), h) {
                case o.TOUCH_ROTATE:
                  if (!1 === r.enableRotate) return;
                  G(t), r.update();
                  break;
                case o.TOUCH_PAN:
                  if (!1 === r.enablePan) return;
                  N(t), r.update();
                  break;
                case o.TOUCH_DOLLY_PAN:
                  if (!1 === r.enableZoom && !1 === r.enablePan) return;
                  ! function(t) {
                    r.enableZoom && z(t), r.enablePan && N(t)
                  }(t), r.update();
                  break;
                case o.TOUCH_DOLLY_ROTATE:
                  if (!1 === r.enableZoom && !1 === r.enableRotate) return;
                  ! function(t) {
                    r.enableZoom && z(t), r.enableRotate && G(t)
                  }(t), r.update();
                  break;
                default:
                  h = o.NONE
              }
            }(t) : function(t) {
              if (!1 !== r.enabled) switch (h) {
                case o.ROTATE:
                  if (!1 === r.enableRotate) return;
                  ! function(t) {
                    g.set(t.clientX, t.clientY), y.subVectors(g, d).multiplyScalar(r.rotateSpeed);
                    const e = r.domElement;
                    A(2 * Math.PI * y.x / e.clientHeight), M(2 * Math.PI * y.y / e.clientHeight), d.copy(g), r.update()
                  }(t);
                  break;
                case o.DOLLY:
                  if (!1 === r.enableZoom) return;
                  ! function(t) {
                    S.set(t.clientX, t.clientY), P.subVectors(S, E), P.y > 0 ? F(C()) : P.y < 0 && I(C()), E.copy(S), r.update()
                  }(t);
                  break;
                case o.PAN:
                  if (!1 === r.enablePan) return;
                  ! function(t) {
                    b.set(t.clientX, t.clientY), x.subVectors(b, v).multiplyScalar(r.panSpeed), D(x.x, x.y), v.copy(b), r.update()
                  }(t)
              }
            }(t))
          }

          function U(t) {
            Y(t), 0 === T.length && (r.domElement.releasePointerCapture(t.pointerId), r.domElement.removeEventListener("pointermove", j), r.domElement.removeEventListener("pointerup", U)), r.dispatchEvent(n), h = o.NONE
          }

          function q(t) {
            Y(t)
          }

          function W(t) {
            !1 !== r.enabled && !1 !== r.enableZoom && h === o.NONE && (t.preventDefault(), r.dispatchEvent(a), function(t) {
              t.deltaY < 0 ? I(C()) : t.deltaY > 0 && F(C()), r.update()
            }(t), r.dispatchEvent(n))
          }

          function K(t) {
            !1 !== r.enabled && !1 !== r.enablePan && function(t) {
              let e = !1;
              switch (t.code) {
                case r.keys.UP:
                  D(0, r.keyPanSpeed), e = !0;
                  break;
                case r.keys.BOTTOM:
                  D(0, -r.keyPanSpeed), e = !0;
                  break;
                case r.keys.LEFT:
                  D(r.keyPanSpeed, 0), e = !0;
                  break;
                case r.keys.RIGHT:
                  D(-r.keyPanSpeed, 0), e = !0
              }
              e && (t.preventDefault(), r.update())
            }(t)
          }

          function X(t) {
            !1 !== r.enabled && t.preventDefault()
          }

          function Y(t) {
            delete _[t.pointerId];
            for (let e = 0; e < T.length; e++)
              if (T[e].pointerId == t.pointerId) return void T.splice(e, 1)
          }

          function $(t) {
            let e = _[t.pointerId];
            void 0 === e && (e = new i.Vector2, _[t.pointerId] = e), e.set(t.pageX, t.pageY)
          }

          function Z(t) {
            const e = t.pointerId === T[0].pointerId ? T[1] : T[0];
            return _[e.pointerId]
          }
          r.domElement.addEventListener("contextmenu", X), r.domElement.addEventListener("pointerdown", H), r.domElement.addEventListener("pointercancel", q), r.domElement.addEventListener("wheel", W, {
            passive: !1
          }), this.update()
        }
      }
    },
    31932: (t, e, r) => {
      "use strict";
      r.d(e, {
        Z: () => a
      });
      var i = r(3988);
      const s = new WeakMap;
      class a extends i.Loader {
        constructor(t) {
          super(t), this.decoderPath = "", this.decoderConfig = {}, this.decoderBinary = null, this.decoderPending = null, this.workerLimit = 4, this.workerPool = [], this.workerNextTaskID = 1, this.workerSourceURL = "", this.defaultAttributeIDs = {
            position: "POSITION",
            normal: "NORMAL",
            color: "COLOR",
            uv: "TEX_COORD"
          }, this.defaultAttributeTypes = {
            position: "Float32Array",
            normal: "Float32Array",
            color: "Float32Array",
            uv: "Float32Array"
          }
        }
        setDecoderPath(t) {
          return this.decoderPath = t, this
        }
        setDecoderConfig(t) {
          return this.decoderConfig = t, this
        }
        setWorkerLimit(t) {
          return this.workerLimit = t, this
        }
        load(t, e, r, s) {
          const a = new i.FileLoader(this.manager);
          a.setPath(this.path), a.setResponseType("arraybuffer"), a.setRequestHeader(this.requestHeader), a.setWithCredentials(this.withCredentials), a.load(t, (t => {
            const r = {
              attributeIDs: this.defaultAttributeIDs,
              attributeTypes: this.defaultAttributeTypes,
              useUniqueIDs: !1
            };
            this.decodeGeometry(t, r).then(e).catch(s)
          }), r, s)
        }
        decodeDracoFile(t, e, r, i) {
          const s = {
            attributeIDs: r || this.defaultAttributeIDs,
            attributeTypes: i || this.defaultAttributeTypes,
            useUniqueIDs: !!r
          };
          this.decodeGeometry(t, s).then(e)
        }
        decodeGeometry(t, e) {
          for (const t in e.attributeTypes) {
            const r = e.attributeTypes[t];
            void 0 !== r.BYTES_PER_ELEMENT && (e.attributeTypes[t] = r.name)
          }
          const r = JSON.stringify(e);
          if (s.has(t)) {
            const e = s.get(t);
            if (e.key === r) return e.promise;
            if (0 === t.byteLength) throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")
          }
          let i;
          const a = this.workerNextTaskID++,
            n = t.byteLength,
            o = this._getWorker(a, n).then((r => (i = r, new Promise(((r, s) => {
              i._callbacks[a] = {
                resolve: r,
                reject: s
              }, i.postMessage({
                type: "decode",
                id: a,
                taskConfig: e,
                buffer: t
              }, [t])
            }))))).then((t => this._createGeometry(t.geometry)));
          return o.catch((() => !0)).then((() => {
            i && a && this._releaseTask(i, a)
          })), s.set(t, {
            key: r,
            promise: o
          }), o
        }
        _createGeometry(t) {
          const e = new i.BufferGeometry;
          t.index && e.setIndex(new i.BufferAttribute(t.index.array, 1));
          for (let r = 0; r < t.attributes.length; r++) {
            const s = t.attributes[r],
              a = s.name,
              n = s.array,
              o = s.itemSize;
            e.setAttribute(a, new i.BufferAttribute(n, o))
          }
          return e
        }
        _loadLibrary(t, e) {
          const r = new i.FileLoader(this.manager);
          return r.setPath(this.decoderPath), r.setResponseType(e), r.setWithCredentials(this.withCredentials), new Promise(((e, i) => {
            r.load(t, e, void 0, i)
          }))
        }
        preload() {
          return this._initDecoder(), this
        }
        _initDecoder() {
          if (this.decoderPending) return this.decoderPending;
          const t = "object" != typeof WebAssembly || "js" === this.decoderConfig.type,
            e = [];
          return t ? e.push(this._loadLibrary("draco_decoder.js", "text")) : (e.push(this._loadLibrary("draco_wasm_wrapper.js", "text")), e.push(this._loadLibrary("draco_decoder.wasm", "arraybuffer"))), this.decoderPending = Promise.all(e).then((e => {
            const r = e[0];
            t || (this.decoderConfig.wasmBinary = e[1]);
            const i = n.toString(),
              s = ["/* draco decoder */", r, "", "/* worker */", i.substring(i.indexOf("{") + 1, i.lastIndexOf("}"))].join("\n");
            this.workerSourceURL = URL.createObjectURL(new Blob([s]))
          })), this.decoderPending
        }
        _getWorker(t, e) {
          return this._initDecoder().then((() => {
            if (this.workerPool.length < this.workerLimit) {
              const t = new Worker(this.workerSourceURL);
              t._callbacks = {}, t._taskCosts = {}, t._taskLoad = 0, t.postMessage({
                type: "init",
                decoderConfig: this.decoderConfig
              }), t.onmessage = function(e) {
                const r = e.data;
                switch (r.type) {
                  case "decode":
                    t._callbacks[r.id].resolve(r);
                    break;
                  case "error":
                    t._callbacks[r.id].reject(r);
                    break;
                  default:
                    console.error('THREE.DRACOLoader: Unexpected message, "' + r.type + '"')
                }
              }, this.workerPool.push(t)
            } else this.workerPool.sort((function(t, e) {
              return t._taskLoad > e._taskLoad ? -1 : 1
            }));
            const r = this.workerPool[this.workerPool.length - 1];
            return r._taskCosts[t] = e, r._taskLoad += e, r
          }))
        }
        _releaseTask(t, e) {
          t._taskLoad -= t._taskCosts[e], delete t._callbacks[e], delete t._taskCosts[e]
        }
        debug() {
          console.log("Task load: ", this.workerPool.map((t => t._taskLoad)))
        }
        dispose() {
          for (let t = 0; t < this.workerPool.length; ++t) this.workerPool[t].terminate();
          return this.workerPool.length = 0, this
        }
      }

      function n() {
        let t, e;

        function r(t, e, r, i, s, a) {
          const n = a.num_components(),
            o = r.num_points() * n,
            h = o * s.BYTES_PER_ELEMENT,
            l = function(t, e) {
              switch (e) {
                case Float32Array:
                  return t.DT_FLOAT32;
                case Int8Array:
                  return t.DT_INT8;
                case Int16Array:
                  return t.DT_INT16;
                case Int32Array:
                  return t.DT_INT32;
                case Uint8Array:
                  return t.DT_UINT8;
                case Uint16Array:
                  return t.DT_UINT16;
                case Uint32Array:
                  return t.DT_UINT32
              }
            }(t, s),
            p = t._malloc(h);
          e.GetAttributeDataArrayForAllPoints(r, a, l, h, p);
          const c = new s(t.HEAPF32.buffer, p, o).slice();
          return t._free(p), {
            name: i,
            array: c,
            itemSize: n
          }
        }
        onmessage = function(i) {
          const s = i.data;
          switch (s.type) {
            case "init":
              t = s.decoderConfig, e = new Promise((function(e) {
                t.onModuleLoaded = function(t) {
                  e({
                    draco: t
                  })
                }, DracoDecoderModule(t)
              }));
              break;
            case "decode":
              const i = s.buffer,
                a = s.taskConfig;
              e.then((t => {
                const e = t.draco,
                  n = new e.Decoder,
                  o = new e.DecoderBuffer;
                o.Init(new Int8Array(i), i.byteLength);
                try {
                  const t = function(t, e, i, s) {
                      const a = s.attributeIDs,
                        n = s.attributeTypes;
                      let o, h;
                      const l = e.GetEncodedGeometryType(i);
                      if (l === t.TRIANGULAR_MESH) o = new t.Mesh, h = e.DecodeBufferToMesh(i, o);
                      else {
                        if (l !== t.POINT_CLOUD) throw new Error("THREE.DRACOLoader: Unexpected geometry type.");
                        o = new t.PointCloud, h = e.DecodeBufferToPointCloud(i, o)
                      }
                      if (!h.ok() || 0 === o.ptr) throw new Error("THREE.DRACOLoader: Decoding failed: " + h.error_msg());
                      const p = {
                        index: null,
                        attributes: []
                      };
                      for (const i in a) {
                        const h = self[n[i]];
                        let l, c;
                        if (s.useUniqueIDs) c = a[i], l = e.GetAttributeByUniqueId(o, c);
                        else {
                          if (c = e.GetAttributeId(o, t[a[i]]), -1 === c) continue;
                          l = e.GetAttribute(o, c)
                        }
                        p.attributes.push(r(t, e, o, i, h, l))
                      }
                      return l === t.TRIANGULAR_MESH && (p.index = function(t, e, r) {
                        const i = 3 * r.num_faces(),
                          s = 4 * i,
                          a = t._malloc(s);
                        e.GetTrianglesUInt32Array(r, s, a);
                        const n = new Uint32Array(t.HEAPF32.buffer, a, i).slice();
                        return t._free(a), {
                          array: n,
                          itemSize: 1
                        }
                      }(t, e, o)), t.destroy(o), p
                    }(e, n, o, a),
                    i = t.attributes.map((t => t.array.buffer));
                  t.index && i.push(t.index.array.buffer), self.postMessage({
                    type: "decode",
                    id: s.id,
                    geometry: t
                  }, i)
                } catch (t) {
                  console.error(t), self.postMessage({
                    type: "error",
                    id: s.id,
                    error: t.message
                  })
                } finally {
                  e.destroy(o), e.destroy(n)
                }
              }))
          }
        }
      }
    },
    34045: function(t, e, r) {
      ! function(t, e, r) {
        "use strict";

        function i(t) {
          return t && "object" == typeof t && "default" in t ? t : {
            default: t
          }
        }
        var s = i(e),
          a = i(r);

        function n(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var r = 0, i = Array(e); r < e; r++) i[r] = t[r];
          return i
        }

        function o(t, e, r) {
          return (e = function(t) {
            var e = function(t, e) {
              if ("object" != typeof t || !t) return t;
              var r = t[Symbol.toPrimitive];
              if (void 0 !== r) {
                var i = r.call(t, e || "default");
                if ("object" != typeof i) return i;
                throw new TypeError("@@toPrimitive must return a primitive value.")
              }
              return ("string" === e ? String : Number)(t)
            }(t, "string");
            return "symbol" == typeof e ? e : e + ""
          }(e)) in t ? Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : t[e] = r, t
        }

        function h(t, e) {
          var r = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(t);
            e && (i = i.filter((function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), r.push.apply(r, i)
          }
          return r
        }

        function l(t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2 ? h(Object(r), !0).forEach((function(e) {
              o(t, e, r[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : h(Object(r)).forEach((function(e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
            }))
          }
          return t
        }

        function p(t, e) {
          if (null == t) return {};
          var r, i, s = function(t, e) {
            if (null == t) return {};
            var r = {};
            for (var i in t)
              if ({}.hasOwnProperty.call(t, i)) {
                if (e.includes(i)) continue;
                r[i] = t[i]
              } return r
          }(t, e);
          if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(t);
            for (i = 0; i < a.length; i++) r = a[i], e.includes(r) || {}.propertyIsEnumerable.call(t, r) && (s[r] = t[r])
          }
          return s
        }

        function c(t, e) {
          return function(t) {
            if (Array.isArray(t)) return t
          }(t) || function(t, e) {
            var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (null != r) {
              var i, s, a, n, o = [],
                h = !0,
                l = !1;
              try {
                if (a = (r = r.call(t)).next, 0 === e) {
                  if (Object(r) !== r) return;
                  h = !1
                } else
                  for (; !(h = (i = a.call(r)).done) && (o.push(i.value), o.length !== e); h = !0);
              } catch (t) {
                l = !0, s = t
              } finally {
                try {
                  if (!h && null != r.return && (n = r.return(), Object(n) !== n)) return
                } finally {
                  if (l) throw s
                }
              }
              return o
            }
          }(t, e) || function(t, e) {
            if (t) {
              if ("string" == typeof t) return n(t, e);
              var r = {}.toString.call(t).slice(8, -1);
              return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? n(t, e) : void 0
            }
          }(t, e) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
          }()
        }
        var f = ["animationData", "loop", "autoplay", "initialSegment", "onComplete", "onLoopComplete", "onEnterFrame", "onSegmentStart", "onConfigReady", "onDataReady", "onDataFailed", "onLoadedImages", "onDOMLoaded", "onDestroy", "lottieRef", "renderer", "name", "assetsPath", "rendererSettings"],
          m = function(t, e) {
            var i = t.animationData,
              n = t.loop,
              o = t.autoplay,
              h = t.initialSegment,
              m = t.onComplete,
              u = t.onLoopComplete,
              d = t.onEnterFrame,
              g = t.onSegmentStart,
              y = t.onConfigReady,
              v = t.onDataReady,
              b = t.onDataFailed,
              x = t.onLoadedImages,
              E = t.onDOMLoaded,
              S = t.onDestroy;
            t.lottieRef, t.renderer, t.name, t.assetsPath, t.rendererSettings;
            var P = p(t, f),
              T = c(r.useState(!1), 2),
              _ = T[0],
              C = T[1],
              A = r.useRef(),
              M = r.useRef(null);
            return r.useEffect((function() {
              var e = function() {
                var e, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (M.current) {
                  null === (e = A.current) || void 0 === e || e.destroy();
                  var i = l(l(l({}, t), r), {}, {
                    container: M.current
                  });
                  return A.current = s.default.loadAnimation(i), C(!!A.current),
                    function() {
                      var t;
                      null === (t = A.current) || void 0 === t || t.destroy(), A.current = void 0
                    }
                }
              }();
              return function() {
                return null == e ? void 0 : e()
              }
            }), [i, n]), r.useEffect((function() {
              A.current && (A.current.autoplay = !!o)
            }), [o]), r.useEffect((function() {
              A.current && (h ? Array.isArray(h) && h.length && ((A.current.currentRawFrame < h[0] || A.current.currentRawFrame > h[1]) && (A.current.currentRawFrame = h[0]), A.current.setSegment(h[0], h[1])) : A.current.resetSegments(!0))
            }), [h]), r.useEffect((function() {
              var t = [{
                name: "complete",
                handler: m
              }, {
                name: "loopComplete",
                handler: u
              }, {
                name: "enterFrame",
                handler: d
              }, {
                name: "segmentStart",
                handler: g
              }, {
                name: "config_ready",
                handler: y
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
                handler: E
              }, {
                name: "destroy",
                handler: S
              }].filter((function(t) {
                return null != t.handler
              }));
              if (t.length) {
                var e = t.map((function(t) {
                  var e;
                  return null === (e = A.current) || void 0 === e || e.addEventListener(t.name, t.handler),
                    function() {
                      var e;
                      null === (e = A.current) || void 0 === e || e.removeEventListener(t.name, t.handler)
                    }
                }));
                return function() {
                  e.forEach((function(t) {
                    return t()
                  }))
                }
              }
            }), [m, u, d, g, y, v, b, x, E, S]), {
              View: a.default.createElement("div", l({
                style: e,
                ref: M
              }, P)),
              play: function() {
                var t;
                null === (t = A.current) || void 0 === t || t.play()
              },
              stop: function() {
                var t;
                null === (t = A.current) || void 0 === t || t.stop()
              },
              pause: function() {
                var t;
                null === (t = A.current) || void 0 === t || t.pause()
              },
              setSpeed: function(t) {
                var e;
                null === (e = A.current) || void 0 === e || e.setSpeed(t)
              },
              goToAndStop: function(t, e) {
                var r;
                null === (r = A.current) || void 0 === r || r.goToAndStop(t, e)
              },
              goToAndPlay: function(t, e) {
                var r;
                null === (r = A.current) || void 0 === r || r.goToAndPlay(t, e)
              },
              setDirection: function(t) {
                var e;
                null === (e = A.current) || void 0 === e || e.setDirection(t)
              },
              playSegments: function(t, e) {
                var r;
                null === (r = A.current) || void 0 === r || r.playSegments(t, e)
              },
              setSubframe: function(t) {
                var e;
                null === (e = A.current) || void 0 === e || e.setSubframe(t)
              },
              getDuration: function(t) {
                var e;
                return null === (e = A.current) || void 0 === e ? void 0 : e.getDuration(t)
              },
              destroy: function() {
                var t;
                null === (t = A.current) || void 0 === t || t.destroy(), A.current = void 0
              },
              animationContainerRef: M,
              animationLoaded: _,
              animationItem: A.current
            }
          };
        var u = function(t) {
            var e = t.wrapperRef,
              i = t.animationItem,
              s = t.mode,
              a = t.actions;
            r.useEffect((function() {
              var t, r, n, o, h, l = e.current;
              if (l && i && a.length) {
                i.stop();
                switch (s) {
                  case "scroll":
                    return o = null, h = function() {
                        var t, e, r, s = (e = (t = l.getBoundingClientRect()).top, r = t.height, (window.innerHeight - e) / (window.innerHeight + r)),
                          n = a.find((function(t) {
                            var e = t.visibility;
                            return e && s >= e[0] && s <= e[1]
                          }));
                        if (n) {
                          if ("seek" === n.type && n.visibility && 2 === n.frames.length) {
                            var h = n.frames[0] + Math.ceil((s - n.visibility[0]) / (n.visibility[1] - n.visibility[0]) * n.frames[1]);
                            i.goToAndStop(h - i.firstFrame - 1, !0)
                          }
                          "loop" === n.type && (null === o || o !== n.frames || i.isPaused) && (i.playSegments(n.frames, !0), o = n.frames), "play" === n.type && i.isPaused && (i.resetSegments(!0), i.play()), "stop" === n.type && i.goToAndStop(n.frames[0] - i.firstFrame - 1, !0)
                        }
                      }, document.addEventListener("scroll", h),
                      function() {
                        document.removeEventListener("scroll", h)
                      };
                  case "cursor":
                    return t = function(t, e) {
                        var r, s, n, o, h = t,
                          p = e;
                        if (-1 !== h && -1 !== p) {
                          var c = (r = h, s = p, o = (n = l.getBoundingClientRect()).top, {
                            x: (r - n.left) / n.width,
                            y: (s - o) / n.height
                          });
                          h = c.x, p = c.y
                        }
                        var f = a.find((function(t) {
                          var e = t.position;
                          return e && Array.isArray(e.x) && Array.isArray(e.y) ? h >= e.x[0] && h <= e.x[1] && p >= e.y[0] && p <= e.y[1] : !(!e || Number.isNaN(e.x) || Number.isNaN(e.y)) && h === e.x && p === e.y
                        }));
                        if (f) {
                          if ("seek" === f.type && f.position && Array.isArray(f.position.x) && Array.isArray(f.position.y) && 2 === f.frames.length) {
                            var m = (h - f.position.x[0]) / (f.position.x[1] - f.position.x[0]),
                              u = (p - f.position.y[0]) / (f.position.y[1] - f.position.y[0]);
                            i.playSegments(f.frames, !0), i.goToAndStop(Math.ceil((m + u) / 2 * (f.frames[1] - f.frames[0])), !0)
                          }
                          "loop" === f.type && i.playSegments(f.frames, !0), "play" === f.type && (i.isPaused && i.resetSegments(!1), i.playSegments(f.frames)), "stop" === f.type && i.goToAndStop(f.frames[0], !0)
                        }
                      }, r = function(e) {
                        t(e.clientX, e.clientY)
                      }, n = function() {
                        t(-1, -1)
                      }, l.addEventListener("mousemove", r), l.addEventListener("mouseout", n),
                      function() {
                        l.removeEventListener("mousemove", r), l.removeEventListener("mouseout", n)
                      }
                }
              }
            }), [s, i])
          },
          d = function(t) {
            var e = t.actions,
              r = t.mode,
              i = t.lottieObj,
              s = i.animationItem,
              a = i.View,
              n = i.animationContainerRef;
            return u({
              actions: e,
              animationItem: s,
              mode: r,
              wrapperRef: n
            }), a
          },
          g = ["style", "interactivity"];
        Object.defineProperty(t, "LottiePlayer", {
          enumerable: !0,
          get: function() {
            return s.default
          }
        }), t.default = function(t) {
          var e, i, s, a = t.style,
            n = t.interactivity,
            o = p(t, g),
            h = m(o, a),
            l = h.View,
            c = h.play,
            f = h.stop,
            u = h.pause,
            y = h.setSpeed,
            v = h.goToAndStop,
            b = h.goToAndPlay,
            x = h.setDirection,
            E = h.playSegments,
            S = h.setSubframe,
            P = h.getDuration,
            T = h.destroy,
            _ = h.animationContainerRef,
            C = h.animationLoaded,
            A = h.animationItem;
          return r.useEffect((function() {
            t.lottieRef && (t.lottieRef.current = {
              play: c,
              stop: f,
              pause: u,
              setSpeed: y,
              goToAndPlay: b,
              goToAndStop: v,
              setDirection: x,
              playSegments: E,
              setSubframe: S,
              getDuration: P,
              destroy: T,
              animationContainerRef: _,
              animationLoaded: C,
              animationItem: A
            })
          }), [null === (e = t.lottieRef) || void 0 === e ? void 0 : e.current]), d({
            lottieObj: {
              View: l,
              play: c,
              stop: f,
              pause: u,
              setSpeed: y,
              goToAndStop: v,
              goToAndPlay: b,
              setDirection: x,
              playSegments: E,
              setSubframe: S,
              getDuration: P,
              destroy: T,
              animationContainerRef: _,
              animationLoaded: C,
              animationItem: A
            },
            actions: null !== (i = null == n ? void 0 : n.actions) && void 0 !== i ? i : [],
            mode: null !== (s = null == n ? void 0 : n.mode) && void 0 !== s ? s : "scroll"
          })
        }, t.useLottie = m, t.useLottieInteractivity = d, Object.defineProperty(t, "__esModule", {
          value: !0
        })
      }(e, r(12273), r(62229))
    },
    40844: (t, e, r) => {
      "use strict";
      r.d(e, {
        Wx: () => l
      });
      var i = r(62229),
        s = (Object.defineProperty, new Map),
        a = new WeakMap,
        n = 0,
        o = void 0;

      function h(t, e, r = {}, i = o) {
        if (void 0 === window.IntersectionObserver && void 0 !== i) {
          const s = t.getBoundingClientRect();
          return e(i, {
            isIntersecting: i,
            target: t,
            intersectionRatio: "number" == typeof r.threshold ? r.threshold : 0,
            time: 0,
            boundingClientRect: s,
            intersectionRect: s,
            rootBounds: s
          }), () => {}
        }
        const {
          id: h,
          observer: l,
          elements: p
        } = function(t) {
          const e = function(t) {
            return Object.keys(t).sort().filter((e => void 0 !== t[e])).map((e => {
              return `${e}_${"root"===e?(r=t.root,r?(a.has(r)||(n+=1,a.set(r,n.toString())),a.get(r)):"0"):t[e]}`;
              var r
            })).toString()
          }(t);
          let r = s.get(e);
          if (!r) {
            const i = new Map;
            let a;
            const n = new IntersectionObserver((e => {
              e.forEach((e => {
                var r;
                const s = e.isIntersecting && a.some((t => e.intersectionRatio >= t));
                t.trackVisibility && void 0 === e.isVisible && (e.isVisible = s), null == (r = i.get(e.target)) || r.forEach((t => {
                  t(s, e)
                }))
              }))
            }), t);
            a = n.thresholds || (Array.isArray(t.threshold) ? t.threshold : [t.threshold || 0]), r = {
              id: e,
              observer: n,
              elements: i
            }, s.set(e, r)
          }
          return r
        }(r), c = p.get(t) || [];
        return p.has(t) || p.set(t, c), c.push(e), l.observe(t),
          function() {
            c.splice(c.indexOf(e), 1), 0 === c.length && (p.delete(t), l.unobserve(t)), 0 === p.size && (l.disconnect(), s.delete(h))
          }
      }

      function l({
        threshold: t,
        delay: e,
        trackVisibility: r,
        rootMargin: s,
        root: a,
        triggerOnce: n,
        skip: o,
        initialInView: l,
        fallbackInView: p,
        onChange: c
      } = {}) {
        var f;
        const [m, u] = i.useState(null), d = i.useRef(c), [g, y] = i.useState({
          inView: !!l,
          entry: void 0
        });
        d.current = c, i.useEffect((() => {
          if (o || !m) return;
          let i;
          return i = h(m, ((t, e) => {
            y({
              inView: t,
              entry: e
            }), d.current && d.current(t, e), e.isIntersecting && n && i && (i(), i = void 0)
          }), {
            root: a,
            rootMargin: s,
            threshold: t,
            trackVisibility: r,
            delay: e
          }, p), () => {
            i && i()
          }
        }), [Array.isArray(t) ? t.toString() : t, m, a, s, n, o, r, p, e]);
        const v = null == (f = g.entry) ? void 0 : f.target,
          b = i.useRef(void 0);
        m || !v || n || o || b.current === v || (b.current = v, y({
          inView: !!l,
          entry: void 0
        }));
        const x = [u, g.inView, g.entry];
        return x.ref = x[0], x.inView = x[1], x.entry = x[2], x
      }
      i.Component
    },
    73988: (t, e, r) => {
      "use strict";
      r.d(e, {
        B: () => s
      });
      var i = r(3988);
      class s extends i.Loader {
        constructor(t) {
          super(t), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register((function(t) {
            return new p(t)
          })), this.register((function(t) {
            return new y(t)
          })), this.register((function(t) {
            return new v(t)
          })), this.register((function(t) {
            return new f(t)
          })), this.register((function(t) {
            return new m(t)
          })), this.register((function(t) {
            return new u(t)
          })), this.register((function(t) {
            return new d(t)
          })), this.register((function(t) {
            return new l(t)
          })), this.register((function(t) {
            return new g(t)
          })), this.register((function(t) {
            return new c(t)
          })), this.register((function(t) {
            return new o(t)
          })), this.register((function(t) {
            return new b(t)
          }))
        }
        load(t, e, r, s) {
          const a = this;
          let n;
          n = "" !== this.resourcePath ? this.resourcePath : "" !== this.path ? this.path : i.LoaderUtils.extractUrlBase(t), this.manager.itemStart(t);
          const o = function(e) {
              s ? s(e) : console.error(e), a.manager.itemError(t), a.manager.itemEnd(t)
            },
            h = new i.FileLoader(this.manager);
          h.setPath(this.path), h.setResponseType("arraybuffer"), h.setRequestHeader(this.requestHeader), h.setWithCredentials(this.withCredentials), h.load(t, (function(r) {
            try {
              a.parse(r, n, (function(r) {
                e(r), a.manager.itemEnd(t)
              }), o)
            } catch (t) {
              o(t)
            }
          }), r, o)
        }
        setDRACOLoader(t) {
          return this.dracoLoader = t, this
        }
        setDDSLoader() {
          throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')
        }
        setKTX2Loader(t) {
          return this.ktx2Loader = t, this
        }
        setMeshoptDecoder(t) {
          return this.meshoptDecoder = t, this
        }
        register(t) {
          return -1 === this.pluginCallbacks.indexOf(t) && this.pluginCallbacks.push(t), this
        }
        unregister(t) {
          return -1 !== this.pluginCallbacks.indexOf(t) && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t), 1), this
        }
        parse(t, e, r, s) {
          let a;
          const o = {},
            l = {};
          if ("string" == typeof t) a = t;
          else if (i.LoaderUtils.decodeText(new Uint8Array(t, 0, 4)) === x) {
            try {
              o[n.KHR_BINARY_GLTF] = new E(t)
            } catch (t) {
              return void(s && s(t))
            }
            a = o[n.KHR_BINARY_GLTF].content
          } else a = i.LoaderUtils.decodeText(new Uint8Array(t));
          const p = JSON.parse(a);
          if (void 0 === p.asset || p.asset.version[0] < 2) return void(s && s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported.")));
          const c = new j(p, {
            path: e || this.resourcePath || "",
            crossOrigin: this.crossOrigin,
            requestHeader: this.requestHeader,
            manager: this.manager,
            ktx2Loader: this.ktx2Loader,
            meshoptDecoder: this.meshoptDecoder
          });
          c.fileLoader.setRequestHeader(this.requestHeader);
          for (let t = 0; t < this.pluginCallbacks.length; t++) {
            const e = this.pluginCallbacks[t](c);
            l[e.name] = e, o[e.name] = !0
          }
          if (p.extensionsUsed)
            for (let t = 0; t < p.extensionsUsed.length; ++t) {
              const e = p.extensionsUsed[t],
                r = p.extensionsRequired || [];
              switch (e) {
                case n.KHR_MATERIALS_UNLIT:
                  o[e] = new h;
                  break;
                case n.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:
                  o[e] = new _;
                  break;
                case n.KHR_DRACO_MESH_COMPRESSION:
                  o[e] = new S(p, this.dracoLoader);
                  break;
                case n.KHR_TEXTURE_TRANSFORM:
                  o[e] = new P;
                  break;
                case n.KHR_MESH_QUANTIZATION:
                  o[e] = new C;
                  break;
                default:
                  r.indexOf(e) >= 0 && void 0 === l[e] && console.warn('THREE.GLTFLoader: Unknown extension "' + e + '".')
              }
            }
          c.setExtensions(o), c.setPlugins(l), c.parse(r, s)
        }
        parseAsync(t, e) {
          const r = this;
          return new Promise((function(i, s) {
            r.parse(t, e, i, s)
          }))
        }
      }

      function a() {
        let t = {};
        return {
          get: function(e) {
            return t[e]
          },
          add: function(e, r) {
            t[e] = r
          },
          remove: function(e) {
            delete t[e]
          },
          removeAll: function() {
            t = {}
          }
        }
      }
      const n = {
        KHR_BINARY_GLTF: "KHR_binary_glTF",
        KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
        KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
        KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
        KHR_MATERIALS_IOR: "KHR_materials_ior",
        KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS: "KHR_materials_pbrSpecularGlossiness",
        KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
        KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
        KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
        KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
        KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
        KHR_MATERIALS_VOLUME: "KHR_materials_volume",
        KHR_TEXTURE_BASISU: "KHR_texture_basisu",
        KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
        KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
        KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
        EXT_TEXTURE_WEBP: "EXT_texture_webp",
        EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression"
      };
      class o {
        constructor(t) {
          this.parser = t, this.name = n.KHR_LIGHTS_PUNCTUAL, this.cache = {
            refs: {},
            uses: {}
          }
        }
        _markDefs() {
          const t = this.parser,
            e = this.parser.json.nodes || [];
          for (let r = 0, i = e.length; r < i; r++) {
            const i = e[r];
            i.extensions && i.extensions[this.name] && void 0 !== i.extensions[this.name].light && t._addNodeRef(this.cache, i.extensions[this.name].light)
          }
        }
        _loadLight(t) {
          const e = this.parser,
            r = "light:" + t;
          let s = e.cache.get(r);
          if (s) return s;
          const a = e.json,
            n = ((a.extensions && a.extensions[this.name] || {}).lights || [])[t];
          let o;
          const h = new i.Color(16777215);
          void 0 !== n.color && h.fromArray(n.color);
          const l = void 0 !== n.range ? n.range : 0;
          switch (n.type) {
            case "directional":
              o = new i.DirectionalLight(h), o.target.position.set(0, 0, -1), o.add(o.target);
              break;
            case "point":
              o = new i.PointLight(h), o.distance = l;
              break;
            case "spot":
              o = new i.SpotLight(h), o.distance = l, n.spot = n.spot || {}, n.spot.innerConeAngle = void 0 !== n.spot.innerConeAngle ? n.spot.innerConeAngle : 0, n.spot.outerConeAngle = void 0 !== n.spot.outerConeAngle ? n.spot.outerConeAngle : Math.PI / 4, o.angle = n.spot.outerConeAngle, o.penumbra = 1 - n.spot.innerConeAngle / n.spot.outerConeAngle, o.target.position.set(0, 0, -1), o.add(o.target);
              break;
            default:
              throw new Error("THREE.GLTFLoader: Unexpected light type: " + n.type)
          }
          return o.position.set(0, 0, 0), o.decay = 2, void 0 !== n.intensity && (o.intensity = n.intensity), o.name = e.createUniqueName(n.name || "light_" + t), s = Promise.resolve(o), e.cache.add(r, s), s
        }
        createNodeAttachment(t) {
          const e = this,
            r = this.parser,
            i = r.json.nodes[t],
            s = (i.extensions && i.extensions[this.name] || {}).light;
          return void 0 === s ? null : this._loadLight(s).then((function(t) {
            return r._getNodeRef(e.cache, s, t)
          }))
        }
      }
      class h {
        constructor() {
          this.name = n.KHR_MATERIALS_UNLIT
        }
        getMaterialType() {
          return i.MeshBasicMaterial
        }
        extendParams(t, e, r) {
          const s = [];
          t.color = new i.Color(1, 1, 1), t.opacity = 1;
          const a = e.pbrMetallicRoughness;
          if (a) {
            if (Array.isArray(a.baseColorFactor)) {
              const e = a.baseColorFactor;
              t.color.fromArray(e), t.opacity = e[3]
            }
            void 0 !== a.baseColorTexture && s.push(r.assignTexture(t, "map", a.baseColorTexture, i.sRGBEncoding))
          }
          return Promise.all(s)
        }
      }
      class l {
        constructor(t) {
          this.parser = t, this.name = n.KHR_MATERIALS_EMISSIVE_STRENGTH
        }
        extendMaterialParams(t, e) {
          const r = this.parser.json.materials[t];
          if (!r.extensions || !r.extensions[this.name]) return Promise.resolve();
          const i = r.extensions[this.name].emissiveStrength;
          return void 0 !== i && (e.emissiveIntensity = i), Promise.resolve()
        }
      }
      class p {
        constructor(t) {
          this.parser = t, this.name = n.KHR_MATERIALS_CLEARCOAT
        }
        getMaterialType(t) {
          const e = this.parser.json.materials[t];
          return e.extensions && e.extensions[this.name] ? i.MeshPhysicalMaterial : null
        }
        extendMaterialParams(t, e) {
          const r = this.parser,
            s = r.json.materials[t];
          if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
          const a = [],
            n = s.extensions[this.name];
          if (void 0 !== n.clearcoatFactor && (e.clearcoat = n.clearcoatFactor), void 0 !== n.clearcoatTexture && a.push(r.assignTexture(e, "clearcoatMap", n.clearcoatTexture)), void 0 !== n.clearcoatRoughnessFactor && (e.clearcoatRoughness = n.clearcoatRoughnessFactor), void 0 !== n.clearcoatRoughnessTexture && a.push(r.assignTexture(e, "clearcoatRoughnessMap", n.clearcoatRoughnessTexture)), void 0 !== n.clearcoatNormalTexture && (a.push(r.assignTexture(e, "clearcoatNormalMap", n.clearcoatNormalTexture)), void 0 !== n.clearcoatNormalTexture.scale)) {
            const t = n.clearcoatNormalTexture.scale;
            e.clearcoatNormalScale = new i.Vector2(t, t)
          }
          return Promise.all(a)
        }
      }
      class c {
        constructor(t) {
          this.parser = t, this.name = n.KHR_MATERIALS_IRIDESCENCE
        }
        getMaterialType(t) {
          const e = this.parser.json.materials[t];
          return e.extensions && e.extensions[this.name] ? i.MeshPhysicalMaterial : null
        }
        extendMaterialParams(t, e) {
          const r = this.parser,
            i = r.json.materials[t];
          if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
          const s = [],
            a = i.extensions[this.name];
          return void 0 !== a.iridescenceFactor && (e.iridescence = a.iridescenceFactor), void 0 !== a.iridescenceTexture && s.push(r.assignTexture(e, "iridescenceMap", a.iridescenceTexture)), void 0 !== a.iridescenceIor && (e.iridescenceIOR = a.iridescenceIor), void 0 === e.iridescenceThicknessRange && (e.iridescenceThicknessRange = [100, 400]), void 0 !== a.iridescenceThicknessMinimum && (e.iridescenceThicknessRange[0] = a.iridescenceThicknessMinimum), void 0 !== a.iridescenceThicknessMaximum && (e.iridescenceThicknessRange[1] = a.iridescenceThicknessMaximum), void 0 !== a.iridescenceThicknessTexture && s.push(r.assignTexture(e, "iridescenceThicknessMap", a.iridescenceThicknessTexture)), Promise.all(s)
        }
      }
      class f {
        constructor(t) {
          this.parser = t, this.name = n.KHR_MATERIALS_SHEEN
        }
        getMaterialType(t) {
          const e = this.parser.json.materials[t];
          return e.extensions && e.extensions[this.name] ? i.MeshPhysicalMaterial : null
        }
        extendMaterialParams(t, e) {
          const r = this.parser,
            s = r.json.materials[t];
          if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
          const a = [];
          e.sheenColor = new i.Color(0, 0, 0), e.sheenRoughness = 0, e.sheen = 1;
          const n = s.extensions[this.name];
          return void 0 !== n.sheenColorFactor && e.sheenColor.fromArray(n.sheenColorFactor), void 0 !== n.sheenRoughnessFactor && (e.sheenRoughness = n.sheenRoughnessFactor), void 0 !== n.sheenColorTexture && a.push(r.assignTexture(e, "sheenColorMap", n.sheenColorTexture, i.sRGBEncoding)), void 0 !== n.sheenRoughnessTexture && a.push(r.assignTexture(e, "sheenRoughnessMap", n.sheenRoughnessTexture)), Promise.all(a)
        }
      }
      class m {
        constructor(t) {
          this.parser = t, this.name = n.KHR_MATERIALS_TRANSMISSION
        }
        getMaterialType(t) {
          const e = this.parser.json.materials[t];
          return e.extensions && e.extensions[this.name] ? i.MeshPhysicalMaterial : null
        }
        extendMaterialParams(t, e) {
          const r = this.parser,
            i = r.json.materials[t];
          if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
          const s = [],
            a = i.extensions[this.name];
          return void 0 !== a.transmissionFactor && (e.transmission = a.transmissionFactor), void 0 !== a.transmissionTexture && s.push(r.assignTexture(e, "transmissionMap", a.transmissionTexture)), Promise.all(s)
        }
      }
      class u {
        constructor(t) {
          this.parser = t, this.name = n.KHR_MATERIALS_VOLUME
        }
        getMaterialType(t) {
          const e = this.parser.json.materials[t];
          return e.extensions && e.extensions[this.name] ? i.MeshPhysicalMaterial : null
        }
        extendMaterialParams(t, e) {
          const r = this.parser,
            s = r.json.materials[t];
          if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
          const a = [],
            n = s.extensions[this.name];
          e.thickness = void 0 !== n.thicknessFactor ? n.thicknessFactor : 0, void 0 !== n.thicknessTexture && a.push(r.assignTexture(e, "thicknessMap", n.thicknessTexture)), e.attenuationDistance = n.attenuationDistance || 0;
          const o = n.attenuationColor || [1, 1, 1];
          return e.attenuationColor = new i.Color(o[0], o[1], o[2]), Promise.all(a)
        }
      }
      class d {
        constructor(t) {
          this.parser = t, this.name = n.KHR_MATERIALS_IOR
        }
        getMaterialType(t) {
          const e = this.parser.json.materials[t];
          return e.extensions && e.extensions[this.name] ? i.MeshPhysicalMaterial : null
        }
        extendMaterialParams(t, e) {
          const r = this.parser.json.materials[t];
          if (!r.extensions || !r.extensions[this.name]) return Promise.resolve();
          const i = r.extensions[this.name];
          return e.ior = void 0 !== i.ior ? i.ior : 1.5, Promise.resolve()
        }
      }
      class g {
        constructor(t) {
          this.parser = t, this.name = n.KHR_MATERIALS_SPECULAR
        }
        getMaterialType(t) {
          const e = this.parser.json.materials[t];
          return e.extensions && e.extensions[this.name] ? i.MeshPhysicalMaterial : null
        }
        extendMaterialParams(t, e) {
          const r = this.parser,
            s = r.json.materials[t];
          if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
          const a = [],
            n = s.extensions[this.name];
          e.specularIntensity = void 0 !== n.specularFactor ? n.specularFactor : 1, void 0 !== n.specularTexture && a.push(r.assignTexture(e, "specularIntensityMap", n.specularTexture));
          const o = n.specularColorFactor || [1, 1, 1];
          return e.specularColor = new i.Color(o[0], o[1], o[2]), void 0 !== n.specularColorTexture && a.push(r.assignTexture(e, "specularColorMap", n.specularColorTexture, i.sRGBEncoding)), Promise.all(a)
        }
      }
      class y {
        constructor(t) {
          this.parser = t, this.name = n.KHR_TEXTURE_BASISU
        }
        loadTexture(t) {
          const e = this.parser,
            r = e.json,
            i = r.textures[t];
          if (!i.extensions || !i.extensions[this.name]) return null;
          const s = i.extensions[this.name],
            a = e.options.ktx2Loader;
          if (!a) {
            if (r.extensionsRequired && r.extensionsRequired.indexOf(this.name) >= 0) throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
            return null
          }
          return e.loadTextureImage(t, s.source, a)
        }
      }
      class v {
        constructor(t) {
          this.parser = t, this.name = n.EXT_TEXTURE_WEBP, this.isSupported = null
        }
        loadTexture(t) {
          const e = this.name,
            r = this.parser,
            i = r.json,
            s = i.textures[t];
          if (!s.extensions || !s.extensions[e]) return null;
          const a = s.extensions[e],
            n = i.images[a.source];
          let o = r.textureLoader;
          if (n.uri) {
            const t = r.options.manager.getHandler(n.uri);
            null !== t && (o = t)
          }
          return this.detectSupport().then((function(s) {
            if (s) return r.loadTextureImage(t, a.source, o);
            if (i.extensionsRequired && i.extensionsRequired.indexOf(e) >= 0) throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");
            return r.loadTexture(t)
          }))
        }
        detectSupport() {
          return this.isSupported || (this.isSupported = new Promise((function(t) {
            const e = new Image;
            e.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA", e.onload = e.onerror = function() {
              t(1 === e.height)
            }
          }))), this.isSupported
        }
      }
      class b {
        constructor(t) {
          this.name = n.EXT_MESHOPT_COMPRESSION, this.parser = t
        }
        loadBufferView(t) {
          const e = this.parser.json,
            r = e.bufferViews[t];
          if (r.extensions && r.extensions[this.name]) {
            const t = r.extensions[this.name],
              i = this.parser.getDependency("buffer", t.buffer),
              s = this.parser.options.meshoptDecoder;
            if (!s || !s.supported) {
              if (e.extensionsRequired && e.extensionsRequired.indexOf(this.name) >= 0) throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
              return null
            }
            return Promise.all([i, s.ready]).then((function(e) {
              const r = t.byteOffset || 0,
                i = t.byteLength || 0,
                a = t.count,
                n = t.byteStride,
                o = new ArrayBuffer(a * n),
                h = new Uint8Array(e[0], r, i);
              return s.decodeGltfBuffer(new Uint8Array(o), a, n, h, t.mode, t.filter), o
            }))
          }
          return null
        }
      }
      const x = "glTF";
      class E {
        constructor(t) {
          this.name = n.KHR_BINARY_GLTF, this.content = null, this.body = null;
          const e = new DataView(t, 0, 12);
          if (this.header = {
              magic: i.LoaderUtils.decodeText(new Uint8Array(t.slice(0, 4))),
              version: e.getUint32(4, !0),
              length: e.getUint32(8, !0)
            }, this.header.magic !== x) throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
          if (this.header.version < 2) throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
          const r = this.header.length - 12,
            s = new DataView(t, 12);
          let a = 0;
          for (; a < r;) {
            const e = s.getUint32(a, !0);
            a += 4;
            const r = s.getUint32(a, !0);
            if (a += 4, 1313821514 === r) {
              const r = new Uint8Array(t, 12 + a, e);
              this.content = i.LoaderUtils.decodeText(r)
            } else if (5130562 === r) {
              const r = 12 + a;
              this.body = t.slice(r, r + e)
            }
            a += e
          }
          if (null === this.content) throw new Error("THREE.GLTFLoader: JSON content not found.")
        }
      }
      class S {
        constructor(t, e) {
          if (!e) throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
          this.name = n.KHR_DRACO_MESH_COMPRESSION, this.json = t, this.dracoLoader = e, this.dracoLoader.preload()
        }
        decodePrimitive(t, e) {
          const r = this.json,
            i = this.dracoLoader,
            s = t.extensions[this.name].bufferView,
            a = t.extensions[this.name].attributes,
            n = {},
            o = {},
            h = {};
          for (const t in a) {
            const e = R[t] || t.toLowerCase();
            n[e] = a[t]
          }
          for (const e in t.attributes) {
            const i = R[e] || e.toLowerCase();
            if (void 0 !== a[e]) {
              const s = r.accessors[t.attributes[e]],
                a = k[s.componentType];
              h[i] = a, o[i] = !0 === s.normalized
            }
          }
          return e.getDependency("bufferView", s).then((function(t) {
            return new Promise((function(e) {
              i.decodeDracoFile(t, (function(t) {
                for (const e in t.attributes) {
                  const r = t.attributes[e],
                    i = o[e];
                  void 0 !== i && (r.normalized = i)
                }
                e(t)
              }), n, h)
            }))
          }))
        }
      }
      class P {
        constructor() {
          this.name = n.KHR_TEXTURE_TRANSFORM
        }
        extendTexture(t, e) {
          return void 0 !== e.texCoord && console.warn('THREE.GLTFLoader: Custom UV sets in "' + this.name + '" extension not yet supported.'), void 0 === e.offset && void 0 === e.rotation && void 0 === e.scale || (t = t.clone(), void 0 !== e.offset && t.offset.fromArray(e.offset), void 0 !== e.rotation && (t.rotation = e.rotation), void 0 !== e.scale && t.repeat.fromArray(e.scale), t.needsUpdate = !0), t
        }
      }
      class T extends i.MeshStandardMaterial {
        constructor(t) {
          super(), this.isGLTFSpecularGlossinessMaterial = !0;
          const e = ["#ifdef USE_SPECULARMAP", "\tuniform sampler2D specularMap;", "#endif"].join("\n"),
            r = ["#ifdef USE_GLOSSINESSMAP", "\tuniform sampler2D glossinessMap;", "#endif"].join("\n"),
            s = ["vec3 specularFactor = specular;", "#ifdef USE_SPECULARMAP", "\tvec4 texelSpecular = texture2D( specularMap, vUv );", "\t// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture", "\tspecularFactor *= texelSpecular.rgb;", "#endif"].join("\n"),
            a = ["float glossinessFactor = glossiness;", "#ifdef USE_GLOSSINESSMAP", "\tvec4 texelGlossiness = texture2D( glossinessMap, vUv );", "\t// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture", "\tglossinessFactor *= texelGlossiness.a;", "#endif"].join("\n"),
            n = ["PhysicalMaterial material;", "material.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );", "vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );", "float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );", "material.roughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.", "material.roughness += geometryRoughness;", "material.roughness = min( material.roughness, 1.0 );", "material.specularColor = specularFactor;"].join("\n"),
            o = {
              specular: {
                value: (new i.Color).setHex(16777215)
              },
              glossiness: {
                value: 1
              },
              specularMap: {
                value: null
              },
              glossinessMap: {
                value: null
              }
            };
          this._extraUniforms = o, this.onBeforeCompile = function(t) {
            for (const e in o) t.uniforms[e] = o[e];
            t.fragmentShader = t.fragmentShader.replace("uniform float roughness;", "uniform vec3 specular;").replace("uniform float metalness;", "uniform float glossiness;").replace("#include <roughnessmap_pars_fragment>", e).replace("#include <metalnessmap_pars_fragment>", r).replace("#include <roughnessmap_fragment>", s).replace("#include <metalnessmap_fragment>", a).replace("#include <lights_physical_fragment>", n)
          }, Object.defineProperties(this, {
            specular: {
              get: function() {
                return o.specular.value
              },
              set: function(t) {
                o.specular.value = t
              }
            },
            specularMap: {
              get: function() {
                return o.specularMap.value
              },
              set: function(t) {
                o.specularMap.value = t, t ? this.defines.USE_SPECULARMAP = "" : delete this.defines.USE_SPECULARMAP
              }
            },
            glossiness: {
              get: function() {
                return o.glossiness.value
              },
              set: function(t) {
                o.glossiness.value = t
              }
            },
            glossinessMap: {
              get: function() {
                return o.glossinessMap.value
              },
              set: function(t) {
                o.glossinessMap.value = t, t ? (this.defines.USE_GLOSSINESSMAP = "", this.defines.USE_UV = "") : (delete this.defines.USE_GLOSSINESSMAP, delete this.defines.USE_UV)
              }
            }
          }), delete this.metalness, delete this.roughness, delete this.metalnessMap, delete this.roughnessMap, this.setValues(t)
        }
        copy(t) {
          return super.copy(t), this.specularMap = t.specularMap, this.specular.copy(t.specular), this.glossinessMap = t.glossinessMap, this.glossiness = t.glossiness, delete this.metalness, delete this.roughness, delete this.metalnessMap, delete this.roughnessMap, this
        }
      }
      class _ {
        constructor() {
          this.name = n.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS, this.specularGlossinessParams = ["color", "map", "lightMap", "lightMapIntensity", "aoMap", "aoMapIntensity", "emissive", "emissiveIntensity", "emissiveMap", "bumpMap", "bumpScale", "normalMap", "normalMapType", "displacementMap", "displacementScale", "displacementBias", "specularMap", "specular", "glossinessMap", "glossiness", "alphaMap", "envMap", "envMapIntensity"]
        }
        getMaterialType() {
          return T
        }
        extendParams(t, e, r) {
          const s = e.extensions[this.name];
          t.color = new i.Color(1, 1, 1), t.opacity = 1;
          const a = [];
          if (Array.isArray(s.diffuseFactor)) {
            const e = s.diffuseFactor;
            t.color.fromArray(e), t.opacity = e[3]
          }
          if (void 0 !== s.diffuseTexture && a.push(r.assignTexture(t, "map", s.diffuseTexture, i.sRGBEncoding)), t.emissive = new i.Color(0, 0, 0), t.glossiness = void 0 !== s.glossinessFactor ? s.glossinessFactor : 1, t.specular = new i.Color(1, 1, 1), Array.isArray(s.specularFactor) && t.specular.fromArray(s.specularFactor), void 0 !== s.specularGlossinessTexture) {
            const e = s.specularGlossinessTexture;
            a.push(r.assignTexture(t, "glossinessMap", e)), a.push(r.assignTexture(t, "specularMap", e, i.sRGBEncoding))
          }
          return Promise.all(a)
        }
        createMaterial(t) {
          const e = new T(t);
          return e.fog = !0, e.color = t.color, e.map = void 0 === t.map ? null : t.map, e.lightMap = null, e.lightMapIntensity = 1, e.aoMap = void 0 === t.aoMap ? null : t.aoMap, e.aoMapIntensity = 1, e.emissive = t.emissive, e.emissiveIntensity = void 0 === t.emissiveIntensity ? 1 : t.emissiveIntensity, e.emissiveMap = void 0 === t.emissiveMap ? null : t.emissiveMap, e.bumpMap = void 0 === t.bumpMap ? null : t.bumpMap, e.bumpScale = 1, e.normalMap = void 0 === t.normalMap ? null : t.normalMap, e.normalMapType = i.TangentSpaceNormalMap, t.normalScale && (e.normalScale = t.normalScale), e.displacementMap = null, e.displacementScale = 1, e.displacementBias = 0, e.specularMap = void 0 === t.specularMap ? null : t.specularMap, e.specular = t.specular, e.glossinessMap = void 0 === t.glossinessMap ? null : t.glossinessMap, e.glossiness = t.glossiness, e.alphaMap = null, e.envMap = void 0 === t.envMap ? null : t.envMap, e.envMapIntensity = 1, e
        }
      }
      class C {
        constructor() {
          this.name = n.KHR_MESH_QUANTIZATION
        }
      }
      class A extends i.Interpolant {
        constructor(t, e, r, i) {
          super(t, e, r, i)
        }
        copySampleValue_(t) {
          const e = this.resultBuffer,
            r = this.sampleValues,
            i = this.valueSize,
            s = t * i * 3 + i;
          for (let t = 0; t !== i; t++) e[t] = r[s + t];
          return e
        }
      }
      A.prototype.interpolate_ = function(t, e, r, i) {
        const s = this.resultBuffer,
          a = this.sampleValues,
          n = this.valueSize,
          o = 2 * n,
          h = 3 * n,
          l = i - e,
          p = (r - e) / l,
          c = p * p,
          f = c * p,
          m = t * h,
          u = m - h,
          d = -2 * f + 3 * c,
          g = f - c,
          y = 1 - d,
          v = g - c + p;
        for (let t = 0; t !== n; t++) {
          const e = a[u + t + n],
            r = a[u + t + o] * l,
            i = a[m + t + n],
            h = a[m + t] * l;
          s[t] = y * e + v * r + d * i + g * h
        }
        return s
      };
      const M = new i.Quaternion;
      class w extends A {
        interpolate_(t, e, r, i) {
          const s = super.interpolate_(t, e, r, i);
          return M.fromArray(s).normalize().toArray(s), s
        }
      }
      const k = {
          5120: Int8Array,
          5121: Uint8Array,
          5122: Int16Array,
          5123: Uint16Array,
          5125: Uint32Array,
          5126: Float32Array
        },
        D = {
          9728: i.NearestFilter,
          9729: i.LinearFilter,
          9984: i.NearestMipmapNearestFilter,
          9985: i.LinearMipmapNearestFilter,
          9986: i.NearestMipmapLinearFilter,
          9987: i.LinearMipmapLinearFilter
        },
        F = {
          33071: i.ClampToEdgeWrapping,
          33648: i.MirroredRepeatWrapping,
          10497: i.RepeatWrapping
        },
        I = {
          SCALAR: 1,
          VEC2: 2,
          VEC3: 3,
          VEC4: 4,
          MAT2: 4,
          MAT3: 9,
          MAT4: 16
        },
        R = {
          POSITION: "position",
          NORMAL: "normal",
          TANGENT: "tangent",
          TEXCOORD_0: "uv",
          TEXCOORD_1: "uv2",
          COLOR_0: "color",
          WEIGHTS_0: "skinWeight",
          JOINTS_0: "skinIndex"
        },
        L = {
          scale: "scale",
          translation: "position",
          rotation: "quaternion",
          weights: "morphTargetInfluences"
        },
        B = {
          CUBICSPLINE: void 0,
          LINEAR: i.InterpolateLinear,
          STEP: i.InterpolateDiscrete
        };

      function V(t, e, r) {
        for (const i in r.extensions) void 0 === t[i] && (e.userData.gltfExtensions = e.userData.gltfExtensions || {}, e.userData.gltfExtensions[i] = r.extensions[i])
      }

      function O(t, e) {
        void 0 !== e.extras && ("object" == typeof e.extras ? Object.assign(t.userData, e.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + e.extras))
      }

      function G(t, e) {
        if (t.updateMorphTargets(), void 0 !== e.weights)
          for (let r = 0, i = e.weights.length; r < i; r++) t.morphTargetInfluences[r] = e.weights[r];
        if (e.extras && Array.isArray(e.extras.targetNames)) {
          const r = e.extras.targetNames;
          if (t.morphTargetInfluences.length === r.length) {
            t.morphTargetDictionary = {};
            for (let e = 0, i = r.length; e < i; e++) t.morphTargetDictionary[r[e]] = e
          } else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")
        }
      }

      function N(t) {
        const e = t.extensions && t.extensions[n.KHR_DRACO_MESH_COMPRESSION];
        let r;
        return r = e ? "draco:" + e.bufferView + ":" + e.indices + ":" + z(e.attributes) : t.indices + ":" + z(t.attributes) + ":" + t.mode, r
      }

      function z(t) {
        let e = "";
        const r = Object.keys(t).sort();
        for (let i = 0, s = r.length; i < s; i++) e += r[i] + ":" + t[r[i]] + ";";
        return e
      }

      function H(t) {
        switch (t) {
          case Int8Array:
            return 1 / 127;
          case Uint8Array:
            return 1 / 255;
          case Int16Array:
            return 1 / 32767;
          case Uint16Array:
            return 1 / 65535;
          default:
            throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")
        }
      }
      class j {
        constructor(t = {}, e = {}) {
          this.json = t, this.extensions = {}, this.plugins = {}, this.options = e, this.cache = new a, this.associations = new Map, this.primitiveCache = {}, this.meshCache = {
            refs: {},
            uses: {}
          }, this.cameraCache = {
            refs: {},
            uses: {}
          }, this.lightCache = {
            refs: {},
            uses: {}
          }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
          const r = !0 === /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
            s = navigator.userAgent.indexOf("Firefox") > -1,
            n = s ? navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1] : -1;
          "undefined" == typeof createImageBitmap || r || s && n < 98 ? this.textureLoader = new i.TextureLoader(this.options.manager) : this.textureLoader = new i.ImageBitmapLoader(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new i.FileLoader(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), "use-credentials" === this.options.crossOrigin && this.fileLoader.setWithCredentials(!0)
        }
        setExtensions(t) {
          this.extensions = t
        }
        setPlugins(t) {
          this.plugins = t
        }
        parse(t, e) {
          const r = this,
            i = this.json,
            s = this.extensions;
          this.cache.removeAll(), this._invokeAll((function(t) {
            return t._markDefs && t._markDefs()
          })), Promise.all(this._invokeAll((function(t) {
            return t.beforeRoot && t.beforeRoot()
          }))).then((function() {
            return Promise.all([r.getDependencies("scene"), r.getDependencies("animation"), r.getDependencies("camera")])
          })).then((function(e) {
            const a = {
              scene: e[0][i.scene || 0],
              scenes: e[0],
              animations: e[1],
              cameras: e[2],
              asset: i.asset,
              parser: r,
              userData: {}
            };
            V(s, a, i), O(a, i), Promise.all(r._invokeAll((function(t) {
              return t.afterRoot && t.afterRoot(a)
            }))).then((function() {
              t(a)
            }))
          })).catch(e)
        }
        _markDefs() {
          const t = this.json.nodes || [],
            e = this.json.skins || [],
            r = this.json.meshes || [];
          for (let r = 0, i = e.length; r < i; r++) {
            const i = e[r].joints;
            for (let e = 0, r = i.length; e < r; e++) t[i[e]].isBone = !0
          }
          for (let e = 0, i = t.length; e < i; e++) {
            const i = t[e];
            void 0 !== i.mesh && (this._addNodeRef(this.meshCache, i.mesh), void 0 !== i.skin && (r[i.mesh].isSkinnedMesh = !0)), void 0 !== i.camera && this._addNodeRef(this.cameraCache, i.camera)
          }
        }
        _addNodeRef(t, e) {
          void 0 !== e && (void 0 === t.refs[e] && (t.refs[e] = t.uses[e] = 0), t.refs[e]++)
        }
        _getNodeRef(t, e, r) {
          if (t.refs[e] <= 1) return r;
          const i = r.clone(),
            s = (t, e) => {
              const r = this.associations.get(t);
              null != r && this.associations.set(e, r);
              for (const [r, i] of t.children.entries()) s(i, e.children[r])
            };
          return s(r, i), i.name += "_instance_" + t.uses[e]++, i
        }
        _invokeOne(t) {
          const e = Object.values(this.plugins);
          e.push(this);
          for (let r = 0; r < e.length; r++) {
            const i = t(e[r]);
            if (i) return i
          }
          return null
        }
        _invokeAll(t) {
          const e = Object.values(this.plugins);
          e.unshift(this);
          const r = [];
          for (let i = 0; i < e.length; i++) {
            const s = t(e[i]);
            s && r.push(s)
          }
          return r
        }
        getDependency(t, e) {
          const r = t + ":" + e;
          let i = this.cache.get(r);
          if (!i) {
            switch (t) {
              case "scene":
                i = this.loadScene(e);
                break;
              case "node":
                i = this.loadNode(e);
                break;
              case "mesh":
                i = this._invokeOne((function(t) {
                  return t.loadMesh && t.loadMesh(e)
                }));
                break;
              case "accessor":
                i = this.loadAccessor(e);
                break;
              case "bufferView":
                i = this._invokeOne((function(t) {
                  return t.loadBufferView && t.loadBufferView(e)
                }));
                break;
              case "buffer":
                i = this.loadBuffer(e);
                break;
              case "material":
                i = this._invokeOne((function(t) {
                  return t.loadMaterial && t.loadMaterial(e)
                }));
                break;
              case "texture":
                i = this._invokeOne((function(t) {
                  return t.loadTexture && t.loadTexture(e)
                }));
                break;
              case "skin":
                i = this.loadSkin(e);
                break;
              case "animation":
                i = this._invokeOne((function(t) {
                  return t.loadAnimation && t.loadAnimation(e)
                }));
                break;
              case "camera":
                i = this.loadCamera(e);
                break;
              default:
                throw new Error("Unknown type: " + t)
            }
            this.cache.add(r, i)
          }
          return i
        }
        getDependencies(t) {
          let e = this.cache.get(t);
          if (!e) {
            const r = this,
              i = this.json[t + ("mesh" === t ? "es" : "s")] || [];
            e = Promise.all(i.map((function(e, i) {
              return r.getDependency(t, i)
            }))), this.cache.add(t, e)
          }
          return e
        }
        loadBuffer(t) {
          const e = this.json.buffers[t],
            r = this.fileLoader;
          if (e.type && "arraybuffer" !== e.type) throw new Error("THREE.GLTFLoader: " + e.type + " buffer type is not supported.");
          if (void 0 === e.uri && 0 === t) return Promise.resolve(this.extensions[n.KHR_BINARY_GLTF].body);
          const s = this.options;
          return new Promise((function(t, a) {
            r.load(i.LoaderUtils.resolveURL(e.uri, s.path), t, void 0, (function() {
              a(new Error('THREE.GLTFLoader: Failed to load buffer "' + e.uri + '".'))
            }))
          }))
        }
        loadBufferView(t) {
          const e = this.json.bufferViews[t];
          return this.getDependency("buffer", e.buffer).then((function(t) {
            const r = e.byteLength || 0,
              i = e.byteOffset || 0;
            return t.slice(i, i + r)
          }))
        }
        loadAccessor(t) {
          const e = this,
            r = this.json,
            s = this.json.accessors[t];
          if (void 0 === s.bufferView && void 0 === s.sparse) return Promise.resolve(null);
          const a = [];
          return void 0 !== s.bufferView ? a.push(this.getDependency("bufferView", s.bufferView)) : a.push(null), void 0 !== s.sparse && (a.push(this.getDependency("bufferView", s.sparse.indices.bufferView)), a.push(this.getDependency("bufferView", s.sparse.values.bufferView))), Promise.all(a).then((function(t) {
            const a = t[0],
              n = I[s.type],
              o = k[s.componentType],
              h = o.BYTES_PER_ELEMENT,
              l = h * n,
              p = s.byteOffset || 0,
              c = void 0 !== s.bufferView ? r.bufferViews[s.bufferView].byteStride : void 0,
              f = !0 === s.normalized;
            let m, u;
            if (c && c !== l) {
              const t = Math.floor(p / c),
                r = "InterleavedBuffer:" + s.bufferView + ":" + s.componentType + ":" + t + ":" + s.count;
              let l = e.cache.get(r);
              l || (m = new o(a, t * c, s.count * c / h), l = new i.InterleavedBuffer(m, c / h), e.cache.add(r, l)), u = new i.InterleavedBufferAttribute(l, n, p % c / h, f)
            } else m = null === a ? new o(s.count * n) : new o(a, p, s.count * n), u = new i.BufferAttribute(m, n, f);
            if (void 0 !== s.sparse) {
              const e = I.SCALAR,
                r = k[s.sparse.indices.componentType],
                h = s.sparse.indices.byteOffset || 0,
                l = s.sparse.values.byteOffset || 0,
                p = new r(t[1], h, s.sparse.count * e),
                c = new o(t[2], l, s.sparse.count * n);
              null !== a && (u = new i.BufferAttribute(u.array.slice(), u.itemSize, u.normalized));
              for (let t = 0, e = p.length; t < e; t++) {
                const e = p[t];
                if (u.setX(e, c[t * n]), n >= 2 && u.setY(e, c[t * n + 1]), n >= 3 && u.setZ(e, c[t * n + 2]), n >= 4 && u.setW(e, c[t * n + 3]), n >= 5) throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")
              }
            }
            return u
          }))
        }
        loadTexture(t) {
          const e = this.json,
            r = this.options,
            i = e.textures[t].source,
            s = e.images[i];
          let a = this.textureLoader;
          if (s.uri) {
            const t = r.manager.getHandler(s.uri);
            null !== t && (a = t)
          }
          return this.loadTextureImage(t, i, a)
        }
        loadTextureImage(t, e, r) {
          const s = this,
            a = this.json,
            n = a.textures[t],
            o = a.images[e],
            h = (o.uri || o.bufferView) + ":" + n.sampler;
          if (this.textureCache[h]) return this.textureCache[h];
          const l = this.loadImageSource(e, r).then((function(e) {
            e.flipY = !1, n.name && (e.name = n.name);
            const r = (a.samplers || {})[n.sampler] || {};
            return e.magFilter = D[r.magFilter] || i.LinearFilter, e.minFilter = D[r.minFilter] || i.LinearMipmapLinearFilter, e.wrapS = F[r.wrapS] || i.RepeatWrapping, e.wrapT = F[r.wrapT] || i.RepeatWrapping, s.associations.set(e, {
              textures: t
            }), e
          })).catch((function() {
            return null
          }));
          return this.textureCache[h] = l, l
        }
        loadImageSource(t, e) {
          const r = this.json,
            s = this.options;
          if (void 0 !== this.sourceCache[t]) return this.sourceCache[t].then((t => t.clone()));
          const a = r.images[t],
            n = self.URL || self.webkitURL;
          let o = a.uri || "",
            h = !1;
          if (void 0 !== a.bufferView) o = this.getDependency("bufferView", a.bufferView).then((function(t) {
            h = !0;
            const e = new Blob([t], {
              type: a.mimeType
            });
            return o = n.createObjectURL(e), o
          }));
          else if (void 0 === a.uri) throw new Error("THREE.GLTFLoader: Image " + t + " is missing URI and bufferView");
          const l = Promise.resolve(o).then((function(t) {
            return new Promise((function(r, a) {
              let n = r;
              !0 === e.isImageBitmapLoader && (n = function(t) {
                const e = new i.Texture(t);
                e.needsUpdate = !0, r(e)
              }), e.load(i.LoaderUtils.resolveURL(t, s.path), n, void 0, a)
            }))
          })).then((function(t) {
            var e;
            return !0 === h && n.revokeObjectURL(o), t.userData.mimeType = a.mimeType || ((e = a.uri).search(/\.jpe?g($|\?)/i) > 0 || 0 === e.search(/^data\:image\/jpeg/) ? "image/jpeg" : e.search(/\.webp($|\?)/i) > 0 || 0 === e.search(/^data\:image\/webp/) ? "image/webp" : "image/png"), t
          })).catch((function(t) {
            throw console.error("THREE.GLTFLoader: Couldn't load texture", o), t
          }));
          return this.sourceCache[t] = l, l
        }
        assignTexture(t, e, r, i) {
          const s = this;
          return this.getDependency("texture", r.index).then((function(a) {
            if (void 0 === r.texCoord || 0 == r.texCoord || "aoMap" === e && 1 == r.texCoord || console.warn("THREE.GLTFLoader: Custom UV set " + r.texCoord + " for texture " + e + " not yet supported."), s.extensions[n.KHR_TEXTURE_TRANSFORM]) {
              const t = void 0 !== r.extensions ? r.extensions[n.KHR_TEXTURE_TRANSFORM] : void 0;
              if (t) {
                const e = s.associations.get(a);
                a = s.extensions[n.KHR_TEXTURE_TRANSFORM].extendTexture(a, t), s.associations.set(a, e)
              }
            }
            return void 0 !== i && (a.encoding = i), t[e] = a, a
          }))
        }
        assignFinalMaterial(t) {
          const e = t.geometry;
          let r = t.material;
          const s = void 0 === e.attributes.tangent,
            a = void 0 !== e.attributes.color,
            n = void 0 === e.attributes.normal;
          if (t.isPoints) {
            const t = "PointsMaterial:" + r.uuid;
            let e = this.cache.get(t);
            e || (e = new i.PointsMaterial, i.Material.prototype.copy.call(e, r), e.color.copy(r.color), e.map = r.map, e.sizeAttenuation = !1, this.cache.add(t, e)), r = e
          } else if (t.isLine) {
            const t = "LineBasicMaterial:" + r.uuid;
            let e = this.cache.get(t);
            e || (e = new i.LineBasicMaterial, i.Material.prototype.copy.call(e, r), e.color.copy(r.color), this.cache.add(t, e)), r = e
          }
          if (s || a || n) {
            let t = "ClonedMaterial:" + r.uuid + ":";
            r.isGLTFSpecularGlossinessMaterial && (t += "specular-glossiness:"), s && (t += "derivative-tangents:"), a && (t += "vertex-colors:"), n && (t += "flat-shading:");
            let e = this.cache.get(t);
            e || (e = r.clone(), a && (e.vertexColors = !0), n && (e.flatShading = !0), s && (e.normalScale && (e.normalScale.y *= -1), e.clearcoatNormalScale && (e.clearcoatNormalScale.y *= -1)), this.cache.add(t, e), this.associations.set(e, this.associations.get(r))), r = e
          }
          r.aoMap && void 0 === e.attributes.uv2 && void 0 !== e.attributes.uv && e.setAttribute("uv2", e.attributes.uv), t.material = r
        }
        getMaterialType() {
          return i.MeshStandardMaterial
        }
        loadMaterial(t) {
          const e = this,
            r = this.json,
            s = this.extensions,
            a = r.materials[t];
          let o;
          const h = {},
            l = a.extensions || {},
            p = [];
          if (l[n.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]) {
            const t = s[n.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];
            o = t.getMaterialType(), p.push(t.extendParams(h, a, e))
          } else if (l[n.KHR_MATERIALS_UNLIT]) {
            const t = s[n.KHR_MATERIALS_UNLIT];
            o = t.getMaterialType(), p.push(t.extendParams(h, a, e))
          } else {
            const r = a.pbrMetallicRoughness || {};
            if (h.color = new i.Color(1, 1, 1), h.opacity = 1, Array.isArray(r.baseColorFactor)) {
              const t = r.baseColorFactor;
              h.color.fromArray(t), h.opacity = t[3]
            }
            void 0 !== r.baseColorTexture && p.push(e.assignTexture(h, "map", r.baseColorTexture, i.sRGBEncoding)), h.metalness = void 0 !== r.metallicFactor ? r.metallicFactor : 1, h.roughness = void 0 !== r.roughnessFactor ? r.roughnessFactor : 1, void 0 !== r.metallicRoughnessTexture && (p.push(e.assignTexture(h, "metalnessMap", r.metallicRoughnessTexture)), p.push(e.assignTexture(h, "roughnessMap", r.metallicRoughnessTexture))), o = this._invokeOne((function(e) {
              return e.getMaterialType && e.getMaterialType(t)
            })), p.push(Promise.all(this._invokeAll((function(e) {
              return e.extendMaterialParams && e.extendMaterialParams(t, h)
            }))))
          }!0 === a.doubleSided && (h.side = i.DoubleSide);
          const c = a.alphaMode || "OPAQUE";
          if ("BLEND" === c ? (h.transparent = !0, h.depthWrite = !1) : (h.transparent = !1, "MASK" === c && (h.alphaTest = void 0 !== a.alphaCutoff ? a.alphaCutoff : .5)), void 0 !== a.normalTexture && o !== i.MeshBasicMaterial && (p.push(e.assignTexture(h, "normalMap", a.normalTexture)), h.normalScale = new i.Vector2(1, 1), void 0 !== a.normalTexture.scale)) {
            const t = a.normalTexture.scale;
            h.normalScale.set(t, t)
          }
          return void 0 !== a.occlusionTexture && o !== i.MeshBasicMaterial && (p.push(e.assignTexture(h, "aoMap", a.occlusionTexture)), void 0 !== a.occlusionTexture.strength && (h.aoMapIntensity = a.occlusionTexture.strength)), void 0 !== a.emissiveFactor && o !== i.MeshBasicMaterial && (h.emissive = (new i.Color).fromArray(a.emissiveFactor)), void 0 !== a.emissiveTexture && o !== i.MeshBasicMaterial && p.push(e.assignTexture(h, "emissiveMap", a.emissiveTexture, i.sRGBEncoding)), Promise.all(p).then((function() {
            let r;
            return r = o === T ? s[n.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(h) : new o(h), a.name && (r.name = a.name), O(r, a), e.associations.set(r, {
              materials: t
            }), a.extensions && V(s, r, a), r
          }))
        }
        createUniqueName(t) {
          const e = i.PropertyBinding.sanitizeNodeName(t || "");
          let r = e;
          for (let t = 1; this.nodeNamesUsed[r]; ++t) r = e + "_" + t;
          return this.nodeNamesUsed[r] = !0, r
        }
        loadGeometries(t) {
          const e = this,
            r = this.extensions,
            s = this.primitiveCache;

          function a(t) {
            return r[n.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(t, e).then((function(r) {
              return q(r, t, e)
            }))
          }
          const o = [];
          for (let r = 0, h = t.length; r < h; r++) {
            const h = t[r],
              l = N(h),
              p = s[l];
            if (p) o.push(p.promise);
            else {
              let t;
              t = h.extensions && h.extensions[n.KHR_DRACO_MESH_COMPRESSION] ? a(h) : q(new i.BufferGeometry, h, e), s[l] = {
                primitive: h,
                promise: t
              }, o.push(t)
            }
          }
          return Promise.all(o)
        }
        loadMesh(t) {
          const e = this,
            r = this.json,
            s = this.extensions,
            a = r.meshes[t],
            n = a.primitives,
            o = [];
          for (let t = 0, e = n.length; t < e; t++) {
            const e = void 0 === n[t].material ? (void 0 === (h = this.cache).DefaultMaterial && (h.DefaultMaterial = new i.MeshStandardMaterial({
              color: 16777215,
              emissive: 0,
              metalness: 1,
              roughness: 1,
              transparent: !1,
              depthTest: !0,
              side: i.FrontSide
            })), h.DefaultMaterial) : this.getDependency("material", n[t].material);
            o.push(e)
          }
          var h;
          return o.push(e.loadGeometries(n)), Promise.all(o).then((function(r) {
            const o = r.slice(0, r.length - 1),
              h = r[r.length - 1],
              l = [];
            for (let r = 0, p = h.length; r < p; r++) {
              const p = h[r],
                c = n[r];
              let f;
              const m = o[r];
              if (4 === c.mode || 5 === c.mode || 6 === c.mode || void 0 === c.mode) f = !0 === a.isSkinnedMesh ? new i.SkinnedMesh(p, m) : new i.Mesh(p, m), !0 !== f.isSkinnedMesh || f.geometry.attributes.skinWeight.normalized || f.normalizeSkinWeights(), 5 === c.mode ? f.geometry = W(f.geometry, i.TriangleStripDrawMode) : 6 === c.mode && (f.geometry = W(f.geometry, i.TriangleFanDrawMode));
              else if (1 === c.mode) f = new i.LineSegments(p, m);
              else if (3 === c.mode) f = new i.Line(p, m);
              else if (2 === c.mode) f = new i.LineLoop(p, m);
              else {
                if (0 !== c.mode) throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + c.mode);
                f = new i.Points(p, m)
              }
              Object.keys(f.geometry.morphAttributes).length > 0 && G(f, a), f.name = e.createUniqueName(a.name || "mesh_" + t), O(f, a), c.extensions && V(s, f, c), e.assignFinalMaterial(f), l.push(f)
            }
            for (let r = 0, i = l.length; r < i; r++) e.associations.set(l[r], {
              meshes: t,
              primitives: r
            });
            if (1 === l.length) return l[0];
            const p = new i.Group;
            e.associations.set(p, {
              meshes: t
            });
            for (let t = 0, e = l.length; t < e; t++) p.add(l[t]);
            return p
          }))
        }
        loadCamera(t) {
          let e;
          const r = this.json.cameras[t],
            s = r[r.type];
          if (s) return "perspective" === r.type ? e = new i.PerspectiveCamera(i.MathUtils.radToDeg(s.yfov), s.aspectRatio || 1, s.znear || 1, s.zfar || 2e6) : "orthographic" === r.type && (e = new i.OrthographicCamera(-s.xmag, s.xmag, s.ymag, -s.ymag, s.znear, s.zfar)), r.name && (e.name = this.createUniqueName(r.name)), O(e, r), Promise.resolve(e);
          console.warn("THREE.GLTFLoader: Missing camera parameters.")
        }
        loadSkin(t) {
          const e = this.json.skins[t],
            r = {
              joints: e.joints
            };
          return void 0 === e.inverseBindMatrices ? Promise.resolve(r) : this.getDependency("accessor", e.inverseBindMatrices).then((function(t) {
            return r.inverseBindMatrices = t, r
          }))
        }
        loadAnimation(t) {
          const e = this.json.animations[t],
            r = [],
            s = [],
            a = [],
            n = [],
            o = [];
          for (let t = 0, i = e.channels.length; t < i; t++) {
            const i = e.channels[t],
              h = e.samplers[i.sampler],
              l = i.target,
              p = void 0 !== l.node ? l.node : l.id,
              c = void 0 !== e.parameters ? e.parameters[h.input] : h.input,
              f = void 0 !== e.parameters ? e.parameters[h.output] : h.output;
            r.push(this.getDependency("node", p)), s.push(this.getDependency("accessor", c)), a.push(this.getDependency("accessor", f)), n.push(h), o.push(l)
          }
          return Promise.all([Promise.all(r), Promise.all(s), Promise.all(a), Promise.all(n), Promise.all(o)]).then((function(r) {
            const s = r[0],
              a = r[1],
              n = r[2],
              o = r[3],
              h = r[4],
              l = [];
            for (let t = 0, e = s.length; t < e; t++) {
              const e = s[t],
                r = a[t],
                p = n[t],
                c = o[t],
                f = h[t];
              if (void 0 === e) continue;
              let m;
              switch (e.updateMatrix(), e.matrixAutoUpdate = !0, L[f.path]) {
                case L.weights:
                  m = i.NumberKeyframeTrack;
                  break;
                case L.rotation:
                  m = i.QuaternionKeyframeTrack;
                  break;
                default:
                  m = i.VectorKeyframeTrack
              }
              const u = e.name ? e.name : e.uuid,
                d = void 0 !== c.interpolation ? B[c.interpolation] : i.InterpolateLinear,
                g = [];
              L[f.path] === L.weights ? e.traverse((function(t) {
                t.morphTargetInfluences && g.push(t.name ? t.name : t.uuid)
              })) : g.push(u);
              let y = p.array;
              if (p.normalized) {
                const t = H(y.constructor),
                  e = new Float32Array(y.length);
                for (let r = 0, i = y.length; r < i; r++) e[r] = y[r] * t;
                y = e
              }
              for (let t = 0, e = g.length; t < e; t++) {
                const e = new m(g[t] + "." + L[f.path], r.array, y, d);
                "CUBICSPLINE" === c.interpolation && (e.createInterpolant = function(t) {
                  return new(this instanceof i.QuaternionKeyframeTrack ? w : A)(this.times, this.values, this.getValueSize() / 3, t)
                }, e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0), l.push(e)
              }
            }
            const p = e.name ? e.name : "animation_" + t;
            return new i.AnimationClip(p, void 0, l)
          }))
        }
        createNodeMesh(t) {
          const e = this.json,
            r = this,
            i = e.nodes[t];
          return void 0 === i.mesh ? null : r.getDependency("mesh", i.mesh).then((function(t) {
            const e = r._getNodeRef(r.meshCache, i.mesh, t);
            return void 0 !== i.weights && e.traverse((function(t) {
              if (t.isMesh)
                for (let e = 0, r = i.weights.length; e < r; e++) t.morphTargetInfluences[e] = i.weights[e]
            })), e
          }))
        }
        loadNode(t) {
          const e = this.json,
            r = this.extensions,
            s = this,
            a = e.nodes[t],
            n = a.name ? s.createUniqueName(a.name) : "";
          return function() {
            const e = [],
              r = s._invokeOne((function(e) {
                return e.createNodeMesh && e.createNodeMesh(t)
              }));
            return r && e.push(r), void 0 !== a.camera && e.push(s.getDependency("camera", a.camera).then((function(t) {
              return s._getNodeRef(s.cameraCache, a.camera, t)
            }))), s._invokeAll((function(e) {
              return e.createNodeAttachment && e.createNodeAttachment(t)
            })).forEach((function(t) {
              e.push(t)
            })), Promise.all(e)
          }().then((function(e) {
            let o;
            if (o = !0 === a.isBone ? new i.Bone : e.length > 1 ? new i.Group : 1 === e.length ? e[0] : new i.Object3D, o !== e[0])
              for (let t = 0, r = e.length; t < r; t++) o.add(e[t]);
            if (a.name && (o.userData.name = a.name, o.name = n), O(o, a), a.extensions && V(r, o, a), void 0 !== a.matrix) {
              const t = new i.Matrix4;
              t.fromArray(a.matrix), o.applyMatrix4(t)
            } else void 0 !== a.translation && o.position.fromArray(a.translation), void 0 !== a.rotation && o.quaternion.fromArray(a.rotation), void 0 !== a.scale && o.scale.fromArray(a.scale);
            return s.associations.has(o) || s.associations.set(o, {}), s.associations.get(o).nodes = t, o
          }))
        }
        loadScene(t) {
          const e = this.json,
            r = this.extensions,
            s = this.json.scenes[t],
            a = this,
            n = new i.Group;
          s.name && (n.name = a.createUniqueName(s.name)), O(n, s), s.extensions && V(r, n, s);
          const o = s.nodes || [],
            h = [];
          for (let t = 0, r = o.length; t < r; t++) h.push(U(o[t], n, e, a));
          return Promise.all(h).then((function() {
            return a.associations = (t => {
              const e = new Map;
              for (const [t, r] of a.associations)(t instanceof i.Material || t instanceof i.Texture) && e.set(t, r);
              return t.traverse((t => {
                const r = a.associations.get(t);
                null != r && e.set(t, r)
              })), e
            })(n), n
          }))
        }
      }

      function U(t, e, r, s) {
        const a = r.nodes[t];
        return s.getDependency("node", t).then((function(t) {
          if (void 0 === a.skin) return t;
          let e;
          return s.getDependency("skin", a.skin).then((function(t) {
            e = t;
            const r = [];
            for (let t = 0, i = e.joints.length; t < i; t++) r.push(s.getDependency("node", e.joints[t]));
            return Promise.all(r)
          })).then((function(r) {
            return t.traverse((function(t) {
              if (!t.isMesh) return;
              const s = [],
                a = [];
              for (let t = 0, n = r.length; t < n; t++) {
                const n = r[t];
                if (n) {
                  s.push(n);
                  const r = new i.Matrix4;
                  void 0 !== e.inverseBindMatrices && r.fromArray(e.inverseBindMatrices.array, 16 * t), a.push(r)
                } else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', e.joints[t])
              }
              t.bind(new i.Skeleton(s, a), t.matrixWorld)
            })), t
          }))
        })).then((function(t) {
          e.add(t);
          const i = [];
          if (a.children) {
            const e = a.children;
            for (let a = 0, n = e.length; a < n; a++) {
              const n = e[a];
              i.push(U(n, t, r, s))
            }
          }
          return Promise.all(i)
        }))
      }

      function q(t, e, r) {
        const s = e.attributes,
          a = [];

        function n(e, i) {
          return r.getDependency("accessor", e).then((function(e) {
            t.setAttribute(i, e)
          }))
        }
        for (const e in s) {
          const r = R[e] || e.toLowerCase();
          r in t.attributes || a.push(n(s[e], r))
        }
        if (void 0 !== e.indices && !t.index) {
          const i = r.getDependency("accessor", e.indices).then((function(e) {
            t.setIndex(e)
          }));
          a.push(i)
        }
        return O(t, e),
          function(t, e, r) {
            const s = e.attributes,
              a = new i.Box3;
            if (void 0 === s.POSITION) return; {
              const t = r.json.accessors[s.POSITION],
                e = t.min,
                n = t.max;
              if (void 0 === e || void 0 === n) return void console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
              if (a.set(new i.Vector3(e[0], e[1], e[2]), new i.Vector3(n[0], n[1], n[2])), t.normalized) {
                const e = H(k[t.componentType]);
                a.min.multiplyScalar(e), a.max.multiplyScalar(e)
              }
            }
            const n = e.targets;
            if (void 0 !== n) {
              const t = new i.Vector3,
                e = new i.Vector3;
              for (let i = 0, s = n.length; i < s; i++) {
                const s = n[i];
                if (void 0 !== s.POSITION) {
                  const i = r.json.accessors[s.POSITION],
                    a = i.min,
                    n = i.max;
                  if (void 0 !== a && void 0 !== n) {
                    if (e.setX(Math.max(Math.abs(a[0]), Math.abs(n[0]))), e.setY(Math.max(Math.abs(a[1]), Math.abs(n[1]))), e.setZ(Math.max(Math.abs(a[2]), Math.abs(n[2]))), i.normalized) {
                      const t = H(k[i.componentType]);
                      e.multiplyScalar(t)
                    }
                    t.max(e)
                  } else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")
                }
              }
              a.expandByVector(t)
            }
            t.boundingBox = a;
            const o = new i.Sphere;
            a.getCenter(o.center), o.radius = a.min.distanceTo(a.max) / 2, t.boundingSphere = o
          }(t, e, r), Promise.all(a).then((function() {
            return void 0 !== e.targets ? function(t, e, r) {
              let i = !1,
                s = !1,
                a = !1;
              for (let t = 0, r = e.length; t < r; t++) {
                const r = e[t];
                if (void 0 !== r.POSITION && (i = !0), void 0 !== r.NORMAL && (s = !0), void 0 !== r.COLOR_0 && (a = !0), i && s && a) break
              }
              if (!i && !s && !a) return Promise.resolve(t);
              const n = [],
                o = [],
                h = [];
              for (let l = 0, p = e.length; l < p; l++) {
                const p = e[l];
                if (i) {
                  const e = void 0 !== p.POSITION ? r.getDependency("accessor", p.POSITION) : t.attributes.position;
                  n.push(e)
                }
                if (s) {
                  const e = void 0 !== p.NORMAL ? r.getDependency("accessor", p.NORMAL) : t.attributes.normal;
                  o.push(e)
                }
                if (a) {
                  const e = void 0 !== p.COLOR_0 ? r.getDependency("accessor", p.COLOR_0) : t.attributes.color;
                  h.push(e)
                }
              }
              return Promise.all([Promise.all(n), Promise.all(o), Promise.all(h)]).then((function(e) {
                const r = e[0],
                  n = e[1],
                  o = e[2];
                return i && (t.morphAttributes.position = r), s && (t.morphAttributes.normal = n), a && (t.morphAttributes.color = o), t.morphTargetsRelative = !0, t
              }))
            }(t, e.targets, r) : t
          }))
      }

      function W(t, e) {
        let r = t.getIndex();
        if (null === r) {
          const e = [],
            i = t.getAttribute("position");
          if (void 0 === i) return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), t;
          for (let t = 0; t < i.count; t++) e.push(t);
          t.setIndex(e), r = t.getIndex()
        }
        const s = r.count - 2,
          a = [];
        if (e === i.TriangleFanDrawMode)
          for (let t = 1; t <= s; t++) a.push(r.getX(0)), a.push(r.getX(t)), a.push(r.getX(t + 1));
        else
          for (let t = 0; t < s; t++) t % 2 == 0 ? (a.push(r.getX(t)), a.push(r.getX(t + 1)), a.push(r.getX(t + 2))) : (a.push(r.getX(t + 2)), a.push(r.getX(t + 1)), a.push(r.getX(t)));
        a.length / 3 !== s && console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
        const n = t.clone();
        return n.setIndex(a), n
      }
    },
    87291: (t, e, r) => {
      "use strict";
      r.d(e, {
        Cc: () => n,
        U4: () => a,
        pu: () => o
      });
      const i = [];
      for (let t = 0; t < 256; t++) i[t] = (t < 16 ? "0" : "") + t.toString(16);
      const s = Math.PI / 180;

      function a(t, e, r) {
        return t !== e ? (r - t) / (e - t) : 0
      }

      function n(t, e, r) {
        return (1 - r) * t + r * e
      }

      function o(t) {
        return t * s
      }
      Math.PI
    }
  }
]);