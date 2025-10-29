try {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    e = (new t.Error).stack;
  e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "ef576166-f796-4781-a3f7-7d48ad27d018", t._sentryDebugIdIdentifier = "sentry-dbid-ef576166-f796-4781-a3f7-7d48ad27d018")
} catch (t) {} {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  t._sentryModuleMetadata = t._sentryModuleMetadata || {}, t._sentryModuleMetadata[(new t.Error).stack] = Object.assign({}, t._sentryModuleMetadata[(new t.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-newswire-article",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
} {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  t.SENTRY_RELEASE = {
    id: "sentry-release-id"
  }
}(self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [4873], {
    1077: (t, e, i) => {
      "use strict";
      i.d(e, {
        n: () => S
      });
      var r = i(14238),
        n = i(74325),
        s = i(13506),
        a = i(85483),
        o = i(42001);

      function l(t, e, i) {
        return (n, a) => {
          (0, s.E)(n) && !(0, o.D3)() && (t.animationState && t.animationState.setActive(r.J.Hover, e), i && i(n, a))
        }
      }
      var h = i(62229);
      const p = (t, e) => !!e && (t === e || p(t, e.parentElement));
      var c = i(36912),
        u = i(1104),
        f = i(53727);
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

      function x(t, e, i, {
        root: n,
        margin: s,
        amount: a = "some",
        once: o
      }) {
        (0, h.useEffect)((() => {
          if (!t || !i.current) return;
          const l = {
            root: null == n ? void 0 : n.current,
            rootMargin: s,
            threshold: "number" == typeof a ? a : b[a]
          };
          return function(t, e, i) {
            const r = function({
              root: t,
              ...e
            }) {
              const i = t || document;
              y.has(i) || y.set(i, {});
              const r = y.get(i),
                n = JSON.stringify(e);
              return r[n] || (r[n] = new IntersectionObserver(v, {
                root: t,
                ...e
              })), r[n]
            }(e);
            return m.set(t, i), r.observe(t), () => {
              m.delete(t), r.unobserve(t)
            }
          }(i.current, l, (t => {
            const {
              isIntersecting: n
            } = t;
            if (e.isInView === n) return;
            if (e.isInView = n, o && !n && e.hasEnteredView) return;
            n && (e.hasEnteredView = !0), i.animationState && i.animationState.setActive(r.J.InView, n);
            const s = i.getProps(),
              a = n ? s.onViewportEnter : s.onViewportLeave;
            a && a(t)
          }))
        }), [t, n, s, a])
      }

      function P(t, e, i, {
        fallback: n = !0
      }) {
        (0, h.useEffect)((() => {
          var s;
          t && n && ("production" !== f._ && (s = "IntersectionObserver not available on this device. whileInView animations will trigger on mount.", d.has(s) || (console.warn(s), d.add(s))), requestAnimationFrame((() => {
            e.hasEnteredView = !0;
            const {
              onViewportEnter: t
            } = i.getProps();
            t && t(null), i.animationState && i.animationState.setActive(r.J.InView, !0)
          })))
        }), [t])
      }
      var E = i(6933);
      const S = {
        inView: (0, E.n)((function({
          visualElement: t,
          whileInView: e,
          onViewportEnter: i,
          onViewportLeave: r,
          viewport: n = {}
        }) {
          const s = (0, h.useRef)({
            hasEnteredView: !1,
            isInView: !1
          });
          let a = Boolean(e || i || r);
          n.once && s.current.hasEnteredView && (a = !1), ("undefined" == typeof IntersectionObserver ? P : x)(a, s.current, t, n)
        })),
        tap: (0, E.n)((function({
          onTap: t,
          onTapStart: e,
          onTapCancel: i,
          whileTap: n,
          visualElement: s
        }) {
          const l = t || e || i || n,
            f = (0, h.useRef)(!1),
            d = (0, h.useRef)(null),
            m = {
              passive: !(e || t || i || x)
            };

          function y() {
            d.current && d.current(), d.current = null
          }

          function g() {
            return y(), f.current = !1, s.animationState && s.animationState.setActive(r.J.Tap, !1), !(0, o.D3)()
          }

          function v(e, r) {
            g() && (p(s.current, e.target) ? t && t(e, r) : i && i(e, r))
          }

          function b(t, e) {
            g() && i && i(t, e)
          }

          function x(t, i) {
            y(), f.current || (f.current = !0, d.current = (0, u.F)((0, a.h)(window, "pointerup", v, m), (0, a.h)(window, "pointercancel", b, m)), s.animationState && s.animationState.setActive(r.J.Tap, !0), e && e(t, i))
          }(0, a.B)(s, "pointerdown", l ? x : void 0, m), (0, c.l)(y)
        })),
        focus: (0, E.n)((function({
          whileFocus: t,
          visualElement: e
        }) {
          const {
            animationState: i
          } = e;
          (0, n.Q)(e, "focus", t ? () => {
            i && i.setActive(r.J.Focus, !0)
          } : void 0), (0, n.Q)(e, "blur", t ? () => {
            i && i.setActive(r.J.Focus, !1)
          } : void 0)
        })),
        hover: (0, E.n)((function({
          onHoverStart: t,
          onHoverEnd: e,
          whileHover: i,
          visualElement: r
        }) {
          (0, a.B)(r, "pointerenter", t || i ? l(r, !0, t) : void 0, {
            passive: !t
          }), (0, a.B)(r, "pointerleave", e || i ? l(r, !1, e) : void 0, {
            passive: !e
          })
        }))
      }
    },
    1104: (t, e, i) => {
      "use strict";
      i.d(e, {
        F: () => n
      });
      const r = (t, e) => i => e(t(i)),
        n = (...t) => t.reduce(r)
    },
    2472: (t, e, i) => {
      "use strict";
      i.d(e, {
        KN: () => a,
        gQ: () => p,
        px: () => o,
        uj: () => s,
        vh: () => l,
        vw: () => h
      });
      var r = i(56285);
      const n = t => ({
          test: e => (0, r.Kg)(e) && e.endsWith(t) && 1 === e.split(" ").length,
          parse: parseFloat,
          transform: e => `${e}${t}`
        }),
        s = n("deg"),
        a = n("%"),
        o = n("px"),
        l = n("vh"),
        h = n("vw"),
        p = {
          ...a,
          parse: t => a.parse(t) / 100,
          transform: t => a.transform(100 * t)
        }
    },
    2638: (t, e, i) => {
      "use strict";
      i.d(e, {
        k: () => n
      });
      var r = i(78069);

      function n(t) {
        return Boolean((0, r.S)(t) && t.add)
      }
    },
    4346: function(t, e, i) {
      ! function(t, e, i) {
        "use strict";

        function r(t) {
          return t && "object" == typeof t && "default" in t ? t : {
            default: t
          }
        }
        var n = r(e),
          s = r(i);

        function a(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var i = 0, r = Array(e); i < e; i++) r[i] = t[i];
          return r
        }

        function o(t, e, i) {
          return (e = function(t) {
            var e = function(t, e) {
              if ("object" != typeof t || !t) return t;
              var i = t[Symbol.toPrimitive];
              if (void 0 !== i) {
                var r = i.call(t, e || "default");
                if ("object" != typeof r) return r;
                throw new TypeError("@@toPrimitive must return a primitive value.")
              }
              return ("string" === e ? String : Number)(t)
            }(t, "string");
            return "symbol" == typeof e ? e : e + ""
          }(e)) in t ? Object.defineProperty(t, e, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : t[e] = i, t
        }

        function l(t, e) {
          var i = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter((function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), i.push.apply(i, r)
          }
          return i
        }

        function h(t) {
          for (var e = 1; e < arguments.length; e++) {
            var i = null != arguments[e] ? arguments[e] : {};
            e % 2 ? l(Object(i), !0).forEach((function(e) {
              o(t, e, i[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : l(Object(i)).forEach((function(e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
            }))
          }
          return t
        }

        function p(t, e) {
          if (null == t) return {};
          var i, r, n = function(t, e) {
            if (null == t) return {};
            var i = {};
            for (var r in t)
              if ({}.hasOwnProperty.call(t, r)) {
                if (e.includes(r)) continue;
                i[r] = t[r]
              } return i
          }(t, e);
          if (Object.getOwnPropertySymbols) {
            var s = Object.getOwnPropertySymbols(t);
            for (r = 0; r < s.length; r++) i = s[r], e.includes(i) || {}.propertyIsEnumerable.call(t, i) && (n[i] = t[i])
          }
          return n
        }

        function c(t, e) {
          return function(t) {
            if (Array.isArray(t)) return t
          }(t) || function(t, e) {
            var i = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (null != i) {
              var r, n, s, a, o = [],
                l = !0,
                h = !1;
              try {
                if (s = (i = i.call(t)).next, 0 === e) {
                  if (Object(i) !== i) return;
                  l = !1
                } else
                  for (; !(l = (r = s.call(i)).done) && (o.push(r.value), o.length !== e); l = !0);
              } catch (t) {
                h = !0, n = t
              } finally {
                try {
                  if (!l && null != i.return && (a = i.return(), Object(a) !== a)) return
                } finally {
                  if (h) throw n
                }
              }
              return o
            }
          }(t, e) || function(t, e) {
            if (t) {
              if ("string" == typeof t) return a(t, e);
              var i = {}.toString.call(t).slice(8, -1);
              return "Object" === i && t.constructor && (i = t.constructor.name), "Map" === i || "Set" === i ? Array.from(t) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? a(t, e) : void 0
            }
          }(t, e) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
          }()
        }
        var u = ["animationData", "loop", "autoplay", "initialSegment", "onComplete", "onLoopComplete", "onEnterFrame", "onSegmentStart", "onConfigReady", "onDataReady", "onDataFailed", "onLoadedImages", "onDOMLoaded", "onDestroy", "lottieRef", "renderer", "name", "assetsPath", "rendererSettings"],
          f = function(t, e) {
            var r = t.animationData,
              a = t.loop,
              o = t.autoplay,
              l = t.initialSegment,
              f = t.onComplete,
              d = t.onLoopComplete,
              m = t.onEnterFrame,
              y = t.onSegmentStart,
              g = t.onConfigReady,
              v = t.onDataReady,
              b = t.onDataFailed,
              x = t.onLoadedImages,
              P = t.onDOMLoaded,
              E = t.onDestroy;
            t.lottieRef, t.renderer, t.name, t.assetsPath, t.rendererSettings;
            var S = p(t, u),
              C = c(i.useState(!1), 2),
              T = C[0],
              A = C[1],
              w = i.useRef(),
              k = i.useRef(null);
            return i.useEffect((function() {
              var e = function() {
                var e, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (k.current) {
                  null === (e = w.current) || void 0 === e || e.destroy();
                  var r = h(h(h({}, t), i), {}, {
                    container: k.current
                  });
                  return w.current = n.default.loadAnimation(r), A(!!w.current),
                    function() {
                      var t;
                      null === (t = w.current) || void 0 === t || t.destroy(), w.current = void 0
                    }
                }
              }();
              return function() {
                return null == e ? void 0 : e()
              }
            }), [r, a]), i.useEffect((function() {
              w.current && (w.current.autoplay = !!o)
            }), [o]), i.useEffect((function() {
              w.current && (l ? Array.isArray(l) && l.length && ((w.current.currentRawFrame < l[0] || w.current.currentRawFrame > l[1]) && (w.current.currentRawFrame = l[0]), w.current.setSegment(l[0], l[1])) : w.current.resetSegments(!0))
            }), [l]), i.useEffect((function() {
              var t = [{
                name: "complete",
                handler: f
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
                handler: P
              }, {
                name: "destroy",
                handler: E
              }].filter((function(t) {
                return null != t.handler
              }));
              if (t.length) {
                var e = t.map((function(t) {
                  var e;
                  return null === (e = w.current) || void 0 === e || e.addEventListener(t.name, t.handler),
                    function() {
                      var e;
                      null === (e = w.current) || void 0 === e || e.removeEventListener(t.name, t.handler)
                    }
                }));
                return function() {
                  e.forEach((function(t) {
                    return t()
                  }))
                }
              }
            }), [f, d, m, y, g, v, b, x, P, E]), {
              View: s.default.createElement("div", h({
                style: e,
                ref: k
              }, S)),
              play: function() {
                var t;
                null === (t = w.current) || void 0 === t || t.play()
              },
              stop: function() {
                var t;
                null === (t = w.current) || void 0 === t || t.stop()
              },
              pause: function() {
                var t;
                null === (t = w.current) || void 0 === t || t.pause()
              },
              setSpeed: function(t) {
                var e;
                null === (e = w.current) || void 0 === e || e.setSpeed(t)
              },
              goToAndStop: function(t, e) {
                var i;
                null === (i = w.current) || void 0 === i || i.goToAndStop(t, e)
              },
              goToAndPlay: function(t, e) {
                var i;
                null === (i = w.current) || void 0 === i || i.goToAndPlay(t, e)
              },
              setDirection: function(t) {
                var e;
                null === (e = w.current) || void 0 === e || e.setDirection(t)
              },
              playSegments: function(t, e) {
                var i;
                null === (i = w.current) || void 0 === i || i.playSegments(t, e)
              },
              setSubframe: function(t) {
                var e;
                null === (e = w.current) || void 0 === e || e.setSubframe(t)
              },
              getDuration: function(t) {
                var e;
                return null === (e = w.current) || void 0 === e ? void 0 : e.getDuration(t)
              },
              destroy: function() {
                var t;
                null === (t = w.current) || void 0 === t || t.destroy(), w.current = void 0
              },
              animationContainerRef: k,
              animationLoaded: T,
              animationItem: w.current
            }
          };
        var d = function(t) {
            var e = t.wrapperRef,
              r = t.animationItem,
              n = t.mode,
              s = t.actions;
            i.useEffect((function() {
              var t, i, a, o, l, h = e.current;
              if (h && r && s.length) {
                r.stop();
                switch (n) {
                  case "scroll":
                    return o = null, l = function() {
                        var t, e, i, n = (e = (t = h.getBoundingClientRect()).top, i = t.height, (window.innerHeight - e) / (window.innerHeight + i)),
                          a = s.find((function(t) {
                            var e = t.visibility;
                            return e && n >= e[0] && n <= e[1]
                          }));
                        if (a) {
                          if ("seek" === a.type && a.visibility && 2 === a.frames.length) {
                            var l = a.frames[0] + Math.ceil((n - a.visibility[0]) / (a.visibility[1] - a.visibility[0]) * a.frames[1]);
                            r.goToAndStop(l - r.firstFrame - 1, !0)
                          }
                          "loop" === a.type && (null === o || o !== a.frames || r.isPaused) && (r.playSegments(a.frames, !0), o = a.frames), "play" === a.type && r.isPaused && (r.resetSegments(!0), r.play()), "stop" === a.type && r.goToAndStop(a.frames[0] - r.firstFrame - 1, !0)
                        }
                      }, document.addEventListener("scroll", l),
                      function() {
                        document.removeEventListener("scroll", l)
                      };
                  case "cursor":
                    return t = function(t, e) {
                        var i, n, a, o, l = t,
                          p = e;
                        if (-1 !== l && -1 !== p) {
                          var c = (i = l, n = p, o = (a = h.getBoundingClientRect()).top, {
                            x: (i - a.left) / a.width,
                            y: (n - o) / a.height
                          });
                          l = c.x, p = c.y
                        }
                        var u = s.find((function(t) {
                          var e = t.position;
                          return e && Array.isArray(e.x) && Array.isArray(e.y) ? l >= e.x[0] && l <= e.x[1] && p >= e.y[0] && p <= e.y[1] : !(!e || Number.isNaN(e.x) || Number.isNaN(e.y)) && l === e.x && p === e.y
                        }));
                        if (u) {
                          if ("seek" === u.type && u.position && Array.isArray(u.position.x) && Array.isArray(u.position.y) && 2 === u.frames.length) {
                            var f = (l - u.position.x[0]) / (u.position.x[1] - u.position.x[0]),
                              d = (p - u.position.y[0]) / (u.position.y[1] - u.position.y[0]);
                            r.playSegments(u.frames, !0), r.goToAndStop(Math.ceil((f + d) / 2 * (u.frames[1] - u.frames[0])), !0)
                          }
                          "loop" === u.type && r.playSegments(u.frames, !0), "play" === u.type && (r.isPaused && r.resetSegments(!1), r.playSegments(u.frames)), "stop" === u.type && r.goToAndStop(u.frames[0], !0)
                        }
                      }, i = function(e) {
                        t(e.clientX, e.clientY)
                      }, a = function() {
                        t(-1, -1)
                      }, h.addEventListener("mousemove", i), h.addEventListener("mouseout", a),
                      function() {
                        h.removeEventListener("mousemove", i), h.removeEventListener("mouseout", a)
                      }
                }
              }
            }), [n, r])
          },
          m = function(t) {
            var e = t.actions,
              i = t.mode,
              r = t.lottieObj,
              n = r.animationItem,
              s = r.View,
              a = r.animationContainerRef;
            return d({
              actions: e,
              animationItem: n,
              mode: i,
              wrapperRef: a
            }), s
          },
          y = ["style", "interactivity"];
        Object.defineProperty(t, "LottiePlayer", {
          enumerable: !0,
          get: function() {
            return n.default
          }
        }), t.default = function(t) {
          var e, r, n, s = t.style,
            a = t.interactivity,
            o = p(t, y),
            l = f(o, s),
            h = l.View,
            c = l.play,
            u = l.stop,
            d = l.pause,
            g = l.setSpeed,
            v = l.goToAndStop,
            b = l.goToAndPlay,
            x = l.setDirection,
            P = l.playSegments,
            E = l.setSubframe,
            S = l.getDuration,
            C = l.destroy,
            T = l.animationContainerRef,
            A = l.animationLoaded,
            w = l.animationItem;
          return i.useEffect((function() {
            t.lottieRef && (t.lottieRef.current = {
              play: c,
              stop: u,
              pause: d,
              setSpeed: g,
              goToAndPlay: b,
              goToAndStop: v,
              setDirection: x,
              playSegments: P,
              setSubframe: E,
              getDuration: S,
              destroy: C,
              animationContainerRef: T,
              animationLoaded: A,
              animationItem: w
            })
          }), [null === (e = t.lottieRef) || void 0 === e ? void 0 : e.current]), m({
            lottieObj: {
              View: h,
              play: c,
              stop: u,
              pause: d,
              setSpeed: g,
              goToAndStop: v,
              goToAndPlay: b,
              setDirection: x,
              playSegments: P,
              setSubframe: E,
              getDuration: S,
              destroy: C,
              animationContainerRef: T,
              animationLoaded: A,
              animationItem: w
            },
            actions: null !== (r = null == a ? void 0 : a.actions) && void 0 !== r ? r : [],
            mode: null !== (n = null == a ? void 0 : a.mode) && void 0 !== n ? n : "scroll"
          })
        }, t.useLottie = f, t.useLottieInteractivity = m, Object.defineProperty(t, "__esModule", {
          value: !0
        })
      }(e, i(40338), i(62229))
    },
    6342: (t, e, i) => {
      "use strict";
      i.d(e, {
        e: () => r
      });
      const r = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"])
    },
    6933: (t, e, i) => {
      "use strict";
      i.d(e, {
        n: () => r
      });
      const r = t => e => (t(e), null)
    },
    7403: (t, e, i) => {
      "use strict";
      i.d(e, {
        p: () => l
      });
      var r = i(62983),
        n = i(56285);
      const s = new Set(["brightness", "contrast", "saturate", "opacity"]);

      function a(t) {
        const [e, i] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        const [r] = i.match(n.SY) || [];
        if (!r) return t;
        const a = i.replace(r, "");
        let o = s.has(e) ? 1 : 0;
        return r !== i && (o *= 100), e + "(" + o + a + ")"
      }
      const o = /([a-z-]*)\(.*?\)/g,
        l = {
          ...r.f,
          getAnimatableNone: t => {
            const e = t.match(o);
            return e ? e.map(a).join(" ") : t
          }
        }
    },
    7953: (t, e, i) => {
      "use strict";
      i.d(e, {
        G: () => r
      });
      const r = t => e => 1 - t(1 - e)
    },
    8687: (t, e, i) => {
      "use strict";
      i.d(e, {
        J: () => a
      });
      var r = i(62983),
        n = i(7403),
        s = i(88514);

      function a(t, e) {
        var i;
        let a = (0, s.D)(t);
        return a !== n.p && (a = r.f), null === (i = a.getAnimatableNone) || void 0 === i ? void 0 : i.call(a, e)
      }
    },
    9309: (t, e, i) => {
      "use strict";
      i.d(e, {
        Y: () => r
      });
      const r = (0, i(62229).createContext)({
        strict: !1
      })
    },
    9394: (t, e, i) => {
      "use strict";
      i.d(e, {
        $: () => n,
        H: () => r
      });
      const r = {};

      function n(t) {
        Object.assign(r, t)
      }
    },
    9448: (t, e, i) => {
      "use strict";
      i.d(e, {
        z: () => s
      });
      var r = i(9394),
        n = i(60401);

      function s(t, {
        layout: e,
        layoutId: i
      }) {
        return n.f.has(t) || t.startsWith("origin") || (e || void 0 !== i) && (!!r.H[t] || "opacity" === t)
      }
    },
    11694: (t, e, i) => {
      "use strict";
      i.d(e, {
        O: () => o,
        e: () => a
      });
      var r = i(32467),
        n = i(79354);
      const s = ["initial", "animate", "exit", "whileHover", "whileDrag", "whileTap", "whileFocus", "whileInView"];

      function a(t) {
        return (0, r.N)(t.animate) || s.some((e => (0, n.w)(t[e])))
      }

      function o(t) {
        return Boolean(a(t) || t.variants)
      }
    },
    13506: (t, e, i) => {
      "use strict";

      function r(t) {
        return "undefined" != typeof PointerEvent && t instanceof PointerEvent ? !("mouse" !== t.pointerType) : t instanceof MouseEvent
      }

      function n(t) {
        return !!t.touches
      }
      i.d(e, {
        E: () => r,
        k: () => n
      })
    },
    14238: (t, e, i) => {
      "use strict";
      var r;
      i.d(e, {
          J: () => r
        }),
        function(t) {
          t.Animate = "animate", t.Hover = "whileHover", t.Tap = "whileTap", t.Drag = "whileDrag", t.Focus = "whileFocus", t.InView = "whileInView", t.Exit = "exit"
        }(r || (r = {}))
    },
    15514: (t, e, i) => {
      "use strict";
      i.d(e, {
        ci: () => C,
        US: () => P
      });
      var r = i(32467),
        n = i(55217);

      function s(t, e) {
        if (!Array.isArray(e)) return !1;
        const i = e.length;
        if (i !== t.length) return !1;
        for (let r = 0; r < i; r++)
          if (e[r] !== t[r]) return !1;
        return !0
      }
      var a = i(71022),
        o = i(43320),
        l = i(60401),
        h = i(2638),
        p = i(39997);
      const c = (t, e) => `${t}: ${e}`;

      function u(t, e) {
        const {
          MotionAppearAnimations: i
        } = window, r = c(t, l.f.has(e) ? "transform" : e), n = i && i.get(r);
        return n ? (p.OH.render((() => {
          try {
            n.cancel(), i.delete(r)
          } catch (t) {}
        })), n.currentTime || 0) : 0
      }
      const f = "data-" + (0, i(19665).I)("framerAppearId");
      var d = i(42452);

      function m(t, e, i = {}) {
        var r;
        const n = (0, o.K)(t, e, i.custom);
        let {
          transition: s = t.getDefaultTransition() || {}
        } = n || {};
        i.transitionOverride && (s = i.transitionOverride);
        const a = n ? () => y(t, n, i) : () => Promise.resolve(),
          l = (null === (r = t.variantChildren) || void 0 === r ? void 0 : r.size) ? (r = 0) => {
            const {
              delayChildren: n = 0,
              staggerChildren: a,
              staggerDirection: o
            } = s;
            return function(t, e, i = 0, r = 0, n = 1, s) {
              const a = [],
                o = (t.variantChildren.size - 1) * r,
                l = 1 === n ? (t = 0) => t * r : (t = 0) => o - t * r;
              return Array.from(t.variantChildren).sort(g).forEach(((t, r) => {
                a.push(m(t, e, {
                  ...s,
                  delay: i + l(r)
                }).then((() => t.notify("AnimationComplete", e))))
              })), Promise.all(a)
            }(t, e, n + r, a, o, i)
          } : () => Promise.resolve(),
          {
            when: h
          } = s;
        if (h) {
          const [t, e] = "beforeChildren" === h ? [a, l] : [l, a];
          return t().then(e)
        }
        return Promise.all([a(), l(i.delay)])
      }

      function y(t, e, {
        delay: i = 0,
        transitionOverride: r,
        type: n
      } = {}) {
        var s;
        let {
          transition: o = t.getDefaultTransition(),
          transitionEnd: p,
          ...c
        } = t.makeTargetAnimatable(e);
        const m = t.getValue("willChange");
        r && (o = r);
        const y = [],
          g = n && (null === (s = t.animationState) || void 0 === s ? void 0 : s.getState()[n]);
        for (const e in c) {
          const r = t.getValue(e),
            n = c[e];
          if (!r || void 0 === n || g && v(g, e)) continue;
          let s = {
            delay: i,
            elapsed: 0,
            ...o
          };
          if (t.shouldReduceMotion && l.f.has(e) && (s = {
              ...s,
              type: !1,
              delay: 0
            }), !r.hasAnimated) {
            const i = t.getProps()[f];
            i && (s.elapsed = u(i, e))
          }
          let a = r.start((0, d.O)(e, r, n, s));
          (0, h.k)(m) && (m.add(e), a = a.then((() => m.remove(e)))), y.push(a)
        }
        return Promise.all(y).then((() => {
          p && (0, a.Uo)(t, p)
        }))
      }

      function g(t, e) {
        return t.sortNodePosition(e)
      }

      function v({
        protectedKeys: t,
        needsAnimating: e
      }, i) {
        const r = t.hasOwnProperty(i) && !0 !== e[i];
        return e[i] = !1, r
      }
      var b = i(79354),
        x = i(14238);
      const P = [x.J.Animate, x.J.InView, x.J.Focus, x.J.Hover, x.J.Tap, x.J.Drag, x.J.Exit],
        E = [...P].reverse(),
        S = P.length;

      function C(t) {
        let e = function(t) {
          return e => Promise.all(e.map((({
            animation: e,
            options: i
          }) => function(t, e, i = {}) {
            let r;
            if (t.notify("AnimationStart", e), Array.isArray(e)) {
              const n = e.map((e => m(t, e, i)));
              r = Promise.all(n)
            } else if ("string" == typeof e) r = m(t, e, i);
            else {
              const n = "function" == typeof e ? (0, o.K)(t, e, i.custom) : e;
              r = y(t, n, i)
            }
            return r.then((() => t.notify("AnimationComplete", e)))
          }(t, e, i))))
        }(t);
        const i = {
          [x.J.Animate]: T(!0),
          [x.J.InView]: T(),
          [x.J.Hover]: T(),
          [x.J.Tap]: T(),
          [x.J.Drag]: T(),
          [x.J.Focus]: T(),
          [x.J.Exit]: T()
        };
        let a = !0;
        const l = (e, i) => {
          const r = (0, o.K)(t, i);
          if (r) {
            const {
              transition: t,
              transitionEnd: i,
              ...n
            } = r;
            e = {
              ...e,
              ...n,
              ...i
            }
          }
          return e
        };

        function h(o, h) {
          const p = t.getProps(),
            c = t.getVariantContext(!0) || {},
            u = [],
            f = new Set;
          let d = {},
            m = 1 / 0;
          for (let e = 0; e < S; e++) {
            const v = E[e],
              x = i[v],
              P = void 0 !== p[v] ? p[v] : c[v],
              S = (0, b.w)(P),
              C = v === h ? x.isActive : null;
            !1 === C && (m = e);
            let T = P === c[v] && P !== p[v] && S;
            if (T && a && t.manuallyAnimateOnMount && (T = !1), x.protectedKeys = {
                ...d
              }, !x.isActive && null === C || !P && !x.prevProp || (0, r.N)(P) || "boolean" == typeof P) continue;
            const A = (y = x.prevProp, "string" == typeof(g = P) ? g !== y : !!Array.isArray(g) && !s(g, y));
            let w = A || v === h && x.isActive && !T && S || e > m && S;
            const k = Array.isArray(P) ? P : [P];
            let D = k.reduce(l, {});
            !1 === C && (D = {});
            const {
              prevResolvedValues: M = {}
            } = x, _ = {
              ...M,
              ...D
            }, F = t => {
              w = !0, f.delete(t), x.needsAnimating[t] = !0
            };
            for (const t in _) {
              const e = D[t],
                i = M[t];
              d.hasOwnProperty(t) || (e !== i ? (0, n.p)(e) && (0, n.p)(i) ? !s(e, i) || A ? F(t) : x.protectedKeys[t] = !0 : void 0 !== e ? F(t) : f.add(t) : void 0 !== e && f.has(t) ? F(t) : x.protectedKeys[t] = !0)
            }
            x.prevProp = P, x.prevResolvedValues = D, x.isActive && (d = {
              ...d,
              ...D
            }), a && t.blockInitialAnimation && (w = !1), w && !T && u.push(...k.map((t => ({
              animation: t,
              options: {
                type: v,
                ...o
              }
            }))))
          }
          var y, g;
          if (f.size) {
            const e = {};
            f.forEach((i => {
              const r = t.getBaseTarget(i);
              void 0 !== r && (e[i] = r)
            })), u.push({
              animation: e
            })
          }
          let v = Boolean(u.length);
          return a && !1 === p.initial && !t.manuallyAnimateOnMount && (v = !1), a = !1, v ? e(u) : Promise.resolve()
        }
        return {
          animateChanges: h,
          setActive: function(e, r, n) {
            var s;
            if (i[e].isActive === r) return Promise.resolve();
            null === (s = t.variantChildren) || void 0 === s || s.forEach((t => {
              var i;
              return null === (i = t.animationState) || void 0 === i ? void 0 : i.setActive(e, r)
            })), i[e].isActive = r;
            const a = h(n, e);
            for (const t in i) i[t].protectedKeys = {};
            return a
          },
          setAnimateFunction: function(i) {
            e = i(t)
          },
          getState: () => i
        }
      }

      function T(t = !1) {
        return {
          isActive: t,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {}
        }
      }
    },
    19665: (t, e, i) => {
      "use strict";
      i.d(e, {
        I: () => r
      });
      const r = t => t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
    },
    19782: (t, e, i) => {
      "use strict";
      i.d(e, {
        Q: () => n
      });
      const r = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

      function n(t) {
        return "string" == typeof t && !t.includes("-") && !!(r.indexOf(t) > -1 || /[A-Z]/.test(t))
      }
    },
    19945: (t, e, i) => {
      "use strict";
      i.d(e, {
        ge: () => n,
        xU: () => r
      });
      const r = () => ({
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
        n = () => ({
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
    21297: (t, e, i) => {
      "use strict";
      i.d(e, {
        u: () => s
      });
      var r = i(84804),
        n = i(78069);

      function s(t) {
        const e = (0, n.S)(t) ? t.get() : t;
        return (0, r.B)(e) ? e.toValue() : e
      }
    },
    22557: (t, e, i) => {
      "use strict";
      i.d(e, {
        P: () => Se
      });
      var r = i(85289),
        n = i(98222),
        s = i(1077),
        a = i(71752),
        o = i(62229),
        l = i(81547),
        h = i(13506),
        p = i(66541),
        c = i(39997),
        u = i(83884),
        f = i(85483),
        d = i(1104);
      const m = (t, e) => Math.abs(t - e);
      var y = i(69602);
      class g {
        constructor(t, e, {
          transformPagePoint: i
        } = {}) {
          if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = () => {
              if (!this.lastMoveEvent || !this.lastMoveEventInfo) return;
              const t = x(this.lastMoveEventInfo, this.history),
                e = null !== this.startEvent,
                i = function(t, e) {
                  const i = m(t.x, e.x),
                    r = m(t.y, e.y);
                  return Math.sqrt(i ** 2 + r ** 2)
                }(t.offset, {
                  x: 0,
                  y: 0
                }) >= 3;
              if (!e && !i) return;
              const {
                point: r
              } = t, {
                timestamp: n
              } = y.u;
              this.history.push({
                ...r,
                timestamp: n
              });
              const {
                onStart: s,
                onMove: a
              } = this.handlers;
              e || (s && s(this.lastMoveEvent, t), this.startEvent = this.lastMoveEvent), a && a(this.lastMoveEvent, t)
            }, this.handlePointerMove = (t, e) => {
              this.lastMoveEvent = t, this.lastMoveEventInfo = v(e, this.transformPagePoint), (0, h.E)(t) && 0 === t.buttons ? this.handlePointerUp(t, e) : c.OH.update(this.updatePoint, !0)
            }, this.handlePointerUp = (t, e) => {
              this.end();
              const {
                onEnd: i,
                onSessionEnd: r
              } = this.handlers, n = x(v(e, this.transformPagePoint), this.history);
              this.startEvent && i && i(t, n), r && r(t, n)
            }, (0, h.k)(t) && t.touches.length > 1) return;
          this.handlers = e, this.transformPagePoint = i;
          const r = v((0, p.e)(t), this.transformPagePoint),
            {
              point: n
            } = r,
            {
              timestamp: s
            } = y.u;
          this.history = [{
            ...n,
            timestamp: s
          }];
          const {
            onSessionStart: a
          } = e;
          a && a(t, x(r, this.history)), this.removeListeners = (0, d.F)((0, f.h)(window, "pointermove", this.handlePointerMove), (0, f.h)(window, "pointerup", this.handlePointerUp), (0, f.h)(window, "pointercancel", this.handlePointerUp))
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
          delta: b(t, E(e)),
          offset: b(t, P(e)),
          velocity: S(e, .1)
        }
      }

      function P(t) {
        return t[0]
      }

      function E(t) {
        return t[t.length - 1]
      }

      function S(t, e) {
        if (t.length < 2) return {
          x: 0,
          y: 0
        };
        let i = t.length - 1,
          r = null;
        const n = E(t);
        for (; i >= 0 && (r = t[i], !(n.timestamp - r.timestamp > (0, u.f)(e)));) i--;
        if (!r) return {
          x: 0,
          y: 0
        };
        const s = (n.timestamp - r.timestamp) / 1e3;
        if (0 === s) return {
          x: 0,
          y: 0
        };
        const a = {
          x: (n.x - r.x) / s,
          y: (n.y - r.y) / s
        };
        return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a
      }
      var C = i(42001),
        T = i(43744),
        A = i(27485),
        w = i(72414);

      function k(t) {
        return t.max - t.min
      }

      function D(t, e = 0, i = .01) {
        return Math.abs(t - e) <= i
      }

      function M(t, e, i, r = .5) {
        t.origin = r, t.originPoint = (0, w.j)(e.min, e.max, t.origin), t.scale = k(i) / k(e), (D(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1), t.translate = (0, w.j)(i.min, i.max, t.origin) - t.originPoint, (D(t.translate) || isNaN(t.translate)) && (t.translate = 0)
      }

      function _(t, e, i, r) {
        M(t.x, e.x, i.x, null == r ? void 0 : r.originX), M(t.y, e.y, i.y, null == r ? void 0 : r.originY)
      }

      function F(t, e, i) {
        t.min = i.min + e.min, t.max = t.min + k(e)
      }

      function I(t, e, i) {
        t.min = e.min - i.min, t.max = t.min + k(e)
      }

      function V(t, e, i) {
        I(t.x, e.x, i.x), I(t.y, e.y, i.y)
      }
      var B = i(26217);

      function R(t, e, i) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0
        }
      }

      function L(t, e) {
        let i = e.min - t.min,
          r = e.max - t.max;
        return e.max - e.min < t.max - t.min && ([i, r] = [r, i]), {
          min: i,
          max: r
        }
      }
      const O = .35;

      function N(t, e, i) {
        return {
          min: G(t, e),
          max: G(t, i)
        }
      }

      function G(t, e) {
        return "number" == typeof t ? t : t[e] || 0
      }
      var z = i(14238),
        j = i(19945);

      function H(t) {
        return [t("x"), t("y")]
      }
      var q = i(25394),
        $ = i(95355),
        W = i(74325),
        U = i(2472),
        Y = i(42452);
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
              var i;
              const {
                drag: r,
                dragPropagation: n,
                onDragStart: s
              } = this.getProps();
              (!r || n || (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = (0, C.nQ)(r), this.openGlobalLock)) && (this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), H((t => {
                var e, i;
                let r = this.getAxisMotionValue(t).get() || 0;
                if (U.KN.test(r)) {
                  const n = null === (i = null === (e = this.visualElement.projection) || void 0 === e ? void 0 : e.layout) || void 0 === i ? void 0 : i.layoutBox[t];
                  n && (r = k(n) * (parseFloat(r) / 100))
                }
                this.originPoint[t] = r
              })), null == s || s(t, e), null === (i = this.visualElement.animationState) || void 0 === i || i.setActive(z.J.Drag, !0))
            },
            onMove: (t, e) => {
              const {
                dragPropagation: i,
                dragDirectionLock: r,
                onDirectionLock: n,
                onDrag: s
              } = this.getProps();
              if (!i && !this.openGlobalLock) return;
              const {
                offset: a
              } = e;
              if (r && null === this.currentDirection) return this.currentDirection = function(t, e = 10) {
                let i = null;
                return Math.abs(t.y) > e ? i = "y" : Math.abs(t.x) > e && (i = "x"), i
              }(a), void(null !== this.currentDirection && (null == n || n(this.currentDirection)));
              this.updateAxis("x", e.point, a), this.updateAxis("y", e.point, a), this.visualElement.render(), null == s || s(t, e)
            },
            onSessionEnd: (t, e) => this.stop(t, e)
          }, {
            transformPagePoint: this.visualElement.getTransformPagePoint()
          }))
        }
        stop(t, e) {
          const i = this.isDragging;
          if (this.cancel(), !i) return;
          const {
            velocity: r
          } = e;
          this.startAnimation(r);
          const {
            onDragEnd: n
          } = this.getProps();
          null == n || n(t, e)
        }
        cancel() {
          var t, e;
          this.isDragging = !1, this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !1), null === (t = this.panSession) || void 0 === t || t.end(), this.panSession = void 0;
          const {
            dragPropagation: i
          } = this.getProps();
          !i && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), null === (e = this.visualElement.animationState) || void 0 === e || e.setActive(z.J.Drag, !1)
        }
        updateAxis(t, e, i) {
          const {
            drag: r
          } = this.getProps();
          if (!i || !K(t, r, this.currentDirection)) return;
          const n = this.getAxisMotionValue(t);
          let s = this.originPoint[t] + i[t];
          this.constraints && this.constraints[t] && (s = function(t, {
            min: e,
            max: i
          }, r) {
            return void 0 !== e && t < e ? t = r ? (0, w.j)(e, t, r.min) : Math.max(t, e) : void 0 !== i && t > i && (t = r ? (0, w.j)(i, t, r.max) : Math.min(t, i)), t
          }(s, this.constraints[t], this.elastic[t])), n.set(s)
        }
        resolveConstraints() {
          const {
            dragConstraints: t,
            dragElastic: e
          } = this.getProps(), {
            layout: i
          } = this.visualElement.projection || {}, r = this.constraints;
          t && (0, T.X)(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : this.constraints = !(!t || !i) && function(t, {
            top: e,
            left: i,
            bottom: r,
            right: n
          }) {
            return {
              x: R(t.x, i, n),
              y: R(t.y, e, r)
            }
          }(i.layoutBox, t), this.elastic = function(t = O) {
            return !1 === t ? t = 0 : !0 === t && (t = O), {
              x: N(t, "left", "right"),
              y: N(t, "top", "bottom")
            }
          }(e), r !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && H((t => {
            this.getAxisMotionValue(t) && (this.constraints[t] = function(t, e) {
              const i = {};
              return void 0 !== e.min && (i.min = e.min - t.min), void 0 !== e.max && (i.max = e.max - t.min), i
            }(i.layoutBox[t], this.constraints[t]))
          }))
        }
        resolveRefConstraints() {
          const {
            dragConstraints: t,
            onMeasureDragConstraints: e
          } = this.getProps();
          if (!t || !(0, T.X)(t)) return !1;
          const i = t.current;
          (0, l.V)(null !== i, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
          const {
            projection: r
          } = this.visualElement;
          if (!r || !r.layout) return !1;
          const n = (0, q.L)(i, r.root, this.visualElement.getTransformPagePoint());
          let s = function(t, e) {
            return {
              x: L(t.x, e.x),
              y: L(t.y, e.y)
            }
          }(r.layout.layoutBox, n);
          if (e) {
            const t = e((0, $.pA)(s));
            this.hasMutatedConstraints = !!t, t && (s = (0, $.FY)(t))
          }
          return s
        }
        startAnimation(t) {
          const {
            drag: e,
            dragMomentum: i,
            dragElastic: r,
            dragTransition: n,
            dragSnapToOrigin: s,
            onDragTransitionEnd: a
          } = this.getProps(), o = this.constraints || {}, l = H((a => {
            if (!K(a, e, this.currentDirection)) return;
            let l = (null == o ? void 0 : o[a]) || {};
            s && (l = {
              min: 0,
              max: 0
            });
            const h = r ? 200 : 1e6,
              p = r ? 40 : 1e7,
              c = {
                type: "inertia",
                velocity: i ? t[a] : 0,
                bounceStiffness: h,
                bounceDamping: p,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...n,
                ...l
              };
            return this.startAxisValueAnimation(a, c)
          }));
          return Promise.all(l).then(a)
        }
        startAxisValueAnimation(t, e) {
          const i = this.getAxisMotionValue(t);
          return i.start((0, Y.O)(t, i, 0, e))
        }
        stopAnimation() {
          H((t => this.getAxisMotionValue(t).stop()))
        }
        getAxisMotionValue(t) {
          var e;
          const i = "_drag" + t.toUpperCase();
          return this.visualElement.getProps()[i] || this.visualElement.getValue(t, (null === (e = this.visualElement.getProps().initial) || void 0 === e ? void 0 : e[t]) || 0)
        }
        snapToCursor(t) {
          H((e => {
            const {
              drag: i
            } = this.getProps();
            if (!K(e, i, this.currentDirection)) return;
            const {
              projection: r
            } = this.visualElement, n = this.getAxisMotionValue(e);
            if (r && r.layout) {
              const {
                min: i,
                max: s
              } = r.layout.layoutBox[e];
              n.set(t[e] - (0, w.j)(i, s, .5))
            }
          }))
        }
        scalePositionWithinConstraints() {
          var t;
          if (!this.visualElement.current) return;
          const {
            drag: e,
            dragConstraints: i
          } = this.getProps(), {
            projection: r
          } = this.visualElement;
          if (!(0, T.X)(i) || !r || !this.constraints) return;
          this.stopAnimation();
          const n = {
            x: 0,
            y: 0
          };
          H((t => {
            const e = this.getAxisMotionValue(t);
            if (e) {
              const i = e.get();
              n[t] = function(t, e) {
                let i = .5;
                const r = k(t),
                  n = k(e);
                return n > r ? i = (0, A.q)(e.min, e.max - r, t.min) : r > n && (i = (0, A.q)(t.min, t.max - n, e.min)), (0, B.q)(0, 1, i)
              }({
                min: i,
                max: i
              }, this.constraints[t])
            }
          }));
          const {
            transformTemplate: s
          } = this.visualElement.getProps();
          this.visualElement.current.style.transform = s ? s({}, "") : "none", null === (t = r.root) || void 0 === t || t.updateScroll(), r.updateLayout(), this.resolveConstraints(), H((t => {
            if (!K(t, e, null)) return;
            const i = this.getAxisMotionValue(t),
              {
                min: r,
                max: s
              } = this.constraints[t];
            i.set((0, w.j)(r, s, n[t]))
          }))
        }
        addListeners() {
          var t;
          if (!this.visualElement.current) return;
          X.set(this.visualElement, this);
          const e = this.visualElement.current,
            i = (0, f.h)(e, "pointerdown", (t => {
              const {
                drag: e,
                dragListener: i = !0
              } = this.getProps();
              e && i && this.start(t)
            })),
            r = () => {
              const {
                dragConstraints: t
              } = this.getProps();
              (0, T.X)(t) && (this.constraints = this.resolveRefConstraints())
            },
            {
              projection: n
            } = this.visualElement,
            s = n.addEventListener("measure", r);
          n && !n.layout && (null === (t = n.root) || void 0 === t || t.updateScroll(), n.updateLayout()), r();
          const a = (0, W.k)(window, "resize", (() => this.scalePositionWithinConstraints())),
            o = n.addEventListener("didUpdate", (({
              delta: t,
              hasLayoutChanged: e
            }) => {
              this.isDragging && e && (H((e => {
                const i = this.getAxisMotionValue(e);
                i && (this.originPoint[e] += t[e].translate, i.set(i.get() + t[e].translate))
              })), this.visualElement.render())
            }));
          return () => {
            a(), i(), s(), null == o || o()
          }
        }
        getProps() {
          const t = this.visualElement.getProps(),
            {
              drag: e = !1,
              dragDirectionLock: i = !1,
              dragPropagation: r = !1,
              dragConstraints: n = !1,
              dragElastic: s = O,
              dragMomentum: a = !0
            } = t;
          return {
            ...t,
            drag: e,
            dragDirectionLock: i,
            dragPropagation: r,
            dragConstraints: n,
            dragElastic: s,
            dragMomentum: a
          }
        }
      }

      function K(t, e, i) {
        return !(!0 !== e && e !== t || null !== i && i !== t)
      }
      var Z = i(78638),
        Q = i(45871),
        tt = i(36912),
        et = i(6933);
      const it = {
        pan: (0, et.n)((function({
          onPan: t,
          onPanStart: e,
          onPanEnd: i,
          onPanSessionStart: r,
          visualElement: n
        }) {
          const s = t || e || i || r,
            a = (0, o.useRef)(null),
            {
              transformPagePoint: l
            } = (0, o.useContext)(Q.Q),
            h = {
              onSessionStart: r,
              onStart: e,
              onMove: t,
              onEnd: (t, e) => {
                a.current = null, i && i(t, e)
              }
            };
          (0, o.useEffect)((() => {
            null !== a.current && a.current.updateHandlers(h)
          })), (0, f.B)(n, "pointerdown", s && function(t) {
            a.current = new g(t, h, {
              transformPagePoint: l
            })
          }), (0, tt.l)((() => a.current && a.current.end()))
        })),
        drag: (0, et.n)((function(t) {
          const {
            dragControls: e,
            visualElement: i
          } = t, r = (0, Z.M)((() => new J(i)));
          (0, o.useEffect)((() => e && e.subscribe(r)), [r, e]), (0, o.useEffect)((() => r.addListeners()), [r])
        }))
      };
      var rt = i(58147),
        nt = i(26073),
        st = i(60794),
        at = i(82270),
        ot = i(28710);

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
      var pt = i(88246),
        ct = i(62983);
      const ut = "_$css",
        ft = {
          correct: (t, {
            treeScale: e,
            projectionDelta: i
          }) => {
            const r = t,
              n = t.includes("var("),
              s = [];
            n && (t = t.replace(pt.z2, (t => (s.push(t), ut))));
            const a = ct.f.parse(t);
            if (a.length > 5) return r;
            const o = ct.f.createTransformer(t),
              l = "number" != typeof a[0] ? 1 : 0,
              h = i.x.scale * e.x,
              p = i.y.scale * e.y;
            a[0 + l] /= h, a[1 + l] /= p;
            const c = (0, w.j)(h, p, .5);
            "number" == typeof a[2 + l] && (a[2 + l] /= c), "number" == typeof a[3 + l] && (a[3 + l] /= c);
            let u = o(a);
            if (n) {
              let t = 0;
              u = u.replace(ut, (() => {
                const e = s[t];
                return t++, e
              }))
            }
            return u
          }
        };
      var dt = i(9394);
      class mt extends o.Component {
        componentDidMount() {
          const {
            visualElement: t,
            layoutGroup: e,
            switchLayoutGroup: i,
            layoutId: r
          } = this.props, {
            projection: n
          } = t;
          (0, dt.$)(yt), n && (e.group && e.group.add(n), i && i.register && r && i.register(n), n.root.didUpdate(), n.addEventListener("animationComplete", (() => {
            this.safeToRemove()
          })), n.setOptions({
            ...n.options,
            onExitComplete: () => this.safeToRemove()
          })), ot.w.hasEverUpdated = !0
        }
        getSnapshotBeforeUpdate(t) {
          const {
            layoutDependency: e,
            visualElement: i,
            drag: r,
            isPresent: n
          } = this.props, s = i.projection;
          return s ? (s.isPresent = n, r || t.layoutDependency !== e || void 0 === e ? s.willUpdate() : this.safeToRemove(), t.isPresent !== n && (n ? s.promote() : s.relegate() || c.OH.postRender((() => {
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
            switchLayoutGroup: i
          } = this.props, {
            projection: r
          } = t;
          r && (r.scheduleCheckAfterUnmount(), (null == e ? void 0 : e.group) && e.group.remove(r), (null == i ? void 0 : i.deregister) && i.deregister(r))
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
          boxShadow: ft
        },
        gt = {
          measureLayout: function(t) {
            const [e, i] = (0, nt.xQ)(), r = (0, o.useContext)(st.L);
            return o.createElement(mt, {
              ...t,
              layoutGroup: r,
              switchLayoutGroup: (0, o.useContext)(at.N),
              isPresent: e,
              safeToRemove: i
            })
          }
        };
      var vt = i(69524),
        bt = i(78069),
        xt = i(40749),
        Pt = i(76781),
        Et = i(88968);
      const St = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        Ct = St.length,
        Tt = t => "string" == typeof t ? parseFloat(t) : t,
        At = t => "number" == typeof t || U.px.test(t);

      function wt(t, e) {
        return void 0 !== t[e] ? t[e] : t.borderRadius
      }
      const kt = Mt(0, .5, Pt.yT),
        Dt = Mt(.5, .95, Et.l);

      function Mt(t, e, i) {
        return r => r < t ? 0 : r > e ? 1 : i((0, A.q)(t, e, r))
      }

      function _t(t, e) {
        t.min = e.min, t.max = e.max
      }

      function Ft(t, e) {
        _t(t.x, e.x), _t(t.y, e.y)
      }
      var It = i(43628);

      function Vt(t, e, i, r, n) {
        return t -= e, t = (0, It.hq)(t, 1 / i, r), void 0 !== n && (t = (0, It.hq)(t, 1 / n, r)), t
      }

      function Bt(t, e, [i, r, n], s, a) {
        ! function(t, e = 0, i = 1, r = .5, n, s = t, a = t) {
          if (U.KN.test(e) && (e = parseFloat(e), e = (0, w.j)(a.min, a.max, e / 100) - a.min), "number" != typeof e) return;
          let o = (0, w.j)(s.min, s.max, r);
          t === s && (o -= e), t.min = Vt(t.min, e, i, o, n), t.max = Vt(t.max, e, i, o, n)
        }(t, e[i], e[r], e[n], e.scale, s, a)
      }
      const Rt = ["x", "scaleX", "originX"],
        Lt = ["y", "scaleY", "originY"];

      function Ot(t, e, i, r) {
        Bt(t.x, e, Rt, null == i ? void 0 : i.x, null == r ? void 0 : r.x), Bt(t.y, e, Lt, null == i ? void 0 : i.y, null == r ? void 0 : r.y)
      }
      var Nt = i(62896);

      function Gt(t) {
        return 0 === t.translate && 1 === t.scale
      }

      function zt(t) {
        return Gt(t.x) && Gt(t.y)
      }

      function jt(t, e) {
        return t.x.min === e.x.min && t.x.max === e.x.max && t.y.min === e.y.min && t.y.max === e.y.max
      }

      function Ht(t) {
        return k(t.x) / k(t.y)
      }
      var qt = i(51275);
      class $t {
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
          let i;
          for (let t = e; t >= 0; t--) {
            const e = this.members[t];
            if (!1 !== e.isPresent) {
              i = e;
              break
            }
          }
          return !!i && (this.promote(i), !0)
        }
        promote(t, e) {
          var i;
          const r = this.lead;
          if (t !== r && (this.prevLead = r, this.lead = t, t.show(), r)) {
            r.instance && r.scheduleRender(), t.scheduleRender(), t.resumeFrom = r, e && (t.resumeFrom.preserveOpacity = !0), r.snapshot && (t.snapshot = r.snapshot, t.snapshot.latestValues = r.animationValues || r.latestValues), (null === (i = t.root) || void 0 === i ? void 0 : i.isUpdating) && (t.isLayoutDirty = !0);
            const {
              crossfade: n
            } = t.options;
            !1 === n && r.hide()
          }
        }
        exitAnimationComplete() {
          this.members.forEach((t => {
            var e, i, r, n, s;
            null === (i = (e = t.options).onExitComplete) || void 0 === i || i.call(e), null === (s = null === (r = t.resumingFrom) || void 0 === r ? void 0 : (n = r.options).onExitComplete) || void 0 === s || s.call(n)
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

      function Wt(t, e, i) {
        let r = "";
        const n = t.x.translate / e.x,
          s = t.y.translate / e.y;
        if ((n || s) && (r = `translate3d(${n}px, ${s}px, 0) `), 1 === e.x && 1 === e.y || (r += `scale(${1/e.x}, ${1/e.y}) `), i) {
          const {
            rotate: t,
            rotateX: e,
            rotateY: n
          } = i;
          t && (r += `rotate(${t}deg) `), e && (r += `rotateX(${e}deg) `), n && (r += `rotateY(${n}deg) `)
        }
        const a = t.x.scale * e.x,
          o = t.y.scale * e.y;
        return 1 === a && 1 === o || (r += `scale(${a}, ${o})`), r || "none"
      }
      var Ut = i(97945);
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
      var Jt = i(21297),
        Kt = i(53437);
      const Zt = ["", "X", "Y", "Z"];
      let Qt = 0;

      function te({
        attachResizeListener: t,
        defaultParent: e,
        measureScroll: i,
        checkIsScrollRoot: r,
        resetTransform: n
      }) {
        return class {
          constructor(t, i = {}, r = (null == e ? void 0 : e())) {
            this.id = Qt++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isTransformDirty = !1, this.isProjectionDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = {
              x: 1,
              y: 1
            }, this.eventHandlers = new Map, this.potentialNodes = new Map, this.checkUpdateFailed = () => {
              this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
            }, this.updateProjection = () => {
              this.nodes.forEach(re), this.nodes.forEach(le), this.nodes.forEach(he)
            }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.elementId = t, this.latestValues = i, this.root = r ? r.root || r : this, this.path = r ? [...r.path, r] : [], this.parent = r, this.depth = r ? r.depth + 1 : 0, t && this.root.registerPotentialNode(t, this);
            for (let t = 0; t < this.path.length; t++) this.path[t].shouldResetTransform = !0;
            this.root === this && (this.nodes = new Xt)
          }
          addEventListener(t, e) {
            return this.eventHandlers.has(t) || this.eventHandlers.set(t, new xt.v), this.eventHandlers.get(t).add(e)
          }
          notifyListeners(t, ...e) {
            const i = this.eventHandlers.get(t);
            null == i || i.notify(...e)
          }
          hasListeners(t) {
            return this.eventHandlers.has(t)
          }
          registerPotentialNode(t, e) {
            this.potentialNodes.set(t, e)
          }
          mount(e, i = !1) {
            var r;
            if (this.instance) return;
            this.isSVG = e instanceof SVGElement && "svg" !== e.tagName, this.instance = e;
            const {
              layoutId: n,
              layout: s,
              visualElement: a
            } = this.options;
            if (a && !a.current && a.mount(e), this.root.nodes.add(this), null === (r = this.parent) || void 0 === r || r.children.add(this), this.elementId && this.root.potentialNodes.delete(this.elementId), i && (s || n) && (this.isLayoutDirty = !0), t) {
              let i;
              const r = () => this.root.updateBlockedByResize = !1;
              t(e, (() => {
                this.root.updateBlockedByResize = !0, i && i(), i = (0, Kt.c)(r, 250), ot.w.hasAnimatedSinceResize && (ot.w.hasAnimatedSinceResize = !1, this.nodes.forEach(oe))
              }))
            }
            n && this.root.registerSharedNode(n, this), !1 !== this.options.animate && a && (n || s) && this.addEventListener("didUpdate", (({
              delta: t,
              hasLayoutChanged: e,
              hasRelativeTargetChanged: i,
              layout: r
            }) => {
              var n, s, o, l, h;
              if (this.isTreeAnimationBlocked()) return this.target = void 0, void(this.relativeTarget = void 0);
              const p = null !== (s = null !== (n = this.options.transition) && void 0 !== n ? n : a.getDefaultTransition()) && void 0 !== s ? s : me,
                {
                  onLayoutAnimationStart: c,
                  onLayoutAnimationComplete: u
                } = a.getProps(),
                f = !this.targetLayout || !jt(this.targetLayout, r) || i,
                d = !e && i;
              if ((null === (o = this.resumeFrom) || void 0 === o ? void 0 : o.instance) || d || e && (f || !this.currentAnimation)) {
                this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(t, d);
                const e = {
                  ...(0, Nt.rU)(p, "layout"),
                  onPlay: c,
                  onComplete: u
                };
                a.shouldReduceMotion && (e.delay = 0, e.type = !1), this.startAnimation(e)
              } else e || 0 !== this.animationProgress || oe(this), this.isLead() && (null === (h = (l = this.options).onExitComplete) || void 0 === h || h.call(l));
              this.targetLayout = r
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
            var e, i, r;
            if (this.root.isUpdateBlocked()) return void(null === (i = (e = this.options).onExitComplete) || void 0 === i || i.call(e));
            if (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
            this.isLayoutDirty = !0;
            for (let t = 0; t < this.path.length; t++) {
              const e = this.path[t];
              e.shouldResetTransform = !0, e.updateScroll("snapshot")
            }
            const {
              layoutId: n,
              layout: s
            } = this.options;
            if (void 0 === n && !s) return;
            const a = null === (r = this.options.visualElement) || void 0 === r ? void 0 : r.getProps().transformTemplate;
            this.prevTransformTemplateValue = null == a ? void 0 : a(this.latestValues, ""), this.updateSnapshot(), t && this.notifyListeners("willUpdate")
          }
          didUpdate() {
            if (this.isUpdateBlocked()) return this.unblockUpdate(), this.clearAllSnapshots(), void this.nodes.forEach(se);
            this.isUpdating && (this.isUpdating = !1, this.potentialNodes.size && (this.potentialNodes.forEach(ye), this.potentialNodes.clear()), this.nodes.forEach(ae), this.nodes.forEach(ee), this.nodes.forEach(ie), this.clearAllSnapshots(), c.qX.update(), c.qX.preRender(), c.qX.render())
          }
          clearAllSnapshots() {
            this.nodes.forEach(ne), this.sharedNodes.forEach(ce)
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
              isRoot: r(this.instance),
              offset: i(this.instance)
            })
          }
          resetTransform() {
            var t;
            if (!n) return;
            const e = this.isLayoutDirty || this.shouldResetTransform,
              i = this.projectionDelta && !zt(this.projectionDelta),
              r = null === (t = this.options.visualElement) || void 0 === t ? void 0 : t.getProps().transformTemplate,
              s = null == r ? void 0 : r(this.latestValues, ""),
              a = s !== this.prevTransformTemplateValue;
            e && (i || (0, Ut.HD)(this.latestValues) || a) && (n(this.instance, s), this.shouldResetTransform = !1, this.scheduleRender())
          }
          measure(t = !0) {
            const e = this.measurePageBox();
            let i = this.removeElementScroll(e);
            var r;
            return t && (i = this.removeTransform(i)), ge((r = i).x), ge(r.y), {
              animationId: this.root.animationId,
              measuredBox: e,
              layoutBox: i,
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
                scroll: i
              } = this.root;
            return i && ((0, It.Ql)(e.x, i.offset.x), (0, It.Ql)(e.y, i.offset.y)), e
          }
          removeElementScroll(t) {
            const e = (0, j.ge)();
            Ft(e, t);
            for (let i = 0; i < this.path.length; i++) {
              const r = this.path[i],
                {
                  scroll: n,
                  options: s
                } = r;
              if (r !== this.root && n && s.layoutScroll) {
                if (n.isRoot) {
                  Ft(e, t);
                  const {
                    scroll: i
                  } = this.root;
                  i && ((0, It.Ql)(e.x, -i.offset.x), (0, It.Ql)(e.y, -i.offset.y))
                }(0, It.Ql)(e.x, n.offset.x), (0, It.Ql)(e.y, n.offset.y)
              }
            }
            return e
          }
          applyTransform(t, e = !1) {
            const i = (0, j.ge)();
            Ft(i, t);
            for (let t = 0; t < this.path.length; t++) {
              const r = this.path[t];
              !e && r.options.layoutScroll && r.scroll && r !== r.root && (0, It.Ww)(i, {
                x: -r.scroll.offset.x,
                y: -r.scroll.offset.y
              }), (0, Ut.HD)(r.latestValues) && (0, It.Ww)(i, r.latestValues)
            }
            return (0, Ut.HD)(this.latestValues) && (0, It.Ww)(i, this.latestValues), i
          }
          removeTransform(t) {
            var e;
            const i = (0, j.ge)();
            Ft(i, t);
            for (let t = 0; t < this.path.length; t++) {
              const r = this.path[t];
              if (!r.instance) continue;
              if (!(0, Ut.HD)(r.latestValues)) continue;
              (0, Ut.vk)(r.latestValues) && r.updateSnapshot();
              const n = (0, j.ge)();
              Ft(n, r.measurePageBox()), Ot(i, r.latestValues, null === (e = r.snapshot) || void 0 === e ? void 0 : e.layoutBox, n)
            }
            return (0, Ut.HD)(this.latestValues) && Ot(i, this.latestValues), i
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
              layout: i,
              layoutId: r
            } = this.options;
            if (this.layout && (i || r)) {
              if (!this.targetDelta && !this.relativeTarget) {
                const t = this.getClosestProjectingParent();
                t && t.layout ? (this.relativeParent = t, this.relativeTarget = (0, j.ge)(), this.relativeTargetOrigin = (0, j.ge)(), V(this.relativeTargetOrigin, this.layout.layoutBox, t.layout.layoutBox), Ft(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
              }
              var n, s, a;
              if ((this.relativeTarget || this.targetDelta) && (this.target || (this.target = (0, j.ge)(), this.targetWithTransforms = (0, j.ge)()), this.relativeTarget && this.relativeTargetOrigin && (null === (t = this.relativeParent) || void 0 === t ? void 0 : t.target) ? (n = this.target, s = this.relativeTarget, a = this.relativeParent.target, F(n.x, s.x, a.x), F(n.y, s.y, a.y)) : this.targetDelta ? (Boolean(this.resumingFrom) ? this.target = this.applyTransform(this.layout.layoutBox) : Ft(this.target, this.layout.layoutBox), (0, It.o4)(this.target, this.targetDelta)) : Ft(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget)) {
                this.attemptToResolveRelativeTarget = !1;
                const t = this.getClosestProjectingParent();
                t && Boolean(t.resumingFrom) === Boolean(this.resumingFrom) && !t.options.layoutScroll && t.target ? (this.relativeParent = t, this.relativeTarget = (0, j.ge)(), this.relativeTargetOrigin = (0, j.ge)(), V(this.relativeTargetOrigin, this.target, t.target), Ft(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
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
              isTransformDirty: i
            } = this;
            this.isProjectionDirty = this.isTransformDirty = !1;
            const r = this.getLead(),
              n = Boolean(this.resumingFrom) || this !== r;
            let s = !0;
            if (e && (s = !1), n && i && (s = !1), s) return;
            const {
              layout: a,
              layoutId: o
            } = this.options;
            if (this.isTreeAnimating = Boolean((null === (t = this.parent) || void 0 === t ? void 0 : t.isTreeAnimating) || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !a && !o) return;
            Ft(this.layoutCorrected, this.layout.layoutBox), (0, It.OU)(this.layoutCorrected, this.treeScale, this.path, n);
            const {
              target: l
            } = r;
            if (!l) return;
            this.projectionDelta || (this.projectionDelta = (0, j.xU)(), this.projectionDeltaWithTransform = (0, j.xU)());
            const h = this.treeScale.x,
              p = this.treeScale.y,
              c = this.projectionTransform;
            _(this.projectionDelta, this.layoutCorrected, l, this.latestValues), this.projectionTransform = Wt(this.projectionDelta, this.treeScale), this.projectionTransform === c && this.treeScale.x === h && this.treeScale.y === p || (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", l))
          }
          hide() {
            this.isVisible = !1
          }
          show() {
            this.isVisible = !0
          }
          scheduleRender(t = !0) {
            var e, i, r;
            null === (i = (e = this.options).scheduleRender) || void 0 === i || i.call(e), t && (null === (r = this.getStack()) || void 0 === r || r.scheduleRender()), this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
          }
          setAnimationOrigin(t, e = !1) {
            var i, r;
            const n = this.snapshot,
              s = (null == n ? void 0 : n.latestValues) || {},
              a = {
                ...this.latestValues
              },
              o = (0, j.xU)();
            this.relativeTarget = this.relativeTargetOrigin = void 0, this.attemptToResolveRelativeTarget = !e;
            const l = (0, j.ge)(),
              h = (null == n ? void 0 : n.source) !== (null === (i = this.layout) || void 0 === i ? void 0 : i.source),
              p = ((null === (r = this.getStack()) || void 0 === r ? void 0 : r.members.length) || 0) <= 1,
              c = Boolean(h && !p && !0 === this.options.crossfade && !this.path.some(de));
            this.animationProgress = 0, this.mixTargetDelta = e => {
              var i;
              const r = e / 1e3;
              var n, u, f, d;
              ue(o.x, t.x, r), ue(o.y, t.y, r), this.setTargetDelta(o), this.relativeTarget && this.relativeTargetOrigin && this.layout && (null === (i = this.relativeParent) || void 0 === i ? void 0 : i.layout) && (V(l, this.layout.layoutBox, this.relativeParent.layout.layoutBox), n = this.relativeTarget, u = this.relativeTargetOrigin, f = l, d = r, fe(n.x, u.x, f.x, d), fe(n.y, u.y, f.y, d)), h && (this.animationValues = a, function(t, e, i, r, n, s) {
                n ? (t.opacity = (0, w.j)(0, void 0 !== i.opacity ? i.opacity : 1, kt(r)), t.opacityExit = (0, w.j)(void 0 !== e.opacity ? e.opacity : 1, 0, Dt(r))) : s && (t.opacity = (0, w.j)(void 0 !== e.opacity ? e.opacity : 1, void 0 !== i.opacity ? i.opacity : 1, r));
                for (let n = 0; n < Ct; n++) {
                  const s = `border${St[n]}Radius`;
                  let a = wt(e, s),
                    o = wt(i, s);
                  void 0 === a && void 0 === o || (a || (a = 0), o || (o = 0), 0 === a || 0 === o || At(a) === At(o) ? (t[s] = Math.max((0, w.j)(Tt(a), Tt(o), r), 0), (U.KN.test(o) || U.KN.test(a)) && (t[s] += "%")) : t[s] = o)
                }(e.rotate || i.rotate) && (t.rotate = (0, w.j)(e.rotate || 0, i.rotate || 0, r))
              }(a, s, this.latestValues, r, c, p)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = r
            }, this.mixTargetDelta(0)
          }
          startAnimation(t) {
            var e, i;
            this.notifyListeners("animationStart"), null === (e = this.currentAnimation) || void 0 === e || e.stop(), this.resumingFrom && (null === (i = this.resumingFrom.currentAnimation) || void 0 === i || i.stop()), this.pendingAnimation && (c.eO.update(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = c.OH.update((() => {
              ot.w.hasAnimatedSinceResize = !0, this.currentAnimation = function(t, e, i = {}) {
                const r = (0, bt.S)(t) ? t : (0, vt.O)(t);
                return r.start((0, Y.O)("", r, e, i)), {
                  stop: () => r.stop(),
                  isAnimating: () => r.isAnimating()
                }
              }(0, 1e3, {
                ...t,
                onUpdate: e => {
                  var i;
                  this.mixTargetDelta(e), null === (i = t.onUpdate) || void 0 === i || i.call(t, e)
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
              target: i,
              layout: r,
              latestValues: n
            } = t;
            if (e && i && r) {
              if (this !== t && this.layout && r && ve(this.options.animationType, this.layout.layoutBox, r.layoutBox)) {
                i = this.target || (0, j.ge)();
                const e = k(this.layout.layoutBox.x);
                i.x.min = t.target.x.min, i.x.max = i.x.min + e;
                const r = k(this.layout.layoutBox.y);
                i.y.min = t.target.y.min, i.y.max = i.y.min + r
              }
              Ft(e, i), (0, It.Ww)(e, n), _(this.projectionDeltaWithTransform, this.layoutCorrected, e, n)
            }
          }
          registerSharedNode(t, e) {
            var i, r, n;
            this.sharedNodes.has(t) || this.sharedNodes.set(t, new $t), this.sharedNodes.get(t).add(e), e.promote({
              transition: null === (i = e.options.initialPromotionConfig) || void 0 === i ? void 0 : i.transition,
              preserveFollowOpacity: null === (n = null === (r = e.options.initialPromotionConfig) || void 0 === r ? void 0 : r.shouldPreserveFollowOpacity) || void 0 === n ? void 0 : n.call(r, e)
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
            preserveFollowOpacity: i
          } = {}) {
            const r = this.getStack();
            r && r.promote(this, i), t && (this.projectionDelta = void 0, this.needsReset = !0), e && this.setOptions({
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
              latestValues: i
            } = t;
            if ((i.rotate || i.rotateX || i.rotateY || i.rotateZ) && (e = !0), !e) return;
            const r = {};
            for (let e = 0; e < Zt.length; e++) {
              const n = "rotate" + Zt[e];
              i[n] && (r[n] = i[n], t.setStaticValue(n, 0))
            }
            null == t || t.render();
            for (const e in r) t.setStaticValue(e, r[e]);
            t.scheduleRender()
          }
          getProjectionStyles(t = {}) {
            var e, i, r;
            const n = {};
            if (!this.instance || this.isSVG) return n;
            if (!this.isVisible) return {
              visibility: "hidden"
            };
            n.visibility = "";
            const s = null === (e = this.options.visualElement) || void 0 === e ? void 0 : e.getProps().transformTemplate;
            if (this.needsReset) return this.needsReset = !1, n.opacity = "", n.pointerEvents = (0, Jt.u)(t.pointerEvents) || "", n.transform = s ? s(this.latestValues, "") : "none", n;
            const a = this.getLead();
            if (!this.projectionDelta || !this.layout || !a.target) {
              const e = {};
              return this.options.layoutId && (e.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1, e.pointerEvents = (0, Jt.u)(t.pointerEvents) || ""), this.hasProjected && !(0, Ut.HD)(this.latestValues) && (e.transform = s ? s({}, "") : "none", this.hasProjected = !1), e
            }
            const o = a.animationValues || a.latestValues;
            this.applyTransformsToTarget(), n.transform = Wt(this.projectionDeltaWithTransform, this.treeScale, o), s && (n.transform = s(o, n.transform));
            const {
              x: l,
              y: h
            } = this.projectionDelta;
            n.transformOrigin = `${100*l.origin}% ${100*h.origin}% 0`, a.animationValues ? n.opacity = a === this ? null !== (r = null !== (i = o.opacity) && void 0 !== i ? i : this.latestValues.opacity) && void 0 !== r ? r : 1 : this.preserveOpacity ? this.latestValues.opacity : o.opacityExit : n.opacity = a === this ? void 0 !== o.opacity ? o.opacity : "" : void 0 !== o.opacityExit ? o.opacityExit : 0;
            for (const t in dt.H) {
              if (void 0 === o[t]) continue;
              const {
                correct: e,
                applyTo: i
              } = dt.H[t], r = e(o[t], a);
              if (i) {
                const t = i.length;
                for (let e = 0; e < t; e++) n[i[e]] = r
              } else n[t] = r
            }
            return this.options.layoutId && (n.pointerEvents = a === this ? (0, Jt.u)(t.pointerEvents) || "" : "none"), n
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

      function ie(t) {
        var e, i, r;
        const n = (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) || t.snapshot;
        if (t.isLead() && t.layout && n && t.hasListeners("didUpdate")) {
          const {
            layoutBox: e,
            measuredBox: i
          } = t.layout, {
            animationType: r
          } = t.options, s = n.source !== t.layout.source;
          "size" === r ? H((t => {
            const i = s ? n.measuredBox[t] : n.layoutBox[t],
              r = k(i);
            i.min = e[t].min, i.max = i.min + r
          })) : ve(r, n.layoutBox, e) && H((t => {
            const i = s ? n.measuredBox[t] : n.layoutBox[t],
              r = k(e[t]);
            i.max = i.min + r
          }));
          const a = (0, j.xU)();
          _(a, e, n.layoutBox);
          const o = (0, j.xU)();
          s ? _(o, t.applyTransform(i, !0), n.measuredBox) : _(o, e, n.layoutBox);
          const l = !zt(a);
          let h = !1;
          if (!t.resumeFrom) {
            const i = t.getClosestProjectingParent();
            if (i && !i.resumeFrom) {
              const {
                snapshot: t,
                layout: r
              } = i;
              if (t && r) {
                const i = (0, j.ge)();
                V(i, n.layoutBox, t.layoutBox);
                const s = (0, j.ge)();
                V(s, e, r.layoutBox), jt(i, s) || (h = !0)
              }
            }
          }
          t.notifyListeners("didUpdate", {
            layout: e,
            snapshot: n,
            delta: o,
            layoutDelta: a,
            hasLayoutChanged: l,
            hasRelativeTargetChanged: h
          })
        } else t.isLead() && (null === (r = (i = t.options).onExitComplete) || void 0 === r || r.call(i));
        t.options.transition = void 0
      }

      function re(t) {
        t.isProjectionDirty || (t.isProjectionDirty = Boolean(t.parent && t.parent.isProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = Boolean(t.parent && t.parent.isTransformDirty))
      }

      function ne(t) {
        t.clearSnapshot()
      }

      function se(t) {
        t.clearMeasurements()
      }

      function ae(t) {
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

      function ue(t, e, i) {
        t.translate = (0, w.j)(e.translate, 0, i), t.scale = (0, w.j)(e.scale, 1, i), t.origin = e.origin, t.originPoint = e.originPoint
      }

      function fe(t, e, i, r) {
        t.min = (0, w.j)(e.min, i.min, r), t.max = (0, w.j)(e.max, i.max, r)
      }

      function de(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit
      }
      const me = {
        duration: .45,
        ease: [.4, 0, .1, 1]
      };

      function ye(t, e) {
        let i = t.root;
        for (let e = t.path.length - 1; e >= 0; e--)
          if (Boolean(t.path[e].instance)) {
            i = t.path[e];
            break
          } const r = (i && i !== t.root ? i.instance : document).querySelector(`[data-projection-id="${e}"]`);
        r && t.mount(r, !0)
      }

      function ge(t) {
        t.min = Math.round(t.min), t.max = Math.round(t.max)
      }

      function ve(t, e, i) {
        return "position" === t || "preserve-aspect" === t && !D(Ht(e), Ht(i), .2)
      }
      const be = te({
          attachResizeListener: (t, e) => (0, W.k)(t, "resize", e),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop
          }),
          checkIsScrollRoot: () => !0
        }),
        xe = {
          current: void 0
        },
        Pe = te({
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
        Ee = {
          ...a.W,
          ...s.n,
          ...it,
          ...gt
        },
        Se = (0, r.H)(((t, e) => (0, n.P)(t, e, Ee, rt.J, Pe)))
    },
    24080: (t, e, i) => {
      "use strict";

      function r(t, e) {
        return e ? t * (1e3 / e) : 0
      }
      i.d(e, {
        f: () => r
      })
    },
    25394: (t, e, i) => {
      "use strict";
      i.d(e, {
        L: () => a,
        m: () => s
      });
      var r = i(95355),
        n = i(43628);

      function s(t, e) {
        return (0, r.FY)((0, r.bS)(t.getBoundingClientRect(), e))
      }

      function a(t, e, i) {
        const r = s(t, i),
          {
            scroll: a
          } = e;
        return a && ((0, n.Ql)(r.x, a.offset.x), (0, n.Ql)(r.y, a.offset.y)), r
      }
    },
    26073: (t, e, i) => {
      "use strict";
      i.d(e, {
        xQ: () => s
      });
      var r = i(62229),
        n = i(47510);

      function s() {
        const t = (0, r.useContext)(n.t);
        if (null === t) return [!0, null];
        const {
          isPresent: e,
          onExitComplete: i,
          register: s
        } = t, a = (0, r.useId)();
        return (0, r.useEffect)((() => s(a)), []), !e && i ? [!1, () => i && i(a)] : [!0]
      }
    },
    26217: (t, e, i) => {
      "use strict";
      i.d(e, {
        q: () => r
      });
      const r = (t, e, i) => Math.min(Math.max(i, t), e)
    },
    26376: (t, e, i) => {
      "use strict";
      i.d(e, {
        w: () => r
      });
      const r = t => e => e.test(t)
    },
    27485: (t, e, i) => {
      "use strict";
      i.d(e, {
        q: () => r
      });
      const r = (t, e, i) => {
        const r = e - t;
        return 0 === r ? 1 : (i - t) / r
      }
    },
    28432: (t, e, i) => {
      "use strict";
      i.d(e, {
        n: () => r
      });
      const r = t => "string" == typeof t && "svg" === t.toLowerCase()
    },
    28710: (t, e, i) => {
      "use strict";
      i.d(e, {
        w: () => r
      });
      const r = {
        hasAnimatedSinceResize: !0,
        hasEverUpdated: !1
      }
    },
    30606: (t, e, i) => {
      "use strict";
      i.d(e, {
        y: () => o
      });
      var r = i(56285),
        n = i(90213),
        s = i(48324),
        a = i(53792);
      const o = {
        test: t => a.B.test(t) || n.u.test(t) || s.V.test(t),
        parse: t => a.B.test(t) ? a.B.parse(t) : s.V.test(t) ? s.V.parse(t) : n.u.parse(t),
        transform: t => (0, r.Kg)(t) ? t : t.hasOwnProperty("red") ? a.B.transform(t) : s.V.transform(t)
      }
    },
    32067: (t, e, i) => {
      "use strict";
      i.d(e, {
        DX: () => r.DX
      });
      var r = i(39447);
      i(42295), i(62229)
    },
    32467: (t, e, i) => {
      "use strict";

      function r(t) {
        return "object" == typeof t && "function" == typeof t.start
      }
      i.d(e, {
        N: () => r
      })
    },
    35121: (t, e, i) => {
      "use strict";
      i.d(e, {
        X4: () => s,
        ai: () => n,
        hs: () => a
      });
      var r = i(26217);
      const n = {
          test: t => "number" == typeof t,
          parse: parseFloat,
          transform: t => t
        },
        s = {
          ...n,
          transform: t => (0, r.q)(0, 1, t)
        },
        a = {
          ...n,
          default: 1
        }
    },
    36912: (t, e, i) => {
      "use strict";
      i.d(e, {
        l: () => n
      });
      var r = i(62229);

      function n(t) {
        return (0, r.useEffect)((() => () => t()), [])
      }
    },
    37493: (t, e, i) => {
      "use strict";
      i.d(e, {
        x: () => s
      });
      var r = i(9448),
        n = i(78069);

      function s(t) {
        const {
          style: e
        } = t, i = {};
        for (const s in e)((0, n.S)(e[s]) || (0, r.z)(s, t)) && (i[s] = e[s]);
        return i
      }
    },
    39997: (t, e, i) => {
      "use strict";
      i.d(e, {
        eO: () => f,
        qX: () => d,
        OH: () => u
      });
      const r = 1 / 60 * 1e3,
        n = "undefined" != typeof performance ? () => performance.now() : () => Date.now(),
        s = "undefined" != typeof window ? t => window.requestAnimationFrame(t) : t => setTimeout((() => t(n())), r);
      var a = i(69602);
      let o = !0,
        l = !1,
        h = !1;
      const p = ["read", "update", "preRender", "render", "postRender"],
        c = p.reduce(((t, e) => (t[e] = function(t) {
          let e = [],
            i = [],
            r = 0,
            n = !1,
            s = !1;
          const a = new WeakSet,
            o = {
              schedule: (t, s = !1, o = !1) => {
                const l = o && n,
                  h = l ? e : i;
                return s && a.add(t), -1 === h.indexOf(t) && (h.push(t), l && n && (r = e.length)), t
              },
              cancel: t => {
                const e = i.indexOf(t); - 1 !== e && i.splice(e, 1), a.delete(t)
              },
              process: l => {
                if (n) s = !0;
                else {
                  if (n = !0, [e, i] = [i, e], i.length = 0, r = e.length, r)
                    for (let i = 0; i < r; i++) {
                      const r = e[i];
                      r(l), a.has(r) && (o.schedule(r), t())
                    }
                  n = !1, s && (s = !1, o.process(l))
                }
              }
            };
          return o
        }((() => l = !0)), t)), {}),
        u = p.reduce(((t, e) => {
          const i = c[e];
          return t[e] = (t, e = !1, r = !1) => (l || g(), i.schedule(t, e, r)), t
        }), {}),
        f = p.reduce(((t, e) => (t[e] = c[e].cancel, t)), {}),
        d = p.reduce(((t, e) => (t[e] = () => c[e].process(a.u), t)), {}),
        m = t => c[t].process(a.u),
        y = t => {
          l = !1, a.u.delta = o ? r : Math.max(Math.min(t - a.u.timestamp, 40), 1), a.u.timestamp = t, h = !0, p.forEach(m), h = !1, l && (o = !1, s(y))
        },
        g = () => {
          l = !0, o = !0, h || s(y)
        }
    },
    40338: function(module, exports, __webpack_require__) {
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
          var i, r, n = t.length;
          for (i = 0; i < n; i += 1)
            for (var s in r = t[i].prototype) Object.prototype.hasOwnProperty.call(r, s) && (e.prototype[s] = r[s])
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
                  var e, i = this.audios.length;
                  for (e = 0; e < i; e += 1) this.audios[e].setRate(t)
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
              var i, r = 0,
                n = [];
              switch (t) {
                case "int16":
                case "uint8c":
                  i = 1;
                  break;
                default:
                  i = 1.1
              }
              for (r = 0; r < e; r += 1) n.push(i);
              return n
            }
            return "function" == typeof Uint8ClampedArray && "function" == typeof Float32Array ? function(e, i) {
              return "float32" === e ? new Float32Array(i) : "int16" === e ? new Int16Array(i) : "uint8c" === e ? new Uint8ClampedArray(i) : t(e, i)
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
            i = e.length;
          for (t = 0; t < i; t += 1) BMMath[e[t]] = Math[e[t]]
        }(), BMMath.random = Math.random, BMMath.abs = function(t) {
          if ("object" === _typeof$6(t) && t.length) {
            var e, i = createSizedArray(t.length),
              r = t.length;
            for (e = 0; e < r; e += 1) i[e] = Math.abs(t[e]);
            return i
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

        function BMEnterFrameEvent(t, e, i, r) {
          this.type = t, this.currentTime = e, this.totalTime = i, this.direction = r < 0 ? -1 : 1
        }

        function BMCompleteEvent(t, e) {
          this.type = t, this.direction = e < 0 ? -1 : 1
        }

        function BMCompleteLoopEvent(t, e, i, r) {
          this.type = t, this.currentLoop = i, this.totalLoops = e, this.direction = r < 0 ? -1 : 1
        }

        function BMSegmentStartEvent(t, e, i) {
          this.type = t, this.firstFrame = e, this.totalFrames = i
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

        function HSVtoRGB(t, e, i) {
          var r, n, s, a, o, l, h, p;
          switch (l = i * (1 - e), h = i * (1 - (o = 6 * t - (a = Math.floor(6 * t))) * e), p = i * (1 - (1 - o) * e), a % 6) {
            case 0:
              r = i, n = p, s = l;
              break;
            case 1:
              r = h, n = i, s = l;
              break;
            case 2:
              r = l, n = i, s = p;
              break;
            case 3:
              r = l, n = h, s = i;
              break;
            case 4:
              r = p, n = l, s = i;
              break;
            case 5:
              r = i, n = l, s = h
          }
          return [r, n, s]
        }

        function RGBtoHSV(t, e, i) {
          var r, n = Math.max(t, e, i),
            s = Math.min(t, e, i),
            a = n - s,
            o = 0 === n ? 0 : a / n,
            l = n / 255;
          switch (n) {
            case s:
              r = 0;
              break;
            case t:
              r = e - i + a * (e < i ? 6 : 0), r /= 6 * a;
              break;
            case e:
              r = i - t + 2 * a, r /= 6 * a;
              break;
            case i:
              r = t - e + 4 * a, r /= 6 * a
          }
          return [r, o, l]
        }

        function addSaturationToRGB(t, e) {
          var i = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
          return i[1] += e, i[1] > 1 ? i[1] = 1 : i[1] <= 0 && (i[1] = 0), HSVtoRGB(i[0], i[1], i[2])
        }

        function addBrightnessToRGB(t, e) {
          var i = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
          return i[2] += e, i[2] > 1 ? i[2] = 1 : i[2] < 0 && (i[2] = 0), HSVtoRGB(i[0], i[1], i[2])
        }

        function addHueToRGB(t, e) {
          var i = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
          return i[0] += e / 360, i[0] > 1 ? i[0] -= 1 : i[0] < 0 && (i[0] += 1), HSVtoRGB(i[0], i[1], i[2])
        }
        var rgbToHex = function() {
            var t, e, i = [];
            for (t = 0; t < 256; t += 1) e = t.toString(16), i[t] = 1 === e.length ? "0" + e : e;
            return function(t, e, r) {
              return t < 0 && (t = 0), e < 0 && (e = 0), r < 0 && (r = 0), "#" + i[t] + i[e] + i[r]
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
            var t, e, i = 1,
              r = [],
              n = {
                onmessage: function() {},
                postMessage: function(e) {
                  t({
                    data: e
                  })
                }
              },
              s = {
                postMessage: function(t) {
                  n.onmessage({
                    data: t
                  })
                }
              };

            function a() {
              e || (e = function(e) {
                if (window.Worker && window.Blob && getWebWorker()) {
                  var i = new Blob(["var _workerSelf = self; self.onmessage = ", e.toString()], {
                      type: "text/javascript"
                    }),
                    r = URL.createObjectURL(i);
                  return new Worker(r)
                }
                return t = e, n
              }((function(t) {
                if (s.dataManager || (s.dataManager = function() {
                    function t(n, s) {
                      var a, o, l, h, p, c, u, f = n.length;
                      for (o = 0; o < f; o += 1)
                        if ("ks" in (a = n[o]) && !a.completed) {
                          if (a.completed = !0, a.hasMask) {
                            var d = a.masksProperties;
                            for (h = d.length, l = 0; l < h; l += 1)
                              if (d[l].pt.k.i) r(d[l].pt.k);
                              else
                                for (c = d[l].pt.k.length, p = 0; p < c; p += 1) d[l].pt.k[p].s && r(d[l].pt.k[p].s[0]), d[l].pt.k[p].e && r(d[l].pt.k[p].e[0])
                          }
                          0 === a.ty ? (a.layers = e(a.refId, s), t(a.layers, s)) : 4 === a.ty ? i(a.shapes) : 5 === a.ty && (0 === (u = a).t.a.length && u.t.p)
                        }
                    }

                    function e(t, e) {
                      var i = function(t, e) {
                        for (var i = 0, r = e.length; i < r;) {
                          if (e[i].id === t) return e[i];
                          i += 1
                        }
                        return null
                      }(t, e);
                      return i ? i.layers.__used ? JSON.parse(JSON.stringify(i.layers)) : (i.layers.__used = !0, i.layers) : null
                    }

                    function i(t) {
                      var e, n, s;
                      for (e = t.length - 1; e >= 0; e -= 1)
                        if ("sh" === t[e].ty)
                          if (t[e].ks.k.i) r(t[e].ks.k);
                          else
                            for (s = t[e].ks.k.length, n = 0; n < s; n += 1) t[e].ks.k[n].s && r(t[e].ks.k[n].s[0]), t[e].ks.k[n].e && r(t[e].ks.k[n].e[0]);
                      else "gr" === t[e].ty && i(t[e].it)
                    }

                    function r(t) {
                      var e, i = t.i.length;
                      for (e = 0; e < i; e += 1) t.i[e][0] += t.v[e][0], t.i[e][1] += t.v[e][1], t.o[e][0] += t.v[e][0], t.o[e][1] += t.v[e][1]
                    }

                    function n(t, e) {
                      var i = e ? e.split(".") : [100, 100, 100];
                      return t[0] > i[0] || !(i[0] > t[0]) && (t[1] > i[1] || !(i[1] > t[1]) && (t[2] > i[2] || !(i[2] > t[2]) && null))
                    }
                    var s, a = function() {
                        var t = [4, 4, 14];

                        function e(t) {
                          var e, i, r, n = t.length;
                          for (e = 0; e < n; e += 1) 5 === t[e].ty && (void 0, r = (i = t[e]).t.d, i.t.d = {
                            k: [{
                              s: r,
                              t: 0
                            }]
                          })
                        }
                        return function(i) {
                          if (n(t, i.v) && (e(i.layers), i.assets)) {
                            var r, s = i.assets.length;
                            for (r = 0; r < s; r += 1) i.assets[r].layers && e(i.assets[r].layers)
                          }
                        }
                      }(),
                      o = (s = [4, 7, 99], function(t) {
                        if (t.chars && !n(s, t.v)) {
                          var e, r = t.chars.length;
                          for (e = 0; e < r; e += 1) {
                            var a = t.chars[e];
                            a.data && a.data.shapes && (i(a.data.shapes), a.data.ip = 0, a.data.op = 99999, a.data.st = 0, a.data.sr = 1, a.data.ks = {
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
                            }, t.chars[e].t || (a.data.shapes.push({
                              ty: "no"
                            }), a.data.shapes[0].it.push({
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
                          var e, i, r = t.length;
                          for (e = 0; e < r; e += 1) 5 === t[e].ty && (i = void 0, "number" == typeof(i = t[e].t.p).a && (i.a = {
                            a: 0,
                            k: i.a
                          }), "number" == typeof i.p && (i.p = {
                            a: 0,
                            k: i.p
                          }), "number" == typeof i.r && (i.r = {
                            a: 0,
                            k: i.r
                          }))
                        }
                        return function(i) {
                          if (n(t, i.v) && (e(i.layers), i.assets)) {
                            var r, s = i.assets.length;
                            for (r = 0; r < s; r += 1) i.assets[r].layers && e(i.assets[r].layers)
                          }
                        }
                      }(),
                      h = function() {
                        var t = [4, 1, 9];

                        function e(t) {
                          var i, r, n, s = t.length;
                          for (i = 0; i < s; i += 1)
                            if ("gr" === t[i].ty) e(t[i].it);
                            else if ("fl" === t[i].ty || "st" === t[i].ty)
                            if (t[i].c.k && t[i].c.k[0].i)
                              for (n = t[i].c.k.length, r = 0; r < n; r += 1) t[i].c.k[r].s && (t[i].c.k[r].s[0] /= 255, t[i].c.k[r].s[1] /= 255, t[i].c.k[r].s[2] /= 255, t[i].c.k[r].s[3] /= 255), t[i].c.k[r].e && (t[i].c.k[r].e[0] /= 255, t[i].c.k[r].e[1] /= 255, t[i].c.k[r].e[2] /= 255, t[i].c.k[r].e[3] /= 255);
                            else t[i].c.k[0] /= 255, t[i].c.k[1] /= 255, t[i].c.k[2] /= 255, t[i].c.k[3] /= 255
                        }

                        function i(t) {
                          var i, r = t.length;
                          for (i = 0; i < r; i += 1) 4 === t[i].ty && e(t[i].shapes)
                        }
                        return function(e) {
                          if (n(t, e.v) && (i(e.layers), e.assets)) {
                            var r, s = e.assets.length;
                            for (r = 0; r < s; r += 1) e.assets[r].layers && i(e.assets[r].layers)
                          }
                        }
                      }(),
                      p = function() {
                        var t = [4, 4, 18];

                        function e(t) {
                          var i, r, n;
                          for (i = t.length - 1; i >= 0; i -= 1)
                            if ("sh" === t[i].ty)
                              if (t[i].ks.k.i) t[i].ks.k.c = t[i].closed;
                              else
                                for (n = t[i].ks.k.length, r = 0; r < n; r += 1) t[i].ks.k[r].s && (t[i].ks.k[r].s[0].c = t[i].closed), t[i].ks.k[r].e && (t[i].ks.k[r].e[0].c = t[i].closed);
                          else "gr" === t[i].ty && e(t[i].it)
                        }

                        function i(t) {
                          var i, r, n, s, a, o, l = t.length;
                          for (r = 0; r < l; r += 1) {
                            if ((i = t[r]).hasMask) {
                              var h = i.masksProperties;
                              for (s = h.length, n = 0; n < s; n += 1)
                                if (h[n].pt.k.i) h[n].pt.k.c = h[n].cl;
                                else
                                  for (o = h[n].pt.k.length, a = 0; a < o; a += 1) h[n].pt.k[a].s && (h[n].pt.k[a].s[0].c = h[n].cl), h[n].pt.k[a].e && (h[n].pt.k[a].e[0].c = h[n].cl)
                            }
                            4 === i.ty && e(i.shapes)
                          }
                        }
                        return function(e) {
                          if (n(t, e.v) && (i(e.layers), e.assets)) {
                            var r, s = e.assets.length;
                            for (r = 0; r < s; r += 1) e.assets[r].layers && i(e.assets[r].layers)
                          }
                        }
                      }();
                    var c = {
                      completeData: function(i) {
                        i.__complete || (h(i), a(i), o(i), l(i), p(i), t(i.layers, i.assets), function(i, r) {
                          if (i) {
                            var n = 0,
                              s = i.length;
                            for (n = 0; n < s; n += 1) 1 === i[n].t && (i[n].data.layers = e(i[n].data.refId, r), t(i[n].data.layers, r))
                          }
                        }(i.chars, i.assets), i.__complete = !0)
                      }
                    };
                    return c.checkColors = h, c.checkChars = o, c.checkPathProperties = l, c.checkShapes = p, c.completeLayers = t, c
                  }()), s.assetLoader || (s.assetLoader = function() {
                    function t(t) {
                      var e = t.getResponseHeader("content-type");
                      return e && "json" === t.responseType && -1 !== e.indexOf("json") || t.response && "object" === _typeof$5(t.response) ? t.response : t.response && "string" == typeof t.response ? JSON.parse(t.response) : t.responseText ? JSON.parse(t.responseText) : null
                    }
                    return {
                      load: function(e, i, r, n) {
                        var s, a = new XMLHttpRequest;
                        try {
                          a.responseType = "json"
                        } catch (t) {}
                        a.onreadystatechange = function() {
                          if (4 === a.readyState)
                            if (200 === a.status) s = t(a), r(s);
                            else try {
                              s = t(a), r(s)
                            } catch (t) {
                              n && n(t)
                            }
                        };
                        try {
                          a.open(["G", "E", "T"].join(""), e, !0)
                        } catch (t) {
                          a.open(["G", "E", "T"].join(""), i + "/" + e, !0)
                        }
                        a.send()
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
                  i = e.id,
                  n = r[i];
                r[i] = null, "success" === e.status ? n.onComplete(e.payload) : n.onError && n.onError()
              })
            }

            function o(t, e) {
              var n = "processId_" + (i += 1);
              return r[n] = {
                onComplete: t,
                onError: e
              }, n
            }
            return {
              loadAnimation: function(t, i, r) {
                a();
                var n = o(i, r);
                e.postMessage({
                  type: "loadAnimation",
                  path: t,
                  fullPath: window.location.origin + window.location.pathname,
                  id: n
                })
              },
              loadData: function(t, i, r) {
                a();
                var n = o(i, r);
                e.postMessage({
                  type: "loadData",
                  path: t,
                  fullPath: window.location.origin + window.location.pathname,
                  id: n
                })
              },
              completeAnimation: function(t, i, r) {
                a();
                var n = o(i, r);
                e.postMessage({
                  type: "complete",
                  animation: t,
                  id: n
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

            function i() {
              this.loadedFootagesCount += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
            }

            function r(t, e, i) {
              var r = "";
              if (t.e) r = t.p;
              else if (e) {
                var n = t.p; - 1 !== n.indexOf("images/") && (n = n.split("/")[1]), r = e + n
              } else r = i, r += t.u ? t.u : "", r += t.p;
              return r
            }

            function n(t) {
              var e = 0,
                i = setInterval(function() {
                  (t.getBBox().width || e > 500) && (this._imageLoaded(), clearInterval(i)), e += 1
                }.bind(this), 50)
            }

            function s(t) {
              var e = {
                  assetData: t
                },
                i = r(t, this.assetsPath, this.path);
              return dataManager.loadData(i, function(t) {
                e.img = t, this._footageLoaded()
              }.bind(this), function() {
                e.img = {}, this._footageLoaded()
              }.bind(this)), e
            }

            function a() {
              this._imageLoaded = e.bind(this), this._footageLoaded = i.bind(this), this.testImageLoaded = n.bind(this), this.createFootageData = s.bind(this), this.assetsPath = "", this.path = "", this.totalImages = 0, this.totalFootages = 0, this.loadedAssets = 0, this.loadedFootagesCount = 0, this.imagesLoadedCb = null, this.images = []
            }
            return a.prototype = {
              loadAssets: function(t, e) {
                var i;
                this.imagesLoadedCb = e;
                var r = t.length;
                for (i = 0; i < r; i += 1) t[i].layers || (t[i].t && "seq" !== t[i].t ? 3 === t[i].t && (this.totalFootages += 1, this.images.push(this.createFootageData(t[i]))) : (this.totalImages += 1, this.images.push(this._createImageData(t[i]))))
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
                for (var e = 0, i = this.images.length; e < i;) {
                  if (this.images[e].assetData === t) return this.images[e].img;
                  e += 1
                }
                return null
              },
              createImgData: function(e) {
                var i = r(e, this.assetsPath, this.path),
                  n = createTag("img");
                n.crossOrigin = "anonymous", n.addEventListener("load", this._imageLoaded, !1), n.addEventListener("error", function() {
                  s.img = t, this._imageLoaded()
                }.bind(this), !1), n.src = i;
                var s = {
                  img: n,
                  assetData: e
                };
                return s
              },
              createImageData: function(e) {
                var i = r(e, this.assetsPath, this.path),
                  n = createNS("image");
                isSafari ? this.testImageLoaded(n) : n.addEventListener("load", this._imageLoaded, !1), n.addEventListener("error", function() {
                  s.img = t, this._imageLoaded()
                }.bind(this), !1), n.setAttributeNS("http://www.w3.org/1999/xlink", "href", i), this._elementHelper.append ? this._elementHelper.append(n) : this._elementHelper.appendChild(n);
                var s = {
                  img: n,
                  assetData: e
                };
                return s
              },
              imageLoaded: e,
              footageLoaded: i,
              setCacheType: function(t, e) {
                "svg" === t ? (this._elementHelper = e, this._createImageData = this.createImageData.bind(this)) : this._createImageData = this.createImgData.bind(this)
              }
            }, a
          }();

        function BaseEvent() {}
        BaseEvent.prototype = {
          triggerEvent: function(t, e) {
            if (this._cbs[t])
              for (var i = this._cbs[t], r = 0; r < i.length; r += 1) i[r](e)
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
                for (var i = 0, r = this._cbs[t].length; i < r;) this._cbs[t][i] === e && (this._cbs[t].splice(i, 1), i -= 1, r -= 1), i += 1;
                this._cbs[t].length || (this._cbs[t] = null)
              }
            } else this._cbs[t] = null
          }
        };
        var markerParser = function() {
            function t(t) {
              for (var e, i = t.split("\r\n"), r = {}, n = 0, s = 0; s < i.length; s += 1) 2 === (e = i[s].split(":")).length && (r[e[0]] = e[1].trim(), n += 1);
              if (0 === n) throw new Error;
              return r
            }
            return function(e) {
              for (var i = [], r = 0; r < e.length; r += 1) {
                var n = e[r],
                  s = {
                    time: n.tm,
                    duration: n.dr
                  };
                try {
                  s.payload = JSON.parse(e[r].cm)
                } catch (i) {
                  try {
                    s.payload = t(e[r].cm)
                  } catch (t) {
                    s.payload = {
                      name: e[r].cm
                    }
                  }
                }
                i.push(s)
              }
              return i
            }
          }(),
          ProjectInterface = function() {
            function t(t) {
              this.compositions.push(t)
            }
            return function() {
              function e(t) {
                for (var e = 0, i = this.compositions.length; e < i;) {
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
          var i = getRenderer(e);
          this.renderer = new i(this, t.rendererSettings), this.imagePreloader.setCacheType(e, this.renderer.globalData.defs), this.renderer.setProjectInterface(this.projectInterface), this.animType = e, "" === t.loop || null === t.loop || void 0 === t.loop || !0 === t.loop ? this.loop = !0 : !1 === t.loop ? this.loop = !1 : this.loop = parseInt(t.loop, 10), this.autoplay = !("autoplay" in t) || t.autoplay, this.name = t.name ? t.name : "", this.autoloadSegments = !Object.prototype.hasOwnProperty.call(t, "autoloadSegments") || t.autoloadSegments, this.assetsPath = t.assetsPath, this.initialSegment = t.initialSegment, t.audioFactory && this.audioController.setAudioFactory(t.audioFactory), t.animationData ? this.setupAnimation(t.animationData) : t.path && (-1 !== t.path.lastIndexOf("\\") ? this.path = t.path.substr(0, t.path.lastIndexOf("\\") + 1) : this.path = t.path.substr(0, t.path.lastIndexOf("/") + 1), this.fileName = t.path.substr(t.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), dataManager.loadAnimation(t.path, this.configAnimation, this.onSetupError))
        }, AnimationItem.prototype.onSetupError = function() {
          this.trigger("data_failed")
        }, AnimationItem.prototype.setupAnimation = function(t) {
          dataManager.completeAnimation(t, this.configAnimation)
        }, AnimationItem.prototype.setData = function(t, e) {
          e && "object" !== _typeof$4(e) && (e = JSON.parse(e));
          var i = {
              wrapper: t,
              animationData: e
            },
            r = t.attributes;
          i.path = r.getNamedItem("data-animation-path") ? r.getNamedItem("data-animation-path").value : r.getNamedItem("data-bm-path") ? r.getNamedItem("data-bm-path").value : r.getNamedItem("bm-path") ? r.getNamedItem("bm-path").value : "", i.animType = r.getNamedItem("data-anim-type") ? r.getNamedItem("data-anim-type").value : r.getNamedItem("data-bm-type") ? r.getNamedItem("data-bm-type").value : r.getNamedItem("bm-type") ? r.getNamedItem("bm-type").value : r.getNamedItem("data-bm-renderer") ? r.getNamedItem("data-bm-renderer").value : r.getNamedItem("bm-renderer") ? r.getNamedItem("bm-renderer").value : getRegisteredRenderer() || "canvas";
          var n = r.getNamedItem("data-anim-loop") ? r.getNamedItem("data-anim-loop").value : r.getNamedItem("data-bm-loop") ? r.getNamedItem("data-bm-loop").value : r.getNamedItem("bm-loop") ? r.getNamedItem("bm-loop").value : "";
          "false" === n ? i.loop = !1 : "true" === n ? i.loop = !0 : "" !== n && (i.loop = parseInt(n, 10));
          var s = r.getNamedItem("data-anim-autoplay") ? r.getNamedItem("data-anim-autoplay").value : r.getNamedItem("data-bm-autoplay") ? r.getNamedItem("data-bm-autoplay").value : !r.getNamedItem("bm-autoplay") || r.getNamedItem("bm-autoplay").value;
          i.autoplay = "false" !== s, i.name = r.getNamedItem("data-name") ? r.getNamedItem("data-name").value : r.getNamedItem("data-bm-name") ? r.getNamedItem("data-bm-name").value : r.getNamedItem("bm-name") ? r.getNamedItem("bm-name").value : "", "false" === (r.getNamedItem("data-anim-prerender") ? r.getNamedItem("data-anim-prerender").value : r.getNamedItem("data-bm-prerender") ? r.getNamedItem("data-bm-prerender").value : r.getNamedItem("bm-prerender") ? r.getNamedItem("bm-prerender").value : "") && (i.prerender = !1), i.path ? this.setParams(i) : this.trigger("destroy")
        }, AnimationItem.prototype.includeLayers = function(t) {
          t.op > this.animationData.op && (this.animationData.op = t.op, this.totalFrames = Math.floor(t.op - this.animationData.ip));
          var e, i, r = this.animationData.layers,
            n = r.length,
            s = t.layers,
            a = s.length;
          for (i = 0; i < a; i += 1)
            for (e = 0; e < n;) {
              if (r[e].id === s[i].id) {
                r[e] = s[i];
                break
              }
              e += 1
            }
          if ((t.chars || t.fonts) && (this.renderer.globalData.fontManager.addChars(t.chars), this.renderer.globalData.fontManager.addFonts(t.fonts, this.renderer.globalData.defs)), t.assets)
            for (n = t.assets.length, e = 0; e < n; e += 1) this.animationData.assets.push(t.assets[e]);
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
          var i = this.path + this.fileName + "_" + this.segmentPos + ".json";
          this.segmentPos += 1, dataManager.loadData(i, this.includeLayers.bind(this), function() {
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
          var i = "number" == typeof t ? t : void 0,
            r = "number" == typeof e ? e : void 0;
          this.renderer.updateContainerSize(i, r)
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
          for (var e, i = 0; i < this.markers.length; i += 1)
            if ((e = this.markers[i]).payload && e.payload.name === t) return e;
          return null
        }, AnimationItem.prototype.goToAndStop = function(t, e, i) {
          if (!i || this.name === i) {
            var r = Number(t);
            if (isNaN(r)) {
              var n = this.getMarkerData(t);
              n && this.goToAndStop(n.time, !0)
            } else e ? this.setCurrentRawFrameValue(t) : this.setCurrentRawFrameValue(t * this.frameModifier);
            this.pause()
          }
        }, AnimationItem.prototype.goToAndPlay = function(t, e, i) {
          if (!i || this.name === i) {
            var r = Number(t);
            if (isNaN(r)) {
              var n = this.getMarkerData(t);
              n && (n.duration ? this.playSegments([n.time, n.time + n.duration], !0) : this.goToAndStop(n.time, !0))
            } else this.goToAndStop(r, e, i);
            this.play()
          }
        }, AnimationItem.prototype.advanceTime = function(t) {
          if (!0 !== this.isPaused && !1 !== this.isLoaded) {
            var e = this.currentRawFrame + t * this.frameModifier,
              i = !1;
            e >= this.totalFrames - 1 && this.frameModifier > 0 ? this.loop && this.playCount !== this.loop ? e >= this.totalFrames ? (this.playCount += 1, this.checkSegments(e % this.totalFrames) || (this.setCurrentRawFrameValue(e % this.totalFrames), this._completedLoop = !0, this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(e) : this.checkSegments(e > this.totalFrames ? e % this.totalFrames : 0) || (i = !0, e = this.totalFrames - 1) : e < 0 ? this.checkSegments(e % this.totalFrames) || (!this.loop || this.playCount-- <= 0 && !0 !== this.loop ? (i = !0, e = 0) : (this.setCurrentRawFrameValue(this.totalFrames + e % this.totalFrames), this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = !0)) : this.setCurrentRawFrameValue(e), i && (this.setCurrentRawFrameValue(e), this.pause(), this.trigger("complete"))
          }
        }, AnimationItem.prototype.adjustSegment = function(t, e) {
          this.playCount = 0, t[1] < t[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.totalFrames = t[0] - t[1], this.timeCompleted = this.totalFrames, this.firstFrame = t[1], this.setCurrentRawFrameValue(this.totalFrames - .001 - e)) : t[1] > t[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.totalFrames = t[1] - t[0], this.timeCompleted = this.totalFrames, this.firstFrame = t[0], this.setCurrentRawFrameValue(.001 + e)), this.trigger("segmentStart")
        }, AnimationItem.prototype.setSegment = function(t, e) {
          var i = -1;
          this.isPaused && (this.currentRawFrame + this.firstFrame < t ? i = t : this.currentRawFrame + this.firstFrame > e && (i = e - t)), this.firstFrame = t, this.totalFrames = e - t, this.timeCompleted = this.totalFrames, -1 !== i && this.goToAndStop(i, !0)
        }, AnimationItem.prototype.playSegments = function(t, e) {
          if (e && (this.segments.length = 0), "object" === _typeof$4(t[0])) {
            var i, r = t.length;
            for (i = 0; i < r; i += 1) this.segments.push(t[i])
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
            var i = t.p; - 1 !== i.indexOf("images/") && (i = i.split("/")[1]), e = this.assetsPath + i
          } else e = this.path, e += t.u ? t.u : "", e += t.p;
          return e
        }, AnimationItem.prototype.getAssetData = function(t) {
          for (var e = 0, i = this.assets.length; e < i;) {
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
        }, AnimationItem.prototype.updateDocumentData = function(t, e, i) {
          try {
            this.renderer.getElementByPath(t).updateDocumentData(e, i)
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
              i = 0,
              r = 0,
              n = 0,
              s = !0,
              a = !1;

            function o(t) {
              for (var i = 0, n = t.target; i < r;) e[i].animation === n && (e.splice(i, 1), i -= 1, r -= 1, n.isPaused || p()), i += 1
            }

            function l(t, i) {
              if (!t) return null;
              for (var n = 0; n < r;) {
                if (e[n].elem === t && null !== e[n].elem) return e[n].animation;
                n += 1
              }
              var s = new AnimationItem;
              return c(s, t), s.setData(t, i), s
            }

            function h() {
              n += 1, d()
            }

            function p() {
              n -= 1
            }

            function c(t, i) {
              t.addEventListener("destroy", o), t.addEventListener("_active", h), t.addEventListener("_idle", p), e.push({
                elem: i,
                animation: t
              }), r += 1
            }

            function u(t) {
              var o, l = t - i;
              for (o = 0; o < r; o += 1) e[o].animation.advanceTime(l);
              i = t, n && !a ? window.requestAnimationFrame(u) : s = !0
            }

            function f(t) {
              i = t, window.requestAnimationFrame(u)
            }

            function d() {
              !a && n && s && (window.requestAnimationFrame(f), s = !1)
            }
            return t.registerAnimation = l, t.loadAnimation = function(t) {
              var e = new AnimationItem;
              return c(e, null), e.setParams(t), e
            }, t.setSpeed = function(t, i) {
              var n;
              for (n = 0; n < r; n += 1) e[n].animation.setSpeed(t, i)
            }, t.setDirection = function(t, i) {
              var n;
              for (n = 0; n < r; n += 1) e[n].animation.setDirection(t, i)
            }, t.play = function(t) {
              var i;
              for (i = 0; i < r; i += 1) e[i].animation.play(t)
            }, t.pause = function(t) {
              var i;
              for (i = 0; i < r; i += 1) e[i].animation.pause(t)
            }, t.stop = function(t) {
              var i;
              for (i = 0; i < r; i += 1) e[i].animation.stop(t)
            }, t.togglePause = function(t) {
              var i;
              for (i = 0; i < r; i += 1) e[i].animation.togglePause(t)
            }, t.searchAnimations = function(t, e, i) {
              var r, n = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))),
                s = n.length;
              for (r = 0; r < s; r += 1) i && n[r].setAttribute("data-bm-type", i), l(n[r], t);
              if (e && 0 === s) {
                i || (i = "svg");
                var a = document.getElementsByTagName("body")[0];
                a.innerText = "";
                var o = createTag("div");
                o.style.width = "100%", o.style.height = "100%", o.setAttribute("data-bm-type", i), a.appendChild(o), l(o, t)
              }
            }, t.resize = function() {
              var t;
              for (t = 0; t < r; t += 1) e[t].animation.resize()
            }, t.goToAndStop = function(t, i, n) {
              var s;
              for (s = 0; s < r; s += 1) e[s].animation.goToAndStop(t, i, n)
            }, t.destroy = function(t) {
              var i;
              for (i = r - 1; i >= 0; i -= 1) e[i].animation.destroy(t)
            }, t.freeze = function() {
              a = !0
            }, t.unfreeze = function() {
              a = !1, d()
            }, t.setVolume = function(t, i) {
              var n;
              for (n = 0; n < r; n += 1) e[n].animation.setVolume(t, i)
            }, t.mute = function(t) {
              var i;
              for (i = 0; i < r; i += 1) e[i].animation.mute(t)
            }, t.unmute = function(t) {
              var i;
              for (i = 0; i < r; i += 1) e[i].animation.unmute(t)
            }, t.getRegisteredAnimations = function() {
              var t, i = e.length,
                r = [];
              for (t = 0; t < i; t += 1) r.push(e[t].animation);
              return r
            }, t
          }(),
          BezierFactory = function() {
            var t = {
                getBezierEasing: function(t, i, r, n, s) {
                  var a = s || ("bez_" + t + "_" + i + "_" + r + "_" + n).replace(/\./g, "p");
                  if (e[a]) return e[a];
                  var o = new p([t, i, r, n]);
                  return e[a] = o, o
                }
              },
              e = {},
              i = 11,
              r = 1 / (i - 1),
              n = "function" == typeof Float32Array;

            function s(t, e) {
              return 1 - 3 * e + 3 * t
            }

            function a(t, e) {
              return 3 * e - 6 * t
            }

            function o(t) {
              return 3 * t
            }

            function l(t, e, i) {
              return ((s(e, i) * t + a(e, i)) * t + o(e)) * t
            }

            function h(t, e, i) {
              return 3 * s(e, i) * t * t + 2 * a(e, i) * t + o(e)
            }

            function p(t) {
              this._p = t, this._mSampleValues = n ? new Float32Array(i) : new Array(i), this._precomputed = !1, this.get = this.get.bind(this)
            }
            return p.prototype = {
              get: function(t) {
                var e = this._p[0],
                  i = this._p[1],
                  r = this._p[2],
                  n = this._p[3];
                return this._precomputed || this._precompute(), e === i && r === n ? t : 0 === t ? 0 : 1 === t ? 1 : l(this._getTForX(t), i, n)
              },
              _precompute: function() {
                var t = this._p[0],
                  e = this._p[1],
                  i = this._p[2],
                  r = this._p[3];
                this._precomputed = !0, t === e && i === r || this._calcSampleValues()
              },
              _calcSampleValues: function() {
                for (var t = this._p[0], e = this._p[2], n = 0; n < i; ++n) this._mSampleValues[n] = l(n * r, t, e)
              },
              _getTForX: function(t) {
                for (var e = this._p[0], n = this._p[2], s = this._mSampleValues, a = 0, o = 1, p = i - 1; o !== p && s[o] <= t; ++o) a += r;
                var c = a + (t - s[--o]) / (s[o + 1] - s[o]) * r,
                  u = h(c, e, n);
                return u >= .001 ? function(t, e, i, r) {
                  for (var n = 0; n < 4; ++n) {
                    var s = h(e, i, r);
                    if (0 === s) return e;
                    e -= (l(e, i, r) - t) / s
                  }
                  return e
                }(t, c, e, n) : 0 === u ? c : function(t, e, i, r, n) {
                  var s, a, o = 0;
                  do {
                    (s = l(a = e + (i - e) / 2, r, n) - t) > 0 ? i = a : e = a
                  } while (Math.abs(s) > 1e-7 && ++o < 10);
                  return a
                }(t, a, a + r, e, n)
              }
            }, t
          }(),
          pooling = {
            double: function(t) {
              return t.concat(createSizedArray(t.length))
            }
          },
          poolFactory = function(t, e, i) {
            var r = 0,
              n = t,
              s = createSizedArray(n);
            return {
              newElement: function() {
                return r ? s[r -= 1] : e()
              },
              release: function(t) {
                r === n && (s = pooling.double(s), n *= 2), i && i(t), s[r] = t, r += 1
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
            var e, i = t.lengths.length;
            for (e = 0; e < i; e += 1) bezierLengthPool.release(t.lengths[e]);
            t.lengths.length = 0
          }));

        function bezFunction() {
          var t = Math;

          function e(t, e, i, r, n, s) {
            var a = t * r + e * n + i * s - n * r - s * t - i * e;
            return a > -.001 && a < .001
          }
          var i = function(t, e, i, r) {
            var n, s, a, o, l, h, p = getDefaultCurveSegments(),
              c = 0,
              u = [],
              f = [],
              d = bezierLengthPool.newElement();
            for (a = i.length, n = 0; n < p; n += 1) {
              for (l = n / (p - 1), h = 0, s = 0; s < a; s += 1) o = bmPow(1 - l, 3) * t[s] + 3 * bmPow(1 - l, 2) * l * i[s] + 3 * (1 - l) * bmPow(l, 2) * r[s] + bmPow(l, 3) * e[s], u[s] = o, null !== f[s] && (h += bmPow(u[s] - f[s], 2)), f[s] = u[s];
              h && (c += h = bmSqrt(h)), d.percents[n] = l, d.lengths[n] = c
            }
            return d.addedLength = c, d
          };

          function r(t) {
            this.segmentLength = 0, this.points = new Array(t)
          }

          function n(t, e) {
            this.partialLength = t, this.point = e
          }
          var s, a = (s = {}, function(t, i, a, o) {
            var l = (t[0] + "_" + t[1] + "_" + i[0] + "_" + i[1] + "_" + a[0] + "_" + a[1] + "_" + o[0] + "_" + o[1]).replace(/\./g, "p");
            if (!s[l]) {
              var h, p, c, u, f, d, m, y = getDefaultCurveSegments(),
                g = 0,
                v = null;
              2 === t.length && (t[0] !== i[0] || t[1] !== i[1]) && e(t[0], t[1], i[0], i[1], t[0] + a[0], t[1] + a[1]) && e(t[0], t[1], i[0], i[1], i[0] + o[0], i[1] + o[1]) && (y = 2);
              var b = new r(y);
              for (c = a.length, h = 0; h < y; h += 1) {
                for (m = createSizedArray(c), f = h / (y - 1), d = 0, p = 0; p < c; p += 1) u = bmPow(1 - f, 3) * t[p] + 3 * bmPow(1 - f, 2) * f * (t[p] + a[p]) + 3 * (1 - f) * bmPow(f, 2) * (i[p] + o[p]) + bmPow(f, 3) * i[p], m[p] = u, null !== v && (d += bmPow(m[p] - v[p], 2));
                g += d = bmSqrt(d), b.points[h] = new n(d, m), v = m
              }
              b.segmentLength = g, s[l] = b
            }
            return s[l]
          });

          function o(t, e) {
            var i = e.percents,
              r = e.lengths,
              n = i.length,
              s = bmFloor((n - 1) * t),
              a = t * e.addedLength,
              o = 0;
            if (s === n - 1 || 0 === s || a === r[s]) return i[s];
            for (var l = r[s] > a ? -1 : 1, h = !0; h;)
              if (r[s] <= a && r[s + 1] > a ? (o = (a - r[s]) / (r[s + 1] - r[s]), h = !1) : s += l, s < 0 || s >= n - 1) {
                if (s === n - 1) return i[s];
                h = !1
              } return i[s] + (i[s + 1] - i[s]) * o
          }
          var l = createTypedArray("float32", 8);
          return {
            getSegmentsLength: function(t) {
              var e, r = segmentsLengthPool.newElement(),
                n = t.c,
                s = t.v,
                a = t.o,
                o = t.i,
                l = t._length,
                h = r.lengths,
                p = 0;
              for (e = 0; e < l - 1; e += 1) h[e] = i(s[e], s[e + 1], a[e], o[e + 1]), p += h[e].addedLength;
              return n && l && (h[e] = i(s[e], s[0], a[e], o[0]), p += h[e].addedLength), r.totalLength = p, r
            },
            getNewSegment: function(e, i, r, n, s, a, h) {
              s < 0 ? s = 0 : s > 1 && (s = 1);
              var p, c = o(s, h),
                u = o(a = a > 1 ? 1 : a, h),
                f = e.length,
                d = 1 - c,
                m = 1 - u,
                y = d * d * d,
                g = c * d * d * 3,
                v = c * c * d * 3,
                b = c * c * c,
                x = d * d * m,
                P = c * d * m + d * c * m + d * d * u,
                E = c * c * m + d * c * u + c * d * u,
                S = c * c * u,
                C = d * m * m,
                T = c * m * m + d * u * m + d * m * u,
                A = c * u * m + d * u * u + c * m * u,
                w = c * u * u,
                k = m * m * m,
                D = u * m * m + m * u * m + m * m * u,
                M = u * u * m + m * u * u + u * m * u,
                _ = u * u * u;
              for (p = 0; p < f; p += 1) l[4 * p] = t.round(1e3 * (y * e[p] + g * r[p] + v * n[p] + b * i[p])) / 1e3, l[4 * p + 1] = t.round(1e3 * (x * e[p] + P * r[p] + E * n[p] + S * i[p])) / 1e3, l[4 * p + 2] = t.round(1e3 * (C * e[p] + T * r[p] + A * n[p] + w * i[p])) / 1e3, l[4 * p + 3] = t.round(1e3 * (k * e[p] + D * r[p] + M * n[p] + _ * i[p])) / 1e3;
              return l
            },
            getPointInSegment: function(e, i, r, n, s, a) {
              var l = o(s, a),
                h = 1 - l;
              return [t.round(1e3 * (h * h * h * e[0] + (l * h * h + h * l * h + h * h * l) * r[0] + (l * l * h + h * l * l + l * h * l) * n[0] + l * l * l * i[0])) / 1e3, t.round(1e3 * (h * h * h * e[1] + (l * h * h + h * l * h + h * h * l) * r[1] + (l * l * h + h * l * l + l * h * l) * n[1] + l * l * l * i[1])) / 1e3]
            },
            buildBezierData: a,
            pointOnLine2D: e,
            pointOnLine3D: function(i, r, n, s, a, o, l, h, p) {
              if (0 === n && 0 === o && 0 === p) return e(i, r, s, a, l, h);
              var c, u = t.sqrt(t.pow(s - i, 2) + t.pow(a - r, 2) + t.pow(o - n, 2)),
                f = t.sqrt(t.pow(l - i, 2) + t.pow(h - r, 2) + t.pow(p - n, 2)),
                d = t.sqrt(t.pow(l - s, 2) + t.pow(h - a, 2) + t.pow(p - o, 2));
              return (c = u > f ? u > d ? u - f - d : d - f - u : d > f ? d - f - u : f - u - d) > -1e-4 && c < 1e-4
            }
          }
        }
        var bez = bezFunction(),
          initFrame = initialDefaultFrame,
          mathAbs = Math.abs;

        function interpolateValue(t, e) {
          var i, r = this.offsetTime;
          "multidimensional" === this.propType && (i = createTypedArray("float32", this.pv.length));
          for (var n, s, a, o, l, h, p, c, u, f = e.lastIndex, d = f, m = this.keyframes.length - 1, y = !0; y;) {
            if (n = this.keyframes[d], s = this.keyframes[d + 1], d === m - 1 && t >= s.t - r) {
              n.h && (n = s), f = 0;
              break
            }
            if (s.t - r > t) {
              f = d;
              break
            }
            d < m - 1 ? d += 1 : (f = 0, y = !1)
          }
          a = this.keyframesMetadata[d] || {};
          var g, v = s.t - r,
            b = n.t - r;
          if (n.to) {
            a.bezierData || (a.bezierData = bez.buildBezierData(n.s, s.s || n.e, n.to, n.ti));
            var x = a.bezierData;
            if (t >= v || t < b) {
              var P = t >= v ? x.points.length - 1 : 0;
              for (l = x.points[P].point.length, o = 0; o < l; o += 1) i[o] = x.points[P].point[o]
            } else {
              a.__fnct ? u = a.__fnct : (u = BezierFactory.getBezierEasing(n.o.x, n.o.y, n.i.x, n.i.y, n.n).get, a.__fnct = u), h = u((t - b) / (v - b));
              var E, S = x.segmentLength * h,
                C = e.lastFrame < t && e._lastKeyframeIndex === d ? e._lastAddedLength : 0;
              for (c = e.lastFrame < t && e._lastKeyframeIndex === d ? e._lastPoint : 0, y = !0, p = x.points.length; y;) {
                if (C += x.points[c].partialLength, 0 === S || 0 === h || c === x.points.length - 1) {
                  for (l = x.points[c].point.length, o = 0; o < l; o += 1) i[o] = x.points[c].point[o];
                  break
                }
                if (S >= C && S < C + x.points[c + 1].partialLength) {
                  for (E = (S - C) / x.points[c + 1].partialLength, l = x.points[c].point.length, o = 0; o < l; o += 1) i[o] = x.points[c].point[o] + (x.points[c + 1].point[o] - x.points[c].point[o]) * E;
                  break
                }
                c < p - 1 ? c += 1 : y = !1
              }
              e._lastPoint = c, e._lastAddedLength = C - x.points[c].partialLength, e._lastKeyframeIndex = d
            }
          } else {
            var T, A, w, k, D;
            if (m = n.s.length, g = s.s || n.e, this.sh && 1 !== n.h) t >= v ? (i[0] = g[0], i[1] = g[1], i[2] = g[2]) : t <= b ? (i[0] = n.s[0], i[1] = n.s[1], i[2] = n.s[2]) : quaternionToEuler(i, slerp(createQuaternion(n.s), createQuaternion(g), (t - b) / (v - b)));
            else
              for (d = 0; d < m; d += 1) 1 !== n.h && (t >= v ? h = 1 : t < b ? h = 0 : (n.o.x.constructor === Array ? (a.__fnct || (a.__fnct = []), a.__fnct[d] ? u = a.__fnct[d] : (T = void 0 === n.o.x[d] ? n.o.x[0] : n.o.x[d], A = void 0 === n.o.y[d] ? n.o.y[0] : n.o.y[d], w = void 0 === n.i.x[d] ? n.i.x[0] : n.i.x[d], k = void 0 === n.i.y[d] ? n.i.y[0] : n.i.y[d], u = BezierFactory.getBezierEasing(T, A, w, k).get, a.__fnct[d] = u)) : a.__fnct ? u = a.__fnct : (T = n.o.x, A = n.o.y, w = n.i.x, k = n.i.y, u = BezierFactory.getBezierEasing(T, A, w, k).get, n.keyframeMetadata = u), h = u((t - b) / (v - b)))), g = s.s || n.e, D = 1 === n.h ? n.s[d] : n.s[d] + (g[d] - n.s[d]) * h, "multidimensional" === this.propType ? i[d] = D : i = D
          }
          return e.lastIndex = f, i
        }

        function slerp(t, e, i) {
          var r, n, s, a, o, l = [],
            h = t[0],
            p = t[1],
            c = t[2],
            u = t[3],
            f = e[0],
            d = e[1],
            m = e[2],
            y = e[3];
          return (n = h * f + p * d + c * m + u * y) < 0 && (n = -n, f = -f, d = -d, m = -m, y = -y), 1 - n > 1e-6 ? (r = Math.acos(n), s = Math.sin(r), a = Math.sin((1 - i) * r) / s, o = Math.sin(i * r) / s) : (a = 1 - i, o = i), l[0] = a * h + o * f, l[1] = a * p + o * d, l[2] = a * c + o * m, l[3] = a * u + o * y, l
        }

        function quaternionToEuler(t, e) {
          var i = e[0],
            r = e[1],
            n = e[2],
            s = e[3],
            a = Math.atan2(2 * r * s - 2 * i * n, 1 - 2 * r * r - 2 * n * n),
            o = Math.asin(2 * i * r + 2 * n * s),
            l = Math.atan2(2 * i * s - 2 * r * n, 1 - 2 * i * i - 2 * n * n);
          t[0] = a / degToRads, t[1] = o / degToRads, t[2] = l / degToRads
        }

        function createQuaternion(t) {
          var e = t[0] * degToRads,
            i = t[1] * degToRads,
            r = t[2] * degToRads,
            n = Math.cos(e / 2),
            s = Math.cos(i / 2),
            a = Math.cos(r / 2),
            o = Math.sin(e / 2),
            l = Math.sin(i / 2),
            h = Math.sin(r / 2);
          return [o * l * a + n * s * h, o * s * a + n * l * h, n * l * a - o * s * h, n * s * a - o * l * h]
        }

        function getValueAtCurrentTime() {
          var t = this.comp.renderedFrame - this.offsetTime,
            e = this.keyframes[0].t - this.offsetTime,
            i = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
          if (!(t === this._caching.lastFrame || this._caching.lastFrame !== initFrame && (this._caching.lastFrame >= i && t >= i || this._caching.lastFrame < e && t < e))) {
            this._caching.lastFrame >= t && (this._caching._lastKeyframeIndex = -1, this._caching.lastIndex = 0);
            var r = this.interpolateValue(t, this._caching);
            this.pv = r
          }
          return this._caching.lastFrame = t, this.pv
        }

        function setVValue(t) {
          var e;
          if ("unidimensional" === this.propType) e = t * this.mult, mathAbs(this.v - e) > 1e-5 && (this.v = e, this._mdf = !0);
          else
            for (var i = 0, r = this.v.length; i < r;) e = t[i] * this.mult, mathAbs(this.v[i] - e) > 1e-5 && (this.v[i] = e, this._mdf = !0), i += 1
        }

        function processEffectsSequence() {
          if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length)
            if (this.lock) this.setVValue(this.pv);
            else {
              var t;
              this.lock = !0, this._mdf = this._isFirstFrame;
              var e = this.effectsSequence.length,
                i = this.kf ? this.pv : this.data.k;
              for (t = 0; t < e; t += 1) i = this.effectsSequence[t](i);
              this.setVValue(i), this._isFirstFrame = !1, this.lock = !1, this.frameId = this.elem.globalData.frameId
            }
        }

        function addEffect(t) {
          this.effectsSequence.push(t), this.container.addDynamicProperty(this)
        }

        function ValueProperty(t, e, i, r) {
          this.propType = "unidimensional", this.mult = i || 1, this.data = e, this.v = i ? e.k * i : e.k, this.pv = e.k, this._mdf = !1, this.elem = t, this.container = r, this.comp = t.comp, this.k = !1, this.kf = !1, this.vel = 0, this.effectsSequence = [], this._isFirstFrame = !0, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.addEffect = addEffect
        }

        function MultiDimensionalProperty(t, e, i, r) {
          var n;
          this.propType = "multidimensional", this.mult = i || 1, this.data = e, this._mdf = !1, this.elem = t, this.container = r, this.comp = t.comp, this.k = !1, this.kf = !1, this.frameId = -1;
          var s = e.k.length;
          for (this.v = createTypedArray("float32", s), this.pv = createTypedArray("float32", s), this.vel = createTypedArray("float32", s), n = 0; n < s; n += 1) this.v[n] = e.k[n] * this.mult, this.pv[n] = e.k[n];
          this._isFirstFrame = !0, this.effectsSequence = [], this.getValue = processEffectsSequence, this.setVValue = setVValue, this.addEffect = addEffect
        }

        function KeyframedValueProperty(t, e, i, r) {
          this.propType = "unidimensional", this.keyframes = e.k, this.keyframesMetadata = [], this.offsetTime = t.data.st, this.frameId = -1, this._caching = {
            lastFrame: initFrame,
            lastIndex: 0,
            value: 0,
            _lastKeyframeIndex: -1
          }, this.k = !0, this.kf = !0, this.data = e, this.mult = i || 1, this.elem = t, this.container = r, this.comp = t.comp, this.v = initFrame, this.pv = initFrame, this._isFirstFrame = !0, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.interpolateValue = interpolateValue, this.effectsSequence = [getValueAtCurrentTime.bind(this)], this.addEffect = addEffect
        }

        function KeyframedMultidimensionalProperty(t, e, i, r) {
          var n;
          this.propType = "multidimensional";
          var s, a, o, l, h = e.k.length;
          for (n = 0; n < h - 1; n += 1) e.k[n].to && e.k[n].s && e.k[n + 1] && e.k[n + 1].s && (s = e.k[n].s, a = e.k[n + 1].s, o = e.k[n].to, l = e.k[n].ti, (2 === s.length && (s[0] !== a[0] || s[1] !== a[1]) && bez.pointOnLine2D(s[0], s[1], a[0], a[1], s[0] + o[0], s[1] + o[1]) && bez.pointOnLine2D(s[0], s[1], a[0], a[1], a[0] + l[0], a[1] + l[1]) || 3 === s.length && (s[0] !== a[0] || s[1] !== a[1] || s[2] !== a[2]) && bez.pointOnLine3D(s[0], s[1], s[2], a[0], a[1], a[2], s[0] + o[0], s[1] + o[1], s[2] + o[2]) && bez.pointOnLine3D(s[0], s[1], s[2], a[0], a[1], a[2], a[0] + l[0], a[1] + l[1], a[2] + l[2])) && (e.k[n].to = null, e.k[n].ti = null), s[0] === a[0] && s[1] === a[1] && 0 === o[0] && 0 === o[1] && 0 === l[0] && 0 === l[1] && (2 === s.length || s[2] === a[2] && 0 === o[2] && 0 === l[2]) && (e.k[n].to = null, e.k[n].ti = null));
          this.effectsSequence = [getValueAtCurrentTime.bind(this)], this.data = e, this.keyframes = e.k, this.keyframesMetadata = [], this.offsetTime = t.data.st, this.k = !0, this.kf = !0, this._isFirstFrame = !0, this.mult = i || 1, this.elem = t, this.container = r, this.comp = t.comp, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.interpolateValue = interpolateValue, this.frameId = -1;
          var p = e.k[0].s.length;
          for (this.v = createTypedArray("float32", p), this.pv = createTypedArray("float32", p), n = 0; n < p; n += 1) this.v[n] = initFrame, this.pv[n] = initFrame;
          this._caching = {
            lastFrame: initFrame,
            lastIndex: 0,
            value: createTypedArray("float32", p)
          }, this.addEffect = addEffect
        }
        var PropertyFactory = {
          getProp: function(t, e, i, r, n) {
            var s;
            if (e.sid && (e = t.globalData.slotManager.getProp(e)), e.k.length)
              if ("number" == typeof e.k[0]) s = new MultiDimensionalProperty(t, e, r, n);
              else switch (i) {
                case 0:
                  s = new KeyframedValueProperty(t, e, r, n);
                  break;
                case 1:
                  s = new KeyframedMultidimensionalProperty(t, e, r, n)
              } else s = new ValueProperty(t, e, r, n);
            return s.effectsSequence.length && n.addDynamicProperty(s), s
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
          for (var i = 0; i < e;) this.v[i] = pointPool.newElement(), this.o[i] = pointPool.newElement(), this.i[i] = pointPool.newElement(), i += 1
        }, ShapePath.prototype.setLength = function(t) {
          for (; this._maxLength < t;) this.doubleArrayLength();
          this._length = t
        }, ShapePath.prototype.doubleArrayLength = function() {
          this.v = this.v.concat(createSizedArray(this._maxLength)), this.i = this.i.concat(createSizedArray(this._maxLength)), this.o = this.o.concat(createSizedArray(this._maxLength)), this._maxLength *= 2
        }, ShapePath.prototype.setXYAt = function(t, e, i, r, n) {
          var s;
          switch (this._length = Math.max(this._length, r + 1), this._length >= this._maxLength && this.doubleArrayLength(), i) {
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
          }(!s[r] || s[r] && !n) && (s[r] = pointPool.newElement()), s[r][0] = t, s[r][1] = e
        }, ShapePath.prototype.setTripleAt = function(t, e, i, r, n, s, a, o) {
          this.setXYAt(t, e, "v", a, o), this.setXYAt(i, r, "o", a, o), this.setXYAt(n, s, "i", a, o)
        }, ShapePath.prototype.reverse = function() {
          var t = new ShapePath;
          t.setPathData(this.c, this._length);
          var e = this.v,
            i = this.o,
            r = this.i,
            n = 0;
          this.c && (t.setTripleAt(e[0][0], e[0][1], r[0][0], r[0][1], i[0][0], i[0][1], 0, !1), n = 1);
          var s, a = this._length - 1,
            o = this._length;
          for (s = n; s < o; s += 1) t.setTripleAt(e[a][0], e[a][1], r[a][0], r[a][1], i[a][0], i[a][1], s, !1), a -= 1;
          return t
        }, ShapePath.prototype.length = function() {
          return this._length
        };
        var shapePool = (factory = poolFactory(4, (function() {
            return new ShapePath
          }), (function(t) {
            var e, i = t._length;
            for (e = 0; e < i; e += 1) pointPool.release(t.v[e]), pointPool.release(t.i[e]), pointPool.release(t.o[e]), t.v[e] = null, t.i[e] = null, t.o[e] = null;
            t._length = 0, t.c = !1
          })), factory.clone = function(t) {
            var e, i = factory.newElement(),
              r = void 0 === t._length ? t.v.length : t._length;
            for (i.setLength(r), i.c = t.c, e = 0; e < r; e += 1) i.setTripleAt(t.v[e][0], t.v[e][1], t.o[e][0], t.o[e][1], t.i[e][0], t.i[e][1], e);
            return i
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
              var e, i = t._length;
              for (e = 0; e < i; e += 1) shapePool.release(t.shapes[e]);
              t._length = 0, _length === _maxLength && (pool = pooling.double(pool), _maxLength *= 2), pool[_length] = t, _length += 1
            }
          }, _length = 0, _maxLength = 4, pool = createSizedArray(_maxLength), ob),
          ob, _length, _maxLength, pool, ShapePropertyFactory = function() {
            var t = -999999;

            function e(t, e, i) {
              var r, n, s, a, o, l, h, p, c, u = i.lastIndex,
                f = this.keyframes;
              if (t < f[0].t - this.offsetTime) r = f[0].s[0], s = !0, u = 0;
              else if (t >= f[f.length - 1].t - this.offsetTime) r = f[f.length - 1].s ? f[f.length - 1].s[0] : f[f.length - 2].e[0], s = !0;
              else {
                for (var d, m, y, g = u, v = f.length - 1, b = !0; b && (d = f[g], !((m = f[g + 1]).t - this.offsetTime > t));) g < v - 1 ? g += 1 : b = !1;
                if (y = this.keyframesMetadata[g] || {}, u = g, !(s = 1 === d.h)) {
                  if (t >= m.t - this.offsetTime) p = 1;
                  else if (t < d.t - this.offsetTime) p = 0;
                  else {
                    var x;
                    y.__fnct ? x = y.__fnct : (x = BezierFactory.getBezierEasing(d.o.x, d.o.y, d.i.x, d.i.y).get, y.__fnct = x), p = x((t - (d.t - this.offsetTime)) / (m.t - this.offsetTime - (d.t - this.offsetTime)))
                  }
                  n = m.s ? m.s[0] : d.e[0]
                }
                r = d.s[0]
              }
              for (l = e._length, h = r.i[0].length, i.lastIndex = u, a = 0; a < l; a += 1)
                for (o = 0; o < h; o += 1) c = s ? r.i[a][o] : r.i[a][o] + (n.i[a][o] - r.i[a][o]) * p, e.i[a][o] = c, c = s ? r.o[a][o] : r.o[a][o] + (n.o[a][o] - r.o[a][o]) * p, e.o[a][o] = c, c = s ? r.v[a][o] : r.v[a][o] + (n.v[a][o] - r.v[a][o]) * p, e.v[a][o] = c
            }

            function i() {
              var e = this.comp.renderedFrame - this.offsetTime,
                i = this.keyframes[0].t - this.offsetTime,
                r = this.keyframes[this.keyframes.length - 1].t - this.offsetTime,
                n = this._caching.lastFrame;
              return n !== t && (n < i && e < i || n > r && e > r) || (this._caching.lastIndex = n < e ? this._caching.lastIndex : 0, this.interpolateShape(e, this.pv, this._caching)), this._caching.lastFrame = e, this.pv
            }

            function r() {
              this.paths = this.localShapeCollection
            }

            function n(t) {
              (function(t, e) {
                if (t._length !== e._length || t.c !== e.c) return !1;
                var i, r = t._length;
                for (i = 0; i < r; i += 1)
                  if (t.v[i][0] !== e.v[i][0] || t.v[i][1] !== e.v[i][1] || t.o[i][0] !== e.o[i][0] || t.o[i][1] !== e.o[i][1] || t.i[i][0] !== e.i[i][0] || t.i[i][1] !== e.i[i][1]) return !1;
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
                    var i = this.effectsSequence.length;
                    for (e = 0; e < i; e += 1) t = this.effectsSequence[e](t);
                    this.setVValue(t), this.lock = !1, this.frameId = this.elem.globalData.frameId
                  }
              else this._mdf = !1
            }

            function a(t, e, i) {
              this.propType = "shape", this.comp = t.comp, this.container = t, this.elem = t, this.data = e, this.k = !1, this.kf = !1, this._mdf = !1;
              var n = 3 === i ? e.pt.k : e.ks.k;
              this.v = shapePool.clone(n), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = r, this.effectsSequence = []
            }

            function o(t) {
              this.effectsSequence.push(t), this.container.addDynamicProperty(this)
            }

            function l(e, n, s) {
              this.propType = "shape", this.comp = e.comp, this.elem = e, this.container = e, this.offsetTime = e.data.st, this.keyframes = 3 === s ? n.pt.k : n.ks.k, this.keyframesMetadata = [], this.k = !0, this.kf = !0;
              var a = this.keyframes[0].s[0].i.length;
              this.v = shapePool.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, a), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = t, this.reset = r, this._caching = {
                lastFrame: t,
                lastIndex: 0
              }, this.effectsSequence = [i.bind(this)]
            }
            a.prototype.interpolateShape = e, a.prototype.getValue = s, a.prototype.setVValue = n, a.prototype.addEffect = o, l.prototype.getValue = s, l.prototype.interpolateShape = e, l.prototype.setVValue = n, l.prototype.addEffect = o;
            var h = function() {
                var t = roundCorner;

                function e(t, e) {
                  this.v = shapePool.newElement(), this.v.setPathData(!0, 4), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = e.d, this.elem = t, this.comp = t.comp, this.frameId = -1, this.initDynamicPropertyContainer(t), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s, 1, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertEllToPath())
                }
                return e.prototype = {
                  reset: r,
                  getValue: function() {
                    this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath())
                  },
                  convertEllToPath: function() {
                    var e = this.p.v[0],
                      i = this.p.v[1],
                      r = this.s.v[0] / 2,
                      n = this.s.v[1] / 2,
                      s = 3 !== this.d,
                      a = this.v;
                    a.v[0][0] = e, a.v[0][1] = i - n, a.v[1][0] = s ? e + r : e - r, a.v[1][1] = i, a.v[2][0] = e, a.v[2][1] = i + n, a.v[3][0] = s ? e - r : e + r, a.v[3][1] = i, a.i[0][0] = s ? e - r * t : e + r * t, a.i[0][1] = i - n, a.i[1][0] = s ? e + r : e - r, a.i[1][1] = i - n * t, a.i[2][0] = s ? e + r * t : e - r * t, a.i[2][1] = i + n, a.i[3][0] = s ? e - r : e + r, a.i[3][1] = i + n * t, a.o[0][0] = s ? e + r * t : e - r * t, a.o[0][1] = i - n, a.o[1][0] = s ? e + r : e - r, a.o[1][1] = i + n * t, a.o[2][0] = s ? e - r * t : e + r * t, a.o[2][1] = i + n, a.o[3][0] = s ? e - r : e + r, a.o[3][1] = i - n * t
                  }
                }, extendPrototype([DynamicPropertyContainer], e), e
              }(),
              p = function() {
                function t(t, e) {
                  this.v = shapePool.newElement(), this.v.setPathData(!0, 0), this.elem = t, this.comp = t.comp, this.data = e, this.frameId = -1, this.d = e.d, this.initDynamicPropertyContainer(t), 1 === e.sy ? (this.ir = PropertyFactory.getProp(t, e.ir, 0, 0, this), this.is = PropertyFactory.getProp(t, e.is, 0, .01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = PropertyFactory.getProp(t, e.pt, 0, 0, this), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.r = PropertyFactory.getProp(t, e.r, 0, degToRads, this), this.or = PropertyFactory.getProp(t, e.or, 0, 0, this), this.os = PropertyFactory.getProp(t, e.os, 0, .01, this), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertToPath())
                }
                return t.prototype = {
                  reset: r,
                  getValue: function() {
                    this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath())
                  },
                  convertStarToPath: function() {
                    var t, e, i, r, n = 2 * Math.floor(this.pt.v),
                      s = 2 * Math.PI / n,
                      a = !0,
                      o = this.or.v,
                      l = this.ir.v,
                      h = this.os.v,
                      p = this.is.v,
                      c = 2 * Math.PI * o / (2 * n),
                      u = 2 * Math.PI * l / (2 * n),
                      f = -Math.PI / 2;
                    f += this.r.v;
                    var d = 3 === this.data.d ? -1 : 1;
                    for (this.v._length = 0, t = 0; t < n; t += 1) {
                      i = a ? h : p, r = a ? c : u;
                      var m = (e = a ? o : l) * Math.cos(f),
                        y = e * Math.sin(f),
                        g = 0 === m && 0 === y ? 0 : y / Math.sqrt(m * m + y * y),
                        v = 0 === m && 0 === y ? 0 : -m / Math.sqrt(m * m + y * y);
                      m += +this.p.v[0], y += +this.p.v[1], this.v.setTripleAt(m, y, m - g * r * i * d, y - v * r * i * d, m + g * r * i * d, y + v * r * i * d, t, !0), a = !a, f += s * d
                    }
                  },
                  convertPolygonToPath: function() {
                    var t, e = Math.floor(this.pt.v),
                      i = 2 * Math.PI / e,
                      r = this.or.v,
                      n = this.os.v,
                      s = 2 * Math.PI * r / (4 * e),
                      a = .5 * -Math.PI,
                      o = 3 === this.data.d ? -1 : 1;
                    for (a += this.r.v, this.v._length = 0, t = 0; t < e; t += 1) {
                      var l = r * Math.cos(a),
                        h = r * Math.sin(a),
                        p = 0 === l && 0 === h ? 0 : h / Math.sqrt(l * l + h * h),
                        c = 0 === l && 0 === h ? 0 : -l / Math.sqrt(l * l + h * h);
                      l += +this.p.v[0], h += +this.p.v[1], this.v.setTripleAt(l, h, l - p * s * n * o, h - c * s * n * o, l + p * s * n * o, h + c * s * n * o, t, !0), a += i * o
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
                      i = this.s.v[0] / 2,
                      r = this.s.v[1] / 2,
                      n = bmMin(i, r, this.r.v),
                      s = n * (1 - roundCorner);
                    this.v._length = 0, 2 === this.d || 1 === this.d ? (this.v.setTripleAt(t + i, e - r + n, t + i, e - r + n, t + i, e - r + s, 0, !0), this.v.setTripleAt(t + i, e + r - n, t + i, e + r - s, t + i, e + r - n, 1, !0), 0 !== n ? (this.v.setTripleAt(t + i - n, e + r, t + i - n, e + r, t + i - s, e + r, 2, !0), this.v.setTripleAt(t - i + n, e + r, t - i + s, e + r, t - i + n, e + r, 3, !0), this.v.setTripleAt(t - i, e + r - n, t - i, e + r - n, t - i, e + r - s, 4, !0), this.v.setTripleAt(t - i, e - r + n, t - i, e - r + s, t - i, e - r + n, 5, !0), this.v.setTripleAt(t - i + n, e - r, t - i + n, e - r, t - i + s, e - r, 6, !0), this.v.setTripleAt(t + i - n, e - r, t + i - s, e - r, t + i - n, e - r, 7, !0)) : (this.v.setTripleAt(t - i, e + r, t - i + s, e + r, t - i, e + r, 2), this.v.setTripleAt(t - i, e - r, t - i, e - r + s, t - i, e - r, 3))) : (this.v.setTripleAt(t + i, e - r + n, t + i, e - r + s, t + i, e - r + n, 0, !0), 0 !== n ? (this.v.setTripleAt(t + i - n, e - r, t + i - n, e - r, t + i - s, e - r, 1, !0), this.v.setTripleAt(t - i + n, e - r, t - i + s, e - r, t - i + n, e - r, 2, !0), this.v.setTripleAt(t - i, e - r + n, t - i, e - r + n, t - i, e - r + s, 3, !0), this.v.setTripleAt(t - i, e + r - n, t - i, e + r - s, t - i, e + r - n, 4, !0), this.v.setTripleAt(t - i + n, e + r, t - i + n, e + r, t - i + s, e + r, 5, !0), this.v.setTripleAt(t + i - n, e + r, t + i - s, e + r, t + i - n, e + r, 6, !0), this.v.setTripleAt(t + i, e + r - n, t + i, e + r - n, t + i, e + r - s, 7, !0)) : (this.v.setTripleAt(t - i, e - r, t - i + s, e - r, t - i, e - r, 1, !0), this.v.setTripleAt(t - i, e + r, t - i, e + r - s, t - i, e + r, 2, !0), this.v.setTripleAt(t + i, e + r, t + i - s, e + r, t + i, e + r, 3, !0)))
                  },
                  getValue: function() {
                    this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath())
                  },
                  reset: r
                }, extendPrototype([DynamicPropertyContainer], t), t
              }();
            return {
              getShapeProp: function(t, e, i) {
                var r;
                return 3 === i || 4 === i ? r = (3 === i ? e.pt : e.ks).k.length ? new l(t, e, i) : new a(t, e, i) : 5 === i ? r = new c(t, e) : 6 === i ? r = new h(t, e) : 7 === i && (r = new p(t, e)), r.k && t.addDynamicProperty(r), r
              },
              getConstructorFunction: function() {
                return a
              },
              getKeyframedConstructorFunction: function() {
                return l
              }
            }
          }(),
          Matrix = function() {
            var t = Math.cos,
              e = Math.sin,
              i = Math.tan,
              r = Math.round;

            function n() {
              return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this
            }

            function s(i) {
              if (0 === i) return this;
              var r = t(i),
                n = e(i);
              return this._t(r, -n, 0, 0, n, r, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
            }

            function a(i) {
              if (0 === i) return this;
              var r = t(i),
                n = e(i);
              return this._t(1, 0, 0, 0, 0, r, -n, 0, 0, n, r, 0, 0, 0, 0, 1)
            }

            function o(i) {
              if (0 === i) return this;
              var r = t(i),
                n = e(i);
              return this._t(r, 0, n, 0, 0, 1, 0, 0, -n, 0, r, 0, 0, 0, 0, 1)
            }

            function l(i) {
              if (0 === i) return this;
              var r = t(i),
                n = e(i);
              return this._t(r, -n, 0, 0, n, r, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
            }

            function h(t, e) {
              return this._t(1, e, t, 1, 0, 0)
            }

            function p(t, e) {
              return this.shear(i(t), i(e))
            }

            function c(r, n) {
              var s = t(n),
                a = e(n);
              return this._t(s, a, 0, 0, -a, s, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, i(r), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(s, -a, 0, 0, a, s, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
            }

            function u(t, e, i) {
              return i || 0 === i || (i = 1), 1 === t && 1 === e && 1 === i ? this : this._t(t, 0, 0, 0, 0, e, 0, 0, 0, 0, i, 0, 0, 0, 0, 1)
            }

            function f(t, e, i, r, n, s, a, o, l, h, p, c, u, f, d, m) {
              return this.props[0] = t, this.props[1] = e, this.props[2] = i, this.props[3] = r, this.props[4] = n, this.props[5] = s, this.props[6] = a, this.props[7] = o, this.props[8] = l, this.props[9] = h, this.props[10] = p, this.props[11] = c, this.props[12] = u, this.props[13] = f, this.props[14] = d, this.props[15] = m, this
            }

            function d(t, e, i) {
              return i = i || 0, 0 !== t || 0 !== e || 0 !== i ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, i, 1) : this
            }

            function m(t, e, i, r, n, s, a, o, l, h, p, c, u, f, d, m) {
              var y = this.props;
              if (1 === t && 0 === e && 0 === i && 0 === r && 0 === n && 1 === s && 0 === a && 0 === o && 0 === l && 0 === h && 1 === p && 0 === c) return y[12] = y[12] * t + y[15] * u, y[13] = y[13] * s + y[15] * f, y[14] = y[14] * p + y[15] * d, y[15] *= m, this._identityCalculated = !1, this;
              var g = y[0],
                v = y[1],
                b = y[2],
                x = y[3],
                P = y[4],
                E = y[5],
                S = y[6],
                C = y[7],
                T = y[8],
                A = y[9],
                w = y[10],
                k = y[11],
                D = y[12],
                M = y[13],
                _ = y[14],
                F = y[15];
              return y[0] = g * t + v * n + b * l + x * u, y[1] = g * e + v * s + b * h + x * f, y[2] = g * i + v * a + b * p + x * d, y[3] = g * r + v * o + b * c + x * m, y[4] = P * t + E * n + S * l + C * u, y[5] = P * e + E * s + S * h + C * f, y[6] = P * i + E * a + S * p + C * d, y[7] = P * r + E * o + S * c + C * m, y[8] = T * t + A * n + w * l + k * u, y[9] = T * e + A * s + w * h + k * f, y[10] = T * i + A * a + w * p + k * d, y[11] = T * r + A * o + w * c + k * m, y[12] = D * t + M * n + _ * l + F * u, y[13] = D * e + M * s + _ * h + F * f, y[14] = D * i + M * a + _ * p + F * d, y[15] = D * r + M * o + _ * c + F * m, this._identityCalculated = !1, this
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

            function P(t, e, i) {
              return {
                x: t * this.props[0] + e * this.props[4] + i * this.props[8] + this.props[12],
                y: t * this.props[1] + e * this.props[5] + i * this.props[9] + this.props[13],
                z: t * this.props[2] + e * this.props[6] + i * this.props[10] + this.props[14]
              }
            }

            function E(t, e, i) {
              return t * this.props[0] + e * this.props[4] + i * this.props[8] + this.props[12]
            }

            function S(t, e, i) {
              return t * this.props[1] + e * this.props[5] + i * this.props[9] + this.props[13]
            }

            function C(t, e, i) {
              return t * this.props[2] + e * this.props[6] + i * this.props[10] + this.props[14]
            }

            function T() {
              var t = this.props[0] * this.props[5] - this.props[1] * this.props[4],
                e = this.props[5] / t,
                i = -this.props[1] / t,
                r = -this.props[4] / t,
                n = this.props[0] / t,
                s = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / t,
                a = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / t,
                o = new Matrix;
              return o.props[0] = e, o.props[1] = i, o.props[4] = r, o.props[5] = n, o.props[12] = s, o.props[13] = a, o
            }

            function A(t) {
              return this.getInverseMatrix().applyToPointArray(t[0], t[1], t[2] || 0)
            }

            function w(t) {
              var e, i = t.length,
                r = [];
              for (e = 0; e < i; e += 1) r[e] = A(t[e]);
              return r
            }

            function k(t, e, i) {
              var r = createTypedArray("float32", 6);
              if (this.isIdentity()) r[0] = t[0], r[1] = t[1], r[2] = e[0], r[3] = e[1], r[4] = i[0], r[5] = i[1];
              else {
                var n = this.props[0],
                  s = this.props[1],
                  a = this.props[4],
                  o = this.props[5],
                  l = this.props[12],
                  h = this.props[13];
                r[0] = t[0] * n + t[1] * a + l, r[1] = t[0] * s + t[1] * o + h, r[2] = e[0] * n + e[1] * a + l, r[3] = e[0] * s + e[1] * o + h, r[4] = i[0] * n + i[1] * a + l, r[5] = i[0] * s + i[1] * o + h
              }
              return r
            }

            function D(t, e, i) {
              return this.isIdentity() ? [t, e, i] : [t * this.props[0] + e * this.props[4] + i * this.props[8] + this.props[12], t * this.props[1] + e * this.props[5] + i * this.props[9] + this.props[13], t * this.props[2] + e * this.props[6] + i * this.props[10] + this.props[14]]
            }

            function M(t, e) {
              if (this.isIdentity()) return t + "," + e;
              var i = this.props;
              return Math.round(100 * (t * i[0] + e * i[4] + i[12])) / 100 + "," + Math.round(100 * (t * i[1] + e * i[5] + i[13])) / 100
            }

            function _() {
              for (var t = 0, e = this.props, i = "matrix3d("; t < 16;) i += r(1e4 * e[t]) / 1e4, i += 15 === t ? ")" : ",", t += 1;
              return i
            }

            function F(t) {
              return t < 1e-6 && t > 0 || t > -1e-6 && t < 0 ? r(1e4 * t) / 1e4 : t
            }

            function I() {
              var t = this.props;
              return "matrix(" + F(t[0]) + "," + F(t[1]) + "," + F(t[4]) + "," + F(t[5]) + "," + F(t[12]) + "," + F(t[13]) + ")"
            }
            return function() {
              this.reset = n, this.rotate = s, this.rotateX = a, this.rotateY = o, this.rotateZ = l, this.skew = p, this.skewFromAxis = c, this.shear = h, this.scale = u, this.setTransform = f, this.translate = d, this.transform = m, this.multiply = y, this.applyToPoint = P, this.applyToX = E, this.applyToY = S, this.applyToZ = C, this.applyToPointArray = D, this.applyToTriplePoints = k, this.applyToPointStringified = M, this.toCSS = _, this.to2dCSS = I, this.clone = b, this.cloneFromProps = x, this.equals = v, this.inversePoints = w, this.inversePoint = A, this.getInverseMatrix = T, this._t = this.transform, this.isIdentity = g, this._identity = !0, this._identityCalculated = !1, this.props = createTypedArray("float32", 16), this.reset()
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
          for (var e = queryString.split("&"), i = 0; i < e.length; i += 1) {
            var r = e[i].split("=");
            if (decodeURIComponent(r[0]) == t) return decodeURIComponent(r[1])
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
          return t.registerModifier = function(t, i) {
            e[t] || (e[t] = i)
          }, t.getModifier = function(t, i, r) {
            return new e[t](i, r)
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
        }, TrimModifier.prototype.calculateShapeEdges = function(t, e, i, r, n) {
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
          var a, o, l = [],
            h = s.length;
          for (a = 0; a < h; a += 1) {
            var p, c;
            (o = s[a]).e * n < r || o.s * n > r + i || (p = o.s * n <= r ? 0 : (o.s * n - r) / i, c = o.e * n >= r + i ? 1 : (o.e * n - r) / i, l.push([p, c]))
          }
          return l.length || l.push([0, 0]), l
        }, TrimModifier.prototype.releasePathsData = function(t) {
          var e, i = t.length;
          for (e = 0; e < i; e += 1) segmentsLengthPool.release(t[e]);
          return t.length = 0, t
        }, TrimModifier.prototype.processShapes = function(t) {
          var e, i, r, n;
          if (this._mdf || t) {
            var s = this.o.v % 360 / 360;
            if (s < 0 && (s += 1), (e = this.s.v > 1 ? 1 + s : this.s.v < 0 ? 0 + s : this.s.v + s) > (i = this.e.v > 1 ? 1 + s : this.e.v < 0 ? 0 + s : this.e.v + s)) {
              var a = e;
              e = i, i = a
            }
            e = 1e-4 * Math.round(1e4 * e), i = 1e-4 * Math.round(1e4 * i), this.sValue = e, this.eValue = i
          } else e = this.sValue, i = this.eValue;
          var o, l, h, p, c, u = this.shapes.length,
            f = 0;
          if (i === e)
            for (n = 0; n < u; n += 1) this.shapes[n].localShapeCollection.releaseShapes(), this.shapes[n].shape._mdf = !0, this.shapes[n].shape.paths = this.shapes[n].localShapeCollection, this._mdf && (this.shapes[n].pathsData.length = 0);
          else if (1 === i && 0 === e || 0 === i && 1 === e) {
            if (this._mdf)
              for (n = 0; n < u; n += 1) this.shapes[n].pathsData.length = 0, this.shapes[n].shape._mdf = !0
          } else {
            var d, m, y = [];
            for (n = 0; n < u; n += 1)
              if ((d = this.shapes[n]).shape._mdf || this._mdf || t || 2 === this.m) {
                if (l = (r = d.shape.paths)._length, c = 0, !d.shape._mdf && d.pathsData.length) c = d.totalShapeLength;
                else {
                  for (h = this.releasePathsData(d.pathsData), o = 0; o < l; o += 1) p = bez.getSegmentsLength(r.shapes[o]), h.push(p), c += p.totalLength;
                  d.totalShapeLength = c, d.pathsData = h
                }
                f += c, d.shape._mdf = !0
              } else d.shape.paths = d.localShapeCollection;
            var g, v = e,
              b = i,
              x = 0;
            for (n = u - 1; n >= 0; n -= 1)
              if ((d = this.shapes[n]).shape._mdf) {
                for ((m = d.localShapeCollection).releaseShapes(), 2 === this.m && u > 1 ? (g = this.calculateShapeEdges(e, i, d.totalShapeLength, x, f), x += d.totalShapeLength) : g = [
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
                  var P = this.addShapes(d, y[0]);
                  if (y[0].s !== y[0].e) {
                    if (y.length > 1)
                      if (d.shape.paths.shapes[d.shape.paths._length - 1].c) {
                        var E = P.pop();
                        this.addPaths(P, m), P = this.addShapes(d, y[1], E)
                      } else this.addPaths(P, m), P = this.addShapes(d, y[1]);
                    this.addPaths(P, m)
                  }
                }
                d.shape.paths = m
              }
          }
        }, TrimModifier.prototype.addPaths = function(t, e) {
          var i, r = t.length;
          for (i = 0; i < r; i += 1) e.addShape(t[i])
        }, TrimModifier.prototype.addSegment = function(t, e, i, r, n, s, a) {
          n.setXYAt(e[0], e[1], "o", s), n.setXYAt(i[0], i[1], "i", s + 1), a && n.setXYAt(t[0], t[1], "v", s), n.setXYAt(r[0], r[1], "v", s + 1)
        }, TrimModifier.prototype.addSegmentFromArray = function(t, e, i, r) {
          e.setXYAt(t[1], t[5], "o", i), e.setXYAt(t[2], t[6], "i", i + 1), r && e.setXYAt(t[0], t[4], "v", i), e.setXYAt(t[3], t[7], "v", i + 1)
        }, TrimModifier.prototype.addShapes = function(t, e, i) {
          var r, n, s, a, o, l, h, p, c = t.pathsData,
            u = t.shape.paths.shapes,
            f = t.shape.paths._length,
            d = 0,
            m = [],
            y = !0;
          for (i ? (o = i._length, p = i._length) : (i = shapePool.newElement(), o = 0, p = 0), m.push(i), r = 0; r < f; r += 1) {
            for (l = c[r].lengths, i.c = u[r].c, s = u[r].c ? l.length : l.length + 1, n = 1; n < s; n += 1)
              if (d + (a = l[n - 1]).addedLength < e.s) d += a.addedLength, i.c = !1;
              else {
                if (d > e.e) {
                  i.c = !1;
                  break
                }
                e.s <= d && e.e >= d + a.addedLength ? (this.addSegment(u[r].v[n - 1], u[r].o[n - 1], u[r].i[n], u[r].v[n], i, o, y), y = !1) : (h = bez.getNewSegment(u[r].v[n - 1], u[r].v[n], u[r].o[n - 1], u[r].i[n], (e.s - d) / a.addedLength, (e.e - d) / a.addedLength, l[n - 1]), this.addSegmentFromArray(h, i, o, y), y = !1, i.c = !1), d += a.addedLength, o += 1
              } if (u[r].c && l.length) {
              if (a = l[n - 1], d <= e.e) {
                var g = l[n - 1].addedLength;
                e.s <= d && e.e >= d + g ? (this.addSegment(u[r].v[n - 1], u[r].o[n - 1], u[r].i[0], u[r].v[0], i, o, y), y = !1) : (h = bez.getNewSegment(u[r].v[n - 1], u[r].v[0], u[r].o[n - 1], u[r].i[0], (e.s - d) / g, (e.e - d) / g, l[n - 1]), this.addSegmentFromArray(h, i, o, y), y = !1, i.c = !1)
              } else i.c = !1;
              d += a.addedLength, o += 1
            }
            if (i._length && (i.setXYAt(i.v[p][0], i.v[p][1], "i", p), i.setXYAt(i.v[i._length - 1][0], i.v[i._length - 1][1], "o", i._length - 1)), d > e.e) break;
            r < f - 1 && (i = shapePool.newElement(), y = !0, m.push(i), o = 0)
          }
          return m
        }, extendPrototype([ShapeModifier], PuckerAndBloatModifier), PuckerAndBloatModifier.prototype.initModifierProperties = function(t, e) {
          this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(t, e.a, 0, null, this), this._isAnimated = !!this.amount.effectsSequence.length
        }, PuckerAndBloatModifier.prototype.processPath = function(t, e) {
          var i = e / 100,
            r = [0, 0],
            n = t._length,
            s = 0;
          for (s = 0; s < n; s += 1) r[0] += t.v[s][0], r[1] += t.v[s][1];
          r[0] /= n, r[1] /= n;
          var a, o, l, h, p, c, u = shapePool.newElement();
          for (u.c = t.c, s = 0; s < n; s += 1) a = t.v[s][0] + (r[0] - t.v[s][0]) * i, o = t.v[s][1] + (r[1] - t.v[s][1]) * i, l = t.o[s][0] + (r[0] - t.o[s][0]) * -i, h = t.o[s][1] + (r[1] - t.o[s][1]) * -i, p = t.i[s][0] + (r[0] - t.i[s][0]) * -i, c = t.i[s][1] + (r[1] - t.i[s][1]) * -i, u.setTripleAt(a, o, l, h, p, c, s);
          return u
        }, PuckerAndBloatModifier.prototype.processShapes = function(t) {
          var e, i, r, n, s, a, o = this.shapes.length,
            l = this.amount.v;
          if (0 !== l)
            for (i = 0; i < o; i += 1) {
              if (a = (s = this.shapes[i]).localShapeCollection, s.shape._mdf || this._mdf || t)
                for (a.releaseShapes(), s.shape._mdf = !0, e = s.shape.paths.shapes, n = s.shape.paths._length, r = 0; r < n; r += 1) a.addShape(this.processPath(e[r], l));
              s.shape.paths = s.localShapeCollection
            }
          this.dynamicProperties.length || (this._mdf = !1)
        };
        var TransformPropertyFactory = function() {
          var t = [0, 0];

          function e(t, e, i) {
            if (this.elem = t, this.frameId = -1, this.propType = "transform", this.data = e, this.v = new Matrix, this.pre = new Matrix, this.appliedTransformations = 0, this.initDynamicPropertyContainer(i || t), e.p && e.p.s ? (this.px = PropertyFactory.getProp(t, e.p.x, 0, 0, this), this.py = PropertyFactory.getProp(t, e.p.y, 0, 0, this), e.p.z && (this.pz = PropertyFactory.getProp(t, e.p.z, 0, 0, this))) : this.p = PropertyFactory.getProp(t, e.p || {
                k: [0, 0, 0]
              }, 1, 0, this), e.rx) {
              if (this.rx = PropertyFactory.getProp(t, e.rx, 0, degToRads, this), this.ry = PropertyFactory.getProp(t, e.ry, 0, degToRads, this), this.rz = PropertyFactory.getProp(t, e.rz, 0, degToRads, this), e.or.k[0].ti) {
                var r, n = e.or.k.length;
                for (r = 0; r < n; r += 1) e.or.k[r].to = null, e.or.k[r].ti = null
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
                  var i;
                  if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) {
                    var r, n;
                    if (i = this.elem.globalData.frameRate, this.p && this.p.keyframes && this.p.getValueAtTime) this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (r = this.p.getValueAtTime((this.p.keyframes[0].t + .01) / i, 0), n = this.p.getValueAtTime(this.p.keyframes[0].t / i, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (r = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / i, 0), n = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - .05) / i, 0)) : (r = this.p.pv, n = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - .01) / i, this.p.offsetTime));
                    else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                      r = [], n = [];
                      var s = this.px,
                        a = this.py;
                      s._caching.lastFrame + s.offsetTime <= s.keyframes[0].t ? (r[0] = s.getValueAtTime((s.keyframes[0].t + .01) / i, 0), r[1] = a.getValueAtTime((a.keyframes[0].t + .01) / i, 0), n[0] = s.getValueAtTime(s.keyframes[0].t / i, 0), n[1] = a.getValueAtTime(a.keyframes[0].t / i, 0)) : s._caching.lastFrame + s.offsetTime >= s.keyframes[s.keyframes.length - 1].t ? (r[0] = s.getValueAtTime(s.keyframes[s.keyframes.length - 1].t / i, 0), r[1] = a.getValueAtTime(a.keyframes[a.keyframes.length - 1].t / i, 0), n[0] = s.getValueAtTime((s.keyframes[s.keyframes.length - 1].t - .01) / i, 0), n[1] = a.getValueAtTime((a.keyframes[a.keyframes.length - 1].t - .01) / i, 0)) : (r = [s.pv, a.pv], n[0] = s.getValueAtTime((s._caching.lastFrame + s.offsetTime - .01) / i, s.offsetTime), n[1] = a.getValueAtTime((a._caching.lastFrame + a.offsetTime - .01) / i, a.offsetTime))
                    } else r = n = t;
                    this.v.rotate(-Math.atan2(r[1] - n[1], r[0] - n[0]))
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
            getTransformProperty: function(t, i, r) {
              return new e(t, i, r)
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

        function lerp(t, e, i) {
          return t * (1 - i) + e * i
        }

        function lerpPoint(t, e, i) {
          return [lerp(t[0], e[0], i), lerp(t[1], e[1], i)]
        }

        function quadRoots(t, e, i) {
          if (0 === t) return [];
          var r = e * e - 4 * t * i;
          if (r < 0) return [];
          var n = -e / (2 * t);
          if (0 === r) return [n];
          var s = Math.sqrt(r) / (2 * t);
          return [n - s, n + s]
        }

        function polynomialCoefficients(t, e, i, r) {
          return [3 * e - t - 3 * i + r, 3 * t - 6 * e + 3 * i, -3 * t + 3 * e, t]
        }

        function singlePoint(t) {
          return new PolynomialBezier(t, t, t, t, !1)
        }

        function PolynomialBezier(t, e, i, r, n) {
          n && pointEqual(t, e) && (e = lerpPoint(t, r, 1 / 3)), n && pointEqual(i, r) && (i = lerpPoint(t, r, 2 / 3));
          var s = polynomialCoefficients(t[0], e[0], i[0], r[0]),
            a = polynomialCoefficients(t[1], e[1], i[1], r[1]);
          this.a = [s[0], a[0]], this.b = [s[1], a[1]], this.c = [s[2], a[2]], this.d = [s[3], a[3]], this.points = [t, e, i, r]
        }

        function extrema(t, e) {
          var i = t.points[0][e],
            r = t.points[t.points.length - 1][e];
          if (i > r) {
            var n = r;
            r = i, i = n
          }
          for (var s = quadRoots(3 * t.a[e], 2 * t.b[e], t.c[e]), a = 0; a < s.length; a += 1)
            if (s[a] > 0 && s[a] < 1) {
              var o = t.point(s[a])[e];
              o < i ? i = o : o > r && (r = o)
            } return {
            min: i,
            max: r
          }
        }

        function intersectData(t, e, i) {
          var r = t.boundingBox();
          return {
            cx: r.cx,
            cy: r.cy,
            width: r.width,
            height: r.height,
            bez: t,
            t: (e + i) / 2,
            t1: e,
            t2: i
          }
        }

        function splitData(t) {
          var e = t.bez.split(.5);
          return [intersectData(e[0], t.t1, t.t), intersectData(e[1], t.t, t.t2)]
        }

        function boxIntersect(t, e) {
          return 2 * Math.abs(t.cx - e.cx) < t.width + e.width && 2 * Math.abs(t.cy - e.cy) < t.height + e.height
        }

        function intersectsImpl(t, e, i, r, n, s) {
          if (boxIntersect(t, e))
            if (i >= s || t.width <= r && t.height <= r && e.width <= r && e.height <= r) n.push([t.t, e.t]);
            else {
              var a = splitData(t),
                o = splitData(e);
              intersectsImpl(a[0], o[0], i + 1, r, n, s), intersectsImpl(a[0], o[1], i + 1, r, n, s), intersectsImpl(a[1], o[0], i + 1, r, n, s), intersectsImpl(a[1], o[1], i + 1, r, n, s)
            }
        }

        function crossProduct(t, e) {
          return [t[1] * e[2] - t[2] * e[1], t[2] * e[0] - t[0] * e[2], t[0] * e[1] - t[1] * e[0]]
        }

        function lineIntersection(t, e, i, r) {
          var n = [t[0], t[1], 1],
            s = [e[0], e[1], 1],
            a = [i[0], i[1], 1],
            o = [r[0], r[1], 1],
            l = crossProduct(crossProduct(n, s), crossProduct(a, o));
          return floatZero(l[2]) ? null : [l[0] / l[2], l[1] / l[2]]
        }

        function polarOffset(t, e, i) {
          return [t[0] + Math.cos(e) * i, t[1] - Math.sin(e) * i]
        }

        function pointDistance(t, e) {
          return Math.hypot(t[0] - e[0], t[1] - e[1])
        }

        function pointEqual(t, e) {
          return floatEqual(t[0], e[0]) && floatEqual(t[1], e[1])
        }

        function ZigZagModifier() {}

        function setPoint(t, e, i, r, n, s, a) {
          var o = i - Math.PI / 2,
            l = i + Math.PI / 2,
            h = e[0] + Math.cos(i) * r * n,
            p = e[1] - Math.sin(i) * r * n;
          t.setTripleAt(h, p, h + Math.cos(o) * s, p - Math.sin(o) * s, h + Math.cos(l) * a, p - Math.sin(l) * a, t.length())
        }

        function getPerpendicularVector(t, e) {
          var i = [e[0] - t[0], e[1] - t[1]],
            r = .5 * -Math.PI;
          return [Math.cos(r) * i[0] - Math.sin(r) * i[1], Math.sin(r) * i[0] + Math.cos(r) * i[1]]
        }

        function getProjectingAngle(t, e) {
          var i = 0 === e ? t.length() - 1 : e - 1,
            r = (e + 1) % t.length(),
            n = getPerpendicularVector(t.v[i], t.v[r]);
          return Math.atan2(0, 1) - Math.atan2(n[1], n[0])
        }

        function zigZagCorner(t, e, i, r, n, s, a) {
          var o = getProjectingAngle(e, i),
            l = e.v[i % e._length],
            h = e.v[0 === i ? e._length - 1 : i - 1],
            p = e.v[(i + 1) % e._length],
            c = 2 === s ? Math.sqrt(Math.pow(l[0] - h[0], 2) + Math.pow(l[1] - h[1], 2)) : 0,
            u = 2 === s ? Math.sqrt(Math.pow(l[0] - p[0], 2) + Math.pow(l[1] - p[1], 2)) : 0;
          setPoint(t, e.v[i % e._length], o, a, r, u / (2 * (n + 1)), c / (2 * (n + 1)), s)
        }

        function zigZagSegment(t, e, i, r, n, s) {
          for (var a = 0; a < r; a += 1) {
            var o = (a + 1) / (r + 1),
              l = 2 === n ? Math.sqrt(Math.pow(e.points[3][0] - e.points[0][0], 2) + Math.pow(e.points[3][1] - e.points[0][1], 2)) : 0,
              h = e.normalAngle(o);
            setPoint(t, e.point(o), h, s, i, l / (2 * (r + 1)), l / (2 * (r + 1)), n), s = -s
          }
          return s
        }

        function linearOffset(t, e, i) {
          var r = Math.atan2(e[0] - t[0], e[1] - t[1]);
          return [polarOffset(t, r, i), polarOffset(e, r, i)]
        }

        function offsetSegment(t, e) {
          var i, r, n, s, a, o, l;
          i = (l = linearOffset(t.points[0], t.points[1], e))[0], r = l[1], n = (l = linearOffset(t.points[1], t.points[2], e))[0], s = l[1], a = (l = linearOffset(t.points[2], t.points[3], e))[0], o = l[1];
          var h = lineIntersection(i, r, n, s);
          null === h && (h = r);
          var p = lineIntersection(a, o, n, s);
          return null === p && (p = a), new PolynomialBezier(i, h, p, o)
        }

        function joinLines(t, e, i, r, n) {
          var s = e.points[3],
            a = i.points[0];
          if (3 === r) return s;
          if (pointEqual(s, a)) return s;
          if (2 === r) {
            var o = -e.tangentAngle(1),
              l = -i.tangentAngle(0) + Math.PI,
              h = lineIntersection(s, polarOffset(s, o + Math.PI / 2, 100), a, polarOffset(a, o + Math.PI / 2, 100)),
              p = h ? pointDistance(h, s) : pointDistance(s, a) / 2,
              c = polarOffset(s, o, 2 * p * roundCorner);
            return t.setXYAt(c[0], c[1], "o", t.length() - 1), c = polarOffset(a, l, 2 * p * roundCorner), t.setTripleAt(a[0], a[1], a[0], a[1], c[0], c[1], t.length()), a
          }
          var u = lineIntersection(pointEqual(s, e.points[2]) ? e.points[0] : e.points[2], s, a, pointEqual(a, i.points[1]) ? i.points[3] : i.points[1]);
          return u && pointDistance(u, s) < n ? (t.setTripleAt(u[0], u[1], u[0], u[1], u[0], u[1], t.length()), u) : s
        }

        function getIntersection(t, e) {
          var i = t.intersections(e);
          return i.length && floatEqual(i[0][0], 1) && i.shift(), i.length ? i[0] : null
        }

        function pruneSegmentIntersection(t, e) {
          var i = t.slice(),
            r = e.slice(),
            n = getIntersection(t[t.length - 1], e[0]);
          return n && (i[t.length - 1] = t[t.length - 1].split(n[0])[0], r[0] = e[0].split(n[1])[1]), t.length > 1 && e.length > 1 && (n = getIntersection(t[0], e[e.length - 1])) ? [
            [t[0].split(n[0])[0]],
            [e[e.length - 1].split(n[1])[1]]
          ] : [i, r]
        }

        function pruneIntersections(t) {
          for (var e, i = 1; i < t.length; i += 1) e = pruneSegmentIntersection(t[i - 1], t[i]), t[i - 1] = e[0], t[i] = e[1];
          return t.length > 1 && (e = pruneSegmentIntersection(t[t.length - 1], t[0]), t[t.length - 1] = e[0], t[0] = e[1]), t
        }

        function offsetSegmentSplit(t, e) {
          var i, r, n, s, a = t.inflectionPoints();
          if (0 === a.length) return [offsetSegment(t, e)];
          if (1 === a.length || floatEqual(a[1], 1)) return i = (n = t.split(a[0]))[0], r = n[1], [offsetSegment(i, e), offsetSegment(r, e)];
          i = (n = t.split(a[0]))[0];
          var o = (a[1] - a[0]) / (1 - a[0]);
          return s = (n = n[1].split(o))[0], r = n[1], [offsetSegment(i, e), offsetSegment(s, e), offsetSegment(r, e)]
        }

        function OffsetPathModifier() {}

        function getFontProperties(t) {
          for (var e = t.fStyle ? t.fStyle.split(" ") : [], i = "normal", r = "normal", n = e.length, s = 0; s < n; s += 1) switch (e[s].toLowerCase()) {
            case "italic":
              r = "italic";
              break;
            case "bold":
              i = "700";
              break;
            case "black":
              i = "900";
              break;
            case "medium":
              i = "500";
              break;
            case "regular":
            case "normal":
              i = "400";
              break;
            case "light":
            case "thin":
              i = "200"
          }
          return {
            style: r,
            weight: t.fWeight || i
          }
        }
        extendPrototype([ShapeModifier], RepeaterModifier), RepeaterModifier.prototype.initModifierProperties = function(t, e) {
          this.getValue = this.processKeys, this.c = PropertyFactory.getProp(t, e.c, 0, null, this), this.o = PropertyFactory.getProp(t, e.o, 0, null, this), this.tr = TransformPropertyFactory.getTransformProperty(t, e.tr, this), this.so = PropertyFactory.getProp(t, e.tr.so, 0, .01, this), this.eo = PropertyFactory.getProp(t, e.tr.eo, 0, .01, this), this.data = e, this.dynamicProperties.length || this.getValue(!0), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new Matrix, this.rMatrix = new Matrix, this.sMatrix = new Matrix, this.tMatrix = new Matrix, this.matrix = new Matrix
        }, RepeaterModifier.prototype.applyTransforms = function(t, e, i, r, n, s) {
          var a = s ? -1 : 1,
            o = r.s.v[0] + (1 - r.s.v[0]) * (1 - n),
            l = r.s.v[1] + (1 - r.s.v[1]) * (1 - n);
          t.translate(r.p.v[0] * a * n, r.p.v[1] * a * n, r.p.v[2]), e.translate(-r.a.v[0], -r.a.v[1], r.a.v[2]), e.rotate(-r.r.v * a * n), e.translate(r.a.v[0], r.a.v[1], r.a.v[2]), i.translate(-r.a.v[0], -r.a.v[1], r.a.v[2]), i.scale(s ? 1 / o : o, s ? 1 / l : l), i.translate(r.a.v[0], r.a.v[1], r.a.v[2])
        }, RepeaterModifier.prototype.init = function(t, e, i, r) {
          for (this.elem = t, this.arr = e, this.pos = i, this.elemsData = r, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e[i]); i > 0;) i -= 1, this._elements.unshift(e[i]);
          this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
        }, RepeaterModifier.prototype.resetElements = function(t) {
          var e, i = t.length;
          for (e = 0; e < i; e += 1) t[e]._processed = !1, "gr" === t[e].ty && this.resetElements(t[e].it)
        }, RepeaterModifier.prototype.cloneElements = function(t) {
          var e = JSON.parse(JSON.stringify(t));
          return this.resetElements(e), e
        }, RepeaterModifier.prototype.changeGroupRender = function(t, e) {
          var i, r = t.length;
          for (i = 0; i < r; i += 1) t[i]._render = e, "gr" === t[i].ty && this.changeGroupRender(t[i].it, e)
        }, RepeaterModifier.prototype.processShapes = function(t) {
          var e, i, r, n, s, a = !1;
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
              this.elem.reloadShapes(), a = !0
            }
            for (s = 0, r = 0; r <= this._groups.length - 1; r += 1) {
              if (o = s < l, this._groups[r]._render = o, this.changeGroupRender(this._groups[r].it, o), !o) {
                var p = this.elemsData[r].it,
                  c = p[p.length - 1];
                0 !== c.transform.op.v ? (c.transform.op._mdf = !0, c.transform.op.v = 0) : c.transform.op._mdf = !1
              }
              s += 1
            }
            this._currentCopies = l;
            var u = this.o.v,
              f = u % 1,
              d = u > 0 ? Math.floor(u) : Math.ceil(u),
              m = this.pMatrix.props,
              y = this.rMatrix.props,
              g = this.sMatrix.props;
            this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
            var v, b, x = 0;
            if (u > 0) {
              for (; x < d;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), x += 1;
              f && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, f, !1), x += f)
            } else if (u < 0) {
              for (; x > d;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), x -= 1;
              f && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -f, !0), x -= f)
            }
            for (r = 1 === this.data.m ? 0 : this._currentCopies - 1, n = 1 === this.data.m ? 1 : -1, s = this._currentCopies; s;) {
              if (b = (i = (e = this.elemsData[r].it)[e.length - 1].transform.mProps.v.props).length, e[e.length - 1].transform.mProps._mdf = !0, e[e.length - 1].transform.op._mdf = !0, e[e.length - 1].transform.op.v = 1 === this._currentCopies ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (r / (this._currentCopies - 1)), 0 !== x) {
                for ((0 !== r && 1 === n || r !== this._currentCopies - 1 && -1 === n) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(y[0], y[1], y[2], y[3], y[4], y[5], y[6], y[7], y[8], y[9], y[10], y[11], y[12], y[13], y[14], y[15]), this.matrix.transform(g[0], g[1], g[2], g[3], g[4], g[5], g[6], g[7], g[8], g[9], g[10], g[11], g[12], g[13], g[14], g[15]), this.matrix.transform(m[0], m[1], m[2], m[3], m[4], m[5], m[6], m[7], m[8], m[9], m[10], m[11], m[12], m[13], m[14], m[15]), v = 0; v < b; v += 1) i[v] = this.matrix.props[v];
                this.matrix.reset()
              } else
                for (this.matrix.reset(), v = 0; v < b; v += 1) i[v] = this.matrix.props[v];
              x += 1, s -= 1, r += n
            }
          } else
            for (s = this._currentCopies, r = 0, n = 1; s;) i = (e = this.elemsData[r].it)[e.length - 1].transform.mProps.v.props, e[e.length - 1].transform.mProps._mdf = !1, e[e.length - 1].transform.op._mdf = !1, s -= 1, r += n;
          return a
        }, RepeaterModifier.prototype.addShape = function() {}, extendPrototype([ShapeModifier], RoundCornersModifier), RoundCornersModifier.prototype.initModifierProperties = function(t, e) {
          this.getValue = this.processKeys, this.rd = PropertyFactory.getProp(t, e.r, 0, null, this), this._isAnimated = !!this.rd.effectsSequence.length
        }, RoundCornersModifier.prototype.processPath = function(t, e) {
          var i, r = shapePool.newElement();
          r.c = t.c;
          var n, s, a, o, l, h, p, c, u, f, d, m, y = t._length,
            g = 0;
          for (i = 0; i < y; i += 1) n = t.v[i], a = t.o[i], s = t.i[i], n[0] === a[0] && n[1] === a[1] && n[0] === s[0] && n[1] === s[1] ? 0 !== i && i !== y - 1 || t.c ? (o = 0 === i ? t.v[y - 1] : t.v[i - 1], h = (l = Math.sqrt(Math.pow(n[0] - o[0], 2) + Math.pow(n[1] - o[1], 2))) ? Math.min(l / 2, e) / l : 0, p = d = n[0] + (o[0] - n[0]) * h, c = m = n[1] - (n[1] - o[1]) * h, u = p - (p - n[0]) * roundCorner, f = c - (c - n[1]) * roundCorner, r.setTripleAt(p, c, u, f, d, m, g), g += 1, o = i === y - 1 ? t.v[0] : t.v[i + 1], h = (l = Math.sqrt(Math.pow(n[0] - o[0], 2) + Math.pow(n[1] - o[1], 2))) ? Math.min(l / 2, e) / l : 0, p = u = n[0] + (o[0] - n[0]) * h, c = f = n[1] + (o[1] - n[1]) * h, d = p - (p - n[0]) * roundCorner, m = c - (c - n[1]) * roundCorner, r.setTripleAt(p, c, u, f, d, m, g), g += 1) : (r.setTripleAt(n[0], n[1], a[0], a[1], s[0], s[1], g), g += 1) : (r.setTripleAt(t.v[i][0], t.v[i][1], t.o[i][0], t.o[i][1], t.i[i][0], t.i[i][1], g), g += 1);
          return r
        }, RoundCornersModifier.prototype.processShapes = function(t) {
          var e, i, r, n, s, a, o = this.shapes.length,
            l = this.rd.v;
          if (0 !== l)
            for (i = 0; i < o; i += 1) {
              if (a = (s = this.shapes[i]).localShapeCollection, s.shape._mdf || this._mdf || t)
                for (a.releaseShapes(), s.shape._mdf = !0, e = s.shape.paths.shapes, n = s.shape.paths._length, r = 0; r < n; r += 1) a.addShape(this.processPath(e[r], l));
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
            i = e * e - 1 / 3 * (this.b[1] * this.c[0] - this.b[0] * this.c[1]) / t;
          if (i < 0) return [];
          var r = Math.sqrt(i);
          return floatZero(r) ? r > 0 && r < 1 ? [e] : [] : [e - r, e + r].filter((function(t) {
            return t > 0 && t < 1
          }))
        }, PolynomialBezier.prototype.split = function(t) {
          if (t <= 0) return [singlePoint(this.points[0]), this];
          if (t >= 1) return [this, singlePoint(this.points[this.points.length - 1])];
          var e = lerpPoint(this.points[0], this.points[1], t),
            i = lerpPoint(this.points[1], this.points[2], t),
            r = lerpPoint(this.points[2], this.points[3], t),
            n = lerpPoint(e, i, t),
            s = lerpPoint(i, r, t),
            a = lerpPoint(n, s, t);
          return [new PolynomialBezier(this.points[0], e, n, a, !0), new PolynomialBezier(a, s, r, this.points[3], !0)]
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
        }, PolynomialBezier.prototype.intersections = function(t, e, i) {
          void 0 === e && (e = 2), void 0 === i && (i = 7);
          var r = [];
          return intersectsImpl(intersectData(this, 0, 1), intersectData(t, 0, 1), 0, e, r, i), r
        }, PolynomialBezier.shapeSegment = function(t, e) {
          var i = (e + 1) % t.length();
          return new PolynomialBezier(t.v[e], t.o[e], t.i[i], t.v[i], !0)
        }, PolynomialBezier.shapeSegmentInverted = function(t, e) {
          var i = (e + 1) % t.length();
          return new PolynomialBezier(t.v[i], t.i[i], t.o[e], t.v[e], !0)
        }, extendPrototype([ShapeModifier], ZigZagModifier), ZigZagModifier.prototype.initModifierProperties = function(t, e) {
          this.getValue = this.processKeys, this.amplitude = PropertyFactory.getProp(t, e.s, 0, null, this), this.frequency = PropertyFactory.getProp(t, e.r, 0, null, this), this.pointsType = PropertyFactory.getProp(t, e.pt, 0, null, this), this._isAnimated = 0 !== this.amplitude.effectsSequence.length || 0 !== this.frequency.effectsSequence.length || 0 !== this.pointsType.effectsSequence.length
        }, ZigZagModifier.prototype.processPath = function(t, e, i, r) {
          var n = t._length,
            s = shapePool.newElement();
          if (s.c = t.c, t.c || (n -= 1), 0 === n) return s;
          var a = -1,
            o = PolynomialBezier.shapeSegment(t, 0);
          zigZagCorner(s, t, 0, e, i, r, a);
          for (var l = 0; l < n; l += 1) a = zigZagSegment(s, o, e, i, r, -a), o = l !== n - 1 || t.c ? PolynomialBezier.shapeSegment(t, (l + 1) % n) : null, zigZagCorner(s, t, l + 1, e, i, r, a);
          return s
        }, ZigZagModifier.prototype.processShapes = function(t) {
          var e, i, r, n, s, a, o = this.shapes.length,
            l = this.amplitude.v,
            h = Math.max(0, Math.round(this.frequency.v)),
            p = this.pointsType.v;
          if (0 !== l)
            for (i = 0; i < o; i += 1) {
              if (a = (s = this.shapes[i]).localShapeCollection, s.shape._mdf || this._mdf || t)
                for (a.releaseShapes(), s.shape._mdf = !0, e = s.shape.paths.shapes, n = s.shape.paths._length, r = 0; r < n; r += 1) a.addShape(this.processPath(e[r], l, h, p));
              s.shape.paths = s.localShapeCollection
            }
          this.dynamicProperties.length || (this._mdf = !1)
        }, extendPrototype([ShapeModifier], OffsetPathModifier), OffsetPathModifier.prototype.initModifierProperties = function(t, e) {
          this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(t, e.a, 0, null, this), this.miterLimit = PropertyFactory.getProp(t, e.ml, 0, null, this), this.lineJoin = e.lj, this._isAnimated = 0 !== this.amount.effectsSequence.length
        }, OffsetPathModifier.prototype.processPath = function(t, e, i, r) {
          var n = shapePool.newElement();
          n.c = t.c;
          var s, a, o, l = t.length();
          t.c || (l -= 1);
          var h = [];
          for (s = 0; s < l; s += 1) o = PolynomialBezier.shapeSegment(t, s), h.push(offsetSegmentSplit(o, e));
          if (!t.c)
            for (s = l - 1; s >= 0; s -= 1) o = PolynomialBezier.shapeSegmentInverted(t, s), h.push(offsetSegmentSplit(o, e));
          h = pruneIntersections(h);
          var p = null,
            c = null;
          for (s = 0; s < h.length; s += 1) {
            var u = h[s];
            for (c && (p = joinLines(n, c, u[0], i, r)), c = u[u.length - 1], a = 0; a < u.length; a += 1) o = u[a], p && pointEqual(o.points[0], p) ? n.setXYAt(o.points[1][0], o.points[1][1], "o", n.length() - 1) : n.setTripleAt(o.points[0][0], o.points[0][1], o.points[1][0], o.points[1][1], o.points[0][0], o.points[0][1], n.length()), n.setTripleAt(o.points[3][0], o.points[3][1], o.points[3][0], o.points[3][1], o.points[2][0], o.points[2][1], n.length()), p = o.points[3]
          }
          return h.length && joinLines(n, c, h[0][0], i, r), n
        }, OffsetPathModifier.prototype.processShapes = function(t) {
          var e, i, r, n, s, a, o = this.shapes.length,
            l = this.amount.v,
            h = this.miterLimit.v,
            p = this.lineJoin;
          if (0 !== l)
            for (i = 0; i < o; i += 1) {
              if (a = (s = this.shapes[i]).localShapeCollection, s.shape._mdf || this._mdf || t)
                for (a.releaseShapes(), s.shape._mdf = !0, e = s.shape.paths.shapes, n = s.shape.paths._length, r = 0; r < n; r += 1) a.addShape(this.processPath(e[r], l, p, h));
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
          var i = 127988,
            r = ["d83cdffb", "d83cdffc", "d83cdffd", "d83cdffe", "d83cdfff"];

          function n(t, e) {
            var i = createTag("span");
            i.setAttribute("aria-hidden", !0), i.style.fontFamily = e;
            var r = createTag("span");
            r.innerText = "giItT1WQy@!-/#", i.style.position = "absolute", i.style.left = "-10000px", i.style.top = "-10000px", i.style.fontSize = "300px", i.style.fontVariant = "normal", i.style.fontStyle = "normal", i.style.fontWeight = "normal", i.style.letterSpacing = "0", i.appendChild(r), document.body.appendChild(i);
            var n = r.offsetWidth;
            return r.style.fontFamily = function(t) {
              var e, i = t.split(","),
                r = i.length,
                n = [];
              for (e = 0; e < r; e += 1) "sans-serif" !== i[e] && "monospace" !== i[e] && n.push(i[e]);
              return n.join(",")
            }(t) + ", " + e, {
              node: r,
              w: n,
              parent: i
            }
          }

          function s(t, e) {
            var i, r = document.body && e ? "svg" : "canvas",
              n = getFontProperties(t);
            if ("svg" === r) {
              var s = createNS("text");
              s.style.fontSize = "100px", s.setAttribute("font-family", t.fFamily), s.setAttribute("font-style", n.style), s.setAttribute("font-weight", n.weight), s.textContent = "1", t.fClass ? (s.style.fontFamily = "inherit", s.setAttribute("class", t.fClass)) : s.style.fontFamily = t.fFamily, e.appendChild(s), i = s
            } else {
              var a = new OffscreenCanvas(500, 500).getContext("2d");
              a.font = n.style + " " + n.weight + " 100px " + t.fFamily, i = a
            }
            return {
              measureText: function(t) {
                return "svg" === r ? (i.textContent = t, i.getComputedTextLength()) : i.measureText(t).width
              }
            }
          }

          function a(t) {
            var e = 0,
              i = t.charCodeAt(0);
            if (i >= 55296 && i <= 56319) {
              var r = t.charCodeAt(1);
              r >= 56320 && r <= 57343 && (e = 1024 * (i - 55296) + r - 56320 + 65536)
            }
            return e
          }

          function o(t) {
            var e = a(t);
            return e >= 127462 && e <= 127487
          }
          var l = function() {
            this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = !1, this._warned = !1, this.initTime = Date.now(), this.setIsLoadedBinded = this.setIsLoaded.bind(this), this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this)
          };
          l.isModifier = function(t, e) {
            var i = t.toString(16) + e.toString(16);
            return -1 !== r.indexOf(i)
          }, l.isZeroWidthJoiner = function(t) {
            return 8205 === t
          }, l.isFlagEmoji = function(t) {
            return o(t.substr(0, 2)) && o(t.substr(2, 2))
          }, l.isRegionalCode = o, l.isCombinedCharacter = function(t) {
            return -1 !== e.indexOf(t)
          }, l.isRegionalFlag = function(t, e) {
            var r = a(t.substr(e, 2));
            if (r !== i) return !1;
            var n = 0;
            for (e += 2; n < 5;) {
              if ((r = a(t.substr(e, 2))) < 917601 || r > 917626) return !1;
              n += 1, e += 2
            }
            return 917631 === a(t.substr(e, 2))
          }, l.isVariationSelector = function(t) {
            return 65039 === t
          }, l.BLACK_FLAG_CODE_POINT = i;
          var h = {
            addChars: function(t) {
              if (t) {
                var e;
                this.chars || (this.chars = []);
                var i, r, n = t.length,
                  s = this.chars.length;
                for (e = 0; e < n; e += 1) {
                  for (i = 0, r = !1; i < s;) this.chars[i].style === t[e].style && this.chars[i].fFamily === t[e].fFamily && this.chars[i].ch === t[e].ch && (r = !0), i += 1;
                  r || (this.chars.push(t[e]), s += 1)
                }
              }
            },
            addFonts: function(t, e) {
              if (t) {
                if (this.chars) return this.isLoaded = !0, void(this.fonts = t.list);
                if (!document.body) return this.isLoaded = !0, t.list.forEach((function(t) {
                  t.helper = s(t), t.cache = {}
                })), void(this.fonts = t.list);
                var i, r = t.list,
                  a = r.length,
                  o = a;
                for (i = 0; i < a; i += 1) {
                  var l, h, p = !0;
                  if (r[i].loaded = !1, r[i].monoCase = n(r[i].fFamily, "monospace"), r[i].sansCase = n(r[i].fFamily, "sans-serif"), r[i].fPath) {
                    if ("p" === r[i].fOrigin || 3 === r[i].origin) {
                      if ((l = document.querySelectorAll('style[f-forigin="p"][f-family="' + r[i].fFamily + '"], style[f-origin="3"][f-family="' + r[i].fFamily + '"]')).length > 0 && (p = !1), p) {
                        var c = createTag("style");
                        c.setAttribute("f-forigin", r[i].fOrigin), c.setAttribute("f-origin", r[i].origin), c.setAttribute("f-family", r[i].fFamily), c.type = "text/css", c.innerText = "@font-face {font-family: " + r[i].fFamily + "; font-style: normal; src: url('" + r[i].fPath + "');}", e.appendChild(c)
                      }
                    } else if ("g" === r[i].fOrigin || 1 === r[i].origin) {
                      for (l = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), h = 0; h < l.length; h += 1) - 1 !== l[h].href.indexOf(r[i].fPath) && (p = !1);
                      if (p) {
                        var u = createTag("link");
                        u.setAttribute("f-forigin", r[i].fOrigin), u.setAttribute("f-origin", r[i].origin), u.type = "text/css", u.rel = "stylesheet", u.href = r[i].fPath, document.body.appendChild(u)
                      }
                    } else if ("t" === r[i].fOrigin || 2 === r[i].origin) {
                      for (l = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), h = 0; h < l.length; h += 1) r[i].fPath === l[h].src && (p = !1);
                      if (p) {
                        var f = createTag("link");
                        f.setAttribute("f-forigin", r[i].fOrigin), f.setAttribute("f-origin", r[i].origin), f.setAttribute("rel", "stylesheet"), f.setAttribute("href", r[i].fPath), e.appendChild(f)
                      }
                    }
                  } else r[i].loaded = !0, o -= 1;
                  r[i].helper = s(r[i], e), r[i].cache = {}, this.fonts.push(r[i])
                }
                0 === o ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100)
              } else this.isLoaded = !0
            },
            getCharData: function(e, i, r) {
              for (var n = 0, s = this.chars.length; n < s;) {
                if (this.chars[n].ch === e && this.chars[n].style === i && this.chars[n].fFamily === r) return this.chars[n];
                n += 1
              }
              return ("string" == typeof e && 13 !== e.charCodeAt(0) || !e) && console && console.warn && !this._warned && (this._warned = !0, console.warn("Missing character from exported characters list: ", e, i, r)), t
            },
            getFontByName: function(t) {
              for (var e = 0, i = this.fonts.length; e < i;) {
                if (this.fonts[e].fName === t) return this.fonts[e];
                e += 1
              }
              return this.fonts[0]
            },
            measureText: function(t, e, i) {
              var r = this.getFontByName(e),
                n = t;
              if (!r.cache[n]) {
                var s = r.helper;
                if (" " === t) {
                  var a = s.measureText("|" + t + "|"),
                    o = s.measureText("||");
                  r.cache[n] = (a - o) / 100
                } else r.cache[n] = s.measureText(t) / 100
              }
              return r.cache[n] * i
            },
            checkLoadedFonts: function() {
              var t, e, i, r = this.fonts.length,
                n = r;
              for (t = 0; t < r; t += 1) this.fonts[t].loaded ? n -= 1 : "n" === this.fonts[t].fOrigin || 0 === this.fonts[t].origin ? this.fonts[t].loaded = !0 : (e = this.fonts[t].monoCase.node, i = this.fonts[t].monoCase.w, e.offsetWidth !== i ? (n -= 1, this.fonts[t].loaded = !0) : (e = this.fonts[t].sansCase.node, i = this.fonts[t].sansCase.w, e.offsetWidth !== i && (n -= 1, this.fonts[t].loaded = !0)), this.fonts[t].loaded && (this.fonts[t].sansCase.parent.parentNode.removeChild(this.fonts[t].sansCase.parent), this.fonts[t].monoCase.parent.parentNode.removeChild(this.fonts[t].monoCase.parent)));
              0 !== n && Date.now() - this.initTime < 5e3 ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10)
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

        function SliderEffect(t, e, i) {
          this.p = PropertyFactory.getProp(e, t.v, 0, 0, i)
        }

        function AngleEffect(t, e, i) {
          this.p = PropertyFactory.getProp(e, t.v, 0, 0, i)
        }

        function ColorEffect(t, e, i) {
          this.p = PropertyFactory.getProp(e, t.v, 1, 0, i)
        }

        function PointEffect(t, e, i) {
          this.p = PropertyFactory.getProp(e, t.v, 1, 0, i)
        }

        function LayerIndexEffect(t, e, i) {
          this.p = PropertyFactory.getProp(e, t.v, 0, 0, i)
        }

        function MaskIndexEffect(t, e, i) {
          this.p = PropertyFactory.getProp(e, t.v, 0, 0, i)
        }

        function CheckboxEffect(t, e, i) {
          this.p = PropertyFactory.getProp(e, t.v, 0, 0, i)
        }

        function NoValueEffect() {
          this.p = {}
        }

        function EffectsManager(t, e) {
          var i, r = t.ef || [];
          this.effectElements = [];
          var n, s = r.length;
          for (i = 0; i < s; i += 1) n = new GroupEffect(r[i], e), this.effectElements.push(n)
        }

        function GroupEffect(t, e) {
          this.init(t, e)
        }

        function BaseElement() {}

        function FrameElement() {}

        function FootageElement(t, e, i) {
          this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.footageData = e.imageLoader.getAsset(this.assetData), this.initBaseData(t, e, i)
        }

        function AudioElement(t, e, i) {
          this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.initBaseData(t, e, i), this._isPlaying = !1, this._canPlay = !1;
          var r = this.globalData.getAssetsPath(this.assetData);
          this.audio = this.globalData.audioController.createAudio(r), this._currentTime = 0, this.globalData.audioController.addAudio(this), this._volumeMultiplier = 1, this._volume = 1, this._previousVolume = null, this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
            _placeholder: !0
          }, this.lv = PropertyFactory.getProp(this, t.au && t.au.lv ? t.au.lv : {
            k: [100]
          }, 1, .01, this)
        }

        function BaseRenderer() {}
        extendPrototype([DynamicPropertyContainer], GroupEffect), GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties, GroupEffect.prototype.init = function(t, e) {
          var i;
          this.data = t, this.effectElements = [], this.initDynamicPropertyContainer(e);
          var r, n = this.data.ef.length,
            s = this.data.ef;
          for (i = 0; i < n; i += 1) {
            switch (r = null, s[i].ty) {
              case 0:
                r = new SliderEffect(s[i], e, this);
                break;
              case 1:
                r = new AngleEffect(s[i], e, this);
                break;
              case 2:
                r = new ColorEffect(s[i], e, this);
                break;
              case 3:
                r = new PointEffect(s[i], e, this);
                break;
              case 4:
              case 7:
                r = new CheckboxEffect(s[i], e, this);
                break;
              case 10:
                r = new LayerIndexEffect(s[i], e, this);
                break;
              case 11:
                r = new MaskIndexEffect(s[i], e, this);
                break;
              case 5:
                r = new EffectsManager(s[i], e, this);
                break;
              default:
                r = new NoValueEffect(s[i], e, this)
            }
            r && this.effectElements.push(r)
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
                i = t("effects"),
                r = t("shape"),
                n = t("text"),
                s = t("comp");
              this.layerInterface = e(this), this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
              var a = i.createEffectsInterface(this, this.layerInterface);
              this.layerInterface.registerEffectsInterface(a), 0 === this.data.ty || this.data.xt ? this.compInterface = s(this) : 4 === this.data.ty ? (this.layerInterface.shapeInterface = r(this.shapesData, this.itemsData, this.layerInterface), this.layerInterface.content = this.layerInterface.shapeInterface) : 5 === this.data.ty && (this.layerInterface.textInterface = n(this), this.layerInterface.text = this.layerInterface.textInterface)
            }
          },
          setBlendMode: function() {
            var t = getBlendMode(this.data.bm);
            (this.baseElement || this.layerElement).style["mix-blend-mode"] = t
          },
          initBaseData: function(t, e, i) {
            this.globalData = e, this.comp = i, this.data = t, this.layerId = createElementID(), this.data.sr || (this.data.sr = 1), this.effectsManager = new EffectsManager(this.data, this, this.dynamicProperties)
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
            var i, r = this.dynamicProperties.length;
            for (i = 0; i < r; i += 1)(e || this._isParent && "transform" === this.dynamicProperties[i].propType) && (this.dynamicProperties[i].getValue(), this.dynamicProperties[i]._mdf && (this.globalData._mdf = !0, this._mdf = !0))
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
          var i = this._volume * this._volumeMultiplier;
          this._previousVolume !== i && (this._previousVolume = i, this.audio.volume(i))
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
          var e, i, r = this.layers.length;
          for (this.completeLayers = !0, e = r - 1; e >= 0; e -= 1) this.elements[e] || (i = this.layers[e]).ip - i.st <= t - this.layers[e].st && i.op - i.st > t - this.layers[e].st && this.buildItem(e), this.completeLayers = !!this.elements[e] && this.completeLayers;
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
          var i, r = t.length,
            n = this.layers.length;
          for (e = 0; e < r; e += 1)
            for (i = 0; i < n;) {
              if (this.layers[i].id === t[e].id) {
                this.layers[i] = t[e];
                break
              }
              i += 1
            }
        }, BaseRenderer.prototype.setProjectInterface = function(t) {
          this.globalData.projectInterface = t
        }, BaseRenderer.prototype.initItems = function() {
          this.globalData.progressiveLoad || this.buildAllItems()
        }, BaseRenderer.prototype.buildElementParenting = function(t, e, i) {
          for (var r = this.elements, n = this.layers, s = 0, a = n.length; s < a;) n[s].ind == e && (r[s] && !0 !== r[s] ? (i.push(r[s]), r[s].setAsParent(), void 0 !== n[s].parent ? this.buildElementParenting(t, n[s].parent, i) : t.setHierarchy(i)) : (this.buildItem(s), this.addPendingElement(t))), s += 1
        }, BaseRenderer.prototype.addPendingElement = function(t) {
          this.pendingElements.push(t)
        }, BaseRenderer.prototype.searchExtraCompositions = function(t) {
          var e, i = t.length;
          for (e = 0; e < i; e += 1)
            if (t[e].xt) {
              var r = this.createComp(t[e]);
              r.initExpressions(), this.globalData.projectInterface.registerComposition(r)
            }
        }, BaseRenderer.prototype.getElementById = function(t) {
          var e, i = this.elements.length;
          for (e = 0; e < i; e += 1)
            if (this.elements[e].data.ind === t) return this.elements[e];
          return null
        }, BaseRenderer.prototype.getElementByPath = function(t) {
          var e, i = t.shift();
          if ("number" == typeof i) e = this.elements[i];
          else {
            var r, n = this.elements.length;
            for (r = 0; r < n; r += 1)
              if (this.elements[r].data.nm === i) {
                e = this.elements[r];
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

        function MaskElement(t, e, i) {
          this.data = t, this.element = e, this.globalData = i, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null;
          var r, n, s = this.globalData.defs,
            a = this.masksProperties ? this.masksProperties.length : 0;
          this.viewData = createSizedArray(a), this.solidPath = "";
          var o, l, h, p, c, u, f = this.masksProperties,
            d = 0,
            m = [],
            y = createElementID(),
            g = "clipPath",
            v = "clip-path";
          for (r = 0; r < a; r += 1)
            if (("a" !== f[r].mode && "n" !== f[r].mode || f[r].inv || 100 !== f[r].o.k || f[r].o.x) && (g = "mask", v = "mask"), "s" !== f[r].mode && "i" !== f[r].mode || 0 !== d ? h = null : ((h = createNS("rect")).setAttribute("fill", "#ffffff"), h.setAttribute("width", this.element.comp.data.w || 0), h.setAttribute("height", this.element.comp.data.h || 0), m.push(h)), n = createNS("path"), "n" === f[r].mode) this.viewData[r] = {
              op: PropertyFactory.getProp(this.element, f[r].o, 0, .01, this.element),
              prop: ShapePropertyFactory.getShapeProp(this.element, f[r], 3),
              elem: n,
              lastPath: ""
            }, s.appendChild(n);
            else {
              var b;
              if (d += 1, n.setAttribute("fill", "s" === f[r].mode ? "#000000" : "#ffffff"), n.setAttribute("clip-rule", "nonzero"), 0 !== f[r].x.k ? (g = "mask", v = "mask", u = PropertyFactory.getProp(this.element, f[r].x, 0, null, this.element), b = createElementID(), (p = createNS("filter")).setAttribute("id", b), (c = createNS("feMorphology")).setAttribute("operator", "erode"), c.setAttribute("in", "SourceGraphic"), c.setAttribute("radius", "0"), p.appendChild(c), s.appendChild(p), n.setAttribute("stroke", "s" === f[r].mode ? "#000000" : "#ffffff")) : (c = null, u = null), this.storedData[r] = {
                  elem: n,
                  x: u,
                  expan: c,
                  lastPath: "",
                  lastOperator: "",
                  filterId: b,
                  lastRadius: 0
                }, "i" === f[r].mode) {
                l = m.length;
                var x = createNS("g");
                for (o = 0; o < l; o += 1) x.appendChild(m[o]);
                var P = createNS("mask");
                P.setAttribute("mask-type", "alpha"), P.setAttribute("id", y + "_" + d), P.appendChild(n), s.appendChild(P), x.setAttribute("mask", "url(" + getLocationHref() + "#" + y + "_" + d + ")"), m.length = 0, m.push(x)
              } else m.push(n);
              f[r].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[r] = {
                elem: n,
                lastPath: "",
                op: PropertyFactory.getProp(this.element, f[r].o, 0, .01, this.element),
                prop: ShapePropertyFactory.getShapeProp(this.element, f[r], 3),
                invRect: h
              }, this.viewData[r].prop.k || this.drawPath(f[r], this.viewData[r].prop.v, this.viewData[r])
            } for (this.maskElement = createNS(g), a = m.length, r = 0; r < a; r += 1) this.maskElement.appendChild(m[r]);
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
                i = 0,
                r = this.hierarchy.length;
              if (!this.finalTransform._matMdf)
                for (; i < r;) {
                  if (this.hierarchy[i].finalTransform.mProp._mdf) {
                    this.finalTransform._matMdf = !0;
                    break
                  }
                  i += 1
                }
              if (this.finalTransform._matMdf)
                for (t = this.finalTransform.mProp.v.props, e.cloneFromProps(t), i = 0; i < r; i += 1) e.multiply(this.hierarchy[i].finalTransform.mProp.v)
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
                var i = this.finalTransform.localMat;
                for (this.localTransforms[0].matrix.clone(i), t = 1; t < e; t += 1) {
                  var r = this.localTransforms[t].matrix;
                  i.multiply(r)
                }
                i.multiply(this.finalTransform.mat)
              }
              if (this.finalTransform._opMdf) {
                var n = this.finalTransform.localOpacity;
                for (t = 0; t < e; t += 1) n *= .01 * this.localTransforms[t].opacity;
                this.finalTransform.localOpacity = n
              }
            }
          },
          searchEffectTransforms: function() {
            if (this.renderableEffectsManager) {
              var t = this.renderableEffectsManager.getEffects(effectTypes.TRANSFORM_EFFECT);
              if (t.length) {
                this.localTransforms = [], this.finalTransform.localMat = new Matrix;
                var e = 0,
                  i = t.length;
                for (e = 0; e < i; e += 1) this.localTransforms.push(t[e])
              }
            }
          },
          globalToLocal: function(t) {
            var e = [];
            e.push(this.finalTransform);
            for (var i, r = !0, n = this.comp; r;) n.finalTransform ? (n.data.hasMask && e.splice(0, 0, n.finalTransform), n = n.comp) : r = !1;
            var s, a = e.length;
            for (i = 0; i < a; i += 1) s = e[i].mat.applyToPointArray(0, 0, 0), t = [t[0] - s[0], t[1] - s[1], 0];
            return t
          },
          mHelper: new Matrix
        }, MaskElement.prototype.getMaskProperty = function(t) {
          return this.viewData[t].prop
        }, MaskElement.prototype.renderFrame = function(t) {
          var e, i = this.element.finalTransform.mat,
            r = this.masksProperties.length;
          for (e = 0; e < r; e += 1)
            if ((this.viewData[e].prop._mdf || t) && this.drawPath(this.masksProperties[e], this.viewData[e].prop.v, this.viewData[e]), (this.viewData[e].op._mdf || t) && this.viewData[e].elem.setAttribute("fill-opacity", this.viewData[e].op.v), "n" !== this.masksProperties[e].mode && (this.viewData[e].invRect && (this.element.finalTransform.mProp._mdf || t) && this.viewData[e].invRect.setAttribute("transform", i.getInverseMatrix().to2dCSS()), this.storedData[e].x && (this.storedData[e].x._mdf || t))) {
              var n = this.storedData[e].expan;
              this.storedData[e].x.v < 0 ? ("erode" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "erode", this.storedData[e].elem.setAttribute("filter", "url(" + getLocationHref() + "#" + this.storedData[e].filterId + ")")), n.setAttribute("radius", -this.storedData[e].x.v)) : ("dilate" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "dilate", this.storedData[e].elem.setAttribute("filter", null)), this.storedData[e].elem.setAttribute("stroke-width", 2 * this.storedData[e].x.v))
            }
        }, MaskElement.prototype.getMaskelement = function() {
          return this.maskElement
        }, MaskElement.prototype.createLayerSolidPath = function() {
          var t = "M0,0 ";
          return t += " h" + this.globalData.compSize.w, t += " v" + this.globalData.compSize.h, (t += " h-" + this.globalData.compSize.w) + " v-" + this.globalData.compSize.h + " "
        }, MaskElement.prototype.drawPath = function(t, e, i) {
          var r, n, s = " M" + e.v[0][0] + "," + e.v[0][1];
          for (n = e._length, r = 1; r < n; r += 1) s += " C" + e.o[r - 1][0] + "," + e.o[r - 1][1] + " " + e.i[r][0] + "," + e.i[r][1] + " " + e.v[r][0] + "," + e.v[r][1];
          if (e.c && n > 1 && (s += " C" + e.o[r - 1][0] + "," + e.o[r - 1][1] + " " + e.i[0][0] + "," + e.i[0][1] + " " + e.v[0][0] + "," + e.v[0][1]), i.lastPath !== s) {
            var a = "";
            i.elem && (e.c && (a = t.inv ? this.solidPath + s : s), i.elem.setAttribute("d", a)), i.lastPath = s
          }
        }, MaskElement.prototype.destroy = function() {
          this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null
        };
        var filtersFactory = {
            createFilter: function(t, e) {
              var i = createNS("filter");
              return i.setAttribute("id", t), !0 !== e && (i.setAttribute("filterUnits", "objectBoundingBox"), i.setAttribute("x", "0%"), i.setAttribute("y", "0%"), i.setAttribute("width", "100%"), i.setAttribute("height", "100%")), i
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
          var e, i, r = "SourceGraphic",
            n = t.data.ef ? t.data.ef.length : 0,
            s = createElementID(),
            a = filtersFactory.createFilter(s, !0),
            o = 0;
          for (this.filters = [], e = 0; e < n; e += 1) {
            i = null;
            var l = t.data.ef[e].ty;
            registeredEffects$1[l] && (i = new(0, registeredEffects$1[l].effect)(a, t.effectsManager.effectElements[e], t, idPrefix + o, r), r = idPrefix + o, registeredEffects$1[l].countsAsEffect && (o += 1)), i && this.filters.push(i)
          }
          o && (t.globalData.defs.appendChild(a), t.layerElement.setAttribute("filter", "url(" + getLocationHref() + "#" + s + ")")), this.filters.length && t.addRenderableComponent(this)
        }

        function registerEffect$1(t, e, i) {
          registeredEffects$1[t] = {
            effect: e,
            countsAsEffect: i
          }
        }

        function SVGBaseElement() {}

        function HierarchyElement() {}

        function RenderableDOMElement() {}

        function IImageElement(t, e, i) {
          this.assetData = e.getAssetData(t.refId), this.assetData && this.assetData.sid && (this.assetData = e.slotManager.getProp(this.assetData)), this.initElement(t, e, i), this.sourceRect = {
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
          var e, i = this.filters.length;
          for (e = 0; e < i; e += 1) this.filters[e].renderFrame(t)
        }, SVGEffects.prototype.getEffects = function(t) {
          var e, i = this.filters.length,
            r = [];
          for (e = 0; e < i; e += 1) this.filters[e].type === t && r.push(this.filters[e]);
          return r
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
              var i = createNS("clipPath"),
                r = createNS("path");
              r.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
              var n = createElementID();
              if (i.setAttribute("id", n), i.appendChild(r), this.globalData.defs.appendChild(i), this.checkMasks()) {
                var s = createNS("g");
                s.setAttribute("clip-path", "url(" + getLocationHref() + "#" + n + ")"), s.appendChild(this.layerElement), this.transformedElement = s, t ? t.appendChild(this.transformedElement) : this.baseElement = this.transformedElement
              } else this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + n + ")")
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
              var e, i, r, n, s = this.layerId + "_" + t;
              if (1 === t || 3 === t) {
                var a = createNS("mask");
                a.setAttribute("id", s), a.setAttribute("mask-type", 3 === t ? "luminance" : "alpha"), (r = createNS("use")).setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), a.appendChild(r), this.globalData.defs.appendChild(a), featureSupport.maskType || 1 !== t || (a.setAttribute("mask-type", "luminance"), e = createElementID(), i = filtersFactory.createFilter(e), this.globalData.defs.appendChild(i), i.appendChild(filtersFactory.createAlphaToLuminanceFilter()), (n = createNS("g")).appendChild(r), a.appendChild(n), n.setAttribute("filter", "url(" + getLocationHref() + "#" + e + ")"))
              } else if (2 === t) {
                var o = createNS("mask");
                o.setAttribute("id", s), o.setAttribute("mask-type", "alpha");
                var l = createNS("g");
                o.appendChild(l), e = createElementID(), i = filtersFactory.createFilter(e);
                var h = createNS("feComponentTransfer");
                h.setAttribute("in", "SourceGraphic"), i.appendChild(h);
                var p = createNS("feFuncA");
                p.setAttribute("type", "table"), p.setAttribute("tableValues", "1.0 0.0"), h.appendChild(p), this.globalData.defs.appendChild(i);
                var c = createNS("rect");
                c.setAttribute("width", this.comp.data.w), c.setAttribute("height", this.comp.data.h), c.setAttribute("x", "0"), c.setAttribute("y", "0"), c.setAttribute("fill", "#ffffff"), c.setAttribute("opacity", "0"), l.setAttribute("filter", "url(" + getLocationHref() + "#" + e + ")"), l.appendChild(c), (r = createNS("use")).setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), l.appendChild(r), featureSupport.maskType || (o.setAttribute("mask-type", "luminance"), i.appendChild(filtersFactory.createAlphaToLuminanceFilter()), n = createNS("g"), l.appendChild(c), n.appendChild(this.layerElement), l.appendChild(n)), this.globalData.defs.appendChild(o)
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
          initElement: function(t, e, i) {
            this.initFrame(), this.initBaseData(t, e, i), this.initTransform(t, e, i), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide()
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
            var e, i = this.shapeModifiers.length;
            for (e = 0; e < i; e += 1) this.shapeModifiers[e].addShape(t)
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
            for (var e = this.processedElements, i = 0, r = e.length; i < r;) {
              if (e[i].elem === t) return e[i].pos;
              i += 1
            }
            return 0
          },
          addProcessedElement: function(t, e) {
            for (var i = this.processedElements, r = i.length; r;)
              if (i[r -= 1].elem === t) return void(i[r].pos = e);
            i.push(new ProcessedElement(t, e))
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

        function SVGShapeData(t, e, i) {
          this.caches = [], this.styles = [], this.transformers = t, this.lStr = "", this.sh = i, this.lvl = e, this._isAnimated = !!i.k;
          for (var r = 0, n = t.length; r < n;) {
            if (t[r].mProps.dynamicProperties.length) {
              this._isAnimated = !0;
              break
            }
            r += 1
          }
        }

        function SVGStyleData(t, e) {
          this.data = t, this.type = t.ty, this.d = "", this.lvl = e, this._mdf = !1, this.closed = !0 === t.hd, this.pElem = createNS("path"), this.msElem = null
        }

        function DashProperty(t, e, i, r) {
          var n;
          this.elem = t, this.frameId = -1, this.dataProps = createSizedArray(e.length), this.renderer = i, this.k = !1, this.dashStr = "", this.dashArray = createTypedArray("float32", e.length ? e.length - 1 : 0), this.dashoffset = createTypedArray("float32", 1), this.initDynamicPropertyContainer(r);
          var s, a = e.length || 0;
          for (n = 0; n < a; n += 1) s = PropertyFactory.getProp(t, e[n].v, 0, 0, this), this.k = s.k || this.k, this.dataProps[n] = {
            n: e[n].n,
            p: s
          };
          this.k || this.getValue(!0), this._isAnimated = this.k
        }

        function SVGStrokeStyleData(t, e, i) {
          this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, "svg", this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = i, this._isAnimated = !!this._isAnimated
        }

        function SVGFillStyleData(t, e, i) {
          this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = i
        }

        function SVGNoStyleData(t, e, i) {
          this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.style = i
        }

        function GradientProperty(t, e, i) {
          this.data = e, this.c = createTypedArray("uint8c", 4 * e.p);
          var r = e.k.k[0].s ? e.k.k[0].s.length - 4 * e.p : e.k.k.length - 4 * e.p;
          this.o = createTypedArray("float32", r), this._cmdf = !1, this._omdf = !1, this._collapsable = this.checkCollapsable(), this._hasOpacity = r, this.initDynamicPropertyContainer(i), this.prop = PropertyFactory.getProp(t, e.k, 1, null, this), this.k = this.prop.k, this.getValue(!0)
        }

        function SVGGradientFillStyleData(t, e, i) {
          this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.initGradientData(t, e, i)
        }

        function SVGGradientStrokeStyleData(t, e, i) {
          this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, "svg", this), this.initGradientData(t, e, i), this._isAnimated = !!this._isAnimated
        }

        function ShapeGroupData() {
          this.it = [], this.prevViewData = [], this.gr = createNS("g")
        }

        function SVGTransformData(t, e, i) {
          this.transform = {
            mProps: t,
            op: e,
            container: i
          }, this.elements = [], this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length
        }
        SVGShapeData.prototype.setAsAnimated = function() {
          this._isAnimated = !0
        }, SVGStyleData.prototype.reset = function() {
          this.d = "", this._mdf = !1
        }, DashProperty.prototype.getValue = function(t) {
          if ((this.elem.globalData.frameId !== this.frameId || t) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || t, this._mdf)) {
            var e = 0,
              i = this.dataProps.length;
            for ("svg" === this.renderer && (this.dashStr = ""), e = 0; e < i; e += 1) "o" !== this.dataProps[e].n ? "svg" === this.renderer ? this.dashStr += " " + this.dataProps[e].p.v : this.dashArray[e] = this.dataProps[e].p.v : this.dashoffset[0] = this.dataProps[e].p.v
          }
        }, extendPrototype([DynamicPropertyContainer], DashProperty), extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData), extendPrototype([DynamicPropertyContainer], SVGFillStyleData), extendPrototype([DynamicPropertyContainer], SVGNoStyleData), GradientProperty.prototype.comparePoints = function(t, e) {
          for (var i = 0, r = this.o.length / 2; i < r;) {
            if (Math.abs(t[4 * i] - t[4 * e + 2 * i]) > .01) return !1;
            i += 1
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
            var e, i, r, n = 4 * this.data.p;
            for (e = 0; e < n; e += 1) i = e % 4 == 0 ? 100 : 255, r = Math.round(this.prop.v[e] * i), this.c[e] !== r && (this.c[e] = r, this._cmdf = !t);
            if (this.o.length)
              for (n = this.prop.v.length, e = 4 * this.data.p; e < n; e += 1) i = e % 2 == 0 ? 100 : 1, r = e % 2 == 0 ? Math.round(100 * this.prop.v[e]) : this.prop.v[e], this.o[e - 4 * this.data.p] !== r && (this.o[e - 4 * this.data.p] = r, this._omdf = !t);
            this._mdf = !t
          }
        }, extendPrototype([DynamicPropertyContainer], GradientProperty), SVGGradientFillStyleData.prototype.initGradientData = function(t, e, i) {
          this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.s = PropertyFactory.getProp(t, e.s, 1, null, this), this.e = PropertyFactory.getProp(t, e.e, 1, null, this), this.h = PropertyFactory.getProp(t, e.h || {
            k: 0
          }, 0, .01, this), this.a = PropertyFactory.getProp(t, e.a || {
            k: 0
          }, 0, degToRads, this), this.g = new GradientProperty(t, e.g, this), this.style = i, this.stops = [], this.setGradientData(i.pElem, e), this.setGradientOpacity(e, i), this._isAnimated = !!this._isAnimated
        }, SVGGradientFillStyleData.prototype.setGradientData = function(t, e) {
          var i = createElementID(),
            r = createNS(1 === e.t ? "linearGradient" : "radialGradient");
          r.setAttribute("id", i), r.setAttribute("spreadMethod", "pad"), r.setAttribute("gradientUnits", "userSpaceOnUse");
          var n, s, a, o = [];
          for (a = 4 * e.g.p, s = 0; s < a; s += 4) n = createNS("stop"), r.appendChild(n), o.push(n);
          t.setAttribute("gf" === e.ty ? "fill" : "stroke", "url(" + getLocationHref() + "#" + i + ")"), this.gf = r, this.cst = o
        }, SVGGradientFillStyleData.prototype.setGradientOpacity = function(t, e) {
          if (this.g._hasOpacity && !this.g._collapsable) {
            var i, r, n, s = createNS("mask"),
              a = createNS("path");
            s.appendChild(a);
            var o = createElementID(),
              l = createElementID();
            s.setAttribute("id", l);
            var h = createNS(1 === t.t ? "linearGradient" : "radialGradient");
            h.setAttribute("id", o), h.setAttribute("spreadMethod", "pad"), h.setAttribute("gradientUnits", "userSpaceOnUse"), n = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length;
            var p = this.stops;
            for (r = 4 * t.g.p; r < n; r += 2)(i = createNS("stop")).setAttribute("stop-color", "rgb(255,255,255)"), h.appendChild(i), p.push(i);
            a.setAttribute("gf" === t.ty ? "fill" : "stroke", "url(" + getLocationHref() + "#" + o + ")"), "gs" === t.ty && (a.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]), a.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]), 1 === t.lj && a.setAttribute("stroke-miterlimit", t.ml)), this.of = h, this.ms = s, this.ost = p, this.maskId = l, e.msElem = a
          }
        }, extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData), extendPrototype([SVGGradientFillStyleData, DynamicPropertyContainer], SVGGradientStrokeStyleData);
        var buildShapeString = function(t, e, i, r) {
            if (0 === e) return "";
            var n, s = t.o,
              a = t.i,
              o = t.v,
              l = " M" + r.applyToPointStringified(o[0][0], o[0][1]);
            for (n = 1; n < e; n += 1) l += " C" + r.applyToPointStringified(s[n - 1][0], s[n - 1][1]) + " " + r.applyToPointStringified(a[n][0], a[n][1]) + " " + r.applyToPointStringified(o[n][0], o[n][1]);
            return i && e && (l += " C" + r.applyToPointStringified(s[n - 1][0], s[n - 1][1]) + " " + r.applyToPointStringified(a[0][0], a[0][1]) + " " + r.applyToPointStringified(o[0][0], o[0][1]), l += "z"), l
          },
          SVGElementsRenderer = function() {
            var t = new Matrix,
              e = new Matrix;

            function i(t, e, i) {
              (i || e.transform.op._mdf) && e.transform.container.setAttribute("opacity", e.transform.op.v), (i || e.transform.mProps._mdf) && e.transform.container.setAttribute("transform", e.transform.mProps.v.to2dCSS())
            }

            function r() {}

            function n(i, r, n) {
              var s, a, o, l, h, p, c, u, f, d, m = r.styles.length,
                y = r.lvl;
              for (p = 0; p < m; p += 1) {
                if (l = r.sh._mdf || n, r.styles[p].lvl < y) {
                  for (u = e.reset(), f = y - r.styles[p].lvl, d = r.transformers.length - 1; !l && f > 0;) l = r.transformers[d].mProps._mdf || l, f -= 1, d -= 1;
                  if (l)
                    for (f = y - r.styles[p].lvl, d = r.transformers.length - 1; f > 0;) u.multiply(r.transformers[d].mProps.v), f -= 1, d -= 1
                } else u = t;
                if (a = (c = r.sh.paths)._length, l) {
                  for (o = "", s = 0; s < a; s += 1)(h = c.shapes[s]) && h._length && (o += buildShapeString(h, h._length, h.c, u));
                  r.caches[p] = o
                } else o = r.caches[p];
                r.styles[p].d += !0 === i.hd ? "" : o, r.styles[p]._mdf = l || r.styles[p]._mdf
              }
            }

            function s(t, e, i) {
              var r = e.style;
              (e.c._mdf || i) && r.pElem.setAttribute("fill", "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || i) && r.pElem.setAttribute("fill-opacity", e.o.v)
            }

            function a(t, e, i) {
              o(t, e, i), l(0, e, i)
            }

            function o(t, e, i) {
              var r, n, s, a, o, l = e.gf,
                h = e.g._hasOpacity,
                p = e.s.v,
                c = e.e.v;
              if (e.o._mdf || i) {
                var u = "gf" === t.ty ? "fill-opacity" : "stroke-opacity";
                e.style.pElem.setAttribute(u, e.o.v)
              }
              if (e.s._mdf || i) {
                var f = 1 === t.t ? "x1" : "cx",
                  d = "x1" === f ? "y1" : "cy";
                l.setAttribute(f, p[0]), l.setAttribute(d, p[1]), h && !e.g._collapsable && (e.of.setAttribute(f, p[0]), e.of.setAttribute(d, p[1]))
              }
              if (e.g._cmdf || i) {
                r = e.cst;
                var m = e.g.c;
                for (s = r.length, n = 0; n < s; n += 1)(a = r[n]).setAttribute("offset", m[4 * n] + "%"), a.setAttribute("stop-color", "rgb(" + m[4 * n + 1] + "," + m[4 * n + 2] + "," + m[4 * n + 3] + ")")
              }
              if (h && (e.g._omdf || i)) {
                var y = e.g.o;
                for (s = (r = e.g._collapsable ? e.cst : e.ost).length, n = 0; n < s; n += 1) a = r[n], e.g._collapsable || a.setAttribute("offset", y[2 * n] + "%"), a.setAttribute("stop-opacity", y[2 * n + 1])
              }
              if (1 === t.t)(e.e._mdf || i) && (l.setAttribute("x2", c[0]), l.setAttribute("y2", c[1]), h && !e.g._collapsable && (e.of.setAttribute("x2", c[0]), e.of.setAttribute("y2", c[1])));
              else if ((e.s._mdf || e.e._mdf || i) && (o = Math.sqrt(Math.pow(p[0] - c[0], 2) + Math.pow(p[1] - c[1], 2)), l.setAttribute("r", o), h && !e.g._collapsable && e.of.setAttribute("r", o)), e.e._mdf || e.h._mdf || e.a._mdf || i) {
                o || (o = Math.sqrt(Math.pow(p[0] - c[0], 2) + Math.pow(p[1] - c[1], 2)));
                var g = Math.atan2(c[1] - p[1], c[0] - p[0]),
                  v = e.h.v;
                v >= 1 ? v = .99 : v <= -1 && (v = -.99);
                var b = o * v,
                  x = Math.cos(g + e.a.v) * b + p[0],
                  P = Math.sin(g + e.a.v) * b + p[1];
                l.setAttribute("fx", x), l.setAttribute("fy", P), h && !e.g._collapsable && (e.of.setAttribute("fx", x), e.of.setAttribute("fy", P))
              }
            }

            function l(t, e, i) {
              var r = e.style,
                n = e.d;
              n && (n._mdf || i) && n.dashStr && (r.pElem.setAttribute("stroke-dasharray", n.dashStr), r.pElem.setAttribute("stroke-dashoffset", n.dashoffset[0])), e.c && (e.c._mdf || i) && r.pElem.setAttribute("stroke", "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || i) && r.pElem.setAttribute("stroke-opacity", e.o.v), (e.w._mdf || i) && (r.pElem.setAttribute("stroke-width", e.w.v), r.msElem && r.msElem.setAttribute("stroke-width", e.w.v))
            }
            return {
              createRenderFunction: function(t) {
                switch (t.ty) {
                  case "fl":
                    return s;
                  case "gf":
                    return o;
                  case "gs":
                    return a;
                  case "st":
                    return l;
                  case "sh":
                  case "el":
                  case "rc":
                  case "sr":
                    return n;
                  case "tr":
                    return i;
                  case "no":
                    return r;
                  default:
                    return null
                }
              }
            }
          }();

        function SVGShapeElement(t, e, i) {
          this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.initElement(t, e, i), this.prevViewData = []
        }

        function LetterProps(t, e, i, r, n, s) {
          this.o = t, this.sw = e, this.sc = i, this.fc = r, this.m = n, this.p = s, this._mdf = {
            o: !0,
            sw: !!e,
            sc: !!i,
            fc: !!r,
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
          var t, e, i, r, n = this.shapes.length,
            s = this.stylesList.length,
            a = [],
            o = !1;
          for (i = 0; i < s; i += 1) {
            for (r = this.stylesList[i], o = !1, a.length = 0, t = 0; t < n; t += 1) - 1 !== (e = this.shapes[t]).styles.indexOf(r) && (a.push(e), o = e._isAnimated || o);
            a.length > 1 && o && this.setShapesAsAnimated(a)
          }
        }, SVGShapeElement.prototype.setShapesAsAnimated = function(t) {
          var e, i = t.length;
          for (e = 0; e < i; e += 1) t[e].setAsAnimated()
        }, SVGShapeElement.prototype.createStyleElement = function(t, e) {
          var i, r = new SVGStyleData(t, e),
            n = r.pElem;
          return "st" === t.ty ? i = new SVGStrokeStyleData(this, t, r) : "fl" === t.ty ? i = new SVGFillStyleData(this, t, r) : "gf" === t.ty || "gs" === t.ty ? (i = new("gf" === t.ty ? SVGGradientFillStyleData : SVGGradientStrokeStyleData)(this, t, r), this.globalData.defs.appendChild(i.gf), i.maskId && (this.globalData.defs.appendChild(i.ms), this.globalData.defs.appendChild(i.of), n.setAttribute("mask", "url(" + getLocationHref() + "#" + i.maskId + ")"))) : "no" === t.ty && (i = new SVGNoStyleData(this, t, r)), "st" !== t.ty && "gs" !== t.ty || (n.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]), n.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]), n.setAttribute("fill-opacity", "0"), 1 === t.lj && n.setAttribute("stroke-miterlimit", t.ml)), 2 === t.r && n.setAttribute("fill-rule", "evenodd"), t.ln && n.setAttribute("id", t.ln), t.cl && n.setAttribute("class", t.cl), t.bm && (n.style["mix-blend-mode"] = getBlendMode(t.bm)), this.stylesList.push(r), this.addToAnimatedContents(t, i), i
        }, SVGShapeElement.prototype.createGroupElement = function(t) {
          var e = new ShapeGroupData;
          return t.ln && e.gr.setAttribute("id", t.ln), t.cl && e.gr.setAttribute("class", t.cl), t.bm && (e.gr.style["mix-blend-mode"] = getBlendMode(t.bm)), e
        }, SVGShapeElement.prototype.createTransformElement = function(t, e) {
          var i = TransformPropertyFactory.getTransformProperty(this, t, this),
            r = new SVGTransformData(i, i.o, e);
          return this.addToAnimatedContents(t, r), r
        }, SVGShapeElement.prototype.createShapeElement = function(t, e, i) {
          var r = 4;
          "rc" === t.ty ? r = 5 : "el" === t.ty ? r = 6 : "sr" === t.ty && (r = 7);
          var n = new SVGShapeData(e, i, ShapePropertyFactory.getShapeProp(this, t, r, this));
          return this.shapes.push(n), this.addShapeToModifiers(n), this.addToAnimatedContents(t, n), n
        }, SVGShapeElement.prototype.addToAnimatedContents = function(t, e) {
          for (var i = 0, r = this.animatedContents.length; i < r;) {
            if (this.animatedContents[i].element === e) return;
            i += 1
          }
          this.animatedContents.push({
            fn: SVGElementsRenderer.createRenderFunction(t),
            element: e,
            data: t
          })
        }, SVGShapeElement.prototype.setElementStyles = function(t) {
          var e, i = t.styles,
            r = this.stylesList.length;
          for (e = 0; e < r; e += 1) this.stylesList[e].closed || i.push(this.stylesList[e])
        }, SVGShapeElement.prototype.reloadShapes = function() {
          var t;
          this._isFirstFrame = !0;
          var e = this.itemsData.length;
          for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
          for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes(), e = this.dynamicProperties.length, t = 0; t < e; t += 1) this.dynamicProperties[t].getValue();
          this.renderModifiers()
        }, SVGShapeElement.prototype.searchShapes = function(t, e, i, r, n, s, a) {
          var o, l, h, p, c, u, f = [].concat(s),
            d = t.length - 1,
            m = [],
            y = [];
          for (o = d; o >= 0; o -= 1) {
            if ((u = this.searchProcessedElement(t[o])) ? e[o] = i[u - 1] : t[o]._render = a, "fl" === t[o].ty || "st" === t[o].ty || "gf" === t[o].ty || "gs" === t[o].ty || "no" === t[o].ty) u ? e[o].style.closed = !1 : e[o] = this.createStyleElement(t[o], n), t[o]._render && e[o].style.pElem.parentNode !== r && r.appendChild(e[o].style.pElem), m.push(e[o].style);
            else if ("gr" === t[o].ty) {
              if (u)
                for (h = e[o].it.length, l = 0; l < h; l += 1) e[o].prevViewData[l] = e[o].it[l];
              else e[o] = this.createGroupElement(t[o]);
              this.searchShapes(t[o].it, e[o].it, e[o].prevViewData, e[o].gr, n + 1, f, a), t[o]._render && e[o].gr.parentNode !== r && r.appendChild(e[o].gr)
            } else "tr" === t[o].ty ? (u || (e[o] = this.createTransformElement(t[o], r)), p = e[o].transform, f.push(p)) : "sh" === t[o].ty || "rc" === t[o].ty || "el" === t[o].ty || "sr" === t[o].ty ? (u || (e[o] = this.createShapeElement(t[o], f, n)), this.setElementStyles(e[o])) : "tm" === t[o].ty || "rd" === t[o].ty || "ms" === t[o].ty || "pb" === t[o].ty || "zz" === t[o].ty || "op" === t[o].ty ? (u ? (c = e[o]).closed = !1 : ((c = ShapeModifiers.getModifier(t[o].ty)).init(this, t[o]), e[o] = c, this.shapeModifiers.push(c)), y.push(c)) : "rp" === t[o].ty && (u ? (c = e[o]).closed = !0 : (c = ShapeModifiers.getModifier(t[o].ty), e[o] = c, c.init(this, t, o, e), this.shapeModifiers.push(c), a = !1), y.push(c));
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
          var t, e, i = this.animatedContents.length;
          for (t = 0; t < i; t += 1) e = this.animatedContents[t], (this._isFirstFrame || e.element._isAnimated) && !0 !== e.data && e.fn(e.data, e.element, this._isFirstFrame)
        }, SVGShapeElement.prototype.destroy = function() {
          this.destroyBaseElement(), this.shapesData = null, this.itemsData = null
        }, LetterProps.prototype.update = function(t, e, i, r, n, s) {
          this._mdf.o = !1, this._mdf.sw = !1, this._mdf.sc = !1, this._mdf.fc = !1, this._mdf.m = !1, this._mdf.p = !1;
          var a = !1;
          return this.o !== t && (this.o = t, this._mdf.o = !0, a = !0), this.sw !== e && (this.sw = e, this._mdf.sw = !0, a = !0), this.sc !== i && (this.sc = i, this._mdf.sc = !0, a = !0), this.fc !== r && (this.fc = r, this._mdf.fc = !0, a = !0), this.m !== n && (this.m = n, this._mdf.m = !0, a = !0), !s.length || this.p[0] === s[0] && this.p[1] === s[1] && this.p[4] === s[4] && this.p[5] === s[5] && this.p[12] === s[12] && this.p[13] === s[13] || (this.p = s, this._mdf.p = !0, a = !0), a
        }, TextProperty.prototype.defaultBoxWidth = [0, 0], TextProperty.prototype.copyData = function(t, e) {
          for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
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
              i = this.keysIndex;
            if (this.lock) this.setCurrentData(this.currentData);
            else {
              var r;
              this.lock = !0, this._mdf = !1;
              var n = this.effectsSequence.length,
                s = t || this.data.d.k[this.keysIndex].s;
              for (r = 0; r < n; r += 1) s = i !== this.keysIndex ? this.effectsSequence[r](s, s.t) : this.effectsSequence[r](this.currentData, s.t);
              e !== s && this.setCurrentData(s), this.v = this.currentData, this.pv = this.v, this.lock = !1, this.frameId = this.elem.globalData.frameId
            }
          }
        }, TextProperty.prototype.getKeyframeValue = function() {
          for (var t = this.data.d.k, e = this.elem.comp.renderedFrame, i = 0, r = t.length; i <= r - 1 && !(i === r - 1 || t[i + 1].t > e);) i += 1;
          return this.keysIndex !== i && (this.keysIndex = i), this.data.d.k[this.keysIndex].s
        }, TextProperty.prototype.buildFinalText = function(t) {
          for (var e, i, r = [], n = 0, s = t.length, a = !1, o = !1, l = ""; n < s;) a = o, o = !1, e = t.charCodeAt(n), l = t.charAt(n), FontManager.isCombinedCharacter(e) ? a = !0 : e >= 55296 && e <= 56319 ? FontManager.isRegionalFlag(t, n) ? l = t.substr(n, 14) : (i = t.charCodeAt(n + 1)) >= 56320 && i <= 57343 && (FontManager.isModifier(e, i) ? (l = t.substr(n, 2), a = !0) : l = FontManager.isFlagEmoji(t.substr(n, 4)) ? t.substr(n, 4) : t.substr(n, 2)) : e > 56319 ? (i = t.charCodeAt(n + 1), FontManager.isVariationSelector(e) && (a = !0)) : FontManager.isZeroWidthJoiner(e) && (a = !0, o = !0), a ? (r[r.length - 1] += l, a = !1) : r.push(l), n += l.length;
          return r
        }, TextProperty.prototype.completeTextData = function(t) {
          t.__complete = !0;
          var e, i, r, n, s, a, o, l = this.elem.globalData.fontManager,
            h = this.data,
            p = [],
            c = 0,
            u = h.m.g,
            f = 0,
            d = 0,
            m = 0,
            y = [],
            g = 0,
            v = 0,
            b = l.getFontByName(t.f),
            x = 0,
            P = getFontProperties(b);
          t.fWeight = P.weight, t.fStyle = P.style, t.finalSize = t.s, t.finalText = this.buildFinalText(t.t), i = t.finalText.length, t.finalLineHeight = t.lh;
          var E, S = t.tr / 1e3 * t.finalSize;
          if (t.sz)
            for (var C, T, A = !0, w = t.sz[0], k = t.sz[1]; A;) {
              C = 0, g = 0, i = (T = this.buildFinalText(t.t)).length, S = t.tr / 1e3 * t.finalSize;
              var D = -1;
              for (e = 0; e < i; e += 1) E = T[e].charCodeAt(0), r = !1, " " === T[e] ? D = e : 13 !== E && 3 !== E || (g = 0, r = !0, C += t.finalLineHeight || 1.2 * t.finalSize), l.chars ? (o = l.getCharData(T[e], b.fStyle, b.fFamily), x = r ? 0 : o.w * t.finalSize / 100) : x = l.measureText(T[e], t.f, t.finalSize), g + x > w && " " !== T[e] ? (-1 === D ? i += 1 : e = D, C += t.finalLineHeight || 1.2 * t.finalSize, T.splice(e, D === e ? 1 : 0, "\r"), D = -1, g = 0) : (g += x, g += S);
              C += b.ascent * t.finalSize / 100, this.canResize && t.finalSize > this.minimumFontSize && k < C ? (t.finalSize -= 1, t.finalLineHeight = t.finalSize * t.lh / t.s) : (t.finalText = T, i = t.finalText.length, A = !1)
            }
          g = -S, x = 0;
          var M, _ = 0;
          for (e = 0; e < i; e += 1)
            if (r = !1, 13 === (E = (M = t.finalText[e]).charCodeAt(0)) || 3 === E ? (_ = 0, y.push(g), v = g > v ? g : v, g = -2 * S, n = "", r = !0, m += 1) : n = M, l.chars ? (o = l.getCharData(M, b.fStyle, l.getFontByName(t.f).fFamily), x = r ? 0 : o.w * t.finalSize / 100) : x = l.measureText(n, t.f, t.finalSize), " " === M ? _ += x + S : (g += x + S + _, _ = 0), p.push({
                l: x,
                an: x,
                add: f,
                n: r,
                anIndexes: [],
                val: n,
                line: m,
                animatorJustifyOffset: 0
              }), 2 == u) {
              if (f += x, "" === n || " " === n || e === i - 1) {
                for ("" !== n && " " !== n || (f -= x); d <= e;) p[d].an = f, p[d].ind = c, p[d].extra = x, d += 1;
                c += 1, f = 0
              }
            } else if (3 == u) {
            if (f += x, "" === n || e === i - 1) {
              for ("" === n && (f -= x); d <= e;) p[d].an = f, p[d].ind = c, p[d].extra = x, d += 1;
              f = 0, c += 1
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
          var F, I, V, B, R = h.a;
          a = R.length;
          var L = [];
          for (s = 0; s < a; s += 1) {
            for ((F = R[s]).a.sc && (t.strokeColorAnim = !0), F.a.sw && (t.strokeWidthAnim = !0), (F.a.fc || F.a.fh || F.a.fs || F.a.fb) && (t.fillColorAnim = !0), B = 0, V = F.s.b, e = 0; e < i; e += 1)(I = p[e]).anIndexes[s] = B, (1 == V && "" !== I.val || 2 == V && "" !== I.val && " " !== I.val || 3 == V && (I.n || " " == I.val || e == i - 1) || 4 == V && (I.n || e == i - 1)) && (1 === F.s.rn && L.push(B), B += 1);
            h.a[s].s.totalChars = B;
            var O, N = -1;
            if (1 === F.s.rn)
              for (e = 0; e < i; e += 1) N != (I = p[e]).anIndexes[s] && (N = I.anIndexes[s], O = L.splice(Math.floor(Math.random() * L.length), 1)[0]), I.anIndexes[s] = O
          }
          t.yOffset = t.finalLineHeight || 1.2 * t.finalSize, t.ls = t.ls || 0, t.ascent = b.ascent * t.finalSize / 100
        }, TextProperty.prototype.updateDocumentData = function(t, e) {
          e = void 0 === e ? this.keysIndex : e;
          var i = this.copyData({}, this.data.d.k[e].s);
          i = this.copyData(i, t), this.data.d.k[e].s = i, this.recalculate(e), this.setCurrentData(i), this.elem.addDynamicProperty(this)
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
            i = Math.floor;

          function r(t, e) {
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
          return r.prototype = {
            getMult: function(r) {
              this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
              var n = 0,
                s = 0,
                a = 1,
                o = 1;
              this.ne.v > 0 ? n = this.ne.v / 100 : s = -this.ne.v / 100, this.xe.v > 0 ? a = 1 - this.xe.v / 100 : o = 1 + this.xe.v / 100;
              var l = BezierFactory.getBezierEasing(n, s, a, o).get,
                h = 0,
                p = this.finalS,
                c = this.finalE,
                u = this.data.sh;
              if (2 === u) h = l(h = c === p ? r >= c ? 1 : 0 : t(0, e(.5 / (c - p) + (r - p) / (c - p), 1)));
              else if (3 === u) h = l(h = c === p ? r >= c ? 0 : 1 : 1 - t(0, e(.5 / (c - p) + (r - p) / (c - p), 1)));
              else if (4 === u) c === p ? h = 0 : (h = t(0, e(.5 / (c - p) + (r - p) / (c - p), 1))) < .5 ? h *= 2 : h = 1 - 2 * (h - .5), h = l(h);
              else if (5 === u) {
                if (c === p) h = 0;
                else {
                  var f = c - p,
                    d = -f / 2 + (r = e(t(0, r + .5 - p), c - p)),
                    m = f / 2;
                  h = Math.sqrt(1 - d * d / (m * m))
                }
                h = l(h)
              } else 6 === u ? (c === p ? h = 0 : (r = e(t(0, r + .5 - p), c - p), h = (1 + Math.cos(Math.PI + 2 * Math.PI * r / (c - p))) / 2), h = l(h)) : (r >= i(p) && (h = t(0, e(r - p < 0 ? e(c, 1) - (p - r) : c - r, 1))), h = l(h));
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
                i = this.o.v / e,
                r = this.s.v / e + i,
                n = this.e.v / e + i;
              if (r > n) {
                var s = r;
                r = n, n = s
              }
              this.finalS = r, this.finalE = n
            }
          }, extendPrototype([DynamicPropertyContainer], r), {
            getTextSelectorProp: function(t, e, i) {
              return new r(t, e, i)
            }
          }
        }();

        function TextAnimatorDataProperty(t, e, i) {
          var r = {
              propType: !1
            },
            n = PropertyFactory.getProp,
            s = e.a;
          this.a = {
            r: s.r ? n(t, s.r, 0, degToRads, i) : r,
            rx: s.rx ? n(t, s.rx, 0, degToRads, i) : r,
            ry: s.ry ? n(t, s.ry, 0, degToRads, i) : r,
            sk: s.sk ? n(t, s.sk, 0, degToRads, i) : r,
            sa: s.sa ? n(t, s.sa, 0, degToRads, i) : r,
            s: s.s ? n(t, s.s, 1, .01, i) : r,
            a: s.a ? n(t, s.a, 1, 0, i) : r,
            o: s.o ? n(t, s.o, 0, .01, i) : r,
            p: s.p ? n(t, s.p, 1, 0, i) : r,
            sw: s.sw ? n(t, s.sw, 0, 0, i) : r,
            sc: s.sc ? n(t, s.sc, 1, 0, i) : r,
            fc: s.fc ? n(t, s.fc, 1, 0, i) : r,
            fh: s.fh ? n(t, s.fh, 0, 0, i) : r,
            fs: s.fs ? n(t, s.fs, 0, .01, i) : r,
            fb: s.fb ? n(t, s.fb, 0, .01, i) : r,
            t: s.t ? n(t, s.t, 0, 0, i) : r
          }, this.s = TextSelectorProp.getTextSelectorProp(t, e.s, i), this.s.t = e.s.t
        }

        function TextAnimatorProperty(t, e, i) {
          this._isFirstFrame = !0, this._hasMaskedPath = !1, this._frameId = -1, this._textData = t, this._renderType = e, this._elem = i, this._animatorsData = createSizedArray(this._textData.a.length), this._pathData = {}, this._moreOptions = {
            alignment: {}
          }, this.renderedLetters = [], this.lettersChangedFlag = !1, this.initDynamicPropertyContainer(i)
        }

        function ITextElement() {}
        TextAnimatorProperty.prototype.searchProperties = function() {
          var t, e, i = this._textData.a.length,
            r = PropertyFactory.getProp;
          for (t = 0; t < i; t += 1) e = this._textData.a[t], this._animatorsData[t] = new TextAnimatorDataProperty(this._elem, e, this);
          this._textData.p && "m" in this._textData.p ? (this._pathData = {
            a: r(this._elem, this._textData.p.a, 0, 0, this),
            f: r(this._elem, this._textData.p.f, 0, 0, this),
            l: r(this._elem, this._textData.p.l, 0, 0, this),
            r: r(this._elem, this._textData.p.r, 0, 0, this),
            p: r(this._elem, this._textData.p.p, 0, 0, this),
            m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
          }, this._hasMaskedPath = !0) : this._hasMaskedPath = !1, this._moreOptions.alignment = r(this._elem, this._textData.m.a, 1, 0, this)
        }, TextAnimatorProperty.prototype.getMeasures = function(t, e) {
          if (this.lettersChangedFlag = e, this._mdf || this._isFirstFrame || e || this._hasMaskedPath && this._pathData.m._mdf) {
            this._isFirstFrame = !1;
            var i, r, n, s, a, o, l, h, p, c, u, f, d, m, y, g, v, b, x, P = this._moreOptions.alignment.v,
              E = this._animatorsData,
              S = this._textData,
              C = this.mHelper,
              T = this._renderType,
              A = this.renderedLetters.length,
              w = t.l;
            if (this._hasMaskedPath) {
              if (x = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
                var k, D = x.v;
                for (this._pathData.r.v && (D = D.reverse()), a = {
                    tLength: 0,
                    segments: []
                  }, s = D._length - 1, g = 0, n = 0; n < s; n += 1) k = bez.buildBezierData(D.v[n], D.v[n + 1], [D.o[n][0] - D.v[n][0], D.o[n][1] - D.v[n][1]], [D.i[n + 1][0] - D.v[n + 1][0], D.i[n + 1][1] - D.v[n + 1][1]]), a.tLength += k.segmentLength, a.segments.push(k), g += k.segmentLength;
                n = s, x.v.c && (k = bez.buildBezierData(D.v[n], D.v[0], [D.o[n][0] - D.v[n][0], D.o[n][1] - D.v[n][1]], [D.i[0][0] - D.v[0][0], D.i[0][1] - D.v[0][1]]), a.tLength += k.segmentLength, a.segments.push(k), g += k.segmentLength), this._pathData.pi = a
              }
              if (a = this._pathData.pi, o = this._pathData.f.v, u = 0, c = 1, h = 0, p = !0, m = a.segments, o < 0 && x.v.c)
                for (a.tLength < Math.abs(o) && (o = -Math.abs(o) % a.tLength), c = (d = m[u = m.length - 1].points).length - 1; o < 0;) o += d[c].partialLength, (c -= 1) < 0 && (c = (d = m[u -= 1].points).length - 1);
              f = (d = m[u].points)[c - 1], y = (l = d[c]).partialLength
            }
            s = w.length, i = 0, r = 0;
            var M, _, F, I, V, B = 1.2 * t.finalSize * .714,
              R = !0;
            F = E.length;
            var L, O, N, G, z, j, H, q, $, W, U, Y, X = -1,
              J = o,
              K = u,
              Z = c,
              Q = -1,
              tt = "",
              et = this.defaultPropsArray;
            if (2 === t.j || 1 === t.j) {
              var it = 0,
                rt = 0,
                nt = 2 === t.j ? -.5 : -1,
                st = 0,
                at = !0;
              for (n = 0; n < s; n += 1)
                if (w[n].n) {
                  for (it && (it += rt); st < n;) w[st].animatorJustifyOffset = it, st += 1;
                  it = 0, at = !0
                } else {
                  for (_ = 0; _ < F; _ += 1)(M = E[_].a).t.propType && (at && 2 === t.j && (rt += M.t.v * nt), (V = E[_].s.getMult(w[n].anIndexes[_], S.a[_].s.totalChars)).length ? it += M.t.v * V[0] * nt : it += M.t.v * V * nt);
                  at = !1
                } for (it && (it += rt); st < n;) w[st].animatorJustifyOffset = it, st += 1
            }
            for (n = 0; n < s; n += 1) {
              if (C.reset(), G = 1, w[n].n) i = 0, r += t.yOffset, r += R ? 1 : 0, o = J, R = !1, this._hasMaskedPath && (c = Z, f = (d = m[u = K].points)[c - 1], y = (l = d[c]).partialLength, h = 0), tt = "", U = "", $ = "", Y = "", et = this.defaultPropsArray;
              else {
                if (this._hasMaskedPath) {
                  if (Q !== w[n].line) {
                    switch (t.j) {
                      case 1:
                        o += g - t.lineWidths[w[n].line];
                        break;
                      case 2:
                        o += (g - t.lineWidths[w[n].line]) / 2
                    }
                    Q = w[n].line
                  }
                  X !== w[n].ind && (w[X] && (o += w[X].extra), o += w[n].an / 2, X = w[n].ind), o += P[0] * w[n].an * .005;
                  var ot = 0;
                  for (_ = 0; _ < F; _ += 1)(M = E[_].a).p.propType && ((V = E[_].s.getMult(w[n].anIndexes[_], S.a[_].s.totalChars)).length ? ot += M.p.v[0] * V[0] : ot += M.p.v[0] * V), M.a.propType && ((V = E[_].s.getMult(w[n].anIndexes[_], S.a[_].s.totalChars)).length ? ot += M.a.v[0] * V[0] : ot += M.a.v[0] * V);
                  for (p = !0, this._pathData.a.v && (o = .5 * w[0].an + (g - this._pathData.f.v - .5 * w[0].an - .5 * w[w.length - 1].an) * X / (s - 1), o += this._pathData.f.v); p;) h + y >= o + ot || !d ? (v = (o + ot - h) / l.partialLength, O = f.point[0] + (l.point[0] - f.point[0]) * v, N = f.point[1] + (l.point[1] - f.point[1]) * v, C.translate(-P[0] * w[n].an * .005, -P[1] * B * .01), p = !1) : d && (h += l.partialLength, (c += 1) >= d.length && (c = 0, m[u += 1] ? d = m[u].points : x.v.c ? (c = 0, d = m[u = 0].points) : (h -= l.partialLength, d = null)), d && (f = l, y = (l = d[c]).partialLength));
                  L = w[n].an / 2 - w[n].add, C.translate(-L, 0, 0)
                } else L = w[n].an / 2 - w[n].add, C.translate(-L, 0, 0), C.translate(-P[0] * w[n].an * .005, -P[1] * B * .01, 0);
                for (_ = 0; _ < F; _ += 1)(M = E[_].a).t.propType && (V = E[_].s.getMult(w[n].anIndexes[_], S.a[_].s.totalChars), 0 === i && 0 === t.j || (this._hasMaskedPath ? V.length ? o += M.t.v * V[0] : o += M.t.v * V : V.length ? i += M.t.v * V[0] : i += M.t.v * V));
                for (t.strokeWidthAnim && (j = t.sw || 0), t.strokeColorAnim && (z = t.sc ? [t.sc[0], t.sc[1], t.sc[2]] : [0, 0, 0]), t.fillColorAnim && t.fc && (H = [t.fc[0], t.fc[1], t.fc[2]]), _ = 0; _ < F; _ += 1)(M = E[_].a).a.propType && ((V = E[_].s.getMult(w[n].anIndexes[_], S.a[_].s.totalChars)).length ? C.translate(-M.a.v[0] * V[0], -M.a.v[1] * V[1], M.a.v[2] * V[2]) : C.translate(-M.a.v[0] * V, -M.a.v[1] * V, M.a.v[2] * V));
                for (_ = 0; _ < F; _ += 1)(M = E[_].a).s.propType && ((V = E[_].s.getMult(w[n].anIndexes[_], S.a[_].s.totalChars)).length ? C.scale(1 + (M.s.v[0] - 1) * V[0], 1 + (M.s.v[1] - 1) * V[1], 1) : C.scale(1 + (M.s.v[0] - 1) * V, 1 + (M.s.v[1] - 1) * V, 1));
                for (_ = 0; _ < F; _ += 1) {
                  if (M = E[_].a, V = E[_].s.getMult(w[n].anIndexes[_], S.a[_].s.totalChars), M.sk.propType && (V.length ? C.skewFromAxis(-M.sk.v * V[0], M.sa.v * V[1]) : C.skewFromAxis(-M.sk.v * V, M.sa.v * V)), M.r.propType && (V.length ? C.rotateZ(-M.r.v * V[2]) : C.rotateZ(-M.r.v * V)), M.ry.propType && (V.length ? C.rotateY(M.ry.v * V[1]) : C.rotateY(M.ry.v * V)), M.rx.propType && (V.length ? C.rotateX(M.rx.v * V[0]) : C.rotateX(M.rx.v * V)), M.o.propType && (V.length ? G += (M.o.v * V[0] - G) * V[0] : G += (M.o.v * V - G) * V), t.strokeWidthAnim && M.sw.propType && (V.length ? j += M.sw.v * V[0] : j += M.sw.v * V), t.strokeColorAnim && M.sc.propType)
                    for (q = 0; q < 3; q += 1) V.length ? z[q] += (M.sc.v[q] - z[q]) * V[0] : z[q] += (M.sc.v[q] - z[q]) * V;
                  if (t.fillColorAnim && t.fc) {
                    if (M.fc.propType)
                      for (q = 0; q < 3; q += 1) V.length ? H[q] += (M.fc.v[q] - H[q]) * V[0] : H[q] += (M.fc.v[q] - H[q]) * V;
                    M.fh.propType && (H = V.length ? addHueToRGB(H, M.fh.v * V[0]) : addHueToRGB(H, M.fh.v * V)), M.fs.propType && (H = V.length ? addSaturationToRGB(H, M.fs.v * V[0]) : addSaturationToRGB(H, M.fs.v * V)), M.fb.propType && (H = V.length ? addBrightnessToRGB(H, M.fb.v * V[0]) : addBrightnessToRGB(H, M.fb.v * V))
                  }
                }
                for (_ = 0; _ < F; _ += 1)(M = E[_].a).p.propType && (V = E[_].s.getMult(w[n].anIndexes[_], S.a[_].s.totalChars), this._hasMaskedPath ? V.length ? C.translate(0, M.p.v[1] * V[0], -M.p.v[2] * V[1]) : C.translate(0, M.p.v[1] * V, -M.p.v[2] * V) : V.length ? C.translate(M.p.v[0] * V[0], M.p.v[1] * V[1], -M.p.v[2] * V[2]) : C.translate(M.p.v[0] * V, M.p.v[1] * V, -M.p.v[2] * V));
                if (t.strokeWidthAnim && ($ = j < 0 ? 0 : j), t.strokeColorAnim && (W = "rgb(" + Math.round(255 * z[0]) + "," + Math.round(255 * z[1]) + "," + Math.round(255 * z[2]) + ")"), t.fillColorAnim && t.fc && (U = "rgb(" + Math.round(255 * H[0]) + "," + Math.round(255 * H[1]) + "," + Math.round(255 * H[2]) + ")"), this._hasMaskedPath) {
                  if (C.translate(0, -t.ls), C.translate(0, P[1] * B * .01 + r, 0), this._pathData.p.v) {
                    b = (l.point[1] - f.point[1]) / (l.point[0] - f.point[0]);
                    var lt = 180 * Math.atan(b) / Math.PI;
                    l.point[0] < f.point[0] && (lt += 180), C.rotate(-lt * Math.PI / 180)
                  }
                  C.translate(O, N, 0), o -= P[0] * w[n].an * .005, w[n + 1] && X !== w[n + 1].ind && (o += w[n].an / 2, o += .001 * t.tr * t.finalSize)
                } else {
                  switch (C.translate(i, r, 0), t.ps && C.translate(t.ps[0], t.ps[1] + t.ascent, 0), t.j) {
                    case 1:
                      C.translate(w[n].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[w[n].line]), 0, 0);
                      break;
                    case 2:
                      C.translate(w[n].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[w[n].line]) / 2, 0, 0)
                  }
                  C.translate(0, -t.ls), C.translate(L, 0, 0), C.translate(P[0] * w[n].an * .005, P[1] * B * .01, 0), i += w[n].l + .001 * t.tr * t.finalSize
                }
                "html" === T ? tt = C.toCSS() : "svg" === T ? tt = C.to2dCSS() : et = [C.props[0], C.props[1], C.props[2], C.props[3], C.props[4], C.props[5], C.props[6], C.props[7], C.props[8], C.props[9], C.props[10], C.props[11], C.props[12], C.props[13], C.props[14], C.props[15]], Y = G
              }
              A <= n ? (I = new LetterProps(Y, $, W, U, tt, et), this.renderedLetters.push(I), A += 1, this.lettersChangedFlag = !0) : (I = this.renderedLetters[n], this.lettersChangedFlag = I.update(Y, $, W, U, tt, et) || this.lettersChangedFlag)
            }
          }
        }, TextAnimatorProperty.prototype.getValue = function() {
          this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties())
        }, TextAnimatorProperty.prototype.mHelper = new Matrix, TextAnimatorProperty.prototype.defaultPropsArray = [], extendPrototype([DynamicPropertyContainer], TextAnimatorProperty), ITextElement.prototype.initElement = function(t, e, i) {
          this.lettersChangedFlag = !0, this.initFrame(), this.initBaseData(t, e, i), this.textProperty = new TextProperty(this, t.t, this.dynamicProperties), this.textAnimator = new TextAnimatorProperty(t.t, this.renderType, this), this.initTransform(t, e, i), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties)
        }, ITextElement.prototype.prepareFrame = function(t) {
          this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange)
        }, ITextElement.prototype.createPathShape = function(t, e) {
          var i, r, n = e.length,
            s = "";
          for (i = 0; i < n; i += 1) "sh" === e[i].ty && (r = e[i].ks.k, s += buildShapeString(r, r.i.length, !0, t));
          return s
        }, ITextElement.prototype.updateDocumentData = function(t, e) {
          this.textProperty.updateDocumentData(t, e)
        }, ITextElement.prototype.canResizeFont = function(t) {
          this.textProperty.canResizeFont(t)
        }, ITextElement.prototype.setMinimumFontSize = function(t) {
          this.textProperty.setMinimumFontSize(t)
        }, ITextElement.prototype.applyTextPropertiesToMatrix = function(t, e, i, r, n) {
          switch (t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0), e.translate(0, -t.ls, 0), t.j) {
            case 1:
              e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[i]), 0, 0);
              break;
            case 2:
              e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[i]) / 2, 0, 0)
          }
          e.translate(r, n, 0)
        }, ITextElement.prototype.buildColor = function(t) {
          return "rgb(" + Math.round(255 * t[0]) + "," + Math.round(255 * t[1]) + "," + Math.round(255 * t[2]) + ")"
        }, ITextElement.prototype.emptyProp = new LetterProps, ITextElement.prototype.destroy = function() {}, ITextElement.prototype.validateText = function() {
          (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), this.textProperty._isFirstFrame = !1, this.textProperty._mdf = !1)
        };
        var emptyShapeData = {
          shapes: []
        };

        function SVGTextLottieElement(t, e, i) {
          this.textSpans = [], this.renderType = "svg", this.initElement(t, e, i)
        }

        function ISolidElement(t, e, i) {
          this.initElement(t, e, i)
        }

        function NullElement(t, e, i) {
          this.initFrame(), this.initBaseData(t, e, i), this.initFrame(), this.initTransform(t, e, i), this.initHierarchy()
        }

        function SVGRendererBase() {}

        function ICompElement() {}

        function SVGCompElement(t, e, i) {
          this.layers = t.layers, this.supports3d = !0, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t, e, i), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
            _placeholder: !0
          }
        }

        function SVGRenderer(t, e) {
          this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.svgElement = createNS("svg");
          var i = "";
          if (e && e.title) {
            var r = createNS("title"),
              n = createElementID();
            r.setAttribute("id", n), r.textContent = e.title, this.svgElement.appendChild(r), i += n
          }
          if (e && e.description) {
            var s = createNS("desc"),
              a = createElementID();
            s.setAttribute("id", a), s.textContent = e.description, this.svgElement.appendChild(s), i += " " + a
          }
          i && this.svgElement.setAttribute("aria-labelledby", i);
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
          for (var e = 0, i = t.length, r = [], n = ""; e < i;) t[e] === String.fromCharCode(13) || t[e] === String.fromCharCode(3) ? (r.push(n), n = "") : n += t[e], e += 1;
          return r.push(n), r
        }, SVGTextLottieElement.prototype.buildShapeData = function(t, e) {
          if (t.shapes && t.shapes.length) {
            var i = t.shapes[0];
            if (i.it) {
              var r = i.it[i.it.length - 1];
              r.s && (r.s.k[0] = e, r.s.k[1] = e)
            }
          }
          return t
        }, SVGTextLottieElement.prototype.buildNewText = function() {
          var t, e;
          this.addDynamicProperty(this);
          var i = this.textProperty.currentData;
          this.renderedLetters = createSizedArray(i ? i.l.length : 0), i.fc ? this.layerElement.setAttribute("fill", this.buildColor(i.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"), i.sc && (this.layerElement.setAttribute("stroke", this.buildColor(i.sc)), this.layerElement.setAttribute("stroke-width", i.sw)), this.layerElement.setAttribute("font-size", i.finalSize);
          var r = this.globalData.fontManager.getFontByName(i.f);
          if (r.fClass) this.layerElement.setAttribute("class", r.fClass);
          else {
            this.layerElement.setAttribute("font-family", r.fFamily);
            var n = i.fWeight,
              s = i.fStyle;
            this.layerElement.setAttribute("font-style", s), this.layerElement.setAttribute("font-weight", n)
          }
          this.layerElement.setAttribute("aria-label", i.t);
          var a, o = i.l || [],
            l = !!this.globalData.fontManager.chars;
          e = o.length;
          var h = this.mHelper,
            p = this.data.singleShape,
            c = 0,
            u = 0,
            f = !0,
            d = .001 * i.tr * i.finalSize;
          if (!p || l || i.sz) {
            var m, y = this.textSpans.length;
            for (t = 0; t < e; t += 1) {
              if (this.textSpans[t] || (this.textSpans[t] = {
                  span: null,
                  childSpan: null,
                  glyph: null
                }), !l || !p || 0 === t) {
                if (a = y > t ? this.textSpans[t].span : createNS(l ? "g" : "text"), y <= t) {
                  if (a.setAttribute("stroke-linecap", "butt"), a.setAttribute("stroke-linejoin", "round"), a.setAttribute("stroke-miterlimit", "4"), this.textSpans[t].span = a, l) {
                    var g = createNS("g");
                    a.appendChild(g), this.textSpans[t].childSpan = g
                  }
                  this.textSpans[t].span = a, this.layerElement.appendChild(a)
                }
                a.style.display = "inherit"
              }
              if (h.reset(), p && (o[t].n && (c = -d, u += i.yOffset, u += f ? 1 : 0, f = !1), this.applyTextPropertiesToMatrix(i, h, o[t].line, c, u), c += o[t].l || 0, c += d), l) {
                var v;
                if (1 === (m = this.globalData.fontManager.getCharData(i.finalText[t], r.fStyle, this.globalData.fontManager.getFontByName(i.f).fFamily)).t) v = new SVGCompElement(m.data, this.globalData, this);
                else {
                  var b = emptyShapeData;
                  m.data && m.data.shapes && (b = this.buildShapeData(m.data, i.finalSize)), v = new SVGShapeElement(b, this.globalData, this)
                }
                if (this.textSpans[t].glyph) {
                  var x = this.textSpans[t].glyph;
                  this.textSpans[t].childSpan.removeChild(x.layerElement), x.destroy()
                }
                this.textSpans[t].glyph = v, v._debug = !0, v.prepareFrame(0), v.renderFrame(), this.textSpans[t].childSpan.appendChild(v.layerElement), 1 === m.t && this.textSpans[t].childSpan.setAttribute("transform", "scale(" + i.finalSize / 100 + "," + i.finalSize / 100 + ")")
              } else p && a.setAttribute("transform", "translate(" + h.props[12] + "," + h.props[13] + ")"), a.textContent = o[t].val, a.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve")
            }
            p && a && a.setAttribute("d", "")
          } else {
            var P = this.textContainer,
              E = "start";
            switch (i.j) {
              case 1:
                E = "end";
                break;
              case 2:
                E = "middle";
                break;
              default:
                E = "start"
            }
            P.setAttribute("text-anchor", E), P.setAttribute("letter-spacing", d);
            var S = this.buildTextContents(i.finalText);
            for (e = S.length, u = i.ps ? i.ps[1] + i.ascent : 0, t = 0; t < e; t += 1)(a = this.textSpans[t].span || createNS("tspan")).textContent = S[t], a.setAttribute("x", 0), a.setAttribute("y", u), a.style.display = "inherit", P.appendChild(a), this.textSpans[t] || (this.textSpans[t] = {
              span: null,
              glyph: null
            }), this.textSpans[t].span = a, u += i.finalLineHeight;
            this.layerElement.appendChild(P)
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
          var t, e, i = this.textSpans.length;
          for (this.renderedFrame = this.comp.renderedFrame, t = 0; t < i; t += 1)(e = this.textSpans[t].glyph) && (e.prepareFrame(this.comp.renderedFrame - this.data.st), e._mdf && (this._mdf = !0))
        }, SVGTextLottieElement.prototype.renderInnerContent = function() {
          if (this.validateText(), (!this.data.singleShape || this._mdf) && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
            var t, e;
            this._sizeChanged = !0;
            var i, r, n, s = this.textAnimator.renderedLetters,
              a = this.textProperty.currentData.l;
            for (e = a.length, t = 0; t < e; t += 1) a[t].n || (i = s[t], r = this.textSpans[t].span, (n = this.textSpans[t].glyph) && n.renderFrame(), i._mdf.m && r.setAttribute("transform", i.m), i._mdf.o && r.setAttribute("opacity", i.o), i._mdf.sw && r.setAttribute("stroke-width", i.sw), i._mdf.sc && r.setAttribute("stroke", i.sc), i._mdf.fc && r.setAttribute("fill", i.fc))
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
          var i = createNS("clipPath"),
            r = createNS("rect");
          r.setAttribute("width", t.w), r.setAttribute("height", t.h), r.setAttribute("x", 0), r.setAttribute("y", 0);
          var n = createElementID();
          i.setAttribute("id", n), i.appendChild(r), this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + n + ")"), e.appendChild(i), this.layers = t.layers, this.elements = createSizedArray(t.layers.length)
        }, SVGRendererBase.prototype.destroy = function() {
          var t;
          this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.layerElement = null, this.globalData.defs = null;
          var e = this.layers ? this.layers.length : 0;
          for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy && this.elements[t].destroy();
          this.elements.length = 0, this.destroyed = !0, this.animationItem = null
        }, SVGRendererBase.prototype.updateContainerSize = function() {}, SVGRendererBase.prototype.findIndexByInd = function(t) {
          var e = 0,
            i = this.layers.length;
          for (e = 0; e < i; e += 1)
            if (this.layers[e].ind === t) return e;
          return -1
        }, SVGRendererBase.prototype.buildItem = function(t) {
          var e = this.elements;
          if (!e[t] && 99 !== this.layers[t].ty) {
            e[t] = !0;
            var i = this.createItem(this.layers[t]);
            if (e[t] = i, getExpressionsPlugin() && (0 === this.layers[t].ty && this.globalData.projectInterface.registerComposition(i), i.initExpressions()), this.appendElementInPos(i, t), this.layers[t].tt) {
              var r = "tp" in this.layers[t] ? this.findIndexByInd(this.layers[t].tp) : t - 1;
              if (-1 === r) return;
              if (this.elements[r] && !0 !== this.elements[r]) {
                var n = e[r].getMatte(this.layers[t].tt);
                i.setMatte(n)
              } else this.buildItem(r), this.addPendingElement(i)
            }
          }
        }, SVGRendererBase.prototype.checkPendingElements = function() {
          for (; this.pendingElements.length;) {
            var t = this.pendingElements.pop();
            if (t.checkParenting(), t.data.tt)
              for (var e = 0, i = this.elements.length; e < i;) {
                if (this.elements[e] === t) {
                  var r = "tp" in t.data ? this.findIndexByInd(t.data.tp) : e - 1,
                    n = this.elements[r].getMatte(this.layers[e].tt);
                  t.setMatte(n);
                  break
                }
                e += 1
              }
          }
        }, SVGRendererBase.prototype.renderFrame = function(t) {
          if (this.renderedFrame !== t && !this.destroyed) {
            var e;
            null === t ? t = this.renderedFrame : this.renderedFrame = t, this.globalData.frameNum = t, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = t, this.globalData._mdf = !1;
            var i = this.layers.length;
            for (this.completeLayers || this.checkLayers(t), e = i - 1; e >= 0; e -= 1)(this.completeLayers || this.elements[e]) && this.elements[e].prepareFrame(t - this.layers[e].st);
            if (this.globalData._mdf)
              for (e = 0; e < i; e += 1)(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame()
          }
        }, SVGRendererBase.prototype.appendElementInPos = function(t, e) {
          var i = t.getBaseElement();
          if (i) {
            for (var r, n = 0; n < e;) this.elements[n] && !0 !== this.elements[n] && this.elements[n].getBaseElement() && (r = this.elements[n].getBaseElement()), n += 1;
            r ? this.layerElement.insertBefore(i, r) : this.layerElement.appendChild(i)
          }
        }, SVGRendererBase.prototype.hide = function() {
          this.layerElement.style.display = "none"
        }, SVGRendererBase.prototype.show = function() {
          this.layerElement.style.display = "block"
        }, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement], ICompElement), ICompElement.prototype.initElement = function(t, e, i) {
          this.initFrame(), this.initBaseData(t, e, i), this.initTransform(t, e, i), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), !this.data.xt && e.progressiveLoad || this.buildAllItems(), this.hide()
        }, ICompElement.prototype.prepareFrame = function(t) {
          if (this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.isInRange || this.data.xt) {
            if (this.tm._placeholder) this.renderedFrame = t / this.data.sr;
            else {
              var e = this.tm.v;
              e === this.data.op && (e = this.data.op - 1), this.renderedFrame = e
            }
            var i, r = this.elements.length;
            for (this.completeLayers || this.checkLayers(this.renderedFrame), i = r - 1; i >= 0; i -= 1)(this.completeLayers || this.elements[i]) && (this.elements[i].prepareFrame(this.renderedFrame - this.layers[i].st), this.elements[i]._mdf && (this._mdf = !0))
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
            var e, i = t.length,
              r = "_";
            for (e = 0; e < i; e += 1) r += t[e].transform.key + "_";
            var n = this.sequences[r];
            return n || (n = {
              transforms: [].concat(t),
              finalTransform: new Matrix,
              _mdf: !1
            }, this.sequences[r] = n, this.sequenceList.push(n)), n
          },
          processSequence: function(t, e) {
            for (var i = 0, r = t.transforms.length, n = e; i < r && !e;) {
              if (t.transforms[i].transform.mProps._mdf) {
                n = !0;
                break
              }
              i += 1
            }
            if (n)
              for (t.finalTransform.reset(), i = r - 1; i >= 0; i -= 1) t.finalTransform.multiply(t.transforms[i].transform.mProps.v);
            t._mdf = n
          },
          processSequences: function(t) {
            var e, i = this.sequenceList.length;
            for (e = 0; e < i; e += 1) this.processSequence(this.sequenceList[e], t)
          },
          getNewKey: function() {
            return this.transform_key_count += 1, "_" + this.transform_key_count
          }
        };
        var lumaLoader = function() {
          var t = "__lottie_element_luma_buffer",
            e = null,
            i = null,
            r = null;

          function n() {
            var n, s, a;
            e || (n = createNS("svg"), s = createNS("filter"), a = createNS("feColorMatrix"), s.setAttribute("id", t), a.setAttribute("type", "matrix"), a.setAttribute("color-interpolation-filters", "sRGB"), a.setAttribute("values", "0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0"), s.appendChild(a), n.appendChild(s), n.setAttribute("id", t + "_svg"), featureSupport.svgLumaHidden && (n.style.display = "none"), r = n, document.body.appendChild(r), e = createTag("canvas"), (i = e.getContext("2d")).filter = "url(#" + t + ")", i.fillStyle = "rgba(0,0,0,0)", i.fillRect(0, 0, 1, 1))
          }
          return {
            load: n,
            get: function(r) {
              return e || n(), e.width = r.width, e.height = r.height, i.filter = "url(#" + t + ")", e
            }
          }
        };

        function createCanvas(t, e) {
          if (featureSupport.offscreenCanvas) return new OffscreenCanvas(t, e);
          var i = createTag("canvas");
          return i.width = t, i.height = e, i
        }
        var assetLoader = {
            loadLumaCanvas: lumaLoader.load,
            getLumaCanvas: lumaLoader.get,
            createCanvas
          },
          registeredEffects = {};

        function CVEffects(t) {
          var e, i, r = t.data.ef ? t.data.ef.length : 0;
          for (this.filters = [], e = 0; e < r; e += 1) {
            i = null;
            var n = t.data.ef[e].ty;
            registeredEffects[n] && (i = new(0, registeredEffects[n].effect)(t.effectsManager.effectElements[e], t)), i && this.filters.push(i)
          }
          this.filters.length && t.addRenderableComponent(this)
        }

        function registerEffect(t, e) {
          registeredEffects[t] = {
            effect: e
          }
        }

        function CVMaskElement(t, e) {
          var i;
          this.data = t, this.element = e, this.masksProperties = this.data.masksProperties || [], this.viewData = createSizedArray(this.masksProperties.length);
          var r = this.masksProperties.length,
            n = !1;
          for (i = 0; i < r; i += 1) "n" !== this.masksProperties[i].mode && (n = !0), this.viewData[i] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[i], 3);
          this.hasMasks = n, n && this.element.addRenderableComponent(this)
        }

        function CVBaseElement() {}
        CVEffects.prototype.renderFrame = function(t) {
          var e, i = this.filters.length;
          for (e = 0; e < i; e += 1) this.filters[e].renderFrame(t)
        }, CVEffects.prototype.getEffects = function(t) {
          var e, i = this.filters.length,
            r = [];
          for (e = 0; e < i; e += 1) this.filters[e].type === t && r.push(this.filters[e]);
          return r
        }, CVMaskElement.prototype.renderFrame = function() {
          if (this.hasMasks) {
            var t, e, i, r, n = this.element.finalTransform.mat,
              s = this.element.canvasContext,
              a = this.masksProperties.length;
            for (s.beginPath(), t = 0; t < a; t += 1)
              if ("n" !== this.masksProperties[t].mode) {
                var o;
                this.masksProperties[t].inv && (s.moveTo(0, 0), s.lineTo(this.element.globalData.compSize.w, 0), s.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h), s.lineTo(0, this.element.globalData.compSize.h), s.lineTo(0, 0)), r = this.viewData[t].v, e = n.applyToPointArray(r.v[0][0], r.v[0][1], 0), s.moveTo(e[0], e[1]);
                var l = r._length;
                for (o = 1; o < l; o += 1) i = n.applyToTriplePoints(r.o[o - 1], r.i[o], r.v[o]), s.bezierCurveTo(i[0], i[1], i[2], i[3], i[4], i[5]);
                i = n.applyToTriplePoints(r.o[o - 1], r.i[0], r.v[0]), s.bezierCurveTo(i[0], i[1], i[2], i[3], i[4], i[5])
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

        function CVShapeData(t, e, i, r) {
          this.styledShapes = [], this.tr = [0, 0, 0, 0, 0, 0];
          var n, s = 4;
          "rc" === e.ty ? s = 5 : "el" === e.ty ? s = 6 : "sr" === e.ty && (s = 7), this.sh = ShapePropertyFactory.getShapeProp(t, e, s, t);
          var a, o = i.length;
          for (n = 0; n < o; n += 1) i[n].closed || (a = {
            transforms: r.addTransformSequence(i[n].transforms),
            trNodes: []
          }, this.styledShapes.push(a), i[n].elements.push(a))
        }

        function CVShapeElement(t, e, i) {
          this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.itemsData = [], this.prevViewData = [], this.shapeModifiers = [], this.processedElements = [], this.transformsManager = new ShapeTransformManager, this.initElement(t, e, i)
        }

        function CVTextElement(t, e, i) {
          this.textSpans = [], this.yOffset = 0, this.fillColorAnim = !1, this.strokeColorAnim = !1, this.strokeWidthAnim = !1, this.stroke = !1, this.fill = !1, this.justifyOffset = 0, this.currentRender = null, this.renderType = "canvas", this.values = {
            fill: "rgba(0,0,0,0)",
            stroke: "rgba(0,0,0,0)",
            sWidth: 0,
            fValue: ""
          }, this.initElement(t, e, i)
        }

        function CVImageElement(t, e, i) {
          this.assetData = e.getAssetData(t.refId), this.img = e.imageLoader.getAsset(this.assetData), this.initElement(t, e, i)
        }

        function CVSolidElement(t, e, i) {
          this.initElement(t, e, i)
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

        function CVCompElement(t, e, i) {
          this.completeLayers = !1, this.layers = t.layers, this.pendingElements = [], this.elements = createSizedArray(this.layers.length), this.initElement(t, e, i), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
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

        function HSolidElement(t, e, i) {
          this.initElement(t, e, i)
        }

        function HShapeElement(t, e, i) {
          this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.shapesContainer = createNS("g"), this.initElement(t, e, i), this.prevViewData = [], this.currentBBox = {
            x: 999999,
            y: -999999,
            h: 0,
            w: 0
          }
        }

        function HTextElement(t, e, i) {
          this.textSpans = [], this.textPaths = [], this.currentBBox = {
            x: 999999,
            y: -999999,
            h: 0,
            w: 0
          }, this.renderType = "svg", this.isMasked = !1, this.initElement(t, e, i)
        }

        function HCameraElement(t, e, i) {
          this.initFrame(), this.initBaseData(t, e, i), this.initHierarchy();
          var r = PropertyFactory.getProp;
          if (this.pe = r(this, t.pe, 0, 0, this), t.ks.p.s ? (this.px = r(this, t.ks.p.x, 1, 0, this), this.py = r(this, t.ks.p.y, 1, 0, this), this.pz = r(this, t.ks.p.z, 1, 0, this)) : this.p = r(this, t.ks.p, 1, 0, this), t.ks.a && (this.a = r(this, t.ks.a, 1, 0, this)), t.ks.or.k.length && t.ks.or.k[0].to) {
            var n, s = t.ks.or.k.length;
            for (n = 0; n < s; n += 1) t.ks.or.k[n].to = null, t.ks.or.k[n].ti = null
          }
          this.or = r(this, t.ks.or, 1, degToRads, this), this.or.sh = !0, this.rx = r(this, t.ks.rx, 0, degToRads, this), this.ry = r(this, t.ks.ry, 0, degToRads, this), this.rz = r(this, t.ks.rz, 0, degToRads, this), this.mat = new Matrix, this._prevMat = new Matrix, this._isFirstFrame = !0, this.finalTransform = {
            mProp: this
          }
        }

        function HImageElement(t, e, i) {
          this.assetData = e.getAssetData(t.refId), this.initElement(t, e, i)
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

        function HCompElement(t, e, i) {
          this.layers = t.layers, this.supports3d = !t.hasMask, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t, e, i), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
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
              var i = assetLoader.createCanvas(t.canvas.width, t.canvas.height);
              this.buffers.push(i), this.data.tt >= 3 && !document._isProxy && assetLoader.loadLumaCanvas()
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
                var i = assetLoader.getLumaCanvas(this.canvasContext.canvas);
                i.getContext("2d").drawImage(this.canvasContext.canvas, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.drawImage(i, 0, 0)
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
          var i = {
              data: t,
              type: t.ty,
              preTransforms: this.transformsManager.addTransformSequence(e),
              transforms: [],
              elements: [],
              closed: !0 === t.hd
            },
            r = {};
          if ("fl" === t.ty || "st" === t.ty ? (r.c = PropertyFactory.getProp(this, t.c, 1, 255, this), r.c.k || (i.co = "rgb(" + bmFloor(r.c.v[0]) + "," + bmFloor(r.c.v[1]) + "," + bmFloor(r.c.v[2]) + ")")) : "gf" !== t.ty && "gs" !== t.ty || (r.s = PropertyFactory.getProp(this, t.s, 1, null, this), r.e = PropertyFactory.getProp(this, t.e, 1, null, this), r.h = PropertyFactory.getProp(this, t.h || {
              k: 0
            }, 0, .01, this), r.a = PropertyFactory.getProp(this, t.a || {
              k: 0
            }, 0, degToRads, this), r.g = new GradientProperty(this, t.g, this)), r.o = PropertyFactory.getProp(this, t.o, 0, .01, this), "st" === t.ty || "gs" === t.ty) {
            if (i.lc = lineCapEnum[t.lc || 2], i.lj = lineJoinEnum[t.lj || 2], 1 == t.lj && (i.ml = t.ml), r.w = PropertyFactory.getProp(this, t.w, 0, null, this), r.w.k || (i.wi = r.w.v), t.d) {
              var n = new DashProperty(this, t.d, "canvas", this);
              r.d = n, r.d.k || (i.da = r.d.dashArray, i.do = r.d.dashoffset[0])
            }
          } else i.r = 2 === t.r ? "evenodd" : "nonzero";
          return this.stylesList.push(i), r.style = i, r
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
          var e, i = this.stylesList.length;
          for (e = 0; e < i; e += 1) this.stylesList[e].closed || this.stylesList[e].transforms.push(t)
        }, CVShapeElement.prototype.removeTransformFromStyleList = function() {
          var t, e = this.stylesList.length;
          for (t = 0; t < e; t += 1) this.stylesList[t].closed || this.stylesList[t].transforms.pop()
        }, CVShapeElement.prototype.closeStyles = function(t) {
          var e, i = t.length;
          for (e = 0; e < i; e += 1) t[e].closed = !0
        }, CVShapeElement.prototype.searchShapes = function(t, e, i, r, n) {
          var s, a, o, l, h, p, c = t.length - 1,
            u = [],
            f = [],
            d = [].concat(n);
          for (s = c; s >= 0; s -= 1) {
            if ((l = this.searchProcessedElement(t[s])) ? e[s] = i[l - 1] : t[s]._shouldRender = r, "fl" === t[s].ty || "st" === t[s].ty || "gf" === t[s].ty || "gs" === t[s].ty) l ? e[s].style.closed = !1 : e[s] = this.createStyleElement(t[s], d), u.push(e[s].style);
            else if ("gr" === t[s].ty) {
              if (l)
                for (o = e[s].it.length, a = 0; a < o; a += 1) e[s].prevViewData[a] = e[s].it[a];
              else e[s] = this.createGroupElement(t[s]);
              this.searchShapes(t[s].it, e[s].it, e[s].prevViewData, r, d)
            } else "tr" === t[s].ty ? (l || (p = this.createTransformElement(t[s]), e[s] = p), d.push(e[s]), this.addTransformToStyleList(e[s])) : "sh" === t[s].ty || "rc" === t[s].ty || "el" === t[s].ty || "sr" === t[s].ty ? l || (e[s] = this.createShapeElement(t[s])) : "tm" === t[s].ty || "rd" === t[s].ty || "pb" === t[s].ty || "zz" === t[s].ty || "op" === t[s].ty ? (l ? (h = e[s]).closed = !1 : ((h = ShapeModifiers.getModifier(t[s].ty)).init(this, t[s]), e[s] = h, this.shapeModifiers.push(h)), f.push(h)) : "rp" === t[s].ty && (l ? (h = e[s]).closed = !0 : (h = ShapeModifiers.getModifier(t[s].ty), e[s] = h, h.init(this, t, s, e), this.shapeModifiers.push(h), r = !1), f.push(h));
            this.addProcessedElement(t[s], s + 1)
          }
          for (this.removeTransformFromStyleList(), this.closeStyles(u), c = f.length, s = 0; s < c; s += 1) f[s].closed = !0
        }, CVShapeElement.prototype.renderInnerContent = function() {
          this.transformHelper.opacity = 1, this.transformHelper._opMdf = !1, this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame), this.renderShape(this.transformHelper, this.shapesData, this.itemsData, !0)
        }, CVShapeElement.prototype.renderShapeTransform = function(t, e) {
          (t._opMdf || e.op._mdf || this._isFirstFrame) && (e.opacity = t.opacity, e.opacity *= e.op.v, e._opMdf = !0)
        }, CVShapeElement.prototype.drawLayer = function() {
          var t, e, i, r, n, s, a, o, l, h = this.stylesList.length,
            p = this.globalData.renderer,
            c = this.globalData.canvasContext;
          for (t = 0; t < h; t += 1)
            if (("st" !== (o = (l = this.stylesList[t]).type) && "gs" !== o || 0 !== l.wi) && l.data._shouldRender && 0 !== l.coOp && 0 !== this.globalData.currentGlobalAlpha) {
              for (p.save(), s = l.elements, "st" === o || "gs" === o ? (p.ctxStrokeStyle("st" === o ? l.co : l.grd), p.ctxLineWidth(l.wi), p.ctxLineCap(l.lc), p.ctxLineJoin(l.lj), p.ctxMiterLimit(l.ml || 0)) : p.ctxFillStyle("fl" === o ? l.co : l.grd), p.ctxOpacity(l.coOp), "st" !== o && "gs" !== o && c.beginPath(), p.ctxTransform(l.preTransforms.finalTransform.props), i = s.length, e = 0; e < i; e += 1) {
                for ("st" !== o && "gs" !== o || (c.beginPath(), l.da && (c.setLineDash(l.da), c.lineDashOffset = l.do)), n = (a = s[e].trNodes).length, r = 0; r < n; r += 1) "m" === a[r].t ? c.moveTo(a[r].p[0], a[r].p[1]) : "c" === a[r].t ? c.bezierCurveTo(a[r].pts[0], a[r].pts[1], a[r].pts[2], a[r].pts[3], a[r].pts[4], a[r].pts[5]) : c.closePath();
                "st" !== o && "gs" !== o || (p.ctxStroke(), l.da && c.setLineDash(this.dashResetter))
              }
              "st" !== o && "gs" !== o && this.globalData.renderer.ctxFill(l.r), p.restore()
            }
        }, CVShapeElement.prototype.renderShape = function(t, e, i, r) {
          var n, s;
          for (s = t, n = e.length - 1; n >= 0; n -= 1) "tr" === e[n].ty ? (s = i[n].transform, this.renderShapeTransform(t, s)) : "sh" === e[n].ty || "el" === e[n].ty || "rc" === e[n].ty || "sr" === e[n].ty ? this.renderPath(e[n], i[n]) : "fl" === e[n].ty ? this.renderFill(e[n], i[n], s) : "st" === e[n].ty ? this.renderStroke(e[n], i[n], s) : "gf" === e[n].ty || "gs" === e[n].ty ? this.renderGradientFill(e[n], i[n], s) : "gr" === e[n].ty ? this.renderShape(s, e[n].it, i[n].it) : e[n].ty;
          r && this.drawLayer()
        }, CVShapeElement.prototype.renderStyledShape = function(t, e) {
          if (this._isFirstFrame || e._mdf || t.transforms._mdf) {
            var i, r, n, s = t.trNodes,
              a = e.paths,
              o = a._length;
            s.length = 0;
            var l = t.transforms.finalTransform;
            for (n = 0; n < o; n += 1) {
              var h = a.shapes[n];
              if (h && h.v) {
                for (r = h._length, i = 1; i < r; i += 1) 1 === i && s.push({
                  t: "m",
                  p: l.applyToPointArray(h.v[0][0], h.v[0][1], 0)
                }), s.push({
                  t: "c",
                  pts: l.applyToTriplePoints(h.o[i - 1], h.i[i], h.v[i])
                });
                1 === r && s.push({
                  t: "m",
                  p: l.applyToPointArray(h.v[0][0], h.v[0][1], 0)
                }), h.c && r && (s.push({
                  t: "c",
                  pts: l.applyToTriplePoints(h.o[i - 1], h.i[0], h.v[0])
                }), s.push({
                  t: "z"
                }))
              }
            }
            t.trNodes = s
          }
        }, CVShapeElement.prototype.renderPath = function(t, e) {
          if (!0 !== t.hd && t._shouldRender) {
            var i, r = e.styledShapes.length;
            for (i = 0; i < r; i += 1) this.renderStyledShape(e.styledShapes[i], e.sh)
          }
        }, CVShapeElement.prototype.renderFill = function(t, e, i) {
          var r = e.style;
          (e.c._mdf || this._isFirstFrame) && (r.co = "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || i._opMdf || this._isFirstFrame) && (r.coOp = e.o.v * i.opacity)
        }, CVShapeElement.prototype.renderGradientFill = function(t, e, i) {
          var r, n = e.style;
          if (!n.grd || e.g._mdf || e.s._mdf || e.e._mdf || 1 !== t.t && (e.h._mdf || e.a._mdf)) {
            var s, a = this.globalData.canvasContext,
              o = e.s.v,
              l = e.e.v;
            if (1 === t.t) r = a.createLinearGradient(o[0], o[1], l[0], l[1]);
            else {
              var h = Math.sqrt(Math.pow(o[0] - l[0], 2) + Math.pow(o[1] - l[1], 2)),
                p = Math.atan2(l[1] - o[1], l[0] - o[0]),
                c = e.h.v;
              c >= 1 ? c = .99 : c <= -1 && (c = -.99);
              var u = h * c,
                f = Math.cos(p + e.a.v) * u + o[0],
                d = Math.sin(p + e.a.v) * u + o[1];
              r = a.createRadialGradient(f, d, 0, o[0], o[1], h)
            }
            var m = t.g.p,
              y = e.g.c,
              g = 1;
            for (s = 0; s < m; s += 1) e.g._hasOpacity && e.g._collapsable && (g = e.g.o[2 * s + 1]), r.addColorStop(y[4 * s] / 100, "rgba(" + y[4 * s + 1] + "," + y[4 * s + 2] + "," + y[4 * s + 3] + "," + g + ")");
            n.grd = r
          }
          n.coOp = e.o.v * i.opacity
        }, CVShapeElement.prototype.renderStroke = function(t, e, i) {
          var r = e.style,
            n = e.d;
          n && (n._mdf || this._isFirstFrame) && (r.da = n.dashArray, r.do = n.dashoffset[0]), (e.c._mdf || this._isFirstFrame) && (r.co = "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || i._opMdf || this._isFirstFrame) && (r.coOp = e.o.v * i.opacity), (e.w._mdf || this._isFirstFrame) && (r.wi = e.w.v)
        }, CVShapeElement.prototype.destroy = function() {
          this.shapesData = null, this.globalData = null, this.canvasContext = null, this.stylesList.length = 0, this.itemsData.length = 0
        }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement, ITextElement], CVTextElement), CVTextElement.prototype.tHelper = createTag("canvas").getContext("2d"), CVTextElement.prototype.buildNewText = function() {
          var t = this.textProperty.currentData;
          this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
          var e = !1;
          t.fc ? (e = !0, this.values.fill = this.buildColor(t.fc)) : this.values.fill = "rgba(0,0,0,0)", this.fill = e;
          var i = !1;
          t.sc && (i = !0, this.values.stroke = this.buildColor(t.sc), this.values.sWidth = t.sw);
          var r, n, s, a, o, l, h, p, c, u, f, d, m = this.globalData.fontManager.getFontByName(t.f),
            y = t.l,
            g = this.mHelper;
          this.stroke = i, this.values.fValue = t.finalSize + "px " + this.globalData.fontManager.getFontByName(t.f).fFamily, n = t.finalText.length;
          var v = this.data.singleShape,
            b = .001 * t.tr * t.finalSize,
            x = 0,
            P = 0,
            E = !0,
            S = 0;
          for (r = 0; r < n; r += 1) {
            a = (s = this.globalData.fontManager.getCharData(t.finalText[r], m.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily)) && s.data || {}, g.reset(), v && y[r].n && (x = -b, P += t.yOffset, P += E ? 1 : 0, E = !1), c = (h = a.shapes ? a.shapes[0].it : []).length, g.scale(t.finalSize / 100, t.finalSize / 100), v && this.applyTextPropertiesToMatrix(t, g, y[r].line, x, P), f = createSizedArray(c - 1);
            var C = 0;
            for (p = 0; p < c; p += 1)
              if ("sh" === h[p].ty) {
                for (l = h[p].ks.k.i.length, u = h[p].ks.k, d = [], o = 1; o < l; o += 1) 1 === o && d.push(g.applyToX(u.v[0][0], u.v[0][1], 0), g.applyToY(u.v[0][0], u.v[0][1], 0)), d.push(g.applyToX(u.o[o - 1][0], u.o[o - 1][1], 0), g.applyToY(u.o[o - 1][0], u.o[o - 1][1], 0), g.applyToX(u.i[o][0], u.i[o][1], 0), g.applyToY(u.i[o][0], u.i[o][1], 0), g.applyToX(u.v[o][0], u.v[o][1], 0), g.applyToY(u.v[o][0], u.v[o][1], 0));
                d.push(g.applyToX(u.o[o - 1][0], u.o[o - 1][1], 0), g.applyToY(u.o[o - 1][0], u.o[o - 1][1], 0), g.applyToX(u.i[0][0], u.i[0][1], 0), g.applyToY(u.i[0][0], u.i[0][1], 0), g.applyToX(u.v[0][0], u.v[0][1], 0), g.applyToY(u.v[0][0], u.v[0][1], 0)), f[C] = d, C += 1
              } v && (x += y[r].l, x += b), this.textSpans[S] ? this.textSpans[S].elem = f : this.textSpans[S] = {
              elem: f
            }, S += 1
          }
        }, CVTextElement.prototype.renderInnerContent = function() {
          var t, e, i, r, n, s;
          this.validateText(), this.canvasContext.font = this.values.fValue, this.globalData.renderer.ctxLineCap("butt"), this.globalData.renderer.ctxLineJoin("miter"), this.globalData.renderer.ctxMiterLimit(4), this.data.singleShape || this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
          var a, o = this.textAnimator.renderedLetters,
            l = this.textProperty.currentData.l;
          e = l.length;
          var h, p, c = null,
            u = null,
            f = null,
            d = this.globalData.renderer;
          for (t = 0; t < e; t += 1)
            if (!l[t].n) {
              if ((a = o[t]) && (d.save(), d.ctxTransform(a.p), d.ctxOpacity(a.o)), this.fill) {
                for (a && a.fc ? c !== a.fc && (d.ctxFillStyle(a.fc), c = a.fc) : c !== this.values.fill && (c = this.values.fill, d.ctxFillStyle(this.values.fill)), r = (h = this.textSpans[t].elem).length, this.globalData.canvasContext.beginPath(), i = 0; i < r; i += 1)
                  for (s = (p = h[i]).length, this.globalData.canvasContext.moveTo(p[0], p[1]), n = 2; n < s; n += 6) this.globalData.canvasContext.bezierCurveTo(p[n], p[n + 1], p[n + 2], p[n + 3], p[n + 4], p[n + 5]);
                this.globalData.canvasContext.closePath(), d.ctxFill()
              }
              if (this.stroke) {
                for (a && a.sw ? f !== a.sw && (f = a.sw, d.ctxLineWidth(a.sw)) : f !== this.values.sWidth && (f = this.values.sWidth, d.ctxLineWidth(this.values.sWidth)), a && a.sc ? u !== a.sc && (u = a.sc, d.ctxStrokeStyle(a.sc)) : u !== this.values.stroke && (u = this.values.stroke, d.ctxStrokeStyle(this.values.stroke)), r = (h = this.textSpans[t].elem).length, this.globalData.canvasContext.beginPath(), i = 0; i < r; i += 1)
                  for (s = (p = h[i]).length, this.globalData.canvasContext.moveTo(p[0], p[1]), n = 2; n < s; n += 6) this.globalData.canvasContext.bezierCurveTo(p[n], p[n + 1], p[n + 2], p[n + 3], p[n + 4], p[n + 5]);
                this.globalData.canvasContext.closePath(), d.ctxStroke()
              }
              a && this.globalData.renderer.restore()
            }
        }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVImageElement), CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVImageElement.prototype.createContent = function() {
          if (this.img.width && (this.assetData.w !== this.img.width || this.assetData.h !== this.img.height)) {
            var t = createTag("canvas");
            t.width = this.assetData.w, t.height = this.assetData.h;
            var e, i, r = t.getContext("2d"),
              n = this.img.width,
              s = this.img.height,
              a = n / s,
              o = this.assetData.w / this.assetData.h,
              l = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;
            a > o && "xMidYMid slice" === l || a < o && "xMidYMid slice" !== l ? e = (i = s) * o : i = (e = n) / o, r.drawImage(this.img, (n - e) / 2, (s - i) / 2, e, i, 0, 0, this.assetData.w, this.assetData.h), this.img = t
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
        }, CanvasRendererBase.prototype.ctxFillRect = function(t, e, i, r) {
          this.canvasContext.fillRect(t, e, i, r)
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
            var i = "0px 0px 0px";
            e.transformOrigin = i, e.mozTransformOrigin = i, e.webkitTransformOrigin = i, e["-webkit-transform"] = i, e.contentVisibility = this.renderConfig.contentVisibility, this.animationItem.wrapper.appendChild(this.animationItem.container), this.canvasContext = this.animationItem.container.getContext("2d"), this.renderConfig.className && this.animationItem.container.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.animationItem.container.setAttribute("id", this.renderConfig.id)
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
          var i, r, n, s;
          if (this.reset(), t ? (i = t, r = e, this.canvasContext.canvas.width = i, this.canvasContext.canvas.height = r) : (this.animationItem.wrapper && this.animationItem.container ? (i = this.animationItem.wrapper.offsetWidth, r = this.animationItem.wrapper.offsetHeight) : (i = this.canvasContext.canvas.width, r = this.canvasContext.canvas.height), this.canvasContext.canvas.width = i * this.renderConfig.dpr, this.canvasContext.canvas.height = r * this.renderConfig.dpr), -1 !== this.renderConfig.preserveAspectRatio.indexOf("meet") || -1 !== this.renderConfig.preserveAspectRatio.indexOf("slice")) {
            var a = this.renderConfig.preserveAspectRatio.split(" "),
              o = a[1] || "meet",
              l = a[0] || "xMidYMid",
              h = l.substr(0, 4),
              p = l.substr(4);
            n = i / r, (s = this.transformCanvas.w / this.transformCanvas.h) > n && "meet" === o || s < n && "slice" === o ? (this.transformCanvas.sx = i / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = i / (this.transformCanvas.w / this.renderConfig.dpr)) : (this.transformCanvas.sx = r / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.sy = r / (this.transformCanvas.h / this.renderConfig.dpr)), this.transformCanvas.tx = "xMid" === h && (s < n && "meet" === o || s > n && "slice" === o) ? (i - this.transformCanvas.w * (r / this.transformCanvas.h)) / 2 * this.renderConfig.dpr : "xMax" === h && (s < n && "meet" === o || s > n && "slice" === o) ? (i - this.transformCanvas.w * (r / this.transformCanvas.h)) * this.renderConfig.dpr : 0, this.transformCanvas.ty = "YMid" === p && (s > n && "meet" === o || s < n && "slice" === o) ? (r - this.transformCanvas.h * (i / this.transformCanvas.w)) / 2 * this.renderConfig.dpr : "YMax" === p && (s > n && "meet" === o || s < n && "slice" === o) ? (r - this.transformCanvas.h * (i / this.transformCanvas.w)) * this.renderConfig.dpr : 0
          } else "none" === this.renderConfig.preserveAspectRatio ? (this.transformCanvas.sx = i / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = r / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.tx = 0, this.transformCanvas.ty = 0) : (this.transformCanvas.sx = this.renderConfig.dpr, this.transformCanvas.sy = this.renderConfig.dpr, this.transformCanvas.tx = 0, this.transformCanvas.ty = 0);
          this.transformCanvas.props = [this.transformCanvas.sx, 0, 0, 0, 0, this.transformCanvas.sy, 0, 0, 0, 0, 1, 0, this.transformCanvas.tx, this.transformCanvas.ty, 0, 1], this.ctxTransform(this.transformCanvas.props), this.canvasContext.beginPath(), this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h), this.canvasContext.closePath(), this.canvasContext.clip(), this.renderFrame(this.renderedFrame, !0)
        }, CanvasRendererBase.prototype.destroy = function() {
          var t;
          for (this.renderConfig.clearCanvas && this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), t = (this.layers ? this.layers.length : 0) - 1; t >= 0; t -= 1) this.elements[t] && this.elements[t].destroy && this.elements[t].destroy();
          this.elements.length = 0, this.globalData.canvasContext = null, this.animationItem.container = null, this.destroyed = !0
        }, CanvasRendererBase.prototype.renderFrame = function(t, e) {
          if ((this.renderedFrame !== t || !0 !== this.renderConfig.clearCanvas || e) && !this.destroyed && -1 !== t) {
            var i;
            this.renderedFrame = t, this.globalData.frameNum = t - this.animationItem._isFirstFrame, this.globalData.frameId += 1, this.globalData._mdf = !this.renderConfig.clearCanvas || e, this.globalData.projectInterface.currentFrame = t;
            var r = this.layers.length;
            for (this.completeLayers || this.checkLayers(t), i = r - 1; i >= 0; i -= 1)(this.completeLayers || this.elements[i]) && this.elements[i].prepareFrame(t - this.layers[i].st);
            if (this.globalData._mdf) {
              for (!0 === this.renderConfig.clearCanvas ? this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h) : this.save(), i = r - 1; i >= 0; i -= 1)(this.completeLayers || this.elements[i]) && this.elements[i].renderFrame();
              !0 !== this.renderConfig.clearCanvas && this.restore()
            }
          }
        }, CanvasRendererBase.prototype.buildItem = function(t) {
          var e = this.elements;
          if (!e[t] && 99 !== this.layers[t].ty) {
            var i = this.createItem(this.layers[t], this, this.globalData);
            e[t] = i, i.initExpressions()
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
          var e, i = this.stack[this.cArrPos],
            r = i.transform,
            n = this.cTr.props;
          for (e = 0; e < 16; e += 1) n[e] = r[e];
          if (t) {
            this.nativeContext.restore();
            var s = this.stack[this.cArrPos + 1];
            this.appliedFillStyle = s.fillStyle, this.appliedStrokeStyle = s.strokeStyle, this.appliedLineWidth = s.lineWidth, this.appliedLineCap = s.lineCap, this.appliedLineJoin = s.lineJoin, this.appliedMiterLimit = s.miterLimit
          }
          this.nativeContext.setTransform(r[0], r[1], r[4], r[5], r[12], r[13]), (t || -1 !== i.opacity && this.currentOpacity !== i.opacity) && (this.nativeContext.globalAlpha = i.opacity, this.currentOpacity = i.opacity), this.currentFillStyle = i.fillStyle, this.currentStrokeStyle = i.strokeStyle, this.currentLineWidth = i.lineWidth, this.currentLineCap = i.lineCap, this.currentLineJoin = i.lineJoin, this.currentMiterLimit = i.miterLimit
        }, CVContextData.prototype.save = function(t) {
          t && this.nativeContext.save();
          var e = this.cTr.props;
          this._length <= this.cArrPos && this.duplicate();
          var i, r = this.stack[this.cArrPos];
          for (i = 0; i < 16; i += 1) r.transform[i] = e[i];
          this.cArrPos += 1;
          var n = this.stack[this.cArrPos];
          n.opacity = r.opacity, n.fillStyle = r.fillStyle, n.strokeStyle = r.strokeStyle, n.lineWidth = r.lineWidth, n.lineCap = r.lineCap, n.lineJoin = r.lineJoin, n.miterLimit = r.miterLimit
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
          var i = e.props;
          this.nativeContext.setTransform(i[0], i[1], i[4], i[5], i[12], i[13])
        }, CVContextData.prototype.opacity = function(t) {
          var e = this.stack[this.cArrPos].opacity;
          e *= t < 0 ? 0 : t, this.stack[this.cArrPos].opacity !== e && (this.currentOpacity !== t && (this.nativeContext.globalAlpha = t, this.currentOpacity = t), this.stack[this.cArrPos].opacity = e)
        }, CVContextData.prototype.fill = function(t) {
          this.appliedFillStyle !== this.currentFillStyle && (this.appliedFillStyle = this.currentFillStyle, this.nativeContext.fillStyle = this.appliedFillStyle), this.nativeContext.fill(t)
        }, CVContextData.prototype.fillRect = function(t, e, i, r) {
          this.appliedFillStyle !== this.currentFillStyle && (this.appliedFillStyle = this.currentFillStyle, this.nativeContext.fillStyle = this.appliedFillStyle), this.nativeContext.fillRect(t, e, i, r)
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
          var i, r = t.length;
          for (i = 0; i < r; i += 1) e = t[i].mProps.v.applyToPointArray(e[0], e[1], 0);
          return e
        }, HShapeElement.prototype.calculateShapeBoundingBox = function(t, e) {
          var i, r, n, s, a, o = t.sh.v,
            l = t.transformers,
            h = o._length;
          if (!(h <= 1)) {
            for (i = 0; i < h - 1; i += 1) r = this.getTransformedPoint(l, o.v[i]), n = this.getTransformedPoint(l, o.o[i]), s = this.getTransformedPoint(l, o.i[i + 1]), a = this.getTransformedPoint(l, o.v[i + 1]), this.checkBounds(r, n, s, a, e);
            o.c && (r = this.getTransformedPoint(l, o.v[i]), n = this.getTransformedPoint(l, o.o[i]), s = this.getTransformedPoint(l, o.i[0]), a = this.getTransformedPoint(l, o.v[0]), this.checkBounds(r, n, s, a, e))
          }
        }, HShapeElement.prototype.checkBounds = function(t, e, i, r, n) {
          this.getBoundsOfCurve(t, e, i, r);
          var s = this.shapeBoundingBox;
          n.x = bmMin(s.left, n.x), n.xMax = bmMax(s.right, n.xMax), n.y = bmMin(s.top, n.y), n.yMax = bmMax(s.bottom, n.yMax)
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
        }, HShapeElement.prototype.getBoundsOfCurve = function(t, e, i, r) {
          for (var n, s, a, o, l, h, p, c = [
              [t[0], r[0]],
              [t[1], r[1]]
            ], u = 0; u < 2; ++u) s = 6 * t[u] - 12 * e[u] + 6 * i[u], n = -3 * t[u] + 9 * e[u] - 9 * i[u] + 3 * r[u], a = 3 * e[u] - 3 * t[u], s |= 0, a |= 0, 0 == (n |= 0) && 0 === s || (0 === n ? (o = -a / s) > 0 && o < 1 && c[u].push(this.calculateF(o, t, e, i, r, u)) : (l = s * s - 4 * a * n) >= 0 && ((h = (-s + bmSqrt(l)) / (2 * n)) > 0 && h < 1 && c[u].push(this.calculateF(h, t, e, i, r, u)), (p = (-s - bmSqrt(l)) / (2 * n)) > 0 && p < 1 && c[u].push(this.calculateF(p, t, e, i, r, u))));
          this.shapeBoundingBox.left = bmMin.apply(null, c[0]), this.shapeBoundingBox.top = bmMin.apply(null, c[1]), this.shapeBoundingBox.right = bmMax.apply(null, c[0]), this.shapeBoundingBox.bottom = bmMax.apply(null, c[1])
        }, HShapeElement.prototype.calculateF = function(t, e, i, r, n, s) {
          return bmPow(1 - t, 3) * e[s] + 3 * bmPow(1 - t, 2) * t * i[s] + 3 * (1 - t) * bmPow(t, 2) * r[s] + bmPow(t, 3) * n[s]
        }, HShapeElement.prototype.calculateBoundingBox = function(t, e) {
          var i, r = t.length;
          for (i = 0; i < r; i += 1) t[i] && t[i].sh ? this.calculateShapeBoundingBox(t[i], e) : t[i] && t[i].it ? this.calculateBoundingBox(t[i].it, e) : t[i] && t[i].style && t[i].w && this.expandStrokeBoundingBox(t[i].w, e)
        }, HShapeElement.prototype.expandStrokeBoundingBox = function(t, e) {
          var i = 0;
          if (t.keyframes) {
            for (var r = 0; r < t.keyframes.length; r += 1) {
              var n = t.keyframes[r].s;
              n > i && (i = n)
            }
            i *= t.mult
          } else i = t.v * t.mult;
          e.x -= i, e.xMax += i, e.y -= i, e.yMax += i
        }, HShapeElement.prototype.currentBoxContains = function(t) {
          return this.currentBBox.x <= t.x && this.currentBBox.y <= t.y && this.currentBBox.width + this.currentBBox.x >= t.x + t.width && this.currentBBox.height + this.currentBBox.y >= t.y + t.height
        }, HShapeElement.prototype.renderInnerContent = function() {
          if (this._renderShapeFrame(), !this.hidden && (this._isFirstFrame || this._mdf)) {
            var t = this.tempBoundingBox,
              e = 999999;
            if (t.x = e, t.xMax = -e, t.y = e, t.yMax = -e, this.calculateBoundingBox(this.itemsData, t), t.width = t.xMax < t.x ? 0 : t.xMax - t.x, t.height = t.yMax < t.y ? 0 : t.yMax - t.y, this.currentBoxContains(t)) return;
            var i = !1;
            if (this.currentBBox.w !== t.width && (this.currentBBox.w = t.width, this.shapeCont.setAttribute("width", t.width), i = !0), this.currentBBox.h !== t.height && (this.currentBBox.h = t.height, this.shapeCont.setAttribute("height", t.height), i = !0), i || this.currentBBox.x !== t.x || this.currentBBox.y !== t.y) {
              this.currentBBox.w = t.width, this.currentBBox.h = t.height, this.currentBBox.x = t.x, this.currentBBox.y = t.y, this.shapeCont.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h);
              var r = this.shapeCont.style,
                n = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
              r.transform = n, r.webkitTransform = n
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
            i = t.fc ? this.buildColor(t.fc) : "rgba(0,0,0,0)";
          e.fill = i, e.color = i, t.sc && (e.stroke = this.buildColor(t.sc), e.strokeWidth = t.sw + "px");
          var r, n, s = this.globalData.fontManager.getFontByName(t.f);
          if (!this.globalData.fontManager.chars)
            if (e.fontSize = t.finalSize + "px", e.lineHeight = t.finalSize + "px", s.fClass) this.innerElem.className = s.fClass;
            else {
              e.fontFamily = s.fFamily;
              var a = t.fWeight,
                o = t.fStyle;
              e.fontStyle = o, e.fontWeight = a
            } var l, h, p, c = t.l;
          n = c.length;
          var u, f = this.mHelper,
            d = "",
            m = 0;
          for (r = 0; r < n; r += 1) {
            if (this.globalData.fontManager.chars ? (this.textPaths[m] ? l = this.textPaths[m] : ((l = createNS("path")).setAttribute("stroke-linecap", lineCapEnum[1]), l.setAttribute("stroke-linejoin", lineJoinEnum[2]), l.setAttribute("stroke-miterlimit", "4")), this.isMasked || (this.textSpans[m] ? p = (h = this.textSpans[m]).children[0] : ((h = createTag("div")).style.lineHeight = 0, (p = createNS("svg")).appendChild(l), styleDiv(h)))) : this.isMasked ? l = this.textPaths[m] ? this.textPaths[m] : createNS("text") : this.textSpans[m] ? (h = this.textSpans[m], l = this.textPaths[m]) : (styleDiv(h = createTag("span")), styleDiv(l = createTag("span")), h.appendChild(l)), this.globalData.fontManager.chars) {
              var y, g = this.globalData.fontManager.getCharData(t.finalText[r], s.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily);
              if (y = g ? g.data : null, f.reset(), y && y.shapes && y.shapes.length && (u = y.shapes[0].it, f.scale(t.finalSize / 100, t.finalSize / 100), d = this.createPathShape(f, u), l.setAttribute("d", d)), this.isMasked) this.innerElem.appendChild(l);
              else {
                if (this.innerElem.appendChild(h), y && y.shapes) {
                  document.body.appendChild(p);
                  var v = p.getBBox();
                  p.setAttribute("width", v.width + 2), p.setAttribute("height", v.height + 2), p.setAttribute("viewBox", v.x - 1 + " " + (v.y - 1) + " " + (v.width + 2) + " " + (v.height + 2));
                  var b = p.style,
                    x = "translate(" + (v.x - 1) + "px," + (v.y - 1) + "px)";
                  b.transform = x, b.webkitTransform = x, c[r].yOffset = v.y - 1
                } else p.setAttribute("width", 1), p.setAttribute("height", 1);
                h.appendChild(p)
              }
            } else if (l.textContent = c[r].val, l.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), this.isMasked) this.innerElem.appendChild(l);
            else {
              this.innerElem.appendChild(h);
              var P = l.style,
                E = "translate3d(0," + -t.finalSize / 1.2 + "px,0)";
              P.transform = E, P.webkitTransform = E
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
            var i, r, n, s, a, o = 0,
              l = this.textAnimator.renderedLetters,
              h = this.textProperty.currentData.l;
            for (r = h.length, i = 0; i < r; i += 1) h[i].n ? o += 1 : (s = this.textSpans[i], a = this.textPaths[i], n = l[o], o += 1, n._mdf.m && (this.isMasked ? s.setAttribute("transform", n.m) : (s.style.webkitTransform = n.m, s.style.transform = n.m)), s.style.opacity = n.o, n.sw && n._mdf.sw && a.setAttribute("stroke-width", n.sw), n.sc && n._mdf.sc && a.setAttribute("stroke", n.sc), n.fc && n._mdf.fc && (a.setAttribute("fill", n.fc), a.style.color = n.fc));
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
          var t, e, i, r, n = this.comp.threeDElements.length;
          for (t = 0; t < n; t += 1)
            if ("3d" === (e = this.comp.threeDElements[t]).type) {
              i = e.perspectiveElem.style, r = e.container.style;
              var s = this.pe.v + "px",
                a = "0px 0px 0px",
                o = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
              i.perspective = s, i.webkitPerspective = s, r.transformOrigin = a, r.mozTransformOrigin = a, r.webkitTransformOrigin = a, i.transform = o, i.webkitTransform = o
            }
        }, HCameraElement.prototype.createElements = function() {}, HCameraElement.prototype.hide = function() {}, HCameraElement.prototype.renderFrame = function() {
          var t, e, i = this._isFirstFrame;
          if (this.hierarchy)
            for (e = this.hierarchy.length, t = 0; t < e; t += 1) i = this.hierarchy[t].finalTransform.mProp._mdf || i;
          if (i || this.pe._mdf || this.p && this.p._mdf || this.px && (this.px._mdf || this.py._mdf || this.pz._mdf) || this.rx._mdf || this.ry._mdf || this.rz._mdf || this.or._mdf || this.a && this.a._mdf) {
            if (this.mat.reset(), this.hierarchy)
              for (t = e = this.hierarchy.length - 1; t >= 0; t -= 1) {
                var r = this.hierarchy[t].finalTransform.mProp;
                this.mat.translate(-r.p.v[0], -r.p.v[1], r.p.v[2]), this.mat.rotateX(-r.or.v[0]).rotateY(-r.or.v[1]).rotateZ(r.or.v[2]), this.mat.rotateX(-r.rx.v).rotateY(-r.ry.v).rotateZ(r.rz.v), this.mat.scale(1 / r.s.v[0], 1 / r.s.v[1], 1 / r.s.v[2]), this.mat.translate(r.a.v[0], r.a.v[1], r.a.v[2])
              }
            if (this.p ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]) : this.mat.translate(-this.px.v, -this.py.v, this.pz.v), this.a) {
              var n;
              n = this.p ? [this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2]] : [this.px.v - this.a.v[0], this.py.v - this.a.v[1], this.pz.v - this.a.v[2]];
              var s = Math.sqrt(Math.pow(n[0], 2) + Math.pow(n[1], 2) + Math.pow(n[2], 2)),
                a = [n[0] / s, n[1] / s, n[2] / s],
                o = Math.sqrt(a[2] * a[2] + a[0] * a[0]),
                l = Math.atan2(a[1], o),
                h = Math.atan2(a[0], -a[2]);
              this.mat.rotateY(h).rotateX(-l)
            }
            this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v), this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]), this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0), this.mat.translate(0, 0, this.pe.v);
            var p = !this._prevMat.equals(this.mat);
            if ((p || this.pe._mdf) && this.comp.threeDElements) {
              var c, u, f;
              for (e = this.comp.threeDElements.length, t = 0; t < e; t += 1)
                if ("3d" === (c = this.comp.threeDElements[t]).type) {
                  if (p) {
                    var d = this.mat.toCSS();
                    (f = c.container.style).transform = d, f.webkitTransform = d
                  }
                  this.pe._mdf && ((u = c.perspectiveElem.style).perspective = this.pe.v + "px", u.webkitPerspective = this.pe.v + "px")
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
          var i = t.getBaseElement();
          if (i) {
            var r = this.layers[e];
            if (r.ddd && this.supports3d) this.addTo3dContainer(i, e);
            else if (this.threeDElements) this.addTo3dContainer(i, e);
            else {
              for (var n, s, a = 0; a < e;) this.elements[a] && !0 !== this.elements[a] && this.elements[a].getBaseElement && (s = this.elements[a], n = (this.layers[a].ddd ? this.getThreeDContainerByPos(a) : s.getBaseElement()) || n), a += 1;
              n ? r.ddd && this.supports3d || this.layerElement.insertBefore(i, n) : r.ddd && this.supports3d || this.layerElement.appendChild(i)
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
          for (var e = 0, i = this.threeDElements.length; e < i;) {
            if (this.threeDElements[e].startPos <= t && this.threeDElements[e].endPos >= t) return this.threeDElements[e].perspectiveElem;
            e += 1
          }
          return null
        }, HybridRendererBase.prototype.createThreeDContainer = function(t, e) {
          var i, r, n = createTag("div");
          styleDiv(n);
          var s = createTag("div");
          if (styleDiv(s), "3d" === e) {
            (i = n.style).width = this.globalData.compSize.w + "px", i.height = this.globalData.compSize.h + "px";
            var a = "50% 50%";
            i.webkitTransformOrigin = a, i.mozTransformOrigin = a, i.transformOrigin = a;
            var o = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
            (r = s.style).transform = o, r.webkitTransform = o
          }
          n.appendChild(s);
          var l = {
            container: s,
            perspectiveElem: n,
            startPos: t,
            endPos: t,
            type: e
          };
          return this.threeDElements.push(l), l
        }, HybridRendererBase.prototype.build3dContainers = function() {
          var t, e, i = this.layers.length,
            r = "";
          for (t = 0; t < i; t += 1) this.layers[t].ddd && 3 !== this.layers[t].ty ? ("3d" !== r && (r = "3d", e = this.createThreeDContainer(t, "3d")), e.endPos = Math.max(e.endPos, t)) : ("2d" !== r && (r = "2d", e = this.createThreeDContainer(t, "2d")), e.endPos = Math.max(e.endPos, t));
          for (t = (i = this.threeDElements.length) - 1; t >= 0; t -= 1) this.resizerElem.appendChild(this.threeDElements[t].perspectiveElem)
        }, HybridRendererBase.prototype.addTo3dContainer = function(t, e) {
          for (var i = 0, r = this.threeDElements.length; i < r;) {
            if (e <= this.threeDElements[i].endPos) {
              for (var n, s = this.threeDElements[i].startPos; s < e;) this.elements[s] && this.elements[s].getBaseElement && (n = this.elements[s].getBaseElement()), s += 1;
              n ? this.threeDElements[i].container.insertBefore(t, n) : this.threeDElements[i].container.appendChild(t);
              break
            }
            i += 1
          }
        }, HybridRendererBase.prototype.configAnimation = function(t) {
          var e = createTag("div"),
            i = this.animationItem.wrapper,
            r = e.style;
          r.width = t.w + "px", r.height = t.h + "px", this.resizerElem = e, styleDiv(e), r.transformStyle = "flat", r.mozTransformStyle = "flat", r.webkitTransformStyle = "flat", this.renderConfig.className && e.setAttribute("class", this.renderConfig.className), i.appendChild(e), r.overflow = "hidden";
          var n = createNS("svg");
          n.setAttribute("width", "1"), n.setAttribute("height", "1"), styleDiv(n), this.resizerElem.appendChild(n);
          var s = createNS("defs");
          n.appendChild(s), this.data = t, this.setupGlobalData(t, n), this.globalData.defs = s, this.layers = t.layers, this.layerElement = this.resizerElem, this.build3dContainers(), this.updateContainerSize()
        }, HybridRendererBase.prototype.destroy = function() {
          var t;
          this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.animationItem.container = null, this.globalData.defs = null;
          var e = this.layers ? this.layers.length : 0;
          for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy && this.elements[t].destroy();
          this.elements.length = 0, this.destroyed = !0, this.animationItem = null
        }, HybridRendererBase.prototype.updateContainerSize = function() {
          var t, e, i, r, n = this.animationItem.wrapper.offsetWidth,
            s = this.animationItem.wrapper.offsetHeight,
            a = n / s;
          this.globalData.compSize.w / this.globalData.compSize.h > a ? (t = n / this.globalData.compSize.w, e = n / this.globalData.compSize.w, i = 0, r = (s - this.globalData.compSize.h * (n / this.globalData.compSize.w)) / 2) : (t = s / this.globalData.compSize.h, e = s / this.globalData.compSize.h, i = (n - this.globalData.compSize.w * (s / this.globalData.compSize.h)) / 2, r = 0);
          var o = this.resizerElem.style;
          o.webkitTransform = "matrix3d(" + t + ",0,0,0,0," + e + ",0,0,0,0,1,0," + i + "," + r + ",0,1)", o.transform = o.webkitTransform
        }, HybridRendererBase.prototype.renderFrame = SVGRenderer.prototype.renderFrame, HybridRendererBase.prototype.hide = function() {
          this.resizerElem.style.display = "none"
        }, HybridRendererBase.prototype.show = function() {
          this.resizerElem.style.display = "block"
        }, HybridRendererBase.prototype.initItems = function() {
          if (this.buildAllItems(), this.camera) this.camera.setup();
          else {
            var t, e = this.globalData.compSize.w,
              i = this.globalData.compSize.h,
              r = this.threeDElements.length;
            for (t = 0; t < r; t += 1) {
              var n = this.threeDElements[t].perspectiveElem.style;
              n.webkitPerspective = Math.sqrt(Math.pow(e, 2) + Math.pow(i, 2)) + "px", n.perspective = n.webkitPerspective
            }
          }
        }, HybridRendererBase.prototype.searchExtraCompositions = function(t) {
          var e, i = t.length,
            r = createTag("div");
          for (e = 0; e < i; e += 1)
            if (t[e].xt) {
              var n = this.createComp(t[e], r, this.globalData.comp, null);
              n.initExpressions(), this.globalData.projectInterface.registerComposition(n)
            }
        }, extendPrototype([HybridRendererBase, ICompElement, HBaseElement], HCompElement), HCompElement.prototype._createBaseContainerElements = HCompElement.prototype.createContainerElements, HCompElement.prototype.createContainerElements = function() {
          this._createBaseContainerElements(), this.data.hasMask ? (this.svgElement.setAttribute("width", this.data.w), this.svgElement.setAttribute("height", this.data.h), this.transformedElement = this.baseElement) : this.transformedElement = this.layerElement
        }, HCompElement.prototype.addTo3dContainer = function(t, e) {
          for (var i, r = 0; r < e;) this.elements[r] && this.elements[r].getBaseElement && (i = this.elements[r].getBaseElement()), r += 1;
          i ? this.layerElement.insertBefore(t, i) : this.layerElement.appendChild(t)
        }, HCompElement.prototype.createComp = function(t) {
          return this.supports3d ? new HCompElement(t, this.globalData, this) : new SVGCompElement(t, this.globalData, this)
        }, extendPrototype([HybridRendererBase], HybridRenderer), HybridRenderer.prototype.createComp = function(t) {
          return this.supports3d ? new HCompElement(t, this.globalData, this) : new SVGCompElement(t, this.globalData, this)
        };
        var CompExpressionInterface = function(t) {
          function e(e) {
            for (var i = 0, r = t.layers.length; i < r;) {
              if (t.layers[i].nm === e || t.layers[i].ind === e) return t.elements[i].layerInterface;
              i += 1
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
          var i = this,
            r = 256,
            n = "random",
            s = e.pow(r, 6),
            a = e.pow(2, 52),
            o = 2 * a,
            l = 255;

          function h(t) {
            var e, i = t.length,
              n = this,
              s = 0,
              a = n.i = n.j = 0,
              o = n.S = [];
            for (i || (t = [i++]); s < r;) o[s] = s++;
            for (s = 0; s < r; s++) o[s] = o[a = l & a + t[s % i] + (e = o[s])], o[a] = e;
            n.g = function(t) {
              for (var e, i = 0, s = n.i, a = n.j, o = n.S; t--;) e = o[s = l & s + 1], i = i * r + o[l & (o[s] = o[a = l & a + e]) + (o[a] = e)];
              return n.i = s, n.j = a, i
            }
          }

          function p(t, e) {
            return e.i = t.i, e.j = t.j, e.S = t.S.slice(), e
          }

          function c(t, e) {
            var i, r = [],
              n = _typeof$2(t);
            if (e && "object" == n)
              for (i in t) try {
                r.push(c(t[i], e - 1))
              } catch (t) {}
            return r.length ? r : "string" == n ? t : t + "\0"
          }

          function u(t, e) {
            for (var i, r = t + "", n = 0; n < r.length;) e[l & n] = l & (i ^= 19 * e[l & n]) + r.charCodeAt(n++);
            return f(e)
          }

          function f(t) {
            return String.fromCharCode.apply(0, t)
          }
          e["seed" + n] = function(l, d, m) {
            var y = [],
              g = u(c((d = !0 === d ? {
                entropy: !0
              } : d || {}).entropy ? [l, f(t)] : null === l ? function() {
                try {
                  var e = new Uint8Array(r);
                  return (i.crypto || i.msCrypto).getRandomValues(e), f(e)
                } catch (e) {
                  var n = i.navigator,
                    s = n && n.plugins;
                  return [+new Date, i, s, i.screen, f(t)]
                }
              }() : l, 3), y),
              v = new h(y),
              b = function() {
                for (var t = v.g(6), e = s, i = 0; t < a;) t = (t + i) * r, e *= r, i = v.g(1);
                for (; t >= o;) t /= 2, e /= 2, i >>>= 1;
                return (t + i) / e
              };
            return b.int32 = function() {
              return 0 | v.g(4)
            }, b.quick = function() {
              return v.g(4) / 4294967296
            }, b.double = b, u(f(v.S), t), (d.pass || m || function(t, i, r, s) {
              return s && (s.S && p(s, v), t.state = function() {
                return p(v, {})
              }), r ? (e[n] = t, i) : t
            })(b, g, "global" in d ? d.global : this == e, d.state)
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
                var i, r = t.length,
                  n = [];
                for (i = 0; i < r; i += 1) n[i] = -t[i];
                return n
              }
              return t.propType ? t.v : -t
            }
            initialize$2(BMMath);
            var easeInBez = BezierFactory.getBezierEasing(.333, 0, .833, .833, "easeIn").get,
              easeOutBez = BezierFactory.getBezierEasing(.167, .167, .667, 1, "easeOut").get,
              easeInOutBez = BezierFactory.getBezierEasing(.33, 0, .667, 1, "easeInOut").get;

            function sum(t, e) {
              var i = _typeof$1(t),
                r = _typeof$1(e);
              if (isNumerable(i, t) && isNumerable(r, e) || "string" === i || "string" === r) return t + e;
              if ($bm_isInstanceOfArray(t) && isNumerable(r, e)) return (t = t.slice(0))[0] += e, t;
              if (isNumerable(i, t) && $bm_isInstanceOfArray(e)) return (e = e.slice(0))[0] = t + e[0], e;
              if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                for (var n = 0, s = t.length, a = e.length, o = []; n < s || n < a;)("number" == typeof t[n] || t[n] instanceof Number) && ("number" == typeof e[n] || e[n] instanceof Number) ? o[n] = t[n] + e[n] : o[n] = void 0 === e[n] ? t[n] : t[n] || e[n], n += 1;
                return o
              }
              return 0
            }
            var add = sum;

            function sub(t, e) {
              var i = _typeof$1(t),
                r = _typeof$1(e);
              if (isNumerable(i, t) && isNumerable(r, e)) return "string" === i && (t = parseInt(t, 10)), "string" === r && (e = parseInt(e, 10)), t - e;
              if ($bm_isInstanceOfArray(t) && isNumerable(r, e)) return (t = t.slice(0))[0] -= e, t;
              if (isNumerable(i, t) && $bm_isInstanceOfArray(e)) return (e = e.slice(0))[0] = t - e[0], e;
              if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                for (var n = 0, s = t.length, a = e.length, o = []; n < s || n < a;)("number" == typeof t[n] || t[n] instanceof Number) && ("number" == typeof e[n] || e[n] instanceof Number) ? o[n] = t[n] - e[n] : o[n] = void 0 === e[n] ? t[n] : t[n] || e[n], n += 1;
                return o
              }
              return 0
            }

            function mul(t, e) {
              var i, r, n, s = _typeof$1(t),
                a = _typeof$1(e);
              if (isNumerable(s, t) && isNumerable(a, e)) return t * e;
              if ($bm_isInstanceOfArray(t) && isNumerable(a, e)) {
                for (n = t.length, i = createTypedArray("float32", n), r = 0; r < n; r += 1) i[r] = t[r] * e;
                return i
              }
              if (isNumerable(s, t) && $bm_isInstanceOfArray(e)) {
                for (n = e.length, i = createTypedArray("float32", n), r = 0; r < n; r += 1) i[r] = t * e[r];
                return i
              }
              return 0
            }

            function div(t, e) {
              var i, r, n, s = _typeof$1(t),
                a = _typeof$1(e);
              if (isNumerable(s, t) && isNumerable(a, e)) return t / e;
              if ($bm_isInstanceOfArray(t) && isNumerable(a, e)) {
                for (n = t.length, i = createTypedArray("float32", n), r = 0; r < n; r += 1) i[r] = t[r] / e;
                return i
              }
              if (isNumerable(s, t) && $bm_isInstanceOfArray(e)) {
                for (n = e.length, i = createTypedArray("float32", n), r = 0; r < n; r += 1) i[r] = t / e[r];
                return i
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

            function clamp(t, e, i) {
              if (e > i) {
                var r = i;
                i = e, e = r
              }
              return Math.min(Math.max(t, e), i)
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
              var i;
              e || (e = helperLengthArray);
              var r = Math.min(t.length, e.length),
                n = 0;
              for (i = 0; i < r; i += 1) n += Math.pow(e[i] - t[i], 2);
              return Math.sqrt(n)
            }

            function normalize(t) {
              return div(t, length(t))
            }

            function rgbToHsl(t) {
              var e, i, r = t[0],
                n = t[1],
                s = t[2],
                a = Math.max(r, n, s),
                o = Math.min(r, n, s),
                l = (a + o) / 2;
              if (a === o) e = 0, i = 0;
              else {
                var h = a - o;
                switch (i = l > .5 ? h / (2 - a - o) : h / (a + o), a) {
                  case r:
                    e = (n - s) / h + (n < s ? 6 : 0);
                    break;
                  case n:
                    e = (s - r) / h + 2;
                    break;
                  case s:
                    e = (r - n) / h + 4
                }
                e /= 6
              }
              return [e, i, l, t[3]]
            }

            function hue2rgb(t, e, i) {
              return i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6 ? t + 6 * (e - t) * i : i < .5 ? e : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t
            }

            function hslToRgb(t) {
              var e, i, r, n = t[0],
                s = t[1],
                a = t[2];
              if (0 === s) e = a, r = a, i = a;
              else {
                var o = a < .5 ? a * (1 + s) : a + s - a * s,
                  l = 2 * a - o;
                e = hue2rgb(l, o, n + 1 / 3), i = hue2rgb(l, o, n), r = hue2rgb(l, o, n - 1 / 3)
              }
              return [e, i, r, t[3]]
            }

            function linear(t, e, i, r, n) {
              if (void 0 !== r && void 0 !== n || (r = e, n = i, e = 0, i = 1), i < e) {
                var s = i;
                i = e, e = s
              }
              if (t <= e) return r;
              if (t >= i) return n;
              var a, o = i === e ? 0 : (t - e) / (i - e);
              if (!r.length) return r + (n - r) * o;
              var l = r.length,
                h = createTypedArray("float32", l);
              for (a = 0; a < l; a += 1) h[a] = r[a] + (n[a] - r[a]) * o;
              return h
            }

            function random(t, e) {
              if (void 0 === e && (void 0 === t ? (t = 0, e = 1) : (e = t, t = void 0)), e.length) {
                var i, r = e.length;
                t || (t = createTypedArray("float32", r));
                var n = createTypedArray("float32", r),
                  s = BMMath.random();
                for (i = 0; i < r; i += 1) n[i] = t[i] + s * (e[i] - t[i]);
                return n
              }
              return void 0 === t && (t = 0), t + BMMath.random() * (e - t)
            }

            function createPath(t, e, i, r) {
              var n, s = t.length,
                a = shapePool.newElement();
              a.setPathData(!!r, s);
              var o, l, h = [0, 0];
              for (n = 0; n < s; n += 1) o = e && e[n] ? e[n] : h, l = i && i[n] ? i[n] : h, a.setTripleAt(t[n][0], t[n][1], l[0] + t[n][0], l[1] + t[n][1], o[0] + t[n][0], o[1] + t[n][1], n, !0);
              return a
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
                  var i, r, n = this.pv.length ? this.pv.length : 1,
                    s = createTypedArray("float32", n),
                    a = Math.floor(5 * time);
                  for (i = 0, r = 0; i < a;) {
                    for (r = 0; r < n; r += 1) s[r] += -e + 2 * e * BMMath.random();
                    i += 1
                  }
                  var o = 5 * time,
                    l = o - Math.floor(o),
                    h = createTypedArray("float32", n);
                  if (n > 1) {
                    for (r = 0; r < n; r += 1) h[r] = this.pv[r] + s[r] + (-e + 2 * e * BMMath.random()) * l;
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
                var i = [e[0] - t[0], e[1] - t[1], e[2] - t[2]],
                  r = Math.atan2(i[0], Math.sqrt(i[1] * i[1] + i[2] * i[2])) / degToRads;
                return [-Math.atan2(i[1], i[2]) / degToRads, r, 0]
              }

              function easeOut(t, e, i, r, n) {
                return applyEase(easeOutBez, t, e, i, r, n)
              }

              function easeIn(t, e, i, r, n) {
                return applyEase(easeInBez, t, e, i, r, n)
              }

              function ease(t, e, i, r, n) {
                return applyEase(easeInOutBez, t, e, i, r, n)
              }

              function applyEase(t, e, i, r, n, s) {
                void 0 === n ? (n = i, s = r) : e = (e - i) / (r - i), e > 1 ? e = 1 : e < 0 && (e = 0);
                var a = t(e);
                if ($bm_isInstanceOfArray(n)) {
                  var o, l = n.length,
                    h = createTypedArray("float32", l);
                  for (o = 0; o < l; o += 1) h[o] = (s[o] - n[o]) * a + n[o];
                  return h
                }
                return (s - n) * a + n
              }

              function nearestKey(t) {
                var e, i, r, n = data.k.length;
                if (data.k.length && "number" != typeof data.k[0])
                  if (i = -1, (t *= elem.comp.globalData.frameRate) < data.k[0].t) i = 1, r = data.k[0].t;
                  else {
                    for (e = 0; e < n - 1; e += 1) {
                      if (t === data.k[e].t) {
                        i = e + 1, r = data.k[e].t;
                        break
                      }
                      if (t > data.k[e].t && t < data.k[e + 1].t) {
                        t - data.k[e].t > data.k[e + 1].t - t ? (i = e + 2, r = data.k[e + 1].t) : (i = e + 1, r = data.k[e].t);
                        break
                      }
                    } - 1 === i && (i = e + 1, r = data.k[e].t)
                  }
                else i = 0, r = 0;
                var s = {};
                return s.index = i, s.time = r / elem.comp.globalData.frameRate, s
              }

              function key(t) {
                var e, i, r;
                if (!data.k.length || "number" == typeof data.k[0]) throw new Error("The property has no keyframe at index " + t);
                t -= 1, e = {
                  time: data.k[t].t / elem.comp.globalData.frameRate,
                  value: []
                };
                var n = Object.prototype.hasOwnProperty.call(data.k[t], "s") ? data.k[t].s : data.k[t - 1].e;
                for (r = n.length, i = 0; i < r; i += 1) e[i] = n[i], e.value[i] = n[i];
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
                  i = [];
                t.renderer.compInterface = CompExpressionInterface(t.renderer), t.renderer.globalData.projectInterface.registerComposition(t.renderer), t.renderer.globalData.pushExpression = function() {
                  e += 1
                }, t.renderer.globalData.popExpression = function() {
                  0 == (e -= 1) && function() {
                    var t, e = i.length;
                    for (t = 0; t < e; t += 1) i[t].release();
                    i.length = 0
                  }()
                }, t.renderer.globalData.registerExpressionProperty = function(t) {
                  -1 === i.indexOf(t) && i.push(t)
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
                var i, r = createSizedArray(e.viewData.length),
                  n = e.viewData.length;
                for (i = 0; i < n; i += 1) r[i] = new t(e.viewData[i], e.masksProperties[i]);
                return function(t) {
                  for (i = 0; i < n;) {
                    if (e.masksProperties[i].nm === t) return r[i];
                    i += 1
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

            function i(t, e, i) {
              Object.defineProperty(t, "velocity", {
                get: function() {
                  return e.getVelocityAtTime(e.comp.currentFrame)
                }
              }), t.numKeys = e.keyframes ? e.keyframes.length : 0, t.key = function(r) {
                if (!t.numKeys) return 0;
                var n;
                n = "s" in e.keyframes[r - 1] ? e.keyframes[r - 1].s : "e" in e.keyframes[r - 2] ? e.keyframes[r - 2].e : e.keyframes[r - 2].s;
                var s = "unidimensional" === i ? new Number(n) : Object.assign({}, n);
                return s.time = e.keyframes[r - 1].t / e.elem.comp.globalData.frameRate, s.value = "unidimensional" === i ? n[0] : n, s
              }, t.valueAtTime = e.getValueAtTime, t.speedAtTime = e.getSpeedAtTime, t.velocityAtTime = e.getVelocityAtTime, t.propertyGroup = e.propertyGroup
            }

            function r() {
              return t
            }
            return function(n) {
              return n ? "unidimensional" === n.propType ? function(e) {
                e && "pv" in e || (e = t);
                var r = 1 / e.mult,
                  n = e.pv * r,
                  s = new Number(n);
                return s.value = n, i(s, e, "unidimensional"),
                  function() {
                    return e.k && e.getValue(), n = e.v * r, s.value !== n && ((s = new Number(n)).value = n, i(s, e, "unidimensional")), s
                  }
              }(n) : function(t) {
                t && "pv" in t || (t = e);
                var r = 1 / t.mult,
                  n = t.data && t.data.l || t.pv.length,
                  s = createTypedArray("float32", n),
                  a = createTypedArray("float32", n);
                return s.value = a, i(s, t, "multidimensional"),
                  function() {
                    t.k && t.getValue();
                    for (var e = 0; e < n; e += 1) a[e] = t.v[e] * r, s[e] = a[e];
                    return s
                  }
              }(n) : r
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
            var i, r, n, s;
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
            }), t.p ? s = ExpressionPropertyInterface(t.p) : (i = ExpressionPropertyInterface(t.px), r = ExpressionPropertyInterface(t.py), t.pz && (n = ExpressionPropertyInterface(t.pz))), Object.defineProperty(e, "position", {
              get: function() {
                return t.p ? s() : [i(), r(), n ? n() : 0]
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
              var i = this.getMatrix(e);
              return i.props[12] = 0, i.props[13] = 0, i.props[14] = 0, this.applyPoint(i, t)
            }

            function i(t, e) {
              var i = this.getMatrix(e);
              return this.applyPoint(i, t)
            }

            function r(t, e) {
              var i = this.getMatrix(e);
              return i.props[12] = 0, i.props[13] = 0, i.props[14] = 0, this.invertPoint(i, t)
            }

            function n(t, e) {
              var i = this.getMatrix(e);
              return this.invertPoint(i, t)
            }

            function s(t, e) {
              if (this._elem.hierarchy && this._elem.hierarchy.length) {
                var i, r = this._elem.hierarchy.length;
                for (i = 0; i < r; i += 1) this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(t)
              }
              return t.applyToPointArray(e[0], e[1], e[2] || 0)
            }

            function a(t, e) {
              if (this._elem.hierarchy && this._elem.hierarchy.length) {
                var i, r = this._elem.hierarchy.length;
                for (i = 0; i < r; i += 1) this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(t)
              }
              return t.inversePoint(e)
            }

            function o(t) {
              var e = new Matrix;
              if (e.reset(), this._elem.finalTransform.mProp.applyToMatrix(e), this._elem.hierarchy && this._elem.hierarchy.length) {
                var i, r = this._elem.hierarchy.length;
                for (i = 0; i < r; i += 1) this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(e);
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
              c.getMatrix = t, c.invertPoint = a, c.applyPoint = s, c.toWorld = i, c.toWorldVec = e, c.fromWorld = n, c.fromWorldVec = r, c.toComp = i, c.fromComp = o, c.sampleImage = l, c.sourceRectAtTime = h.sourceRectAtTime.bind(h), c._elem = h;
              var u = getDescriptor(p = TransformExpressionInterface(h.finalTransform.mProp), "anchorPoint");
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
                anchorPoint: u,
                anchor_point: u,
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
            return function(i) {
              return (i = void 0 === i ? 1 : i) <= 0 ? t : e(i - 1)
            }
          },
          PropertyInterface = function(t, e) {
            var i = {
              _name: t
            };
            return function(t) {
              return (t = void 0 === t ? 1 : t) <= 0 ? i : e(t - 1)
            }
          },
          EffectsExpressionInterface = function() {
            function t(i, r, n, s) {
              function a(t) {
                for (var e = i.ef, r = 0, n = e.length; r < n;) {
                  if (t === e[r].nm || t === e[r].mn || t === e[r].ix) return 5 === e[r].ty ? h[r] : h[r]();
                  r += 1
                }
                throw new Error
              }
              var o, l = propertyGroupFactory(a, n),
                h = [],
                p = i.ef.length;
              for (o = 0; o < p; o += 1) 5 === i.ef[o].ty ? h.push(t(i.ef[o], r.effectElements[o], r.effectElements[o].propertyGroup, s)) : h.push(e(r.effectElements[o], i.ef[o].ty, s, l));
              return "ADBE Color Control" === i.mn && Object.defineProperty(a, "color", {
                get: function() {
                  return h[0]()
                }
              }), Object.defineProperties(a, {
                numProperties: {
                  get: function() {
                    return i.np
                  }
                },
                _name: {
                  value: i.nm
                },
                propertyGroup: {
                  value: l
                }
              }), a.enabled = 0 !== i.en, a.active = a.enabled, a
            }

            function e(t, e, i, r) {
              var n = ExpressionPropertyInterface(t.p);
              return t.p.setGroupProperty && t.p.setGroupProperty(PropertyInterface("", r)),
                function() {
                  return 10 === e ? i.comp.compInterface(t.p.v) : n()
                }
            }
            return {
              createEffectsInterface: function(e, i) {
                if (e.effectsManager) {
                  var r, n = [],
                    s = e.data.ef,
                    a = e.effectsManager.effectElements.length;
                  for (r = 0; r < a; r += 1) n.push(t(s[r], e.effectsManager.effectElements[r], i, e));
                  var o = e.data.ef || [],
                    l = function(t) {
                      for (r = 0, a = o.length; r < a;) {
                        if (t === o[r].nm || t === o[r].mn || t === o[r].ix) return n[r];
                        r += 1
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
          ShapePathInterface = function(t, e, i) {
            var r = e.sh;

            function n(t) {
              return "Shape" === t || "shape" === t || "Path" === t || "path" === t || "ADBE Vector Shape" === t || 2 === t ? n.path : null
            }
            var s = propertyGroupFactory(n, i);
            return r.setGroupProperty(PropertyInterface("Path", s)), Object.defineProperties(n, {
              path: {
                get: function() {
                  return r.k && r.getValue(), r
                }
              },
              shape: {
                get: function() {
                  return r.k && r.getValue(), r
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
                value: i
              }
            }), n
          },
          ShapeExpressionInterface = function() {
            function t(t, a, u) {
              var f, d = [],
                m = t ? t.length : 0;
              for (f = 0; f < m; f += 1) "gr" === t[f].ty ? d.push(e(t[f], a[f], u)) : "fl" === t[f].ty ? d.push(i(t[f], a[f], u)) : "st" === t[f].ty ? d.push(n(t[f], a[f], u)) : "tm" === t[f].ty ? d.push(s(t[f], a[f], u)) : "tr" === t[f].ty || ("el" === t[f].ty ? d.push(o(t[f], a[f], u)) : "sr" === t[f].ty ? d.push(l(t[f], a[f], u)) : "sh" === t[f].ty ? d.push(ShapePathInterface(t[f], a[f], u)) : "rc" === t[f].ty ? d.push(h(t[f], a[f], u)) : "rd" === t[f].ty ? d.push(p(t[f], a[f], u)) : "rp" === t[f].ty ? d.push(c(t[f], a[f], u)) : "gf" === t[f].ty ? d.push(r(t[f], a[f], u)) : d.push((t[f], a[f], function() {
                return null
              })));
              return d
            }

            function e(e, i, r) {
              var n = function(t) {
                switch (t) {
                  case "ADBE Vectors Group":
                  case "Contents":
                  case 2:
                    return n.content;
                  default:
                    return n.transform
                }
              };
              n.propertyGroup = propertyGroupFactory(n, r);
              var s = function(e, i, r) {
                  var n, s = function(t) {
                    for (var e = 0, i = n.length; e < i;) {
                      if (n[e]._name === t || n[e].mn === t || n[e].propertyIndex === t || n[e].ix === t || n[e].ind === t) return n[e];
                      e += 1
                    }
                    return "number" == typeof t ? n[t - 1] : null
                  };
                  s.propertyGroup = propertyGroupFactory(s, r), n = t(e.it, i.it, s.propertyGroup), s.numProperties = n.length;
                  var o = a(e.it[e.it.length - 1], i.it[i.it.length - 1], s.propertyGroup);
                  return s.transform = o, s.propertyIndex = e.cix, s._name = e.nm, s
                }(e, i, n.propertyGroup),
                o = a(e.it[e.it.length - 1], i.it[i.it.length - 1], n.propertyGroup);
              return n.content = s, n.transform = o, Object.defineProperty(n, "_name", {
                get: function() {
                  return e.nm
                }
              }), n.numProperties = e.np, n.propertyIndex = e.ix, n.nm = e.nm, n.mn = e.mn, n
            }

            function i(t, e, i) {
              function r(t) {
                return "Color" === t || "color" === t ? r.color : "Opacity" === t || "opacity" === t ? r.opacity : null
              }
              return Object.defineProperties(r, {
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
              }), e.c.setGroupProperty(PropertyInterface("Color", i)), e.o.setGroupProperty(PropertyInterface("Opacity", i)), r
            }

            function r(t, e, i) {
              function r(t) {
                return "Start Point" === t || "start point" === t ? r.startPoint : "End Point" === t || "end point" === t ? r.endPoint : "Opacity" === t || "opacity" === t ? r.opacity : null
              }
              return Object.defineProperties(r, {
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
              }), e.s.setGroupProperty(PropertyInterface("Start Point", i)), e.e.setGroupProperty(PropertyInterface("End Point", i)), e.o.setGroupProperty(PropertyInterface("Opacity", i)), r
            }

            function n(t, e, i) {
              var r, n = propertyGroupFactory(h, i),
                s = propertyGroupFactory(l, n);

              function a(i) {
                Object.defineProperty(l, t.d[i].nm, {
                  get: ExpressionPropertyInterface(e.d.dataProps[i].p)
                })
              }
              var o = t.d ? t.d.length : 0,
                l = {};
              for (r = 0; r < o; r += 1) a(r), e.d.dataProps[r].p.setGroupProperty(s);

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
              }), e.c.setGroupProperty(PropertyInterface("Color", n)), e.o.setGroupProperty(PropertyInterface("Opacity", n)), e.w.setGroupProperty(PropertyInterface("Stroke Width", n)), h
            }

            function s(t, e, i) {
              function r(e) {
                return e === t.e.ix || "End" === e || "end" === e ? r.end : e === t.s.ix ? r.start : e === t.o.ix ? r.offset : null
              }
              var n = propertyGroupFactory(r, i);
              return r.propertyIndex = t.ix, e.s.setGroupProperty(PropertyInterface("Start", n)), e.e.setGroupProperty(PropertyInterface("End", n)), e.o.setGroupProperty(PropertyInterface("Offset", n)), r.propertyIndex = t.ix, r.propertyGroup = i, Object.defineProperties(r, {
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
              }), r.mn = t.mn, r
            }

            function a(t, e, i) {
              function r(e) {
                return t.a.ix === e || "Anchor Point" === e ? r.anchorPoint : t.o.ix === e || "Opacity" === e ? r.opacity : t.p.ix === e || "Position" === e ? r.position : t.r.ix === e || "Rotation" === e || "ADBE Vector Rotation" === e ? r.rotation : t.s.ix === e || "Scale" === e ? r.scale : t.sk && t.sk.ix === e || "Skew" === e ? r.skew : t.sa && t.sa.ix === e || "Skew Axis" === e ? r.skewAxis : null
              }
              var n = propertyGroupFactory(r, i);
              return e.transform.mProps.o.setGroupProperty(PropertyInterface("Opacity", n)), e.transform.mProps.p.setGroupProperty(PropertyInterface("Position", n)), e.transform.mProps.a.setGroupProperty(PropertyInterface("Anchor Point", n)), e.transform.mProps.s.setGroupProperty(PropertyInterface("Scale", n)), e.transform.mProps.r.setGroupProperty(PropertyInterface("Rotation", n)), e.transform.mProps.sk && (e.transform.mProps.sk.setGroupProperty(PropertyInterface("Skew", n)), e.transform.mProps.sa.setGroupProperty(PropertyInterface("Skew Angle", n))), e.transform.op.setGroupProperty(PropertyInterface("Opacity", n)), Object.defineProperties(r, {
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
              }), r.ty = "tr", r.mn = t.mn, r.propertyGroup = i, r
            }

            function o(t, e, i) {
              function r(e) {
                return t.p.ix === e ? r.position : t.s.ix === e ? r.size : null
              }
              var n = propertyGroupFactory(r, i);
              r.propertyIndex = t.ix;
              var s = "tm" === e.sh.ty ? e.sh.prop : e.sh;
              return s.s.setGroupProperty(PropertyInterface("Size", n)), s.p.setGroupProperty(PropertyInterface("Position", n)), Object.defineProperties(r, {
                size: {
                  get: ExpressionPropertyInterface(s.s)
                },
                position: {
                  get: ExpressionPropertyInterface(s.p)
                },
                _name: {
                  value: t.nm
                }
              }), r.mn = t.mn, r
            }

            function l(t, e, i) {
              function r(e) {
                return t.p.ix === e ? r.position : t.r.ix === e ? r.rotation : t.pt.ix === e ? r.points : t.or.ix === e || "ADBE Vector Star Outer Radius" === e ? r.outerRadius : t.os.ix === e ? r.outerRoundness : !t.ir || t.ir.ix !== e && "ADBE Vector Star Inner Radius" !== e ? t.is && t.is.ix === e ? r.innerRoundness : null : r.innerRadius
              }
              var n = propertyGroupFactory(r, i),
                s = "tm" === e.sh.ty ? e.sh.prop : e.sh;
              return r.propertyIndex = t.ix, s.or.setGroupProperty(PropertyInterface("Outer Radius", n)), s.os.setGroupProperty(PropertyInterface("Outer Roundness", n)), s.pt.setGroupProperty(PropertyInterface("Points", n)), s.p.setGroupProperty(PropertyInterface("Position", n)), s.r.setGroupProperty(PropertyInterface("Rotation", n)), t.ir && (s.ir.setGroupProperty(PropertyInterface("Inner Radius", n)), s.is.setGroupProperty(PropertyInterface("Inner Roundness", n))), Object.defineProperties(r, {
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
              }), r.mn = t.mn, r
            }

            function h(t, e, i) {
              function r(e) {
                return t.p.ix === e ? r.position : t.r.ix === e ? r.roundness : t.s.ix === e || "Size" === e || "ADBE Vector Rect Size" === e ? r.size : null
              }
              var n = propertyGroupFactory(r, i),
                s = "tm" === e.sh.ty ? e.sh.prop : e.sh;
              return r.propertyIndex = t.ix, s.p.setGroupProperty(PropertyInterface("Position", n)), s.s.setGroupProperty(PropertyInterface("Size", n)), s.r.setGroupProperty(PropertyInterface("Rotation", n)), Object.defineProperties(r, {
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
              }), r.mn = t.mn, r
            }

            function p(t, e, i) {
              function r(e) {
                return t.r.ix === e || "Round Corners 1" === e ? r.radius : null
              }
              var n = propertyGroupFactory(r, i),
                s = e;
              return r.propertyIndex = t.ix, s.rd.setGroupProperty(PropertyInterface("Radius", n)), Object.defineProperties(r, {
                radius: {
                  get: ExpressionPropertyInterface(s.rd)
                },
                _name: {
                  value: t.nm
                }
              }), r.mn = t.mn, r
            }

            function c(t, e, i) {
              function r(e) {
                return t.c.ix === e || "Copies" === e ? r.copies : t.o.ix === e || "Offset" === e ? r.offset : null
              }
              var n = propertyGroupFactory(r, i),
                s = e;
              return r.propertyIndex = t.ix, s.c.setGroupProperty(PropertyInterface("Copies", n)), s.o.setGroupProperty(PropertyInterface("Offset", n)), Object.defineProperties(r, {
                copies: {
                  get: ExpressionPropertyInterface(s.c)
                },
                offset: {
                  get: ExpressionPropertyInterface(s.o)
                },
                _name: {
                  value: t.nm
                }
              }), r.mn = t.mn, r
            }
            return function(e, i, r) {
              var n;

              function s(t) {
                if ("number" == typeof t) return 0 === (t = void 0 === t ? 1 : t) ? r : n[t - 1];
                for (var e = 0, i = n.length; e < i;) {
                  if (n[e]._name === t) return n[e];
                  e += 1
                }
                return null
              }
              return s.propertyGroup = propertyGroupFactory(s, (function() {
                return r
              })), n = t(e, i, s.propertyGroup), s.numProperties = n.length, s._name = "Contents", s
            }
          }(),
          TextExpressionInterface = function(t) {
            var e;

            function i(t) {
              return "ADBE Text Document" === t ? i.sourceText : null
            }
            return Object.defineProperty(i, "sourceText", {
              get: function() {
                t.textProperty.getValue();
                var i = t.textProperty.currentData.t;
                return e && i === e.value || ((e = new String(i)).value = i || new String(i), Object.defineProperty(e, "style", {
                  get: function() {
                    return {
                      fillColor: t.textProperty.currentData.fc
                    }
                  }
                })), e
              }
            }), i
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
                i = t.getFootageData();

              function r(t) {
                if (i[t]) return e = t, "object" === _typeof(i = i[t]) ? r : i;
                var n = t.indexOf(e);
                if (-1 !== n) {
                  var s = parseInt(t.substr(n + e.length), 10);
                  return "object" === _typeof(i = i[s]) ? r : i
                }
                return ""
              }
              return function() {
                return e = "", i = t.getFootageData(), r
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
          searchExpressions: function(t, e, i) {
            e.x && (i.k = !0, i.x = !0, i.initiateExpression = ExpressionManager.initiateExpression, i.effectsSequence.push(i.initiateExpression(t, e, i).bind(i)))
          },
          getSpeedAtTime: function(t) {
            var e = this.getValueAtTime(t),
              i = this.getValueAtTime(t + -.01),
              r = 0;
            if (e.length) {
              var n;
              for (n = 0; n < e.length; n += 1) r += Math.pow(i[n] - e[n], 2);
              r = 100 * Math.sqrt(r)
            } else r = 0;
            return r
          },
          getVelocityAtTime: function(t) {
            if (void 0 !== this.vel) return this.vel;
            var e, i, r = -.001,
              n = this.getValueAtTime(t),
              s = this.getValueAtTime(t + r);
            if (n.length)
              for (e = createTypedArray("float32", n.length), i = 0; i < n.length; i += 1) e[i] = (s[i] - n[i]) / r;
            else e = (s - n) / r;
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
          function t(t, e, i) {
            if (!this.k || !this.keyframes) return this.pv;
            t = t ? t.toLowerCase() : "";
            var r, n, s, a, o, l = this.comp.renderedFrame,
              h = this.keyframes,
              p = h[h.length - 1].t;
            if (l <= p) return this.pv;
            if (i ? n = p - (r = e ? Math.abs(p - this.elem.comp.globalData.frameRate * e) : Math.max(0, p - this.elem.data.ip)) : ((!e || e > h.length - 1) && (e = h.length - 1), r = p - (n = h[h.length - 1 - e].t)), "pingpong" === t) {
              if (Math.floor((l - n) / r) % 2 != 0) return this.getValueAtTime((r - (l - n) % r + n) / this.comp.globalData.frameRate, 0)
            } else {
              if ("offset" === t) {
                var c = this.getValueAtTime(n / this.comp.globalData.frameRate, 0),
                  u = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
                  f = this.getValueAtTime(((l - n) % r + n) / this.comp.globalData.frameRate, 0),
                  d = Math.floor((l - n) / r);
                if (this.pv.length) {
                  for (a = (o = new Array(c.length)).length, s = 0; s < a; s += 1) o[s] = (u[s] - c[s]) * d + f[s];
                  return o
                }
                return (u - c) * d + f
              }
              if ("continue" === t) {
                var m = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
                  y = this.getValueAtTime((p - .001) / this.comp.globalData.frameRate, 0);
                if (this.pv.length) {
                  for (a = (o = new Array(m.length)).length, s = 0; s < a; s += 1) o[s] = m[s] + (m[s] - y[s]) * ((l - p) / this.comp.globalData.frameRate) / 5e-4;
                  return o
                }
                return m + (l - p) / .001 * (m - y)
              }
            }
            return this.getValueAtTime(((l - n) % r + n) / this.comp.globalData.frameRate, 0)
          }

          function e(t, e, i) {
            if (!this.k) return this.pv;
            t = t ? t.toLowerCase() : "";
            var r, n, s, a, o, l = this.comp.renderedFrame,
              h = this.keyframes,
              p = h[0].t;
            if (l >= p) return this.pv;
            if (i ? n = p + (r = e ? Math.abs(this.elem.comp.globalData.frameRate * e) : Math.max(0, this.elem.data.op - p)) : ((!e || e > h.length - 1) && (e = h.length - 1), r = (n = h[e].t) - p), "pingpong" === t) {
              if (Math.floor((p - l) / r) % 2 == 0) return this.getValueAtTime(((p - l) % r + p) / this.comp.globalData.frameRate, 0)
            } else {
              if ("offset" === t) {
                var c = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
                  u = this.getValueAtTime(n / this.comp.globalData.frameRate, 0),
                  f = this.getValueAtTime((r - (p - l) % r + p) / this.comp.globalData.frameRate, 0),
                  d = Math.floor((p - l) / r) + 1;
                if (this.pv.length) {
                  for (a = (o = new Array(c.length)).length, s = 0; s < a; s += 1) o[s] = f[s] - (u[s] - c[s]) * d;
                  return o
                }
                return f - (u - c) * d
              }
              if ("continue" === t) {
                var m = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
                  y = this.getValueAtTime((p + .001) / this.comp.globalData.frameRate, 0);
                if (this.pv.length) {
                  for (a = (o = new Array(m.length)).length, s = 0; s < a; s += 1) o[s] = m[s] + (m[s] - y[s]) * (p - l) / .001;
                  return o
                }
                return m + (m - y) * (p - l) / .001
              }
            }
            return this.getValueAtTime((r - ((p - l) % r + p)) / this.comp.globalData.frameRate, 0)
          }

          function i(t, e) {
            if (!this.k) return this.pv;
            if (t = .5 * (t || .4), (e = Math.floor(e || 5)) <= 1) return this.pv;
            var i, r, n = this.comp.renderedFrame / this.comp.globalData.frameRate,
              s = n - t,
              a = e > 1 ? (n + t - s) / (e - 1) : 1,
              o = 0,
              l = 0;
            for (i = this.pv.length ? createTypedArray("float32", this.pv.length) : 0; o < e;) {
              if (r = this.getValueAtTime(s + o * a), this.pv.length)
                for (l = 0; l < this.pv.length; l += 1) i[l] += r[l];
              else i += r;
              o += 1
            }
            if (this.pv.length)
              for (l = 0; l < this.pv.length; l += 1) i[l] /= e;
            else i /= e;
            return i
          }

          function r(t) {
            this._transformCachingAtTime || (this._transformCachingAtTime = {
              v: new Matrix
            });
            var e = this._transformCachingAtTime.v;
            if (e.cloneFromProps(this.pre.props), this.appliedTransformations < 1) {
              var i = this.a.getValueAtTime(t);
              e.translate(-i[0] * this.a.mult, -i[1] * this.a.mult, i[2] * this.a.mult)
            }
            if (this.appliedTransformations < 2) {
              var r = this.s.getValueAtTime(t);
              e.scale(r[0] * this.s.mult, r[1] * this.s.mult, r[2] * this.s.mult)
            }
            if (this.sk && this.appliedTransformations < 3) {
              var n = this.sk.getValueAtTime(t),
                s = this.sa.getValueAtTime(t);
              e.skewFromAxis(-n * this.sk.mult, s * this.sa.mult)
            }
            if (this.r && this.appliedTransformations < 4) {
              var a = this.r.getValueAtTime(t);
              e.rotate(-a * this.r.mult)
            } else if (!this.r && this.appliedTransformations < 4) {
              var o = this.rz.getValueAtTime(t),
                l = this.ry.getValueAtTime(t),
                h = this.rx.getValueAtTime(t),
                p = this.or.getValueAtTime(t);
              e.rotateZ(-o * this.rz.mult).rotateY(l * this.ry.mult).rotateX(h * this.rx.mult).rotateZ(-p[2] * this.or.mult).rotateY(p[1] * this.or.mult).rotateX(p[0] * this.or.mult)
            }
            if (this.data.p && this.data.p.s) {
              var c = this.px.getValueAtTime(t),
                u = this.py.getValueAtTime(t);
              if (this.data.p.z) {
                var f = this.pz.getValueAtTime(t);
                e.translate(c * this.px.mult, u * this.py.mult, -f * this.pz.mult)
              } else e.translate(c * this.px.mult, u * this.py.mult, 0)
            } else {
              var d = this.p.getValueAtTime(t);
              e.translate(d[0] * this.p.mult, d[1] * this.p.mult, -d[2] * this.p.mult)
            }
            return e
          }

          function n() {
            return this.v.clone(new Matrix)
          }
          var s = TransformPropertyFactory.getTransformProperty;
          TransformPropertyFactory.getTransformProperty = function(t, e, i) {
            var a = s(t, e, i);
            return a.dynamicProperties.length ? a.getValueAtTime = r.bind(a) : a.getValueAtTime = n.bind(a), a.setGroupProperty = expressionHelpers.setGroupProperty, a
          };
          var a = PropertyFactory.getProp;
          PropertyFactory.getProp = function(r, n, s, o, l) {
            var h = a(r, n, s, o, l);
            h.kf ? h.getValueAtTime = expressionHelpers.getValueAtTime.bind(h) : h.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(h), h.setGroupProperty = expressionHelpers.setGroupProperty, h.loopOut = t, h.loopIn = e, h.smooth = i, h.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(h), h.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(h), h.numKeys = 1 === n.a ? n.k.length : 0, h.propertyIndex = n.ix;
            var p = 0;
            return 0 !== s && (p = createTypedArray("float32", 1 === n.a ? n.k[0].s.length : n.k.length)), h._cachingAtTime = {
              lastFrame: initialDefaultFrame,
              lastIndex: 0,
              value: p
            }, expressionHelpers.searchExpressions(r, n, h), h.k && l.addDynamicProperty(h), h
          };
          var o = ShapePropertyFactory.getConstructorFunction(),
            l = ShapePropertyFactory.getKeyframedConstructorFunction();

          function h() {}
          h.prototype = {
            vertices: function(t, e) {
              this.k && this.getValue();
              var i, r = this.v;
              void 0 !== e && (r = this.getValueAtTime(e, 0));
              var n = r._length,
                s = r[t],
                a = r.v,
                o = createSizedArray(n);
              for (i = 0; i < n; i += 1) o[i] = "i" === t || "o" === t ? [s[i][0] - a[i][0], s[i][1] - a[i][1]] : [s[i][0], s[i][1]];
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
              var i = this.v;
              void 0 !== e && (i = this.getValueAtTime(e, 0)), this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(i));
              for (var r, n = this._segmentsLength, s = n.lengths, a = n.totalLength * t, o = 0, l = s.length, h = 0; o < l;) {
                if (h + s[o].addedLength > a) {
                  var p = o,
                    c = i.c && o === l - 1 ? 0 : o + 1,
                    u = (a - h) / s[o].addedLength;
                  r = bez.getPointInSegment(i.v[p], i.v[c], i.o[p], i.i[c], u, s[o]);
                  break
                }
                h += s[o].addedLength, o += 1
              }
              return r || (r = i.c ? [i.v[0][0], i.v[0][1]] : [i.v[i._length - 1][0], i.v[i._length - 1][1]]), r
            },
            vectorOnPath: function(t, e, i) {
              1 == t ? t = this.v.c : 0 == t && (t = .999);
              var r = this.pointOnPath(t, e),
                n = this.pointOnPath(t + .001, e),
                s = n[0] - r[0],
                a = n[1] - r[1],
                o = Math.sqrt(Math.pow(s, 2) + Math.pow(a, 2));
              return 0 === o ? [0, 0] : "tangent" === i ? [s / o, a / o] : [-a / o, s / o]
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
          ShapePropertyFactory.getShapeProp = function(t, e, i, r, n) {
            var s = p(t, e, i, r, n);
            return s.propertyIndex = e.ix, s.lock = !1, 3 === i ? expressionHelpers.searchExpressions(t, e.pt, s) : 4 === i && expressionHelpers.searchExpressions(t, e.ks, s), s.k && t.addDynamicProperty(s), s
          }
        }

        function initialize$1() {
          addPropertyDecorator()
        }

        function addDecorator() {
          TextProperty.prototype.getExpressionValue = function(t, e) {
            var i = this.calculateExpression(e);
            if (t.t !== i) {
              var r = {};
              return this.copyData(r, t), r.t = i.toString(), r.__complete = !1, r
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
            var i, r, n = createNS("feMerge");
            for (n.setAttribute("result", t), r = 0; r < e.length; r += 1)(i = createNS("feMergeNode")).setAttribute("in", e[r]), n.appendChild(i), n.appendChild(i);
            return n
          }
        };
        var linearFilterValue = "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0";

        function SVGTintFilter(t, e, i, r, n) {
          this.filterManager = e;
          var s = createNS("feColorMatrix");
          s.setAttribute("type", "matrix"), s.setAttribute("color-interpolation-filters", "linearRGB"), s.setAttribute("values", linearFilterValue + " 1 0"), this.linearFilter = s, s.setAttribute("result", r + "_tint_1"), t.appendChild(s), (s = createNS("feColorMatrix")).setAttribute("type", "matrix"), s.setAttribute("color-interpolation-filters", "sRGB"), s.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), s.setAttribute("result", r + "_tint_2"), t.appendChild(s), this.matrixFilter = s;
          var a = this.createMergeNode(r, [n, r + "_tint_1", r + "_tint_2"]);
          t.appendChild(a)
        }

        function SVGFillFilter(t, e, i, r) {
          this.filterManager = e;
          var n = createNS("feColorMatrix");
          n.setAttribute("type", "matrix"), n.setAttribute("color-interpolation-filters", "sRGB"), n.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), n.setAttribute("result", r), t.appendChild(n), this.matrixFilter = n
        }

        function SVGStrokeEffect(t, e, i) {
          this.initialized = !1, this.filterManager = e, this.elem = i, this.paths = []
        }

        function SVGTritoneFilter(t, e, i, r) {
          this.filterManager = e;
          var n = createNS("feColorMatrix");
          n.setAttribute("type", "matrix"), n.setAttribute("color-interpolation-filters", "linearRGB"), n.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), t.appendChild(n);
          var s = createNS("feComponentTransfer");
          s.setAttribute("color-interpolation-filters", "sRGB"), s.setAttribute("result", r), this.matrixFilter = s;
          var a = createNS("feFuncR");
          a.setAttribute("type", "table"), s.appendChild(a), this.feFuncR = a;
          var o = createNS("feFuncG");
          o.setAttribute("type", "table"), s.appendChild(o), this.feFuncG = o;
          var l = createNS("feFuncB");
          l.setAttribute("type", "table"), s.appendChild(l), this.feFuncB = l, t.appendChild(s)
        }

        function SVGProLevelsFilter(t, e, i, r) {
          this.filterManager = e;
          var n = this.filterManager.effectElements,
            s = createNS("feComponentTransfer");
          (n[10].p.k || 0 !== n[10].p.v || n[11].p.k || 1 !== n[11].p.v || n[12].p.k || 1 !== n[12].p.v || n[13].p.k || 0 !== n[13].p.v || n[14].p.k || 1 !== n[14].p.v) && (this.feFuncR = this.createFeFunc("feFuncR", s)), (n[17].p.k || 0 !== n[17].p.v || n[18].p.k || 1 !== n[18].p.v || n[19].p.k || 1 !== n[19].p.v || n[20].p.k || 0 !== n[20].p.v || n[21].p.k || 1 !== n[21].p.v) && (this.feFuncG = this.createFeFunc("feFuncG", s)), (n[24].p.k || 0 !== n[24].p.v || n[25].p.k || 1 !== n[25].p.v || n[26].p.k || 1 !== n[26].p.v || n[27].p.k || 0 !== n[27].p.v || n[28].p.k || 1 !== n[28].p.v) && (this.feFuncB = this.createFeFunc("feFuncB", s)), (n[31].p.k || 0 !== n[31].p.v || n[32].p.k || 1 !== n[32].p.v || n[33].p.k || 1 !== n[33].p.v || n[34].p.k || 0 !== n[34].p.v || n[35].p.k || 1 !== n[35].p.v) && (this.feFuncA = this.createFeFunc("feFuncA", s)), (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (s.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(s)), (n[3].p.k || 0 !== n[3].p.v || n[4].p.k || 1 !== n[4].p.v || n[5].p.k || 1 !== n[5].p.v || n[6].p.k || 0 !== n[6].p.v || n[7].p.k || 1 !== n[7].p.v) && ((s = createNS("feComponentTransfer")).setAttribute("color-interpolation-filters", "sRGB"), s.setAttribute("result", r), t.appendChild(s), this.feFuncRComposed = this.createFeFunc("feFuncR", s), this.feFuncGComposed = this.createFeFunc("feFuncG", s), this.feFuncBComposed = this.createFeFunc("feFuncB", s))
        }

        function SVGDropShadowEffect(t, e, i, r, n) {
          var s = e.container.globalData.renderConfig.filterSize,
            a = e.data.fs || s;
          t.setAttribute("x", a.x || s.x), t.setAttribute("y", a.y || s.y), t.setAttribute("width", a.width || s.width), t.setAttribute("height", a.height || s.height), this.filterManager = e;
          var o = createNS("feGaussianBlur");
          o.setAttribute("in", "SourceAlpha"), o.setAttribute("result", r + "_drop_shadow_1"), o.setAttribute("stdDeviation", "0"), this.feGaussianBlur = o, t.appendChild(o);
          var l = createNS("feOffset");
          l.setAttribute("dx", "25"), l.setAttribute("dy", "0"), l.setAttribute("in", r + "_drop_shadow_1"), l.setAttribute("result", r + "_drop_shadow_2"), this.feOffset = l, t.appendChild(l);
          var h = createNS("feFlood");
          h.setAttribute("flood-color", "#00ff00"), h.setAttribute("flood-opacity", "1"), h.setAttribute("result", r + "_drop_shadow_3"), this.feFlood = h, t.appendChild(h);
          var p = createNS("feComposite");
          p.setAttribute("in", r + "_drop_shadow_3"), p.setAttribute("in2", r + "_drop_shadow_2"), p.setAttribute("operator", "in"), p.setAttribute("result", r + "_drop_shadow_4"), t.appendChild(p);
          var c = this.createMergeNode(r, [r + "_drop_shadow_4", n]);
          t.appendChild(c)
        }
        extendPrototype([SVGComposableEffect], SVGTintFilter), SVGTintFilter.prototype.renderFrame = function(t) {
          if (t || this.filterManager._mdf) {
            var e = this.filterManager.effectElements[0].p.v,
              i = this.filterManager.effectElements[1].p.v,
              r = this.filterManager.effectElements[2].p.v / 100;
            this.linearFilter.setAttribute("values", linearFilterValue + " " + r + " 0"), this.matrixFilter.setAttribute("values", i[0] - e[0] + " 0 0 0 " + e[0] + " " + (i[1] - e[1]) + " 0 0 0 " + e[1] + " " + (i[2] - e[2]) + " 0 0 0 " + e[2] + " 0 0 0 1 0")
          }
        }, SVGFillFilter.prototype.renderFrame = function(t) {
          if (t || this.filterManager._mdf) {
            var e = this.filterManager.effectElements[2].p.v,
              i = this.filterManager.effectElements[6].p.v;
            this.matrixFilter.setAttribute("values", "0 0 0 0 " + e[0] + " 0 0 0 0 " + e[1] + " 0 0 0 0 " + e[2] + " 0 0 0 " + i + " 0")
          }
        }, SVGStrokeEffect.prototype.initialize = function() {
          var t, e, i, r, n = this.elem.layerElement.children || this.elem.layerElement.childNodes;
          for (1 === this.filterManager.effectElements[1].p.v ? (r = this.elem.maskManager.masksProperties.length, i = 0) : r = 1 + (i = this.filterManager.effectElements[0].p.v - 1), (e = createNS("g")).setAttribute("fill", "none"), e.setAttribute("stroke-linecap", "round"), e.setAttribute("stroke-dashoffset", 1); i < r; i += 1) t = createNS("path"), e.appendChild(t), this.paths.push({
            p: t,
            m: i
          });
          if (3 === this.filterManager.effectElements[10].p.v) {
            var s = createNS("mask"),
              a = createElementID();
            s.setAttribute("id", a), s.setAttribute("mask-type", "alpha"), s.appendChild(e), this.elem.globalData.defs.appendChild(s);
            var o = createNS("g");
            for (o.setAttribute("mask", "url(" + getLocationHref() + "#" + a + ")"); n[0];) o.appendChild(n[0]);
            this.elem.layerElement.appendChild(o), this.masker = s, e.setAttribute("stroke", "#fff")
          } else if (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) {
            if (2 === this.filterManager.effectElements[10].p.v)
              for (n = this.elem.layerElement.children || this.elem.layerElement.childNodes; n.length;) this.elem.layerElement.removeChild(n[0]);
            this.elem.layerElement.appendChild(e), this.elem.layerElement.removeAttribute("mask"), e.setAttribute("stroke", "#fff")
          }
          this.initialized = !0, this.pathMasker = e
        }, SVGStrokeEffect.prototype.renderFrame = function(t) {
          var e;
          this.initialized || this.initialize();
          var i, r, n = this.paths.length;
          for (e = 0; e < n; e += 1)
            if (-1 !== this.paths[e].m && (i = this.elem.maskManager.viewData[this.paths[e].m], r = this.paths[e].p, (t || this.filterManager._mdf || i.prop._mdf) && r.setAttribute("d", i.lastPath), t || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || i.prop._mdf)) {
              var s;
              if (0 !== this.filterManager.effectElements[7].p.v || 100 !== this.filterManager.effectElements[8].p.v) {
                var a = .01 * Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v),
                  o = .01 * Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v),
                  l = r.getTotalLength();
                s = "0 0 0 " + l * a + " ";
                var h, p = l * (o - a),
                  c = 1 + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01,
                  u = Math.floor(p / c);
                for (h = 0; h < u; h += 1) s += "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01 + " ";
                s += "0 " + 10 * l + " 0 0"
              } else s = "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01;
              r.setAttribute("stroke-dasharray", s)
            } if ((t || this.filterManager.effectElements[4].p._mdf) && this.pathMasker.setAttribute("stroke-width", 2 * this.filterManager.effectElements[4].p.v), (t || this.filterManager.effectElements[6].p._mdf) && this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v), (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) && (t || this.filterManager.effectElements[3].p._mdf)) {
            var f = this.filterManager.effectElements[3].p.v;
            this.pathMasker.setAttribute("stroke", "rgb(" + bmFloor(255 * f[0]) + "," + bmFloor(255 * f[1]) + "," + bmFloor(255 * f[2]) + ")")
          }
        }, SVGTritoneFilter.prototype.renderFrame = function(t) {
          if (t || this.filterManager._mdf) {
            var e = this.filterManager.effectElements[0].p.v,
              i = this.filterManager.effectElements[1].p.v,
              r = this.filterManager.effectElements[2].p.v,
              n = r[0] + " " + i[0] + " " + e[0],
              s = r[1] + " " + i[1] + " " + e[1],
              a = r[2] + " " + i[2] + " " + e[2];
            this.feFuncR.setAttribute("tableValues", n), this.feFuncG.setAttribute("tableValues", s), this.feFuncB.setAttribute("tableValues", a)
          }
        }, SVGProLevelsFilter.prototype.createFeFunc = function(t, e) {
          var i = createNS(t);
          return i.setAttribute("type", "table"), e.appendChild(i), i
        }, SVGProLevelsFilter.prototype.getTableValue = function(t, e, i, r, n) {
          for (var s, a, o = 0, l = Math.min(t, e), h = Math.max(t, e), p = Array.call(null, {
              length: 256
            }), c = 0, u = n - r, f = e - t; o <= 256;) a = (s = o / 256) <= l ? f < 0 ? n : r : s >= h ? f < 0 ? r : n : r + u * Math.pow((s - t) / f, 1 / i), p[c] = a, c += 1, o += 256 / 255;
          return p.join(" ")
        }, SVGProLevelsFilter.prototype.renderFrame = function(t) {
          if (t || this.filterManager._mdf) {
            var e, i = this.filterManager.effectElements;
            this.feFuncRComposed && (t || i[3].p._mdf || i[4].p._mdf || i[5].p._mdf || i[6].p._mdf || i[7].p._mdf) && (e = this.getTableValue(i[3].p.v, i[4].p.v, i[5].p.v, i[6].p.v, i[7].p.v), this.feFuncRComposed.setAttribute("tableValues", e), this.feFuncGComposed.setAttribute("tableValues", e), this.feFuncBComposed.setAttribute("tableValues", e)), this.feFuncR && (t || i[10].p._mdf || i[11].p._mdf || i[12].p._mdf || i[13].p._mdf || i[14].p._mdf) && (e = this.getTableValue(i[10].p.v, i[11].p.v, i[12].p.v, i[13].p.v, i[14].p.v), this.feFuncR.setAttribute("tableValues", e)), this.feFuncG && (t || i[17].p._mdf || i[18].p._mdf || i[19].p._mdf || i[20].p._mdf || i[21].p._mdf) && (e = this.getTableValue(i[17].p.v, i[18].p.v, i[19].p.v, i[20].p.v, i[21].p.v), this.feFuncG.setAttribute("tableValues", e)), this.feFuncB && (t || i[24].p._mdf || i[25].p._mdf || i[26].p._mdf || i[27].p._mdf || i[28].p._mdf) && (e = this.getTableValue(i[24].p.v, i[25].p.v, i[26].p.v, i[27].p.v, i[28].p.v), this.feFuncB.setAttribute("tableValues", e)), this.feFuncA && (t || i[31].p._mdf || i[32].p._mdf || i[33].p._mdf || i[34].p._mdf || i[35].p._mdf) && (e = this.getTableValue(i[31].p.v, i[32].p.v, i[33].p.v, i[34].p.v, i[35].p.v), this.feFuncA.setAttribute("tableValues", e))
          }
        }, extendPrototype([SVGComposableEffect], SVGDropShadowEffect), SVGDropShadowEffect.prototype.renderFrame = function(t) {
          if (t || this.filterManager._mdf) {
            if ((t || this.filterManager.effectElements[4].p._mdf) && this.feGaussianBlur.setAttribute("stdDeviation", this.filterManager.effectElements[4].p.v / 4), t || this.filterManager.effectElements[0].p._mdf) {
              var e = this.filterManager.effectElements[0].p.v;
              this.feFlood.setAttribute("flood-color", rgbToHex(Math.round(255 * e[0]), Math.round(255 * e[1]), Math.round(255 * e[2])))
            }
            if ((t || this.filterManager.effectElements[1].p._mdf) && this.feFlood.setAttribute("flood-opacity", this.filterManager.effectElements[1].p.v / 255), t || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf) {
              var i = this.filterManager.effectElements[3].p.v,
                r = (this.filterManager.effectElements[2].p.v - 90) * degToRads,
                n = i * Math.cos(r),
                s = i * Math.sin(r);
              this.feOffset.setAttribute("dx", n), this.feOffset.setAttribute("dy", s)
            }
          }
        };
        var _svgMatteSymbols = [];

        function SVGMatte3Effect(t, e, i) {
          this.initialized = !1, this.filterManager = e, this.filterElem = t, this.elem = i, i.matteElement = createNS("g"), i.matteElement.appendChild(i.layerElement), i.matteElement.appendChild(i.transformedElement), i.baseElement = i.matteElement
        }

        function SVGGaussianBlurEffect(t, e, i, r) {
          t.setAttribute("x", "-100%"), t.setAttribute("y", "-100%"), t.setAttribute("width", "300%"), t.setAttribute("height", "300%"), this.filterManager = e;
          var n = createNS("feGaussianBlur");
          n.setAttribute("result", r), t.appendChild(n), this.feGaussianBlur = n
        }

        function TransformEffect() {}

        function SVGTransformEffect(t, e) {
          this.init(e)
        }

        function CVTransformEffect(t) {
          this.init(t)
        }
        return SVGMatte3Effect.prototype.findSymbol = function(t) {
          for (var e = 0, i = _svgMatteSymbols.length; e < i;) {
            if (_svgMatteSymbols[e] === t) return _svgMatteSymbols[e];
            e += 1
          }
          return null
        }, SVGMatte3Effect.prototype.replaceInParent = function(t, e) {
          var i = t.layerElement.parentNode;
          if (i) {
            for (var r, n = i.children, s = 0, a = n.length; s < a && n[s] !== t.layerElement;) s += 1;
            s <= a - 2 && (r = n[s + 1]);
            var o = createNS("use");
            o.setAttribute("href", "#" + e), r ? i.insertBefore(o, r) : i.appendChild(o)
          }
        }, SVGMatte3Effect.prototype.setElementAsMask = function(t, e) {
          if (!this.findSymbol(e)) {
            var i = createElementID(),
              r = createNS("mask");
            r.setAttribute("id", e.layerId), r.setAttribute("mask-type", "alpha"), _svgMatteSymbols.push(e);
            var n = t.globalData.defs;
            n.appendChild(r);
            var s = createNS("symbol");
            s.setAttribute("id", i), this.replaceInParent(e, i), s.appendChild(e.layerElement), n.appendChild(s);
            var a = createNS("use");
            a.setAttribute("href", "#" + i), r.appendChild(a), e.data.hd = !1, e.show()
          }
          t.setMatte(e.layerId)
        }, SVGMatte3Effect.prototype.initialize = function() {
          for (var t = this.filterManager.effectElements[0].p.v, e = this.elem.comp.elements, i = 0, r = e.length; i < r;) e[i] && e[i].data.ind === t && this.setElementAsMask(this.elem, e[i]), i += 1;
          this.initialized = !0
        }, SVGMatte3Effect.prototype.renderFrame = function() {
          this.initialized || this.initialize()
        }, SVGGaussianBlurEffect.prototype.renderFrame = function(t) {
          if (t || this.filterManager._mdf) {
            var e = .3 * this.filterManager.effectElements[0].p.v,
              i = this.filterManager.effectElements[1].p.v,
              r = 3 == i ? 0 : e,
              n = 2 == i ? 0 : e;
            this.feGaussianBlur.setAttribute("stdDeviation", r + " " + n);
            var s = 1 == this.filterManager.effectElements[2].p.v ? "wrap" : "duplicate";
            this.feGaussianBlur.setAttribute("edgeMode", s)
          }
        }, TransformEffect.prototype.init = function(t) {
          this.effectsManager = t, this.type = effectTypes.TRANSFORM_EFFECT, this.matrix = new Matrix, this.opacity = -1, this._mdf = !1, this._opMdf = !1
        }, TransformEffect.prototype.renderFrame = function(t) {
          if (this._opMdf = !1, this._mdf = !1, t || this.effectsManager._mdf) {
            var e = this.effectsManager.effectElements,
              i = e[0].p.v,
              r = e[1].p.v,
              n = 1 === e[2].p.v,
              s = e[3].p.v,
              a = n ? s : e[4].p.v,
              o = e[5].p.v,
              l = e[6].p.v,
              h = e[7].p.v;
            this.matrix.reset(), this.matrix.translate(-i[0], -i[1], i[2]), this.matrix.scale(.01 * a, .01 * s, 1), this.matrix.rotate(-h * degToRads), this.matrix.skewFromAxis(-o * degToRads, (l + 90) * degToRads), this.matrix.translate(r[0], r[1], 0), this._mdf = !0, this.opacity !== e[8].p.v && (this.opacity = e[8].p.v, this._opMdf = !0)
          }
        }, extendPrototype([TransformEffect], SVGTransformEffect), extendPrototype([TransformEffect], CVTransformEffect), registerRenderer("canvas", CanvasRenderer), registerRenderer("html", HybridRenderer), registerRenderer("svg", SVGRenderer), ShapeModifiers.registerModifier("tm", TrimModifier), ShapeModifiers.registerModifier("pb", PuckerAndBloatModifier), ShapeModifiers.registerModifier("rp", RepeaterModifier), ShapeModifiers.registerModifier("rd", RoundCornersModifier), ShapeModifiers.registerModifier("zz", ZigZagModifier), ShapeModifiers.registerModifier("op", OffsetPathModifier), setExpressionsPlugin(Expressions), setExpressionInterfaces(getInterface), initialize$1(), initialize(), registerEffect$1(20, SVGTintFilter, !0), registerEffect$1(21, SVGFillFilter, !0), registerEffect$1(22, SVGStrokeEffect, !1), registerEffect$1(23, SVGTritoneFilter, !0), registerEffect$1(24, SVGProLevelsFilter, !0), registerEffect$1(25, SVGDropShadowEffect, !0), registerEffect$1(28, SVGMatte3Effect, !1), registerEffect$1(29, SVGGaussianBlurEffect, !0), registerEffect$1(35, SVGTransformEffect, !1), registerEffect(35, CVTransformEffect), lottie
      }, module.exports = factory())
    },
    40749: (t, e, i) => {
      "use strict";
      i.d(e, {
        v: () => n
      });
      var r = i(51275);
      class n {
        constructor() {
          this.subscriptions = []
        }
        add(t) {
          return (0, r.Kq)(this.subscriptions, t), () => (0, r.Ai)(this.subscriptions, t)
        }
        notify(t, e, i) {
          const r = this.subscriptions.length;
          if (r)
            if (1 === r) this.subscriptions[0](t, e, i);
            else
              for (let n = 0; n < r; n++) {
                const r = this.subscriptions[n];
                r && r(t, e, i)
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
    40992: (t, e, i) => {
      "use strict";
      i.d(e, {
        V: () => r
      });
      const r = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2
    },
    42001: (t, e, i) => {
      "use strict";

      function r(t) {
        let e = null;
        return () => null === e && (e = t, () => {
          e = null
        })
      }
      i.d(e, {
        D3: () => o,
        nQ: () => a
      });
      const n = r("dragHorizontal"),
        s = r("dragVertical");

      function a(t) {
        let e = !1;
        if ("y" === t) e = s();
        else if ("x" === t) e = n();
        else {
          const t = n(),
            i = s();
          t && i ? e = () => {
            t(), i()
          } : (t && t(), i && i())
        }
        return e
      }

      function o() {
        const t = a(!0);
        return !t || (t(), !1)
      }
    },
    42452: (t, e, i) => {
      "use strict";
      i.d(e, {
        O: () => vt
      });
      var r = i(81547),
        n = i(83884);
      var s = i(39997),
        a = i(40992),
        o = i(7953);
      const l = t => t * t,
        h = (0, o.G)(l),
        p = (0, a.V)(l);
      var c = i(30606),
        u = i(26217),
        f = i(72414);

      function d(t, e, i) {
        return i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6 ? t + 6 * (e - t) * i : i < .5 ? e : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t
      }
      var m = i(90213),
        y = i(53792),
        g = i(48324);
      const v = (t, e, i) => {
          const r = t * t;
          return Math.sqrt(Math.max(0, i * (e * e - r) + r))
        },
        b = [m.u, y.B, g.V];

      function x(t) {
        const e = (i = t, b.find((t => t.test(i))));
        var i;
        (0, r.V)(Boolean(e), `'${t}' is not an animatable color. Use the equivalent color code instead.`);
        let n = e.parse(t);
        return e === g.V && (n = function({
          hue: t,
          saturation: e,
          lightness: i,
          alpha: r
        }) {
          t /= 360, i /= 100;
          let n = 0,
            s = 0,
            a = 0;
          if (e /= 100) {
            const r = i < .5 ? i * (1 + e) : i + e - i * e,
              o = 2 * i - r;
            n = d(o, r, t + 1 / 3), s = d(o, r, t), a = d(o, r, t - 1 / 3)
          } else n = s = a = i;
          return {
            red: Math.round(255 * n),
            green: Math.round(255 * s),
            blue: Math.round(255 * a),
            alpha: r
          }
        }(n)), n
      }
      const P = (t, e) => {
        const i = x(t),
          r = x(e),
          n = {
            ...i
          };
        return t => (n.red = v(i.red, r.red, t), n.green = v(i.green, r.green, t), n.blue = v(i.blue, r.blue, t), n.alpha = (0, f.j)(i.alpha, r.alpha, t), y.B.transform(n))
      };
      var E = i(1104),
        S = i(62983);

      function C(t, e) {
        return "number" == typeof t ? i => (0, f.j)(t, e, i) : c.y.test(t) ? P(t, e) : w(t, e)
      }
      const T = (t, e) => {
          const i = [...t],
            r = i.length,
            n = t.map(((t, i) => C(t, e[i])));
          return t => {
            for (let e = 0; e < r; e++) i[e] = n[e](t);
            return i
          }
        },
        A = (t, e) => {
          const i = {
              ...t,
              ...e
            },
            r = {};
          for (const n in i) void 0 !== t[n] && void 0 !== e[n] && (r[n] = C(t[n], e[n]));
          return t => {
            for (const e in r) i[e] = r[e](t);
            return i
          }
        },
        w = (t, e) => {
          const i = S.f.createTransformer(e),
            n = (0, S.V)(t),
            s = (0, S.V)(e);
          return n.numColors === s.numColors && n.numNumbers >= s.numNumbers ? (0, E.F)(T(n.values, s.values), i) : ((0, r.$)(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), i => `${i>0?e:t}`)
        };
      var k = i(27485);
      const D = (t, e) => i => (0, f.j)(t, e, i);

      function M(t, e, {
        clamp: i = !0,
        ease: n,
        mixer: s
      } = {}) {
        const a = t.length;
        (0, r.V)(a === e.length, "Both input and output ranges must be the same length"), (0, r.V)(!n || !Array.isArray(n) || n.length === a - 1, "Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."), t[0] > t[a - 1] && (t = [...t].reverse(), e = [...e].reverse());
        const o = function(t, e, i) {
            const r = [],
              n = i || ("number" == typeof(s = t[0]) ? D : "string" == typeof s ? c.y.test(s) ? P : w : Array.isArray(s) ? T : "object" == typeof s ? A : D);
            var s;
            const a = t.length - 1;
            for (let i = 0; i < a; i++) {
              let s = n(t[i], t[i + 1]);
              if (e) {
                const t = Array.isArray(e) ? e[i] : e;
                s = (0, E.F)(t, s)
              }
              r.push(s)
            }
            return r
          }(e, n, s),
          l = o.length,
          h = e => {
            let i = 0;
            if (l > 1)
              for (; i < t.length - 2 && !(e < t[i + 1]); i++);
            const r = (0, k.q)(t[i], t[i + 1], e);
            return o[i](r)
          };
        return i ? e => h((0, u.q)(t[0], t[a - 1], e)) : h
      }
      var _ = i(88968);
      const F = (t, e, i) => (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;

      function I(t, e, i, r) {
        if (t === e && i === r) return _.l;
        return n => 0 === n || 1 === n ? n : F(function(t, e, i, r, n) {
          let s, a, o = 0;
          do {
            a = e + (i - e) / 2, s = F(a, r, n) - t, s > 0 ? i = a : e = a
          } while (Math.abs(s) > 1e-7 && ++o < 12);
          return a
        }(n, 0, 1, t, i), e, r)
      }
      var V = i(76781);
      const B = I(.33, 1.53, .69, .99),
        R = (0, o.G)(B),
        L = (0, a.V)(R),
        O = {
          linear: _.l,
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
        N = t => {
          if (Array.isArray(t)) {
            (0, r.V)(4 === t.length, "Cubic bezier arrays must contain four numerical values.");
            const [e, i, n, s] = t;
            return I(e, i, n, s)
          }
          return "string" == typeof t ? ((0, r.V)(void 0 !== O[t], `Invalid easing type '${t}'`), O[t]) : t
        };

      function G({
        keyframes: t,
        ease: e = p,
        times: i,
        duration: r = 300
      }) {
        t = [...t];
        const n = G[0],
          s = (t => Array.isArray(t) && "number" != typeof t[0])(e) ? e.map(N) : N(e),
          a = {
            done: !1,
            value: n
          },
          o = function(t, e) {
            return t.map((t => t * e))
          }(i && i.length === G.length ? i : function(t) {
            const e = t.length;
            return t.map(((t, i) => 0 !== i ? i / (e - 1) : 0))
          }(t), r);

        function l() {
          return M(o, t, {
            ease: Array.isArray(s) ? s : (e = t, i = s, e.map((() => i || p)).splice(0, e.length - 1))
          });
          var e, i
        }
        let h = l();
        return {
          next: t => (a.value = h(t), a.done = t >= r, a),
          flipTarget: () => {
            t.reverse(), h = l()
          }
        }
      }
      const z = 12;

      function j(t, e) {
        return t * Math.sqrt(1 - e * e)
      }
      var H = i(24080);
      const q = ["duration", "bounce"],
        $ = ["stiffness", "damping", "mass"];

      function W(t, e) {
        return e.some((e => void 0 !== t[e]))
      }

      function U({
        keyframes: t,
        restSpeed: e = 2,
        restDelta: i = .01,
        ...n
      }) {
        let s = t[0],
          a = t[t.length - 1];
        const o = {
            done: !1,
            value: s
          },
          {
            stiffness: l,
            damping: h,
            mass: p,
            velocity: c,
            duration: f,
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
            if (!W(t, $) && W(t, q)) {
              const i = function({
                duration: t = 800,
                bounce: e = .25,
                velocity: i = 0,
                mass: n = 1
              }) {
                let s, a;
                (0, r.$)(t <= 1e4, "Spring duration must be 10 seconds or less");
                let o = 1 - e;
                o = (0, u.q)(.05, 1, o), t = (0, u.q)(.01, 10, t / 1e3), o < 1 ? (s = e => {
                  const r = e * o,
                    n = r * t;
                  return .001 - (r - i) / j(e, o) * Math.exp(-n)
                }, a = e => {
                  const r = e * o * t,
                    n = r * i + i,
                    a = Math.pow(o, 2) * Math.pow(e, 2) * t,
                    l = Math.exp(-r),
                    h = j(Math.pow(e, 2), o);
                  return (.001 - s(e) > 0 ? -1 : 1) * ((n - a) * l) / h
                }) : (s = e => Math.exp(-e * t) * ((e - i) * t + 1) - .001, a = e => Math.exp(-e * t) * (t * t * (i - e)));
                const l = function(t, e, i) {
                  let r = i;
                  for (let i = 1; i < z; i++) r -= t(r) / e(r);
                  return r
                }(s, a, 5 / t);
                if (t *= 1e3, isNaN(l)) return {
                  stiffness: 100,
                  damping: 10,
                  duration: t
                }; {
                  const e = Math.pow(l, 2) * n;
                  return {
                    stiffness: e,
                    damping: 2 * o * Math.sqrt(n * e),
                    duration: t
                  }
                }
              }(t);
              e = {
                ...e,
                ...i,
                velocity: 0,
                mass: 1
              }, e.isResolvedFromDuration = !0
            }
            return e
          }(n);
        let m = Y,
          y = c ? -c / 1e3 : 0;
        const g = h / (2 * Math.sqrt(l * p));

        function v() {
          const t = a - s,
            e = Math.sqrt(l / p) / 1e3;
          if (void 0 === i && (i = Math.min(Math.abs(a - s) / 100, .4)), g < 1) {
            const i = j(e, g);
            m = r => {
              const n = Math.exp(-g * e * r);
              return a - n * ((y + g * e * t) / i * Math.sin(i * r) + t * Math.cos(i * r))
            }
          } else if (1 === g) m = i => a - Math.exp(-e * i) * (t + (y + e * t) * i);
          else {
            const i = e * Math.sqrt(g * g - 1);
            m = r => {
              const n = Math.exp(-g * e * r),
                s = Math.min(i * r, 300);
              return a - n * ((y + g * e * t) * Math.sinh(s) + i * t * Math.cosh(s)) / i
            }
          }
        }
        return v(), {
          next: t => {
            const r = m(t);
            if (d) o.done = t >= f;
            else {
              let n = y;
              if (0 !== t)
                if (g < 1) {
                  const e = Math.max(0, t - 5);
                  n = (0, H.f)(r - m(e), t - e)
                } else n = 0;
              const s = Math.abs(n) <= e,
                l = Math.abs(a - r) <= i;
              o.done = s && l
            }
            return o.value = o.done ? a : r, o
          },
          flipTarget: () => {
            y = -y, [s, a] = [a, s], v()
          }
        }
      }
      U.needsInterpolation = (t, e) => "string" == typeof t || "string" == typeof e;
      const Y = t => 0,
        X = {
          decay: function({
            keyframes: t = [0],
            velocity: e = 0,
            power: i = .8,
            timeConstant: r = 350,
            restDelta: n = .5,
            modifyTarget: s
          }) {
            const a = t[0],
              o = {
                done: !1,
                value: a
              };
            let l = i * e;
            const h = a + l,
              p = void 0 === s ? h : s(h);
            return p !== h && (l = p - a), {
              next: t => {
                const e = -l * Math.exp(-t / r);
                return o.done = !(e > n || e < -n), o.value = o.done ? p : p + e, o
              },
              flipTarget: () => {}
            }
          },
          keyframes: G,
          tween: G,
          spring: U
        };

      function J(t, e, i = 0) {
        return t - e - i
      }
      const K = t => {
        const e = ({
          delta: e
        }) => t(e);
        return {
          start: () => s.OH.update(e, !0),
          stop: () => s.eO.update(e)
        }
      };

      function Z({
        duration: t,
        driver: e = K,
        elapsed: i = 0,
        repeat: r = 0,
        repeatType: n = "loop",
        repeatDelay: s = 0,
        keyframes: a,
        autoplay: o = !0,
        onPlay: l,
        onStop: h,
        onComplete: p,
        onRepeat: c,
        onUpdate: u,
        type: f = "keyframes",
        ...d
      }) {
        var m, y;
        let g, v, b, x = 0,
          P = t,
          E = !1,
          S = !0;
        const C = X[a.length > 2 ? "keyframes" : f],
          T = a[0],
          A = a[a.length - 1];
        (null === (y = (m = C).needsInterpolation) || void 0 === y ? void 0 : y.call(m, T, A)) && (b = M([0, 100], [T, A], {
          clamp: !1
        }), a = [0, 100]);
        const w = C({
          ...d,
          duration: t,
          keyframes: a
        });
        return o && (l && l(), g = e((function(t) {
          if (S || (t = -t), i += t, !E) {
            const t = w.next(Math.max(0, i));
            v = t.value, b && (v = b(v)), E = S ? t.done : i <= 0
          }
          u && u(v), E && (0 === x && (P = void 0 !== P ? P : i), x < r ? function(t, e, i, r) {
            return r ? t >= e + i : t <= -i
          }(i, P, s, S) && (x++, "reverse" === n ? (S = x % 2 == 0, i = function(t, e = 0, i = 0, r = !0) {
            return r ? J(e + -t, e, i) : e - (t - e) + i
          }(i, P, s, S)) : (i = J(i, P, s), "mirror" === n && w.flipTarget()), E = !1, c && c()) : (g.stop(), p && p()))
        })), g.start()), {
          stop: () => {
            h && h(), g.stop()
          },
          sample: t => w.next(Math.max(0, t))
        }
      }
      const Q = ([t, e, i, r]) => `cubic-bezier(${t}, ${e}, ${i}, ${r})`,
        tt = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: Q([0, .65, .55, 1]),
          circOut: Q([.55, 0, 1, .45]),
          backIn: Q([.31, .01, .66, -.59]),
          backOut: Q([.33, 1.53, .69, .99])
        };

      function et(t) {
        if (t) return Array.isArray(t) ? Q(t) : tt[t]
      }
      var it = i(53437);

      function rt({
        keyframes: t,
        elapsed: e,
        onUpdate: i,
        onComplete: r
      }) {
        const n = () => (i && i(t[t.length - 1]), r && r(), () => {});
        return e ? (0, it.c)(n, -e) : n()
      }
      var nt = i(69602);
      const st = () => ({
          type: "spring",
          stiffness: 500,
          damping: 25,
          restSpeed: 10
        }),
        at = t => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === t ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10
        }),
        ot = () => ({
          type: "keyframes",
          ease: "linear",
          duration: .3
        }),
        lt = {
          type: "keyframes",
          duration: .8
        },
        ht = {
          x: st,
          y: st,
          z: st,
          rotate: st,
          rotateX: st,
          rotateY: st,
          rotateZ: st,
          scaleX: at,
          scaleY: at,
          scale: at,
          opacity: ot,
          backgroundColor: ot,
          color: ot,
          default: at
        },
        pt = (t, {
          keyframes: e
        }) => e.length > 2 ? lt : (ht[t] || ht.default)(e[1]),
        ct = (t, e) => !("zIndex" === t || "number" != typeof e && !Array.isArray(e) && ("string" != typeof e || !S.f.test(e) || e.startsWith("url(")));
      var ut = i(8687),
        ft = i(62896);
      const dt = {
          waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate")
        },
        mt = {},
        yt = {};
      for (const t in dt) yt[t] = () => (void 0 === mt[t] && (mt[t] = dt[t]()), mt[t]);
      const gt = new Set(["opacity"]),
        vt = (t, e, i, a = {}) => o => {
          const l = (0, ft.rU)(a, t) || {},
            h = l.delay || a.delay || 0;
          let {
            elapsed: p = 0
          } = a;
          p -= (0, n.f)(h);
          const c = function(t, e, i, r) {
              const n = ct(e, i);
              let s = void 0 !== r.from ? r.from : t.get();
              return "none" === s && n && "string" == typeof i ? s = (0, ut.J)(e, i) : (0, ft.be)(s) && "string" == typeof i ? s = (0, ft.RL)(i) : !Array.isArray(i) && (0, ft.be)(i) && "string" == typeof s && (i = (0, ft.RL)(s)), Array.isArray(i) ? (null === i[0] && (i[0] = s), i) : [s, i]
            }(e, t, i, l),
            u = c[0],
            f = c[c.length - 1],
            d = ct(t, u),
            m = ct(t, f);
          (0, r.$)(d === m, `You are trying to animate ${t} from "${u}" to "${f}". ${u} is not an animatable value - to enable this animation set ${u} to a value animatable to ${f} via the \`style\` property.`);
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
          if (!d || !m || !1 === l.type) return rt(y);
          if ("inertia" === l.type) {
            const t = function({
              keyframes: t,
              velocity: e = 0,
              min: i,
              max: r,
              power: n = .8,
              timeConstant: s = 750,
              bounceStiffness: a = 500,
              bounceDamping: o = 10,
              restDelta: l = 1,
              modifyTarget: h,
              driver: p,
              onUpdate: c,
              onComplete: u,
              onStop: f
            }) {
              const d = t[0];
              let m;

              function y(t) {
                return void 0 !== i && t < i || void 0 !== r && t > r
              }

              function g(t) {
                return void 0 === i ? r : void 0 === r || Math.abs(i - t) < Math.abs(r - t) ? i : r
              }

              function v(t) {
                null == m || m.stop(), m = Z({
                  keyframes: [0, 1],
                  velocity: 0,
                  ...t,
                  driver: p,
                  onUpdate: e => {
                    var i;
                    null == c || c(e), null === (i = t.onUpdate) || void 0 === i || i.call(t, e)
                  },
                  onComplete: u,
                  onStop: f
                })
              }

              function b(t) {
                v({
                  type: "spring",
                  stiffness: a,
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
                let t = n * e + d;
                void 0 !== h && (t = h(t));
                const r = g(t),
                  a = r === i ? -1 : 1;
                let o, p;
                const c = t => {
                  o = p, p = t, e = (0, H.f)(t - o, nt.u.delta), (1 === a && t > r || -1 === a && t < r) && b({
                    keyframes: [t, r],
                    velocity: e
                  })
                };
                v({
                  type: "decay",
                  keyframes: [d, 0],
                  velocity: e,
                  timeConstant: s,
                  power: n,
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
          }(0, ft.D2)(l) || (y = {
            ...y,
            ...pt(t, y)
          }), y.duration && (y.duration = (0, n.f)(y.duration)), y.repeatDelay && (y.repeatDelay = (0, n.f)(y.repeatDelay));
          const g = e.owner,
            v = g && g.current;
          if (yt.waapi() && gt.has(t) && !y.repeatDelay && "mirror" !== y.repeatType && 0 !== y.damping && g && v instanceof HTMLElement && !g.getProps().onUpdate) return function(t, e, {
            onUpdate: i,
            onComplete: r,
            ...n
          }) {
            let {
              keyframes: a,
              duration: o = .3,
              elapsed: l = 0,
              ease: h
            } = n;
            if ("spring" === n.type || !(!(p = n.ease) || Array.isArray(p) || "string" == typeof p && tt[p])) {
              const t = Z(n);
              let e = {
                done: !1,
                value: a[0]
              };
              const i = [];
              let r = 0;
              for (; !e.done;) e = t.sample(r), i.push(e.value), r += 10;
              a = i, o = r - 10, h = "linear"
            }
            var p;
            const c = function(t, e, i, {
              delay: r = 0,
              duration: n,
              repeat: s = 0,
              repeatType: a = "loop",
              ease: o,
              times: l
            } = {}) {
              return t.animate({
                [e]: i,
                offset: l
              }, {
                delay: r,
                duration: n,
                easing: et(o),
                fill: "both",
                iterations: s + 1,
                direction: "reverse" === a ? "alternate" : "normal"
              })
            }(t.owner.current, e, a, {
              ...n,
              delay: -l,
              duration: o,
              ease: h
            });
            return c.onfinish = () => {
              t.set(a[a.length - 1]), r && r()
            }, () => {
              const {
                currentTime: e
              } = c;
              if (e) {
                const i = Z(n);
                t.setWithVelocity(i.sample(e - 10).value, i.sample(e).value, 10)
              }
              s.OH.update((() => c.cancel()))
            }
          }(e, t, y); {
            const t = Z(y);
            return () => t.stop()
          }
        }
    },
    43320: (t, e, i) => {
      "use strict";
      i.d(e, {
        K: () => n
      });
      var r = i(57508);

      function n(t, e, i) {
        const n = t.getProps();
        return (0, r.a)(n, e, void 0 !== i ? i : n.custom, function(t) {
          const e = {};
          return t.values.forEach(((t, i) => e[i] = t.get())), e
        }(t), function(t) {
          const e = {};
          return t.values.forEach(((t, i) => e[i] = t.getVelocity())), e
        }(t))
      }
    },
    43628: (t, e, i) => {
      "use strict";
      i.d(e, {
        OU: () => h,
        Ql: () => c,
        Ww: () => m,
        hq: () => s,
        o4: () => l
      });
      var r = i(72414),
        n = i(97945);

      function s(t, e, i) {
        return i + e * (t - i)
      }

      function a(t, e, i, r, n) {
        return void 0 !== n && (t = s(t, n, r)), s(t, i, r) + e
      }

      function o(t, e = 0, i = 1, r, n) {
        t.min = a(t.min, e, i, r, n), t.max = a(t.max, e, i, r, n)
      }

      function l(t, {
        x: e,
        y: i
      }) {
        o(t.x, e.translate, e.scale, e.originPoint), o(t.y, i.translate, i.scale, i.originPoint)
      }

      function h(t, e, i, r = !1) {
        var s, a;
        const o = i.length;
        if (!o) return;
        let h, c;
        e.x = e.y = 1;
        for (let p = 0; p < o; p++) h = i[p], c = h.projectionDelta, "contents" !== (null === (a = null === (s = h.instance) || void 0 === s ? void 0 : s.style) || void 0 === a ? void 0 : a.display) && (r && h.options.layoutScroll && h.scroll && h !== h.root && m(t, {
          x: -h.scroll.offset.x,
          y: -h.scroll.offset.y
        }), c && (e.x *= c.x.scale, e.y *= c.y.scale, l(t, c)), r && (0, n.HD)(h.latestValues) && m(t, h.latestValues));
        e.x = p(e.x), e.y = p(e.y)
      }

      function p(t) {
        return Number.isInteger(t) || t > 1.0000000000001 || t < .999999999999 ? t : 1
      }

      function c(t, e) {
        t.min = t.min + e, t.max = t.max + e
      }

      function u(t, e, [i, n, s]) {
        const a = void 0 !== e[s] ? e[s] : .5,
          l = (0, r.j)(t.min, t.max, a);
        o(t, e[i], e[n], l, e.scale)
      }
      const f = ["x", "scaleX", "originX"],
        d = ["y", "scaleY", "originY"];

      function m(t, e) {
        u(t.x, e, f), u(t.y, e, d)
      }
    },
    43744: (t, e, i) => {
      "use strict";

      function r(t) {
        return "object" == typeof t && Object.prototype.hasOwnProperty.call(t, "current")
      }
      i.d(e, {
        X: () => r
      })
    },
    45871: (t, e, i) => {
      "use strict";
      i.d(e, {
        Q: () => r
      });
      const r = (0, i(62229).createContext)({
        transformPagePoint: t => t,
        isStatic: !1,
        reducedMotion: "never"
      })
    },
    46542: (t, e, i) => {
      "use strict";
      i.d(e, {
        d: () => a
      });
      var r = i(19665),
        n = i(83555),
        s = i(6342);

      function a(t, e, i, a) {
        (0, n.e)(t, e, void 0, a);
        for (const i in e.attrs) t.setAttribute(s.e.has(i) ? i : (0, r.I)(i), e.attrs[i])
      }
    },
    47510: (t, e, i) => {
      "use strict";
      i.d(e, {
        t: () => r
      });
      const r = (0, i(62229).createContext)(null)
    },
    48324: (t, e, i) => {
      "use strict";
      i.d(e, {
        V: () => o
      });
      var r = i(35121),
        n = i(2472),
        s = i(56285),
        a = i(82357);
      const o = {
        test: (0, a.$)("hsl", "hue"),
        parse: (0, a.q)("hue", "saturation", "lightness"),
        transform: ({
          hue: t,
          saturation: e,
          lightness: i,
          alpha: a = 1
        }) => "hsla(" + Math.round(t) + ", " + n.KN.transform((0, s.aj)(e)) + ", " + n.KN.transform((0, s.aj)(i)) + ", " + (0, s.aj)(r.X4.transform(a)) + ")"
      }
    },
    49300: (t, e, i) => {
      "use strict";
      i.d(e, {
        x: () => s
      });
      var r = i(78069),
        n = i(37493);

      function s(t) {
        const e = (0, n.x)(t);
        for (const i in t)(0, r.S)(t[i]) && (e["x" === i || "y" === i ? "attr" + i.toUpperCase() : i] = t[i]);
        return e
      }
    },
    51275: (t, e, i) => {
      "use strict";

      function r(t, e) {
        -1 === t.indexOf(e) && t.push(e)
      }

      function n(t, e) {
        const i = t.indexOf(e);
        i > -1 && t.splice(i, 1)
      }
      i.d(e, {
        Ai: () => n,
        Kq: () => r
      })
    },
    51673: (t, e, i) => {
      "use strict";

      function r(t) {
        return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
          return typeof t
        } : function(t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, r(t)
      }

      function n(t, e) {
        for (var i = 0; i < e.length; i++) {
          var r = e[i];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, l(r.key), r)
        }
      }

      function s() {
        try {
          var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
        } catch (t) {}
        return (s = function() {
          return !!t
        })()
      }

      function a(t) {
        return a = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
          return t.__proto__ || Object.getPrototypeOf(t)
        }, a(t)
      }

      function o(t, e) {
        return o = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
          return t.__proto__ = e, t
        }, o(t, e)
      }

      function l(t) {
        var e = function(t) {
          if ("object" != r(t) || !t) return t;
          var e = t[Symbol.toPrimitive];
          if (void 0 !== e) {
            var i = e.call(t, "string");
            if ("object" != r(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(t)
        }(t);
        return "symbol" == r(e) ? e : e + ""
      }
      var h = i(62229),
        p = i(97465),
        c = i(87236).createFocusTrap,
        u = i(86337).isFocusable,
        f = function(t) {
          function e(t) {
            var i, n, o, h;
            ! function(t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e), i = function(t, e, i) {
              return e = a(e),
                function(t, e) {
                  if (e && ("object" == r(e) || "function" == typeof e)) return e;
                  if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                  return function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                  }(t)
                }(t, s() ? Reflect.construct(e, i || [], a(t).constructor) : e.apply(t, i))
            }(this, e, [t]), n = i, h = function(t) {
              var e, i = null !== (e = this.internalOptions[t]) && void 0 !== e ? e : this.originalOptions[t];
              if ("function" == typeof i) {
                for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++) n[s - 1] = arguments[s];
                i = i.apply(void 0, n)
              }
              if (!0 === i && (i = void 0), !i) {
                if (void 0 === i || !1 === i) return i;
                throw new Error("`".concat(t, "` was specified but was not a node, or did not return a node"))
              }
              var a, o = i;
              if ("string" == typeof i && !(o = null === (a = this.getDocument()) || void 0 === a ? void 0 : a.querySelector(i))) throw new Error("`".concat(t, "` as selector refers to no known node"));
              return o
            }, (o = l(o = "getNodeForOption")) in n ? Object.defineProperty(n, o, {
              value: h,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = h, i.handleDeactivate = i.handleDeactivate.bind(i), i.handlePostDeactivate = i.handlePostDeactivate.bind(i), i.handleClickOutsideDeactivates = i.handleClickOutsideDeactivates.bind(i), i.internalOptions = {
              returnFocusOnDeactivate: !1,
              checkCanReturnFocus: null,
              onDeactivate: i.handleDeactivate,
              onPostDeactivate: i.handlePostDeactivate,
              clickOutsideDeactivates: i.handleClickOutsideDeactivates
            }, i.originalOptions = {
              returnFocusOnDeactivate: !0,
              onDeactivate: null,
              onPostDeactivate: null,
              checkCanReturnFocus: null,
              clickOutsideDeactivates: !1
            };
            var p = t.focusTrapOptions;
            for (var c in p) Object.prototype.hasOwnProperty.call(p, c) && ("returnFocusOnDeactivate" !== c && "onDeactivate" !== c && "onPostDeactivate" !== c && "checkCanReturnFocus" !== c && "clickOutsideDeactivates" !== c ? i.internalOptions[c] = p[c] : i.originalOptions[c] = p[c]);
            return i.outsideClick = null, i.focusTrapElements = t.containerElements || [], i.updatePreviousElement(), i
          }
          return function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                writable: !0,
                configurable: !0
              }
            }), Object.defineProperty(t, "prototype", {
              writable: !1
            }), e && o(t, e)
          }(e, t), i = e, (p = [{
            key: "getDocument",
            value: function() {
              return this.props.focusTrapOptions.document || ("undefined" != typeof document ? document : void 0)
            }
          }, {
            key: "getReturnFocusNode",
            value: function() {
              var t = this.getNodeForOption("setReturnFocus", this.previouslyFocusedElement);
              return t || !1 !== t && this.previouslyFocusedElement
            }
          }, {
            key: "updatePreviousElement",
            value: function() {
              var t = this.getDocument();
              t && (this.previouslyFocusedElement = t.activeElement)
            }
          }, {
            key: "deactivateTrap",
            value: function() {
              this.focusTrap && this.focusTrap.active && this.focusTrap.deactivate({
                returnFocus: !1,
                checkCanReturnFocus: null,
                onDeactivate: this.originalOptions.onDeactivate
              })
            }
          }, {
            key: "handleClickOutsideDeactivates",
            value: function(t) {
              var e = "function" == typeof this.originalOptions.clickOutsideDeactivates ? this.originalOptions.clickOutsideDeactivates.call(null, t) : this.originalOptions.clickOutsideDeactivates;
              return e && (this.outsideClick = {
                target: t.target,
                allowDeactivation: e
              }), e
            }
          }, {
            key: "handleDeactivate",
            value: function() {
              this.originalOptions.onDeactivate && this.originalOptions.onDeactivate.call(null), this.deactivateTrap()
            }
          }, {
            key: "handlePostDeactivate",
            value: function() {
              var t = this,
                e = function() {
                  var e = t.getReturnFocusNode(),
                    i = !(!t.originalOptions.returnFocusOnDeactivate || null == e || !e.focus || t.outsideClick && (!t.outsideClick.allowDeactivation || u(t.outsideClick.target, t.internalOptions.tabbableOptions))),
                    r = t.internalOptions.preventScroll,
                    n = void 0 !== r && r;
                  i && e.focus({
                    preventScroll: n
                  }), t.originalOptions.onPostDeactivate && t.originalOptions.onPostDeactivate.call(null), t.outsideClick = null
                };
              this.originalOptions.checkCanReturnFocus ? this.originalOptions.checkCanReturnFocus.call(null, this.getReturnFocusNode()).then(e, e) : e()
            }
          }, {
            key: "setupFocusTrap",
            value: function() {
              this.focusTrap ? this.props.active && !this.focusTrap.active && (this.focusTrap.activate(), this.props.paused && this.focusTrap.pause()) : this.focusTrapElements.some(Boolean) && (this.focusTrap = this.props._createFocusTrap(this.focusTrapElements, this.internalOptions), this.props.active && this.focusTrap.activate(), this.props.paused && this.focusTrap.pause())
            }
          }, {
            key: "componentDidMount",
            value: function() {
              this.props.active && this.setupFocusTrap()
            }
          }, {
            key: "componentDidUpdate",
            value: function(t) {
              if (this.focusTrap) {
                t.containerElements !== this.props.containerElements && this.focusTrap.updateContainerElements(this.props.containerElements);
                var e = !t.active && this.props.active,
                  i = t.active && !this.props.active,
                  r = !t.paused && this.props.paused,
                  n = t.paused && !this.props.paused;
                if (e && (this.updatePreviousElement(), this.focusTrap.activate()), i) return void this.deactivateTrap();
                r && this.focusTrap.pause(), n && this.focusTrap.unpause()
              } else t.containerElements !== this.props.containerElements && (this.focusTrapElements = this.props.containerElements), this.props.active && (this.updatePreviousElement(), this.setupFocusTrap())
            }
          }, {
            key: "componentWillUnmount",
            value: function() {
              this.deactivateTrap()
            }
          }, {
            key: "render",
            value: function() {
              var t = this,
                e = this.props.children ? h.Children.only(this.props.children) : void 0;
              if (e) {
                if (e.type && e.type === h.Fragment) throw new Error("A focus-trap cannot use a Fragment as its child container. Try replacing it with a <div> element.");
                return h.cloneElement(e, {
                  ref: function(i) {
                    var r = t.props.containerElements;
                    e && ("function" == typeof e.ref ? e.ref(i) : e.ref && (e.ref.current = i)), t.focusTrapElements = r || [i]
                  }
                })
              }
              return null
            }
          }]) && n(i.prototype, p), Object.defineProperty(i, "prototype", {
            writable: !1
          }), i;
          var i, p
        }(h.Component),
        d = "undefined" == typeof Element ? Function : Element;
      f.propTypes = {
        active: p.bool,
        paused: p.bool,
        focusTrapOptions: p.shape({
          document: p.object,
          onActivate: p.func,
          onPostActivate: p.func,
          checkCanFocusTrap: p.func,
          onPause: p.func,
          onPostPause: p.func,
          onUnpause: p.func,
          onPostUnpause: p.func,
          onDeactivate: p.func,
          onPostDeactivate: p.func,
          checkCanReturnFocus: p.func,
          initialFocus: p.oneOfType([p.instanceOf(d), p.string, p.bool, p.func]),
          fallbackFocus: p.oneOfType([p.instanceOf(d), p.string, p.func]),
          escapeDeactivates: p.oneOfType([p.bool, p.func]),
          clickOutsideDeactivates: p.oneOfType([p.bool, p.func]),
          returnFocusOnDeactivate: p.bool,
          setReturnFocus: p.oneOfType([p.instanceOf(d), p.string, p.bool, p.func]),
          allowOutsideClick: p.oneOfType([p.bool, p.func]),
          preventScroll: p.bool,
          tabbableOptions: p.shape({
            displayCheck: p.oneOf(["full", "legacy-full", "non-zero-area", "none"]),
            getShadowRoot: p.oneOfType([p.bool, p.func])
          }),
          trapStack: p.array,
          isKeyForward: p.func,
          isKeyBackward: p.func
        }),
        containerElements: p.arrayOf(p.instanceOf(d)),
        children: p.oneOfType([p.element, p.instanceOf(d)])
      }, f.defaultProps = {
        active: !0,
        paused: !1,
        focusTrapOptions: {},
        _createFocusTrap: c
      }, t.exports = f
    },
    53162: (t, e, i) => {
      "use strict";
      i.d(e, {
        B: () => l
      });
      var r = i(84691),
        n = i(2472);

      function s(t, e, i) {
        return "string" == typeof t ? t : n.px.transform(e + i * t)
      }
      const a = {
          offset: "stroke-dashoffset",
          array: "stroke-dasharray"
        },
        o = {
          offset: "strokeDashoffset",
          array: "strokeDasharray"
        };

      function l(t, {
        attrX: e,
        attrY: i,
        originX: l,
        originY: h,
        pathLength: p,
        pathSpacing: c = 1,
        pathOffset: u = 0,
        ...f
      }, d, m, y) {
        if ((0, r.O)(t, f, d, y), m) return void(t.style.viewBox && (t.attrs.viewBox = t.style.viewBox));
        t.attrs = t.style, t.style = {};
        const {
          attrs: g,
          style: v,
          dimensions: b
        } = t;
        g.transform && (b && (v.transform = g.transform), delete g.transform), b && (void 0 !== l || void 0 !== h || v.transform) && (v.transformOrigin = function(t, e, i) {
          return `${s(e,t.x,t.width)} ${s(i,t.y,t.height)}`
        }(b, void 0 !== l ? l : .5, void 0 !== h ? h : .5)), void 0 !== e && (g.x = e), void 0 !== i && (g.y = i), void 0 !== p && function(t, e, i = 1, r = 0, s = !0) {
          t.pathLength = 1;
          const l = s ? a : o;
          t[l.offset] = n.px.transform(-r);
          const h = n.px.transform(e),
            p = n.px.transform(i);
          t[l.array] = `${h} ${p}`
        }(g, p, c, u, !1)
      }
    },
    53437: (t, e, i) => {
      "use strict";
      i.d(e, {
        c: () => n
      });
      var r = i(39997);

      function n(t, e) {
        const i = performance.now(),
          n = ({
            timestamp: s
          }) => {
            const a = s - i;
            a >= e && (r.eO.read(n), t(a - e))
          };
        return r.OH.read(n, !0), () => r.eO.read(n)
      }
    },
    53727: (t, e, i) => {
      "use strict";
      i.d(e, {
        _: () => n
      });
      var r = i(42649);
      const n = (void 0 === r || r.env, "production")
    },
    53792: (t, e, i) => {
      "use strict";
      i.d(e, {
        B: () => l
      });
      var r = i(26217),
        n = i(35121),
        s = i(56285),
        a = i(82357);
      const o = {
          ...n.ai,
          transform: t => Math.round((t => (0, r.q)(0, 255, t))(t))
        },
        l = {
          test: (0, a.$)("rgb", "red"),
          parse: (0, a.q)("red", "green", "blue"),
          transform: ({
            red: t,
            green: e,
            blue: i,
            alpha: r = 1
          }) => "rgba(" + o.transform(t) + ", " + o.transform(e) + ", " + o.transform(i) + ", " + (0, s.aj)(n.X4.transform(r)) + ")"
        }
    },
    55217: (t, e, i) => {
      "use strict";
      i.d(e, {
        p: () => r
      });
      const r = t => Array.isArray(t)
    },
    56285: (t, e, i) => {
      "use strict";
      i.d(e, {
        Fl: () => a,
        Kg: () => o,
        SY: () => n,
        aj: () => r,
        ne: () => s
      });
      const r = t => Math.round(1e5 * t) / 1e5,
        n = /(-)?([\d]*\.?[\d])+/g,
        s = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
        a = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;

      function o(t) {
        return "string" == typeof t
      }
    },
    57508: (t, e, i) => {
      "use strict";

      function r(t, e, i, r = {}, n = {}) {
        return "function" == typeof e && (e = e(void 0 !== i ? i : t.custom, r, n)), "string" == typeof e && (e = t.variants && t.variants[e]), "function" == typeof e && (e = e(void 0 !== i ? i : t.custom, r, n)), e
      }
      i.d(e, {
        a: () => r
      })
    },
    58147: (t, e, i) => {
      "use strict";
      i.d(e, {
        J: () => ot
      });
      var r = i(84691),
        n = i(76187),
        s = i(60401),
        a = i(37493),
        o = i(83555),
        l = i(88514),
        h = i(25394),
        p = i(71022),
        c = i(88246),
        u = i(55217),
        f = i(81547),
        d = i(96007),
        m = i(85643),
        y = i(35121),
        g = i(2472);
      const v = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y"]),
        b = t => v.has(t),
        x = (t, e) => {
          t.set(e, !1), t.set(e)
        },
        P = t => t === y.ai || t === g.px;
      var E;
      ! function(t) {
        t.width = "width", t.height = "height", t.left = "left", t.right = "right", t.top = "top", t.bottom = "bottom"
      }(E || (E = {}));
      const S = (t, e) => parseFloat(t.split(", ")[e]),
        C = (t, e) => (i, {
          transform: r
        }) => {
          if ("none" === r || !r) return 0;
          const n = r.match(/^matrix3d\((.+)\)$/);
          if (n) return S(n[1], e); {
            const e = r.match(/^matrix\((.+)\)$/);
            return e ? S(e[1], t) : 0
          }
        },
        T = new Set(["x", "y", "z"]),
        A = s.U.filter((t => !T.has(t))),
        w = {
          width: ({
            x: t
          }, {
            paddingLeft: e = "0",
            paddingRight: i = "0"
          }) => t.max - t.min - parseFloat(e) - parseFloat(i),
          height: ({
            y: t
          }, {
            paddingTop: e = "0",
            paddingBottom: i = "0"
          }) => t.max - t.min - parseFloat(e) - parseFloat(i),
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
          x: C(4, 13),
          y: C(5, 14)
        };

      function k(t, e, i, r) {
        return (t => Object.keys(t).some(b))(e) ? ((t, e, i = {}, r = {}) => {
          e = {
            ...e
          }, r = {
            ...r
          };
          const n = Object.keys(e).filter(b);
          let s = [],
            a = !1;
          const o = [];
          if (n.forEach((n => {
              const l = t.getValue(n);
              if (!t.hasValue(n)) return;
              let h = i[n],
                p = (0, d.n)(h);
              const c = e[n];
              let m;
              if ((0, u.p)(c)) {
                const t = c.length,
                  e = null === c[0] ? 1 : 0;
                h = c[e], p = (0, d.n)(h);
                for (let i = e; i < t; i++) m ? (0, f.V)((0, d.n)(c[i]) === m, "All keyframes must be of the same type") : (m = (0, d.n)(c[i]), (0, f.V)(m === p || P(p) && P(m), "Keyframes must be of the same dimension as the current value"))
              } else m = (0, d.n)(c);
              if (p !== m)
                if (P(p) && P(m)) {
                  const t = l.get();
                  "string" == typeof t && l.set(parseFloat(t)), "string" == typeof c ? e[n] = parseFloat(c) : Array.isArray(c) && m === g.px && (e[n] = c.map(parseFloat))
                } else(null == p ? void 0 : p.transform) && (null == m ? void 0 : m.transform) && (0 === h || 0 === c) ? 0 === h ? l.set(m.transform(h)) : e[n] = p.transform(c) : (a || (s = function(t) {
                  const e = [];
                  return A.forEach((i => {
                    const r = t.getValue(i);
                    void 0 !== r && (e.push([i, r.get()]), r.set(i.startsWith("scale") ? 1 : 0))
                  })), e.length && t.render(), e
                }(t), a = !0), o.push(n), r[n] = void 0 !== r[n] ? r[n] : e[n], x(l, c))
            })), o.length) {
            const i = o.indexOf("height") >= 0 ? window.pageYOffset : null,
              n = ((t, e, i) => {
                const r = e.measureViewportBox(),
                  n = e.current,
                  s = getComputedStyle(n),
                  {
                    display: a
                  } = s,
                  o = {};
                "none" === a && e.setStaticValue("display", t.display || "block"), i.forEach((t => {
                  o[t] = w[t](r, s)
                })), e.render();
                const l = e.measureViewportBox();
                return i.forEach((i => {
                  const r = e.getValue(i);
                  x(r, o[i]), t[i] = w[i](l, s)
                })), t
              })(e, t, o);
            return s.length && s.forEach((([e, i]) => {
              t.getValue(e).set(i)
            })), t.render(), m.B && null !== i && window.scrollTo({
              top: i
            }), {
              target: n,
              transitionEnd: r
            }
          }
          return {
            target: e,
            transitionEnd: r
          }
        })(t, e, i, r) : {
          target: e,
          transitionEnd: r
        }
      }
      var D = i(39997),
        M = i(62229),
        _ = i(95277),
        F = i(19945),
        I = i(43744),
        V = i(53727);
      const B = {
          current: null
        },
        R = {
          current: !1
        };
      var L = i(40749),
        O = i(69524),
        N = i(2638),
        G = i(78069),
        z = i(15514),
        j = i(11694),
        H = i(79354),
        q = i(57508);
      const $ = Object.keys(_.B),
        W = $.length,
        U = ["AnimationStart", "AnimationComplete", "Update", "Unmount", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
      class Y {
        constructor({
          parent: t,
          props: e,
          reducedMotionConfig: i,
          visualState: r
        }, n = {}) {
          this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.isPresent = !0, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
            this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
          }, this.scheduleRender = () => D.OH.render(this.render, !1, !0);
          const {
            latestValues: s,
            renderState: a
          } = r;
          this.latestValues = s, this.baseTarget = {
            ...s
          }, this.initialValues = e.initial ? {
            ...s
          } : {}, this.renderState = a, this.parent = t, this.props = e, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = i, this.options = n, this.isControllingVariants = (0, j.e)(e), this.isVariantNode = (0, j.O)(e), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = Boolean(t && t.current);
          const {
            willChange: o,
            ...l
          } = this.scrapeMotionValuesFromProps(e);
          for (const t in l) {
            const e = l[t];
            void 0 !== s[t] && (0, G.S)(e) && (e.set(s[t], !1), (0, N.k)(o) && o.add(t))
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
          var t, e, i;
          null === (t = this.projection) || void 0 === t || t.unmount(), D.eO.update(this.notifyUpdate), D.eO.render(this.render), this.valueSubscriptions.forEach((t => t())), null === (e = this.removeFromVariantTree) || void 0 === e || e.call(this), null === (i = this.parent) || void 0 === i || i.children.delete(this);
          for (const t in this.events) this.events[t].clear();
          this.current = null
        }
        bindToMotionValue(t, e) {
          const i = s.f.has(t),
            r = e.on("change", (e => {
              this.latestValues[t] = e, this.props.onUpdate && D.OH.update(this.notifyUpdate, !1, !0), i && this.projection && (this.projection.isTransformDirty = !0)
            })),
            n = e.on("renderRequest", this.scheduleRender);
          this.valueSubscriptions.set(t, (() => {
            r(), n()
          }))
        }
        sortNodePosition(t) {
          return this.current && this.sortInstanceNodePosition && this.type === t.type ? this.sortInstanceNodePosition(this.current, t.current) : 0
        }
        loadFeatures(t, e, i, r, n, s) {
          const a = [];
          "production" !== V._ && i && e && (0, f.V)(!1, "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.");
          for (let e = 0; e < W; e++) {
            const i = $[e],
              {
                isEnabled: r,
                Component: n
              } = _.B[i];
            r(t) && n && a.push((0, M.createElement)(n, {
              key: i,
              ...t,
              visualElement: this
            }))
          }
          if (!this.projection && n) {
            this.projection = new n(r, this.latestValues, this.parent && this.parent.projection);
            const {
              layoutId: e,
              layout: i,
              drag: a,
              dragConstraints: o,
              layoutScroll: l
            } = t;
            this.projection.setOptions({
              layoutId: e,
              layout: i,
              alwaysMeasureLayout: Boolean(a) || o && (0, I.X)(o),
              visualElement: this,
              scheduleRender: () => this.scheduleRender(),
              animationType: "string" == typeof i ? i : "both",
              initialPromotionConfig: s,
              layoutScroll: l
            })
          }
          return a
        }
        triggerBuild() {
          this.build(this.renderState, this.latestValues, this.options, this.props)
        }
        measureViewportBox() {
          return this.current ? this.measureInstanceViewportBox(this.current, this.props) : (0, F.ge)()
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
            const i = U[e];
            this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
            const r = t["on" + i];
            r && (this.propEventSubscriptions[i] = this.on(i, r))
          }
          this.prevMotionValues = function(t, e, i) {
            const {
              willChange: r
            } = e;
            for (const n in e) {
              const s = e[n],
                a = i[n];
              if ((0, G.S)(s)) t.addValue(n, s), (0, N.k)(r) && r.add(n);
              else if ((0, G.S)(a)) t.addValue(n, (0, O.O)(s, {
                owner: t
              })), (0, N.k)(r) && r.remove(n);
              else if (a !== s)
                if (t.hasValue(n)) {
                  const e = t.getValue(n);
                  !e.hasAnimated && e.set(s)
                } else {
                  const e = t.getStaticValue(n);
                  t.addValue(n, (0, O.O)(void 0 !== e ? e : s))
                }
            }
            for (const r in i) void 0 === e[r] && t.removeValue(r);
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
          var e, i;
          if (t) return null === (e = this.parent) || void 0 === e ? void 0 : e.getVariantContext();
          if (!this.isControllingVariants) {
            const t = (null === (i = this.parent) || void 0 === i ? void 0 : i.getVariantContext()) || {};
            return void 0 !== this.props.initial && (t.initial = this.props.initial), t
          }
          const r = {};
          for (let t = 0; t < J; t++) {
            const e = X[t],
              i = this.props[e];
            ((0, H.w)(i) || !1 === i) && (r[e] = i)
          }
          return r
        }
        addVariantChild(t) {
          var e;
          const i = this.getClosestVariantNode();
          if (i) return null === (e = i.variantChildren) || void 0 === e || e.add(t), () => i.variantChildren.delete(t)
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
          let i = this.values.get(t);
          return void 0 === i && void 0 !== e && (i = (0, O.O)(e, {
            owner: this
          }), this.addValue(t, i)), i
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
            initial: i
          } = this.props, r = "string" == typeof i || "object" == typeof i ? null === (e = (0, q.a)(this.props, i)) || void 0 === e ? void 0 : e[t] : void 0;
          if (i && void 0 !== r) return r;
          const n = this.getBaseTargetFromProps(this.props, t);
          return void 0 === n || (0, G.S)(n) ? void 0 !== this.initialValues[t] && void 0 === r ? void 0 : this.baseTarget[t] : n
        }
        on(t, e) {
          return this.events[t] || (this.events[t] = new L.v), this.events[t].add(e)
        }
        notify(t, ...e) {
          var i;
          null === (i = this.events[t]) || void 0 === i || i.notify(...e)
        }
      }
      const X = ["initial", ...z.US],
        J = X.length;
      class K extends Y {
        sortInstanceNodePosition(t, e) {
          return 2 & t.compareDocumentPosition(e) ? 1 : -1
        }
        getBaseTargetFromProps(t, e) {
          var i;
          return null === (i = t.style) || void 0 === i ? void 0 : i[e]
        }
        removeValueFromRenderState(t, {
          vars: e,
          style: i
        }) {
          delete e[t], delete i[t]
        }
        makeTargetAnimatableFromInstance({
          transition: t,
          transitionEnd: e,
          ...i
        }, {
          transformValues: r
        }, n) {
          let s = (0, p.$z)(i, t || {}, this);
          if (r && (e && (e = r(e)), i && (i = r(i)), s && (s = r(s))), n) {
            (0, p.TM)(this, i, s);
            const t = ((t, e, i, r) => {
              const n = (0, c.d9)(t, e, r);
              return k(t, e = n.target, i, r = n.transitionEnd)
            })(this, i, s, e);
            e = t.transitionEnd, i = t.target
          }
          return {
            transition: t,
            transitionEnd: e,
            ...i
          }
        }
      }
      class Z extends K {
        readValueFromInstance(t, e) {
          if (s.f.has(e)) {
            const t = (0, l.D)(e);
            return t && t.default || 0
          } {
            const r = (i = t, window.getComputedStyle(i)),
              s = ((0, n.Y)(e) ? r.getPropertyValue(e) : r[e]) || 0;
            return "string" == typeof s ? s.trim() : s
          }
          var i
        }
        measureInstanceViewportBox(t, {
          transformPagePoint: e
        }) {
          return (0, h.m)(t, e)
        }
        build(t, e, i, n) {
          (0, r.O)(t, e, i, n.transformTemplate)
        }
        scrapeMotionValuesFromProps(t) {
          return (0, a.x)(t)
        }
        renderInstance(t, e, i, r) {
          (0, o.e)(t, e, i, r)
        }
      }
      var Q = i(49300),
        tt = i(53162),
        et = i(19665),
        it = i(6342),
        rt = i(46542),
        nt = i(28432);
      class st extends K {
        constructor() {
          super(...arguments), this.isSVGTag = !1
        }
        getBaseTargetFromProps(t, e) {
          return t[e]
        }
        readValueFromInstance(t, e) {
          var i;
          return s.f.has(e) ? (null === (i = (0, l.D)(e)) || void 0 === i ? void 0 : i.default) || 0 : (e = it.e.has(e) ? e : (0, et.I)(e), t.getAttribute(e))
        }
        measureInstanceViewportBox() {
          return (0, F.ge)()
        }
        scrapeMotionValuesFromProps(t) {
          return (0, Q.x)(t)
        }
        build(t, e, i, r) {
          (0, tt.B)(t, e, i, this.isSVGTag, r.transformTemplate)
        }
        renderInstance(t, e, i, r) {
          (0, rt.d)(t, e, i, r)
        }
        mount(t) {
          this.isSVGTag = (0, nt.n)(t.tagName), super.mount(t)
        }
      }
      var at = i(19782);
      const ot = (t, e) => (0, at.Q)(t) ? new st(e, {
        enableHardwareAcceleration: !1
      }) : new Z(e, {
        enableHardwareAcceleration: !0
      })
    },
    60401: (t, e, i) => {
      "use strict";
      i.d(e, {
        U: () => r,
        f: () => n
      });
      const r = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
        n = new Set(r)
    },
    60794: (t, e, i) => {
      "use strict";
      i.d(e, {
        L: () => r
      });
      const r = (0, i(62229).createContext)({})
    },
    60899: (t, e, i) => {
      "use strict";
      i.d(e, {
        W: () => a
      });
      var r = i(35121),
        n = i(2472);
      const s = {
          ...r.ai,
          transform: Math.round
        },
        a = {
          borderWidth: n.px,
          borderTopWidth: n.px,
          borderRightWidth: n.px,
          borderBottomWidth: n.px,
          borderLeftWidth: n.px,
          borderRadius: n.px,
          radius: n.px,
          borderTopLeftRadius: n.px,
          borderTopRightRadius: n.px,
          borderBottomRightRadius: n.px,
          borderBottomLeftRadius: n.px,
          width: n.px,
          maxWidth: n.px,
          height: n.px,
          maxHeight: n.px,
          size: n.px,
          top: n.px,
          right: n.px,
          bottom: n.px,
          left: n.px,
          padding: n.px,
          paddingTop: n.px,
          paddingRight: n.px,
          paddingBottom: n.px,
          paddingLeft: n.px,
          margin: n.px,
          marginTop: n.px,
          marginRight: n.px,
          marginBottom: n.px,
          marginLeft: n.px,
          rotate: n.uj,
          rotateX: n.uj,
          rotateY: n.uj,
          rotateZ: n.uj,
          scale: r.hs,
          scaleX: r.hs,
          scaleY: r.hs,
          scaleZ: r.hs,
          skew: n.uj,
          skewX: n.uj,
          skewY: n.uj,
          distance: n.px,
          translateX: n.px,
          translateY: n.px,
          translateZ: n.px,
          x: n.px,
          y: n.px,
          z: n.px,
          perspective: n.px,
          transformPerspective: n.px,
          opacity: r.X4,
          originX: n.gQ,
          originY: n.gQ,
          originZ: n.px,
          zIndex: s,
          fillOpacity: r.X4,
          strokeOpacity: r.X4,
          numOctaves: s
        }
    },
    61439: (t, e, i) => {
      "use strict";
      i.d(e, {
        Y: () => n
      });
      var r = i(95277);

      function n(t) {
        for (const e in t) "projectionNodeConstructor" === e ? r.B.projectionNodeConstructor = t[e] : r.B[e].Component = t[e]
      }
    },
    62896: (t, e, i) => {
      "use strict";
      i.d(e, {
        D2: () => n,
        RL: () => a,
        be: () => s,
        rU: () => o
      });
      var r = i(8687);

      function n({
        when: t,
        delay: e,
        delayChildren: i,
        staggerChildren: r,
        staggerDirection: n,
        repeat: s,
        repeatType: a,
        repeatDelay: o,
        from: l,
        ...h
      }) {
        return !!Object.keys(h).length
      }

      function s(t) {
        return 0 === t || "string" == typeof t && 0 === parseFloat(t) && -1 === t.indexOf(" ")
      }

      function a(t) {
        return "number" == typeof t ? 0 : (0, r.J)("", t)
      }

      function o(t, e) {
        return t[e] || t.default || t
      }
    },
    62983: (t, e, i) => {
      "use strict";
      i.d(e, {
        V: () => l,
        f: () => u
      });
      var r = i(30606),
        n = i(35121),
        s = i(56285);
      const a = "${c}",
        o = "${n}";

      function l(t) {
        "number" == typeof t && (t = `${t}`);
        const e = [];
        let i = 0,
          l = 0;
        const h = t.match(s.ne);
        h && (i = h.length, t = t.replace(s.ne, a), e.push(...h.map(r.y.parse)));
        const p = t.match(s.SY);
        return p && (l = p.length, t = t.replace(s.SY, o), e.push(...p.map(n.ai.parse))), {
          values: e,
          numColors: i,
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
          numColors: i,
          tokenised: n
        } = l(t), h = e.length;
        return t => {
          let e = n;
          for (let n = 0; n < h; n++) e = e.replace(n < i ? a : o, n < i ? r.y.transform(t[n]) : (0, s.aj)(t[n]));
          return e
        }
      }
      const c = t => "number" == typeof t ? 0 : t,
        u = {
          test: function(t) {
            var e, i;
            return isNaN(t) && (0, s.Kg)(t) && ((null === (e = t.match(s.SY)) || void 0 === e ? void 0 : e.length) || 0) + ((null === (i = t.match(s.ne)) || void 0 === i ? void 0 : i.length) || 0) > 0
          },
          parse: h,
          createTransformer: p,
          getAnimatableNone: function(t) {
            const e = h(t);
            return p(t)(e.map(c))
          }
        }
    },
    64588: (t, e, i) => {
      "use strict";
      i.d(e, {
        A: () => n,
        f: () => s
      });
      var r = i(62229);
      const n = (0, r.createContext)({});

      function s() {
        return (0, r.useContext)(n).visualElement
      }
    },
    66541: (t, e, i) => {
      "use strict";
      i.d(e, {
        J: () => l,
        e: () => o
      });
      var r = i(13506);
      const n = {
        pageX: 0,
        pageY: 0
      };

      function s(t, e = "page") {
        const i = t.touches[0] || t.changedTouches[0] || n;
        return {
          x: i[e + "X"],
          y: i[e + "Y"]
        }
      }

      function a(t, e = "page") {
        return {
          x: t[e + "X"],
          y: t[e + "Y"]
        }
      }

      function o(t, e = "page") {
        return {
          point: (0, r.k)(t) ? s(t, e) : a(t, e)
        }
      }
      const l = (t, e = !1) => {
        const i = e => t(e, o(e));
        return e ? (r = i, t => {
          const e = t instanceof MouseEvent;
          (!e || e && 0 === t.button) && r(t)
        }) : i;
        var r
      }
    },
    69524: (t, e, i) => {
      "use strict";
      i.d(e, {
        O: () => l
      });
      var r = i(69602),
        n = i(39997),
        s = i(40749),
        a = i(24080);
      class o {
        constructor(t, e = {}) {
          var i;
          this.version = "7.10.3", this.timeDelta = 0, this.lastUpdated = 0, this.canTrackVelocity = !1, this.events = {}, this.updateAndNotify = (t, e = !0) => {
            this.prev = this.current, this.current = t;
            const {
              delta: i,
              timestamp: s
            } = r.u;
            this.lastUpdated !== s && (this.timeDelta = i, this.lastUpdated = s, n.OH.postRender(this.scheduleVelocityCheck)), this.prev !== this.current && this.events.change && this.events.change.notify(this.current), this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()), e && this.events.renderRequest && this.events.renderRequest.notify(this.current)
          }, this.scheduleVelocityCheck = () => n.OH.postRender(this.velocityCheck), this.velocityCheck = ({
            timestamp: t
          }) => {
            t !== this.lastUpdated && (this.prev = this.current, this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()))
          }, this.hasAnimated = !1, this.prev = this.current = t, this.canTrackVelocity = (i = this.current, !isNaN(parseFloat(i))), this.owner = e.owner
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
        setWithVelocity(t, e, i) {
          this.set(e), this.prev = t, this.timeDelta = i
        }
        get() {
          return this.current
        }
        getPrevious() {
          return this.prev
        }
        getVelocity() {
          return this.canTrackVelocity ? (0, a.f)(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0
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
    69602: (t, e, i) => {
      "use strict";
      i.d(e, {
        u: () => r
      });
      const r = {
        delta: 0,
        timestamp: 0
      }
    },
    71022: (t, e, i) => {
      "use strict";
      i.d(e, {
        TM: () => g,
        $z: () => b,
        Uo: () => y
      });
      const r = t => /^\-?\d*\.?\d+$/.test(t),
        n = t => /^0[^.\s]+$/.test(t);
      var s = i(84804),
        a = i(69524),
        o = i(62983),
        l = i(8687),
        h = i(30606),
        p = i(96007),
        c = i(26376);
      const u = [...p.T, h.y, o.f],
        f = t => u.find((0, c.w)(t));
      var d = i(43320);

      function m(t, e, i) {
        t.hasValue(e) ? t.getValue(e).set(i) : t.addValue(e, (0, a.O)(i))
      }

      function y(t, e) {
        const i = (0, d.K)(t, e);
        let {
          transitionEnd: r = {},
          transition: n = {},
          ...a
        } = i ? t.makeTargetAnimatable(i, !1) : {};
        a = {
          ...a,
          ...r
        };
        for (const e in a) m(t, e, (0, s.K)(a[e]))
      }

      function g(t, e, i) {
        var s, h;
        const p = Object.keys(e).filter((e => !t.hasValue(e))),
          c = p.length;
        if (c)
          for (let u = 0; u < c; u++) {
            const c = p[u],
              d = e[c];
            let m = null;
            Array.isArray(d) && (m = d[0]), null === m && (m = null !== (h = null !== (s = i[c]) && void 0 !== s ? s : t.readValue(c)) && void 0 !== h ? h : e[c]), null != m && ("string" == typeof m && (r(m) || n(m)) ? m = parseFloat(m) : !f(m) && o.f.test(d) && (m = (0, l.J)(c, d)), t.addValue(c, (0, a.O)(m, {
              owner: t
            })), void 0 === i[c] && (i[c] = m), null !== m && t.setBaseTarget(c, m))
          }
      }

      function v(t, e) {
        if (e) return (e[t] || e.default || e).from
      }

      function b(t, e, i) {
        var r;
        const n = {};
        for (const s in t) {
          const t = v(s, e);
          n[s] = void 0 !== t ? t : null === (r = i.getValue(s)) || void 0 === r ? void 0 : r.get()
        }
        return n
      }
    },
    71752: (t, e, i) => {
      "use strict";
      i.d(e, {
        W: () => p
      });
      var r = i(62229),
        n = i(32467),
        s = i(26073),
        a = i(47510),
        o = i(15514),
        l = i(14238),
        h = i(6933);
      const p = {
        animation: (0, h.n)((({
          visualElement: t,
          animate: e
        }) => {
          t.animationState || (t.animationState = (0, o.ci)(t)), (0, n.N)(e) && (0, r.useEffect)((() => e.subscribe(t)), [e])
        })),
        exit: (0, h.n)((t => {
          const {
            custom: e,
            visualElement: i
          } = t, [n, o] = (0, s.xQ)(), h = (0, r.useContext)(a.t);
          (0, r.useEffect)((() => {
            i.isPresent = n;
            const t = i.animationState && i.animationState.setActive(l.J.Exit, !n, {
              custom: h && h.custom || e
            });
            t && !n && t.then(o)
          }), [n])
        }))
      }
    },
    72414: (t, e, i) => {
      "use strict";
      i.d(e, {
        j: () => r
      });
      const r = (t, e, i) => -i * t + i * e + t
    },
    74325: (t, e, i) => {
      "use strict";
      i.d(e, {
        Q: () => s,
        k: () => n
      });
      var r = i(62229);

      function n(t, e, i, r = {
        passive: !0
      }) {
        return t.addEventListener(e, i, r), () => t.removeEventListener(e, i)
      }

      function s(t, e, i, s) {
        (0, r.useEffect)((() => {
          const r = t.current;
          if (i && r) return n(r, e, i, s)
        }), [t, e, i, s])
      }
    },
    75526: (t, e, i) => {
      "use strict";
      i.d(e, {
        v6: () => o
      });
      var r = i(4572);
      const n = new Map;

      function s(t, e) {
        if (t === e) return t;
        const i = n.get(t);
        if (i) return i.forEach((t => t(e))), e;
        const r = n.get(e);
        return r ? (r.forEach((e => e(t))), t) : e
      }

      function a(...t) {
        return (...e) => {
          for (const i of t) "function" == typeof i && i(...e)
        }
      }

      function o(...t) {
        const e = {
          ...t[0]
        };
        for (let i = 1; i < t.length; i++) {
          const n = t[i];
          for (const t in n) {
            const i = e[t],
              o = n[t];
            "function" == typeof i && "function" == typeof o && "o" === t[0] && "n" === t[1] && t.charCodeAt(2) >= 65 && t.charCodeAt(2) <= 90 ? e[t] = a(i, o) : "className" !== t && "UNSAFE_className" !== t || "string" != typeof i || "string" != typeof o ? "id" === t && i && o ? e.id = s(i, o) : e[t] = void 0 !== o ? o : i : e[t] = (0, r.clsx)(i, o)
          }
        }
        return e
      }
      var l;
      i(98312), i(41972), i(56265), i(31454), i(10533), i(10613), i(9738),
        function(t) {
          t.Pending = "pending", t.Fulfilled = "fulfilled", t.Rejected = "rejected"
        }(l || (l = {})), Symbol.toStringTag
    },
    76187: (t, e, i) => {
      "use strict";

      function r(t) {
        return t.startsWith("--")
      }
      i.d(e, {
        Y: () => r
      })
    },
    76781: (t, e, i) => {
      "use strict";
      i.d(e, {
        po: () => s,
        tn: () => o,
        yT: () => a
      });
      var r = i(40992),
        n = i(7953);
      const s = t => 1 - Math.sin(Math.acos(t)),
        a = (0, n.G)(s),
        o = (0, r.V)(a)
    },
    78069: (t, e, i) => {
      "use strict";
      i.d(e, {
        S: () => r
      });
      const r = t => !!(null == t ? void 0 : t.getVelocity)
    },
    78638: (t, e, i) => {
      "use strict";
      i.d(e, {
        M: () => n
      });
      var r = i(62229);

      function n(t) {
        const e = (0, r.useRef)(null);
        return null === e.current && (e.current = t()), e.current
      }
    },
    79354: (t, e, i) => {
      "use strict";

      function r(t) {
        return "string" == typeof t || Array.isArray(t)
      }
      i.d(e, {
        w: () => r
      })
    },
    81547: (t, e, i) => {
      "use strict";
      i.d(e, {
        $: () => r,
        V: () => n
      });
      var r = function() {},
        n = function() {}
    },
    82270: (t, e, i) => {
      "use strict";
      i.d(e, {
        N: () => r
      });
      const r = (0, i(62229).createContext)({})
    },
    82357: (t, e, i) => {
      "use strict";
      i.d(e, {
        $: () => n,
        q: () => s
      });
      var r = i(56285);
      const n = (t, e) => i => Boolean((0, r.Kg)(i) && r.Fl.test(i) && i.startsWith(t) || e && Object.prototype.hasOwnProperty.call(i, e)),
        s = (t, e, i) => n => {
          if (!(0, r.Kg)(n)) return n;
          const [s, a, o, l] = n.match(r.SY);
          return {
            [t]: parseFloat(s),
            [e]: parseFloat(a),
            [i]: parseFloat(o),
            alpha: void 0 !== l ? parseFloat(l) : 1
          }
        }
    },
    83555: (t, e, i) => {
      "use strict";

      function r(t, {
        style: e,
        vars: i
      }, r, n) {
        Object.assign(t.style, e, n && n.getProjectionStyles(r));
        for (const e in i) t.style.setProperty(e, i[e])
      }
      i.d(e, {
        e: () => r
      })
    },
    83884: (t, e, i) => {
      "use strict";
      i.d(e, {
        f: () => r
      });
      const r = t => 1e3 * t
    },
    84691: (t, e, i) => {
      "use strict";
      i.d(e, {
        O: () => h
      });
      var r = i(60401);
      const n = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective"
        },
        s = (t, e) => r.U.indexOf(t) - r.U.indexOf(e);
      var a = i(76187);
      const o = (t, e) => e && "number" == typeof t ? e.transform(t) : t;
      var l = i(60899);

      function h(t, e, i, h) {
        const {
          style: p,
          vars: c,
          transform: u,
          transformKeys: f,
          transformOrigin: d
        } = t;
        f.length = 0;
        let m = !1,
          y = !1,
          g = !0;
        for (const t in e) {
          const i = e[t];
          if ((0, a.Y)(t)) {
            c[t] = i;
            continue
          }
          const n = l.W[t],
            s = o(i, n);
          if (r.f.has(t)) {
            if (m = !0, u[t] = s, f.push(t), !g) continue;
            i !== (n.default || 0) && (g = !1)
          } else t.startsWith("origin") ? (y = !0, d[t] = s) : p[t] = s
        }
        if (e.transform || (m || h ? p.transform = function({
            transform: t,
            transformKeys: e
          }, {
            enableHardwareAcceleration: i = !0,
            allowTransformNone: r = !0
          }, a, o) {
            let l = "";
            e.sort(s);
            for (const i of e) l += `${n[i]||i}(${t[i]}) `;
            return i && !t.z && (l += "translateZ(0)"), l = l.trim(), o ? l = o(t, a ? "" : l) : r && a && (l = "none"), l
          }(t, i, g, h) : p.transform && (p.transform = "none")), y) {
          const {
            originX: t = "50%",
            originY: e = "50%",
            originZ: i = 0
          } = d;
          p.transformOrigin = `${t} ${e} ${i}`
        }
      }
    },
    84804: (t, e, i) => {
      "use strict";
      i.d(e, {
        B: () => n,
        K: () => s
      });
      var r = i(55217);
      const n = t => Boolean(t && "object" == typeof t && t.mix && t.toValue),
        s = t => (0, r.p)(t) ? t[t.length - 1] || 0 : t
    },
    85289: (t, e, i) => {
      "use strict";
      i.d(e, {
        H: () => T
      });
      var r = i(62229),
        n = i(45871),
        s = i(64588),
        a = i(47510),
        o = i(85643);
      const l = o.B ? r.useLayoutEffect : r.useEffect;
      var h = i(9309),
        p = i(43744),
        c = i(79354),
        u = i(11694);

      function f(t) {
        return Array.isArray(t) ? t.join(" ") : t
      }
      var d = i(95277),
        m = i(61439),
        y = i(78638),
        g = i(28710);
      let v = 1;
      var b = i(60794);
      class x extends r.Component {
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
      var P = i(82270);
      const E = Symbol.for("motionComponentSymbol");

      function S({
        preloadedFeatures: t,
        createVisualElement: e,
        projectionNodeConstructor: i,
        useRender: b,
        useVisualState: S,
        Component: T
      }) {
        t && (0, m.Y)(t);
        const A = (0, r.forwardRef)((function(m, E) {
          const A = {
              ...(0, r.useContext)(n.Q),
              ...m,
              layoutId: C(m)
            },
            {
              isStatic: w
            } = A;
          let k = null;
          const D = function(t) {
              const {
                initial: e,
                animate: i
              } = function(t, e) {
                if ((0, u.e)(t)) {
                  const {
                    initial: e,
                    animate: i
                  } = t;
                  return {
                    initial: !1 === e || (0, c.w)(e) ? e : void 0,
                    animate: (0, c.w)(i) ? i : void 0
                  }
                }
                return !1 !== t.inherit ? e : {}
              }(t, (0, r.useContext)(s.A));
              return (0, r.useMemo)((() => ({
                initial: e,
                animate: i
              })), [f(e), f(i)])
            }(m),
            M = w ? void 0 : (0, y.M)((() => {
              if (g.w.hasEverUpdated) return v++
            })),
            _ = S(m, w);
          if (!w && o.B) {
            D.visualElement = function(t, e, i, o) {
              const p = (0, s.f)(),
                c = (0, r.useContext)(h.Y),
                u = (0, r.useContext)(a.t),
                f = (0, r.useContext)(n.Q).reducedMotion,
                d = (0, r.useRef)();
              o = o || c.renderer, !d.current && o && (d.current = o(t, {
                visualState: e,
                parent: p,
                props: i,
                presenceId: u ? u.id : void 0,
                blockInitialAnimation: !!u && !1 === u.initial,
                reducedMotionConfig: f
              }));
              const m = d.current;
              return l((() => {
                m && m.render()
              })), l((() => {
                m && m.animationState && m.animationState.animateChanges()
              })), l((() => () => m && m.notify("Unmount")), []), m
            }(T, _, A, e);
            const o = (0, r.useContext)(h.Y).strict,
              p = (0, r.useContext)(P.N);
            D.visualElement && (k = D.visualElement.loadFeatures(A, o, t, M, i || d.B.projectionNodeConstructor, p))
          }
          return r.createElement(x, {
            visualElement: D.visualElement,
            props: A
          }, k, r.createElement(s.A.Provider, {
            value: D
          }, b(T, m, M, function(t, e, i) {
            return (0, r.useCallback)((r => {
              r && t.mount && t.mount(r), e && (r ? e.mount(r) : e.unmount()), i && ("function" == typeof i ? i(r) : (0, p.X)(i) && (i.current = r))
            }), [e])
          }(_, D.visualElement, E), _, w, D.visualElement)))
        }));
        return A[E] = T, A
      }

      function C({
        layoutId: t
      }) {
        const e = (0, r.useContext)(b.L).id;
        return e && void 0 !== t ? e + "-" + t : t
      }

      function T(t) {
        function e(e, i = {}) {
          return S(t(e, i))
        }
        if ("undefined" == typeof Proxy) return e;
        const i = new Map;
        return new Proxy(e, {
          get: (t, r) => (i.has(r) || i.set(r, e(r)), i.get(r))
        })
      }
    },
    85483: (t, e, i) => {
      "use strict";
      i.d(e, {
        h: () => u,
        B: () => f
      });
      var r = i(74325),
        n = i(66541),
        s = i(85643);
      const a = () => s.B && null === window.onpointerdown,
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
        return a() ? t : o() ? p[t] : l() ? h[t] : t
      }

      function u(t, e, i, s) {
        return (0, r.k)(t, c(e), (0, n.J)(i, "pointerdown" === e), s)
      }

      function f(t, e, i, s) {
        return (0, r.Q)(t, c(e), i && (0, n.J)(i, "pointerdown" === e), s)
      }
    },
    85643: (t, e, i) => {
      "use strict";
      i.d(e, {
        B: () => r
      });
      const r = "undefined" != typeof document
    },
    86337: (t, e, i) => {
      "use strict";
      i.r(e), i.d(e, {
        focusable: () => P,
        getTabIndex: () => u,
        isFocusable: () => C,
        isTabbable: () => E,
        tabbable: () => x
      });
      var r = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"],
        n = r.join(","),
        s = "undefined" == typeof Element,
        a = s ? function() {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector,
        o = !s && Element.prototype.getRootNode ? function(t) {
          var e;
          return null == t || null === (e = t.getRootNode) || void 0 === e ? void 0 : e.call(t)
        } : function(t) {
          return null == t ? void 0 : t.ownerDocument
        },
        l = function t(e, i) {
          var r;
          void 0 === i && (i = !0);
          var n = null == e || null === (r = e.getAttribute) || void 0 === r ? void 0 : r.call(e, "inert");
          return "" === n || "true" === n || i && e && t(e.parentNode)
        },
        h = function(t, e, i) {
          if (l(t)) return [];
          var r = Array.prototype.slice.apply(t.querySelectorAll(n));
          return e && a.call(t, n) && r.unshift(t), r.filter(i)
        },
        p = function t(e, i, r) {
          for (var s = [], o = Array.from(e); o.length;) {
            var h = o.shift();
            if (!l(h, !1))
              if ("SLOT" === h.tagName) {
                var p = h.assignedElements(),
                  c = t(p.length ? p : h.children, !0, r);
                r.flatten ? s.push.apply(s, c) : s.push({
                  scopeParent: h,
                  candidates: c
                })
              } else {
                a.call(h, n) && r.filter(h) && (i || !e.includes(h)) && s.push(h);
                var u = h.shadowRoot || "function" == typeof r.getShadowRoot && r.getShadowRoot(h),
                  f = !l(u, !1) && (!r.shadowRootFilter || r.shadowRootFilter(h));
                if (u && f) {
                  var d = t(!0 === u ? h.children : u.children, !0, r);
                  r.flatten ? s.push.apply(s, d) : s.push({
                    scopeParent: h,
                    candidates: d
                  })
                } else o.unshift.apply(o, h.children)
              }
          }
          return s
        },
        c = function(t) {
          return !isNaN(parseInt(t.getAttribute("tabindex"), 10))
        },
        u = function(t) {
          if (!t) throw new Error("No node provided");
          return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || function(t) {
            var e, i = null == t || null === (e = t.getAttribute) || void 0 === e ? void 0 : e.call(t, "contenteditable");
            return "" === i || "true" === i
          }(t)) && !c(t) ? 0 : t.tabIndex
        },
        f = function(t, e) {
          return t.tabIndex === e.tabIndex ? t.documentOrder - e.documentOrder : t.tabIndex - e.tabIndex
        },
        d = function(t) {
          return "INPUT" === t.tagName
        },
        m = function(t) {
          var e = t.getBoundingClientRect(),
            i = e.width,
            r = e.height;
          return 0 === i && 0 === r
        },
        y = function(t, e) {
          return !(e.disabled || l(e) || function(t) {
            return d(t) && "hidden" === t.type
          }(e) || function(t, e) {
            var i = e.displayCheck,
              r = e.getShadowRoot;
            if ("hidden" === getComputedStyle(t).visibility) return !0;
            var n = a.call(t, "details>summary:first-of-type") ? t.parentElement : t;
            if (a.call(n, "details:not([open]) *")) return !0;
            if (i && "full" !== i && "legacy-full" !== i) {
              if ("non-zero-area" === i) return m(t)
            } else {
              if ("function" == typeof r) {
                for (var s = t; t;) {
                  var l = t.parentElement,
                    h = o(t);
                  if (l && !l.shadowRoot && !0 === r(l)) return m(t);
                  t = t.assignedSlot ? t.assignedSlot : l || h === t.ownerDocument ? l : h.host
                }
                t = s
              }
              if (function(t) {
                  var e, i, r, n, s = t && o(t),
                    a = null === (e = s) || void 0 === e ? void 0 : e.host,
                    l = !1;
                  if (s && s !== t)
                    for (l = !!(null !== (i = a) && void 0 !== i && null !== (r = i.ownerDocument) && void 0 !== r && r.contains(a) || null != t && null !== (n = t.ownerDocument) && void 0 !== n && n.contains(t)); !l && a;) {
                      var h, p, c;
                      l = !(null === (p = a = null === (h = s = o(a)) || void 0 === h ? void 0 : h.host) || void 0 === p || null === (c = p.ownerDocument) || void 0 === c || !c.contains(a))
                    }
                  return l
                }(t)) return !t.getClientRects().length;
              if ("legacy-full" !== i) return !0
            }
            return !1
          }(e, t) || function(t) {
            return "DETAILS" === t.tagName && Array.prototype.slice.apply(t.children).some((function(t) {
              return "SUMMARY" === t.tagName
            }))
          }(e) || function(t) {
            if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
              for (var e = t.parentElement; e;) {
                if ("FIELDSET" === e.tagName && e.disabled) {
                  for (var i = 0; i < e.children.length; i++) {
                    var r = e.children.item(i);
                    if ("LEGEND" === r.tagName) return !!a.call(e, "fieldset[disabled] *") || !r.contains(t)
                  }
                  return !0
                }
                e = e.parentElement
              }
            return !1
          }(e))
        },
        g = function(t, e) {
          return !(function(t) {
            return function(t) {
              return d(t) && "radio" === t.type
            }(t) && ! function(t) {
              if (!t.name) return !0;
              var e, i = t.form || o(t),
                r = function(t) {
                  return i.querySelectorAll('input[type="radio"][name="' + t + '"]')
                };
              if ("undefined" != typeof window && void 0 !== window.CSS && "function" == typeof window.CSS.escape) e = r(window.CSS.escape(t.name));
              else try {
                e = r(t.name)
              } catch (t) {
                return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", t.message), !1
              }
              var n = function(t, e) {
                for (var i = 0; i < t.length; i++)
                  if (t[i].checked && t[i].form === e) return t[i]
              }(e, t.form);
              return !n || n === t
            }(t)
          }(e) || u(e) < 0 || !y(t, e))
        },
        v = function(t) {
          var e = parseInt(t.getAttribute("tabindex"), 10);
          return !!(isNaN(e) || e >= 0)
        },
        b = function t(e) {
          var i = [],
            r = [];
          return e.forEach((function(e, n) {
            var s = !!e.scopeParent,
              a = s ? e.scopeParent : e,
              o = function(t, e) {
                var i = u(t);
                return i < 0 && e && !c(t) ? 0 : i
              }(a, s),
              l = s ? t(e.candidates) : a;
            0 === o ? s ? i.push.apply(i, l) : i.push(a) : r.push({
              documentOrder: n,
              tabIndex: o,
              item: e,
              isScope: s,
              content: l
            })
          })), r.sort(f).reduce((function(t, e) {
            return e.isScope ? t.push.apply(t, e.content) : t.push(e.content), t
          }), []).concat(i)
        },
        x = function(t, e) {
          var i;
          return i = (e = e || {}).getShadowRoot ? p([t], e.includeContainer, {
            filter: g.bind(null, e),
            flatten: !1,
            getShadowRoot: e.getShadowRoot,
            shadowRootFilter: v
          }) : h(t, e.includeContainer, g.bind(null, e)), b(i)
        },
        P = function(t, e) {
          return (e = e || {}).getShadowRoot ? p([t], e.includeContainer, {
            filter: y.bind(null, e),
            flatten: !0,
            getShadowRoot: e.getShadowRoot
          }) : h(t, e.includeContainer, y.bind(null, e))
        },
        E = function(t, e) {
          if (e = e || {}, !t) throw new Error("No node provided");
          return !1 !== a.call(t, n) && g(e, t)
        },
        S = r.concat("iframe").join(","),
        C = function(t, e) {
          if (e = e || {}, !t) throw new Error("No node provided");
          return !1 !== a.call(t, S) && y(e, t)
        }
    },
    87236: (t, e, i) => {
      "use strict";
      i.r(e), i.d(e, {
        createFocusTrap: () => m
      });
      var r = i(86337);

      function n(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var i = 0, r = Array(e); i < e; i++) r[i] = t[i];
        return r
      }

      function s(t, e, i) {
        return (e = function(t) {
          var e = function(t) {
            if ("object" != typeof t || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
              var i = e.call(t, "string");
              if ("object" != typeof i) return i;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(t)
          }(t);
          return "symbol" == typeof e ? e : e + ""
        }(e)) in t ? Object.defineProperty(t, e, {
          value: i,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[e] = i, t
      }

      function a(t, e) {
        var i = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e && (r = r.filter((function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
          }))), i.push.apply(i, r)
        }
        return i
      }

      function o(t) {
        for (var e = 1; e < arguments.length; e++) {
          var i = null != arguments[e] ? arguments[e] : {};
          e % 2 ? a(Object(i), !0).forEach((function(e) {
            s(t, e, i[e])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : a(Object(i)).forEach((function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
          }))
        }
        return t
      }
      var l = function(t) {
          return "Tab" === (null == t ? void 0 : t.key) || 9 === (null == t ? void 0 : t.keyCode)
        },
        h = function(t) {
          return l(t) && !t.shiftKey
        },
        p = function(t) {
          return l(t) && t.shiftKey
        },
        c = function(t) {
          return setTimeout(t, 0)
        },
        u = function(t) {
          for (var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) i[r - 1] = arguments[r];
          return "function" == typeof t ? t.apply(void 0, i) : t
        },
        f = function(t) {
          return t.target.shadowRoot && "function" == typeof t.composedPath ? t.composedPath()[0] : t.target
        },
        d = [],
        m = function(t, e) {
          var i, s = (null == e ? void 0 : e.document) || document,
            a = (null == e ? void 0 : e.trapStack) || d,
            m = o({
              returnFocusOnDeactivate: !0,
              escapeDeactivates: !0,
              delayInitialFocus: !0,
              isKeyForward: h,
              isKeyBackward: p
            }, e),
            y = {
              containers: [],
              containerGroups: [],
              tabbableGroups: [],
              nodeFocusedBeforeActivation: null,
              mostRecentlyFocusedNode: null,
              active: !1,
              paused: !1,
              manuallyPaused: !1,
              delayInitialFocusTimer: void 0,
              recentNavEvent: void 0
            },
            g = function(t, e, i) {
              return t && void 0 !== t[e] ? t[e] : m[i || e]
            },
            v = function(t, e) {
              var i = "function" == typeof(null == e ? void 0 : e.composedPath) ? e.composedPath() : void 0;
              return y.containerGroups.findIndex((function(e) {
                var r = e.container,
                  n = e.tabbableNodes;
                return r.contains(t) || (null == i ? void 0 : i.includes(r)) || n.find((function(e) {
                  return e === t
                }))
              }))
            },
            b = function(t) {
              var e, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                r = i.hasFallback,
                a = void 0 !== r && r,
                o = i.params,
                l = void 0 === o ? [] : o,
                h = m[t];
              if ("function" == typeof h && (h = h.apply(void 0, function(t) {
                  if (Array.isArray(t)) return n(t)
                }(e = l) || function(t) {
                  if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(e) || function(t, e) {
                  if (t) {
                    if ("string" == typeof t) return n(t, e);
                    var i = {}.toString.call(t).slice(8, -1);
                    return "Object" === i && t.constructor && (i = t.constructor.name), "Map" === i || "Set" === i ? Array.from(t) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? n(t, e) : void 0
                  }
                }(e) || function() {
                  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }())), !0 === h && (h = void 0), !h) {
                if (void 0 === h || !1 === h) return h;
                throw new Error("`".concat(t, "` was specified but was not a node, or did not return a node"))
              }
              var p = h;
              if ("string" == typeof h) {
                try {
                  p = s.querySelector(h)
                } catch (e) {
                  throw new Error("`".concat(t, '` appears to be an invalid selector; error="').concat(e.message, '"'))
                }
                if (!p && !a) throw new Error("`".concat(t, "` as selector refers to no known node"))
              }
              return p
            },
            x = function() {
              var t = b("initialFocus", {
                hasFallback: !0
              });
              if (!1 === t) return !1;
              if (void 0 === t || t && !(0, r.isFocusable)(t, m.tabbableOptions))
                if (v(s.activeElement) >= 0) t = s.activeElement;
                else {
                  var e = y.tabbableGroups[0];
                  t = e && e.firstTabbableNode || b("fallbackFocus")
                }
              else null === t && (t = b("fallbackFocus"));
              if (!t) throw new Error("Your focus-trap needs to have at least one focusable element");
              return t
            },
            P = function() {
              if (y.containerGroups = y.containers.map((function(t) {
                  var e = (0, r.tabbable)(t, m.tabbableOptions),
                    i = (0, r.focusable)(t, m.tabbableOptions),
                    n = e.length > 0 ? e[0] : void 0,
                    s = e.length > 0 ? e[e.length - 1] : void 0,
                    a = i.find((function(t) {
                      return (0, r.isTabbable)(t)
                    })),
                    o = i.slice().reverse().find((function(t) {
                      return (0, r.isTabbable)(t)
                    })),
                    l = !!e.find((function(t) {
                      return (0, r.getTabIndex)(t) > 0
                    }));
                  return {
                    container: t,
                    tabbableNodes: e,
                    focusableNodes: i,
                    posTabIndexesFound: l,
                    firstTabbableNode: n,
                    lastTabbableNode: s,
                    firstDomTabbableNode: a,
                    lastDomTabbableNode: o,
                    nextTabbableNode: function(t) {
                      var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        s = e.indexOf(t);
                      return s < 0 ? n ? i.slice(i.indexOf(t) + 1).find((function(t) {
                        return (0, r.isTabbable)(t)
                      })) : i.slice(0, i.indexOf(t)).reverse().find((function(t) {
                        return (0, r.isTabbable)(t)
                      })) : e[s + (n ? 1 : -1)]
                    }
                  }
                })), y.tabbableGroups = y.containerGroups.filter((function(t) {
                  return t.tabbableNodes.length > 0
                })), y.tabbableGroups.length <= 0 && !b("fallbackFocus")) throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
              if (y.containerGroups.find((function(t) {
                  return t.posTabIndexesFound
                })) && y.containerGroups.length > 1) throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.")
            },
            E = function(t) {
              var e = t.activeElement;
              if (e) return e.shadowRoot && null !== e.shadowRoot.activeElement ? E(e.shadowRoot) : e
            },
            S = function(t) {
              !1 !== t && t !== E(document) && (t && t.focus ? (t.focus({
                preventScroll: !!m.preventScroll
              }), y.mostRecentlyFocusedNode = t, function(t) {
                return t.tagName && "input" === t.tagName.toLowerCase() && "function" == typeof t.select
              }(t) && t.select()) : S(x()))
            },
            C = function(t) {
              var e = b("setReturnFocus", {
                params: [t]
              });
              return e || !1 !== e && t
            },
            T = function(t) {
              var e = t.target,
                i = t.event,
                n = t.isBackward,
                s = void 0 !== n && n;
              e = e || f(i), P();
              var a = null;
              if (y.tabbableGroups.length > 0) {
                var o = v(e, i),
                  h = o >= 0 ? y.containerGroups[o] : void 0;
                if (o < 0) a = s ? y.tabbableGroups[y.tabbableGroups.length - 1].lastTabbableNode : y.tabbableGroups[0].firstTabbableNode;
                else if (s) {
                  var p = y.tabbableGroups.findIndex((function(t) {
                    var i = t.firstTabbableNode;
                    return e === i
                  }));
                  if (p < 0 && (h.container === e || (0, r.isFocusable)(e, m.tabbableOptions) && !(0, r.isTabbable)(e, m.tabbableOptions) && !h.nextTabbableNode(e, !1)) && (p = o), p >= 0) {
                    var c = 0 === p ? y.tabbableGroups.length - 1 : p - 1,
                      u = y.tabbableGroups[c];
                    a = (0, r.getTabIndex)(e) >= 0 ? u.lastTabbableNode : u.lastDomTabbableNode
                  } else l(i) || (a = h.nextTabbableNode(e, !1))
                } else {
                  var d = y.tabbableGroups.findIndex((function(t) {
                    var i = t.lastTabbableNode;
                    return e === i
                  }));
                  if (d < 0 && (h.container === e || (0, r.isFocusable)(e, m.tabbableOptions) && !(0, r.isTabbable)(e, m.tabbableOptions) && !h.nextTabbableNode(e)) && (d = o), d >= 0) {
                    var g = d === y.tabbableGroups.length - 1 ? 0 : d + 1,
                      x = y.tabbableGroups[g];
                    a = (0, r.getTabIndex)(e) >= 0 ? x.firstTabbableNode : x.firstDomTabbableNode
                  } else l(i) || (a = h.nextTabbableNode(e))
                }
              } else a = b("fallbackFocus");
              return a
            },
            A = function(t) {
              var e = f(t);
              v(e, t) >= 0 || (u(m.clickOutsideDeactivates, t) ? i.deactivate({
                returnFocus: m.returnFocusOnDeactivate
              }) : u(m.allowOutsideClick, t) || t.preventDefault())
            },
            w = function(t) {
              var e = f(t),
                i = v(e, t) >= 0;
              if (i || e instanceof Document) i && (y.mostRecentlyFocusedNode = e);
              else {
                var n;
                t.stopImmediatePropagation();
                var s = !0;
                if (y.mostRecentlyFocusedNode)
                  if ((0, r.getTabIndex)(y.mostRecentlyFocusedNode) > 0) {
                    var a = v(y.mostRecentlyFocusedNode),
                      o = y.containerGroups[a].tabbableNodes;
                    if (o.length > 0) {
                      var l = o.findIndex((function(t) {
                        return t === y.mostRecentlyFocusedNode
                      }));
                      l >= 0 && (m.isKeyForward(y.recentNavEvent) ? l + 1 < o.length && (n = o[l + 1], s = !1) : l - 1 >= 0 && (n = o[l - 1], s = !1))
                    }
                  } else y.containerGroups.some((function(t) {
                    return t.tabbableNodes.some((function(t) {
                      return (0, r.getTabIndex)(t) > 0
                    }))
                  })) || (s = !1);
                else s = !1;
                s && (n = T({
                  target: y.mostRecentlyFocusedNode,
                  isBackward: m.isKeyBackward(y.recentNavEvent)
                })), S(n || y.mostRecentlyFocusedNode || x())
              }
              y.recentNavEvent = void 0
            },
            k = function(t) {
              (m.isKeyForward(t) || m.isKeyBackward(t)) && function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                y.recentNavEvent = t;
                var i = T({
                  event: t,
                  isBackward: e
                });
                i && (l(t) && t.preventDefault(), S(i))
              }(t, m.isKeyBackward(t))
            },
            D = function(t) {
              var e;
              "Escape" !== (null == (e = t) ? void 0 : e.key) && "Esc" !== (null == e ? void 0 : e.key) && 27 !== (null == e ? void 0 : e.keyCode) || !1 === u(m.escapeDeactivates, t) || (t.preventDefault(), i.deactivate())
            },
            M = function(t) {
              var e = f(t);
              v(e, t) >= 0 || u(m.clickOutsideDeactivates, t) || u(m.allowOutsideClick, t) || (t.preventDefault(), t.stopImmediatePropagation())
            },
            _ = function() {
              if (y.active) return function(t, e) {
                if (t.length > 0) {
                  var i = t[t.length - 1];
                  i !== e && i._setPausedState(!0)
                }
                var r = t.indexOf(e); - 1 === r || t.splice(r, 1), t.push(e)
              }(a, i), y.delayInitialFocusTimer = m.delayInitialFocus ? c((function() {
                S(x())
              })) : S(x()), s.addEventListener("focusin", w, !0), s.addEventListener("mousedown", A, {
                capture: !0,
                passive: !1
              }), s.addEventListener("touchstart", A, {
                capture: !0,
                passive: !1
              }), s.addEventListener("click", M, {
                capture: !0,
                passive: !1
              }), s.addEventListener("keydown", k, {
                capture: !0,
                passive: !1
              }), s.addEventListener("keydown", D), i
            },
            F = function() {
              if (y.active) return s.removeEventListener("focusin", w, !0), s.removeEventListener("mousedown", A, !0), s.removeEventListener("touchstart", A, !0), s.removeEventListener("click", M, !0), s.removeEventListener("keydown", k, !0), s.removeEventListener("keydown", D), i
            },
            I = "undefined" != typeof window && "MutationObserver" in window ? new MutationObserver((function(t) {
              t.some((function(t) {
                return Array.from(t.removedNodes).some((function(t) {
                  return t === y.mostRecentlyFocusedNode
                }))
              })) && S(x())
            })) : void 0,
            V = function() {
              I && (I.disconnect(), y.active && !y.paused && y.containers.map((function(t) {
                I.observe(t, {
                  subtree: !0,
                  childList: !0
                })
              })))
            };
          return i = {
            get active() {
              return y.active
            },
            get paused() {
              return y.paused
            },
            activate: function(t) {
              if (y.active) return this;
              var e = g(t, "onActivate"),
                i = g(t, "onPostActivate"),
                r = g(t, "checkCanFocusTrap");
              r || P(), y.active = !0, y.paused = !1, y.nodeFocusedBeforeActivation = s.activeElement, null == e || e();
              var n = function() {
                r && P(), _(), V(), null == i || i()
              };
              return r ? (r(y.containers.concat()).then(n, n), this) : (n(), this)
            },
            deactivate: function(t) {
              if (!y.active) return this;
              var e = o({
                onDeactivate: m.onDeactivate,
                onPostDeactivate: m.onPostDeactivate,
                checkCanReturnFocus: m.checkCanReturnFocus
              }, t);
              clearTimeout(y.delayInitialFocusTimer), y.delayInitialFocusTimer = void 0, F(), y.active = !1, y.paused = !1, V(),
                function(t, e) {
                  var i = t.indexOf(e); - 1 !== i && t.splice(i, 1), t.length > 0 && !t[t.length - 1]._isManuallyPaused() && t[t.length - 1]._setPausedState(!1)
                }(a, i);
              var r = g(e, "onDeactivate"),
                n = g(e, "onPostDeactivate"),
                s = g(e, "checkCanReturnFocus"),
                l = g(e, "returnFocus", "returnFocusOnDeactivate");
              null == r || r();
              var h = function() {
                c((function() {
                  l && S(C(y.nodeFocusedBeforeActivation)), null == n || n()
                }))
              };
              return l && s ? (s(C(y.nodeFocusedBeforeActivation)).then(h, h), this) : (h(), this)
            },
            pause: function(t) {
              return y.active ? (y.manuallyPaused = !0, this._setPausedState(!0, t)) : this
            },
            unpause: function(t) {
              return y.active ? (y.manuallyPaused = !1, a[a.length - 1] !== this ? this : this._setPausedState(!1, t)) : this
            },
            updateContainerElements: function(t) {
              var e = [].concat(t).filter(Boolean);
              return y.containers = e.map((function(t) {
                return "string" == typeof t ? s.querySelector(t) : t
              })), y.active && P(), V(), this
            }
          }, Object.defineProperties(i, {
            _isManuallyPaused: {
              value: function() {
                return y.manuallyPaused
              }
            },
            _setPausedState: {
              value: function(t, e) {
                if (y.paused === t) return this;
                if (y.paused = t, t) {
                  var i = g(e, "onPause"),
                    r = g(e, "onPostPause");
                  null == i || i(), F(), V(), null == r || r()
                } else {
                  var n = g(e, "onUnpause"),
                    s = g(e, "onPostUnpause");
                  null == n || n(), P(), _(), V(), null == s || s()
                }
                return this
              }
            }
          }), i.updateContainerElements(t), i
        }
    },
    88246: (t, e, i) => {
      "use strict";
      i.d(e, {
        d9: () => l,
        z2: () => s
      });
      var r = i(81547);

      function n(t) {
        return "string" == typeof t && t.startsWith("var(--")
      }
      const s = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
        a = 4;

      function o(t, e, i = 1) {
        (0, r.V)(i <= a, `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`);
        const [l, h] = function(t) {
          const e = s.exec(t);
          if (!e) return [, ];
          const [, i, r] = e;
          return [i, r]
        }(t);
        if (!l) return;
        const p = window.getComputedStyle(e).getPropertyValue(l);
        return p ? p.trim() : n(h) ? o(h, e, i + 1) : h
      }

      function l(t, {
        ...e
      }, i) {
        const r = t.current;
        if (!(r instanceof Element)) return {
          target: e,
          transitionEnd: i
        };
        i && (i = {
          ...i
        }), t.values.forEach((t => {
          const e = t.get();
          if (!n(e)) return;
          const i = o(e, r);
          i && t.set(i)
        }));
        for (const t in e) {
          const s = e[t];
          if (!n(s)) continue;
          const a = o(s, r);
          a && (e[t] = a, i && void 0 === i[t] && (i[t] = s))
        }
        return {
          target: e,
          transitionEnd: i
        }
      }
    },
    88514: (t, e, i) => {
      "use strict";
      i.d(e, {
        D: () => a
      });
      var r = i(30606),
        n = i(7403);
      const s = {
          ...i(60899).W,
          color: r.y,
          backgroundColor: r.y,
          outlineColor: r.y,
          fill: r.y,
          stroke: r.y,
          borderColor: r.y,
          borderTopColor: r.y,
          borderRightColor: r.y,
          borderBottomColor: r.y,
          borderLeftColor: r.y,
          filter: n.p,
          WebkitFilter: n.p
        },
        a = t => s[t]
    },
    88968: (t, e, i) => {
      "use strict";
      i.d(e, {
        l: () => r
      });
      const r = t => t
    },
    90213: (t, e, i) => {
      "use strict";
      i.d(e, {
        u: () => n
      });
      var r = i(53792);
      const n = {
        test: (0, i(82357).$)("#"),
        parse: function(t) {
          let e = "",
            i = "",
            r = "",
            n = "";
          return t.length > 5 ? (e = t.substring(1, 3), i = t.substring(3, 5), r = t.substring(5, 7), n = t.substring(7, 9)) : (e = t.substring(1, 2), i = t.substring(2, 3), r = t.substring(3, 4), n = t.substring(4, 5), e += e, i += i, r += r, n += n), {
            red: parseInt(e, 16),
            green: parseInt(i, 16),
            blue: parseInt(r, 16),
            alpha: n ? parseInt(n, 16) / 255 : 1
          }
        },
        transform: r.B.transform
      }
    },
    95277: (t, e, i) => {
      "use strict";
      i.d(e, {
        B: () => n
      });
      const r = t => ({
          isEnabled: e => t.some((t => !!e[t]))
        }),
        n = {
          measureLayout: r(["layout", "layoutId", "drag"]),
          animation: r(["animate", "exit", "variants", "whileHover", "whileTap", "whileFocus", "whileDrag", "whileInView"]),
          exit: r(["exit"]),
          drag: r(["drag", "dragControls"]),
          focus: r(["whileFocus"]),
          hover: r(["whileHover", "onHoverStart", "onHoverEnd"]),
          tap: r(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
          pan: r(["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]),
          inView: r(["whileInView", "onViewportEnter", "onViewportLeave"])
        }
    },
    95355: (t, e, i) => {
      "use strict";

      function r({
        top: t,
        left: e,
        right: i,
        bottom: r
      }) {
        return {
          x: {
            min: e,
            max: i
          },
          y: {
            min: t,
            max: r
          }
        }
      }

      function n({
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
        const i = e({
            x: t.left,
            y: t.top
          }),
          r = e({
            x: t.right,
            y: t.bottom
          });
        return {
          top: i.y,
          left: i.x,
          bottom: r.y,
          right: r.x
        }
      }
      i.d(e, {
        FY: () => r,
        bS: () => s,
        pA: () => n
      })
    },
    96007: (t, e, i) => {
      "use strict";
      i.d(e, {
        T: () => a,
        n: () => o
      });
      var r = i(35121),
        n = i(2472),
        s = i(26376);
      const a = [r.ai, n.px, n.KN, n.uj, n.vw, n.vh, {
          test: t => "auto" === t,
          parse: t => t
        }],
        o = t => a.find((0, s.w)(t))
    },
    97945: (t, e, i) => {
      "use strict";

      function r(t) {
        return void 0 === t || 1 === t
      }

      function n({
        scale: t,
        scaleX: e,
        scaleY: i
      }) {
        return !r(t) || !r(e) || !r(i)
      }

      function s(t) {
        return n(t) || a(t) || t.z || t.rotate || t.rotateX || t.rotateY
      }

      function a(t) {
        return o(t.x) || o(t.y)
      }

      function o(t) {
        return t && "0%" !== t
      }
      i.d(e, {
        HD: () => s,
        vF: () => a,
        vk: () => n
      })
    },
    98222: (t, e, i) => {
      "use strict";
      i.d(e, {
        P: () => I
      });
      var r = i(19782),
        n = i(62229),
        s = i(9448),
        a = i(78069),
        o = i(84691);
      const l = () => ({
        style: {},
        transform: {},
        transformKeys: [],
        transformOrigin: {},
        vars: {}
      });

      function h(t, e, i) {
        for (const r in e)(0, a.S)(e[r]) || (0, s.z)(r, i) || (t[r] = e[r])
      }

      function p(t, e, i) {
        const r = {},
          s = function(t, e, i) {
            const r = {};
            return h(r, t.style || {}, t), Object.assign(r, function({
              transformTemplate: t
            }, e, i) {
              return (0, n.useMemo)((() => {
                const r = l();
                return (0, o.O)(r, e, {
                  enableHardwareAcceleration: !i
                }, t), Object.assign({}, r.vars, r.style)
              }), [e])
            }(t, e, i)), t.transformValues ? t.transformValues(r) : r
          }(t, e, i);
        return t.drag && !1 !== t.dragListener && (r.draggable = !1, s.userSelect = s.WebkitUserSelect = s.WebkitTouchCallout = "none", s.touchAction = !0 === t.drag ? "none" : "pan-" + ("x" === t.drag ? "y" : "x")), r.style = s, r
      }
      const c = new Set(["initial", "style", "values", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "layout", "layoutId", "layoutDependency", "onLayoutAnimationStart", "onLayoutAnimationComplete", "onLayoutMeasure", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "drag", "dragControls", "dragListener", "dragConstraints", "dragDirectionLock", "dragSnapToOrigin", "_dragX", "_dragY", "dragElastic", "dragMomentum", "dragPropagation", "dragTransition", "onHoverStart", "onHoverEnd", "layoutScroll", "whileInView", "onViewportEnter", "onViewportLeave", "viewport", "whileTap", "onTap", "onTapStart", "onTapCancel", "animate", "exit", "variants", "whileHover", "whileTap", "whileFocus", "whileDrag", "whileInView", "onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]);

      function u(t) {
        return c.has(t)
      }
      let f = t => !u(t);
      try {
        (d = require("@emotion/is-prop-valid").default) && (f = t => t.startsWith("on") ? !u(t) : d(t))
      } catch (t) {}
      var d, m = i(53162);
      const y = () => ({
        ...l(),
        attrs: {}
      });
      var g = i(28432);

      function v(t, e, i, r) {
        const s = (0, n.useMemo)((() => {
          const i = y();
          return (0, m.B)(i, e, {
            enableHardwareAcceleration: !1
          }, (0, g.n)(r), t.transformTemplate), {
            ...i.attrs,
            style: {
              ...i.style
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
        return (e, i, s, a, {
          latestValues: o
        }, l) => {
          const h = ((0, r.Q)(e) ? v : p)(i, o, l, e),
            c = function(t, e, i) {
              const r = {};
              for (const n in t)(f(n) || !0 === i && u(n) || !e && !u(n) || t.draggable && n.startsWith("onDrag")) && (r[n] = t[n]);
              return r
            }(i, "string" == typeof e, t),
            d = {
              ...c,
              ...h,
              ref: a
            };
          return s && (d["data-projection-id"] = s), (0, n.createElement)(e, d)
        }
      }
      var x = i(46542),
        P = i(49300),
        E = i(32467),
        S = i(47510),
        C = i(57508),
        T = i(78638),
        A = i(21297),
        w = i(64588),
        k = i(11694);
      const D = t => (e, i) => {
        const r = (0, n.useContext)(w.A),
          s = (0, n.useContext)(S.t),
          a = () => function({
            scrapeMotionValuesFromProps: t,
            createRenderState: e,
            onMount: i
          }, r, n, s) {
            const a = {
              latestValues: M(r, n, s, t),
              renderState: e()
            };
            return i && (a.mount = t => i(r, t, a)), a
          }(t, e, r, s);
        return i ? a() : (0, T.M)(a)
      };

      function M(t, e, i, r) {
        const n = {},
          s = r(t);
        for (const t in s) n[t] = (0, A.u)(s[t]);
        let {
          initial: a,
          animate: o
        } = t;
        const l = (0, k.e)(t),
          h = (0, k.O)(t);
        e && h && !l && !1 !== t.inherit && (void 0 === a && (a = e.initial), void 0 === o && (o = e.animate));
        let p = !!i && !1 === i.initial;
        p = p || !1 === a;
        const c = p ? o : a;
        return c && "boolean" != typeof c && !(0, E.N)(c) && (Array.isArray(c) ? c : [c]).forEach((e => {
          const i = (0, C.a)(t, e);
          if (!i) return;
          const {
            transitionEnd: r,
            transition: s,
            ...a
          } = i;
          for (const t in a) {
            let e = a[t];
            Array.isArray(e) && (e = e[p ? e.length - 1 : 0]), null !== e && (n[t] = e)
          }
          for (const t in r) n[t] = r[t]
        })), n
      }
      const _ = {
          useVisualState: D({
            scrapeMotionValuesFromProps: P.x,
            createRenderState: y,
            onMount: (t, e, {
              renderState: i,
              latestValues: r
            }) => {
              try {
                i.dimensions = "function" == typeof e.getBBox ? e.getBBox() : e.getBoundingClientRect()
              } catch (t) {
                i.dimensions = {
                  x: 0,
                  y: 0,
                  width: 0,
                  height: 0
                }
              }(0, m.B)(i, r, {
                enableHardwareAcceleration: !1
              }, (0, g.n)(e.tagName), t.transformTemplate), (0, x.d)(e, i)
            }
          })
        },
        F = {
          useVisualState: D({
            scrapeMotionValuesFromProps: i(37493).x,
            createRenderState: l
          })
        };

      function I(t, {
        forwardMotionProps: e = !1
      }, i, n, s) {
        return {
          ...(0, r.Q)(t) ? _ : F,
          preloadedFeatures: i,
          useRender: b(e),
          createVisualElement: n,
          projectionNodeConstructor: s,
          Component: t
        }
      }
    }
  }
]);