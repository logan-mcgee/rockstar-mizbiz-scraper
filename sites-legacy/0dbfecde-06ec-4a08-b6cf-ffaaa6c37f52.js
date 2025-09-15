try {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    e = (new t.Error).stack;
  e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "0dbfecde-06ec-4a08-b6cf-ffaaa6c37f52", t._sentryDebugIdIdentifier = "sentry-dbid-0dbfecde-06ec-4a08-b6cf-ffaaa6c37f52")
} catch (t) {} {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  t._sentryModuleMetadata = t._sentryModuleMetadata || {}, t._sentryModuleMetadata[(new t.Error).stack] = Object.assign({}, t._sentryModuleMetadata[(new t.Error).stack], {
    release: "7e6a862245c0f03cf7f976b07fd639dca846e391",
    packageName: "@rockstargames/sites-legacy",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "7e6a862245c0f03cf7f976b07fd639dca846e391"
}, (self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || []).push([
  [5559], {
    65559: (t, e, n) => {
      n.r(e), n.d(e, {
        AnimatePresence: () => Dr,
        AnimateSharedLayout: () => Ul,
        DeprecatedLayoutGroupContext: () => jr,
        DragControls: () => pl,
        FlatTree: () => fi,
        LayoutGroup: () => Ur,
        LayoutGroupContext: () => S,
        LazyMotion: () => Lr,
        MotionConfig: () => Rr,
        MotionConfigContext: () => o,
        MotionContext: () => i,
        MotionGlobalConfig: () => ps,
        MotionValue: () => ws,
        PresenceContext: () => r,
        Reorder: () => Jr,
        SwitchLayoutGroupContext: () => T,
        VisualElement: () => pr,
        addPointerEvent: () => Qt,
        addPointerInfo: () => Jt,
        addScaleCorrector: () => L,
        animate: () => il,
        animateValue: () => qn,
        animateVisualElement: () => Us,
        animationControls: () => Wa,
        animations: () => Hs,
        anticipate: () => Ge,
        backIn: () => He,
        backInOut: () => Ye,
        backOut: () => $e,
        buildTransform: () => W,
        calcLength: () => to,
        cancelFrame: () => $t,
        cancelSync: () => Hl,
        checkTargetForNewValues: () => Ds,
        circIn: () => We,
        circInOut: () => ze,
        circOut: () => Ne,
        clamp: () => Y,
        color: () => en,
        complex: () => yn,
        createBox: () => po,
        createDomMotionComponent: () => wr,
        createMotionComponent: () => C,
        createScopedAnimate: () => ol,
        cubicBezier: () => Le,
        delay: () => mi,
        disableInstantTransitions: () => bl,
        distance: () => Ys,
        distance2D: () => Gs,
        domAnimation: () => Qr,
        domMax: () => ta,
        easeIn: () => Be,
        easeInOut: () => Fe,
        easeOut: () => je,
        filterProps: () => yt,
        frame: () => zt,
        frameData: () => Ht,
        inView: () => hl,
        interpolate: () => Tn,
        invariant: () => Pe,
        isBrowser: () => a,
        isDragActive: () => re,
        isMotionComponent: () => yl,
        isMotionValue: () => I,
        isValidMotionProp: () => ft,
        m: () => br,
        makeUseVisualState: () => It,
        mirrorEasing: () => Oe,
        mix: () => nn,
        motion: () => Pr,
        motionValue: () => bs,
        optimizedAppearDataAttribute: () => d,
        pipe: () => ee,
        progress: () => En,
        px: () => st,
        resolveMotionValue: () => Ft,
        reverseEasing: () => Ue,
        scroll: () => Nl,
        scrollInfo: () => Va,
        spring: () => zn,
        stagger: () => zl,
        startOptimizedAppearAnimation: () => kl,
        steps: () => Yt,
        sync: () => $l,
        transform: () => Gr,
        unwrapMotionComponent: () => vl,
        useAnimate: () => rl,
        useAnimation: () => ll,
        useAnimationControls: () => al,
        useAnimationFrame: () => Ba,
        useCycle: () => ul,
        useDeprecatedAnimatedState: () => Bl,
        useDeprecatedInvertedScale: () => Il,
        useDomEvent: () => gl,
        useDragControls: () => ml,
        useElementScroll: () => Ra,
        useForceUpdate: () => Sr,
        useInView: () => dl,
        useInstantLayoutTransition: () => xl,
        useInstantTransition: () => wl,
        useIsPresent: () => Oo,
        useIsomorphicLayoutEffect: () => l,
        useMotionTemplate: () => ea,
        useMotionValue: () => Hr,
        useMotionValueEvent: () => sa,
        usePresence: () => Io,
        useReducedMotion: () => Oa,
        useReducedMotionConfig: () => Ua,
        useResetProjection: () => El,
        useScroll: () => Da,
        useSpring: () => na,
        useTime: () => ja,
        useTransform: () => qr,
        useUnmountEffect: () => Mr,
        useVelocity: () => oa,
        useViewportScroll: () => La,
        useWillChange: () => Ia,
        visualElementStore: () => lr,
        warning: () => xe,
        wrap: () => Xa
      });
      var s = n(62229);
      const o = (0, s.createContext)({
          transformPagePoint: t => t,
          isStatic: !1,
          reducedMotion: "never"
        }),
        i = (0, s.createContext)({}),
        r = (0, s.createContext)(null),
        a = "undefined" != typeof document,
        l = a ? s.useLayoutEffect : s.useEffect,
        u = (0, s.createContext)({
          strict: !1
        }),
        c = t => t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
        h = "framerAppearId",
        d = "data-" + c(h);

      function p(t) {
        return t && "object" == typeof t && Object.prototype.hasOwnProperty.call(t, "current")
      }

      function f(t) {
        return "string" == typeof t || Array.isArray(t)
      }

      function m(t) {
        return null !== t && "object" == typeof t && "function" == typeof t.start
      }
      const g = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
        y = ["initial", ...g];

      function v(t) {
        return m(t.animate) || y.some((e => f(t[e])))
      }

      function x(t) {
        return Boolean(v(t) || t.variants)
      }

      function P(t) {
        return Array.isArray(t) ? t.join(" ") : t
      }
      const w = {
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
        b = {};
      for (const t in w) b[t] = {
        isEnabled: e => w[t].some((t => !!e[t]))
      };

      function E(t) {
        for (const e in t) b[e] = {
          ...b[e],
          ...t[e]
        }
      }
      const S = (0, s.createContext)({}),
        T = (0, s.createContext)({}),
        A = Symbol.for("motionComponentSymbol");

      function C({
        preloadedFeatures: t,
        createVisualElement: e,
        useRender: n,
        useVisualState: c,
        Component: h
      }) {
        t && E(t);
        const m = (0, s.forwardRef)((function(m, g) {
          let y;
          const x = {
              ...(0, s.useContext)(o),
              ...m,
              layoutId: V(m)
            },
            {
              isStatic: w
            } = x,
            b = function(t) {
              const {
                initial: e,
                animate: n
              } = function(t, e) {
                if (v(t)) {
                  const {
                    initial: e,
                    animate: n
                  } = t;
                  return {
                    initial: !1 === e || f(e) ? e : void 0,
                    animate: f(n) ? n : void 0
                  }
                }
                return !1 !== t.inherit ? e : {}
              }(t, (0, s.useContext)(i));
              return (0, s.useMemo)((() => ({
                initial: e,
                animate: n
              })), [P(e), P(n)])
            }(m),
            E = c(m, w);
          if (!w && a) {
            b.visualElement = function(t, e, n, a) {
              const {
                visualElement: c
              } = (0, s.useContext)(i), h = (0, s.useContext)(u), p = (0, s.useContext)(r), f = (0, s.useContext)(o).reducedMotion, m = (0, s.useRef)();
              a = a || h.renderer, !m.current && a && (m.current = a(t, {
                visualState: e,
                parent: c,
                props: n,
                presenceContext: p,
                blockInitialAnimation: !!p && !1 === p.initial,
                reducedMotionConfig: f
              }));
              const g = m.current;
              (0, s.useInsertionEffect)((() => {
                g && g.update(n, p)
              }));
              const y = (0, s.useRef)(Boolean(n[d] && !window.HandoffComplete));
              return l((() => {
                g && (g.render(), y.current && g.animationState && g.animationState.animateChanges())
              })), (0, s.useEffect)((() => {
                g && (g.updateFeatures(), !y.current && g.animationState && g.animationState.animateChanges(), y.current && (y.current = !1, window.HandoffComplete = !0))
              })), g
            }(h, E, x, e);
            const n = (0, s.useContext)(T),
              a = (0, s.useContext)(u).strict;
            b.visualElement && (y = b.visualElement.loadFeatures(x, a, t, n))
          }
          return s.createElement(i.Provider, {
            value: b
          }, y && b.visualElement ? s.createElement(y, {
            visualElement: b.visualElement,
            ...x
          }) : null, n(h, m, function(t, e, n) {
            return (0, s.useCallback)((s => {
              s && t.mount && t.mount(s), e && (s ? e.mount(s) : e.unmount()), n && ("function" == typeof n ? n(s) : p(n) && (n.current = s))
            }), [e])
          }(E, b.visualElement, g), E, w, b.visualElement))
        }));
        return m[A] = h, m
      }

      function V({
        layoutId: t
      }) {
        const e = (0, s.useContext)(S).id;
        return e && void 0 !== t ? e + "-" + t : t
      }

      function M(t) {
        function e(e, n = {}) {
          return C(t(e, n))
        }
        if ("undefined" == typeof Proxy) return e;
        const n = new Map;
        return new Proxy(e, {
          get: (t, s) => (n.has(s) || n.set(s, e(s)), n.get(s))
        })
      }
      const k = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

      function D(t) {
        return "string" == typeof t && !t.includes("-") && !!(k.indexOf(t) > -1 || /[A-Z]/.test(t))
      }
      const R = {};

      function L(t) {
        Object.assign(R, t)
      }
      const B = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
        j = new Set(B);

      function F(t, {
        layout: e,
        layoutId: n
      }) {
        return j.has(t) || t.startsWith("origin") || (e || void 0 !== n) && (!!R[t] || "opacity" === t)
      }
      const I = t => Boolean(t && t.getVelocity),
        O = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective"
        },
        U = B.length;

      function W(t, {
        enableHardwareAcceleration: e = !0,
        allowTransformNone: n = !0
      }, s, o) {
        let i = "";
        for (let e = 0; e < U; e++) {
          const n = B[e];
          void 0 !== t[n] && (i += `${O[n]||n}(${t[n]}) `)
        }
        return e && !t.z && (i += "translateZ(0)"), i = i.trim(), o ? i = o(t, s ? "" : i) : n && s && (i = "none"), i
      }
      const N = t => e => "string" == typeof e && e.startsWith(t),
        z = N("--"),
        $ = N("var(--"),
        H = (t, e) => e && "number" == typeof t ? e.transform(t) : t,
        Y = (t, e, n) => Math.min(Math.max(n, t), e),
        G = {
          test: t => "number" == typeof t,
          parse: parseFloat,
          transform: t => t
        },
        X = {
          ...G,
          transform: t => Y(0, 1, t)
        },
        q = {
          ...G,
          default: 1
        },
        _ = t => Math.round(1e5 * t) / 1e5,
        Z = /(-)?([\d]*\.?[\d])+/g,
        K = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
        J = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;

      function Q(t) {
        return "string" == typeof t
      }
      const tt = t => ({
          test: e => Q(e) && e.endsWith(t) && 1 === e.split(" ").length,
          parse: parseFloat,
          transform: e => `${e}${t}`
        }),
        et = tt("deg"),
        nt = tt("%"),
        st = tt("px"),
        ot = tt("vh"),
        it = tt("vw"),
        rt = {
          ...nt,
          parse: t => nt.parse(t) / 100,
          transform: t => nt.transform(100 * t)
        },
        at = {
          ...G,
          transform: Math.round
        },
        lt = {
          borderWidth: st,
          borderTopWidth: st,
          borderRightWidth: st,
          borderBottomWidth: st,
          borderLeftWidth: st,
          borderRadius: st,
          radius: st,
          borderTopLeftRadius: st,
          borderTopRightRadius: st,
          borderBottomRightRadius: st,
          borderBottomLeftRadius: st,
          width: st,
          maxWidth: st,
          height: st,
          maxHeight: st,
          size: st,
          top: st,
          right: st,
          bottom: st,
          left: st,
          padding: st,
          paddingTop: st,
          paddingRight: st,
          paddingBottom: st,
          paddingLeft: st,
          margin: st,
          marginTop: st,
          marginRight: st,
          marginBottom: st,
          marginLeft: st,
          rotate: et,
          rotateX: et,
          rotateY: et,
          rotateZ: et,
          scale: q,
          scaleX: q,
          scaleY: q,
          scaleZ: q,
          skew: et,
          skewX: et,
          skewY: et,
          distance: st,
          translateX: st,
          translateY: st,
          translateZ: st,
          x: st,
          y: st,
          z: st,
          perspective: st,
          transformPerspective: st,
          opacity: X,
          originX: rt,
          originY: rt,
          originZ: st,
          zIndex: at,
          fillOpacity: X,
          strokeOpacity: X,
          numOctaves: at
        };

      function ut(t, e, n, s) {
        const {
          style: o,
          vars: i,
          transform: r,
          transformOrigin: a
        } = t;
        let l = !1,
          u = !1,
          c = !0;
        for (const t in e) {
          const n = e[t];
          if (z(t)) {
            i[t] = n;
            continue
          }
          const s = lt[t],
            h = H(n, s);
          if (j.has(t)) {
            if (l = !0, r[t] = h, !c) continue;
            n !== (s.default || 0) && (c = !1)
          } else t.startsWith("origin") ? (u = !0, a[t] = h) : o[t] = h
        }
        if (e.transform || (l || s ? o.transform = W(t.transform, n, c, s) : o.transform && (o.transform = "none")), u) {
          const {
            originX: t = "50%",
            originY: e = "50%",
            originZ: n = 0
          } = a;
          o.transformOrigin = `${t} ${e} ${n}`
        }
      }
      const ct = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {}
      });

      function ht(t, e, n) {
        for (const s in e) I(e[s]) || F(s, n) || (t[s] = e[s])
      }

      function dt(t, e, n) {
        const o = {},
          i = function(t, e, n) {
            const o = {};
            return ht(o, t.style || {}, t), Object.assign(o, function({
              transformTemplate: t
            }, e, n) {
              return (0, s.useMemo)((() => {
                const s = ct();
                return ut(s, e, {
                  enableHardwareAcceleration: !n
                }, t), Object.assign({}, s.vars, s.style)
              }), [e])
            }(t, e, n)), t.transformValues ? t.transformValues(o) : o
          }(t, e, n);
        return t.drag && !1 !== t.dragListener && (o.draggable = !1, i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none", i.touchAction = !0 === t.drag ? "none" : "pan-" + ("x" === t.drag ? "y" : "x")), void 0 === t.tabIndex && (t.onTap || t.onTapStart || t.whileTap) && (o.tabIndex = 0), o.style = i, o
      }
      const pt = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);

      function ft(t) {
        return t.startsWith("while") || t.startsWith("drag") && "draggable" !== t || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || pt.has(t)
      }
      let mt = t => !ft(t);

      function gt(t) {
        t && (mt = e => e.startsWith("on") ? !ft(e) : t(e))
      }
      try {
        gt(require("@emotion/is-prop-valid").default)
      } catch (t) {}

      function yt(t, e, n) {
        const s = {};
        for (const o in t) "values" === o && "object" == typeof t.values || (mt(o) || !0 === n && ft(o) || !e && !ft(o) || t.draggable && o.startsWith("onDrag")) && (s[o] = t[o]);
        return s
      }

      function vt(t, e, n) {
        return "string" == typeof t ? t : st.transform(e + n * t)
      }
      const xt = {
          offset: "stroke-dashoffset",
          array: "stroke-dasharray"
        },
        Pt = {
          offset: "strokeDashoffset",
          array: "strokeDasharray"
        };

      function wt(t, {
        attrX: e,
        attrY: n,
        attrScale: s,
        originX: o,
        originY: i,
        pathLength: r,
        pathSpacing: a = 1,
        pathOffset: l = 0,
        ...u
      }, c, h, d) {
        if (ut(t, u, c, d), h) return void(t.style.viewBox && (t.attrs.viewBox = t.style.viewBox));
        t.attrs = t.style, t.style = {};
        const {
          attrs: p,
          style: f,
          dimensions: m
        } = t;
        p.transform && (m && (f.transform = p.transform), delete p.transform), m && (void 0 !== o || void 0 !== i || f.transform) && (f.transformOrigin = function(t, e, n) {
          return `${vt(e,t.x,t.width)} ${vt(n,t.y,t.height)}`
        }(m, void 0 !== o ? o : .5, void 0 !== i ? i : .5)), void 0 !== e && (p.x = e), void 0 !== n && (p.y = n), void 0 !== s && (p.scale = s), void 0 !== r && function(t, e, n = 1, s = 0, o = !0) {
          t.pathLength = 1;
          const i = o ? xt : Pt;
          t[i.offset] = st.transform(-s);
          const r = st.transform(e),
            a = st.transform(n);
          t[i.array] = `${r} ${a}`
        }(p, r, a, l, !1)
      }
      const bt = () => ({
          ...ct(),
          attrs: {}
        }),
        Et = t => "string" == typeof t && "svg" === t.toLowerCase();

      function St(t, e, n, o) {
        const i = (0, s.useMemo)((() => {
          const n = bt();
          return wt(n, e, {
            enableHardwareAcceleration: !1
          }, Et(o), t.transformTemplate), {
            ...n.attrs,
            style: {
              ...n.style
            }
          }
        }), [e]);
        if (t.style) {
          const e = {};
          ht(e, t.style, t), i.style = {
            ...e,
            ...i.style
          }
        }
        return i
      }

      function Tt(t = !1) {
        return (e, n, o, {
          latestValues: i
        }, r) => {
          const a = (D(e) ? St : dt)(n, i, r, e),
            l = {
              ...yt(n, "string" == typeof e, t),
              ...a,
              ref: o
            },
            {
              children: u
            } = n,
            c = (0, s.useMemo)((() => I(u) ? u.get() : u), [u]);
          return (0, s.createElement)(e, {
            ...l,
            children: c
          })
        }
      }

      function At(t, {
        style: e,
        vars: n
      }, s, o) {
        Object.assign(t.style, e, o && o.getProjectionStyles(s));
        for (const e in n) t.style.setProperty(e, n[e])
      }
      const Ct = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

      function Vt(t, e, n, s) {
        At(t, e, void 0, s);
        for (const n in e.attrs) t.setAttribute(Ct.has(n) ? n : c(n), e.attrs[n])
      }

      function Mt(t, e) {
        const {
          style: n
        } = t, s = {};
        for (const o in n)(I(n[o]) || e.style && I(e.style[o]) || F(o, t)) && (s[o] = n[o]);
        return s
      }

      function kt(t, e) {
        const n = Mt(t, e);
        for (const s in t)(I(t[s]) || I(e[s])) && (n[-1 !== B.indexOf(s) ? "attr" + s.charAt(0).toUpperCase() + s.substring(1) : s] = t[s]);
        return n
      }

      function Dt(t, e, n, s = {}, o = {}) {
        return "function" == typeof e && (e = e(void 0 !== n ? n : t.custom, s, o)), "string" == typeof e && (e = t.variants && t.variants[e]), "function" == typeof e && (e = e(void 0 !== n ? n : t.custom, s, o)), e
      }

      function Rt(t) {
        const e = (0, s.useRef)(null);
        return null === e.current && (e.current = t()), e.current
      }
      const Lt = t => Array.isArray(t),
        Bt = t => Boolean(t && "object" == typeof t && t.mix && t.toValue),
        jt = t => Lt(t) ? t[t.length - 1] || 0 : t;

      function Ft(t) {
        const e = I(t) ? t.get() : t;
        return Bt(e) ? e.toValue() : e
      }
      const It = t => (e, n) => {
        const o = (0, s.useContext)(i),
          a = (0, s.useContext)(r),
          l = () => function({
            scrapeMotionValuesFromProps: t,
            createRenderState: e,
            onMount: n
          }, s, o, i) {
            const r = {
              latestValues: Ot(s, o, i, t),
              renderState: e()
            };
            return n && (r.mount = t => n(s, t, r)), r
          }(t, e, o, a);
        return n ? l() : Rt(l)
      };

      function Ot(t, e, n, s) {
        const o = {},
          i = s(t, {});
        for (const t in i) o[t] = Ft(i[t]);
        let {
          initial: r,
          animate: a
        } = t;
        const l = v(t),
          u = x(t);
        e && u && !l && !1 !== t.inherit && (void 0 === r && (r = e.initial), void 0 === a && (a = e.animate));
        let c = !!n && !1 === n.initial;
        c = c || !1 === r;
        const h = c ? a : r;
        return h && "boolean" != typeof h && !m(h) && (Array.isArray(h) ? h : [h]).forEach((e => {
          const n = Dt(t, e);
          if (!n) return;
          const {
            transitionEnd: s,
            transition: i,
            ...r
          } = n;
          for (const t in r) {
            let e = r[t];
            Array.isArray(e) && (e = e[c ? e.length - 1 : 0]), null !== e && (o[t] = e)
          }
          for (const t in s) o[t] = s[t]
        })), o
      }
      const Ut = t => t;
      class Wt {
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
      const Nt = ["prepare", "read", "update", "preRender", "render", "postRender"],
        {
          schedule: zt,
          cancel: $t,
          state: Ht,
          steps: Yt
        } = function(t) {
          let e = !1,
            n = !0;
          const s = {
              delta: 0,
              timestamp: 0,
              isProcessing: !1
            },
            o = Nt.reduce(((t, n) => (t[n] = function(t) {
              let e = new Wt,
                n = new Wt,
                s = 0,
                o = !1,
                i = !1;
              const r = new WeakSet,
                a = {
                  schedule: (t, i = !1, a = !1) => {
                    const l = a && o,
                      u = l ? e : n;
                    return i && r.add(t), u.add(t) && l && o && (s = e.order.length), t
                  },
                  cancel: t => {
                    n.remove(t), r.delete(t)
                  },
                  process: l => {
                    if (o) i = !0;
                    else {
                      if (o = !0, [e, n] = [n, e], n.clear(), s = e.order.length, s)
                        for (let n = 0; n < s; n++) {
                          const s = e.order[n];
                          s(l), r.has(s) && (a.schedule(s), t())
                        }
                      o = !1, i && (i = !1, a.process(l))
                    }
                  }
                };
              return a
            }((() => e = !0)), t)), {}),
            i = t => o[t].process(s),
            r = () => {
              const o = performance.now();
              e = !1, s.delta = n ? 1e3 / 60 : Math.max(Math.min(o - s.timestamp, 40), 1), s.timestamp = o, s.isProcessing = !0, Nt.forEach(i), s.isProcessing = !1, e && (n = !1, t(r))
            };
          return {
            schedule: Nt.reduce(((i, a) => {
              const l = o[a];
              return i[a] = (o, i = !1, a = !1) => (e || (e = !0, n = !0, s.isProcessing || t(r)), l.schedule(o, i, a)), i
            }), {}),
            cancel: t => Nt.forEach((e => o[e].cancel(t))),
            state: s,
            steps: o
          }
        }("undefined" != typeof requestAnimationFrame ? requestAnimationFrame : Ut),
        Gt = {
          useVisualState: It({
            scrapeMotionValuesFromProps: kt,
            createRenderState: bt,
            onMount: (t, e, {
              renderState: n,
              latestValues: s
            }) => {
              zt.read((() => {
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
              })), zt.render((() => {
                wt(n, s, {
                  enableHardwareAcceleration: !1
                }, Et(e.tagName), t.transformTemplate), Vt(e, n)
              }))
            }
          })
        },
        Xt = {
          useVisualState: It({
            scrapeMotionValuesFromProps: Mt,
            createRenderState: ct
          })
        };

      function qt(t, {
        forwardMotionProps: e = !1
      }, n, s) {
        return {
          ...D(t) ? Gt : Xt,
          preloadedFeatures: n,
          useRender: Tt(e),
          createVisualElement: s,
          Component: t
        }
      }

      function _t(t, e, n, s = {
        passive: !0
      }) {
        return t.addEventListener(e, n, s), () => t.removeEventListener(e, n)
      }
      const Zt = t => "mouse" === t.pointerType ? "number" != typeof t.button || t.button <= 0 : !1 !== t.isPrimary;

      function Kt(t, e = "page") {
        return {
          point: {
            x: t[e + "X"],
            y: t[e + "Y"]
          }
        }
      }
      const Jt = t => e => Zt(e) && t(e, Kt(e));

      function Qt(t, e, n, s) {
        return _t(t, e, Jt(n), s)
      }
      const te = (t, e) => n => e(t(n)),
        ee = (...t) => t.reduce(te);

      function ne(t) {
        let e = null;
        return () => null === e && (e = t, () => {
          e = null
        })
      }
      const se = ne("dragHorizontal"),
        oe = ne("dragVertical");

      function ie(t) {
        let e = !1;
        if ("y" === t) e = oe();
        else if ("x" === t) e = se();
        else {
          const t = se(),
            n = oe();
          t && n ? e = () => {
            t(), n()
          } : (t && t(), n && n())
        }
        return e
      }

      function re() {
        const t = ie(!0);
        return !t || (t(), !1)
      }
      class ae {
        constructor(t) {
          this.isMounted = !1, this.node = t
        }
        update() {}
      }

      function le(t, e) {
        const n = "pointer" + (e ? "enter" : "leave"),
          s = "onHover" + (e ? "Start" : "End");
        return Qt(t.current, n, ((n, o) => {
          if ("touch" === n.pointerType || re()) return;
          const i = t.getProps();
          t.animationState && i.whileHover && t.animationState.setActive("whileHover", e), i[s] && zt.update((() => i[s](n, o)))
        }), {
          passive: !t.getProps()[s]
        })
      }
      const ue = (t, e) => !!e && (t === e || ue(t, e.parentElement));

      function ce(t, e) {
        if (!e) return;
        const n = new PointerEvent("pointer" + t);
        e(n, Kt(n))
      }
      const he = new WeakMap,
        de = new WeakMap,
        pe = t => {
          const e = he.get(t.target);
          e && e(t)
        },
        fe = t => {
          t.forEach(pe)
        };
      const me = {
          some: 0,
          all: 1
        },
        ge = {
          inView: {
            Feature: class extends ae {
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
                } = t, i = {
                  root: e ? e.current : void 0,
                  rootMargin: n,
                  threshold: "number" == typeof s ? s : me[s]
                };
                return function(t, e, n) {
                  const s = function({
                    root: t,
                    ...e
                  }) {
                    const n = t || document;
                    de.has(n) || de.set(n, {});
                    const s = de.get(n),
                      o = JSON.stringify(e);
                    return s[o] || (s[o] = new IntersectionObserver(fe, {
                      root: t,
                      ...e
                    })), s[o]
                  }(e);
                  return he.set(t, n), s.observe(t), () => {
                    he.delete(t), s.unobserve(t)
                  }
                }(this.node.current, i, (t => {
                  const {
                    isIntersecting: e
                  } = t;
                  if (this.isInView === e) return;
                  if (this.isInView = e, o && !e && this.hasEnteredView) return;
                  e && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", e);
                  const {
                    onViewportEnter: n,
                    onViewportLeave: s
                  } = this.node.getProps(), i = e ? n : s;
                  i && i(t)
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
            Feature: class extends ae {
              constructor() {
                super(...arguments), this.removeStartListeners = Ut, this.removeEndListeners = Ut, this.removeAccessibleListeners = Ut, this.startPointerPress = (t, e) => {
                  if (this.isPressing) return;
                  this.removeEndListeners();
                  const n = this.node.getProps(),
                    s = Qt(window, "pointerup", ((t, e) => {
                      if (!this.checkPressEnd()) return;
                      const {
                        onTap: n,
                        onTapCancel: s,
                        globalTapTarget: o
                      } = this.node.getProps();
                      zt.update((() => {
                        o || ue(this.node.current, t.target) ? n && n(t, e) : s && s(t, e)
                      }))
                    }), {
                      passive: !(n.onTap || n.onPointerUp)
                    }),
                    o = Qt(window, "pointercancel", ((t, e) => this.cancelPress(t, e)), {
                      passive: !(n.onTapCancel || n.onPointerCancel)
                    });
                  this.removeEndListeners = ee(s, o), this.startPress(t, e)
                }, this.startAccessiblePress = () => {
                  const t = _t(this.node.current, "keydown", (t => {
                      "Enter" !== t.key || this.isPressing || (this.removeEndListeners(), this.removeEndListeners = _t(this.node.current, "keyup", (t => {
                        "Enter" === t.key && this.checkPressEnd() && ce("up", ((t, e) => {
                          const {
                            onTap: n
                          } = this.node.getProps();
                          n && zt.update((() => n(t, e)))
                        }))
                      })), ce("down", ((t, e) => {
                        this.startPress(t, e)
                      })))
                    })),
                    e = _t(this.node.current, "blur", (() => {
                      this.isPressing && ce("cancel", ((t, e) => this.cancelPress(t, e)))
                    }));
                  this.removeAccessibleListeners = ee(t, e)
                }
              }
              startPress(t, e) {
                this.isPressing = !0;
                const {
                  onTapStart: n,
                  whileTap: s
                } = this.node.getProps();
                s && this.node.animationState && this.node.animationState.setActive("whileTap", !0), n && zt.update((() => n(t, e)))
              }
              checkPressEnd() {
                return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !re()
              }
              cancelPress(t, e) {
                if (!this.checkPressEnd()) return;
                const {
                  onTapCancel: n
                } = this.node.getProps();
                n && zt.update((() => n(t, e)))
              }
              mount() {
                const t = this.node.getProps(),
                  e = Qt(t.globalTapTarget ? window : this.node.current, "pointerdown", this.startPointerPress, {
                    passive: !(t.onTapStart || t.onPointerStart)
                  }),
                  n = _t(this.node.current, "focus", this.startAccessiblePress);
                this.removeStartListeners = ee(e, n)
              }
              unmount() {
                this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners()
              }
            }
          },
          focus: {
            Feature: class extends ae {
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
                this.unmount = ee(_t(this.node.current, "focus", (() => this.onFocus())), _t(this.node.current, "blur", (() => this.onBlur())))
              }
              unmount() {}
            }
          },
          hover: {
            Feature: class extends ae {
              mount() {
                this.unmount = ee(le(this.node, !0), le(this.node, !1))
              }
              unmount() {}
            }
          }
        };

      function ye(t, e) {
        if (!Array.isArray(e)) return !1;
        const n = e.length;
        if (n !== t.length) return !1;
        for (let s = 0; s < n; s++)
          if (e[s] !== t[s]) return !1;
        return !0
      }

      function ve(t, e, n) {
        const s = t.getProps();
        return Dt(s, e, void 0 !== n ? n : s.custom, function(t) {
          const e = {};
          return t.values.forEach(((t, n) => e[n] = t.get())), e
        }(t), function(t) {
          const e = {};
          return t.values.forEach(((t, n) => e[n] = t.getVelocity())), e
        }(t))
      }
      let xe = Ut,
        Pe = Ut;
      const we = t => 1e3 * t,
        be = t => t / 1e3,
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
        repeat: i = 0,
        repeatType: r = "loop",
        ease: a,
        times: l
      } = {}) {
        const u = {
          [e]: n
        };
        l && (u.offset = l);
        const c = Ve(a);
        return Array.isArray(c) && (u.easing = c), t.animate(u, {
          delay: s,
          duration: o,
          easing: Array.isArray(c) ? "linear" : c,
          fill: "both",
          iterations: i + 1,
          direction: "reverse" === r ? "alternate" : "normal"
        })
      }
      const ke = (t, e, n) => (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t,
        De = 1e-7,
        Re = 12;

      function Le(t, e, n, s) {
        if (t === e && n === s) return Ut;
        return o => 0 === o || 1 === o ? o : ke(function(t, e, n, s, o) {
          let i, r, a = 0;
          do {
            r = e + (n - e) / 2, i = ke(r, s, o) - t, i > 0 ? n = r : e = r
          } while (Math.abs(i) > De && ++a < Re);
          return r
        }(o, 0, 1, t, n), e, s)
      }
      const Be = Le(.42, 0, 1, 1),
        je = Le(0, 0, .58, 1),
        Fe = Le(.42, 0, .58, 1),
        Ie = t => Array.isArray(t) && "number" != typeof t[0],
        Oe = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
        Ue = t => e => 1 - t(1 - e),
        We = t => 1 - Math.sin(Math.acos(t)),
        Ne = Ue(We),
        ze = Oe(We),
        $e = Le(.33, 1.53, .69, .99),
        He = Ue($e),
        Ye = Oe(He),
        Ge = t => (t *= 2) < 1 ? .5 * He(t) : .5 * (2 - Math.pow(2, -10 * (t - 1))),
        Xe = {
          linear: Ut,
          easeIn: Be,
          easeInOut: Fe,
          easeOut: je,
          circIn: We,
          circInOut: ze,
          circOut: Ne,
          backIn: He,
          backInOut: Ye,
          backOut: $e,
          anticipate: Ge
        },
        qe = t => {
          if (Array.isArray(t)) {
            Pe(4 === t.length, "Cubic bezier arrays must contain four numerical values.");
            const [e, n, s, o] = t;
            return Le(e, n, s, o)
          }
          return "string" == typeof t ? (Pe(void 0 !== Xe[t], `Invalid easing type '${t}'`), Xe[t]) : t
        },
        _e = (t, e) => n => Boolean(Q(n) && J.test(n) && n.startsWith(t) || e && Object.prototype.hasOwnProperty.call(n, e)),
        Ze = (t, e, n) => s => {
          if (!Q(s)) return s;
          const [o, i, r, a] = s.match(Z);
          return {
            [t]: parseFloat(o),
            [e]: parseFloat(i),
            [n]: parseFloat(r),
            alpha: void 0 !== a ? parseFloat(a) : 1
          }
        },
        Ke = {
          ...G,
          transform: t => Math.round((t => Y(0, 255, t))(t))
        },
        Je = {
          test: _e("rgb", "red"),
          parse: Ze("red", "green", "blue"),
          transform: ({
            red: t,
            green: e,
            blue: n,
            alpha: s = 1
          }) => "rgba(" + Ke.transform(t) + ", " + Ke.transform(e) + ", " + Ke.transform(n) + ", " + _(X.transform(s)) + ")"
        },
        Qe = {
          test: _e("#"),
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
          test: _e("hsl", "hue"),
          parse: Ze("hue", "saturation", "lightness"),
          transform: ({
            hue: t,
            saturation: e,
            lightness: n,
            alpha: s = 1
          }) => "hsla(" + Math.round(t) + ", " + nt.transform(_(e)) + ", " + nt.transform(_(n)) + ", " + _(X.transform(s)) + ")"
        },
        en = {
          test: t => Je.test(t) || Qe.test(t) || tn.test(t),
          parse: t => Je.test(t) ? Je.parse(t) : tn.test(t) ? tn.parse(t) : Qe.parse(t),
          transform: t => Q(t) ? t : t.hasOwnProperty("red") ? Je.transform(t) : tn.transform(t)
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
        Pe(Boolean(e), `'${t}' is not an animatable color. Use the equivalent color code instead.`);
        let s = e.parse(t);
        return e === tn && (s = function({
          hue: t,
          saturation: e,
          lightness: n,
          alpha: s
        }) {
          t /= 360, n /= 100;
          let o = 0,
            i = 0,
            r = 0;
          if (e /= 100) {
            const s = n < .5 ? n * (1 + e) : n + e - n * e,
              a = 2 * n - s;
            o = sn(a, s, t + 1 / 3), i = sn(a, s, t), r = sn(a, s, t - 1 / 3)
          } else o = i = r = n;
          return {
            red: Math.round(255 * o),
            green: Math.round(255 * i),
            blue: Math.round(255 * r),
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
        un = {
          regex: /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,
          countKey: "Vars",
          token: "${v}",
          parse: Ut
        },
        cn = {
          regex: K,
          countKey: "Colors",
          token: "${c}",
          parse: en.parse
        },
        hn = {
          regex: Z,
          countKey: "Numbers",
          token: "${n}",
          parse: G.parse
        };

      function dn(t, {
        regex: e,
        countKey: n,
        token: s,
        parse: o
      }) {
        const i = t.tokenised.match(e);
        i && (t["num" + n] = i.length, t.tokenised = t.tokenised.replace(e, s), t.values.push(...i.map(o)))
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
        return n.value.includes("var(--") && dn(n, un), dn(n, cn), dn(n, hn), n
      }

      function fn(t) {
        return pn(t).values
      }

      function mn(t) {
        const {
          values: e,
          numColors: n,
          numVars: s,
          tokenised: o
        } = pn(t), i = e.length;
        return t => {
          let e = o;
          for (let o = 0; o < i; o++) e = o < s ? e.replace(un.token, t[o]) : o < s + n ? e.replace(cn.token, en.transform(t[o])) : e.replace(hn.token, _(t[o]));
          return e
        }
      }
      const gn = t => "number" == typeof t ? 0 : t,
        yn = {
          test: function(t) {
            var e, n;
            return isNaN(t) && Q(t) && ((null === (e = t.match(Z)) || void 0 === e ? void 0 : e.length) || 0) + ((null === (n = t.match(K)) || void 0 === n ? void 0 : n.length) || 0) > 0
          },
          parse: fn,
          createTransformer: mn,
          getAnimatableNone: function(t) {
            const e = fn(t);
            return mn(t)(e.map(gn))
          }
        },
        vn = (t, e) => n => `${n>0?e:t}`;

      function xn(t, e) {
        return "number" == typeof t ? n => nn(t, e, n) : en.test(t) ? ln(t, e) : t.startsWith("var(") ? vn(t, e) : bn(t, e)
      }
      const Pn = (t, e) => {
          const n = [...t],
            s = n.length,
            o = t.map(((t, n) => xn(t, e[n])));
          return t => {
            for (let e = 0; e < s; e++) n[e] = o[e](t);
            return n
          }
        },
        wn = (t, e) => {
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
        bn = (t, e) => {
          const n = yn.createTransformer(e),
            s = pn(t),
            o = pn(e);
          return s.numVars === o.numVars && s.numColors === o.numColors && s.numNumbers >= o.numNumbers ? ee(Pn(s.values, o.values), n) : (xe(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), vn(t, e))
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
        const i = t.length;
        if (Pe(i === e.length, "Both input and output ranges must be the same length"), 1 === i) return () => e[0];
        t[0] > t[i - 1] && (t = [...t].reverse(), e = [...e].reverse());
        const r = function(t, e, n) {
            const s = [],
              o = n || ("number" == typeof(i = t[0]) ? Sn : "string" == typeof i ? en.test(i) ? ln : bn : Array.isArray(i) ? Pn : "object" == typeof i ? wn : Sn);
            var i;
            const r = t.length - 1;
            for (let n = 0; n < r; n++) {
              let i = o(t[n], t[n + 1]);
              if (e) {
                const t = Array.isArray(e) ? e[n] || Ut : e;
                i = ee(t, i)
              }
              s.push(i)
            }
            return s
          }(e, s, o),
          a = r.length,
          l = e => {
            let n = 0;
            if (a > 1)
              for (; n < t.length - 2 && !(e < t[n + 1]); n++);
            const s = En(t[n], t[n + 1], e);
            return r[n](s)
          };
        return n ? e => l(Y(t[0], t[i - 1], e)) : l
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
        const o = Ie(s) ? s.map(qe) : qe(s),
          i = {
            done: !1,
            value: e[0]
          },
          r = function(t, e) {
            return t.map((t => t * e))
          }(n && n.length === e.length ? n : Cn(e), t),
          a = Tn(r, e, {
            ease: Array.isArray(o) ? o : (l = e, u = o, l.map((() => u || Fe)).splice(0, l.length - 1))
          });
        var l, u;
        return {
          calculatedDuration: t,
          next: e => (i.value = a(e), i.done = e >= t, i)
        }
      }

      function Mn(t, e) {
        return e ? t * (1e3 / e) : 0
      }
      const kn = 5;

      function Dn(t, e, n) {
        const s = Math.max(e - kn, 0);
        return Mn(n - t(s), e - s)
      }
      const Rn = .001,
        Ln = .01,
        Bn = 10,
        jn = .05,
        Fn = 1;
      const In = 12;

      function On(t, e) {
        return t * Math.sqrt(1 - e * e)
      }
      const Un = ["duration", "bounce"],
        Wn = ["stiffness", "damping", "mass"];

      function Nn(t, e) {
        return e.some((e => void 0 !== t[e]))
      }

      function zn({
        keyframes: t,
        restDelta: e,
        restSpeed: n,
        ...s
      }) {
        const o = t[0],
          i = t[t.length - 1],
          r = {
            done: !1,
            value: o
          },
          {
            stiffness: a,
            damping: l,
            mass: u,
            duration: c,
            velocity: h,
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
            if (!Nn(t, Wn) && Nn(t, Un)) {
              const n = function({
                duration: t = 800,
                bounce: e = .25,
                velocity: n = 0,
                mass: s = 1
              }) {
                let o, i;
                xe(t <= we(Bn), "Spring duration must be 10 seconds or less");
                let r = 1 - e;
                r = Y(jn, Fn, r), t = Y(Ln, Bn, be(t)), r < 1 ? (o = e => {
                  const s = e * r,
                    o = s * t,
                    i = s - n,
                    a = On(e, r),
                    l = Math.exp(-o);
                  return Rn - i / a * l
                }, i = e => {
                  const s = e * r * t,
                    i = s * n + n,
                    a = Math.pow(r, 2) * Math.pow(e, 2) * t,
                    l = Math.exp(-s),
                    u = On(Math.pow(e, 2), r);
                  return (-o(e) + Rn > 0 ? -1 : 1) * ((i - a) * l) / u
                }) : (o = e => Math.exp(-e * t) * ((e - n) * t + 1) - Rn, i = e => Math.exp(-e * t) * (t * t * (n - e)));
                const a = function(t, e, n) {
                  let s = n;
                  for (let n = 1; n < In; n++) s -= t(s) / e(s);
                  return s
                }(o, i, 5 / t);
                if (t = we(t), isNaN(a)) return {
                  stiffness: 100,
                  damping: 10,
                  duration: t
                }; {
                  const e = Math.pow(a, 2) * s;
                  return {
                    stiffness: e,
                    damping: 2 * r * Math.sqrt(s * e),
                    duration: t
                  }
                }
              }(t);
              e = {
                ...e,
                ...n,
                mass: 1
              }, e.isResolvedFromDuration = !0
            }
            return e
          }({
            ...s,
            velocity: -be(s.velocity || 0)
          }),
          p = h || 0,
          f = l / (2 * Math.sqrt(a * u)),
          m = i - o,
          g = be(Math.sqrt(a / u)),
          y = Math.abs(m) < 5;
        let v;
        if (n || (n = y ? .01 : 2), e || (e = y ? .005 : .5), f < 1) {
          const t = On(g, f);
          v = e => {
            const n = Math.exp(-f * g * e);
            return i - n * ((p + f * g * m) / t * Math.sin(t * e) + m * Math.cos(t * e))
          }
        } else if (1 === f) v = t => i - Math.exp(-g * t) * (m + (p + g * m) * t);
        else {
          const t = g * Math.sqrt(f * f - 1);
          v = e => {
            const n = Math.exp(-f * g * e),
              s = Math.min(t * e, 300);
            return i - n * ((p + f * g * m) * Math.sinh(s) + t * m * Math.cosh(s)) / t
          }
        }
        return {
          calculatedDuration: d && c || null,
          next: t => {
            const s = v(t);
            if (d) r.done = t >= c;
            else {
              let o = p;
              0 !== t && (o = f < 1 ? Dn(v, t, s) : 0);
              const a = Math.abs(o) <= n,
                l = Math.abs(i - s) <= e;
              r.done = a && l
            }
            return r.value = r.done ? i : s, r
          }
        }
      }

      function $n({
        keyframes: t,
        velocity: e = 0,
        power: n = .8,
        timeConstant: s = 325,
        bounceDamping: o = 10,
        bounceStiffness: i = 500,
        modifyTarget: r,
        min: a,
        max: l,
        restDelta: u = .5,
        restSpeed: c
      }) {
        const h = t[0],
          d = {
            done: !1,
            value: h
          },
          p = t => void 0 === a ? l : void 0 === l || Math.abs(a - t) < Math.abs(l - t) ? a : l;
        let f = n * e;
        const m = h + f,
          g = void 0 === r ? m : r(m);
        g !== m && (f = g - h);
        const y = t => -f * Math.exp(-t / s),
          v = t => g + y(t),
          x = t => {
            const e = y(t),
              n = v(t);
            d.done = Math.abs(e) <= u, d.value = d.done ? g : n
          };
        let P, w;
        const b = t => {
          var e;
          e = d.value, (void 0 !== a && e < a || void 0 !== l && e > l) && (P = t, w = zn({
            keyframes: [d.value, p(d.value)],
            velocity: Dn(v, t, d.value),
            damping: o,
            stiffness: i,
            restDelta: u,
            restSpeed: c
          }))
        };
        return b(0), {
          calculatedDuration: null,
          next: t => {
            let e = !1;
            return w || void 0 !== P || (e = !0, x(t), b(t)), void 0 !== P && t > P ? w.next(t - P) : (!e && x(t), d)
          }
        }
      }
      const Hn = t => {
          const e = ({
            timestamp: e
          }) => t(e);
          return {
            start: () => zt.update(e, !0),
            stop: () => $t(e),
            now: () => Ht.isProcessing ? Ht.timestamp : performance.now()
          }
        },
        Yn = 2e4;

      function Gn(t) {
        let e = 0,
          n = t.next(e);
        for (; !n.done && e < Yn;) e += 50, n = t.next(e);
        return e >= Yn ? 1 / 0 : e
      }
      const Xn = {
        decay: $n,
        inertia: $n,
        tween: Vn,
        keyframes: Vn,
        spring: zn
      };

      function qn({
        autoplay: t = !0,
        delay: e = 0,
        driver: n = Hn,
        keyframes: s,
        type: o = "keyframes",
        repeat: i = 0,
        repeatDelay: r = 0,
        repeatType: a = "loop",
        onPlay: l,
        onStop: u,
        onComplete: c,
        onUpdate: h,
        ...d
      }) {
        let p, f, m = 1,
          g = !1;
        const y = () => {
          f = new Promise((t => {
            p = t
          }))
        };
        let v;
        y();
        const x = Xn[o] || Vn;
        let P;
        x !== Vn && "number" != typeof s[0] && (P = Tn([0, 100], s, {
          clamp: !1
        }), s = [0, 100]);
        const w = x({
          ...d,
          keyframes: s
        });
        let b;
        "mirror" === a && (b = x({
          ...d,
          keyframes: [...s].reverse(),
          velocity: -(d.velocity || 0)
        }));
        let E = "idle",
          S = null,
          T = null,
          A = null;
        null === w.calculatedDuration && i && (w.calculatedDuration = Gn(w));
        const {
          calculatedDuration: C
        } = w;
        let V = 1 / 0,
          M = 1 / 0;
        null !== C && (V = C + r, M = V * (i + 1) - r);
        let k = 0;
        const D = t => {
            if (null === T) return;
            m > 0 && (T = Math.min(T, t)), m < 0 && (T = Math.min(t - M / m, T)), k = null !== S ? S : Math.round(t - T) * m;
            const n = k - e * (m >= 0 ? 1 : -1),
              o = m >= 0 ? n < 0 : n > M;
            k = Math.max(n, 0), "finished" === E && null === S && (k = M);
            let l = k,
              u = w;
            if (i) {
              const t = Math.min(k, M) / V;
              let e = Math.floor(t),
                n = t % 1;
              !n && t >= 1 && (n = 1), 1 === n && e--, e = Math.min(e, i + 1), Boolean(e % 2) && ("reverse" === a ? (n = 1 - n, r && (n -= r / V)) : "mirror" === a && (u = b)), l = Y(0, 1, n) * V
            }
            const c = o ? {
              done: !1,
              value: s[0]
            } : u.next(l);
            P && (c.value = P(c.value));
            let {
              done: d
            } = c;
            o || null === C || (d = m >= 0 ? k >= M : k <= 0);
            const p = null === S && ("finished" === E || "running" === E && d);
            return h && h(c.value), p && B(), c
          },
          R = () => {
            v && v.stop(), v = void 0
          },
          L = () => {
            E = "idle", R(), p(), y(), T = A = null
          },
          B = () => {
            E = "finished", c && c(), R(), p()
          },
          j = () => {
            if (g) return;
            v || (v = n(D));
            const t = v.now();
            l && l(), null !== S ? T = t - S : T && "finished" !== E || (T = t), "finished" === E && y(), A = T, S = null, E = "running", v.start()
          };
        t && j();
        const F = {
          then: (t, e) => f.then(t, e),
          get time() {
            return be(k)
          },
          set time(t) {
            t = we(t), k = t, null === S && v && 0 !== m ? T = v.now() - t / m : S = t
          },
          get duration() {
            const t = null === w.calculatedDuration ? Gn(w) : w.calculatedDuration;
            return be(t)
          },
          get speed() {
            return m
          },
          set speed(t) {
            t !== m && v && (m = t, F.time = be(k))
          },
          get state() {
            return E
          },
          play: j,
          pause: () => {
            E = "paused", S = k
          },
          stop: () => {
            g = !0, "idle" !== E && (E = "idle", u && u(), L())
          },
          cancel: () => {
            null !== A && D(A), L()
          },
          complete: () => {
            E = "finished"
          },
          sample: t => (T = 0, D(t))
        };
        return F
      }

      function _n(t) {
        let e;
        return () => (void 0 === e && (e = t()), e)
      }
      const Zn = _n((() => Object.hasOwnProperty.call(Element.prototype, "animate"))),
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
        }) => e.length > 2 ? Qn : j.has(t) ? t.startsWith("scale") ? {
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
        const [s] = n.match(Z) || [];
        if (!s) return t;
        const o = n.replace(s, "");
        let i = ss.has(e) ? 1 : 0;
        return s !== n && (i *= 100), e + "(" + i + o + ")"
      }
      const is = /([a-z-]*)\(.*?\)/g,
        rs = {
          ...yn,
          getAnimatableNone: t => {
            const e = t.match(is);
            return e ? e.map(os).join(" ") : t
          }
        },
        as = {
          ...lt,
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
          filter: rs,
          WebkitFilter: rs
        },
        ls = t => as[t];

      function us(t, e) {
        let n = ls(t);
        return n !== rs && (n = yn), n.getAnimatableNone ? n.getAnimatableNone(e) : void 0
      }
      const cs = t => /^0[^.\s]+$/.test(t);

      function hs(t) {
        return "number" == typeof t ? 0 === t : null !== t ? "none" === t || "0" === t || cs(t) : void 0
      }

      function ds(t, e) {
        return t[e] || t.default || t
      }
      const ps = {
          skipAnimations: !1
        },
        fs = (t, e, n, s = {}) => o => {
          const i = ds(s, t) || {},
            r = i.delay || s.delay || 0;
          let {
            elapsed: a = 0
          } = s;
          a -= we(r);
          const l = function(t, e, n, s) {
              const o = ns(e, n);
              let i;
              i = Array.isArray(n) ? [...n] : [null, n];
              const r = void 0 !== s.from ? s.from : t.get();
              let a;
              const l = [];
              for (let t = 0; t < i.length; t++) null === i[t] && (i[t] = 0 === t ? r : i[t - 1]), hs(i[t]) && l.push(t), "string" == typeof i[t] && "none" !== i[t] && "0" !== i[t] && (a = i[t]);
              if (o && l.length && a)
                for (let t = 0; t < l.length; t++) i[l[t]] = us(e, a);
              return i
            }(e, t, n, i),
            u = l[0],
            c = l[l.length - 1],
            h = ns(t, u),
            d = ns(t, c);
          xe(h === d, `You are trying to animate ${t} from "${u}" to "${c}". ${u} is not an animatable value - to enable this animation set ${u} to a value animatable to ${c} via the \`style\` property.`);
          let p = {
            keyframes: l,
            velocity: e.getVelocity(),
            ease: "easeOut",
            ...i,
            delay: -a,
            onUpdate: t => {
              e.set(t), i.onUpdate && i.onUpdate(t)
            },
            onComplete: () => {
              o(), i.onComplete && i.onComplete()
            }
          };
          if (function({
              when: t,
              delay: e,
              delayChildren: n,
              staggerChildren: s,
              staggerDirection: o,
              repeat: i,
              repeatType: r,
              repeatDelay: a,
              from: l,
              elapsed: u,
              ...c
            }) {
              return !!Object.keys(c).length
            }(i) || (p = {
              ...p,
              ...es(t, p)
            }), p.duration && (p.duration = we(p.duration)), p.repeatDelay && (p.repeatDelay = we(p.repeatDelay)), !h || !d || Ee.current || !1 === i.type || ps.skipAnimations) return function({
            keyframes: t,
            delay: e,
            onUpdate: n,
            onComplete: s
          }) {
            const o = () => (n && n(t[t.length - 1]), s && s(), {
              time: 0,
              speed: 1,
              duration: 0,
              play: Ut,
              pause: Ut,
              stop: Ut,
              then: t => (t(), Promise.resolve()),
              cancel: Ut,
              complete: Ut
            });
            return e ? qn({
              keyframes: [0, 1],
              duration: 0,
              delay: e,
              onComplete: o
            }) : o()
          }(Ee.current ? {
            ...p,
            delay: 0
          } : p);
          if (!s.isHandoff && e.owner && e.owner.current instanceof HTMLElement && !e.owner.getProps().onUpdate) {
            const n = function(t, e, {
              onUpdate: n,
              onComplete: s,
              ...o
            }) {
              if (!Zn() || !Kn.has(e) || o.repeatDelay || "mirror" === o.repeatType || 0 === o.damping || "inertia" === o.type) return !1;
              let i, r, a = !1,
                l = !1;
              const u = () => {
                r = new Promise((t => {
                  i = t
                }))
              };
              u();
              let {
                keyframes: c,
                duration: h = 300,
                ease: d,
                times: p
              } = o;
              if (((t, e) => "spring" === e.type || "backgroundColor" === t || !Te(e.ease))(e, o)) {
                const t = qn({
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
                p = void 0, c = n, h = s - 10, d = "linear"
              }
              const f = Me(t.owner.current, e, c, {
                  ...o,
                  duration: h,
                  ease: d,
                  times: p
                }),
                m = () => {
                  l = !1, f.cancel()
                },
                g = () => {
                  l = !0, zt.update(m), i(), u()
                };
              return f.onfinish = () => {
                l || (t.set(function(t, {
                  repeat: e,
                  repeatType: n = "loop"
                }) {
                  return t[e && "loop" !== n && e % 2 == 1 ? 0 : t.length - 1]
                }(c, o)), s && s(), g())
              }, {
                then: (t, e) => r.then(t, e),
                attachTimeline: t => (f.timeline = t, f.onfinish = null, Ut),
                get time() {
                  return be(f.currentTime || 0)
                },
                set time(t) {
                  f.currentTime = we(t)
                },
                get speed() {
                  return f.playbackRate
                },
                set speed(t) {
                  f.playbackRate = t
                },
                get duration() {
                  return be(h)
                },
                play: () => {
                  a || (f.play(), $t(m))
                },
                pause: () => f.pause(),
                stop: () => {
                  if (a = !0, "idle" === f.playState) return;
                  const {
                    currentTime: e
                  } = f;
                  if (e) {
                    const n = qn({
                      ...o,
                      autoplay: !1
                    });
                    t.setWithVelocity(n.sample(e - 10).value, n.sample(e).value, 10)
                  }
                  g()
                },
                complete: () => {
                  l || f.finish()
                },
                cancel: g
              }
            }(e, t, p);
            if (n) return n
          }
          return qn(p)
        };

      function ms(t) {
        return Boolean(I(t) && t.add)
      }
      const gs = t => /^\-?\d*\.?\d+$/.test(t);

      function ys(t, e) {
        -1 === t.indexOf(e) && t.push(e)
      }

      function vs(t, e) {
        const n = t.indexOf(e);
        n > -1 && t.splice(n, 1)
      }
      class xs {
        constructor() {
          this.subscriptions = []
        }
        add(t) {
          return ys(this.subscriptions, t), () => vs(this.subscriptions, t)
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
      const Ps = {
        current: void 0
      };
      class ws {
        constructor(t, e = {}) {
          var n;
          this.version = "10.18.0", this.timeDelta = 0, this.lastUpdated = 0, this.canTrackVelocity = !1, this.events = {}, this.updateAndNotify = (t, e = !0) => {
            this.prev = this.current, this.current = t;
            const {
              delta: n,
              timestamp: s
            } = Ht;
            this.lastUpdated !== s && (this.timeDelta = n, this.lastUpdated = s, zt.postRender(this.scheduleVelocityCheck)), this.prev !== this.current && this.events.change && this.events.change.notify(this.current), this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()), e && this.events.renderRequest && this.events.renderRequest.notify(this.current)
          }, this.scheduleVelocityCheck = () => zt.postRender(this.velocityCheck), this.velocityCheck = ({
            timestamp: t
          }) => {
            t !== this.lastUpdated && (this.prev = this.current, this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()))
          }, this.hasAnimated = !1, this.prev = this.current = t, this.canTrackVelocity = (n = this.current, !isNaN(parseFloat(n))), this.owner = e.owner
        }
        onChange(t) {
          return this.on("change", t)
        }
        on(t, e) {
          this.events[t] || (this.events[t] = new xs);
          const n = this.events[t].add(e);
          return "change" === t ? () => {
            n(), zt.read((() => {
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
          return Ps.current && Ps.current.push(this), this.current
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

      function bs(t, e) {
        return new ws(t, e)
      }
      const Es = t => e => e.test(t),
        Ss = [G, st, nt, et, it, ot, {
          test: t => "auto" === t,
          parse: t => t
        }],
        Ts = t => Ss.find(Es(t)),
        As = [...Ss, en, yn],
        Cs = t => As.find(Es(t));

      function Vs(t, e, n) {
        t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, bs(n))
      }

      function Ms(t, e) {
        const n = ve(t, e);
        let {
          transitionEnd: s = {},
          transition: o = {},
          ...i
        } = n ? t.makeTargetAnimatable(n, !1) : {};
        i = {
          ...i,
          ...s
        };
        for (const e in i) Vs(t, e, jt(i[e]))
      }

      function ks(t, e) {
        [...e].reverse().forEach((n => {
          const s = t.getVariant(n);
          s && Ms(t, s), t.variantChildren && t.variantChildren.forEach((t => {
            ks(t, e)
          }))
        }))
      }

      function Ds(t, e, n) {
        var s, o;
        const i = Object.keys(e).filter((e => !t.hasValue(e))),
          r = i.length;
        if (r)
          for (let a = 0; a < r; a++) {
            const r = i[a],
              l = e[r];
            let u = null;
            Array.isArray(l) && (u = l[0]), null === u && (u = null !== (o = null !== (s = n[r]) && void 0 !== s ? s : t.readValue(r)) && void 0 !== o ? o : e[r]), null != u && ("string" == typeof u && (gs(u) || cs(u)) ? u = parseFloat(u) : !Cs(u) && yn.test(l) && (u = us(r, l)), t.addValue(r, bs(u, {
              owner: t
            })), void 0 === n[r] && (n[r] = u), null !== u && t.setBaseTarget(r, u))
          }
      }

      function Rs(t, e) {
        if (e) return (e[t] || e.default || e).from
      }

      function Ls(t, e, n) {
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

      function Bs({
        protectedKeys: t,
        needsAnimating: e
      }, n) {
        const s = t.hasOwnProperty(n) && !0 !== e[n];
        return e[n] = !1, s
      }

      function js(t, e) {
        const n = t.get();
        if (!Array.isArray(e)) return n !== e;
        for (let t = 0; t < e.length; t++)
          if (e[t] !== n) return !0
      }

      function Fs(t, e, {
        delay: n = 0,
        transitionOverride: s,
        type: o
      } = {}) {
        let {
          transition: i = t.getDefaultTransition(),
          transitionEnd: r,
          ...a
        } = t.makeTargetAnimatable(e);
        const l = t.getValue("willChange");
        s && (i = s);
        const u = [],
          c = o && t.animationState && t.animationState.getState()[o];
        for (const e in a) {
          const s = t.getValue(e),
            o = a[e];
          if (!s || void 0 === o || c && Bs(c, e)) continue;
          const r = {
            delay: n,
            elapsed: 0,
            ...ds(i || {}, e)
          };
          if (window.HandoffAppearAnimations) {
            const n = t.getProps()[d];
            if (n) {
              const t = window.HandoffAppearAnimations(n, e, s, zt);
              null !== t && (r.elapsed = t, r.isHandoff = !0)
            }
          }
          let h = !r.isHandoff && !js(s, o);
          if ("spring" === r.type && (s.getVelocity() || r.velocity) && (h = !1), s.animation && (h = !1), h) continue;
          s.start(fs(e, s, o, t.shouldReduceMotion && j.has(e) ? {
            type: !1
          } : r));
          const p = s.animation;
          ms(l) && (l.add(e), p.then((() => l.remove(e)))), u.push(p)
        }
        return r && Promise.all(u).then((() => {
          r && Ms(t, r)
        })), u
      }

      function Is(t, e, n = {}) {
        const s = ve(t, e, n.custom);
        let {
          transition: o = t.getDefaultTransition() || {}
        } = s || {};
        n.transitionOverride && (o = n.transitionOverride);
        const i = s ? () => Promise.all(Fs(t, s, n)) : () => Promise.resolve(),
          r = t.variantChildren && t.variantChildren.size ? (s = 0) => {
            const {
              delayChildren: i = 0,
              staggerChildren: r,
              staggerDirection: a
            } = o;
            return function(t, e, n = 0, s = 0, o = 1, i) {
              const r = [],
                a = (t.variantChildren.size - 1) * s,
                l = 1 === o ? (t = 0) => t * s : (t = 0) => a - t * s;
              return Array.from(t.variantChildren).sort(Os).forEach(((t, s) => {
                t.notify("AnimationStart", e), r.push(Is(t, e, {
                  ...i,
                  delay: n + l(s)
                }).then((() => t.notify("AnimationComplete", e))))
              })), Promise.all(r)
            }(t, e, i + s, r, a, n)
          } : () => Promise.resolve(),
          {
            when: a
          } = o;
        if (a) {
          const [t, e] = "beforeChildren" === a ? [i, r] : [r, i];
          return t().then((() => e()))
        }
        return Promise.all([i(), r(n.delay)])
      }

      function Os(t, e) {
        return t.sortNodePosition(e)
      }

      function Us(t, e, n = {}) {
        let s;
        if (t.notify("AnimationStart", e), Array.isArray(e)) {
          const o = e.map((e => Is(t, e, n)));
          s = Promise.all(o)
        } else if ("string" == typeof e) s = Is(t, e, n);
        else {
          const o = "function" == typeof e ? ve(t, e, n.custom) : e;
          s = Promise.all(Fs(t, o, n))
        }
        return s.then((() => t.notify("AnimationComplete", e)))
      }
      const Ws = [...g].reverse(),
        Ns = g.length;

      function zs(t = !1) {
        return {
          isActive: t,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {}
        }
      }
      let $s = 0;
      const Hs = {
          animation: {
            Feature: class extends ae {
              constructor(t) {
                super(t), t.animationState || (t.animationState = function(t) {
                  let e = function(t) {
                    return e => Promise.all(e.map((({
                      animation: e,
                      options: n
                    }) => Us(t, e, n))))
                  }(t);
                  const n = {
                    animate: zs(!0),
                    whileInView: zs(),
                    whileHover: zs(),
                    whileTap: zs(),
                    whileDrag: zs(),
                    whileFocus: zs(),
                    exit: zs()
                  };
                  let s = !0;
                  const o = (e, n) => {
                    const s = ve(t, n);
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

                  function i(i, r) {
                    const a = t.getProps(),
                      l = t.getVariantContext(!0) || {},
                      u = [],
                      c = new Set;
                    let h = {},
                      d = 1 / 0;
                    for (let e = 0; e < Ns; e++) {
                      const y = Ws[e],
                        v = n[y],
                        x = void 0 !== a[y] ? a[y] : l[y],
                        P = f(x),
                        w = y === r ? v.isActive : null;
                      !1 === w && (d = e);
                      let b = x === l[y] && x !== a[y] && P;
                      if (b && s && t.manuallyAnimateOnMount && (b = !1), v.protectedKeys = {
                          ...h
                        }, !v.isActive && null === w || !x && !v.prevProp || m(x) || "boolean" == typeof x) continue;
                      let E = (p = v.prevProp, ("string" == typeof(g = x) ? g !== p : !!Array.isArray(g) && !ye(g, p)) || y === r && v.isActive && !b && P || e > d && P),
                        S = !1;
                      const T = Array.isArray(x) ? x : [x];
                      let A = T.reduce(o, {});
                      !1 === w && (A = {});
                      const {
                        prevResolvedValues: C = {}
                      } = v, V = {
                        ...C,
                        ...A
                      }, M = t => {
                        E = !0, c.has(t) && (S = !0, c.delete(t)), v.needsAnimating[t] = !0
                      };
                      for (const t in V) {
                        const e = A[t],
                          n = C[t];
                        if (h.hasOwnProperty(t)) continue;
                        let s = !1;
                        s = Lt(e) && Lt(n) ? !ye(e, n) : e !== n, s ? void 0 !== e ? M(t) : c.add(t) : void 0 !== e && c.has(t) ? M(t) : v.protectedKeys[t] = !0
                      }
                      v.prevProp = x, v.prevResolvedValues = A, v.isActive && (h = {
                        ...h,
                        ...A
                      }), s && t.blockInitialAnimation && (E = !1), !E || b && !S || u.push(...T.map((t => ({
                        animation: t,
                        options: {
                          type: y,
                          ...i
                        }
                      }))))
                    }
                    var p, g;
                    if (c.size) {
                      const e = {};
                      c.forEach((n => {
                        const s = t.getBaseTarget(n);
                        void 0 !== s && (e[n] = s)
                      })), u.push({
                        animation: e
                      })
                    }
                    let y = Boolean(u.length);
                    return !s || !1 !== a.initial && a.initial !== a.animate || t.manuallyAnimateOnMount || (y = !1), s = !1, y ? e(u) : Promise.resolve()
                  }
                  return {
                    animateChanges: i,
                    setActive: function(e, s, o) {
                      var r;
                      if (n[e].isActive === s) return Promise.resolve();
                      null === (r = t.variantChildren) || void 0 === r || r.forEach((t => {
                        var n;
                        return null === (n = t.animationState) || void 0 === n ? void 0 : n.setActive(e, s)
                      })), n[e].isActive = s;
                      const a = i(o, e);
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
                this.unmount(), m(t) && (this.unmount = t.subscribe(this.node))
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
            Feature: class extends ae {
              constructor() {
                super(...arguments), this.id = $s++
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
        Ys = (t, e) => Math.abs(t - e);

      function Gs(t, e) {
        const n = Ys(t.x, e.x),
          s = Ys(t.y, e.y);
        return Math.sqrt(n ** 2 + s ** 2)
      }
      class Xs {
        constructor(t, e, {
          transformPagePoint: n,
          contextWindow: s,
          dragSnapToOrigin: o = !1
        } = {}) {
          if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
              if (!this.lastMoveEvent || !this.lastMoveEventInfo) return;
              const t = Zs(this.lastMoveEventInfo, this.history),
                e = null !== this.startEvent,
                n = Gs(t.offset, {
                  x: 0,
                  y: 0
                }) >= 3;
              if (!e && !n) return;
              const {
                point: s
              } = t, {
                timestamp: o
              } = Ht;
              this.history.push({
                ...s,
                timestamp: o
              });
              const {
                onStart: i,
                onMove: r
              } = this.handlers;
              e || (i && i(this.lastMoveEvent, t), this.startEvent = this.lastMoveEvent), r && r(this.lastMoveEvent, t)
            }, this.handlePointerMove = (t, e) => {
              this.lastMoveEvent = t, this.lastMoveEventInfo = qs(e, this.transformPagePoint), zt.update(this.updatePoint, !0)
            }, this.handlePointerUp = (t, e) => {
              this.end();
              const {
                onEnd: n,
                onSessionEnd: s,
                resumeAnimation: o
              } = this.handlers;
              if (this.dragSnapToOrigin && o && o(), !this.lastMoveEvent || !this.lastMoveEventInfo) return;
              const i = Zs("pointercancel" === t.type ? this.lastMoveEventInfo : qs(e, this.transformPagePoint), this.history);
              this.startEvent && n && n(t, i), s && s(t, i)
            }, !Zt(t)) return;
          this.dragSnapToOrigin = o, this.handlers = e, this.transformPagePoint = n, this.contextWindow = s || window;
          const i = qs(Kt(t), this.transformPagePoint),
            {
              point: r
            } = i,
            {
              timestamp: a
            } = Ht;
          this.history = [{
            ...r,
            timestamp: a
          }];
          const {
            onSessionStart: l
          } = e;
          l && l(t, Zs(i, this.history)), this.removeListeners = ee(Qt(this.contextWindow, "pointermove", this.handlePointerMove), Qt(this.contextWindow, "pointerup", this.handlePointerUp), Qt(this.contextWindow, "pointercancel", this.handlePointerUp))
        }
        updateHandlers(t) {
          this.handlers = t
        }
        end() {
          this.removeListeners && this.removeListeners(), $t(this.updatePoint)
        }
      }

      function qs(t, e) {
        return e ? {
          point: e(t.point)
        } : t
      }

      function _s(t, e) {
        return {
          x: t.x - e.x,
          y: t.y - e.y
        }
      }

      function Zs({
        point: t
      }, e) {
        return {
          point: t,
          delta: _s(t, Js(e)),
          offset: _s(t, Ks(e)),
          velocity: Qs(e, .1)
        }
      }

      function Ks(t) {
        return t[0]
      }

      function Js(t) {
        return t[t.length - 1]
      }

      function Qs(t, e) {
        if (t.length < 2) return {
          x: 0,
          y: 0
        };
        let n = t.length - 1,
          s = null;
        const o = Js(t);
        for (; n >= 0 && (s = t[n], !(o.timestamp - s.timestamp > we(e)));) n--;
        if (!s) return {
          x: 0,
          y: 0
        };
        const i = be(o.timestamp - s.timestamp);
        if (0 === i) return {
          x: 0,
          y: 0
        };
        const r = {
          x: (o.x - s.x) / i,
          y: (o.y - s.y) / i
        };
        return r.x === 1 / 0 && (r.x = 0), r.y === 1 / 0 && (r.y = 0), r
      }

      function to(t) {
        return t.max - t.min
      }

      function eo(t, e = 0, n = .01) {
        return Math.abs(t - e) <= n
      }

      function no(t, e, n, s = .5) {
        t.origin = s, t.originPoint = nn(e.min, e.max, t.origin), t.scale = to(n) / to(e), (eo(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1), t.translate = nn(n.min, n.max, t.origin) - t.originPoint, (eo(t.translate) || isNaN(t.translate)) && (t.translate = 0)
      }

      function so(t, e, n, s) {
        no(t.x, e.x, n.x, s ? s.originX : void 0), no(t.y, e.y, n.y, s ? s.originY : void 0)
      }

      function oo(t, e, n) {
        t.min = n.min + e.min, t.max = t.min + to(e)
      }

      function io(t, e, n) {
        t.min = e.min - n.min, t.max = t.min + to(e)
      }

      function ro(t, e, n) {
        io(t.x, e.x, n.x), io(t.y, e.y, n.y)
      }

      function ao(t, e, n) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== n ? t.max + n - (t.max - t.min) : void 0
        }
      }

      function lo(t, e) {
        let n = e.min - t.min,
          s = e.max - t.max;
        return e.max - e.min < t.max - t.min && ([n, s] = [s, n]), {
          min: n,
          max: s
        }
      }
      const uo = .35;

      function co(t, e, n) {
        return {
          min: ho(t, e),
          max: ho(t, n)
        }
      }

      function ho(t, e) {
        return "number" == typeof t ? t : t[e] || 0
      }
      const po = () => ({
        x: {
          min: 0,
          max: 0
        },
        y: {
          min: 0,
          max: 0
        }
      });

      function fo(t) {
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

      function go(t) {
        return void 0 === t || 1 === t
      }

      function yo({
        scale: t,
        scaleX: e,
        scaleY: n
      }) {
        return !go(t) || !go(e) || !go(n)
      }

      function vo(t) {
        return yo(t) || xo(t) || t.z || t.rotate || t.rotateX || t.rotateY
      }

      function xo(t) {
        return Po(t.x) || Po(t.y)
      }

      function Po(t) {
        return t && "0%" !== t
      }

      function wo(t, e, n) {
        return n + e * (t - n)
      }

      function bo(t, e, n, s, o) {
        return void 0 !== o && (t = wo(t, o, s)), wo(t, n, s) + e
      }

      function Eo(t, e = 0, n = 1, s, o) {
        t.min = bo(t.min, e, n, s, o), t.max = bo(t.max, e, n, s, o)
      }

      function So(t, {
        x: e,
        y: n
      }) {
        Eo(t.x, e.translate, e.scale, e.originPoint), Eo(t.y, n.translate, n.scale, n.originPoint)
      }

      function To(t) {
        return Number.isInteger(t) || t > 1.0000000000001 || t < .999999999999 ? t : 1
      }

      function Ao(t, e) {
        t.min = t.min + e, t.max = t.max + e
      }

      function Co(t, e, [n, s, o]) {
        const i = void 0 !== e[o] ? e[o] : .5,
          r = nn(t.min, t.max, i);
        Eo(t, e[n], e[s], r, e.scale)
      }
      const Vo = ["x", "scaleX", "originX"],
        Mo = ["y", "scaleY", "originY"];

      function ko(t, e) {
        Co(t.x, e, Vo), Co(t.y, e, Mo)
      }

      function Do(t, e) {
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
      const Ro = ({
          current: t
        }) => t ? t.ownerDocument.defaultView : null,
        Lo = new WeakMap;
      class Bo {
        constructor(t) {
          this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
            x: 0,
            y: 0
          }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = po(), this.visualElement = t
        }
        start(t, {
          snapToCursor: e = !1
        } = {}) {
          const {
            presenceContext: n
          } = this.visualElement;
          if (n && !1 === n.isPresent) return;
          const {
            dragSnapToOrigin: s
          } = this.getProps();
          this.panSession = new Xs(t, {
            onSessionStart: t => {
              const {
                dragSnapToOrigin: n
              } = this.getProps();
              n ? this.pauseAnimation() : this.stopAnimation(), e && this.snapToCursor(Kt(t, "page").point)
            },
            onStart: (t, e) => {
              const {
                drag: n,
                dragPropagation: s,
                onDragStart: o
              } = this.getProps();
              if (n && !s && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = ie(n), !this.openGlobalLock)) return;
              this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), fo((t => {
                let e = this.getAxisMotionValue(t).get() || 0;
                if (nt.test(e)) {
                  const {
                    projection: n
                  } = this.visualElement;
                  if (n && n.layout) {
                    const s = n.layout.layoutBox[t];
                    s && (e = to(s) * (parseFloat(e) / 100))
                  }
                }
                this.originPoint[t] = e
              })), o && zt.update((() => o(t, e)), !1, !0);
              const {
                animationState: i
              } = this.visualElement;
              i && i.setActive("whileDrag", !0)
            },
            onMove: (t, e) => {
              const {
                dragPropagation: n,
                dragDirectionLock: s,
                onDirectionLock: o,
                onDrag: i
              } = this.getProps();
              if (!n && !this.openGlobalLock) return;
              const {
                offset: r
              } = e;
              if (s && null === this.currentDirection) return this.currentDirection = function(t, e = 10) {
                let n = null;
                return Math.abs(t.y) > e ? n = "y" : Math.abs(t.x) > e && (n = "x"), n
              }(r), void(null !== this.currentDirection && o && o(this.currentDirection));
              this.updateAxis("x", e.point, r), this.updateAxis("y", e.point, r), this.visualElement.render(), i && i(t, e)
            },
            onSessionEnd: (t, e) => this.stop(t, e),
            resumeAnimation: () => fo((t => {
              var e;
              return "paused" === this.getAnimationState(t) && (null === (e = this.getAxisMotionValue(t).animation) || void 0 === e ? void 0 : e.play())
            }))
          }, {
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: s,
            contextWindow: Ro(this.visualElement)
          })
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
          o && zt.update((() => o(t, e)))
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
          if (!n || !jo(t, s, this.currentDirection)) return;
          const o = this.getAxisMotionValue(t);
          let i = this.originPoint[t] + n[t];
          this.constraints && this.constraints[t] && (i = function(t, {
            min: e,
            max: n
          }, s) {
            return void 0 !== e && t < e ? t = s ? nn(e, t, s.min) : Math.max(t, e) : void 0 !== n && t > n && (t = s ? nn(n, t, s.max) : Math.min(t, n)), t
          }(i, this.constraints[t], this.elastic[t])), o.set(i)
        }
        resolveConstraints() {
          var t;
          const {
            dragConstraints: e,
            dragElastic: n
          } = this.getProps(), s = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : null === (t = this.visualElement.projection) || void 0 === t ? void 0 : t.layout, o = this.constraints;
          e && p(e) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : this.constraints = !(!e || !s) && function(t, {
            top: e,
            left: n,
            bottom: s,
            right: o
          }) {
            return {
              x: ao(t.x, n, o),
              y: ao(t.y, e, s)
            }
          }(s.layoutBox, e), this.elastic = function(t = uo) {
            return !1 === t ? t = 0 : !0 === t && (t = uo), {
              x: co(t, "left", "right"),
              y: co(t, "top", "bottom")
            }
          }(n), o !== this.constraints && s && this.constraints && !this.hasMutatedConstraints && fo((t => {
            this.getAxisMotionValue(t) && (this.constraints[t] = function(t, e) {
              const n = {};
              return void 0 !== e.min && (n.min = e.min - t.min), void 0 !== e.max && (n.max = e.max - t.min), n
            }(s.layoutBox[t], this.constraints[t]))
          }))
        }
        resolveRefConstraints() {
          const {
            dragConstraints: t,
            onMeasureDragConstraints: e
          } = this.getProps();
          if (!t || !p(t)) return !1;
          const n = t.current;
          Pe(null !== n, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
          const {
            projection: s
          } = this.visualElement;
          if (!s || !s.layout) return !1;
          const o = function(t, e, n) {
            const s = Do(t, n),
              {
                scroll: o
              } = e;
            return o && (Ao(s.x, o.offset.x), Ao(s.y, o.offset.y)), s
          }(n, s.root, this.visualElement.getTransformPagePoint());
          let i = function(t, e) {
            return {
              x: lo(t.x, e.x),
              y: lo(t.y, e.y)
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
            }(i));
            this.hasMutatedConstraints = !!t, t && (i = mo(t))
          }
          return i
        }
        startAnimation(t) {
          const {
            drag: e,
            dragMomentum: n,
            dragElastic: s,
            dragTransition: o,
            dragSnapToOrigin: i,
            onDragTransitionEnd: r
          } = this.getProps(), a = this.constraints || {}, l = fo((r => {
            if (!jo(r, e, this.currentDirection)) return;
            let l = a && a[r] || {};
            i && (l = {
              min: 0,
              max: 0
            });
            const u = s ? 200 : 1e6,
              c = s ? 40 : 1e7,
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
          return n.start(fs(t, n, 0, e))
        }
        stopAnimation() {
          fo((t => this.getAxisMotionValue(t).stop()))
        }
        pauseAnimation() {
          fo((t => {
            var e;
            return null === (e = this.getAxisMotionValue(t).animation) || void 0 === e ? void 0 : e.pause()
          }))
        }
        getAnimationState(t) {
          var e;
          return null === (e = this.getAxisMotionValue(t).animation) || void 0 === e ? void 0 : e.state
        }
        getAxisMotionValue(t) {
          const e = "_drag" + t.toUpperCase(),
            n = this.visualElement.getProps();
          return n[e] || this.visualElement.getValue(t, (n.initial ? n.initial[t] : void 0) || 0)
        }
        snapToCursor(t) {
          fo((e => {
            const {
              drag: n
            } = this.getProps();
            if (!jo(e, n, this.currentDirection)) return;
            const {
              projection: s
            } = this.visualElement, o = this.getAxisMotionValue(e);
            if (s && s.layout) {
              const {
                min: n,
                max: i
              } = s.layout.layoutBox[e];
              o.set(t[e] - nn(n, i, .5))
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
          if (!p(e) || !n || !this.constraints) return;
          this.stopAnimation();
          const s = {
            x: 0,
            y: 0
          };
          fo((t => {
            const e = this.getAxisMotionValue(t);
            if (e) {
              const n = e.get();
              s[t] = function(t, e) {
                let n = .5;
                const s = to(t),
                  o = to(e);
                return o > s ? n = En(e.min, e.max - s, t.min) : s > o && (n = En(t.min, t.max - o, e.min)), Y(0, 1, n)
              }({
                min: n,
                max: n
              }, this.constraints[t])
            }
          }));
          const {
            transformTemplate: o
          } = this.visualElement.getProps();
          this.visualElement.current.style.transform = o ? o({}, "") : "none", n.root && n.root.updateScroll(), n.updateLayout(), this.resolveConstraints(), fo((e => {
            if (!jo(e, t, null)) return;
            const n = this.getAxisMotionValue(e),
              {
                min: o,
                max: i
              } = this.constraints[e];
            n.set(nn(o, i, s[e]))
          }))
        }
        addListeners() {
          if (!this.visualElement.current) return;
          Lo.set(this.visualElement, this);
          const t = Qt(this.visualElement.current, "pointerdown", (t => {
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
              p(t) && (this.constraints = this.resolveRefConstraints())
            },
            {
              projection: n
            } = this.visualElement,
            s = n.addEventListener("measure", e);
          n && !n.layout && (n.root && n.root.updateScroll(), n.updateLayout()), e();
          const o = _t(window, "resize", (() => this.scalePositionWithinConstraints())),
            i = n.addEventListener("didUpdate", (({
              delta: t,
              hasLayoutChanged: e
            }) => {
              this.isDragging && e && (fo((e => {
                const n = this.getAxisMotionValue(e);
                n && (this.originPoint[e] += t[e].translate, n.set(n.get() + t[e].translate))
              })), this.visualElement.render())
            }));
          return () => {
            o(), t(), s(), i && i()
          }
        }
        getProps() {
          const t = this.visualElement.getProps(),
            {
              drag: e = !1,
              dragDirectionLock: n = !1,
              dragPropagation: s = !1,
              dragConstraints: o = !1,
              dragElastic: i = uo,
              dragMomentum: r = !0
            } = t;
          return {
            ...t,
            drag: e,
            dragDirectionLock: n,
            dragPropagation: s,
            dragConstraints: o,
            dragElastic: i,
            dragMomentum: r
          }
        }
      }

      function jo(t, e, n) {
        return !(!0 !== e && e !== t || null !== n && n !== t)
      }
      const Fo = t => (e, n) => {
        t && zt.update((() => t(e, n)))
      };

      function Io() {
        const t = (0, s.useContext)(r);
        if (null === t) return [!0, null];
        const {
          isPresent: e,
          onExitComplete: n,
          register: o
        } = t, i = (0, s.useId)();
        return (0, s.useEffect)((() => o(i)), []), !e && n ? [!1, () => n && n(i)] : [!0]
      }

      function Oo() {
        return null === (t = (0, s.useContext)(r)) || t.isPresent;
        var t
      }
      const Uo = {
        hasAnimatedSinceResize: !0,
        hasEverUpdated: !1
      };

      function Wo(t, e) {
        return e.max === e.min ? 0 : t / (e.max - e.min) * 100
      }
      const No = {
          correct: (t, e) => {
            if (!e.target) return t;
            if ("string" == typeof t) {
              if (!st.test(t)) return t;
              t = parseFloat(t)
            }
            return `${Wo(t,e.target.x)}% ${Wo(t,e.target.y)}%`
          }
        },
        zo = {
          correct: (t, {
            treeScale: e,
            projectionDelta: n
          }) => {
            const s = t,
              o = yn.parse(t);
            if (o.length > 5) return s;
            const i = yn.createTransformer(t),
              r = "number" != typeof o[0] ? 1 : 0,
              a = n.x.scale * e.x,
              l = n.y.scale * e.y;
            o[0 + r] /= a, o[1 + r] /= l;
            const u = nn(a, l, .5);
            return "number" == typeof o[2 + r] && (o[2 + r] /= u), "number" == typeof o[3 + r] && (o[3 + r] /= u), i(o)
          }
        };
      class $o extends s.Component {
        componentDidMount() {
          const {
            visualElement: t,
            layoutGroup: e,
            switchLayoutGroup: n,
            layoutId: s
          } = this.props, {
            projection: o
          } = t;
          L(Yo), o && (e.group && e.group.add(o), n && n.register && s && n.register(o), o.root.didUpdate(), o.addEventListener("animationComplete", (() => {
            this.safeToRemove()
          })), o.setOptions({
            ...o.options,
            onExitComplete: () => this.safeToRemove()
          })), Uo.hasEverUpdated = !0
        }
        getSnapshotBeforeUpdate(t) {
          const {
            layoutDependency: e,
            visualElement: n,
            drag: s,
            isPresent: o
          } = this.props, i = n.projection;
          return i ? (i.isPresent = o, s || t.layoutDependency !== e || void 0 === e ? i.willUpdate() : this.safeToRemove(), t.isPresent !== o && (o ? i.promote() : i.relegate() || zt.postRender((() => {
            const t = i.getStack();
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

      function Ho(t) {
        const [e, n] = Io(), o = (0, s.useContext)(S);
        return s.createElement($o, {
          ...t,
          layoutGroup: o,
          switchLayoutGroup: (0, s.useContext)(T),
          isPresent: e,
          safeToRemove: n
        })
      }
      const Yo = {
          borderRadius: {
            ...No,
            applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
          },
          borderTopLeftRadius: No,
          borderTopRightRadius: No,
          borderBottomLeftRadius: No,
          borderBottomRightRadius: No,
          boxShadow: zo
        },
        Go = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        Xo = Go.length,
        qo = t => "string" == typeof t ? parseFloat(t) : t,
        _o = t => "number" == typeof t || st.test(t);

      function Zo(t, e) {
        return void 0 !== t[e] ? t[e] : t.borderRadius
      }
      const Ko = Qo(0, .5, Ne),
        Jo = Qo(.5, .95, Ut);

      function Qo(t, e, n) {
        return s => s < t ? 0 : s > e ? 1 : n(En(t, e, s))
      }

      function ti(t, e) {
        t.min = e.min, t.max = e.max
      }

      function ei(t, e) {
        ti(t.x, e.x), ti(t.y, e.y)
      }

      function ni(t, e, n, s, o) {
        return t = wo(t -= e, 1 / n, s), void 0 !== o && (t = wo(t, 1 / o, s)), t
      }

      function si(t, e, [n, s, o], i, r) {
        ! function(t, e = 0, n = 1, s = .5, o, i = t, r = t) {
          if (nt.test(e) && (e = parseFloat(e), e = nn(r.min, r.max, e / 100) - r.min), "number" != typeof e) return;
          let a = nn(i.min, i.max, s);
          t === i && (a -= e), t.min = ni(t.min, e, n, a, o), t.max = ni(t.max, e, n, a, o)
        }(t, e[n], e[s], e[o], e.scale, i, r)
      }
      const oi = ["x", "scaleX", "originX"],
        ii = ["y", "scaleY", "originY"];

      function ri(t, e, n, s) {
        si(t.x, e, oi, n ? n.x : void 0, s ? s.x : void 0), si(t.y, e, ii, n ? n.y : void 0, s ? s.y : void 0)
      }

      function ai(t) {
        return 0 === t.translate && 1 === t.scale
      }

      function li(t) {
        return ai(t.x) && ai(t.y)
      }

      function ui(t, e) {
        return Math.round(t.x.min) === Math.round(e.x.min) && Math.round(t.x.max) === Math.round(e.x.max) && Math.round(t.y.min) === Math.round(e.y.min) && Math.round(t.y.max) === Math.round(e.y.max)
      }

      function ci(t) {
        return to(t.x) / to(t.y)
      }
      class hi {
        constructor() {
          this.members = []
        }
        add(t) {
          ys(this.members, t), t.scheduleRender()
        }
        remove(t) {
          if (vs(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
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

      function di(t, e, n) {
        let s = "";
        const o = t.x.translate / e.x,
          i = t.y.translate / e.y;
        if ((o || i) && (s = `translate3d(${o}px, ${i}px, 0) `), 1 === e.x && 1 === e.y || (s += `scale(${1/e.x}, ${1/e.y}) `), n) {
          const {
            rotate: t,
            rotateX: e,
            rotateY: o
          } = n;
          t && (s += `rotate(${t}deg) `), e && (s += `rotateX(${e}deg) `), o && (s += `rotateY(${o}deg) `)
        }
        const r = t.x.scale * e.x,
          a = t.y.scale * e.y;
        return 1 === r && 1 === a || (s += `scale(${r}, ${a})`), s || "none"
      }
      const pi = (t, e) => t.depth - e.depth;
      class fi {
        constructor() {
          this.children = [], this.isDirty = !1
        }
        add(t) {
          ys(this.children, t), this.isDirty = !0
        }
        remove(t) {
          vs(this.children, t), this.isDirty = !0
        }
        forEach(t) {
          this.isDirty && this.children.sort(pi), this.isDirty = !1, this.children.forEach(t)
        }
      }

      function mi(t, e) {
        const n = performance.now(),
          s = ({
            timestamp: o
          }) => {
            const i = o - n;
            i >= e && ($t(s), t(i - e))
          };
        return zt.read(s, !0), () => $t(s)
      }

      function gi(t) {
        return t instanceof SVGElement && "svg" !== t.tagName
      }

      function yi(t, e, n) {
        const s = I(t) ? t : bs(t);
        return s.start(fs("", s, e, n)), s.animation
      }
      const vi = ["", "X", "Y", "Z"],
        xi = {
          visibility: "hidden"
        };
      let Pi = 0;
      const wi = {
        type: "projectionFrame",
        totalNodes: 0,
        resolvedTargetDeltas: 0,
        recalculatedProjection: 0
      };

      function bi({
        attachResizeListener: t,
        defaultParent: e,
        measureScroll: n,
        checkIsScrollRoot: s,
        resetTransform: o
      }) {
        return class {
          constructor(t = {}, n = (null == e ? void 0 : e())) {
            this.id = Pi++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = {
              x: 1,
              y: 1
            }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.updateScheduled = !1, this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
              this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
            }, this.updateProjection = () => {
              var t;
              this.projectionUpdateScheduled = !1, wi.totalNodes = wi.resolvedTargetDeltas = wi.recalculatedProjection = 0, this.nodes.forEach(Ti), this.nodes.forEach(Ri), this.nodes.forEach(Li), this.nodes.forEach(Ai), t = wi, window.MotionDebug && window.MotionDebug.record(t)
            }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = t, this.root = n ? n.root || n : this, this.path = n ? [...n.path, n] : [], this.parent = n, this.depth = n ? n.depth + 1 : 0;
            for (let t = 0; t < this.path.length; t++) this.path[t].shouldResetTransform = !0;
            this.root === this && (this.nodes = new fi)
          }
          addEventListener(t, e) {
            return this.eventHandlers.has(t) || this.eventHandlers.set(t, new xs), this.eventHandlers.get(t).add(e)
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
            this.isSVG = gi(e), this.instance = e;
            const {
              layoutId: s,
              layout: o,
              visualElement: i
            } = this.options;
            if (i && !i.current && i.mount(e), this.root.nodes.add(this), this.parent && this.parent.children.add(this), n && (o || s) && (this.isLayoutDirty = !0), t) {
              let n;
              const s = () => this.root.updateBlockedByResize = !1;
              t(e, (() => {
                this.root.updateBlockedByResize = !0, n && n(), n = mi(s, 250), Uo.hasAnimatedSinceResize && (Uo.hasAnimatedSinceResize = !1, this.nodes.forEach(Di))
              }))
            }
            s && this.root.registerSharedNode(s, this), !1 !== this.options.animate && i && (s || o) && this.addEventListener("didUpdate", (({
              delta: t,
              hasLayoutChanged: e,
              hasRelativeTargetChanged: n,
              layout: s
            }) => {
              if (this.isTreeAnimationBlocked()) return this.target = void 0, void(this.relativeTarget = void 0);
              const o = this.options.transition || i.getDefaultTransition() || Ui,
                {
                  onLayoutAnimationStart: r,
                  onLayoutAnimationComplete: a
                } = i.getProps(),
                l = !this.targetLayout || !ui(this.targetLayout, s) || n,
                u = !e && n;
              if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || u || e && (l || !this.currentAnimation)) {
                this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(t, u);
                const e = {
                  ...ds(o, "layout"),
                  onPlay: r,
                  onComplete: a
                };
                (i.shouldReduceMotion || this.options.layoutRoot) && (e.delay = 0, e.type = !1), this.startAnimation(e)
              } else e || Di(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
              this.targetLayout = s
            }))
          }
          unmount() {
            this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
            const t = this.getStack();
            t && t.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, $t(this.updateProjection)
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
            this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(Bi), this.animationId++)
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
            if (this.updateScheduled = !1, this.isUpdateBlocked()) return this.unblockUpdate(), this.clearAllSnapshots(), void this.nodes.forEach(Vi);
            this.isUpdating || this.nodes.forEach(Mi), this.isUpdating = !1, this.nodes.forEach(ki), this.nodes.forEach(Ei), this.nodes.forEach(Si), this.clearAllSnapshots();
            const t = performance.now();
            Ht.delta = Y(0, 1e3 / 60, t - Ht.timestamp), Ht.timestamp = t, Ht.isProcessing = !0, Yt.update.process(Ht), Yt.preRender.process(Ht), Yt.render.process(Ht), Ht.isProcessing = !1
          }
          didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0, queueMicrotask((() => this.update())))
          }
          clearAllSnapshots() {
            this.nodes.forEach(Ci), this.sharedNodes.forEach(ji)
          }
          scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, zt.preRender(this.updateProjection, !1, !0))
          }
          scheduleCheckAfterUnmount() {
            zt.postRender((() => {
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
            this.layout = this.measure(!1), this.layoutCorrected = po(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
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
              e = this.projectionDelta && !li(this.projectionDelta),
              n = this.getTransformTemplate(),
              s = n ? n(this.latestValues, "") : void 0,
              i = s !== this.prevTransformTemplateValue;
            t && (e || vo(this.latestValues) || i) && (o(this.instance, s), this.shouldResetTransform = !1, this.scheduleRender())
          }
          measure(t = !0) {
            const e = this.measurePageBox();
            let n = this.removeElementScroll(e);
            var s;
            return t && (n = this.removeTransform(n)), zi((s = n).x), zi(s.y), {
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
            if (!t) return po();
            const e = t.measureViewportBox(),
              {
                scroll: n
              } = this.root;
            return n && (Ao(e.x, n.offset.x), Ao(e.y, n.offset.y)), e
          }
          removeElementScroll(t) {
            const e = po();
            ei(e, t);
            for (let n = 0; n < this.path.length; n++) {
              const s = this.path[n],
                {
                  scroll: o,
                  options: i
                } = s;
              if (s !== this.root && o && i.layoutScroll) {
                if (o.isRoot) {
                  ei(e, t);
                  const {
                    scroll: n
                  } = this.root;
                  n && (Ao(e.x, -n.offset.x), Ao(e.y, -n.offset.y))
                }
                Ao(e.x, o.offset.x), Ao(e.y, o.offset.y)
              }
            }
            return e
          }
          applyTransform(t, e = !1) {
            const n = po();
            ei(n, t);
            for (let t = 0; t < this.path.length; t++) {
              const s = this.path[t];
              !e && s.options.layoutScroll && s.scroll && s !== s.root && ko(n, {
                x: -s.scroll.offset.x,
                y: -s.scroll.offset.y
              }), vo(s.latestValues) && ko(n, s.latestValues)
            }
            return vo(this.latestValues) && ko(n, this.latestValues), n
          }
          removeTransform(t) {
            const e = po();
            ei(e, t);
            for (let t = 0; t < this.path.length; t++) {
              const n = this.path[t];
              if (!n.instance) continue;
              if (!vo(n.latestValues)) continue;
              yo(n.latestValues) && n.updateSnapshot();
              const s = po();
              ei(s, n.measurePageBox()), ri(e, n.latestValues, n.snapshot ? n.snapshot.layoutBox : void 0, s)
            }
            return vo(this.latestValues) && ri(e, this.latestValues), e
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
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Ht.timestamp && this.relativeParent.resolveTargetDelta(!0)
          }
          resolveTargetDelta(t = !1) {
            var e;
            const n = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = n.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = n.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = n.isSharedProjectionDirty);
            const s = Boolean(this.resumingFrom) || this !== n;
            if (!(t || s && this.isSharedProjectionDirty || this.isProjectionDirty || (null === (e = this.parent) || void 0 === e ? void 0 : e.isProjectionDirty) || this.attemptToResolveRelativeTarget)) return;
            const {
              layout: o,
              layoutId: i
            } = this.options;
            if (this.layout && (o || i)) {
              if (this.resolvedRelativeTargetAt = Ht.timestamp, !this.targetDelta && !this.relativeTarget) {
                const t = this.getClosestProjectingParent();
                t && t.layout && 1 !== this.animationProgress ? (this.relativeParent = t, this.forceRelativeParentToResolveTarget(), this.relativeTarget = po(), this.relativeTargetOrigin = po(), ro(this.relativeTargetOrigin, this.layout.layoutBox, t.layout.layoutBox), ei(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
              }
              if (this.relativeTarget || this.targetDelta) {
                var r, a, l;
                if (this.target || (this.target = po(), this.targetWithTransforms = po()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), r = this.target, a = this.relativeTarget, l = this.relativeParent.target, oo(r.x, a.x, l.x), oo(r.y, a.y, l.y)) : this.targetDelta ? (Boolean(this.resumingFrom) ? this.target = this.applyTransform(this.layout.layoutBox) : ei(this.target, this.layout.layoutBox), So(this.target, this.targetDelta)) : ei(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
                  this.attemptToResolveRelativeTarget = !1;
                  const t = this.getClosestProjectingParent();
                  t && Boolean(t.resumingFrom) === Boolean(this.resumingFrom) && !t.options.layoutScroll && t.target && 1 !== this.animationProgress ? (this.relativeParent = t, this.forceRelativeParentToResolveTarget(), this.relativeTarget = po(), this.relativeTargetOrigin = po(), ro(this.relativeTargetOrigin, this.target, t.target), ei(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                wi.resolvedTargetDeltas++
              }
            }
          }
          getClosestProjectingParent() {
            if (this.parent && !yo(this.parent.latestValues) && !xo(this.parent.latestValues)) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
          }
          isProjecting() {
            return Boolean((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
          }
          calcProjection() {
            var t;
            const e = this.getLead(),
              n = Boolean(this.resumingFrom) || this !== e;
            let s = !0;
            if ((this.isProjectionDirty || (null === (t = this.parent) || void 0 === t ? void 0 : t.isProjectionDirty)) && (s = !1), n && (this.isSharedProjectionDirty || this.isTransformDirty) && (s = !1), this.resolvedRelativeTargetAt === Ht.timestamp && (s = !1), s) return;
            const {
              layout: o,
              layoutId: i
            } = this.options;
            if (this.isTreeAnimating = Boolean(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !o && !i) return;
            ei(this.layoutCorrected, this.layout.layoutBox);
            const r = this.treeScale.x,
              a = this.treeScale.y;
            ! function(t, e, n, s = !1) {
              const o = n.length;
              if (!o) return;
              let i, r;
              e.x = e.y = 1;
              for (let a = 0; a < o; a++) {
                i = n[a], r = i.projectionDelta;
                const o = i.instance;
                o && o.style && "contents" === o.style.display || (s && i.options.layoutScroll && i.scroll && i !== i.root && ko(t, {
                  x: -i.scroll.offset.x,
                  y: -i.scroll.offset.y
                }), r && (e.x *= r.x.scale, e.y *= r.y.scale, So(t, r)), s && vo(i.latestValues) && ko(t, i.latestValues))
              }
              e.x = To(e.x), e.y = To(e.y)
            }(this.layoutCorrected, this.treeScale, this.path, n), !e.layout || e.target || 1 === this.treeScale.x && 1 === this.treeScale.y || (e.target = e.layout.layoutBox);
            const {
              target: l
            } = e;
            if (!l) return void(this.projectionTransform && (this.projectionDelta = {
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
            }, this.projectionTransform = "none", this.scheduleRender()));
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
            const u = this.projectionTransform;
            so(this.projectionDelta, this.layoutCorrected, l, this.latestValues), this.projectionTransform = di(this.projectionDelta, this.treeScale), this.projectionTransform === u && this.treeScale.x === r && this.treeScale.y === a || (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", l)), wi.recalculatedProjection++
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
              i = {
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
            this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !e;
            const r = po(),
              a = (n ? n.source : void 0) !== (this.layout ? this.layout.source : void 0),
              l = this.getStack(),
              u = !l || l.members.length <= 1,
              c = Boolean(a && !u && !0 === this.options.crossfade && !this.path.some(Oi));
            let h;
            this.animationProgress = 0, this.mixTargetDelta = e => {
              const n = e / 1e3;
              var l, d, p, f, m, g;
              Fi(i.x, t.x, n), Fi(i.y, t.y, n), this.setTargetDelta(i), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (ro(r, this.layout.layoutBox, this.relativeParent.layout.layoutBox), p = this.relativeTarget, f = this.relativeTargetOrigin, m = r, g = n, Ii(p.x, f.x, m.x, g), Ii(p.y, f.y, m.y, g), h && (l = this.relativeTarget, d = h, l.x.min === d.x.min && l.x.max === d.x.max && l.y.min === d.y.min && l.y.max === d.y.max) && (this.isProjectionDirty = !1), h || (h = po()), ei(h, this.relativeTarget)), a && (this.animationValues = o, function(t, e, n, s, o, i) {
                o ? (t.opacity = nn(0, void 0 !== n.opacity ? n.opacity : 1, Ko(s)), t.opacityExit = nn(void 0 !== e.opacity ? e.opacity : 1, 0, Jo(s))) : i && (t.opacity = nn(void 0 !== e.opacity ? e.opacity : 1, void 0 !== n.opacity ? n.opacity : 1, s));
                for (let o = 0; o < Xo; o++) {
                  const i = `border${Go[o]}Radius`;
                  let r = Zo(e, i),
                    a = Zo(n, i);
                  void 0 === r && void 0 === a || (r || (r = 0), a || (a = 0), 0 === r || 0 === a || _o(r) === _o(a) ? (t[i] = Math.max(nn(qo(r), qo(a), s), 0), (nt.test(a) || nt.test(r)) && (t[i] += "%")) : t[i] = a)
                }(e.rotate || n.rotate) && (t.rotate = nn(e.rotate || 0, n.rotate || 0, s))
              }(o, s, this.latestValues, n, c, u)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = n
            }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
          }
          startAnimation(t) {
            this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && ($t(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = zt.update((() => {
              Uo.hasAnimatedSinceResize = !0, this.currentAnimation = yi(0, 1e3, {
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
              if (this !== t && this.layout && s && $i(this.options.animationType, this.layout.layoutBox, s.layoutBox)) {
                n = this.target || po();
                const e = to(this.layout.layoutBox.x);
                n.x.min = t.target.x.min, n.x.max = n.x.min + e;
                const s = to(this.layout.layoutBox.y);
                n.y.min = t.target.y.min, n.y.max = n.y.min + s
              }
              ei(e, n), ko(e, o), so(this.projectionDeltaWithTransform, this.layoutCorrected, e, o)
            }
          }
          registerSharedNode(t, e) {
            this.sharedNodes.has(t) || this.sharedNodes.set(t, new hi), this.sharedNodes.get(t).add(e);
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
            for (let e = 0; e < vi.length; e++) {
              const o = "rotate" + vi[e];
              n[o] && (s[o] = n[o], t.setStaticValue(o, 0))
            }
            t.render();
            for (const e in s) t.setStaticValue(e, s[e]);
            t.scheduleRender()
          }
          getProjectionStyles(t) {
            var e, n;
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return xi;
            const s = {
                visibility: ""
              },
              o = this.getTransformTemplate();
            if (this.needsReset) return this.needsReset = !1, s.opacity = "", s.pointerEvents = Ft(null == t ? void 0 : t.pointerEvents) || "", s.transform = o ? o(this.latestValues, "") : "none", s;
            const i = this.getLead();
            if (!this.projectionDelta || !this.layout || !i.target) {
              const e = {};
              return this.options.layoutId && (e.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1, e.pointerEvents = Ft(null == t ? void 0 : t.pointerEvents) || ""), this.hasProjected && !vo(this.latestValues) && (e.transform = o ? o({}, "") : "none", this.hasProjected = !1), e
            }
            const r = i.animationValues || i.latestValues;
            this.applyTransformsToTarget(), s.transform = di(this.projectionDeltaWithTransform, this.treeScale, r), o && (s.transform = o(r, s.transform));
            const {
              x: a,
              y: l
            } = this.projectionDelta;
            s.transformOrigin = `${100*a.origin}% ${100*l.origin}% 0`, i.animationValues ? s.opacity = i === this ? null !== (n = null !== (e = r.opacity) && void 0 !== e ? e : this.latestValues.opacity) && void 0 !== n ? n : 1 : this.preserveOpacity ? this.latestValues.opacity : r.opacityExit : s.opacity = i === this ? void 0 !== r.opacity ? r.opacity : "" : void 0 !== r.opacityExit ? r.opacityExit : 0;
            for (const t in R) {
              if (void 0 === r[t]) continue;
              const {
                correct: e,
                applyTo: n
              } = R[t], o = "none" === s.transform ? r[t] : e(r[t], i);
              if (n) {
                const t = n.length;
                for (let e = 0; e < t; e++) s[n[e]] = o
              } else s[t] = o
            }
            return this.options.layoutId && (s.pointerEvents = i === this ? Ft(null == t ? void 0 : t.pointerEvents) || "" : "none"), s
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
          }
          resetTree() {
            this.root.nodes.forEach((t => {
              var e;
              return null === (e = t.currentAnimation) || void 0 === e ? void 0 : e.stop()
            })), this.root.nodes.forEach(Vi), this.root.sharedNodes.clear()
          }
        }
      }

      function Ei(t) {
        t.updateLayout()
      }

      function Si(t) {
        var e;
        const n = (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) || t.snapshot;
        if (t.isLead() && t.layout && n && t.hasListeners("didUpdate")) {
          const {
            layoutBox: e,
            measuredBox: s
          } = t.layout, {
            animationType: o
          } = t.options, i = n.source !== t.layout.source;
          "size" === o ? fo((t => {
            const s = i ? n.measuredBox[t] : n.layoutBox[t],
              o = to(s);
            s.min = e[t].min, s.max = s.min + o
          })) : $i(o, n.layoutBox, e) && fo((s => {
            const o = i ? n.measuredBox[s] : n.layoutBox[s],
              r = to(e[s]);
            o.max = o.min + r, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[s].max = t.relativeTarget[s].min + r)
          }));
          const r = {
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
          so(r, e, n.layoutBox);
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
          i ? so(a, t.applyTransform(s, !0), n.measuredBox) : so(a, e, n.layoutBox);
          const l = !li(r);
          let u = !1;
          if (!t.resumeFrom) {
            const s = t.getClosestProjectingParent();
            if (s && !s.resumeFrom) {
              const {
                snapshot: o,
                layout: i
              } = s;
              if (o && i) {
                const r = po();
                ro(r, n.layoutBox, o.layoutBox);
                const a = po();
                ro(a, e, i.layoutBox), ui(r, a) || (u = !0), s.options.layoutRoot && (t.relativeTarget = a, t.relativeTargetOrigin = r, t.relativeParent = s)
              }
            }
          }
          t.notifyListeners("didUpdate", {
            layout: e,
            snapshot: n,
            delta: a,
            layoutDelta: r,
            hasLayoutChanged: l,
            hasRelativeTargetChanged: u
          })
        } else if (t.isLead()) {
          const {
            onExitComplete: e
          } = t.options;
          e && e()
        }
        t.options.transition = void 0
      }

      function Ti(t) {
        wi.totalNodes++, t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = Boolean(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
      }

      function Ai(t) {
        t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
      }

      function Ci(t) {
        t.clearSnapshot()
      }

      function Vi(t) {
        t.clearMeasurements()
      }

      function Mi(t) {
        t.isLayoutDirty = !1
      }

      function ki(t) {
        const {
          visualElement: e
        } = t.options;
        e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform()
      }

      function Di(t) {
        t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = !0
      }

      function Ri(t) {
        t.resolveTargetDelta()
      }

      function Li(t) {
        t.calcProjection()
      }

      function Bi(t) {
        t.resetRotation()
      }

      function ji(t) {
        t.removeLeadSnapshot()
      }

      function Fi(t, e, n) {
        t.translate = nn(e.translate, 0, n), t.scale = nn(e.scale, 1, n), t.origin = e.origin, t.originPoint = e.originPoint
      }

      function Ii(t, e, n, s) {
        t.min = nn(e.min, n.min, s), t.max = nn(e.max, n.max, s)
      }

      function Oi(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit
      }
      const Ui = {
          duration: .45,
          ease: [.4, 0, .1, 1]
        },
        Wi = t => "undefined" != typeof navigator && navigator.userAgent.toLowerCase().includes(t),
        Ni = Wi("applewebkit/") && !Wi("chrome/") ? Math.round : Ut;

      function zi(t) {
        t.min = Ni(t.min), t.max = Ni(t.max)
      }

      function $i(t, e, n) {
        return "position" === t || "preserve-aspect" === t && !eo(ci(e), ci(n), .2)
      }
      const Hi = bi({
          attachResizeListener: (t, e) => _t(t, "resize", e),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop
          }),
          checkIsScrollRoot: () => !0
        }),
        Yi = {
          current: void 0
        },
        Gi = bi({
          measureScroll: t => ({
            x: t.scrollLeft,
            y: t.scrollTop
          }),
          defaultParent: () => {
            if (!Yi.current) {
              const t = new Hi({});
              t.mount(window), t.setOptions({
                layoutScroll: !0
              }), Yi.current = t
            }
            return Yi.current
          },
          resetTransform: (t, e) => {
            t.style.transform = void 0 !== e ? e : "none"
          },
          checkIsScrollRoot: t => Boolean("fixed" === window.getComputedStyle(t).position)
        }),
        Xi = {
          pan: {
            Feature: class extends ae {
              constructor() {
                super(...arguments), this.removePointerDownListener = Ut
              }
              onPointerDown(t) {
                this.session = new Xs(t, this.createPanHandlers(), {
                  transformPagePoint: this.node.getTransformPagePoint(),
                  contextWindow: Ro(this.node)
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
                  onSessionStart: Fo(t),
                  onStart: Fo(e),
                  onMove: n,
                  onEnd: (t, e) => {
                    delete this.session, s && zt.update((() => s(t, e)))
                  }
                }
              }
              mount() {
                this.removePointerDownListener = Qt(this.node.current, "pointerdown", (t => this.onPointerDown(t)))
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
            Feature: class extends ae {
              constructor(t) {
                super(t), this.removeGroupControls = Ut, this.removeListeners = Ut, this.controls = new Bo(t)
              }
              mount() {
                const {
                  dragControls: t
                } = this.node.getProps();
                t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || Ut
              }
              unmount() {
                this.removeGroupControls(), this.removeListeners()
              }
            },
            ProjectionNode: Gi,
            MeasureLayout: Ho
          }
        },
        qi = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;

      function _i(t, e, n = 1) {
        Pe(n <= 4, `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`);
        const [s, o] = function(t) {
          const e = qi.exec(t);
          if (!e) return [, ];
          const [, n, s] = e;
          return [n, s]
        }(t);
        if (!s) return;
        const i = window.getComputedStyle(e).getPropertyValue(s);
        if (i) {
          const t = i.trim();
          return gs(t) ? parseFloat(t) : t
        }
        return $(o) ? _i(o, e, n + 1) : o
      }
      const Zi = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"]),
        Ki = t => Zi.has(t),
        Ji = t => t === G || t === st,
        Qi = (t, e) => parseFloat(t.split(", ")[e]),
        tr = (t, e) => (n, {
          transform: s
        }) => {
          if ("none" === s || !s) return 0;
          const o = s.match(/^matrix3d\((.+)\)$/);
          if (o) return Qi(o[1], e); {
            const e = s.match(/^matrix\((.+)\)$/);
            return e ? Qi(e[1], t) : 0
          }
        },
        er = new Set(["x", "y", "z"]),
        nr = B.filter((t => !er.has(t))),
        sr = {
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
          x: tr(4, 13),
          y: tr(5, 14)
        };
      sr.translateX = sr.x, sr.translateY = sr.y;

      function or(t, e, n, s) {
        return (t => Object.keys(t).some(Ki))(e) ? ((t, e, n = {}, s = {}) => {
          e = {
            ...e
          }, s = {
            ...s
          };
          const o = Object.keys(e).filter(Ki);
          let i = [],
            r = !1;
          const l = [];
          if (o.forEach((o => {
              const a = t.getValue(o);
              if (!t.hasValue(o)) return;
              let u = n[o],
                c = Ts(u);
              const h = e[o];
              let d;
              if (Lt(h)) {
                const t = h.length,
                  e = null === h[0] ? 1 : 0;
                u = h[e], c = Ts(u);
                for (let n = e; n < t && null !== h[n]; n++) d ? Pe(Ts(h[n]) === d, "All keyframes must be of the same type") : (d = Ts(h[n]), Pe(d === c || Ji(c) && Ji(d), "Keyframes must be of the same dimension as the current value"))
              } else d = Ts(h);
              if (c !== d)
                if (Ji(c) && Ji(d)) {
                  const t = a.get();
                  "string" == typeof t && a.set(parseFloat(t)), "string" == typeof h ? e[o] = parseFloat(h) : Array.isArray(h) && d === st && (e[o] = h.map(parseFloat))
                } else(null == c ? void 0 : c.transform) && (null == d ? void 0 : d.transform) && (0 === u || 0 === h) ? 0 === u ? a.set(d.transform(u)) : e[o] = c.transform(h) : (r || (i = function(t) {
                  const e = [];
                  return nr.forEach((n => {
                    const s = t.getValue(n);
                    void 0 !== s && (e.push([n, s.get()]), s.set(n.startsWith("scale") ? 1 : 0))
                  })), e.length && t.render(), e
                }(t), r = !0), l.push(o), s[o] = void 0 !== s[o] ? s[o] : e[o], a.jump(h))
            })), l.length) {
            const n = l.indexOf("height") >= 0 ? window.pageYOffset : null,
              o = ((t, e, n) => {
                const s = e.measureViewportBox(),
                  o = e.current,
                  i = getComputedStyle(o),
                  {
                    display: r
                  } = i,
                  a = {};
                "none" === r && e.setStaticValue("display", t.display || "block"), n.forEach((t => {
                  a[t] = sr[t](s, i)
                })), e.render();
                const l = e.measureViewportBox();
                return n.forEach((n => {
                  const s = e.getValue(n);
                  s && s.jump(a[n]), t[n] = sr[n](l, i)
                })), t
              })(e, t, l);
            return i.length && i.forEach((([e, n]) => {
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
      const ir = {
          current: null
        },
        rr = {
          current: !1
        };

      function ar() {
        if (rr.current = !0, a)
          if (window.matchMedia) {
            const t = window.matchMedia("(prefers-reduced-motion)"),
              e = () => ir.current = t.matches;
            t.addListener(e), e()
          } else ir.current = !1
      }
      const lr = new WeakMap,
        ur = Object.keys(b),
        cr = ur.length,
        hr = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"],
        dr = y.length;
      class pr {
        constructor({
          parent: t,
          props: e,
          presenceContext: n,
          reducedMotionConfig: s,
          visualState: o
        }, i = {}) {
          this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
            this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
          }, this.scheduleRender = () => zt.render(this.render, !1, !0);
          const {
            latestValues: r,
            renderState: a
          } = o;
          this.latestValues = r, this.baseTarget = {
            ...r
          }, this.initialValues = e.initial ? {
            ...r
          } : {}, this.renderState = a, this.parent = t, this.props = e, this.presenceContext = n, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = s, this.options = i, this.isControllingVariants = v(e), this.isVariantNode = x(e), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = Boolean(t && t.current);
          const {
            willChange: l,
            ...u
          } = this.scrapeMotionValuesFromProps(e, {});
          for (const t in u) {
            const e = u[t];
            void 0 !== r[t] && I(e) && (e.set(r[t], !1), ms(l) && l.add(t))
          }
        }
        scrapeMotionValuesFromProps(t, e) {
          return {}
        }
        mount(t) {
          this.current = t, lr.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach(((t, e) => this.bindToMotionValue(e, t))), rr.current || ar(), this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || ir.current), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext)
        }
        unmount() {
          lr.delete(this.current), this.projection && this.projection.unmount(), $t(this.notifyUpdate), $t(this.render), this.valueSubscriptions.forEach((t => t())), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
          for (const t in this.events) this.events[t].clear();
          for (const t in this.features) this.features[t].unmount();
          this.current = null
        }
        bindToMotionValue(t, e) {
          const n = j.has(t),
            s = e.on("change", (e => {
              this.latestValues[t] = e, this.props.onUpdate && zt.update(this.notifyUpdate, !1, !0), n && this.projection && (this.projection.isTransformDirty = !0)
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
          let i, r;
          for (let t = 0; t < cr; t++) {
            const n = ur[t],
              {
                isEnabled: s,
                Feature: o,
                ProjectionNode: a,
                MeasureLayout: l
              } = b[n];
            a && (i = a), s(e) && (!this.features[n] && o && (this.features[n] = new o(this)), l && (r = l))
          }
          if (("html" === this.type || "svg" === this.type) && !this.projection && i) {
            this.projection = new i(this.latestValues, this.parent && this.parent.projection);
            const {
              layoutId: t,
              layout: n,
              drag: s,
              dragConstraints: r,
              layoutScroll: a,
              layoutRoot: l
            } = e;
            this.projection.setOptions({
              layoutId: t,
              layout: n,
              alwaysMeasureLayout: Boolean(s) || r && p(r),
              visualElement: this,
              scheduleRender: () => this.scheduleRender(),
              animationType: "string" == typeof n ? n : "both",
              initialPromotionConfig: o,
              layoutScroll: a,
              layoutRoot: l
            })
          }
          return r
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
          return this.current ? this.measureInstanceViewportBox(this.current, this.props) : po()
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
          for (let e = 0; e < hr.length; e++) {
            const n = hr[e];
            this.propEventSubscriptions[n] && (this.propEventSubscriptions[n](), delete this.propEventSubscriptions[n]);
            const s = t["on" + n];
            s && (this.propEventSubscriptions[n] = this.on(n, s))
          }
          this.prevMotionValues = function(t, e, n) {
            const {
              willChange: s
            } = e;
            for (const o in e) {
              const i = e[o],
                r = n[o];
              if (I(i)) t.addValue(o, i), ms(s) && s.add(o);
              else if (I(r)) t.addValue(o, bs(i, {
                owner: t
              })), ms(s) && s.remove(o);
              else if (r !== i)
                if (t.hasValue(o)) {
                  const e = t.getValue(o);
                  !e.hasAnimated && e.set(i)
                } else {
                  const e = t.getStaticValue(o);
                  t.addValue(o, bs(void 0 !== e ? e : i, {
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
          for (let t = 0; t < dr; t++) {
            const n = y[t],
              s = this.props[n];
            (f(s) || !1 === s) && (e[n] = s)
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
          return void 0 === n && void 0 !== e && (n = bs(e, {
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
          } = this.props, s = "string" == typeof n || "object" == typeof n ? null === (e = Dt(this.props, n)) || void 0 === e ? void 0 : e[t] : void 0;
          if (n && void 0 !== s) return s;
          const o = this.getBaseTargetFromProps(this.props, t);
          return void 0 === o || I(o) ? void 0 !== this.initialValues[t] && void 0 === s ? void 0 : this.baseTarget[t] : o
        }
        on(t, e) {
          return this.events[t] || (this.events[t] = new xs), this.events[t].add(e)
        }
        notify(t, ...e) {
          this.events[t] && this.events[t].notify(...e)
        }
      }
      class fr extends pr {
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
          let i = Ls(n, t || {}, this);
          if (s && (e && (e = s(e)), n && (n = s(n)), i && (i = s(i))), o) {
            Ds(this, n, i);
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
                  if (!$(e)) return;
                  const n = _i(e, s);
                  n && t.set(n)
                }));
                for (const t in e) {
                  const o = e[t];
                  if (!$(o)) continue;
                  const i = _i(o, s);
                  i && (e[t] = i, n || (n = {}), void 0 === n[t] && (n[t] = o))
                }
                return {
                  target: e,
                  transitionEnd: n
                }
              }(t, e, s);
              return or(t, e = o.target, n, s = o.transitionEnd)
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
      class mr extends fr {
        constructor() {
          super(...arguments), this.type = "html"
        }
        readValueFromInstance(t, e) {
          if (j.has(e)) {
            const t = ls(e);
            return t && t.default || 0
          } {
            const s = (n = t, window.getComputedStyle(n)),
              o = (z(e) ? s.getPropertyValue(e) : s[e]) || 0;
            return "string" == typeof o ? o.trim() : o
          }
          var n
        }
        measureInstanceViewportBox(t, {
          transformPagePoint: e
        }) {
          return Do(t, e)
        }
        build(t, e, n, s) {
          ut(t, e, n, s.transformTemplate)
        }
        scrapeMotionValuesFromProps(t, e) {
          return Mt(t, e)
        }
        handleChildMotionValue() {
          this.childSubscription && (this.childSubscription(), delete this.childSubscription);
          const {
            children: t
          } = this.props;
          I(t) && (this.childSubscription = t.on("change", (t => {
            this.current && (this.current.textContent = `${t}`)
          })))
        }
        renderInstance(t, e, n, s) {
          At(t, e, n, s)
        }
      }
      class gr extends fr {
        constructor() {
          super(...arguments), this.type = "svg", this.isSVGTag = !1
        }
        getBaseTargetFromProps(t, e) {
          return t[e]
        }
        readValueFromInstance(t, e) {
          if (j.has(e)) {
            const t = ls(e);
            return t && t.default || 0
          }
          return e = Ct.has(e) ? e : c(e), t.getAttribute(e)
        }
        measureInstanceViewportBox() {
          return po()
        }
        scrapeMotionValuesFromProps(t, e) {
          return kt(t, e)
        }
        build(t, e, n, s) {
          wt(t, e, n, this.isSVGTag, s.transformTemplate)
        }
        renderInstance(t, e, n, s) {
          Vt(t, e, 0, s)
        }
        mount(t) {
          this.isSVGTag = Et(t.tagName), super.mount(t)
        }
      }
      const yr = (t, e) => D(t) ? new gr(e, {
          enableHardwareAcceleration: !1
        }) : new mr(e, {
          enableHardwareAcceleration: !0
        }),
        vr = {
          layout: {
            ProjectionNode: Gi,
            MeasureLayout: Ho
          }
        },
        xr = {
          ...Hs,
          ...ge,
          ...Xi,
          ...vr
        },
        Pr = M(((t, e) => qt(t, e, xr, yr)));

      function wr(t) {
        return C(qt(t, {
          forwardMotionProps: !1
        }, xr, yr))
      }
      const br = M(qt);

      function Er() {
        const t = (0, s.useRef)(!1);
        return l((() => (t.current = !0, () => {
          t.current = !1
        })), []), t
      }

      function Sr() {
        const t = Er(),
          [e, n] = (0, s.useState)(0),
          o = (0, s.useCallback)((() => {
            t.current && n(e + 1)
          }), [e]);
        return [(0, s.useCallback)((() => zt.postRender(o)), [o]), e]
      }
      class Tr extends s.Component {
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

      function Ar({
        children: t,
        isPresent: e
      }) {
        const n = (0, s.useId)(),
          o = (0, s.useRef)(null),
          i = (0, s.useRef)({
            width: 0,
            height: 0,
            top: 0,
            left: 0
          });
        return (0, s.useInsertionEffect)((() => {
          const {
            width: t,
            height: s,
            top: r,
            left: a
          } = i.current;
          if (e || !o.current || !t || !s) return;
          o.current.dataset.motionPopId = n;
          const l = document.createElement("style");
          return document.head.appendChild(l), l.sheet && l.sheet.insertRule(`\n          [data-motion-pop-id="${n}"] {\n            position: absolute !important;\n            width: ${t}px !important;\n            height: ${s}px !important;\n            top: ${r}px !important;\n            left: ${a}px !important;\n          }\n        `), () => {
            document.head.removeChild(l)
          }
        }), [e]), s.createElement(Tr, {
          isPresent: e,
          childRef: o,
          sizeRef: i
        }, s.cloneElement(t, {
          ref: o
        }))
      }
      const Cr = ({
        children: t,
        initial: e,
        isPresent: n,
        onExitComplete: o,
        custom: i,
        presenceAffectsLayout: a,
        mode: l
      }) => {
        const u = Rt(Vr),
          c = (0, s.useId)(),
          h = (0, s.useMemo)((() => ({
            id: c,
            initial: e,
            isPresent: n,
            custom: i,
            onExitComplete: t => {
              u.set(t, !0);
              for (const t of u.values())
                if (!t) return;
              o && o()
            },
            register: t => (u.set(t, !1), () => u.delete(t))
          })), a ? void 0 : [n]);
        return (0, s.useMemo)((() => {
          u.forEach(((t, e) => u.set(e, !1)))
        }), [n]), s.useEffect((() => {
          !n && !u.size && o && o()
        }), [n]), "popLayout" === l && (t = s.createElement(Ar, {
          isPresent: n
        }, t)), s.createElement(r.Provider, {
          value: h
        }, t)
      };

      function Vr() {
        return new Map
      }

      function Mr(t) {
        return (0, s.useEffect)((() => () => t()), [])
      }
      const kr = t => t.key || "",
        Dr = ({
          children: t,
          custom: e,
          initial: n = !0,
          onExitComplete: o,
          exitBeforeEnter: i,
          presenceAffectsLayout: r = !0,
          mode: a = "sync"
        }) => {
          Pe(!i, "Replace exitBeforeEnter with mode='wait'");
          const u = (0, s.useContext)(S).forceRender || Sr()[0],
            c = Er(),
            h = function(t) {
              const e = [];
              return s.Children.forEach(t, (t => {
                (0, s.isValidElement)(t) && e.push(t)
              })), e
            }(t);
          let d = h;
          const p = (0, s.useRef)(new Map).current,
            f = (0, s.useRef)(d),
            m = (0, s.useRef)(new Map).current,
            g = (0, s.useRef)(!0);
          if (l((() => {
              g.current = !1,
                function(t, e) {
                  t.forEach((t => {
                    const n = kr(t);
                    e.set(n, t)
                  }))
                }(h, m), f.current = d
            })), Mr((() => {
              g.current = !0, m.clear(), p.clear()
            })), g.current) return s.createElement(s.Fragment, null, d.map((t => s.createElement(Cr, {
            key: kr(t),
            isPresent: !0,
            initial: !!n && void 0,
            presenceAffectsLayout: r,
            mode: a
          }, t))));
          d = [...d];
          const y = f.current.map(kr),
            v = h.map(kr),
            x = y.length;
          for (let t = 0; t < x; t++) {
            const e = y[t]; - 1 !== v.indexOf(e) || p.has(e) || p.set(e, void 0)
          }
          return "wait" === a && p.size && (d = []), p.forEach(((t, n) => {
            if (-1 !== v.indexOf(n)) return;
            const i = m.get(n);
            if (!i) return;
            const l = y.indexOf(n);
            let g = t;
            if (!g) {
              const t = () => {
                p.delete(n);
                const t = Array.from(m.keys()).filter((t => !v.includes(t)));
                if (t.forEach((t => m.delete(t))), f.current = h.filter((e => {
                    const s = kr(e);
                    return s === n || t.includes(s)
                  })), !p.size) {
                  if (!1 === c.current) return;
                  u(), o && o()
                }
              };
              g = s.createElement(Cr, {
                key: kr(i),
                isPresent: !1,
                onExitComplete: t,
                custom: e,
                presenceAffectsLayout: r,
                mode: a
              }, i), p.set(n, g)
            }
            d.splice(l, 0, g)
          })), d = d.map((t => {
            const e = t.key;
            return p.has(e) ? t : s.createElement(Cr, {
              key: kr(t),
              isPresent: !0,
              presenceAffectsLayout: r,
              mode: a
            }, t)
          })), s.createElement(s.Fragment, null, p.size ? d : d.map((t => (0, s.cloneElement)(t))))
        };

      function Rr({
        children: t,
        isValidProp: e,
        ...n
      }) {
        e && gt(e), (n = {
          ...(0, s.useContext)(o),
          ...n
        }).isStatic = Rt((() => n.isStatic));
        const i = (0, s.useMemo)((() => n), [JSON.stringify(n.transition), n.transformPagePoint, n.reducedMotion]);
        return s.createElement(o.Provider, {
          value: i
        }, t)
      }

      function Lr({
        children: t,
        features: e,
        strict: n = !1
      }) {
        const [, o] = (0, s.useState)(!Br(e)), i = (0, s.useRef)(void 0);
        if (!Br(e)) {
          const {
            renderer: t,
            ...n
          } = e;
          i.current = t, E(n)
        }
        return (0, s.useEffect)((() => {
          Br(e) && e().then((({
            renderer: t,
            ...e
          }) => {
            E(e), i.current = t, o(!0)
          }))
        }), []), s.createElement(u.Provider, {
          value: {
            renderer: i.current,
            strict: n
          }
        }, t)
      }

      function Br(t) {
        return "function" == typeof t
      }
      const jr = (0, s.createContext)(null),
        Fr = t => !t.isLayoutDirty && t.willUpdate(!1);

      function Ir() {
        const t = new Set,
          e = new WeakMap,
          n = () => t.forEach(Fr);
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
      const Or = t => !0 === t,
        Ur = ({
          children: t,
          id: e,
          inherit: n = !0
        }) => {
          const o = (0, s.useContext)(S),
            i = (0, s.useContext)(jr),
            [r, a] = Sr(),
            l = (0, s.useRef)(null),
            u = o.id || i;
          null === l.current && ((t => Or(!0 === t) || "id" === t)(n) && u && (e = e ? u + "-" + e : u), l.current = {
            id: e,
            group: Or(n) && o.group || Ir()
          });
          const c = (0, s.useMemo)((() => ({
            ...l.current,
            forceRender: r
          })), [a]);
          return s.createElement(S.Provider, {
            value: c
          }, t)
        },
        Wr = (0, s.createContext)(null),
        Nr = (0, s.forwardRef)((function({
          children: t,
          as: e = "ul",
          axis: n = "y",
          onReorder: o,
          values: i,
          ...r
        }, a) {
          const l = Rt((() => Pr(e))),
            u = [],
            c = (0, s.useRef)(!1);
          Pe(Boolean(i), "Reorder.Group must be provided a values prop");
          const h = {
            axis: n,
            registerItem: (t, e) => {
              const s = u.findIndex((e => t === e.value)); - 1 !== s ? u[s].layout = e[n] : u.push({
                value: t,
                layout: e[n]
              }), u.sort($r)
            },
            updateOrder: (t, e, n) => {
              if (c.current) return;
              const s = function(t, e, n, s) {
                if (!s) return t;
                const o = t.findIndex((t => t.value === e));
                if (-1 === o) return t;
                const i = s > 0 ? 1 : -1,
                  r = t[o + i];
                if (!r) return t;
                const a = t[o],
                  l = r.layout,
                  u = nn(l.min, l.max, .5);
                return 1 === i && a.layout.max + n > u || -1 === i && a.layout.min + n < u ? function([...t], e, n) {
                  const s = e < 0 ? t.length + e : e;
                  if (s >= 0 && s < t.length) {
                    const s = n < 0 ? t.length + n : n,
                      [o] = t.splice(e, 1);
                    t.splice(s, 0, o)
                  }
                  return t
                }(t, o, o + i) : t
              }(u, t, e, n);
              u !== s && (c.current = !0, o(s.map(zr).filter((t => -1 !== i.indexOf(t)))))
            }
          };
          return (0, s.useEffect)((() => {
            c.current = !1
          })), s.createElement(l, {
            ...r,
            ref: a,
            ignoreStrict: !0
          }, s.createElement(Wr.Provider, {
            value: h
          }, t))
        }));

      function zr(t) {
        return t.value
      }

      function $r(t, e) {
        return t.layout.min - e.layout.min
      }

      function Hr(t) {
        const e = Rt((() => bs(t))),
          {
            isStatic: n
          } = (0, s.useContext)(o);
        if (n) {
          const [, n] = (0, s.useState)(t);
          (0, s.useEffect)((() => e.on("change", n)), [])
        }
        return e
      }
      const Yr = t => (t => t && "object" == typeof t && t.mix)(t) ? t.mix : void 0;

      function Gr(...t) {
        const e = !Array.isArray(t[0]),
          n = e ? 0 : -1,
          s = t[0 + n],
          o = t[1 + n],
          i = t[2 + n],
          r = t[3 + n],
          a = Tn(o, i, {
            mixer: Yr(i[0]),
            ...r
          });
        return e ? a(s) : a
      }

      function Xr(t, e) {
        const n = Hr(e()),
          s = () => n.set(e());
        return s(), l((() => {
          const e = () => zt.update(s, !1, !0),
            n = t.map((t => t.on("change", e)));
          return () => {
            n.forEach((t => t())), $t(s)
          }
        })), n
      }

      function qr(t, e, n, s) {
        if ("function" == typeof t) return function(t) {
          Ps.current = [], t();
          const e = Xr(Ps.current, t);
          return Ps.current = void 0, e
        }(t);
        const o = "function" == typeof e ? e : Gr(e, n, s);
        return Array.isArray(t) ? _r(t, o) : _r([t], (([t]) => o(t)))
      }

      function _r(t, e) {
        const n = Rt((() => []));
        return Xr(t, (() => {
          n.length = 0;
          const s = t.length;
          for (let e = 0; e < s; e++) n[e] = t[e].get();
          return e(n)
        }))
      }

      function Zr(t, e = 0) {
        return I(t) ? t : Hr(e)
      }
      const Kr = (0, s.forwardRef)((function({
          children: t,
          style: e = {},
          value: n,
          as: o = "li",
          onDrag: i,
          layout: r = !0,
          ...a
        }, l) {
          const u = Rt((() => Pr(o))),
            c = (0, s.useContext)(Wr),
            h = {
              x: Zr(e.x),
              y: Zr(e.y)
            },
            d = qr([h.x, h.y], (([t, e]) => t || e ? 1 : "unset"));
          Pe(Boolean(c), "Reorder.Item must be a child of Reorder.Group");
          const {
            axis: p,
            registerItem: f,
            updateOrder: m
          } = c;
          return s.createElement(u, {
            drag: p,
            ...a,
            dragSnapToOrigin: !0,
            style: {
              ...e,
              x: h.x,
              y: h.y,
              zIndex: d
            },
            layout: r,
            onDrag: (t, e) => {
              const {
                velocity: s
              } = e;
              s[p] && m(n, h[p].get(), s[p]), i && i(t, e)
            },
            onLayoutMeasure: t => f(n, t),
            ref: l,
            ignoreStrict: !0
          }, t)
        })),
        Jr = {
          Group: Nr,
          Item: Kr
        },
        Qr = {
          renderer: yr,
          ...Hs,
          ...ge
        },
        ta = {
          ...Qr,
          ...Xi,
          ...vr
        };

      function ea(t, ...e) {
        const n = t.length;
        return Xr(e.filter(I), (function() {
          let s = "";
          for (let o = 0; o < n; o++) {
            s += t[o];
            const n = e[o];
            n && (s += I(n) ? n.get() : n)
          }
          return s
        }))
      }

      function na(t, e = {}) {
        const {
          isStatic: n
        } = (0, s.useContext)(o), i = (0, s.useRef)(null), r = Hr(I(t) ? t.get() : t), a = () => {
          i.current && i.current.stop()
        };
        return (0, s.useInsertionEffect)((() => r.attach(((t, s) => {
          if (n) return s(t);
          if (a(), i.current = qn({
              keyframes: [r.get(), t],
              velocity: r.getVelocity(),
              type: "spring",
              restDelta: .001,
              restSpeed: .01,
              ...e,
              onUpdate: s
            }), !Ht.isProcessing) {
            const t = performance.now() - Ht.timestamp;
            t < 30 && (i.current.time = be(t))
          }
          return r.get()
        }), a)), [JSON.stringify(e)]), l((() => {
          if (I(t)) return t.on("change", (t => r.set(parseFloat(t))))
        }), [r]), r
      }

      function sa(t, e, n) {
        (0, s.useInsertionEffect)((() => t.on(e, n)), [t, e, n])
      }

      function oa(t) {
        const e = Hr(t.getVelocity());
        return sa(t, "velocityChange", (t => {
          e.set(t)
        })), e
      }

      function ia(t, e, n) {
        var s;
        if ("string" == typeof t) {
          let o = document;
          e && (Pe(Boolean(e.current), "Scope provided, but no element detected."), o = e.current), n ? (null !== (s = n[t]) && void 0 !== s || (n[t] = o.querySelectorAll(t)), t = n[t]) : t = o.querySelectorAll(t)
        } else t instanceof Element && (t = [t]);
        return Array.from(t || [])
      }
      const ra = new WeakMap;
      let aa;

      function la({
        target: t,
        contentRect: e,
        borderBoxSize: n
      }) {
        var s;
        null === (s = ra.get(t)) || void 0 === s || s.forEach((s => {
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

      function ua(t) {
        t.forEach(la)
      }

      function ca(t, e) {
        aa || "undefined" != typeof ResizeObserver && (aa = new ResizeObserver(ua));
        const n = ia(t);
        return n.forEach((t => {
          let n = ra.get(t);
          n || (n = new Set, ra.set(t, n)), n.add(e), null == aa || aa.observe(t)
        })), () => {
          n.forEach((t => {
            const n = ra.get(t);
            null == n || n.delete(e), (null == n ? void 0 : n.size) || null == aa || aa.unobserve(t)
          }))
        }
      }
      const ha = new Set;
      let da;
      const pa = 50,
        fa = () => ({
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
        ma = {
          x: {
            length: "Width",
            position: "Left"
          },
          y: {
            length: "Height",
            position: "Top"
          }
        };

      function ga(t, e, n, s) {
        const o = n[e],
          {
            length: i,
            position: r
          } = ma[e],
          a = o.current,
          l = n.time;
        o.current = t["scroll" + r], o.scrollLength = t["scroll" + i] - t["client" + i], o.offset.length = 0, o.offset[0] = 0, o.offset[1] = o.scrollLength, o.progress = En(0, o.scrollLength, o.current);
        const u = s - l;
        o.velocity = u > pa ? 0 : Mn(o.current - a, u)
      }
      const ya = {
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
        va = {
          start: 0,
          center: .5,
          end: 1
        };

      function xa(t, e, n = 0) {
        let s = 0;
        if (void 0 !== va[t] && (t = va[t]), "string" == typeof t) {
          const e = parseFloat(t);
          t.endsWith("px") ? s = e : t.endsWith("%") ? t = e / 100 : t.endsWith("vw") ? s = e / 100 * document.documentElement.clientWidth : t.endsWith("vh") ? s = e / 100 * document.documentElement.clientHeight : t = e
        }
        return "number" == typeof t && (s = e * t), n + s
      }
      const Pa = [0, 0];

      function wa(t, e, n, s) {
        let o = Array.isArray(t) ? t : Pa,
          i = 0,
          r = 0;
        return "number" == typeof t ? o = [t, t] : "string" == typeof t && (o = (t = t.trim()).includes(" ") ? t.split(" ") : [t, va[t] ? t : "0"]), i = xa(o[0], n, s), r = xa(o[1], e), i - r
      }
      const ba = {
        x: 0,
        y: 0
      };

      function Ea(t, e, n, s = {}) {
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
              ga(t, "x", e, n), ga(t, "y", e, n), e.time = n
            }(t, n, e), (s.offset || s.target) && function(t, e, n) {
              let {
                offset: s = ya.All
              } = n;
              const {
                target: o = t,
                axis: i = "y"
              } = n, r = "y" === i ? "height" : "width", a = o !== t ? function(t, e) {
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
                      i = s.parentNode;
                    for (; !o;) "svg" === i.tagName && (o = i), i = s.parentNode;
                    s = o
                  }
                }
                return n
              }(o, t) : ba, l = o === t ? {
                width: t.scrollWidth,
                height: t.scrollHeight
              } : function(t) {
                return "getBBox" in t && "svg" !== t.tagName ? t.getBBox() : {
                  width: t.clientWidth,
                  height: t.clientHeight
                }
              }(o), u = {
                width: t.clientWidth,
                height: t.clientHeight
              };
              e[i].offset.length = 0;
              let c = !e[i].interpolate;
              const h = s.length;
              for (let t = 0; t < h; t++) {
                const n = wa(s[t], u[r], l[r], a[i]);
                c || n === e[i].interpolatorOffsets[t] || (c = !0), e[i].offset[t] = n
              }
              c && (e[i].interpolate = Tn(e[i].offset, Cn(s)), e[i].interpolatorOffsets = [...e[i].offset]), e[i].progress = e[i].interpolate(e[i].current)
            }(t, n, s)
          },
          notify: () => e(n)
        }
      }
      const Sa = new WeakMap,
        Ta = new WeakMap,
        Aa = new WeakMap,
        Ca = t => t === document.documentElement ? window : t;

      function Va(t, {
        container: e = document.documentElement,
        ...n
      } = {}) {
        let s = Aa.get(e);
        s || (s = new Set, Aa.set(e, s));
        const o = fa(),
          i = Ea(e, t, o, n);
        if (s.add(i), !Sa.has(e)) {
          const t = () => {
              for (const t of s) t.measure()
            },
            n = () => {
              for (const t of s) t.update(Ht.timestamp)
            },
            o = () => {
              for (const t of s) t.notify()
            },
            i = () => {
              zt.read(t, !1, !0), zt.read(n, !1, !0), zt.update(o, !1, !0)
            };
          Sa.set(e, i);
          const u = Ca(e);
          window.addEventListener("resize", i, {
            passive: !0
          }), e !== document.documentElement && Ta.set(e, (l = i, "function" == typeof(a = e) ? (r = a, ha.add(r), da || (da = () => {
            const t = {
                width: window.innerWidth,
                height: window.innerHeight
              },
              e = {
                target: window,
                size: t,
                contentSize: t
              };
            ha.forEach((t => t(e)))
          }, window.addEventListener("resize", da)), () => {
            ha.delete(r), !ha.size && da && (da = void 0)
          }) : ca(a, l))), u.addEventListener("scroll", i, {
            passive: !0
          })
        }
        var r, a, l;
        const u = Sa.get(e);
        return zt.read(u, !1, !0), () => {
          var t;
          $t(u);
          const n = Aa.get(e);
          if (!n) return;
          if (n.delete(i), n.size) return;
          const s = Sa.get(e);
          Sa.delete(e), s && (Ca(e).removeEventListener("scroll", s), null === (t = Ta.get(e)) || void 0 === t || t(), window.removeEventListener("resize", s))
        }
      }

      function Ma(t, e) {
        xe(Boolean(!e || e.current), `You have defined a ${t} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`)
      }
      const ka = () => ({
        scrollX: bs(0),
        scrollY: bs(0),
        scrollXProgress: bs(0),
        scrollYProgress: bs(0)
      });

      function Da({
        container: t,
        target: e,
        layoutEffect: n = !0,
        ...o
      } = {}) {
        const i = Rt(ka);
        return (n ? l : s.useEffect)((() => (Ma("target", e), Ma("container", t), Va((({
          x: t,
          y: e
        }) => {
          i.scrollX.set(t.current), i.scrollXProgress.set(t.progress), i.scrollY.set(e.current), i.scrollYProgress.set(e.progress)
        }), {
          ...o,
          container: (null == t ? void 0 : t.current) || void 0,
          target: (null == e ? void 0 : e.current) || void 0
        }))), [t, e, JSON.stringify(o.offset)]), i
      }

      function Ra(t) {
        return Da({
          container: t
        })
      }

      function La() {
        return Da()
      }

      function Ba(t) {
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
          return zt.update(s, !0), () => $t(s)
        }), [t])
      }

      function ja() {
        const t = Hr(0);
        return Ba((e => t.set(e))), t
      }
      class Fa extends ws {
        constructor() {
          super(...arguments), this.members = [], this.transforms = new Set
        }
        add(t) {
          let e;
          j.has(t) ? (this.transforms.add(t), e = "transform") : t.startsWith("origin") || z(t) || "willChange" === t || (e = c(t)), e && (ys(this.members, e), this.update())
        }
        remove(t) {
          j.has(t) ? (this.transforms.delete(t), this.transforms.size || vs(this.members, "transform")) : vs(this.members, c(t)), this.update()
        }
        update() {
          this.set(this.members.length ? this.members.join(", ") : "auto")
        }
      }

      function Ia() {
        return Rt((() => new Fa("auto")))
      }

      function Oa() {
        !rr.current && ar();
        const [t] = (0, s.useState)(ir.current);
        return t
      }

      function Ua() {
        const t = Oa(),
          {
            reducedMotion: e
          } = (0, s.useContext)(o);
        return "never" !== e && ("always" === e || t)
      }

      function Wa() {
        let t = !1;
        const e = new Set,
          n = {
            subscribe: t => (e.add(t), () => {
              e.delete(t)
            }),
            start(n, s) {
              Pe(t, "controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook.");
              const o = [];
              return e.forEach((t => {
                o.push(Us(t, n, {
                  transitionOverride: s
                }))
              })), Promise.all(o)
            },
            set: n => (Pe(t, "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."), e.forEach((t => {
              ! function(t, e) {
                Array.isArray(e) ? ks(t, e) : "string" == typeof e ? ks(t, [e]) : Ms(t, e)
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

      function Na(t, e) {
        let n;
        const s = () => {
          const {
            currentTime: s
          } = e, o = (null === s ? 0 : s.value) / 100;
          n !== o && t(o), n = o
        };
        return zt.update(s, !0), () => $t(s)
      }
      const za = _n((() => void 0 !== window.ScrollTimeline));
      class $a {
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
            if (!za() || !e.attachTimeline) return e.pause(), Na((t => {
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

      function Ha(t) {
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
          n = gi(t) ? new gr(e, {
            enableHardwareAcceleration: !1
          }) : new mr(e, {
            enableHardwareAcceleration: !0
          });
        n.mount(t), lr.set(t, n)
      }

      function Ya(t, e = 100) {
        const n = zn({
            keyframes: [0, e],
            ...t
          }),
          s = Math.min(Gn(n), Yn);
        return {
          type: "keyframes",
          ease: t => n.next(s * t).value / e,
          duration: be(s)
        }
      }

      function Ga(t, e, n, s) {
        var o;
        return "number" == typeof e ? e : e.startsWith("-") || e.startsWith("+") ? Math.max(0, t + parseFloat(e)) : "<" === e ? n : null !== (o = s.get(e)) && void 0 !== o ? o : t
      }
      const Xa = (t, e, n) => {
        const s = e - t;
        return ((n - t) % s + s) % s + t
      };

      function qa(t, e) {
        return Ie(t) ? t[Xa(0, t.length, e)] : t
      }

      function _a(t, e, n, s, o, i) {
        ! function(t, e, n) {
          for (let s = 0; s < t.length; s++) {
            const o = t[s];
            o.at > e && o.at < n && (vs(t, o), s--)
          }
        }(t, o, i);
        for (let r = 0; r < e.length; r++) t.push({
          value: e[r],
          at: nn(o, i, s[r]),
          easing: qa(n, r)
        })
      }

      function Za(t, e) {
        return t.at === e.at ? null === t.value ? 1 : null === e.value ? -1 : 0 : t.at - e.at
      }

      function Ka(t, e) {
        return !e.has(t) && e.set(t, {}), e.get(t)
      }

      function Ja(t, e) {
        return e[t] || (e[t] = []), e[t]
      }

      function Qa(t) {
        return Array.isArray(t) ? t : [t]
      }

      function tl(t, e) {
        return t[e] ? {
          ...t,
          ...t[e]
        } : {
          ...t
        }
      }
      const el = t => "number" == typeof t,
        nl = t => t.every(el);

      function sl(t, e, n, s) {
        const o = ia(t, s),
          i = o.length;
        Pe(Boolean(i), "No valid element provided.");
        const r = [];
        for (let t = 0; t < i; t++) {
          const s = o[t];
          lr.has(s) || Ha(s);
          const a = lr.get(s),
            l = {
              ...n
            };
          "function" == typeof l.delay && (l.delay = l.delay(t, i)), r.push(...Fs(a, {
            ...e,
            transition: l
          }, {}))
        }
        return new $a(r)
      }
      const ol = t => function(e, n, s) {
          let o;
          var i;
          return i = e, o = Array.isArray(i) && Array.isArray(i[0]) ? function(t, e, n) {
            const s = [],
              o = function(t, {
                defaultTransition: e = {},
                ...n
              } = {}, s) {
                const o = e.duration || .3,
                  i = new Map,
                  r = new Map,
                  a = {},
                  l = new Map;
                let u = 0,
                  c = 0,
                  h = 0;
                for (let n = 0; n < t.length; n++) {
                  const i = t[n];
                  if ("string" == typeof i) {
                    l.set(i, c);
                    continue
                  }
                  if (!Array.isArray(i)) {
                    l.set(i.name, Ga(c, i.at, u, l));
                    continue
                  }
                  let [d, p, f = {}] = i;
                  void 0 !== f.at && (c = Ga(c, f.at, u, l));
                  let m = 0;
                  const g = (t, n, s, i = 0, r = 0) => {
                    const a = Qa(t),
                      {
                        delay: l = 0,
                        times: u = Cn(a),
                        type: d = "keyframes",
                        ...p
                      } = n;
                    let {
                      ease: f = e.ease || "easeOut",
                      duration: g
                    } = n;
                    const y = "function" == typeof l ? l(i, r) : l,
                      v = a.length;
                    if (v <= 2 && "spring" === d) {
                      let t = 100;
                      if (2 === v && nl(a)) {
                        const e = a[1] - a[0];
                        t = Math.abs(e)
                      }
                      const e = {
                        ...p
                      };
                      void 0 !== g && (e.duration = we(g));
                      const n = Ya(e, t);
                      f = n.ease, g = n.duration
                    }
                    null != g || (g = o);
                    const x = c + y,
                      P = x + g;
                    1 === u.length && 0 === u[0] && (u[1] = 1);
                    const w = u.length - a.length;
                    w > 0 && An(u, w), 1 === a.length && a.unshift(null), _a(s, a, f, u, x, P), m = Math.max(y + g, m), h = Math.max(P, h)
                  };
                  if (I(d)) g(p, f, Ja("default", Ka(d, r)));
                  else {
                    const t = ia(d, s, a),
                      e = t.length;
                    for (let n = 0; n < e; n++) {
                      const s = Ka(t[n], r);
                      for (const t in p) g(p[t], tl(f, t), Ja(t, s), n, e)
                    }
                  }
                  u = c, c += m
                }
                return r.forEach(((t, s) => {
                  for (const o in t) {
                    const r = t[o];
                    r.sort(Za);
                    const a = [],
                      l = [],
                      u = [];
                    for (let t = 0; t < r.length; t++) {
                      const {
                        at: e,
                        value: n,
                        easing: s
                      } = r[t];
                      a.push(n), l.push(En(0, h, e)), u.push(s || "easeOut")
                    }
                    0 !== l[0] && (l.unshift(0), a.unshift(a[0]), u.unshift("easeInOut")), 1 !== l[l.length - 1] && (l.push(1), a.push(null)), i.has(s) || i.set(s, {
                      keyframes: {},
                      transition: {}
                    });
                    const c = i.get(s);
                    c.keyframes[o] = a, c.transition[o] = {
                      ...e,
                      duration: h,
                      ease: u,
                      times: l,
                      ...n
                    }
                  }
                })), i
              }(t, e, n);
            return o.forEach((({
              keyframes: t,
              transition: e
            }, n) => {
              let o;
              o = I(n) ? yi(n, t.default, e.default) : sl(n, t, e), s.push(o)
            })), new $a(s)
          }(e, n, t) : function(t) {
            return "object" == typeof t && !Array.isArray(t)
          }(n) ? sl(e, n, s, t) : yi(e, n, s), t && t.animations.push(o), o
        },
        il = ol();

      function rl() {
        const t = Rt((() => ({
            current: null,
            animations: []
          }))),
          e = Rt((() => ol(t)));
        return Mr((() => {
          t.animations.forEach((t => t.stop()))
        })), [t, e]
      }

      function al() {
        const t = Rt(Wa);
        return l(t.mount, []), t
      }
      const ll = al;

      function ul(...t) {
        const e = (0, s.useRef)(0),
          [n, o] = (0, s.useState)(t[e.current]);
        return [n, (0, s.useCallback)((n => {
          e.current = "number" != typeof n ? Xa(0, t.length, e.current + 1) : n, o(t[e.current])
        }), [t.length, ...t])]
      }
      const cl = {
        some: 0,
        all: 1
      };

      function hl(t, e, {
        root: n,
        margin: s,
        amount: o = "some"
      } = {}) {
        const i = ia(t),
          r = new WeakMap,
          a = new IntersectionObserver((t => {
            t.forEach((t => {
              const n = r.get(t.target);
              if (t.isIntersecting !== Boolean(n))
                if (t.isIntersecting) {
                  const n = e(t);
                  "function" == typeof n ? r.set(t.target, n) : a.unobserve(t.target)
                } else n && (n(t), r.delete(t.target))
            }))
          }), {
            root: n,
            rootMargin: s,
            threshold: "number" == typeof o ? o : cl[o]
          });
        return i.forEach((t => a.observe(t))), () => a.disconnect()
      }

      function dl(t, {
        root: e,
        margin: n,
        amount: o,
        once: i = !1
      } = {}) {
        const [r, a] = (0, s.useState)(!1);
        return (0, s.useEffect)((() => {
          if (!t.current || i && r) return;
          const s = {
            root: e && e.current || void 0,
            margin: n,
            amount: o
          };
          return hl(t.current, (() => (a(!0), i ? void 0 : () => a(!1))), s)
        }), [e, t, n, i, o]), r
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
        return Rt(fl)
      }

      function gl(t, e, n, o) {
        (0, s.useEffect)((() => {
          const s = t.current;
          if (n && s) return _t(s, e, n, o)
        }), [t, e, n, o])
      }

      function yl(t) {
        return null !== t && "object" == typeof t && A in t
      }

      function vl(t) {
        if (yl(t)) return t[A]
      }

      function xl() {
        return Pl
      }

      function Pl(t) {
        Yi.current && (Yi.current.isUpdating = !1, Yi.current.blockUpdate(), t && t())
      }

      function wl() {
        const [t, e] = Sr(), n = xl(), o = (0, s.useRef)();
        return (0, s.useEffect)((() => {
          zt.postRender((() => zt.postRender((() => {
            e === o.current && (Ee.current = !1)
          }))))
        }), [e]), s => {
          n((() => {
            Ee.current = !0, t(), s(), o.current = e + 1
          }))
        }
      }

      function bl() {
        Ee.current = !1
      }

      function El() {
        return s.useCallback((() => {
          const t = Yi.current;
          t && t.resetTree()
        }), [])
      }
      const Sl = (t, e) => `${t}: ${e}`,
        Tl = new Map;
      let Al, Cl, Vl;

      function Ml(t, e, n, s) {
        const o = j.has(e) ? "transform" : e,
          i = Sl(t, o),
          r = Tl.get(i);
        if (!r) return null;
        const {
          animation: a,
          startTime: l
        } = r;
        return null === l || window.HandoffComplete ? ((() => {
          Tl.delete(i);
          try {
            a.cancel()
          } catch (t) {}
        })(), null) : (void 0 === Al && (Al = performance.now()), Al - l || 0)
      }

      function kl(t, e, n, s, o) {
        if (window.HandoffComplete) return void(window.HandoffAppearAnimations = void 0);
        const i = t.dataset[h];
        if (!i) return;
        window.HandoffAppearAnimations = Ml;
        const r = Sl(i, e);
        Vl || (Vl = Me(t, e, [n[0], n[0]], {
          duration: 1e4,
          ease: "linear"
        }), Tl.set(r, {
          animation: Vl,
          startTime: null
        }));
        const a = () => {
          Vl.cancel();
          const i = Me(t, e, n, s);
          void 0 === Cl && (Cl = performance.now()), i.startTime = Cl, Tl.set(r, {
            animation: i,
            startTime: Cl
          }), o && o(i)
        };
        Vl.ready ? Vl.ready.then(a).catch(Ut) : a()
      }
      const Dl = () => ({});
      class Rl extends pr {
        build() {}
        measureInstanceViewportBox() {
          return po()
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
          return Ds(this, n, Ls(n, t || {}, this)), {
            transition: t,
            transitionEnd: e,
            ...n
          }
        }
      }
      const Ll = It({
        scrapeMotionValuesFromProps: Dl,
        createRenderState: Dl
      });

      function Bl(t) {
        const [e, n] = (0, s.useState)(t), o = Ll({}, !1), i = Rt((() => new Rl({
          props: {},
          visualState: o,
          presenceContext: null
        }, {
          initialState: t
        })));
        return (0, s.useEffect)((() => (i.mount({}), () => i.unmount())), [i]), (0, s.useEffect)((() => {
          i.update({
            onUpdate: t => {
              n({
                ...t
              })
            }
          }, null)
        }), [n, i]), [e, Rt((() => t => Us(i, t)))]
      }
      const jl = t => t > .001 ? 1 / t : 1e5;
      let Fl = !1;

      function Il(t) {
        let e = Hr(1),
          n = Hr(1);
        const {
          visualElement: o
        } = (0, s.useContext)(i);
        return Pe(!(!t && !o), "If no scale values are provided, useInvertedScale must be used within a child of another motion component."), xe(Fl, "useInvertedScale is deprecated and will be removed in 3.0. Use the layout prop instead."), Fl = !0, t ? (e = t.scaleX || e, n = t.scaleY || n) : o && (e = o.getValue("scaleX", 1), n = o.getValue("scaleY", 1)), {
          scaleX: qr(e, jl),
          scaleY: qr(n, jl)
        }
      }
      let Ol = 0;
      const Ul = ({
          children: t
        }) => (s.useEffect((() => {
          Pe(!1, "AnimateSharedLayout is deprecated: https://www.framer.com/docs/guide-upgrade/##shared-layout-animations")
        }), []), s.createElement(Ur, {
          id: Rt((() => "asl-" + Ol++))
        }, t)),
        Wl = new Map;

      function Nl(t, e) {
        const n = function({
          source: t = document.documentElement,
          axis: e = "y"
        } = {}) {
          Wl.has(t) || Wl.set(t, {});
          const n = Wl.get(t);
          return n[e] || (n[e] = za() ? new ScrollTimeline({
            source: t,
            axis: e
          }) : function({
            source: t,
            axis: e = "y"
          }) {
            const n = {
                value: 0
              },
              s = Va((t => {
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
        return "function" == typeof t ? Na(t, n) : t.attachTimeline(n)
      }

      function zl(t = .1, {
        startDelay: e = 0,
        from: n = 0,
        ease: s
      } = {}) {
        return (o, i) => {
          const r = "number" == typeof n ? n : function(t, e) {
              if ("first" === t) return 0; {
                const n = e - 1;
                return "last" === t ? n : n / 2
              }
            }(n, i),
            a = Math.abs(r - o);
          let l = t * a;
          if (s) {
            const e = i * t;
            l = qe(s)(l / e) * e
          }
          return e + l
        }
      }
      const $l = zt,
        Hl = Nt.reduce(((t, e) => (t[e] = t => $t(t), t)), {})
    }
  }
]);