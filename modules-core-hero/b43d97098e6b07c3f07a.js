/*! For license information please see b43d97098e6b07c3f07a.js.LICENSE.txt */
(self.webpackChunk_rockstargames_modules_core_hero = self.webpackChunk_rockstargames_modules_core_hero || []).push([
  [151], {
    1865: t => {
      var e, n, o = t.exports = {};

      function i() {
        throw new Error("setTimeout has not been defined")
      }

      function s() {
        throw new Error("clearTimeout has not been defined")
      }

      function r(t) {
        if (e === setTimeout) return setTimeout(t, 0);
        if ((e === i || !e) && setTimeout) return e = setTimeout, setTimeout(t, 0);
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
          e = "function" == typeof setTimeout ? setTimeout : i
        } catch (t) {
          e = i
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
      o.nextTick = function(t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        l.push(new p(t, e)), 1 !== l.length || u || r(d)
      }, p.prototype.run = function() {
        this.fun.apply(null, this.array)
      }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = m, o.addListener = m, o.once = m, o.off = m, o.removeListener = m, o.removeAllListeners = m, o.emit = m, o.prependListener = m, o.prependOnceListener = m, o.listeners = function(t) {
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
    3970: (t, e, n) => {
      "use strict";
      var o = n(289),
        i = Symbol.for("react.element"),
        s = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty),
        r = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        a = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(t, e, n) {
        var o, l = {},
          u = null,
          c = null;
        for (o in void 0 !== n && (u = "" + n), void 0 !== e.key && (u = "" + e.key), void 0 !== e.ref && (c = e.ref), e) s.call(e, o) && !a.hasOwnProperty(o) && (l[o] = e[o]);
        if (t && t.defaultProps)
          for (o in e = t.defaultProps) void 0 === l[o] && (l[o] = e[o]);
        return {
          $$typeof: i,
          type: t,
          key: u,
          ref: c,
          props: l,
          _owner: r.current
        }
      }
      e.jsx = l, e.jsxs = l
    },
    6160: (t, e, n) => {
      "use strict";
      t.exports = n(3970)
    },
    4379: (t, e, n) => {
      "use strict";
      n.d(e, {
        E: () => pr
      });
      var o = n(289);
      const i = (0, o.createContext)({
          transformPagePoint: t => t,
          isStatic: !1,
          reducedMotion: "never"
        }),
        s = (0, o.createContext)({}),
        r = (0, o.createContext)(null),
        a = "undefined" != typeof document,
        l = a ? o.useLayoutEffect : o.useEffect,
        u = (0, o.createContext)({
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

      function v(t) {
        return Array.isArray(t) ? t.join(" ") : t
      }
      const g = t => ({
          isEnabled: e => t.some((t => !!e[t]))
        }),
        y = {
          measureLayout: g(["layout", "layoutId", "drag"]),
          animation: g(["animate", "exit", "variants", "whileHover", "whileTap", "whileFocus", "whileDrag", "whileInView"]),
          exit: g(["exit"]),
          drag: g(["drag", "dragControls"]),
          focus: g(["whileFocus"]),
          hover: g(["whileHover", "onHoverStart", "onHoverEnd"]),
          tap: g(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
          pan: g(["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]),
          inView: g(["whileInView", "onViewportEnter", "onViewportLeave"])
        };

      function x(t) {
        const e = (0, o.useRef)(null);
        return null === e.current && (e.current = t()), e.current
      }
      const w = {
        hasAnimatedSinceResize: !0,
        hasEverUpdated: !1
      };
      let b = 1;
      const T = (0, o.createContext)({});
      class E extends o.Component {
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
      const V = (0, o.createContext)({}),
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
        const g = (0, o.forwardRef)((function(g, T) {
          const P = {
              ...(0, o.useContext)(i),
              ...g,
              layoutId: A(g)
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
              }(t, (0, o.useContext)(s));
              return (0, o.useMemo)((() => ({
                initial: e,
                animate: n
              })), [v(e), v(n)])
            }(g),
            k = S ? void 0 : x((() => {
              if (w.hasEverUpdated) return b++
            })),
            D = p(g, S);
          if (!S && a) {
            M.visualElement = function(t, e, n, a) {
              const c = (0, o.useContext)(s).visualElement,
                h = (0, o.useContext)(u),
                d = (0, o.useContext)(r),
                p = (0, o.useContext)(i).reducedMotion,
                m = (0, o.useRef)();
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
            const a = (0, o.useContext)(u).strict,
              c = (0, o.useContext)(V);
            M.visualElement && (C = M.visualElement.loadFeatures(P, a, t, k, n || y.projectionNodeConstructor, c))
          }
          return o.createElement(E, {
            visualElement: M.visualElement,
            props: P
          }, C, o.createElement(s.Provider, {
            value: M
          }, d(f, g, k, function(t, e, n) {
            return (0, o.useCallback)((o => {
              o && t.mount && t.mount(o), e && (o ? e.mount(o) : e.unmount()), n && ("function" == typeof n ? n(o) : c(n) && (n.current = o))
            }), [e])
          }(D, M.visualElement, T), D, S, M.visualElement)))
        }));
        return g[P] = f, g
      }

      function A({
        layoutId: t
      }) {
        const e = (0, o.useContext)(T).id;
        return e && void 0 !== t ? e + "-" + t : t
      }

      function C(t) {
        function e(e, n = {}) {
          return S(t(e, n))
        }
        if ("undefined" == typeof Proxy) return e;
        const n = new Map;
        return new Proxy(e, {
          get: (t, o) => (n.has(o) || n.set(o, e(o)), n.get(o))
        })
      }
      const M = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

      function k(t) {
        return "string" == typeof t && !t.includes("-") && !!(M.indexOf(t) > -1 || /[A-Z]/.test(t))
      }
      const D = {},
        L = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
        R = new Set(L);

      function B(t, {
        layout: e,
        layoutId: n
      }) {
        return R.has(t) || t.startsWith("origin") || (e || void 0 !== n) && (!!D[t] || "opacity" === t)
      }
      const F = t => !!(null == t ? void 0 : t.getVelocity),
        j = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective"
        },
        I = (t, e) => L.indexOf(t) - L.indexOf(e);

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
        ot = {
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

      function it(t, e, n, o) {
        const {
          style: i,
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
          const o = ot[t],
            d = U(n, o);
          if (R.has(t)) {
            if (u = !0, r[t] = d, a.push(t), !h) continue;
            n !== (o.default || 0) && (h = !1)
          } else t.startsWith("origin") ? (c = !0, l[t] = d) : i[t] = d
        }
        if (e.transform || (u || o ? i.transform = function({
            transform: t,
            transformKeys: e
          }, {
            enableHardwareAcceleration: n = !0,
            allowTransformNone: o = !0
          }, i, s) {
            let r = "";
            e.sort(I);
            for (const n of e) r += `${j[n]||n}(${t[n]}) `;
            return n && !t.z && (r += "translateZ(0)"), r = r.trim(), s ? r = s(t, i ? "" : r) : o && i && (r = "none"), r
          }(t, n, h, o) : i.transform && (i.transform = "none")), c) {
          const {
            originX: t = "50%",
            originY: e = "50%",
            originZ: n = 0
          } = l;
          i.transformOrigin = `${t} ${e} ${n}`
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
        for (const o in e) F(e[o]) || B(o, n) || (t[o] = e[o])
      }

      function at(t, e, n) {
        const i = {},
          s = function(t, e, n) {
            const i = {};
            return rt(i, t.style || {}, t), Object.assign(i, function({
              transformTemplate: t
            }, e, n) {
              return (0, o.useMemo)((() => {
                const o = st();
                return it(o, e, {
                  enableHardwareAcceleration: !n
                }, t), Object.assign({}, o.vars, o.style)
              }), [e])
            }(t, e, n)), t.transformValues ? t.transformValues(i) : i
          }(t, e, n);
        return t.drag && !1 !== t.dragListener && (i.draggable = !1, s.userSelect = s.WebkitUserSelect = s.WebkitTouchCallout = "none", s.touchAction = !0 === t.drag ? "none" : "pan-" + ("x" === t.drag ? "y" : "x")), i.style = s, i
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
        originX: o,
        originY: i,
        pathLength: s,
        pathSpacing: r = 1,
        pathOffset: a = 0,
        ...l
      }, u, c, h) {
        if (it(t, l, u, h), c) return void(t.style.viewBox && (t.attrs.viewBox = t.style.viewBox));
        t.attrs = t.style, t.style = {};
        const {
          attrs: d,
          style: p,
          dimensions: m
        } = t;
        d.transform && (m && (p.transform = d.transform), delete d.transform), m && (void 0 !== o || void 0 !== i || p.transform) && (p.transformOrigin = function(t, e, n) {
          return `${dt(e,t.x,t.width)} ${dt(n,t.y,t.height)}`
        }(m, void 0 !== o ? o : .5, void 0 !== i ? i : .5)), void 0 !== e && (d.x = e), void 0 !== n && (d.y = n), void 0 !== s && function(t, e, n = 1, o = 0, i = !0) {
          t.pathLength = 1;
          const s = i ? pt : mt;
          t[s.offset] = J.transform(-o);
          const r = J.transform(e),
            a = J.transform(n);
          t[s.array] = `${r} ${a}`
        }(d, s, r, a, !1)
      }
      const vt = () => ({
          ...st(),
          attrs: {}
        }),
        gt = t => "string" == typeof t && "svg" === t.toLowerCase();

      function yt(t, e, n, i) {
        const s = (0, o.useMemo)((() => {
          const n = vt();
          return ft(n, e, {
            enableHardwareAcceleration: !1
          }, gt(i), t.transformTemplate), {
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
        return (e, n, i, s, {
          latestValues: r
        }, a) => {
          const l = (k(e) ? yt : at)(n, r, a, e),
            u = function(t, e, n) {
              const o = {};
              for (const i in t)(ct(i) || !0 === n && ut(i) || !e && !ut(i) || t.draggable && i.startsWith("onDrag")) && (o[i] = t[i]);
              return o
            }(n, "string" == typeof e, t),
            c = {
              ...u,
              ...l,
              ref: s
            };
          return i && (c["data-projection-id"] = i), (0, o.createElement)(e, c)
        }
      }
      const wt = t => t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();

      function bt(t, {
        style: e,
        vars: n
      }, o, i) {
        Object.assign(t.style, e, i && i.getProjectionStyles(o));
        for (const e in n) t.style.setProperty(e, n[e])
      }
      const Tt = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

      function Et(t, e, n, o) {
        bt(t, e, void 0, o);
        for (const n in e.attrs) t.setAttribute(Tt.has(n) ? n : wt(n), e.attrs[n])
      }

      function Vt(t) {
        const {
          style: e
        } = t, n = {};
        for (const o in e)(F(e[o]) || B(o, t)) && (n[o] = e[o]);
        return n
      }

      function Pt(t) {
        const e = Vt(t);
        for (const n in t) F(t[n]) && (e["x" === n || "y" === n ? "attr" + n.toUpperCase() : n] = t[n]);
        return e
      }

      function St(t, e, n, o = {}, i = {}) {
        return "function" == typeof e && (e = e(void 0 !== n ? n : t.custom, o, i)), "string" == typeof e && (e = t.variants && t.variants[e]), "function" == typeof e && (e = e(void 0 !== n ? n : t.custom, o, i)), e
      }
      const At = t => Array.isArray(t),
        Ct = t => Boolean(t && "object" == typeof t && t.mix && t.toValue),
        Mt = t => At(t) ? t[t.length - 1] || 0 : t;

      function kt(t) {
        const e = F(t) ? t.get() : t;
        return Ct(e) ? e.toValue() : e
      }
      const Dt = t => (e, n) => {
        const i = (0, o.useContext)(s),
          a = (0, o.useContext)(r),
          l = () => function({
            scrapeMotionValuesFromProps: t,
            createRenderState: e,
            onMount: n
          }, o, i, s) {
            const r = {
              latestValues: Lt(o, i, s, t),
              renderState: e()
            };
            return n && (r.mount = t => n(o, t, r)), r
          }(t, e, i, a);
        return n ? l() : x(l)
      };

      function Lt(t, e, n, o) {
        const i = {},
          s = o(t);
        for (const t in s) i[t] = kt(s[t]);
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
            transitionEnd: o,
            transition: s,
            ...r
          } = n;
          for (const t in r) {
            let e = r[t];
            Array.isArray(e) && (e = e[c ? e.length - 1 : 0]), null !== e && (i[t] = e)
          }
          for (const t in o) i[t] = o[t]
        })), i
      }
      const Rt = {
          useVisualState: Dt({
            scrapeMotionValuesFromProps: Pt,
            createRenderState: vt,
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
              ft(n, o, {
                enableHardwareAcceleration: !1
              }, gt(e.tagName), t.transformTemplate), Et(e, n)
            }
          })
        },
        Bt = {
          useVisualState: Dt({
            scrapeMotionValuesFromProps: Vt,
            createRenderState: st
          })
        };
      var Ft;

      function jt(t, e, n, o = {
        passive: !0
      }) {
        return t.addEventListener(e, n, o), () => t.removeEventListener(e, n)
      }

      function It(t, e, n, i) {
        (0, o.useEffect)((() => {
          const o = t.current;
          if (n && o) return jt(o, e, n, i)
        }), [t, e, n, i])
      }

      function Ot(t) {
        return "undefined" != typeof PointerEvent && t instanceof PointerEvent ? !("mouse" !== t.pointerType) : t instanceof MouseEvent
      }

      function Ut(t) {
        return !!t.touches
      }! function(t) {
        t.Animate = "animate", t.Hover = "whileHover", t.Tap = "whileTap", t.Drag = "whileDrag", t.Focus = "whileFocus", t.InView = "whileInView", t.Exit = "exit"
      }(Ft || (Ft = {}));
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
          return e ? (o = n, t => {
            const e = t instanceof MouseEvent;
            (!e || e && 0 === t.button) && o(t)
          }) : n;
          var o
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

      function Kt(t, e, n, o) {
        return jt(t, Zt(e), Yt(n, "pointerdown" === e), o)
      }

      function Jt(t, e, n, o) {
        return It(t, Zt(e), n && Yt(n, "pointerdown" === e), o)
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

      function oe() {
        const t = ne(!0);
        return !t || (t(), !1)
      }

      function ie(t, e, n) {
        return (o, i) => {
          Ot(o) && !oe() && (t.animationState && t.animationState.setActive(Ft.Hover, e), n && n(o, i))
        }
      }
      const se = (t, e) => !!e && (t === e || se(t, e.parentElement));

      function re(t) {
        return (0, o.useEffect)((() => () => t()), [])
      }
      const ae = (t, e) => n => e(t(n)),
        le = (...t) => t.reduce(ae);
      var ue = n(1865);
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
      const ve = {
        some: 0,
        all: 1
      };

      function ge(t, e, n, {
        root: i,
        margin: s,
        amount: r = "some",
        once: a
      }) {
        (0, o.useEffect)((() => {
          if (!t || !n.current) return;
          const o = {
            root: null == i ? void 0 : i.current,
            rootMargin: s,
            threshold: "number" == typeof r ? r : ve[r]
          };
          return function(t, e, n) {
            const o = function({
              root: t,
              ...e
            }) {
              const n = t || document;
              pe.has(n) || pe.set(n, {});
              const o = pe.get(n),
                i = JSON.stringify(e);
              return o[i] || (o[i] = new IntersectionObserver(fe, {
                root: t,
                ...e
              })), o[i]
            }(e);
            return de.set(t, n), o.observe(t), () => {
              de.delete(t), o.unobserve(t)
            }
          }(n.current, o, (t => {
            const {
              isIntersecting: o
            } = t;
            if (e.isInView === o) return;
            if (e.isInView = o, a && !o && e.hasEnteredView) return;
            o && (e.hasEnteredView = !0), n.animationState && n.animationState.setActive(Ft.InView, o);
            const i = n.getProps(),
              s = o ? i.onViewportEnter : i.onViewportLeave;
            s && s(t)
          }))
        }), [t, i, s, r])
      }

      function ye(t, e, n, {
        fallback: i = !0
      }) {
        (0, o.useEffect)((() => {
          var o;
          t && i && ("production" !== ce && (o = "IntersectionObserver not available on this device. whileInView animations will trigger on mount.", he.has(o) || (console.warn(o), he.add(o))), requestAnimationFrame((() => {
            e.hasEnteredView = !0;
            const {
              onViewportEnter: t
            } = n.getProps();
            t && t(null), n.animationState && n.animationState.setActive(Ft.InView, !0)
          })))
        }), [t])
      }
      const xe = t => e => (t(e), null),
        we = {
          inView: xe((function({
            visualElement: t,
            whileInView: e,
            onViewportEnter: n,
            onViewportLeave: i,
            viewport: s = {}
          }) {
            const r = (0, o.useRef)({
              hasEnteredView: !1,
              isInView: !1
            });
            let a = Boolean(e || n || i);
            s.once && r.current.hasEnteredView && (a = !1), ("undefined" == typeof IntersectionObserver ? ye : ge)(a, r.current, t, s)
          })),
          tap: xe((function({
            onTap: t,
            onTapStart: e,
            onTapCancel: n,
            whileTap: i,
            visualElement: s
          }) {
            const r = t || e || n || i,
              a = (0, o.useRef)(!1),
              l = (0, o.useRef)(null),
              u = {
                passive: !(e || t || n || m)
              };

            function c() {
              l.current && l.current(), l.current = null
            }

            function h() {
              return c(), a.current = !1, s.animationState && s.animationState.setActive(Ft.Tap, !1), !oe()
            }

            function d(e, o) {
              h() && (se(s.current, e.target) ? t && t(e, o) : n && n(e, o))
            }

            function p(t, e) {
              h() && n && n(t, e)
            }

            function m(t, n) {
              c(), a.current || (a.current = !0, l.current = le(Kt(window, "pointerup", d, u), Kt(window, "pointercancel", p, u)), s.animationState && s.animationState.setActive(Ft.Tap, !0), e && e(t, n))
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
            It(e, "focus", t ? () => {
              n && n.setActive(Ft.Focus, !0)
            } : void 0), It(e, "blur", t ? () => {
              n && n.setActive(Ft.Focus, !1)
            } : void 0)
          })),
          hover: xe((function({
            onHoverStart: t,
            onHoverEnd: e,
            whileHover: n,
            visualElement: o
          }) {
            Jt(o, "pointerenter", t || n ? ie(o, !0, t) : void 0, {
              passive: !t
            }), Jt(o, "pointerleave", e || n ? ie(o, !1, e) : void 0, {
              passive: !e
            })
          }))
        };

      function be() {
        const t = (0, o.useContext)(r);
        if (null === t) return [!0, null];
        const {
          isPresent: e,
          onExitComplete: n,
          register: i
        } = t, s = (0, o.useId)();
        return (0, o.useEffect)((() => i(s)), []), !e && n ? [!1, () => n && n(s)] : [!0]
      }

      function Te(t, e) {
        if (!Array.isArray(e)) return !1;
        const n = e.length;
        if (n !== t.length) return !1;
        for (let o = 0; o < n; o++)
          if (e[o] !== t[o]) return !1;
        return !0
      }
      const Ee = {
          delta: 0,
          timestamp: 0
        },
        Ve = 1 / 60 * 1e3,
        Pe = "undefined" != typeof performance ? () => performance.now() : () => Date.now(),
        Se = "undefined" != typeof window ? t => window.requestAnimationFrame(t) : t => setTimeout((() => t(Pe())), Ve);
      let Ae = !0,
        Ce = !1,
        Me = !1;
      const ke = ["read", "update", "preRender", "render", "postRender"],
        De = ke.reduce(((t, e) => (t[e] = function(t) {
          let e = [],
            n = [],
            o = 0,
            i = !1,
            s = !1;
          const r = new WeakSet,
            a = {
              schedule: (t, s = !1, a = !1) => {
                const l = a && i,
                  u = l ? e : n;
                return s && r.add(t), -1 === u.indexOf(t) && (u.push(t), l && i && (o = e.length)), t
              },
              cancel: t => {
                const e = n.indexOf(t); - 1 !== e && n.splice(e, 1), r.delete(t)
              },
              process: l => {
                if (i) s = !0;
                else {
                  if (i = !0, [e, n] = [n, e], n.length = 0, o = e.length, o)
                    for (let n = 0; n < o; n++) {
                      const o = e[n];
                      o(l), r.has(o) && (a.schedule(o), t())
                    }
                  i = !1, s && (s = !1, a.process(l))
                }
              }
            };
          return a
        }((() => Ce = !0)), t)), {}),
        Le = ke.reduce(((t, e) => {
          const n = De[e];
          return t[e] = (t, e = !1, o = !1) => (Ce || Ie(), n.schedule(t, e, o)), t
        }), {}),
        Re = ke.reduce(((t, e) => (t[e] = De[e].cancel, t)), {}),
        Be = ke.reduce(((t, e) => (t[e] = () => De[e].process(Ee), t)), {}),
        Fe = t => De[t].process(Ee),
        je = t => {
          Ce = !1, Ee.delta = Ae ? Ve : Math.max(Math.min(t - Ee.timestamp, 40), 1), Ee.timestamp = t, Me = !0, ke.forEach(Fe), Me = !1, Ce && (Ae = !1, Se(je))
        },
        Ie = () => {
          Ce = !0, Ae = !0, Me || Se(je)
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
          const o = this.subscriptions.length;
          if (o)
            if (1 === o) this.subscriptions[0](t, e, n);
            else
              for (let i = 0; i < o; i++) {
                const o = this.subscriptions[i];
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
              timestamp: o
            } = Ee;
            this.lastUpdated !== o && (this.timeDelta = n, this.lastUpdated = o, Le.postRender(this.scheduleVelocityCheck)), this.prev !== this.current && this.events.change && this.events.change.notify(this.current), this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()), e && this.events.renderRequest && this.events.renderRequest.notify(this.current)
          }, this.scheduleVelocityCheck = () => Le.postRender(this.velocityCheck), this.velocityCheck = ({
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
        He = (t, e, n) => o => {
          if (!G(o)) return o;
          const [i, s, r, a] = o.match(H);
          return {
            [t]: parseFloat(i),
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
            alpha: o = 1
          }) => "rgba(" + Xe.transform(t) + ", " + Xe.transform(e) + ", " + Xe.transform(n) + ", " + Y(z.transform(o)) + ")"
        },
        Ge = {
          test: Ye("#"),
          parse: function(t) {
            let e = "",
              n = "",
              o = "",
              i = "";
            return t.length > 5 ? (e = t.substring(1, 3), n = t.substring(3, 5), o = t.substring(5, 7), i = t.substring(7, 9)) : (e = t.substring(1, 2), n = t.substring(2, 3), o = t.substring(3, 4), i = t.substring(4, 5), e += e, n += n, o += o, i += i), {
              red: parseInt(e, 16),
              green: parseInt(n, 16),
              blue: parseInt(o, 16),
              alpha: i ? parseInt(i, 16) / 255 : 1
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
            alpha: o = 1
          }) => "hsla(" + Math.round(t) + ", " + K.transform(Y(e)) + ", " + K.transform(Y(n)) + ", " + Y(z.transform(o)) + ")"
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
          o = 0;
        const i = t.match(X);
        i && (n = i.length, t = t.replace(X, Ke), e.push(...i.map(Ze.parse)));
        const s = t.match(H);
        return s && (o = s.length, t = t.replace(H, Je), e.push(...s.map($.parse))), {
          values: e,
          numColors: n,
          numNumbers: o,
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
          tokenised: o
        } = Qe(t), i = e.length;
        return t => {
          let e = o;
          for (let o = 0; o < i; o++) e = e.replace(o < n ? Ke : Je, o < n ? Ze.transform(t[o]) : Y(t[o]));
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
        const [o] = n.match(H) || [];
        if (!o) return t;
        const i = n.replace(o, "");
        let s = sn.has(e) ? 1 : 0;
        return o !== n && (s *= 100), e + "(" + s + i + ")"
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
          ...ot,
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
        let o = cn(t);
        return o !== ln && (o = on), null === (n = o.getAnimatableNone) || void 0 === n ? void 0 : n.call(o, e)
      }
      const dn = t => e => e.test(t),
        pn = [$, J, K, Z, tt, Q, {
          test: t => "auto" === t,
          parse: t => t
        }],
        mn = t => pn.find(dn(t)),
        fn = [...pn, Ze, on],
        vn = t => fn.find(dn(t));

      function gn(t, e, n) {
        const o = t.getProps();
        return St(o, e, void 0 !== n ? n : o.custom, function(t) {
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

      function wn(t) {
        return Boolean(F(t) && t.add)
      }
      const bn = (t, e) => `${t}: ${e}`;

      function Tn(t, e) {
        const {
          MotionAppearAnimations: n
        } = window, o = bn(t, R.has(e) ? "transform" : e), i = n && n.get(o);
        return i ? (Le.render((() => {
          try {
            i.cancel(), n.delete(o)
          } catch (t) {}
        })), i.currentTime || 0) : 0
      }
      const En = "data-" + wt("framerAppearId");
      var Vn = function() {},
        Pn = function() {};
      const Sn = t => 1e3 * t,
        An = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
        Cn = t => e => 1 - t(1 - e),
        Mn = t => t * t,
        kn = Cn(Mn),
        Dn = An(Mn),
        Ln = (t, e, n) => -n * t + n * e + t;

      function Rn(t, e, n) {
        return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + 6 * (e - t) * n : n < .5 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
      }
      const Bn = (t, e, n) => {
          const o = t * t;
          return Math.sqrt(Math.max(0, n * (e * e - o) + o))
        },
        Fn = [Ge, _e, qe];

      function jn(t) {
        const e = (n = t, Fn.find((t => t.test(n))));
        var n;
        Pn(Boolean(e), `'${t}' is not an animatable color. Use the equivalent color code instead.`);
        let o = e.parse(t);
        return e === qe && (o = function({
          hue: t,
          saturation: e,
          lightness: n,
          alpha: o
        }) {
          t /= 360, n /= 100;
          let i = 0,
            s = 0,
            r = 0;
          if (e /= 100) {
            const o = n < .5 ? n * (1 + e) : n + e - n * e,
              a = 2 * n - o;
            i = Rn(a, o, t + 1 / 3), s = Rn(a, o, t), r = Rn(a, o, t - 1 / 3)
          } else i = s = r = n;
          return {
            red: Math.round(255 * i),
            green: Math.round(255 * s),
            blue: Math.round(255 * r),
            alpha: o
          }
        }(o)), o
      }
      const In = (t, e) => {
        const n = jn(t),
          o = jn(e),
          i = {
            ...n
          };
        return t => (i.red = Bn(n.red, o.red, t), i.green = Bn(n.green, o.green, t), i.blue = Bn(n.blue, o.blue, t), i.alpha = Ln(n.alpha, o.alpha, t), _e.transform(i))
      };

      function On(t, e) {
        return "number" == typeof t ? n => Ln(t, e, n) : Ze.test(t) ? In(t, e) : $n(t, e)
      }
      const Un = (t, e) => {
          const n = [...t],
            o = n.length,
            i = t.map(((t, n) => On(t, e[n])));
          return t => {
            for (let e = 0; e < o; e++) n[e] = i[e](t);
            return n
          }
        },
        Nn = (t, e) => {
          const n = {
              ...t,
              ...e
            },
            o = {};
          for (const i in n) void 0 !== t[i] && void 0 !== e[i] && (o[i] = On(t[i], e[i]));
          return t => {
            for (const e in o) n[e] = o[e](t);
            return n
          }
        },
        $n = (t, e) => {
          const n = on.createTransformer(e),
            o = Qe(t),
            i = Qe(e);
          return o.numColors === i.numColors && o.numNumbers >= i.numNumbers ? le(Un(o.values, i.values), n) : (Vn(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), n => `${n>0?e:t}`)
        },
        zn = (t, e, n) => {
          const o = e - t;
          return 0 === o ? 1 : (n - t) / o
        },
        Wn = (t, e) => n => Ln(t, e, n);

      function Yn(t, e, {
        clamp: n = !0,
        ease: o,
        mixer: i
      } = {}) {
        const s = t.length;
        Pn(s === e.length, "Both input and output ranges must be the same length"), Pn(!o || !Array.isArray(o) || o.length === s - 1, "Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."), t[0] > t[s - 1] && (t = [...t].reverse(), e = [...e].reverse());
        const r = function(t, e, n) {
            const o = [],
              i = n || ("number" == typeof(s = t[0]) ? Wn : "string" == typeof s ? Ze.test(s) ? In : $n : Array.isArray(s) ? Un : "object" == typeof s ? Nn : Wn);
            var s;
            const r = t.length - 1;
            for (let n = 0; n < r; n++) {
              let s = i(t[n], t[n + 1]);
              if (e) {
                const t = Array.isArray(e) ? e[n] : e;
                s = le(t, s)
              }
              o.push(s)
            }
            return o
          }(e, o, i),
          a = r.length,
          l = e => {
            let n = 0;
            if (a > 1)
              for (; n < t.length - 2 && !(e < t[n + 1]); n++);
            const o = zn(t[n], t[n + 1], e);
            return r[n](o)
          };
        return n ? e => l(N(t[0], t[s - 1], e)) : l
      }
      const Hn = t => t,
        Xn = (t, e, n) => (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t;

      function _n(t, e, n, o) {
        if (t === e && n === o) return Hn;
        return i => 0 === i || 1 === i ? i : Xn(function(t, e, n, o, i) {
          let s, r, a = 0;
          do {
            r = e + (n - e) / 2, s = Xn(r, o, i) - t, s > 0 ? n = r : e = r
          } while (Math.abs(s) > 1e-7 && ++a < 12);
          return r
        }(i, 0, 1, t, n), e, o)
      }
      const Gn = t => 1 - Math.sin(Math.acos(t)),
        qn = Cn(Gn),
        Zn = An(qn),
        Kn = _n(.33, 1.53, .69, .99),
        Jn = Cn(Kn),
        Qn = An(Jn),
        to = {
          linear: Hn,
          easeIn: Mn,
          easeInOut: Dn,
          easeOut: kn,
          circIn: Gn,
          circInOut: Zn,
          circOut: qn,
          backIn: Jn,
          backInOut: Qn,
          backOut: Kn,
          anticipate: t => (t *= 2) < 1 ? .5 * Jn(t) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
        },
        eo = t => {
          if (Array.isArray(t)) {
            Pn(4 === t.length, "Cubic bezier arrays must contain four numerical values.");
            const [e, n, o, i] = t;
            return _n(e, n, o, i)
          }
          return "string" == typeof t ? (Pn(void 0 !== to[t], `Invalid easing type '${t}'`), to[t]) : t
        };

      function no({
        keyframes: t,
        ease: e = Dn,
        times: n,
        duration: o = 300
      }) {
        t = [...t];
        const i = no[0],
          s = (t => Array.isArray(t) && "number" != typeof t[0])(e) ? e.map(eo) : eo(e),
          r = {
            done: !1,
            value: i
          },
          a = function(t, e) {
            return t.map((t => t * e))
          }(n && n.length === no.length ? n : function(t) {
            const e = t.length;
            return t.map(((t, n) => 0 !== n ? n / (e - 1) : 0))
          }(t), o);

        function l() {
          return Yn(a, t, {
            ease: Array.isArray(s) ? s : (e = t, n = s, e.map((() => n || Dn)).splice(0, e.length - 1))
          });
          var e, n
        }
        let u = l();
        return {
          next: t => (r.value = u(t), r.done = t >= o, r),
          flipTarget: () => {
            t.reverse(), u = l()
          }
        }
      }
      const oo = .001,
        io = .01,
        so = 10,
        ro = .05,
        ao = 1;
      const lo = 12;

      function uo(t, e) {
        return t * Math.sqrt(1 - e * e)
      }
      const co = ["duration", "bounce"],
        ho = ["stiffness", "damping", "mass"];

      function po(t, e) {
        return e.some((e => void 0 !== t[e]))
      }

      function mo({
        keyframes: t,
        restSpeed: e = 2,
        restDelta: n = .01,
        ...o
      }) {
        let i = t[0],
          s = t[t.length - 1];
        const r = {
            done: !1,
            value: i
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
            if (!po(t, ho) && po(t, co)) {
              const n = function({
                duration: t = 800,
                bounce: e = .25,
                velocity: n = 0,
                mass: o = 1
              }) {
                let i, s;
                Vn(t <= 1e3 * so, "Spring duration must be 10 seconds or less");
                let r = 1 - e;
                r = N(ro, ao, r), t = N(io, so, t / 1e3), r < 1 ? (i = e => {
                  const o = e * r,
                    i = o * t,
                    s = o - n,
                    a = uo(e, r),
                    l = Math.exp(-i);
                  return oo - s / a * l
                }, s = e => {
                  const o = e * r * t,
                    s = o * n + n,
                    a = Math.pow(r, 2) * Math.pow(e, 2) * t,
                    l = Math.exp(-o),
                    u = uo(Math.pow(e, 2), r);
                  return (-i(e) + oo > 0 ? -1 : 1) * ((s - a) * l) / u
                }) : (i = e => Math.exp(-e * t) * ((e - n) * t + 1) - oo, s = e => Math.exp(-e * t) * (t * t * (n - e)));
                const a = function(t, e, n) {
                  let o = n;
                  for (let n = 1; n < lo; n++) o -= t(o) / e(o);
                  return o
                }(i, s, 5 / t);
                if (t *= 1e3, isNaN(a)) return {
                  stiffness: 100,
                  damping: 10,
                  duration: t
                }; {
                  const e = Math.pow(a, 2) * o;
                  return {
                    stiffness: e,
                    damping: 2 * r * Math.sqrt(o * e),
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
        let p = fo,
          m = c ? -c / 1e3 : 0;
        const f = l / (2 * Math.sqrt(a * u));

        function v() {
          const t = s - i,
            e = Math.sqrt(a / u) / 1e3;
          if (void 0 === n && (n = Math.min(Math.abs(s - i) / 100, .4)), f < 1) {
            const n = uo(e, f);
            p = o => {
              const i = Math.exp(-f * e * o);
              return s - i * ((m + f * e * t) / n * Math.sin(n * o) + t * Math.cos(n * o))
            }
          } else if (1 === f) p = n => s - Math.exp(-e * n) * (t + (m + e * t) * n);
          else {
            const n = e * Math.sqrt(f * f - 1);
            p = o => {
              const i = Math.exp(-f * e * o),
                r = Math.min(n * o, 300);
              return s - i * ((m + f * e * t) * Math.sinh(r) + n * t * Math.cosh(r)) / n
            }
          }
        }
        return v(), {
          next: t => {
            const o = p(t);
            if (d) r.done = t >= h;
            else {
              let i = m;
              if (0 !== t)
                if (f < 1) {
                  const e = Math.max(0, t - 5);
                  i = $e(o - p(e), t - e)
                } else i = 0;
              const a = Math.abs(i) <= e,
                l = Math.abs(s - o) <= n;
              r.done = a && l
            }
            return r.value = r.done ? s : o, r
          },
          flipTarget: () => {
            m = -m, [i, s] = [s, i], v()
          }
        }
      }
      mo.needsInterpolation = (t, e) => "string" == typeof t || "string" == typeof e;
      const fo = t => 0,
        vo = {
          decay: function({
            keyframes: t = [0],
            velocity: e = 0,
            power: n = .8,
            timeConstant: o = 350,
            restDelta: i = .5,
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
                const e = -l * Math.exp(-t / o);
                return a.done = !(e > i || e < -i), a.value = a.done ? c : c + e, a
              },
              flipTarget: () => {}
            }
          },
          keyframes: no,
          tween: no,
          spring: mo
        };

      function go(t, e, n = 0) {
        return t - e - n
      }
      const yo = t => {
        const e = ({
          delta: e
        }) => t(e);
        return {
          start: () => Le.update(e, !0),
          stop: () => Re.update(e)
        }
      };

      function xo({
        duration: t,
        driver: e = yo,
        elapsed: n = 0,
        repeat: o = 0,
        repeatType: i = "loop",
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
        var f, v;
        let g, y, x, w = 0,
          b = t,
          T = !1,
          E = !0;
        const V = vo[r.length > 2 ? "keyframes" : p],
          P = r[0],
          S = r[r.length - 1];
        (null === (v = (f = V).needsInterpolation) || void 0 === v ? void 0 : v.call(f, P, S)) && (x = Yn([0, 100], [P, S], {
          clamp: !1
        }), r = [0, 100]);
        const A = V({
          ...m,
          duration: t,
          keyframes: r
        });
        return a && (l && l(), g = e((function(t) {
          if (E || (t = -t), n += t, !T) {
            const t = A.next(Math.max(0, n));
            y = t.value, x && (y = x(y)), T = E ? t.done : n <= 0
          }
          d && d(y), T && (0 === w && (b = void 0 !== b ? b : n), w < o ? function(t, e, n, o) {
            return o ? t >= e + n : t <= -n
          }(n, b, s, E) && (w++, "reverse" === i ? (E = w % 2 == 0, n = function(t, e = 0, n = 0, o = !0) {
            return o ? go(e + -t, e, n) : e - (t - e) + n
          }(n, b, s, E)) : (n = go(n, b, s), "mirror" === i && A.flipTarget()), T = !1, h && h()) : (g.stop(), c && c()))
        })), g.start()), {
          stop: () => {
            u && u(), g.stop()
          },
          sample: t => A.next(Math.max(0, t))
        }
      }
      const wo = ([t, e, n, o]) => `cubic-bezier(${t}, ${e}, ${n}, ${o})`,
        bo = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: wo([0, .65, .55, 1]),
          circOut: wo([.55, 0, 1, .45]),
          backIn: wo([.31, .01, .66, -.59]),
          backOut: wo([.33, 1.53, .69, .99])
        };

      function To(t) {
        if (t) return Array.isArray(t) ? wo(t) : bo[t]
      }

      function Eo(t, e) {
        const n = performance.now(),
          o = ({
            timestamp: i
          }) => {
            const s = i - n;
            s >= e && (Re.read(o), t(s - e))
          };
        return Le.read(o, !0), () => Re.read(o)
      }

      function Vo({
        keyframes: t,
        elapsed: e,
        onUpdate: n,
        onComplete: o
      }) {
        const i = () => (n && n(t[t.length - 1]), o && o(), () => {});
        return e ? Eo(i, -e) : i()
      }
      const Po = () => ({
          type: "spring",
          stiffness: 500,
          damping: 25,
          restSpeed: 10
        }),
        So = t => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === t ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10
        }),
        Ao = () => ({
          type: "keyframes",
          ease: "linear",
          duration: .3
        }),
        Co = {
          type: "keyframes",
          duration: .8
        },
        Mo = {
          x: Po,
          y: Po,
          z: Po,
          rotate: Po,
          rotateX: Po,
          rotateY: Po,
          rotateZ: Po,
          scaleX: So,
          scaleY: So,
          scale: So,
          opacity: Ao,
          backgroundColor: Ao,
          color: Ao,
          default: So
        },
        ko = (t, {
          keyframes: e
        }) => e.length > 2 ? Co : (Mo[t] || Mo.default)(e[1]),
        Do = (t, e) => !("zIndex" === t || "number" != typeof e && !Array.isArray(e) && ("string" != typeof e || !on.test(e) || e.startsWith("url(")));

      function Lo(t) {
        return 0 === t || "string" == typeof t && 0 === parseFloat(t) && -1 === t.indexOf(" ")
      }

      function Ro(t) {
        return "number" == typeof t ? 0 : hn("", t)
      }

      function Bo(t, e) {
        return t[e] || t.default || t
      }
      const Fo = {
          waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate")
        },
        jo = {},
        Io = {};
      for (const t in Fo) Io[t] = () => (void 0 === jo[t] && (jo[t] = Fo[t]()), jo[t]);
      const Oo = new Set(["opacity"]),
        Uo = (t, e, n, o = {}) => i => {
          const s = Bo(o, t) || {},
            r = s.delay || o.delay || 0;
          let {
            elapsed: a = 0
          } = o;
          a -= Sn(r);
          const l = function(t, e, n, o) {
              const i = Do(e, n);
              let s = void 0 !== o.from ? o.from : t.get();
              return "none" === s && i && "string" == typeof n ? s = hn(e, n) : Lo(s) && "string" == typeof n ? s = Ro(n) : !Array.isArray(n) && Lo(n) && "string" == typeof s && (n = Ro(s)), Array.isArray(n) ? (null === n[0] && (n[0] = s), n) : [s, n]
            }(e, t, n, s),
            u = l[0],
            c = l[l.length - 1],
            h = Do(t, u),
            d = Do(t, c);
          Vn(h === d, `You are trying to animate ${t} from "${u}" to "${c}". ${u} is not an animatable value - to enable this animation set ${u} to a value animatable to ${c} via the \`style\` property.`);
          let p = {
            keyframes: l,
            velocity: e.getVelocity(),
            ...s,
            elapsed: a,
            onUpdate: t => {
              e.set(t), s.onUpdate && s.onUpdate(t)
            },
            onComplete: () => {
              i(), s.onComplete && s.onComplete()
            }
          };
          if (!h || !d || !1 === s.type) return Vo(p);
          if ("inertia" === s.type) {
            const t = function({
              keyframes: t,
              velocity: e = 0,
              min: n,
              max: o,
              power: i = .8,
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

              function v(t) {
                return void 0 !== n && t < n || void 0 !== o && t > o
              }

              function g(t) {
                return void 0 === n ? o : void 0 === o || Math.abs(n - t) < Math.abs(o - t) ? n : o
              }

              function y(t) {
                null == f || f.stop(), f = xo({
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
              if (v(m)) x({
                velocity: e,
                keyframes: [m, g(m)]
              });
              else {
                let t = i * e + m;
                void 0 !== u && (t = u(t));
                const o = g(t),
                  r = o === n ? -1 : 1;
                let a, c;
                const h = t => {
                  a = c, c = t, e = $e(t - a, Ee.delta), (1 === r && t > o || -1 === r && t < o) && x({
                    keyframes: [t, o],
                    velocity: e
                  })
                };
                y({
                  type: "decay",
                  keyframes: [m, 0],
                  velocity: e,
                  timeConstant: s,
                  power: i,
                  restDelta: l,
                  modifyTarget: u,
                  onUpdate: v(t) ? h : void 0
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
            staggerChildren: o,
            staggerDirection: i,
            repeat: s,
            repeatType: r,
            repeatDelay: a,
            from: l,
            ...u
          }) {
            return !!Object.keys(u).length
          })(s) || (p = {
            ...p,
            ...ko(t, p)
          }), p.duration && (p.duration = Sn(p.duration)), p.repeatDelay && (p.repeatDelay = Sn(p.repeatDelay));
          const m = e.owner,
            f = m && m.current;
          if (Io.waapi() && Oo.has(t) && !p.repeatDelay && "mirror" !== p.repeatType && 0 !== p.damping && m && f instanceof HTMLElement && !m.getProps().onUpdate) return function(t, e, {
            onUpdate: n,
            onComplete: o,
            ...i
          }) {
            let {
              keyframes: s,
              duration: r = .3,
              elapsed: a = 0,
              ease: l
            } = i;
            if ("spring" === i.type || !(!(u = i.ease) || Array.isArray(u) || "string" == typeof u && bo[u])) {
              const t = xo(i);
              let e = {
                done: !1,
                value: s[0]
              };
              const n = [];
              let o = 0;
              for (; !e.done;) e = t.sample(o), n.push(e.value), o += 10;
              s = n, r = o - 10, l = "linear"
            }
            var u;
            const c = function(t, e, n, {
              delay: o = 0,
              duration: i,
              repeat: s = 0,
              repeatType: r = "loop",
              ease: a,
              times: l
            } = {}) {
              return t.animate({
                [e]: n,
                offset: l
              }, {
                delay: o,
                duration: i,
                easing: To(a),
                fill: "both",
                iterations: s + 1,
                direction: "reverse" === r ? "alternate" : "normal"
              })
            }(t.owner.current, e, s, {
              ...i,
              delay: -a,
              duration: r,
              ease: l
            });
            return c.onfinish = () => {
              t.set(s[s.length - 1]), o && o()
            }, () => {
              const {
                currentTime: e
              } = c;
              if (e) {
                const n = xo(i);
                t.setWithVelocity(n.sample(e - 10).value, n.sample(e).value, 10)
              }
              Le.update((() => c.cancel()))
            }
          }(e, t, p); {
            const t = xo(p);
            return () => t.stop()
          }
        };

      function No(t, e, n = {}) {
        var o;
        const i = gn(t, e, n.custom);
        let {
          transition: s = t.getDefaultTransition() || {}
        } = i || {};
        n.transitionOverride && (s = n.transitionOverride);
        const r = i ? () => $o(t, i, n) : () => Promise.resolve(),
          a = (null === (o = t.variantChildren) || void 0 === o ? void 0 : o.size) ? (o = 0) => {
            const {
              delayChildren: i = 0,
              staggerChildren: r,
              staggerDirection: a
            } = s;
            return function(t, e, n = 0, o = 0, i = 1, s) {
              const r = [],
                a = (t.variantChildren.size - 1) * o,
                l = 1 === i ? (t = 0) => t * o : (t = 0) => a - t * o;
              return Array.from(t.variantChildren).sort(zo).forEach(((t, o) => {
                r.push(No(t, e, {
                  ...s,
                  delay: n + l(o)
                }).then((() => t.notify("AnimationComplete", e))))
              })), Promise.all(r)
            }(t, e, i + o, r, a, n)
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

      function $o(t, e, {
        delay: n = 0,
        transitionOverride: o,
        type: i
      } = {}) {
        var s;
        let {
          transition: r = t.getDefaultTransition(),
          transitionEnd: a,
          ...l
        } = t.makeTargetAnimatable(e);
        const u = t.getValue("willChange");
        o && (r = o);
        const c = [],
          h = i && (null === (s = t.animationState) || void 0 === s ? void 0 : s.getState()[i]);
        for (const e in l) {
          const o = t.getValue(e),
            i = l[e];
          if (!o || void 0 === i || h && Wo(h, e)) continue;
          let s = {
            delay: n,
            elapsed: 0,
            ...r
          };
          if (t.shouldReduceMotion && R.has(e) && (s = {
              ...s,
              type: !1,
              delay: 0
            }), !o.hasAnimated) {
            const n = t.getProps()[En];
            n && (s.elapsed = Tn(n, e))
          }
          let a = o.start(Uo(e, o, i, s));
          wn(u) && (u.add(e), a = a.then((() => u.remove(e)))), c.push(a)
        }
        return Promise.all(c).then((() => {
          a && function(t, e) {
            const n = gn(t, e);
            let {
              transitionEnd: o = {},
              transition: i = {},
              ...s
            } = n ? t.makeTargetAnimatable(n, !1) : {};
            s = {
              ...s,
              ...o
            };
            for (const e in s) yn(t, e, Mt(s[e]))
          }(t, a)
        }))
      }

      function zo(t, e) {
        return t.sortNodePosition(e)
      }

      function Wo({
        protectedKeys: t,
        needsAnimating: e
      }, n) {
        const o = t.hasOwnProperty(n) && !0 !== e[n];
        return e[n] = !1, o
      }
      const Yo = [Ft.Animate, Ft.InView, Ft.Focus, Ft.Hover, Ft.Tap, Ft.Drag, Ft.Exit],
        Ho = [...Yo].reverse(),
        Xo = Yo.length;

      function _o(t) {
        let e = function(t) {
          return e => Promise.all(e.map((({
            animation: e,
            options: n
          }) => function(t, e, n = {}) {
            let o;
            if (t.notify("AnimationStart", e), Array.isArray(e)) {
              const i = e.map((e => No(t, e, n)));
              o = Promise.all(i)
            } else if ("string" == typeof e) o = No(t, e, n);
            else {
              const i = "function" == typeof e ? gn(t, e, n.custom) : e;
              o = $o(t, i, n)
            }
            return o.then((() => t.notify("AnimationComplete", e)))
          }(t, e, n))))
        }(t);
        const n = {
          [Ft.Animate]: Go(!0),
          [Ft.InView]: Go(),
          [Ft.Hover]: Go(),
          [Ft.Tap]: Go(),
          [Ft.Drag]: Go(),
          [Ft.Focus]: Go(),
          [Ft.Exit]: Go()
        };
        let o = !0;
        const i = (e, n) => {
          const o = gn(t, n);
          if (o) {
            const {
              transition: t,
              transitionEnd: n,
              ...i
            } = o;
            e = {
              ...e,
              ...i,
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
          for (let e = 0; e < Xo; e++) {
            const g = Ho[e],
              y = n[g],
              x = void 0 !== a[g] ? a[g] : l[g],
              w = h(x),
              b = g === r ? y.isActive : null;
            !1 === b && (m = e);
            let T = x === l[g] && x !== a[g] && w;
            if (T && o && t.manuallyAnimateOnMount && (T = !1), y.protectedKeys = {
                ...p
              }, !y.isActive && null === b || !x && !y.prevProp || d(x) || "boolean" == typeof x) continue;
            const E = (f = y.prevProp, "string" == typeof(v = x) ? v !== f : !!Array.isArray(v) && !Te(v, f));
            let V = E || g === r && y.isActive && !T && w || e > m && w;
            const P = Array.isArray(x) ? x : [x];
            let S = P.reduce(i, {});
            !1 === b && (S = {});
            const {
              prevResolvedValues: A = {}
            } = y, C = {
              ...A,
              ...S
            }, M = t => {
              V = !0, c.delete(t), y.needsAnimating[t] = !0
            };
            for (const t in C) {
              const e = S[t],
                n = A[t];
              p.hasOwnProperty(t) || (e !== n ? At(e) && At(n) ? !Te(e, n) || E ? M(t) : y.protectedKeys[t] = !0 : void 0 !== e ? M(t) : c.add(t) : void 0 !== e && c.has(t) ? M(t) : y.protectedKeys[t] = !0)
            }
            y.prevProp = x, y.prevResolvedValues = S, y.isActive && (p = {
              ...p,
              ...S
            }), o && t.blockInitialAnimation && (V = !1), V && !T && u.push(...P.map((t => ({
              animation: t,
              options: {
                type: g,
                ...s
              }
            }))))
          }
          var f, v;
          if (c.size) {
            const e = {};
            c.forEach((n => {
              const o = t.getBaseTarget(n);
              void 0 !== o && (e[n] = o)
            })), u.push({
              animation: e
            })
          }
          let g = Boolean(u.length);
          return o && !1 === a.initial && !t.manuallyAnimateOnMount && (g = !1), o = !1, g ? e(u) : Promise.resolve()
        }
        return {
          animateChanges: s,
          setActive: function(e, o, i) {
            var r;
            if (n[e].isActive === o) return Promise.resolve();
            null === (r = t.variantChildren) || void 0 === r || r.forEach((t => {
              var n;
              return null === (n = t.animationState) || void 0 === n ? void 0 : n.setActive(e, o)
            })), n[e].isActive = o;
            const a = s(i, e);
            for (const t in n) n[t].protectedKeys = {};
            return a
          },
          setAnimateFunction: function(n) {
            e = n(t)
          },
          getState: () => n
        }
      }

      function Go(t = !1) {
        return {
          isActive: t,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {}
        }
      }
      const qo = {
          animation: xe((({
            visualElement: t,
            animate: e
          }) => {
            t.animationState || (t.animationState = _o(t)), d(e) && (0, o.useEffect)((() => e.subscribe(t)), [e])
          })),
          exit: xe((t => {
            const {
              custom: e,
              visualElement: n
            } = t, [i, s] = be(), a = (0, o.useContext)(r);
            (0, o.useEffect)((() => {
              n.isPresent = i;
              const t = n.animationState && n.animationState.setActive(Ft.Exit, !i, {
                custom: a && a.custom || e
              });
              t && !i && t.then(s)
            }), [i])
          }))
        },
        Zo = (t, e) => Math.abs(t - e);
      class Ko {
        constructor(t, e, {
          transformPagePoint: n
        } = {}) {
          if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = () => {
              if (!this.lastMoveEvent || !this.lastMoveEventInfo) return;
              const t = ti(this.lastMoveEventInfo, this.history),
                e = null !== this.startEvent,
                n = function(t, e) {
                  const n = Zo(t.x, e.x),
                    o = Zo(t.y, e.y);
                  return Math.sqrt(n ** 2 + o ** 2)
                }(t.offset, {
                  x: 0,
                  y: 0
                }) >= 3;
              if (!e && !n) return;
              const {
                point: o
              } = t, {
                timestamp: i
              } = Ee;
              this.history.push({
                ...o,
                timestamp: i
              });
              const {
                onStart: s,
                onMove: r
              } = this.handlers;
              e || (s && s(this.lastMoveEvent, t), this.startEvent = this.lastMoveEvent), r && r(this.lastMoveEvent, t)
            }, this.handlePointerMove = (t, e) => {
              this.lastMoveEvent = t, this.lastMoveEventInfo = Jo(e, this.transformPagePoint), Ot(t) && 0 === t.buttons ? this.handlePointerUp(t, e) : Le.update(this.updatePoint, !0)
            }, this.handlePointerUp = (t, e) => {
              this.end();
              const {
                onEnd: n,
                onSessionEnd: o
              } = this.handlers, i = ti(Jo(e, this.transformPagePoint), this.history);
              this.startEvent && n && n(t, i), o && o(t, i)
            }, Ut(t) && t.touches.length > 1) return;
          this.handlers = e, this.transformPagePoint = n;
          const o = Jo(Wt(t), this.transformPagePoint),
            {
              point: i
            } = o,
            {
              timestamp: s
            } = Ee;
          this.history = [{
            ...i,
            timestamp: s
          }];
          const {
            onSessionStart: r
          } = e;
          r && r(t, ti(o, this.history)), this.removeListeners = le(Kt(window, "pointermove", this.handlePointerMove), Kt(window, "pointerup", this.handlePointerUp), Kt(window, "pointercancel", this.handlePointerUp))
        }
        updateHandlers(t) {
          this.handlers = t
        }
        end() {
          this.removeListeners && this.removeListeners(), Re.update(this.updatePoint)
        }
      }

      function Jo(t, e) {
        return e ? {
          point: e(t.point)
        } : t
      }

      function Qo(t, e) {
        return {
          x: t.x - e.x,
          y: t.y - e.y
        }
      }

      function ti({
        point: t
      }, e) {
        return {
          point: t,
          delta: Qo(t, ni(e)),
          offset: Qo(t, ei(e)),
          velocity: oi(e, .1)
        }
      }

      function ei(t) {
        return t[0]
      }

      function ni(t) {
        return t[t.length - 1]
      }

      function oi(t, e) {
        if (t.length < 2) return {
          x: 0,
          y: 0
        };
        let n = t.length - 1,
          o = null;
        const i = ni(t);
        for (; n >= 0 && (o = t[n], !(i.timestamp - o.timestamp > Sn(e)));) n--;
        if (!o) return {
          x: 0,
          y: 0
        };
        const s = (i.timestamp - o.timestamp) / 1e3;
        if (0 === s) return {
          x: 0,
          y: 0
        };
        const r = {
          x: (i.x - o.x) / s,
          y: (i.y - o.y) / s
        };
        return r.x === 1 / 0 && (r.x = 0), r.y === 1 / 0 && (r.y = 0), r
      }

      function ii(t) {
        return t.max - t.min
      }

      function si(t, e = 0, n = .01) {
        return Math.abs(t - e) <= n
      }

      function ri(t, e, n, o = .5) {
        t.origin = o, t.originPoint = Ln(e.min, e.max, t.origin), t.scale = ii(n) / ii(e), (si(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1), t.translate = Ln(n.min, n.max, t.origin) - t.originPoint, (si(t.translate) || isNaN(t.translate)) && (t.translate = 0)
      }

      function ai(t, e, n, o) {
        ri(t.x, e.x, n.x, null == o ? void 0 : o.originX), ri(t.y, e.y, n.y, null == o ? void 0 : o.originY)
      }

      function li(t, e, n) {
        t.min = n.min + e.min, t.max = t.min + ii(e)
      }

      function ui(t, e, n) {
        t.min = e.min - n.min, t.max = t.min + ii(e)
      }

      function ci(t, e, n) {
        ui(t.x, e.x, n.x), ui(t.y, e.y, n.y)
      }

      function hi(t, e, n) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== n ? t.max + n - (t.max - t.min) : void 0
        }
      }

      function di(t, e) {
        let n = e.min - t.min,
          o = e.max - t.max;
        return e.max - e.min < t.max - t.min && ([n, o] = [o, n]), {
          min: n,
          max: o
        }
      }
      const pi = .35;

      function mi(t, e, n) {
        return {
          min: fi(t, e),
          max: fi(t, n)
        }
      }

      function fi(t, e) {
        return "number" == typeof t ? t : t[e] || 0
      }
      const vi = () => ({
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
        gi = () => ({
          x: {
            min: 0,
            max: 0
          },
          y: {
            min: 0,
            max: 0
          }
        });

      function yi(t) {
        return [t("x"), t("y")]
      }

      function xi({
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

      function wi(t) {
        return void 0 === t || 1 === t
      }

      function bi({
        scale: t,
        scaleX: e,
        scaleY: n
      }) {
        return !wi(t) || !wi(e) || !wi(n)
      }

      function Ti(t) {
        return bi(t) || Ei(t) || t.z || t.rotate || t.rotateX || t.rotateY
      }

      function Ei(t) {
        return Vi(t.x) || Vi(t.y)
      }

      function Vi(t) {
        return t && "0%" !== t
      }

      function Pi(t, e, n) {
        return n + e * (t - n)
      }

      function Si(t, e, n, o, i) {
        return void 0 !== i && (t = Pi(t, i, o)), Pi(t, n, o) + e
      }

      function Ai(t, e = 0, n = 1, o, i) {
        t.min = Si(t.min, e, n, o, i), t.max = Si(t.max, e, n, o, i)
      }

      function Ci(t, {
        x: e,
        y: n
      }) {
        Ai(t.x, e.translate, e.scale, e.originPoint), Ai(t.y, n.translate, n.scale, n.originPoint)
      }

      function Mi(t) {
        return Number.isInteger(t) || t > 1.0000000000001 || t < .999999999999 ? t : 1
      }

      function ki(t, e) {
        t.min = t.min + e, t.max = t.max + e
      }

      function Di(t, e, [n, o, i]) {
        const s = void 0 !== e[i] ? e[i] : .5,
          r = Ln(t.min, t.max, s);
        Ai(t, e[n], e[o], r, e.scale)
      }
      const Li = ["x", "scaleX", "originX"],
        Ri = ["y", "scaleY", "originY"];

      function Bi(t, e) {
        Di(t.x, e, Li), Di(t.y, e, Ri)
      }

      function Fi(t, e) {
        return xi(function(t, e) {
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
      const ji = new WeakMap;
      class Ii {
        constructor(t) {
          this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
            x: 0,
            y: 0
          }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = gi(), this.visualElement = t
        }
        start(t, {
          snapToCursor: e = !1
        } = {}) {
          !1 !== this.visualElement.isPresent && (this.panSession = new Ko(t, {
            onSessionStart: t => {
              this.stopAnimation(), e && this.snapToCursor(Wt(t, "page").point)
            },
            onStart: (t, e) => {
              var n;
              const {
                drag: o,
                dragPropagation: i,
                onDragStart: s
              } = this.getProps();
              (!o || i || (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = ne(o), this.openGlobalLock)) && (this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), yi((t => {
                var e, n;
                let o = this.getAxisMotionValue(t).get() || 0;
                if (K.test(o)) {
                  const i = null === (n = null === (e = this.visualElement.projection) || void 0 === e ? void 0 : e.layout) || void 0 === n ? void 0 : n.layoutBox[t];
                  i && (o = ii(i) * (parseFloat(o) / 100))
                }
                this.originPoint[t] = o
              })), null == s || s(t, e), null === (n = this.visualElement.animationState) || void 0 === n || n.setActive(Ft.Drag, !0))
            },
            onMove: (t, e) => {
              const {
                dragPropagation: n,
                dragDirectionLock: o,
                onDirectionLock: i,
                onDrag: s
              } = this.getProps();
              if (!n && !this.openGlobalLock) return;
              const {
                offset: r
              } = e;
              if (o && null === this.currentDirection) return this.currentDirection = function(t, e = 10) {
                let n = null;
                return Math.abs(t.y) > e ? n = "y" : Math.abs(t.x) > e && (n = "x"), n
              }(r), void(null !== this.currentDirection && (null == i || i(this.currentDirection)));
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
            velocity: o
          } = e;
          this.startAnimation(o);
          const {
            onDragEnd: i
          } = this.getProps();
          null == i || i(t, e)
        }
        cancel() {
          var t, e;
          this.isDragging = !1, this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !1), null === (t = this.panSession) || void 0 === t || t.end(), this.panSession = void 0;
          const {
            dragPropagation: n
          } = this.getProps();
          !n && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), null === (e = this.visualElement.animationState) || void 0 === e || e.setActive(Ft.Drag, !1)
        }
        updateAxis(t, e, n) {
          const {
            drag: o
          } = this.getProps();
          if (!n || !Oi(t, o, this.currentDirection)) return;
          const i = this.getAxisMotionValue(t);
          let s = this.originPoint[t] + n[t];
          this.constraints && this.constraints[t] && (s = function(t, {
            min: e,
            max: n
          }, o) {
            return void 0 !== e && t < e ? t = o ? Ln(e, t, o.min) : Math.max(t, e) : void 0 !== n && t > n && (t = o ? Ln(n, t, o.max) : Math.min(t, n)), t
          }(s, this.constraints[t], this.elastic[t])), i.set(s)
        }
        resolveConstraints() {
          const {
            dragConstraints: t,
            dragElastic: e
          } = this.getProps(), {
            layout: n
          } = this.visualElement.projection || {}, o = this.constraints;
          t && c(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : this.constraints = !(!t || !n) && function(t, {
            top: e,
            left: n,
            bottom: o,
            right: i
          }) {
            return {
              x: hi(t.x, n, i),
              y: hi(t.y, e, o)
            }
          }(n.layoutBox, t), this.elastic = function(t = pi) {
            return !1 === t ? t = 0 : !0 === t && (t = pi), {
              x: mi(t, "left", "right"),
              y: mi(t, "top", "bottom")
            }
          }(e), o !== this.constraints && n && this.constraints && !this.hasMutatedConstraints && yi((t => {
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
          Pn(null !== n, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
          const {
            projection: o
          } = this.visualElement;
          if (!o || !o.layout) return !1;
          const i = function(t, e, n) {
            const o = Fi(t, n),
              {
                scroll: i
              } = e;
            return i && (ki(o.x, i.offset.x), ki(o.y, i.offset.y)), o
          }(n, o.root, this.visualElement.getTransformPagePoint());
          let s = function(t, e) {
            return {
              x: di(t.x, e.x),
              y: di(t.y, e.y)
            }
          }(o.layout.layoutBox, i);
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
            this.hasMutatedConstraints = !!t, t && (s = xi(t))
          }
          return s
        }
        startAnimation(t) {
          const {
            drag: e,
            dragMomentum: n,
            dragElastic: o,
            dragTransition: i,
            dragSnapToOrigin: s,
            onDragTransitionEnd: r
          } = this.getProps(), a = this.constraints || {}, l = yi((r => {
            if (!Oi(r, e, this.currentDirection)) return;
            let l = (null == a ? void 0 : a[r]) || {};
            s && (l = {
              min: 0,
              max: 0
            });
            const u = o ? 200 : 1e6,
              c = o ? 40 : 1e7,
              h = {
                type: "inertia",
                velocity: n ? t[r] : 0,
                bounceStiffness: u,
                bounceDamping: c,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...i,
                ...l
              };
            return this.startAxisValueAnimation(r, h)
          }));
          return Promise.all(l).then(r)
        }
        startAxisValueAnimation(t, e) {
          const n = this.getAxisMotionValue(t);
          return n.start(Uo(t, n, 0, e))
        }
        stopAnimation() {
          yi((t => this.getAxisMotionValue(t).stop()))
        }
        getAxisMotionValue(t) {
          var e;
          const n = "_drag" + t.toUpperCase();
          return this.visualElement.getProps()[n] || this.visualElement.getValue(t, (null === (e = this.visualElement.getProps().initial) || void 0 === e ? void 0 : e[t]) || 0)
        }
        snapToCursor(t) {
          yi((e => {
            const {
              drag: n
            } = this.getProps();
            if (!Oi(e, n, this.currentDirection)) return;
            const {
              projection: o
            } = this.visualElement, i = this.getAxisMotionValue(e);
            if (o && o.layout) {
              const {
                min: n,
                max: s
              } = o.layout.layoutBox[e];
              i.set(t[e] - Ln(n, s, .5))
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
          if (!c(n) || !o || !this.constraints) return;
          this.stopAnimation();
          const i = {
            x: 0,
            y: 0
          };
          yi((t => {
            const e = this.getAxisMotionValue(t);
            if (e) {
              const n = e.get();
              i[t] = function(t, e) {
                let n = .5;
                const o = ii(t),
                  i = ii(e);
                return i > o ? n = zn(e.min, e.max - o, t.min) : o > i && (n = zn(t.min, t.max - i, e.min)), N(0, 1, n)
              }({
                min: n,
                max: n
              }, this.constraints[t])
            }
          }));
          const {
            transformTemplate: s
          } = this.visualElement.getProps();
          this.visualElement.current.style.transform = s ? s({}, "") : "none", null === (t = o.root) || void 0 === t || t.updateScroll(), o.updateLayout(), this.resolveConstraints(), yi((t => {
            if (!Oi(t, e, null)) return;
            const n = this.getAxisMotionValue(t),
              {
                min: o,
                max: s
              } = this.constraints[t];
            n.set(Ln(o, s, i[t]))
          }))
        }
        addListeners() {
          var t;
          if (!this.visualElement.current) return;
          ji.set(this.visualElement, this);
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
              projection: o
            } = this.visualElement,
            i = o.addEventListener("measure", n);
          o && !o.layout && (null === (t = o.root) || void 0 === t || t.updateScroll(), o.updateLayout()), n();
          const s = jt(window, "resize", (() => this.scalePositionWithinConstraints())),
            r = o.addEventListener("didUpdate", (({
              delta: t,
              hasLayoutChanged: e
            }) => {
              this.isDragging && e && (yi((e => {
                const n = this.getAxisMotionValue(e);
                n && (this.originPoint[e] += t[e].translate, n.set(n.get() + t[e].translate))
              })), this.visualElement.render())
            }));
          return () => {
            s(), e(), i(), null == r || r()
          }
        }
        getProps() {
          const t = this.visualElement.getProps(),
            {
              drag: e = !1,
              dragDirectionLock: n = !1,
              dragPropagation: o = !1,
              dragConstraints: i = !1,
              dragElastic: s = pi,
              dragMomentum: r = !0
            } = t;
          return {
            ...t,
            drag: e,
            dragDirectionLock: n,
            dragPropagation: o,
            dragConstraints: i,
            dragElastic: s,
            dragMomentum: r
          }
        }
      }

      function Oi(t, e, n) {
        return !(!0 !== e && e !== t || null !== n && n !== t)
      }
      const Ui = {
        pan: xe((function({
          onPan: t,
          onPanStart: e,
          onPanEnd: n,
          onPanSessionStart: s,
          visualElement: r
        }) {
          const a = t || e || n || s,
            l = (0, o.useRef)(null),
            {
              transformPagePoint: u
            } = (0, o.useContext)(i),
            c = {
              onSessionStart: s,
              onStart: e,
              onMove: t,
              onEnd: (t, e) => {
                l.current = null, n && n(t, e)
              }
            };
          (0, o.useEffect)((() => {
            null !== l.current && l.current.updateHandlers(c)
          })), Jt(r, "pointerdown", a && function(t) {
            l.current = new Ko(t, c, {
              transformPagePoint: u
            })
          }), re((() => l.current && l.current.end()))
        })),
        drag: xe((function(t) {
          const {
            dragControls: e,
            visualElement: n
          } = t, i = x((() => new Ii(n)));
          (0, o.useEffect)((() => e && e.subscribe(i)), [i, e]), (0, o.useEffect)((() => i.addListeners()), [i])
        }))
      };

      function Ni(t) {
        return "string" == typeof t && t.startsWith("var(--")
      }
      const $i = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;

      function zi(t, e, n = 1) {
        Pn(n <= 4, `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`);
        const [o, i] = function(t) {
          const e = $i.exec(t);
          if (!e) return [, ];
          const [, n, o] = e;
          return [n, o]
        }(t);
        if (!o) return;
        const s = window.getComputedStyle(e).getPropertyValue(o);
        return s ? s.trim() : Ni(i) ? zi(i, e, n + 1) : i
      }
      const Wi = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y"]),
        Yi = t => Wi.has(t),
        Hi = (t, e) => {
          t.set(e, !1), t.set(e)
        },
        Xi = t => t === $ || t === J;
      var _i;
      ! function(t) {
        t.width = "width", t.height = "height", t.left = "left", t.right = "right", t.top = "top", t.bottom = "bottom"
      }(_i || (_i = {}));
      const Gi = (t, e) => parseFloat(t.split(", ")[e]),
        qi = (t, e) => (n, {
          transform: o
        }) => {
          if ("none" === o || !o) return 0;
          const i = o.match(/^matrix3d\((.+)\)$/);
          if (i) return Gi(i[1], e); {
            const e = o.match(/^matrix\((.+)\)$/);
            return e ? Gi(e[1], t) : 0
          }
        },
        Zi = new Set(["x", "y", "z"]),
        Ki = L.filter((t => !Zi.has(t))),
        Ji = {
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
          x: qi(4, 13),
          y: qi(5, 14)
        };

      function Qi(t, e, n, o) {
        return (t => Object.keys(t).some(Yi))(e) ? ((t, e, n = {}, o = {}) => {
          e = {
            ...e
          }, o = {
            ...o
          };
          const i = Object.keys(e).filter(Yi);
          let s = [],
            r = !1;
          const l = [];
          if (i.forEach((i => {
              const a = t.getValue(i);
              if (!t.hasValue(i)) return;
              let u = n[i],
                c = mn(u);
              const h = e[i];
              let d;
              if (At(h)) {
                const t = h.length,
                  e = null === h[0] ? 1 : 0;
                u = h[e], c = mn(u);
                for (let n = e; n < t; n++) d ? Pn(mn(h[n]) === d, "All keyframes must be of the same type") : (d = mn(h[n]), Pn(d === c || Xi(c) && Xi(d), "Keyframes must be of the same dimension as the current value"))
              } else d = mn(h);
              if (c !== d)
                if (Xi(c) && Xi(d)) {
                  const t = a.get();
                  "string" == typeof t && a.set(parseFloat(t)), "string" == typeof h ? e[i] = parseFloat(h) : Array.isArray(h) && d === J && (e[i] = h.map(parseFloat))
                } else(null == c ? void 0 : c.transform) && (null == d ? void 0 : d.transform) && (0 === u || 0 === h) ? 0 === u ? a.set(d.transform(u)) : e[i] = c.transform(h) : (r || (s = function(t) {
                  const e = [];
                  return Ki.forEach((n => {
                    const o = t.getValue(n);
                    void 0 !== o && (e.push([n, o.get()]), o.set(n.startsWith("scale") ? 1 : 0))
                  })), e.length && t.render(), e
                }(t), r = !0), l.push(i), o[i] = void 0 !== o[i] ? o[i] : e[i], Hi(a, h))
            })), l.length) {
            const n = l.indexOf("height") >= 0 ? window.pageYOffset : null,
              i = ((t, e, n) => {
                const o = e.measureViewportBox(),
                  i = e.current,
                  s = getComputedStyle(i),
                  {
                    display: r
                  } = s,
                  a = {};
                "none" === r && e.setStaticValue("display", t.display || "block"), n.forEach((t => {
                  a[t] = Ji[t](o, s)
                })), e.render();
                const l = e.measureViewportBox();
                return n.forEach((n => {
                  const o = e.getValue(n);
                  Hi(o, a[n]), t[n] = Ji[n](l, s)
                })), t
              })(e, t, l);
            return s.length && s.forEach((([e, n]) => {
              t.getValue(e).set(n)
            })), t.render(), a && null !== n && window.scrollTo({
              top: n
            }), {
              target: i,
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
      const ts = {
          current: null
        },
        es = {
          current: !1
        },
        ns = Object.keys(y),
        os = ns.length,
        is = ["AnimationStart", "AnimationComplete", "Update", "Unmount", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
      class ss {
        constructor({
          parent: t,
          props: e,
          reducedMotionConfig: n,
          visualState: o
        }, i = {}) {
          this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.isPresent = !0, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
            this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
          }, this.scheduleRender = () => Le.render(this.render, !1, !0);
          const {
            latestValues: s,
            renderState: r
          } = o;
          this.latestValues = s, this.baseTarget = {
            ...s
          }, this.initialValues = e.initial ? {
            ...s
          } : {}, this.renderState = r, this.parent = t, this.props = e, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = n, this.options = i, this.isControllingVariants = m(e), this.isVariantNode = f(e), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = Boolean(t && t.current);
          const {
            willChange: a,
            ...l
          } = this.scrapeMotionValuesFromProps(e);
          for (const t in l) {
            const e = l[t];
            void 0 !== s[t] && F(e) && (e.set(s[t], !1), wn(a) && a.add(t))
          }
        }
        scrapeMotionValuesFromProps(t) {
          return {}
        }
        mount(t) {
          var e;
          this.current = t, this.projection && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = null === (e = this.parent) || void 0 === e ? void 0 : e.addVariantChild(this)), this.values.forEach(((t, e) => this.bindToMotionValue(e, t))), es.current || function() {
            if (es.current = !0, a)
              if (window.matchMedia) {
                const t = window.matchMedia("(prefers-reduced-motion)"),
                  e = () => ts.current = t.matches;
                t.addListener(e), e()
              } else ts.current = !1
          }(), this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || ts.current), this.parent && this.parent.children.add(this), this.setProps(this.props)
        }
        unmount() {
          var t, e, n;
          null === (t = this.projection) || void 0 === t || t.unmount(), Re.update(this.notifyUpdate), Re.render(this.render), this.valueSubscriptions.forEach((t => t())), null === (e = this.removeFromVariantTree) || void 0 === e || e.call(this), null === (n = this.parent) || void 0 === n || n.children.delete(this);
          for (const t in this.events) this.events[t].clear();
          this.current = null
        }
        bindToMotionValue(t, e) {
          const n = R.has(t),
            o = e.on("change", (e => {
              this.latestValues[t] = e, this.props.onUpdate && Le.update(this.notifyUpdate, !1, !0), n && this.projection && (this.projection.isTransformDirty = !0)
            })),
            i = e.on("renderRequest", this.scheduleRender);
          this.valueSubscriptions.set(t, (() => {
            o(), i()
          }))
        }
        sortNodePosition(t) {
          return this.current && this.sortInstanceNodePosition && this.type === t.type ? this.sortInstanceNodePosition(this.current, t.current) : 0
        }
        loadFeatures(t, e, n, i, s, r) {
          const a = [];
          "production" !== ce && n && e && Pn(!1, "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.");
          for (let e = 0; e < os; e++) {
            const n = ns[e],
              {
                isEnabled: i,
                Component: s
              } = y[n];
            i(t) && s && a.push((0, o.createElement)(s, {
              key: n,
              ...t,
              visualElement: this
            }))
          }
          if (!this.projection && s) {
            this.projection = new s(i, this.latestValues, this.parent && this.parent.projection);
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
              alwaysMeasureLayout: Boolean(o) || a && c(a),
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
          return this.current ? this.measureInstanceViewportBox(this.current, this.props) : gi()
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
            const o = t["on" + n];
            o && (this.propEventSubscriptions[n] = this.on(n, o))
          }
          this.prevMotionValues = function(t, e, n) {
            const {
              willChange: o
            } = e;
            for (const i in e) {
              const s = e[i],
                r = n[i];
              if (F(s)) t.addValue(i, s), wn(o) && o.add(i);
              else if (F(r)) t.addValue(i, We(s, {
                owner: t
              })), wn(o) && o.remove(i);
              else if (r !== s)
                if (t.hasValue(i)) {
                  const e = t.getValue(i);
                  !e.hasAnimated && e.set(s)
                } else {
                  const e = t.getStaticValue(i);
                  t.addValue(i, We(void 0 !== e ? e : s))
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
          for (let t = 0; t < as; t++) {
            const e = rs[t],
              n = this.props[e];
            (h(n) || !1 === n) && (o[e] = n)
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
          } = this.props, o = "string" == typeof n || "object" == typeof n ? null === (e = St(this.props, n)) || void 0 === e ? void 0 : e[t] : void 0;
          if (n && void 0 !== o) return o;
          const i = this.getBaseTargetFromProps(this.props, t);
          return void 0 === i || F(i) ? void 0 !== this.initialValues[t] && void 0 === o ? void 0 : this.baseTarget[t] : i
        }
        on(t, e) {
          return this.events[t] || (this.events[t] = new Ne), this.events[t].add(e)
        }
        notify(t, ...e) {
          var n;
          null === (n = this.events[t]) || void 0 === n || n.notify(...e)
        }
      }
      const rs = ["initial", ...Yo],
        as = rs.length;
      class ls extends ss {
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
        }, i) {
          let s = function(t, e, n) {
            var o;
            const i = {};
            for (const s in t) {
              const t = xn(s, e);
              i[s] = void 0 !== t ? t : null === (o = n.getValue(s)) || void 0 === o ? void 0 : o.get()
            }
            return i
          }(n, t || {}, this);
          if (o && (e && (e = o(e)), n && (n = o(n)), s && (s = o(s))), i) {
            ! function(t, e, n) {
              var o, i;
              const s = Object.keys(e).filter((e => !t.hasValue(e))),
                r = s.length;
              if (r)
                for (let a = 0; a < r; a++) {
                  const r = s[a],
                    l = e[r];
                  let u = null;
                  Array.isArray(l) && (u = l[0]), null === u && (u = null !== (i = null !== (o = n[r]) && void 0 !== o ? o : t.readValue(r)) && void 0 !== i ? i : e[r]), null != u && ("string" == typeof u && (/^\-?\d*\.?\d+$/.test(u) || /^0[^.\s]+$/.test(u)) ? u = parseFloat(u) : !vn(u) && on.test(l) && (u = hn(r, l)), t.addValue(r, We(u, {
                    owner: t
                  })), void 0 === n[r] && (n[r] = u), null !== u && t.setBaseTarget(r, u))
                }
            }(this, n, s);
            const t = ((t, e, n, o) => {
              const i = function(t, {
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
                  if (!Ni(e)) return;
                  const n = zi(e, o);
                  n && t.set(n)
                }));
                for (const t in e) {
                  const i = e[t];
                  if (!Ni(i)) continue;
                  const s = zi(i, o);
                  s && (e[t] = s, n && void 0 === n[t] && (n[t] = i))
                }
                return {
                  target: e,
                  transitionEnd: n
                }
              }(t, e, o);
              return Qi(t, e = i.target, n, o = i.transitionEnd)
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
      class us extends ls {
        readValueFromInstance(t, e) {
          if (R.has(e)) {
            const t = cn(e);
            return t && t.default || 0
          } {
            const o = (n = t, window.getComputedStyle(n)),
              i = (O(e) ? o.getPropertyValue(e) : o[e]) || 0;
            return "string" == typeof i ? i.trim() : i
          }
          var n
        }
        measureInstanceViewportBox(t, {
          transformPagePoint: e
        }) {
          return Fi(t, e)
        }
        build(t, e, n, o) {
          it(t, e, n, o.transformTemplate)
        }
        scrapeMotionValuesFromProps(t) {
          return Vt(t)
        }
        renderInstance(t, e, n, o) {
          bt(t, e, n, o)
        }
      }
      class cs extends ls {
        constructor() {
          super(...arguments), this.isSVGTag = !1
        }
        getBaseTargetFromProps(t, e) {
          return t[e]
        }
        readValueFromInstance(t, e) {
          var n;
          return R.has(e) ? (null === (n = cn(e)) || void 0 === n ? void 0 : n.default) || 0 : (e = Tt.has(e) ? e : wt(e), t.getAttribute(e))
        }
        measureInstanceViewportBox() {
          return gi()
        }
        scrapeMotionValuesFromProps(t) {
          return Pt(t)
        }
        build(t, e, n, o) {
          ft(t, e, n, this.isSVGTag, o.transformTemplate)
        }
        renderInstance(t, e, n, o) {
          Et(t, e, 0, o)
        }
        mount(t) {
          this.isSVGTag = gt(t.tagName), super.mount(t)
        }
      }
      const hs = (t, e) => k(t) ? new cs(e, {
        enableHardwareAcceleration: !1
      }) : new us(e, {
        enableHardwareAcceleration: !0
      });

      function ds(t, e) {
        return e.max === e.min ? 0 : t / (e.max - e.min) * 100
      }
      const ps = {
          correct: (t, e) => {
            if (!e.target) return t;
            if ("string" == typeof t) {
              if (!J.test(t)) return t;
              t = parseFloat(t)
            }
            return `${ds(t,e.target.x)}% ${ds(t,e.target.y)}%`
          }
        },
        ms = "_$css",
        fs = {
          correct: (t, {
            treeScale: e,
            projectionDelta: n
          }) => {
            const o = t,
              i = t.includes("var("),
              s = [];
            i && (t = t.replace($i, (t => (s.push(t), ms))));
            const r = on.parse(t);
            if (r.length > 5) return o;
            const a = on.createTransformer(t),
              l = "number" != typeof r[0] ? 1 : 0,
              u = n.x.scale * e.x,
              c = n.y.scale * e.y;
            r[0 + l] /= u, r[1 + l] /= c;
            const h = Ln(u, c, .5);
            "number" == typeof r[2 + l] && (r[2 + l] /= h), "number" == typeof r[3 + l] && (r[3 + l] /= h);
            let d = a(r);
            if (i) {
              let t = 0;
              d = d.replace(ms, (() => {
                const e = s[t];
                return t++, e
              }))
            }
            return d
          }
        };
      class vs extends o.Component {
        componentDidMount() {
          const {
            visualElement: t,
            layoutGroup: e,
            switchLayoutGroup: n,
            layoutId: o
          } = this.props, {
            projection: i
          } = t;
          var s;
          s = gs, Object.assign(D, s), i && (e.group && e.group.add(i), n && n.register && o && n.register(i), i.root.didUpdate(), i.addEventListener("animationComplete", (() => {
            this.safeToRemove()
          })), i.setOptions({
            ...i.options,
            onExitComplete: () => this.safeToRemove()
          })), w.hasEverUpdated = !0
        }
        getSnapshotBeforeUpdate(t) {
          const {
            layoutDependency: e,
            visualElement: n,
            drag: o,
            isPresent: i
          } = this.props, s = n.projection;
          return s ? (s.isPresent = i, o || t.layoutDependency !== e || void 0 === e ? s.willUpdate() : this.safeToRemove(), t.isPresent !== i && (i ? s.promote() : s.relegate() || Le.postRender((() => {
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
      const gs = {
          borderRadius: {
            ...ps,
            applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
          },
          borderTopLeftRadius: ps,
          borderTopRightRadius: ps,
          borderBottomLeftRadius: ps,
          borderBottomRightRadius: ps,
          boxShadow: fs
        },
        ys = {
          measureLayout: function(t) {
            const [e, n] = be(), i = (0, o.useContext)(T);
            return o.createElement(vs, {
              ...t,
              layoutGroup: i,
              switchLayoutGroup: (0, o.useContext)(V),
              isPresent: e,
              safeToRemove: n
            })
          }
        },
        xs = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        ws = xs.length,
        bs = t => "string" == typeof t ? parseFloat(t) : t,
        Ts = t => "number" == typeof t || J.test(t);

      function Es(t, e) {
        return void 0 !== t[e] ? t[e] : t.borderRadius
      }
      const Vs = Ss(0, .5, qn),
        Ps = Ss(.5, .95, Hn);

      function Ss(t, e, n) {
        return o => o < t ? 0 : o > e ? 1 : n(zn(t, e, o))
      }

      function As(t, e) {
        t.min = e.min, t.max = e.max
      }

      function Cs(t, e) {
        As(t.x, e.x), As(t.y, e.y)
      }

      function Ms(t, e, n, o, i) {
        return t = Pi(t -= e, 1 / n, o), void 0 !== i && (t = Pi(t, 1 / i, o)), t
      }

      function ks(t, e, [n, o, i], s, r) {
        ! function(t, e = 0, n = 1, o = .5, i, s = t, r = t) {
          if (K.test(e) && (e = parseFloat(e), e = Ln(r.min, r.max, e / 100) - r.min), "number" != typeof e) return;
          let a = Ln(s.min, s.max, o);
          t === s && (a -= e), t.min = Ms(t.min, e, n, a, i), t.max = Ms(t.max, e, n, a, i)
        }(t, e[n], e[o], e[i], e.scale, s, r)
      }
      const Ds = ["x", "scaleX", "originX"],
        Ls = ["y", "scaleY", "originY"];

      function Rs(t, e, n, o) {
        ks(t.x, e, Ds, null == n ? void 0 : n.x, null == o ? void 0 : o.x), ks(t.y, e, Ls, null == n ? void 0 : n.y, null == o ? void 0 : o.y)
      }

      function Bs(t) {
        return 0 === t.translate && 1 === t.scale
      }

      function Fs(t) {
        return Bs(t.x) && Bs(t.y)
      }

      function js(t, e) {
        return t.x.min === e.x.min && t.x.max === e.x.max && t.y.min === e.y.min && t.y.max === e.y.max
      }

      function Is(t) {
        return ii(t.x) / ii(t.y)
      }
      class Os {
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
          const o = this.lead;
          if (t !== o && (this.prevLead = o, this.lead = t, t.show(), o)) {
            o.instance && o.scheduleRender(), t.scheduleRender(), t.resumeFrom = o, e && (t.resumeFrom.preserveOpacity = !0), o.snapshot && (t.snapshot = o.snapshot, t.snapshot.latestValues = o.animationValues || o.latestValues), (null === (n = t.root) || void 0 === n ? void 0 : n.isUpdating) && (t.isLayoutDirty = !0);
            const {
              crossfade: i
            } = t.options;
            !1 === i && o.hide()
          }
        }
        exitAnimationComplete() {
          this.members.forEach((t => {
            var e, n, o, i, s;
            null === (n = (e = t.options).onExitComplete) || void 0 === n || n.call(e), null === (s = null === (o = t.resumingFrom) || void 0 === o ? void 0 : (i = o.options).onExitComplete) || void 0 === s || s.call(i)
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

      function Us(t, e, n) {
        let o = "";
        const i = t.x.translate / e.x,
          s = t.y.translate / e.y;
        if ((i || s) && (o = `translate3d(${i}px, ${s}px, 0) `), 1 === e.x && 1 === e.y || (o += `scale(${1/e.x}, ${1/e.y}) `), n) {
          const {
            rotate: t,
            rotateX: e,
            rotateY: i
          } = n;
          t && (o += `rotate(${t}deg) `), e && (o += `rotateX(${e}deg) `), i && (o += `rotateY(${i}deg) `)
        }
        const r = t.x.scale * e.x,
          a = t.y.scale * e.y;
        return 1 === r && 1 === a || (o += `scale(${r}, ${a})`), o || "none"
      }
      const Ns = (t, e) => t.depth - e.depth;
      class $s {
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
          this.isDirty && this.children.sort(Ns), this.isDirty = !1, this.children.forEach(t)
        }
      }
      const zs = ["", "X", "Y", "Z"];
      let Ws = 0;

      function Ys({
        attachResizeListener: t,
        defaultParent: e,
        measureScroll: n,
        checkIsScrollRoot: o,
        resetTransform: i
      }) {
        return class {
          constructor(t, n = {}, o = (null == e ? void 0 : e())) {
            this.id = Ws++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isTransformDirty = !1, this.isProjectionDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = {
              x: 1,
              y: 1
            }, this.eventHandlers = new Map, this.potentialNodes = new Map, this.checkUpdateFailed = () => {
              this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
            }, this.updateProjection = () => {
              this.nodes.forEach(_s), this.nodes.forEach(Js), this.nodes.forEach(Qs)
            }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.elementId = t, this.latestValues = n, this.root = o ? o.root || o : this, this.path = o ? [...o.path, o] : [], this.parent = o, this.depth = o ? o.depth + 1 : 0, t && this.root.registerPotentialNode(t, this);
            for (let t = 0; t < this.path.length; t++) this.path[t].shouldResetTransform = !0;
            this.root === this && (this.nodes = new $s)
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
            var o;
            if (this.instance) return;
            this.isSVG = e instanceof SVGElement && "svg" !== e.tagName, this.instance = e;
            const {
              layoutId: i,
              layout: s,
              visualElement: r
            } = this.options;
            if (r && !r.current && r.mount(e), this.root.nodes.add(this), null === (o = this.parent) || void 0 === o || o.children.add(this), this.elementId && this.root.potentialNodes.delete(this.elementId), n && (s || i) && (this.isLayoutDirty = !0), t) {
              let n;
              const o = () => this.root.updateBlockedByResize = !1;
              t(e, (() => {
                this.root.updateBlockedByResize = !0, n && n(), n = Eo(o, 250), w.hasAnimatedSinceResize && (w.hasAnimatedSinceResize = !1, this.nodes.forEach(Ks))
              }))
            }
            i && this.root.registerSharedNode(i, this), !1 !== this.options.animate && r && (i || s) && this.addEventListener("didUpdate", (({
              delta: t,
              hasLayoutChanged: e,
              hasRelativeTargetChanged: n,
              layout: o
            }) => {
              var i, s, a, l, u;
              if (this.isTreeAnimationBlocked()) return this.target = void 0, void(this.relativeTarget = void 0);
              const c = null !== (s = null !== (i = this.options.transition) && void 0 !== i ? i : r.getDefaultTransition()) && void 0 !== s ? s : sr,
                {
                  onLayoutAnimationStart: h,
                  onLayoutAnimationComplete: d
                } = r.getProps(),
                p = !this.targetLayout || !js(this.targetLayout, o) || n,
                m = !e && n;
              if ((null === (a = this.resumeFrom) || void 0 === a ? void 0 : a.instance) || m || e && (p || !this.currentAnimation)) {
                this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(t, m);
                const e = {
                  ...Bo(c, "layout"),
                  onPlay: h,
                  onComplete: d
                };
                r.shouldReduceMotion && (e.delay = 0, e.type = !1), this.startAnimation(e)
              } else e || 0 !== this.animationProgress || Ks(this), this.isLead() && (null === (u = (l = this.options).onExitComplete) || void 0 === u || u.call(l));
              this.targetLayout = o
            }))
          }
          unmount() {
            var t, e;
            this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this), null === (t = this.getStack()) || void 0 === t || t.remove(this), null === (e = this.parent) || void 0 === e || e.children.delete(this), this.instance = void 0, Re.preRender(this.updateProjection)
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
            this.isUpdateBlocked() || (this.isUpdating = !0, null === (t = this.nodes) || void 0 === t || t.forEach(tr), this.animationId++)
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
              layoutId: i,
              layout: s
            } = this.options;
            if (void 0 === i && !s) return;
            const r = null === (o = this.options.visualElement) || void 0 === o ? void 0 : o.getProps().transformTemplate;
            this.prevTransformTemplateValue = null == r ? void 0 : r(this.latestValues, ""), this.updateSnapshot(), t && this.notifyListeners("willUpdate")
          }
          didUpdate() {
            if (this.isUpdateBlocked()) return this.unblockUpdate(), this.clearAllSnapshots(), void this.nodes.forEach(qs);
            this.isUpdating && (this.isUpdating = !1, this.potentialNodes.size && (this.potentialNodes.forEach(rr), this.potentialNodes.clear()), this.nodes.forEach(Zs), this.nodes.forEach(Hs), this.nodes.forEach(Xs), this.clearAllSnapshots(), Be.update(), Be.preRender(), Be.render())
          }
          clearAllSnapshots() {
            this.nodes.forEach(Gs), this.sharedNodes.forEach(er)
          }
          scheduleUpdateProjection() {
            Le.preRender(this.updateProjection, !1, !0)
          }
          scheduleCheckAfterUnmount() {
            Le.postRender((() => {
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
            this.layout = this.measure(!1), this.layoutCorrected = gi(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox), null === (t = this.options.visualElement) || void 0 === t || t.notify("LayoutMeasure", this.layout.layoutBox, null == e ? void 0 : e.layoutBox)
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
            if (!i) return;
            const e = this.isLayoutDirty || this.shouldResetTransform,
              n = this.projectionDelta && !Fs(this.projectionDelta),
              o = null === (t = this.options.visualElement) || void 0 === t ? void 0 : t.getProps().transformTemplate,
              s = null == o ? void 0 : o(this.latestValues, ""),
              r = s !== this.prevTransformTemplateValue;
            e && (n || Ti(this.latestValues) || r) && (i(this.instance, s), this.shouldResetTransform = !1, this.scheduleRender())
          }
          measure(t = !0) {
            const e = this.measurePageBox();
            let n = this.removeElementScroll(e);
            var o;
            return t && (n = this.removeTransform(n)), ar((o = n).x), ar(o.y), {
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
            if (!t) return gi();
            const e = t.measureViewportBox(),
              {
                scroll: n
              } = this.root;
            return n && (ki(e.x, n.offset.x), ki(e.y, n.offset.y)), e
          }
          removeElementScroll(t) {
            const e = gi();
            Cs(e, t);
            for (let n = 0; n < this.path.length; n++) {
              const o = this.path[n],
                {
                  scroll: i,
                  options: s
                } = o;
              if (o !== this.root && i && s.layoutScroll) {
                if (i.isRoot) {
                  Cs(e, t);
                  const {
                    scroll: n
                  } = this.root;
                  n && (ki(e.x, -n.offset.x), ki(e.y, -n.offset.y))
                }
                ki(e.x, i.offset.x), ki(e.y, i.offset.y)
              }
            }
            return e
          }
          applyTransform(t, e = !1) {
            const n = gi();
            Cs(n, t);
            for (let t = 0; t < this.path.length; t++) {
              const o = this.path[t];
              !e && o.options.layoutScroll && o.scroll && o !== o.root && Bi(n, {
                x: -o.scroll.offset.x,
                y: -o.scroll.offset.y
              }), Ti(o.latestValues) && Bi(n, o.latestValues)
            }
            return Ti(this.latestValues) && Bi(n, this.latestValues), n
          }
          removeTransform(t) {
            var e;
            const n = gi();
            Cs(n, t);
            for (let t = 0; t < this.path.length; t++) {
              const o = this.path[t];
              if (!o.instance) continue;
              if (!Ti(o.latestValues)) continue;
              bi(o.latestValues) && o.updateSnapshot();
              const i = gi();
              Cs(i, o.measurePageBox()), Rs(n, o.latestValues, null === (e = o.snapshot) || void 0 === e ? void 0 : e.layoutBox, i)
            }
            return Ti(this.latestValues) && Rs(n, this.latestValues), n
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
                t && t.layout ? (this.relativeParent = t, this.relativeTarget = gi(), this.relativeTargetOrigin = gi(), ci(this.relativeTargetOrigin, this.layout.layoutBox, t.layout.layoutBox), Cs(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
              }
              var i, s, r;
              if ((this.relativeTarget || this.targetDelta) && (this.target || (this.target = gi(), this.targetWithTransforms = gi()), this.relativeTarget && this.relativeTargetOrigin && (null === (t = this.relativeParent) || void 0 === t ? void 0 : t.target) ? (i = this.target, s = this.relativeTarget, r = this.relativeParent.target, li(i.x, s.x, r.x), li(i.y, s.y, r.y)) : this.targetDelta ? (Boolean(this.resumingFrom) ? this.target = this.applyTransform(this.layout.layoutBox) : Cs(this.target, this.layout.layoutBox), Ci(this.target, this.targetDelta)) : Cs(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget)) {
                this.attemptToResolveRelativeTarget = !1;
                const t = this.getClosestProjectingParent();
                t && Boolean(t.resumingFrom) === Boolean(this.resumingFrom) && !t.options.layoutScroll && t.target ? (this.relativeParent = t, this.relativeTarget = gi(), this.relativeTargetOrigin = gi(), ci(this.relativeTargetOrigin, this.target, t.target), Cs(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
              }
            }
          }
          getClosestProjectingParent() {
            if (this.parent && !bi(this.parent.latestValues) && !Ei(this.parent.latestValues)) return (this.parent.relativeTarget || this.parent.targetDelta) && this.parent.layout ? this.parent : this.parent.getClosestProjectingParent()
          }
          calcProjection() {
            var t;
            const {
              isProjectionDirty: e,
              isTransformDirty: n
            } = this;
            this.isProjectionDirty = this.isTransformDirty = !1;
            const o = this.getLead(),
              i = Boolean(this.resumingFrom) || this !== o;
            let s = !0;
            if (e && (s = !1), i && n && (s = !1), s) return;
            const {
              layout: r,
              layoutId: a
            } = this.options;
            if (this.isTreeAnimating = Boolean((null === (t = this.parent) || void 0 === t ? void 0 : t.isTreeAnimating) || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !r && !a) return;
            Cs(this.layoutCorrected, this.layout.layoutBox),
              function(t, e, n, o = !1) {
                var i, s;
                const r = n.length;
                if (!r) return;
                let a, l;
                e.x = e.y = 1;
                for (let u = 0; u < r; u++) a = n[u], l = a.projectionDelta, "contents" !== (null === (s = null === (i = a.instance) || void 0 === i ? void 0 : i.style) || void 0 === s ? void 0 : s.display) && (o && a.options.layoutScroll && a.scroll && a !== a.root && Bi(t, {
                  x: -a.scroll.offset.x,
                  y: -a.scroll.offset.y
                }), l && (e.x *= l.x.scale, e.y *= l.y.scale, Ci(t, l)), o && Ti(a.latestValues) && Bi(t, a.latestValues));
                e.x = Mi(e.x), e.y = Mi(e.y)
              }(this.layoutCorrected, this.treeScale, this.path, i);
            const {
              target: l
            } = o;
            if (!l) return;
            this.projectionDelta || (this.projectionDelta = vi(), this.projectionDeltaWithTransform = vi());
            const u = this.treeScale.x,
              c = this.treeScale.y,
              h = this.projectionTransform;
            ai(this.projectionDelta, this.layoutCorrected, l, this.latestValues), this.projectionTransform = Us(this.projectionDelta, this.treeScale), this.projectionTransform === h && this.treeScale.x === u && this.treeScale.y === c || (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", l))
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
            const i = this.snapshot,
              s = (null == i ? void 0 : i.latestValues) || {},
              r = {
                ...this.latestValues
              },
              a = vi();
            this.relativeTarget = this.relativeTargetOrigin = void 0, this.attemptToResolveRelativeTarget = !e;
            const l = gi(),
              u = (null == i ? void 0 : i.source) !== (null === (n = this.layout) || void 0 === n ? void 0 : n.source),
              c = ((null === (o = this.getStack()) || void 0 === o ? void 0 : o.members.length) || 0) <= 1,
              h = Boolean(u && !c && !0 === this.options.crossfade && !this.path.some(ir));
            this.animationProgress = 0, this.mixTargetDelta = e => {
              var n;
              const o = e / 1e3;
              var i, d, p, m;
              nr(a.x, t.x, o), nr(a.y, t.y, o), this.setTargetDelta(a), this.relativeTarget && this.relativeTargetOrigin && this.layout && (null === (n = this.relativeParent) || void 0 === n ? void 0 : n.layout) && (ci(l, this.layout.layoutBox, this.relativeParent.layout.layoutBox), i = this.relativeTarget, d = this.relativeTargetOrigin, p = l, m = o, or(i.x, d.x, p.x, m), or(i.y, d.y, p.y, m)), u && (this.animationValues = r, function(t, e, n, o, i, s) {
                i ? (t.opacity = Ln(0, void 0 !== n.opacity ? n.opacity : 1, Vs(o)), t.opacityExit = Ln(void 0 !== e.opacity ? e.opacity : 1, 0, Ps(o))) : s && (t.opacity = Ln(void 0 !== e.opacity ? e.opacity : 1, void 0 !== n.opacity ? n.opacity : 1, o));
                for (let i = 0; i < ws; i++) {
                  const s = `border${xs[i]}Radius`;
                  let r = Es(e, s),
                    a = Es(n, s);
                  void 0 === r && void 0 === a || (r || (r = 0), a || (a = 0), 0 === r || 0 === a || Ts(r) === Ts(a) ? (t[s] = Math.max(Ln(bs(r), bs(a), o), 0), (K.test(a) || K.test(r)) && (t[s] += "%")) : t[s] = a)
                }(e.rotate || n.rotate) && (t.rotate = Ln(e.rotate || 0, n.rotate || 0, o))
              }(r, s, this.latestValues, o, h, c)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = o
            }, this.mixTargetDelta(0)
          }
          startAnimation(t) {
            var e, n;
            this.notifyListeners("animationStart"), null === (e = this.currentAnimation) || void 0 === e || e.stop(), this.resumingFrom && (null === (n = this.resumingFrom.currentAnimation) || void 0 === n || n.stop()), this.pendingAnimation && (Re.update(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = Le.update((() => {
              w.hasAnimatedSinceResize = !0, this.currentAnimation = function(t, e, n = {}) {
                const o = F(t) ? t : We(t);
                return o.start(Uo("", o, e, n)), {
                  stop: () => o.stop(),
                  isAnimating: () => o.isAnimating()
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
              layout: o,
              latestValues: i
            } = t;
            if (e && n && o) {
              if (this !== t && this.layout && o && lr(this.options.animationType, this.layout.layoutBox, o.layoutBox)) {
                n = this.target || gi();
                const e = ii(this.layout.layoutBox.x);
                n.x.min = t.target.x.min, n.x.max = n.x.min + e;
                const o = ii(this.layout.layoutBox.y);
                n.y.min = t.target.y.min, n.y.max = n.y.min + o
              }
              Cs(e, n), Bi(e, i), ai(this.projectionDeltaWithTransform, this.layoutCorrected, e, i)
            }
          }
          registerSharedNode(t, e) {
            var n, o, i;
            this.sharedNodes.has(t) || this.sharedNodes.set(t, new Os), this.sharedNodes.get(t).add(e), e.promote({
              transition: null === (n = e.options.initialPromotionConfig) || void 0 === n ? void 0 : n.transition,
              preserveFollowOpacity: null === (i = null === (o = e.options.initialPromotionConfig) || void 0 === o ? void 0 : o.shouldPreserveFollowOpacity) || void 0 === i ? void 0 : i.call(o, e)
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
            for (let e = 0; e < zs.length; e++) {
              const i = "rotate" + zs[e];
              n[i] && (o[i] = n[i], t.setStaticValue(i, 0))
            }
            null == t || t.render();
            for (const e in o) t.setStaticValue(e, o[e]);
            t.scheduleRender()
          }
          getProjectionStyles(t = {}) {
            var e, n, o;
            const i = {};
            if (!this.instance || this.isSVG) return i;
            if (!this.isVisible) return {
              visibility: "hidden"
            };
            i.visibility = "";
            const s = null === (e = this.options.visualElement) || void 0 === e ? void 0 : e.getProps().transformTemplate;
            if (this.needsReset) return this.needsReset = !1, i.opacity = "", i.pointerEvents = kt(t.pointerEvents) || "", i.transform = s ? s(this.latestValues, "") : "none", i;
            const r = this.getLead();
            if (!this.projectionDelta || !this.layout || !r.target) {
              const e = {};
              return this.options.layoutId && (e.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1, e.pointerEvents = kt(t.pointerEvents) || ""), this.hasProjected && !Ti(this.latestValues) && (e.transform = s ? s({}, "") : "none", this.hasProjected = !1), e
            }
            const a = r.animationValues || r.latestValues;
            this.applyTransformsToTarget(), i.transform = Us(this.projectionDeltaWithTransform, this.treeScale, a), s && (i.transform = s(a, i.transform));
            const {
              x: l,
              y: u
            } = this.projectionDelta;
            i.transformOrigin = `${100*l.origin}% ${100*u.origin}% 0`, r.animationValues ? i.opacity = r === this ? null !== (o = null !== (n = a.opacity) && void 0 !== n ? n : this.latestValues.opacity) && void 0 !== o ? o : 1 : this.preserveOpacity ? this.latestValues.opacity : a.opacityExit : i.opacity = r === this ? void 0 !== a.opacity ? a.opacity : "" : void 0 !== a.opacityExit ? a.opacityExit : 0;
            for (const t in D) {
              if (void 0 === a[t]) continue;
              const {
                correct: e,
                applyTo: n
              } = D[t], o = e(a[t], r);
              if (n) {
                const t = n.length;
                for (let e = 0; e < t; e++) i[n[e]] = o
              } else i[t] = o
            }
            return this.options.layoutId && (i.pointerEvents = r === this ? kt(t.pointerEvents) || "" : "none"), i
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
          }
          resetTree() {
            this.root.nodes.forEach((t => {
              var e;
              return null === (e = t.currentAnimation) || void 0 === e ? void 0 : e.stop()
            })), this.root.nodes.forEach(qs), this.root.sharedNodes.clear()
          }
        }
      }

      function Hs(t) {
        t.updateLayout()
      }

      function Xs(t) {
        var e, n, o;
        const i = (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) || t.snapshot;
        if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
          const {
            layoutBox: e,
            measuredBox: n
          } = t.layout, {
            animationType: o
          } = t.options, s = i.source !== t.layout.source;
          "size" === o ? yi((t => {
            const n = s ? i.measuredBox[t] : i.layoutBox[t],
              o = ii(n);
            n.min = e[t].min, n.max = n.min + o
          })) : lr(o, i.layoutBox, e) && yi((t => {
            const n = s ? i.measuredBox[t] : i.layoutBox[t],
              o = ii(e[t]);
            n.max = n.min + o
          }));
          const r = vi();
          ai(r, e, i.layoutBox);
          const a = vi();
          s ? ai(a, t.applyTransform(n, !0), i.measuredBox) : ai(a, e, i.layoutBox);
          const l = !Fs(r);
          let u = !1;
          if (!t.resumeFrom) {
            const n = t.getClosestProjectingParent();
            if (n && !n.resumeFrom) {
              const {
                snapshot: t,
                layout: o
              } = n;
              if (t && o) {
                const n = gi();
                ci(n, i.layoutBox, t.layoutBox);
                const s = gi();
                ci(s, e, o.layoutBox), js(n, s) || (u = !0)
              }
            }
          }
          t.notifyListeners("didUpdate", {
            layout: e,
            snapshot: i,
            delta: a,
            layoutDelta: r,
            hasLayoutChanged: l,
            hasRelativeTargetChanged: u
          })
        } else t.isLead() && (null === (o = (n = t.options).onExitComplete) || void 0 === o || o.call(n));
        t.options.transition = void 0
      }

      function _s(t) {
        t.isProjectionDirty || (t.isProjectionDirty = Boolean(t.parent && t.parent.isProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = Boolean(t.parent && t.parent.isTransformDirty))
      }

      function Gs(t) {
        t.clearSnapshot()
      }

      function qs(t) {
        t.clearMeasurements()
      }

      function Zs(t) {
        const {
          visualElement: e
        } = t.options;
        (null == e ? void 0 : e.getProps().onBeforeLayoutMeasure) && e.notify("BeforeLayoutMeasure"), t.resetTransform()
      }

      function Ks(t) {
        t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0
      }

      function Js(t) {
        t.resolveTargetDelta()
      }

      function Qs(t) {
        t.calcProjection()
      }

      function tr(t) {
        t.resetRotation()
      }

      function er(t) {
        t.removeLeadSnapshot()
      }

      function nr(t, e, n) {
        t.translate = Ln(e.translate, 0, n), t.scale = Ln(e.scale, 1, n), t.origin = e.origin, t.originPoint = e.originPoint
      }

      function or(t, e, n, o) {
        t.min = Ln(e.min, n.min, o), t.max = Ln(e.max, n.max, o)
      }

      function ir(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit
      }
      const sr = {
        duration: .45,
        ease: [.4, 0, .1, 1]
      };

      function rr(t, e) {
        let n = t.root;
        for (let e = t.path.length - 1; e >= 0; e--)
          if (Boolean(t.path[e].instance)) {
            n = t.path[e];
            break
          } const o = (n && n !== t.root ? n.instance : document).querySelector(`[data-projection-id="${e}"]`);
        o && t.mount(o, !0)
      }

      function ar(t) {
        t.min = Math.round(t.min), t.max = Math.round(t.max)
      }

      function lr(t, e, n) {
        return "position" === t || "preserve-aspect" === t && !si(Is(e), Is(n), .2)
      }
      const ur = Ys({
          attachResizeListener: (t, e) => jt(t, "resize", e),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop
          }),
          checkIsScrollRoot: () => !0
        }),
        cr = {
          current: void 0
        },
        hr = Ys({
          measureScroll: t => ({
            x: t.scrollLeft,
            y: t.scrollTop
          }),
          defaultParent: () => {
            if (!cr.current) {
              const t = new ur(0, {});
              t.mount(window), t.setOptions({
                layoutScroll: !0
              }), cr.current = t
            }
            return cr.current
          },
          resetTransform: (t, e) => {
            t.style.transform = void 0 !== e ? e : "none"
          },
          checkIsScrollRoot: t => Boolean("fixed" === window.getComputedStyle(t).position)
        }),
        dr = {
          ...qo,
          ...we,
          ...Ui,
          ...ys
        },
        pr = C(((t, e) => function(t, {
          forwardMotionProps: e = !1
        }, n, o, i) {
          return {
            ...k(t) ? Rt : Bt,
            preloadedFeatures: n,
            useRender: xt(e),
            createVisualElement: o,
            projectionNodeConstructor: i,
            Component: t
          }
        }(t, e, dr, hs, hr)))
    }
  }
]);
//# sourceMappingURL=b43d97098e6b07c3f07a.js.map