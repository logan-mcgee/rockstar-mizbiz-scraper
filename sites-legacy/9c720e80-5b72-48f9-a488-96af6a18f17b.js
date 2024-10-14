! function() {
  try {
    var t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      e = (new Error).stack;
    e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "9c720e80-5b72-48f9-a488-96af6a18f17b", t._sentryDebugIdIdentifier = "sentry-dbid-9c720e80-5b72-48f9-a488-96af6a18f17b")
  } catch (t) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-legacy",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || []).push([
  [177], {
    96177: (t, e, n) => {
      n.r(e), n.d(e, {
        AnimatePresence: () => Vi,
        AnimateSharedLayout: () => Dl,
        DeprecatedLayoutGroupContext: () => Di,
        DragControls: () => ul,
        FlatTree: () => dr,
        LayoutGroup: () => ji,
        LayoutGroupContext: () => P,
        LazyMotion: () => ki,
        MotionConfig: () => Mi,
        MotionConfigContext: () => o,
        MotionContext: () => r,
        MotionValue: () => bs,
        PresenceContext: () => i,
        Reorder: () => qi,
        SwitchLayoutGroupContext: () => w,
        VisualElement: () => ui,
        addPointerEvent: () => Kt,
        addPointerInfo: () => Zt,
        addScaleCorrector: () => k,
        animate: () => nl,
        animateValue: () => _n,
        animateVisualElement: () => Is,
        animationControls: () => Ia,
        animations: () => zs,
        anticipate: () => Xe,
        backIn: () => He,
        backInOut: () => Ye,
        backOut: () => $e,
        buildTransform: () => I,
        calcLength: () => Js,
        cancelFrame: () => Wt,
        cancelSync: () => Il,
        checkTargetForNewValues: () => ks,
        circIn: () => Ne,
        circInOut: () => ze,
        circOut: () => We,
        clamp: () => z,
        color: () => en,
        complex: () => yn,
        createBox: () => ho,
        createDomMotionComponent: () => vi,
        createMotionComponent: () => S,
        createScopedAnimate: () => el,
        cubicBezier: () => Le,
        delay: () => pr,
        distance: () => $s,
        distance2D: () => Hs,
        domAnimation: () => Zi,
        domMax: () => Ki,
        easeIn: () => Be,
        easeInOut: () => je,
        easeOut: () => Fe,
        filterProps: () => mt,
        frame: () => Nt,
        frameData: () => zt,
        inView: () => ll,
        interpolate: () => Tn,
        invariant: () => be,
        isBrowser: () => a,
        isDragActive: () => oe,
        isMotionComponent: () => ml,
        isMotionValue: () => B,
        isValidMotionProp: () => ht,
        m: () => xi,
        makeUseVisualState: () => Ft,
        mirrorEasing: () => Oe,
        mix: () => nn,
        motion: () => yi,
        motionValue: () => Ps,
        optimizedAppearDataAttribute: () => ve,
        pipe: () => Qt,
        progress: () => En,
        px: () => tt,
        resolveMotionValue: () => Bt,
        reverseEasing: () => Ue,
        scroll: () => Bl,
        scrollInfo: () => Ta,
        spring: () => zn,
        stagger: () => Fl,
        startOptimizedAppearAnimation: () => El,
        steps: () => $t,
        sync: () => jl,
        transform: () => $i,
        unwrapMotionComponent: () => fl,
        useAnimate: () => sl,
        useAnimation: () => rl,
        useAnimationControls: () => ol,
        useAnimationFrame: () => Ra,
        useCycle: () => il,
        useDeprecatedAnimatedState: () => Cl,
        useDeprecatedInvertedScale: () => kl,
        useDomEvent: () => pl,
        useDragControls: () => dl,
        useElementScroll: () => Ma,
        useForceUpdate: () => Pi,
        useInView: () => cl,
        useInstantLayoutTransition: () => gl,
        useInstantTransition: () => vl,
        useIsPresent: () => jo,
        useIsomorphicLayoutEffect: () => l,
        useMotionTemplate: () => Ji,
        useMotionValue: () => Wi,
        useMotionValueEvent: () => ta,
        usePresence: () => Fo,
        useReducedMotion: () => Fa,
        useReducedMotionConfig: () => ja,
        useResetProjection: () => xl,
        useScroll: () => Va,
        useSpring: () => Qi,
        useTime: () => Da,
        useTransform: () => Yi,
        useUnmountEffect: () => Ai,
        useVelocity: () => ea,
        useViewportScroll: () => ka,
        useWillChange: () => Ba,
        visualElementStore: () => ri,
        warning: () => xe,
        wrap: () => Ha
      });
      var s = n(71403);
      const o = (0, s.createContext)({
          transformPagePoint: t => t,
          isStatic: !1,
          reducedMotion: "never"
        }),
        r = (0, s.createContext)({}),
        i = (0, s.createContext)(null),
        a = "undefined" != typeof document,
        l = a ? s.useLayoutEffect : s.useEffect,
        c = (0, s.createContext)({
          strict: !1
        });

      function u(t) {
        return "object" == typeof t && Object.prototype.hasOwnProperty.call(t, "current")
      }

      function h(t) {
        return "string" == typeof t || Array.isArray(t)
      }

      function d(t) {
        return "object" == typeof t && "function" == typeof t.start
      }
      const p = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
        m = ["initial", ...p];

      function f(t) {
        return d(t.animate) || m.some((e => h(t[e])))
      }

      function g(t) {
        return Boolean(f(t) || t.variants)
      }

      function y(t) {
        return Array.isArray(t) ? t.join(" ") : t
      }
      const v = {
          animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
          exit: ["exit"],
          drag: ["drag", "dragControls"],
          focus: ["whileFocus"],
          hover: ["whileHover", "onHoverStart", "onHoverEnd"],
          tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
          pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
          inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
          layout: ["layout", "layoutId"]
        },
        x = {};
      for (const t in v) x[t] = {
        isEnabled: e => v[t].some((t => !!e[t]))
      };

      function b(t) {
        for (const e in t) x[e] = {
          ...x[e],
          ...t[e]
        }
      }
      const P = (0, s.createContext)({}),
        w = (0, s.createContext)({}),
        E = Symbol.for("motionComponentSymbol");

      function S({
        preloadedFeatures: t,
        createVisualElement: e,
        useRender: n,
        useVisualState: d,
        Component: p
      }) {
        t && b(t);
        const m = (0, s.forwardRef)((function(m, g) {
          let v;
          const x = {
              ...(0, s.useContext)(o),
              ...m,
              layoutId: T(m)
            },
            {
              isStatic: b
            } = x,
            P = function(t) {
              const {
                initial: e,
                animate: n
              } = function(t, e) {
                if (f(t)) {
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
              }(t, (0, s.useContext)(r));
              return (0, s.useMemo)((() => ({
                initial: e,
                animate: n
              })), [y(e), y(n)])
            }(m),
            E = d(m, b);
          if (!b && a) {
            P.visualElement = function(t, e, n, a) {
              const {
                visualElement: u
              } = (0, s.useContext)(r), h = (0, s.useContext)(c), d = (0, s.useContext)(i), p = (0, s.useContext)(o).reducedMotion, m = (0, s.useRef)();
              a = a || h.renderer, !m.current && a && (m.current = a(t, {
                visualState: e,
                parent: u,
                props: n,
                presenceContext: d,
                blockInitialAnimation: !!d && !1 === d.initial,
                reducedMotionConfig: p
              }));
              const f = m.current;
              (0, s.useInsertionEffect)((() => {
                f && f.update(n, d)
              }));
              const g = (0, s.useRef)(Boolean(window.HandoffAppearAnimations));
              return l((() => {
                f && (f.render(), g.current && f.animationState && f.animationState.animateChanges())
              })), (0, s.useEffect)((() => {
                f && (f.updateFeatures(), !g.current && f.animationState && f.animationState.animateChanges(), window.HandoffAppearAnimations = void 0, g.current = !1)
              })), f
            }(p, E, x, e);
            const n = (0, s.useContext)(w),
              a = (0, s.useContext)(c).strict;
            P.visualElement && (v = P.visualElement.loadFeatures(x, a, t, n))
          }
          return s.createElement(r.Provider, {
            value: P
          }, v && P.visualElement ? s.createElement(v, {
            visualElement: P.visualElement,
            ...x
          }) : null, n(p, m, function(t, e, n) {
            return (0, s.useCallback)((s => {
              s && t.mount && t.mount(s), e && (s ? e.mount(s) : e.unmount()), n && ("function" == typeof n ? n(s) : u(n) && (n.current = s))
            }), [e])
          }(E, P.visualElement, g), E, b, P.visualElement))
        }));
        return m[E] = p, m
      }

      function T({
        layoutId: t
      }) {
        const e = (0, s.useContext)(P).id;
        return e && void 0 !== t ? e + "-" + t : t
      }

      function A(t) {
        function e(e, n = {}) {
          return S(t(e, n))
        }
        if ("undefined" == typeof Proxy) return e;
        const n = new Map;
        return new Proxy(e, {
          get: (t, s) => (n.has(s) || n.set(s, e(s)), n.get(s))
        })
      }
      const C = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

      function V(t) {
        return "string" == typeof t && !t.includes("-") && !!(C.indexOf(t) > -1 || /[A-Z]/.test(t))
      }
      const M = {};

      function k(t) {
        Object.assign(M, t)
      }
      const R = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
        D = new Set(R);

      function L(t, {
        layout: e,
        layoutId: n
      }) {
        return D.has(t) || t.startsWith("origin") || (e || void 0 !== n) && (!!M[t] || "opacity" === t)
      }
      const B = t => Boolean(t && t.getVelocity),
        F = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective"
        },
        j = R.length;

      function I(t, {
        enableHardwareAcceleration: e = !0,
        allowTransformNone: n = !0
      }, s, o) {
        let r = "";
        for (let e = 0; e < j; e++) {
          const n = R[e];
          void 0 !== t[n] && (r += `${F[n]||n}(${t[n]}) `)
        }
        return e && !t.z && (r += "translateZ(0)"), r = r.trim(), o ? r = o(t, s ? "" : r) : n && s && (r = "none"), r
      }
      const O = t => e => "string" == typeof e && e.startsWith(t),
        U = O("--"),
        N = O("var(--"),
        W = (t, e) => e && "number" == typeof t ? e.transform(t) : t,
        z = (t, e, n) => Math.min(Math.max(n, t), e),
        $ = {
          test: t => "number" == typeof t,
          parse: parseFloat,
          transform: t => t
        },
        H = {
          ...$,
          transform: t => z(0, 1, t)
        },
        Y = {
          ...$,
          default: 1
        },
        X = t => Math.round(1e5 * t) / 1e5,
        G = /(-)?([\d]*\.?[\d])+/g,
        _ = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
        q = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;

      function Z(t) {
        return "string" == typeof t
      }
      const K = t => ({
          test: e => Z(e) && e.endsWith(t) && 1 === e.split(" ").length,
          parse: parseFloat,
          transform: e => `${e}${t}`
        }),
        J = K("deg"),
        Q = K("%"),
        tt = K("px"),
        et = K("vh"),
        nt = K("vw"),
        st = {
          ...Q,
          parse: t => Q.parse(t) / 100,
          transform: t => Q.transform(100 * t)
        },
        ot = {
          ...$,
          transform: Math.round
        },
        rt = {
          borderWidth: tt,
          borderTopWidth: tt,
          borderRightWidth: tt,
          borderBottomWidth: tt,
          borderLeftWidth: tt,
          borderRadius: tt,
          radius: tt,
          borderTopLeftRadius: tt,
          borderTopRightRadius: tt,
          borderBottomRightRadius: tt,
          borderBottomLeftRadius: tt,
          width: tt,
          maxWidth: tt,
          height: tt,
          maxHeight: tt,
          size: tt,
          top: tt,
          right: tt,
          bottom: tt,
          left: tt,
          padding: tt,
          paddingTop: tt,
          paddingRight: tt,
          paddingBottom: tt,
          paddingLeft: tt,
          margin: tt,
          marginTop: tt,
          marginRight: tt,
          marginBottom: tt,
          marginLeft: tt,
          rotate: J,
          rotateX: J,
          rotateY: J,
          rotateZ: J,
          scale: Y,
          scaleX: Y,
          scaleY: Y,
          scaleZ: Y,
          skew: J,
          skewX: J,
          skewY: J,
          distance: tt,
          translateX: tt,
          translateY: tt,
          translateZ: tt,
          x: tt,
          y: tt,
          z: tt,
          perspective: tt,
          transformPerspective: tt,
          opacity: H,
          originX: st,
          originY: st,
          originZ: tt,
          zIndex: ot,
          fillOpacity: H,
          strokeOpacity: H,
          numOctaves: ot
        };

      function it(t, e, n, s) {
        const {
          style: o,
          vars: r,
          transform: i,
          transformOrigin: a
        } = t;
        let l = !1,
          c = !1,
          u = !0;
        for (const t in e) {
          const n = e[t];
          if (U(t)) {
            r[t] = n;
            continue
          }
          const s = rt[t],
            h = W(n, s);
          if (D.has(t)) {
            if (l = !0, i[t] = h, !u) continue;
            n !== (s.default || 0) && (u = !1)
          } else t.startsWith("origin") ? (c = !0, a[t] = h) : o[t] = h
        }
        if (e.transform || (l || s ? o.transform = I(t.transform, n, u, s) : o.transform && (o.transform = "none")), c) {
          const {
            originX: t = "50%",
            originY: e = "50%",
            originZ: n = 0
          } = a;
          o.transformOrigin = `${t} ${e} ${n}`
        }
      }
      const at = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {}
      });

      function lt(t, e, n) {
        for (const s in e) B(e[s]) || L(s, n) || (t[s] = e[s])
      }

      function ct(t, e, n) {
        const o = {},
          r = function(t, e, n) {
            const o = {};
            return lt(o, t.style || {}, t), Object.assign(o, function({
              transformTemplate: t
            }, e, n) {
              return (0, s.useMemo)((() => {
                const s = at();
                return it(s, e, {
                  enableHardwareAcceleration: !n
                }, t), Object.assign({}, s.vars, s.style)
              }), [e])
            }(t, e, n)), t.transformValues ? t.transformValues(o) : o
          }(t, e, n);
        return t.drag && !1 !== t.dragListener && (o.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = !0 === t.drag ? "none" : "pan-" + ("x" === t.drag ? "y" : "x")), void 0 === t.tabIndex && (t.onTap || t.onTapStart || t.whileTap) && (o.tabIndex = 0), o.style = r, o
      }
      const ut = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "onLayoutAnimationStart", "onLayoutAnimationComplete", "onLayoutMeasure", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "ignoreStrict", "viewport"]);

      function ht(t) {
        return t.startsWith("while") || t.startsWith("drag") && "draggable" !== t || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || ut.has(t)
      }
      let dt = t => !ht(t);

      function pt(t) {
        t && (dt = e => e.startsWith("on") ? !ht(e) : t(e))
      }
      try {
        pt(require("@emotion/is-prop-valid").default)
      } catch (t) {}

      function mt(t, e, n) {
        const s = {};
        for (const o in t) "values" === o && "object" == typeof t.values || (dt(o) || !0 === n && ht(o) || !e && !ht(o) || t.draggable && o.startsWith("onDrag")) && (s[o] = t[o]);
        return s
      }

      function ft(t, e, n) {
        return "string" == typeof t ? t : tt.transform(e + n * t)
      }
      const gt = {
          offset: "stroke-dashoffset",
          array: "stroke-dasharray"
        },
        yt = {
          offset: "strokeDashoffset",
          array: "strokeDasharray"
        };

      function vt(t, {
        attrX: e,
        attrY: n,
        attrScale: s,
        originX: o,
        originY: r,
        pathLength: i,
        pathSpacing: a = 1,
        pathOffset: l = 0,
        ...c
      }, u, h, d) {
        if (it(t, c, u, d), h) return void(t.style.viewBox && (t.attrs.viewBox = t.style.viewBox));
        t.attrs = t.style, t.style = {};
        const {
          attrs: p,
          style: m,
          dimensions: f
        } = t;
        p.transform && (f && (m.transform = p.transform), delete p.transform), f && (void 0 !== o || void 0 !== r || m.transform) && (m.transformOrigin = function(t, e, n) {
          return `${ft(e,t.x,t.width)} ${ft(n,t.y,t.height)}`
        }(f, void 0 !== o ? o : .5, void 0 !== r ? r : .5)), void 0 !== e && (p.x = e), void 0 !== n && (p.y = n), void 0 !== s && (p.scale = s), void 0 !== i && function(t, e, n = 1, s = 0, o = !0) {
          t.pathLength = 1;
          const r = o ? gt : yt;
          t[r.offset] = tt.transform(-s);
          const i = tt.transform(e),
            a = tt.transform(n);
          t[r.array] = `${i} ${a}`
        }(p, i, a, l, !1)
      }
      const xt = () => ({
          ...at(),
          attrs: {}
        }),
        bt = t => "string" == typeof t && "svg" === t.toLowerCase();

      function Pt(t, e, n, o) {
        const r = (0, s.useMemo)((() => {
          const n = xt();
          return vt(n, e, {
            enableHardwareAcceleration: !1
          }, bt(o), t.transformTemplate), {
            ...n.attrs,
            style: {
              ...n.style
            }
          }
        }), [e]);
        if (t.style) {
          const e = {};
          lt(e, t.style, t), r.style = {
            ...e,
            ...r.style
          }
        }
        return r
      }

      function wt(t = !1) {
        return (e, n, o, {
          latestValues: r
        }, i) => {
          const a = (V(e) ? Pt : ct)(n, r, i, e),
            l = {
              ...mt(n, "string" == typeof e, t),
              ...a,
              ref: o
            },
            {
              children: c
            } = n,
            u = (0, s.useMemo)((() => B(c) ? c.get() : c), [c]);
          return (0, s.createElement)(e, {
            ...l,
            children: u
          })
        }
      }
      const Et = t => t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();

      function St(t, {
        style: e,
        vars: n
      }, s, o) {
        Object.assign(t.style, e, o && o.getProjectionStyles(s));
        for (const e in n) t.style.setProperty(e, n[e])
      }
      const Tt = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

      function At(t, e, n, s) {
        St(t, e, void 0, s);
        for (const n in e.attrs) t.setAttribute(Tt.has(n) ? n : Et(n), e.attrs[n])
      }

      function Ct(t, e) {
        const {
          style: n
        } = t, s = {};
        for (const o in n)(B(n[o]) || e.style && B(e.style[o]) || L(o, t)) && (s[o] = n[o]);
        return s
      }

      function Vt(t, e) {
        const n = Ct(t, e);
        for (const s in t)(B(t[s]) || B(e[s])) && (n[-1 !== R.indexOf(s) ? "attr" + s.charAt(0).toUpperCase() + s.substring(1) : s] = t[s]);
        return n
      }

      function Mt(t, e, n, s = {}, o = {}) {
        return "function" == typeof e && (e = e(void 0 !== n ? n : t.custom, s, o)), "string" == typeof e && (e = t.variants && t.variants[e]), "function" == typeof e && (e = e(void 0 !== n ? n : t.custom, s, o)), e
      }

      function kt(t) {
        const e = (0, s.useRef)(null);
        return null === e.current && (e.current = t()), e.current
      }
      const Rt = t => Array.isArray(t),
        Dt = t => Boolean(t && "object" == typeof t && t.mix && t.toValue),
        Lt = t => Rt(t) ? t[t.length - 1] || 0 : t;

      function Bt(t) {
        const e = B(t) ? t.get() : t;
        return Dt(e) ? e.toValue() : e
      }
      const Ft = t => (e, n) => {
        const o = (0, s.useContext)(r),
          a = (0, s.useContext)(i),
          l = () => function({
            scrapeMotionValuesFromProps: t,
            createRenderState: e,
            onMount: n
          }, s, o, r) {
            const i = {
              latestValues: jt(s, o, r, t),
              renderState: e()
            };
            return n && (i.mount = t => n(s, t, i)), i
          }(t, e, o, a);
        return n ? l() : kt(l)
      };

      function jt(t, e, n, s) {
        const o = {},
          r = s(t, {});
        for (const t in r) o[t] = Bt(r[t]);
        let {
          initial: i,
          animate: a
        } = t;
        const l = f(t),
          c = g(t);
        e && c && !l && !1 !== t.inherit && (void 0 === i && (i = e.initial), void 0 === a && (a = e.animate));
        let u = !!n && !1 === n.initial;
        u = u || !1 === i;
        const h = u ? a : i;
        return h && "boolean" != typeof h && !d(h) && (Array.isArray(h) ? h : [h]).forEach((e => {
          const n = Mt(t, e);
          if (!n) return;
          const {
            transitionEnd: s,
            transition: r,
            ...i
          } = n;
          for (const t in i) {
            let e = i[t];
            Array.isArray(e) && (e = e[u ? e.length - 1 : 0]), null !== e && (o[t] = e)
          }
          for (const t in s) o[t] = s[t]
        })), o
      }
      const It = t => t;
      class Ot {
        constructor() {
          this.order = [], this.scheduled = new Set
        }
        add(t) {
          if (!this.scheduled.has(t)) return this.scheduled.add(t), this.order.push(t), !0
        }
        remove(t) {
          const e = this.order.indexOf(t); - 1 !== e && (this.order.splice(e, 1), this.scheduled.delete(t))
        }
        clear() {
          this.order.length = 0, this.scheduled.clear()
        }
      }
      const Ut = ["prepare", "read", "update", "preRender", "render", "postRender"],
        {
          schedule: Nt,
          cancel: Wt,
          state: zt,
          steps: $t
        } = function(t, e) {
          let n = !1,
            s = !0;
          const o = {
              delta: 0,
              timestamp: 0,
              isProcessing: !1
            },
            r = Ut.reduce(((t, e) => (t[e] = function(t) {
              let e = new Ot,
                n = new Ot,
                s = 0,
                o = !1,
                r = !1;
              const i = new WeakSet,
                a = {
                  schedule: (t, r = !1, a = !1) => {
                    const l = a && o,
                      c = l ? e : n;
                    return r && i.add(t), c.add(t) && l && o && (s = e.order.length), t
                  },
                  cancel: t => {
                    n.remove(t), i.delete(t)
                  },
                  process: l => {
                    if (o) r = !0;
                    else {
                      if (o = !0, [e, n] = [n, e], n.clear(), s = e.order.length, s)
                        for (let n = 0; n < s; n++) {
                          const s = e.order[n];
                          s(l), i.has(s) && (a.schedule(s), t())
                        }
                      o = !1, r && (r = !1, a.process(l))
                    }
                  }
                };
              return a
            }((() => n = !0)), t)), {}),
            i = t => r[t].process(o),
            a = () => {
              const e = performance.now();
              n = !1, o.delta = s ? 1e3 / 60 : Math.max(Math.min(e - o.timestamp, 40), 1), o.timestamp = e, o.isProcessing = !0, Ut.forEach(i), o.isProcessing = !1, n && (s = !1, t(a))
            };
          return {
            schedule: Ut.reduce(((e, i) => {
              const l = r[i];
              return e[i] = (e, r = !1, i = !1) => (n || (n = !0, s = !0, o.isProcessing || t(a)), l.schedule(e, r, i)), e
            }), {}),
            cancel: t => Ut.forEach((e => r[e].cancel(t))),
            state: o,
            steps: r
          }
        }("undefined" != typeof requestAnimationFrame ? requestAnimationFrame : It),
        Ht = {
          useVisualState: Ft({
            scrapeMotionValuesFromProps: Vt,
            createRenderState: xt,
            onMount: (t, e, {
              renderState: n,
              latestValues: s
            }) => {
              Nt.read((() => {
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
              })), Nt.render((() => {
                vt(n, s, {
                  enableHardwareAcceleration: !1
                }, bt(e.tagName), t.transformTemplate), At(e, n)
              }))
            }
          })
        },
        Yt = {
          useVisualState: Ft({
            scrapeMotionValuesFromProps: Ct,
            createRenderState: at
          })
        };

      function Xt(t, {
        forwardMotionProps: e = !1
      }, n, s) {
        return {
          ...V(t) ? Ht : Yt,
          preloadedFeatures: n,
          useRender: wt(e),
          createVisualElement: s,
          Component: t
        }
      }

      function Gt(t, e, n, s = {
        passive: !0
      }) {
        return t.addEventListener(e, n, s), () => t.removeEventListener(e, n)
      }
      const _t = t => "mouse" === t.pointerType ? "number" != typeof t.button || t.button <= 0 : !1 !== t.isPrimary;

      function qt(t, e = "page") {
        return {
          point: {
            x: t[e + "X"],
            y: t[e + "Y"]
          }
        }
      }
      const Zt = t => e => _t(e) && t(e, qt(e));

      function Kt(t, e, n, s) {
        return Gt(t, e, Zt(n), s)
      }
      const Jt = (t, e) => n => e(t(n)),
        Qt = (...t) => t.reduce(Jt);

      function te(t) {
        let e = null;
        return () => null === e && (e = t, () => {
          e = null
        })
      }
      const ee = te("dragHorizontal"),
        ne = te("dragVertical");

      function se(t) {
        let e = !1;
        if ("y" === t) e = ne();
        else if ("x" === t) e = ee();
        else {
          const t = ee(),
            n = ne();
          t && n ? e = () => {
            t(), n()
          } : (t && t(), n && n())
        }
        return e
      }

      function oe() {
        const t = se(!0);
        return !t || (t(), !1)
      }
      class re {
        constructor(t) {
          this.isMounted = !1, this.node = t
        }
        update() {}
      }

      function ie(t, e) {
        const n = "pointer" + (e ? "enter" : "leave"),
          s = "onHover" + (e ? "Start" : "End");
        return Kt(t.current, n, ((n, o) => {
          if ("touch" === n.type || oe()) return;
          const r = t.getProps();
          t.animationState && r.whileHover && t.animationState.setActive("whileHover", e), r[s] && Nt.update((() => r[s](n, o)))
        }), {
          passive: !t.getProps()[s]
        })
      }
      const ae = (t, e) => !!e && (t === e || ae(t, e.parentElement));

      function le(t, e) {
        if (!e) return;
        const n = new PointerEvent("pointer" + t);
        e(n, qt(n))
      }
      const ce = new WeakMap,
        ue = new WeakMap,
        he = t => {
          const e = ce.get(t.target);
          e && e(t)
        },
        de = t => {
          t.forEach(he)
        };
      const pe = {
          some: 0,
          all: 1
        },
        me = {
          inView: {
            Feature: class extends re {
              constructor() {
                super(...arguments), this.hasEnteredView = !1, this.isInView = !1
              }
              startObserver() {
                this.unmount();
                const {
                  viewport: t = {}
                } = this.node.getProps(), {
                  root: e,
                  margin: n,
                  amount: s = "some",
                  once: o
                } = t, r = {
                  root: e ? e.current : void 0,
                  rootMargin: n,
                  threshold: "number" == typeof s ? s : pe[s]
                };
                return function(t, e, n) {
                  const s = function({
                    root: t,
                    ...e
                  }) {
                    const n = t || document;
                    ue.has(n) || ue.set(n, {});
                    const s = ue.get(n),
                      o = JSON.stringify(e);
                    return s[o] || (s[o] = new IntersectionObserver(de, {
                      root: t,
                      ...e
                    })), s[o]
                  }(e);
                  return ce.set(t, n), s.observe(t), () => {
                    ce.delete(t), s.unobserve(t)
                  }
                }(this.node.current, r, (t => {
                  const {
                    isIntersecting: e
                  } = t;
                  if (this.isInView === e) return;
                  if (this.isInView = e, o && !e && this.hasEnteredView) return;
                  e && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", e);
                  const {
                    onViewportEnter: n,
                    onViewportLeave: s
                  } = this.node.getProps(), r = e ? n : s;
                  r && r(t)
                }))
              }
              mount() {
                this.startObserver()
              }
              update() {
                if ("undefined" == typeof IntersectionObserver) return;
                const {
                  props: t,
                  prevProps: e
                } = this.node;
                ["amount", "margin", "root"].some(function({
                  viewport: t = {}
                }, {
                  viewport: e = {}
                } = {}) {
                  return n => t[n] !== e[n]
                }(t, e)) && this.startObserver()
              }
              unmount() {}
            }
          },
          tap: {
            Feature: class extends re {
              constructor() {
                super(...arguments), this.removeStartListeners = It, this.removeEndListeners = It, this.removeAccessibleListeners = It, this.startPointerPress = (t, e) => {
                  if (this.removeEndListeners(), this.isPressing) return;
                  const n = this.node.getProps(),
                    s = Kt(window, "pointerup", ((t, e) => {
                      if (!this.checkPressEnd()) return;
                      const {
                        onTap: n,
                        onTapCancel: s
                      } = this.node.getProps();
                      Nt.update((() => {
                        ae(this.node.current, t.target) ? n && n(t, e) : s && s(t, e)
                      }))
                    }), {
                      passive: !(n.onTap || n.onPointerUp)
                    }),
                    o = Kt(window, "pointercancel", ((t, e) => this.cancelPress(t, e)), {
                      passive: !(n.onTapCancel || n.onPointerCancel)
                    });
                  this.removeEndListeners = Qt(s, o), this.startPress(t, e)
                }, this.startAccessiblePress = () => {
                  const t = Gt(this.node.current, "keydown", (t => {
                      "Enter" !== t.key || this.isPressing || (this.removeEndListeners(), this.removeEndListeners = Gt(this.node.current, "keyup", (t => {
                        "Enter" === t.key && this.checkPressEnd() && le("up", ((t, e) => {
                          const {
                            onTap: n
                          } = this.node.getProps();
                          n && Nt.update((() => n(t, e)))
                        }))
                      })), le("down", ((t, e) => {
                        this.startPress(t, e)
                      })))
                    })),
                    e = Gt(this.node.current, "blur", (() => {
                      this.isPressing && le("cancel", ((t, e) => this.cancelPress(t, e)))
                    }));
                  this.removeAccessibleListeners = Qt(t, e)
                }
              }
              startPress(t, e) {
                this.isPressing = !0;
                const {
                  onTapStart: n,
                  whileTap: s
                } = this.node.getProps();
                s && this.node.animationState && this.node.animationState.setActive("whileTap", !0), n && Nt.update((() => n(t, e)))
              }
              checkPressEnd() {
                return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !oe()
              }
              cancelPress(t, e) {
                if (!this.checkPressEnd()) return;
                const {
                  onTapCancel: n
                } = this.node.getProps();
                n && Nt.update((() => n(t, e)))
              }
              mount() {
                const t = this.node.getProps(),
                  e = Kt(this.node.current, "pointerdown", this.startPointerPress, {
                    passive: !(t.onTapStart || t.onPointerStart)
                  }),
                  n = Gt(this.node.current, "focus", this.startAccessiblePress);
                this.removeStartListeners = Qt(e, n)
              }
              unmount() {
                this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners()
              }
            }
          },
          focus: {
            Feature: class extends re {
              constructor() {
                super(...arguments), this.isActive = !1
              }
              onFocus() {
                let t = !1;
                try {
                  t = this.node.current.matches(":focus-visible")
                } catch (e) {
                  t = !0
                }
                t && this.node.animationState && (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
              }
              onBlur() {
                this.isActive && this.node.animationState && (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
              }
              mount() {
                this.unmount = Qt(Gt(this.node.current, "focus", (() => this.onFocus())), Gt(this.node.current, "blur", (() => this.onBlur())))
              }
              unmount() {}
            }
          },
          hover: {
            Feature: class extends re {
              mount() {
                this.unmount = Qt(ie(this.node, !0), ie(this.node, !1))
              }
              unmount() {}
            }
          }
        };

      function fe(t, e) {
        if (!Array.isArray(e)) return !1;
        const n = e.length;
        if (n !== t.length) return !1;
        for (let s = 0; s < n; s++)
          if (e[s] !== t[s]) return !1;
        return !0
      }

      function ge(t, e, n) {
        const s = t.getProps();
        return Mt(s, e, void 0 !== n ? n : s.custom, function(t) {
          const e = {};
          return t.values.forEach(((t, n) => e[n] = t.get())), e
        }(t), function(t) {
          const e = {};
          return t.values.forEach(((t, n) => e[n] = t.getVelocity())), e
        }(t))
      }
      const ye = "framerAppearId",
        ve = "data-" + Et(ye);
      let xe = It,
        be = It;
      const Pe = t => 1e3 * t,
        we = t => t / 1e3,
        Ee = {
          current: !1
        },
        Se = t => Array.isArray(t) && "number" == typeof t[0];

      function Te(t) {
        return Boolean(!t || "string" == typeof t && Ce[t] || Se(t) || Array.isArray(t) && t.every(Te))
      }
      const Ae = ([t, e, n, s]) => `cubic-bezier(${t}, ${e}, ${n}, ${s})`,
        Ce = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: Ae([0, .65, .55, 1]),
          circOut: Ae([.55, 0, 1, .45]),
          backIn: Ae([.31, .01, .66, -.59]),
          backOut: Ae([.33, 1.53, .69, .99])
        };

      function Ve(t) {
        if (t) return Se(t) ? Ae(t) : Array.isArray(t) ? t.map(Ve) : Ce[t]
      }

      function Me(t, e, n, {
        delay: s = 0,
        duration: o,
        repeat: r = 0,
        repeatType: i = "loop",
        ease: a,
        times: l
      } = {}) {
        const c = {
          [e]: n
        };
        l && (c.offset = l);
        const u = Ve(a);
        return Array.isArray(u) && (c.easing = u), t.animate(c, {
          delay: s,
          duration: o,
          easing: Array.isArray(u) ? "linear" : u,
          fill: "both",
          iterations: r + 1,
          direction: "reverse" === i ? "alternate" : "normal"
        })
      }
      const ke = (t, e, n) => (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t,
        Re = 1e-7,
        De = 12;

      function Le(t, e, n, s) {
        if (t === e && n === s) return It;
        return o => 0 === o || 1 === o ? o : ke(function(t, e, n, s, o) {
          let r, i, a = 0;
          do {
            i = e + (n - e) / 2, r = ke(i, s, o) - t, r > 0 ? n = i : e = i
          } while (Math.abs(r) > Re && ++a < De);
          return i
        }(o, 0, 1, t, n), e, s)
      }
      const Be = Le(.42, 0, 1, 1),
        Fe = Le(0, 0, .58, 1),
        je = Le(.42, 0, .58, 1),
        Ie = t => Array.isArray(t) && "number" != typeof t[0],
        Oe = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
        Ue = t => e => 1 - t(1 - e),
        Ne = t => 1 - Math.sin(Math.acos(t)),
        We = Ue(Ne),
        ze = Oe(We),
        $e = Le(.33, 1.53, .69, .99),
        He = Ue($e),
        Ye = Oe(He),
        Xe = t => (t *= 2) < 1 ? .5 * He(t) : .5 * (2 - Math.pow(2, -10 * (t - 1))),
        Ge = {
          linear: It,
          easeIn: Be,
          easeInOut: je,
          easeOut: Fe,
          circIn: Ne,
          circInOut: ze,
          circOut: We,
          backIn: He,
          backInOut: Ye,
          backOut: $e,
          anticipate: Xe
        },
        _e = t => {
          if (Array.isArray(t)) {
            be(4 === t.length, "Cubic bezier arrays must contain four numerical values.");
            const [e, n, s, o] = t;
            return Le(e, n, s, o)
          }
          return "string" == typeof t ? (be(void 0 !== Ge[t], `Invalid easing type '${t}'`), Ge[t]) : t
        },
        qe = (t, e) => n => Boolean(Z(n) && q.test(n) && n.startsWith(t) || e && Object.prototype.hasOwnProperty.call(n, e)),
        Ze = (t, e, n) => s => {
          if (!Z(s)) return s;
          const [o, r, i, a] = s.match(G);
          return {
            [t]: parseFloat(o),
            [e]: parseFloat(r),
            [n]: parseFloat(i),
            alpha: void 0 !== a ? parseFloat(a) : 1
          }
        },
        Ke = {
          ...$,
          transform: t => Math.round((t => z(0, 255, t))(t))
        },
        Je = {
          test: qe("rgb", "red"),
          parse: Ze("red", "green", "blue"),
          transform: ({
            red: t,
            green: e,
            blue: n,
            alpha: s = 1
          }) => "rgba(" + Ke.transform(t) + ", " + Ke.transform(e) + ", " + Ke.transform(n) + ", " + X(H.transform(s)) + ")"
        },
        Qe = {
          test: qe("#"),
          parse: function(t) {
            let e = "",
              n = "",
              s = "",
              o = "";
            return t.length > 5 ? (e = t.substring(1, 3), n = t.substring(3, 5), s = t.substring(5, 7), o = t.substring(7, 9)) : (e = t.substring(1, 2), n = t.substring(2, 3), s = t.substring(3, 4), o = t.substring(4, 5), e += e, n += n, s += s, o += o), {
              red: parseInt(e, 16),
              green: parseInt(n, 16),
              blue: parseInt(s, 16),
              alpha: o ? parseInt(o, 16) / 255 : 1
            }
          },
          transform: Je.transform
        },
        tn = {
          test: qe("hsl", "hue"),
          parse: Ze("hue", "saturation", "lightness"),
          transform: ({
            hue: t,
            saturation: e,
            lightness: n,
            alpha: s = 1
          }) => "hsla(" + Math.round(t) + ", " + Q.transform(X(e)) + ", " + Q.transform(X(n)) + ", " + X(H.transform(s)) + ")"
        },
        en = {
          test: t => Je.test(t) || Qe.test(t) || tn.test(t),
          parse: t => Je.test(t) ? Je.parse(t) : tn.test(t) ? tn.parse(t) : Qe.parse(t),
          transform: t => Z(t) ? t : t.hasOwnProperty("red") ? Je.transform(t) : tn.transform(t)
        },
        nn = (t, e, n) => -n * t + n * e + t;

      function sn(t, e, n) {
        return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + 6 * (e - t) * n : n < .5 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
      }
      const on = (t, e, n) => {
          const s = t * t;
          return Math.sqrt(Math.max(0, n * (e * e - s) + s))
        },
        rn = [Qe, Je, tn];

      function an(t) {
        const e = (n = t, rn.find((t => t.test(n))));
        var n;
        be(Boolean(e), `'${t}' is not an animatable color. Use the equivalent color code instead.`);
        let s = e.parse(t);
        return e === tn && (s = function({
          hue: t,
          saturation: e,
          lightness: n,
          alpha: s
        }) {
          t /= 360, n /= 100;
          let o = 0,
            r = 0,
            i = 0;
          if (e /= 100) {
            const s = n < .5 ? n * (1 + e) : n + e - n * e,
              a = 2 * n - s;
            o = sn(a, s, t + 1 / 3), r = sn(a, s, t), i = sn(a, s, t - 1 / 3)
          } else o = r = i = n;
          return {
            red: Math.round(255 * o),
            green: Math.round(255 * r),
            blue: Math.round(255 * i),
            alpha: s
          }
        }(s)), s
      }
      const ln = (t, e) => {
          const n = an(t),
            s = an(e),
            o = {
              ...n
            };
          return t => (o.red = on(n.red, s.red, t), o.green = on(n.green, s.green, t), o.blue = on(n.blue, s.blue, t), o.alpha = nn(n.alpha, s.alpha, t), Je.transform(o))
        },
        cn = {
          regex: /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,
          countKey: "Vars",
          token: "${v}",
          parse: It
        },
        un = {
          regex: _,
          countKey: "Colors",
          token: "${c}",
          parse: en.parse
        },
        hn = {
          regex: G,
          countKey: "Numbers",
          token: "${n}",
          parse: $.parse
        };

      function dn(t, {
        regex: e,
        countKey: n,
        token: s,
        parse: o
      }) {
        const r = t.tokenised.match(e);
        r && (t["num" + n] = r.length, t.tokenised = t.tokenised.replace(e, s), t.values.push(...r.map(o)))
      }

      function pn(t) {
        const e = t.toString(),
          n = {
            value: e,
            tokenised: e,
            values: [],
            numVars: 0,
            numColors: 0,
            numNumbers: 0
          };
        return n.value.includes("var(--") && dn(n, cn), dn(n, un), dn(n, hn), n
      }

      function mn(t) {
        return pn(t).values
      }

      function fn(t) {
        const {
          values: e,
          numColors: n,
          numVars: s,
          tokenised: o
        } = pn(t), r = e.length;
        return t => {
          let e = o;
          for (let o = 0; o < r; o++) e = o < s ? e.replace(cn.token, t[o]) : o < s + n ? e.replace(un.token, en.transform(t[o])) : e.replace(hn.token, X(t[o]));
          return e
        }
      }
      const gn = t => "number" == typeof t ? 0 : t,
        yn = {
          test: function(t) {
            var e, n;
            return isNaN(t) && Z(t) && ((null === (e = t.match(G)) || void 0 === e ? void 0 : e.length) || 0) + ((null === (n = t.match(_)) || void 0 === n ? void 0 : n.length) || 0) > 0
          },
          parse: mn,
          createTransformer: fn,
          getAnimatableNone: function(t) {
            const e = mn(t);
            return fn(t)(e.map(gn))
          }
        },
        vn = (t, e) => n => `${n>0?e:t}`;

      function xn(t, e) {
        return "number" == typeof t ? n => nn(t, e, n) : en.test(t) ? ln(t, e) : t.startsWith("var(") ? vn(t, e) : wn(t, e)
      }
      const bn = (t, e) => {
          const n = [...t],
            s = n.length,
            o = t.map(((t, n) => xn(t, e[n])));
          return t => {
            for (let e = 0; e < s; e++) n[e] = o[e](t);
            return n
          }
        },
        Pn = (t, e) => {
          const n = {
              ...t,
              ...e
            },
            s = {};
          for (const o in n) void 0 !== t[o] && void 0 !== e[o] && (s[o] = xn(t[o], e[o]));
          return t => {
            for (const e in s) n[e] = s[e](t);
            return n
          }
        },
        wn = (t, e) => {
          const n = yn.createTransformer(e),
            s = pn(t),
            o = pn(e);
          return s.numVars === o.numVars && s.numColors === o.numColors && s.numNumbers >= o.numNumbers ? Qt(bn(s.values, o.values), n) : (xe(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), vn(t, e))
        },
        En = (t, e, n) => {
          const s = e - t;
          return 0 === s ? 1 : (n - t) / s
        },
        Sn = (t, e) => n => nn(t, e, n);

      function Tn(t, e, {
        clamp: n = !0,
        ease: s,
        mixer: o
      } = {}) {
        const r = t.length;
        if (be(r === e.length, "Both input and output ranges must be the same length"), 1 === r) return () => e[0];
        t[0] > t[r - 1] && (t = [...t].reverse(), e = [...e].reverse());
        const i = function(t, e, n) {
            const s = [],
              o = n || ("number" == typeof(r = t[0]) ? Sn : "string" == typeof r ? en.test(r) ? ln : wn : Array.isArray(r) ? bn : "object" == typeof r ? Pn : Sn);
            var r;
            const i = t.length - 1;
            for (let n = 0; n < i; n++) {
              let r = o(t[n], t[n + 1]);
              if (e) {
                const t = Array.isArray(e) ? e[n] || It : e;
                r = Qt(t, r)
              }
              s.push(r)
            }
            return s
          }(e, s, o),
          a = i.length,
          l = e => {
            let n = 0;
            if (a > 1)
              for (; n < t.length - 2 && !(e < t[n + 1]); n++);
            const s = En(t[n], t[n + 1], e);
            return i[n](s)
          };
        return n ? e => l(z(t[0], t[r - 1], e)) : l
      }

      function An(t, e) {
        const n = t[t.length - 1];
        for (let s = 1; s <= e; s++) {
          const o = En(0, e, s);
          t.push(nn(n, 1, o))
        }
      }

      function Cn(t) {
        const e = [0];
        return An(e, t.length - 1), e
      }

      function Vn({
        duration: t = 300,
        keyframes: e,
        times: n,
        ease: s = "easeInOut"
      }) {
        const o = Ie(s) ? s.map(_e) : _e(s),
          r = {
            done: !1,
            value: e[0]
          },
          i = function(t, e) {
            return t.map((t => t * e))
          }(n && n.length === e.length ? n : Cn(e), t),
          a = Tn(i, e, {
            ease: Array.isArray(o) ? o : (l = e, c = o, l.map((() => c || je)).splice(0, l.length - 1))
          });
        var l, c;
        return {
          calculatedDuration: t,
          next: e => (r.value = a(e), r.done = e >= t, r)
        }
      }

      function Mn(t, e) {
        return e ? t * (1e3 / e) : 0
      }
      const kn = 5;

      function Rn(t, e, n) {
        const s = Math.max(e - kn, 0);
        return Mn(n - t(s), e - s)
      }
      const Dn = .001,
        Ln = .01,
        Bn = 10,
        Fn = .05,
        jn = 1;
      const In = 12;

      function On(t, e) {
        return t * Math.sqrt(1 - e * e)
      }
      const Un = ["duration", "bounce"],
        Nn = ["stiffness", "damping", "mass"];

      function Wn(t, e) {
        return e.some((e => void 0 !== t[e]))
      }

      function zn({
        keyframes: t,
        restDelta: e,
        restSpeed: n,
        ...s
      }) {
        const o = t[0],
          r = t[t.length - 1],
          i = {
            done: !1,
            value: o
          },
          {
            stiffness: a,
            damping: l,
            mass: c,
            velocity: u,
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
            if (!Wn(t, Nn) && Wn(t, Un)) {
              const n = function({
                duration: t = 800,
                bounce: e = .25,
                velocity: n = 0,
                mass: s = 1
              }) {
                let o, r;
                xe(t <= Pe(Bn), "Spring duration must be 10 seconds or less");
                let i = 1 - e;
                i = z(Fn, jn, i), t = z(Ln, Bn, we(t)), i < 1 ? (o = e => {
                  const s = e * i,
                    o = s * t,
                    r = s - n,
                    a = On(e, i),
                    l = Math.exp(-o);
                  return Dn - r / a * l
                }, r = e => {
                  const s = e * i * t,
                    r = s * n + n,
                    a = Math.pow(i, 2) * Math.pow(e, 2) * t,
                    l = Math.exp(-s),
                    c = On(Math.pow(e, 2), i);
                  return (-o(e) + Dn > 0 ? -1 : 1) * ((r - a) * l) / c
                }) : (o = e => Math.exp(-e * t) * ((e - n) * t + 1) - Dn, r = e => Math.exp(-e * t) * (t * t * (n - e)));
                const a = function(t, e, n) {
                  let s = n;
                  for (let n = 1; n < In; n++) s -= t(s) / e(s);
                  return s
                }(o, r, 5 / t);
                if (t = Pe(t), isNaN(a)) return {
                  stiffness: 100,
                  damping: 10,
                  duration: t
                }; {
                  const e = Math.pow(a, 2) * s;
                  return {
                    stiffness: e,
                    damping: 2 * i * Math.sqrt(s * e),
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
          }(s),
          p = u ? -we(u) : 0,
          m = l / (2 * Math.sqrt(a * c)),
          f = r - o,
          g = we(Math.sqrt(a / c)),
          y = Math.abs(f) < 5;
        let v;
        if (n || (n = y ? .01 : 2), e || (e = y ? .005 : .5), m < 1) {
          const t = On(g, m);
          v = e => {
            const n = Math.exp(-m * g * e);
            return r - n * ((p + m * g * f) / t * Math.sin(t * e) + f * Math.cos(t * e))
          }
        } else if (1 === m) v = t => r - Math.exp(-g * t) * (f + (p + g * f) * t);
        else {
          const t = g * Math.sqrt(m * m - 1);
          v = e => {
            const n = Math.exp(-m * g * e),
              s = Math.min(t * e, 300);
            return r - n * ((p + m * g * f) * Math.sinh(s) + t * f * Math.cosh(s)) / t
          }
        }
        return {
          calculatedDuration: d && h || null,
          next: t => {
            const s = v(t);
            if (d) i.done = t >= h;
            else {
              let o = p;
              0 !== t && (o = m < 1 ? Rn(v, t, s) : 0);
              const a = Math.abs(o) <= n,
                l = Math.abs(r - s) <= e;
              i.done = a && l
            }
            return i.value = i.done ? r : s, i
          }
        }
      }

      function $n({
        keyframes: t,
        velocity: e = 0,
        power: n = .8,
        timeConstant: s = 325,
        bounceDamping: o = 10,
        bounceStiffness: r = 500,
        modifyTarget: i,
        min: a,
        max: l,
        restDelta: c = .5,
        restSpeed: u
      }) {
        const h = t[0],
          d = {
            done: !1,
            value: h
          },
          p = t => void 0 === a ? l : void 0 === l || Math.abs(a - t) < Math.abs(l - t) ? a : l;
        let m = n * e;
        const f = h + m,
          g = void 0 === i ? f : i(f);
        g !== f && (m = g - h);
        const y = t => -m * Math.exp(-t / s),
          v = t => g + y(t),
          x = t => {
            const e = y(t),
              n = v(t);
            d.done = Math.abs(e) <= c, d.value = d.done ? g : n
          };
        let b, P;
        const w = t => {
          var e;
          e = d.value, (void 0 !== a && e < a || void 0 !== l && e > l) && (b = t, P = zn({
            keyframes: [d.value, p(d.value)],
            velocity: Rn(v, t, d.value),
            damping: o,
            stiffness: r,
            restDelta: c,
            restSpeed: u
          }))
        };
        return w(0), {
          calculatedDuration: null,
          next: t => {
            let e = !1;
            return P || void 0 !== b || (e = !0, x(t), w(t)), void 0 !== b && t > b ? P.next(t - b) : (!e && x(t), d)
          }
        }
      }
      const Hn = t => {
          const e = ({
            timestamp: e
          }) => t(e);
          return {
            start: () => Nt.update(e, !0),
            stop: () => Wt(e),
            now: () => zt.isProcessing ? zt.timestamp : performance.now()
          }
        },
        Yn = 2e4;

      function Xn(t) {
        let e = 0,
          n = t.next(e);
        for (; !n.done && e < Yn;) e += 50, n = t.next(e);
        return e >= Yn ? 1 / 0 : e
      }
      const Gn = {
        decay: $n,
        inertia: $n,
        tween: Vn,
        keyframes: Vn,
        spring: zn
      };

      function _n({
        autoplay: t = !0,
        delay: e = 0,
        driver: n = Hn,
        keyframes: s,
        type: o = "keyframes",
        repeat: r = 0,
        repeatDelay: i = 0,
        repeatType: a = "loop",
        onPlay: l,
        onStop: c,
        onComplete: u,
        onUpdate: h,
        ...d
      }) {
        let p, m, f = 1,
          g = !1;
        const y = () => {
          m = new Promise((t => {
            p = t
          }))
        };
        let v;
        y();
        const x = Gn[o] || Vn;
        let b;
        x !== Vn && "number" != typeof s[0] && (b = Tn([0, 100], s, {
          clamp: !1
        }), s = [0, 100]);
        const P = x({
          ...d,
          keyframes: s
        });
        let w;
        "mirror" === a && (w = x({
          ...d,
          keyframes: [...s].reverse(),
          velocity: -(d.velocity || 0)
        }));
        let E = "idle",
          S = null,
          T = null,
          A = null;
        null === P.calculatedDuration && r && (P.calculatedDuration = Xn(P));
        const {
          calculatedDuration: C
        } = P;
        let V = 1 / 0,
          M = 1 / 0;
        null !== C && (V = C + i, M = V * (r + 1) - i);
        let k = 0;
        const R = t => {
            if (null === T) return;
            f > 0 && (T = Math.min(T, t)), f < 0 && (T = Math.min(t - M / f, T)), k = null !== S ? S : Math.round(t - T) * f;
            const n = k - e * (f >= 0 ? 1 : -1),
              o = f >= 0 ? n < 0 : n > M;
            k = Math.max(n, 0), "finished" === E && null === S && (k = M);
            let l = k,
              c = P;
            if (r) {
              const t = k / V;
              let e = Math.floor(t),
                n = t % 1;
              !n && t >= 1 && (n = 1), 1 === n && e--, e = Math.min(e, r + 1);
              const s = Boolean(e % 2);
              s && ("reverse" === a ? (n = 1 - n, i && (n -= i / V)) : "mirror" === a && (c = w));
              let o = z(0, 1, n);
              k > M && (o = "reverse" === a && s ? 1 : 0), l = o * V
            }
            const u = o ? {
              done: !1,
              value: s[0]
            } : c.next(l);
            b && (u.value = b(u.value));
            let {
              done: d
            } = u;
            o || null === C || (d = f >= 0 ? k >= M : k <= 0);
            const p = null === S && ("finished" === E || "running" === E && d);
            return h && h(u.value), p && B(), u
          },
          D = () => {
            v && v.stop(), v = void 0
          },
          L = () => {
            E = "idle", D(), p(), y(), T = A = null
          },
          B = () => {
            E = "finished", u && u(), D(), p()
          },
          F = () => {
            if (g) return;
            v || (v = n(R));
            const t = v.now();
            l && l(), null !== S ? T = t - S : T && "finished" !== E || (T = t), "finished" === E && y(), A = T, S = null, E = "running", v.start()
          };
        t && F();
        const j = {
          then: (t, e) => m.then(t, e),
          get time() {
            return we(k)
          },
          set time(t) {
            t = Pe(t), k = t, null === S && v && 0 !== f ? T = v.now() - t / f : S = t
          },
          get duration() {
            const t = null === P.calculatedDuration ? Xn(P) : P.calculatedDuration;
            return we(t)
          },
          get speed() {
            return f
          },
          set speed(t) {
            t !== f && v && (f = t, j.time = we(k))
          },
          get state() {
            return E
          },
          play: F,
          pause: () => {
            E = "paused", S = k
          },
          stop: () => {
            g = !0, "idle" !== E && (E = "idle", c && c(), L())
          },
          cancel: () => {
            null !== A && R(A), L()
          },
          complete: () => {
            E = "finished"
          },
          sample: t => (T = 0, R(t))
        };
        return j
      }

      function qn(t) {
        let e;
        return () => (void 0 === e && (e = t()), e)
      }
      const Zn = qn((() => Object.hasOwnProperty.call(Element.prototype, "animate"))),
        Kn = new Set(["opacity", "clipPath", "filter", "transform", "backgroundColor"]);
      const Jn = {
          type: "spring",
          stiffness: 500,
          damping: 25,
          restSpeed: 10
        },
        Qn = {
          type: "keyframes",
          duration: .8
        },
        ts = {
          type: "keyframes",
          ease: [.25, .1, .35, 1],
          duration: .3
        },
        es = (t, {
          keyframes: e
        }) => e.length > 2 ? Qn : D.has(t) ? t.startsWith("scale") ? {
          type: "spring",
          stiffness: 550,
          damping: 0 === e[1] ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10
        } : Jn : ts,
        ns = (t, e) => !("zIndex" === t || "number" != typeof e && !Array.isArray(e) && ("string" != typeof e || !yn.test(e) && "0" !== e || e.startsWith("url("))),
        ss = new Set(["brightness", "contrast", "saturate", "opacity"]);

      function os(t) {
        const [e, n] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        const [s] = n.match(G) || [];
        if (!s) return t;
        const o = n.replace(s, "");
        let r = ss.has(e) ? 1 : 0;
        return s !== n && (r *= 100), e + "(" + r + o + ")"
      }
      const rs = /([a-z-]*)\(.*?\)/g,
        is = {
          ...yn,
          getAnimatableNone: t => {
            const e = t.match(rs);
            return e ? e.map(os).join(" ") : t
          }
        },
        as = {
          ...rt,
          color: en,
          backgroundColor: en,
          outlineColor: en,
          fill: en,
          stroke: en,
          borderColor: en,
          borderTopColor: en,
          borderRightColor: en,
          borderBottomColor: en,
          borderLeftColor: en,
          filter: is,
          WebkitFilter: is
        },
        ls = t => as[t];

      function cs(t, e) {
        let n = ls(t);
        return n !== is && (n = yn), n.getAnimatableNone ? n.getAnimatableNone(e) : void 0
      }
      const us = t => /^0[^.\s]+$/.test(t);

      function hs(t) {
        return "number" == typeof t ? 0 === t : null !== t ? "none" === t || "0" === t || us(t) : void 0
      }

      function ds(t, e) {
        return t[e] || t.default || t
      }
      const ps = (t, e, n, s = {}) => o => {
        const r = ds(s, t) || {},
          i = r.delay || s.delay || 0;
        let {
          elapsed: a = 0
        } = s;
        a -= Pe(i);
        const l = function(t, e, n, s) {
            const o = ns(e, n);
            let r;
            r = Array.isArray(n) ? [...n] : [null, n];
            const i = void 0 !== s.from ? s.from : t.get();
            let a;
            const l = [];
            for (let t = 0; t < r.length; t++) null === r[t] && (r[t] = 0 === t ? i : r[t - 1]), hs(r[t]) && l.push(t), "string" == typeof r[t] && "none" !== r[t] && "0" !== r[t] && (a = r[t]);
            if (o && l.length && a)
              for (let t = 0; t < l.length; t++) r[l[t]] = cs(e, a);
            return r
          }(e, t, n, r),
          c = l[0],
          u = l[l.length - 1],
          h = ns(t, c),
          d = ns(t, u);
        xe(h === d, `You are trying to animate ${t} from "${c}" to "${u}". ${c} is not an animatable value - to enable this animation set ${c} to a value animatable to ${u} via the \`style\` property.`);
        let p = {
          keyframes: l,
          velocity: e.getVelocity(),
          ease: "easeOut",
          ...r,
          delay: -a,
          onUpdate: t => {
            e.set(t), r.onUpdate && r.onUpdate(t)
          },
          onComplete: () => {
            o(), r.onComplete && r.onComplete()
          }
        };
        if (function({
            when: t,
            delay: e,
            delayChildren: n,
            staggerChildren: s,
            staggerDirection: o,
            repeat: r,
            repeatType: i,
            repeatDelay: a,
            from: l,
            elapsed: c,
            ...u
          }) {
            return !!Object.keys(u).length
          }(r) || (p = {
            ...p,
            ...es(t, p)
          }), p.duration && (p.duration = Pe(p.duration)), p.repeatDelay && (p.repeatDelay = Pe(p.repeatDelay)), !h || !d || Ee.current || !1 === r.type) return function({
          keyframes: t,
          delay: e,
          onUpdate: n,
          onComplete: s
        }) {
          const o = () => (n && n(t[t.length - 1]), s && s(), {
            time: 0,
            speed: 1,
            duration: 0,
            play: It,
            pause: It,
            stop: It,
            then: t => (t(), Promise.resolve()),
            cancel: It,
            complete: It
          });
          return e ? _n({
            keyframes: [0, 1],
            duration: 0,
            delay: e,
            onComplete: o
          }) : o()
        }(Ee.current ? {
          ...p,
          delay: 0
        } : p);
        if (e.owner && e.owner.current instanceof HTMLElement && !e.owner.getProps().onUpdate) {
          const n = function(t, e, {
            onUpdate: n,
            onComplete: s,
            ...o
          }) {
            if (!Zn() || !Kn.has(e) || o.repeatDelay || "mirror" === o.repeatType || 0 === o.damping || "inertia" === o.type) return !1;
            let r, i, a = !1;
            const l = () => {
              i = new Promise((t => {
                r = t
              }))
            };
            l();
            let {
              keyframes: c,
              duration: u = 300,
              ease: h,
              times: d
            } = o;
            if (((t, e) => "spring" === e.type || "backgroundColor" === t || !Te(e.ease))(e, o)) {
              const t = _n({
                ...o,
                repeat: 0,
                delay: 0
              });
              let e = {
                done: !1,
                value: c[0]
              };
              const n = [];
              let s = 0;
              for (; !e.done && s < 2e4;) e = t.sample(s), n.push(e.value), s += 10;
              d = void 0, c = n, u = s - 10, h = "linear"
            }
            const p = Me(t.owner.current, e, c, {
              ...o,
              duration: u,
              ease: h,
              times: d
            });
            o.syncStart && (p.startTime = zt.isProcessing ? zt.timestamp : document.timeline ? document.timeline.currentTime : performance.now());
            const m = () => p.cancel(),
              f = () => {
                Nt.update(m), r(), l()
              };
            return p.onfinish = () => {
              t.set(function(t, {
                repeat: e,
                repeatType: n = "loop"
              }) {
                return t[e && "loop" !== n && e % 2 == 1 ? 0 : t.length - 1]
              }(c, o)), s && s(), f()
            }, {
              then: (t, e) => i.then(t, e),
              attachTimeline: t => (p.timeline = t, p.onfinish = null, It),
              get time() {
                return we(p.currentTime || 0)
              },
              set time(t) {
                p.currentTime = Pe(t)
              },
              get speed() {
                return p.playbackRate
              },
              set speed(t) {
                p.playbackRate = t
              },
              get duration() {
                return we(u)
              },
              play: () => {
                a || (p.play(), Wt(m))
              },
              pause: () => p.pause(),
              stop: () => {
                if (a = !0, "idle" === p.playState) return;
                const {
                  currentTime: e
                } = p;
                if (e) {
                  const n = _n({
                    ...o,
                    autoplay: !1
                  });
                  t.setWithVelocity(n.sample(e - 10).value, n.sample(e).value, 10)
                }
                f()
              },
              complete: () => p.finish(),
              cancel: f
            }
          }(e, t, p);
          if (n) return n
        }
        return _n(p)
      };

      function ms(t) {
        return Boolean(B(t) && t.add)
      }
      const fs = t => /^\-?\d*\.?\d+$/.test(t);

      function gs(t, e) {
        -1 === t.indexOf(e) && t.push(e)
      }

      function ys(t, e) {
        const n = t.indexOf(e);
        n > -1 && t.splice(n, 1)
      }
      class vs {
        constructor() {
          this.subscriptions = []
        }
        add(t) {
          return gs(this.subscriptions, t), () => ys(this.subscriptions, t)
        }
        notify(t, e, n) {
          const s = this.subscriptions.length;
          if (s)
            if (1 === s) this.subscriptions[0](t, e, n);
            else
              for (let o = 0; o < s; o++) {
                const s = this.subscriptions[o];
                s && s(t, e, n)
              }
        }
        getSize() {
          return this.subscriptions.length
        }
        clear() {
          this.subscriptions.length = 0
        }
      }
      const xs = {
        current: void 0
      };
      class bs {
        constructor(t, e = {}) {
          var n;
          this.version = "10.16.4", this.timeDelta = 0, this.lastUpdated = 0, this.canTrackVelocity = !1, this.events = {}, this.updateAndNotify = (t, e = !0) => {
            this.prev = this.current, this.current = t;
            const {
              delta: n,
              timestamp: s
            } = zt;
            this.lastUpdated !== s && (this.timeDelta = n, this.lastUpdated = s, Nt.postRender(this.scheduleVelocityCheck)), this.prev !== this.current && this.events.change && this.events.change.notify(this.current), this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()), e && this.events.renderRequest && this.events.renderRequest.notify(this.current)
          }, this.scheduleVelocityCheck = () => Nt.postRender(this.velocityCheck), this.velocityCheck = ({
            timestamp: t
          }) => {
            t !== this.lastUpdated && (this.prev = this.current, this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()))
          }, this.hasAnimated = !1, this.prev = this.current = t, this.canTrackVelocity = (n = this.current, !isNaN(parseFloat(n))), this.owner = e.owner
        }
        onChange(t) {
          return this.on("change", t)
        }
        on(t, e) {
          this.events[t] || (this.events[t] = new vs);
          const n = this.events[t].add(e);
          return "change" === t ? () => {
            n(), Nt.read((() => {
              this.events.change.getSize() || this.stop()
            }))
          } : n
        }
        clearListeners() {
          for (const t in this.events) this.events[t].clear()
        }
        attach(t, e) {
          this.passiveEffect = t, this.stopPassiveEffect = e
        }
        set(t, e = !0) {
          e && this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t, e)
        }
        setWithVelocity(t, e, n) {
          this.set(e), this.prev = t, this.timeDelta = n
        }
        jump(t) {
          this.updateAndNotify(t), this.prev = t, this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
        }
        get() {
          return xs.current && xs.current.push(this), this.current
        }
        getPrevious() {
          return this.prev
        }
        getVelocity() {
          return this.canTrackVelocity ? Mn(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0
        }
        start(t) {
          return this.stop(), new Promise((e => {
            this.hasAnimated = !0, this.animation = t(e), this.events.animationStart && this.events.animationStart.notify()
          })).then((() => {
            this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
          }))
        }
        stop() {
          this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
        }
        isAnimating() {
          return !!this.animation
        }
        clearAnimation() {
          delete this.animation
        }
        destroy() {
          this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
        }
      }

      function Ps(t, e) {
        return new bs(t, e)
      }
      const ws = t => e => e.test(t),
        Es = [$, tt, Q, J, nt, et, {
          test: t => "auto" === t,
          parse: t => t
        }],
        Ss = t => Es.find(ws(t)),
        Ts = [...Es, en, yn],
        As = t => Ts.find(ws(t));

      function Cs(t, e, n) {
        t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, Ps(n))
      }

      function Vs(t, e) {
        const n = ge(t, e);
        let {
          transitionEnd: s = {},
          transition: o = {},
          ...r
        } = n ? t.makeTargetAnimatable(n, !1) : {};
        r = {
          ...r,
          ...s
        };
        for (const e in r) Cs(t, e, Lt(r[e]))
      }

      function Ms(t, e) {
        [...e].reverse().forEach((n => {
          const s = t.getVariant(n);
          s && Vs(t, s), t.variantChildren && t.variantChildren.forEach((t => {
            Ms(t, e)
          }))
        }))
      }

      function ks(t, e, n) {
        var s, o;
        const r = Object.keys(e).filter((e => !t.hasValue(e))),
          i = r.length;
        if (i)
          for (let a = 0; a < i; a++) {
            const i = r[a],
              l = e[i];
            let c = null;
            Array.isArray(l) && (c = l[0]), null === c && (c = null !== (o = null !== (s = n[i]) && void 0 !== s ? s : t.readValue(i)) && void 0 !== o ? o : e[i]), null != c && ("string" == typeof c && (fs(c) || us(c)) ? c = parseFloat(c) : !As(c) && yn.test(l) && (c = cs(i, l)), t.addValue(i, Ps(c, {
              owner: t
            })), void 0 === n[i] && (n[i] = c), null !== c && t.setBaseTarget(i, c))
          }
      }

      function Rs(t, e) {
        if (e) return (e[t] || e.default || e).from
      }

      function Ds(t, e, n) {
        const s = {};
        for (const o in t) {
          const t = Rs(o, e);
          if (void 0 !== t) s[o] = t;
          else {
            const t = n.getValue(o);
            t && (s[o] = t.get())
          }
        }
        return s
      }

      function Ls({
        protectedKeys: t,
        needsAnimating: e
      }, n) {
        const s = t.hasOwnProperty(n) && !0 !== e[n];
        return e[n] = !1, s
      }

      function Bs(t, e, {
        delay: n = 0,
        transitionOverride: s,
        type: o
      } = {}) {
        let {
          transition: r = t.getDefaultTransition(),
          transitionEnd: i,
          ...a
        } = t.makeTargetAnimatable(e);
        const l = t.getValue("willChange");
        s && (r = s);
        const c = [],
          u = o && t.animationState && t.animationState.getState()[o];
        for (const e in a) {
          const s = t.getValue(e),
            o = a[e];
          if (!s || void 0 === o || u && Ls(u, e)) continue;
          const i = {
            delay: n,
            elapsed: 0,
            ...r
          };
          if (window.HandoffAppearAnimations && !s.hasAnimated) {
            const n = t.getProps()[ve];
            n && (i.elapsed = window.HandoffAppearAnimations(n, e, s, Nt), i.syncStart = !0)
          }
          s.start(ps(e, s, o, t.shouldReduceMotion && D.has(e) ? {
            type: !1
          } : i));
          const h = s.animation;
          ms(l) && (l.add(e), h.then((() => l.remove(e)))), c.push(h)
        }
        return i && Promise.all(c).then((() => {
          i && Vs(t, i)
        })), c
      }

      function Fs(t, e, n = {}) {
        const s = ge(t, e, n.custom);
        let {
          transition: o = t.getDefaultTransition() || {}
        } = s || {};
        n.transitionOverride && (o = n.transitionOverride);
        const r = s ? () => Promise.all(Bs(t, s, n)) : () => Promise.resolve(),
          i = t.variantChildren && t.variantChildren.size ? (s = 0) => {
            const {
              delayChildren: r = 0,
              staggerChildren: i,
              staggerDirection: a
            } = o;
            return function(t, e, n = 0, s = 0, o = 1, r) {
              const i = [],
                a = (t.variantChildren.size - 1) * s,
                l = 1 === o ? (t = 0) => t * s : (t = 0) => a - t * s;
              return Array.from(t.variantChildren).sort(js).forEach(((t, s) => {
                t.notify("AnimationStart", e), i.push(Fs(t, e, {
                  ...r,
                  delay: n + l(s)
                }).then((() => t.notify("AnimationComplete", e))))
              })), Promise.all(i)
            }(t, e, r + s, i, a, n)
          } : () => Promise.resolve(),
          {
            when: a
          } = o;
        if (a) {
          const [t, e] = "beforeChildren" === a ? [r, i] : [i, r];
          return t().then((() => e()))
        }
        return Promise.all([r(), i(n.delay)])
      }

      function js(t, e) {
        return t.sortNodePosition(e)
      }

      function Is(t, e, n = {}) {
        let s;
        if (t.notify("AnimationStart", e), Array.isArray(e)) {
          const o = e.map((e => Fs(t, e, n)));
          s = Promise.all(o)
        } else if ("string" == typeof e) s = Fs(t, e, n);
        else {
          const o = "function" == typeof e ? ge(t, e, n.custom) : e;
          s = Promise.all(Bs(t, o, n))
        }
        return s.then((() => t.notify("AnimationComplete", e)))
      }
      const Os = [...p].reverse(),
        Us = p.length;

      function Ns(t = !1) {
        return {
          isActive: t,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {}
        }
      }
      let Ws = 0;
      const zs = {
          animation: {
            Feature: class extends re {
              constructor(t) {
                super(t), t.animationState || (t.animationState = function(t) {
                  let e = function(t) {
                    return e => Promise.all(e.map((({
                      animation: e,
                      options: n
                    }) => Is(t, e, n))))
                  }(t);
                  const n = {
                    animate: Ns(!0),
                    whileInView: Ns(),
                    whileHover: Ns(),
                    whileTap: Ns(),
                    whileDrag: Ns(),
                    whileFocus: Ns(),
                    exit: Ns()
                  };
                  let s = !0;
                  const o = (e, n) => {
                    const s = ge(t, n);
                    if (s) {
                      const {
                        transition: t,
                        transitionEnd: n,
                        ...o
                      } = s;
                      e = {
                        ...e,
                        ...o,
                        ...n
                      }
                    }
                    return e
                  };

                  function r(r, i) {
                    const a = t.getProps(),
                      l = t.getVariantContext(!0) || {},
                      c = [],
                      u = new Set;
                    let p = {},
                      m = 1 / 0;
                    for (let e = 0; e < Us; e++) {
                      const y = Os[e],
                        v = n[y],
                        x = void 0 !== a[y] ? a[y] : l[y],
                        b = h(x),
                        P = y === i ? v.isActive : null;
                      !1 === P && (m = e);
                      let w = x === l[y] && x !== a[y] && b;
                      if (w && s && t.manuallyAnimateOnMount && (w = !1), v.protectedKeys = {
                          ...p
                        }, !v.isActive && null === P || !x && !v.prevProp || d(x) || "boolean" == typeof x) continue;
                      const E = (f = v.prevProp, "string" == typeof(g = x) ? g !== f : !!Array.isArray(g) && !fe(g, f));
                      let S = E || y === i && v.isActive && !w && b || e > m && b;
                      const T = Array.isArray(x) ? x : [x];
                      let A = T.reduce(o, {});
                      !1 === P && (A = {});
                      const {
                        prevResolvedValues: C = {}
                      } = v, V = {
                        ...C,
                        ...A
                      }, M = t => {
                        S = !0, u.delete(t), v.needsAnimating[t] = !0
                      };
                      for (const t in V) {
                        const e = A[t],
                          n = C[t];
                        p.hasOwnProperty(t) || (e !== n ? Rt(e) && Rt(n) ? !fe(e, n) || E ? M(t) : v.protectedKeys[t] = !0 : void 0 !== e ? M(t) : u.add(t) : void 0 !== e && u.has(t) ? M(t) : v.protectedKeys[t] = !0)
                      }
                      v.prevProp = x, v.prevResolvedValues = A, v.isActive && (p = {
                        ...p,
                        ...A
                      }), s && t.blockInitialAnimation && (S = !1), S && !w && c.push(...T.map((t => ({
                        animation: t,
                        options: {
                          type: y,
                          ...r
                        }
                      }))))
                    }
                    var f, g;
                    if (u.size) {
                      const e = {};
                      u.forEach((n => {
                        const s = t.getBaseTarget(n);
                        void 0 !== s && (e[n] = s)
                      })), c.push({
                        animation: e
                      })
                    }
                    let y = Boolean(c.length);
                    return s && !1 === a.initial && !t.manuallyAnimateOnMount && (y = !1), s = !1, y ? e(c) : Promise.resolve()
                  }
                  return {
                    animateChanges: r,
                    setActive: function(e, s, o) {
                      var i;
                      if (n[e].isActive === s) return Promise.resolve();
                      null === (i = t.variantChildren) || void 0 === i || i.forEach((t => {
                        var n;
                        return null === (n = t.animationState) || void 0 === n ? void 0 : n.setActive(e, s)
                      })), n[e].isActive = s;
                      const a = r(o, e);
                      for (const t in n) n[t].protectedKeys = {};
                      return a
                    },
                    setAnimateFunction: function(n) {
                      e = n(t)
                    },
                    getState: () => n
                  }
                }(t))
              }
              updateAnimationControlsSubscription() {
                const {
                  animate: t
                } = this.node.getProps();
                this.unmount(), d(t) && (this.unmount = t.subscribe(this.node))
              }
              mount() {
                this.updateAnimationControlsSubscription()
              }
              update() {
                const {
                  animate: t
                } = this.node.getProps(), {
                  animate: e
                } = this.node.prevProps || {};
                t !== e && this.updateAnimationControlsSubscription()
              }
              unmount() {}
            }
          },
          exit: {
            Feature: class extends re {
              constructor() {
                super(...arguments), this.id = Ws++
              }
              update() {
                if (!this.node.presenceContext) return;
                const {
                  isPresent: t,
                  onExitComplete: e,
                  custom: n
                } = this.node.presenceContext, {
                  isPresent: s
                } = this.node.prevPresenceContext || {};
                if (!this.node.animationState || t === s) return;
                const o = this.node.animationState.setActive("exit", !t, {
                  custom: null != n ? n : this.node.getProps().custom
                });
                e && !t && o.then((() => e(this.id)))
              }
              mount() {
                const {
                  register: t
                } = this.node.presenceContext || {};
                t && (this.unmount = t(this.id))
              }
              unmount() {}
            }
          }
        },
        $s = (t, e) => Math.abs(t - e);

      function Hs(t, e) {
        const n = $s(t.x, e.x),
          s = $s(t.y, e.y);
        return Math.sqrt(n ** 2 + s ** 2)
      }
      class Ys {
        constructor(t, e, {
          transformPagePoint: n
        } = {}) {
          if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = () => {
              if (!this.lastMoveEvent || !this.lastMoveEventInfo) return;
              const t = _s(this.lastMoveEventInfo, this.history),
                e = null !== this.startEvent,
                n = Hs(t.offset, {
                  x: 0,
                  y: 0
                }) >= 3;
              if (!e && !n) return;
              const {
                point: s
              } = t, {
                timestamp: o
              } = zt;
              this.history.push({
                ...s,
                timestamp: o
              });
              const {
                onStart: r,
                onMove: i
              } = this.handlers;
              e || (r && r(this.lastMoveEvent, t), this.startEvent = this.lastMoveEvent), i && i(this.lastMoveEvent, t)
            }, this.handlePointerMove = (t, e) => {
              this.lastMoveEvent = t, this.lastMoveEventInfo = Xs(e, this.transformPagePoint), Nt.update(this.updatePoint, !0)
            }, this.handlePointerUp = (t, e) => {
              if (this.end(), !this.lastMoveEvent || !this.lastMoveEventInfo) return;
              const {
                onEnd: n,
                onSessionEnd: s
              } = this.handlers, o = _s("pointercancel" === t.type ? this.lastMoveEventInfo : Xs(e, this.transformPagePoint), this.history);
              this.startEvent && n && n(t, o), s && s(t, o)
            }, !_t(t)) return;
          this.handlers = e, this.transformPagePoint = n;
          const s = Xs(qt(t), this.transformPagePoint),
            {
              point: o
            } = s,
            {
              timestamp: r
            } = zt;
          this.history = [{
            ...o,
            timestamp: r
          }];
          const {
            onSessionStart: i
          } = e;
          i && i(t, _s(s, this.history)), this.removeListeners = Qt(Kt(window, "pointermove", this.handlePointerMove), Kt(window, "pointerup", this.handlePointerUp), Kt(window, "pointercancel", this.handlePointerUp))
        }
        updateHandlers(t) {
          this.handlers = t
        }
        end() {
          this.removeListeners && this.removeListeners(), Wt(this.updatePoint)
        }
      }

      function Xs(t, e) {
        return e ? {
          point: e(t.point)
        } : t
      }

      function Gs(t, e) {
        return {
          x: t.x - e.x,
          y: t.y - e.y
        }
      }

      function _s({
        point: t
      }, e) {
        return {
          point: t,
          delta: Gs(t, Zs(e)),
          offset: Gs(t, qs(e)),
          velocity: Ks(e, .1)
        }
      }

      function qs(t) {
        return t[0]
      }

      function Zs(t) {
        return t[t.length - 1]
      }

      function Ks(t, e) {
        if (t.length < 2) return {
          x: 0,
          y: 0
        };
        let n = t.length - 1,
          s = null;
        const o = Zs(t);
        for (; n >= 0 && (s = t[n], !(o.timestamp - s.timestamp > Pe(e)));) n--;
        if (!s) return {
          x: 0,
          y: 0
        };
        const r = we(o.timestamp - s.timestamp);
        if (0 === r) return {
          x: 0,
          y: 0
        };
        const i = {
          x: (o.x - s.x) / r,
          y: (o.y - s.y) / r
        };
        return i.x === 1 / 0 && (i.x = 0), i.y === 1 / 0 && (i.y = 0), i
      }

      function Js(t) {
        return t.max - t.min
      }

      function Qs(t, e = 0, n = .01) {
        return Math.abs(t - e) <= n
      }

      function to(t, e, n, s = .5) {
        t.origin = s, t.originPoint = nn(e.min, e.max, t.origin), t.scale = Js(n) / Js(e), (Qs(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1), t.translate = nn(n.min, n.max, t.origin) - t.originPoint, (Qs(t.translate) || isNaN(t.translate)) && (t.translate = 0)
      }

      function eo(t, e, n, s) {
        to(t.x, e.x, n.x, s ? s.originX : void 0), to(t.y, e.y, n.y, s ? s.originY : void 0)
      }

      function no(t, e, n) {
        t.min = n.min + e.min, t.max = t.min + Js(e)
      }

      function so(t, e, n) {
        t.min = e.min - n.min, t.max = t.min + Js(e)
      }

      function oo(t, e, n) {
        so(t.x, e.x, n.x), so(t.y, e.y, n.y)
      }

      function ro(t, e, n) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== n ? t.max + n - (t.max - t.min) : void 0
        }
      }

      function io(t, e) {
        let n = e.min - t.min,
          s = e.max - t.max;
        return e.max - e.min < t.max - t.min && ([n, s] = [s, n]), {
          min: n,
          max: s
        }
      }
      const ao = .35;

      function lo(t, e, n) {
        return {
          min: co(t, e),
          max: co(t, n)
        }
      }

      function co(t, e) {
        return "number" == typeof t ? t : t[e] || 0
      }
      const uo = () => ({
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
        ho = () => ({
          x: {
            min: 0,
            max: 0
          },
          y: {
            min: 0,
            max: 0
          }
        });

      function po(t) {
        return [t("x"), t("y")]
      }

      function mo({
        top: t,
        left: e,
        right: n,
        bottom: s
      }) {
        return {
          x: {
            min: e,
            max: n
          },
          y: {
            min: t,
            max: s
          }
        }
      }

      function fo(t) {
        return void 0 === t || 1 === t
      }

      function go({
        scale: t,
        scaleX: e,
        scaleY: n
      }) {
        return !fo(t) || !fo(e) || !fo(n)
      }

      function yo(t) {
        return go(t) || vo(t) || t.z || t.rotate || t.rotateX || t.rotateY
      }

      function vo(t) {
        return xo(t.x) || xo(t.y)
      }

      function xo(t) {
        return t && "0%" !== t
      }

      function bo(t, e, n) {
        return n + e * (t - n)
      }

      function Po(t, e, n, s, o) {
        return void 0 !== o && (t = bo(t, o, s)), bo(t, n, s) + e
      }

      function wo(t, e = 0, n = 1, s, o) {
        t.min = Po(t.min, e, n, s, o), t.max = Po(t.max, e, n, s, o)
      }

      function Eo(t, {
        x: e,
        y: n
      }) {
        wo(t.x, e.translate, e.scale, e.originPoint), wo(t.y, n.translate, n.scale, n.originPoint)
      }

      function So(t) {
        return Number.isInteger(t) || t > 1.0000000000001 || t < .999999999999 ? t : 1
      }

      function To(t, e) {
        t.min = t.min + e, t.max = t.max + e
      }

      function Ao(t, e, [n, s, o]) {
        const r = void 0 !== e[o] ? e[o] : .5,
          i = nn(t.min, t.max, r);
        wo(t, e[n], e[s], i, e.scale)
      }
      const Co = ["x", "scaleX", "originX"],
        Vo = ["y", "scaleY", "originY"];

      function Mo(t, e) {
        Ao(t.x, e, Co), Ao(t.y, e, Vo)
      }

      function ko(t, e) {
        return mo(function(t, e) {
          if (!e) return t;
          const n = e({
              x: t.left,
              y: t.top
            }),
            s = e({
              x: t.right,
              y: t.bottom
            });
          return {
            top: n.y,
            left: n.x,
            bottom: s.y,
            right: s.x
          }
        }(t.getBoundingClientRect(), e))
      }
      const Ro = new WeakMap;
      class Do {
        constructor(t) {
          this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
            x: 0,
            y: 0
          }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = ho(), this.visualElement = t
        }
        start(t, {
          snapToCursor: e = !1
        } = {}) {
          const {
            presenceContext: n
          } = this.visualElement;
          n && !1 === n.isPresent || (this.panSession = new Ys(t, {
            onSessionStart: t => {
              this.stopAnimation(), e && this.snapToCursor(qt(t, "page").point)
            },
            onStart: (t, e) => {
              const {
                drag: n,
                dragPropagation: s,
                onDragStart: o
              } = this.getProps();
              if (n && !s && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = se(n), !this.openGlobalLock)) return;
              this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), po((t => {
                let e = this.getAxisMotionValue(t).get() || 0;
                if (Q.test(e)) {
                  const {
                    projection: n
                  } = this.visualElement;
                  if (n && n.layout) {
                    const s = n.layout.layoutBox[t];
                    s && (e = Js(s) * (parseFloat(e) / 100))
                  }
                }
                this.originPoint[t] = e
              })), o && Nt.update((() => o(t, e)), !1, !0);
              const {
                animationState: r
              } = this.visualElement;
              r && r.setActive("whileDrag", !0)
            },
            onMove: (t, e) => {
              const {
                dragPropagation: n,
                dragDirectionLock: s,
                onDirectionLock: o,
                onDrag: r
              } = this.getProps();
              if (!n && !this.openGlobalLock) return;
              const {
                offset: i
              } = e;
              if (s && null === this.currentDirection) return this.currentDirection = function(t, e = 10) {
                let n = null;
                return Math.abs(t.y) > e ? n = "y" : Math.abs(t.x) > e && (n = "x"), n
              }(i), void(null !== this.currentDirection && o && o(this.currentDirection));
              this.updateAxis("x", e.point, i), this.updateAxis("y", e.point, i), this.visualElement.render(), r && r(t, e)
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
            velocity: s
          } = e;
          this.startAnimation(s);
          const {
            onDragEnd: o
          } = this.getProps();
          o && Nt.update((() => o(t, e)))
        }
        cancel() {
          this.isDragging = !1;
          const {
            projection: t,
            animationState: e
          } = this.visualElement;
          t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
          const {
            dragPropagation: n
          } = this.getProps();
          !n && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), e && e.setActive("whileDrag", !1)
        }
        updateAxis(t, e, n) {
          const {
            drag: s
          } = this.getProps();
          if (!n || !Lo(t, s, this.currentDirection)) return;
          const o = this.getAxisMotionValue(t);
          let r = this.originPoint[t] + n[t];
          this.constraints && this.constraints[t] && (r = function(t, {
            min: e,
            max: n
          }, s) {
            return void 0 !== e && t < e ? t = s ? nn(e, t, s.min) : Math.max(t, e) : void 0 !== n && t > n && (t = s ? nn(n, t, s.max) : Math.min(t, n)), t
          }(r, this.constraints[t], this.elastic[t])), o.set(r)
        }
        resolveConstraints() {
          const {
            dragConstraints: t,
            dragElastic: e
          } = this.getProps(), {
            layout: n
          } = this.visualElement.projection || {}, s = this.constraints;
          t && u(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : this.constraints = !(!t || !n) && function(t, {
            top: e,
            left: n,
            bottom: s,
            right: o
          }) {
            return {
              x: ro(t.x, n, o),
              y: ro(t.y, e, s)
            }
          }(n.layoutBox, t), this.elastic = function(t = ao) {
            return !1 === t ? t = 0 : !0 === t && (t = ao), {
              x: lo(t, "left", "right"),
              y: lo(t, "top", "bottom")
            }
          }(e), s !== this.constraints && n && this.constraints && !this.hasMutatedConstraints && po((t => {
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
          if (!t || !u(t)) return !1;
          const n = t.current;
          be(null !== n, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
          const {
            projection: s
          } = this.visualElement;
          if (!s || !s.layout) return !1;
          const o = function(t, e, n) {
            const s = ko(t, n),
              {
                scroll: o
              } = e;
            return o && (To(s.x, o.offset.x), To(s.y, o.offset.y)), s
          }(n, s.root, this.visualElement.getTransformPagePoint());
          let r = function(t, e) {
            return {
              x: io(t.x, e.x),
              y: io(t.y, e.y)
            }
          }(s.layout.layoutBox, o);
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
            this.hasMutatedConstraints = !!t, t && (r = mo(t))
          }
          return r
        }
        startAnimation(t) {
          const {
            drag: e,
            dragMomentum: n,
            dragElastic: s,
            dragTransition: o,
            dragSnapToOrigin: r,
            onDragTransitionEnd: i
          } = this.getProps(), a = this.constraints || {}, l = po((i => {
            if (!Lo(i, e, this.currentDirection)) return;
            let l = a && a[i] || {};
            r && (l = {
              min: 0,
              max: 0
            });
            const c = s ? 200 : 1e6,
              u = s ? 40 : 1e7,
              h = {
                type: "inertia",
                velocity: n ? t[i] : 0,
                bounceStiffness: c,
                bounceDamping: u,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...o,
                ...l
              };
            return this.startAxisValueAnimation(i, h)
          }));
          return Promise.all(l).then(i)
        }
        startAxisValueAnimation(t, e) {
          const n = this.getAxisMotionValue(t);
          return n.start(ps(t, n, 0, e))
        }
        stopAnimation() {
          po((t => this.getAxisMotionValue(t).stop()))
        }
        getAxisMotionValue(t) {
          const e = "_drag" + t.toUpperCase(),
            n = this.visualElement.getProps();
          return n[e] || this.visualElement.getValue(t, (n.initial ? n.initial[t] : void 0) || 0)
        }
        snapToCursor(t) {
          po((e => {
            const {
              drag: n
            } = this.getProps();
            if (!Lo(e, n, this.currentDirection)) return;
            const {
              projection: s
            } = this.visualElement, o = this.getAxisMotionValue(e);
            if (s && s.layout) {
              const {
                min: n,
                max: r
              } = s.layout.layoutBox[e];
              o.set(t[e] - nn(n, r, .5))
            }
          }))
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          const {
            drag: t,
            dragConstraints: e
          } = this.getProps(), {
            projection: n
          } = this.visualElement;
          if (!u(e) || !n || !this.constraints) return;
          this.stopAnimation();
          const s = {
            x: 0,
            y: 0
          };
          po((t => {
            const e = this.getAxisMotionValue(t);
            if (e) {
              const n = e.get();
              s[t] = function(t, e) {
                let n = .5;
                const s = Js(t),
                  o = Js(e);
                return o > s ? n = En(e.min, e.max - s, t.min) : s > o && (n = En(t.min, t.max - o, e.min)), z(0, 1, n)
              }({
                min: n,
                max: n
              }, this.constraints[t])
            }
          }));
          const {
            transformTemplate: o
          } = this.visualElement.getProps();
          this.visualElement.current.style.transform = o ? o({}, "") : "none", n.root && n.root.updateScroll(), n.updateLayout(), this.resolveConstraints(), po((e => {
            if (!Lo(e, t, null)) return;
            const n = this.getAxisMotionValue(e),
              {
                min: o,
                max: r
              } = this.constraints[e];
            n.set(nn(o, r, s[e]))
          }))
        }
        addListeners() {
          if (!this.visualElement.current) return;
          Ro.set(this.visualElement, this);
          const t = Kt(this.visualElement.current, "pointerdown", (t => {
              const {
                drag: e,
                dragListener: n = !0
              } = this.getProps();
              e && n && this.start(t)
            })),
            e = () => {
              const {
                dragConstraints: t
              } = this.getProps();
              u(t) && (this.constraints = this.resolveRefConstraints())
            },
            {
              projection: n
            } = this.visualElement,
            s = n.addEventListener("measure", e);
          n && !n.layout && (n.root && n.root.updateScroll(), n.updateLayout()), e();
          const o = Gt(window, "resize", (() => this.scalePositionWithinConstraints())),
            r = n.addEventListener("didUpdate", (({
              delta: t,
              hasLayoutChanged: e
            }) => {
              this.isDragging && e && (po((e => {
                const n = this.getAxisMotionValue(e);
                n && (this.originPoint[e] += t[e].translate, n.set(n.get() + t[e].translate))
              })), this.visualElement.render())
            }));
          return () => {
            o(), t(), s(), r && r()
          }
        }
        getProps() {
          const t = this.visualElement.getProps(),
            {
              drag: e = !1,
              dragDirectionLock: n = !1,
              dragPropagation: s = !1,
              dragConstraints: o = !1,
              dragElastic: r = ao,
              dragMomentum: i = !0
            } = t;
          return {
            ...t,
            drag: e,
            dragDirectionLock: n,
            dragPropagation: s,
            dragConstraints: o,
            dragElastic: r,
            dragMomentum: i
          }
        }
      }

      function Lo(t, e, n) {
        return !(!0 !== e && e !== t || null !== n && n !== t)
      }
      const Bo = t => (e, n) => {
        t && Nt.update((() => t(e, n)))
      };

      function Fo() {
        const t = (0, s.useContext)(i);
        if (null === t) return [!0, null];
        const {
          isPresent: e,
          onExitComplete: n,
          register: o
        } = t, r = (0, s.useId)();
        return (0, s.useEffect)((() => o(r)), []), !e && n ? [!1, () => n && n(r)] : [!0]
      }

      function jo() {
        return null === (t = (0, s.useContext)(i)) || t.isPresent;
        var t
      }
      const Io = {
        hasAnimatedSinceResize: !0,
        hasEverUpdated: !1
      };

      function Oo(t, e) {
        return e.max === e.min ? 0 : t / (e.max - e.min) * 100
      }
      const Uo = {
          correct: (t, e) => {
            if (!e.target) return t;
            if ("string" == typeof t) {
              if (!tt.test(t)) return t;
              t = parseFloat(t)
            }
            return `${Oo(t,e.target.x)}% ${Oo(t,e.target.y)}%`
          }
        },
        No = {
          correct: (t, {
            treeScale: e,
            projectionDelta: n
          }) => {
            const s = t,
              o = yn.parse(t);
            if (o.length > 5) return s;
            const r = yn.createTransformer(t),
              i = "number" != typeof o[0] ? 1 : 0,
              a = n.x.scale * e.x,
              l = n.y.scale * e.y;
            o[0 + i] /= a, o[1 + i] /= l;
            const c = nn(a, l, .5);
            return "number" == typeof o[2 + i] && (o[2 + i] /= c), "number" == typeof o[3 + i] && (o[3 + i] /= c), r(o)
          }
        };
      class Wo extends s.Component {
        componentDidMount() {
          const {
            visualElement: t,
            layoutGroup: e,
            switchLayoutGroup: n,
            layoutId: s
          } = this.props, {
            projection: o
          } = t;
          k($o), o && (e.group && e.group.add(o), n && n.register && s && n.register(o), o.root.didUpdate(), o.addEventListener("animationComplete", (() => {
            this.safeToRemove()
          })), o.setOptions({
            ...o.options,
            onExitComplete: () => this.safeToRemove()
          })), Io.hasEverUpdated = !0
        }
        getSnapshotBeforeUpdate(t) {
          const {
            layoutDependency: e,
            visualElement: n,
            drag: s,
            isPresent: o
          } = this.props, r = n.projection;
          return r ? (r.isPresent = o, s || t.layoutDependency !== e || void 0 === e ? r.willUpdate() : this.safeToRemove(), t.isPresent !== o && (o ? r.promote() : r.relegate() || Nt.postRender((() => {
            const t = r.getStack();
            t && t.members.length || this.safeToRemove()
          }))), null) : null
        }
        componentDidUpdate() {
          const {
            projection: t
          } = this.props.visualElement;
          t && (t.root.didUpdate(), queueMicrotask((() => {
            !t.currentAnimation && t.isLead() && this.safeToRemove()
          })))
        }
        componentWillUnmount() {
          const {
            visualElement: t,
            layoutGroup: e,
            switchLayoutGroup: n
          } = this.props, {
            projection: s
          } = t;
          s && (s.scheduleCheckAfterUnmount(), e && e.group && e.group.remove(s), n && n.deregister && n.deregister(s))
        }
        safeToRemove() {
          const {
            safeToRemove: t
          } = this.props;
          t && t()
        }
        render() {
          return null
        }
      }

      function zo(t) {
        const [e, n] = Fo(), o = (0, s.useContext)(P);
        return s.createElement(Wo, {
          ...t,
          layoutGroup: o,
          switchLayoutGroup: (0, s.useContext)(w),
          isPresent: e,
          safeToRemove: n
        })
      }
      const $o = {
          borderRadius: {
            ...Uo,
            applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
          },
          borderTopLeftRadius: Uo,
          borderTopRightRadius: Uo,
          borderBottomLeftRadius: Uo,
          borderBottomRightRadius: Uo,
          boxShadow: No
        },
        Ho = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        Yo = Ho.length,
        Xo = t => "string" == typeof t ? parseFloat(t) : t,
        Go = t => "number" == typeof t || tt.test(t);

      function _o(t, e) {
        return void 0 !== t[e] ? t[e] : t.borderRadius
      }
      const qo = Ko(0, .5, We),
        Zo = Ko(.5, .95, It);

      function Ko(t, e, n) {
        return s => s < t ? 0 : s > e ? 1 : n(En(t, e, s))
      }

      function Jo(t, e) {
        t.min = e.min, t.max = e.max
      }

      function Qo(t, e) {
        Jo(t.x, e.x), Jo(t.y, e.y)
      }

      function tr(t, e, n, s, o) {
        return t = bo(t -= e, 1 / n, s), void 0 !== o && (t = bo(t, 1 / o, s)), t
      }

      function er(t, e, [n, s, o], r, i) {
        ! function(t, e = 0, n = 1, s = .5, o, r = t, i = t) {
          if (Q.test(e) && (e = parseFloat(e), e = nn(i.min, i.max, e / 100) - i.min), "number" != typeof e) return;
          let a = nn(r.min, r.max, s);
          t === r && (a -= e), t.min = tr(t.min, e, n, a, o), t.max = tr(t.max, e, n, a, o)
        }(t, e[n], e[s], e[o], e.scale, r, i)
      }
      const nr = ["x", "scaleX", "originX"],
        sr = ["y", "scaleY", "originY"];

      function or(t, e, n, s) {
        er(t.x, e, nr, n ? n.x : void 0, s ? s.x : void 0), er(t.y, e, sr, n ? n.y : void 0, s ? s.y : void 0)
      }

      function rr(t) {
        return 0 === t.translate && 1 === t.scale
      }

      function ir(t) {
        return rr(t.x) && rr(t.y)
      }

      function ar(t, e) {
        return Math.round(t.x.min) === Math.round(e.x.min) && Math.round(t.x.max) === Math.round(e.x.max) && Math.round(t.y.min) === Math.round(e.y.min) && Math.round(t.y.max) === Math.round(e.y.max)
      }

      function lr(t) {
        return Js(t.x) / Js(t.y)
      }
      class cr {
        constructor() {
          this.members = []
        }
        add(t) {
          gs(this.members, t), t.scheduleRender()
        }
        remove(t) {
          if (ys(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
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
          const n = this.lead;
          if (t !== n && (this.prevLead = n, this.lead = t, t.show(), n)) {
            n.instance && n.scheduleRender(), t.scheduleRender(), t.resumeFrom = n, e && (t.resumeFrom.preserveOpacity = !0), n.snapshot && (t.snapshot = n.snapshot, t.snapshot.latestValues = n.animationValues || n.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            const {
              crossfade: s
            } = t.options;
            !1 === s && n.hide()
          }
        }
        exitAnimationComplete() {
          this.members.forEach((t => {
            const {
              options: e,
              resumingFrom: n
            } = t;
            e.onExitComplete && e.onExitComplete(), n && n.options.onExitComplete && n.options.onExitComplete()
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

      function ur(t, e, n) {
        let s = "";
        const o = t.x.translate / e.x,
          r = t.y.translate / e.y;
        if ((o || r) && (s = `translate3d(${o}px, ${r}px, 0) `), 1 === e.x && 1 === e.y || (s += `scale(${1/e.x}, ${1/e.y}) `), n) {
          const {
            rotate: t,
            rotateX: e,
            rotateY: o
          } = n;
          t && (s += `rotate(${t}deg) `), e && (s += `rotateX(${e}deg) `), o && (s += `rotateY(${o}deg) `)
        }
        const i = t.x.scale * e.x,
          a = t.y.scale * e.y;
        return 1 === i && 1 === a || (s += `scale(${i}, ${a})`), s || "none"
      }
      const hr = (t, e) => t.depth - e.depth;
      class dr {
        constructor() {
          this.children = [], this.isDirty = !1
        }
        add(t) {
          gs(this.children, t), this.isDirty = !0
        }
        remove(t) {
          ys(this.children, t), this.isDirty = !0
        }
        forEach(t) {
          this.isDirty && this.children.sort(hr), this.isDirty = !1, this.children.forEach(t)
        }
      }

      function pr(t, e) {
        const n = performance.now(),
          s = ({
            timestamp: o
          }) => {
            const r = o - n;
            r >= e && (Wt(s), t(r - e))
          };
        return Nt.read(s, !0), () => Wt(s)
      }

      function mr(t) {
        return t instanceof SVGElement && "svg" !== t.tagName
      }

      function fr(t, e, n) {
        const s = B(t) ? t : Ps(t);
        return s.start(ps("", s, e, n)), s.animation
      }
      const gr = ["", "X", "Y", "Z"];
      let yr = 0;
      const vr = {
        type: "projectionFrame",
        totalNodes: 0,
        resolvedTargetDeltas: 0,
        recalculatedProjection: 0
      };

      function xr({
        attachResizeListener: t,
        defaultParent: e,
        measureScroll: n,
        checkIsScrollRoot: s,
        resetTransform: o
      }) {
        return class {
          constructor(t = {}, n = (null == e ? void 0 : e())) {
            this.id = yr++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = {
              x: 1,
              y: 1
            }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.updateScheduled = !1, this.checkUpdateFailed = () => {
              this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
            }, this.updateProjection = () => {
              var t;
              vr.totalNodes = vr.resolvedTargetDeltas = vr.recalculatedProjection = 0, this.nodes.forEach(wr), this.nodes.forEach(Mr), this.nodes.forEach(kr), this.nodes.forEach(Er), t = vr, window.MotionDebug && window.MotionDebug.record(t)
            }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = t, this.root = n ? n.root || n : this, this.path = n ? [...n.path, n] : [], this.parent = n, this.depth = n ? n.depth + 1 : 0;
            for (let t = 0; t < this.path.length; t++) this.path[t].shouldResetTransform = !0;
            this.root === this && (this.nodes = new dr)
          }
          addEventListener(t, e) {
            return this.eventHandlers.has(t) || this.eventHandlers.set(t, new vs), this.eventHandlers.get(t).add(e)
          }
          notifyListeners(t, ...e) {
            const n = this.eventHandlers.get(t);
            n && n.notify(...e)
          }
          hasListeners(t) {
            return this.eventHandlers.has(t)
          }
          mount(e, n = this.root.hasTreeAnimated) {
            if (this.instance) return;
            this.isSVG = mr(e), this.instance = e;
            const {
              layoutId: s,
              layout: o,
              visualElement: r
            } = this.options;
            if (r && !r.current && r.mount(e), this.root.nodes.add(this), this.parent && this.parent.children.add(this), n && (o || s) && (this.isLayoutDirty = !0), t) {
              let n;
              const s = () => this.root.updateBlockedByResize = !1;
              t(e, (() => {
                this.root.updateBlockedByResize = !0, n && n(), n = pr(s, 250), Io.hasAnimatedSinceResize && (Io.hasAnimatedSinceResize = !1, this.nodes.forEach(Vr))
              }))
            }
            s && this.root.registerSharedNode(s, this), !1 !== this.options.animate && r && (s || o) && this.addEventListener("didUpdate", (({
              delta: t,
              hasLayoutChanged: e,
              hasRelativeTargetChanged: n,
              layout: s
            }) => {
              if (this.isTreeAnimationBlocked()) return this.target = void 0, void(this.relativeTarget = void 0);
              const o = this.options.transition || r.getDefaultTransition() || jr,
                {
                  onLayoutAnimationStart: i,
                  onLayoutAnimationComplete: a
                } = r.getProps(),
                l = !this.targetLayout || !ar(this.targetLayout, s) || n,
                c = !e && n;
              if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || c || e && (l || !this.currentAnimation)) {
                this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(t, c);
                const e = {
                  ...ds(o, "layout"),
                  onPlay: i,
                  onComplete: a
                };
                (r.shouldReduceMotion || this.options.layoutRoot) && (e.delay = 0, e.type = !1), this.startAnimation(e)
              } else e || Vr(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
              this.targetLayout = s
            }))
          }
          unmount() {
            this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
            const t = this.getStack();
            t && t.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, Wt(this.updateProjection)
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
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
          }
          startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(Rr), this.animationId++)
          }
          getTransformTemplate() {
            const {
              visualElement: t
            } = this.options;
            return t && t.getProps().transformTemplate
          }
          willUpdate(t = !0) {
            if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) return void(this.options.onExitComplete && this.options.onExitComplete());
            if (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
            this.isLayoutDirty = !0;
            for (let t = 0; t < this.path.length; t++) {
              const e = this.path[t];
              e.shouldResetTransform = !0, e.updateScroll("snapshot"), e.options.layoutRoot && e.willUpdate(!1)
            }
            const {
              layoutId: e,
              layout: n
            } = this.options;
            if (void 0 === e && !n) return;
            const s = this.getTransformTemplate();
            this.prevTransformTemplateValue = s ? s(this.latestValues, "") : void 0, this.updateSnapshot(), t && this.notifyListeners("willUpdate")
          }
          update() {
            if (this.updateScheduled = !1, this.isUpdateBlocked()) return this.unblockUpdate(), this.clearAllSnapshots(), void this.nodes.forEach(Tr);
            this.isUpdating || this.nodes.forEach(Ar), this.isUpdating = !1, this.nodes.forEach(Cr), this.nodes.forEach(br), this.nodes.forEach(Pr), this.clearAllSnapshots();
            const t = performance.now();
            zt.delta = z(0, 1e3 / 60, t - zt.timestamp), zt.timestamp = t, zt.isProcessing = !0, $t.update.process(zt), $t.preRender.process(zt), $t.render.process(zt), zt.isProcessing = !1
          }
          didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0, queueMicrotask((() => this.update())))
          }
          clearAllSnapshots() {
            this.nodes.forEach(Sr), this.sharedNodes.forEach(Dr)
          }
          scheduleUpdateProjection() {
            Nt.preRender(this.updateProjection, !1, !0)
          }
          scheduleCheckAfterUnmount() {
            Nt.postRender((() => {
              this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            }))
          }
          updateSnapshot() {
            !this.snapshot && this.instance && (this.snapshot = this.measure())
          }
          updateLayout() {
            if (!this.instance) return;
            if (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead() || this.isLayoutDirty)) return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let t = 0; t < this.path.length; t++) this.path[t].updateScroll();
            const t = this.layout;
            this.layout = this.measure(!1), this.layoutCorrected = ho(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
            const {
              visualElement: e
            } = this.options;
            e && e.notify("LayoutMeasure", this.layout.layoutBox, t ? t.layoutBox : void 0)
          }
          updateScroll(t = "measure") {
            let e = Boolean(this.options.layoutScroll && this.instance);
            this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === t && (e = !1), e && (this.scroll = {
              animationId: this.root.animationId,
              phase: t,
              isRoot: s(this.instance),
              offset: n(this.instance)
            })
          }
          resetTransform() {
            if (!o) return;
            const t = this.isLayoutDirty || this.shouldResetTransform,
              e = this.projectionDelta && !ir(this.projectionDelta),
              n = this.getTransformTemplate(),
              s = n ? n(this.latestValues, "") : void 0,
              r = s !== this.prevTransformTemplateValue;
            t && (e || yo(this.latestValues) || r) && (o(this.instance, s), this.shouldResetTransform = !1, this.scheduleRender())
          }
          measure(t = !0) {
            const e = this.measurePageBox();
            let n = this.removeElementScroll(e);
            var s;
            return t && (n = this.removeTransform(n)), Ur((s = n).x), Ur(s.y), {
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
            if (!t) return ho();
            const e = t.measureViewportBox(),
              {
                scroll: n
              } = this.root;
            return n && (To(e.x, n.offset.x), To(e.y, n.offset.y)), e
          }
          removeElementScroll(t) {
            const e = ho();
            Qo(e, t);
            for (let n = 0; n < this.path.length; n++) {
              const s = this.path[n],
                {
                  scroll: o,
                  options: r
                } = s;
              if (s !== this.root && o && r.layoutScroll) {
                if (o.isRoot) {
                  Qo(e, t);
                  const {
                    scroll: n
                  } = this.root;
                  n && (To(e.x, -n.offset.x), To(e.y, -n.offset.y))
                }
                To(e.x, o.offset.x), To(e.y, o.offset.y)
              }
            }
            return e
          }
          applyTransform(t, e = !1) {
            const n = ho();
            Qo(n, t);
            for (let t = 0; t < this.path.length; t++) {
              const s = this.path[t];
              !e && s.options.layoutScroll && s.scroll && s !== s.root && Mo(n, {
                x: -s.scroll.offset.x,
                y: -s.scroll.offset.y
              }), yo(s.latestValues) && Mo(n, s.latestValues)
            }
            return yo(this.latestValues) && Mo(n, this.latestValues), n
          }
          removeTransform(t) {
            const e = ho();
            Qo(e, t);
            for (let t = 0; t < this.path.length; t++) {
              const n = this.path[t];
              if (!n.instance) continue;
              if (!yo(n.latestValues)) continue;
              go(n.latestValues) && n.updateSnapshot();
              const s = ho();
              Qo(s, n.measurePageBox()), or(e, n.latestValues, n.snapshot ? n.snapshot.layoutBox : void 0, s)
            }
            return yo(this.latestValues) && or(e, this.latestValues), e
          }
          setTargetDelta(t) {
            this.targetDelta = t, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
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
          forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== zt.timestamp && this.relativeParent.resolveTargetDelta(!0)
          }
          resolveTargetDelta(t = !1) {
            var e;
            const n = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = n.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = n.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = n.isSharedProjectionDirty);
            const s = Boolean(this.resumingFrom) || this !== n;
            if (!(t || s && this.isSharedProjectionDirty || this.isProjectionDirty || (null === (e = this.parent) || void 0 === e ? void 0 : e.isProjectionDirty) || this.attemptToResolveRelativeTarget)) return;
            const {
              layout: o,
              layoutId: r
            } = this.options;
            if (this.layout && (o || r)) {
              if (this.resolvedRelativeTargetAt = zt.timestamp, !this.targetDelta && !this.relativeTarget) {
                const t = this.getClosestProjectingParent();
                t && t.layout && 1 !== this.animationProgress ? (this.relativeParent = t, this.forceRelativeParentToResolveTarget(), this.relativeTarget = ho(), this.relativeTargetOrigin = ho(), oo(this.relativeTargetOrigin, this.layout.layoutBox, t.layout.layoutBox), Qo(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
              }
              if (this.relativeTarget || this.targetDelta) {
                var i, a, l;
                if (this.target || (this.target = ho(), this.targetWithTransforms = ho()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), i = this.target, a = this.relativeTarget, l = this.relativeParent.target, no(i.x, a.x, l.x), no(i.y, a.y, l.y)) : this.targetDelta ? (Boolean(this.resumingFrom) ? this.target = this.applyTransform(this.layout.layoutBox) : Qo(this.target, this.layout.layoutBox), Eo(this.target, this.targetDelta)) : Qo(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
                  this.attemptToResolveRelativeTarget = !1;
                  const t = this.getClosestProjectingParent();
                  t && Boolean(t.resumingFrom) === Boolean(this.resumingFrom) && !t.options.layoutScroll && t.target && 1 !== this.animationProgress ? (this.relativeParent = t, this.forceRelativeParentToResolveTarget(), this.relativeTarget = ho(), this.relativeTargetOrigin = ho(), oo(this.relativeTargetOrigin, this.target, t.target), Qo(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                vr.resolvedTargetDeltas++
              }
            }
          }
          getClosestProjectingParent() {
            if (this.parent && !go(this.parent.latestValues) && !vo(this.parent.latestValues)) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
          }
          isProjecting() {
            return Boolean((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
          }
          calcProjection() {
            var t;
            const e = this.getLead(),
              n = Boolean(this.resumingFrom) || this !== e;
            let s = !0;
            if ((this.isProjectionDirty || (null === (t = this.parent) || void 0 === t ? void 0 : t.isProjectionDirty)) && (s = !1), n && (this.isSharedProjectionDirty || this.isTransformDirty) && (s = !1), this.resolvedRelativeTargetAt === zt.timestamp && (s = !1), s) return;
            const {
              layout: o,
              layoutId: r
            } = this.options;
            if (this.isTreeAnimating = Boolean(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !o && !r) return;
            Qo(this.layoutCorrected, this.layout.layoutBox);
            const i = this.treeScale.x,
              a = this.treeScale.y;
            ! function(t, e, n, s = !1) {
              const o = n.length;
              if (!o) return;
              let r, i;
              e.x = e.y = 1;
              for (let a = 0; a < o; a++) {
                r = n[a], i = r.projectionDelta;
                const o = r.instance;
                o && o.style && "contents" === o.style.display || (s && r.options.layoutScroll && r.scroll && r !== r.root && Mo(t, {
                  x: -r.scroll.offset.x,
                  y: -r.scroll.offset.y
                }), i && (e.x *= i.x.scale, e.y *= i.y.scale, Eo(t, i)), s && yo(r.latestValues) && Mo(t, r.latestValues))
              }
              e.x = So(e.x), e.y = So(e.y)
            }(this.layoutCorrected, this.treeScale, this.path, n), !e.layout || e.target || 1 === this.treeScale.x && 1 === this.treeScale.y || (e.target = e.layout.layoutBox);
            const {
              target: l
            } = e;
            if (!l) return void(this.projectionTransform && (this.projectionDelta = uo(), this.projectionTransform = "none", this.scheduleRender()));
            this.projectionDelta || (this.projectionDelta = uo(), this.projectionDeltaWithTransform = uo());
            const c = this.projectionTransform;
            eo(this.projectionDelta, this.layoutCorrected, l, this.latestValues), this.projectionTransform = ur(this.projectionDelta, this.treeScale), this.projectionTransform === c && this.treeScale.x === i && this.treeScale.y === a || (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", l)), vr.recalculatedProjection++
          }
          hide() {
            this.isVisible = !1
          }
          show() {
            this.isVisible = !0
          }
          scheduleRender(t = !0) {
            if (this.options.scheduleRender && this.options.scheduleRender(), t) {
              const t = this.getStack();
              t && t.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
          }
          setAnimationOrigin(t, e = !1) {
            const n = this.snapshot,
              s = n ? n.latestValues : {},
              o = {
                ...this.latestValues
              },
              r = uo();
            this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !e;
            const i = ho(),
              a = (n ? n.source : void 0) !== (this.layout ? this.layout.source : void 0),
              l = this.getStack(),
              c = !l || l.members.length <= 1,
              u = Boolean(a && !c && !0 === this.options.crossfade && !this.path.some(Fr));
            let h;
            this.animationProgress = 0, this.mixTargetDelta = e => {
              const n = e / 1e3;
              var l, d, p, m, f, g;
              Lr(r.x, t.x, n), Lr(r.y, t.y, n), this.setTargetDelta(r), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (oo(i, this.layout.layoutBox, this.relativeParent.layout.layoutBox), p = this.relativeTarget, m = this.relativeTargetOrigin, f = i, g = n, Br(p.x, m.x, f.x, g), Br(p.y, m.y, f.y, g), h && (l = this.relativeTarget, d = h, l.x.min === d.x.min && l.x.max === d.x.max && l.y.min === d.y.min && l.y.max === d.y.max) && (this.isProjectionDirty = !1), h || (h = ho()), Qo(h, this.relativeTarget)), a && (this.animationValues = o, function(t, e, n, s, o, r) {
                o ? (t.opacity = nn(0, void 0 !== n.opacity ? n.opacity : 1, qo(s)), t.opacityExit = nn(void 0 !== e.opacity ? e.opacity : 1, 0, Zo(s))) : r && (t.opacity = nn(void 0 !== e.opacity ? e.opacity : 1, void 0 !== n.opacity ? n.opacity : 1, s));
                for (let o = 0; o < Yo; o++) {
                  const r = `border${Ho[o]}Radius`;
                  let i = _o(e, r),
                    a = _o(n, r);
                  void 0 === i && void 0 === a || (i || (i = 0), a || (a = 0), 0 === i || 0 === a || Go(i) === Go(a) ? (t[r] = Math.max(nn(Xo(i), Xo(a), s), 0), (Q.test(a) || Q.test(i)) && (t[r] += "%")) : t[r] = a)
                }(e.rotate || n.rotate) && (t.rotate = nn(e.rotate || 0, n.rotate || 0, s))
              }(o, s, this.latestValues, n, u, c)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = n
            }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
          }
          startAnimation(t) {
            this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (Wt(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = Nt.update((() => {
              Io.hasAnimatedSinceResize = !0, this.currentAnimation = fr(0, 1e3, {
                ...t,
                onUpdate: e => {
                  this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e)
                },
                onComplete: () => {
                  t.onComplete && t.onComplete(), this.completeAnimation()
                }
              }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
            }))
          }
          completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
            const t = this.getStack();
            t && t.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
          }
          finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(1e3), this.currentAnimation.stop()), this.completeAnimation()
          }
          applyTransformsToTarget() {
            const t = this.getLead();
            let {
              targetWithTransforms: e,
              target: n,
              layout: s,
              latestValues: o
            } = t;
            if (e && n && s) {
              if (this !== t && this.layout && s && Nr(this.options.animationType, this.layout.layoutBox, s.layoutBox)) {
                n = this.target || ho();
                const e = Js(this.layout.layoutBox.x);
                n.x.min = t.target.x.min, n.x.max = n.x.min + e;
                const s = Js(this.layout.layoutBox.y);
                n.y.min = t.target.y.min, n.y.max = n.y.min + s
              }
              Qo(e, n), Mo(e, o), eo(this.projectionDeltaWithTransform, this.layoutCorrected, e, o)
            }
          }
          registerSharedNode(t, e) {
            this.sharedNodes.has(t) || this.sharedNodes.set(t, new cr), this.sharedNodes.get(t).add(e);
            const n = e.options.initialPromotionConfig;
            e.promote({
              transition: n ? n.transition : void 0,
              preserveFollowOpacity: n && n.shouldPreserveFollowOpacity ? n.shouldPreserveFollowOpacity(e) : void 0
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
            const s = this.getStack();
            s && s.promote(this, n), t && (this.projectionDelta = void 0, this.needsReset = !0), e && this.setOptions({
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
            const s = {};
            for (let e = 0; e < gr.length; e++) {
              const o = "rotate" + gr[e];
              n[o] && (s[o] = n[o], t.setStaticValue(o, 0))
            }
            t.render();
            for (const e in s) t.setStaticValue(e, s[e]);
            t.scheduleRender()
          }
          getProjectionStyles(t = {}) {
            var e, n;
            const s = {};
            if (!this.instance || this.isSVG) return s;
            if (!this.isVisible) return {
              visibility: "hidden"
            };
            s.visibility = "";
            const o = this.getTransformTemplate();
            if (this.needsReset) return this.needsReset = !1, s.opacity = "", s.pointerEvents = Bt(t.pointerEvents) || "", s.transform = o ? o(this.latestValues, "") : "none", s;
            const r = this.getLead();
            if (!this.projectionDelta || !this.layout || !r.target) {
              const e = {};
              return this.options.layoutId && (e.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1, e.pointerEvents = Bt(t.pointerEvents) || ""), this.hasProjected && !yo(this.latestValues) && (e.transform = o ? o({}, "") : "none", this.hasProjected = !1), e
            }
            const i = r.animationValues || r.latestValues;
            this.applyTransformsToTarget(), s.transform = ur(this.projectionDeltaWithTransform, this.treeScale, i), o && (s.transform = o(i, s.transform));
            const {
              x: a,
              y: l
            } = this.projectionDelta;
            s.transformOrigin = `${100*a.origin}% ${100*l.origin}% 0`, r.animationValues ? s.opacity = r === this ? null !== (n = null !== (e = i.opacity) && void 0 !== e ? e : this.latestValues.opacity) && void 0 !== n ? n : 1 : this.preserveOpacity ? this.latestValues.opacity : i.opacityExit : s.opacity = r === this ? void 0 !== i.opacity ? i.opacity : "" : void 0 !== i.opacityExit ? i.opacityExit : 0;
            for (const t in M) {
              if (void 0 === i[t]) continue;
              const {
                correct: e,
                applyTo: n
              } = M[t], o = "none" === s.transform ? i[t] : e(i[t], r);
              if (n) {
                const t = n.length;
                for (let e = 0; e < t; e++) s[n[e]] = o
              } else s[t] = o
            }
            return this.options.layoutId && (s.pointerEvents = r === this ? Bt(t.pointerEvents) || "" : "none"), s
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
          }
          resetTree() {
            this.root.nodes.forEach((t => {
              var e;
              return null === (e = t.currentAnimation) || void 0 === e ? void 0 : e.stop()
            })), this.root.nodes.forEach(Tr), this.root.sharedNodes.clear()
          }
        }
      }

      function br(t) {
        t.updateLayout()
      }

      function Pr(t) {
        var e;
        const n = (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) || t.snapshot;
        if (t.isLead() && t.layout && n && t.hasListeners("didUpdate")) {
          const {
            layoutBox: e,
            measuredBox: s
          } = t.layout, {
            animationType: o
          } = t.options, r = n.source !== t.layout.source;
          "size" === o ? po((t => {
            const s = r ? n.measuredBox[t] : n.layoutBox[t],
              o = Js(s);
            s.min = e[t].min, s.max = s.min + o
          })) : Nr(o, n.layoutBox, e) && po((s => {
            const o = r ? n.measuredBox[s] : n.layoutBox[s],
              i = Js(e[s]);
            o.max = o.min + i, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[s].max = t.relativeTarget[s].min + i)
          }));
          const i = uo();
          eo(i, e, n.layoutBox);
          const a = uo();
          r ? eo(a, t.applyTransform(s, !0), n.measuredBox) : eo(a, e, n.layoutBox);
          const l = !ir(i);
          let c = !1;
          if (!t.resumeFrom) {
            const s = t.getClosestProjectingParent();
            if (s && !s.resumeFrom) {
              const {
                snapshot: o,
                layout: r
              } = s;
              if (o && r) {
                const i = ho();
                oo(i, n.layoutBox, o.layoutBox);
                const a = ho();
                oo(a, e, r.layoutBox), ar(i, a) || (c = !0), s.options.layoutRoot && (t.relativeTarget = a, t.relativeTargetOrigin = i, t.relativeParent = s)
              }
            }
          }
          t.notifyListeners("didUpdate", {
            layout: e,
            snapshot: n,
            delta: a,
            layoutDelta: i,
            hasLayoutChanged: l,
            hasRelativeTargetChanged: c
          })
        } else if (t.isLead()) {
          const {
            onExitComplete: e
          } = t.options;
          e && e()
        }
        t.options.transition = void 0
      }

      function wr(t) {
        vr.totalNodes++, t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = Boolean(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
      }

      function Er(t) {
        t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
      }

      function Sr(t) {
        t.clearSnapshot()
      }

      function Tr(t) {
        t.clearMeasurements()
      }

      function Ar(t) {
        t.isLayoutDirty = !1
      }

      function Cr(t) {
        const {
          visualElement: e
        } = t.options;
        e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform()
      }

      function Vr(t) {
        t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = !0
      }

      function Mr(t) {
        t.resolveTargetDelta()
      }

      function kr(t) {
        t.calcProjection()
      }

      function Rr(t) {
        t.resetRotation()
      }

      function Dr(t) {
        t.removeLeadSnapshot()
      }

      function Lr(t, e, n) {
        t.translate = nn(e.translate, 0, n), t.scale = nn(e.scale, 1, n), t.origin = e.origin, t.originPoint = e.originPoint
      }

      function Br(t, e, n, s) {
        t.min = nn(e.min, n.min, s), t.max = nn(e.max, n.max, s)
      }

      function Fr(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit
      }
      const jr = {
          duration: .45,
          ease: [.4, 0, .1, 1]
        },
        Ir = t => "undefined" != typeof navigator && navigator.userAgent.toLowerCase().includes(t),
        Or = Ir("applewebkit/") && !Ir("chrome/") ? Math.round : It;

      function Ur(t) {
        t.min = Or(t.min), t.max = Or(t.max)
      }

      function Nr(t, e, n) {
        return "position" === t || "preserve-aspect" === t && !Qs(lr(e), lr(n), .2)
      }
      const Wr = xr({
          attachResizeListener: (t, e) => Gt(t, "resize", e),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop
          }),
          checkIsScrollRoot: () => !0
        }),
        zr = {
          current: void 0
        },
        $r = xr({
          measureScroll: t => ({
            x: t.scrollLeft,
            y: t.scrollTop
          }),
          defaultParent: () => {
            if (!zr.current) {
              const t = new Wr({});
              t.mount(window), t.setOptions({
                layoutScroll: !0
              }), zr.current = t
            }
            return zr.current
          },
          resetTransform: (t, e) => {
            t.style.transform = void 0 !== e ? e : "none"
          },
          checkIsScrollRoot: t => Boolean("fixed" === window.getComputedStyle(t).position)
        }),
        Hr = {
          pan: {
            Feature: class extends re {
              constructor() {
                super(...arguments), this.removePointerDownListener = It
              }
              onPointerDown(t) {
                this.session = new Ys(t, this.createPanHandlers(), {
                  transformPagePoint: this.node.getTransformPagePoint()
                })
              }
              createPanHandlers() {
                const {
                  onPanSessionStart: t,
                  onPanStart: e,
                  onPan: n,
                  onPanEnd: s
                } = this.node.getProps();
                return {
                  onSessionStart: Bo(t),
                  onStart: Bo(e),
                  onMove: n,
                  onEnd: (t, e) => {
                    delete this.session, s && Nt.update((() => s(t, e)))
                  }
                }
              }
              mount() {
                this.removePointerDownListener = Kt(this.node.current, "pointerdown", (t => this.onPointerDown(t)))
              }
              update() {
                this.session && this.session.updateHandlers(this.createPanHandlers())
              }
              unmount() {
                this.removePointerDownListener(), this.session && this.session.end()
              }
            }
          },
          drag: {
            Feature: class extends re {
              constructor(t) {
                super(t), this.removeGroupControls = It, this.removeListeners = It, this.controls = new Do(t)
              }
              mount() {
                const {
                  dragControls: t
                } = this.node.getProps();
                t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || It
              }
              unmount() {
                this.removeGroupControls(), this.removeListeners()
              }
            },
            ProjectionNode: $r,
            MeasureLayout: zo
          }
        },
        Yr = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;

      function Xr(t, e, n = 1) {
        be(n <= 4, `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`);
        const [s, o] = function(t) {
          const e = Yr.exec(t);
          if (!e) return [, ];
          const [, n, s] = e;
          return [n, s]
        }(t);
        if (!s) return;
        const r = window.getComputedStyle(e).getPropertyValue(s);
        if (r) {
          const t = r.trim();
          return fs(t) ? parseFloat(t) : t
        }
        return N(o) ? Xr(o, e, n + 1) : o
      }
      const Gr = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"]),
        _r = t => Gr.has(t),
        qr = t => t === $ || t === tt,
        Zr = (t, e) => parseFloat(t.split(", ")[e]),
        Kr = (t, e) => (n, {
          transform: s
        }) => {
          if ("none" === s || !s) return 0;
          const o = s.match(/^matrix3d\((.+)\)$/);
          if (o) return Zr(o[1], e); {
            const e = s.match(/^matrix\((.+)\)$/);
            return e ? Zr(e[1], t) : 0
          }
        },
        Jr = new Set(["x", "y", "z"]),
        Qr = R.filter((t => !Jr.has(t))),
        ti = {
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
          x: Kr(4, 13),
          y: Kr(5, 14)
        };
      ti.translateX = ti.x, ti.translateY = ti.y;

      function ei(t, e, n, s) {
        return (t => Object.keys(t).some(_r))(e) ? ((t, e, n = {}, s = {}) => {
          e = {
            ...e
          }, s = {
            ...s
          };
          const o = Object.keys(e).filter(_r);
          let r = [],
            i = !1;
          const l = [];
          if (o.forEach((o => {
              const a = t.getValue(o);
              if (!t.hasValue(o)) return;
              let c = n[o],
                u = Ss(c);
              const h = e[o];
              let d;
              if (Rt(h)) {
                const t = h.length,
                  e = null === h[0] ? 1 : 0;
                c = h[e], u = Ss(c);
                for (let n = e; n < t && null !== h[n]; n++) d ? be(Ss(h[n]) === d, "All keyframes must be of the same type") : (d = Ss(h[n]), be(d === u || qr(u) && qr(d), "Keyframes must be of the same dimension as the current value"))
              } else d = Ss(h);
              if (u !== d)
                if (qr(u) && qr(d)) {
                  const t = a.get();
                  "string" == typeof t && a.set(parseFloat(t)), "string" == typeof h ? e[o] = parseFloat(h) : Array.isArray(h) && d === tt && (e[o] = h.map(parseFloat))
                } else(null == u ? void 0 : u.transform) && (null == d ? void 0 : d.transform) && (0 === c || 0 === h) ? 0 === c ? a.set(d.transform(c)) : e[o] = u.transform(h) : (i || (r = function(t) {
                  const e = [];
                  return Qr.forEach((n => {
                    const s = t.getValue(n);
                    void 0 !== s && (e.push([n, s.get()]), s.set(n.startsWith("scale") ? 1 : 0))
                  })), e.length && t.render(), e
                }(t), i = !0), l.push(o), s[o] = void 0 !== s[o] ? s[o] : e[o], a.jump(h))
            })), l.length) {
            const n = l.indexOf("height") >= 0 ? window.pageYOffset : null,
              o = ((t, e, n) => {
                const s = e.measureViewportBox(),
                  o = e.current,
                  r = getComputedStyle(o),
                  {
                    display: i
                  } = r,
                  a = {};
                "none" === i && e.setStaticValue("display", t.display || "block"), n.forEach((t => {
                  a[t] = ti[t](s, r)
                })), e.render();
                const l = e.measureViewportBox();
                return n.forEach((n => {
                  const s = e.getValue(n);
                  s && s.jump(a[n]), t[n] = ti[n](l, r)
                })), t
              })(e, t, l);
            return r.length && r.forEach((([e, n]) => {
              t.getValue(e).set(n)
            })), t.render(), a && null !== n && window.scrollTo({
              top: n
            }), {
              target: o,
              transitionEnd: s
            }
          }
          return {
            target: e,
            transitionEnd: s
          }
        })(t, e, n, s) : {
          target: e,
          transitionEnd: s
        }
      }
      const ni = {
          current: null
        },
        si = {
          current: !1
        };

      function oi() {
        if (si.current = !0, a)
          if (window.matchMedia) {
            const t = window.matchMedia("(prefers-reduced-motion)"),
              e = () => ni.current = t.matches;
            t.addListener(e), e()
          } else ni.current = !1
      }
      const ri = new WeakMap,
        ii = Object.keys(x),
        ai = ii.length,
        li = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"],
        ci = m.length;
      class ui {
        constructor({
          parent: t,
          props: e,
          presenceContext: n,
          reducedMotionConfig: s,
          visualState: o
        }, r = {}) {
          this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
            this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
          }, this.scheduleRender = () => Nt.render(this.render, !1, !0);
          const {
            latestValues: i,
            renderState: a
          } = o;
          this.latestValues = i, this.baseTarget = {
            ...i
          }, this.initialValues = e.initial ? {
            ...i
          } : {}, this.renderState = a, this.parent = t, this.props = e, this.presenceContext = n, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = s, this.options = r, this.isControllingVariants = f(e), this.isVariantNode = g(e), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = Boolean(t && t.current);
          const {
            willChange: l,
            ...c
          } = this.scrapeMotionValuesFromProps(e, {});
          for (const t in c) {
            const e = c[t];
            void 0 !== i[t] && B(e) && (e.set(i[t], !1), ms(l) && l.add(t))
          }
        }
        scrapeMotionValuesFromProps(t, e) {
          return {}
        }
        mount(t) {
          this.current = t, ri.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach(((t, e) => this.bindToMotionValue(e, t))), si.current || oi(), this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || ni.current), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext)
        }
        unmount() {
          ri.delete(this.current), this.projection && this.projection.unmount(), Wt(this.notifyUpdate), Wt(this.render), this.valueSubscriptions.forEach((t => t())), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
          for (const t in this.events) this.events[t].clear();
          for (const t in this.features) this.features[t].unmount();
          this.current = null
        }
        bindToMotionValue(t, e) {
          const n = D.has(t),
            s = e.on("change", (e => {
              this.latestValues[t] = e, this.props.onUpdate && Nt.update(this.notifyUpdate, !1, !0), n && this.projection && (this.projection.isTransformDirty = !0)
            })),
            o = e.on("renderRequest", this.scheduleRender);
          this.valueSubscriptions.set(t, (() => {
            s(), o()
          }))
        }
        sortNodePosition(t) {
          return this.current && this.sortInstanceNodePosition && this.type === t.type ? this.sortInstanceNodePosition(this.current, t.current) : 0
        }
        loadFeatures({
          children: t,
          ...e
        }, n, s, o) {
          let r, i;
          for (let t = 0; t < ai; t++) {
            const n = ii[t],
              {
                isEnabled: s,
                Feature: o,
                ProjectionNode: a,
                MeasureLayout: l
              } = x[n];
            a && (r = a), s(e) && (!this.features[n] && o && (this.features[n] = new o(this)), l && (i = l))
          }
          if (!this.projection && r) {
            this.projection = new r(this.latestValues, this.parent && this.parent.projection);
            const {
              layoutId: t,
              layout: n,
              drag: s,
              dragConstraints: i,
              layoutScroll: a,
              layoutRoot: l
            } = e;
            this.projection.setOptions({
              layoutId: t,
              layout: n,
              alwaysMeasureLayout: Boolean(s) || i && u(i),
              visualElement: this,
              scheduleRender: () => this.scheduleRender(),
              animationType: "string" == typeof n ? n : "both",
              initialPromotionConfig: o,
              layoutScroll: a,
              layoutRoot: l
            })
          }
          return i
        }
        updateFeatures() {
          for (const t in this.features) {
            const e = this.features[t];
            e.isMounted ? e.update() : (e.mount(), e.isMounted = !0)
          }
        }
        triggerBuild() {
          this.build(this.renderState, this.latestValues, this.options, this.props)
        }
        measureViewportBox() {
          return this.current ? this.measureInstanceViewportBox(this.current, this.props) : ho()
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
        update(t, e) {
          (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = e;
          for (let e = 0; e < li.length; e++) {
            const n = li[e];
            this.propEventSubscriptions[n] && (this.propEventSubscriptions[n](), delete this.propEventSubscriptions[n]);
            const s = t["on" + n];
            s && (this.propEventSubscriptions[n] = this.on(n, s))
          }
          this.prevMotionValues = function(t, e, n) {
            const {
              willChange: s
            } = e;
            for (const o in e) {
              const r = e[o],
                i = n[o];
              if (B(r)) t.addValue(o, r), ms(s) && s.add(o);
              else if (B(i)) t.addValue(o, Ps(r, {
                owner: t
              })), ms(s) && s.remove(o);
              else if (i !== r)
                if (t.hasValue(o)) {
                  const e = t.getValue(o);
                  !e.hasAnimated && e.set(r)
                } else {
                  const e = t.getStaticValue(o);
                  t.addValue(o, Ps(void 0 !== e ? e : r, {
                    owner: t
                  }))
                }
            }
            for (const s in n) void 0 === e[s] && t.removeValue(s);
            return e
          }(this, this.scrapeMotionValuesFromProps(t, this.prevProps), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue()
        }
        getProps() {
          return this.props
        }
        getVariant(t) {
          return this.props.variants ? this.props.variants[t] : void 0
        }
        getDefaultTransition() {
          return this.props.transition
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint
        }
        getClosestVariantNode() {
          return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
        }
        getVariantContext(t = !1) {
          if (t) return this.parent ? this.parent.getVariantContext() : void 0;
          if (!this.isControllingVariants) {
            const t = this.parent && this.parent.getVariantContext() || {};
            return void 0 !== this.props.initial && (t.initial = this.props.initial), t
          }
          const e = {};
          for (let t = 0; t < ci; t++) {
            const n = m[t],
              s = this.props[n];
            (h(s) || !1 === s) && (e[n] = s)
          }
          return e
        }
        addVariantChild(t) {
          const e = this.getClosestVariantNode();
          if (e) return e.variantChildren && e.variantChildren.add(t), () => e.variantChildren.delete(t)
        }
        addValue(t, e) {
          e !== this.values.get(t) && (this.removeValue(t), this.bindToMotionValue(t, e)), this.values.set(t, e), this.latestValues[t] = e.get()
        }
        removeValue(t) {
          this.values.delete(t);
          const e = this.valueSubscriptions.get(t);
          e && (e(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState)
        }
        hasValue(t) {
          return this.values.has(t)
        }
        getValue(t, e) {
          if (this.props.values && this.props.values[t]) return this.props.values[t];
          let n = this.values.get(t);
          return void 0 === n && void 0 !== e && (n = Ps(e, {
            owner: this
          }), this.addValue(t, n)), n
        }
        readValue(t) {
          var e;
          return void 0 === this.latestValues[t] && this.current ? null !== (e = this.getBaseTargetFromProps(this.props, t)) && void 0 !== e ? e : this.readValueFromInstance(this.current, t, this.options) : this.latestValues[t]
        }
        setBaseTarget(t, e) {
          this.baseTarget[t] = e
        }
        getBaseTarget(t) {
          var e;
          const {
            initial: n
          } = this.props, s = "string" == typeof n || "object" == typeof n ? null === (e = Mt(this.props, n)) || void 0 === e ? void 0 : e[t] : void 0;
          if (n && void 0 !== s) return s;
          const o = this.getBaseTargetFromProps(this.props, t);
          return void 0 === o || B(o) ? void 0 !== this.initialValues[t] && void 0 === s ? void 0 : this.baseTarget[t] : o
        }
        on(t, e) {
          return this.events[t] || (this.events[t] = new vs), this.events[t].add(e)
        }
        notify(t, ...e) {
          this.events[t] && this.events[t].notify(...e)
        }
      }
      class hi extends ui {
        sortInstanceNodePosition(t, e) {
          return 2 & t.compareDocumentPosition(e) ? 1 : -1
        }
        getBaseTargetFromProps(t, e) {
          return t.style ? t.style[e] : void 0
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
          transformValues: s
        }, o) {
          let r = Ds(n, t || {}, this);
          if (s && (e && (e = s(e)), n && (n = s(n)), r && (r = s(r))), o) {
            ks(this, n, r);
            const t = ((t, e, n, s) => {
              const o = function(t, {
                ...e
              }, n) {
                const s = t.current;
                if (!(s instanceof Element)) return {
                  target: e,
                  transitionEnd: n
                };
                n && (n = {
                  ...n
                }), t.values.forEach((t => {
                  const e = t.get();
                  if (!N(e)) return;
                  const n = Xr(e, s);
                  n && t.set(n)
                }));
                for (const t in e) {
                  const o = e[t];
                  if (!N(o)) continue;
                  const r = Xr(o, s);
                  r && (e[t] = r, n || (n = {}), void 0 === n[t] && (n[t] = o))
                }
                return {
                  target: e,
                  transitionEnd: n
                }
              }(t, e, s);
              return ei(t, e = o.target, n, s = o.transitionEnd)
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
      class di extends hi {
        readValueFromInstance(t, e) {
          if (D.has(e)) {
            const t = ls(e);
            return t && t.default || 0
          } {
            const s = (n = t, window.getComputedStyle(n)),
              o = (U(e) ? s.getPropertyValue(e) : s[e]) || 0;
            return "string" == typeof o ? o.trim() : o
          }
          var n
        }
        measureInstanceViewportBox(t, {
          transformPagePoint: e
        }) {
          return ko(t, e)
        }
        build(t, e, n, s) {
          it(t, e, n, s.transformTemplate)
        }
        scrapeMotionValuesFromProps(t, e) {
          return Ct(t, e)
        }
        handleChildMotionValue() {
          this.childSubscription && (this.childSubscription(), delete this.childSubscription);
          const {
            children: t
          } = this.props;
          B(t) && (this.childSubscription = t.on("change", (t => {
            this.current && (this.current.textContent = `${t}`)
          })))
        }
        renderInstance(t, e, n, s) {
          St(t, e, n, s)
        }
      }
      class pi extends hi {
        constructor() {
          super(...arguments), this.isSVGTag = !1
        }
        getBaseTargetFromProps(t, e) {
          return t[e]
        }
        readValueFromInstance(t, e) {
          if (D.has(e)) {
            const t = ls(e);
            return t && t.default || 0
          }
          return e = Tt.has(e) ? e : Et(e), t.getAttribute(e)
        }
        measureInstanceViewportBox() {
          return ho()
        }
        scrapeMotionValuesFromProps(t, e) {
          return Vt(t, e)
        }
        build(t, e, n, s) {
          vt(t, e, n, this.isSVGTag, s.transformTemplate)
        }
        renderInstance(t, e, n, s) {
          At(t, e, 0, s)
        }
        mount(t) {
          this.isSVGTag = bt(t.tagName), super.mount(t)
        }
      }
      const mi = (t, e) => V(t) ? new pi(e, {
          enableHardwareAcceleration: !1
        }) : new di(e, {
          enableHardwareAcceleration: !0
        }),
        fi = {
          layout: {
            ProjectionNode: $r,
            MeasureLayout: zo
          }
        },
        gi = {
          ...zs,
          ...me,
          ...Hr,
          ...fi
        },
        yi = A(((t, e) => Xt(t, e, gi, mi)));

      function vi(t) {
        return S(Xt(t, {
          forwardMotionProps: !1
        }, gi, mi))
      }
      const xi = A(Xt);

      function bi() {
        const t = (0, s.useRef)(!1);
        return l((() => (t.current = !0, () => {
          t.current = !1
        })), []), t
      }

      function Pi() {
        const t = bi(),
          [e, n] = (0, s.useState)(0),
          o = (0, s.useCallback)((() => {
            t.current && n(e + 1)
          }), [e]);
        return [(0, s.useCallback)((() => Nt.postRender(o)), [o]), e]
      }
      class wi extends s.Component {
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

      function Ei({
        children: t,
        isPresent: e
      }) {
        const n = (0, s.useId)(),
          o = (0, s.useRef)(null),
          r = (0, s.useRef)({
            width: 0,
            height: 0,
            top: 0,
            left: 0
          });
        return (0, s.useInsertionEffect)((() => {
          const {
            width: t,
            height: s,
            top: i,
            left: a
          } = r.current;
          if (e || !o.current || !t || !s) return;
          o.current.dataset.motionPopId = n;
          const l = document.createElement("style");
          return document.head.appendChild(l), l.sheet && l.sheet.insertRule(`\n          [data-motion-pop-id="${n}"] {\n            position: absolute !important;\n            width: ${t}px !important;\n            height: ${s}px !important;\n            top: ${i}px !important;\n            left: ${a}px !important;\n          }\n        `), () => {
            document.head.removeChild(l)
          }
        }), [e]), s.createElement(wi, {
          isPresent: e,
          childRef: o,
          sizeRef: r
        }, s.cloneElement(t, {
          ref: o
        }))
      }
      const Si = ({
        children: t,
        initial: e,
        isPresent: n,
        onExitComplete: o,
        custom: r,
        presenceAffectsLayout: a,
        mode: l
      }) => {
        const c = kt(Ti),
          u = (0, s.useId)(),
          h = (0, s.useMemo)((() => ({
            id: u,
            initial: e,
            isPresent: n,
            custom: r,
            onExitComplete: t => {
              c.set(t, !0);
              for (const t of c.values())
                if (!t) return;
              o && o()
            },
            register: t => (c.set(t, !1), () => c.delete(t))
          })), a ? void 0 : [n]);
        return (0, s.useMemo)((() => {
          c.forEach(((t, e) => c.set(e, !1)))
        }), [n]), s.useEffect((() => {
          !n && !c.size && o && o()
        }), [n]), "popLayout" === l && (t = s.createElement(Ei, {
          isPresent: n
        }, t)), s.createElement(i.Provider, {
          value: h
        }, t)
      };

      function Ti() {
        return new Map
      }

      function Ai(t) {
        return (0, s.useEffect)((() => () => t()), [])
      }
      const Ci = t => t.key || "",
        Vi = ({
          children: t,
          custom: e,
          initial: n = !0,
          onExitComplete: o,
          exitBeforeEnter: r,
          presenceAffectsLayout: i = !0,
          mode: a = "sync"
        }) => {
          be(!r, "Replace exitBeforeEnter with mode='wait'");
          const c = (0, s.useContext)(P).forceRender || Pi()[0],
            u = bi(),
            h = function(t) {
              const e = [];
              return s.Children.forEach(t, (t => {
                (0, s.isValidElement)(t) && e.push(t)
              })), e
            }(t);
          let d = h;
          const p = (0, s.useRef)(new Map).current,
            m = (0, s.useRef)(d),
            f = (0, s.useRef)(new Map).current,
            g = (0, s.useRef)(!0);
          if (l((() => {
              g.current = !1,
                function(t, e) {
                  t.forEach((t => {
                    const n = Ci(t);
                    e.set(n, t)
                  }))
                }(h, f), m.current = d
            })), Ai((() => {
              g.current = !0, f.clear(), p.clear()
            })), g.current) return s.createElement(s.Fragment, null, d.map((t => s.createElement(Si, {
            key: Ci(t),
            isPresent: !0,
            initial: !!n && void 0,
            presenceAffectsLayout: i,
            mode: a
          }, t))));
          d = [...d];
          const y = m.current.map(Ci),
            v = h.map(Ci),
            x = y.length;
          for (let t = 0; t < x; t++) {
            const e = y[t]; - 1 !== v.indexOf(e) || p.has(e) || p.set(e, void 0)
          }
          return "wait" === a && p.size && (d = []), p.forEach(((t, n) => {
            if (-1 !== v.indexOf(n)) return;
            const r = f.get(n);
            if (!r) return;
            const l = y.indexOf(n);
            let g = t;
            if (!g) {
              const t = () => {
                f.delete(n), p.delete(n);
                const t = m.current.findIndex((t => t.key === n));
                if (m.current.splice(t, 1), !p.size) {
                  if (m.current = h, !1 === u.current) return;
                  c(), o && o()
                }
              };
              g = s.createElement(Si, {
                key: Ci(r),
                isPresent: !1,
                onExitComplete: t,
                custom: e,
                presenceAffectsLayout: i,
                mode: a
              }, r), p.set(n, g)
            }
            d.splice(l, 0, g)
          })), d = d.map((t => {
            const e = t.key;
            return p.has(e) ? t : s.createElement(Si, {
              key: Ci(t),
              isPresent: !0,
              presenceAffectsLayout: i,
              mode: a
            }, t)
          })), s.createElement(s.Fragment, null, p.size ? d : d.map((t => (0, s.cloneElement)(t))))
        };

      function Mi({
        children: t,
        isValidProp: e,
        ...n
      }) {
        e && pt(e), (n = {
          ...(0, s.useContext)(o),
          ...n
        }).isStatic = kt((() => n.isStatic));
        const r = (0, s.useMemo)((() => n), [JSON.stringify(n.transition), n.transformPagePoint, n.reducedMotion]);
        return s.createElement(o.Provider, {
          value: r
        }, t)
      }

      function ki({
        children: t,
        features: e,
        strict: n = !1
      }) {
        const [, o] = (0, s.useState)(!Ri(e)), r = (0, s.useRef)(void 0);
        if (!Ri(e)) {
          const {
            renderer: t,
            ...n
          } = e;
          r.current = t, b(n)
        }
        return (0, s.useEffect)((() => {
          Ri(e) && e().then((({
            renderer: t,
            ...e
          }) => {
            b(e), r.current = t, o(!0)
          }))
        }), []), s.createElement(c.Provider, {
          value: {
            renderer: r.current,
            strict: n
          }
        }, t)
      }

      function Ri(t) {
        return "function" == typeof t
      }
      const Di = (0, s.createContext)(null),
        Li = t => !t.isLayoutDirty && t.willUpdate(!1);

      function Bi() {
        const t = new Set,
          e = new WeakMap,
          n = () => t.forEach(Li);
        return {
          add: s => {
            t.add(s), e.set(s, s.addEventListener("willUpdate", n))
          },
          remove: s => {
            t.delete(s);
            const o = e.get(s);
            o && (o(), e.delete(s)), n()
          },
          dirty: n
        }
      }
      const Fi = t => !0 === t,
        ji = ({
          children: t,
          id: e,
          inherit: n = !0
        }) => {
          const o = (0, s.useContext)(P),
            r = (0, s.useContext)(Di),
            [i, a] = Pi(),
            l = (0, s.useRef)(null),
            c = o.id || r;
          null === l.current && ((t => Fi(!0 === t) || "id" === t)(n) && c && (e = e ? c + "-" + e : c), l.current = {
            id: e,
            group: Fi(n) && o.group || Bi()
          });
          const u = (0, s.useMemo)((() => ({
            ...l.current,
            forceRender: i
          })), [a]);
          return s.createElement(P.Provider, {
            value: u
          }, t)
        },
        Ii = (0, s.createContext)(null),
        Oi = (0, s.forwardRef)((function({
          children: t,
          as: e = "ul",
          axis: n = "y",
          onReorder: o,
          values: r,
          ...i
        }, a) {
          const l = kt((() => yi(e))),
            c = [],
            u = (0, s.useRef)(!1);
          be(Boolean(r), "Reorder.Group must be provided a values prop");
          const h = {
            axis: n,
            registerItem: (t, e) => {
              e && -1 === c.findIndex((e => t === e.value)) && (c.push({
                value: t,
                layout: e[n]
              }), c.sort(Ni))
            },
            updateOrder: (t, e, n) => {
              if (u.current) return;
              const s = function(t, e, n, s) {
                if (!s) return t;
                const o = t.findIndex((t => t.value === e));
                if (-1 === o) return t;
                const r = s > 0 ? 1 : -1,
                  i = t[o + r];
                if (!i) return t;
                const a = t[o],
                  l = i.layout,
                  c = nn(l.min, l.max, .5);
                return 1 === r && a.layout.max + n > c || -1 === r && a.layout.min + n < c ? function([...t], e, n) {
                  const s = e < 0 ? t.length + e : e;
                  if (s >= 0 && s < t.length) {
                    const s = n < 0 ? t.length + n : n,
                      [o] = t.splice(e, 1);
                    t.splice(s, 0, o)
                  }
                  return t
                }(t, o, o + r) : t
              }(c, t, e, n);
              c !== s && (u.current = !0, o(s.map(Ui).filter((t => -1 !== r.indexOf(t)))))
            }
          };
          return (0, s.useEffect)((() => {
            u.current = !1
          })), s.createElement(l, {
            ...i,
            ref: a,
            ignoreStrict: !0
          }, s.createElement(Ii.Provider, {
            value: h
          }, t))
        }));

      function Ui(t) {
        return t.value
      }

      function Ni(t, e) {
        return t.layout.min - e.layout.min
      }

      function Wi(t) {
        const e = kt((() => Ps(t))),
          {
            isStatic: n
          } = (0, s.useContext)(o);
        if (n) {
          const [, n] = (0, s.useState)(t);
          (0, s.useEffect)((() => e.on("change", n)), [])
        }
        return e
      }
      const zi = t => (t => "object" == typeof t && t.mix)(t) ? t.mix : void 0;

      function $i(...t) {
        const e = !Array.isArray(t[0]),
          n = e ? 0 : -1,
          s = t[0 + n],
          o = t[1 + n],
          r = t[2 + n],
          i = t[3 + n],
          a = Tn(o, r, {
            mixer: zi(r[0]),
            ...i
          });
        return e ? a(s) : a
      }

      function Hi(t, e) {
        const n = Wi(e()),
          s = () => n.set(e());
        return s(), l((() => {
          const e = () => Nt.update(s, !1, !0),
            n = t.map((t => t.on("change", e)));
          return () => {
            n.forEach((t => t())), Wt(s)
          }
        })), n
      }

      function Yi(t, e, n, s) {
        if ("function" == typeof t) return function(t) {
          xs.current = [], t();
          const e = Hi(xs.current, t);
          return xs.current = void 0, e
        }(t);
        const o = "function" == typeof e ? e : $i(e, n, s);
        return Array.isArray(t) ? Xi(t, o) : Xi([t], (([t]) => o(t)))
      }

      function Xi(t, e) {
        const n = kt((() => []));
        return Hi(t, (() => {
          n.length = 0;
          const s = t.length;
          for (let e = 0; e < s; e++) n[e] = t[e].get();
          return e(n)
        }))
      }

      function Gi(t, e = 0) {
        return B(t) ? t : Wi(e)
      }
      const _i = (0, s.forwardRef)((function({
          children: t,
          style: e = {},
          value: n,
          as: o = "li",
          onDrag: r,
          layout: i = !0,
          ...a
        }, l) {
          const c = kt((() => yi(o))),
            u = (0, s.useContext)(Ii),
            h = {
              x: Gi(e.x),
              y: Gi(e.y)
            },
            d = Yi([h.x, h.y], (([t, e]) => t || e ? 1 : "unset")),
            p = (0, s.useRef)(null);
          be(Boolean(u), "Reorder.Item must be a child of Reorder.Group");
          const {
            axis: m,
            registerItem: f,
            updateOrder: g
          } = u;
          return (0, s.useEffect)((() => {
            f(n, p.current)
          }), [u]), s.createElement(c, {
            drag: m,
            ...a,
            dragSnapToOrigin: !0,
            style: {
              ...e,
              x: h.x,
              y: h.y,
              zIndex: d
            },
            layout: i,
            onDrag: (t, e) => {
              const {
                velocity: s
              } = e;
              s[m] && g(n, h[m].get(), s[m]), r && r(t, e)
            },
            onLayoutMeasure: t => {
              p.current = t
            },
            ref: l,
            ignoreStrict: !0
          }, t)
        })),
        qi = {
          Group: Oi,
          Item: _i
        },
        Zi = {
          renderer: mi,
          ...zs,
          ...me
        },
        Ki = {
          ...Zi,
          ...Hr,
          ...fi
        };

      function Ji(t, ...e) {
        const n = t.length;
        return Hi(e.filter(B), (function() {
          let s = "";
          for (let o = 0; o < n; o++) {
            s += t[o];
            const n = e[o];
            n && (s += B(n) ? n.get() : n)
          }
          return s
        }))
      }

      function Qi(t, e = {}) {
        const {
          isStatic: n
        } = (0, s.useContext)(o), r = (0, s.useRef)(null), i = Wi(B(t) ? t.get() : t), a = () => {
          r.current && r.current.stop()
        };
        return (0, s.useInsertionEffect)((() => i.attach(((t, s) => {
          if (n) return s(t);
          if (a(), r.current = _n({
              keyframes: [i.get(), t],
              velocity: i.getVelocity(),
              type: "spring",
              restDelta: .001,
              restSpeed: .01,
              ...e,
              onUpdate: s
            }), !zt.isProcessing) {
            const t = performance.now() - zt.timestamp;
            t < 30 && (r.current.time = we(t))
          }
          return i.get()
        }), a)), [JSON.stringify(e)]), l((() => {
          if (B(t)) return t.on("change", (t => i.set(parseFloat(t))))
        }), [i]), i
      }

      function ta(t, e, n) {
        (0, s.useInsertionEffect)((() => t.on(e, n)), [t, e, n])
      }

      function ea(t) {
        const e = Wi(t.getVelocity());
        return ta(t, "velocityChange", (t => {
          e.set(t)
        })), e
      }

      function na(t, e, n) {
        var s;
        if ("string" == typeof t) {
          let o = document;
          e && (be(Boolean(e.current), "Scope provided, but no element detected."), o = e.current), n ? (null !== (s = n[t]) && void 0 !== s || (n[t] = o.querySelectorAll(t)), t = n[t]) : t = o.querySelectorAll(t)
        } else t instanceof Element && (t = [t]);
        return Array.from(t || [])
      }
      const sa = new WeakMap;
      let oa;

      function ra({
        target: t,
        contentRect: e,
        borderBoxSize: n
      }) {
        var s;
        null === (s = sa.get(t)) || void 0 === s || s.forEach((s => {
          s({
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

      function ia(t) {
        t.forEach(ra)
      }

      function aa(t, e) {
        oa || "undefined" != typeof ResizeObserver && (oa = new ResizeObserver(ia));
        const n = na(t);
        return n.forEach((t => {
          let n = sa.get(t);
          n || (n = new Set, sa.set(t, n)), n.add(e), null == oa || oa.observe(t)
        })), () => {
          n.forEach((t => {
            const n = sa.get(t);
            null == n || n.delete(e), (null == n ? void 0 : n.size) || null == oa || oa.unobserve(t)
          }))
        }
      }
      const la = new Set;
      let ca;
      const ua = 50,
        ha = () => ({
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
        da = {
          x: {
            length: "Width",
            position: "Left"
          },
          y: {
            length: "Height",
            position: "Top"
          }
        };

      function pa(t, e, n, s) {
        const o = n[e],
          {
            length: r,
            position: i
          } = da[e],
          a = o.current,
          l = n.time;
        o.current = t["scroll" + i], o.scrollLength = t["scroll" + r] - t["client" + r], o.offset.length = 0, o.offset[0] = 0, o.offset[1] = o.scrollLength, o.progress = En(0, o.scrollLength, o.current);
        const c = s - l;
        o.velocity = c > ua ? 0 : Mn(o.current - a, c)
      }
      const ma = {
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
        fa = {
          start: 0,
          center: .5,
          end: 1
        };

      function ga(t, e, n = 0) {
        let s = 0;
        if (void 0 !== fa[t] && (t = fa[t]), "string" == typeof t) {
          const e = parseFloat(t);
          t.endsWith("px") ? s = e : t.endsWith("%") ? t = e / 100 : t.endsWith("vw") ? s = e / 100 * document.documentElement.clientWidth : t.endsWith("vh") ? s = e / 100 * document.documentElement.clientHeight : t = e
        }
        return "number" == typeof t && (s = e * t), n + s
      }
      const ya = [0, 0];

      function va(t, e, n, s) {
        let o = Array.isArray(t) ? t : ya,
          r = 0,
          i = 0;
        return "number" == typeof t ? o = [t, t] : "string" == typeof t && (o = (t = t.trim()).includes(" ") ? t.split(" ") : [t, fa[t] ? t : "0"]), r = ga(o[0], n, s), i = ga(o[1], e), r - i
      }
      const xa = {
        x: 0,
        y: 0
      };

      function ba(t, e, n, s = {}) {
        return {
          measure: () => function(t, e = t, n) {
            if (n.x.targetOffset = 0, n.y.targetOffset = 0, e !== t) {
              let s = e;
              for (; s && s !== t;) n.x.targetOffset += s.offsetLeft, n.y.targetOffset += s.offsetTop, s = s.offsetParent
            }
            n.x.targetLength = e === t ? e.scrollWidth : e.clientWidth, n.y.targetLength = e === t ? e.scrollHeight : e.clientHeight, n.x.containerLength = t.clientWidth, n.y.containerLength = t.clientHeight
          }(t, s.target, n),
          update: e => {
            ! function(t, e, n) {
              pa(t, "x", e, n), pa(t, "y", e, n), e.time = n
            }(t, n, e), (s.offset || s.target) && function(t, e, n) {
              let {
                offset: s = ma.All
              } = n;
              const {
                target: o = t,
                axis: r = "y"
              } = n, i = "y" === r ? "height" : "width", a = o !== t ? function(t, e) {
                const n = {
                  x: 0,
                  y: 0
                };
                let s = t;
                for (; s && s !== e;)
                  if (s instanceof HTMLElement) n.x += s.offsetLeft, n.y += s.offsetTop, s = s.offsetParent;
                  else if ("svg" === s.tagName) {
                  const t = s.getBoundingClientRect();
                  s = s.parentElement;
                  const e = s.getBoundingClientRect();
                  n.x += t.left - e.left, n.y += t.top - e.top
                } else {
                  if (!(s instanceof SVGGraphicsElement)) break; {
                    const {
                      x: t,
                      y: e
                    } = s.getBBox();
                    n.x += t, n.y += e;
                    let o = null,
                      r = s.parentNode;
                    for (; !o;) "svg" === r.tagName && (o = r), r = s.parentNode;
                    s = o
                  }
                }
                return n
              }(o, t) : xa, l = o === t ? {
                width: t.scrollWidth,
                height: t.scrollHeight
              } : function(t) {
                return "getBBox" in t && "svg" !== t.tagName ? t.getBBox() : {
                  width: t.clientWidth,
                  height: t.clientHeight
                }
              }(o), c = {
                width: t.clientWidth,
                height: t.clientHeight
              };
              e[r].offset.length = 0;
              let u = !e[r].interpolate;
              const h = s.length;
              for (let t = 0; t < h; t++) {
                const n = va(s[t], c[i], l[i], a[r]);
                u || n === e[r].interpolatorOffsets[t] || (u = !0), e[r].offset[t] = n
              }
              u && (e[r].interpolate = Tn(e[r].offset, Cn(s)), e[r].interpolatorOffsets = [...e[r].offset]), e[r].progress = e[r].interpolate(e[r].current)
            }(t, n, s)
          },
          notify: () => e(n)
        }
      }
      const Pa = new WeakMap,
        wa = new WeakMap,
        Ea = new WeakMap,
        Sa = t => t === document.documentElement ? window : t;

      function Ta(t, {
        container: e = document.documentElement,
        ...n
      } = {}) {
        let s = Ea.get(e);
        s || (s = new Set, Ea.set(e, s));
        const o = ha(),
          r = ba(e, t, o, n);
        if (s.add(r), !Pa.has(e)) {
          const t = () => {
              for (const t of s) t.measure()
            },
            n = () => {
              for (const t of s) t.update(zt.timestamp)
            },
            o = () => {
              for (const t of s) t.notify()
            },
            r = () => {
              Nt.read(t, !1, !0), Nt.update(n, !1, !0), Nt.update(o, !1, !0)
            };
          Pa.set(e, r);
          const c = Sa(e);
          window.addEventListener("resize", r, {
            passive: !0
          }), e !== document.documentElement && wa.set(e, (l = r, "function" == typeof(a = e) ? (i = a, la.add(i), ca || (ca = () => {
            const t = {
                width: window.innerWidth,
                height: window.innerHeight
              },
              e = {
                target: window,
                size: t,
                contentSize: t
              };
            la.forEach((t => t(e)))
          }, window.addEventListener("resize", ca)), () => {
            la.delete(i), !la.size && ca && (ca = void 0)
          }) : aa(a, l))), c.addEventListener("scroll", r, {
            passive: !0
          })
        }
        var i, a, l;
        const c = Pa.get(e);
        return Nt.read(c, !1, !0), () => {
          var t;
          Wt(c);
          const n = Ea.get(e);
          if (!n) return;
          if (n.delete(r), n.size) return;
          const s = Pa.get(e);
          Pa.delete(e), s && (Sa(e).removeEventListener("scroll", s), null === (t = wa.get(e)) || void 0 === t || t(), window.removeEventListener("resize", s))
        }
      }

      function Aa(t, e) {
        xe(Boolean(!e || e.current), `You have defined a ${t} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`)
      }
      const Ca = () => ({
        scrollX: Ps(0),
        scrollY: Ps(0),
        scrollXProgress: Ps(0),
        scrollYProgress: Ps(0)
      });

      function Va({
        container: t,
        target: e,
        layoutEffect: n = !0,
        ...o
      } = {}) {
        const r = kt(Ca);
        return (n ? l : s.useEffect)((() => (Aa("target", e), Aa("container", t), Ta((({
          x: t,
          y: e
        }) => {
          r.scrollX.set(t.current), r.scrollXProgress.set(t.progress), r.scrollY.set(e.current), r.scrollYProgress.set(e.progress)
        }), {
          ...o,
          container: (null == t ? void 0 : t.current) || void 0,
          target: (null == e ? void 0 : e.current) || void 0
        }))), [t, e, JSON.stringify(o.offset)]), r
      }

      function Ma(t) {
        return Va({
          container: t
        })
      }

      function ka() {
        return Va()
      }

      function Ra(t) {
        const e = (0, s.useRef)(0),
          {
            isStatic: n
          } = (0, s.useContext)(o);
        (0, s.useEffect)((() => {
          if (n) return;
          const s = ({
            timestamp: n,
            delta: s
          }) => {
            e.current || (e.current = n), t(n - e.current, s)
          };
          return Nt.update(s, !0), () => Wt(s)
        }), [t])
      }

      function Da() {
        const t = Wi(0);
        return Ra((e => t.set(e))), t
      }
      class La extends bs {
        constructor() {
          super(...arguments), this.members = [], this.transforms = new Set
        }
        add(t) {
          let e;
          D.has(t) ? (this.transforms.add(t), e = "transform") : t.startsWith("origin") || U(t) || "willChange" === t || (e = Et(t)), e && (gs(this.members, e), this.update())
        }
        remove(t) {
          D.has(t) ? (this.transforms.delete(t), this.transforms.size || ys(this.members, "transform")) : ys(this.members, Et(t)), this.update()
        }
        update() {
          this.set(this.members.length ? this.members.join(", ") : "auto")
        }
      }

      function Ba() {
        return kt((() => new La("auto")))
      }

      function Fa() {
        !si.current && oi();
        const [t] = (0, s.useState)(ni.current);
        return t
      }

      function ja() {
        const t = Fa(),
          {
            reducedMotion: e
          } = (0, s.useContext)(o);
        return "never" !== e && ("always" === e || t)
      }

      function Ia() {
        let t = !1;
        const e = new Set,
          n = {
            subscribe: t => (e.add(t), () => {
              e.delete(t)
            }),
            start(n, s) {
              be(t, "controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook.");
              const o = [];
              return e.forEach((t => {
                o.push(Is(t, n, {
                  transitionOverride: s
                }))
              })), Promise.all(o)
            },
            set: n => (be(t, "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."), e.forEach((t => {
              ! function(t, e) {
                Array.isArray(e) ? Ms(t, e) : "string" == typeof e ? Ms(t, [e]) : Vs(t, e)
              }(t, n)
            }))),
            stop() {
              e.forEach((t => {
                ! function(t) {
                  t.values.forEach((t => t.stop()))
                }(t)
              }))
            },
            mount: () => (t = !0, () => {
              t = !1, n.stop()
            })
          };
        return n
      }

      function Oa(t, e) {
        let n;
        const s = () => {
          const {
            currentTime: s
          } = e, o = (null === s ? 0 : s.value) / 100;
          n !== o && t(o), n = o
        };
        return Nt.update(s, !0), () => Wt(s)
      }
      const Ua = qn((() => void 0 !== window.ScrollTimeline));
      class Na {
        constructor(t) {
          this.animations = t.filter(Boolean)
        }
        then(t, e) {
          return Promise.all(this.animations).then(t).catch(e)
        }
        getAll(t) {
          return this.animations[0][t]
        }
        setAll(t, e) {
          for (let n = 0; n < this.animations.length; n++) this.animations[n][t] = e
        }
        attachTimeline(t) {
          const e = this.animations.map((e => {
            if (!Ua() || !e.attachTimeline) return e.pause(), Oa((t => {
              e.time = e.duration * t
            }), t);
            e.attachTimeline(t)
          }));
          return () => {
            e.forEach(((t, e) => {
              t && t(), this.animations[e].stop()
            }))
          }
        }
        get time() {
          return this.getAll("time")
        }
        set time(t) {
          this.setAll("time", t)
        }
        get speed() {
          return this.getAll("speed")
        }
        set speed(t) {
          this.setAll("speed", t)
        }
        get duration() {
          let t = 0;
          for (let e = 0; e < this.animations.length; e++) t = Math.max(t, this.animations[e].duration);
          return t
        }
        runAll(t) {
          this.animations.forEach((e => e[t]()))
        }
        play() {
          this.runAll("play")
        }
        pause() {
          this.runAll("pause")
        }
        stop() {
          this.runAll("stop")
        }
        cancel() {
          this.runAll("cancel")
        }
        complete() {
          this.runAll("complete")
        }
      }

      function Wa(t) {
        const e = {
            presenceContext: null,
            props: {},
            visualState: {
              renderState: {
                transform: {},
                transformOrigin: {},
                style: {},
                vars: {},
                attrs: {}
              },
              latestValues: {}
            }
          },
          n = mr(t) ? new pi(e, {
            enableHardwareAcceleration: !1
          }) : new di(e, {
            enableHardwareAcceleration: !0
          });
        n.mount(t), ri.set(t, n)
      }

      function za(t, e = 100) {
        const n = zn({
            keyframes: [0, e],
            ...t
          }),
          s = Math.min(Xn(n), Yn);
        return {
          type: "keyframes",
          ease: t => n.next(s * t).value / e,
          duration: we(s)
        }
      }

      function $a(t, e, n, s) {
        var o;
        return "number" == typeof e ? e : e.startsWith("-") || e.startsWith("+") ? Math.max(0, t + parseFloat(e)) : "<" === e ? n : null !== (o = s.get(e)) && void 0 !== o ? o : t
      }
      const Ha = (t, e, n) => {
        const s = e - t;
        return ((n - t) % s + s) % s + t
      };

      function Ya(t, e) {
        return Ie(t) ? t[Ha(0, t.length, e)] : t
      }

      function Xa(t, e, n, s, o, r) {
        ! function(t, e, n) {
          for (let s = 0; s < t.length; s++) {
            const o = t[s];
            o.at > e && o.at < n && (ys(t, o), s--)
          }
        }(t, o, r);
        for (let i = 0; i < e.length; i++) t.push({
          value: e[i],
          at: nn(o, r, s[i]),
          easing: Ya(n, i)
        })
      }

      function Ga(t, e) {
        return t.at === e.at ? null === t.value ? 1 : null === e.value ? -1 : 0 : t.at - e.at
      }

      function _a(t, e) {
        return !e.has(t) && e.set(t, {}), e.get(t)
      }

      function qa(t, e) {
        return e[t] || (e[t] = []), e[t]
      }

      function Za(t) {
        return Array.isArray(t) ? t : [t]
      }

      function Ka(t, e) {
        return t[e] ? {
          ...t,
          ...t[e]
        } : {
          ...t
        }
      }
      const Ja = t => "number" == typeof t,
        Qa = t => t.every(Ja);

      function tl(t, e, n, s) {
        const o = na(t, s),
          r = o.length;
        be(Boolean(r), "No valid element provided.");
        const i = [];
        for (let t = 0; t < r; t++) {
          const s = o[t];
          ri.has(s) || Wa(s);
          const a = ri.get(s),
            l = {
              ...n
            };
          "function" == typeof l.delay && (l.delay = l.delay(t, r)), i.push(...Bs(a, {
            ...e,
            transition: l
          }, {}))
        }
        return new Na(i)
      }
      const el = t => function(e, n, s) {
          let o;
          var r;
          return r = e, o = Array.isArray(r) && Array.isArray(r[0]) ? function(t, e, n) {
            const s = [],
              o = function(t, {
                defaultTransition: e = {},
                ...n
              } = {}, s) {
                const o = e.duration || .3,
                  r = new Map,
                  i = new Map,
                  a = {},
                  l = new Map;
                let c = 0,
                  u = 0,
                  h = 0;
                for (let n = 0; n < t.length; n++) {
                  const r = t[n];
                  if ("string" == typeof r) {
                    l.set(r, u);
                    continue
                  }
                  if (!Array.isArray(r)) {
                    l.set(r.name, $a(u, r.at, c, l));
                    continue
                  }
                  let [d, p, m = {}] = r;
                  void 0 !== m.at && (u = $a(u, m.at, c, l));
                  let f = 0;
                  const g = (t, n, s, r = 0, i = 0) => {
                    const a = Za(t),
                      {
                        delay: l = 0,
                        times: c = Cn(a),
                        type: d = "keyframes",
                        ...p
                      } = n;
                    let {
                      ease: m = e.ease || "easeOut",
                      duration: g
                    } = n;
                    const y = "function" == typeof l ? l(r, i) : l,
                      v = a.length;
                    if (v <= 2 && "spring" === d) {
                      let t = 100;
                      if (2 === v && Qa(a)) {
                        const e = a[1] - a[0];
                        t = Math.abs(e)
                      }
                      const e = {
                        ...p
                      };
                      void 0 !== g && (e.duration = Pe(g));
                      const n = za(e, t);
                      m = n.ease, g = n.duration
                    }
                    null != g || (g = o);
                    const x = u + y,
                      b = x + g;
                    1 === c.length && 0 === c[0] && (c[1] = 1);
                    const P = c.length - a.length;
                    P > 0 && An(c, P), 1 === a.length && a.unshift(null), Xa(s, a, m, c, x, b), f = Math.max(y + g, f), h = Math.max(b, h)
                  };
                  if (B(d)) g(p, m, qa("default", _a(d, i)));
                  else {
                    const t = na(d, s, a),
                      e = t.length;
                    for (let n = 0; n < e; n++) {
                      const s = _a(t[n], i);
                      for (const t in p) g(p[t], Ka(m, t), qa(t, s), n, e)
                    }
                    c = u, u += f
                  }
                }
                return i.forEach(((t, s) => {
                  for (const o in t) {
                    const i = t[o];
                    i.sort(Ga);
                    const a = [],
                      l = [],
                      c = [];
                    for (let t = 0; t < i.length; t++) {
                      const {
                        at: e,
                        value: n,
                        easing: s
                      } = i[t];
                      a.push(n), l.push(En(0, h, e)), c.push(s || "easeOut")
                    }
                    0 !== l[0] && (l.unshift(0), a.unshift(a[0]), c.unshift("easeInOut")), 1 !== l[l.length - 1] && (l.push(1), a.push(null)), r.has(s) || r.set(s, {
                      keyframes: {},
                      transition: {}
                    });
                    const u = r.get(s);
                    u.keyframes[o] = a, u.transition[o] = {
                      ...e,
                      duration: h,
                      ease: c,
                      times: l,
                      ...n
                    }
                  }
                })), r
              }(t, e, n);
            return o.forEach((({
              keyframes: t,
              transition: e
            }, n) => {
              let o;
              o = B(n) ? fr(n, t.default, e.default) : tl(n, t, e), s.push(o)
            })), new Na(s)
          }(e, n, t) : function(t) {
            return "object" == typeof t && !Array.isArray(t)
          }(n) ? tl(e, n, s, t) : fr(e, n, s), t && t.animations.push(o), o
        },
        nl = el();

      function sl() {
        const t = kt((() => ({
            current: null,
            animations: []
          }))),
          e = kt((() => el(t)));
        return Ai((() => {
          t.animations.forEach((t => t.stop()))
        })), [t, e]
      }

      function ol() {
        const t = kt(Ia);
        return l(t.mount, []), t
      }
      const rl = ol;

      function il(...t) {
        const e = (0, s.useRef)(0),
          [n, o] = (0, s.useState)(t[e.current]);
        return [n, (0, s.useCallback)((n => {
          e.current = "number" != typeof n ? Ha(0, t.length, e.current + 1) : n, o(t[e.current])
        }), [t.length, ...t])]
      }
      const al = {
        some: 0,
        all: 1
      };

      function ll(t, e, {
        root: n,
        margin: s,
        amount: o = "some"
      } = {}) {
        const r = na(t),
          i = new WeakMap,
          a = new IntersectionObserver((t => {
            t.forEach((t => {
              const n = i.get(t.target);
              if (t.isIntersecting !== Boolean(n))
                if (t.isIntersecting) {
                  const n = e(t);
                  "function" == typeof n ? i.set(t.target, n) : a.unobserve(t.target)
                } else n && (n(t), i.delete(t.target))
            }))
          }), {
            root: n,
            rootMargin: s,
            threshold: "number" == typeof o ? o : al[o]
          });
        return r.forEach((t => a.observe(t))), () => a.disconnect()
      }

      function cl(t, {
        root: e,
        margin: n,
        amount: o,
        once: r = !1
      } = {}) {
        const [i, a] = (0, s.useState)(!1);
        return (0, s.useEffect)((() => {
          if (!t.current || r && i) return;
          const s = {
            root: e && e.current || void 0,
            margin: n,
            amount: o
          };
          return ll(t.current, (() => (a(!0), r ? void 0 : () => a(!1))), s)
        }), [e, t, n, r]), i
      }
      class ul {
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
      const hl = () => new ul;

      function dl() {
        return kt(hl)
      }

      function pl(t, e, n, o) {
        (0, s.useEffect)((() => {
          const s = t.current;
          if (n && s) return Gt(s, e, n, o)
        }), [t, e, n, o])
      }

      function ml(t) {
        return null !== t && "object" == typeof t && E in t
      }

      function fl(t) {
        if (ml(t)) return t[E]
      }

      function gl() {
        return yl
      }

      function yl(t) {
        zr.current && (zr.current.isUpdating = !1, zr.current.blockUpdate(), t && t())
      }

      function vl() {
        const [t, e] = Pi(), n = gl(), o = (0, s.useRef)();
        return (0, s.useEffect)((() => {
          Nt.postRender((() => Nt.postRender((() => {
            e === o.current && (Ee.current = !1)
          }))))
        }), [e]), s => {
          n((() => {
            Ee.current = !0, t(), s(), o.current = e + 1
          }))
        }
      }

      function xl() {
        return s.useCallback((() => {
          const t = zr.current;
          t && t.resetTree()
        }), [])
      }
      const bl = (t, e) => `${t}: ${e}`,
        Pl = new Map;

      function wl(t, e, n, s) {
        const o = bl(t, D.has(e) ? "transform" : e),
          r = Pl.get(o);
        if (!r) return 0;
        const {
          animation: i,
          startTime: a
        } = r, l = () => {
          Pl.delete(o);
          try {
            i.cancel()
          } catch (t) {}
        };
        return null !== a ? (s.render(l), performance.now() - a || 0) : (l(), 0)
      }

      function El(t, e, n, s, o) {
        const r = t.dataset[ye];
        if (!r) return;
        window.HandoffAppearAnimations = wl;
        const i = bl(r, e),
          a = Me(t, e, [n[0], n[0]], {
            duration: 1e4,
            ease: "linear"
          });
        Pl.set(i, {
          animation: a,
          startTime: null
        });
        const l = () => {
          a.cancel();
          const r = Me(t, e, n, s);
          document.timeline && (r.startTime = document.timeline.currentTime), Pl.set(i, {
            animation: r,
            startTime: performance.now()
          }), o && o(r)
        };
        a.ready ? a.ready.then(l).catch(It) : l()
      }
      const Sl = () => ({});
      class Tl extends ui {
        build() {}
        measureInstanceViewportBox() {
          return ho()
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
          return ks(this, n, Ds(n, t || {}, this)), {
            transition: t,
            transitionEnd: e,
            ...n
          }
        }
      }
      const Al = Ft({
        scrapeMotionValuesFromProps: Sl,
        createRenderState: Sl
      });

      function Cl(t) {
        const [e, n] = (0, s.useState)(t), o = Al({}, !1), r = kt((() => new Tl({
          props: {},
          visualState: o,
          presenceContext: null
        }, {
          initialState: t
        })));
        return (0, s.useEffect)((() => (r.mount({}), () => r.unmount())), [r]), (0, s.useEffect)((() => {
          r.update({
            onUpdate: t => {
              n({
                ...t
              })
            }
          }, null)
        }), [n, r]), [e, kt((() => t => Is(r, t)))]
      }
      const Vl = t => t > .001 ? 1 / t : 1e5;
      let Ml = !1;

      function kl(t) {
        let e = Wi(1),
          n = Wi(1);
        const {
          visualElement: o
        } = (0, s.useContext)(r);
        return be(!(!t && !o), "If no scale values are provided, useInvertedScale must be used within a child of another motion component."), xe(Ml, "useInvertedScale is deprecated and will be removed in 3.0. Use the layout prop instead."), Ml = !0, t ? (e = t.scaleX || e, n = t.scaleY || n) : o && (e = o.getValue("scaleX", 1), n = o.getValue("scaleY", 1)), {
          scaleX: Yi(e, Vl),
          scaleY: Yi(n, Vl)
        }
      }
      let Rl = 0;
      const Dl = ({
          children: t
        }) => (s.useEffect((() => {
          be(!1, "AnimateSharedLayout is deprecated: https://www.framer.com/docs/guide-upgrade/##shared-layout-animations")
        }), []), s.createElement(ji, {
          id: kt((() => "asl-" + Rl++))
        }, t)),
        Ll = new Map;

      function Bl(t, e) {
        const n = function({
          source: t = document.documentElement,
          axis: e = "y"
        } = {}) {
          Ll.has(t) || Ll.set(t, {});
          const n = Ll.get(t);
          return n[e] || (n[e] = Ua() ? new ScrollTimeline({
            source: t,
            axis: e
          }) : function({
            source: t,
            axis: e = "y"
          }) {
            const n = {
                value: 0
              },
              s = Ta((t => {
                n.value = 100 * t[e].progress
              }), {
                container: t,
                axis: e
              });
            return {
              currentTime: n,
              cancel: s
            }
          }({
            source: t,
            axis: e
          })), n[e]
        }(e);
        return "function" == typeof t ? Oa(t, n) : t.attachTimeline(n)
      }

      function Fl(t = .1, {
        startDelay: e = 0,
        from: n = 0,
        ease: s
      } = {}) {
        return (o, r) => {
          const i = "number" == typeof n ? n : function(t, e) {
              if ("first" === t) return 0; {
                const n = e - 1;
                return "last" === t ? n : n / 2
              }
            }(n, r),
            a = Math.abs(i - o);
          let l = t * a;
          if (s) {
            const e = r * t;
            l = _e(s)(l / e) * e
          }
          return e + l
        }
      }
      const jl = Nt,
        Il = Ut.reduce(((t, e) => (t[e] = t => Wt(t), t)), {})
    }
  }
]);