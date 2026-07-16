try {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    e = (new t.Error).stack;
  e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "d97e64ff-ec45-478f-94c1-1896d34a965b", t._sentryDebugIdIdentifier = "sentry-dbid-d97e64ff-ec45-478f-94c1-1896d34a965b")
} catch (t) {} {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  t._sentryModuleMetadata = t._sentryModuleMetadata || {}, t._sentryModuleMetadata[(new t.Error).stack] = Object.assign({}, t._sentryModuleMetadata[(new t.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-newswire-article",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [3431, 6924], {
    43431(t) {
      var e, n, i = t.exports = {};

      function s() {
        throw new Error("setTimeout has not been defined")
      }

      function o() {
        throw new Error("clearTimeout has not been defined")
      }

      function r(t) {
        if (e === setTimeout) return setTimeout(t, 0);
        if ((e === s || !e) && setTimeout) return e = setTimeout, setTimeout(t, 0);
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
          e = "function" == typeof setTimeout ? setTimeout : s
        } catch (t) {
          e = s
        }
        try {
          n = "function" == typeof clearTimeout ? clearTimeout : o
        } catch (t) {
          n = o
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
              if ((n === o || !n) && clearTimeout) return n = clearTimeout, clearTimeout(t);
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
    25938(t, e, n) {
      "use strict";
      const i = (0, n(93082).createContext)({});
      n.d(e, ["L", 0, i])
    },
    30997(t, e, n) {
      "use strict";
      const i = (0, n(93082).createContext)({
        strict: !1
      });
      n.d(e, ["Y", 0, i])
    },
    13614(t, e, n) {
      "use strict";
      const i = (0, n(93082).createContext)(null);
      n.d(e, ["t", 0, i])
    },
    71062(t, e, n) {
      "use strict";
      const i = (0, n(93082).createContext)({});
      n.d(e, ["N", 0, i])
    },
    27765(t, e, n) {
      "use strict";
      n.d(e, {
        e: () => s
      });
      var i = n(78834);

      function s(t) {
        return {
          point: {
            x: t.pageX,
            y: t.pageY
          }
        }
      }
      n.d(e, ["F", 0, t => e => (0, i.M)(e) && t(e, s(e))])
    },
    39475(t, e, n) {
      "use strict";
      n.d(e, {
        W: () => I
      });
      var i = n(80425),
        s = n(23836);

      function o(t, e, n) {
        const i = t.getProps();
        return (0, s.a)(i, e, void 0 !== n ? n : i.custom, t)
      }
      var r = n(30637),
        a = n(28041),
        l = n(87817),
        u = n(7356);
      const c = t => Array.isArray(t);

      function h(t, e, n) {
        t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, (0, u.OQ)(n))
      }

      function d(t) {
        return c(t) ? t[t.length - 1] || 0 : t
      }
      var p = n(60888),
        m = n(90129),
        f = n(83082),
        v = n(67581);

      function g({
        protectedKeys: t,
        needsAnimating: e
      }, n) {
        const i = t.hasOwnProperty(n) && !0 !== e[n];
        return e[n] = !1, i
      }

      function y(t, e, {
        delay: n = 0,
        transitionOverride: i,
        type: s
      } = {}) {
        let {
          transition: u,
          transitionEnd: c,
          ...y
        } = e;
        const x = t.getDefaultTransition();
        u = u ? (0, a.K)(u, x) : x;
        const w = u?.reduceMotion,
          T = u?.skipAnimations;
        i && (u = i);
        const b = [],
          S = s && t.animationState && t.animationState.getState()[s],
          P = u?.path;
        P && P.animateVisualElement(t, y, u, n, b);
        for (const e in y) {
          const i = t.getValue(e, t.latestValues[e] ?? null),
            s = y[e];
          if (void 0 === s || S && g(S, e)) continue;
          const o = {
            delay: n,
            ...(0, r.r)(u || {}, e)
          };
          T && (o.skipAnimations = !0);
          const a = i.get();
          if (void 0 !== a && !i.isAnimating() && !Array.isArray(s) && s === a && !o.velocity) {
            v.Gt.update(() => i.set(s));
            continue
          }
          let c = !1;
          if (window.MotionHandoffAnimation) {
            const n = (0, m.P)(t);
            if (n) {
              const t = window.MotionHandoffAnimation(n, e, v.Gt);
              null !== t && (o.startTime = t, c = !0)
            }
          }(0, p.g)(t, e);
          const h = w ?? t.shouldReduceMotion;
          i.start((0, f.f)(e, i, s, h && l.$.has(e) ? {
            type: !1
          } : o, t, c));
          const d = i.animation;
          d && b.push(d)
        }
        if (c) {
          const e = () => v.Gt.update(() => {
            c && function(t, e) {
              const n = o(t, e);
              let {
                transitionEnd: i = {},
                transition: s = {},
                ...r
              } = n || {};
              r = {
                ...r,
                ...i
              };
              for (const e in r) h(t, e, d(r[e]))
            }(t, c)
          });
          b.length ? Promise.all(b).then(e) : e()
        }
        return b
      }

      function x(t, e, n, i = 0, s = 1) {
        const o = Array.from(t).sort((t, e) => t.sortNodePosition(e)).indexOf(e),
          r = t.size,
          a = (r - 1) * i;
        return "function" == typeof n ? n(o, r) : 1 === s ? o * i : a - o * i
      }

      function w(t, e, n = {}) {
        const i = o(t, e, "exit" === n.type ? t.presenceContext?.custom : void 0);
        let {
          transition: s = t.getDefaultTransition() || {}
        } = i || {};
        n.transitionOverride && (s = n.transitionOverride);
        const r = i ? () => Promise.all(y(t, i, n)) : () => Promise.resolve(),
          a = t.variantChildren && t.variantChildren.size ? (i = 0) => {
            const {
              delayChildren: o = 0,
              staggerChildren: r,
              staggerDirection: a
            } = s;
            return function(t, e, n = 0, i = 0, s = 0, o = 1, r) {
              const a = [];
              for (const l of t.variantChildren) l.notify("AnimationStart", e), a.push(w(l, e, {
                ...r,
                delay: n + ("function" == typeof i ? 0 : i) + x(t.variantChildren, l, i, s, o)
              }).then(() => l.notify("AnimationComplete", e)));
              return Promise.all(a)
            }(t, e, i, o, r, a, n)
          } : () => Promise.resolve(),
          {
            when: l
          } = s;
        if (l) {
          const [t, e] = "beforeChildren" === l ? [r, a] : [a, r];
          return t().then(() => e())
        }
        return Promise.all([r(), a(n.delay)])
      }
      var T = n(10450),
        b = n(58875);
      const S = b._.length;

      function P(t) {
        if (!t) return;
        if (!t.isControllingVariants) {
          const e = t.parent && P(t.parent) || {};
          return void 0 !== t.props.initial && (e.initial = t.props.initial), e
        }
        const e = {};
        for (let n = 0; n < S; n++) {
          const i = b._[n],
            s = t.props[i];
          ((0, T.w)(s) || !1 === s) && (e[i] = s)
        }
        return e
      }
      var E = n(57873);

      function k(t, e) {
        if (!Array.isArray(e)) return !1;
        const n = e.length;
        if (n !== t.length) return !1;
        for (let i = 0; i < n; i++)
          if (e[i] !== t[i]) return !1;
        return !0
      }
      const A = [...b.U].reverse(),
        M = b.U.length;

      function C(t) {
        let e = function(t) {
            return e => Promise.all(e.map(({
              animation: e,
              options: n
            }) => function(t, e, n = {}) {
              let i;
              if (t.notify("AnimationStart", e), Array.isArray(e)) {
                const s = e.map(e => w(t, e, n));
                i = Promise.all(s)
              } else if ("string" == typeof e) i = w(t, e, n);
              else {
                const s = "function" == typeof e ? o(t, e, n.custom) : e;
                i = Promise.all(y(t, s, n))
              }
              return i.then(() => {
                t.notify("AnimationComplete", e)
              })
            }(t, e, n)))
          }(t),
          n = R(),
          i = !0,
          s = !1;
        const r = e => (n, i) => {
          const s = o(t, i, "exit" === e ? t.presenceContext?.custom : void 0);
          if (s) {
            const {
              transition: t,
              transitionEnd: e,
              ...i
            } = s;
            n = {
              ...n,
              ...i,
              ...e
            }
          }
          return n
        };

        function a(a) {
          const {
            props: l
          } = t, u = P(t.parent) || {}, h = [], d = new Set;
          let p = {},
            m = 1 / 0;
          for (let e = 0; e < M; e++) {
            const f = A[e],
              v = n[f],
              g = void 0 !== l[f] ? l[f] : u[f],
              y = (0, T.w)(g),
              w = f === a ? v.isActive : null;
            !1 === w && (m = e);
            let b = g === u[f] && g !== l[f] && y;
            if (b && (i || s) && t.manuallyAnimateOnMount && (b = !1), v.protectedKeys = {
                ...p
              }, !v.isActive && null === w || !g && !v.prevProp || (0, E.N)(g) || "boolean" == typeof g) continue;
            if ("exit" === f && v.isActive && !0 !== w) {
              v.prevResolvedValues && (p = {
                ...p,
                ...v.prevResolvedValues
              });
              continue
            }
            const S = V(v.prevProp, g);
            let P = S || f === a && v.isActive && !b && y || e > m && y,
              M = !1;
            const C = Array.isArray(g) ? g : [g];
            let D = C.reduce(r(f), {});
            !1 === w && (D = {});
            const {
              prevResolvedValues: R = {}
            } = v, L = {
              ...R,
              ...D
            }, B = e => {
              P = !0, d.has(e) && (M = !0, d.delete(e)), v.needsAnimating[e] = !0;
              const n = t.getValue(e);
              n && (n.liveStyle = !1)
            };
            for (const t in L) {
              const e = D[t],
                n = R[t];
              if (p.hasOwnProperty(t)) continue;
              let i = !1;
              i = c(e) && c(n) ? !k(e, n) || S : e !== n, i ? null != e ? B(t) : d.add(t) : void 0 !== e && d.has(t) ? B(t) : v.protectedKeys[t] = !0
            }
            v.prevProp = g, v.prevResolvedValues = D, v.isActive && (p = {
              ...p,
              ...D
            }), (i || s) && t.blockInitialAnimation && (P = !1);
            const j = b && S;
            P && (!j || M) && h.push(...C.map(e => {
              const n = {
                type: f
              };
              if ("string" == typeof e && (i || s) && !j && t.manuallyAnimateOnMount && t.parent) {
                const {
                  parent: i
                } = t, s = o(i, e);
                if (i.enteringChildren && s) {
                  const {
                    delayChildren: e
                  } = s.transition || {};
                  n.delay = x(i.enteringChildren, t, e)
                }
              }
              return {
                animation: e,
                options: n
              }
            }))
          }
          if (d.size) {
            const e = {};
            if ("boolean" != typeof l.initial) {
              const n = o(t, Array.isArray(l.initial) ? l.initial[0] : l.initial);
              n && n.transition && (e.transition = n.transition)
            }
            d.forEach(n => {
              const i = t.getBaseTarget(n),
                s = t.getValue(n);
              s && (s.liveStyle = !0), e[n] = i ?? null
            }), h.push({
              animation: e
            })
          }
          let f = Boolean(h.length);
          return !i || !1 !== l.initial && l.initial !== l.animate || t.manuallyAnimateOnMount || (f = !1), i = !1, s = !1, f ? e(h) : Promise.resolve()
        }
        return {
          animateChanges: a,
          setActive: function(e, i) {
            if (n[e].isActive === i) return Promise.resolve();
            t.variantChildren?.forEach(t => t.animationState?.setActive(e, i)), n[e].isActive = i;
            const s = a(e);
            for (const t in n) n[t].protectedKeys = {};
            return s
          },
          setAnimateFunction: function(n) {
            e = n(t)
          },
          getState: () => n,
          reset: () => {
            n = R(), s = !0
          }
        }
      }

      function V(t, e) {
        return "string" == typeof e ? e !== t : !!Array.isArray(e) && !k(e, t)
      }

      function D(t = !1) {
        return {
          isActive: t,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {}
        }
      }

      function R() {
        return {
          animate: D(!0),
          whileInView: D(),
          whileHover: D(),
          whileTap: D(),
          whileDrag: D(),
          whileFocus: D(),
          exit: D()
        }
      }
      class L extends i.X {
        constructor(t) {
          super(t), t.animationState || (t.animationState = C(t))
        }
        updateAnimationControlsSubscription() {
          const {
            animate: t
          } = this.node.getProps();
          (0, E.N)(t) && (this.unmountControls = t.subscribe(this.node))
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
        unmount() {
          this.node.animationState.reset(), this.unmountControls?.()
        }
      }
      let B = 0;
      class j extends i.X {
        constructor() {
          super(...arguments), this.id = B++, this.isExitComplete = !1
        }
        update() {
          if (!this.node.presenceContext) return;
          const {
            isPresent: t,
            onExitComplete: e
          } = this.node.presenceContext, {
            isPresent: n
          } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || t === n) return;
          if (t && !1 === n) {
            if (this.isExitComplete) {
              const {
                initial: t,
                custom: e
              } = this.node.getProps();
              if ("string" == typeof t || "object" == typeof t && null !== t && !Array.isArray(t)) {
                const n = o(this.node, t, e);
                if (n) {
                  const {
                    transition: t,
                    transitionEnd: e,
                    ...i
                  } = n;
                  for (const t in i) this.node.getValue(t)?.jump(i[t])
                }
              }
              this.node.animationState.reset(), this.node.animationState.animateChanges()
            } else this.node.animationState.setActive("exit", !1);
            return void(this.isExitComplete = !1)
          }
          const i = this.node.animationState.setActive("exit", !t);
          e && !t && i.then(() => {
            this.isExitComplete = !0, e(this.id)
          })
        }
        mount() {
          const {
            register: t,
            onExitComplete: e
          } = this.node.presenceContext || {};
          e && e(this.id), t && (this.unmount = t(this.id))
        }
        unmount() {}
      }
      const I = {
        animation: {
          Feature: L
        },
        exit: {
          Feature: j
        }
      }
    },
    67349(t, e, n) {
      "use strict";
      n.d(e, {
        j: () => r
      });
      var i = n(93577);
      const s = {
        animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
        exit: ["exit"],
        drag: ["drag", "dragControls"],
        focus: ["whileFocus"],
        hover: ["whileHover", "onHoverStart", "onHoverEnd"],
        tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
        pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
        inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
        layout: ["layout", "layoutId"]
      };
      let o = !1;

      function r() {
        return function() {
          if (o) return;
          const t = {};
          for (const e in s) t[e] = {
            isEnabled: t => s[e].some(e => !!t[e])
          };
          (0, i.lr)(t), o = !0
        }(), (0, i.vK)()
      }
    },
    89407(t, e, n) {
      "use strict";
      n.d(e, {
        n: () => D
      });
      var i = n(67581),
        s = n(80425),
        o = n(38831),
        r = n(95286);

      function a(t, e) {
        const n = (0, r.K)(t),
          i = new AbortController;
        return [n, {
          passive: !0,
          ...e,
          signal: i.signal
        }, () => i.abort()]
      }
      var l = n(27765);

      function u(t, e, n) {
        const {
          props: s
        } = t;
        t.animationState && s.whileHover && t.animationState.setActive("whileHover", "Start" === n);
        const o = s["onHover" + n];
        o && i.Gt.postRender(() => o(e, (0, l.e)(e)))
      }
      class c extends s.X {
        mount() {
          const {
            current: t
          } = this.node;
          t && (this.unmount = function(t, e, n = {}) {
            const [i, s, r] = a(t, n);
            return i.forEach(t => {
              let n, i = !1,
                r = !1;
              const a = e => {
                  n && (n(e), n = void 0), t.removeEventListener("pointerleave", u)
                },
                l = t => {
                  i = !1, window.removeEventListener("pointerup", l), window.removeEventListener("pointercancel", l), r && (r = !1, a(t))
                },
                u = t => {
                  "touch" !== t.pointerType && (i ? r = !0 : a(t))
                };
              t.addEventListener("pointerenter", i => {
                if ("touch" === i.pointerType || (0, o.D)()) return;
                r = !1;
                const a = e(t, i);
                "function" == typeof a && (n = a, t.addEventListener("pointerleave", u, s))
              }, s), t.addEventListener("pointerdown", () => {
                i = !0, window.addEventListener("pointerup", l, s), window.addEventListener("pointercancel", l, s)
              }, s)
            }), r
          }(t, (t, e) => (u(this.node, e, "Start"), t => u(this.node, t, "End"))))
        }
        unmount() {}
      }
      var h = n(82009),
        d = n(12879);
      class p extends s.X {
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
          this.unmount = (0, d.F)((0, h.k)(this.node.current, "focus", () => this.onFocus()), (0, h.k)(this.node.current, "blur", () => this.onBlur()))
        }
        unmount() {}
      }
      var m = n(20621);
      const f = (t, e) => !!e && (t === e || f(t, e.parentElement));
      var v = n(78834),
        g = n(37606);
      const y = new WeakSet;

      function x(t) {
        return e => {
          "Enter" === e.key && t(e)
        }
      }

      function w(t, e) {
        t.dispatchEvent(new PointerEvent("pointer" + e, {
          isPrimary: !0,
          bubbles: !0
        }))
      }

      function T(t) {
        return (0, v.M)(t) && !(0, o.D)()
      }
      const b = new WeakSet;

      function S(t, e, n) {
        const {
          props: s
        } = t;
        if (t.current instanceof HTMLButtonElement && t.current.disabled) return;
        t.animationState && s.whileTap && t.animationState.setActive("whileTap", "Start" === n);
        const o = s["onTap" + ("End" === n ? "" : n)];
        o && i.Gt.postRender(() => o(e, (0, l.e)(e)))
      }
      class P extends s.X {
        mount() {
          const {
            current: t
          } = this.node;
          if (!t) return;
          const {
            globalTapTarget: e,
            propagate: n
          } = this.node.props;
          this.unmount = function(t, e, n = {}) {
            const [i, s, o] = a(t, n), r = t => {
              const i = t.currentTarget;
              if (!T(t)) return;
              if (b.has(t)) return;
              y.add(i), n.stopPropagation && b.add(t);
              const o = e(i, t),
                r = {
                  ...s,
                  capture: !0
                },
                a = (t, e) => {
                  window.removeEventListener("pointerup", l, r), window.removeEventListener("pointercancel", u, r), y.has(i) && y.delete(i), T(t) && "function" == typeof o && o(t, {
                    success: e
                  })
                },
                l = t => {
                  a(t, i === window || i === document || n.useGlobalTarget || f(i, t.target))
                },
                u = t => {
                  a(t, !1)
                };
              window.addEventListener("pointerup", l, r), window.addEventListener("pointercancel", u, r)
            };
            return i.forEach(t => {
              var e;
              (n.useGlobalTarget ? window : t).addEventListener("pointerdown", r, s), e = t, (0, m.G)(e) && "offsetHeight" in e && !("ownerSVGElement" in e) && (t.addEventListener("focus", t => ((t, e) => {
                const n = t.currentTarget;
                if (!n) return;
                const i = x(() => {
                  if (y.has(n)) return;
                  w(n, "down");
                  const t = x(() => {
                    w(n, "up")
                  });
                  n.addEventListener("keyup", t, e), n.addEventListener("blur", () => w(n, "cancel"), e)
                });
                n.addEventListener("keydown", i, e), n.addEventListener("blur", () => n.removeEventListener("keydown", i), e)
              })(t, s)), (0, g.c)(t) || t.hasAttribute("tabindex") || (t.tabIndex = 0))
            }), o
          }(t, (t, e) => (S(this.node, e, "Start"), (t, {
            success: e
          }) => S(this.node, t, e ? "End" : "Cancel")), {
            useGlobalTarget: e,
            stopPropagation: !1 === n?.tap
          })
        }
        unmount() {}
      }
      const E = new WeakMap,
        k = new WeakMap,
        A = t => {
          const e = E.get(t.target);
          e && e(t)
        },
        M = t => {
          t.forEach(A)
        };
      const C = {
        some: 0,
        all: 1
      };
      class V extends s.X {
        constructor() {
          super(...arguments), this.hasEnteredView = !1, this.isInView = !1
        }
        startObserver() {
          this.stopObserver?.();
          const {
            viewport: t = {}
          } = this.node.getProps(), {
            root: e,
            margin: n,
            amount: i = "some",
            once: s
          } = t, o = {
            root: e ? e.current : void 0,
            rootMargin: n,
            threshold: "number" == typeof i ? i : C[i]
          };
          this.stopObserver = function(t, e, n) {
            const i = function({
              root: t,
              ...e
            }) {
              const n = t || document;
              k.has(n) || k.set(n, {});
              const i = k.get(n),
                s = JSON.stringify(e);
              return i[s] || (i[s] = new IntersectionObserver(M, {
                root: t,
                ...e
              })), i[s]
            }(e);
            return E.set(t, n), i.observe(t), () => {
              E.delete(t), i.unobserve(t)
            }
          }(this.node.current, o, t => {
            const {
              isIntersecting: e
            } = t;
            if (this.isInView === e) return;
            if (this.isInView = e, s && !e && this.hasEnteredView) return;
            e && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", e);
            const {
              onViewportEnter: n,
              onViewportLeave: i
            } = this.node.getProps(), o = e ? n : i;
            o && o(t)
          })
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
        unmount() {
          this.stopObserver?.(), this.hasEnteredView = !1, this.isInView = !1
        }
      }
      const D = {
        inView: {
          Feature: V
        },
        tap: {
          Feature: P
        },
        focus: {
          Feature: p
        },
        hover: {
          Feature: c
        }
      }
    },
    69783(t, e, n) {
      "use strict";
      n.d(e, {
        Y: () => o
      });
      var i = n(93577),
        s = n(67349);

      function o(t) {
        const e = (0, s.j)();
        for (const n in t) e[n] = {
          ...e[n],
          ...t[n]
        };
        (0, i.lr)(e)
      }
    },
    17491(t, e, n) {
      "use strict";
      n.d(e, {
        H: () => H
      });
      var i = n(39793),
        s = n(93082),
        o = n(25938),
        r = n(30997);
      const a = (0, s.createContext)({
          transformPagePoint: t => t,
          isStatic: !1,
          reducedMotion: "never"
        }),
        l = (0, s.createContext)({});
      var u = n(46086),
        c = n(10450);

      function h(t) {
        return Array.isArray(t) ? t.join(" ") : t
      }
      var d = n(80525),
        p = n(32050),
        m = n(50100);

      function f(t, e, n) {
        for (const i in e)(0, d.S)(e[i]) || (0, p.z)(i, n) || (t[i] = e[i])
      }

      function v(t, e) {
        const n = {},
          i = function(t, e) {
            const n = {};
            return f(n, t.style || {}, t), Object.assign(n, function({
              transformTemplate: t
            }, e) {
              return (0, s.useMemo)(() => {
                const n = {
                  style: {},
                  transform: {},
                  transformOrigin: {},
                  vars: {}
                };
                return (0, m.O)(n, e, t), Object.assign({}, n.vars, n.style)
              }, [e])
            }(t, e)), n
          }(t, e);
        return t.drag && !1 !== t.dragListener && (n.draggable = !1, i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none", i.touchAction = !0 === t.drag ? "none" : "pan-" + ("x" === t.drag ? "y" : "x")), void 0 === t.tabIndex && (t.onTap || t.onTapStart || t.whileTap) && (n.tabIndex = 0), n.style = i, n
      }
      var g = n(4951),
        y = n(73560);

      function x(t, e, n, i) {
        const o = (0, s.useMemo)(() => {
          const n = {
            style: {},
            transform: {},
            transformOrigin: {},
            vars: {},
            attrs: {}
          };
          return (0, g.B)(n, e, (0, y.n)(i), t.transformTemplate, t.style), {
            ...n.attrs,
            style: {
              ...n.style
            }
          }
        }, [e]);
        if (t.style) {
          const e = {};
          f(e, t.style, t), o.style = {
            ...e,
            ...o.style
          }
        }
        return o
      }
      const w = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "propagate", "ignoreStrict", "viewport"]);

      function T(t) {
        return t.startsWith("while") || t.startsWith("drag") && "draggable" !== t || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || w.has(t)
      }
      let b = t => !T(t);
      try {
        "function" == typeof(S = require("@emotion/is-prop-valid").default) && (b = t => t.startsWith("on") ? !T(t) : S(t))
      } catch {}
      var S, P = n(64350);

      function E(t, e, n, {
        latestValues: i
      }, o, r = !1, a) {
        const l = (a ?? (0, P.Q)(t) ? x : v)(e, i, o, t),
          u = function(t, e, n) {
            const i = {};
            for (const s in t) "values" === s && "object" == typeof t.values || (0, d.S)(t[s]) || (b(s) || !0 === n && T(s) || !e && !T(s) || t.draggable && s.startsWith("onDrag")) && (i[s] = t[s]);
            return i
          }(e, "string" == typeof t, r),
          c = t !== s.Fragment ? {
            ...u,
            ...l,
            ref: n
          } : {},
          {
            children: h
          } = e,
          p = (0, s.useMemo)(() => (0, d.S)(h) ? h.get() : h, [h]);
        return (0, s.createElement)(t, {
          ...c,
          children: p
        })
      }
      var k = n(16973),
        A = n(23945),
        M = n(57873),
        C = n(23836),
        V = n(13614);

      function D(t, e, n, i) {
        const s = {},
          o = i(t, {});
        for (const t in o) s[t] = (0, A.u)(o[t]);
        let {
          initial: r,
          animate: a
        } = t;
        const l = (0, u.e)(t),
          c = (0, u.O)(t);
        e && c && !l && !1 !== t.inherit && (void 0 === r && (r = e.initial), void 0 === a && (a = e.animate));
        let h = !!n && !1 === n.initial;
        h = h || !1 === r;
        const d = h ? a : r;
        if (d && "boolean" != typeof d && !(0, M.N)(d)) {
          const e = Array.isArray(d) ? d : [d];
          for (let n = 0; n < e.length; n++) {
            const i = (0, C.a)(t, e[n]);
            if (i) {
              const {
                transitionEnd: t,
                transition: e,
                ...n
              } = i;
              for (const t in n) {
                let e = n[t];
                Array.isArray(e) && (e = e[h ? e.length - 1 : 0]), null !== e && (s[t] = e)
              }
              for (const e in t) s[e] = t[e]
            }
          }
        }
        return s
      }
      const R = t => (e, n) => {
          const i = (0, s.useContext)(l),
            o = (0, s.useContext)(V.t),
            r = () => function({
              scrapeMotionValuesFromProps: t,
              createRenderState: e
            }, n, i, s) {
              return {
                latestValues: D(n, i, s, t),
                renderState: e()
              }
            }(t, e, i, o);
          return n ? r() : function(t) {
            const e = (0, s.useRef)(null);
            return null === e.current && (e.current = t()), e.current
          }(r)
        },
        L = R({
          scrapeMotionValuesFromProps: k.x,
          createRenderState: () => ({
            style: {},
            transform: {},
            transformOrigin: {},
            vars: {}
          })
        }),
        B = R({
          scrapeMotionValuesFromProps: n(7372).x,
          createRenderState: () => ({
            style: {},
            transform: {},
            transformOrigin: {},
            vars: {},
            attrs: {}
          })
        });
      var j = n(67349),
        I = n(69783);
      const F = Symbol.for("motionComponentSymbol");

      function O(t, e, n) {
        const i = (0, s.useRef)(n);
        (0, s.useInsertionEffect)(() => {
          i.current = n
        });
        const o = (0, s.useRef)(null);
        return (0, s.useCallback)(n => {
          n && t.onMount?.(n), e && (n ? e.mount(n) : e.unmount());
          const s = i.current;
          if ("function" == typeof s)
            if (n) {
              const t = s(n);
              "function" == typeof t && (o.current = t)
            } else o.current ? (o.current(), o.current = null) : s(n);
          else s && (s.current = n)
        }, [e])
      }
      var U = n(2911),
        W = n(71062),
        N = n(6584);
      const X = "undefined" != typeof window ? s.useLayoutEffect : s.useEffect;

      function $(t, e, n, i, o, u) {
        const {
          visualElement: c
        } = (0, s.useContext)(l), h = (0, s.useContext)(r.Y), d = (0, s.useContext)(V.t), p = (0, s.useContext)(a), m = p.reducedMotion, f = p.skipAnimations, v = (0, s.useRef)(null), g = (0, s.useRef)(!1);
        i = i || h.renderer, !v.current && i && (v.current = i(t, {
          visualState: e,
          parent: c,
          props: n,
          presenceContext: d,
          blockInitialAnimation: !!d && !1 === d.initial,
          reducedMotionConfig: m,
          skipAnimations: f,
          isSVG: u
        }), g.current && v.current && (v.current.manuallyAnimateOnMount = !0));
        const y = v.current,
          x = (0, s.useContext)(W.N);
        !y || y.projection || !o || "html" !== y.type && "svg" !== y.type || function(t, e, n, i) {
          const {
            layoutId: s,
            layout: o,
            drag: r,
            dragConstraints: a,
            layoutScroll: l,
            layoutRoot: u,
            layoutAnchor: c,
            layoutCrossfade: h
          } = e;
          t.projection = new n(t.latestValues, e["data-framer-portal-id"] ? void 0 : G(t.parent)), t.projection.setOptions({
            layoutId: s,
            layout: o,
            alwaysMeasureLayout: Boolean(r) || a && (0, N.X)(a),
            visualElement: t,
            animationType: "string" == typeof o ? o : "both",
            initialPromotionConfig: i,
            crossfade: h,
            layoutScroll: l,
            layoutRoot: u,
            layoutAnchor: c
          })
        }(v.current, n, o, x);
        const w = (0, s.useRef)(!1);
        (0, s.useInsertionEffect)(() => {
          y && w.current && y.update(n, d)
        });
        const T = n[U.n],
          b = (0, s.useRef)(Boolean(T) && "undefined" != typeof window && !window.MotionHandoffIsComplete?.(T) && window.MotionHasOptimisedAnimation?.(T));
        return X(() => {
          g.current = !0, y && (w.current = !0, window.MotionIsMounted = !0, y.updateFeatures(), y.scheduleRenderMicrotask(), b.current && y.animationState && y.animationState.animateChanges())
        }), (0, s.useEffect)(() => {
          y && (!b.current && y.animationState && y.animationState.animateChanges(), b.current && (queueMicrotask(() => {
            window.MotionHandoffMarkAsComplete?.(T)
          }), b.current = !1), y.enteringChildren = void 0)
        }), y
      }

      function G(t) {
        if (t) return !1 !== t.options.allowProjection ? t.projection : G(t.parent)
      }

      function K(t, {
        forwardMotionProps: e = !1,
        type: n
      } = {}, o, d) {
        o && (0, I.Y)(o);
        const p = n ? "svg" === n : (0, P.Q)(t),
          m = p ? B : L;

        function f(n, o) {
          let f;
          const v = {
              ...(0, s.useContext)(a),
              ...n,
              layoutId: q(n)
            },
            {
              isStatic: g
            } = v,
            y = function(t) {
              const {
                initial: e,
                animate: n
              } = function(t, e) {
                if ((0, u.e)(t)) {
                  const {
                    initial: e,
                    animate: n
                  } = t;
                  return {
                    initial: !1 === e || (0, c.w)(e) ? e : void 0,
                    animate: (0, c.w)(n) ? n : void 0
                  }
                }
                return !1 !== t.inherit ? e : {}
              }(t, (0, s.useContext)(l));
              return (0, s.useMemo)(() => ({
                initial: e,
                animate: n
              }), [h(e), h(n)])
            }(n),
            x = m(n, g);
          if (!g && "undefined" != typeof window) {
            (0, s.useContext)(r.Y).strict;
            const e = function(t) {
              const e = (0, j.j)(),
                {
                  drag: n,
                  layout: i
                } = e;
              if (!n && !i) return {};
              const s = {
                ...n,
                ...i
              };
              return {
                MeasureLayout: n?.isEnabled(t) || i?.isEnabled(t) ? s.MeasureLayout : void 0,
                ProjectionNode: s.ProjectionNode
              }
            }(v);
            f = e.MeasureLayout, y.visualElement = $(t, x, v, d, e.ProjectionNode, p)
          }
          return (0, i.jsxs)(l.Provider, {
            value: y,
            children: [f && y.visualElement ? (0, i.jsx)(f, {
              visualElement: y.visualElement,
              ...v
            }) : null, E(t, n, O(x, y.visualElement, o), x, g, e, p)]
          })
        }
        f.displayName = `motion.${"string"==typeof t?t:`create(${t.displayName??t.name??""})`}`;
        const v = (0, s.forwardRef)(f);
        return v[F] = t, v
      }

      function q({
        layoutId: t
      }) {
        const e = (0, s.useContext)(o.L).id;
        return e && void 0 !== t ? e + "-" + t : t
      }

      function H(t, e) {
        if ("undefined" == typeof Proxy) return K;
        const n = new Map,
          i = (n, i) => K(n, i, t, e);
        return new Proxy((t, e) => i(t, e), {
          get: (s, o) => "create" === o ? i : (n.has(o) || n.set(o, K(o, void 0, t, e)), n.get(o))
        })
      }
    },
    56422(t, e, n) {
      "use strict";
      n.d(e, {
        P: () => He
      });
      var i = n(69553),
        s = n(17491),
        o = n(39475),
        r = n(80425),
        a = n(19759),
        l = n(20673),
        u = n(38831);

      function c(t) {
        return [t("x"), t("y")]
      }
      var h = n(82736),
        d = n(65966);

      function p(t) {
        return t.max - t.min
      }

      function m(t, e, n, i = .5) {
        t.origin = i, t.originPoint = (0, d.k)(e.min, e.max, t.origin), t.scale = p(n) / p(e), t.translate = (0, d.k)(n.min, n.max, t.origin) - t.originPoint, (t.scale >= .9999 && t.scale <= 1.0001 || isNaN(t.scale)) && (t.scale = 1), (t.translate >= -.01 && t.translate <= .01 || isNaN(t.translate)) && (t.translate = 0)
      }

      function f(t, e, n, i) {
        m(t.x, e.x, n.x, i ? i.originX : void 0), m(t.y, e.y, n.y, i ? i.originY : void 0)
      }

      function v(t, e, n, i = 0) {
        const s = i ? (0, d.k)(n.min, n.max, i) : n.min;
        t.min = s + e.min, t.max = t.min + p(e)
      }

      function g(t, e, n, i = 0) {
        const s = i ? (0, d.k)(n.min, n.max, i) : n.min;
        t.min = e.min - s, t.max = t.min + p(e)
      }

      function y(t, e, n, i) {
        g(t.x, e.x, n.x, i?.x), g(t.y, e.y, n.y, i?.y)
      }
      var x = n(67581),
        w = n(60888),
        T = n(98970),
        b = n(7635),
        S = n(83082),
        P = n(37606),
        E = n(82009),
        k = n(20621);

      function A(t) {
        return (0, k.G)(t) && "ownerSVGElement" in t
      }
      var M = n(95286);
      const C = new WeakMap;
      let V;
      const D = (t, e, n) => (i, s) => s && s[0] ? s[0][t + "Size"] : A(i) && "getBBox" in i ? i.getBBox()[e] : i[n],
        R = D("inline", "width", "offsetWidth"),
        L = D("block", "height", "offsetHeight");

      function B({
        target: t,
        borderBoxSize: e
      }) {
        C.get(t)?.forEach(n => {
          n(t, {
            get width() {
              return R(t, e)
            },
            get height() {
              return L(t, e)
            }
          })
        })
      }

      function j(t) {
        t.forEach(B)
      }
      const I = new Set;
      let F;

      function O(t, e) {
        return "function" == typeof t ? (n = t, I.add(n), F || (F = () => {
          const t = {
            get width() {
              return window.innerWidth
            },
            get height() {
              return window.innerHeight
            }
          };
          I.forEach(e => e(t))
        }, window.addEventListener("resize", F)), () => {
          I.delete(n), I.size || "function" != typeof F || (window.removeEventListener("resize", F), F = void 0)
        }) : function(t, e) {
          V || "undefined" != typeof ResizeObserver && (V = new ResizeObserver(j));
          const n = (0, M.K)(t);
          return n.forEach(t => {
            let n = C.get(t);
            n || (n = new Set, C.set(t, n)), n.add(e), V?.observe(t)
          }), () => {
            n.forEach(t => {
              const n = C.get(t);
              n?.delete(e), n?.size || V?.unobserve(t)
            })
          }
        }(t, e);
        var n
      }
      var U = n(35378),
        W = n(27765);

      function N(t, e, n, i) {
        return (0, E.k)(t, e, (0, W.F)(n), i)
      }
      const X = ({
        current: t
      }) => t ? t.ownerDocument.defaultView : null;
      var $ = n(6584),
        G = n(78834),
        K = n(12879),
        q = n(18197);
      const H = (t, e) => Math.abs(t - e),
        Y = new Set(["auto", "scroll"]);
      class z {
        constructor(t, e, {
          transformPagePoint: n,
          contextWindow: i = window,
          dragSnapToOrigin: s = !1,
          distanceThreshold: o = 3,
          element: r
        } = {}) {
          if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.lastRawMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.scrollPositions = new Map, this.removeScrollListeners = null, this.onElementScroll = t => {
              this.handleScroll(t.target)
            }, this.onWindowScroll = () => {
              this.handleScroll(window)
            }, this.updatePoint = () => {
              if (!this.lastMoveEvent || !this.lastMoveEventInfo) return;
              this.lastRawMoveEventInfo && (this.lastMoveEventInfo = _(this.lastRawMoveEventInfo, this.transformPagePoint));
              const t = Z(this.lastMoveEventInfo, this.history),
                e = null !== this.startEvent,
                n = function(t, e) {
                  const n = H(t.x, e.x),
                    i = H(t.y, e.y);
                  return Math.sqrt(n ** 2 + i ** 2)
                }(t.offset, {
                  x: 0,
                  y: 0
                }) >= this.distanceThreshold;
              if (!e && !n) return;
              const {
                point: i
              } = t, {
                timestamp: s
              } = x.uv;
              this.history.push({
                ...i,
                timestamp: s
              });
              const {
                onStart: o,
                onMove: r
              } = this.handlers;
              e || (o && o(this.lastMoveEvent, t), this.startEvent = this.lastMoveEvent), r && r(this.lastMoveEvent, t)
            }, this.handlePointerMove = (t, e) => {
              this.lastMoveEvent = t, this.lastRawMoveEventInfo = e, this.lastMoveEventInfo = _(e, this.transformPagePoint), x.Gt.update(this.updatePoint, !0)
            }, this.handlePointerUp = (t, e) => {
              this.end();
              const {
                onEnd: n,
                onSessionEnd: i,
                resumeAnimation: s
              } = this.handlers;
              if (!this.dragSnapToOrigin && this.startEvent || s && s(), !this.lastMoveEvent || !this.lastMoveEventInfo) return;
              const o = Z("pointercancel" === t.type ? this.lastMoveEventInfo : _(e, this.transformPagePoint), this.history);
              this.startEvent && n && n(t, o), i && i(t, o)
            }, !(0, G.M)(t)) return;
          this.dragSnapToOrigin = s, this.handlers = e, this.transformPagePoint = n, this.distanceThreshold = o, this.contextWindow = i || window;
          const a = _((0, W.e)(t), this.transformPagePoint),
            {
              point: l
            } = a,
            {
              timestamp: u
            } = x.uv;
          this.history = [{
            ...l,
            timestamp: u
          }];
          const {
            onSessionStart: c
          } = e;
          c && c(t, Z(a, this.history));
          const h = {
            passive: !0,
            capture: !0
          };
          this.removeListeners = (0, K.F)(N(this.contextWindow, "pointermove", this.handlePointerMove, h), N(this.contextWindow, "pointerup", this.handlePointerUp, h), N(this.contextWindow, "pointercancel", this.handlePointerUp, h)), r && this.startScrollTracking(r)
        }
        startScrollTracking(t) {
          let e = t.parentElement;
          for (; e;) {
            const t = getComputedStyle(e);
            (Y.has(t.overflowX) || Y.has(t.overflowY)) && this.scrollPositions.set(e, {
              x: e.scrollLeft,
              y: e.scrollTop
            }), e = e.parentElement
          }
          this.scrollPositions.set(window, {
            x: window.scrollX,
            y: window.scrollY
          }), window.addEventListener("scroll", this.onElementScroll, {
            capture: !0
          }), window.addEventListener("scroll", this.onWindowScroll), this.removeScrollListeners = () => {
            window.removeEventListener("scroll", this.onElementScroll, {
              capture: !0
            }), window.removeEventListener("scroll", this.onWindowScroll)
          }
        }
        handleScroll(t) {
          const e = this.scrollPositions.get(t);
          if (!e) return;
          const n = t === window,
            i = n ? {
              x: window.scrollX,
              y: window.scrollY
            } : {
              x: t.scrollLeft,
              y: t.scrollTop
            },
            s = i.x - e.x,
            o = i.y - e.y;
          0 === s && 0 === o || (n ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += s, this.lastMoveEventInfo.point.y += o) : this.history.length > 0 && (this.history[0].x -= s, this.history[0].y -= o), this.scrollPositions.set(t, i), x.Gt.update(this.updatePoint, !0))
        }
        updateHandlers(t) {
          this.handlers = t
        }
        end() {
          this.removeListeners && this.removeListeners(), this.removeScrollListeners && this.removeScrollListeners(), this.scrollPositions.clear(), (0, x.WG)(this.updatePoint)
        }
      }

      function _(t, e) {
        return e ? {
          point: e(t.point)
        } : t
      }

      function Q(t, e) {
        return {
          x: t.x - e.x,
          y: t.y - e.y
        }
      }

      function Z({
        point: t
      }, e) {
        return {
          point: t,
          delta: Q(t, tt(e)),
          offset: Q(t, J(e)),
          velocity: et(e, .1)
        }
      }

      function J(t) {
        return t[0]
      }

      function tt(t) {
        return t[t.length - 1]
      }

      function et(t, e) {
        if (t.length < 2) return {
          x: 0,
          y: 0
        };
        let n = t.length - 1,
          i = null;
        const s = tt(t);
        for (; n >= 0 && (i = t[n], !(s.timestamp - i.timestamp > (0, q.f)(e)));) n--;
        if (!i) return {
          x: 0,
          y: 0
        };
        i === t[0] && t.length > 2 && s.timestamp - i.timestamp > 2 * (0, q.f)(e) && (i = t[1]);
        const o = (0, q.X)(s.timestamp - i.timestamp);
        if (0 === o) return {
          x: 0,
          y: 0
        };
        const r = {
          x: (s.x - i.x) / o,
          y: (s.y - i.y) / o
        };
        return r.x === 1 / 0 && (r.x = 0), r.y === 1 / 0 && (r.y = 0), r
      }
      var nt = n(89798),
        it = n(16340);

      function st(t, e, n) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== n ? t.max + n - (t.max - t.min) : void 0
        }
      }

      function ot(t, e) {
        let n = e.min - t.min,
          i = e.max - t.max;
        return e.max - e.min < t.max - t.min && ([n, i] = [i, n]), {
          min: n,
          max: i
        }
      }

      function rt(t, e, n) {
        return {
          min: at(t, e),
          max: at(t, n)
        }
      }

      function at(t, e) {
        return "number" == typeof t ? t : t[e] || 0
      }
      const lt = new WeakMap;
      class ut {
        constructor(t) {
          this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
            x: 0,
            y: 0
          }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = (0, l.ge)(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = t
        }
        start(t, {
          snapToCursor: e = !1,
          distanceThreshold: n
        } = {}) {
          const {
            presenceContext: i
          } = this.visualElement;
          if (i && !1 === i.isPresent) return;
          const {
            dragSnapToOrigin: s
          } = this.getProps();
          this.panSession = new z(t, {
            onSessionStart: t => {
              e && this.snapToCursor((0, W.e)(t).point), this.stopAnimation()
            },
            onStart: (t, e) => {
              const {
                drag: n,
                dragPropagation: i,
                onDragStart: s
              } = this.getProps();
              if (n && !i && (this.openDragLock && this.openDragLock(), this.openDragLock = "x" === (o = n) || "y" === o ? u.I[o] ? null : (u.I[o] = !0, () => {
                  u.I[o] = !1
                }) : u.I.x || u.I.y ? null : (u.I.x = u.I.y = !0, () => {
                  u.I.x = u.I.y = !1
                }), !this.openDragLock)) return;
              var o;
              this.latestPointerEvent = t, this.latestPanInfo = e, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), c(t => {
                let e = this.getAxisMotionValue(t).get() || 0;
                if (h.KN.test(e)) {
                  const {
                    projection: n
                  } = this.visualElement;
                  if (n && n.layout) {
                    const i = n.layout.layoutBox[t];
                    i && (e = p(i) * (parseFloat(e) / 100))
                  }
                }
                this.originPoint[t] = e
              }), s && x.Gt.update(() => s(t, e), !1, !0), (0, w.g)(this.visualElement, "transform");
              const {
                animationState: r
              } = this.visualElement;
              r && r.setActive("whileDrag", !0)
            },
            onMove: (t, e) => {
              this.latestPointerEvent = t, this.latestPanInfo = e;
              const {
                dragPropagation: n,
                dragDirectionLock: i,
                onDirectionLock: s,
                onDrag: o
              } = this.getProps();
              if (!n && !this.openDragLock) return;
              const {
                offset: r
              } = e;
              if (i && null === this.currentDirection) return this.currentDirection = function(t, e = 10) {
                let n = null;
                return Math.abs(t.y) > e ? n = "y" : Math.abs(t.x) > e && (n = "x"), n
              }(r), void(null !== this.currentDirection && s && s(this.currentDirection));
              this.updateAxis("x", e.point, r), this.updateAxis("y", e.point, r), this.visualElement.render(), o && x.Gt.update(() => o(t, e), !1, !0)
            },
            onSessionEnd: (t, e) => {
              this.latestPointerEvent = t, this.latestPanInfo = e, this.stop(t, e), this.latestPointerEvent = null, this.latestPanInfo = null
            },
            resumeAnimation: () => {
              const {
                dragSnapToOrigin: t
              } = this.getProps();
              (t || this.constraints) && this.startAnimation({
                x: 0,
                y: 0
              })
            }
          }, {
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: s,
            distanceThreshold: n,
            contextWindow: X(this.visualElement),
            element: this.visualElement.current
          })
        }
        stop(t, e) {
          const n = t || this.latestPointerEvent,
            i = e || this.latestPanInfo,
            s = this.isDragging;
          if (this.cancel(), !s || !i || !n) return;
          const {
            velocity: o
          } = i;
          this.startAnimation(o);
          const {
            onDragEnd: r
          } = this.getProps();
          r && x.Gt.postRender(() => r(n, i))
        }
        cancel() {
          this.isDragging = !1;
          const {
            projection: t,
            animationState: e
          } = this.visualElement;
          t && (t.isAnimationBlocked = !1), this.endPanSession();
          const {
            dragPropagation: n
          } = this.getProps();
          !n && this.openDragLock && (this.openDragLock(), this.openDragLock = null), e && e.setActive("whileDrag", !1)
        }
        endPanSession() {
          this.panSession && this.panSession.end(), this.panSession = void 0
        }
        updateAxis(t, e, n) {
          const {
            drag: i
          } = this.getProps();
          if (!n || !ht(t, i, this.currentDirection)) return;
          const s = this.getAxisMotionValue(t);
          let o = this.originPoint[t] + n[t];
          this.constraints && this.constraints[t] && (o = function(t, {
            min: e,
            max: n
          }, i) {
            return void 0 !== e && t < e ? t = i ? (0, d.k)(e, t, i.min) : Math.max(t, e) : void 0 !== n && t > n && (t = i ? (0, d.k)(n, t, i.max) : Math.min(t, n)), t
          }(o, this.constraints[t], this.elastic[t])), s.set(o)
        }
        resolveConstraints() {
          const {
            dragConstraints: t,
            dragElastic: e
          } = this.getProps(), n = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection?.layout, i = this.constraints;
          t && (0, $.X)(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : this.constraints = !(!t || !n) && function(t, {
            top: e,
            left: n,
            bottom: i,
            right: s
          }) {
            return {
              x: st(t.x, n, s),
              y: st(t.y, e, i)
            }
          }(n.layoutBox, t), this.elastic = function(t = .35) {
            return !1 === t ? t = 0 : !0 === t && (t = .35), {
              x: rt(t, "left", "right"),
              y: rt(t, "top", "bottom")
            }
          }(e), i !== this.constraints && !(0, $.X)(t) && n && this.constraints && !this.hasMutatedConstraints && c(t => {
            !1 !== this.constraints && this.getAxisMotionValue(t) && (this.constraints[t] = function(t, e) {
              const n = {};
              return void 0 !== e.min && (n.min = e.min - t.min), void 0 !== e.max && (n.max = e.max - t.min), n
            }(n.layoutBox[t], this.constraints[t]))
          })
        }
        resolveRefConstraints() {
          const {
            dragConstraints: t,
            onMeasureDragConstraints: e
          } = this.getProps();
          if (!t || !(0, $.X)(t)) return !1;
          const n = t.current;
          (0, U.V)(null !== n, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.", "drag-constraints-ref");
          const {
            projection: i
          } = this.visualElement;
          if (!i || !i.layout) return !1;
          i.root && (i.root.scroll = void 0, i.root.updateScroll());
          const s = (0, T.L)(n, i.root, this.visualElement.getTransformPagePoint());
          let o = function(t, e) {
            return {
              x: ot(t.x, e.x),
              y: ot(t.y, e.y)
            }
          }(i.layout.layoutBox, s);
          if (e) {
            const t = e((0, b.pA)(o));
            this.hasMutatedConstraints = !!t, t && (o = (0, b.FY)(t))
          }
          return o
        }
        startAnimation(t) {
          const {
            drag: e,
            dragMomentum: n,
            dragElastic: i,
            dragTransition: s,
            dragSnapToOrigin: o,
            onDragTransitionEnd: r
          } = this.getProps(), a = this.constraints || {}, l = c(r => {
            if (!ht(r, e, this.currentDirection)) return;
            let l = a && a[r] || {};
            !0 !== o && o !== r || (l = {
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
                ...s,
                ...l
              };
            return this.startAxisValueAnimation(r, h)
          });
          return Promise.all(l).then(r)
        }
        startAxisValueAnimation(t, e) {
          const n = this.getAxisMotionValue(t);
          return (0, w.g)(this.visualElement, t), n.start((0, S.f)(t, n, 0, e, this.visualElement, !1))
        }
        stopAnimation() {
          c(t => this.getAxisMotionValue(t).stop())
        }
        getAxisMotionValue(t) {
          const e = `_drag${t.toUpperCase()}`;
          return this.visualElement.getProps()[e] || this.visualElement.getValue(t, this.visualElement.latestValues[t] ?? 0)
        }
        snapToCursor(t) {
          c(e => {
            const {
              drag: n
            } = this.getProps();
            if (!ht(e, n, this.currentDirection)) return;
            const {
              projection: i
            } = this.visualElement, s = this.getAxisMotionValue(e);
            if (i && i.layout) {
              const {
                min: n,
                max: o
              } = i.layout.layoutBox[e], r = s.get() || 0;
              s.set(t[e] - (0, d.k)(n, o, .5) + r)
            }
          })
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          const {
            drag: t,
            dragConstraints: e
          } = this.getProps(), {
            projection: n
          } = this.visualElement;
          if (!(0, $.X)(e) || !n || !this.constraints) return;
          this.stopAnimation();
          const i = {
            x: 0,
            y: 0
          };
          c(t => {
            const e = this.getAxisMotionValue(t);
            if (e && !1 !== this.constraints) {
              const n = e.get();
              i[t] = function(t, e) {
                let n = .5;
                const i = p(t),
                  s = p(e);
                return s > i ? n = (0, nt.q)(e.min, e.max - i, t.min) : i > s && (n = (0, nt.q)(t.min, t.max - s, e.min)), (0, it.q)(0, 1, n)
              }({
                min: n,
                max: n
              }, this.constraints[t])
            }
          });
          const {
            transformTemplate: s
          } = this.visualElement.getProps();
          this.visualElement.current.style.transform = s ? s({}, "") : "none", n.root && n.root.updateScroll(), n.updateLayout(), this.constraints = !1, this.resolveConstraints(), c(e => {
            if (!ht(e, t, null)) return;
            const n = this.getAxisMotionValue(e),
              {
                min: s,
                max: o
              } = this.constraints[e];
            n.set((0, d.k)(s, o, i[e]))
          }), this.visualElement.render()
        }
        addListeners() {
          if (!this.visualElement.current) return;
          lt.set(this.visualElement, this);
          const t = this.visualElement.current,
            e = N(t, "pointerdown", e => {
              const {
                drag: n,
                dragListener: i = !0
              } = this.getProps(), s = e.target, o = s !== t && (0, P.a)(s);
              n && i && !o && this.start(e)
            });
          let n;
          const i = () => {
              const {
                dragConstraints: e
              } = this.getProps();
              (0, $.X)(e) && e.current && (this.constraints = this.resolveRefConstraints(), n || (n = function(t, e, n) {
                const i = O(t, ct(n)),
                  s = O(e, ct(n));
                return () => {
                  i(), s()
                }
              }(t, e.current, () => this.scalePositionWithinConstraints())))
            },
            {
              projection: s
            } = this.visualElement,
            o = s.addEventListener("measure", i);
          s && !s.layout && (s.root && s.root.updateScroll(), s.updateLayout()), x.Gt.read(i);
          const r = (0, E.k)(window, "resize", () => this.scalePositionWithinConstraints()),
            a = s.addEventListener("didUpdate", ({
              delta: t,
              hasLayoutChanged: e
            }) => {
              this.isDragging && e && (c(e => {
                const n = this.getAxisMotionValue(e);
                n && (this.originPoint[e] += t[e].translate, n.set(n.get() + t[e].translate))
              }), this.visualElement.render())
            });
          return () => {
            r(), e(), o(), a && a(), n && n()
          }
        }
        getProps() {
          const t = this.visualElement.getProps(),
            {
              drag: e = !1,
              dragDirectionLock: n = !1,
              dragPropagation: i = !1,
              dragConstraints: s = !1,
              dragElastic: o = .35,
              dragMomentum: r = !0
            } = t;
          return {
            ...t,
            drag: e,
            dragDirectionLock: n,
            dragPropagation: i,
            dragConstraints: s,
            dragElastic: o,
            dragMomentum: r
          }
        }
      }

      function ct(t) {
        let e = !0;
        return () => {
          e ? e = !1 : t()
        }
      }

      function ht(t, e, n) {
        return !(!0 !== e && e !== t || null !== n && n !== t)
      }
      class dt extends r.X {
        constructor(t) {
          super(t), this.removeGroupControls = a.l, this.removeListeners = a.l, this.controls = new ut(t)
        }
        mount() {
          const {
            dragControls: t
          } = this.node.getProps();
          t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || a.l
        }
        update() {
          const {
            dragControls: t
          } = this.node.getProps(), {
            dragControls: e
          } = this.node.prevProps || {};
          t !== e && (this.removeGroupControls(), t && (this.removeGroupControls = t.subscribe(this.controls)))
        }
        unmount() {
          this.removeGroupControls(), this.removeListeners(), this.controls.isDragging || this.controls.endPanSession()
        }
      }
      const pt = t => (e, n) => {
        t && x.Gt.update(() => t(e, n), !1, !0)
      };
      class mt extends r.X {
        constructor() {
          super(...arguments), this.removePointerDownListener = a.l
        }
        onPointerDown(t) {
          this.session = new z(t, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: X(this.node)
          })
        }
        createPanHandlers() {
          const {
            onPanSessionStart: t,
            onPanStart: e,
            onPan: n,
            onPanEnd: i
          } = this.node.getProps();
          return {
            onSessionStart: pt(t),
            onStart: pt(e),
            onMove: pt(n),
            onEnd: (t, e) => {
              delete this.session, i && x.Gt.postRender(() => i(t, e))
            }
          }
        }
        mount() {
          this.removePointerDownListener = N(this.node.current, "pointerdown", t => this.onPointerDown(t))
        }
        update() {
          this.session && this.session.updateHandlers(this.createPanHandlers())
        }
        unmount() {
          this.removePointerDownListener(), this.session && this.session.end()
        }
      }
      var ft = n(39793);
      const vt = {
        hasAnimatedSinceResize: !0,
        hasEverUpdated: !1
      };
      var gt = n(47553),
        yt = n(93082),
        xt = n(13614),
        wt = n(25938),
        Tt = n(71062);
      let bt = !1;
      class St extends yt.Component {
        componentDidMount() {
          const {
            visualElement: t,
            layoutGroup: e,
            switchLayoutGroup: n,
            layoutId: i
          } = this.props, {
            projection: s
          } = t;
          s && (e.group && e.group.add(s), n && n.register && i && n.register(s), bt && s.root.didUpdate(), s.addEventListener("animationComplete", () => {
            this.safeToRemove()
          }), s.setOptions({
            ...s.options,
            layoutDependency: this.props.layoutDependency,
            onExitComplete: () => this.safeToRemove()
          })), vt.hasEverUpdated = !0
        }
        getSnapshotBeforeUpdate(t) {
          const {
            layoutDependency: e,
            visualElement: n,
            drag: i,
            isPresent: s
          } = this.props, {
            projection: o
          } = n;
          return o ? (o.isPresent = s, t.layoutDependency !== e && o.setOptions({
            ...o.options,
            layoutDependency: e
          }), bt = !0, i || t.layoutDependency !== e || void 0 === e || t.isPresent !== s ? o.willUpdate() : this.safeToRemove(), t.isPresent !== s && (s ? o.promote() : o.relegate() || x.Gt.postRender(() => {
            const t = o.getStack();
            t && t.members.length || this.safeToRemove()
          })), null) : null
        }
        componentDidUpdate() {
          const {
            visualElement: t,
            layoutAnchor: e
          } = this.props, {
            projection: n
          } = t;
          n && (n.options.layoutAnchor = e, n.root.didUpdate(), gt.k.postRender(() => {
            !n.currentAnimation && n.isLead() && this.safeToRemove()
          }))
        }
        componentWillUnmount() {
          const {
            visualElement: t,
            layoutGroup: e,
            switchLayoutGroup: n
          } = this.props, {
            projection: i
          } = t;
          bt = !0, i && (i.scheduleCheckAfterUnmount(), e && e.group && e.group.remove(i), n && n.deregister && n.deregister(i))
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

      function Pt(t) {
        const [e, n] = function(t = !0) {
          const e = (0, yt.useContext)(xt.t);
          if (null === e) return [!0, null];
          const {
            isPresent: n,
            onExitComplete: i,
            register: s
          } = e, o = (0, yt.useId)();
          (0, yt.useEffect)(() => {
            if (t) return s(o)
          }, [t]);
          const r = (0, yt.useCallback)(() => t && i && i(o), [o, i, t]);
          return !n && i ? [!1, r] : [!0]
        }(), i = (0, yt.useContext)(wt.L);
        return (0, ft.jsx)(St, {
          ...t,
          layoutGroup: i,
          switchLayoutGroup: (0, yt.useContext)(Tt.N),
          isPresent: e,
          safeToRemove: n
        })
      }
      var Et = n(61010),
        kt = n(7356),
        At = n(80525),
        Mt = n(90129),
        Ct = n(30637),
        Vt = n(3451),
        Dt = n(28966);
      const Rt = {
        value: null,
        addProjectionMetrics: null
      };
      var Lt = n(23945),
        Bt = n(16214);
      const jt = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"],
        It = jt.length,
        Ft = t => "string" == typeof t ? parseFloat(t) : t,
        Ot = t => "number" == typeof t || h.px.test(t);

      function Ut(t, e) {
        return void 0 !== t[e] ? t[e] : t.borderRadius
      }
      const Wt = Xt(0, .5, Bt.yT),
        Nt = Xt(.5, .95, a.l);

      function Xt(t, e, n) {
        return i => i < t ? 0 : i > e ? 1 : n((0, nt.q)(t, e, i))
      }

      function $t(t, e) {
        t.min = e.min, t.max = e.max
      }

      function Gt(t, e) {
        $t(t.x, e.x), $t(t.y, e.y)
      }

      function Kt(t, e) {
        t.translate = e.translate, t.scale = e.scale, t.originPoint = e.originPoint, t.origin = e.origin
      }
      var qt = n(43684);

      function Ht(t, e, n, i, s) {
        return t -= e, t = (0, qt.hq)(t, 1 / n, i), void 0 !== s && (t = (0, qt.hq)(t, 1 / s, i)), t
      }

      function Yt(t, e, [n, i, s], o, r) {
        ! function(t, e = 0, n = 1, i = .5, s, o = t, r = t) {
          if (h.KN.test(e) && (e = parseFloat(e), e = (0, d.k)(r.min, r.max, e / 100) - r.min), "number" != typeof e) return;
          let a = (0, d.k)(o.min, o.max, i);
          t === o && (a -= e), t.min = Ht(t.min, e, n, a, s), t.max = Ht(t.max, e, n, a, s)
        }(t, e[n], e[i], e[s], e.scale, o, r)
      }
      const zt = ["x", "scaleX", "originX"],
        _t = ["y", "scaleY", "originY"];

      function Qt(t, e, n, i) {
        Yt(t.x, e, zt, n ? n.x : void 0, i ? i.x : void 0), Yt(t.y, e, _t, n ? n.y : void 0, i ? i.y : void 0)
      }

      function Zt(t) {
        return 0 === t.translate && 1 === t.scale
      }

      function Jt(t) {
        return Zt(t.x) && Zt(t.y)
      }

      function te(t, e) {
        return t.min === e.min && t.max === e.max
      }

      function ee(t, e) {
        return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max)
      }

      function ne(t, e) {
        return ee(t.x, e.x) && ee(t.y, e.y)
      }

      function ie(t) {
        return p(t.x) / p(t.y)
      }

      function se(t, e) {
        return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint
      }
      var oe = n(17002);
      class re {
        constructor() {
          this.members = []
        }
        add(t) {
          (0, oe.Kq)(this.members, t);
          for (let e = this.members.length - 1; e >= 0; e--) {
            const n = this.members[e];
            if (n === t || n === this.lead || n === this.prevLead) continue;
            const i = n.instance;
            i && !1 !== i.isConnected || n.snapshot || ((0, oe.Ai)(this.members, n), n.unmount())
          }
          t.scheduleRender()
        }
        remove(t) {
          if ((0, oe.Ai)(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
            const t = this.members[this.members.length - 1];
            t && this.promote(t)
          }
        }
        relegate(t) {
          for (let e = this.members.indexOf(t) - 1; e >= 0; e--) {
            const t = this.members[e];
            if (!1 !== t.isPresent && !1 !== t.instance?.isConnected) return this.promote(t), !0
          }
          return !1
        }
        promote(t, e) {
          const n = this.lead;
          if (t !== n && (this.prevLead = n, this.lead = t, t.show(), n)) {
            n.updateSnapshot(), t.scheduleRender();
            const {
              layoutDependency: i
            } = n.options, {
              layoutDependency: s
            } = t.options;
            void 0 !== i && i === s || (t.resumeFrom = n, e && (n.preserveOpacity = !0), n.snapshot && (t.snapshot = n.snapshot, t.snapshot.latestValues = n.animationValues || n.latestValues), t.root?.isUpdating && (t.isLayoutDirty = !0)), !1 === t.options.crossfade && n.hide()
          }
        }
        exitAnimationComplete() {
          this.members.forEach(t => {
            t.options.onExitComplete?.(), t.resumingFrom?.options.onExitComplete?.()
          })
        }
        scheduleRender() {
          this.members.forEach(t => t.instance && t.scheduleRender(!1))
        }
        removeLeadSnapshot() {
          this.lead?.snapshot && (this.lead.snapshot = void 0)
        }
      }
      const ae = (t, e) => t.depth - e.depth;
      class le {
        constructor() {
          this.children = [], this.isDirty = !1
        }
        add(t) {
          (0, oe.Kq)(this.children, t), this.isDirty = !0
        }
        remove(t) {
          (0, oe.Ai)(this.children, t), this.isDirty = !0
        }
        forEach(t) {
          this.isDirty && this.children.sort(ae), this.isDirty = !1, this.children.forEach(t)
        }
      }
      var ue = n(57537);
      const ce = {
          nodes: 0,
          calculatedTargetDeltas: 0,
          calculatedProjections: 0
        },
        he = ["", "X", "Y", "Z"];
      let de = 0;

      function pe(t, e, n, i) {
        const {
          latestValues: s
        } = e;
        s[t] && (n[t] = s[t], e.setStaticValue(t, 0), i && (i[t] = 0))
      }

      function me(t) {
        if (t.hasCheckedOptimisedAppear = !0, t.root === t) return;
        const {
          visualElement: e
        } = t.options;
        if (!e) return;
        const n = (0, Mt.P)(e);
        if (window.MotionHasOptimisedAnimation(n, "transform")) {
          const {
            layout: e,
            layoutId: i
          } = t.options;
          window.MotionCancelOptimisedAnimation(n, "transform", x.Gt, !(e || i))
        }
        const {
          parent: i
        } = t;
        i && !i.hasCheckedOptimisedAppear && me(i)
      }

      function fe({
        attachResizeListener: t,
        defaultParent: e,
        measureScroll: n,
        checkIsScrollRoot: i,
        resetTransform: s
      }) {
        return class {
          constructor(t = {}, n = e?.()) {
            this.id = de++, this.animationId = 0, this.animationCommitId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
              x: 1,
              y: 1
            }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.layoutVersion = 0, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
              this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
            }, this.updateProjection = () => {
              this.projectionUpdateScheduled = !1, Rt.value && (ce.nodes = ce.calculatedTargetDeltas = ce.calculatedProjections = 0), this.nodes.forEach(ye), this.nodes.forEach(Ae), this.nodes.forEach(Me), this.nodes.forEach(xe), Rt.addProjectionMetrics && Rt.addProjectionMetrics(ce)
            }, this.resolvedRelativeTargetAt = 0, this.linkedParentVersion = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = t, this.root = n ? n.root || n : this, this.path = n ? [...n.path, n] : [], this.parent = n, this.depth = n ? n.depth + 1 : 0;
            for (let t = 0; t < this.path.length; t++) this.path[t].shouldResetTransform = !0;
            this.root === this && (this.nodes = new le)
          }
          addEventListener(t, e) {
            return this.eventHandlers.has(t) || this.eventHandlers.set(t, new Et.v), this.eventHandlers.get(t).add(e)
          }
          notifyListeners(t, ...e) {
            const n = this.eventHandlers.get(t);
            n && n.notify(...e)
          }
          hasListeners(t) {
            return this.eventHandlers.has(t)
          }
          mount(e) {
            if (this.instance) return;
            var n;
            this.isSVG = A(e) && !(A(n = e) && "svg" === n.tagName), this.instance = e;
            const {
              layoutId: i,
              layout: s,
              visualElement: o
            } = this.options;
            if (o && !o.current && o.mount(e), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (s || i) && (this.isLayoutDirty = !0), t) {
              let n, i = 0;
              const s = () => this.root.updateBlockedByResize = !1;
              x.Gt.read(() => {
                i = window.innerWidth
              }), t(e, () => {
                const t = window.innerWidth;
                t !== i && (i = t, this.root.updateBlockedByResize = !0, n && n(), n = function(t, e) {
                  const n = Vt.k.now(),
                    i = ({
                      timestamp: s
                    }) => {
                      const o = s - n;
                      o >= e && ((0, x.WG)(i), t(o - e))
                    };
                  return x.Gt.setup(i, !0), () => (0, x.WG)(i)
                }(s, 250), vt.hasAnimatedSinceResize && (vt.hasAnimatedSinceResize = !1, this.nodes.forEach(ke)))
              })
            }
            i && this.root.registerSharedNode(i, this), !1 !== this.options.animate && o && (i || s) && this.addEventListener("didUpdate", ({
              delta: t,
              hasLayoutChanged: e,
              hasRelativeLayoutChanged: n,
              layout: i
            }) => {
              if (this.isTreeAnimationBlocked()) return this.target = void 0, void(this.relativeTarget = void 0);
              const s = this.options.transition || o.getDefaultTransition() || Be,
                {
                  onLayoutAnimationStart: r,
                  onLayoutAnimationComplete: a
                } = o.getProps(),
                l = !this.targetLayout || !ne(this.targetLayout, i),
                u = !e && n;
              if (this.options.layoutRoot || this.resumeFrom || u || e && (l || !this.currentAnimation)) {
                this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
                const e = {
                  ...(0, Ct.r)(s, "layout"),
                  onPlay: r,
                  onComplete: a
                };
                (o.shouldReduceMotion || this.options.layoutRoot) && (e.delay = 0, e.type = !1), this.startAnimation(e), this.setAnimationOrigin(t, u, e.path)
              } else e || ke(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
              this.targetLayout = i
            })
          }
          unmount() {
            this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
            const t = this.getStack();
            t && t.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), (0, x.WG)(this.updateProjection)
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
            this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(Ce), this.animationId++)
          }
          getTransformTemplate() {
            const {
              visualElement: t
            } = this.options;
            return t && t.getProps().transformTemplate
          }
          willUpdate(t = !0) {
            if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) return void(this.options.onExitComplete && this.options.onExitComplete());
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && me(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
            this.isLayoutDirty = !0;
            for (let t = 0; t < this.path.length; t++) {
              const e = this.path[t];
              e.shouldResetTransform = !0, "string" != typeof e.latestValues.x && "string" != typeof e.latestValues.y || (e.isLayoutDirty = !0), e.updateScroll("snapshot"), e.options.layoutRoot && e.willUpdate(!1)
            }
            const {
              layoutId: e,
              layout: n
            } = this.options;
            if (void 0 === e && !n) return;
            const i = this.getTransformTemplate();
            this.prevTransformTemplateValue = i ? i(this.latestValues, "") : void 0, this.updateSnapshot(), t && this.notifyListeners("willUpdate")
          }
          update() {
            if (this.updateScheduled = !1, this.isUpdateBlocked()) {
              const t = this.updateBlockedByResize;
              return this.unblockUpdate(), this.updateBlockedByResize = !1, this.clearAllSnapshots(), t && this.nodes.forEach(be), void this.nodes.forEach(Te)
            }
            if (this.animationId <= this.animationCommitId) return void this.nodes.forEach(Se);
            this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(Pe), this.nodes.forEach(Ee), this.nodes.forEach(ve), this.nodes.forEach(ge)) : this.nodes.forEach(Se), this.clearAllSnapshots();
            const t = Vt.k.now();
            x.uv.delta = (0, it.q)(0, 1e3 / 60, t - x.uv.timestamp), x.uv.timestamp = t, x.uv.isProcessing = !0, x.PP.update.process(x.uv), x.PP.preRender.process(x.uv), x.PP.render.process(x.uv), x.uv.isProcessing = !1
          }
          didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0, gt.k.read(this.scheduleUpdate))
          }
          clearAllSnapshots() {
            this.nodes.forEach(we), this.sharedNodes.forEach(Ve)
          }
          scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, x.Gt.preRender(this.updateProjection, !1, !0))
          }
          scheduleCheckAfterUnmount() {
            x.Gt.postRender(() => {
              this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            })
          }
          updateSnapshot() {
            !this.snapshot && this.instance && (this.snapshot = this.measure(), !this.snapshot || p(this.snapshot.measuredBox.x) || p(this.snapshot.measuredBox.y) || (this.snapshot = void 0))
          }
          updateLayout() {
            if (!this.instance) return;
            if (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead() || this.isLayoutDirty)) return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let t = 0; t < this.path.length; t++) this.path[t].updateScroll();
            const t = this.layout;
            this.layout = this.measure(!1), this.layoutVersion++, this.layoutCorrected || (this.layoutCorrected = (0, l.ge)()), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
            const {
              visualElement: e
            } = this.options;
            e && e.notify("LayoutMeasure", this.layout.layoutBox, t ? t.layoutBox : void 0)
          }
          updateScroll(t = "measure") {
            let e = Boolean(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === t && (e = !1), e && this.instance) {
              const e = i(this.instance);
              this.scroll = {
                animationId: this.root.animationId,
                phase: t,
                isRoot: e,
                offset: n(this.instance),
                wasRoot: this.scroll ? this.scroll.isRoot : e
              }
            }
          }
          resetTransform() {
            if (!s) return;
            const t = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
              e = this.projectionDelta && !Jt(this.projectionDelta),
              n = this.getTransformTemplate(),
              i = n ? n(this.latestValues, "") : void 0,
              o = i !== this.prevTransformTemplateValue;
            t && this.instance && (e || (0, ue.HD)(this.latestValues) || o) && (s(this.instance, i), this.shouldResetTransform = !1, this.scheduleRender())
          }
          measure(t = !0) {
            const e = this.measurePageBox();
            let n = this.removeElementScroll(e);
            var i;
            return t && (n = this.removeTransform(n)), Fe((i = n).x), Fe(i.y), {
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
            if (!t) return (0, l.ge)();
            const e = t.measureViewportBox();
            if (!this.scroll?.wasRoot && !this.path.some(Ue)) {
              const {
                scroll: t
              } = this.root;
              t && ((0, qt.Ql)(e.x, t.offset.x), (0, qt.Ql)(e.y, t.offset.y))
            }
            return e
          }
          removeElementScroll(t) {
            const e = (0, l.ge)();
            if (Gt(e, t), this.scroll?.wasRoot) return e;
            for (let n = 0; n < this.path.length; n++) {
              const i = this.path[n],
                {
                  scroll: s,
                  options: o
                } = i;
              i !== this.root && s && o.layoutScroll && (s.wasRoot && Gt(e, t), (0, qt.Ql)(e.x, s.offset.x), (0, qt.Ql)(e.y, s.offset.y))
            }
            return e
          }
          applyTransform(t, e = !1, n) {
            const i = n || (0, l.ge)();
            Gt(i, t);
            for (let t = 0; t < this.path.length; t++) {
              const n = this.path[t];
              !e && n.options.layoutScroll && n.scroll && n !== n.root && ((0, qt.Ql)(i.x, -n.scroll.offset.x), (0, qt.Ql)(i.y, -n.scroll.offset.y)), (0, ue.HD)(n.latestValues) && (0, qt.Ww)(i, n.latestValues, n.layout?.layoutBox)
            }
            return (0, ue.HD)(this.latestValues) && (0, qt.Ww)(i, this.latestValues, this.layout?.layoutBox), i
          }
          removeTransform(t) {
            const e = (0, l.ge)();
            Gt(e, t);
            for (let t = 0; t < this.path.length; t++) {
              const n = this.path[t];
              if (!(0, ue.HD)(n.latestValues)) continue;
              let i;
              n.instance && ((0, ue.vk)(n.latestValues) && n.updateSnapshot(), i = (0, l.ge)(), Gt(i, n.measurePageBox())), Qt(e, n.latestValues, n.snapshot?.layoutBox, i)
            }
            return (0, ue.HD)(this.latestValues) && Qt(e, this.latestValues), e
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
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== x.uv.timestamp && this.relativeParent.resolveTargetDelta(!0)
          }
          resolveTargetDelta(t = !1) {
            const e = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = e.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = e.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = e.isSharedProjectionDirty);
            const n = Boolean(this.resumingFrom) || this !== e;
            if (!(t || n && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
            const {
              layout: i,
              layoutId: s
            } = this.options;
            if (!this.layout || !i && !s) return;
            this.resolvedRelativeTargetAt = x.uv.timestamp;
            const o = this.getClosestProjectingParent();
            var r, a, u, c;
            o && this.linkedParentVersion !== o.layoutVersion && !o.options.layoutRoot && this.removeRelativeTarget(), this.targetDelta || this.relativeTarget || (!1 !== this.options.layoutAnchor && o && o.layout ? this.createRelativeTarget(o, this.layout.layoutBox, o.layout.layoutBox) : this.removeRelativeTarget()), (this.relativeTarget || this.targetDelta) && (this.target || (this.target = (0, l.ge)(), this.targetWithTransforms = (0, l.ge)()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), r = this.target, a = this.relativeTarget, u = this.relativeParent.target, c = this.options.layoutAnchor || void 0, v(r.x, a.x, u.x, c?.x), v(r.y, a.y, u.y, c?.y)) : this.targetDelta ? (Boolean(this.resumingFrom) ? this.applyTransform(this.layout.layoutBox, !1, this.target) : Gt(this.target, this.layout.layoutBox), (0, qt.o4)(this.target, this.targetDelta)) : Gt(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, !1 !== this.options.layoutAnchor && o && Boolean(o.resumingFrom) === Boolean(this.resumingFrom) && !o.options.layoutScroll && o.target && 1 !== this.animationProgress ? this.createRelativeTarget(o, this.target, o.target) : this.relativeParent = this.relativeTarget = void 0), Rt.value && ce.calculatedTargetDeltas++)
          }
          getClosestProjectingParent() {
            if (this.parent && !(0, ue.vk)(this.parent.latestValues) && !(0, ue.vF)(this.parent.latestValues)) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
          }
          isProjecting() {
            return Boolean((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
          }
          createRelativeTarget(t, e, n) {
            this.relativeParent = t, this.linkedParentVersion = t.layoutVersion, this.forceRelativeParentToResolveTarget(), this.relativeTarget = (0, l.ge)(), this.relativeTargetOrigin = (0, l.ge)(), y(this.relativeTargetOrigin, e, n, this.options.layoutAnchor || void 0), Gt(this.relativeTarget, this.relativeTargetOrigin)
          }
          removeRelativeTarget() {
            this.relativeParent = this.relativeTarget = void 0
          }
          calcProjection() {
            const t = this.getLead(),
              e = Boolean(this.resumingFrom) || this !== t;
            let n = !0;
            if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (n = !1), e && (this.isSharedProjectionDirty || this.isTransformDirty) && (n = !1), this.resolvedRelativeTargetAt === x.uv.timestamp && (n = !1), n) return;
            const {
              layout: i,
              layoutId: s
            } = this.options;
            if (this.isTreeAnimating = Boolean(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !i && !s) return;
            Gt(this.layoutCorrected, this.layout.layoutBox);
            const o = this.treeScale.x,
              r = this.treeScale.y;
            (0, qt.OU)(this.layoutCorrected, this.treeScale, this.path, e), !t.layout || t.target || 1 === this.treeScale.x && 1 === this.treeScale.y || (t.target = t.layout.layoutBox, t.targetWithTransforms = (0, l.ge)());
            const {
              target: a
            } = t;
            a ? (this.projectionDelta && this.prevProjectionDelta ? (Kt(this.prevProjectionDelta.x, this.projectionDelta.x), Kt(this.prevProjectionDelta.y, this.projectionDelta.y)) : this.createProjectionDeltas(), f(this.projectionDelta, this.layoutCorrected, a, this.latestValues), this.treeScale.x === o && this.treeScale.y === r && se(this.projectionDelta.x, this.prevProjectionDelta.x) && se(this.projectionDelta.y, this.prevProjectionDelta.y) || (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", a)), Rt.value && ce.calculatedProjections++) : this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender())
          }
          hide() {
            this.isVisible = !1
          }
          show() {
            this.isVisible = !0
          }
          scheduleRender(t = !0) {
            if (this.options.visualElement?.scheduleRender(), t) {
              const t = this.getStack();
              t && t.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
          }
          createProjectionDeltas() {
            this.prevProjectionDelta = (0, l.xU)(), this.projectionDelta = (0, l.xU)(), this.projectionDeltaWithTransform = (0, l.xU)()
          }
          setAnimationOrigin(t, e = !1, n) {
            const i = this.snapshot,
              s = i ? i.latestValues : {},
              o = {
                ...this.latestValues
              },
              r = (0, l.xU)();
            this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !e;
            const a = (0, l.ge)(),
              u = (i ? i.source : void 0) !== (this.layout ? this.layout.source : void 0),
              c = this.getStack(),
              p = !c || c.members.length <= 1,
              m = Boolean(u && !p && !0 === this.options.crossfade && !this.path.some(Le));
            let f;
            this.animationProgress = 0;
            const v = n?.interpolateProjection(t);
            this.mixTargetDelta = e => {
              const n = e / 1e3,
                i = v?.(n);
              var c, g, x, w, T, b;
              i ? (r.x.translate = i.x, r.x.scale = (0, d.k)(t.x.scale, 1, n), r.x.origin = t.x.origin, r.x.originPoint = t.x.originPoint, r.y.translate = i.y, r.y.scale = (0, d.k)(t.y.scale, 1, n), r.y.origin = t.y.origin, r.y.originPoint = t.y.originPoint) : (De(r.x, t.x, n), De(r.y, t.y, n)), this.setTargetDelta(r), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (y(a, this.layout.layoutBox, this.relativeParent.layout.layoutBox, this.options.layoutAnchor || void 0), x = this.relativeTarget, w = this.relativeTargetOrigin, T = a, b = n, Re(x.x, w.x, T.x, b), Re(x.y, w.y, T.y, b), f && (c = this.relativeTarget, g = f, te(c.x, g.x) && te(c.y, g.y)) && (this.isProjectionDirty = !1), f || (f = (0, l.ge)()), Gt(f, this.relativeTarget)), u && (this.animationValues = o, function(t, e, n, i, s, o) {
                s ? (t.opacity = (0, d.k)(0, n.opacity ?? 1, Wt(i)), t.opacityExit = (0, d.k)(e.opacity ?? 1, 0, Nt(i))) : o && (t.opacity = (0, d.k)(e.opacity ?? 1, n.opacity ?? 1, i));
                for (let s = 0; s < It; s++) {
                  const o = jt[s];
                  let r = Ut(e, o),
                    a = Ut(n, o);
                  void 0 === r && void 0 === a || (r || (r = 0), a || (a = 0), 0 === r || 0 === a || Ot(r) === Ot(a) ? (t[o] = Math.max((0, d.k)(Ft(r), Ft(a), i), 0), (h.KN.test(a) || h.KN.test(r)) && (t[o] += "%")) : t[o] = a)
                }(e.rotate || n.rotate) && (t.rotate = (0, d.k)(e.rotate || 0, n.rotate || 0, i))
              }(o, s, this.latestValues, n, m, p)), i && void 0 !== i.rotate && (this.animationValues || (this.animationValues = o), this.animationValues.pathRotation = i.rotate), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = n
            }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
          }
          startAnimation(t) {
            this.notifyListeners("animationStart"), this.currentAnimation?.stop(), this.resumingFrom?.currentAnimation?.stop(), this.pendingAnimation && ((0, x.WG)(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = x.Gt.update(() => {
              vt.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = (0, kt.OQ)(0)), this.motionValue.jump(0, !1), this.currentAnimation = function(t, e, n) {
                const i = (0, At.S)(t) ? t : (0, kt.OQ)(t);
                return i.start((0, S.f)("", i, [0, 1e3], n)), i.animation
              }(this.motionValue, 0, {
                ...t,
                velocity: 0,
                isSync: !0,
                onUpdate: e => {
                  this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e)
                },
                onComplete: () => {
                  t.onComplete && t.onComplete(), this.completeAnimation()
                }
              }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
            })
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
              layout: i,
              latestValues: s
            } = t;
            if (e && n && i) {
              if (this !== t && this.layout && i && Oe(this.options.animationType, this.layout.layoutBox, i.layoutBox)) {
                n = this.target || (0, l.ge)();
                const e = p(this.layout.layoutBox.x);
                n.x.min = t.target.x.min, n.x.max = n.x.min + e;
                const i = p(this.layout.layoutBox.y);
                n.y.min = t.target.y.min, n.y.max = n.y.min + i
              }
              Gt(e, n), (0, qt.Ww)(e, s), f(this.projectionDeltaWithTransform, this.layoutCorrected, e, s)
            }
          }
          registerSharedNode(t, e) {
            this.sharedNodes.has(t) || this.sharedNodes.set(t, new re), this.sharedNodes.get(t).add(e);
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
            const {
              layoutId: t
            } = this.options;
            return t && this.getStack()?.lead || this
          }
          getPrevLead() {
            const {
              layoutId: t
            } = this.options;
            return t ? this.getStack()?.prevLead : void 0
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
          resetSkewAndRotation() {
            const {
              visualElement: t
            } = this.options;
            if (!t) return;
            let e = !1;
            const {
              latestValues: n
            } = t;
            if ((n.z || n.rotate || n.rotateX || n.rotateY || n.rotateZ || n.skewX || n.skewY) && (e = !0), !e) return;
            const i = {};
            n.z && pe("z", t, i, this.animationValues);
            for (let e = 0; e < he.length; e++) pe(`rotate${he[e]}`, t, i, this.animationValues), pe(`skew${he[e]}`, t, i, this.animationValues);
            t.render();
            for (const e in i) t.setStaticValue(e, i[e]), this.animationValues && (this.animationValues[e] = i[e]);
            t.scheduleRender()
          }
          applyProjectionStyles(t, e) {
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return void(t.visibility = "hidden");
            const n = this.getTransformTemplate();
            if (this.needsReset) return this.needsReset = !1, t.visibility = "", t.opacity = "", t.pointerEvents = (0, Lt.u)(e?.pointerEvents) || "", void(t.transform = n ? n(this.latestValues, "") : "none");
            const i = this.getLead();
            if (!this.projectionDelta || !this.layout || !i.target) return this.options.layoutId && (t.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1, t.pointerEvents = (0, Lt.u)(e?.pointerEvents) || ""), void(this.hasProjected && !(0, ue.HD)(this.latestValues) && (t.transform = n ? n({}, "") : "none", this.hasProjected = !1));
            t.visibility = "";
            const s = i.animationValues || i.latestValues;
            this.applyTransformsToTarget();
            let o = function(t, e, n) {
              let i = "";
              const s = t.x.translate / e.x,
                o = t.y.translate / e.y,
                r = n?.z || 0;
              if ((s || o || r) && (i = `translate3d(${s}px, ${o}px, ${r}px) `), 1 === e.x && 1 === e.y || (i += `scale(${1/e.x}, ${1/e.y}) `), n) {
                const {
                  transformPerspective: t,
                  rotate: e,
                  pathRotation: s,
                  rotateX: o,
                  rotateY: r,
                  skewX: a,
                  skewY: l
                } = n;
                t && (i = `perspective(${t}px) ${i}`), e && (i += `rotate(${e}deg) `), s && (i += `rotate(${s}deg) `), o && (i += `rotateX(${o}deg) `), r && (i += `rotateY(${r}deg) `), a && (i += `skewX(${a}deg) `), l && (i += `skewY(${l}deg) `)
              }
              const a = t.x.scale * e.x,
                l = t.y.scale * e.y;
              return 1 === a && 1 === l || (i += `scale(${a}, ${l})`), i || "none"
            }(this.projectionDeltaWithTransform, this.treeScale, s);
            n && (o = n(s, o)), t.transform = o;
            const {
              x: r,
              y: a
            } = this.projectionDelta;
            t.transformOrigin = `${100*r.origin}% ${100*a.origin}% 0`, i.animationValues ? t.opacity = i === this ? s.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : s.opacityExit : t.opacity = i === this ? void 0 !== s.opacity ? s.opacity : "" : void 0 !== s.opacityExit ? s.opacityExit : 0;
            for (const e in Dt.H) {
              if (void 0 === s[e]) continue;
              const {
                correct: n,
                applyTo: r,
                isCSSVariable: a
              } = Dt.H[e], l = "none" === o ? s[e] : n(s[e], i);
              if (r) {
                const e = r.length;
                for (let n = 0; n < e; n++) t[r[n]] = l
              } else a ? this.options.visualElement.renderState.vars[e] = l : t[e] = l
            }
            this.options.layoutId && (t.pointerEvents = i === this ? (0, Lt.u)(e?.pointerEvents) || "" : "none")
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
          }
          resetTree() {
            this.root.nodes.forEach(t => t.currentAnimation?.stop()), this.root.nodes.forEach(Te), this.root.sharedNodes.clear()
          }
        }
      }

      function ve(t) {
        t.updateLayout()
      }

      function ge(t) {
        const e = t.resumeFrom?.snapshot || t.snapshot;
        if (t.isLead() && t.layout && e && t.hasListeners("didUpdate")) {
          const {
            layoutBox: n,
            measuredBox: i
          } = t.layout, {
            animationType: s
          } = t.options, o = e.source !== t.layout.source;
          if ("size" === s) c(t => {
            const i = o ? e.measuredBox[t] : e.layoutBox[t],
              s = p(i);
            i.min = n[t].min, i.max = i.min + s
          });
          else if ("x" === s || "y" === s) {
            const t = "x" === s ? "y" : "x";
            $t(o ? e.measuredBox[t] : e.layoutBox[t], n[t])
          } else Oe(s, e.layoutBox, n) && c(i => {
            const s = o ? e.measuredBox[i] : e.layoutBox[i],
              r = p(n[i]);
            s.max = s.min + r, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[i].max = t.relativeTarget[i].min + r)
          });
          const r = (0, l.xU)();
          f(r, n, e.layoutBox);
          const a = (0, l.xU)();
          o ? f(a, t.applyTransform(i, !0), e.measuredBox) : f(a, n, e.layoutBox);
          const u = !Jt(r);
          let h = !1;
          if (!t.resumeFrom) {
            const i = t.getClosestProjectingParent();
            if (i && !i.resumeFrom) {
              const {
                snapshot: s,
                layout: o
              } = i;
              if (s && o) {
                const r = t.options.layoutAnchor || void 0,
                  a = (0, l.ge)();
                y(a, e.layoutBox, s.layoutBox, r);
                const u = (0, l.ge)();
                y(u, n, o.layoutBox, r), ne(a, u) || (h = !0), i.options.layoutRoot && (t.relativeTarget = u, t.relativeTargetOrigin = a, t.relativeParent = i)
              }
            }
          }
          t.notifyListeners("didUpdate", {
            layout: n,
            snapshot: e,
            delta: a,
            layoutDelta: r,
            hasLayoutChanged: u,
            hasRelativeLayoutChanged: h
          })
        } else if (t.isLead()) {
          const {
            onExitComplete: e
          } = t.options;
          e && e()
        }
        t.options.transition = void 0
      }

      function ye(t) {
        Rt.value && ce.nodes++, t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = Boolean(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
      }

      function xe(t) {
        t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
      }

      function we(t) {
        t.clearSnapshot()
      }

      function Te(t) {
        t.clearMeasurements()
      }

      function be(t) {
        t.isLayoutDirty = !0, t.updateLayout()
      }

      function Se(t) {
        t.isLayoutDirty = !1
      }

      function Pe(t) {
        t.isAnimationBlocked && t.layout && !t.isLayoutDirty && (t.snapshot = t.layout, t.isLayoutDirty = !0)
      }

      function Ee(t) {
        const {
          visualElement: e
        } = t.options;
        e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform()
      }

      function ke(t) {
        t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = !0
      }

      function Ae(t) {
        t.resolveTargetDelta()
      }

      function Me(t) {
        t.calcProjection()
      }

      function Ce(t) {
        t.resetSkewAndRotation()
      }

      function Ve(t) {
        t.removeLeadSnapshot()
      }

      function De(t, e, n) {
        t.translate = (0, d.k)(e.translate, 0, n), t.scale = (0, d.k)(e.scale, 1, n), t.origin = e.origin, t.originPoint = e.originPoint
      }

      function Re(t, e, n, i) {
        t.min = (0, d.k)(e.min, n.min, i), t.max = (0, d.k)(e.max, n.max, i)
      }

      function Le(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit
      }
      const Be = {
          duration: .45,
          ease: [.4, 0, .1, 1]
        },
        je = t => "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t),
        Ie = je("applewebkit/") && !je("chrome/") ? Math.round : a.l;

      function Fe(t) {
        t.min = Ie(t.min), t.max = Ie(t.max)
      }

      function Oe(t, e, n) {
        return "position" === t || "preserve-aspect" === t && (i = ie(e), s = ie(n), !(Math.abs(i - s) <= .2));
        var i, s
      }

      function Ue(t) {
        return t !== t.root && t.scroll?.wasRoot
      }
      const We = fe({
          attachResizeListener: (t, e) => (0, E.k)(t, "resize", e),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
            y: document.documentElement.scrollTop || document.body?.scrollTop || 0
          }),
          checkIsScrollRoot: () => !0
        }),
        Ne = {
          current: void 0
        },
        Xe = fe({
          measureScroll: t => ({
            x: t.scrollLeft,
            y: t.scrollTop
          }),
          defaultParent: () => {
            if (!Ne.current) {
              const t = new We({});
              t.mount(window), t.setOptions({
                layoutScroll: !0
              }), Ne.current = t
            }
            return Ne.current
          },
          resetTransform: (t, e) => {
            t.style.transform = void 0 !== e ? e : "none"
          },
          checkIsScrollRoot: t => Boolean("fixed" === window.getComputedStyle(t).position)
        }),
        $e = {
          pan: {
            Feature: mt
          },
          drag: {
            Feature: dt,
            ProjectionNode: Xe,
            MeasureLayout: Pt
          }
        };
      var Ge = n(89407);
      const Ke = {
          layout: {
            ProjectionNode: Xe,
            MeasureLayout: Pt
          }
        },
        qe = {
          ...o.W,
          ...Ge.n,
          ...$e,
          ...Ke
        },
        He = (0, s.H)(qe, i.J)
    },
    69553(t, e, n) {
      "use strict";
      n.d(e, {
        J: () => O
      });
      var i = n(88872),
        s = n(16060),
        o = n(20673),
        r = n(80525),
        a = n(87817),
        l = n(36502),
        u = n(35378),
        c = n(19688),
        h = n(18596);
      const d = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;

      function p(t, e, n = 1) {
        (0, u.V)(n <= 4, `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`, "max-css-var-depth");
        const [i, s] = function(t) {
          const e = d.exec(t);
          if (!e) return [, ];
          const [, n, i, s] = e;
          return [`--${n??i}`, s]
        }(t);
        if (!i) return;
        const o = window.getComputedStyle(e).getPropertyValue(i);
        if (o) {
          const t = o.trim();
          return (0, c.i)(t) ? parseFloat(t) : t
        }
        return (0, h.pG)(s) ? p(s, e, n + 1) : s
      }
      var m = n(79988),
        f = n(72124);

      function v(t) {
        return "number" == typeof t ? 0 === t : null === t || "none" === t || "0" === t || (0, f.$)(t)
      }
      var g = n(64215),
        y = n(52607);
      const x = new Set(["auto", "none", "0"]);
      var w = n(5458);
      class T extends m.h {
        constructor(t, e, n, i, s) {
          super(t, e, n, i, s, !0)
        }
        readKeyframes() {
          const {
            unresolvedKeyframes: t,
            element: e,
            name: n
          } = this;
          if (!e || !e.current) return;
          super.readKeyframes();
          for (let n = 0; n < t.length; n++) {
            let i = t[n];
            if ("string" == typeof i && (i = i.trim(), (0, h.pG)(i))) {
              const s = p(i, e.current);
              void 0 !== s && (t[n] = s), n === t.length - 1 && (this.finalKeyframe = i)
            }
          }
          if (this.resolveNoneKeyframes(), !a.$.has(n) || 2 !== t.length) return;
          const [i, s] = t, o = (0, l.n)(i), r = (0, l.n)(s);
          if ((0, h.rm)(i) !== (0, h.rm)(s) && w.Hr[n]) this.needsMeasurement = !0;
          else if (o !== r)
            if ((0, w.E4)(o) && (0, w.E4)(r))
              for (let e = 0; e < t.length; e++) {
                const n = t[e];
                "string" == typeof n && (t[e] = parseFloat(n))
              } else w.Hr[n] && (this.needsMeasurement = !0)
        }
        resolveNoneKeyframes() {
          const {
            unresolvedKeyframes: t,
            name: e
          } = this, n = [];
          for (let e = 0; e < t.length; e++)(null === t[e] || v(t[e])) && n.push(e);
          n.length && function(t, e, n) {
            let i, s = 0;
            for (; s < t.length && !i;) {
              const e = t[s];
              "string" == typeof e && !x.has(e) && (0, g.V)(e).values.length && (i = t[s]), s++
            }
            if (i && n)
              for (const s of e) t[s] = (0, y.J)(n, i)
          }(t, n, e)
        }
        measureInitialState() {
          const {
            element: t,
            unresolvedKeyframes: e,
            name: n
          } = this;
          if (!t || !t.current) return;
          "height" === n && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = w.Hr[n](t.measureViewportBox(), window.getComputedStyle(t.current)), e[0] = this.measuredOrigin;
          const i = e[e.length - 1];
          void 0 !== i && t.getValue(n, i).jump(i, !1)
        }
        measureEndState() {
          const {
            element: t,
            name: e,
            unresolvedKeyframes: n
          } = this;
          if (!t || !t.current) return;
          const i = t.getValue(e);
          i && i.jump(this.measuredOrigin, !1);
          const s = n.length - 1,
            o = n[s];
          n[s] = w.Hr[e](t.measureViewportBox(), window.getComputedStyle(t.current)), null !== o && void 0 === this.finalKeyframe && (this.finalKeyframe = o), this.removedTransforms?.length && this.removedTransforms.forEach(([e, n]) => {
            t.getValue(e).set(n)
          }), this.resolveNoneKeyframes()
        }
      }
      var b = n(93577);
      class S extends b.BX {
        constructor() {
          super(...arguments), this.KeyframeResolver = T
        }
        sortInstanceNodePosition(t, e) {
          return 2 & t.compareDocumentPosition(e) ? 1 : -1
        }
        getBaseTargetFromProps(t, e) {
          const n = t.style;
          return n ? n[e] : void 0
        }
        removeValueFromRenderState(t, {
          vars: e,
          style: n
        }) {
          delete e[t], delete n[t]
        }
        handleChildMotionValue() {
          this.childSubscription && (this.childSubscription(), delete this.childSubscription);
          const {
            children: t
          } = this.props;
          (0, r.S)(t) && (this.childSubscription = t.on("change", t => {
            this.current && (this.current.textContent = `${t}`)
          }))
        }
      }
      var P = n(97369),
        E = n(4951);
      const k = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
      var A = n(73560);

      function M(t, {
        style: e,
        vars: n
      }, i, s) {
        const o = t.style;
        let r;
        for (r in e) o[r] = e[r];
        for (r in s?.applyProjectionStyles(o, i), n) o.setProperty(r, n[r])
      }
      var C = n(7372);
      class V extends S {
        constructor() {
          super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = o.ge
        }
        getBaseTargetFromProps(t, e) {
          return t[e]
        }
        readValueFromInstance(t, e) {
          if (i.f.has(e)) {
            const t = (0, s.D)(e);
            return t && t.default || 0
          }
          return e = k.has(e) ? e : (0, P.I)(e), t.getAttribute(e)
        }
        scrapeMotionValuesFromProps(t, e, n) {
          return (0, C.x)(t, e, n)
        }
        build(t, e, n) {
          (0, E.B)(t, e, this.isSVGTag, n.transformTemplate, n.style)
        }
        renderInstance(t, e, n, i) {
          ! function(t, e, n, i) {
            M(t, e, void 0, i);
            for (const n in e.attrs) t.setAttribute(k.has(n) ? n : (0, P.I)(n), e.attrs[n])
          }(t, e, 0, i)
        }
        mount(t) {
          this.isSVGTag = (0, A.n)(t.tagName), super.mount(t)
        }
      }
      var D = n(6904),
        R = n(98970),
        L = n(50100),
        B = n(16973);
      class j extends S {
        constructor() {
          super(...arguments), this.type = "html", this.renderInstance = M
        }
        readValueFromInstance(t, e) {
          if (i.f.has(e)) return this.projection?.isProjecting ? (0, D.zs)(e) : (0, D.Ib)(t, e); {
            const i = (n = t, window.getComputedStyle(n)),
              s = ((0, h.j4)(e) ? i.getPropertyValue(e) : i[e]) || 0;
            return "string" == typeof s ? s.trim() : s
          }
          var n
        }
        measureInstanceViewportBox(t, {
          transformPagePoint: e
        }) {
          return (0, R.m)(t, e)
        }
        build(t, e, n) {
          (0, L.O)(t, e, n.transformTemplate)
        }
        scrapeMotionValuesFromProps(t, e, n) {
          return (0, B.x)(t, e, n)
        }
      }
      var I = n(93082),
        F = n(64350);
      const O = (t, e) => e.isSVG ?? (0, F.Q)(t) ? new V(e) : new j(e, {
        allowProjection: t !== I.Fragment
      })
    },
    64350(t, e, n) {
      "use strict";
      n.d(e, {
        Q: () => s
      });
      const i = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

      function s(t) {
        return "string" == typeof t && !t.includes("-") && !!(i.indexOf(t) > -1 || /[A-Z]/u.test(t))
      }
    },
    6584(t, e, n) {
      "use strict";

      function i(t) {
        return t && "object" == typeof t && Object.prototype.hasOwnProperty.call(t, "current")
      }
      n.d(e, {
        X: () => i
      })
    },
    59839(t, e, n) {
      "use strict";
      n.d(e, {
        m: () => T
      });
      var i = n(35378),
        s = n(18197),
        o = n(19759),
        r = n(13800),
        a = n(47717);
      const l = {};

      function u(t, e) {
        const n = (0, a.p)(t);
        return () => l[e] ?? n()
      }
      const c = u(() => void 0 !== window.ScrollTimeline, "scrollTimeline");
      var h = n(48672),
        d = n(10320),
        p = n(91119);
      const m = u(() => {
        try {
          document.createElement("div").animate({
            opacity: 0
          }, {
            easing: "linear(0, 1)"
          })
        } catch (t) {
          return !1
        }
        return !0
      }, "linearEasing");
      var f = n(85017);
      const v = ([t, e, n, i]) => `cubic-bezier(${t}, ${e}, ${n}, ${i})`,
        g = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: v([0, .65, .55, 1]),
          circOut: v([.55, 0, 1, .45]),
          backIn: v([.31, .01, .66, -.59]),
          backOut: v([.33, 1.53, .69, .99])
        };

      function y(t, e) {
        return t ? "function" == typeof t ? m() ? (0, f.K)(t, e) : "ease-out" : (0, p.D)(t) ? v(t) : Array.isArray(t) ? t.map(t => y(t, e) || g.easeOut) : g[t] : void 0
      }

      function x(t, e, n, {
        delay: i = 0,
        duration: s = 300,
        repeat: o = 0,
        repeatType: r = "loop",
        ease: a = "easeOut",
        times: l
      } = {}, u = void 0) {
        const c = {
          [e]: n
        };
        l && (c.offset = l);
        const h = y(a, s);
        Array.isArray(h) && (c.easing = h);
        const d = {
          delay: i,
          duration: s,
          easing: Array.isArray(h) ? "linear" : h,
          fill: "both",
          iterations: o + 1,
          direction: "reverse" === r ? "alternate" : "normal"
        };
        return u && (d.pseudoElement = u), t.animate(c, d)
      }
      var w = n(68274);
      class T extends d.q {
        constructor(t) {
          if (super(), this.finishedTime = null, this.isStopped = !1, this.manualStartTime = null, !t) return;
          const {
            element: e,
            name: n,
            keyframes: s,
            pseudoElement: o,
            allowFlatten: a = !1,
            finalKeyframe: l,
            onComplete: u
          } = t;
          this.isPseudoElement = Boolean(o), this.allowFlatten = a, this.options = t, (0, i.V)("string" != typeof t.type, 'Mini animate() doesn\'t support "type" as a string.', "mini-spring");
          const c = function({
            type: t,
            ...e
          }) {
            return (0, w.W)(t) && m() ? t.applyToOptions(e) : (e.duration ?? (e.duration = 300), e.ease ?? (e.ease = "easeOut"), e)
          }(t);
          this.animation = x(e, n, s, c, o), !1 === c.autoplay && this.animation.pause(), this.animation.onfinish = () => {
            if (this.finishedTime = this.time, !o) {
              const t = (0, h.X)(s, this.options, l, this.speed);
              this.updateMotionValue && this.updateMotionValue(t), (0, r.e)(e, n, t), this.animation.cancel()
            }
            u?.(), this.notifyFinished()
          }
        }
        play() {
          this.isStopped || (this.manualStartTime = null, this.animation.play(), "finished" === this.state && this.updateFinished())
        }
        pause() {
          this.animation.pause()
        }
        complete() {
          this.animation.finish?.()
        }
        cancel() {
          try {
            this.animation.cancel()
          } catch (t) {}
        }
        stop() {
          if (this.isStopped) return;
          this.isStopped = !0;
          const {
            state: t
          } = this;
          "idle" !== t && "finished" !== t && (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel())
        }
        commitStyles() {
          const t = this.options?.element;
          !this.isPseudoElement && t?.isConnected && this.animation.commitStyles?.()
        }
        get duration() {
          const t = this.animation.effect?.getComputedTiming?.().duration || 0;
          return (0, s.X)(Number(t))
        }
        get iterationDuration() {
          const {
            delay: t = 0
          } = this.options || {};
          return this.duration + (0, s.X)(t)
        }
        get time() {
          return (0, s.X)(Number(this.animation.currentTime) || 0)
        }
        set time(t) {
          const e = null !== this.finishedTime;
          this.manualStartTime = null, this.finishedTime = null, this.animation.currentTime = (0, s.f)(t), e && this.animation.pause()
        }
        get speed() {
          return this.animation.playbackRate
        }
        set speed(t) {
          t < 0 && (this.finishedTime = null), this.animation.playbackRate = t
        }
        get state() {
          return null !== this.finishedTime ? "finished" : this.animation.playState
        }
        get startTime() {
          return this.manualStartTime ?? Number(this.animation.startTime)
        }
        set startTime(t) {
          this.manualStartTime = this.animation.startTime = t
        }
        attachTimeline({
          timeline: t,
          rangeStart: e,
          rangeEnd: n,
          observe: i
        }) {
          return this.allowFlatten && this.animation.effect?.updateTiming({
            easing: "linear"
          }), this.animation.onfinish = null, t && c() ? (this.animation.timeline = t, e && (this.animation.rangeStart = e), n && (this.animation.rangeEnd = n), o.l) : i(this)
        }
      }
    },
    68274(t, e, n) {
      "use strict";

      function i(t) {
        return "function" == typeof t && "applyToOptions" in t
      }
      n.d(e, {
        W: () => i
      })
    },
    83082(t, e, n) {
      "use strict";
      n.d(e, {
        f: () => jt
      });
      var i = n(18197),
        s = n(19605),
        o = n(19759),
        r = n(3451),
        a = n(12879),
        l = n(16340),
        u = n(35378),
        c = n(18596),
        h = n(84342),
        d = n(64215),
        p = n(98973),
        m = n(96620);

      function f(t, e, n) {
        return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + 6 * (e - t) * n : n < .5 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
      }
      var v = n(92520);

      function g(t, e) {
        return n => n > 0 ? e : t
      }
      var y = n(65966);
      const x = (t, e, n) => {
          const i = t * t,
            s = n * (e * e - i) + i;
          return s < 0 ? 0 : Math.sqrt(s)
        },
        w = [p.u, v.B, m.V];

      function T(t) {
        const e = (n = t, w.find(t => t.test(n)));
        var n;
        if ((0, u.$)(Boolean(e), `'${t}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable"), !Boolean(e)) return !1;
        let i = e.parse(t);
        return e === m.V && (i = function({
          hue: t,
          saturation: e,
          lightness: n,
          alpha: i
        }) {
          t /= 360, n /= 100;
          let s = 0,
            o = 0,
            r = 0;
          if (e /= 100) {
            const i = n < .5 ? n * (1 + e) : n + e - n * e,
              a = 2 * n - i;
            s = f(a, i, t + 1 / 3), o = f(a, i, t), r = f(a, i, t - 1 / 3)
          } else s = o = r = n;
          return {
            red: Math.round(255 * s),
            green: Math.round(255 * o),
            blue: Math.round(255 * r),
            alpha: i
          }
        }(i)), i
      }
      const b = (t, e) => {
          const n = T(t),
            i = T(e);
          if (!n || !i) return g(t, e);
          const s = {
            ...n
          };
          return t => (s.red = x(n.red, i.red, t), s.green = x(n.green, i.green, t), s.blue = x(n.blue, i.blue, t), s.alpha = (0, y.k)(n.alpha, i.alpha, t), v.B.transform(s))
        },
        S = new Set(["none", "hidden"]);

      function P(t, e) {
        return n => (0, y.k)(t, e, n)
      }

      function E(t) {
        return "number" == typeof t ? P : "string" == typeof t ? (0, c.pG)(t) ? g : h.y.test(t) ? b : M : Array.isArray(t) ? k : "object" == typeof t ? h.y.test(t) ? b : A : g
      }

      function k(t, e) {
        const n = [...t],
          i = n.length,
          s = t.map((t, n) => E(t)(t, e[n]));
        return t => {
          for (let e = 0; e < i; e++) n[e] = s[e](t);
          return n
        }
      }

      function A(t, e) {
        const n = {
            ...t,
            ...e
          },
          i = {};
        for (const s in n) void 0 !== t[s] && void 0 !== e[s] && (i[s] = E(t[s])(t[s], e[s]));
        return t => {
          for (const e in i) n[e] = i[e](t);
          return n
        }
      }
      const M = (t, e) => {
        const n = d.f.createTransformer(e),
          i = (0, d.V)(t),
          s = (0, d.V)(e);
        return i.indexes.var.length === s.indexes.var.length && i.indexes.color.length === s.indexes.color.length && i.indexes.number.length >= s.indexes.number.length ? S.has(t) && !s.values.length || S.has(e) && !i.values.length ? function(t, e) {
          return S.has(t) ? n => n <= 0 ? t : e : n => n >= 1 ? e : t
        }(t, e) : (0, a.F)(k(function(t, e) {
          const n = [],
            i = {
              color: 0,
              var: 0,
              number: 0
            };
          for (let s = 0; s < e.values.length; s++) {
            const o = e.types[s],
              r = t.indexes[o][i[o]],
              a = t.values[r] ?? 0;
            n[s] = a, i[o]++
          }
          return n
        }(i, s), s.values), n) : ((0, u.$)(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different"), g(t, e))
      };

      function C(t, e, n) {
        return "number" == typeof t && "number" == typeof e && "number" == typeof n ? (0, y.k)(t, e, n) : E(t)(t, e)
      }
      var V = n(67581);
      const D = t => {
        const e = ({
          timestamp: e
        }) => t(e);
        return {
          start: (t = !0) => V.Gt.update(e, t),
          stop: () => (0, V.WG)(e),
          now: () => V.uv.isProcessing ? V.uv.timestamp : r.k.now()
        }
      };
      var R = n(85017);

      function L(t) {
        let e = 0,
          n = t.next(e);
        for (; !n.done && e < 2e4;) e += 50, n = t.next(e);
        return e >= 2e4 ? 1 / 0 : e
      }
      const B = .01,
        j = 2,
        I = .005,
        F = .5;

      function O(t, e) {
        return t * Math.sqrt(1 - e * e)
      }
      const U = ["duration", "bounce"],
        W = ["stiffness", "damping", "mass"];

      function N(t, e) {
        return e.some(e => void 0 !== t[e])
      }

      function X(t = .3, e = .3) {
        const n = "object" != typeof t ? {
          visualDuration: t,
          keyframes: [0, 1],
          bounce: e
        } : t;
        let {
          restSpeed: s,
          restDelta: o
        } = n;
        const r = n.keyframes[0],
          a = n.keyframes[n.keyframes.length - 1],
          c = {
            done: !1,
            value: r
          },
          {
            stiffness: h,
            damping: d,
            mass: p,
            duration: m,
            velocity: f,
            isResolvedFromDuration: v
          } = function(t) {
            let e = {
              velocity: 0,
              stiffness: 100,
              damping: 10,
              mass: 1,
              isResolvedFromDuration: !1,
              ...t
            };
            if (!N(t, W) && N(t, U))
              if (e.velocity = 0, t.visualDuration) {
                const n = t.visualDuration,
                  i = 2 * Math.PI / (1.2 * n),
                  s = i * i,
                  o = 2 * (0, l.q)(.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(s);
                e = {
                  ...e,
                  mass: 1,
                  stiffness: s,
                  damping: o
                }
              } else {
                const n = function({
                  duration: t = 800,
                  bounce: e = .3,
                  velocity: n = 0,
                  mass: s = 1
                }) {
                  let o, r;
                  (0, u.$)(t <= (0, i.f)(10), "Spring duration must be 10 seconds or less", "spring-duration-limit");
                  let a = 1 - e;
                  a = (0, l.q)(.05, 1, a), t = (0, l.q)(.01, 10, (0, i.X)(t)), a < 1 ? (o = e => {
                    const i = e * a,
                      s = i * t;
                    return .001 - (i - n) / O(e, a) * Math.exp(-s)
                  }, r = e => {
                    const i = e * a * t,
                      s = i * n + n,
                      r = Math.pow(a, 2) * Math.pow(e, 2) * t,
                      l = Math.exp(-i),
                      u = O(Math.pow(e, 2), a);
                    return (.001 - o(e) > 0 ? -1 : 1) * ((s - r) * l) / u
                  }) : (o = e => Math.exp(-e * t) * ((e - n) * t + 1) - .001, r = e => Math.exp(-e * t) * (t * t * (n - e)));
                  const c = function(t, e, n) {
                    let i = n;
                    for (let n = 1; n < 12; n++) i -= t(i) / e(i);
                    return i
                  }(o, r, 5 / t);
                  if (t = (0, i.f)(t), isNaN(c)) return {
                    stiffness: 100,
                    damping: 10,
                    duration: t
                  }; {
                    const e = Math.pow(c, 2) * s;
                    return {
                      stiffness: e,
                      damping: 2 * a * Math.sqrt(s * e),
                      duration: t
                    }
                  }
                }({
                  ...t,
                  velocity: 0
                });
                e = {
                  ...e,
                  ...n,
                  mass: 1
                }, e.isResolvedFromDuration = !0
              } return e
          }({
            ...n,
            velocity: -(0, i.X)(n.velocity || 0)
          }),
          g = f || 0,
          y = d / (2 * Math.sqrt(h * p)),
          x = a - r,
          w = (0, i.X)(Math.sqrt(h / p)),
          T = Math.abs(x) < 5;
        let b, S, P, E, k, A;
        if (s || (s = T ? B : j), o || (o = T ? I : F), y < 1) P = O(w, y), E = (g + y * w * x) / P, b = t => {
          const e = Math.exp(-y * w * t);
          return a - e * (E * Math.sin(P * t) + x * Math.cos(P * t))
        }, k = y * w * E + x * P, A = y * w * x - E * P, S = t => Math.exp(-y * w * t) * (k * Math.sin(P * t) + A * Math.cos(P * t));
        else if (1 === y) {
          b = t => a - Math.exp(-w * t) * (x + (g + w * x) * t);
          const t = g + w * x;
          S = e => Math.exp(-w * e) * (w * t * e - g)
        } else {
          const t = w * Math.sqrt(y * y - 1);
          b = e => {
            const n = Math.exp(-y * w * e),
              i = Math.min(t * e, 300);
            return a - n * ((g + y * w * x) * Math.sinh(i) + t * x * Math.cosh(i)) / t
          };
          const e = (g + y * w * x) / t,
            n = y * w * e - x * t,
            i = y * w * x - e * t;
          S = e => {
            const s = Math.exp(-y * w * e),
              o = Math.min(t * e, 300);
            return s * (n * Math.sinh(o) + i * Math.cosh(o))
          }
        }
        const M = {
          calculatedDuration: v && m || null,
          velocity: t => (0, i.f)(S(t)),
          next: t => {
            if (!v && y < 1) {
              const e = Math.exp(-y * w * t),
                n = Math.sin(P * t),
                r = Math.cos(P * t),
                l = a - e * (E * n + x * r),
                u = (0, i.f)(e * (k * n + A * r));
              return c.done = Math.abs(u) <= s && Math.abs(a - l) <= o, c.value = c.done ? a : l, c
            }
            const e = b(t);
            if (v) c.done = t >= m;
            else {
              const n = (0, i.f)(S(t));
              c.done = Math.abs(n) <= s && Math.abs(a - e) <= o
            }
            return c.value = c.done ? a : e, c
          },
          toString: () => {
            const t = Math.min(L(M), 2e4),
              e = (0, R.K)(e => M.next(t * e).value, t, 30);
            return t + "ms " + e
          },
          toTransition: () => {}
        };
        return M
      }
      X.applyToOptions = t => {
        const e = function(t, e = 100, n) {
          const s = n({
              ...t,
              keyframes: [0, e]
            }),
            o = Math.min(L(s), 2e4);
          return {
            type: "keyframes",
            ease: t => s.next(o * t).value / e,
            duration: (0, i.X)(o)
          }
        }(t, 100, X);
        return t.ease = e.ease, t.duration = (0, i.f)(e.duration), t.type = "keyframes", t
      };
      var $ = n(56029);

      function G(t, e, n) {
        const i = Math.max(e - 5, 0);
        return (0, $.f)(n - t(i), e - i)
      }

      function K({
        keyframes: t,
        velocity: e = 0,
        power: n = .8,
        timeConstant: i = 325,
        bounceDamping: s = 10,
        bounceStiffness: o = 500,
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
        let m = n * e;
        const f = h + m,
          v = void 0 === r ? f : r(f);
        v !== f && (m = v - h);
        const g = t => -m * Math.exp(-t / i),
          y = t => v + g(t),
          x = t => {
            const e = g(t),
              n = y(t);
            d.done = Math.abs(e) <= u, d.value = d.done ? v : n
          };
        let w, T;
        const b = t => {
          var e;
          e = d.value, (void 0 !== a && e < a || void 0 !== l && e > l) && (w = t, T = X({
            keyframes: [d.value, p(d.value)],
            velocity: G(y, t, d.value),
            damping: s,
            stiffness: o,
            restDelta: u,
            restSpeed: c
          }))
        };
        return b(0), {
          calculatedDuration: null,
          next: t => {
            let e = !1;
            return T || void 0 !== w || (e = !0, x(t), b(t)), void 0 !== w && t >= w ? T.next(t - w) : (!e && x(t), d)
          }
        }
      }
      const q = (t, e, n) => (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t;

      function H(t, e, n, i) {
        if (t === e && n === i) return o.l;
        return s => 0 === s || 1 === s ? s : q(function(t, e, n, i, s) {
          let o, r, a = 0;
          do {
            r = e + (n - e) / 2, o = q(r, i, s) - t, o > 0 ? n = r : e = r
          } while (Math.abs(o) > 1e-7 && ++a < 12);
          return r
        }(s, 0, 1, t, n), e, i)
      }
      const Y = H(.42, 0, 1, 1),
        z = H(0, 0, .58, 1),
        _ = H(.42, 0, .58, 1);
      var Q = n(74803),
        Z = n(70112);
      const J = H(.33, 1.53, .69, .99),
        tt = (0, Z.G)(J),
        et = (0, Q.V)(tt),
        nt = t => t >= 1 ? 1 : (t *= 2) < 1 ? .5 * tt(t) : .5 * (2 - Math.pow(2, -10 * (t - 1)));
      var it = n(16214),
        st = n(91119);
      const ot = {
          linear: o.l,
          easeIn: Y,
          easeInOut: _,
          easeOut: z,
          circIn: it.po,
          circInOut: it.tn,
          circOut: it.yT,
          backIn: tt,
          backInOut: et,
          backOut: J,
          anticipate: nt
        },
        rt = t => {
          if ((0, st.D)(t)) {
            (0, u.V)(4 === t.length, "Cubic bezier arrays must contain four numerical values.", "cubic-bezier-length");
            const [e, n, i, s] = t;
            return H(e, n, i, s)
          }
          return "string" == typeof t ? ((0, u.V)(void 0 !== ot[t], `Invalid easing type '${t}'`, "invalid-easing-type"), ot[t]) : t
        };
      var at = n(89798);

      function lt({
        duration: t = 300,
        keyframes: e,
        times: n,
        ease: i = "easeInOut"
      }) {
        const r = (t => Array.isArray(t) && "number" != typeof t[0])(i) ? i.map(rt) : rt(i),
          c = {
            done: !1,
            value: e[0]
          },
          h = function(t, e) {
            return t.map(t => t * e)
          }(n && n.length === e.length ? n : function(t) {
            const e = [0];
            return function(t, e) {
              const n = t[t.length - 1];
              for (let i = 1; i <= e; i++) {
                const s = (0, at.q)(0, e, i);
                t.push((0, y.k)(n, 1, s))
              }
            }(e, t.length - 1), e
          }(e), t),
          d = function(t, e, {
            clamp: n = !0,
            ease: i,
            mixer: r
          } = {}) {
            const c = t.length;
            if ((0, u.V)(c === e.length, "Both input and output ranges must be the same length", "range-length"), 1 === c) return () => e[0];
            if (2 === c && e[0] === e[1]) return () => e[1];
            const h = t[0] === t[1];
            t[0] > t[c - 1] && (t = [...t].reverse(), e = [...e].reverse());
            const d = function(t, e, n) {
                const i = [],
                  r = n || s.W.mix || C,
                  l = t.length - 1;
                for (let n = 0; n < l; n++) {
                  let s = r(t[n], t[n + 1]);
                  if (e) {
                    const t = Array.isArray(e) ? e[n] || o.l : e;
                    s = (0, a.F)(t, s)
                  }
                  i.push(s)
                }
                return i
              }(e, i, r),
              p = d.length,
              m = n => {
                if (h && n < t[0]) return e[0];
                let i = 0;
                if (p > 1)
                  for (; i < t.length - 2 && !(n < t[i + 1]); i++);
                const s = (0, at.q)(t[i], t[i + 1], n);
                return d[i](s)
              };
            return n ? e => m((0, l.q)(t[0], t[c - 1], e)) : m
          }(h, e, {
            ease: Array.isArray(r) ? r : (p = e, m = r, p.map(() => m || _).splice(0, p.length - 1))
          });
        var p, m;
        return {
          calculatedDuration: t,
          next: e => (c.value = d(e), c.done = e >= t, c)
        }
      }
      var ut = n(48672);
      const ct = {
        decay: K,
        inertia: K,
        tween: lt,
        keyframes: lt,
        spring: X
      };

      function ht(t) {
        "string" == typeof t.type && (t.type = ct[t.type])
      }
      var dt = n(10320);
      const pt = t => t / 100;
      class mt extends dt.q {
        constructor(t) {
          super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.delayState = {
            done: !1,
            value: void 0
          }, this.stop = () => {
            const {
              motionValue: t
            } = this.options;
            t && t.updatedAt !== r.k.now() && this.tick(r.k.now()), this.isStopped = !0, "idle" !== this.state && (this.teardown(), this.options.onStop?.())
          }, this.options = t, this.initAnimation(), this.play(), !1 === t.autoplay && this.pause()
        }
        initAnimation() {
          const {
            options: t
          } = this;
          ht(t);
          const {
            type: e = lt,
            repeat: n = 0,
            repeatDelay: i = 0,
            repeatType: s,
            velocity: o = 0
          } = t;
          let {
            keyframes: r
          } = t;
          const l = e || lt;
          l !== lt && "number" != typeof r[0] && (this.mixKeyframes = (0, a.F)(pt, C(r[0], r[1])), r = [0, 100]);
          const u = l({
            ...t,
            keyframes: r
          });
          "mirror" === s && (this.mirroredGenerator = l({
            ...t,
            keyframes: [...r].reverse(),
            velocity: -o
          })), null === u.calculatedDuration && (u.calculatedDuration = L(u));
          const {
            calculatedDuration: c
          } = u;
          this.calculatedDuration = c, this.resolvedDuration = c + i, this.totalDuration = this.resolvedDuration * (n + 1) - i, this.generator = u
        }
        updateTime(t) {
          const e = Math.round(t - this.startTime) * this.playbackSpeed;
          null !== this.holdTime ? this.currentTime = this.holdTime : this.currentTime = e
        }
        tick(t, e = !1) {
          const {
            generator: n,
            totalDuration: i,
            mixKeyframes: s,
            mirroredGenerator: o,
            resolvedDuration: r,
            calculatedDuration: a
          } = this;
          if (null === this.startTime) return n.next(0);
          const {
            delay: u = 0,
            keyframes: c,
            repeat: h,
            repeatType: d,
            repeatDelay: p,
            type: m,
            onUpdate: f,
            finalKeyframe: v
          } = this.options;
          this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - i / this.speed, this.startTime)), e ? this.currentTime = t : this.updateTime(t);
          const g = this.currentTime - u * (this.playbackSpeed >= 0 ? 1 : -1),
            y = this.playbackSpeed >= 0 ? g < 0 : g > i;
          this.currentTime = Math.max(g, 0), "finished" === this.state && null === this.holdTime && (this.currentTime = i);
          let x, w = this.currentTime,
            T = n;
          if (h) {
            const t = Math.min(this.currentTime, i) / r;
            let e = Math.floor(t),
              n = t % 1;
            !n && t >= 1 && (n = 1), 1 === n && e--, e = Math.min(e, h + 1), Boolean(e % 2) && ("reverse" === d ? (n = 1 - n, p && (n -= p / r)) : "mirror" === d && (T = o)), w = (0, l.q)(0, 1, n) * r
          }
          y ? (this.delayState.value = c[0], x = this.delayState) : x = T.next(w), s && !y && (x.value = s(x.value));
          let {
            done: b
          } = x;
          y || null === a || (b = this.playbackSpeed >= 0 ? this.currentTime >= i : this.currentTime <= 0);
          const S = null === this.holdTime && ("finished" === this.state || "running" === this.state && b);
          return S && m !== K && (x.value = (0, ut.X)(c, this.options, v, this.speed)), f && f(x.value), S && this.finish(), x
        }
        then(t, e) {
          return this.finished.then(t, e)
        }
        get duration() {
          return (0, i.X)(this.calculatedDuration)
        }
        get iterationDuration() {
          const {
            delay: t = 0
          } = this.options || {};
          return this.duration + (0, i.X)(t)
        }
        get time() {
          return (0, i.X)(this.currentTime)
        }
        set time(t) {
          t = (0, i.f)(t), this.currentTime = t, null === this.startTime || null !== this.holdTime || 0 === this.playbackSpeed ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.playbackSpeed), this.driver ? this.driver.start(!1) : (this.startTime = 0, this.state = "paused", this.holdTime = t, this.tick(t))
        }
        getGeneratorVelocity() {
          const t = this.currentTime;
          return t <= 0 ? this.options.velocity || 0 : this.generator.velocity ? this.generator.velocity(t) : G(t => this.generator.next(t).value, t, this.generator.next(t).value)
        }
        get speed() {
          return this.playbackSpeed
        }
        set speed(t) {
          const e = this.playbackSpeed !== t;
          e && this.driver && this.updateTime(r.k.now()), this.playbackSpeed = t, e && this.driver && (this.time = (0, i.X)(this.currentTime))
        }
        play() {
          if (this.isStopped) return;
          const {
            driver: t = D,
            startTime: e
          } = this.options;
          this.driver || (this.driver = t(t => this.tick(t))), this.options.onPlay?.();
          const n = this.driver.now();
          "finished" === this.state ? (this.updateFinished(), this.startTime = n) : null !== this.holdTime ? this.startTime = n - this.holdTime : this.startTime || (this.startTime = e ?? n), "finished" === this.state && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start()
        }
        pause() {
          this.state = "paused", this.updateTime(r.k.now()), this.holdTime = this.currentTime
        }
        complete() {
          "running" !== this.state && this.play(), this.state = "finished", this.holdTime = null
        }
        finish() {
          this.notifyFinished(), this.teardown(), this.state = "finished", this.options.onComplete?.()
        }
        cancel() {
          this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), this.options.onCancel?.()
        }
        teardown() {
          this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null
        }
        stopDriver() {
          this.driver && (this.driver.stop(), this.driver = void 0)
        }
        sample(t) {
          return this.startTime = 0, this.tick(t, !0)
        }
        attachTimeline(t) {
          return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), this.driver?.stop(), t.observe(this)
        }
      }
      var ft = n(79988),
        vt = n(13800),
        gt = n(59839);
      const yt = {
        anticipate: nt,
        backInOut: et,
        circInOut: it.tn
      };
      class xt extends gt.m {
        constructor(t) {
          var e;
          "string" == typeof(e = t).ease && e.ease in yt && (e.ease = yt[e.ease]), ht(t), super(t), void 0 !== t.startTime && !1 !== t.autoplay && (this.startTime = t.startTime), this.options = t
        }
        updateMotionValue(t) {
          const {
            motionValue: e,
            onUpdate: n,
            onComplete: i,
            element: s,
            ...o
          } = this.options;
          if (!e) return;
          if (void 0 !== t) return void e.set(t);
          const a = new mt({
              ...o,
              autoplay: !1
            }),
            u = Math.max(10, r.k.now() - this.startTime),
            c = (0, l.q)(0, 10, u - 10),
            h = a.sample(u).value,
            {
              name: d
            } = this.options;
          s && d && (0, vt.e)(s, d, h), e.setWithVelocity(a.sample(Math.max(0, u - c)).value, h, c), a.stop()
        }
      }
      var wt = n(68274);
      const Tt = (t, e) => !("zIndex" === e || "number" != typeof t && !Array.isArray(t) && ("string" != typeof t || !d.f.test(t) && "0" !== t || t.startsWith("url(")));

      function bt(t) {
        t.duration = 0, t.type = "keyframes"
      }
      var St = n(47717),
        Pt = n(34322);
      const Et = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/,
        kt = new Set(["color", "backgroundColor", "outlineColor", "fill", "stroke", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor"]),
        At = (0, St.p)(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
      class Mt extends dt.q {
        constructor({
          autoplay: t = !0,
          delay: e = 0,
          type: n = "keyframes",
          repeat: i = 0,
          repeatDelay: s = 0,
          repeatType: o = "loop",
          keyframes: a,
          name: l,
          motionValue: u,
          element: c,
          ...h
        }) {
          super(), this.stop = () => {
            this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel()
          }, this.createdAt = r.k.now();
          const d = {
              autoplay: t,
              delay: e,
              type: n,
              repeat: i,
              repeatDelay: s,
              repeatType: o,
              name: l,
              motionValue: u,
              element: c,
              ...h
            },
            p = c?.KeyframeResolver || ft.h;
          this.keyframeResolver = new p(a, (t, e, n) => this.onKeyframesResolved(t, e, d, !n), l, u, c), this.keyframeResolver?.scheduleResolve()
        }
        onKeyframesResolved(t, e, n, i) {
          this.keyframeResolver = void 0;
          const {
            name: a,
            type: l,
            velocity: c,
            delay: h,
            isHandoff: d,
            onUpdate: p
          } = n;
          this.resolvedAt = r.k.now();
          let m = !0;
          (function(t, e, n, i) {
            const s = t[0];
            if (null === s) return !1;
            if ("display" === e || "visibility" === e) return !0;
            const o = t[t.length - 1],
              r = Tt(s, e),
              a = Tt(o, e);
            return (0, u.$)(r === a, `You are trying to animate ${e} from "${s}" to "${o}". "${r?o:s}" is not an animatable value.`, "value-not-animatable"), !(!r || !a) && (function(t) {
              const e = t[0];
              if (1 === t.length) return !0;
              for (let n = 0; n < t.length; n++)
                if (t[n] !== e) return !0
            }(t) || ("spring" === n || (0, wt.W)(n)) && i)
          })(t, a, l, c) || (m = !1, !s.W.instantAnimations && h || p?.((0, ut.X)(t, n, e)), t[0] = t[t.length - 1], bt(n), n.repeat = 0);
          const f = {
              startTime: i ? this.resolvedAt && this.resolvedAt - this.createdAt > 40 ? this.resolvedAt : this.createdAt : void 0,
              finalKeyframe: e,
              ...n,
              keyframes: t
            },
            v = m && !d && function(t) {
              const {
                motionValue: e,
                name: n,
                repeatDelay: i,
                repeatType: s,
                damping: o,
                type: r,
                keyframes: a
              } = t, l = e?.owner?.current;
              if (!(l instanceof HTMLElement)) return !1;
              const {
                onUpdate: u,
                transformTemplate: c
              } = e.owner.getProps();
              return At() && n && (Pt.M.has(n) || kt.has(n) && function(t) {
                for (let e = 0; e < t.length; e++)
                  if ("string" == typeof t[e] && Et.test(t[e])) return !0;
                return !1
              }(a)) && ("transform" !== n || !c) && !u && !i && "mirror" !== s && 0 !== o && "inertia" !== r
            }(f),
            g = f.motionValue?.owner?.current;
          let y;
          if (v) try {
            y = new xt({
              ...f,
              element: g
            })
          } catch {
            y = new mt(f)
          } else y = new mt(f);
          y.finished.then(() => {
            this.notifyFinished()
          }).catch(o.l), this.pendingTimeline && (this.stopTimeline = y.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = y
        }
        get finished() {
          return this._animation ? this.animation.finished : this._finished
        }
        then(t, e) {
          return this.finished.finally(t).then(() => {})
        }
        get animation() {
          return this._animation || (this.keyframeResolver?.resume(), (0, ft.q)()), this._animation
        }
        get duration() {
          return this.animation.duration
        }
        get iterationDuration() {
          return this.animation.iterationDuration
        }
        get time() {
          return this.animation.time
        }
        set time(t) {
          this.animation.time = t
        }
        get speed() {
          return this.animation.speed
        }
        get state() {
          return this.animation.state
        }
        set speed(t) {
          this.animation.speed = t
        }
        get startTime() {
          return this.animation.startTime
        }
        attachTimeline(t) {
          return this._animation ? this.stopTimeline = this.animation.attachTimeline(t) : this.pendingTimeline = t, () => this.stop()
        }
        play() {
          this.animation.play()
        }
        pause() {
          this.animation.pause()
        }
        complete() {
          this.animation.complete()
        }
        cancel() {
          this._animation && this.animation.cancel(), this.keyframeResolver?.cancel()
        }
      }
      var Ct = n(30637),
        Vt = n(88872);
      const Dt = {
          type: "spring",
          stiffness: 500,
          damping: 25,
          restSpeed: 10
        },
        Rt = {
          type: "keyframes",
          duration: .8
        },
        Lt = {
          type: "keyframes",
          ease: [.25, .1, .35, 1],
          duration: .3
        },
        Bt = new Set(["when", "delay", "delayChildren", "staggerChildren", "staggerDirection", "repeat", "repeatType", "repeatDelay", "from", "elapsed"]),
        jt = (t, e, n, o = {}, r, a) => l => {
          const u = (0, Ct.r)(o, t) || {},
            c = u.delay || o.delay || 0;
          let {
            elapsed: h = 0
          } = o;
          h -= (0, i.f)(c);
          const d = {
            keyframes: Array.isArray(n) ? n : [null, n],
            ease: "easeOut",
            velocity: e.getVelocity(),
            ...u,
            delay: -h,
            onUpdate: t => {
              e.set(t), u.onUpdate && u.onUpdate(t)
            },
            onComplete: () => {
              l(), u.onComplete && u.onComplete()
            },
            name: t,
            motionValue: e,
            element: a ? void 0 : r
          };
          (function(t) {
            for (const e in t)
              if (!Bt.has(e)) return !0;
            return !1
          })(u) || Object.assign(d, ((t, {
            keyframes: e
          }) => e.length > 2 ? Rt : Vt.f.has(t) ? t.startsWith("scale") ? {
            type: "spring",
            stiffness: 550,
            damping: 0 === e[1] ? 2 * Math.sqrt(550) : 30,
            restSpeed: 10
          } : Dt : Lt)(t, d)), d.duration && (d.duration = (0, i.f)(d.duration)), d.repeatDelay && (d.repeatDelay = (0, i.f)(d.repeatDelay)), void 0 !== d.from && (d.keyframes[0] = d.from);
          let p = !1;
          if ((!1 === d.type || 0 === d.duration && !d.repeatDelay) && (bt(d), 0 === d.delay && (p = !0)), (s.W.instantAnimations || s.W.skipAnimations || r?.shouldSkipAnimations || u.skipAnimations) && (p = !0, bt(d), d.delay = 0), d.allowFlatten = !u.type && !u.ease, p && !a && void 0 !== e.get()) {
            const t = (0, ut.X)(d.keyframes, u);
            if (void 0 !== t) return void V.Gt.update(() => {
              d.onUpdate(t), d.onComplete()
            })
          }
          return u.isSync ? new mt(d) : new Mt(d)
        }
    },
    79988(t, e, n) {
      "use strict";
      n.d(e, {
        h: () => d,
        q: () => h
      });
      var i = n(5458),
        s = n(67581);
      const o = new Set;
      let r = !1,
        a = !1,
        l = !1;

      function u() {
        if (a) {
          const t = Array.from(o).filter(t => t.needsMeasurement),
            e = new Set(t.map(t => t.element)),
            n = new Map;
          e.forEach(t => {
            const e = (0, i.W9)(t);
            e.length && (n.set(t, e), t.render())
          }), t.forEach(t => t.measureInitialState()), e.forEach(t => {
            t.render();
            const e = n.get(t);
            e && e.forEach(([e, n]) => {
              t.getValue(e)?.set(n)
            })
          }), t.forEach(t => t.measureEndState()), t.forEach(t => {
            void 0 !== t.suspendedScrollY && window.scrollTo(0, t.suspendedScrollY)
          })
        }
        a = !1, r = !1, o.forEach(t => t.complete(l)), o.clear()
      }

      function c() {
        o.forEach(t => {
          t.readKeyframes(), t.needsMeasurement && (a = !0)
        })
      }

      function h() {
        l = !0, c(), u(), l = !1
      }
      class d {
        constructor(t, e, n, i, s, o = !1) {
          this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...t], this.onComplete = e, this.name = n, this.motionValue = i, this.element = s, this.isAsync = o
        }
        scheduleResolve() {
          this.state = "scheduled", this.isAsync ? (o.add(this), r || (r = !0, s.Gt.read(c), s.Gt.resolveKeyframes(u))) : (this.readKeyframes(), this.complete())
        }
        readKeyframes() {
          const {
            unresolvedKeyframes: t,
            name: e,
            element: n,
            motionValue: i
          } = this;
          if (null === t[0]) {
            const s = i?.get(),
              o = t[t.length - 1];
            if (void 0 !== s) t[0] = s;
            else if (n && e) {
              const i = n.readValue(e, o);
              null != i && (t[0] = i)
            }
            void 0 === t[0] && (t[0] = o), i && void 0 === s && i.set(t[0])
          }! function(t) {
            for (let e = 1; e < t.length; e++) t[e] ?? (t[e] = t[e - 1])
          }(t)
        }
        setFinalKeyframe() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete(t = !1) {
          this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t), o.delete(this)
        }
        cancel() {
          "scheduled" === this.state && (o.delete(this), this.state = "pending")
        }
        resume() {
          "pending" === this.state && this.scheduleResolve()
        }
      }
    },
    48672(t, e, n) {
      "use strict";
      n.d(e, {
        X: () => s
      });
      const i = t => null !== t;

      function s(t, {
        repeat: e,
        repeatType: n = "loop"
      }, s, o = 1) {
        const r = t.filter(i),
          a = o < 0 || e && "loop" !== n && e % 2 == 1 ? 0 : r.length - 1;
        return a && void 0 !== s ? s : r[a]
      }
    },
    5458(t, e, n) {
      "use strict";
      n.d(e, {
        W9: () => u
      });
      var i = n(6904),
        s = n(88872),
        o = n(53481),
        r = n(82736);
      const a = new Set(["x", "y", "z"]),
        l = s.U.filter(t => !a.has(t));

      function u(t) {
        const e = [];
        return l.forEach(n => {
          const i = t.getValue(n);
          void 0 !== i && (e.push([n, i.get()]), i.set(n.startsWith("scale") ? 1 : 0))
        }), e
      }
      const c = {
        width: ({
          x: t
        }, {
          paddingLeft: e = "0",
          paddingRight: n = "0",
          boxSizing: i
        }) => {
          const s = t.max - t.min;
          return "border-box" === i ? s : s - parseFloat(e) - parseFloat(n)
        },
        height: ({
          y: t
        }, {
          paddingTop: e = "0",
          paddingBottom: n = "0",
          boxSizing: i
        }) => {
          const s = t.max - t.min;
          return "border-box" === i ? s : s - parseFloat(e) - parseFloat(n)
        },
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
        x: (t, {
          transform: e
        }) => (0, i.ry)(e, "x"),
        y: (t, {
          transform: e
        }) => (0, i.ry)(e, "y")
      };
      c.translateX = c.x, c.translateY = c.y, n.d(e, ["E4", 0, t => t === o.ai || t === r.px, "Hr", 0, c])
    },
    2911(t, e, n) {
      "use strict";
      const i = "data-" + (0, n(97369).I)("framerAppearId");
      n.d(e, ["n", 0, i])
    },
    90129(t, e, n) {
      "use strict";
      n.d(e, {
        P: () => s
      });
      var i = n(2911);

      function s(t) {
        return t.props[i.n]
      }
    },
    10320(t, e, n) {
      "use strict";
      n.d(e, {
        q: () => i
      });
      class i {
        constructor() {
          this.updateFinished()
        }
        get finished() {
          return this._finished
        }
        updateFinished() {
          this._finished = new Promise(t => {
            this.resolve = t
          })
        }
        notifyFinished() {
          this.resolve()
        }
        then(t, e) {
          return this.finished.then(t, e)
        }
      }
    },
    30637(t, e, n) {
      "use strict";
      n.d(e, {
        r: () => s
      });
      var i = n(28041);

      function s(t, e) {
        const n = t?.[e] ?? t?.default ?? t;
        return n !== t ? (0, i.K)(n, t) : n
      }
    },
    18596(t, e, n) {
      "use strict";
      n.d(e, {
        rm: () => a
      });
      const i = t => e => "string" == typeof e && e.startsWith(t),
        s = i("--"),
        o = i("var(--"),
        r = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;

      function a(t) {
        return "string" == typeof t && t.split("/*")[0].includes("var(--")
      }
      n.d(e, ["j4", 0, s, "pG", 0, t => !!o(t) && r.test(t.split("/*")[0].trim())])
    },
    28041(t, e, n) {
      "use strict";

      function i(t, e) {
        if (t?.inherit && e) {
          const {
            inherit: n,
            ...i
          } = t;
          return {
            ...e,
            ...i
          }
        }
        return t
      }
      n.d(e, {
        K: () => i
      })
    },
    34322(t, e, n) {
      "use strict";
      const i = new Set(["opacity", "clipPath", "filter", "transform"]);
      n.d(e, ["M", 0, i])
    },
    85017(t, e, n) {
      "use strict";
      n.d(e, ["K", 0, (t, e, n = 10) => {
        let i = "";
        const s = Math.max(Math.round(e / n), 2);
        for (let e = 0; e < s; e++) i += Math.round(1e4 * t(e / (s - 1))) / 1e4 + ", ";
        return `linear(${i.substring(0,i.length-2)})`
      }])
    },
    82009(t, e, n) {
      "use strict";

      function i(t, e, n, i = {
        passive: !0
      }) {
        return t.addEventListener(e, n, i), () => t.removeEventListener(e, n, i)
      }
      n.d(e, {
        k: () => i
      })
    },
    28124(t, e, n) {
      "use strict";
      n.d(e, {
        I: () => o
      });
      var i = n(19605);
      const s = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"];

      function o(t, e) {
        let n = !1,
          o = !0;
        const r = {
            delta: 0,
            timestamp: 0,
            isProcessing: !1
          },
          a = () => n = !0,
          l = s.reduce((t, e) => (t[e] = function(t) {
            let e = new Set,
              n = new Set,
              i = !1,
              s = !1;
            const o = new WeakSet;
            let r = {
              delta: 0,
              timestamp: 0,
              isProcessing: !1
            };

            function a(e) {
              o.has(e) && (l.schedule(e), t()), e(r)
            }
            const l = {
              schedule: (t, s = !1, r = !1) => {
                const a = r && i ? e : n;
                return s && o.add(t), a.add(t), t
              },
              cancel: t => {
                n.delete(t), o.delete(t)
              },
              process: t => {
                if (r = t, i) return void(s = !0);
                i = !0;
                const o = e;
                e = n, n = o, e.forEach(a), e.clear(), i = !1, s && (s = !1, l.process(t))
              }
            };
            return l
          }(a), t), {}),
          {
            setup: u,
            read: c,
            resolveKeyframes: h,
            preUpdate: d,
            update: p,
            preRender: m,
            render: f,
            postRender: v
          } = l,
          g = () => {
            const s = i.W.useManualTiming,
              a = s ? r.timestamp : performance.now();
            n = !1, s || (r.delta = o ? 1e3 / 60 : Math.max(Math.min(a - r.timestamp, 40), 1)), r.timestamp = a, r.isProcessing = !0, u.process(r), c.process(r), h.process(r), d.process(r), p.process(r), m.process(r), f.process(r), v.process(r), r.isProcessing = !1, n && e && (o = !1, t(g))
          };
        return {
          schedule: s.reduce((e, i) => {
            const s = l[i];
            return e[i] = (e, i = !1, a = !1) => (n || (n = !0, o = !0, r.isProcessing || t(g)), s.schedule(e, i, a)), e
          }, {}),
          cancel: t => {
            for (let e = 0; e < s.length; e++) l[s[e]].cancel(t)
          },
          state: r,
          steps: l
        }
      }
    },
    67581(t, e, n) {
      "use strict";
      var i = n(19759),
        s = n(28124);
      const {
        schedule: o,
        cancel: r,
        state: a,
        steps: l
      } = (0, s.I)("undefined" != typeof requestAnimationFrame ? requestAnimationFrame : i.l, !0);
      n.d(e, ["Gt", 0, o, "PP", 0, l, "WG", 0, r, "uv", 0, a])
    },
    47553(t, e, n) {
      "use strict";
      var i = n(28124);
      const {
        schedule: s,
        cancel: o
      } = (0, i.I)(queueMicrotask, !1);
      n.d(e, ["k", 0, s])
    },
    3451(t, e, n) {
      "use strict";
      var i = n(19605),
        s = n(67581);
      let o;

      function r() {
        o = void 0
      }
      const a = {
        now: () => (void 0 === o && a.set(s.uv.isProcessing || i.W.useManualTiming ? s.uv.timestamp : performance.now()), o),
        set: t => {
          o = t, queueMicrotask(r)
        }
      };
      n.d(e, ["k", 0, a])
    },
    38831(t, e, n) {
      "use strict";
      n.d(e, {
        D: () => s
      });
      const i = {
        x: !1,
        y: !1
      };

      function s() {
        return i.x || i.y
      }
      n.d(e, ["I", 0, i])
    },
    37606(t, e, n) {
      "use strict";
      n.d(e, {
        a: () => r,
        c: () => s
      });
      const i = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);

      function s(t) {
        return i.has(t.tagName) || !0 === t.isContentEditable
      }
      const o = new Set(["INPUT", "SELECT", "TEXTAREA"]);

      function r(t) {
        return o.has(t.tagName) || !0 === t.isContentEditable
      }
    },
    78834(t, e, n) {
      "use strict";
      n.d(e, ["M", 0, t => "mouse" === t.pointerType ? "number" != typeof t.button || t.button <= 0 : !1 !== t.isPrimary])
    },
    7635(t, e, n) {
      "use strict";

      function i({
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

      function s({
        x: t,
        y: e
      }) {
        return {
          top: e.min,
          right: t.max,
          bottom: e.max,
          left: t.min
        }
      }

      function o(t, e) {
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
      }
      n.d(e, {
        FY: () => i,
        bS: () => o,
        pA: () => s
      })
    },
    43684(t, e, n) {
      "use strict";
      n.d(e, {
        OU: () => h,
        Ql: () => d,
        Ww: () => f,
        hq: () => o,
        o4: () => l
      });
      var i = n(65966),
        s = n(57537);

      function o(t, e, n) {
        return n + e * (t - n)
      }

      function r(t, e, n, i, s) {
        return void 0 !== s && (t = o(t, s, i)), o(t, n, i) + e
      }

      function a(t, e = 0, n = 1, i, s) {
        t.min = r(t.min, e, n, i, s), t.max = r(t.max, e, n, i, s)
      }

      function l(t, {
        x: e,
        y: n
      }) {
        a(t.x, e.translate, e.scale, e.originPoint), a(t.y, n.translate, n.scale, n.originPoint)
      }
      const u = .999999999999,
        c = 1.0000000000001;

      function h(t, e, n, i = !1) {
        const o = n.length;
        if (!o) return;
        let r, a;
        e.x = e.y = 1;
        for (let u = 0; u < o; u++) {
          r = n[u], a = r.projectionDelta;
          const {
            visualElement: o
          } = r.options;
          o && o.props.style && "contents" === o.props.style.display || (i && r.options.layoutScroll && r.scroll && r !== r.root && (d(t.x, -r.scroll.offset.x), d(t.y, -r.scroll.offset.y)), a && (e.x *= a.x.scale, e.y *= a.y.scale, l(t, a)), i && (0, s.HD)(r.latestValues) && f(t, r.latestValues, r.layout?.layoutBox))
        }
        e.x < c && e.x > u && (e.x = 1), e.y < c && e.y > u && (e.y = 1)
      }

      function d(t, e) {
        t.min += e, t.max += e
      }

      function p(t, e, n, s, o = .5) {
        a(t, e, n, (0, i.k)(t.min, t.max, o), s)
      }

      function m(t, e) {
        return "string" == typeof t ? parseFloat(t) / 100 * (e.max - e.min) : t
      }

      function f(t, e, n) {
        const i = n ?? t;
        p(t.x, m(e.x, i.x), e.scaleX, e.scale, e.originX), p(t.y, m(e.y, i.y), e.scaleY, e.scale, e.originY)
      }
    },
    20673(t, e, n) {
      "use strict";
      n.d(e, ["ge", 0, () => ({
        x: {
          min: 0,
          max: 0
        },
        y: {
          min: 0,
          max: 0
        }
      }), "xU", 0, () => ({
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
      })])
    },
    28966(t, e, n) {
      "use strict";
      n.d(e, {
        H: () => u
      });
      var i = n(82736);

      function s(t, e) {
        return e.max === e.min ? 0 : t / (e.max - e.min) * 100
      }
      const o = {
        correct: (t, e) => {
          if (!e.target) return t;
          if ("string" == typeof t) {
            if (!i.px.test(t)) return t;
            t = parseFloat(t)
          }
          return `${s(t,e.target.x)}% ${s(t,e.target.y)}%`
        }
      };
      var r = n(64215),
        a = n(65966);
      const l = {
          correct: (t, {
            treeScale: e,
            projectionDelta: n
          }) => {
            const i = t,
              s = r.f.parse(t);
            if (s.length > 5) return i;
            const o = r.f.createTransformer(t),
              l = "number" != typeof s[0] ? 1 : 0,
              u = n.x.scale * e.x,
              c = n.y.scale * e.y;
            s[0 + l] /= u, s[1 + l] /= c;
            const h = (0, a.k)(u, c, .5);
            return "number" == typeof s[2 + l] && (s[2 + l] /= h), "number" == typeof s[3 + l] && (s[3 + l] /= h), o(s)
          }
        },
        u = {
          borderRadius: {
            ...o,
            applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
          },
          borderTopLeftRadius: o,
          borderTopRightRadius: o,
          borderBottomLeftRadius: o,
          borderBottomRightRadius: o,
          boxShadow: l
        }
    },
    57537(t, e, n) {
      "use strict";

      function i(t) {
        return void 0 === t || 1 === t
      }

      function s({
        scale: t,
        scaleX: e,
        scaleY: n
      }) {
        return !i(t) || !i(e) || !i(n)
      }

      function o(t) {
        return s(t) || r(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY
      }

      function r(t) {
        return a(t.x) || a(t.y)
      }

      function a(t) {
        return t && "0%" !== t
      }
      n.d(e, {
        HD: () => o,
        vF: () => r,
        vk: () => s
      })
    },
    98970(t, e, n) {
      "use strict";
      n.d(e, {
        L: () => r,
        m: () => o
      });
      var i = n(7635),
        s = n(43684);

      function o(t, e) {
        return (0, i.FY)((0, i.bS)(t.getBoundingClientRect(), e))
      }

      function r(t, e, n) {
        const i = o(t, n),
          {
            scroll: r
          } = e;
        return r && ((0, s.Ql)(i.x, r.offset.x), (0, s.Ql)(i.y, r.offset.y)), i
      }
    },
    80425(t, e, n) {
      "use strict";
      n.d(e, {
        X: () => i
      });
      class i {
        constructor(t) {
          this.isMounted = !1, this.node = t
        }
        update() {}
      }
    },
    93577(t, e, n) {
      "use strict";
      n.d(e, {
        BX: () => L,
        vK: () => R,
        lr: () => D
      });
      var i = n(18197),
        s = n(19688),
        o = n(72124),
        r = n(61010),
        a = n(79988),
        l = n(59839),
        u = n(34322),
        c = n(47553),
        h = n(3451),
        d = n(20673),
        p = n(7356),
        m = n(64215),
        f = n(52607),
        v = n(84342),
        g = n(36502),
        y = n(81454);
      const x = [...g.T, v.y, m.f];
      var w = n(80525);
      const T = new WeakMap;
      var b = n(46086),
        S = n(88872);
      const P = {
          current: null
        },
        E = {
          current: !1
        },
        k = "undefined" != typeof window;
      var A = n(23836),
        M = n(67581);
      const C = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
      let V = {};

      function D(t) {
        V = t
      }

      function R() {
        return V
      }
      class L {
        scrapeMotionValuesFromProps(t, e, n) {
          return {}
        }
        constructor({
          parent: t,
          props: e,
          presenceContext: n,
          reducedMotionConfig: i,
          skipAnimations: s,
          blockInitialAnimation: o,
          visualState: r
        }, l = {}) {
          this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.shouldSkipAnimations = !1, this.values = new Map, this.KeyframeResolver = a.h, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.hasBeenMounted = !1, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
            this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
          }, this.renderScheduledAt = 0, this.scheduleRender = () => {
            const t = h.k.now();
            this.renderScheduledAt < t && (this.renderScheduledAt = t, M.Gt.render(this.render, !1, !0))
          };
          const {
            latestValues: u,
            renderState: c
          } = r;
          this.latestValues = u, this.baseTarget = {
            ...u
          }, this.initialValues = e.initial ? {
            ...u
          } : {}, this.renderState = c, this.parent = t, this.props = e, this.presenceContext = n, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = i, this.skipAnimationsConfig = s, this.options = l, this.blockInitialAnimation = Boolean(o), this.isControllingVariants = (0, b.e)(e), this.isVariantNode = (0, b.O)(e), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = Boolean(t && t.current);
          const {
            willChange: d,
            ...p
          } = this.scrapeMotionValuesFromProps(e, {}, this);
          for (const t in p) {
            const e = p[t];
            void 0 !== u[t] && (0, w.S)(e) && e.set(u[t])
          }
        }
        mount(t) {
          if (this.hasBeenMounted)
            for (const t in this.initialValues) this.values.get(t)?.jump(this.initialValues[t]), this.latestValues[t] = this.initialValues[t];
          this.current = t, T.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((t, e) => this.bindToMotionValue(e, t)), "never" === this.reducedMotionConfig ? this.shouldReduceMotion = !1 : "always" === this.reducedMotionConfig ? this.shouldReduceMotion = !0 : (E.current || function() {
            if (E.current = !0, k)
              if (window.matchMedia) {
                const t = window.matchMedia("(prefers-reduced-motion)"),
                  e = () => P.current = t.matches;
                t.addEventListener("change", e), e()
              } else P.current = !1
          }(), this.shouldReduceMotion = P.current), this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1, this.parent?.addChild(this), this.update(this.props, this.presenceContext), this.hasBeenMounted = !0
        }
        unmount() {
          this.projection && this.projection.unmount(), (0, M.WG)(this.notifyUpdate), (0, M.WG)(this.render), this.valueSubscriptions.forEach(t => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent?.removeChild(this);
          for (const t in this.events) this.events[t].clear();
          for (const t in this.features) {
            const e = this.features[t];
            e && (e.unmount(), e.isMounted = !1)
          }
          this.current = null
        }
        addChild(t) {
          this.children.add(t), this.enteringChildren ?? (this.enteringChildren = new Set), this.enteringChildren.add(t)
        }
        removeChild(t) {
          this.children.delete(t), this.enteringChildren && this.enteringChildren.delete(t)
        }
        bindToMotionValue(t, e) {
          if (this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)(), e.accelerate && u.M.has(t) && this.current instanceof HTMLElement) {
            const {
              factory: n,
              keyframes: s,
              times: o,
              ease: r,
              duration: a
            } = e.accelerate, u = new l.m({
              element: this.current,
              name: t,
              keyframes: s,
              times: o,
              ease: r,
              duration: (0, i.f)(a)
            }), c = n(u);
            return void this.valueSubscriptions.set(t, () => {
              c(), u.cancel()
            })
          }
          const n = S.f.has(t);
          n && this.onBindTransform && this.onBindTransform();
          const s = e.on("change", e => {
            this.latestValues[t] = e, this.props.onUpdate && M.Gt.preRender(this.notifyUpdate), n && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender()
          });
          let o;
          "undefined" != typeof window && window.MotionCheckAppearSync && (o = window.MotionCheckAppearSync(this, t, e)), this.valueSubscriptions.set(t, () => {
            s(), o && o()
          })
        }
        sortNodePosition(t) {
          return this.current && this.sortInstanceNodePosition && this.type === t.type ? this.sortInstanceNodePosition(this.current, t.current) : 0
        }
        updateFeatures() {
          let t = "animation";
          for (t in V) {
            const e = V[t];
            if (!e) continue;
            const {
              isEnabled: n,
              Feature: i
            } = e;
            if (!this.features[t] && i && n(this.props) && (this.features[t] = new i(this)), this.features[t]) {
              const e = this.features[t];
              e.isMounted ? e.update() : (e.mount(), e.isMounted = !0)
            }
          }
        }
        triggerBuild() {
          this.build(this.renderState, this.latestValues, this.props)
        }
        measureViewportBox() {
          return this.current ? this.measureInstanceViewportBox(this.current, this.props) : (0, d.ge)()
        }
        getStaticValue(t) {
          return this.latestValues[t]
        }
        setStaticValue(t, e) {
          this.latestValues[t] = e
        }
        update(t, e) {
          (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = e;
          for (let e = 0; e < C.length; e++) {
            const n = C[e];
            this.propEventSubscriptions[n] && (this.propEventSubscriptions[n](), delete this.propEventSubscriptions[n]);
            const i = t["on" + n];
            i && (this.propEventSubscriptions[n] = this.on(n, i))
          }
          this.prevMotionValues = function(t, e, n) {
            for (const i in e) {
              const s = e[i],
                o = n[i];
              if ((0, w.S)(s)) t.addValue(i, s);
              else if ((0, w.S)(o)) t.addValue(i, (0, p.OQ)(s, {
                owner: t
              }));
              else if (o !== s)
                if (t.hasValue(i)) {
                  const e = t.getValue(i);
                  !0 === e.liveStyle ? e.jump(s) : e.hasAnimated || e.set(s)
                } else {
                  const e = t.getStaticValue(i);
                  t.addValue(i, (0, p.OQ)(void 0 !== e ? e : s, {
                    owner: t
                  }))
                }
            }
            for (const i in n) void 0 === e[i] && t.removeValue(i);
            return e
          }(this, this.scrapeMotionValuesFromProps(t, this.prevProps || {}, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue()
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
        addVariantChild(t) {
          const e = this.getClosestVariantNode();
          if (e) return e.variantChildren && e.variantChildren.add(t), () => e.variantChildren.delete(t)
        }
        addValue(t, e) {
          const n = this.values.get(t);
          e !== n && (n && this.removeValue(t), this.bindToMotionValue(t, e), this.values.set(t, e), this.latestValues[t] = e.get())
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
          return void 0 === n && void 0 !== e && (n = (0, p.OQ)(null === e ? void 0 : e, {
            owner: this
          }), this.addValue(t, n)), n
        }
        readValue(t, e) {
          let n = void 0 === this.latestValues[t] && this.current ? this.getBaseTargetFromProps(this.props, t) ?? this.readValueFromInstance(this.current, t, this.options) : this.latestValues[t];
          var i;
          return null != n && ("string" == typeof n && ((0, s.i)(n) || (0, o.$)(n)) ? n = parseFloat(n) : (i = n, !x.find((0, y.w)(i)) && m.f.test(e) && (n = (0, f.J)(t, e))), this.setBaseTarget(t, (0, w.S)(n) ? n.get() : n)), (0, w.S)(n) ? n.get() : n
        }
        setBaseTarget(t, e) {
          this.baseTarget[t] = e
        }
        getBaseTarget(t) {
          const {
            initial: e
          } = this.props;
          let n;
          if ("string" == typeof e || "object" == typeof e) {
            const i = (0, A.a)(this.props, e, this.presenceContext?.custom);
            i && (n = i[t])
          }
          if (e && void 0 !== n) return n;
          const i = this.getBaseTargetFromProps(this.props, t);
          return void 0 === i || (0, w.S)(i) ? void 0 !== this.initialValues[t] && void 0 === n ? void 0 : this.baseTarget[t] : i
        }
        on(t, e) {
          return this.events[t] || (this.events[t] = new r.v), this.events[t].add(e)
        }
        notify(t, ...e) {
          this.events[t] && this.events[t].notify(...e)
        }
        scheduleRenderMicrotask() {
          c.k.render(this.render)
        }
      }
    },
    6904(t, e, n) {
      "use strict";
      n.d(e, {
        ry: () => h,
        zs: () => c
      });
      const i = t => 180 * t / Math.PI,
        s = t => {
          const e = i(Math.atan2(t[1], t[0]));
          return r(e)
        },
        o = {
          x: 4,
          y: 5,
          translateX: 4,
          translateY: 5,
          scaleX: 0,
          scaleY: 3,
          scale: t => (Math.abs(t[0]) + Math.abs(t[3])) / 2,
          rotate: s,
          rotateZ: s,
          skewX: t => i(Math.atan(t[1])),
          skewY: t => i(Math.atan(t[2])),
          skew: t => (Math.abs(t[1]) + Math.abs(t[2])) / 2
        },
        r = t => ((t %= 360) < 0 && (t += 360), t),
        a = t => Math.sqrt(t[0] * t[0] + t[1] * t[1]),
        l = t => Math.sqrt(t[4] * t[4] + t[5] * t[5]),
        u = {
          x: 12,
          y: 13,
          z: 14,
          translateX: 12,
          translateY: 13,
          translateZ: 14,
          scaleX: a,
          scaleY: l,
          scale: t => (a(t) + l(t)) / 2,
          rotateX: t => r(i(Math.atan2(t[6], t[5]))),
          rotateY: t => r(i(Math.atan2(-t[2], t[0]))),
          rotateZ: s,
          rotate: s,
          skewX: t => i(Math.atan(t[4])),
          skewY: t => i(Math.atan(t[1])),
          skew: t => (Math.abs(t[1]) + Math.abs(t[4])) / 2
        };

      function c(t) {
        return t.includes("scale") ? 1 : 0
      }

      function h(t, e) {
        if (!t || "none" === t) return c(e);
        const n = t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
        let i, s;
        if (n) i = u, s = n;
        else {
          const e = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
          i = o, s = e
        }
        if (!s) return c(e);
        const r = i[e],
          a = s[1].split(",").map(d);
        return "function" == typeof r ? r(a) : a[r]
      }

      function d(t) {
        return parseFloat(t.trim())
      }
      n.d(e, ["Ib", 0, (t, e) => {
        const {
          transform: n = "none"
        } = getComputedStyle(t);
        return h(n, e)
      }])
    },
    13800(t, e, n) {
      "use strict";

      function i(t, e, n) {
        (t => t.startsWith("--"))(e) ? t.style.setProperty(e, n): t.style[e] = n
      }
      n.d(e, {
        e: () => i
      })
    },
    97369(t, e, n) {
      "use strict";

      function i(t) {
        return t.replace(/([A-Z])/g, t => `-${t.toLowerCase()}`)
      }
      n.d(e, {
        I: () => i
      })
    },
    50100(t, e, n) {
      "use strict";
      n.d(e, {
        O: () => u
      });
      const i = (t, e) => e && "number" == typeof t ? e.transform(t) : t;
      var s = n(72368),
        o = n(88872),
        r = n(18596);
      const a = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective"
        },
        l = o.U.length;

      function u(t, e, n) {
        const {
          style: u,
          vars: c,
          transformOrigin: h
        } = t;
        let d = !1,
          p = !1;
        for (const t in e) {
          const n = e[t];
          if (o.f.has(t)) d = !0;
          else if ((0, r.j4)(t)) c[t] = n;
          else {
            const e = i(n, s.W[t]);
            t.startsWith("origin") ? (p = !0, h[t] = e) : u[t] = e
          }
        }
        if (e.transform || (d || n ? u.transform = function(t, e, n) {
            let r = "",
              u = !0;
            for (let c = 0; c < l; c++) {
              const l = o.U[c],
                h = t[l];
              if (void 0 === h) continue;
              let d = !0;
              if ("number" == typeof h) d = h === (l.startsWith("scale") ? 1 : 0);
              else {
                const t = parseFloat(h);
                d = l.startsWith("scale") ? 1 === t : 0 === t
              }
              if (!d || n) {
                const t = i(h, s.W[l]);
                d || (u = !1, r += `${a[l]||l}(${t}) `), n && (e[l] = t)
              }
            }
            const c = t.pathRotation;
            return c && (u = !1, r += `rotate(${i(c,s.W.pathRotation)}) `), r = r.trim(), n ? r = n(e, u ? "" : r) : u && (r = "none"), r
          }(e, t.transform, n) : u.transform && (u.transform = "none")), p) {
          const {
            originX: t = "50%",
            originY: e = "50%",
            originZ: n = 0
          } = h;
          u.transformOrigin = `${t} ${e} ${n}`
        }
      }
    },
    16973(t, e, n) {
      "use strict";
      n.d(e, {
        x: () => o
      });
      var i = n(80525),
        s = n(32050);

      function o(t, e, n) {
        const o = t.style,
          r = e?.style,
          a = {};
        if (!o) return a;
        for (const e in o)((0, i.S)(o[e]) || r && (0, i.S)(r[e]) || (0, s.z)(e, t) || void 0 !== n?.getValue(e)?.liveStyle) && (a[e] = o[e]);
        return a
      }
    },
    4951(t, e, n) {
      "use strict";
      n.d(e, {
        B: () => a
      });
      var i = n(50100);
      const s = {
          offset: "stroke-dashoffset",
          array: "stroke-dasharray"
        },
        o = {
          offset: "strokeDashoffset",
          array: "strokeDasharray"
        },
        r = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];

      function a(t, {
        attrX: e,
        attrY: n,
        attrScale: a,
        pathLength: l,
        pathSpacing: u = 1,
        pathOffset: c = 0,
        ...h
      }, d, p, m) {
        if ((0, i.O)(t, h, p), d) return void(t.style.viewBox && (t.attrs.viewBox = t.style.viewBox));
        t.attrs = t.style, t.style = {};
        const {
          attrs: f,
          style: v
        } = t;
        f.transform && (v.transform = f.transform, delete f.transform), (v.transform || f.transformOrigin) && (v.transformOrigin = f.transformOrigin ?? "50% 50%", delete f.transformOrigin), v.transform && (v.transformBox = m?.transformBox ?? "fill-box", delete f.transformBox);
        for (const t of r) void 0 !== f[t] && (v[t] = f[t], delete f[t]);
        void 0 !== e && (f.x = e), void 0 !== n && (f.y = n), void 0 !== a && (f.scale = a), void 0 !== l && function(t, e, n = 1, i = 0, r = !0) {
          t.pathLength = 1;
          const a = r ? s : o;
          t[a.offset] = "" + -i, t[a.array] = `${e} ${n}`
        }(f, l, u, c, !1)
      }
    },
    73560(t, e, n) {
      "use strict";
      n.d(e, ["n", 0, t => "string" == typeof t && "svg" === t.toLowerCase()])
    },
    7372(t, e, n) {
      "use strict";
      n.d(e, {
        x: () => r
      });
      var i = n(80525),
        s = n(88872),
        o = n(16973);

      function r(t, e, n) {
        const r = (0, o.x)(t, e, n);
        for (const n in t)((0, i.S)(t[n]) || (0, i.S)(e[n])) && (r[-1 !== s.U.indexOf(n) ? "attr" + n.charAt(0).toUpperCase() + n.substring(1) : n] = t[n]);
        return r
      }
    },
    57873(t, e, n) {
      "use strict";

      function i(t) {
        return null !== t && "object" == typeof t && "function" == typeof t.start
      }
      n.d(e, {
        N: () => i
      })
    },
    46086(t, e, n) {
      "use strict";
      n.d(e, {
        O: () => a,
        e: () => r
      });
      var i = n(57873),
        s = n(10450),
        o = n(58875);

      function r(t) {
        return (0, i.N)(t.animate) || o._.some(e => (0, s.w)(t[e]))
      }

      function a(t) {
        return Boolean(r(t) || t.variants)
      }
    },
    32050(t, e, n) {
      "use strict";
      n.d(e, {
        z: () => o
      });
      var i = n(88872),
        s = n(28966);

      function o(t, {
        layout: e,
        layoutId: n
      }) {
        return i.f.has(t) || t.startsWith("origin") || (e || void 0 !== n) && (!!s.H[t] || "opacity" === t)
      }
    },
    10450(t, e, n) {
      "use strict";

      function i(t) {
        return "string" == typeof t || Array.isArray(t)
      }
      n.d(e, {
        w: () => i
      })
    },
    87817(t, e, n) {
      "use strict";
      var i = n(88872);
      const s = new Set(["width", "height", "top", "left", "right", "bottom", ...i.U]);
      n.d(e, ["$", 0, s])
    },
    88872(t, e, n) {
      "use strict";
      const i = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
        s = (() => new Set([...i, "pathRotation"]))();
      n.d(e, ["U", 0, i, "f", 0, s])
    },
    23836(t, e, n) {
      "use strict";

      function i(t) {
        const e = [{}, {}];
        return t?.values.forEach((t, n) => {
          e[0][n] = t.get(), e[1][n] = t.getVelocity()
        }), e
      }

      function s(t, e, n, s) {
        if ("function" == typeof e) {
          const [o, r] = i(s);
          e = e(void 0 !== n ? n : t.custom, o, r)
        }
        if ("string" == typeof e && (e = t.variants && t.variants[e]), "function" == typeof e) {
          const [o, r] = i(s);
          e = e(void 0 !== n ? n : t.custom, o, r)
        }
        return e
      }
      n.d(e, {
        a: () => s
      })
    },
    58875(t, e, n) {
      "use strict";
      const i = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
        s = ["initial", ...i];
      n.d(e, ["U", 0, i, "_", 0, s])
    },
    65966(t, e, n) {
      "use strict";
      n.d(e, ["k", 0, (t, e, n) => t + (e - t) * n])
    },
    95286(t, e, n) {
      "use strict";

      function i(t, e, n) {
        if (null == t) return [];
        if (t instanceof EventTarget) return [t];
        if ("string" == typeof t) {
          let i = document;
          e && (i = e.current);
          const s = n?.[t] ?? i.querySelectorAll(t);
          return s ? Array.from(s) : []
        }
        return Array.from(t).filter(t => null != t)
      }
      n.d(e, {
        K: () => i
      })
    },
    7356(t, e, n) {
      "use strict";
      n.d(e, {
        OQ: () => u
      });
      var i = n(61010),
        s = n(56029),
        o = n(3451),
        r = n(67581);
      const a = {
        current: void 0
      };
      class l {
        constructor(t, e = {}) {
          this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = t => {
            const e = o.k.now();
            if (this.updatedAt !== e && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(t), this.current !== this.prev && (this.events.change?.notify(this.current), this.dependents))
              for (const t of this.dependents) t.dirty()
          }, this.hasAnimated = !1, this.setCurrent(t), this.owner = e.owner
        }
        setCurrent(t) {
          var e;
          this.current = t, this.updatedAt = o.k.now(), null === this.canTrackVelocity && void 0 !== t && (this.canTrackVelocity = (e = this.current, !isNaN(parseFloat(e))))
        }
        setPrevFrameValue(t = this.current) {
          this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt
        }
        onChange(t) {
          return this.on("change", t)
        }
        on(t, e) {
          this.events[t] || (this.events[t] = new i.v);
          const n = this.events[t].add(e);
          return "change" === t ? () => {
            n(), r.Gt.read(() => {
              this.events.change.getSize() || this.stop()
            })
          } : n
        }
        clearListeners() {
          for (const t in this.events) this.events[t].clear()
        }
        attach(t, e) {
          this.passiveEffect = t, this.stopPassiveEffect = e
        }
        set(t) {
          this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t)
        }
        setWithVelocity(t, e, n) {
          this.set(e), this.prev = void 0, this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt - n
        }
        jump(t, e = !0) {
          this.updateAndNotify(t), this.prev = t, this.prevUpdatedAt = this.prevFrameValue = void 0, e && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
        }
        dirty() {
          this.events.change?.notify(this.current)
        }
        addDependent(t) {
          this.dependents || (this.dependents = new Set), this.dependents.add(t)
        }
        removeDependent(t) {
          this.dependents && this.dependents.delete(t)
        }
        get() {
          return a.current && a.current.push(this), this.current
        }
        getPrevious() {
          return this.prev
        }
        getVelocity() {
          const t = o.k.now();
          if (!this.canTrackVelocity || void 0 === this.prevFrameValue || t - this.updatedAt > 30) return 0;
          const e = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
          return (0, s.f)(parseFloat(this.current) - parseFloat(this.prevFrameValue), e)
        }
        start(t) {
          return this.stop(), new Promise(e => {
            this.hasAnimated = !0, this.animation = t(e), this.events.animationStart && this.events.animationStart.notify()
          }).then(() => {
            this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
          })
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
          this.dependents?.clear(), this.events.destroy?.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
        }
      }

      function u(t, e) {
        return new l(t, e)
      }
    },
    98973(t, e, n) {
      "use strict";
      var i = n(92520);
      const s = {
        test: (0, n(35404).$)("#"),
        parse: function(t) {
          let e = "",
            n = "",
            i = "",
            s = "";
          return t.length > 5 ? (e = t.substring(1, 3), n = t.substring(3, 5), i = t.substring(5, 7), s = t.substring(7, 9)) : (e = t.substring(1, 2), n = t.substring(2, 3), i = t.substring(3, 4), s = t.substring(4, 5), e += e, n += n, i += i, s += s), {
            red: parseInt(e, 16),
            green: parseInt(n, 16),
            blue: parseInt(i, 16),
            alpha: s ? parseInt(s, 16) / 255 : 1
          }
        },
        transform: i.B.transform
      };
      n.d(e, ["u", 0, s])
    },
    96620(t, e, n) {
      "use strict";
      var i = n(53481),
        s = n(82736),
        o = n(85057),
        r = n(35404);
      const a = {
        test: (0, r.$)("hsl", "hue"),
        parse: (0, r.q)("hue", "saturation", "lightness"),
        transform: ({
          hue: t,
          saturation: e,
          lightness: n,
          alpha: r = 1
        }) => "hsla(" + Math.round(t) + ", " + s.KN.transform((0, o.a)(e)) + ", " + s.KN.transform((0, o.a)(n)) + ", " + (0, o.a)(i.X4.transform(r)) + ")"
      };
      n.d(e, ["V", 0, a])
    },
    84342(t, e, n) {
      "use strict";
      var i = n(98973),
        s = n(96620),
        o = n(92520);
      const r = {
        test: t => o.B.test(t) || i.u.test(t) || s.V.test(t),
        parse: t => o.B.test(t) ? o.B.parse(t) : s.V.test(t) ? s.V.parse(t) : i.u.parse(t),
        transform: t => "string" == typeof t ? t : t.hasOwnProperty("red") ? o.B.transform(t) : s.V.transform(t),
        getAnimatableNone: t => {
          const e = r.parse(t);
          return e.alpha = 0, r.transform(e)
        }
      };
      n.d(e, ["y", 0, r])
    },
    92520(t, e, n) {
      "use strict";
      var i = n(16340),
        s = n(53481),
        o = n(85057),
        r = n(35404);
      const a = {
          ...s.ai,
          transform: t => Math.round((t => (0, i.q)(0, 255, t))(t))
        },
        l = {
          test: (0, r.$)("rgb", "red"),
          parse: (0, r.q)("red", "green", "blue"),
          transform: ({
            red: t,
            green: e,
            blue: n,
            alpha: i = 1
          }) => "rgba(" + a.transform(t) + ", " + a.transform(e) + ", " + a.transform(n) + ", " + (0, o.a)(s.X4.transform(i)) + ")"
        };
      n.d(e, ["B", 0, l])
    },
    35404(t, e, n) {
      "use strict";
      n.d(e, {
        $: () => o,
        q: () => r
      });
      var i = n(29060);
      const s = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
        o = (t, e) => n => Boolean("string" == typeof n && s.test(n) && n.startsWith(t) || e && ! function(t) {
          return null == t
        }(n) && Object.prototype.hasOwnProperty.call(n, e)),
        r = (t, e, n) => s => {
          if ("string" != typeof s) return s;
          const [o, r, a, l] = s.match(i.S);
          return {
            [t]: parseFloat(o),
            [e]: parseFloat(r),
            [n]: parseFloat(a),
            alpha: void 0 !== l ? parseFloat(l) : 1
          }
        }
    },
    47427(t, e, n) {
      "use strict";
      var i = n(64215),
        s = n(29060);
      const o = new Set(["brightness", "contrast", "saturate", "opacity"]);

      function r(t) {
        const [e, n] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        const [i] = n.match(s.S) || [];
        if (!i) return t;
        const r = n.replace(i, "");
        let a = o.has(e) ? 1 : 0;
        return i !== n && (a *= 100), e + "(" + a + r + ")"
      }
      const a = /\b([a-z-]*)\(.*?\)/gu,
        l = {
          ...i.f,
          getAnimatableNone: t => {
            const e = t.match(a);
            return e ? e.map(r).join(" ") : t
          }
        };
      n.d(e, ["p", 0, l])
    },
    64215(t, e, n) {
      "use strict";
      n.d(e, {
        V: () => c,
        f: () => d
      });
      var i = n(84342);
      const s = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
      var o = n(29060),
        r = n(85057);
      const a = "number",
        l = "color",
        u = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;

      function c(t) {
        const e = t.toString(),
          n = [],
          s = {
            color: [],
            number: [],
            var: []
          },
          o = [];
        let r = 0;
        const c = e.replace(u, t => (i.y.test(t) ? (s.color.push(r), o.push(l), n.push(i.y.parse(t))) : t.startsWith("var(") ? (s.var.push(r), o.push("var"), n.push(t)) : (s.number.push(r), o.push(a), n.push(parseFloat(t))), ++r, "${}")).split("${}");
        return {
          values: n,
          split: c,
          indexes: s,
          types: o
        }
      }

      function h({
        split: t,
        types: e
      }) {
        const n = t.length;
        return s => {
          let o = "";
          for (let u = 0; u < n; u++)
            if (o += t[u], void 0 !== s[u]) {
              const t = e[u];
              o += t === a ? (0, r.a)(s[u]) : t === l ? i.y.transform(s[u]) : s[u]
            } return o
        }
      }
      const d = {
        test: function(t) {
          return isNaN(t) && "string" == typeof t && (t.match(o.S)?.length || 0) + (t.match(s)?.length || 0) > 0
        },
        parse: function(t) {
          return c(t).values
        },
        createTransformer: function(t) {
          return h(c(t))
        },
        getAnimatableNone: function(t) {
          const e = c(t);
          return h(e)(e.values.map((t, n) => ((t, e) => {
            return "number" == typeof t ? e?.trim().endsWith("/") ? t : 0 : "number" == typeof(n = t) ? 0 : i.y.test(n) ? i.y.getAnimatableNone(n) : n;
            var n
          })(t, e.split[n])))
        }
      }
    },
    20653(t, e, n) {
      "use strict";
      var i = n(64215);
      const s = {
        ...i.f,
        getAnimatableNone: t => {
          const e = i.f.parse(t);
          return i.f.createTransformer(t)(e.map(t => "number" == typeof t ? 0 : "object" == typeof t ? {
            ...t,
            alpha: 1
          } : t))
        }
      };
      n.d(e, ["d", 0, s])
    },
    36502(t, e, n) {
      "use strict";
      n.d(e, {
        T: () => r,
        n: () => a
      });
      var i = n(53481),
        s = n(82736),
        o = n(81454);
      const r = [i.ai, s.px, s.KN, s.uj, s.vw, s.vh, {
          test: t => "auto" === t,
          parse: t => t
        }],
        a = t => r.find((0, o.w)(t))
    },
    16060(t, e, n) {
      "use strict";
      var i = n(84342),
        s = n(47427),
        o = n(20653);
      const r = {
        ...n(72368).W,
        color: i.y,
        backgroundColor: i.y,
        outlineColor: i.y,
        fill: i.y,
        stroke: i.y,
        borderColor: i.y,
        borderTopColor: i.y,
        borderRightColor: i.y,
        borderBottomColor: i.y,
        borderLeftColor: i.y,
        filter: s.p,
        WebkitFilter: s.p,
        mask: o.d,
        WebkitMask: o.d
      };
      n.d(e, ["D", 0, t => r[t]])
    },
    72368(t, e, n) {
      "use strict";
      n.d(e, {
        W: () => a
      });
      var i = n(53481);
      const s = {
        ...i.ai,
        transform: Math.round
      };
      var o = n(82736);
      const r = {
          rotate: o.uj,
          pathRotation: o.uj,
          rotateX: o.uj,
          rotateY: o.uj,
          rotateZ: o.uj,
          scale: i.hs,
          scaleX: i.hs,
          scaleY: i.hs,
          scaleZ: i.hs,
          skew: o.uj,
          skewX: o.uj,
          skewY: o.uj,
          distance: o.px,
          translateX: o.px,
          translateY: o.px,
          translateZ: o.px,
          x: o.px,
          y: o.px,
          z: o.px,
          perspective: o.px,
          transformPerspective: o.px,
          opacity: i.X4,
          originX: o.gQ,
          originY: o.gQ,
          originZ: o.px
        },
        a = {
          borderWidth: o.px,
          borderTopWidth: o.px,
          borderRightWidth: o.px,
          borderBottomWidth: o.px,
          borderLeftWidth: o.px,
          borderRadius: o.px,
          borderTopLeftRadius: o.px,
          borderTopRightRadius: o.px,
          borderBottomRightRadius: o.px,
          borderBottomLeftRadius: o.px,
          width: o.px,
          maxWidth: o.px,
          height: o.px,
          maxHeight: o.px,
          top: o.px,
          right: o.px,
          bottom: o.px,
          left: o.px,
          inset: o.px,
          insetBlock: o.px,
          insetBlockStart: o.px,
          insetBlockEnd: o.px,
          insetInline: o.px,
          insetInlineStart: o.px,
          insetInlineEnd: o.px,
          padding: o.px,
          paddingTop: o.px,
          paddingRight: o.px,
          paddingBottom: o.px,
          paddingLeft: o.px,
          paddingBlock: o.px,
          paddingBlockStart: o.px,
          paddingBlockEnd: o.px,
          paddingInline: o.px,
          paddingInlineStart: o.px,
          paddingInlineEnd: o.px,
          margin: o.px,
          marginTop: o.px,
          marginRight: o.px,
          marginBottom: o.px,
          marginLeft: o.px,
          marginBlock: o.px,
          marginBlockStart: o.px,
          marginBlockEnd: o.px,
          marginInline: o.px,
          marginInlineStart: o.px,
          marginInlineEnd: o.px,
          fontSize: o.px,
          backgroundPositionX: o.px,
          backgroundPositionY: o.px,
          ...r,
          zIndex: s,
          fillOpacity: i.X4,
          strokeOpacity: i.X4,
          numOctaves: s
        }
    },
    53481(t, e, n) {
      "use strict";
      var i = n(16340);
      const s = {
          test: t => "number" == typeof t,
          parse: parseFloat,
          transform: t => t
        },
        o = {
          ...s,
          transform: t => (0, i.q)(0, 1, t)
        },
        r = {
          ...s,
          default: 1
        };
      n.d(e, ["X4", 0, o, "ai", 0, s, "hs", 0, r])
    },
    82736(t, e, n) {
      "use strict";
      const i = t => ({
          test: e => "string" == typeof e && e.endsWith(t) && 1 === e.split(" ").length,
          parse: parseFloat,
          transform: e => `${e}${t}`
        }),
        s = i("deg"),
        o = i("%"),
        r = i("px"),
        a = i("vh"),
        l = i("vw"),
        u = (() => ({
          ...o,
          parse: t => o.parse(t) / 100,
          transform: t => o.transform(100 * t)
        }))();
      n.d(e, ["KN", 0, o, "gQ", 0, u, "px", 0, r, "uj", 0, s, "vh", 0, a, "vw", 0, l])
    },
    81454(t, e, n) {
      "use strict";
      n.d(e, ["w", 0, t => e => e.test(t)])
    },
    52607(t, e, n) {
      "use strict";
      n.d(e, {
        J: () => l
      });
      var i = n(64215),
        s = n(47427),
        o = n(20653),
        r = n(16060);
      const a = new Set([s.p, o.d]);

      function l(t, e) {
        let n = (0, r.D)(t);
        return a.has(n) || (n = i.f), n.getAnimatableNone ? n.getAnimatableNone(e) : void 0
      }
    },
    29060(t, e, n) {
      "use strict";
      n.d(e, ["S", 0, /-?(?:\d+(?:\.\d+)?|\.\d+)/gu])
    },
    85057(t, e, n) {
      "use strict";
      n.d(e, ["a", 0, t => Math.round(1e5 * t) / 1e5])
    },
    80525(t, e, n) {
      "use strict";
      n.d(e, ["S", 0, t => Boolean(t && t.getVelocity)])
    },
    23945(t, e, n) {
      "use strict";
      n.d(e, {
        u: () => s
      });
      var i = n(80525);

      function s(t) {
        return (0, i.S)(t) ? t.get() : t
      }
    },
    60888(t, e, n) {
      "use strict";
      n.d(e, {
        g: () => o
      });
      var i = n(19605),
        s = n(80525);

      function o(t, e) {
        const n = t.getValue("willChange");
        if (o = n, Boolean((0, s.S)(o) && o.add)) return n.add(e);
        if (!n && i.W.WillChange) {
          const n = new i.W.WillChange("auto");
          t.addValue("willChange", n), n.add(e)
        }
        var o
      }
    },
    17002(t, e, n) {
      "use strict";

      function i(t, e) {
        -1 === t.indexOf(e) && t.push(e)
      }

      function s(t, e) {
        const n = t.indexOf(e);
        n > -1 && t.splice(n, 1)
      }
      n.d(e, {
        Ai: () => s,
        Kq: () => i
      })
    },
    16340(t, e, n) {
      "use strict";
      n.d(e, ["q", 0, (t, e, n) => n > e ? e : n < t ? t : n])
    },
    16214(t, e, n) {
      "use strict";
      var i = n(74803);
      const s = t => 1 - Math.sin(Math.acos(t)),
        o = (0, n(70112).G)(s),
        r = (0, i.V)(s);
      n.d(e, ["po", 0, s, "tn", 0, r, "yT", 0, o])
    },
    74803(t, e, n) {
      "use strict";
      n.d(e, ["V", 0, t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2])
    },
    70112(t, e, n) {
      "use strict";
      n.d(e, ["G", 0, t => e => 1 - t(1 - e)])
    },
    91119(t, e, n) {
      "use strict";
      n.d(e, ["D", 0, t => Array.isArray(t) && "number" == typeof t[0]])
    },
    35378(t, e, n) {
      "use strict";
      n.d(e, {
        $: () => i,
        V: () => s
      }), n(43431);
      let i = () => {},
        s = () => {}
    },
    19605(t, e, n) {
      "use strict";
      n.d(e, ["W", 0, {}])
    },
    19688(t, e, n) {
      "use strict";
      n.d(e, ["i", 0, t => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t)])
    },
    20621(t, e, n) {
      "use strict";
      n.d(e, ["G", 0, t => "object" == typeof t && null !== t])
    },
    72124(t, e, n) {
      "use strict";
      n.d(e, ["$", 0, t => /^0[^.\s]+$/u.test(t)])
    },
    47717(t, e, n) {
      "use strict";

      function i(t) {
        let e;
        return () => (void 0 === e && (e = t()), e)
      }
      n.d(e, {
        p: () => i
      })
    },
    19759(t, e, n) {
      "use strict";
      n.d(e, ["l", 0, t => t])
    },
    12879(t, e, n) {
      "use strict";
      n.d(e, ["F", 0, (...t) => t.reduce((t, e) => n => e(t(n)))])
    },
    89798(t, e, n) {
      "use strict";
      n.d(e, ["q", 0, (t, e, n) => {
        const i = e - t;
        return i ? (n - t) / i : 1
      }])
    },
    61010(t, e, n) {
      "use strict";
      n.d(e, {
        v: () => s
      });
      var i = n(17002);
      class s {
        constructor() {
          this.subscriptions = []
        }
        add(t) {
          return (0, i.Kq)(this.subscriptions, t), () => (0, i.Ai)(this.subscriptions, t)
        }
        notify(t, e, n) {
          const i = this.subscriptions.length;
          if (i)
            if (1 === i) this.subscriptions[0](t, e, n);
            else
              for (let s = 0; s < i; s++) {
                const i = this.subscriptions[s];
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
    },
    18197(t, e, n) {
      "use strict";
      n.d(e, ["X", 0, t => t / 1e3, "f", 0, t => 1e3 * t])
    },
    56029(t, e, n) {
      "use strict";
      n.d(e, ["f", 0, (t, e) => e ? t * (1e3 / e) : 0])
    },
    281(t, e, n) {
      "use strict";
      n.d(e, {
        A: () => o
      });
      var i = n(61122),
        s = n(20212);

      function o(t) {
        let {
          swiper: e,
          extendParams: n,
          on: o,
          emit: r
        } = t;

        function a(t) {
          let n;
          return t && "string" == typeof t && e.isElement && (n = e.el.querySelector(t) || e.hostEl.querySelector(t), n) ? n : (t && ("string" == typeof t && (n = [...document.querySelectorAll(t)]), e.params.uniqueNavElements && "string" == typeof t && n && n.length > 1 && 1 === e.el.querySelectorAll(t).length ? n = e.el.querySelector(t) : n && 1 === n.length && (n = n[0])), t && !n ? t : n)
        }

        function l(t, n) {
          const i = e.params.navigation;
          (t = (0, s.m)(t)).forEach(t => {
            t && (t.classList[n ? "add" : "remove"](...i.disabledClass.split(" ")), "BUTTON" === t.tagName && (t.disabled = n), e.params.watchOverflow && e.enabled && t.classList[e.isLocked ? "add" : "remove"](i.lockClass))
          })
        }

        function u() {
          const {
            nextEl: t,
            prevEl: n
          } = e.navigation;
          if (e.params.loop) return l(n, !1), void l(t, !1);
          l(n, e.isBeginning && !e.params.rewind), l(t, e.isEnd && !e.params.rewind)
        }

        function c(t) {
          t.preventDefault(), (!e.isBeginning || e.params.loop || e.params.rewind) && (e.slidePrev(), r("navigationPrev"))
        }

        function h(t) {
          t.preventDefault(), (!e.isEnd || e.params.loop || e.params.rewind) && (e.slideNext(), r("navigationNext"))
        }

        function d() {
          const t = e.params.navigation;
          if (e.params.navigation = (0, i.c)(e, e.originalParams.navigation, e.params.navigation, {
              nextEl: "swiper-button-next",
              prevEl: "swiper-button-prev"
            }), !t.nextEl && !t.prevEl) return;
          let n = a(t.nextEl),
            o = a(t.prevEl);
          Object.assign(e.navigation, {
            nextEl: n,
            prevEl: o
          }), n = (0, s.m)(n), o = (0, s.m)(o);
          const r = (n, i) => {
            n && n.addEventListener("click", "next" === i ? h : c), !e.enabled && n && n.classList.add(...t.lockClass.split(" "))
          };
          n.forEach(t => r(t, "next")), o.forEach(t => r(t, "prev"))
        }

        function p() {
          let {
            nextEl: t,
            prevEl: n
          } = e.navigation;
          t = (0, s.m)(t), n = (0, s.m)(n);
          const i = (t, n) => {
            t.removeEventListener("click", "next" === n ? h : c), t.classList.remove(...e.params.navigation.disabledClass.split(" "))
          };
          t.forEach(t => i(t, "next")), n.forEach(t => i(t, "prev"))
        }
        n({
          navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock",
            navigationDisabledClass: "swiper-navigation-disabled"
          }
        }), e.navigation = {
          nextEl: null,
          prevEl: null
        }, o("init", () => {
          !1 === e.params.navigation.enabled ? m() : (d(), u())
        }), o("toEdge fromEdge lock unlock", () => {
          u()
        }), o("destroy", () => {
          p()
        }), o("enable disable", () => {
          let {
            nextEl: t,
            prevEl: n
          } = e.navigation;
          t = (0, s.m)(t), n = (0, s.m)(n), e.enabled ? u() : [...t, ...n].filter(t => !!t).forEach(t => t.classList.add(e.params.navigation.lockClass))
        }), o("click", (t, n) => {
          let {
            nextEl: i,
            prevEl: o
          } = e.navigation;
          i = (0, s.m)(i), o = (0, s.m)(o);
          const a = n.target;
          let l = o.includes(a) || i.includes(a);
          if (e.isElement && !l) {
            const t = n.path || n.composedPath && n.composedPath();
            t && (l = t.find(t => i.includes(t) || o.includes(t)))
          }
          if (e.params.navigation.hideOnClick && !l) {
            if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === a || e.pagination.el.contains(a))) return;
            let t;
            i.length ? t = i[0].classList.contains(e.params.navigation.hiddenClass) : o.length && (t = o[0].classList.contains(e.params.navigation.hiddenClass)), r(!0 === t ? "navigationShow" : "navigationHide"), [...i, ...o].filter(t => !!t).forEach(t => t.classList.toggle(e.params.navigation.hiddenClass))
          }
        });
        const m = () => {
          e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")), p()
        };
        Object.assign(e.navigation, {
          enable: () => {
            e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")), d(), u()
          },
          disable: m,
          update: u,
          init: d,
          destroy: p
        })
      }
    },
    20219(t, e, n) {
      "use strict";

      function i(t) {
        return void 0 === t && (t = ""), `.${t.trim().replace(/([\.:!+\/()[\]])/g,"\\$1").replace(/ /g,".")}`
      }
      n.d(e, {
        c: () => i
      })
    }
  }
]);