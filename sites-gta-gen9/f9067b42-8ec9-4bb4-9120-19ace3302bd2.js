try {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    e = (new t.Error).stack;
  e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "f9067b42-8ec9-4bb4-9120-19ace3302bd2", t._sentryDebugIdIdentifier = "sentry-dbid-f9067b42-8ec9-4bb4-9120-19ace3302bd2")
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
  [6203], {
    56203: (t, e, n) => {
      n.r(e), n.d(e, {
        AnimatePresence: () => Qa,
        AnimateSharedLayout: () => is,
        AnimationType: () => Kt,
        DeprecatedLayoutGroupContext: () => ts,
        DragControls: () => gu,
        FlatTree: () => Ea,
        LayoutGroup: () => rs,
        LayoutGroupContext: () => O,
        LazyMotion: () => ss,
        MotionConfig: () => as,
        MotionConfigContext: () => v,
        MotionContext: () => h,
        MotionValue: () => fo,
        PresenceContext: () => g,
        Reorder: () => bs,
        SwitchLayoutGroupContext: () => I,
        addPointerEvent: () => me,
        addScaleCorrector: () => W,
        animate: () => ta,
        animateVisualElement: () => Ao,
        animationControls: () => cu,
        animations: () => Do,
        calcLength: () => Xo,
        checkTargetForNewValues: () => Eo,
        createBox: () => oi,
        createDomMotionComponent: () => Xa,
        createMotionComponent: () => F,
        domAnimation: () => Es,
        domMax: () => ws,
        filterProps: () => Tt,
        isBrowser: () => y,
        isDragActive: () => Ee,
        isMotionValue: () => J,
        isValidMotionProp: () => At,
        m: () => Ga,
        makeUseVisualState: () => qt,
        motion: () => Ya,
        motionValue: () => po,
        resolveMotionValue: () => Gt,
        transform: () => hs,
        useAnimation: () => du,
        useAnimationControls: () => fu,
        useAnimationFrame: () => uu,
        useCycle: () => vu,
        useDeprecatedAnimatedState: () => Vu,
        useDeprecatedInvertedScale: () => Mu,
        useDomEvent: () => ne,
        useDragControls: () => xu,
        useElementScroll: () => iu,
        useForceUpdate: () => qa,
        useInView: () => mu,
        useInstantLayoutTransition: () => _u,
        useInstantTransition: () => Eu,
        useIsPresent: () => We,
        useIsomorphicLayoutEffect: () => x,
        useMotionTemplate: () => Ss,
        useMotionValue: () => ps,
        usePresence: () => ze,
        useReducedMotion: () => E,
        useReducedMotionConfig: () => w,
        useResetProjection: () => wu,
        useScroll: () => ou,
        useSpring: () => As,
        useTime: () => lu,
        useTransform: () => gs,
        useUnmountEffect: () => Ae,
        useVelocity: () => Ps,
        useViewportScroll: () => au,
        useVisualElementContext: () => m,
        visualElement: () => Pi,
        wrapHandler: () => le
      });
      var r = n(78322),
        o = n(62229),
        i = n(42649),
        a = (void 0 === i || i.env, "production"),
        s = function(t) {
          return {
            isEnabled: function(e) {
              return t.some((function(t) {
                return !!e[t]
              }))
            }
          }
        },
        u = {
          measureLayout: s(["layout", "layoutId", "drag"]),
          animation: s(["animate", "exit", "variants", "whileHover", "whileTap", "whileFocus", "whileDrag", "whileInView"]),
          exit: s(["exit"]),
          drag: s(["drag", "dragControls"]),
          focus: s(["whileFocus"]),
          hover: s(["whileHover", "onHoverStart", "onHoverEnd"]),
          tap: s(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
          pan: s(["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]),
          inView: s(["whileInView", "onViewportEnter", "onViewportLeave"])
        };

      function l(t) {
        for (var e in t) null !== t[e] && ("projectionNodeConstructor" === e ? u.projectionNodeConstructor = t[e] : u[e].Component = t[e])
      }
      var c = n(81547),
        f = (0, o.createContext)({
          strict: !1
        }),
        d = Object.keys(u),
        p = d.length,
        v = (0, o.createContext)({
          transformPagePoint: function(t) {
            return t
          },
          isStatic: !1,
          reducedMotion: "never"
        }),
        h = (0, o.createContext)({});

      function m() {
        return (0, o.useContext)(h).visualElement
      }
      var g = (0, o.createContext)(null),
        y = "undefined" != typeof document,
        x = y ? o.useLayoutEffect : o.useEffect,
        _ = {
          current: null
        },
        b = !1;

      function E() {
        return !b && function() {
          if (b = !0, y)
            if (window.matchMedia) {
              var t = window.matchMedia("(prefers-reduced-motion)"),
                e = function() {
                  return _.current = t.matches
                };
              t.addListener(e), e()
            } else _.current = !1
        }(), (0, r.__read)((0, o.useState)(_.current), 1)[0]
      }

      function w() {
        var t = E(),
          e = (0, o.useContext)(v).reducedMotion;
        return "never" !== e && ("always" === e || t)
      }

      function S(t) {
        return "object" == typeof t && Object.prototype.hasOwnProperty.call(t, "current")
      }

      function A(t) {
        return Array.isArray(t)
      }

      function P(t) {
        return "string" == typeof t || A(t)
      }

      function V(t, e, n, r, o) {
        var i;
        return void 0 === r && (r = {}), void 0 === o && (o = {}), "function" == typeof e && (e = e(null != n ? n : t.custom, r, o)), "string" == typeof e && (e = null === (i = t.variants) || void 0 === i ? void 0 : i[e]), "function" == typeof e && (e = e(null != n ? n : t.custom, r, o)), e
      }

      function T(t, e, n) {
        var r = t.getProps();
        return V(r, e, null != n ? n : r.custom, function(t) {
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

      function C(t) {
        var e;
        return "function" == typeof(null === (e = t.animate) || void 0 === e ? void 0 : e.start) || P(t.initial) || P(t.animate) || P(t.whileHover) || P(t.whileDrag) || P(t.whileTap) || P(t.whileFocus) || P(t.exit)
      }

      function M(t) {
        return Boolean(C(t) || t.variants)
      }

      function R(t) {
        return Array.isArray(t) ? t.join(" ") : t
      }

      function L(t) {
        var e = (0, o.useRef)(null);
        return null === e.current && (e.current = t()), e.current
      }
      var k = {
          hasAnimatedSinceResize: !0,
          hasEverUpdated: !1
        },
        D = 1,
        O = (0, o.createContext)({}),
        I = (0, o.createContext)({}),
        j = function(t) {
          function e() {
            return null !== t && t.apply(this, arguments) || this
          }
          return (0, r.__extends)(e, t), e.prototype.getSnapshotBeforeUpdate = function() {
            return this.updateProps(), null
          }, e.prototype.componentDidUpdate = function() {}, e.prototype.updateProps = function() {
            var t = this.props,
              e = t.visualElement,
              n = t.props;
            e && e.setProps(n)
          }, e.prototype.render = function() {
            return this.props.children
          }, e
        }(o.Component);

      function F(t) {
        var e = t.preloadedFeatures,
          n = t.createVisualElement,
          i = t.projectionNodeConstructor,
          s = t.useRender,
          _ = t.useVisualState,
          b = t.Component;
        return e && l(e), (0, o.forwardRef)((function(t, l) {
          var E = function(t) {
            var e, n = t.layoutId,
              r = null === (e = (0, o.useContext)(O)) || void 0 === e ? void 0 : e.id;
            return r && void 0 !== n ? r + "-" + n : n
          }(t);
          t = (0, r.__assign)((0, r.__assign)({}, t), {
            layoutId: E
          });
          var A = (0, o.useContext)(v),
            V = null,
            T = function(t) {
              var e = function(t, e) {
                  if (C(t)) {
                    var n = t.initial,
                      r = t.animate;
                    return {
                      initial: !1 === n || P(n) ? n : void 0,
                      animate: P(r) ? r : void 0
                    }
                  }
                  return !1 !== t.inherit ? e : {}
                }(t, (0, o.useContext)(h)),
                n = e.initial,
                r = e.animate;
              return (0, o.useMemo)((function() {
                return {
                  initial: n,
                  animate: r
                }
              }), [R(n), R(r)])
            }(t),
            M = A.isStatic ? void 0 : L((function() {
              if (k.hasEverUpdated) return D++
            })),
            F = _(t, A.isStatic);
          return !A.isStatic && y && (T.visualElement = function(t, e, n, r) {
            var i = (0, o.useContext)(f),
              a = m(),
              s = (0, o.useContext)(g),
              u = w(),
              l = (0, o.useRef)(void 0);
            r || (r = i.renderer), !l.current && r && (l.current = r(t, {
              visualState: e,
              parent: a,
              props: n,
              presenceId: null == s ? void 0 : s.id,
              blockInitialAnimation: !1 === (null == s ? void 0 : s.initial),
              shouldReduceMotion: u
            }));
            var c = l.current;
            return x((function() {
              null == c || c.syncRender()
            })), (0, o.useEffect)((function() {
              var t;
              null === (t = null == c ? void 0 : c.animationState) || void 0 === t || t.animateChanges()
            })), x((function() {
              return function() {
                return null == c ? void 0 : c.notifyUnmount()
              }
            }), []), c
          }(b, F, (0, r.__assign)((0, r.__assign)({}, A), t), n), function(t, e, n, r) {
            var i, a = e.layoutId,
              s = e.layout,
              u = e.drag,
              l = e.dragConstraints,
              c = e.layoutScroll,
              f = (0, o.useContext)(I);
            r && n && !(null == n ? void 0 : n.projection) && (n.projection = new r(t, n.getLatestValues(), null === (i = n.parent) || void 0 === i ? void 0 : i.projection), n.projection.setOptions({
              layoutId: a,
              layout: s,
              alwaysMeasureLayout: Boolean(u) || l && S(l),
              visualElement: n,
              scheduleRender: function() {
                return n.scheduleRender()
              },
              animationType: "string" == typeof s ? s : "both",
              initialPromotionConfig: f,
              layoutScroll: c
            }))
          }(M, t, T.visualElement, i || u.projectionNodeConstructor), V = function(t, e, n) {
            var i = [],
              s = (0, o.useContext)(f);
            if (!e) return null;
            "production" !== a && n && s.strict && (0, c.V)(!1, "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.");
            for (var l = 0; l < p; l++) {
              var v = d[l],
                h = u[v],
                m = h.isEnabled,
                g = h.Component;
              m(t) && g && i.push(o.createElement(g, (0, r.__assign)({
                key: v
              }, t, {
                visualElement: e
              })))
            }
            return i
          }(t, T.visualElement, e)), o.createElement(j, {
            visualElement: T.visualElement,
            props: (0, r.__assign)((0, r.__assign)({}, A), t)
          }, V, o.createElement(h.Provider, {
            value: T
          }, s(b, t, M, function(t, e, n) {
            return (0, o.useCallback)((function(r) {
              var o;
              r && (null === (o = t.mount) || void 0 === o || o.call(t, r)), e && (r ? e.mount(r) : e.unmount()), n && ("function" == typeof n ? n(r) : S(n) && (n.current = r))
            }), [e])
          }(F, T.visualElement, l), F, A.isStatic, T.visualElement)))
        }))
      }

      function B(t) {
        function e(e, n) {
          return void 0 === n && (n = {}), F(t(e, n))
        }
        if ("undefined" == typeof Proxy) return e;
        var n = new Map;
        return new Proxy(e, {
          get: function(t, r) {
            return n.has(r) || n.set(r, e(r)), n.get(r)
          }
        })
      }
      var U = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "svg", "switch", "symbol", "text", "tspan", "use", "view"];

      function N(t) {
        return "string" == typeof t && !t.includes("-") && !!(U.indexOf(t) > -1 || /[A-Z]/.test(t))
      }
      var z = {};

      function W(t) {
        Object.assign(z, t)
      }
      var H = ["", "X", "Y", "Z"],
        Y = ["transformPerspective", "x", "y", "z"];

      function X(t, e) {
        return Y.indexOf(t) - Y.indexOf(e)
      } ["translate", "scale", "rotate", "skew"].forEach((function(t) {
        return H.forEach((function(e) {
          return Y.push(t + e)
        }))
      }));
      var G = new Set(Y);

      function $(t) {
        return G.has(t)
      }
      var q = new Set(["originX", "originY", "originZ"]);

      function Z(t) {
        return q.has(t)
      }

      function K(t, e) {
        var n = e.layout,
          r = e.layoutId;
        return $(t) || Z(t) || (n || void 0 !== r) && (!!z[t] || "opacity" === t)
      }
      var J = function(t) {
          return Boolean(null !== t && "object" == typeof t && t.getVelocity)
        },
        Q = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective"
        };

      function tt(t) {
        return t.startsWith("--")
      }
      var et = function(t, e) {
        return e && "number" == typeof t ? e.transform(t) : t
      };
      const nt = (t, e) => n => Math.max(Math.min(n, e), t),
        rt = t => t % 1 ? Number(t.toFixed(5)) : t,
        ot = /(-)?([\d]*\.?[\d])+/g,
        it = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi,
        at = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;

      function st(t) {
        return "string" == typeof t
      }
      const ut = t => ({
          test: e => st(e) && e.endsWith(t) && 1 === e.split(" ").length,
          parse: parseFloat,
          transform: e => `${e}${t}`
        }),
        lt = ut("deg"),
        ct = ut("%"),
        ft = ut("px"),
        dt = ut("vh"),
        pt = ut("vw"),
        vt = Object.assign(Object.assign({}, ct), {
          parse: t => ct.parse(t) / 100,
          transform: t => ct.transform(100 * t)
        }),
        ht = {
          test: t => "number" == typeof t,
          parse: parseFloat,
          transform: t => t
        },
        mt = Object.assign(Object.assign({}, ht), {
          transform: nt(0, 1)
        }),
        gt = Object.assign(Object.assign({}, ht), {
          default: 1
        });
      var yt = (0, r.__assign)((0, r.__assign)({}, ht), {
          transform: Math.round
        }),
        xt = {
          borderWidth: ft,
          borderTopWidth: ft,
          borderRightWidth: ft,
          borderBottomWidth: ft,
          borderLeftWidth: ft,
          borderRadius: ft,
          radius: ft,
          borderTopLeftRadius: ft,
          borderTopRightRadius: ft,
          borderBottomRightRadius: ft,
          borderBottomLeftRadius: ft,
          width: ft,
          maxWidth: ft,
          height: ft,
          maxHeight: ft,
          size: ft,
          top: ft,
          right: ft,
          bottom: ft,
          left: ft,
          padding: ft,
          paddingTop: ft,
          paddingRight: ft,
          paddingBottom: ft,
          paddingLeft: ft,
          margin: ft,
          marginTop: ft,
          marginRight: ft,
          marginBottom: ft,
          marginLeft: ft,
          rotate: lt,
          rotateX: lt,
          rotateY: lt,
          rotateZ: lt,
          scale: gt,
          scaleX: gt,
          scaleY: gt,
          scaleZ: gt,
          skew: lt,
          skewX: lt,
          skewY: lt,
          distance: ft,
          translateX: ft,
          translateY: ft,
          translateZ: ft,
          x: ft,
          y: ft,
          z: ft,
          perspective: ft,
          transformPerspective: ft,
          opacity: mt,
          originX: vt,
          originY: vt,
          originZ: ft,
          zIndex: yt,
          fillOpacity: mt,
          strokeOpacity: mt,
          numOctaves: yt
        };

      function _t(t, e, n, r) {
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
          if (tt(p)) a[p] = v;
          else {
            var h = xt[p],
              m = et(v, h);
            if ($(p)) {
              if (c = !0, s[p] = m, u.push(p), !d) continue;
              v !== (null !== (o = h.default) && void 0 !== o ? o : 0) && (d = !1)
            } else Z(p) ? (l[p] = m, f = !0) : i[p] = m
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
          i.sort(X);
          for (var f = !1, d = i.length, p = 0; p < d; p++) {
            var v = i[p];
            c += "".concat(Q[v] || v, "(").concat(o[v], ") "), "z" === v && (f = !0)
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
      var bt = function() {
        return {
          style: {},
          transform: {},
          transformKeys: [],
          transformOrigin: {},
          vars: {}
        }
      };

      function Et(t, e, n) {
        for (var r in e) J(e[r]) || K(r, n) || (t[r] = e[r])
      }

      function wt(t, e, n) {
        var i = {},
          a = function(t, e, n) {
            var i = {};
            return Et(i, t.style || {}, t), Object.assign(i, function(t, e, n) {
              var i = t.transformTemplate;
              return (0, o.useMemo)((function() {
                var t = bt();
                _t(t, e, {
                  enableHardwareAcceleration: !n
                }, i);
                var o = t.vars,
                  a = t.style;
                return (0, r.__assign)((0, r.__assign)({}, o), a)
              }), [e])
            }(t, e, n)), t.transformValues && (i = t.transformValues(i)), i
          }(t, e, n);
        return Boolean(t.drag) && !1 !== t.dragListener && (i.draggable = !1, a.userSelect = a.WebkitUserSelect = a.WebkitTouchCallout = "none", a.touchAction = !0 === t.drag ? "none" : "pan-".concat("x" === t.drag ? "y" : "x")), i.style = a, i
      }
      var St = new Set(["initial", "animate", "exit", "style", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "layout", "layoutId", "layoutDependency", "onLayoutAnimationStart", "onLayoutAnimationComplete", "onLayoutMeasure", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "drag", "dragControls", "dragListener", "dragConstraints", "dragDirectionLock", "dragSnapToOrigin", "_dragX", "_dragY", "dragElastic", "dragMomentum", "dragPropagation", "dragTransition", "whileDrag", "onPan", "onPanStart", "onPanEnd", "onPanSessionStart", "onTap", "onTapStart", "onTapCancel", "onHoverStart", "onHoverEnd", "whileFocus", "whileTap", "whileHover", "whileInView", "onViewportEnter", "onViewportLeave", "viewport", "layoutScroll"]);

      function At(t) {
        return St.has(t)
      }
      var Pt = function(t) {
        return !At(t)
      };

      function Vt(t) {
        t && (Pt = function(e) {
          return e.startsWith("on") ? !At(e) : t(e)
        })
      }
      try {
        Vt(require("@emotion/is-prop-valid").default)
      } catch (t) {}

      function Tt(t, e, n) {
        var r = {};
        for (var o in t)(Pt(o) || !0 === n && At(o) || !e && !At(o) || t.draggable && o.startsWith("onDrag")) && (r[o] = t[o]);
        return r
      }

      function Ct(t, e, n) {
        return "string" == typeof t ? t : ft.transform(e + n * t)
      }
      var Mt = {
          offset: "stroke-dashoffset",
          array: "stroke-dasharray"
        },
        Rt = {
          offset: "strokeDashoffset",
          array: "strokeDasharray"
        };

      function Lt(t, e, n, o) {
        var i = e.attrX,
          a = e.attrY,
          s = e.originX,
          u = e.originY,
          l = e.pathLength,
          c = e.pathSpacing,
          f = void 0 === c ? 1 : c,
          d = e.pathOffset,
          p = void 0 === d ? 0 : d;
        _t(t, (0, r.__rest)(e, ["attrX", "attrY", "originX", "originY", "pathLength", "pathSpacing", "pathOffset"]), n, o), t.attrs = t.style, t.style = {};
        var v = t.attrs,
          h = t.style,
          m = t.dimensions;
        v.transform && (m && (h.transform = v.transform), delete v.transform), m && (void 0 !== s || void 0 !== u || h.transform) && (h.transformOrigin = function(t, e, n) {
          var r = Ct(e, t.x, t.width),
            o = Ct(n, t.y, t.height);
          return "".concat(r, " ").concat(o)
        }(m, void 0 !== s ? s : .5, void 0 !== u ? u : .5)), void 0 !== i && (v.x = i), void 0 !== a && (v.y = a), void 0 !== l && function(t, e, n, r, o) {
          void 0 === n && (n = 1), void 0 === r && (r = 0), void 0 === o && (o = !0), t.pathLength = 1;
          var i = o ? Mt : Rt;
          t[i.offset] = ft.transform(-r);
          var a = ft.transform(e),
            s = ft.transform(n);
          t[i.array] = "".concat(a, " ").concat(s)
        }(v, l, f, p, !1)
      }
      var kt = function() {
        return (0, r.__assign)((0, r.__assign)({}, bt()), {
          attrs: {}
        })
      };

      function Dt(t, e) {
        var n = (0, o.useMemo)((function() {
          var n = kt();
          return Lt(n, e, {
            enableHardwareAcceleration: !1
          }, t.transformTemplate), (0, r.__assign)((0, r.__assign)({}, n.attrs), {
            style: (0, r.__assign)({}, n.style)
          })
        }), [e]);
        if (t.style) {
          var i = {};
          Et(i, t.style, t), n.style = (0, r.__assign)((0, r.__assign)({}, i), n.style)
        }
        return n
      }

      function Ot(t) {
        return void 0 === t && (t = !1),
          function(e, n, i, a, s, u) {
            var l = s.latestValues,
              c = (N(e) ? Dt : wt)(n, l, u),
              f = Tt(n, "string" == typeof e, t),
              d = (0, r.__assign)((0, r.__assign)((0, r.__assign)({}, f), c), {
                ref: a
              });
            return i && (d["data-projection-id"] = i), (0, o.createElement)(e, d)
          }
      }
      var It = /([a-z])([A-Z])/g,
        jt = function(t) {
          return t.replace(It, "$1-$2").toLowerCase()
        };

      function Ft(t, e, n, r) {
        var o = e.style,
          i = e.vars;
        for (var a in Object.assign(t.style, o, r && r.getProjectionStyles(n)), i) t.style.setProperty(a, i[a])
      }
      var Bt = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength"]);

      function Ut(t, e, n, r) {
        for (var o in Ft(t, e, void 0, r), e.attrs) t.setAttribute(Bt.has(o) ? o : jt(o), e.attrs[o])
      }

      function Nt(t) {
        var e = t.style,
          n = {};
        for (var r in e)(J(e[r]) || K(r, t)) && (n[r] = e[r]);
        return n
      }

      function zt(t) {
        var e = Nt(t);
        for (var n in t) J(t[n]) && (e["x" === n || "y" === n ? "attr" + n.toUpperCase() : n] = t[n]);
        return e
      }

      function Wt(t) {
        return "object" == typeof t && "function" == typeof t.start
      }
      var Ht = function(t) {
          return Array.isArray(t)
        },
        Yt = function(t) {
          return Boolean(t && "object" == typeof t && t.mix && t.toValue)
        },
        Xt = function(t) {
          return Ht(t) ? t[t.length - 1] || 0 : t
        };

      function Gt(t) {
        var e = J(t) ? t.get() : t;
        return Yt(e) ? e.toValue() : e
      }

      function $t(t, e, n, r) {
        var o = t.scrapeMotionValuesFromProps,
          i = t.createRenderState,
          a = t.onMount,
          s = {
            latestValues: Zt(e, n, r, o),
            renderState: i()
          };
        return a && (s.mount = function(t) {
          return a(e, t, s)
        }), s
      }
      var qt = function(t) {
        return function(e, n) {
          var r = (0, o.useContext)(h),
            i = (0, o.useContext)(g);
          return n ? $t(t, e, r, i) : L((function() {
            return $t(t, e, r, i)
          }))
        }
      };

      function Zt(t, e, n, o) {
        var i = {},
          a = !1 === (null == n ? void 0 : n.initial),
          s = o(t);
        for (var u in s) i[u] = Gt(s[u]);
        var l = t.initial,
          c = t.animate,
          f = C(t),
          d = M(t);
        e && d && !f && !1 !== t.inherit && (null != l || (l = e.initial), null != c || (c = e.animate));
        var p = a || !1 === l,
          v = p ? c : l;
        return v && "boolean" != typeof v && !Wt(v) && (Array.isArray(v) ? v : [v]).forEach((function(e) {
          var n = V(t, e);
          if (n) {
            var o = n.transitionEnd;
            n.transition;
            var a = (0, r.__rest)(n, ["transitionEnd", "transition"]);
            for (var s in a) {
              var u = a[s];
              Array.isArray(u) && (u = u[p ? u.length - 1 : 0]), null !== u && (i[s] = u)
            }
            for (var s in o) i[s] = o[s]
          }
        })), i
      }
      var Kt, Jt = {
          useVisualState: qt({
            scrapeMotionValuesFromProps: zt,
            createRenderState: kt,
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
              Lt(r, o, {
                enableHardwareAcceleration: !1
              }, t.transformTemplate), Ut(e, r)
            }
          })
        },
        Qt = {
          useVisualState: qt({
            scrapeMotionValuesFromProps: Nt,
            createRenderState: bt
          })
        };

      function te(t, e, n, o, i) {
        var a = e.forwardMotionProps,
          s = void 0 !== a && a,
          u = N(t) ? Jt : Qt;
        return (0, r.__assign)((0, r.__assign)({}, u), {
          preloadedFeatures: n,
          useRender: Ot(s),
          createVisualElement: o,
          projectionNodeConstructor: i,
          Component: t
        })
      }

      function ee(t, e, n, r) {
        return void 0 === r && (r = {
            passive: !0
          }), t.addEventListener(e, n, r),
          function() {
            return t.removeEventListener(e, n)
          }
      }

      function ne(t, e, n, r) {
        (0, o.useEffect)((function() {
          var o = t.current;
          if (n && o) return ee(o, e, n, r)
        }), [t, e, n, r])
      }

      function re(t) {
        return "undefined" != typeof PointerEvent && t instanceof PointerEvent ? !("mouse" !== t.pointerType) : t instanceof MouseEvent
      }

      function oe(t) {
        return !!t.touches
      }! function(t) {
        t.Animate = "animate", t.Hover = "whileHover", t.Tap = "whileTap", t.Drag = "whileDrag", t.Focus = "whileFocus", t.InView = "whileInView", t.Exit = "exit"
      }(Kt || (Kt = {}));
      var ie = {
        pageX: 0,
        pageY: 0
      };

      function ae(t, e) {
        void 0 === e && (e = "page");
        var n = t.touches[0] || t.changedTouches[0] || ie;
        return {
          x: n[e + "X"],
          y: n[e + "Y"]
        }
      }

      function se(t, e) {
        return void 0 === e && (e = "page"), {
          x: t[e + "X"],
          y: t[e + "Y"]
        }
      }

      function ue(t, e) {
        return void 0 === e && (e = "page"), {
          point: oe(t) ? ae(t, e) : se(t, e)
        }
      }
      var le = function(t, e) {
          void 0 === e && (e = !1);
          var n, r = function(e) {
            return t(e, ue(e))
          };
          return e ? (n = r, function(t) {
            var e = t instanceof MouseEvent;
            (!e || e && 0 === t.button) && n(t)
          }) : r
        },
        ce = function() {
          return y && null === window.onpointerdown
        },
        fe = function() {
          return y && null === window.ontouchstart
        },
        de = function() {
          return y && null === window.onmousedown
        },
        pe = {
          pointerdown: "mousedown",
          pointermove: "mousemove",
          pointerup: "mouseup",
          pointercancel: "mousecancel",
          pointerover: "mouseover",
          pointerout: "mouseout",
          pointerenter: "mouseenter",
          pointerleave: "mouseleave"
        },
        ve = {
          pointerdown: "touchstart",
          pointermove: "touchmove",
          pointerup: "touchend",
          pointercancel: "touchcancel"
        };

      function he(t) {
        return ce() ? t : fe() ? ve[t] : de() ? pe[t] : t
      }

      function me(t, e, n, r) {
        return ee(t, he(e), le(n, "pointerdown" === e), r)
      }

      function ge(t, e, n, r) {
        return ne(t, he(e), n && le(n, "pointerdown" === e), r)
      }

      function ye(t) {
        var e = null;
        return function() {
          return null === e && (e = t, function() {
            e = null
          })
        }
      }
      var xe = ye("dragHorizontal"),
        _e = ye("dragVertical");

      function be(t) {
        var e = !1;
        if ("y" === t) e = _e();
        else if ("x" === t) e = xe();
        else {
          var n = xe(),
            r = _e();
          n && r ? e = function() {
            n(), r()
          } : (n && n(), r && r())
        }
        return e
      }

      function Ee() {
        var t = be(!0);
        return !t || (t(), !1)
      }

      function we(t, e, n) {
        return function(r, o) {
          var i;
          re(r) && !Ee() && (null === (i = t.animationState) || void 0 === i || i.setActive(Kt.Hover, e), null == n || n(r, o))
        }
      }
      var Se = function(t, e) {
        return !!e && (t === e || Se(t, e.parentElement))
      };

      function Ae(t) {
        return (0, o.useEffect)((function() {
          return function() {
            return t()
          }
        }), [])
      }
      const Pe = (t, e) => n => e(t(n)),
        Ve = (...t) => t.reduce(Pe);
      var Te = new Set;

      function Ce(t, e, n) {
        t || Te.has(e) || (console.warn(e), n && console.warn(n), Te.add(e))
      }
      var Me = new WeakMap,
        Re = new WeakMap,
        Le = function(t) {
          var e;
          null === (e = Me.get(t.target)) || void 0 === e || e(t)
        },
        ke = function(t) {
          t.forEach(Le)
        };
      var De = {
        some: 0,
        all: 1
      };

      function Oe(t, e, n, i) {
        var a = i.root,
          s = i.margin,
          u = i.amount,
          l = void 0 === u ? "some" : u,
          c = i.once;
        (0, o.useEffect)((function() {
          if (t) {
            var o = {
              root: null == a ? void 0 : a.current,
              rootMargin: s,
              threshold: "number" == typeof l ? l : De[l]
            };
            return function(t, e, n) {
              var o = function(t) {
                var e = t.root,
                  n = (0, r.__rest)(t, ["root"]),
                  o = e || document;
                Re.has(o) || Re.set(o, {});
                var i = Re.get(o),
                  a = JSON.stringify(n);
                return i[a] || (i[a] = new IntersectionObserver(ke, (0, r.__assign)({
                  root: e
                }, n))), i[a]
              }(e);
              return Me.set(t, n), o.observe(t),
                function() {
                  Me.delete(t), o.unobserve(t)
                }
            }(n.getInstance(), o, (function(t) {
              var r, o = t.isIntersecting;
              if (e.isInView !== o && (e.isInView = o, !c || o || !e.hasEnteredView)) {
                o && (e.hasEnteredView = !0), null === (r = n.animationState) || void 0 === r || r.setActive(Kt.InView, o);
                var i = n.getProps(),
                  a = o ? i.onViewportEnter : i.onViewportLeave;
                null == a || a(t)
              }
            }))
          }
        }), [t, a, s, l])
      }

      function Ie(t, e, n, r) {
        var i = r.fallback,
          s = void 0 === i || i;
        (0, o.useEffect)((function() {
          t && s && ("production" !== a && Ce(!1, "IntersectionObserver not available on this device. whileInView animations will trigger on mount."), requestAnimationFrame((function() {
            var t;
            e.hasEnteredView = !0;
            var r = n.getProps().onViewportEnter;
            null == r || r(null), null === (t = n.animationState) || void 0 === t || t.setActive(Kt.InView, !0)
          })))
        }), [t])
      }
      var je = function(t) {
          return function(e) {
            return t(e), null
          }
        },
        Fe = {
          inView: je((function(t) {
            var e = t.visualElement,
              n = t.whileInView,
              r = t.onViewportEnter,
              i = t.onViewportLeave,
              a = t.viewport,
              s = void 0 === a ? {} : a,
              u = (0, o.useRef)({
                hasEnteredView: !1,
                isInView: !1
              }),
              l = Boolean(n || r || i);
            s.once && u.current.hasEnteredView && (l = !1), ("undefined" == typeof IntersectionObserver ? Ie : Oe)(l, u.current, e, s)
          })),
          tap: je((function(t) {
            var e = t.onTap,
              n = t.onTapStart,
              r = t.onTapCancel,
              i = t.whileTap,
              a = t.visualElement,
              s = e || n || r || i,
              u = (0, o.useRef)(!1),
              l = (0, o.useRef)(null),
              c = {
                passive: !(n || e || r || h)
              };

            function f() {
              var t;
              null === (t = l.current) || void 0 === t || t.call(l), l.current = null
            }

            function d() {
              var t;
              return f(), u.current = !1, null === (t = a.animationState) || void 0 === t || t.setActive(Kt.Tap, !1), !Ee()
            }

            function p(t, n) {
              d() && (Se(a.getInstance(), t.target) ? null == e || e(t, n) : null == r || r(t, n))
            }

            function v(t, e) {
              d() && (null == r || r(t, e))
            }

            function h(t, e) {
              var r;
              f(), u.current || (u.current = !0, l.current = Ve(me(window, "pointerup", p, c), me(window, "pointercancel", v, c)), null === (r = a.animationState) || void 0 === r || r.setActive(Kt.Tap, !0), null == n || n(t, e))
            }
            ge(a, "pointerdown", s ? h : void 0, c), Ae(f)
          })),
          focus: je((function(t) {
            var e = t.whileFocus,
              n = t.visualElement;
            ne(n, "focus", e ? function() {
              var t;
              null === (t = n.animationState) || void 0 === t || t.setActive(Kt.Focus, !0)
            } : void 0), ne(n, "blur", e ? function() {
              var t;
              null === (t = n.animationState) || void 0 === t || t.setActive(Kt.Focus, !1)
            } : void 0)
          })),
          hover: je((function(t) {
            var e = t.onHoverStart,
              n = t.onHoverEnd,
              r = t.whileHover,
              o = t.visualElement;
            ge(o, "pointerenter", e || r ? we(o, !0, e) : void 0, {
              passive: !e
            }), ge(o, "pointerleave", n || r ? we(o, !1, n) : void 0, {
              passive: !n
            })
          }))
        },
        Be = 0,
        Ue = function() {
          return Be++
        },
        Ne = function() {
          return L(Ue)
        };

      function ze() {
        var t = (0, o.useContext)(g);
        if (null === t) return [!0, null];
        var e = t.isPresent,
          n = t.onExitComplete,
          r = t.register,
          i = Ne();
        return (0, o.useEffect)((function() {
          return r(i)
        }), []), !e && n ? [!1, function() {
          return null == n ? void 0 : n(i)
        }] : [!0]
      }

      function We() {
        return null === (t = (0, o.useContext)(g)) || t.isPresent;
        var t
      }

      function He(t, e) {
        if (!Array.isArray(e)) return !1;
        var n = e.length;
        if (n !== t.length) return !1;
        for (var r = 0; r < n; r++)
          if (e[r] !== t[r]) return !1;
        return !0
      }
      const Ye = (t, e, n) => Math.min(Math.max(n, t), e),
        Xe = .001,
        Ge = .01,
        $e = 10,
        qe = .05,
        Ze = 1;
      const Ke = 12;

      function Je(t, e) {
        return t * Math.sqrt(1 - e * e)
      }
      const Qe = ["duration", "bounce"],
        tn = ["stiffness", "damping", "mass"];

      function en(t, e) {
        return e.some((e => void 0 !== t[e]))
      }

      function nn(t) {
        var {
          from: e = 0,
          to: n = 1,
          restSpeed: o = 2,
          restDelta: i
        } = t, a = (0, r.__rest)(t, ["from", "to", "restSpeed", "restDelta"]);
        const s = {
          done: !1,
          value: e
        };
        let {
          stiffness: u,
          damping: l,
          mass: f,
          velocity: d,
          duration: p,
          isResolvedFromDuration: v
        } = function(t) {
          let e = Object.assign({
            velocity: 0,
            stiffness: 100,
            damping: 10,
            mass: 1,
            isResolvedFromDuration: !1
          }, t);
          if (!en(t, tn) && en(t, Qe)) {
            const n = function({
              duration: t = 800,
              bounce: e = .25,
              velocity: n = 0,
              mass: r = 1
            }) {
              let o, i;
              (0, c.$)(t <= 1e3 * $e, "Spring duration must be 10 seconds or less");
              let a = 1 - e;
              a = Ye(qe, Ze, a), t = Ye(Ge, $e, t / 1e3), a < 1 ? (o = e => {
                const r = e * a,
                  o = r * t,
                  i = r - n,
                  s = Je(e, a),
                  u = Math.exp(-o);
                return Xe - i / s * u
              }, i = e => {
                const r = e * a * t,
                  i = r * n + n,
                  s = Math.pow(a, 2) * Math.pow(e, 2) * t,
                  u = Math.exp(-r),
                  l = Je(Math.pow(e, 2), a);
                return (-o(e) + Xe > 0 ? -1 : 1) * ((i - s) * u) / l
              }) : (o = e => Math.exp(-e * t) * ((e - n) * t + 1) - Xe, i = e => Math.exp(-e * t) * (t * t * (n - e)));
              const s = function(t, e, n) {
                let r = n;
                for (let n = 1; n < Ke; n++) r -= t(r) / e(r);
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
        }(a), h = rn, m = rn;

        function g() {
          const t = d ? -d / 1e3 : 0,
            r = n - e,
            o = l / (2 * Math.sqrt(u * f)),
            a = Math.sqrt(u / f) / 1e3;
          if (void 0 === i && (i = Math.min(Math.abs(n - e) / 100, .4)), o < 1) {
            const e = Je(a, o);
            h = i => {
              const s = Math.exp(-o * a * i);
              return n - s * ((t + o * a * r) / e * Math.sin(e * i) + r * Math.cos(e * i))
            }, m = n => {
              const i = Math.exp(-o * a * n);
              return o * a * i * (Math.sin(e * n) * (t + o * a * r) / e + r * Math.cos(e * n)) - i * (Math.cos(e * n) * (t + o * a * r) - e * r * Math.sin(e * n))
            }
          } else if (1 === o) h = e => n - Math.exp(-a * e) * (r + (t + a * r) * e);
          else {
            const e = a * Math.sqrt(o * o - 1);
            h = i => {
              const s = Math.exp(-o * a * i),
                u = Math.min(e * i, 300);
              return n - s * ((t + o * a * r) * Math.sinh(u) + e * r * Math.cosh(u)) / e
            }
          }
        }
        return g(), {
          next: t => {
            const e = h(t);
            if (v) s.done = t >= p;
            else {
              const r = 1e3 * m(t),
                a = Math.abs(r) <= o,
                u = Math.abs(n - e) <= i;
              s.done = a && u
            }
            return s.value = s.done ? n : e, s
          },
          flipTarget: () => {
            d = -d, [e, n] = [n, e], g()
          }
        }
      }
      nn.needsInterpolation = (t, e) => "string" == typeof t || "string" == typeof e;
      const rn = t => 0,
        on = (t, e, n) => {
          const r = e - t;
          return 0 === r ? 1 : (n - t) / r
        },
        an = (t, e, n) => -n * t + n * e + t,
        sn = (t, e) => n => Boolean(st(n) && at.test(n) && n.startsWith(t) || e && Object.prototype.hasOwnProperty.call(n, e)),
        un = (t, e, n) => r => {
          if (!st(r)) return r;
          const [o, i, a, s] = r.match(ot);
          return {
            [t]: parseFloat(o),
            [e]: parseFloat(i),
            [n]: parseFloat(a),
            alpha: void 0 !== s ? parseFloat(s) : 1
          }
        },
        ln = nt(0, 255),
        cn = Object.assign(Object.assign({}, ht), {
          transform: t => Math.round(ln(t))
        }),
        fn = {
          test: sn("rgb", "red"),
          parse: un("red", "green", "blue"),
          transform: ({
            red: t,
            green: e,
            blue: n,
            alpha: r = 1
          }) => "rgba(" + cn.transform(t) + ", " + cn.transform(e) + ", " + cn.transform(n) + ", " + rt(mt.transform(r)) + ")"
        },
        dn = {
          test: sn("#"),
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
          transform: fn.transform
        },
        pn = {
          test: sn("hsl", "hue"),
          parse: un("hue", "saturation", "lightness"),
          transform: ({
            hue: t,
            saturation: e,
            lightness: n,
            alpha: r = 1
          }) => "hsla(" + Math.round(t) + ", " + ct.transform(rt(e)) + ", " + ct.transform(rt(n)) + ", " + rt(mt.transform(r)) + ")"
        };

      function vn(t, e, n) {
        return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + 6 * (e - t) * n : n < .5 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
      }

      function hn({
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
          o = vn(s, r, t + 1 / 3), i = vn(s, r, t), a = vn(s, r, t - 1 / 3)
        } else o = i = a = n;
        return {
          red: Math.round(255 * o),
          green: Math.round(255 * i),
          blue: Math.round(255 * a),
          alpha: r
        }
      }
      const mn = (t, e, n) => {
          const r = t * t,
            o = e * e;
          return Math.sqrt(Math.max(0, n * (o - r) + r))
        },
        gn = [dn, fn, pn],
        yn = t => gn.find((e => e.test(t))),
        xn = t => `'${t}' is not an animatable color. Use the equivalent color code instead.`,
        _n = (t, e) => {
          let n = yn(t),
            r = yn(e);
          (0, c.V)(!!n, xn(t)), (0, c.V)(!!r, xn(e));
          let o = n.parse(t),
            i = r.parse(e);
          n === pn && (o = hn(o), n = fn), r === pn && (i = hn(i), r = fn);
          const a = Object.assign({}, o);
          return t => {
            for (const e in a) "alpha" !== e && (a[e] = mn(o[e], i[e], t));
            return a.alpha = an(o.alpha, i.alpha, t), n.transform(a)
          }
        },
        bn = {
          test: t => fn.test(t) || dn.test(t) || pn.test(t),
          parse: t => fn.test(t) ? fn.parse(t) : pn.test(t) ? pn.parse(t) : dn.parse(t),
          transform: t => st(t) ? t : t.hasOwnProperty("red") ? fn.transform(t) : pn.transform(t)
        },
        En = "${c}",
        wn = "${n}";

      function Sn(t) {
        "number" == typeof t && (t = `${t}`);
        const e = [];
        let n = 0;
        const r = t.match(it);
        r && (n = r.length, t = t.replace(it, En), e.push(...r.map(bn.parse)));
        const o = t.match(ot);
        return o && (t = t.replace(ot, wn), e.push(...o.map(ht.parse))), {
          values: e,
          numColors: n,
          tokenised: t
        }
      }

      function An(t) {
        return Sn(t).values
      }

      function Pn(t) {
        const {
          values: e,
          numColors: n,
          tokenised: r
        } = Sn(t), o = e.length;
        return t => {
          let e = r;
          for (let r = 0; r < o; r++) e = e.replace(r < n ? En : wn, r < n ? bn.transform(t[r]) : rt(t[r]));
          return e
        }
      }
      const Vn = t => "number" == typeof t ? 0 : t,
        Tn = {
          test: function(t) {
            var e, n, r, o;
            return isNaN(t) && st(t) && (null !== (n = null === (e = t.match(ot)) || void 0 === e ? void 0 : e.length) && void 0 !== n ? n : 0) + (null !== (o = null === (r = t.match(it)) || void 0 === r ? void 0 : r.length) && void 0 !== o ? o : 0) > 0
          },
          parse: An,
          createTransformer: Pn,
          getAnimatableNone: function(t) {
            const e = An(t);
            return Pn(t)(e.map(Vn))
          }
        },
        Cn = t => "number" == typeof t;

      function Mn(t, e) {
        return Cn(t) ? n => an(t, e, n) : bn.test(t) ? _n(t, e) : Dn(t, e)
      }
      const Rn = (t, e) => {
          const n = [...t],
            r = n.length,
            o = t.map(((t, n) => Mn(t, e[n])));
          return t => {
            for (let e = 0; e < r; e++) n[e] = o[e](t);
            return n
          }
        },
        Ln = (t, e) => {
          const n = Object.assign(Object.assign({}, t), e),
            r = {};
          for (const o in n) void 0 !== t[o] && void 0 !== e[o] && (r[o] = Mn(t[o], e[o]));
          return t => {
            for (const e in r) n[e] = r[e](t);
            return n
          }
        };

      function kn(t) {
        const e = Tn.parse(t),
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
      const Dn = (t, e) => {
          const n = Tn.createTransformer(e),
            r = kn(t),
            o = kn(e);
          return r.numHSL === o.numHSL && r.numRGB === o.numRGB && r.numNumbers >= o.numNumbers ? Ve(Rn(r.parsed, o.parsed), n) : ((0, c.$)(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), n => `${n>0?e:t}`)
        },
        On = (t, e) => n => an(t, e, n);

      function In(t, e, {
        clamp: n = !0,
        ease: r,
        mixer: o
      } = {}) {
        const i = t.length;
        (0, c.V)(i === e.length, "Both input and output ranges must be the same length"), (0, c.V)(!r || !Array.isArray(r) || r.length === i - 1, "Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."), t[0] > t[i - 1] && (t = [].concat(t), e = [].concat(e), t.reverse(), e.reverse());
        const a = function(t, e, n) {
            const r = [],
              o = n || ("number" == typeof(i = t[0]) ? On : "string" == typeof i ? bn.test(i) ? _n : Dn : Array.isArray(i) ? Rn : "object" == typeof i ? Ln : void 0);
            var i;
            const a = t.length - 1;
            for (let n = 0; n < a; n++) {
              let i = o(t[n], t[n + 1]);
              if (e) {
                const t = Array.isArray(e) ? e[n] : e;
                i = Ve(t, i)
              }
              r.push(i)
            }
            return r
          }(e, r, o),
          s = 2 === i ? function([t, e], [n]) {
            return r => n(on(t, e, r))
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
              const s = on(t[i], t[i + 1], o);
              return e[i](s)
            }
          }(t, a);
        return n ? e => s(Ye(t[0], t[i - 1], e)) : s
      }
      const jn = t => e => 1 - t(1 - e),
        Fn = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
        Bn = t => e => e * e * ((t + 1) * e - t),
        Un = 4 / 11,
        Nn = 8 / 11,
        zn = t => t,
        Wn = t => Math.pow(t, 2);
      const Hn = jn(Wn),
        Yn = Fn(Wn),
        Xn = t => 1 - Math.sin(Math.acos(t)),
        Gn = jn(Xn),
        $n = Fn(Gn),
        qn = Bn(1.525),
        Zn = jn(qn),
        Kn = Fn(qn),
        Jn = (() => {
          const t = Bn(1.525);
          return e => (e *= 2) < 1 ? .5 * t(e) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
        })(),
        Qn = 4356 / 361,
        tr = 35442 / 1805,
        er = 16061 / 1805,
        nr = t => {
          if (1 === t || 0 === t) return t;
          const e = t * t;
          return t < Un ? 7.5625 * e : t < Nn ? 9.075 * e - 9.9 * t + 3.4 : t < .9 ? Qn * e - tr * t + er : 10.8 * t * t - 20.52 * t + 10.72
        },
        rr = jn(nr);

      function or(t, e) {
        return t.map((() => e || Yn)).splice(0, t.length - 1)
      }

      function ir({
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
          return In(s, a, {
            ease: Array.isArray(n) ? n : or(a, n)
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
      const ar = {
          keyframes: ir,
          spring: nn,
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
        sr = 1 / 60 * 1e3,
        ur = "undefined" != typeof performance ? () => performance.now() : () => Date.now(),
        lr = "undefined" != typeof window ? t => window.requestAnimationFrame(t) : t => setTimeout((() => t(ur())), sr);
      let cr = !0,
        fr = !1,
        dr = !1;
      const pr = {
          delta: 0,
          timestamp: 0
        },
        vr = ["read", "update", "preRender", "render", "postRender"],
        hr = vr.reduce(((t, e) => (t[e] = function(t) {
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
        }((() => fr = !0)), t)), {}),
        mr = vr.reduce(((t, e) => {
          const n = hr[e];
          return t[e] = (t, e = !1, r = !1) => (fr || br(), n.schedule(t, e, r)), t
        }), {}),
        gr = vr.reduce(((t, e) => (t[e] = hr[e].cancel, t)), {}),
        yr = vr.reduce(((t, e) => (t[e] = () => hr[e].process(pr), t)), {}),
        xr = t => hr[t].process(pr),
        _r = t => {
          fr = !1, pr.delta = cr ? sr : Math.max(Math.min(t - pr.timestamp, 40), 1), pr.timestamp = t, dr = !0, vr.forEach(xr), dr = !1, fr && (cr = !1, lr(_r))
        },
        br = () => {
          fr = !0, cr = !0, dr || lr(_r)
        },
        Er = () => pr,
        wr = mr;

      function Sr(t, e, n = 0) {
        return t - e - n
      }
      const Ar = t => {
        const e = ({
          delta: e
        }) => t(e);
        return {
          start: () => wr.update(e, !0),
          stop: () => gr.update(e)
        }
      };

      function Pr(t) {
        var e, n, {
            from: o,
            autoplay: i = !0,
            driver: a = Ar,
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
          m = (0, r.__rest)(t, ["from", "autoplay", "driver", "elapsed", "repeat", "repeatType", "repeatDelay", "onPlay", "onStop", "onComplete", "onRepeat", "onUpdate"]);
        let g, y, x, {
            to: _
          } = m,
          b = 0,
          E = m.duration,
          w = !1,
          S = !0;
        const A = function(t) {
          if (Array.isArray(t.to)) return ir;
          if (ar[t.type]) return ar[t.type];
          const e = new Set(Object.keys(t));
          return e.has("ease") || e.has("duration") && !e.has("dampingRatio") ? ir : e.has("dampingRatio") || e.has("stiffness") || e.has("mass") || e.has("damping") || e.has("restSpeed") || e.has("restDelta") ? nn : ir
        }(m);
        (null === (n = (e = A).needsInterpolation) || void 0 === n ? void 0 : n.call(e, o, _)) && (x = In([0, 100], [o, _], {
          clamp: !1
        }), o = 0, _ = 100);
        const P = A(Object.assign(Object.assign({}, m), {
          from: o,
          to: _
        }));
        return i && (null == f || f(), g = a((function(t) {
          if (S || (t = -t), s += t, !w) {
            const t = P.next(Math.max(0, s));
            y = t.value, x && (y = x(y)), w = S ? t.done : s <= 0
          }
          null == h || h(y), w && (0 === b && (null != E || (E = s)), b < u ? function(t, e, n, r) {
            return r ? t >= e + n : t <= -n
          }(s, E, c, S) && (b++, "reverse" === l ? (S = b % 2 == 0, s = function(t, e, n = 0, r = !0) {
            return r ? Sr(e + -t, e, n) : e - (t - e) + n
          }(s, E, c, S)) : (s = Sr(s, E, c), "mirror" === l && P.flipTarget()), w = !1, v && v()) : (g.stop(), p && p()))
        })), g.start()), {
          stop: () => {
            null == d || d(), g.stop()
          }
        }
      }

      function Vr(t, e) {
        return e ? t * (1e3 / e) : 0
      }
      var Tr = function(t) {
        return 1e3 * t
      };
      const Cr = (t, e) => 1 - 3 * e + 3 * t,
        Mr = (t, e) => 3 * e - 6 * t,
        Rr = t => 3 * t,
        Lr = (t, e, n) => ((Cr(e, n) * t + Mr(e, n)) * t + Rr(e)) * t,
        kr = (t, e, n) => 3 * Cr(e, n) * t * t + 2 * Mr(e, n) * t + Rr(e),
        Dr = .1;

      function Or(t, e, n, r) {
        if (t === e && n === r) return zn;
        const o = new Float32Array(11);
        for (let e = 0; e < 11; ++e) o[e] = Lr(e * Dr, t, n);
        return i => 0 === i || 1 === i ? i : Lr(function(e) {
          let r = 0,
            i = 1;
          for (; 10 !== i && o[i] <= e; ++i) r += Dr;
          --i;
          const a = r + (e - o[i]) / (o[i + 1] - o[i]) * Dr,
            s = kr(a, t, n);
          return s >= .001 ? function(t, e, n, r) {
            for (let o = 0; o < 8; ++o) {
              const o = kr(e, n, r);
              if (0 === o) return e;
              e -= (Lr(e, n, r) - t) / o
            }
            return e
          }(e, a, t, n) : 0 === s ? a : function(t, e, n, r, o) {
            let i, a, s = 0;
            do {
              a = e + (n - e) / 2, i = Lr(a, r, o) - t, i > 0 ? n = a : e = a
            } while (Math.abs(i) > 1e-7 && ++s < 10);
            return a
          }(e, r, r + Dr, t, n)
        }(i), e, r)
      }
      var Ir = {
          linear: zn,
          easeIn: Wn,
          easeInOut: Yn,
          easeOut: Hn,
          circIn: Xn,
          circInOut: $n,
          circOut: Gn,
          backIn: qn,
          backInOut: Kn,
          backOut: Zn,
          anticipate: Jn,
          bounceIn: rr,
          bounceInOut: t => t < .5 ? .5 * (1 - nr(1 - 2 * t)) : .5 * nr(2 * t - 1) + .5,
          bounceOut: nr
        },
        jr = function(t) {
          if (Array.isArray(t)) {
            (0, c.V)(4 === t.length, "Cubic bezier arrays must contain four numerical values.");
            var e = (0, r.__read)(t, 4);
            return Or(e[0], e[1], e[2], e[3])
          }
          return "string" == typeof t ? ((0, c.V)(void 0 !== Ir[t], "Invalid easing type '".concat(t, "'")), Ir[t]) : t
        },
        Fr = function(t) {
          return Array.isArray(t) && "number" != typeof t[0]
        },
        Br = function(t, e) {
          return !("zIndex" === t || "number" != typeof e && !Array.isArray(e) && ("string" != typeof e || !Tn.test(e) || e.startsWith("url(")))
        },
        Ur = function() {
          return {
            type: "spring",
            stiffness: 500,
            damping: 25,
            restSpeed: 10
          }
        },
        Nr = function(t) {
          return {
            type: "spring",
            stiffness: 550,
            damping: 0 === t ? 2 * Math.sqrt(550) : 30,
            restSpeed: 10
          }
        },
        zr = function() {
          return {
            type: "keyframes",
            ease: "linear",
            duration: .3
          }
        },
        Wr = function(t) {
          return {
            type: "keyframes",
            duration: .8,
            values: t
          }
        },
        Hr = {
          x: Ur,
          y: Ur,
          z: Ur,
          rotate: Ur,
          rotateX: Ur,
          rotateY: Ur,
          rotateZ: Ur,
          scaleX: Nr,
          scaleY: Nr,
          scale: Nr,
          opacity: zr,
          backgroundColor: zr,
          color: zr,
          default: Nr
        },
        Yr = function(t, e) {
          var n;
          return n = Ht(e) ? Wr : Hr[t] || Hr.default, (0, r.__assign)({
            to: e
          }, n(e))
        };
      const Xr = new Set(["brightness", "contrast", "saturate", "opacity"]);

      function Gr(t) {
        let [e, n] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        const [r] = n.match(ot) || [];
        if (!r) return t;
        const o = n.replace(r, "");
        let i = Xr.has(e) ? 1 : 0;
        return r !== n && (i *= 100), e + "(" + i + o + ")"
      }
      const $r = /([a-z-]*)\(.*?\)/g,
        qr = Object.assign(Object.assign({}, Tn), {
          getAnimatableNone: t => {
            const e = t.match($r);
            return e ? e.map(Gr).join(" ") : t
          }
        });
      var Zr = (0, r.__assign)((0, r.__assign)({}, xt), {
          color: bn,
          backgroundColor: bn,
          outlineColor: bn,
          fill: bn,
          stroke: bn,
          borderColor: bn,
          borderTopColor: bn,
          borderRightColor: bn,
          borderBottomColor: bn,
          borderLeftColor: bn,
          filter: qr,
          WebkitFilter: qr
        }),
        Kr = function(t) {
          return Zr[t]
        };

      function Jr(t, e) {
        var n, r = Kr(t);
        return r !== qr && (r = Tn), null === (n = r.getAnimatableNone) || void 0 === n ? void 0 : n.call(r, e)
      }
      var Qr = {
          current: !1
        },
        to = !1;

      function eo(t, e, n, o, i) {
        var a, s = oo(o, t),
          u = null !== (a = s.from) && void 0 !== a ? a : e.get(),
          l = Br(t, n);
        "none" === u && l && "string" == typeof n ? u = Jr(t, n) : no(u) && "string" == typeof n ? u = ro(n) : !Array.isArray(n) && no(n) && "string" == typeof u && (n = ro(u));
        var f = Br(t, u);
        return (0, c.$)(f === l, "You are trying to animate ".concat(t, ' from "').concat(u, '" to "').concat(n, '". ').concat(u, " is not an animatable value - to enable this animation set ").concat(u, " to a value animatable to ").concat(n, " via the `style` property.")), f && l && !1 !== s.type ? function() {
          var o = {
            from: u,
            to: n,
            velocity: e.getVelocity(),
            onComplete: i,
            onUpdate: function(t) {
              return e.set(t)
            }
          };
          return "inertia" === s.type || "decay" === s.type ? function({
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
              null == v || v.stop(), v = Pr(Object.assign(Object.assign({}, t), {
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
                c = f, f = t, e = Vr(t - c, Er().delta), (1 === s && t > a || -1 === s && t < a) && y({
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
          }((0, r.__assign)((0, r.__assign)({}, o), s)) : Pr((0, r.__assign)((0, r.__assign)({}, function(t, e, n) {
            var o;
            return Array.isArray(e.to) && (null !== (o = t.duration) && void 0 !== o || (t.duration = .8)),
              function(t) {
                Array.isArray(t.to) && null === t.to[0] && (t.to = (0, r.__spreadArray)([], (0, r.__read)(t.to), !1), t.to[0] = t.from)
              }(e),
              function(t) {
                t.when, t.delay, t.delayChildren, t.staggerChildren, t.staggerDirection, t.repeat, t.repeatType, t.repeatDelay, t.from;
                var e = (0, r.__rest)(t, ["when", "delay", "delayChildren", "staggerChildren", "staggerDirection", "repeat", "repeatType", "repeatDelay", "from"]);
                return !!Object.keys(e).length
              }(t) || (t = (0, r.__assign)((0, r.__assign)({}, t), Yr(n, e.to))), (0, r.__assign)((0, r.__assign)({}, e), function(t) {
                var e = t.ease,
                  n = t.times,
                  o = t.yoyo,
                  i = t.flip,
                  a = t.loop,
                  s = (0, r.__rest)(t, ["ease", "times", "yoyo", "flip", "loop"]),
                  u = (0, r.__assign)({}, s);
                return n && (u.offset = n), s.duration && (u.duration = Tr(s.duration)), s.repeatDelay && (u.repeatDelay = Tr(s.repeatDelay)), e && (u.ease = Fr(e) ? e.map(jr) : jr(e)), "tween" === s.type && (u.type = "keyframes"), (o || a || i) && ((0, c.$)(!to, "yoyo, loop and flip have been removed from the API. Replace with repeat and repeatType options."), to = !0, o ? u.repeatType = "reverse" : a ? u.repeatType = "loop" : i && (u.repeatType = "mirror"), u.repeat = a || o || i || s.repeat), "spring" !== s.type && (u.type = "keyframes"), u
              }(t))
          }(s, o, t)), {
            onUpdate: function(t) {
              var e;
              o.onUpdate(t), null === (e = s.onUpdate) || void 0 === e || e.call(s, t)
            },
            onComplete: function() {
              var t;
              o.onComplete(), null === (t = s.onComplete) || void 0 === t || t.call(s)
            }
          }))
        } : function() {
          var t, r, o = Xt(n);
          return e.set(o), i(), null === (t = null == s ? void 0 : s.onUpdate) || void 0 === t || t.call(s, o), null === (r = null == s ? void 0 : s.onComplete) || void 0 === r || r.call(s), {
            stop: function() {}
          }
        }
      }

      function no(t) {
        return 0 === t || "string" == typeof t && 0 === parseFloat(t) && -1 === t.indexOf(" ")
      }

      function ro(t) {
        return "number" == typeof t ? 0 : Jr("", t)
      }

      function oo(t, e) {
        return t[e] || t.default || t
      }

      function io(t, e, n, r) {
        return void 0 === r && (r = {}), Qr.current && (r = {
          type: !1
        }), e.start((function(o) {
          var i, a, s = eo(t, e, n, r, o),
            u = function(t, e) {
              var n, r;
              return null !== (r = null !== (n = (oo(t, e) || {}).delay) && void 0 !== n ? n : t.delay) && void 0 !== r ? r : 0
            }(r, t),
            l = function() {
              return a = s()
            };
          return u ? i = window.setTimeout(l, Tr(u)) : l(),
            function() {
              clearTimeout(i), null == a || a.stop()
            }
        }))
      }
      var ao = function(t) {
          return /^\-?\d*\.?\d+$/.test(t)
        },
        so = function(t) {
          return /^0[^.\s]+$/.test(t)
        };

      function uo(t, e) {
        -1 === t.indexOf(e) && t.push(e)
      }

      function lo(t, e) {
        var n = t.indexOf(e);
        n > -1 && t.splice(n, 1)
      }
      var co = function() {
          function t() {
            this.subscriptions = []
          }
          return t.prototype.add = function(t) {
            var e = this;
            return uo(this.subscriptions, t),
              function() {
                return lo(e.subscriptions, t)
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
        fo = function() {
          function t(t) {
            var e, n = this;
            this.version = "6.5.1", this.timeDelta = 0, this.lastUpdated = 0, this.updateSubscribers = new co, this.velocityUpdateSubscribers = new co, this.renderSubscribers = new co, this.canTrackVelocity = !1, this.updateAndNotify = function(t, e) {
              void 0 === e && (e = !0), n.prev = n.current, n.current = t;
              var r = Er(),
                o = r.delta,
                i = r.timestamp;
              n.lastUpdated !== i && (n.timeDelta = o, n.lastUpdated = i, wr.postRender(n.scheduleVelocityCheck)), n.prev !== n.current && n.updateSubscribers.notify(n.current), n.velocityUpdateSubscribers.getSize() && n.velocityUpdateSubscribers.notify(n.getVelocity()), e && n.renderSubscribers.notify(n.current)
            }, this.scheduleVelocityCheck = function() {
              return wr.postRender(n.velocityCheck)
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

      function po(t) {
        return new fo(t)
      }
      var vo = function(t) {
          return function(e) {
            return e.test(t)
          }
        },
        ho = [ht, ft, ct, lt, pt, dt, {
          test: function(t) {
            return "auto" === t
          },
          parse: function(t) {
            return t
          }
        }],
        mo = function(t) {
          return ho.find(vo(t))
        },
        go = (0, r.__spreadArray)((0, r.__spreadArray)([], (0, r.__read)(ho), !1), [bn, Tn], !1),
        yo = function(t) {
          return go.find(vo(t))
        };

      function xo(t, e, n) {
        t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, po(n))
      }

      function _o(t, e) {
        var n = T(t, e),
          o = n ? t.makeTargetAnimatable(n, !1) : {},
          i = o.transitionEnd,
          a = void 0 === i ? {} : i;
        o.transition;
        var s = (0, r.__rest)(o, ["transitionEnd", "transition"]);
        for (var u in s = (0, r.__assign)((0, r.__assign)({}, s), a)) xo(t, u, Xt(s[u]))
      }

      function bo(t, e) {
        (0, r.__spreadArray)([], (0, r.__read)(e), !1).reverse().forEach((function(n) {
          var r, o = t.getVariant(n);
          o && _o(t, o), null === (r = t.variantChildren) || void 0 === r || r.forEach((function(t) {
            bo(t, e)
          }))
        }))
      }

      function Eo(t, e, n) {
        var r, o, i, a, s = Object.keys(e).filter((function(e) {
            return !t.hasValue(e)
          })),
          u = s.length;
        if (u)
          for (var l = 0; l < u; l++) {
            var c = s[l],
              f = e[c],
              d = null;
            Array.isArray(f) && (d = f[0]), null === d && (d = null !== (o = null !== (r = n[c]) && void 0 !== r ? r : t.readValue(c)) && void 0 !== o ? o : e[c]), null != d && ("string" == typeof d && (ao(d) || so(d)) ? d = parseFloat(d) : !yo(d) && Tn.test(f) && (d = Jr(c, f)), t.addValue(c, po(d)), null !== (i = (a = n)[c]) && void 0 !== i || (a[c] = d), t.setBaseTarget(c, d))
          }
      }

      function wo(t, e) {
        if (e) return (e[t] || e.default || e).from
      }

      function So(t, e, n) {
        var r, o, i = {};
        for (var a in t) i[a] = null !== (r = wo(a, e)) && void 0 !== r ? r : null === (o = n.getValue(a)) || void 0 === o ? void 0 : o.get();
        return i
      }

      function Ao(t, e, n) {
        var r;
        if (void 0 === n && (n = {}), t.notifyAnimationStart(e), Array.isArray(e)) {
          var o = e.map((function(e) {
            return Po(t, e, n)
          }));
          r = Promise.all(o)
        } else if ("string" == typeof e) r = Po(t, e, n);
        else {
          var i = "function" == typeof e ? T(t, e, n.custom) : e;
          r = Vo(t, i, n)
        }
        return r.then((function() {
          return t.notifyAnimationComplete(e)
        }))
      }

      function Po(t, e, n) {
        var o;
        void 0 === n && (n = {});
        var i = T(t, e, n.custom),
          a = (i || {}).transition,
          s = void 0 === a ? t.getDefaultTransition() || {} : a;
        n.transitionOverride && (s = n.transitionOverride);
        var u = i ? function() {
            return Vo(t, i, n)
          } : function() {
            return Promise.resolve()
          },
          l = (null === (o = t.variantChildren) || void 0 === o ? void 0 : o.size) ? function(o) {
            void 0 === o && (o = 0);
            var i = s.delayChildren,
              a = void 0 === i ? 0 : i,
              u = s.staggerChildren,
              l = s.staggerDirection;
            return function(t, e, n, o, i, a) {
              void 0 === n && (n = 0), void 0 === o && (o = 0), void 0 === i && (i = 1);
              var s = [],
                u = (t.variantChildren.size - 1) * o,
                l = 1 === i ? function(t) {
                  return void 0 === t && (t = 0), t * o
                } : function(t) {
                  return void 0 === t && (t = 0), u - t * o
                };
              return Array.from(t.variantChildren).sort(To).forEach((function(t, o) {
                s.push(Po(t, e, (0, r.__assign)((0, r.__assign)({}, a), {
                  delay: n + l(o)
                })).then((function() {
                  return t.notifyAnimationComplete(e)
                })))
              })), Promise.all(s)
            }(t, e, a + o, u, l, n)
          } : function() {
            return Promise.resolve()
          },
          c = s.when;
        if (c) {
          var f = (0, r.__read)("beforeChildren" === c ? [u, l] : [l, u], 2),
            d = f[0],
            p = f[1];
          return d().then(p)
        }
        return Promise.all([u(), l(n.delay)])
      }

      function Vo(t, e, n) {
        var o, i = void 0 === n ? {} : n,
          a = i.delay,
          s = void 0 === a ? 0 : a,
          u = i.transitionOverride,
          l = i.type,
          c = t.makeTargetAnimatable(e),
          f = c.transition,
          d = void 0 === f ? t.getDefaultTransition() : f,
          p = c.transitionEnd,
          v = (0, r.__rest)(c, ["transition", "transitionEnd"]);
        u && (d = u);
        var h = [],
          m = l && (null === (o = t.animationState) || void 0 === o ? void 0 : o.getState()[l]);
        for (var g in v) {
          var y = t.getValue(g),
            x = v[g];
          if (!(!y || void 0 === x || m && Co(m, g))) {
            var _ = (0, r.__assign)({
              delay: s
            }, d);
            t.shouldReduceMotion && $(g) && (_ = (0, r.__assign)((0, r.__assign)({}, _), {
              type: !1,
              delay: 0
            }));
            var b = io(g, y, x, _);
            h.push(b)
          }
        }
        return Promise.all(h).then((function() {
          p && _o(t, p)
        }))
      }

      function To(t, e) {
        return t.sortNodePosition(e)
      }

      function Co(t, e) {
        var n = t.protectedKeys,
          r = t.needsAnimating,
          o = n.hasOwnProperty(e) && !0 !== r[e];
        return r[e] = !1, o
      }
      var Mo = [Kt.Animate, Kt.InView, Kt.Focus, Kt.Hover, Kt.Tap, Kt.Drag, Kt.Exit],
        Ro = (0, r.__spreadArray)([], (0, r.__read)(Mo), !1).reverse(),
        Lo = Mo.length;

      function ko(t) {
        return void 0 === t && (t = !1), {
          isActive: t,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {}
        }
      }
      var Do = {
        animation: je((function(t) {
          var e = t.visualElement,
            n = t.animate;
          e.animationState || (e.animationState = function(t) {
            var e, n = function(t) {
                return function(e) {
                  return Promise.all(e.map((function(e) {
                    var n = e.animation,
                      r = e.options;
                    return Ao(t, n, r)
                  })))
                }
              }(t),
              o = ((e = {})[Kt.Animate] = ko(!0), e[Kt.InView] = ko(), e[Kt.Hover] = ko(), e[Kt.Tap] = ko(), e[Kt.Drag] = ko(), e[Kt.Focus] = ko(), e[Kt.Exit] = ko(), e),
              i = {},
              a = !0,
              s = function(e, n) {
                var o = T(t, n);
                if (o) {
                  o.transition;
                  var i = o.transitionEnd,
                    a = (0, r.__rest)(o, ["transition", "transitionEnd"]);
                  e = (0, r.__assign)((0, r.__assign)((0, r.__assign)({}, e), a), i)
                }
                return e
              };

            function u(e, u) {
              for (var l, c = t.getProps(), f = t.getVariantContext(!0) || {}, d = [], p = new Set, v = {}, h = 1 / 0, m = function(n) {
                  var i = Ro[n],
                    m = o[i],
                    g = null !== (l = c[i]) && void 0 !== l ? l : f[i],
                    y = P(g),
                    x = i === u ? m.isActive : null;
                  !1 === x && (h = n);
                  var _ = g === f[i] && g !== c[i] && y;
                  if (_ && a && t.manuallyAnimateOnMount && (_ = !1), m.protectedKeys = (0, r.__assign)({}, v), !m.isActive && null === x || !g && !m.prevProp || Wt(g) || "boolean" == typeof g) return "continue";
                  var b = function(t, e) {
                      return "string" == typeof e ? e !== t : !!A(e) && !He(e, t)
                    }(m.prevProp, g),
                    E = b || i === u && m.isActive && !_ && y || n > h && y,
                    w = Array.isArray(g) ? g : [g],
                    S = w.reduce(s, {});
                  !1 === x && (S = {});
                  var V = m.prevResolvedValues,
                    T = void 0 === V ? {} : V,
                    C = (0, r.__assign)((0, r.__assign)({}, T), S),
                    M = function(t) {
                      E = !0, p.delete(t), m.needsAnimating[t] = !0
                    };
                  for (var R in C) {
                    var L = S[R],
                      k = T[R];
                    v.hasOwnProperty(R) || (L !== k ? Ht(L) && Ht(k) ? !He(L, k) || b ? M(R) : m.protectedKeys[R] = !0 : void 0 !== L ? M(R) : p.add(R) : void 0 !== L && p.has(R) ? M(R) : m.protectedKeys[R] = !0)
                  }
                  m.prevProp = g, m.prevResolvedValues = S, m.isActive && (v = (0, r.__assign)((0, r.__assign)({}, v), S)), a && t.blockInitialAnimation && (E = !1), E && !_ && d.push.apply(d, (0, r.__spreadArray)([], (0, r.__read)(w.map((function(t) {
                    return {
                      animation: t,
                      options: (0, r.__assign)({
                        type: i
                      }, e)
                    }
                  }))), !1))
                }, g = 0; g < Lo; g++) m(g);
              if (i = (0, r.__assign)({}, v), p.size) {
                var y = {};
                p.forEach((function(e) {
                  var n = t.getBaseTarget(e);
                  void 0 !== n && (y[e] = n)
                })), d.push({
                  animation: y
                })
              }
              var x = Boolean(d.length);
              return a && !1 === c.initial && !t.manuallyAnimateOnMount && (x = !1), a = !1, x ? n(d) : Promise.resolve()
            }
            return {
              isAnimated: function(t) {
                return void 0 !== i[t]
              },
              animateChanges: u,
              setActive: function(e, n, r) {
                var i;
                if (o[e].isActive === n) return Promise.resolve();
                null === (i = t.variantChildren) || void 0 === i || i.forEach((function(t) {
                  var r;
                  return null === (r = t.animationState) || void 0 === r ? void 0 : r.setActive(e, n)
                })), o[e].isActive = n;
                var a = u(r, e);
                for (var s in o) o[s].protectedKeys = {};
                return a
              },
              setAnimateFunction: function(e) {
                n = e(t)
              },
              getState: function() {
                return o
              }
            }
          }(e)), Wt(n) && (0, o.useEffect)((function() {
            return n.subscribe(e)
          }), [n])
        })),
        exit: je((function(t) {
          var e = t.custom,
            n = t.visualElement,
            i = (0, r.__read)(ze(), 2),
            a = i[0],
            s = i[1],
            u = (0, o.useContext)(g);
          (0, o.useEffect)((function() {
            var t, r;
            n.isPresent = a;
            var o = null === (t = n.animationState) || void 0 === t ? void 0 : t.setActive(Kt.Exit, !a, {
              custom: null !== (r = null == u ? void 0 : u.custom) && void 0 !== r ? r : e
            });
            !a && (null == o || o.then(s))
          }), [a])
        }))
      };
      const Oo = t => t.hasOwnProperty("x") && t.hasOwnProperty("y"),
        Io = t => Oo(t) && t.hasOwnProperty("z"),
        jo = (t, e) => Math.abs(t - e);

      function Fo(t, e) {
        if (Cn(t) && Cn(e)) return jo(t, e);
        if (Oo(t) && Oo(e)) {
          const n = jo(t.x, e.x),
            r = jo(t.y, e.y),
            o = Io(t) && Io(e) ? jo(t.z, e.z) : 0;
          return Math.sqrt(Math.pow(n, 2) + Math.pow(r, 2) + Math.pow(o, 2))
        }
      }
      var Bo = function() {
        function t(t, e, n) {
          var o = this,
            i = (void 0 === n ? {} : n).transformPagePoint;
          if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = function() {
              if (o.lastMoveEvent && o.lastMoveEventInfo) {
                var t = zo(o.lastMoveEventInfo, o.history),
                  e = null !== o.startEvent,
                  n = Fo(t.offset, {
                    x: 0,
                    y: 0
                  }) >= 3;
                if (e || n) {
                  var i = t.point,
                    a = Er().timestamp;
                  o.history.push((0, r.__assign)((0, r.__assign)({}, i), {
                    timestamp: a
                  }));
                  var s = o.handlers,
                    u = s.onStart,
                    l = s.onMove;
                  e || (u && u(o.lastMoveEvent, t), o.startEvent = o.lastMoveEvent), l && l(o.lastMoveEvent, t)
                }
              }
            }, this.handlePointerMove = function(t, e) {
              o.lastMoveEvent = t, o.lastMoveEventInfo = Uo(e, o.transformPagePoint), re(t) && 0 === t.buttons ? o.handlePointerUp(t, e) : wr.update(o.updatePoint, !0)
            }, this.handlePointerUp = function(t, e) {
              o.end();
              var n = o.handlers,
                r = n.onEnd,
                i = n.onSessionEnd,
                a = zo(Uo(e, o.transformPagePoint), o.history);
              o.startEvent && r && r(t, a), i && i(t, a)
            }, !(oe(t) && t.touches.length > 1)) {
            this.handlers = e, this.transformPagePoint = i;
            var a = Uo(ue(t), this.transformPagePoint),
              s = a.point,
              u = Er().timestamp;
            this.history = [(0, r.__assign)((0, r.__assign)({}, s), {
              timestamp: u
            })];
            var l = e.onSessionStart;
            l && l(t, zo(a, this.history)), this.removeListeners = Ve(me(window, "pointermove", this.handlePointerMove), me(window, "pointerup", this.handlePointerUp), me(window, "pointercancel", this.handlePointerUp))
          }
        }
        return t.prototype.updateHandlers = function(t) {
          this.handlers = t
        }, t.prototype.end = function() {
          this.removeListeners && this.removeListeners(), gr.update(this.updatePoint)
        }, t
      }();

      function Uo(t, e) {
        return e ? {
          point: e(t.point)
        } : t
      }

      function No(t, e) {
        return {
          x: t.x - e.x,
          y: t.y - e.y
        }
      }

      function zo(t, e) {
        var n = t.point;
        return {
          point: n,
          delta: No(n, Ho(e)),
          offset: No(n, Wo(e)),
          velocity: Yo(e, .1)
        }
      }

      function Wo(t) {
        return t[0]
      }

      function Ho(t) {
        return t[t.length - 1]
      }

      function Yo(t, e) {
        if (t.length < 2) return {
          x: 0,
          y: 0
        };
        for (var n = t.length - 1, r = null, o = Ho(t); n >= 0 && (r = t[n], !(o.timestamp - r.timestamp > Tr(e)));) n--;
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

      function Xo(t) {
        return t.max - t.min
      }

      function Go(t, e, n) {
        return void 0 === e && (e = 0), void 0 === n && (n = .01), Fo(t, e) < n
      }

      function $o(t, e, n, r) {
        void 0 === r && (r = .5), t.origin = r, t.originPoint = an(e.min, e.max, t.origin), t.scale = Xo(n) / Xo(e), (Go(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1), t.translate = an(n.min, n.max, t.origin) - t.originPoint, (Go(t.translate) || isNaN(t.translate)) && (t.translate = 0)
      }

      function qo(t, e, n, r) {
        $o(t.x, e.x, n.x, null == r ? void 0 : r.originX), $o(t.y, e.y, n.y, null == r ? void 0 : r.originY)
      }

      function Zo(t, e, n) {
        t.min = n.min + e.min, t.max = t.min + Xo(e)
      }

      function Ko(t, e, n) {
        t.min = e.min - n.min, t.max = t.min + Xo(e)
      }

      function Jo(t, e, n) {
        Ko(t.x, e.x, n.x), Ko(t.y, e.y, n.y)
      }

      function Qo(t, e, n) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== n ? t.max + n - (t.max - t.min) : void 0
        }
      }

      function ti(t, e) {
        var n, o = e.min - t.min,
          i = e.max - t.max;
        return e.max - e.min < t.max - t.min && (o = (n = (0, r.__read)([i, o], 2))[0], i = n[1]), {
          min: o,
          max: i
        }
      }
      var ei = .35;

      function ni(t, e, n) {
        return {
          min: ri(t, e),
          max: ri(t, n)
        }
      }

      function ri(t, e) {
        var n;
        return "number" == typeof t ? t : null !== (n = t[e]) && void 0 !== n ? n : 0
      }
      var oi = function() {
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

      function ii(t) {
        return [t("x"), t("y")]
      }

      function ai(t) {
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

      function si(t) {
        return void 0 === t || 1 === t
      }

      function ui(t) {
        var e = t.scale,
          n = t.scaleX,
          r = t.scaleY;
        return !si(e) || !si(n) || !si(r)
      }

      function li(t) {
        return ui(t) || ci(t.x) || ci(t.y) || t.z || t.rotate || t.rotateX || t.rotateY
      }

      function ci(t) {
        return t && "0%" !== t
      }

      function fi(t, e, n) {
        return n + e * (t - n)
      }

      function di(t, e, n, r, o) {
        return void 0 !== o && (t = fi(t, o, r)), fi(t, n, r) + e
      }

      function pi(t, e, n, r, o) {
        void 0 === e && (e = 0), void 0 === n && (n = 1), t.min = di(t.min, e, n, r, o), t.max = di(t.max, e, n, r, o)
      }

      function vi(t, e) {
        var n = e.x,
          r = e.y;
        pi(t.x, n.translate, n.scale, n.originPoint), pi(t.y, r.translate, r.scale, r.originPoint)
      }

      function hi(t, e) {
        t.min = t.min + e, t.max = t.max + e
      }

      function mi(t, e, n) {
        var o = (0, r.__read)(n, 3),
          i = o[0],
          a = o[1],
          s = o[2],
          u = void 0 !== e[s] ? e[s] : .5,
          l = an(t.min, t.max, u);
        pi(t, e[i], e[a], l, e.scale)
      }
      var gi = ["x", "scaleX", "originX"],
        yi = ["y", "scaleY", "originY"];

      function xi(t, e) {
        mi(t.x, e, gi), mi(t.y, e, yi)
      }

      function _i(t, e) {
        return ai(function(t, e) {
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
      var bi = new WeakMap,
        Ei = function() {
          function t(t) {
            this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
              x: 0,
              y: 0
            }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = oi(), this.visualElement = t
          }
          return t.prototype.start = function(t, e) {
            var n = this,
              r = (void 0 === e ? {} : e).snapToCursor,
              o = void 0 !== r && r;
            !1 !== this.visualElement.isPresent && (this.panSession = new Bo(t, {
              onSessionStart: function(t) {
                n.stopAnimation(), o && n.snapToCursor(ue(t, "page").point)
              },
              onStart: function(t, e) {
                var r, o = n.getProps(),
                  i = o.drag,
                  a = o.dragPropagation,
                  s = o.onDragStart;
                (!i || a || (n.openGlobalLock && n.openGlobalLock(), n.openGlobalLock = be(i), n.openGlobalLock)) && (n.isDragging = !0, n.currentDirection = null, n.resolveConstraints(), n.visualElement.projection && (n.visualElement.projection.isAnimationBlocked = !0, n.visualElement.projection.target = void 0), ii((function(t) {
                  var e, r, o = n.getAxisMotionValue(t).get() || 0;
                  if (ct.test(o)) {
                    var i = null === (r = null === (e = n.visualElement.projection) || void 0 === e ? void 0 : e.layout) || void 0 === r ? void 0 : r.actual[t];
                    i && (o = Xo(i) * (parseFloat(o) / 100))
                  }
                  n.originPoint[t] = o
                })), null == s || s(t, e), null === (r = n.visualElement.animationState) || void 0 === r || r.setActive(Kt.Drag, !0))
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
            this.isDragging = !1, this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !1), null === (t = this.panSession) || void 0 === t || t.end(), this.panSession = void 0, !this.getProps().dragPropagation && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), null === (e = this.visualElement.animationState) || void 0 === e || e.setActive(Kt.Drag, !1)
          }, t.prototype.updateAxis = function(t, e, n) {
            var r = this.getProps().drag;
            if (n && wi(t, r, this.currentDirection)) {
              var o = this.getAxisMotionValue(t),
                i = this.originPoint[t] + n[t];
              this.constraints && this.constraints[t] && (i = function(t, e, n) {
                var r = e.min,
                  o = e.max;
                return void 0 !== r && t < r ? t = n ? an(r, t, n.min) : Math.max(t, r) : void 0 !== o && t > o && (t = n ? an(o, t, n.max) : Math.min(t, o)), t
              }(i, this.constraints[t], this.elastic[t])), o.set(i)
            }
          }, t.prototype.resolveConstraints = function() {
            var t = this,
              e = this.getProps(),
              n = e.dragConstraints,
              r = e.dragElastic,
              o = (this.visualElement.projection || {}).layout,
              i = this.constraints;
            n && S(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : this.constraints = !(!n || !o) && function(t, e) {
              var n = e.top,
                r = e.left,
                o = e.bottom,
                i = e.right;
              return {
                x: Qo(t.x, r, i),
                y: Qo(t.y, n, o)
              }
            }(o.actual, n), this.elastic = function(t) {
              return void 0 === t && (t = ei), !1 === t ? t = 0 : !0 === t && (t = ei), {
                x: ni(t, "left", "right"),
                y: ni(t, "top", "bottom")
              }
            }(r), i !== this.constraints && o && this.constraints && !this.hasMutatedConstraints && ii((function(e) {
              t.getAxisMotionValue(e) && (t.constraints[e] = function(t, e) {
                var n = {};
                return void 0 !== e.min && (n.min = e.min - t.min), void 0 !== e.max && (n.max = e.max - t.min), n
              }(o.actual[e], t.constraints[e]))
            }))
          }, t.prototype.resolveRefConstraints = function() {
            var t = this.getProps(),
              e = t.dragConstraints,
              n = t.onMeasureDragConstraints;
            if (!e || !S(e)) return !1;
            var r = e.current;
            (0, c.V)(null !== r, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
            var o = this.visualElement.projection;
            if (!o || !o.layout) return !1;
            var i = function(t, e, n) {
                var r = _i(t, n),
                  o = e.scroll;
                return o && (hi(r.x, o.x), hi(r.y, o.y)), r
              }(r, o.root, this.visualElement.getTransformPagePoint()),
              a = function(t, e) {
                return {
                  x: ti(t.x, e.x),
                  y: ti(t.y, e.y)
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
              this.hasMutatedConstraints = !!s, s && (a = ai(s))
            }
            return a
          }, t.prototype.startAnimation = function(t) {
            var e = this,
              n = this.getProps(),
              o = n.drag,
              i = n.dragMomentum,
              a = n.dragElastic,
              s = n.dragTransition,
              u = n.dragSnapToOrigin,
              l = n.onDragTransitionEnd,
              c = this.constraints || {},
              f = ii((function(n) {
                var l;
                if (wi(n, o, e.currentDirection)) {
                  var f = null !== (l = null == c ? void 0 : c[n]) && void 0 !== l ? l : {};
                  u && (f = {
                    min: 0,
                    max: 0
                  });
                  var d = a ? 200 : 1e6,
                    p = a ? 40 : 1e7,
                    v = (0, r.__assign)((0, r.__assign)({
                      type: "inertia",
                      velocity: i ? t[n] : 0,
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
            return io(t, this.getAxisMotionValue(t), 0, e)
          }, t.prototype.stopAnimation = function() {
            var t = this;
            ii((function(e) {
              return t.getAxisMotionValue(e).stop()
            }))
          }, t.prototype.getAxisMotionValue = function(t) {
            var e, n, r = "_drag" + t.toUpperCase();
            return this.visualElement.getProps()[r] || this.visualElement.getValue(t, null !== (n = null === (e = this.visualElement.getProps().initial) || void 0 === e ? void 0 : e[t]) && void 0 !== n ? n : 0)
          }, t.prototype.snapToCursor = function(t) {
            var e = this;
            ii((function(n) {
              if (wi(n, e.getProps().drag, e.currentDirection)) {
                var r = e.visualElement.projection,
                  o = e.getAxisMotionValue(n);
                if (r && r.layout) {
                  var i = r.layout.actual[n],
                    a = i.min,
                    s = i.max;
                  o.set(t[n] - an(a, s, .5))
                }
              }
            }))
          }, t.prototype.scalePositionWithinConstraints = function() {
            var t, e = this,
              n = this.getProps(),
              r = n.drag,
              o = n.dragConstraints,
              i = this.visualElement.projection;
            if (S(o) && i && this.constraints) {
              this.stopAnimation();
              var a = {
                x: 0,
                y: 0
              };
              ii((function(t) {
                var n, r, o, i, s, u = e.getAxisMotionValue(t);
                if (u) {
                  var l = u.get();
                  a[t] = (n = {
                    min: l,
                    max: l
                  }, r = e.constraints[t], o = .5, i = Xo(n), (s = Xo(r)) > i ? o = on(r.min, r.max - i, n.min) : i > s && (o = on(n.min, n.max - s, r.min)), Ye(0, 1, o))
                }
              }));
              var s = this.visualElement.getProps().transformTemplate;
              this.visualElement.getInstance().style.transform = s ? s({}, "") : "none", null === (t = i.root) || void 0 === t || t.updateScroll(), i.updateLayout(), this.resolveConstraints(), ii((function(t) {
                if (wi(t, r, null)) {
                  var n = e.getAxisMotionValue(t),
                    o = e.constraints[t],
                    i = o.min,
                    s = o.max;
                  n.set(an(i, s, a[t]))
                }
              }))
            }
          }, t.prototype.addListeners = function() {
            var t, e = this;
            bi.set(this.visualElement, this);
            var n = me(this.visualElement.getInstance(), "pointerdown", (function(t) {
                var n = e.getProps(),
                  r = n.drag,
                  o = n.dragListener;
                r && (void 0 === o || o) && e.start(t)
              })),
              r = function() {
                S(e.getProps().dragConstraints) && (e.constraints = e.resolveRefConstraints())
              },
              o = this.visualElement.projection,
              i = o.addEventListener("measure", r);
            o && !o.layout && (null === (t = o.root) || void 0 === t || t.updateScroll(), o.updateLayout()), r();
            var a = ee(window, "resize", (function() {
              return e.scalePositionWithinConstraints()
            }));
            return o.addEventListener("didUpdate", (function(t) {
                var n = t.delta,
                  r = t.hasLayoutChanged;
                e.isDragging && r && (ii((function(t) {
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
              o = t.dragDirectionLock,
              i = void 0 !== o && o,
              a = t.dragPropagation,
              s = void 0 !== a && a,
              u = t.dragConstraints,
              l = void 0 !== u && u,
              c = t.dragElastic,
              f = void 0 === c ? ei : c,
              d = t.dragMomentum,
              p = void 0 === d || d;
            return (0, r.__assign)((0, r.__assign)({}, t), {
              drag: n,
              dragDirectionLock: i,
              dragPropagation: s,
              dragConstraints: l,
              dragElastic: f,
              dragMomentum: p
            })
          }, t
        }();

      function wi(t, e, n) {
        return !(!0 !== e && e !== t || null !== n && n !== t)
      }
      var Si = {
          pan: je((function(t) {
            var e = t.onPan,
              n = t.onPanStart,
              r = t.onPanEnd,
              i = t.onPanSessionStart,
              a = t.visualElement,
              s = e || n || r || i,
              u = (0, o.useRef)(null),
              l = (0, o.useContext)(v).transformPagePoint,
              c = {
                onSessionStart: i,
                onStart: n,
                onMove: e,
                onEnd: function(t, e) {
                  u.current = null, r && r(t, e)
                }
              };
            (0, o.useEffect)((function() {
              null !== u.current && u.current.updateHandlers(c)
            })), ge(a, "pointerdown", s && function(t) {
              u.current = new Bo(t, c, {
                transformPagePoint: l
              })
            }), Ae((function() {
              return u.current && u.current.end()
            }))
          })),
          drag: je((function(t) {
            var e = t.dragControls,
              n = t.visualElement,
              r = L((function() {
                return new Ei(n)
              }));
            (0, o.useEffect)((function() {
              return e && e.subscribe(r)
            }), [r, e]), (0, o.useEffect)((function() {
              return r.addListeners()
            }), [r])
          }))
        },
        Ai = ["LayoutMeasure", "BeforeLayoutMeasure", "LayoutUpdate", "ViewportBoxUpdate", "Update", "Render", "AnimationComplete", "LayoutAnimationComplete", "AnimationStart", "LayoutAnimationStart", "SetAxisTarget", "Unmount"],
        Pi = function(t) {
          var e = t.treeType,
            n = void 0 === e ? "" : e,
            o = t.build,
            i = t.getBaseTarget,
            a = t.makeTargetAnimatable,
            s = t.measureViewportBox,
            u = t.render,
            l = t.readValueFromInstance,
            c = t.removeValueFromRenderState,
            f = t.sortNodePosition,
            d = t.scrapeMotionValuesFromProps;
          return function(t, e) {
            var p = t.parent,
              v = t.props,
              h = t.presenceId,
              m = t.blockInitialAnimation,
              g = t.visualState,
              y = t.shouldReduceMotion;
            void 0 === e && (e = {});
            var x, _, b = !1,
              E = g.latestValues,
              w = g.renderState,
              S = function() {
                var t = Ai.map((function() {
                    return new co
                  })),
                  e = {},
                  n = {
                    clearAllListeners: function() {
                      return t.forEach((function(t) {
                        return t.clear()
                      }))
                    },
                    updatePropListeners: function(t) {
                      Ai.forEach((function(r) {
                        var o, i = "on" + r,
                          a = t[i];
                        null === (o = e[r]) || void 0 === o || o.call(e), a && (e[r] = n[i](a))
                      }))
                    }
                  };
                return t.forEach((function(t, e) {
                  n["on" + Ai[e]] = function(e) {
                    return t.add(e)
                  }, n["notify" + Ai[e]] = function() {
                    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                    return t.notify.apply(t, (0, r.__spreadArray)([], (0, r.__read)(e), !1))
                  }
                })), n
              }(),
              A = new Map,
              V = new Map,
              T = {},
              R = (0, r.__assign)({}, E);

            function L() {
              x && b && (k(), u(x, w, v.style, N.projection))
            }

            function k() {
              o(N, w, E, e, v)
            }

            function D() {
              S.notifyUpdate(E)
            }

            function O(t, e) {
              var n = e.onChange((function(e) {
                  E[t] = e, v.onUpdate && wr.update(D, !1, !0)
                })),
                r = e.onRenderRequest(N.scheduleRender);
              V.set(t, (function() {
                n(), r()
              }))
            }
            var I = d(v);
            for (var j in I) {
              var F = I[j];
              void 0 !== E[j] && J(F) && F.set(E[j], !1)
            }
            var B = C(v),
              U = M(v),
              N = (0, r.__assign)((0, r.__assign)({
                treeType: n,
                current: null,
                depth: p ? p.depth + 1 : 0,
                parent: p,
                children: new Set,
                presenceId: h,
                shouldReduceMotion: y,
                variantChildren: U ? new Set : void 0,
                isVisible: void 0,
                manuallyAnimateOnMount: Boolean(null == p ? void 0 : p.isMounted()),
                blockInitialAnimation: m,
                isMounted: function() {
                  return Boolean(x)
                },
                mount: function(t) {
                  b = !0, x = N.current = t, N.projection && N.projection.mount(t), U && p && !B && (_ = null == p ? void 0 : p.addVariantChild(N)), A.forEach((function(t, e) {
                    return O(e, t)
                  })), null == p || p.children.add(N), N.setProps(v)
                },
                unmount: function() {
                  var t;
                  null === (t = N.projection) || void 0 === t || t.unmount(), gr.update(D), gr.render(L), V.forEach((function(t) {
                    return t()
                  })), null == _ || _(), null == p || p.children.delete(N), S.clearAllListeners(), x = void 0, b = !1
                },
                addVariantChild: function(t) {
                  var e, n = N.getClosestVariantNode();
                  if (n) return null === (e = n.variantChildren) || void 0 === e || e.add(t),
                    function() {
                      return n.variantChildren.delete(t)
                    }
                },
                sortNodePosition: function(t) {
                  return f && n === t.treeType ? f(N.getInstance(), t.getInstance()) : 0
                },
                getClosestVariantNode: function() {
                  return U ? N : null == p ? void 0 : p.getClosestVariantNode()
                },
                getLayoutId: function() {
                  return v.layoutId
                },
                getInstance: function() {
                  return x
                },
                getStaticValue: function(t) {
                  return E[t]
                },
                setStaticValue: function(t, e) {
                  return E[t] = e
                },
                getLatestValues: function() {
                  return E
                },
                setVisibility: function(t) {
                  N.isVisible !== t && (N.isVisible = t, N.scheduleRender())
                },
                makeTargetAnimatable: function(t, e) {
                  return void 0 === e && (e = !0), a(N, t, v, e)
                },
                measureViewportBox: function() {
                  return s(x, v)
                },
                addValue: function(t, e) {
                  N.hasValue(t) && N.removeValue(t), A.set(t, e), E[t] = e.get(), O(t, e)
                },
                removeValue: function(t) {
                  var e;
                  A.delete(t), null === (e = V.get(t)) || void 0 === e || e(), V.delete(t), delete E[t], c(t, w)
                },
                hasValue: function(t) {
                  return A.has(t)
                },
                getValue: function(t, e) {
                  var n = A.get(t);
                  return void 0 === n && void 0 !== e && (n = po(e), N.addValue(t, n)), n
                },
                forEachValue: function(t) {
                  return A.forEach(t)
                },
                readValue: function(t) {
                  var n;
                  return null !== (n = E[t]) && void 0 !== n ? n : l(x, t, e)
                },
                setBaseTarget: function(t, e) {
                  R[t] = e
                },
                getBaseTarget: function(t) {
                  if (i) {
                    var e = i(v, t);
                    if (void 0 !== e && !J(e)) return e
                  }
                  return R[t]
                }
              }, S), {
                build: function() {
                  return k(), w
                },
                scheduleRender: function() {
                  wr.render(L, !1, !0)
                },
                syncRender: L,
                setProps: function(t) {
                  (t.transformTemplate || v.transformTemplate) && N.scheduleRender(), v = t, S.updatePropListeners(t), T = function(t, e, n) {
                    var r;
                    for (var o in e) {
                      var i = e[o],
                        a = n[o];
                      if (J(i)) t.addValue(o, i);
                      else if (J(a)) t.addValue(o, po(i));
                      else if (a !== i)
                        if (t.hasValue(o)) {
                          var s = t.getValue(o);
                          !s.hasAnimated && s.set(i)
                        } else t.addValue(o, po(null !== (r = t.getStaticValue(o)) && void 0 !== r ? r : i))
                    }
                    for (var o in n) void 0 === e[o] && t.removeValue(o);
                    return e
                  }(N, d(v), T)
                },
                getProps: function() {
                  return v
                },
                getVariant: function(t) {
                  var e;
                  return null === (e = v.variants) || void 0 === e ? void 0 : e[t]
                },
                getDefaultTransition: function() {
                  return v.transition
                },
                getTransformPagePoint: function() {
                  return v.transformPagePoint
                },
                getVariantContext: function(t) {
                  if (void 0 === t && (t = !1), t) return null == p ? void 0 : p.getVariantContext();
                  if (!B) {
                    var e = (null == p ? void 0 : p.getVariantContext()) || {};
                    return void 0 !== v.initial && (e.initial = v.initial), e
                  }
                  for (var n = {}, r = 0; r < Ti; r++) {
                    var o = Vi[r],
                      i = v[o];
                    (P(i) || !1 === i) && (n[o] = i)
                  }
                  return n
                }
              });
            return N
          }
        },
        Vi = (0, r.__spreadArray)(["initial"], (0, r.__read)(Mo), !1),
        Ti = Vi.length;

      function Ci(t) {
        return "string" == typeof t && t.startsWith("var(--")
      }
      var Mi = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;

      function Ri(t, e, n) {
        void 0 === n && (n = 1), (0, c.V)(n <= 4, 'Max CSS variable fallback depth detected in property "'.concat(t, '". This may indicate a circular fallback dependency.'));
        var o = (0, r.__read)(function(t) {
            var e = Mi.exec(t);
            if (!e) return [, ];
            var n = (0, r.__read)(e, 3);
            return [n[1], n[2]]
          }(t), 2),
          i = o[0],
          a = o[1];
        if (i) {
          var s = window.getComputedStyle(e).getPropertyValue(i);
          return s ? s.trim() : Ci(a) ? Ri(a, e, n + 1) : a
        }
      }
      var Li, ki = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y"]),
        Di = function(t) {
          return ki.has(t)
        },
        Oi = function(t, e) {
          t.set(e, !1), t.set(e)
        },
        Ii = function(t) {
          return t === ht || t === ft
        };
      ! function(t) {
        t.width = "width", t.height = "height", t.left = "left", t.right = "right", t.top = "top", t.bottom = "bottom"
      }(Li || (Li = {}));
      var ji = function(t, e) {
          return parseFloat(t.split(", ")[e])
        },
        Fi = function(t, e) {
          return function(n, r) {
            var o = r.transform;
            if ("none" === o || !o) return 0;
            var i = o.match(/^matrix3d\((.+)\)$/);
            if (i) return ji(i[1], e);
            var a = o.match(/^matrix\((.+)\)$/);
            return a ? ji(a[1], t) : 0
          }
        },
        Bi = new Set(["x", "y", "z"]),
        Ui = Y.filter((function(t) {
          return !Bi.has(t)
        })),
        Ni = {
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
          x: Fi(4, 13),
          y: Fi(5, 14)
        };

      function zi(t, e, n, o) {
        return function(t) {
          return Object.keys(t).some(Di)
        }(e) ? function(t, e, n, o) {
          void 0 === n && (n = {}), void 0 === o && (o = {}), e = (0, r.__assign)({}, e), o = (0, r.__assign)({}, o);
          var i = Object.keys(e).filter(Di),
            a = [],
            s = !1,
            u = [];
          if (i.forEach((function(r) {
              var i = t.getValue(r);
              if (t.hasValue(r)) {
                var l, f = n[r],
                  d = mo(f),
                  p = e[r];
                if (Ht(p)) {
                  var v = p.length,
                    h = null === p[0] ? 1 : 0;
                  f = p[h], d = mo(f);
                  for (var m = h; m < v; m++) l ? (0, c.V)(mo(p[m]) === l, "All keyframes must be of the same type") : (l = mo(p[m]), (0, c.V)(l === d || Ii(d) && Ii(l), "Keyframes must be of the same dimension as the current value"))
                } else l = mo(p);
                if (d !== l)
                  if (Ii(d) && Ii(l)) {
                    var g = i.get();
                    "string" == typeof g && i.set(parseFloat(g)), "string" == typeof p ? e[r] = parseFloat(p) : Array.isArray(p) && l === ft && (e[r] = p.map(parseFloat))
                  } else(null == d ? void 0 : d.transform) && (null == l ? void 0 : l.transform) && (0 === f || 0 === p) ? 0 === f ? i.set(l.transform(f)) : e[r] = d.transform(p) : (s || (a = function(t) {
                    var e = [];
                    return Ui.forEach((function(n) {
                      var r = t.getValue(n);
                      void 0 !== r && (e.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0))
                    })), e.length && t.syncRender(), e
                  }(t), s = !0), u.push(r), o[r] = void 0 !== o[r] ? o[r] : e[r], Oi(i, p))
              }
            })), u.length) {
            var l = u.indexOf("height") >= 0 ? window.pageYOffset : null,
              f = function(t, e, n) {
                var r = e.measureViewportBox(),
                  o = e.getInstance(),
                  i = getComputedStyle(o),
                  a = i.display,
                  s = {};
                "none" === a && e.setStaticValue("display", t.display || "block"), n.forEach((function(t) {
                  s[t] = Ni[t](r, i)
                })), e.syncRender();
                var u = e.measureViewportBox();
                return n.forEach((function(n) {
                  var r = e.getValue(n);
                  Oi(r, s[n]), t[n] = Ni[n](u, i)
                })), t
              }(e, t, u);
            return a.length && a.forEach((function(e) {
              var n = (0, r.__read)(e, 2),
                o = n[0],
                i = n[1];
              t.getValue(o).set(i)
            })), t.syncRender(), null !== l && window.scrollTo({
              top: l
            }), {
              target: f,
              transitionEnd: o
            }
          }
          return {
            target: e,
            transitionEnd: o
          }
        }(t, e, n, o) : {
          target: e,
          transitionEnd: o
        }
      }
      var Wi = {
          treeType: "dom",
          readValueFromInstance: function(t, e) {
            if ($(e)) {
              var n = Kr(e);
              return n && n.default || 0
            }
            var r, o = (r = t, window.getComputedStyle(r));
            return (tt(e) ? o.getPropertyValue(e) : o[e]) || 0
          },
          sortNodePosition: function(t, e) {
            return 2 & t.compareDocumentPosition(e) ? 1 : -1
          },
          getBaseTarget: function(t, e) {
            var n;
            return null === (n = t.style) || void 0 === n ? void 0 : n[e]
          },
          measureViewportBox: function(t, e) {
            return _i(t, e.transformPagePoint)
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
          makeTargetAnimatable: function(t, e, n, o) {
            var i = n.transformValues;
            void 0 === o && (o = !0);
            var a = e.transition,
              s = e.transitionEnd,
              u = (0, r.__rest)(e, ["transition", "transitionEnd"]),
              l = So(u, a || {}, t);
            if (i && (s && (s = i(s)), u && (u = i(u)), l && (l = i(l))), o) {
              Eo(t, u, l);
              var c = function(t, e, n, o) {
                var i = function(t, e, n) {
                  var o, i = (0, r.__rest)(e, []),
                    a = t.getInstance();
                  if (!(a instanceof Element)) return {
                    target: i,
                    transitionEnd: n
                  };
                  for (var s in n && (n = (0, r.__assign)({}, n)), t.forEachValue((function(t) {
                      var e = t.get();
                      if (Ci(e)) {
                        var n = Ri(e, a);
                        n && t.set(n)
                      }
                    })), i) {
                    var u = i[s];
                    if (Ci(u)) {
                      var l = Ri(u, a);
                      l && (i[s] = l, n && (null !== (o = n[s]) && void 0 !== o || (n[s] = u)))
                    }
                  }
                  return {
                    target: i,
                    transitionEnd: n
                  }
                }(t, e, o);
                return zi(t, e = i.target, n, o = i.transitionEnd)
              }(t, u, l, s);
              s = c.transitionEnd, u = c.target
            }
            return (0, r.__assign)({
              transition: a,
              transitionEnd: s
            }, u)
          },
          scrapeMotionValuesFromProps: Nt,
          build: function(t, e, n, r, o) {
            void 0 !== t.isVisible && (e.style.visibility = t.isVisible ? "visible" : "hidden"), _t(e, n, r, o.transformTemplate)
          },
          render: Ft
        },
        Hi = Pi(Wi),
        Yi = Pi((0, r.__assign)((0, r.__assign)({}, Wi), {
          getBaseTarget: function(t, e) {
            return t[e]
          },
          readValueFromInstance: function(t, e) {
            var n;
            return $(e) ? (null === (n = Kr(e)) || void 0 === n ? void 0 : n.default) || 0 : (e = Bt.has(e) ? e : jt(e), t.getAttribute(e))
          },
          scrapeMotionValuesFromProps: zt,
          build: function(t, e, n, r, o) {
            Lt(e, n, r, o.transformTemplate)
          },
          render: Ut
        })),
        Xi = function(t, e) {
          return N(t) ? Yi(e, {
            enableHardwareAcceleration: !1
          }) : Hi(e, {
            enableHardwareAcceleration: !0
          })
        };

      function Gi(t, e) {
        return e.max === e.min ? 0 : t / (e.max - e.min) * 100
      }
      var $i = {
          correct: function(t, e) {
            if (!e.target) return t;
            if ("string" == typeof t) {
              if (!ft.test(t)) return t;
              t = parseFloat(t)
            }
            var n = Gi(t, e.target.x),
              r = Gi(t, e.target.y);
            return "".concat(n, "% ").concat(r, "%")
          }
        },
        qi = "_$css",
        Zi = {
          correct: function(t, e) {
            var n = e.treeScale,
              r = e.projectionDelta,
              o = t,
              i = t.includes("var("),
              a = [];
            i && (t = t.replace(Mi, (function(t) {
              return a.push(t), qi
            })));
            var s = Tn.parse(t);
            if (s.length > 5) return o;
            var u = Tn.createTransformer(t),
              l = "number" != typeof s[0] ? 1 : 0,
              c = r.x.scale * n.x,
              f = r.y.scale * n.y;
            s[0 + l] /= c, s[1 + l] /= f;
            var d = an(c, f, .5);
            "number" == typeof s[2 + l] && (s[2 + l] /= d), "number" == typeof s[3 + l] && (s[3 + l] /= d);
            var p = u(s);
            if (i) {
              var v = 0;
              p = p.replace(qi, (function() {
                var t = a[v];
                return v++, t
              }))
            }
            return p
          }
        },
        Ki = function(t) {
          function e() {
            return null !== t && t.apply(this, arguments) || this
          }
          return (0, r.__extends)(e, t), e.prototype.componentDidMount = function() {
            var t = this,
              e = this.props,
              n = e.visualElement,
              o = e.layoutGroup,
              i = e.switchLayoutGroup,
              a = e.layoutId,
              s = n.projection;
            W(Ji), s && ((null == o ? void 0 : o.group) && o.group.add(s), (null == i ? void 0 : i.register) && a && i.register(s), s.root.didUpdate(), s.addEventListener("animationComplete", (function() {
              t.safeToRemove()
            })), s.setOptions((0, r.__assign)((0, r.__assign)({}, s.options), {
              onExitComplete: function() {
                return t.safeToRemove()
              }
            }))), k.hasEverUpdated = !0
          }, e.prototype.getSnapshotBeforeUpdate = function(t) {
            var e = this,
              n = this.props,
              r = n.layoutDependency,
              o = n.visualElement,
              i = n.drag,
              a = n.isPresent,
              s = o.projection;
            return s ? (s.isPresent = a, i || t.layoutDependency !== r || void 0 === r ? s.willUpdate() : this.safeToRemove(), t.isPresent !== a && (a ? s.promote() : s.relegate() || wr.postRender((function() {
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
        }(o.Component),
        Ji = {
          borderRadius: (0, r.__assign)((0, r.__assign)({}, $i), {
            applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
          }),
          borderTopLeftRadius: $i,
          borderTopRightRadius: $i,
          borderBottomLeftRadius: $i,
          borderBottomRightRadius: $i,
          boxShadow: Zi
        },
        Qi = {
          measureLayout: function(t) {
            var e = (0, r.__read)(ze(), 2),
              n = e[0],
              i = e[1],
              a = (0, o.useContext)(O);
            return o.createElement(Ki, (0, r.__assign)({}, t, {
              layoutGroup: a,
              switchLayoutGroup: (0, o.useContext)(I),
              isPresent: n,
              safeToRemove: i
            }))
          }
        };

      function ta(t, e, n) {
        void 0 === n && (n = {});
        var r = J(t) ? t : po(t);
        return io("", r, e, n), {
          stop: function() {
            return r.stop()
          },
          isAnimating: function() {
            return r.isAnimating()
          }
        }
      }
      var ea = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        na = ea.length,
        ra = function(t) {
          return "string" == typeof t ? parseFloat(t) : t
        },
        oa = function(t) {
          return "number" == typeof t || ft.test(t)
        };

      function ia(t, e) {
        var n;
        return null !== (n = t[e]) && void 0 !== n ? n : t.borderRadius
      }
      var aa = ua(0, .5, Gn),
        sa = ua(.5, .95, zn);

      function ua(t, e, n) {
        return function(r) {
          return r < t ? 0 : r > e ? 1 : n(on(t, e, r))
        }
      }

      function la(t, e) {
        t.min = e.min, t.max = e.max
      }

      function ca(t, e) {
        la(t.x, e.x), la(t.y, e.y)
      }

      function fa(t, e, n, r, o) {
        return t = fi(t -= e, 1 / n, r), void 0 !== o && (t = fi(t, 1 / o, r)), t
      }

      function da(t, e, n, o, i) {
        var a = (0, r.__read)(n, 3),
          s = a[0],
          u = a[1],
          l = a[2];
        ! function(t, e, n, r, o, i, a) {
          if (void 0 === e && (e = 0), void 0 === n && (n = 1), void 0 === r && (r = .5), void 0 === i && (i = t), void 0 === a && (a = t), ct.test(e) && (e = parseFloat(e), e = an(a.min, a.max, e / 100) - a.min), "number" == typeof e) {
            var s = an(i.min, i.max, r);
            t === i && (s -= e), t.min = fa(t.min, e, n, s, o), t.max = fa(t.max, e, n, s, o)
          }
        }(t, e[s], e[u], e[l], e.scale, o, i)
      }
      var pa = ["x", "scaleX", "originX"],
        va = ["y", "scaleY", "originY"];

      function ha(t, e, n, r) {
        da(t.x, e, pa, null == n ? void 0 : n.x, null == r ? void 0 : r.x), da(t.y, e, va, null == n ? void 0 : n.y, null == r ? void 0 : r.y)
      }

      function ma(t) {
        return 0 === t.translate && 1 === t.scale
      }

      function ga(t) {
        return ma(t.x) && ma(t.y)
      }

      function ya(t, e) {
        return t.x.min === e.x.min && t.x.max === e.x.max && t.y.min === e.y.min && t.y.max === e.y.max
      }
      var xa = function() {
        function t() {
          this.members = []
        }
        return t.prototype.add = function(t) {
          uo(this.members, t), t.scheduleRender()
        }, t.prototype.remove = function(t) {
          if (lo(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
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
      }();

      function _a(t, e, n) {
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
        return "translate3d(0px, 0px, 0) scale(1, 1) scale(1, 1)" === (i += "scale(".concat(l, ", ").concat(c, ")")) ? "none" : i
      }
      var ba = function(t, e) {
          return t.depth - e.depth
        },
        Ea = function() {
          function t() {
            this.children = [], this.isDirty = !1
          }
          return t.prototype.add = function(t) {
            uo(this.children, t), this.isDirty = !0
          }, t.prototype.remove = function(t) {
            lo(this.children, t), this.isDirty = !0
          }, t.prototype.forEach = function(t) {
            this.isDirty && this.children.sort(ba), this.isDirty = !1, this.children.forEach(t)
          }, t
        }();

      function wa(t) {
        var e = t.attachResizeListener,
          n = t.defaultParent,
          o = t.measureScroll,
          i = t.checkIsScrollRoot,
          a = t.resetTransform;
        return function() {
          function t(t, e, o) {
            var i = this;
            void 0 === e && (e = {}), void 0 === o && (o = null == n ? void 0 : n()), this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = {
              x: 1,
              y: 1
            }, this.eventHandlers = new Map, this.potentialNodes = new Map, this.checkUpdateFailed = function() {
              i.isUpdating && (i.isUpdating = !1, i.clearAllSnapshots())
            }, this.updateProjection = function() {
              i.nodes.forEach(Ma), i.nodes.forEach(Ra)
            }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.id = t, this.latestValues = e, this.root = o ? o.root || o : this, this.path = o ? (0, r.__spreadArray)((0, r.__spreadArray)([], (0, r.__read)(o.path), !1), [o], !1) : [], this.parent = o, this.depth = o ? o.depth + 1 : 0, t && this.root.registerPotentialNode(t, this);
            for (var a = 0; a < this.path.length; a++) this.path[a].shouldResetTransform = !0;
            this.root === this && (this.nodes = new Ea)
          }
          return t.prototype.addEventListener = function(t, e) {
            return this.eventHandlers.has(t) || this.eventHandlers.set(t, new co), this.eventHandlers.get(t).add(e)
          }, t.prototype.notifyListeners = function(t) {
            for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
            var o = this.eventHandlers.get(t);
            null == o || o.notify.apply(o, (0, r.__spreadArray)([], (0, r.__read)(e), !1))
          }, t.prototype.hasListeners = function(t) {
            return this.eventHandlers.has(t)
          }, t.prototype.registerPotentialNode = function(t, e) {
            this.potentialNodes.set(t, e)
          }, t.prototype.mount = function(t, n) {
            var o, i = this;
            if (void 0 === n && (n = !1), !this.instance) {
              this.isSVG = t instanceof SVGElement && "svg" !== t.tagName, this.instance = t;
              var a = this.options,
                s = a.layoutId,
                u = a.layout,
                l = a.visualElement;
              if (l && !l.getInstance() && l.mount(t), this.root.nodes.add(this), null === (o = this.parent) || void 0 === o || o.children.add(this), this.id && this.root.potentialNodes.delete(this.id), n && (u || s) && (this.isLayoutDirty = !0), e) {
                var c, f = function() {
                  return i.root.updateBlockedByResize = !1
                };
                e(t, (function() {
                  i.root.updateBlockedByResize = !0, clearTimeout(c), c = window.setTimeout(f, 250), k.hasAnimatedSinceResize && (k.hasAnimatedSinceResize = !1, i.nodes.forEach(Ca))
                }))
              }
              s && this.root.registerSharedNode(s, this), !1 !== this.options.animate && l && (s || u) && this.addEventListener("didUpdate", (function(t) {
                var e, n, o, a, s, u = t.delta,
                  c = t.hasLayoutChanged,
                  f = t.hasRelativeTargetChanged,
                  d = t.layout;
                if (i.isTreeAnimationBlocked()) return i.target = void 0, void(i.relativeTarget = void 0);
                var p = null !== (n = null !== (e = i.options.transition) && void 0 !== e ? e : l.getDefaultTransition()) && void 0 !== n ? n : ja,
                  v = l.getProps(),
                  h = v.onLayoutAnimationStart,
                  m = v.onLayoutAnimationComplete,
                  g = !i.targetLayout || !ya(i.targetLayout, d) || f,
                  y = !c && f;
                if ((null === (o = i.resumeFrom) || void 0 === o ? void 0 : o.instance) || y || c && (g || !i.currentAnimation)) {
                  i.resumeFrom && (i.resumingFrom = i.resumeFrom, i.resumingFrom.resumingFrom = void 0), i.setAnimationOrigin(u, y);
                  var x = (0, r.__assign)((0, r.__assign)({}, oo(p, "layout")), {
                    onPlay: h,
                    onComplete: m
                  });
                  l.shouldReduceMotion && (x.delay = 0, x.type = !1), i.startAnimation(x)
                } else c || 0 !== i.animationProgress || i.finishAnimation(), i.isLead() && (null === (s = (a = i.options).onExitComplete) || void 0 === s || s.call(a));
                i.targetLayout = d
              }))
            }
          }, t.prototype.unmount = function() {
            var t, e;
            this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this), null === (t = this.getStack()) || void 0 === t || t.remove(this), null === (e = this.parent) || void 0 === e || e.children.delete(this), this.instance = void 0, gr.preRender(this.updateProjection)
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
            this.isUpdateBlocked() || (this.isUpdating = !0, null === (t = this.nodes) || void 0 === t || t.forEach(La))
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
            if (this.isUpdateBlocked()) return this.unblockUpdate(), this.clearAllSnapshots(), void this.nodes.forEach(Va);
            this.isUpdating && (this.isUpdating = !1, this.potentialNodes.size && (this.potentialNodes.forEach(Fa), this.potentialNodes.clear()), this.nodes.forEach(Ta), this.nodes.forEach(Sa), this.nodes.forEach(Aa), this.clearAllSnapshots(), yr.update(), yr.preRender(), yr.render())
          }, t.prototype.clearAllSnapshots = function() {
            this.nodes.forEach(Pa), this.sharedNodes.forEach(ka)
          }, t.prototype.scheduleUpdateProjection = function() {
            wr.preRender(this.updateProjection, !1, !0)
          }, t.prototype.scheduleCheckAfterUnmount = function() {
            var t = this;
            wr.postRender((function() {
              t.isLayoutDirty ? t.root.didUpdate() : t.root.checkUpdateFailed()
            }))
          }, t.prototype.updateSnapshot = function() {
            if (!this.snapshot && this.instance) {
              var t = this.measure(),
                e = this.removeTransform(this.removeElementScroll(t));
              Ua(e), this.snapshot = {
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
              Ua(n);
              var r = this.layout;
              this.layout = {
                measured: n,
                actual: this.removeElementScroll(n)
              }, this.layoutCorrected = oi(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.actual), null === (t = this.options.visualElement) || void 0 === t || t.notifyLayoutMeasure(this.layout.actual, null == r ? void 0 : r.actual)
            }
          }, t.prototype.updateScroll = function() {
            this.options.layoutScroll && this.instance && (this.isScrollRoot = i(this.instance), this.scroll = o(this.instance))
          }, t.prototype.resetTransform = function() {
            var t;
            if (a) {
              var e = this.isLayoutDirty || this.shouldResetTransform,
                n = this.projectionDelta && !ga(this.projectionDelta),
                r = null === (t = this.options.visualElement) || void 0 === t ? void 0 : t.getProps().transformTemplate,
                o = null == r ? void 0 : r(this.latestValues, ""),
                i = o !== this.prevTransformTemplateValue;
              e && (n || li(this.latestValues) || i) && (a(this.instance, o), this.shouldResetTransform = !1, this.scheduleRender())
            }
          }, t.prototype.measure = function() {
            var t = this.options.visualElement;
            if (!t) return oi();
            var e = t.measureViewportBox(),
              n = this.root.scroll;
            return n && (hi(e.x, n.x), hi(e.y, n.y)), e
          }, t.prototype.removeElementScroll = function(t) {
            var e = oi();
            ca(e, t);
            for (var n = 0; n < this.path.length; n++) {
              var r = this.path[n],
                o = r.scroll,
                i = r.options,
                a = r.isScrollRoot;
              if (r !== this.root && o && i.layoutScroll) {
                if (a) {
                  ca(e, t);
                  var s = this.root.scroll;
                  s && (hi(e.x, -s.x), hi(e.y, -s.y))
                }
                hi(e.x, o.x), hi(e.y, o.y)
              }
            }
            return e
          }, t.prototype.applyTransform = function(t, e) {
            void 0 === e && (e = !1);
            var n = oi();
            ca(n, t);
            for (var r = 0; r < this.path.length; r++) {
              var o = this.path[r];
              !e && o.options.layoutScroll && o.scroll && o !== o.root && xi(n, {
                x: -o.scroll.x,
                y: -o.scroll.y
              }), li(o.latestValues) && xi(n, o.latestValues)
            }
            return li(this.latestValues) && xi(n, this.latestValues), n
          }, t.prototype.removeTransform = function(t) {
            var e, n = oi();
            ca(n, t);
            for (var r = 0; r < this.path.length; r++) {
              var o = this.path[r];
              if (o.instance && li(o.latestValues)) {
                ui(o.latestValues) && o.updateSnapshot();
                var i = oi();
                ca(i, o.measure()), ha(n, o.latestValues, null === (e = o.snapshot) || void 0 === e ? void 0 : e.layout, i)
              }
            }
            return li(this.latestValues) && ha(n, this.latestValues), n
          }, t.prototype.setTargetDelta = function(t) {
            this.targetDelta = t, this.root.scheduleUpdateProjection()
          }, t.prototype.setOptions = function(t) {
            var e;
            this.options = (0, r.__assign)((0, r.__assign)((0, r.__assign)({}, this.options), t), {
              crossfade: null === (e = t.crossfade) || void 0 === e || e
            })
          }, t.prototype.clearMeasurements = function() {
            this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
          }, t.prototype.resolveTargetDelta = function() {
            var t, e, n, r, o = this.options,
              i = o.layout,
              a = o.layoutId;
            this.layout && (i || a) && (this.targetDelta || this.relativeTarget || (this.relativeParent = this.getClosestProjectingParent(), this.relativeParent && this.relativeParent.layout && (this.relativeTarget = oi(), this.relativeTargetOrigin = oi(), Jo(this.relativeTargetOrigin, this.layout.actual, this.relativeParent.layout.actual), ca(this.relativeTarget, this.relativeTargetOrigin))), (this.relativeTarget || this.targetDelta) && (this.target || (this.target = oi(), this.targetWithTransforms = oi()), this.relativeTarget && this.relativeTargetOrigin && (null === (t = this.relativeParent) || void 0 === t ? void 0 : t.target) ? (e = this.target, n = this.relativeTarget, r = this.relativeParent.target, Zo(e.x, n.x, r.x), Zo(e.y, n.y, r.y)) : this.targetDelta ? (Boolean(this.resumingFrom) ? this.target = this.applyTransform(this.layout.actual) : ca(this.target, this.layout.actual), vi(this.target, this.targetDelta)) : ca(this.target, this.layout.actual), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, this.relativeParent = this.getClosestProjectingParent(), this.relativeParent && Boolean(this.relativeParent.resumingFrom) === Boolean(this.resumingFrom) && !this.relativeParent.options.layoutScroll && this.relativeParent.target && (this.relativeTarget = oi(), this.relativeTargetOrigin = oi(), Jo(this.relativeTargetOrigin, this.target, this.relativeParent.target), ca(this.relativeTarget, this.relativeTargetOrigin)))))
          }, t.prototype.getClosestProjectingParent = function() {
            if (this.parent && !li(this.parent.latestValues)) return (this.parent.relativeTarget || this.parent.targetDelta) && this.parent.layout ? this.parent : this.parent.getClosestProjectingParent()
          }, t.prototype.calcProjection = function() {
            var t, e = this.options,
              n = e.layout,
              r = e.layoutId;
            if (this.isTreeAnimating = Boolean((null === (t = this.parent) || void 0 === t ? void 0 : t.isTreeAnimating) || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), this.layout && (n || r)) {
              var o = this.getLead();
              ca(this.layoutCorrected, this.layout.actual),
                function(t, e, n, r) {
                  var o, i;
                  void 0 === r && (r = !1);
                  var a = n.length;
                  if (a) {
                    var s, u;
                    e.x = e.y = 1;
                    for (var l = 0; l < a; l++) u = (s = n[l]).projectionDelta, "contents" !== (null === (i = null === (o = s.instance) || void 0 === o ? void 0 : o.style) || void 0 === i ? void 0 : i.display) && (r && s.options.layoutScroll && s.scroll && s !== s.root && xi(t, {
                      x: -s.scroll.x,
                      y: -s.scroll.y
                    }), u && (e.x *= u.x.scale, e.y *= u.y.scale, vi(t, u)), r && li(s.latestValues) && xi(t, s.latestValues))
                  }
                }(this.layoutCorrected, this.treeScale, this.path, Boolean(this.resumingFrom) || this !== o);
              var i = o.target;
              if (i) {
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
                var a = this.treeScale.x,
                  s = this.treeScale.y,
                  u = this.projectionTransform;
                qo(this.projectionDelta, this.layoutCorrected, i, this.latestValues), this.projectionTransform = _a(this.projectionDelta, this.treeScale), this.projectionTransform === u && this.treeScale.x === a && this.treeScale.y === s || (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", i))
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
            var n, o = this;
            void 0 === e && (e = !1);
            var i = this.snapshot,
              a = (null == i ? void 0 : i.latestValues) || {},
              s = (0, r.__assign)({}, this.latestValues),
              u = {
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
            var l = oi(),
              c = null == i ? void 0 : i.isShared,
              f = ((null === (n = this.getStack()) || void 0 === n ? void 0 : n.members.length) || 0) <= 1,
              d = Boolean(c && !f && !0 === this.options.crossfade && !this.path.some(Ia));
            this.animationProgress = 0, this.mixTargetDelta = function(e) {
              var n, r, i, p, v, h = e / 1e3;
              Da(u.x, t.x, h), Da(u.y, t.y, h), o.setTargetDelta(u), o.relativeTarget && o.relativeTargetOrigin && o.layout && (null === (n = o.relativeParent) || void 0 === n ? void 0 : n.layout) && (Jo(l, o.layout.actual, o.relativeParent.layout.actual), r = o.relativeTarget, i = o.relativeTargetOrigin, p = l, v = h, Oa(r.x, i.x, p.x, v), Oa(r.y, i.y, p.y, v)), c && (o.animationValues = s, function(t, e, n, r, o, i) {
                var a, s, u, l;
                o ? (t.opacity = an(0, null !== (a = n.opacity) && void 0 !== a ? a : 1, aa(r)), t.opacityExit = an(null !== (s = e.opacity) && void 0 !== s ? s : 1, 0, sa(r))) : i && (t.opacity = an(null !== (u = e.opacity) && void 0 !== u ? u : 1, null !== (l = n.opacity) && void 0 !== l ? l : 1, r));
                for (var c = 0; c < na; c++) {
                  var f = "border".concat(ea[c], "Radius"),
                    d = ia(e, f),
                    p = ia(n, f);
                  void 0 === d && void 0 === p || (d || (d = 0), p || (p = 0), 0 === d || 0 === p || oa(d) === oa(p) ? (t[f] = Math.max(an(ra(d), ra(p), r), 0), (ct.test(p) || ct.test(d)) && (t[f] += "%")) : t[f] = p)
                }(e.rotate || n.rotate) && (t.rotate = an(e.rotate || 0, n.rotate || 0, r))
              }(s, a, o.latestValues, h, d, f)), o.root.scheduleUpdateProjection(), o.scheduleRender(), o.animationProgress = h
            }, this.mixTargetDelta(0)
          }, t.prototype.startAnimation = function(t) {
            var e, n, o = this;
            this.notifyListeners("animationStart"), null === (e = this.currentAnimation) || void 0 === e || e.stop(), this.resumingFrom && (null === (n = this.resumingFrom.currentAnimation) || void 0 === n || n.stop()), this.pendingAnimation && (gr.update(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = wr.update((function() {
              k.hasAnimatedSinceResize = !0, o.currentAnimation = ta(0, 1e3, (0, r.__assign)((0, r.__assign)({}, t), {
                onUpdate: function(e) {
                  var n;
                  o.mixTargetDelta(e), null === (n = t.onUpdate) || void 0 === n || n.call(t, e)
                },
                onComplete: function() {
                  var e;
                  null === (e = t.onComplete) || void 0 === e || e.call(t), o.completeAnimation()
                }
              })), o.resumingFrom && (o.resumingFrom.currentAnimation = o.currentAnimation), o.pendingAnimation = void 0
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
            e && n && r && (ca(e, n), xi(e, o), qo(this.projectionDeltaWithTransform, this.layoutCorrected, e, o))
          }, t.prototype.registerSharedNode = function(t, e) {
            var n, r, o;
            this.sharedNodes.has(t) || this.sharedNodes.set(t, new xa), this.sharedNodes.get(t).add(e), e.promote({
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
              for (var e = !1, n = {}, r = 0; r < H.length; r++) {
                var o = "rotate" + H[r];
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
            if (this.needsReset) return this.needsReset = !1, s.opacity = "", s.pointerEvents = Gt(t.pointerEvents) || "", s.transform = u ? u(this.latestValues, "") : "none", s;
            var l = this.getLead();
            if (!this.projectionDelta || !this.layout || !l.target) {
              var c = {};
              return this.options.layoutId && (c.opacity = null !== (n = this.latestValues.opacity) && void 0 !== n ? n : 1, c.pointerEvents = Gt(t.pointerEvents) || ""), this.hasProjected && !li(this.latestValues) && (c.transform = u ? u({}, "") : "none", this.hasProjected = !1), c
            }
            var f = l.animationValues || l.latestValues;
            this.applyTransformsToTarget(), s.transform = _a(this.projectionDeltaWithTransform, this.treeScale, f), u && (s.transform = u(f, s.transform));
            var d = this.projectionDelta,
              p = d.x,
              v = d.y;
            for (var h in s.transformOrigin = "".concat(100 * p.origin, "% ").concat(100 * v.origin, "% 0"), l.animationValues ? s.opacity = l === this ? null !== (o = null !== (r = f.opacity) && void 0 !== r ? r : this.latestValues.opacity) && void 0 !== o ? o : 1 : this.preserveOpacity ? this.latestValues.opacity : f.opacityExit : s.opacity = l === this ? null !== (i = f.opacity) && void 0 !== i ? i : "" : null !== (a = f.opacityExit) && void 0 !== a ? a : 0, z)
              if (void 0 !== f[h]) {
                var m = z[h],
                  g = m.correct,
                  y = m.applyTo,
                  x = g(f[h], l);
                if (y)
                  for (var _ = y.length, b = 0; b < _; b++) s[y[b]] = x;
                else s[h] = x
              } return this.options.layoutId && (s.pointerEvents = l === this ? Gt(t.pointerEvents) || "" : "none"), s
          }, t.prototype.clearSnapshot = function() {
            this.resumeFrom = this.snapshot = void 0
          }, t.prototype.resetTree = function() {
            this.root.nodes.forEach((function(t) {
              var e;
              return null === (e = t.currentAnimation) || void 0 === e ? void 0 : e.stop()
            })), this.root.nodes.forEach(Va), this.root.sharedNodes.clear()
          }, t
        }()
      }

      function Sa(t) {
        t.updateLayout()
      }

      function Aa(t) {
        var e, n, r, o, i = null !== (n = null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) && void 0 !== n ? n : t.snapshot;
        if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
          var a = t.layout,
            s = a.actual,
            u = a.measured;
          "size" === t.options.animationType ? ii((function(t) {
            var e = i.isShared ? i.measured[t] : i.layout[t],
              n = Xo(e);
            e.min = s[t].min, e.max = e.min + n
          })) : "position" === t.options.animationType && ii((function(t) {
            var e = i.isShared ? i.measured[t] : i.layout[t],
              n = Xo(s[t]);
            e.max = e.min + n
          }));
          var l = {
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
          qo(l, s, i.layout);
          var c = {
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
          i.isShared ? qo(c, t.applyTransform(u, !0), i.measured) : qo(c, s, i.layout);
          var f = !ga(l),
            d = !1;
          if (!t.resumeFrom && (t.relativeParent = t.getClosestProjectingParent(), t.relativeParent && !t.relativeParent.resumeFrom)) {
            var p = t.relativeParent,
              v = p.snapshot,
              h = p.layout;
            if (v && h) {
              var m = oi();
              Jo(m, i.layout, v.layout);
              var g = oi();
              Jo(g, s, h.actual), ya(m, g) || (d = !0)
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

      function Pa(t) {
        t.clearSnapshot()
      }

      function Va(t) {
        t.clearMeasurements()
      }

      function Ta(t) {
        var e = t.options.visualElement;
        (null == e ? void 0 : e.getProps().onBeforeLayoutMeasure) && e.notifyBeforeLayoutMeasure(), t.resetTransform()
      }

      function Ca(t) {
        t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0
      }

      function Ma(t) {
        t.resolveTargetDelta()
      }

      function Ra(t) {
        t.calcProjection()
      }

      function La(t) {
        t.resetRotation()
      }

      function ka(t) {
        t.removeLeadSnapshot()
      }

      function Da(t, e, n) {
        t.translate = an(e.translate, 0, n), t.scale = an(e.scale, 1, n), t.origin = e.origin, t.originPoint = e.originPoint
      }

      function Oa(t, e, n, r) {
        t.min = an(e.min, n.min, r), t.max = an(e.max, n.max, r)
      }

      function Ia(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit
      }
      var ja = {
        duration: .45,
        ease: [.4, 0, .1, 1]
      };

      function Fa(t, e) {
        for (var n = t.root, r = t.path.length - 1; r >= 0; r--)
          if (Boolean(t.path[r].instance)) {
            n = t.path[r];
            break
          } var o = (n && n !== t.root ? n.instance : document).querySelector('[data-projection-id="'.concat(e, '"]'));
        o && t.mount(o, !0)
      }

      function Ba(t) {
        t.min = Math.round(t.min), t.max = Math.round(t.max)
      }

      function Ua(t) {
        Ba(t.x), Ba(t.y)
      }
      var Na = wa({
          attachResizeListener: function(t, e) {
            return ee(t, "resize", e)
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
        za = {
          current: void 0
        },
        Wa = wa({
          measureScroll: function(t) {
            return {
              x: t.scrollLeft,
              y: t.scrollTop
            }
          },
          defaultParent: function() {
            if (!za.current) {
              var t = new Na(0, {});
              t.mount(window), t.setOptions({
                layoutScroll: !0
              }), za.current = t
            }
            return za.current
          },
          resetTransform: function(t, e) {
            t.style.transform = null != e ? e : "none"
          },
          checkIsScrollRoot: function(t) {
            return Boolean("fixed" === window.getComputedStyle(t).position)
          }
        }),
        Ha = (0, r.__assign)((0, r.__assign)((0, r.__assign)((0, r.__assign)({}, Do), Fe), Si), Qi),
        Ya = B((function(t, e) {
          return te(t, e, Ha, Xi, Wa)
        }));

      function Xa(t) {
        return F(te(t, {
          forwardMotionProps: !1
        }, Ha, Xi, Wa))
      }
      var Ga = B(te);

      function $a() {
        var t = (0, o.useRef)(!1);
        return x((function() {
          return t.current = !0,
            function() {
              t.current = !1
            }
        }), []), t
      }

      function qa() {
        var t = $a(),
          e = (0, r.__read)((0, o.useState)(0), 2),
          n = e[0],
          i = e[1],
          a = (0, o.useCallback)((function() {
            t.current && i(n + 1)
          }), [n]);
        return [(0, o.useCallback)((function() {
          return wr.postRender(a)
        }), [a]), n]
      }
      var Za = function(t) {
        var e = t.children,
          n = t.initial,
          i = t.isPresent,
          a = t.onExitComplete,
          s = t.custom,
          u = t.presenceAffectsLayout,
          l = L(Ka),
          c = Ne(),
          f = (0, o.useMemo)((function() {
            return {
              id: c,
              initial: n,
              isPresent: i,
              custom: s,
              onExitComplete: function(t) {
                var e, n;
                l.set(t, !0);
                try {
                  for (var o = (0, r.__values)(l.values()), i = o.next(); !i.done; i = o.next())
                    if (!i.value) return
                } catch (t) {
                  e = {
                    error: t
                  }
                } finally {
                  try {
                    i && !i.done && (n = o.return) && n.call(o)
                  } finally {
                    if (e) throw e.error
                  }
                }
                null == a || a()
              },
              register: function(t) {
                return l.set(t, !1),
                  function() {
                    return l.delete(t)
                  }
              }
            }
          }), u ? void 0 : [i]);
        return (0, o.useMemo)((function() {
          l.forEach((function(t, e) {
            return l.set(e, !1)
          }))
        }), [i]), o.useEffect((function() {
          !i && !l.size && (null == a || a())
        }), [i]), o.createElement(g.Provider, {
          value: f
        }, e)
      };

      function Ka() {
        return new Map
      }
      var Ja = function(t) {
          return t.key || ""
        },
        Qa = function(t) {
          var e = t.children,
            n = t.custom,
            i = t.initial,
            s = void 0 === i || i,
            u = t.onExitComplete,
            l = t.exitBeforeEnter,
            c = t.presenceAffectsLayout,
            f = void 0 === c || c,
            d = (0, r.__read)(qa(), 1)[0],
            p = (0, o.useContext)(O).forceRender;
          p && (d = p);
          var v = $a(),
            h = function(t) {
              var e = [];
              return o.Children.forEach(t, (function(t) {
                (0, o.isValidElement)(t) && e.push(t)
              })), e
            }(e),
            m = h,
            g = new Set,
            y = (0, o.useRef)(m),
            _ = (0, o.useRef)(new Map).current,
            b = (0, o.useRef)(!0);
          if (x((function() {
              b.current = !1,
                function(t, e) {
                  t.forEach((function(t) {
                    var n = Ja(t);
                    e.set(n, t)
                  }))
                }(h, _), y.current = m
            })), Ae((function() {
              b.current = !0, _.clear(), g.clear()
            })), b.current) return o.createElement(o.Fragment, null, m.map((function(t) {
            return o.createElement(Za, {
              key: Ja(t),
              isPresent: !0,
              initial: !!s && void 0,
              presenceAffectsLayout: f
            }, t)
          })));
          m = (0, r.__spreadArray)([], (0, r.__read)(m), !1);
          for (var E = y.current.map(Ja), w = h.map(Ja), S = E.length, A = 0; A < S; A++) {
            var P = E[A]; - 1 === w.indexOf(P) && g.add(P)
          }
          return l && g.size && (m = []), g.forEach((function(t) {
            if (-1 === w.indexOf(t)) {
              var e = _.get(t);
              if (e) {
                var r = E.indexOf(t);
                m.splice(r, 0, o.createElement(Za, {
                  key: Ja(e),
                  isPresent: !1,
                  onExitComplete: function() {
                    _.delete(t), g.delete(t);
                    var e = y.current.findIndex((function(e) {
                      return e.key === t
                    }));
                    if (y.current.splice(e, 1), !g.size) {
                      if (y.current = h, !1 === v.current) return;
                      d(), u && u()
                    }
                  },
                  custom: n,
                  presenceAffectsLayout: f
                }, e))
              }
            }
          })), m = m.map((function(t) {
            var e = t.key;
            return g.has(e) ? t : o.createElement(Za, {
              key: Ja(t),
              isPresent: !0,
              presenceAffectsLayout: f
            }, t)
          })), "production" !== a && l && m.length > 1 && console.warn("You're attempting to animate multiple children within AnimatePresence, but its exitBeforeEnter prop is set to true. This will lead to odd visual behaviour."), o.createElement(o.Fragment, null, g.size ? m : m.map((function(t) {
            return (0, o.cloneElement)(t)
          })))
        },
        ts = (0, o.createContext)(null),
        es = function(t) {
          return !t.isLayoutDirty && t.willUpdate(!1)
        };
      var ns = function(t) {
          return !0 === t
        },
        rs = function(t) {
          var e, n, i = t.children,
            a = t.id,
            s = t.inheritId,
            u = t.inherit,
            l = void 0 === u || u;
          void 0 !== s && (l = s);
          var c, f, d, p = (0, o.useContext)(O),
            v = (0, o.useContext)(ts),
            h = (0, r.__read)(qa(), 2),
            m = h[0],
            g = h[1],
            y = (0, o.useRef)(null),
            x = null !== (e = p.id) && void 0 !== e ? e : v;
          null === y.current && (function(t) {
            return ns(!0 === t) || "id" === t
          }(l) && x && (a = a ? x + "-" + a : x), y.current = {
            id: a,
            group: ns(l) && null !== (n = null == p ? void 0 : p.group) && void 0 !== n ? n : (c = new Set, f = new WeakMap, d = function() {
              return c.forEach(es)
            }, {
              add: function(t) {
                c.add(t), f.set(t, t.addEventListener("willUpdate", d))
              },
              remove: function(t) {
                var e;
                c.delete(t), null === (e = f.get(t)) || void 0 === e || e(), f.delete(t), d()
              },
              dirty: d
            })
          });
          var _ = (0, o.useMemo)((function() {
            return (0, r.__assign)((0, r.__assign)({}, y.current), {
              forceRender: m
            })
          }), [g]);
          return o.createElement(O.Provider, {
            value: _
          }, i)
        },
        os = 0,
        is = function(t) {
          var e = t.children;
          return o.useEffect((function() {
            (0, c.$)(!1, "AnimateSharedLayout is deprecated: https://www.framer.com/docs/guide-upgrade/##shared-layout-animations")
          }), []), o.createElement(rs, {
            id: L((function() {
              return "asl-".concat(os++)
            }))
          }, e)
        };

      function as(t) {
        var e = t.children,
          n = t.isValidProp,
          i = (0, r.__rest)(t, ["children", "isValidProp"]);
        n && Vt(n), (i = (0, r.__assign)((0, r.__assign)({}, (0, o.useContext)(v)), i)).isStatic = L((function() {
          return i.isStatic
        }));
        var a = (0, o.useMemo)((function() {
          return i
        }), [JSON.stringify(i.transition), i.transformPagePoint, i.reducedMotion]);
        return o.createElement(v.Provider, {
          value: a
        }, e)
      }

      function ss(t) {
        var e = t.children,
          n = t.features,
          i = t.strict,
          a = void 0 !== i && i,
          s = (0, r.__read)((0, o.useState)(!us(n)), 2)[1],
          u = (0, o.useRef)(void 0);
        if (!us(n)) {
          var c = n.renderer,
            d = (0, r.__rest)(n, ["renderer"]);
          u.current = c, l(d)
        }
        return (0, o.useEffect)((function() {
          us(n) && n().then((function(t) {
            var e = t.renderer;
            l((0, r.__rest)(t, ["renderer"])), u.current = e, s(!0)
          }))
        }), []), o.createElement(f.Provider, {
          value: {
            renderer: u.current,
            strict: a
          }
        }, e)
      }

      function us(t) {
        return "function" == typeof t
      }
      var ls = (0, o.createContext)(null);
      var cs = (0, o.forwardRef)((function(t, e) {
        var n = t.children,
          i = t.as,
          a = void 0 === i ? "ul" : i,
          s = t.axis,
          u = void 0 === s ? "y" : s,
          l = t.onReorder,
          f = t.values,
          d = (0, r.__rest)(t, ["children", "as", "axis", "onReorder", "values"]),
          p = L((function() {
            return Ya(a)
          })),
          v = [],
          h = (0, o.useRef)(!1);
        (0, c.V)(Boolean(f), "Reorder.Group must be provided a values prop");
        var m = {
          axis: u,
          registerItem: function(t, e) {
            e && -1 === v.findIndex((function(e) {
              return t === e.value
            })) && (v.push({
              value: t,
              layout: e[u]
            }), v.sort(ds))
          },
          updateOrder: function(t, e, n) {
            if (!h.current) {
              var o = function(t, e, n, o) {
                if (!o) return t;
                var i = t.findIndex((function(t) {
                  return t.value === e
                }));
                if (-1 === i) return t;
                var a = o > 0 ? 1 : -1,
                  s = t[i + a];
                if (!s) return t;
                var u = t[i],
                  l = s.layout,
                  c = an(l.min, l.max, .5);
                return 1 === a && u.layout.max + n > c || -1 === a && u.layout.min + n < c ? function(t, e, n) {
                  var o = (0, r.__read)(t).slice(0),
                    i = e < 0 ? o.length + e : e;
                  if (i >= 0 && i < o.length) {
                    var a = n < 0 ? o.length + n : n,
                      s = (0, r.__read)(o.splice(e, 1), 1)[0];
                    o.splice(a, 0, s)
                  }
                  return o
                }(t, i, i + a) : t
              }(v, t, e, n);
              v !== o && (h.current = !0, l(o.map(fs).filter((function(t) {
                return -1 !== f.indexOf(t)
              }))))
            }
          }
        };
        return (0, o.useEffect)((function() {
          h.current = !1
        })), o.createElement(p, (0, r.__assign)({}, d, {
          ref: e
        }), o.createElement(ls.Provider, {
          value: m
        }, n))
      }));

      function fs(t) {
        return t.value
      }

      function ds(t, e) {
        return t.layout.min - e.layout.min
      }

      function ps(t) {
        var e = L((function() {
          return po(t)
        }));
        if ((0, o.useContext)(v).isStatic) {
          var n = (0, r.__read)((0, o.useState)(t), 2)[1];
          (0, o.useEffect)((function() {
            return e.onChange(n)
          }), [])
        }
        return e
      }
      var vs = function(t) {
        return function(t) {
          return "object" == typeof t && t.mix
        }(t) ? t.mix : void 0
      };

      function hs() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        var n = !Array.isArray(t[0]),
          o = n ? 0 : -1,
          i = t[0 + o],
          a = t[1 + o],
          s = t[2 + o],
          u = t[3 + o],
          l = In(a, s, (0, r.__assign)({
            mixer: vs(s[0])
          }, u));
        return n ? l(i) : l
      }

      function ms(t, e) {
        var n = ps(e()),
          r = function() {
            return n.set(e())
          };
        return r(),
          function(t, e) {
            x((function() {
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
            return wr.update(r, !1, !0)
          })), n
      }

      function gs(t, e, n, o) {
        var i = "function" == typeof e ? e : hs(e, n, o);
        return Array.isArray(t) ? ys(t, i) : ys([t], (function(t) {
          var e = (0, r.__read)(t, 1)[0];
          return i(e)
        }))
      }

      function ys(t, e) {
        var n = L((function() {
          return []
        }));
        return ms(t, (function() {
          n.length = 0;
          for (var r = t.length, o = 0; o < r; o++) n[o] = t[o].get();
          return e(n)
        }))
      }

      function xs(t, e) {
        return void 0 === e && (e = 0), J(t) ? t : ps(e)
      }
      var _s = (0, o.forwardRef)((function(t, e) {
          var n = t.children,
            i = t.style,
            a = t.value,
            s = t.as,
            u = void 0 === s ? "li" : s,
            l = t.onDrag,
            f = t.layout,
            d = void 0 === f || f,
            p = (0, r.__rest)(t, ["children", "style", "value", "as", "onDrag", "layout"]),
            v = L((function() {
              return Ya(u)
            })),
            h = (0, o.useContext)(ls),
            m = {
              x: xs(null == i ? void 0 : i.x),
              y: xs(null == i ? void 0 : i.y)
            },
            g = gs([m.x, m.y], (function(t) {
              var e = (0, r.__read)(t, 2),
                n = e[0],
                o = e[1];
              return n || o ? 1 : "unset"
            })),
            y = (0, o.useRef)(null);
          (0, c.V)(Boolean(h), "Reorder.Item must be a child of Reorder.Group");
          var x = h,
            _ = x.axis,
            b = x.registerItem,
            E = x.updateOrder;
          return (0, o.useEffect)((function() {
            b(a, y.current)
          }), [h]), o.createElement(v, (0, r.__assign)({
            drag: _
          }, p, {
            dragSnapToOrigin: !0,
            style: (0, r.__assign)((0, r.__assign)({}, i), {
              x: m.x,
              y: m.y,
              zIndex: g
            }),
            layout: d,
            onDrag: function(t, e) {
              var n = e.velocity;
              n[_] && E(a, m[_].get(), n[_]), null == l || l(t, e)
            },
            onLayoutMeasure: function(t) {
              y.current = t
            },
            ref: e
          }), n)
        })),
        bs = {
          Group: cs,
          Item: _s
        },
        Es = (0, r.__assign)((0, r.__assign)({
          renderer: Xi
        }, Do), Fe),
        ws = (0, r.__assign)((0, r.__assign)((0, r.__assign)((0, r.__assign)({}, Es), Si), Qi), {
          projectionNodeConstructor: Wa
        });

      function Ss(t) {
        for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        var r = t.length;
        return ms(e, (function() {
          for (var n = "", o = 0; o < r; o++) n += t[o], e[o] && (n += e[o].get());
          return n
        }))
      }

      function As(t, e) {
        void 0 === e && (e = {});
        var n = (0, o.useContext)(v).isStatic,
          i = (0, o.useRef)(null),
          a = ps(J(t) ? t.get() : t);
        return (0, o.useMemo)((function() {
            return a.attach((function(t, o) {
              return n ? o(t) : (i.current && i.current.stop(), i.current = Pr((0, r.__assign)((0, r.__assign)({
                from: a.get(),
                to: t,
                velocity: a.getVelocity()
              }, e), {
                onUpdate: o
              })), a.get())
            }))
          }), [JSON.stringify(e)]),
          function(t, e) {
            x((function() {
              if (J(t)) return t.onChange(e)
            }), [e])
          }(t, (function(t) {
            return a.set(parseFloat(t))
          })), a
      }

      function Ps(t) {
        var e = ps(t.getVelocity());
        return (0, o.useEffect)((function() {
          return t.velocityUpdateSubscribers.add((function(t) {
            e.set(t)
          }))
        }), [t]), e
      }

      function Vs(t, e) {
        var n;
        return "string" == typeof t ? e ? (null !== (n = e[t]) && void 0 !== n || (e[t] = document.querySelectorAll(t)), t = e[t]) : t = document.querySelectorAll(t) : t instanceof Element && (t = [t]), Array.from(t || [])
      }
      const Ts = new WeakMap;
      let Cs;

      function Ms({
        target: t,
        contentRect: e,
        borderBoxSize: n
      }) {
        var r;
        null === (r = Ts.get(t)) || void 0 === r || r.forEach((r => {
          r({
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

      function Rs(t) {
        t.forEach(Ms)
      }
      const Ls = new Set;
      let ks;
      var Ds = n(87058),
        Os = n(14366);
      const Is = 50,
        js = () => ({
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
        Fs = {
          x: {
            length: "Width",
            position: "Left"
          },
          y: {
            length: "Height",
            position: "Top"
          }
        };

      function Bs(t, e, n, r) {
        const o = n[e],
          {
            length: i,
            position: a
          } = Fs[e],
          s = o.current,
          u = n.time;
        o.current = t["scroll" + a], o.scrollLength = t["scroll" + i] - t["client" + i], o.offset.length = 0, o.offset[0] = 0, o.offset[1] = o.scrollLength, o.progress = (0, Ds.q)(0, o.scrollLength, o.current);
        const l = r - u;
        o.velocity = l > Is ? 0 : (0, Os.f)(o.current - s, l)
      }
      var Us = n(72023),
        Ns = n(44367),
        zs = n(38138);
      const Ws = {
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
      var Hs = n(64533),
        Ys = n(19877);
      const Xs = {
        start: 0,
        center: .5,
        end: 1
      };

      function Gs(t, e, n = 0) {
        let r = 0;
        if (void 0 !== Xs[t] && (t = Xs[t]), (0, Ys.K)(t)) {
          const e = parseFloat(t);
          t.endsWith("px") ? r = e : t.endsWith("%") ? t = e / 100 : t.endsWith("vw") ? r = e / 100 * document.documentElement.clientWidth : t.endsWith("vh") ? r = e / 100 * document.documentElement.clientHeight : t = e
        }
        return (0, Hs.E)(t) && (r = e * t), n + r
      }
      const $s = [0, 0];

      function qs(t, e, n, r) {
        let o = Array.isArray(t) ? t : $s,
          i = 0,
          a = 0;
        return (0, Hs.E)(t) ? o = [t, t] : (0, Ys.K)(t) && (o = (t = t.trim()).includes(" ") ? t.split(" ") : [t, Xs[t] ? t : "0"]), i = Gs(o[0], n, r), a = Gs(o[1], e), i - a
      }
      const Zs = {
        x: 0,
        y: 0
      };

      function Ks(t, e, n, r = {}) {
        const o = r.axis || "y";
        return {
          measure: () => function(t, e = t, n) {
            if (n.x.targetOffset = 0, n.y.targetOffset = 0, e !== t) {
              let r = e;
              for (; r && r != t;) n.x.targetOffset += r.offsetLeft, n.y.targetOffset += r.offsetTop, r = r.offsetParent
            }
            n.x.targetLength = e === t ? e.scrollWidth : e.clientWidth, n.y.targetLength = e === t ? e.scrollHeight : e.clientHeight, n.x.containerLength = t.clientWidth, n.y.containerLength = t.clientHeight
          }(t, r.target, n),
          update: e => {
            ! function(t, e, n) {
              Bs(t, "x", e, n), Bs(t, "y", e, n), e.time = n
            }(t, n, e), (r.offset || r.target) && function(t, e, n) {
              let {
                offset: r = Ws.All
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
              }(o, t) : Zs, u = o === t ? {
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
                const n = qs(r[t], l[a], u[a], s[i]);
                c || n === e[i].interpolatorOffsets[t] || (c = !0), e[i].offset[t] = n
              }
              c && (e[i].interpolate = (0, Ns.G)((0, zs.Z)(f), e[i].offset), e[i].interpolatorOffsets = [...e[i].offset]), e[i].progress = e[i].interpolate(e[i].current)
            }(t, n, r)
          },
          notify: "function" == typeof e ? () => e(n) : (i = e, a = n[o], i.pause(), i.forEachNative(((t, {
            easing: e
          }) => {
            var n, r;
            if (t.updateDuration) e || (t.easing = Us.p), t.updateDuration(1);
            else {
              const o = {
                duration: 1e3
              };
              e || (o.easing = "linear"), null === (r = null === (n = t.effect) || void 0 === n ? void 0 : n.updateTiming) || void 0 === r || r.call(n, o)
            }
          })), () => {
            i.currentTime = a.progress
          })
        };
        var i, a
      }
      const Js = new WeakMap,
        Qs = new WeakMap,
        tu = new WeakMap,
        eu = t => t === document.documentElement ? window : t;

      function nu(t, e = {}) {
        var {
          container: n = document.documentElement
        } = e, o = (0, r.__rest)(e, ["container"]);
        let i = tu.get(n);
        i || (i = new Set, tu.set(n, i));
        const a = js(),
          s = Ks(n, t, a, o);
        if (i.add(s), !Js.has(n)) {
          const t = () => {
            const t = performance.now();
            for (const t of i) t.measure();
            for (const e of i) e.update(t);
            for (const t of i) t.notify()
          };
          Js.set(n, t);
          const e = eu(n);
          window.addEventListener("resize", t, {
            passive: !0
          }), n !== document.documentElement && Qs.set(n, function(t, e) {
            return "function" == typeof t ? (n = t, Ls.add(n), ks || (ks = () => {
              const t = {
                  width: window.innerWidth,
                  height: window.innerHeight
                },
                e = {
                  target: window,
                  size: t,
                  contentSize: t
                };
              Ls.forEach((t => t(e)))
            }, window.addEventListener("resize", ks)), () => {
              Ls.delete(n), !Ls.size && ks && (ks = void 0)
            }) : function(t, e) {
              Cs || "undefined" != typeof ResizeObserver && (Cs = new ResizeObserver(Rs));
              const n = Vs(t);
              return n.forEach((t => {
                let n = Ts.get(t);
                n || (n = new Set, Ts.set(t, n)), n.add(e), null == Cs || Cs.observe(t)
              })), () => {
                n.forEach((t => {
                  const n = Ts.get(t);
                  null == n || n.delete(e), (null == n ? void 0 : n.size) || null == Cs || Cs.unobserve(t)
                }))
              }
            }(t, e);
            var n
          }(n, t)), e.addEventListener("scroll", t, {
            passive: !0
          })
        }
        const u = Js.get(n),
          l = requestAnimationFrame(u);
        return () => {
          var e;
          "function" != typeof t && t.stop(), cancelAnimationFrame(l);
          const r = tu.get(n);
          if (!r) return;
          if (r.delete(s), r.size) return;
          const o = Js.get(n);
          Js.delete(n), o && (eu(n).removeEventListener("scroll", o), null === (e = Qs.get(n)) || void 0 === e || e(), window.removeEventListener("resize", o))
        }
      }
      var ru = function() {
        return {
          scrollX: po(0),
          scrollY: po(0),
          scrollXProgress: po(0),
          scrollYProgress: po(0)
        }
      };

      function ou(t) {
        void 0 === t && (t = {});
        var e = t.container,
          n = t.target,
          o = (0, r.__rest)(t, ["container", "target"]),
          i = L(ru);
        return x((function() {
          return nu((function(t) {
            var e = t.x,
              n = t.y;
            i.scrollX.set(e.current), i.scrollXProgress.set(e.progress), i.scrollY.set(n.current), i.scrollYProgress.set(n.progress)
          }), (0, r.__assign)((0, r.__assign)({}, o), {
            container: (null == e ? void 0 : e.current) || void 0,
            target: (null == n ? void 0 : n.current) || void 0
          }))
        }), []), i
      }

      function iu(t) {
        return Ce(!1, "useElementScroll is deprecated. Convert to useScroll({ container: ref })."), ou({
          container: t
        })
      }

      function au() {
        return Ce(!1, "useViewportScroll is deprecated. Convert to useScroll()."), ou()
      }
      var su = "undefined" != typeof performance ? function() {
        return performance.now()
      } : function() {
        return Date.now()
      };

      function uu(t) {
        var e = L(su),
          n = (0, o.useContext)(v).isStatic;
        (0, o.useEffect)((function() {
          if (!n) {
            var r = function(n) {
              var r = n.timestamp;
              t(r - e)
            };
            return wr.update(r, !0),
              function() {
                return gr.update(r)
              }
          }
        }), [t])
      }

      function lu() {
        var t = ps(0);
        return uu((function(e) {
          return t.set(e)
        })), t
      }

      function cu() {
        var t = !1,
          e = [],
          n = new Set,
          o = {
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
                  i.push(Ao(t, r, {
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
              return (0, c.V)(t, "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."), n.forEach((function(t) {
                ! function(t, e) {
                  Array.isArray(e) ? bo(t, e) : "string" == typeof e ? bo(t, [e]) : _o(t, e)
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
                  o.start.apply(o, (0, r.__spreadArray)([], (0, r.__read)(e), !1)).then(n)
                })),
                function() {
                  t = !1, o.stop()
                }
            }
          };
        return o
      }

      function fu() {
        var t = L(cu);
        return (0, o.useEffect)(t.mount, []), t
      }
      var du = fu;
      const pu = (t, e, n) => {
        const r = e - t;
        return ((n - t) % r + r) % r + t
      };

      function vu() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        var n = (0, o.useRef)(0),
          i = (0, r.__read)((0, o.useState)(t[n.current]), 2),
          a = i[0],
          s = i[1];
        return [a, (0, o.useCallback)((function(e) {
          n.current = "number" != typeof e ? pu(0, t.length, n.current + 1) : e, s(t[n.current])
        }), (0, r.__spreadArray)([t.length], (0, r.__read)(t), !1))]
      }
      const hu = {
        any: 0,
        all: 1
      };

      function mu(t, e) {
        var n = void 0 === e ? {} : e,
          i = n.root,
          a = n.margin,
          s = n.amount,
          u = n.once,
          l = void 0 !== u && u,
          c = (0, r.__read)((0, o.useState)(!1), 2),
          f = c[0],
          d = c[1];
        return (0, o.useEffect)((function() {
          var e;
          if (!(!t.current || l && f)) {
            var n = {
              root: null !== (e = null == i ? void 0 : i.current) && void 0 !== e ? e : void 0,
              margin: a,
              amount: "some" === s ? "any" : s
            };
            return function(t, e, {
              root: n,
              margin: r,
              amount: o = "any"
            } = {}) {
              if ("undefined" == typeof IntersectionObserver) return () => {};
              const i = Vs(t),
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
                  threshold: "number" == typeof o ? o : hu[o]
                });
              return i.forEach((t => s.observe(t))), () => s.disconnect()
            }(t.current, (function() {
              return d(!0), l ? void 0 : function() {
                return d(!1)
              }
            }), n)
          }
        }), [i, t, a, l]), f
      }
      var gu = function() {
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
        yu = function() {
          return new gu
        };

      function xu() {
        return L(yu)
      }

      function _u() {
        return bu
      }

      function bu(t) {
        za.current && (za.current.isUpdating = !1, za.current.blockUpdate(), null == t || t())
      }

      function Eu() {
        var t = (0, r.__read)(qa(), 2),
          e = t[0],
          n = t[1],
          i = _u();
        return (0, o.useEffect)((function() {
            wr.postRender((function() {
              return wr.postRender((function() {
                return Qr.current = !1
              }))
            }))
          }), [n]),
          function(t) {
            i((function() {
              Qr.current = !0, e(), t()
            }))
          }
      }

      function wu() {
        return o.useCallback((function() {
          var t = za.current;
          t && t.resetTree()
        }), [])
      }
      var Su = function() {
          return {}
        },
        Au = Pi({
          build: function() {},
          measureViewportBox: oi,
          resetTransform: function() {},
          restoreTransform: function() {},
          removeValueFromRenderState: function() {},
          render: function() {},
          scrapeMotionValuesFromProps: Su,
          readValueFromInstance: function(t, e, n) {
            return n.initialState[e] || 0
          },
          makeTargetAnimatable: function(t, e) {
            var n = e.transition,
              o = e.transitionEnd,
              i = (0, r.__rest)(e, ["transition", "transitionEnd"]);
            return Eo(t, i, So(i, n || {}, t)), (0, r.__assign)({
              transition: n,
              transitionEnd: o
            }, i)
          }
        }),
        Pu = qt({
          scrapeMotionValuesFromProps: Su,
          createRenderState: Su
        });

      function Vu(t) {
        var e = (0, r.__read)((0, o.useState)(t), 2),
          n = e[0],
          i = e[1],
          a = Pu({}, !1),
          s = L((function() {
            return Au({
              props: {},
              visualState: a
            }, {
              initialState: t
            })
          }));
        return (0, o.useEffect)((function() {
          return s.mount({}), s.unmount
        }), [s]), (0, o.useEffect)((function() {
          s.setProps({
            onUpdate: function(t) {
              i((0, r.__assign)({}, t))
            }
          })
        }), [i, s]), [n, L((function() {
          return function(t) {
            return Ao(s, t)
          }
        }))]
      }
      var Tu = function(t) {
          return t > .001 ? 1 / t : 1e5
        },
        Cu = !1;

      function Mu(t) {
        var e = ps(1),
          n = ps(1),
          r = m();
        return (0, c.V)(!(!t && !r), "If no scale values are provided, useInvertedScale must be used within a child of another motion component."), (0, c.$)(Cu, "useInvertedScale is deprecated and will be removed in 3.0. Use the layout prop instead."), Cu = !0, t ? (e = t.scaleX || e, n = t.scaleY || n) : r && (e = r.getValue("scaleX", 1), n = r.getValue("scaleY", 1)), {
          scaleX: gs(e, Tu),
          scaleY: gs(n, Tu)
        }
      }
    }
  }
]);