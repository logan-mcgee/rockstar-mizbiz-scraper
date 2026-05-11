try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "2941b04a-8f06-4b16-8ade-6b227680929a", e._sentryDebugIdIdentifier = "sentry-dbid-2941b04a-8f06-4b16-8ade-6b227680929a")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-newswire-article",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [6219], {
    46219(e, t, n) {
      n.d(t, {
        sL: () => w,
        UP: () => s,
        ic: () => c,
        iQ: () => f,
        Ub: () => i,
        jt: () => u,
        ZC: () => a,
        rl: () => p
      });
      var r = n(60211),
        o = n(71127);

      function i(e, {
        defaultValue: t = !1,
        initializeWithValue: n = !0
      } = {}) {
        const i = e => r.X || !window.matchMedia ? t : window.matchMedia(e).matches,
          [a, s] = (0, o.useState)(() => n ? i(e) : t);

        function u() {
          s(i(e))
        }
        return (0, o.useEffect)(() => {
          const t = window.matchMedia?.(e);
          return u(), t?.addListener ? t?.addListener(u) : t?.addEventListener("change", u), () => {
            t?.removeListener ? t?.removeListener(u) : t?.removeEventListener("change", u)
          }
        }, [e]), a
      }

      function a(e) {
        const t = (0, o.useRef)({
            value: e,
            prev: void 0
          }),
          n = t.current.value;
        return e !== n && (t.current = {
          value: e,
          prev: n
        }), t.current.prev
      }

      function s(...e) {
        const t = (0, o.useRef)(null);
        return t.current || (t.current = t => {
          e.forEach(e => {
            "function" == typeof e ? e(t) : null != e && (e.current = t)
          })
        }), t.current
      }
      const u = () => i("(prefers-reduced-motion: reduce)", {
        defaultValue: !1,
        initializeWithValue: !0
      });

      function l(e) {
        const t = (0, o.useRef)(e);
        return (0, o.useEffect)(() => {
          t.current = e
        }), (0, o.useMemo)(() => (...e) => t.current?.(...e), [])
      }

      function c({
        prop: e,
        defaultProp: t,
        onChange: n = () => {}
      }) {
        const [r, i] = function({
          defaultProp: e,
          onChange: t
        }) {
          const n = (0, o.useState)(e),
            [r] = n,
            i = (0, o.useRef)(r),
            a = l(t);
          return (0, o.useEffect)(() => {
            i.current !== r && (a(r), i.current = r)
          }, [r, i, a]), n
        }({
          defaultProp: t,
          onChange: n
        }), a = void 0 !== e, s = a ? e : r, u = l(n), c = (0, o.useCallback)(t => {
          if (a) {
            const n = "function" == typeof t ? t(e) : t;
            n !== e && u(n)
          } else i(t)
        }, [a, e, i, u]);
        return [s, c]
      }

      function d(e, t, n, r) {
        const i = (0, o.useRef)(t);
        (0, o.useEffect)(() => {
          i.current = t
        }, [t]), (0, o.useEffect)(() => {
          const t = n?.current ?? window;
          if (!t || !t.addEventListener) return;
          const o = e => {
            i.current(e)
          };
          return t.addEventListener(e, o, r), () => {
            t.removeEventListener(e, o, r)
          }
        }, [e, n?.current, r])
      }
      const f = ({
        ref: e,
        onChange: t,
        onFocusIn: n,
        onFocusOut: r,
        enabled: i = !0
      }) => {
        const [a, s] = (0, o.useState)(!1);
        return d("focusin", e => {
          s(!0), n?.(e), t?.(!0, e)
        }, e), d("focusout", e => {
          s(!1), r?.(e), t?.(!1, e)
        }, e), {
          isFocused: !!i && a
        }
      };

      function p(e = !0) {
        const t = i("screen and (pointer: coarse) and (hover: none)");
        return !!e && t
      }
      var v = n(64720),
        g = n(99098),
        y = n(46773),
        b = n(52061);
      const m = /^(on.*)$/,
        h = /^(onPress.*)$/;
      var E = n(51105);
      const w = ({
        inert: e,
        className: t,
        onClick: n,
        isLoading: r,
        ...o
      }, i) => {
        const {
          events: a,
          others: s
        } = function(e, {
          onPress: t
        } = {
          onPress: !0
        }) {
          const n = {},
            r = {};
          for (const o in e) Object.prototype.hasOwnProperty.call(e, o) && (h.test(o) ? t ? n[o] = e[o] : r[o] = e[o] : m.test(o) ? n[o] = e[o] : r[o] = e[o]);
          return {
            events: n,
            others: r
          }
        }(o, {
          onPress: !1
        }), {
          buttonProps: u,
          isPressed: l
        } = function(e, t) {
          let n, {
            elementType: r = "button",
            isDisabled: o,
            onPress: i,
            onPressStart: a,
            onPressEnd: s,
            onPressUp: u,
            onPressChange: l,
            preventFocusOnPress: c,
            allowFocusWhenDisabled: d,
            onClick: f,
            href: p,
            target: m,
            rel: h,
            type: E = "button"
          } = e;
          n = "button" === r ? {
            type: E,
            disabled: o,
            form: e.form,
            formAction: e.formAction,
            formEncType: e.formEncType,
            formMethod: e.formMethod,
            formNoValidate: e.formNoValidate,
            formTarget: e.formTarget,
            name: e.name,
            value: e.value
          } : {
            role: "button",
            href: "a" !== r || o ? void 0 : p,
            target: "a" === r ? m : void 0,
            type: "input" === r ? E : void 0,
            disabled: "input" === r ? o : void 0,
            "aria-disabled": o && "input" !== r ? o : void 0,
            rel: "a" === r ? h : void 0
          };
          let {
            pressProps: w,
            isPressed: T
          } = (0, y.d)({
            onPressStart: a,
            onPressEnd: s,
            onPressChange: l,
            onPress: i,
            onPressUp: u,
            onClick: f,
            isDisabled: o,
            preventFocusOnPress: c,
            ref: t
          }), {
            focusableProps: P
          } = (0, b.Wc)(e, t);
          d && (P.tabIndex = o ? -1 : P.tabIndex);
          let k = (0, v.v)(P, w, (0, g.$)(e, {
            labelable: !0
          }));
          return {
            isPressed: T,
            buttonProps: (0, v.v)(n, k, {
              "aria-haspopup": e["aria-haspopup"],
              "aria-expanded": e["aria-expanded"],
              "aria-controls": e["aria-controls"],
              "aria-pressed": e["aria-pressed"],
              "aria-current": e["aria-current"],
              "aria-disabled": e["aria-disabled"]
            })
          }
        }({
          ...s,
          elementType: "button",
          onPress: e => {
            r || (s.onPress?.(e) ?? n?.({
              ...e,
              currentTarget: e.target
            }))
          }
        }, i), c = {
          ...u,
          role: "button",
          "data-pressed": !e && l,
          "data-loading": r,
          "aria-busy": r
        };
        return {
          isPressed: !e && l,
          buttonProps: (0, E.v)(e ? {} : c, {
            ...a,
            className: t
          })
        }
      }
    },
    38223(e, t, n) {
      n.d(t, {
        Cl: () => k,
        ME: () => P
      });
      var r = n(89839),
        o = n(13569),
        i = n(62993),
        a = n(36566),
        s = n(87263),
        u = n(61205);
      n(71127);
      let l = null,
        c = "keyboard";
      const d = new Set;
      let f = new Map,
        p = !1,
        v = !1;

      function g(e, t) {
        for (let n of d) n(e, t)
      }

      function y(e) {
        p = !0, !a.Fe.isOpening && function(e) {
          return !(e.metaKey || !(0, s.cX)() && e.altKey || e.ctrlKey || "Control" === e.key || "Shift" === e.key || "Meta" === e.key)
        }(e) && (l = "keyboard", c = "keyboard", g("keyboard", e))
      }

      function b(e) {
        l = "pointer", c = "pointerType" in e ? e.pointerType : "mouse", "mousedown" !== e.type && "pointerdown" !== e.type || (p = !0, g("pointer", e))
      }

      function m(e) {
        !a.Fe.isOpening && (0, u.Y)(e) && (p = !0, l = "virtual", c = "virtual")
      }

      function h(e) {
        (0, o.wt)(e) !== window && (0, o.wt)(e) !== document && !r.lR && e.isTrusted && (p || v || (l = "virtual", c = "virtual", g("virtual", e)), p = !1, v = !1)
      }

      function E() {
        r.lR || (p = !1, v = !0)
      }

      function w(e) {
        if ("undefined" == typeof window || "undefined" == typeof document || f.get((0, i.mD)(e))) return;
        const t = (0, i.mD)(e),
          n = (0, i.TW)(e);
        let r = t.HTMLElement.prototype.focus;
        t.HTMLElement.prototype.focus = function() {
          p = !0, r.apply(this, arguments)
        }, n.addEventListener("keydown", y, !0), n.addEventListener("keyup", y, !0), n.addEventListener("click", m, !0), t.addEventListener("focus", h, !0), t.addEventListener("blur", E, !1), "undefined" != typeof PointerEvent && (n.addEventListener("pointerdown", b, !0), n.addEventListener("pointermove", b, !0), n.addEventListener("pointerup", b, !0)), t.addEventListener("beforeunload", () => {
          T(e)
        }, {
          once: !0
        }), f.set(t, {
          focus: r
        })
      }
      const T = (e, t) => {
        const n = (0, i.mD)(e),
          r = (0, i.TW)(e);
        t && r.removeEventListener("DOMContentLoaded", t), f.has(n) && (n.HTMLElement.prototype.focus = f.get(n).focus, r.removeEventListener("keydown", y, !0), r.removeEventListener("keyup", y, !0), r.removeEventListener("click", m, !0), n.removeEventListener("focus", h, !0), n.removeEventListener("blur", E, !1), "undefined" != typeof PointerEvent && (r.removeEventListener("pointerdown", b, !0), r.removeEventListener("pointermove", b, !0), r.removeEventListener("pointerup", b, !0)), f.delete(n))
      };

      function P() {
        return l
      }

      function k(e) {
        l = e, c = "pointer" === e ? "mouse" : e, g(e, null)
      }
      "undefined" != typeof document && function(e) {
        const t = (0, i.TW)(e);
        let n;
        "loading" !== t.readyState ? w(e) : (n = () => {
          w(e)
        }, t.addEventListener("DOMContentLoaded", n))
      }(), new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"])
    },
    52061(e, t, n) {
      n.d(t, {
        Wc: () => v
      });
      var r = n(38223),
        o = n(62993),
        i = n(13569),
        a = n(8324),
        s = n(28215);
      var u = n(89839),
        l = n(71127);

      function c(e) {
        if (!e) return;
        let t = !0;
        return n => {
          let r = {
            ...n,
            preventDefault() {
              n.preventDefault()
            },
            isDefaultPrevented: () => n.isDefaultPrevented(),
            stopPropagation() {
              t = !0
            },
            continuePropagation() {
              t = !1
            },
            isPropagationStopped: () => t
          };
          e(r), t && n.stopPropagation()
        }
      }
      var d = n(11021),
        f = n(64720);
      let p = l.createContext(null);

      function v(e, t) {
        let {
          focusProps: n
        } = function(e) {
          let {
            isDisabled: t,
            onFocus: n,
            onBlur: r,
            onFocusChange: a
          } = e;
          const s = (0, l.useCallback)(e => {
              if ((0, i.wt)(e) === e.currentTarget) return r && r(e), a && a(!1), !0
            }, [r, a]),
            c = (0, u.yB)(s),
            d = (0, l.useCallback)(e => {
              let t = (0, i.wt)(e);
              const r = (0, o.TW)(t),
                s = r ? (0, i.bq)(r) : (0, i.bq)();
              t === e.currentTarget && t === s && (n && n(e), a && a(!0), c(e))
            }, [a, n, c]);
          return {
            focusProps: {
              onFocus: !t && (n || a || r) ? d : void 0,
              onBlur: t || !r && !a ? void 0 : s
            }
          }
        }(e), {
          keyboardProps: v
        } = function(e) {
          return {
            keyboardProps: e.isDisabled ? {} : {
              onKeyDown: c(e.onKeyDown),
              onKeyUp: c(e.onKeyUp)
            }
          }
        }(e), g = (0, f.v)(n, v), y = function(e) {
          let t = (0, l.useContext)(p) || {};
          (0, d.w)(t, e);
          let {
            ref: n,
            ...r
          } = t;
          return r
        }(t), b = e.isDisabled ? {} : y, m = (0, l.useRef)(e.autoFocus);
        (0, l.useEffect)(() => {
          m.current && t.current && function(e) {
            if (!e.isConnected) return;
            const t = (0, o.TW)(e);
            if ("virtual" === (0, r.ME)()) {
              let n = (0, i.bq)(t);
              (0, a.v)(() => {
                const r = (0, i.bq)(t);
                r !== n && r !== t.body || !e.isConnected || (0, s.e)(e)
              })
            } else(0, s.e)(e)
          }(t.current), m.current = !1
        }, [t]);
        let h = e.excludeFromTabOrder ? -1 : 0;
        return e.isDisabled && (h = void 0), {
          focusableProps: (0, f.v)({
            ...g,
            tabIndex: h
          }, b)
        }
      }
    },
    46773(e, t, n) {
      n.d(t, {
        d: () => A
      });
      var r = n(89839),
        o = n(87263),
        i = n(62993),
        a = n(8324);
      let s = "default",
        u = "",
        l = new WeakMap;

      function c(e) {
        if ((0, o.un)()) {
          if ("disabled" !== s) return;
          s = "restoring", setTimeout(() => {
            (0, a.v)(() => {
              if ("restoring" === s) {
                const t = (0, i.TW)(e);
                "none" === t.documentElement.style.webkitUserSelect && (t.documentElement.style.webkitUserSelect = u || ""), u = "", s = "default"
              }
            })
          }, 300)
        } else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && l.has(e)) {
          let t = l.get(e),
            n = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
          "none" === e.style[n] && (e.style[n] = t), "" === e.getAttribute("style") && e.removeAttribute("style"), l.delete(e)
        }
      }
      var d = n(71127);
      const f = d.createContext({
        register: () => {}
      });

      function p(e, t, n) {
        if (!t.has(e)) throw new TypeError("attempted to " + n + " private field on non-instance");
        return t.get(e)
      }

      function v(e, t, n) {
        return function(e, t, n) {
          if (t.set) t.set.call(e, n);
          else {
            if (!t.writable) throw new TypeError("attempted to set read only private field");
            t.value = n
          }
        }(e, p(e, t, "set"), n), n
      }
      f.displayName = "PressResponderContext";
      var g = n(64720),
        y = n(11021),
        b = n(73581),
        m = n(79888),
        h = n(28830),
        E = n(13569),
        w = n(36566),
        T = n(72301),
        P = n(28215),
        k = n(61205);
      n(18429);
      var L = new WeakMap;
      class C {
        continuePropagation() {
          v(this, L, !1)
        }
        get shouldStopPropagation() {
          return function(e, t) {
            return t.get ? t.get.call(e) : t.value
          }(this, p(this, L, "get"))
        }
        constructor(e, t, n, r) {
          var o, i, a, s;
          s = {
              writable: !0,
              value: void 0
            },
            function(e, t) {
              if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
            }(i = this, a = L), a.set(i, s), v(this, L, !0);
          let u = null !== (o = null == r ? void 0 : r.target) && void 0 !== o ? o : n.currentTarget;
          const l = null == u ? void 0 : u.getBoundingClientRect();
          let c, d, f = 0,
            p = null;
          null != n.clientX && null != n.clientY && (d = n.clientX, p = n.clientY), l && (null != d && null != p ? (c = d - l.left, f = p - l.top) : (c = l.width / 2, f = l.height / 2)), this.type = e, this.pointerType = t, this.target = n.currentTarget, this.shiftKey = n.shiftKey, this.metaKey = n.metaKey, this.ctrlKey = n.ctrlKey, this.altKey = n.altKey, this.x = c, this.y = f, this.key = n.key
        }
      }
      const S = Symbol("linkClicked"),
        M = "react-aria-pressable-style",
        D = "data-react-aria-pressable";

      function A(e) {
        let {
          onPress: t,
          onPressChange: n,
          onPressStart: a,
          onPressEnd: p,
          onPressUp: v,
          onClick: L,
          isDisabled: A,
          isPressed: I,
          preventFocusOnPress: F,
          shouldCancelOnPointerExit: R,
          allowTextSelectionOnPress: _,
          ref: W,
          ...H
        } = function(e) {
          let t = (0, d.useContext)(f);
          if (t) {
            let {
              register: n,
              ref: r,
              ...o
            } = t;
            e = (0, g.v)(o, e), n()
          }
          return (0, y.w)(t, e.ref), e
        }(e), [U, B] = (0, d.useState)(!1), V = (0, d.useRef)({
          isPressed: !1,
          ignoreEmulatedMouseEvents: !1,
          didFirePressStart: !1,
          isTriggeringEvent: !1,
          activePointerId: null,
          target: null,
          isOverTarget: !1,
          pointerType: null,
          disposables: []
        }), {
          addGlobalListener: z,
          removeAllGlobalListeners: $,
          removeGlobalListener: j
        } = (0, b.A)(), G = (0, d.useCallback)((e, t) => {
          let r = V.current;
          if (A || r.didFirePressStart) return !1;
          let o = !0;
          if (r.isTriggeringEvent = !0, a) {
            let n = new C("pressstart", t, e);
            a(n), o = n.shouldStopPropagation
          }
          return n && n(!0), r.isTriggeringEvent = !1, r.didFirePressStart = !0, B(!0), o
        }, [A, a, n]), X = (0, d.useCallback)((e, r, o = !0) => {
          let i = V.current;
          if (!i.didFirePressStart) return !1;
          i.didFirePressStart = !1, i.isTriggeringEvent = !0;
          let a = !0;
          if (p) {
            let t = new C("pressend", r, e);
            p(t), a = t.shouldStopPropagation
          }
          if (n && n(!1), B(!1), t && o && !A) {
            let n = new C("press", r, e);
            t(n), a && (a = n.shouldStopPropagation)
          }
          return i.isTriggeringEvent = !1, a
        }, [A, p, n, t]), Y = (0, m.J)(X), q = (0, d.useCallback)((e, t) => {
          let n = V.current;
          if (A) return !1;
          if (v) {
            n.isTriggeringEvent = !0;
            let r = new C("pressup", t, e);
            return v(r), n.isTriggeringEvent = !1, r.shouldStopPropagation
          }
          return !0
        }, [A, v]), J = (0, m.J)(q), Q = (0, d.useCallback)(e => {
          let t = V.current;
          if (t.isPressed && t.target) {
            t.didFirePressStart && null != t.pointerType && X(O(t.target, e), t.pointerType, !1), t.isPressed = !1, se(null), t.isOverTarget = !1, t.activePointerId = null, t.pointerType = null, $(), _ || c(t.target);
            for (let e of t.disposables) e();
            t.disposables = []
          }
        }, [_, $, X]), Z = (0, m.J)(Q), ee = (0, d.useCallback)(e => {
          R && Q(e)
        }, [R, Q]), te = (0, d.useCallback)(e => {
          A || null == L || L(e)
        }, [A, L]), ne = (0, d.useCallback)((e, t) => {
          if (!A && L) {
            let n = new MouseEvent("click", e);
            (0, r.o1)(n, t), L((0, r.eg)(n))
          }
        }, [A, L]), re = (0, m.J)(ne), [oe, ie] = (0, d.useState)(!1);
        (0, h.N)(() => {
          let e = V.current;
          if (oe) {
            let t = t => {
                var n;
                if (e.isPressed && e.target && N(t, e.target)) {
                  var r;
                  x((0, E.wt)(t), t.key) && t.preventDefault();
                  let n = (0, E.wt)(t),
                    o = (0, E.sD)(e.target, n);
                  Y(O(e.target, t), "keyboard", o), o && re(t, e.target), $(), "Enter" !== t.key && K(e.target) && (0, E.sD)(e.target, n) && !t[S] && (t[S] = !0, (0, w.Fe)(e.target, t, !1)), e.isPressed = !1, ie(!1), null === (r = e.metaKeyEvents) || void 0 === r || r.delete(t.key)
                } else if ("Meta" === t.key && (null === (n = e.metaKeyEvents) || void 0 === n ? void 0 : n.size)) {
                  var o;
                  let t = e.metaKeyEvents;
                  e.metaKeyEvents = void 0;
                  for (let n of t.values()) null === (o = e.target) || void 0 === o || o.dispatchEvent(new KeyboardEvent("keyup", n))
                }
              },
              n = e.target,
              r = t => {
                n && N(t, n) && !t.repeat && (0, E.sD)(n, (0, E.wt)(t)) && e.target && J(O(e.target, t), "keyboard")
              },
              o = (0, T.c)(r, t);
            return z((0, i.TW)(e.target), "keyup", o, !0), () => {
              j((0, i.TW)(e.target), "keyup", o, !0)
            }
          }
        }, [oe, z, $, j]);
        let [ae, se] = (0, d.useState)(null);
        (0, h.N)(() => {
          let e = V.current;
          if ("pointer" === ae) {
            let t = t => {
                if (t.pointerId === e.activePointerId && e.isPressed && 0 === t.button && e.target) {
                  if ((0, E.sD)(e.target, (0, E.wt)(t)) && null != e.pointerType) {
                    let n = !1,
                      r = setTimeout(() => {
                        e.isPressed && e.target instanceof HTMLElement && (n ? Z(t) : ((0, P.e)(e.target), e.target.click()))
                      }, 80);
                    t.currentTarget && z(t.currentTarget, "click", () => n = !0, !0), e.disposables.push(() => clearTimeout(r))
                  } else Z(t);
                  e.isOverTarget = !1
                }
              },
              n = e => {
                Z(e)
              };
            return z((0, i.TW)(e.target), "pointerup", t, !1), z((0, i.TW)(e.target), "pointercancel", n, !1), () => {
              j((0, i.TW)(e.target), "pointerup", t, !1), j((0, i.TW)(e.target), "pointercancel", n, !1)
            }
          }
        }, [ae, z, j]);
        let ue = (0, d.useMemo)(() => {
          let e = V.current,
            t = {
              onKeyDown(t) {
                if (N(t.nativeEvent, t.currentTarget) && (0, E.sD)(t.currentTarget, (0, E.wt)(t))) {
                  var n;
                  x((0, E.wt)(t), t.key) && t.preventDefault();
                  let r = !0;
                  e.isPressed || t.repeat || (e.target = t.currentTarget, e.isPressed = !0, ie(!0), e.pointerType = "keyboard", r = G(t, "keyboard")), r && t.stopPropagation(), t.metaKey && (0, o.cX)() && (null === (n = e.metaKeyEvents) || void 0 === n || n.set(t.key, t.nativeEvent))
                } else "Meta" === t.key && (e.metaKeyEvents = new Map)
              },
              onClick(t) {
                if ((!t || (0, E.sD)(t.currentTarget, (0, E.wt)(t))) && t && 0 === t.button && !e.isTriggeringEvent && !w.Fe.isOpening) {
                  let n = !0;
                  if (A && t.preventDefault(), e.ignoreEmulatedMouseEvents || e.isPressed || "virtual" !== e.pointerType && !(0, k.Y)(t.nativeEvent)) {
                    if (e.isPressed && "keyboard" !== e.pointerType) {
                      let r = e.pointerType || t.nativeEvent.pointerType || "virtual",
                        o = q(O(t.currentTarget, t), r),
                        i = X(O(t.currentTarget, t), r, !0);
                      n = o && i, e.isOverTarget = !1, te(t), Q(t)
                    }
                  } else {
                    let e = G(t, "virtual"),
                      r = q(t, "virtual"),
                      o = X(t, "virtual");
                    te(t), n = e && r && o
                  }
                  e.ignoreEmulatedMouseEvents = !1, n && t.stopPropagation()
                }
              }
            };
          return "undefined" != typeof PointerEvent && (t.onPointerDown = t => {
            if (0 !== t.button || !(0, E.sD)(t.currentTarget, (0, E.wt)(t))) return;
            if ((0, k.P)(t.nativeEvent)) return void(e.pointerType = "virtual");
            e.pointerType = t.pointerType;
            let n = !0;
            if (!e.isPressed) {
              e.isPressed = !0, se("pointer"), e.isOverTarget = !0, e.activePointerId = t.pointerId, e.target = t.currentTarget, _ || function(e) {
                if ((0, o.un)()) {
                  if ("default" === s) {
                    const t = (0, i.TW)(e);
                    u = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = "none"
                  }
                  s = "disabled"
                } else if (e instanceof HTMLElement || e instanceof SVGElement) {
                  let t = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
                  l.set(e, e.style[t]), e.style[t] = "none"
                }
              }(e.target), n = G(t, e.pointerType);
              let r = (0, E.wt)(t);
              "releasePointerCapture" in r && ("hasPointerCapture" in r ? r.hasPointerCapture(t.pointerId) && r.releasePointerCapture(t.pointerId) : r.releasePointerCapture(t.pointerId))
            }
            n && t.stopPropagation()
          }, t.onMouseDown = t => {
            if ((0, E.sD)(t.currentTarget, (0, E.wt)(t)) && 0 === t.button) {
              if (F) {
                let n = (0, r.LE)(t.target);
                n && e.disposables.push(n)
              }
              t.stopPropagation()
            }
          }, t.onPointerUp = t => {
            (0, E.sD)(t.currentTarget, (0, E.wt)(t)) && "virtual" !== e.pointerType && (0 !== t.button || e.isPressed || q(t, e.pointerType || t.pointerType))
          }, t.onPointerEnter = t => {
            t.pointerId === e.activePointerId && e.target && !e.isOverTarget && null != e.pointerType && (e.isOverTarget = !0, G(O(e.target, t), e.pointerType))
          }, t.onPointerLeave = t => {
            t.pointerId === e.activePointerId && e.target && e.isOverTarget && null != e.pointerType && (e.isOverTarget = !1, X(O(e.target, t), e.pointerType, !1), ee(t))
          }, t.onDragStart = e => {
            (0, E.sD)(e.currentTarget, (0, E.wt)(e)) && Q(e)
          }), t
        }, [A, F, $, _, Q, ee, X, G, q, te, ne]);
        return (0, d.useEffect)(() => {
          if (!W) return;
          const e = (0, i.TW)(W.current);
          if (!e || !e.head || e.getElementById(M)) return;
          const t = e.createElement("style");
          t.id = M, t.textContent = `\n@layer {\n  [${D}] {\n    touch-action: pan-x pan-y pinch-zoom;\n  }\n}\n    `.trim(), e.head.prepend(t)
        }, [W]), (0, d.useEffect)(() => {
          let e = V.current;
          return () => {
            var t;
            _ || c(null !== (t = e.target) && void 0 !== t ? t : void 0);
            for (let t of e.disposables) t();
            e.disposables = []
          }
        }, [_]), {
          isPressed: I || U,
          pressProps: (0, g.v)(H, ue, {
            [D]: !0
          })
        }
      }

      function K(e) {
        return "A" === e.tagName && e.hasAttribute("href")
      }

      function N(e, t) {
        const {
          key: n,
          code: r
        } = e, o = t, a = o.getAttribute("role");
        return !("Enter" !== n && " " !== n && "Spacebar" !== n && "Space" !== r || o instanceof(0, i.mD)(o).HTMLInputElement && !F(o, n) || o instanceof(0, i.mD)(o).HTMLTextAreaElement || o.isContentEditable || ("link" === a || !a && K(o)) && "Enter" !== n)
      }

      function O(e, t) {
        let n = t.clientX,
          r = t.clientY;
        return {
          currentTarget: e,
          shiftKey: t.shiftKey,
          ctrlKey: t.ctrlKey,
          metaKey: t.metaKey,
          altKey: t.altKey,
          clientX: n,
          clientY: r,
          key: t.key
        }
      }

      function x(e, t) {
        return e instanceof HTMLInputElement ? !F(e, t) : function(e) {
          return !(e instanceof HTMLInputElement || (e instanceof HTMLButtonElement ? "submit" === e.type || "reset" === e.type : K(e)))
        }(e)
      }
      const I = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

      function F(e, t) {
        return "checkbox" === e.type || "radio" === e.type ? " " === t : I.has(e.type)
      }
    },
    89839(e, t, n) {
      n.d(t, {
        LE: () => p,
        eg: () => l,
        lR: () => f,
        o1: () => c,
        yB: () => d
      });
      var r = n(13569),
        o = n(62993),
        i = n(28215),
        a = n(28830),
        s = n(42351),
        u = n(71127);

      function l(e) {
        let t = e;
        return t.nativeEvent = e, t.isDefaultPrevented = () => t.defaultPrevented, t.isPropagationStopped = () => t.cancelBubble, t.persist = () => {}, t
      }

      function c(e, t) {
        Object.defineProperty(e, "target", {
          value: t
        }), Object.defineProperty(e, "currentTarget", {
          value: t
        })
      }

      function d(e) {
        let t = (0, u.useRef)({
          isFocused: !1,
          observer: null
        });
        return (0, a.N)(() => {
          const e = t.current;
          return () => {
            e.observer && (e.observer.disconnect(), e.observer = null)
          }
        }, []), (0, u.useCallback)(n => {
          let o = (0, r.wt)(n);
          if (o instanceof HTMLButtonElement || o instanceof HTMLInputElement || o instanceof HTMLTextAreaElement || o instanceof HTMLSelectElement) {
            t.current.isFocused = !0;
            let n = o,
              i = r => {
                if (t.current.isFocused = !1, n.disabled) {
                  let t = l(r);
                  null == e || e(t)
                }
                t.current.observer && (t.current.observer.disconnect(), t.current.observer = null)
              };
            n.addEventListener("focusout", i, {
              once: !0
            }), t.current.observer = new MutationObserver(() => {
              if (t.current.isFocused && n.disabled) {
                var e;
                null === (e = t.current.observer) || void 0 === e || e.disconnect();
                let o = n === (0, r.bq)() ? null : (0, r.bq)();
                n.dispatchEvent(new FocusEvent("blur", {
                  relatedTarget: o
                })), n.dispatchEvent(new FocusEvent("focusout", {
                  bubbles: !0,
                  relatedTarget: o
                }))
              }
            }), t.current.observer.observe(n, {
              attributes: !0,
              attributeFilter: ["disabled"]
            })
          }
        }, [e])
      }
      let f = !1;

      function p(e) {
        for (; e && !(0, s.t)(e);) e = e.parentElement;
        let t = (0, o.mD)(e),
          n = t.document.activeElement;
        if (!n || n === e) return;
        f = !0;
        let a = !1,
          u = e => {
            ((0, r.wt)(e) === n || a) && e.stopImmediatePropagation()
          },
          l = t => {
            ((0, r.wt)(t) === n || a) && (t.stopImmediatePropagation(), e || a || (a = !0, (0, i.e)(n), p()))
          },
          c = t => {
            ((0, r.wt)(t) === e || a) && t.stopImmediatePropagation()
          },
          d = t => {
            ((0, r.wt)(t) === e || a) && (t.stopImmediatePropagation(), a || (a = !0, (0, i.e)(n), p()))
          };
        t.addEventListener("blur", u, !0), t.addEventListener("focusout", l, !0), t.addEventListener("focusin", d, !0), t.addEventListener("focus", c, !0);
        let p = () => {
            cancelAnimationFrame(v), t.removeEventListener("blur", u, !0), t.removeEventListener("focusout", l, !0), t.removeEventListener("focusin", d, !0), t.removeEventListener("focus", c, !0), f = !1, a = !1
          },
          v = requestAnimationFrame(p);
        return p
      }
    },
    50336(e, t, n) {
      n.d(t, {
        Cc: () => u,
        wR: () => f
      });
      var r = n(71127);
      const o = {
          prefix: String(Math.round(1e10 * Math.random())),
          current: 0
        },
        i = r.createContext(o),
        a = r.createContext(!1);
      Boolean("undefined" != typeof window && window.document && window.document.createElement);
      let s = new WeakMap;
      const u = "function" == typeof r.useId ? function(e) {
        let t = r.useId(),
          [n] = (0, r.useState)(f());
        return e || `${n?"react-aria":`react-aria${o.prefix}`}-${t}`
      } : function(e) {
        let t = (0, r.useContext)(i),
          n = function(e = !1) {
            let t = (0, r.useContext)(i),
              n = (0, r.useRef)(null);
            if (null === n.current && !e) {
              var o, a;
              let e = null === (a = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) || void 0 === a || null === (o = a.ReactCurrentOwner) || void 0 === o ? void 0 : o.current;
              if (e) {
                let n = s.get(e);
                null == n ? s.set(e, {
                  id: t.current,
                  state: e.memoizedState
                }) : e.memoizedState !== n.state && (t.current = n.id, s.delete(e))
              }
              n.current = ++t.current
            }
            return n.current
          }(!!e),
          o = `react-aria${t.prefix}`;
        return e || `${o}-${n}`
      };

      function l() {
        return !1
      }

      function c() {
        return !0
      }

      function d(e) {
        return () => {}
      }

      function f() {
        return "function" == typeof r.useSyncExternalStore ? r.useSyncExternalStore(d, l, c) : (0, r.useContext)(a)
      }
    },
    13569(e, t, n) {
      n.d(t, {
        bq: () => a,
        sD: () => i,
        wt: () => s
      });
      var r = n(62993),
        o = n(35412);

      function i(e, t) {
        if (!(0, o.Nf)()) return !(!t || !e) && e.contains(t);
        if (!e || !t) return !1;
        let n = t;
        for (; null !== n;) {
          if (n === e) return !0;
          n = "SLOT" === n.tagName && n.assignedSlot ? n.assignedSlot.parentNode : (0, r.Ng)(n) ? n.host : n.parentNode
        }
        return !1
      }
      const a = (e = document) => {
        var t;
        if (!(0, o.Nf)()) return e.activeElement;
        let n = e.activeElement;
        for (; n && "shadowRoot" in n && (null === (t = n.shadowRoot) || void 0 === t ? void 0 : t.activeElement);) n = n.shadowRoot.activeElement;
        return n
      };

      function s(e) {
        if ((0, o.Nf)() && e.target instanceof Element && e.target.shadowRoot) {
          var t, n;
          if ("composedPath" in e) return null !== (t = e.composedPath()[0]) && void 0 !== t ? t : null;
          if ("composedPath" in e.nativeEvent) return null !== (n = e.nativeEvent.composedPath()[0]) && void 0 !== n ? n : null
        }
        return e.target
      }
    },
    72301(e, t, n) {
      function r(...e) {
        return (...t) => {
          for (let n of e) "function" == typeof n && n(...t)
        }
      }
      n.d(t, {
        c: () => r
      })
    },
    62993(e, t, n) {
      n.d(t, {
        Ng: () => i,
        TW: () => r,
        mD: () => o
      });
      const r = e => {
          var t;
          return null !== (t = null == e ? void 0 : e.ownerDocument) && void 0 !== t ? t : document
        },
        o = e => e && "window" in e && e.window === e ? e : r(e).defaultView || window;

      function i(e) {
        return null !== (t = e) && "object" == typeof t && "nodeType" in t && "number" == typeof t.nodeType && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && "host" in e;
        var t
      }
    },
    99098(e, t, n) {
      n.d(t, {
        $: () => l
      });
      const r = new Set(["id"]),
        o = new Set(["aria-label", "aria-labelledby", "aria-describedby", "aria-details"]),
        i = new Set(["href", "hrefLang", "target", "rel", "download", "ping", "referrerPolicy"]),
        a = new Set(["dir", "lang", "hidden", "inert", "translate"]),
        s = new Set(["onClick", "onAuxClick", "onContextMenu", "onDoubleClick", "onMouseDown", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseOut", "onMouseOver", "onMouseUp", "onTouchCancel", "onTouchEnd", "onTouchMove", "onTouchStart", "onPointerDown", "onPointerMove", "onPointerUp", "onPointerCancel", "onPointerEnter", "onPointerLeave", "onPointerOver", "onPointerOut", "onGotPointerCapture", "onLostPointerCapture", "onScroll", "onWheel", "onAnimationStart", "onAnimationEnd", "onAnimationIteration", "onTransitionCancel", "onTransitionEnd", "onTransitionRun", "onTransitionStart"]),
        u = /^(data-.*)$/;

      function l(e, t = {}) {
        let {
          labelable: n,
          isLink: l,
          global: c,
          events: d = c,
          propNames: f
        } = t, p = {};
        for (const t in e) Object.prototype.hasOwnProperty.call(e, t) && (r.has(t) || n && o.has(t) || l && i.has(t) || c && a.has(t) || d && (s.has(t) || t.endsWith("Capture") && s.has(t.slice(0, -7))) || (null == f ? void 0 : f.has(t)) || u.test(t)) && (p[t] = e[t]);
        return p
      }
    },
    28215(e, t, n) {
      function r(e) {
        if (function() {
            if (null == o) {
              o = !1;
              try {
                document.createElement("div").focus({
                  get preventScroll() {
                    return o = !0, !0
                  }
                })
              } catch {}
            }
            return o
          }()) e.focus({
          preventScroll: !0
        });
        else {
          let t = function(e) {
            let t = e.parentNode,
              n = [],
              r = document.scrollingElement || document.documentElement;
            for (; t instanceof HTMLElement && t !== r;)(t.offsetHeight < t.scrollHeight || t.offsetWidth < t.scrollWidth) && n.push({
              element: t,
              scrollTop: t.scrollTop,
              scrollLeft: t.scrollLeft
            }), t = t.parentNode;
            return r instanceof HTMLElement && n.push({
              element: r,
              scrollTop: r.scrollTop,
              scrollLeft: r.scrollLeft
            }), n
          }(e);
          e.focus(),
            function(e) {
              for (let {
                  element: t,
                  scrollTop: n,
                  scrollLeft: r
                }
                of e) t.scrollTop = n, t.scrollLeft = r
            }(t)
        }
      }
      n.d(t, {
        e: () => r
      });
      let o = null
    },
    42351(e, t, n) {
      n.d(t, {
        t: () => l,
        A: () => c
      });
      var r = n(62993);
      const o = "undefined" != typeof Element && "checkVisibility" in Element.prototype;

      function i(e, t) {
        return o ? e.checkVisibility({
          visibilityProperty: !0
        }) && !e.closest("[data-react-aria-prevent-focus]") : "#comment" !== e.nodeName && function(e) {
          const t = (0, r.mD)(e);
          if (!(e instanceof t.HTMLElement || e instanceof t.SVGElement)) return !1;
          let {
            display: n,
            visibility: o
          } = e.style, i = "none" !== n && "hidden" !== o && "collapse" !== o;
          if (i) {
            const {
              getComputedStyle: t
            } = e.ownerDocument.defaultView;
            let {
              display: n,
              visibility: r
            } = t(e);
            i = "none" !== n && "hidden" !== r && "collapse" !== r
          }
          return i
        }(e) && function(e, t) {
          return !e.hasAttribute("hidden") && !e.hasAttribute("data-react-aria-prevent-focus") && ("DETAILS" !== e.nodeName || !t || "SUMMARY" === t.nodeName || e.hasAttribute("open"))
        }(e, t) && (!e.parentElement || i(e.parentElement, e))
      }
      const a = ["input:not([disabled]):not([type=hidden])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "a[href]", "area[href]", "summary", "iframe", "object", "embed", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable^="false"])', "permission"],
        s = a.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
      a.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
      const u = a.join(':not([hidden]):not([tabindex="-1"]),');

      function l(e) {
        return e.matches(s) && i(e) && !d(e)
      }

      function c(e) {
        return e.matches(u) && i(e) && !d(e)
      }

      function d(e) {
        let t = e;
        for (; null != t;) {
          if (t instanceof t.ownerDocument.defaultView.HTMLElement && t.inert) return !0;
          t = t.parentElement
        }
        return !1
      }
    },
    61205(e, t, n) {
      n.d(t, {
        P: () => i,
        Y: () => o
      });
      var r = n(87263);

      function o(e) {
        return !("" !== e.pointerType || !e.isTrusted) || ((0, r.m0)() && e.pointerType ? "click" === e.type && 1 === e.buttons : 0 === e.detail && !e.pointerType)
      }

      function i(e) {
        return !(0, r.m0)() && 0 === e.width && 0 === e.height || 1 === e.width && 1 === e.height && 0 === e.pressure && 0 === e.detail && "mouse" === e.pointerType
      }
    },
    64720(e, t, n) {
      n.d(t, {
        v: () => u
      });
      var r = n(72301),
        o = n(49652);

      function i(...e) {
        return 1 === e.length && e[0] ? e[0] : t => {
          let n = !1;
          const r = e.map(e => {
            const r = a(e, t);
            return n || (n = "function" == typeof r), r
          });
          if (n) return () => {
            r.forEach((t, n) => {
              "function" == typeof t ? t() : a(e[n], null)
            })
          }
        }
      }

      function a(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
      }
      var s = n(1556);

      function u(...e) {
        let t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          let a = e[n];
          for (let e in a) {
            let n = t[e],
              u = a[e];
            "function" == typeof n && "function" == typeof u && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = (0, r.c)(n, u) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof u ? "id" === e && n && u ? t.id = (0, o.Tw)(n, u) : "ref" === e && n && u ? t.ref = i(n, u) : t[e] = void 0 !== u ? u : n : t[e] = (0, s.default)(n, u)
          }
        }
        return t
      }
    },
    36566(e, t, n) {
      n.d(t, {
        Fe: () => u,
        PJ: () => c,
        _h: () => l,
        rd: () => s
      });
      var r = n(28215),
        o = n(87263),
        i = n(71127);
      const a = (0, i.createContext)({
        isNative: !0,
        open: function(e, t) {
          ! function(e, t) {
            if (e instanceof HTMLAnchorElement) t(e);
            else if (e.hasAttribute("data-href")) {
              let n = document.createElement("a");
              n.href = e.getAttribute("data-href"), e.hasAttribute("data-target") && (n.target = e.getAttribute("data-target")), e.hasAttribute("data-rel") && (n.rel = e.getAttribute("data-rel")), e.hasAttribute("data-download") && (n.download = e.getAttribute("data-download")), e.hasAttribute("data-ping") && (n.ping = e.getAttribute("data-ping")), e.hasAttribute("data-referrer-policy") && (n.referrerPolicy = e.getAttribute("data-referrer-policy")), e.appendChild(n), t(n), e.removeChild(n)
            }
          }(e, e => u(e, t))
        },
        useHref: e => e
      });

      function s() {
        return (0, i.useContext)(a)
      }

      function u(e, t, n = !0) {
        var i, a;
        let {
          metaKey: s,
          ctrlKey: l,
          altKey: c,
          shiftKey: d
        } = t;
        (0, o.gm)() && (null === (a = window.event) || void 0 === a || null === (i = a.type) || void 0 === i ? void 0 : i.startsWith("key")) && "_blank" === e.target && ((0, o.cX)() ? s = !0 : l = !0);
        let f = (0, o.Tc)() && (0, o.cX)() && !(0, o.bh)() ? new KeyboardEvent("keydown", {
          keyIdentifier: "Enter",
          metaKey: s,
          ctrlKey: l,
          altKey: c,
          shiftKey: d
        }) : new MouseEvent("click", {
          metaKey: s,
          ctrlKey: l,
          altKey: c,
          shiftKey: d,
          detail: 1,
          bubbles: !0,
          cancelable: !0
        });
        u.isOpening = n, (0, r.e)(e), e.dispatchEvent(f), u.isOpening = !1
      }

      function l(e) {
        var t;
        const n = s().useHref(null !== (t = null == e ? void 0 : e.href) && void 0 !== t ? t : "");
        return {
          href: (null == e ? void 0 : e.href) ? n : void 0,
          target: null == e ? void 0 : e.target,
          rel: null == e ? void 0 : e.rel,
          download: null == e ? void 0 : e.download,
          ping: null == e ? void 0 : e.ping,
          referrerPolicy: null == e ? void 0 : e.referrerPolicy
        }
      }

      function c(e, t, n, r) {
        !t.isNative && e.currentTarget instanceof HTMLAnchorElement && e.currentTarget.href && !e.isDefaultPrevented() && function(e, t) {
          let n = e.getAttribute("target");
          return !(n && "_self" !== n || e.origin !== location.origin || e.hasAttribute("download") || t.metaKey || t.ctrlKey || t.altKey || t.shiftKey)
        }(e.currentTarget, e) && n && (e.preventDefault(), t.open(e.currentTarget, e, n, r))
      }
      u.isOpening = !1
    },
    87263(e, t, n) {
      function r(e) {
        var t;
        if ("undefined" == typeof window || null == window.navigator) return !1;
        let n = null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.brands;
        return Array.isArray(n) && n.some(t => e.test(t.brand)) || e.test(window.navigator.userAgent)
      }

      function o(e) {
        var t;
        return "undefined" != typeof window && null != window.navigator && e.test((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.platform) || window.navigator.platform)
      }

      function i(e) {
        let t = null;
        return () => (null == t && (t = e()), t)
      }
      n.d(t, {
        Tc: () => c,
        bh: () => u,
        cX: () => a,
        gm: () => p,
        m0: () => f,
        un: () => l
      });
      const a = i(function() {
          return o(/^Mac/i)
        }),
        s = i(function() {
          return o(/^iPhone/i)
        }),
        u = i(function() {
          return o(/^iPad/i) || a() && navigator.maxTouchPoints > 1
        }),
        l = i(function() {
          return s() || u()
        }),
        c = (i(function() {
          return a() || l()
        }), i(function() {
          return r(/AppleWebKit/i) && !d()
        })),
        d = i(function() {
          return r(/Chrome/i)
        }),
        f = i(function() {
          return r(/Android/i)
        }),
        p = i(function() {
          return r(/Firefox/i)
        })
    },
    8324(e, t, n) {
      n.d(t, {
        v: () => s
      });
      var r = n(13569);
      let o = new Map,
        i = new Set;

      function a() {
        if ("undefined" == typeof window) return;

        function e(e) {
          return "propertyName" in e
        }
        let t = n => {
          let a = (0, r.wt)(n);
          if (!e(n) || !a) return;
          let s = o.get(a);
          if (s && (s.delete(n.propertyName), 0 === s.size && (a.removeEventListener("transitioncancel", t), o.delete(a)), 0 === o.size)) {
            for (let e of i) e();
            i.clear()
          }
        };
        document.body.addEventListener("transitionrun", n => {
          let i = (0, r.wt)(n);
          if (!e(n) || !i) return;
          let a = o.get(i);
          a || (a = new Set, o.set(i, a), i.addEventListener("transitioncancel", t, {
            once: !0
          })), a.add(n.propertyName)
        }), document.body.addEventListener("transitionend", t)
      }

      function s(e) {
        requestAnimationFrame(() => {
          ! function() {
            for (const [e] of o) "isConnected" in e && !e.isConnected && o.delete(e)
          }(), 0 === o.size ? e() : i.add(e)
        })
      }
      "undefined" != typeof document && ("loading" !== document.readyState ? a() : document.addEventListener("DOMContentLoaded", a))
    },
    79888(e, t, n) {
      n.d(t, {
        J: () => s
      });
      var r, o = n(28830),
        i = n(71127);
      const a = null !== (r = i.useInsertionEffect) && void 0 !== r ? r : o.N;

      function s(e) {
        const t = (0, i.useRef)(null);
        return a(() => {
          t.current = e
        }, [e]), (0, i.useCallback)((...e) => {
          const n = t.current;
          return null == n ? void 0 : n(...e)
        }, [])
      }
    },
    73581(e, t, n) {
      n.d(t, {
        A: () => o
      });
      var r = n(71127);

      function o() {
        let e = (0, r.useRef)(new Map),
          t = (0, r.useCallback)((t, n, r, o) => {
            let i = (null == o ? void 0 : o.once) ? (...t) => {
              e.current.delete(r), r(...t)
            } : r;
            e.current.set(r, {
              type: n,
              eventTarget: t,
              fn: i,
              options: o
            }), t.addEventListener(n, i, o)
          }, []),
          n = (0, r.useCallback)((t, n, r, o) => {
            var i;
            let a = (null === (i = e.current.get(r)) || void 0 === i ? void 0 : i.fn) || r;
            t.removeEventListener(n, a, o), e.current.delete(r)
          }, []),
          o = (0, r.useCallback)(() => {
            e.current.forEach((e, t) => {
              n(e.eventTarget, e.type, t, e.options)
            })
          }, [n]);
        return (0, r.useEffect)(() => o, [o]), {
          addGlobalListener: t,
          removeGlobalListener: n,
          removeAllGlobalListeners: o
        }
      }
    },
    49652(e, t, n) {
      n.d(t, {
        Tw: () => c,
        Bi: () => l,
        X1: () => d
      });
      var r = n(28830),
        o = n(71127);
      var i = n(50336);
      let a, s = Boolean("undefined" != typeof window && window.document && window.document.createElement),
        u = new Map;

      function l(e) {
        let [t, n] = (0, o.useState)(e), l = (0, o.useRef)(null), c = (0, i.Cc)(t), d = (0, o.useRef)(null);
        if (a && a.register(d, c), s) {
          const e = u.get(c);
          e && !e.includes(l) ? e.push(l) : u.set(c, [l])
        }
        return (0, r.N)(() => {
          let e = c;
          return () => {
            a && a.unregister(d), u.delete(e)
          }
        }, [c]), (0, o.useEffect)(() => {
          let e = l.current;
          return e && n(e), () => {
            e && (l.current = null)
          }
        }), c
      }

      function c(e, t) {
        if (e === t) return e;
        let n = u.get(e);
        if (n) return n.forEach(e => e.current = t), t;
        let r = u.get(t);
        return r ? (r.forEach(t => t.current = e), e) : t
      }

      function d(e = []) {
        let t = l(),
          [n, i] = function(e) {
            let [t, n] = (0, o.useState)(e), i = (0, o.useRef)(t), a = (0, o.useRef)(null), s = (0, o.useRef)(() => {
              if (!a.current) return;
              let e = a.current.next();
              e.done ? a.current = null : i.current === e.value ? s.current() : n(e.value)
            });
            (0, r.N)(() => {
              i.current = t, a.current && s.current()
            });
            let u = (0, o.useCallback)(e => {
              a.current = e(i.current), s.current()
            }, [s]);
            return [t, u]
          }(t),
          a = (0, o.useCallback)(() => {
            i(function*() {
              yield t, yield document.getElementById(t) ? t : void 0
            })
          }, [t, i]);
        return (0, r.N)(a, [t, a, ...e]), n
      }
      "undefined" != typeof FinalizationRegistry && (a = new FinalizationRegistry(e => {
        u.delete(e)
      }))
    },
    28830(e, t, n) {
      n.d(t, {
        N: () => o
      });
      var r = n(71127);
      const o = "undefined" != typeof document ? r.useLayoutEffect : () => {}
    },
    11021(e, t, n) {
      n.d(t, {
        w: () => o
      });
      var r = n(28830);

      function o(e, t) {
        (0, r.N)(() => {
          if (e && e.ref && t) return e.ref.current = t.current, () => {
            e.ref && (e.ref.current = null)
          }
        })
      }
    },
    35412(e, t, n) {
      n.d(t, {
        Nf: () => r
      });

      function r() {
        return false
      }
    }
  }
]);