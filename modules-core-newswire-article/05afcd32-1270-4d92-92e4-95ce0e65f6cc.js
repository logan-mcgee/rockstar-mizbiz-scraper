! function() {
  try {
    var t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      e = (new Error).stack;
    e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "05afcd32-1270-4d92-92e4-95ce0e65f6cc", t._sentryDebugIdIdentifier = "sentry-dbid-05afcd32-1270-4d92-92e4-95ce0e65f6cc")
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
  [584], {
    97064: (t, e, n) => {
      "use strict";
      n.d(e, {
        O: () => o,
        s: () => i
      });
      var i = function() {},
        o = function() {}
    },
    44392: t => {
      var e, n, i = t.exports = {};

      function o() {
        throw new Error("setTimeout has not been defined")
      }

      function s() {
        throw new Error("clearTimeout has not been defined")
      }

      function r(t) {
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
          n = "function" == typeof clearTimeout ? clearTimeout : s
        } catch (t) {
          n = s
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
          var t = r(h);
          u = !0;
          for (var e = l.length; e;) {
            for (a = l, l = []; ++c < e;) a && a[c].run();
            c = -1, e = l.length
          }
          a = null, u = !1,
            function(t) {
              if (n === clearTimeout) return clearTimeout(t);
              if ((n === s || !n) && clearTimeout) return n = clearTimeout, clearTimeout(t);
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

      function m() {}
      i.nextTick = function(t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        l.push(new p(t, e)), 1 !== l.length || u || r(d)
      }, p.prototype.run = function() {
        this.fun.apply(null, this.array)
      }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = m, i.addListener = m, i.once = m, i.off = m, i.removeListener = m, i.removeAllListeners = m, i.emit = m, i.prependListener = m, i.prependOnceListener = m, i.listeners = function(t) {
        return []
      }, i.binding = function(t) {
        throw new Error("process.binding is not supported")
      }, i.cwd = function() {
        return "/"
      }, i.chdir = function(t) {
        throw new Error("process.chdir is not supported")
      }, i.umask = function() {
        return 0
      }
    },
    67604: (t, e, n) => {
      "use strict";
      n.d(e, {
        q: () => dr
      });
      var i = n(51664);
      const o = (0, i.createContext)({
          transformPagePoint: t => t,
          isStatic: !1,
          reducedMotion: "never"
        }),
        s = (0, i.createContext)({}),
        r = (0, i.createContext)(null),
        a = "undefined" != typeof document,
        l = a ? i.useLayoutEffect : i.useEffect,
        u = (0, i.createContext)({
          strict: !1
        });

      function c(t) {
        return "object" == typeof t && Object.prototype.hasOwnProperty.call(t, "current")
      }

      function h(t) {
        return "string" == typeof t || Array.isArray(t)
      }

      function d(t) {
        return "object" == typeof t && "function" == typeof t.start
      }
      const p = ["initial", "animate", "exit", "whileHover", "whileDrag", "whileTap", "whileFocus", "whileInView"];

      function m(t) {
        return d(t.animate) || p.some((e => h(t[e])))
      }

      function f(t) {
        return Boolean(m(t) || t.variants)
      }

      function g(t) {
        return Array.isArray(t) ? t.join(" ") : t
      }
      const v = t => ({
          isEnabled: e => t.some((t => !!e[t]))
        }),
        y = {
          measureLayout: v(["layout", "layoutId", "drag"]),
          animation: v(["animate", "exit", "variants", "whileHover", "whileTap", "whileFocus", "whileDrag", "whileInView"]),
          exit: v(["exit"]),
          drag: v(["drag", "dragControls"]),
          focus: v(["whileFocus"]),
          hover: v(["whileHover", "onHoverStart", "onHoverEnd"]),
          tap: v(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
          pan: v(["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]),
          inView: v(["whileInView", "onViewportEnter", "onViewportLeave"])
        };

      function x(t) {
        const e = (0, i.useRef)(null);
        return null === e.current && (e.current = t()), e.current
      }
      const b = {
        hasAnimatedSinceResize: !0,
        hasEverUpdated: !1
      };
      let w = 1;
      const T = (0, i.createContext)({});
      class V extends i.Component {
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
      const E = (0, i.createContext)({}),
        P = Symbol.for("motionComponentSymbol");

      function S({
        preloadedFeatures: t,
        createVisualElement: e,
        projectionNodeConstructor: n,
        useRender: d,
        useVisualState: p,
        Component: f
      }) {
        t && function(t) {
          for (const e in t) "projectionNodeConstructor" === e ? y.projectionNodeConstructor = t[e] : y[e].Component = t[e]
        }(t);
        const v = (0, i.forwardRef)((function(v, T) {
          const P = {
              ...(0, i.useContext)(o),
              ...v,
              layoutId: A(v)
            },
            {
              isStatic: S
            } = P;
          let C = null;
          const M = function(t) {
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
                    initial: !1 === e || h(e) ? e : void 0,
                    animate: h(n) ? n : void 0
                  }
                }
                return !1 !== t.inherit ? e : {}
              }(t, (0, i.useContext)(s));
              return (0, i.useMemo)((() => ({
                initial: e,
                animate: n
              })), [g(e), g(n)])
            }(v),
            k = S ? void 0 : x((() => {
              if (b.hasEverUpdated) return w++
            })),
            D = p(v, S);
          if (!S && a) {
            M.visualElement = function(t, e, n, a) {
              const c = (0, i.useContext)(s).visualElement,
                h = (0, i.useContext)(u),
                d = (0, i.useContext)(r),
                p = (0, i.useContext)(o).reducedMotion,
                m = (0, i.useRef)();
              a = a || h.renderer, !m.current && a && (m.current = a(t, {
                visualState: e,
                parent: c,
                props: n,
                presenceId: d ? d.id : void 0,
                blockInitialAnimation: !!d && !1 === d.initial,
                reducedMotionConfig: p
              }));
              const f = m.current;
              return l((() => {
                f && f.render()
              })), l((() => {
                f && f.animationState && f.animationState.animateChanges()
              })), l((() => () => f && f.notify("Unmount")), []), f
            }(f, D, P, e);
            const a = (0, i.useContext)(u).strict,
              c = (0, i.useContext)(E);
            M.visualElement && (C = M.visualElement.loadFeatures(P, a, t, k, n || y.projectionNodeConstructor, c))
          }
          return i.createElement(V, {
            visualElement: M.visualElement,
            props: P
          }, C, i.createElement(s.Provider, {
            value: M
          }, d(f, v, k, function(t, e, n) {
            return (0, i.useCallback)((i => {
              i && t.mount && t.mount(i), e && (i ? e.mount(i) : e.unmount()), n && ("function" == typeof n ? n(i) : c(n) && (n.current = i))
            }), [e])
          }(D, M.visualElement, T), D, S, M.visualElement)))
        }));
        return v[P] = f, v
      }

      function A({
        layoutId: t
      }) {
        const e = (0, i.useContext)(T).id;
        return e && void 0 !== t ? e + "-" + t : t
      }

      function C(t) {
        function e(e, n = {}) {
          return S(t(e, n))
        }
        if ("undefined" == typeof Proxy) return e;
        const n = new Map;
        return new Proxy(e, {
          get: (t, i) => (n.has(i) || n.set(i, e(i)), n.get(i))
        })
      }
      const M = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

      function k(t) {
        return "string" == typeof t && !t.includes("-") && !!(M.indexOf(t) > -1 || /[A-Z]/.test(t))
      }
      const D = {},
        R = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
        L = new Set(R);

      function B(t, {
        layout: e,
        layoutId: n
      }) {
        return L.has(t) || t.startsWith("origin") || (e || void 0 !== n) && (!!D[t] || "opacity" === t)
      }
      const I = t => !!(null == t ? void 0 : t.getVelocity),
        F = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective"
        },
        j = (t, e) => R.indexOf(t) - R.indexOf(e);

      function O(t) {
        return t.startsWith("--")
      }
      const U = (t, e) => e && "number" == typeof t ? e.transform(t) : t,
        N = (t, e, n) => Math.min(Math.max(n, t), e),
        $ = {
          test: t => "number" == typeof t,
          parse: parseFloat,
          transform: t => t
        },
        z = {
          ...$,
          transform: t => N(0, 1, t)
        },
        W = {
          ...$,
          default: 1
        },
        Y = t => Math.round(1e5 * t) / 1e5,
        H = /(-)?([\d]*\.?[\d])+/g,
        X = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
        _ = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;

      function G(t) {
        return "string" == typeof t
      }
      const q = t => ({
          test: e => G(e) && e.endsWith(t) && 1 === e.split(" ").length,
          parse: parseFloat,
          transform: e => `${e}${t}`
        }),
        Z = q("deg"),
        K = q("%"),
        J = q("px"),
        Q = q("vh"),
        tt = q("vw"),
        et = {
          ...K,
          parse: t => K.parse(t) / 100,
          transform: t => K.transform(100 * t)
        },
        nt = {
          ...$,
          transform: Math.round
        },
        it = {
          borderWidth: J,
          borderTopWidth: J,
          borderRightWidth: J,
          borderBottomWidth: J,
          borderLeftWidth: J,
          borderRadius: J,
          radius: J,
          borderTopLeftRadius: J,
          borderTopRightRadius: J,
          borderBottomRightRadius: J,
          borderBottomLeftRadius: J,
          width: J,
          maxWidth: J,
          height: J,
          maxHeight: J,
          size: J,
          top: J,
          right: J,
          bottom: J,
          left: J,
          padding: J,
          paddingTop: J,
          paddingRight: J,
          paddingBottom: J,
          paddingLeft: J,
          margin: J,
          marginTop: J,
          marginRight: J,
          marginBottom: J,
          marginLeft: J,
          rotate: Z,
          rotateX: Z,
          rotateY: Z,
          rotateZ: Z,
          scale: W,
          scaleX: W,
          scaleY: W,
          scaleZ: W,
          skew: Z,
          skewX: Z,
          skewY: Z,
          distance: J,
          translateX: J,
          translateY: J,
          translateZ: J,
          x: J,
          y: J,
          z: J,
          perspective: J,
          transformPerspective: J,
          opacity: z,
          originX: et,
          originY: et,
          originZ: J,
          zIndex: nt,
          fillOpacity: z,
          strokeOpacity: z,
          numOctaves: nt
        };

      function ot(t, e, n, i) {
        const {
          style: o,
          vars: s,
          transform: r,
          transformKeys: a,
          transformOrigin: l
        } = t;
        a.length = 0;
        let u = !1,
          c = !1,
          h = !0;
        for (const t in e) {
          const n = e[t];
          if (O(t)) {
            s[t] = n;
            continue
          }
          const i = it[t],
            d = U(n, i);
          if (L.has(t)) {
            if (u = !0, r[t] = d, a.push(t), !h) continue;
            n !== (i.default || 0) && (h = !1)
          } else t.startsWith("origin") ? (c = !0, l[t] = d) : o[t] = d
        }
        if (e.transform || (u || i ? o.transform = function({
            transform: t,
            transformKeys: e
          }, {
            enableHardwareAcceleration: n = !0,
            allowTransformNone: i = !0
          }, o, s) {
            let r = "";
            e.sort(j);
            for (const n of e) r += `${F[n]||n}(${t[n]}) `;
            return n && !t.z && (r += "translateZ(0)"), r = r.trim(), s ? r = s(t, o ? "" : r) : i && o && (r = "none"), r
          }(t, n, h, i) : o.transform && (o.transform = "none")), c) {
          const {
            originX: t = "50%",
            originY: e = "50%",
            originZ: n = 0
          } = l;
          o.transformOrigin = `${t} ${e} ${n}`
        }
      }
      const st = () => ({
        style: {},
        transform: {},
        transformKeys: [],
        transformOrigin: {},
        vars: {}
      });

      function rt(t, e, n) {
        for (const i in e) I(e[i]) || B(i, n) || (t[i] = e[i])
      }

      function at(t, e, n) {
        const o = {},
          s = function(t, e, n) {
            const o = {};
            return rt(o, t.style || {}, t), Object.assign(o, function({
              transformTemplate: t
            }, e, n) {
              return (0, i.useMemo)((() => {
                const i = st();
                return ot(i, e, {
                  enableHardwareAcceleration: !n
                }, t), Object.assign({}, i.vars, i.style)
              }), [e])
            }(t, e, n)), t.transformValues ? t.transformValues(o) : o
          }(t, e, n);
        return t.drag && !1 !== t.dragListener && (o.draggable = !1, s.userSelect = s.WebkitUserSelect = s.WebkitTouchCallout = "none", s.touchAction = !0 === t.drag ? "none" : "pan-" + ("x" === t.drag ? "y" : "x")), o.style = s, o
      }
      const lt = new Set(["initial", "style", "values", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "layout", "layoutId", "layoutDependency", "onLayoutAnimationStart", "onLayoutAnimationComplete", "onLayoutMeasure", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "drag", "dragControls", "dragListener", "dragConstraints", "dragDirectionLock", "dragSnapToOrigin", "_dragX", "_dragY", "dragElastic", "dragMomentum", "dragPropagation", "dragTransition", "onHoverStart", "onHoverEnd", "layoutScroll", "whileInView", "onViewportEnter", "onViewportLeave", "viewport", "whileTap", "onTap", "onTapStart", "onTapCancel", "animate", "exit", "variants", "whileHover", "whileTap", "whileFocus", "whileDrag", "whileInView", "onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]);

      function ut(t) {
        return lt.has(t)
      }
      let ct = t => !ut(t);
      try {
        (ht = require("@emotion/is-prop-valid").default) && (ct = t => t.startsWith("on") ? !ut(t) : ht(t))
      } catch (t) {}
      var ht;

      function dt(t, e, n) {
        return "string" == typeof t ? t : J.transform(e + n * t)
      }
      const pt = {
          offset: "stroke-dashoffset",
          array: "stroke-dasharray"
        },
        mt = {
          offset: "strokeDashoffset",
          array: "strokeDasharray"
        };

      function ft(t, {
        attrX: e,
        attrY: n,
        originX: i,
        originY: o,
        pathLength: s,
        pathSpacing: r = 1,
        pathOffset: a = 0,
        ...l
      }, u, c, h) {
        if (ot(t, l, u, h), c) return void(t.style.viewBox && (t.attrs.viewBox = t.style.viewBox));
        t.attrs = t.style, t.style = {};
        const {
          attrs: d,
          style: p,
          dimensions: m
        } = t;
        d.transform && (m && (p.transform = d.transform), delete d.transform), m && (void 0 !== i || void 0 !== o || p.transform) && (p.transformOrigin = function(t, e, n) {
          return `${dt(e,t.x,t.width)} ${dt(n,t.y,t.height)}`
        }(m, void 0 !== i ? i : .5, void 0 !== o ? o : .5)), void 0 !== e && (d.x = e), void 0 !== n && (d.y = n), void 0 !== s && function(t, e, n = 1, i = 0, o = !0) {
          t.pathLength = 1;
          const s = o ? pt : mt;
          t[s.offset] = J.transform(-i);
          const r = J.transform(e),
            a = J.transform(n);
          t[s.array] = `${r} ${a}`
        }(d, s, r, a, !1)
      }
      const gt = () => ({
          ...st(),
          attrs: {}
        }),
        vt = t => "string" == typeof t && "svg" === t.toLowerCase();

      function yt(t, e, n, o) {
        const s = (0, i.useMemo)((() => {
          const n = gt();
          return ft(n, e, {
            enableHardwareAcceleration: !1
          }, vt(o), t.transformTemplate), {
            ...n.attrs,
            style: {
              ...n.style
            }
          }
        }), [e]);
        if (t.style) {
          const e = {};
          rt(e, t.style, t), s.style = {
            ...e,
            ...s.style
          }
        }
        return s
      }

      function xt(t = !1) {
        return (e, n, o, s, {
          latestValues: r
        }, a) => {
          const l = (k(e) ? yt : at)(n, r, a, e),
            u = function(t, e, n) {
              const i = {};
              for (const o in t)(ct(o) || !0 === n && ut(o) || !e && !ut(o) || t.draggable && o.startsWith("onDrag")) && (i[o] = t[o]);
              return i
            }(n, "string" == typeof e, t),
            c = {
              ...u,
              ...l,
              ref: s
            };
          return o && (c["data-projection-id"] = o), (0, i.createElement)(e, c)
        }
      }
      const bt = t => t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();

      function wt(t, {
        style: e,
        vars: n
      }, i, o) {
        Object.assign(t.style, e, o && o.getProjectionStyles(i));
        for (const e in n) t.style.setProperty(e, n[e])
      }
      const Tt = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

      function Vt(t, e, n, i) {
        wt(t, e, void 0, i);
        for (const n in e.attrs) t.setAttribute(Tt.has(n) ? n : bt(n), e.attrs[n])
      }

      function Et(t) {
        const {
          style: e
        } = t, n = {};
        for (const i in e)(I(e[i]) || B(i, t)) && (n[i] = e[i]);
        return n
      }

      function Pt(t) {
        const e = Et(t);
        for (const n in t) I(t[n]) && (e["x" === n || "y" === n ? "attr" + n.toUpperCase() : n] = t[n]);
        return e
      }

      function St(t, e, n, i = {}, o = {}) {
        return "function" == typeof e && (e = e(void 0 !== n ? n : t.custom, i, o)), "string" == typeof e && (e = t.variants && t.variants[e]), "function" == typeof e && (e = e(void 0 !== n ? n : t.custom, i, o)), e
      }
      const At = t => Array.isArray(t),
        Ct = t => Boolean(t && "object" == typeof t && t.mix && t.toValue),
        Mt = t => At(t) ? t[t.length - 1] || 0 : t;

      function kt(t) {
        const e = I(t) ? t.get() : t;
        return Ct(e) ? e.toValue() : e
      }
      const Dt = t => (e, n) => {
        const o = (0, i.useContext)(s),
          a = (0, i.useContext)(r),
          l = () => function({
            scrapeMotionValuesFromProps: t,
            createRenderState: e,
            onMount: n
          }, i, o, s) {
            const r = {
              latestValues: Rt(i, o, s, t),
              renderState: e()
            };
            return n && (r.mount = t => n(i, t, r)), r
          }(t, e, o, a);
        return n ? l() : x(l)
      };

      function Rt(t, e, n, i) {
        const o = {},
          s = i(t);
        for (const t in s) o[t] = kt(s[t]);
        let {
          initial: r,
          animate: a
        } = t;
        const l = m(t),
          u = f(t);
        e && u && !l && !1 !== t.inherit && (void 0 === r && (r = e.initial), void 0 === a && (a = e.animate));
        let c = !!n && !1 === n.initial;
        c = c || !1 === r;
        const h = c ? a : r;
        return h && "boolean" != typeof h && !d(h) && (Array.isArray(h) ? h : [h]).forEach((e => {
          const n = St(t, e);
          if (!n) return;
          const {
            transitionEnd: i,
            transition: s,
            ...r
          } = n;
          for (const t in r) {
            let e = r[t];
            Array.isArray(e) && (e = e[c ? e.length - 1 : 0]), null !== e && (o[t] = e)
          }
          for (const t in i) o[t] = i[t]
        })), o
      }
      const Lt = {
          useVisualState: Dt({
            scrapeMotionValuesFromProps: Pt,
            createRenderState: gt,
            onMount: (t, e, {
              renderState: n,
              latestValues: i
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
              ft(n, i, {
                enableHardwareAcceleration: !1
              }, vt(e.tagName), t.transformTemplate), Vt(e, n)
            }
          })
        },
        Bt = {
          useVisualState: Dt({
            scrapeMotionValuesFromProps: Et,
            createRenderState: st
          })
        };
      var It;

      function Ft(t, e, n, i = {
        passive: !0
      }) {
        return t.addEventListener(e, n, i), () => t.removeEventListener(e, n)
      }

      function jt(t, e, n, o) {
        (0, i.useEffect)((() => {
          const i = t.current;
          if (n && i) return Ft(i, e, n, o)
        }), [t, e, n, o])
      }

      function Ot(t) {
        return "undefined" != typeof PointerEvent && t instanceof PointerEvent ? !("mouse" !== t.pointerType) : t instanceof MouseEvent
      }

      function Ut(t) {
        return !!t.touches
      }! function(t) {
        t.Animate = "animate", t.Hover = "whileHover", t.Tap = "whileTap", t.Drag = "whileDrag", t.Focus = "whileFocus", t.InView = "whileInView", t.Exit = "exit"
      }(It || (It = {}));
      const Nt = {
        pageX: 0,
        pageY: 0
      };

      function $t(t, e = "page") {
        const n = t.touches[0] || t.changedTouches[0] || Nt;
        return {
          x: n[e + "X"],
          y: n[e + "Y"]
        }
      }

      function zt(t, e = "page") {
        return {
          x: t[e + "X"],
          y: t[e + "Y"]
        }
      }

      function Wt(t, e = "page") {
        return {
          point: Ut(t) ? $t(t, e) : zt(t, e)
        }
      }
      const Yt = (t, e = !1) => {
          const n = e => t(e, Wt(e));
          return e ? (i = n, t => {
            const e = t instanceof MouseEvent;
            (!e || e && 0 === t.button) && i(t)
          }) : n;
          var i
        },
        Ht = () => a && null === window.onpointerdown,
        Xt = () => a && null === window.ontouchstart,
        _t = () => a && null === window.onmousedown,
        Gt = {
          pointerdown: "mousedown",
          pointermove: "mousemove",
          pointerup: "mouseup",
          pointercancel: "mousecancel",
          pointerover: "mouseover",
          pointerout: "mouseout",
          pointerenter: "mouseenter",
          pointerleave: "mouseleave"
        },
        qt = {
          pointerdown: "touchstart",
          pointermove: "touchmove",
          pointerup: "touchend",
          pointercancel: "touchcancel"
        };

      function Zt(t) {
        return Ht() ? t : Xt() ? qt[t] : _t() ? Gt[t] : t
      }

      function Kt(t, e, n, i) {
        return Ft(t, Zt(e), Yt(n, "pointerdown" === e), i)
      }

      function Jt(t, e, n, i) {
        return jt(t, Zt(e), n && Yt(n, "pointerdown" === e), i)
      }

      function Qt(t) {
        let e = null;
        return () => null === e && (e = t, () => {
          e = null
        })
      }
      const te = Qt("dragHorizontal"),
        ee = Qt("dragVertical");

      function ne(t) {
        let e = !1;
        if ("y" === t) e = ee();
        else if ("x" === t) e = te();
        else {
          const t = te(),
            n = ee();
          t && n ? e = () => {
            t(), n()
          } : (t && t(), n && n())
        }
        return e
      }

      function ie() {
        const t = ne(!0);
        return !t || (t(), !1)
      }

      function oe(t, e, n) {
        return (i, o) => {
          Ot(i) && !ie() && (t.animationState && t.animationState.setActive(It.Hover, e), n && n(i, o))
        }
      }
      const se = (t, e) => !!e && (t === e || se(t, e.parentElement));

      function re(t) {
        return (0, i.useEffect)((() => () => t()), [])
      }
      const ae = (t, e) => n => e(t(n)),
        le = (...t) => t.reduce(ae);
      var ue = n(44392);
      const ce = (void 0 === ue || ue.env, "production"),
        he = new Set,
        de = new WeakMap,
        pe = new WeakMap,
        me = t => {
          const e = de.get(t.target);
          e && e(t)
        },
        fe = t => {
          t.forEach(me)
        };
      const ge = {
        some: 0,
        all: 1
      };

      function ve(t, e, n, {
        root: o,
        margin: s,
        amount: r = "some",
        once: a
      }) {
        (0, i.useEffect)((() => {
          if (!t || !n.current) return;
          const i = {
            root: null == o ? void 0 : o.current,
            rootMargin: s,
            threshold: "number" == typeof r ? r : ge[r]
          };
          return function(t, e, n) {
            const i = function({
              root: t,
              ...e
            }) {
              const n = t || document;
              pe.has(n) || pe.set(n, {});
              const i = pe.get(n),
                o = JSON.stringify(e);
              return i[o] || (i[o] = new IntersectionObserver(fe, {
                root: t,
                ...e
              })), i[o]
            }(e);
            return de.set(t, n), i.observe(t), () => {
              de.delete(t), i.unobserve(t)
            }
          }(n.current, i, (t => {
            const {
              isIntersecting: i
            } = t;
            if (e.isInView === i) return;
            if (e.isInView = i, a && !i && e.hasEnteredView) return;
            i && (e.hasEnteredView = !0), n.animationState && n.animationState.setActive(It.InView, i);
            const o = n.getProps(),
              s = i ? o.onViewportEnter : o.onViewportLeave;
            s && s(t)
          }))
        }), [t, o, s, r])
      }

      function ye(t, e, n, {
        fallback: o = !0
      }) {
        (0, i.useEffect)((() => {
          var i;
          t && o && ("production" !== ce && (i = "IntersectionObserver not available on this device. whileInView animations will trigger on mount.", he.has(i) || (console.warn(i), he.add(i))), requestAnimationFrame((() => {
            e.hasEnteredView = !0;
            const {
              onViewportEnter: t
            } = n.getProps();
            t && t(null), n.animationState && n.animationState.setActive(It.InView, !0)
          })))
        }), [t])
      }
      const xe = t => e => (t(e), null),
        be = {
          inView: xe((function({
            visualElement: t,
            whileInView: e,
            onViewportEnter: n,
            onViewportLeave: o,
            viewport: s = {}
          }) {
            const r = (0, i.useRef)({
              hasEnteredView: !1,
              isInView: !1
            });
            let a = Boolean(e || n || o);
            s.once && r.current.hasEnteredView && (a = !1), ("undefined" == typeof IntersectionObserver ? ye : ve)(a, r.current, t, s)
          })),
          tap: xe((function({
            onTap: t,
            onTapStart: e,
            onTapCancel: n,
            whileTap: o,
            visualElement: s
          }) {
            const r = t || e || n || o,
              a = (0, i.useRef)(!1),
              l = (0, i.useRef)(null),
              u = {
                passive: !(e || t || n || m)
              };

            function c() {
              l.current && l.current(), l.current = null
            }

            function h() {
              return c(), a.current = !1, s.animationState && s.animationState.setActive(It.Tap, !1), !ie()
            }

            function d(e, i) {
              h() && (se(s.current, e.target) ? t && t(e, i) : n && n(e, i))
            }

            function p(t, e) {
              h() && n && n(t, e)
            }

            function m(t, n) {
              c(), a.current || (a.current = !0, l.current = le(Kt(window, "pointerup", d, u), Kt(window, "pointercancel", p, u)), s.animationState && s.animationState.setActive(It.Tap, !0), e && e(t, n))
            }
            Jt(s, "pointerdown", r ? m : void 0, u), re(c)
          })),
          focus: xe((function({
            whileFocus: t,
            visualElement: e
          }) {
            const {
              animationState: n
            } = e;
            jt(e, "focus", t ? () => {
              n && n.setActive(It.Focus, !0)
            } : void 0), jt(e, "blur", t ? () => {
              n && n.setActive(It.Focus, !1)
            } : void 0)
          })),
          hover: xe((function({
            onHoverStart: t,
            onHoverEnd: e,
            whileHover: n,
            visualElement: i
          }) {
            Jt(i, "pointerenter", t || n ? oe(i, !0, t) : void 0, {
              passive: !t
            }), Jt(i, "pointerleave", e || n ? oe(i, !1, e) : void 0, {
              passive: !e
            })
          }))
        };

      function we() {
        const t = (0, i.useContext)(r);
        if (null === t) return [!0, null];
        const {
          isPresent: e,
          onExitComplete: n,
          register: o
        } = t, s = (0, i.useId)();
        return (0, i.useEffect)((() => o(s)), []), !e && n ? [!1, () => n && n(s)] : [!0]
      }

      function Te(t, e) {
        if (!Array.isArray(e)) return !1;
        const n = e.length;
        if (n !== t.length) return !1;
        for (let i = 0; i < n; i++)
          if (e[i] !== t[i]) return !1;
        return !0
      }
      const Ve = {
          delta: 0,
          timestamp: 0
        },
        Ee = 1 / 60 * 1e3,
        Pe = "undefined" != typeof performance ? () => performance.now() : () => Date.now(),
        Se = "undefined" != typeof window ? t => window.requestAnimationFrame(t) : t => setTimeout((() => t(Pe())), Ee);
      let Ae = !0,
        Ce = !1,
        Me = !1;
      const ke = ["read", "update", "preRender", "render", "postRender"],
        De = ke.reduce(((t, e) => (t[e] = function(t) {
          let e = [],
            n = [],
            i = 0,
            o = !1,
            s = !1;
          const r = new WeakSet,
            a = {
              schedule: (t, s = !1, a = !1) => {
                const l = a && o,
                  u = l ? e : n;
                return s && r.add(t), -1 === u.indexOf(t) && (u.push(t), l && o && (i = e.length)), t
              },
              cancel: t => {
                const e = n.indexOf(t); - 1 !== e && n.splice(e, 1), r.delete(t)
              },
              process: l => {
                if (o) s = !0;
                else {
                  if (o = !0, [e, n] = [n, e], n.length = 0, i = e.length, i)
                    for (let n = 0; n < i; n++) {
                      const i = e[n];
                      i(l), r.has(i) && (a.schedule(i), t())
                    }
                  o = !1, s && (s = !1, a.process(l))
                }
              }
            };
          return a
        }((() => Ce = !0)), t)), {}),
        Re = ke.reduce(((t, e) => {
          const n = De[e];
          return t[e] = (t, e = !1, i = !1) => (Ce || je(), n.schedule(t, e, i)), t
        }), {}),
        Le = ke.reduce(((t, e) => (t[e] = De[e].cancel, t)), {}),
        Be = ke.reduce(((t, e) => (t[e] = () => De[e].process(Ve), t)), {}),
        Ie = t => De[t].process(Ve),
        Fe = t => {
          Ce = !1, Ve.delta = Ae ? Ee : Math.max(Math.min(t - Ve.timestamp, 40), 1), Ve.timestamp = t, Me = !0, ke.forEach(Ie), Me = !1, Ce && (Ae = !1, Se(Fe))
        },
        je = () => {
          Ce = !0, Ae = !0, Me || Se(Fe)
        };

      function Oe(t, e) {
        -1 === t.indexOf(e) && t.push(e)
      }

      function Ue(t, e) {
        const n = t.indexOf(e);
        n > -1 && t.splice(n, 1)
      }
      class Ne {
        constructor() {
          this.subscriptions = []
        }
        add(t) {
          return Oe(this.subscriptions, t), () => Ue(this.subscriptions, t)
        }
        notify(t, e, n) {
          const i = this.subscriptions.length;
          if (i)
            if (1 === i) this.subscriptions[0](t, e, n);
            else
              for (let o = 0; o < i; o++) {
                const i = this.subscriptions[o];
                i && i(t, e, n)
              }
        }
        getSize() {
          return this.subscriptions.length
        }
        clear() {
          this.subscriptions.length = 0
        }
      }

      function $e(t, e) {
        return e ? t * (1e3 / e) : 0
      }
      class ze {
        constructor(t, e = {}) {
          var n;
          this.version = "7.10.3", this.timeDelta = 0, this.lastUpdated = 0, this.canTrackVelocity = !1, this.events = {}, this.updateAndNotify = (t, e = !0) => {
            this.prev = this.current, this.current = t;
            const {
              delta: n,
              timestamp: i
            } = Ve;
            this.lastUpdated !== i && (this.timeDelta = n, this.lastUpdated = i, Re.postRender(this.scheduleVelocityCheck)), this.prev !== this.current && this.events.change && this.events.change.notify(this.current), this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()), e && this.events.renderRequest && this.events.renderRequest.notify(this.current)
          }, this.scheduleVelocityCheck = () => Re.postRender(this.velocityCheck), this.velocityCheck = ({
            timestamp: t
          }) => {
            t !== this.lastUpdated && (this.prev = this.current, this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()))
          }, this.hasAnimated = !1, this.prev = this.current = t, this.canTrackVelocity = (n = this.current, !isNaN(parseFloat(n))), this.owner = e.owner
        }
        onChange(t) {
          return this.on("change", t)
        }
        on(t, e) {
          return this.events[t] || (this.events[t] = new Ne), this.events[t].add(e)
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
          return this.canTrackVelocity ? $e(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0
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

      function We(t, e) {
        return new ze(t, e)
      }
      const Ye = (t, e) => n => Boolean(G(n) && _.test(n) && n.startsWith(t) || e && Object.prototype.hasOwnProperty.call(n, e)),
        He = (t, e, n) => i => {
          if (!G(i)) return i;
          const [o, s, r, a] = i.match(H);
          return {
            [t]: parseFloat(o),
            [e]: parseFloat(s),
            [n]: parseFloat(r),
            alpha: void 0 !== a ? parseFloat(a) : 1
          }
        },
        Xe = {
          ...$,
          transform: t => Math.round((t => N(0, 255, t))(t))
        },
        _e = {
          test: Ye("rgb", "red"),
          parse: He("red", "green", "blue"),
          transform: ({
            red: t,
            green: e,
            blue: n,
            alpha: i = 1
          }) => "rgba(" + Xe.transform(t) + ", " + Xe.transform(e) + ", " + Xe.transform(n) + ", " + Y(z.transform(i)) + ")"
        },
        Ge = {
          test: Ye("#"),
          parse: function(t) {
            let e = "",
              n = "",
              i = "",
              o = "";
            return t.length > 5 ? (e = t.substring(1, 3), n = t.substring(3, 5), i = t.substring(5, 7), o = t.substring(7, 9)) : (e = t.substring(1, 2), n = t.substring(2, 3), i = t.substring(3, 4), o = t.substring(4, 5), e += e, n += n, i += i, o += o), {
              red: parseInt(e, 16),
              green: parseInt(n, 16),
              blue: parseInt(i, 16),
              alpha: o ? parseInt(o, 16) / 255 : 1
            }
          },
          transform: _e.transform
        },
        qe = {
          test: Ye("hsl", "hue"),
          parse: He("hue", "saturation", "lightness"),
          transform: ({
            hue: t,
            saturation: e,
            lightness: n,
            alpha: i = 1
          }) => "hsla(" + Math.round(t) + ", " + K.transform(Y(e)) + ", " + K.transform(Y(n)) + ", " + Y(z.transform(i)) + ")"
        },
        Ze = {
          test: t => _e.test(t) || Ge.test(t) || qe.test(t),
          parse: t => _e.test(t) ? _e.parse(t) : qe.test(t) ? qe.parse(t) : Ge.parse(t),
          transform: t => G(t) ? t : t.hasOwnProperty("red") ? _e.transform(t) : qe.transform(t)
        },
        Ke = "${c}",
        Je = "${n}";

      function Qe(t) {
        "number" == typeof t && (t = `${t}`);
        const e = [];
        let n = 0,
          i = 0;
        const o = t.match(X);
        o && (n = o.length, t = t.replace(X, Ke), e.push(...o.map(Ze.parse)));
        const s = t.match(H);
        return s && (i = s.length, t = t.replace(H, Je), e.push(...s.map($.parse))), {
          values: e,
          numColors: n,
          numNumbers: i,
          tokenised: t
        }
      }

      function tn(t) {
        return Qe(t).values
      }

      function en(t) {
        const {
          values: e,
          numColors: n,
          tokenised: i
        } = Qe(t), o = e.length;
        return t => {
          let e = i;
          for (let i = 0; i < o; i++) e = e.replace(i < n ? Ke : Je, i < n ? Ze.transform(t[i]) : Y(t[i]));
          return e
        }
      }
      const nn = t => "number" == typeof t ? 0 : t,
        on = {
          test: function(t) {
            var e, n;
            return isNaN(t) && G(t) && ((null === (e = t.match(H)) || void 0 === e ? void 0 : e.length) || 0) + ((null === (n = t.match(X)) || void 0 === n ? void 0 : n.length) || 0) > 0
          },
          parse: tn,
          createTransformer: en,
          getAnimatableNone: function(t) {
            const e = tn(t);
            return en(t)(e.map(nn))
          }
        },
        sn = new Set(["brightness", "contrast", "saturate", "opacity"]);

      function rn(t) {
        const [e, n] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        const [i] = n.match(H) || [];
        if (!i) return t;
        const o = n.replace(i, "");
        let s = sn.has(e) ? 1 : 0;
        return i !== n && (s *= 100), e + "(" + s + o + ")"
      }
      const an = /([a-z-]*)\(.*?\)/g,
        ln = {
          ...on,
          getAnimatableNone: t => {
            const e = t.match(an);
            return e ? e.map(rn).join(" ") : t
          }
        },
        un = {
          ...it,
          color: Ze,
          backgroundColor: Ze,
          outlineColor: Ze,
          fill: Ze,
          stroke: Ze,
          borderColor: Ze,
          borderTopColor: Ze,
          borderRightColor: Ze,
          borderBottomColor: Ze,
          borderLeftColor: Ze,
          filter: ln,
          WebkitFilter: ln
        },
        cn = t => un[t];

      function hn(t, e) {
        var n;
        let i = cn(t);
        return i !== ln && (i = on), null === (n = i.getAnimatableNone) || void 0 === n ? void 0 : n.call(i, e)
      }
      const dn = t => e => e.test(t),
        pn = [$, J, K, Z, tt, Q, {
          test: t => "auto" === t,
          parse: t => t
        }],
        mn = t => pn.find(dn(t)),
        fn = [...pn, Ze, on],
        gn = t => fn.find(dn(t));

      function vn(t, e, n) {
        const i = t.getProps();
        return St(i, e, void 0 !== n ? n : i.custom, function(t) {
          const e = {};
          return t.values.forEach(((t, n) => e[n] = t.get())), e
        }(t), function(t) {
          const e = {};
          return t.values.forEach(((t, n) => e[n] = t.getVelocity())), e
        }(t))
      }

      function yn(t, e, n) {
        t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, We(n))
      }

      function xn(t, e) {
        if (e) return (e[t] || e.default || e).from
      }

      function bn(t) {
        return Boolean(I(t) && t.add)
      }
      const wn = (t, e) => `${t}: ${e}`;

      function Tn(t, e) {
        const {
          MotionAppearAnimations: n
        } = window, i = wn(t, L.has(e) ? "transform" : e), o = n && n.get(i);
        return o ? (Re.render((() => {
          try {
            o.cancel(), n.delete(i)
          } catch (t) {}
        })), o.currentTime || 0) : 0
      }
      const Vn = "data-" + bt("framerAppearId");
      var En = n(97064);
      const Pn = t => 1e3 * t,
        Sn = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
        An = t => e => 1 - t(1 - e),
        Cn = t => t * t,
        Mn = An(Cn),
        kn = Sn(Cn),
        Dn = (t, e, n) => -n * t + n * e + t;

      function Rn(t, e, n) {
        return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + 6 * (e - t) * n : n < .5 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
      }
      const Ln = (t, e, n) => {
          const i = t * t;
          return Math.sqrt(Math.max(0, n * (e * e - i) + i))
        },
        Bn = [Ge, _e, qe];

      function In(t) {
        const e = (n = t, Bn.find((t => t.test(n))));
        var n;
        (0, En.O)(Boolean(e), `'${t}' is not an animatable color. Use the equivalent color code instead.`);
        let i = e.parse(t);
        return e === qe && (i = function({
          hue: t,
          saturation: e,
          lightness: n,
          alpha: i
        }) {
          t /= 360, n /= 100;
          let o = 0,
            s = 0,
            r = 0;
          if (e /= 100) {
            const i = n < .5 ? n * (1 + e) : n + e - n * e,
              a = 2 * n - i;
            o = Rn(a, i, t + 1 / 3), s = Rn(a, i, t), r = Rn(a, i, t - 1 / 3)
          } else o = s = r = n;
          return {
            red: Math.round(255 * o),
            green: Math.round(255 * s),
            blue: Math.round(255 * r),
            alpha: i
          }
        }(i)), i
      }
      const Fn = (t, e) => {
        const n = In(t),
          i = In(e),
          o = {
            ...n
          };
        return t => (o.red = Ln(n.red, i.red, t), o.green = Ln(n.green, i.green, t), o.blue = Ln(n.blue, i.blue, t), o.alpha = Dn(n.alpha, i.alpha, t), _e.transform(o))
      };

      function jn(t, e) {
        return "number" == typeof t ? n => Dn(t, e, n) : Ze.test(t) ? Fn(t, e) : Nn(t, e)
      }
      const On = (t, e) => {
          const n = [...t],
            i = n.length,
            o = t.map(((t, n) => jn(t, e[n])));
          return t => {
            for (let e = 0; e < i; e++) n[e] = o[e](t);
            return n
          }
        },
        Un = (t, e) => {
          const n = {
              ...t,
              ...e
            },
            i = {};
          for (const o in n) void 0 !== t[o] && void 0 !== e[o] && (i[o] = jn(t[o], e[o]));
          return t => {
            for (const e in i) n[e] = i[e](t);
            return n
          }
        },
        Nn = (t, e) => {
          const n = on.createTransformer(e),
            i = Qe(t),
            o = Qe(e);
          return i.numColors === o.numColors && i.numNumbers >= o.numNumbers ? le(On(i.values, o.values), n) : ((0, En.s)(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), n => `${n>0?e:t}`)
        },
        $n = (t, e, n) => {
          const i = e - t;
          return 0 === i ? 1 : (n - t) / i
        },
        zn = (t, e) => n => Dn(t, e, n);

      function Wn(t, e, {
        clamp: n = !0,
        ease: i,
        mixer: o
      } = {}) {
        const s = t.length;
        (0, En.O)(s === e.length, "Both input and output ranges must be the same length"), (0, En.O)(!i || !Array.isArray(i) || i.length === s - 1, "Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."), t[0] > t[s - 1] && (t = [...t].reverse(), e = [...e].reverse());
        const r = function(t, e, n) {
            const i = [],
              o = n || ("number" == typeof(s = t[0]) ? zn : "string" == typeof s ? Ze.test(s) ? Fn : Nn : Array.isArray(s) ? On : "object" == typeof s ? Un : zn);
            var s;
            const r = t.length - 1;
            for (let n = 0; n < r; n++) {
              let s = o(t[n], t[n + 1]);
              if (e) {
                const t = Array.isArray(e) ? e[n] : e;
                s = le(t, s)
              }
              i.push(s)
            }
            return i
          }(e, i, o),
          a = r.length,
          l = e => {
            let n = 0;
            if (a > 1)
              for (; n < t.length - 2 && !(e < t[n + 1]); n++);
            const i = $n(t[n], t[n + 1], e);
            return r[n](i)
          };
        return n ? e => l(N(t[0], t[s - 1], e)) : l
      }
      const Yn = t => t,
        Hn = (t, e, n) => (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t;

      function Xn(t, e, n, i) {
        if (t === e && n === i) return Yn;
        return o => 0 === o || 1 === o ? o : Hn(function(t, e, n, i, o) {
          let s, r, a = 0;
          do {
            r = e + (n - e) / 2, s = Hn(r, i, o) - t, s > 0 ? n = r : e = r
          } while (Math.abs(s) > 1e-7 && ++a < 12);
          return r
        }(o, 0, 1, t, n), e, i)
      }
      const _n = t => 1 - Math.sin(Math.acos(t)),
        Gn = An(_n),
        qn = Sn(Gn),
        Zn = Xn(.33, 1.53, .69, .99),
        Kn = An(Zn),
        Jn = Sn(Kn),
        Qn = {
          linear: Yn,
          easeIn: Cn,
          easeInOut: kn,
          easeOut: Mn,
          circIn: _n,
          circInOut: qn,
          circOut: Gn,
          backIn: Kn,
          backInOut: Jn,
          backOut: Zn,
          anticipate: t => (t *= 2) < 1 ? .5 * Kn(t) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
        },
        ti = t => {
          if (Array.isArray(t)) {
            (0, En.O)(4 === t.length, "Cubic bezier arrays must contain four numerical values.");
            const [e, n, i, o] = t;
            return Xn(e, n, i, o)
          }
          return "string" == typeof t ? ((0, En.O)(void 0 !== Qn[t], `Invalid easing type '${t}'`), Qn[t]) : t
        };

      function ei({
        keyframes: t,
        ease: e = kn,
        times: n,
        duration: i = 300
      }) {
        t = [...t];
        const o = ei[0],
          s = (t => Array.isArray(t) && "number" != typeof t[0])(e) ? e.map(ti) : ti(e),
          r = {
            done: !1,
            value: o
          },
          a = function(t, e) {
            return t.map((t => t * e))
          }(n && n.length === ei.length ? n : function(t) {
            const e = t.length;
            return t.map(((t, n) => 0 !== n ? n / (e - 1) : 0))
          }(t), i);

        function l() {
          return Wn(a, t, {
            ease: Array.isArray(s) ? s : (e = t, n = s, e.map((() => n || kn)).splice(0, e.length - 1))
          });
          var e, n
        }
        let u = l();
        return {
          next: t => (r.value = u(t), r.done = t >= i, r),
          flipTarget: () => {
            t.reverse(), u = l()
          }
        }
      }
      const ni = .001,
        ii = .01,
        oi = 10,
        si = .05,
        ri = 1;
      const ai = 12;

      function li(t, e) {
        return t * Math.sqrt(1 - e * e)
      }
      const ui = ["duration", "bounce"],
        ci = ["stiffness", "damping", "mass"];

      function hi(t, e) {
        return e.some((e => void 0 !== t[e]))
      }

      function di({
        keyframes: t,
        restSpeed: e = 2,
        restDelta: n = .01,
        ...i
      }) {
        let o = t[0],
          s = t[t.length - 1];
        const r = {
            done: !1,
            value: o
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
            if (!hi(t, ci) && hi(t, ui)) {
              const n = function({
                duration: t = 800,
                bounce: e = .25,
                velocity: n = 0,
                mass: i = 1
              }) {
                let o, s;
                (0, En.s)(t <= 1e3 * oi, "Spring duration must be 10 seconds or less");
                let r = 1 - e;
                r = N(si, ri, r), t = N(ii, oi, t / 1e3), r < 1 ? (o = e => {
                  const i = e * r,
                    o = i * t,
                    s = i - n,
                    a = li(e, r),
                    l = Math.exp(-o);
                  return ni - s / a * l
                }, s = e => {
                  const i = e * r * t,
                    s = i * n + n,
                    a = Math.pow(r, 2) * Math.pow(e, 2) * t,
                    l = Math.exp(-i),
                    u = li(Math.pow(e, 2), r);
                  return (-o(e) + ni > 0 ? -1 : 1) * ((s - a) * l) / u
                }) : (o = e => Math.exp(-e * t) * ((e - n) * t + 1) - ni, s = e => Math.exp(-e * t) * (t * t * (n - e)));
                const a = function(t, e, n) {
                  let i = n;
                  for (let n = 1; n < ai; n++) i -= t(i) / e(i);
                  return i
                }(o, s, 5 / t);
                if (t *= 1e3, isNaN(a)) return {
                  stiffness: 100,
                  damping: 10,
                  duration: t
                }; {
                  const e = Math.pow(a, 2) * i;
                  return {
                    stiffness: e,
                    damping: 2 * r * Math.sqrt(i * e),
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
          }(i);
        let p = pi,
          m = c ? -c / 1e3 : 0;
        const f = l / (2 * Math.sqrt(a * u));

        function g() {
          const t = s - o,
            e = Math.sqrt(a / u) / 1e3;
          if (void 0 === n && (n = Math.min(Math.abs(s - o) / 100, .4)), f < 1) {
            const n = li(e, f);
            p = i => {
              const o = Math.exp(-f * e * i);
              return s - o * ((m + f * e * t) / n * Math.sin(n * i) + t * Math.cos(n * i))
            }
          } else if (1 === f) p = n => s - Math.exp(-e * n) * (t + (m + e * t) * n);
          else {
            const n = e * Math.sqrt(f * f - 1);
            p = i => {
              const o = Math.exp(-f * e * i),
                r = Math.min(n * i, 300);
              return s - o * ((m + f * e * t) * Math.sinh(r) + n * t * Math.cosh(r)) / n
            }
          }
        }
        return g(), {
          next: t => {
            const i = p(t);
            if (d) r.done = t >= h;
            else {
              let o = m;
              if (0 !== t)
                if (f < 1) {
                  const e = Math.max(0, t - 5);
                  o = $e(i - p(e), t - e)
                } else o = 0;
              const a = Math.abs(o) <= e,
                l = Math.abs(s - i) <= n;
              r.done = a && l
            }
            return r.value = r.done ? s : i, r
          },
          flipTarget: () => {
            m = -m, [o, s] = [s, o], g()
          }
        }
      }
      di.needsInterpolation = (t, e) => "string" == typeof t || "string" == typeof e;
      const pi = t => 0,
        mi = {
          decay: function({
            keyframes: t = [0],
            velocity: e = 0,
            power: n = .8,
            timeConstant: i = 350,
            restDelta: o = .5,
            modifyTarget: s
          }) {
            const r = t[0],
              a = {
                done: !1,
                value: r
              };
            let l = n * e;
            const u = r + l,
              c = void 0 === s ? u : s(u);
            return c !== u && (l = c - r), {
              next: t => {
                const e = -l * Math.exp(-t / i);
                return a.done = !(e > o || e < -o), a.value = a.done ? c : c + e, a
              },
              flipTarget: () => {}
            }
          },
          keyframes: ei,
          tween: ei,
          spring: di
        };

      function fi(t, e, n = 0) {
        return t - e - n
      }
      const gi = t => {
        const e = ({
          delta: e
        }) => t(e);
        return {
          start: () => Re.update(e, !0),
          stop: () => Le.update(e)
        }
      };

      function vi({
        duration: t,
        driver: e = gi,
        elapsed: n = 0,
        repeat: i = 0,
        repeatType: o = "loop",
        repeatDelay: s = 0,
        keyframes: r,
        autoplay: a = !0,
        onPlay: l,
        onStop: u,
        onComplete: c,
        onRepeat: h,
        onUpdate: d,
        type: p = "keyframes",
        ...m
      }) {
        var f, g;
        let v, y, x, b = 0,
          w = t,
          T = !1,
          V = !0;
        const E = mi[r.length > 2 ? "keyframes" : p],
          P = r[0],
          S = r[r.length - 1];
        (null === (g = (f = E).needsInterpolation) || void 0 === g ? void 0 : g.call(f, P, S)) && (x = Wn([0, 100], [P, S], {
          clamp: !1
        }), r = [0, 100]);
        const A = E({
          ...m,
          duration: t,
          keyframes: r
        });
        return a && (l && l(), v = e((function(t) {
          if (V || (t = -t), n += t, !T) {
            const t = A.next(Math.max(0, n));
            y = t.value, x && (y = x(y)), T = V ? t.done : n <= 0
          }
          d && d(y), T && (0 === b && (w = void 0 !== w ? w : n), b < i ? function(t, e, n, i) {
            return i ? t >= e + n : t <= -n
          }(n, w, s, V) && (b++, "reverse" === o ? (V = b % 2 == 0, n = function(t, e = 0, n = 0, i = !0) {
            return i ? fi(e + -t, e, n) : e - (t - e) + n
          }(n, w, s, V)) : (n = fi(n, w, s), "mirror" === o && A.flipTarget()), T = !1, h && h()) : (v.stop(), c && c()))
        })), v.start()), {
          stop: () => {
            u && u(), v.stop()
          },
          sample: t => A.next(Math.max(0, t))
        }
      }
      const yi = ([t, e, n, i]) => `cubic-bezier(${t}, ${e}, ${n}, ${i})`,
        xi = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: yi([0, .65, .55, 1]),
          circOut: yi([.55, 0, 1, .45]),
          backIn: yi([.31, .01, .66, -.59]),
          backOut: yi([.33, 1.53, .69, .99])
        };

      function bi(t) {
        if (t) return Array.isArray(t) ? yi(t) : xi[t]
      }

      function wi(t, e) {
        const n = performance.now(),
          i = ({
            timestamp: o
          }) => {
            const s = o - n;
            s >= e && (Le.read(i), t(s - e))
          };
        return Re.read(i, !0), () => Le.read(i)
      }

      function Ti({
        keyframes: t,
        elapsed: e,
        onUpdate: n,
        onComplete: i
      }) {
        const o = () => (n && n(t[t.length - 1]), i && i(), () => {});
        return e ? wi(o, -e) : o()
      }
      const Vi = () => ({
          type: "spring",
          stiffness: 500,
          damping: 25,
          restSpeed: 10
        }),
        Ei = t => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === t ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10
        }),
        Pi = () => ({
          type: "keyframes",
          ease: "linear",
          duration: .3
        }),
        Si = {
          type: "keyframes",
          duration: .8
        },
        Ai = {
          x: Vi,
          y: Vi,
          z: Vi,
          rotate: Vi,
          rotateX: Vi,
          rotateY: Vi,
          rotateZ: Vi,
          scaleX: Ei,
          scaleY: Ei,
          scale: Ei,
          opacity: Pi,
          backgroundColor: Pi,
          color: Pi,
          default: Ei
        },
        Ci = (t, {
          keyframes: e
        }) => e.length > 2 ? Si : (Ai[t] || Ai.default)(e[1]),
        Mi = (t, e) => !("zIndex" === t || "number" != typeof e && !Array.isArray(e) && ("string" != typeof e || !on.test(e) || e.startsWith("url(")));

      function ki(t) {
        return 0 === t || "string" == typeof t && 0 === parseFloat(t) && -1 === t.indexOf(" ")
      }

      function Di(t) {
        return "number" == typeof t ? 0 : hn("", t)
      }

      function Ri(t, e) {
        return t[e] || t.default || t
      }
      const Li = {
          waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate")
        },
        Bi = {},
        Ii = {};
      for (const t in Li) Ii[t] = () => (void 0 === Bi[t] && (Bi[t] = Li[t]()), Bi[t]);
      const Fi = new Set(["opacity"]),
        ji = (t, e, n, i = {}) => o => {
          const s = Ri(i, t) || {},
            r = s.delay || i.delay || 0;
          let {
            elapsed: a = 0
          } = i;
          a -= Pn(r);
          const l = function(t, e, n, i) {
              const o = Mi(e, n);
              let s = void 0 !== i.from ? i.from : t.get();
              return "none" === s && o && "string" == typeof n ? s = hn(e, n) : ki(s) && "string" == typeof n ? s = Di(n) : !Array.isArray(n) && ki(n) && "string" == typeof s && (n = Di(s)), Array.isArray(n) ? (null === n[0] && (n[0] = s), n) : [s, n]
            }(e, t, n, s),
            u = l[0],
            c = l[l.length - 1],
            h = Mi(t, u),
            d = Mi(t, c);
          (0, En.s)(h === d, `You are trying to animate ${t} from "${u}" to "${c}". ${u} is not an animatable value - to enable this animation set ${u} to a value animatable to ${c} via the \`style\` property.`);
          let p = {
            keyframes: l,
            velocity: e.getVelocity(),
            ...s,
            elapsed: a,
            onUpdate: t => {
              e.set(t), s.onUpdate && s.onUpdate(t)
            },
            onComplete: () => {
              o(), s.onComplete && s.onComplete()
            }
          };
          if (!h || !d || !1 === s.type) return Ti(p);
          if ("inertia" === s.type) {
            const t = function({
              keyframes: t,
              velocity: e = 0,
              min: n,
              max: i,
              power: o = .8,
              timeConstant: s = 750,
              bounceStiffness: r = 500,
              bounceDamping: a = 10,
              restDelta: l = 1,
              modifyTarget: u,
              driver: c,
              onUpdate: h,
              onComplete: d,
              onStop: p
            }) {
              const m = t[0];
              let f;

              function g(t) {
                return void 0 !== n && t < n || void 0 !== i && t > i
              }

              function v(t) {
                return void 0 === n ? i : void 0 === i || Math.abs(n - t) < Math.abs(i - t) ? n : i
              }

              function y(t) {
                null == f || f.stop(), f = vi({
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
                  stiffness: r,
                  damping: a,
                  restDelta: l,
                  ...t
                })
              }
              if (g(m)) x({
                velocity: e,
                keyframes: [m, v(m)]
              });
              else {
                let t = o * e + m;
                void 0 !== u && (t = u(t));
                const i = v(t),
                  r = i === n ? -1 : 1;
                let a, c;
                const h = t => {
                  a = c, c = t, e = $e(t - a, Ve.delta), (1 === r && t > i || -1 === r && t < i) && x({
                    keyframes: [t, i],
                    velocity: e
                  })
                };
                y({
                  type: "decay",
                  keyframes: [m, 0],
                  velocity: e,
                  timeConstant: s,
                  power: o,
                  restDelta: l,
                  modifyTarget: u,
                  onUpdate: g(t) ? h : void 0
                })
              }
              return {
                stop: () => null == f ? void 0 : f.stop()
              }
            }(p);
            return () => t.stop()
          }(function({
            when: t,
            delay: e,
            delayChildren: n,
            staggerChildren: i,
            staggerDirection: o,
            repeat: s,
            repeatType: r,
            repeatDelay: a,
            from: l,
            ...u
          }) {
            return !!Object.keys(u).length
          })(s) || (p = {
            ...p,
            ...Ci(t, p)
          }), p.duration && (p.duration = Pn(p.duration)), p.repeatDelay && (p.repeatDelay = Pn(p.repeatDelay));
          const m = e.owner,
            f = m && m.current;
          if (Ii.waapi() && Fi.has(t) && !p.repeatDelay && "mirror" !== p.repeatType && 0 !== p.damping && m && f instanceof HTMLElement && !m.getProps().onUpdate) return function(t, e, {
            onUpdate: n,
            onComplete: i,
            ...o
          }) {
            let {
              keyframes: s,
              duration: r = .3,
              elapsed: a = 0,
              ease: l
            } = o;
            if ("spring" === o.type || !(!(u = o.ease) || Array.isArray(u) || "string" == typeof u && xi[u])) {
              const t = vi(o);
              let e = {
                done: !1,
                value: s[0]
              };
              const n = [];
              let i = 0;
              for (; !e.done;) e = t.sample(i), n.push(e.value), i += 10;
              s = n, r = i - 10, l = "linear"
            }
            var u;
            const c = function(t, e, n, {
              delay: i = 0,
              duration: o,
              repeat: s = 0,
              repeatType: r = "loop",
              ease: a,
              times: l
            } = {}) {
              return t.animate({
                [e]: n,
                offset: l
              }, {
                delay: i,
                duration: o,
                easing: bi(a),
                fill: "both",
                iterations: s + 1,
                direction: "reverse" === r ? "alternate" : "normal"
              })
            }(t.owner.current, e, s, {
              ...o,
              delay: -a,
              duration: r,
              ease: l
            });
            return c.onfinish = () => {
              t.set(s[s.length - 1]), i && i()
            }, () => {
              const {
                currentTime: e
              } = c;
              if (e) {
                const n = vi(o);
                t.setWithVelocity(n.sample(e - 10).value, n.sample(e).value, 10)
              }
              Re.update((() => c.cancel()))
            }
          }(e, t, p); {
            const t = vi(p);
            return () => t.stop()
          }
        };

      function Oi(t, e, n = {}) {
        var i;
        const o = vn(t, e, n.custom);
        let {
          transition: s = t.getDefaultTransition() || {}
        } = o || {};
        n.transitionOverride && (s = n.transitionOverride);
        const r = o ? () => Ui(t, o, n) : () => Promise.resolve(),
          a = (null === (i = t.variantChildren) || void 0 === i ? void 0 : i.size) ? (i = 0) => {
            const {
              delayChildren: o = 0,
              staggerChildren: r,
              staggerDirection: a
            } = s;
            return function(t, e, n = 0, i = 0, o = 1, s) {
              const r = [],
                a = (t.variantChildren.size - 1) * i,
                l = 1 === o ? (t = 0) => t * i : (t = 0) => a - t * i;
              return Array.from(t.variantChildren).sort(Ni).forEach(((t, i) => {
                r.push(Oi(t, e, {
                  ...s,
                  delay: n + l(i)
                }).then((() => t.notify("AnimationComplete", e))))
              })), Promise.all(r)
            }(t, e, o + i, r, a, n)
          } : () => Promise.resolve(),
          {
            when: l
          } = s;
        if (l) {
          const [t, e] = "beforeChildren" === l ? [r, a] : [a, r];
          return t().then(e)
        }
        return Promise.all([r(), a(n.delay)])
      }

      function Ui(t, e, {
        delay: n = 0,
        transitionOverride: i,
        type: o
      } = {}) {
        var s;
        let {
          transition: r = t.getDefaultTransition(),
          transitionEnd: a,
          ...l
        } = t.makeTargetAnimatable(e);
        const u = t.getValue("willChange");
        i && (r = i);
        const c = [],
          h = o && (null === (s = t.animationState) || void 0 === s ? void 0 : s.getState()[o]);
        for (const e in l) {
          const i = t.getValue(e),
            o = l[e];
          if (!i || void 0 === o || h && $i(h, e)) continue;
          let s = {
            delay: n,
            elapsed: 0,
            ...r
          };
          if (t.shouldReduceMotion && L.has(e) && (s = {
              ...s,
              type: !1,
              delay: 0
            }), !i.hasAnimated) {
            const n = t.getProps()[Vn];
            n && (s.elapsed = Tn(n, e))
          }
          let a = i.start(ji(e, i, o, s));
          bn(u) && (u.add(e), a = a.then((() => u.remove(e)))), c.push(a)
        }
        return Promise.all(c).then((() => {
          a && function(t, e) {
            const n = vn(t, e);
            let {
              transitionEnd: i = {},
              transition: o = {},
              ...s
            } = n ? t.makeTargetAnimatable(n, !1) : {};
            s = {
              ...s,
              ...i
            };
            for (const e in s) yn(t, e, Mt(s[e]))
          }(t, a)
        }))
      }

      function Ni(t, e) {
        return t.sortNodePosition(e)
      }

      function $i({
        protectedKeys: t,
        needsAnimating: e
      }, n) {
        const i = t.hasOwnProperty(n) && !0 !== e[n];
        return e[n] = !1, i
      }
      const zi = [It.Animate, It.InView, It.Focus, It.Hover, It.Tap, It.Drag, It.Exit],
        Wi = [...zi].reverse(),
        Yi = zi.length;

      function Hi(t) {
        let e = function(t) {
          return e => Promise.all(e.map((({
            animation: e,
            options: n
          }) => function(t, e, n = {}) {
            let i;
            if (t.notify("AnimationStart", e), Array.isArray(e)) {
              const o = e.map((e => Oi(t, e, n)));
              i = Promise.all(o)
            } else if ("string" == typeof e) i = Oi(t, e, n);
            else {
              const o = "function" == typeof e ? vn(t, e, n.custom) : e;
              i = Ui(t, o, n)
            }
            return i.then((() => t.notify("AnimationComplete", e)))
          }(t, e, n))))
        }(t);
        const n = {
          [It.Animate]: Xi(!0),
          [It.InView]: Xi(),
          [It.Hover]: Xi(),
          [It.Tap]: Xi(),
          [It.Drag]: Xi(),
          [It.Focus]: Xi(),
          [It.Exit]: Xi()
        };
        let i = !0;
        const o = (e, n) => {
          const i = vn(t, n);
          if (i) {
            const {
              transition: t,
              transitionEnd: n,
              ...o
            } = i;
            e = {
              ...e,
              ...o,
              ...n
            }
          }
          return e
        };

        function s(s, r) {
          const a = t.getProps(),
            l = t.getVariantContext(!0) || {},
            u = [],
            c = new Set;
          let p = {},
            m = 1 / 0;
          for (let e = 0; e < Yi; e++) {
            const v = Wi[e],
              y = n[v],
              x = void 0 !== a[v] ? a[v] : l[v],
              b = h(x),
              w = v === r ? y.isActive : null;
            !1 === w && (m = e);
            let T = x === l[v] && x !== a[v] && b;
            if (T && i && t.manuallyAnimateOnMount && (T = !1), y.protectedKeys = {
                ...p
              }, !y.isActive && null === w || !x && !y.prevProp || d(x) || "boolean" == typeof x) continue;
            const V = (f = y.prevProp, "string" == typeof(g = x) ? g !== f : !!Array.isArray(g) && !Te(g, f));
            let E = V || v === r && y.isActive && !T && b || e > m && b;
            const P = Array.isArray(x) ? x : [x];
            let S = P.reduce(o, {});
            !1 === w && (S = {});
            const {
              prevResolvedValues: A = {}
            } = y, C = {
              ...A,
              ...S
            }, M = t => {
              E = !0, c.delete(t), y.needsAnimating[t] = !0
            };
            for (const t in C) {
              const e = S[t],
                n = A[t];
              p.hasOwnProperty(t) || (e !== n ? At(e) && At(n) ? !Te(e, n) || V ? M(t) : y.protectedKeys[t] = !0 : void 0 !== e ? M(t) : c.add(t) : void 0 !== e && c.has(t) ? M(t) : y.protectedKeys[t] = !0)
            }
            y.prevProp = x, y.prevResolvedValues = S, y.isActive && (p = {
              ...p,
              ...S
            }), i && t.blockInitialAnimation && (E = !1), E && !T && u.push(...P.map((t => ({
              animation: t,
              options: {
                type: v,
                ...s
              }
            }))))
          }
          var f, g;
          if (c.size) {
            const e = {};
            c.forEach((n => {
              const i = t.getBaseTarget(n);
              void 0 !== i && (e[n] = i)
            })), u.push({
              animation: e
            })
          }
          let v = Boolean(u.length);
          return i && !1 === a.initial && !t.manuallyAnimateOnMount && (v = !1), i = !1, v ? e(u) : Promise.resolve()
        }
        return {
          animateChanges: s,
          setActive: function(e, i, o) {
            var r;
            if (n[e].isActive === i) return Promise.resolve();
            null === (r = t.variantChildren) || void 0 === r || r.forEach((t => {
              var n;
              return null === (n = t.animationState) || void 0 === n ? void 0 : n.setActive(e, i)
            })), n[e].isActive = i;
            const a = s(o, e);
            for (const t in n) n[t].protectedKeys = {};
            return a
          },
          setAnimateFunction: function(n) {
            e = n(t)
          },
          getState: () => n
        }
      }

      function Xi(t = !1) {
        return {
          isActive: t,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {}
        }
      }
      const _i = {
          animation: xe((({
            visualElement: t,
            animate: e
          }) => {
            t.animationState || (t.animationState = Hi(t)), d(e) && (0, i.useEffect)((() => e.subscribe(t)), [e])
          })),
          exit: xe((t => {
            const {
              custom: e,
              visualElement: n
            } = t, [o, s] = we(), a = (0, i.useContext)(r);
            (0, i.useEffect)((() => {
              n.isPresent = o;
              const t = n.animationState && n.animationState.setActive(It.Exit, !o, {
                custom: a && a.custom || e
              });
              t && !o && t.then(s)
            }), [o])
          }))
        },
        Gi = (t, e) => Math.abs(t - e);
      class qi {
        constructor(t, e, {
          transformPagePoint: n
        } = {}) {
          if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = () => {
              if (!this.lastMoveEvent || !this.lastMoveEventInfo) return;
              const t = Ji(this.lastMoveEventInfo, this.history),
                e = null !== this.startEvent,
                n = function(t, e) {
                  const n = Gi(t.x, e.x),
                    i = Gi(t.y, e.y);
                  return Math.sqrt(n ** 2 + i ** 2)
                }(t.offset, {
                  x: 0,
                  y: 0
                }) >= 3;
              if (!e && !n) return;
              const {
                point: i
              } = t, {
                timestamp: o
              } = Ve;
              this.history.push({
                ...i,
                timestamp: o
              });
              const {
                onStart: s,
                onMove: r
              } = this.handlers;
              e || (s && s(this.lastMoveEvent, t), this.startEvent = this.lastMoveEvent), r && r(this.lastMoveEvent, t)
            }, this.handlePointerMove = (t, e) => {
              this.lastMoveEvent = t, this.lastMoveEventInfo = Zi(e, this.transformPagePoint), Ot(t) && 0 === t.buttons ? this.handlePointerUp(t, e) : Re.update(this.updatePoint, !0)
            }, this.handlePointerUp = (t, e) => {
              this.end();
              const {
                onEnd: n,
                onSessionEnd: i
              } = this.handlers, o = Ji(Zi(e, this.transformPagePoint), this.history);
              this.startEvent && n && n(t, o), i && i(t, o)
            }, Ut(t) && t.touches.length > 1) return;
          this.handlers = e, this.transformPagePoint = n;
          const i = Zi(Wt(t), this.transformPagePoint),
            {
              point: o
            } = i,
            {
              timestamp: s
            } = Ve;
          this.history = [{
            ...o,
            timestamp: s
          }];
          const {
            onSessionStart: r
          } = e;
          r && r(t, Ji(i, this.history)), this.removeListeners = le(Kt(window, "pointermove", this.handlePointerMove), Kt(window, "pointerup", this.handlePointerUp), Kt(window, "pointercancel", this.handlePointerUp))
        }
        updateHandlers(t) {
          this.handlers = t
        }
        end() {
          this.removeListeners && this.removeListeners(), Le.update(this.updatePoint)
        }
      }

      function Zi(t, e) {
        return e ? {
          point: e(t.point)
        } : t
      }

      function Ki(t, e) {
        return {
          x: t.x - e.x,
          y: t.y - e.y
        }
      }

      function Ji({
        point: t
      }, e) {
        return {
          point: t,
          delta: Ki(t, to(e)),
          offset: Ki(t, Qi(e)),
          velocity: eo(e, .1)
        }
      }

      function Qi(t) {
        return t[0]
      }

      function to(t) {
        return t[t.length - 1]
      }

      function eo(t, e) {
        if (t.length < 2) return {
          x: 0,
          y: 0
        };
        let n = t.length - 1,
          i = null;
        const o = to(t);
        for (; n >= 0 && (i = t[n], !(o.timestamp - i.timestamp > Pn(e)));) n--;
        if (!i) return {
          x: 0,
          y: 0
        };
        const s = (o.timestamp - i.timestamp) / 1e3;
        if (0 === s) return {
          x: 0,
          y: 0
        };
        const r = {
          x: (o.x - i.x) / s,
          y: (o.y - i.y) / s
        };
        return r.x === 1 / 0 && (r.x = 0), r.y === 1 / 0 && (r.y = 0), r
      }

      function no(t) {
        return t.max - t.min
      }

      function io(t, e = 0, n = .01) {
        return Math.abs(t - e) <= n
      }

      function oo(t, e, n, i = .5) {
        t.origin = i, t.originPoint = Dn(e.min, e.max, t.origin), t.scale = no(n) / no(e), (io(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1), t.translate = Dn(n.min, n.max, t.origin) - t.originPoint, (io(t.translate) || isNaN(t.translate)) && (t.translate = 0)
      }

      function so(t, e, n, i) {
        oo(t.x, e.x, n.x, null == i ? void 0 : i.originX), oo(t.y, e.y, n.y, null == i ? void 0 : i.originY)
      }

      function ro(t, e, n) {
        t.min = n.min + e.min, t.max = t.min + no(e)
      }

      function ao(t, e, n) {
        t.min = e.min - n.min, t.max = t.min + no(e)
      }

      function lo(t, e, n) {
        ao(t.x, e.x, n.x), ao(t.y, e.y, n.y)
      }

      function uo(t, e, n) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== n ? t.max + n - (t.max - t.min) : void 0
        }
      }

      function co(t, e) {
        let n = e.min - t.min,
          i = e.max - t.max;
        return e.max - e.min < t.max - t.min && ([n, i] = [i, n]), {
          min: n,
          max: i
        }
      }
      const ho = .35;

      function po(t, e, n) {
        return {
          min: mo(t, e),
          max: mo(t, n)
        }
      }

      function mo(t, e) {
        return "number" == typeof t ? t : t[e] || 0
      }
      const fo = () => ({
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
        go = () => ({
          x: {
            min: 0,
            max: 0
          },
          y: {
            min: 0,
            max: 0
          }
        });

      function vo(t) {
        return [t("x"), t("y")]
      }

      function yo({
        top: t,
        left: e,
        right: n,
        bottom: i
      }) {
        return {
          x: {
            min: e,
            max: n
          },
          y: {
            min: t,
            max: i
          }
        }
      }

      function xo(t) {
        return void 0 === t || 1 === t
      }

      function bo({
        scale: t,
        scaleX: e,
        scaleY: n
      }) {
        return !xo(t) || !xo(e) || !xo(n)
      }

      function wo(t) {
        return bo(t) || To(t) || t.z || t.rotate || t.rotateX || t.rotateY
      }

      function To(t) {
        return Vo(t.x) || Vo(t.y)
      }

      function Vo(t) {
        return t && "0%" !== t
      }

      function Eo(t, e, n) {
        return n + e * (t - n)
      }

      function Po(t, e, n, i, o) {
        return void 0 !== o && (t = Eo(t, o, i)), Eo(t, n, i) + e
      }

      function So(t, e = 0, n = 1, i, o) {
        t.min = Po(t.min, e, n, i, o), t.max = Po(t.max, e, n, i, o)
      }

      function Ao(t, {
        x: e,
        y: n
      }) {
        So(t.x, e.translate, e.scale, e.originPoint), So(t.y, n.translate, n.scale, n.originPoint)
      }

      function Co(t) {
        return Number.isInteger(t) || t > 1.0000000000001 || t < .999999999999 ? t : 1
      }

      function Mo(t, e) {
        t.min = t.min + e, t.max = t.max + e
      }

      function ko(t, e, [n, i, o]) {
        const s = void 0 !== e[o] ? e[o] : .5,
          r = Dn(t.min, t.max, s);
        So(t, e[n], e[i], r, e.scale)
      }
      const Do = ["x", "scaleX", "originX"],
        Ro = ["y", "scaleY", "originY"];

      function Lo(t, e) {
        ko(t.x, e, Do), ko(t.y, e, Ro)
      }

      function Bo(t, e) {
        return yo(function(t, e) {
          if (!e) return t;
          const n = e({
              x: t.left,
              y: t.top
            }),
            i = e({
              x: t.right,
              y: t.bottom
            });
          return {
            top: n.y,
            left: n.x,
            bottom: i.y,
            right: i.x
          }
        }(t.getBoundingClientRect(), e))
      }
      const Io = new WeakMap;
      class Fo {
        constructor(t) {
          this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
            x: 0,
            y: 0
          }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = go(), this.visualElement = t
        }
        start(t, {
          snapToCursor: e = !1
        } = {}) {
          !1 !== this.visualElement.isPresent && (this.panSession = new qi(t, {
            onSessionStart: t => {
              this.stopAnimation(), e && this.snapToCursor(Wt(t, "page").point)
            },
            onStart: (t, e) => {
              var n;
              const {
                drag: i,
                dragPropagation: o,
                onDragStart: s
              } = this.getProps();
              (!i || o || (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = ne(i), this.openGlobalLock)) && (this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), vo((t => {
                var e, n;
                let i = this.getAxisMotionValue(t).get() || 0;
                if (K.test(i)) {
                  const o = null === (n = null === (e = this.visualElement.projection) || void 0 === e ? void 0 : e.layout) || void 0 === n ? void 0 : n.layoutBox[t];
                  o && (i = no(o) * (parseFloat(i) / 100))
                }
                this.originPoint[t] = i
              })), null == s || s(t, e), null === (n = this.visualElement.animationState) || void 0 === n || n.setActive(It.Drag, !0))
            },
            onMove: (t, e) => {
              const {
                dragPropagation: n,
                dragDirectionLock: i,
                onDirectionLock: o,
                onDrag: s
              } = this.getProps();
              if (!n && !this.openGlobalLock) return;
              const {
                offset: r
              } = e;
              if (i && null === this.currentDirection) return this.currentDirection = function(t, e = 10) {
                let n = null;
                return Math.abs(t.y) > e ? n = "y" : Math.abs(t.x) > e && (n = "x"), n
              }(r), void(null !== this.currentDirection && (null == o || o(this.currentDirection)));
              this.updateAxis("x", e.point, r), this.updateAxis("y", e.point, r), this.visualElement.render(), null == s || s(t, e)
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
            velocity: i
          } = e;
          this.startAnimation(i);
          const {
            onDragEnd: o
          } = this.getProps();
          null == o || o(t, e)
        }
        cancel() {
          var t, e;
          this.isDragging = !1, this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !1), null === (t = this.panSession) || void 0 === t || t.end(), this.panSession = void 0;
          const {
            dragPropagation: n
          } = this.getProps();
          !n && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), null === (e = this.visualElement.animationState) || void 0 === e || e.setActive(It.Drag, !1)
        }
        updateAxis(t, e, n) {
          const {
            drag: i
          } = this.getProps();
          if (!n || !jo(t, i, this.currentDirection)) return;
          const o = this.getAxisMotionValue(t);
          let s = this.originPoint[t] + n[t];
          this.constraints && this.constraints[t] && (s = function(t, {
            min: e,
            max: n
          }, i) {
            return void 0 !== e && t < e ? t = i ? Dn(e, t, i.min) : Math.max(t, e) : void 0 !== n && t > n && (t = i ? Dn(n, t, i.max) : Math.min(t, n)), t
          }(s, this.constraints[t], this.elastic[t])), o.set(s)
        }
        resolveConstraints() {
          const {
            dragConstraints: t,
            dragElastic: e
          } = this.getProps(), {
            layout: n
          } = this.visualElement.projection || {}, i = this.constraints;
          t && c(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : this.constraints = !(!t || !n) && function(t, {
            top: e,
            left: n,
            bottom: i,
            right: o
          }) {
            return {
              x: uo(t.x, n, o),
              y: uo(t.y, e, i)
            }
          }(n.layoutBox, t), this.elastic = function(t = ho) {
            return !1 === t ? t = 0 : !0 === t && (t = ho), {
              x: po(t, "left", "right"),
              y: po(t, "top", "bottom")
            }
          }(e), i !== this.constraints && n && this.constraints && !this.hasMutatedConstraints && vo((t => {
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
          if (!t || !c(t)) return !1;
          const n = t.current;
          (0, En.O)(null !== n, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
          const {
            projection: i
          } = this.visualElement;
          if (!i || !i.layout) return !1;
          const o = function(t, e, n) {
            const i = Bo(t, n),
              {
                scroll: o
              } = e;
            return o && (Mo(i.x, o.offset.x), Mo(i.y, o.offset.y)), i
          }(n, i.root, this.visualElement.getTransformPagePoint());
          let s = function(t, e) {
            return {
              x: co(t.x, e.x),
              y: co(t.y, e.y)
            }
          }(i.layout.layoutBox, o);
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
            }(s));
            this.hasMutatedConstraints = !!t, t && (s = yo(t))
          }
          return s
        }
        startAnimation(t) {
          const {
            drag: e,
            dragMomentum: n,
            dragElastic: i,
            dragTransition: o,
            dragSnapToOrigin: s,
            onDragTransitionEnd: r
          } = this.getProps(), a = this.constraints || {}, l = vo((r => {
            if (!jo(r, e, this.currentDirection)) return;
            let l = (null == a ? void 0 : a[r]) || {};
            s && (l = {
              min: 0,
              max: 0
            });
            const u = i ? 200 : 1e6,
              c = i ? 40 : 1e7,
              h = {
                type: "inertia",
                velocity: n ? t[r] : 0,
                bounceStiffness: u,
                bounceDamping: c,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...o,
                ...l
              };
            return this.startAxisValueAnimation(r, h)
          }));
          return Promise.all(l).then(r)
        }
        startAxisValueAnimation(t, e) {
          const n = this.getAxisMotionValue(t);
          return n.start(ji(t, n, 0, e))
        }
        stopAnimation() {
          vo((t => this.getAxisMotionValue(t).stop()))
        }
        getAxisMotionValue(t) {
          var e;
          const n = "_drag" + t.toUpperCase();
          return this.visualElement.getProps()[n] || this.visualElement.getValue(t, (null === (e = this.visualElement.getProps().initial) || void 0 === e ? void 0 : e[t]) || 0)
        }
        snapToCursor(t) {
          vo((e => {
            const {
              drag: n
            } = this.getProps();
            if (!jo(e, n, this.currentDirection)) return;
            const {
              projection: i
            } = this.visualElement, o = this.getAxisMotionValue(e);
            if (i && i.layout) {
              const {
                min: n,
                max: s
              } = i.layout.layoutBox[e];
              o.set(t[e] - Dn(n, s, .5))
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
            projection: i
          } = this.visualElement;
          if (!c(n) || !i || !this.constraints) return;
          this.stopAnimation();
          const o = {
            x: 0,
            y: 0
          };
          vo((t => {
            const e = this.getAxisMotionValue(t);
            if (e) {
              const n = e.get();
              o[t] = function(t, e) {
                let n = .5;
                const i = no(t),
                  o = no(e);
                return o > i ? n = $n(e.min, e.max - i, t.min) : i > o && (n = $n(t.min, t.max - o, e.min)), N(0, 1, n)
              }({
                min: n,
                max: n
              }, this.constraints[t])
            }
          }));
          const {
            transformTemplate: s
          } = this.visualElement.getProps();
          this.visualElement.current.style.transform = s ? s({}, "") : "none", null === (t = i.root) || void 0 === t || t.updateScroll(), i.updateLayout(), this.resolveConstraints(), vo((t => {
            if (!jo(t, e, null)) return;
            const n = this.getAxisMotionValue(t),
              {
                min: i,
                max: s
              } = this.constraints[t];
            n.set(Dn(i, s, o[t]))
          }))
        }
        addListeners() {
          var t;
          if (!this.visualElement.current) return;
          Io.set(this.visualElement, this);
          const e = Kt(this.visualElement.current, "pointerdown", (t => {
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
              c(t) && (this.constraints = this.resolveRefConstraints())
            },
            {
              projection: i
            } = this.visualElement,
            o = i.addEventListener("measure", n);
          i && !i.layout && (null === (t = i.root) || void 0 === t || t.updateScroll(), i.updateLayout()), n();
          const s = Ft(window, "resize", (() => this.scalePositionWithinConstraints())),
            r = i.addEventListener("didUpdate", (({
              delta: t,
              hasLayoutChanged: e
            }) => {
              this.isDragging && e && (vo((e => {
                const n = this.getAxisMotionValue(e);
                n && (this.originPoint[e] += t[e].translate, n.set(n.get() + t[e].translate))
              })), this.visualElement.render())
            }));
          return () => {
            s(), e(), o(), null == r || r()
          }
        }
        getProps() {
          const t = this.visualElement.getProps(),
            {
              drag: e = !1,
              dragDirectionLock: n = !1,
              dragPropagation: i = !1,
              dragConstraints: o = !1,
              dragElastic: s = ho,
              dragMomentum: r = !0
            } = t;
          return {
            ...t,
            drag: e,
            dragDirectionLock: n,
            dragPropagation: i,
            dragConstraints: o,
            dragElastic: s,
            dragMomentum: r
          }
        }
      }

      function jo(t, e, n) {
        return !(!0 !== e && e !== t || null !== n && n !== t)
      }
      const Oo = {
        pan: xe((function({
          onPan: t,
          onPanStart: e,
          onPanEnd: n,
          onPanSessionStart: s,
          visualElement: r
        }) {
          const a = t || e || n || s,
            l = (0, i.useRef)(null),
            {
              transformPagePoint: u
            } = (0, i.useContext)(o),
            c = {
              onSessionStart: s,
              onStart: e,
              onMove: t,
              onEnd: (t, e) => {
                l.current = null, n && n(t, e)
              }
            };
          (0, i.useEffect)((() => {
            null !== l.current && l.current.updateHandlers(c)
          })), Jt(r, "pointerdown", a && function(t) {
            l.current = new qi(t, c, {
              transformPagePoint: u
            })
          }), re((() => l.current && l.current.end()))
        })),
        drag: xe((function(t) {
          const {
            dragControls: e,
            visualElement: n
          } = t, o = x((() => new Fo(n)));
          (0, i.useEffect)((() => e && e.subscribe(o)), [o, e]), (0, i.useEffect)((() => o.addListeners()), [o])
        }))
      };

      function Uo(t) {
        return "string" == typeof t && t.startsWith("var(--")
      }
      const No = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;

      function $o(t, e, n = 1) {
        (0, En.O)(n <= 4, `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`);
        const [i, o] = function(t) {
          const e = No.exec(t);
          if (!e) return [, ];
          const [, n, i] = e;
          return [n, i]
        }(t);
        if (!i) return;
        const s = window.getComputedStyle(e).getPropertyValue(i);
        return s ? s.trim() : Uo(o) ? $o(o, e, n + 1) : o
      }
      const zo = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y"]),
        Wo = t => zo.has(t),
        Yo = (t, e) => {
          t.set(e, !1), t.set(e)
        },
        Ho = t => t === $ || t === J;
      var Xo;
      ! function(t) {
        t.width = "width", t.height = "height", t.left = "left", t.right = "right", t.top = "top", t.bottom = "bottom"
      }(Xo || (Xo = {}));
      const _o = (t, e) => parseFloat(t.split(", ")[e]),
        Go = (t, e) => (n, {
          transform: i
        }) => {
          if ("none" === i || !i) return 0;
          const o = i.match(/^matrix3d\((.+)\)$/);
          if (o) return _o(o[1], e); {
            const e = i.match(/^matrix\((.+)\)$/);
            return e ? _o(e[1], t) : 0
          }
        },
        qo = new Set(["x", "y", "z"]),
        Zo = R.filter((t => !qo.has(t))),
        Ko = {
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
          x: Go(4, 13),
          y: Go(5, 14)
        };

      function Jo(t, e, n, i) {
        return (t => Object.keys(t).some(Wo))(e) ? ((t, e, n = {}, i = {}) => {
          e = {
            ...e
          }, i = {
            ...i
          };
          const o = Object.keys(e).filter(Wo);
          let s = [],
            r = !1;
          const l = [];
          if (o.forEach((o => {
              const a = t.getValue(o);
              if (!t.hasValue(o)) return;
              let u = n[o],
                c = mn(u);
              const h = e[o];
              let d;
              if (At(h)) {
                const t = h.length,
                  e = null === h[0] ? 1 : 0;
                u = h[e], c = mn(u);
                for (let n = e; n < t; n++) d ? (0, En.O)(mn(h[n]) === d, "All keyframes must be of the same type") : (d = mn(h[n]), (0, En.O)(d === c || Ho(c) && Ho(d), "Keyframes must be of the same dimension as the current value"))
              } else d = mn(h);
              if (c !== d)
                if (Ho(c) && Ho(d)) {
                  const t = a.get();
                  "string" == typeof t && a.set(parseFloat(t)), "string" == typeof h ? e[o] = parseFloat(h) : Array.isArray(h) && d === J && (e[o] = h.map(parseFloat))
                } else(null == c ? void 0 : c.transform) && (null == d ? void 0 : d.transform) && (0 === u || 0 === h) ? 0 === u ? a.set(d.transform(u)) : e[o] = c.transform(h) : (r || (s = function(t) {
                  const e = [];
                  return Zo.forEach((n => {
                    const i = t.getValue(n);
                    void 0 !== i && (e.push([n, i.get()]), i.set(n.startsWith("scale") ? 1 : 0))
                  })), e.length && t.render(), e
                }(t), r = !0), l.push(o), i[o] = void 0 !== i[o] ? i[o] : e[o], Yo(a, h))
            })), l.length) {
            const n = l.indexOf("height") >= 0 ? window.pageYOffset : null,
              o = ((t, e, n) => {
                const i = e.measureViewportBox(),
                  o = e.current,
                  s = getComputedStyle(o),
                  {
                    display: r
                  } = s,
                  a = {};
                "none" === r && e.setStaticValue("display", t.display || "block"), n.forEach((t => {
                  a[t] = Ko[t](i, s)
                })), e.render();
                const l = e.measureViewportBox();
                return n.forEach((n => {
                  const i = e.getValue(n);
                  Yo(i, a[n]), t[n] = Ko[n](l, s)
                })), t
              })(e, t, l);
            return s.length && s.forEach((([e, n]) => {
              t.getValue(e).set(n)
            })), t.render(), a && null !== n && window.scrollTo({
              top: n
            }), {
              target: o,
              transitionEnd: i
            }
          }
          return {
            target: e,
            transitionEnd: i
          }
        })(t, e, n, i) : {
          target: e,
          transitionEnd: i
        }
      }
      const Qo = {
          current: null
        },
        ts = {
          current: !1
        },
        es = Object.keys(y),
        ns = es.length,
        is = ["AnimationStart", "AnimationComplete", "Update", "Unmount", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
      class os {
        constructor({
          parent: t,
          props: e,
          reducedMotionConfig: n,
          visualState: i
        }, o = {}) {
          this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.isPresent = !0, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
            this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
          }, this.scheduleRender = () => Re.render(this.render, !1, !0);
          const {
            latestValues: s,
            renderState: r
          } = i;
          this.latestValues = s, this.baseTarget = {
            ...s
          }, this.initialValues = e.initial ? {
            ...s
          } : {}, this.renderState = r, this.parent = t, this.props = e, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = n, this.options = o, this.isControllingVariants = m(e), this.isVariantNode = f(e), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = Boolean(t && t.current);
          const {
            willChange: a,
            ...l
          } = this.scrapeMotionValuesFromProps(e);
          for (const t in l) {
            const e = l[t];
            void 0 !== s[t] && I(e) && (e.set(s[t], !1), bn(a) && a.add(t))
          }
        }
        scrapeMotionValuesFromProps(t) {
          return {}
        }
        mount(t) {
          var e;
          this.current = t, this.projection && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = null === (e = this.parent) || void 0 === e ? void 0 : e.addVariantChild(this)), this.values.forEach(((t, e) => this.bindToMotionValue(e, t))), ts.current || function() {
            if (ts.current = !0, a)
              if (window.matchMedia) {
                const t = window.matchMedia("(prefers-reduced-motion)"),
                  e = () => Qo.current = t.matches;
                t.addListener(e), e()
              } else Qo.current = !1
          }(), this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || Qo.current), this.parent && this.parent.children.add(this), this.setProps(this.props)
        }
        unmount() {
          var t, e, n;
          null === (t = this.projection) || void 0 === t || t.unmount(), Le.update(this.notifyUpdate), Le.render(this.render), this.valueSubscriptions.forEach((t => t())), null === (e = this.removeFromVariantTree) || void 0 === e || e.call(this), null === (n = this.parent) || void 0 === n || n.children.delete(this);
          for (const t in this.events) this.events[t].clear();
          this.current = null
        }
        bindToMotionValue(t, e) {
          const n = L.has(t),
            i = e.on("change", (e => {
              this.latestValues[t] = e, this.props.onUpdate && Re.update(this.notifyUpdate, !1, !0), n && this.projection && (this.projection.isTransformDirty = !0)
            })),
            o = e.on("renderRequest", this.scheduleRender);
          this.valueSubscriptions.set(t, (() => {
            i(), o()
          }))
        }
        sortNodePosition(t) {
          return this.current && this.sortInstanceNodePosition && this.type === t.type ? this.sortInstanceNodePosition(this.current, t.current) : 0
        }
        loadFeatures(t, e, n, o, s, r) {
          const a = [];
          "production" !== ce && n && e && (0, En.O)(!1, "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.");
          for (let e = 0; e < ns; e++) {
            const n = es[e],
              {
                isEnabled: o,
                Component: s
              } = y[n];
            o(t) && s && a.push((0, i.createElement)(s, {
              key: n,
              ...t,
              visualElement: this
            }))
          }
          if (!this.projection && s) {
            this.projection = new s(o, this.latestValues, this.parent && this.parent.projection);
            const {
              layoutId: e,
              layout: n,
              drag: i,
              dragConstraints: a,
              layoutScroll: l
            } = t;
            this.projection.setOptions({
              layoutId: e,
              layout: n,
              alwaysMeasureLayout: Boolean(i) || a && c(a),
              visualElement: this,
              scheduleRender: () => this.scheduleRender(),
              animationType: "string" == typeof n ? n : "both",
              initialPromotionConfig: r,
              layoutScroll: l
            })
          }
          return a
        }
        triggerBuild() {
          this.build(this.renderState, this.latestValues, this.options, this.props)
        }
        measureViewportBox() {
          return this.current ? this.measureInstanceViewportBox(this.current, this.props) : go()
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
          for (let e = 0; e < is.length; e++) {
            const n = is[e];
            this.propEventSubscriptions[n] && (this.propEventSubscriptions[n](), delete this.propEventSubscriptions[n]);
            const i = t["on" + n];
            i && (this.propEventSubscriptions[n] = this.on(n, i))
          }
          this.prevMotionValues = function(t, e, n) {
            const {
              willChange: i
            } = e;
            for (const o in e) {
              const s = e[o],
                r = n[o];
              if (I(s)) t.addValue(o, s), bn(i) && i.add(o);
              else if (I(r)) t.addValue(o, We(s, {
                owner: t
              })), bn(i) && i.remove(o);
              else if (r !== s)
                if (t.hasValue(o)) {
                  const e = t.getValue(o);
                  !e.hasAnimated && e.set(s)
                } else {
                  const e = t.getStaticValue(o);
                  t.addValue(o, We(void 0 !== e ? e : s))
                }
            }
            for (const i in n) void 0 === e[i] && t.removeValue(i);
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
          const i = {};
          for (let t = 0; t < rs; t++) {
            const e = ss[t],
              n = this.props[e];
            (h(n) || !1 === n) && (i[e] = n)
          }
          return i
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
          return void 0 === n && void 0 !== e && (n = We(e, {
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
          } = this.props, i = "string" == typeof n || "object" == typeof n ? null === (e = St(this.props, n)) || void 0 === e ? void 0 : e[t] : void 0;
          if (n && void 0 !== i) return i;
          const o = this.getBaseTargetFromProps(this.props, t);
          return void 0 === o || I(o) ? void 0 !== this.initialValues[t] && void 0 === i ? void 0 : this.baseTarget[t] : o
        }
        on(t, e) {
          return this.events[t] || (this.events[t] = new Ne), this.events[t].add(e)
        }
        notify(t, ...e) {
          var n;
          null === (n = this.events[t]) || void 0 === n || n.notify(...e)
        }
      }
      const ss = ["initial", ...zi],
        rs = ss.length;
      class as extends os {
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
          transformValues: i
        }, o) {
          let s = function(t, e, n) {
            var i;
            const o = {};
            for (const s in t) {
              const t = xn(s, e);
              o[s] = void 0 !== t ? t : null === (i = n.getValue(s)) || void 0 === i ? void 0 : i.get()
            }
            return o
          }(n, t || {}, this);
          if (i && (e && (e = i(e)), n && (n = i(n)), s && (s = i(s))), o) {
            ! function(t, e, n) {
              var i, o;
              const s = Object.keys(e).filter((e => !t.hasValue(e))),
                r = s.length;
              if (r)
                for (let a = 0; a < r; a++) {
                  const r = s[a],
                    l = e[r];
                  let u = null;
                  Array.isArray(l) && (u = l[0]), null === u && (u = null !== (o = null !== (i = n[r]) && void 0 !== i ? i : t.readValue(r)) && void 0 !== o ? o : e[r]), null != u && ("string" == typeof u && (/^\-?\d*\.?\d+$/.test(u) || /^0[^.\s]+$/.test(u)) ? u = parseFloat(u) : !gn(u) && on.test(l) && (u = hn(r, l)), t.addValue(r, We(u, {
                    owner: t
                  })), void 0 === n[r] && (n[r] = u), null !== u && t.setBaseTarget(r, u))
                }
            }(this, n, s);
            const t = ((t, e, n, i) => {
              const o = function(t, {
                ...e
              }, n) {
                const i = t.current;
                if (!(i instanceof Element)) return {
                  target: e,
                  transitionEnd: n
                };
                n && (n = {
                  ...n
                }), t.values.forEach((t => {
                  const e = t.get();
                  if (!Uo(e)) return;
                  const n = $o(e, i);
                  n && t.set(n)
                }));
                for (const t in e) {
                  const o = e[t];
                  if (!Uo(o)) continue;
                  const s = $o(o, i);
                  s && (e[t] = s, n && void 0 === n[t] && (n[t] = o))
                }
                return {
                  target: e,
                  transitionEnd: n
                }
              }(t, e, i);
              return Jo(t, e = o.target, n, i = o.transitionEnd)
            })(this, n, s, e);
            e = t.transitionEnd, n = t.target
          }
          return {
            transition: t,
            transitionEnd: e,
            ...n
          }
        }
      }
      class ls extends as {
        readValueFromInstance(t, e) {
          if (L.has(e)) {
            const t = cn(e);
            return t && t.default || 0
          } {
            const i = (n = t, window.getComputedStyle(n)),
              o = (O(e) ? i.getPropertyValue(e) : i[e]) || 0;
            return "string" == typeof o ? o.trim() : o
          }
          var n
        }
        measureInstanceViewportBox(t, {
          transformPagePoint: e
        }) {
          return Bo(t, e)
        }
        build(t, e, n, i) {
          ot(t, e, n, i.transformTemplate)
        }
        scrapeMotionValuesFromProps(t) {
          return Et(t)
        }
        renderInstance(t, e, n, i) {
          wt(t, e, n, i)
        }
      }
      class us extends as {
        constructor() {
          super(...arguments), this.isSVGTag = !1
        }
        getBaseTargetFromProps(t, e) {
          return t[e]
        }
        readValueFromInstance(t, e) {
          var n;
          return L.has(e) ? (null === (n = cn(e)) || void 0 === n ? void 0 : n.default) || 0 : (e = Tt.has(e) ? e : bt(e), t.getAttribute(e))
        }
        measureInstanceViewportBox() {
          return go()
        }
        scrapeMotionValuesFromProps(t) {
          return Pt(t)
        }
        build(t, e, n, i) {
          ft(t, e, n, this.isSVGTag, i.transformTemplate)
        }
        renderInstance(t, e, n, i) {
          Vt(t, e, 0, i)
        }
        mount(t) {
          this.isSVGTag = vt(t.tagName), super.mount(t)
        }
      }
      const cs = (t, e) => k(t) ? new us(e, {
        enableHardwareAcceleration: !1
      }) : new ls(e, {
        enableHardwareAcceleration: !0
      });

      function hs(t, e) {
        return e.max === e.min ? 0 : t / (e.max - e.min) * 100
      }
      const ds = {
          correct: (t, e) => {
            if (!e.target) return t;
            if ("string" == typeof t) {
              if (!J.test(t)) return t;
              t = parseFloat(t)
            }
            return `${hs(t,e.target.x)}% ${hs(t,e.target.y)}%`
          }
        },
        ps = "_$css",
        ms = {
          correct: (t, {
            treeScale: e,
            projectionDelta: n
          }) => {
            const i = t,
              o = t.includes("var("),
              s = [];
            o && (t = t.replace(No, (t => (s.push(t), ps))));
            const r = on.parse(t);
            if (r.length > 5) return i;
            const a = on.createTransformer(t),
              l = "number" != typeof r[0] ? 1 : 0,
              u = n.x.scale * e.x,
              c = n.y.scale * e.y;
            r[0 + l] /= u, r[1 + l] /= c;
            const h = Dn(u, c, .5);
            "number" == typeof r[2 + l] && (r[2 + l] /= h), "number" == typeof r[3 + l] && (r[3 + l] /= h);
            let d = a(r);
            if (o) {
              let t = 0;
              d = d.replace(ps, (() => {
                const e = s[t];
                return t++, e
              }))
            }
            return d
          }
        };
      class fs extends i.Component {
        componentDidMount() {
          const {
            visualElement: t,
            layoutGroup: e,
            switchLayoutGroup: n,
            layoutId: i
          } = this.props, {
            projection: o
          } = t;
          var s;
          s = gs, Object.assign(D, s), o && (e.group && e.group.add(o), n && n.register && i && n.register(o), o.root.didUpdate(), o.addEventListener("animationComplete", (() => {
            this.safeToRemove()
          })), o.setOptions({
            ...o.options,
            onExitComplete: () => this.safeToRemove()
          })), b.hasEverUpdated = !0
        }
        getSnapshotBeforeUpdate(t) {
          const {
            layoutDependency: e,
            visualElement: n,
            drag: i,
            isPresent: o
          } = this.props, s = n.projection;
          return s ? (s.isPresent = o, i || t.layoutDependency !== e || void 0 === e ? s.willUpdate() : this.safeToRemove(), t.isPresent !== o && (o ? s.promote() : s.relegate() || Re.postRender((() => {
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
            switchLayoutGroup: n
          } = this.props, {
            projection: i
          } = t;
          i && (i.scheduleCheckAfterUnmount(), (null == e ? void 0 : e.group) && e.group.remove(i), (null == n ? void 0 : n.deregister) && n.deregister(i))
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
      const gs = {
          borderRadius: {
            ...ds,
            applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
          },
          borderTopLeftRadius: ds,
          borderTopRightRadius: ds,
          borderBottomLeftRadius: ds,
          borderBottomRightRadius: ds,
          boxShadow: ms
        },
        vs = {
          measureLayout: function(t) {
            const [e, n] = we(), o = (0, i.useContext)(T);
            return i.createElement(fs, {
              ...t,
              layoutGroup: o,
              switchLayoutGroup: (0, i.useContext)(E),
              isPresent: e,
              safeToRemove: n
            })
          }
        },
        ys = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        xs = ys.length,
        bs = t => "string" == typeof t ? parseFloat(t) : t,
        ws = t => "number" == typeof t || J.test(t);

      function Ts(t, e) {
        return void 0 !== t[e] ? t[e] : t.borderRadius
      }
      const Vs = Ps(0, .5, Gn),
        Es = Ps(.5, .95, Yn);

      function Ps(t, e, n) {
        return i => i < t ? 0 : i > e ? 1 : n($n(t, e, i))
      }

      function Ss(t, e) {
        t.min = e.min, t.max = e.max
      }

      function As(t, e) {
        Ss(t.x, e.x), Ss(t.y, e.y)
      }

      function Cs(t, e, n, i, o) {
        return t = Eo(t -= e, 1 / n, i), void 0 !== o && (t = Eo(t, 1 / o, i)), t
      }

      function Ms(t, e, [n, i, o], s, r) {
        ! function(t, e = 0, n = 1, i = .5, o, s = t, r = t) {
          if (K.test(e) && (e = parseFloat(e), e = Dn(r.min, r.max, e / 100) - r.min), "number" != typeof e) return;
          let a = Dn(s.min, s.max, i);
          t === s && (a -= e), t.min = Cs(t.min, e, n, a, o), t.max = Cs(t.max, e, n, a, o)
        }(t, e[n], e[i], e[o], e.scale, s, r)
      }
      const ks = ["x", "scaleX", "originX"],
        Ds = ["y", "scaleY", "originY"];

      function Rs(t, e, n, i) {
        Ms(t.x, e, ks, null == n ? void 0 : n.x, null == i ? void 0 : i.x), Ms(t.y, e, Ds, null == n ? void 0 : n.y, null == i ? void 0 : i.y)
      }

      function Ls(t) {
        return 0 === t.translate && 1 === t.scale
      }

      function Bs(t) {
        return Ls(t.x) && Ls(t.y)
      }

      function Is(t, e) {
        return t.x.min === e.x.min && t.x.max === e.x.max && t.y.min === e.y.min && t.y.max === e.y.max
      }

      function Fs(t) {
        return no(t.x) / no(t.y)
      }
      class js {
        constructor() {
          this.members = []
        }
        add(t) {
          Oe(this.members, t), t.scheduleRender()
        }
        remove(t) {
          if (Ue(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
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
          const i = this.lead;
          if (t !== i && (this.prevLead = i, this.lead = t, t.show(), i)) {
            i.instance && i.scheduleRender(), t.scheduleRender(), t.resumeFrom = i, e && (t.resumeFrom.preserveOpacity = !0), i.snapshot && (t.snapshot = i.snapshot, t.snapshot.latestValues = i.animationValues || i.latestValues), (null === (n = t.root) || void 0 === n ? void 0 : n.isUpdating) && (t.isLayoutDirty = !0);
            const {
              crossfade: o
            } = t.options;
            !1 === o && i.hide()
          }
        }
        exitAnimationComplete() {
          this.members.forEach((t => {
            var e, n, i, o, s;
            null === (n = (e = t.options).onExitComplete) || void 0 === n || n.call(e), null === (s = null === (i = t.resumingFrom) || void 0 === i ? void 0 : (o = i.options).onExitComplete) || void 0 === s || s.call(o)
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

      function Os(t, e, n) {
        let i = "";
        const o = t.x.translate / e.x,
          s = t.y.translate / e.y;
        if ((o || s) && (i = `translate3d(${o}px, ${s}px, 0) `), 1 === e.x && 1 === e.y || (i += `scale(${1/e.x}, ${1/e.y}) `), n) {
          const {
            rotate: t,
            rotateX: e,
            rotateY: o
          } = n;
          t && (i += `rotate(${t}deg) `), e && (i += `rotateX(${e}deg) `), o && (i += `rotateY(${o}deg) `)
        }
        const r = t.x.scale * e.x,
          a = t.y.scale * e.y;
        return 1 === r && 1 === a || (i += `scale(${r}, ${a})`), i || "none"
      }
      const Us = (t, e) => t.depth - e.depth;
      class Ns {
        constructor() {
          this.children = [], this.isDirty = !1
        }
        add(t) {
          Oe(this.children, t), this.isDirty = !0
        }
        remove(t) {
          Ue(this.children, t), this.isDirty = !0
        }
        forEach(t) {
          this.isDirty && this.children.sort(Us), this.isDirty = !1, this.children.forEach(t)
        }
      }
      const $s = ["", "X", "Y", "Z"];
      let zs = 0;

      function Ws({
        attachResizeListener: t,
        defaultParent: e,
        measureScroll: n,
        checkIsScrollRoot: i,
        resetTransform: o
      }) {
        return class {
          constructor(t, n = {}, i = (null == e ? void 0 : e())) {
            this.id = zs++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isTransformDirty = !1, this.isProjectionDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = {
              x: 1,
              y: 1
            }, this.eventHandlers = new Map, this.potentialNodes = new Map, this.checkUpdateFailed = () => {
              this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
            }, this.updateProjection = () => {
              this.nodes.forEach(Xs), this.nodes.forEach(Ks), this.nodes.forEach(Js)
            }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.elementId = t, this.latestValues = n, this.root = i ? i.root || i : this, this.path = i ? [...i.path, i] : [], this.parent = i, this.depth = i ? i.depth + 1 : 0, t && this.root.registerPotentialNode(t, this);
            for (let t = 0; t < this.path.length; t++) this.path[t].shouldResetTransform = !0;
            this.root === this && (this.nodes = new Ns)
          }
          addEventListener(t, e) {
            return this.eventHandlers.has(t) || this.eventHandlers.set(t, new Ne), this.eventHandlers.get(t).add(e)
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
            var i;
            if (this.instance) return;
            this.isSVG = e instanceof SVGElement && "svg" !== e.tagName, this.instance = e;
            const {
              layoutId: o,
              layout: s,
              visualElement: r
            } = this.options;
            if (r && !r.current && r.mount(e), this.root.nodes.add(this), null === (i = this.parent) || void 0 === i || i.children.add(this), this.elementId && this.root.potentialNodes.delete(this.elementId), n && (s || o) && (this.isLayoutDirty = !0), t) {
              let n;
              const i = () => this.root.updateBlockedByResize = !1;
              t(e, (() => {
                this.root.updateBlockedByResize = !0, n && n(), n = wi(i, 250), b.hasAnimatedSinceResize && (b.hasAnimatedSinceResize = !1, this.nodes.forEach(Zs))
              }))
            }
            o && this.root.registerSharedNode(o, this), !1 !== this.options.animate && r && (o || s) && this.addEventListener("didUpdate", (({
              delta: t,
              hasLayoutChanged: e,
              hasRelativeTargetChanged: n,
              layout: i
            }) => {
              var o, s, a, l, u;
              if (this.isTreeAnimationBlocked()) return this.target = void 0, void(this.relativeTarget = void 0);
              const c = null !== (s = null !== (o = this.options.transition) && void 0 !== o ? o : r.getDefaultTransition()) && void 0 !== s ? s : or,
                {
                  onLayoutAnimationStart: h,
                  onLayoutAnimationComplete: d
                } = r.getProps(),
                p = !this.targetLayout || !Is(this.targetLayout, i) || n,
                m = !e && n;
              if ((null === (a = this.resumeFrom) || void 0 === a ? void 0 : a.instance) || m || e && (p || !this.currentAnimation)) {
                this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(t, m);
                const e = {
                  ...Ri(c, "layout"),
                  onPlay: h,
                  onComplete: d
                };
                r.shouldReduceMotion && (e.delay = 0, e.type = !1), this.startAnimation(e)
              } else e || 0 !== this.animationProgress || Zs(this), this.isLead() && (null === (u = (l = this.options).onExitComplete) || void 0 === u || u.call(l));
              this.targetLayout = i
            }))
          }
          unmount() {
            var t, e;
            this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this), null === (t = this.getStack()) || void 0 === t || t.remove(this), null === (e = this.parent) || void 0 === e || e.children.delete(this), this.instance = void 0, Le.preRender(this.updateProjection)
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
            this.isUpdateBlocked() || (this.isUpdating = !0, null === (t = this.nodes) || void 0 === t || t.forEach(Qs), this.animationId++)
          }
          willUpdate(t = !0) {
            var e, n, i;
            if (this.root.isUpdateBlocked()) return void(null === (n = (e = this.options).onExitComplete) || void 0 === n || n.call(e));
            if (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
            this.isLayoutDirty = !0;
            for (let t = 0; t < this.path.length; t++) {
              const e = this.path[t];
              e.shouldResetTransform = !0, e.updateScroll("snapshot")
            }
            const {
              layoutId: o,
              layout: s
            } = this.options;
            if (void 0 === o && !s) return;
            const r = null === (i = this.options.visualElement) || void 0 === i ? void 0 : i.getProps().transformTemplate;
            this.prevTransformTemplateValue = null == r ? void 0 : r(this.latestValues, ""), this.updateSnapshot(), t && this.notifyListeners("willUpdate")
          }
          didUpdate() {
            if (this.isUpdateBlocked()) return this.unblockUpdate(), this.clearAllSnapshots(), void this.nodes.forEach(Gs);
            this.isUpdating && (this.isUpdating = !1, this.potentialNodes.size && (this.potentialNodes.forEach(sr), this.potentialNodes.clear()), this.nodes.forEach(qs), this.nodes.forEach(Ys), this.nodes.forEach(Hs), this.clearAllSnapshots(), Be.update(), Be.preRender(), Be.render())
          }
          clearAllSnapshots() {
            this.nodes.forEach(_s), this.sharedNodes.forEach(tr)
          }
          scheduleUpdateProjection() {
            Re.preRender(this.updateProjection, !1, !0)
          }
          scheduleCheckAfterUnmount() {
            Re.postRender((() => {
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
            this.layout = this.measure(!1), this.layoutCorrected = go(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox), null === (t = this.options.visualElement) || void 0 === t || t.notify("LayoutMeasure", this.layout.layoutBox, null == e ? void 0 : e.layoutBox)
          }
          updateScroll(t = "measure") {
            let e = Boolean(this.options.layoutScroll && this.instance);
            this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === t && (e = !1), e && (this.scroll = {
              animationId: this.root.animationId,
              phase: t,
              isRoot: i(this.instance),
              offset: n(this.instance)
            })
          }
          resetTransform() {
            var t;
            if (!o) return;
            const e = this.isLayoutDirty || this.shouldResetTransform,
              n = this.projectionDelta && !Bs(this.projectionDelta),
              i = null === (t = this.options.visualElement) || void 0 === t ? void 0 : t.getProps().transformTemplate,
              s = null == i ? void 0 : i(this.latestValues, ""),
              r = s !== this.prevTransformTemplateValue;
            e && (n || wo(this.latestValues) || r) && (o(this.instance, s), this.shouldResetTransform = !1, this.scheduleRender())
          }
          measure(t = !0) {
            const e = this.measurePageBox();
            let n = this.removeElementScroll(e);
            var i;
            return t && (n = this.removeTransform(n)), rr((i = n).x), rr(i.y), {
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
            if (!t) return go();
            const e = t.measureViewportBox(),
              {
                scroll: n
              } = this.root;
            return n && (Mo(e.x, n.offset.x), Mo(e.y, n.offset.y)), e
          }
          removeElementScroll(t) {
            const e = go();
            As(e, t);
            for (let n = 0; n < this.path.length; n++) {
              const i = this.path[n],
                {
                  scroll: o,
                  options: s
                } = i;
              if (i !== this.root && o && s.layoutScroll) {
                if (o.isRoot) {
                  As(e, t);
                  const {
                    scroll: n
                  } = this.root;
                  n && (Mo(e.x, -n.offset.x), Mo(e.y, -n.offset.y))
                }
                Mo(e.x, o.offset.x), Mo(e.y, o.offset.y)
              }
            }
            return e
          }
          applyTransform(t, e = !1) {
            const n = go();
            As(n, t);
            for (let t = 0; t < this.path.length; t++) {
              const i = this.path[t];
              !e && i.options.layoutScroll && i.scroll && i !== i.root && Lo(n, {
                x: -i.scroll.offset.x,
                y: -i.scroll.offset.y
              }), wo(i.latestValues) && Lo(n, i.latestValues)
            }
            return wo(this.latestValues) && Lo(n, this.latestValues), n
          }
          removeTransform(t) {
            var e;
            const n = go();
            As(n, t);
            for (let t = 0; t < this.path.length; t++) {
              const i = this.path[t];
              if (!i.instance) continue;
              if (!wo(i.latestValues)) continue;
              bo(i.latestValues) && i.updateSnapshot();
              const o = go();
              As(o, i.measurePageBox()), Rs(n, i.latestValues, null === (e = i.snapshot) || void 0 === e ? void 0 : e.layoutBox, o)
            }
            return wo(this.latestValues) && Rs(n, this.latestValues), n
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
              layoutId: i
            } = this.options;
            if (this.layout && (n || i)) {
              if (!this.targetDelta && !this.relativeTarget) {
                const t = this.getClosestProjectingParent();
                t && t.layout ? (this.relativeParent = t, this.relativeTarget = go(), this.relativeTargetOrigin = go(), lo(this.relativeTargetOrigin, this.layout.layoutBox, t.layout.layoutBox), As(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
              }
              var o, s, r;
              if ((this.relativeTarget || this.targetDelta) && (this.target || (this.target = go(), this.targetWithTransforms = go()), this.relativeTarget && this.relativeTargetOrigin && (null === (t = this.relativeParent) || void 0 === t ? void 0 : t.target) ? (o = this.target, s = this.relativeTarget, r = this.relativeParent.target, ro(o.x, s.x, r.x), ro(o.y, s.y, r.y)) : this.targetDelta ? (Boolean(this.resumingFrom) ? this.target = this.applyTransform(this.layout.layoutBox) : As(this.target, this.layout.layoutBox), Ao(this.target, this.targetDelta)) : As(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget)) {
                this.attemptToResolveRelativeTarget = !1;
                const t = this.getClosestProjectingParent();
                t && Boolean(t.resumingFrom) === Boolean(this.resumingFrom) && !t.options.layoutScroll && t.target ? (this.relativeParent = t, this.relativeTarget = go(), this.relativeTargetOrigin = go(), lo(this.relativeTargetOrigin, this.target, t.target), As(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
              }
            }
          }
          getClosestProjectingParent() {
            if (this.parent && !bo(this.parent.latestValues) && !To(this.parent.latestValues)) return (this.parent.relativeTarget || this.parent.targetDelta) && this.parent.layout ? this.parent : this.parent.getClosestProjectingParent()
          }
          calcProjection() {
            var t;
            const {
              isProjectionDirty: e,
              isTransformDirty: n
            } = this;
            this.isProjectionDirty = this.isTransformDirty = !1;
            const i = this.getLead(),
              o = Boolean(this.resumingFrom) || this !== i;
            let s = !0;
            if (e && (s = !1), o && n && (s = !1), s) return;
            const {
              layout: r,
              layoutId: a
            } = this.options;
            if (this.isTreeAnimating = Boolean((null === (t = this.parent) || void 0 === t ? void 0 : t.isTreeAnimating) || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !r && !a) return;
            As(this.layoutCorrected, this.layout.layoutBox),
              function(t, e, n, i = !1) {
                var o, s;
                const r = n.length;
                if (!r) return;
                let a, l;
                e.x = e.y = 1;
                for (let u = 0; u < r; u++) a = n[u], l = a.projectionDelta, "contents" !== (null === (s = null === (o = a.instance) || void 0 === o ? void 0 : o.style) || void 0 === s ? void 0 : s.display) && (i && a.options.layoutScroll && a.scroll && a !== a.root && Lo(t, {
                  x: -a.scroll.offset.x,
                  y: -a.scroll.offset.y
                }), l && (e.x *= l.x.scale, e.y *= l.y.scale, Ao(t, l)), i && wo(a.latestValues) && Lo(t, a.latestValues));
                e.x = Co(e.x), e.y = Co(e.y)
              }(this.layoutCorrected, this.treeScale, this.path, o);
            const {
              target: l
            } = i;
            if (!l) return;
            this.projectionDelta || (this.projectionDelta = fo(), this.projectionDeltaWithTransform = fo());
            const u = this.treeScale.x,
              c = this.treeScale.y,
              h = this.projectionTransform;
            so(this.projectionDelta, this.layoutCorrected, l, this.latestValues), this.projectionTransform = Os(this.projectionDelta, this.treeScale), this.projectionTransform === h && this.treeScale.x === u && this.treeScale.y === c || (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", l))
          }
          hide() {
            this.isVisible = !1
          }
          show() {
            this.isVisible = !0
          }
          scheduleRender(t = !0) {
            var e, n, i;
            null === (n = (e = this.options).scheduleRender) || void 0 === n || n.call(e), t && (null === (i = this.getStack()) || void 0 === i || i.scheduleRender()), this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
          }
          setAnimationOrigin(t, e = !1) {
            var n, i;
            const o = this.snapshot,
              s = (null == o ? void 0 : o.latestValues) || {},
              r = {
                ...this.latestValues
              },
              a = fo();
            this.relativeTarget = this.relativeTargetOrigin = void 0, this.attemptToResolveRelativeTarget = !e;
            const l = go(),
              u = (null == o ? void 0 : o.source) !== (null === (n = this.layout) || void 0 === n ? void 0 : n.source),
              c = ((null === (i = this.getStack()) || void 0 === i ? void 0 : i.members.length) || 0) <= 1,
              h = Boolean(u && !c && !0 === this.options.crossfade && !this.path.some(ir));
            this.animationProgress = 0, this.mixTargetDelta = e => {
              var n;
              const i = e / 1e3;
              var o, d, p, m;
              er(a.x, t.x, i), er(a.y, t.y, i), this.setTargetDelta(a), this.relativeTarget && this.relativeTargetOrigin && this.layout && (null === (n = this.relativeParent) || void 0 === n ? void 0 : n.layout) && (lo(l, this.layout.layoutBox, this.relativeParent.layout.layoutBox), o = this.relativeTarget, d = this.relativeTargetOrigin, p = l, m = i, nr(o.x, d.x, p.x, m), nr(o.y, d.y, p.y, m)), u && (this.animationValues = r, function(t, e, n, i, o, s) {
                o ? (t.opacity = Dn(0, void 0 !== n.opacity ? n.opacity : 1, Vs(i)), t.opacityExit = Dn(void 0 !== e.opacity ? e.opacity : 1, 0, Es(i))) : s && (t.opacity = Dn(void 0 !== e.opacity ? e.opacity : 1, void 0 !== n.opacity ? n.opacity : 1, i));
                for (let o = 0; o < xs; o++) {
                  const s = `border${ys[o]}Radius`;
                  let r = Ts(e, s),
                    a = Ts(n, s);
                  void 0 === r && void 0 === a || (r || (r = 0), a || (a = 0), 0 === r || 0 === a || ws(r) === ws(a) ? (t[s] = Math.max(Dn(bs(r), bs(a), i), 0), (K.test(a) || K.test(r)) && (t[s] += "%")) : t[s] = a)
                }(e.rotate || n.rotate) && (t.rotate = Dn(e.rotate || 0, n.rotate || 0, i))
              }(r, s, this.latestValues, i, h, c)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = i
            }, this.mixTargetDelta(0)
          }
          startAnimation(t) {
            var e, n;
            this.notifyListeners("animationStart"), null === (e = this.currentAnimation) || void 0 === e || e.stop(), this.resumingFrom && (null === (n = this.resumingFrom.currentAnimation) || void 0 === n || n.stop()), this.pendingAnimation && (Le.update(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = Re.update((() => {
              b.hasAnimatedSinceResize = !0, this.currentAnimation = function(t, e, n = {}) {
                const i = I(t) ? t : We(t);
                return i.start(ji("", i, e, n)), {
                  stop: () => i.stop(),
                  isAnimating: () => i.isAnimating()
                }
              }(0, 1e3, {
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
              layout: i,
              latestValues: o
            } = t;
            if (e && n && i) {
              if (this !== t && this.layout && i && ar(this.options.animationType, this.layout.layoutBox, i.layoutBox)) {
                n = this.target || go();
                const e = no(this.layout.layoutBox.x);
                n.x.min = t.target.x.min, n.x.max = n.x.min + e;
                const i = no(this.layout.layoutBox.y);
                n.y.min = t.target.y.min, n.y.max = n.y.min + i
              }
              As(e, n), Lo(e, o), so(this.projectionDeltaWithTransform, this.layoutCorrected, e, o)
            }
          }
          registerSharedNode(t, e) {
            var n, i, o;
            this.sharedNodes.has(t) || this.sharedNodes.set(t, new js), this.sharedNodes.get(t).add(e), e.promote({
              transition: null === (n = e.options.initialPromotionConfig) || void 0 === n ? void 0 : n.transition,
              preserveFollowOpacity: null === (o = null === (i = e.options.initialPromotionConfig) || void 0 === i ? void 0 : i.shouldPreserveFollowOpacity) || void 0 === o ? void 0 : o.call(i, e)
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
            const i = this.getStack();
            i && i.promote(this, n), t && (this.projectionDelta = void 0, this.needsReset = !0), e && this.setOptions({
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
            const i = {};
            for (let e = 0; e < $s.length; e++) {
              const o = "rotate" + $s[e];
              n[o] && (i[o] = n[o], t.setStaticValue(o, 0))
            }
            null == t || t.render();
            for (const e in i) t.setStaticValue(e, i[e]);
            t.scheduleRender()
          }
          getProjectionStyles(t = {}) {
            var e, n, i;
            const o = {};
            if (!this.instance || this.isSVG) return o;
            if (!this.isVisible) return {
              visibility: "hidden"
            };
            o.visibility = "";
            const s = null === (e = this.options.visualElement) || void 0 === e ? void 0 : e.getProps().transformTemplate;
            if (this.needsReset) return this.needsReset = !1, o.opacity = "", o.pointerEvents = kt(t.pointerEvents) || "", o.transform = s ? s(this.latestValues, "") : "none", o;
            const r = this.getLead();
            if (!this.projectionDelta || !this.layout || !r.target) {
              const e = {};
              return this.options.layoutId && (e.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1, e.pointerEvents = kt(t.pointerEvents) || ""), this.hasProjected && !wo(this.latestValues) && (e.transform = s ? s({}, "") : "none", this.hasProjected = !1), e
            }
            const a = r.animationValues || r.latestValues;
            this.applyTransformsToTarget(), o.transform = Os(this.projectionDeltaWithTransform, this.treeScale, a), s && (o.transform = s(a, o.transform));
            const {
              x: l,
              y: u
            } = this.projectionDelta;
            o.transformOrigin = `${100*l.origin}% ${100*u.origin}% 0`, r.animationValues ? o.opacity = r === this ? null !== (i = null !== (n = a.opacity) && void 0 !== n ? n : this.latestValues.opacity) && void 0 !== i ? i : 1 : this.preserveOpacity ? this.latestValues.opacity : a.opacityExit : o.opacity = r === this ? void 0 !== a.opacity ? a.opacity : "" : void 0 !== a.opacityExit ? a.opacityExit : 0;
            for (const t in D) {
              if (void 0 === a[t]) continue;
              const {
                correct: e,
                applyTo: n
              } = D[t], i = e(a[t], r);
              if (n) {
                const t = n.length;
                for (let e = 0; e < t; e++) o[n[e]] = i
              } else o[t] = i
            }
            return this.options.layoutId && (o.pointerEvents = r === this ? kt(t.pointerEvents) || "" : "none"), o
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
          }
          resetTree() {
            this.root.nodes.forEach((t => {
              var e;
              return null === (e = t.currentAnimation) || void 0 === e ? void 0 : e.stop()
            })), this.root.nodes.forEach(Gs), this.root.sharedNodes.clear()
          }
        }
      }

      function Ys(t) {
        t.updateLayout()
      }

      function Hs(t) {
        var e, n, i;
        const o = (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) || t.snapshot;
        if (t.isLead() && t.layout && o && t.hasListeners("didUpdate")) {
          const {
            layoutBox: e,
            measuredBox: n
          } = t.layout, {
            animationType: i
          } = t.options, s = o.source !== t.layout.source;
          "size" === i ? vo((t => {
            const n = s ? o.measuredBox[t] : o.layoutBox[t],
              i = no(n);
            n.min = e[t].min, n.max = n.min + i
          })) : ar(i, o.layoutBox, e) && vo((t => {
            const n = s ? o.measuredBox[t] : o.layoutBox[t],
              i = no(e[t]);
            n.max = n.min + i
          }));
          const r = fo();
          so(r, e, o.layoutBox);
          const a = fo();
          s ? so(a, t.applyTransform(n, !0), o.measuredBox) : so(a, e, o.layoutBox);
          const l = !Bs(r);
          let u = !1;
          if (!t.resumeFrom) {
            const n = t.getClosestProjectingParent();
            if (n && !n.resumeFrom) {
              const {
                snapshot: t,
                layout: i
              } = n;
              if (t && i) {
                const n = go();
                lo(n, o.layoutBox, t.layoutBox);
                const s = go();
                lo(s, e, i.layoutBox), Is(n, s) || (u = !0)
              }
            }
          }
          t.notifyListeners("didUpdate", {
            layout: e,
            snapshot: o,
            delta: a,
            layoutDelta: r,
            hasLayoutChanged: l,
            hasRelativeTargetChanged: u
          })
        } else t.isLead() && (null === (i = (n = t.options).onExitComplete) || void 0 === i || i.call(n));
        t.options.transition = void 0
      }

      function Xs(t) {
        t.isProjectionDirty || (t.isProjectionDirty = Boolean(t.parent && t.parent.isProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = Boolean(t.parent && t.parent.isTransformDirty))
      }

      function _s(t) {
        t.clearSnapshot()
      }

      function Gs(t) {
        t.clearMeasurements()
      }

      function qs(t) {
        const {
          visualElement: e
        } = t.options;
        (null == e ? void 0 : e.getProps().onBeforeLayoutMeasure) && e.notify("BeforeLayoutMeasure"), t.resetTransform()
      }

      function Zs(t) {
        t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0
      }

      function Ks(t) {
        t.resolveTargetDelta()
      }

      function Js(t) {
        t.calcProjection()
      }

      function Qs(t) {
        t.resetRotation()
      }

      function tr(t) {
        t.removeLeadSnapshot()
      }

      function er(t, e, n) {
        t.translate = Dn(e.translate, 0, n), t.scale = Dn(e.scale, 1, n), t.origin = e.origin, t.originPoint = e.originPoint
      }

      function nr(t, e, n, i) {
        t.min = Dn(e.min, n.min, i), t.max = Dn(e.max, n.max, i)
      }

      function ir(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit
      }
      const or = {
        duration: .45,
        ease: [.4, 0, .1, 1]
      };

      function sr(t, e) {
        let n = t.root;
        for (let e = t.path.length - 1; e >= 0; e--)
          if (Boolean(t.path[e].instance)) {
            n = t.path[e];
            break
          } const i = (n && n !== t.root ? n.instance : document).querySelector(`[data-projection-id="${e}"]`);
        i && t.mount(i, !0)
      }

      function rr(t) {
        t.min = Math.round(t.min), t.max = Math.round(t.max)
      }

      function ar(t, e, n) {
        return "position" === t || "preserve-aspect" === t && !io(Fs(e), Fs(n), .2)
      }
      const lr = Ws({
          attachResizeListener: (t, e) => Ft(t, "resize", e),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop
          }),
          checkIsScrollRoot: () => !0
        }),
        ur = {
          current: void 0
        },
        cr = Ws({
          measureScroll: t => ({
            x: t.scrollLeft,
            y: t.scrollTop
          }),
          defaultParent: () => {
            if (!ur.current) {
              const t = new lr(0, {});
              t.mount(window), t.setOptions({
                layoutScroll: !0
              }), ur.current = t
            }
            return ur.current
          },
          resetTransform: (t, e) => {
            t.style.transform = void 0 !== e ? e : "none"
          },
          checkIsScrollRoot: t => Boolean("fixed" === window.getComputedStyle(t).position)
        }),
        hr = {
          ..._i,
          ...be,
          ...Oo,
          ...vs
        },
        dr = C(((t, e) => function(t, {
          forwardMotionProps: e = !1
        }, n, i, o) {
          return {
            ...k(t) ? Lt : Bt,
            preloadedFeatures: n,
            useRender: xt(e),
            createVisualElement: i,
            projectionNodeConstructor: o,
            Component: t
          }
        }(t, e, hr, cs, cr)))
    },
    96940: (t, e, n) => {
      "use strict";
      n.d(e, {
        cD: () => u
      });
      var i = n(51664),
        o = (Object.defineProperty, new Map),
        s = new WeakMap,
        r = 0,
        a = void 0;

      function l(t, e, n = {}, i = a) {
        if (void 0 === window.IntersectionObserver && void 0 !== i) {
          const o = t.getBoundingClientRect();
          return e(i, {
            isIntersecting: i,
            target: t,
            intersectionRatio: "number" == typeof n.threshold ? n.threshold : 0,
            time: 0,
            boundingClientRect: o,
            intersectionRect: o,
            rootBounds: o
          }), () => {}
        }
        const {
          id: l,
          observer: u,
          elements: c
        } = function(t) {
          const e = function(t) {
            return Object.keys(t).sort().filter((e => void 0 !== t[e])).map((e => {
              return `${e}_${"root"===e?(n=t.root,n?(s.has(n)||(r+=1,s.set(n,r.toString())),s.get(n)):"0"):t[e]}`;
              var n
            })).toString()
          }(t);
          let n = o.get(e);
          if (!n) {
            const i = new Map;
            let s;
            const r = new IntersectionObserver((e => {
              e.forEach((e => {
                var n;
                const o = e.isIntersecting && s.some((t => e.intersectionRatio >= t));
                t.trackVisibility && void 0 === e.isVisible && (e.isVisible = o), null == (n = i.get(e.target)) || n.forEach((t => {
                  t(o, e)
                }))
              }))
            }), t);
            s = r.thresholds || (Array.isArray(t.threshold) ? t.threshold : [t.threshold || 0]), n = {
              id: e,
              observer: r,
              elements: i
            }, o.set(e, n)
          }
          return n
        }(n), h = c.get(t) || [];
        return c.has(t) || c.set(t, h), h.push(e), u.observe(t),
          function() {
            h.splice(h.indexOf(e), 1), 0 === h.length && (c.delete(t), u.unobserve(t)), 0 === c.size && (u.disconnect(), o.delete(l))
          }
      }

      function u({
        threshold: t,
        delay: e,
        trackVisibility: n,
        rootMargin: o,
        root: s,
        triggerOnce: r,
        skip: a,
        initialInView: u,
        fallbackInView: c,
        onChange: h
      } = {}) {
        var d;
        const [p, m] = i.useState(null), f = i.useRef(), [g, v] = i.useState({
          inView: !!u,
          entry: void 0
        });
        f.current = h, i.useEffect((() => {
          if (a || !p) return;
          let i;
          return i = l(p, ((t, e) => {
            v({
              inView: t,
              entry: e
            }), f.current && f.current(t, e), e.isIntersecting && r && i && (i(), i = void 0)
          }), {
            root: s,
            rootMargin: o,
            threshold: t,
            trackVisibility: n,
            delay: e
          }, c), () => {
            i && i()
          }
        }), [Array.isArray(t) ? t.toString() : t, p, s, o, r, a, n, c, e]);
        const y = null == (d = g.entry) ? void 0 : d.target,
          x = i.useRef();
        p || !y || r || a || x.current === y || (x.current = y, v({
          inView: !!u,
          entry: void 0
        }));
        const b = [m, g.inView, g.entry];
        return b.ref = b[0], b.inView = b[1], b.entry = b[2], b
      }
      i.Component
    }
  }
]);