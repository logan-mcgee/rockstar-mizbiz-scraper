! function() {
  try {
    var t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      e = (new Error).stack;
    e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "ffee1941-c796-45e0-8b44-90fd4917e10b", t._sentryDebugIdIdentifier = "sentry-dbid-ffee1941-c796-45e0-8b44-90fd4917e10b")
  } catch (t) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-gta-gen9",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [7016], {
    86440: (t, e, n) => {
      "use strict";
      n.d(e, {
        q: () => f
      });
      var r = n(64268),
        o = n(78508),
        i = n(64760),
        a = n(42264),
        s = n(13416);
      const u = t => Array.isArray(t) && !(0, s.I)(t[0]),
        l = (t, e, n) => {
          const r = e - t;
          return ((n - t) % r + r) % r + t
        },
        c = (t, e, n) => Math.min(Math.max(n, t), e);

      function f(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (0, i.U)(t.length),
          n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.k;
        const s = t.length,
          f = s - e.length;
        return f > 0 && (0, i.k)(e, f), o => {
          let i = 0;
          for (; i < s - 2 && !(o < e[i + 1]); i++);
          let f = c(0, 1, (0, a.o)(e[i], e[i + 1], o));
          const d = function(t, e) {
            return u(t) ? t[l(0, t.length, e)] : t
          }(n, i);
          return f = d(f), (0, r.C)(t[i], t[i + 1], f)
        }
      }
    },
    13416: (t, e, n) => {
      "use strict";
      n.d(e, {
        I: () => r
      });
      const r = t => "number" == typeof t
    },
    94648: (t, e, n) => {
      "use strict";
      n.d(e, {
        c: () => r
      });
      const r = t => "string" == typeof t
    },
    64268: (t, e, n) => {
      "use strict";
      n.d(e, {
        C: () => r
      });
      const r = (t, e, n) => -n * t + n * e + t
    },
    78508: (t, e, n) => {
      "use strict";
      n.d(e, {
        k: () => r
      });
      const r = t => t
    },
    64760: (t, e, n) => {
      "use strict";
      n.d(e, {
        U: () => a,
        k: () => i
      });
      var r = n(64268),
        o = n(42264);

      function i(t, e) {
        const n = t[t.length - 1];
        for (let i = 1; i <= e; i++) {
          const a = (0, o.o)(0, e, i);
          t.push((0, r.C)(n, 1, a))
        }
      }

      function a(t) {
        const e = [0];
        return i(e, t - 1), e
      }
    },
    42264: (t, e, n) => {
      "use strict";
      n.d(e, {
        o: () => r
      });
      const r = (t, e, n) => e - t == 0 ? 1 : (n - t) / (e - t)
    },
    34652: (t, e, n) => {
      "use strict";

      function r(t, e) {
        return e ? t * (1e3 / e) : 0
      }
      n.d(e, {
        G: () => r
      })
    },
    97064: (t, e, n) => {
      "use strict";
      n.d(e, {
        O: () => o,
        s: () => r
      });
      var r = function() {},
        o = function() {}
    },
    44392: t => {
      var e, n, r = t.exports = {};

      function o() {
        throw new Error("setTimeout has not been defined")
      }

      function i() {
        throw new Error("clearTimeout has not been defined")
      }

      function a(t) {
        if (e === setTimeout) return setTimeout(t, 0);
        if ((e === o || !e) && setTimeout) return e = setTimeout, setTimeout(t, 0);
        try {
          return e(t, 0)
        } catch (n) {
          try {
            return e.call(null, t, 0)
          } catch (n) {
            return e.call(this, t, 0)
          }
        }
      }! function() {
        try {
          e = "function" == typeof setTimeout ? setTimeout : o
        } catch (t) {
          e = o
        }
        try {
          n = "function" == typeof clearTimeout ? clearTimeout : i
        } catch (t) {
          n = i
        }
      }();
      var s, u = [],
        l = !1,
        c = -1;

      function f() {
        l && s && (l = !1, s.length ? u = s.concat(u) : c = -1, u.length && d())
      }

      function d() {
        if (!l) {
          var t = a(f);
          l = !0;
          for (var e = u.length; e;) {
            for (s = u, u = []; ++c < e;) s && s[c].run();
            c = -1, e = u.length
          }
          s = null, l = !1,
            function(t) {
              if (n === clearTimeout) return clearTimeout(t);
              if ((n === i || !n) && clearTimeout) return n = clearTimeout, clearTimeout(t);
              try {
                return n(t)
              } catch (e) {
                try {
                  return n.call(null, t)
                } catch (e) {
                  return n.call(this, t)
                }
              }
            }(t)
        }
      }

      function p(t, e) {
        this.fun = t, this.array = e
      }

      function v() {}
      r.nextTick = function(t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        u.push(new p(t, e)), 1 !== u.length || l || a(d)
      }, p.prototype.run = function() {
        this.fun.apply(null, this.array)
      }, r.title = "browser", r.browser = !0, r.env = {}, r.argv = [], r.version = "", r.versions = {}, r.on = v, r.addListener = v, r.once = v, r.off = v, r.removeListener = v, r.removeAllListeners = v, r.emit = v, r.prependListener = v, r.prependOnceListener = v, r.listeners = function(t) {
        return []
      }, r.binding = function(t) {
        throw new Error("process.binding is not supported")
      }, r.cwd = function() {
        return "/"
      }, r.chdir = function(t) {
        throw new Error("process.chdir is not supported")
      }, r.umask = function() {
        return 0
      }
    },
    77016: (t, e, n) => {
      "use strict";
      n.r(e), n.d(e, {
        AnimatePresence: () => Za,
        AnimateSharedLayout: () => ns,
        AnimationType: () => Kt,
        DeprecatedLayoutGroupContext: () => Ka,
        DragControls: () => vu,
        FlatTree: () => xa,
        LayoutGroup: () => ts,
        LayoutGroupContext: () => I,
        LazyMotion: () => os,
        MotionConfig: () => rs,
        MotionConfigContext: () => v,
        MotionContext: () => h,
        MotionValue: () => ao,
        PresenceContext: () => g,
        Reorder: () => ys,
        SwitchLayoutGroupContext: () => j,
        addPointerEvent: () => me,
        addScaleCorrector: () => W,
        animate: () => Zi,
        animateVisualElement: () => bo,
        animationControls: () => su,
        animations: () => Mo,
        calcLength: () => zo,
        checkTargetForNewValues: () => go,
        createBox: () => ti,
        createDomMotionComponent: () => Wa,
        createMotionComponent: () => B,
        domAnimation: () => xs,
        domMax: () => bs,
        filterProps: () => Vt,
        isBrowser: () => y,
        isDragActive: () => we,
        isMotionValue: () => J,
        isValidMotionProp: () => Tt,
        m: () => Ha,
        makeUseVisualState: () => $t,
        motion: () => Xa,
        motionValue: () => so,
        resolveMotionValue: () => _t,
        transform: () => ds,
        useAnimation: () => lu,
        useAnimationControls: () => uu,
        useAnimationFrame: () => iu,
        useCycle: () => fu,
        useDeprecatedAnimatedState: () => Su,
        useDeprecatedInvertedScale: () => Pu,
        useDomEvent: () => ne,
        useDragControls: () => mu,
        useElementScroll: () => nu,
        useForceUpdate: () => Ga,
        useInView: () => pu,
        useInstantLayoutTransition: () => gu,
        useInstantTransition: () => xu,
        useIsPresent: () => We,
        useIsomorphicLayoutEffect: () => x,
        useMotionTemplate: () => Cs,
        useMotionValue: () => cs,
        usePresence: () => Xe,
        useReducedMotion: () => w,
        useReducedMotionConfig: () => E,
        useResetProjection: () => bu,
        useScroll: () => eu,
        useSpring: () => ws,
        useTime: () => au,
        useTransform: () => vs,
        useUnmountEffect: () => Te,
        useVelocity: () => Es,
        useViewportScroll: () => ru,
        useVisualElementContext: () => m,
        visualElement: () => wi,
        wrapHandler: () => le
      });
      var r = n(87672),
        o = n(51664),
        i = n(44392),
        a = (void 0 === i || i.env, "production"),
        s = function(t) {
          return {
            isEnabled: function(e) {
              return t.some((function(t) {
                return !!e[t]
              }))
            }
          }
        },
        u = {
          measureLayout: s(["layout", "layoutId", "drag"]),
          animation: s(["animate", "exit", "variants", "whileHover", "whileTap", "whileFocus", "whileDrag", "whileInView"]),
          exit: s(["exit"]),
          drag: s(["drag", "dragControls"]),
          focus: s(["whileFocus"]),
          hover: s(["whileHover", "onHoverStart", "onHoverEnd"]),
          tap: s(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
          pan: s(["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]),
          inView: s(["whileInView", "onViewportEnter", "onViewportLeave"])
        };

      function l(t) {
        for (var e in t) null !== t[e] && ("projectionNodeConstructor" === e ? u.projectionNodeConstructor = t[e] : u[e].Component = t[e])
      }
      var c = n(97064),
        f = (0, o.createContext)({
          strict: !1
        }),
        d = Object.keys(u),
        p = d.length,
        v = (0, o.createContext)({
          transformPagePoint: function(t) {
            return t
          },
          isStatic: !1,
          reducedMotion: "never"
        }),
        h = (0, o.createContext)({});

      function m() {
        return (0, o.useContext)(h).visualElement
      }
      var g = (0, o.createContext)(null),
        y = "undefined" != typeof document,
        x = y ? o.useLayoutEffect : o.useEffect,
        b = {
          current: null
        },
        C = !1;

      function w() {
        return !C && function() {
          if (C = !0, y)
            if (window.matchMedia) {
              var t = window.matchMedia("(prefers-reduced-motion)"),
                e = function() {
                  return b.current = t.matches
                };
              t.addListener(e), e()
            } else b.current = !1
        }(), (0, r.o5)((0, o.useState)(b.current), 1)[0]
      }

      function E() {
        var t = w(),
          e = (0, o.useContext)(v).reducedMotion;
        return "never" !== e && ("always" === e || t)
      }

      function S(t) {
        return "object" == typeof t && Object.prototype.hasOwnProperty.call(t, "current")
      }

      function T(t) {
        return Array.isArray(t)
      }

      function A(t) {
        return "string" == typeof t || T(t)
      }

      function P(t, e, n, r, o) {
        var i;
        return void 0 === r && (r = {}), void 0 === o && (o = {}), "function" == typeof e && (e = e(null != n ? n : t.custom, r, o)), "string" == typeof e && (e = null === (i = t.variants) || void 0 === i ? void 0 : i[e]), "function" == typeof e && (e = e(null != n ? n : t.custom, r, o)), e
      }

      function V(t, e, n) {
        var r = t.getProps();
        return P(r, e, null != n ? n : r.custom, function(t) {
          var e = {};
          return t.forEachValue((function(t, n) {
            return e[n] = t.get()
          })), e
        }(t), function(t) {
          var e = {};
          return t.forEachValue((function(t, n) {
            return e[n] = t.getVelocity()
          })), e
        }(t))
      }

      function M(t) {
        var e;
        return "function" == typeof(null === (e = t.animate) || void 0 === e ? void 0 : e.start) || A(t.initial) || A(t.animate) || A(t.whileHover) || A(t.whileDrag) || A(t.whileTap) || A(t.whileFocus) || A(t.exit)
      }

      function R(t) {
        return Boolean(M(t) || t.variants)
      }

      function L(t) {
        return Array.isArray(t) ? t.join(" ") : t
      }

      function k(t) {
        var e = (0, o.useRef)(null);
        return null === e.current && (e.current = t()), e.current
      }
      var D = {
          hasAnimatedSinceResize: !0,
          hasEverUpdated: !1
        },
        O = 1,
        I = (0, o.createContext)({}),
        j = (0, o.createContext)({}),
        F = function(t) {
          function e() {
            return null !== t && t.apply(this, arguments) || this
          }
          return (0, r.ct)(e, t), e.prototype.getSnapshotBeforeUpdate = function() {
            return this.updateProps(), null
          }, e.prototype.componentDidUpdate = function() {}, e.prototype.updateProps = function() {
            var t = this.props,
              e = t.visualElement,
              n = t.props;
            e && e.setProps(n)
          }, e.prototype.render = function() {
            return this.props.children
          }, e
        }(o.Component);

      function B(t) {
        var e = t.preloadedFeatures,
          n = t.createVisualElement,
          i = t.projectionNodeConstructor,
          s = t.useRender,
          b = t.useVisualState,
          C = t.Component;
        return e && l(e), (0, o.forwardRef)((function(t, l) {
          var w = function(t) {
            var e, n = t.layoutId,
              r = null === (e = (0, o.useContext)(I)) || void 0 === e ? void 0 : e.id;
            return r && void 0 !== n ? r + "-" + n : n
          }(t);
          t = (0, r.C3)((0, r.C3)({}, t), {
            layoutId: w
          });
          var T = (0, o.useContext)(v),
            P = null,
            V = function(t) {
              var e = function(t, e) {
                  if (M(t)) {
                    var n = t.initial,
                      r = t.animate;
                    return {
                      initial: !1 === n || A(n) ? n : void 0,
                      animate: A(r) ? r : void 0
                    }
                  }
                  return !1 !== t.inherit ? e : {}
                }(t, (0, o.useContext)(h)),
                n = e.initial,
                r = e.animate;
              return (0, o.useMemo)((function() {
                return {
                  initial: n,
                  animate: r
                }
              }), [L(n), L(r)])
            }(t),
            R = T.isStatic ? void 0 : k((function() {
              if (D.hasEverUpdated) return O++
            })),
            B = b(t, T.isStatic);
          return !T.isStatic && y && (V.visualElement = function(t, e, n, r) {
            var i = (0, o.useContext)(f),
              a = m(),
              s = (0, o.useContext)(g),
              u = E(),
              l = (0, o.useRef)(void 0);
            r || (r = i.renderer), !l.current && r && (l.current = r(t, {
              visualState: e,
              parent: a,
              props: n,
              presenceId: null == s ? void 0 : s.id,
              blockInitialAnimation: !1 === (null == s ? void 0 : s.initial),
              shouldReduceMotion: u
            }));
            var c = l.current;
            return x((function() {
              null == c || c.syncRender()
            })), (0, o.useEffect)((function() {
              var t;
              null === (t = null == c ? void 0 : c.animationState) || void 0 === t || t.animateChanges()
            })), x((function() {
              return function() {
                return null == c ? void 0 : c.notifyUnmount()
              }
            }), []), c
          }(C, B, (0, r.C3)((0, r.C3)({}, T), t), n), function(t, e, n, r) {
            var i, a = e.layoutId,
              s = e.layout,
              u = e.drag,
              l = e.dragConstraints,
              c = e.layoutScroll,
              f = (0, o.useContext)(j);
            r && n && !(null == n ? void 0 : n.projection) && (n.projection = new r(t, n.getLatestValues(), null === (i = n.parent) || void 0 === i ? void 0 : i.projection), n.projection.setOptions({
              layoutId: a,
              layout: s,
              alwaysMeasureLayout: Boolean(u) || l && S(l),
              visualElement: n,
              scheduleRender: function() {
                return n.scheduleRender()
              },
              animationType: "string" == typeof s ? s : "both",
              initialPromotionConfig: f,
              layoutScroll: c
            }))
          }(R, t, V.visualElement, i || u.projectionNodeConstructor), P = function(t, e, n) {
            var i = [],
              s = (0, o.useContext)(f);
            if (!e) return null;
            "production" !== a && n && s.strict && (0, c.O)(!1, "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.");
            for (var l = 0; l < p; l++) {
              var v = d[l],
                h = u[v],
                m = h.isEnabled,
                g = h.Component;
              m(t) && g && i.push(o.createElement(g, (0, r.C3)({
                key: v
              }, t, {
                visualElement: e
              })))
            }
            return i
          }(t, V.visualElement, e)), o.createElement(F, {
            visualElement: V.visualElement,
            props: (0, r.C3)((0, r.C3)({}, T), t)
          }, P, o.createElement(h.Provider, {
            value: V
          }, s(C, t, R, function(t, e, n) {
            return (0, o.useCallback)((function(r) {
              var o;
              r && (null === (o = t.mount) || void 0 === o || o.call(t, r)), e && (r ? e.mount(r) : e.unmount()), n && ("function" == typeof n ? n(r) : S(n) && (n.current = r))
            }), [e])
          }(B, V.visualElement, l), B, T.isStatic, V.visualElement)))
        }))
      }

      function U(t) {
        function e(e, n) {
          return void 0 === n && (n = {}), B(t(e, n))
        }
        if ("undefined" == typeof Proxy) return e;
        var n = new Map;
        return new Proxy(e, {
          get: function(t, r) {
            return n.has(r) || n.set(r, e(r)), n.get(r)
          }
        })
      }
      var N = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "svg", "switch", "symbol", "text", "tspan", "use", "view"];

      function z(t) {
        return "string" == typeof t && !t.includes("-") && !!(N.indexOf(t) > -1 || /[A-Z]/.test(t))
      }
      var X = {};

      function W(t) {
        Object.assign(X, t)
      }
      var H = ["", "X", "Y", "Z"],
        Y = ["transformPerspective", "x", "y", "z"];

      function G(t, e) {
        return Y.indexOf(t) - Y.indexOf(e)
      } ["translate", "scale", "rotate", "skew"].forEach((function(t) {
        return H.forEach((function(e) {
          return Y.push(t + e)
        }))
      }));
      var _ = new Set(Y);

      function q(t) {
        return _.has(t)
      }
      var $ = new Set(["originX", "originY", "originZ"]);

      function Z(t) {
        return $.has(t)
      }

      function K(t, e) {
        var n = e.layout,
          r = e.layoutId;
        return q(t) || Z(t) || (n || void 0 !== r) && (!!X[t] || "opacity" === t)
      }
      var J = function(t) {
          return Boolean(null !== t && "object" == typeof t && t.getVelocity)
        },
        Q = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective"
        };

      function tt(t) {
        return t.startsWith("--")
      }
      var et = function(t, e) {
        return e && "number" == typeof t ? e.transform(t) : t
      };
      const nt = (t, e) => n => Math.max(Math.min(n, e), t),
        rt = t => t % 1 ? Number(t.toFixed(5)) : t,
        ot = /(-)?([\d]*\.?[\d])+/g,
        it = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi,
        at = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;

      function st(t) {
        return "string" == typeof t
      }
      const ut = t => ({
          test: e => st(e) && e.endsWith(t) && 1 === e.split(" ").length,
          parse: parseFloat,
          transform: e => `${e}${t}`
        }),
        lt = ut("deg"),
        ct = ut("%"),
        ft = ut("px"),
        dt = ut("vh"),
        pt = ut("vw"),
        vt = Object.assign(Object.assign({}, ct), {
          parse: t => ct.parse(t) / 100,
          transform: t => ct.transform(100 * t)
        }),
        ht = {
          test: t => "number" == typeof t,
          parse: parseFloat,
          transform: t => t
        },
        mt = Object.assign(Object.assign({}, ht), {
          transform: nt(0, 1)
        }),
        gt = Object.assign(Object.assign({}, ht), {
          default: 1
        });
      var yt = (0, r.C3)((0, r.C3)({}, ht), {
          transform: Math.round
        }),
        xt = {
          borderWidth: ft,
          borderTopWidth: ft,
          borderRightWidth: ft,
          borderBottomWidth: ft,
          borderLeftWidth: ft,
          borderRadius: ft,
          radius: ft,
          borderTopLeftRadius: ft,
          borderTopRightRadius: ft,
          borderBottomRightRadius: ft,
          borderBottomLeftRadius: ft,
          width: ft,
          maxWidth: ft,
          height: ft,
          maxHeight: ft,
          size: ft,
          top: ft,
          right: ft,
          bottom: ft,
          left: ft,
          padding: ft,
          paddingTop: ft,
          paddingRight: ft,
          paddingBottom: ft,
          paddingLeft: ft,
          margin: ft,
          marginTop: ft,
          marginRight: ft,
          marginBottom: ft,
          marginLeft: ft,
          rotate: lt,
          rotateX: lt,
          rotateY: lt,
          rotateZ: lt,
          scale: gt,
          scaleX: gt,
          scaleY: gt,
          scaleZ: gt,
          skew: lt,
          skewX: lt,
          skewY: lt,
          distance: ft,
          translateX: ft,
          translateY: ft,
          translateZ: ft,
          x: ft,
          y: ft,
          z: ft,
          perspective: ft,
          transformPerspective: ft,
          opacity: mt,
          originX: vt,
          originY: vt,
          originZ: ft,
          zIndex: yt,
          fillOpacity: mt,
          strokeOpacity: mt,
          numOctaves: yt
        };

      function bt(t, e, n, r) {
        var o, i = t.style,
          a = t.vars,
          s = t.transform,
          u = t.transformKeys,
          l = t.transformOrigin;
        u.length = 0;
        var c = !1,
          f = !1,
          d = !0;
        for (var p in e) {
          var v = e[p];
          if (tt(p)) a[p] = v;
          else {
            var h = xt[p],
              m = et(v, h);
            if (q(p)) {
              if (c = !0, s[p] = m, u.push(p), !d) continue;
              v !== (null !== (o = h.default) && void 0 !== o ? o : 0) && (d = !1)
            } else Z(p) ? (l[p] = m, f = !0) : i[p] = m
          }
        }
        c ? i.transform = function(t, e, n, r) {
          var o = t.transform,
            i = t.transformKeys,
            a = e.enableHardwareAcceleration,
            s = void 0 === a || a,
            u = e.allowTransformNone,
            l = void 0 === u || u,
            c = "";
          i.sort(G);
          for (var f = !1, d = i.length, p = 0; p < d; p++) {
            var v = i[p];
            c += "".concat(Q[v] || v, "(").concat(o[v], ") "), "z" === v && (f = !0)
          }
          return !f && s ? c += "translateZ(0)" : c = c.trim(), r ? c = r(o, n ? "" : c) : l && n && (c = "none"), c
        }(t, n, d, r) : r ? i.transform = r({}, "") : !e.transform && i.transform && (i.transform = "none"), f && (i.transformOrigin = function(t) {
          var e = t.originX,
            n = void 0 === e ? "50%" : e,
            r = t.originY,
            o = void 0 === r ? "50%" : r,
            i = t.originZ,
            a = void 0 === i ? 0 : i;
          return "".concat(n, " ").concat(o, " ").concat(a)
        }(l))
      }
      var Ct = function() {
        return {
          style: {},
          transform: {},
          transformKeys: [],
          transformOrigin: {},
          vars: {}
        }
      };

      function wt(t, e, n) {
        for (var r in e) J(e[r]) || K(r, n) || (t[r] = e[r])
      }

      function Et(t, e, n) {
        var i = {},
          a = function(t, e, n) {
            var i = {};
            return wt(i, t.style || {}, t), Object.assign(i, function(t, e, n) {
              var i = t.transformTemplate;
              return (0, o.useMemo)((function() {
                var t = Ct();
                bt(t, e, {
                  enableHardwareAcceleration: !n
                }, i);
                var o = t.vars,
                  a = t.style;
                return (0, r.C3)((0, r.C3)({}, o), a)
              }), [e])
            }(t, e, n)), t.transformValues && (i = t.transformValues(i)), i
          }(t, e, n);
        return Boolean(t.drag) && !1 !== t.dragListener && (i.draggable = !1, a.userSelect = a.WebkitUserSelect = a.WebkitTouchCallout = "none", a.touchAction = !0 === t.drag ? "none" : "pan-".concat("x" === t.drag ? "y" : "x")), i.style = a, i
      }
      var St = new Set(["initial", "animate", "exit", "style", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "layout", "layoutId", "layoutDependency", "onLayoutAnimationStart", "onLayoutAnimationComplete", "onLayoutMeasure", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "drag", "dragControls", "dragListener", "dragConstraints", "dragDirectionLock", "dragSnapToOrigin", "_dragX", "_dragY", "dragElastic", "dragMomentum", "dragPropagation", "dragTransition", "whileDrag", "onPan", "onPanStart", "onPanEnd", "onPanSessionStart", "onTap", "onTapStart", "onTapCancel", "onHoverStart", "onHoverEnd", "whileFocus", "whileTap", "whileHover", "whileInView", "onViewportEnter", "onViewportLeave", "viewport", "layoutScroll"]);

      function Tt(t) {
        return St.has(t)
      }
      var At = function(t) {
        return !Tt(t)
      };

      function Pt(t) {
        t && (At = function(e) {
          return e.startsWith("on") ? !Tt(e) : t(e)
        })
      }
      try {
        Pt(require("@emotion/is-prop-valid").default)
      } catch (t) {}

      function Vt(t, e, n) {
        var r = {};
        for (var o in t)(At(o) || !0 === n && Tt(o) || !e && !Tt(o) || t.draggable && o.startsWith("onDrag")) && (r[o] = t[o]);
        return r
      }

      function Mt(t, e, n) {
        return "string" == typeof t ? t : ft.transform(e + n * t)
      }
      var Rt = {
          offset: "stroke-dashoffset",
          array: "stroke-dasharray"
        },
        Lt = {
          offset: "strokeDashoffset",
          array: "strokeDasharray"
        };

      function kt(t, e, n, o) {
        var i = e.attrX,
          a = e.attrY,
          s = e.originX,
          u = e.originY,
          l = e.pathLength,
          c = e.pathSpacing,
          f = void 0 === c ? 1 : c,
          d = e.pathOffset,
          p = void 0 === d ? 0 : d;
        bt(t, (0, r.sX)(e, ["attrX", "attrY", "originX", "originY", "pathLength", "pathSpacing", "pathOffset"]), n, o), t.attrs = t.style, t.style = {};
        var v = t.attrs,
          h = t.style,
          m = t.dimensions;
        v.transform && (m && (h.transform = v.transform), delete v.transform), m && (void 0 !== s || void 0 !== u || h.transform) && (h.transformOrigin = function(t, e, n) {
          var r = Mt(e, t.x, t.width),
            o = Mt(n, t.y, t.height);
          return "".concat(r, " ").concat(o)
        }(m, void 0 !== s ? s : .5, void 0 !== u ? u : .5)), void 0 !== i && (v.x = i), void 0 !== a && (v.y = a), void 0 !== l && function(t, e, n, r, o) {
          void 0 === n && (n = 1), void 0 === r && (r = 0), void 0 === o && (o = !0), t.pathLength = 1;
          var i = o ? Rt : Lt;
          t[i.offset] = ft.transform(-r);
          var a = ft.transform(e),
            s = ft.transform(n);
          t[i.array] = "".concat(a, " ").concat(s)
        }(v, l, f, p, !1)
      }
      var Dt = function() {
        return (0, r.C3)((0, r.C3)({}, Ct()), {
          attrs: {}
        })
      };

      function Ot(t, e) {
        var n = (0, o.useMemo)((function() {
          var n = Dt();
          return kt(n, e, {
            enableHardwareAcceleration: !1
          }, t.transformTemplate), (0, r.C3)((0, r.C3)({}, n.attrs), {
            style: (0, r.C3)({}, n.style)
          })
        }), [e]);
        if (t.style) {
          var i = {};
          wt(i, t.style, t), n.style = (0, r.C3)((0, r.C3)({}, i), n.style)
        }
        return n
      }

      function It(t) {
        return void 0 === t && (t = !1),
          function(e, n, i, a, s, u) {
            var l = s.latestValues,
              c = (z(e) ? Ot : Et)(n, l, u),
              f = Vt(n, "string" == typeof e, t),
              d = (0, r.C3)((0, r.C3)((0, r.C3)({}, f), c), {
                ref: a
              });
            return i && (d["data-projection-id"] = i), (0, o.createElement)(e, d)
          }
      }
      var jt = /([a-z])([A-Z])/g,
        Ft = function(t) {
          return t.replace(jt, "$1-$2").toLowerCase()
        };

      function Bt(t, e, n, r) {
        var o = e.style,
          i = e.vars;
        for (var a in Object.assign(t.style, o, r && r.getProjectionStyles(n)), i) t.style.setProperty(a, i[a])
      }
      var Ut = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength"]);

      function Nt(t, e, n, r) {
        for (var o in Bt(t, e, void 0, r), e.attrs) t.setAttribute(Ut.has(o) ? o : Ft(o), e.attrs[o])
      }

      function zt(t) {
        var e = t.style,
          n = {};
        for (var r in e)(J(e[r]) || K(r, t)) && (n[r] = e[r]);
        return n
      }

      function Xt(t) {
        var e = zt(t);
        for (var n in t) J(t[n]) && (e["x" === n || "y" === n ? "attr" + n.toUpperCase() : n] = t[n]);
        return e
      }

      function Wt(t) {
        return "object" == typeof t && "function" == typeof t.start
      }
      var Ht = function(t) {
          return Array.isArray(t)
        },
        Yt = function(t) {
          return Boolean(t && "object" == typeof t && t.mix && t.toValue)
        },
        Gt = function(t) {
          return Ht(t) ? t[t.length - 1] || 0 : t
        };

      function _t(t) {
        var e = J(t) ? t.get() : t;
        return Yt(e) ? e.toValue() : e
      }

      function qt(t, e, n, r) {
        var o = t.scrapeMotionValuesFromProps,
          i = t.createRenderState,
          a = t.onMount,
          s = {
            latestValues: Zt(e, n, r, o),
            renderState: i()
          };
        return a && (s.mount = function(t) {
          return a(e, t, s)
        }), s
      }
      var $t = function(t) {
        return function(e, n) {
          var r = (0, o.useContext)(h),
            i = (0, o.useContext)(g);
          return n ? qt(t, e, r, i) : k((function() {
            return qt(t, e, r, i)
          }))
        }
      };

      function Zt(t, e, n, o) {
        var i = {},
          a = !1 === (null == n ? void 0 : n.initial),
          s = o(t);
        for (var u in s) i[u] = _t(s[u]);
        var l = t.initial,
          c = t.animate,
          f = M(t),
          d = R(t);
        e && d && !f && !1 !== t.inherit && (null != l || (l = e.initial), null != c || (c = e.animate));
        var p = a || !1 === l,
          v = p ? c : l;
        return v && "boolean" != typeof v && !Wt(v) && (Array.isArray(v) ? v : [v]).forEach((function(e) {
          var n = P(t, e);
          if (n) {
            var o = n.transitionEnd;
            n.transition;
            var a = (0, r.sX)(n, ["transitionEnd", "transition"]);
            for (var s in a) {
              var u = a[s];
              Array.isArray(u) && (u = u[p ? u.length - 1 : 0]), null !== u && (i[s] = u)
            }
            for (var s in o) i[s] = o[s]
          }
        })), i
      }
      var Kt, Jt = {
          useVisualState: $t({
            scrapeMotionValuesFromProps: Xt,
            createRenderState: Dt,
            onMount: function(t, e, n) {
              var r = n.renderState,
                o = n.latestValues;
              try {
                r.dimensions = "function" == typeof e.getBBox ? e.getBBox() : e.getBoundingClientRect()
              } catch (t) {
                r.dimensions = {
                  x: 0,
                  y: 0,
                  width: 0,
                  height: 0
                }
              }
              kt(r, o, {
                enableHardwareAcceleration: !1
              }, t.transformTemplate), Nt(e, r)
            }
          })
        },
        Qt = {
          useVisualState: $t({
            scrapeMotionValuesFromProps: zt,
            createRenderState: Ct
          })
        };

      function te(t, e, n, o, i) {
        var a = e.forwardMotionProps,
          s = void 0 !== a && a,
          u = z(t) ? Jt : Qt;
        return (0, r.C3)((0, r.C3)({}, u), {
          preloadedFeatures: n,
          useRender: It(s),
          createVisualElement: o,
          projectionNodeConstructor: i,
          Component: t
        })
      }

      function ee(t, e, n, r) {
        return void 0 === r && (r = {
            passive: !0
          }), t.addEventListener(e, n, r),
          function() {
            return t.removeEventListener(e, n)
          }
      }

      function ne(t, e, n, r) {
        (0, o.useEffect)((function() {
          var o = t.current;
          if (n && o) return ee(o, e, n, r)
        }), [t, e, n, r])
      }

      function re(t) {
        return "undefined" != typeof PointerEvent && t instanceof PointerEvent ? !("mouse" !== t.pointerType) : t instanceof MouseEvent
      }

      function oe(t) {
        return !!t.touches
      }! function(t) {
        t.Animate = "animate", t.Hover = "whileHover", t.Tap = "whileTap", t.Drag = "whileDrag", t.Focus = "whileFocus", t.InView = "whileInView", t.Exit = "exit"
      }(Kt || (Kt = {}));
      var ie = {
        pageX: 0,
        pageY: 0
      };

      function ae(t, e) {
        void 0 === e && (e = "page");
        var n = t.touches[0] || t.changedTouches[0] || ie;
        return {
          x: n[e + "X"],
          y: n[e + "Y"]
        }
      }

      function se(t, e) {
        return void 0 === e && (e = "page"), {
          x: t[e + "X"],
          y: t[e + "Y"]
        }
      }

      function ue(t, e) {
        return void 0 === e && (e = "page"), {
          point: oe(t) ? ae(t, e) : se(t, e)
        }
      }
      var le = function(t, e) {
          void 0 === e && (e = !1);
          var n, r = function(e) {
            return t(e, ue(e))
          };
          return e ? (n = r, function(t) {
            var e = t instanceof MouseEvent;
            (!e || e && 0 === t.button) && n(t)
          }) : r
        },
        ce = function() {
          return y && null === window.onpointerdown
        },
        fe = function() {
          return y && null === window.ontouchstart
        },
        de = function() {
          return y && null === window.onmousedown
        },
        pe = {
          pointerdown: "mousedown",
          pointermove: "mousemove",
          pointerup: "mouseup",
          pointercancel: "mousecancel",
          pointerover: "mouseover",
          pointerout: "mouseout",
          pointerenter: "mouseenter",
          pointerleave: "mouseleave"
        },
        ve = {
          pointerdown: "touchstart",
          pointermove: "touchmove",
          pointerup: "touchend",
          pointercancel: "touchcancel"
        };

      function he(t) {
        return ce() ? t : fe() ? ve[t] : de() ? pe[t] : t
      }

      function me(t, e, n, r) {
        return ee(t, he(e), le(n, "pointerdown" === e), r)
      }

      function ge(t, e, n, r) {
        return ne(t, he(e), n && le(n, "pointerdown" === e), r)
      }

      function ye(t) {
        var e = null;
        return function() {
          return null === e && (e = t, function() {
            e = null
          })
        }
      }
      var xe = ye("dragHorizontal"),
        be = ye("dragVertical");

      function Ce(t) {
        var e = !1;
        if ("y" === t) e = be();
        else if ("x" === t) e = xe();
        else {
          var n = xe(),
            r = be();
          n && r ? e = function() {
            n(), r()
          } : (n && n(), r && r())
        }
        return e
      }

      function we() {
        var t = Ce(!0);
        return !t || (t(), !1)
      }

      function Ee(t, e, n) {
        return function(r, o) {
          var i;
          re(r) && !we() && (null === (i = t.animationState) || void 0 === i || i.setActive(Kt.Hover, e), null == n || n(r, o))
        }
      }
      var Se = function(t, e) {
        return !!e && (t === e || Se(t, e.parentElement))
      };

      function Te(t) {
        return (0, o.useEffect)((function() {
          return function() {
            return t()
          }
        }), [])
      }
      const Ae = (t, e) => n => e(t(n)),
        Pe = (...t) => t.reduce(Ae);
      var Ve = new Set;

      function Me(t, e, n) {
        t || Ve.has(e) || (console.warn(e), n && console.warn(n), Ve.add(e))
      }
      var Re = new WeakMap,
        Le = new WeakMap,
        ke = function(t) {
          var e;
          null === (e = Re.get(t.target)) || void 0 === e || e(t)
        },
        De = function(t) {
          t.forEach(ke)
        };
      var Oe = {
        some: 0,
        all: 1
      };

      function Ie(t, e, n, i) {
        var a = i.root,
          s = i.margin,
          u = i.amount,
          l = void 0 === u ? "some" : u,
          c = i.once;
        (0, o.useEffect)((function() {
          if (t) {
            var o = {
              root: null == a ? void 0 : a.current,
              rootMargin: s,
              threshold: "number" == typeof l ? l : Oe[l]
            };
            return function(t, e, n) {
              var o = function(t) {
                var e = t.root,
                  n = (0, r.sX)(t, ["root"]),
                  o = e || document;
                Le.has(o) || Le.set(o, {});
                var i = Le.get(o),
                  a = JSON.stringify(n);
                return i[a] || (i[a] = new IntersectionObserver(De, (0, r.C3)({
                  root: e
                }, n))), i[a]
              }(e);
              return Re.set(t, n), o.observe(t),
                function() {
                  Re.delete(t), o.unobserve(t)
                }
            }(n.getInstance(), o, (function(t) {
              var r, o = t.isIntersecting;
              if (e.isInView !== o && (e.isInView = o, !c || o || !e.hasEnteredView)) {
                o && (e.hasEnteredView = !0), null === (r = n.animationState) || void 0 === r || r.setActive(Kt.InView, o);
                var i = n.getProps(),
                  a = o ? i.onViewportEnter : i.onViewportLeave;
                null == a || a(t)
              }
            }))
          }
        }), [t, a, s, l])
      }

      function je(t, e, n, r) {
        var i = r.fallback,
          s = void 0 === i || i;
        (0, o.useEffect)((function() {
          t && s && ("production" !== a && Me(!1, "IntersectionObserver not available on this device. whileInView animations will trigger on mount."), requestAnimationFrame((function() {
            var t;
            e.hasEnteredView = !0;
            var r = n.getProps().onViewportEnter;
            null == r || r(null), null === (t = n.animationState) || void 0 === t || t.setActive(Kt.InView, !0)
          })))
        }), [t])
      }
      var Fe = function(t) {
          return function(e) {
            return t(e), null
          }
        },
        Be = {
          inView: Fe((function(t) {
            var e = t.visualElement,
              n = t.whileInView,
              r = t.onViewportEnter,
              i = t.onViewportLeave,
              a = t.viewport,
              s = void 0 === a ? {} : a,
              u = (0, o.useRef)({
                hasEnteredView: !1,
                isInView: !1
              }),
              l = Boolean(n || r || i);
            s.once && u.current.hasEnteredView && (l = !1), ("undefined" == typeof IntersectionObserver ? je : Ie)(l, u.current, e, s)
          })),
          tap: Fe((function(t) {
            var e = t.onTap,
              n = t.onTapStart,
              r = t.onTapCancel,
              i = t.whileTap,
              a = t.visualElement,
              s = e || n || r || i,
              u = (0, o.useRef)(!1),
              l = (0, o.useRef)(null),
              c = {
                passive: !(n || e || r || h)
              };

            function f() {
              var t;
              null === (t = l.current) || void 0 === t || t.call(l), l.current = null
            }

            function d() {
              var t;
              return f(), u.current = !1, null === (t = a.animationState) || void 0 === t || t.setActive(Kt.Tap, !1), !we()
            }

            function p(t, n) {
              d() && (Se(a.getInstance(), t.target) ? null == e || e(t, n) : null == r || r(t, n))
            }

            function v(t, e) {
              d() && (null == r || r(t, e))
            }

            function h(t, e) {
              var r;
              f(), u.current || (u.current = !0, l.current = Pe(me(window, "pointerup", p, c), me(window, "pointercancel", v, c)), null === (r = a.animationState) || void 0 === r || r.setActive(Kt.Tap, !0), null == n || n(t, e))
            }
            ge(a, "pointerdown", s ? h : void 0, c), Te(f)
          })),
          focus: Fe((function(t) {
            var e = t.whileFocus,
              n = t.visualElement;
            ne(n, "focus", e ? function() {
              var t;
              null === (t = n.animationState) || void 0 === t || t.setActive(Kt.Focus, !0)
            } : void 0), ne(n, "blur", e ? function() {
              var t;
              null === (t = n.animationState) || void 0 === t || t.setActive(Kt.Focus, !1)
            } : void 0)
          })),
          hover: Fe((function(t) {
            var e = t.onHoverStart,
              n = t.onHoverEnd,
              r = t.whileHover,
              o = t.visualElement;
            ge(o, "pointerenter", e || r ? Ee(o, !0, e) : void 0, {
              passive: !e
            }), ge(o, "pointerleave", n || r ? Ee(o, !1, n) : void 0, {
              passive: !n
            })
          }))
        },
        Ue = 0,
        Ne = function() {
          return Ue++
        },
        ze = function() {
          return k(Ne)
        };

      function Xe() {
        var t = (0, o.useContext)(g);
        if (null === t) return [!0, null];
        var e = t.isPresent,
          n = t.onExitComplete,
          r = t.register,
          i = ze();
        return (0, o.useEffect)((function() {
          return r(i)
        }), []), !e && n ? [!1, function() {
          return null == n ? void 0 : n(i)
        }] : [!0]
      }

      function We() {
        return null === (t = (0, o.useContext)(g)) || t.isPresent;
        var t
      }

      function He(t, e) {
        if (!Array.isArray(e)) return !1;
        var n = e.length;
        if (n !== t.length) return !1;
        for (var r = 0; r < n; r++)
          if (e[r] !== t[r]) return !1;
        return !0
      }
      const Ye = (t, e, n) => Math.min(Math.max(n, t), e),
        Ge = .001,
        _e = .01,
        qe = 10,
        $e = .05,
        Ze = 1;
      const Ke = 12;

      function Je(t, e) {
        return t * Math.sqrt(1 - e * e)
      }
      const Qe = ["duration", "bounce"],
        tn = ["stiffness", "damping", "mass"];

      function en(t, e) {
        return e.some((e => void 0 !== t[e]))
      }

      function nn(t) {
        var {
          from: e = 0,
          to: n = 1,
          restSpeed: o = 2,
          restDelta: i
        } = t, a = (0, r.sX)(t, ["from", "to", "restSpeed", "restDelta"]);
        const s = {
          done: !1,
          value: e
        };
        let {
          stiffness: u,
          damping: l,
          mass: f,
          velocity: d,
          duration: p,
          isResolvedFromDuration: v
        } = function(t) {
          let e = Object.assign({
            velocity: 0,
            stiffness: 100,
            damping: 10,
            mass: 1,
            isResolvedFromDuration: !1
          }, t);
          if (!en(t, tn) && en(t, Qe)) {
            const n = function({
              duration: t = 800,
              bounce: e = .25,
              velocity: n = 0,
              mass: r = 1
            }) {
              let o, i;
              (0, c.s)(t <= 1e3 * qe, "Spring duration must be 10 seconds or less");
              let a = 1 - e;
              a = Ye($e, Ze, a), t = Ye(_e, qe, t / 1e3), a < 1 ? (o = e => {
                const r = e * a,
                  o = r * t,
                  i = r - n,
                  s = Je(e, a),
                  u = Math.exp(-o);
                return Ge - i / s * u
              }, i = e => {
                const r = e * a * t,
                  i = r * n + n,
                  s = Math.pow(a, 2) * Math.pow(e, 2) * t,
                  u = Math.exp(-r),
                  l = Je(Math.pow(e, 2), a);
                return (-o(e) + Ge > 0 ? -1 : 1) * ((i - s) * u) / l
              }) : (o = e => Math.exp(-e * t) * ((e - n) * t + 1) - Ge, i = e => Math.exp(-e * t) * (t * t * (n - e)));
              const s = function(t, e, n) {
                let r = n;
                for (let n = 1; n < Ke; n++) r -= t(r) / e(r);
                return r
              }(o, i, 5 / t);
              if (t *= 1e3, isNaN(s)) return {
                stiffness: 100,
                damping: 10,
                duration: t
              }; {
                const e = Math.pow(s, 2) * r;
                return {
                  stiffness: e,
                  damping: 2 * a * Math.sqrt(r * e),
                  duration: t
                }
              }
            }(t);
            e = Object.assign(Object.assign(Object.assign({}, e), n), {
              velocity: 0,
              mass: 1
            }), e.isResolvedFromDuration = !0
          }
          return e
        }(a), h = rn, m = rn;

        function g() {
          const t = d ? -d / 1e3 : 0,
            r = n - e,
            o = l / (2 * Math.sqrt(u * f)),
            a = Math.sqrt(u / f) / 1e3;
          if (void 0 === i && (i = Math.min(Math.abs(n - e) / 100, .4)), o < 1) {
            const e = Je(a, o);
            h = i => {
              const s = Math.exp(-o * a * i);
              return n - s * ((t + o * a * r) / e * Math.sin(e * i) + r * Math.cos(e * i))
            }, m = n => {
              const i = Math.exp(-o * a * n);
              return o * a * i * (Math.sin(e * n) * (t + o * a * r) / e + r * Math.cos(e * n)) - i * (Math.cos(e * n) * (t + o * a * r) - e * r * Math.sin(e * n))
            }
          } else if (1 === o) h = e => n - Math.exp(-a * e) * (r + (t + a * r) * e);
          else {
            const e = a * Math.sqrt(o * o - 1);
            h = i => {
              const s = Math.exp(-o * a * i),
                u = Math.min(e * i, 300);
              return n - s * ((t + o * a * r) * Math.sinh(u) + e * r * Math.cosh(u)) / e
            }
          }
        }
        return g(), {
          next: t => {
            const e = h(t);
            if (v) s.done = t >= p;
            else {
              const r = 1e3 * m(t),
                a = Math.abs(r) <= o,
                u = Math.abs(n - e) <= i;
              s.done = a && u
            }
            return s.value = s.done ? n : e, s
          },
          flipTarget: () => {
            d = -d, [e, n] = [n, e], g()
          }
        }
      }
      nn.needsInterpolation = (t, e) => "string" == typeof t || "string" == typeof e;
      const rn = t => 0,
        on = (t, e, n) => {
          const r = e - t;
          return 0 === r ? 1 : (n - t) / r
        },
        an = (t, e, n) => -n * t + n * e + t,
        sn = (t, e) => n => Boolean(st(n) && at.test(n) && n.startsWith(t) || e && Object.prototype.hasOwnProperty.call(n, e)),
        un = (t, e, n) => r => {
          if (!st(r)) return r;
          const [o, i, a, s] = r.match(ot);
          return {
            [t]: parseFloat(o),
            [e]: parseFloat(i),
            [n]: parseFloat(a),
            alpha: void 0 !== s ? parseFloat(s) : 1
          }
        },
        ln = nt(0, 255),
        cn = Object.assign(Object.assign({}, ht), {
          transform: t => Math.round(ln(t))
        }),
        fn = {
          test: sn("rgb", "red"),
          parse: un("red", "green", "blue"),
          transform: ({
            red: t,
            green: e,
            blue: n,
            alpha: r = 1
          }) => "rgba(" + cn.transform(t) + ", " + cn.transform(e) + ", " + cn.transform(n) + ", " + rt(mt.transform(r)) + ")"
        },
        dn = {
          test: sn("#"),
          parse: function(t) {
            let e = "",
              n = "",
              r = "",
              o = "";
            return t.length > 5 ? (e = t.substr(1, 2), n = t.substr(3, 2), r = t.substr(5, 2), o = t.substr(7, 2)) : (e = t.substr(1, 1), n = t.substr(2, 1), r = t.substr(3, 1), o = t.substr(4, 1), e += e, n += n, r += r, o += o), {
              red: parseInt(e, 16),
              green: parseInt(n, 16),
              blue: parseInt(r, 16),
              alpha: o ? parseInt(o, 16) / 255 : 1
            }
          },
          transform: fn.transform
        },
        pn = {
          test: sn("hsl", "hue"),
          parse: un("hue", "saturation", "lightness"),
          transform: ({
            hue: t,
            saturation: e,
            lightness: n,
            alpha: r = 1
          }) => "hsla(" + Math.round(t) + ", " + ct.transform(rt(e)) + ", " + ct.transform(rt(n)) + ", " + rt(mt.transform(r)) + ")"
        };

      function vn(t, e, n) {
        return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + 6 * (e - t) * n : n < .5 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
      }

      function hn({
        hue: t,
        saturation: e,
        lightness: n,
        alpha: r
      }) {
        t /= 360, n /= 100;
        let o = 0,
          i = 0,
          a = 0;
        if (e /= 100) {
          const r = n < .5 ? n * (1 + e) : n + e - n * e,
            s = 2 * n - r;
          o = vn(s, r, t + 1 / 3), i = vn(s, r, t), a = vn(s, r, t - 1 / 3)
        } else o = i = a = n;
        return {
          red: Math.round(255 * o),
          green: Math.round(255 * i),
          blue: Math.round(255 * a),
          alpha: r
        }
      }
      const mn = (t, e, n) => {
          const r = t * t,
            o = e * e;
          return Math.sqrt(Math.max(0, n * (o - r) + r))
        },
        gn = [dn, fn, pn],
        yn = t => gn.find((e => e.test(t))),
        xn = t => `'${t}' is not an animatable color. Use the equivalent color code instead.`,
        bn = (t, e) => {
          let n = yn(t),
            r = yn(e);
          (0, c.O)(!!n, xn(t)), (0, c.O)(!!r, xn(e));
          let o = n.parse(t),
            i = r.parse(e);
          n === pn && (o = hn(o), n = fn), r === pn && (i = hn(i), r = fn);
          const a = Object.assign({}, o);
          return t => {
            for (const e in a) "alpha" !== e && (a[e] = mn(o[e], i[e], t));
            return a.alpha = an(o.alpha, i.alpha, t), n.transform(a)
          }
        },
        Cn = {
          test: t => fn.test(t) || dn.test(t) || pn.test(t),
          parse: t => fn.test(t) ? fn.parse(t) : pn.test(t) ? pn.parse(t) : dn.parse(t),
          transform: t => st(t) ? t : t.hasOwnProperty("red") ? fn.transform(t) : pn.transform(t)
        },
        wn = "${c}",
        En = "${n}";

      function Sn(t) {
        "number" == typeof t && (t = `${t}`);
        const e = [];
        let n = 0;
        const r = t.match(it);
        r && (n = r.length, t = t.replace(it, wn), e.push(...r.map(Cn.parse)));
        const o = t.match(ot);
        return o && (t = t.replace(ot, En), e.push(...o.map(ht.parse))), {
          values: e,
          numColors: n,
          tokenised: t
        }
      }

      function Tn(t) {
        return Sn(t).values
      }

      function An(t) {
        const {
          values: e,
          numColors: n,
          tokenised: r
        } = Sn(t), o = e.length;
        return t => {
          let e = r;
          for (let r = 0; r < o; r++) e = e.replace(r < n ? wn : En, r < n ? Cn.transform(t[r]) : rt(t[r]));
          return e
        }
      }
      const Pn = t => "number" == typeof t ? 0 : t,
        Vn = {
          test: function(t) {
            var e, n, r, o;
            return isNaN(t) && st(t) && (null !== (n = null === (e = t.match(ot)) || void 0 === e ? void 0 : e.length) && void 0 !== n ? n : 0) + (null !== (o = null === (r = t.match(it)) || void 0 === r ? void 0 : r.length) && void 0 !== o ? o : 0) > 0
          },
          parse: Tn,
          createTransformer: An,
          getAnimatableNone: function(t) {
            const e = Tn(t);
            return An(t)(e.map(Pn))
          }
        },
        Mn = t => "number" == typeof t;

      function Rn(t, e) {
        return Mn(t) ? n => an(t, e, n) : Cn.test(t) ? bn(t, e) : On(t, e)
      }
      const Ln = (t, e) => {
          const n = [...t],
            r = n.length,
            o = t.map(((t, n) => Rn(t, e[n])));
          return t => {
            for (let e = 0; e < r; e++) n[e] = o[e](t);
            return n
          }
        },
        kn = (t, e) => {
          const n = Object.assign(Object.assign({}, t), e),
            r = {};
          for (const o in n) void 0 !== t[o] && void 0 !== e[o] && (r[o] = Rn(t[o], e[o]));
          return t => {
            for (const e in r) n[e] = r[e](t);
            return n
          }
        };

      function Dn(t) {
        const e = Vn.parse(t),
          n = e.length;
        let r = 0,
          o = 0,
          i = 0;
        for (let t = 0; t < n; t++) r || "number" == typeof e[t] ? r++ : void 0 !== e[t].hue ? i++ : o++;
        return {
          parsed: e,
          numNumbers: r,
          numRGB: o,
          numHSL: i
        }
      }
      const On = (t, e) => {
          const n = Vn.createTransformer(e),
            r = Dn(t),
            o = Dn(e);
          return r.numHSL === o.numHSL && r.numRGB === o.numRGB && r.numNumbers >= o.numNumbers ? Pe(Ln(r.parsed, o.parsed), n) : ((0, c.s)(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), n => `${n>0?e:t}`)
        },
        In = (t, e) => n => an(t, e, n);

      function jn(t, e, {
        clamp: n = !0,
        ease: r,
        mixer: o
      } = {}) {
        const i = t.length;
        (0, c.O)(i === e.length, "Both input and output ranges must be the same length"), (0, c.O)(!r || !Array.isArray(r) || r.length === i - 1, "Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."), t[0] > t[i - 1] && (t = [].concat(t), e = [].concat(e), t.reverse(), e.reverse());
        const a = function(t, e, n) {
            const r = [],
              o = n || ("number" == typeof(i = t[0]) ? In : "string" == typeof i ? Cn.test(i) ? bn : On : Array.isArray(i) ? Ln : "object" == typeof i ? kn : void 0);
            var i;
            const a = t.length - 1;
            for (let n = 0; n < a; n++) {
              let i = o(t[n], t[n + 1]);
              if (e) {
                const t = Array.isArray(e) ? e[n] : e;
                i = Pe(t, i)
              }
              r.push(i)
            }
            return r
          }(e, r, o),
          s = 2 === i ? function([t, e], [n]) {
            return r => n(on(t, e, r))
          }(t, a) : function(t, e) {
            const n = t.length,
              r = n - 1;
            return o => {
              let i = 0,
                a = !1;
              if (o <= t[0] ? a = !0 : o >= t[r] && (i = r - 1, a = !0), !a) {
                let e = 1;
                for (; e < n && !(t[e] > o || e === r); e++);
                i = e - 1
              }
              const s = on(t[i], t[i + 1], o);
              return e[i](s)
            }
          }(t, a);
        return n ? e => s(Ye(t[0], t[i - 1], e)) : s
      }
      const Fn = t => e => 1 - t(1 - e),
        Bn = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
        Un = t => e => e * e * ((t + 1) * e - t),
        Nn = t => t,
        zn = (2, t => Math.pow(t, 2));
      const Xn = Fn(zn),
        Wn = Bn(zn),
        Hn = t => 1 - Math.sin(Math.acos(t)),
        Yn = Fn(Hn),
        Gn = Bn(Yn),
        _n = Un(1.525),
        qn = Fn(_n),
        $n = Bn(_n),
        Zn = (t => {
          const e = Un(1.525);
          return t => (t *= 2) < 1 ? .5 * e(t) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
        })(),
        Kn = t => {
          if (1 === t || 0 === t) return t;
          const e = t * t;
          return t < .36363636363636365 ? 7.5625 * e : t < .7272727272727273 ? 9.075 * e - 9.9 * t + 3.4 : t < .9 ? 12.066481994459833 * e - 19.63545706371191 * t + 8.898060941828255 : 10.8 * t * t - 20.52 * t + 10.72
        },
        Jn = Fn(Kn);

      function Qn(t, e) {
        return t.map((() => e || Wn)).splice(0, t.length - 1)
      }

      function tr({
        from: t = 0,
        to: e = 1,
        ease: n,
        offset: r,
        duration: o = 300
      }) {
        const i = {
            done: !1,
            value: t
          },
          a = Array.isArray(e) ? e : [t, e],
          s = function(t, e) {
            return t.map((t => t * e))
          }(r && r.length === a.length ? r : function(t) {
            const e = t.length;
            return t.map(((t, n) => 0 !== n ? n / (e - 1) : 0))
          }(a), o);

        function u() {
          return jn(s, a, {
            ease: Array.isArray(n) ? n : Qn(a, n)
          })
        }
        let l = u();
        return {
          next: t => (i.value = l(t), i.done = t >= o, i),
          flipTarget: () => {
            a.reverse(), l = u()
          }
        }
      }
      const er = {
          keyframes: tr,
          spring: nn,
          decay: function({
            velocity: t = 0,
            from: e = 0,
            power: n = .8,
            timeConstant: r = 350,
            restDelta: o = .5,
            modifyTarget: i
          }) {
            const a = {
              done: !1,
              value: e
            };
            let s = n * t;
            const u = e + s,
              l = void 0 === i ? u : i(u);
            return l !== u && (s = l - e), {
              next: t => {
                const e = -s * Math.exp(-t / r);
                return a.done = !(e > o || e < -o), a.value = a.done ? l : l + e, a
              },
              flipTarget: () => {}
            }
          }
        },
        nr = 1 / 60 * 1e3,
        rr = "undefined" != typeof performance ? () => performance.now() : () => Date.now(),
        or = "undefined" != typeof window ? t => window.requestAnimationFrame(t) : t => setTimeout((() => t(rr())), nr);
      let ir = !0,
        ar = !1,
        sr = !1;
      const ur = {
          delta: 0,
          timestamp: 0
        },
        lr = ["read", "update", "preRender", "render", "postRender"],
        cr = lr.reduce(((t, e) => (t[e] = function(t) {
          let e = [],
            n = [],
            r = 0,
            o = !1,
            i = !1;
          const a = new WeakSet,
            s = {
              schedule: (t, i = !1, s = !1) => {
                const u = s && o,
                  l = u ? e : n;
                return i && a.add(t), -1 === l.indexOf(t) && (l.push(t), u && o && (r = e.length)), t
              },
              cancel: t => {
                const e = n.indexOf(t); - 1 !== e && n.splice(e, 1), a.delete(t)
              },
              process: u => {
                if (o) i = !0;
                else {
                  if (o = !0, [e, n] = [n, e], n.length = 0, r = e.length, r)
                    for (let n = 0; n < r; n++) {
                      const r = e[n];
                      r(u), a.has(r) && (s.schedule(r), t())
                    }
                  o = !1, i && (i = !1, s.process(u))
                }
              }
            };
          return s
        }((() => ar = !0)), t)), {}),
        fr = lr.reduce(((t, e) => {
          const n = cr[e];
          return t[e] = (t, e = !1, r = !1) => (ar || mr(), n.schedule(t, e, r)), t
        }), {}),
        dr = lr.reduce(((t, e) => (t[e] = cr[e].cancel, t)), {}),
        pr = lr.reduce(((t, e) => (t[e] = () => cr[e].process(ur), t)), {}),
        vr = t => cr[t].process(ur),
        hr = t => {
          ar = !1, ur.delta = ir ? nr : Math.max(Math.min(t - ur.timestamp, 40), 1), ur.timestamp = t, sr = !0, lr.forEach(vr), sr = !1, ar && (ir = !1, or(hr))
        },
        mr = () => {
          ar = !0, ir = !0, sr || or(hr)
        },
        gr = () => ur,
        yr = fr;

      function xr(t, e, n = 0) {
        return t - e - n
      }
      const br = t => {
        const e = ({
          delta: e
        }) => t(e);
        return {
          start: () => yr.update(e, !0),
          stop: () => dr.update(e)
        }
      };

      function Cr(t) {
        var e, n, {
            from: o,
            autoplay: i = !0,
            driver: a = br,
            elapsed: s = 0,
            repeat: u = 0,
            repeatType: l = "loop",
            repeatDelay: c = 0,
            onPlay: f,
            onStop: d,
            onComplete: p,
            onRepeat: v,
            onUpdate: h
          } = t,
          m = (0, r.sX)(t, ["from", "autoplay", "driver", "elapsed", "repeat", "repeatType", "repeatDelay", "onPlay", "onStop", "onComplete", "onRepeat", "onUpdate"]);
        let g, y, x, {
            to: b
          } = m,
          C = 0,
          w = m.duration,
          E = !1,
          S = !0;
        const T = function(t) {
          if (Array.isArray(t.to)) return tr;
          if (er[t.type]) return er[t.type];
          const e = new Set(Object.keys(t));
          return e.has("ease") || e.has("duration") && !e.has("dampingRatio") ? tr : e.has("dampingRatio") || e.has("stiffness") || e.has("mass") || e.has("damping") || e.has("restSpeed") || e.has("restDelta") ? nn : tr
        }(m);
        (null === (n = (e = T).needsInterpolation) || void 0 === n ? void 0 : n.call(e, o, b)) && (x = jn([0, 100], [o, b], {
          clamp: !1
        }), o = 0, b = 100);
        const A = T(Object.assign(Object.assign({}, m), {
          from: o,
          to: b
        }));
        return i && (null == f || f(), g = a((function(t) {
          if (S || (t = -t), s += t, !E) {
            const t = A.next(Math.max(0, s));
            y = t.value, x && (y = x(y)), E = S ? t.done : s <= 0
          }
          null == h || h(y), E && (0 === C && (null != w || (w = s)), C < u ? function(t, e, n, r) {
            return r ? t >= e + n : t <= -n
          }(s, w, c, S) && (C++, "reverse" === l ? (S = C % 2 == 0, s = function(t, e, n = 0, r = !0) {
            return r ? xr(e + -t, e, n) : e - (t - e) + n
          }(s, w, c, S)) : (s = xr(s, w, c), "mirror" === l && A.flipTarget()), E = !1, v && v()) : (g.stop(), p && p()))
        })), g.start()), {
          stop: () => {
            null == d || d(), g.stop()
          }
        }
      }

      function wr(t, e) {
        return e ? t * (1e3 / e) : 0
      }
      var Er = function(t) {
        return 1e3 * t
      };
      const Sr = (t, e) => 1 - 3 * e + 3 * t,
        Tr = (t, e) => 3 * e - 6 * t,
        Ar = t => 3 * t,
        Pr = (t, e, n) => ((Sr(e, n) * t + Tr(e, n)) * t + Ar(e)) * t,
        Vr = (t, e, n) => 3 * Sr(e, n) * t * t + 2 * Tr(e, n) * t + Ar(e),
        Mr = .1;

      function Rr(t, e, n, r) {
        if (t === e && n === r) return Nn;
        const o = new Float32Array(11);
        for (let e = 0; e < 11; ++e) o[e] = Pr(e * Mr, t, n);
        return i => 0 === i || 1 === i ? i : Pr(function(e) {
          let r = 0,
            i = 1;
          for (; 10 !== i && o[i] <= e; ++i) r += Mr;
          --i;
          const a = r + (e - o[i]) / (o[i + 1] - o[i]) * Mr,
            s = Vr(a, t, n);
          return s >= .001 ? function(t, e, n, r) {
            for (let o = 0; o < 8; ++o) {
              const o = Vr(e, n, r);
              if (0 === o) return e;
              e -= (Pr(e, n, r) - t) / o
            }
            return e
          }(e, a, t, n) : 0 === s ? a : function(t, e, n, r, o) {
            let i, a, s = 0;
            do {
              a = e + (n - e) / 2, i = Pr(a, r, o) - t, i > 0 ? n = a : e = a
            } while (Math.abs(i) > 1e-7 && ++s < 10);
            return a
          }(e, r, r + Mr, t, n)
        }(i), e, r)
      }
      var Lr = {
          linear: Nn,
          easeIn: zn,
          easeInOut: Wn,
          easeOut: Xn,
          circIn: Hn,
          circInOut: Gn,
          circOut: Yn,
          backIn: _n,
          backInOut: $n,
          backOut: qn,
          anticipate: Zn,
          bounceIn: Jn,
          bounceInOut: t => t < .5 ? .5 * (1 - Kn(1 - 2 * t)) : .5 * Kn(2 * t - 1) + .5,
          bounceOut: Kn
        },
        kr = function(t) {
          if (Array.isArray(t)) {
            (0, c.O)(4 === t.length, "Cubic bezier arrays must contain four numerical values.");
            var e = (0, r.o5)(t, 4);
            return Rr(e[0], e[1], e[2], e[3])
          }
          return "string" == typeof t ? ((0, c.O)(void 0 !== Lr[t], "Invalid easing type '".concat(t, "'")), Lr[t]) : t
        },
        Dr = function(t) {
          return Array.isArray(t) && "number" != typeof t[0]
        },
        Or = function(t, e) {
          return !("zIndex" === t || "number" != typeof e && !Array.isArray(e) && ("string" != typeof e || !Vn.test(e) || e.startsWith("url(")))
        },
        Ir = function() {
          return {
            type: "spring",
            stiffness: 500,
            damping: 25,
            restSpeed: 10
          }
        },
        jr = function(t) {
          return {
            type: "spring",
            stiffness: 550,
            damping: 0 === t ? 2 * Math.sqrt(550) : 30,
            restSpeed: 10
          }
        },
        Fr = function() {
          return {
            type: "keyframes",
            ease: "linear",
            duration: .3
          }
        },
        Br = function(t) {
          return {
            type: "keyframes",
            duration: .8,
            values: t
          }
        },
        Ur = {
          x: Ir,
          y: Ir,
          z: Ir,
          rotate: Ir,
          rotateX: Ir,
          rotateY: Ir,
          rotateZ: Ir,
          scaleX: jr,
          scaleY: jr,
          scale: jr,
          opacity: Fr,
          backgroundColor: Fr,
          color: Fr,
          default: jr
        },
        Nr = function(t, e) {
          var n;
          return n = Ht(e) ? Br : Ur[t] || Ur.default, (0, r.C3)({
            to: e
          }, n(e))
        };
      const zr = new Set(["brightness", "contrast", "saturate", "opacity"]);

      function Xr(t) {
        let [e, n] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        const [r] = n.match(ot) || [];
        if (!r) return t;
        const o = n.replace(r, "");
        let i = zr.has(e) ? 1 : 0;
        return r !== n && (i *= 100), e + "(" + i + o + ")"
      }
      const Wr = /([a-z-]*)\(.*?\)/g,
        Hr = Object.assign(Object.assign({}, Vn), {
          getAnimatableNone: t => {
            const e = t.match(Wr);
            return e ? e.map(Xr).join(" ") : t
          }
        });
      var Yr = (0, r.C3)((0, r.C3)({}, xt), {
          color: Cn,
          backgroundColor: Cn,
          outlineColor: Cn,
          fill: Cn,
          stroke: Cn,
          borderColor: Cn,
          borderTopColor: Cn,
          borderRightColor: Cn,
          borderBottomColor: Cn,
          borderLeftColor: Cn,
          filter: Hr,
          WebkitFilter: Hr
        }),
        Gr = function(t) {
          return Yr[t]
        };

      function _r(t, e) {
        var n, r = Gr(t);
        return r !== Hr && (r = Vn), null === (n = r.getAnimatableNone) || void 0 === n ? void 0 : n.call(r, e)
      }
      var qr = {
          current: !1
        },
        $r = !1;

      function Zr(t, e, n, o, i) {
        var a, s = Qr(o, t),
          u = null !== (a = s.from) && void 0 !== a ? a : e.get(),
          l = Or(t, n);
        "none" === u && l && "string" == typeof n ? u = _r(t, n) : Kr(u) && "string" == typeof n ? u = Jr(n) : !Array.isArray(n) && Kr(n) && "string" == typeof u && (n = Jr(u));
        var f = Or(t, u);
        return (0, c.s)(f === l, "You are trying to animate ".concat(t, ' from "').concat(u, '" to "').concat(n, '". ').concat(u, " is not an animatable value - to enable this animation set ").concat(u, " to a value animatable to ").concat(n, " via the `style` property.")), f && l && !1 !== s.type ? function() {
          var o = {
            from: u,
            to: n,
            velocity: e.getVelocity(),
            onComplete: i,
            onUpdate: function(t) {
              return e.set(t)
            }
          };
          return "inertia" === s.type || "decay" === s.type ? function({
            from: t = 0,
            velocity: e = 0,
            min: n,
            max: r,
            power: o = .8,
            timeConstant: i = 750,
            bounceStiffness: a = 500,
            bounceDamping: s = 10,
            restDelta: u = 1,
            modifyTarget: l,
            driver: c,
            onUpdate: f,
            onComplete: d,
            onStop: p
          }) {
            let v;

            function h(t) {
              return void 0 !== n && t < n || void 0 !== r && t > r
            }

            function m(t) {
              return void 0 === n ? r : void 0 === r || Math.abs(n - t) < Math.abs(r - t) ? n : r
            }

            function g(t) {
              null == v || v.stop(), v = Cr(Object.assign(Object.assign({}, t), {
                driver: c,
                onUpdate: e => {
                  var n;
                  null == f || f(e), null === (n = t.onUpdate) || void 0 === n || n.call(t, e)
                },
                onComplete: d,
                onStop: p
              }))
            }

            function y(t) {
              g(Object.assign({
                type: "spring",
                stiffness: a,
                damping: s,
                restDelta: u
              }, t))
            }
            if (h(t)) y({
              from: t,
              velocity: e,
              to: m(t)
            });
            else {
              let r = o * e + t;
              void 0 !== l && (r = l(r));
              const a = m(r),
                s = a === n ? -1 : 1;
              let c, f;
              const d = t => {
                c = f, f = t, e = wr(t - c, gr().delta), (1 === s && t > a || -1 === s && t < a) && y({
                  from: t,
                  to: a,
                  velocity: e
                })
              };
              g({
                type: "decay",
                from: t,
                velocity: e,
                timeConstant: i,
                power: o,
                restDelta: u,
                modifyTarget: l,
                onUpdate: h(r) ? d : void 0
              })
            }
            return {
              stop: () => null == v ? void 0 : v.stop()
            }
          }((0, r.C3)((0, r.C3)({}, o), s)) : Cr((0, r.C3)((0, r.C3)({}, function(t, e, n) {
            var o;
            return Array.isArray(e.to) && (null !== (o = t.duration) && void 0 !== o || (t.duration = .8)),
              function(t) {
                Array.isArray(t.to) && null === t.to[0] && (t.to = (0, r.Mt)([], (0, r.o5)(t.to), !1), t.to[0] = t.from)
              }(e),
              function(t) {
                t.when, t.delay, t.delayChildren, t.staggerChildren, t.staggerDirection, t.repeat, t.repeatType, t.repeatDelay, t.from;
                var e = (0, r.sX)(t, ["when", "delay", "delayChildren", "staggerChildren", "staggerDirection", "repeat", "repeatType", "repeatDelay", "from"]);
                return !!Object.keys(e).length
              }(t) || (t = (0, r.C3)((0, r.C3)({}, t), Nr(n, e.to))), (0, r.C3)((0, r.C3)({}, e), function(t) {
                var e = t.ease,
                  n = t.times,
                  o = t.yoyo,
                  i = t.flip,
                  a = t.loop,
                  s = (0, r.sX)(t, ["ease", "times", "yoyo", "flip", "loop"]),
                  u = (0, r.C3)({}, s);
                return n && (u.offset = n), s.duration && (u.duration = Er(s.duration)), s.repeatDelay && (u.repeatDelay = Er(s.repeatDelay)), e && (u.ease = Dr(e) ? e.map(kr) : kr(e)), "tween" === s.type && (u.type = "keyframes"), (o || a || i) && ((0, c.s)(!$r, "yoyo, loop and flip have been removed from the API. Replace with repeat and repeatType options."), $r = !0, o ? u.repeatType = "reverse" : a ? u.repeatType = "loop" : i && (u.repeatType = "mirror"), u.repeat = a || o || i || s.repeat), "spring" !== s.type && (u.type = "keyframes"), u
              }(t))
          }(s, o, t)), {
            onUpdate: function(t) {
              var e;
              o.onUpdate(t), null === (e = s.onUpdate) || void 0 === e || e.call(s, t)
            },
            onComplete: function() {
              var t;
              o.onComplete(), null === (t = s.onComplete) || void 0 === t || t.call(s)
            }
          }))
        } : function() {
          var t, r, o = Gt(n);
          return e.set(o), i(), null === (t = null == s ? void 0 : s.onUpdate) || void 0 === t || t.call(s, o), null === (r = null == s ? void 0 : s.onComplete) || void 0 === r || r.call(s), {
            stop: function() {}
          }
        }
      }

      function Kr(t) {
        return 0 === t || "string" == typeof t && 0 === parseFloat(t) && -1 === t.indexOf(" ")
      }

      function Jr(t) {
        return "number" == typeof t ? 0 : _r("", t)
      }

      function Qr(t, e) {
        return t[e] || t.default || t
      }

      function to(t, e, n, r) {
        return void 0 === r && (r = {}), qr.current && (r = {
          type: !1
        }), e.start((function(o) {
          var i, a, s = Zr(t, e, n, r, o),
            u = function(t, e) {
              var n, r;
              return null !== (r = null !== (n = (Qr(t, e) || {}).delay) && void 0 !== n ? n : t.delay) && void 0 !== r ? r : 0
            }(r, t),
            l = function() {
              return a = s()
            };
          return u ? i = window.setTimeout(l, Er(u)) : l(),
            function() {
              clearTimeout(i), null == a || a.stop()
            }
        }))
      }
      var eo = function(t) {
          return /^\-?\d*\.?\d+$/.test(t)
        },
        no = function(t) {
          return /^0[^.\s]+$/.test(t)
        };

      function ro(t, e) {
        -1 === t.indexOf(e) && t.push(e)
      }

      function oo(t, e) {
        var n = t.indexOf(e);
        n > -1 && t.splice(n, 1)
      }
      var io = function() {
          function t() {
            this.subscriptions = []
          }
          return t.prototype.add = function(t) {
            var e = this;
            return ro(this.subscriptions, t),
              function() {
                return oo(e.subscriptions, t)
              }
          }, t.prototype.notify = function(t, e, n) {
            var r = this.subscriptions.length;
            if (r)
              if (1 === r) this.subscriptions[0](t, e, n);
              else
                for (var o = 0; o < r; o++) {
                  var i = this.subscriptions[o];
                  i && i(t, e, n)
                }
          }, t.prototype.getSize = function() {
            return this.subscriptions.length
          }, t.prototype.clear = function() {
            this.subscriptions.length = 0
          }, t
        }(),
        ao = function() {
          function t(t) {
            var e, n = this;
            this.version = "6.5.1", this.timeDelta = 0, this.lastUpdated = 0, this.updateSubscribers = new io, this.velocityUpdateSubscribers = new io, this.renderSubscribers = new io, this.canTrackVelocity = !1, this.updateAndNotify = function(t, e) {
              void 0 === e && (e = !0), n.prev = n.current, n.current = t;
              var r = gr(),
                o = r.delta,
                i = r.timestamp;
              n.lastUpdated !== i && (n.timeDelta = o, n.lastUpdated = i, yr.postRender(n.scheduleVelocityCheck)), n.prev !== n.current && n.updateSubscribers.notify(n.current), n.velocityUpdateSubscribers.getSize() && n.velocityUpdateSubscribers.notify(n.getVelocity()), e && n.renderSubscribers.notify(n.current)
            }, this.scheduleVelocityCheck = function() {
              return yr.postRender(n.velocityCheck)
            }, this.velocityCheck = function(t) {
              t.timestamp !== n.lastUpdated && (n.prev = n.current, n.velocityUpdateSubscribers.notify(n.getVelocity()))
            }, this.hasAnimated = !1, this.prev = this.current = t, this.canTrackVelocity = (e = this.current, !isNaN(parseFloat(e)))
          }
          return t.prototype.onChange = function(t) {
            return this.updateSubscribers.add(t)
          }, t.prototype.clearListeners = function() {
            this.updateSubscribers.clear()
          }, t.prototype.onRenderRequest = function(t) {
            return t(this.get()), this.renderSubscribers.add(t)
          }, t.prototype.attach = function(t) {
            this.passiveEffect = t
          }, t.prototype.set = function(t, e) {
            void 0 === e && (e = !0), e && this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t, e)
          }, t.prototype.get = function() {
            return this.current
          }, t.prototype.getPrevious = function() {
            return this.prev
          }, t.prototype.getVelocity = function() {
            return this.canTrackVelocity ? wr(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0
          }, t.prototype.start = function(t) {
            var e = this;
            return this.stop(), new Promise((function(n) {
              e.hasAnimated = !0, e.stopAnimation = t(n)
            })).then((function() {
              return e.clearAnimation()
            }))
          }, t.prototype.stop = function() {
            this.stopAnimation && this.stopAnimation(), this.clearAnimation()
          }, t.prototype.isAnimating = function() {
            return !!this.stopAnimation
          }, t.prototype.clearAnimation = function() {
            this.stopAnimation = null
          }, t.prototype.destroy = function() {
            this.updateSubscribers.clear(), this.renderSubscribers.clear(), this.stop()
          }, t
        }();

      function so(t) {
        return new ao(t)
      }
      var uo = function(t) {
          return function(e) {
            return e.test(t)
          }
        },
        lo = [ht, ft, ct, lt, pt, dt, {
          test: function(t) {
            return "auto" === t
          },
          parse: function(t) {
            return t
          }
        }],
        co = function(t) {
          return lo.find(uo(t))
        },
        fo = (0, r.Mt)((0, r.Mt)([], (0, r.o5)(lo), !1), [Cn, Vn], !1),
        po = function(t) {
          return fo.find(uo(t))
        };

      function vo(t, e, n) {
        t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, so(n))
      }

      function ho(t, e) {
        var n = V(t, e),
          o = n ? t.makeTargetAnimatable(n, !1) : {},
          i = o.transitionEnd,
          a = void 0 === i ? {} : i;
        o.transition;
        var s = (0, r.sX)(o, ["transitionEnd", "transition"]);
        for (var u in s = (0, r.C3)((0, r.C3)({}, s), a)) vo(t, u, Gt(s[u]))
      }

      function mo(t, e) {
        (0, r.Mt)([], (0, r.o5)(e), !1).reverse().forEach((function(n) {
          var r, o = t.getVariant(n);
          o && ho(t, o), null === (r = t.variantChildren) || void 0 === r || r.forEach((function(t) {
            mo(t, e)
          }))
        }))
      }

      function go(t, e, n) {
        var r, o, i, a, s = Object.keys(e).filter((function(e) {
            return !t.hasValue(e)
          })),
          u = s.length;
        if (u)
          for (var l = 0; l < u; l++) {
            var c = s[l],
              f = e[c],
              d = null;
            Array.isArray(f) && (d = f[0]), null === d && (d = null !== (o = null !== (r = n[c]) && void 0 !== r ? r : t.readValue(c)) && void 0 !== o ? o : e[c]), null != d && ("string" == typeof d && (eo(d) || no(d)) ? d = parseFloat(d) : !po(d) && Vn.test(f) && (d = _r(c, f)), t.addValue(c, so(d)), null !== (i = (a = n)[c]) && void 0 !== i || (a[c] = d), t.setBaseTarget(c, d))
          }
      }

      function yo(t, e) {
        if (e) return (e[t] || e.default || e).from
      }

      function xo(t, e, n) {
        var r, o, i = {};
        for (var a in t) i[a] = null !== (r = yo(a, e)) && void 0 !== r ? r : null === (o = n.getValue(a)) || void 0 === o ? void 0 : o.get();
        return i
      }

      function bo(t, e, n) {
        var r;
        if (void 0 === n && (n = {}), t.notifyAnimationStart(e), Array.isArray(e)) {
          var o = e.map((function(e) {
            return Co(t, e, n)
          }));
          r = Promise.all(o)
        } else if ("string" == typeof e) r = Co(t, e, n);
        else {
          var i = "function" == typeof e ? V(t, e, n.custom) : e;
          r = wo(t, i, n)
        }
        return r.then((function() {
          return t.notifyAnimationComplete(e)
        }))
      }

      function Co(t, e, n) {
        var o;
        void 0 === n && (n = {});
        var i = V(t, e, n.custom),
          a = (i || {}).transition,
          s = void 0 === a ? t.getDefaultTransition() || {} : a;
        n.transitionOverride && (s = n.transitionOverride);
        var u = i ? function() {
            return wo(t, i, n)
          } : function() {
            return Promise.resolve()
          },
          l = (null === (o = t.variantChildren) || void 0 === o ? void 0 : o.size) ? function(o) {
            void 0 === o && (o = 0);
            var i = s.delayChildren,
              a = void 0 === i ? 0 : i,
              u = s.staggerChildren,
              l = s.staggerDirection;
            return function(t, e, n, o, i, a) {
              void 0 === n && (n = 0), void 0 === o && (o = 0), void 0 === i && (i = 1);
              var s = [],
                u = (t.variantChildren.size - 1) * o,
                l = 1 === i ? function(t) {
                  return void 0 === t && (t = 0), t * o
                } : function(t) {
                  return void 0 === t && (t = 0), u - t * o
                };
              return Array.from(t.variantChildren).sort(Eo).forEach((function(t, o) {
                s.push(Co(t, e, (0, r.C3)((0, r.C3)({}, a), {
                  delay: n + l(o)
                })).then((function() {
                  return t.notifyAnimationComplete(e)
                })))
              })), Promise.all(s)
            }(t, e, a + o, u, l, n)
          } : function() {
            return Promise.resolve()
          },
          c = s.when;
        if (c) {
          var f = (0, r.o5)("beforeChildren" === c ? [u, l] : [l, u], 2),
            d = f[0],
            p = f[1];
          return d().then(p)
        }
        return Promise.all([u(), l(n.delay)])
      }

      function wo(t, e, n) {
        var o, i = void 0 === n ? {} : n,
          a = i.delay,
          s = void 0 === a ? 0 : a,
          u = i.transitionOverride,
          l = i.type,
          c = t.makeTargetAnimatable(e),
          f = c.transition,
          d = void 0 === f ? t.getDefaultTransition() : f,
          p = c.transitionEnd,
          v = (0, r.sX)(c, ["transition", "transitionEnd"]);
        u && (d = u);
        var h = [],
          m = l && (null === (o = t.animationState) || void 0 === o ? void 0 : o.getState()[l]);
        for (var g in v) {
          var y = t.getValue(g),
            x = v[g];
          if (!(!y || void 0 === x || m && So(m, g))) {
            var b = (0, r.C3)({
              delay: s
            }, d);
            t.shouldReduceMotion && q(g) && (b = (0, r.C3)((0, r.C3)({}, b), {
              type: !1,
              delay: 0
            }));
            var C = to(g, y, x, b);
            h.push(C)
          }
        }
        return Promise.all(h).then((function() {
          p && ho(t, p)
        }))
      }

      function Eo(t, e) {
        return t.sortNodePosition(e)
      }

      function So(t, e) {
        var n = t.protectedKeys,
          r = t.needsAnimating,
          o = n.hasOwnProperty(e) && !0 !== r[e];
        return r[e] = !1, o
      }
      var To = [Kt.Animate, Kt.InView, Kt.Focus, Kt.Hover, Kt.Tap, Kt.Drag, Kt.Exit],
        Ao = (0, r.Mt)([], (0, r.o5)(To), !1).reverse(),
        Po = To.length;

      function Vo(t) {
        return void 0 === t && (t = !1), {
          isActive: t,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {}
        }
      }
      var Mo = {
        animation: Fe((function(t) {
          var e = t.visualElement,
            n = t.animate;
          e.animationState || (e.animationState = function(t) {
            var e, n = function(t) {
                return function(e) {
                  return Promise.all(e.map((function(e) {
                    var n = e.animation,
                      r = e.options;
                    return bo(t, n, r)
                  })))
                }
              }(t),
              o = ((e = {})[Kt.Animate] = Vo(!0), e[Kt.InView] = Vo(), e[Kt.Hover] = Vo(), e[Kt.Tap] = Vo(), e[Kt.Drag] = Vo(), e[Kt.Focus] = Vo(), e[Kt.Exit] = Vo(), e),
              i = {},
              a = !0,
              s = function(e, n) {
                var o = V(t, n);
                if (o) {
                  o.transition;
                  var i = o.transitionEnd,
                    a = (0, r.sX)(o, ["transition", "transitionEnd"]);
                  e = (0, r.C3)((0, r.C3)((0, r.C3)({}, e), a), i)
                }
                return e
              };

            function u(e, u) {
              for (var l, c = t.getProps(), f = t.getVariantContext(!0) || {}, d = [], p = new Set, v = {}, h = 1 / 0, m = function(n) {
                  var i = Ao[n],
                    m = o[i],
                    g = null !== (l = c[i]) && void 0 !== l ? l : f[i],
                    y = A(g),
                    x = i === u ? m.isActive : null;
                  !1 === x && (h = n);
                  var b = g === f[i] && g !== c[i] && y;
                  if (b && a && t.manuallyAnimateOnMount && (b = !1), m.protectedKeys = (0, r.C3)({}, v), !m.isActive && null === x || !g && !m.prevProp || Wt(g) || "boolean" == typeof g) return "continue";
                  var C = function(t, e) {
                      return "string" == typeof e ? e !== t : !!T(e) && !He(e, t)
                    }(m.prevProp, g),
                    w = C || i === u && m.isActive && !b && y || n > h && y,
                    E = Array.isArray(g) ? g : [g],
                    S = E.reduce(s, {});
                  !1 === x && (S = {});
                  var P = m.prevResolvedValues,
                    V = void 0 === P ? {} : P,
                    M = (0, r.C3)((0, r.C3)({}, V), S),
                    R = function(t) {
                      w = !0, p.delete(t), m.needsAnimating[t] = !0
                    };
                  for (var L in M) {
                    var k = S[L],
                      D = V[L];
                    v.hasOwnProperty(L) || (k !== D ? Ht(k) && Ht(D) ? !He(k, D) || C ? R(L) : m.protectedKeys[L] = !0 : void 0 !== k ? R(L) : p.add(L) : void 0 !== k && p.has(L) ? R(L) : m.protectedKeys[L] = !0)
                  }
                  m.prevProp = g, m.prevResolvedValues = S, m.isActive && (v = (0, r.C3)((0, r.C3)({}, v), S)), a && t.blockInitialAnimation && (w = !1), w && !b && d.push.apply(d, (0, r.Mt)([], (0, r.o5)(E.map((function(t) {
                    return {
                      animation: t,
                      options: (0, r.C3)({
                        type: i
                      }, e)
                    }
                  }))), !1))
                }, g = 0; g < Po; g++) m(g);
              if (i = (0, r.C3)({}, v), p.size) {
                var y = {};
                p.forEach((function(e) {
                  var n = t.getBaseTarget(e);
                  void 0 !== n && (y[e] = n)
                })), d.push({
                  animation: y
                })
              }
              var x = Boolean(d.length);
              return a && !1 === c.initial && !t.manuallyAnimateOnMount && (x = !1), a = !1, x ? n(d) : Promise.resolve()
            }
            return {
              isAnimated: function(t) {
                return void 0 !== i[t]
              },
              animateChanges: u,
              setActive: function(e, n, r) {
                var i;
                if (o[e].isActive === n) return Promise.resolve();
                null === (i = t.variantChildren) || void 0 === i || i.forEach((function(t) {
                  var r;
                  return null === (r = t.animationState) || void 0 === r ? void 0 : r.setActive(e, n)
                })), o[e].isActive = n;
                var a = u(r, e);
                for (var s in o) o[s].protectedKeys = {};
                return a
              },
              setAnimateFunction: function(e) {
                n = e(t)
              },
              getState: function() {
                return o
              }
            }
          }(e)), Wt(n) && (0, o.useEffect)((function() {
            return n.subscribe(e)
          }), [n])
        })),
        exit: Fe((function(t) {
          var e = t.custom,
            n = t.visualElement,
            i = (0, r.o5)(Xe(), 2),
            a = i[0],
            s = i[1],
            u = (0, o.useContext)(g);
          (0, o.useEffect)((function() {
            var t, r;
            n.isPresent = a;
            var o = null === (t = n.animationState) || void 0 === t ? void 0 : t.setActive(Kt.Exit, !a, {
              custom: null !== (r = null == u ? void 0 : u.custom) && void 0 !== r ? r : e
            });
            !a && (null == o || o.then(s))
          }), [a])
        }))
      };
      const Ro = t => t.hasOwnProperty("x") && t.hasOwnProperty("y"),
        Lo = t => Ro(t) && t.hasOwnProperty("z"),
        ko = (t, e) => Math.abs(t - e);

      function Do(t, e) {
        if (Mn(t) && Mn(e)) return ko(t, e);
        if (Ro(t) && Ro(e)) {
          const n = ko(t.x, e.x),
            r = ko(t.y, e.y),
            o = Lo(t) && Lo(e) ? ko(t.z, e.z) : 0;
          return Math.sqrt(Math.pow(n, 2) + Math.pow(r, 2) + Math.pow(o, 2))
        }
      }
      var Oo = function() {
        function t(t, e, n) {
          var o = this,
            i = (void 0 === n ? {} : n).transformPagePoint;
          if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = function() {
              if (o.lastMoveEvent && o.lastMoveEventInfo) {
                var t = Fo(o.lastMoveEventInfo, o.history),
                  e = null !== o.startEvent,
                  n = Do(t.offset, {
                    x: 0,
                    y: 0
                  }) >= 3;
                if (e || n) {
                  var i = t.point,
                    a = gr().timestamp;
                  o.history.push((0, r.C3)((0, r.C3)({}, i), {
                    timestamp: a
                  }));
                  var s = o.handlers,
                    u = s.onStart,
                    l = s.onMove;
                  e || (u && u(o.lastMoveEvent, t), o.startEvent = o.lastMoveEvent), l && l(o.lastMoveEvent, t)
                }
              }
            }, this.handlePointerMove = function(t, e) {
              o.lastMoveEvent = t, o.lastMoveEventInfo = Io(e, o.transformPagePoint), re(t) && 0 === t.buttons ? o.handlePointerUp(t, e) : yr.update(o.updatePoint, !0)
            }, this.handlePointerUp = function(t, e) {
              o.end();
              var n = o.handlers,
                r = n.onEnd,
                i = n.onSessionEnd,
                a = Fo(Io(e, o.transformPagePoint), o.history);
              o.startEvent && r && r(t, a), i && i(t, a)
            }, !(oe(t) && t.touches.length > 1)) {
            this.handlers = e, this.transformPagePoint = i;
            var a = Io(ue(t), this.transformPagePoint),
              s = a.point,
              u = gr().timestamp;
            this.history = [(0, r.C3)((0, r.C3)({}, s), {
              timestamp: u
            })];
            var l = e.onSessionStart;
            l && l(t, Fo(a, this.history)), this.removeListeners = Pe(me(window, "pointermove", this.handlePointerMove), me(window, "pointerup", this.handlePointerUp), me(window, "pointercancel", this.handlePointerUp))
          }
        }
        return t.prototype.updateHandlers = function(t) {
          this.handlers = t
        }, t.prototype.end = function() {
          this.removeListeners && this.removeListeners(), dr.update(this.updatePoint)
        }, t
      }();

      function Io(t, e) {
        return e ? {
          point: e(t.point)
        } : t
      }

      function jo(t, e) {
        return {
          x: t.x - e.x,
          y: t.y - e.y
        }
      }

      function Fo(t, e) {
        var n = t.point;
        return {
          point: n,
          delta: jo(n, Uo(e)),
          offset: jo(n, Bo(e)),
          velocity: No(e, .1)
        }
      }

      function Bo(t) {
        return t[0]
      }

      function Uo(t) {
        return t[t.length - 1]
      }

      function No(t, e) {
        if (t.length < 2) return {
          x: 0,
          y: 0
        };
        for (var n = t.length - 1, r = null, o = Uo(t); n >= 0 && (r = t[n], !(o.timestamp - r.timestamp > Er(e)));) n--;
        if (!r) return {
          x: 0,
          y: 0
        };
        var i = (o.timestamp - r.timestamp) / 1e3;
        if (0 === i) return {
          x: 0,
          y: 0
        };
        var a = {
          x: (o.x - r.x) / i,
          y: (o.y - r.y) / i
        };
        return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a
      }

      function zo(t) {
        return t.max - t.min
      }

      function Xo(t, e, n) {
        return void 0 === e && (e = 0), void 0 === n && (n = .01), Do(t, e) < n
      }

      function Wo(t, e, n, r) {
        void 0 === r && (r = .5), t.origin = r, t.originPoint = an(e.min, e.max, t.origin), t.scale = zo(n) / zo(e), (Xo(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1), t.translate = an(n.min, n.max, t.origin) - t.originPoint, (Xo(t.translate) || isNaN(t.translate)) && (t.translate = 0)
      }

      function Ho(t, e, n, r) {
        Wo(t.x, e.x, n.x, null == r ? void 0 : r.originX), Wo(t.y, e.y, n.y, null == r ? void 0 : r.originY)
      }

      function Yo(t, e, n) {
        t.min = n.min + e.min, t.max = t.min + zo(e)
      }

      function Go(t, e, n) {
        t.min = e.min - n.min, t.max = t.min + zo(e)
      }

      function _o(t, e, n) {
        Go(t.x, e.x, n.x), Go(t.y, e.y, n.y)
      }

      function qo(t, e, n) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== n ? t.max + n - (t.max - t.min) : void 0
        }
      }

      function $o(t, e) {
        var n, o = e.min - t.min,
          i = e.max - t.max;
        return e.max - e.min < t.max - t.min && (o = (n = (0, r.o5)([i, o], 2))[0], i = n[1]), {
          min: o,
          max: i
        }
      }
      var Zo = .35;

      function Ko(t, e, n) {
        return {
          min: Jo(t, e),
          max: Jo(t, n)
        }
      }

      function Jo(t, e) {
        var n;
        return "number" == typeof t ? t : null !== (n = t[e]) && void 0 !== n ? n : 0
      }
      var Qo = function() {
          return {
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
          }
        },
        ti = function() {
          return {
            x: {
              min: 0,
              max: 0
            },
            y: {
              min: 0,
              max: 0
            }
          }
        };

      function ei(t) {
        return [t("x"), t("y")]
      }

      function ni(t) {
        var e = t.top;
        return {
          x: {
            min: t.left,
            max: t.right
          },
          y: {
            min: e,
            max: t.bottom
          }
        }
      }

      function ri(t) {
        return void 0 === t || 1 === t
      }

      function oi(t) {
        var e = t.scale,
          n = t.scaleX,
          r = t.scaleY;
        return !ri(e) || !ri(n) || !ri(r)
      }

      function ii(t) {
        return oi(t) || ai(t.x) || ai(t.y) || t.z || t.rotate || t.rotateX || t.rotateY
      }

      function ai(t) {
        return t && "0%" !== t
      }

      function si(t, e, n) {
        return n + e * (t - n)
      }

      function ui(t, e, n, r, o) {
        return void 0 !== o && (t = si(t, o, r)), si(t, n, r) + e
      }

      function li(t, e, n, r, o) {
        void 0 === e && (e = 0), void 0 === n && (n = 1), t.min = ui(t.min, e, n, r, o), t.max = ui(t.max, e, n, r, o)
      }

      function ci(t, e) {
        var n = e.x,
          r = e.y;
        li(t.x, n.translate, n.scale, n.originPoint), li(t.y, r.translate, r.scale, r.originPoint)
      }

      function fi(t, e) {
        t.min = t.min + e, t.max = t.max + e
      }

      function di(t, e, n) {
        var o = (0, r.o5)(n, 3),
          i = o[0],
          a = o[1],
          s = o[2],
          u = void 0 !== e[s] ? e[s] : .5,
          l = an(t.min, t.max, u);
        li(t, e[i], e[a], l, e.scale)
      }
      var pi = ["x", "scaleX", "originX"],
        vi = ["y", "scaleY", "originY"];

      function hi(t, e) {
        di(t.x, e, pi), di(t.y, e, vi)
      }

      function mi(t, e) {
        return ni(function(t, e) {
          if (!e) return t;
          var n = e({
              x: t.left,
              y: t.top
            }),
            r = e({
              x: t.right,
              y: t.bottom
            });
          return {
            top: n.y,
            left: n.x,
            bottom: r.y,
            right: r.x
          }
        }(t.getBoundingClientRect(), e))
      }
      var gi = new WeakMap,
        yi = function() {
          function t(t) {
            this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
              x: 0,
              y: 0
            }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = ti(), this.visualElement = t
          }
          return t.prototype.start = function(t, e) {
            var n = this,
              r = (void 0 === e ? {} : e).snapToCursor,
              o = void 0 !== r && r;
            !1 !== this.visualElement.isPresent && (this.panSession = new Oo(t, {
              onSessionStart: function(t) {
                n.stopAnimation(), o && n.snapToCursor(ue(t, "page").point)
              },
              onStart: function(t, e) {
                var r, o = n.getProps(),
                  i = o.drag,
                  a = o.dragPropagation,
                  s = o.onDragStart;
                (!i || a || (n.openGlobalLock && n.openGlobalLock(), n.openGlobalLock = Ce(i), n.openGlobalLock)) && (n.isDragging = !0, n.currentDirection = null, n.resolveConstraints(), n.visualElement.projection && (n.visualElement.projection.isAnimationBlocked = !0, n.visualElement.projection.target = void 0), ei((function(t) {
                  var e, r, o = n.getAxisMotionValue(t).get() || 0;
                  if (ct.test(o)) {
                    var i = null === (r = null === (e = n.visualElement.projection) || void 0 === e ? void 0 : e.layout) || void 0 === r ? void 0 : r.actual[t];
                    i && (o = zo(i) * (parseFloat(o) / 100))
                  }
                  n.originPoint[t] = o
                })), null == s || s(t, e), null === (r = n.visualElement.animationState) || void 0 === r || r.setActive(Kt.Drag, !0))
              },
              onMove: function(t, e) {
                var r = n.getProps(),
                  o = r.dragPropagation,
                  i = r.dragDirectionLock,
                  a = r.onDirectionLock,
                  s = r.onDrag;
                if (o || n.openGlobalLock) {
                  var u = e.offset;
                  if (i && null === n.currentDirection) return n.currentDirection = function(t, e) {
                    void 0 === e && (e = 10);
                    var n = null;
                    return Math.abs(t.y) > e ? n = "y" : Math.abs(t.x) > e && (n = "x"), n
                  }(u), void(null !== n.currentDirection && (null == a || a(n.currentDirection)));
                  n.updateAxis("x", e.point, u), n.updateAxis("y", e.point, u), n.visualElement.syncRender(), null == s || s(t, e)
                }
              },
              onSessionEnd: function(t, e) {
                return n.stop(t, e)
              }
            }, {
              transformPagePoint: this.visualElement.getTransformPagePoint()
            }))
          }, t.prototype.stop = function(t, e) {
            var n = this.isDragging;
            if (this.cancel(), n) {
              var r = e.velocity;
              this.startAnimation(r);
              var o = this.getProps().onDragEnd;
              null == o || o(t, e)
            }
          }, t.prototype.cancel = function() {
            var t, e;
            this.isDragging = !1, this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !1), null === (t = this.panSession) || void 0 === t || t.end(), this.panSession = void 0, !this.getProps().dragPropagation && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), null === (e = this.visualElement.animationState) || void 0 === e || e.setActive(Kt.Drag, !1)
          }, t.prototype.updateAxis = function(t, e, n) {
            var r = this.getProps().drag;
            if (n && xi(t, r, this.currentDirection)) {
              var o = this.getAxisMotionValue(t),
                i = this.originPoint[t] + n[t];
              this.constraints && this.constraints[t] && (i = function(t, e, n) {
                var r = e.min,
                  o = e.max;
                return void 0 !== r && t < r ? t = n ? an(r, t, n.min) : Math.max(t, r) : void 0 !== o && t > o && (t = n ? an(o, t, n.max) : Math.min(t, o)), t
              }(i, this.constraints[t], this.elastic[t])), o.set(i)
            }
          }, t.prototype.resolveConstraints = function() {
            var t = this,
              e = this.getProps(),
              n = e.dragConstraints,
              r = e.dragElastic,
              o = (this.visualElement.projection || {}).layout,
              i = this.constraints;
            n && S(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : this.constraints = !(!n || !o) && function(t, e) {
              var n = e.top,
                r = e.left,
                o = e.bottom,
                i = e.right;
              return {
                x: qo(t.x, r, i),
                y: qo(t.y, n, o)
              }
            }(o.actual, n), this.elastic = function(t) {
              return void 0 === t && (t = Zo), !1 === t ? t = 0 : !0 === t && (t = Zo), {
                x: Ko(t, "left", "right"),
                y: Ko(t, "top", "bottom")
              }
            }(r), i !== this.constraints && o && this.constraints && !this.hasMutatedConstraints && ei((function(e) {
              t.getAxisMotionValue(e) && (t.constraints[e] = function(t, e) {
                var n = {};
                return void 0 !== e.min && (n.min = e.min - t.min), void 0 !== e.max && (n.max = e.max - t.min), n
              }(o.actual[e], t.constraints[e]))
            }))
          }, t.prototype.resolveRefConstraints = function() {
            var t = this.getProps(),
              e = t.dragConstraints,
              n = t.onMeasureDragConstraints;
            if (!e || !S(e)) return !1;
            var r = e.current;
            (0, c.O)(null !== r, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
            var o = this.visualElement.projection;
            if (!o || !o.layout) return !1;
            var i = function(t, e, n) {
                var r = mi(t, n),
                  o = e.scroll;
                return o && (fi(r.x, o.x), fi(r.y, o.y)), r
              }(r, o.root, this.visualElement.getTransformPagePoint()),
              a = function(t, e) {
                return {
                  x: $o(t.x, e.x),
                  y: $o(t.y, e.y)
                }
              }(o.layout.actual, i);
            if (n) {
              var s = n(function(t) {
                var e = t.x,
                  n = t.y;
                return {
                  top: n.min,
                  right: e.max,
                  bottom: n.max,
                  left: e.min
                }
              }(a));
              this.hasMutatedConstraints = !!s, s && (a = ni(s))
            }
            return a
          }, t.prototype.startAnimation = function(t) {
            var e = this,
              n = this.getProps(),
              o = n.drag,
              i = n.dragMomentum,
              a = n.dragElastic,
              s = n.dragTransition,
              u = n.dragSnapToOrigin,
              l = n.onDragTransitionEnd,
              c = this.constraints || {},
              f = ei((function(n) {
                var l;
                if (xi(n, o, e.currentDirection)) {
                  var f = null !== (l = null == c ? void 0 : c[n]) && void 0 !== l ? l : {};
                  u && (f = {
                    min: 0,
                    max: 0
                  });
                  var d = a ? 200 : 1e6,
                    p = a ? 40 : 1e7,
                    v = (0, r.C3)((0, r.C3)({
                      type: "inertia",
                      velocity: i ? t[n] : 0,
                      bounceStiffness: d,
                      bounceDamping: p,
                      timeConstant: 750,
                      restDelta: 1,
                      restSpeed: 10
                    }, s), f);
                  return e.startAxisValueAnimation(n, v)
                }
              }));
            return Promise.all(f).then(l)
          }, t.prototype.startAxisValueAnimation = function(t, e) {
            return to(t, this.getAxisMotionValue(t), 0, e)
          }, t.prototype.stopAnimation = function() {
            var t = this;
            ei((function(e) {
              return t.getAxisMotionValue(e).stop()
            }))
          }, t.prototype.getAxisMotionValue = function(t) {
            var e, n, r = "_drag" + t.toUpperCase();
            return this.visualElement.getProps()[r] || this.visualElement.getValue(t, null !== (n = null === (e = this.visualElement.getProps().initial) || void 0 === e ? void 0 : e[t]) && void 0 !== n ? n : 0)
          }, t.prototype.snapToCursor = function(t) {
            var e = this;
            ei((function(n) {
              if (xi(n, e.getProps().drag, e.currentDirection)) {
                var r = e.visualElement.projection,
                  o = e.getAxisMotionValue(n);
                if (r && r.layout) {
                  var i = r.layout.actual[n],
                    a = i.min,
                    s = i.max;
                  o.set(t[n] - an(a, s, .5))
                }
              }
            }))
          }, t.prototype.scalePositionWithinConstraints = function() {
            var t, e = this,
              n = this.getProps(),
              r = n.drag,
              o = n.dragConstraints,
              i = this.visualElement.projection;
            if (S(o) && i && this.constraints) {
              this.stopAnimation();
              var a = {
                x: 0,
                y: 0
              };
              ei((function(t) {
                var n, r, o, i, s, u = e.getAxisMotionValue(t);
                if (u) {
                  var l = u.get();
                  a[t] = (n = {
                    min: l,
                    max: l
                  }, r = e.constraints[t], o = .5, i = zo(n), (s = zo(r)) > i ? o = on(r.min, r.max - i, n.min) : i > s && (o = on(n.min, n.max - s, r.min)), Ye(0, 1, o))
                }
              }));
              var s = this.visualElement.getProps().transformTemplate;
              this.visualElement.getInstance().style.transform = s ? s({}, "") : "none", null === (t = i.root) || void 0 === t || t.updateScroll(), i.updateLayout(), this.resolveConstraints(), ei((function(t) {
                if (xi(t, r, null)) {
                  var n = e.getAxisMotionValue(t),
                    o = e.constraints[t],
                    i = o.min,
                    s = o.max;
                  n.set(an(i, s, a[t]))
                }
              }))
            }
          }, t.prototype.addListeners = function() {
            var t, e = this;
            gi.set(this.visualElement, this);
            var n = me(this.visualElement.getInstance(), "pointerdown", (function(t) {
                var n = e.getProps(),
                  r = n.drag,
                  o = n.dragListener;
                r && (void 0 === o || o) && e.start(t)
              })),
              r = function() {
                S(e.getProps().dragConstraints) && (e.constraints = e.resolveRefConstraints())
              },
              o = this.visualElement.projection,
              i = o.addEventListener("measure", r);
            o && !o.layout && (null === (t = o.root) || void 0 === t || t.updateScroll(), o.updateLayout()), r();
            var a = ee(window, "resize", (function() {
              return e.scalePositionWithinConstraints()
            }));
            return o.addEventListener("didUpdate", (function(t) {
                var n = t.delta,
                  r = t.hasLayoutChanged;
                e.isDragging && r && (ei((function(t) {
                  var r = e.getAxisMotionValue(t);
                  r && (e.originPoint[t] += n[t].translate, r.set(r.get() + n[t].translate))
                })), e.visualElement.syncRender())
              })),
              function() {
                a(), n(), i()
              }
          }, t.prototype.getProps = function() {
            var t = this.visualElement.getProps(),
              e = t.drag,
              n = void 0 !== e && e,
              o = t.dragDirectionLock,
              i = void 0 !== o && o,
              a = t.dragPropagation,
              s = void 0 !== a && a,
              u = t.dragConstraints,
              l = void 0 !== u && u,
              c = t.dragElastic,
              f = void 0 === c ? Zo : c,
              d = t.dragMomentum,
              p = void 0 === d || d;
            return (0, r.C3)((0, r.C3)({}, t), {
              drag: n,
              dragDirectionLock: i,
              dragPropagation: s,
              dragConstraints: l,
              dragElastic: f,
              dragMomentum: p
            })
          }, t
        }();

      function xi(t, e, n) {
        return !(!0 !== e && e !== t || null !== n && n !== t)
      }
      var bi = {
          pan: Fe((function(t) {
            var e = t.onPan,
              n = t.onPanStart,
              r = t.onPanEnd,
              i = t.onPanSessionStart,
              a = t.visualElement,
              s = e || n || r || i,
              u = (0, o.useRef)(null),
              l = (0, o.useContext)(v).transformPagePoint,
              c = {
                onSessionStart: i,
                onStart: n,
                onMove: e,
                onEnd: function(t, e) {
                  u.current = null, r && r(t, e)
                }
              };
            (0, o.useEffect)((function() {
              null !== u.current && u.current.updateHandlers(c)
            })), ge(a, "pointerdown", s && function(t) {
              u.current = new Oo(t, c, {
                transformPagePoint: l
              })
            }), Te((function() {
              return u.current && u.current.end()
            }))
          })),
          drag: Fe((function(t) {
            var e = t.dragControls,
              n = t.visualElement,
              r = k((function() {
                return new yi(n)
              }));
            (0, o.useEffect)((function() {
              return e && e.subscribe(r)
            }), [r, e]), (0, o.useEffect)((function() {
              return r.addListeners()
            }), [r])
          }))
        },
        Ci = ["LayoutMeasure", "BeforeLayoutMeasure", "LayoutUpdate", "ViewportBoxUpdate", "Update", "Render", "AnimationComplete", "LayoutAnimationComplete", "AnimationStart", "LayoutAnimationStart", "SetAxisTarget", "Unmount"],
        wi = function(t) {
          var e = t.treeType,
            n = void 0 === e ? "" : e,
            o = t.build,
            i = t.getBaseTarget,
            a = t.makeTargetAnimatable,
            s = t.measureViewportBox,
            u = t.render,
            l = t.readValueFromInstance,
            c = t.removeValueFromRenderState,
            f = t.sortNodePosition,
            d = t.scrapeMotionValuesFromProps;
          return function(t, e) {
            var p = t.parent,
              v = t.props,
              h = t.presenceId,
              m = t.blockInitialAnimation,
              g = t.visualState,
              y = t.shouldReduceMotion;
            void 0 === e && (e = {});
            var x, b, C = !1,
              w = g.latestValues,
              E = g.renderState,
              S = function() {
                var t = Ci.map((function() {
                    return new io
                  })),
                  e = {},
                  n = {
                    clearAllListeners: function() {
                      return t.forEach((function(t) {
                        return t.clear()
                      }))
                    },
                    updatePropListeners: function(t) {
                      Ci.forEach((function(r) {
                        var o, i = "on" + r,
                          a = t[i];
                        null === (o = e[r]) || void 0 === o || o.call(e), a && (e[r] = n[i](a))
                      }))
                    }
                  };
                return t.forEach((function(t, e) {
                  n["on" + Ci[e]] = function(e) {
                    return t.add(e)
                  }, n["notify" + Ci[e]] = function() {
                    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                    return t.notify.apply(t, (0, r.Mt)([], (0, r.o5)(e), !1))
                  }
                })), n
              }(),
              T = new Map,
              P = new Map,
              V = {},
              L = (0, r.C3)({}, w);

            function k() {
              x && C && (D(), u(x, E, v.style, z.projection))
            }

            function D() {
              o(z, E, w, e, v)
            }

            function O() {
              S.notifyUpdate(w)
            }

            function I(t, e) {
              var n = e.onChange((function(e) {
                  w[t] = e, v.onUpdate && yr.update(O, !1, !0)
                })),
                r = e.onRenderRequest(z.scheduleRender);
              P.set(t, (function() {
                n(), r()
              }))
            }
            var j = d(v);
            for (var F in j) {
              var B = j[F];
              void 0 !== w[F] && J(B) && B.set(w[F], !1)
            }
            var U = M(v),
              N = R(v),
              z = (0, r.C3)((0, r.C3)({
                treeType: n,
                current: null,
                depth: p ? p.depth + 1 : 0,
                parent: p,
                children: new Set,
                presenceId: h,
                shouldReduceMotion: y,
                variantChildren: N ? new Set : void 0,
                isVisible: void 0,
                manuallyAnimateOnMount: Boolean(null == p ? void 0 : p.isMounted()),
                blockInitialAnimation: m,
                isMounted: function() {
                  return Boolean(x)
                },
                mount: function(t) {
                  C = !0, x = z.current = t, z.projection && z.projection.mount(t), N && p && !U && (b = null == p ? void 0 : p.addVariantChild(z)), T.forEach((function(t, e) {
                    return I(e, t)
                  })), null == p || p.children.add(z), z.setProps(v)
                },
                unmount: function() {
                  var t;
                  null === (t = z.projection) || void 0 === t || t.unmount(), dr.update(O), dr.render(k), P.forEach((function(t) {
                    return t()
                  })), null == b || b(), null == p || p.children.delete(z), S.clearAllListeners(), x = void 0, C = !1
                },
                addVariantChild: function(t) {
                  var e, n = z.getClosestVariantNode();
                  if (n) return null === (e = n.variantChildren) || void 0 === e || e.add(t),
                    function() {
                      return n.variantChildren.delete(t)
                    }
                },
                sortNodePosition: function(t) {
                  return f && n === t.treeType ? f(z.getInstance(), t.getInstance()) : 0
                },
                getClosestVariantNode: function() {
                  return N ? z : null == p ? void 0 : p.getClosestVariantNode()
                },
                getLayoutId: function() {
                  return v.layoutId
                },
                getInstance: function() {
                  return x
                },
                getStaticValue: function(t) {
                  return w[t]
                },
                setStaticValue: function(t, e) {
                  return w[t] = e
                },
                getLatestValues: function() {
                  return w
                },
                setVisibility: function(t) {
                  z.isVisible !== t && (z.isVisible = t, z.scheduleRender())
                },
                makeTargetAnimatable: function(t, e) {
                  return void 0 === e && (e = !0), a(z, t, v, e)
                },
                measureViewportBox: function() {
                  return s(x, v)
                },
                addValue: function(t, e) {
                  z.hasValue(t) && z.removeValue(t), T.set(t, e), w[t] = e.get(), I(t, e)
                },
                removeValue: function(t) {
                  var e;
                  T.delete(t), null === (e = P.get(t)) || void 0 === e || e(), P.delete(t), delete w[t], c(t, E)
                },
                hasValue: function(t) {
                  return T.has(t)
                },
                getValue: function(t, e) {
                  var n = T.get(t);
                  return void 0 === n && void 0 !== e && (n = so(e), z.addValue(t, n)), n
                },
                forEachValue: function(t) {
                  return T.forEach(t)
                },
                readValue: function(t) {
                  var n;
                  return null !== (n = w[t]) && void 0 !== n ? n : l(x, t, e)
                },
                setBaseTarget: function(t, e) {
                  L[t] = e
                },
                getBaseTarget: function(t) {
                  if (i) {
                    var e = i(v, t);
                    if (void 0 !== e && !J(e)) return e
                  }
                  return L[t]
                }
              }, S), {
                build: function() {
                  return D(), E
                },
                scheduleRender: function() {
                  yr.render(k, !1, !0)
                },
                syncRender: k,
                setProps: function(t) {
                  (t.transformTemplate || v.transformTemplate) && z.scheduleRender(), v = t, S.updatePropListeners(t), V = function(t, e, n) {
                    var r;
                    for (var o in e) {
                      var i = e[o],
                        a = n[o];
                      if (J(i)) t.addValue(o, i);
                      else if (J(a)) t.addValue(o, so(i));
                      else if (a !== i)
                        if (t.hasValue(o)) {
                          var s = t.getValue(o);
                          !s.hasAnimated && s.set(i)
                        } else t.addValue(o, so(null !== (r = t.getStaticValue(o)) && void 0 !== r ? r : i))
                    }
                    for (var o in n) void 0 === e[o] && t.removeValue(o);
                    return e
                  }(z, d(v), V)
                },
                getProps: function() {
                  return v
                },
                getVariant: function(t) {
                  var e;
                  return null === (e = v.variants) || void 0 === e ? void 0 : e[t]
                },
                getDefaultTransition: function() {
                  return v.transition
                },
                getTransformPagePoint: function() {
                  return v.transformPagePoint
                },
                getVariantContext: function(t) {
                  if (void 0 === t && (t = !1), t) return null == p ? void 0 : p.getVariantContext();
                  if (!U) {
                    var e = (null == p ? void 0 : p.getVariantContext()) || {};
                    return void 0 !== v.initial && (e.initial = v.initial), e
                  }
                  for (var n = {}, r = 0; r < Si; r++) {
                    var o = Ei[r],
                      i = v[o];
                    (A(i) || !1 === i) && (n[o] = i)
                  }
                  return n
                }
              });
            return z
          }
        },
        Ei = (0, r.Mt)(["initial"], (0, r.o5)(To), !1),
        Si = Ei.length;

      function Ti(t) {
        return "string" == typeof t && t.startsWith("var(--")
      }
      var Ai = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;

      function Pi(t, e, n) {
        void 0 === n && (n = 1), (0, c.O)(n <= 4, 'Max CSS variable fallback depth detected in property "'.concat(t, '". This may indicate a circular fallback dependency.'));
        var o = (0, r.o5)(function(t) {
            var e = Ai.exec(t);
            if (!e) return [, ];
            var n = (0, r.o5)(e, 3);
            return [n[1], n[2]]
          }(t), 2),
          i = o[0],
          a = o[1];
        if (i) {
          var s = window.getComputedStyle(e).getPropertyValue(i);
          return s ? s.trim() : Ti(a) ? Pi(a, e, n + 1) : a
        }
      }
      var Vi, Mi = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y"]),
        Ri = function(t) {
          return Mi.has(t)
        },
        Li = function(t, e) {
          t.set(e, !1), t.set(e)
        },
        ki = function(t) {
          return t === ht || t === ft
        };
      ! function(t) {
        t.width = "width", t.height = "height", t.left = "left", t.right = "right", t.top = "top", t.bottom = "bottom"
      }(Vi || (Vi = {}));
      var Di = function(t, e) {
          return parseFloat(t.split(", ")[e])
        },
        Oi = function(t, e) {
          return function(n, r) {
            var o = r.transform;
            if ("none" === o || !o) return 0;
            var i = o.match(/^matrix3d\((.+)\)$/);
            if (i) return Di(i[1], e);
            var a = o.match(/^matrix\((.+)\)$/);
            return a ? Di(a[1], t) : 0
          }
        },
        Ii = new Set(["x", "y", "z"]),
        ji = Y.filter((function(t) {
          return !Ii.has(t)
        })),
        Fi = {
          width: function(t, e) {
            var n = t.x,
              r = e.paddingLeft,
              o = void 0 === r ? "0" : r,
              i = e.paddingRight,
              a = void 0 === i ? "0" : i;
            return n.max - n.min - parseFloat(o) - parseFloat(a)
          },
          height: function(t, e) {
            var n = t.y,
              r = e.paddingTop,
              o = void 0 === r ? "0" : r,
              i = e.paddingBottom,
              a = void 0 === i ? "0" : i;
            return n.max - n.min - parseFloat(o) - parseFloat(a)
          },
          top: function(t, e) {
            var n = e.top;
            return parseFloat(n)
          },
          left: function(t, e) {
            var n = e.left;
            return parseFloat(n)
          },
          bottom: function(t, e) {
            var n = t.y,
              r = e.top;
            return parseFloat(r) + (n.max - n.min)
          },
          right: function(t, e) {
            var n = t.x,
              r = e.left;
            return parseFloat(r) + (n.max - n.min)
          },
          x: Oi(4, 13),
          y: Oi(5, 14)
        };

      function Bi(t, e, n, o) {
        return function(t) {
          return Object.keys(t).some(Ri)
        }(e) ? function(t, e, n, o) {
          void 0 === n && (n = {}), void 0 === o && (o = {}), e = (0, r.C3)({}, e), o = (0, r.C3)({}, o);
          var i = Object.keys(e).filter(Ri),
            a = [],
            s = !1,
            u = [];
          if (i.forEach((function(r) {
              var i = t.getValue(r);
              if (t.hasValue(r)) {
                var l, f = n[r],
                  d = co(f),
                  p = e[r];
                if (Ht(p)) {
                  var v = p.length,
                    h = null === p[0] ? 1 : 0;
                  f = p[h], d = co(f);
                  for (var m = h; m < v; m++) l ? (0, c.O)(co(p[m]) === l, "All keyframes must be of the same type") : (l = co(p[m]), (0, c.O)(l === d || ki(d) && ki(l), "Keyframes must be of the same dimension as the current value"))
                } else l = co(p);
                if (d !== l)
                  if (ki(d) && ki(l)) {
                    var g = i.get();
                    "string" == typeof g && i.set(parseFloat(g)), "string" == typeof p ? e[r] = parseFloat(p) : Array.isArray(p) && l === ft && (e[r] = p.map(parseFloat))
                  } else(null == d ? void 0 : d.transform) && (null == l ? void 0 : l.transform) && (0 === f || 0 === p) ? 0 === f ? i.set(l.transform(f)) : e[r] = d.transform(p) : (s || (a = function(t) {
                    var e = [];
                    return ji.forEach((function(n) {
                      var r = t.getValue(n);
                      void 0 !== r && (e.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0))
                    })), e.length && t.syncRender(), e
                  }(t), s = !0), u.push(r), o[r] = void 0 !== o[r] ? o[r] : e[r], Li(i, p))
              }
            })), u.length) {
            var l = u.indexOf("height") >= 0 ? window.pageYOffset : null,
              f = function(t, e, n) {
                var r = e.measureViewportBox(),
                  o = e.getInstance(),
                  i = getComputedStyle(o),
                  a = i.display,
                  s = {};
                "none" === a && e.setStaticValue("display", t.display || "block"), n.forEach((function(t) {
                  s[t] = Fi[t](r, i)
                })), e.syncRender();
                var u = e.measureViewportBox();
                return n.forEach((function(n) {
                  var r = e.getValue(n);
                  Li(r, s[n]), t[n] = Fi[n](u, i)
                })), t
              }(e, t, u);
            return a.length && a.forEach((function(e) {
              var n = (0, r.o5)(e, 2),
                o = n[0],
                i = n[1];
              t.getValue(o).set(i)
            })), t.syncRender(), null !== l && window.scrollTo({
              top: l
            }), {
              target: f,
              transitionEnd: o
            }
          }
          return {
            target: e,
            transitionEnd: o
          }
        }(t, e, n, o) : {
          target: e,
          transitionEnd: o
        }
      }
      var Ui = {
          treeType: "dom",
          readValueFromInstance: function(t, e) {
            if (q(e)) {
              var n = Gr(e);
              return n && n.default || 0
            }
            var r, o = (r = t, window.getComputedStyle(r));
            return (tt(e) ? o.getPropertyValue(e) : o[e]) || 0
          },
          sortNodePosition: function(t, e) {
            return 2 & t.compareDocumentPosition(e) ? 1 : -1
          },
          getBaseTarget: function(t, e) {
            var n;
            return null === (n = t.style) || void 0 === n ? void 0 : n[e]
          },
          measureViewportBox: function(t, e) {
            return mi(t, e.transformPagePoint)
          },
          resetTransform: function(t, e, n) {
            var r = n.transformTemplate;
            e.style.transform = r ? r({}, "") : "none", t.scheduleRender()
          },
          restoreTransform: function(t, e) {
            t.style.transform = e.style.transform
          },
          removeValueFromRenderState: function(t, e) {
            var n = e.vars,
              r = e.style;
            delete n[t], delete r[t]
          },
          makeTargetAnimatable: function(t, e, n, o) {
            var i = n.transformValues;
            void 0 === o && (o = !0);
            var a = e.transition,
              s = e.transitionEnd,
              u = (0, r.sX)(e, ["transition", "transitionEnd"]),
              l = xo(u, a || {}, t);
            if (i && (s && (s = i(s)), u && (u = i(u)), l && (l = i(l))), o) {
              go(t, u, l);
              var c = function(t, e, n, o) {
                var i = function(t, e, n) {
                  var o, i = (0, r.sX)(e, []),
                    a = t.getInstance();
                  if (!(a instanceof Element)) return {
                    target: i,
                    transitionEnd: n
                  };
                  for (var s in n && (n = (0, r.C3)({}, n)), t.forEachValue((function(t) {
                      var e = t.get();
                      if (Ti(e)) {
                        var n = Pi(e, a);
                        n && t.set(n)
                      }
                    })), i) {
                    var u = i[s];
                    if (Ti(u)) {
                      var l = Pi(u, a);
                      l && (i[s] = l, n && (null !== (o = n[s]) && void 0 !== o || (n[s] = u)))
                    }
                  }
                  return {
                    target: i,
                    transitionEnd: n
                  }
                }(t, e, o);
                return Bi(t, e = i.target, n, o = i.transitionEnd)
              }(t, u, l, s);
              s = c.transitionEnd, u = c.target
            }
            return (0, r.C3)({
              transition: a,
              transitionEnd: s
            }, u)
          },
          scrapeMotionValuesFromProps: zt,
          build: function(t, e, n, r, o) {
            void 0 !== t.isVisible && (e.style.visibility = t.isVisible ? "visible" : "hidden"), bt(e, n, r, o.transformTemplate)
          },
          render: Bt
        },
        Ni = wi(Ui),
        zi = wi((0, r.C3)((0, r.C3)({}, Ui), {
          getBaseTarget: function(t, e) {
            return t[e]
          },
          readValueFromInstance: function(t, e) {
            var n;
            return q(e) ? (null === (n = Gr(e)) || void 0 === n ? void 0 : n.default) || 0 : (e = Ut.has(e) ? e : Ft(e), t.getAttribute(e))
          },
          scrapeMotionValuesFromProps: Xt,
          build: function(t, e, n, r, o) {
            kt(e, n, r, o.transformTemplate)
          },
          render: Nt
        })),
        Xi = function(t, e) {
          return z(t) ? zi(e, {
            enableHardwareAcceleration: !1
          }) : Ni(e, {
            enableHardwareAcceleration: !0
          })
        };

      function Wi(t, e) {
        return e.max === e.min ? 0 : t / (e.max - e.min) * 100
      }
      var Hi = {
          correct: function(t, e) {
            if (!e.target) return t;
            if ("string" == typeof t) {
              if (!ft.test(t)) return t;
              t = parseFloat(t)
            }
            var n = Wi(t, e.target.x),
              r = Wi(t, e.target.y);
            return "".concat(n, "% ").concat(r, "%")
          }
        },
        Yi = "_$css",
        Gi = {
          correct: function(t, e) {
            var n = e.treeScale,
              r = e.projectionDelta,
              o = t,
              i = t.includes("var("),
              a = [];
            i && (t = t.replace(Ai, (function(t) {
              return a.push(t), Yi
            })));
            var s = Vn.parse(t);
            if (s.length > 5) return o;
            var u = Vn.createTransformer(t),
              l = "number" != typeof s[0] ? 1 : 0,
              c = r.x.scale * n.x,
              f = r.y.scale * n.y;
            s[0 + l] /= c, s[1 + l] /= f;
            var d = an(c, f, .5);
            "number" == typeof s[2 + l] && (s[2 + l] /= d), "number" == typeof s[3 + l] && (s[3 + l] /= d);
            var p = u(s);
            if (i) {
              var v = 0;
              p = p.replace(Yi, (function() {
                var t = a[v];
                return v++, t
              }))
            }
            return p
          }
        },
        _i = function(t) {
          function e() {
            return null !== t && t.apply(this, arguments) || this
          }
          return (0, r.ct)(e, t), e.prototype.componentDidMount = function() {
            var t = this,
              e = this.props,
              n = e.visualElement,
              o = e.layoutGroup,
              i = e.switchLayoutGroup,
              a = e.layoutId,
              s = n.projection;
            W(qi), s && ((null == o ? void 0 : o.group) && o.group.add(s), (null == i ? void 0 : i.register) && a && i.register(s), s.root.didUpdate(), s.addEventListener("animationComplete", (function() {
              t.safeToRemove()
            })), s.setOptions((0, r.C3)((0, r.C3)({}, s.options), {
              onExitComplete: function() {
                return t.safeToRemove()
              }
            }))), D.hasEverUpdated = !0
          }, e.prototype.getSnapshotBeforeUpdate = function(t) {
            var e = this,
              n = this.props,
              r = n.layoutDependency,
              o = n.visualElement,
              i = n.drag,
              a = n.isPresent,
              s = o.projection;
            return s ? (s.isPresent = a, i || t.layoutDependency !== r || void 0 === r ? s.willUpdate() : this.safeToRemove(), t.isPresent !== a && (a ? s.promote() : s.relegate() || yr.postRender((function() {
              var t;
              (null === (t = s.getStack()) || void 0 === t ? void 0 : t.members.length) || e.safeToRemove()
            }))), null) : null
          }, e.prototype.componentDidUpdate = function() {
            var t = this.props.visualElement.projection;
            t && (t.root.didUpdate(), !t.currentAnimation && t.isLead() && this.safeToRemove())
          }, e.prototype.componentWillUnmount = function() {
            var t = this.props,
              e = t.visualElement,
              n = t.layoutGroup,
              r = t.switchLayoutGroup,
              o = e.projection;
            o && (o.scheduleCheckAfterUnmount(), (null == n ? void 0 : n.group) && n.group.remove(o), (null == r ? void 0 : r.deregister) && r.deregister(o))
          }, e.prototype.safeToRemove = function() {
            var t = this.props.safeToRemove;
            null == t || t()
          }, e.prototype.render = function() {
            return null
          }, e
        }(o.Component),
        qi = {
          borderRadius: (0, r.C3)((0, r.C3)({}, Hi), {
            applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
          }),
          borderTopLeftRadius: Hi,
          borderTopRightRadius: Hi,
          borderBottomLeftRadius: Hi,
          borderBottomRightRadius: Hi,
          boxShadow: Gi
        },
        $i = {
          measureLayout: function(t) {
            var e = (0, r.o5)(Xe(), 2),
              n = e[0],
              i = e[1],
              a = (0, o.useContext)(I);
            return o.createElement(_i, (0, r.C3)({}, t, {
              layoutGroup: a,
              switchLayoutGroup: (0, o.useContext)(j),
              isPresent: n,
              safeToRemove: i
            }))
          }
        };

      function Zi(t, e, n) {
        void 0 === n && (n = {});
        var r = J(t) ? t : so(t);
        return to("", r, e, n), {
          stop: function() {
            return r.stop()
          },
          isAnimating: function() {
            return r.isAnimating()
          }
        }
      }
      var Ki = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        Ji = Ki.length,
        Qi = function(t) {
          return "string" == typeof t ? parseFloat(t) : t
        },
        ta = function(t) {
          return "number" == typeof t || ft.test(t)
        };

      function ea(t, e) {
        var n;
        return null !== (n = t[e]) && void 0 !== n ? n : t.borderRadius
      }
      var na = oa(0, .5, Yn),
        ra = oa(.5, .95, Nn);

      function oa(t, e, n) {
        return function(r) {
          return r < t ? 0 : r > e ? 1 : n(on(t, e, r))
        }
      }

      function ia(t, e) {
        t.min = e.min, t.max = e.max
      }

      function aa(t, e) {
        ia(t.x, e.x), ia(t.y, e.y)
      }

      function sa(t, e, n, r, o) {
        return t = si(t -= e, 1 / n, r), void 0 !== o && (t = si(t, 1 / o, r)), t
      }

      function ua(t, e, n, o, i) {
        var a = (0, r.o5)(n, 3),
          s = a[0],
          u = a[1],
          l = a[2];
        ! function(t, e, n, r, o, i, a) {
          if (void 0 === e && (e = 0), void 0 === n && (n = 1), void 0 === r && (r = .5), void 0 === i && (i = t), void 0 === a && (a = t), ct.test(e) && (e = parseFloat(e), e = an(a.min, a.max, e / 100) - a.min), "number" == typeof e) {
            var s = an(i.min, i.max, r);
            t === i && (s -= e), t.min = sa(t.min, e, n, s, o), t.max = sa(t.max, e, n, s, o)
          }
        }(t, e[s], e[u], e[l], e.scale, o, i)
      }
      var la = ["x", "scaleX", "originX"],
        ca = ["y", "scaleY", "originY"];

      function fa(t, e, n, r) {
        ua(t.x, e, la, null == n ? void 0 : n.x, null == r ? void 0 : r.x), ua(t.y, e, ca, null == n ? void 0 : n.y, null == r ? void 0 : r.y)
      }

      function da(t) {
        return 0 === t.translate && 1 === t.scale
      }

      function pa(t) {
        return da(t.x) && da(t.y)
      }

      function va(t, e) {
        return t.x.min === e.x.min && t.x.max === e.x.max && t.y.min === e.y.min && t.y.max === e.y.max
      }
      var ha = function() {
          function t() {
            this.members = []
          }
          return t.prototype.add = function(t) {
            ro(this.members, t), t.scheduleRender()
          }, t.prototype.remove = function(t) {
            if (oo(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
              var e = this.members[this.members.length - 1];
              e && this.promote(e)
            }
          }, t.prototype.relegate = function(t) {
            var e, n = this.members.findIndex((function(e) {
              return t === e
            }));
            if (0 === n) return !1;
            for (var r = n; r >= 0; r--) {
              var o = this.members[r];
              if (!1 !== o.isPresent) {
                e = o;
                break
              }
            }
            return !!e && (this.promote(e), !0)
          }, t.prototype.promote = function(t, e) {
            var n, r = this.lead;
            t !== r && (this.prevLead = r, this.lead = t, t.show(), r && (r.instance && r.scheduleRender(), t.scheduleRender(), t.resumeFrom = r, e && (t.resumeFrom.preserveOpacity = !0), r.snapshot && (t.snapshot = r.snapshot, t.snapshot.latestValues = r.animationValues || r.latestValues, t.snapshot.isShared = !0), (null === (n = t.root) || void 0 === n ? void 0 : n.isUpdating) && (t.isLayoutDirty = !0), !1 === t.options.crossfade && r.hide()))
          }, t.prototype.exitAnimationComplete = function() {
            this.members.forEach((function(t) {
              var e, n, r, o, i;
              null === (n = (e = t.options).onExitComplete) || void 0 === n || n.call(e), null === (i = null === (r = t.resumingFrom) || void 0 === r ? void 0 : (o = r.options).onExitComplete) || void 0 === i || i.call(o)
            }))
          }, t.prototype.scheduleRender = function() {
            this.members.forEach((function(t) {
              t.instance && t.scheduleRender(!1)
            }))
          }, t.prototype.removeLeadSnapshot = function() {
            this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
          }, t
        }(),
        ma = "translate3d(0px, 0px, 0) scale(1, 1) scale(1, 1)";

      function ga(t, e, n) {
        var r = t.x.translate / e.x,
          o = t.y.translate / e.y,
          i = "translate3d(".concat(r, "px, ").concat(o, "px, 0) ");
        if (i += "scale(".concat(1 / e.x, ", ").concat(1 / e.y, ") "), n) {
          var a = n.rotate,
            s = n.rotateX,
            u = n.rotateY;
          a && (i += "rotate(".concat(a, "deg) ")), s && (i += "rotateX(".concat(s, "deg) ")), u && (i += "rotateY(".concat(u, "deg) "))
        }
        var l = t.x.scale * e.x,
          c = t.y.scale * e.y;
        return (i += "scale(".concat(l, ", ").concat(c, ")")) === ma ? "none" : i
      }
      var ya = function(t, e) {
          return t.depth - e.depth
        },
        xa = function() {
          function t() {
            this.children = [], this.isDirty = !1
          }
          return t.prototype.add = function(t) {
            ro(this.children, t), this.isDirty = !0
          }, t.prototype.remove = function(t) {
            oo(this.children, t), this.isDirty = !0
          }, t.prototype.forEach = function(t) {
            this.isDirty && this.children.sort(ya), this.isDirty = !1, this.children.forEach(t)
          }, t
        }();

      function ba(t) {
        var e = t.attachResizeListener,
          n = t.defaultParent,
          o = t.measureScroll,
          i = t.checkIsScrollRoot,
          a = t.resetTransform;
        return function() {
          function t(t, e, o) {
            var i = this;
            void 0 === e && (e = {}), void 0 === o && (o = null == n ? void 0 : n()), this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = {
              x: 1,
              y: 1
            }, this.eventHandlers = new Map, this.potentialNodes = new Map, this.checkUpdateFailed = function() {
              i.isUpdating && (i.isUpdating = !1, i.clearAllSnapshots())
            }, this.updateProjection = function() {
              i.nodes.forEach(Pa), i.nodes.forEach(Va)
            }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.id = t, this.latestValues = e, this.root = o ? o.root || o : this, this.path = o ? (0, r.Mt)((0, r.Mt)([], (0, r.o5)(o.path), !1), [o], !1) : [], this.parent = o, this.depth = o ? o.depth + 1 : 0, t && this.root.registerPotentialNode(t, this);
            for (var a = 0; a < this.path.length; a++) this.path[a].shouldResetTransform = !0;
            this.root === this && (this.nodes = new xa)
          }
          return t.prototype.addEventListener = function(t, e) {
            return this.eventHandlers.has(t) || this.eventHandlers.set(t, new io), this.eventHandlers.get(t).add(e)
          }, t.prototype.notifyListeners = function(t) {
            for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
            var o = this.eventHandlers.get(t);
            null == o || o.notify.apply(o, (0, r.Mt)([], (0, r.o5)(e), !1))
          }, t.prototype.hasListeners = function(t) {
            return this.eventHandlers.has(t)
          }, t.prototype.registerPotentialNode = function(t, e) {
            this.potentialNodes.set(t, e)
          }, t.prototype.mount = function(t, n) {
            var o, i = this;
            if (void 0 === n && (n = !1), !this.instance) {
              this.isSVG = t instanceof SVGElement && "svg" !== t.tagName, this.instance = t;
              var a = this.options,
                s = a.layoutId,
                u = a.layout,
                l = a.visualElement;
              if (l && !l.getInstance() && l.mount(t), this.root.nodes.add(this), null === (o = this.parent) || void 0 === o || o.children.add(this), this.id && this.root.potentialNodes.delete(this.id), n && (u || s) && (this.isLayoutDirty = !0), e) {
                var c, f = function() {
                  return i.root.updateBlockedByResize = !1
                };
                e(t, (function() {
                  i.root.updateBlockedByResize = !0, clearTimeout(c), c = window.setTimeout(f, 250), D.hasAnimatedSinceResize && (D.hasAnimatedSinceResize = !1, i.nodes.forEach(Aa))
                }))
              }
              s && this.root.registerSharedNode(s, this), !1 !== this.options.animate && l && (s || u) && this.addEventListener("didUpdate", (function(t) {
                var e, n, o, a, s, u = t.delta,
                  c = t.hasLayoutChanged,
                  f = t.hasRelativeTargetChanged,
                  d = t.layout;
                if (i.isTreeAnimationBlocked()) return i.target = void 0, void(i.relativeTarget = void 0);
                var p = null !== (n = null !== (e = i.options.transition) && void 0 !== e ? e : l.getDefaultTransition()) && void 0 !== n ? n : Oa,
                  v = l.getProps(),
                  h = v.onLayoutAnimationStart,
                  m = v.onLayoutAnimationComplete,
                  g = !i.targetLayout || !va(i.targetLayout, d) || f,
                  y = !c && f;
                if ((null === (o = i.resumeFrom) || void 0 === o ? void 0 : o.instance) || y || c && (g || !i.currentAnimation)) {
                  i.resumeFrom && (i.resumingFrom = i.resumeFrom, i.resumingFrom.resumingFrom = void 0), i.setAnimationOrigin(u, y);
                  var x = (0, r.C3)((0, r.C3)({}, Qr(p, "layout")), {
                    onPlay: h,
                    onComplete: m
                  });
                  l.shouldReduceMotion && (x.delay = 0, x.type = !1), i.startAnimation(x)
                } else c || 0 !== i.animationProgress || i.finishAnimation(), i.isLead() && (null === (s = (a = i.options).onExitComplete) || void 0 === s || s.call(a));
                i.targetLayout = d
              }))
            }
          }, t.prototype.unmount = function() {
            var t, e;
            this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this), null === (t = this.getStack()) || void 0 === t || t.remove(this), null === (e = this.parent) || void 0 === e || e.children.delete(this), this.instance = void 0, dr.preRender(this.updateProjection)
          }, t.prototype.blockUpdate = function() {
            this.updateManuallyBlocked = !0
          }, t.prototype.unblockUpdate = function() {
            this.updateManuallyBlocked = !1
          }, t.prototype.isUpdateBlocked = function() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
          }, t.prototype.isTreeAnimationBlocked = function() {
            var t;
            return this.isAnimationBlocked || (null === (t = this.parent) || void 0 === t ? void 0 : t.isTreeAnimationBlocked()) || !1
          }, t.prototype.startUpdate = function() {
            var t;
            this.isUpdateBlocked() || (this.isUpdating = !0, null === (t = this.nodes) || void 0 === t || t.forEach(Ma))
          }, t.prototype.willUpdate = function(t) {
            var e, n, r;
            if (void 0 === t && (t = !0), this.root.isUpdateBlocked()) null === (n = (e = this.options).onExitComplete) || void 0 === n || n.call(e);
            else if (!this.root.isUpdating && this.root.startUpdate(), !this.isLayoutDirty) {
              this.isLayoutDirty = !0;
              for (var o = 0; o < this.path.length; o++) {
                var i = this.path[o];
                i.shouldResetTransform = !0, i.updateScroll()
              }
              var a = this.options,
                s = a.layoutId,
                u = a.layout;
              if (void 0 !== s || u) {
                var l = null === (r = this.options.visualElement) || void 0 === r ? void 0 : r.getProps().transformTemplate;
                this.prevTransformTemplateValue = null == l ? void 0 : l(this.latestValues, ""), this.updateSnapshot(), t && this.notifyListeners("willUpdate")
              }
            }
          }, t.prototype.didUpdate = function() {
            if (this.isUpdateBlocked()) return this.unblockUpdate(), this.clearAllSnapshots(), void this.nodes.forEach(Sa);
            this.isUpdating && (this.isUpdating = !1, this.potentialNodes.size && (this.potentialNodes.forEach(Ia), this.potentialNodes.clear()), this.nodes.forEach(Ta), this.nodes.forEach(Ca), this.nodes.forEach(wa), this.clearAllSnapshots(), pr.update(), pr.preRender(), pr.render())
          }, t.prototype.clearAllSnapshots = function() {
            this.nodes.forEach(Ea), this.sharedNodes.forEach(Ra)
          }, t.prototype.scheduleUpdateProjection = function() {
            yr.preRender(this.updateProjection, !1, !0)
          }, t.prototype.scheduleCheckAfterUnmount = function() {
            var t = this;
            yr.postRender((function() {
              t.isLayoutDirty ? t.root.didUpdate() : t.root.checkUpdateFailed()
            }))
          }, t.prototype.updateSnapshot = function() {
            if (!this.snapshot && this.instance) {
              var t = this.measure(),
                e = this.removeTransform(this.removeElementScroll(t));
              Fa(e), this.snapshot = {
                measured: t,
                layout: e,
                latestValues: {}
              }
            }
          }, t.prototype.updateLayout = function() {
            var t;
            if (this.instance && (this.updateScroll(), this.options.alwaysMeasureLayout && this.isLead() || this.isLayoutDirty)) {
              if (this.resumeFrom && !this.resumeFrom.instance)
                for (var e = 0; e < this.path.length; e++) this.path[e].updateScroll();
              var n = this.measure();
              Fa(n);
              var r = this.layout;
              this.layout = {
                measured: n,
                actual: this.removeElementScroll(n)
              }, this.layoutCorrected = ti(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.actual), null === (t = this.options.visualElement) || void 0 === t || t.notifyLayoutMeasure(this.layout.actual, null == r ? void 0 : r.actual)
            }
          }, t.prototype.updateScroll = function() {
            this.options.layoutScroll && this.instance && (this.isScrollRoot = i(this.instance), this.scroll = o(this.instance))
          }, t.prototype.resetTransform = function() {
            var t;
            if (a) {
              var e = this.isLayoutDirty || this.shouldResetTransform,
                n = this.projectionDelta && !pa(this.projectionDelta),
                r = null === (t = this.options.visualElement) || void 0 === t ? void 0 : t.getProps().transformTemplate,
                o = null == r ? void 0 : r(this.latestValues, ""),
                i = o !== this.prevTransformTemplateValue;
              e && (n || ii(this.latestValues) || i) && (a(this.instance, o), this.shouldResetTransform = !1, this.scheduleRender())
            }
          }, t.prototype.measure = function() {
            var t = this.options.visualElement;
            if (!t) return ti();
            var e = t.measureViewportBox(),
              n = this.root.scroll;
            return n && (fi(e.x, n.x), fi(e.y, n.y)), e
          }, t.prototype.removeElementScroll = function(t) {
            var e = ti();
            aa(e, t);
            for (var n = 0; n < this.path.length; n++) {
              var r = this.path[n],
                o = r.scroll,
                i = r.options,
                a = r.isScrollRoot;
              if (r !== this.root && o && i.layoutScroll) {
                if (a) {
                  aa(e, t);
                  var s = this.root.scroll;
                  s && (fi(e.x, -s.x), fi(e.y, -s.y))
                }
                fi(e.x, o.x), fi(e.y, o.y)
              }
            }
            return e
          }, t.prototype.applyTransform = function(t, e) {
            void 0 === e && (e = !1);
            var n = ti();
            aa(n, t);
            for (var r = 0; r < this.path.length; r++) {
              var o = this.path[r];
              !e && o.options.layoutScroll && o.scroll && o !== o.root && hi(n, {
                x: -o.scroll.x,
                y: -o.scroll.y
              }), ii(o.latestValues) && hi(n, o.latestValues)
            }
            return ii(this.latestValues) && hi(n, this.latestValues), n
          }, t.prototype.removeTransform = function(t) {
            var e, n = ti();
            aa(n, t);
            for (var r = 0; r < this.path.length; r++) {
              var o = this.path[r];
              if (o.instance && ii(o.latestValues)) {
                oi(o.latestValues) && o.updateSnapshot();
                var i = ti();
                aa(i, o.measure()), fa(n, o.latestValues, null === (e = o.snapshot) || void 0 === e ? void 0 : e.layout, i)
              }
            }
            return ii(this.latestValues) && fa(n, this.latestValues), n
          }, t.prototype.setTargetDelta = function(t) {
            this.targetDelta = t, this.root.scheduleUpdateProjection()
          }, t.prototype.setOptions = function(t) {
            var e;
            this.options = (0, r.C3)((0, r.C3)((0, r.C3)({}, this.options), t), {
              crossfade: null === (e = t.crossfade) || void 0 === e || e
            })
          }, t.prototype.clearMeasurements = function() {
            this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
          }, t.prototype.resolveTargetDelta = function() {
            var t, e, n, r, o = this.options,
              i = o.layout,
              a = o.layoutId;
            this.layout && (i || a) && (this.targetDelta || this.relativeTarget || (this.relativeParent = this.getClosestProjectingParent(), this.relativeParent && this.relativeParent.layout && (this.relativeTarget = ti(), this.relativeTargetOrigin = ti(), _o(this.relativeTargetOrigin, this.layout.actual, this.relativeParent.layout.actual), aa(this.relativeTarget, this.relativeTargetOrigin))), (this.relativeTarget || this.targetDelta) && (this.target || (this.target = ti(), this.targetWithTransforms = ti()), this.relativeTarget && this.relativeTargetOrigin && (null === (t = this.relativeParent) || void 0 === t ? void 0 : t.target) ? (e = this.target, n = this.relativeTarget, r = this.relativeParent.target, Yo(e.x, n.x, r.x), Yo(e.y, n.y, r.y)) : this.targetDelta ? (Boolean(this.resumingFrom) ? this.target = this.applyTransform(this.layout.actual) : aa(this.target, this.layout.actual), ci(this.target, this.targetDelta)) : aa(this.target, this.layout.actual), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, this.relativeParent = this.getClosestProjectingParent(), this.relativeParent && Boolean(this.relativeParent.resumingFrom) === Boolean(this.resumingFrom) && !this.relativeParent.options.layoutScroll && this.relativeParent.target && (this.relativeTarget = ti(), this.relativeTargetOrigin = ti(), _o(this.relativeTargetOrigin, this.target, this.relativeParent.target), aa(this.relativeTarget, this.relativeTargetOrigin)))))
          }, t.prototype.getClosestProjectingParent = function() {
            if (this.parent && !ii(this.parent.latestValues)) return (this.parent.relativeTarget || this.parent.targetDelta) && this.parent.layout ? this.parent : this.parent.getClosestProjectingParent()
          }, t.prototype.calcProjection = function() {
            var t, e = this.options,
              n = e.layout,
              r = e.layoutId;
            if (this.isTreeAnimating = Boolean((null === (t = this.parent) || void 0 === t ? void 0 : t.isTreeAnimating) || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), this.layout && (n || r)) {
              var o = this.getLead();
              aa(this.layoutCorrected, this.layout.actual),
                function(t, e, n, r) {
                  var o, i;
                  void 0 === r && (r = !1);
                  var a = n.length;
                  if (a) {
                    var s, u;
                    e.x = e.y = 1;
                    for (var l = 0; l < a; l++) u = (s = n[l]).projectionDelta, "contents" !== (null === (i = null === (o = s.instance) || void 0 === o ? void 0 : o.style) || void 0 === i ? void 0 : i.display) && (r && s.options.layoutScroll && s.scroll && s !== s.root && hi(t, {
                      x: -s.scroll.x,
                      y: -s.scroll.y
                    }), u && (e.x *= u.x.scale, e.y *= u.y.scale, ci(t, u)), r && ii(s.latestValues) && hi(t, s.latestValues))
                  }
                }(this.layoutCorrected, this.treeScale, this.path, Boolean(this.resumingFrom) || this !== o);
              var i = o.target;
              if (i) {
                this.projectionDelta || (this.projectionDelta = Qo(), this.projectionDeltaWithTransform = Qo());
                var a = this.treeScale.x,
                  s = this.treeScale.y,
                  u = this.projectionTransform;
                Ho(this.projectionDelta, this.layoutCorrected, i, this.latestValues), this.projectionTransform = ga(this.projectionDelta, this.treeScale), this.projectionTransform === u && this.treeScale.x === a && this.treeScale.y === s || (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", i))
              }
            }
          }, t.prototype.hide = function() {
            this.isVisible = !1
          }, t.prototype.show = function() {
            this.isVisible = !0
          }, t.prototype.scheduleRender = function(t) {
            var e, n, r;
            void 0 === t && (t = !0), null === (n = (e = this.options).scheduleRender) || void 0 === n || n.call(e), t && (null === (r = this.getStack()) || void 0 === r || r.scheduleRender()), this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
          }, t.prototype.setAnimationOrigin = function(t, e) {
            var n, o = this;
            void 0 === e && (e = !1);
            var i = this.snapshot,
              a = (null == i ? void 0 : i.latestValues) || {},
              s = (0, r.C3)({}, this.latestValues),
              u = Qo();
            this.relativeTarget = this.relativeTargetOrigin = void 0, this.attemptToResolveRelativeTarget = !e;
            var l = ti(),
              c = null == i ? void 0 : i.isShared,
              f = ((null === (n = this.getStack()) || void 0 === n ? void 0 : n.members.length) || 0) <= 1,
              d = Boolean(c && !f && !0 === this.options.crossfade && !this.path.some(Da));
            this.animationProgress = 0, this.mixTargetDelta = function(e) {
              var n, r, i, p, v, h = e / 1e3;
              La(u.x, t.x, h), La(u.y, t.y, h), o.setTargetDelta(u), o.relativeTarget && o.relativeTargetOrigin && o.layout && (null === (n = o.relativeParent) || void 0 === n ? void 0 : n.layout) && (_o(l, o.layout.actual, o.relativeParent.layout.actual), r = o.relativeTarget, i = o.relativeTargetOrigin, p = l, v = h, ka(r.x, i.x, p.x, v), ka(r.y, i.y, p.y, v)), c && (o.animationValues = s, function(t, e, n, r, o, i) {
                var a, s, u, l;
                o ? (t.opacity = an(0, null !== (a = n.opacity) && void 0 !== a ? a : 1, na(r)), t.opacityExit = an(null !== (s = e.opacity) && void 0 !== s ? s : 1, 0, ra(r))) : i && (t.opacity = an(null !== (u = e.opacity) && void 0 !== u ? u : 1, null !== (l = n.opacity) && void 0 !== l ? l : 1, r));
                for (var c = 0; c < Ji; c++) {
                  var f = "border".concat(Ki[c], "Radius"),
                    d = ea(e, f),
                    p = ea(n, f);
                  void 0 === d && void 0 === p || (d || (d = 0), p || (p = 0), 0 === d || 0 === p || ta(d) === ta(p) ? (t[f] = Math.max(an(Qi(d), Qi(p), r), 0), (ct.test(p) || ct.test(d)) && (t[f] += "%")) : t[f] = p)
                }(e.rotate || n.rotate) && (t.rotate = an(e.rotate || 0, n.rotate || 0, r))
              }(s, a, o.latestValues, h, d, f)), o.root.scheduleUpdateProjection(), o.scheduleRender(), o.animationProgress = h
            }, this.mixTargetDelta(0)
          }, t.prototype.startAnimation = function(t) {
            var e, n, o = this;
            this.notifyListeners("animationStart"), null === (e = this.currentAnimation) || void 0 === e || e.stop(), this.resumingFrom && (null === (n = this.resumingFrom.currentAnimation) || void 0 === n || n.stop()), this.pendingAnimation && (dr.update(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = yr.update((function() {
              D.hasAnimatedSinceResize = !0, o.currentAnimation = Zi(0, 1e3, (0, r.C3)((0, r.C3)({}, t), {
                onUpdate: function(e) {
                  var n;
                  o.mixTargetDelta(e), null === (n = t.onUpdate) || void 0 === n || n.call(t, e)
                },
                onComplete: function() {
                  var e;
                  null === (e = t.onComplete) || void 0 === e || e.call(t), o.completeAnimation()
                }
              })), o.resumingFrom && (o.resumingFrom.currentAnimation = o.currentAnimation), o.pendingAnimation = void 0
            }))
          }, t.prototype.completeAnimation = function() {
            var t;
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0), null === (t = this.getStack()) || void 0 === t || t.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
          }, t.prototype.finishAnimation = function() {
            var t;
            this.currentAnimation && (null === (t = this.mixTargetDelta) || void 0 === t || t.call(this, 1e3), this.currentAnimation.stop()), this.completeAnimation()
          }, t.prototype.applyTransformsToTarget = function() {
            var t = this.getLead(),
              e = t.targetWithTransforms,
              n = t.target,
              r = t.layout,
              o = t.latestValues;
            e && n && r && (aa(e, n), hi(e, o), Ho(this.projectionDeltaWithTransform, this.layoutCorrected, e, o))
          }, t.prototype.registerSharedNode = function(t, e) {
            var n, r, o;
            this.sharedNodes.has(t) || this.sharedNodes.set(t, new ha), this.sharedNodes.get(t).add(e), e.promote({
              transition: null === (n = e.options.initialPromotionConfig) || void 0 === n ? void 0 : n.transition,
              preserveFollowOpacity: null === (o = null === (r = e.options.initialPromotionConfig) || void 0 === r ? void 0 : r.shouldPreserveFollowOpacity) || void 0 === o ? void 0 : o.call(r, e)
            })
          }, t.prototype.isLead = function() {
            var t = this.getStack();
            return !t || t.lead === this
          }, t.prototype.getLead = function() {
            var t;
            return this.options.layoutId && (null === (t = this.getStack()) || void 0 === t ? void 0 : t.lead) || this
          }, t.prototype.getPrevLead = function() {
            var t;
            return this.options.layoutId ? null === (t = this.getStack()) || void 0 === t ? void 0 : t.prevLead : void 0
          }, t.prototype.getStack = function() {
            var t = this.options.layoutId;
            if (t) return this.root.sharedNodes.get(t)
          }, t.prototype.promote = function(t) {
            var e = void 0 === t ? {} : t,
              n = e.needsReset,
              r = e.transition,
              o = e.preserveFollowOpacity,
              i = this.getStack();
            i && i.promote(this, o), n && (this.projectionDelta = void 0, this.needsReset = !0), r && this.setOptions({
              transition: r
            })
          }, t.prototype.relegate = function() {
            var t = this.getStack();
            return !!t && t.relegate(this)
          }, t.prototype.resetRotation = function() {
            var t = this.options.visualElement;
            if (t) {
              for (var e = !1, n = {}, r = 0; r < H.length; r++) {
                var o = "rotate" + H[r];
                t.getStaticValue(o) && (e = !0, n[o] = t.getStaticValue(o), t.setStaticValue(o, 0))
              }
              if (e) {
                for (var o in null == t || t.syncRender(), n) t.setStaticValue(o, n[o]);
                t.scheduleRender()
              }
            }
          }, t.prototype.getProjectionStyles = function(t) {
            var e, n, r, o, i, a;
            void 0 === t && (t = {});
            var s = {};
            if (!this.instance || this.isSVG) return s;
            if (!this.isVisible) return {
              visibility: "hidden"
            };
            s.visibility = "";
            var u = null === (e = this.options.visualElement) || void 0 === e ? void 0 : e.getProps().transformTemplate;
            if (this.needsReset) return this.needsReset = !1, s.opacity = "", s.pointerEvents = _t(t.pointerEvents) || "", s.transform = u ? u(this.latestValues, "") : "none", s;
            var l = this.getLead();
            if (!this.projectionDelta || !this.layout || !l.target) {
              var c = {};
              return this.options.layoutId && (c.opacity = null !== (n = this.latestValues.opacity) && void 0 !== n ? n : 1, c.pointerEvents = _t(t.pointerEvents) || ""), this.hasProjected && !ii(this.latestValues) && (c.transform = u ? u({}, "") : "none", this.hasProjected = !1), c
            }
            var f = l.animationValues || l.latestValues;
            this.applyTransformsToTarget(), s.transform = ga(this.projectionDeltaWithTransform, this.treeScale, f), u && (s.transform = u(f, s.transform));
            var d = this.projectionDelta,
              p = d.x,
              v = d.y;
            for (var h in s.transformOrigin = "".concat(100 * p.origin, "% ").concat(100 * v.origin, "% 0"), l.animationValues ? s.opacity = l === this ? null !== (o = null !== (r = f.opacity) && void 0 !== r ? r : this.latestValues.opacity) && void 0 !== o ? o : 1 : this.preserveOpacity ? this.latestValues.opacity : f.opacityExit : s.opacity = l === this ? null !== (i = f.opacity) && void 0 !== i ? i : "" : null !== (a = f.opacityExit) && void 0 !== a ? a : 0, X)
              if (void 0 !== f[h]) {
                var m = X[h],
                  g = m.correct,
                  y = m.applyTo,
                  x = g(f[h], l);
                if (y)
                  for (var b = y.length, C = 0; C < b; C++) s[y[C]] = x;
                else s[h] = x
              } return this.options.layoutId && (s.pointerEvents = l === this ? _t(t.pointerEvents) || "" : "none"), s
          }, t.prototype.clearSnapshot = function() {
            this.resumeFrom = this.snapshot = void 0
          }, t.prototype.resetTree = function() {
            this.root.nodes.forEach((function(t) {
              var e;
              return null === (e = t.currentAnimation) || void 0 === e ? void 0 : e.stop()
            })), this.root.nodes.forEach(Sa), this.root.sharedNodes.clear()
          }, t
        }()
      }

      function Ca(t) {
        t.updateLayout()
      }

      function wa(t) {
        var e, n, r, o, i = null !== (n = null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) && void 0 !== n ? n : t.snapshot;
        if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
          var a = t.layout,
            s = a.actual,
            u = a.measured;
          "size" === t.options.animationType ? ei((function(t) {
            var e = i.isShared ? i.measured[t] : i.layout[t],
              n = zo(e);
            e.min = s[t].min, e.max = e.min + n
          })) : "position" === t.options.animationType && ei((function(t) {
            var e = i.isShared ? i.measured[t] : i.layout[t],
              n = zo(s[t]);
            e.max = e.min + n
          }));
          var l = Qo();
          Ho(l, s, i.layout);
          var c = Qo();
          i.isShared ? Ho(c, t.applyTransform(u, !0), i.measured) : Ho(c, s, i.layout);
          var f = !pa(l),
            d = !1;
          if (!t.resumeFrom && (t.relativeParent = t.getClosestProjectingParent(), t.relativeParent && !t.relativeParent.resumeFrom)) {
            var p = t.relativeParent,
              v = p.snapshot,
              h = p.layout;
            if (v && h) {
              var m = ti();
              _o(m, i.layout, v.layout);
              var g = ti();
              _o(g, s, h.actual), va(m, g) || (d = !0)
            }
          }
          t.notifyListeners("didUpdate", {
            layout: s,
            snapshot: i,
            delta: c,
            layoutDelta: l,
            hasLayoutChanged: f,
            hasRelativeTargetChanged: d
          })
        } else t.isLead() && (null === (o = (r = t.options).onExitComplete) || void 0 === o || o.call(r));
        t.options.transition = void 0
      }

      function Ea(t) {
        t.clearSnapshot()
      }

      function Sa(t) {
        t.clearMeasurements()
      }

      function Ta(t) {
        var e = t.options.visualElement;
        (null == e ? void 0 : e.getProps().onBeforeLayoutMeasure) && e.notifyBeforeLayoutMeasure(), t.resetTransform()
      }

      function Aa(t) {
        t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0
      }

      function Pa(t) {
        t.resolveTargetDelta()
      }

      function Va(t) {
        t.calcProjection()
      }

      function Ma(t) {
        t.resetRotation()
      }

      function Ra(t) {
        t.removeLeadSnapshot()
      }

      function La(t, e, n) {
        t.translate = an(e.translate, 0, n), t.scale = an(e.scale, 1, n), t.origin = e.origin, t.originPoint = e.originPoint
      }

      function ka(t, e, n, r) {
        t.min = an(e.min, n.min, r), t.max = an(e.max, n.max, r)
      }

      function Da(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit
      }
      var Oa = {
        duration: .45,
        ease: [.4, 0, .1, 1]
      };

      function Ia(t, e) {
        for (var n = t.root, r = t.path.length - 1; r >= 0; r--)
          if (Boolean(t.path[r].instance)) {
            n = t.path[r];
            break
          } var o = (n && n !== t.root ? n.instance : document).querySelector('[data-projection-id="'.concat(e, '"]'));
        o && t.mount(o, !0)
      }

      function ja(t) {
        t.min = Math.round(t.min), t.max = Math.round(t.max)
      }

      function Fa(t) {
        ja(t.x), ja(t.y)
      }
      var Ba = ba({
          attachResizeListener: function(t, e) {
            return ee(t, "resize", e)
          },
          measureScroll: function() {
            return {
              x: document.documentElement.scrollLeft || document.body.scrollLeft,
              y: document.documentElement.scrollTop || document.body.scrollTop
            }
          },
          checkIsScrollRoot: function() {
            return !0
          }
        }),
        Ua = {
          current: void 0
        },
        Na = ba({
          measureScroll: function(t) {
            return {
              x: t.scrollLeft,
              y: t.scrollTop
            }
          },
          defaultParent: function() {
            if (!Ua.current) {
              var t = new Ba(0, {});
              t.mount(window), t.setOptions({
                layoutScroll: !0
              }), Ua.current = t
            }
            return Ua.current
          },
          resetTransform: function(t, e) {
            t.style.transform = null != e ? e : "none"
          },
          checkIsScrollRoot: function(t) {
            return Boolean("fixed" === window.getComputedStyle(t).position)
          }
        }),
        za = (0, r.C3)((0, r.C3)((0, r.C3)((0, r.C3)({}, Mo), Be), bi), $i),
        Xa = U((function(t, e) {
          return te(t, e, za, Xi, Na)
        }));

      function Wa(t) {
        return B(te(t, {
          forwardMotionProps: !1
        }, za, Xi, Na))
      }
      var Ha = U(te);

      function Ya() {
        var t = (0, o.useRef)(!1);
        return x((function() {
          return t.current = !0,
            function() {
              t.current = !1
            }
        }), []), t
      }

      function Ga() {
        var t = Ya(),
          e = (0, r.o5)((0, o.useState)(0), 2),
          n = e[0],
          i = e[1],
          a = (0, o.useCallback)((function() {
            t.current && i(n + 1)
          }), [n]);
        return [(0, o.useCallback)((function() {
          return yr.postRender(a)
        }), [a]), n]
      }
      var _a = function(t) {
        var e = t.children,
          n = t.initial,
          i = t.isPresent,
          a = t.onExitComplete,
          s = t.custom,
          u = t.presenceAffectsLayout,
          l = k(qa),
          c = ze(),
          f = (0, o.useMemo)((function() {
            return {
              id: c,
              initial: n,
              isPresent: i,
              custom: s,
              onExitComplete: function(t) {
                var e, n;
                l.set(t, !0);
                try {
                  for (var o = (0, r.gR)(l.values()), i = o.next(); !i.done; i = o.next())
                    if (!i.value) return
                } catch (t) {
                  e = {
                    error: t
                  }
                } finally {
                  try {
                    i && !i.done && (n = o.return) && n.call(o)
                  } finally {
                    if (e) throw e.error
                  }
                }
                null == a || a()
              },
              register: function(t) {
                return l.set(t, !1),
                  function() {
                    return l.delete(t)
                  }
              }
            }
          }), u ? void 0 : [i]);
        return (0, o.useMemo)((function() {
          l.forEach((function(t, e) {
            return l.set(e, !1)
          }))
        }), [i]), o.useEffect((function() {
          !i && !l.size && (null == a || a())
        }), [i]), o.createElement(g.Provider, {
          value: f
        }, e)
      };

      function qa() {
        return new Map
      }
      var $a = function(t) {
          return t.key || ""
        },
        Za = function(t) {
          var e = t.children,
            n = t.custom,
            i = t.initial,
            s = void 0 === i || i,
            u = t.onExitComplete,
            l = t.exitBeforeEnter,
            c = t.presenceAffectsLayout,
            f = void 0 === c || c,
            d = (0, r.o5)(Ga(), 1)[0],
            p = (0, o.useContext)(I).forceRender;
          p && (d = p);
          var v = Ya(),
            h = function(t) {
              var e = [];
              return o.Children.forEach(t, (function(t) {
                (0, o.isValidElement)(t) && e.push(t)
              })), e
            }(e),
            m = h,
            g = new Set,
            y = (0, o.useRef)(m),
            b = (0, o.useRef)(new Map).current,
            C = (0, o.useRef)(!0);
          if (x((function() {
              C.current = !1,
                function(t, e) {
                  t.forEach((function(t) {
                    var n = $a(t);
                    e.set(n, t)
                  }))
                }(h, b), y.current = m
            })), Te((function() {
              C.current = !0, b.clear(), g.clear()
            })), C.current) return o.createElement(o.Fragment, null, m.map((function(t) {
            return o.createElement(_a, {
              key: $a(t),
              isPresent: !0,
              initial: !!s && void 0,
              presenceAffectsLayout: f
            }, t)
          })));
          m = (0, r.Mt)([], (0, r.o5)(m), !1);
          for (var w = y.current.map($a), E = h.map($a), S = w.length, T = 0; T < S; T++) {
            var A = w[T]; - 1 === E.indexOf(A) && g.add(A)
          }
          return l && g.size && (m = []), g.forEach((function(t) {
            if (-1 === E.indexOf(t)) {
              var e = b.get(t);
              if (e) {
                var r = w.indexOf(t);
                m.splice(r, 0, o.createElement(_a, {
                  key: $a(e),
                  isPresent: !1,
                  onExitComplete: function() {
                    b.delete(t), g.delete(t);
                    var e = y.current.findIndex((function(e) {
                      return e.key === t
                    }));
                    if (y.current.splice(e, 1), !g.size) {
                      if (y.current = h, !1 === v.current) return;
                      d(), u && u()
                    }
                  },
                  custom: n,
                  presenceAffectsLayout: f
                }, e))
              }
            }
          })), m = m.map((function(t) {
            var e = t.key;
            return g.has(e) ? t : o.createElement(_a, {
              key: $a(t),
              isPresent: !0,
              presenceAffectsLayout: f
            }, t)
          })), "production" !== a && l && m.length > 1 && console.warn("You're attempting to animate multiple children within AnimatePresence, but its exitBeforeEnter prop is set to true. This will lead to odd visual behaviour."), o.createElement(o.Fragment, null, g.size ? m : m.map((function(t) {
            return (0, o.cloneElement)(t)
          })))
        },
        Ka = (0, o.createContext)(null),
        Ja = function(t) {
          return !t.isLayoutDirty && t.willUpdate(!1)
        };
      var Qa = function(t) {
          return !0 === t
        },
        ts = function(t) {
          var e, n, i = t.children,
            a = t.id,
            s = t.inheritId,
            u = t.inherit,
            l = void 0 === u || u;
          void 0 !== s && (l = s);
          var c, f, d, p = (0, o.useContext)(I),
            v = (0, o.useContext)(Ka),
            h = (0, r.o5)(Ga(), 2),
            m = h[0],
            g = h[1],
            y = (0, o.useRef)(null),
            x = null !== (e = p.id) && void 0 !== e ? e : v;
          null === y.current && (function(t) {
            return Qa(!0 === t) || "id" === t
          }(l) && x && (a = a ? x + "-" + a : x), y.current = {
            id: a,
            group: Qa(l) && null !== (n = null == p ? void 0 : p.group) && void 0 !== n ? n : (c = new Set, f = new WeakMap, d = function() {
              return c.forEach(Ja)
            }, {
              add: function(t) {
                c.add(t), f.set(t, t.addEventListener("willUpdate", d))
              },
              remove: function(t) {
                var e;
                c.delete(t), null === (e = f.get(t)) || void 0 === e || e(), f.delete(t), d()
              },
              dirty: d
            })
          });
          var b = (0, o.useMemo)((function() {
            return (0, r.C3)((0, r.C3)({}, y.current), {
              forceRender: m
            })
          }), [g]);
          return o.createElement(I.Provider, {
            value: b
          }, i)
        },
        es = 0,
        ns = function(t) {
          var e = t.children;
          return o.useEffect((function() {
            (0, c.s)(!1, "AnimateSharedLayout is deprecated: https://www.framer.com/docs/guide-upgrade/##shared-layout-animations")
          }), []), o.createElement(ts, {
            id: k((function() {
              return "asl-".concat(es++)
            }))
          }, e)
        };

      function rs(t) {
        var e = t.children,
          n = t.isValidProp,
          i = (0, r.sX)(t, ["children", "isValidProp"]);
        n && Pt(n), (i = (0, r.C3)((0, r.C3)({}, (0, o.useContext)(v)), i)).isStatic = k((function() {
          return i.isStatic
        }));
        var a = (0, o.useMemo)((function() {
          return i
        }), [JSON.stringify(i.transition), i.transformPagePoint, i.reducedMotion]);
        return o.createElement(v.Provider, {
          value: a
        }, e)
      }

      function os(t) {
        var e = t.children,
          n = t.features,
          i = t.strict,
          a = void 0 !== i && i,
          s = (0, r.o5)((0, o.useState)(!is(n)), 2)[1],
          u = (0, o.useRef)(void 0);
        if (!is(n)) {
          var c = n.renderer,
            d = (0, r.sX)(n, ["renderer"]);
          u.current = c, l(d)
        }
        return (0, o.useEffect)((function() {
          is(n) && n().then((function(t) {
            var e = t.renderer;
            l((0, r.sX)(t, ["renderer"])), u.current = e, s(!0)
          }))
        }), []), o.createElement(f.Provider, {
          value: {
            renderer: u.current,
            strict: a
          }
        }, e)
      }

      function is(t) {
        return "function" == typeof t
      }
      var as = (0, o.createContext)(null);
      var ss = (0, o.forwardRef)((function(t, e) {
        var n = t.children,
          i = t.as,
          a = void 0 === i ? "ul" : i,
          s = t.axis,
          u = void 0 === s ? "y" : s,
          l = t.onReorder,
          f = t.values,
          d = (0, r.sX)(t, ["children", "as", "axis", "onReorder", "values"]),
          p = k((function() {
            return Xa(a)
          })),
          v = [],
          h = (0, o.useRef)(!1);
        (0, c.O)(Boolean(f), "Reorder.Group must be provided a values prop");
        var m = {
          axis: u,
          registerItem: function(t, e) {
            e && -1 === v.findIndex((function(e) {
              return t === e.value
            })) && (v.push({
              value: t,
              layout: e[u]
            }), v.sort(ls))
          },
          updateOrder: function(t, e, n) {
            if (!h.current) {
              var o = function(t, e, n, o) {
                if (!o) return t;
                var i = t.findIndex((function(t) {
                  return t.value === e
                }));
                if (-1 === i) return t;
                var a = o > 0 ? 1 : -1,
                  s = t[i + a];
                if (!s) return t;
                var u = t[i],
                  l = s.layout,
                  c = an(l.min, l.max, .5);
                return 1 === a && u.layout.max + n > c || -1 === a && u.layout.min + n < c ? function(t, e, n) {
                  var o = (0, r.o5)(t).slice(0),
                    i = e < 0 ? o.length + e : e;
                  if (i >= 0 && i < o.length) {
                    var a = n < 0 ? o.length + n : n,
                      s = (0, r.o5)(o.splice(e, 1), 1)[0];
                    o.splice(a, 0, s)
                  }
                  return o
                }(t, i, i + a) : t
              }(v, t, e, n);
              v !== o && (h.current = !0, l(o.map(us).filter((function(t) {
                return -1 !== f.indexOf(t)
              }))))
            }
          }
        };
        return (0, o.useEffect)((function() {
          h.current = !1
        })), o.createElement(p, (0, r.C3)({}, d, {
          ref: e
        }), o.createElement(as.Provider, {
          value: m
        }, n))
      }));

      function us(t) {
        return t.value
      }

      function ls(t, e) {
        return t.layout.min - e.layout.min
      }

      function cs(t) {
        var e = k((function() {
          return so(t)
        }));
        if ((0, o.useContext)(v).isStatic) {
          var n = (0, r.o5)((0, o.useState)(t), 2)[1];
          (0, o.useEffect)((function() {
            return e.onChange(n)
          }), [])
        }
        return e
      }
      var fs = function(t) {
        return function(t) {
          return "object" == typeof t && t.mix
        }(t) ? t.mix : void 0
      };

      function ds() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        var n = !Array.isArray(t[0]),
          o = n ? 0 : -1,
          i = t[0 + o],
          a = t[1 + o],
          s = t[2 + o],
          u = t[3 + o],
          l = jn(a, s, (0, r.C3)({
            mixer: fs(s[0])
          }, u));
        return n ? l(i) : l
      }

      function ps(t, e) {
        var n = cs(e()),
          r = function() {
            return n.set(e())
          };
        return r(),
          function(t, e) {
            x((function() {
              var n = t.map((function(t) {
                return t.onChange(e)
              }));
              return function() {
                return n.forEach((function(t) {
                  return t()
                }))
              }
            }))
          }(t, (function() {
            return yr.update(r, !1, !0)
          })), n
      }

      function vs(t, e, n, o) {
        var i = "function" == typeof e ? e : ds(e, n, o);
        return Array.isArray(t) ? hs(t, i) : hs([t], (function(t) {
          var e = (0, r.o5)(t, 1)[0];
          return i(e)
        }))
      }

      function hs(t, e) {
        var n = k((function() {
          return []
        }));
        return ps(t, (function() {
          n.length = 0;
          for (var r = t.length, o = 0; o < r; o++) n[o] = t[o].get();
          return e(n)
        }))
      }

      function ms(t, e) {
        return void 0 === e && (e = 0), J(t) ? t : cs(e)
      }
      var gs = (0, o.forwardRef)((function(t, e) {
          var n = t.children,
            i = t.style,
            a = t.value,
            s = t.as,
            u = void 0 === s ? "li" : s,
            l = t.onDrag,
            f = t.layout,
            d = void 0 === f || f,
            p = (0, r.sX)(t, ["children", "style", "value", "as", "onDrag", "layout"]),
            v = k((function() {
              return Xa(u)
            })),
            h = (0, o.useContext)(as),
            m = {
              x: ms(null == i ? void 0 : i.x),
              y: ms(null == i ? void 0 : i.y)
            },
            g = vs([m.x, m.y], (function(t) {
              var e = (0, r.o5)(t, 2),
                n = e[0],
                o = e[1];
              return n || o ? 1 : "unset"
            })),
            y = (0, o.useRef)(null);
          (0, c.O)(Boolean(h), "Reorder.Item must be a child of Reorder.Group");
          var x = h,
            b = x.axis,
            C = x.registerItem,
            w = x.updateOrder;
          return (0, o.useEffect)((function() {
            C(a, y.current)
          }), [h]), o.createElement(v, (0, r.C3)({
            drag: b
          }, p, {
            dragSnapToOrigin: !0,
            style: (0, r.C3)((0, r.C3)({}, i), {
              x: m.x,
              y: m.y,
              zIndex: g
            }),
            layout: d,
            onDrag: function(t, e) {
              var n = e.velocity;
              n[b] && w(a, m[b].get(), n[b]), null == l || l(t, e)
            },
            onLayoutMeasure: function(t) {
              y.current = t
            },
            ref: e
          }), n)
        })),
        ys = {
          Group: ss,
          Item: gs
        },
        xs = (0, r.C3)((0, r.C3)({
          renderer: Xi
        }, Mo), Be),
        bs = (0, r.C3)((0, r.C3)((0, r.C3)((0, r.C3)({}, xs), bi), $i), {
          projectionNodeConstructor: Na
        });

      function Cs(t) {
        for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        var r = t.length;
        return ps(e, (function() {
          for (var n = "", o = 0; o < r; o++) n += t[o], e[o] && (n += e[o].get());
          return n
        }))
      }

      function ws(t, e) {
        void 0 === e && (e = {});
        var n = (0, o.useContext)(v).isStatic,
          i = (0, o.useRef)(null),
          a = cs(J(t) ? t.get() : t);
        return (0, o.useMemo)((function() {
            return a.attach((function(t, o) {
              return n ? o(t) : (i.current && i.current.stop(), i.current = Cr((0, r.C3)((0, r.C3)({
                from: a.get(),
                to: t,
                velocity: a.getVelocity()
              }, e), {
                onUpdate: o
              })), a.get())
            }))
          }), [JSON.stringify(e)]),
          function(t, e) {
            x((function() {
              if (J(t)) return t.onChange(e)
            }), [e])
          }(t, (function(t) {
            return a.set(parseFloat(t))
          })), a
      }

      function Es(t) {
        var e = cs(t.getVelocity());
        return (0, o.useEffect)((function() {
          return t.velocityUpdateSubscribers.add((function(t) {
            e.set(t)
          }))
        }), [t]), e
      }

      function Ss(t, e) {
        var n;
        return "string" == typeof t ? e ? (null !== (n = e[t]) && void 0 !== n || (e[t] = document.querySelectorAll(t)), t = e[t]) : t = document.querySelectorAll(t) : t instanceof Element && (t = [t]), Array.from(t || [])
      }
      const Ts = new WeakMap;
      let As;

      function Ps(t) {
        let {
          target: e,
          contentRect: n,
          borderBoxSize: r
        } = t;
        var o;
        null === (o = Ts.get(e)) || void 0 === o || o.forEach((t => {
          t({
            target: e,
            contentSize: n,
            get size() {
              return function(t, e) {
                if (e) {
                  const {
                    inlineSize: t,
                    blockSize: n
                  } = e[0];
                  return {
                    width: t,
                    height: n
                  }
                }
                return t instanceof SVGElement && "getBBox" in t ? t.getBBox() : {
                  width: t.offsetWidth,
                  height: t.offsetHeight
                }
              }(e, r)
            }
          })
        }))
      }

      function Vs(t) {
        t.forEach(Ps)
      }
      const Ms = new Set;
      let Rs;
      var Ls = n(42264),
        ks = n(34652);
      const Ds = 50,
        Os = () => ({
          time: 0,
          x: {
            current: 0,
            offset: [],
            progress: 0,
            scrollLength: 0,
            targetOffset: 0,
            targetLength: 0,
            containerLength: 0,
            velocity: 0
          },
          y: {
            current: 0,
            offset: [],
            progress: 0,
            scrollLength: 0,
            targetOffset: 0,
            targetLength: 0,
            containerLength: 0,
            velocity: 0
          }
        }),
        Is = {
          x: {
            length: "Width",
            position: "Left"
          },
          y: {
            length: "Height",
            position: "Top"
          }
        };

      function js(t, e, n, r) {
        const o = n[e],
          {
            length: i,
            position: a
          } = Is[e],
          s = o.current,
          u = n.time;
        o.current = t["scroll" + a], o.scrollLength = t["scroll" + i] - t["client" + i], o.offset.length = 0, o.offset[0] = 0, o.offset[1] = o.scrollLength, o.progress = (0, Ls.o)(0, o.scrollLength, o.current);
        const l = r - u;
        o.velocity = l > Ds ? 0 : (0, ks.G)(o.current - s, l)
      }
      var Fs = n(78508),
        Bs = n(86440),
        Us = n(64760);
      const Ns = {
        Enter: [
          [0, 1],
          [1, 1]
        ],
        Exit: [
          [0, 0],
          [1, 0]
        ],
        Any: [
          [1, 0],
          [0, 1]
        ],
        All: [
          [0, 0],
          [1, 1]
        ]
      };
      var zs = n(13416),
        Xs = n(94648);
      const Ws = {
        start: 0,
        center: .5,
        end: 1
      };

      function Hs(t, e) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          r = 0;
        if (void 0 !== Ws[t] && (t = Ws[t]), (0, Xs.c)(t)) {
          const e = parseFloat(t);
          t.endsWith("px") ? r = e : t.endsWith("%") ? t = e / 100 : t.endsWith("vw") ? r = e / 100 * document.documentElement.clientWidth : t.endsWith("vh") ? r = e / 100 * document.documentElement.clientHeight : t = e
        }
        return (0, zs.I)(t) && (r = e * t), n + r
      }
      const Ys = [0, 0];

      function Gs(t, e, n, r) {
        let o = Array.isArray(t) ? t : Ys,
          i = 0,
          a = 0;
        return (0, zs.I)(t) ? o = [t, t] : (0, Xs.c)(t) && (o = (t = t.trim()).includes(" ") ? t.split(" ") : [t, Ws[t] ? t : "0"]), i = Hs(o[0], n, r), a = Hs(o[1], e), i - a
      }
      const _s = {
        x: 0,
        y: 0
      };

      function qs(t, e, n) {
        let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        const o = r.axis || "y";
        return {
          measure: () => function(t) {
            let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t,
              n = arguments.length > 2 ? arguments[2] : void 0;
            if (n.x.targetOffset = 0, n.y.targetOffset = 0, e !== t) {
              let r = e;
              for (; r && r != t;) n.x.targetOffset += r.offsetLeft, n.y.targetOffset += r.offsetTop, r = r.offsetParent
            }
            n.x.targetLength = e === t ? e.scrollWidth : e.clientWidth, n.y.targetLength = e === t ? e.scrollHeight : e.clientHeight, n.x.containerLength = t.clientWidth, n.y.containerLength = t.clientHeight
          }(t, r.target, n),
          update: e => {
            ! function(t, e, n) {
              js(t, "x", e, n), js(t, "y", e, n), e.time = n
            }(t, n, e), (r.offset || r.target) && function(t, e, n) {
              let {
                offset: r = Ns.All
              } = n;
              const {
                target: o = t,
                axis: i = "y"
              } = n, a = "y" === i ? "height" : "width", s = o !== t ? function(t, e) {
                let n = {
                    x: 0,
                    y: 0
                  },
                  r = t;
                for (; r && r !== e;)
                  if (r instanceof HTMLElement) n.x += r.offsetLeft, n.y += r.offsetTop, r = r.offsetParent;
                  else if (r instanceof SVGGraphicsElement && "getBBox" in r) {
                  const {
                    top: t,
                    left: e
                  } = r.getBBox();
                  for (n.x += e, n.y += t; r && "svg" !== r.tagName;) r = r.parentNode
                }
                return n
              }(o, t) : _s, u = o === t ? {
                width: t.scrollWidth,
                height: t.scrollHeight
              } : {
                width: o.clientWidth,
                height: o.clientHeight
              }, l = {
                width: t.clientWidth,
                height: t.clientHeight
              };
              e[i].offset.length = 0;
              let c = !e[i].interpolate;
              const f = r.length;
              for (let t = 0; t < f; t++) {
                const n = Gs(r[t], l[a], u[a], s[i]);
                c || n === e[i].interpolatorOffsets[t] || (c = !0), e[i].offset[t] = n
              }
              c && (e[i].interpolate = (0, Bs.q)((0, Us.U)(f), e[i].offset), e[i].interpolatorOffsets = [...e[i].offset]), e[i].progress = e[i].interpolate(e[i].current)
            }(t, n, r)
          },
          notify: "function" == typeof e ? () => e(n) : (i = e, a = n[o], i.pause(), i.forEachNative(((t, e) => {
            let {
              easing: n
            } = e;
            var r, o;
            if (t.updateDuration) n || (t.easing = Fs.k), t.updateDuration(1);
            else {
              const e = {
                duration: 1e3
              };
              n || (e.easing = "linear"), null === (o = null === (r = t.effect) || void 0 === r ? void 0 : r.updateTiming) || void 0 === o || o.call(r, e)
            }
          })), () => {
            i.currentTime = a.progress
          })
        };
        var i, a
      }
      const $s = new WeakMap,
        Zs = new WeakMap,
        Ks = new WeakMap,
        Js = t => t === document.documentElement ? window : t;

      function Qs(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        var {
          container: n = document.documentElement
        } = e, o = (0, r.sX)(e, ["container"]);
        let i = Ks.get(n);
        i || (i = new Set, Ks.set(n, i));
        const a = Os(),
          s = qs(n, t, a, o);
        if (i.add(s), !$s.has(n)) {
          const t = () => {
            const t = performance.now();
            for (const t of i) t.measure();
            for (const e of i) e.update(t);
            for (const t of i) t.notify()
          };
          $s.set(n, t);
          const e = Js(n);
          window.addEventListener("resize", t, {
            passive: !0
          }), n !== document.documentElement && Zs.set(n, function(t, e) {
            return "function" == typeof t ? (n = t, Ms.add(n), Rs || (Rs = () => {
              const t = {
                  width: window.innerWidth,
                  height: window.innerHeight
                },
                e = {
                  target: window,
                  size: t,
                  contentSize: t
                };
              Ms.forEach((t => t(e)))
            }, window.addEventListener("resize", Rs)), () => {
              Ms.delete(n), !Ms.size && Rs && (Rs = void 0)
            }) : function(t, e) {
              As || "undefined" != typeof ResizeObserver && (As = new ResizeObserver(Vs));
              const n = Ss(t);
              return n.forEach((t => {
                let n = Ts.get(t);
                n || (n = new Set, Ts.set(t, n)), n.add(e), null == As || As.observe(t)
              })), () => {
                n.forEach((t => {
                  const n = Ts.get(t);
                  null == n || n.delete(e), (null == n ? void 0 : n.size) || null == As || As.unobserve(t)
                }))
              }
            }(t, e);
            var n
          }(n, t)), e.addEventListener("scroll", t, {
            passive: !0
          })
        }
        const u = $s.get(n),
          l = requestAnimationFrame(u);
        return () => {
          var e;
          "function" != typeof t && t.stop(), cancelAnimationFrame(l);
          const r = Ks.get(n);
          if (!r) return;
          if (r.delete(s), r.size) return;
          const o = $s.get(n);
          $s.delete(n), o && (Js(n).removeEventListener("scroll", o), null === (e = Zs.get(n)) || void 0 === e || e(), window.removeEventListener("resize", o))
        }
      }
      var tu = function() {
        return {
          scrollX: so(0),
          scrollY: so(0),
          scrollXProgress: so(0),
          scrollYProgress: so(0)
        }
      };

      function eu(t) {
        void 0 === t && (t = {});
        var e = t.container,
          n = t.target,
          o = (0, r.sX)(t, ["container", "target"]),
          i = k(tu);
        return x((function() {
          return Qs((function(t) {
            var e = t.x,
              n = t.y;
            i.scrollX.set(e.current), i.scrollXProgress.set(e.progress), i.scrollY.set(n.current), i.scrollYProgress.set(n.progress)
          }), (0, r.C3)((0, r.C3)({}, o), {
            container: (null == e ? void 0 : e.current) || void 0,
            target: (null == n ? void 0 : n.current) || void 0
          }))
        }), []), i
      }

      function nu(t) {
        return Me(!1, "useElementScroll is deprecated. Convert to useScroll({ container: ref })."), eu({
          container: t
        })
      }

      function ru() {
        return Me(!1, "useViewportScroll is deprecated. Convert to useScroll()."), eu()
      }
      var ou = "undefined" != typeof performance ? function() {
        return performance.now()
      } : function() {
        return Date.now()
      };

      function iu(t) {
        var e = k(ou),
          n = (0, o.useContext)(v).isStatic;
        (0, o.useEffect)((function() {
          if (!n) {
            var r = function(n) {
              var r = n.timestamp;
              t(r - e)
            };
            return yr.update(r, !0),
              function() {
                return dr.update(r)
              }
          }
        }), [t])
      }

      function au() {
        var t = cs(0);
        return iu((function(e) {
          return t.set(e)
        })), t
      }

      function su() {
        var t = !1,
          e = [],
          n = new Set,
          o = {
            subscribe: function(t) {
              return n.add(t),
                function() {
                  n.delete(t)
                }
            },
            start: function(r, o) {
              if (t) {
                var i = [];
                return n.forEach((function(t) {
                  i.push(bo(t, r, {
                    transitionOverride: o
                  }))
                })), Promise.all(i)
              }
              return new Promise((function(t) {
                e.push({
                  animation: [r, o],
                  resolve: t
                })
              }))
            },
            set: function(e) {
              return (0, c.O)(t, "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."), n.forEach((function(t) {
                ! function(t, e) {
                  Array.isArray(e) ? mo(t, e) : "string" == typeof e ? mo(t, [e]) : ho(t, e)
                }(t, e)
              }))
            },
            stop: function() {
              n.forEach((function(t) {
                ! function(t) {
                  t.forEachValue((function(t) {
                    return t.stop()
                  }))
                }(t)
              }))
            },
            mount: function() {
              return t = !0, e.forEach((function(t) {
                  var e = t.animation,
                    n = t.resolve;
                  o.start.apply(o, (0, r.Mt)([], (0, r.o5)(e), !1)).then(n)
                })),
                function() {
                  t = !1, o.stop()
                }
            }
          };
        return o
      }

      function uu() {
        var t = k(su);
        return (0, o.useEffect)(t.mount, []), t
      }
      var lu = uu;
      const cu = (t, e, n) => {
        const r = e - t;
        return ((n - t) % r + r) % r + t
      };

      function fu() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        var n = (0, o.useRef)(0),
          i = (0, r.o5)((0, o.useState)(t[n.current]), 2),
          a = i[0],
          s = i[1];
        return [a, (0, o.useCallback)((function(e) {
          n.current = "number" != typeof e ? cu(0, t.length, n.current + 1) : e, s(t[n.current])
        }), (0, r.Mt)([t.length], (0, r.o5)(t), !1))]
      }
      const du = {
        any: 0,
        all: 1
      };

      function pu(t, e) {
        var n = void 0 === e ? {} : e,
          i = n.root,
          a = n.margin,
          s = n.amount,
          u = n.once,
          l = void 0 !== u && u,
          c = (0, r.o5)((0, o.useState)(!1), 2),
          f = c[0],
          d = c[1];
        return (0, o.useEffect)((function() {
          var e;
          if (!(!t.current || l && f)) {
            var n = {
              root: null !== (e = null == i ? void 0 : i.current) && void 0 !== e ? e : void 0,
              margin: a,
              amount: "some" === s ? "any" : s
            };
            return function(t, e) {
              let {
                root: n,
                margin: r,
                amount: o = "any"
              } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
              if ("undefined" == typeof IntersectionObserver) return () => {};
              const i = Ss(t),
                a = new WeakMap,
                s = new IntersectionObserver((t => {
                  t.forEach((t => {
                    const n = a.get(t.target);
                    if (t.isIntersecting !== Boolean(n))
                      if (t.isIntersecting) {
                        const n = e(t);
                        "function" == typeof n ? a.set(t.target, n) : s.unobserve(t.target)
                      } else n && (n(t), a.delete(t.target))
                  }))
                }), {
                  root: n,
                  rootMargin: r,
                  threshold: "number" == typeof o ? o : du[o]
                });
              return i.forEach((t => s.observe(t))), () => s.disconnect()
            }(t.current, (function() {
              return d(!0), l ? void 0 : function() {
                return d(!1)
              }
            }), n)
          }
        }), [i, t, a, l]), f
      }
      var vu = function() {
          function t() {
            this.componentControls = new Set
          }
          return t.prototype.subscribe = function(t) {
            var e = this;
            return this.componentControls.add(t),
              function() {
                return e.componentControls.delete(t)
              }
          }, t.prototype.start = function(t, e) {
            this.componentControls.forEach((function(n) {
              n.start(t.nativeEvent || t, e)
            }))
          }, t
        }(),
        hu = function() {
          return new vu
        };

      function mu() {
        return k(hu)
      }

      function gu() {
        return yu
      }

      function yu(t) {
        Ua.current && (Ua.current.isUpdating = !1, Ua.current.blockUpdate(), null == t || t())
      }

      function xu() {
        var t = (0, r.o5)(Ga(), 2),
          e = t[0],
          n = t[1],
          i = gu();
        return (0, o.useEffect)((function() {
            yr.postRender((function() {
              return yr.postRender((function() {
                return qr.current = !1
              }))
            }))
          }), [n]),
          function(t) {
            i((function() {
              qr.current = !0, e(), t()
            }))
          }
      }

      function bu() {
        return o.useCallback((function() {
          var t = Ua.current;
          t && t.resetTree()
        }), [])
      }
      var Cu = function() {
          return {}
        },
        wu = wi({
          build: function() {},
          measureViewportBox: ti,
          resetTransform: function() {},
          restoreTransform: function() {},
          removeValueFromRenderState: function() {},
          render: function() {},
          scrapeMotionValuesFromProps: Cu,
          readValueFromInstance: function(t, e, n) {
            return n.initialState[e] || 0
          },
          makeTargetAnimatable: function(t, e) {
            var n = e.transition,
              o = e.transitionEnd,
              i = (0, r.sX)(e, ["transition", "transitionEnd"]);
            return go(t, i, xo(i, n || {}, t)), (0, r.C3)({
              transition: n,
              transitionEnd: o
            }, i)
          }
        }),
        Eu = $t({
          scrapeMotionValuesFromProps: Cu,
          createRenderState: Cu
        });

      function Su(t) {
        var e = (0, r.o5)((0, o.useState)(t), 2),
          n = e[0],
          i = e[1],
          a = Eu({}, !1),
          s = k((function() {
            return wu({
              props: {},
              visualState: a
            }, {
              initialState: t
            })
          }));
        return (0, o.useEffect)((function() {
          return s.mount({}), s.unmount
        }), [s]), (0, o.useEffect)((function() {
          s.setProps({
            onUpdate: function(t) {
              i((0, r.C3)({}, t))
            }
          })
        }), [i, s]), [n, k((function() {
          return function(t) {
            return bo(s, t)
          }
        }))]
      }
      var Tu = function(t) {
          return t > .001 ? 1 / t : 1e5
        },
        Au = !1;

      function Pu(t) {
        var e = cs(1),
          n = cs(1),
          r = m();
        return (0, c.O)(!(!t && !r), "If no scale values are provided, useInvertedScale must be used within a child of another motion component."), (0, c.s)(Au, "useInvertedScale is deprecated and will be removed in 3.0. Use the layout prop instead."), Au = !0, t ? (e = t.scaleX || e, n = t.scaleY || n) : r && (e = r.getValue("scaleX", 1), n = r.getValue("scaleY", 1)), {
          scaleX: vs(e, Tu),
          scaleY: vs(n, Tu)
        }
      }
    }
  }
]);