! function() {
  try {
    var t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      e = (new Error).stack;
    e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "f809ddc0-6fa2-412b-889d-465280dbf17a", t._sentryDebugIdIdentifier = "sentry-dbid-f809ddc0-6fa2-412b-889d-465280dbf17a")
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
  [2776, 7672], {
    93372: (t, e, n) => {
      n.r(e), n.d(e, {
        AnimatePresence: () => Ys,
        AnimateSharedLayout: () => Zs,
        AnimationType: () => $t,
        DeprecatedLayoutGroupContext: () => Xs,
        DragControls: () => Oa,
        FlatTree: () => as,
        LayoutGroup: () => Gs,
        LayoutGroupContext: () => S,
        LazyMotion: () => Js,
        MotionConfig: () => Ks,
        MotionConfigContext: () => r,
        MotionContext: () => i,
        MotionValue: () => Je,
        PresenceContext: () => a,
        Reorder: () => ha,
        SwitchLayoutGroupContext: () => V,
        VisualElement: () => Si,
        addPointerEvent: () => oe,
        addScaleCorrector: () => B,
        animate: () => ji,
        animateVisualElement: () => or,
        animationControls: () => Ma,
        animations: () => dr,
        buildTransform: () => $,
        calcLength: () => Er,
        checkTargetForNewValues: () => kn,
        clamp: () => X,
        createBox: () => Ir,
        createDomMotionComponent: () => Bs,
        createMotionComponent: () => A,
        delay: () => No,
        distance: () => pr,
        distance2D: () => fr,
        domAnimation: () => da,
        domMax: () => pa,
        filterProps: () => gt,
        isBrowser: () => l,
        isDragActive: () => ue,
        isMotionComponent: () => Ua,
        isMotionValue: () => j,
        isValidMotionProp: () => pt,
        m: () => Is,
        makeUseVisualState: () => Ot,
        mix: () => _n,
        motion: () => Ls,
        motionValue: () => Qe,
        optimizedAppearDataAttribute: () => jn,
        pipe: () => fe,
        resolveMotionValue: () => It,
        spring: () => Ro,
        startOptimizedAppearAnimation: () => Wa,
        transform: () => sa,
        unwrapMotionComponent: () => Na,
        useAnimation: () => ka,
        useAnimationControls: () => Ra,
        useAnimationFrame: () => Ea,
        useCycle: () => La,
        useDeprecatedAnimatedState: () => qa,
        useDeprecatedInvertedScale: () => Ja,
        useDomEvent: () => Yt,
        useDragControls: () => ja,
        useElementScroll: () => wa,
        useForceUpdate: () => Fs,
        useInView: () => Ia,
        useInstantLayoutTransition: () => $a,
        useInstantTransition: () => Ya,
        useIsPresent: () => Me,
        useIsomorphicLayoutEffect: () => u,
        useMotionTemplate: () => fa,
        useMotionValue: () => ra,
        useMotionValueEvent: () => Va,
        usePresence: () => Ae,
        useReducedMotion: () => Ta,
        useReducedMotionConfig: () => Aa,
        useResetProjection: () => Xa,
        useScroll: () => xa,
        useSpring: () => ma,
        useTime: () => Pa,
        useTransform: () => la,
        useUnmountEffect: () => de,
        useVelocity: () => ga,
        useViewportScroll: () => ba,
        useVisualElementContext: () => s,
        useWillChange: () => Ca,
        wrap: () => Da,
        wrapHandler: () => Zt
      });
      var o = n(51664);
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
      let P = 1;
      const S = (0, o.createContext)({});
      class C extends o.Component {
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
        T = Symbol.for("motionComponentSymbol");

      function A({
        preloadedFeatures: t,
        createVisualElement: e,
        projectionNodeConstructor: n,
        useRender: p,
        useVisualState: f,
        Component: g
      }) {
        t && w(t);
        const y = (0, o.forwardRef)((function(y, w) {
          const S = {
              ...(0, o.useContext)(r),
              ...y,
              layoutId: M(y)
            },
            {
              isStatic: T
            } = S;
          let A = null;
          const R = function(t) {
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
            k = T ? void 0 : b((() => {
              if (E.hasEverUpdated) return P++
            })),
            D = f(y, T);
          if (!T && l) {
            R.visualElement = function(t, e, n, i) {
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
            }(g, D, S, e);
            const i = (0, o.useContext)(c).strict,
              l = (0, o.useContext)(V);
            R.visualElement && (A = R.visualElement.loadFeatures(S, i, t, k, n || x.projectionNodeConstructor, l))
          }
          return o.createElement(C, {
            visualElement: R.visualElement,
            props: S
          }, A, o.createElement(i.Provider, {
            value: R
          }, p(g, y, k, function(t, e, n) {
            return (0, o.useCallback)((o => {
              o && t.mount && t.mount(o), e && (o ? e.mount(o) : e.unmount()), n && ("function" == typeof n ? n(o) : h(n) && (n.current = o))
            }), [e])
          }(D, R.visualElement, w), D, T, R.visualElement)))
        }));
        return y[T] = g, y
      }

      function M({
        layoutId: t
      }) {
        const e = (0, o.useContext)(S).id;
        return e && void 0 !== t ? e + "-" + t : t
      }

      function R(t) {
        function e(e, n = {}) {
          return A(t(e, n))
        }
        if ("undefined" == typeof Proxy) return e;
        const n = new Map;
        return new Proxy(e, {
          get: (t, o) => (n.has(o) || n.set(o, e(o)), n.get(o))
        })
      }
      const k = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

      function D(t) {
        return "string" == typeof t && !t.includes("-") && !!(k.indexOf(t) > -1 || /[A-Z]/.test(t))
      }
      const L = {};

      function B(t) {
        Object.assign(L, t)
      }
      const I = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
        O = new Set(I);

      function F(t, {
        layout: e,
        layoutId: n
      }) {
        return O.has(t) || t.startsWith("origin") || (e || void 0 !== n) && (!!L[t] || "opacity" === t)
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
      }, r, i) {
        let s = "";
        e.sort(N);
        for (const n of e) s += `${U[n]||n}(${t[n]}) `;
        return n && !t.z && (s += "translateZ(0)"), s = s.trim(), i ? s = i(t, r ? "" : s) : o && r && (s = "none"), s
      }

      function z(t) {
        return t.startsWith("--")
      }
      const Y = (t, e) => e && "number" == typeof t ? e.transform(t) : t,
        X = (t, e, n) => Math.min(Math.max(n, t), e),
        W = {
          test: t => "number" == typeof t,
          parse: parseFloat,
          transform: t => t
        },
        H = {
          ...W,
          transform: t => X(0, 1, t)
        },
        _ = {
          ...W,
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
          ...W,
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
          opacity: H,
          originX: it,
          originY: it,
          originZ: nt,
          zIndex: st,
          fillOpacity: H,
          strokeOpacity: H,
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
          if (z(t)) {
            i[t] = n;
            continue
          }
          const o = at[t],
            d = Y(n, o);
          if (O.has(t)) {
            if (u = !0, s[t] = d, a.push(t), !h) continue;
            n !== (o.default || 0) && (h = !1)
          } else t.startsWith("origin") ? (c = !0, l[t] = d) : r[t] = d
        }
        if (e.transform || (u || o ? r.transform = $(t, n, h, o) : r.transform && (r.transform = "none")), c) {
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

      function Pt(t, e, n, r) {
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

      function St(t = !1) {
        return (e, n, r, i, {
          latestValues: s
        }, a) => {
          const l = (D(e) ? Pt : ht)(n, s, a, e),
            u = {
              ...gt(n, "string" == typeof e, t),
              ...l,
              ref: i
            };
          return r && (u["data-projection-id"] = r), (0, o.createElement)(e, u)
        }
      }
      const Ct = t => t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();

      function Vt(t, {
        style: e,
        vars: n
      }, o, r) {
        Object.assign(t.style, e, r && r.getProjectionStyles(o));
        for (const e in n) t.style.setProperty(e, n[e])
      }
      const Tt = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

      function At(t, e, n, o) {
        Vt(t, e, void 0, o);
        for (const n in e.attrs) t.setAttribute(Tt.has(n) ? n : Ct(n), e.attrs[n])
      }

      function Mt(t) {
        const {
          style: e
        } = t, n = {};
        for (const o in e)(j(e[o]) || F(o, t)) && (n[o] = e[o]);
        return n
      }

      function Rt(t) {
        const e = Mt(t);
        for (const n in t) j(t[n]) && (e["x" === n || "y" === n ? "attr" + n.toUpperCase() : n] = t[n]);
        return e
      }

      function kt(t, e, n, o = {}, r = {}) {
        return "function" == typeof e && (e = e(void 0 !== n ? n : t.custom, o, r)), "string" == typeof e && (e = t.variants && t.variants[e]), "function" == typeof e && (e = e(void 0 !== n ? n : t.custom, o, r)), e
      }
      const Dt = t => Array.isArray(t),
        Lt = t => Boolean(t && "object" == typeof t && t.mix && t.toValue),
        Bt = t => Dt(t) ? t[t.length - 1] || 0 : t;

      function It(t) {
        const e = j(t) ? t.get() : t;
        return Lt(e) ? e.toValue() : e
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
            scrapeMotionValuesFromProps: Rt,
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
              }, Et(e.tagName), t.transformTemplate), At(e, n)
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
          ...D(t) ? jt : Ut,
          preloadedFeatures: n,
          useRender: St(e),
          createVisualElement: o,
          projectionNodeConstructor: r,
          Component: t
        }
      }
      var $t;

      function zt(t, e, n, o = {
        passive: !0
      }) {
        return t.addEventListener(e, n, o), () => t.removeEventListener(e, n)
      }

      function Yt(t, e, n, r) {
        (0, o.useEffect)((() => {
          const o = t.current;
          if (n && o) return zt(o, e, n, r)
        }), [t, e, n, r])
      }

      function Xt(t) {
        return "undefined" != typeof PointerEvent && t instanceof PointerEvent ? !("mouse" !== t.pointerType) : t instanceof MouseEvent
      }

      function Wt(t) {
        return !!t.touches
      }! function(t) {
        t.Animate = "animate", t.Hover = "whileHover", t.Tap = "whileTap", t.Drag = "whileDrag", t.Focus = "whileFocus", t.InView = "whileInView", t.Exit = "exit"
      }($t || ($t = {}));
      const Ht = {
        pageX: 0,
        pageY: 0
      };

      function _t(t, e = "page") {
        const n = t.touches[0] || t.changedTouches[0] || Ht;
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
          point: Wt(t) ? _t(t, e) : Gt(t, e)
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

      function re(t, e, n, o) {
        return Yt(t, ne(e), n && Zt(n, "pointerdown" === e), o)
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
          Xt(o) && !ue() && (t.animationState && t.animationState.setActive($t.Hover, e), n && n(o, r))
        }
      }
      const he = (t, e) => !!e && (t === e || he(t, e.parentElement));

      function de(t) {
        return (0, o.useEffect)((() => () => t()), [])
      }
      const pe = (t, e) => n => e(t(n)),
        fe = (...t) => t.reduce(pe);
      var me = n(44392);
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
      const Pe = {
        some: 0,
        all: 1
      };

      function Se(t, e, n, {
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
            threshold: "number" == typeof s ? s : Pe[s]
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
            o && (e.hasEnteredView = !0), n.animationState && n.animationState.setActive($t.InView, o);
            const r = n.getProps(),
              i = o ? r.onViewportEnter : r.onViewportLeave;
            i && i(t)
          }))
        }), [t, r, i, s])
      }

      function Ce(t, e, n, {
        fallback: r = !0
      }) {
        (0, o.useEffect)((() => {
          t && r && ("production" !== ge && ye(!1, "IntersectionObserver not available on this device. whileInView animations will trigger on mount."), requestAnimationFrame((() => {
            e.hasEnteredView = !0;
            const {
              onViewportEnter: t
            } = n.getProps();
            t && t(null), n.animationState && n.animationState.setActive($t.InView, !0)
          })))
        }), [t])
      }
      const Ve = t => e => (t(e), null),
        Te = {
          inView: Ve((function({
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
            i.once && s.current.hasEnteredView && (a = !1), ("undefined" == typeof IntersectionObserver ? Ce : Se)(a, s.current, t, i)
          })),
          tap: Ve((function({
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
              return c(), a.current = !1, i.animationState && i.animationState.setActive($t.Tap, !1), !ue()
            }

            function d(e, o) {
              h() && (he(i.current, e.target) ? t && t(e, o) : n && n(e, o))
            }

            function p(t, e) {
              h() && n && n(t, e)
            }

            function f(t, n) {
              c(), a.current || (a.current = !0, l.current = fe(oe(window, "pointerup", d, u), oe(window, "pointercancel", p, u)), i.animationState && i.animationState.setActive($t.Tap, !0), e && e(t, n))
            }
            re(i, "pointerdown", s ? f : void 0, u), de(c)
          })),
          focus: Ve((function({
            whileFocus: t,
            visualElement: e
          }) {
            const {
              animationState: n
            } = e;
            Yt(e, "focus", t ? () => {
              n && n.setActive($t.Focus, !0)
            } : void 0), Yt(e, "blur", t ? () => {
              n && n.setActive($t.Focus, !1)
            } : void 0)
          })),
          hover: Ve((function({
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

      function Ae() {
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

      function Re(t, e) {
        if (!Array.isArray(e)) return !1;
        const n = e.length;
        if (n !== t.length) return !1;
        for (let o = 0; o < n; o++)
          if (e[o] !== t[o]) return !1;
        return !0
      }
      const ke = t => /^\-?\d*\.?\d+$/.test(t),
        De = t => /^0[^.\s]+$/.test(t),
        Le = {
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
        $e = Ne.reduce(((t, e) => (t[e] = function(t) {
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
        ze = Ne.reduce(((t, e) => {
          const n = $e[e];
          return t[e] = (t, e = !1, o = !1) => (je || _e(), n.schedule(t, e, o)), t
        }), {}),
        Ye = Ne.reduce(((t, e) => (t[e] = $e[e].cancel, t)), {}),
        Xe = Ne.reduce(((t, e) => (t[e] = () => $e[e].process(Le), t)), {}),
        We = t => $e[t].process(Le),
        He = t => {
          je = !1, Le.delta = Fe ? Be : Math.max(Math.min(t - Le.timestamp, 40), 1), Le.timestamp = t, Ue = !0, Ne.forEach(We), Ue = !1, je && (Fe = !1, Oe(He))
        },
        _e = () => {
          je = !0, Fe = !0, Ue || Oe(He)
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
            } = Le;
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
          const [r, i, s, a] = o.match(q);
          return {
            [t]: parseFloat(r),
            [e]: parseFloat(i),
            [n]: parseFloat(s),
            alpha: void 0 !== a ? parseFloat(a) : 1
          }
        },
        nn = {
          ...W,
          transform: t => Math.round((t => X(0, 255, t))(t))
        },
        on = {
          test: tn("rgb", "red"),
          parse: en("red", "green", "blue"),
          transform: ({
            red: t,
            green: e,
            blue: n,
            alpha: o = 1
          }) => "rgba(" + nn.transform(t) + ", " + nn.transform(e) + ", " + nn.transform(n) + ", " + G(H.transform(o)) + ")"
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
          }) => "hsla(" + Math.round(t) + ", " + et.transform(G(e)) + ", " + et.transform(G(n)) + ", " + G(H.transform(o)) + ")"
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
        return i && (o = i.length, t = t.replace(q, un), e.push(...i.map(W.parse))), {
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
        Pn = [W, nt, et, tt, rt, ot, {
          test: t => "auto" === t,
          parse: t => t
        }],
        Sn = t => Pn.find(En(t)),
        Cn = [...Pn, an, fn],
        Vn = t => Cn.find(En(t));

      function Tn(t, e, n) {
        const o = t.getProps();
        return kt(o, e, void 0 !== n ? n : o.custom, function(t) {
          const e = {};
          return t.values.forEach(((t, n) => e[n] = t.get())), e
        }(t), function(t) {
          const e = {};
          return t.values.forEach(((t, n) => e[n] = t.getVelocity())), e
        }(t))
      }

      function An(t, e, n) {
        t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, Qe(n))
      }

      function Mn(t, e) {
        const n = Tn(t, e);
        let {
          transitionEnd: o = {},
          transition: r = {},
          ...i
        } = n ? t.makeTargetAnimatable(n, !1) : {};
        i = {
          ...i,
          ...o
        };
        for (const e in i) An(t, e, Bt(i[e]))
      }

      function Rn(t, e) {
        [...e].reverse().forEach((n => {
          var o;
          const r = t.getVariant(n);
          r && Mn(t, r), null === (o = t.variantChildren) || void 0 === o || o.forEach((t => {
            Rn(t, e)
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
            Array.isArray(l) && (u = l[0]), null === u && (u = null !== (r = null !== (o = n[s]) && void 0 !== o ? o : t.readValue(s)) && void 0 !== r ? r : e[s]), null != u && ("string" == typeof u && (ke(u) || De(u)) ? u = parseFloat(u) : !Vn(u) && fn.test(l) && (u = bn(s, l)), t.addValue(s, Qe(u, {
              owner: t
            })), void 0 === n[s] && (n[s] = u), null !== u && t.setBaseTarget(s, u))
          }
      }

      function Dn(t, e) {
        if (e) return (e[t] || e.default || e).from
      }

      function Ln(t, e, n) {
        var o;
        const r = {};
        for (const i in t) {
          const t = Dn(i, e);
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
        return r ? (ze.render((() => {
          try {
            r.cancel(), n.delete(o)
          } catch (t) {}
        })), r.currentTime || 0) : 0
      }
      const Fn = "framerAppearId",
        jn = "data-" + Ct(Fn);
      var Un = n(97064);
      const Nn = t => 1e3 * t,
        $n = {
          current: !1
        },
        zn = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
        Yn = t => e => 1 - t(1 - e),
        Xn = t => t * t,
        Wn = Yn(Xn),
        Hn = zn(Xn),
        _n = (t, e, n) => -n * t + n * e + t;

      function Gn(t, e, n) {
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
        (0, Un.O)(Boolean(e), `'${t}' is not an animatable color. Use the equivalent color code instead.`);
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
            r = Gn(a, o, t + 1 / 3), i = Gn(a, o, t), s = Gn(a, o, t - 1 / 3)
          } else r = i = s = n;
          return {
            red: Math.round(255 * r),
            green: Math.round(255 * i),
            blue: Math.round(255 * s),
            alpha: o
          }
        }(o)), o
      }
      const Jn = (t, e) => {
        const n = Kn(t),
          o = Kn(e),
          r = {
            ...n
          };
        return t => (r.red = qn(n.red, o.red, t), r.green = qn(n.green, o.green, t), r.blue = qn(n.blue, o.blue, t), r.alpha = _n(n.alpha, o.alpha, t), on.transform(r))
      };

      function Qn(t, e) {
        return "number" == typeof t ? n => _n(t, e, n) : an.test(t) ? Jn(t, e) : no(t, e)
      }
      const to = (t, e) => {
          const n = [...t],
            o = n.length,
            r = t.map(((t, n) => Qn(t, e[n])));
          return t => {
            for (let e = 0; e < o; e++) n[e] = r[e](t);
            return n
          }
        },
        eo = (t, e) => {
          const n = {
              ...t,
              ...e
            },
            o = {};
          for (const r in n) void 0 !== t[r] && void 0 !== e[r] && (o[r] = Qn(t[r], e[r]));
          return t => {
            for (const e in o) n[e] = o[e](t);
            return n
          }
        },
        no = (t, e) => {
          const n = fn.createTransformer(e),
            o = cn(t),
            r = cn(e);
          return o.numColors === r.numColors && o.numNumbers >= r.numNumbers ? fe(to(o.values, r.values), n) : ((0, Un.s)(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), n => `${n>0?e:t}`)
        },
        oo = (t, e, n) => {
          const o = e - t;
          return 0 === o ? 1 : (n - t) / o
        },
        ro = (t, e) => n => _n(t, e, n);

      function io(t, e, {
        clamp: n = !0,
        ease: o,
        mixer: r
      } = {}) {
        const i = t.length;
        (0, Un.O)(i === e.length, "Both input and output ranges must be the same length"), (0, Un.O)(!o || !Array.isArray(o) || o.length === i - 1, "Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."), t[0] > t[i - 1] && (t = [...t].reverse(), e = [...e].reverse());
        const s = function(t, e, n) {
            const o = [],
              r = n || ("number" == typeof(i = t[0]) ? ro : "string" == typeof i ? an.test(i) ? Jn : no : Array.isArray(i) ? to : "object" == typeof i ? eo : ro);
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
            const o = oo(t[n], t[n + 1], e);
            return s[n](o)
          };
        return n ? e => l(X(t[0], t[i - 1], e)) : l
      }
      const so = t => t,
        ao = (t, e, n) => (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t;

      function lo(t, e, n, o) {
        if (t === e && n === o) return so;
        return r => 0 === r || 1 === r ? r : ao(function(t, e, n, o, r) {
          let i, s, a = 0;
          do {
            s = e + (n - e) / 2, i = ao(s, o, r) - t, i > 0 ? n = s : e = s
          } while (Math.abs(i) > 1e-7 && ++a < 12);
          return s
        }(r, 0, 1, t, n), e, o)
      }
      const uo = t => 1 - Math.sin(Math.acos(t)),
        co = Yn(uo),
        ho = zn(co),
        po = lo(.33, 1.53, .69, .99),
        fo = Yn(po),
        mo = zn(fo),
        go = {
          linear: so,
          easeIn: Xn,
          easeInOut: Hn,
          easeOut: Wn,
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
            (0, Un.O)(4 === t.length, "Cubic bezier arrays must contain four numerical values.");
            const [e, n, o, r] = t;
            return lo(e, n, o, r)
          }
          return "string" == typeof t ? ((0, Un.O)(void 0 !== go[t], `Invalid easing type '${t}'`), go[t]) : t
        };

      function yo({
        keyframes: t,
        ease: e = Hn,
        times: n,
        duration: o = 300
      }) {
        t = [...t];
        const r = yo[0],
          i = (t => Array.isArray(t) && "number" != typeof t[0])(e) ? e.map(vo) : vo(e),
          s = {
            done: !1,
            value: r
          },
          a = function(t, e) {
            return t.map((t => t * e))
          }(n && n.length === yo.length ? n : function(t) {
            const e = t.length;
            return t.map(((t, n) => 0 !== n ? n / (e - 1) : 0))
          }(t), o);

        function l() {
          return io(a, t, {
            ease: Array.isArray(i) ? i : (e = t, n = i, e.map((() => n || Hn)).splice(0, e.length - 1))
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
        bo = 10,
        Eo = .05,
        Po = 1;
      const So = 12;

      function Co(t, e) {
        return t * Math.sqrt(1 - e * e)
      }
      const Vo = ["duration", "bounce"],
        To = ["stiffness", "damping", "mass"];

      function Ao(t, e) {
        return e.some((e => void 0 !== t[e]))
      }
      const Mo = 5;

      function Ro({
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
            if (!Ao(t, To) && Ao(t, Vo)) {
              const n = function({
                duration: t = 800,
                bounce: e = .25,
                velocity: n = 0,
                mass: o = 1
              }) {
                let r, i;
                (0, Un.s)(t <= 1e3 * bo, "Spring duration must be 10 seconds or less");
                let s = 1 - e;
                s = X(Eo, Po, s), t = X(wo, bo, t / 1e3), s < 1 ? (r = e => {
                  const o = e * s,
                    r = o * t,
                    i = o - n,
                    a = Co(e, s),
                    l = Math.exp(-r);
                  return xo - i / a * l
                }, i = e => {
                  const o = e * s * t,
                    i = o * n + n,
                    a = Math.pow(s, 2) * Math.pow(e, 2) * t,
                    l = Math.exp(-o),
                    u = Co(Math.pow(e, 2), s);
                  return (-r(e) + xo > 0 ? -1 : 1) * ((i - a) * l) / u
                }) : (r = e => Math.exp(-e * t) * ((e - n) * t + 1) - xo, i = e => Math.exp(-e * t) * (t * t * (n - e)));
                const a = function(t, e, n) {
                  let o = n;
                  for (let n = 1; n < So; n++) o -= t(o) / e(o);
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
        let p = ko,
          f = c ? -c / 1e3 : 0;
        const m = l / (2 * Math.sqrt(a * u));

        function g() {
          const t = i - r,
            e = Math.sqrt(a / u) / 1e3;
          if (void 0 === n && (n = Math.min(Math.abs(i - r) / 100, .4)), m < 1) {
            const n = Co(e, m);
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
                  const e = Math.max(0, t - Mo);
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
      Ro.needsInterpolation = (t, e) => "string" == typeof t || "string" == typeof e;
      const ko = t => 0,
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
          keyframes: yo,
          tween: yo,
          spring: Ro
        };

      function Lo(t, e, n = 0) {
        return t - e - n
      }
      const Bo = t => {
        const e = ({
          delta: e
        }) => t(e);
        return {
          start: () => ze.update(e, !0),
          stop: () => Ye.update(e)
        }
      };

      function Io({
        duration: t,
        driver: e = Bo,
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
          P = !0;
        const S = Do[s.length > 2 ? "keyframes" : p],
          C = s[0],
          V = s[s.length - 1];
        (null === (g = (m = S).needsInterpolation) || void 0 === g ? void 0 : g.call(m, C, V)) && (x = io([0, 100], [C, V], {
          clamp: !1
        }), s = [0, 100]);
        const T = S({
          ...f,
          duration: t,
          keyframes: s
        });
        return a && (l && l(), v = e((function(t) {
          if (P || (t = -t), n += t, !E) {
            const t = T.next(Math.max(0, n));
            y = t.value, x && (y = x(y)), E = P ? t.done : n <= 0
          }
          d && d(y), E && (0 === w && (b = void 0 !== b ? b : n), w < o ? function(t, e, n, o) {
            return o ? t >= e + n : t <= -n
          }(n, b, i, P) && (w++, "reverse" === r ? (P = w % 2 == 0, n = function(t, e = 0, n = 0, o = !0) {
            return o ? Lo(e + -t, e, n) : e - (t - e) + n
          }(n, b, i, P)) : (n = Lo(n, b, i), "mirror" === r && T.flipTarget()), E = !1, h && h()) : (v.stop(), c && c()))
        })), v.start()), {
          stop: () => {
            u && u(), v.stop()
          },
          sample: t => T.next(Math.max(0, t))
        }
      }
      const Oo = ([t, e, n, o]) => `cubic-bezier(${t}, ${e}, ${n}, ${o})`,
        Fo = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: Oo([0, .65, .55, 1]),
          circOut: Oo([.55, 0, 1, .45]),
          backIn: Oo([.31, .01, .66, -.59]),
          backOut: Oo([.33, 1.53, .69, .99])
        };

      function jo(t) {
        if (t) return Array.isArray(t) ? Oo(t) : Fo[t]
      }

      function Uo(t, e, n, {
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
          easing: jo(a),
          fill: "both",
          iterations: i + 1,
          direction: "reverse" === s ? "alternate" : "normal"
        })
      }

      function No(t, e) {
        const n = performance.now(),
          o = ({
            timestamp: r
          }) => {
            const i = r - n;
            i >= e && (Ye.read(o), t(i - e))
          };
        return ze.read(o, !0), () => Ye.read(o)
      }

      function $o({
        keyframes: t,
        elapsed: e,
        onUpdate: n,
        onComplete: o
      }) {
        const r = () => (n && n(t[t.length - 1]), o && o(), () => {});
        return e ? No(r, -e) : r()
      }
      const zo = () => ({
          type: "spring",
          stiffness: 500,
          damping: 25,
          restSpeed: 10
        }),
        Yo = t => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === t ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10
        }),
        Xo = () => ({
          type: "keyframes",
          ease: "linear",
          duration: .3
        }),
        Wo = {
          type: "keyframes",
          duration: .8
        },
        Ho = {
          x: zo,
          y: zo,
          z: zo,
          rotate: zo,
          rotateX: zo,
          rotateY: zo,
          rotateZ: zo,
          scaleX: Yo,
          scaleY: Yo,
          scale: Yo,
          opacity: Xo,
          backgroundColor: Xo,
          color: Xo,
          default: Yo
        },
        _o = (t, {
          keyframes: e
        }) => e.length > 2 ? Wo : (Ho[t] || Ho.default)(e[1]),
        Go = (t, e) => !("zIndex" === t || "number" != typeof e && !Array.isArray(e) && ("string" != typeof e || !fn.test(e) || e.startsWith("url(")));

      function qo(t) {
        return 0 === t || "string" == typeof t && 0 === parseFloat(t) && -1 === t.indexOf(" ")
      }

      function Zo(t) {
        return "number" == typeof t ? 0 : bn("", t)
      }

      function Ko(t, e) {
        return t[e] || t.default || t
      }
      const Jo = {
          waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate")
        },
        Qo = {},
        tr = {};
      for (const t in Jo) tr[t] = () => (void 0 === Qo[t] && (Qo[t] = Jo[t]()), Qo[t]);
      const er = new Set(["opacity"]),
        nr = (t, e, n, o = {}) => r => {
          const i = Ko(o, t) || {},
            s = i.delay || o.delay || 0;
          let {
            elapsed: a = 0
          } = o;
          a -= Nn(s);
          const l = function(t, e, n, o) {
              const r = Go(e, n);
              let i = void 0 !== o.from ? o.from : t.get();
              return "none" === i && r && "string" == typeof n ? i = bn(e, n) : qo(i) && "string" == typeof n ? i = Zo(n) : !Array.isArray(n) && qo(n) && "string" == typeof i && (n = Zo(i)), Array.isArray(n) ? (null === n[0] && (n[0] = i), n) : [i, n]
            }(e, t, n, i),
            u = l[0],
            c = l[l.length - 1],
            h = Go(t, u),
            d = Go(t, c);
          (0, Un.s)(h === d, `You are trying to animate ${t} from "${u}" to "${c}". ${u} is not an animatable value - to enable this animation set ${u} to a value animatable to ${c} via the \`style\` property.`);
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
                let t = r * e + f;
                void 0 !== u && (t = u(t));
                const o = v(t),
                  s = o === n ? -1 : 1;
                let a, c;
                const h = t => {
                  a = c, c = t, e = Ke(t - a, Le.delta), (1 === s && t > o || -1 === s && t < o) && x({
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
            ..._o(t, p)
          }), p.duration && (p.duration = Nn(p.duration)), p.repeatDelay && (p.repeatDelay = Nn(p.repeatDelay));
          const f = e.owner,
            m = f && f.current;
          if (tr.waapi() && er.has(t) && !p.repeatDelay && "mirror" !== p.repeatType && 0 !== p.damping && f && m instanceof HTMLElement && !f.getProps().onUpdate) return function(t, e, {
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
            if ("spring" === r.type || !(!(u = r.ease) || Array.isArray(u) || "string" == typeof u && Fo[u])) {
              const t = Io(r);
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
            const c = Uo(t.owner.current, e, i, {
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
                const n = Io(r);
                t.setWithVelocity(n.sample(e - 10).value, n.sample(e).value, 10)
              }
              ze.update((() => c.cancel()))
            }
          }(e, t, p); {
            const t = Io(p);
            return () => t.stop()
          }
        };

      function or(t, e, n = {}) {
        let o;
        if (t.notify("AnimationStart", e), Array.isArray(e)) {
          const r = e.map((e => rr(t, e, n)));
          o = Promise.all(r)
        } else if ("string" == typeof e) o = rr(t, e, n);
        else {
          const r = "function" == typeof e ? Tn(t, e, n.custom) : e;
          o = ir(t, r, n)
        }
        return o.then((() => t.notify("AnimationComplete", e)))
      }

      function rr(t, e, n = {}) {
        var o;
        const r = Tn(t, e, n.custom);
        let {
          transition: i = t.getDefaultTransition() || {}
        } = r || {};
        n.transitionOverride && (i = n.transitionOverride);
        const s = r ? () => ir(t, r, n) : () => Promise.resolve(),
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
              return Array.from(t.variantChildren).sort(sr).forEach(((t, o) => {
                s.push(rr(t, e, {
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

      function ir(t, e, {
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
          if (!o || void 0 === r || h && ar(h, e)) continue;
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
          let a = o.start(nr(e, o, r, i));
          Bn(u) && (u.add(e), a = a.then((() => u.remove(e)))), c.push(a)
        }
        return Promise.all(c).then((() => {
          a && Mn(t, a)
        }))
      }

      function sr(t, e) {
        return t.sortNodePosition(e)
      }

      function ar({
        protectedKeys: t,
        needsAnimating: e
      }, n) {
        const o = t.hasOwnProperty(n) && !0 !== e[n];
        return e[n] = !1, o
      }
      const lr = [$t.Animate, $t.InView, $t.Focus, $t.Hover, $t.Tap, $t.Drag, $t.Exit],
        ur = [...lr].reverse(),
        cr = lr.length;

      function hr(t = !1) {
        return {
          isActive: t,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {}
        }
      }
      const dr = {
          animation: Ve((({
            visualElement: t,
            animate: e
          }) => {
            t.animationState || (t.animationState = function(t) {
              let e = function(t) {
                return e => Promise.all(e.map((({
                  animation: e,
                  options: n
                }) => or(t, e, n))))
              }(t);
              const n = {
                [$t.Animate]: hr(!0),
                [$t.InView]: hr(),
                [$t.Hover]: hr(),
                [$t.Tap]: hr(),
                [$t.Drag]: hr(),
                [$t.Focus]: hr(),
                [$t.Exit]: hr()
              };
              let o = !0;
              const r = (e, n) => {
                const o = Tn(t, n);
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
                for (let e = 0; e < cr; e++) {
                  const v = ur[e],
                    y = n[v],
                    x = void 0 !== a[v] ? a[v] : l[v],
                    w = d(x),
                    b = v === s ? y.isActive : null;
                  !1 === b && (f = e);
                  let E = x === l[v] && x !== a[v] && w;
                  if (E && o && t.manuallyAnimateOnMount && (E = !1), y.protectedKeys = {
                      ...h
                    }, !y.isActive && null === b || !x && !y.prevProp || p(x) || "boolean" == typeof x) continue;
                  const P = (m = y.prevProp, "string" == typeof(g = x) ? g !== m : !!Array.isArray(g) && !Re(g, m));
                  let S = P || v === s && y.isActive && !E && w || e > f && w;
                  const C = Array.isArray(x) ? x : [x];
                  let V = C.reduce(r, {});
                  !1 === b && (V = {});
                  const {
                    prevResolvedValues: T = {}
                  } = y, A = {
                    ...T,
                    ...V
                  }, M = t => {
                    S = !0, c.delete(t), y.needsAnimating[t] = !0
                  };
                  for (const t in A) {
                    const e = V[t],
                      n = T[t];
                    h.hasOwnProperty(t) || (e !== n ? Dt(e) && Dt(n) ? !Re(e, n) || P ? M(t) : y.protectedKeys[t] = !0 : void 0 !== e ? M(t) : c.add(t) : void 0 !== e && c.has(t) ? M(t) : y.protectedKeys[t] = !0)
                  }
                  y.prevProp = x, y.prevResolvedValues = V, y.isActive && (h = {
                    ...h,
                    ...V
                  }), o && t.blockInitialAnimation && (S = !1), S && !E && u.push(...C.map((t => ({
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
          exit: Ve((t => {
            const {
              custom: e,
              visualElement: n
            } = t, [r, i] = Ae(), s = (0, o.useContext)(a);
            (0, o.useEffect)((() => {
              n.isPresent = r;
              const t = n.animationState && n.animationState.setActive($t.Exit, !r, {
                custom: s && s.custom || e
              });
              t && !r && t.then(i)
            }), [r])
          }))
        },
        pr = (t, e) => Math.abs(t - e);

      function fr(t, e) {
        const n = pr(t.x, e.x),
          o = pr(t.y, e.y);
        return Math.sqrt(n ** 2 + o ** 2)
      }
      class mr {
        constructor(t, e, {
          transformPagePoint: n
        } = {}) {
          if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = () => {
              if (!this.lastMoveEvent || !this.lastMoveEventInfo) return;
              const t = yr(this.lastMoveEventInfo, this.history),
                e = null !== this.startEvent,
                n = fr(t.offset, {
                  x: 0,
                  y: 0
                }) >= 3;
              if (!e && !n) return;
              const {
                point: o
              } = t, {
                timestamp: r
              } = Le;
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
              this.lastMoveEvent = t, this.lastMoveEventInfo = gr(e, this.transformPagePoint), Xt(t) && 0 === t.buttons ? this.handlePointerUp(t, e) : ze.update(this.updatePoint, !0)
            }, this.handlePointerUp = (t, e) => {
              this.end();
              const {
                onEnd: n,
                onSessionEnd: o
              } = this.handlers, r = yr(gr(e, this.transformPagePoint), this.history);
              this.startEvent && n && n(t, r), o && o(t, r)
            }, Wt(t) && t.touches.length > 1) return;
          this.handlers = e, this.transformPagePoint = n;
          const o = gr(qt(t), this.transformPagePoint),
            {
              point: r
            } = o,
            {
              timestamp: i
            } = Le;
          this.history = [{
            ...r,
            timestamp: i
          }];
          const {
            onSessionStart: s
          } = e;
          s && s(t, yr(o, this.history)), this.removeListeners = fe(oe(window, "pointermove", this.handlePointerMove), oe(window, "pointerup", this.handlePointerUp), oe(window, "pointercancel", this.handlePointerUp))
        }
        updateHandlers(t) {
          this.handlers = t
        }
        end() {
          this.removeListeners && this.removeListeners(), Ye.update(this.updatePoint)
        }
      }

      function gr(t, e) {
        return e ? {
          point: e(t.point)
        } : t
      }

      function vr(t, e) {
        return {
          x: t.x - e.x,
          y: t.y - e.y
        }
      }

      function yr({
        point: t
      }, e) {
        return {
          point: t,
          delta: vr(t, wr(e)),
          offset: vr(t, xr(e)),
          velocity: br(e, .1)
        }
      }

      function xr(t) {
        return t[0]
      }

      function wr(t) {
        return t[t.length - 1]
      }

      function br(t, e) {
        if (t.length < 2) return {
          x: 0,
          y: 0
        };
        let n = t.length - 1,
          o = null;
        const r = wr(t);
        for (; n >= 0 && (o = t[n], !(r.timestamp - o.timestamp > Nn(e)));) n--;
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

      function Er(t) {
        return t.max - t.min
      }

      function Pr(t, e = 0, n = .01) {
        return Math.abs(t - e) <= n
      }

      function Sr(t, e, n, o = .5) {
        t.origin = o, t.originPoint = _n(e.min, e.max, t.origin), t.scale = Er(n) / Er(e), (Pr(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1), t.translate = _n(n.min, n.max, t.origin) - t.originPoint, (Pr(t.translate) || isNaN(t.translate)) && (t.translate = 0)
      }

      function Cr(t, e, n, o) {
        Sr(t.x, e.x, n.x, null == o ? void 0 : o.originX), Sr(t.y, e.y, n.y, null == o ? void 0 : o.originY)
      }

      function Vr(t, e, n) {
        t.min = n.min + e.min, t.max = t.min + Er(e)
      }

      function Tr(t, e, n) {
        t.min = e.min - n.min, t.max = t.min + Er(e)
      }

      function Ar(t, e, n) {
        Tr(t.x, e.x, n.x), Tr(t.y, e.y, n.y)
      }

      function Mr(t, e, n) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== n ? t.max + n - (t.max - t.min) : void 0
        }
      }

      function Rr(t, e) {
        let n = e.min - t.min,
          o = e.max - t.max;
        return e.max - e.min < t.max - t.min && ([n, o] = [o, n]), {
          min: n,
          max: o
        }
      }
      const kr = .35;

      function Dr(t, e, n) {
        return {
          min: Lr(t, e),
          max: Lr(t, n)
        }
      }

      function Lr(t, e) {
        return "number" == typeof t ? t : t[e] || 0
      }
      const Br = () => ({
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
        Ir = () => ({
          x: {
            min: 0,
            max: 0
          },
          y: {
            min: 0,
            max: 0
          }
        });

      function Or(t) {
        return [t("x"), t("y")]
      }

      function Fr({
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

      function jr(t) {
        return void 0 === t || 1 === t
      }

      function Ur({
        scale: t,
        scaleX: e,
        scaleY: n
      }) {
        return !jr(t) || !jr(e) || !jr(n)
      }

      function Nr(t) {
        return Ur(t) || $r(t) || t.z || t.rotate || t.rotateX || t.rotateY
      }

      function $r(t) {
        return zr(t.x) || zr(t.y)
      }

      function zr(t) {
        return t && "0%" !== t
      }

      function Yr(t, e, n) {
        return n + e * (t - n)
      }

      function Xr(t, e, n, o, r) {
        return void 0 !== r && (t = Yr(t, r, o)), Yr(t, n, o) + e
      }

      function Wr(t, e = 0, n = 1, o, r) {
        t.min = Xr(t.min, e, n, o, r), t.max = Xr(t.max, e, n, o, r)
      }

      function Hr(t, {
        x: e,
        y: n
      }) {
        Wr(t.x, e.translate, e.scale, e.originPoint), Wr(t.y, n.translate, n.scale, n.originPoint)
      }

      function _r(t) {
        return Number.isInteger(t) || t > 1.0000000000001 || t < .999999999999 ? t : 1
      }

      function Gr(t, e) {
        t.min = t.min + e, t.max = t.max + e
      }

      function qr(t, e, [n, o, r]) {
        const i = void 0 !== e[r] ? e[r] : .5,
          s = _n(t.min, t.max, i);
        Wr(t, e[n], e[o], s, e.scale)
      }
      const Zr = ["x", "scaleX", "originX"],
        Kr = ["y", "scaleY", "originY"];

      function Jr(t, e) {
        qr(t.x, e, Zr), qr(t.y, e, Kr)
      }

      function Qr(t, e) {
        return Fr(function(t, e) {
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
      const ti = new WeakMap;
      class ei {
        constructor(t) {
          this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
            x: 0,
            y: 0
          }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = Ir(), this.visualElement = t
        }
        start(t, {
          snapToCursor: e = !1
        } = {}) {
          !1 !== this.visualElement.isPresent && (this.panSession = new mr(t, {
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
              (!o || r || (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = le(o), this.openGlobalLock)) && (this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Or((t => {
                var e, n;
                let o = this.getAxisMotionValue(t).get() || 0;
                if (et.test(o)) {
                  const r = null === (n = null === (e = this.visualElement.projection) || void 0 === e ? void 0 : e.layout) || void 0 === n ? void 0 : n.layoutBox[t];
                  r && (o = Er(r) * (parseFloat(o) / 100))
                }
                this.originPoint[t] = o
              })), null == i || i(t, e), null === (n = this.visualElement.animationState) || void 0 === n || n.setActive($t.Drag, !0))
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
          !n && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), null === (e = this.visualElement.animationState) || void 0 === e || e.setActive($t.Drag, !1)
        }
        updateAxis(t, e, n) {
          const {
            drag: o
          } = this.getProps();
          if (!n || !ni(t, o, this.currentDirection)) return;
          const r = this.getAxisMotionValue(t);
          let i = this.originPoint[t] + n[t];
          this.constraints && this.constraints[t] && (i = function(t, {
            min: e,
            max: n
          }, o) {
            return void 0 !== e && t < e ? t = o ? _n(e, t, o.min) : Math.max(t, e) : void 0 !== n && t > n && (t = o ? _n(n, t, o.max) : Math.min(t, n)), t
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
              x: Mr(t.x, n, r),
              y: Mr(t.y, e, o)
            }
          }(n.layoutBox, t), this.elastic = function(t = kr) {
            return !1 === t ? t = 0 : !0 === t && (t = kr), {
              x: Dr(t, "left", "right"),
              y: Dr(t, "top", "bottom")
            }
          }(e), o !== this.constraints && n && this.constraints && !this.hasMutatedConstraints && Or((t => {
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
          (0, Un.O)(null !== n, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
          const {
            projection: o
          } = this.visualElement;
          if (!o || !o.layout) return !1;
          const r = function(t, e, n) {
            const o = Qr(t, n),
              {
                scroll: r
              } = e;
            return r && (Gr(o.x, r.offset.x), Gr(o.y, r.offset.y)), o
          }(n, o.root, this.visualElement.getTransformPagePoint());
          let i = function(t, e) {
            return {
              x: Rr(t.x, e.x),
              y: Rr(t.y, e.y)
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
            this.hasMutatedConstraints = !!t, t && (i = Fr(t))
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
          } = this.getProps(), a = this.constraints || {}, l = Or((s => {
            if (!ni(s, e, this.currentDirection)) return;
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
          return n.start(nr(t, n, 0, e))
        }
        stopAnimation() {
          Or((t => this.getAxisMotionValue(t).stop()))
        }
        getAxisMotionValue(t) {
          var e;
          const n = "_drag" + t.toUpperCase();
          return this.visualElement.getProps()[n] || this.visualElement.getValue(t, (null === (e = this.visualElement.getProps().initial) || void 0 === e ? void 0 : e[t]) || 0)
        }
        snapToCursor(t) {
          Or((e => {
            const {
              drag: n
            } = this.getProps();
            if (!ni(e, n, this.currentDirection)) return;
            const {
              projection: o
            } = this.visualElement, r = this.getAxisMotionValue(e);
            if (o && o.layout) {
              const {
                min: n,
                max: i
              } = o.layout.layoutBox[e];
              r.set(t[e] - _n(n, i, .5))
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
          Or((t => {
            const e = this.getAxisMotionValue(t);
            if (e) {
              const n = e.get();
              r[t] = function(t, e) {
                let n = .5;
                const o = Er(t),
                  r = Er(e);
                return r > o ? n = oo(e.min, e.max - o, t.min) : o > r && (n = oo(t.min, t.max - r, e.min)), X(0, 1, n)
              }({
                min: n,
                max: n
              }, this.constraints[t])
            }
          }));
          const {
            transformTemplate: i
          } = this.visualElement.getProps();
          this.visualElement.current.style.transform = i ? i({}, "") : "none", null === (t = o.root) || void 0 === t || t.updateScroll(), o.updateLayout(), this.resolveConstraints(), Or((t => {
            if (!ni(t, e, null)) return;
            const n = this.getAxisMotionValue(t),
              {
                min: o,
                max: i
              } = this.constraints[t];
            n.set(_n(o, i, r[t]))
          }))
        }
        addListeners() {
          var t;
          if (!this.visualElement.current) return;
          ti.set(this.visualElement, this);
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
          const i = zt(window, "resize", (() => this.scalePositionWithinConstraints())),
            s = o.addEventListener("didUpdate", (({
              delta: t,
              hasLayoutChanged: e
            }) => {
              this.isDragging && e && (Or((e => {
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
              dragElastic: i = kr,
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

      function ni(t, e, n) {
        return !(!0 !== e && e !== t || null !== n && n !== t)
      }
      const oi = {
        pan: Ve((function({
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
            l.current = new mr(t, c, {
              transformPagePoint: u
            })
          }), de((() => l.current && l.current.end()))
        })),
        drag: Ve((function(t) {
          const {
            dragControls: e,
            visualElement: n
          } = t, r = b((() => new ei(n)));
          (0, o.useEffect)((() => e && e.subscribe(r)), [r, e]), (0, o.useEffect)((() => r.addListeners()), [r])
        }))
      };

      function ri(t) {
        return "string" == typeof t && t.startsWith("var(--")
      }
      const ii = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;

      function si(t, e, n = 1) {
        (0, Un.O)(n <= 4, `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`);
        const [o, r] = function(t) {
          const e = ii.exec(t);
          if (!e) return [, ];
          const [, n, o] = e;
          return [n, o]
        }(t);
        if (!o) return;
        const i = window.getComputedStyle(e).getPropertyValue(o);
        return i ? i.trim() : ri(r) ? si(r, e, n + 1) : r
      }
      const ai = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y"]),
        li = t => ai.has(t),
        ui = (t, e) => {
          t.set(e, !1), t.set(e)
        },
        ci = t => t === W || t === nt;
      var hi;
      ! function(t) {
        t.width = "width", t.height = "height", t.left = "left", t.right = "right", t.top = "top", t.bottom = "bottom"
      }(hi || (hi = {}));
      const di = (t, e) => parseFloat(t.split(", ")[e]),
        pi = (t, e) => (n, {
          transform: o
        }) => {
          if ("none" === o || !o) return 0;
          const r = o.match(/^matrix3d\((.+)\)$/);
          if (r) return di(r[1], e); {
            const e = o.match(/^matrix\((.+)\)$/);
            return e ? di(e[1], t) : 0
          }
        },
        fi = new Set(["x", "y", "z"]),
        mi = I.filter((t => !fi.has(t))),
        gi = {
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
          x: pi(4, 13),
          y: pi(5, 14)
        };

      function vi(t, e, n, o) {
        return (t => Object.keys(t).some(li))(e) ? ((t, e, n = {}, o = {}) => {
          e = {
            ...e
          }, o = {
            ...o
          };
          const r = Object.keys(e).filter(li);
          let i = [],
            s = !1;
          const a = [];
          if (r.forEach((r => {
              const l = t.getValue(r);
              if (!t.hasValue(r)) return;
              let u = n[r],
                c = Sn(u);
              const h = e[r];
              let d;
              if (Dt(h)) {
                const t = h.length,
                  e = null === h[0] ? 1 : 0;
                u = h[e], c = Sn(u);
                for (let n = e; n < t; n++) d ? (0, Un.O)(Sn(h[n]) === d, "All keyframes must be of the same type") : (d = Sn(h[n]), (0, Un.O)(d === c || ci(c) && ci(d), "Keyframes must be of the same dimension as the current value"))
              } else d = Sn(h);
              if (c !== d)
                if (ci(c) && ci(d)) {
                  const t = l.get();
                  "string" == typeof t && l.set(parseFloat(t)), "string" == typeof h ? e[r] = parseFloat(h) : Array.isArray(h) && d === nt && (e[r] = h.map(parseFloat))
                } else(null == c ? void 0 : c.transform) && (null == d ? void 0 : d.transform) && (0 === u || 0 === h) ? 0 === u ? l.set(d.transform(u)) : e[r] = c.transform(h) : (s || (i = function(t) {
                  const e = [];
                  return mi.forEach((n => {
                    const o = t.getValue(n);
                    void 0 !== o && (e.push([n, o.get()]), o.set(n.startsWith("scale") ? 1 : 0))
                  })), e.length && t.render(), e
                }(t), s = !0), a.push(r), o[r] = void 0 !== o[r] ? o[r] : e[r], ui(l, h))
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
                  a[t] = gi[t](o, i)
                })), e.render();
                const l = e.measureViewportBox();
                return n.forEach((n => {
                  const o = e.getValue(n);
                  ui(o, a[n]), t[n] = gi[n](l, i)
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
      const yi = {
          current: null
        },
        xi = {
          current: !1
        };

      function wi() {
        if (xi.current = !0, l)
          if (window.matchMedia) {
            const t = window.matchMedia("(prefers-reduced-motion)"),
              e = () => yi.current = t.matches;
            t.addListener(e), e()
          } else yi.current = !1
      }
      const bi = Object.keys(x),
        Ei = bi.length,
        Pi = ["AnimationStart", "AnimationComplete", "Update", "Unmount", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
      class Si {
        constructor({
          parent: t,
          props: e,
          reducedMotionConfig: n,
          visualState: o
        }, r = {}) {
          this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.isPresent = !0, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
            this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
          }, this.scheduleRender = () => ze.render(this.render, !1, !0);
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
          this.current = t, this.projection && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = null === (e = this.parent) || void 0 === e ? void 0 : e.addVariantChild(this)), this.values.forEach(((t, e) => this.bindToMotionValue(e, t))), xi.current || wi(), this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || yi.current), this.parent && this.parent.children.add(this), this.setProps(this.props)
        }
        unmount() {
          var t, e, n;
          null === (t = this.projection) || void 0 === t || t.unmount(), Ye.update(this.notifyUpdate), Ye.render(this.render), this.valueSubscriptions.forEach((t => t())), null === (e = this.removeFromVariantTree) || void 0 === e || e.call(this), null === (n = this.parent) || void 0 === n || n.children.delete(this);
          for (const t in this.events) this.events[t].clear();
          this.current = null
        }
        bindToMotionValue(t, e) {
          const n = O.has(t),
            o = e.on("change", (e => {
              this.latestValues[t] = e, this.props.onUpdate && ze.update(this.notifyUpdate, !1, !0), n && this.projection && (this.projection.isTransformDirty = !0)
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
          "production" !== ge && n && e && (0, Un.O)(!1, "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.");
          for (let e = 0; e < Ei; e++) {
            const n = bi[e],
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
          return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Ir()
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
            const e = Ci[t],
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
      const Ci = ["initial", ...lr],
        Vi = Ci.length;
      class Ti extends Si {
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
          let i = Ln(n, t || {}, this);
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
                  if (!ri(e)) return;
                  const n = si(e, o);
                  n && t.set(n)
                }));
                for (const t in e) {
                  const r = e[t];
                  if (!ri(r)) continue;
                  const i = si(r, o);
                  i && (e[t] = i, n && void 0 === n[t] && (n[t] = r))
                }
                return {
                  target: e,
                  transitionEnd: n
                }
              }(t, e, o);
              return vi(t, e = r.target, n, o = r.transitionEnd)
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
      class Ai extends Ti {
        readValueFromInstance(t, e) {
          if (O.has(e)) {
            const t = wn(e);
            return t && t.default || 0
          } {
            const o = (n = t, window.getComputedStyle(n)),
              r = (z(e) ? o.getPropertyValue(e) : o[e]) || 0;
            return "string" == typeof r ? r.trim() : r
          }
          var n
        }
        measureInstanceViewportBox(t, {
          transformPagePoint: e
        }) {
          return Qr(t, e)
        }
        build(t, e, n, o) {
          lt(t, e, n, o.transformTemplate)
        }
        scrapeMotionValuesFromProps(t) {
          return Mt(t)
        }
        renderInstance(t, e, n, o) {
          Vt(t, e, n, o)
        }
      }
      class Mi extends Ti {
        constructor() {
          super(...arguments), this.isSVGTag = !1
        }
        getBaseTargetFromProps(t, e) {
          return t[e]
        }
        readValueFromInstance(t, e) {
          var n;
          return O.has(e) ? (null === (n = wn(e)) || void 0 === n ? void 0 : n.default) || 0 : (e = Tt.has(e) ? e : Ct(e), t.getAttribute(e))
        }
        measureInstanceViewportBox() {
          return Ir()
        }
        scrapeMotionValuesFromProps(t) {
          return Rt(t)
        }
        build(t, e, n, o) {
          wt(t, e, n, this.isSVGTag, o.transformTemplate)
        }
        renderInstance(t, e, n, o) {
          At(t, e, 0, o)
        }
        mount(t) {
          this.isSVGTag = Et(t.tagName), super.mount(t)
        }
      }
      const Ri = (t, e) => D(t) ? new Mi(e, {
        enableHardwareAcceleration: !1
      }) : new Ai(e, {
        enableHardwareAcceleration: !0
      });

      function ki(t, e) {
        return e.max === e.min ? 0 : t / (e.max - e.min) * 100
      }
      const Di = {
          correct: (t, e) => {
            if (!e.target) return t;
            if ("string" == typeof t) {
              if (!nt.test(t)) return t;
              t = parseFloat(t)
            }
            return `${ki(t,e.target.x)}% ${ki(t,e.target.y)}%`
          }
        },
        Li = "_$css",
        Bi = {
          correct: (t, {
            treeScale: e,
            projectionDelta: n
          }) => {
            const o = t,
              r = t.includes("var("),
              i = [];
            r && (t = t.replace(ii, (t => (i.push(t), Li))));
            const s = fn.parse(t);
            if (s.length > 5) return o;
            const a = fn.createTransformer(t),
              l = "number" != typeof s[0] ? 1 : 0,
              u = n.x.scale * e.x,
              c = n.y.scale * e.y;
            s[0 + l] /= u, s[1 + l] /= c;
            const h = _n(u, c, .5);
            "number" == typeof s[2 + l] && (s[2 + l] /= h), "number" == typeof s[3 + l] && (s[3 + l] /= h);
            let d = a(s);
            if (r) {
              let t = 0;
              d = d.replace(Li, (() => {
                const e = i[t];
                return t++, e
              }))
            }
            return d
          }
        };
      class Ii extends o.Component {
        componentDidMount() {
          const {
            visualElement: t,
            layoutGroup: e,
            switchLayoutGroup: n,
            layoutId: o
          } = this.props, {
            projection: r
          } = t;
          B(Oi), r && (e.group && e.group.add(r), n && n.register && o && n.register(r), r.root.didUpdate(), r.addEventListener("animationComplete", (() => {
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
          return i ? (i.isPresent = r, o || t.layoutDependency !== e || void 0 === e ? i.willUpdate() : this.safeToRemove(), t.isPresent !== r && (r ? i.promote() : i.relegate() || ze.postRender((() => {
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
      const Oi = {
          borderRadius: {
            ...Di,
            applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
          },
          borderTopLeftRadius: Di,
          borderTopRightRadius: Di,
          borderBottomLeftRadius: Di,
          borderBottomRightRadius: Di,
          boxShadow: Bi
        },
        Fi = {
          measureLayout: function(t) {
            const [e, n] = Ae(), r = (0, o.useContext)(S);
            return o.createElement(Ii, {
              ...t,
              layoutGroup: r,
              switchLayoutGroup: (0, o.useContext)(V),
              isPresent: e,
              safeToRemove: n
            })
          }
        };

      function ji(t, e, n = {}) {
        const o = j(t) ? t : Qe(t);
        return o.start(nr("", o, e, n)), {
          stop: () => o.stop(),
          isAnimating: () => o.isAnimating()
        }
      }
      const Ui = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        Ni = Ui.length,
        $i = t => "string" == typeof t ? parseFloat(t) : t,
        zi = t => "number" == typeof t || nt.test(t);

      function Yi(t, e) {
        return void 0 !== t[e] ? t[e] : t.borderRadius
      }
      const Xi = Hi(0, .5, co),
        Wi = Hi(.5, .95, so);

      function Hi(t, e, n) {
        return o => o < t ? 0 : o > e ? 1 : n(oo(t, e, o))
      }

      function _i(t, e) {
        t.min = e.min, t.max = e.max
      }

      function Gi(t, e) {
        _i(t.x, e.x), _i(t.y, e.y)
      }

      function qi(t, e, n, o, r) {
        return t = Yr(t -= e, 1 / n, o), void 0 !== r && (t = Yr(t, 1 / r, o)), t
      }

      function Zi(t, e, [n, o, r], i, s) {
        ! function(t, e = 0, n = 1, o = .5, r, i = t, s = t) {
          if (et.test(e) && (e = parseFloat(e), e = _n(s.min, s.max, e / 100) - s.min), "number" != typeof e) return;
          let a = _n(i.min, i.max, o);
          t === i && (a -= e), t.min = qi(t.min, e, n, a, r), t.max = qi(t.max, e, n, a, r)
        }(t, e[n], e[o], e[r], e.scale, i, s)
      }
      const Ki = ["x", "scaleX", "originX"],
        Ji = ["y", "scaleY", "originY"];

      function Qi(t, e, n, o) {
        Zi(t.x, e, Ki, null == n ? void 0 : n.x, null == o ? void 0 : o.x), Zi(t.y, e, Ji, null == n ? void 0 : n.y, null == o ? void 0 : o.y)
      }

      function ts(t) {
        return 0 === t.translate && 1 === t.scale
      }

      function es(t) {
        return ts(t.x) && ts(t.y)
      }

      function ns(t, e) {
        return t.x.min === e.x.min && t.x.max === e.x.max && t.y.min === e.y.min && t.y.max === e.y.max
      }

      function os(t) {
        return Er(t.x) / Er(t.y)
      }
      class rs {
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

      function is(t, e, n) {
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
      const ss = (t, e) => t.depth - e.depth;
      class as {
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
          this.isDirty && this.children.sort(ss), this.isDirty = !1, this.children.forEach(t)
        }
      }
      const ls = ["", "X", "Y", "Z"];
      let us = 0;

      function cs({
        attachResizeListener: t,
        defaultParent: e,
        measureScroll: n,
        checkIsScrollRoot: o,
        resetTransform: r
      }) {
        return class {
          constructor(t, n = {}, o = (null == e ? void 0 : e())) {
            this.id = us++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isTransformDirty = !1, this.isProjectionDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = {
              x: 1,
              y: 1
            }, this.eventHandlers = new Map, this.potentialNodes = new Map, this.checkUpdateFailed = () => {
              this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
            }, this.updateProjection = () => {
              this.nodes.forEach(ps), this.nodes.forEach(ys), this.nodes.forEach(xs)
            }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.elementId = t, this.latestValues = n, this.root = o ? o.root || o : this, this.path = o ? [...o.path, o] : [], this.parent = o, this.depth = o ? o.depth + 1 : 0, t && this.root.registerPotentialNode(t, this);
            for (let t = 0; t < this.path.length; t++) this.path[t].shouldResetTransform = !0;
            this.root === this && (this.nodes = new as)
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
                this.root.updateBlockedByResize = !0, n && n(), n = No(o, 250), E.hasAnimatedSinceResize && (E.hasAnimatedSinceResize = !1, this.nodes.forEach(vs))
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
              const c = null !== (i = null !== (r = this.options.transition) && void 0 !== r ? r : s.getDefaultTransition()) && void 0 !== i ? i : Cs,
                {
                  onLayoutAnimationStart: h,
                  onLayoutAnimationComplete: d
                } = s.getProps(),
                p = !this.targetLayout || !ns(this.targetLayout, o) || n,
                f = !e && n;
              if ((null === (a = this.resumeFrom) || void 0 === a ? void 0 : a.instance) || f || e && (p || !this.currentAnimation)) {
                this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(t, f);
                const e = {
                  ...Ko(c, "layout"),
                  onPlay: h,
                  onComplete: d
                };
                s.shouldReduceMotion && (e.delay = 0, e.type = !1), this.startAnimation(e)
              } else e || 0 !== this.animationProgress || vs(this), this.isLead() && (null === (u = (l = this.options).onExitComplete) || void 0 === u || u.call(l));
              this.targetLayout = o
            }))
          }
          unmount() {
            var t, e;
            this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this), null === (t = this.getStack()) || void 0 === t || t.remove(this), null === (e = this.parent) || void 0 === e || e.children.delete(this), this.instance = void 0, Ye.preRender(this.updateProjection)
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
            this.isUpdateBlocked() || (this.isUpdating = !0, null === (t = this.nodes) || void 0 === t || t.forEach(ws), this.animationId++)
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
            if (this.isUpdateBlocked()) return this.unblockUpdate(), this.clearAllSnapshots(), void this.nodes.forEach(ms);
            this.isUpdating && (this.isUpdating = !1, this.potentialNodes.size && (this.potentialNodes.forEach(Vs), this.potentialNodes.clear()), this.nodes.forEach(gs), this.nodes.forEach(hs), this.nodes.forEach(ds), this.clearAllSnapshots(), Xe.update(), Xe.preRender(), Xe.render())
          }
          clearAllSnapshots() {
            this.nodes.forEach(fs), this.sharedNodes.forEach(bs)
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
            this.layout = this.measure(!1), this.layoutCorrected = Ir(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox), null === (t = this.options.visualElement) || void 0 === t || t.notify("LayoutMeasure", this.layout.layoutBox, null == e ? void 0 : e.layoutBox)
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
              n = this.projectionDelta && !es(this.projectionDelta),
              o = null === (t = this.options.visualElement) || void 0 === t ? void 0 : t.getProps().transformTemplate,
              i = null == o ? void 0 : o(this.latestValues, ""),
              s = i !== this.prevTransformTemplateValue;
            e && (n || Nr(this.latestValues) || s) && (r(this.instance, i), this.shouldResetTransform = !1, this.scheduleRender())
          }
          measure(t = !0) {
            const e = this.measurePageBox();
            let n = this.removeElementScroll(e);
            var o;
            return t && (n = this.removeTransform(n)), Ts((o = n).x), Ts(o.y), {
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
            if (!t) return Ir();
            const e = t.measureViewportBox(),
              {
                scroll: n
              } = this.root;
            return n && (Gr(e.x, n.offset.x), Gr(e.y, n.offset.y)), e
          }
          removeElementScroll(t) {
            const e = Ir();
            Gi(e, t);
            for (let n = 0; n < this.path.length; n++) {
              const o = this.path[n],
                {
                  scroll: r,
                  options: i
                } = o;
              if (o !== this.root && r && i.layoutScroll) {
                if (r.isRoot) {
                  Gi(e, t);
                  const {
                    scroll: n
                  } = this.root;
                  n && (Gr(e.x, -n.offset.x), Gr(e.y, -n.offset.y))
                }
                Gr(e.x, r.offset.x), Gr(e.y, r.offset.y)
              }
            }
            return e
          }
          applyTransform(t, e = !1) {
            const n = Ir();
            Gi(n, t);
            for (let t = 0; t < this.path.length; t++) {
              const o = this.path[t];
              !e && o.options.layoutScroll && o.scroll && o !== o.root && Jr(n, {
                x: -o.scroll.offset.x,
                y: -o.scroll.offset.y
              }), Nr(o.latestValues) && Jr(n, o.latestValues)
            }
            return Nr(this.latestValues) && Jr(n, this.latestValues), n
          }
          removeTransform(t) {
            var e;
            const n = Ir();
            Gi(n, t);
            for (let t = 0; t < this.path.length; t++) {
              const o = this.path[t];
              if (!o.instance) continue;
              if (!Nr(o.latestValues)) continue;
              Ur(o.latestValues) && o.updateSnapshot();
              const r = Ir();
              Gi(r, o.measurePageBox()), Qi(n, o.latestValues, null === (e = o.snapshot) || void 0 === e ? void 0 : e.layoutBox, r)
            }
            return Nr(this.latestValues) && Qi(n, this.latestValues), n
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
                t && t.layout ? (this.relativeParent = t, this.relativeTarget = Ir(), this.relativeTargetOrigin = Ir(), Ar(this.relativeTargetOrigin, this.layout.layoutBox, t.layout.layoutBox), Gi(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
              }
              var r, i, s;
              if ((this.relativeTarget || this.targetDelta) && (this.target || (this.target = Ir(), this.targetWithTransforms = Ir()), this.relativeTarget && this.relativeTargetOrigin && (null === (t = this.relativeParent) || void 0 === t ? void 0 : t.target) ? (r = this.target, i = this.relativeTarget, s = this.relativeParent.target, Vr(r.x, i.x, s.x), Vr(r.y, i.y, s.y)) : this.targetDelta ? (Boolean(this.resumingFrom) ? this.target = this.applyTransform(this.layout.layoutBox) : Gi(this.target, this.layout.layoutBox), Hr(this.target, this.targetDelta)) : Gi(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget)) {
                this.attemptToResolveRelativeTarget = !1;
                const t = this.getClosestProjectingParent();
                t && Boolean(t.resumingFrom) === Boolean(this.resumingFrom) && !t.options.layoutScroll && t.target ? (this.relativeParent = t, this.relativeTarget = Ir(), this.relativeTargetOrigin = Ir(), Ar(this.relativeTargetOrigin, this.target, t.target), Gi(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
              }
            }
          }
          getClosestProjectingParent() {
            if (this.parent && !Ur(this.parent.latestValues) && !$r(this.parent.latestValues)) return (this.parent.relativeTarget || this.parent.targetDelta) && this.parent.layout ? this.parent : this.parent.getClosestProjectingParent()
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
            Gi(this.layoutCorrected, this.layout.layoutBox),
              function(t, e, n, o = !1) {
                var r, i;
                const s = n.length;
                if (!s) return;
                let a, l;
                e.x = e.y = 1;
                for (let u = 0; u < s; u++) a = n[u], l = a.projectionDelta, "contents" !== (null === (i = null === (r = a.instance) || void 0 === r ? void 0 : r.style) || void 0 === i ? void 0 : i.display) && (o && a.options.layoutScroll && a.scroll && a !== a.root && Jr(t, {
                  x: -a.scroll.offset.x,
                  y: -a.scroll.offset.y
                }), l && (e.x *= l.x.scale, e.y *= l.y.scale, Hr(t, l)), o && Nr(a.latestValues) && Jr(t, a.latestValues));
                e.x = _r(e.x), e.y = _r(e.y)
              }(this.layoutCorrected, this.treeScale, this.path, r);
            const {
              target: l
            } = o;
            if (!l) return;
            this.projectionDelta || (this.projectionDelta = Br(), this.projectionDeltaWithTransform = Br());
            const u = this.treeScale.x,
              c = this.treeScale.y,
              h = this.projectionTransform;
            Cr(this.projectionDelta, this.layoutCorrected, l, this.latestValues), this.projectionTransform = is(this.projectionDelta, this.treeScale), this.projectionTransform === h && this.treeScale.x === u && this.treeScale.y === c || (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", l))
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
              a = Br();
            this.relativeTarget = this.relativeTargetOrigin = void 0, this.attemptToResolveRelativeTarget = !e;
            const l = Ir(),
              u = (null == r ? void 0 : r.source) !== (null === (n = this.layout) || void 0 === n ? void 0 : n.source),
              c = ((null === (o = this.getStack()) || void 0 === o ? void 0 : o.members.length) || 0) <= 1,
              h = Boolean(u && !c && !0 === this.options.crossfade && !this.path.some(Ss));
            this.animationProgress = 0, this.mixTargetDelta = e => {
              var n;
              const o = e / 1e3;
              var r, d, p, f;
              Es(a.x, t.x, o), Es(a.y, t.y, o), this.setTargetDelta(a), this.relativeTarget && this.relativeTargetOrigin && this.layout && (null === (n = this.relativeParent) || void 0 === n ? void 0 : n.layout) && (Ar(l, this.layout.layoutBox, this.relativeParent.layout.layoutBox), r = this.relativeTarget, d = this.relativeTargetOrigin, p = l, f = o, Ps(r.x, d.x, p.x, f), Ps(r.y, d.y, p.y, f)), u && (this.animationValues = s, function(t, e, n, o, r, i) {
                r ? (t.opacity = _n(0, void 0 !== n.opacity ? n.opacity : 1, Xi(o)), t.opacityExit = _n(void 0 !== e.opacity ? e.opacity : 1, 0, Wi(o))) : i && (t.opacity = _n(void 0 !== e.opacity ? e.opacity : 1, void 0 !== n.opacity ? n.opacity : 1, o));
                for (let r = 0; r < Ni; r++) {
                  const i = `border${Ui[r]}Radius`;
                  let s = Yi(e, i),
                    a = Yi(n, i);
                  void 0 === s && void 0 === a || (s || (s = 0), a || (a = 0), 0 === s || 0 === a || zi(s) === zi(a) ? (t[i] = Math.max(_n($i(s), $i(a), o), 0), (et.test(a) || et.test(s)) && (t[i] += "%")) : t[i] = a)
                }(e.rotate || n.rotate) && (t.rotate = _n(e.rotate || 0, n.rotate || 0, o))
              }(s, i, this.latestValues, o, h, c)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = o
            }, this.mixTargetDelta(0)
          }
          startAnimation(t) {
            var e, n;
            this.notifyListeners("animationStart"), null === (e = this.currentAnimation) || void 0 === e || e.stop(), this.resumingFrom && (null === (n = this.resumingFrom.currentAnimation) || void 0 === n || n.stop()), this.pendingAnimation && (Ye.update(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = ze.update((() => {
              E.hasAnimatedSinceResize = !0, this.currentAnimation = ji(0, 1e3, {
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
              if (this !== t && this.layout && o && As(this.options.animationType, this.layout.layoutBox, o.layoutBox)) {
                n = this.target || Ir();
                const e = Er(this.layout.layoutBox.x);
                n.x.min = t.target.x.min, n.x.max = n.x.min + e;
                const o = Er(this.layout.layoutBox.y);
                n.y.min = t.target.y.min, n.y.max = n.y.min + o
              }
              Gi(e, n), Jr(e, r), Cr(this.projectionDeltaWithTransform, this.layoutCorrected, e, r)
            }
          }
          registerSharedNode(t, e) {
            var n, o, r;
            this.sharedNodes.has(t) || this.sharedNodes.set(t, new rs), this.sharedNodes.get(t).add(e), e.promote({
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
            for (let e = 0; e < ls.length; e++) {
              const r = "rotate" + ls[e];
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
              return this.options.layoutId && (e.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1, e.pointerEvents = It(t.pointerEvents) || ""), this.hasProjected && !Nr(this.latestValues) && (e.transform = i ? i({}, "") : "none", this.hasProjected = !1), e
            }
            const a = s.animationValues || s.latestValues;
            this.applyTransformsToTarget(), r.transform = is(this.projectionDeltaWithTransform, this.treeScale, a), i && (r.transform = i(a, r.transform));
            const {
              x: l,
              y: u
            } = this.projectionDelta;
            r.transformOrigin = `${100*l.origin}% ${100*u.origin}% 0`, s.animationValues ? r.opacity = s === this ? null !== (o = null !== (n = a.opacity) && void 0 !== n ? n : this.latestValues.opacity) && void 0 !== o ? o : 1 : this.preserveOpacity ? this.latestValues.opacity : a.opacityExit : r.opacity = s === this ? void 0 !== a.opacity ? a.opacity : "" : void 0 !== a.opacityExit ? a.opacityExit : 0;
            for (const t in L) {
              if (void 0 === a[t]) continue;
              const {
                correct: e,
                applyTo: n
              } = L[t], o = e(a[t], s);
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
            })), this.root.nodes.forEach(ms), this.root.sharedNodes.clear()
          }
        }
      }

      function hs(t) {
        t.updateLayout()
      }

      function ds(t) {
        var e, n, o;
        const r = (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) || t.snapshot;
        if (t.isLead() && t.layout && r && t.hasListeners("didUpdate")) {
          const {
            layoutBox: e,
            measuredBox: n
          } = t.layout, {
            animationType: o
          } = t.options, i = r.source !== t.layout.source;
          "size" === o ? Or((t => {
            const n = i ? r.measuredBox[t] : r.layoutBox[t],
              o = Er(n);
            n.min = e[t].min, n.max = n.min + o
          })) : As(o, r.layoutBox, e) && Or((t => {
            const n = i ? r.measuredBox[t] : r.layoutBox[t],
              o = Er(e[t]);
            n.max = n.min + o
          }));
          const s = Br();
          Cr(s, e, r.layoutBox);
          const a = Br();
          i ? Cr(a, t.applyTransform(n, !0), r.measuredBox) : Cr(a, e, r.layoutBox);
          const l = !es(s);
          let u = !1;
          if (!t.resumeFrom) {
            const n = t.getClosestProjectingParent();
            if (n && !n.resumeFrom) {
              const {
                snapshot: t,
                layout: o
              } = n;
              if (t && o) {
                const n = Ir();
                Ar(n, r.layoutBox, t.layoutBox);
                const i = Ir();
                Ar(i, e, o.layoutBox), ns(n, i) || (u = !0)
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

      function ps(t) {
        t.isProjectionDirty || (t.isProjectionDirty = Boolean(t.parent && t.parent.isProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = Boolean(t.parent && t.parent.isTransformDirty))
      }

      function fs(t) {
        t.clearSnapshot()
      }

      function ms(t) {
        t.clearMeasurements()
      }

      function gs(t) {
        const {
          visualElement: e
        } = t.options;
        (null == e ? void 0 : e.getProps().onBeforeLayoutMeasure) && e.notify("BeforeLayoutMeasure"), t.resetTransform()
      }

      function vs(t) {
        t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0
      }

      function ys(t) {
        t.resolveTargetDelta()
      }

      function xs(t) {
        t.calcProjection()
      }

      function ws(t) {
        t.resetRotation()
      }

      function bs(t) {
        t.removeLeadSnapshot()
      }

      function Es(t, e, n) {
        t.translate = _n(e.translate, 0, n), t.scale = _n(e.scale, 1, n), t.origin = e.origin, t.originPoint = e.originPoint
      }

      function Ps(t, e, n, o) {
        t.min = _n(e.min, n.min, o), t.max = _n(e.max, n.max, o)
      }

      function Ss(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit
      }
      const Cs = {
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

      function Ts(t) {
        t.min = Math.round(t.min), t.max = Math.round(t.max)
      }

      function As(t, e, n) {
        return "position" === t || "preserve-aspect" === t && !Pr(os(e), os(n), .2)
      }
      const Ms = cs({
          attachResizeListener: (t, e) => zt(t, "resize", e),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop
          }),
          checkIsScrollRoot: () => !0
        }),
        Rs = {
          current: void 0
        },
        ks = cs({
          measureScroll: t => ({
            x: t.scrollLeft,
            y: t.scrollTop
          }),
          defaultParent: () => {
            if (!Rs.current) {
              const t = new Ms(0, {});
              t.mount(window), t.setOptions({
                layoutScroll: !0
              }), Rs.current = t
            }
            return Rs.current
          },
          resetTransform: (t, e) => {
            t.style.transform = void 0 !== e ? e : "none"
          },
          checkIsScrollRoot: t => Boolean("fixed" === window.getComputedStyle(t).position)
        }),
        Ds = {
          ...dr,
          ...Te,
          ...oi,
          ...Fi
        },
        Ls = R(((t, e) => Nt(t, e, Ds, Ri, ks)));

      function Bs(t) {
        return A(Nt(t, {
          forwardMotionProps: !1
        }, Ds, Ri, ks))
      }
      const Is = R(Nt);

      function Os() {
        const t = (0, o.useRef)(!1);
        return u((() => (t.current = !0, () => {
          t.current = !1
        })), []), t
      }

      function Fs() {
        const t = Os(),
          [e, n] = (0, o.useState)(0),
          r = (0, o.useCallback)((() => {
            t.current && n(e + 1)
          }), [e]);
        return [(0, o.useCallback)((() => ze.postRender(r)), [r]), e]
      }
      class js extends o.Component {
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

      function Us({
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
        }), [e]), o.createElement(js, {
          isPresent: e,
          childRef: r,
          sizeRef: i
        }, o.cloneElement(t, {
          ref: r
        }))
      }
      const Ns = ({
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
        }), [n]), "popLayout" === l && (t = o.createElement(Us, {
          isPresent: n
        }, t)), o.createElement(a.Provider, {
          value: h
        }, t)
      };

      function $s() {
        return new Map
      }
      const zs = t => t.key || "",
        Ys = ({
          children: t,
          custom: e,
          initial: n = !0,
          onExitComplete: r,
          exitBeforeEnter: i,
          presenceAffectsLayout: s = !0,
          mode: a = "sync"
        }) => {
          i && (a = "wait", ye(!1, "Replace exitBeforeEnter with mode='wait'"));
          let [l] = Fs();
          const c = (0, o.useContext)(S).forceRender;
          c && (l = c);
          const h = Os(),
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
                    const n = zs(t);
                    e.set(n, t)
                  }))
                }(d, g), m.current = p
            })), de((() => {
              v.current = !0, g.clear(), f.clear()
            })), v.current) return o.createElement(o.Fragment, null, p.map((t => o.createElement(Ns, {
            key: zs(t),
            isPresent: !0,
            initial: !!n && void 0,
            presenceAffectsLayout: s,
            mode: a
          }, t))));
          p = [...p];
          const y = m.current.map(zs),
            x = d.map(zs),
            w = y.length;
          for (let t = 0; t < w; t++) {
            const e = y[t]; - 1 === x.indexOf(e) && f.add(e)
          }
          return "wait" === a && f.size && (p = []), f.forEach((t => {
            if (-1 !== x.indexOf(t)) return;
            const n = g.get(t);
            if (!n) return;
            const i = y.indexOf(t);
            p.splice(i, 0, o.createElement(Ns, {
              key: zs(n),
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
            return f.has(e) ? t : o.createElement(Ns, {
              key: zs(t),
              isPresent: !0,
              presenceAffectsLayout: s,
              mode: a
            }, t)
          })), "production" !== ge && "wait" === a && p.length > 1 && console.warn('You\'re attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.'), o.createElement(o.Fragment, null, f.size ? p : p.map((t => (0, o.cloneElement)(t))))
        },
        Xs = (0, o.createContext)(null),
        Ws = t => !t.isLayoutDirty && t.willUpdate(!1);

      function Hs() {
        const t = new Set,
          e = new WeakMap,
          n = () => t.forEach(Ws);
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
      const _s = t => !0 === t,
        Gs = ({
          children: t,
          id: e,
          inheritId: n,
          inherit: r = !0
        }) => {
          void 0 !== n && (r = n);
          const i = (0, o.useContext)(S),
            s = (0, o.useContext)(Xs),
            [a, l] = Fs(),
            u = (0, o.useRef)(null),
            c = i.id || s;
          null === u.current && ((t => _s(!0 === t) || "id" === t)(r) && c && (e = e ? c + "-" + e : c), u.current = {
            id: e,
            group: _s(r) && i.group || Hs()
          });
          const h = (0, o.useMemo)((() => ({
            ...u.current,
            forceRender: a
          })), [l]);
          return o.createElement(S.Provider, {
            value: h
          }, t)
        };
      let qs = 0;
      const Zs = ({
        children: t
      }) => (o.useEffect((() => {
        (0, Un.s)(!1, "AnimateSharedLayout is deprecated: https://www.framer.com/docs/guide-upgrade/##shared-layout-animations")
      }), []), o.createElement(Gs, {
        id: b((() => "asl-" + qs++))
      }, t));

      function Ks({
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

      function Js({
        children: t,
        features: e,
        strict: n = !1
      }) {
        const [, r] = (0, o.useState)(!Qs(e)), i = (0, o.useRef)(void 0);
        if (!Qs(e)) {
          const {
            renderer: t,
            ...n
          } = e;
          i.current = t, w(n)
        }
        return (0, o.useEffect)((() => {
          Qs(e) && e().then((({
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

      function Qs(t) {
        return "function" == typeof t
      }
      const ta = (0, o.createContext)(null),
        ea = (0, o.forwardRef)((function({
          children: t,
          as: e = "ul",
          axis: n = "y",
          onReorder: r,
          values: i,
          ...s
        }, a) {
          const l = b((() => Ls(e))),
            u = [],
            c = (0, o.useRef)(!1);
          (0, Un.O)(Boolean(i), "Reorder.Group must be provided a values prop");
          const h = {
            axis: n,
            registerItem: (t, e) => {
              e && -1 === u.findIndex((e => t === e.value)) && (u.push({
                value: t,
                layout: e[n]
              }), u.sort(oa))
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
                  u = _n(l.min, l.max, .5);
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
              u !== o && (c.current = !0, r(o.map(na).filter((t => -1 !== i.indexOf(t)))))
            }
          };
          return (0, o.useEffect)((() => {
            c.current = !1
          })), o.createElement(l, {
            ...s,
            ref: a
          }, o.createElement(ta.Provider, {
            value: h
          }, t))
        }));

      function na(t) {
        return t.value
      }

      function oa(t, e) {
        return t.layout.min - e.layout.min
      }

      function ra(t) {
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
      const ia = t => (t => "object" == typeof t && t.mix)(t) ? t.mix : void 0;

      function sa(...t) {
        const e = !Array.isArray(t[0]),
          n = e ? 0 : -1,
          o = t[0 + n],
          r = t[1 + n],
          i = t[2 + n],
          s = t[3 + n],
          a = io(r, i, {
            mixer: ia(i[0]),
            ...s
          });
        return e ? a(o) : a
      }

      function aa(t, e) {
        const n = ra(e()),
          o = () => n.set(e());
        return o(),
          function(t, e, n) {
            u((() => {
              const n = t.map((t => t.on("change", e)));
              return () => {
                n.forEach((t => t())), Ye.update(o)
              }
            }))
          }(t, (() => ze.update(o, !1, !0))), n
      }

      function la(t, e, n, o) {
        const r = "function" == typeof e ? e : sa(e, n, o);
        return Array.isArray(t) ? ua(t, r) : ua([t], (([t]) => r(t)))
      }

      function ua(t, e) {
        const n = b((() => []));
        return aa(t, (() => {
          n.length = 0;
          const o = t.length;
          for (let e = 0; e < o; e++) n[e] = t[e].get();
          return e(n)
        }))
      }

      function ca(t, e = 0) {
        return j(t) ? t : ra(e)
      }
      const ha = {
          Group: ea,
          Item: (0, o.forwardRef)((function({
            children: t,
            style: e = {},
            value: n,
            as: r = "li",
            onDrag: i,
            layout: s = !0,
            ...a
          }, l) {
            const u = b((() => Ls(r))),
              c = (0, o.useContext)(ta),
              h = {
                x: ca(e.x),
                y: ca(e.y)
              },
              d = la([h.x, h.y], (([t, e]) => t || e ? 1 : "unset")),
              p = (0, o.useRef)(null);
            (0, Un.O)(Boolean(c), "Reorder.Item must be a child of Reorder.Group");
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
          }))
        },
        da = {
          renderer: Ri,
          ...dr,
          ...Te
        },
        pa = {
          ...da,
          ...oi,
          ...Fi,
          projectionNodeConstructor: ks
        };

      function fa(t, ...e) {
        const n = t.length;
        return aa(e, (function() {
          let o = "";
          for (let r = 0; r < n; r++) o += t[r], e[r] && (o += e[r].get());
          return o
        }))
      }

      function ma(t, e = {}) {
        const {
          isStatic: n
        } = (0, o.useContext)(r), i = (0, o.useRef)(null), s = ra(j(t) ? t.get() : t);
        return (0, o.useMemo)((() => s.attach(((t, o) => n ? o(t) : (i.current && i.current.stop(), i.current = Io({
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
        const e = ra(t.getVelocity());
        return (0, o.useEffect)((() => t.on("velocityChange", (t => {
          e.set(t)
        }))), [t]), e
      }
      var va = n(41955);
      const ya = () => ({
        scrollX: Qe(0),
        scrollY: Qe(0),
        scrollXProgress: Qe(0),
        scrollYProgress: Qe(0)
      });

      function xa({
        container: t,
        target: e,
        layoutEffect: n = !0,
        ...r
      } = {}) {
        const i = b(ya);
        return (n ? u : o.useEffect)((() => (0, va.o)((({
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

      function wa(t) {
        return ye(!1, "useElementScroll is deprecated. Convert to useScroll({ container: ref })."), xa({
          container: t
        })
      }

      function ba() {
        return ye(!1, "useViewportScroll is deprecated. Convert to useScroll()."), xa()
      }

      function Ea(t) {
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
          return ze.update(o, !0), () => Ye.update(o)
        }), [t])
      }

      function Pa() {
        const t = ra(0);
        return Ea((e => t.set(e))), t
      }
      class Sa extends Je {
        constructor() {
          super(...arguments), this.members = [], this.transforms = new Set
        }
        add(t) {
          let e;
          O.has(t) ? (this.transforms.add(t), e = "transform") : t.startsWith("origin") || z(t) || "willChange" === t || (e = Ct(t)), e && (Ge(this.members, e), this.update())
        }
        remove(t) {
          O.has(t) ? (this.transforms.delete(t), this.transforms.size || qe(this.members, "transform")) : qe(this.members, Ct(t)), this.update()
        }
        update() {
          this.set(this.members.length ? this.members.join(", ") : "auto")
        }
      }

      function Ca() {
        return b((() => new Sa("auto")))
      }

      function Va(t, e, n) {
        u((() => t.on(e, n)), [t, e, n])
      }

      function Ta() {
        !xi.current && wi();
        const [t] = (0, o.useState)(yi.current);
        return t
      }

      function Aa() {
        const t = Ta(),
          {
            reducedMotion: e
          } = (0, o.useContext)(r);
        return "never" !== e && ("always" === e || t)
      }

      function Ma() {
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
                  t.push(or(e, o, {
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
            set: e => ((0, Un.O)(t, "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."), n.forEach((t => {
              ! function(t, e) {
                Array.isArray(e) ? Rn(t, e) : "string" == typeof e ? Rn(t, [e]) : Mn(t, e)
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

      function Ra() {
        const t = b(Ma);
        return (0, o.useEffect)(t.mount, []), t
      }
      const ka = Ra,
        Da = (t, e, n) => {
          const o = e - t;
          return ((n - t) % o + o) % o + t
        };

      function La(...t) {
        const e = (0, o.useRef)(0),
          [n, r] = (0, o.useState)(t[e.current]);
        return [n, (0, o.useCallback)((n => {
          e.current = "number" != typeof n ? Da(0, t.length, e.current + 1) : n, r(t[e.current])
        }), [t.length, ...t])]
      }
      var Ba = n(59440);

      function Ia(t, {
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
          return (0, Ba.M)(t.current, (() => (a(!0), i ? void 0 : () => a(!1))), o)
        }), [e, t, n, i]), s
      }
      class Oa {
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
      const Fa = () => new Oa;

      function ja() {
        return b(Fa)
      }

      function Ua(t) {
        return null !== t && "object" == typeof t && T in t
      }

      function Na(t) {
        if (Ua(t)) return t[T]
      }

      function $a() {
        return za
      }

      function za(t) {
        Rs.current && (Rs.current.isUpdating = !1, Rs.current.blockUpdate(), t && t())
      }

      function Ya() {
        const [t, e] = Fs(), n = $a();
        return (0, o.useEffect)((() => {
          ze.postRender((() => ze.postRender((() => $n.current = !1))))
        }), [e]), e => {
          n((() => {
            $n.current = !0, t(), e()
          }))
        }
      }

      function Xa() {
        return o.useCallback((() => {
          const t = Rs.current;
          t && t.resetTree()
        }), [])
      }

      function Wa(t, e, n, o) {
        window.MotionAppearAnimations || (window.MotionAppearAnimations = new Map);
        const r = t.dataset[Fn],
          i = Uo(t, e, n, o);
        return r && i && window.MotionAppearAnimations.set(In(r, e), i), i
      }
      const Ha = () => ({});
      class _a extends Si {
        build() {}
        measureInstanceViewportBox() {
          return Ir()
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
          return kn(this, n, Ln(n, t || {}, this)), {
            transition: t,
            transitionEnd: e,
            ...n
          }
        }
      }
      const Ga = Ot({
        scrapeMotionValuesFromProps: Ha,
        createRenderState: Ha
      });

      function qa(t) {
        const [e, n] = (0, o.useState)(t), r = Ga({}, !1), i = b((() => new _a({
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
        }), [n, i]), [e, b((() => t => or(i, t)))]
      }
      const Za = t => t > .001 ? 1 / t : 1e5;
      let Ka = !1;

      function Ja(t) {
        let e = ra(1),
          n = ra(1);
        const o = s();
        return (0, Un.O)(!(!t && !o), "If no scale values are provided, useInvertedScale must be used within a child of another motion component."), (0, Un.s)(Ka, "useInvertedScale is deprecated and will be removed in 3.0. Use the layout prop instead."), Ka = !0, t ? (e = t.scaleX || e, n = t.scaleY || n) : o && (e = o.getValue("scaleX", 1), n = o.getValue("scaleY", 1)), {
          scaleX: la(e, Za),
          scaleY: la(n, Za)
        }
      }
    },
    87672: (t, e, n) => {
      n.d(e, {
        C3: () => i,
        Mt: () => u,
        ct: () => r,
        gR: () => a,
        o5: () => l,
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

      function a(t) {
        var e = "function" == typeof Symbol && Symbol.iterator,
          n = e && t[e],
          o = 0;
        if (n) return n.call(t);
        if (t && "number" == typeof t.length) return {
          next: function() {
            return t && o >= t.length && (t = void 0), {
              value: t && t[o++],
              done: !t
            }
          }
        };
        throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
      }

      function l(t, e) {
        var n = "function" == typeof Symbol && t[Symbol.iterator];
        if (!n) return t;
        var o, r, i = n.call(t),
          s = [];
        try {
          for (;
            (void 0 === e || e-- > 0) && !(o = i.next()).done;) s.push(o.value)
        } catch (t) {
          r = {
            error: t
          }
        } finally {
          try {
            o && !o.done && (n = i.return) && n.call(i)
          } finally {
            if (r) throw r.error
          }
        }
        return s
      }

      function u(t, e, n) {
        if (n || 2 === arguments.length)
          for (var o, r = 0, i = e.length; r < i; r++) !o && r in e || (o || (o = Array.prototype.slice.call(e, 0, r)), o[r] = e[r]);
        return t.concat(o || Array.prototype.slice.call(e))
      }
      Object.create, Object.create, "function" == typeof SuppressedError && SuppressedError
    }
  }
]);