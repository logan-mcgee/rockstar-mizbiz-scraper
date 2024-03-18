! function() {
  try {
    var t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      e = (new Error).stack;
    e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "5ef1b2e7-7bfe-488e-b26d-50c89813ffec", t._sentryDebugIdIdentifier = "sentry-dbid-5ef1b2e7-7bfe-488e-b26d-50c89813ffec")
  } catch (t) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "7434858002db60462282401ab192924e3d1a0a27",
  packageName: "@rockstargames/modules-gtao-career-progress-hub",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "7434858002db60462282401ab192924e3d1a0a27"
}, (self.webpackChunk_rockstargames_modules_gtao_career_progress_hub = self.webpackChunk_rockstargames_modules_gtao_career_progress_hub || []).push([
  [436], {
    6540: t => {
      var e, n, o = t.exports = {};

      function r() {
        throw new Error("setTimeout has not been defined")
      }

      function i() {
        throw new Error("clearTimeout has not been defined")
      }

      function s(t) {
        if (e === setTimeout) return setTimeout(t, 0);
        if ((e === r || !e) && setTimeout) return e = setTimeout, setTimeout(t, 0);
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
          e = "function" == typeof setTimeout ? setTimeout : r
        } catch (t) {
          e = r
        }
        try {
          n = "function" == typeof clearTimeout ? clearTimeout : i
        } catch (t) {
          n = i
        }
      }();
      var a, l = [],
        u = !1,
        c = -1;

      function h() {
        u && a && (u = !1, a.length ? l = a.concat(l) : c = -1, l.length && d())
      }

      function d() {
        if (!u) {
          var t = s(h);
          u = !0;
          for (var e = l.length; e;) {
            for (a = l, l = []; ++c < e;) a && a[c].run();
            c = -1, e = l.length
          }
          a = null, u = !1,
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

      function f() {}
      o.nextTick = function(t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        l.push(new p(t, e)), 1 !== l.length || u || s(d)
      }, p.prototype.run = function() {
        this.fun.apply(null, this.array)
      }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = f, o.addListener = f, o.once = f, o.off = f, o.removeListener = f, o.removeAllListeners = f, o.emit = f, o.prependListener = f, o.prependOnceListener = f, o.listeners = function(t) {
        return []
      }, o.binding = function(t) {
        throw new Error("process.binding is not supported")
      }, o.cwd = function() {
        return "/"
      }, o.chdir = function(t) {
        throw new Error("process.chdir is not supported")
      }, o.umask = function() {
        return 0
      }
    },
    6436: (t, e, n) => {
      "use strict";
      n.r(e), n.d(e, {
        AnimatePresence: () => Hs,
        AnimateSharedLayout: () => Ks,
        AnimationType: () => zt,
        DeprecatedLayoutGroupContext: () => Ys,
        DragControls: () => yl,
        FlatTree: () => ls,
        LayoutGroup: () => qs,
        LayoutGroupContext: () => P,
        LazyMotion: () => Qs,
        MotionConfig: () => Js,
        MotionConfigContext: () => r,
        MotionContext: () => i,
        MotionValue: () => Je,
        PresenceContext: () => a,
        Reorder: () => pa,
        SwitchLayoutGroupContext: () => A,
        VisualElement: () => Ti,
        addPointerEvent: () => oe,
        addScaleCorrector: () => B,
        animate: () => Ui,
        animateVisualElement: () => rr,
        animationControls: () => hl,
        animations: () => pr,
        buildTransform: () => z,
        calcLength: () => Sr,
        checkTargetForNewValues: () => kn,
        clamp: () => H,
        createBox: () => Or,
        createDomMotionComponent: () => Is,
        createMotionComponent: () => C,
        delay: () => zo,
        distance: () => fr,
        distance2D: () => mr,
        domAnimation: () => fa,
        domMax: () => ma,
        filterProps: () => gt,
        isBrowser: () => l,
        isDragActive: () => ue,
        isMotionComponent: () => bl,
        isMotionValue: () => j,
        isValidMotionProp: () => pt,
        m: () => Os,
        makeUseVisualState: () => Ot,
        mix: () => Gn,
        motion: () => Bs,
        motionValue: () => Qe,
        optimizedAppearDataAttribute: () => jn,
        pipe: () => fe,
        resolveMotionValue: () => It,
        spring: () => ko,
        startOptimizedAppearAnimation: () => Vl,
        transform: () => aa,
        unwrapMotionComponent: () => El,
        useAnimation: () => pl,
        useAnimationControls: () => dl,
        useAnimationFrame: () => rl,
        useCycle: () => ml,
        useDeprecatedAnimatedState: () => kl,
        useDeprecatedInvertedScale: () => Bl,
        useDomEvent: () => Wt,
        useDragControls: () => wl,
        useElementScroll: () => nl,
        useForceUpdate: () => js,
        useInView: () => vl,
        useInstantLayoutTransition: () => Sl,
        useInstantTransition: () => Tl,
        useIsPresent: () => Me,
        useIsomorphicLayoutEffect: () => u,
        useMotionTemplate: () => ga,
        useMotionValue: () => ia,
        useMotionValueEvent: () => ll,
        usePresence: () => Ce,
        useReducedMotion: () => ul,
        useReducedMotionConfig: () => cl,
        useResetProjection: () => Al,
        useScroll: () => el,
        useSpring: () => va,
        useTime: () => il,
        useTransform: () => ua,
        useUnmountEffect: () => de,
        useVelocity: () => ya,
        useViewportScroll: () => ol,
        useVisualElementContext: () => s,
        useWillChange: () => al,
        wrap: () => fl,
        wrapHandler: () => Zt
      });
      var o = n(8200);
      const r = (0, o.createContext)({
          transformPagePoint: t => t,
          isStatic: !1,
          reducedMotion: "never"
        }),
        i = (0, o.createContext)({});

      function s() {
        return (0, o.useContext)(i).visualElement
      }
      const a = (0, o.createContext)(null),
        l = "undefined" != typeof document,
        u = l ? o.useLayoutEffect : o.useEffect,
        c = (0, o.createContext)({
          strict: !1
        });

      function h(t) {
        return "object" == typeof t && Object.prototype.hasOwnProperty.call(t, "current")
      }

      function d(t) {
        return "string" == typeof t || Array.isArray(t)
      }

      function p(t) {
        return "object" == typeof t && "function" == typeof t.start
      }
      const f = ["initial", "animate", "exit", "whileHover", "whileDrag", "whileTap", "whileFocus", "whileInView"];

      function m(t) {
        return p(t.animate) || f.some((e => d(t[e])))
      }

      function g(t) {
        return Boolean(m(t) || t.variants)
      }

      function v(t) {
        return Array.isArray(t) ? t.join(" ") : t
      }
      const y = t => ({
          isEnabled: e => t.some((t => !!e[t]))
        }),
        x = {
          measureLayout: y(["layout", "layoutId", "drag"]),
          animation: y(["animate", "exit", "variants", "whileHover", "whileTap", "whileFocus", "whileDrag", "whileInView"]),
          exit: y(["exit"]),
          drag: y(["drag", "dragControls"]),
          focus: y(["whileFocus"]),
          hover: y(["whileHover", "onHoverStart", "onHoverEnd"]),
          tap: y(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
          pan: y(["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]),
          inView: y(["whileInView", "onViewportEnter", "onViewportLeave"])
        };

      function w(t) {
        for (const e in t) "projectionNodeConstructor" === e ? x.projectionNodeConstructor = t[e] : x[e].Component = t[e]
      }

      function b(t) {
        const e = (0, o.useRef)(null);
        return null === e.current && (e.current = t()), e.current
      }
      const E = {
        hasAnimatedSinceResize: !0,
        hasEverUpdated: !1
      };
      let S = 1;
      const P = (0, o.createContext)({});
      class T extends o.Component {
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
      const A = (0, o.createContext)({}),
        V = Symbol.for("motionComponentSymbol");

      function C({
        preloadedFeatures: t,
        createVisualElement: e,
        projectionNodeConstructor: n,
        useRender: p,
        useVisualState: f,
        Component: g
      }) {
        t && w(t);
        const y = (0, o.forwardRef)((function(y, w) {
          const P = {
              ...(0, o.useContext)(r),
              ...y,
              layoutId: M(y)
            },
            {
              isStatic: V
            } = P;
          let C = null;
          const L = function(t) {
              const {
                initial: e,
                animate: n
              } = function(t, e) {
                if (m(t)) {
                  const {
                    initial: e,
                    animate: n
                  } = t;
                  return {
                    initial: !1 === e || d(e) ? e : void 0,
                    animate: d(n) ? n : void 0
                  }
                }
                return !1 !== t.inherit ? e : {}
              }(t, (0, o.useContext)(i));
              return (0, o.useMemo)((() => ({
                initial: e,
                animate: n
              })), [v(e), v(n)])
            }(y),
            k = V ? void 0 : b((() => {
              if (E.hasEverUpdated) return S++
            })),
            R = f(y, V);
          if (!V && l) {
            L.visualElement = function(t, e, n, i) {
              const l = s(),
                h = (0, o.useContext)(c),
                d = (0, o.useContext)(a),
                p = (0, o.useContext)(r).reducedMotion,
                f = (0, o.useRef)();
              i = i || h.renderer, !f.current && i && (f.current = i(t, {
                visualState: e,
                parent: l,
                props: n,
                presenceId: d ? d.id : void 0,
                blockInitialAnimation: !!d && !1 === d.initial,
                reducedMotionConfig: p
              }));
              const m = f.current;
              return u((() => {
                m && m.render()
              })), u((() => {
                m && m.animationState && m.animationState.animateChanges()
              })), u((() => () => m && m.notify("Unmount")), []), m
            }(g, R, P, e);
            const i = (0, o.useContext)(c).strict,
              l = (0, o.useContext)(A);
            L.visualElement && (C = L.visualElement.loadFeatures(P, i, t, k, n || x.projectionNodeConstructor, l))
          }
          return o.createElement(T, {
            visualElement: L.visualElement,
            props: P
          }, C, o.createElement(i.Provider, {
            value: L
          }, p(g, y, k, function(t, e, n) {
            return (0, o.useCallback)((o => {
              o && t.mount && t.mount(o), e && (o ? e.mount(o) : e.unmount()), n && ("function" == typeof n ? n(o) : h(n) && (n.current = o))
            }), [e])
          }(R, L.visualElement, w), R, V, L.visualElement)))
        }));
        return y[V] = g, y
      }

      function M({
        layoutId: t
      }) {
        const e = (0, o.useContext)(P).id;
        return e && void 0 !== t ? e + "-" + t : t
      }

      function L(t) {
        function e(e, n = {}) {
          return C(t(e, n))
        }
        if ("undefined" == typeof Proxy) return e;
        const n = new Map;
        return new Proxy(e, {
          get: (t, o) => (n.has(o) || n.set(o, e(o)), n.get(o))
        })
      }
      const k = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

      function R(t) {
        return "string" == typeof t && !t.includes("-") && !!(k.indexOf(t) > -1 || /[A-Z]/.test(t))
      }
      const D = {};

      function B(t) {
        Object.assign(D, t)
      }
      const I = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
        O = new Set(I);

      function F(t, {
        layout: e,
        layoutId: n
      }) {
        return O.has(t) || t.startsWith("origin") || (e || void 0 !== n) && (!!D[t] || "opacity" === t)
      }
      const j = t => !!(null == t ? void 0 : t.getVelocity),
        U = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective"
        },
        N = (t, e) => I.indexOf(t) - I.indexOf(e);

      function z({
        transform: t,
        transformKeys: e
      }, {
        enableHardwareAcceleration: n = !0,
        allowTransformNone: o = !0
      }, r, i) {
        let s = "";
        e.sort(N);
        for (const n of e) s += `${U[n]||n}(${t[n]}) `;
        return n && !t.z && (s += "translateZ(0)"), s = s.trim(), i ? s = i(t, r ? "" : s) : o && r && (s = "none"), s
      }

      function $(t) {
        return t.startsWith("--")
      }
      const W = (t, e) => e && "number" == typeof t ? e.transform(t) : t,
        H = (t, e, n) => Math.min(Math.max(n, t), e),
        Y = {
          test: t => "number" == typeof t,
          parse: parseFloat,
          transform: t => t
        },
        X = {
          ...Y,
          transform: t => H(0, 1, t)
        },
        _ = {
          ...Y,
          default: 1
        },
        G = t => Math.round(1e5 * t) / 1e5,
        q = /(-)?([\d]*\.?[\d])+/g,
        Z = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
        K = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;

      function J(t) {
        return "string" == typeof t
      }
      const Q = t => ({
          test: e => J(e) && e.endsWith(t) && 1 === e.split(" ").length,
          parse: parseFloat,
          transform: e => `${e}${t}`
        }),
        tt = Q("deg"),
        et = Q("%"),
        nt = Q("px"),
        ot = Q("vh"),
        rt = Q("vw"),
        it = {
          ...et,
          parse: t => et.parse(t) / 100,
          transform: t => et.transform(100 * t)
        },
        st = {
          ...Y,
          transform: Math.round
        },
        at = {
          borderWidth: nt,
          borderTopWidth: nt,
          borderRightWidth: nt,
          borderBottomWidth: nt,
          borderLeftWidth: nt,
          borderRadius: nt,
          radius: nt,
          borderTopLeftRadius: nt,
          borderTopRightRadius: nt,
          borderBottomRightRadius: nt,
          borderBottomLeftRadius: nt,
          width: nt,
          maxWidth: nt,
          height: nt,
          maxHeight: nt,
          size: nt,
          top: nt,
          right: nt,
          bottom: nt,
          left: nt,
          padding: nt,
          paddingTop: nt,
          paddingRight: nt,
          paddingBottom: nt,
          paddingLeft: nt,
          margin: nt,
          marginTop: nt,
          marginRight: nt,
          marginBottom: nt,
          marginLeft: nt,
          rotate: tt,
          rotateX: tt,
          rotateY: tt,
          rotateZ: tt,
          scale: _,
          scaleX: _,
          scaleY: _,
          scaleZ: _,
          skew: tt,
          skewX: tt,
          skewY: tt,
          distance: nt,
          translateX: nt,
          translateY: nt,
          translateZ: nt,
          x: nt,
          y: nt,
          z: nt,
          perspective: nt,
          transformPerspective: nt,
          opacity: X,
          originX: it,
          originY: it,
          originZ: nt,
          zIndex: st,
          fillOpacity: X,
          strokeOpacity: X,
          numOctaves: st
        };

      function lt(t, e, n, o) {
        const {
          style: r,
          vars: i,
          transform: s,
          transformKeys: a,
          transformOrigin: l
        } = t;
        a.length = 0;
        let u = !1,
          c = !1,
          h = !0;
        for (const t in e) {
          const n = e[t];
          if ($(t)) {
            i[t] = n;
            continue
          }
          const o = at[t],
            d = W(n, o);
          if (O.has(t)) {
            if (u = !0, s[t] = d, a.push(t), !h) continue;
            n !== (o.default || 0) && (h = !1)
          } else t.startsWith("origin") ? (c = !0, l[t] = d) : r[t] = d
        }
        if (e.transform || (u || o ? r.transform = z(t, n, h, o) : r.transform && (r.transform = "none")), c) {
          const {
            originX: t = "50%",
            originY: e = "50%",
            originZ: n = 0
          } = l;
          r.transformOrigin = `${t} ${e} ${n}`
        }
      }
      const ut = () => ({
        style: {},
        transform: {},
        transformKeys: [],
        transformOrigin: {},
        vars: {}
      });

      function ct(t, e, n) {
        for (const o in e) j(e[o]) || F(o, n) || (t[o] = e[o])
      }

      function ht(t, e, n) {
        const r = {},
          i = function(t, e, n) {
            const r = {};
            return ct(r, t.style || {}, t), Object.assign(r, function({
              transformTemplate: t
            }, e, n) {
              return (0, o.useMemo)((() => {
                const o = ut();
                return lt(o, e, {
                  enableHardwareAcceleration: !n
                }, t), Object.assign({}, o.vars, o.style)
              }), [e])
            }(t, e, n)), t.transformValues ? t.transformValues(r) : r
          }(t, e, n);
        return t.drag && !1 !== t.dragListener && (r.draggable = !1, i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none", i.touchAction = !0 === t.drag ? "none" : "pan-" + ("x" === t.drag ? "y" : "x")), r.style = i, r
      }
      const dt = new Set(["initial", "style", "values", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "layout", "layoutId", "layoutDependency", "onLayoutAnimationStart", "onLayoutAnimationComplete", "onLayoutMeasure", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "drag", "dragControls", "dragListener", "dragConstraints", "dragDirectionLock", "dragSnapToOrigin", "_dragX", "_dragY", "dragElastic", "dragMomentum", "dragPropagation", "dragTransition", "onHoverStart", "onHoverEnd", "layoutScroll", "whileInView", "onViewportEnter", "onViewportLeave", "viewport", "whileTap", "onTap", "onTapStart", "onTapCancel", "animate", "exit", "variants", "whileHover", "whileTap", "whileFocus", "whileDrag", "whileInView", "onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]);

      function pt(t) {
        return dt.has(t)
      }
      let ft = t => !pt(t);

      function mt(t) {
        t && (ft = e => e.startsWith("on") ? !pt(e) : t(e))
      }
      try {
        mt(require("@emotion/is-prop-valid").default)
      } catch (t) {}

      function gt(t, e, n) {
        const o = {};
        for (const r in t)(ft(r) || !0 === n && pt(r) || !e && !pt(r) || t.draggable && r.startsWith("onDrag")) && (o[r] = t[r]);
        return o
      }

      function vt(t, e, n) {
        return "string" == typeof t ? t : nt.transform(e + n * t)
      }
      const yt = {
          offset: "stroke-dashoffset",
          array: "stroke-dasharray"
        },
        xt = {
          offset: "strokeDashoffset",
          array: "strokeDasharray"
        };

      function wt(t, {
        attrX: e,
        attrY: n,
        originX: o,
        originY: r,
        pathLength: i,
        pathSpacing: s = 1,
        pathOffset: a = 0,
        ...l
      }, u, c, h) {
        if (lt(t, l, u, h), c) return void(t.style.viewBox && (t.attrs.viewBox = t.style.viewBox));
        t.attrs = t.style, t.style = {};
        const {
          attrs: d,
          style: p,
          dimensions: f
        } = t;
        d.transform && (f && (p.transform = d.transform), delete d.transform), f && (void 0 !== o || void 0 !== r || p.transform) && (p.transformOrigin = function(t, e, n) {
          return `${vt(e,t.x,t.width)} ${vt(n,t.y,t.height)}`
        }(f, void 0 !== o ? o : .5, void 0 !== r ? r : .5)), void 0 !== e && (d.x = e), void 0 !== n && (d.y = n), void 0 !== i && function(t, e, n = 1, o = 0, r = !0) {
          t.pathLength = 1;
          const i = r ? yt : xt;
          t[i.offset] = nt.transform(-o);
          const s = nt.transform(e),
            a = nt.transform(n);
          t[i.array] = `${s} ${a}`
        }(d, i, s, a, !1)
      }
      const bt = () => ({
          ...ut(),
          attrs: {}
        }),
        Et = t => "string" == typeof t && "svg" === t.toLowerCase();

      function St(t, e, n, r) {
        const i = (0, o.useMemo)((() => {
          const n = bt();
          return wt(n, e, {
            enableHardwareAcceleration: !1
          }, Et(r), t.transformTemplate), {
            ...n.attrs,
            style: {
              ...n.style
            }
          }
        }), [e]);
        if (t.style) {
          const e = {};
          ct(e, t.style, t), i.style = {
            ...e,
            ...i.style
          }
        }
        return i
      }

      function Pt(t = !1) {
        return (e, n, r, i, {
          latestValues: s
        }, a) => {
          const l = (R(e) ? St : ht)(n, s, a, e),
            u = {
              ...gt(n, "string" == typeof e, t),
              ...l,
              ref: i
            };
          return r && (u["data-projection-id"] = r), (0, o.createElement)(e, u)
        }
      }
      const Tt = t => t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();

      function At(t, {
        style: e,
        vars: n
      }, o, r) {
        Object.assign(t.style, e, r && r.getProjectionStyles(o));
        for (const e in n) t.style.setProperty(e, n[e])
      }
      const Vt = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

      function Ct(t, e, n, o) {
        At(t, e, void 0, o);
        for (const n in e.attrs) t.setAttribute(Vt.has(n) ? n : Tt(n), e.attrs[n])
      }

      function Mt(t) {
        const {
          style: e
        } = t, n = {};
        for (const o in e)(j(e[o]) || F(o, t)) && (n[o] = e[o]);
        return n
      }

      function Lt(t) {
        const e = Mt(t);
        for (const n in t) j(t[n]) && (e["x" === n || "y" === n ? "attr" + n.toUpperCase() : n] = t[n]);
        return e
      }

      function kt(t, e, n, o = {}, r = {}) {
        return "function" == typeof e && (e = e(void 0 !== n ? n : t.custom, o, r)), "string" == typeof e && (e = t.variants && t.variants[e]), "function" == typeof e && (e = e(void 0 !== n ? n : t.custom, o, r)), e
      }
      const Rt = t => Array.isArray(t),
        Dt = t => Boolean(t && "object" == typeof t && t.mix && t.toValue),
        Bt = t => Rt(t) ? t[t.length - 1] || 0 : t;

      function It(t) {
        const e = j(t) ? t.get() : t;
        return Dt(e) ? e.toValue() : e
      }
      const Ot = t => (e, n) => {
        const r = (0, o.useContext)(i),
          s = (0, o.useContext)(a),
          l = () => function({
            scrapeMotionValuesFromProps: t,
            createRenderState: e,
            onMount: n
          }, o, r, i) {
            const s = {
              latestValues: Ft(o, r, i, t),
              renderState: e()
            };
            return n && (s.mount = t => n(o, t, s)), s
          }(t, e, r, s);
        return n ? l() : b(l)
      };

      function Ft(t, e, n, o) {
        const r = {},
          i = o(t);
        for (const t in i) r[t] = It(i[t]);
        let {
          initial: s,
          animate: a
        } = t;
        const l = m(t),
          u = g(t);
        e && u && !l && !1 !== t.inherit && (void 0 === s && (s = e.initial), void 0 === a && (a = e.animate));
        let c = !!n && !1 === n.initial;
        c = c || !1 === s;
        const h = c ? a : s;
        return h && "boolean" != typeof h && !p(h) && (Array.isArray(h) ? h : [h]).forEach((e => {
          const n = kt(t, e);
          if (!n) return;
          const {
            transitionEnd: o,
            transition: i,
            ...s
          } = n;
          for (const t in s) {
            let e = s[t];
            Array.isArray(e) && (e = e[c ? e.length - 1 : 0]), null !== e && (r[t] = e)
          }
          for (const t in o) r[t] = o[t]
        })), r
      }
      const jt = {
          useVisualState: Ot({
            scrapeMotionValuesFromProps: Lt,
            createRenderState: bt,
            onMount: (t, e, {
              renderState: n,
              latestValues: o
            }) => {
              try {
                n.dimensions = "function" == typeof e.getBBox ? e.getBBox() : e.getBoundingClientRect()
              } catch (t) {
                n.dimensions = {
                  x: 0,
                  y: 0,
                  width: 0,
                  height: 0
                }
              }
              wt(n, o, {
                enableHardwareAcceleration: !1
              }, Et(e.tagName), t.transformTemplate), Ct(e, n)
            }
          })
        },
        Ut = {
          useVisualState: Ot({
            scrapeMotionValuesFromProps: Mt,
            createRenderState: ut
          })
        };

      function Nt(t, {
        forwardMotionProps: e = !1
      }, n, o, r) {
        return {
          ...R(t) ? jt : Ut,
          preloadedFeatures: n,
          useRender: Pt(e),
          createVisualElement: o,
          projectionNodeConstructor: r,
          Component: t
        }
      }
      var zt;

      function $t(t, e, n, o = {
        passive: !0
      }) {
        return t.addEventListener(e, n, o), () => t.removeEventListener(e, n)
      }

      function Wt(t, e, n, r) {
        (0, o.useEffect)((() => {
          const o = t.current;
          if (n && o) return $t(o, e, n, r)
        }), [t, e, n, r])
      }

      function Ht(t) {
        return "undefined" != typeof PointerEvent && t instanceof PointerEvent ? !("mouse" !== t.pointerType) : t instanceof MouseEvent
      }

      function Yt(t) {
        return !!t.touches
      }! function(t) {
        t.Animate = "animate", t.Hover = "whileHover", t.Tap = "whileTap", t.Drag = "whileDrag", t.Focus = "whileFocus", t.InView = "whileInView", t.Exit = "exit"
      }(zt || (zt = {}));
      const Xt = {
        pageX: 0,
        pageY: 0
      };

      function _t(t, e = "page") {
        const n = t.touches[0] || t.changedTouches[0] || Xt;
        return {
          x: n[e + "X"],
          y: n[e + "Y"]
        }
      }

      function Gt(t, e = "page") {
        return {
          x: t[e + "X"],
          y: t[e + "Y"]
        }
      }

      function qt(t, e = "page") {
        return {
          point: Yt(t) ? _t(t, e) : Gt(t, e)
        }
      }
      const Zt = (t, e = !1) => {
          const n = e => t(e, qt(e));
          return e ? (o = n, t => {
            const e = t instanceof MouseEvent;
            (!e || e && 0 === t.button) && o(t)
          }) : n;
          var o
        },
        Kt = () => l && null === window.onpointerdown,
        Jt = () => l && null === window.ontouchstart,
        Qt = () => l && null === window.onmousedown,
        te = {
          pointerdown: "mousedown",
          pointermove: "mousemove",
          pointerup: "mouseup",
          pointercancel: "mousecancel",
          pointerover: "mouseover",
          pointerout: "mouseout",
          pointerenter: "mouseenter",
          pointerleave: "mouseleave"
        },
        ee = {
          pointerdown: "touchstart",
          pointermove: "touchmove",
          pointerup: "touchend",
          pointercancel: "touchcancel"
        };

      function ne(t) {
        return Kt() ? t : Jt() ? ee[t] : Qt() ? te[t] : t
      }

      function oe(t, e, n, o) {
        return $t(t, ne(e), Zt(n, "pointerdown" === e), o)
      }

      function re(t, e, n, o) {
        return Wt(t, ne(e), n && Zt(n, "pointerdown" === e), o)
      }

      function ie(t) {
        let e = null;
        return () => null === e && (e = t, () => {
          e = null
        })
      }
      const se = ie("dragHorizontal"),
        ae = ie("dragVertical");

      function le(t) {
        let e = !1;
        if ("y" === t) e = ae();
        else if ("x" === t) e = se();
        else {
          const t = se(),
            n = ae();
          t && n ? e = () => {
            t(), n()
          } : (t && t(), n && n())
        }
        return e
      }

      function ue() {
        const t = le(!0);
        return !t || (t(), !1)
      }

      function ce(t, e, n) {
        return (o, r) => {
          Ht(o) && !ue() && (t.animationState && t.animationState.setActive(zt.Hover, e), n && n(o, r))
        }
      }
      const he = (t, e) => !!e && (t === e || he(t, e.parentElement));

      function de(t) {
        return (0, o.useEffect)((() => () => t()), [])
      }
      const pe = (t, e) => n => e(t(n)),
        fe = (...t) => t.reduce(pe);
      var me = n(6540);
      const ge = (void 0 === me || me.env, "production"),
        ve = new Set;

      function ye(t, e, n) {
        t || ve.has(e) || (console.warn(e), n && console.warn(n), ve.add(e))
      }
      const xe = new WeakMap,
        we = new WeakMap,
        be = t => {
          const e = xe.get(t.target);
          e && e(t)
        },
        Ee = t => {
          t.forEach(be)
        };
      const Se = {
        some: 0,
        all: 1
      };

      function Pe(t, e, n, {
        root: r,
        margin: i,
        amount: s = "some",
        once: a
      }) {
        (0, o.useEffect)((() => {
          if (!t || !n.current) return;
          const o = {
            root: null == r ? void 0 : r.current,
            rootMargin: i,
            threshold: "number" == typeof s ? s : Se[s]
          };
          return function(t, e, n) {
            const o = function({
              root: t,
              ...e
            }) {
              const n = t || document;
              we.has(n) || we.set(n, {});
              const o = we.get(n),
                r = JSON.stringify(e);
              return o[r] || (o[r] = new IntersectionObserver(Ee, {
                root: t,
                ...e
              })), o[r]
            }(e);
            return xe.set(t, n), o.observe(t), () => {
              xe.delete(t), o.unobserve(t)
            }
          }(n.current, o, (t => {
            const {
              isIntersecting: o
            } = t;
            if (e.isInView === o) return;
            if (e.isInView = o, a && !o && e.hasEnteredView) return;
            o && (e.hasEnteredView = !0), n.animationState && n.animationState.setActive(zt.InView, o);
            const r = n.getProps(),
              i = o ? r.onViewportEnter : r.onViewportLeave;
            i && i(t)
          }))
        }), [t, r, i, s])
      }

      function Te(t, e, n, {
        fallback: r = !0
      }) {
        (0, o.useEffect)((() => {
          t && r && ("production" !== ge && ye(!1, "IntersectionObserver not available on this device. whileInView animations will trigger on mount."), requestAnimationFrame((() => {
            e.hasEnteredView = !0;
            const {
              onViewportEnter: t
            } = n.getProps();
            t && t(null), n.animationState && n.animationState.setActive(zt.InView, !0)
          })))
        }), [t])
      }
      const Ae = t => e => (t(e), null),
        Ve = {
          inView: Ae((function({
            visualElement: t,
            whileInView: e,
            onViewportEnter: n,
            onViewportLeave: r,
            viewport: i = {}
          }) {
            const s = (0, o.useRef)({
              hasEnteredView: !1,
              isInView: !1
            });
            let a = Boolean(e || n || r);
            i.once && s.current.hasEnteredView && (a = !1), ("undefined" == typeof IntersectionObserver ? Te : Pe)(a, s.current, t, i)
          })),
          tap: Ae((function({
            onTap: t,
            onTapStart: e,
            onTapCancel: n,
            whileTap: r,
            visualElement: i
          }) {
            const s = t || e || n || r,
              a = (0, o.useRef)(!1),
              l = (0, o.useRef)(null),
              u = {
                passive: !(e || t || n || f)
              };

            function c() {
              l.current && l.current(), l.current = null
            }

            function h() {
              return c(), a.current = !1, i.animationState && i.animationState.setActive(zt.Tap, !1), !ue()
            }

            function d(e, o) {
              h() && (he(i.current, e.target) ? t && t(e, o) : n && n(e, o))
            }

            function p(t, e) {
              h() && n && n(t, e)
            }

            function f(t, n) {
              c(), a.current || (a.current = !0, l.current = fe(oe(window, "pointerup", d, u), oe(window, "pointercancel", p, u)), i.animationState && i.animationState.setActive(zt.Tap, !0), e && e(t, n))
            }
            re(i, "pointerdown", s ? f : void 0, u), de(c)
          })),
          focus: Ae((function({
            whileFocus: t,
            visualElement: e
          }) {
            const {
              animationState: n
            } = e;
            Wt(e, "focus", t ? () => {
              n && n.setActive(zt.Focus, !0)
            } : void 0), Wt(e, "blur", t ? () => {
              n && n.setActive(zt.Focus, !1)
            } : void 0)
          })),
          hover: Ae((function({
            onHoverStart: t,
            onHoverEnd: e,
            whileHover: n,
            visualElement: o
          }) {
            re(o, "pointerenter", t || n ? ce(o, !0, t) : void 0, {
              passive: !t
            }), re(o, "pointerleave", e || n ? ce(o, !1, e) : void 0, {
              passive: !e
            })
          }))
        };

      function Ce() {
        const t = (0, o.useContext)(a);
        if (null === t) return [!0, null];
        const {
          isPresent: e,
          onExitComplete: n,
          register: r
        } = t, i = (0, o.useId)();
        return (0, o.useEffect)((() => r(i)), []), !e && n ? [!1, () => n && n(i)] : [!0]
      }

      function Me() {
        return null === (t = (0, o.useContext)(a)) || t.isPresent;
        var t
      }

      function Le(t, e) {
        if (!Array.isArray(e)) return !1;
        const n = e.length;
        if (n !== t.length) return !1;
        for (let o = 0; o < n; o++)
          if (e[o] !== t[o]) return !1;
        return !0
      }
      const ke = t => /^\-?\d*\.?\d+$/.test(t),
        Re = t => /^0[^.\s]+$/.test(t),
        De = {
          delta: 0,
          timestamp: 0
        },
        Be = 1 / 60 * 1e3,
        Ie = "undefined" != typeof performance ? () => performance.now() : () => Date.now(),
        Oe = "undefined" != typeof window ? t => window.requestAnimationFrame(t) : t => setTimeout((() => t(Ie())), Be);
      let Fe = !0,
        je = !1,
        Ue = !1;
      const Ne = ["read", "update", "preRender", "render", "postRender"],
        ze = Ne.reduce(((t, e) => (t[e] = function(t) {
          let e = [],
            n = [],
            o = 0,
            r = !1,
            i = !1;
          const s = new WeakSet,
            a = {
              schedule: (t, i = !1, a = !1) => {
                const l = a && r,
                  u = l ? e : n;
                return i && s.add(t), -1 === u.indexOf(t) && (u.push(t), l && r && (o = e.length)), t
              },
              cancel: t => {
                const e = n.indexOf(t); - 1 !== e && n.splice(e, 1), s.delete(t)
              },
              process: l => {
                if (r) i = !0;
                else {
                  if (r = !0, [e, n] = [n, e], n.length = 0, o = e.length, o)
                    for (let n = 0; n < o; n++) {
                      const o = e[n];
                      o(l), s.has(o) && (a.schedule(o), t())
                    }
                  r = !1, i && (i = !1, a.process(l))
                }
              }
            };
          return a
        }((() => je = !0)), t)), {}),
        $e = Ne.reduce(((t, e) => {
          const n = ze[e];
          return t[e] = (t, e = !1, o = !1) => (je || _e(), n.schedule(t, e, o)), t
        }), {}),
        We = Ne.reduce(((t, e) => (t[e] = ze[e].cancel, t)), {}),
        He = Ne.reduce(((t, e) => (t[e] = () => ze[e].process(De), t)), {}),
        Ye = t => ze[t].process(De),
        Xe = t => {
          je = !1, De.delta = Fe ? Be : Math.max(Math.min(t - De.timestamp, 40), 1), De.timestamp = t, Ue = !0, Ne.forEach(Ye), Ue = !1, je && (Fe = !1, Oe(Xe))
        },
        _e = () => {
          je = !0, Fe = !0, Ue || Oe(Xe)
        };

      function Ge(t, e) {
        -1 === t.indexOf(e) && t.push(e)
      }

      function qe(t, e) {
        const n = t.indexOf(e);
        n > -1 && t.splice(n, 1)
      }
      class Ze {
        constructor() {
          this.subscriptions = []
        }
        add(t) {
          return Ge(this.subscriptions, t), () => qe(this.subscriptions, t)
        }
        notify(t, e, n) {
          const o = this.subscriptions.length;
          if (o)
            if (1 === o) this.subscriptions[0](t, e, n);
            else
              for (let r = 0; r < o; r++) {
                const o = this.subscriptions[r];
                o && o(t, e, n)
              }
        }
        getSize() {
          return this.subscriptions.length
        }
        clear() {
          this.subscriptions.length = 0
        }
      }

      function Ke(t, e) {
        return e ? t * (1e3 / e) : 0
      }
      class Je {
        constructor(t, e = {}) {
          var n;
          this.version = "7.10.3", this.timeDelta = 0, this.lastUpdated = 0, this.canTrackVelocity = !1, this.events = {}, this.updateAndNotify = (t, e = !0) => {
            this.prev = this.current, this.current = t;
            const {
              delta: n,
              timestamp: o
            } = De;
            this.lastUpdated !== o && (this.timeDelta = n, this.lastUpdated = o, $e.postRender(this.scheduleVelocityCheck)), this.prev !== this.current && this.events.change && this.events.change.notify(this.current), this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()), e && this.events.renderRequest && this.events.renderRequest.notify(this.current)
          }, this.scheduleVelocityCheck = () => $e.postRender(this.velocityCheck), this.velocityCheck = ({
            timestamp: t
          }) => {
            t !== this.lastUpdated && (this.prev = this.current, this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()))
          }, this.hasAnimated = !1, this.prev = this.current = t, this.canTrackVelocity = (n = this.current, !isNaN(parseFloat(n))), this.owner = e.owner
        }
        onChange(t) {
          return this.on("change", t)
        }
        on(t, e) {
          return this.events[t] || (this.events[t] = new Ze), this.events[t].add(e)
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
        setWithVelocity(t, e, n) {
          this.set(e), this.prev = t, this.timeDelta = n
        }
        get() {
          return this.current
        }
        getPrevious() {
          return this.prev
        }
        getVelocity() {
          return this.canTrackVelocity ? Ke(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0
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

      function Qe(t, e) {
        return new Je(t, e)
      }
      const tn = (t, e) => n => Boolean(J(n) && K.test(n) && n.startsWith(t) || e && Object.prototype.hasOwnProperty.call(n, e)),
        en = (t, e, n) => o => {
          if (!J(o)) return o;
          const [r, i, s, a] = o.match(q);
          return {
            [t]: parseFloat(r),
            [e]: parseFloat(i),
            [n]: parseFloat(s),
            alpha: void 0 !== a ? parseFloat(a) : 1
          }
        },
        nn = {
          ...Y,
          transform: t => Math.round((t => H(0, 255, t))(t))
        },
        on = {
          test: tn("rgb", "red"),
          parse: en("red", "green", "blue"),
          transform: ({
            red: t,
            green: e,
            blue: n,
            alpha: o = 1
          }) => "rgba(" + nn.transform(t) + ", " + nn.transform(e) + ", " + nn.transform(n) + ", " + G(X.transform(o)) + ")"
        },
        rn = {
          test: tn("#"),
          parse: function(t) {
            let e = "",
              n = "",
              o = "",
              r = "";
            return t.length > 5 ? (e = t.substring(1, 3), n = t.substring(3, 5), o = t.substring(5, 7), r = t.substring(7, 9)) : (e = t.substring(1, 2), n = t.substring(2, 3), o = t.substring(3, 4), r = t.substring(4, 5), e += e, n += n, o += o, r += r), {
              red: parseInt(e, 16),
              green: parseInt(n, 16),
              blue: parseInt(o, 16),
              alpha: r ? parseInt(r, 16) / 255 : 1
            }
          },
          transform: on.transform
        },
        sn = {
          test: tn("hsl", "hue"),
          parse: en("hue", "saturation", "lightness"),
          transform: ({
            hue: t,
            saturation: e,
            lightness: n,
            alpha: o = 1
          }) => "hsla(" + Math.round(t) + ", " + et.transform(G(e)) + ", " + et.transform(G(n)) + ", " + G(X.transform(o)) + ")"
        },
        an = {
          test: t => on.test(t) || rn.test(t) || sn.test(t),
          parse: t => on.test(t) ? on.parse(t) : sn.test(t) ? sn.parse(t) : rn.parse(t),
          transform: t => J(t) ? t : t.hasOwnProperty("red") ? on.transform(t) : sn.transform(t)
        },
        ln = "${c}",
        un = "${n}";

      function cn(t) {
        "number" == typeof t && (t = `${t}`);
        const e = [];
        let n = 0,
          o = 0;
        const r = t.match(Z);
        r && (n = r.length, t = t.replace(Z, ln), e.push(...r.map(an.parse)));
        const i = t.match(q);
        return i && (o = i.length, t = t.replace(q, un), e.push(...i.map(Y.parse))), {
          values: e,
          numColors: n,
          numNumbers: o,
          tokenised: t
        }
      }

      function hn(t) {
        return cn(t).values
      }

      function dn(t) {
        const {
          values: e,
          numColors: n,
          tokenised: o
        } = cn(t), r = e.length;
        return t => {
          let e = o;
          for (let o = 0; o < r; o++) e = e.replace(o < n ? ln : un, o < n ? an.transform(t[o]) : G(t[o]));
          return e
        }
      }
      const pn = t => "number" == typeof t ? 0 : t,
        fn = {
          test: function(t) {
            var e, n;
            return isNaN(t) && J(t) && ((null === (e = t.match(q)) || void 0 === e ? void 0 : e.length) || 0) + ((null === (n = t.match(Z)) || void 0 === n ? void 0 : n.length) || 0) > 0
          },
          parse: hn,
          createTransformer: dn,
          getAnimatableNone: function(t) {
            const e = hn(t);
            return dn(t)(e.map(pn))
          }
        },
        mn = new Set(["brightness", "contrast", "saturate", "opacity"]);

      function gn(t) {
        const [e, n] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        const [o] = n.match(q) || [];
        if (!o) return t;
        const r = n.replace(o, "");
        let i = mn.has(e) ? 1 : 0;
        return o !== n && (i *= 100), e + "(" + i + r + ")"
      }
      const vn = /([a-z-]*)\(.*?\)/g,
        yn = {
          ...fn,
          getAnimatableNone: t => {
            const e = t.match(vn);
            return e ? e.map(gn).join(" ") : t
          }
        },
        xn = {
          ...at,
          color: an,
          backgroundColor: an,
          outlineColor: an,
          fill: an,
          stroke: an,
          borderColor: an,
          borderTopColor: an,
          borderRightColor: an,
          borderBottomColor: an,
          borderLeftColor: an,
          filter: yn,
          WebkitFilter: yn
        },
        wn = t => xn[t];

      function bn(t, e) {
        var n;
        let o = wn(t);
        return o !== yn && (o = fn), null === (n = o.getAnimatableNone) || void 0 === n ? void 0 : n.call(o, e)
      }
      const En = t => e => e.test(t),
        Sn = [Y, nt, et, tt, rt, ot, {
          test: t => "auto" === t,
          parse: t => t
        }],
        Pn = t => Sn.find(En(t)),
        Tn = [...Sn, an, fn],
        An = t => Tn.find(En(t));

      function Vn(t, e, n) {
        const o = t.getProps();
        return kt(o, e, void 0 !== n ? n : o.custom, function(t) {
          const e = {};
          return t.values.forEach(((t, n) => e[n] = t.get())), e
        }(t), function(t) {
          const e = {};
          return t.values.forEach(((t, n) => e[n] = t.getVelocity())), e
        }(t))
      }

      function Cn(t, e, n) {
        t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, Qe(n))
      }

      function Mn(t, e) {
        const n = Vn(t, e);
        let {
          transitionEnd: o = {},
          transition: r = {},
          ...i
        } = n ? t.makeTargetAnimatable(n, !1) : {};
        i = {
          ...i,
          ...o
        };
        for (const e in i) Cn(t, e, Bt(i[e]))
      }

      function Ln(t, e) {
        [...e].reverse().forEach((n => {
          var o;
          const r = t.getVariant(n);
          r && Mn(t, r), null === (o = t.variantChildren) || void 0 === o || o.forEach((t => {
            Ln(t, e)
          }))
        }))
      }

      function kn(t, e, n) {
        var o, r;
        const i = Object.keys(e).filter((e => !t.hasValue(e))),
          s = i.length;
        if (s)
          for (let a = 0; a < s; a++) {
            const s = i[a],
              l = e[s];
            let u = null;
            Array.isArray(l) && (u = l[0]), null === u && (u = null !== (r = null !== (o = n[s]) && void 0 !== o ? o : t.readValue(s)) && void 0 !== r ? r : e[s]), null != u && ("string" == typeof u && (ke(u) || Re(u)) ? u = parseFloat(u) : !An(u) && fn.test(l) && (u = bn(s, l)), t.addValue(s, Qe(u, {
              owner: t
            })), void 0 === n[s] && (n[s] = u), null !== u && t.setBaseTarget(s, u))
          }
      }

      function Rn(t, e) {
        if (e) return (e[t] || e.default || e).from
      }

      function Dn(t, e, n) {
        var o;
        const r = {};
        for (const i in t) {
          const t = Rn(i, e);
          r[i] = void 0 !== t ? t : null === (o = n.getValue(i)) || void 0 === o ? void 0 : o.get()
        }
        return r
      }

      function Bn(t) {
        return Boolean(j(t) && t.add)
      }
      const In = (t, e) => `${t}: ${e}`;

      function On(t, e) {
        const {
          MotionAppearAnimations: n
        } = window, o = In(t, O.has(e) ? "transform" : e), r = n && n.get(o);
        return r ? ($e.render((() => {
          try {
            r.cancel(), n.delete(o)
          } catch (t) {}
        })), r.currentTime || 0) : 0
      }
      const Fn = "framerAppearId",
        jn = "data-" + Tt(Fn);
      var Un = function() {},
        Nn = function() {};
      const zn = t => 1e3 * t,
        $n = {
          current: !1
        },
        Wn = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
        Hn = t => e => 1 - t(1 - e),
        Yn = t => t * t,
        Xn = Hn(Yn),
        _n = Wn(Yn),
        Gn = (t, e, n) => -n * t + n * e + t;

      function qn(t, e, n) {
        return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + 6 * (e - t) * n : n < .5 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
      }
      const Zn = (t, e, n) => {
          const o = t * t;
          return Math.sqrt(Math.max(0, n * (e * e - o) + o))
        },
        Kn = [rn, on, sn];

      function Jn(t) {
        const e = (n = t, Kn.find((t => t.test(n))));
        var n;
        Nn(Boolean(e), `'${t}' is not an animatable color. Use the equivalent color code instead.`);
        let o = e.parse(t);
        return e === sn && (o = function({
          hue: t,
          saturation: e,
          lightness: n,
          alpha: o
        }) {
          t /= 360, n /= 100;
          let r = 0,
            i = 0,
            s = 0;
          if (e /= 100) {
            const o = n < .5 ? n * (1 + e) : n + e - n * e,
              a = 2 * n - o;
            r = qn(a, o, t + 1 / 3), i = qn(a, o, t), s = qn(a, o, t - 1 / 3)
          } else r = i = s = n;
          return {
            red: Math.round(255 * r),
            green: Math.round(255 * i),
            blue: Math.round(255 * s),
            alpha: o
          }
        }(o)), o
      }
      const Qn = (t, e) => {
        const n = Jn(t),
          o = Jn(e),
          r = {
            ...n
          };
        return t => (r.red = Zn(n.red, o.red, t), r.green = Zn(n.green, o.green, t), r.blue = Zn(n.blue, o.blue, t), r.alpha = Gn(n.alpha, o.alpha, t), on.transform(r))
      };

      function to(t, e) {
        return "number" == typeof t ? n => Gn(t, e, n) : an.test(t) ? Qn(t, e) : oo(t, e)
      }
      const eo = (t, e) => {
          const n = [...t],
            o = n.length,
            r = t.map(((t, n) => to(t, e[n])));
          return t => {
            for (let e = 0; e < o; e++) n[e] = r[e](t);
            return n
          }
        },
        no = (t, e) => {
          const n = {
              ...t,
              ...e
            },
            o = {};
          for (const r in n) void 0 !== t[r] && void 0 !== e[r] && (o[r] = to(t[r], e[r]));
          return t => {
            for (const e in o) n[e] = o[e](t);
            return n
          }
        },
        oo = (t, e) => {
          const n = fn.createTransformer(e),
            o = cn(t),
            r = cn(e);
          return o.numColors === r.numColors && o.numNumbers >= r.numNumbers ? fe(eo(o.values, r.values), n) : (Un(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), n => `${n>0?e:t}`)
        },
        ro = (t, e, n) => {
          const o = e - t;
          return 0 === o ? 1 : (n - t) / o
        },
        io = (t, e) => n => Gn(t, e, n);

      function so(t, e, {
        clamp: n = !0,
        ease: o,
        mixer: r
      } = {}) {
        const i = t.length;
        Nn(i === e.length, "Both input and output ranges must be the same length"), Nn(!o || !Array.isArray(o) || o.length === i - 1, "Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."), t[0] > t[i - 1] && (t = [...t].reverse(), e = [...e].reverse());
        const s = function(t, e, n) {
            const o = [],
              r = n || ("number" == typeof(i = t[0]) ? io : "string" == typeof i ? an.test(i) ? Qn : oo : Array.isArray(i) ? eo : "object" == typeof i ? no : io);
            var i;
            const s = t.length - 1;
            for (let n = 0; n < s; n++) {
              let i = r(t[n], t[n + 1]);
              if (e) {
                const t = Array.isArray(e) ? e[n] : e;
                i = fe(t, i)
              }
              o.push(i)
            }
            return o
          }(e, o, r),
          a = s.length,
          l = e => {
            let n = 0;
            if (a > 1)
              for (; n < t.length - 2 && !(e < t[n + 1]); n++);
            const o = ro(t[n], t[n + 1], e);
            return s[n](o)
          };
        return n ? e => l(H(t[0], t[i - 1], e)) : l
      }
      const ao = t => t,
        lo = (t, e, n) => (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t;

      function uo(t, e, n, o) {
        if (t === e && n === o) return ao;
        return r => 0 === r || 1 === r ? r : lo(function(t, e, n, o, r) {
          let i, s, a = 0;
          do {
            s = e + (n - e) / 2, i = lo(s, o, r) - t, i > 0 ? n = s : e = s
          } while (Math.abs(i) > 1e-7 && ++a < 12);
          return s
        }(r, 0, 1, t, n), e, o)
      }
      const co = t => 1 - Math.sin(Math.acos(t)),
        ho = Hn(co),
        po = Wn(ho),
        fo = uo(.33, 1.53, .69, .99),
        mo = Hn(fo),
        go = Wn(mo),
        vo = {
          linear: ao,
          easeIn: Yn,
          easeInOut: _n,
          easeOut: Xn,
          circIn: co,
          circInOut: po,
          circOut: ho,
          backIn: mo,
          backInOut: go,
          backOut: fo,
          anticipate: t => (t *= 2) < 1 ? .5 * mo(t) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
        },
        yo = t => {
          if (Array.isArray(t)) {
            Nn(4 === t.length, "Cubic bezier arrays must contain four numerical values.");
            const [e, n, o, r] = t;
            return uo(e, n, o, r)
          }
          return "string" == typeof t ? (Nn(void 0 !== vo[t], `Invalid easing type '${t}'`), vo[t]) : t
        };

      function xo({
        keyframes: t,
        ease: e = _n,
        times: n,
        duration: o = 300
      }) {
        t = [...t];
        const r = xo[0],
          i = (t => Array.isArray(t) && "number" != typeof t[0])(e) ? e.map(yo) : yo(e),
          s = {
            done: !1,
            value: r
          },
          a = function(t, e) {
            return t.map((t => t * e))
          }(n && n.length === xo.length ? n : function(t) {
            const e = t.length;
            return t.map(((t, n) => 0 !== n ? n / (e - 1) : 0))
          }(t), o);

        function l() {
          return so(a, t, {
            ease: Array.isArray(i) ? i : (e = t, n = i, e.map((() => n || _n)).splice(0, e.length - 1))
          });
          var e, n
        }
        let u = l();
        return {
          next: t => (s.value = u(t), s.done = t >= o, s),
          flipTarget: () => {
            t.reverse(), u = l()
          }
        }
      }
      const wo = .001,
        bo = .01,
        Eo = 10,
        So = .05,
        Po = 1;
      const To = 12;

      function Ao(t, e) {
        return t * Math.sqrt(1 - e * e)
      }
      const Vo = ["duration", "bounce"],
        Co = ["stiffness", "damping", "mass"];

      function Mo(t, e) {
        return e.some((e => void 0 !== t[e]))
      }
      const Lo = 5;

      function ko({
        keyframes: t,
        restSpeed: e = 2,
        restDelta: n = .01,
        ...o
      }) {
        let r = t[0],
          i = t[t.length - 1];
        const s = {
            done: !1,
            value: r
          },
          {
            stiffness: a,
            damping: l,
            mass: u,
            velocity: c,
            duration: h,
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
            if (!Mo(t, Co) && Mo(t, Vo)) {
              const n = function({
                duration: t = 800,
                bounce: e = .25,
                velocity: n = 0,
                mass: o = 1
              }) {
                let r, i;
                Un(t <= 1e3 * Eo, "Spring duration must be 10 seconds or less");
                let s = 1 - e;
                s = H(So, Po, s), t = H(bo, Eo, t / 1e3), s < 1 ? (r = e => {
                  const o = e * s,
                    r = o * t,
                    i = o - n,
                    a = Ao(e, s),
                    l = Math.exp(-r);
                  return wo - i / a * l
                }, i = e => {
                  const o = e * s * t,
                    i = o * n + n,
                    a = Math.pow(s, 2) * Math.pow(e, 2) * t,
                    l = Math.exp(-o),
                    u = Ao(Math.pow(e, 2), s);
                  return (-r(e) + wo > 0 ? -1 : 1) * ((i - a) * l) / u
                }) : (r = e => Math.exp(-e * t) * ((e - n) * t + 1) - wo, i = e => Math.exp(-e * t) * (t * t * (n - e)));
                const a = function(t, e, n) {
                  let o = n;
                  for (let n = 1; n < To; n++) o -= t(o) / e(o);
                  return o
                }(r, i, 5 / t);
                if (t *= 1e3, isNaN(a)) return {
                  stiffness: 100,
                  damping: 10,
                  duration: t
                }; {
                  const e = Math.pow(a, 2) * o;
                  return {
                    stiffness: e,
                    damping: 2 * s * Math.sqrt(o * e),
                    duration: t
                  }
                }
              }(t);
              e = {
                ...e,
                ...n,
                velocity: 0,
                mass: 1
              }, e.isResolvedFromDuration = !0
            }
            return e
          }(o);
        let p = Ro,
          f = c ? -c / 1e3 : 0;
        const m = l / (2 * Math.sqrt(a * u));

        function g() {
          const t = i - r,
            e = Math.sqrt(a / u) / 1e3;
          if (void 0 === n && (n = Math.min(Math.abs(i - r) / 100, .4)), m < 1) {
            const n = Ao(e, m);
            p = o => {
              const r = Math.exp(-m * e * o);
              return i - r * ((f + m * e * t) / n * Math.sin(n * o) + t * Math.cos(n * o))
            }
          } else if (1 === m) p = n => i - Math.exp(-e * n) * (t + (f + e * t) * n);
          else {
            const n = e * Math.sqrt(m * m - 1);
            p = o => {
              const r = Math.exp(-m * e * o),
                s = Math.min(n * o, 300);
              return i - r * ((f + m * e * t) * Math.sinh(s) + n * t * Math.cosh(s)) / n
            }
          }
        }
        return g(), {
          next: t => {
            const o = p(t);
            if (d) s.done = t >= h;
            else {
              let r = f;
              if (0 !== t)
                if (m < 1) {
                  const e = Math.max(0, t - Lo);
                  r = Ke(o - p(e), t - e)
                } else r = 0;
              const a = Math.abs(r) <= e,
                l = Math.abs(i - o) <= n;
              s.done = a && l
            }
            return s.value = s.done ? i : o, s
          },
          flipTarget: () => {
            f = -f, [r, i] = [i, r], g()
          }
        }
      }
      ko.needsInterpolation = (t, e) => "string" == typeof t || "string" == typeof e;
      const Ro = t => 0,
        Do = {
          decay: function({
            keyframes: t = [0],
            velocity: e = 0,
            power: n = .8,
            timeConstant: o = 350,
            restDelta: r = .5,
            modifyTarget: i
          }) {
            const s = t[0],
              a = {
                done: !1,
                value: s
              };
            let l = n * e;
            const u = s + l,
              c = void 0 === i ? u : i(u);
            return c !== u && (l = c - s), {
              next: t => {
                const e = -l * Math.exp(-t / o);
                return a.done = !(e > r || e < -r), a.value = a.done ? c : c + e, a
              },
              flipTarget: () => {}
            }
          },
          keyframes: xo,
          tween: xo,
          spring: ko
        };

      function Bo(t, e, n = 0) {
        return t - e - n
      }
      const Io = t => {
        const e = ({
          delta: e
        }) => t(e);
        return {
          start: () => $e.update(e, !0),
          stop: () => We.update(e)
        }
      };

      function Oo({
        duration: t,
        driver: e = Io,
        elapsed: n = 0,
        repeat: o = 0,
        repeatType: r = "loop",
        repeatDelay: i = 0,
        keyframes: s,
        autoplay: a = !0,
        onPlay: l,
        onStop: u,
        onComplete: c,
        onRepeat: h,
        onUpdate: d,
        type: p = "keyframes",
        ...f
      }) {
        var m, g;
        let v, y, x, w = 0,
          b = t,
          E = !1,
          S = !0;
        const P = Do[s.length > 2 ? "keyframes" : p],
          T = s[0],
          A = s[s.length - 1];
        (null === (g = (m = P).needsInterpolation) || void 0 === g ? void 0 : g.call(m, T, A)) && (x = so([0, 100], [T, A], {
          clamp: !1
        }), s = [0, 100]);
        const V = P({
          ...f,
          duration: t,
          keyframes: s
        });
        return a && (l && l(), v = e((function(t) {
          if (S || (t = -t), n += t, !E) {
            const t = V.next(Math.max(0, n));
            y = t.value, x && (y = x(y)), E = S ? t.done : n <= 0
          }
          d && d(y), E && (0 === w && (b = void 0 !== b ? b : n), w < o ? function(t, e, n, o) {
            return o ? t >= e + n : t <= -n
          }(n, b, i, S) && (w++, "reverse" === r ? (S = w % 2 == 0, n = function(t, e = 0, n = 0, o = !0) {
            return o ? Bo(e + -t, e, n) : e - (t - e) + n
          }(n, b, i, S)) : (n = Bo(n, b, i), "mirror" === r && V.flipTarget()), E = !1, h && h()) : (v.stop(), c && c()))
        })), v.start()), {
          stop: () => {
            u && u(), v.stop()
          },
          sample: t => V.next(Math.max(0, t))
        }
      }
      const Fo = ([t, e, n, o]) => `cubic-bezier(${t}, ${e}, ${n}, ${o})`,
        jo = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: Fo([0, .65, .55, 1]),
          circOut: Fo([.55, 0, 1, .45]),
          backIn: Fo([.31, .01, .66, -.59]),
          backOut: Fo([.33, 1.53, .69, .99])
        };

      function Uo(t) {
        if (t) return Array.isArray(t) ? Fo(t) : jo[t]
      }

      function No(t, e, n, {
        delay: o = 0,
        duration: r,
        repeat: i = 0,
        repeatType: s = "loop",
        ease: a,
        times: l
      } = {}) {
        return t.animate({
          [e]: n,
          offset: l
        }, {
          delay: o,
          duration: r,
          easing: Uo(a),
          fill: "both",
          iterations: i + 1,
          direction: "reverse" === s ? "alternate" : "normal"
        })
      }

      function zo(t, e) {
        const n = performance.now(),
          o = ({
            timestamp: r
          }) => {
            const i = r - n;
            i >= e && (We.read(o), t(i - e))
          };
        return $e.read(o, !0), () => We.read(o)
      }

      function $o({
        keyframes: t,
        elapsed: e,
        onUpdate: n,
        onComplete: o
      }) {
        const r = () => (n && n(t[t.length - 1]), o && o(), () => {});
        return e ? zo(r, -e) : r()
      }
      const Wo = () => ({
          type: "spring",
          stiffness: 500,
          damping: 25,
          restSpeed: 10
        }),
        Ho = t => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === t ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10
        }),
        Yo = () => ({
          type: "keyframes",
          ease: "linear",
          duration: .3
        }),
        Xo = {
          type: "keyframes",
          duration: .8
        },
        _o = {
          x: Wo,
          y: Wo,
          z: Wo,
          rotate: Wo,
          rotateX: Wo,
          rotateY: Wo,
          rotateZ: Wo,
          scaleX: Ho,
          scaleY: Ho,
          scale: Ho,
          opacity: Yo,
          backgroundColor: Yo,
          color: Yo,
          default: Ho
        },
        Go = (t, {
          keyframes: e
        }) => e.length > 2 ? Xo : (_o[t] || _o.default)(e[1]),
        qo = (t, e) => !("zIndex" === t || "number" != typeof e && !Array.isArray(e) && ("string" != typeof e || !fn.test(e) || e.startsWith("url(")));

      function Zo(t) {
        return 0 === t || "string" == typeof t && 0 === parseFloat(t) && -1 === t.indexOf(" ")
      }

      function Ko(t) {
        return "number" == typeof t ? 0 : bn("", t)
      }

      function Jo(t, e) {
        return t[e] || t.default || t
      }
      const Qo = {
          waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate")
        },
        tr = {},
        er = {};
      for (const t in Qo) er[t] = () => (void 0 === tr[t] && (tr[t] = Qo[t]()), tr[t]);
      const nr = new Set(["opacity"]),
        or = (t, e, n, o = {}) => r => {
          const i = Jo(o, t) || {},
            s = i.delay || o.delay || 0;
          let {
            elapsed: a = 0
          } = o;
          a -= zn(s);
          const l = function(t, e, n, o) {
              const r = qo(e, n);
              let i = void 0 !== o.from ? o.from : t.get();
              return "none" === i && r && "string" == typeof n ? i = bn(e, n) : Zo(i) && "string" == typeof n ? i = Ko(n) : !Array.isArray(n) && Zo(n) && "string" == typeof i && (n = Ko(i)), Array.isArray(n) ? (null === n[0] && (n[0] = i), n) : [i, n]
            }(e, t, n, i),
            u = l[0],
            c = l[l.length - 1],
            h = qo(t, u),
            d = qo(t, c);
          Un(h === d, `You are trying to animate ${t} from "${u}" to "${c}". ${u} is not an animatable value - to enable this animation set ${u} to a value animatable to ${c} via the \`style\` property.`);
          let p = {
            keyframes: l,
            velocity: e.getVelocity(),
            ...i,
            elapsed: a,
            onUpdate: t => {
              e.set(t), i.onUpdate && i.onUpdate(t)
            },
            onComplete: () => {
              r(), i.onComplete && i.onComplete()
            }
          };
          if (!h || !d || $n.current || !1 === i.type) return $o(p);
          if ("inertia" === i.type) {
            const t = function({
              keyframes: t,
              velocity: e = 0,
              min: n,
              max: o,
              power: r = .8,
              timeConstant: i = 750,
              bounceStiffness: s = 500,
              bounceDamping: a = 10,
              restDelta: l = 1,
              modifyTarget: u,
              driver: c,
              onUpdate: h,
              onComplete: d,
              onStop: p
            }) {
              const f = t[0];
              let m;

              function g(t) {
                return void 0 !== n && t < n || void 0 !== o && t > o
              }

              function v(t) {
                return void 0 === n ? o : void 0 === o || Math.abs(n - t) < Math.abs(o - t) ? n : o
              }

              function y(t) {
                null == m || m.stop(), m = Oo({
                  keyframes: [0, 1],
                  velocity: 0,
                  ...t,
                  driver: c,
                  onUpdate: e => {
                    var n;
                    null == h || h(e), null === (n = t.onUpdate) || void 0 === n || n.call(t, e)
                  },
                  onComplete: d,
                  onStop: p
                })
              }

              function x(t) {
                y({
                  type: "spring",
                  stiffness: s,
                  damping: a,
                  restDelta: l,
                  ...t
                })
              }
              if (g(f)) x({
                velocity: e,
                keyframes: [f, v(f)]
              });
              else {
                let t = r * e + f;
                void 0 !== u && (t = u(t));
                const o = v(t),
                  s = o === n ? -1 : 1;
                let a, c;
                const h = t => {
                  a = c, c = t, e = Ke(t - a, De.delta), (1 === s && t > o || -1 === s && t < o) && x({
                    keyframes: [t, o],
                    velocity: e
                  })
                };
                y({
                  type: "decay",
                  keyframes: [f, 0],
                  velocity: e,
                  timeConstant: i,
                  power: r,
                  restDelta: l,
                  modifyTarget: u,
                  onUpdate: g(t) ? h : void 0
                })
              }
              return {
                stop: () => null == m ? void 0 : m.stop()
              }
            }(p);
            return () => t.stop()
          }(function({
            when: t,
            delay: e,
            delayChildren: n,
            staggerChildren: o,
            staggerDirection: r,
            repeat: i,
            repeatType: s,
            repeatDelay: a,
            from: l,
            ...u
          }) {
            return !!Object.keys(u).length
          })(i) || (p = {
            ...p,
            ...Go(t, p)
          }), p.duration && (p.duration = zn(p.duration)), p.repeatDelay && (p.repeatDelay = zn(p.repeatDelay));
          const f = e.owner,
            m = f && f.current;
          if (er.waapi() && nr.has(t) && !p.repeatDelay && "mirror" !== p.repeatType && 0 !== p.damping && f && m instanceof HTMLElement && !f.getProps().onUpdate) return function(t, e, {
            onUpdate: n,
            onComplete: o,
            ...r
          }) {
            let {
              keyframes: i,
              duration: s = .3,
              elapsed: a = 0,
              ease: l
            } = r;
            if ("spring" === r.type || !(!(u = r.ease) || Array.isArray(u) || "string" == typeof u && jo[u])) {
              const t = Oo(r);
              let e = {
                done: !1,
                value: i[0]
              };
              const n = [];
              let o = 0;
              for (; !e.done;) e = t.sample(o), n.push(e.value), o += 10;
              i = n, s = o - 10, l = "linear"
            }
            var u;
            const c = No(t.owner.current, e, i, {
              ...r,
              delay: -a,
              duration: s,
              ease: l
            });
            return c.onfinish = () => {
              t.set(i[i.length - 1]), o && o()
            }, () => {
              const {
                currentTime: e
              } = c;
              if (e) {
                const n = Oo(r);
                t.setWithVelocity(n.sample(e - 10).value, n.sample(e).value, 10)
              }
              $e.update((() => c.cancel()))
            }
          }(e, t, p); {
            const t = Oo(p);
            return () => t.stop()
          }
        };

      function rr(t, e, n = {}) {
        let o;
        if (t.notify("AnimationStart", e), Array.isArray(e)) {
          const r = e.map((e => ir(t, e, n)));
          o = Promise.all(r)
        } else if ("string" == typeof e) o = ir(t, e, n);
        else {
          const r = "function" == typeof e ? Vn(t, e, n.custom) : e;
          o = sr(t, r, n)
        }
        return o.then((() => t.notify("AnimationComplete", e)))
      }

      function ir(t, e, n = {}) {
        var o;
        const r = Vn(t, e, n.custom);
        let {
          transition: i = t.getDefaultTransition() || {}
        } = r || {};
        n.transitionOverride && (i = n.transitionOverride);
        const s = r ? () => sr(t, r, n) : () => Promise.resolve(),
          a = (null === (o = t.variantChildren) || void 0 === o ? void 0 : o.size) ? (o = 0) => {
            const {
              delayChildren: r = 0,
              staggerChildren: s,
              staggerDirection: a
            } = i;
            return function(t, e, n = 0, o = 0, r = 1, i) {
              const s = [],
                a = (t.variantChildren.size - 1) * o,
                l = 1 === r ? (t = 0) => t * o : (t = 0) => a - t * o;
              return Array.from(t.variantChildren).sort(ar).forEach(((t, o) => {
                s.push(ir(t, e, {
                  ...i,
                  delay: n + l(o)
                }).then((() => t.notify("AnimationComplete", e))))
              })), Promise.all(s)
            }(t, e, r + o, s, a, n)
          } : () => Promise.resolve(),
          {
            when: l
          } = i;
        if (l) {
          const [t, e] = "beforeChildren" === l ? [s, a] : [a, s];
          return t().then(e)
        }
        return Promise.all([s(), a(n.delay)])
      }

      function sr(t, e, {
        delay: n = 0,
        transitionOverride: o,
        type: r
      } = {}) {
        var i;
        let {
          transition: s = t.getDefaultTransition(),
          transitionEnd: a,
          ...l
        } = t.makeTargetAnimatable(e);
        const u = t.getValue("willChange");
        o && (s = o);
        const c = [],
          h = r && (null === (i = t.animationState) || void 0 === i ? void 0 : i.getState()[r]);
        for (const e in l) {
          const o = t.getValue(e),
            r = l[e];
          if (!o || void 0 === r || h && lr(h, e)) continue;
          let i = {
            delay: n,
            elapsed: 0,
            ...s
          };
          if (t.shouldReduceMotion && O.has(e) && (i = {
              ...i,
              type: !1,
              delay: 0
            }), !o.hasAnimated) {
            const n = t.getProps()[jn];
            n && (i.elapsed = On(n, e))
          }
          let a = o.start(or(e, o, r, i));
          Bn(u) && (u.add(e), a = a.then((() => u.remove(e)))), c.push(a)
        }
        return Promise.all(c).then((() => {
          a && Mn(t, a)
        }))
      }

      function ar(t, e) {
        return t.sortNodePosition(e)
      }

      function lr({
        protectedKeys: t,
        needsAnimating: e
      }, n) {
        const o = t.hasOwnProperty(n) && !0 !== e[n];
        return e[n] = !1, o
      }
      const ur = [zt.Animate, zt.InView, zt.Focus, zt.Hover, zt.Tap, zt.Drag, zt.Exit],
        cr = [...ur].reverse(),
        hr = ur.length;

      function dr(t = !1) {
        return {
          isActive: t,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {}
        }
      }
      const pr = {
          animation: Ae((({
            visualElement: t,
            animate: e
          }) => {
            t.animationState || (t.animationState = function(t) {
              let e = function(t) {
                return e => Promise.all(e.map((({
                  animation: e,
                  options: n
                }) => rr(t, e, n))))
              }(t);
              const n = {
                [zt.Animate]: dr(!0),
                [zt.InView]: dr(),
                [zt.Hover]: dr(),
                [zt.Tap]: dr(),
                [zt.Drag]: dr(),
                [zt.Focus]: dr(),
                [zt.Exit]: dr()
              };
              let o = !0;
              const r = (e, n) => {
                const o = Vn(t, n);
                if (o) {
                  const {
                    transition: t,
                    transitionEnd: n,
                    ...r
                  } = o;
                  e = {
                    ...e,
                    ...r,
                    ...n
                  }
                }
                return e
              };

              function i(i, s) {
                const a = t.getProps(),
                  l = t.getVariantContext(!0) || {},
                  u = [],
                  c = new Set;
                let h = {},
                  f = 1 / 0;
                for (let e = 0; e < hr; e++) {
                  const v = cr[e],
                    y = n[v],
                    x = void 0 !== a[v] ? a[v] : l[v],
                    w = d(x),
                    b = v === s ? y.isActive : null;
                  !1 === b && (f = e);
                  let E = x === l[v] && x !== a[v] && w;
                  if (E && o && t.manuallyAnimateOnMount && (E = !1), y.protectedKeys = {
                      ...h
                    }, !y.isActive && null === b || !x && !y.prevProp || p(x) || "boolean" == typeof x) continue;
                  const S = (m = y.prevProp, "string" == typeof(g = x) ? g !== m : !!Array.isArray(g) && !Le(g, m));
                  let P = S || v === s && y.isActive && !E && w || e > f && w;
                  const T = Array.isArray(x) ? x : [x];
                  let A = T.reduce(r, {});
                  !1 === b && (A = {});
                  const {
                    prevResolvedValues: V = {}
                  } = y, C = {
                    ...V,
                    ...A
                  }, M = t => {
                    P = !0, c.delete(t), y.needsAnimating[t] = !0
                  };
                  for (const t in C) {
                    const e = A[t],
                      n = V[t];
                    h.hasOwnProperty(t) || (e !== n ? Rt(e) && Rt(n) ? !Le(e, n) || S ? M(t) : y.protectedKeys[t] = !0 : void 0 !== e ? M(t) : c.add(t) : void 0 !== e && c.has(t) ? M(t) : y.protectedKeys[t] = !0)
                  }
                  y.prevProp = x, y.prevResolvedValues = A, y.isActive && (h = {
                    ...h,
                    ...A
                  }), o && t.blockInitialAnimation && (P = !1), P && !E && u.push(...T.map((t => ({
                    animation: t,
                    options: {
                      type: v,
                      ...i
                    }
                  }))))
                }
                var m, g;
                if (c.size) {
                  const e = {};
                  c.forEach((n => {
                    const o = t.getBaseTarget(n);
                    void 0 !== o && (e[n] = o)
                  })), u.push({
                    animation: e
                  })
                }
                let v = Boolean(u.length);
                return o && !1 === a.initial && !t.manuallyAnimateOnMount && (v = !1), o = !1, v ? e(u) : Promise.resolve()
              }
              return {
                animateChanges: i,
                setActive: function(e, o, r) {
                  var s;
                  if (n[e].isActive === o) return Promise.resolve();
                  null === (s = t.variantChildren) || void 0 === s || s.forEach((t => {
                    var n;
                    return null === (n = t.animationState) || void 0 === n ? void 0 : n.setActive(e, o)
                  })), n[e].isActive = o;
                  const a = i(r, e);
                  for (const t in n) n[t].protectedKeys = {};
                  return a
                },
                setAnimateFunction: function(n) {
                  e = n(t)
                },
                getState: () => n
              }
            }(t)), p(e) && (0, o.useEffect)((() => e.subscribe(t)), [e])
          })),
          exit: Ae((t => {
            const {
              custom: e,
              visualElement: n
            } = t, [r, i] = Ce(), s = (0, o.useContext)(a);
            (0, o.useEffect)((() => {
              n.isPresent = r;
              const t = n.animationState && n.animationState.setActive(zt.Exit, !r, {
                custom: s && s.custom || e
              });
              t && !r && t.then(i)
            }), [r])
          }))
        },
        fr = (t, e) => Math.abs(t - e);

      function mr(t, e) {
        const n = fr(t.x, e.x),
          o = fr(t.y, e.y);
        return Math.sqrt(n ** 2 + o ** 2)
      }
      class gr {
        constructor(t, e, {
          transformPagePoint: n
        } = {}) {
          if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = () => {
              if (!this.lastMoveEvent || !this.lastMoveEventInfo) return;
              const t = xr(this.lastMoveEventInfo, this.history),
                e = null !== this.startEvent,
                n = mr(t.offset, {
                  x: 0,
                  y: 0
                }) >= 3;
              if (!e && !n) return;
              const {
                point: o
              } = t, {
                timestamp: r
              } = De;
              this.history.push({
                ...o,
                timestamp: r
              });
              const {
                onStart: i,
                onMove: s
              } = this.handlers;
              e || (i && i(this.lastMoveEvent, t), this.startEvent = this.lastMoveEvent), s && s(this.lastMoveEvent, t)
            }, this.handlePointerMove = (t, e) => {
              this.lastMoveEvent = t, this.lastMoveEventInfo = vr(e, this.transformPagePoint), Ht(t) && 0 === t.buttons ? this.handlePointerUp(t, e) : $e.update(this.updatePoint, !0)
            }, this.handlePointerUp = (t, e) => {
              this.end();
              const {
                onEnd: n,
                onSessionEnd: o
              } = this.handlers, r = xr(vr(e, this.transformPagePoint), this.history);
              this.startEvent && n && n(t, r), o && o(t, r)
            }, Yt(t) && t.touches.length > 1) return;
          this.handlers = e, this.transformPagePoint = n;
          const o = vr(qt(t), this.transformPagePoint),
            {
              point: r
            } = o,
            {
              timestamp: i
            } = De;
          this.history = [{
            ...r,
            timestamp: i
          }];
          const {
            onSessionStart: s
          } = e;
          s && s(t, xr(o, this.history)), this.removeListeners = fe(oe(window, "pointermove", this.handlePointerMove), oe(window, "pointerup", this.handlePointerUp), oe(window, "pointercancel", this.handlePointerUp))
        }
        updateHandlers(t) {
          this.handlers = t
        }
        end() {
          this.removeListeners && this.removeListeners(), We.update(this.updatePoint)
        }
      }

      function vr(t, e) {
        return e ? {
          point: e(t.point)
        } : t
      }

      function yr(t, e) {
        return {
          x: t.x - e.x,
          y: t.y - e.y
        }
      }

      function xr({
        point: t
      }, e) {
        return {
          point: t,
          delta: yr(t, br(e)),
          offset: yr(t, wr(e)),
          velocity: Er(e, .1)
        }
      }

      function wr(t) {
        return t[0]
      }

      function br(t) {
        return t[t.length - 1]
      }

      function Er(t, e) {
        if (t.length < 2) return {
          x: 0,
          y: 0
        };
        let n = t.length - 1,
          o = null;
        const r = br(t);
        for (; n >= 0 && (o = t[n], !(r.timestamp - o.timestamp > zn(e)));) n--;
        if (!o) return {
          x: 0,
          y: 0
        };
        const i = (r.timestamp - o.timestamp) / 1e3;
        if (0 === i) return {
          x: 0,
          y: 0
        };
        const s = {
          x: (r.x - o.x) / i,
          y: (r.y - o.y) / i
        };
        return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s
      }

      function Sr(t) {
        return t.max - t.min
      }

      function Pr(t, e = 0, n = .01) {
        return Math.abs(t - e) <= n
      }

      function Tr(t, e, n, o = .5) {
        t.origin = o, t.originPoint = Gn(e.min, e.max, t.origin), t.scale = Sr(n) / Sr(e), (Pr(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1), t.translate = Gn(n.min, n.max, t.origin) - t.originPoint, (Pr(t.translate) || isNaN(t.translate)) && (t.translate = 0)
      }

      function Ar(t, e, n, o) {
        Tr(t.x, e.x, n.x, null == o ? void 0 : o.originX), Tr(t.y, e.y, n.y, null == o ? void 0 : o.originY)
      }

      function Vr(t, e, n) {
        t.min = n.min + e.min, t.max = t.min + Sr(e)
      }

      function Cr(t, e, n) {
        t.min = e.min - n.min, t.max = t.min + Sr(e)
      }

      function Mr(t, e, n) {
        Cr(t.x, e.x, n.x), Cr(t.y, e.y, n.y)
      }

      function Lr(t, e, n) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== n ? t.max + n - (t.max - t.min) : void 0
        }
      }

      function kr(t, e) {
        let n = e.min - t.min,
          o = e.max - t.max;
        return e.max - e.min < t.max - t.min && ([n, o] = [o, n]), {
          min: n,
          max: o
        }
      }
      const Rr = .35;

      function Dr(t, e, n) {
        return {
          min: Br(t, e),
          max: Br(t, n)
        }
      }

      function Br(t, e) {
        return "number" == typeof t ? t : t[e] || 0
      }
      const Ir = () => ({
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
        Or = () => ({
          x: {
            min: 0,
            max: 0
          },
          y: {
            min: 0,
            max: 0
          }
        });

      function Fr(t) {
        return [t("x"), t("y")]
      }

      function jr({
        top: t,
        left: e,
        right: n,
        bottom: o
      }) {
        return {
          x: {
            min: e,
            max: n
          },
          y: {
            min: t,
            max: o
          }
        }
      }

      function Ur(t) {
        return void 0 === t || 1 === t
      }

      function Nr({
        scale: t,
        scaleX: e,
        scaleY: n
      }) {
        return !Ur(t) || !Ur(e) || !Ur(n)
      }

      function zr(t) {
        return Nr(t) || $r(t) || t.z || t.rotate || t.rotateX || t.rotateY
      }

      function $r(t) {
        return Wr(t.x) || Wr(t.y)
      }

      function Wr(t) {
        return t && "0%" !== t
      }

      function Hr(t, e, n) {
        return n + e * (t - n)
      }

      function Yr(t, e, n, o, r) {
        return void 0 !== r && (t = Hr(t, r, o)), Hr(t, n, o) + e
      }

      function Xr(t, e = 0, n = 1, o, r) {
        t.min = Yr(t.min, e, n, o, r), t.max = Yr(t.max, e, n, o, r)
      }

      function _r(t, {
        x: e,
        y: n
      }) {
        Xr(t.x, e.translate, e.scale, e.originPoint), Xr(t.y, n.translate, n.scale, n.originPoint)
      }

      function Gr(t) {
        return Number.isInteger(t) || t > 1.0000000000001 || t < .999999999999 ? t : 1
      }

      function qr(t, e) {
        t.min = t.min + e, t.max = t.max + e
      }

      function Zr(t, e, [n, o, r]) {
        const i = void 0 !== e[r] ? e[r] : .5,
          s = Gn(t.min, t.max, i);
        Xr(t, e[n], e[o], s, e.scale)
      }
      const Kr = ["x", "scaleX", "originX"],
        Jr = ["y", "scaleY", "originY"];

      function Qr(t, e) {
        Zr(t.x, e, Kr), Zr(t.y, e, Jr)
      }

      function ti(t, e) {
        return jr(function(t, e) {
          if (!e) return t;
          const n = e({
              x: t.left,
              y: t.top
            }),
            o = e({
              x: t.right,
              y: t.bottom
            });
          return {
            top: n.y,
            left: n.x,
            bottom: o.y,
            right: o.x
          }
        }(t.getBoundingClientRect(), e))
      }
      const ei = new WeakMap;
      class ni {
        constructor(t) {
          this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
            x: 0,
            y: 0
          }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = Or(), this.visualElement = t
        }
        start(t, {
          snapToCursor: e = !1
        } = {}) {
          !1 !== this.visualElement.isPresent && (this.panSession = new gr(t, {
            onSessionStart: t => {
              this.stopAnimation(), e && this.snapToCursor(qt(t, "page").point)
            },
            onStart: (t, e) => {
              var n;
              const {
                drag: o,
                dragPropagation: r,
                onDragStart: i
              } = this.getProps();
              (!o || r || (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = le(o), this.openGlobalLock)) && (this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Fr((t => {
                var e, n;
                let o = this.getAxisMotionValue(t).get() || 0;
                if (et.test(o)) {
                  const r = null === (n = null === (e = this.visualElement.projection) || void 0 === e ? void 0 : e.layout) || void 0 === n ? void 0 : n.layoutBox[t];
                  r && (o = Sr(r) * (parseFloat(o) / 100))
                }
                this.originPoint[t] = o
              })), null == i || i(t, e), null === (n = this.visualElement.animationState) || void 0 === n || n.setActive(zt.Drag, !0))
            },
            onMove: (t, e) => {
              const {
                dragPropagation: n,
                dragDirectionLock: o,
                onDirectionLock: r,
                onDrag: i
              } = this.getProps();
              if (!n && !this.openGlobalLock) return;
              const {
                offset: s
              } = e;
              if (o && null === this.currentDirection) return this.currentDirection = function(t, e = 10) {
                let n = null;
                return Math.abs(t.y) > e ? n = "y" : Math.abs(t.x) > e && (n = "x"), n
              }(s), void(null !== this.currentDirection && (null == r || r(this.currentDirection)));
              this.updateAxis("x", e.point, s), this.updateAxis("y", e.point, s), this.visualElement.render(), null == i || i(t, e)
            },
            onSessionEnd: (t, e) => this.stop(t, e)
          }, {
            transformPagePoint: this.visualElement.getTransformPagePoint()
          }))
        }
        stop(t, e) {
          const n = this.isDragging;
          if (this.cancel(), !n) return;
          const {
            velocity: o
          } = e;
          this.startAnimation(o);
          const {
            onDragEnd: r
          } = this.getProps();
          null == r || r(t, e)
        }
        cancel() {
          var t, e;
          this.isDragging = !1, this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !1), null === (t = this.panSession) || void 0 === t || t.end(), this.panSession = void 0;
          const {
            dragPropagation: n
          } = this.getProps();
          !n && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), null === (e = this.visualElement.animationState) || void 0 === e || e.setActive(zt.Drag, !1)
        }
        updateAxis(t, e, n) {
          const {
            drag: o
          } = this.getProps();
          if (!n || !oi(t, o, this.currentDirection)) return;
          const r = this.getAxisMotionValue(t);
          let i = this.originPoint[t] + n[t];
          this.constraints && this.constraints[t] && (i = function(t, {
            min: e,
            max: n
          }, o) {
            return void 0 !== e && t < e ? t = o ? Gn(e, t, o.min) : Math.max(t, e) : void 0 !== n && t > n && (t = o ? Gn(n, t, o.max) : Math.min(t, n)), t
          }(i, this.constraints[t], this.elastic[t])), r.set(i)
        }
        resolveConstraints() {
          const {
            dragConstraints: t,
            dragElastic: e
          } = this.getProps(), {
            layout: n
          } = this.visualElement.projection || {}, o = this.constraints;
          t && h(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : this.constraints = !(!t || !n) && function(t, {
            top: e,
            left: n,
            bottom: o,
            right: r
          }) {
            return {
              x: Lr(t.x, n, r),
              y: Lr(t.y, e, o)
            }
          }(n.layoutBox, t), this.elastic = function(t = Rr) {
            return !1 === t ? t = 0 : !0 === t && (t = Rr), {
              x: Dr(t, "left", "right"),
              y: Dr(t, "top", "bottom")
            }
          }(e), o !== this.constraints && n && this.constraints && !this.hasMutatedConstraints && Fr((t => {
            this.getAxisMotionValue(t) && (this.constraints[t] = function(t, e) {
              const n = {};
              return void 0 !== e.min && (n.min = e.min - t.min), void 0 !== e.max && (n.max = e.max - t.min), n
            }(n.layoutBox[t], this.constraints[t]))
          }))
        }
        resolveRefConstraints() {
          const {
            dragConstraints: t,
            onMeasureDragConstraints: e
          } = this.getProps();
          if (!t || !h(t)) return !1;
          const n = t.current;
          Nn(null !== n, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
          const {
            projection: o
          } = this.visualElement;
          if (!o || !o.layout) return !1;
          const r = function(t, e, n) {
            const o = ti(t, n),
              {
                scroll: r
              } = e;
            return r && (qr(o.x, r.offset.x), qr(o.y, r.offset.y)), o
          }(n, o.root, this.visualElement.getTransformPagePoint());
          let i = function(t, e) {
            return {
              x: kr(t.x, e.x),
              y: kr(t.y, e.y)
            }
          }(o.layout.layoutBox, r);
          if (e) {
            const t = e(function({
              x: t,
              y: e
            }) {
              return {
                top: e.min,
                right: t.max,
                bottom: e.max,
                left: t.min
              }
            }(i));
            this.hasMutatedConstraints = !!t, t && (i = jr(t))
          }
          return i
        }
        startAnimation(t) {
          const {
            drag: e,
            dragMomentum: n,
            dragElastic: o,
            dragTransition: r,
            dragSnapToOrigin: i,
            onDragTransitionEnd: s
          } = this.getProps(), a = this.constraints || {}, l = Fr((s => {
            if (!oi(s, e, this.currentDirection)) return;
            let l = (null == a ? void 0 : a[s]) || {};
            i && (l = {
              min: 0,
              max: 0
            });
            const u = o ? 200 : 1e6,
              c = o ? 40 : 1e7,
              h = {
                type: "inertia",
                velocity: n ? t[s] : 0,
                bounceStiffness: u,
                bounceDamping: c,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...r,
                ...l
              };
            return this.startAxisValueAnimation(s, h)
          }));
          return Promise.all(l).then(s)
        }
        startAxisValueAnimation(t, e) {
          const n = this.getAxisMotionValue(t);
          return n.start(or(t, n, 0, e))
        }
        stopAnimation() {
          Fr((t => this.getAxisMotionValue(t).stop()))
        }
        getAxisMotionValue(t) {
          var e;
          const n = "_drag" + t.toUpperCase();
          return this.visualElement.getProps()[n] || this.visualElement.getValue(t, (null === (e = this.visualElement.getProps().initial) || void 0 === e ? void 0 : e[t]) || 0)
        }
        snapToCursor(t) {
          Fr((e => {
            const {
              drag: n
            } = this.getProps();
            if (!oi(e, n, this.currentDirection)) return;
            const {
              projection: o
            } = this.visualElement, r = this.getAxisMotionValue(e);
            if (o && o.layout) {
              const {
                min: n,
                max: i
              } = o.layout.layoutBox[e];
              r.set(t[e] - Gn(n, i, .5))
            }
          }))
        }
        scalePositionWithinConstraints() {
          var t;
          if (!this.visualElement.current) return;
          const {
            drag: e,
            dragConstraints: n
          } = this.getProps(), {
            projection: o
          } = this.visualElement;
          if (!h(n) || !o || !this.constraints) return;
          this.stopAnimation();
          const r = {
            x: 0,
            y: 0
          };
          Fr((t => {
            const e = this.getAxisMotionValue(t);
            if (e) {
              const n = e.get();
              r[t] = function(t, e) {
                let n = .5;
                const o = Sr(t),
                  r = Sr(e);
                return r > o ? n = ro(e.min, e.max - o, t.min) : o > r && (n = ro(t.min, t.max - r, e.min)), H(0, 1, n)
              }({
                min: n,
                max: n
              }, this.constraints[t])
            }
          }));
          const {
            transformTemplate: i
          } = this.visualElement.getProps();
          this.visualElement.current.style.transform = i ? i({}, "") : "none", null === (t = o.root) || void 0 === t || t.updateScroll(), o.updateLayout(), this.resolveConstraints(), Fr((t => {
            if (!oi(t, e, null)) return;
            const n = this.getAxisMotionValue(t),
              {
                min: o,
                max: i
              } = this.constraints[t];
            n.set(Gn(o, i, r[t]))
          }))
        }
        addListeners() {
          var t;
          if (!this.visualElement.current) return;
          ei.set(this.visualElement, this);
          const e = oe(this.visualElement.current, "pointerdown", (t => {
              const {
                drag: e,
                dragListener: n = !0
              } = this.getProps();
              e && n && this.start(t)
            })),
            n = () => {
              const {
                dragConstraints: t
              } = this.getProps();
              h(t) && (this.constraints = this.resolveRefConstraints())
            },
            {
              projection: o
            } = this.visualElement,
            r = o.addEventListener("measure", n);
          o && !o.layout && (null === (t = o.root) || void 0 === t || t.updateScroll(), o.updateLayout()), n();
          const i = $t(window, "resize", (() => this.scalePositionWithinConstraints())),
            s = o.addEventListener("didUpdate", (({
              delta: t,
              hasLayoutChanged: e
            }) => {
              this.isDragging && e && (Fr((e => {
                const n = this.getAxisMotionValue(e);
                n && (this.originPoint[e] += t[e].translate, n.set(n.get() + t[e].translate))
              })), this.visualElement.render())
            }));
          return () => {
            i(), e(), r(), null == s || s()
          }
        }
        getProps() {
          const t = this.visualElement.getProps(),
            {
              drag: e = !1,
              dragDirectionLock: n = !1,
              dragPropagation: o = !1,
              dragConstraints: r = !1,
              dragElastic: i = Rr,
              dragMomentum: s = !0
            } = t;
          return {
            ...t,
            drag: e,
            dragDirectionLock: n,
            dragPropagation: o,
            dragConstraints: r,
            dragElastic: i,
            dragMomentum: s
          }
        }
      }

      function oi(t, e, n) {
        return !(!0 !== e && e !== t || null !== n && n !== t)
      }
      const ri = {
        pan: Ae((function({
          onPan: t,
          onPanStart: e,
          onPanEnd: n,
          onPanSessionStart: i,
          visualElement: s
        }) {
          const a = t || e || n || i,
            l = (0, o.useRef)(null),
            {
              transformPagePoint: u
            } = (0, o.useContext)(r),
            c = {
              onSessionStart: i,
              onStart: e,
              onMove: t,
              onEnd: (t, e) => {
                l.current = null, n && n(t, e)
              }
            };
          (0, o.useEffect)((() => {
            null !== l.current && l.current.updateHandlers(c)
          })), re(s, "pointerdown", a && function(t) {
            l.current = new gr(t, c, {
              transformPagePoint: u
            })
          }), de((() => l.current && l.current.end()))
        })),
        drag: Ae((function(t) {
          const {
            dragControls: e,
            visualElement: n
          } = t, r = b((() => new ni(n)));
          (0, o.useEffect)((() => e && e.subscribe(r)), [r, e]), (0, o.useEffect)((() => r.addListeners()), [r])
        }))
      };

      function ii(t) {
        return "string" == typeof t && t.startsWith("var(--")
      }
      const si = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;

      function ai(t, e, n = 1) {
        Nn(n <= 4, `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`);
        const [o, r] = function(t) {
          const e = si.exec(t);
          if (!e) return [, ];
          const [, n, o] = e;
          return [n, o]
        }(t);
        if (!o) return;
        const i = window.getComputedStyle(e).getPropertyValue(o);
        return i ? i.trim() : ii(r) ? ai(r, e, n + 1) : r
      }
      const li = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y"]),
        ui = t => li.has(t),
        ci = (t, e) => {
          t.set(e, !1), t.set(e)
        },
        hi = t => t === Y || t === nt;
      var di;
      ! function(t) {
        t.width = "width", t.height = "height", t.left = "left", t.right = "right", t.top = "top", t.bottom = "bottom"
      }(di || (di = {}));
      const pi = (t, e) => parseFloat(t.split(", ")[e]),
        fi = (t, e) => (n, {
          transform: o
        }) => {
          if ("none" === o || !o) return 0;
          const r = o.match(/^matrix3d\((.+)\)$/);
          if (r) return pi(r[1], e); {
            const e = o.match(/^matrix\((.+)\)$/);
            return e ? pi(e[1], t) : 0
          }
        },
        mi = new Set(["x", "y", "z"]),
        gi = I.filter((t => !mi.has(t))),
        vi = {
          width: ({
            x: t
          }, {
            paddingLeft: e = "0",
            paddingRight: n = "0"
          }) => t.max - t.min - parseFloat(e) - parseFloat(n),
          height: ({
            y: t
          }, {
            paddingTop: e = "0",
            paddingBottom: n = "0"
          }) => t.max - t.min - parseFloat(e) - parseFloat(n),
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
          x: fi(4, 13),
          y: fi(5, 14)
        };

      function yi(t, e, n, o) {
        return (t => Object.keys(t).some(ui))(e) ? ((t, e, n = {}, o = {}) => {
          e = {
            ...e
          }, o = {
            ...o
          };
          const r = Object.keys(e).filter(ui);
          let i = [],
            s = !1;
          const a = [];
          if (r.forEach((r => {
              const l = t.getValue(r);
              if (!t.hasValue(r)) return;
              let u = n[r],
                c = Pn(u);
              const h = e[r];
              let d;
              if (Rt(h)) {
                const t = h.length,
                  e = null === h[0] ? 1 : 0;
                u = h[e], c = Pn(u);
                for (let n = e; n < t; n++) d ? Nn(Pn(h[n]) === d, "All keyframes must be of the same type") : (d = Pn(h[n]), Nn(d === c || hi(c) && hi(d), "Keyframes must be of the same dimension as the current value"))
              } else d = Pn(h);
              if (c !== d)
                if (hi(c) && hi(d)) {
                  const t = l.get();
                  "string" == typeof t && l.set(parseFloat(t)), "string" == typeof h ? e[r] = parseFloat(h) : Array.isArray(h) && d === nt && (e[r] = h.map(parseFloat))
                } else(null == c ? void 0 : c.transform) && (null == d ? void 0 : d.transform) && (0 === u || 0 === h) ? 0 === u ? l.set(d.transform(u)) : e[r] = c.transform(h) : (s || (i = function(t) {
                  const e = [];
                  return gi.forEach((n => {
                    const o = t.getValue(n);
                    void 0 !== o && (e.push([n, o.get()]), o.set(n.startsWith("scale") ? 1 : 0))
                  })), e.length && t.render(), e
                }(t), s = !0), a.push(r), o[r] = void 0 !== o[r] ? o[r] : e[r], ci(l, h))
            })), a.length) {
            const n = a.indexOf("height") >= 0 ? window.pageYOffset : null,
              r = ((t, e, n) => {
                const o = e.measureViewportBox(),
                  r = e.current,
                  i = getComputedStyle(r),
                  {
                    display: s
                  } = i,
                  a = {};
                "none" === s && e.setStaticValue("display", t.display || "block"), n.forEach((t => {
                  a[t] = vi[t](o, i)
                })), e.render();
                const l = e.measureViewportBox();
                return n.forEach((n => {
                  const o = e.getValue(n);
                  ci(o, a[n]), t[n] = vi[n](l, i)
                })), t
              })(e, t, a);
            return i.length && i.forEach((([e, n]) => {
              t.getValue(e).set(n)
            })), t.render(), l && null !== n && window.scrollTo({
              top: n
            }), {
              target: r,
              transitionEnd: o
            }
          }
          return {
            target: e,
            transitionEnd: o
          }
        })(t, e, n, o) : {
          target: e,
          transitionEnd: o
        }
      }
      const xi = {
          current: null
        },
        wi = {
          current: !1
        };

      function bi() {
        if (wi.current = !0, l)
          if (window.matchMedia) {
            const t = window.matchMedia("(prefers-reduced-motion)"),
              e = () => xi.current = t.matches;
            t.addListener(e), e()
          } else xi.current = !1
      }
      const Ei = Object.keys(x),
        Si = Ei.length,
        Pi = ["AnimationStart", "AnimationComplete", "Update", "Unmount", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
      class Ti {
        constructor({
          parent: t,
          props: e,
          reducedMotionConfig: n,
          visualState: o
        }, r = {}) {
          this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.isPresent = !0, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
            this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
          }, this.scheduleRender = () => $e.render(this.render, !1, !0);
          const {
            latestValues: i,
            renderState: s
          } = o;
          this.latestValues = i, this.baseTarget = {
            ...i
          }, this.initialValues = e.initial ? {
            ...i
          } : {}, this.renderState = s, this.parent = t, this.props = e, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = n, this.options = r, this.isControllingVariants = m(e), this.isVariantNode = g(e), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = Boolean(t && t.current);
          const {
            willChange: a,
            ...l
          } = this.scrapeMotionValuesFromProps(e);
          for (const t in l) {
            const e = l[t];
            void 0 !== i[t] && j(e) && (e.set(i[t], !1), Bn(a) && a.add(t))
          }
        }
        scrapeMotionValuesFromProps(t) {
          return {}
        }
        mount(t) {
          var e;
          this.current = t, this.projection && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = null === (e = this.parent) || void 0 === e ? void 0 : e.addVariantChild(this)), this.values.forEach(((t, e) => this.bindToMotionValue(e, t))), wi.current || bi(), this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || xi.current), this.parent && this.parent.children.add(this), this.setProps(this.props)
        }
        unmount() {
          var t, e, n;
          null === (t = this.projection) || void 0 === t || t.unmount(), We.update(this.notifyUpdate), We.render(this.render), this.valueSubscriptions.forEach((t => t())), null === (e = this.removeFromVariantTree) || void 0 === e || e.call(this), null === (n = this.parent) || void 0 === n || n.children.delete(this);
          for (const t in this.events) this.events[t].clear();
          this.current = null
        }
        bindToMotionValue(t, e) {
          const n = O.has(t),
            o = e.on("change", (e => {
              this.latestValues[t] = e, this.props.onUpdate && $e.update(this.notifyUpdate, !1, !0), n && this.projection && (this.projection.isTransformDirty = !0)
            })),
            r = e.on("renderRequest", this.scheduleRender);
          this.valueSubscriptions.set(t, (() => {
            o(), r()
          }))
        }
        sortNodePosition(t) {
          return this.current && this.sortInstanceNodePosition && this.type === t.type ? this.sortInstanceNodePosition(this.current, t.current) : 0
        }
        loadFeatures(t, e, n, r, i, s) {
          const a = [];
          "production" !== ge && n && e && Nn(!1, "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.");
          for (let e = 0; e < Si; e++) {
            const n = Ei[e],
              {
                isEnabled: r,
                Component: i
              } = x[n];
            r(t) && i && a.push((0, o.createElement)(i, {
              key: n,
              ...t,
              visualElement: this
            }))
          }
          if (!this.projection && i) {
            this.projection = new i(r, this.latestValues, this.parent && this.parent.projection);
            const {
              layoutId: e,
              layout: n,
              drag: o,
              dragConstraints: a,
              layoutScroll: l
            } = t;
            this.projection.setOptions({
              layoutId: e,
              layout: n,
              alwaysMeasureLayout: Boolean(o) || a && h(a),
              visualElement: this,
              scheduleRender: () => this.scheduleRender(),
              animationType: "string" == typeof n ? n : "both",
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
          return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Or()
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
          for (let e = 0; e < Pi.length; e++) {
            const n = Pi[e];
            this.propEventSubscriptions[n] && (this.propEventSubscriptions[n](), delete this.propEventSubscriptions[n]);
            const o = t["on" + n];
            o && (this.propEventSubscriptions[n] = this.on(n, o))
          }
          this.prevMotionValues = function(t, e, n) {
            const {
              willChange: o
            } = e;
            for (const r in e) {
              const i = e[r],
                s = n[r];
              if (j(i)) t.addValue(r, i), Bn(o) && o.add(r);
              else if (j(s)) t.addValue(r, Qe(i, {
                owner: t
              })), Bn(o) && o.remove(r);
              else if (s !== i)
                if (t.hasValue(r)) {
                  const e = t.getValue(r);
                  !e.hasAnimated && e.set(i)
                } else {
                  const e = t.getStaticValue(r);
                  t.addValue(r, Qe(void 0 !== e ? e : i))
                }
            }
            for (const o in n) void 0 === e[o] && t.removeValue(o);
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
          var e, n;
          if (t) return null === (e = this.parent) || void 0 === e ? void 0 : e.getVariantContext();
          if (!this.isControllingVariants) {
            const t = (null === (n = this.parent) || void 0 === n ? void 0 : n.getVariantContext()) || {};
            return void 0 !== this.props.initial && (t.initial = this.props.initial), t
          }
          const o = {};
          for (let t = 0; t < Vi; t++) {
            const e = Ai[t],
              n = this.props[e];
            (d(n) || !1 === n) && (o[e] = n)
          }
          return o
        }
        addVariantChild(t) {
          var e;
          const n = this.getClosestVariantNode();
          if (n) return null === (e = n.variantChildren) || void 0 === e || e.add(t), () => n.variantChildren.delete(t)
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
          let n = this.values.get(t);
          return void 0 === n && void 0 !== e && (n = Qe(e, {
            owner: this
          }), this.addValue(t, n)), n
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
            initial: n
          } = this.props, o = "string" == typeof n || "object" == typeof n ? null === (e = kt(this.props, n)) || void 0 === e ? void 0 : e[t] : void 0;
          if (n && void 0 !== o) return o;
          const r = this.getBaseTargetFromProps(this.props, t);
          return void 0 === r || j(r) ? void 0 !== this.initialValues[t] && void 0 === o ? void 0 : this.baseTarget[t] : r
        }
        on(t, e) {
          return this.events[t] || (this.events[t] = new Ze), this.events[t].add(e)
        }
        notify(t, ...e) {
          var n;
          null === (n = this.events[t]) || void 0 === n || n.notify(...e)
        }
      }
      const Ai = ["initial", ...ur],
        Vi = Ai.length;
      class Ci extends Ti {
        sortInstanceNodePosition(t, e) {
          return 2 & t.compareDocumentPosition(e) ? 1 : -1
        }
        getBaseTargetFromProps(t, e) {
          var n;
          return null === (n = t.style) || void 0 === n ? void 0 : n[e]
        }
        removeValueFromRenderState(t, {
          vars: e,
          style: n
        }) {
          delete e[t], delete n[t]
        }
        makeTargetAnimatableFromInstance({
          transition: t,
          transitionEnd: e,
          ...n
        }, {
          transformValues: o
        }, r) {
          let i = Dn(n, t || {}, this);
          if (o && (e && (e = o(e)), n && (n = o(n)), i && (i = o(i))), r) {
            kn(this, n, i);
            const t = ((t, e, n, o) => {
              const r = function(t, {
                ...e
              }, n) {
                const o = t.current;
                if (!(o instanceof Element)) return {
                  target: e,
                  transitionEnd: n
                };
                n && (n = {
                  ...n
                }), t.values.forEach((t => {
                  const e = t.get();
                  if (!ii(e)) return;
                  const n = ai(e, o);
                  n && t.set(n)
                }));
                for (const t in e) {
                  const r = e[t];
                  if (!ii(r)) continue;
                  const i = ai(r, o);
                  i && (e[t] = i, n && void 0 === n[t] && (n[t] = r))
                }
                return {
                  target: e,
                  transitionEnd: n
                }
              }(t, e, o);
              return yi(t, e = r.target, n, o = r.transitionEnd)
            })(this, n, i, e);
            e = t.transitionEnd, n = t.target
          }
          return {
            transition: t,
            transitionEnd: e,
            ...n
          }
        }
      }
      class Mi extends Ci {
        readValueFromInstance(t, e) {
          if (O.has(e)) {
            const t = wn(e);
            return t && t.default || 0
          } {
            const o = (n = t, window.getComputedStyle(n)),
              r = ($(e) ? o.getPropertyValue(e) : o[e]) || 0;
            return "string" == typeof r ? r.trim() : r
          }
          var n
        }
        measureInstanceViewportBox(t, {
          transformPagePoint: e
        }) {
          return ti(t, e)
        }
        build(t, e, n, o) {
          lt(t, e, n, o.transformTemplate)
        }
        scrapeMotionValuesFromProps(t) {
          return Mt(t)
        }
        renderInstance(t, e, n, o) {
          At(t, e, n, o)
        }
      }
      class Li extends Ci {
        constructor() {
          super(...arguments), this.isSVGTag = !1
        }
        getBaseTargetFromProps(t, e) {
          return t[e]
        }
        readValueFromInstance(t, e) {
          var n;
          return O.has(e) ? (null === (n = wn(e)) || void 0 === n ? void 0 : n.default) || 0 : (e = Vt.has(e) ? e : Tt(e), t.getAttribute(e))
        }
        measureInstanceViewportBox() {
          return Or()
        }
        scrapeMotionValuesFromProps(t) {
          return Lt(t)
        }
        build(t, e, n, o) {
          wt(t, e, n, this.isSVGTag, o.transformTemplate)
        }
        renderInstance(t, e, n, o) {
          Ct(t, e, 0, o)
        }
        mount(t) {
          this.isSVGTag = Et(t.tagName), super.mount(t)
        }
      }
      const ki = (t, e) => R(t) ? new Li(e, {
        enableHardwareAcceleration: !1
      }) : new Mi(e, {
        enableHardwareAcceleration: !0
      });

      function Ri(t, e) {
        return e.max === e.min ? 0 : t / (e.max - e.min) * 100
      }
      const Di = {
          correct: (t, e) => {
            if (!e.target) return t;
            if ("string" == typeof t) {
              if (!nt.test(t)) return t;
              t = parseFloat(t)
            }
            return `${Ri(t,e.target.x)}% ${Ri(t,e.target.y)}%`
          }
        },
        Bi = "_$css",
        Ii = {
          correct: (t, {
            treeScale: e,
            projectionDelta: n
          }) => {
            const o = t,
              r = t.includes("var("),
              i = [];
            r && (t = t.replace(si, (t => (i.push(t), Bi))));
            const s = fn.parse(t);
            if (s.length > 5) return o;
            const a = fn.createTransformer(t),
              l = "number" != typeof s[0] ? 1 : 0,
              u = n.x.scale * e.x,
              c = n.y.scale * e.y;
            s[0 + l] /= u, s[1 + l] /= c;
            const h = Gn(u, c, .5);
            "number" == typeof s[2 + l] && (s[2 + l] /= h), "number" == typeof s[3 + l] && (s[3 + l] /= h);
            let d = a(s);
            if (r) {
              let t = 0;
              d = d.replace(Bi, (() => {
                const e = i[t];
                return t++, e
              }))
            }
            return d
          }
        };
      class Oi extends o.Component {
        componentDidMount() {
          const {
            visualElement: t,
            layoutGroup: e,
            switchLayoutGroup: n,
            layoutId: o
          } = this.props, {
            projection: r
          } = t;
          B(Fi), r && (e.group && e.group.add(r), n && n.register && o && n.register(r), r.root.didUpdate(), r.addEventListener("animationComplete", (() => {
            this.safeToRemove()
          })), r.setOptions({
            ...r.options,
            onExitComplete: () => this.safeToRemove()
          })), E.hasEverUpdated = !0
        }
        getSnapshotBeforeUpdate(t) {
          const {
            layoutDependency: e,
            visualElement: n,
            drag: o,
            isPresent: r
          } = this.props, i = n.projection;
          return i ? (i.isPresent = r, o || t.layoutDependency !== e || void 0 === e ? i.willUpdate() : this.safeToRemove(), t.isPresent !== r && (r ? i.promote() : i.relegate() || $e.postRender((() => {
            var t;
            (null === (t = i.getStack()) || void 0 === t ? void 0 : t.members.length) || this.safeToRemove()
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
            switchLayoutGroup: n
          } = this.props, {
            projection: o
          } = t;
          o && (o.scheduleCheckAfterUnmount(), (null == e ? void 0 : e.group) && e.group.remove(o), (null == n ? void 0 : n.deregister) && n.deregister(o))
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
      const Fi = {
          borderRadius: {
            ...Di,
            applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
          },
          borderTopLeftRadius: Di,
          borderTopRightRadius: Di,
          borderBottomLeftRadius: Di,
          borderBottomRightRadius: Di,
          boxShadow: Ii
        },
        ji = {
          measureLayout: function(t) {
            const [e, n] = Ce(), r = (0, o.useContext)(P);
            return o.createElement(Oi, {
              ...t,
              layoutGroup: r,
              switchLayoutGroup: (0, o.useContext)(A),
              isPresent: e,
              safeToRemove: n
            })
          }
        };

      function Ui(t, e, n = {}) {
        const o = j(t) ? t : Qe(t);
        return o.start(or("", o, e, n)), {
          stop: () => o.stop(),
          isAnimating: () => o.isAnimating()
        }
      }
      const Ni = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        zi = Ni.length,
        $i = t => "string" == typeof t ? parseFloat(t) : t,
        Wi = t => "number" == typeof t || nt.test(t);

      function Hi(t, e) {
        return void 0 !== t[e] ? t[e] : t.borderRadius
      }
      const Yi = _i(0, .5, ho),
        Xi = _i(.5, .95, ao);

      function _i(t, e, n) {
        return o => o < t ? 0 : o > e ? 1 : n(ro(t, e, o))
      }

      function Gi(t, e) {
        t.min = e.min, t.max = e.max
      }

      function qi(t, e) {
        Gi(t.x, e.x), Gi(t.y, e.y)
      }

      function Zi(t, e, n, o, r) {
        return t = Hr(t -= e, 1 / n, o), void 0 !== r && (t = Hr(t, 1 / r, o)), t
      }

      function Ki(t, e, [n, o, r], i, s) {
        ! function(t, e = 0, n = 1, o = .5, r, i = t, s = t) {
          if (et.test(e) && (e = parseFloat(e), e = Gn(s.min, s.max, e / 100) - s.min), "number" != typeof e) return;
          let a = Gn(i.min, i.max, o);
          t === i && (a -= e), t.min = Zi(t.min, e, n, a, r), t.max = Zi(t.max, e, n, a, r)
        }(t, e[n], e[o], e[r], e.scale, i, s)
      }
      const Ji = ["x", "scaleX", "originX"],
        Qi = ["y", "scaleY", "originY"];

      function ts(t, e, n, o) {
        Ki(t.x, e, Ji, null == n ? void 0 : n.x, null == o ? void 0 : o.x), Ki(t.y, e, Qi, null == n ? void 0 : n.y, null == o ? void 0 : o.y)
      }

      function es(t) {
        return 0 === t.translate && 1 === t.scale
      }

      function ns(t) {
        return es(t.x) && es(t.y)
      }

      function os(t, e) {
        return t.x.min === e.x.min && t.x.max === e.x.max && t.y.min === e.y.min && t.y.max === e.y.max
      }

      function rs(t) {
        return Sr(t.x) / Sr(t.y)
      }
      class is {
        constructor() {
          this.members = []
        }
        add(t) {
          Ge(this.members, t), t.scheduleRender()
        }
        remove(t) {
          if (qe(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
            const t = this.members[this.members.length - 1];
            t && this.promote(t)
          }
        }
        relegate(t) {
          const e = this.members.findIndex((e => t === e));
          if (0 === e) return !1;
          let n;
          for (let t = e; t >= 0; t--) {
            const e = this.members[t];
            if (!1 !== e.isPresent) {
              n = e;
              break
            }
          }
          return !!n && (this.promote(n), !0)
        }
        promote(t, e) {
          var n;
          const o = this.lead;
          if (t !== o && (this.prevLead = o, this.lead = t, t.show(), o)) {
            o.instance && o.scheduleRender(), t.scheduleRender(), t.resumeFrom = o, e && (t.resumeFrom.preserveOpacity = !0), o.snapshot && (t.snapshot = o.snapshot, t.snapshot.latestValues = o.animationValues || o.latestValues), (null === (n = t.root) || void 0 === n ? void 0 : n.isUpdating) && (t.isLayoutDirty = !0);
            const {
              crossfade: r
            } = t.options;
            !1 === r && o.hide()
          }
        }
        exitAnimationComplete() {
          this.members.forEach((t => {
            var e, n, o, r, i;
            null === (n = (e = t.options).onExitComplete) || void 0 === n || n.call(e), null === (i = null === (o = t.resumingFrom) || void 0 === o ? void 0 : (r = o.options).onExitComplete) || void 0 === i || i.call(r)
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

      function ss(t, e, n) {
        let o = "";
        const r = t.x.translate / e.x,
          i = t.y.translate / e.y;
        if ((r || i) && (o = `translate3d(${r}px, ${i}px, 0) `), 1 === e.x && 1 === e.y || (o += `scale(${1/e.x}, ${1/e.y}) `), n) {
          const {
            rotate: t,
            rotateX: e,
            rotateY: r
          } = n;
          t && (o += `rotate(${t}deg) `), e && (o += `rotateX(${e}deg) `), r && (o += `rotateY(${r}deg) `)
        }
        const s = t.x.scale * e.x,
          a = t.y.scale * e.y;
        return 1 === s && 1 === a || (o += `scale(${s}, ${a})`), o || "none"
      }
      const as = (t, e) => t.depth - e.depth;
      class ls {
        constructor() {
          this.children = [], this.isDirty = !1
        }
        add(t) {
          Ge(this.children, t), this.isDirty = !0
        }
        remove(t) {
          qe(this.children, t), this.isDirty = !0
        }
        forEach(t) {
          this.isDirty && this.children.sort(as), this.isDirty = !1, this.children.forEach(t)
        }
      }
      const us = ["", "X", "Y", "Z"];
      let cs = 0;

      function hs({
        attachResizeListener: t,
        defaultParent: e,
        measureScroll: n,
        checkIsScrollRoot: o,
        resetTransform: r
      }) {
        return class {
          constructor(t, n = {}, o = (null == e ? void 0 : e())) {
            this.id = cs++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isTransformDirty = !1, this.isProjectionDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = {
              x: 1,
              y: 1
            }, this.eventHandlers = new Map, this.potentialNodes = new Map, this.checkUpdateFailed = () => {
              this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
            }, this.updateProjection = () => {
              this.nodes.forEach(fs), this.nodes.forEach(xs), this.nodes.forEach(ws)
            }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.elementId = t, this.latestValues = n, this.root = o ? o.root || o : this, this.path = o ? [...o.path, o] : [], this.parent = o, this.depth = o ? o.depth + 1 : 0, t && this.root.registerPotentialNode(t, this);
            for (let t = 0; t < this.path.length; t++) this.path[t].shouldResetTransform = !0;
            this.root === this && (this.nodes = new ls)
          }
          addEventListener(t, e) {
            return this.eventHandlers.has(t) || this.eventHandlers.set(t, new Ze), this.eventHandlers.get(t).add(e)
          }
          notifyListeners(t, ...e) {
            const n = this.eventHandlers.get(t);
            null == n || n.notify(...e)
          }
          hasListeners(t) {
            return this.eventHandlers.has(t)
          }
          registerPotentialNode(t, e) {
            this.potentialNodes.set(t, e)
          }
          mount(e, n = !1) {
            var o;
            if (this.instance) return;
            this.isSVG = e instanceof SVGElement && "svg" !== e.tagName, this.instance = e;
            const {
              layoutId: r,
              layout: i,
              visualElement: s
            } = this.options;
            if (s && !s.current && s.mount(e), this.root.nodes.add(this), null === (o = this.parent) || void 0 === o || o.children.add(this), this.elementId && this.root.potentialNodes.delete(this.elementId), n && (i || r) && (this.isLayoutDirty = !0), t) {
              let n;
              const o = () => this.root.updateBlockedByResize = !1;
              t(e, (() => {
                this.root.updateBlockedByResize = !0, n && n(), n = zo(o, 250), E.hasAnimatedSinceResize && (E.hasAnimatedSinceResize = !1, this.nodes.forEach(ys))
              }))
            }
            r && this.root.registerSharedNode(r, this), !1 !== this.options.animate && s && (r || i) && this.addEventListener("didUpdate", (({
              delta: t,
              hasLayoutChanged: e,
              hasRelativeTargetChanged: n,
              layout: o
            }) => {
              var r, i, a, l, u;
              if (this.isTreeAnimationBlocked()) return this.target = void 0, void(this.relativeTarget = void 0);
              const c = null !== (i = null !== (r = this.options.transition) && void 0 !== r ? r : s.getDefaultTransition()) && void 0 !== i ? i : As,
                {
                  onLayoutAnimationStart: h,
                  onLayoutAnimationComplete: d
                } = s.getProps(),
                p = !this.targetLayout || !os(this.targetLayout, o) || n,
                f = !e && n;
              if ((null === (a = this.resumeFrom) || void 0 === a ? void 0 : a.instance) || f || e && (p || !this.currentAnimation)) {
                this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(t, f);
                const e = {
                  ...Jo(c, "layout"),
                  onPlay: h,
                  onComplete: d
                };
                s.shouldReduceMotion && (e.delay = 0, e.type = !1), this.startAnimation(e)
              } else e || 0 !== this.animationProgress || ys(this), this.isLead() && (null === (u = (l = this.options).onExitComplete) || void 0 === u || u.call(l));
              this.targetLayout = o
            }))
          }
          unmount() {
            var t, e;
            this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this), null === (t = this.getStack()) || void 0 === t || t.remove(this), null === (e = this.parent) || void 0 === e || e.children.delete(this), this.instance = void 0, We.preRender(this.updateProjection)
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
            this.isUpdateBlocked() || (this.isUpdating = !0, null === (t = this.nodes) || void 0 === t || t.forEach(bs), this.animationId++)
          }
          willUpdate(t = !0) {
            var e, n, o;
            if (this.root.isUpdateBlocked()) return void(null === (n = (e = this.options).onExitComplete) || void 0 === n || n.call(e));
            if (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
            this.isLayoutDirty = !0;
            for (let t = 0; t < this.path.length; t++) {
              const e = this.path[t];
              e.shouldResetTransform = !0, e.updateScroll("snapshot")
            }
            const {
              layoutId: r,
              layout: i
            } = this.options;
            if (void 0 === r && !i) return;
            const s = null === (o = this.options.visualElement) || void 0 === o ? void 0 : o.getProps().transformTemplate;
            this.prevTransformTemplateValue = null == s ? void 0 : s(this.latestValues, ""), this.updateSnapshot(), t && this.notifyListeners("willUpdate")
          }
          didUpdate() {
            if (this.isUpdateBlocked()) return this.unblockUpdate(), this.clearAllSnapshots(), void this.nodes.forEach(gs);
            this.isUpdating && (this.isUpdating = !1, this.potentialNodes.size && (this.potentialNodes.forEach(Vs), this.potentialNodes.clear()), this.nodes.forEach(vs), this.nodes.forEach(ds), this.nodes.forEach(ps), this.clearAllSnapshots(), He.update(), He.preRender(), He.render())
          }
          clearAllSnapshots() {
            this.nodes.forEach(ms), this.sharedNodes.forEach(Es)
          }
          scheduleUpdateProjection() {
            $e.preRender(this.updateProjection, !1, !0)
          }
          scheduleCheckAfterUnmount() {
            $e.postRender((() => {
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
            this.layout = this.measure(!1), this.layoutCorrected = Or(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox), null === (t = this.options.visualElement) || void 0 === t || t.notify("LayoutMeasure", this.layout.layoutBox, null == e ? void 0 : e.layoutBox)
          }
          updateScroll(t = "measure") {
            let e = Boolean(this.options.layoutScroll && this.instance);
            this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === t && (e = !1), e && (this.scroll = {
              animationId: this.root.animationId,
              phase: t,
              isRoot: o(this.instance),
              offset: n(this.instance)
            })
          }
          resetTransform() {
            var t;
            if (!r) return;
            const e = this.isLayoutDirty || this.shouldResetTransform,
              n = this.projectionDelta && !ns(this.projectionDelta),
              o = null === (t = this.options.visualElement) || void 0 === t ? void 0 : t.getProps().transformTemplate,
              i = null == o ? void 0 : o(this.latestValues, ""),
              s = i !== this.prevTransformTemplateValue;
            e && (n || zr(this.latestValues) || s) && (r(this.instance, i), this.shouldResetTransform = !1, this.scheduleRender())
          }
          measure(t = !0) {
            const e = this.measurePageBox();
            let n = this.removeElementScroll(e);
            var o;
            return t && (n = this.removeTransform(n)), Cs((o = n).x), Cs(o.y), {
              animationId: this.root.animationId,
              measuredBox: e,
              layoutBox: n,
              latestValues: {},
              source: this.id
            }
          }
          measurePageBox() {
            const {
              visualElement: t
            } = this.options;
            if (!t) return Or();
            const e = t.measureViewportBox(),
              {
                scroll: n
              } = this.root;
            return n && (qr(e.x, n.offset.x), qr(e.y, n.offset.y)), e
          }
          removeElementScroll(t) {
            const e = Or();
            qi(e, t);
            for (let n = 0; n < this.path.length; n++) {
              const o = this.path[n],
                {
                  scroll: r,
                  options: i
                } = o;
              if (o !== this.root && r && i.layoutScroll) {
                if (r.isRoot) {
                  qi(e, t);
                  const {
                    scroll: n
                  } = this.root;
                  n && (qr(e.x, -n.offset.x), qr(e.y, -n.offset.y))
                }
                qr(e.x, r.offset.x), qr(e.y, r.offset.y)
              }
            }
            return e
          }
          applyTransform(t, e = !1) {
            const n = Or();
            qi(n, t);
            for (let t = 0; t < this.path.length; t++) {
              const o = this.path[t];
              !e && o.options.layoutScroll && o.scroll && o !== o.root && Qr(n, {
                x: -o.scroll.offset.x,
                y: -o.scroll.offset.y
              }), zr(o.latestValues) && Qr(n, o.latestValues)
            }
            return zr(this.latestValues) && Qr(n, this.latestValues), n
          }
          removeTransform(t) {
            var e;
            const n = Or();
            qi(n, t);
            for (let t = 0; t < this.path.length; t++) {
              const o = this.path[t];
              if (!o.instance) continue;
              if (!zr(o.latestValues)) continue;
              Nr(o.latestValues) && o.updateSnapshot();
              const r = Or();
              qi(r, o.measurePageBox()), ts(n, o.latestValues, null === (e = o.snapshot) || void 0 === e ? void 0 : e.layoutBox, r)
            }
            return zr(this.latestValues) && ts(n, this.latestValues), n
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
              layout: n,
              layoutId: o
            } = this.options;
            if (this.layout && (n || o)) {
              if (!this.targetDelta && !this.relativeTarget) {
                const t = this.getClosestProjectingParent();
                t && t.layout ? (this.relativeParent = t, this.relativeTarget = Or(), this.relativeTargetOrigin = Or(), Mr(this.relativeTargetOrigin, this.layout.layoutBox, t.layout.layoutBox), qi(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
              }
              var r, i, s;
              if ((this.relativeTarget || this.targetDelta) && (this.target || (this.target = Or(), this.targetWithTransforms = Or()), this.relativeTarget && this.relativeTargetOrigin && (null === (t = this.relativeParent) || void 0 === t ? void 0 : t.target) ? (r = this.target, i = this.relativeTarget, s = this.relativeParent.target, Vr(r.x, i.x, s.x), Vr(r.y, i.y, s.y)) : this.targetDelta ? (Boolean(this.resumingFrom) ? this.target = this.applyTransform(this.layout.layoutBox) : qi(this.target, this.layout.layoutBox), _r(this.target, this.targetDelta)) : qi(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget)) {
                this.attemptToResolveRelativeTarget = !1;
                const t = this.getClosestProjectingParent();
                t && Boolean(t.resumingFrom) === Boolean(this.resumingFrom) && !t.options.layoutScroll && t.target ? (this.relativeParent = t, this.relativeTarget = Or(), this.relativeTargetOrigin = Or(), Mr(this.relativeTargetOrigin, this.target, t.target), qi(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
              }
            }
          }
          getClosestProjectingParent() {
            if (this.parent && !Nr(this.parent.latestValues) && !$r(this.parent.latestValues)) return (this.parent.relativeTarget || this.parent.targetDelta) && this.parent.layout ? this.parent : this.parent.getClosestProjectingParent()
          }
          calcProjection() {
            var t;
            const {
              isProjectionDirty: e,
              isTransformDirty: n
            } = this;
            this.isProjectionDirty = this.isTransformDirty = !1;
            const o = this.getLead(),
              r = Boolean(this.resumingFrom) || this !== o;
            let i = !0;
            if (e && (i = !1), r && n && (i = !1), i) return;
            const {
              layout: s,
              layoutId: a
            } = this.options;
            if (this.isTreeAnimating = Boolean((null === (t = this.parent) || void 0 === t ? void 0 : t.isTreeAnimating) || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !s && !a) return;
            qi(this.layoutCorrected, this.layout.layoutBox),
              function(t, e, n, o = !1) {
                var r, i;
                const s = n.length;
                if (!s) return;
                let a, l;
                e.x = e.y = 1;
                for (let u = 0; u < s; u++) a = n[u], l = a.projectionDelta, "contents" !== (null === (i = null === (r = a.instance) || void 0 === r ? void 0 : r.style) || void 0 === i ? void 0 : i.display) && (o && a.options.layoutScroll && a.scroll && a !== a.root && Qr(t, {
                  x: -a.scroll.offset.x,
                  y: -a.scroll.offset.y
                }), l && (e.x *= l.x.scale, e.y *= l.y.scale, _r(t, l)), o && zr(a.latestValues) && Qr(t, a.latestValues));
                e.x = Gr(e.x), e.y = Gr(e.y)
              }(this.layoutCorrected, this.treeScale, this.path, r);
            const {
              target: l
            } = o;
            if (!l) return;
            this.projectionDelta || (this.projectionDelta = Ir(), this.projectionDeltaWithTransform = Ir());
            const u = this.treeScale.x,
              c = this.treeScale.y,
              h = this.projectionTransform;
            Ar(this.projectionDelta, this.layoutCorrected, l, this.latestValues), this.projectionTransform = ss(this.projectionDelta, this.treeScale), this.projectionTransform === h && this.treeScale.x === u && this.treeScale.y === c || (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", l))
          }
          hide() {
            this.isVisible = !1
          }
          show() {
            this.isVisible = !0
          }
          scheduleRender(t = !0) {
            var e, n, o;
            null === (n = (e = this.options).scheduleRender) || void 0 === n || n.call(e), t && (null === (o = this.getStack()) || void 0 === o || o.scheduleRender()), this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
          }
          setAnimationOrigin(t, e = !1) {
            var n, o;
            const r = this.snapshot,
              i = (null == r ? void 0 : r.latestValues) || {},
              s = {
                ...this.latestValues
              },
              a = Ir();
            this.relativeTarget = this.relativeTargetOrigin = void 0, this.attemptToResolveRelativeTarget = !e;
            const l = Or(),
              u = (null == r ? void 0 : r.source) !== (null === (n = this.layout) || void 0 === n ? void 0 : n.source),
              c = ((null === (o = this.getStack()) || void 0 === o ? void 0 : o.members.length) || 0) <= 1,
              h = Boolean(u && !c && !0 === this.options.crossfade && !this.path.some(Ts));
            this.animationProgress = 0, this.mixTargetDelta = e => {
              var n;
              const o = e / 1e3;
              var r, d, p, f;
              Ss(a.x, t.x, o), Ss(a.y, t.y, o), this.setTargetDelta(a), this.relativeTarget && this.relativeTargetOrigin && this.layout && (null === (n = this.relativeParent) || void 0 === n ? void 0 : n.layout) && (Mr(l, this.layout.layoutBox, this.relativeParent.layout.layoutBox), r = this.relativeTarget, d = this.relativeTargetOrigin, p = l, f = o, Ps(r.x, d.x, p.x, f), Ps(r.y, d.y, p.y, f)), u && (this.animationValues = s, function(t, e, n, o, r, i) {
                r ? (t.opacity = Gn(0, void 0 !== n.opacity ? n.opacity : 1, Yi(o)), t.opacityExit = Gn(void 0 !== e.opacity ? e.opacity : 1, 0, Xi(o))) : i && (t.opacity = Gn(void 0 !== e.opacity ? e.opacity : 1, void 0 !== n.opacity ? n.opacity : 1, o));
                for (let r = 0; r < zi; r++) {
                  const i = `border${Ni[r]}Radius`;
                  let s = Hi(e, i),
                    a = Hi(n, i);
                  void 0 === s && void 0 === a || (s || (s = 0), a || (a = 0), 0 === s || 0 === a || Wi(s) === Wi(a) ? (t[i] = Math.max(Gn($i(s), $i(a), o), 0), (et.test(a) || et.test(s)) && (t[i] += "%")) : t[i] = a)
                }(e.rotate || n.rotate) && (t.rotate = Gn(e.rotate || 0, n.rotate || 0, o))
              }(s, i, this.latestValues, o, h, c)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = o
            }, this.mixTargetDelta(0)
          }
          startAnimation(t) {
            var e, n;
            this.notifyListeners("animationStart"), null === (e = this.currentAnimation) || void 0 === e || e.stop(), this.resumingFrom && (null === (n = this.resumingFrom.currentAnimation) || void 0 === n || n.stop()), this.pendingAnimation && (We.update(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = $e.update((() => {
              E.hasAnimatedSinceResize = !0, this.currentAnimation = Ui(0, 1e3, {
                ...t,
                onUpdate: e => {
                  var n;
                  this.mixTargetDelta(e), null === (n = t.onUpdate) || void 0 === n || n.call(t, e)
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
              target: n,
              layout: o,
              latestValues: r
            } = t;
            if (e && n && o) {
              if (this !== t && this.layout && o && Ms(this.options.animationType, this.layout.layoutBox, o.layoutBox)) {
                n = this.target || Or();
                const e = Sr(this.layout.layoutBox.x);
                n.x.min = t.target.x.min, n.x.max = n.x.min + e;
                const o = Sr(this.layout.layoutBox.y);
                n.y.min = t.target.y.min, n.y.max = n.y.min + o
              }
              qi(e, n), Qr(e, r), Ar(this.projectionDeltaWithTransform, this.layoutCorrected, e, r)
            }
          }
          registerSharedNode(t, e) {
            var n, o, r;
            this.sharedNodes.has(t) || this.sharedNodes.set(t, new is), this.sharedNodes.get(t).add(e), e.promote({
              transition: null === (n = e.options.initialPromotionConfig) || void 0 === n ? void 0 : n.transition,
              preserveFollowOpacity: null === (r = null === (o = e.options.initialPromotionConfig) || void 0 === o ? void 0 : o.shouldPreserveFollowOpacity) || void 0 === r ? void 0 : r.call(o, e)
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
            preserveFollowOpacity: n
          } = {}) {
            const o = this.getStack();
            o && o.promote(this, n), t && (this.projectionDelta = void 0, this.needsReset = !0), e && this.setOptions({
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
              latestValues: n
            } = t;
            if ((n.rotate || n.rotateX || n.rotateY || n.rotateZ) && (e = !0), !e) return;
            const o = {};
            for (let e = 0; e < us.length; e++) {
              const r = "rotate" + us[e];
              n[r] && (o[r] = n[r], t.setStaticValue(r, 0))
            }
            null == t || t.render();
            for (const e in o) t.setStaticValue(e, o[e]);
            t.scheduleRender()
          }
          getProjectionStyles(t = {}) {
            var e, n, o;
            const r = {};
            if (!this.instance || this.isSVG) return r;
            if (!this.isVisible) return {
              visibility: "hidden"
            };
            r.visibility = "";
            const i = null === (e = this.options.visualElement) || void 0 === e ? void 0 : e.getProps().transformTemplate;
            if (this.needsReset) return this.needsReset = !1, r.opacity = "", r.pointerEvents = It(t.pointerEvents) || "", r.transform = i ? i(this.latestValues, "") : "none", r;
            const s = this.getLead();
            if (!this.projectionDelta || !this.layout || !s.target) {
              const e = {};
              return this.options.layoutId && (e.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1, e.pointerEvents = It(t.pointerEvents) || ""), this.hasProjected && !zr(this.latestValues) && (e.transform = i ? i({}, "") : "none", this.hasProjected = !1), e
            }
            const a = s.animationValues || s.latestValues;
            this.applyTransformsToTarget(), r.transform = ss(this.projectionDeltaWithTransform, this.treeScale, a), i && (r.transform = i(a, r.transform));
            const {
              x: l,
              y: u
            } = this.projectionDelta;
            r.transformOrigin = `${100*l.origin}% ${100*u.origin}% 0`, s.animationValues ? r.opacity = s === this ? null !== (o = null !== (n = a.opacity) && void 0 !== n ? n : this.latestValues.opacity) && void 0 !== o ? o : 1 : this.preserveOpacity ? this.latestValues.opacity : a.opacityExit : r.opacity = s === this ? void 0 !== a.opacity ? a.opacity : "" : void 0 !== a.opacityExit ? a.opacityExit : 0;
            for (const t in D) {
              if (void 0 === a[t]) continue;
              const {
                correct: e,
                applyTo: n
              } = D[t], o = e(a[t], s);
              if (n) {
                const t = n.length;
                for (let e = 0; e < t; e++) r[n[e]] = o
              } else r[t] = o
            }
            return this.options.layoutId && (r.pointerEvents = s === this ? It(t.pointerEvents) || "" : "none"), r
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
          }
          resetTree() {
            this.root.nodes.forEach((t => {
              var e;
              return null === (e = t.currentAnimation) || void 0 === e ? void 0 : e.stop()
            })), this.root.nodes.forEach(gs), this.root.sharedNodes.clear()
          }
        }
      }

      function ds(t) {
        t.updateLayout()
      }

      function ps(t) {
        var e, n, o;
        const r = (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) || t.snapshot;
        if (t.isLead() && t.layout && r && t.hasListeners("didUpdate")) {
          const {
            layoutBox: e,
            measuredBox: n
          } = t.layout, {
            animationType: o
          } = t.options, i = r.source !== t.layout.source;
          "size" === o ? Fr((t => {
            const n = i ? r.measuredBox[t] : r.layoutBox[t],
              o = Sr(n);
            n.min = e[t].min, n.max = n.min + o
          })) : Ms(o, r.layoutBox, e) && Fr((t => {
            const n = i ? r.measuredBox[t] : r.layoutBox[t],
              o = Sr(e[t]);
            n.max = n.min + o
          }));
          const s = Ir();
          Ar(s, e, r.layoutBox);
          const a = Ir();
          i ? Ar(a, t.applyTransform(n, !0), r.measuredBox) : Ar(a, e, r.layoutBox);
          const l = !ns(s);
          let u = !1;
          if (!t.resumeFrom) {
            const n = t.getClosestProjectingParent();
            if (n && !n.resumeFrom) {
              const {
                snapshot: t,
                layout: o
              } = n;
              if (t && o) {
                const n = Or();
                Mr(n, r.layoutBox, t.layoutBox);
                const i = Or();
                Mr(i, e, o.layoutBox), os(n, i) || (u = !0)
              }
            }
          }
          t.notifyListeners("didUpdate", {
            layout: e,
            snapshot: r,
            delta: a,
            layoutDelta: s,
            hasLayoutChanged: l,
            hasRelativeTargetChanged: u
          })
        } else t.isLead() && (null === (o = (n = t.options).onExitComplete) || void 0 === o || o.call(n));
        t.options.transition = void 0
      }

      function fs(t) {
        t.isProjectionDirty || (t.isProjectionDirty = Boolean(t.parent && t.parent.isProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = Boolean(t.parent && t.parent.isTransformDirty))
      }

      function ms(t) {
        t.clearSnapshot()
      }

      function gs(t) {
        t.clearMeasurements()
      }

      function vs(t) {
        const {
          visualElement: e
        } = t.options;
        (null == e ? void 0 : e.getProps().onBeforeLayoutMeasure) && e.notify("BeforeLayoutMeasure"), t.resetTransform()
      }

      function ys(t) {
        t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0
      }

      function xs(t) {
        t.resolveTargetDelta()
      }

      function ws(t) {
        t.calcProjection()
      }

      function bs(t) {
        t.resetRotation()
      }

      function Es(t) {
        t.removeLeadSnapshot()
      }

      function Ss(t, e, n) {
        t.translate = Gn(e.translate, 0, n), t.scale = Gn(e.scale, 1, n), t.origin = e.origin, t.originPoint = e.originPoint
      }

      function Ps(t, e, n, o) {
        t.min = Gn(e.min, n.min, o), t.max = Gn(e.max, n.max, o)
      }

      function Ts(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit
      }
      const As = {
        duration: .45,
        ease: [.4, 0, .1, 1]
      };

      function Vs(t, e) {
        let n = t.root;
        for (let e = t.path.length - 1; e >= 0; e--)
          if (Boolean(t.path[e].instance)) {
            n = t.path[e];
            break
          } const o = (n && n !== t.root ? n.instance : document).querySelector(`[data-projection-id="${e}"]`);
        o && t.mount(o, !0)
      }

      function Cs(t) {
        t.min = Math.round(t.min), t.max = Math.round(t.max)
      }

      function Ms(t, e, n) {
        return "position" === t || "preserve-aspect" === t && !Pr(rs(e), rs(n), .2)
      }
      const Ls = hs({
          attachResizeListener: (t, e) => $t(t, "resize", e),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop
          }),
          checkIsScrollRoot: () => !0
        }),
        ks = {
          current: void 0
        },
        Rs = hs({
          measureScroll: t => ({
            x: t.scrollLeft,
            y: t.scrollTop
          }),
          defaultParent: () => {
            if (!ks.current) {
              const t = new Ls(0, {});
              t.mount(window), t.setOptions({
                layoutScroll: !0
              }), ks.current = t
            }
            return ks.current
          },
          resetTransform: (t, e) => {
            t.style.transform = void 0 !== e ? e : "none"
          },
          checkIsScrollRoot: t => Boolean("fixed" === window.getComputedStyle(t).position)
        }),
        Ds = {
          ...pr,
          ...Ve,
          ...ri,
          ...ji
        },
        Bs = L(((t, e) => Nt(t, e, Ds, ki, Rs)));

      function Is(t) {
        return C(Nt(t, {
          forwardMotionProps: !1
        }, Ds, ki, Rs))
      }
      const Os = L(Nt);

      function Fs() {
        const t = (0, o.useRef)(!1);
        return u((() => (t.current = !0, () => {
          t.current = !1
        })), []), t
      }

      function js() {
        const t = Fs(),
          [e, n] = (0, o.useState)(0),
          r = (0, o.useCallback)((() => {
            t.current && n(e + 1)
          }), [e]);
        return [(0, o.useCallback)((() => $e.postRender(r)), [r]), e]
      }
      class Us extends o.Component {
        getSnapshotBeforeUpdate(t) {
          const e = this.props.childRef.current;
          if (e && t.isPresent && !this.props.isPresent) {
            const t = this.props.sizeRef.current;
            t.height = e.offsetHeight || 0, t.width = e.offsetWidth || 0, t.top = e.offsetTop, t.left = e.offsetLeft
          }
          return null
        }
        componentDidUpdate() {}
        render() {
          return this.props.children
        }
      }

      function Ns({
        children: t,
        isPresent: e
      }) {
        const n = (0, o.useId)(),
          r = (0, o.useRef)(null),
          i = (0, o.useRef)({
            width: 0,
            height: 0,
            top: 0,
            left: 0
          });
        return (0, o.useInsertionEffect)((() => {
          const {
            width: t,
            height: o,
            top: s,
            left: a
          } = i.current;
          if (e || !r.current || !t || !o) return;
          r.current.dataset.motionPopId = n;
          const l = document.createElement("style");
          return document.head.appendChild(l), l.sheet && l.sheet.insertRule(`\n          [data-motion-pop-id="${n}"] {\n            position: absolute !important;\n            width: ${t}px !important;\n            height: ${o}px !important;\n            top: ${s}px !important;\n            left: ${a}px !important;\n          }\n        `), () => {
            document.head.removeChild(l)
          }
        }), [e]), o.createElement(Us, {
          isPresent: e,
          childRef: r,
          sizeRef: i
        }, o.cloneElement(t, {
          ref: r
        }))
      }
      const zs = ({
        children: t,
        initial: e,
        isPresent: n,
        onExitComplete: r,
        custom: i,
        presenceAffectsLayout: s,
        mode: l
      }) => {
        const u = b($s),
          c = (0, o.useId)(),
          h = (0, o.useMemo)((() => ({
            id: c,
            initial: e,
            isPresent: n,
            custom: i,
            onExitComplete: t => {
              u.set(t, !0);
              for (const t of u.values())
                if (!t) return;
              r && r()
            },
            register: t => (u.set(t, !1), () => u.delete(t))
          })), s ? void 0 : [n]);
        return (0, o.useMemo)((() => {
          u.forEach(((t, e) => u.set(e, !1)))
        }), [n]), o.useEffect((() => {
          !n && !u.size && r && r()
        }), [n]), "popLayout" === l && (t = o.createElement(Ns, {
          isPresent: n
        }, t)), o.createElement(a.Provider, {
          value: h
        }, t)
      };

      function $s() {
        return new Map
      }
      const Ws = t => t.key || "",
        Hs = ({
          children: t,
          custom: e,
          initial: n = !0,
          onExitComplete: r,
          exitBeforeEnter: i,
          presenceAffectsLayout: s = !0,
          mode: a = "sync"
        }) => {
          i && (a = "wait", ye(!1, "Replace exitBeforeEnter with mode='wait'"));
          let [l] = js();
          const c = (0, o.useContext)(P).forceRender;
          c && (l = c);
          const h = Fs(),
            d = function(t) {
              const e = [];
              return o.Children.forEach(t, (t => {
                (0, o.isValidElement)(t) && e.push(t)
              })), e
            }(t);
          let p = d;
          const f = new Set,
            m = (0, o.useRef)(p),
            g = (0, o.useRef)(new Map).current,
            v = (0, o.useRef)(!0);
          if (u((() => {
              v.current = !1,
                function(t, e) {
                  t.forEach((t => {
                    const n = Ws(t);
                    e.set(n, t)
                  }))
                }(d, g), m.current = p
            })), de((() => {
              v.current = !0, g.clear(), f.clear()
            })), v.current) return o.createElement(o.Fragment, null, p.map((t => o.createElement(zs, {
            key: Ws(t),
            isPresent: !0,
            initial: !!n && void 0,
            presenceAffectsLayout: s,
            mode: a
          }, t))));
          p = [...p];
          const y = m.current.map(Ws),
            x = d.map(Ws),
            w = y.length;
          for (let t = 0; t < w; t++) {
            const e = y[t]; - 1 === x.indexOf(e) && f.add(e)
          }
          return "wait" === a && f.size && (p = []), f.forEach((t => {
            if (-1 !== x.indexOf(t)) return;
            const n = g.get(t);
            if (!n) return;
            const i = y.indexOf(t);
            p.splice(i, 0, o.createElement(zs, {
              key: Ws(n),
              isPresent: !1,
              onExitComplete: () => {
                g.delete(t), f.delete(t);
                const e = m.current.findIndex((e => e.key === t));
                if (m.current.splice(e, 1), !f.size) {
                  if (m.current = d, !1 === h.current) return;
                  l(), r && r()
                }
              },
              custom: e,
              presenceAffectsLayout: s,
              mode: a
            }, n))
          })), p = p.map((t => {
            const e = t.key;
            return f.has(e) ? t : o.createElement(zs, {
              key: Ws(t),
              isPresent: !0,
              presenceAffectsLayout: s,
              mode: a
            }, t)
          })), "production" !== ge && "wait" === a && p.length > 1 && console.warn('You\'re attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.'), o.createElement(o.Fragment, null, f.size ? p : p.map((t => (0, o.cloneElement)(t))))
        },
        Ys = (0, o.createContext)(null),
        Xs = t => !t.isLayoutDirty && t.willUpdate(!1);

      function _s() {
        const t = new Set,
          e = new WeakMap,
          n = () => t.forEach(Xs);
        return {
          add: o => {
            t.add(o), e.set(o, o.addEventListener("willUpdate", n))
          },
          remove: o => {
            var r;
            t.delete(o), null === (r = e.get(o)) || void 0 === r || r(), e.delete(o), n()
          },
          dirty: n
        }
      }
      const Gs = t => !0 === t,
        qs = ({
          children: t,
          id: e,
          inheritId: n,
          inherit: r = !0
        }) => {
          void 0 !== n && (r = n);
          const i = (0, o.useContext)(P),
            s = (0, o.useContext)(Ys),
            [a, l] = js(),
            u = (0, o.useRef)(null),
            c = i.id || s;
          null === u.current && ((t => Gs(!0 === t) || "id" === t)(r) && c && (e = e ? c + "-" + e : c), u.current = {
            id: e,
            group: Gs(r) && i.group || _s()
          });
          const h = (0, o.useMemo)((() => ({
            ...u.current,
            forceRender: a
          })), [l]);
          return o.createElement(P.Provider, {
            value: h
          }, t)
        };
      let Zs = 0;
      const Ks = ({
        children: t
      }) => (o.useEffect((() => {
        Un(!1, "AnimateSharedLayout is deprecated: https://www.framer.com/docs/guide-upgrade/##shared-layout-animations")
      }), []), o.createElement(qs, {
        id: b((() => "asl-" + Zs++))
      }, t));

      function Js({
        children: t,
        isValidProp: e,
        ...n
      }) {
        e && mt(e), (n = {
          ...(0, o.useContext)(r),
          ...n
        }).isStatic = b((() => n.isStatic));
        const i = (0, o.useMemo)((() => n), [JSON.stringify(n.transition), n.transformPagePoint, n.reducedMotion]);
        return o.createElement(r.Provider, {
          value: i
        }, t)
      }

      function Qs({
        children: t,
        features: e,
        strict: n = !1
      }) {
        const [, r] = (0, o.useState)(!ta(e)), i = (0, o.useRef)(void 0);
        if (!ta(e)) {
          const {
            renderer: t,
            ...n
          } = e;
          i.current = t, w(n)
        }
        return (0, o.useEffect)((() => {
          ta(e) && e().then((({
            renderer: t,
            ...e
          }) => {
            w(e), i.current = t, r(!0)
          }))
        }), []), o.createElement(c.Provider, {
          value: {
            renderer: i.current,
            strict: n
          }
        }, t)
      }

      function ta(t) {
        return "function" == typeof t
      }
      const ea = (0, o.createContext)(null),
        na = (0, o.forwardRef)((function({
          children: t,
          as: e = "ul",
          axis: n = "y",
          onReorder: r,
          values: i,
          ...s
        }, a) {
          const l = b((() => Bs(e))),
            u = [],
            c = (0, o.useRef)(!1);
          Nn(Boolean(i), "Reorder.Group must be provided a values prop");
          const h = {
            axis: n,
            registerItem: (t, e) => {
              e && -1 === u.findIndex((e => t === e.value)) && (u.push({
                value: t,
                layout: e[n]
              }), u.sort(ra))
            },
            updateOrder: (t, e, n) => {
              if (c.current) return;
              const o = function(t, e, n, o) {
                if (!o) return t;
                const r = t.findIndex((t => t.value === e));
                if (-1 === r) return t;
                const i = o > 0 ? 1 : -1,
                  s = t[r + i];
                if (!s) return t;
                const a = t[r],
                  l = s.layout,
                  u = Gn(l.min, l.max, .5);
                return 1 === i && a.layout.max + n > u || -1 === i && a.layout.min + n < u ? function([...t], e, n) {
                  const o = e < 0 ? t.length + e : e;
                  if (o >= 0 && o < t.length) {
                    const o = n < 0 ? t.length + n : n,
                      [r] = t.splice(e, 1);
                    t.splice(o, 0, r)
                  }
                  return t
                }(t, r, r + i) : t
              }(u, t, e, n);
              u !== o && (c.current = !0, r(o.map(oa).filter((t => -1 !== i.indexOf(t)))))
            }
          };
          return (0, o.useEffect)((() => {
            c.current = !1
          })), o.createElement(l, {
            ...s,
            ref: a
          }, o.createElement(ea.Provider, {
            value: h
          }, t))
        }));

      function oa(t) {
        return t.value
      }

      function ra(t, e) {
        return t.layout.min - e.layout.min
      }

      function ia(t) {
        const e = b((() => Qe(t))),
          {
            isStatic: n
          } = (0, o.useContext)(r);
        if (n) {
          const [, n] = (0, o.useState)(t);
          (0, o.useEffect)((() => e.on("change", n)), [])
        }
        return e
      }
      const sa = t => (t => "object" == typeof t && t.mix)(t) ? t.mix : void 0;

      function aa(...t) {
        const e = !Array.isArray(t[0]),
          n = e ? 0 : -1,
          o = t[0 + n],
          r = t[1 + n],
          i = t[2 + n],
          s = t[3 + n],
          a = so(r, i, {
            mixer: sa(i[0]),
            ...s
          });
        return e ? a(o) : a
      }

      function la(t, e) {
        const n = ia(e()),
          o = () => n.set(e());
        return o(),
          function(t, e, n) {
            u((() => {
              const n = t.map((t => t.on("change", e)));
              return () => {
                n.forEach((t => t())), We.update(o)
              }
            }))
          }(t, (() => $e.update(o, !1, !0))), n
      }

      function ua(t, e, n, o) {
        const r = "function" == typeof e ? e : aa(e, n, o);
        return Array.isArray(t) ? ca(t, r) : ca([t], (([t]) => r(t)))
      }

      function ca(t, e) {
        const n = b((() => []));
        return la(t, (() => {
          n.length = 0;
          const o = t.length;
          for (let e = 0; e < o; e++) n[e] = t[e].get();
          return e(n)
        }))
      }

      function ha(t, e = 0) {
        return j(t) ? t : ia(e)
      }
      const da = (0, o.forwardRef)((function({
          children: t,
          style: e = {},
          value: n,
          as: r = "li",
          onDrag: i,
          layout: s = !0,
          ...a
        }, l) {
          const u = b((() => Bs(r))),
            c = (0, o.useContext)(ea),
            h = {
              x: ha(e.x),
              y: ha(e.y)
            },
            d = ua([h.x, h.y], (([t, e]) => t || e ? 1 : "unset")),
            p = (0, o.useRef)(null);
          Nn(Boolean(c), "Reorder.Item must be a child of Reorder.Group");
          const {
            axis: f,
            registerItem: m,
            updateOrder: g
          } = c;
          return (0, o.useEffect)((() => {
            m(n, p.current)
          }), [c]), o.createElement(u, {
            drag: f,
            ...a,
            dragSnapToOrigin: !0,
            style: {
              ...e,
              x: h.x,
              y: h.y,
              zIndex: d
            },
            layout: s,
            onDrag: (t, e) => {
              const {
                velocity: o
              } = e;
              o[f] && g(n, h[f].get(), o[f]), i && i(t, e)
            },
            onLayoutMeasure: t => {
              p.current = t
            },
            ref: l
          }, t)
        })),
        pa = {
          Group: na,
          Item: da
        },
        fa = {
          renderer: ki,
          ...pr,
          ...Ve
        },
        ma = {
          ...fa,
          ...ri,
          ...ji,
          projectionNodeConstructor: Rs
        };

      function ga(t, ...e) {
        const n = t.length;
        return la(e, (function() {
          let o = "";
          for (let r = 0; r < n; r++) o += t[r], e[r] && (o += e[r].get());
          return o
        }))
      }

      function va(t, e = {}) {
        const {
          isStatic: n
        } = (0, o.useContext)(r), i = (0, o.useRef)(null), s = ia(j(t) ? t.get() : t);
        return (0, o.useMemo)((() => s.attach(((t, o) => n ? o(t) : (i.current && i.current.stop(), i.current = Oo({
            keyframes: [s.get(), t],
            velocity: s.getVelocity(),
            type: "spring",
            ...e,
            onUpdate: o
          }), s.get())))), [JSON.stringify(e)]),
          function(t, e) {
            u((() => {
              if (j(t)) return e(t.get()), t.on("change", e)
            }), [t, e])
          }(t, (t => s.set(parseFloat(t)))), s
      }

      function ya(t) {
        const e = ia(t.getVelocity());
        return (0, o.useEffect)((() => t.on("velocityChange", (t => {
          e.set(t)
        }))), [t]), e
      }
      var xa = n(7672);

      function wa(t, e) {
        var n;
        return "string" == typeof t ? e ? (null !== (n = e[t]) && void 0 !== n || (e[t] = document.querySelectorAll(t)), t = e[t]) : t = document.querySelectorAll(t) : t instanceof Element && (t = [t]), Array.from(t || [])
      }
      const ba = new WeakMap;
      let Ea;

      function Sa(t) {
        let {
          target: e,
          contentRect: n,
          borderBoxSize: o
        } = t;
        var r;
        null === (r = ba.get(e)) || void 0 === r || r.forEach((t => {
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
              }(e, o)
            }
          })
        }))
      }

      function Pa(t) {
        t.forEach(Sa)
      }
      const Ta = new Set;
      let Aa;
      const Va = t => "function" == typeof t,
        Ca = (t, e, n) => e - t == 0 ? 1 : (n - t) / (e - t),
        Ma = 50,
        La = () => ({
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
        ka = {
          x: {
            length: "Width",
            position: "Left"
          },
          y: {
            length: "Height",
            position: "Top"
          }
        };

      function Ra(t, e, n, o) {
        const r = n[e],
          {
            length: i,
            position: s
          } = ka[e],
          a = r.current,
          l = n.time;
        r.current = t["scroll" + s], r.scrollLength = t["scroll" + i] - t["client" + i], r.offset.length = 0, r.offset[0] = 0, r.offset[1] = r.scrollLength, r.progress = Ca(0, r.scrollLength, r.current);
        const u = o - l;
        var c, h;
        r.velocity = u > Ma ? 0 : (c = r.current - a, (h = u) ? c * (1e3 / h) : 0)
      }
      const Da = t => t,
        Ba = (t, e, n) => -n * t + n * e + t;

      function Ia(t, e) {
        const n = t[t.length - 1];
        for (let o = 1; o <= e; o++) {
          const r = Ca(0, e, o);
          t.push(Ba(n, 1, r))
        }
      }

      function Oa(t) {
        const e = [0];
        return Ia(e, t - 1), e
      }
      const Fa = t => "number" == typeof t,
        ja = t => Array.isArray(t) && !Fa(t[0]),
        Ua = (t, e, n) => {
          const o = e - t;
          return ((n - t) % o + o) % o + t
        },
        Na = (t, e, n) => Math.min(Math.max(n, t), e);
      const za = {
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
        $a = t => "string" == typeof t,
        Wa = {
          start: 0,
          center: .5,
          end: 1
        };

      function Ha(t, e) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          o = 0;
        if (void 0 !== Wa[t] && (t = Wa[t]), $a(t)) {
          const e = parseFloat(t);
          t.endsWith("px") ? o = e : t.endsWith("%") ? t = e / 100 : t.endsWith("vw") ? o = e / 100 * document.documentElement.clientWidth : t.endsWith("vh") ? o = e / 100 * document.documentElement.clientHeight : t = e
        }
        return Fa(t) && (o = e * t), n + o
      }
      const Ya = [0, 0];

      function Xa(t, e, n, o) {
        let r = Array.isArray(t) ? t : Ya,
          i = 0,
          s = 0;
        return Fa(t) ? r = [t, t] : $a(t) && (r = (t = t.trim()).includes(" ") ? t.split(" ") : [t, Wa[t] ? t : "0"]), i = Ha(r[0], n, o), s = Ha(r[1], e), i - s
      }
      const _a = {
        x: 0,
        y: 0
      };

      function Ga(t, e, n) {
        let {
          offset: o = za.All
        } = n;
        const {
          target: r = t,
          axis: i = "y"
        } = n, s = "y" === i ? "height" : "width", a = r !== t ? function(t, e) {
          let n = {
              x: 0,
              y: 0
            },
            o = t;
          for (; o && o !== e;)
            if (o instanceof HTMLElement) n.x += o.offsetLeft, n.y += o.offsetTop, o = o.offsetParent;
            else if (o instanceof SVGGraphicsElement && "getBBox" in o) {
            const {
              top: t,
              left: e
            } = o.getBBox();
            for (n.x += e, n.y += t; o && "svg" !== o.tagName;) o = o.parentNode
          }
          return n
        }(r, t) : _a, l = r === t ? {
          width: t.scrollWidth,
          height: t.scrollHeight
        } : {
          width: r.clientWidth,
          height: r.clientHeight
        }, u = {
          width: t.clientWidth,
          height: t.clientHeight
        };
        e[i].offset.length = 0;
        let c = !e[i].interpolate;
        const h = o.length;
        for (let t = 0; t < h; t++) {
          const n = Xa(o[t], u[s], l[s], a[i]);
          c || n === e[i].interpolatorOffsets[t] || (c = !0), e[i].offset[t] = n
        }
        c && (e[i].interpolate = function(t) {
          let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Oa(t.length),
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Da;
          const o = t.length,
            r = o - e.length;
          return r > 0 && Ia(e, r), r => {
            let i = 0;
            for (; i < o - 2 && !(r < e[i + 1]); i++);
            let s = Na(0, 1, Ca(e[i], e[i + 1], r));
            const a = function(t, e) {
              return ja(t) ? t[Ua(0, t.length, e)] : t
            }(n, i);
            return s = a(s), Ba(t[i], t[i + 1], s)
          }
        }(Oa(h), e[i].offset), e[i].interpolatorOffsets = [...e[i].offset]), e[i].progress = e[i].interpolate(e[i].current)
      }
      const qa = new WeakMap,
        Za = new WeakMap,
        Ka = new WeakMap,
        Ja = t => t === document.documentElement ? window : t;

      function Qa(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        var {
          container: n = document.documentElement
        } = e, o = (0, xa.sX)(e, ["container"]);
        let r = Ka.get(n);
        r || (r = new Set, Ka.set(n, r));
        const i = La(),
          s = function(t, e, n) {
            let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            const r = o.axis || "y";
            return {
              measure: () => function(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t,
                  n = arguments.length > 2 ? arguments[2] : void 0;
                if (n.x.targetOffset = 0, n.y.targetOffset = 0, e !== t) {
                  let o = e;
                  for (; o && o != t;) n.x.targetOffset += o.offsetLeft, n.y.targetOffset += o.offsetTop, o = o.offsetParent
                }
                n.x.targetLength = e === t ? e.scrollWidth : e.clientWidth, n.y.targetLength = e === t ? e.scrollHeight : e.clientHeight, n.x.containerLength = t.clientWidth, n.y.containerLength = t.clientHeight
              }(t, o.target, n),
              update: e => {
                ! function(t, e, n) {
                  Ra(t, "x", e, n), Ra(t, "y", e, n), e.time = n
                }(t, n, e), (o.offset || o.target) && Ga(t, n, o)
              },
              notify: Va(e) ? () => e(n) : (i = e, s = n[r], i.pause(), i.forEachNative(((t, e) => {
                let {
                  easing: n
                } = e;
                var o, r;
                if (t.updateDuration) n || (t.easing = Da), t.updateDuration(1);
                else {
                  const e = {
                    duration: 1e3
                  };
                  n || (e.easing = "linear"), null === (r = null === (o = t.effect) || void 0 === o ? void 0 : o.updateTiming) || void 0 === r || r.call(o, e)
                }
              })), () => {
                i.currentTime = s.progress
              })
            };
            var i, s
          }(n, t, i, o);
        if (r.add(s), !qa.has(n)) {
          const t = () => {
            const t = performance.now();
            for (const t of r) t.measure();
            for (const e of r) e.update(t);
            for (const t of r) t.notify()
          };
          qa.set(n, t);
          const e = Ja(n);
          window.addEventListener("resize", t, {
            passive: !0
          }), n !== document.documentElement && Za.set(n, (u = t, Va(l = n) ? (a = l, Ta.add(a), Aa || (Aa = () => {
            const t = {
                width: window.innerWidth,
                height: window.innerHeight
              },
              e = {
                target: window,
                size: t,
                contentSize: t
              };
            Ta.forEach((t => t(e)))
          }, window.addEventListener("resize", Aa)), () => {
            Ta.delete(a), !Ta.size && Aa && (Aa = void 0)
          }) : function(t, e) {
            Ea || "undefined" != typeof ResizeObserver && (Ea = new ResizeObserver(Pa));
            const n = wa(t);
            return n.forEach((t => {
              let n = ba.get(t);
              n || (n = new Set, ba.set(t, n)), n.add(e), null == Ea || Ea.observe(t)
            })), () => {
              n.forEach((t => {
                const n = ba.get(t);
                null == n || n.delete(e), (null == n ? void 0 : n.size) || null == Ea || Ea.unobserve(t)
              }))
            }
          }(l, u))), e.addEventListener("scroll", t, {
            passive: !0
          })
        }
        var a, l, u;
        const c = qa.get(n),
          h = requestAnimationFrame(c);
        return () => {
          var e;
          "function" != typeof t && t.stop(), cancelAnimationFrame(h);
          const o = Ka.get(n);
          if (!o) return;
          if (o.delete(s), o.size) return;
          const r = qa.get(n);
          qa.delete(n), r && (Ja(n).removeEventListener("scroll", r), null === (e = Za.get(n)) || void 0 === e || e(), window.removeEventListener("resize", r))
        }
      }
      const tl = () => ({
        scrollX: Qe(0),
        scrollY: Qe(0),
        scrollXProgress: Qe(0),
        scrollYProgress: Qe(0)
      });

      function el({
        container: t,
        target: e,
        layoutEffect: n = !0,
        ...r
      } = {}) {
        const i = b(tl);
        return (n ? u : o.useEffect)((() => Qa((({
          x: t,
          y: e
        }) => {
          i.scrollX.set(t.current), i.scrollXProgress.set(t.progress), i.scrollY.set(e.current), i.scrollYProgress.set(e.progress)
        }), {
          ...r,
          container: (null == t ? void 0 : t.current) || void 0,
          target: (null == e ? void 0 : e.current) || void 0
        })), []), i
      }

      function nl(t) {
        return ye(!1, "useElementScroll is deprecated. Convert to useScroll({ container: ref })."), el({
          container: t
        })
      }

      function ol() {
        return ye(!1, "useViewportScroll is deprecated. Convert to useScroll()."), el()
      }

      function rl(t) {
        const e = (0, o.useRef)(0),
          {
            isStatic: n
          } = (0, o.useContext)(r);
        (0, o.useEffect)((() => {
          if (n) return;
          const o = ({
            timestamp: n,
            delta: o
          }) => {
            e.current || (e.current = n), t(n - e.current, o)
          };
          return $e.update(o, !0), () => We.update(o)
        }), [t])
      }

      function il() {
        const t = ia(0);
        return rl((e => t.set(e))), t
      }
      class sl extends Je {
        constructor() {
          super(...arguments), this.members = [], this.transforms = new Set
        }
        add(t) {
          let e;
          O.has(t) ? (this.transforms.add(t), e = "transform") : t.startsWith("origin") || $(t) || "willChange" === t || (e = Tt(t)), e && (Ge(this.members, e), this.update())
        }
        remove(t) {
          O.has(t) ? (this.transforms.delete(t), this.transforms.size || qe(this.members, "transform")) : qe(this.members, Tt(t)), this.update()
        }
        update() {
          this.set(this.members.length ? this.members.join(", ") : "auto")
        }
      }

      function al() {
        return b((() => new sl("auto")))
      }

      function ll(t, e, n) {
        u((() => t.on(e, n)), [t, e, n])
      }

      function ul() {
        !wi.current && bi();
        const [t] = (0, o.useState)(xi.current);
        return t
      }

      function cl() {
        const t = ul(),
          {
            reducedMotion: e
          } = (0, o.useContext)(r);
        return "never" !== e && ("always" === e || t)
      }

      function hl() {
        let t = !1;
        const e = [],
          n = new Set,
          o = {
            subscribe: t => (n.add(t), () => {
              n.delete(t)
            }),
            start(o, r) {
              if (t) {
                const t = [];
                return n.forEach((e => {
                  t.push(rr(e, o, {
                    transitionOverride: r
                  }))
                })), Promise.all(t)
              }
              return new Promise((t => {
                e.push({
                  animation: [o, r],
                  resolve: t
                })
              }))
            },
            set: e => (Nn(t, "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."), n.forEach((t => {
              ! function(t, e) {
                Array.isArray(e) ? Ln(t, e) : "string" == typeof e ? Ln(t, [e]) : Mn(t, e)
              }(t, e)
            }))),
            stop() {
              n.forEach((t => {
                ! function(t) {
                  t.values.forEach((t => t.stop()))
                }(t)
              }))
            },
            mount: () => (t = !0, e.forEach((({
              animation: t,
              resolve: e
            }) => {
              o.start(...t).then(e)
            })), () => {
              t = !1, o.stop()
            })
          };
        return o
      }

      function dl() {
        const t = b(hl);
        return (0, o.useEffect)(t.mount, []), t
      }
      const pl = dl,
        fl = (t, e, n) => {
          const o = e - t;
          return ((n - t) % o + o) % o + t
        };

      function ml(...t) {
        const e = (0, o.useRef)(0),
          [n, r] = (0, o.useState)(t[e.current]);
        return [n, (0, o.useCallback)((n => {
          e.current = "number" != typeof n ? fl(0, t.length, e.current + 1) : n, r(t[e.current])
        }), [t.length, ...t])]
      }
      const gl = {
        any: 0,
        all: 1
      };

      function vl(t, {
        root: e,
        margin: n,
        amount: r,
        once: i = !1
      } = {}) {
        const [s, a] = (0, o.useState)(!1);
        return (0, o.useEffect)((() => {
          if (!t.current || i && s) return;
          const o = {
            root: e && e.current || void 0,
            margin: n,
            amount: "some" === r ? "any" : r
          };
          return function(t, e) {
            let {
              root: n,
              margin: o,
              amount: r = "any"
            } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            if ("undefined" == typeof IntersectionObserver) return () => {};
            const i = wa(t),
              s = new WeakMap,
              a = new IntersectionObserver((t => {
                t.forEach((t => {
                  const n = s.get(t.target);
                  if (t.isIntersecting !== Boolean(n))
                    if (t.isIntersecting) {
                      const n = e(t);
                      Va(n) ? s.set(t.target, n) : a.unobserve(t.target)
                    } else n && (n(t), s.delete(t.target))
                }))
              }), {
                root: n,
                rootMargin: o,
                threshold: "number" == typeof r ? r : gl[r]
              });
            return i.forEach((t => a.observe(t))), () => a.disconnect()
          }(t.current, (() => (a(!0), i ? void 0 : () => a(!1))), o)
        }), [e, t, n, i]), s
      }
      class yl {
        constructor() {
          this.componentControls = new Set
        }
        subscribe(t) {
          return this.componentControls.add(t), () => this.componentControls.delete(t)
        }
        start(t, e) {
          this.componentControls.forEach((n => {
            n.start(t.nativeEvent || t, e)
          }))
        }
      }
      const xl = () => new yl;

      function wl() {
        return b(xl)
      }

      function bl(t) {
        return null !== t && "object" == typeof t && V in t
      }

      function El(t) {
        if (bl(t)) return t[V]
      }

      function Sl() {
        return Pl
      }

      function Pl(t) {
        ks.current && (ks.current.isUpdating = !1, ks.current.blockUpdate(), t && t())
      }

      function Tl() {
        const [t, e] = js(), n = Sl();
        return (0, o.useEffect)((() => {
          $e.postRender((() => $e.postRender((() => $n.current = !1))))
        }), [e]), e => {
          n((() => {
            $n.current = !0, t(), e()
          }))
        }
      }

      function Al() {
        return o.useCallback((() => {
          const t = ks.current;
          t && t.resetTree()
        }), [])
      }

      function Vl(t, e, n, o) {
        window.MotionAppearAnimations || (window.MotionAppearAnimations = new Map);
        const r = t.dataset[Fn],
          i = No(t, e, n, o);
        return r && i && window.MotionAppearAnimations.set(In(r, e), i), i
      }
      const Cl = () => ({});
      class Ml extends Ti {
        build() {}
        measureInstanceViewportBox() {
          return Or()
        }
        resetTransform() {}
        restoreTransform() {}
        removeValueFromRenderState() {}
        renderInstance() {}
        scrapeMotionValuesFromProps() {
          return {}
        }
        getBaseTargetFromProps() {}
        readValueFromInstance(t, e, n) {
          return n.initialState[e] || 0
        }
        sortInstanceNodePosition() {
          return 0
        }
        makeTargetAnimatableFromInstance({
          transition: t,
          transitionEnd: e,
          ...n
        }) {
          return kn(this, n, Dn(n, t || {}, this)), {
            transition: t,
            transitionEnd: e,
            ...n
          }
        }
      }
      const Ll = Ot({
        scrapeMotionValuesFromProps: Cl,
        createRenderState: Cl
      });

      function kl(t) {
        const [e, n] = (0, o.useState)(t), r = Ll({}, !1), i = b((() => new Ml({
          props: {},
          visualState: r
        }, {
          initialState: t
        })));
        return (0, o.useEffect)((() => (i.mount({}), () => i.unmount())), [i]), (0, o.useEffect)((() => {
          i.setProps({
            onUpdate: t => {
              n({
                ...t
              })
            }
          })
        }), [n, i]), [e, b((() => t => rr(i, t)))]
      }
      const Rl = t => t > .001 ? 1 / t : 1e5;
      let Dl = !1;

      function Bl(t) {
        let e = ia(1),
          n = ia(1);
        const o = s();
        return Nn(!(!t && !o), "If no scale values are provided, useInvertedScale must be used within a child of another motion component."), Un(Dl, "useInvertedScale is deprecated and will be removed in 3.0. Use the layout prop instead."), Dl = !0, t ? (e = t.scaleX || e, n = t.scaleY || n) : o && (e = o.getValue("scaleX", 1), n = o.getValue("scaleY", 1)), {
          scaleX: ua(e, Rl),
          scaleY: ua(n, Rl)
        }
      }
    },
    7672: (t, e, n) => {
      "use strict";
      n.d(e, {
        C3: () => i,
        Mt: () => a,
        ct: () => r,
        sX: () => s
      });
      var o = function(t, e) {
        return o = Object.setPrototypeOf || {
          __proto__: []
        }
        instanceof Array && function(t, e) {
          t.__proto__ = e
        } || function(t, e) {
          for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
        }, o(t, e)
      };

      function r(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

        function n() {
          this.constructor = t
        }
        o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
      }
      var i = function() {
        return i = Object.assign || function(t) {
          for (var e, n = 1, o = arguments.length; n < o; n++)
            for (var r in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
          return t
        }, i.apply(this, arguments)
      };

      function s(t, e) {
        var n = {};
        for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && e.indexOf(o) < 0 && (n[o] = t[o]);
        if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
          var r = 0;
          for (o = Object.getOwnPropertySymbols(t); r < o.length; r++) e.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(t, o[r]) && (n[o[r]] = t[o[r]])
        }
        return n
      }

      function a(t, e, n) {
        if (n || 2 === arguments.length)
          for (var o, r = 0, i = e.length; r < i; r++) !o && r in e || (o || (o = Array.prototype.slice.call(e, 0, r)), o[r] = e[r]);
        return t.concat(o || Array.prototype.slice.call(e))
      }
      Object.create, Object.create, "function" == typeof SuppressedError && SuppressedError
    }
  }
]);
//# sourceMappingURL=68e72ba54f6f49c09d71e4ef57697adf.js.map