try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "d6a9ee9c-82d4-4863-a9ab-40d7be654f03", e._sentryDebugIdIdentifier = "sentry-dbid-d6a9ee9c-82d4-4863-a9ab-40d7be654f03")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-gta-gen9",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [757, 3431], {
    43431(e) {
      var t, n, r = e.exports = {};

      function o() {
        throw new Error("setTimeout has not been defined")
      }

      function i() {
        throw new Error("clearTimeout has not been defined")
      }

      function s(e) {
        if (t === setTimeout) return setTimeout(e, 0);
        if ((t === o || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
        try {
          return t(e, 0)
        } catch (n) {
          try {
            return t.call(null, e, 0)
          } catch (n) {
            return t.call(this, e, 0)
          }
        }
      }! function() {
        try {
          t = "function" == typeof setTimeout ? setTimeout : o
        } catch (e) {
          t = o
        }
        try {
          n = "function" == typeof clearTimeout ? clearTimeout : i
        } catch (e) {
          n = i
        }
      }();
      var a, u = [],
        l = !1,
        c = -1;

      function d() {
        l && a && (l = !1, a.length ? u = a.concat(u) : c = -1, u.length && f())
      }

      function f() {
        if (!l) {
          var e = s(d);
          l = !0;
          for (var t = u.length; t;) {
            for (a = u, u = []; ++c < t;) a && a[c].run();
            c = -1, t = u.length
          }
          a = null, l = !1,
            function(e) {
              if (n === clearTimeout) return clearTimeout(e);
              if ((n === i || !n) && clearTimeout) return n = clearTimeout, clearTimeout(e);
              try {
                return n(e)
              } catch (t) {
                try {
                  return n.call(null, e)
                } catch (t) {
                  return n.call(this, e)
                }
              }
            }(e)
        }
      }

      function p(e, t) {
        this.fun = e, this.array = t
      }

      function v() {}
      r.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        u.push(new p(e, t)), 1 !== u.length || l || s(f)
      }, p.prototype.run = function() {
        this.fun.apply(null, this.array)
      }, r.title = "browser", r.browser = !0, r.env = {}, r.argv = [], r.version = "", r.versions = {}, r.on = v, r.addListener = v, r.once = v, r.off = v, r.removeListener = v, r.removeAllListeners = v, r.emit = v, r.prependListener = v, r.prependOnceListener = v, r.listeners = function(e) {
        return []
      }, r.binding = function(e) {
        throw new Error("process.binding is not supported")
      }, r.cwd = function() {
        return "/"
      }, r.chdir = function(e) {
        throw new Error("process.chdir is not supported")
      }, r.umask = function() {
        return 0
      }
    },
    83503(e, t, n) {
      "use strict";
      n.d(t, {
        X: () => r
      });
      const r = "undefined" == typeof window
    },
    9575(e, t, n) {
      "use strict";
      n.d(t, {
        sL: () => E,
        UP: () => a,
        ic: () => c,
        iQ: () => f,
        Ub: () => i,
        jt: () => u,
        ZC: () => s,
        rl: () => p
      });
      var r = n(83503),
        o = n(93082);

      function i(e, {
        defaultValue: t = !1,
        initializeWithValue: n = !0
      } = {}) {
        const i = e => r.X || !window.matchMedia ? t : window.matchMedia(e).matches,
          [s, a] = (0, o.useState)(() => n ? i(e) : t);

        function u() {
          a(i(e))
        }
        return (0, o.useEffect)(() => {
          const t = window.matchMedia?.(e);
          return u(), t?.addListener ? t?.addListener(u) : t?.addEventListener("change", u), () => {
            t?.removeListener ? t?.removeListener(u) : t?.removeEventListener("change", u)
          }
        }, [e]), s
      }

      function s(e) {
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

      function a(...e) {
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
            s = l(t);
          return (0, o.useEffect)(() => {
            i.current !== r && (s(r), i.current = r)
          }, [r, i, s]), n
        }({
          defaultProp: t,
          onChange: n
        }), s = void 0 !== e, a = s ? e : r, u = l(n), c = (0, o.useCallback)(t => {
          if (s) {
            const n = "function" == typeof t ? t(e) : t;
            n !== e && u(n)
          } else i(t)
        }, [s, e, i, u]);
        return [a, c]
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
        const [s, a] = (0, o.useState)(!1);
        return d("focusin", e => {
          a(!0), n?.(e), t?.(!0, e)
        }, e), d("focusout", e => {
          a(!1), r?.(e), t?.(!1, e)
        }, e), {
          isFocused: !!i && s
        }
      };

      function p(e = !0) {
        const t = i("screen and (pointer: coarse) and (hover: none)");
        return !!e && t
      }
      var v = n(42069),
        g = n(37013),
        y = n(38140),
        m = n(13258),
        b = n(58504),
        h = n(72965);
      const E = ({
        inert: e,
        className: t,
        onClick: n,
        isLoading: r,
        ...o
      }, i) => {
        const {
          events: s,
          others: a
        } = (0, b.b)(o, {
          onPress: !1
        }), {
          buttonProps: u,
          isPressed: l
        } = function(e, t) {
          let n, {
            elementType: r = "button",
            isDisabled: o,
            onPress: i,
            onPressStart: s,
            onPressEnd: a,
            onPressUp: u,
            onPressChange: l,
            preventFocusOnPress: c,
            allowFocusWhenDisabled: d,
            onClick: f,
            href: p,
            target: b,
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
            target: "a" === r ? b : void 0,
            type: "input" === r ? E : void 0,
            disabled: "input" === r ? o : void 0,
            "aria-disabled": o && "input" !== r ? o : void 0,
            rel: "a" === r ? h : void 0
          };
          let {
            pressProps: w,
            isPressed: T
          } = (0, m.d)({
            onPressStart: s,
            onPressEnd: a,
            onPressChange: l,
            onPress: i,
            onPressUp: u,
            onClick: f,
            isDisabled: o,
            preventFocusOnPress: c,
            ref: t
          }), {
            focusableProps: P
          } = (0, y.Wc)(e, t);
          d && (P.tabIndex = o ? -1 : P.tabIndex);
          let k = (0, g.v)(P, w, (0, v.$)(e, {
            labelable: !0
          }));
          return {
            isPressed: T,
            buttonProps: (0, g.v)(n, k, {
              "aria-haspopup": e["aria-haspopup"],
              "aria-expanded": e["aria-expanded"],
              "aria-controls": e["aria-controls"],
              "aria-pressed": e["aria-pressed"],
              "aria-current": e["aria-current"],
              "aria-disabled": e["aria-disabled"]
            })
          }
        }({
          ...a,
          elementType: "button",
          onPress: e => {
            r || (a.onPress?.(e) ?? n?.({
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
          buttonProps: (0, h.v)(e ? {} : c, {
            ...s,
            className: t
          })
        }
      }
    },
    58504(e, t, n) {
      "use strict";
      n.d(t, {
        b: () => i
      });
      const r = /^(on.*)$/,
        o = /^(onPress.*)$/;

      function i(e, {
        onPress: t
      } = {
        onPress: !0
      }) {
        const n = {},
          i = {};
        for (const s in e) Object.prototype.hasOwnProperty.call(e, s) && (o.test(s) ? t ? n[s] = e[s] : i[s] = e[s] : r.test(s) ? n[s] = e[s] : i[s] = e[s]);
        return {
          events: n,
          others: i
        }
      }
    },
    72965(e, t, n) {
      "use strict";
      n.d(t, {
        v: () => a
      });
      var r = n(81270);
      const o = new Map;

      function i(e, t) {
        if (e === t) return e;
        const n = o.get(e);
        if (n) return n.forEach(e => e(t)), t;
        const r = o.get(t);
        return r ? (r.forEach(t => t(e)), e) : t
      }

      function s(...e) {
        return (...t) => {
          for (const n of e) "function" == typeof n && n(...t)
        }
      }

      function a(...e) {
        const t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          const o = e[n];
          for (const e in o) {
            const n = t[e],
              a = o[e];
            "function" == typeof n && "function" == typeof a && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = s(n, a) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof a ? "id" === e && n && a ? t.id = i(n, a) : t[e] = void 0 !== a ? a : n : t[e] = (0, r.clsx)(n, a)
          }
        }
        return t
      }
    },
    99386(e, t, n) {
      "use strict";
      n.d(t, {
        Cl: () => k,
        ME: () => P
      });
      var r = n(14961),
        o = n(28562),
        i = n(14142),
        s = n(89896),
        a = n(74402),
        u = n(2577);
      n(93082);
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
        p = !0, !u.Fe.isOpening && function(e) {
          return !(e.metaKey || !(0, s.cX)() && e.altKey || e.ctrlKey || "Control" === e.key || "Shift" === e.key || "Meta" === e.key)
        }(e) && (l = "keyboard", c = "keyboard", g("keyboard", e))
      }

      function m(e) {
        l = "pointer", c = "pointerType" in e ? e.pointerType : "mouse", "mousedown" !== e.type && "pointerdown" !== e.type || (p = !0, g("pointer", e))
      }

      function b(e) {
        !u.Fe.isOpening && (0, a.Y)(e) && (p = !0, l = "virtual", c = "virtual")
      }

      function h(e) {
        let t = (0, o.mD)((0, r.wt)(e)),
          n = (0, o.TW)((0, r.wt)(e));
        (0, r.wt)(e) !== t && (0, r.wt)(e) !== n && !i.lR && e.isTrusted && (p || v || (l = "virtual", c = "virtual", g("virtual", e)), p = !1, v = !1)
      }

      function E() {
        i.lR || (p = !1, v = !0)
      }

      function w(e) {
        if ("undefined" == typeof window || "undefined" == typeof document) return;
        const t = (0, o.mD)(e),
          n = (0, o.TW)(e);
        if (f.get(t)) return;
        let r = t.HTMLElement.prototype.focus;
        t.HTMLElement.prototype.focus = function() {
          p = !0, r.apply(this, arguments)
        }, n.addEventListener("keydown", y, !0), n.addEventListener("keyup", y, !0), n.addEventListener("click", b, !0), t.addEventListener("focus", h, !0), t.addEventListener("blur", E, !1), "undefined" != typeof PointerEvent && (n.addEventListener("pointerdown", m, !0), n.addEventListener("pointermove", m, !0), n.addEventListener("pointerup", m, !0)), t.addEventListener("beforeunload", () => {
          T(e)
        }, {
          once: !0
        }), f.set(t, {
          focus: r
        })
      }
      const T = (e, t) => {
        const n = (0, o.mD)(e),
          r = (0, o.TW)(e);
        t && r.removeEventListener("DOMContentLoaded", t), f.has(n) && (n.HTMLElement.prototype.focus = f.get(n).focus, r.removeEventListener("keydown", y, !0), r.removeEventListener("keyup", y, !0), r.removeEventListener("click", b, !0), n.removeEventListener("focus", h, !0), n.removeEventListener("blur", E, !1), "undefined" != typeof PointerEvent && (r.removeEventListener("pointerdown", m, !0), r.removeEventListener("pointermove", m, !0), r.removeEventListener("pointerup", m, !0)), f.delete(n))
      };

      function P() {
        return l
      }

      function k(e) {
        l = e, c = "pointer" === e ? "mouse" : e, g(e, null)
      }
      "undefined" != typeof document && function(e) {
        const t = (0, o.TW)(e);
        let n;
        "loading" !== t.readyState ? w(e) : (n = () => {
          w(e)
        }, t.addEventListener("DOMContentLoaded", n))
      }(), new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"])
    },
    38140(e, t, n) {
      "use strict";
      n.d(t, {
        Wc: () => v
      });
      var r = n(4978),
        o = n(14961),
        i = n(99386),
        s = n(28562),
        a = n(1519);
      var u = n(37013),
        l = n(14142),
        c = n(93082);

      function d(e) {
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
      var f = n(76606);
      let p = c.createContext(null);

      function v(e, t) {
        let {
          focusProps: n
        } = function(e) {
          let {
            isDisabled: t,
            onFocus: n,
            onBlur: r,
            onFocusChange: i
          } = e;
          const a = (0, c.useCallback)(e => {
              if ((0, o.wt)(e) === e.currentTarget) return r && r(e), i && i(!1), !0
            }, [r, i]),
            u = (0, l.yB)(a),
            d = (0, c.useCallback)(e => {
              let t = (0, o.wt)(e);
              const r = (0, s.TW)(t),
                a = r ? (0, o.bq)(r) : (0, o.bq)();
              t === e.currentTarget && t === a && (n && n(e), i && i(!0), u(e))
            }, [i, n, u]);
          return {
            focusProps: {
              onFocus: !t && (n || i || r) ? d : void 0,
              onBlur: t || !r && !i ? void 0 : a
            }
          }
        }(e), {
          keyboardProps: v
        } = function(e) {
          return {
            keyboardProps: e.isDisabled ? {} : {
              onKeyDown: d(e.onKeyDown),
              onKeyUp: d(e.onKeyUp)
            }
          }
        }(e), g = (0, u.v)(n, v), y = function(e) {
          let t = (0, c.useContext)(p) || {};
          (0, f.w)(t, e);
          let {
            ref: n,
            ...r
          } = t;
          return r
        }(t), m = e.isDisabled ? {} : y, b = (0, c.useRef)(e.autoFocus);
        (0, c.useEffect)(() => {
          b.current && t.current && function(e) {
            if (!e.isConnected) return;
            const t = (0, s.TW)(e);
            if ("virtual" === (0, i.ME)()) {
              let n = (0, o.bq)(t);
              (0, a.v)(() => {
                const i = (0, o.bq)(t);
                i !== n && i !== t.body || !e.isConnected || (0, r.e)(e)
              })
            } else(0, r.e)(e)
          }(t.current), b.current = !1
        }, [t]);
        let h = e.excludeFromTabOrder ? -1 : 0;
        return e.isDisabled && (h = void 0), {
          focusableProps: (0, u.v)({
            ...g,
            tabIndex: h
          }, m)
        }
      }
    },
    13258(e, t, n) {
      "use strict";
      n.d(t, {
        d: () => M
      });
      var r = n(43524),
        o = n(14142),
        i = n(28562),
        s = n(89896),
        a = n(1519);
      let u = "default",
        l = "",
        c = new WeakMap;

      function d(e) {
        if ((0, s.un)()) {
          if ("disabled" !== u) return;
          u = "restoring", setTimeout(() => {
            (0, a.v)(() => {
              if ("restoring" === u) {
                const t = (0, i.TW)(e);
                "none" === t.documentElement.style.webkitUserSelect && (t.documentElement.style.webkitUserSelect = l || ""), l = "", u = "default"
              }
            })
          }, 300)
        } else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && c.has(e)) {
          let t = c.get(e),
            n = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
          "none" === e.style[n] && (e.style[n] = t), "" === e.getAttribute("style") && e.removeAttribute("style"), c.delete(e)
        }
      }
      var f = n(4978),
        p = n(14961);

      function v(e) {
        let t = e?.defaultView;
        return t?.__webpack_nonce__ || globalThis.__webpack_nonce__ || void 0
      }
      let g = new WeakMap;
      var y = n(74402),
        m = n(37013),
        b = n(2577),
        h = n(93082);
      const E = h.createContext({
        register: () => {}
      });
      E.displayName = "PressResponderContext";
      var w = n(96187),
        T = n(87478),
        P = n(76606);
      n(84017);
      class k {
        #e;
        constructor(e, t, n, r) {
          this.#e = !0;
          let o = r?.target ?? n.currentTarget;
          const i = o?.getBoundingClientRect();
          let s, a, u = 0,
            l = null;
          null != n.clientX && null != n.clientY && (a = n.clientX, l = n.clientY), i && (null != a && null != l ? (s = a - i.left, u = l - i.top) : (s = i.width / 2, u = i.height / 2)), this.type = e, this.pointerType = t, this.target = n.currentTarget, this.shiftKey = n.shiftKey, this.metaKey = n.metaKey, this.ctrlKey = n.ctrlKey, this.altKey = n.altKey, this.x = s, this.y = u, this.key = n.key
        }
        continuePropagation() {
          this.#e = !1
        }
        get shouldStopPropagation() {
          return this.#e
        }
      }
      const L = Symbol("linkClicked"),
        C = "react-aria-pressable-style",
        S = "data-react-aria-pressable";

      function M(e) {
        let {
          onPress: t,
          onPressChange: n,
          onPressStart: a,
          onPressEnd: M,
          onPressUp: x,
          onClick: O,
          isDisabled: _,
          isPressed: I,
          preventFocusOnPress: F,
          shouldCancelOnPointerExit: R,
          allowTextSelectionOnPress: W,
          ref: H,
          ...U
        } = function(e) {
          let t = (0, h.useContext)(E);
          if (t) {
            let {
              register: n,
              ref: r,
              ...o
            } = t;
            e = (0, m.v)(o, e), n()
          }
          return (0, P.w)(t, e.ref), e
        }(e), [V, B] = (0, h.useState)(!1), X = (0, h.useRef)({
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
          addGlobalListener: $,
          removeAllGlobalListeners: z
        } = (0, T.A)(), j = (0, h.useCallback)((e, t) => {
          let r = X.current;
          if (_ || r.didFirePressStart) return !1;
          let o = !0;
          if (r.isTriggeringEvent = !0, a) {
            let n = new k("pressstart", t, e);
            a(n), o = n.shouldStopPropagation
          }
          return n && n(!0), r.isTriggeringEvent = !1, r.didFirePressStart = !0, B(!0), o
        }, [_, a, n]), q = (0, h.useCallback)((e, r, o = !0) => {
          let i = X.current;
          if (!i.didFirePressStart) return !1;
          i.didFirePressStart = !1, i.isTriggeringEvent = !0;
          let s = !0;
          if (M) {
            let t = new k("pressend", r, e);
            M(t), s = t.shouldStopPropagation
          }
          if (n && n(!1), B(!1), t && o && !_) {
            let n = new k("press", r, e);
            t(n), s &&= n.shouldStopPropagation
          }
          return i.isTriggeringEvent = !1, s
        }, [_, M, n, t]), G = (0, w.J)(q), Y = (0, h.useCallback)((e, t) => {
          let n = X.current;
          if (_) return !1;
          if (x) {
            n.isTriggeringEvent = !0;
            let r = new k("pressup", t, e);
            return x(r), n.isTriggeringEvent = !1, r.shouldStopPropagation
          }
          return !0
        }, [_, x]), J = (0, w.J)(Y), Q = (0, h.useCallback)(e => {
          let t = X.current;
          if (t.isPressed && t.target) {
            t.didFirePressStart && null != t.pointerType && q(K(t.target, e), t.pointerType, !1), t.isPressed = !1, t.isOverTarget = !1, t.activePointerId = null, t.pointerType = null, z(), W || d(t.target);
            for (let e of t.disposables) e();
            t.disposables = []
          }
        }, [W, z, q]), Z = (0, w.J)(Q), ee = (0, h.useCallback)(e => {
          R && Q(e)
        }, [R, Q]), te = (0, h.useCallback)(e => {
          _ || O?.(e)
        }, [_, O]), ne = (0, h.useCallback)((e, t) => {
          if (!_ && O) {
            let n = new MouseEvent("click", e);
            (0, o.o1)(n, t), O((0, o.eg)(n))
          }
        }, [_, O]), re = (0, h.useMemo)(() => {
          let e = X.current,
            t = {
              onKeyDown(t) {
                if (A(t.nativeEvent, t.currentTarget) && (0, p.sD)(t.currentTarget, (0, p.wt)(t))) {
                  N((0, p.wt)(t), t.key) && t.preventDefault();
                  let o = !0;
                  e.isPressed || t.repeat || (e.target = t.currentTarget, e.isPressed = !0, e.pointerType = "keyboard", o = j(t, "keyboard"));
                  let a = t.currentTarget,
                    u = t => {
                      A(t, a) && !t.repeat && (0, p.sD)(a, (0, p.wt)(t)) && e.target && J(K(e.target, t), "keyboard")
                    };
                  $((0, i.TW)(t.currentTarget), "keyup", (0, r.c)(u, n), !0), o && t.stopPropagation(), t.metaKey && (0, s.cX)() && e.metaKeyEvents?.set(t.key, t.nativeEvent)
                } else "Meta" === t.key && (e.metaKeyEvents = new Map)
              },
              onClick(t) {
                if ((!t || (0, p.sD)(t.currentTarget, (0, p.wt)(t))) && t && 0 === t.button && !e.isTriggeringEvent && !b.Fe.isOpening) {
                  let n = !0;
                  if (_ && t.preventDefault(), e.ignoreEmulatedMouseEvents || e.isPressed || "virtual" !== e.pointerType && !(0, y.Y)(t.nativeEvent)) {
                    if (e.isPressed && "keyboard" !== e.pointerType) {
                      let r = e.pointerType || t.nativeEvent.pointerType || "virtual",
                        o = J(K(t.currentTarget, t), r),
                        i = G(K(t.currentTarget, t), r, !0);
                      n = o && i, e.isOverTarget = !1, te(t), Z(t)
                    }
                  } else {
                    let e = j(t, "virtual"),
                      r = J(t, "virtual"),
                      o = G(t, "virtual");
                    te(t), n = e && r && o
                  }
                  e.ignoreEmulatedMouseEvents = !1, n && t.stopPropagation()
                }
              }
            },
            n = t => {
              if (e.isPressed && e.target && A(t, e.target)) {
                N((0, p.wt)(t), t.key) && t.preventDefault();
                let n = (0, p.wt)(t),
                  r = (0, p.sD)(e.target, n);
                G(K(e.target, t), "keyboard", r), r && ne(t, e.target), z(), "Enter" !== t.key && D(e.target) && (0, p.sD)(e.target, n) && !t[L] && (t[L] = !0, (0, b.Fe)(e.target, t, !1)), e.isPressed = !1, e.metaKeyEvents?.delete(t.key)
              } else if ("Meta" === t.key && e.metaKeyEvents?.size) {
                let t = e.metaKeyEvents;
                e.metaKeyEvents = void 0;
                for (let n of t.values()) e.target?.dispatchEvent(new KeyboardEvent("keyup", n))
              }
            };
          if ("undefined" != typeof PointerEvent) {
            t.onPointerDown = t => {
              if (0 !== t.button || !(0, p.sD)(t.currentTarget, (0, p.wt)(t))) return;
              if ((0, y.P)(t.nativeEvent)) return void(e.pointerType = "virtual");
              e.pointerType = t.pointerType;
              let o = !0;
              if (!e.isPressed) {
                e.isPressed = !0, e.isOverTarget = !0, e.activePointerId = t.pointerId, e.target = t.currentTarget, W || function(e) {
                  if ((0, s.un)()) {
                    if ("default" === u) {
                      const t = (0, i.TW)(e);
                      l = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = "none"
                    }
                    u = "disabled"
                  } else if (e instanceof HTMLElement || e instanceof SVGElement) {
                    let t = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
                    c.set(e, e.style[t]), e.style[t] = "none"
                  }
                }(e.target), o = j(t, e.pointerType);
                let a = (0, p.wt)(t);
                "releasePointerCapture" in a && ("hasPointerCapture" in a ? a.hasPointerCapture(t.pointerId) && a.releasePointerCapture(t.pointerId) : a.releasePointerCapture(t.pointerId)), $((0, i.TW)(t.currentTarget), "pointerup", n, !1), $((0, i.TW)(t.currentTarget), "pointercancel", r, !1)
              }
              o && t.stopPropagation()
            }, t.onMouseDown = t => {
              if ((0, p.sD)(t.currentTarget, (0, p.wt)(t)) && 0 === t.button) {
                if (F) {
                  let n = (0, o.LE)(t.target);
                  n && e.disposables.push(n)
                }
                t.stopPropagation()
              }
            }, t.onPointerUp = t => {
              (0, p.sD)(t.currentTarget, (0, p.wt)(t)) && "virtual" !== e.pointerType && (0 !== t.button || e.isPressed || J(t, e.pointerType || t.pointerType))
            }, t.onPointerEnter = t => {
              t.pointerId === e.activePointerId && e.target && !e.isOverTarget && null != e.pointerType && (e.isOverTarget = !0, j(K(e.target, t), e.pointerType))
            }, t.onPointerLeave = t => {
              t.pointerId === e.activePointerId && e.target && e.isOverTarget && null != e.pointerType && (e.isOverTarget = !1, G(K(e.target, t), e.pointerType, !1), ee(t))
            };
            let n = t => {
                if (t.pointerId === e.activePointerId && e.isPressed && 0 === t.button && e.target) {
                  if ((0, p.sD)(e.target, (0, p.wt)(t)) && null != e.pointerType) {
                    let n = !1,
                      r = setTimeout(() => {
                        e.isPressed && e.target instanceof HTMLElement && (n ? Z(t) : ((0, f.e)(e.target), e.target.click()))
                      }, 80);
                    $(t.currentTarget, "click", () => n = !0, !0), e.disposables.push(() => clearTimeout(r))
                  } else Z(t);
                  e.isOverTarget = !1
                }
              },
              r = e => {
                Z(e)
              };
            t.onDragStart = e => {
              (0, p.sD)(e.currentTarget, (0, p.wt)(e)) && Z(e)
            }
          }
          return t
        }, [$, _, F, z, W, ee, j, te, ne]);
        return (0, h.useEffect)(() => {
          if (!H) return;
          const e = (0, i.TW)(H.current);
          if (!e || !e.head || e.getElementById(C)) return;
          const t = e.createElement("style");
          t.id = C;
          let n = function(e) {
            let t = e ?? ("undefined" != typeof document ? document : void 0);
            if (!t) return v(t);
            if (g.has(t)) return g.get(t);
            let n = t.querySelector('meta[property="csp-nonce"]'),
              r = n && n instanceof(0, i.mD)(n).HTMLMetaElement && (n.nonce || n.content) || v(t) || void 0;
            return void 0 !== r && g.set(t, r), r
          }(e);
          n && (t.nonce = n), t.textContent = `\n@layer {\n  [${S}] {\n    touch-action: pan-x pan-y pinch-zoom;\n  }\n}\n    `.trim(), e.head.prepend(t)
        }, [H]), (0, h.useEffect)(() => {
          let e = X.current;
          return () => {
            W || d(e.target ?? void 0);
            for (let t of e.disposables) t();
            e.disposables = []
          }
        }, [W]), {
          isPressed: I || V,
          pressProps: (0, m.v)(U, re, {
            [S]: !0
          })
        }
      }

      function D(e) {
        return "A" === e.tagName && e.hasAttribute("href")
      }

      function A(e, t) {
        const {
          key: n,
          code: r
        } = e, o = t, s = o.getAttribute("role");
        return !("Enter" !== n && " " !== n && "Spacebar" !== n && "Space" !== r || o instanceof(0, i.mD)(o).HTMLInputElement && !O(o, n) || o instanceof(0, i.mD)(o).HTMLTextAreaElement || o.isContentEditable || ("link" === s || !s && D(o)) && "Enter" !== n)
      }

      function K(e, t) {
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

      function N(e, t) {
        return e instanceof HTMLInputElement ? !O(e, t) : function(e) {
          return !(e instanceof HTMLInputElement || (e instanceof HTMLButtonElement ? "submit" === e.type || "reset" === e.type : D(e)))
        }(e)
      }
      const x = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

      function O(e, t) {
        return "checkbox" === e.type || "radio" === e.type ? " " === t : x.has(e.type)
      }
    },
    14142(e, t, n) {
      "use strict";
      n.d(t, {
        LE: () => p,
        eg: () => l,
        lR: () => f,
        o1: () => c,
        yB: () => d
      });
      var r = n(4978),
        o = n(14961),
        i = n(28562),
        s = n(1360),
        a = n(58907),
        u = n(93082);

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
          let r = (0, o.wt)(n);
          if (r instanceof HTMLButtonElement || r instanceof HTMLInputElement || r instanceof HTMLTextAreaElement || r instanceof HTMLSelectElement) {
            t.current.isFocused = !0;
            let n = r,
              i = r => {
                if (t.current.isFocused = !1, n.disabled) {
                  let t = l(r);
                  e?.(t)
                }
                t.current.observer && (t.current.observer.disconnect(), t.current.observer = null)
              };
            n.addEventListener("focusout", i, {
              once: !0
            }), t.current.observer = new MutationObserver(() => {
              if (t.current.isFocused && n.disabled) {
                t.current.observer?.disconnect();
                let e = n === (0, o.bq)() ? null : (0, o.bq)();
                n.dispatchEvent(new FocusEvent("blur", {
                  relatedTarget: e
                })), n.dispatchEvent(new FocusEvent("focusout", {
                  bubbles: !0,
                  relatedTarget: e
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
        for (; e && !(0, s.t)(e, {
            skipVisibilityCheck: !0
          });) e = e.parentElement;
        let t = (0, i.mD)(e),
          n = t.document.activeElement;
        if (!n || n === e) return;
        f = !0;
        let a = !1,
          u = e => {
            ((0, o.wt)(e) === n || a) && e.stopImmediatePropagation()
          },
          l = t => {
            ((0, o.wt)(t) === n || a) && (t.stopImmediatePropagation(), e || a || (a = !0, (0, r.e)(n), p()))
          },
          c = t => {
            ((0, o.wt)(t) === e || a) && t.stopImmediatePropagation()
          },
          d = t => {
            ((0, o.wt)(t) === e || a) && (t.stopImmediatePropagation(), a || (a = !0, (0, r.e)(n), p()))
          };
        t.addEventListener("blur", u, !0), t.addEventListener("focusout", l, !0), t.addEventListener("focusin", d, !0), t.addEventListener("focus", c, !0);
        let p = () => {
            cancelAnimationFrame(v), t.removeEventListener("blur", u, !0), t.removeEventListener("focusout", l, !0), t.removeEventListener("focusin", d, !0), t.removeEventListener("focus", c, !0), f = !1, a = !1
          },
          v = requestAnimationFrame(p);
        return p
      }
    },
    6859(e, t, n) {
      "use strict";
      n.d(t, {
        Cc: () => u,
        wR: () => f
      });
      var r = n(93082);
      const o = {
          prefix: String(Math.round(1e10 * Math.random())),
          current: 0
        },
        i = r.createContext(o),
        s = r.createContext(!1);
      Boolean("undefined" != typeof window && window.document && window.document.createElement);
      let a = new WeakMap;
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
              let e = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED?.ReactCurrentOwner?.current;
              if (e) {
                let n = a.get(e);
                null == n ? a.set(e, {
                  id: t.current,
                  state: e.memoizedState
                }) : e.memoizedState !== n.state && (t.current = n.id, a.delete(e))
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
        return "function" == typeof r.useSyncExternalStore ? r.useSyncExternalStore(d, l, c) : (0, r.useContext)(s)
      }
    },
    43524(e, t, n) {
      "use strict";

      function r(...e) {
        return (...t) => {
          for (let n of e) "function" == typeof n && n(...t)
        }
      }
      n.d(t, {
        c: () => r
      })
    },
    28562(e, t, n) {
      "use strict";
      n.d(t, {
        Ng: () => i,
        TW: () => r,
        mD: () => o
      });
      const r = e => e?.ownerDocument ?? document,
        o = e => e && "window" in e && e.window === e ? e : r(e).defaultView || window;

      function i(e) {
        return null !== (t = e) && "object" == typeof t && "nodeType" in t && "number" == typeof t.nodeType && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && "host" in e;
        var t
      }
    },
    42069(e, t, n) {
      "use strict";
      n.d(t, {
        $: () => l
      });
      const r = new Set(["id"]),
        o = new Set(["aria-label", "aria-labelledby", "aria-describedby", "aria-details"]),
        i = new Set(["href", "hrefLang", "target", "rel", "download", "ping", "referrerPolicy"]),
        s = new Set(["dir", "lang", "hidden", "inert", "translate"]),
        a = new Set(["onClick", "onAuxClick", "onContextMenu", "onDoubleClick", "onMouseDown", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseOut", "onMouseOver", "onMouseUp", "onTouchCancel", "onTouchEnd", "onTouchMove", "onTouchStart", "onPointerDown", "onPointerMove", "onPointerUp", "onPointerCancel", "onPointerEnter", "onPointerLeave", "onPointerOver", "onPointerOut", "onGotPointerCapture", "onLostPointerCapture", "onScroll", "onWheel", "onAnimationStart", "onAnimationEnd", "onAnimationIteration", "onTransitionCancel", "onTransitionEnd", "onTransitionRun", "onTransitionStart"]),
        u = /^(data-.*)$/;

      function l(e, t = {}) {
        let {
          labelable: n,
          isLink: l,
          global: c,
          events: d = c,
          propNames: f
        } = t, p = {};
        for (const t in e) Object.prototype.hasOwnProperty.call(e, t) && (r.has(t) || n && o.has(t) || l && i.has(t) || c && s.has(t) || d && (a.has(t) || t.endsWith("Capture") && a.has(t.slice(0, -7))) || f?.has(t) || u.test(t)) && (p[t] = e[t]);
        return p
      }
    },
    4978(e, t, n) {
      "use strict";

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
    1360(e, t, n) {
      "use strict";
      n.d(t, {
        t: () => l,
        A: () => c
      });
      var r = n(28562);
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
      const s = ["input:not([disabled]):not([type=hidden])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "a[href]", "area[href]", "summary", "iframe", "object", "embed", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable^="false"])', "permission"],
        a = s.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
      s.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
      const u = s.join(':not([hidden]):not([tabindex="-1"]),');

      function l(e, t) {
        return e.matches(a) && !d(e) && (t?.skipVisibilityCheck || i(e))
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
    74402(e, t, n) {
      "use strict";
      n.d(t, {
        P: () => i,
        Y: () => o
      });
      var r = n(89896);

      function o(e) {
        return !("" !== e.pointerType || !e.isTrusted) || ((0, r.m0)() && e.pointerType ? "click" === e.type && 1 === e.buttons : 0 === e.detail && !e.pointerType)
      }

      function i(e) {
        return !(0, r.m0)() && 0 === e.width && 0 === e.height || 1 === e.width && 1 === e.height && 0 === e.pressure && 0 === e.detail && "mouse" === e.pointerType
      }
    },
    37013(e, t, n) {
      "use strict";
      n.d(t, {
        v: () => u
      });
      var r = n(43524),
        o = n(13087);

      function i(...e) {
        return 1 === e.length && e[0] ? e[0] : t => {
          let n = !1;
          const r = e.map(e => {
            const r = s(e, t);
            return n ||= "function" == typeof r, r
          });
          if (n) return () => {
            r.forEach((t, n) => {
              "function" == typeof t ? t() : s(e[n], null)
            })
          }
        }
      }

      function s(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
      }
      var a = n(81270);

      function u(...e) {
        let t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          let s = e[n];
          for (let e in s) {
            let n = t[e],
              u = s[e];
            "function" == typeof n && "function" == typeof u && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = (0, r.c)(n, u) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof u ? "id" === e && n && u ? t.id = (0, o.Tw)(n, u) : "ref" === e && n && u ? t.ref = i(n, u) : t[e] = void 0 !== u ? u : n : t[e] = (0, a.default)(n, u)
          }
        }
        return t
      }
    },
    2577(e, t, n) {
      "use strict";
      n.d(t, {
        Fe: () => u,
        PJ: () => c,
        _h: () => l,
        rd: () => a
      });
      var r = n(4978),
        o = n(89896),
        i = n(93082);
      const s = (0, i.createContext)({
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

      function a() {
        return (0, i.useContext)(s)
      }

      function u(e, t, n = !0) {
        let {
          metaKey: i,
          ctrlKey: s,
          altKey: a,
          shiftKey: l
        } = t;
        (0, o.gm)() && window.event?.type?.startsWith("key") && "_blank" === e.target && ((0, o.cX)() ? i = !0 : s = !0);
        let c = (0, o.Tc)() && (0, o.cX)() && !(0, o.bh)() ? new KeyboardEvent("keydown", {
          keyIdentifier: "Enter",
          metaKey: i,
          ctrlKey: s,
          altKey: a,
          shiftKey: l
        }) : new MouseEvent("click", {
          metaKey: i,
          ctrlKey: s,
          altKey: a,
          shiftKey: l,
          detail: 1,
          bubbles: !0,
          cancelable: !0
        });
        u.isOpening = n, (0, r.e)(e), e.dispatchEvent(c), u.isOpening = !1
      }

      function l(e) {
        const t = a().useHref(e?.href ?? "");
        return {
          href: e?.href ? t : void 0,
          target: e?.target,
          rel: e?.rel,
          download: e?.download,
          ping: e?.ping,
          referrerPolicy: e?.referrerPolicy
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
    89896(e, t, n) {
      "use strict";

      function r(e) {
        if ("undefined" == typeof window || null == window.navigator) return !1;
        let t = window.navigator.userAgentData?.brands;
        return Array.isArray(t) && t.some(t => e.test(t.brand)) || e.test(window.navigator.userAgent)
      }

      function o(e) {
        return "undefined" != typeof window && null != window.navigator && e.test(window.navigator.userAgentData?.platform || window.navigator.platform)
      }

      function i(e) {
        let t = null;
        return () => (null == t && (t = e()), t)
      }
      n.d(t, {
        Tc: () => c,
        bh: () => u,
        cX: () => s,
        gm: () => p,
        m0: () => f,
        un: () => l
      });
      const s = i(function() {
          return o(/^Mac/i)
        }),
        a = i(function() {
          return o(/^iPhone/i)
        }),
        u = i(function() {
          return o(/^iPad/i) || s() && navigator.maxTouchPoints > 1
        }),
        l = i(function() {
          return a() || u()
        }),
        c = (i(function() {
          return s() || l()
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
    1519(e, t, n) {
      "use strict";
      n.d(t, {
        v: () => a
      });
      var r = n(14961);
      let o = new Map,
        i = new Set;

      function s() {
        if ("undefined" == typeof window) return;

        function e(e) {
          return "propertyName" in e
        }
        let t = n => {
          let s = (0, r.wt)(n);
          if (!e(n) || !s) return;
          let a = o.get(s);
          if (a && (a.delete(n.propertyName), 0 === a.size && (s.removeEventListener("transitioncancel", t), o.delete(s)), 0 === o.size)) {
            for (let e of i) e();
            i.clear()
          }
        };
        document.body.addEventListener("transitionrun", n => {
          let i = (0, r.wt)(n);
          if (!e(n) || !i) return;
          let s = o.get(i);
          s || (s = new Set, o.set(i, s), i.addEventListener("transitioncancel", t, {
            once: !0
          })), s.add(n.propertyName)
        }), document.body.addEventListener("transitionend", t)
      }

      function a(e) {
        requestAnimationFrame(() => {
          ! function() {
            for (const [e] of o) "isConnected" in e && !e.isConnected && o.delete(e)
          }(), 0 === o.size ? e() : i.add(e)
        })
      }
      "undefined" != typeof document && ("loading" !== document.readyState ? s() : document.addEventListener("DOMContentLoaded", s))
    },
    14961(e, t, n) {
      "use strict";
      n.d(t, {
        bq: () => s,
        sD: () => i,
        wt: () => a
      });
      var r = n(28562),
        o = n(67892);

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
      const s = (e = document) => {
        if (!(0, o.Nf)()) return e.activeElement;
        let t = e.activeElement;
        for (; t && "shadowRoot" in t && t.shadowRoot?.activeElement;) t = t.shadowRoot.activeElement;
        return t
      };

      function a(e) {
        if ((0, o.Nf)() && e.target instanceof Element && e.target.shadowRoot) {
          if ("composedPath" in e) return e.composedPath()[0] ?? null;
          if ("composedPath" in e.nativeEvent) return e.nativeEvent.composedPath()[0] ?? null
        }
        return e.target
      }
    },
    96187(e, t, n) {
      "use strict";
      n.d(t, {
        J: () => s
      });
      var r = n(58907),
        o = n(93082);
      const i = o.useInsertionEffect ?? r.N;

      function s(e) {
        const t = (0, o.useRef)(null);
        return i(() => {
          t.current = e
        }, [e]), (0, o.useCallback)((...e) => {
          const n = t.current;
          return n?.(...e)
        }, [])
      }
    },
    87478(e, t, n) {
      "use strict";
      n.d(t, {
        A: () => o
      });
      var r = n(93082);

      function o() {
        let e = (0, r.useRef)(new Map),
          t = (0, r.useCallback)((t, n, r, o) => {
            let i = o?.once ? (...t) => {
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
            let i = e.current.get(r)?.fn || r;
            t.removeEventListener(n, i, o), e.current.delete(r)
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
    13087(e, t, n) {
      "use strict";
      n.d(t, {
        Tw: () => c,
        Bi: () => l,
        X1: () => d
      });
      var r = n(58907),
        o = n(6859),
        i = n(93082);
      let s, a = Boolean("undefined" != typeof window && window.document && window.document.createElement),
        u = new Map;

      function l(e) {
        let [t, n] = (0, i.useState)(e), l = (0, i.useRef)(null), c = (0, o.Cc)(t), d = (0, i.useRef)(null);
        if (s && s.register(d, c), a) {
          const e = u.get(c);
          e && !e.includes(l) ? e.push(l) : u.set(c, [l])
        }
        return (0, r.N)(() => {
          let e = c;
          return () => {
            s && s.unregister(d), u.delete(e)
          }
        }, [c]), (0, i.useEffect)(() => {
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
          [n, o] = function(e) {
            let [t, n] = (0, i.useState)(e), o = (0, i.useRef)(t), s = (0, i.useRef)(null), a = (0, i.useRef)(() => {
              if (!s.current) return;
              let e = s.current.next();
              e.done ? s.current = null : o.current === e.value ? a.current() : n(e.value)
            });
            (0, r.N)(() => {
              o.current = t, s.current && a.current()
            });
            let u = (0, i.useCallback)(e => {
              s.current = e(o.current), a.current()
            }, [a]);
            return [t, u]
          }(t),
          s = (0, i.useCallback)(() => {
            o(function*() {
              yield t, yield document.getElementById(t) ? t : void 0
            })
          }, [t, o]);
        return (0, r.N)(s, [t, s, ...e]), n
      }
      "undefined" != typeof FinalizationRegistry && (s = new FinalizationRegistry(e => {
        u.delete(e)
      }))
    },
    58907(e, t, n) {
      "use strict";
      n.d(t, {
        N: () => o
      });
      var r = n(93082);
      const o = "undefined" != typeof document ? r.useLayoutEffect : () => {}
    },
    76606(e, t, n) {
      "use strict";
      n.d(t, {
        w: () => o
      });
      var r = n(58907);

      function o(e, t) {
        (0, r.N)(() => {
          if (e && e.ref && t) return e.ref.current = t.current, () => {
            e.ref && (e.ref.current = null)
          }
        })
      }
    },
    67892(e, t, n) {
      "use strict";
      n.d(t, {
        Nf: () => r
      });

      function r() {
        return false
      }
    }
  }
]);