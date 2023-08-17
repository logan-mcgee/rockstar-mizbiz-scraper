/*! For license information please see 45f39dba98c61f35c3d5.js.LICENSE.txt */
"use strict";
(self.webpackChunk_rockstargames_modules_core_highlights = self.webpackChunk_rockstargames_modules_core_highlights || []).push([
  [887], {
    970: (e, t, s) => {
      var n = s(289),
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
    274: (e, t, s) => {
      e.exports = s(970)
    },
    704: (e, t, s) => {
      s.d(t, {
        Pn: () => o,
        Wi: () => r,
        frameData: () => a,
        S6: () => l
      });
      var n = s(541);
      const i = ["prepare", "read", "update", "preRender", "render", "postRender"],
        {
          schedule: r,
          cancel: o,
          state: a,
          steps: l
        } = function(e, t) {
          let s = !1,
            n = !0;
          const r = {
              delta: 0,
              timestamp: 0,
              isProcessing: !1
            },
            o = i.reduce(((e, t) => (e[t] = function(e) {
              let t = [],
                s = [],
                n = 0,
                i = !1,
                r = !1;
              const o = new WeakSet,
                a = {
                  schedule: (e, r = !1, a = !1) => {
                    const l = a && i,
                      c = l ? t : s;
                    return r && o.add(e), -1 === c.indexOf(e) && (c.push(e), l && i && (n = t.length)), e
                  },
                  cancel: e => {
                    const t = s.indexOf(e); - 1 !== t && s.splice(t, 1), o.delete(e)
                  },
                  process: l => {
                    if (i) r = !0;
                    else {
                      if (i = !0, [t, s] = [s, t], s.length = 0, n = t.length, n)
                        for (let s = 0; s < n; s++) {
                          const n = t[s];
                          n(l), o.has(n) && (a.schedule(n), e())
                        }
                      i = !1, r && (r = !1, a.process(l))
                    }
                  }
                };
              return a
            }((() => s = !0)), e)), {}),
            a = e => o[e].process(r),
            l = () => {
              const t = performance.now();
              s = !1, r.delta = n ? 1e3 / 60 : Math.max(Math.min(t - r.timestamp, 40), 1), r.timestamp = t, r.isProcessing = !0, i.forEach(a), r.isProcessing = !1, s && (n = !1, e(l))
            };
          return {
            schedule: i.reduce(((t, i) => {
              const a = o[i];
              return t[i] = (t, i = !1, o = !1) => (s || (s = !0, n = !0, r.isProcessing || e(l)), a.schedule(t, i, o)), t
            }), {}),
            cancel: e => i.forEach((t => o[t].cancel(e))),
            state: r,
            steps: o
          }
        }("undefined" != typeof requestAnimationFrame ? requestAnimationFrame : n.Z)
    },
    547: (e, t, s) => {
      s.d(t, {
        E: () => Xi
      });
      var n = s(289);
      const i = (0, n.createContext)({
          transformPagePoint: e => e,
          isStatic: !1,
          reducedMotion: "never"
        }),
        r = (0, n.createContext)({}),
        o = (0, n.createContext)(null);
      var a = s(104);
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

      function v(e) {
        return Array.isArray(e) ? e.join(" ") : e
      }
      const g = {
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
      for (const e in g) y[e] = {
        isEnabled: t => g[e].some((e => !!t[e]))
      };
      var x = s(214);
      const w = (0, n.createContext)({}),
        b = (0, n.createContext)({}),
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
          let g;
          const y = {
              ...(0, n.useContext)(i),
              ...h,
              layoutId: E(h)
            },
            {
              isStatic: w
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
              })), [v(t), v(s)])
            }(h),
            T = u(h, w);
          if (!w && x.j) {
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
              return (0, n.useInsertionEffect)((() => {
                f && f.update(s, p)
              })), (0, a.L)((() => {
                f && f.render()
              })), (0, n.useEffect)((() => {
                f && f.updateFeatures()
              })), (window.HandoffAppearAnimations ? a.L : n.useEffect)((() => {
                f && f.animationState && f.animationState.animateChanges()
              })), f
            }(p, T, y, t);
            const s = (0, n.useContext)(b),
              c = (0, n.useContext)(l).strict;
            S.visualElement && (g = S.visualElement.loadFeatures(y, c, e, s))
          }
          return n.createElement(r.Provider, {
            value: S
          }, g && S.visualElement ? n.createElement(g, {
            visualElement: S.visualElement,
            ...y
          }) : null, s(p, h, function(e, t, s) {
            return (0, n.useCallback)((n => {
              n && e.mount && e.mount(n), t && (n ? t.mount(n) : t.unmount()), s && ("function" == typeof s ? s(n) : c(s) && (s.current = n))
            }), [t])
          }(T, S.visualElement, f), T, w, S.visualElement))
        }));
        return h[S] = p, h
      }

      function E({
        layoutId: e
      }) {
        const t = (0, n.useContext)(w).id;
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
        k = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
        L = new Set(k);

      function V(e, {
        layout: t,
        layoutId: s
      }) {
        return L.has(e) || e.startsWith("origin") || (t || void 0 !== s) && (!!A[e] || "opacity" === e)
      }
      const D = e => Boolean(e && e.getVelocity),
        O = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective"
        },
        R = k.length;
      var I = s(651);
      const B = (e, t) => t && "number" == typeof e ? t.transform(e) : e;
      var j = s(261),
        z = s(193);
      const F = {
          ...j.Rx,
          transform: Math.round
        },
        _ = {
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

      function N(e, t, s, n) {
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
          if ((0, I.f9)(e)) {
            r[e] = s;
            continue
          }
          const n = _[e],
            u = B(s, n);
          if (L.has(e)) {
            if (l = !0, o[e] = u, !d) continue;
            s !== (n.default || 0) && (d = !1)
          } else e.startsWith("origin") ? (c = !0, a[e] = u) : i[e] = u
        }
        if (t.transform || (l || n ? i.transform = function(e, {
            enableHardwareAcceleration: t = !0,
            allowTransformNone: s = !0
          }, n, i) {
            let r = "";
            for (let t = 0; t < R; t++) {
              const s = k[t];
              void 0 !== e[s] && (r += `${O[s]||s}(${e[s]}) `)
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
      const $ = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {}
      });

      function W(e, t, s) {
        for (const n in t) D(t[n]) || V(n, s) || (e[n] = t[n])
      }

      function G(e, t, s) {
        const i = {},
          r = function(e, t, s) {
            const i = {};
            return W(i, e.style || {}, e), Object.assign(i, function({
              transformTemplate: e
            }, t, s) {
              return (0, n.useMemo)((() => {
                const n = $();
                return N(n, t, {
                  enableHardwareAcceleration: !s
                }, e), Object.assign({}, n.vars, n.style)
              }), [t])
            }(e, t, s)), e.transformValues ? e.transformValues(i) : i
          }(e, t, s);
        return e.drag && !1 !== e.dragListener && (i.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = !0 === e.drag ? "none" : "pan-" + ("x" === e.drag ? "y" : "x")), void 0 === e.tabIndex && (e.onTap || e.onTapStart || e.whileTap) && (i.tabIndex = 0), i.style = r, i
      }
      const H = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "onLayoutAnimationStart", "onLayoutAnimationComplete", "onLayoutMeasure", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "ignoreStrict", "viewport"]);

      function U(e) {
        return e.startsWith("while") || e.startsWith("drag") && "draggable" !== e || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || H.has(e)
      }
      let Y = e => !U(e);
      try {
        (X = require("@emotion/is-prop-valid").default) && (Y = e => e.startsWith("on") ? !U(e) : X(e))
      } catch (e) {}
      var X;

      function q(e, t, s) {
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
        if (N(e, c, d, p), u) return void(e.style.viewBox && (e.attrs.viewBox = e.style.viewBox));
        e.attrs = e.style, e.style = {};
        const {
          attrs: h,
          style: m,
          dimensions: f
        } = e;
        h.transform && (f && (m.transform = h.transform), delete h.transform), f && (void 0 !== i || void 0 !== r || m.transform) && (m.transformOrigin = function(e, t, s) {
          return `${q(t,e.x,e.width)} ${q(s,e.y,e.height)}`
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
          ...$(),
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
              for (const i in e) "values" === i && "object" == typeof e.values || (Y(i) || !0 === s && U(i) || !t && !U(i) || e.draggable && i.startsWith("onDrag")) && (n[i] = e[i]);
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
            u = (0, n.useMemo)((() => D(d) ? d.get() : d), [d]);
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
        for (const i in s)(D(s[i]) || t.style && D(t.style[i]) || V(i, e)) && (n[i] = s[i]);
        return n
      }

      function le(e, t) {
        const s = ae(e, t);
        for (const n in e)(D(e[n]) || D(t[n])) && (s[-1 !== k.indexOf(n) ? "attr" + n.charAt(0).toUpperCase() + n.substring(1) : n] = e[n]);
        return s
      }

      function ce(e, t, s, n = {}, i = {}) {
        return "function" == typeof t && (t = t(void 0 !== s ? s : e.custom, n, i)), "string" == typeof t && (t = e.variants && e.variants[t]), "function" == typeof t && (t = t(void 0 !== s ? s : e.custom, n, i)), t
      }
      var de = s(365);
      const ue = e => Array.isArray(e),
        pe = e => Boolean(e && "object" == typeof e && e.mix && e.toValue),
        he = e => ue(e) ? e[e.length - 1] || 0 : e;

      function me(e) {
        const t = D(e) ? e.get() : e;
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
              latestValues: ve(n, i, r, e),
              renderState: t()
            };
            return s && (o.mount = e => s(n, e, o)), o
          }(e, t, i, a);
        return s ? l() : (0, de.h)(l)
      };

      function ve(e, t, s, n) {
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
      const ge = {
          useVisualState: fe({
            scrapeMotionValuesFromProps: le,
            createRenderState: Q,
            onMount: (e, t, {
              renderState: s,
              latestValues: n
            }) => {
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
              J(s, n, {
                enableHardwareAcceleration: !1
              }, ee(t.tagName), e.transformTemplate), oe(t, s)
            }
          })
        },
        ye = {
          useVisualState: fe({
            scrapeMotionValuesFromProps: ae,
            createRenderState: $
          })
        };

      function xe(e, t, s, n = {
        passive: !0
      }) {
        return e.addEventListener(t, s, n), () => e.removeEventListener(t, s)
      }
      const we = e => "mouse" === e.pointerType ? "number" != typeof e.button || e.button <= 0 : !1 !== e.isPrimary;

      function be(e, t = "page") {
        return {
          point: {
            x: e[t + "X"],
            y: e[t + "Y"]
          }
        }
      }
      const Se = e => t => we(t) && e(t, be(t));

      function Te(e, t, s, n) {
        return xe(e, t, Se(s), n)
      }
      var Ee = s(763);

      function Pe(e) {
        let t = null;
        return () => null === t && (t = e, () => {
          t = null
        })
      }
      const Ce = Pe("dragHorizontal"),
        Me = Pe("dragVertical");

      function Ae(e) {
        let t = !1;
        if ("y" === e) t = Me();
        else if ("x" === e) t = Ce();
        else {
          const e = Ce(),
            s = Me();
          e && s ? t = () => {
            e(), s()
          } : (e && e(), s && s())
        }
        return t
      }

      function ke() {
        const e = Ae(!0);
        return !e || (e(), !1)
      }
      class Le {
        constructor(e) {
          this.isMounted = !1, this.node = e
        }
        update() {}
      }
      var Ve = s(704);

      function De(e, t) {
        const s = "pointer" + (t ? "enter" : "leave"),
          n = "onHover" + (t ? "Start" : "End");
        return Te(e.current, s, ((s, i) => {
          if ("touch" === s.type || ke()) return;
          const r = e.getProps();
          e.animationState && r.whileHover && e.animationState.setActive("whileHover", t), r[n] && Ve.Wi.update((() => r[n](s, i)))
        }), {
          passive: !e.getProps()[n]
        })
      }
      const Oe = (e, t) => !!t && (e === t || Oe(e, t.parentElement));
      var Re = s(541);

      function Ie(e, t) {
        if (!t) return;
        const s = new PointerEvent("pointer" + e);
        t(s, be(s))
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
      const _e = {
          some: 0,
          all: 1
        },
        Ne = {
          inView: {
            Feature: class extends Le {
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
                  threshold: "number" == typeof n ? n : _e[n]
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
            Feature: class extends Le {
              constructor() {
                super(...arguments), this.removeStartListeners = Re.Z, this.removeEndListeners = Re.Z, this.removeAccessibleListeners = Re.Z, this.startPointerPress = (e, t) => {
                  if (this.removeEndListeners(), this.isPressing) return;
                  const s = this.node.getProps(),
                    n = Te(window, "pointerup", ((e, t) => {
                      if (!this.checkPressEnd()) return;
                      const {
                        onTap: s,
                        onTapCancel: n
                      } = this.node.getProps();
                      Ve.Wi.update((() => {
                        Oe(this.node.current, e.target) ? s && s(e, t) : n && n(e, t)
                      }))
                    }), {
                      passive: !(s.onTap || s.onPointerUp)
                    }),
                    i = Te(window, "pointercancel", ((e, t) => this.cancelPress(e, t)), {
                      passive: !(s.onTapCancel || s.onPointerCancel)
                    });
                  this.removeEndListeners = (0, Ee.z)(n, i), this.startPress(e, t)
                }, this.startAccessiblePress = () => {
                  const e = xe(this.node.current, "keydown", (e => {
                      "Enter" !== e.key || this.isPressing || (this.removeEndListeners(), this.removeEndListeners = xe(this.node.current, "keyup", (e => {
                        "Enter" === e.key && this.checkPressEnd() && Ie("up", ((e, t) => {
                          const {
                            onTap: s
                          } = this.node.getProps();
                          s && Ve.Wi.update((() => s(e, t)))
                        }))
                      })), Ie("down", ((e, t) => {
                        this.startPress(e, t)
                      })))
                    })),
                    t = xe(this.node.current, "blur", (() => {
                      this.isPressing && Ie("cancel", ((e, t) => this.cancelPress(e, t)))
                    }));
                  this.removeAccessibleListeners = (0, Ee.z)(e, t)
                }
              }
              startPress(e, t) {
                this.isPressing = !0;
                const {
                  onTapStart: s,
                  whileTap: n
                } = this.node.getProps();
                n && this.node.animationState && this.node.animationState.setActive("whileTap", !0), s && Ve.Wi.update((() => s(e, t)))
              }
              checkPressEnd() {
                return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !ke()
              }
              cancelPress(e, t) {
                if (!this.checkPressEnd()) return;
                const {
                  onTapCancel: s
                } = this.node.getProps();
                s && Ve.Wi.update((() => s(e, t)))
              }
              mount() {
                const e = this.node.getProps(),
                  t = Te(this.node.current, "pointerdown", this.startPointerPress, {
                    passive: !(e.onTapStart || e.onPointerStart)
                  }),
                  s = xe(this.node.current, "focus", this.startAccessiblePress);
                this.removeStartListeners = (0, Ee.z)(t, s)
              }
              unmount() {
                this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners()
              }
            }
          },
          focus: {
            Feature: class extends Le {
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
                this.unmount = (0, Ee.z)(xe(this.node.current, "focus", (() => this.onFocus())), xe(this.node.current, "blur", (() => this.onBlur())))
              }
              unmount() {}
            }
          },
          hover: {
            Feature: class extends Le {
              mount() {
                this.unmount = (0, Ee.z)(De(this.node, !0), De(this.node, !1))
              }
              unmount() {}
            }
          }
        };

      function $e(e, t) {
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
      var He = s(0);
      const Ue = e => 1e3 * e,
        Ye = e => e / 1e3,
        Xe = e => Array.isArray(e) && "number" == typeof e[0];

      function qe(e) {
        return Boolean(!e || "string" == typeof e && Ke[e] || Xe(e) || Array.isArray(e) && e.every(qe))
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
        if (e === t && s === n) return Re.Z;
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
          linear: Re.Z,
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
      var ft = s(277),
        vt = s(254);

      function gt({
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
          }(s && s.length === t.length ? s : (0, vt.Y)(t), e),
          a = (0, ft.s)(o, t, {
            ease: Array.isArray(i) ? i : (l = t, c = i, l.map((() => c || nt)).splice(0, l.length - 1))
          });
        var l, c;
        return {
          calculatedDuration: e,
          next: t => (r.value = a(t), r.done = t >= e, r)
        }
      }
      var yt = s(45);
      const xt = 5;

      function wt(e, t, s) {
        const n = Math.max(t - xt, 0);
        return (0, yt.R)(s - e(n), t - n)
      }
      var bt = s(260);
      const St = .001,
        Tt = .01,
        Et = 10,
        Pt = .05,
        Ct = 1;
      const Mt = 12;

      function At(e, t) {
        return e * Math.sqrt(1 - t * t)
      }
      const kt = ["duration", "bounce"],
        Lt = ["stiffness", "damping", "mass"];

      function Vt(e, t) {
        return t.some((t => void 0 !== e[t]))
      }

      function Dt({
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
            if (!Vt(e, Lt) && Vt(e, kt)) {
              const s = function({
                duration: e = 800,
                bounce: t = .25,
                velocity: s = 0,
                mass: n = 1
              }) {
                let i, r;
                (0, He.K)(e <= Ue(Et), "Spring duration must be 10 seconds or less");
                let o = 1 - t;
                o = (0, bt.u)(Pt, Ct, o), e = (0, bt.u)(Tt, Et, Ye(e)), o < 1 ? (i = t => {
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
                if (e = Ue(e), isNaN(a)) return {
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
          h = d ? -Ye(d) : 0,
          m = l / (2 * Math.sqrt(a * c)),
          f = r - i,
          v = Ye(Math.sqrt(a / c)),
          g = Math.abs(f) < 5;
        let y;
        if (s || (s = g ? .01 : 2), t || (t = g ? .005 : .5), m < 1) {
          const e = At(v, m);
          y = t => {
            const s = Math.exp(-m * v * t);
            return r - s * ((h + m * v * f) / e * Math.sin(e * t) + f * Math.cos(e * t))
          }
        } else if (1 === m) y = e => r - Math.exp(-v * e) * (f + (h + v * f) * e);
        else {
          const e = v * Math.sqrt(m * m - 1);
          y = t => {
            const s = Math.exp(-m * v * t),
              n = Math.min(e * t, 300);
            return r - s * ((h + m * v * f) * Math.sinh(n) + e * f * Math.cosh(n)) / e
          }
        }
        return {
          calculatedDuration: p && u || null,
          next: e => {
            const n = y(e);
            if (p) o.done = e >= u;
            else {
              let i = h;
              0 !== e && (i = m < 1 ? wt(y, e, n) : 0);
              const a = Math.abs(i) <= s,
                l = Math.abs(r - n) <= t;
              o.done = a && l
            }
            return o.value = o.done ? r : n, o
          }
        }
      }

      function Ot({
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
          v = void 0 === o ? f : o(f);
        v !== f && (m = v - u);
        const g = e => -m * Math.exp(-e / n),
          y = e => v + g(e),
          x = e => {
            const t = g(e),
              s = y(e);
            p.done = Math.abs(t) <= c, p.value = p.done ? v : s
          };
        let w, b;
        const S = e => {
          var t;
          t = p.value, (void 0 !== a && t < a || void 0 !== l && t > l) && (w = e, b = Dt({
            keyframes: [p.value, h(p.value)],
            velocity: wt(y, e, p.value),
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
            return b || void 0 !== w || (t = !0, x(e), S(e)), void 0 !== w && e > w ? b.next(e - w) : (!t && x(e), p)
          }
        }
      }
      const Rt = e => {
          const t = ({
            timestamp: t
          }) => e(t);
          return {
            start: () => Ve.Wi.update(t, !0),
            stop: () => (0, Ve.Pn)(t),
            now: () => Ve.frameData.isProcessing ? Ve.frameData.timestamp : performance.now()
          }
        },
        It = 2e4;

      function Bt(e) {
        let t = 0,
          s = e.next(t);
        for (; !s.done && t < It;) t += 50, s = e.next(t);
        return t >= It ? 1 / 0 : t
      }
      const jt = {
        decay: Ot,
        inertia: Ot,
        tween: gt,
        keyframes: gt,
        spring: Dt
      };

      function zt({
        autoplay: e = !0,
        delay: t = 0,
        driver: s = Rt,
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
          v = !1;
        const g = () => {
          m = new Promise((e => {
            h = e
          }))
        };
        let y;
        g();
        const x = jt[i] || gt;
        let w;
        x !== gt && "number" != typeof n[0] && (w = (0, ft.s)([0, 100], n, {
          clamp: !1
        }), n = [0, 100]);
        const b = x({
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
        null === b.calculatedDuration && r && (b.calculatedDuration = Bt(b));
        const {
          calculatedDuration: M
        } = b;
        let A = 1 / 0,
          k = 1 / 0;
        null !== M && (A = M + o, k = A * (r + 1) - o);
        let L = 0;
        const V = e => {
            if (null === P) return;
            f > 0 && (P = Math.min(P, e)), f < 0 && (P = Math.min(e - k / f, P)), L = null !== E ? E : Math.round(e - P) * f;
            const s = L - t * (f >= 0 ? 1 : -1),
              i = f >= 0 ? s < 0 : s > k;
            L = Math.max(s, 0), "finished" === T && null === E && (L = k);
            let l = L,
              c = b;
            if (r) {
              const e = L / A;
              let t = Math.floor(e),
                s = e % 1;
              !s && e >= 1 && (s = 1), 1 === s && t--, t = Math.min(t, r + 1);
              const n = Boolean(t % 2);
              n && ("reverse" === a ? (s = 1 - s, o && (s -= o / A)) : "mirror" === a && (c = S));
              let i = (0, bt.u)(0, 1, s);
              L > k && (i = "reverse" === a && n ? 1 : 0), l = i * A
            }
            const d = i ? {
              done: !1,
              value: n[0]
            } : c.next(l);
            w && (d.value = w(d.value));
            let {
              done: p
            } = d;
            i || null === M || (p = f >= 0 ? L >= k : L <= 0);
            const h = null === E && ("finished" === T || "running" === T && p);
            return u && u(d.value), h && R(), d
          },
          D = () => {
            y && y.stop(), y = void 0
          },
          O = () => {
            T = "idle", D(), h(), g(), P = C = null
          },
          R = () => {
            T = "finished", d && d(), D(), h()
          },
          I = () => {
            if (v) return;
            y || (y = s(V));
            const e = y.now();
            l && l(), null !== E ? P = e - E : P && "finished" !== T || (P = e), "finished" === T && g(), C = P, E = null, T = "running", y.start()
          };
        e && I();
        const B = {
          then: (e, t) => m.then(e, t),
          get time() {
            return Ye(L)
          },
          set time(e) {
            e = Ue(e), L = e, null === E && y && 0 !== f ? P = y.now() - e / f : E = e
          },
          get duration() {
            const e = null === b.calculatedDuration ? Bt(b) : b.calculatedDuration;
            return Ye(e)
          },
          get speed() {
            return f
          },
          set speed(e) {
            e !== f && y && (f = e, B.time = Ye(L))
          },
          get state() {
            return T
          },
          play: I,
          pause: () => {
            T = "paused", E = L
          },
          stop: () => {
            v = !0, "idle" !== T && (T = "idle", c && c(), O())
          },
          cancel: () => {
            null !== C && V(C), O()
          },
          complete: () => {
            T = "finished"
          },
          sample: e => (P = 0, V(e))
        };
        return B
      }
      const Ft = function(e) {
          let t;
          return () => (void 0 === t && (t = Object.hasOwnProperty.call(Element.prototype, "animate")), t)
        }(),
        _t = new Set(["opacity", "clipPath", "filter", "transform", "backgroundColor"]);
      const Nt = {
          type: "spring",
          stiffness: 500,
          damping: 25,
          restSpeed: 10
        },
        $t = {
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
        }) => t.length > 2 ? $t : L.has(e) ? e.startsWith("scale") ? {
          type: "spring",
          stiffness: 550,
          damping: 0 === t[1] ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10
        } : Nt : Wt;
      var Ht = s(824);
      const Ut = (e, t) => !("zIndex" === e || "number" != typeof t && !Array.isArray(t) && ("string" != typeof t || !Ht.P.test(t) && "0" !== t || t.startsWith("url(")));
      var Yt = s(943);
      const Xt = new Set(["brightness", "contrast", "saturate", "opacity"]);

      function qt(e) {
        const [t, s] = e.slice(0, -1).split("(");
        if ("drop-shadow" === t) return e;
        const [n] = s.match(Yt.KP) || [];
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
            return t ? t.map(qt).join(" ") : e
          }
        };
      var Jt = s(552);
      const Qt = {
          ..._,
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
        a -= Ue(o);
        const l = function(e, t, s, n) {
            const i = Ut(t, s);
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
          u = Ut(e, c),
          p = Ut(e, d);
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
          }), h.duration && (h.duration = Ue(h.duration)), h.repeatDelay && (h.repeatDelay = Ue(h.repeatDelay)), !u || !p || !1 === r.type) return function({
          keyframes: e,
          delay: t,
          onUpdate: s,
          onComplete: n
        }) {
          const i = () => (s && s(e[e.length - 1]), n && n(), {
            time: 0,
            speed: 1,
            duration: 0,
            play: Re.Z,
            pause: Re.Z,
            stop: Re.Z,
            then: e => (e(), Promise.resolve()),
            cancel: Re.Z,
            complete: Re.Z
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
            if (!Ft() || !_t.has(t) || i.repeatDelay || "mirror" === i.repeatType || 0 === i.damping || "inertia" === i.type) return !1;
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
            if (((e, t) => "spring" === t.type || "backgroundColor" === e || !qe(t.ease))(t, i)) {
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
              }),
              m = () => h.cancel(),
              f = () => {
                Ve.Wi.update(m), r(), l()
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
              attachTimeline: e => (h.timeline = e, h.onfinish = null, Re.Z),
              get time() {
                return Ye(h.currentTime || 0)
              },
              set time(e) {
                h.currentTime = Ue(e)
              },
              get speed() {
                return h.playbackRate
              },
              set speed(e) {
                h.playbackRate = e
              },
              get duration() {
                return Ye(d)
              },
              play: () => {
                a || (h.play(), (0, Ve.Pn)(m))
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
        return Boolean(D(e) && e.add)
      }
      var as = s(362);
      const ls = e => t => t.test(e),
        cs = [j.Rx, z.px, z.aQ, z.RW, z.vw, z.vh, {
          test: e => "auto" === e,
          parse: e => e
        }],
        ds = e => cs.find(ls(e)),
        us = [...cs, Jt.$, Ht.P];

      function ps(e, t, s) {
        e.hasValue(t) ? e.getValue(t).set(s) : e.addValue(t, (0, as.B)(s))
      }

      function hs(e, t) {
        if (t) return (t[e] || t.default || t).from
      }

      function ms({
        protectedKeys: e,
        needsAnimating: t
      }, s) {
        const n = e.hasOwnProperty(s) && !0 !== t[s];
        return t[s] = !1, n
      }

      function fs(e, t, {
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
          if (!n || void 0 === i || d && ms(d, t)) continue;
          const o = {
            delay: s,
            elapsed: 0,
            ...r
          };
          if (window.HandoffAppearAnimations && !n.hasAnimated) {
            const s = e.getProps()[Ge];
            s && (o.elapsed = window.HandoffAppearAnimations(s, t, n, Ve.Wi))
          }
          n.start(rs(t, n, i, e.shouldReduceMotion && L.has(t) ? {
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
            for (const t in r) ps(e, t, he(r[t]))
          }(e, o)
        })), c
      }

      function vs(e, t, s = {}) {
        const n = We(e, t, s.custom);
        let {
          transition: i = e.getDefaultTransition() || {}
        } = n || {};
        s.transitionOverride && (i = s.transitionOverride);
        const r = n ? () => Promise.all(fs(e, n, s)) : () => Promise.resolve(),
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
              return Array.from(e.variantChildren).sort(gs).forEach(((e, n) => {
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

      function gs(e, t) {
        return e.sortNodePosition(t)
      }
      const ys = [...p].reverse(),
        xs = p.length;

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
              n = Promise.all(fs(e, i, s))
            }
            return n.then((() => e.notify("AnimationComplete", t)))
          }(e, t, s))))
        }(e);
        const s = {
          animate: bs(!0),
          whileInView: bs(),
          whileHover: bs(),
          whileTap: bs(),
          whileDrag: bs(),
          whileFocus: bs(),
          exit: bs()
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
          for (let t = 0; t < xs; t++) {
            const g = ys[t],
              y = s[g],
              x = void 0 !== a[g] ? a[g] : l[g],
              w = d(x),
              b = g === o ? y.isActive : null;
            !1 === b && (m = t);
            let S = x === l[g] && x !== a[g] && w;
            if (S && n && e.manuallyAnimateOnMount && (S = !1), y.protectedKeys = {
                ...h
              }, !y.isActive && null === b || !x && !y.prevProp || u(x) || "boolean" == typeof x) continue;
            const T = (f = y.prevProp, "string" == typeof(v = x) ? v !== f : !!Array.isArray(v) && !$e(v, f));
            let E = T || g === o && y.isActive && !S && w || t > m && w;
            const P = Array.isArray(x) ? x : [x];
            let C = P.reduce(i, {});
            !1 === b && (C = {});
            const {
              prevResolvedValues: M = {}
            } = y, A = {
              ...M,
              ...C
            }, k = e => {
              E = !0, p.delete(e), y.needsAnimating[e] = !0
            };
            for (const e in A) {
              const t = C[e],
                s = M[e];
              h.hasOwnProperty(e) || (t !== s ? ue(t) && ue(s) ? !$e(t, s) || T ? k(e) : y.protectedKeys[e] = !0 : void 0 !== t ? k(e) : p.add(e) : void 0 !== t && p.has(e) ? k(e) : y.protectedKeys[e] = !0)
            }
            y.prevProp = x, y.prevResolvedValues = C, y.isActive && (h = {
              ...h,
              ...C
            }), n && e.blockInitialAnimation && (E = !1), E && !S && c.push(...P.map((e => ({
              animation: e,
              options: {
                type: g,
                ...r
              }
            }))))
          }
          var f, v;
          if (p.size) {
            const t = {};
            p.forEach((s => {
              const n = e.getBaseTarget(s);
              void 0 !== n && (t[s] = n)
            })), c.push({
              animation: t
            })
          }
          let g = Boolean(c.length);
          return n && !1 === a.initial && !e.manuallyAnimateOnMount && (g = !1), n = !1, g ? t(c) : Promise.resolve()
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

      function bs(e = !1) {
        return {
          isActive: e,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {}
        }
      }
      let Ss = 0;
      const Ts = {
          animation: {
            Feature: class extends Le {
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
            Feature: class extends Le {
              constructor() {
                super(...arguments), this.id = Ss++
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
        Es = (e, t) => Math.abs(e - t);
      class Ps {
        constructor(e, t, {
          transformPagePoint: s
        } = {}) {
          if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = () => {
              if (!this.lastMoveEvent || !this.lastMoveEventInfo) return;
              const e = As(this.lastMoveEventInfo, this.history),
                t = null !== this.startEvent,
                s = function(e, t) {
                  const s = Es(e.x, t.x),
                    n = Es(e.y, t.y);
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
              } = Ve.frameData;
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
              this.lastMoveEvent = e, this.lastMoveEventInfo = Cs(t, this.transformPagePoint), Ve.Wi.update(this.updatePoint, !0)
            }, this.handlePointerUp = (e, t) => {
              if (this.end(), !this.lastMoveEvent || !this.lastMoveEventInfo) return;
              const {
                onEnd: s,
                onSessionEnd: n
              } = this.handlers, i = As("pointercancel" === e.type ? this.lastMoveEventInfo : Cs(t, this.transformPagePoint), this.history);
              this.startEvent && s && s(e, i), n && n(e, i)
            }, !we(e)) return;
          this.handlers = t, this.transformPagePoint = s;
          const n = Cs(be(e), this.transformPagePoint),
            {
              point: i
            } = n,
            {
              timestamp: r
            } = Ve.frameData;
          this.history = [{
            ...i,
            timestamp: r
          }];
          const {
            onSessionStart: o
          } = t;
          o && o(e, As(n, this.history)), this.removeListeners = (0, Ee.z)(Te(window, "pointermove", this.handlePointerMove), Te(window, "pointerup", this.handlePointerUp), Te(window, "pointercancel", this.handlePointerUp))
        }
        updateHandlers(e) {
          this.handlers = e
        }
        end() {
          this.removeListeners && this.removeListeners(), (0, Ve.Pn)(this.updatePoint)
        }
      }

      function Cs(e, t) {
        return t ? {
          point: t(e.point)
        } : e
      }

      function Ms(e, t) {
        return {
          x: e.x - t.x,
          y: e.y - t.y
        }
      }

      function As({
        point: e
      }, t) {
        return {
          point: e,
          delta: Ms(e, Ls(t)),
          offset: Ms(e, ks(t)),
          velocity: Vs(t, .1)
        }
      }

      function ks(e) {
        return e[0]
      }

      function Ls(e) {
        return e[e.length - 1]
      }

      function Vs(e, t) {
        if (e.length < 2) return {
          x: 0,
          y: 0
        };
        let s = e.length - 1,
          n = null;
        const i = Ls(e);
        for (; s >= 0 && (n = e[s], !(i.timestamp - n.timestamp > Ue(t)));) s--;
        if (!n) return {
          x: 0,
          y: 0
        };
        const r = Ye(i.timestamp - n.timestamp);
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
      var Ds = s(834),
        Os = s(566);

      function Rs(e) {
        return e.max - e.min
      }

      function Is(e, t = 0, s = .01) {
        return Math.abs(e - t) <= s
      }

      function Bs(e, t, s, n = .5) {
        e.origin = n, e.originPoint = (0, Os.C)(t.min, t.max, e.origin), e.scale = Rs(s) / Rs(t), (Is(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1), e.translate = (0, Os.C)(s.min, s.max, e.origin) - e.originPoint, (Is(e.translate) || isNaN(e.translate)) && (e.translate = 0)
      }

      function js(e, t, s, n) {
        Bs(e.x, t.x, s.x, n ? n.originX : void 0), Bs(e.y, t.y, s.y, n ? n.originY : void 0)
      }

      function zs(e, t, s) {
        e.min = s.min + t.min, e.max = e.min + Rs(t)
      }

      function Fs(e, t, s) {
        e.min = t.min - s.min, e.max = e.min + Rs(t)
      }

      function _s(e, t, s) {
        Fs(e.x, t.x, s.x), Fs(e.y, t.y, s.y)
      }

      function Ns(e, t, s) {
        return {
          min: void 0 !== t ? e.min + t : void 0,
          max: void 0 !== s ? e.max + s - (e.max - e.min) : void 0
        }
      }

      function $s(e, t) {
        let s = t.min - e.min,
          n = t.max - e.max;
        return t.max - t.min < e.max - e.min && ([s, n] = [n, s]), {
          min: s,
          max: n
        }
      }
      const Ws = .35;

      function Gs(e, t, s) {
        return {
          min: Hs(e, t),
          max: Hs(e, s)
        }
      }

      function Hs(e, t) {
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
        Ys = () => ({
          x: {
            min: 0,
            max: 0
          },
          y: {
            min: 0,
            max: 0
          }
        });

      function Xs(e) {
        return [e("x"), e("y")]
      }

      function qs({
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

      function Zs(e) {
        return void 0 === e || 1 === e
      }

      function Ks({
        scale: e,
        scaleX: t,
        scaleY: s
      }) {
        return !Zs(e) || !Zs(t) || !Zs(s)
      }

      function Js(e) {
        return Ks(e) || Qs(e) || e.z || e.rotate || e.rotateX || e.rotateY
      }

      function Qs(e) {
        return en(e.x) || en(e.y)
      }

      function en(e) {
        return e && "0%" !== e
      }

      function tn(e, t, s) {
        return s + t * (e - s)
      }

      function sn(e, t, s, n, i) {
        return void 0 !== i && (e = tn(e, i, n)), tn(e, s, n) + t
      }

      function nn(e, t = 0, s = 1, n, i) {
        e.min = sn(e.min, t, s, n, i), e.max = sn(e.max, t, s, n, i)
      }

      function rn(e, {
        x: t,
        y: s
      }) {
        nn(e.x, t.translate, t.scale, t.originPoint), nn(e.y, s.translate, s.scale, s.originPoint)
      }

      function on(e) {
        return Number.isInteger(e) || e > 1.0000000000001 || e < .999999999999 ? e : 1
      }

      function an(e, t) {
        e.min = e.min + t, e.max = e.max + t
      }

      function ln(e, t, [s, n, i]) {
        const r = void 0 !== t[i] ? t[i] : .5,
          o = (0, Os.C)(e.min, e.max, r);
        nn(e, t[s], t[n], o, t.scale)
      }
      const cn = ["x", "scaleX", "originX"],
        dn = ["y", "scaleY", "originY"];

      function un(e, t) {
        ln(e.x, t, cn), ln(e.y, t, dn)
      }

      function pn(e, t) {
        return qs(function(e, t) {
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
      const hn = new WeakMap;
      class mn {
        constructor(e) {
          this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
            x: 0,
            y: 0
          }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = Ys(), this.visualElement = e
        }
        start(e, {
          snapToCursor: t = !1
        } = {}) {
          const {
            presenceContext: s
          } = this.visualElement;
          s && !1 === s.isPresent || (this.panSession = new Ps(e, {
            onSessionStart: e => {
              this.stopAnimation(), t && this.snapToCursor(be(e, "page").point)
            },
            onStart: (e, t) => {
              const {
                drag: s,
                dragPropagation: n,
                onDragStart: i
              } = this.getProps();
              if (s && !n && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = Ae(s), !this.openGlobalLock)) return;
              this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Xs((e => {
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
              })), i && Ve.Wi.update((() => i(e, t)), !1, !0);
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
          i && Ve.Wi.update((() => i(e, t)))
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
          if (!s || !fn(e, n, this.currentDirection)) return;
          const i = this.getAxisMotionValue(e);
          let r = this.originPoint[e] + s[e];
          this.constraints && this.constraints[e] && (r = function(e, {
            min: t,
            max: s
          }, n) {
            return void 0 !== t && e < t ? e = n ? (0, Os.C)(t, e, n.min) : Math.max(e, t) : void 0 !== s && e > s && (e = n ? (0, Os.C)(s, e, n.max) : Math.min(e, s)), e
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
          }(s.layoutBox, e), this.elastic = function(e = Ws) {
            return !1 === e ? e = 0 : !0 === e && (e = Ws), {
              x: Gs(e, "left", "right"),
              y: Gs(e, "top", "bottom")
            }
          }(t), n !== this.constraints && s && this.constraints && !this.hasMutatedConstraints && Xs((e => {
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
            const n = pn(e, s),
              {
                scroll: i
              } = t;
            return i && (an(n.x, i.offset.x), an(n.y, i.offset.y)), n
          }(s, n.root, this.visualElement.getTransformPagePoint());
          let r = function(e, t) {
            return {
              x: $s(e.x, t.x),
              y: $s(e.y, t.y)
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
            this.hasMutatedConstraints = !!e, e && (r = qs(e))
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
          } = this.getProps(), a = this.constraints || {}, l = Xs((o => {
            if (!fn(o, t, this.currentDirection)) return;
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
          Xs((e => this.getAxisMotionValue(e).stop()))
        }
        getAxisMotionValue(e) {
          const t = "_drag" + e.toUpperCase(),
            s = this.visualElement.getProps();
          return s[t] || this.visualElement.getValue(e, (s.initial ? s.initial[e] : void 0) || 0)
        }
        snapToCursor(e) {
          Xs((t => {
            const {
              drag: s
            } = this.getProps();
            if (!fn(t, s, this.currentDirection)) return;
            const {
              projection: n
            } = this.visualElement, i = this.getAxisMotionValue(t);
            if (n && n.layout) {
              const {
                min: s,
                max: r
              } = n.layout.layoutBox[t];
              i.set(e[t] - (0, Os.C)(s, r, .5))
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
          Xs((e => {
            const t = this.getAxisMotionValue(e);
            if (t) {
              const s = t.get();
              n[e] = function(e, t) {
                let s = .5;
                const n = Rs(e),
                  i = Rs(t);
                return i > n ? s = (0, Ds.Y)(t.min, t.max - n, e.min) : n > i && (s = (0, Ds.Y)(e.min, e.max - i, t.min)), (0, bt.u)(0, 1, s)
              }({
                min: s,
                max: s
              }, this.constraints[e])
            }
          }));
          const {
            transformTemplate: i
          } = this.visualElement.getProps();
          this.visualElement.current.style.transform = i ? i({}, "") : "none", s.root && s.root.updateScroll(), s.updateLayout(), this.resolveConstraints(), Xs((t => {
            if (!fn(t, e, null)) return;
            const s = this.getAxisMotionValue(t),
              {
                min: i,
                max: r
              } = this.constraints[t];
            s.set((0, Os.C)(i, r, n[t]))
          }))
        }
        addListeners() {
          if (!this.visualElement.current) return;
          hn.set(this.visualElement, this);
          const e = Te(this.visualElement.current, "pointerdown", (e => {
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
          const i = xe(window, "resize", (() => this.scalePositionWithinConstraints())),
            r = s.addEventListener("didUpdate", (({
              delta: e,
              hasLayoutChanged: t
            }) => {
              this.isDragging && t && (Xs((t => {
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
              dragElastic: r = Ws,
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

      function fn(e, t, s) {
        return !(!0 !== t && t !== e || null !== s && s !== e)
      }
      const vn = e => (t, s) => {
          e && Ve.Wi.update((() => e(t, s)))
        },
        gn = {
          hasAnimatedSinceResize: !0,
          hasEverUpdated: !1
        };

      function yn(e, t) {
        return t.max === t.min ? 0 : e / (t.max - t.min) * 100
      }
      const xn = {
          correct: (e, t) => {
            if (!t.target) return e;
            if ("string" == typeof e) {
              if (!z.px.test(e)) return e;
              e = parseFloat(e)
            }
            return `${yn(e,t.target.x)}% ${yn(e,t.target.y)}%`
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
            const c = (0, Os.C)(a, l, .5);
            return "number" == typeof i[2 + o] && (i[2 + o] /= c), "number" == typeof i[3 + o] && (i[3 + o] /= c), r(i)
          }
        };
      class bn extends n.Component {
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
          r = Tn, Object.assign(A, r), i && (t.group && t.group.add(i), s && s.register && n && s.register(i), i.root.didUpdate(), i.addEventListener("animationComplete", (() => {
            this.safeToRemove()
          })), i.setOptions({
            ...i.options,
            onExitComplete: () => this.safeToRemove()
          })), gn.hasEverUpdated = !0
        }
        getSnapshotBeforeUpdate(e) {
          const {
            layoutDependency: t,
            visualElement: s,
            drag: n,
            isPresent: i
          } = this.props, r = s.projection;
          return r ? (r.isPresent = i, n || e.layoutDependency !== t || void 0 === t ? r.willUpdate() : this.safeToRemove(), e.isPresent !== i && (i ? r.promote() : r.relegate() || Ve.Wi.postRender((() => {
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

      function Sn(e) {
        const [t, s] = function() {
          const e = (0, n.useContext)(o);
          if (null === e) return [!0, null];
          const {
            isPresent: t,
            onExitComplete: s,
            register: i
          } = e, r = (0, n.useId)();
          return (0, n.useEffect)((() => i(r)), []), !t && s ? [!1, () => s && s(r)] : [!0]
        }(), i = (0, n.useContext)(w);
        return n.createElement(bn, {
          ...e,
          layoutGroup: i,
          switchLayoutGroup: (0, n.useContext)(b),
          isPresent: t,
          safeToRemove: s
        })
      }
      const Tn = {
        borderRadius: {
          ...xn,
          applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
        },
        borderTopLeftRadius: xn,
        borderTopRightRadius: xn,
        borderBottomLeftRadius: xn,
        borderBottomRightRadius: xn,
        boxShadow: wn
      };
      var En = s(743);
      const Pn = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        Cn = Pn.length,
        Mn = e => "string" == typeof e ? parseFloat(e) : e,
        An = e => "number" == typeof e || z.px.test(e);

      function kn(e, t) {
        return void 0 !== e[t] ? e[t] : e.borderRadius
      }
      const Ln = Dn(0, .5, lt),
        Vn = Dn(.5, .95, Re.Z);

      function Dn(e, t, s) {
        return n => n < e ? 0 : n > t ? 1 : s((0, Ds.Y)(e, t, n))
      }

      function On(e, t) {
        e.min = t.min, e.max = t.max
      }

      function Rn(e, t) {
        On(e.x, t.x), On(e.y, t.y)
      }

      function In(e, t, s, n, i) {
        return e = tn(e -= t, 1 / s, n), void 0 !== i && (e = tn(e, 1 / i, n)), e
      }

      function Bn(e, t, [s, n, i], r, o) {
        ! function(e, t = 0, s = 1, n = .5, i, r = e, o = e) {
          if (z.aQ.test(t) && (t = parseFloat(t), t = (0, Os.C)(o.min, o.max, t / 100) - o.min), "number" != typeof t) return;
          let a = (0, Os.C)(r.min, r.max, n);
          e === r && (a -= t), e.min = In(e.min, t, s, a, i), e.max = In(e.max, t, s, a, i)
        }(e, t[s], t[n], t[i], t.scale, r, o)
      }
      const jn = ["x", "scaleX", "originX"],
        zn = ["y", "scaleY", "originY"];

      function Fn(e, t, s, n) {
        Bn(e.x, t, jn, s ? s.x : void 0, n ? n.x : void 0), Bn(e.y, t, zn, s ? s.y : void 0, n ? n.y : void 0)
      }

      function _n(e) {
        return 0 === e.translate && 1 === e.scale
      }

      function Nn(e) {
        return _n(e.x) && _n(e.y)
      }

      function $n(e, t) {
        return Math.round(e.x.min) === Math.round(t.x.min) && Math.round(e.x.max) === Math.round(t.x.max) && Math.round(e.y.min) === Math.round(t.y.min) && Math.round(e.y.max) === Math.round(t.y.max)
      }

      function Wn(e) {
        return Rs(e.x) / Rs(e.y)
      }
      var Gn = s(118);
      class Hn {
        constructor() {
          this.members = []
        }
        add(e) {
          (0, Gn.y4)(this.members, e), e.scheduleRender()
        }
        remove(e) {
          if ((0, Gn.cl)(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
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
      const Yn = (e, t) => e.depth - t.depth;
      class Xn {
        constructor() {
          this.children = [], this.isDirty = !1
        }
        add(e) {
          (0, Gn.y4)(this.children, e), this.isDirty = !0
        }
        remove(e) {
          (0, Gn.cl)(this.children, e), this.isDirty = !0
        }
        forEach(e) {
          this.isDirty && this.children.sort(Yn), this.isDirty = !1, this.children.forEach(e)
        }
      }
      const qn = ["", "X", "Y", "Z"];
      let Zn = 0;
      const Kn = {
        type: "projectionFrame",
        totalNodes: 0,
        resolvedTargetDeltas: 0,
        recalculatedProjection: 0
      };

      function Jn({
        attachResizeListener: e,
        defaultParent: t,
        measureScroll: s,
        checkIsScrollRoot: n,
        resetTransform: i
      }) {
        return class {
          constructor(e = {}, s = (null == t ? void 0 : t())) {
            this.id = Zn++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = {
              x: 1,
              y: 1
            }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.updateScheduled = !1, this.checkUpdateFailed = () => {
              this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
            }, this.updateProjection = () => {
              var e;
              Kn.totalNodes = Kn.resolvedTargetDeltas = Kn.recalculatedProjection = 0, this.nodes.forEach(ti), this.nodes.forEach(li), this.nodes.forEach(ci), this.nodes.forEach(si), e = Kn, window.MotionDebug && window.MotionDebug.record(e)
            }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = e, this.root = s ? s.root || s : this, this.path = s ? [...s.path, s] : [], this.parent = s, this.depth = s ? s.depth + 1 : 0;
            for (let e = 0; e < this.path.length; e++) this.path[e].shouldResetTransform = !0;
            this.root === this && (this.nodes = new Xn)
          }
          addEventListener(e, t) {
            return this.eventHandlers.has(e) || this.eventHandlers.set(e, new En.L), this.eventHandlers.get(e).add(t)
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
                      i >= 250 && ((0, Ve.Pn)(n), e(i - 250))
                    };
                  return Ve.Wi.read(n, !0), () => (0, Ve.Pn)(n)
                }(n), gn.hasAnimatedSinceResize && (gn.hasAnimatedSinceResize = !1, this.nodes.forEach(ai))
              }))
            }
            i && this.root.registerSharedNode(i, this), !1 !== this.options.animate && o && (i || r) && this.addEventListener("didUpdate", (({
              delta: e,
              hasLayoutChanged: t,
              hasRelativeTargetChanged: s,
              layout: n
            }) => {
              if (this.isTreeAnimationBlocked()) return this.target = void 0, void(this.relativeTarget = void 0);
              const i = this.options.transition || o.getDefaultTransition() || fi,
                {
                  onLayoutAnimationStart: r,
                  onLayoutAnimationComplete: a
                } = o.getProps(),
                l = !this.targetLayout || !$n(this.targetLayout, n) || s,
                c = !t && s;
              if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || c || t && (l || !this.currentAnimation)) {
                this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(e, c);
                const t = {
                  ...is(i, "layout"),
                  onPlay: r,
                  onComplete: a
                };
                (o.shouldReduceMotion || this.options.layoutRoot) && (t.delay = 0, t.type = !1), this.startAnimation(t)
              } else t || ai(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
              this.targetLayout = n
            }))
          }
          unmount() {
            this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
            const e = this.getStack();
            e && e.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, (0, Ve.Pn)(this.updateProjection)
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
            this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(di), this.animationId++)
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
            if (this.updateScheduled = !1, this.isUpdateBlocked()) return this.unblockUpdate(), this.clearAllSnapshots(), void this.nodes.forEach(ii);
            this.isUpdating || this.nodes.forEach(ri), this.isUpdating = !1, this.nodes.forEach(oi), this.nodes.forEach(Qn), this.nodes.forEach(ei), this.clearAllSnapshots();
            const e = performance.now();
            Ve.frameData.delta = (0, bt.u)(0, 1e3 / 60, e - Ve.frameData.timestamp), Ve.frameData.timestamp = e, Ve.frameData.isProcessing = !0, Ve.S6.update.process(Ve.frameData), Ve.S6.preRender.process(Ve.frameData), Ve.S6.render.process(Ve.frameData), Ve.frameData.isProcessing = !1
          }
          didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0, queueMicrotask((() => this.update())))
          }
          clearAllSnapshots() {
            this.nodes.forEach(ni), this.sharedNodes.forEach(ui)
          }
          scheduleUpdateProjection() {
            Ve.Wi.preRender(this.updateProjection, !1, !0)
          }
          scheduleCheckAfterUnmount() {
            Ve.Wi.postRender((() => {
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
            this.layout = this.measure(!1), this.layoutCorrected = Ys(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
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
            e && (t || Js(this.latestValues) || r) && (i(this.instance, n), this.shouldResetTransform = !1, this.scheduleRender())
          }
          measure(e = !0) {
            const t = this.measurePageBox();
            let s = this.removeElementScroll(t);
            var n;
            return e && (s = this.removeTransform(s)), yi((n = s).x), yi(n.y), {
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
            if (!e) return Ys();
            const t = e.measureViewportBox(),
              {
                scroll: s
              } = this.root;
            return s && (an(t.x, s.offset.x), an(t.y, s.offset.y)), t
          }
          removeElementScroll(e) {
            const t = Ys();
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
                  s && (an(t.x, -s.offset.x), an(t.y, -s.offset.y))
                }
                an(t.x, i.offset.x), an(t.y, i.offset.y)
              }
            }
            return t
          }
          applyTransform(e, t = !1) {
            const s = Ys();
            Rn(s, e);
            for (let e = 0; e < this.path.length; e++) {
              const n = this.path[e];
              !t && n.options.layoutScroll && n.scroll && n !== n.root && un(s, {
                x: -n.scroll.offset.x,
                y: -n.scroll.offset.y
              }), Js(n.latestValues) && un(s, n.latestValues)
            }
            return Js(this.latestValues) && un(s, this.latestValues), s
          }
          removeTransform(e) {
            const t = Ys();
            Rn(t, e);
            for (let e = 0; e < this.path.length; e++) {
              const s = this.path[e];
              if (!s.instance) continue;
              if (!Js(s.latestValues)) continue;
              Ks(s.latestValues) && s.updateSnapshot();
              const n = Ys();
              Rn(n, s.measurePageBox()), Fn(t, s.latestValues, s.snapshot ? s.snapshot.layoutBox : void 0, n)
            }
            return Js(this.latestValues) && Fn(t, this.latestValues), t
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
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Ve.frameData.timestamp && this.relativeParent.resolveTargetDelta(!0)
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
              if (this.resolvedRelativeTargetAt = Ve.frameData.timestamp, !this.targetDelta && !this.relativeTarget) {
                const e = this.getClosestProjectingParent();
                e && e.layout && 1 !== this.animationProgress ? (this.relativeParent = e, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Ys(), this.relativeTargetOrigin = Ys(), _s(this.relativeTargetOrigin, this.layout.layoutBox, e.layout.layoutBox), Rn(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
              }
              if (this.relativeTarget || this.targetDelta) {
                var o, a, l;
                if (this.target || (this.target = Ys(), this.targetWithTransforms = Ys()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), o = this.target, a = this.relativeTarget, l = this.relativeParent.target, zs(o.x, a.x, l.x), zs(o.y, a.y, l.y)) : this.targetDelta ? (Boolean(this.resumingFrom) ? this.target = this.applyTransform(this.layout.layoutBox) : Rn(this.target, this.layout.layoutBox), rn(this.target, this.targetDelta)) : Rn(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
                  this.attemptToResolveRelativeTarget = !1;
                  const e = this.getClosestProjectingParent();
                  e && Boolean(e.resumingFrom) === Boolean(this.resumingFrom) && !e.options.layoutScroll && e.target && 1 !== this.animationProgress ? (this.relativeParent = e, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Ys(), this.relativeTargetOrigin = Ys(), _s(this.relativeTargetOrigin, this.target, e.target), Rn(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                Kn.resolvedTargetDeltas++
              }
            }
          }
          getClosestProjectingParent() {
            if (this.parent && !Ks(this.parent.latestValues) && !Qs(this.parent.latestValues)) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
          }
          isProjecting() {
            return Boolean((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
          }
          calcProjection() {
            var e;
            const t = this.getLead(),
              s = Boolean(this.resumingFrom) || this !== t;
            let n = !0;
            if ((this.isProjectionDirty || (null === (e = this.parent) || void 0 === e ? void 0 : e.isProjectionDirty)) && (n = !1), s && (this.isSharedProjectionDirty || this.isTransformDirty) && (n = !1), this.resolvedRelativeTargetAt === Ve.frameData.timestamp && (n = !1), n) return;
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
                i && i.style && "contents" === i.style.display || (n && r.options.layoutScroll && r.scroll && r !== r.root && un(e, {
                  x: -r.scroll.offset.x,
                  y: -r.scroll.offset.y
                }), o && (t.x *= o.x.scale, t.y *= o.y.scale, rn(e, o)), n && Js(r.latestValues) && un(e, r.latestValues))
              }
              t.x = on(t.x), t.y = on(t.y)
            }(this.layoutCorrected, this.treeScale, this.path, s), !t.layout || t.target || 1 === this.treeScale.x && 1 === this.treeScale.y || (t.target = t.layout.layoutBox);
            const {
              target: l
            } = t;
            if (!l) return void(this.projectionTransform && (this.projectionDelta = Us(), this.projectionTransform = "none", this.scheduleRender()));
            this.projectionDelta || (this.projectionDelta = Us(), this.projectionDeltaWithTransform = Us());
            const c = this.projectionTransform;
            js(this.projectionDelta, this.layoutCorrected, l, this.latestValues), this.projectionTransform = Un(this.projectionDelta, this.treeScale), this.projectionTransform === c && this.treeScale.x === o && this.treeScale.y === a || (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", l)), Kn.recalculatedProjection++
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
            const o = Ys(),
              a = (s ? s.source : void 0) !== (this.layout ? this.layout.source : void 0),
              l = this.getStack(),
              c = !l || l.members.length <= 1,
              d = Boolean(a && !c && !0 === this.options.crossfade && !this.path.some(mi));
            let u;
            this.animationProgress = 0, this.mixTargetDelta = t => {
              const s = t / 1e3;
              var l, p, h, m, f, v;
              pi(r.x, e.x, s), pi(r.y, e.y, s), this.setTargetDelta(r), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (_s(o, this.layout.layoutBox, this.relativeParent.layout.layoutBox), h = this.relativeTarget, m = this.relativeTargetOrigin, f = o, v = s, hi(h.x, m.x, f.x, v), hi(h.y, m.y, f.y, v), u && (l = this.relativeTarget, p = u, l.x.min === p.x.min && l.x.max === p.x.max && l.y.min === p.y.min && l.y.max === p.y.max) && (this.isProjectionDirty = !1), u || (u = Ys()), Rn(u, this.relativeTarget)), a && (this.animationValues = i, function(e, t, s, n, i, r) {
                i ? (e.opacity = (0, Os.C)(0, void 0 !== s.opacity ? s.opacity : 1, Ln(n)), e.opacityExit = (0, Os.C)(void 0 !== t.opacity ? t.opacity : 1, 0, Vn(n))) : r && (e.opacity = (0, Os.C)(void 0 !== t.opacity ? t.opacity : 1, void 0 !== s.opacity ? s.opacity : 1, n));
                for (let i = 0; i < Cn; i++) {
                  const r = `border${Pn[i]}Radius`;
                  let o = kn(t, r),
                    a = kn(s, r);
                  void 0 === o && void 0 === a || (o || (o = 0), a || (a = 0), 0 === o || 0 === a || An(o) === An(a) ? (e[r] = Math.max((0, Os.C)(Mn(o), Mn(a), n), 0), (z.aQ.test(a) || z.aQ.test(o)) && (e[r] += "%")) : e[r] = a)
                }(t.rotate || s.rotate) && (e.rotate = (0, Os.C)(t.rotate || 0, s.rotate || 0, n))
              }(i, n, this.latestValues, s, d, c)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = s
            }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
          }
          startAnimation(e) {
            this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && ((0, Ve.Pn)(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = Ve.Wi.update((() => {
              gn.hasAnimatedSinceResize = !0, this.currentAnimation = function(e, t, s) {
                const n = D(0) ? 0 : (0, as.B)(0);
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
              if (this !== e && this.layout && n && xi(this.options.animationType, this.layout.layoutBox, n.layoutBox)) {
                s = this.target || Ys();
                const t = Rs(this.layout.layoutBox.x);
                s.x.min = e.target.x.min, s.x.max = s.x.min + t;
                const n = Rs(this.layout.layoutBox.y);
                s.y.min = e.target.y.min, s.y.max = s.y.min + n
              }
              Rn(t, s), un(t, i), js(this.projectionDeltaWithTransform, this.layoutCorrected, t, i)
            }
          }
          registerSharedNode(e, t) {
            this.sharedNodes.has(e) || this.sharedNodes.set(e, new Hn), this.sharedNodes.get(e).add(t);
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
            for (let t = 0; t < qn.length; t++) {
              const i = "rotate" + qn[t];
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
              return this.options.layoutId && (t.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1, t.pointerEvents = me(e.pointerEvents) || ""), this.hasProjected && !Js(this.latestValues) && (t.transform = i ? i({}, "") : "none", this.hasProjected = !1), t
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
            })), this.root.nodes.forEach(ii), this.root.sharedNodes.clear()
          }
        }
      }

      function Qn(e) {
        e.updateLayout()
      }

      function ei(e) {
        var t;
        const s = (null === (t = e.resumeFrom) || void 0 === t ? void 0 : t.snapshot) || e.snapshot;
        if (e.isLead() && e.layout && s && e.hasListeners("didUpdate")) {
          const {
            layoutBox: t,
            measuredBox: n
          } = e.layout, {
            animationType: i
          } = e.options, r = s.source !== e.layout.source;
          "size" === i ? Xs((e => {
            const n = r ? s.measuredBox[e] : s.layoutBox[e],
              i = Rs(n);
            n.min = t[e].min, n.max = n.min + i
          })) : xi(i, s.layoutBox, t) && Xs((n => {
            const i = r ? s.measuredBox[n] : s.layoutBox[n],
              o = Rs(t[n]);
            i.max = i.min + o, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[n].max = e.relativeTarget[n].min + o)
          }));
          const o = Us();
          js(o, t, s.layoutBox);
          const a = Us();
          r ? js(a, e.applyTransform(n, !0), s.measuredBox) : js(a, t, s.layoutBox);
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
                const o = Ys();
                _s(o, s.layoutBox, i.layoutBox);
                const a = Ys();
                _s(a, t, r.layoutBox), $n(o, a) || (c = !0), n.options.layoutRoot && (e.relativeTarget = a, e.relativeTargetOrigin = o, e.relativeParent = n)
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

      function ti(e) {
        Kn.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = Boolean(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
      }

      function si(e) {
        e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
      }

      function ni(e) {
        e.clearSnapshot()
      }

      function ii(e) {
        e.clearMeasurements()
      }

      function ri(e) {
        e.isLayoutDirty = !1
      }

      function oi(e) {
        const {
          visualElement: t
        } = e.options;
        t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform()
      }

      function ai(e) {
        e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0
      }

      function li(e) {
        e.resolveTargetDelta()
      }

      function ci(e) {
        e.calcProjection()
      }

      function di(e) {
        e.resetRotation()
      }

      function ui(e) {
        e.removeLeadSnapshot()
      }

      function pi(e, t, s) {
        e.translate = (0, Os.C)(t.translate, 0, s), e.scale = (0, Os.C)(t.scale, 1, s), e.origin = t.origin, e.originPoint = t.originPoint
      }

      function hi(e, t, s, n) {
        e.min = (0, Os.C)(t.min, s.min, n), e.max = (0, Os.C)(t.max, s.max, n)
      }

      function mi(e) {
        return e.animationValues && void 0 !== e.animationValues.opacityExit
      }
      const fi = {
          duration: .45,
          ease: [.4, 0, .1, 1]
        },
        vi = e => "undefined" != typeof navigator && navigator.userAgent.toLowerCase().includes(e),
        gi = vi("applewebkit/") && !vi("chrome/") ? Math.round : Re.Z;

      function yi(e) {
        e.min = gi(e.min), e.max = gi(e.max)
      }

      function xi(e, t, s) {
        return "position" === e || "preserve-aspect" === e && !Is(Wn(t), Wn(s), .2)
      }
      const wi = Jn({
          attachResizeListener: (e, t) => xe(e, "resize", t),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop
          }),
          checkIsScrollRoot: () => !0
        }),
        bi = {
          current: void 0
        },
        Si = Jn({
          measureScroll: e => ({
            x: e.scrollLeft,
            y: e.scrollTop
          }),
          defaultParent: () => {
            if (!bi.current) {
              const e = new wi({});
              e.mount(window), e.setOptions({
                layoutScroll: !0
              }), bi.current = e
            }
            return bi.current
          },
          resetTransform: (e, t) => {
            e.style.transform = void 0 !== t ? t : "none"
          },
          checkIsScrollRoot: e => Boolean("fixed" === window.getComputedStyle(e).position)
        }),
        Ti = {
          pan: {
            Feature: class extends Le {
              constructor() {
                super(...arguments), this.removePointerDownListener = Re.Z
              }
              onPointerDown(e) {
                this.session = new Ps(e, this.createPanHandlers(), {
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
                    delete this.session, n && Ve.Wi.update((() => n(e, t)))
                  }
                }
              }
              mount() {
                this.removePointerDownListener = Te(this.node.current, "pointerdown", (e => this.onPointerDown(e)))
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
            Feature: class extends Le {
              constructor(e) {
                super(e), this.removeGroupControls = Re.Z, this.removeListeners = Re.Z, this.controls = new mn(e)
              }
              mount() {
                const {
                  dragControls: e
                } = this.node.getProps();
                e && (this.removeGroupControls = e.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || Re.Z
              }
              unmount() {
                this.removeGroupControls(), this.removeListeners()
              }
            },
            ProjectionNode: Si,
            MeasureLayout: Sn
          }
        },
        Ei = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;

      function Pi(e, t, s = 1) {
        (0, He.k)(s <= 4, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
        const [n, i] = function(e) {
          const t = Ei.exec(e);
          if (!t) return [, ];
          const [, s, n] = t;
          return [s, n]
        }(e);
        if (!n) return;
        const r = window.getComputedStyle(t).getPropertyValue(n);
        return r ? r.trim() : (0, I.tm)(i) ? Pi(i, t, s + 1) : i
      }
      const Ci = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"]),
        Mi = e => Ci.has(e),
        Ai = e => e === j.Rx || e === z.px,
        ki = (e, t) => parseFloat(e.split(", ")[t]),
        Li = (e, t) => (s, {
          transform: n
        }) => {
          if ("none" === n || !n) return 0;
          const i = n.match(/^matrix3d\((.+)\)$/);
          if (i) return ki(i[1], t); {
            const t = n.match(/^matrix\((.+)\)$/);
            return t ? ki(t[1], e) : 0
          }
        },
        Vi = new Set(["x", "y", "z"]),
        Di = k.filter((e => !Vi.has(e))),
        Oi = {
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
          x: Li(4, 13),
          y: Li(5, 14)
        };
      Oi.translateX = Oi.x, Oi.translateY = Oi.y;

      function Ri(e, t, s, n) {
        return (e => Object.keys(e).some(Mi))(t) ? ((e, t, s = {}, n = {}) => {
          t = {
            ...t
          }, n = {
            ...n
          };
          const i = Object.keys(t).filter(Mi);
          let r = [],
            o = !1;
          const a = [];
          if (i.forEach((i => {
              const l = e.getValue(i);
              if (!e.hasValue(i)) return;
              let c = s[i],
                d = ds(c);
              const u = t[i];
              let p;
              if (ue(u)) {
                const e = u.length,
                  t = null === u[0] ? 1 : 0;
                c = u[t], d = ds(c);
                for (let s = t; s < e && null !== u[s]; s++) p ? (0, He.k)(ds(u[s]) === p, "All keyframes must be of the same type") : (p = ds(u[s]), (0, He.k)(p === d || Ai(d) && Ai(p), "Keyframes must be of the same dimension as the current value"))
              } else p = ds(u);
              if (d !== p)
                if (Ai(d) && Ai(p)) {
                  const e = l.get();
                  "string" == typeof e && l.set(parseFloat(e)), "string" == typeof u ? t[i] = parseFloat(u) : Array.isArray(u) && p === z.px && (t[i] = u.map(parseFloat))
                } else(null == d ? void 0 : d.transform) && (null == p ? void 0 : p.transform) && (0 === c || 0 === u) ? 0 === c ? l.set(p.transform(c)) : t[i] = d.transform(u) : (o || (r = function(e) {
                  const t = [];
                  return Di.forEach((s => {
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
                  a[e] = Oi[e](n, r)
                })), t.render();
                const l = t.measureViewportBox();
                return s.forEach((s => {
                  const n = t.getValue(s);
                  n && n.jump(a[s]), e[s] = Oi[s](l, r)
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
      const Ii = {
          current: null
        },
        Bi = {
          current: !1
        },
        ji = new WeakMap,
        zi = Object.keys(y),
        Fi = zi.length,
        _i = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"],
        Ni = h.length;
      class $i {
        constructor({
          parent: e,
          props: t,
          presenceContext: s,
          reducedMotionConfig: n,
          visualState: i
        }, r = {}) {
          this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
            this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
          }, this.scheduleRender = () => Ve.Wi.render(this.render, !1, !0);
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
            void 0 !== o[e] && D(t) && (t.set(o[e], !1), os(l) && l.add(e))
          }
        }
        scrapeMotionValuesFromProps(e, t) {
          return {}
        }
        mount(e) {
          this.current = e, ji.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach(((e, t) => this.bindToMotionValue(t, e))), Bi.current || function() {
            if (Bi.current = !0, x.j)
              if (window.matchMedia) {
                const e = window.matchMedia("(prefers-reduced-motion)"),
                  t = () => Ii.current = e.matches;
                e.addListener(t), t()
              } else Ii.current = !1
          }(), this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || Ii.current), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext)
        }
        unmount() {
          ji.delete(this.current), this.projection && this.projection.unmount(), (0, Ve.Pn)(this.notifyUpdate), (0, Ve.Pn)(this.render), this.valueSubscriptions.forEach((e => e())), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
          for (const e in this.events) this.events[e].clear();
          for (const e in this.features) this.features[e].unmount();
          this.current = null
        }
        bindToMotionValue(e, t) {
          const s = L.has(e),
            n = t.on("change", (t => {
              this.latestValues[e] = t, this.props.onUpdate && Ve.Wi.update(this.notifyUpdate, !1, !0), s && this.projection && (this.projection.isTransformDirty = !0)
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
          for (let e = 0; e < Fi; e++) {
            const s = zi[e],
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
          return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Ys()
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
              if (D(r)) e.addValue(i, r), os(n) && n.add(i);
              else if (D(o)) e.addValue(i, (0, as.B)(r, {
                owner: e
              })), os(n) && n.remove(i);
              else if (o !== r)
                if (e.hasValue(i)) {
                  const t = e.getValue(i);
                  !t.hasAnimated && t.set(r)
                } else {
                  const t = e.getStaticValue(i);
                  e.addValue(i, (0, as.B)(void 0 !== t ? t : r, {
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
          return void 0 === s && void 0 !== t && (s = (0, as.B)(t, {
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
          return void 0 === i || D(i) ? void 0 !== this.initialValues[e] && void 0 === n ? void 0 : this.baseTarget[e] : i
        }
        on(e, t) {
          return this.events[e] || (this.events[e] = new En.L), this.events[e].add(t)
        }
        notify(e, ...t) {
          this.events[e] && this.events[e].notify(...t)
        }
      }
      class Wi extends $i {
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
              const e = hs(i, t);
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
              if (o)
                for (let l = 0; l < o; l++) {
                  const o = r[l],
                    c = t[o];
                  let d = null;
                  Array.isArray(c) && (d = c[0]), null === d && (d = null !== (i = null !== (n = s[o]) && void 0 !== n ? n : e.readValue(o)) && void 0 !== i ? i : t[o]), null != d && ("string" == typeof d && (/^\-?\d*\.?\d+$/.test(d) || ss(d)) ? d = parseFloat(d) : (a = d, !us.find(ls(a)) && Ht.P.test(c) && (d = ts(o, c))), e.addValue(o, (0, as.B)(d, {
                    owner: e
                  })), void 0 === s[o] && (s[o] = d), null !== d && e.setBaseTarget(o, d))
                }
              var a
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
                  if (!(0, I.tm)(t)) return;
                  const s = Pi(t, n);
                  s && e.set(s)
                }));
                for (const e in t) {
                  const i = t[e];
                  if (!(0, I.tm)(i)) continue;
                  const r = Pi(i, n);
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
      class Gi extends Wi {
        readValueFromInstance(e, t) {
          if (L.has(t)) {
            const e = es(t);
            return e && e.default || 0
          } {
            const n = (s = e, window.getComputedStyle(s)),
              i = ((0, I.f9)(t) ? n.getPropertyValue(t) : n[t]) || 0;
            return "string" == typeof i ? i.trim() : i
          }
          var s
        }
        measureInstanceViewportBox(e, {
          transformPagePoint: t
        }) {
          return pn(e, t)
        }
        build(e, t, s, n) {
          N(e, t, s, n.transformTemplate)
        }
        scrapeMotionValuesFromProps(e, t) {
          return ae(e, t)
        }
        handleChildMotionValue() {
          this.childSubscription && (this.childSubscription(), delete this.childSubscription);
          const {
            children: e
          } = this.props;
          D(e) && (this.childSubscription = e.on("change", (e => {
            this.current && (this.current.textContent = `${e}`)
          })))
        }
        renderInstance(e, t, s, n) {
          ie(e, t, s, n)
        }
      }
      class Hi extends Wi {
        constructor() {
          super(...arguments), this.isSVGTag = !1
        }
        getBaseTargetFromProps(e, t) {
          return e[t]
        }
        readValueFromInstance(e, t) {
          if (L.has(t)) {
            const e = es(t);
            return e && e.default || 0
          }
          return t = re.has(t) ? t : ne(t), e.getAttribute(t)
        }
        measureInstanceViewportBox() {
          return Ys()
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
      const Ui = (e, t) => M(e) ? new Hi(t, {
          enableHardwareAcceleration: !1
        }) : new Gi(t, {
          enableHardwareAcceleration: !0
        }),
        Yi = {
          ...Ts,
          ...Ne,
          ...Ti,
          layout: {
            ProjectionNode: Si,
            MeasureLayout: Sn
          }
        },
        Xi = P(((e, t) => function(e, {
          forwardMotionProps: t = !1
        }, s, n) {
          return {
            ...M(e) ? ge : ye,
            preloadedFeatures: s,
            useRender: se(t),
            createVisualElement: n,
            Component: e
          }
        }(e, t, Yi, Ui)))
    },
    651: (e, t, s) => {
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
    118: (e, t, s) => {
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
    260: (e, t, s) => {
      s.d(t, {
        u: () => n
      });
      const n = (e, t, s) => Math.min(Math.max(s, e), t)
    },
    0: (e, t, s) => {
      s.d(t, {
        K: () => i,
        k: () => r
      });
      var n = s(541);
      let i = n.Z,
        r = n.Z
    },
    277: (e, t, s) => {
      s.d(t, {
        s: () => P
      });
      var n = s(0),
        i = s(552),
        r = s(260),
        o = s(566);

      function a(e, t, s) {
        return s < 0 && (s += 1), s > 1 && (s -= 1), s < 1 / 6 ? e + 6 * (t - e) * s : s < .5 ? t : s < 2 / 3 ? e + (t - e) * (2 / 3 - s) * 6 : e
      }
      var l = s(569),
        c = s(57),
        d = s(478);
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
      var f = s(763),
        v = s(824);
      const g = (e, t) => s => `${s>0?t:e}`;

      function y(e, t) {
        return "number" == typeof e ? s => (0, o.C)(e, t, s) : i.$.test(e) ? m(e, t) : e.startsWith("var(") ? g(e, t) : b(e, t)
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
        w = (e, t) => {
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
        b = (e, t) => {
          const s = v.P.createTransformer(t),
            i = (0, v.V)(e),
            r = (0, v.V)(t);
          return i.numVars === r.numVars && i.numColors === r.numColors && i.numNumbers >= r.numNumbers ? (0, f.z)(x(i.values, r.values), s) : ((0, n.K)(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), g(e, t))
        };
      var S = s(834),
        T = s(541);
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
              r = s || ("number" == typeof(o = e[0]) ? E : "string" == typeof o ? i.$.test(o) ? m : b : Array.isArray(o) ? x : "object" == typeof o ? w : E);
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
    214: (e, t, s) => {
      s.d(t, {
        j: () => n
      });
      const n = "undefined" != typeof document
    },
    566: (e, t, s) => {
      s.d(t, {
        C: () => n
      });
      const n = (e, t, s) => -s * e + s * t + e
    },
    541: (e, t, s) => {
      s.d(t, {
        Z: () => n
      });
      const n = e => e
    },
    254: (e, t, s) => {
      s.d(t, {
        Y: () => r
      });
      var n = s(566),
        i = s(834);

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
    763: (e, t, s) => {
      s.d(t, {
        z: () => i
      });
      const n = (e, t) => s => t(e(s)),
        i = (...e) => e.reduce(n)
    },
    834: (e, t, s) => {
      s.d(t, {
        Y: () => n
      });
      const n = (e, t, s) => {
        const n = t - e;
        return 0 === n ? 1 : (s - e) / n
      }
    },
    743: (e, t, s) => {
      s.d(t, {
        L: () => i
      });
      var n = s(118);
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
    365: (e, t, s) => {
      s.d(t, {
        h: () => i
      });
      var n = s(289);

      function i(e) {
        const t = (0, n.useRef)(null);
        return null === t.current && (t.current = e()), t.current
      }
    },
    104: (e, t, s) => {
      s.d(t, {
        L: () => i
      });
      var n = s(289);
      const i = s(214).j ? n.useLayoutEffect : n.useEffect
    },
    45: (e, t, s) => {
      function n(e, t) {
        return t ? e * (1e3 / t) : 0
      }
      s.d(t, {
        R: () => n
      })
    },
    362: (e, t, s) => {
      s.d(t, {
        B: () => a
      });
      var n = s(743),
        i = s(45),
        r = s(704);
      class o {
        constructor(e, t = {}) {
          var s;
          this.version = "10.15.1", this.timeDelta = 0, this.lastUpdated = 0, this.canTrackVelocity = !1, this.events = {}, this.updateAndNotify = (e, t = !0) => {
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
          return this.current
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

      function a(e, t) {
        return new o(e, t)
      }
    },
    569: (e, t, s) => {
      s.d(t, {
        $: () => i
      });
      var n = s(57);
      const i = {
        test: (0, s(554).i)("#"),
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
    478: (e, t, s) => {
      s.d(t, {
        J: () => a
      });
      var n = s(261),
        i = s(193),
        r = s(943),
        o = s(554);
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
    552: (e, t, s) => {
      s.d(t, {
        $: () => a
      });
      var n = s(943),
        i = s(569),
        r = s(478),
        o = s(57);
      const a = {
        test: e => o.m.test(e) || i.$.test(e) || r.J.test(e),
        parse: e => o.m.test(e) ? o.m.parse(e) : r.J.test(e) ? r.J.parse(e) : i.$.parse(e),
        transform: e => (0, n.HD)(e) ? e : e.hasOwnProperty("red") ? o.m.transform(e) : r.J.transform(e)
      }
    },
    57: (e, t, s) => {
      s.d(t, {
        m: () => l
      });
      var n = s(260),
        i = s(261),
        r = s(943),
        o = s(554);
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
    554: (e, t, s) => {
      s.d(t, {
        d: () => r,
        i: () => i
      });
      var n = s(943);
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
    824: (e, t, s) => {
      s.d(t, {
        P: () => v,
        V: () => p
      });
      var n = s(651),
        i = s(541),
        r = s(552),
        o = s(261),
        a = s(943);
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
        v = {
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
    261: (e, t, s) => {
      s.d(t, {
        Fq: () => r,
        Rx: () => i,
        bA: () => o
      });
      var n = s(260);
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
    193: (e, t, s) => {
      s.d(t, {
        $C: () => d,
        RW: () => r,
        aQ: () => o,
        px: () => a,
        vh: () => l,
        vw: () => c
      });
      var n = s(943);
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
    943: (e, t, s) => {
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
    809: (e, t, s) => {
      s.d(t, {
        v: () => z
      });
      var n = s(362),
        i = s(365),
        r = s(289),
        o = s(0);
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
      var m = s(834),
        f = s(45);
      const v = 50,
        g = () => ({
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
        i.velocity = c > v ? 0 : (0, f.R)(i.current - a, c)
      }
      const w = {
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
        b = {
          start: 0,
          center: .5,
          end: 1
        };

      function S(e, t, s = 0) {
        let n = 0;
        if (void 0 !== b[e] && (e = b[e]), "string" == typeof e) {
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
        return "number" == typeof e ? i = [e, e] : "string" == typeof e && (i = (e = e.trim()).includes(" ") ? e.split(" ") : [e, b[e] ? e : "0"]), r = S(i[0], s, n), o = S(i[1], t), r - o
      }
      var P = s(277),
        C = s(254);
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
                offset: n = w.All
              } = s;
              const {
                target: i = e,
                axis: r = "y"
              } = s, o = "y" === r ? "height" : "width", a = i !== e ? function(e, t) {
                let s = {
                    x: 0,
                    y: 0
                  },
                  n = e;
                for (; n && n !== t;)
                  if (n instanceof HTMLElement) s.x += n.offsetLeft, s.y += n.offsetTop, n = n.offsetParent;
                  else if (n instanceof SVGGraphicsElement && "getBBox" in n) {
                  const {
                    top: e,
                    left: t
                  } = n.getBBox();
                  for (s.x += t, s.y += e; n && "svg" !== n.tagName;) n = n.parentNode
                }
                return s
              }(i, e) : M, l = i === e ? {
                width: e.scrollWidth,
                height: e.scrollHeight
              } : {
                width: i.clientWidth,
                height: i.clientHeight
              }, c = {
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
      var k = s(704);
      const L = new WeakMap,
        V = new WeakMap,
        D = new WeakMap,
        O = e => e === document.documentElement ? window : e;

      function R(e, {
        container: t = document.documentElement,
        ...s
      } = {}) {
        let n = D.get(t);
        n || (n = new Set, D.set(t, n));
        const i = g(),
          r = A(t, e, i, s);
        if (n.add(r), !L.has(t)) {
          const e = () => {
              for (const e of n) e.measure()
            },
            s = () => {
              for (const e of n) e.update(k.frameData.timestamp)
            },
            i = () => {
              for (const e of n) e.notify()
            },
            r = () => {
              k.Wi.read(e, !1, !0), k.Wi.update(s, !1, !0), k.Wi.update(i, !1, !0)
            };
          L.set(t, r);
          const c = O(t);
          window.addEventListener("resize", r, {
            passive: !0
          }), t !== document.documentElement && V.set(t, (l = r, "function" == typeof(a = t) ? (o = a, p.add(o), h || (h = () => {
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
        const c = L.get(t);
        return k.Wi.read(c, !1, !0), () => {
          var e;
          (0, k.Pn)(c);
          const s = D.get(t);
          if (!s) return;
          if (s.delete(r), s.size) return;
          const n = L.get(t);
          L.delete(t), n && (O(t).removeEventListener("scroll", n), null === (e = V.get(t)) || void 0 === e || e(), window.removeEventListener("resize", n))
        }
      }
      var I = s(104);

      function B(e, t) {
        (0, o.K)(Boolean(!t || t.current), `You have defined a ${e} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`)
      }
      const j = () => ({
        scrollX: (0, n.B)(0),
        scrollY: (0, n.B)(0),
        scrollXProgress: (0, n.B)(0),
        scrollYProgress: (0, n.B)(0)
      });

      function z({
        container: e,
        target: t,
        layoutEffect: s = !0,
        ...n
      } = {}) {
        const o = (0, i.h)(j);
        return (s ? I.L : r.useEffect)((() => (B("target", t), B("container", e), R((({
          x: e,
          y: t
        }) => {
          o.scrollX.set(e.current), o.scrollXProgress.set(e.progress), o.scrollY.set(t.current), o.scrollYProgress.set(t.progress)
        }), {
          ...n,
          container: (null == e ? void 0 : e.current) || void 0,
          target: (null == t ? void 0 : t.current) || void 0
        }))), []), o
      }
    },
    160: (e, t, s) => {
      s.d(t, {
        tq: () => le,
        o5: () => ce
      });
      var n = s(289);

      function i(e) {
        return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
      }

      function r(e, t) {
        void 0 === e && (e = {}), void 0 === t && (t = {}), Object.keys(t).forEach((s => {
          void 0 === e[s] ? e[s] = t[s] : i(t[s]) && i(e[s]) && Object.keys(t[s]).length > 0 && r(e[s], t[s])
        }))
      }
      const o = {
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

      function a() {
        const e = "undefined" != typeof document ? document : {};
        return r(e, o), e
      }
      const l = {
        document: o,
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

      function c() {
        const e = "undefined" != typeof window ? window : {};
        return r(e, l), e
      }

      function d(e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t)
      }

      function u() {
        return Date.now()
      }

      function p(e) {
        return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
      }

      function h() {
        const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
          t = ["__proto__", "constructor", "prototype"];
        for (let n = 1; n < arguments.length; n += 1) {
          const i = n < 0 || arguments.length <= n ? void 0 : arguments[n];
          if (null != i && (s = i, !("undefined" != typeof window && void 0 !== window.HTMLElement ? s instanceof HTMLElement : s && (1 === s.nodeType || 11 === s.nodeType)))) {
            const s = Object.keys(Object(i)).filter((e => t.indexOf(e) < 0));
            for (let t = 0, n = s.length; t < n; t += 1) {
              const n = s[t],
                r = Object.getOwnPropertyDescriptor(i, n);
              void 0 !== r && r.enumerable && (p(e[n]) && p(i[n]) ? i[n].__swiper__ ? e[n] = i[n] : h(e[n], i[n]) : !p(e[n]) && p(i[n]) ? (e[n] = {}, i[n].__swiper__ ? e[n] = i[n] : h(e[n], i[n])) : e[n] = i[n])
            }
          }
        }
        var s;
        return e
      }

      function m(e, t, s) {
        e.style.setProperty(t, s)
      }

      function f(e) {
        let {
          swiper: t,
          targetPosition: s,
          side: n
        } = e;
        const i = c(),
          r = -t.translate;
        let o, a = null;
        const l = t.params.speed;
        t.wrapperEl.style.scrollSnapType = "none", i.cancelAnimationFrame(t.cssModeFrameID);
        const d = s > r ? "next" : "prev",
          u = (e, t) => "next" === d && e >= t || "prev" === d && e <= t,
          p = () => {
            o = (new Date).getTime(), null === a && (a = o);
            const e = Math.max(Math.min((o - a) / l, 1), 0),
              c = .5 - Math.cos(e * Math.PI) / 2;
            let d = r + c * (s - r);
            if (u(d, s) && (d = s), t.wrapperEl.scrollTo({
                [n]: d
              }), u(d, s)) return t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.scrollSnapType = "", setTimeout((() => {
              t.wrapperEl.style.overflow = "", t.wrapperEl.scrollTo({
                [n]: d
              })
            })), void i.cancelAnimationFrame(t.cssModeFrameID);
            t.cssModeFrameID = i.requestAnimationFrame(p)
          };
        p()
      }

      function v(e, t) {
        return void 0 === t && (t = ""), [...e.children].filter((e => e.matches(t)))
      }

      function g(e, t) {
        return c().getComputedStyle(e, null).getPropertyValue(t)
      }

      function y(e) {
        let t, s = e;
        if (s) {
          for (t = 0; null !== (s = s.previousSibling);) 1 === s.nodeType && (t += 1);
          return t
        }
      }

      function x(e, t, s) {
        const n = c();
        return s ? e["width" === t ? "offsetWidth" : "offsetHeight"] + parseFloat(n.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-right" : "margin-top")) + parseFloat(n.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-left" : "margin-bottom")) : e.offsetWidth
      }
      let w, b, S;

      function T() {
        return w || (w = function() {
          const e = c(),
            t = a();
          return {
            smoothScroll: t.documentElement && t.documentElement.style && "scrollBehavior" in t.documentElement.style,
            touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch)
          }
        }()), w
      }
      var E = {
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
      const P = (e, t) => {
          if (!e || e.destroyed || !e.params) return;
          const s = t.closest(e.isElement ? "swiper-slide" : `.${e.params.slideClass}`);
          if (s) {
            const t = s.querySelector(`.${e.params.lazyPreloaderClass}`);
            t && t.remove()
          }
        },
        C = (e, t) => {
          if (!e.slides[t]) return;
          const s = e.slides[t].querySelector('[loading="lazy"]');
          s && s.removeAttribute("loading")
        },
        M = e => {
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
              r.includes(t.column) && C(e, s)
            }))
          }
          const r = i + n - 1;
          if (e.params.rewind || e.params.loop)
            for (let n = i - t; n <= r + t; n += 1) {
              const t = (n % s + s) % s;
              (t < i || t > r) && C(e, t)
            } else
              for (let n = Math.max(i - t, 0); n <= Math.min(r + t, s - 1); n += 1) n !== i && (n > r || n < i) && C(e, n)
        };
      var A = {
        updateSize: function() {
          const e = this;
          let t, s;
          const n = e.el;
          t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : n.clientWidth, s = void 0 !== e.params.height && null !== e.params.height ? e.params.height : n.clientHeight, 0 === t && e.isHorizontal() || 0 === s && e.isVertical() || (t = t - parseInt(g(n, "padding-left") || 0, 10) - parseInt(g(n, "padding-right") || 0, 10), s = s - parseInt(g(n, "padding-top") || 0, 10) - parseInt(g(n, "padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(s) && (s = 0), Object.assign(e, {
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
              slidesEl: r,
              size: o,
              rtlTranslate: a,
              wrongRTL: l
            } = e,
            c = e.virtual && n.virtual.enabled,
            d = c ? e.virtual.slides.length : e.slides.length,
            u = v(r, `.${e.params.slideClass}, swiper-slide`),
            p = c ? e.virtual.slides.length : u.length;
          let h = [];
          const f = [],
            y = [];
          let w = n.slidesOffsetBefore;
          "function" == typeof w && (w = n.slidesOffsetBefore.call(e));
          let b = n.slidesOffsetAfter;
          "function" == typeof b && (b = n.slidesOffsetAfter.call(e));
          const S = e.snapGrid.length,
            T = e.slidesGrid.length;
          let E = n.spaceBetween,
            P = -w,
            C = 0,
            M = 0;
          if (void 0 === o) return;
          "string" == typeof E && E.indexOf("%") >= 0 ? E = parseFloat(E.replace("%", "")) / 100 * o : "string" == typeof E && (E = parseFloat(E)), e.virtualSize = -E, u.forEach((e => {
            a ? e.style.marginLeft = "" : e.style.marginRight = "", e.style.marginBottom = "", e.style.marginTop = ""
          })), n.centeredSlides && n.cssMode && (m(i, "--swiper-centered-offset-before", ""), m(i, "--swiper-centered-offset-after", ""));
          const A = n.grid && n.grid.rows > 1 && e.grid;
          let k;
          A && e.grid.initSlides(p);
          const L = "auto" === n.slidesPerView && n.breakpoints && Object.keys(n.breakpoints).filter((e => void 0 !== n.breakpoints[e].slidesPerView)).length > 0;
          for (let i = 0; i < p; i += 1) {
            let r;
            if (k = 0, u[i] && (r = u[i]), A && e.grid.updateSlide(i, r, p, t), !u[i] || "none" !== g(r, "display")) {
              if ("auto" === n.slidesPerView) {
                L && (u[i].style[t("width")] = "");
                const o = getComputedStyle(r),
                  a = r.style.transform,
                  l = r.style.webkitTransform;
                if (a && (r.style.transform = "none"), l && (r.style.webkitTransform = "none"), n.roundLengths) k = e.isHorizontal() ? x(r, "width", !0) : x(r, "height", !0);
                else {
                  const e = s(o, "width"),
                    t = s(o, "padding-left"),
                    n = s(o, "padding-right"),
                    i = s(o, "margin-left"),
                    a = s(o, "margin-right"),
                    l = o.getPropertyValue("box-sizing");
                  if (l && "border-box" === l) k = e + i + a;
                  else {
                    const {
                      clientWidth: s,
                      offsetWidth: o
                    } = r;
                    k = e + t + n + i + a + (o - s)
                  }
                }
                a && (r.style.transform = a), l && (r.style.webkitTransform = l), n.roundLengths && (k = Math.floor(k))
              } else k = (o - (n.slidesPerView - 1) * E) / n.slidesPerView, n.roundLengths && (k = Math.floor(k)), u[i] && (u[i].style[t("width")] = `${k}px`);
              u[i] && (u[i].swiperSlideSize = k), y.push(k), n.centeredSlides ? (P = P + k / 2 + C / 2 + E, 0 === C && 0 !== i && (P = P - o / 2 - E), 0 === i && (P = P - o / 2 - E), Math.abs(P) < .001 && (P = 0), n.roundLengths && (P = Math.floor(P)), M % n.slidesPerGroup == 0 && h.push(P), f.push(P)) : (n.roundLengths && (P = Math.floor(P)), (M - Math.min(e.params.slidesPerGroupSkip, M)) % e.params.slidesPerGroup == 0 && h.push(P), f.push(P), P = P + k + E), e.virtualSize += k + E, C = k, M += 1
            }
          }
          if (e.virtualSize = Math.max(e.virtualSize, o) + b, a && l && ("slide" === n.effect || "coverflow" === n.effect) && (i.style.width = `${e.virtualSize+E}px`), n.setWrapperSize && (i.style[t("width")] = `${e.virtualSize+E}px`), A && e.grid.updateWrapperSize(k, h, t), !n.centeredSlides) {
            const t = [];
            for (let s = 0; s < h.length; s += 1) {
              let i = h[s];
              n.roundLengths && (i = Math.floor(i)), h[s] <= e.virtualSize - o && t.push(i)
            }
            h = t, Math.floor(e.virtualSize - o) - Math.floor(h[h.length - 1]) > 1 && h.push(e.virtualSize - o)
          }
          if (c && n.loop) {
            const t = y[0] + E;
            if (n.slidesPerGroup > 1) {
              const s = Math.ceil((e.virtual.slidesBefore + e.virtual.slidesAfter) / n.slidesPerGroup),
                i = t * n.slidesPerGroup;
              for (let e = 0; e < s; e += 1) h.push(h[h.length - 1] + i)
            }
            for (let s = 0; s < e.virtual.slidesBefore + e.virtual.slidesAfter; s += 1) 1 === n.slidesPerGroup && h.push(h[h.length - 1] + t), f.push(f[f.length - 1] + t), e.virtualSize += t
          }
          if (0 === h.length && (h = [0]), 0 !== E) {
            const s = e.isHorizontal() && a ? "marginLeft" : t("marginRight");
            u.filter(((e, t) => !(n.cssMode && !n.loop) || t !== u.length - 1)).forEach((e => {
              e.style[s] = `${E}px`
            }))
          }
          if (n.centeredSlides && n.centeredSlidesBounds) {
            let e = 0;
            y.forEach((t => {
              e += t + (E || 0)
            })), e -= E;
            const t = e - o;
            h = h.map((e => e <= 0 ? -w : e > t ? t + b : e))
          }
          if (n.centerInsufficientSlides) {
            let e = 0;
            if (y.forEach((t => {
                e += t + (E || 0)
              })), e -= E, e < o) {
              const t = (o - e) / 2;
              h.forEach(((e, s) => {
                h[s] = e - t
              })), f.forEach(((e, s) => {
                f[s] = e + t
              }))
            }
          }
          if (Object.assign(e, {
              slides: u,
              snapGrid: h,
              slidesGrid: f,
              slidesSizesGrid: y
            }), n.centeredSlides && n.cssMode && !n.centeredSlidesBounds) {
            m(i, "--swiper-centered-offset-before", -h[0] + "px"), m(i, "--swiper-centered-offset-after", e.size / 2 - y[y.length - 1] / 2 + "px");
            const t = -e.snapGrid[0],
              s = -e.slidesGrid[0];
            e.snapGrid = e.snapGrid.map((e => e + t)), e.slidesGrid = e.slidesGrid.map((e => e + s))
          }
          if (p !== d && e.emit("slidesLengthChange"), h.length !== S && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), f.length !== T && e.emit("slidesGridLengthChange"), n.watchSlidesProgress && e.updateSlidesOffset(), !(c || n.cssMode || "slide" !== n.effect && "fade" !== n.effect)) {
            const t = `${n.containerModifierClass}backface-hidden`,
              s = e.el.classList.contains(t);
            p <= n.maxBackfaceHiddenSlides ? s || e.el.classList.add(t) : s && e.el.classList.remove(t)
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
            r = e.virtual && s.virtual.enabled,
            o = e => v(n, `.${s.slideClass}${e}, swiper-slide${e}`)[0];
          let a;
          if (t.forEach((e => {
              e.classList.remove(s.slideActiveClass, s.slideNextClass, s.slidePrevClass)
            })), r)
            if (s.loop) {
              let t = i - e.virtual.slidesBefore;
              t < 0 && (t = e.virtual.slides.length + t), t >= e.virtual.slides.length && (t -= e.virtual.slides.length), a = o(`[data-swiper-slide-index="${t}"]`)
            } else a = o(`[data-swiper-slide-index="${i}"]`);
          else a = t[i];
          if (a) {
            a.classList.add(s.slideActiveClass);
            let e = function(e, t) {
              const s = [];
              for (; e.nextElementSibling;) {
                const n = e.nextElementSibling;
                t ? n.matches(t) && s.push(n) : s.push(n), e = n
              }
              return s
            }(a, `.${s.slideClass}, swiper-slide`)[0];
            s.loop && !e && (e = t[0]), e && e.classList.add(s.slideNextClass);
            let n = function(e, t) {
              const s = [];
              for (; e.previousElementSibling;) {
                const n = e.previousElementSibling;
                t ? n.matches(t) && s.push(n) : s.push(n), e = n
              }
              return s
            }(a, `.${s.slideClass}, swiper-slide`)[0];
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
          }), t.initialized && M(t), t.emit("activeIndexChange"), t.emit("snapIndexChange"), o !== u && t.emit("realIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange")
        },
        updateClickedSlide: function(e) {
          const t = this,
            s = t.params,
            n = e.closest(`.${s.slideClass}, swiper-slide`);
          let i, r = !1;
          if (n)
            for (let e = 0; e < t.slides.length; e += 1)
              if (t.slides[e] === n) {
                r = !0, i = e;
                break
              } if (!n || !r) return t.clickedSlide = void 0, void(t.clickedIndex = void 0);
          t.clickedSlide = n, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(n.getAttribute("data-swiper-slide-index"), 10) : t.clickedIndex = i, s.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
        }
      };

      function k(e) {
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
      var L = {
        slideTo: function(e, t, s, n, i) {
          void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), "string" == typeof e && (e = parseInt(e, 10));
          const r = this;
          let o = e;
          o < 0 && (o = 0);
          const {
            params: a,
            snapGrid: l,
            slidesGrid: c,
            previousIndex: d,
            activeIndex: u,
            rtlTranslate: p,
            wrapperEl: h,
            enabled: m
          } = r;
          if (r.animating && a.preventInteractionOnTransition || !m && !n && !i) return !1;
          const v = Math.min(r.params.slidesPerGroupSkip, o);
          let g = v + Math.floor((o - v) / r.params.slidesPerGroup);
          g >= l.length && (g = l.length - 1);
          const y = -l[g];
          if (a.normalizeSlideIndex)
            for (let e = 0; e < c.length; e += 1) {
              const t = -Math.floor(100 * y),
                s = Math.floor(100 * c[e]),
                n = Math.floor(100 * c[e + 1]);
              void 0 !== c[e + 1] ? t >= s && t < n - (n - s) / 2 ? o = e : t >= s && t < n && (o = e + 1) : t >= s && (o = e)
            }
          if (r.initialized && o !== u) {
            if (!r.allowSlideNext && (p ? y > r.translate && y > r.minTranslate() : y < r.translate && y < r.minTranslate())) return !1;
            if (!r.allowSlidePrev && y > r.translate && y > r.maxTranslate() && (u || 0) !== o) return !1
          }
          let x;
          if (o !== (d || 0) && s && r.emit("beforeSlideChangeStart"), r.updateProgress(y), x = o > u ? "next" : o < u ? "prev" : "reset", p && -y === r.translate || !p && y === r.translate) return r.updateActiveIndex(o), a.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !== a.effect && r.setTranslate(y), "reset" !== x && (r.transitionStart(s, x), r.transitionEnd(s, x)), !1;
          if (a.cssMode) {
            const e = r.isHorizontal(),
              s = p ? y : -y;
            if (0 === t) {
              const t = r.virtual && r.params.virtual.enabled;
              t && (r.wrapperEl.style.scrollSnapType = "none", r._immediateVirtual = !0), t && !r._cssModeVirtualInitialSet && r.params.initialSlide > 0 ? (r._cssModeVirtualInitialSet = !0, requestAnimationFrame((() => {
                h[e ? "scrollLeft" : "scrollTop"] = s
              }))) : h[e ? "scrollLeft" : "scrollTop"] = s, t && requestAnimationFrame((() => {
                r.wrapperEl.style.scrollSnapType = "", r._immediateVirtual = !1
              }))
            } else {
              if (!r.support.smoothScroll) return f({
                swiper: r,
                targetPosition: s,
                side: e ? "left" : "top"
              }), !0;
              h.scrollTo({
                [e ? "left" : "top"]: s,
                behavior: "smooth"
              })
            }
            return !0
          }
          return r.setTransition(t), r.setTranslate(y), r.updateActiveIndex(o), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, n), r.transitionStart(s, x), 0 === t ? r.transitionEnd(s, x) : r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function(e) {
            r && !r.destroyed && e.target === this && (r.wrapperEl.removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(s, x))
          }), r.wrapperEl.addEventListener("transitionend", r.onSlideToWrapperTransitionEnd)), !0
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
            n.loopFix({
              direction: "next"
            }), n._clientLeft = n.wrapperEl.clientLeft
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
          return n.slideTo(f, e, t, s)
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
          let i, r = e.clickedIndex;
          const o = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
          if (t.loop) {
            if (e.animating) return;
            i = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10), t.centeredSlides ? r < e.loopedSlides - n / 2 || r > e.slides.length - e.loopedSlides + n / 2 ? (e.loopFix(), r = e.getSlideIndex(v(s, `${o}[data-swiper-slide-index="${i}"]`)[0]), d((() => {
              e.slideTo(r)
            }))) : e.slideTo(r) : r > e.slides.length - n ? (e.loopFix(), r = e.getSlideIndex(v(s, `${o}[data-swiper-slide-index="${i}"]`)[0]), d((() => {
              e.slideTo(r)
            }))) : e.slideTo(r)
          } else e.slideTo(r)
        }
      };

      function V(e) {
        const t = this,
          s = a(),
          n = c(),
          i = t.touchEventsData;
        i.evCache.push(e);
        const {
          params: r,
          touches: o,
          enabled: l
        } = t;
        if (!l) return;
        if (!r.simulateTouch && "mouse" === e.pointerType) return;
        if (t.animating && r.preventInteractionOnTransition) return;
        !t.animating && r.cssMode && r.loop && t.loopFix();
        let d = e;
        d.originalEvent && (d = d.originalEvent);
        let p = d.target;
        if ("wrapper" === r.touchEventsTarget && !t.wrapperEl.contains(p)) return;
        if ("which" in d && 3 === d.which) return;
        if ("button" in d && d.button > 0) return;
        if (i.isTouched && i.isMoved) return;
        const h = !!r.noSwipingClass && "" !== r.noSwipingClass,
          m = e.composedPath ? e.composedPath() : e.path;
        h && d.target && d.target.shadowRoot && m && (p = m[0]);
        const f = r.noSwipingSelector ? r.noSwipingSelector : `.${r.noSwipingClass}`,
          v = !(!d.target || !d.target.shadowRoot);
        if (r.noSwiping && (v ? function(e, t) {
            return void 0 === t && (t = this),
              function t(s) {
                if (!s || s === a() || s === c()) return null;
                s.assignedSlot && (s = s.assignedSlot);
                const n = s.closest(e);
                return n || s.getRootNode ? n || t(s.getRootNode().host) : null
              }(t)
          }(f, p) : p.closest(f))) return void(t.allowClick = !0);
        if (r.swipeHandler && !p.closest(r.swipeHandler)) return;
        o.currentX = d.pageX, o.currentY = d.pageY;
        const g = o.currentX,
          y = o.currentY,
          x = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
          w = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
        if (x && (g <= w || g >= n.innerWidth - w)) {
          if ("prevent" !== x) return;
          e.preventDefault()
        }
        Object.assign(i, {
          isTouched: !0,
          isMoved: !1,
          allowTouchCallbacks: !0,
          isScrolling: void 0,
          startMoving: void 0
        }), o.startX = g, o.startY = y, i.touchStartTime = u(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, r.threshold > 0 && (i.allowThresholdMove = !1);
        let b = !0;
        p.matches(i.focusableElements) && (b = !1, "SELECT" === p.nodeName && (i.isTouched = !1)), s.activeElement && s.activeElement.matches(i.focusableElements) && s.activeElement !== p && s.activeElement.blur();
        const S = b && t.allowTouchMove && r.touchStartPreventDefault;
        !r.touchStartForcePreventDefault && !S || p.isContentEditable || d.preventDefault(), r.freeMode && r.freeMode.enabled && t.freeMode && t.animating && !r.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", d)
      }

      function D(e) {
        const t = a(),
          s = this,
          n = s.touchEventsData,
          {
            params: i,
            touches: r,
            rtlTranslate: o,
            enabled: l
          } = s;
        if (!l) return;
        if (!i.simulateTouch && "mouse" === e.pointerType) return;
        let c = e;
        if (c.originalEvent && (c = c.originalEvent), !n.isTouched) return void(n.startMoving && n.isScrolling && s.emit("touchMoveOpposite", c));
        const d = n.evCache.findIndex((e => e.pointerId === c.pointerId));
        d >= 0 && (n.evCache[d] = c);
        const p = n.evCache.length > 1 ? n.evCache[0] : c,
          h = p.pageX,
          m = p.pageY;
        if (c.preventedByNestedSwiper) return r.startX = h, void(r.startY = m);
        if (!s.allowTouchMove) return c.target.matches(n.focusableElements) || (s.allowClick = !1), void(n.isTouched && (Object.assign(r, {
          startX: h,
          startY: m,
          prevX: s.touches.currentX,
          prevY: s.touches.currentY,
          currentX: h,
          currentY: m
        }), n.touchStartTime = u()));
        if (i.touchReleaseOnEdges && !i.loop)
          if (s.isVertical()) {
            if (m < r.startY && s.translate <= s.maxTranslate() || m > r.startY && s.translate >= s.minTranslate()) return n.isTouched = !1, void(n.isMoved = !1)
          } else if (h < r.startX && s.translate <= s.maxTranslate() || h > r.startX && s.translate >= s.minTranslate()) return;
        if (t.activeElement && c.target === t.activeElement && c.target.matches(n.focusableElements)) return n.isMoved = !0, void(s.allowClick = !1);
        if (n.allowTouchCallbacks && s.emit("touchMove", c), c.targetTouches && c.targetTouches.length > 1) return;
        r.currentX = h, r.currentY = m;
        const f = r.currentX - r.startX,
          v = r.currentY - r.startY;
        if (s.params.threshold && Math.sqrt(f ** 2 + v ** 2) < s.params.threshold) return;
        if (void 0 === n.isScrolling) {
          let e;
          s.isHorizontal() && r.currentY === r.startY || s.isVertical() && r.currentX === r.startX ? n.isScrolling = !1 : f * f + v * v >= 25 && (e = 180 * Math.atan2(Math.abs(v), Math.abs(f)) / Math.PI, n.isScrolling = s.isHorizontal() ? e > i.touchAngle : 90 - e > i.touchAngle)
        }
        if (n.isScrolling && s.emit("touchMoveOpposite", c), void 0 === n.startMoving && (r.currentX === r.startX && r.currentY === r.startY || (n.startMoving = !0)), n.isScrolling || s.zoom && s.params.zoom && s.params.zoom.enabled && n.evCache.length > 1) return void(n.isTouched = !1);
        if (!n.startMoving) return;
        s.allowClick = !1, !i.cssMode && c.cancelable && c.preventDefault(), i.touchMoveStopPropagation && !i.nested && c.stopPropagation();
        let g = s.isHorizontal() ? f : v,
          y = s.isHorizontal() ? r.currentX - r.previousX : r.currentY - r.previousY;
        i.oneWayMovement && (g = Math.abs(g) * (o ? 1 : -1), y = Math.abs(y) * (o ? 1 : -1)), r.diff = g, g *= i.touchRatio, o && (g = -g, y = -y);
        const x = s.touchesDirection;
        s.swipeDirection = g > 0 ? "prev" : "next", s.touchesDirection = y > 0 ? "prev" : "next";
        const w = s.params.loop && !i.cssMode;
        if (!n.isMoved) {
          if (w && s.loopFix({
              direction: s.swipeDirection
            }), n.startTranslate = s.getTranslate(), s.setTransition(0), s.animating) {
            const e = new window.CustomEvent("transitionend", {
              bubbles: !0,
              cancelable: !0
            });
            s.wrapperEl.dispatchEvent(e)
          }
          n.allowMomentumBounce = !1, !i.grabCursor || !0 !== s.allowSlideNext && !0 !== s.allowSlidePrev || s.setGrabCursor(!0), s.emit("sliderFirstMove", c)
        }
        let b;
        n.isMoved && x !== s.touchesDirection && w && Math.abs(g) >= 1 && (s.loopFix({
          direction: s.swipeDirection,
          setTranslate: !0
        }), b = !0), s.emit("sliderMove", c), n.isMoved = !0, n.currentTranslate = g + n.startTranslate;
        let S = !0,
          T = i.resistanceRatio;
        if (i.touchReleaseOnEdges && (T = 0), g > 0 ? (w && !b && n.currentTranslate > (i.centeredSlides ? s.minTranslate() - s.size / 2 : s.minTranslate()) && s.loopFix({
            direction: "prev",
            setTranslate: !0,
            activeSlideIndex: 0
          }), n.currentTranslate > s.minTranslate() && (S = !1, i.resistance && (n.currentTranslate = s.minTranslate() - 1 + (-s.minTranslate() + n.startTranslate + g) ** T))) : g < 0 && (w && !b && n.currentTranslate < (i.centeredSlides ? s.maxTranslate() + s.size / 2 : s.maxTranslate()) && s.loopFix({
            direction: "next",
            setTranslate: !0,
            activeSlideIndex: s.slides.length - ("auto" === i.slidesPerView ? s.slidesPerViewDynamic() : Math.ceil(parseFloat(i.slidesPerView, 10)))
          }), n.currentTranslate < s.maxTranslate() && (S = !1, i.resistance && (n.currentTranslate = s.maxTranslate() + 1 - (s.maxTranslate() - n.startTranslate - g) ** T))), S && (c.preventedByNestedSwiper = !0), !s.allowSlideNext && "next" === s.swipeDirection && n.currentTranslate < n.startTranslate && (n.currentTranslate = n.startTranslate), !s.allowSlidePrev && "prev" === s.swipeDirection && n.currentTranslate > n.startTranslate && (n.currentTranslate = n.startTranslate), s.allowSlidePrev || s.allowSlideNext || (n.currentTranslate = n.startTranslate), i.threshold > 0) {
          if (!(Math.abs(g) > i.threshold || n.allowThresholdMove)) return void(n.currentTranslate = n.startTranslate);
          if (!n.allowThresholdMove) return n.allowThresholdMove = !0, r.startX = r.currentX, r.startY = r.currentY, n.currentTranslate = n.startTranslate, void(r.diff = s.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY)
        }
        i.followFinger && !i.cssMode && ((i.freeMode && i.freeMode.enabled && s.freeMode || i.watchSlidesProgress) && (s.updateActiveIndex(), s.updateSlidesClasses()), i.freeMode && i.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(), s.updateProgress(n.currentTranslate), s.setTranslate(n.currentTranslate))
      }

      function O(e) {
        const t = this,
          s = t.touchEventsData,
          n = s.evCache.findIndex((t => t.pointerId === e.pointerId));
        if (n >= 0 && s.evCache.splice(n, 1), ["pointercancel", "pointerout", "pointerleave"].includes(e.type) && ("pointercancel" !== e.type || !t.browser.isSafari && !t.browser.isWebView)) return;
        const {
          params: i,
          touches: r,
          rtlTranslate: o,
          slidesGrid: a,
          enabled: l
        } = t;
        if (!l) return;
        if (!i.simulateTouch && "mouse" === e.pointerType) return;
        let c = e;
        if (c.originalEvent && (c = c.originalEvent), s.allowTouchCallbacks && t.emit("touchEnd", c), s.allowTouchCallbacks = !1, !s.isTouched) return s.isMoved && i.grabCursor && t.setGrabCursor(!1), s.isMoved = !1, void(s.startMoving = !1);
        i.grabCursor && s.isMoved && s.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
        const p = u(),
          h = p - s.touchStartTime;
        if (t.allowClick) {
          const e = c.path || c.composedPath && c.composedPath();
          t.updateClickedSlide(e && e[0] || c.target), t.emit("tap click", c), h < 300 && p - s.lastClickTime < 300 && t.emit("doubleTap doubleClick", c)
        }
        if (s.lastClickTime = u(), d((() => {
            t.destroyed || (t.allowClick = !0)
          })), !s.isTouched || !s.isMoved || !t.swipeDirection || 0 === r.diff || s.currentTranslate === s.startTranslate) return s.isTouched = !1, s.isMoved = !1, void(s.startMoving = !1);
        let m;
        if (s.isTouched = !1, s.isMoved = !1, s.startMoving = !1, m = i.followFinger ? o ? t.translate : -t.translate : -s.currentTranslate, i.cssMode) return;
        if (i.freeMode && i.freeMode.enabled) return void t.freeMode.onTouchEnd({
          currentPos: m
        });
        let f = 0,
          v = t.slidesSizesGrid[0];
        for (let e = 0; e < a.length; e += e < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup) {
          const t = e < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
          void 0 !== a[e + t] ? m >= a[e] && m < a[e + t] && (f = e, v = a[e + t] - a[e]) : m >= a[e] && (f = e, v = a[a.length - 1] - a[a.length - 2])
        }
        let g = null,
          y = null;
        i.rewind && (t.isBeginning ? y = i.virtual && i.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (g = 0));
        const x = (m - a[f]) / v,
          w = f < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
        if (h > i.longSwipesMs) {
          if (!i.longSwipes) return void t.slideTo(t.activeIndex);
          "next" === t.swipeDirection && (x >= i.longSwipesRatio ? t.slideTo(i.rewind && t.isEnd ? g : f + w) : t.slideTo(f)), "prev" === t.swipeDirection && (x > 1 - i.longSwipesRatio ? t.slideTo(f + w) : null !== y && x < 0 && Math.abs(x) > i.longSwipesRatio ? t.slideTo(y) : t.slideTo(f))
        } else {
          if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
          !t.navigation || c.target !== t.navigation.nextEl && c.target !== t.navigation.prevEl ? ("next" === t.swipeDirection && t.slideTo(null !== g ? g : f + w), "prev" === t.swipeDirection && t.slideTo(null !== y ? y : f)) : c.target === t.navigation.nextEl ? t.slideTo(f + w) : t.slideTo(f)
        }
      }

      function R() {
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

      function I(e) {
        const t = this;
        t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())))
      }

      function B() {
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

      function j(e) {
        const t = this;
        P(t, e.target), t.params.cssMode || "auto" !== t.params.slidesPerView && !t.params.autoHeight || t.update()
      }
      let z = !1;

      function F() {}
      const _ = (e, t) => {
          const s = a(),
            {
              params: n,
              el: i,
              wrapperEl: r,
              device: o
            } = e,
            l = !!n.nested,
            c = "on" === t ? "addEventListener" : "removeEventListener",
            d = t;
          i[c]("pointerdown", e.onTouchStart, {
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
          }), (n.preventClicks || n.preventClicksPropagation) && i[c]("click", e.onClick, !0), n.cssMode && r[c]("scroll", e.onScroll), n.updateOnWindowResize ? e[d](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", R, !0) : e[d]("observerUpdate", R, !0), i[c]("load", e.onLoad, {
            capture: !0
          })
        },
        N = (e, t) => e.grid && t.grid && t.grid.rows > 1;
      var $ = {
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

      function W(e, t) {
        return function(s) {
          void 0 === s && (s = {});
          const n = Object.keys(s)[0],
            i = s[n];
          "object" == typeof i && null !== i ? (["navigation", "pagination", "scrollbar"].indexOf(n) >= 0 && !0 === e[n] && (e[n] = {
            auto: !0
          }), n in e && "enabled" in i ? (!0 === e[n] && (e[n] = {
            enabled: !0
          }), "object" != typeof e[n] || "enabled" in e[n] || (e[n].enabled = !0), e[n] || (e[n] = {
            enabled: !1
          }), h(t, s)) : h(t, s)) : h(t, s)
        }
      }
      const G = {
          eventsEmitter: E,
          update: A,
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
              let r = function(e, t) {
                void 0 === t && (t = "x");
                const s = c();
                let n, i, r;
                const o = function(e) {
                  const t = c();
                  let s;
                  return t.getComputedStyle && (s = t.getComputedStyle(e, null)), !s && e.currentStyle && (s = e.currentStyle), s || (s = e.style), s
                }(e);
                return s.WebKitCSSMatrix ? (i = o.transform || o.webkitTransform, i.split(",").length > 6 && (i = i.split(", ").map((e => e.replace(",", "."))).join(", ")), r = new s.WebKitCSSMatrix("none" === i ? "" : i)) : (r = o.MozTransform || o.OTransform || o.MsTransform || o.msTransform || o.transform || o.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), n = r.toString().split(",")), "x" === t && (i = s.WebKitCSSMatrix ? r.m41 : 16 === n.length ? parseFloat(n[12]) : parseFloat(n[4])), "y" === t && (i = s.WebKitCSSMatrix ? r.m42 : 16 === n.length ? parseFloat(n[13]) : parseFloat(n[5])), i || 0
              }(i, e);
              return r += this.cssOverflowAdjustment(), s && (r = -r), r || 0
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
              const r = this,
                {
                  params: o,
                  wrapperEl: a
                } = r;
              if (r.animating && o.preventInteractionOnTransition) return !1;
              const l = r.minTranslate(),
                c = r.maxTranslate();
              let d;
              if (d = n && e > l ? l : n && e < c ? c : e, r.updateProgress(d), o.cssMode) {
                const e = r.isHorizontal();
                if (0 === t) a[e ? "scrollLeft" : "scrollTop"] = -d;
                else {
                  if (!r.support.smoothScroll) return f({
                    swiper: r,
                    targetPosition: -d,
                    side: e ? "left" : "top"
                  }), !0;
                  a.scrollTo({
                    [e ? "left" : "top"]: -d,
                    behavior: "smooth"
                  })
                }
                return !0
              }
              return 0 === t ? (r.setTransition(0), r.setTranslate(d), s && (r.emit("beforeTransitionStart", t, i), r.emit("transitionEnd"))) : (r.setTransition(t), r.setTranslate(d), s && (r.emit("beforeTransitionStart", t, i), r.emit("transitionStart")), r.animating || (r.animating = !0, r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function(e) {
                r && !r.destroyed && e.target === this && (r.wrapperEl.removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.onTranslateToWrapperTransitionEnd = null, delete r.onTranslateToWrapperTransitionEnd, s && r.emit("transitionEnd"))
              }), r.wrapperEl.addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd))), !0
            }
          },
          transition: {
            setTransition: function(e, t) {
              const s = this;
              s.params.cssMode || (s.wrapperEl.style.transitionDuration = `${e}ms`), s.emit("setTransition", e, t)
            },
            transitionStart: function(e, t) {
              void 0 === e && (e = !0);
              const s = this,
                {
                  params: n
                } = s;
              n.cssMode || (n.autoHeight && s.updateAutoHeight(), k({
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
              s.animating = !1, n.cssMode || (s.setTransition(0), k({
                swiper: s,
                runCallbacks: e,
                direction: t,
                step: "End"
              }))
            }
          },
          slide: L,
          loop: {
            loopCreate: function(e) {
              const t = this,
                {
                  params: s,
                  slidesEl: n
                } = t;
              !s.loop || t.virtual && t.params.virtual.enabled || (v(n, `.${s.slideClass}, swiper-slide`).forEach(((e, t) => {
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
              const v = [],
                g = [];
              let y = l.activeIndex;
              void 0 === r ? r = l.getSlideIndex(l.slides.filter((e => e.classList.contains(h.slideActiveClass)))[0]) : y = r;
              const x = "next" === n || !n,
                w = "prev" === n || !n;
              let b = 0,
                S = 0;
              if (r < f) {
                b = Math.max(f - r, h.slidesPerGroup);
                for (let e = 0; e < f - r; e += 1) {
                  const t = e - Math.floor(e / c.length) * c.length;
                  v.push(c.length - t - 1)
                }
              } else if (r > l.slides.length - 2 * f) {
                S = Math.max(r - (l.slides.length - 2 * f), h.slidesPerGroup);
                for (let e = 0; e < S; e += 1) {
                  const t = e - Math.floor(e / c.length) * c.length;
                  g.push(t)
                }
              }
              if (w && v.forEach((e => {
                  l.slides[e].swiperLoopMoveDOM = !0, p.prepend(l.slides[e]), l.slides[e].swiperLoopMoveDOM = !1
                })), x && g.forEach((e => {
                  l.slides[e].swiperLoopMoveDOM = !0, p.append(l.slides[e]), l.slides[e].swiperLoopMoveDOM = !1
                })), l.recalcSlides(), "auto" === h.slidesPerView && l.updateSlides(), h.watchSlidesProgress && l.updateSlidesOffset(), s)
                if (v.length > 0 && w)
                  if (void 0 === t) {
                    const e = l.slidesGrid[y],
                      t = l.slidesGrid[y + b] - e;
                    a ? l.setTranslate(l.translate - t) : (l.slideTo(y + b, 0, !1, !0), i && (l.touches[l.isHorizontal() ? "startX" : "startY"] += t, l.touchEventsData.currentTranslate = l.translate))
                  } else i && (l.slideToLoop(t, 0, !1, !0), l.touchEventsData.currentTranslate = l.translate);
              else if (g.length > 0 && x)
                if (void 0 === t) {
                  const e = l.slidesGrid[y],
                    t = l.slidesGrid[y - S] - e;
                  a ? l.setTranslate(l.translate - t) : (l.slideTo(y - S, 0, !1, !0), i && (l.touches[l.isHorizontal() ? "startX" : "startY"] += t, l.touchEventsData.currentTranslate = l.translate))
                } else l.slideToLoop(t, 0, !1, !0);
              if (l.allowSlidePrev = d, l.allowSlideNext = u, l.controller && l.controller.control && !o) {
                const e = {
                  slideRealIndex: t,
                  slideTo: !1,
                  direction: n,
                  setTranslate: i,
                  activeSlideIndex: r,
                  byController: !0
                };
                Array.isArray(l.controller.control) ? l.controller.control.forEach((t => {
                  !t.destroyed && t.params.loop && t.loopFix(e)
                })) : l.controller.control instanceof l.constructor && l.controller.control.params.loop && l.controller.control.loopFix(e)
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
                t = a(),
                {
                  params: s
                } = e;
              e.onTouchStart = V.bind(e), e.onTouchMove = D.bind(e), e.onTouchEnd = O.bind(e), s.cssMode && (e.onScroll = B.bind(e)), e.onClick = I.bind(e), e.onLoad = j.bind(e), z || (t.addEventListener("touchstart", F), z = !0), _(e, "on")
            },
            detachEvents: function() {
              _(this, "off")
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
                r = n.breakpoints;
              if (!r || r && 0 === Object.keys(r).length) return;
              const o = e.getBreakpoint(r, e.params.breakpointsBase, e.el);
              if (!o || e.currentBreakpoint === o) return;
              const a = (o in r ? r[o] : void 0) || e.originalParams,
                l = N(e, n),
                c = N(e, a),
                d = n.enabled;
              l && !c ? (i.classList.remove(`${n.containerModifierClass}grid`, `${n.containerModifierClass}grid-column`), e.emitContainerClasses()) : !l && c && (i.classList.add(`${n.containerModifierClass}grid`), (a.grid.fill && "column" === a.grid.fill || !a.grid.fill && "column" === n.grid.fill) && i.classList.add(`${n.containerModifierClass}grid-column`), e.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach((t => {
                if (void 0 === a[t]) return;
                const s = n[t] && n[t].enabled,
                  i = a[t] && a[t].enabled;
                s && !i && e[t].disable(), !s && i && e[t].enable()
              }));
              const u = a.direction && a.direction !== n.direction,
                p = n.loop && (a.slidesPerView !== n.slidesPerView || u);
              u && s && e.changeDirection(), h(e.params, a);
              const m = e.params.enabled;
              Object.assign(e, {
                allowTouchMove: e.params.allowTouchMove,
                allowSlideNext: e.params.allowSlideNext,
                allowSlidePrev: e.params.allowSlidePrev
              }), d && !m ? e.disable() : !d && m && e.enable(), e.currentBreakpoint = o, e.emit("_beforeBreakpoint", a), p && s && (e.loopDestroy(), e.loopCreate(t), e.updateSlides()), e.emit("breakpoint", a)
            },
            getBreakpoint: function(e, t, s) {
              if (void 0 === t && (t = "window"), !e || "container" === t && !s) return;
              let n = !1;
              const i = c(),
                r = "window" === t ? i.innerHeight : s.clientHeight,
                o = Object.keys(e).map((e => {
                  if ("string" == typeof e && 0 === e.indexOf("@")) {
                    const t = parseFloat(e.substr(1));
                    return {
                      value: r * t,
                      point: e
                    }
                  }
                  return {
                    value: e,
                    point: e
                  }
                }));
              o.sort(((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10)));
              for (let e = 0; e < o.length; e += 1) {
                const {
                  point: r,
                  value: a
                } = o[e];
                "window" === t ? i.matchMedia(`(min-width: ${a}px)`).matches && (n = r) : a <= s.clientWidth && (n = r)
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
        H = {};
      class U {
        constructor() {
          let e, t;
          for (var s = arguments.length, n = new Array(s), i = 0; i < s; i++) n[i] = arguments[i];
          1 === n.length && n[0].constructor && "Object" === Object.prototype.toString.call(n[0]).slice(8, -1) ? t = n[0] : [e, t] = n, t || (t = {}), t = h({}, t), e && !t.el && (t.el = e);
          const r = a();
          if (t.el && "string" == typeof t.el && r.querySelectorAll(t.el).length > 1) {
            const e = [];
            return r.querySelectorAll(t.el).forEach((s => {
              const n = h({}, t, {
                el: s
              });
              e.push(new U(n))
            })), e
          }
          const o = this;
          var l;
          o.__swiper__ = !0, o.support = T(), o.device = (void 0 === (l = {
            userAgent: t.userAgent
          }) && (l = {}), b || (b = function(e) {
            let {
              userAgent: t
            } = void 0 === e ? {} : e;
            const s = T(),
              n = c(),
              i = n.navigator.platform,
              r = t || n.navigator.userAgent,
              o = {
                ios: !1,
                android: !1
              },
              a = n.screen.width,
              l = n.screen.height,
              d = r.match(/(Android);?[\s\/]+([\d.]+)?/);
            let u = r.match(/(iPad).*OS\s([\d_]+)/);
            const p = r.match(/(iPod)(.*OS\s([\d_]+))?/),
              h = !u && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
              m = "Win32" === i;
            let f = "MacIntel" === i;
            return !u && f && s.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${a}x${l}`) >= 0 && (u = r.match(/(Version)\/([\d.]+)/), u || (u = [0, 1, "13_0_0"]), f = !1), d && !m && (o.os = "android", o.android = !0), (u || h || p) && (o.os = "ios", o.ios = !0), o
          }(l)), b), o.browser = (S || (S = function() {
            const e = c();
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
          }()), S), o.eventsListeners = {}, o.eventsAnyListeners = [], o.modules = [...o.__modules__], t.modules && Array.isArray(t.modules) && o.modules.push(...t.modules);
          const d = {};
          o.modules.forEach((e => {
            e({
              params: t,
              swiper: o,
              extendParams: W(t, d),
              on: o.on.bind(o),
              once: o.once.bind(o),
              off: o.off.bind(o),
              emit: o.emit.bind(o)
            })
          }));
          const u = h({}, $, d);
          return o.params = h({}, u, H, t), o.originalParams = h({}, o.params), o.passedParams = h({}, t), o.params && o.params.on && Object.keys(o.params.on).forEach((e => {
            o.on(e, o.params.on[e])
          })), o.params && o.params.onAny && o.onAny(o.params.onAny), Object.assign(o, {
            enabled: o.params.enabled,
            el: e,
            classNames: [],
            slides: [],
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: () => "horizontal" === o.params.direction,
            isVertical: () => "vertical" === o.params.direction,
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
            allowSlideNext: o.params.allowSlideNext,
            allowSlidePrev: o.params.allowSlidePrev,
            touchEventsData: {
              isTouched: void 0,
              isMoved: void 0,
              allowTouchCallbacks: void 0,
              touchStartTime: void 0,
              isScrolling: void 0,
              currentTranslate: void 0,
              startTranslate: void 0,
              allowThresholdMove: void 0,
              focusableElements: o.params.focusableElements,
              lastClickTime: 0,
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              startMoving: void 0,
              evCache: []
            },
            allowClick: !0,
            allowTouchMove: o.params.allowTouchMove,
            touches: {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0
            },
            imagesToLoad: [],
            imagesLoaded: 0
          }), o.emit("_swiper"), o.params.init && o.init(), o
        }
        getSlideIndex(e) {
          const {
            slidesEl: t,
            params: s
          } = this, n = y(v(t, `.${s.slideClass}, swiper-slide`)[0]);
          return y(e) - n
        }
        getSlideIndexByData(e) {
          return this.getSlideIndex(this.slides.filter((t => 1 * t.getAttribute("data-swiper-slide-index") === e))[0])
        }
        recalcSlides() {
          const {
            slidesEl: e,
            params: t
          } = this;
          this.slides = v(e, `.${t.slideClass}, swiper-slide`)
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
              t.complete && P(e, t)
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
          let i = s && s.shadowRoot && s.shadowRoot.querySelector ? s.shadowRoot.querySelector(n()) : v(s, n())[0];
          return !i && t.params.createElements && (i = function(e, t) {
            void 0 === t && (t = []);
            const s = document.createElement("div");
            return s.classList.add(...Array.isArray(t) ? t : [t]), s
          }(0, t.params.wrapperClass), s.append(i), v(s, `.${t.params.slideClass}`).forEach((e => {
            i.append(e)
          }))), Object.assign(t, {
            el: s,
            wrapperEl: i,
            slidesEl: t.isElement && !s.parentNode.host.slideSlots ? s.parentNode.host : i,
            hostEl: t.isElement ? s.parentNode.host : s,
            mounted: !0,
            rtl: "rtl" === s.dir.toLowerCase() || "rtl" === g(s, "direction"),
            rtlTranslate: "horizontal" === t.params.direction && ("rtl" === s.dir.toLowerCase() || "rtl" === g(s, "direction")),
            wrongRTL: "-webkit-box" === g(i, "display")
          }), !0
        }
        init(e) {
          const t = this;
          return t.initialized || !1 === t.mount(e) || (t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.params.loop && t.loopCreate(), t.attachEvents(), [...t.el.querySelectorAll('[loading="lazy"]')].forEach((e => {
            e.complete ? P(t, e) : e.addEventListener("load", (e => {
              P(t, e.target)
            }))
          })), M(t), t.initialized = !0, M(t), t.emit("init"), t.emit("afterInit")), t
        }
        destroy(e, t) {
          void 0 === e && (e = !0), void 0 === t && (t = !0);
          const s = this,
            {
              params: n,
              el: i,
              wrapperEl: r,
              slides: o
            } = s;
          return void 0 === s.params || s.destroyed || (s.emit("beforeDestroy"), s.initialized = !1, s.detachEvents(), n.loop && s.loopDestroy(), t && (s.removeClasses(), i.removeAttribute("style"), r.removeAttribute("style"), o && o.length && o.forEach((e => {
            e.classList.remove(n.slideVisibleClass, n.slideActiveClass, n.slideNextClass, n.slidePrevClass), e.removeAttribute("style"), e.removeAttribute("data-swiper-slide-index")
          }))), s.emit("destroy"), Object.keys(s.eventsListeners).forEach((e => {
            s.off(e)
          })), !1 !== e && (s.el.swiper = null, function(e) {
            const t = e;
            Object.keys(t).forEach((e => {
              try {
                t[e] = null
              } catch (e) {}
              try {
                delete t[e]
              } catch (e) {}
            }))
          }(s)), s.destroyed = !0), null
        }
        static extendDefaults(e) {
          h(H, e)
        }
        static get extendedDefaults() {
          return H
        }
        static get defaults() {
          return $
        }
        static installModule(e) {
          U.prototype.__modules__ || (U.prototype.__modules__ = []);
          const t = U.prototype.__modules__;
          "function" == typeof e && t.indexOf(e) < 0 && t.push(e)
        }
        static use(e) {
          return Array.isArray(e) ? (e.forEach((e => U.installModule(e))), U) : (U.installModule(e), U)
        }
      }
      Object.keys(G).forEach((e => {
        Object.keys(G[e]).forEach((t => {
          U.prototype[t] = G[e][t]
        }))
      })), U.use([function(e) {
        let {
          swiper: t,
          on: s,
          emit: n
        } = e;
        const i = c();
        let r = null,
          o = null;
        const a = () => {
            t && !t.destroyed && t.initialized && (n("beforeResize"), n("resize"))
          },
          l = () => {
            t && !t.destroyed && t.initialized && n("orientationchange")
          };
        s("init", (() => {
          t.params.resizeObserver && void 0 !== i.ResizeObserver ? t && !t.destroyed && t.initialized && (r = new ResizeObserver((e => {
            o = i.requestAnimationFrame((() => {
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
              })), i === s && r === n || a()
            }))
          })), r.observe(t.el)) : (i.addEventListener("resize", a), i.addEventListener("orientationchange", l))
        })), s("destroy", (() => {
          o && i.cancelAnimationFrame(o), r && r.unobserve && t.el && (r.unobserve(t.el), r = null), i.removeEventListener("resize", a), i.removeEventListener("orientationchange", l)
        }))
      }, function(e) {
        let {
          swiper: t,
          extendParams: s,
          on: n,
          emit: i
        } = e;
        const r = [],
          o = c(),
          a = function(e, s) {
            void 0 === s && (s = {});
            const n = new(o.MutationObserver || o.WebkitMutationObserver)((e => {
              if (t.__preventObserver__) return;
              if (1 === e.length) return void i("observerUpdate", e[0]);
              const s = function() {
                i("observerUpdate", e[0])
              };
              o.requestAnimationFrame ? o.requestAnimationFrame(s) : o.setTimeout(s, 0)
            }));
            n.observe(e, {
              attributes: void 0 === s.attributes || s.attributes,
              childList: void 0 === s.childList || s.childList,
              characterData: void 0 === s.characterData || s.characterData
            }), r.push(n)
          };
        s({
          observer: !1,
          observeParents: !1,
          observeSlideChildren: !1
        }), n("init", (() => {
          if (t.params.observer) {
            if (t.params.observeParents) {
              const e = function(e, t) {
                const s = [];
                let n = e.parentElement;
                for (; n;) s.push(n), n = n.parentElement;
                return s
              }(t.hostEl);
              for (let t = 0; t < e.length; t += 1) a(e[t])
            }
            a(t.hostEl, {
              childList: t.params.observeSlideChildren
            }), a(t.wrapperEl, {
              attributes: !1
            })
          }
        })), n("destroy", (() => {
          r.forEach((e => {
            e.disconnect()
          })), r.splice(0, r.length)
        }))
      }]);
      const Y = ["eventsPrefix", "injectStyles", "injectStylesUrls", "modules", "init", "_direction", "oneWayMovement", "touchEventsTarget", "initialSlide", "_speed", "cssMode", "updateOnWindowResize", "resizeObserver", "nested", "focusableElements", "_enabled", "_width", "_height", "preventInteractionOnTransition", "userAgent", "url", "_edgeSwipeDetection", "_edgeSwipeThreshold", "_freeMode", "_autoHeight", "setWrapperSize", "virtualTranslate", "_effect", "breakpoints", "_spaceBetween", "_slidesPerView", "maxBackfaceHiddenSlides", "_grid", "_slidesPerGroup", "_slidesPerGroupSkip", "_slidesPerGroupAuto", "_centeredSlides", "_centeredSlidesBounds", "_slidesOffsetBefore", "_slidesOffsetAfter", "normalizeSlideIndex", "_centerInsufficientSlides", "_watchOverflow", "roundLengths", "touchRatio", "touchAngle", "simulateTouch", "_shortSwipes", "_longSwipes", "longSwipesRatio", "longSwipesMs", "_followFinger", "allowTouchMove", "_threshold", "touchMoveStopPropagation", "touchStartPreventDefault", "touchStartForcePreventDefault", "touchReleaseOnEdges", "uniqueNavElements", "_resistance", "_resistanceRatio", "_watchSlidesProgress", "_grabCursor", "preventClicks", "preventClicksPropagation", "_slideToClickedSlide", "_loop", "loopedSlides", "loopPreventsSliding", "_rewind", "_allowSlidePrev", "_allowSlideNext", "_swipeHandler", "_noSwiping", "noSwipingClass", "noSwipingSelector", "passiveListeners", "containerModifierClass", "slideClass", "slideActiveClass", "slideVisibleClass", "slideNextClass", "slidePrevClass", "wrapperClass", "lazyPreloaderClass", "lazyPreloadPrevNext", "runCallbacksOnInit", "observer", "observeParents", "observeSlideChildren", "a11y", "_autoplay", "_controller", "coverflowEffect", "cubeEffect", "fadeEffect", "flipEffect", "creativeEffect", "cardsEffect", "hashNavigation", "history", "keyboard", "mousewheel", "_navigation", "_pagination", "parallax", "_scrollbar", "_thumbs", "virtual", "zoom", "control"];

      function X(e) {
        return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
      }

      function q(e, t) {
        const s = ["__proto__", "constructor", "prototype"];
        Object.keys(t).filter((e => s.indexOf(e) < 0)).forEach((s => {
          void 0 === e[s] ? e[s] = t[s] : X(t[s]) && X(e[s]) && Object.keys(t[s]).length > 0 ? t[s].__swiper__ ? e[s] = t[s] : q(e[s], t[s]) : e[s] = t[s]
        }))
      }

      function Z(e) {
        return void 0 === e && (e = {}), e.navigation && void 0 === e.navigation.nextEl && void 0 === e.navigation.prevEl
      }

      function K(e) {
        return void 0 === e && (e = {}), e.pagination && void 0 === e.pagination.el
      }

      function J(e) {
        return void 0 === e && (e = {}), e.scrollbar && void 0 === e.scrollbar.el
      }

      function Q(e) {
        void 0 === e && (e = "");
        const t = e.split(" ").map((e => e.trim())).filter((e => !!e)),
          s = [];
        return t.forEach((e => {
          s.indexOf(e) < 0 && s.push(e)
        })), s.join(" ")
      }

      function ee(e) {
        return void 0 === e && (e = ""), e ? e.includes("swiper-wrapper") ? e : `swiper-wrapper ${e}` : "swiper-wrapper"
      }

      function te() {
        return te = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var s = arguments[t];
            for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
          }
          return e
        }, te.apply(this, arguments)
      }

      function se(e) {
        return e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide")
      }

      function ne(e) {
        const t = [];
        return n.Children.toArray(e).forEach((e => {
          se(e) ? t.push(e) : e.props && e.props.children && ne(e.props.children).forEach((e => t.push(e)))
        })), t
      }

      function ie(e) {
        const t = [],
          s = {
            "container-start": [],
            "container-end": [],
            "wrapper-start": [],
            "wrapper-end": []
          };
        return n.Children.toArray(e).forEach((e => {
          if (se(e)) t.push(e);
          else if (e.props && e.props.slot && s[e.props.slot]) s[e.props.slot].push(e);
          else if (e.props && e.props.children) {
            const n = ne(e.props.children);
            n.length > 0 ? n.forEach((e => t.push(e))) : s["container-end"].push(e)
          } else s["container-end"].push(e)
        })), {
          slides: t,
          slots: s
        }
      }

      function re(e, t) {
        return "undefined" == typeof window ? (0, n.useEffect)(e, t) : (0, n.useLayoutEffect)(e, t)
      }
      const oe = (0, n.createContext)(null),
        ae = (0, n.createContext)(null),
        le = (0, n.forwardRef)((function(e, t) {
          let {
            className: s,
            tag: i = "div",
            wrapperTag: r = "div",
            children: o,
            onSwiper: a,
            ...l
          } = void 0 === e ? {} : e, c = !1;
          const [d, u] = (0, n.useState)("swiper"), [p, h] = (0, n.useState)(null), [m, f] = (0, n.useState)(!1), v = (0, n.useRef)(!1), g = (0, n.useRef)(null), y = (0, n.useRef)(null), x = (0, n.useRef)(null), w = (0, n.useRef)(null), b = (0, n.useRef)(null), S = (0, n.useRef)(null), T = (0, n.useRef)(null), E = (0, n.useRef)(null), {
            params: P,
            passedParams: C,
            rest: M,
            events: A
          } = function(e, t) {
            void 0 === e && (e = {}), void 0 === t && (t = !0);
            const s = {
                on: {}
              },
              n = {},
              i = {};
            q(s, $), s._emitClasses = !0, s.init = !1;
            const r = {},
              o = Y.map((e => e.replace(/_/, ""))),
              a = Object.assign({}, e);
            return Object.keys(a).forEach((a => {
              void 0 !== e[a] && (o.indexOf(a) >= 0 ? X(e[a]) ? (s[a] = {}, i[a] = {}, q(s[a], e[a]), q(i[a], e[a])) : (s[a] = e[a], i[a] = e[a]) : 0 === a.search(/on[A-Z]/) && "function" == typeof e[a] ? t ? n[`${a[2].toLowerCase()}${a.substr(3)}`] = e[a] : s.on[`${a[2].toLowerCase()}${a.substr(3)}`] = e[a] : r[a] = e[a])
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
            slots: L
          } = ie(o), V = () => {
            f(!m)
          };
          Object.assign(P.on, {
            _containerClasses(e, t) {
              u(t)
            }
          });
          const D = () => {
            Object.assign(P.on, A), c = !0;
            const e = {
              ...P
            };
            if (delete e.wrapperClass, y.current = new U(e), y.current.virtual && y.current.params.virtual.enabled) {
              y.current.virtual.slides = k;
              const e = {
                cache: !1,
                slides: k,
                renderExternal: h,
                renderExternalUpdate: !1
              };
              q(y.current.params.virtual, e), q(y.current.originalParams.virtual, e)
            }
          };
          return g.current || D(), y.current && y.current.on("_beforeBreakpoint", V), (0, n.useEffect)((() => () => {
            y.current && y.current.off("_beforeBreakpoint", V)
          })), (0, n.useEffect)((() => {
            !v.current && y.current && (y.current.emitSlidesClasses(), v.current = !0)
          })), re((() => {
            if (t && (t.current = g.current), g.current) return y.current.destroyed && D(),
              function(e, t) {
                let {
                  el: s,
                  nextEl: n,
                  prevEl: i,
                  paginationEl: r,
                  scrollbarEl: o,
                  swiper: a
                } = e;
                Z(t) && n && i && (a.params.navigation.nextEl = n, a.originalParams.navigation.nextEl = n, a.params.navigation.prevEl = i, a.originalParams.navigation.prevEl = i), K(t) && r && (a.params.pagination.el = r, a.originalParams.pagination.el = r), J(t) && o && (a.params.scrollbar.el = o, a.originalParams.scrollbar.el = o), a.init(s)
              }({
                el: g.current,
                nextEl: b.current,
                prevEl: S.current,
                paginationEl: T.current,
                scrollbarEl: E.current,
                swiper: y.current
              }, P), a && a(y.current), () => {
                y.current && !y.current.destroyed && y.current.destroy(!0, !1)
              }
          }), []), re((() => {
            !c && A && y.current && Object.keys(A).forEach((e => {
              y.current.on(e, A[e])
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
              return Y.filter((e => "_" === e[0])).map((e => e.replace(/_/, ""))).forEach((s => {
                if (s in e && s in t)
                  if (X(e[s]) && X(t[s])) {
                    const n = Object.keys(e[s]),
                      i = Object.keys(t[s]);
                    n.length !== i.length ? o(s) : (n.forEach((n => {
                      e[s][n] !== t[s][n] && o(s)
                    })), i.forEach((n => {
                      e[s][n] !== t[s][n] && o(s)
                    })))
                  } else e[s] !== t[s] && o(s)
              })), r
            }(C, x.current, k, w.current, (e => e.key));
            return x.current = C, w.current = k, e.length && y.current && !y.current.destroyed && function(e) {
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
              let v, g, y, x, w, b, S, T;
              i.includes("thumbs") && n.thumbs && n.thumbs.swiper && d.thumbs && !d.thumbs.swiper && (v = !0), i.includes("controller") && n.controller && n.controller.control && d.controller && !d.controller.control && (g = !0), i.includes("pagination") && n.pagination && (n.pagination.el || l) && (d.pagination || !1 === d.pagination) && u && !u.el && (y = !0), i.includes("scrollbar") && n.scrollbar && (n.scrollbar.el || a) && (d.scrollbar || !1 === d.scrollbar) && h && !h.el && (x = !0), i.includes("navigation") && n.navigation && (n.navigation.prevEl || o) && (n.navigation.nextEl || r) && (d.navigation || !1 === d.navigation) && p && !p.prevEl && !p.nextEl && (w = !0);
              const E = e => {
                t[e] && (t[e].destroy(), "navigation" === e ? (t.isElement && (t[e].prevEl.remove(), t[e].nextEl.remove()), d[e].prevEl = void 0, d[e].nextEl = void 0, t[e].prevEl = void 0, t[e].nextEl = void 0) : (t.isElement && t[e].el.remove(), d[e].el = void 0, t[e].el = void 0))
              };
              i.includes("loop") && t.isElement && (d.loop && !n.loop ? b = !0 : !d.loop && n.loop ? S = !0 : T = !0), c.forEach((e => {
                if (X(d[e]) && X(n[e])) q(d[e], n[e]), "navigation" !== e && "pagination" !== e && "scrollbar" !== e || !("enabled" in n[e]) || n[e].enabled || E(e);
                else {
                  const t = n[e];
                  !0 !== t && !1 !== t || "navigation" !== e && "pagination" !== e && "scrollbar" !== e ? d[e] = n[e] : !1 === t && E(e)
                }
              })), c.includes("controller") && !g && t.controller && t.controller.control && d.controller && d.controller.control && (t.controller.control = d.controller.control), i.includes("children") && s && m && d.virtual.enabled && (m.slides = s, m.update(!0)), i.includes("children") && s && d.loop && (T = !0), v && f.init() && f.update(!0), g && (t.controller.control = d.controller.control), y && (!t.isElement || l && "string" != typeof l || (l = document.createElement("div"), l.classList.add("swiper-pagination"), t.el.appendChild(l)), l && (d.pagination.el = l), u.init(), u.render(), u.update()), x && (!t.isElement || a && "string" != typeof a || (a = document.createElement("div"), a.classList.add("swiper-scrollbar"), t.el.appendChild(a)), a && (d.scrollbar.el = a), h.init(), h.updateSize(), h.setTranslate()), w && (t.isElement && (r && "string" != typeof r || (r = document.createElement("div"), r.classList.add("swiper-button-next"), r.innerHTML = t.hostEl.nextButtonSvg, t.el.appendChild(r)), o && "string" != typeof o || (o = document.createElement("div"), o.classList.add("swiper-button-prev"), r.innerHTML = t.hostEl.prevButtonSvg, t.el.appendChild(o))), r && (d.navigation.nextEl = r), o && (d.navigation.prevEl = o), p.init(), p.update()), i.includes("allowSlideNext") && (t.allowSlideNext = n.allowSlideNext), i.includes("allowSlidePrev") && (t.allowSlidePrev = n.allowSlidePrev), i.includes("direction") && t.changeDirection(n.direction, !1), (b || T) && t.loopDestroy(), (S || T) && t.loopCreate(), t.update()
            }({
              swiper: y.current,
              slides: k,
              passedParams: C,
              changedParams: e,
              nextEl: b.current,
              prevEl: S.current,
              scrollbarEl: E.current,
              paginationEl: T.current
            }), () => {
              A && y.current && Object.keys(A).forEach((e => {
                y.current.off(e, A[e])
              }))
            }
          })), re((() => {
            var e;
            !(e = y.current) || e.destroyed || !e.params.virtual || e.params.virtual && !e.params.virtual.enabled || (e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.parallax && e.params.parallax && e.params.parallax.enabled && e.parallax.setTranslate())
          }), [p]), n.createElement(i, te({
            ref: g,
            className: Q(`${d}${s?` ${s}`:""}`)
          }, M), n.createElement(ae.Provider, {
            value: y.current
          }, L["container-start"], n.createElement(r, {
            className: ee(P.wrapperClass)
          }, L["wrapper-start"], P.virtual ? function(e, t, s) {
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
          }))), L["wrapper-end"]), Z(P) && n.createElement(n.Fragment, null, n.createElement("div", {
            ref: S,
            className: "swiper-button-prev"
          }), n.createElement("div", {
            ref: b,
            className: "swiper-button-next"
          })), J(P) && n.createElement("div", {
            ref: E,
            className: "swiper-scrollbar"
          }), K(P) && n.createElement("div", {
            ref: T,
            className: "swiper-pagination"
          }), L["container-end"]))
        }));
      le.displayName = "Swiper";
      const ce = (0, n.forwardRef)((function(e, t) {
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
          [f, v] = (0, n.useState)(!1);

        function g(e, t, s) {
          t === p.current && m(s)
        }
        re((() => {
          if (void 0 !== d && (p.current.swiperSlideIndex = d), t && (t.current = p.current), p.current && o) {
            if (!o.destroyed) return o.on("_slideClass", g), () => {
              o && o.off("_slideClass", g)
            };
            "swiper-slide" !== h && m("swiper-slide")
          }
        })), re((() => {
          o && p.current && !o.destroyed && m(o.getSlideClasses(p.current))
        }), [o]);
        const y = {
            isActive: h.indexOf("swiper-slide-active") >= 0,
            isVisible: h.indexOf("swiper-slide-visible") >= 0,
            isPrev: h.indexOf("swiper-slide-prev") >= 0,
            isNext: h.indexOf("swiper-slide-next") >= 0
          },
          x = () => "function" == typeof i ? i(y) : i;
        return n.createElement(s, te({
          ref: p,
          className: Q(`${h}${r?` ${r}`:""}`),
          "data-swiper-slide-index": c,
          onLoad: () => {
            v(!0)
          }
        }, u), a && n.createElement(oe.Provider, {
          value: y
        }, n.createElement("div", {
          className: "swiper-zoom-container",
          "data-swiper-zoom": "number" == typeof a ? a : void 0
        }, x(), l && !f && n.createElement("div", {
          className: "swiper-lazy-preloader"
        }))), !a && n.createElement(oe.Provider, {
          value: y
        }, x(), l && !f && n.createElement("div", {
          className: "swiper-lazy-preloader"
        })))
      }));
      ce.displayName = "SwiperSlide"
    }
  }
]);