try {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    e = (new t.Error).stack;
  e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "8d29a3e1-c605-47cf-94c3-81f55d6bcc8e", t._sentryDebugIdIdentifier = "sentry-dbid-8d29a3e1-c605-47cf-94c3-81f55d6bcc8e")
} catch (t) {} {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  t._sentryModuleMetadata = t._sentryModuleMetadata || {}, t._sentryModuleMetadata[(new t.Error).stack] = Object.assign({}, t._sentryModuleMetadata[(new t.Error).stack], {
    release: "e75daf86583d2f46160d46d6e78dabbc975e828b",
    packageName: "@rockstargames/sites-gta-gen9",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "e75daf86583d2f46160d46d6e78dabbc975e828b"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [2625, 2649, 5030], {
    42625: (t, e, n) => {
      "use strict";
      n.r(e), n.d(e, {
        AnimatePresence: () => zs,
        AnimateSharedLayout: () => qs,
        AnimationType: () => $t,
        DeprecatedLayoutGroupContext: () => Ws,
        DragControls: () => pl,
        FlatTree: () => ss,
        LayoutGroup: () => Gs,
        LayoutGroupContext: () => P,
        LazyMotion: () => Ks,
        MotionConfig: () => Zs,
        MotionConfigContext: () => i,
        MotionContext: () => r,
        MotionValue: () => Je,
        PresenceContext: () => a,
        Reorder: () => ha,
        SwitchLayoutGroupContext: () => S,
        VisualElement: () => Tr,
        addPointerEvent: () => oe,
        addScaleCorrector: () => B,
        animate: () => Or,
        animateVisualElement: () => oi,
        animationControls: () => sl,
        animations: () => di,
        buildTransform: () => $,
        calcLength: () => bi,
        checkTargetForNewValues: () => kn,
        clamp: () => H,
        createBox: () => Bi,
        createDomMotionComponent: () => Ds,
        createMotionComponent: () => C,
        delay: () => No,
        distance: () => pi,
        distance2D: () => fi,
        domAnimation: () => da,
        domMax: () => pa,
        filterProps: () => gt,
        isBrowser: () => l,
        isDragActive: () => ue,
        isMotionComponent: () => gl,
        isMotionValue: () => j,
        isValidMotionProp: () => pt,
        m: () => Bs,
        makeUseVisualState: () => Ft,
        mix: () => Gn,
        motion: () => Rs,
        motionValue: () => Qe,
        optimizedAppearDataAttribute: () => jn,
        pipe: () => fe,
        resolveMotionValue: () => It,
        spring: () => Lo,
        startOptimizedAppearAnimation: () => bl,
        transform: () => ra,
        unwrapMotionComponent: () => vl,
        useAnimation: () => ll,
        useAnimationControls: () => al,
        useAnimationFrame: () => Qa,
        useCycle: () => cl,
        useDeprecatedAnimatedState: () => Sl,
        useDeprecatedInvertedScale: () => Ml,
        useDomEvent: () => Wt,
        useDragControls: () => ml,
        useElementScroll: () => Ka,
        useForceUpdate: () => Fs,
        useInView: () => dl,
        useInstantLayoutTransition: () => yl,
        useInstantTransition: () => wl,
        useIsPresent: () => Me,
        useIsomorphicLayoutEffect: () => u,
        useMotionTemplate: () => fa,
        useMotionValue: () => oa,
        useMotionValueEvent: () => ol,
        usePresence: () => Ce,
        useReducedMotion: () => il,
        useReducedMotionConfig: () => rl,
        useResetProjection: () => El,
        useScroll: () => Za,
        useSpring: () => ma,
        useTime: () => tl,
        useTransform: () => aa,
        useUnmountEffect: () => de,
        useVelocity: () => ga,
        useViewportScroll: () => Ja,
        useVisualElementContext: () => s,
        useWillChange: () => nl,
        wrap: () => ul,
        wrapHandler: () => Zt
      });
      var o = n(62229);
      const i = (0, o.createContext)({
          transformPagePoint: t => t,
          isStatic: !1,
          reducedMotion: "never"
        }),
        r = (0, o.createContext)({});

      function s() {
        return (0, o.useContext)(r).visualElement
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

      function E(t) {
        const e = (0, o.useRef)(null);
        return null === e.current && (e.current = t()), e.current
      }
      const b = {
        hasAnimatedSinceResize: !0,
        hasEverUpdated: !1
      };
      let T = 1;
      const P = (0, o.createContext)({});
      class V extends o.Component {
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
      const S = (0, o.createContext)({}),
        A = Symbol.for("motionComponentSymbol");

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
              ...(0, o.useContext)(i),
              ...y,
              layoutId: M(y)
            },
            {
              isStatic: A
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
              }(t, (0, o.useContext)(r));
              return (0, o.useMemo)((() => ({
                initial: e,
                animate: n
              })), [v(e), v(n)])
            }(y),
            k = A ? void 0 : E((() => {
              if (b.hasEverUpdated) return T++
            })),
            R = f(y, A);
          if (!A && l) {
            L.visualElement = function(t, e, n, r) {
              const l = s(),
                h = (0, o.useContext)(c),
                d = (0, o.useContext)(a),
                p = (0, o.useContext)(i).reducedMotion,
                f = (0, o.useRef)();
              r = r || h.renderer, !f.current && r && (f.current = r(t, {
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
            const r = (0, o.useContext)(c).strict,
              l = (0, o.useContext)(S);
            L.visualElement && (C = L.visualElement.loadFeatures(P, r, t, k, n || x.projectionNodeConstructor, l))
          }
          return o.createElement(V, {
            visualElement: L.visualElement,
            props: P
          }, C, o.createElement(r.Provider, {
            value: L
          }, p(g, y, k, function(t, e, n) {
            return (0, o.useCallback)((o => {
              o && t.mount && t.mount(o), e && (o ? e.mount(o) : e.unmount()), n && ("function" == typeof n ? n(o) : h(n) && (n.current = o))
            }), [e])
          }(R, L.visualElement, w), R, A, L.visualElement)))
        }));
        return y[A] = g, y
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
        F = new Set(I);

      function O(t, {
        layout: e,
        layoutId: n
      }) {
        return F.has(t) || t.startsWith("origin") || (e || void 0 !== n) && (!!D[t] || "opacity" === t)
      }
      const j = t => !!(null == t ? void 0 : t.getVelocity),
        U = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective"
        },
        N = (t, e) => I.indexOf(t) - I.indexOf(e);

      function $({
        transform: t,
        transformKeys: e
      }, {
        enableHardwareAcceleration: n = !0,
        allowTransformNone: o = !0
      }, i, r) {
        let s = "";
        e.sort(N);
        for (const n of e) s += `${U[n]||n}(${t[n]}) `;
        return n && !t.z && (s += "translateZ(0)"), s = s.trim(), r ? s = r(t, i ? "" : s) : o && i && (s = "none"), s
      }

      function z(t) {
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
        G = {
          ...Y,
          default: 1
        },
        _ = t => Math.round(1e5 * t) / 1e5,
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
        it = Q("vw"),
        rt = {
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
          scale: G,
          scaleX: G,
          scaleY: G,
          scaleZ: G,
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
          originX: rt,
          originY: rt,
          originZ: nt,
          zIndex: st,
          fillOpacity: X,
          strokeOpacity: X,
          numOctaves: st
        };

      function lt(t, e, n, o) {
        const {
          style: i,
          vars: r,
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
          if (z(t)) {
            r[t] = n;
            continue
          }
          const o = at[t],
            d = W(n, o);
          if (F.has(t)) {
            if (u = !0, s[t] = d, a.push(t), !h) continue;
            n !== (o.default || 0) && (h = !1)
          } else t.startsWith("origin") ? (c = !0, l[t] = d) : i[t] = d
        }
        if (e.transform || (u || o ? i.transform = $(t, n, h, o) : i.transform && (i.transform = "none")), c) {
          const {
            originX: t = "50%",
            originY: e = "50%",
            originZ: n = 0
          } = l;
          i.transformOrigin = `${t} ${e} ${n}`
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
        for (const o in e) j(e[o]) || O(o, n) || (t[o] = e[o])
      }

      function ht(t, e, n) {
        const i = {},
          r = function(t, e, n) {
            const i = {};
            return ct(i, t.style || {}, t), Object.assign(i, function({
              transformTemplate: t
            }, e, n) {
              return (0, o.useMemo)((() => {
                const o = ut();
                return lt(o, e, {
                  enableHardwareAcceleration: !n
                }, t), Object.assign({}, o.vars, o.style)
              }), [e])
            }(t, e, n)), t.transformValues ? t.transformValues(i) : i
          }(t, e, n);
        return t.drag && !1 !== t.dragListener && (i.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = !0 === t.drag ? "none" : "pan-" + ("x" === t.drag ? "y" : "x")), i.style = r, i
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
        for (const i in t)(ft(i) || !0 === n && pt(i) || !e && !pt(i) || t.draggable && i.startsWith("onDrag")) && (o[i] = t[i]);
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
        originY: i,
        pathLength: r,
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
        d.transform && (f && (p.transform = d.transform), delete d.transform), f && (void 0 !== o || void 0 !== i || p.transform) && (p.transformOrigin = function(t, e, n) {
          return `${vt(e,t.x,t.width)} ${vt(n,t.y,t.height)}`
        }(f, void 0 !== o ? o : .5, void 0 !== i ? i : .5)), void 0 !== e && (d.x = e), void 0 !== n && (d.y = n), void 0 !== r && function(t, e, n = 1, o = 0, i = !0) {
          t.pathLength = 1;
          const r = i ? yt : xt;
          t[r.offset] = nt.transform(-o);
          const s = nt.transform(e),
            a = nt.transform(n);
          t[r.array] = `${s} ${a}`
        }(d, r, s, a, !1)
      }
      const Et = () => ({
          ...ut(),
          attrs: {}
        }),
        bt = t => "string" == typeof t && "svg" === t.toLowerCase();

      function Tt(t, e, n, i) {
        const r = (0, o.useMemo)((() => {
          const n = Et();
          return wt(n, e, {
            enableHardwareAcceleration: !1
          }, bt(i), t.transformTemplate), {
            ...n.attrs,
            style: {
              ...n.style
            }
          }
        }), [e]);
        if (t.style) {
          const e = {};
          ct(e, t.style, t), r.style = {
            ...e,
            ...r.style
          }
        }
        return r
      }

      function Pt(t = !1) {
        return (e, n, i, r, {
          latestValues: s
        }, a) => {
          const l = (R(e) ? Tt : ht)(n, s, a, e),
            u = {
              ...gt(n, "string" == typeof e, t),
              ...l,
              ref: r
            };
          return i && (u["data-projection-id"] = i), (0, o.createElement)(e, u)
        }
      }
      const Vt = t => t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();

      function St(t, {
        style: e,
        vars: n
      }, o, i) {
        Object.assign(t.style, e, i && i.getProjectionStyles(o));
        for (const e in n) t.style.setProperty(e, n[e])
      }
      const At = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

      function Ct(t, e, n, o) {
        St(t, e, void 0, o);
        for (const n in e.attrs) t.setAttribute(At.has(n) ? n : Vt(n), e.attrs[n])
      }

      function Mt(t) {
        const {
          style: e
        } = t, n = {};
        for (const o in e)(j(e[o]) || O(o, t)) && (n[o] = e[o]);
        return n
      }

      function Lt(t) {
        const e = Mt(t);
        for (const n in t) j(t[n]) && (e["x" === n || "y" === n ? "attr" + n.toUpperCase() : n] = t[n]);
        return e
      }

      function kt(t, e, n, o = {}, i = {}) {
        return "function" == typeof e && (e = e(void 0 !== n ? n : t.custom, o, i)), "string" == typeof e && (e = t.variants && t.variants[e]), "function" == typeof e && (e = e(void 0 !== n ? n : t.custom, o, i)), e
      }
      const Rt = t => Array.isArray(t),
        Dt = t => Boolean(t && "object" == typeof t && t.mix && t.toValue),
        Bt = t => Rt(t) ? t[t.length - 1] || 0 : t;

      function It(t) {
        const e = j(t) ? t.get() : t;
        return Dt(e) ? e.toValue() : e
      }
      const Ft = t => (e, n) => {
        const i = (0, o.useContext)(r),
          s = (0, o.useContext)(a),
          l = () => function({
            scrapeMotionValuesFromProps: t,
            createRenderState: e,
            onMount: n
          }, o, i, r) {
            const s = {
              latestValues: Ot(o, i, r, t),
              renderState: e()
            };
            return n && (s.mount = t => n(o, t, s)), s
          }(t, e, i, s);
        return n ? l() : E(l)
      };

      function Ot(t, e, n, o) {
        const i = {},
          r = o(t);
        for (const t in r) i[t] = It(r[t]);
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
            transition: r,
            ...s
          } = n;
          for (const t in s) {
            let e = s[t];
            Array.isArray(e) && (e = e[c ? e.length - 1 : 0]), null !== e && (i[t] = e)
          }
          for (const t in o) i[t] = o[t]
        })), i
      }
      const jt = {
          useVisualState: Ft({
            scrapeMotionValuesFromProps: Lt,
            createRenderState: Et,
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
              }, bt(e.tagName), t.transformTemplate), Ct(e, n)
            }
          })
        },
        Ut = {
          useVisualState: Ft({
            scrapeMotionValuesFromProps: Mt,
            createRenderState: ut
          })
        };

      function Nt(t, {
        forwardMotionProps: e = !1
      }, n, o, i) {
        return {
          ...R(t) ? jt : Ut,
          preloadedFeatures: n,
          useRender: Pt(e),
          createVisualElement: o,
          projectionNodeConstructor: i,
          Component: t
        }
      }
      var $t;

      function zt(t, e, n, o = {
        passive: !0
      }) {
        return t.addEventListener(e, n, o), () => t.removeEventListener(e, n)
      }

      function Wt(t, e, n, i) {
        (0, o.useEffect)((() => {
          const o = t.current;
          if (n && o) return zt(o, e, n, i)
        }), [t, e, n, i])
      }

      function Ht(t) {
        return "undefined" != typeof PointerEvent && t instanceof PointerEvent ? !("mouse" !== t.pointerType) : t instanceof MouseEvent
      }

      function Yt(t) {
        return !!t.touches
      }! function(t) {
        t.Animate = "animate", t.Hover = "whileHover", t.Tap = "whileTap", t.Drag = "whileDrag", t.Focus = "whileFocus", t.InView = "whileInView", t.Exit = "exit"
      }($t || ($t = {}));
      const Xt = {
        pageX: 0,
        pageY: 0
      };

      function Gt(t, e = "page") {
        const n = t.touches[0] || t.changedTouches[0] || Xt;
        return {
          x: n[e + "X"],
          y: n[e + "Y"]
        }
      }

      function _t(t, e = "page") {
        return {
          x: t[e + "X"],
          y: t[e + "Y"]
        }
      }

      function qt(t, e = "page") {
        return {
          point: Yt(t) ? Gt(t, e) : _t(t, e)
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
        return zt(t, ne(e), Zt(n, "pointerdown" === e), o)
      }

      function ie(t, e, n, o) {
        return Wt(t, ne(e), n && Zt(n, "pointerdown" === e), o)
      }

      function re(t) {
        let e = null;
        return () => null === e && (e = t, () => {
          e = null
        })
      }
      const se = re("dragHorizontal"),
        ae = re("dragVertical");

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
        return (o, i) => {
          Ht(o) && !ue() && (t.animationState && t.animationState.setActive($t.Hover, e), n && n(o, i))
        }
      }
      const he = (t, e) => !!e && (t === e || he(t, e.parentElement));

      function de(t) {
        return (0, o.useEffect)((() => () => t()), [])
      }
      const pe = (t, e) => n => e(t(n)),
        fe = (...t) => t.reduce(pe);
      var me = n(42649);
      const ge = (void 0 === me || me.env, "production"),
        ve = new Set;

      function ye(t, e, n) {
        t || ve.has(e) || (console.warn(e), n && console.warn(n), ve.add(e))
      }
      const xe = new WeakMap,
        we = new WeakMap,
        Ee = t => {
          const e = xe.get(t.target);
          e && e(t)
        },
        be = t => {
          t.forEach(Ee)
        };
      const Te = {
        some: 0,
        all: 1
      };

      function Pe(t, e, n, {
        root: i,
        margin: r,
        amount: s = "some",
        once: a
      }) {
        (0, o.useEffect)((() => {
          if (!t || !n.current) return;
          const o = {
            root: null == i ? void 0 : i.current,
            rootMargin: r,
            threshold: "number" == typeof s ? s : Te[s]
          };
          return function(t, e, n) {
            const o = function({
              root: t,
              ...e
            }) {
              const n = t || document;
              we.has(n) || we.set(n, {});
              const o = we.get(n),
                i = JSON.stringify(e);
              return o[i] || (o[i] = new IntersectionObserver(be, {
                root: t,
                ...e
              })), o[i]
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
            o && (e.hasEnteredView = !0), n.animationState && n.animationState.setActive($t.InView, o);
            const i = n.getProps(),
              r = o ? i.onViewportEnter : i.onViewportLeave;
            r && r(t)
          }))
        }), [t, i, r, s])
      }

      function Ve(t, e, n, {
        fallback: i = !0
      }) {
        (0, o.useEffect)((() => {
          t && i && ("production" !== ge && ye(!1, "IntersectionObserver not available on this device. whileInView animations will trigger on mount."), requestAnimationFrame((() => {
            e.hasEnteredView = !0;
            const {
              onViewportEnter: t
            } = n.getProps();
            t && t(null), n.animationState && n.animationState.setActive($t.InView, !0)
          })))
        }), [t])
      }
      const Se = t => e => (t(e), null),
        Ae = {
          inView: Se((function({
            visualElement: t,
            whileInView: e,
            onViewportEnter: n,
            onViewportLeave: i,
            viewport: r = {}
          }) {
            const s = (0, o.useRef)({
              hasEnteredView: !1,
              isInView: !1
            });
            let a = Boolean(e || n || i);
            r.once && s.current.hasEnteredView && (a = !1), ("undefined" == typeof IntersectionObserver ? Ve : Pe)(a, s.current, t, r)
          })),
          tap: Se((function({
            onTap: t,
            onTapStart: e,
            onTapCancel: n,
            whileTap: i,
            visualElement: r
          }) {
            const s = t || e || n || i,
              a = (0, o.useRef)(!1),
              l = (0, o.useRef)(null),
              u = {
                passive: !(e || t || n || f)
              };

            function c() {
              l.current && l.current(), l.current = null
            }

            function h() {
              return c(), a.current = !1, r.animationState && r.animationState.setActive($t.Tap, !1), !ue()
            }

            function d(e, o) {
              h() && (he(r.current, e.target) ? t && t(e, o) : n && n(e, o))
            }

            function p(t, e) {
              h() && n && n(t, e)
            }

            function f(t, n) {
              c(), a.current || (a.current = !0, l.current = fe(oe(window, "pointerup", d, u), oe(window, "pointercancel", p, u)), r.animationState && r.animationState.setActive($t.Tap, !0), e && e(t, n))
            }
            ie(r, "pointerdown", s ? f : void 0, u), de(c)
          })),
          focus: Se((function({
            whileFocus: t,
            visualElement: e
          }) {
            const {
              animationState: n
            } = e;
            Wt(e, "focus", t ? () => {
              n && n.setActive($t.Focus, !0)
            } : void 0), Wt(e, "blur", t ? () => {
              n && n.setActive($t.Focus, !1)
            } : void 0)
          })),
          hover: Se((function({
            onHoverStart: t,
            onHoverEnd: e,
            whileHover: n,
            visualElement: o
          }) {
            ie(o, "pointerenter", t || n ? ce(o, !0, t) : void 0, {
              passive: !t
            }), ie(o, "pointerleave", e || n ? ce(o, !1, e) : void 0, {
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
          register: i
        } = t, r = (0, o.useId)();
        return (0, o.useEffect)((() => i(r)), []), !e && n ? [!1, () => n && n(r)] : [!0]
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
        Fe = "undefined" != typeof window ? t => window.requestAnimationFrame(t) : t => setTimeout((() => t(Ie())), Be);
      let Oe = !0,
        je = !1,
        Ue = !1;
      const Ne = ["read", "update", "preRender", "render", "postRender"],
        $e = Ne.reduce(((t, e) => (t[e] = function(t) {
          let e = [],
            n = [],
            o = 0,
            i = !1,
            r = !1;
          const s = new WeakSet,
            a = {
              schedule: (t, r = !1, a = !1) => {
                const l = a && i,
                  u = l ? e : n;
                return r && s.add(t), -1 === u.indexOf(t) && (u.push(t), l && i && (o = e.length)), t
              },
              cancel: t => {
                const e = n.indexOf(t); - 1 !== e && n.splice(e, 1), s.delete(t)
              },
              process: l => {
                if (i) r = !0;
                else {
                  if (i = !0, [e, n] = [n, e], n.length = 0, o = e.length, o)
                    for (let n = 0; n < o; n++) {
                      const o = e[n];
                      o(l), s.has(o) && (a.schedule(o), t())
                    }
                  i = !1, r && (r = !1, a.process(l))
                }
              }
            };
          return a
        }((() => je = !0)), t)), {}),
        ze = Ne.reduce(((t, e) => {
          const n = $e[e];
          return t[e] = (t, e = !1, o = !1) => (je || Ge(), n.schedule(t, e, o)), t
        }), {}),
        We = Ne.reduce(((t, e) => (t[e] = $e[e].cancel, t)), {}),
        He = Ne.reduce(((t, e) => (t[e] = () => $e[e].process(De), t)), {}),
        Ye = t => $e[t].process(De),
        Xe = t => {
          je = !1, De.delta = Oe ? Be : Math.max(Math.min(t - De.timestamp, 40), 1), De.timestamp = t, Ue = !0, Ne.forEach(Ye), Ue = !1, je && (Oe = !1, Fe(Xe))
        },
        Ge = () => {
          je = !0, Oe = !0, Ue || Fe(Xe)
        };

      function _e(t, e) {
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
          return _e(this.subscriptions, t), () => qe(this.subscriptions, t)
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
            this.lastUpdated !== o && (this.timeDelta = n, this.lastUpdated = o, ze.postRender(this.scheduleVelocityCheck)), this.prev !== this.current && this.events.change && this.events.change.notify(this.current), this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()), e && this.events.renderRequest && this.events.renderRequest.notify(this.current)
          }, this.scheduleVelocityCheck = () => ze.postRender(this.velocityCheck), this.velocityCheck = ({
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
          const [i, r, s, a] = o.match(q);
          return {
            [t]: parseFloat(i),
            [e]: parseFloat(r),
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
          }) => "rgba(" + nn.transform(t) + ", " + nn.transform(e) + ", " + nn.transform(n) + ", " + _(X.transform(o)) + ")"
        },
        rn = {
          test: tn("#"),
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
          }) => "hsla(" + Math.round(t) + ", " + et.transform(_(e)) + ", " + et.transform(_(n)) + ", " + _(X.transform(o)) + ")"
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
        const i = t.match(Z);
        i && (n = i.length, t = t.replace(Z, ln), e.push(...i.map(an.parse)));
        const r = t.match(q);
        return r && (o = r.length, t = t.replace(q, un), e.push(...r.map(Y.parse))), {
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
        } = cn(t), i = e.length;
        return t => {
          let e = o;
          for (let o = 0; o < i; o++) e = e.replace(o < n ? ln : un, o < n ? an.transform(t[o]) : _(t[o]));
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
        const i = n.replace(o, "");
        let r = mn.has(e) ? 1 : 0;
        return o !== n && (r *= 100), e + "(" + r + i + ")"
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

      function En(t, e) {
        var n;
        let o = wn(t);
        return o !== yn && (o = fn), null === (n = o.getAnimatableNone) || void 0 === n ? void 0 : n.call(o, e)
      }
      const bn = t => e => e.test(t),
        Tn = [Y, nt, et, tt, it, ot, {
          test: t => "auto" === t,
          parse: t => t
        }],
        Pn = t => Tn.find(bn(t)),
        Vn = [...Tn, an, fn],
        Sn = t => Vn.find(bn(t));

      function An(t, e, n) {
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
        const n = An(t, e);
        let {
          transitionEnd: o = {},
          transition: i = {},
          ...r
        } = n ? t.makeTargetAnimatable(n, !1) : {};
        r = {
          ...r,
          ...o
        };
        for (const e in r) Cn(t, e, Bt(r[e]))
      }

      function Ln(t, e) {
        [...e].reverse().forEach((n => {
          var o;
          const i = t.getVariant(n);
          i && Mn(t, i), null === (o = t.variantChildren) || void 0 === o || o.forEach((t => {
            Ln(t, e)
          }))
        }))
      }

      function kn(t, e, n) {
        var o, i;
        const r = Object.keys(e).filter((e => !t.hasValue(e))),
          s = r.length;
        if (s)
          for (let a = 0; a < s; a++) {
            const s = r[a],
              l = e[s];
            let u = null;
            Array.isArray(l) && (u = l[0]), null === u && (u = null !== (i = null !== (o = n[s]) && void 0 !== o ? o : t.readValue(s)) && void 0 !== i ? i : e[s]), null != u && ("string" == typeof u && (ke(u) || Re(u)) ? u = parseFloat(u) : !Sn(u) && fn.test(l) && (u = En(s, l)), t.addValue(s, Qe(u, {
              owner: t
            })), void 0 === n[s] && (n[s] = u), null !== u && t.setBaseTarget(s, u))
          }
      }

      function Rn(t, e) {
        if (e) return (e[t] || e.default || e).from
      }

      function Dn(t, e, n) {
        var o;
        const i = {};
        for (const r in t) {
          const t = Rn(r, e);
          i[r] = void 0 !== t ? t : null === (o = n.getValue(r)) || void 0 === o ? void 0 : o.get()
        }
        return i
      }

      function Bn(t) {
        return Boolean(j(t) && t.add)
      }
      const In = (t, e) => `${t}: ${e}`;

      function Fn(t, e) {
        const {
          MotionAppearAnimations: n
        } = window, o = In(t, F.has(e) ? "transform" : e), i = n && n.get(o);
        return i ? (ze.render((() => {
          try {
            i.cancel(), n.delete(o)
          } catch (t) {}
        })), i.currentTime || 0) : 0
      }
      const On = "framerAppearId",
        jn = "data-" + Vt(On);
      var Un = n(81547);
      const Nn = t => 1e3 * t,
        $n = {
          current: !1
        },
        zn = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
        Wn = t => e => 1 - t(1 - e),
        Hn = t => t * t,
        Yn = Wn(Hn),
        Xn = zn(Hn),
        Gn = (t, e, n) => -n * t + n * e + t;

      function _n(t, e, n) {
        return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + 6 * (e - t) * n : n < .5 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
      }
      const qn = (t, e, n) => {
          const o = t * t;
          return Math.sqrt(Math.max(0, n * (e * e - o) + o))
        },
        Zn = [rn, on, sn];

      function Kn(t) {
        const e = (n = t, Zn.find((t => t.test(n))));
        var n;
        (0, Un.V)(Boolean(e), `'${t}' is not an animatable color. Use the equivalent color code instead.`);
        let o = e.parse(t);
        return e === sn && (o = function({
          hue: t,
          saturation: e,
          lightness: n,
          alpha: o
        }) {
          t /= 360, n /= 100;
          let i = 0,
            r = 0,
            s = 0;
          if (e /= 100) {
            const o = n < .5 ? n * (1 + e) : n + e - n * e,
              a = 2 * n - o;
            i = _n(a, o, t + 1 / 3), r = _n(a, o, t), s = _n(a, o, t - 1 / 3)
          } else i = r = s = n;
          return {
            red: Math.round(255 * i),
            green: Math.round(255 * r),
            blue: Math.round(255 * s),
            alpha: o
          }
        }(o)), o
      }
      const Jn = (t, e) => {
        const n = Kn(t),
          o = Kn(e),
          i = {
            ...n
          };
        return t => (i.red = qn(n.red, o.red, t), i.green = qn(n.green, o.green, t), i.blue = qn(n.blue, o.blue, t), i.alpha = Gn(n.alpha, o.alpha, t), on.transform(i))
      };

      function Qn(t, e) {
        return "number" == typeof t ? n => Gn(t, e, n) : an.test(t) ? Jn(t, e) : no(t, e)
      }
      const to = (t, e) => {
          const n = [...t],
            o = n.length,
            i = t.map(((t, n) => Qn(t, e[n])));
          return t => {
            for (let e = 0; e < o; e++) n[e] = i[e](t);
            return n
          }
        },
        eo = (t, e) => {
          const n = {
              ...t,
              ...e
            },
            o = {};
          for (const i in n) void 0 !== t[i] && void 0 !== e[i] && (o[i] = Qn(t[i], e[i]));
          return t => {
            for (const e in o) n[e] = o[e](t);
            return n
          }
        },
        no = (t, e) => {
          const n = fn.createTransformer(e),
            o = cn(t),
            i = cn(e);
          return o.numColors === i.numColors && o.numNumbers >= i.numNumbers ? fe(to(o.values, i.values), n) : ((0, Un.$)(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), n => `${n>0?e:t}`)
        },
        oo = (t, e, n) => {
          const o = e - t;
          return 0 === o ? 1 : (n - t) / o
        },
        io = (t, e) => n => Gn(t, e, n);

      function ro(t, e, {
        clamp: n = !0,
        ease: o,
        mixer: i
      } = {}) {
        const r = t.length;
        (0, Un.V)(r === e.length, "Both input and output ranges must be the same length"), (0, Un.V)(!o || !Array.isArray(o) || o.length === r - 1, "Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."), t[0] > t[r - 1] && (t = [...t].reverse(), e = [...e].reverse());
        const s = function(t, e, n) {
            const o = [],
              i = n || ("number" == typeof(r = t[0]) ? io : "string" == typeof r ? an.test(r) ? Jn : no : Array.isArray(r) ? to : "object" == typeof r ? eo : io);
            var r;
            const s = t.length - 1;
            for (let n = 0; n < s; n++) {
              let r = i(t[n], t[n + 1]);
              if (e) {
                const t = Array.isArray(e) ? e[n] : e;
                r = fe(t, r)
              }
              o.push(r)
            }
            return o
          }(e, o, i),
          a = s.length,
          l = e => {
            let n = 0;
            if (a > 1)
              for (; n < t.length - 2 && !(e < t[n + 1]); n++);
            const o = oo(t[n], t[n + 1], e);
            return s[n](o)
          };
        return n ? e => l(H(t[0], t[r - 1], e)) : l
      }
      const so = t => t,
        ao = (t, e, n) => (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t;

      function lo(t, e, n, o) {
        if (t === e && n === o) return so;
        return i => 0 === i || 1 === i ? i : ao(function(t, e, n, o, i) {
          let r, s, a = 0;
          do {
            s = e + (n - e) / 2, r = ao(s, o, i) - t, r > 0 ? n = s : e = s
          } while (Math.abs(r) > 1e-7 && ++a < 12);
          return s
        }(i, 0, 1, t, n), e, o)
      }
      const uo = t => 1 - Math.sin(Math.acos(t)),
        co = Wn(uo),
        ho = zn(co),
        po = lo(.33, 1.53, .69, .99),
        fo = Wn(po),
        mo = zn(fo),
        go = {
          linear: so,
          easeIn: Hn,
          easeInOut: Xn,
          easeOut: Yn,
          circIn: uo,
          circInOut: ho,
          circOut: co,
          backIn: fo,
          backInOut: mo,
          backOut: po,
          anticipate: t => (t *= 2) < 1 ? .5 * fo(t) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
        },
        vo = t => {
          if (Array.isArray(t)) {
            (0, Un.V)(4 === t.length, "Cubic bezier arrays must contain four numerical values.");
            const [e, n, o, i] = t;
            return lo(e, n, o, i)
          }
          return "string" == typeof t ? ((0, Un.V)(void 0 !== go[t], `Invalid easing type '${t}'`), go[t]) : t
        };

      function yo({
        keyframes: t,
        ease: e = Xn,
        times: n,
        duration: o = 300
      }) {
        t = [...t];
        const i = yo[0],
          r = (t => Array.isArray(t) && "number" != typeof t[0])(e) ? e.map(vo) : vo(e),
          s = {
            done: !1,
            value: i
          },
          a = function(t, e) {
            return t.map((t => t * e))
          }(n && n.length === yo.length ? n : function(t) {
            const e = t.length;
            return t.map(((t, n) => 0 !== n ? n / (e - 1) : 0))
          }(t), o);

        function l() {
          return ro(a, t, {
            ease: Array.isArray(r) ? r : (e = t, n = r, e.map((() => n || Xn)).splice(0, e.length - 1))
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
      const xo = .001,
        wo = .01,
        Eo = 10,
        bo = .05,
        To = 1;
      const Po = 12;

      function Vo(t, e) {
        return t * Math.sqrt(1 - e * e)
      }
      const So = ["duration", "bounce"],
        Ao = ["stiffness", "damping", "mass"];

      function Co(t, e) {
        return e.some((e => void 0 !== t[e]))
      }
      const Mo = 5;

      function Lo({
        keyframes: t,
        restSpeed: e = 2,
        restDelta: n = .01,
        ...o
      }) {
        let i = t[0],
          r = t[t.length - 1];
        const s = {
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
            if (!Co(t, Ao) && Co(t, So)) {
              const n = function({
                duration: t = 800,
                bounce: e = .25,
                velocity: n = 0,
                mass: o = 1
              }) {
                let i, r;
                (0, Un.$)(t <= 1e3 * Eo, "Spring duration must be 10 seconds or less");
                let s = 1 - e;
                s = H(bo, To, s), t = H(wo, Eo, t / 1e3), s < 1 ? (i = e => {
                  const o = e * s,
                    i = o * t,
                    r = o - n,
                    a = Vo(e, s),
                    l = Math.exp(-i);
                  return xo - r / a * l
                }, r = e => {
                  const o = e * s * t,
                    r = o * n + n,
                    a = Math.pow(s, 2) * Math.pow(e, 2) * t,
                    l = Math.exp(-o),
                    u = Vo(Math.pow(e, 2), s);
                  return (-i(e) + xo > 0 ? -1 : 1) * ((r - a) * l) / u
                }) : (i = e => Math.exp(-e * t) * ((e - n) * t + 1) - xo, r = e => Math.exp(-e * t) * (t * t * (n - e)));
                const a = function(t, e, n) {
                  let o = n;
                  for (let n = 1; n < Po; n++) o -= t(o) / e(o);
                  return o
                }(i, r, 5 / t);
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
        let p = ko,
          f = c ? -c / 1e3 : 0;
        const m = l / (2 * Math.sqrt(a * u));

        function g() {
          const t = r - i,
            e = Math.sqrt(a / u) / 1e3;
          if (void 0 === n && (n = Math.min(Math.abs(r - i) / 100, .4)), m < 1) {
            const n = Vo(e, m);
            p = o => {
              const i = Math.exp(-m * e * o);
              return r - i * ((f + m * e * t) / n * Math.sin(n * o) + t * Math.cos(n * o))
            }
          } else if (1 === m) p = n => r - Math.exp(-e * n) * (t + (f + e * t) * n);
          else {
            const n = e * Math.sqrt(m * m - 1);
            p = o => {
              const i = Math.exp(-m * e * o),
                s = Math.min(n * o, 300);
              return r - i * ((f + m * e * t) * Math.sinh(s) + n * t * Math.cosh(s)) / n
            }
          }
        }
        return g(), {
          next: t => {
            const o = p(t);
            if (d) s.done = t >= h;
            else {
              let i = f;
              if (0 !== t)
                if (m < 1) {
                  const e = Math.max(0, t - Mo);
                  i = Ke(o - p(e), t - e)
                } else i = 0;
              const a = Math.abs(i) <= e,
                l = Math.abs(r - o) <= n;
              s.done = a && l
            }
            return s.value = s.done ? r : o, s
          },
          flipTarget: () => {
            f = -f, [i, r] = [r, i], g()
          }
        }
      }
      Lo.needsInterpolation = (t, e) => "string" == typeof t || "string" == typeof e;
      const ko = t => 0,
        Ro = {
          decay: function({
            keyframes: t = [0],
            velocity: e = 0,
            power: n = .8,
            timeConstant: o = 350,
            restDelta: i = .5,
            modifyTarget: r
          }) {
            const s = t[0],
              a = {
                done: !1,
                value: s
              };
            let l = n * e;
            const u = s + l,
              c = void 0 === r ? u : r(u);
            return c !== u && (l = c - s), {
              next: t => {
                const e = -l * Math.exp(-t / o);
                return a.done = !(e > i || e < -i), a.value = a.done ? c : c + e, a
              },
              flipTarget: () => {}
            }
          },
          keyframes: yo,
          tween: yo,
          spring: Lo
        };

      function Do(t, e, n = 0) {
        return t - e - n
      }
      const Bo = t => {
        const e = ({
          delta: e
        }) => t(e);
        return {
          start: () => ze.update(e, !0),
          stop: () => We.update(e)
        }
      };

      function Io({
        duration: t,
        driver: e = Bo,
        elapsed: n = 0,
        repeat: o = 0,
        repeatType: i = "loop",
        repeatDelay: r = 0,
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
          E = t,
          b = !1,
          T = !0;
        const P = Ro[s.length > 2 ? "keyframes" : p],
          V = s[0],
          S = s[s.length - 1];
        (null === (g = (m = P).needsInterpolation) || void 0 === g ? void 0 : g.call(m, V, S)) && (x = ro([0, 100], [V, S], {
          clamp: !1
        }), s = [0, 100]);
        const A = P({
          ...f,
          duration: t,
          keyframes: s
        });
        return a && (l && l(), v = e((function(t) {
          if (T || (t = -t), n += t, !b) {
            const t = A.next(Math.max(0, n));
            y = t.value, x && (y = x(y)), b = T ? t.done : n <= 0
          }
          d && d(y), b && (0 === w && (E = void 0 !== E ? E : n), w < o ? function(t, e, n, o) {
            return o ? t >= e + n : t <= -n
          }(n, E, r, T) && (w++, "reverse" === i ? (T = w % 2 == 0, n = function(t, e = 0, n = 0, o = !0) {
            return o ? Do(e + -t, e, n) : e - (t - e) + n
          }(n, E, r, T)) : (n = Do(n, E, r), "mirror" === i && A.flipTarget()), b = !1, h && h()) : (v.stop(), c && c()))
        })), v.start()), {
          stop: () => {
            u && u(), v.stop()
          },
          sample: t => A.next(Math.max(0, t))
        }
      }
      const Fo = ([t, e, n, o]) => `cubic-bezier(${t}, ${e}, ${n}, ${o})`,
        Oo = {
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

      function jo(t) {
        if (t) return Array.isArray(t) ? Fo(t) : Oo[t]
      }

      function Uo(t, e, n, {
        delay: o = 0,
        duration: i,
        repeat: r = 0,
        repeatType: s = "loop",
        ease: a,
        times: l
      } = {}) {
        return t.animate({
          [e]: n,
          offset: l
        }, {
          delay: o,
          duration: i,
          easing: jo(a),
          fill: "both",
          iterations: r + 1,
          direction: "reverse" === s ? "alternate" : "normal"
        })
      }

      function No(t, e) {
        const n = performance.now(),
          o = ({
            timestamp: i
          }) => {
            const r = i - n;
            r >= e && (We.read(o), t(r - e))
          };
        return ze.read(o, !0), () => We.read(o)
      }

      function $o({
        keyframes: t,
        elapsed: e,
        onUpdate: n,
        onComplete: o
      }) {
        const i = () => (n && n(t[t.length - 1]), o && o(), () => {});
        return e ? No(i, -e) : i()
      }
      const zo = () => ({
          type: "spring",
          stiffness: 500,
          damping: 25,
          restSpeed: 10
        }),
        Wo = t => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === t ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10
        }),
        Ho = () => ({
          type: "keyframes",
          ease: "linear",
          duration: .3
        }),
        Yo = {
          type: "keyframes",
          duration: .8
        },
        Xo = {
          x: zo,
          y: zo,
          z: zo,
          rotate: zo,
          rotateX: zo,
          rotateY: zo,
          rotateZ: zo,
          scaleX: Wo,
          scaleY: Wo,
          scale: Wo,
          opacity: Ho,
          backgroundColor: Ho,
          color: Ho,
          default: Wo
        },
        Go = (t, {
          keyframes: e
        }) => e.length > 2 ? Yo : (Xo[t] || Xo.default)(e[1]),
        _o = (t, e) => !("zIndex" === t || "number" != typeof e && !Array.isArray(e) && ("string" != typeof e || !fn.test(e) || e.startsWith("url(")));

      function qo(t) {
        return 0 === t || "string" == typeof t && 0 === parseFloat(t) && -1 === t.indexOf(" ")
      }

      function Zo(t) {
        return "number" == typeof t ? 0 : En("", t)
      }

      function Ko(t, e) {
        return t[e] || t.default || t
      }
      const Jo = {
          waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate")
        },
        Qo = {},
        ti = {};
      for (const t in Jo) ti[t] = () => (void 0 === Qo[t] && (Qo[t] = Jo[t]()), Qo[t]);
      const ei = new Set(["opacity"]),
        ni = (t, e, n, o = {}) => i => {
          const r = Ko(o, t) || {},
            s = r.delay || o.delay || 0;
          let {
            elapsed: a = 0
          } = o;
          a -= Nn(s);
          const l = function(t, e, n, o) {
              const i = _o(e, n);
              let r = void 0 !== o.from ? o.from : t.get();
              return "none" === r && i && "string" == typeof n ? r = En(e, n) : qo(r) && "string" == typeof n ? r = Zo(n) : !Array.isArray(n) && qo(n) && "string" == typeof r && (n = Zo(r)), Array.isArray(n) ? (null === n[0] && (n[0] = r), n) : [r, n]
            }(e, t, n, r),
            u = l[0],
            c = l[l.length - 1],
            h = _o(t, u),
            d = _o(t, c);
          (0, Un.$)(h === d, `You are trying to animate ${t} from "${u}" to "${c}". ${u} is not an animatable value - to enable this animation set ${u} to a value animatable to ${c} via the \`style\` property.`);
          let p = {
            keyframes: l,
            velocity: e.getVelocity(),
            ...r,
            elapsed: a,
            onUpdate: t => {
              e.set(t), r.onUpdate && r.onUpdate(t)
            },
            onComplete: () => {
              i(), r.onComplete && r.onComplete()
            }
          };
          if (!h || !d || $n.current || !1 === r.type) return $o(p);
          if ("inertia" === r.type) {
            const t = function({
              keyframes: t,
              velocity: e = 0,
              min: n,
              max: o,
              power: i = .8,
              timeConstant: r = 750,
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
                null == m || m.stop(), m = Io({
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
                let t = i * e + f;
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
                  timeConstant: r,
                  power: i,
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
            staggerDirection: i,
            repeat: r,
            repeatType: s,
            repeatDelay: a,
            from: l,
            ...u
          }) {
            return !!Object.keys(u).length
          })(r) || (p = {
            ...p,
            ...Go(t, p)
          }), p.duration && (p.duration = Nn(p.duration)), p.repeatDelay && (p.repeatDelay = Nn(p.repeatDelay));
          const f = e.owner,
            m = f && f.current;
          if (ti.waapi() && ei.has(t) && !p.repeatDelay && "mirror" !== p.repeatType && 0 !== p.damping && f && m instanceof HTMLElement && !f.getProps().onUpdate) return function(t, e, {
            onUpdate: n,
            onComplete: o,
            ...i
          }) {
            let {
              keyframes: r,
              duration: s = .3,
              elapsed: a = 0,
              ease: l
            } = i;
            if ("spring" === i.type || !(!(u = i.ease) || Array.isArray(u) || "string" == typeof u && Oo[u])) {
              const t = Io(i);
              let e = {
                done: !1,
                value: r[0]
              };
              const n = [];
              let o = 0;
              for (; !e.done;) e = t.sample(o), n.push(e.value), o += 10;
              r = n, s = o - 10, l = "linear"
            }
            var u;
            const c = Uo(t.owner.current, e, r, {
              ...i,
              delay: -a,
              duration: s,
              ease: l
            });
            return c.onfinish = () => {
              t.set(r[r.length - 1]), o && o()
            }, () => {
              const {
                currentTime: e
              } = c;
              if (e) {
                const n = Io(i);
                t.setWithVelocity(n.sample(e - 10).value, n.sample(e).value, 10)
              }
              ze.update((() => c.cancel()))
            }
          }(e, t, p); {
            const t = Io(p);
            return () => t.stop()
          }
        };

      function oi(t, e, n = {}) {
        let o;
        if (t.notify("AnimationStart", e), Array.isArray(e)) {
          const i = e.map((e => ii(t, e, n)));
          o = Promise.all(i)
        } else if ("string" == typeof e) o = ii(t, e, n);
        else {
          const i = "function" == typeof e ? An(t, e, n.custom) : e;
          o = ri(t, i, n)
        }
        return o.then((() => t.notify("AnimationComplete", e)))
      }

      function ii(t, e, n = {}) {
        var o;
        const i = An(t, e, n.custom);
        let {
          transition: r = t.getDefaultTransition() || {}
        } = i || {};
        n.transitionOverride && (r = n.transitionOverride);
        const s = i ? () => ri(t, i, n) : () => Promise.resolve(),
          a = (null === (o = t.variantChildren) || void 0 === o ? void 0 : o.size) ? (o = 0) => {
            const {
              delayChildren: i = 0,
              staggerChildren: s,
              staggerDirection: a
            } = r;
            return function(t, e, n = 0, o = 0, i = 1, r) {
              const s = [],
                a = (t.variantChildren.size - 1) * o,
                l = 1 === i ? (t = 0) => t * o : (t = 0) => a - t * o;
              return Array.from(t.variantChildren).sort(si).forEach(((t, o) => {
                s.push(ii(t, e, {
                  ...r,
                  delay: n + l(o)
                }).then((() => t.notify("AnimationComplete", e))))
              })), Promise.all(s)
            }(t, e, i + o, s, a, n)
          } : () => Promise.resolve(),
          {
            when: l
          } = r;
        if (l) {
          const [t, e] = "beforeChildren" === l ? [s, a] : [a, s];
          return t().then(e)
        }
        return Promise.all([s(), a(n.delay)])
      }

      function ri(t, e, {
        delay: n = 0,
        transitionOverride: o,
        type: i
      } = {}) {
        var r;
        let {
          transition: s = t.getDefaultTransition(),
          transitionEnd: a,
          ...l
        } = t.makeTargetAnimatable(e);
        const u = t.getValue("willChange");
        o && (s = o);
        const c = [],
          h = i && (null === (r = t.animationState) || void 0 === r ? void 0 : r.getState()[i]);
        for (const e in l) {
          const o = t.getValue(e),
            i = l[e];
          if (!o || void 0 === i || h && ai(h, e)) continue;
          let r = {
            delay: n,
            elapsed: 0,
            ...s
          };
          if (t.shouldReduceMotion && F.has(e) && (r = {
              ...r,
              type: !1,
              delay: 0
            }), !o.hasAnimated) {
            const n = t.getProps()[jn];
            n && (r.elapsed = Fn(n, e))
          }
          let a = o.start(ni(e, o, i, r));
          Bn(u) && (u.add(e), a = a.then((() => u.remove(e)))), c.push(a)
        }
        return Promise.all(c).then((() => {
          a && Mn(t, a)
        }))
      }

      function si(t, e) {
        return t.sortNodePosition(e)
      }

      function ai({
        protectedKeys: t,
        needsAnimating: e
      }, n) {
        const o = t.hasOwnProperty(n) && !0 !== e[n];
        return e[n] = !1, o
      }
      const li = [$t.Animate, $t.InView, $t.Focus, $t.Hover, $t.Tap, $t.Drag, $t.Exit],
        ui = [...li].reverse(),
        ci = li.length;

      function hi(t = !1) {
        return {
          isActive: t,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {}
        }
      }
      const di = {
          animation: Se((({
            visualElement: t,
            animate: e
          }) => {
            t.animationState || (t.animationState = function(t) {
              let e = function(t) {
                return e => Promise.all(e.map((({
                  animation: e,
                  options: n
                }) => oi(t, e, n))))
              }(t);
              const n = {
                [$t.Animate]: hi(!0),
                [$t.InView]: hi(),
                [$t.Hover]: hi(),
                [$t.Tap]: hi(),
                [$t.Drag]: hi(),
                [$t.Focus]: hi(),
                [$t.Exit]: hi()
              };
              let o = !0;
              const i = (e, n) => {
                const o = An(t, n);
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

              function r(r, s) {
                const a = t.getProps(),
                  l = t.getVariantContext(!0) || {},
                  u = [],
                  c = new Set;
                let h = {},
                  f = 1 / 0;
                for (let e = 0; e < ci; e++) {
                  const v = ui[e],
                    y = n[v],
                    x = void 0 !== a[v] ? a[v] : l[v],
                    w = d(x),
                    E = v === s ? y.isActive : null;
                  !1 === E && (f = e);
                  let b = x === l[v] && x !== a[v] && w;
                  if (b && o && t.manuallyAnimateOnMount && (b = !1), y.protectedKeys = {
                      ...h
                    }, !y.isActive && null === E || !x && !y.prevProp || p(x) || "boolean" == typeof x) continue;
                  const T = (m = y.prevProp, "string" == typeof(g = x) ? g !== m : !!Array.isArray(g) && !Le(g, m));
                  let P = T || v === s && y.isActive && !b && w || e > f && w;
                  const V = Array.isArray(x) ? x : [x];
                  let S = V.reduce(i, {});
                  !1 === E && (S = {});
                  const {
                    prevResolvedValues: A = {}
                  } = y, C = {
                    ...A,
                    ...S
                  }, M = t => {
                    P = !0, c.delete(t), y.needsAnimating[t] = !0
                  };
                  for (const t in C) {
                    const e = S[t],
                      n = A[t];
                    h.hasOwnProperty(t) || (e !== n ? Rt(e) && Rt(n) ? !Le(e, n) || T ? M(t) : y.protectedKeys[t] = !0 : void 0 !== e ? M(t) : c.add(t) : void 0 !== e && c.has(t) ? M(t) : y.protectedKeys[t] = !0)
                  }
                  y.prevProp = x, y.prevResolvedValues = S, y.isActive && (h = {
                    ...h,
                    ...S
                  }), o && t.blockInitialAnimation && (P = !1), P && !b && u.push(...V.map((t => ({
                    animation: t,
                    options: {
                      type: v,
                      ...r
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
                animateChanges: r,
                setActive: function(e, o, i) {
                  var s;
                  if (n[e].isActive === o) return Promise.resolve();
                  null === (s = t.variantChildren) || void 0 === s || s.forEach((t => {
                    var n;
                    return null === (n = t.animationState) || void 0 === n ? void 0 : n.setActive(e, o)
                  })), n[e].isActive = o;
                  const a = r(i, e);
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
          exit: Se((t => {
            const {
              custom: e,
              visualElement: n
            } = t, [i, r] = Ce(), s = (0, o.useContext)(a);
            (0, o.useEffect)((() => {
              n.isPresent = i;
              const t = n.animationState && n.animationState.setActive($t.Exit, !i, {
                custom: s && s.custom || e
              });
              t && !i && t.then(r)
            }), [i])
          }))
        },
        pi = (t, e) => Math.abs(t - e);

      function fi(t, e) {
        const n = pi(t.x, e.x),
          o = pi(t.y, e.y);
        return Math.sqrt(n ** 2 + o ** 2)
      }
      class mi {
        constructor(t, e, {
          transformPagePoint: n
        } = {}) {
          if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = () => {
              if (!this.lastMoveEvent || !this.lastMoveEventInfo) return;
              const t = yi(this.lastMoveEventInfo, this.history),
                e = null !== this.startEvent,
                n = fi(t.offset, {
                  x: 0,
                  y: 0
                }) >= 3;
              if (!e && !n) return;
              const {
                point: o
              } = t, {
                timestamp: i
              } = De;
              this.history.push({
                ...o,
                timestamp: i
              });
              const {
                onStart: r,
                onMove: s
              } = this.handlers;
              e || (r && r(this.lastMoveEvent, t), this.startEvent = this.lastMoveEvent), s && s(this.lastMoveEvent, t)
            }, this.handlePointerMove = (t, e) => {
              this.lastMoveEvent = t, this.lastMoveEventInfo = gi(e, this.transformPagePoint), Ht(t) && 0 === t.buttons ? this.handlePointerUp(t, e) : ze.update(this.updatePoint, !0)
            }, this.handlePointerUp = (t, e) => {
              this.end();
              const {
                onEnd: n,
                onSessionEnd: o
              } = this.handlers, i = yi(gi(e, this.transformPagePoint), this.history);
              this.startEvent && n && n(t, i), o && o(t, i)
            }, Yt(t) && t.touches.length > 1) return;
          this.handlers = e, this.transformPagePoint = n;
          const o = gi(qt(t), this.transformPagePoint),
            {
              point: i
            } = o,
            {
              timestamp: r
            } = De;
          this.history = [{
            ...i,
            timestamp: r
          }];
          const {
            onSessionStart: s
          } = e;
          s && s(t, yi(o, this.history)), this.removeListeners = fe(oe(window, "pointermove", this.handlePointerMove), oe(window, "pointerup", this.handlePointerUp), oe(window, "pointercancel", this.handlePointerUp))
        }
        updateHandlers(t) {
          this.handlers = t
        }
        end() {
          this.removeListeners && this.removeListeners(), We.update(this.updatePoint)
        }
      }

      function gi(t, e) {
        return e ? {
          point: e(t.point)
        } : t
      }

      function vi(t, e) {
        return {
          x: t.x - e.x,
          y: t.y - e.y
        }
      }

      function yi({
        point: t
      }, e) {
        return {
          point: t,
          delta: vi(t, wi(e)),
          offset: vi(t, xi(e)),
          velocity: Ei(e, .1)
        }
      }

      function xi(t) {
        return t[0]
      }

      function wi(t) {
        return t[t.length - 1]
      }

      function Ei(t, e) {
        if (t.length < 2) return {
          x: 0,
          y: 0
        };
        let n = t.length - 1,
          o = null;
        const i = wi(t);
        for (; n >= 0 && (o = t[n], !(i.timestamp - o.timestamp > Nn(e)));) n--;
        if (!o) return {
          x: 0,
          y: 0
        };
        const r = (i.timestamp - o.timestamp) / 1e3;
        if (0 === r) return {
          x: 0,
          y: 0
        };
        const s = {
          x: (i.x - o.x) / r,
          y: (i.y - o.y) / r
        };
        return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s
      }

      function bi(t) {
        return t.max - t.min
      }

      function Ti(t, e = 0, n = .01) {
        return Math.abs(t - e) <= n
      }

      function Pi(t, e, n, o = .5) {
        t.origin = o, t.originPoint = Gn(e.min, e.max, t.origin), t.scale = bi(n) / bi(e), (Ti(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1), t.translate = Gn(n.min, n.max, t.origin) - t.originPoint, (Ti(t.translate) || isNaN(t.translate)) && (t.translate = 0)
      }

      function Vi(t, e, n, o) {
        Pi(t.x, e.x, n.x, null == o ? void 0 : o.originX), Pi(t.y, e.y, n.y, null == o ? void 0 : o.originY)
      }

      function Si(t, e, n) {
        t.min = n.min + e.min, t.max = t.min + bi(e)
      }

      function Ai(t, e, n) {
        t.min = e.min - n.min, t.max = t.min + bi(e)
      }

      function Ci(t, e, n) {
        Ai(t.x, e.x, n.x), Ai(t.y, e.y, n.y)
      }

      function Mi(t, e, n) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== n ? t.max + n - (t.max - t.min) : void 0
        }
      }

      function Li(t, e) {
        let n = e.min - t.min,
          o = e.max - t.max;
        return e.max - e.min < t.max - t.min && ([n, o] = [o, n]), {
          min: n,
          max: o
        }
      }
      const ki = .35;

      function Ri(t, e, n) {
        return {
          min: Di(t, e),
          max: Di(t, n)
        }
      }

      function Di(t, e) {
        return "number" == typeof t ? t : t[e] || 0
      }
      const Bi = () => ({
        x: {
          min: 0,
          max: 0
        },
        y: {
          min: 0,
          max: 0
        }
      });

      function Ii(t) {
        return [t("x"), t("y")]
      }

      function Fi({
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

      function Oi(t) {
        return void 0 === t || 1 === t
      }

      function ji({
        scale: t,
        scaleX: e,
        scaleY: n
      }) {
        return !Oi(t) || !Oi(e) || !Oi(n)
      }

      function Ui(t) {
        return ji(t) || Ni(t) || t.z || t.rotate || t.rotateX || t.rotateY
      }

      function Ni(t) {
        return $i(t.x) || $i(t.y)
      }

      function $i(t) {
        return t && "0%" !== t
      }

      function zi(t, e, n) {
        return n + e * (t - n)
      }

      function Wi(t, e, n, o, i) {
        return void 0 !== i && (t = zi(t, i, o)), zi(t, n, o) + e
      }

      function Hi(t, e = 0, n = 1, o, i) {
        t.min = Wi(t.min, e, n, o, i), t.max = Wi(t.max, e, n, o, i)
      }

      function Yi(t, {
        x: e,
        y: n
      }) {
        Hi(t.x, e.translate, e.scale, e.originPoint), Hi(t.y, n.translate, n.scale, n.originPoint)
      }

      function Xi(t) {
        return Number.isInteger(t) || t > 1.0000000000001 || t < .999999999999 ? t : 1
      }

      function Gi(t, e) {
        t.min = t.min + e, t.max = t.max + e
      }

      function _i(t, e, [n, o, i]) {
        const r = void 0 !== e[i] ? e[i] : .5,
          s = Gn(t.min, t.max, r);
        Hi(t, e[n], e[o], s, e.scale)
      }
      const qi = ["x", "scaleX", "originX"],
        Zi = ["y", "scaleY", "originY"];

      function Ki(t, e) {
        _i(t.x, e, qi), _i(t.y, e, Zi)
      }

      function Ji(t, e) {
        return Fi(function(t, e) {
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
      const Qi = new WeakMap;
      class tr {
        constructor(t) {
          this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
            x: 0,
            y: 0
          }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = Bi(), this.visualElement = t
        }
        start(t, {
          snapToCursor: e = !1
        } = {}) {
          !1 !== this.visualElement.isPresent && (this.panSession = new mi(t, {
            onSessionStart: t => {
              this.stopAnimation(), e && this.snapToCursor(qt(t, "page").point)
            },
            onStart: (t, e) => {
              var n;
              const {
                drag: o,
                dragPropagation: i,
                onDragStart: r
              } = this.getProps();
              (!o || i || (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = le(o), this.openGlobalLock)) && (this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Ii((t => {
                var e, n;
                let o = this.getAxisMotionValue(t).get() || 0;
                if (et.test(o)) {
                  const i = null === (n = null === (e = this.visualElement.projection) || void 0 === e ? void 0 : e.layout) || void 0 === n ? void 0 : n.layoutBox[t];
                  i && (o = bi(i) * (parseFloat(o) / 100))
                }
                this.originPoint[t] = o
              })), null == r || r(t, e), null === (n = this.visualElement.animationState) || void 0 === n || n.setActive($t.Drag, !0))
            },
            onMove: (t, e) => {
              const {
                dragPropagation: n,
                dragDirectionLock: o,
                onDirectionLock: i,
                onDrag: r
              } = this.getProps();
              if (!n && !this.openGlobalLock) return;
              const {
                offset: s
              } = e;
              if (o && null === this.currentDirection) return this.currentDirection = function(t, e = 10) {
                let n = null;
                return Math.abs(t.y) > e ? n = "y" : Math.abs(t.x) > e && (n = "x"), n
              }(s), void(null !== this.currentDirection && (null == i || i(this.currentDirection)));
              this.updateAxis("x", e.point, s), this.updateAxis("y", e.point, s), this.visualElement.render(), null == r || r(t, e)
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
          !n && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), null === (e = this.visualElement.animationState) || void 0 === e || e.setActive($t.Drag, !1)
        }
        updateAxis(t, e, n) {
          const {
            drag: o
          } = this.getProps();
          if (!n || !er(t, o, this.currentDirection)) return;
          const i = this.getAxisMotionValue(t);
          let r = this.originPoint[t] + n[t];
          this.constraints && this.constraints[t] && (r = function(t, {
            min: e,
            max: n
          }, o) {
            return void 0 !== e && t < e ? t = o ? Gn(e, t, o.min) : Math.max(t, e) : void 0 !== n && t > n && (t = o ? Gn(n, t, o.max) : Math.min(t, n)), t
          }(r, this.constraints[t], this.elastic[t])), i.set(r)
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
            right: i
          }) {
            return {
              x: Mi(t.x, n, i),
              y: Mi(t.y, e, o)
            }
          }(n.layoutBox, t), this.elastic = function(t = ki) {
            return !1 === t ? t = 0 : !0 === t && (t = ki), {
              x: Ri(t, "left", "right"),
              y: Ri(t, "top", "bottom")
            }
          }(e), o !== this.constraints && n && this.constraints && !this.hasMutatedConstraints && Ii((t => {
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
          (0, Un.V)(null !== n, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
          const {
            projection: o
          } = this.visualElement;
          if (!o || !o.layout) return !1;
          const i = function(t, e, n) {
            const o = Ji(t, n),
              {
                scroll: i
              } = e;
            return i && (Gi(o.x, i.offset.x), Gi(o.y, i.offset.y)), o
          }(n, o.root, this.visualElement.getTransformPagePoint());
          let r = function(t, e) {
            return {
              x: Li(t.x, e.x),
              y: Li(t.y, e.y)
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
            }(r));
            this.hasMutatedConstraints = !!t, t && (r = Fi(t))
          }
          return r
        }
        startAnimation(t) {
          const {
            drag: e,
            dragMomentum: n,
            dragElastic: o,
            dragTransition: i,
            dragSnapToOrigin: r,
            onDragTransitionEnd: s
          } = this.getProps(), a = this.constraints || {}, l = Ii((s => {
            if (!er(s, e, this.currentDirection)) return;
            let l = (null == a ? void 0 : a[s]) || {};
            r && (l = {
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
                ...i,
                ...l
              };
            return this.startAxisValueAnimation(s, h)
          }));
          return Promise.all(l).then(s)
        }
        startAxisValueAnimation(t, e) {
          const n = this.getAxisMotionValue(t);
          return n.start(ni(t, n, 0, e))
        }
        stopAnimation() {
          Ii((t => this.getAxisMotionValue(t).stop()))
        }
        getAxisMotionValue(t) {
          var e;
          const n = "_drag" + t.toUpperCase();
          return this.visualElement.getProps()[n] || this.visualElement.getValue(t, (null === (e = this.visualElement.getProps().initial) || void 0 === e ? void 0 : e[t]) || 0)
        }
        snapToCursor(t) {
          Ii((e => {
            const {
              drag: n
            } = this.getProps();
            if (!er(e, n, this.currentDirection)) return;
            const {
              projection: o
            } = this.visualElement, i = this.getAxisMotionValue(e);
            if (o && o.layout) {
              const {
                min: n,
                max: r
              } = o.layout.layoutBox[e];
              i.set(t[e] - Gn(n, r, .5))
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
          const i = {
            x: 0,
            y: 0
          };
          Ii((t => {
            const e = this.getAxisMotionValue(t);
            if (e) {
              const n = e.get();
              i[t] = function(t, e) {
                let n = .5;
                const o = bi(t),
                  i = bi(e);
                return i > o ? n = oo(e.min, e.max - o, t.min) : o > i && (n = oo(t.min, t.max - i, e.min)), H(0, 1, n)
              }({
                min: n,
                max: n
              }, this.constraints[t])
            }
          }));
          const {
            transformTemplate: r
          } = this.visualElement.getProps();
          this.visualElement.current.style.transform = r ? r({}, "") : "none", null === (t = o.root) || void 0 === t || t.updateScroll(), o.updateLayout(), this.resolveConstraints(), Ii((t => {
            if (!er(t, e, null)) return;
            const n = this.getAxisMotionValue(t),
              {
                min: o,
                max: r
              } = this.constraints[t];
            n.set(Gn(o, r, i[t]))
          }))
        }
        addListeners() {
          var t;
          if (!this.visualElement.current) return;
          Qi.set(this.visualElement, this);
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
            i = o.addEventListener("measure", n);
          o && !o.layout && (null === (t = o.root) || void 0 === t || t.updateScroll(), o.updateLayout()), n();
          const r = zt(window, "resize", (() => this.scalePositionWithinConstraints())),
            s = o.addEventListener("didUpdate", (({
              delta: t,
              hasLayoutChanged: e
            }) => {
              this.isDragging && e && (Ii((e => {
                const n = this.getAxisMotionValue(e);
                n && (this.originPoint[e] += t[e].translate, n.set(n.get() + t[e].translate))
              })), this.visualElement.render())
            }));
          return () => {
            r(), e(), i(), null == s || s()
          }
        }
        getProps() {
          const t = this.visualElement.getProps(),
            {
              drag: e = !1,
              dragDirectionLock: n = !1,
              dragPropagation: o = !1,
              dragConstraints: i = !1,
              dragElastic: r = ki,
              dragMomentum: s = !0
            } = t;
          return {
            ...t,
            drag: e,
            dragDirectionLock: n,
            dragPropagation: o,
            dragConstraints: i,
            dragElastic: r,
            dragMomentum: s
          }
        }
      }

      function er(t, e, n) {
        return !(!0 !== e && e !== t || null !== n && n !== t)
      }
      const nr = {
        pan: Se((function({
          onPan: t,
          onPanStart: e,
          onPanEnd: n,
          onPanSessionStart: r,
          visualElement: s
        }) {
          const a = t || e || n || r,
            l = (0, o.useRef)(null),
            {
              transformPagePoint: u
            } = (0, o.useContext)(i),
            c = {
              onSessionStart: r,
              onStart: e,
              onMove: t,
              onEnd: (t, e) => {
                l.current = null, n && n(t, e)
              }
            };
          (0, o.useEffect)((() => {
            null !== l.current && l.current.updateHandlers(c)
          })), ie(s, "pointerdown", a && function(t) {
            l.current = new mi(t, c, {
              transformPagePoint: u
            })
          }), de((() => l.current && l.current.end()))
        })),
        drag: Se((function(t) {
          const {
            dragControls: e,
            visualElement: n
          } = t, i = E((() => new tr(n)));
          (0, o.useEffect)((() => e && e.subscribe(i)), [i, e]), (0, o.useEffect)((() => i.addListeners()), [i])
        }))
      };

      function or(t) {
        return "string" == typeof t && t.startsWith("var(--")
      }
      const ir = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;

      function rr(t, e, n = 1) {
        (0, Un.V)(n <= 4, `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`);
        const [o, i] = function(t) {
          const e = ir.exec(t);
          if (!e) return [, ];
          const [, n, o] = e;
          return [n, o]
        }(t);
        if (!o) return;
        const r = window.getComputedStyle(e).getPropertyValue(o);
        return r ? r.trim() : or(i) ? rr(i, e, n + 1) : i
      }
      const sr = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y"]),
        ar = t => sr.has(t),
        lr = (t, e) => {
          t.set(e, !1), t.set(e)
        },
        ur = t => t === Y || t === nt;
      var cr;
      ! function(t) {
        t.width = "width", t.height = "height", t.left = "left", t.right = "right", t.top = "top", t.bottom = "bottom"
      }(cr || (cr = {}));
      const hr = (t, e) => parseFloat(t.split(", ")[e]),
        dr = (t, e) => (n, {
          transform: o
        }) => {
          if ("none" === o || !o) return 0;
          const i = o.match(/^matrix3d\((.+)\)$/);
          if (i) return hr(i[1], e); {
            const e = o.match(/^matrix\((.+)\)$/);
            return e ? hr(e[1], t) : 0
          }
        },
        pr = new Set(["x", "y", "z"]),
        fr = I.filter((t => !pr.has(t))),
        mr = {
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
          x: dr(4, 13),
          y: dr(5, 14)
        };

      function gr(t, e, n, o) {
        return (t => Object.keys(t).some(ar))(e) ? ((t, e, n = {}, o = {}) => {
          e = {
            ...e
          }, o = {
            ...o
          };
          const i = Object.keys(e).filter(ar);
          let r = [],
            s = !1;
          const a = [];
          if (i.forEach((i => {
              const l = t.getValue(i);
              if (!t.hasValue(i)) return;
              let u = n[i],
                c = Pn(u);
              const h = e[i];
              let d;
              if (Rt(h)) {
                const t = h.length,
                  e = null === h[0] ? 1 : 0;
                u = h[e], c = Pn(u);
                for (let n = e; n < t; n++) d ? (0, Un.V)(Pn(h[n]) === d, "All keyframes must be of the same type") : (d = Pn(h[n]), (0, Un.V)(d === c || ur(c) && ur(d), "Keyframes must be of the same dimension as the current value"))
              } else d = Pn(h);
              if (c !== d)
                if (ur(c) && ur(d)) {
                  const t = l.get();
                  "string" == typeof t && l.set(parseFloat(t)), "string" == typeof h ? e[i] = parseFloat(h) : Array.isArray(h) && d === nt && (e[i] = h.map(parseFloat))
                } else(null == c ? void 0 : c.transform) && (null == d ? void 0 : d.transform) && (0 === u || 0 === h) ? 0 === u ? l.set(d.transform(u)) : e[i] = c.transform(h) : (s || (r = function(t) {
                  const e = [];
                  return fr.forEach((n => {
                    const o = t.getValue(n);
                    void 0 !== o && (e.push([n, o.get()]), o.set(n.startsWith("scale") ? 1 : 0))
                  })), e.length && t.render(), e
                }(t), s = !0), a.push(i), o[i] = void 0 !== o[i] ? o[i] : e[i], lr(l, h))
            })), a.length) {
            const n = a.indexOf("height") >= 0 ? window.pageYOffset : null,
              i = ((t, e, n) => {
                const o = e.measureViewportBox(),
                  i = e.current,
                  r = getComputedStyle(i),
                  {
                    display: s
                  } = r,
                  a = {};
                "none" === s && e.setStaticValue("display", t.display || "block"), n.forEach((t => {
                  a[t] = mr[t](o, r)
                })), e.render();
                const l = e.measureViewportBox();
                return n.forEach((n => {
                  const o = e.getValue(n);
                  lr(o, a[n]), t[n] = mr[n](l, r)
                })), t
              })(e, t, a);
            return r.length && r.forEach((([e, n]) => {
              t.getValue(e).set(n)
            })), t.render(), l && null !== n && window.scrollTo({
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
      const vr = {
          current: null
        },
        yr = {
          current: !1
        };

      function xr() {
        if (yr.current = !0, l)
          if (window.matchMedia) {
            const t = window.matchMedia("(prefers-reduced-motion)"),
              e = () => vr.current = t.matches;
            t.addListener(e), e()
          } else vr.current = !1
      }
      const wr = Object.keys(x),
        Er = wr.length,
        br = ["AnimationStart", "AnimationComplete", "Update", "Unmount", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
      class Tr {
        constructor({
          parent: t,
          props: e,
          reducedMotionConfig: n,
          visualState: o
        }, i = {}) {
          this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.isPresent = !0, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
            this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
          }, this.scheduleRender = () => ze.render(this.render, !1, !0);
          const {
            latestValues: r,
            renderState: s
          } = o;
          this.latestValues = r, this.baseTarget = {
            ...r
          }, this.initialValues = e.initial ? {
            ...r
          } : {}, this.renderState = s, this.parent = t, this.props = e, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = n, this.options = i, this.isControllingVariants = m(e), this.isVariantNode = g(e), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = Boolean(t && t.current);
          const {
            willChange: a,
            ...l
          } = this.scrapeMotionValuesFromProps(e);
          for (const t in l) {
            const e = l[t];
            void 0 !== r[t] && j(e) && (e.set(r[t], !1), Bn(a) && a.add(t))
          }
        }
        scrapeMotionValuesFromProps(t) {
          return {}
        }
        mount(t) {
          var e;
          this.current = t, this.projection && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = null === (e = this.parent) || void 0 === e ? void 0 : e.addVariantChild(this)), this.values.forEach(((t, e) => this.bindToMotionValue(e, t))), yr.current || xr(), this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || vr.current), this.parent && this.parent.children.add(this), this.setProps(this.props)
        }
        unmount() {
          var t, e, n;
          null === (t = this.projection) || void 0 === t || t.unmount(), We.update(this.notifyUpdate), We.render(this.render), this.valueSubscriptions.forEach((t => t())), null === (e = this.removeFromVariantTree) || void 0 === e || e.call(this), null === (n = this.parent) || void 0 === n || n.children.delete(this);
          for (const t in this.events) this.events[t].clear();
          this.current = null
        }
        bindToMotionValue(t, e) {
          const n = F.has(t),
            o = e.on("change", (e => {
              this.latestValues[t] = e, this.props.onUpdate && ze.update(this.notifyUpdate, !1, !0), n && this.projection && (this.projection.isTransformDirty = !0)
            })),
            i = e.on("renderRequest", this.scheduleRender);
          this.valueSubscriptions.set(t, (() => {
            o(), i()
          }))
        }
        sortNodePosition(t) {
          return this.current && this.sortInstanceNodePosition && this.type === t.type ? this.sortInstanceNodePosition(this.current, t.current) : 0
        }
        loadFeatures(t, e, n, i, r, s) {
          const a = [];
          "production" !== ge && n && e && (0, Un.V)(!1, "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.");
          for (let e = 0; e < Er; e++) {
            const n = wr[e],
              {
                isEnabled: i,
                Component: r
              } = x[n];
            i(t) && r && a.push((0, o.createElement)(r, {
              key: n,
              ...t,
              visualElement: this
            }))
          }
          if (!this.projection && r) {
            this.projection = new r(i, this.latestValues, this.parent && this.parent.projection);
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
          return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Bi()
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
          for (let e = 0; e < br.length; e++) {
            const n = br[e];
            this.propEventSubscriptions[n] && (this.propEventSubscriptions[n](), delete this.propEventSubscriptions[n]);
            const o = t["on" + n];
            o && (this.propEventSubscriptions[n] = this.on(n, o))
          }
          this.prevMotionValues = function(t, e, n) {
            const {
              willChange: o
            } = e;
            for (const i in e) {
              const r = e[i],
                s = n[i];
              if (j(r)) t.addValue(i, r), Bn(o) && o.add(i);
              else if (j(s)) t.addValue(i, Qe(r, {
                owner: t
              })), Bn(o) && o.remove(i);
              else if (s !== r)
                if (t.hasValue(i)) {
                  const e = t.getValue(i);
                  !e.hasAnimated && e.set(r)
                } else {
                  const e = t.getStaticValue(i);
                  t.addValue(i, Qe(void 0 !== e ? e : r))
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
          for (let t = 0; t < Vr; t++) {
            const e = Pr[t],
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
          const i = this.getBaseTargetFromProps(this.props, t);
          return void 0 === i || j(i) ? void 0 !== this.initialValues[t] && void 0 === o ? void 0 : this.baseTarget[t] : i
        }
        on(t, e) {
          return this.events[t] || (this.events[t] = new Ze), this.events[t].add(e)
        }
        notify(t, ...e) {
          var n;
          null === (n = this.events[t]) || void 0 === n || n.notify(...e)
        }
      }
      const Pr = ["initial", ...li],
        Vr = Pr.length;
      class Sr extends Tr {
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
          let r = Dn(n, t || {}, this);
          if (o && (e && (e = o(e)), n && (n = o(n)), r && (r = o(r))), i) {
            kn(this, n, r);
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
                  if (!or(e)) return;
                  const n = rr(e, o);
                  n && t.set(n)
                }));
                for (const t in e) {
                  const i = e[t];
                  if (!or(i)) continue;
                  const r = rr(i, o);
                  r && (e[t] = r, n && void 0 === n[t] && (n[t] = i))
                }
                return {
                  target: e,
                  transitionEnd: n
                }
              }(t, e, o);
              return gr(t, e = i.target, n, o = i.transitionEnd)
            })(this, n, r, e);
            e = t.transitionEnd, n = t.target
          }
          return {
            transition: t,
            transitionEnd: e,
            ...n
          }
        }
      }
      class Ar extends Sr {
        readValueFromInstance(t, e) {
          if (F.has(e)) {
            const t = wn(e);
            return t && t.default || 0
          } {
            const o = (n = t, window.getComputedStyle(n)),
              i = (z(e) ? o.getPropertyValue(e) : o[e]) || 0;
            return "string" == typeof i ? i.trim() : i
          }
          var n
        }
        measureInstanceViewportBox(t, {
          transformPagePoint: e
        }) {
          return Ji(t, e)
        }
        build(t, e, n, o) {
          lt(t, e, n, o.transformTemplate)
        }
        scrapeMotionValuesFromProps(t) {
          return Mt(t)
        }
        renderInstance(t, e, n, o) {
          St(t, e, n, o)
        }
      }
      class Cr extends Sr {
        constructor() {
          super(...arguments), this.isSVGTag = !1
        }
        getBaseTargetFromProps(t, e) {
          return t[e]
        }
        readValueFromInstance(t, e) {
          var n;
          return F.has(e) ? (null === (n = wn(e)) || void 0 === n ? void 0 : n.default) || 0 : (e = At.has(e) ? e : Vt(e), t.getAttribute(e))
        }
        measureInstanceViewportBox() {
          return Bi()
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
          this.isSVGTag = bt(t.tagName), super.mount(t)
        }
      }
      const Mr = (t, e) => R(t) ? new Cr(e, {
        enableHardwareAcceleration: !1
      }) : new Ar(e, {
        enableHardwareAcceleration: !0
      });

      function Lr(t, e) {
        return e.max === e.min ? 0 : t / (e.max - e.min) * 100
      }
      const kr = {
          correct: (t, e) => {
            if (!e.target) return t;
            if ("string" == typeof t) {
              if (!nt.test(t)) return t;
              t = parseFloat(t)
            }
            return `${Lr(t,e.target.x)}% ${Lr(t,e.target.y)}%`
          }
        },
        Rr = "_$css",
        Dr = {
          correct: (t, {
            treeScale: e,
            projectionDelta: n
          }) => {
            const o = t,
              i = t.includes("var("),
              r = [];
            i && (t = t.replace(ir, (t => (r.push(t), Rr))));
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
            if (i) {
              let t = 0;
              d = d.replace(Rr, (() => {
                const e = r[t];
                return t++, e
              }))
            }
            return d
          }
        };
      class Br extends o.Component {
        componentDidMount() {
          const {
            visualElement: t,
            layoutGroup: e,
            switchLayoutGroup: n,
            layoutId: o
          } = this.props, {
            projection: i
          } = t;
          B(Ir), i && (e.group && e.group.add(i), n && n.register && o && n.register(i), i.root.didUpdate(), i.addEventListener("animationComplete", (() => {
            this.safeToRemove()
          })), i.setOptions({
            ...i.options,
            onExitComplete: () => this.safeToRemove()
          })), b.hasEverUpdated = !0
        }
        getSnapshotBeforeUpdate(t) {
          const {
            layoutDependency: e,
            visualElement: n,
            drag: o,
            isPresent: i
          } = this.props, r = n.projection;
          return r ? (r.isPresent = i, o || t.layoutDependency !== e || void 0 === e ? r.willUpdate() : this.safeToRemove(), t.isPresent !== i && (i ? r.promote() : r.relegate() || ze.postRender((() => {
            var t;
            (null === (t = r.getStack()) || void 0 === t ? void 0 : t.members.length) || this.safeToRemove()
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
      const Ir = {
          borderRadius: {
            ...kr,
            applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
          },
          borderTopLeftRadius: kr,
          borderTopRightRadius: kr,
          borderBottomLeftRadius: kr,
          borderBottomRightRadius: kr,
          boxShadow: Dr
        },
        Fr = {
          measureLayout: function(t) {
            const [e, n] = Ce(), i = (0, o.useContext)(P);
            return o.createElement(Br, {
              ...t,
              layoutGroup: i,
              switchLayoutGroup: (0, o.useContext)(S),
              isPresent: e,
              safeToRemove: n
            })
          }
        };

      function Or(t, e, n = {}) {
        const o = j(t) ? t : Qe(t);
        return o.start(ni("", o, e, n)), {
          stop: () => o.stop(),
          isAnimating: () => o.isAnimating()
        }
      }
      const jr = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        Ur = jr.length,
        Nr = t => "string" == typeof t ? parseFloat(t) : t,
        $r = t => "number" == typeof t || nt.test(t);

      function zr(t, e) {
        return void 0 !== t[e] ? t[e] : t.borderRadius
      }
      const Wr = Yr(0, .5, co),
        Hr = Yr(.5, .95, so);

      function Yr(t, e, n) {
        return o => o < t ? 0 : o > e ? 1 : n(oo(t, e, o))
      }

      function Xr(t, e) {
        t.min = e.min, t.max = e.max
      }

      function Gr(t, e) {
        Xr(t.x, e.x), Xr(t.y, e.y)
      }

      function _r(t, e, n, o, i) {
        return t = zi(t -= e, 1 / n, o), void 0 !== i && (t = zi(t, 1 / i, o)), t
      }

      function qr(t, e, [n, o, i], r, s) {
        ! function(t, e = 0, n = 1, o = .5, i, r = t, s = t) {
          if (et.test(e) && (e = parseFloat(e), e = Gn(s.min, s.max, e / 100) - s.min), "number" != typeof e) return;
          let a = Gn(r.min, r.max, o);
          t === r && (a -= e), t.min = _r(t.min, e, n, a, i), t.max = _r(t.max, e, n, a, i)
        }(t, e[n], e[o], e[i], e.scale, r, s)
      }
      const Zr = ["x", "scaleX", "originX"],
        Kr = ["y", "scaleY", "originY"];

      function Jr(t, e, n, o) {
        qr(t.x, e, Zr, null == n ? void 0 : n.x, null == o ? void 0 : o.x), qr(t.y, e, Kr, null == n ? void 0 : n.y, null == o ? void 0 : o.y)
      }

      function Qr(t) {
        return 0 === t.translate && 1 === t.scale
      }

      function ts(t) {
        return Qr(t.x) && Qr(t.y)
      }

      function es(t, e) {
        return t.x.min === e.x.min && t.x.max === e.x.max && t.y.min === e.y.min && t.y.max === e.y.max
      }

      function ns(t) {
        return bi(t.x) / bi(t.y)
      }
      class os {
        constructor() {
          this.members = []
        }
        add(t) {
          _e(this.members, t), t.scheduleRender()
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
              crossfade: i
            } = t.options;
            !1 === i && o.hide()
          }
        }
        exitAnimationComplete() {
          this.members.forEach((t => {
            var e, n, o, i, r;
            null === (n = (e = t.options).onExitComplete) || void 0 === n || n.call(e), null === (r = null === (o = t.resumingFrom) || void 0 === o ? void 0 : (i = o.options).onExitComplete) || void 0 === r || r.call(i)
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

      function is(t, e, n) {
        let o = "";
        const i = t.x.translate / e.x,
          r = t.y.translate / e.y;
        if ((i || r) && (o = `translate3d(${i}px, ${r}px, 0) `), 1 === e.x && 1 === e.y || (o += `scale(${1/e.x}, ${1/e.y}) `), n) {
          const {
            rotate: t,
            rotateX: e,
            rotateY: i
          } = n;
          t && (o += `rotate(${t}deg) `), e && (o += `rotateX(${e}deg) `), i && (o += `rotateY(${i}deg) `)
        }
        const s = t.x.scale * e.x,
          a = t.y.scale * e.y;
        return 1 === s && 1 === a || (o += `scale(${s}, ${a})`), o || "none"
      }
      const rs = (t, e) => t.depth - e.depth;
      class ss {
        constructor() {
          this.children = [], this.isDirty = !1
        }
        add(t) {
          _e(this.children, t), this.isDirty = !0
        }
        remove(t) {
          qe(this.children, t), this.isDirty = !0
        }
        forEach(t) {
          this.isDirty && this.children.sort(rs), this.isDirty = !1, this.children.forEach(t)
        }
      }
      const as = ["", "X", "Y", "Z"];
      let ls = 0;

      function us({
        attachResizeListener: t,
        defaultParent: e,
        measureScroll: n,
        checkIsScrollRoot: o,
        resetTransform: i
      }) {
        return class {
          constructor(t, n = {}, o = (null == e ? void 0 : e())) {
            this.id = ls++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isTransformDirty = !1, this.isProjectionDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = {
              x: 1,
              y: 1
            }, this.eventHandlers = new Map, this.potentialNodes = new Map, this.checkUpdateFailed = () => {
              this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
            }, this.updateProjection = () => {
              this.nodes.forEach(ds), this.nodes.forEach(vs), this.nodes.forEach(ys)
            }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.elementId = t, this.latestValues = n, this.root = o ? o.root || o : this, this.path = o ? [...o.path, o] : [], this.parent = o, this.depth = o ? o.depth + 1 : 0, t && this.root.registerPotentialNode(t, this);
            for (let t = 0; t < this.path.length; t++) this.path[t].shouldResetTransform = !0;
            this.root === this && (this.nodes = new ss)
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
              layoutId: i,
              layout: r,
              visualElement: s
            } = this.options;
            if (s && !s.current && s.mount(e), this.root.nodes.add(this), null === (o = this.parent) || void 0 === o || o.children.add(this), this.elementId && this.root.potentialNodes.delete(this.elementId), n && (r || i) && (this.isLayoutDirty = !0), t) {
              let n;
              const o = () => this.root.updateBlockedByResize = !1;
              t(e, (() => {
                this.root.updateBlockedByResize = !0, n && n(), n = No(o, 250), b.hasAnimatedSinceResize && (b.hasAnimatedSinceResize = !1, this.nodes.forEach(gs))
              }))
            }
            i && this.root.registerSharedNode(i, this), !1 !== this.options.animate && s && (i || r) && this.addEventListener("didUpdate", (({
              delta: t,
              hasLayoutChanged: e,
              hasRelativeTargetChanged: n,
              layout: o
            }) => {
              var i, r, a, l, u;
              if (this.isTreeAnimationBlocked()) return this.target = void 0, void(this.relativeTarget = void 0);
              const c = null !== (r = null !== (i = this.options.transition) && void 0 !== i ? i : s.getDefaultTransition()) && void 0 !== r ? r : Ps,
                {
                  onLayoutAnimationStart: h,
                  onLayoutAnimationComplete: d
                } = s.getProps(),
                p = !this.targetLayout || !es(this.targetLayout, o) || n,
                f = !e && n;
              if ((null === (a = this.resumeFrom) || void 0 === a ? void 0 : a.instance) || f || e && (p || !this.currentAnimation)) {
                this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(t, f);
                const e = {
                  ...Ko(c, "layout"),
                  onPlay: h,
                  onComplete: d
                };
                s.shouldReduceMotion && (e.delay = 0, e.type = !1), this.startAnimation(e)
              } else e || 0 !== this.animationProgress || gs(this), this.isLead() && (null === (u = (l = this.options).onExitComplete) || void 0 === u || u.call(l));
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
            this.isUpdateBlocked() || (this.isUpdating = !0, null === (t = this.nodes) || void 0 === t || t.forEach(xs), this.animationId++)
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
              layout: r
            } = this.options;
            if (void 0 === i && !r) return;
            const s = null === (o = this.options.visualElement) || void 0 === o ? void 0 : o.getProps().transformTemplate;
            this.prevTransformTemplateValue = null == s ? void 0 : s(this.latestValues, ""), this.updateSnapshot(), t && this.notifyListeners("willUpdate")
          }
          didUpdate() {
            if (this.isUpdateBlocked()) return this.unblockUpdate(), this.clearAllSnapshots(), void this.nodes.forEach(fs);
            this.isUpdating && (this.isUpdating = !1, this.potentialNodes.size && (this.potentialNodes.forEach(Vs), this.potentialNodes.clear()), this.nodes.forEach(ms), this.nodes.forEach(cs), this.nodes.forEach(hs), this.clearAllSnapshots(), He.update(), He.preRender(), He.render())
          }
          clearAllSnapshots() {
            this.nodes.forEach(ps), this.sharedNodes.forEach(ws)
          }
          scheduleUpdateProjection() {
            ze.preRender(this.updateProjection, !1, !0)
          }
          scheduleCheckAfterUnmount() {
            ze.postRender((() => {
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
            this.layout = this.measure(!1), this.layoutCorrected = Bi(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox), null === (t = this.options.visualElement) || void 0 === t || t.notify("LayoutMeasure", this.layout.layoutBox, null == e ? void 0 : e.layoutBox)
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
              n = this.projectionDelta && !ts(this.projectionDelta),
              o = null === (t = this.options.visualElement) || void 0 === t ? void 0 : t.getProps().transformTemplate,
              r = null == o ? void 0 : o(this.latestValues, ""),
              s = r !== this.prevTransformTemplateValue;
            e && (n || Ui(this.latestValues) || s) && (i(this.instance, r), this.shouldResetTransform = !1, this.scheduleRender())
          }
          measure(t = !0) {
            const e = this.measurePageBox();
            let n = this.removeElementScroll(e);
            var o;
            return t && (n = this.removeTransform(n)), Ss((o = n).x), Ss(o.y), {
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
            if (!t) return Bi();
            const e = t.measureViewportBox(),
              {
                scroll: n
              } = this.root;
            return n && (Gi(e.x, n.offset.x), Gi(e.y, n.offset.y)), e
          }
          removeElementScroll(t) {
            const e = Bi();
            Gr(e, t);
            for (let n = 0; n < this.path.length; n++) {
              const o = this.path[n],
                {
                  scroll: i,
                  options: r
                } = o;
              if (o !== this.root && i && r.layoutScroll) {
                if (i.isRoot) {
                  Gr(e, t);
                  const {
                    scroll: n
                  } = this.root;
                  n && (Gi(e.x, -n.offset.x), Gi(e.y, -n.offset.y))
                }
                Gi(e.x, i.offset.x), Gi(e.y, i.offset.y)
              }
            }
            return e
          }
          applyTransform(t, e = !1) {
            const n = Bi();
            Gr(n, t);
            for (let t = 0; t < this.path.length; t++) {
              const o = this.path[t];
              !e && o.options.layoutScroll && o.scroll && o !== o.root && Ki(n, {
                x: -o.scroll.offset.x,
                y: -o.scroll.offset.y
              }), Ui(o.latestValues) && Ki(n, o.latestValues)
            }
            return Ui(this.latestValues) && Ki(n, this.latestValues), n
          }
          removeTransform(t) {
            var e;
            const n = Bi();
            Gr(n, t);
            for (let t = 0; t < this.path.length; t++) {
              const o = this.path[t];
              if (!o.instance) continue;
              if (!Ui(o.latestValues)) continue;
              ji(o.latestValues) && o.updateSnapshot();
              const i = Bi();
              Gr(i, o.measurePageBox()), Jr(n, o.latestValues, null === (e = o.snapshot) || void 0 === e ? void 0 : e.layoutBox, i)
            }
            return Ui(this.latestValues) && Jr(n, this.latestValues), n
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
                t && t.layout ? (this.relativeParent = t, this.relativeTarget = Bi(), this.relativeTargetOrigin = Bi(), Ci(this.relativeTargetOrigin, this.layout.layoutBox, t.layout.layoutBox), Gr(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
              }
              var i, r, s;
              if ((this.relativeTarget || this.targetDelta) && (this.target || (this.target = Bi(), this.targetWithTransforms = Bi()), this.relativeTarget && this.relativeTargetOrigin && (null === (t = this.relativeParent) || void 0 === t ? void 0 : t.target) ? (i = this.target, r = this.relativeTarget, s = this.relativeParent.target, Si(i.x, r.x, s.x), Si(i.y, r.y, s.y)) : this.targetDelta ? (Boolean(this.resumingFrom) ? this.target = this.applyTransform(this.layout.layoutBox) : Gr(this.target, this.layout.layoutBox), Yi(this.target, this.targetDelta)) : Gr(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget)) {
                this.attemptToResolveRelativeTarget = !1;
                const t = this.getClosestProjectingParent();
                t && Boolean(t.resumingFrom) === Boolean(this.resumingFrom) && !t.options.layoutScroll && t.target ? (this.relativeParent = t, this.relativeTarget = Bi(), this.relativeTargetOrigin = Bi(), Ci(this.relativeTargetOrigin, this.target, t.target), Gr(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
              }
            }
          }
          getClosestProjectingParent() {
            if (this.parent && !ji(this.parent.latestValues) && !Ni(this.parent.latestValues)) return (this.parent.relativeTarget || this.parent.targetDelta) && this.parent.layout ? this.parent : this.parent.getClosestProjectingParent()
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
            let r = !0;
            if (e && (r = !1), i && n && (r = !1), r) return;
            const {
              layout: s,
              layoutId: a
            } = this.options;
            if (this.isTreeAnimating = Boolean((null === (t = this.parent) || void 0 === t ? void 0 : t.isTreeAnimating) || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !s && !a) return;
            Gr(this.layoutCorrected, this.layout.layoutBox),
              function(t, e, n, o = !1) {
                var i, r;
                const s = n.length;
                if (!s) return;
                let a, l;
                e.x = e.y = 1;
                for (let u = 0; u < s; u++) a = n[u], l = a.projectionDelta, "contents" !== (null === (r = null === (i = a.instance) || void 0 === i ? void 0 : i.style) || void 0 === r ? void 0 : r.display) && (o && a.options.layoutScroll && a.scroll && a !== a.root && Ki(t, {
                  x: -a.scroll.offset.x,
                  y: -a.scroll.offset.y
                }), l && (e.x *= l.x.scale, e.y *= l.y.scale, Yi(t, l)), o && Ui(a.latestValues) && Ki(t, a.latestValues));
                e.x = Xi(e.x), e.y = Xi(e.y)
              }(this.layoutCorrected, this.treeScale, this.path, i);
            const {
              target: l
            } = o;
            if (!l) return;
            this.projectionDelta || (this.projectionDelta = {
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
            }, this.projectionDeltaWithTransform = {
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
            });
            const u = this.treeScale.x,
              c = this.treeScale.y,
              h = this.projectionTransform;
            Vi(this.projectionDelta, this.layoutCorrected, l, this.latestValues), this.projectionTransform = is(this.projectionDelta, this.treeScale), this.projectionTransform === h && this.treeScale.x === u && this.treeScale.y === c || (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", l))
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
              r = (null == i ? void 0 : i.latestValues) || {},
              s = {
                ...this.latestValues
              },
              a = {
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
              };
            this.relativeTarget = this.relativeTargetOrigin = void 0, this.attemptToResolveRelativeTarget = !e;
            const l = Bi(),
              u = (null == i ? void 0 : i.source) !== (null === (n = this.layout) || void 0 === n ? void 0 : n.source),
              c = ((null === (o = this.getStack()) || void 0 === o ? void 0 : o.members.length) || 0) <= 1,
              h = Boolean(u && !c && !0 === this.options.crossfade && !this.path.some(Ts));
            this.animationProgress = 0, this.mixTargetDelta = e => {
              var n;
              const o = e / 1e3;
              var i, d, p, f;
              Es(a.x, t.x, o), Es(a.y, t.y, o), this.setTargetDelta(a), this.relativeTarget && this.relativeTargetOrigin && this.layout && (null === (n = this.relativeParent) || void 0 === n ? void 0 : n.layout) && (Ci(l, this.layout.layoutBox, this.relativeParent.layout.layoutBox), i = this.relativeTarget, d = this.relativeTargetOrigin, p = l, f = o, bs(i.x, d.x, p.x, f), bs(i.y, d.y, p.y, f)), u && (this.animationValues = s, function(t, e, n, o, i, r) {
                i ? (t.opacity = Gn(0, void 0 !== n.opacity ? n.opacity : 1, Wr(o)), t.opacityExit = Gn(void 0 !== e.opacity ? e.opacity : 1, 0, Hr(o))) : r && (t.opacity = Gn(void 0 !== e.opacity ? e.opacity : 1, void 0 !== n.opacity ? n.opacity : 1, o));
                for (let i = 0; i < Ur; i++) {
                  const r = `border${jr[i]}Radius`;
                  let s = zr(e, r),
                    a = zr(n, r);
                  void 0 === s && void 0 === a || (s || (s = 0), a || (a = 0), 0 === s || 0 === a || $r(s) === $r(a) ? (t[r] = Math.max(Gn(Nr(s), Nr(a), o), 0), (et.test(a) || et.test(s)) && (t[r] += "%")) : t[r] = a)
                }(e.rotate || n.rotate) && (t.rotate = Gn(e.rotate || 0, n.rotate || 0, o))
              }(s, r, this.latestValues, o, h, c)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = o
            }, this.mixTargetDelta(0)
          }
          startAnimation(t) {
            var e, n;
            this.notifyListeners("animationStart"), null === (e = this.currentAnimation) || void 0 === e || e.stop(), this.resumingFrom && (null === (n = this.resumingFrom.currentAnimation) || void 0 === n || n.stop()), this.pendingAnimation && (We.update(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = ze.update((() => {
              b.hasAnimatedSinceResize = !0, this.currentAnimation = Or(0, 1e3, {
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
              if (this !== t && this.layout && o && As(this.options.animationType, this.layout.layoutBox, o.layoutBox)) {
                n = this.target || Bi();
                const e = bi(this.layout.layoutBox.x);
                n.x.min = t.target.x.min, n.x.max = n.x.min + e;
                const o = bi(this.layout.layoutBox.y);
                n.y.min = t.target.y.min, n.y.max = n.y.min + o
              }
              Gr(e, n), Ki(e, i), Vi(this.projectionDeltaWithTransform, this.layoutCorrected, e, i)
            }
          }
          registerSharedNode(t, e) {
            var n, o, i;
            this.sharedNodes.has(t) || this.sharedNodes.set(t, new os), this.sharedNodes.get(t).add(e), e.promote({
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
            for (let e = 0; e < as.length; e++) {
              const i = "rotate" + as[e];
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
            const r = null === (e = this.options.visualElement) || void 0 === e ? void 0 : e.getProps().transformTemplate;
            if (this.needsReset) return this.needsReset = !1, i.opacity = "", i.pointerEvents = It(t.pointerEvents) || "", i.transform = r ? r(this.latestValues, "") : "none", i;
            const s = this.getLead();
            if (!this.projectionDelta || !this.layout || !s.target) {
              const e = {};
              return this.options.layoutId && (e.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1, e.pointerEvents = It(t.pointerEvents) || ""), this.hasProjected && !Ui(this.latestValues) && (e.transform = r ? r({}, "") : "none", this.hasProjected = !1), e
            }
            const a = s.animationValues || s.latestValues;
            this.applyTransformsToTarget(), i.transform = is(this.projectionDeltaWithTransform, this.treeScale, a), r && (i.transform = r(a, i.transform));
            const {
              x: l,
              y: u
            } = this.projectionDelta;
            i.transformOrigin = `${100*l.origin}% ${100*u.origin}% 0`, s.animationValues ? i.opacity = s === this ? null !== (o = null !== (n = a.opacity) && void 0 !== n ? n : this.latestValues.opacity) && void 0 !== o ? o : 1 : this.preserveOpacity ? this.latestValues.opacity : a.opacityExit : i.opacity = s === this ? void 0 !== a.opacity ? a.opacity : "" : void 0 !== a.opacityExit ? a.opacityExit : 0;
            for (const t in D) {
              if (void 0 === a[t]) continue;
              const {
                correct: e,
                applyTo: n
              } = D[t], o = e(a[t], s);
              if (n) {
                const t = n.length;
                for (let e = 0; e < t; e++) i[n[e]] = o
              } else i[t] = o
            }
            return this.options.layoutId && (i.pointerEvents = s === this ? It(t.pointerEvents) || "" : "none"), i
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
          }
          resetTree() {
            this.root.nodes.forEach((t => {
              var e;
              return null === (e = t.currentAnimation) || void 0 === e ? void 0 : e.stop()
            })), this.root.nodes.forEach(fs), this.root.sharedNodes.clear()
          }
        }
      }

      function cs(t) {
        t.updateLayout()
      }

      function hs(t) {
        var e, n, o;
        const i = (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) || t.snapshot;
        if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
          const {
            layoutBox: e,
            measuredBox: n
          } = t.layout, {
            animationType: o
          } = t.options, r = i.source !== t.layout.source;
          "size" === o ? Ii((t => {
            const n = r ? i.measuredBox[t] : i.layoutBox[t],
              o = bi(n);
            n.min = e[t].min, n.max = n.min + o
          })) : As(o, i.layoutBox, e) && Ii((t => {
            const n = r ? i.measuredBox[t] : i.layoutBox[t],
              o = bi(e[t]);
            n.max = n.min + o
          }));
          const s = {
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
          };
          Vi(s, e, i.layoutBox);
          const a = {
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
          };
          r ? Vi(a, t.applyTransform(n, !0), i.measuredBox) : Vi(a, e, i.layoutBox);
          const l = !ts(s);
          let u = !1;
          if (!t.resumeFrom) {
            const n = t.getClosestProjectingParent();
            if (n && !n.resumeFrom) {
              const {
                snapshot: t,
                layout: o
              } = n;
              if (t && o) {
                const n = Bi();
                Ci(n, i.layoutBox, t.layoutBox);
                const r = Bi();
                Ci(r, e, o.layoutBox), es(n, r) || (u = !0)
              }
            }
          }
          t.notifyListeners("didUpdate", {
            layout: e,
            snapshot: i,
            delta: a,
            layoutDelta: s,
            hasLayoutChanged: l,
            hasRelativeTargetChanged: u
          })
        } else t.isLead() && (null === (o = (n = t.options).onExitComplete) || void 0 === o || o.call(n));
        t.options.transition = void 0
      }

      function ds(t) {
        t.isProjectionDirty || (t.isProjectionDirty = Boolean(t.parent && t.parent.isProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = Boolean(t.parent && t.parent.isTransformDirty))
      }

      function ps(t) {
        t.clearSnapshot()
      }

      function fs(t) {
        t.clearMeasurements()
      }

      function ms(t) {
        const {
          visualElement: e
        } = t.options;
        (null == e ? void 0 : e.getProps().onBeforeLayoutMeasure) && e.notify("BeforeLayoutMeasure"), t.resetTransform()
      }

      function gs(t) {
        t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0
      }

      function vs(t) {
        t.resolveTargetDelta()
      }

      function ys(t) {
        t.calcProjection()
      }

      function xs(t) {
        t.resetRotation()
      }

      function ws(t) {
        t.removeLeadSnapshot()
      }

      function Es(t, e, n) {
        t.translate = Gn(e.translate, 0, n), t.scale = Gn(e.scale, 1, n), t.origin = e.origin, t.originPoint = e.originPoint
      }

      function bs(t, e, n, o) {
        t.min = Gn(e.min, n.min, o), t.max = Gn(e.max, n.max, o)
      }

      function Ts(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit
      }
      const Ps = {
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

      function Ss(t) {
        t.min = Math.round(t.min), t.max = Math.round(t.max)
      }

      function As(t, e, n) {
        return "position" === t || "preserve-aspect" === t && !Ti(ns(e), ns(n), .2)
      }
      const Cs = us({
          attachResizeListener: (t, e) => zt(t, "resize", e),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop
          }),
          checkIsScrollRoot: () => !0
        }),
        Ms = {
          current: void 0
        },
        Ls = us({
          measureScroll: t => ({
            x: t.scrollLeft,
            y: t.scrollTop
          }),
          defaultParent: () => {
            if (!Ms.current) {
              const t = new Cs(0, {});
              t.mount(window), t.setOptions({
                layoutScroll: !0
              }), Ms.current = t
            }
            return Ms.current
          },
          resetTransform: (t, e) => {
            t.style.transform = void 0 !== e ? e : "none"
          },
          checkIsScrollRoot: t => Boolean("fixed" === window.getComputedStyle(t).position)
        }),
        ks = {
          ...di,
          ...Ae,
          ...nr,
          ...Fr
        },
        Rs = L(((t, e) => Nt(t, e, ks, Mr, Ls)));

      function Ds(t) {
        return C(Nt(t, {
          forwardMotionProps: !1
        }, ks, Mr, Ls))
      }
      const Bs = L(Nt);

      function Is() {
        const t = (0, o.useRef)(!1);
        return u((() => (t.current = !0, () => {
          t.current = !1
        })), []), t
      }

      function Fs() {
        const t = Is(),
          [e, n] = (0, o.useState)(0),
          i = (0, o.useCallback)((() => {
            t.current && n(e + 1)
          }), [e]);
        return [(0, o.useCallback)((() => ze.postRender(i)), [i]), e]
      }
      class Os extends o.Component {
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

      function js({
        children: t,
        isPresent: e
      }) {
        const n = (0, o.useId)(),
          i = (0, o.useRef)(null),
          r = (0, o.useRef)({
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
          } = r.current;
          if (e || !i.current || !t || !o) return;
          i.current.dataset.motionPopId = n;
          const l = document.createElement("style");
          return document.head.appendChild(l), l.sheet && l.sheet.insertRule(`\n          [data-motion-pop-id="${n}"] {\n            position: absolute !important;\n            width: ${t}px !important;\n            height: ${o}px !important;\n            top: ${s}px !important;\n            left: ${a}px !important;\n          }\n        `), () => {
            document.head.removeChild(l)
          }
        }), [e]), o.createElement(Os, {
          isPresent: e,
          childRef: i,
          sizeRef: r
        }, o.cloneElement(t, {
          ref: i
        }))
      }
      const Us = ({
        children: t,
        initial: e,
        isPresent: n,
        onExitComplete: i,
        custom: r,
        presenceAffectsLayout: s,
        mode: l
      }) => {
        const u = E(Ns),
          c = (0, o.useId)(),
          h = (0, o.useMemo)((() => ({
            id: c,
            initial: e,
            isPresent: n,
            custom: r,
            onExitComplete: t => {
              u.set(t, !0);
              for (const t of u.values())
                if (!t) return;
              i && i()
            },
            register: t => (u.set(t, !1), () => u.delete(t))
          })), s ? void 0 : [n]);
        return (0, o.useMemo)((() => {
          u.forEach(((t, e) => u.set(e, !1)))
        }), [n]), o.useEffect((() => {
          !n && !u.size && i && i()
        }), [n]), "popLayout" === l && (t = o.createElement(js, {
          isPresent: n
        }, t)), o.createElement(a.Provider, {
          value: h
        }, t)
      };

      function Ns() {
        return new Map
      }
      const $s = t => t.key || "",
        zs = ({
          children: t,
          custom: e,
          initial: n = !0,
          onExitComplete: i,
          exitBeforeEnter: r,
          presenceAffectsLayout: s = !0,
          mode: a = "sync"
        }) => {
          r && (a = "wait", ye(!1, "Replace exitBeforeEnter with mode='wait'"));
          let [l] = Fs();
          const c = (0, o.useContext)(P).forceRender;
          c && (l = c);
          const h = Is(),
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
                    const n = $s(t);
                    e.set(n, t)
                  }))
                }(d, g), m.current = p
            })), de((() => {
              v.current = !0, g.clear(), f.clear()
            })), v.current) return o.createElement(o.Fragment, null, p.map((t => o.createElement(Us, {
            key: $s(t),
            isPresent: !0,
            initial: !!n && void 0,
            presenceAffectsLayout: s,
            mode: a
          }, t))));
          p = [...p];
          const y = m.current.map($s),
            x = d.map($s),
            w = y.length;
          for (let t = 0; t < w; t++) {
            const e = y[t]; - 1 === x.indexOf(e) && f.add(e)
          }
          return "wait" === a && f.size && (p = []), f.forEach((t => {
            if (-1 !== x.indexOf(t)) return;
            const n = g.get(t);
            if (!n) return;
            const r = y.indexOf(t);
            p.splice(r, 0, o.createElement(Us, {
              key: $s(n),
              isPresent: !1,
              onExitComplete: () => {
                g.delete(t), f.delete(t);
                const e = m.current.findIndex((e => e.key === t));
                if (m.current.splice(e, 1), !f.size) {
                  if (m.current = d, !1 === h.current) return;
                  l(), i && i()
                }
              },
              custom: e,
              presenceAffectsLayout: s,
              mode: a
            }, n))
          })), p = p.map((t => {
            const e = t.key;
            return f.has(e) ? t : o.createElement(Us, {
              key: $s(t),
              isPresent: !0,
              presenceAffectsLayout: s,
              mode: a
            }, t)
          })), "production" !== ge && "wait" === a && p.length > 1 && console.warn('You\'re attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.'), o.createElement(o.Fragment, null, f.size ? p : p.map((t => (0, o.cloneElement)(t))))
        },
        Ws = (0, o.createContext)(null),
        Hs = t => !t.isLayoutDirty && t.willUpdate(!1);

      function Ys() {
        const t = new Set,
          e = new WeakMap,
          n = () => t.forEach(Hs);
        return {
          add: o => {
            t.add(o), e.set(o, o.addEventListener("willUpdate", n))
          },
          remove: o => {
            var i;
            t.delete(o), null === (i = e.get(o)) || void 0 === i || i(), e.delete(o), n()
          },
          dirty: n
        }
      }
      const Xs = t => !0 === t,
        Gs = ({
          children: t,
          id: e,
          inheritId: n,
          inherit: i = !0
        }) => {
          void 0 !== n && (i = n);
          const r = (0, o.useContext)(P),
            s = (0, o.useContext)(Ws),
            [a, l] = Fs(),
            u = (0, o.useRef)(null),
            c = r.id || s;
          null === u.current && ((t => Xs(!0 === t) || "id" === t)(i) && c && (e = e ? c + "-" + e : c), u.current = {
            id: e,
            group: Xs(i) && r.group || Ys()
          });
          const h = (0, o.useMemo)((() => ({
            ...u.current,
            forceRender: a
          })), [l]);
          return o.createElement(P.Provider, {
            value: h
          }, t)
        };
      let _s = 0;
      const qs = ({
        children: t
      }) => (o.useEffect((() => {
        (0, Un.$)(!1, "AnimateSharedLayout is deprecated: https://www.framer.com/docs/guide-upgrade/##shared-layout-animations")
      }), []), o.createElement(Gs, {
        id: E((() => "asl-" + _s++))
      }, t));

      function Zs({
        children: t,
        isValidProp: e,
        ...n
      }) {
        e && mt(e), (n = {
          ...(0, o.useContext)(i),
          ...n
        }).isStatic = E((() => n.isStatic));
        const r = (0, o.useMemo)((() => n), [JSON.stringify(n.transition), n.transformPagePoint, n.reducedMotion]);
        return o.createElement(i.Provider, {
          value: r
        }, t)
      }

      function Ks({
        children: t,
        features: e,
        strict: n = !1
      }) {
        const [, i] = (0, o.useState)(!Js(e)), r = (0, o.useRef)(void 0);
        if (!Js(e)) {
          const {
            renderer: t,
            ...n
          } = e;
          r.current = t, w(n)
        }
        return (0, o.useEffect)((() => {
          Js(e) && e().then((({
            renderer: t,
            ...e
          }) => {
            w(e), r.current = t, i(!0)
          }))
        }), []), o.createElement(c.Provider, {
          value: {
            renderer: r.current,
            strict: n
          }
        }, t)
      }

      function Js(t) {
        return "function" == typeof t
      }
      const Qs = (0, o.createContext)(null),
        ta = (0, o.forwardRef)((function({
          children: t,
          as: e = "ul",
          axis: n = "y",
          onReorder: i,
          values: r,
          ...s
        }, a) {
          const l = E((() => Rs(e))),
            u = [],
            c = (0, o.useRef)(!1);
          (0, Un.V)(Boolean(r), "Reorder.Group must be provided a values prop");
          const h = {
            axis: n,
            registerItem: (t, e) => {
              e && -1 === u.findIndex((e => t === e.value)) && (u.push({
                value: t,
                layout: e[n]
              }), u.sort(na))
            },
            updateOrder: (t, e, n) => {
              if (c.current) return;
              const o = function(t, e, n, o) {
                if (!o) return t;
                const i = t.findIndex((t => t.value === e));
                if (-1 === i) return t;
                const r = o > 0 ? 1 : -1,
                  s = t[i + r];
                if (!s) return t;
                const a = t[i],
                  l = s.layout,
                  u = Gn(l.min, l.max, .5);
                return 1 === r && a.layout.max + n > u || -1 === r && a.layout.min + n < u ? function([...t], e, n) {
                  const o = e < 0 ? t.length + e : e;
                  if (o >= 0 && o < t.length) {
                    const o = n < 0 ? t.length + n : n,
                      [i] = t.splice(e, 1);
                    t.splice(o, 0, i)
                  }
                  return t
                }(t, i, i + r) : t
              }(u, t, e, n);
              u !== o && (c.current = !0, i(o.map(ea).filter((t => -1 !== r.indexOf(t)))))
            }
          };
          return (0, o.useEffect)((() => {
            c.current = !1
          })), o.createElement(l, {
            ...s,
            ref: a
          }, o.createElement(Qs.Provider, {
            value: h
          }, t))
        }));

      function ea(t) {
        return t.value
      }

      function na(t, e) {
        return t.layout.min - e.layout.min
      }

      function oa(t) {
        const e = E((() => Qe(t))),
          {
            isStatic: n
          } = (0, o.useContext)(i);
        if (n) {
          const [, n] = (0, o.useState)(t);
          (0, o.useEffect)((() => e.on("change", n)), [])
        }
        return e
      }
      const ia = t => (t => "object" == typeof t && t.mix)(t) ? t.mix : void 0;

      function ra(...t) {
        const e = !Array.isArray(t[0]),
          n = e ? 0 : -1,
          o = t[0 + n],
          i = t[1 + n],
          r = t[2 + n],
          s = t[3 + n],
          a = ro(i, r, {
            mixer: ia(r[0]),
            ...s
          });
        return e ? a(o) : a
      }

      function sa(t, e) {
        const n = oa(e()),
          o = () => n.set(e());
        return o(),
          function(t, e) {
            u((() => {
              const n = t.map((t => t.on("change", e)));
              return () => {
                n.forEach((t => t())), We.update(o)
              }
            }))
          }(t, (() => ze.update(o, !1, !0))), n
      }

      function aa(t, e, n, o) {
        const i = "function" == typeof e ? e : ra(e, n, o);
        return Array.isArray(t) ? la(t, i) : la([t], (([t]) => i(t)))
      }

      function la(t, e) {
        const n = E((() => []));
        return sa(t, (() => {
          n.length = 0;
          const o = t.length;
          for (let e = 0; e < o; e++) n[e] = t[e].get();
          return e(n)
        }))
      }

      function ua(t, e = 0) {
        return j(t) ? t : oa(e)
      }
      const ca = (0, o.forwardRef)((function({
          children: t,
          style: e = {},
          value: n,
          as: i = "li",
          onDrag: r,
          layout: s = !0,
          ...a
        }, l) {
          const u = E((() => Rs(i))),
            c = (0, o.useContext)(Qs),
            h = {
              x: ua(e.x),
              y: ua(e.y)
            },
            d = aa([h.x, h.y], (([t, e]) => t || e ? 1 : "unset")),
            p = (0, o.useRef)(null);
          (0, Un.V)(Boolean(c), "Reorder.Item must be a child of Reorder.Group");
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
              o[f] && g(n, h[f].get(), o[f]), r && r(t, e)
            },
            onLayoutMeasure: t => {
              p.current = t
            },
            ref: l
          }, t)
        })),
        ha = {
          Group: ta,
          Item: ca
        },
        da = {
          renderer: Mr,
          ...di,
          ...Ae
        },
        pa = {
          ...da,
          ...nr,
          ...Fr,
          projectionNodeConstructor: Ls
        };

      function fa(t, ...e) {
        const n = t.length;
        return sa(e, (function() {
          let o = "";
          for (let i = 0; i < n; i++) o += t[i], e[i] && (o += e[i].get());
          return o
        }))
      }

      function ma(t, e = {}) {
        const {
          isStatic: n
        } = (0, o.useContext)(i), r = (0, o.useRef)(null), s = oa(j(t) ? t.get() : t);
        return (0, o.useMemo)((() => s.attach(((t, o) => n ? o(t) : (r.current && r.current.stop(), r.current = Io({
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

      function ga(t) {
        const e = oa(t.getVelocity());
        return (0, o.useEffect)((() => t.on("velocityChange", (t => {
          e.set(t)
        }))), [t]), e
      }
      var va = n(78322);

      function ya(t, e) {
        var n;
        return "string" == typeof t ? e ? (null !== (n = e[t]) && void 0 !== n || (e[t] = document.querySelectorAll(t)), t = e[t]) : t = document.querySelectorAll(t) : t instanceof Element && (t = [t]), Array.from(t || [])
      }
      const xa = new WeakMap;
      let wa;

      function Ea({
        target: t,
        contentRect: e,
        borderBoxSize: n
      }) {
        var o;
        null === (o = xa.get(t)) || void 0 === o || o.forEach((o => {
          o({
            target: t,
            contentSize: e,
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
              }(t, n)
            }
          })
        }))
      }

      function ba(t) {
        t.forEach(Ea)
      }
      const Ta = new Set;
      let Pa;
      const Va = t => "function" == typeof t;
      var Sa = n(87058),
        Aa = n(14366);
      const Ca = 50,
        Ma = () => ({
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
        La = {
          x: {
            length: "Width",
            position: "Left"
          },
          y: {
            length: "Height",
            position: "Top"
          }
        };

      function ka(t, e, n, o) {
        const i = n[e],
          {
            length: r,
            position: s
          } = La[e],
          a = i.current,
          l = n.time;
        i.current = t[`scroll${s}`], i.scrollLength = t[`scroll${r}`] - t[`client${r}`], i.offset.length = 0, i.offset[0] = 0, i.offset[1] = i.scrollLength, i.progress = (0, Sa.q)(0, i.scrollLength, i.current);
        const u = o - l;
        i.velocity = u > Ca ? 0 : (0, Aa.f)(i.current - a, u)
      }
      var Ra = n(72023),
        Da = n(44367),
        Ba = n(38138);
      const Ia = {
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
      var Fa = n(64533),
        Oa = n(19877);
      const ja = {
        start: 0,
        center: .5,
        end: 1
      };

      function Ua(t, e, n = 0) {
        let o = 0;
        if (void 0 !== ja[t] && (t = ja[t]), (0, Oa.K)(t)) {
          const e = parseFloat(t);
          t.endsWith("px") ? o = e : t.endsWith("%") ? t = e / 100 : t.endsWith("vw") ? o = e / 100 * document.documentElement.clientWidth : t.endsWith("vh") ? o = e / 100 * document.documentElement.clientHeight : t = e
        }
        return (0, Fa.E)(t) && (o = e * t), n + o
      }
      const Na = [0, 0];

      function $a(t, e, n, o) {
        let i = Array.isArray(t) ? t : Na,
          r = 0,
          s = 0;
        return (0, Fa.E)(t) ? i = [t, t] : (0, Oa.K)(t) && (i = (t = t.trim()).includes(" ") ? t.split(" ") : [t, ja[t] ? t : "0"]), r = Ua(i[0], n, o), s = Ua(i[1], e), r - s
      }
      const za = {
        x: 0,
        y: 0
      };

      function Wa(t, e, n, o = {}) {
        const i = o.axis || "y";
        return {
          measure: () => function(t, e = t, n) {
            if (n.x.targetOffset = 0, n.y.targetOffset = 0, e !== t) {
              let o = e;
              for (; o && o != t;) n.x.targetOffset += o.offsetLeft, n.y.targetOffset += o.offsetTop, o = o.offsetParent
            }
            n.x.targetLength = e === t ? e.scrollWidth : e.clientWidth, n.y.targetLength = e === t ? e.scrollHeight : e.clientHeight, n.x.containerLength = t.clientWidth, n.y.containerLength = t.clientHeight
          }(t, o.target, n),
          update: e => {
            ! function(t, e, n) {
              ka(t, "x", e, n), ka(t, "y", e, n), e.time = n
            }(t, n, e), (o.offset || o.target) && function(t, e, n) {
              let {
                offset: o = Ia.All
              } = n;
              const {
                target: i = t,
                axis: r = "y"
              } = n, s = "y" === r ? "height" : "width", a = i !== t ? function(t, e) {
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
              }(i, t) : za, l = i === t ? {
                width: t.scrollWidth,
                height: t.scrollHeight
              } : {
                width: i.clientWidth,
                height: i.clientHeight
              }, u = {
                width: t.clientWidth,
                height: t.clientHeight
              };
              e[r].offset.length = 0;
              let c = !e[r].interpolate;
              const h = o.length;
              for (let t = 0; t < h; t++) {
                const n = $a(o[t], u[s], l[s], a[r]);
                c || n === e[r].interpolatorOffsets[t] || (c = !0), e[r].offset[t] = n
              }
              c && (e[r].interpolate = (0, Da.G)((0, Ba.Z)(h), e[r].offset), e[r].interpolatorOffsets = [...e[r].offset]), e[r].progress = e[r].interpolate(e[r].current)
            }(t, n, o)
          },
          notify: Va(e) ? () => e(n) : (r = e, s = n[i], r.pause(), r.forEachNative(((t, {
            easing: e
          }) => {
            var n, o;
            if (t.updateDuration) e || (t.easing = Ra.p), t.updateDuration(1);
            else {
              const i = {
                duration: 1e3
              };
              e || (i.easing = "linear"), null === (o = null === (n = t.effect) || void 0 === n ? void 0 : n.updateTiming) || void 0 === o || o.call(n, i)
            }
          })), () => {
            r.currentTime = s.progress
          })
        };
        var r, s
      }
      const Ha = new WeakMap,
        Ya = new WeakMap,
        Xa = new WeakMap,
        Ga = t => t === document.documentElement ? window : t;

      function _a(t, e = {}) {
        var {
          container: n = document.documentElement
        } = e, o = (0, va.__rest)(e, ["container"]);
        let i = Xa.get(n);
        i || (i = new Set, Xa.set(n, i));
        const r = Ma(),
          s = Wa(n, t, r, o);
        if (i.add(s), !Ha.has(n)) {
          const t = () => {
            const t = performance.now();
            for (const t of i) t.measure();
            for (const e of i) e.update(t);
            for (const t of i) t.notify()
          };
          Ha.set(n, t);
          const e = Ga(n);
          window.addEventListener("resize", t, {
            passive: !0
          }), n !== document.documentElement && Ya.set(n, (u = t, Va(l = n) ? (a = l, Ta.add(a), Pa || (Pa = () => {
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
          }, window.addEventListener("resize", Pa)), () => {
            Ta.delete(a), !Ta.size && Pa && (Pa = void 0)
          }) : function(t, e) {
            wa || "undefined" != typeof ResizeObserver && (wa = new ResizeObserver(ba));
            const n = ya(t);
            return n.forEach((t => {
              let n = xa.get(t);
              n || (n = new Set, xa.set(t, n)), n.add(e), null == wa || wa.observe(t)
            })), () => {
              n.forEach((t => {
                const n = xa.get(t);
                null == n || n.delete(e), (null == n ? void 0 : n.size) || null == wa || wa.unobserve(t)
              }))
            }
          }(l, u))), e.addEventListener("scroll", t, {
            passive: !0
          })
        }
        var a, l, u;
        const c = Ha.get(n),
          h = requestAnimationFrame(c);
        return () => {
          var e;
          "function" != typeof t && t.stop(), cancelAnimationFrame(h);
          const o = Xa.get(n);
          if (!o) return;
          if (o.delete(s), o.size) return;
          const i = Ha.get(n);
          Ha.delete(n), i && (Ga(n).removeEventListener("scroll", i), null === (e = Ya.get(n)) || void 0 === e || e(), window.removeEventListener("resize", i))
        }
      }
      const qa = () => ({
        scrollX: Qe(0),
        scrollY: Qe(0),
        scrollXProgress: Qe(0),
        scrollYProgress: Qe(0)
      });

      function Za({
        container: t,
        target: e,
        layoutEffect: n = !0,
        ...i
      } = {}) {
        const r = E(qa);
        return (n ? u : o.useEffect)((() => _a((({
          x: t,
          y: e
        }) => {
          r.scrollX.set(t.current), r.scrollXProgress.set(t.progress), r.scrollY.set(e.current), r.scrollYProgress.set(e.progress)
        }), {
          ...i,
          container: (null == t ? void 0 : t.current) || void 0,
          target: (null == e ? void 0 : e.current) || void 0
        })), []), r
      }

      function Ka(t) {
        return ye(!1, "useElementScroll is deprecated. Convert to useScroll({ container: ref })."), Za({
          container: t
        })
      }

      function Ja() {
        return ye(!1, "useViewportScroll is deprecated. Convert to useScroll()."), Za()
      }

      function Qa(t) {
        const e = (0, o.useRef)(0),
          {
            isStatic: n
          } = (0, o.useContext)(i);
        (0, o.useEffect)((() => {
          if (n) return;
          const o = ({
            timestamp: n,
            delta: o
          }) => {
            e.current || (e.current = n), t(n - e.current, o)
          };
          return ze.update(o, !0), () => We.update(o)
        }), [t])
      }

      function tl() {
        const t = oa(0);
        return Qa((e => t.set(e))), t
      }
      class el extends Je {
        constructor() {
          super(...arguments), this.members = [], this.transforms = new Set
        }
        add(t) {
          let e;
          F.has(t) ? (this.transforms.add(t), e = "transform") : t.startsWith("origin") || z(t) || "willChange" === t || (e = Vt(t)), e && (_e(this.members, e), this.update())
        }
        remove(t) {
          F.has(t) ? (this.transforms.delete(t), this.transforms.size || qe(this.members, "transform")) : qe(this.members, Vt(t)), this.update()
        }
        update() {
          this.set(this.members.length ? this.members.join(", ") : "auto")
        }
      }

      function nl() {
        return E((() => new el("auto")))
      }

      function ol(t, e, n) {
        u((() => t.on(e, n)), [t, e, n])
      }

      function il() {
        !yr.current && xr();
        const [t] = (0, o.useState)(vr.current);
        return t
      }

      function rl() {
        const t = il(),
          {
            reducedMotion: e
          } = (0, o.useContext)(i);
        return "never" !== e && ("always" === e || t)
      }

      function sl() {
        let t = !1;
        const e = [],
          n = new Set,
          o = {
            subscribe: t => (n.add(t), () => {
              n.delete(t)
            }),
            start(o, i) {
              if (t) {
                const t = [];
                return n.forEach((e => {
                  t.push(oi(e, o, {
                    transitionOverride: i
                  }))
                })), Promise.all(t)
              }
              return new Promise((t => {
                e.push({
                  animation: [o, i],
                  resolve: t
                })
              }))
            },
            set: e => ((0, Un.V)(t, "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."), n.forEach((t => {
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

      function al() {
        const t = E(sl);
        return (0, o.useEffect)(t.mount, []), t
      }
      const ll = al,
        ul = (t, e, n) => {
          const o = e - t;
          return ((n - t) % o + o) % o + t
        };

      function cl(...t) {
        const e = (0, o.useRef)(0),
          [n, i] = (0, o.useState)(t[e.current]);
        return [n, (0, o.useCallback)((n => {
          e.current = "number" != typeof n ? ul(0, t.length, e.current + 1) : n, i(t[e.current])
        }), [t.length, ...t])]
      }
      const hl = {
        any: 0,
        all: 1
      };

      function dl(t, {
        root: e,
        margin: n,
        amount: i,
        once: r = !1
      } = {}) {
        const [s, a] = (0, o.useState)(!1);
        return (0, o.useEffect)((() => {
          if (!t.current || r && s) return;
          const o = {
            root: e && e.current || void 0,
            margin: n,
            amount: "some" === i ? "any" : i
          };
          return function(t, e, {
            root: n,
            margin: o,
            amount: i = "any"
          } = {}) {
            if ("undefined" == typeof IntersectionObserver) return () => {};
            const r = ya(t),
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
                threshold: "number" == typeof i ? i : hl[i]
              });
            return r.forEach((t => a.observe(t))), () => a.disconnect()
          }(t.current, (() => (a(!0), r ? void 0 : () => a(!1))), o)
        }), [e, t, n, r]), s
      }
      class pl {
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
      const fl = () => new pl;

      function ml() {
        return E(fl)
      }

      function gl(t) {
        return null !== t && "object" == typeof t && A in t
      }

      function vl(t) {
        if (gl(t)) return t[A]
      }

      function yl() {
        return xl
      }

      function xl(t) {
        Ms.current && (Ms.current.isUpdating = !1, Ms.current.blockUpdate(), t && t())
      }

      function wl() {
        const [t, e] = Fs(), n = yl();
        return (0, o.useEffect)((() => {
          ze.postRender((() => ze.postRender((() => $n.current = !1))))
        }), [e]), e => {
          n((() => {
            $n.current = !0, t(), e()
          }))
        }
      }

      function El() {
        return o.useCallback((() => {
          const t = Ms.current;
          t && t.resetTree()
        }), [])
      }

      function bl(t, e, n, o) {
        window.MotionAppearAnimations || (window.MotionAppearAnimations = new Map);
        const i = t.dataset[On],
          r = Uo(t, e, n, o);
        return i && r && window.MotionAppearAnimations.set(In(i, e), r), r
      }
      const Tl = () => ({});
      class Pl extends Tr {
        build() {}
        measureInstanceViewportBox() {
          return Bi()
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
      const Vl = Ft({
        scrapeMotionValuesFromProps: Tl,
        createRenderState: Tl
      });

      function Sl(t) {
        const [e, n] = (0, o.useState)(t), i = Vl({}, !1), r = E((() => new Pl({
          props: {},
          visualState: i
        }, {
          initialState: t
        })));
        return (0, o.useEffect)((() => (r.mount({}), () => r.unmount())), [r]), (0, o.useEffect)((() => {
          r.setProps({
            onUpdate: t => {
              n({
                ...t
              })
            }
          })
        }), [n, r]), [e, E((() => t => oi(r, t)))]
      }
      const Al = t => t > .001 ? 1 / t : 1e5;
      let Cl = !1;

      function Ml(t) {
        let e = oa(1),
          n = oa(1);
        const o = s();
        return (0, Un.V)(!(!t && !o), "If no scale values are provided, useInvertedScale must be used within a child of another motion component."), (0, Un.$)(Cl, "useInvertedScale is deprecated and will be removed in 3.0. Use the layout prop instead."), Cl = !0, t ? (e = t.scaleX || e, n = t.scaleY || n) : o && (e = o.getValue("scaleX", 1), n = o.getValue("scaleY", 1)), {
          scaleX: aa(e, Al),
          scaleY: aa(n, Al)
        }
      }
    },
    42649: t => {
      var e, n, o = t.exports = {};

      function i() {
        throw new Error("setTimeout has not been defined")
      }

      function r() {
        throw new Error("clearTimeout has not been defined")
      }

      function s(t) {
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
          n = "function" == typeof clearTimeout ? clearTimeout : r
        } catch (t) {
          n = r
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
              if ((n === r || !n) && clearTimeout) return n = clearTimeout, clearTimeout(t);
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
    }
  }
]);