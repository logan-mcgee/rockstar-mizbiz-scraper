/*! For license information please see 5759db08b901a98a2e01f99730bfd5cd.js.LICENSE.txt */
"use strict";
(self.webpackChunk_rockstargames_modules_core_highlights = self.webpackChunk_rockstargames_modules_core_highlights || []).push([
  [434], {
    3903: (e, t, s) => {
      s.d(t, {
        Z: () => l
      });
      var n = s(279);
      s(2571);
      var i = "undefined" == typeof window || window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__ ? n.createContext(null) : window.__REACT_INTL_CONTEXT__ || (window.__REACT_INTL_CONTEXT__ = n.createContext(null)),
        r = (i.Consumer, i.Provider, i),
        o = function() {
          return o = Object.assign || function(e) {
            for (var t, s = 1, n = arguments.length; s < n; s++)
              for (var i in t = arguments[s]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e
          }, o.apply(this, arguments)
        };

      function a() {
        this.cache = Object.create(null)
      }

      function l() {
        var e = n.useContext(r);
        return function(e) {
          ! function(e, t, s) {
            if (void 0 === s && (s = Error), !e) throw new s("[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")
          }(e)
        }(e), e
      }
      Object.create, Object.create, "function" == typeof SuppressedError && SuppressedError, a.prototype.get = function(e) {
        return this.cache[e]
      }, a.prototype.set = function(e, t) {
        this.cache[e] = t
      }, o(o({}, {
        formats: {},
        messages: {},
        timeZone: void 0,
        defaultLocale: "en",
        defaultFormats: {},
        fallbackOnEmptyString: !0,
        onError: function(e) {},
        onWarn: function(e) {}
      }), {
        textComponent: n.Fragment
      })
    },
    2571: (e, t, s) => {
      var n = s(4607),
        i = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0
        },
        r = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0
        },
        o = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0
        },
        a = {};

      function l(e) {
        return n.isMemo(e) ? o : a[e.$$typeof] || i
      }
      a[n.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0
      }, a[n.Memo] = o;
      var c = Object.defineProperty,
        d = Object.getOwnPropertyNames,
        u = Object.getOwnPropertySymbols,
        p = Object.getOwnPropertyDescriptor,
        h = Object.getPrototypeOf,
        m = Object.prototype;
      e.exports = function e(t, s, n) {
        if ("string" != typeof s) {
          if (m) {
            var i = h(s);
            i && i !== m && e(t, i, n)
          }
          var o = d(s);
          u && (o = o.concat(u(s)));
          for (var a = l(t), f = l(s), g = 0; g < o.length; ++g) {
            var v = o[g];
            if (!(r[v] || n && n[v] || f && f[v] || a && a[v])) {
              var y = p(s, v);
              try {
                c(t, v, y)
              } catch (e) {}
            }
          }
        }
        return t
      }
    },
    7478: (e, t) => {
      var s = "function" == typeof Symbol && Symbol.for,
        n = s ? Symbol.for("react.element") : 60103,
        i = s ? Symbol.for("react.portal") : 60106,
        r = s ? Symbol.for("react.fragment") : 60107,
        o = s ? Symbol.for("react.strict_mode") : 60108,
        a = s ? Symbol.for("react.profiler") : 60114,
        l = s ? Symbol.for("react.provider") : 60109,
        c = s ? Symbol.for("react.context") : 60110,
        d = s ? Symbol.for("react.async_mode") : 60111,
        u = s ? Symbol.for("react.concurrent_mode") : 60111,
        p = s ? Symbol.for("react.forward_ref") : 60112,
        h = s ? Symbol.for("react.suspense") : 60113,
        m = s ? Symbol.for("react.suspense_list") : 60120,
        f = s ? Symbol.for("react.memo") : 60115,
        g = s ? Symbol.for("react.lazy") : 60116,
        v = s ? Symbol.for("react.block") : 60121,
        y = s ? Symbol.for("react.fundamental") : 60117,
        x = s ? Symbol.for("react.responder") : 60118,
        b = s ? Symbol.for("react.scope") : 60119;

      function w(e) {
        if ("object" == typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case n:
              switch (e = e.type) {
                case d:
                case u:
                case r:
                case a:
                case o:
                case h:
                  return e;
                default:
                  switch (e = e && e.$$typeof) {
                    case c:
                    case p:
                    case g:
                    case f:
                    case l:
                      return e;
                    default:
                      return t
                  }
              }
            case i:
              return t
          }
        }
      }

      function S(e) {
        return w(e) === u
      }
      t.AsyncMode = d, t.ConcurrentMode = u, t.ContextConsumer = c, t.ContextProvider = l, t.Element = n, t.ForwardRef = p, t.Fragment = r, t.Lazy = g, t.Memo = f, t.Portal = i, t.Profiler = a, t.StrictMode = o, t.Suspense = h, t.isAsyncMode = function(e) {
        return S(e) || w(e) === d
      }, t.isConcurrentMode = S, t.isContextConsumer = function(e) {
        return w(e) === c
      }, t.isContextProvider = function(e) {
        return w(e) === l
      }, t.isElement = function(e) {
        return "object" == typeof e && null !== e && e.$$typeof === n
      }, t.isForwardRef = function(e) {
        return w(e) === p
      }, t.isFragment = function(e) {
        return w(e) === r
      }, t.isLazy = function(e) {
        return w(e) === g
      }, t.isMemo = function(e) {
        return w(e) === f
      }, t.isPortal = function(e) {
        return w(e) === i
      }, t.isProfiler = function(e) {
        return w(e) === a
      }, t.isStrictMode = function(e) {
        return w(e) === o
      }, t.isSuspense = function(e) {
        return w(e) === h
      }, t.isValidElementType = function(e) {
        return "string" == typeof e || "function" == typeof e || e === r || e === u || e === a || e === o || e === h || e === m || "object" == typeof e && null !== e && (e.$$typeof === g || e.$$typeof === f || e.$$typeof === l || e.$$typeof === c || e.$$typeof === p || e.$$typeof === y || e.$$typeof === x || e.$$typeof === b || e.$$typeof === v)
      }, t.typeOf = w
    },
    4607: (e, t, s) => {
      e.exports = s(7478)
    },
    3032: (e, t, s) => {
      var n = s(279),
        i = Symbol.for("react.element"),
        r = Symbol.for("react.fragment"),
        o = Object.prototype.hasOwnProperty,
        a = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function c(e, t, s) {
        var n, r = {},
          c = null,
          d = null;
        for (n in void 0 !== s && (c = "" + s), void 0 !== t.key && (c = "" + t.key), void 0 !== t.ref && (d = t.ref), t) o.call(t, n) && !l.hasOwnProperty(n) && (r[n] = t[n]);
        if (e && e.defaultProps)
          for (n in t = e.defaultProps) void 0 === r[n] && (r[n] = t[n]);
        return {
          $$typeof: i,
          type: e,
          key: c,
          ref: d,
          props: r,
          _owner: a.current
        }
      }
      t.Fragment = r, t.jsx = c, t.jsxs = c
    },
    3705: (e, t, s) => {
      e.exports = s(3032)
    },
    8449: (e, t, s) => {
      s.d(t, {
        Pn: () => a,
        Wi: () => o,
        frameData: () => l,
        S6: () => c
      });
      var n = s(9853);
      class i {
        constructor() {
          this.order = [], this.scheduled = new Set
        }
        add(e) {
          if (!this.scheduled.has(e)) return this.scheduled.add(e), this.order.push(e), !0
        }
        remove(e) {
          const t = this.order.indexOf(e); - 1 !== t && (this.order.splice(t, 1), this.scheduled.delete(e))
        }
        clear() {
          this.order.length = 0, this.scheduled.clear()
        }
      }
      const r = ["prepare", "read", "update", "preRender", "render", "postRender"],
        {
          schedule: o,
          cancel: a,
          state: l,
          steps: c
        } = function(e, t) {
          let s = !1,
            n = !0;
          const o = {
              delta: 0,
              timestamp: 0,
              isProcessing: !1
            },
            a = r.reduce(((e, t) => (e[t] = function(e) {
              let t = new i,
                s = new i,
                n = 0,
                r = !1,
                o = !1;
              const a = new WeakSet,
                l = {
                  schedule: (e, i = !1, o = !1) => {
                    const l = o && r,
                      c = l ? t : s;
                    return i && a.add(e), c.add(e) && l && r && (n = t.order.length), e
                  },
                  cancel: e => {
                    s.remove(e), a.delete(e)
                  },
                  process: i => {
                    if (r) o = !0;
                    else {
                      if (r = !0, [t, s] = [s, t], s.clear(), n = t.order.length, n)
                        for (let s = 0; s < n; s++) {
                          const n = t.order[s];
                          n(i), a.has(n) && (l.schedule(n), e())
                        }
                      r = !1, o && (o = !1, l.process(i))
                    }
                  }
                };
              return l
            }((() => s = !0)), e)), {}),
            l = e => a[e].process(o),
            c = () => {
              const t = performance.now();
              s = !1, o.delta = n ? 1e3 / 60 : Math.max(Math.min(t - o.timestamp, 40), 1), o.timestamp = t, o.isProcessing = !0, r.forEach(l), o.isProcessing = !1, s && (n = !1, e(c))
            };
          return {
            schedule: r.reduce(((t, i) => {
              const r = a[i];
              return t[i] = (t, i = !1, a = !1) => (s || (s = !0, n = !0, o.isProcessing || e(c)), r.schedule(t, i, a)), t
            }), {}),
            cancel: e => r.forEach((t => a[t].cancel(e))),
            state: o,
            steps: a
          }
        }("undefined" != typeof requestAnimationFrame ? requestAnimationFrame : n.Z)
    },
    2539: (e, t, s) => {
      s.d(t, {
        E: () => Yi
      });
      var n = s(279);
      const i = (0, n.createContext)({
          transformPagePoint: e => e,
          isStatic: !1,
          reducedMotion: "never"
        }),
        r = (0, n.createContext)({}),
        o = (0, n.createContext)(null);
      var a = s(9502);
      const l = (0, n.createContext)({
        strict: !1
      });

      function c(e) {
        return "object" == typeof e && Object.prototype.hasOwnProperty.call(e, "current")
      }

      function d(e) {
        return "string" == typeof e || Array.isArray(e)
      }

      function u(e) {
        return "object" == typeof e && "function" == typeof e.start
      }
      const p = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
        h = ["initial", ...p];

      function m(e) {
        return u(e.animate) || h.some((t => d(e[t])))
      }

      function f(e) {
        return Boolean(m(e) || e.variants)
      }

      function g(e) {
        return Array.isArray(e) ? e.join(" ") : e
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
        y = {};
      for (const e in v) y[e] = {
        isEnabled: t => v[e].some((e => !!t[e]))
      };
      var x = s(6743);
      const b = (0, n.createContext)({}),
        w = (0, n.createContext)({}),
        S = Symbol.for("motionComponentSymbol");

      function T({
        preloadedFeatures: e,
        createVisualElement: t,
        useRender: s,
        useVisualState: u,
        Component: p
      }) {
        e && function(e) {
          for (const t in e) y[t] = {
            ...y[t],
            ...e[t]
          }
        }(e);
        const h = (0, n.forwardRef)((function(h, f) {
          let v;
          const y = {
              ...(0, n.useContext)(i),
              ...h,
              layoutId: E(h)
            },
            {
              isStatic: b
            } = y,
            S = function(e) {
              const {
                initial: t,
                animate: s
              } = function(e, t) {
                if (m(e)) {
                  const {
                    initial: t,
                    animate: s
                  } = e;
                  return {
                    initial: !1 === t || d(t) ? t : void 0,
                    animate: d(s) ? s : void 0
                  }
                }
                return !1 !== e.inherit ? t : {}
              }(e, (0, n.useContext)(r));
              return (0, n.useMemo)((() => ({
                initial: t,
                animate: s
              })), [g(t), g(s)])
            }(h),
            T = u(h, b);
          if (!b && x.j) {
            S.visualElement = function(e, t, s, c) {
              const {
                visualElement: d
              } = (0, n.useContext)(r), u = (0, n.useContext)(l), p = (0, n.useContext)(o), h = (0, n.useContext)(i).reducedMotion, m = (0, n.useRef)();
              c = c || u.renderer, !m.current && c && (m.current = c(e, {
                visualState: t,
                parent: d,
                props: s,
                presenceContext: p,
                blockInitialAnimation: !!p && !1 === p.initial,
                reducedMotionConfig: h
              }));
              const f = m.current;
              (0, n.useInsertionEffect)((() => {
                f && f.update(s, p)
              }));
              const g = (0, n.useRef)(Boolean(window.HandoffAppearAnimations));
              return (0, a.L)((() => {
                f && (f.render(), g.current && f.animationState && f.animationState.animateChanges())
              })), (0, n.useEffect)((() => {
                f && (f.updateFeatures(), !g.current && f.animationState && f.animationState.animateChanges(), window.HandoffAppearAnimations = void 0, g.current = !1)
              })), f
            }(p, T, y, t);
            const s = (0, n.useContext)(w),
              c = (0, n.useContext)(l).strict;
            S.visualElement && (v = S.visualElement.loadFeatures(y, c, e, s))
          }
          return n.createElement(r.Provider, {
            value: S
          }, v && S.visualElement ? n.createElement(v, {
            visualElement: S.visualElement,
            ...y
          }) : null, s(p, h, function(e, t, s) {
            return (0, n.useCallback)((n => {
              n && e.mount && e.mount(n), t && (n ? t.mount(n) : t.unmount()), s && ("function" == typeof s ? s(n) : c(s) && (s.current = n))
            }), [t])
          }(T, S.visualElement, f), T, b, S.visualElement))
        }));
        return h[S] = p, h
      }

      function E({
        layoutId: e
      }) {
        const t = (0, n.useContext)(b).id;
        return t && void 0 !== e ? t + "-" + e : e
      }

      function P(e) {
        function t(t, s = {}) {
          return T(e(t, s))
        }
        if ("undefined" == typeof Proxy) return t;
        const s = new Map;
        return new Proxy(t, {
          get: (e, n) => (s.has(n) || s.set(n, t(n)), s.get(n))
        })
      }
      const C = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

      function M(e) {
        return "string" == typeof e && !e.includes("-") && !!(C.indexOf(e) > -1 || /[A-Z]/.test(e))
      }
      const A = {},
        L = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
        k = new Set(L);

      function D(e, {
        layout: t,
        layoutId: s
      }) {
        return k.has(e) || e.startsWith("origin") || (t || void 0 !== s) && (!!A[e] || "opacity" === e)
      }
      const O = e => Boolean(e && e.getVelocity),
        V = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective"
        },
        I = L.length;
      var R = s(8147);
      const B = (e, t) => t && "number" == typeof e ? t.transform(e) : e;
      var j = s(8937),
        z = s(9985);
      const F = {
          ...j.Rx,
          transform: Math.round
        },
        $ = {
          borderWidth: z.px,
          borderTopWidth: z.px,
          borderRightWidth: z.px,
          borderBottomWidth: z.px,
          borderLeftWidth: z.px,
          borderRadius: z.px,
          radius: z.px,
          borderTopLeftRadius: z.px,
          borderTopRightRadius: z.px,
          borderBottomRightRadius: z.px,
          borderBottomLeftRadius: z.px,
          width: z.px,
          maxWidth: z.px,
          height: z.px,
          maxHeight: z.px,
          size: z.px,
          top: z.px,
          right: z.px,
          bottom: z.px,
          left: z.px,
          padding: z.px,
          paddingTop: z.px,
          paddingRight: z.px,
          paddingBottom: z.px,
          paddingLeft: z.px,
          margin: z.px,
          marginTop: z.px,
          marginRight: z.px,
          marginBottom: z.px,
          marginLeft: z.px,
          rotate: z.RW,
          rotateX: z.RW,
          rotateY: z.RW,
          rotateZ: z.RW,
          scale: j.bA,
          scaleX: j.bA,
          scaleY: j.bA,
          scaleZ: j.bA,
          skew: z.RW,
          skewX: z.RW,
          skewY: z.RW,
          distance: z.px,
          translateX: z.px,
          translateY: z.px,
          translateZ: z.px,
          x: z.px,
          y: z.px,
          z: z.px,
          perspective: z.px,
          transformPerspective: z.px,
          opacity: j.Fq,
          originX: z.$C,
          originY: z.$C,
          originZ: z.px,
          zIndex: F,
          fillOpacity: j.Fq,
          strokeOpacity: j.Fq,
          numOctaves: F
        };

      function _(e, t, s, n) {
        const {
          style: i,
          vars: r,
          transform: o,
          transformOrigin: a
        } = e;
        let l = !1,
          c = !1,
          d = !0;
        for (const e in t) {
          const s = t[e];
          if ((0, R.f9)(e)) {
            r[e] = s;
            continue
          }
          const n = $[e],
            u = B(s, n);
          if (k.has(e)) {
            if (l = !0, o[e] = u, !d) continue;
            s !== (n.default || 0) && (d = !1)
          } else e.startsWith("origin") ? (c = !0, a[e] = u) : i[e] = u
        }
        if (t.transform || (l || n ? i.transform = function(e, {
            enableHardwareAcceleration: t = !0,
            allowTransformNone: s = !0
          }, n, i) {
            let r = "";
            for (let t = 0; t < I; t++) {
              const s = L[t];
              void 0 !== e[s] && (r += `${V[s]||s}(${e[s]}) `)
            }
            return t && !e.z && (r += "translateZ(0)"), r = r.trim(), i ? r = i(e, n ? "" : r) : s && n && (r = "none"), r
          }(e.transform, s, d, n) : i.transform && (i.transform = "none")), c) {
          const {
            originX: e = "50%",
            originY: t = "50%",
            originZ: s = 0
          } = a;
          i.transformOrigin = `${e} ${t} ${s}`
        }
      }
      const N = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {}
      });

      function W(e, t, s) {
        for (const n in t) O(t[n]) || D(n, s) || (e[n] = t[n])
      }

      function G(e, t, s) {
        const i = {},
          r = function(e, t, s) {
            const i = {};
            return W(i, e.style || {}, e), Object.assign(i, function({
              transformTemplate: e
            }, t, s) {
              return (0, n.useMemo)((() => {
                const n = N();
                return _(n, t, {
                  enableHardwareAcceleration: !s
                }, e), Object.assign({}, n.vars, n.style)
              }), [t])
            }(e, t, s)), e.transformValues ? e.transformValues(i) : i
          }(e, t, s);
        return e.drag && !1 !== e.dragListener && (i.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = !0 === e.drag ? "none" : "pan-" + ("x" === e.drag ? "y" : "x")), void 0 === e.tabIndex && (e.onTap || e.onTapStart || e.whileTap) && (i.tabIndex = 0), i.style = r, i
      }
      const H = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "onLayoutAnimationStart", "onLayoutAnimationComplete", "onLayoutMeasure", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "ignoreStrict", "viewport"]);

      function q(e) {
        return e.startsWith("while") || e.startsWith("drag") && "draggable" !== e || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || H.has(e)
      }
      let U = e => !q(e);
      try {
        (X = require("@emotion/is-prop-valid").default) && (U = e => e.startsWith("on") ? !q(e) : X(e))
      } catch (e) {}
      var X;

      function Y(e, t, s) {
        return "string" == typeof e ? e : z.px.transform(t + s * e)
      }
      const Z = {
          offset: "stroke-dashoffset",
          array: "stroke-dasharray"
        },
        K = {
          offset: "strokeDashoffset",
          array: "strokeDasharray"
        };

      function J(e, {
        attrX: t,
        attrY: s,
        attrScale: n,
        originX: i,
        originY: r,
        pathLength: o,
        pathSpacing: a = 1,
        pathOffset: l = 0,
        ...c
      }, d, u, p) {
        if (_(e, c, d, p), u) return void(e.style.viewBox && (e.attrs.viewBox = e.style.viewBox));
        e.attrs = e.style, e.style = {};
        const {
          attrs: h,
          style: m,
          dimensions: f
        } = e;
        h.transform && (f && (m.transform = h.transform), delete h.transform), f && (void 0 !== i || void 0 !== r || m.transform) && (m.transformOrigin = function(e, t, s) {
          return `${Y(t,e.x,e.width)} ${Y(s,e.y,e.height)}`
        }(f, void 0 !== i ? i : .5, void 0 !== r ? r : .5)), void 0 !== t && (h.x = t), void 0 !== s && (h.y = s), void 0 !== n && (h.scale = n), void 0 !== o && function(e, t, s = 1, n = 0, i = !0) {
          e.pathLength = 1;
          const r = i ? Z : K;
          e[r.offset] = z.px.transform(-n);
          const o = z.px.transform(t),
            a = z.px.transform(s);
          e[r.array] = `${o} ${a}`
        }(h, o, a, l, !1)
      }
      const Q = () => ({
          ...N(),
          attrs: {}
        }),
        ee = e => "string" == typeof e && "svg" === e.toLowerCase();

      function te(e, t, s, i) {
        const r = (0, n.useMemo)((() => {
          const s = Q();
          return J(s, t, {
            enableHardwareAcceleration: !1
          }, ee(i), e.transformTemplate), {
            ...s.attrs,
            style: {
              ...s.style
            }
          }
        }), [t]);
        if (e.style) {
          const t = {};
          W(t, e.style, e), r.style = {
            ...t,
            ...r.style
          }
        }
        return r
      }

      function se(e = !1) {
        return (t, s, i, {
          latestValues: r
        }, o) => {
          const a = (M(t) ? te : G)(s, r, o, t),
            l = function(e, t, s) {
              const n = {};
              for (const i in e) "values" === i && "object" == typeof e.values || (U(i) || !0 === s && q(i) || !t && !q(i) || e.draggable && i.startsWith("onDrag")) && (n[i] = e[i]);
              return n
            }(s, "string" == typeof t, e),
            c = {
              ...l,
              ...a,
              ref: i
            },
            {
              children: d
            } = s,
            u = (0, n.useMemo)((() => O(d) ? d.get() : d), [d]);
          return (0, n.createElement)(t, {
            ...c,
            children: u
          })
        }
      }
      const ne = e => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();

      function ie(e, {
        style: t,
        vars: s
      }, n, i) {
        Object.assign(e.style, t, i && i.getProjectionStyles(n));
        for (const t in s) e.style.setProperty(t, s[t])
      }
      const re = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

      function oe(e, t, s, n) {
        ie(e, t, void 0, n);
        for (const s in t.attrs) e.setAttribute(re.has(s) ? s : ne(s), t.attrs[s])
      }

      function ae(e, t) {
        const {
          style: s
        } = e, n = {};
        for (const i in s)(O(s[i]) || t.style && O(t.style[i]) || D(i, e)) && (n[i] = s[i]);
        return n
      }

      function le(e, t) {
        const s = ae(e, t);
        for (const n in e)(O(e[n]) || O(t[n])) && (s[-1 !== L.indexOf(n) ? "attr" + n.charAt(0).toUpperCase() + n.substring(1) : n] = e[n]);
        return s
      }

      function ce(e, t, s, n = {}, i = {}) {
        return "function" == typeof t && (t = t(void 0 !== s ? s : e.custom, n, i)), "string" == typeof t && (t = e.variants && e.variants[t]), "function" == typeof t && (t = t(void 0 !== s ? s : e.custom, n, i)), t
      }
      var de = s(371);
      const ue = e => Array.isArray(e),
        pe = e => Boolean(e && "object" == typeof e && e.mix && e.toValue),
        he = e => ue(e) ? e[e.length - 1] || 0 : e;

      function me(e) {
        const t = O(e) ? e.get() : e;
        return pe(t) ? t.toValue() : t
      }
      const fe = e => (t, s) => {
        const i = (0, n.useContext)(r),
          a = (0, n.useContext)(o),
          l = () => function({
            scrapeMotionValuesFromProps: e,
            createRenderState: t,
            onMount: s
          }, n, i, r) {
            const o = {
              latestValues: ge(n, i, r, e),
              renderState: t()
            };
            return s && (o.mount = e => s(n, e, o)), o
          }(e, t, i, a);
        return s ? l() : (0, de.h)(l)
      };

      function ge(e, t, s, n) {
        const i = {},
          r = n(e, {});
        for (const e in r) i[e] = me(r[e]);
        let {
          initial: o,
          animate: a
        } = e;
        const l = m(e),
          c = f(e);
        t && c && !l && !1 !== e.inherit && (void 0 === o && (o = t.initial), void 0 === a && (a = t.animate));
        let d = !!s && !1 === s.initial;
        d = d || !1 === o;
        const p = d ? a : o;
        return p && "boolean" != typeof p && !u(p) && (Array.isArray(p) ? p : [p]).forEach((t => {
          const s = ce(e, t);
          if (!s) return;
          const {
            transitionEnd: n,
            transition: r,
            ...o
          } = s;
          for (const e in o) {
            let t = o[e];
            Array.isArray(t) && (t = t[d ? t.length - 1 : 0]), null !== t && (i[e] = t)
          }
          for (const e in n) i[e] = n[e]
        })), i
      }
      var ve = s(8449);
      const ye = {
          useVisualState: fe({
            scrapeMotionValuesFromProps: le,
            createRenderState: Q,
            onMount: (e, t, {
              renderState: s,
              latestValues: n
            }) => {
              ve.Wi.read((() => {
                try {
                  s.dimensions = "function" == typeof t.getBBox ? t.getBBox() : t.getBoundingClientRect()
                } catch (e) {
                  s.dimensions = {
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0
                  }
                }
              })), ve.Wi.render((() => {
                J(s, n, {
                  enableHardwareAcceleration: !1
                }, ee(t.tagName), e.transformTemplate), oe(t, s)
              }))
            }
          })
        },
        xe = {
          useVisualState: fe({
            scrapeMotionValuesFromProps: ae,
            createRenderState: N
          })
        };

      function be(e, t, s, n = {
        passive: !0
      }) {
        return e.addEventListener(t, s, n), () => e.removeEventListener(t, s)
      }
      const we = e => "mouse" === e.pointerType ? "number" != typeof e.button || e.button <= 0 : !1 !== e.isPrimary;

      function Se(e, t = "page") {
        return {
          point: {
            x: e[t + "X"],
            y: e[t + "Y"]
          }
        }
      }
      const Te = e => t => we(t) && e(t, Se(t));

      function Ee(e, t, s, n) {
        return be(e, t, Te(s), n)
      }
      var Pe = s(5267);

      function Ce(e) {
        let t = null;
        return () => null === t && (t = e, () => {
          t = null
        })
      }
      const Me = Ce("dragHorizontal"),
        Ae = Ce("dragVertical");

      function Le(e) {
        let t = !1;
        if ("y" === e) t = Ae();
        else if ("x" === e) t = Me();
        else {
          const e = Me(),
            s = Ae();
          e && s ? t = () => {
            e(), s()
          } : (e && e(), s && s())
        }
        return t
      }

      function ke() {
        const e = Le(!0);
        return !e || (e(), !1)
      }
      class De {
        constructor(e) {
          this.isMounted = !1, this.node = e
        }
        update() {}
      }

      function Oe(e, t) {
        const s = "pointer" + (t ? "enter" : "leave"),
          n = "onHover" + (t ? "Start" : "End");
        return Ee(e.current, s, ((s, i) => {
          if ("touch" === s.type || ke()) return;
          const r = e.getProps();
          e.animationState && r.whileHover && e.animationState.setActive("whileHover", t), r[n] && ve.Wi.update((() => r[n](s, i)))
        }), {
          passive: !e.getProps()[n]
        })
      }
      const Ve = (e, t) => !!t && (e === t || Ve(e, t.parentElement));
      var Ie = s(9853);

      function Re(e, t) {
        if (!t) return;
        const s = new PointerEvent("pointer" + e);
        t(s, Se(s))
      }
      const Be = new WeakMap,
        je = new WeakMap,
        ze = e => {
          const t = Be.get(e.target);
          t && t(e)
        },
        Fe = e => {
          e.forEach(ze)
        };
      const $e = {
          some: 0,
          all: 1
        },
        _e = {
          inView: {
            Feature: class extends De {
              constructor() {
                super(...arguments), this.hasEnteredView = !1, this.isInView = !1
              }
              startObserver() {
                this.unmount();
                const {
                  viewport: e = {}
                } = this.node.getProps(), {
                  root: t,
                  margin: s,
                  amount: n = "some",
                  once: i
                } = e, r = {
                  root: t ? t.current : void 0,
                  rootMargin: s,
                  threshold: "number" == typeof n ? n : $e[n]
                };
                return function(e, t, s) {
                  const n = function({
                    root: e,
                    ...t
                  }) {
                    const s = e || document;
                    je.has(s) || je.set(s, {});
                    const n = je.get(s),
                      i = JSON.stringify(t);
                    return n[i] || (n[i] = new IntersectionObserver(Fe, {
                      root: e,
                      ...t
                    })), n[i]
                  }(t);
                  return Be.set(e, s), n.observe(e), () => {
                    Be.delete(e), n.unobserve(e)
                  }
                }(this.node.current, r, (e => {
                  const {
                    isIntersecting: t
                  } = e;
                  if (this.isInView === t) return;
                  if (this.isInView = t, i && !t && this.hasEnteredView) return;
                  t && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", t);
                  const {
                    onViewportEnter: s,
                    onViewportLeave: n
                  } = this.node.getProps(), r = t ? s : n;
                  r && r(e)
                }))
              }
              mount() {
                this.startObserver()
              }
              update() {
                if ("undefined" == typeof IntersectionObserver) return;
                const {
                  props: e,
                  prevProps: t
                } = this.node;
                ["amount", "margin", "root"].some(function({
                  viewport: e = {}
                }, {
                  viewport: t = {}
                } = {}) {
                  return s => e[s] !== t[s]
                }(e, t)) && this.startObserver()
              }
              unmount() {}
            }
          },
          tap: {
            Feature: class extends De {
              constructor() {
                super(...arguments), this.removeStartListeners = Ie.Z, this.removeEndListeners = Ie.Z, this.removeAccessibleListeners = Ie.Z, this.startPointerPress = (e, t) => {
                  if (this.removeEndListeners(), this.isPressing) return;
                  const s = this.node.getProps(),
                    n = Ee(window, "pointerup", ((e, t) => {
                      if (!this.checkPressEnd()) return;
                      const {
                        onTap: s,
                        onTapCancel: n
                      } = this.node.getProps();
                      ve.Wi.update((() => {
                        Ve(this.node.current, e.target) ? s && s(e, t) : n && n(e, t)
                      }))
                    }), {
                      passive: !(s.onTap || s.onPointerUp)
                    }),
                    i = Ee(window, "pointercancel", ((e, t) => this.cancelPress(e, t)), {
                      passive: !(s.onTapCancel || s.onPointerCancel)
                    });
                  this.removeEndListeners = (0, Pe.z)(n, i), this.startPress(e, t)
                }, this.startAccessiblePress = () => {
                  const e = be(this.node.current, "keydown", (e => {
                      "Enter" !== e.key || this.isPressing || (this.removeEndListeners(), this.removeEndListeners = be(this.node.current, "keyup", (e => {
                        "Enter" === e.key && this.checkPressEnd() && Re("up", ((e, t) => {
                          const {
                            onTap: s
                          } = this.node.getProps();
                          s && ve.Wi.update((() => s(e, t)))
                        }))
                      })), Re("down", ((e, t) => {
                        this.startPress(e, t)
                      })))
                    })),
                    t = be(this.node.current, "blur", (() => {
                      this.isPressing && Re("cancel", ((e, t) => this.cancelPress(e, t)))
                    }));
                  this.removeAccessibleListeners = (0, Pe.z)(e, t)
                }
              }
              startPress(e, t) {
                this.isPressing = !0;
                const {
                  onTapStart: s,
                  whileTap: n
                } = this.node.getProps();
                n && this.node.animationState && this.node.animationState.setActive("whileTap", !0), s && ve.Wi.update((() => s(e, t)))
              }
              checkPressEnd() {
                return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !ke()
              }
              cancelPress(e, t) {
                if (!this.checkPressEnd()) return;
                const {
                  onTapCancel: s
                } = this.node.getProps();
                s && ve.Wi.update((() => s(e, t)))
              }
              mount() {
                const e = this.node.getProps(),
                  t = Ee(this.node.current, "pointerdown", this.startPointerPress, {
                    passive: !(e.onTapStart || e.onPointerStart)
                  }),
                  s = be(this.node.current, "focus", this.startAccessiblePress);
                this.removeStartListeners = (0, Pe.z)(t, s)
              }
              unmount() {
                this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners()
              }
            }
          },
          focus: {
            Feature: class extends De {
              constructor() {
                super(...arguments), this.isActive = !1
              }
              onFocus() {
                let e = !1;
                try {
                  e = this.node.current.matches(":focus-visible")
                } catch (t) {
                  e = !0
                }
                e && this.node.animationState && (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
              }
              onBlur() {
                this.isActive && this.node.animationState && (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
              }
              mount() {
                this.unmount = (0, Pe.z)(be(this.node.current, "focus", (() => this.onFocus())), be(this.node.current, "blur", (() => this.onBlur())))
              }
              unmount() {}
            }
          },
          hover: {
            Feature: class extends De {
              mount() {
                this.unmount = (0, Pe.z)(Oe(this.node, !0), Oe(this.node, !1))
              }
              unmount() {}
            }
          }
        };

      function Ne(e, t) {
        if (!Array.isArray(t)) return !1;
        const s = t.length;
        if (s !== e.length) return !1;
        for (let n = 0; n < s; n++)
          if (t[n] !== e[n]) return !1;
        return !0
      }

      function We(e, t, s) {
        const n = e.getProps();
        return ce(n, t, void 0 !== s ? s : n.custom, function(e) {
          const t = {};
          return e.values.forEach(((e, s) => t[s] = e.get())), t
        }(e), function(e) {
          const t = {};
          return e.values.forEach(((e, s) => t[s] = e.getVelocity())), t
        }(e))
      }
      const Ge = "data-" + ne("framerAppearId");
      var He = s(5648);
      const qe = e => 1e3 * e,
        Ue = e => e / 1e3,
        Xe = e => Array.isArray(e) && "number" == typeof e[0];

      function Ye(e) {
        return Boolean(!e || "string" == typeof e && Ke[e] || Xe(e) || Array.isArray(e) && e.every(Ye))
      }
      const Ze = ([e, t, s, n]) => `cubic-bezier(${e}, ${t}, ${s}, ${n})`,
        Ke = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: Ze([0, .65, .55, 1]),
          circOut: Ze([.55, 0, 1, .45]),
          backIn: Ze([.31, .01, .66, -.59]),
          backOut: Ze([.33, 1.53, .69, .99])
        };

      function Je(e) {
        if (e) return Xe(e) ? Ze(e) : Array.isArray(e) ? e.map(Je) : Ke[e]
      }
      const Qe = (e, t, s) => (((1 - 3 * s + 3 * t) * e + (3 * s - 6 * t)) * e + 3 * t) * e;

      function et(e, t, s, n) {
        if (e === t && s === n) return Ie.Z;
        return i => 0 === i || 1 === i ? i : Qe(function(e, t, s, n, i) {
          let r, o, a = 0;
          do {
            o = t + (s - t) / 2, r = Qe(o, n, i) - e, r > 0 ? s = o : t = o
          } while (Math.abs(r) > 1e-7 && ++a < 12);
          return o
        }(i, 0, 1, e, s), t, n)
      }
      const tt = et(.42, 0, 1, 1),
        st = et(0, 0, .58, 1),
        nt = et(.42, 0, .58, 1),
        it = e => Array.isArray(e) && "number" != typeof e[0],
        rt = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
        ot = e => t => 1 - e(1 - t),
        at = e => 1 - Math.sin(Math.acos(e)),
        lt = ot(at),
        ct = rt(lt),
        dt = et(.33, 1.53, .69, .99),
        ut = ot(dt),
        pt = rt(ut),
        ht = {
          linear: Ie.Z,
          easeIn: tt,
          easeInOut: nt,
          easeOut: st,
          circIn: at,
          circInOut: ct,
          circOut: lt,
          backIn: ut,
          backInOut: pt,
          backOut: dt,
          anticipate: e => (e *= 2) < 1 ? .5 * ut(e) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
        },
        mt = e => {
          if (Array.isArray(e)) {
            (0, He.k)(4 === e.length, "Cubic bezier arrays must contain four numerical values.");
            const [t, s, n, i] = e;
            return et(t, s, n, i)
          }
          return "string" == typeof e ? ((0, He.k)(void 0 !== ht[e], `Invalid easing type '${e}'`), ht[e]) : e
        };
      var ft = s(7386),
        gt = s(2357);

      function vt({
        duration: e = 300,
        keyframes: t,
        times: s,
        ease: n = "easeInOut"
      }) {
        const i = it(n) ? n.map(mt) : mt(n),
          r = {
            done: !1,
            value: t[0]
          },
          o = function(e, t) {
            return e.map((e => e * t))
          }(s && s.length === t.length ? s : (0, gt.Y)(t), e),
          a = (0, ft.s)(o, t, {
            ease: Array.isArray(i) ? i : (l = t, c = i, l.map((() => c || nt)).splice(0, l.length - 1))
          });
        var l, c;
        return {
          calculatedDuration: e,
          next: t => (r.value = a(t), r.done = t >= e, r)
        }
      }
      var yt = s(6538);
      const xt = 5;

      function bt(e, t, s) {
        const n = Math.max(t - xt, 0);
        return (0, yt.R)(s - e(n), t - n)
      }
      var wt = s(9310);
      const St = .001,
        Tt = .01,
        Et = 10,
        Pt = .05,
        Ct = 1;
      const Mt = 12;

      function At(e, t) {
        return e * Math.sqrt(1 - t * t)
      }
      const Lt = ["duration", "bounce"],
        kt = ["stiffness", "damping", "mass"];

      function Dt(e, t) {
        return t.some((t => void 0 !== e[t]))
      }

      function Ot({
        keyframes: e,
        restDelta: t,
        restSpeed: s,
        ...n
      }) {
        const i = e[0],
          r = e[e.length - 1],
          o = {
            done: !1,
            value: i
          },
          {
            stiffness: a,
            damping: l,
            mass: c,
            velocity: d,
            duration: u,
            isResolvedFromDuration: p
          } = function(e) {
            let t = {
              velocity: 0,
              stiffness: 100,
              damping: 10,
              mass: 1,
              isResolvedFromDuration: !1,
              ...e
            };
            if (!Dt(e, kt) && Dt(e, Lt)) {
              const s = function({
                duration: e = 800,
                bounce: t = .25,
                velocity: s = 0,
                mass: n = 1
              }) {
                let i, r;
                (0, He.K)(e <= qe(Et), "Spring duration must be 10 seconds or less");
                let o = 1 - t;
                o = (0, wt.u)(Pt, Ct, o), e = (0, wt.u)(Tt, Et, Ue(e)), o < 1 ? (i = t => {
                  const n = t * o,
                    i = n * e,
                    r = n - s,
                    a = At(t, o),
                    l = Math.exp(-i);
                  return St - r / a * l
                }, r = t => {
                  const n = t * o * e,
                    r = n * s + s,
                    a = Math.pow(o, 2) * Math.pow(t, 2) * e,
                    l = Math.exp(-n),
                    c = At(Math.pow(t, 2), o);
                  return (-i(t) + St > 0 ? -1 : 1) * ((r - a) * l) / c
                }) : (i = t => Math.exp(-t * e) * ((t - s) * e + 1) - St, r = t => Math.exp(-t * e) * (e * e * (s - t)));
                const a = function(e, t, s) {
                  let n = s;
                  for (let s = 1; s < Mt; s++) n -= e(n) / t(n);
                  return n
                }(i, r, 5 / e);
                if (e = qe(e), isNaN(a)) return {
                  stiffness: 100,
                  damping: 10,
                  duration: e
                }; {
                  const t = Math.pow(a, 2) * n;
                  return {
                    stiffness: t,
                    damping: 2 * o * Math.sqrt(n * t),
                    duration: e
                  }
                }
              }(e);
              t = {
                ...t,
                ...s,
                velocity: 0,
                mass: 1
              }, t.isResolvedFromDuration = !0
            }
            return t
          }(n),
          h = d ? -Ue(d) : 0,
          m = l / (2 * Math.sqrt(a * c)),
          f = r - i,
          g = Ue(Math.sqrt(a / c)),
          v = Math.abs(f) < 5;
        let y;
        if (s || (s = v ? .01 : 2), t || (t = v ? .005 : .5), m < 1) {
          const e = At(g, m);
          y = t => {
            const s = Math.exp(-m * g * t);
            return r - s * ((h + m * g * f) / e * Math.sin(e * t) + f * Math.cos(e * t))
          }
        } else if (1 === m) y = e => r - Math.exp(-g * e) * (f + (h + g * f) * e);
        else {
          const e = g * Math.sqrt(m * m - 1);
          y = t => {
            const s = Math.exp(-m * g * t),
              n = Math.min(e * t, 300);
            return r - s * ((h + m * g * f) * Math.sinh(n) + e * f * Math.cosh(n)) / e
          }
        }
        return {
          calculatedDuration: p && u || null,
          next: e => {
            const n = y(e);
            if (p) o.done = e >= u;
            else {
              let i = h;
              0 !== e && (i = m < 1 ? bt(y, e, n) : 0);
              const a = Math.abs(i) <= s,
                l = Math.abs(r - n) <= t;
              o.done = a && l
            }
            return o.value = o.done ? r : n, o
          }
        }
      }

      function Vt({
        keyframes: e,
        velocity: t = 0,
        power: s = .8,
        timeConstant: n = 325,
        bounceDamping: i = 10,
        bounceStiffness: r = 500,
        modifyTarget: o,
        min: a,
        max: l,
        restDelta: c = .5,
        restSpeed: d
      }) {
        const u = e[0],
          p = {
            done: !1,
            value: u
          },
          h = e => void 0 === a ? l : void 0 === l || Math.abs(a - e) < Math.abs(l - e) ? a : l;
        let m = s * t;
        const f = u + m,
          g = void 0 === o ? f : o(f);
        g !== f && (m = g - u);
        const v = e => -m * Math.exp(-e / n),
          y = e => g + v(e),
          x = e => {
            const t = v(e),
              s = y(e);
            p.done = Math.abs(t) <= c, p.value = p.done ? g : s
          };
        let b, w;
        const S = e => {
          var t;
          t = p.value, (void 0 !== a && t < a || void 0 !== l && t > l) && (b = e, w = Ot({
            keyframes: [p.value, h(p.value)],
            velocity: bt(y, e, p.value),
            damping: i,
            stiffness: r,
            restDelta: c,
            restSpeed: d
          }))
        };
        return S(0), {
          calculatedDuration: null,
          next: e => {
            let t = !1;
            return w || void 0 !== b || (t = !0, x(e), S(e)), void 0 !== b && e > b ? w.next(e - b) : (!t && x(e), p)
          }
        }
      }
      const It = e => {
          const t = ({
            timestamp: t
          }) => e(t);
          return {
            start: () => ve.Wi.update(t, !0),
            stop: () => (0, ve.Pn)(t),
            now: () => ve.frameData.isProcessing ? ve.frameData.timestamp : performance.now()
          }
        },
        Rt = 2e4;

      function Bt(e) {
        let t = 0,
          s = e.next(t);
        for (; !s.done && t < Rt;) t += 50, s = e.next(t);
        return t >= Rt ? 1 / 0 : t
      }
      const jt = {
        decay: Vt,
        inertia: Vt,
        tween: vt,
        keyframes: vt,
        spring: Ot
      };

      function zt({
        autoplay: e = !0,
        delay: t = 0,
        driver: s = It,
        keyframes: n,
        type: i = "keyframes",
        repeat: r = 0,
        repeatDelay: o = 0,
        repeatType: a = "loop",
        onPlay: l,
        onStop: c,
        onComplete: d,
        onUpdate: u,
        ...p
      }) {
        let h, m, f = 1,
          g = !1;
        const v = () => {
          m = new Promise((e => {
            h = e
          }))
        };
        let y;
        v();
        const x = jt[i] || vt;
        let b;
        x !== vt && "number" != typeof n[0] && (b = (0, ft.s)([0, 100], n, {
          clamp: !1
        }), n = [0, 100]);
        const w = x({
          ...p,
          keyframes: n
        });
        let S;
        "mirror" === a && (S = x({
          ...p,
          keyframes: [...n].reverse(),
          velocity: -(p.velocity || 0)
        }));
        let T = "idle",
          E = null,
          P = null,
          C = null;
        null === w.calculatedDuration && r && (w.calculatedDuration = Bt(w));
        const {
          calculatedDuration: M
        } = w;
        let A = 1 / 0,
          L = 1 / 0;
        null !== M && (A = M + o, L = A * (r + 1) - o);
        let k = 0;
        const D = e => {
            if (null === P) return;
            f > 0 && (P = Math.min(P, e)), f < 0 && (P = Math.min(e - L / f, P)), k = null !== E ? E : Math.round(e - P) * f;
            const s = k - t * (f >= 0 ? 1 : -1),
              i = f >= 0 ? s < 0 : s > L;
            k = Math.max(s, 0), "finished" === T && null === E && (k = L);
            let l = k,
              c = w;
            if (r) {
              const e = k / A;
              let t = Math.floor(e),
                s = e % 1;
              !s && e >= 1 && (s = 1), 1 === s && t--, t = Math.min(t, r + 1);
              const n = Boolean(t % 2);
              n && ("reverse" === a ? (s = 1 - s, o && (s -= o / A)) : "mirror" === a && (c = S));
              let i = (0, wt.u)(0, 1, s);
              k > L && (i = "reverse" === a && n ? 1 : 0), l = i * A
            }
            const d = i ? {
              done: !1,
              value: n[0]
            } : c.next(l);
            b && (d.value = b(d.value));
            let {
              done: p
            } = d;
            i || null === M || (p = f >= 0 ? k >= L : k <= 0);
            const h = null === E && ("finished" === T || "running" === T && p);
            return u && u(d.value), h && I(), d
          },
          O = () => {
            y && y.stop(), y = void 0
          },
          V = () => {
            T = "idle", O(), h(), v(), P = C = null
          },
          I = () => {
            T = "finished", d && d(), O(), h()
          },
          R = () => {
            if (g) return;
            y || (y = s(D));
            const e = y.now();
            l && l(), null !== E ? P = e - E : P && "finished" !== T || (P = e), "finished" === T && v(), C = P, E = null, T = "running", y.start()
          };
        e && R();
        const B = {
          then: (e, t) => m.then(e, t),
          get time() {
            return Ue(k)
          },
          set time(e) {
            e = qe(e), k = e, null === E && y && 0 !== f ? P = y.now() - e / f : E = e
          },
          get duration() {
            const e = null === w.calculatedDuration ? Bt(w) : w.calculatedDuration;
            return Ue(e)
          },
          get speed() {
            return f
          },
          set speed(e) {
            e !== f && y && (f = e, B.time = Ue(k))
          },
          get state() {
            return T
          },
          play: R,
          pause: () => {
            T = "paused", E = k
          },
          stop: () => {
            g = !0, "idle" !== T && (T = "idle", c && c(), V())
          },
          cancel: () => {
            null !== C && D(C), V()
          },
          complete: () => {
            T = "finished"
          },
          sample: e => (P = 0, D(e))
        };
        return B
      }
      const Ft = function(e) {
          let t;
          return () => (void 0 === t && (t = Object.hasOwnProperty.call(Element.prototype, "animate")), t)
        }(),
        $t = new Set(["opacity", "clipPath", "filter", "transform", "backgroundColor"]);
      const _t = {
          type: "spring",
          stiffness: 500,
          damping: 25,
          restSpeed: 10
        },
        Nt = {
          type: "keyframes",
          duration: .8
        },
        Wt = {
          type: "keyframes",
          ease: [.25, .1, .35, 1],
          duration: .3
        },
        Gt = (e, {
          keyframes: t
        }) => t.length > 2 ? Nt : k.has(e) ? e.startsWith("scale") ? {
          type: "spring",
          stiffness: 550,
          damping: 0 === t[1] ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10
        } : _t : Wt;
      var Ht = s(7909);
      const qt = (e, t) => !("zIndex" === e || "number" != typeof t && !Array.isArray(t) && ("string" != typeof t || !Ht.P.test(t) && "0" !== t || t.startsWith("url(")));
      var Ut = s(8016);
      const Xt = new Set(["brightness", "contrast", "saturate", "opacity"]);

      function Yt(e) {
        const [t, s] = e.slice(0, -1).split("(");
        if ("drop-shadow" === t) return e;
        const [n] = s.match(Ut.KP) || [];
        if (!n) return e;
        const i = s.replace(n, "");
        let r = Xt.has(t) ? 1 : 0;
        return n !== s && (r *= 100), t + "(" + r + i + ")"
      }
      const Zt = /([a-z-]*)\(.*?\)/g,
        Kt = {
          ...Ht.P,
          getAnimatableNone: e => {
            const t = e.match(Zt);
            return t ? t.map(Yt).join(" ") : e
          }
        };
      var Jt = s(3526);
      const Qt = {
          ...$,
          color: Jt.$,
          backgroundColor: Jt.$,
          outlineColor: Jt.$,
          fill: Jt.$,
          stroke: Jt.$,
          borderColor: Jt.$,
          borderTopColor: Jt.$,
          borderRightColor: Jt.$,
          borderBottomColor: Jt.$,
          borderLeftColor: Jt.$,
          filter: Kt,
          WebkitFilter: Kt
        },
        es = e => Qt[e];

      function ts(e, t) {
        let s = es(e);
        return s !== Kt && (s = Ht.P), s.getAnimatableNone ? s.getAnimatableNone(t) : void 0
      }
      const ss = e => /^0[^.\s]+$/.test(e);

      function ns(e) {
        return "number" == typeof e ? 0 === e : null !== e ? "none" === e || "0" === e || ss(e) : void 0
      }

      function is(e, t) {
        return e[t] || e.default || e
      }
      const rs = (e, t, s, n = {}) => i => {
        const r = is(n, e) || {},
          o = r.delay || n.delay || 0;
        let {
          elapsed: a = 0
        } = n;
        a -= qe(o);
        const l = function(e, t, s, n) {
            const i = qt(t, s);
            let r;
            r = Array.isArray(s) ? [...s] : [null, s];
            const o = void 0 !== n.from ? n.from : e.get();
            let a;
            const l = [];
            for (let e = 0; e < r.length; e++) null === r[e] && (r[e] = 0 === e ? o : r[e - 1]), ns(r[e]) && l.push(e), "string" == typeof r[e] && "none" !== r[e] && "0" !== r[e] && (a = r[e]);
            if (i && l.length && a)
              for (let e = 0; e < l.length; e++) r[l[e]] = ts(t, a);
            return r
          }(t, e, s, r),
          c = l[0],
          d = l[l.length - 1],
          u = qt(e, c),
          p = qt(e, d);
        (0, He.K)(u === p, `You are trying to animate ${e} from "${c}" to "${d}". ${c} is not an animatable value - to enable this animation set ${c} to a value animatable to ${d} via the \`style\` property.`);
        let h = {
          keyframes: l,
          velocity: t.getVelocity(),
          ease: "easeOut",
          ...r,
          delay: -a,
          onUpdate: e => {
            t.set(e), r.onUpdate && r.onUpdate(e)
          },
          onComplete: () => {
            i(), r.onComplete && r.onComplete()
          }
        };
        if (function({
            when: e,
            delay: t,
            delayChildren: s,
            staggerChildren: n,
            staggerDirection: i,
            repeat: r,
            repeatType: o,
            repeatDelay: a,
            from: l,
            elapsed: c,
            ...d
          }) {
            return !!Object.keys(d).length
          }(r) || (h = {
            ...h,
            ...Gt(e, h)
          }), h.duration && (h.duration = qe(h.duration)), h.repeatDelay && (h.repeatDelay = qe(h.repeatDelay)), !u || !p || !1 === r.type) return function({
          keyframes: e,
          delay: t,
          onUpdate: s,
          onComplete: n
        }) {
          const i = () => (s && s(e[e.length - 1]), n && n(), {
            time: 0,
            speed: 1,
            duration: 0,
            play: Ie.Z,
            pause: Ie.Z,
            stop: Ie.Z,
            then: e => (e(), Promise.resolve()),
            cancel: Ie.Z,
            complete: Ie.Z
          });
          return t ? zt({
            keyframes: [0, 1],
            duration: 0,
            delay: t,
            onComplete: i
          }) : i()
        }(h);
        if (t.owner && t.owner.current instanceof HTMLElement && !t.owner.getProps().onUpdate) {
          const s = function(e, t, {
            onUpdate: s,
            onComplete: n,
            ...i
          }) {
            if (!Ft() || !$t.has(t) || i.repeatDelay || "mirror" === i.repeatType || 0 === i.damping || "inertia" === i.type) return !1;
            let r, o, a = !1;
            const l = () => {
              o = new Promise((e => {
                r = e
              }))
            };
            l();
            let {
              keyframes: c,
              duration: d = 300,
              ease: u,
              times: p
            } = i;
            if (((e, t) => "spring" === t.type || "backgroundColor" === e || !Ye(t.ease))(t, i)) {
              const e = zt({
                ...i,
                repeat: 0,
                delay: 0
              });
              let t = {
                done: !1,
                value: c[0]
              };
              const s = [];
              let n = 0;
              for (; !t.done && n < 2e4;) t = e.sample(n), s.push(t.value), n += 10;
              p = void 0, c = s, d = n - 10, u = "linear"
            }
            const h = function(e, t, s, {
              delay: n = 0,
              duration: i,
              repeat: r = 0,
              repeatType: o = "loop",
              ease: a,
              times: l
            } = {}) {
              const c = {
                [t]: s
              };
              l && (c.offset = l);
              const d = Je(a);
              return Array.isArray(d) && (c.easing = d), e.animate(c, {
                delay: n,
                duration: i,
                easing: Array.isArray(d) ? "linear" : d,
                fill: "both",
                iterations: r + 1,
                direction: "reverse" === o ? "alternate" : "normal"
              })
            }(e.owner.current, t, c, {
              ...i,
              duration: d,
              ease: u,
              times: p
            });
            i.syncStart && (h.startTime = ve.frameData.isProcessing ? ve.frameData.timestamp : document.timeline ? document.timeline.currentTime : performance.now());
            const m = () => h.cancel(),
              f = () => {
                ve.Wi.update(m), r(), l()
              };
            return h.onfinish = () => {
              e.set(function(e, {
                repeat: t,
                repeatType: s = "loop"
              }) {
                return e[t && "loop" !== s && t % 2 == 1 ? 0 : e.length - 1]
              }(c, i)), n && n(), f()
            }, {
              then: (e, t) => o.then(e, t),
              attachTimeline: e => (h.timeline = e, h.onfinish = null, Ie.Z),
              get time() {
                return Ue(h.currentTime || 0)
              },
              set time(e) {
                h.currentTime = qe(e)
              },
              get speed() {
                return h.playbackRate
              },
              set speed(e) {
                h.playbackRate = e
              },
              get duration() {
                return Ue(d)
              },
              play: () => {
                a || (h.play(), (0, ve.Pn)(m))
              },
              pause: () => h.pause(),
              stop: () => {
                if (a = !0, "idle" === h.playState) return;
                const {
                  currentTime: t
                } = h;
                if (t) {
                  const s = zt({
                    ...i,
                    autoplay: !1
                  });
                  e.setWithVelocity(s.sample(t - 10).value, s.sample(t).value, 10)
                }
                f()
              },
              complete: () => h.finish(),
              cancel: f
            }
          }(t, e, h);
          if (s) return s
        }
        return zt(h)
      };

      function os(e) {
        return Boolean(O(e) && e.add)
      }
      const as = e => /^\-?\d*\.?\d+$/.test(e);
      var ls = s(1963);
      const cs = e => t => t.test(e),
        ds = [j.Rx, z.px, z.aQ, z.RW, z.vw, z.vh, {
          test: e => "auto" === e,
          parse: e => e
        }],
        us = e => ds.find(cs(e)),
        ps = [...ds, Jt.$, Ht.P];

      function hs(e, t, s) {
        e.hasValue(t) ? e.getValue(t).set(s) : e.addValue(t, (0, ls.BX)(s))
      }

      function ms(e, t) {
        if (t) return (t[e] || t.default || t).from
      }

      function fs({
        protectedKeys: e,
        needsAnimating: t
      }, s) {
        const n = e.hasOwnProperty(s) && !0 !== t[s];
        return t[s] = !1, n
      }

      function gs(e, t, {
        delay: s = 0,
        transitionOverride: n,
        type: i
      } = {}) {
        let {
          transition: r = e.getDefaultTransition(),
          transitionEnd: o,
          ...a
        } = e.makeTargetAnimatable(t);
        const l = e.getValue("willChange");
        n && (r = n);
        const c = [],
          d = i && e.animationState && e.animationState.getState()[i];
        for (const t in a) {
          const n = e.getValue(t),
            i = a[t];
          if (!n || void 0 === i || d && fs(d, t)) continue;
          const o = {
            delay: s,
            elapsed: 0,
            ...r
          };
          if (window.HandoffAppearAnimations && !n.hasAnimated) {
            const s = e.getProps()[Ge];
            s && (o.elapsed = window.HandoffAppearAnimations(s, t, n, ve.Wi), o.syncStart = !0)
          }
          n.start(rs(t, n, i, e.shouldReduceMotion && k.has(t) ? {
            type: !1
          } : o));
          const u = n.animation;
          os(l) && (l.add(t), u.then((() => l.remove(t)))), c.push(u)
        }
        return o && Promise.all(c).then((() => {
          o && function(e, t) {
            const s = We(e, t);
            let {
              transitionEnd: n = {},
              transition: i = {},
              ...r
            } = s ? e.makeTargetAnimatable(s, !1) : {};
            r = {
              ...r,
              ...n
            };
            for (const t in r) hs(e, t, he(r[t]))
          }(e, o)
        })), c
      }

      function vs(e, t, s = {}) {
        const n = We(e, t, s.custom);
        let {
          transition: i = e.getDefaultTransition() || {}
        } = n || {};
        s.transitionOverride && (i = s.transitionOverride);
        const r = n ? () => Promise.all(gs(e, n, s)) : () => Promise.resolve(),
          o = e.variantChildren && e.variantChildren.size ? (n = 0) => {
            const {
              delayChildren: r = 0,
              staggerChildren: o,
              staggerDirection: a
            } = i;
            return function(e, t, s = 0, n = 0, i = 1, r) {
              const o = [],
                a = (e.variantChildren.size - 1) * n,
                l = 1 === i ? (e = 0) => e * n : (e = 0) => a - e * n;
              return Array.from(e.variantChildren).sort(ys).forEach(((e, n) => {
                e.notify("AnimationStart", t), o.push(vs(e, t, {
                  ...r,
                  delay: s + l(n)
                }).then((() => e.notify("AnimationComplete", t))))
              })), Promise.all(o)
            }(e, t, r + n, o, a, s)
          } : () => Promise.resolve(),
          {
            when: a
          } = i;
        if (a) {
          const [e, t] = "beforeChildren" === a ? [r, o] : [o, r];
          return e().then((() => t()))
        }
        return Promise.all([r(), o(s.delay)])
      }

      function ys(e, t) {
        return e.sortNodePosition(t)
      }
      const xs = [...p].reverse(),
        bs = p.length;

      function ws(e) {
        let t = function(e) {
          return t => Promise.all(t.map((({
            animation: t,
            options: s
          }) => function(e, t, s = {}) {
            let n;
            if (e.notify("AnimationStart", t), Array.isArray(t)) {
              const i = t.map((t => vs(e, t, s)));
              n = Promise.all(i)
            } else if ("string" == typeof t) n = vs(e, t, s);
            else {
              const i = "function" == typeof t ? We(e, t, s.custom) : t;
              n = Promise.all(gs(e, i, s))
            }
            return n.then((() => e.notify("AnimationComplete", t)))
          }(e, t, s))))
        }(e);
        const s = {
          animate: Ss(!0),
          whileInView: Ss(),
          whileHover: Ss(),
          whileTap: Ss(),
          whileDrag: Ss(),
          whileFocus: Ss(),
          exit: Ss()
        };
        let n = !0;
        const i = (t, s) => {
          const n = We(e, s);
          if (n) {
            const {
              transition: e,
              transitionEnd: s,
              ...i
            } = n;
            t = {
              ...t,
              ...i,
              ...s
            }
          }
          return t
        };

        function r(r, o) {
          const a = e.getProps(),
            l = e.getVariantContext(!0) || {},
            c = [],
            p = new Set;
          let h = {},
            m = 1 / 0;
          for (let t = 0; t < bs; t++) {
            const v = xs[t],
              y = s[v],
              x = void 0 !== a[v] ? a[v] : l[v],
              b = d(x),
              w = v === o ? y.isActive : null;
            !1 === w && (m = t);
            let S = x === l[v] && x !== a[v] && b;
            if (S && n && e.manuallyAnimateOnMount && (S = !1), y.protectedKeys = {
                ...h
              }, !y.isActive && null === w || !x && !y.prevProp || u(x) || "boolean" == typeof x) continue;
            const T = (f = y.prevProp, "string" == typeof(g = x) ? g !== f : !!Array.isArray(g) && !Ne(g, f));
            let E = T || v === o && y.isActive && !S && b || t > m && b;
            const P = Array.isArray(x) ? x : [x];
            let C = P.reduce(i, {});
            !1 === w && (C = {});
            const {
              prevResolvedValues: M = {}
            } = y, A = {
              ...M,
              ...C
            }, L = e => {
              E = !0, p.delete(e), y.needsAnimating[e] = !0
            };
            for (const e in A) {
              const t = C[e],
                s = M[e];
              h.hasOwnProperty(e) || (t !== s ? ue(t) && ue(s) ? !Ne(t, s) || T ? L(e) : y.protectedKeys[e] = !0 : void 0 !== t ? L(e) : p.add(e) : void 0 !== t && p.has(e) ? L(e) : y.protectedKeys[e] = !0)
            }
            y.prevProp = x, y.prevResolvedValues = C, y.isActive && (h = {
              ...h,
              ...C
            }), n && e.blockInitialAnimation && (E = !1), E && !S && c.push(...P.map((e => ({
              animation: e,
              options: {
                type: v,
                ...r
              }
            }))))
          }
          var f, g;
          if (p.size) {
            const t = {};
            p.forEach((s => {
              const n = e.getBaseTarget(s);
              void 0 !== n && (t[s] = n)
            })), c.push({
              animation: t
            })
          }
          let v = Boolean(c.length);
          return n && !1 === a.initial && !e.manuallyAnimateOnMount && (v = !1), n = !1, v ? t(c) : Promise.resolve()
        }
        return {
          animateChanges: r,
          setActive: function(t, n, i) {
            var o;
            if (s[t].isActive === n) return Promise.resolve();
            null === (o = e.variantChildren) || void 0 === o || o.forEach((e => {
              var s;
              return null === (s = e.animationState) || void 0 === s ? void 0 : s.setActive(t, n)
            })), s[t].isActive = n;
            const a = r(i, t);
            for (const e in s) s[e].protectedKeys = {};
            return a
          },
          setAnimateFunction: function(s) {
            t = s(e)
          },
          getState: () => s
        }
      }

      function Ss(e = !1) {
        return {
          isActive: e,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {}
        }
      }
      let Ts = 0;
      const Es = {
          animation: {
            Feature: class extends De {
              constructor(e) {
                super(e), e.animationState || (e.animationState = ws(e))
              }
              updateAnimationControlsSubscription() {
                const {
                  animate: e
                } = this.node.getProps();
                this.unmount(), u(e) && (this.unmount = e.subscribe(this.node))
              }
              mount() {
                this.updateAnimationControlsSubscription()
              }
              update() {
                const {
                  animate: e
                } = this.node.getProps(), {
                  animate: t
                } = this.node.prevProps || {};
                e !== t && this.updateAnimationControlsSubscription()
              }
              unmount() {}
            }
          },
          exit: {
            Feature: class extends De {
              constructor() {
                super(...arguments), this.id = Ts++
              }
              update() {
                if (!this.node.presenceContext) return;
                const {
                  isPresent: e,
                  onExitComplete: t,
                  custom: s
                } = this.node.presenceContext, {
                  isPresent: n
                } = this.node.prevPresenceContext || {};
                if (!this.node.animationState || e === n) return;
                const i = this.node.animationState.setActive("exit", !e, {
                  custom: null != s ? s : this.node.getProps().custom
                });
                t && !e && i.then((() => t(this.id)))
              }
              mount() {
                const {
                  register: e
                } = this.node.presenceContext || {};
                e && (this.unmount = e(this.id))
              }
              unmount() {}
            }
          }
        },
        Ps = (e, t) => Math.abs(e - t);
      class Cs {
        constructor(e, t, {
          transformPagePoint: s
        } = {}) {
          if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = () => {
              if (!this.lastMoveEvent || !this.lastMoveEventInfo) return;
              const e = Ls(this.lastMoveEventInfo, this.history),
                t = null !== this.startEvent,
                s = function(e, t) {
                  const s = Ps(e.x, t.x),
                    n = Ps(e.y, t.y);
                  return Math.sqrt(s ** 2 + n ** 2)
                }(e.offset, {
                  x: 0,
                  y: 0
                }) >= 3;
              if (!t && !s) return;
              const {
                point: n
              } = e, {
                timestamp: i
              } = ve.frameData;
              this.history.push({
                ...n,
                timestamp: i
              });
              const {
                onStart: r,
                onMove: o
              } = this.handlers;
              t || (r && r(this.lastMoveEvent, e), this.startEvent = this.lastMoveEvent), o && o(this.lastMoveEvent, e)
            }, this.handlePointerMove = (e, t) => {
              this.lastMoveEvent = e, this.lastMoveEventInfo = Ms(t, this.transformPagePoint), ve.Wi.update(this.updatePoint, !0)
            }, this.handlePointerUp = (e, t) => {
              if (this.end(), !this.lastMoveEvent || !this.lastMoveEventInfo) return;
              const {
                onEnd: s,
                onSessionEnd: n
              } = this.handlers, i = Ls("pointercancel" === e.type ? this.lastMoveEventInfo : Ms(t, this.transformPagePoint), this.history);
              this.startEvent && s && s(e, i), n && n(e, i)
            }, !we(e)) return;
          this.handlers = t, this.transformPagePoint = s;
          const n = Ms(Se(e), this.transformPagePoint),
            {
              point: i
            } = n,
            {
              timestamp: r
            } = ve.frameData;
          this.history = [{
            ...i,
            timestamp: r
          }];
          const {
            onSessionStart: o
          } = t;
          o && o(e, Ls(n, this.history)), this.removeListeners = (0, Pe.z)(Ee(window, "pointermove", this.handlePointerMove), Ee(window, "pointerup", this.handlePointerUp), Ee(window, "pointercancel", this.handlePointerUp))
        }
        updateHandlers(e) {
          this.handlers = e
        }
        end() {
          this.removeListeners && this.removeListeners(), (0, ve.Pn)(this.updatePoint)
        }
      }

      function Ms(e, t) {
        return t ? {
          point: t(e.point)
        } : e
      }

      function As(e, t) {
        return {
          x: e.x - t.x,
          y: e.y - t.y
        }
      }

      function Ls({
        point: e
      }, t) {
        return {
          point: e,
          delta: As(e, Ds(t)),
          offset: As(e, ks(t)),
          velocity: Os(t, .1)
        }
      }

      function ks(e) {
        return e[0]
      }

      function Ds(e) {
        return e[e.length - 1]
      }

      function Os(e, t) {
        if (e.length < 2) return {
          x: 0,
          y: 0
        };
        let s = e.length - 1,
          n = null;
        const i = Ds(e);
        for (; s >= 0 && (n = e[s], !(i.timestamp - n.timestamp > qe(t)));) s--;
        if (!n) return {
          x: 0,
          y: 0
        };
        const r = Ue(i.timestamp - n.timestamp);
        if (0 === r) return {
          x: 0,
          y: 0
        };
        const o = {
          x: (i.x - n.x) / r,
          y: (i.y - n.y) / r
        };
        return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o
      }
      var Vs = s(9486),
        Is = s(9690);

      function Rs(e) {
        return e.max - e.min
      }

      function Bs(e, t = 0, s = .01) {
        return Math.abs(e - t) <= s
      }

      function js(e, t, s, n = .5) {
        e.origin = n, e.originPoint = (0, Is.C)(t.min, t.max, e.origin), e.scale = Rs(s) / Rs(t), (Bs(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1), e.translate = (0, Is.C)(s.min, s.max, e.origin) - e.originPoint, (Bs(e.translate) || isNaN(e.translate)) && (e.translate = 0)
      }

      function zs(e, t, s, n) {
        js(e.x, t.x, s.x, n ? n.originX : void 0), js(e.y, t.y, s.y, n ? n.originY : void 0)
      }

      function Fs(e, t, s) {
        e.min = s.min + t.min, e.max = e.min + Rs(t)
      }

      function $s(e, t, s) {
        e.min = t.min - s.min, e.max = e.min + Rs(t)
      }

      function _s(e, t, s) {
        $s(e.x, t.x, s.x), $s(e.y, t.y, s.y)
      }

      function Ns(e, t, s) {
        return {
          min: void 0 !== t ? e.min + t : void 0,
          max: void 0 !== s ? e.max + s - (e.max - e.min) : void 0
        }
      }

      function Ws(e, t) {
        let s = t.min - e.min,
          n = t.max - e.max;
        return t.max - t.min < e.max - e.min && ([s, n] = [n, s]), {
          min: s,
          max: n
        }
      }
      const Gs = .35;

      function Hs(e, t, s) {
        return {
          min: qs(e, t),
          max: qs(e, s)
        }
      }

      function qs(e, t) {
        return "number" == typeof e ? e : e[t] || 0
      }
      const Us = () => ({
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
        Xs = () => ({
          x: {
            min: 0,
            max: 0
          },
          y: {
            min: 0,
            max: 0
          }
        });

      function Ys(e) {
        return [e("x"), e("y")]
      }

      function Zs({
        top: e,
        left: t,
        right: s,
        bottom: n
      }) {
        return {
          x: {
            min: t,
            max: s
          },
          y: {
            min: e,
            max: n
          }
        }
      }

      function Ks(e) {
        return void 0 === e || 1 === e
      }

      function Js({
        scale: e,
        scaleX: t,
        scaleY: s
      }) {
        return !Ks(e) || !Ks(t) || !Ks(s)
      }

      function Qs(e) {
        return Js(e) || en(e) || e.z || e.rotate || e.rotateX || e.rotateY
      }

      function en(e) {
        return tn(e.x) || tn(e.y)
      }

      function tn(e) {
        return e && "0%" !== e
      }

      function sn(e, t, s) {
        return s + t * (e - s)
      }

      function nn(e, t, s, n, i) {
        return void 0 !== i && (e = sn(e, i, n)), sn(e, s, n) + t
      }

      function rn(e, t = 0, s = 1, n, i) {
        e.min = nn(e.min, t, s, n, i), e.max = nn(e.max, t, s, n, i)
      }

      function on(e, {
        x: t,
        y: s
      }) {
        rn(e.x, t.translate, t.scale, t.originPoint), rn(e.y, s.translate, s.scale, s.originPoint)
      }

      function an(e) {
        return Number.isInteger(e) || e > 1.0000000000001 || e < .999999999999 ? e : 1
      }

      function ln(e, t) {
        e.min = e.min + t, e.max = e.max + t
      }

      function cn(e, t, [s, n, i]) {
        const r = void 0 !== t[i] ? t[i] : .5,
          o = (0, Is.C)(e.min, e.max, r);
        rn(e, t[s], t[n], o, t.scale)
      }
      const dn = ["x", "scaleX", "originX"],
        un = ["y", "scaleY", "originY"];

      function pn(e, t) {
        cn(e.x, t, dn), cn(e.y, t, un)
      }

      function hn(e, t) {
        return Zs(function(e, t) {
          if (!t) return e;
          const s = t({
              x: e.left,
              y: e.top
            }),
            n = t({
              x: e.right,
              y: e.bottom
            });
          return {
            top: s.y,
            left: s.x,
            bottom: n.y,
            right: n.x
          }
        }(e.getBoundingClientRect(), t))
      }
      const mn = new WeakMap;
      class fn {
        constructor(e) {
          this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
            x: 0,
            y: 0
          }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = Xs(), this.visualElement = e
        }
        start(e, {
          snapToCursor: t = !1
        } = {}) {
          const {
            presenceContext: s
          } = this.visualElement;
          s && !1 === s.isPresent || (this.panSession = new Cs(e, {
            onSessionStart: e => {
              this.stopAnimation(), t && this.snapToCursor(Se(e, "page").point)
            },
            onStart: (e, t) => {
              const {
                drag: s,
                dragPropagation: n,
                onDragStart: i
              } = this.getProps();
              if (s && !n && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = Le(s), !this.openGlobalLock)) return;
              this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Ys((e => {
                let t = this.getAxisMotionValue(e).get() || 0;
                if (z.aQ.test(t)) {
                  const {
                    projection: s
                  } = this.visualElement;
                  if (s && s.layout) {
                    const n = s.layout.layoutBox[e];
                    n && (t = Rs(n) * (parseFloat(t) / 100))
                  }
                }
                this.originPoint[e] = t
              })), i && ve.Wi.update((() => i(e, t)), !1, !0);
              const {
                animationState: r
              } = this.visualElement;
              r && r.setActive("whileDrag", !0)
            },
            onMove: (e, t) => {
              const {
                dragPropagation: s,
                dragDirectionLock: n,
                onDirectionLock: i,
                onDrag: r
              } = this.getProps();
              if (!s && !this.openGlobalLock) return;
              const {
                offset: o
              } = t;
              if (n && null === this.currentDirection) return this.currentDirection = function(e, t = 10) {
                let s = null;
                return Math.abs(e.y) > t ? s = "y" : Math.abs(e.x) > t && (s = "x"), s
              }(o), void(null !== this.currentDirection && i && i(this.currentDirection));
              this.updateAxis("x", t.point, o), this.updateAxis("y", t.point, o), this.visualElement.render(), r && r(e, t)
            },
            onSessionEnd: (e, t) => this.stop(e, t)
          }, {
            transformPagePoint: this.visualElement.getTransformPagePoint()
          }))
        }
        stop(e, t) {
          const s = this.isDragging;
          if (this.cancel(), !s) return;
          const {
            velocity: n
          } = t;
          this.startAnimation(n);
          const {
            onDragEnd: i
          } = this.getProps();
          i && ve.Wi.update((() => i(e, t)))
        }
        cancel() {
          this.isDragging = !1;
          const {
            projection: e,
            animationState: t
          } = this.visualElement;
          e && (e.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
          const {
            dragPropagation: s
          } = this.getProps();
          !s && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), t && t.setActive("whileDrag", !1)
        }
        updateAxis(e, t, s) {
          const {
            drag: n
          } = this.getProps();
          if (!s || !gn(e, n, this.currentDirection)) return;
          const i = this.getAxisMotionValue(e);
          let r = this.originPoint[e] + s[e];
          this.constraints && this.constraints[e] && (r = function(e, {
            min: t,
            max: s
          }, n) {
            return void 0 !== t && e < t ? e = n ? (0, Is.C)(t, e, n.min) : Math.max(e, t) : void 0 !== s && e > s && (e = n ? (0, Is.C)(s, e, n.max) : Math.min(e, s)), e
          }(r, this.constraints[e], this.elastic[e])), i.set(r)
        }
        resolveConstraints() {
          const {
            dragConstraints: e,
            dragElastic: t
          } = this.getProps(), {
            layout: s
          } = this.visualElement.projection || {}, n = this.constraints;
          e && c(e) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : this.constraints = !(!e || !s) && function(e, {
            top: t,
            left: s,
            bottom: n,
            right: i
          }) {
            return {
              x: Ns(e.x, s, i),
              y: Ns(e.y, t, n)
            }
          }(s.layoutBox, e), this.elastic = function(e = Gs) {
            return !1 === e ? e = 0 : !0 === e && (e = Gs), {
              x: Hs(e, "left", "right"),
              y: Hs(e, "top", "bottom")
            }
          }(t), n !== this.constraints && s && this.constraints && !this.hasMutatedConstraints && Ys((e => {
            this.getAxisMotionValue(e) && (this.constraints[e] = function(e, t) {
              const s = {};
              return void 0 !== t.min && (s.min = t.min - e.min), void 0 !== t.max && (s.max = t.max - e.min), s
            }(s.layoutBox[e], this.constraints[e]))
          }))
        }
        resolveRefConstraints() {
          const {
            dragConstraints: e,
            onMeasureDragConstraints: t
          } = this.getProps();
          if (!e || !c(e)) return !1;
          const s = e.current;
          (0, He.k)(null !== s, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
          const {
            projection: n
          } = this.visualElement;
          if (!n || !n.layout) return !1;
          const i = function(e, t, s) {
            const n = hn(e, s),
              {
                scroll: i
              } = t;
            return i && (ln(n.x, i.offset.x), ln(n.y, i.offset.y)), n
          }(s, n.root, this.visualElement.getTransformPagePoint());
          let r = function(e, t) {
            return {
              x: Ws(e.x, t.x),
              y: Ws(e.y, t.y)
            }
          }(n.layout.layoutBox, i);
          if (t) {
            const e = t(function({
              x: e,
              y: t
            }) {
              return {
                top: t.min,
                right: e.max,
                bottom: t.max,
                left: e.min
              }
            }(r));
            this.hasMutatedConstraints = !!e, e && (r = Zs(e))
          }
          return r
        }
        startAnimation(e) {
          const {
            drag: t,
            dragMomentum: s,
            dragElastic: n,
            dragTransition: i,
            dragSnapToOrigin: r,
            onDragTransitionEnd: o
          } = this.getProps(), a = this.constraints || {}, l = Ys((o => {
            if (!gn(o, t, this.currentDirection)) return;
            let l = a && a[o] || {};
            r && (l = {
              min: 0,
              max: 0
            });
            const c = n ? 200 : 1e6,
              d = n ? 40 : 1e7,
              u = {
                type: "inertia",
                velocity: s ? e[o] : 0,
                bounceStiffness: c,
                bounceDamping: d,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...i,
                ...l
              };
            return this.startAxisValueAnimation(o, u)
          }));
          return Promise.all(l).then(o)
        }
        startAxisValueAnimation(e, t) {
          const s = this.getAxisMotionValue(e);
          return s.start(rs(e, s, 0, t))
        }
        stopAnimation() {
          Ys((e => this.getAxisMotionValue(e).stop()))
        }
        getAxisMotionValue(e) {
          const t = "_drag" + e.toUpperCase(),
            s = this.visualElement.getProps();
          return s[t] || this.visualElement.getValue(e, (s.initial ? s.initial[e] : void 0) || 0)
        }
        snapToCursor(e) {
          Ys((t => {
            const {
              drag: s
            } = this.getProps();
            if (!gn(t, s, this.currentDirection)) return;
            const {
              projection: n
            } = this.visualElement, i = this.getAxisMotionValue(t);
            if (n && n.layout) {
              const {
                min: s,
                max: r
              } = n.layout.layoutBox[t];
              i.set(e[t] - (0, Is.C)(s, r, .5))
            }
          }))
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          const {
            drag: e,
            dragConstraints: t
          } = this.getProps(), {
            projection: s
          } = this.visualElement;
          if (!c(t) || !s || !this.constraints) return;
          this.stopAnimation();
          const n = {
            x: 0,
            y: 0
          };
          Ys((e => {
            const t = this.getAxisMotionValue(e);
            if (t) {
              const s = t.get();
              n[e] = function(e, t) {
                let s = .5;
                const n = Rs(e),
                  i = Rs(t);
                return i > n ? s = (0, Vs.Y)(t.min, t.max - n, e.min) : n > i && (s = (0, Vs.Y)(e.min, e.max - i, t.min)), (0, wt.u)(0, 1, s)
              }({
                min: s,
                max: s
              }, this.constraints[e])
            }
          }));
          const {
            transformTemplate: i
          } = this.visualElement.getProps();
          this.visualElement.current.style.transform = i ? i({}, "") : "none", s.root && s.root.updateScroll(), s.updateLayout(), this.resolveConstraints(), Ys((t => {
            if (!gn(t, e, null)) return;
            const s = this.getAxisMotionValue(t),
              {
                min: i,
                max: r
              } = this.constraints[t];
            s.set((0, Is.C)(i, r, n[t]))
          }))
        }
        addListeners() {
          if (!this.visualElement.current) return;
          mn.set(this.visualElement, this);
          const e = Ee(this.visualElement.current, "pointerdown", (e => {
              const {
                drag: t,
                dragListener: s = !0
              } = this.getProps();
              t && s && this.start(e)
            })),
            t = () => {
              const {
                dragConstraints: e
              } = this.getProps();
              c(e) && (this.constraints = this.resolveRefConstraints())
            },
            {
              projection: s
            } = this.visualElement,
            n = s.addEventListener("measure", t);
          s && !s.layout && (s.root && s.root.updateScroll(), s.updateLayout()), t();
          const i = be(window, "resize", (() => this.scalePositionWithinConstraints())),
            r = s.addEventListener("didUpdate", (({
              delta: e,
              hasLayoutChanged: t
            }) => {
              this.isDragging && t && (Ys((t => {
                const s = this.getAxisMotionValue(t);
                s && (this.originPoint[t] += e[t].translate, s.set(s.get() + e[t].translate))
              })), this.visualElement.render())
            }));
          return () => {
            i(), e(), n(), r && r()
          }
        }
        getProps() {
          const e = this.visualElement.getProps(),
            {
              drag: t = !1,
              dragDirectionLock: s = !1,
              dragPropagation: n = !1,
              dragConstraints: i = !1,
              dragElastic: r = Gs,
              dragMomentum: o = !0
            } = e;
          return {
            ...e,
            drag: t,
            dragDirectionLock: s,
            dragPropagation: n,
            dragConstraints: i,
            dragElastic: r,
            dragMomentum: o
          }
        }
      }

      function gn(e, t, s) {
        return !(!0 !== t && t !== e || null !== s && s !== e)
      }
      const vn = e => (t, s) => {
          e && ve.Wi.update((() => e(t, s)))
        },
        yn = {
          hasAnimatedSinceResize: !0,
          hasEverUpdated: !1
        };

      function xn(e, t) {
        return t.max === t.min ? 0 : e / (t.max - t.min) * 100
      }
      const bn = {
          correct: (e, t) => {
            if (!t.target) return e;
            if ("string" == typeof e) {
              if (!z.px.test(e)) return e;
              e = parseFloat(e)
            }
            return `${xn(e,t.target.x)}% ${xn(e,t.target.y)}%`
          }
        },
        wn = {
          correct: (e, {
            treeScale: t,
            projectionDelta: s
          }) => {
            const n = e,
              i = Ht.P.parse(e);
            if (i.length > 5) return n;
            const r = Ht.P.createTransformer(e),
              o = "number" != typeof i[0] ? 1 : 0,
              a = s.x.scale * t.x,
              l = s.y.scale * t.y;
            i[0 + o] /= a, i[1 + o] /= l;
            const c = (0, Is.C)(a, l, .5);
            return "number" == typeof i[2 + o] && (i[2 + o] /= c), "number" == typeof i[3 + o] && (i[3 + o] /= c), r(i)
          }
        };
      class Sn extends n.Component {
        componentDidMount() {
          const {
            visualElement: e,
            layoutGroup: t,
            switchLayoutGroup: s,
            layoutId: n
          } = this.props, {
            projection: i
          } = e;
          var r;
          r = En, Object.assign(A, r), i && (t.group && t.group.add(i), s && s.register && n && s.register(i), i.root.didUpdate(), i.addEventListener("animationComplete", (() => {
            this.safeToRemove()
          })), i.setOptions({
            ...i.options,
            onExitComplete: () => this.safeToRemove()
          })), yn.hasEverUpdated = !0
        }
        getSnapshotBeforeUpdate(e) {
          const {
            layoutDependency: t,
            visualElement: s,
            drag: n,
            isPresent: i
          } = this.props, r = s.projection;
          return r ? (r.isPresent = i, n || e.layoutDependency !== t || void 0 === t ? r.willUpdate() : this.safeToRemove(), e.isPresent !== i && (i ? r.promote() : r.relegate() || ve.Wi.postRender((() => {
            const e = r.getStack();
            e && e.members.length || this.safeToRemove()
          }))), null) : null
        }
        componentDidUpdate() {
          const {
            projection: e
          } = this.props.visualElement;
          e && (e.root.didUpdate(), queueMicrotask((() => {
            !e.currentAnimation && e.isLead() && this.safeToRemove()
          })))
        }
        componentWillUnmount() {
          const {
            visualElement: e,
            layoutGroup: t,
            switchLayoutGroup: s
          } = this.props, {
            projection: n
          } = e;
          n && (n.scheduleCheckAfterUnmount(), t && t.group && t.group.remove(n), s && s.deregister && s.deregister(n))
        }
        safeToRemove() {
          const {
            safeToRemove: e
          } = this.props;
          e && e()
        }
        render() {
          return null
        }
      }

      function Tn(e) {
        const [t, s] = function() {
          const e = (0, n.useContext)(o);
          if (null === e) return [!0, null];
          const {
            isPresent: t,
            onExitComplete: s,
            register: i
          } = e, r = (0, n.useId)();
          return (0, n.useEffect)((() => i(r)), []), !t && s ? [!1, () => s && s(r)] : [!0]
        }(), i = (0, n.useContext)(b);
        return n.createElement(Sn, {
          ...e,
          layoutGroup: i,
          switchLayoutGroup: (0, n.useContext)(w),
          isPresent: t,
          safeToRemove: s
        })
      }
      const En = {
        borderRadius: {
          ...bn,
          applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
        },
        borderTopLeftRadius: bn,
        borderTopRightRadius: bn,
        borderBottomLeftRadius: bn,
        borderBottomRightRadius: bn,
        boxShadow: wn
      };
      var Pn = s(561);
      const Cn = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        Mn = Cn.length,
        An = e => "string" == typeof e ? parseFloat(e) : e,
        Ln = e => "number" == typeof e || z.px.test(e);

      function kn(e, t) {
        return void 0 !== e[t] ? e[t] : e.borderRadius
      }
      const Dn = Vn(0, .5, lt),
        On = Vn(.5, .95, Ie.Z);

      function Vn(e, t, s) {
        return n => n < e ? 0 : n > t ? 1 : s((0, Vs.Y)(e, t, n))
      }

      function In(e, t) {
        e.min = t.min, e.max = t.max
      }

      function Rn(e, t) {
        In(e.x, t.x), In(e.y, t.y)
      }

      function Bn(e, t, s, n, i) {
        return e = sn(e -= t, 1 / s, n), void 0 !== i && (e = sn(e, 1 / i, n)), e
      }

      function jn(e, t, [s, n, i], r, o) {
        ! function(e, t = 0, s = 1, n = .5, i, r = e, o = e) {
          if (z.aQ.test(t) && (t = parseFloat(t), t = (0, Is.C)(o.min, o.max, t / 100) - o.min), "number" != typeof t) return;
          let a = (0, Is.C)(r.min, r.max, n);
          e === r && (a -= t), e.min = Bn(e.min, t, s, a, i), e.max = Bn(e.max, t, s, a, i)
        }(e, t[s], t[n], t[i], t.scale, r, o)
      }
      const zn = ["x", "scaleX", "originX"],
        Fn = ["y", "scaleY", "originY"];

      function $n(e, t, s, n) {
        jn(e.x, t, zn, s ? s.x : void 0, n ? n.x : void 0), jn(e.y, t, Fn, s ? s.y : void 0, n ? n.y : void 0)
      }

      function _n(e) {
        return 0 === e.translate && 1 === e.scale
      }

      function Nn(e) {
        return _n(e.x) && _n(e.y)
      }

      function Wn(e, t) {
        return Math.round(e.x.min) === Math.round(t.x.min) && Math.round(e.x.max) === Math.round(t.x.max) && Math.round(e.y.min) === Math.round(t.y.min) && Math.round(e.y.max) === Math.round(t.y.max)
      }

      function Gn(e) {
        return Rs(e.x) / Rs(e.y)
      }
      var Hn = s(8082);
      class qn {
        constructor() {
          this.members = []
        }
        add(e) {
          (0, Hn.y4)(this.members, e), e.scheduleRender()
        }
        remove(e) {
          if ((0, Hn.cl)(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
            const e = this.members[this.members.length - 1];
            e && this.promote(e)
          }
        }
        relegate(e) {
          const t = this.members.findIndex((t => e === t));
          if (0 === t) return !1;
          let s;
          for (let e = t; e >= 0; e--) {
            const t = this.members[e];
            if (!1 !== t.isPresent) {
              s = t;
              break
            }
          }
          return !!s && (this.promote(s), !0)
        }
        promote(e, t) {
          const s = this.lead;
          if (e !== s && (this.prevLead = s, this.lead = e, e.show(), s)) {
            s.instance && s.scheduleRender(), e.scheduleRender(), e.resumeFrom = s, t && (e.resumeFrom.preserveOpacity = !0), s.snapshot && (e.snapshot = s.snapshot, e.snapshot.latestValues = s.animationValues || s.latestValues), e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
            const {
              crossfade: n
            } = e.options;
            !1 === n && s.hide()
          }
        }
        exitAnimationComplete() {
          this.members.forEach((e => {
            const {
              options: t,
              resumingFrom: s
            } = e;
            t.onExitComplete && t.onExitComplete(), s && s.options.onExitComplete && s.options.onExitComplete()
          }))
        }
        scheduleRender() {
          this.members.forEach((e => {
            e.instance && e.scheduleRender(!1)
          }))
        }
        removeLeadSnapshot() {
          this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
        }
      }

      function Un(e, t, s) {
        let n = "";
        const i = e.x.translate / t.x,
          r = e.y.translate / t.y;
        if ((i || r) && (n = `translate3d(${i}px, ${r}px, 0) `), 1 === t.x && 1 === t.y || (n += `scale(${1/t.x}, ${1/t.y}) `), s) {
          const {
            rotate: e,
            rotateX: t,
            rotateY: i
          } = s;
          e && (n += `rotate(${e}deg) `), t && (n += `rotateX(${t}deg) `), i && (n += `rotateY(${i}deg) `)
        }
        const o = e.x.scale * t.x,
          a = e.y.scale * t.y;
        return 1 === o && 1 === a || (n += `scale(${o}, ${a})`), n || "none"
      }
      const Xn = (e, t) => e.depth - t.depth;
      class Yn {
        constructor() {
          this.children = [], this.isDirty = !1
        }
        add(e) {
          (0, Hn.y4)(this.children, e), this.isDirty = !0
        }
        remove(e) {
          (0, Hn.cl)(this.children, e), this.isDirty = !0
        }
        forEach(e) {
          this.isDirty && this.children.sort(Xn), this.isDirty = !1, this.children.forEach(e)
        }
      }
      const Zn = ["", "X", "Y", "Z"];
      let Kn = 0;
      const Jn = {
        type: "projectionFrame",
        totalNodes: 0,
        resolvedTargetDeltas: 0,
        recalculatedProjection: 0
      };

      function Qn({
        attachResizeListener: e,
        defaultParent: t,
        measureScroll: s,
        checkIsScrollRoot: n,
        resetTransform: i
      }) {
        return class {
          constructor(e = {}, s = (null == t ? void 0 : t())) {
            this.id = Kn++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = {
              x: 1,
              y: 1
            }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.updateScheduled = !1, this.checkUpdateFailed = () => {
              this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
            }, this.updateProjection = () => {
              var e;
              Jn.totalNodes = Jn.resolvedTargetDeltas = Jn.recalculatedProjection = 0, this.nodes.forEach(si), this.nodes.forEach(ci), this.nodes.forEach(di), this.nodes.forEach(ni), e = Jn, window.MotionDebug && window.MotionDebug.record(e)
            }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = e, this.root = s ? s.root || s : this, this.path = s ? [...s.path, s] : [], this.parent = s, this.depth = s ? s.depth + 1 : 0;
            for (let e = 0; e < this.path.length; e++) this.path[e].shouldResetTransform = !0;
            this.root === this && (this.nodes = new Yn)
          }
          addEventListener(e, t) {
            return this.eventHandlers.has(e) || this.eventHandlers.set(e, new Pn.L), this.eventHandlers.get(e).add(t)
          }
          notifyListeners(e, ...t) {
            const s = this.eventHandlers.get(e);
            s && s.notify(...t)
          }
          hasListeners(e) {
            return this.eventHandlers.has(e)
          }
          mount(t, s = this.root.hasTreeAnimated) {
            if (this.instance) return;
            var n;
            this.isSVG = (n = t) instanceof SVGElement && "svg" !== n.tagName, this.instance = t;
            const {
              layoutId: i,
              layout: r,
              visualElement: o
            } = this.options;
            if (o && !o.current && o.mount(t), this.root.nodes.add(this), this.parent && this.parent.children.add(this), s && (r || i) && (this.isLayoutDirty = !0), e) {
              let s;
              const n = () => this.root.updateBlockedByResize = !1;
              e(t, (() => {
                this.root.updateBlockedByResize = !0, s && s(), s = function(e, t) {
                  const s = performance.now(),
                    n = ({
                      timestamp: t
                    }) => {
                      const i = t - s;
                      i >= 250 && ((0, ve.Pn)(n), e(i - 250))
                    };
                  return ve.Wi.read(n, !0), () => (0, ve.Pn)(n)
                }(n), yn.hasAnimatedSinceResize && (yn.hasAnimatedSinceResize = !1, this.nodes.forEach(li))
              }))
            }
            i && this.root.registerSharedNode(i, this), !1 !== this.options.animate && o && (i || r) && this.addEventListener("didUpdate", (({
              delta: e,
              hasLayoutChanged: t,
              hasRelativeTargetChanged: s,
              layout: n
            }) => {
              if (this.isTreeAnimationBlocked()) return this.target = void 0, void(this.relativeTarget = void 0);
              const i = this.options.transition || o.getDefaultTransition() || gi,
                {
                  onLayoutAnimationStart: r,
                  onLayoutAnimationComplete: a
                } = o.getProps(),
                l = !this.targetLayout || !Wn(this.targetLayout, n) || s,
                c = !t && s;
              if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || c || t && (l || !this.currentAnimation)) {
                this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(e, c);
                const t = {
                  ...is(i, "layout"),
                  onPlay: r,
                  onComplete: a
                };
                (o.shouldReduceMotion || this.options.layoutRoot) && (t.delay = 0, t.type = !1), this.startAnimation(t)
              } else t || li(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
              this.targetLayout = n
            }))
          }
          unmount() {
            this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
            const e = this.getStack();
            e && e.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, (0, ve.Pn)(this.updateProjection)
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
            this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(ui), this.animationId++)
          }
          getTransformTemplate() {
            const {
              visualElement: e
            } = this.options;
            return e && e.getProps().transformTemplate
          }
          willUpdate(e = !0) {
            if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) return void(this.options.onExitComplete && this.options.onExitComplete());
            if (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
            this.isLayoutDirty = !0;
            for (let e = 0; e < this.path.length; e++) {
              const t = this.path[e];
              t.shouldResetTransform = !0, t.updateScroll("snapshot"), t.options.layoutRoot && t.willUpdate(!1)
            }
            const {
              layoutId: t,
              layout: s
            } = this.options;
            if (void 0 === t && !s) return;
            const n = this.getTransformTemplate();
            this.prevTransformTemplateValue = n ? n(this.latestValues, "") : void 0, this.updateSnapshot(), e && this.notifyListeners("willUpdate")
          }
          update() {
            if (this.updateScheduled = !1, this.isUpdateBlocked()) return this.unblockUpdate(), this.clearAllSnapshots(), void this.nodes.forEach(ri);
            this.isUpdating || this.nodes.forEach(oi), this.isUpdating = !1, this.nodes.forEach(ai), this.nodes.forEach(ei), this.nodes.forEach(ti), this.clearAllSnapshots();
            const e = performance.now();
            ve.frameData.delta = (0, wt.u)(0, 1e3 / 60, e - ve.frameData.timestamp), ve.frameData.timestamp = e, ve.frameData.isProcessing = !0, ve.S6.update.process(ve.frameData), ve.S6.preRender.process(ve.frameData), ve.S6.render.process(ve.frameData), ve.frameData.isProcessing = !1
          }
          didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0, queueMicrotask((() => this.update())))
          }
          clearAllSnapshots() {
            this.nodes.forEach(ii), this.sharedNodes.forEach(pi)
          }
          scheduleUpdateProjection() {
            ve.Wi.preRender(this.updateProjection, !1, !0)
          }
          scheduleCheckAfterUnmount() {
            ve.Wi.postRender((() => {
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
              for (let e = 0; e < this.path.length; e++) this.path[e].updateScroll();
            const e = this.layout;
            this.layout = this.measure(!1), this.layoutCorrected = Xs(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
            const {
              visualElement: t
            } = this.options;
            t && t.notify("LayoutMeasure", this.layout.layoutBox, e ? e.layoutBox : void 0)
          }
          updateScroll(e = "measure") {
            let t = Boolean(this.options.layoutScroll && this.instance);
            this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === e && (t = !1), t && (this.scroll = {
              animationId: this.root.animationId,
              phase: e,
              isRoot: n(this.instance),
              offset: s(this.instance)
            })
          }
          resetTransform() {
            if (!i) return;
            const e = this.isLayoutDirty || this.shouldResetTransform,
              t = this.projectionDelta && !Nn(this.projectionDelta),
              s = this.getTransformTemplate(),
              n = s ? s(this.latestValues, "") : void 0,
              r = n !== this.prevTransformTemplateValue;
            e && (t || Qs(this.latestValues) || r) && (i(this.instance, n), this.shouldResetTransform = !1, this.scheduleRender())
          }
          measure(e = !0) {
            const t = this.measurePageBox();
            let s = this.removeElementScroll(t);
            var n;
            return e && (s = this.removeTransform(s)), xi((n = s).x), xi(n.y), {
              animationId: this.root.animationId,
              measuredBox: t,
              layoutBox: s,
              latestValues: {},
              source: this.id
            }
          }
          measurePageBox() {
            const {
              visualElement: e
            } = this.options;
            if (!e) return Xs();
            const t = e.measureViewportBox(),
              {
                scroll: s
              } = this.root;
            return s && (ln(t.x, s.offset.x), ln(t.y, s.offset.y)), t
          }
          removeElementScroll(e) {
            const t = Xs();
            Rn(t, e);
            for (let s = 0; s < this.path.length; s++) {
              const n = this.path[s],
                {
                  scroll: i,
                  options: r
                } = n;
              if (n !== this.root && i && r.layoutScroll) {
                if (i.isRoot) {
                  Rn(t, e);
                  const {
                    scroll: s
                  } = this.root;
                  s && (ln(t.x, -s.offset.x), ln(t.y, -s.offset.y))
                }
                ln(t.x, i.offset.x), ln(t.y, i.offset.y)
              }
            }
            return t
          }
          applyTransform(e, t = !1) {
            const s = Xs();
            Rn(s, e);
            for (let e = 0; e < this.path.length; e++) {
              const n = this.path[e];
              !t && n.options.layoutScroll && n.scroll && n !== n.root && pn(s, {
                x: -n.scroll.offset.x,
                y: -n.scroll.offset.y
              }), Qs(n.latestValues) && pn(s, n.latestValues)
            }
            return Qs(this.latestValues) && pn(s, this.latestValues), s
          }
          removeTransform(e) {
            const t = Xs();
            Rn(t, e);
            for (let e = 0; e < this.path.length; e++) {
              const s = this.path[e];
              if (!s.instance) continue;
              if (!Qs(s.latestValues)) continue;
              Js(s.latestValues) && s.updateSnapshot();
              const n = Xs();
              Rn(n, s.measurePageBox()), $n(t, s.latestValues, s.snapshot ? s.snapshot.layoutBox : void 0, n)
            }
            return Qs(this.latestValues) && $n(t, this.latestValues), t
          }
          setTargetDelta(e) {
            this.targetDelta = e, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
          }
          setOptions(e) {
            this.options = {
              ...this.options,
              ...e,
              crossfade: void 0 === e.crossfade || e.crossfade
            }
          }
          clearMeasurements() {
            this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
          }
          forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== ve.frameData.timestamp && this.relativeParent.resolveTargetDelta(!0)
          }
          resolveTargetDelta(e = !1) {
            var t;
            const s = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = s.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = s.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = s.isSharedProjectionDirty);
            const n = Boolean(this.resumingFrom) || this !== s;
            if (!(e || n && this.isSharedProjectionDirty || this.isProjectionDirty || (null === (t = this.parent) || void 0 === t ? void 0 : t.isProjectionDirty) || this.attemptToResolveRelativeTarget)) return;
            const {
              layout: i,
              layoutId: r
            } = this.options;
            if (this.layout && (i || r)) {
              if (this.resolvedRelativeTargetAt = ve.frameData.timestamp, !this.targetDelta && !this.relativeTarget) {
                const e = this.getClosestProjectingParent();
                e && e.layout && 1 !== this.animationProgress ? (this.relativeParent = e, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Xs(), this.relativeTargetOrigin = Xs(), _s(this.relativeTargetOrigin, this.layout.layoutBox, e.layout.layoutBox), Rn(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
              }
              if (this.relativeTarget || this.targetDelta) {
                var o, a, l;
                if (this.target || (this.target = Xs(), this.targetWithTransforms = Xs()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), o = this.target, a = this.relativeTarget, l = this.relativeParent.target, Fs(o.x, a.x, l.x), Fs(o.y, a.y, l.y)) : this.targetDelta ? (Boolean(this.resumingFrom) ? this.target = this.applyTransform(this.layout.layoutBox) : Rn(this.target, this.layout.layoutBox), on(this.target, this.targetDelta)) : Rn(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
                  this.attemptToResolveRelativeTarget = !1;
                  const e = this.getClosestProjectingParent();
                  e && Boolean(e.resumingFrom) === Boolean(this.resumingFrom) && !e.options.layoutScroll && e.target && 1 !== this.animationProgress ? (this.relativeParent = e, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Xs(), this.relativeTargetOrigin = Xs(), _s(this.relativeTargetOrigin, this.target, e.target), Rn(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                Jn.resolvedTargetDeltas++
              }
            }
          }
          getClosestProjectingParent() {
            if (this.parent && !Js(this.parent.latestValues) && !en(this.parent.latestValues)) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
          }
          isProjecting() {
            return Boolean((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
          }
          calcProjection() {
            var e;
            const t = this.getLead(),
              s = Boolean(this.resumingFrom) || this !== t;
            let n = !0;
            if ((this.isProjectionDirty || (null === (e = this.parent) || void 0 === e ? void 0 : e.isProjectionDirty)) && (n = !1), s && (this.isSharedProjectionDirty || this.isTransformDirty) && (n = !1), this.resolvedRelativeTargetAt === ve.frameData.timestamp && (n = !1), n) return;
            const {
              layout: i,
              layoutId: r
            } = this.options;
            if (this.isTreeAnimating = Boolean(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !i && !r) return;
            Rn(this.layoutCorrected, this.layout.layoutBox);
            const o = this.treeScale.x,
              a = this.treeScale.y;
            ! function(e, t, s, n = !1) {
              const i = s.length;
              if (!i) return;
              let r, o;
              t.x = t.y = 1;
              for (let a = 0; a < i; a++) {
                r = s[a], o = r.projectionDelta;
                const i = r.instance;
                i && i.style && "contents" === i.style.display || (n && r.options.layoutScroll && r.scroll && r !== r.root && pn(e, {
                  x: -r.scroll.offset.x,
                  y: -r.scroll.offset.y
                }), o && (t.x *= o.x.scale, t.y *= o.y.scale, on(e, o)), n && Qs(r.latestValues) && pn(e, r.latestValues))
              }
              t.x = an(t.x), t.y = an(t.y)
            }(this.layoutCorrected, this.treeScale, this.path, s), !t.layout || t.target || 1 === this.treeScale.x && 1 === this.treeScale.y || (t.target = t.layout.layoutBox);
            const {
              target: l
            } = t;
            if (!l) return void(this.projectionTransform && (this.projectionDelta = Us(), this.projectionTransform = "none", this.scheduleRender()));
            this.projectionDelta || (this.projectionDelta = Us(), this.projectionDeltaWithTransform = Us());
            const c = this.projectionTransform;
            zs(this.projectionDelta, this.layoutCorrected, l, this.latestValues), this.projectionTransform = Un(this.projectionDelta, this.treeScale), this.projectionTransform === c && this.treeScale.x === o && this.treeScale.y === a || (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", l)), Jn.recalculatedProjection++
          }
          hide() {
            this.isVisible = !1
          }
          show() {
            this.isVisible = !0
          }
          scheduleRender(e = !0) {
            if (this.options.scheduleRender && this.options.scheduleRender(), e) {
              const e = this.getStack();
              e && e.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
          }
          setAnimationOrigin(e, t = !1) {
            const s = this.snapshot,
              n = s ? s.latestValues : {},
              i = {
                ...this.latestValues
              },
              r = Us();
            this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !t;
            const o = Xs(),
              a = (s ? s.source : void 0) !== (this.layout ? this.layout.source : void 0),
              l = this.getStack(),
              c = !l || l.members.length <= 1,
              d = Boolean(a && !c && !0 === this.options.crossfade && !this.path.some(fi));
            let u;
            this.animationProgress = 0, this.mixTargetDelta = t => {
              const s = t / 1e3;
              var l, p, h, m, f, g;
              hi(r.x, e.x, s), hi(r.y, e.y, s), this.setTargetDelta(r), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (_s(o, this.layout.layoutBox, this.relativeParent.layout.layoutBox), h = this.relativeTarget, m = this.relativeTargetOrigin, f = o, g = s, mi(h.x, m.x, f.x, g), mi(h.y, m.y, f.y, g), u && (l = this.relativeTarget, p = u, l.x.min === p.x.min && l.x.max === p.x.max && l.y.min === p.y.min && l.y.max === p.y.max) && (this.isProjectionDirty = !1), u || (u = Xs()), Rn(u, this.relativeTarget)), a && (this.animationValues = i, function(e, t, s, n, i, r) {
                i ? (e.opacity = (0, Is.C)(0, void 0 !== s.opacity ? s.opacity : 1, Dn(n)), e.opacityExit = (0, Is.C)(void 0 !== t.opacity ? t.opacity : 1, 0, On(n))) : r && (e.opacity = (0, Is.C)(void 0 !== t.opacity ? t.opacity : 1, void 0 !== s.opacity ? s.opacity : 1, n));
                for (let i = 0; i < Mn; i++) {
                  const r = `border${Cn[i]}Radius`;
                  let o = kn(t, r),
                    a = kn(s, r);
                  void 0 === o && void 0 === a || (o || (o = 0), a || (a = 0), 0 === o || 0 === a || Ln(o) === Ln(a) ? (e[r] = Math.max((0, Is.C)(An(o), An(a), n), 0), (z.aQ.test(a) || z.aQ.test(o)) && (e[r] += "%")) : e[r] = a)
                }(t.rotate || s.rotate) && (e.rotate = (0, Is.C)(t.rotate || 0, s.rotate || 0, n))
              }(i, n, this.latestValues, s, d, c)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = s
            }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
          }
          startAnimation(e) {
            this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && ((0, ve.Pn)(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = ve.Wi.update((() => {
              yn.hasAnimatedSinceResize = !0, this.currentAnimation = function(e, t, s) {
                const n = O(0) ? 0 : (0, ls.BX)(0);
                return n.start(rs("", n, 1e3, s)), n.animation
              }(0, 0, {
                ...e,
                onUpdate: t => {
                  this.mixTargetDelta(t), e.onUpdate && e.onUpdate(t)
                },
                onComplete: () => {
                  e.onComplete && e.onComplete(), this.completeAnimation()
                }
              }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
            }))
          }
          completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
            const e = this.getStack();
            e && e.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
          }
          finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(1e3), this.currentAnimation.stop()), this.completeAnimation()
          }
          applyTransformsToTarget() {
            const e = this.getLead();
            let {
              targetWithTransforms: t,
              target: s,
              layout: n,
              latestValues: i
            } = e;
            if (t && s && n) {
              if (this !== e && this.layout && n && bi(this.options.animationType, this.layout.layoutBox, n.layoutBox)) {
                s = this.target || Xs();
                const t = Rs(this.layout.layoutBox.x);
                s.x.min = e.target.x.min, s.x.max = s.x.min + t;
                const n = Rs(this.layout.layoutBox.y);
                s.y.min = e.target.y.min, s.y.max = s.y.min + n
              }
              Rn(t, s), pn(t, i), zs(this.projectionDeltaWithTransform, this.layoutCorrected, t, i)
            }
          }
          registerSharedNode(e, t) {
            this.sharedNodes.has(e) || this.sharedNodes.set(e, new qn), this.sharedNodes.get(e).add(t);
            const s = t.options.initialPromotionConfig;
            t.promote({
              transition: s ? s.transition : void 0,
              preserveFollowOpacity: s && s.shouldPreserveFollowOpacity ? s.shouldPreserveFollowOpacity(t) : void 0
            })
          }
          isLead() {
            const e = this.getStack();
            return !e || e.lead === this
          }
          getLead() {
            var e;
            const {
              layoutId: t
            } = this.options;
            return t && (null === (e = this.getStack()) || void 0 === e ? void 0 : e.lead) || this
          }
          getPrevLead() {
            var e;
            const {
              layoutId: t
            } = this.options;
            return t ? null === (e = this.getStack()) || void 0 === e ? void 0 : e.prevLead : void 0
          }
          getStack() {
            const {
              layoutId: e
            } = this.options;
            if (e) return this.root.sharedNodes.get(e)
          }
          promote({
            needsReset: e,
            transition: t,
            preserveFollowOpacity: s
          } = {}) {
            const n = this.getStack();
            n && n.promote(this, s), e && (this.projectionDelta = void 0, this.needsReset = !0), t && this.setOptions({
              transition: t
            })
          }
          relegate() {
            const e = this.getStack();
            return !!e && e.relegate(this)
          }
          resetRotation() {
            const {
              visualElement: e
            } = this.options;
            if (!e) return;
            let t = !1;
            const {
              latestValues: s
            } = e;
            if ((s.rotate || s.rotateX || s.rotateY || s.rotateZ) && (t = !0), !t) return;
            const n = {};
            for (let t = 0; t < Zn.length; t++) {
              const i = "rotate" + Zn[t];
              s[i] && (n[i] = s[i], e.setStaticValue(i, 0))
            }
            e.render();
            for (const t in n) e.setStaticValue(t, n[t]);
            e.scheduleRender()
          }
          getProjectionStyles(e = {}) {
            var t, s;
            const n = {};
            if (!this.instance || this.isSVG) return n;
            if (!this.isVisible) return {
              visibility: "hidden"
            };
            n.visibility = "";
            const i = this.getTransformTemplate();
            if (this.needsReset) return this.needsReset = !1, n.opacity = "", n.pointerEvents = me(e.pointerEvents) || "", n.transform = i ? i(this.latestValues, "") : "none", n;
            const r = this.getLead();
            if (!this.projectionDelta || !this.layout || !r.target) {
              const t = {};
              return this.options.layoutId && (t.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1, t.pointerEvents = me(e.pointerEvents) || ""), this.hasProjected && !Qs(this.latestValues) && (t.transform = i ? i({}, "") : "none", this.hasProjected = !1), t
            }
            const o = r.animationValues || r.latestValues;
            this.applyTransformsToTarget(), n.transform = Un(this.projectionDeltaWithTransform, this.treeScale, o), i && (n.transform = i(o, n.transform));
            const {
              x: a,
              y: l
            } = this.projectionDelta;
            n.transformOrigin = `${100*a.origin}% ${100*l.origin}% 0`, r.animationValues ? n.opacity = r === this ? null !== (s = null !== (t = o.opacity) && void 0 !== t ? t : this.latestValues.opacity) && void 0 !== s ? s : 1 : this.preserveOpacity ? this.latestValues.opacity : o.opacityExit : n.opacity = r === this ? void 0 !== o.opacity ? o.opacity : "" : void 0 !== o.opacityExit ? o.opacityExit : 0;
            for (const e in A) {
              if (void 0 === o[e]) continue;
              const {
                correct: t,
                applyTo: s
              } = A[e], i = "none" === n.transform ? o[e] : t(o[e], r);
              if (s) {
                const e = s.length;
                for (let t = 0; t < e; t++) n[s[t]] = i
              } else n[e] = i
            }
            return this.options.layoutId && (n.pointerEvents = r === this ? me(e.pointerEvents) || "" : "none"), n
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
          }
          resetTree() {
            this.root.nodes.forEach((e => {
              var t;
              return null === (t = e.currentAnimation) || void 0 === t ? void 0 : t.stop()
            })), this.root.nodes.forEach(ri), this.root.sharedNodes.clear()
          }
        }
      }

      function ei(e) {
        e.updateLayout()
      }

      function ti(e) {
        var t;
        const s = (null === (t = e.resumeFrom) || void 0 === t ? void 0 : t.snapshot) || e.snapshot;
        if (e.isLead() && e.layout && s && e.hasListeners("didUpdate")) {
          const {
            layoutBox: t,
            measuredBox: n
          } = e.layout, {
            animationType: i
          } = e.options, r = s.source !== e.layout.source;
          "size" === i ? Ys((e => {
            const n = r ? s.measuredBox[e] : s.layoutBox[e],
              i = Rs(n);
            n.min = t[e].min, n.max = n.min + i
          })) : bi(i, s.layoutBox, t) && Ys((n => {
            const i = r ? s.measuredBox[n] : s.layoutBox[n],
              o = Rs(t[n]);
            i.max = i.min + o, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[n].max = e.relativeTarget[n].min + o)
          }));
          const o = Us();
          zs(o, t, s.layoutBox);
          const a = Us();
          r ? zs(a, e.applyTransform(n, !0), s.measuredBox) : zs(a, t, s.layoutBox);
          const l = !Nn(o);
          let c = !1;
          if (!e.resumeFrom) {
            const n = e.getClosestProjectingParent();
            if (n && !n.resumeFrom) {
              const {
                snapshot: i,
                layout: r
              } = n;
              if (i && r) {
                const o = Xs();
                _s(o, s.layoutBox, i.layoutBox);
                const a = Xs();
                _s(a, t, r.layoutBox), Wn(o, a) || (c = !0), n.options.layoutRoot && (e.relativeTarget = a, e.relativeTargetOrigin = o, e.relativeParent = n)
              }
            }
          }
          e.notifyListeners("didUpdate", {
            layout: t,
            snapshot: s,
            delta: a,
            layoutDelta: o,
            hasLayoutChanged: l,
            hasRelativeTargetChanged: c
          })
        } else if (e.isLead()) {
          const {
            onExitComplete: t
          } = e.options;
          t && t()
        }
        e.options.transition = void 0
      }

      function si(e) {
        Jn.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = Boolean(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
      }

      function ni(e) {
        e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
      }

      function ii(e) {
        e.clearSnapshot()
      }

      function ri(e) {
        e.clearMeasurements()
      }

      function oi(e) {
        e.isLayoutDirty = !1
      }

      function ai(e) {
        const {
          visualElement: t
        } = e.options;
        t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform()
      }

      function li(e) {
        e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0
      }

      function ci(e) {
        e.resolveTargetDelta()
      }

      function di(e) {
        e.calcProjection()
      }

      function ui(e) {
        e.resetRotation()
      }

      function pi(e) {
        e.removeLeadSnapshot()
      }

      function hi(e, t, s) {
        e.translate = (0, Is.C)(t.translate, 0, s), e.scale = (0, Is.C)(t.scale, 1, s), e.origin = t.origin, e.originPoint = t.originPoint
      }

      function mi(e, t, s, n) {
        e.min = (0, Is.C)(t.min, s.min, n), e.max = (0, Is.C)(t.max, s.max, n)
      }

      function fi(e) {
        return e.animationValues && void 0 !== e.animationValues.opacityExit
      }
      const gi = {
          duration: .45,
          ease: [.4, 0, .1, 1]
        },
        vi = e => "undefined" != typeof navigator && navigator.userAgent.toLowerCase().includes(e),
        yi = vi("applewebkit/") && !vi("chrome/") ? Math.round : Ie.Z;

      function xi(e) {
        e.min = yi(e.min), e.max = yi(e.max)
      }

      function bi(e, t, s) {
        return "position" === e || "preserve-aspect" === e && !Bs(Gn(t), Gn(s), .2)
      }
      const wi = Qn({
          attachResizeListener: (e, t) => be(e, "resize", t),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop
          }),
          checkIsScrollRoot: () => !0
        }),
        Si = {
          current: void 0
        },
        Ti = Qn({
          measureScroll: e => ({
            x: e.scrollLeft,
            y: e.scrollTop
          }),
          defaultParent: () => {
            if (!Si.current) {
              const e = new wi({});
              e.mount(window), e.setOptions({
                layoutScroll: !0
              }), Si.current = e
            }
            return Si.current
          },
          resetTransform: (e, t) => {
            e.style.transform = void 0 !== t ? t : "none"
          },
          checkIsScrollRoot: e => Boolean("fixed" === window.getComputedStyle(e).position)
        }),
        Ei = {
          pan: {
            Feature: class extends De {
              constructor() {
                super(...arguments), this.removePointerDownListener = Ie.Z
              }
              onPointerDown(e) {
                this.session = new Cs(e, this.createPanHandlers(), {
                  transformPagePoint: this.node.getTransformPagePoint()
                })
              }
              createPanHandlers() {
                const {
                  onPanSessionStart: e,
                  onPanStart: t,
                  onPan: s,
                  onPanEnd: n
                } = this.node.getProps();
                return {
                  onSessionStart: vn(e),
                  onStart: vn(t),
                  onMove: s,
                  onEnd: (e, t) => {
                    delete this.session, n && ve.Wi.update((() => n(e, t)))
                  }
                }
              }
              mount() {
                this.removePointerDownListener = Ee(this.node.current, "pointerdown", (e => this.onPointerDown(e)))
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
            Feature: class extends De {
              constructor(e) {
                super(e), this.removeGroupControls = Ie.Z, this.removeListeners = Ie.Z, this.controls = new fn(e)
              }
              mount() {
                const {
                  dragControls: e
                } = this.node.getProps();
                e && (this.removeGroupControls = e.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || Ie.Z
              }
              unmount() {
                this.removeGroupControls(), this.removeListeners()
              }
            },
            ProjectionNode: Ti,
            MeasureLayout: Tn
          }
        },
        Pi = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;

      function Ci(e, t, s = 1) {
        (0, He.k)(s <= 4, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
        const [n, i] = function(e) {
          const t = Pi.exec(e);
          if (!t) return [, ];
          const [, s, n] = t;
          return [s, n]
        }(e);
        if (!n) return;
        const r = window.getComputedStyle(t).getPropertyValue(n);
        if (r) {
          const e = r.trim();
          return as(e) ? parseFloat(e) : e
        }
        return (0, R.tm)(i) ? Ci(i, t, s + 1) : i
      }
      const Mi = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"]),
        Ai = e => Mi.has(e),
        Li = e => e === j.Rx || e === z.px,
        ki = (e, t) => parseFloat(e.split(", ")[t]),
        Di = (e, t) => (s, {
          transform: n
        }) => {
          if ("none" === n || !n) return 0;
          const i = n.match(/^matrix3d\((.+)\)$/);
          if (i) return ki(i[1], t); {
            const t = n.match(/^matrix\((.+)\)$/);
            return t ? ki(t[1], e) : 0
          }
        },
        Oi = new Set(["x", "y", "z"]),
        Vi = L.filter((e => !Oi.has(e))),
        Ii = {
          width: ({
            x: e
          }, {
            paddingLeft: t = "0",
            paddingRight: s = "0"
          }) => e.max - e.min - parseFloat(t) - parseFloat(s),
          height: ({
            y: e
          }, {
            paddingTop: t = "0",
            paddingBottom: s = "0"
          }) => e.max - e.min - parseFloat(t) - parseFloat(s),
          top: (e, {
            top: t
          }) => parseFloat(t),
          left: (e, {
            left: t
          }) => parseFloat(t),
          bottom: ({
            y: e
          }, {
            top: t
          }) => parseFloat(t) + (e.max - e.min),
          right: ({
            x: e
          }, {
            left: t
          }) => parseFloat(t) + (e.max - e.min),
          x: Di(4, 13),
          y: Di(5, 14)
        };
      Ii.translateX = Ii.x, Ii.translateY = Ii.y;

      function Ri(e, t, s, n) {
        return (e => Object.keys(e).some(Ai))(t) ? ((e, t, s = {}, n = {}) => {
          t = {
            ...t
          }, n = {
            ...n
          };
          const i = Object.keys(t).filter(Ai);
          let r = [],
            o = !1;
          const a = [];
          if (i.forEach((i => {
              const l = e.getValue(i);
              if (!e.hasValue(i)) return;
              let c = s[i],
                d = us(c);
              const u = t[i];
              let p;
              if (ue(u)) {
                const e = u.length,
                  t = null === u[0] ? 1 : 0;
                c = u[t], d = us(c);
                for (let s = t; s < e && null !== u[s]; s++) p ? (0, He.k)(us(u[s]) === p, "All keyframes must be of the same type") : (p = us(u[s]), (0, He.k)(p === d || Li(d) && Li(p), "Keyframes must be of the same dimension as the current value"))
              } else p = us(u);
              if (d !== p)
                if (Li(d) && Li(p)) {
                  const e = l.get();
                  "string" == typeof e && l.set(parseFloat(e)), "string" == typeof u ? t[i] = parseFloat(u) : Array.isArray(u) && p === z.px && (t[i] = u.map(parseFloat))
                } else(null == d ? void 0 : d.transform) && (null == p ? void 0 : p.transform) && (0 === c || 0 === u) ? 0 === c ? l.set(p.transform(c)) : t[i] = d.transform(u) : (o || (r = function(e) {
                  const t = [];
                  return Vi.forEach((s => {
                    const n = e.getValue(s);
                    void 0 !== n && (t.push([s, n.get()]), n.set(s.startsWith("scale") ? 1 : 0))
                  })), t.length && e.render(), t
                }(e), o = !0), a.push(i), n[i] = void 0 !== n[i] ? n[i] : t[i], l.jump(u))
            })), a.length) {
            const s = a.indexOf("height") >= 0 ? window.pageYOffset : null,
              i = ((e, t, s) => {
                const n = t.measureViewportBox(),
                  i = t.current,
                  r = getComputedStyle(i),
                  {
                    display: o
                  } = r,
                  a = {};
                "none" === o && t.setStaticValue("display", e.display || "block"), s.forEach((e => {
                  a[e] = Ii[e](n, r)
                })), t.render();
                const l = t.measureViewportBox();
                return s.forEach((s => {
                  const n = t.getValue(s);
                  n && n.jump(a[s]), e[s] = Ii[s](l, r)
                })), e
              })(t, e, a);
            return r.length && r.forEach((([t, s]) => {
              e.getValue(t).set(s)
            })), e.render(), x.j && null !== s && window.scrollTo({
              top: s
            }), {
              target: i,
              transitionEnd: n
            }
          }
          return {
            target: t,
            transitionEnd: n
          }
        })(e, t, s, n) : {
          target: t,
          transitionEnd: n
        }
      }
      const Bi = {
          current: null
        },
        ji = {
          current: !1
        },
        zi = new WeakMap,
        Fi = Object.keys(y),
        $i = Fi.length,
        _i = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"],
        Ni = h.length;
      class Wi {
        constructor({
          parent: e,
          props: t,
          presenceContext: s,
          reducedMotionConfig: n,
          visualState: i
        }, r = {}) {
          this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
            this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
          }, this.scheduleRender = () => ve.Wi.render(this.render, !1, !0);
          const {
            latestValues: o,
            renderState: a
          } = i;
          this.latestValues = o, this.baseTarget = {
            ...o
          }, this.initialValues = t.initial ? {
            ...o
          } : {}, this.renderState = a, this.parent = e, this.props = t, this.presenceContext = s, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = n, this.options = r, this.isControllingVariants = m(t), this.isVariantNode = f(t), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = Boolean(e && e.current);
          const {
            willChange: l,
            ...c
          } = this.scrapeMotionValuesFromProps(t, {});
          for (const e in c) {
            const t = c[e];
            void 0 !== o[e] && O(t) && (t.set(o[e], !1), os(l) && l.add(e))
          }
        }
        scrapeMotionValuesFromProps(e, t) {
          return {}
        }
        mount(e) {
          this.current = e, zi.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach(((e, t) => this.bindToMotionValue(t, e))), ji.current || function() {
            if (ji.current = !0, x.j)
              if (window.matchMedia) {
                const e = window.matchMedia("(prefers-reduced-motion)"),
                  t = () => Bi.current = e.matches;
                e.addListener(t), t()
              } else Bi.current = !1
          }(), this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || Bi.current), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext)
        }
        unmount() {
          zi.delete(this.current), this.projection && this.projection.unmount(), (0, ve.Pn)(this.notifyUpdate), (0, ve.Pn)(this.render), this.valueSubscriptions.forEach((e => e())), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
          for (const e in this.events) this.events[e].clear();
          for (const e in this.features) this.features[e].unmount();
          this.current = null
        }
        bindToMotionValue(e, t) {
          const s = k.has(e),
            n = t.on("change", (t => {
              this.latestValues[e] = t, this.props.onUpdate && ve.Wi.update(this.notifyUpdate, !1, !0), s && this.projection && (this.projection.isTransformDirty = !0)
            })),
            i = t.on("renderRequest", this.scheduleRender);
          this.valueSubscriptions.set(e, (() => {
            n(), i()
          }))
        }
        sortNodePosition(e) {
          return this.current && this.sortInstanceNodePosition && this.type === e.type ? this.sortInstanceNodePosition(this.current, e.current) : 0
        }
        loadFeatures({
          children: e,
          ...t
        }, s, n, i) {
          let r, o;
          for (let e = 0; e < $i; e++) {
            const s = Fi[e],
              {
                isEnabled: n,
                Feature: i,
                ProjectionNode: a,
                MeasureLayout: l
              } = y[s];
            a && (r = a), n(t) && (!this.features[s] && i && (this.features[s] = new i(this)), l && (o = l))
          }
          if (!this.projection && r) {
            this.projection = new r(this.latestValues, this.parent && this.parent.projection);
            const {
              layoutId: e,
              layout: s,
              drag: n,
              dragConstraints: o,
              layoutScroll: a,
              layoutRoot: l
            } = t;
            this.projection.setOptions({
              layoutId: e,
              layout: s,
              alwaysMeasureLayout: Boolean(n) || o && c(o),
              visualElement: this,
              scheduleRender: () => this.scheduleRender(),
              animationType: "string" == typeof s ? s : "both",
              initialPromotionConfig: i,
              layoutScroll: a,
              layoutRoot: l
            })
          }
          return o
        }
        updateFeatures() {
          for (const e in this.features) {
            const t = this.features[e];
            t.isMounted ? t.update() : (t.mount(), t.isMounted = !0)
          }
        }
        triggerBuild() {
          this.build(this.renderState, this.latestValues, this.options, this.props)
        }
        measureViewportBox() {
          return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Xs()
        }
        getStaticValue(e) {
          return this.latestValues[e]
        }
        setStaticValue(e, t) {
          this.latestValues[e] = t
        }
        makeTargetAnimatable(e, t = !0) {
          return this.makeTargetAnimatableFromInstance(e, this.props, t)
        }
        update(e, t) {
          (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = e, this.prevPresenceContext = this.presenceContext, this.presenceContext = t;
          for (let t = 0; t < _i.length; t++) {
            const s = _i[t];
            this.propEventSubscriptions[s] && (this.propEventSubscriptions[s](), delete this.propEventSubscriptions[s]);
            const n = e["on" + s];
            n && (this.propEventSubscriptions[s] = this.on(s, n))
          }
          this.prevMotionValues = function(e, t, s) {
            const {
              willChange: n
            } = t;
            for (const i in t) {
              const r = t[i],
                o = s[i];
              if (O(r)) e.addValue(i, r), os(n) && n.add(i);
              else if (O(o)) e.addValue(i, (0, ls.BX)(r, {
                owner: e
              })), os(n) && n.remove(i);
              else if (o !== r)
                if (e.hasValue(i)) {
                  const t = e.getValue(i);
                  !t.hasAnimated && t.set(r)
                } else {
                  const t = e.getStaticValue(i);
                  e.addValue(i, (0, ls.BX)(void 0 !== t ? t : r, {
                    owner: e
                  }))
                }
            }
            for (const n in s) void 0 === t[n] && e.removeValue(n);
            return t
          }(this, this.scrapeMotionValuesFromProps(e, this.prevProps), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue()
        }
        getProps() {
          return this.props
        }
        getVariant(e) {
          return this.props.variants ? this.props.variants[e] : void 0
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
        getVariantContext(e = !1) {
          if (e) return this.parent ? this.parent.getVariantContext() : void 0;
          if (!this.isControllingVariants) {
            const e = this.parent && this.parent.getVariantContext() || {};
            return void 0 !== this.props.initial && (e.initial = this.props.initial), e
          }
          const t = {};
          for (let e = 0; e < Ni; e++) {
            const s = h[e],
              n = this.props[s];
            (d(n) || !1 === n) && (t[s] = n)
          }
          return t
        }
        addVariantChild(e) {
          const t = this.getClosestVariantNode();
          if (t) return t.variantChildren && t.variantChildren.add(e), () => t.variantChildren.delete(e)
        }
        addValue(e, t) {
          t !== this.values.get(e) && (this.removeValue(e), this.bindToMotionValue(e, t)), this.values.set(e, t), this.latestValues[e] = t.get()
        }
        removeValue(e) {
          this.values.delete(e);
          const t = this.valueSubscriptions.get(e);
          t && (t(), this.valueSubscriptions.delete(e)), delete this.latestValues[e], this.removeValueFromRenderState(e, this.renderState)
        }
        hasValue(e) {
          return this.values.has(e)
        }
        getValue(e, t) {
          if (this.props.values && this.props.values[e]) return this.props.values[e];
          let s = this.values.get(e);
          return void 0 === s && void 0 !== t && (s = (0, ls.BX)(t, {
            owner: this
          }), this.addValue(e, s)), s
        }
        readValue(e) {
          var t;
          return void 0 === this.latestValues[e] && this.current ? null !== (t = this.getBaseTargetFromProps(this.props, e)) && void 0 !== t ? t : this.readValueFromInstance(this.current, e, this.options) : this.latestValues[e]
        }
        setBaseTarget(e, t) {
          this.baseTarget[e] = t
        }
        getBaseTarget(e) {
          var t;
          const {
            initial: s
          } = this.props, n = "string" == typeof s || "object" == typeof s ? null === (t = ce(this.props, s)) || void 0 === t ? void 0 : t[e] : void 0;
          if (s && void 0 !== n) return n;
          const i = this.getBaseTargetFromProps(this.props, e);
          return void 0 === i || O(i) ? void 0 !== this.initialValues[e] && void 0 === n ? void 0 : this.baseTarget[e] : i
        }
        on(e, t) {
          return this.events[e] || (this.events[e] = new Pn.L), this.events[e].add(t)
        }
        notify(e, ...t) {
          this.events[e] && this.events[e].notify(...t)
        }
      }
      class Gi extends Wi {
        sortInstanceNodePosition(e, t) {
          return 2 & e.compareDocumentPosition(t) ? 1 : -1
        }
        getBaseTargetFromProps(e, t) {
          return e.style ? e.style[t] : void 0
        }
        removeValueFromRenderState(e, {
          vars: t,
          style: s
        }) {
          delete t[e], delete s[e]
        }
        makeTargetAnimatableFromInstance({
          transition: e,
          transitionEnd: t,
          ...s
        }, {
          transformValues: n
        }, i) {
          let r = function(e, t, s) {
            const n = {};
            for (const i in e) {
              const e = ms(i, t);
              if (void 0 !== e) n[i] = e;
              else {
                const e = s.getValue(i);
                e && (n[i] = e.get())
              }
            }
            return n
          }(s, e || {}, this);
          if (n && (t && (t = n(t)), s && (s = n(s)), r && (r = n(r))), i) {
            ! function(e, t, s) {
              var n, i;
              const r = Object.keys(t).filter((t => !e.hasValue(t))),
                o = r.length;
              var a;
              if (o)
                for (let l = 0; l < o; l++) {
                  const o = r[l],
                    c = t[o];
                  let d = null;
                  Array.isArray(c) && (d = c[0]), null === d && (d = null !== (i = null !== (n = s[o]) && void 0 !== n ? n : e.readValue(o)) && void 0 !== i ? i : t[o]), null != d && ("string" == typeof d && (as(d) || ss(d)) ? d = parseFloat(d) : (a = d, !ps.find(cs(a)) && Ht.P.test(c) && (d = ts(o, c))), e.addValue(o, (0, ls.BX)(d, {
                    owner: e
                  })), void 0 === s[o] && (s[o] = d), null !== d && e.setBaseTarget(o, d))
                }
            }(this, s, r);
            const e = ((e, t, s, n) => {
              const i = function(e, {
                ...t
              }, s) {
                const n = e.current;
                if (!(n instanceof Element)) return {
                  target: t,
                  transitionEnd: s
                };
                s && (s = {
                  ...s
                }), e.values.forEach((e => {
                  const t = e.get();
                  if (!(0, R.tm)(t)) return;
                  const s = Ci(t, n);
                  s && e.set(s)
                }));
                for (const e in t) {
                  const i = t[e];
                  if (!(0, R.tm)(i)) continue;
                  const r = Ci(i, n);
                  r && (t[e] = r, s || (s = {}), void 0 === s[e] && (s[e] = i))
                }
                return {
                  target: t,
                  transitionEnd: s
                }
              }(e, t, n);
              return Ri(e, t = i.target, s, n = i.transitionEnd)
            })(this, s, r, t);
            t = e.transitionEnd, s = e.target
          }
          return {
            transition: e,
            transitionEnd: t,
            ...s
          }
        }
      }
      class Hi extends Gi {
        readValueFromInstance(e, t) {
          if (k.has(t)) {
            const e = es(t);
            return e && e.default || 0
          } {
            const n = (s = e, window.getComputedStyle(s)),
              i = ((0, R.f9)(t) ? n.getPropertyValue(t) : n[t]) || 0;
            return "string" == typeof i ? i.trim() : i
          }
          var s
        }
        measureInstanceViewportBox(e, {
          transformPagePoint: t
        }) {
          return hn(e, t)
        }
        build(e, t, s, n) {
          _(e, t, s, n.transformTemplate)
        }
        scrapeMotionValuesFromProps(e, t) {
          return ae(e, t)
        }
        handleChildMotionValue() {
          this.childSubscription && (this.childSubscription(), delete this.childSubscription);
          const {
            children: e
          } = this.props;
          O(e) && (this.childSubscription = e.on("change", (e => {
            this.current && (this.current.textContent = `${e}`)
          })))
        }
        renderInstance(e, t, s, n) {
          ie(e, t, s, n)
        }
      }
      class qi extends Gi {
        constructor() {
          super(...arguments), this.isSVGTag = !1
        }
        getBaseTargetFromProps(e, t) {
          return e[t]
        }
        readValueFromInstance(e, t) {
          if (k.has(t)) {
            const e = es(t);
            return e && e.default || 0
          }
          return t = re.has(t) ? t : ne(t), e.getAttribute(t)
        }
        measureInstanceViewportBox() {
          return Xs()
        }
        scrapeMotionValuesFromProps(e, t) {
          return le(e, t)
        }
        build(e, t, s, n) {
          J(e, t, s, this.isSVGTag, n.transformTemplate)
        }
        renderInstance(e, t, s, n) {
          oe(e, t, 0, n)
        }
        mount(e) {
          this.isSVGTag = ee(e.tagName), super.mount(e)
        }
      }
      const Ui = (e, t) => M(e) ? new qi(t, {
          enableHardwareAcceleration: !1
        }) : new Hi(t, {
          enableHardwareAcceleration: !0
        }),
        Xi = {
          ...Es,
          ..._e,
          ...Ei,
          layout: {
            ProjectionNode: Ti,
            MeasureLayout: Tn
          }
        },
        Yi = P(((e, t) => function(e, {
          forwardMotionProps: t = !1
        }, s, n) {
          return {
            ...M(e) ? ye : xe,
            preloadedFeatures: s,
            useRender: se(t),
            createVisualElement: n,
            Component: e
          }
        }(e, t, Xi, Ui)))
    },
    8147: (e, t, s) => {
      s.d(t, {
        Xp: () => o,
        f9: () => i,
        tm: () => r
      });
      const n = e => t => "string" == typeof t && t.startsWith(e),
        i = n("--"),
        r = n("var(--"),
        o = /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g
    },
    8082: (e, t, s) => {
      function n(e, t) {
        -1 === e.indexOf(t) && e.push(t)
      }

      function i(e, t) {
        const s = e.indexOf(t);
        s > -1 && e.splice(s, 1)
      }
      s.d(t, {
        cl: () => i,
        y4: () => n
      })
    },
    9310: (e, t, s) => {
      s.d(t, {
        u: () => n
      });
      const n = (e, t, s) => Math.min(Math.max(s, e), t)
    },
    5648: (e, t, s) => {
      s.d(t, {
        K: () => i,
        k: () => r
      });
      var n = s(9853);
      let i = n.Z,
        r = n.Z
    },
    7386: (e, t, s) => {
      s.d(t, {
        s: () => P
      });
      var n = s(5648),
        i = s(3526),
        r = s(9310),
        o = s(9690);

      function a(e, t, s) {
        return s < 0 && (s += 1), s > 1 && (s -= 1), s < 1 / 6 ? e + 6 * (t - e) * s : s < .5 ? t : s < 2 / 3 ? e + (t - e) * (2 / 3 - s) * 6 : e
      }
      var l = s(7085),
        c = s(3969),
        d = s(9156);
      const u = (e, t, s) => {
          const n = e * e;
          return Math.sqrt(Math.max(0, s * (t * t - n) + n))
        },
        p = [l.$, c.m, d.J];

      function h(e) {
        const t = (s = e, p.find((e => e.test(s))));
        var s;
        (0, n.k)(Boolean(t), `'${e}' is not an animatable color. Use the equivalent color code instead.`);
        let i = t.parse(e);
        return t === d.J && (i = function({
          hue: e,
          saturation: t,
          lightness: s,
          alpha: n
        }) {
          e /= 360, s /= 100;
          let i = 0,
            r = 0,
            o = 0;
          if (t /= 100) {
            const n = s < .5 ? s * (1 + t) : s + t - s * t,
              l = 2 * s - n;
            i = a(l, n, e + 1 / 3), r = a(l, n, e), o = a(l, n, e - 1 / 3)
          } else i = r = o = s;
          return {
            red: Math.round(255 * i),
            green: Math.round(255 * r),
            blue: Math.round(255 * o),
            alpha: n
          }
        }(i)), i
      }
      const m = (e, t) => {
        const s = h(e),
          n = h(t),
          i = {
            ...s
          };
        return e => (i.red = u(s.red, n.red, e), i.green = u(s.green, n.green, e), i.blue = u(s.blue, n.blue, e), i.alpha = (0, o.C)(s.alpha, n.alpha, e), c.m.transform(i))
      };
      var f = s(5267),
        g = s(7909);
      const v = (e, t) => s => `${s>0?t:e}`;

      function y(e, t) {
        return "number" == typeof e ? s => (0, o.C)(e, t, s) : i.$.test(e) ? m(e, t) : e.startsWith("var(") ? v(e, t) : w(e, t)
      }
      const x = (e, t) => {
          const s = [...e],
            n = s.length,
            i = e.map(((e, s) => y(e, t[s])));
          return e => {
            for (let t = 0; t < n; t++) s[t] = i[t](e);
            return s
          }
        },
        b = (e, t) => {
          const s = {
              ...e,
              ...t
            },
            n = {};
          for (const i in s) void 0 !== e[i] && void 0 !== t[i] && (n[i] = y(e[i], t[i]));
          return e => {
            for (const t in n) s[t] = n[t](e);
            return s
          }
        },
        w = (e, t) => {
          const s = g.P.createTransformer(t),
            i = (0, g.V)(e),
            r = (0, g.V)(t);
          return i.numVars === r.numVars && i.numColors === r.numColors && i.numNumbers >= r.numNumbers ? (0, f.z)(x(i.values, r.values), s) : ((0, n.K)(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), v(e, t))
        };
      var S = s(9486),
        T = s(9853);
      const E = (e, t) => s => (0, o.C)(e, t, s);

      function P(e, t, {
        clamp: s = !0,
        ease: o,
        mixer: a
      } = {}) {
        const l = e.length;
        if ((0, n.k)(l === t.length, "Both input and output ranges must be the same length"), 1 === l) return () => t[0];
        e[0] > e[l - 1] && (e = [...e].reverse(), t = [...t].reverse());
        const c = function(e, t, s) {
            const n = [],
              r = s || ("number" == typeof(o = e[0]) ? E : "string" == typeof o ? i.$.test(o) ? m : w : Array.isArray(o) ? x : "object" == typeof o ? b : E);
            var o;
            const a = e.length - 1;
            for (let s = 0; s < a; s++) {
              let i = r(e[s], e[s + 1]);
              if (t) {
                const e = Array.isArray(t) ? t[s] || T.Z : t;
                i = (0, f.z)(e, i)
              }
              n.push(i)
            }
            return n
          }(t, o, a),
          d = c.length,
          u = t => {
            let s = 0;
            if (d > 1)
              for (; s < e.length - 2 && !(t < e[s + 1]); s++);
            const n = (0, S.Y)(e[s], e[s + 1], t);
            return c[s](n)
          };
        return s ? t => u((0, r.u)(e[0], e[l - 1], t)) : u
      }
    },
    6743: (e, t, s) => {
      s.d(t, {
        j: () => n
      });
      const n = "undefined" != typeof document
    },
    9690: (e, t, s) => {
      s.d(t, {
        C: () => n
      });
      const n = (e, t, s) => -s * e + s * t + e
    },
    9853: (e, t, s) => {
      s.d(t, {
        Z: () => n
      });
      const n = e => e
    },
    2357: (e, t, s) => {
      s.d(t, {
        Y: () => r
      });
      var n = s(9690),
        i = s(9486);

      function r(e) {
        const t = [0];
        return function(e, t) {
          const s = e[e.length - 1];
          for (let r = 1; r <= t; r++) {
            const o = (0, i.Y)(0, t, r);
            e.push((0, n.C)(s, 1, o))
          }
        }(t, e.length - 1), t
      }
    },
    5267: (e, t, s) => {
      s.d(t, {
        z: () => i
      });
      const n = (e, t) => s => t(e(s)),
        i = (...e) => e.reduce(n)
    },
    9486: (e, t, s) => {
      s.d(t, {
        Y: () => n
      });
      const n = (e, t, s) => {
        const n = t - e;
        return 0 === n ? 1 : (s - e) / n
      }
    },
    561: (e, t, s) => {
      s.d(t, {
        L: () => i
      });
      var n = s(8082);
      class i {
        constructor() {
          this.subscriptions = []
        }
        add(e) {
          return (0, n.y4)(this.subscriptions, e), () => (0, n.cl)(this.subscriptions, e)
        }
        notify(e, t, s) {
          const n = this.subscriptions.length;
          if (n)
            if (1 === n) this.subscriptions[0](e, t, s);
            else
              for (let i = 0; i < n; i++) {
                const n = this.subscriptions[i];
                n && n(e, t, s)
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
    371: (e, t, s) => {
      s.d(t, {
        h: () => i
      });
      var n = s(279);

      function i(e) {
        const t = (0, n.useRef)(null);
        return null === t.current && (t.current = e()), t.current
      }
    },
    9502: (e, t, s) => {
      s.d(t, {
        L: () => i
      });
      var n = s(279);
      const i = s(6743).j ? n.useLayoutEffect : n.useEffect
    },
    6538: (e, t, s) => {
      function n(e, t) {
        return t ? e * (1e3 / t) : 0
      }
      s.d(t, {
        R: () => n
      })
    },
    1963: (e, t, s) => {
      s.d(t, {
        BX: () => l
      });
      var n = s(561),
        i = s(6538),
        r = s(8449);
      const o = {
        current: void 0
      };
      class a {
        constructor(e, t = {}) {
          var s;
          this.version = "10.16.4", this.timeDelta = 0, this.lastUpdated = 0, this.canTrackVelocity = !1, this.events = {}, this.updateAndNotify = (e, t = !0) => {
            this.prev = this.current, this.current = e;
            const {
              delta: s,
              timestamp: n
            } = r.frameData;
            this.lastUpdated !== n && (this.timeDelta = s, this.lastUpdated = n, r.Wi.postRender(this.scheduleVelocityCheck)), this.prev !== this.current && this.events.change && this.events.change.notify(this.current), this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()), t && this.events.renderRequest && this.events.renderRequest.notify(this.current)
          }, this.scheduleVelocityCheck = () => r.Wi.postRender(this.velocityCheck), this.velocityCheck = ({
            timestamp: e
          }) => {
            e !== this.lastUpdated && (this.prev = this.current, this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()))
          }, this.hasAnimated = !1, this.prev = this.current = e, this.canTrackVelocity = (s = this.current, !isNaN(parseFloat(s))), this.owner = t.owner
        }
        onChange(e) {
          return this.on("change", e)
        }
        on(e, t) {
          this.events[e] || (this.events[e] = new n.L);
          const s = this.events[e].add(t);
          return "change" === e ? () => {
            s(), r.Wi.read((() => {
              this.events.change.getSize() || this.stop()
            }))
          } : s
        }
        clearListeners() {
          for (const e in this.events) this.events[e].clear()
        }
        attach(e, t) {
          this.passiveEffect = e, this.stopPassiveEffect = t
        }
        set(e, t = !0) {
          t && this.passiveEffect ? this.passiveEffect(e, this.updateAndNotify) : this.updateAndNotify(e, t)
        }
        setWithVelocity(e, t, s) {
          this.set(t), this.prev = e, this.timeDelta = s
        }
        jump(e) {
          this.updateAndNotify(e), this.prev = e, this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
        }
        get() {
          return o.current && o.current.push(this), this.current
        }
        getPrevious() {
          return this.prev
        }
        getVelocity() {
          return this.canTrackVelocity ? (0, i.R)(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0
        }
        start(e) {
          return this.stop(), new Promise((t => {
            this.hasAnimated = !0, this.animation = e(t), this.events.animationStart && this.events.animationStart.notify()
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

      function l(e, t) {
        return new a(e, t)
      }
    },
    7085: (e, t, s) => {
      s.d(t, {
        $: () => i
      });
      var n = s(3969);
      const i = {
        test: (0, s(5474).i)("#"),
        parse: function(e) {
          let t = "",
            s = "",
            n = "",
            i = "";
          return e.length > 5 ? (t = e.substring(1, 3), s = e.substring(3, 5), n = e.substring(5, 7), i = e.substring(7, 9)) : (t = e.substring(1, 2), s = e.substring(2, 3), n = e.substring(3, 4), i = e.substring(4, 5), t += t, s += s, n += n, i += i), {
            red: parseInt(t, 16),
            green: parseInt(s, 16),
            blue: parseInt(n, 16),
            alpha: i ? parseInt(i, 16) / 255 : 1
          }
        },
        transform: n.m.transform
      }
    },
    9156: (e, t, s) => {
      s.d(t, {
        J: () => a
      });
      var n = s(8937),
        i = s(9985),
        r = s(8016),
        o = s(5474);
      const a = {
        test: (0, o.i)("hsl", "hue"),
        parse: (0, o.d)("hue", "saturation", "lightness"),
        transform: ({
          hue: e,
          saturation: t,
          lightness: s,
          alpha: o = 1
        }) => "hsla(" + Math.round(e) + ", " + i.aQ.transform((0, r.Nw)(t)) + ", " + i.aQ.transform((0, r.Nw)(s)) + ", " + (0, r.Nw)(n.Fq.transform(o)) + ")"
      }
    },
    3526: (e, t, s) => {
      s.d(t, {
        $: () => a
      });
      var n = s(8016),
        i = s(7085),
        r = s(9156),
        o = s(3969);
      const a = {
        test: e => o.m.test(e) || i.$.test(e) || r.J.test(e),
        parse: e => o.m.test(e) ? o.m.parse(e) : r.J.test(e) ? r.J.parse(e) : i.$.parse(e),
        transform: e => (0, n.HD)(e) ? e : e.hasOwnProperty("red") ? o.m.transform(e) : r.J.transform(e)
      }
    },
    3969: (e, t, s) => {
      s.d(t, {
        m: () => l
      });
      var n = s(9310),
        i = s(8937),
        r = s(8016),
        o = s(5474);
      const a = {
          ...i.Rx,
          transform: e => Math.round((e => (0, n.u)(0, 255, e))(e))
        },
        l = {
          test: (0, o.i)("rgb", "red"),
          parse: (0, o.d)("red", "green", "blue"),
          transform: ({
            red: e,
            green: t,
            blue: s,
            alpha: n = 1
          }) => "rgba(" + a.transform(e) + ", " + a.transform(t) + ", " + a.transform(s) + ", " + (0, r.Nw)(i.Fq.transform(n)) + ")"
        }
    },
    5474: (e, t, s) => {
      s.d(t, {
        d: () => r,
        i: () => i
      });
      var n = s(8016);
      const i = (e, t) => s => Boolean((0, n.HD)(s) && n.mj.test(s) && s.startsWith(e) || t && Object.prototype.hasOwnProperty.call(s, t)),
        r = (e, t, s) => i => {
          if (!(0, n.HD)(i)) return i;
          const [r, o, a, l] = i.match(n.KP);
          return {
            [e]: parseFloat(r),
            [t]: parseFloat(o),
            [s]: parseFloat(a),
            alpha: void 0 !== l ? parseFloat(l) : 1
          }
        }
    },
    7909: (e, t, s) => {
      s.d(t, {
        P: () => g,
        V: () => p
      });
      var n = s(8147),
        i = s(9853),
        r = s(3526),
        o = s(8937),
        a = s(8016);
      const l = {
          regex: n.Xp,
          countKey: "Vars",
          token: "${v}",
          parse: i.Z
        },
        c = {
          regex: a.dA,
          countKey: "Colors",
          token: "${c}",
          parse: r.$.parse
        },
        d = {
          regex: a.KP,
          countKey: "Numbers",
          token: "${n}",
          parse: o.Rx.parse
        };

      function u(e, {
        regex: t,
        countKey: s,
        token: n,
        parse: i
      }) {
        const r = e.tokenised.match(t);
        r && (e["num" + s] = r.length, e.tokenised = e.tokenised.replace(t, n), e.values.push(...r.map(i)))
      }

      function p(e) {
        const t = e.toString(),
          s = {
            value: t,
            tokenised: t,
            values: [],
            numVars: 0,
            numColors: 0,
            numNumbers: 0
          };
        return s.value.includes("var(--") && u(s, l), u(s, c), u(s, d), s
      }

      function h(e) {
        return p(e).values
      }

      function m(e) {
        const {
          values: t,
          numColors: s,
          numVars: n,
          tokenised: i
        } = p(e), o = t.length;
        return e => {
          let t = i;
          for (let i = 0; i < o; i++) t = i < n ? t.replace(l.token, e[i]) : i < n + s ? t.replace(c.token, r.$.transform(e[i])) : t.replace(d.token, (0, a.Nw)(e[i]));
          return t
        }
      }
      const f = e => "number" == typeof e ? 0 : e,
        g = {
          test: function(e) {
            var t, s;
            return isNaN(e) && (0, a.HD)(e) && ((null === (t = e.match(a.KP)) || void 0 === t ? void 0 : t.length) || 0) + ((null === (s = e.match(a.dA)) || void 0 === s ? void 0 : s.length) || 0) > 0
          },
          parse: h,
          createTransformer: m,
          getAnimatableNone: function(e) {
            const t = h(e);
            return m(e)(t.map(f))
          }
        }
    },
    8937: (e, t, s) => {
      s.d(t, {
        Fq: () => r,
        Rx: () => i,
        bA: () => o
      });
      var n = s(9310);
      const i = {
          test: e => "number" == typeof e,
          parse: parseFloat,
          transform: e => e
        },
        r = {
          ...i,
          transform: e => (0, n.u)(0, 1, e)
        },
        o = {
          ...i,
          default: 1
        }
    },
    9985: (e, t, s) => {
      s.d(t, {
        $C: () => d,
        RW: () => r,
        aQ: () => o,
        px: () => a,
        vh: () => l,
        vw: () => c
      });
      var n = s(8016);
      const i = e => ({
          test: t => (0, n.HD)(t) && t.endsWith(e) && 1 === t.split(" ").length,
          parse: parseFloat,
          transform: t => `${t}${e}`
        }),
        r = i("deg"),
        o = i("%"),
        a = i("px"),
        l = i("vh"),
        c = i("vw"),
        d = {
          ...o,
          parse: e => o.parse(e) / 100,
          transform: e => o.transform(100 * e)
        }
    },
    8016: (e, t, s) => {
      s.d(t, {
        HD: () => a,
        KP: () => i,
        Nw: () => n,
        dA: () => r,
        mj: () => o
      });
      const n = e => Math.round(1e5 * e) / 1e5,
        i = /(-)?([\d]*\.?[\d])+/g,
        r = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
        o = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;

      function a(e) {
        return "string" == typeof e
      }
    },
    1210: (e, t, s) => {
      s.d(t, {
        v: () => z
      });
      var n = s(1963),
        i = s(371),
        r = s(279),
        o = s(5648);
      const a = new WeakMap;
      let l;

      function c({
        target: e,
        contentRect: t,
        borderBoxSize: s
      }) {
        var n;
        null === (n = a.get(e)) || void 0 === n || n.forEach((n => {
          n({
            target: e,
            contentSize: t,
            get size() {
              return function(e, t) {
                if (t) {
                  const {
                    inlineSize: e,
                    blockSize: s
                  } = t[0];
                  return {
                    width: e,
                    height: s
                  }
                }
                return e instanceof SVGElement && "getBBox" in e ? e.getBBox() : {
                  width: e.offsetWidth,
                  height: e.offsetHeight
                }
              }(e, s)
            }
          })
        }))
      }

      function d(e) {
        e.forEach(c)
      }

      function u(e, t) {
        l || "undefined" != typeof ResizeObserver && (l = new ResizeObserver(d));
        const s = function(e, t, s) {
          if ("string" == typeof e) {
            let t = document;
            e = t.querySelectorAll(e)
          } else e instanceof Element && (e = [e]);
          return Array.from(e || [])
        }(e);
        return s.forEach((e => {
          let s = a.get(e);
          s || (s = new Set, a.set(e, s)), s.add(t), null == l || l.observe(e)
        })), () => {
          s.forEach((e => {
            const s = a.get(e);
            null == s || s.delete(t), (null == s ? void 0 : s.size) || null == l || l.unobserve(e)
          }))
        }
      }
      const p = new Set;
      let h;
      var m = s(9486),
        f = s(6538);
      const g = 50,
        v = () => ({
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
        y = {
          x: {
            length: "Width",
            position: "Left"
          },
          y: {
            length: "Height",
            position: "Top"
          }
        };

      function x(e, t, s, n) {
        const i = s[t],
          {
            length: r,
            position: o
          } = y[t],
          a = i.current,
          l = s.time;
        i.current = e["scroll" + o], i.scrollLength = e["scroll" + r] - e["client" + r], i.offset.length = 0, i.offset[0] = 0, i.offset[1] = i.scrollLength, i.progress = (0, m.Y)(0, i.scrollLength, i.current);
        const c = n - l;
        i.velocity = c > g ? 0 : (0, f.R)(i.current - a, c)
      }
      const b = {
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
        w = {
          start: 0,
          center: .5,
          end: 1
        };

      function S(e, t, s = 0) {
        let n = 0;
        if (void 0 !== w[e] && (e = w[e]), "string" == typeof e) {
          const t = parseFloat(e);
          e.endsWith("px") ? n = t : e.endsWith("%") ? e = t / 100 : e.endsWith("vw") ? n = t / 100 * document.documentElement.clientWidth : e.endsWith("vh") ? n = t / 100 * document.documentElement.clientHeight : e = t
        }
        return "number" == typeof e && (n = t * e), s + n
      }
      const T = [0, 0];

      function E(e, t, s, n) {
        let i = Array.isArray(e) ? e : T,
          r = 0,
          o = 0;
        return "number" == typeof e ? i = [e, e] : "string" == typeof e && (i = (e = e.trim()).includes(" ") ? e.split(" ") : [e, w[e] ? e : "0"]), r = S(i[0], s, n), o = S(i[1], t), r - o
      }
      var P = s(7386),
        C = s(2357);
      const M = {
        x: 0,
        y: 0
      };

      function A(e, t, s, n = {}) {
        return {
          measure: () => function(e, t = e, s) {
            if (s.x.targetOffset = 0, s.y.targetOffset = 0, t !== e) {
              let n = t;
              for (; n && n !== e;) s.x.targetOffset += n.offsetLeft, s.y.targetOffset += n.offsetTop, n = n.offsetParent
            }
            s.x.targetLength = t === e ? t.scrollWidth : t.clientWidth, s.y.targetLength = t === e ? t.scrollHeight : t.clientHeight, s.x.containerLength = e.clientWidth, s.y.containerLength = e.clientHeight
          }(e, n.target, s),
          update: t => {
            ! function(e, t, s) {
              x(e, "x", t, s), x(e, "y", t, s), t.time = s
            }(e, s, t), (n.offset || n.target) && function(e, t, s) {
              let {
                offset: n = b.All
              } = s;
              const {
                target: i = e,
                axis: r = "y"
              } = s, o = "y" === r ? "height" : "width", a = i !== e ? function(e, t) {
                const s = {
                  x: 0,
                  y: 0
                };
                let n = e;
                for (; n && n !== t;)
                  if (n instanceof HTMLElement) s.x += n.offsetLeft, s.y += n.offsetTop, n = n.offsetParent;
                  else if ("svg" === n.tagName) {
                  const e = n.getBoundingClientRect();
                  n = n.parentElement;
                  const t = n.getBoundingClientRect();
                  s.x += e.left - t.left, s.y += e.top - t.top
                } else {
                  if (!(n instanceof SVGGraphicsElement)) break; {
                    const {
                      x: e,
                      y: t
                    } = n.getBBox();
                    s.x += e, s.y += t;
                    let i = null,
                      r = n.parentNode;
                    for (; !i;) "svg" === r.tagName && (i = r), r = n.parentNode;
                    n = i
                  }
                }
                return s
              }(i, e) : M, l = i === e ? {
                width: e.scrollWidth,
                height: e.scrollHeight
              } : function(e) {
                return "getBBox" in e && "svg" !== e.tagName ? e.getBBox() : {
                  width: e.clientWidth,
                  height: e.clientHeight
                }
              }(i), c = {
                width: e.clientWidth,
                height: e.clientHeight
              };
              t[r].offset.length = 0;
              let d = !t[r].interpolate;
              const u = n.length;
              for (let e = 0; e < u; e++) {
                const s = E(n[e], c[o], l[o], a[r]);
                d || s === t[r].interpolatorOffsets[e] || (d = !0), t[r].offset[e] = s
              }
              d && (t[r].interpolate = (0, P.s)(t[r].offset, (0, C.Y)(n)), t[r].interpolatorOffsets = [...t[r].offset]), t[r].progress = t[r].interpolate(t[r].current)
            }(e, s, n)
          },
          notify: () => t(s)
        }
      }
      var L = s(8449);
      const k = new WeakMap,
        D = new WeakMap,
        O = new WeakMap,
        V = e => e === document.documentElement ? window : e;

      function I(e, {
        container: t = document.documentElement,
        ...s
      } = {}) {
        let n = O.get(t);
        n || (n = new Set, O.set(t, n));
        const i = v(),
          r = A(t, e, i, s);
        if (n.add(r), !k.has(t)) {
          const e = () => {
              for (const e of n) e.measure()
            },
            s = () => {
              for (const e of n) e.update(L.frameData.timestamp)
            },
            i = () => {
              for (const e of n) e.notify()
            },
            r = () => {
              L.Wi.read(e, !1, !0), L.Wi.update(s, !1, !0), L.Wi.update(i, !1, !0)
            };
          k.set(t, r);
          const c = V(t);
          window.addEventListener("resize", r, {
            passive: !0
          }), t !== document.documentElement && D.set(t, (l = r, "function" == typeof(a = t) ? (o = a, p.add(o), h || (h = () => {
            const e = {
                width: window.innerWidth,
                height: window.innerHeight
              },
              t = {
                target: window,
                size: e,
                contentSize: e
              };
            p.forEach((e => e(t)))
          }, window.addEventListener("resize", h)), () => {
            p.delete(o), !p.size && h && (h = void 0)
          }) : u(a, l))), c.addEventListener("scroll", r, {
            passive: !0
          })
        }
        var o, a, l;
        const c = k.get(t);
        return L.Wi.read(c, !1, !0), () => {
          var e;
          (0, L.Pn)(c);
          const s = O.get(t);
          if (!s) return;
          if (s.delete(r), s.size) return;
          const n = k.get(t);
          k.delete(t), n && (V(t).removeEventListener("scroll", n), null === (e = D.get(t)) || void 0 === e || e(), window.removeEventListener("resize", n))
        }
      }
      var R = s(9502);

      function B(e, t) {
        (0, o.K)(Boolean(!t || t.current), `You have defined a ${e} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`)
      }
      const j = () => ({
        scrollX: (0, n.BX)(0),
        scrollY: (0, n.BX)(0),
        scrollXProgress: (0, n.BX)(0),
        scrollYProgress: (0, n.BX)(0)
      });

      function z({
        container: e,
        target: t,
        layoutEffect: s = !0,
        ...n
      } = {}) {
        const o = (0, i.h)(j);
        return (s ? R.L : r.useEffect)((() => (B("target", t), B("container", e), I((({
          x: e,
          y: t
        }) => {
          o.scrollX.set(e.current), o.scrollXProgress.set(e.progress), o.scrollY.set(t.current), o.scrollYProgress.set(t.progress)
        }), {
          ...n,
          container: (null == e ? void 0 : e.current) || void 0,
          target: (null == t ? void 0 : t.current) || void 0
        }))), [e, t, JSON.stringify(n.offset)]), o
      }
    },
    9109: (e, t, s) => {
      s.d(t, {
        Rv: () => d,
        W_: () => o,
        tl: () => l,
        o3: () => c
      });
      var n = s(6454),
        i = s(1532);

      function r(e, t, s, n) {
        return e.params.createElements && Object.keys(n).forEach((r => {
          if (!s[r] && !0 === s.auto) {
            let o = (0, i.e)(e.el, `.${n[r]}`)[0];
            o || (o = (0, i.c)("div", n[r]), o.className = n[r], e.el.append(o)), s[r] = o, t[r] = o
          }
        })), s
      }

      function o(e) {
        let {
          swiper: t,
          extendParams: s,
          on: n,
          emit: i
        } = e;
        s({
          navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock",
            navigationDisabledClass: "swiper-navigation-disabled"
          }
        }), t.navigation = {
          nextEl: null,
          prevEl: null
        };
        const o = e => (Array.isArray(e) ? e : [e]).filter((e => !!e));

        function a(e) {
          let s;
          return e && "string" == typeof e && t.isElement && (s = t.el.querySelector(e), s) ? s : (e && ("string" == typeof e && (s = [...document.querySelectorAll(e)]), t.params.uniqueNavElements && "string" == typeof e && s.length > 1 && 1 === t.el.querySelectorAll(e).length && (s = t.el.querySelector(e))), e && !s ? e : s)
        }

        function l(e, s) {
          const n = t.params.navigation;
          (e = o(e)).forEach((e => {
            e && (e.classList[s ? "add" : "remove"](...n.disabledClass.split(" ")), "BUTTON" === e.tagName && (e.disabled = s), t.params.watchOverflow && t.enabled && e.classList[t.isLocked ? "add" : "remove"](n.lockClass))
          }))
        }

        function c() {
          const {
            nextEl: e,
            prevEl: s
          } = t.navigation;
          if (t.params.loop) return l(s, !1), void l(e, !1);
          l(s, t.isBeginning && !t.params.rewind), l(e, t.isEnd && !t.params.rewind)
        }

        function d(e) {
          e.preventDefault(), (!t.isBeginning || t.params.loop || t.params.rewind) && (t.slidePrev(), i("navigationPrev"))
        }

        function u(e) {
          e.preventDefault(), (!t.isEnd || t.params.loop || t.params.rewind) && (t.slideNext(), i("navigationNext"))
        }

        function p() {
          const e = t.params.navigation;
          if (t.params.navigation = r(t, t.originalParams.navigation, t.params.navigation, {
              nextEl: "swiper-button-next",
              prevEl: "swiper-button-prev"
            }), !e.nextEl && !e.prevEl) return;
          let s = a(e.nextEl),
            n = a(e.prevEl);
          Object.assign(t.navigation, {
            nextEl: s,
            prevEl: n
          }), s = o(s), n = o(n);
          const i = (s, n) => {
            s && s.addEventListener("click", "next" === n ? u : d), !t.enabled && s && s.classList.add(...e.lockClass.split(" "))
          };
          s.forEach((e => i(e, "next"))), n.forEach((e => i(e, "prev")))
        }

        function h() {
          let {
            nextEl: e,
            prevEl: s
          } = t.navigation;
          e = o(e), s = o(s);
          const n = (e, s) => {
            e.removeEventListener("click", "next" === s ? u : d), e.classList.remove(...t.params.navigation.disabledClass.split(" "))
          };
          e.forEach((e => n(e, "next"))), s.forEach((e => n(e, "prev")))
        }
        n("init", (() => {
          !1 === t.params.navigation.enabled ? m() : (p(), c())
        })), n("toEdge fromEdge lock unlock", (() => {
          c()
        })), n("destroy", (() => {
          h()
        })), n("enable disable", (() => {
          let {
            nextEl: e,
            prevEl: s
          } = t.navigation;
          e = o(e), s = o(s), t.enabled ? c() : [...e, ...s].filter((e => !!e)).forEach((e => e.classList.add(t.params.navigation.lockClass)))
        })), n("click", ((e, s) => {
          let {
            nextEl: n,
            prevEl: r
          } = t.navigation;
          n = o(n), r = o(r);
          const a = s.target;
          if (t.params.navigation.hideOnClick && !r.includes(a) && !n.includes(a)) {
            if (t.pagination && t.params.pagination && t.params.pagination.clickable && (t.pagination.el === a || t.pagination.el.contains(a))) return;
            let e;
            n.length ? e = n[0].classList.contains(t.params.navigation.hiddenClass) : r.length && (e = r[0].classList.contains(t.params.navigation.hiddenClass)), i(!0 === e ? "navigationShow" : "navigationHide"), [...n, ...r].filter((e => !!e)).forEach((e => e.classList.toggle(t.params.navigation.hiddenClass)))
          }
        }));
        const m = () => {
          t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" ")), h()
        };
        Object.assign(t.navigation, {
          enable: () => {
            t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" ")), p(), c()
          },
          disable: m,
          update: c,
          init: p,
          destroy: h
        })
      }

      function a(e) {
        return void 0 === e && (e = ""), `.${e.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`
      }

      function l(e) {
        let {
          swiper: t,
          extendParams: s,
          on: n,
          emit: o
        } = e;
        const l = "swiper-pagination";
        let c;
        s({
          pagination: {
            el: null,
            bulletElement: "span",
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: "bullets",
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: e => e,
            formatFractionTotal: e => e,
            bulletClass: `${l}-bullet`,
            bulletActiveClass: `${l}-bullet-active`,
            modifierClass: `${l}-`,
            currentClass: `${l}-current`,
            totalClass: `${l}-total`,
            hiddenClass: `${l}-hidden`,
            progressbarFillClass: `${l}-progressbar-fill`,
            progressbarOppositeClass: `${l}-progressbar-opposite`,
            clickableClass: `${l}-clickable`,
            lockClass: `${l}-lock`,
            horizontalClass: `${l}-horizontal`,
            verticalClass: `${l}-vertical`,
            paginationDisabledClass: `${l}-disabled`
          }
        }), t.pagination = {
          el: null,
          bullets: []
        };
        let d = 0;
        const u = e => (Array.isArray(e) ? e : [e]).filter((e => !!e));

        function p() {
          return !t.params.pagination.el || !t.pagination.el || Array.isArray(t.pagination.el) && 0 === t.pagination.el.length
        }

        function h(e, s) {
          const {
            bulletActiveClass: n
          } = t.params.pagination;
          e && (e = e[("prev" === s ? "previous" : "next") + "ElementSibling"]) && (e.classList.add(`${n}-${s}`), (e = e[("prev" === s ? "previous" : "next") + "ElementSibling"]) && e.classList.add(`${n}-${s}-${s}`))
        }

        function m(e) {
          const s = e.target.closest(a(t.params.pagination.bulletClass));
          if (!s) return;
          e.preventDefault();
          const n = (0, i.g)(s) * t.params.slidesPerGroup;
          if (t.params.loop) {
            if (t.realIndex === n) return;
            const e = t.realIndex,
              s = t.getSlideIndexByData(n),
              i = t.getSlideIndexByData(t.realIndex),
              r = n => {
                const i = t.activeIndex;
                t.loopFix({
                  direction: n,
                  activeSlideIndex: s,
                  slideTo: !1
                }), i === t.activeIndex && t.slideToLoop(e, 0, !1, !0)
              };
            if (s > t.slides.length - t.loopedSlides) r(s > i ? "next" : "prev");
            else if (t.params.centeredSlides) {
              const e = "auto" === t.params.slidesPerView ? t.slidesPerViewDynamic() : Math.ceil(parseFloat(t.params.slidesPerView, 10));
              s < Math.floor(e / 2) && r("prev")
            }
            t.slideToLoop(n)
          } else t.slideTo(n)
        }

        function f() {
          const e = t.rtl,
            s = t.params.pagination;
          if (p()) return;
          let n, r, l = t.pagination.el;
          l = u(l);
          const m = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
            f = t.params.loop ? Math.ceil(m / t.params.slidesPerGroup) : t.snapGrid.length;
          if (t.params.loop ? (r = t.previousRealIndex || 0, n = t.params.slidesPerGroup > 1 ? Math.floor(t.realIndex / t.params.slidesPerGroup) : t.realIndex) : void 0 !== t.snapIndex ? (n = t.snapIndex, r = t.previousSnapIndex) : (r = t.previousIndex || 0, n = t.activeIndex || 0), "bullets" === s.type && t.pagination.bullets && t.pagination.bullets.length > 0) {
            const o = t.pagination.bullets;
            let a, u, p;
            if (s.dynamicBullets && (c = (0, i.f)(o[0], t.isHorizontal() ? "width" : "height", !0), l.forEach((e => {
                e.style[t.isHorizontal() ? "width" : "height"] = c * (s.dynamicMainBullets + 4) + "px"
              })), s.dynamicMainBullets > 1 && void 0 !== r && (d += n - (r || 0), d > s.dynamicMainBullets - 1 ? d = s.dynamicMainBullets - 1 : d < 0 && (d = 0)), a = Math.max(n - d, 0), u = a + (Math.min(o.length, s.dynamicMainBullets) - 1), p = (u + a) / 2), o.forEach((e => {
                const t = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((e => `${s.bulletActiveClass}${e}`))].map((e => "string" == typeof e && e.includes(" ") ? e.split(" ") : e)).flat();
                e.classList.remove(...t)
              })), l.length > 1) o.forEach((e => {
              const r = (0, i.g)(e);
              r === n ? e.classList.add(...s.bulletActiveClass.split(" ")) : t.isElement && e.setAttribute("part", "bullet"), s.dynamicBullets && (r >= a && r <= u && e.classList.add(...`${s.bulletActiveClass}-main`.split(" ")), r === a && h(e, "prev"), r === u && h(e, "next"))
            }));
            else {
              const e = o[n];
              if (e && e.classList.add(...s.bulletActiveClass.split(" ")), t.isElement && o.forEach(((e, t) => {
                  e.setAttribute("part", t === n ? "bullet-active" : "bullet")
                })), s.dynamicBullets) {
                const e = o[a],
                  t = o[u];
                for (let e = a; e <= u; e += 1) o[e] && o[e].classList.add(...`${s.bulletActiveClass}-main`.split(" "));
                h(e, "prev"), h(t, "next")
              }
            }
            if (s.dynamicBullets) {
              const n = Math.min(o.length, s.dynamicMainBullets + 4),
                i = (c * n - c) / 2 - p * c,
                r = e ? "right" : "left";
              o.forEach((e => {
                e.style[t.isHorizontal() ? r : "top"] = `${i}px`
              }))
            }
          }
          l.forEach(((e, i) => {
            if ("fraction" === s.type && (e.querySelectorAll(a(s.currentClass)).forEach((e => {
                e.textContent = s.formatFractionCurrent(n + 1)
              })), e.querySelectorAll(a(s.totalClass)).forEach((e => {
                e.textContent = s.formatFractionTotal(f)
              }))), "progressbar" === s.type) {
              let i;
              i = s.progressbarOpposite ? t.isHorizontal() ? "vertical" : "horizontal" : t.isHorizontal() ? "horizontal" : "vertical";
              const r = (n + 1) / f;
              let o = 1,
                l = 1;
              "horizontal" === i ? o = r : l = r, e.querySelectorAll(a(s.progressbarFillClass)).forEach((e => {
                e.style.transform = `translate3d(0,0,0) scaleX(${o}) scaleY(${l})`, e.style.transitionDuration = `${t.params.speed}ms`
              }))
            }
            "custom" === s.type && s.renderCustom ? (e.innerHTML = s.renderCustom(t, n + 1, f), 0 === i && o("paginationRender", e)) : (0 === i && o("paginationRender", e), o("paginationUpdate", e)), t.params.watchOverflow && t.enabled && e.classList[t.isLocked ? "add" : "remove"](s.lockClass)
          }))
        }

        function g() {
          const e = t.params.pagination;
          if (p()) return;
          const s = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length;
          let n = t.pagination.el;
          n = u(n);
          let i = "";
          if ("bullets" === e.type) {
            let n = t.params.loop ? Math.ceil(s / t.params.slidesPerGroup) : t.snapGrid.length;
            t.params.freeMode && t.params.freeMode.enabled && n > s && (n = s);
            for (let s = 0; s < n; s += 1) e.renderBullet ? i += e.renderBullet.call(t, s, e.bulletClass) : i += `<${e.bulletElement} ${t.isElement?'part="bullet"':""} class="${e.bulletClass}"></${e.bulletElement}>`
          }
          "fraction" === e.type && (i = e.renderFraction ? e.renderFraction.call(t, e.currentClass, e.totalClass) : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`), "progressbar" === e.type && (i = e.renderProgressbar ? e.renderProgressbar.call(t, e.progressbarFillClass) : `<span class="${e.progressbarFillClass}"></span>`), t.pagination.bullets = [], n.forEach((s => {
            "custom" !== e.type && (s.innerHTML = i || ""), "bullets" === e.type && t.pagination.bullets.push(...s.querySelectorAll(a(e.bulletClass)))
          })), "custom" !== e.type && o("paginationRender", n[0])
        }

        function v() {
          t.params.pagination = r(t, t.originalParams.pagination, t.params.pagination, {
            el: "swiper-pagination"
          });
          const e = t.params.pagination;
          if (!e.el) return;
          let s;
          "string" == typeof e.el && t.isElement && (s = t.el.querySelector(e.el)), s || "string" != typeof e.el || (s = [...document.querySelectorAll(e.el)]), s || (s = e.el), s && 0 !== s.length && (t.params.uniqueNavElements && "string" == typeof e.el && Array.isArray(s) && s.length > 1 && (s = [...t.el.querySelectorAll(e.el)], s.length > 1 && (s = s.filter((e => (0, i.a)(e, ".swiper")[0] === t.el))[0])), Array.isArray(s) && 1 === s.length && (s = s[0]), Object.assign(t.pagination, {
            el: s
          }), s = u(s), s.forEach((s => {
            "bullets" === e.type && e.clickable && s.classList.add(...(e.clickableClass || "").split(" ")), s.classList.add(e.modifierClass + e.type), s.classList.add(t.isHorizontal() ? e.horizontalClass : e.verticalClass), "bullets" === e.type && e.dynamicBullets && (s.classList.add(`${e.modifierClass}${e.type}-dynamic`), d = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && s.classList.add(e.progressbarOppositeClass), e.clickable && s.addEventListener("click", m), t.enabled || s.classList.add(e.lockClass)
          })))
        }

        function y() {
          const e = t.params.pagination;
          if (p()) return;
          let s = t.pagination.el;
          s && (s = u(s), s.forEach((s => {
            s.classList.remove(e.hiddenClass), s.classList.remove(e.modifierClass + e.type), s.classList.remove(t.isHorizontal() ? e.horizontalClass : e.verticalClass), e.clickable && (s.classList.remove(...(e.clickableClass || "").split(" ")), s.removeEventListener("click", m))
          }))), t.pagination.bullets && t.pagination.bullets.forEach((t => t.classList.remove(...e.bulletActiveClass.split(" "))))
        }
        n("changeDirection", (() => {
          if (!t.pagination || !t.pagination.el) return;
          const e = t.params.pagination;
          let {
            el: s
          } = t.pagination;
          s = u(s), s.forEach((s => {
            s.classList.remove(e.horizontalClass, e.verticalClass), s.classList.add(t.isHorizontal() ? e.horizontalClass : e.verticalClass)
          }))
        })), n("init", (() => {
          !1 === t.params.pagination.enabled ? x() : (v(), g(), f())
        })), n("activeIndexChange", (() => {
          void 0 === t.snapIndex && f()
        })), n("snapIndexChange", (() => {
          f()
        })), n("snapGridLengthChange", (() => {
          g(), f()
        })), n("destroy", (() => {
          y()
        })), n("enable disable", (() => {
          let {
            el: e
          } = t.pagination;
          e && (e = u(e), e.forEach((e => e.classList[t.enabled ? "remove" : "add"](t.params.pagination.lockClass))))
        })), n("lock unlock", (() => {
          f()
        })), n("click", ((e, s) => {
          const n = s.target,
            i = u(t.pagination.el);
          if (t.params.pagination.el && t.params.pagination.hideOnClick && i && i.length > 0 && !n.classList.contains(t.params.pagination.bulletClass)) {
            if (t.navigation && (t.navigation.nextEl && n === t.navigation.nextEl || t.navigation.prevEl && n === t.navigation.prevEl)) return;
            const e = i[0].classList.contains(t.params.pagination.hiddenClass);
            o(!0 === e ? "paginationShow" : "paginationHide"), i.forEach((e => e.classList.toggle(t.params.pagination.hiddenClass)))
          }
        }));
        const x = () => {
          t.el.classList.add(t.params.pagination.paginationDisabledClass);
          let {
            el: e
          } = t.pagination;
          e && (e = u(e), e.forEach((e => e.classList.add(t.params.pagination.paginationDisabledClass)))), y()
        };
        Object.assign(t.pagination, {
          enable: () => {
            t.el.classList.remove(t.params.pagination.paginationDisabledClass);
            let {
              el: e
            } = t.pagination;
            e && (e = u(e), e.forEach((e => e.classList.remove(t.params.pagination.paginationDisabledClass)))), v(), g(), f()
          },
          disable: x,
          render: g,
          update: f,
          init: v,
          destroy: y
        })
      }

      function c(e) {
        let {
          swiper: t,
          extendParams: s,
          on: r
        } = e;
        s({
          thumbs: {
            swiper: null,
            multipleActiveThumbs: !0,
            autoScrollOffset: 0,
            slideThumbActiveClass: "swiper-slide-thumb-active",
            thumbsContainerClass: "swiper-thumbs"
          }
        });
        let o = !1,
          a = !1;

        function l() {
          const e = t.thumbs.swiper;
          if (!e || e.destroyed) return;
          const s = e.clickedIndex,
            n = e.clickedSlide;
          if (n && n.classList.contains(t.params.thumbs.slideThumbActiveClass)) return;
          if (null == s) return;
          let i;
          i = e.params.loop ? parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10) : s, t.params.loop ? t.slideToLoop(i) : t.slideTo(i)
        }

        function c() {
          const {
            thumbs: e
          } = t.params;
          if (o) return !1;
          o = !0;
          const s = t.constructor;
          if (e.swiper instanceof s) t.thumbs.swiper = e.swiper, Object.assign(t.thumbs.swiper.originalParams, {
            watchSlidesProgress: !0,
            slideToClickedSlide: !1
          }), Object.assign(t.thumbs.swiper.params, {
            watchSlidesProgress: !0,
            slideToClickedSlide: !1
          }), t.thumbs.swiper.update();
          else if ((0, i.j)(e.swiper)) {
            const n = Object.assign({}, e.swiper);
            Object.assign(n, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1
            }), t.thumbs.swiper = new s(n), a = !0
          }
          return t.thumbs.swiper.el.classList.add(t.params.thumbs.thumbsContainerClass), t.thumbs.swiper.on("tap", l), !0
        }

        function d(e) {
          const s = t.thumbs.swiper;
          if (!s || s.destroyed) return;
          const n = "auto" === s.params.slidesPerView ? s.slidesPerViewDynamic() : s.params.slidesPerView;
          let r = 1;
          const o = t.params.thumbs.slideThumbActiveClass;
          if (t.params.slidesPerView > 1 && !t.params.centeredSlides && (r = t.params.slidesPerView), t.params.thumbs.multipleActiveThumbs || (r = 1), r = Math.floor(r), s.slides.forEach((e => e.classList.remove(o))), s.params.loop || s.params.virtual && s.params.virtual.enabled)
            for (let e = 0; e < r; e += 1)(0, i.e)(s.slidesEl, `[data-swiper-slide-index="${t.realIndex+e}"]`).forEach((e => {
              e.classList.add(o)
            }));
          else
            for (let e = 0; e < r; e += 1) s.slides[t.realIndex + e] && s.slides[t.realIndex + e].classList.add(o);
          const a = t.params.thumbs.autoScrollOffset,
            l = a && !s.params.loop;
          if (t.realIndex !== s.realIndex || l) {
            const i = s.activeIndex;
            let r, o;
            if (s.params.loop) {
              const e = s.slides.filter((e => e.getAttribute("data-swiper-slide-index") === `${t.realIndex}`))[0];
              r = s.slides.indexOf(e), o = t.activeIndex > t.previousIndex ? "next" : "prev"
            } else r = t.realIndex, o = r > t.previousIndex ? "next" : "prev";
            l && (r += "next" === o ? a : -1 * a), s.visibleSlidesIndexes && s.visibleSlidesIndexes.indexOf(r) < 0 && (s.params.centeredSlides ? r = r > i ? r - Math.floor(n / 2) + 1 : r + Math.floor(n / 2) - 1 : r > i && s.params.slidesPerGroup, s.slideTo(r, e ? 0 : void 0))
          }
        }
        t.thumbs = {
          swiper: null
        }, r("beforeInit", (() => {
          const {
            thumbs: e
          } = t.params;
          if (e && e.swiper)
            if ("string" == typeof e.swiper || e.swiper instanceof HTMLElement) {
              const s = (0, n.g)(),
                i = () => {
                  const n = "string" == typeof e.swiper ? s.querySelector(e.swiper) : e.swiper;
                  if (n && n.swiper) e.swiper = n.swiper, c(), d(!0);
                  else if (n) {
                    const s = i => {
                      e.swiper = i.detail[0], n.removeEventListener("init", s), c(), d(!0), e.swiper.update(), t.update()
                    };
                    n.addEventListener("init", s)
                  }
                  return n
                },
                r = () => {
                  t.destroyed || i() || requestAnimationFrame(r)
                };
              requestAnimationFrame(r)
            } else c(), d(!0)
        })), r("slideChange update resize observerUpdate", (() => {
          d()
        })), r("setTransition", ((e, s) => {
          const n = t.thumbs.swiper;
          n && !n.destroyed && n.setTransition(s)
        })), r("beforeDestroy", (() => {
          const e = t.thumbs.swiper;
          e && !e.destroyed && a && e.destroy()
        })), Object.assign(t.thumbs, {
          init: c,
          update: d
        })
      }

      function d(e) {
        let {
          swiper: t,
          extendParams: s,
          emit: n,
          once: r
        } = e;
        s({
          freeMode: {
            enabled: !1,
            momentum: !0,
            momentumRatio: 1,
            momentumBounce: !0,
            momentumBounceRatio: 1,
            momentumVelocityRatio: 1,
            sticky: !1,
            minimumVelocity: .02
          }
        }), Object.assign(t, {
          freeMode: {
            onTouchStart: function() {
              if (t.params.cssMode) return;
              const e = t.getTranslate();
              t.setTranslate(e), t.setTransition(0), t.touchEventsData.velocities.length = 0, t.freeMode.onTouchEnd({
                currentPos: t.rtl ? t.translate : -t.translate
              })
            },
            onTouchMove: function() {
              if (t.params.cssMode) return;
              const {
                touchEventsData: e,
                touches: s
              } = t;
              0 === e.velocities.length && e.velocities.push({
                position: s[t.isHorizontal() ? "startX" : "startY"],
                time: e.touchStartTime
              }), e.velocities.push({
                position: s[t.isHorizontal() ? "currentX" : "currentY"],
                time: (0, i.d)()
              })
            },
            onTouchEnd: function(e) {
              let {
                currentPos: s
              } = e;
              if (t.params.cssMode) return;
              const {
                params: o,
                wrapperEl: a,
                rtlTranslate: l,
                snapGrid: c,
                touchEventsData: d
              } = t, u = (0, i.d)() - d.touchStartTime;
              if (s < -t.minTranslate()) t.slideTo(t.activeIndex);
              else if (s > -t.maxTranslate()) t.slides.length < c.length ? t.slideTo(c.length - 1) : t.slideTo(t.slides.length - 1);
              else {
                if (o.freeMode.momentum) {
                  if (d.velocities.length > 1) {
                    const e = d.velocities.pop(),
                      s = d.velocities.pop(),
                      n = e.position - s.position,
                      r = e.time - s.time;
                    t.velocity = n / r, t.velocity /= 2, Math.abs(t.velocity) < o.freeMode.minimumVelocity && (t.velocity = 0), (r > 150 || (0, i.d)() - e.time > 300) && (t.velocity = 0)
                  } else t.velocity = 0;
                  t.velocity *= o.freeMode.momentumVelocityRatio, d.velocities.length = 0;
                  let e = 1e3 * o.freeMode.momentumRatio;
                  const s = t.velocity * e;
                  let u = t.translate + s;
                  l && (u = -u);
                  let p, h = !1;
                  const m = 20 * Math.abs(t.velocity) * o.freeMode.momentumBounceRatio;
                  let f;
                  if (u < t.maxTranslate()) o.freeMode.momentumBounce ? (u + t.maxTranslate() < -m && (u = t.maxTranslate() - m), p = t.maxTranslate(), h = !0, d.allowMomentumBounce = !0) : u = t.maxTranslate(), o.loop && o.centeredSlides && (f = !0);
                  else if (u > t.minTranslate()) o.freeMode.momentumBounce ? (u - t.minTranslate() > m && (u = t.minTranslate() + m), p = t.minTranslate(), h = !0, d.allowMomentumBounce = !0) : u = t.minTranslate(), o.loop && o.centeredSlides && (f = !0);
                  else if (o.freeMode.sticky) {
                    let e;
                    for (let t = 0; t < c.length; t += 1)
                      if (c[t] > -u) {
                        e = t;
                        break
                      } u = Math.abs(c[e] - u) < Math.abs(c[e - 1] - u) || "next" === t.swipeDirection ? c[e] : c[e - 1], u = -u
                  }
                  if (f && r("transitionEnd", (() => {
                      t.loopFix()
                    })), 0 !== t.velocity) {
                    if (e = l ? Math.abs((-u - t.translate) / t.velocity) : Math.abs((u - t.translate) / t.velocity), o.freeMode.sticky) {
                      const s = Math.abs((l ? -u : u) - t.translate),
                        n = t.slidesSizesGrid[t.activeIndex];
                      e = s < n ? o.speed : s < 2 * n ? 1.5 * o.speed : 2.5 * o.speed
                    }
                  } else if (o.freeMode.sticky) return void t.slideToClosest();
                  o.freeMode.momentumBounce && h ? (t.updateProgress(p), t.setTransition(e), t.setTranslate(u), t.transitionStart(!0, t.swipeDirection), t.animating = !0, (0, i.i)(a, (() => {
                    t && !t.destroyed && d.allowMomentumBounce && (n("momentumBounce"), t.setTransition(o.speed), setTimeout((() => {
                      t.setTranslate(p), (0, i.i)(a, (() => {
                        t && !t.destroyed && t.transitionEnd()
                      }))
                    }), 0))
                  }))) : t.velocity ? (n("_freeModeNoMomentumRelease"), t.updateProgress(u), t.setTransition(e), t.setTranslate(u), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, (0, i.i)(a, (() => {
                    t && !t.destroyed && t.transitionEnd()
                  })))) : t.updateProgress(u), t.updateActiveIndex(), t.updateSlidesClasses()
                } else {
                  if (o.freeMode.sticky) return void t.slideToClosest();
                  o.freeMode && n("_freeModeNoMomentumRelease")
                }(!o.freeMode.momentum || u >= o.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
              }
            }
          }
        })
      }
    },
    6454: (e, t, s) => {
      function n(e) {
        return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
      }

      function i(e, t) {
        void 0 === e && (e = {}), void 0 === t && (t = {}), Object.keys(t).forEach((s => {
          void 0 === e[s] ? e[s] = t[s] : n(t[s]) && n(e[s]) && Object.keys(t[s]).length > 0 && i(e[s], t[s])
        }))
      }
      s.d(t, {
        a: () => l,
        g: () => o
      });
      const r = {
        body: {},
        addEventListener() {},
        removeEventListener() {},
        activeElement: {
          blur() {},
          nodeName: ""
        },
        querySelector: () => null,
        querySelectorAll: () => [],
        getElementById: () => null,
        createEvent: () => ({
          initEvent() {}
        }),
        createElement: () => ({
          children: [],
          childNodes: [],
          style: {},
          setAttribute() {},
          getElementsByTagName: () => []
        }),
        createElementNS: () => ({}),
        importNode: () => null,
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: ""
        }
      };

      function o() {
        const e = "undefined" != typeof document ? document : {};
        return i(e, r), e
      }
      const a = {
        document: r,
        navigator: {
          userAgent: ""
        },
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: ""
        },
        history: {
          replaceState() {},
          pushState() {},
          go() {},
          back() {}
        },
        CustomEvent: function() {
          return this
        },
        addEventListener() {},
        removeEventListener() {},
        getComputedStyle: () => ({
          getPropertyValue: () => ""
        }),
        Image() {},
        Date() {},
        screen: {},
        setTimeout() {},
        clearTimeout() {},
        matchMedia: () => ({}),
        requestAnimationFrame: e => "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
        cancelAnimationFrame(e) {
          "undefined" != typeof setTimeout && clearTimeout(e)
        }
      };

      function l() {
        const e = "undefined" != typeof window ? window : {};
        return i(e, a), e
      }
    },
    1532: (e, t, s) => {
      s.d(t, {
        a: () => y,
        c: () => h,
        d: () => o,
        e: () => p,
        f: () => b,
        g: () => v,
        h: () => a,
        i: () => x,
        j: () => l,
        l: () => g,
        m: () => f,
        n: () => r,
        o: () => m,
        p: () => u,
        q: () => c,
        r: () => i,
        s: () => d
      });
      var n = s(6454);

      function i(e) {
        const t = e;
        Object.keys(t).forEach((e => {
          try {
            t[e] = null
          } catch (e) {}
          try {
            delete t[e]
          } catch (e) {}
        }))
      }

      function r(e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t)
      }

      function o() {
        return Date.now()
      }

      function a(e, t) {
        void 0 === t && (t = "x");
        const s = (0, n.a)();
        let i, r, o;
        const a = function(e) {
          const t = (0, n.a)();
          let s;
          return t.getComputedStyle && (s = t.getComputedStyle(e, null)), !s && e.currentStyle && (s = e.currentStyle), s || (s = e.style), s
        }(e);
        return s.WebKitCSSMatrix ? (r = a.transform || a.webkitTransform, r.split(",").length > 6 && (r = r.split(", ").map((e => e.replace(",", "."))).join(", ")), o = new s.WebKitCSSMatrix("none" === r ? "" : r)) : (o = a.MozTransform || a.OTransform || a.MsTransform || a.msTransform || a.transform || a.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), i = o.toString().split(",")), "x" === t && (r = s.WebKitCSSMatrix ? o.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === t && (r = s.WebKitCSSMatrix ? o.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), r || 0
      }

      function l(e) {
        return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
      }

      function c() {
        const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
          t = ["__proto__", "constructor", "prototype"];
        for (let n = 1; n < arguments.length; n += 1) {
          const i = n < 0 || arguments.length <= n ? void 0 : arguments[n];
          if (null != i && (s = i, !("undefined" != typeof window && void 0 !== window.HTMLElement ? s instanceof HTMLElement : s && (1 === s.nodeType || 11 === s.nodeType)))) {
            const s = Object.keys(Object(i)).filter((e => t.indexOf(e) < 0));
            for (let t = 0, n = s.length; t < n; t += 1) {
              const n = s[t],
                r = Object.getOwnPropertyDescriptor(i, n);
              void 0 !== r && r.enumerable && (l(e[n]) && l(i[n]) ? i[n].__swiper__ ? e[n] = i[n] : c(e[n], i[n]) : !l(e[n]) && l(i[n]) ? (e[n] = {}, i[n].__swiper__ ? e[n] = i[n] : c(e[n], i[n])) : e[n] = i[n])
            }
          }
        }
        var s;
        return e
      }

      function d(e, t, s) {
        e.style.setProperty(t, s)
      }

      function u(e) {
        let {
          swiper: t,
          targetPosition: s,
          side: i
        } = e;
        const r = (0, n.a)(),
          o = -t.translate;
        let a, l = null;
        const c = t.params.speed;
        t.wrapperEl.style.scrollSnapType = "none", r.cancelAnimationFrame(t.cssModeFrameID);
        const d = s > o ? "next" : "prev",
          u = (e, t) => "next" === d && e >= t || "prev" === d && e <= t,
          p = () => {
            a = (new Date).getTime(), null === l && (l = a);
            const e = Math.max(Math.min((a - l) / c, 1), 0),
              n = .5 - Math.cos(e * Math.PI) / 2;
            let d = o + n * (s - o);
            if (u(d, s) && (d = s), t.wrapperEl.scrollTo({
                [i]: d
              }), u(d, s)) return t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.scrollSnapType = "", setTimeout((() => {
              t.wrapperEl.style.overflow = "", t.wrapperEl.scrollTo({
                [i]: d
              })
            })), void r.cancelAnimationFrame(t.cssModeFrameID);
            t.cssModeFrameID = r.requestAnimationFrame(p)
          };
        p()
      }

      function p(e, t) {
        return void 0 === t && (t = ""), [...e.children].filter((e => e.matches(t)))
      }

      function h(e, t) {
        void 0 === t && (t = []);
        const s = document.createElement(e);
        return s.classList.add(...Array.isArray(t) ? t : [t]), s
      }

      function m(e, t) {
        const s = [];
        for (; e.previousElementSibling;) {
          const n = e.previousElementSibling;
          t ? n.matches(t) && s.push(n) : s.push(n), e = n
        }
        return s
      }

      function f(e, t) {
        const s = [];
        for (; e.nextElementSibling;) {
          const n = e.nextElementSibling;
          t ? n.matches(t) && s.push(n) : s.push(n), e = n
        }
        return s
      }

      function g(e, t) {
        return (0, n.a)().getComputedStyle(e, null).getPropertyValue(t)
      }

      function v(e) {
        let t, s = e;
        if (s) {
          for (t = 0; null !== (s = s.previousSibling);) 1 === s.nodeType && (t += 1);
          return t
        }
      }

      function y(e, t) {
        const s = [];
        let n = e.parentElement;
        for (; n;) t ? n.matches(t) && s.push(n) : s.push(n), n = n.parentElement;
        return s
      }

      function x(e, t) {
        t && e.addEventListener("transitionend", (function s(n) {
          n.target === e && (t.call(e, n), e.removeEventListener("transitionend", s))
        }))
      }

      function b(e, t, s) {
        const i = (0, n.a)();
        return s ? e["width" === t ? "offsetWidth" : "offsetHeight"] + parseFloat(i.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-right" : "margin-top")) + parseFloat(i.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-left" : "margin-bottom")) : e.offsetWidth
      }
    },
    719: (e, t, s) => {
      s.d(t, {
        tq: () => X,
        o5: () => Y
      });
      var n = s(279),
        i = s(6454),
        r = s(1532);
      let o, a, l;

      function c() {
        return o || (o = function() {
          const e = (0, i.a)(),
            t = (0, i.g)();
          return {
            smoothScroll: t.documentElement && t.documentElement.style && "scrollBehavior" in t.documentElement.style,
            touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch)
          }
        }()), o
      }
      var d = {
        on(e, t, s) {
          const n = this;
          if (!n.eventsListeners || n.destroyed) return n;
          if ("function" != typeof t) return n;
          const i = s ? "unshift" : "push";
          return e.split(" ").forEach((e => {
            n.eventsListeners[e] || (n.eventsListeners[e] = []), n.eventsListeners[e][i](t)
          })), n
        },
        once(e, t, s) {
          const n = this;
          if (!n.eventsListeners || n.destroyed) return n;
          if ("function" != typeof t) return n;

          function i() {
            n.off(e, i), i.__emitterProxy && delete i.__emitterProxy;
            for (var s = arguments.length, r = new Array(s), o = 0; o < s; o++) r[o] = arguments[o];
            t.apply(n, r)
          }
          return i.__emitterProxy = t, n.on(e, i, s)
        },
        onAny(e, t) {
          const s = this;
          if (!s.eventsListeners || s.destroyed) return s;
          if ("function" != typeof e) return s;
          const n = t ? "unshift" : "push";
          return s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[n](e), s
        },
        offAny(e) {
          const t = this;
          if (!t.eventsListeners || t.destroyed) return t;
          if (!t.eventsAnyListeners) return t;
          const s = t.eventsAnyListeners.indexOf(e);
          return s >= 0 && t.eventsAnyListeners.splice(s, 1), t
        },
        off(e, t) {
          const s = this;
          return !s.eventsListeners || s.destroyed ? s : s.eventsListeners ? (e.split(" ").forEach((e => {
            void 0 === t ? s.eventsListeners[e] = [] : s.eventsListeners[e] && s.eventsListeners[e].forEach(((n, i) => {
              (n === t || n.__emitterProxy && n.__emitterProxy === t) && s.eventsListeners[e].splice(i, 1)
            }))
          })), s) : s
        },
        emit() {
          const e = this;
          if (!e.eventsListeners || e.destroyed) return e;
          if (!e.eventsListeners) return e;
          let t, s, n;
          for (var i = arguments.length, r = new Array(i), o = 0; o < i; o++) r[o] = arguments[o];
          return "string" == typeof r[0] || Array.isArray(r[0]) ? (t = r[0], s = r.slice(1, r.length), n = e) : (t = r[0].events, s = r[0].data, n = r[0].context || e), s.unshift(n), (Array.isArray(t) ? t : t.split(" ")).forEach((t => {
            e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach((e => {
              e.apply(n, [t, ...s])
            })), e.eventsListeners && e.eventsListeners[t] && e.eventsListeners[t].forEach((e => {
              e.apply(n, s)
            }))
          })), e
        }
      };
      const u = (e, t) => {
          if (!e || e.destroyed || !e.params) return;
          const s = t.closest(e.isElement ? "swiper-slide" : `.${e.params.slideClass}`);
          if (s) {
            let t = s.querySelector(`.${e.params.lazyPreloaderClass}`);
            !t && e.isElement && (s.shadowRoot ? t = s.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`) : requestAnimationFrame((() => {
              s.shadowRoot && (t = s.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`), t && t.remove())
            }))), t && t.remove()
          }
        },
        p = (e, t) => {
          if (!e.slides[t]) return;
          const s = e.slides[t].querySelector('[loading="lazy"]');
          s && s.removeAttribute("loading")
        },
        h = e => {
          if (!e || e.destroyed || !e.params) return;
          let t = e.params.lazyPreloadPrevNext;
          const s = e.slides.length;
          if (!s || !t || t < 0) return;
          t = Math.min(t, s);
          const n = "auto" === e.params.slidesPerView ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView),
            i = e.activeIndex;
          if (e.params.grid && e.params.grid.rows > 1) {
            const s = i,
              r = [s - t];
            return r.push(...Array.from({
              length: t
            }).map(((e, t) => s + n + t))), void e.slides.forEach(((t, s) => {
              r.includes(t.column) && p(e, s)
            }))
          }
          const r = i + n - 1;
          if (e.params.rewind || e.params.loop)
            for (let n = i - t; n <= r + t; n += 1) {
              const t = (n % s + s) % s;
              (t < i || t > r) && p(e, t)
            } else
              for (let n = Math.max(i - t, 0); n <= Math.min(r + t, s - 1); n += 1) n !== i && (n > r || n < i) && p(e, n)
        };
      var m = {
        updateSize: function() {
          const e = this;
          let t, s;
          const n = e.el;
          t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : n.clientWidth, s = void 0 !== e.params.height && null !== e.params.height ? e.params.height : n.clientHeight, 0 === t && e.isHorizontal() || 0 === s && e.isVertical() || (t = t - parseInt((0, r.l)(n, "padding-left") || 0, 10) - parseInt((0, r.l)(n, "padding-right") || 0, 10), s = s - parseInt((0, r.l)(n, "padding-top") || 0, 10) - parseInt((0, r.l)(n, "padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(s) && (s = 0), Object.assign(e, {
            width: t,
            height: s,
            size: e.isHorizontal() ? t : s
          }))
        },
        updateSlides: function() {
          const e = this;

          function t(t) {
            return e.isHorizontal() ? t : {
              width: "height",
              "margin-top": "margin-left",
              "margin-bottom ": "margin-right",
              "margin-left": "margin-top",
              "margin-right": "margin-bottom",
              "padding-left": "padding-top",
              "padding-right": "padding-bottom",
              marginRight: "marginBottom"
            } [t]
          }

          function s(e, s) {
            return parseFloat(e.getPropertyValue(t(s)) || 0)
          }
          const n = e.params,
            {
              wrapperEl: i,
              slidesEl: o,
              size: a,
              rtlTranslate: l,
              wrongRTL: c
            } = e,
            d = e.virtual && n.virtual.enabled,
            u = d ? e.virtual.slides.length : e.slides.length,
            p = (0, r.e)(o, `.${e.params.slideClass}, swiper-slide`),
            h = d ? e.virtual.slides.length : p.length;
          let m = [];
          const f = [],
            g = [];
          let v = n.slidesOffsetBefore;
          "function" == typeof v && (v = n.slidesOffsetBefore.call(e));
          let y = n.slidesOffsetAfter;
          "function" == typeof y && (y = n.slidesOffsetAfter.call(e));
          const x = e.snapGrid.length,
            b = e.slidesGrid.length;
          let w = n.spaceBetween,
            S = -v,
            T = 0,
            E = 0;
          if (void 0 === a) return;
          "string" == typeof w && w.indexOf("%") >= 0 ? w = parseFloat(w.replace("%", "")) / 100 * a : "string" == typeof w && (w = parseFloat(w)), e.virtualSize = -w, p.forEach((e => {
            l ? e.style.marginLeft = "" : e.style.marginRight = "", e.style.marginBottom = "", e.style.marginTop = ""
          })), n.centeredSlides && n.cssMode && ((0, r.s)(i, "--swiper-centered-offset-before", ""), (0, r.s)(i, "--swiper-centered-offset-after", ""));
          const P = n.grid && n.grid.rows > 1 && e.grid;
          let C;
          P && e.grid.initSlides(h);
          const M = "auto" === n.slidesPerView && n.breakpoints && Object.keys(n.breakpoints).filter((e => void 0 !== n.breakpoints[e].slidesPerView)).length > 0;
          for (let i = 0; i < h; i += 1) {
            let o;
            if (C = 0, p[i] && (o = p[i]), P && e.grid.updateSlide(i, o, h, t), !p[i] || "none" !== (0, r.l)(o, "display")) {
              if ("auto" === n.slidesPerView) {
                M && (p[i].style[t("width")] = "");
                const a = getComputedStyle(o),
                  l = o.style.transform,
                  c = o.style.webkitTransform;
                if (l && (o.style.transform = "none"), c && (o.style.webkitTransform = "none"), n.roundLengths) C = e.isHorizontal() ? (0, r.f)(o, "width", !0) : (0, r.f)(o, "height", !0);
                else {
                  const e = s(a, "width"),
                    t = s(a, "padding-left"),
                    n = s(a, "padding-right"),
                    i = s(a, "margin-left"),
                    r = s(a, "margin-right"),
                    l = a.getPropertyValue("box-sizing");
                  if (l && "border-box" === l) C = e + i + r;
                  else {
                    const {
                      clientWidth: s,
                      offsetWidth: a
                    } = o;
                    C = e + t + n + i + r + (a - s)
                  }
                }
                l && (o.style.transform = l), c && (o.style.webkitTransform = c), n.roundLengths && (C = Math.floor(C))
              } else C = (a - (n.slidesPerView - 1) * w) / n.slidesPerView, n.roundLengths && (C = Math.floor(C)), p[i] && (p[i].style[t("width")] = `${C}px`);
              p[i] && (p[i].swiperSlideSize = C), g.push(C), n.centeredSlides ? (S = S + C / 2 + T / 2 + w, 0 === T && 0 !== i && (S = S - a / 2 - w), 0 === i && (S = S - a / 2 - w), Math.abs(S) < .001 && (S = 0), n.roundLengths && (S = Math.floor(S)), E % n.slidesPerGroup == 0 && m.push(S), f.push(S)) : (n.roundLengths && (S = Math.floor(S)), (E - Math.min(e.params.slidesPerGroupSkip, E)) % e.params.slidesPerGroup == 0 && m.push(S), f.push(S), S = S + C + w), e.virtualSize += C + w, T = C, E += 1
            }
          }
          if (e.virtualSize = Math.max(e.virtualSize, a) + y, l && c && ("slide" === n.effect || "coverflow" === n.effect) && (i.style.width = `${e.virtualSize+w}px`), n.setWrapperSize && (i.style[t("width")] = `${e.virtualSize+w}px`), P && e.grid.updateWrapperSize(C, m, t), !n.centeredSlides) {
            const t = [];
            for (let s = 0; s < m.length; s += 1) {
              let i = m[s];
              n.roundLengths && (i = Math.floor(i)), m[s] <= e.virtualSize - a && t.push(i)
            }
            m = t, Math.floor(e.virtualSize - a) - Math.floor(m[m.length - 1]) > 1 && m.push(e.virtualSize - a)
          }
          if (d && n.loop) {
            const t = g[0] + w;
            if (n.slidesPerGroup > 1) {
              const s = Math.ceil((e.virtual.slidesBefore + e.virtual.slidesAfter) / n.slidesPerGroup),
                i = t * n.slidesPerGroup;
              for (let e = 0; e < s; e += 1) m.push(m[m.length - 1] + i)
            }
            for (let s = 0; s < e.virtual.slidesBefore + e.virtual.slidesAfter; s += 1) 1 === n.slidesPerGroup && m.push(m[m.length - 1] + t), f.push(f[f.length - 1] + t), e.virtualSize += t
          }
          if (0 === m.length && (m = [0]), 0 !== w) {
            const s = e.isHorizontal() && l ? "marginLeft" : t("marginRight");
            p.filter(((e, t) => !(n.cssMode && !n.loop) || t !== p.length - 1)).forEach((e => {
              e.style[s] = `${w}px`
            }))
          }
          if (n.centeredSlides && n.centeredSlidesBounds) {
            let e = 0;
            g.forEach((t => {
              e += t + (w || 0)
            })), e -= w;
            const t = e - a;
            m = m.map((e => e <= 0 ? -v : e > t ? t + y : e))
          }
          if (n.centerInsufficientSlides) {
            let e = 0;
            if (g.forEach((t => {
                e += t + (w || 0)
              })), e -= w, e < a) {
              const t = (a - e) / 2;
              m.forEach(((e, s) => {
                m[s] = e - t
              })), f.forEach(((e, s) => {
                f[s] = e + t
              }))
            }
          }
          if (Object.assign(e, {
              slides: p,
              snapGrid: m,
              slidesGrid: f,
              slidesSizesGrid: g
            }), n.centeredSlides && n.cssMode && !n.centeredSlidesBounds) {
            (0, r.s)(i, "--swiper-centered-offset-before", -m[0] + "px"), (0, r.s)(i, "--swiper-centered-offset-after", e.size / 2 - g[g.length - 1] / 2 + "px");
            const t = -e.snapGrid[0],
              s = -e.slidesGrid[0];
            e.snapGrid = e.snapGrid.map((e => e + t)), e.slidesGrid = e.slidesGrid.map((e => e + s))
          }
          if (h !== u && e.emit("slidesLengthChange"), m.length !== x && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), f.length !== b && e.emit("slidesGridLengthChange"), n.watchSlidesProgress && e.updateSlidesOffset(), !(d || n.cssMode || "slide" !== n.effect && "fade" !== n.effect)) {
            const t = `${n.containerModifierClass}backface-hidden`,
              s = e.el.classList.contains(t);
            h <= n.maxBackfaceHiddenSlides ? s || e.el.classList.add(t) : s && e.el.classList.remove(t)
          }
        },
        updateAutoHeight: function(e) {
          const t = this,
            s = [],
            n = t.virtual && t.params.virtual.enabled;
          let i, r = 0;
          "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
          const o = e => n ? t.slides[t.getSlideIndexByData(e)] : t.slides[e];
          if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
            if (t.params.centeredSlides)(t.visibleSlides || []).forEach((e => {
              s.push(e)
            }));
            else
              for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
                const e = t.activeIndex + i;
                if (e > t.slides.length && !n) break;
                s.push(o(e))
              } else s.push(o(t.activeIndex));
          for (i = 0; i < s.length; i += 1)
            if (void 0 !== s[i]) {
              const e = s[i].offsetHeight;
              r = e > r ? e : r
            }(r || 0 === r) && (t.wrapperEl.style.height = `${r}px`)
        },
        updateSlidesOffset: function() {
          const e = this,
            t = e.slides,
            s = e.isElement ? e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop : 0;
          for (let n = 0; n < t.length; n += 1) t[n].swiperSlideOffset = (e.isHorizontal() ? t[n].offsetLeft : t[n].offsetTop) - s - e.cssOverflowAdjustment()
        },
        updateSlidesProgress: function(e) {
          void 0 === e && (e = this && this.translate || 0);
          const t = this,
            s = t.params,
            {
              slides: n,
              rtlTranslate: i,
              snapGrid: r
            } = t;
          if (0 === n.length) return;
          void 0 === n[0].swiperSlideOffset && t.updateSlidesOffset();
          let o = -e;
          i && (o = e), n.forEach((e => {
            e.classList.remove(s.slideVisibleClass)
          })), t.visibleSlidesIndexes = [], t.visibleSlides = [];
          let a = s.spaceBetween;
          "string" == typeof a && a.indexOf("%") >= 0 ? a = parseFloat(a.replace("%", "")) / 100 * t.size : "string" == typeof a && (a = parseFloat(a));
          for (let e = 0; e < n.length; e += 1) {
            const l = n[e];
            let c = l.swiperSlideOffset;
            s.cssMode && s.centeredSlides && (c -= n[0].swiperSlideOffset);
            const d = (o + (s.centeredSlides ? t.minTranslate() : 0) - c) / (l.swiperSlideSize + a),
              u = (o - r[0] + (s.centeredSlides ? t.minTranslate() : 0) - c) / (l.swiperSlideSize + a),
              p = -(o - c),
              h = p + t.slidesSizesGrid[e];
            (p >= 0 && p < t.size - 1 || h > 1 && h <= t.size || p <= 0 && h >= t.size) && (t.visibleSlides.push(l), t.visibleSlidesIndexes.push(e), n[e].classList.add(s.slideVisibleClass)), l.progress = i ? -d : d, l.originalProgress = i ? -u : u
          }
        },
        updateProgress: function(e) {
          const t = this;
          if (void 0 === e) {
            const s = t.rtlTranslate ? -1 : 1;
            e = t && t.translate && t.translate * s || 0
          }
          const s = t.params,
            n = t.maxTranslate() - t.minTranslate();
          let {
            progress: i,
            isBeginning: r,
            isEnd: o,
            progressLoop: a
          } = t;
          const l = r,
            c = o;
          if (0 === n) i = 0, r = !0, o = !0;
          else {
            i = (e - t.minTranslate()) / n;
            const s = Math.abs(e - t.minTranslate()) < 1,
              a = Math.abs(e - t.maxTranslate()) < 1;
            r = s || i <= 0, o = a || i >= 1, s && (i = 0), a && (i = 1)
          }
          if (s.loop) {
            const s = t.getSlideIndexByData(0),
              n = t.getSlideIndexByData(t.slides.length - 1),
              i = t.slidesGrid[s],
              r = t.slidesGrid[n],
              o = t.slidesGrid[t.slidesGrid.length - 1],
              l = Math.abs(e);
            a = l >= i ? (l - i) / o : (l + o - r) / o, a > 1 && (a -= 1)
          }
          Object.assign(t, {
            progress: i,
            progressLoop: a,
            isBeginning: r,
            isEnd: o
          }), (s.watchSlidesProgress || s.centeredSlides && s.autoHeight) && t.updateSlidesProgress(e), r && !l && t.emit("reachBeginning toEdge"), o && !c && t.emit("reachEnd toEdge"), (l && !r || c && !o) && t.emit("fromEdge"), t.emit("progress", i)
        },
        updateSlidesClasses: function() {
          const e = this,
            {
              slides: t,
              params: s,
              slidesEl: n,
              activeIndex: i
            } = e,
            o = e.virtual && s.virtual.enabled,
            a = e => (0, r.e)(n, `.${s.slideClass}${e}, swiper-slide${e}`)[0];
          let l;
          if (t.forEach((e => {
              e.classList.remove(s.slideActiveClass, s.slideNextClass, s.slidePrevClass)
            })), o)
            if (s.loop) {
              let t = i - e.virtual.slidesBefore;
              t < 0 && (t = e.virtual.slides.length + t), t >= e.virtual.slides.length && (t -= e.virtual.slides.length), l = a(`[data-swiper-slide-index="${t}"]`)
            } else l = a(`[data-swiper-slide-index="${i}"]`);
          else l = t[i];
          if (l) {
            l.classList.add(s.slideActiveClass);
            let e = (0, r.m)(l, `.${s.slideClass}, swiper-slide`)[0];
            s.loop && !e && (e = t[0]), e && e.classList.add(s.slideNextClass);
            let n = (0, r.o)(l, `.${s.slideClass}, swiper-slide`)[0];
            s.loop && 0 === !n && (n = t[t.length - 1]), n && n.classList.add(s.slidePrevClass)
          }
          e.emitSlidesClasses()
        },
        updateActiveIndex: function(e) {
          const t = this,
            s = t.rtlTranslate ? t.translate : -t.translate,
            {
              snapGrid: n,
              params: i,
              activeIndex: r,
              realIndex: o,
              snapIndex: a
            } = t;
          let l, c = e;
          const d = e => {
            let s = e - t.virtual.slidesBefore;
            return s < 0 && (s = t.virtual.slides.length + s), s >= t.virtual.slides.length && (s -= t.virtual.slides.length), s
          };
          if (void 0 === c && (c = function(e) {
              const {
                slidesGrid: t,
                params: s
              } = e, n = e.rtlTranslate ? e.translate : -e.translate;
              let i;
              for (let e = 0; e < t.length; e += 1) void 0 !== t[e + 1] ? n >= t[e] && n < t[e + 1] - (t[e + 1] - t[e]) / 2 ? i = e : n >= t[e] && n < t[e + 1] && (i = e + 1) : n >= t[e] && (i = e);
              return s.normalizeSlideIndex && (i < 0 || void 0 === i) && (i = 0), i
            }(t)), n.indexOf(s) >= 0) l = n.indexOf(s);
          else {
            const e = Math.min(i.slidesPerGroupSkip, c);
            l = e + Math.floor((c - e) / i.slidesPerGroup)
          }
          if (l >= n.length && (l = n.length - 1), c === r) return l !== a && (t.snapIndex = l, t.emit("snapIndexChange")), void(t.params.loop && t.virtual && t.params.virtual.enabled && (t.realIndex = d(c)));
          let u;
          u = t.virtual && i.virtual.enabled && i.loop ? d(c) : t.slides[c] ? parseInt(t.slides[c].getAttribute("data-swiper-slide-index") || c, 10) : c, Object.assign(t, {
            previousSnapIndex: a,
            snapIndex: l,
            previousRealIndex: o,
            realIndex: u,
            previousIndex: r,
            activeIndex: c
          }), t.initialized && h(t), t.emit("activeIndexChange"), t.emit("snapIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && (o !== u && t.emit("realIndexChange"), t.emit("slideChange"))
        },
        updateClickedSlide: function(e, t) {
          const s = this,
            n = s.params;
          let i = e.closest(`.${n.slideClass}, swiper-slide`);
          !i && s.isElement && t && t.length > 1 && t.includes(e) && [...t.slice(t.indexOf(e) + 1, t.length)].forEach((e => {
            !i && e.matches && e.matches(`.${n.slideClass}, swiper-slide`) && (i = e)
          }));
          let r, o = !1;
          if (i)
            for (let e = 0; e < s.slides.length; e += 1)
              if (s.slides[e] === i) {
                o = !0, r = e;
                break
              } if (!i || !o) return s.clickedSlide = void 0, void(s.clickedIndex = void 0);
          s.clickedSlide = i, s.virtual && s.params.virtual.enabled ? s.clickedIndex = parseInt(i.getAttribute("data-swiper-slide-index"), 10) : s.clickedIndex = r, n.slideToClickedSlide && void 0 !== s.clickedIndex && s.clickedIndex !== s.activeIndex && s.slideToClickedSlide()
        }
      };

      function f(e) {
        let {
          swiper: t,
          runCallbacks: s,
          direction: n,
          step: i
        } = e;
        const {
          activeIndex: r,
          previousIndex: o
        } = t;
        let a = n;
        if (a || (a = r > o ? "next" : r < o ? "prev" : "reset"), t.emit(`transition${i}`), s && r !== o) {
          if ("reset" === a) return void t.emit(`slideResetTransition${i}`);
          t.emit(`slideChangeTransition${i}`), "next" === a ? t.emit(`slideNextTransition${i}`) : t.emit(`slidePrevTransition${i}`)
        }
      }
      var g = {
        slideTo: function(e, t, s, n, i) {
          void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), "string" == typeof e && (e = parseInt(e, 10));
          const o = this;
          let a = e;
          a < 0 && (a = 0);
          const {
            params: l,
            snapGrid: c,
            slidesGrid: d,
            previousIndex: u,
            activeIndex: p,
            rtlTranslate: h,
            wrapperEl: m,
            enabled: f
          } = o;
          if (o.animating && l.preventInteractionOnTransition || !f && !n && !i) return !1;
          const g = Math.min(o.params.slidesPerGroupSkip, a);
          let v = g + Math.floor((a - g) / o.params.slidesPerGroup);
          v >= c.length && (v = c.length - 1);
          const y = -c[v];
          if (l.normalizeSlideIndex)
            for (let e = 0; e < d.length; e += 1) {
              const t = -Math.floor(100 * y),
                s = Math.floor(100 * d[e]),
                n = Math.floor(100 * d[e + 1]);
              void 0 !== d[e + 1] ? t >= s && t < n - (n - s) / 2 ? a = e : t >= s && t < n && (a = e + 1) : t >= s && (a = e)
            }
          if (o.initialized && a !== p) {
            if (!o.allowSlideNext && (h ? y > o.translate && y > o.minTranslate() : y < o.translate && y < o.minTranslate())) return !1;
            if (!o.allowSlidePrev && y > o.translate && y > o.maxTranslate() && (p || 0) !== a) return !1
          }
          let x;
          if (a !== (u || 0) && s && o.emit("beforeSlideChangeStart"), o.updateProgress(y), x = a > p ? "next" : a < p ? "prev" : "reset", h && -y === o.translate || !h && y === o.translate) return o.updateActiveIndex(a), l.autoHeight && o.updateAutoHeight(), o.updateSlidesClasses(), "slide" !== l.effect && o.setTranslate(y), "reset" !== x && (o.transitionStart(s, x), o.transitionEnd(s, x)), !1;
          if (l.cssMode) {
            const e = o.isHorizontal(),
              s = h ? y : -y;
            if (0 === t) {
              const t = o.virtual && o.params.virtual.enabled;
              t && (o.wrapperEl.style.scrollSnapType = "none", o._immediateVirtual = !0), t && !o._cssModeVirtualInitialSet && o.params.initialSlide > 0 ? (o._cssModeVirtualInitialSet = !0, requestAnimationFrame((() => {
                m[e ? "scrollLeft" : "scrollTop"] = s
              }))) : m[e ? "scrollLeft" : "scrollTop"] = s, t && requestAnimationFrame((() => {
                o.wrapperEl.style.scrollSnapType = "", o._immediateVirtual = !1
              }))
            } else {
              if (!o.support.smoothScroll) return (0, r.p)({
                swiper: o,
                targetPosition: s,
                side: e ? "left" : "top"
              }), !0;
              m.scrollTo({
                [e ? "left" : "top"]: s,
                behavior: "smooth"
              })
            }
            return !0
          }
          return o.setTransition(t), o.setTranslate(y), o.updateActiveIndex(a), o.updateSlidesClasses(), o.emit("beforeTransitionStart", t, n), o.transitionStart(s, x), 0 === t ? o.transitionEnd(s, x) : o.animating || (o.animating = !0, o.onSlideToWrapperTransitionEnd || (o.onSlideToWrapperTransitionEnd = function(e) {
            o && !o.destroyed && e.target === this && (o.wrapperEl.removeEventListener("transitionend", o.onSlideToWrapperTransitionEnd), o.onSlideToWrapperTransitionEnd = null, delete o.onSlideToWrapperTransitionEnd, o.transitionEnd(s, x))
          }), o.wrapperEl.addEventListener("transitionend", o.onSlideToWrapperTransitionEnd)), !0
        },
        slideToLoop: function(e, t, s, n) {
          void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), "string" == typeof e && (e = parseInt(e, 10));
          const i = this;
          let r = e;
          return i.params.loop && (i.virtual && i.params.virtual.enabled ? r += i.virtual.slidesBefore : r = i.getSlideIndexByData(r)), i.slideTo(r, t, s, n)
        },
        slideNext: function(e, t, s) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
          const n = this,
            {
              enabled: i,
              params: r,
              animating: o
            } = n;
          if (!i) return n;
          let a = r.slidesPerGroup;
          "auto" === r.slidesPerView && 1 === r.slidesPerGroup && r.slidesPerGroupAuto && (a = Math.max(n.slidesPerViewDynamic("current", !0), 1));
          const l = n.activeIndex < r.slidesPerGroupSkip ? 1 : a,
            c = n.virtual && r.virtual.enabled;
          if (r.loop) {
            if (o && !c && r.loopPreventsSliding) return !1;
            if (n.loopFix({
                direction: "next"
              }), n._clientLeft = n.wrapperEl.clientLeft, n.activeIndex === n.slides.length - 1 && r.cssMode) return requestAnimationFrame((() => {
              n.slideTo(n.activeIndex + l, e, t, s)
            })), !0
          }
          return r.rewind && n.isEnd ? n.slideTo(0, e, t, s) : n.slideTo(n.activeIndex + l, e, t, s)
        },
        slidePrev: function(e, t, s) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
          const n = this,
            {
              params: i,
              snapGrid: r,
              slidesGrid: o,
              rtlTranslate: a,
              enabled: l,
              animating: c
            } = n;
          if (!l) return n;
          const d = n.virtual && i.virtual.enabled;
          if (i.loop) {
            if (c && !d && i.loopPreventsSliding) return !1;
            n.loopFix({
              direction: "prev"
            }), n._clientLeft = n.wrapperEl.clientLeft
          }

          function u(e) {
            return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
          }
          const p = u(a ? n.translate : -n.translate),
            h = r.map((e => u(e)));
          let m = r[h.indexOf(p) - 1];
          if (void 0 === m && i.cssMode) {
            let e;
            r.forEach(((t, s) => {
              p >= t && (e = s)
            })), void 0 !== e && (m = r[e > 0 ? e - 1 : e])
          }
          let f = 0;
          if (void 0 !== m && (f = o.indexOf(m), f < 0 && (f = n.activeIndex - 1), "auto" === i.slidesPerView && 1 === i.slidesPerGroup && i.slidesPerGroupAuto && (f = f - n.slidesPerViewDynamic("previous", !0) + 1, f = Math.max(f, 0))), i.rewind && n.isBeginning) {
            const i = n.params.virtual && n.params.virtual.enabled && n.virtual ? n.virtual.slides.length - 1 : n.slides.length - 1;
            return n.slideTo(i, e, t, s)
          }
          return i.loop && 0 === n.activeIndex && i.cssMode ? (requestAnimationFrame((() => {
            n.slideTo(f, e, t, s)
          })), !0) : n.slideTo(f, e, t, s)
        },
        slideReset: function(e, t, s) {
          return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, s)
        },
        slideToClosest: function(e, t, s, n) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === n && (n = .5);
          const i = this;
          let r = i.activeIndex;
          const o = Math.min(i.params.slidesPerGroupSkip, r),
            a = o + Math.floor((r - o) / i.params.slidesPerGroup),
            l = i.rtlTranslate ? i.translate : -i.translate;
          if (l >= i.snapGrid[a]) {
            const e = i.snapGrid[a];
            l - e > (i.snapGrid[a + 1] - e) * n && (r += i.params.slidesPerGroup)
          } else {
            const e = i.snapGrid[a - 1];
            l - e <= (i.snapGrid[a] - e) * n && (r -= i.params.slidesPerGroup)
          }
          return r = Math.max(r, 0), r = Math.min(r, i.slidesGrid.length - 1), i.slideTo(r, e, t, s)
        },
        slideToClickedSlide: function() {
          const e = this,
            {
              params: t,
              slidesEl: s
            } = e,
            n = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
          let i, o = e.clickedIndex;
          const a = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
          if (t.loop) {
            if (e.animating) return;
            i = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10), t.centeredSlides ? o < e.loopedSlides - n / 2 || o > e.slides.length - e.loopedSlides + n / 2 ? (e.loopFix(), o = e.getSlideIndex((0, r.e)(s, `${a}[data-swiper-slide-index="${i}"]`)[0]), (0, r.n)((() => {
              e.slideTo(o)
            }))) : e.slideTo(o) : o > e.slides.length - n ? (e.loopFix(), o = e.getSlideIndex((0, r.e)(s, `${a}[data-swiper-slide-index="${i}"]`)[0]), (0, r.n)((() => {
              e.slideTo(o)
            }))) : e.slideTo(o)
          } else e.slideTo(o)
        }
      };

      function v(e) {
        const t = this,
          s = (0, i.g)(),
          n = (0, i.a)(),
          o = t.touchEventsData;
        o.evCache.push(e);
        const {
          params: a,
          touches: l,
          enabled: c
        } = t;
        if (!c) return;
        if (!a.simulateTouch && "mouse" === e.pointerType) return;
        if (t.animating && a.preventInteractionOnTransition) return;
        !t.animating && a.cssMode && a.loop && t.loopFix();
        let d = e;
        d.originalEvent && (d = d.originalEvent);
        let u = d.target;
        if ("wrapper" === a.touchEventsTarget && !t.wrapperEl.contains(u)) return;
        if ("which" in d && 3 === d.which) return;
        if ("button" in d && d.button > 0) return;
        if (o.isTouched && o.isMoved) return;
        const p = !!a.noSwipingClass && "" !== a.noSwipingClass,
          h = e.composedPath ? e.composedPath() : e.path;
        p && d.target && d.target.shadowRoot && h && (u = h[0]);
        const m = a.noSwipingSelector ? a.noSwipingSelector : `.${a.noSwipingClass}`,
          f = !(!d.target || !d.target.shadowRoot);
        if (a.noSwiping && (f ? function(e, t) {
            return void 0 === t && (t = this),
              function t(s) {
                if (!s || s === (0, i.g)() || s === (0, i.a)()) return null;
                s.assignedSlot && (s = s.assignedSlot);
                const n = s.closest(e);
                return n || s.getRootNode ? n || t(s.getRootNode().host) : null
              }(t)
          }(m, u) : u.closest(m))) return void(t.allowClick = !0);
        if (a.swipeHandler && !u.closest(a.swipeHandler)) return;
        l.currentX = d.pageX, l.currentY = d.pageY;
        const g = l.currentX,
          v = l.currentY,
          y = a.edgeSwipeDetection || a.iOSEdgeSwipeDetection,
          x = a.edgeSwipeThreshold || a.iOSEdgeSwipeThreshold;
        if (y && (g <= x || g >= n.innerWidth - x)) {
          if ("prevent" !== y) return;
          e.preventDefault()
        }
        Object.assign(o, {
          isTouched: !0,
          isMoved: !1,
          allowTouchCallbacks: !0,
          isScrolling: void 0,
          startMoving: void 0
        }), l.startX = g, l.startY = v, o.touchStartTime = (0, r.d)(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, a.threshold > 0 && (o.allowThresholdMove = !1);
        let b = !0;
        u.matches(o.focusableElements) && (b = !1, "SELECT" === u.nodeName && (o.isTouched = !1)), s.activeElement && s.activeElement.matches(o.focusableElements) && s.activeElement !== u && s.activeElement.blur();
        const w = b && t.allowTouchMove && a.touchStartPreventDefault;
        !a.touchStartForcePreventDefault && !w || u.isContentEditable || d.preventDefault(), a.freeMode && a.freeMode.enabled && t.freeMode && t.animating && !a.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", d)
      }

      function y(e) {
        const t = (0, i.g)(),
          s = this,
          n = s.touchEventsData,
          {
            params: o,
            touches: a,
            rtlTranslate: l,
            enabled: c
          } = s;
        if (!c) return;
        if (!o.simulateTouch && "mouse" === e.pointerType) return;
        let d = e;
        if (d.originalEvent && (d = d.originalEvent), !n.isTouched) return void(n.startMoving && n.isScrolling && s.emit("touchMoveOpposite", d));
        const u = n.evCache.findIndex((e => e.pointerId === d.pointerId));
        u >= 0 && (n.evCache[u] = d);
        const p = n.evCache.length > 1 ? n.evCache[0] : d,
          h = p.pageX,
          m = p.pageY;
        if (d.preventedByNestedSwiper) return a.startX = h, void(a.startY = m);
        if (!s.allowTouchMove) return d.target.matches(n.focusableElements) || (s.allowClick = !1), void(n.isTouched && (Object.assign(a, {
          startX: h,
          startY: m,
          prevX: s.touches.currentX,
          prevY: s.touches.currentY,
          currentX: h,
          currentY: m
        }), n.touchStartTime = (0, r.d)()));
        if (o.touchReleaseOnEdges && !o.loop)
          if (s.isVertical()) {
            if (m < a.startY && s.translate <= s.maxTranslate() || m > a.startY && s.translate >= s.minTranslate()) return n.isTouched = !1, void(n.isMoved = !1)
          } else if (h < a.startX && s.translate <= s.maxTranslate() || h > a.startX && s.translate >= s.minTranslate()) return;
        if (t.activeElement && d.target === t.activeElement && d.target.matches(n.focusableElements)) return n.isMoved = !0, void(s.allowClick = !1);
        if (n.allowTouchCallbacks && s.emit("touchMove", d), d.targetTouches && d.targetTouches.length > 1) return;
        a.currentX = h, a.currentY = m;
        const f = a.currentX - a.startX,
          g = a.currentY - a.startY;
        if (s.params.threshold && Math.sqrt(f ** 2 + g ** 2) < s.params.threshold) return;
        if (void 0 === n.isScrolling) {
          let e;
          s.isHorizontal() && a.currentY === a.startY || s.isVertical() && a.currentX === a.startX ? n.isScrolling = !1 : f * f + g * g >= 25 && (e = 180 * Math.atan2(Math.abs(g), Math.abs(f)) / Math.PI, n.isScrolling = s.isHorizontal() ? e > o.touchAngle : 90 - e > o.touchAngle)
        }
        if (n.isScrolling && s.emit("touchMoveOpposite", d), void 0 === n.startMoving && (a.currentX === a.startX && a.currentY === a.startY || (n.startMoving = !0)), n.isScrolling || s.zoom && s.params.zoom && s.params.zoom.enabled && n.evCache.length > 1) return void(n.isTouched = !1);
        if (!n.startMoving) return;
        s.allowClick = !1, !o.cssMode && d.cancelable && d.preventDefault(), o.touchMoveStopPropagation && !o.nested && d.stopPropagation();
        let v = s.isHorizontal() ? f : g,
          y = s.isHorizontal() ? a.currentX - a.previousX : a.currentY - a.previousY;
        o.oneWayMovement && (v = Math.abs(v) * (l ? 1 : -1), y = Math.abs(y) * (l ? 1 : -1)), a.diff = v, v *= o.touchRatio, l && (v = -v, y = -y);
        const x = s.touchesDirection;
        s.swipeDirection = v > 0 ? "prev" : "next", s.touchesDirection = y > 0 ? "prev" : "next";
        const b = s.params.loop && !o.cssMode,
          w = "next" === s.swipeDirection && s.allowSlideNext || "prev" === s.swipeDirection && s.allowSlidePrev;
        if (!n.isMoved) {
          if (b && w && s.loopFix({
              direction: s.swipeDirection
            }), n.startTranslate = s.getTranslate(), s.setTransition(0), s.animating) {
            const e = new window.CustomEvent("transitionend", {
              bubbles: !0,
              cancelable: !0
            });
            s.wrapperEl.dispatchEvent(e)
          }
          n.allowMomentumBounce = !1, !o.grabCursor || !0 !== s.allowSlideNext && !0 !== s.allowSlidePrev || s.setGrabCursor(!0), s.emit("sliderFirstMove", d)
        }
        let S;
        n.isMoved && x !== s.touchesDirection && b && w && Math.abs(v) >= 1 && (s.loopFix({
          direction: s.swipeDirection,
          setTranslate: !0
        }), S = !0), s.emit("sliderMove", d), n.isMoved = !0, n.currentTranslate = v + n.startTranslate;
        let T = !0,
          E = o.resistanceRatio;
        if (o.touchReleaseOnEdges && (E = 0), v > 0 ? (b && w && !S && n.currentTranslate > (o.centeredSlides ? s.minTranslate() - s.size / 2 : s.minTranslate()) && s.loopFix({
            direction: "prev",
            setTranslate: !0,
            activeSlideIndex: 0
          }), n.currentTranslate > s.minTranslate() && (T = !1, o.resistance && (n.currentTranslate = s.minTranslate() - 1 + (-s.minTranslate() + n.startTranslate + v) ** E))) : v < 0 && (b && w && !S && n.currentTranslate < (o.centeredSlides ? s.maxTranslate() + s.size / 2 : s.maxTranslate()) && s.loopFix({
            direction: "next",
            setTranslate: !0,
            activeSlideIndex: s.slides.length - ("auto" === o.slidesPerView ? s.slidesPerViewDynamic() : Math.ceil(parseFloat(o.slidesPerView, 10)))
          }), n.currentTranslate < s.maxTranslate() && (T = !1, o.resistance && (n.currentTranslate = s.maxTranslate() + 1 - (s.maxTranslate() - n.startTranslate - v) ** E))), T && (d.preventedByNestedSwiper = !0), !s.allowSlideNext && "next" === s.swipeDirection && n.currentTranslate < n.startTranslate && (n.currentTranslate = n.startTranslate), !s.allowSlidePrev && "prev" === s.swipeDirection && n.currentTranslate > n.startTranslate && (n.currentTranslate = n.startTranslate), s.allowSlidePrev || s.allowSlideNext || (n.currentTranslate = n.startTranslate), o.threshold > 0) {
          if (!(Math.abs(v) > o.threshold || n.allowThresholdMove)) return void(n.currentTranslate = n.startTranslate);
          if (!n.allowThresholdMove) return n.allowThresholdMove = !0, a.startX = a.currentX, a.startY = a.currentY, n.currentTranslate = n.startTranslate, void(a.diff = s.isHorizontal() ? a.currentX - a.startX : a.currentY - a.startY)
        }
        o.followFinger && !o.cssMode && ((o.freeMode && o.freeMode.enabled && s.freeMode || o.watchSlidesProgress) && (s.updateActiveIndex(), s.updateSlidesClasses()), o.freeMode && o.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(), s.updateProgress(n.currentTranslate), s.setTranslate(n.currentTranslate))
      }

      function x(e) {
        const t = this,
          s = t.touchEventsData,
          n = s.evCache.findIndex((t => t.pointerId === e.pointerId));
        if (n >= 0 && s.evCache.splice(n, 1), ["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(e.type) && (!["pointercancel", "contextmenu"].includes(e.type) || !t.browser.isSafari && !t.browser.isWebView)) return;
        const {
          params: i,
          touches: o,
          rtlTranslate: a,
          slidesGrid: l,
          enabled: c
        } = t;
        if (!c) return;
        if (!i.simulateTouch && "mouse" === e.pointerType) return;
        let d = e;
        if (d.originalEvent && (d = d.originalEvent), s.allowTouchCallbacks && t.emit("touchEnd", d), s.allowTouchCallbacks = !1, !s.isTouched) return s.isMoved && i.grabCursor && t.setGrabCursor(!1), s.isMoved = !1, void(s.startMoving = !1);
        i.grabCursor && s.isMoved && s.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
        const u = (0, r.d)(),
          p = u - s.touchStartTime;
        if (t.allowClick) {
          const e = d.path || d.composedPath && d.composedPath();
          t.updateClickedSlide(e && e[0] || d.target, e), t.emit("tap click", d), p < 300 && u - s.lastClickTime < 300 && t.emit("doubleTap doubleClick", d)
        }
        if (s.lastClickTime = (0, r.d)(), (0, r.n)((() => {
            t.destroyed || (t.allowClick = !0)
          })), !s.isTouched || !s.isMoved || !t.swipeDirection || 0 === o.diff || s.currentTranslate === s.startTranslate) return s.isTouched = !1, s.isMoved = !1, void(s.startMoving = !1);
        let h;
        if (s.isTouched = !1, s.isMoved = !1, s.startMoving = !1, h = i.followFinger ? a ? t.translate : -t.translate : -s.currentTranslate, i.cssMode) return;
        if (i.freeMode && i.freeMode.enabled) return void t.freeMode.onTouchEnd({
          currentPos: h
        });
        let m = 0,
          f = t.slidesSizesGrid[0];
        for (let e = 0; e < l.length; e += e < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup) {
          const t = e < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
          void 0 !== l[e + t] ? h >= l[e] && h < l[e + t] && (m = e, f = l[e + t] - l[e]) : h >= l[e] && (m = e, f = l[l.length - 1] - l[l.length - 2])
        }
        let g = null,
          v = null;
        i.rewind && (t.isBeginning ? v = i.virtual && i.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (g = 0));
        const y = (h - l[m]) / f,
          x = m < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
        if (p > i.longSwipesMs) {
          if (!i.longSwipes) return void t.slideTo(t.activeIndex);
          "next" === t.swipeDirection && (y >= i.longSwipesRatio ? t.slideTo(i.rewind && t.isEnd ? g : m + x) : t.slideTo(m)), "prev" === t.swipeDirection && (y > 1 - i.longSwipesRatio ? t.slideTo(m + x) : null !== v && y < 0 && Math.abs(y) > i.longSwipesRatio ? t.slideTo(v) : t.slideTo(m))
        } else {
          if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
          !t.navigation || d.target !== t.navigation.nextEl && d.target !== t.navigation.prevEl ? ("next" === t.swipeDirection && t.slideTo(null !== g ? g : m + x), "prev" === t.swipeDirection && t.slideTo(null !== v ? v : m)) : d.target === t.navigation.nextEl ? t.slideTo(m + x) : t.slideTo(m)
        }
      }

      function b() {
        const e = this,
          {
            params: t,
            el: s
          } = e;
        if (s && 0 === s.offsetWidth) return;
        t.breakpoints && e.setBreakpoint();
        const {
          allowSlideNext: n,
          allowSlidePrev: i,
          snapGrid: r
        } = e, o = e.virtual && e.params.virtual.enabled;
        e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses();
        const a = o && t.loop;
        !("auto" === t.slidesPerView || t.slidesPerView > 1) || !e.isEnd || e.isBeginning || e.params.centeredSlides || a ? e.params.loop && !o ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0) : e.slideTo(e.slides.length - 1, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && (clearTimeout(e.autoplay.resizeTimeout), e.autoplay.resizeTimeout = setTimeout((() => {
          e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume()
        }), 500)), e.allowSlidePrev = i, e.allowSlideNext = n, e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow()
      }

      function w(e) {
        const t = this;
        t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())))
      }

      function S() {
        const e = this,
          {
            wrapperEl: t,
            rtlTranslate: s,
            enabled: n
          } = e;
        if (!n) return;
        let i;
        e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
        const r = e.maxTranslate() - e.minTranslate();
        i = 0 === r ? 0 : (e.translate - e.minTranslate()) / r, i !== e.progress && e.updateProgress(s ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
      }

      function T(e) {
        const t = this;
        u(t, e.target), t.params.cssMode || "auto" !== t.params.slidesPerView && !t.params.autoHeight || t.update()
      }
      let E = !1;

      function P() {}
      const C = (e, t) => {
          const s = (0, i.g)(),
            {
              params: n,
              el: r,
              wrapperEl: o,
              device: a
            } = e,
            l = !!n.nested,
            c = "on" === t ? "addEventListener" : "removeEventListener",
            d = t;
          r[c]("pointerdown", e.onTouchStart, {
            passive: !1
          }), s[c]("pointermove", e.onTouchMove, {
            passive: !1,
            capture: l
          }), s[c]("pointerup", e.onTouchEnd, {
            passive: !0
          }), s[c]("pointercancel", e.onTouchEnd, {
            passive: !0
          }), s[c]("pointerout", e.onTouchEnd, {
            passive: !0
          }), s[c]("pointerleave", e.onTouchEnd, {
            passive: !0
          }), s[c]("contextmenu", e.onTouchEnd, {
            passive: !0
          }), (n.preventClicks || n.preventClicksPropagation) && r[c]("click", e.onClick, !0), n.cssMode && o[c]("scroll", e.onScroll), n.updateOnWindowResize ? e[d](a.ios || a.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", b, !0) : e[d]("observerUpdate", b, !0), r[c]("load", e.onLoad, {
            capture: !0
          })
        },
        M = (e, t) => e.grid && t.grid && t.grid.rows > 1;
      var A = {
        init: !0,
        direction: "horizontal",
        oneWayMovement: !1,
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        enabled: !0,
        focusableElements: "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 5,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: .85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        loop: !1,
        loopedSlides: null,
        loopPreventsSliding: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideActiveClass: "swiper-slide-active",
        slideVisibleClass: "swiper-slide-visible",
        slideNextClass: "swiper-slide-next",
        slidePrevClass: "swiper-slide-prev",
        wrapperClass: "swiper-wrapper",
        lazyPreloaderClass: "swiper-lazy-preloader",
        lazyPreloadPrevNext: 0,
        runCallbacksOnInit: !0,
        _emitClasses: !1
      };

      function L(e, t) {
        return function(s) {
          void 0 === s && (s = {});
          const n = Object.keys(s)[0],
            i = s[n];
          "object" == typeof i && null !== i ? (!0 === e[n] && (e[n] = {
            enabled: !0
          }), "navigation" === n && e[n] && e[n].enabled && !e[n].prevEl && !e[n].nextEl && (e[n].auto = !0), ["pagination", "scrollbar"].indexOf(n) >= 0 && e[n] && e[n].enabled && !e[n].el && (e[n].auto = !0), n in e && "enabled" in i ? ("object" != typeof e[n] || "enabled" in e[n] || (e[n].enabled = !0), e[n] || (e[n] = {
            enabled: !1
          }), (0, r.q)(t, s)) : (0, r.q)(t, s)) : (0, r.q)(t, s)
        }
      }
      const k = {
          eventsEmitter: d,
          update: m,
          translate: {
            getTranslate: function(e) {
              void 0 === e && (e = this.isHorizontal() ? "x" : "y");
              const {
                params: t,
                rtlTranslate: s,
                translate: n,
                wrapperEl: i
              } = this;
              if (t.virtualTranslate) return s ? -n : n;
              if (t.cssMode) return n;
              let o = (0, r.h)(i, e);
              return o += this.cssOverflowAdjustment(), s && (o = -o), o || 0
            },
            setTranslate: function(e, t) {
              const s = this,
                {
                  rtlTranslate: n,
                  params: i,
                  wrapperEl: r,
                  progress: o
                } = s;
              let a, l = 0,
                c = 0;
              s.isHorizontal() ? l = n ? -e : e : c = e, i.roundLengths && (l = Math.floor(l), c = Math.floor(c)), s.previousTranslate = s.translate, s.translate = s.isHorizontal() ? l : c, i.cssMode ? r[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -l : -c : i.virtualTranslate || (s.isHorizontal() ? l -= s.cssOverflowAdjustment() : c -= s.cssOverflowAdjustment(), r.style.transform = `translate3d(${l}px, ${c}px, 0px)`);
              const d = s.maxTranslate() - s.minTranslate();
              a = 0 === d ? 0 : (e - s.minTranslate()) / d, a !== o && s.updateProgress(e), s.emit("setTranslate", s.translate, t)
            },
            minTranslate: function() {
              return -this.snapGrid[0]
            },
            maxTranslate: function() {
              return -this.snapGrid[this.snapGrid.length - 1]
            },
            translateTo: function(e, t, s, n, i) {
              void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), void 0 === n && (n = !0);
              const o = this,
                {
                  params: a,
                  wrapperEl: l
                } = o;
              if (o.animating && a.preventInteractionOnTransition) return !1;
              const c = o.minTranslate(),
                d = o.maxTranslate();
              let u;
              if (u = n && e > c ? c : n && e < d ? d : e, o.updateProgress(u), a.cssMode) {
                const e = o.isHorizontal();
                if (0 === t) l[e ? "scrollLeft" : "scrollTop"] = -u;
                else {
                  if (!o.support.smoothScroll) return (0, r.p)({
                    swiper: o,
                    targetPosition: -u,
                    side: e ? "left" : "top"
                  }), !0;
                  l.scrollTo({
                    [e ? "left" : "top"]: -u,
                    behavior: "smooth"
                  })
                }
                return !0
              }
              return 0 === t ? (o.setTransition(0), o.setTranslate(u), s && (o.emit("beforeTransitionStart", t, i), o.emit("transitionEnd"))) : (o.setTransition(t), o.setTranslate(u), s && (o.emit("beforeTransitionStart", t, i), o.emit("transitionStart")), o.animating || (o.animating = !0, o.onTranslateToWrapperTransitionEnd || (o.onTranslateToWrapperTransitionEnd = function(e) {
                o && !o.destroyed && e.target === this && (o.wrapperEl.removeEventListener("transitionend", o.onTranslateToWrapperTransitionEnd), o.onTranslateToWrapperTransitionEnd = null, delete o.onTranslateToWrapperTransitionEnd, s && o.emit("transitionEnd"))
              }), o.wrapperEl.addEventListener("transitionend", o.onTranslateToWrapperTransitionEnd))), !0
            }
          },
          transition: {
            setTransition: function(e, t) {
              const s = this;
              s.params.cssMode || (s.wrapperEl.style.transitionDuration = `${e}ms`, s.wrapperEl.style.transitionDelay = 0 === e ? "0ms" : ""), s.emit("setTransition", e, t)
            },
            transitionStart: function(e, t) {
              void 0 === e && (e = !0);
              const s = this,
                {
                  params: n
                } = s;
              n.cssMode || (n.autoHeight && s.updateAutoHeight(), f({
                swiper: s,
                runCallbacks: e,
                direction: t,
                step: "Start"
              }))
            },
            transitionEnd: function(e, t) {
              void 0 === e && (e = !0);
              const s = this,
                {
                  params: n
                } = s;
              s.animating = !1, n.cssMode || (s.setTransition(0), f({
                swiper: s,
                runCallbacks: e,
                direction: t,
                step: "End"
              }))
            }
          },
          slide: g,
          loop: {
            loopCreate: function(e) {
              const t = this,
                {
                  params: s,
                  slidesEl: n
                } = t;
              !s.loop || t.virtual && t.params.virtual.enabled || ((0, r.e)(n, `.${s.slideClass}, swiper-slide`).forEach(((e, t) => {
                e.setAttribute("data-swiper-slide-index", t)
              })), t.loopFix({
                slideRealIndex: e,
                direction: s.centeredSlides ? void 0 : "next"
              }))
            },
            loopFix: function(e) {
              let {
                slideRealIndex: t,
                slideTo: s = !0,
                direction: n,
                setTranslate: i,
                activeSlideIndex: r,
                byController: o,
                byMousewheel: a
              } = void 0 === e ? {} : e;
              const l = this;
              if (!l.params.loop) return;
              l.emit("beforeLoopFix");
              const {
                slides: c,
                allowSlidePrev: d,
                allowSlideNext: u,
                slidesEl: p,
                params: h
              } = l;
              if (l.allowSlidePrev = !0, l.allowSlideNext = !0, l.virtual && h.virtual.enabled) return s && (h.centeredSlides || 0 !== l.snapIndex ? h.centeredSlides && l.snapIndex < h.slidesPerView ? l.slideTo(l.virtual.slides.length + l.snapIndex, 0, !1, !0) : l.snapIndex === l.snapGrid.length - 1 && l.slideTo(l.virtual.slidesBefore, 0, !1, !0) : l.slideTo(l.virtual.slides.length, 0, !1, !0)), l.allowSlidePrev = d, l.allowSlideNext = u, void l.emit("loopFix");
              const m = "auto" === h.slidesPerView ? l.slidesPerViewDynamic() : Math.ceil(parseFloat(h.slidesPerView, 10));
              let f = h.loopedSlides || m;
              f % h.slidesPerGroup != 0 && (f += h.slidesPerGroup - f % h.slidesPerGroup), l.loopedSlides = f;
              const g = [],
                v = [];
              let y = l.activeIndex;
              void 0 === r ? r = l.getSlideIndex(l.slides.filter((e => e.classList.contains(h.slideActiveClass)))[0]) : y = r;
              const x = "next" === n || !n,
                b = "prev" === n || !n;
              let w = 0,
                S = 0;
              if (r < f) {
                w = Math.max(f - r, h.slidesPerGroup);
                for (let e = 0; e < f - r; e += 1) {
                  const t = e - Math.floor(e / c.length) * c.length;
                  g.push(c.length - t - 1)
                }
              } else if (r > l.slides.length - 2 * f) {
                S = Math.max(r - (l.slides.length - 2 * f), h.slidesPerGroup);
                for (let e = 0; e < S; e += 1) {
                  const t = e - Math.floor(e / c.length) * c.length;
                  v.push(t)
                }
              }
              if (b && g.forEach((e => {
                  l.slides[e].swiperLoopMoveDOM = !0, p.prepend(l.slides[e]), l.slides[e].swiperLoopMoveDOM = !1
                })), x && v.forEach((e => {
                  l.slides[e].swiperLoopMoveDOM = !0, p.append(l.slides[e]), l.slides[e].swiperLoopMoveDOM = !1
                })), l.recalcSlides(), "auto" === h.slidesPerView && l.updateSlides(), h.watchSlidesProgress && l.updateSlidesOffset(), s)
                if (g.length > 0 && b)
                  if (void 0 === t) {
                    const e = l.slidesGrid[y],
                      t = l.slidesGrid[y + w] - e;
                    a ? l.setTranslate(l.translate - t) : (l.slideTo(y + w, 0, !1, !0), i && (l.touches[l.isHorizontal() ? "startX" : "startY"] += t, l.touchEventsData.currentTranslate = l.translate))
                  } else i && (l.slideToLoop(t, 0, !1, !0), l.touchEventsData.currentTranslate = l.translate);
              else if (v.length > 0 && x)
                if (void 0 === t) {
                  const e = l.slidesGrid[y],
                    t = l.slidesGrid[y - S] - e;
                  a ? l.setTranslate(l.translate - t) : (l.slideTo(y - S, 0, !1, !0), i && (l.touches[l.isHorizontal() ? "startX" : "startY"] += t, l.touchEventsData.currentTranslate = l.translate))
                } else l.slideToLoop(t, 0, !1, !0);
              if (l.allowSlidePrev = d, l.allowSlideNext = u, l.controller && l.controller.control && !o) {
                const e = {
                  slideRealIndex: t,
                  direction: n,
                  setTranslate: i,
                  activeSlideIndex: r,
                  byController: !0
                };
                Array.isArray(l.controller.control) ? l.controller.control.forEach((t => {
                  !t.destroyed && t.params.loop && t.loopFix({
                    ...e,
                    slideTo: t.params.slidesPerView === h.slidesPerView && s
                  })
                })) : l.controller.control instanceof l.constructor && l.controller.control.params.loop && l.controller.control.loopFix({
                  ...e,
                  slideTo: l.controller.control.params.slidesPerView === h.slidesPerView && s
                })
              }
              l.emit("loopFix")
            },
            loopDestroy: function() {
              const e = this,
                {
                  params: t,
                  slidesEl: s
                } = e;
              if (!t.loop || e.virtual && e.params.virtual.enabled) return;
              e.recalcSlides();
              const n = [];
              e.slides.forEach((e => {
                const t = void 0 === e.swiperSlideIndex ? 1 * e.getAttribute("data-swiper-slide-index") : e.swiperSlideIndex;
                n[t] = e
              })), e.slides.forEach((e => {
                e.removeAttribute("data-swiper-slide-index")
              })), n.forEach((e => {
                s.append(e)
              })), e.recalcSlides(), e.slideTo(e.realIndex, 0)
            }
          },
          grabCursor: {
            setGrabCursor: function(e) {
              const t = this;
              if (!t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
              const s = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
              t.isElement && (t.__preventObserver__ = !0), s.style.cursor = "move", s.style.cursor = e ? "grabbing" : "grab", t.isElement && requestAnimationFrame((() => {
                t.__preventObserver__ = !1
              }))
            },
            unsetGrabCursor: function() {
              const e = this;
              e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.isElement && (e.__preventObserver__ = !0), e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "", e.isElement && requestAnimationFrame((() => {
                e.__preventObserver__ = !1
              })))
            }
          },
          events: {
            attachEvents: function() {
              const e = this,
                t = (0, i.g)(),
                {
                  params: s
                } = e;
              e.onTouchStart = v.bind(e), e.onTouchMove = y.bind(e), e.onTouchEnd = x.bind(e), s.cssMode && (e.onScroll = S.bind(e)), e.onClick = w.bind(e), e.onLoad = T.bind(e), E || (t.addEventListener("touchstart", P), E = !0), C(e, "on")
            },
            detachEvents: function() {
              C(this, "off")
            }
          },
          breakpoints: {
            setBreakpoint: function() {
              const e = this,
                {
                  realIndex: t,
                  initialized: s,
                  params: n,
                  el: i
                } = e,
                o = n.breakpoints;
              if (!o || o && 0 === Object.keys(o).length) return;
              const a = e.getBreakpoint(o, e.params.breakpointsBase, e.el);
              if (!a || e.currentBreakpoint === a) return;
              const l = (a in o ? o[a] : void 0) || e.originalParams,
                c = M(e, n),
                d = M(e, l),
                u = n.enabled;
              c && !d ? (i.classList.remove(`${n.containerModifierClass}grid`, `${n.containerModifierClass}grid-column`), e.emitContainerClasses()) : !c && d && (i.classList.add(`${n.containerModifierClass}grid`), (l.grid.fill && "column" === l.grid.fill || !l.grid.fill && "column" === n.grid.fill) && i.classList.add(`${n.containerModifierClass}grid-column`), e.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach((t => {
                if (void 0 === l[t]) return;
                const s = n[t] && n[t].enabled,
                  i = l[t] && l[t].enabled;
                s && !i && e[t].disable(), !s && i && e[t].enable()
              }));
              const p = l.direction && l.direction !== n.direction,
                h = n.loop && (l.slidesPerView !== n.slidesPerView || p),
                m = n.loop;
              p && s && e.changeDirection(), (0, r.q)(e.params, l);
              const f = e.params.enabled,
                g = e.params.loop;
              Object.assign(e, {
                allowTouchMove: e.params.allowTouchMove,
                allowSlideNext: e.params.allowSlideNext,
                allowSlidePrev: e.params.allowSlidePrev
              }), u && !f ? e.disable() : !u && f && e.enable(), e.currentBreakpoint = a, e.emit("_beforeBreakpoint", l), s && (h ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides()) : !m && g ? (e.loopCreate(t), e.updateSlides()) : m && !g && e.loopDestroy()), e.emit("breakpoint", l)
            },
            getBreakpoint: function(e, t, s) {
              if (void 0 === t && (t = "window"), !e || "container" === t && !s) return;
              let n = !1;
              const r = (0, i.a)(),
                o = "window" === t ? r.innerHeight : s.clientHeight,
                a = Object.keys(e).map((e => {
                  if ("string" == typeof e && 0 === e.indexOf("@")) {
                    const t = parseFloat(e.substr(1));
                    return {
                      value: o * t,
                      point: e
                    }
                  }
                  return {
                    value: e,
                    point: e
                  }
                }));
              a.sort(((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10)));
              for (let e = 0; e < a.length; e += 1) {
                const {
                  point: i,
                  value: o
                } = a[e];
                "window" === t ? r.matchMedia(`(min-width: ${o}px)`).matches && (n = i) : o <= s.clientWidth && (n = i)
              }
              return n || "max"
            }
          },
          checkOverflow: {
            checkOverflow: function() {
              const e = this,
                {
                  isLocked: t,
                  params: s
                } = e,
                {
                  slidesOffsetBefore: n
                } = s;
              if (n) {
                const t = e.slides.length - 1,
                  s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * n;
                e.isLocked = e.size > s
              } else e.isLocked = 1 === e.snapGrid.length;
              !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
            }
          },
          classes: {
            addClasses: function() {
              const e = this,
                {
                  classNames: t,
                  params: s,
                  rtl: n,
                  el: i,
                  device: r
                } = e,
                o = function(e, t) {
                  const s = [];
                  return e.forEach((e => {
                    "object" == typeof e ? Object.keys(e).forEach((n => {
                      e[n] && s.push(t + n)
                    })) : "string" == typeof e && s.push(t + e)
                  })), s
                }(["initialized", s.direction, {
                  "free-mode": e.params.freeMode && s.freeMode.enabled
                }, {
                  autoheight: s.autoHeight
                }, {
                  rtl: n
                }, {
                  grid: s.grid && s.grid.rows > 1
                }, {
                  "grid-column": s.grid && s.grid.rows > 1 && "column" === s.grid.fill
                }, {
                  android: r.android
                }, {
                  ios: r.ios
                }, {
                  "css-mode": s.cssMode
                }, {
                  centered: s.cssMode && s.centeredSlides
                }, {
                  "watch-progress": s.watchSlidesProgress
                }], s.containerModifierClass);
              t.push(...o), i.classList.add(...t), e.emitContainerClasses()
            },
            removeClasses: function() {
              const {
                el: e,
                classNames: t
              } = this;
              e.classList.remove(...t), this.emitContainerClasses()
            }
          }
        },
        D = {};
      class O {
        constructor() {
          let e, t;
          for (var s = arguments.length, n = new Array(s), o = 0; o < s; o++) n[o] = arguments[o];
          1 === n.length && n[0].constructor && "Object" === Object.prototype.toString.call(n[0]).slice(8, -1) ? t = n[0] : [e, t] = n, t || (t = {}), t = (0, r.q)({}, t), e && !t.el && (t.el = e);
          const d = (0, i.g)();
          if (t.el && "string" == typeof t.el && d.querySelectorAll(t.el).length > 1) {
            const e = [];
            return d.querySelectorAll(t.el).forEach((s => {
              const n = (0, r.q)({}, t, {
                el: s
              });
              e.push(new O(n))
            })), e
          }
          const u = this;
          var p;
          u.__swiper__ = !0, u.support = c(), u.device = (void 0 === (p = {
            userAgent: t.userAgent
          }) && (p = {}), a || (a = function(e) {
            let {
              userAgent: t
            } = void 0 === e ? {} : e;
            const s = c(),
              n = (0, i.a)(),
              r = n.navigator.platform,
              o = t || n.navigator.userAgent,
              a = {
                ios: !1,
                android: !1
              },
              l = n.screen.width,
              d = n.screen.height,
              u = o.match(/(Android);?[\s\/]+([\d.]+)?/);
            let p = o.match(/(iPad).*OS\s([\d_]+)/);
            const h = o.match(/(iPod)(.*OS\s([\d_]+))?/),
              m = !p && o.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
              f = "Win32" === r;
            let g = "MacIntel" === r;
            return !p && g && s.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${l}x${d}`) >= 0 && (p = o.match(/(Version)\/([\d.]+)/), p || (p = [0, 1, "13_0_0"]), g = !1), u && !f && (a.os = "android", a.android = !0), (p || m || h) && (a.os = "ios", a.ios = !0), a
          }(p)), a), u.browser = (l || (l = function() {
            const e = (0, i.a)();
            let t = !1;

            function s() {
              const t = e.navigator.userAgent.toLowerCase();
              return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
            }
            if (s()) {
              const s = String(e.navigator.userAgent);
              if (s.includes("Version/")) {
                const [e, n] = s.split("Version/")[1].split(" ")[0].split(".").map((e => Number(e)));
                t = e < 16 || 16 === e && n < 2
              }
            }
            return {
              isSafari: t || s(),
              needPerspectiveFix: t,
              isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
            }
          }()), l), u.eventsListeners = {}, u.eventsAnyListeners = [], u.modules = [...u.__modules__], t.modules && Array.isArray(t.modules) && u.modules.push(...t.modules);
          const h = {};
          u.modules.forEach((e => {
            e({
              params: t,
              swiper: u,
              extendParams: L(t, h),
              on: u.on.bind(u),
              once: u.once.bind(u),
              off: u.off.bind(u),
              emit: u.emit.bind(u)
            })
          }));
          const m = (0, r.q)({}, A, h);
          return u.params = (0, r.q)({}, m, D, t), u.originalParams = (0, r.q)({}, u.params), u.passedParams = (0, r.q)({}, t), u.params && u.params.on && Object.keys(u.params.on).forEach((e => {
            u.on(e, u.params.on[e])
          })), u.params && u.params.onAny && u.onAny(u.params.onAny), Object.assign(u, {
            enabled: u.params.enabled,
            el: e,
            classNames: [],
            slides: [],
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: () => "horizontal" === u.params.direction,
            isVertical: () => "vertical" === u.params.direction,
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            cssOverflowAdjustment() {
              return Math.trunc(this.translate / 2 ** 23) * 2 ** 23
            },
            allowSlideNext: u.params.allowSlideNext,
            allowSlidePrev: u.params.allowSlidePrev,
            touchEventsData: {
              isTouched: void 0,
              isMoved: void 0,
              allowTouchCallbacks: void 0,
              touchStartTime: void 0,
              isScrolling: void 0,
              currentTranslate: void 0,
              startTranslate: void 0,
              allowThresholdMove: void 0,
              focusableElements: u.params.focusableElements,
              lastClickTime: 0,
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              startMoving: void 0,
              evCache: []
            },
            allowClick: !0,
            allowTouchMove: u.params.allowTouchMove,
            touches: {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0
            },
            imagesToLoad: [],
            imagesLoaded: 0
          }), u.emit("_swiper"), u.params.init && u.init(), u
        }
        getSlideIndex(e) {
          const {
            slidesEl: t,
            params: s
          } = this, n = (0, r.e)(t, `.${s.slideClass}, swiper-slide`), i = (0, r.g)(n[0]);
          return (0, r.g)(e) - i
        }
        getSlideIndexByData(e) {
          return this.getSlideIndex(this.slides.filter((t => 1 * t.getAttribute("data-swiper-slide-index") === e))[0])
        }
        recalcSlides() {
          const {
            slidesEl: e,
            params: t
          } = this;
          this.slides = (0, r.e)(e, `.${t.slideClass}, swiper-slide`)
        }
        enable() {
          const e = this;
          e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"))
        }
        disable() {
          const e = this;
          e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"))
        }
        setProgress(e, t) {
          const s = this;
          e = Math.min(Math.max(e, 0), 1);
          const n = s.minTranslate(),
            i = (s.maxTranslate() - n) * e + n;
          s.translateTo(i, void 0 === t ? 0 : t), s.updateActiveIndex(), s.updateSlidesClasses()
        }
        emitContainerClasses() {
          const e = this;
          if (!e.params._emitClasses || !e.el) return;
          const t = e.el.className.split(" ").filter((t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass)));
          e.emit("_containerClasses", t.join(" "))
        }
        getSlideClasses(e) {
          const t = this;
          return t.destroyed ? "" : e.className.split(" ").filter((e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass))).join(" ")
        }
        emitSlidesClasses() {
          const e = this;
          if (!e.params._emitClasses || !e.el) return;
          const t = [];
          e.slides.forEach((s => {
            const n = e.getSlideClasses(s);
            t.push({
              slideEl: s,
              classNames: n
            }), e.emit("_slideClass", s, n)
          })), e.emit("_slideClasses", t)
        }
        slidesPerViewDynamic(e, t) {
          void 0 === e && (e = "current"), void 0 === t && (t = !1);
          const {
            params: s,
            slides: n,
            slidesGrid: i,
            slidesSizesGrid: r,
            size: o,
            activeIndex: a
          } = this;
          let l = 1;
          if ("number" == typeof s.slidesPerView) return s.slidesPerView;
          if (s.centeredSlides) {
            let e, t = n[a] ? n[a].swiperSlideSize : 0;
            for (let s = a + 1; s < n.length; s += 1) n[s] && !e && (t += n[s].swiperSlideSize, l += 1, t > o && (e = !0));
            for (let s = a - 1; s >= 0; s -= 1) n[s] && !e && (t += n[s].swiperSlideSize, l += 1, t > o && (e = !0))
          } else if ("current" === e)
            for (let e = a + 1; e < n.length; e += 1)(t ? i[e] + r[e] - i[a] < o : i[e] - i[a] < o) && (l += 1);
          else
            for (let e = a - 1; e >= 0; e -= 1) i[a] - i[e] < o && (l += 1);
          return l
        }
        update() {
          const e = this;
          if (!e || e.destroyed) return;
          const {
            snapGrid: t,
            params: s
          } = e;

          function n() {
            const t = e.rtlTranslate ? -1 * e.translate : e.translate,
              s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
            e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses()
          }
          let i;
          if (s.breakpoints && e.setBreakpoint(), [...e.el.querySelectorAll('[loading="lazy"]')].forEach((t => {
              t.complete && u(e, t)
            })), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), s.freeMode && s.freeMode.enabled && !s.cssMode) n(), s.autoHeight && e.updateAutoHeight();
          else {
            if (("auto" === s.slidesPerView || s.slidesPerView > 1) && e.isEnd && !s.centeredSlides) {
              const t = e.virtual && s.virtual.enabled ? e.virtual.slides : e.slides;
              i = e.slideTo(t.length - 1, 0, !1, !0)
            } else i = e.slideTo(e.activeIndex, 0, !1, !0);
            i || n()
          }
          s.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
        }
        changeDirection(e, t) {
          void 0 === t && (t = !0);
          const s = this,
            n = s.params.direction;
          return e || (e = "horizontal" === n ? "vertical" : "horizontal"), e === n || "horizontal" !== e && "vertical" !== e || (s.el.classList.remove(`${s.params.containerModifierClass}${n}`), s.el.classList.add(`${s.params.containerModifierClass}${e}`), s.emitContainerClasses(), s.params.direction = e, s.slides.forEach((t => {
            "vertical" === e ? t.style.width = "" : t.style.height = ""
          })), s.emit("changeDirection"), t && s.update()), s
        }
        changeLanguageDirection(e) {
          const t = this;
          t.rtl && "rtl" === e || !t.rtl && "ltr" === e || (t.rtl = "rtl" === e, t.rtlTranslate = "horizontal" === t.params.direction && t.rtl, t.rtl ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`), t.el.dir = "rtl") : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`), t.el.dir = "ltr"), t.update())
        }
        mount(e) {
          const t = this;
          if (t.mounted) return !0;
          let s = e || t.params.el;
          if ("string" == typeof s && (s = document.querySelector(s)), !s) return !1;
          s.swiper = t, s.parentNode && s.parentNode.host && "SWIPER-CONTAINER" === s.parentNode.host.nodeName && (t.isElement = !0);
          const n = () => `.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;
          let i = s && s.shadowRoot && s.shadowRoot.querySelector ? s.shadowRoot.querySelector(n()) : (0, r.e)(s, n())[0];
          return !i && t.params.createElements && (i = (0, r.c)("div", t.params.wrapperClass), s.append(i), (0, r.e)(s, `.${t.params.slideClass}`).forEach((e => {
            i.append(e)
          }))), Object.assign(t, {
            el: s,
            wrapperEl: i,
            slidesEl: t.isElement && !s.parentNode.host.slideSlots ? s.parentNode.host : i,
            hostEl: t.isElement ? s.parentNode.host : s,
            mounted: !0,
            rtl: "rtl" === s.dir.toLowerCase() || "rtl" === (0, r.l)(s, "direction"),
            rtlTranslate: "horizontal" === t.params.direction && ("rtl" === s.dir.toLowerCase() || "rtl" === (0, r.l)(s, "direction")),
            wrongRTL: "-webkit-box" === (0, r.l)(i, "display")
          }), !0
        }
        init(e) {
          const t = this;
          if (t.initialized) return t;
          if (!1 === t.mount(e)) return t;
          t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.params.loop && t.loopCreate(), t.attachEvents();
          const s = [...t.el.querySelectorAll('[loading="lazy"]')];
          return t.isElement && s.push(...t.hostEl.querySelectorAll('[loading="lazy"]')), s.forEach((e => {
            e.complete ? u(t, e) : e.addEventListener("load", (e => {
              u(t, e.target)
            }))
          })), h(t), t.initialized = !0, h(t), t.emit("init"), t.emit("afterInit"), t
        }
        destroy(e, t) {
          void 0 === e && (e = !0), void 0 === t && (t = !0);
          const s = this,
            {
              params: n,
              el: i,
              wrapperEl: o,
              slides: a
            } = s;
          return void 0 === s.params || s.destroyed || (s.emit("beforeDestroy"), s.initialized = !1, s.detachEvents(), n.loop && s.loopDestroy(), t && (s.removeClasses(), i.removeAttribute("style"), o.removeAttribute("style"), a && a.length && a.forEach((e => {
            e.classList.remove(n.slideVisibleClass, n.slideActiveClass, n.slideNextClass, n.slidePrevClass), e.removeAttribute("style"), e.removeAttribute("data-swiper-slide-index")
          }))), s.emit("destroy"), Object.keys(s.eventsListeners).forEach((e => {
            s.off(e)
          })), !1 !== e && (s.el.swiper = null, (0, r.r)(s)), s.destroyed = !0), null
        }
        static extendDefaults(e) {
          (0, r.q)(D, e)
        }
        static get extendedDefaults() {
          return D
        }
        static get defaults() {
          return A
        }
        static installModule(e) {
          O.prototype.__modules__ || (O.prototype.__modules__ = []);
          const t = O.prototype.__modules__;
          "function" == typeof e && t.indexOf(e) < 0 && t.push(e)
        }
        static use(e) {
          return Array.isArray(e) ? (e.forEach((e => O.installModule(e))), O) : (O.installModule(e), O)
        }
      }
      Object.keys(k).forEach((e => {
        Object.keys(k[e]).forEach((t => {
          O.prototype[t] = k[e][t]
        }))
      })), O.use([function(e) {
        let {
          swiper: t,
          on: s,
          emit: n
        } = e;
        const r = (0, i.a)();
        let o = null,
          a = null;
        const l = () => {
            t && !t.destroyed && t.initialized && (n("beforeResize"), n("resize"))
          },
          c = () => {
            t && !t.destroyed && t.initialized && n("orientationchange")
          };
        s("init", (() => {
          t.params.resizeObserver && void 0 !== r.ResizeObserver ? t && !t.destroyed && t.initialized && (o = new ResizeObserver((e => {
            a = r.requestAnimationFrame((() => {
              const {
                width: s,
                height: n
              } = t;
              let i = s,
                r = n;
              e.forEach((e => {
                let {
                  contentBoxSize: s,
                  contentRect: n,
                  target: o
                } = e;
                o && o !== t.el || (i = n ? n.width : (s[0] || s).inlineSize, r = n ? n.height : (s[0] || s).blockSize)
              })), i === s && r === n || l()
            }))
          })), o.observe(t.el)) : (r.addEventListener("resize", l), r.addEventListener("orientationchange", c))
        })), s("destroy", (() => {
          a && r.cancelAnimationFrame(a), o && o.unobserve && t.el && (o.unobserve(t.el), o = null), r.removeEventListener("resize", l), r.removeEventListener("orientationchange", c)
        }))
      }, function(e) {
        let {
          swiper: t,
          extendParams: s,
          on: n,
          emit: o
        } = e;
        const a = [],
          l = (0, i.a)(),
          c = function(e, s) {
            void 0 === s && (s = {});
            const n = new(l.MutationObserver || l.WebkitMutationObserver)((e => {
              if (t.__preventObserver__) return;
              if (1 === e.length) return void o("observerUpdate", e[0]);
              const s = function() {
                o("observerUpdate", e[0])
              };
              l.requestAnimationFrame ? l.requestAnimationFrame(s) : l.setTimeout(s, 0)
            }));
            n.observe(e, {
              attributes: void 0 === s.attributes || s.attributes,
              childList: void 0 === s.childList || s.childList,
              characterData: void 0 === s.characterData || s.characterData
            }), a.push(n)
          };
        s({
          observer: !1,
          observeParents: !1,
          observeSlideChildren: !1
        }), n("init", (() => {
          if (t.params.observer) {
            if (t.params.observeParents) {
              const e = (0, r.a)(t.hostEl);
              for (let t = 0; t < e.length; t += 1) c(e[t])
            }
            c(t.hostEl, {
              childList: t.params.observeSlideChildren
            }), c(t.wrapperEl, {
              attributes: !1
            })
          }
        })), n("destroy", (() => {
          a.forEach((e => {
            e.disconnect()
          })), a.splice(0, a.length)
        }))
      }]);
      const V = ["eventsPrefix", "injectStyles", "injectStylesUrls", "modules", "init", "_direction", "oneWayMovement", "touchEventsTarget", "initialSlide", "_speed", "cssMode", "updateOnWindowResize", "resizeObserver", "nested", "focusableElements", "_enabled", "_width", "_height", "preventInteractionOnTransition", "userAgent", "url", "_edgeSwipeDetection", "_edgeSwipeThreshold", "_freeMode", "_autoHeight", "setWrapperSize", "virtualTranslate", "_effect", "breakpoints", "breakpointsBase", "_spaceBetween", "_slidesPerView", "maxBackfaceHiddenSlides", "_grid", "_slidesPerGroup", "_slidesPerGroupSkip", "_slidesPerGroupAuto", "_centeredSlides", "_centeredSlidesBounds", "_slidesOffsetBefore", "_slidesOffsetAfter", "normalizeSlideIndex", "_centerInsufficientSlides", "_watchOverflow", "roundLengths", "touchRatio", "touchAngle", "simulateTouch", "_shortSwipes", "_longSwipes", "longSwipesRatio", "longSwipesMs", "_followFinger", "allowTouchMove", "_threshold", "touchMoveStopPropagation", "touchStartPreventDefault", "touchStartForcePreventDefault", "touchReleaseOnEdges", "uniqueNavElements", "_resistance", "_resistanceRatio", "_watchSlidesProgress", "_grabCursor", "preventClicks", "preventClicksPropagation", "_slideToClickedSlide", "_loop", "loopedSlides", "loopPreventsSliding", "_rewind", "_allowSlidePrev", "_allowSlideNext", "_swipeHandler", "_noSwiping", "noSwipingClass", "noSwipingSelector", "passiveListeners", "containerModifierClass", "slideClass", "slideActiveClass", "slideVisibleClass", "slideNextClass", "slidePrevClass", "wrapperClass", "lazyPreloaderClass", "lazyPreloadPrevNext", "runCallbacksOnInit", "observer", "observeParents", "observeSlideChildren", "a11y", "_autoplay", "_controller", "coverflowEffect", "cubeEffect", "fadeEffect", "flipEffect", "creativeEffect", "cardsEffect", "hashNavigation", "history", "keyboard", "mousewheel", "_navigation", "_pagination", "parallax", "_scrollbar", "_thumbs", "virtual", "zoom", "control"];

      function I(e) {
        return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1) && !e.__swiper__
      }

      function R(e, t) {
        const s = ["__proto__", "constructor", "prototype"];
        Object.keys(t).filter((e => s.indexOf(e) < 0)).forEach((s => {
          void 0 === e[s] ? e[s] = t[s] : I(t[s]) && I(e[s]) && Object.keys(t[s]).length > 0 ? t[s].__swiper__ ? e[s] = t[s] : R(e[s], t[s]) : e[s] = t[s]
        }))
      }

      function B(e) {
        return void 0 === e && (e = {}), e.navigation && void 0 === e.navigation.nextEl && void 0 === e.navigation.prevEl
      }

      function j(e) {
        return void 0 === e && (e = {}), e.pagination && void 0 === e.pagination.el
      }

      function z(e) {
        return void 0 === e && (e = {}), e.scrollbar && void 0 === e.scrollbar.el
      }

      function F(e) {
        void 0 === e && (e = "");
        const t = e.split(" ").map((e => e.trim())).filter((e => !!e)),
          s = [];
        return t.forEach((e => {
          s.indexOf(e) < 0 && s.push(e)
        })), s.join(" ")
      }

      function $(e) {
        return void 0 === e && (e = ""), e ? e.includes("swiper-wrapper") ? e : `swiper-wrapper ${e}` : "swiper-wrapper"
      }

      function _() {
        return _ = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var s = arguments[t];
            for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
          }
          return e
        }, _.apply(this, arguments)
      }

      function N(e) {
        return e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide")
      }

      function W(e) {
        const t = [];
        return n.Children.toArray(e).forEach((e => {
          N(e) ? t.push(e) : e.props && e.props.children && W(e.props.children).forEach((e => t.push(e)))
        })), t
      }

      function G(e) {
        const t = [],
          s = {
            "container-start": [],
            "container-end": [],
            "wrapper-start": [],
            "wrapper-end": []
          };
        return n.Children.toArray(e).forEach((e => {
          if (N(e)) t.push(e);
          else if (e.props && e.props.slot && s[e.props.slot]) s[e.props.slot].push(e);
          else if (e.props && e.props.children) {
            const n = W(e.props.children);
            n.length > 0 ? n.forEach((e => t.push(e))) : s["container-end"].push(e)
          } else s["container-end"].push(e)
        })), {
          slides: t,
          slots: s
        }
      }

      function H(e, t) {
        return "undefined" == typeof window ? (0, n.useEffect)(e, t) : (0, n.useLayoutEffect)(e, t)
      }
      const q = (0, n.createContext)(null),
        U = (0, n.createContext)(null),
        X = (0, n.forwardRef)((function(e, t) {
          let {
            className: s,
            tag: i = "div",
            wrapperTag: r = "div",
            children: o,
            onSwiper: a,
            ...l
          } = void 0 === e ? {} : e, c = !1;
          const [d, u] = (0, n.useState)("swiper"), [p, h] = (0, n.useState)(null), [m, f] = (0, n.useState)(!1), g = (0, n.useRef)(!1), v = (0, n.useRef)(null), y = (0, n.useRef)(null), x = (0, n.useRef)(null), b = (0, n.useRef)(null), w = (0, n.useRef)(null), S = (0, n.useRef)(null), T = (0, n.useRef)(null), E = (0, n.useRef)(null), {
            params: P,
            passedParams: C,
            rest: M,
            events: L
          } = function(e, t) {
            void 0 === e && (e = {}), void 0 === t && (t = !0);
            const s = {
                on: {}
              },
              n = {},
              i = {};
            R(s, A), s._emitClasses = !0, s.init = !1;
            const r = {},
              o = V.map((e => e.replace(/_/, ""))),
              a = Object.assign({}, e);
            return Object.keys(a).forEach((a => {
              void 0 !== e[a] && (o.indexOf(a) >= 0 ? I(e[a]) ? (s[a] = {}, i[a] = {}, R(s[a], e[a]), R(i[a], e[a])) : (s[a] = e[a], i[a] = e[a]) : 0 === a.search(/on[A-Z]/) && "function" == typeof e[a] ? t ? n[`${a[2].toLowerCase()}${a.substr(3)}`] = e[a] : s.on[`${a[2].toLowerCase()}${a.substr(3)}`] = e[a] : r[a] = e[a])
            })), ["navigation", "pagination", "scrollbar"].forEach((e => {
              !0 === s[e] && (s[e] = {}), !1 === s[e] && delete s[e]
            })), {
              params: s,
              passedParams: i,
              rest: r,
              events: n
            }
          }(l), {
            slides: k,
            slots: D
          } = G(o), N = () => {
            f(!m)
          };
          Object.assign(P.on, {
            _containerClasses(e, t) {
              u(t)
            }
          });
          const W = () => {
            Object.assign(P.on, L), c = !0;
            const e = {
              ...P
            };
            if (delete e.wrapperClass, y.current = new O(e), y.current.virtual && y.current.params.virtual.enabled) {
              y.current.virtual.slides = k;
              const e = {
                cache: !1,
                slides: k,
                renderExternal: h,
                renderExternalUpdate: !1
              };
              R(y.current.params.virtual, e), R(y.current.originalParams.virtual, e)
            }
          };
          return v.current || W(), y.current && y.current.on("_beforeBreakpoint", N), (0, n.useEffect)((() => () => {
            y.current && y.current.off("_beforeBreakpoint", N)
          })), (0, n.useEffect)((() => {
            !g.current && y.current && (y.current.emitSlidesClasses(), g.current = !0)
          })), H((() => {
            if (t && (t.current = v.current), v.current) return y.current.destroyed && W(),
              function(e, t) {
                let {
                  el: s,
                  nextEl: n,
                  prevEl: i,
                  paginationEl: r,
                  scrollbarEl: o,
                  swiper: a
                } = e;
                B(t) && n && i && (a.params.navigation.nextEl = n, a.originalParams.navigation.nextEl = n, a.params.navigation.prevEl = i, a.originalParams.navigation.prevEl = i), j(t) && r && (a.params.pagination.el = r, a.originalParams.pagination.el = r), z(t) && o && (a.params.scrollbar.el = o, a.originalParams.scrollbar.el = o), a.init(s)
              }({
                el: v.current,
                nextEl: w.current,
                prevEl: S.current,
                paginationEl: T.current,
                scrollbarEl: E.current,
                swiper: y.current
              }, P), a && a(y.current), () => {
                y.current && !y.current.destroyed && y.current.destroy(!0, !1)
              }
          }), []), H((() => {
            !c && L && y.current && Object.keys(L).forEach((e => {
              y.current.on(e, L[e])
            }));
            const e = function(e, t, s, n, i) {
              const r = [];
              if (!t) return r;
              const o = e => {
                r.indexOf(e) < 0 && r.push(e)
              };
              if (s && n) {
                const e = n.map(i),
                  t = s.map(i);
                e.join("") !== t.join("") && o("children"), n.length !== s.length && o("children")
              }
              return V.filter((e => "_" === e[0])).map((e => e.replace(/_/, ""))).forEach((s => {
                if (s in e && s in t)
                  if (I(e[s]) && I(t[s])) {
                    const n = Object.keys(e[s]),
                      i = Object.keys(t[s]);
                    n.length !== i.length ? o(s) : (n.forEach((n => {
                      e[s][n] !== t[s][n] && o(s)
                    })), i.forEach((n => {
                      e[s][n] !== t[s][n] && o(s)
                    })))
                  } else e[s] !== t[s] && o(s)
              })), r
            }(C, x.current, k, b.current, (e => e.key));
            return x.current = C, b.current = k, e.length && y.current && !y.current.destroyed && function(e) {
              let {
                swiper: t,
                slides: s,
                passedParams: n,
                changedParams: i,
                nextEl: r,
                prevEl: o,
                scrollbarEl: a,
                paginationEl: l
              } = e;
              const c = i.filter((e => "children" !== e && "direction" !== e && "wrapperClass" !== e)),
                {
                  params: d,
                  pagination: u,
                  navigation: p,
                  scrollbar: h,
                  virtual: m,
                  thumbs: f
                } = t;
              let g, v, y, x, b, w, S, T;
              i.includes("thumbs") && n.thumbs && n.thumbs.swiper && d.thumbs && !d.thumbs.swiper && (g = !0), i.includes("controller") && n.controller && n.controller.control && d.controller && !d.controller.control && (v = !0), i.includes("pagination") && n.pagination && (n.pagination.el || l) && (d.pagination || !1 === d.pagination) && u && !u.el && (y = !0), i.includes("scrollbar") && n.scrollbar && (n.scrollbar.el || a) && (d.scrollbar || !1 === d.scrollbar) && h && !h.el && (x = !0), i.includes("navigation") && n.navigation && (n.navigation.prevEl || o) && (n.navigation.nextEl || r) && (d.navigation || !1 === d.navigation) && p && !p.prevEl && !p.nextEl && (b = !0);
              const E = e => {
                t[e] && (t[e].destroy(), "navigation" === e ? (t.isElement && (t[e].prevEl.remove(), t[e].nextEl.remove()), d[e].prevEl = void 0, d[e].nextEl = void 0, t[e].prevEl = void 0, t[e].nextEl = void 0) : (t.isElement && t[e].el.remove(), d[e].el = void 0, t[e].el = void 0))
              };
              i.includes("loop") && t.isElement && (d.loop && !n.loop ? w = !0 : !d.loop && n.loop ? S = !0 : T = !0), c.forEach((e => {
                if (I(d[e]) && I(n[e])) R(d[e], n[e]), "navigation" !== e && "pagination" !== e && "scrollbar" !== e || !("enabled" in n[e]) || n[e].enabled || E(e);
                else {
                  const t = n[e];
                  !0 !== t && !1 !== t || "navigation" !== e && "pagination" !== e && "scrollbar" !== e ? d[e] = n[e] : !1 === t && E(e)
                }
              })), c.includes("controller") && !v && t.controller && t.controller.control && d.controller && d.controller.control && (t.controller.control = d.controller.control), i.includes("children") && s && m && d.virtual.enabled && (m.slides = s, m.update(!0)), i.includes("children") && s && d.loop && (T = !0), g && f.init() && f.update(!0), v && (t.controller.control = d.controller.control), y && (!t.isElement || l && "string" != typeof l || (l = document.createElement("div"), l.classList.add("swiper-pagination"), l.part.add("pagination"), t.el.appendChild(l)), l && (d.pagination.el = l), u.init(), u.render(), u.update()), x && (!t.isElement || a && "string" != typeof a || (a = document.createElement("div"), a.classList.add("swiper-scrollbar"), a.part.add("scrollbar"), t.el.appendChild(a)), a && (d.scrollbar.el = a), h.init(), h.updateSize(), h.setTranslate()), b && (t.isElement && (r && "string" != typeof r || (r = document.createElement("div"), r.classList.add("swiper-button-next"), r.innerHTML = t.hostEl.constructor.nextButtonSvg, r.part.add("button-next"), t.el.appendChild(r)), o && "string" != typeof o || (o = document.createElement("div"), o.classList.add("swiper-button-prev"), o.innerHTML = t.hostEl.constructor.prevButtonSvg, o.part.add("button-prev"), t.el.appendChild(o))), r && (d.navigation.nextEl = r), o && (d.navigation.prevEl = o), p.init(), p.update()), i.includes("allowSlideNext") && (t.allowSlideNext = n.allowSlideNext), i.includes("allowSlidePrev") && (t.allowSlidePrev = n.allowSlidePrev), i.includes("direction") && t.changeDirection(n.direction, !1), (w || T) && t.loopDestroy(), (S || T) && t.loopCreate(), t.update()
            }({
              swiper: y.current,
              slides: k,
              passedParams: C,
              changedParams: e,
              nextEl: w.current,
              prevEl: S.current,
              scrollbarEl: E.current,
              paginationEl: T.current
            }), () => {
              L && y.current && Object.keys(L).forEach((e => {
                y.current.off(e, L[e])
              }))
            }
          })), H((() => {
            var e;
            !(e = y.current) || e.destroyed || !e.params.virtual || e.params.virtual && !e.params.virtual.enabled || (e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.parallax && e.params.parallax && e.params.parallax.enabled && e.parallax.setTranslate())
          }), [p]), n.createElement(i, _({
            ref: v,
            className: F(`${d}${s?` ${s}`:""}`)
          }, M), n.createElement(U.Provider, {
            value: y.current
          }, D["container-start"], n.createElement(r, {
            className: $(P.wrapperClass)
          }, D["wrapper-start"], P.virtual ? function(e, t, s) {
            if (!s) return null;
            const i = e => {
                let s = e;
                return e < 0 ? s = t.length + e : s >= t.length && (s -= t.length), s
              },
              r = e.isHorizontal() ? {
                [e.rtlTranslate ? "right" : "left"]: `${s.offset}px`
              } : {
                top: `${s.offset}px`
              },
              {
                from: o,
                to: a
              } = s,
              l = e.params.loop ? -t.length : 0,
              c = e.params.loop ? 2 * t.length : t.length,
              d = [];
            for (let e = l; e < c; e += 1) e >= o && e <= a && d.push(t[i(e)]);
            return d.map(((t, s) => n.cloneElement(t, {
              swiper: e,
              style: r,
              key: `slide-${s}`
            })))
          }(y.current, k, p) : k.map(((e, t) => n.cloneElement(e, {
            swiper: y.current,
            swiperSlideIndex: t
          }))), D["wrapper-end"]), B(P) && n.createElement(n.Fragment, null, n.createElement("div", {
            ref: S,
            className: "swiper-button-prev"
          }), n.createElement("div", {
            ref: w,
            className: "swiper-button-next"
          })), z(P) && n.createElement("div", {
            ref: E,
            className: "swiper-scrollbar"
          }), j(P) && n.createElement("div", {
            ref: T,
            className: "swiper-pagination"
          }), D["container-end"]))
        }));
      X.displayName = "Swiper";
      const Y = (0, n.forwardRef)((function(e, t) {
        let {
          tag: s = "div",
          children: i,
          className: r = "",
          swiper: o,
          zoom: a,
          lazy: l,
          virtualIndex: c,
          swiperSlideIndex: d,
          ...u
        } = void 0 === e ? {} : e;
        const p = (0, n.useRef)(null),
          [h, m] = (0, n.useState)("swiper-slide"),
          [f, g] = (0, n.useState)(!1);

        function v(e, t, s) {
          t === p.current && m(s)
        }
        H((() => {
          if (void 0 !== d && (p.current.swiperSlideIndex = d), t && (t.current = p.current), p.current && o) {
            if (!o.destroyed) return o.on("_slideClass", v), () => {
              o && o.off("_slideClass", v)
            };
            "swiper-slide" !== h && m("swiper-slide")
          }
        })), H((() => {
          o && p.current && !o.destroyed && m(o.getSlideClasses(p.current))
        }), [o]);
        const y = {
            isActive: h.indexOf("swiper-slide-active") >= 0,
            isVisible: h.indexOf("swiper-slide-visible") >= 0,
            isPrev: h.indexOf("swiper-slide-prev") >= 0,
            isNext: h.indexOf("swiper-slide-next") >= 0
          },
          x = () => "function" == typeof i ? i(y) : i;
        return n.createElement(s, _({
          ref: p,
          className: F(`${h}${r?` ${r}`:""}`),
          "data-swiper-slide-index": c,
          onLoad: () => {
            g(!0)
          }
        }, u), a && n.createElement(q.Provider, {
          value: y
        }, n.createElement("div", {
          className: "swiper-zoom-container",
          "data-swiper-zoom": "number" == typeof a ? a : void 0
        }, x(), l && !f && n.createElement("div", {
          className: "swiper-lazy-preloader"
        }))), !a && n.createElement(q.Provider, {
          value: y
        }, x(), l && !f && n.createElement("div", {
          className: "swiper-lazy-preloader"
        })))
      }));
      Y.displayName = "SwiperSlide"
    }
  }
]);