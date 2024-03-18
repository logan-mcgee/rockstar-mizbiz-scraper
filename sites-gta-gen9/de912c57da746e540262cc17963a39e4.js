! function() {
  try {
    var t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      e = (new Error).stack;
    e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "e9e58a98-6613-4d2d-b0ca-f4f57c7c5cbe", t._sentryDebugIdIdentifier = "sentry-dbid-e9e58a98-6613-4d2d-b0ca-f4f57c7c5cbe")
  } catch (t) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "7434858002db60462282401ab192924e3d1a0a27",
  packageName: "@rockstargames/sites-gta-gen9",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "7434858002db60462282401ab192924e3d1a0a27"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [16], {
    6540: t => {
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
    6636: (t, e, n) => {
      "use strict";
      n.r(e), n.d(e, {
        AnimatePresence: () => ns,
        AnimateSharedLayout: () => us,
        AnimationType: () => re,
        DeprecatedLayoutGroupContext: () => rs,
        DragControls: () => Su,
        FlatTree: () => Aa,
        LayoutGroup: () => as,
        LayoutGroupContext: () => z,
        LazyMotion: () => cs,
        MotionConfig: () => ls,
        MotionConfigContext: () => b,
        MotionContext: () => w,
        MotionValue: () => po,
        PresenceContext: () => S,
        Reorder: () => Ps,
        SwitchLayoutGroupContext: () => W,
        addPointerEvent: () => Ee,
        addScaleCorrector: () => $,
        animate: () => na,
        animateVisualElement: () => To,
        animationControls: () => mu,
        animations: () => jo,
        calcLength: () => Go,
        checkTargetForNewValues: () => So,
        createBox: () => ai,
        createDomMotionComponent: () => $a,
        createMotionComponent: () => Y,
        domAnimation: () => As,
        domMax: () => Ts,
        filterProps: () => Ot,
        isBrowser: () => P,
        isDragActive: () => Ve,
        isMotionValue: () => ot,
        isValidMotionProp: () => Rt,
        m: () => Za,
        makeUseVisualState: () => ee,
        motion: () => qa,
        motionValue: () => vo,
        resolveMotionValue: () => Qt,
        transform: () => ys,
        useAnimation: () => yu,
        useAnimationControls: () => gu,
        useAnimationFrame: () => vu,
        useCycle: () => bu,
        useDeprecatedAnimatedState: () => Du,
        useDeprecatedInvertedScale: () => Iu,
        useDomEvent: () => ue,
        useDragControls: () => Au,
        useElementScroll: () => fu,
        useForceUpdate: () => Ja,
        useInView: () => Eu,
        useInstantLayoutTransition: () => Tu,
        useInstantTransition: () => Vu,
        useIsPresent: () => $e,
        useIsomorphicLayoutEffect: () => A,
        useMotionTemplate: () => Cs,
        useMotionValue: () => ms,
        usePresence: () => qe,
        useReducedMotion: () => V,
        useReducedMotionConfig: () => M,
        useResetProjection: () => Mu,
        useScroll: () => cu,
        useSpring: () => Vs,
        useTime: () => hu,
        useTransform: () => bs,
        useUnmountEffect: () => Re,
        useVelocity: () => Ms,
        useViewportScroll: () => du,
        useVisualElementContext: () => E,
        visualElement: () => Vi,
        wrapHandler: () => he
      });
      var r = function(t, e) {
        return r = Object.setPrototypeOf || {
          __proto__: []
        }
        instanceof Array && function(t, e) {
          t.__proto__ = e
        } || function(t, e) {
          for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
        }, r(t, e)
      };

      function o(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

        function n() {
          this.constructor = t
        }
        r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
      }
      var i = function() {
        return i = Object.assign || function(t) {
          for (var e, n = 1, r = arguments.length; n < r; n++)
            for (var o in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
          return t
        }, i.apply(this, arguments)
      };

      function a(t, e) {
        var n = {};
        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
        if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
          var o = 0;
          for (r = Object.getOwnPropertySymbols(t); o < r.length; o++) e.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[o]) && (n[r[o]] = t[r[o]])
        }
        return n
      }

      function s(t, e) {
        var n = "function" == typeof Symbol && t[Symbol.iterator];
        if (!n) return t;
        var r, o, i = n.call(t),
          a = [];
        try {
          for (;
            (void 0 === e || e-- > 0) && !(r = i.next()).done;) a.push(r.value)
        } catch (t) {
          o = {
            error: t
          }
        } finally {
          try {
            r && !r.done && (n = i.return) && n.call(i)
          } finally {
            if (o) throw o.error
          }
        }
        return a
      }

      function u(t, e, n) {
        if (n || 2 === arguments.length)
          for (var r, o = 0, i = e.length; o < i; o++) !r && o in e || (r || (r = Array.prototype.slice.call(e, 0, o)), r[o] = e[o]);
        return t.concat(r || Array.prototype.slice.call(e))
      }
      Object.create, Object.create, "function" == typeof SuppressedError && SuppressedError;
      var l = n(8200),
        c = n(6540),
        f = (void 0 === c || c.env, "production"),
        d = function(t) {
          return {
            isEnabled: function(e) {
              return t.some((function(t) {
                return !!e[t]
              }))
            }
          }
        },
        p = {
          measureLayout: d(["layout", "layoutId", "drag"]),
          animation: d(["animate", "exit", "variants", "whileHover", "whileTap", "whileFocus", "whileDrag", "whileInView"]),
          exit: d(["exit"]),
          drag: d(["drag", "dragControls"]),
          focus: d(["whileFocus"]),
          hover: d(["whileHover", "onHoverStart", "onHoverEnd"]),
          tap: d(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
          pan: d(["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]),
          inView: d(["whileInView", "onViewportEnter", "onViewportLeave"])
        };

      function v(t) {
        for (var e in t) null !== t[e] && ("projectionNodeConstructor" === e ? p.projectionNodeConstructor = t[e] : p[e].Component = t[e])
      }
      var h = function() {},
        m = function() {},
        g = (0, l.createContext)({
          strict: !1
        }),
        y = Object.keys(p),
        x = y.length,
        b = (0, l.createContext)({
          transformPagePoint: function(t) {
            return t
          },
          isStatic: !1,
          reducedMotion: "never"
        }),
        w = (0, l.createContext)({});

      function E() {
        return (0, l.useContext)(w).visualElement
      }
      var S = (0, l.createContext)(null),
        P = "undefined" != typeof document,
        A = P ? l.useLayoutEffect : l.useEffect,
        T = {
          current: null
        },
        C = !1;

      function V() {
        return !C && function() {
          if (C = !0, P)
            if (window.matchMedia) {
              var t = window.matchMedia("(prefers-reduced-motion)"),
                e = function() {
                  return T.current = t.matches
                };
              t.addListener(e), e()
            } else T.current = !1
        }(), s((0, l.useState)(T.current), 1)[0]
      }

      function M() {
        var t = V(),
          e = (0, l.useContext)(b).reducedMotion;
        return "never" !== e && ("always" === e || t)
      }

      function L(t) {
        return "object" == typeof t && Object.prototype.hasOwnProperty.call(t, "current")
      }

      function R(t) {
        return Array.isArray(t)
      }

      function k(t) {
        return "string" == typeof t || R(t)
      }

      function D(t, e, n, r, o) {
        var i;
        return void 0 === r && (r = {}), void 0 === o && (o = {}), "function" == typeof e && (e = e(null != n ? n : t.custom, r, o)), "string" == typeof e && (e = null === (i = t.variants) || void 0 === i ? void 0 : i[e]), "function" == typeof e && (e = e(null != n ? n : t.custom, r, o)), e
      }

      function O(t, e, n) {
        var r = t.getProps();
        return D(r, e, null != n ? n : r.custom, function(t) {
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

      function j(t) {
        var e;
        return "function" == typeof(null === (e = t.animate) || void 0 === e ? void 0 : e.start) || k(t.initial) || k(t.animate) || k(t.whileHover) || k(t.whileDrag) || k(t.whileTap) || k(t.whileFocus) || k(t.exit)
      }

      function I(t) {
        return Boolean(j(t) || t.variants)
      }

      function F(t) {
        return Array.isArray(t) ? t.join(" ") : t
      }

      function B(t) {
        var e = (0, l.useRef)(null);
        return null === e.current && (e.current = t()), e.current
      }
      var U = {
          hasAnimatedSinceResize: !0,
          hasEverUpdated: !1
        },
        N = 1,
        z = (0, l.createContext)({}),
        W = (0, l.createContext)({}),
        H = function(t) {
          function e() {
            return null !== t && t.apply(this, arguments) || this
          }
          return o(e, t), e.prototype.getSnapshotBeforeUpdate = function() {
            return this.updateProps(), null
          }, e.prototype.componentDidUpdate = function() {}, e.prototype.updateProps = function() {
            var t = this.props,
              e = t.visualElement,
              n = t.props;
            e && e.setProps(n)
          }, e.prototype.render = function() {
            return this.props.children
          }, e
        }(l.Component);

      function Y(t) {
        var e = t.preloadedFeatures,
          n = t.createVisualElement,
          r = t.projectionNodeConstructor,
          o = t.useRender,
          a = t.useVisualState,
          s = t.Component;
        return e && v(e), (0, l.forwardRef)((function(t, u) {
          var c = function(t) {
            var e, n = t.layoutId,
              r = null === (e = (0, l.useContext)(z)) || void 0 === e ? void 0 : e.id;
            return r && void 0 !== n ? r + "-" + n : n
          }(t);
          t = i(i({}, t), {
            layoutId: c
          });
          var d = (0, l.useContext)(b),
            v = null,
            h = function(t) {
              var e = function(t, e) {
                  if (j(t)) {
                    var n = t.initial,
                      r = t.animate;
                    return {
                      initial: !1 === n || k(n) ? n : void 0,
                      animate: k(r) ? r : void 0
                    }
                  }
                  return !1 !== t.inherit ? e : {}
                }(t, (0, l.useContext)(w)),
                n = e.initial,
                r = e.animate;
              return (0, l.useMemo)((function() {
                return {
                  initial: n,
                  animate: r
                }
              }), [F(n), F(r)])
            }(t),
            T = d.isStatic ? void 0 : B((function() {
              if (U.hasEverUpdated) return N++
            })),
            C = a(t, d.isStatic);
          return !d.isStatic && P && (h.visualElement = function(t, e, n, r) {
            var o = (0, l.useContext)(g),
              i = E(),
              a = (0, l.useContext)(S),
              s = M(),
              u = (0, l.useRef)(void 0);
            r || (r = o.renderer), !u.current && r && (u.current = r(t, {
              visualState: e,
              parent: i,
              props: n,
              presenceId: null == a ? void 0 : a.id,
              blockInitialAnimation: !1 === (null == a ? void 0 : a.initial),
              shouldReduceMotion: s
            }));
            var c = u.current;
            return A((function() {
              null == c || c.syncRender()
            })), (0, l.useEffect)((function() {
              var t;
              null === (t = null == c ? void 0 : c.animationState) || void 0 === t || t.animateChanges()
            })), A((function() {
              return function() {
                return null == c ? void 0 : c.notifyUnmount()
              }
            }), []), c
          }(s, C, i(i({}, d), t), n), function(t, e, n, r) {
            var o, i = e.layoutId,
              a = e.layout,
              s = e.drag,
              u = e.dragConstraints,
              c = e.layoutScroll,
              f = (0, l.useContext)(W);
            r && n && !(null == n ? void 0 : n.projection) && (n.projection = new r(t, n.getLatestValues(), null === (o = n.parent) || void 0 === o ? void 0 : o.projection), n.projection.setOptions({
              layoutId: i,
              layout: a,
              alwaysMeasureLayout: Boolean(s) || u && L(u),
              visualElement: n,
              scheduleRender: function() {
                return n.scheduleRender()
              },
              animationType: "string" == typeof a ? a : "both",
              initialPromotionConfig: f,
              layoutScroll: c
            }))
          }(T, t, h.visualElement, r || p.projectionNodeConstructor), v = function(t, e, n) {
            var r = [],
              o = (0, l.useContext)(g);
            if (!e) return null;
            "production" !== f && n && o.strict && m(!1, "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.");
            for (var a = 0; a < x; a++) {
              var s = y[a],
                u = p[s],
                c = u.isEnabled,
                d = u.Component;
              c(t) && d && r.push(l.createElement(d, i({
                key: s
              }, t, {
                visualElement: e
              })))
            }
            return r
          }(t, h.visualElement, e)), l.createElement(H, {
            visualElement: h.visualElement,
            props: i(i({}, d), t)
          }, v, l.createElement(w.Provider, {
            value: h
          }, o(s, t, T, function(t, e, n) {
            return (0, l.useCallback)((function(r) {
              var o;
              r && (null === (o = t.mount) || void 0 === o || o.call(t, r)), e && (r ? e.mount(r) : e.unmount()), n && ("function" == typeof n ? n(r) : L(n) && (n.current = r))
            }), [e])
          }(C, h.visualElement, u), C, d.isStatic, h.visualElement)))
        }))
      }

      function X(t) {
        function e(e, n) {
          return void 0 === n && (n = {}), Y(t(e, n))
        }
        if ("undefined" == typeof Proxy) return e;
        var n = new Map;
        return new Proxy(e, {
          get: function(t, r) {
            return n.has(r) || n.set(r, e(r)), n.get(r)
          }
        })
      }
      var _ = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "svg", "switch", "symbol", "text", "tspan", "use", "view"];

      function G(t) {
        return "string" == typeof t && !t.includes("-") && !!(_.indexOf(t) > -1 || /[A-Z]/.test(t))
      }
      var q = {};

      function $(t) {
        Object.assign(q, t)
      }
      var Z = ["", "X", "Y", "Z"],
        K = ["transformPerspective", "x", "y", "z"];

      function J(t, e) {
        return K.indexOf(t) - K.indexOf(e)
      } ["translate", "scale", "rotate", "skew"].forEach((function(t) {
        return Z.forEach((function(e) {
          return K.push(t + e)
        }))
      }));
      var Q = new Set(K);

      function tt(t) {
        return Q.has(t)
      }
      var et = new Set(["originX", "originY", "originZ"]);

      function nt(t) {
        return et.has(t)
      }

      function rt(t, e) {
        var n = e.layout,
          r = e.layoutId;
        return tt(t) || nt(t) || (n || void 0 !== r) && (!!q[t] || "opacity" === t)
      }
      var ot = function(t) {
          return Boolean(null !== t && "object" == typeof t && t.getVelocity)
        },
        it = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective"
        };

      function at(t) {
        return t.startsWith("--")
      }
      var st = function(t, e) {
        return e && "number" == typeof t ? e.transform(t) : t
      };
      const ut = (t, e) => n => Math.max(Math.min(n, e), t),
        lt = t => t % 1 ? Number(t.toFixed(5)) : t,
        ct = /(-)?([\d]*\.?[\d])+/g,
        ft = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi,
        dt = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;

      function pt(t) {
        return "string" == typeof t
      }
      const vt = t => ({
          test: e => pt(e) && e.endsWith(t) && 1 === e.split(" ").length,
          parse: parseFloat,
          transform: e => `${e}${t}`
        }),
        ht = vt("deg"),
        mt = vt("%"),
        gt = vt("px"),
        yt = vt("vh"),
        xt = vt("vw"),
        bt = Object.assign(Object.assign({}, mt), {
          parse: t => mt.parse(t) / 100,
          transform: t => mt.transform(100 * t)
        }),
        wt = {
          test: t => "number" == typeof t,
          parse: parseFloat,
          transform: t => t
        },
        Et = Object.assign(Object.assign({}, wt), {
          transform: ut(0, 1)
        }),
        St = Object.assign(Object.assign({}, wt), {
          default: 1
        });
      var Pt = i(i({}, wt), {
          transform: Math.round
        }),
        At = {
          borderWidth: gt,
          borderTopWidth: gt,
          borderRightWidth: gt,
          borderBottomWidth: gt,
          borderLeftWidth: gt,
          borderRadius: gt,
          radius: gt,
          borderTopLeftRadius: gt,
          borderTopRightRadius: gt,
          borderBottomRightRadius: gt,
          borderBottomLeftRadius: gt,
          width: gt,
          maxWidth: gt,
          height: gt,
          maxHeight: gt,
          size: gt,
          top: gt,
          right: gt,
          bottom: gt,
          left: gt,
          padding: gt,
          paddingTop: gt,
          paddingRight: gt,
          paddingBottom: gt,
          paddingLeft: gt,
          margin: gt,
          marginTop: gt,
          marginRight: gt,
          marginBottom: gt,
          marginLeft: gt,
          rotate: ht,
          rotateX: ht,
          rotateY: ht,
          rotateZ: ht,
          scale: St,
          scaleX: St,
          scaleY: St,
          scaleZ: St,
          skew: ht,
          skewX: ht,
          skewY: ht,
          distance: gt,
          translateX: gt,
          translateY: gt,
          translateZ: gt,
          x: gt,
          y: gt,
          z: gt,
          perspective: gt,
          transformPerspective: gt,
          opacity: Et,
          originX: bt,
          originY: bt,
          originZ: gt,
          zIndex: Pt,
          fillOpacity: Et,
          strokeOpacity: Et,
          numOctaves: Pt
        };

      function Tt(t, e, n, r) {
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
          if (at(p)) a[p] = v;
          else {
            var h = At[p],
              m = st(v, h);
            if (tt(p)) {
              if (c = !0, s[p] = m, u.push(p), !d) continue;
              v !== (null !== (o = h.default) && void 0 !== o ? o : 0) && (d = !1)
            } else nt(p) ? (l[p] = m, f = !0) : i[p] = m
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
          i.sort(J);
          for (var f = !1, d = i.length, p = 0; p < d; p++) {
            var v = i[p];
            c += "".concat(it[v] || v, "(").concat(o[v], ") "), "z" === v && (f = !0)
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

      function Vt(t, e, n) {
        for (var r in e) ot(e[r]) || rt(r, n) || (t[r] = e[r])
      }

      function Mt(t, e, n) {
        var r = {},
          o = function(t, e, n) {
            var r = {};
            return Vt(r, t.style || {}, t), Object.assign(r, function(t, e, n) {
              var r = t.transformTemplate;
              return (0, l.useMemo)((function() {
                var t = Ct();
                Tt(t, e, {
                  enableHardwareAcceleration: !n
                }, r);
                var o = t.vars,
                  a = t.style;
                return i(i({}, o), a)
              }), [e])
            }(t, e, n)), t.transformValues && (r = t.transformValues(r)), r
          }(t, e, n);
        return Boolean(t.drag) && !1 !== t.dragListener && (r.draggable = !1, o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none", o.touchAction = !0 === t.drag ? "none" : "pan-".concat("x" === t.drag ? "y" : "x")), r.style = o, r
      }
      var Lt = new Set(["initial", "animate", "exit", "style", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "layout", "layoutId", "layoutDependency", "onLayoutAnimationStart", "onLayoutAnimationComplete", "onLayoutMeasure", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "drag", "dragControls", "dragListener", "dragConstraints", "dragDirectionLock", "dragSnapToOrigin", "_dragX", "_dragY", "dragElastic", "dragMomentum", "dragPropagation", "dragTransition", "whileDrag", "onPan", "onPanStart", "onPanEnd", "onPanSessionStart", "onTap", "onTapStart", "onTapCancel", "onHoverStart", "onHoverEnd", "whileFocus", "whileTap", "whileHover", "whileInView", "onViewportEnter", "onViewportLeave", "viewport", "layoutScroll"]);

      function Rt(t) {
        return Lt.has(t)
      }
      var kt = function(t) {
        return !Rt(t)
      };

      function Dt(t) {
        t && (kt = function(e) {
          return e.startsWith("on") ? !Rt(e) : t(e)
        })
      }
      try {
        Dt(require("@emotion/is-prop-valid").default)
      } catch (t) {}

      function Ot(t, e, n) {
        var r = {};
        for (var o in t)(kt(o) || !0 === n && Rt(o) || !e && !Rt(o) || t.draggable && o.startsWith("onDrag")) && (r[o] = t[o]);
        return r
      }

      function jt(t, e, n) {
        return "string" == typeof t ? t : gt.transform(e + n * t)
      }
      var It = {
          offset: "stroke-dashoffset",
          array: "stroke-dasharray"
        },
        Ft = {
          offset: "strokeDashoffset",
          array: "strokeDasharray"
        };

      function Bt(t, e, n, r) {
        var o = e.attrX,
          i = e.attrY,
          s = e.originX,
          u = e.originY,
          l = e.pathLength,
          c = e.pathSpacing,
          f = void 0 === c ? 1 : c,
          d = e.pathOffset,
          p = void 0 === d ? 0 : d;
        Tt(t, a(e, ["attrX", "attrY", "originX", "originY", "pathLength", "pathSpacing", "pathOffset"]), n, r), t.attrs = t.style, t.style = {};
        var v = t.attrs,
          h = t.style,
          m = t.dimensions;
        v.transform && (m && (h.transform = v.transform), delete v.transform), m && (void 0 !== s || void 0 !== u || h.transform) && (h.transformOrigin = function(t, e, n) {
          var r = jt(e, t.x, t.width),
            o = jt(n, t.y, t.height);
          return "".concat(r, " ").concat(o)
        }(m, void 0 !== s ? s : .5, void 0 !== u ? u : .5)), void 0 !== o && (v.x = o), void 0 !== i && (v.y = i), void 0 !== l && function(t, e, n, r, o) {
          void 0 === n && (n = 1), void 0 === r && (r = 0), void 0 === o && (o = !0), t.pathLength = 1;
          var i = o ? It : Ft;
          t[i.offset] = gt.transform(-r);
          var a = gt.transform(e),
            s = gt.transform(n);
          t[i.array] = "".concat(a, " ").concat(s)
        }(v, l, f, p, !1)
      }
      var Ut = function() {
        return i(i({}, Ct()), {
          attrs: {}
        })
      };

      function Nt(t, e) {
        var n = (0, l.useMemo)((function() {
          var n = Ut();
          return Bt(n, e, {
            enableHardwareAcceleration: !1
          }, t.transformTemplate), i(i({}, n.attrs), {
            style: i({}, n.style)
          })
        }), [e]);
        if (t.style) {
          var r = {};
          Vt(r, t.style, t), n.style = i(i({}, r), n.style)
        }
        return n
      }

      function zt(t) {
        return void 0 === t && (t = !1),
          function(e, n, r, o, a, s) {
            var u = a.latestValues,
              c = (G(e) ? Nt : Mt)(n, u, s),
              f = Ot(n, "string" == typeof e, t),
              d = i(i(i({}, f), c), {
                ref: o
              });
            return r && (d["data-projection-id"] = r), (0, l.createElement)(e, d)
          }
      }
      var Wt = /([a-z])([A-Z])/g,
        Ht = function(t) {
          return t.replace(Wt, "$1-$2").toLowerCase()
        };

      function Yt(t, e, n, r) {
        var o = e.style,
          i = e.vars;
        for (var a in Object.assign(t.style, o, r && r.getProjectionStyles(n)), i) t.style.setProperty(a, i[a])
      }
      var Xt = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength"]);

      function _t(t, e, n, r) {
        for (var o in Yt(t, e, void 0, r), e.attrs) t.setAttribute(Xt.has(o) ? o : Ht(o), e.attrs[o])
      }

      function Gt(t) {
        var e = t.style,
          n = {};
        for (var r in e)(ot(e[r]) || rt(r, t)) && (n[r] = e[r]);
        return n
      }

      function qt(t) {
        var e = Gt(t);
        for (var n in t) ot(t[n]) && (e["x" === n || "y" === n ? "attr" + n.toUpperCase() : n] = t[n]);
        return e
      }

      function $t(t) {
        return "object" == typeof t && "function" == typeof t.start
      }
      var Zt = function(t) {
          return Array.isArray(t)
        },
        Kt = function(t) {
          return Boolean(t && "object" == typeof t && t.mix && t.toValue)
        },
        Jt = function(t) {
          return Zt(t) ? t[t.length - 1] || 0 : t
        };

      function Qt(t) {
        var e = ot(t) ? t.get() : t;
        return Kt(e) ? e.toValue() : e
      }

      function te(t, e, n, r) {
        var o = t.scrapeMotionValuesFromProps,
          i = t.createRenderState,
          a = t.onMount,
          s = {
            latestValues: ne(e, n, r, o),
            renderState: i()
          };
        return a && (s.mount = function(t) {
          return a(e, t, s)
        }), s
      }
      var ee = function(t) {
        return function(e, n) {
          var r = (0, l.useContext)(w),
            o = (0, l.useContext)(S);
          return n ? te(t, e, r, o) : B((function() {
            return te(t, e, r, o)
          }))
        }
      };

      function ne(t, e, n, r) {
        var o = {},
          i = !1 === (null == n ? void 0 : n.initial),
          s = r(t);
        for (var u in s) o[u] = Qt(s[u]);
        var l = t.initial,
          c = t.animate,
          f = j(t),
          d = I(t);
        e && d && !f && !1 !== t.inherit && (null != l || (l = e.initial), null != c || (c = e.animate));
        var p = i || !1 === l,
          v = p ? c : l;
        return v && "boolean" != typeof v && !$t(v) && (Array.isArray(v) ? v : [v]).forEach((function(e) {
          var n = D(t, e);
          if (n) {
            var r = n.transitionEnd;
            n.transition;
            var i = a(n, ["transitionEnd", "transition"]);
            for (var s in i) {
              var u = i[s];
              Array.isArray(u) && (u = u[p ? u.length - 1 : 0]), null !== u && (o[s] = u)
            }
            for (var s in r) o[s] = r[s]
          }
        })), o
      }
      var re, oe = {
          useVisualState: ee({
            scrapeMotionValuesFromProps: qt,
            createRenderState: Ut,
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
              Bt(r, o, {
                enableHardwareAcceleration: !1
              }, t.transformTemplate), _t(e, r)
            }
          })
        },
        ie = {
          useVisualState: ee({
            scrapeMotionValuesFromProps: Gt,
            createRenderState: Ct
          })
        };

      function ae(t, e, n, r, o) {
        var a = e.forwardMotionProps,
          s = void 0 !== a && a,
          u = G(t) ? oe : ie;
        return i(i({}, u), {
          preloadedFeatures: n,
          useRender: zt(s),
          createVisualElement: r,
          projectionNodeConstructor: o,
          Component: t
        })
      }

      function se(t, e, n, r) {
        return void 0 === r && (r = {
            passive: !0
          }), t.addEventListener(e, n, r),
          function() {
            return t.removeEventListener(e, n)
          }
      }

      function ue(t, e, n, r) {
        (0, l.useEffect)((function() {
          var o = t.current;
          if (n && o) return se(o, e, n, r)
        }), [t, e, n, r])
      }

      function le(t) {
        return "undefined" != typeof PointerEvent && t instanceof PointerEvent ? !("mouse" !== t.pointerType) : t instanceof MouseEvent
      }

      function ce(t) {
        return !!t.touches
      }! function(t) {
        t.Animate = "animate", t.Hover = "whileHover", t.Tap = "whileTap", t.Drag = "whileDrag", t.Focus = "whileFocus", t.InView = "whileInView", t.Exit = "exit"
      }(re || (re = {}));
      var fe = {
        pageX: 0,
        pageY: 0
      };

      function de(t, e) {
        void 0 === e && (e = "page");
        var n = t.touches[0] || t.changedTouches[0] || fe;
        return {
          x: n[e + "X"],
          y: n[e + "Y"]
        }
      }

      function pe(t, e) {
        return void 0 === e && (e = "page"), {
          x: t[e + "X"],
          y: t[e + "Y"]
        }
      }

      function ve(t, e) {
        return void 0 === e && (e = "page"), {
          point: ce(t) ? de(t, e) : pe(t, e)
        }
      }
      var he = function(t, e) {
          void 0 === e && (e = !1);
          var n, r = function(e) {
            return t(e, ve(e))
          };
          return e ? (n = r, function(t) {
            var e = t instanceof MouseEvent;
            (!e || e && 0 === t.button) && n(t)
          }) : r
        },
        me = function() {
          return P && null === window.onpointerdown
        },
        ge = function() {
          return P && null === window.ontouchstart
        },
        ye = function() {
          return P && null === window.onmousedown
        },
        xe = {
          pointerdown: "mousedown",
          pointermove: "mousemove",
          pointerup: "mouseup",
          pointercancel: "mousecancel",
          pointerover: "mouseover",
          pointerout: "mouseout",
          pointerenter: "mouseenter",
          pointerleave: "mouseleave"
        },
        be = {
          pointerdown: "touchstart",
          pointermove: "touchmove",
          pointerup: "touchend",
          pointercancel: "touchcancel"
        };

      function we(t) {
        return me() ? t : ge() ? be[t] : ye() ? xe[t] : t
      }

      function Ee(t, e, n, r) {
        return se(t, we(e), he(n, "pointerdown" === e), r)
      }

      function Se(t, e, n, r) {
        return ue(t, we(e), n && he(n, "pointerdown" === e), r)
      }

      function Pe(t) {
        var e = null;
        return function() {
          return null === e && (e = t, function() {
            e = null
          })
        }
      }
      var Ae = Pe("dragHorizontal"),
        Te = Pe("dragVertical");

      function Ce(t) {
        var e = !1;
        if ("y" === t) e = Te();
        else if ("x" === t) e = Ae();
        else {
          var n = Ae(),
            r = Te();
          n && r ? e = function() {
            n(), r()
          } : (n && n(), r && r())
        }
        return e
      }

      function Ve() {
        var t = Ce(!0);
        return !t || (t(), !1)
      }

      function Me(t, e, n) {
        return function(r, o) {
          var i;
          le(r) && !Ve() && (null === (i = t.animationState) || void 0 === i || i.setActive(re.Hover, e), null == n || n(r, o))
        }
      }
      var Le = function(t, e) {
        return !!e && (t === e || Le(t, e.parentElement))
      };

      function Re(t) {
        return (0, l.useEffect)((function() {
          return function() {
            return t()
          }
        }), [])
      }
      const ke = (t, e) => n => e(t(n)),
        De = (...t) => t.reduce(ke);
      var Oe = new Set;

      function je(t, e, n) {
        t || Oe.has(e) || (console.warn(e), n && console.warn(n), Oe.add(e))
      }
      var Ie = new WeakMap,
        Fe = new WeakMap,
        Be = function(t) {
          var e;
          null === (e = Ie.get(t.target)) || void 0 === e || e(t)
        },
        Ue = function(t) {
          t.forEach(Be)
        };
      var Ne = {
        some: 0,
        all: 1
      };

      function ze(t, e, n, r) {
        var o = r.root,
          s = r.margin,
          u = r.amount,
          c = void 0 === u ? "some" : u,
          f = r.once;
        (0, l.useEffect)((function() {
          if (t) {
            var r = {
              root: null == o ? void 0 : o.current,
              rootMargin: s,
              threshold: "number" == typeof c ? c : Ne[c]
            };
            return function(t, e, n) {
              var r = function(t) {
                var e = t.root,
                  n = a(t, ["root"]),
                  r = e || document;
                Fe.has(r) || Fe.set(r, {});
                var o = Fe.get(r),
                  s = JSON.stringify(n);
                return o[s] || (o[s] = new IntersectionObserver(Ue, i({
                  root: e
                }, n))), o[s]
              }(e);
              return Ie.set(t, n), r.observe(t),
                function() {
                  Ie.delete(t), r.unobserve(t)
                }
            }(n.getInstance(), r, (function(t) {
              var r, o = t.isIntersecting;
              if (e.isInView !== o && (e.isInView = o, !f || o || !e.hasEnteredView)) {
                o && (e.hasEnteredView = !0), null === (r = n.animationState) || void 0 === r || r.setActive(re.InView, o);
                var i = n.getProps(),
                  a = o ? i.onViewportEnter : i.onViewportLeave;
                null == a || a(t)
              }
            }))
          }
        }), [t, o, s, c])
      }

      function We(t, e, n, r) {
        var o = r.fallback,
          i = void 0 === o || o;
        (0, l.useEffect)((function() {
          t && i && ("production" !== f && je(!1, "IntersectionObserver not available on this device. whileInView animations will trigger on mount."), requestAnimationFrame((function() {
            var t;
            e.hasEnteredView = !0;
            var r = n.getProps().onViewportEnter;
            null == r || r(null), null === (t = n.animationState) || void 0 === t || t.setActive(re.InView, !0)
          })))
        }), [t])
      }
      var He = function(t) {
          return function(e) {
            return t(e), null
          }
        },
        Ye = {
          inView: He((function(t) {
            var e = t.visualElement,
              n = t.whileInView,
              r = t.onViewportEnter,
              o = t.onViewportLeave,
              i = t.viewport,
              a = void 0 === i ? {} : i,
              s = (0, l.useRef)({
                hasEnteredView: !1,
                isInView: !1
              }),
              u = Boolean(n || r || o);
            a.once && s.current.hasEnteredView && (u = !1), ("undefined" == typeof IntersectionObserver ? We : ze)(u, s.current, e, a)
          })),
          tap: He((function(t) {
            var e = t.onTap,
              n = t.onTapStart,
              r = t.onTapCancel,
              o = t.whileTap,
              i = t.visualElement,
              a = e || n || r || o,
              s = (0, l.useRef)(!1),
              u = (0, l.useRef)(null),
              c = {
                passive: !(n || e || r || h)
              };

            function f() {
              var t;
              null === (t = u.current) || void 0 === t || t.call(u), u.current = null
            }

            function d() {
              var t;
              return f(), s.current = !1, null === (t = i.animationState) || void 0 === t || t.setActive(re.Tap, !1), !Ve()
            }

            function p(t, n) {
              d() && (Le(i.getInstance(), t.target) ? null == e || e(t, n) : null == r || r(t, n))
            }

            function v(t, e) {
              d() && (null == r || r(t, e))
            }

            function h(t, e) {
              var r;
              f(), s.current || (s.current = !0, u.current = De(Ee(window, "pointerup", p, c), Ee(window, "pointercancel", v, c)), null === (r = i.animationState) || void 0 === r || r.setActive(re.Tap, !0), null == n || n(t, e))
            }
            Se(i, "pointerdown", a ? h : void 0, c), Re(f)
          })),
          focus: He((function(t) {
            var e = t.whileFocus,
              n = t.visualElement;
            ue(n, "focus", e ? function() {
              var t;
              null === (t = n.animationState) || void 0 === t || t.setActive(re.Focus, !0)
            } : void 0), ue(n, "blur", e ? function() {
              var t;
              null === (t = n.animationState) || void 0 === t || t.setActive(re.Focus, !1)
            } : void 0)
          })),
          hover: He((function(t) {
            var e = t.onHoverStart,
              n = t.onHoverEnd,
              r = t.whileHover,
              o = t.visualElement;
            Se(o, "pointerenter", e || r ? Me(o, !0, e) : void 0, {
              passive: !e
            }), Se(o, "pointerleave", n || r ? Me(o, !1, n) : void 0, {
              passive: !n
            })
          }))
        },
        Xe = 0,
        _e = function() {
          return Xe++
        },
        Ge = function() {
          return B(_e)
        };

      function qe() {
        var t = (0, l.useContext)(S);
        if (null === t) return [!0, null];
        var e = t.isPresent,
          n = t.onExitComplete,
          r = t.register,
          o = Ge();
        return (0, l.useEffect)((function() {
          return r(o)
        }), []), !e && n ? [!1, function() {
          return null == n ? void 0 : n(o)
        }] : [!0]
      }

      function $e() {
        return null === (t = (0, l.useContext)(S)) || t.isPresent;
        var t
      }

      function Ze(t, e) {
        if (!Array.isArray(e)) return !1;
        var n = e.length;
        if (n !== t.length) return !1;
        for (var r = 0; r < n; r++)
          if (e[r] !== t[r]) return !1;
        return !0
      }
      const Ke = (t, e, n) => Math.min(Math.max(n, t), e),
        Je = .001,
        Qe = .01,
        tn = 10,
        en = .05,
        nn = 1;
      const rn = 12;

      function on(t, e) {
        return t * Math.sqrt(1 - e * e)
      }
      const an = ["duration", "bounce"],
        sn = ["stiffness", "damping", "mass"];

      function un(t, e) {
        return e.some((e => void 0 !== t[e]))
      }

      function ln(t) {
        var {
          from: e = 0,
          to: n = 1,
          restSpeed: r = 2,
          restDelta: o
        } = t, i = a(t, ["from", "to", "restSpeed", "restDelta"]);
        const s = {
          done: !1,
          value: e
        };
        let {
          stiffness: u,
          damping: l,
          mass: c,
          velocity: f,
          duration: d,
          isResolvedFromDuration: p
        } = function(t) {
          let e = Object.assign({
            velocity: 0,
            stiffness: 100,
            damping: 10,
            mass: 1,
            isResolvedFromDuration: !1
          }, t);
          if (!un(t, sn) && un(t, an)) {
            const n = function({
              duration: t = 800,
              bounce: e = .25,
              velocity: n = 0,
              mass: r = 1
            }) {
              let o, i;
              h(t <= 1e3 * tn, "Spring duration must be 10 seconds or less");
              let a = 1 - e;
              a = Ke(en, nn, a), t = Ke(Qe, tn, t / 1e3), a < 1 ? (o = e => {
                const r = e * a,
                  o = r * t,
                  i = r - n,
                  s = on(e, a),
                  u = Math.exp(-o);
                return Je - i / s * u
              }, i = e => {
                const r = e * a * t,
                  i = r * n + n,
                  s = Math.pow(a, 2) * Math.pow(e, 2) * t,
                  u = Math.exp(-r),
                  l = on(Math.pow(e, 2), a);
                return (-o(e) + Je > 0 ? -1 : 1) * ((i - s) * u) / l
              }) : (o = e => Math.exp(-e * t) * ((e - n) * t + 1) - Je, i = e => Math.exp(-e * t) * (t * t * (n - e)));
              const s = function(t, e, n) {
                let r = n;
                for (let n = 1; n < rn; n++) r -= t(r) / e(r);
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
        }(i), v = cn, m = cn;

        function g() {
          const t = f ? -f / 1e3 : 0,
            r = n - e,
            i = l / (2 * Math.sqrt(u * c)),
            a = Math.sqrt(u / c) / 1e3;
          if (void 0 === o && (o = Math.min(Math.abs(n - e) / 100, .4)), i < 1) {
            const e = on(a, i);
            v = o => {
              const s = Math.exp(-i * a * o);
              return n - s * ((t + i * a * r) / e * Math.sin(e * o) + r * Math.cos(e * o))
            }, m = n => {
              const o = Math.exp(-i * a * n);
              return i * a * o * (Math.sin(e * n) * (t + i * a * r) / e + r * Math.cos(e * n)) - o * (Math.cos(e * n) * (t + i * a * r) - e * r * Math.sin(e * n))
            }
          } else if (1 === i) v = e => n - Math.exp(-a * e) * (r + (t + a * r) * e);
          else {
            const e = a * Math.sqrt(i * i - 1);
            v = o => {
              const s = Math.exp(-i * a * o),
                u = Math.min(e * o, 300);
              return n - s * ((t + i * a * r) * Math.sinh(u) + e * r * Math.cosh(u)) / e
            }
          }
        }
        return g(), {
          next: t => {
            const e = v(t);
            if (p) s.done = t >= d;
            else {
              const i = 1e3 * m(t),
                a = Math.abs(i) <= r,
                u = Math.abs(n - e) <= o;
              s.done = a && u
            }
            return s.value = s.done ? n : e, s
          },
          flipTarget: () => {
            f = -f, [e, n] = [n, e], g()
          }
        }
      }
      ln.needsInterpolation = (t, e) => "string" == typeof t || "string" == typeof e;
      const cn = t => 0,
        fn = (t, e, n) => {
          const r = e - t;
          return 0 === r ? 1 : (n - t) / r
        },
        dn = (t, e, n) => -n * t + n * e + t,
        pn = (t, e) => n => Boolean(pt(n) && dt.test(n) && n.startsWith(t) || e && Object.prototype.hasOwnProperty.call(n, e)),
        vn = (t, e, n) => r => {
          if (!pt(r)) return r;
          const [o, i, a, s] = r.match(ct);
          return {
            [t]: parseFloat(o),
            [e]: parseFloat(i),
            [n]: parseFloat(a),
            alpha: void 0 !== s ? parseFloat(s) : 1
          }
        },
        hn = ut(0, 255),
        mn = Object.assign(Object.assign({}, wt), {
          transform: t => Math.round(hn(t))
        }),
        gn = {
          test: pn("rgb", "red"),
          parse: vn("red", "green", "blue"),
          transform: ({
            red: t,
            green: e,
            blue: n,
            alpha: r = 1
          }) => "rgba(" + mn.transform(t) + ", " + mn.transform(e) + ", " + mn.transform(n) + ", " + lt(Et.transform(r)) + ")"
        },
        yn = {
          test: pn("#"),
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
          transform: gn.transform
        },
        xn = {
          test: pn("hsl", "hue"),
          parse: vn("hue", "saturation", "lightness"),
          transform: ({
            hue: t,
            saturation: e,
            lightness: n,
            alpha: r = 1
          }) => "hsla(" + Math.round(t) + ", " + mt.transform(lt(e)) + ", " + mt.transform(lt(n)) + ", " + lt(Et.transform(r)) + ")"
        };

      function bn(t, e, n) {
        return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + 6 * (e - t) * n : n < .5 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
      }

      function wn({
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
          o = bn(s, r, t + 1 / 3), i = bn(s, r, t), a = bn(s, r, t - 1 / 3)
        } else o = i = a = n;
        return {
          red: Math.round(255 * o),
          green: Math.round(255 * i),
          blue: Math.round(255 * a),
          alpha: r
        }
      }
      const En = (t, e, n) => {
          const r = t * t,
            o = e * e;
          return Math.sqrt(Math.max(0, n * (o - r) + r))
        },
        Sn = [yn, gn, xn],
        Pn = t => Sn.find((e => e.test(t))),
        An = t => `'${t}' is not an animatable color. Use the equivalent color code instead.`,
        Tn = (t, e) => {
          let n = Pn(t),
            r = Pn(e);
          m(!!n, An(t)), m(!!r, An(e));
          let o = n.parse(t),
            i = r.parse(e);
          n === xn && (o = wn(o), n = gn), r === xn && (i = wn(i), r = gn);
          const a = Object.assign({}, o);
          return t => {
            for (const e in a) "alpha" !== e && (a[e] = En(o[e], i[e], t));
            return a.alpha = dn(o.alpha, i.alpha, t), n.transform(a)
          }
        },
        Cn = {
          test: t => gn.test(t) || yn.test(t) || xn.test(t),
          parse: t => gn.test(t) ? gn.parse(t) : xn.test(t) ? xn.parse(t) : yn.parse(t),
          transform: t => pt(t) ? t : t.hasOwnProperty("red") ? gn.transform(t) : xn.transform(t)
        },
        Vn = "${c}",
        Mn = "${n}";

      function Ln(t) {
        "number" == typeof t && (t = `${t}`);
        const e = [];
        let n = 0;
        const r = t.match(ft);
        r && (n = r.length, t = t.replace(ft, Vn), e.push(...r.map(Cn.parse)));
        const o = t.match(ct);
        return o && (t = t.replace(ct, Mn), e.push(...o.map(wt.parse))), {
          values: e,
          numColors: n,
          tokenised: t
        }
      }

      function Rn(t) {
        return Ln(t).values
      }

      function kn(t) {
        const {
          values: e,
          numColors: n,
          tokenised: r
        } = Ln(t), o = e.length;
        return t => {
          let e = r;
          for (let r = 0; r < o; r++) e = e.replace(r < n ? Vn : Mn, r < n ? Cn.transform(t[r]) : lt(t[r]));
          return e
        }
      }
      const Dn = t => "number" == typeof t ? 0 : t,
        On = {
          test: function(t) {
            var e, n, r, o;
            return isNaN(t) && pt(t) && (null !== (n = null === (e = t.match(ct)) || void 0 === e ? void 0 : e.length) && void 0 !== n ? n : 0) + (null !== (o = null === (r = t.match(ft)) || void 0 === r ? void 0 : r.length) && void 0 !== o ? o : 0) > 0
          },
          parse: Rn,
          createTransformer: kn,
          getAnimatableNone: function(t) {
            const e = Rn(t);
            return kn(t)(e.map(Dn))
          }
        },
        jn = t => "number" == typeof t;

      function In(t, e) {
        return jn(t) ? n => dn(t, e, n) : Cn.test(t) ? Tn(t, e) : Nn(t, e)
      }
      const Fn = (t, e) => {
          const n = [...t],
            r = n.length,
            o = t.map(((t, n) => In(t, e[n])));
          return t => {
            for (let e = 0; e < r; e++) n[e] = o[e](t);
            return n
          }
        },
        Bn = (t, e) => {
          const n = Object.assign(Object.assign({}, t), e),
            r = {};
          for (const o in n) void 0 !== t[o] && void 0 !== e[o] && (r[o] = In(t[o], e[o]));
          return t => {
            for (const e in r) n[e] = r[e](t);
            return n
          }
        };

      function Un(t) {
        const e = On.parse(t),
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
      const Nn = (t, e) => {
          const n = On.createTransformer(e),
            r = Un(t),
            o = Un(e);
          return r.numHSL === o.numHSL && r.numRGB === o.numRGB && r.numNumbers >= o.numNumbers ? De(Fn(r.parsed, o.parsed), n) : (h(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), n => `${n>0?e:t}`)
        },
        zn = (t, e) => n => dn(t, e, n);

      function Wn(t, e, {
        clamp: n = !0,
        ease: r,
        mixer: o
      } = {}) {
        const i = t.length;
        m(i === e.length, "Both input and output ranges must be the same length"), m(!r || !Array.isArray(r) || r.length === i - 1, "Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."), t[0] > t[i - 1] && (t = [].concat(t), e = [].concat(e), t.reverse(), e.reverse());
        const a = function(t, e, n) {
            const r = [],
              o = n || ("number" == typeof(i = t[0]) ? zn : "string" == typeof i ? Cn.test(i) ? Tn : Nn : Array.isArray(i) ? Fn : "object" == typeof i ? Bn : void 0);
            var i;
            const a = t.length - 1;
            for (let n = 0; n < a; n++) {
              let i = o(t[n], t[n + 1]);
              if (e) {
                const t = Array.isArray(e) ? e[n] : e;
                i = De(t, i)
              }
              r.push(i)
            }
            return r
          }(e, r, o),
          s = 2 === i ? function([t, e], [n]) {
            return r => n(fn(t, e, r))
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
              const s = fn(t[i], t[i + 1], o);
              return e[i](s)
            }
          }(t, a);
        return n ? e => s(Ke(t[0], t[i - 1], e)) : s
      }
      const Hn = t => e => 1 - t(1 - e),
        Yn = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
        Xn = t => e => e * e * ((t + 1) * e - t),
        _n = t => t,
        Gn = (2, t => Math.pow(t, 2));
      const qn = Hn(Gn),
        $n = Yn(Gn),
        Zn = t => 1 - Math.sin(Math.acos(t)),
        Kn = Hn(Zn),
        Jn = Yn(Kn),
        Qn = Xn(1.525),
        tr = Hn(Qn),
        er = Yn(Qn),
        nr = (t => {
          const e = Xn(1.525);
          return t => (t *= 2) < 1 ? .5 * e(t) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
        })(),
        rr = t => {
          if (1 === t || 0 === t) return t;
          const e = t * t;
          return t < .36363636363636365 ? 7.5625 * e : t < .7272727272727273 ? 9.075 * e - 9.9 * t + 3.4 : t < .9 ? 12.066481994459833 * e - 19.63545706371191 * t + 8.898060941828255 : 10.8 * t * t - 20.52 * t + 10.72
        },
        or = Hn(rr);

      function ir(t, e) {
        return t.map((() => e || $n)).splice(0, t.length - 1)
      }

      function ar({
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
          return Wn(s, a, {
            ease: Array.isArray(n) ? n : ir(a, n)
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
      const sr = {
          keyframes: ar,
          spring: ln,
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
        ur = 1 / 60 * 1e3,
        lr = "undefined" != typeof performance ? () => performance.now() : () => Date.now(),
        cr = "undefined" != typeof window ? t => window.requestAnimationFrame(t) : t => setTimeout((() => t(lr())), ur);
      let fr = !0,
        dr = !1,
        pr = !1;
      const vr = {
          delta: 0,
          timestamp: 0
        },
        hr = ["read", "update", "preRender", "render", "postRender"],
        mr = hr.reduce(((t, e) => (t[e] = function(t) {
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
        }((() => dr = !0)), t)), {}),
        gr = hr.reduce(((t, e) => {
          const n = mr[e];
          return t[e] = (t, e = !1, r = !1) => (dr || Er(), n.schedule(t, e, r)), t
        }), {}),
        yr = hr.reduce(((t, e) => (t[e] = mr[e].cancel, t)), {}),
        xr = hr.reduce(((t, e) => (t[e] = () => mr[e].process(vr), t)), {}),
        br = t => mr[t].process(vr),
        wr = t => {
          dr = !1, vr.delta = fr ? ur : Math.max(Math.min(t - vr.timestamp, 40), 1), vr.timestamp = t, pr = !0, hr.forEach(br), pr = !1, dr && (fr = !1, cr(wr))
        },
        Er = () => {
          dr = !0, fr = !0, pr || cr(wr)
        },
        Sr = () => vr,
        Pr = gr;

      function Ar(t, e, n = 0) {
        return t - e - n
      }
      const Tr = t => {
        const e = ({
          delta: e
        }) => t(e);
        return {
          start: () => Pr.update(e, !0),
          stop: () => yr.update(e)
        }
      };

      function Cr(t) {
        var e, n, {
            from: r,
            autoplay: o = !0,
            driver: i = Tr,
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
          m = a(t, ["from", "autoplay", "driver", "elapsed", "repeat", "repeatType", "repeatDelay", "onPlay", "onStop", "onComplete", "onRepeat", "onUpdate"]);
        let g, y, x, {
            to: b
          } = m,
          w = 0,
          E = m.duration,
          S = !1,
          P = !0;
        const A = function(t) {
          if (Array.isArray(t.to)) return ar;
          if (sr[t.type]) return sr[t.type];
          const e = new Set(Object.keys(t));
          return e.has("ease") || e.has("duration") && !e.has("dampingRatio") ? ar : e.has("dampingRatio") || e.has("stiffness") || e.has("mass") || e.has("damping") || e.has("restSpeed") || e.has("restDelta") ? ln : ar
        }(m);
        (null === (n = (e = A).needsInterpolation) || void 0 === n ? void 0 : n.call(e, r, b)) && (x = Wn([0, 100], [r, b], {
          clamp: !1
        }), r = 0, b = 100);
        const T = A(Object.assign(Object.assign({}, m), {
          from: r,
          to: b
        }));
        return o && (null == f || f(), g = i((function(t) {
          if (P || (t = -t), s += t, !S) {
            const t = T.next(Math.max(0, s));
            y = t.value, x && (y = x(y)), S = P ? t.done : s <= 0
          }
          null == h || h(y), S && (0 === w && (null != E || (E = s)), w < u ? function(t, e, n, r) {
            return r ? t >= e + n : t <= -n
          }(s, E, c, P) && (w++, "reverse" === l ? (P = w % 2 == 0, s = function(t, e, n = 0, r = !0) {
            return r ? Ar(e + -t, e, n) : e - (t - e) + n
          }(s, E, c, P)) : (s = Ar(s, E, c), "mirror" === l && T.flipTarget()), S = !1, v && v()) : (g.stop(), p && p()))
        })), g.start()), {
          stop: () => {
            null == d || d(), g.stop()
          }
        }
      }

      function Vr(t, e) {
        return e ? t * (1e3 / e) : 0
      }
      var Mr = function(t) {
        return 1e3 * t
      };
      const Lr = (t, e) => 1 - 3 * e + 3 * t,
        Rr = (t, e) => 3 * e - 6 * t,
        kr = t => 3 * t,
        Dr = (t, e, n) => ((Lr(e, n) * t + Rr(e, n)) * t + kr(e)) * t,
        Or = (t, e, n) => 3 * Lr(e, n) * t * t + 2 * Rr(e, n) * t + kr(e),
        jr = .1;

      function Ir(t, e, n, r) {
        if (t === e && n === r) return _n;
        const o = new Float32Array(11);
        for (let e = 0; e < 11; ++e) o[e] = Dr(e * jr, t, n);
        return i => 0 === i || 1 === i ? i : Dr(function(e) {
          let r = 0,
            i = 1;
          for (; 10 !== i && o[i] <= e; ++i) r += jr;
          --i;
          const a = r + (e - o[i]) / (o[i + 1] - o[i]) * jr,
            s = Or(a, t, n);
          return s >= .001 ? function(t, e, n, r) {
            for (let o = 0; o < 8; ++o) {
              const o = Or(e, n, r);
              if (0 === o) return e;
              e -= (Dr(e, n, r) - t) / o
            }
            return e
          }(e, a, t, n) : 0 === s ? a : function(t, e, n, r, o) {
            let i, a, s = 0;
            do {
              a = e + (n - e) / 2, i = Dr(a, r, o) - t, i > 0 ? n = a : e = a
            } while (Math.abs(i) > 1e-7 && ++s < 10);
            return a
          }(e, r, r + jr, t, n)
        }(i), e, r)
      }
      var Fr = {
          linear: _n,
          easeIn: Gn,
          easeInOut: $n,
          easeOut: qn,
          circIn: Zn,
          circInOut: Jn,
          circOut: Kn,
          backIn: Qn,
          backInOut: er,
          backOut: tr,
          anticipate: nr,
          bounceIn: or,
          bounceInOut: t => t < .5 ? .5 * (1 - rr(1 - 2 * t)) : .5 * rr(2 * t - 1) + .5,
          bounceOut: rr
        },
        Br = function(t) {
          if (Array.isArray(t)) {
            m(4 === t.length, "Cubic bezier arrays must contain four numerical values.");
            var e = s(t, 4);
            return Ir(e[0], e[1], e[2], e[3])
          }
          return "string" == typeof t ? (m(void 0 !== Fr[t], "Invalid easing type '".concat(t, "'")), Fr[t]) : t
        },
        Ur = function(t) {
          return Array.isArray(t) && "number" != typeof t[0]
        },
        Nr = function(t, e) {
          return !("zIndex" === t || "number" != typeof e && !Array.isArray(e) && ("string" != typeof e || !On.test(e) || e.startsWith("url(")))
        },
        zr = function() {
          return {
            type: "spring",
            stiffness: 500,
            damping: 25,
            restSpeed: 10
          }
        },
        Wr = function(t) {
          return {
            type: "spring",
            stiffness: 550,
            damping: 0 === t ? 2 * Math.sqrt(550) : 30,
            restSpeed: 10
          }
        },
        Hr = function() {
          return {
            type: "keyframes",
            ease: "linear",
            duration: .3
          }
        },
        Yr = function(t) {
          return {
            type: "keyframes",
            duration: .8,
            values: t
          }
        },
        Xr = {
          x: zr,
          y: zr,
          z: zr,
          rotate: zr,
          rotateX: zr,
          rotateY: zr,
          rotateZ: zr,
          scaleX: Wr,
          scaleY: Wr,
          scale: Wr,
          opacity: Hr,
          backgroundColor: Hr,
          color: Hr,
          default: Wr
        },
        _r = function(t, e) {
          var n;
          return n = Zt(e) ? Yr : Xr[t] || Xr.default, i({
            to: e
          }, n(e))
        };
      const Gr = new Set(["brightness", "contrast", "saturate", "opacity"]);

      function qr(t) {
        let [e, n] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        const [r] = n.match(ct) || [];
        if (!r) return t;
        const o = n.replace(r, "");
        let i = Gr.has(e) ? 1 : 0;
        return r !== n && (i *= 100), e + "(" + i + o + ")"
      }
      const $r = /([a-z-]*)\(.*?\)/g,
        Zr = Object.assign(Object.assign({}, On), {
          getAnimatableNone: t => {
            const e = t.match($r);
            return e ? e.map(qr).join(" ") : t
          }
        });
      var Kr = i(i({}, At), {
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
          filter: Zr,
          WebkitFilter: Zr
        }),
        Jr = function(t) {
          return Kr[t]
        };

      function Qr(t, e) {
        var n, r = Jr(t);
        return r !== Zr && (r = On), null === (n = r.getAnimatableNone) || void 0 === n ? void 0 : n.call(r, e)
      }
      var to = {
          current: !1
        },
        eo = !1;

      function no(t, e, n, r, o) {
        var l, c = io(r, t),
          f = null !== (l = c.from) && void 0 !== l ? l : e.get(),
          d = Nr(t, n);
        "none" === f && d && "string" == typeof n ? f = Qr(t, n) : ro(f) && "string" == typeof n ? f = oo(n) : !Array.isArray(n) && ro(n) && "string" == typeof f && (n = oo(f));
        var p = Nr(t, f);
        return h(p === d, "You are trying to animate ".concat(t, ' from "').concat(f, '" to "').concat(n, '". ').concat(f, " is not an animatable value - to enable this animation set ").concat(f, " to a value animatable to ").concat(n, " via the `style` property.")), p && d && !1 !== c.type ? function() {
          var r = {
            from: f,
            to: n,
            velocity: e.getVelocity(),
            onComplete: o,
            onUpdate: function(t) {
              return e.set(t)
            }
          };
          return "inertia" === c.type || "decay" === c.type ? function({
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
                c = f, f = t, e = Vr(t - c, Sr().delta), (1 === s && t > a || -1 === s && t < a) && y({
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
          }(i(i({}, r), c)) : Cr(i(i({}, function(t, e, n) {
            var r;
            return Array.isArray(e.to) && (null !== (r = t.duration) && void 0 !== r || (t.duration = .8)),
              function(t) {
                Array.isArray(t.to) && null === t.to[0] && (t.to = u([], s(t.to), !1), t.to[0] = t.from)
              }(e),
              function(t) {
                t.when, t.delay, t.delayChildren, t.staggerChildren, t.staggerDirection, t.repeat, t.repeatType, t.repeatDelay, t.from;
                var e = a(t, ["when", "delay", "delayChildren", "staggerChildren", "staggerDirection", "repeat", "repeatType", "repeatDelay", "from"]);
                return !!Object.keys(e).length
              }(t) || (t = i(i({}, t), _r(n, e.to))), i(i({}, e), function(t) {
                var e = t.ease,
                  n = t.times,
                  r = t.yoyo,
                  o = t.flip,
                  s = t.loop,
                  u = a(t, ["ease", "times", "yoyo", "flip", "loop"]),
                  l = i({}, u);
                return n && (l.offset = n), u.duration && (l.duration = Mr(u.duration)), u.repeatDelay && (l.repeatDelay = Mr(u.repeatDelay)), e && (l.ease = Ur(e) ? e.map(Br) : Br(e)), "tween" === u.type && (l.type = "keyframes"), (r || s || o) && (h(!eo, "yoyo, loop and flip have been removed from the API. Replace with repeat and repeatType options."), eo = !0, r ? l.repeatType = "reverse" : s ? l.repeatType = "loop" : o && (l.repeatType = "mirror"), l.repeat = s || r || o || u.repeat), "spring" !== u.type && (l.type = "keyframes"), l
              }(t))
          }(c, r, t)), {
            onUpdate: function(t) {
              var e;
              r.onUpdate(t), null === (e = c.onUpdate) || void 0 === e || e.call(c, t)
            },
            onComplete: function() {
              var t;
              r.onComplete(), null === (t = c.onComplete) || void 0 === t || t.call(c)
            }
          }))
        } : function() {
          var t, r, i = Jt(n);
          return e.set(i), o(), null === (t = null == c ? void 0 : c.onUpdate) || void 0 === t || t.call(c, i), null === (r = null == c ? void 0 : c.onComplete) || void 0 === r || r.call(c), {
            stop: function() {}
          }
        }
      }

      function ro(t) {
        return 0 === t || "string" == typeof t && 0 === parseFloat(t) && -1 === t.indexOf(" ")
      }

      function oo(t) {
        return "number" == typeof t ? 0 : Qr("", t)
      }

      function io(t, e) {
        return t[e] || t.default || t
      }

      function ao(t, e, n, r) {
        return void 0 === r && (r = {}), to.current && (r = {
          type: !1
        }), e.start((function(o) {
          var i, a, s = no(t, e, n, r, o),
            u = function(t, e) {
              var n, r;
              return null !== (r = null !== (n = (io(t, e) || {}).delay) && void 0 !== n ? n : t.delay) && void 0 !== r ? r : 0
            }(r, t),
            l = function() {
              return a = s()
            };
          return u ? i = window.setTimeout(l, Mr(u)) : l(),
            function() {
              clearTimeout(i), null == a || a.stop()
            }
        }))
      }
      var so = function(t) {
          return /^\-?\d*\.?\d+$/.test(t)
        },
        uo = function(t) {
          return /^0[^.\s]+$/.test(t)
        };

      function lo(t, e) {
        -1 === t.indexOf(e) && t.push(e)
      }

      function co(t, e) {
        var n = t.indexOf(e);
        n > -1 && t.splice(n, 1)
      }
      var fo = function() {
          function t() {
            this.subscriptions = []
          }
          return t.prototype.add = function(t) {
            var e = this;
            return lo(this.subscriptions, t),
              function() {
                return co(e.subscriptions, t)
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
        po = function() {
          function t(t) {
            var e, n = this;
            this.version = "6.5.1", this.timeDelta = 0, this.lastUpdated = 0, this.updateSubscribers = new fo, this.velocityUpdateSubscribers = new fo, this.renderSubscribers = new fo, this.canTrackVelocity = !1, this.updateAndNotify = function(t, e) {
              void 0 === e && (e = !0), n.prev = n.current, n.current = t;
              var r = Sr(),
                o = r.delta,
                i = r.timestamp;
              n.lastUpdated !== i && (n.timeDelta = o, n.lastUpdated = i, Pr.postRender(n.scheduleVelocityCheck)), n.prev !== n.current && n.updateSubscribers.notify(n.current), n.velocityUpdateSubscribers.getSize() && n.velocityUpdateSubscribers.notify(n.getVelocity()), e && n.renderSubscribers.notify(n.current)
            }, this.scheduleVelocityCheck = function() {
              return Pr.postRender(n.velocityCheck)
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
            return this.canTrackVelocity ? Vr(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0
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

      function vo(t) {
        return new po(t)
      }
      var ho = function(t) {
          return function(e) {
            return e.test(t)
          }
        },
        mo = [wt, gt, mt, ht, xt, yt, {
          test: function(t) {
            return "auto" === t
          },
          parse: function(t) {
            return t
          }
        }],
        go = function(t) {
          return mo.find(ho(t))
        },
        yo = u(u([], s(mo), !1), [Cn, On], !1),
        xo = function(t) {
          return yo.find(ho(t))
        };

      function bo(t, e, n) {
        t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, vo(n))
      }

      function wo(t, e) {
        var n = O(t, e),
          r = n ? t.makeTargetAnimatable(n, !1) : {},
          o = r.transitionEnd,
          s = void 0 === o ? {} : o;
        r.transition;
        var u = a(r, ["transitionEnd", "transition"]);
        for (var l in u = i(i({}, u), s)) bo(t, l, Jt(u[l]))
      }

      function Eo(t, e) {
        u([], s(e), !1).reverse().forEach((function(n) {
          var r, o = t.getVariant(n);
          o && wo(t, o), null === (r = t.variantChildren) || void 0 === r || r.forEach((function(t) {
            Eo(t, e)
          }))
        }))
      }

      function So(t, e, n) {
        var r, o, i, a, s = Object.keys(e).filter((function(e) {
            return !t.hasValue(e)
          })),
          u = s.length;
        if (u)
          for (var l = 0; l < u; l++) {
            var c = s[l],
              f = e[c],
              d = null;
            Array.isArray(f) && (d = f[0]), null === d && (d = null !== (o = null !== (r = n[c]) && void 0 !== r ? r : t.readValue(c)) && void 0 !== o ? o : e[c]), null != d && ("string" == typeof d && (so(d) || uo(d)) ? d = parseFloat(d) : !xo(d) && On.test(f) && (d = Qr(c, f)), t.addValue(c, vo(d)), null !== (i = (a = n)[c]) && void 0 !== i || (a[c] = d), t.setBaseTarget(c, d))
          }
      }

      function Po(t, e) {
        if (e) return (e[t] || e.default || e).from
      }

      function Ao(t, e, n) {
        var r, o, i = {};
        for (var a in t) i[a] = null !== (r = Po(a, e)) && void 0 !== r ? r : null === (o = n.getValue(a)) || void 0 === o ? void 0 : o.get();
        return i
      }

      function To(t, e, n) {
        var r;
        if (void 0 === n && (n = {}), t.notifyAnimationStart(e), Array.isArray(e)) {
          var o = e.map((function(e) {
            return Co(t, e, n)
          }));
          r = Promise.all(o)
        } else if ("string" == typeof e) r = Co(t, e, n);
        else {
          var i = "function" == typeof e ? O(t, e, n.custom) : e;
          r = Vo(t, i, n)
        }
        return r.then((function() {
          return t.notifyAnimationComplete(e)
        }))
      }

      function Co(t, e, n) {
        var r;
        void 0 === n && (n = {});
        var o = O(t, e, n.custom),
          a = (o || {}).transition,
          u = void 0 === a ? t.getDefaultTransition() || {} : a;
        n.transitionOverride && (u = n.transitionOverride);
        var l = o ? function() {
            return Vo(t, o, n)
          } : function() {
            return Promise.resolve()
          },
          c = (null === (r = t.variantChildren) || void 0 === r ? void 0 : r.size) ? function(r) {
            void 0 === r && (r = 0);
            var o = u.delayChildren,
              a = void 0 === o ? 0 : o,
              s = u.staggerChildren,
              l = u.staggerDirection;
            return function(t, e, n, r, o, a) {
              void 0 === n && (n = 0), void 0 === r && (r = 0), void 0 === o && (o = 1);
              var s = [],
                u = (t.variantChildren.size - 1) * r,
                l = 1 === o ? function(t) {
                  return void 0 === t && (t = 0), t * r
                } : function(t) {
                  return void 0 === t && (t = 0), u - t * r
                };
              return Array.from(t.variantChildren).sort(Mo).forEach((function(t, r) {
                s.push(Co(t, e, i(i({}, a), {
                  delay: n + l(r)
                })).then((function() {
                  return t.notifyAnimationComplete(e)
                })))
              })), Promise.all(s)
            }(t, e, a + r, s, l, n)
          } : function() {
            return Promise.resolve()
          },
          f = u.when;
        if (f) {
          var d = s("beforeChildren" === f ? [l, c] : [c, l], 2),
            p = d[0],
            v = d[1];
          return p().then(v)
        }
        return Promise.all([l(), c(n.delay)])
      }

      function Vo(t, e, n) {
        var r, o = void 0 === n ? {} : n,
          s = o.delay,
          u = void 0 === s ? 0 : s,
          l = o.transitionOverride,
          c = o.type,
          f = t.makeTargetAnimatable(e),
          d = f.transition,
          p = void 0 === d ? t.getDefaultTransition() : d,
          v = f.transitionEnd,
          h = a(f, ["transition", "transitionEnd"]);
        l && (p = l);
        var m = [],
          g = c && (null === (r = t.animationState) || void 0 === r ? void 0 : r.getState()[c]);
        for (var y in h) {
          var x = t.getValue(y),
            b = h[y];
          if (!(!x || void 0 === b || g && Lo(g, y))) {
            var w = i({
              delay: u
            }, p);
            t.shouldReduceMotion && tt(y) && (w = i(i({}, w), {
              type: !1,
              delay: 0
            }));
            var E = ao(y, x, b, w);
            m.push(E)
          }
        }
        return Promise.all(m).then((function() {
          v && wo(t, v)
        }))
      }

      function Mo(t, e) {
        return t.sortNodePosition(e)
      }

      function Lo(t, e) {
        var n = t.protectedKeys,
          r = t.needsAnimating,
          o = n.hasOwnProperty(e) && !0 !== r[e];
        return r[e] = !1, o
      }
      var Ro = [re.Animate, re.InView, re.Focus, re.Hover, re.Tap, re.Drag, re.Exit],
        ko = u([], s(Ro), !1).reverse(),
        Do = Ro.length;

      function Oo(t) {
        return void 0 === t && (t = !1), {
          isActive: t,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {}
        }
      }
      var jo = {
        animation: He((function(t) {
          var e = t.visualElement,
            n = t.animate;
          e.animationState || (e.animationState = function(t) {
            var e, n = function(t) {
                return function(e) {
                  return Promise.all(e.map((function(e) {
                    var n = e.animation,
                      r = e.options;
                    return To(t, n, r)
                  })))
                }
              }(t),
              r = ((e = {})[re.Animate] = Oo(!0), e[re.InView] = Oo(), e[re.Hover] = Oo(), e[re.Tap] = Oo(), e[re.Drag] = Oo(), e[re.Focus] = Oo(), e[re.Exit] = Oo(), e),
              o = {},
              l = !0,
              c = function(e, n) {
                var r = O(t, n);
                if (r) {
                  r.transition;
                  var o = r.transitionEnd,
                    s = a(r, ["transition", "transitionEnd"]);
                  e = i(i(i({}, e), s), o)
                }
                return e
              };

            function f(e, a) {
              for (var f, d = t.getProps(), p = t.getVariantContext(!0) || {}, v = [], h = new Set, m = {}, g = 1 / 0, y = function(n) {
                  var o = ko[n],
                    y = r[o],
                    x = null !== (f = d[o]) && void 0 !== f ? f : p[o],
                    b = k(x),
                    w = o === a ? y.isActive : null;
                  !1 === w && (g = n);
                  var E = x === p[o] && x !== d[o] && b;
                  if (E && l && t.manuallyAnimateOnMount && (E = !1), y.protectedKeys = i({}, m), !y.isActive && null === w || !x && !y.prevProp || $t(x) || "boolean" == typeof x) return "continue";
                  var S = function(t, e) {
                      return "string" == typeof e ? e !== t : !!R(e) && !Ze(e, t)
                    }(y.prevProp, x),
                    P = S || o === a && y.isActive && !E && b || n > g && b,
                    A = Array.isArray(x) ? x : [x],
                    T = A.reduce(c, {});
                  !1 === w && (T = {});
                  var C = y.prevResolvedValues,
                    V = void 0 === C ? {} : C,
                    M = i(i({}, V), T),
                    L = function(t) {
                      P = !0, h.delete(t), y.needsAnimating[t] = !0
                    };
                  for (var D in M) {
                    var O = T[D],
                      j = V[D];
                    m.hasOwnProperty(D) || (O !== j ? Zt(O) && Zt(j) ? !Ze(O, j) || S ? L(D) : y.protectedKeys[D] = !0 : void 0 !== O ? L(D) : h.add(D) : void 0 !== O && h.has(D) ? L(D) : y.protectedKeys[D] = !0)
                  }
                  y.prevProp = x, y.prevResolvedValues = T, y.isActive && (m = i(i({}, m), T)), l && t.blockInitialAnimation && (P = !1), P && !E && v.push.apply(v, u([], s(A.map((function(t) {
                    return {
                      animation: t,
                      options: i({
                        type: o
                      }, e)
                    }
                  }))), !1))
                }, x = 0; x < Do; x++) y(x);
              if (o = i({}, m), h.size) {
                var b = {};
                h.forEach((function(e) {
                  var n = t.getBaseTarget(e);
                  void 0 !== n && (b[e] = n)
                })), v.push({
                  animation: b
                })
              }
              var w = Boolean(v.length);
              return l && !1 === d.initial && !t.manuallyAnimateOnMount && (w = !1), l = !1, w ? n(v) : Promise.resolve()
            }
            return {
              isAnimated: function(t) {
                return void 0 !== o[t]
              },
              animateChanges: f,
              setActive: function(e, n, o) {
                var i;
                if (r[e].isActive === n) return Promise.resolve();
                null === (i = t.variantChildren) || void 0 === i || i.forEach((function(t) {
                  var r;
                  return null === (r = t.animationState) || void 0 === r ? void 0 : r.setActive(e, n)
                })), r[e].isActive = n;
                var a = f(o, e);
                for (var s in r) r[s].protectedKeys = {};
                return a
              },
              setAnimateFunction: function(e) {
                n = e(t)
              },
              getState: function() {
                return r
              }
            }
          }(e)), $t(n) && (0, l.useEffect)((function() {
            return n.subscribe(e)
          }), [n])
        })),
        exit: He((function(t) {
          var e = t.custom,
            n = t.visualElement,
            r = s(qe(), 2),
            o = r[0],
            i = r[1],
            a = (0, l.useContext)(S);
          (0, l.useEffect)((function() {
            var t, r;
            n.isPresent = o;
            var s = null === (t = n.animationState) || void 0 === t ? void 0 : t.setActive(re.Exit, !o, {
              custom: null !== (r = null == a ? void 0 : a.custom) && void 0 !== r ? r : e
            });
            !o && (null == s || s.then(i))
          }), [o])
        }))
      };
      const Io = t => t.hasOwnProperty("x") && t.hasOwnProperty("y"),
        Fo = t => Io(t) && t.hasOwnProperty("z"),
        Bo = (t, e) => Math.abs(t - e);

      function Uo(t, e) {
        if (jn(t) && jn(e)) return Bo(t, e);
        if (Io(t) && Io(e)) {
          const n = Bo(t.x, e.x),
            r = Bo(t.y, e.y),
            o = Fo(t) && Fo(e) ? Bo(t.z, e.z) : 0;
          return Math.sqrt(Math.pow(n, 2) + Math.pow(r, 2) + Math.pow(o, 2))
        }
      }
      var No = function() {
        function t(t, e, n) {
          var r = this,
            o = (void 0 === n ? {} : n).transformPagePoint;
          if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = function() {
              if (r.lastMoveEvent && r.lastMoveEventInfo) {
                var t = Ho(r.lastMoveEventInfo, r.history),
                  e = null !== r.startEvent,
                  n = Uo(t.offset, {
                    x: 0,
                    y: 0
                  }) >= 3;
                if (e || n) {
                  var o = t.point,
                    a = Sr().timestamp;
                  r.history.push(i(i({}, o), {
                    timestamp: a
                  }));
                  var s = r.handlers,
                    u = s.onStart,
                    l = s.onMove;
                  e || (u && u(r.lastMoveEvent, t), r.startEvent = r.lastMoveEvent), l && l(r.lastMoveEvent, t)
                }
              }
            }, this.handlePointerMove = function(t, e) {
              r.lastMoveEvent = t, r.lastMoveEventInfo = zo(e, r.transformPagePoint), le(t) && 0 === t.buttons ? r.handlePointerUp(t, e) : Pr.update(r.updatePoint, !0)
            }, this.handlePointerUp = function(t, e) {
              r.end();
              var n = r.handlers,
                o = n.onEnd,
                i = n.onSessionEnd,
                a = Ho(zo(e, r.transformPagePoint), r.history);
              r.startEvent && o && o(t, a), i && i(t, a)
            }, !(ce(t) && t.touches.length > 1)) {
            this.handlers = e, this.transformPagePoint = o;
            var a = zo(ve(t), this.transformPagePoint),
              s = a.point,
              u = Sr().timestamp;
            this.history = [i(i({}, s), {
              timestamp: u
            })];
            var l = e.onSessionStart;
            l && l(t, Ho(a, this.history)), this.removeListeners = De(Ee(window, "pointermove", this.handlePointerMove), Ee(window, "pointerup", this.handlePointerUp), Ee(window, "pointercancel", this.handlePointerUp))
          }
        }
        return t.prototype.updateHandlers = function(t) {
          this.handlers = t
        }, t.prototype.end = function() {
          this.removeListeners && this.removeListeners(), yr.update(this.updatePoint)
        }, t
      }();

      function zo(t, e) {
        return e ? {
          point: e(t.point)
        } : t
      }

      function Wo(t, e) {
        return {
          x: t.x - e.x,
          y: t.y - e.y
        }
      }

      function Ho(t, e) {
        var n = t.point;
        return {
          point: n,
          delta: Wo(n, Xo(e)),
          offset: Wo(n, Yo(e)),
          velocity: _o(e, .1)
        }
      }

      function Yo(t) {
        return t[0]
      }

      function Xo(t) {
        return t[t.length - 1]
      }

      function _o(t, e) {
        if (t.length < 2) return {
          x: 0,
          y: 0
        };
        for (var n = t.length - 1, r = null, o = Xo(t); n >= 0 && (r = t[n], !(o.timestamp - r.timestamp > Mr(e)));) n--;
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

      function Go(t) {
        return t.max - t.min
      }

      function qo(t, e, n) {
        return void 0 === e && (e = 0), void 0 === n && (n = .01), Uo(t, e) < n
      }

      function $o(t, e, n, r) {
        void 0 === r && (r = .5), t.origin = r, t.originPoint = dn(e.min, e.max, t.origin), t.scale = Go(n) / Go(e), (qo(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1), t.translate = dn(n.min, n.max, t.origin) - t.originPoint, (qo(t.translate) || isNaN(t.translate)) && (t.translate = 0)
      }

      function Zo(t, e, n, r) {
        $o(t.x, e.x, n.x, null == r ? void 0 : r.originX), $o(t.y, e.y, n.y, null == r ? void 0 : r.originY)
      }

      function Ko(t, e, n) {
        t.min = n.min + e.min, t.max = t.min + Go(e)
      }

      function Jo(t, e, n) {
        t.min = e.min - n.min, t.max = t.min + Go(e)
      }

      function Qo(t, e, n) {
        Jo(t.x, e.x, n.x), Jo(t.y, e.y, n.y)
      }

      function ti(t, e, n) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== n ? t.max + n - (t.max - t.min) : void 0
        }
      }

      function ei(t, e) {
        var n, r = e.min - t.min,
          o = e.max - t.max;
        return e.max - e.min < t.max - t.min && (r = (n = s([o, r], 2))[0], o = n[1]), {
          min: r,
          max: o
        }
      }
      var ni = .35;

      function ri(t, e, n) {
        return {
          min: oi(t, e),
          max: oi(t, n)
        }
      }

      function oi(t, e) {
        var n;
        return "number" == typeof t ? t : null !== (n = t[e]) && void 0 !== n ? n : 0
      }
      var ii = function() {
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
        ai = function() {
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

      function si(t) {
        return [t("x"), t("y")]
      }

      function ui(t) {
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

      function li(t) {
        return void 0 === t || 1 === t
      }

      function ci(t) {
        var e = t.scale,
          n = t.scaleX,
          r = t.scaleY;
        return !li(e) || !li(n) || !li(r)
      }

      function fi(t) {
        return ci(t) || di(t.x) || di(t.y) || t.z || t.rotate || t.rotateX || t.rotateY
      }

      function di(t) {
        return t && "0%" !== t
      }

      function pi(t, e, n) {
        return n + e * (t - n)
      }

      function vi(t, e, n, r, o) {
        return void 0 !== o && (t = pi(t, o, r)), pi(t, n, r) + e
      }

      function hi(t, e, n, r, o) {
        void 0 === e && (e = 0), void 0 === n && (n = 1), t.min = vi(t.min, e, n, r, o), t.max = vi(t.max, e, n, r, o)
      }

      function mi(t, e) {
        var n = e.x,
          r = e.y;
        hi(t.x, n.translate, n.scale, n.originPoint), hi(t.y, r.translate, r.scale, r.originPoint)
      }

      function gi(t, e) {
        t.min = t.min + e, t.max = t.max + e
      }

      function yi(t, e, n) {
        var r = s(n, 3),
          o = r[0],
          i = r[1],
          a = r[2],
          u = void 0 !== e[a] ? e[a] : .5,
          l = dn(t.min, t.max, u);
        hi(t, e[o], e[i], l, e.scale)
      }
      var xi = ["x", "scaleX", "originX"],
        bi = ["y", "scaleY", "originY"];

      function wi(t, e) {
        yi(t.x, e, xi), yi(t.y, e, bi)
      }

      function Ei(t, e) {
        return ui(function(t, e) {
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
      var Si = new WeakMap,
        Pi = function() {
          function t(t) {
            this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
              x: 0,
              y: 0
            }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = ai(), this.visualElement = t
          }
          return t.prototype.start = function(t, e) {
            var n = this,
              r = (void 0 === e ? {} : e).snapToCursor,
              o = void 0 !== r && r;
            !1 !== this.visualElement.isPresent && (this.panSession = new No(t, {
              onSessionStart: function(t) {
                n.stopAnimation(), o && n.snapToCursor(ve(t, "page").point)
              },
              onStart: function(t, e) {
                var r, o = n.getProps(),
                  i = o.drag,
                  a = o.dragPropagation,
                  s = o.onDragStart;
                (!i || a || (n.openGlobalLock && n.openGlobalLock(), n.openGlobalLock = Ce(i), n.openGlobalLock)) && (n.isDragging = !0, n.currentDirection = null, n.resolveConstraints(), n.visualElement.projection && (n.visualElement.projection.isAnimationBlocked = !0, n.visualElement.projection.target = void 0), si((function(t) {
                  var e, r, o = n.getAxisMotionValue(t).get() || 0;
                  if (mt.test(o)) {
                    var i = null === (r = null === (e = n.visualElement.projection) || void 0 === e ? void 0 : e.layout) || void 0 === r ? void 0 : r.actual[t];
                    i && (o = Go(i) * (parseFloat(o) / 100))
                  }
                  n.originPoint[t] = o
                })), null == s || s(t, e), null === (r = n.visualElement.animationState) || void 0 === r || r.setActive(re.Drag, !0))
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
            this.isDragging = !1, this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !1), null === (t = this.panSession) || void 0 === t || t.end(), this.panSession = void 0, !this.getProps().dragPropagation && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), null === (e = this.visualElement.animationState) || void 0 === e || e.setActive(re.Drag, !1)
          }, t.prototype.updateAxis = function(t, e, n) {
            var r = this.getProps().drag;
            if (n && Ai(t, r, this.currentDirection)) {
              var o = this.getAxisMotionValue(t),
                i = this.originPoint[t] + n[t];
              this.constraints && this.constraints[t] && (i = function(t, e, n) {
                var r = e.min,
                  o = e.max;
                return void 0 !== r && t < r ? t = n ? dn(r, t, n.min) : Math.max(t, r) : void 0 !== o && t > o && (t = n ? dn(o, t, n.max) : Math.min(t, o)), t
              }(i, this.constraints[t], this.elastic[t])), o.set(i)
            }
          }, t.prototype.resolveConstraints = function() {
            var t = this,
              e = this.getProps(),
              n = e.dragConstraints,
              r = e.dragElastic,
              o = (this.visualElement.projection || {}).layout,
              i = this.constraints;
            n && L(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : this.constraints = !(!n || !o) && function(t, e) {
              var n = e.top,
                r = e.left,
                o = e.bottom,
                i = e.right;
              return {
                x: ti(t.x, r, i),
                y: ti(t.y, n, o)
              }
            }(o.actual, n), this.elastic = function(t) {
              return void 0 === t && (t = ni), !1 === t ? t = 0 : !0 === t && (t = ni), {
                x: ri(t, "left", "right"),
                y: ri(t, "top", "bottom")
              }
            }(r), i !== this.constraints && o && this.constraints && !this.hasMutatedConstraints && si((function(e) {
              t.getAxisMotionValue(e) && (t.constraints[e] = function(t, e) {
                var n = {};
                return void 0 !== e.min && (n.min = e.min - t.min), void 0 !== e.max && (n.max = e.max - t.min), n
              }(o.actual[e], t.constraints[e]))
            }))
          }, t.prototype.resolveRefConstraints = function() {
            var t = this.getProps(),
              e = t.dragConstraints,
              n = t.onMeasureDragConstraints;
            if (!e || !L(e)) return !1;
            var r = e.current;
            m(null !== r, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
            var o = this.visualElement.projection;
            if (!o || !o.layout) return !1;
            var i = function(t, e, n) {
                var r = Ei(t, n),
                  o = e.scroll;
                return o && (gi(r.x, o.x), gi(r.y, o.y)), r
              }(r, o.root, this.visualElement.getTransformPagePoint()),
              a = function(t, e) {
                return {
                  x: ei(t.x, e.x),
                  y: ei(t.y, e.y)
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
              this.hasMutatedConstraints = !!s, s && (a = ui(s))
            }
            return a
          }, t.prototype.startAnimation = function(t) {
            var e = this,
              n = this.getProps(),
              r = n.drag,
              o = n.dragMomentum,
              a = n.dragElastic,
              s = n.dragTransition,
              u = n.dragSnapToOrigin,
              l = n.onDragTransitionEnd,
              c = this.constraints || {},
              f = si((function(n) {
                var l;
                if (Ai(n, r, e.currentDirection)) {
                  var f = null !== (l = null == c ? void 0 : c[n]) && void 0 !== l ? l : {};
                  u && (f = {
                    min: 0,
                    max: 0
                  });
                  var d = a ? 200 : 1e6,
                    p = a ? 40 : 1e7,
                    v = i(i({
                      type: "inertia",
                      velocity: o ? t[n] : 0,
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
            return ao(t, this.getAxisMotionValue(t), 0, e)
          }, t.prototype.stopAnimation = function() {
            var t = this;
            si((function(e) {
              return t.getAxisMotionValue(e).stop()
            }))
          }, t.prototype.getAxisMotionValue = function(t) {
            var e, n, r = "_drag" + t.toUpperCase();
            return this.visualElement.getProps()[r] || this.visualElement.getValue(t, null !== (n = null === (e = this.visualElement.getProps().initial) || void 0 === e ? void 0 : e[t]) && void 0 !== n ? n : 0)
          }, t.prototype.snapToCursor = function(t) {
            var e = this;
            si((function(n) {
              if (Ai(n, e.getProps().drag, e.currentDirection)) {
                var r = e.visualElement.projection,
                  o = e.getAxisMotionValue(n);
                if (r && r.layout) {
                  var i = r.layout.actual[n],
                    a = i.min,
                    s = i.max;
                  o.set(t[n] - dn(a, s, .5))
                }
              }
            }))
          }, t.prototype.scalePositionWithinConstraints = function() {
            var t, e = this,
              n = this.getProps(),
              r = n.drag,
              o = n.dragConstraints,
              i = this.visualElement.projection;
            if (L(o) && i && this.constraints) {
              this.stopAnimation();
              var a = {
                x: 0,
                y: 0
              };
              si((function(t) {
                var n, r, o, i, s, u = e.getAxisMotionValue(t);
                if (u) {
                  var l = u.get();
                  a[t] = (n = {
                    min: l,
                    max: l
                  }, r = e.constraints[t], o = .5, i = Go(n), (s = Go(r)) > i ? o = fn(r.min, r.max - i, n.min) : i > s && (o = fn(n.min, n.max - s, r.min)), Ke(0, 1, o))
                }
              }));
              var s = this.visualElement.getProps().transformTemplate;
              this.visualElement.getInstance().style.transform = s ? s({}, "") : "none", null === (t = i.root) || void 0 === t || t.updateScroll(), i.updateLayout(), this.resolveConstraints(), si((function(t) {
                if (Ai(t, r, null)) {
                  var n = e.getAxisMotionValue(t),
                    o = e.constraints[t],
                    i = o.min,
                    s = o.max;
                  n.set(dn(i, s, a[t]))
                }
              }))
            }
          }, t.prototype.addListeners = function() {
            var t, e = this;
            Si.set(this.visualElement, this);
            var n = Ee(this.visualElement.getInstance(), "pointerdown", (function(t) {
                var n = e.getProps(),
                  r = n.drag,
                  o = n.dragListener;
                r && (void 0 === o || o) && e.start(t)
              })),
              r = function() {
                L(e.getProps().dragConstraints) && (e.constraints = e.resolveRefConstraints())
              },
              o = this.visualElement.projection,
              i = o.addEventListener("measure", r);
            o && !o.layout && (null === (t = o.root) || void 0 === t || t.updateScroll(), o.updateLayout()), r();
            var a = se(window, "resize", (function() {
              return e.scalePositionWithinConstraints()
            }));
            return o.addEventListener("didUpdate", (function(t) {
                var n = t.delta,
                  r = t.hasLayoutChanged;
                e.isDragging && r && (si((function(t) {
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
              r = t.dragDirectionLock,
              o = void 0 !== r && r,
              a = t.dragPropagation,
              s = void 0 !== a && a,
              u = t.dragConstraints,
              l = void 0 !== u && u,
              c = t.dragElastic,
              f = void 0 === c ? ni : c,
              d = t.dragMomentum,
              p = void 0 === d || d;
            return i(i({}, t), {
              drag: n,
              dragDirectionLock: o,
              dragPropagation: s,
              dragConstraints: l,
              dragElastic: f,
              dragMomentum: p
            })
          }, t
        }();

      function Ai(t, e, n) {
        return !(!0 !== e && e !== t || null !== n && n !== t)
      }
      var Ti = {
          pan: He((function(t) {
            var e = t.onPan,
              n = t.onPanStart,
              r = t.onPanEnd,
              o = t.onPanSessionStart,
              i = t.visualElement,
              a = e || n || r || o,
              s = (0, l.useRef)(null),
              u = (0, l.useContext)(b).transformPagePoint,
              c = {
                onSessionStart: o,
                onStart: n,
                onMove: e,
                onEnd: function(t, e) {
                  s.current = null, r && r(t, e)
                }
              };
            (0, l.useEffect)((function() {
              null !== s.current && s.current.updateHandlers(c)
            })), Se(i, "pointerdown", a && function(t) {
              s.current = new No(t, c, {
                transformPagePoint: u
              })
            }), Re((function() {
              return s.current && s.current.end()
            }))
          })),
          drag: He((function(t) {
            var e = t.dragControls,
              n = t.visualElement,
              r = B((function() {
                return new Pi(n)
              }));
            (0, l.useEffect)((function() {
              return e && e.subscribe(r)
            }), [r, e]), (0, l.useEffect)((function() {
              return r.addListeners()
            }), [r])
          }))
        },
        Ci = ["LayoutMeasure", "BeforeLayoutMeasure", "LayoutUpdate", "ViewportBoxUpdate", "Update", "Render", "AnimationComplete", "LayoutAnimationComplete", "AnimationStart", "LayoutAnimationStart", "SetAxisTarget", "Unmount"],
        Vi = function(t) {
          var e = t.treeType,
            n = void 0 === e ? "" : e,
            r = t.build,
            o = t.getBaseTarget,
            a = t.makeTargetAnimatable,
            l = t.measureViewportBox,
            c = t.render,
            f = t.readValueFromInstance,
            d = t.removeValueFromRenderState,
            p = t.sortNodePosition,
            v = t.scrapeMotionValuesFromProps;
          return function(t, e) {
            var h = t.parent,
              m = t.props,
              g = t.presenceId,
              y = t.blockInitialAnimation,
              x = t.visualState,
              b = t.shouldReduceMotion;
            void 0 === e && (e = {});
            var w, E, S = !1,
              P = x.latestValues,
              A = x.renderState,
              T = function() {
                var t = Ci.map((function() {
                    return new fo
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
                    return t.notify.apply(t, u([], s(e), !1))
                  }
                })), n
              }(),
              C = new Map,
              V = new Map,
              M = {},
              L = i({}, P);

            function R() {
              w && S && (D(), c(w, A, m.style, H.projection))
            }

            function D() {
              r(H, A, P, e, m)
            }

            function O() {
              T.notifyUpdate(P)
            }

            function F(t, e) {
              var n = e.onChange((function(e) {
                  P[t] = e, m.onUpdate && Pr.update(O, !1, !0)
                })),
                r = e.onRenderRequest(H.scheduleRender);
              V.set(t, (function() {
                n(), r()
              }))
            }
            var B = v(m);
            for (var U in B) {
              var N = B[U];
              void 0 !== P[U] && ot(N) && N.set(P[U], !1)
            }
            var z = j(m),
              W = I(m),
              H = i(i({
                treeType: n,
                current: null,
                depth: h ? h.depth + 1 : 0,
                parent: h,
                children: new Set,
                presenceId: g,
                shouldReduceMotion: b,
                variantChildren: W ? new Set : void 0,
                isVisible: void 0,
                manuallyAnimateOnMount: Boolean(null == h ? void 0 : h.isMounted()),
                blockInitialAnimation: y,
                isMounted: function() {
                  return Boolean(w)
                },
                mount: function(t) {
                  S = !0, w = H.current = t, H.projection && H.projection.mount(t), W && h && !z && (E = null == h ? void 0 : h.addVariantChild(H)), C.forEach((function(t, e) {
                    return F(e, t)
                  })), null == h || h.children.add(H), H.setProps(m)
                },
                unmount: function() {
                  var t;
                  null === (t = H.projection) || void 0 === t || t.unmount(), yr.update(O), yr.render(R), V.forEach((function(t) {
                    return t()
                  })), null == E || E(), null == h || h.children.delete(H), T.clearAllListeners(), w = void 0, S = !1
                },
                addVariantChild: function(t) {
                  var e, n = H.getClosestVariantNode();
                  if (n) return null === (e = n.variantChildren) || void 0 === e || e.add(t),
                    function() {
                      return n.variantChildren.delete(t)
                    }
                },
                sortNodePosition: function(t) {
                  return p && n === t.treeType ? p(H.getInstance(), t.getInstance()) : 0
                },
                getClosestVariantNode: function() {
                  return W ? H : null == h ? void 0 : h.getClosestVariantNode()
                },
                getLayoutId: function() {
                  return m.layoutId
                },
                getInstance: function() {
                  return w
                },
                getStaticValue: function(t) {
                  return P[t]
                },
                setStaticValue: function(t, e) {
                  return P[t] = e
                },
                getLatestValues: function() {
                  return P
                },
                setVisibility: function(t) {
                  H.isVisible !== t && (H.isVisible = t, H.scheduleRender())
                },
                makeTargetAnimatable: function(t, e) {
                  return void 0 === e && (e = !0), a(H, t, m, e)
                },
                measureViewportBox: function() {
                  return l(w, m)
                },
                addValue: function(t, e) {
                  H.hasValue(t) && H.removeValue(t), C.set(t, e), P[t] = e.get(), F(t, e)
                },
                removeValue: function(t) {
                  var e;
                  C.delete(t), null === (e = V.get(t)) || void 0 === e || e(), V.delete(t), delete P[t], d(t, A)
                },
                hasValue: function(t) {
                  return C.has(t)
                },
                getValue: function(t, e) {
                  var n = C.get(t);
                  return void 0 === n && void 0 !== e && (n = vo(e), H.addValue(t, n)), n
                },
                forEachValue: function(t) {
                  return C.forEach(t)
                },
                readValue: function(t) {
                  var n;
                  return null !== (n = P[t]) && void 0 !== n ? n : f(w, t, e)
                },
                setBaseTarget: function(t, e) {
                  L[t] = e
                },
                getBaseTarget: function(t) {
                  if (o) {
                    var e = o(m, t);
                    if (void 0 !== e && !ot(e)) return e
                  }
                  return L[t]
                }
              }, T), {
                build: function() {
                  return D(), A
                },
                scheduleRender: function() {
                  Pr.render(R, !1, !0)
                },
                syncRender: R,
                setProps: function(t) {
                  (t.transformTemplate || m.transformTemplate) && H.scheduleRender(), m = t, T.updatePropListeners(t), M = function(t, e, n) {
                    var r;
                    for (var o in e) {
                      var i = e[o],
                        a = n[o];
                      if (ot(i)) t.addValue(o, i);
                      else if (ot(a)) t.addValue(o, vo(i));
                      else if (a !== i)
                        if (t.hasValue(o)) {
                          var s = t.getValue(o);
                          !s.hasAnimated && s.set(i)
                        } else t.addValue(o, vo(null !== (r = t.getStaticValue(o)) && void 0 !== r ? r : i))
                    }
                    for (var o in n) void 0 === e[o] && t.removeValue(o);
                    return e
                  }(H, v(m), M)
                },
                getProps: function() {
                  return m
                },
                getVariant: function(t) {
                  var e;
                  return null === (e = m.variants) || void 0 === e ? void 0 : e[t]
                },
                getDefaultTransition: function() {
                  return m.transition
                },
                getTransformPagePoint: function() {
                  return m.transformPagePoint
                },
                getVariantContext: function(t) {
                  if (void 0 === t && (t = !1), t) return null == h ? void 0 : h.getVariantContext();
                  if (!z) {
                    var e = (null == h ? void 0 : h.getVariantContext()) || {};
                    return void 0 !== m.initial && (e.initial = m.initial), e
                  }
                  for (var n = {}, r = 0; r < Li; r++) {
                    var o = Mi[r],
                      i = m[o];
                    (k(i) || !1 === i) && (n[o] = i)
                  }
                  return n
                }
              });
            return H
          }
        },
        Mi = u(["initial"], s(Ro), !1),
        Li = Mi.length;

      function Ri(t) {
        return "string" == typeof t && t.startsWith("var(--")
      }
      var ki = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;

      function Di(t, e, n) {
        void 0 === n && (n = 1), m(n <= 4, 'Max CSS variable fallback depth detected in property "'.concat(t, '". This may indicate a circular fallback dependency.'));
        var r = s(function(t) {
            var e = ki.exec(t);
            if (!e) return [, ];
            var n = s(e, 3);
            return [n[1], n[2]]
          }(t), 2),
          o = r[0],
          i = r[1];
        if (o) {
          var a = window.getComputedStyle(e).getPropertyValue(o);
          return a ? a.trim() : Ri(i) ? Di(i, e, n + 1) : i
        }
      }
      var Oi, ji = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y"]),
        Ii = function(t) {
          return ji.has(t)
        },
        Fi = function(t, e) {
          t.set(e, !1), t.set(e)
        },
        Bi = function(t) {
          return t === wt || t === gt
        };
      ! function(t) {
        t.width = "width", t.height = "height", t.left = "left", t.right = "right", t.top = "top", t.bottom = "bottom"
      }(Oi || (Oi = {}));
      var Ui = function(t, e) {
          return parseFloat(t.split(", ")[e])
        },
        Ni = function(t, e) {
          return function(n, r) {
            var o = r.transform;
            if ("none" === o || !o) return 0;
            var i = o.match(/^matrix3d\((.+)\)$/);
            if (i) return Ui(i[1], e);
            var a = o.match(/^matrix\((.+)\)$/);
            return a ? Ui(a[1], t) : 0
          }
        },
        zi = new Set(["x", "y", "z"]),
        Wi = K.filter((function(t) {
          return !zi.has(t)
        })),
        Hi = {
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
          x: Ni(4, 13),
          y: Ni(5, 14)
        };

      function Yi(t, e, n, r) {
        return function(t) {
          return Object.keys(t).some(Ii)
        }(e) ? function(t, e, n, r) {
          void 0 === n && (n = {}), void 0 === r && (r = {}), e = i({}, e), r = i({}, r);
          var o = Object.keys(e).filter(Ii),
            a = [],
            u = !1,
            l = [];
          if (o.forEach((function(o) {
              var i = t.getValue(o);
              if (t.hasValue(o)) {
                var s, c = n[o],
                  f = go(c),
                  d = e[o];
                if (Zt(d)) {
                  var p = d.length,
                    v = null === d[0] ? 1 : 0;
                  c = d[v], f = go(c);
                  for (var h = v; h < p; h++) s ? m(go(d[h]) === s, "All keyframes must be of the same type") : (s = go(d[h]), m(s === f || Bi(f) && Bi(s), "Keyframes must be of the same dimension as the current value"))
                } else s = go(d);
                if (f !== s)
                  if (Bi(f) && Bi(s)) {
                    var g = i.get();
                    "string" == typeof g && i.set(parseFloat(g)), "string" == typeof d ? e[o] = parseFloat(d) : Array.isArray(d) && s === gt && (e[o] = d.map(parseFloat))
                  } else(null == f ? void 0 : f.transform) && (null == s ? void 0 : s.transform) && (0 === c || 0 === d) ? 0 === c ? i.set(s.transform(c)) : e[o] = f.transform(d) : (u || (a = function(t) {
                    var e = [];
                    return Wi.forEach((function(n) {
                      var r = t.getValue(n);
                      void 0 !== r && (e.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0))
                    })), e.length && t.syncRender(), e
                  }(t), u = !0), l.push(o), r[o] = void 0 !== r[o] ? r[o] : e[o], Fi(i, d))
              }
            })), l.length) {
            var c = l.indexOf("height") >= 0 ? window.pageYOffset : null,
              f = function(t, e, n) {
                var r = e.measureViewportBox(),
                  o = e.getInstance(),
                  i = getComputedStyle(o),
                  a = i.display,
                  s = {};
                "none" === a && e.setStaticValue("display", t.display || "block"), n.forEach((function(t) {
                  s[t] = Hi[t](r, i)
                })), e.syncRender();
                var u = e.measureViewportBox();
                return n.forEach((function(n) {
                  var r = e.getValue(n);
                  Fi(r, s[n]), t[n] = Hi[n](u, i)
                })), t
              }(e, t, l);
            return a.length && a.forEach((function(e) {
              var n = s(e, 2),
                r = n[0],
                o = n[1];
              t.getValue(r).set(o)
            })), t.syncRender(), null !== c && window.scrollTo({
              top: c
            }), {
              target: f,
              transitionEnd: r
            }
          }
          return {
            target: e,
            transitionEnd: r
          }
        }(t, e, n, r) : {
          target: e,
          transitionEnd: r
        }
      }
      var Xi = {
          treeType: "dom",
          readValueFromInstance: function(t, e) {
            if (tt(e)) {
              var n = Jr(e);
              return n && n.default || 0
            }
            var r, o = (r = t, window.getComputedStyle(r));
            return (at(e) ? o.getPropertyValue(e) : o[e]) || 0
          },
          sortNodePosition: function(t, e) {
            return 2 & t.compareDocumentPosition(e) ? 1 : -1
          },
          getBaseTarget: function(t, e) {
            var n;
            return null === (n = t.style) || void 0 === n ? void 0 : n[e]
          },
          measureViewportBox: function(t, e) {
            return Ei(t, e.transformPagePoint)
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
          makeTargetAnimatable: function(t, e, n, r) {
            var o = n.transformValues;
            void 0 === r && (r = !0);
            var s = e.transition,
              u = e.transitionEnd,
              l = a(e, ["transition", "transitionEnd"]),
              c = Ao(l, s || {}, t);
            if (o && (u && (u = o(u)), l && (l = o(l)), c && (c = o(c))), r) {
              So(t, l, c);
              var f = function(t, e, n, r) {
                var o = function(t, e, n) {
                  var r, o = a(e, []),
                    s = t.getInstance();
                  if (!(s instanceof Element)) return {
                    target: o,
                    transitionEnd: n
                  };
                  for (var u in n && (n = i({}, n)), t.forEachValue((function(t) {
                      var e = t.get();
                      if (Ri(e)) {
                        var n = Di(e, s);
                        n && t.set(n)
                      }
                    })), o) {
                    var l = o[u];
                    if (Ri(l)) {
                      var c = Di(l, s);
                      c && (o[u] = c, n && (null !== (r = n[u]) && void 0 !== r || (n[u] = l)))
                    }
                  }
                  return {
                    target: o,
                    transitionEnd: n
                  }
                }(t, e, r);
                return Yi(t, e = o.target, n, r = o.transitionEnd)
              }(t, l, c, u);
              u = f.transitionEnd, l = f.target
            }
            return i({
              transition: s,
              transitionEnd: u
            }, l)
          },
          scrapeMotionValuesFromProps: Gt,
          build: function(t, e, n, r, o) {
            void 0 !== t.isVisible && (e.style.visibility = t.isVisible ? "visible" : "hidden"), Tt(e, n, r, o.transformTemplate)
          },
          render: Yt
        },
        _i = Vi(Xi),
        Gi = Vi(i(i({}, Xi), {
          getBaseTarget: function(t, e) {
            return t[e]
          },
          readValueFromInstance: function(t, e) {
            var n;
            return tt(e) ? (null === (n = Jr(e)) || void 0 === n ? void 0 : n.default) || 0 : (e = Xt.has(e) ? e : Ht(e), t.getAttribute(e))
          },
          scrapeMotionValuesFromProps: qt,
          build: function(t, e, n, r, o) {
            Bt(e, n, r, o.transformTemplate)
          },
          render: _t
        })),
        qi = function(t, e) {
          return G(t) ? Gi(e, {
            enableHardwareAcceleration: !1
          }) : _i(e, {
            enableHardwareAcceleration: !0
          })
        };

      function $i(t, e) {
        return e.max === e.min ? 0 : t / (e.max - e.min) * 100
      }
      var Zi = {
          correct: function(t, e) {
            if (!e.target) return t;
            if ("string" == typeof t) {
              if (!gt.test(t)) return t;
              t = parseFloat(t)
            }
            var n = $i(t, e.target.x),
              r = $i(t, e.target.y);
            return "".concat(n, "% ").concat(r, "%")
          }
        },
        Ki = "_$css",
        Ji = {
          correct: function(t, e) {
            var n = e.treeScale,
              r = e.projectionDelta,
              o = t,
              i = t.includes("var("),
              a = [];
            i && (t = t.replace(ki, (function(t) {
              return a.push(t), Ki
            })));
            var s = On.parse(t);
            if (s.length > 5) return o;
            var u = On.createTransformer(t),
              l = "number" != typeof s[0] ? 1 : 0,
              c = r.x.scale * n.x,
              f = r.y.scale * n.y;
            s[0 + l] /= c, s[1 + l] /= f;
            var d = dn(c, f, .5);
            "number" == typeof s[2 + l] && (s[2 + l] /= d), "number" == typeof s[3 + l] && (s[3 + l] /= d);
            var p = u(s);
            if (i) {
              var v = 0;
              p = p.replace(Ki, (function() {
                var t = a[v];
                return v++, t
              }))
            }
            return p
          }
        },
        Qi = function(t) {
          function e() {
            return null !== t && t.apply(this, arguments) || this
          }
          return o(e, t), e.prototype.componentDidMount = function() {
            var t = this,
              e = this.props,
              n = e.visualElement,
              r = e.layoutGroup,
              o = e.switchLayoutGroup,
              a = e.layoutId,
              s = n.projection;
            $(ta), s && ((null == r ? void 0 : r.group) && r.group.add(s), (null == o ? void 0 : o.register) && a && o.register(s), s.root.didUpdate(), s.addEventListener("animationComplete", (function() {
              t.safeToRemove()
            })), s.setOptions(i(i({}, s.options), {
              onExitComplete: function() {
                return t.safeToRemove()
              }
            }))), U.hasEverUpdated = !0
          }, e.prototype.getSnapshotBeforeUpdate = function(t) {
            var e = this,
              n = this.props,
              r = n.layoutDependency,
              o = n.visualElement,
              i = n.drag,
              a = n.isPresent,
              s = o.projection;
            return s ? (s.isPresent = a, i || t.layoutDependency !== r || void 0 === r ? s.willUpdate() : this.safeToRemove(), t.isPresent !== a && (a ? s.promote() : s.relegate() || Pr.postRender((function() {
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
        }(l.Component),
        ta = {
          borderRadius: i(i({}, Zi), {
            applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
          }),
          borderTopLeftRadius: Zi,
          borderTopRightRadius: Zi,
          borderBottomLeftRadius: Zi,
          borderBottomRightRadius: Zi,
          boxShadow: Ji
        },
        ea = {
          measureLayout: function(t) {
            var e = s(qe(), 2),
              n = e[0],
              r = e[1],
              o = (0, l.useContext)(z);
            return l.createElement(Qi, i({}, t, {
              layoutGroup: o,
              switchLayoutGroup: (0, l.useContext)(W),
              isPresent: n,
              safeToRemove: r
            }))
          }
        };

      function na(t, e, n) {
        void 0 === n && (n = {});
        var r = ot(t) ? t : vo(t);
        return ao("", r, e, n), {
          stop: function() {
            return r.stop()
          },
          isAnimating: function() {
            return r.isAnimating()
          }
        }
      }
      var ra = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        oa = ra.length,
        ia = function(t) {
          return "string" == typeof t ? parseFloat(t) : t
        },
        aa = function(t) {
          return "number" == typeof t || gt.test(t)
        };

      function sa(t, e) {
        var n;
        return null !== (n = t[e]) && void 0 !== n ? n : t.borderRadius
      }
      var ua = ca(0, .5, Kn),
        la = ca(.5, .95, _n);

      function ca(t, e, n) {
        return function(r) {
          return r < t ? 0 : r > e ? 1 : n(fn(t, e, r))
        }
      }

      function fa(t, e) {
        t.min = e.min, t.max = e.max
      }

      function da(t, e) {
        fa(t.x, e.x), fa(t.y, e.y)
      }

      function pa(t, e, n, r, o) {
        return t = pi(t -= e, 1 / n, r), void 0 !== o && (t = pi(t, 1 / o, r)), t
      }

      function va(t, e, n, r, o) {
        var i = s(n, 3),
          a = i[0],
          u = i[1],
          l = i[2];
        ! function(t, e, n, r, o, i, a) {
          if (void 0 === e && (e = 0), void 0 === n && (n = 1), void 0 === r && (r = .5), void 0 === i && (i = t), void 0 === a && (a = t), mt.test(e) && (e = parseFloat(e), e = dn(a.min, a.max, e / 100) - a.min), "number" == typeof e) {
            var s = dn(i.min, i.max, r);
            t === i && (s -= e), t.min = pa(t.min, e, n, s, o), t.max = pa(t.max, e, n, s, o)
          }
        }(t, e[a], e[u], e[l], e.scale, r, o)
      }
      var ha = ["x", "scaleX", "originX"],
        ma = ["y", "scaleY", "originY"];

      function ga(t, e, n, r) {
        va(t.x, e, ha, null == n ? void 0 : n.x, null == r ? void 0 : r.x), va(t.y, e, ma, null == n ? void 0 : n.y, null == r ? void 0 : r.y)
      }

      function ya(t) {
        return 0 === t.translate && 1 === t.scale
      }

      function xa(t) {
        return ya(t.x) && ya(t.y)
      }

      function ba(t, e) {
        return t.x.min === e.x.min && t.x.max === e.x.max && t.y.min === e.y.min && t.y.max === e.y.max
      }
      var wa = function() {
          function t() {
            this.members = []
          }
          return t.prototype.add = function(t) {
            lo(this.members, t), t.scheduleRender()
          }, t.prototype.remove = function(t) {
            if (co(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
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
        Ea = "translate3d(0px, 0px, 0) scale(1, 1) scale(1, 1)";

      function Sa(t, e, n) {
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
        return (i += "scale(".concat(l, ", ").concat(c, ")")) === Ea ? "none" : i
      }
      var Pa = function(t, e) {
          return t.depth - e.depth
        },
        Aa = function() {
          function t() {
            this.children = [], this.isDirty = !1
          }
          return t.prototype.add = function(t) {
            lo(this.children, t), this.isDirty = !0
          }, t.prototype.remove = function(t) {
            co(this.children, t), this.isDirty = !0
          }, t.prototype.forEach = function(t) {
            this.isDirty && this.children.sort(Pa), this.isDirty = !1, this.children.forEach(t)
          }, t
        }();

      function Ta(t) {
        var e = t.attachResizeListener,
          n = t.defaultParent,
          r = t.measureScroll,
          o = t.checkIsScrollRoot,
          a = t.resetTransform;
        return function() {
          function t(t, e, r) {
            var o = this;
            void 0 === e && (e = {}), void 0 === r && (r = null == n ? void 0 : n()), this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = {
              x: 1,
              y: 1
            }, this.eventHandlers = new Map, this.potentialNodes = new Map, this.checkUpdateFailed = function() {
              o.isUpdating && (o.isUpdating = !1, o.clearAllSnapshots())
            }, this.updateProjection = function() {
              o.nodes.forEach(Da), o.nodes.forEach(Oa)
            }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.id = t, this.latestValues = e, this.root = r ? r.root || r : this, this.path = r ? u(u([], s(r.path), !1), [r], !1) : [], this.parent = r, this.depth = r ? r.depth + 1 : 0, t && this.root.registerPotentialNode(t, this);
            for (var i = 0; i < this.path.length; i++) this.path[i].shouldResetTransform = !0;
            this.root === this && (this.nodes = new Aa)
          }
          return t.prototype.addEventListener = function(t, e) {
            return this.eventHandlers.has(t) || this.eventHandlers.set(t, new fo), this.eventHandlers.get(t).add(e)
          }, t.prototype.notifyListeners = function(t) {
            for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
            var r = this.eventHandlers.get(t);
            null == r || r.notify.apply(r, u([], s(e), !1))
          }, t.prototype.hasListeners = function(t) {
            return this.eventHandlers.has(t)
          }, t.prototype.registerPotentialNode = function(t, e) {
            this.potentialNodes.set(t, e)
          }, t.prototype.mount = function(t, n) {
            var r, o = this;
            if (void 0 === n && (n = !1), !this.instance) {
              this.isSVG = t instanceof SVGElement && "svg" !== t.tagName, this.instance = t;
              var a = this.options,
                s = a.layoutId,
                u = a.layout,
                l = a.visualElement;
              if (l && !l.getInstance() && l.mount(t), this.root.nodes.add(this), null === (r = this.parent) || void 0 === r || r.children.add(this), this.id && this.root.potentialNodes.delete(this.id), n && (u || s) && (this.isLayoutDirty = !0), e) {
                var c, f = function() {
                  return o.root.updateBlockedByResize = !1
                };
                e(t, (function() {
                  o.root.updateBlockedByResize = !0, clearTimeout(c), c = window.setTimeout(f, 250), U.hasAnimatedSinceResize && (U.hasAnimatedSinceResize = !1, o.nodes.forEach(ka))
                }))
              }
              s && this.root.registerSharedNode(s, this), !1 !== this.options.animate && l && (s || u) && this.addEventListener("didUpdate", (function(t) {
                var e, n, r, a, s, u = t.delta,
                  c = t.hasLayoutChanged,
                  f = t.hasRelativeTargetChanged,
                  d = t.layout;
                if (o.isTreeAnimationBlocked()) return o.target = void 0, void(o.relativeTarget = void 0);
                var p = null !== (n = null !== (e = o.options.transition) && void 0 !== e ? e : l.getDefaultTransition()) && void 0 !== n ? n : Na,
                  v = l.getProps(),
                  h = v.onLayoutAnimationStart,
                  m = v.onLayoutAnimationComplete,
                  g = !o.targetLayout || !ba(o.targetLayout, d) || f,
                  y = !c && f;
                if ((null === (r = o.resumeFrom) || void 0 === r ? void 0 : r.instance) || y || c && (g || !o.currentAnimation)) {
                  o.resumeFrom && (o.resumingFrom = o.resumeFrom, o.resumingFrom.resumingFrom = void 0), o.setAnimationOrigin(u, y);
                  var x = i(i({}, io(p, "layout")), {
                    onPlay: h,
                    onComplete: m
                  });
                  l.shouldReduceMotion && (x.delay = 0, x.type = !1), o.startAnimation(x)
                } else c || 0 !== o.animationProgress || o.finishAnimation(), o.isLead() && (null === (s = (a = o.options).onExitComplete) || void 0 === s || s.call(a));
                o.targetLayout = d
              }))
            }
          }, t.prototype.unmount = function() {
            var t, e;
            this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this), null === (t = this.getStack()) || void 0 === t || t.remove(this), null === (e = this.parent) || void 0 === e || e.children.delete(this), this.instance = void 0, yr.preRender(this.updateProjection)
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
            this.isUpdateBlocked() || (this.isUpdating = !0, null === (t = this.nodes) || void 0 === t || t.forEach(ja))
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
            if (this.isUpdateBlocked()) return this.unblockUpdate(), this.clearAllSnapshots(), void this.nodes.forEach(La);
            this.isUpdating && (this.isUpdating = !1, this.potentialNodes.size && (this.potentialNodes.forEach(za), this.potentialNodes.clear()), this.nodes.forEach(Ra), this.nodes.forEach(Ca), this.nodes.forEach(Va), this.clearAllSnapshots(), xr.update(), xr.preRender(), xr.render())
          }, t.prototype.clearAllSnapshots = function() {
            this.nodes.forEach(Ma), this.sharedNodes.forEach(Ia)
          }, t.prototype.scheduleUpdateProjection = function() {
            Pr.preRender(this.updateProjection, !1, !0)
          }, t.prototype.scheduleCheckAfterUnmount = function() {
            var t = this;
            Pr.postRender((function() {
              t.isLayoutDirty ? t.root.didUpdate() : t.root.checkUpdateFailed()
            }))
          }, t.prototype.updateSnapshot = function() {
            if (!this.snapshot && this.instance) {
              var t = this.measure(),
                e = this.removeTransform(this.removeElementScroll(t));
              Ha(e), this.snapshot = {
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
              Ha(n);
              var r = this.layout;
              this.layout = {
                measured: n,
                actual: this.removeElementScroll(n)
              }, this.layoutCorrected = ai(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.actual), null === (t = this.options.visualElement) || void 0 === t || t.notifyLayoutMeasure(this.layout.actual, null == r ? void 0 : r.actual)
            }
          }, t.prototype.updateScroll = function() {
            this.options.layoutScroll && this.instance && (this.isScrollRoot = o(this.instance), this.scroll = r(this.instance))
          }, t.prototype.resetTransform = function() {
            var t;
            if (a) {
              var e = this.isLayoutDirty || this.shouldResetTransform,
                n = this.projectionDelta && !xa(this.projectionDelta),
                r = null === (t = this.options.visualElement) || void 0 === t ? void 0 : t.getProps().transformTemplate,
                o = null == r ? void 0 : r(this.latestValues, ""),
                i = o !== this.prevTransformTemplateValue;
              e && (n || fi(this.latestValues) || i) && (a(this.instance, o), this.shouldResetTransform = !1, this.scheduleRender())
            }
          }, t.prototype.measure = function() {
            var t = this.options.visualElement;
            if (!t) return ai();
            var e = t.measureViewportBox(),
              n = this.root.scroll;
            return n && (gi(e.x, n.x), gi(e.y, n.y)), e
          }, t.prototype.removeElementScroll = function(t) {
            var e = ai();
            da(e, t);
            for (var n = 0; n < this.path.length; n++) {
              var r = this.path[n],
                o = r.scroll,
                i = r.options,
                a = r.isScrollRoot;
              if (r !== this.root && o && i.layoutScroll) {
                if (a) {
                  da(e, t);
                  var s = this.root.scroll;
                  s && (gi(e.x, -s.x), gi(e.y, -s.y))
                }
                gi(e.x, o.x), gi(e.y, o.y)
              }
            }
            return e
          }, t.prototype.applyTransform = function(t, e) {
            void 0 === e && (e = !1);
            var n = ai();
            da(n, t);
            for (var r = 0; r < this.path.length; r++) {
              var o = this.path[r];
              !e && o.options.layoutScroll && o.scroll && o !== o.root && wi(n, {
                x: -o.scroll.x,
                y: -o.scroll.y
              }), fi(o.latestValues) && wi(n, o.latestValues)
            }
            return fi(this.latestValues) && wi(n, this.latestValues), n
          }, t.prototype.removeTransform = function(t) {
            var e, n = ai();
            da(n, t);
            for (var r = 0; r < this.path.length; r++) {
              var o = this.path[r];
              if (o.instance && fi(o.latestValues)) {
                ci(o.latestValues) && o.updateSnapshot();
                var i = ai();
                da(i, o.measure()), ga(n, o.latestValues, null === (e = o.snapshot) || void 0 === e ? void 0 : e.layout, i)
              }
            }
            return fi(this.latestValues) && ga(n, this.latestValues), n
          }, t.prototype.setTargetDelta = function(t) {
            this.targetDelta = t, this.root.scheduleUpdateProjection()
          }, t.prototype.setOptions = function(t) {
            var e;
            this.options = i(i(i({}, this.options), t), {
              crossfade: null === (e = t.crossfade) || void 0 === e || e
            })
          }, t.prototype.clearMeasurements = function() {
            this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
          }, t.prototype.resolveTargetDelta = function() {
            var t, e, n, r, o = this.options,
              i = o.layout,
              a = o.layoutId;
            this.layout && (i || a) && (this.targetDelta || this.relativeTarget || (this.relativeParent = this.getClosestProjectingParent(), this.relativeParent && this.relativeParent.layout && (this.relativeTarget = ai(), this.relativeTargetOrigin = ai(), Qo(this.relativeTargetOrigin, this.layout.actual, this.relativeParent.layout.actual), da(this.relativeTarget, this.relativeTargetOrigin))), (this.relativeTarget || this.targetDelta) && (this.target || (this.target = ai(), this.targetWithTransforms = ai()), this.relativeTarget && this.relativeTargetOrigin && (null === (t = this.relativeParent) || void 0 === t ? void 0 : t.target) ? (e = this.target, n = this.relativeTarget, r = this.relativeParent.target, Ko(e.x, n.x, r.x), Ko(e.y, n.y, r.y)) : this.targetDelta ? (Boolean(this.resumingFrom) ? this.target = this.applyTransform(this.layout.actual) : da(this.target, this.layout.actual), mi(this.target, this.targetDelta)) : da(this.target, this.layout.actual), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, this.relativeParent = this.getClosestProjectingParent(), this.relativeParent && Boolean(this.relativeParent.resumingFrom) === Boolean(this.resumingFrom) && !this.relativeParent.options.layoutScroll && this.relativeParent.target && (this.relativeTarget = ai(), this.relativeTargetOrigin = ai(), Qo(this.relativeTargetOrigin, this.target, this.relativeParent.target), da(this.relativeTarget, this.relativeTargetOrigin)))))
          }, t.prototype.getClosestProjectingParent = function() {
            if (this.parent && !fi(this.parent.latestValues)) return (this.parent.relativeTarget || this.parent.targetDelta) && this.parent.layout ? this.parent : this.parent.getClosestProjectingParent()
          }, t.prototype.calcProjection = function() {
            var t, e = this.options,
              n = e.layout,
              r = e.layoutId;
            if (this.isTreeAnimating = Boolean((null === (t = this.parent) || void 0 === t ? void 0 : t.isTreeAnimating) || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), this.layout && (n || r)) {
              var o = this.getLead();
              da(this.layoutCorrected, this.layout.actual),
                function(t, e, n, r) {
                  var o, i;
                  void 0 === r && (r = !1);
                  var a = n.length;
                  if (a) {
                    var s, u;
                    e.x = e.y = 1;
                    for (var l = 0; l < a; l++) u = (s = n[l]).projectionDelta, "contents" !== (null === (i = null === (o = s.instance) || void 0 === o ? void 0 : o.style) || void 0 === i ? void 0 : i.display) && (r && s.options.layoutScroll && s.scroll && s !== s.root && wi(t, {
                      x: -s.scroll.x,
                      y: -s.scroll.y
                    }), u && (e.x *= u.x.scale, e.y *= u.y.scale, mi(t, u)), r && fi(s.latestValues) && wi(t, s.latestValues))
                  }
                }(this.layoutCorrected, this.treeScale, this.path, Boolean(this.resumingFrom) || this !== o);
              var i = o.target;
              if (i) {
                this.projectionDelta || (this.projectionDelta = ii(), this.projectionDeltaWithTransform = ii());
                var a = this.treeScale.x,
                  s = this.treeScale.y,
                  u = this.projectionTransform;
                Zo(this.projectionDelta, this.layoutCorrected, i, this.latestValues), this.projectionTransform = Sa(this.projectionDelta, this.treeScale), this.projectionTransform === u && this.treeScale.x === a && this.treeScale.y === s || (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", i))
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
            var n, r = this;
            void 0 === e && (e = !1);
            var o = this.snapshot,
              a = (null == o ? void 0 : o.latestValues) || {},
              s = i({}, this.latestValues),
              u = ii();
            this.relativeTarget = this.relativeTargetOrigin = void 0, this.attemptToResolveRelativeTarget = !e;
            var l = ai(),
              c = null == o ? void 0 : o.isShared,
              f = ((null === (n = this.getStack()) || void 0 === n ? void 0 : n.members.length) || 0) <= 1,
              d = Boolean(c && !f && !0 === this.options.crossfade && !this.path.some(Ua));
            this.animationProgress = 0, this.mixTargetDelta = function(e) {
              var n, o, i, p, v, h = e / 1e3;
              Fa(u.x, t.x, h), Fa(u.y, t.y, h), r.setTargetDelta(u), r.relativeTarget && r.relativeTargetOrigin && r.layout && (null === (n = r.relativeParent) || void 0 === n ? void 0 : n.layout) && (Qo(l, r.layout.actual, r.relativeParent.layout.actual), o = r.relativeTarget, i = r.relativeTargetOrigin, p = l, v = h, Ba(o.x, i.x, p.x, v), Ba(o.y, i.y, p.y, v)), c && (r.animationValues = s, function(t, e, n, r, o, i) {
                var a, s, u, l;
                o ? (t.opacity = dn(0, null !== (a = n.opacity) && void 0 !== a ? a : 1, ua(r)), t.opacityExit = dn(null !== (s = e.opacity) && void 0 !== s ? s : 1, 0, la(r))) : i && (t.opacity = dn(null !== (u = e.opacity) && void 0 !== u ? u : 1, null !== (l = n.opacity) && void 0 !== l ? l : 1, r));
                for (var c = 0; c < oa; c++) {
                  var f = "border".concat(ra[c], "Radius"),
                    d = sa(e, f),
                    p = sa(n, f);
                  void 0 === d && void 0 === p || (d || (d = 0), p || (p = 0), 0 === d || 0 === p || aa(d) === aa(p) ? (t[f] = Math.max(dn(ia(d), ia(p), r), 0), (mt.test(p) || mt.test(d)) && (t[f] += "%")) : t[f] = p)
                }(e.rotate || n.rotate) && (t.rotate = dn(e.rotate || 0, n.rotate || 0, r))
              }(s, a, r.latestValues, h, d, f)), r.root.scheduleUpdateProjection(), r.scheduleRender(), r.animationProgress = h
            }, this.mixTargetDelta(0)
          }, t.prototype.startAnimation = function(t) {
            var e, n, r = this;
            this.notifyListeners("animationStart"), null === (e = this.currentAnimation) || void 0 === e || e.stop(), this.resumingFrom && (null === (n = this.resumingFrom.currentAnimation) || void 0 === n || n.stop()), this.pendingAnimation && (yr.update(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = Pr.update((function() {
              U.hasAnimatedSinceResize = !0, r.currentAnimation = na(0, 1e3, i(i({}, t), {
                onUpdate: function(e) {
                  var n;
                  r.mixTargetDelta(e), null === (n = t.onUpdate) || void 0 === n || n.call(t, e)
                },
                onComplete: function() {
                  var e;
                  null === (e = t.onComplete) || void 0 === e || e.call(t), r.completeAnimation()
                }
              })), r.resumingFrom && (r.resumingFrom.currentAnimation = r.currentAnimation), r.pendingAnimation = void 0
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
            e && n && r && (da(e, n), wi(e, o), Zo(this.projectionDeltaWithTransform, this.layoutCorrected, e, o))
          }, t.prototype.registerSharedNode = function(t, e) {
            var n, r, o;
            this.sharedNodes.has(t) || this.sharedNodes.set(t, new wa), this.sharedNodes.get(t).add(e), e.promote({
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
              for (var e = !1, n = {}, r = 0; r < Z.length; r++) {
                var o = "rotate" + Z[r];
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
            if (this.needsReset) return this.needsReset = !1, s.opacity = "", s.pointerEvents = Qt(t.pointerEvents) || "", s.transform = u ? u(this.latestValues, "") : "none", s;
            var l = this.getLead();
            if (!this.projectionDelta || !this.layout || !l.target) {
              var c = {};
              return this.options.layoutId && (c.opacity = null !== (n = this.latestValues.opacity) && void 0 !== n ? n : 1, c.pointerEvents = Qt(t.pointerEvents) || ""), this.hasProjected && !fi(this.latestValues) && (c.transform = u ? u({}, "") : "none", this.hasProjected = !1), c
            }
            var f = l.animationValues || l.latestValues;
            this.applyTransformsToTarget(), s.transform = Sa(this.projectionDeltaWithTransform, this.treeScale, f), u && (s.transform = u(f, s.transform));
            var d = this.projectionDelta,
              p = d.x,
              v = d.y;
            for (var h in s.transformOrigin = "".concat(100 * p.origin, "% ").concat(100 * v.origin, "% 0"), l.animationValues ? s.opacity = l === this ? null !== (o = null !== (r = f.opacity) && void 0 !== r ? r : this.latestValues.opacity) && void 0 !== o ? o : 1 : this.preserveOpacity ? this.latestValues.opacity : f.opacityExit : s.opacity = l === this ? null !== (i = f.opacity) && void 0 !== i ? i : "" : null !== (a = f.opacityExit) && void 0 !== a ? a : 0, q)
              if (void 0 !== f[h]) {
                var m = q[h],
                  g = m.correct,
                  y = m.applyTo,
                  x = g(f[h], l);
                if (y)
                  for (var b = y.length, w = 0; w < b; w++) s[y[w]] = x;
                else s[h] = x
              } return this.options.layoutId && (s.pointerEvents = l === this ? Qt(t.pointerEvents) || "" : "none"), s
          }, t.prototype.clearSnapshot = function() {
            this.resumeFrom = this.snapshot = void 0
          }, t.prototype.resetTree = function() {
            this.root.nodes.forEach((function(t) {
              var e;
              return null === (e = t.currentAnimation) || void 0 === e ? void 0 : e.stop()
            })), this.root.nodes.forEach(La), this.root.sharedNodes.clear()
          }, t
        }()
      }

      function Ca(t) {
        t.updateLayout()
      }

      function Va(t) {
        var e, n, r, o, i = null !== (n = null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) && void 0 !== n ? n : t.snapshot;
        if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
          var a = t.layout,
            s = a.actual,
            u = a.measured;
          "size" === t.options.animationType ? si((function(t) {
            var e = i.isShared ? i.measured[t] : i.layout[t],
              n = Go(e);
            e.min = s[t].min, e.max = e.min + n
          })) : "position" === t.options.animationType && si((function(t) {
            var e = i.isShared ? i.measured[t] : i.layout[t],
              n = Go(s[t]);
            e.max = e.min + n
          }));
          var l = ii();
          Zo(l, s, i.layout);
          var c = ii();
          i.isShared ? Zo(c, t.applyTransform(u, !0), i.measured) : Zo(c, s, i.layout);
          var f = !xa(l),
            d = !1;
          if (!t.resumeFrom && (t.relativeParent = t.getClosestProjectingParent(), t.relativeParent && !t.relativeParent.resumeFrom)) {
            var p = t.relativeParent,
              v = p.snapshot,
              h = p.layout;
            if (v && h) {
              var m = ai();
              Qo(m, i.layout, v.layout);
              var g = ai();
              Qo(g, s, h.actual), ba(m, g) || (d = !0)
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

      function Ma(t) {
        t.clearSnapshot()
      }

      function La(t) {
        t.clearMeasurements()
      }

      function Ra(t) {
        var e = t.options.visualElement;
        (null == e ? void 0 : e.getProps().onBeforeLayoutMeasure) && e.notifyBeforeLayoutMeasure(), t.resetTransform()
      }

      function ka(t) {
        t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0
      }

      function Da(t) {
        t.resolveTargetDelta()
      }

      function Oa(t) {
        t.calcProjection()
      }

      function ja(t) {
        t.resetRotation()
      }

      function Ia(t) {
        t.removeLeadSnapshot()
      }

      function Fa(t, e, n) {
        t.translate = dn(e.translate, 0, n), t.scale = dn(e.scale, 1, n), t.origin = e.origin, t.originPoint = e.originPoint
      }

      function Ba(t, e, n, r) {
        t.min = dn(e.min, n.min, r), t.max = dn(e.max, n.max, r)
      }

      function Ua(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit
      }
      var Na = {
        duration: .45,
        ease: [.4, 0, .1, 1]
      };

      function za(t, e) {
        for (var n = t.root, r = t.path.length - 1; r >= 0; r--)
          if (Boolean(t.path[r].instance)) {
            n = t.path[r];
            break
          } var o = (n && n !== t.root ? n.instance : document).querySelector('[data-projection-id="'.concat(e, '"]'));
        o && t.mount(o, !0)
      }

      function Wa(t) {
        t.min = Math.round(t.min), t.max = Math.round(t.max)
      }

      function Ha(t) {
        Wa(t.x), Wa(t.y)
      }
      var Ya = Ta({
          attachResizeListener: function(t, e) {
            return se(t, "resize", e)
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
        Xa = {
          current: void 0
        },
        _a = Ta({
          measureScroll: function(t) {
            return {
              x: t.scrollLeft,
              y: t.scrollTop
            }
          },
          defaultParent: function() {
            if (!Xa.current) {
              var t = new Ya(0, {});
              t.mount(window), t.setOptions({
                layoutScroll: !0
              }), Xa.current = t
            }
            return Xa.current
          },
          resetTransform: function(t, e) {
            t.style.transform = null != e ? e : "none"
          },
          checkIsScrollRoot: function(t) {
            return Boolean("fixed" === window.getComputedStyle(t).position)
          }
        }),
        Ga = i(i(i(i({}, jo), Ye), Ti), ea),
        qa = X((function(t, e) {
          return ae(t, e, Ga, qi, _a)
        }));

      function $a(t) {
        return Y(ae(t, {
          forwardMotionProps: !1
        }, Ga, qi, _a))
      }
      var Za = X(ae);

      function Ka() {
        var t = (0, l.useRef)(!1);
        return A((function() {
          return t.current = !0,
            function() {
              t.current = !1
            }
        }), []), t
      }

      function Ja() {
        var t = Ka(),
          e = s((0, l.useState)(0), 2),
          n = e[0],
          r = e[1],
          o = (0, l.useCallback)((function() {
            t.current && r(n + 1)
          }), [n]);
        return [(0, l.useCallback)((function() {
          return Pr.postRender(o)
        }), [o]), n]
      }
      var Qa = function(t) {
        var e = t.children,
          n = t.initial,
          r = t.isPresent,
          o = t.onExitComplete,
          i = t.custom,
          a = t.presenceAffectsLayout,
          s = B(ts),
          u = Ge(),
          c = (0, l.useMemo)((function() {
            return {
              id: u,
              initial: n,
              isPresent: r,
              custom: i,
              onExitComplete: function(t) {
                var e, n;
                s.set(t, !0);
                try {
                  for (var r = function(t) {
                      var e = "function" == typeof Symbol && Symbol.iterator,
                        n = e && t[e],
                        r = 0;
                      if (n) return n.call(t);
                      if (t && "number" == typeof t.length) return {
                        next: function() {
                          return t && r >= t.length && (t = void 0), {
                            value: t && t[r++],
                            done: !t
                          }
                        }
                      };
                      throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
                    }(s.values()), i = r.next(); !i.done; i = r.next())
                    if (!i.value) return
                } catch (t) {
                  e = {
                    error: t
                  }
                } finally {
                  try {
                    i && !i.done && (n = r.return) && n.call(r)
                  } finally {
                    if (e) throw e.error
                  }
                }
                null == o || o()
              },
              register: function(t) {
                return s.set(t, !1),
                  function() {
                    return s.delete(t)
                  }
              }
            }
          }), a ? void 0 : [r]);
        return (0, l.useMemo)((function() {
          s.forEach((function(t, e) {
            return s.set(e, !1)
          }))
        }), [r]), l.useEffect((function() {
          !r && !s.size && (null == o || o())
        }), [r]), l.createElement(S.Provider, {
          value: c
        }, e)
      };

      function ts() {
        return new Map
      }
      var es = function(t) {
          return t.key || ""
        },
        ns = function(t) {
          var e = t.children,
            n = t.custom,
            r = t.initial,
            o = void 0 === r || r,
            i = t.onExitComplete,
            a = t.exitBeforeEnter,
            c = t.presenceAffectsLayout,
            d = void 0 === c || c,
            p = s(Ja(), 1)[0],
            v = (0, l.useContext)(z).forceRender;
          v && (p = v);
          var h = Ka(),
            m = function(t) {
              var e = [];
              return l.Children.forEach(t, (function(t) {
                (0, l.isValidElement)(t) && e.push(t)
              })), e
            }(e),
            g = m,
            y = new Set,
            x = (0, l.useRef)(g),
            b = (0, l.useRef)(new Map).current,
            w = (0, l.useRef)(!0);
          if (A((function() {
              w.current = !1,
                function(t, e) {
                  t.forEach((function(t) {
                    var n = es(t);
                    e.set(n, t)
                  }))
                }(m, b), x.current = g
            })), Re((function() {
              w.current = !0, b.clear(), y.clear()
            })), w.current) return l.createElement(l.Fragment, null, g.map((function(t) {
            return l.createElement(Qa, {
              key: es(t),
              isPresent: !0,
              initial: !!o && void 0,
              presenceAffectsLayout: d
            }, t)
          })));
          g = u([], s(g), !1);
          for (var E = x.current.map(es), S = m.map(es), P = E.length, T = 0; T < P; T++) {
            var C = E[T]; - 1 === S.indexOf(C) && y.add(C)
          }
          return a && y.size && (g = []), y.forEach((function(t) {
            if (-1 === S.indexOf(t)) {
              var e = b.get(t);
              if (e) {
                var r = E.indexOf(t);
                g.splice(r, 0, l.createElement(Qa, {
                  key: es(e),
                  isPresent: !1,
                  onExitComplete: function() {
                    b.delete(t), y.delete(t);
                    var e = x.current.findIndex((function(e) {
                      return e.key === t
                    }));
                    if (x.current.splice(e, 1), !y.size) {
                      if (x.current = m, !1 === h.current) return;
                      p(), i && i()
                    }
                  },
                  custom: n,
                  presenceAffectsLayout: d
                }, e))
              }
            }
          })), g = g.map((function(t) {
            var e = t.key;
            return y.has(e) ? t : l.createElement(Qa, {
              key: es(t),
              isPresent: !0,
              presenceAffectsLayout: d
            }, t)
          })), "production" !== f && a && g.length > 1 && console.warn("You're attempting to animate multiple children within AnimatePresence, but its exitBeforeEnter prop is set to true. This will lead to odd visual behaviour."), l.createElement(l.Fragment, null, y.size ? g : g.map((function(t) {
            return (0, l.cloneElement)(t)
          })))
        },
        rs = (0, l.createContext)(null),
        os = function(t) {
          return !t.isLayoutDirty && t.willUpdate(!1)
        };
      var is = function(t) {
          return !0 === t
        },
        as = function(t) {
          var e, n, r = t.children,
            o = t.id,
            a = t.inheritId,
            u = t.inherit,
            c = void 0 === u || u;
          void 0 !== a && (c = a);
          var f, d, p, v = (0, l.useContext)(z),
            h = (0, l.useContext)(rs),
            m = s(Ja(), 2),
            g = m[0],
            y = m[1],
            x = (0, l.useRef)(null),
            b = null !== (e = v.id) && void 0 !== e ? e : h;
          null === x.current && (function(t) {
            return is(!0 === t) || "id" === t
          }(c) && b && (o = o ? b + "-" + o : b), x.current = {
            id: o,
            group: is(c) && null !== (n = null == v ? void 0 : v.group) && void 0 !== n ? n : (f = new Set, d = new WeakMap, p = function() {
              return f.forEach(os)
            }, {
              add: function(t) {
                f.add(t), d.set(t, t.addEventListener("willUpdate", p))
              },
              remove: function(t) {
                var e;
                f.delete(t), null === (e = d.get(t)) || void 0 === e || e(), d.delete(t), p()
              },
              dirty: p
            })
          });
          var w = (0, l.useMemo)((function() {
            return i(i({}, x.current), {
              forceRender: g
            })
          }), [y]);
          return l.createElement(z.Provider, {
            value: w
          }, r)
        },
        ss = 0,
        us = function(t) {
          var e = t.children;
          return l.useEffect((function() {
            h(!1, "AnimateSharedLayout is deprecated: https://www.framer.com/docs/guide-upgrade/##shared-layout-animations")
          }), []), l.createElement(as, {
            id: B((function() {
              return "asl-".concat(ss++)
            }))
          }, e)
        };

      function ls(t) {
        var e = t.children,
          n = t.isValidProp,
          r = a(t, ["children", "isValidProp"]);
        n && Dt(n), (r = i(i({}, (0, l.useContext)(b)), r)).isStatic = B((function() {
          return r.isStatic
        }));
        var o = (0, l.useMemo)((function() {
          return r
        }), [JSON.stringify(r.transition), r.transformPagePoint, r.reducedMotion]);
        return l.createElement(b.Provider, {
          value: o
        }, e)
      }

      function cs(t) {
        var e = t.children,
          n = t.features,
          r = t.strict,
          o = void 0 !== r && r,
          i = s((0, l.useState)(!fs(n)), 2)[1],
          u = (0, l.useRef)(void 0);
        if (!fs(n)) {
          var c = n.renderer,
            f = a(n, ["renderer"]);
          u.current = c, v(f)
        }
        return (0, l.useEffect)((function() {
          fs(n) && n().then((function(t) {
            var e = t.renderer;
            v(a(t, ["renderer"])), u.current = e, i(!0)
          }))
        }), []), l.createElement(g.Provider, {
          value: {
            renderer: u.current,
            strict: o
          }
        }, e)
      }

      function fs(t) {
        return "function" == typeof t
      }
      var ds = (0, l.createContext)(null);
      var ps = (0, l.forwardRef)((function(t, e) {
        var n = t.children,
          r = t.as,
          o = void 0 === r ? "ul" : r,
          u = t.axis,
          c = void 0 === u ? "y" : u,
          f = t.onReorder,
          d = t.values,
          p = a(t, ["children", "as", "axis", "onReorder", "values"]),
          v = B((function() {
            return qa(o)
          })),
          h = [],
          g = (0, l.useRef)(!1);
        m(Boolean(d), "Reorder.Group must be provided a values prop");
        var y = {
          axis: c,
          registerItem: function(t, e) {
            e && -1 === h.findIndex((function(e) {
              return t === e.value
            })) && (h.push({
              value: t,
              layout: e[c]
            }), h.sort(hs))
          },
          updateOrder: function(t, e, n) {
            if (!g.current) {
              var r = function(t, e, n, r) {
                if (!r) return t;
                var o = t.findIndex((function(t) {
                  return t.value === e
                }));
                if (-1 === o) return t;
                var i = r > 0 ? 1 : -1,
                  a = t[o + i];
                if (!a) return t;
                var u = t[o],
                  l = a.layout,
                  c = dn(l.min, l.max, .5);
                return 1 === i && u.layout.max + n > c || -1 === i && u.layout.min + n < c ? function(t, e, n) {
                  var r = s(t).slice(0),
                    o = e < 0 ? r.length + e : e;
                  if (o >= 0 && o < r.length) {
                    var i = n < 0 ? r.length + n : n,
                      a = s(r.splice(e, 1), 1)[0];
                    r.splice(i, 0, a)
                  }
                  return r
                }(t, o, o + i) : t
              }(h, t, e, n);
              h !== r && (g.current = !0, f(r.map(vs).filter((function(t) {
                return -1 !== d.indexOf(t)
              }))))
            }
          }
        };
        return (0, l.useEffect)((function() {
          g.current = !1
        })), l.createElement(v, i({}, p, {
          ref: e
        }), l.createElement(ds.Provider, {
          value: y
        }, n))
      }));

      function vs(t) {
        return t.value
      }

      function hs(t, e) {
        return t.layout.min - e.layout.min
      }

      function ms(t) {
        var e = B((function() {
          return vo(t)
        }));
        if ((0, l.useContext)(b).isStatic) {
          var n = s((0, l.useState)(t), 2)[1];
          (0, l.useEffect)((function() {
            return e.onChange(n)
          }), [])
        }
        return e
      }
      var gs = function(t) {
        return function(t) {
          return "object" == typeof t && t.mix
        }(t) ? t.mix : void 0
      };

      function ys() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        var n = !Array.isArray(t[0]),
          r = n ? 0 : -1,
          o = t[0 + r],
          a = t[1 + r],
          s = t[2 + r],
          u = t[3 + r],
          l = Wn(a, s, i({
            mixer: gs(s[0])
          }, u));
        return n ? l(o) : l
      }

      function xs(t, e) {
        var n = ms(e()),
          r = function() {
            return n.set(e())
          };
        return r(),
          function(t, e) {
            A((function() {
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
            return Pr.update(r, !1, !0)
          })), n
      }

      function bs(t, e, n, r) {
        var o = "function" == typeof e ? e : ys(e, n, r);
        return Array.isArray(t) ? ws(t, o) : ws([t], (function(t) {
          var e = s(t, 1)[0];
          return o(e)
        }))
      }

      function ws(t, e) {
        var n = B((function() {
          return []
        }));
        return xs(t, (function() {
          n.length = 0;
          for (var r = t.length, o = 0; o < r; o++) n[o] = t[o].get();
          return e(n)
        }))
      }

      function Es(t, e) {
        return void 0 === e && (e = 0), ot(t) ? t : ms(e)
      }
      var Ss = (0, l.forwardRef)((function(t, e) {
          var n = t.children,
            r = t.style,
            o = t.value,
            u = t.as,
            c = void 0 === u ? "li" : u,
            f = t.onDrag,
            d = t.layout,
            p = void 0 === d || d,
            v = a(t, ["children", "style", "value", "as", "onDrag", "layout"]),
            h = B((function() {
              return qa(c)
            })),
            g = (0, l.useContext)(ds),
            y = {
              x: Es(null == r ? void 0 : r.x),
              y: Es(null == r ? void 0 : r.y)
            },
            x = bs([y.x, y.y], (function(t) {
              var e = s(t, 2),
                n = e[0],
                r = e[1];
              return n || r ? 1 : "unset"
            })),
            b = (0, l.useRef)(null);
          m(Boolean(g), "Reorder.Item must be a child of Reorder.Group");
          var w = g,
            E = w.axis,
            S = w.registerItem,
            P = w.updateOrder;
          return (0, l.useEffect)((function() {
            S(o, b.current)
          }), [g]), l.createElement(h, i({
            drag: E
          }, v, {
            dragSnapToOrigin: !0,
            style: i(i({}, r), {
              x: y.x,
              y: y.y,
              zIndex: x
            }),
            layout: p,
            onDrag: function(t, e) {
              var n = e.velocity;
              n[E] && P(o, y[E].get(), n[E]), null == f || f(t, e)
            },
            onLayoutMeasure: function(t) {
              b.current = t
            },
            ref: e
          }), n)
        })),
        Ps = {
          Group: ps,
          Item: Ss
        },
        As = i(i({
          renderer: qi
        }, jo), Ye),
        Ts = i(i(i(i({}, As), Ti), ea), {
          projectionNodeConstructor: _a
        });

      function Cs(t) {
        for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        var r = t.length;
        return xs(e, (function() {
          for (var n = "", o = 0; o < r; o++) n += t[o], e[o] && (n += e[o].get());
          return n
        }))
      }

      function Vs(t, e) {
        void 0 === e && (e = {});
        var n = (0, l.useContext)(b).isStatic,
          r = (0, l.useRef)(null),
          o = ms(ot(t) ? t.get() : t);
        return (0, l.useMemo)((function() {
            return o.attach((function(t, a) {
              return n ? a(t) : (r.current && r.current.stop(), r.current = Cr(i(i({
                from: o.get(),
                to: t,
                velocity: o.getVelocity()
              }, e), {
                onUpdate: a
              })), o.get())
            }))
          }), [JSON.stringify(e)]),
          function(t, e) {
            A((function() {
              if (ot(t)) return t.onChange(e)
            }), [e])
          }(t, (function(t) {
            return o.set(parseFloat(t))
          })), o
      }

      function Ms(t) {
        var e = ms(t.getVelocity());
        return (0, l.useEffect)((function() {
          return t.velocityUpdateSubscribers.add((function(t) {
            e.set(t)
          }))
        }), [t]), e
      }

      function Ls(t, e) {
        var n;
        return "string" == typeof t ? e ? (null !== (n = e[t]) && void 0 !== n || (e[t] = document.querySelectorAll(t)), t = e[t]) : t = document.querySelectorAll(t) : t instanceof Element && (t = [t]), Array.from(t || [])
      }
      const Rs = new WeakMap;
      let ks;

      function Ds(t) {
        let {
          target: e,
          contentRect: n,
          borderBoxSize: r
        } = t;
        var o;
        null === (o = Rs.get(e)) || void 0 === o || o.forEach((t => {
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

      function Os(t) {
        t.forEach(Ds)
      }
      const js = new Set;
      let Is;
      const Fs = (t, e, n) => e - t == 0 ? 1 : (n - t) / (e - t),
        Bs = 50,
        Us = () => ({
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
        Ns = {
          x: {
            length: "Width",
            position: "Left"
          },
          y: {
            length: "Height",
            position: "Top"
          }
        };

      function zs(t, e, n, r) {
        const o = n[e],
          {
            length: i,
            position: a
          } = Ns[e],
          s = o.current,
          u = n.time;
        o.current = t["scroll" + a], o.scrollLength = t["scroll" + i] - t["client" + i], o.offset.length = 0, o.offset[0] = 0, o.offset[1] = o.scrollLength, o.progress = Fs(0, o.scrollLength, o.current);
        const l = r - u;
        var c, f;
        o.velocity = l > Bs ? 0 : (c = o.current - s, (f = l) ? c * (1e3 / f) : 0)
      }
      const Ws = t => t,
        Hs = (t, e, n) => -n * t + n * e + t;

      function Ys(t, e) {
        const n = t[t.length - 1];
        for (let r = 1; r <= e; r++) {
          const o = Fs(0, e, r);
          t.push(Hs(n, 1, o))
        }
      }

      function Xs(t) {
        const e = [0];
        return Ys(e, t - 1), e
      }
      const _s = t => "number" == typeof t,
        Gs = t => Array.isArray(t) && !_s(t[0]),
        qs = (t, e, n) => {
          const r = e - t;
          return ((n - t) % r + r) % r + t
        },
        $s = (t, e, n) => Math.min(Math.max(n, t), e);
      const Zs = {
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
        },
        Ks = t => "string" == typeof t,
        Js = {
          start: 0,
          center: .5,
          end: 1
        };

      function Qs(t, e) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          r = 0;
        if (void 0 !== Js[t] && (t = Js[t]), Ks(t)) {
          const e = parseFloat(t);
          t.endsWith("px") ? r = e : t.endsWith("%") ? t = e / 100 : t.endsWith("vw") ? r = e / 100 * document.documentElement.clientWidth : t.endsWith("vh") ? r = e / 100 * document.documentElement.clientHeight : t = e
        }
        return _s(t) && (r = e * t), n + r
      }
      const tu = [0, 0];

      function eu(t, e, n, r) {
        let o = Array.isArray(t) ? t : tu,
          i = 0,
          a = 0;
        return _s(t) ? o = [t, t] : Ks(t) && (o = (t = t.trim()).includes(" ") ? t.split(" ") : [t, Js[t] ? t : "0"]), i = Qs(o[0], n, r), a = Qs(o[1], e), i - a
      }
      const nu = {
        x: 0,
        y: 0
      };

      function ru(t, e, n) {
        let {
          offset: r = Zs.All
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
        }(o, t) : nu, u = o === t ? {
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
          const n = eu(r[t], l[a], u[a], s[i]);
          c || n === e[i].interpolatorOffsets[t] || (c = !0), e[i].offset[t] = n
        }
        c && (e[i].interpolate = function(t) {
          let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Xs(t.length),
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Ws;
          const r = t.length,
            o = r - e.length;
          return o > 0 && Ys(e, o), o => {
            let i = 0;
            for (; i < r - 2 && !(o < e[i + 1]); i++);
            let a = $s(0, 1, Fs(e[i], e[i + 1], o));
            const s = function(t, e) {
              return Gs(t) ? t[qs(0, t.length, e)] : t
            }(n, i);
            return a = s(a), Hs(t[i], t[i + 1], a)
          }
        }(Xs(f), e[i].offset), e[i].interpolatorOffsets = [...e[i].offset]), e[i].progress = e[i].interpolate(e[i].current)
      }
      const ou = new WeakMap,
        iu = new WeakMap,
        au = new WeakMap,
        su = t => t === document.documentElement ? window : t;

      function uu(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        var {
          container: n = document.documentElement
        } = e, r = a(e, ["container"]);
        let o = au.get(n);
        o || (o = new Set, au.set(n, o));
        const i = Us(),
          s = function(t, e, n) {
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
                  zs(t, "x", e, n), zs(t, "y", e, n), e.time = n
                }(t, n, e), (r.offset || r.target) && ru(t, n, r)
              },
              notify: "function" == typeof e ? () => e(n) : (i = e, a = n[o], i.pause(), i.forEachNative(((t, e) => {
                let {
                  easing: n
                } = e;
                var r, o;
                if (t.updateDuration) n || (t.easing = Ws), t.updateDuration(1);
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
          }(n, t, i, r);
        if (o.add(s), !ou.has(n)) {
          const t = () => {
            const t = performance.now();
            for (const t of o) t.measure();
            for (const e of o) e.update(t);
            for (const t of o) t.notify()
          };
          ou.set(n, t);
          const e = su(n);
          window.addEventListener("resize", t, {
            passive: !0
          }), n !== document.documentElement && iu.set(n, function(t, e) {
            return "function" == typeof t ? (n = t, js.add(n), Is || (Is = () => {
              const t = {
                  width: window.innerWidth,
                  height: window.innerHeight
                },
                e = {
                  target: window,
                  size: t,
                  contentSize: t
                };
              js.forEach((t => t(e)))
            }, window.addEventListener("resize", Is)), () => {
              js.delete(n), !js.size && Is && (Is = void 0)
            }) : function(t, e) {
              ks || "undefined" != typeof ResizeObserver && (ks = new ResizeObserver(Os));
              const n = Ls(t);
              return n.forEach((t => {
                let n = Rs.get(t);
                n || (n = new Set, Rs.set(t, n)), n.add(e), null == ks || ks.observe(t)
              })), () => {
                n.forEach((t => {
                  const n = Rs.get(t);
                  null == n || n.delete(e), (null == n ? void 0 : n.size) || null == ks || ks.unobserve(t)
                }))
              }
            }(t, e);
            var n
          }(n, t)), e.addEventListener("scroll", t, {
            passive: !0
          })
        }
        const u = ou.get(n),
          l = requestAnimationFrame(u);
        return () => {
          var e;
          "function" != typeof t && t.stop(), cancelAnimationFrame(l);
          const r = au.get(n);
          if (!r) return;
          if (r.delete(s), r.size) return;
          const o = ou.get(n);
          ou.delete(n), o && (su(n).removeEventListener("scroll", o), null === (e = iu.get(n)) || void 0 === e || e(), window.removeEventListener("resize", o))
        }
      }
      var lu = function() {
        return {
          scrollX: vo(0),
          scrollY: vo(0),
          scrollXProgress: vo(0),
          scrollYProgress: vo(0)
        }
      };

      function cu(t) {
        void 0 === t && (t = {});
        var e = t.container,
          n = t.target,
          r = a(t, ["container", "target"]),
          o = B(lu);
        return A((function() {
          return uu((function(t) {
            var e = t.x,
              n = t.y;
            o.scrollX.set(e.current), o.scrollXProgress.set(e.progress), o.scrollY.set(n.current), o.scrollYProgress.set(n.progress)
          }), i(i({}, r), {
            container: (null == e ? void 0 : e.current) || void 0,
            target: (null == n ? void 0 : n.current) || void 0
          }))
        }), []), o
      }

      function fu(t) {
        return je(!1, "useElementScroll is deprecated. Convert to useScroll({ container: ref })."), cu({
          container: t
        })
      }

      function du() {
        return je(!1, "useViewportScroll is deprecated. Convert to useScroll()."), cu()
      }
      var pu = "undefined" != typeof performance ? function() {
        return performance.now()
      } : function() {
        return Date.now()
      };

      function vu(t) {
        var e = B(pu),
          n = (0, l.useContext)(b).isStatic;
        (0, l.useEffect)((function() {
          if (!n) {
            var r = function(n) {
              var r = n.timestamp;
              t(r - e)
            };
            return Pr.update(r, !0),
              function() {
                return yr.update(r)
              }
          }
        }), [t])
      }

      function hu() {
        var t = ms(0);
        return vu((function(e) {
          return t.set(e)
        })), t
      }

      function mu() {
        var t = !1,
          e = [],
          n = new Set,
          r = {
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
                  i.push(To(t, r, {
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
              return m(t, "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."), n.forEach((function(t) {
                ! function(t, e) {
                  Array.isArray(e) ? Eo(t, e) : "string" == typeof e ? Eo(t, [e]) : wo(t, e)
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
                  r.start.apply(r, u([], s(e), !1)).then(n)
                })),
                function() {
                  t = !1, r.stop()
                }
            }
          };
        return r
      }

      function gu() {
        var t = B(mu);
        return (0, l.useEffect)(t.mount, []), t
      }
      var yu = gu;
      const xu = (t, e, n) => {
        const r = e - t;
        return ((n - t) % r + r) % r + t
      };

      function bu() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        var n = (0, l.useRef)(0),
          r = s((0, l.useState)(t[n.current]), 2),
          o = r[0],
          i = r[1];
        return [o, (0, l.useCallback)((function(e) {
          n.current = "number" != typeof e ? xu(0, t.length, n.current + 1) : e, i(t[n.current])
        }), u([t.length], s(t), !1))]
      }
      const wu = {
        any: 0,
        all: 1
      };

      function Eu(t, e) {
        var n = void 0 === e ? {} : e,
          r = n.root,
          o = n.margin,
          i = n.amount,
          a = n.once,
          u = void 0 !== a && a,
          c = s((0, l.useState)(!1), 2),
          f = c[0],
          d = c[1];
        return (0, l.useEffect)((function() {
          var e;
          if (!(!t.current || u && f)) {
            var n = {
              root: null !== (e = null == r ? void 0 : r.current) && void 0 !== e ? e : void 0,
              margin: o,
              amount: "some" === i ? "any" : i
            };
            return function(t, e) {
              let {
                root: n,
                margin: r,
                amount: o = "any"
              } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
              if ("undefined" == typeof IntersectionObserver) return () => {};
              const i = Ls(t),
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
                  threshold: "number" == typeof o ? o : wu[o]
                });
              return i.forEach((t => s.observe(t))), () => s.disconnect()
            }(t.current, (function() {
              return d(!0), u ? void 0 : function() {
                return d(!1)
              }
            }), n)
          }
        }), [r, t, o, u]), f
      }
      var Su = function() {
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
        Pu = function() {
          return new Su
        };

      function Au() {
        return B(Pu)
      }

      function Tu() {
        return Cu
      }

      function Cu(t) {
        Xa.current && (Xa.current.isUpdating = !1, Xa.current.blockUpdate(), null == t || t())
      }

      function Vu() {
        var t = s(Ja(), 2),
          e = t[0],
          n = t[1],
          r = Tu();
        return (0, l.useEffect)((function() {
            Pr.postRender((function() {
              return Pr.postRender((function() {
                return to.current = !1
              }))
            }))
          }), [n]),
          function(t) {
            r((function() {
              to.current = !0, e(), t()
            }))
          }
      }

      function Mu() {
        return l.useCallback((function() {
          var t = Xa.current;
          t && t.resetTree()
        }), [])
      }
      var Lu = function() {
          return {}
        },
        Ru = Vi({
          build: function() {},
          measureViewportBox: ai,
          resetTransform: function() {},
          restoreTransform: function() {},
          removeValueFromRenderState: function() {},
          render: function() {},
          scrapeMotionValuesFromProps: Lu,
          readValueFromInstance: function(t, e, n) {
            return n.initialState[e] || 0
          },
          makeTargetAnimatable: function(t, e) {
            var n = e.transition,
              r = e.transitionEnd,
              o = a(e, ["transition", "transitionEnd"]);
            return So(t, o, Ao(o, n || {}, t)), i({
              transition: n,
              transitionEnd: r
            }, o)
          }
        }),
        ku = ee({
          scrapeMotionValuesFromProps: Lu,
          createRenderState: Lu
        });

      function Du(t) {
        var e = s((0, l.useState)(t), 2),
          n = e[0],
          r = e[1],
          o = ku({}, !1),
          a = B((function() {
            return Ru({
              props: {},
              visualState: o
            }, {
              initialState: t
            })
          }));
        return (0, l.useEffect)((function() {
          return a.mount({}), a.unmount
        }), [a]), (0, l.useEffect)((function() {
          a.setProps({
            onUpdate: function(t) {
              r(i({}, t))
            }
          })
        }), [r, a]), [n, B((function() {
          return function(t) {
            return To(a, t)
          }
        }))]
      }
      var Ou = function(t) {
          return t > .001 ? 1 / t : 1e5
        },
        ju = !1;

      function Iu(t) {
        var e = ms(1),
          n = ms(1),
          r = E();
        return m(!(!t && !r), "If no scale values are provided, useInvertedScale must be used within a child of another motion component."), h(ju, "useInvertedScale is deprecated and will be removed in 3.0. Use the layout prop instead."), ju = !0, t ? (e = t.scaleX || e, n = t.scaleY || n) : r && (e = r.getValue("scaleX", 1), n = r.getValue("scaleY", 1)), {
          scaleX: bs(e, Ou),
          scaleY: bs(n, Ou)
        }
      }
    }
  }
]);
//# sourceMappingURL=de912c57da746e540262cc17963a39e4.js.map