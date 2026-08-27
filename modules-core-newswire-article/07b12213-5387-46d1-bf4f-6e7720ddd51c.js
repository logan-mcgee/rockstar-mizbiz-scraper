try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "07b12213-5387-46d1-bf4f-6e7720ddd51c", e._sentryDebugIdIdentifier = "sentry-dbid-07b12213-5387-46d1-bf4f-6e7720ddd51c")
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
  [8061], {
    78061(e, t, n) {
      n.d(t, {
        s: () => s
      });
      var r = n(70995),
        o = n(96283),
        i = n(10453),
        a = n(63368);

      function s(e, t) {
        let n, {
          elementType: s = "button",
          isDisabled: l,
          onPress: u,
          onPressStart: c,
          onPressEnd: d,
          onPressUp: f,
          onPressChange: p,
          preventFocusOnPress: y,
          allowFocusWhenDisabled: g,
          onClick: v,
          href: m,
          target: b,
          rel: h,
          type: w = "button"
        } = e;
        n = "button" === s ? {
          type: w,
          disabled: l,
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
          href: "a" !== s || l ? void 0 : m,
          target: "a" === s ? b : void 0,
          type: "input" === s ? w : void 0,
          disabled: "input" === s ? l : void 0,
          "aria-disabled": l && "input" !== s ? l : void 0,
          rel: "a" === s ? h : void 0
        };
        let {
          pressProps: E,
          isPressed: T
        } = (0, a.d)({
          onPressStart: c,
          onPressEnd: d,
          onPressChange: p,
          onPress: u,
          onPressUp: f,
          onClick: v,
          isDisabled: l,
          preventFocusOnPress: y,
          ref: t
        }), {
          focusableProps: P
        } = (0, i.Wc)(e, t);
        g && (P.tabIndex = l ? -1 : P.tabIndex);
        let k = (0, o.v)(P, E, (0, r.$)(e, {
          labelable: !0
        }));
        return {
          isPressed: T,
          buttonProps: (0, o.v)(n, k, {
            "aria-haspopup": e["aria-haspopup"],
            "aria-expanded": e["aria-expanded"],
            "aria-controls": e["aria-controls"],
            "aria-pressed": e["aria-pressed"],
            "aria-current": e["aria-current"],
            "aria-disabled": e["aria-disabled"]
          })
        }
      }
    },
    15812(e, t, n) {
      n.d(t, {
        Cl: () => k,
        ME: () => P
      });
      var r = n(65911),
        o = n(83540),
        i = n(28148),
        a = n(26530),
        s = n(32036),
        l = n(15815);
      n(93082);
      let u = null,
        c = "keyboard";
      const d = new Set;
      let f = new Map,
        p = !1,
        y = !1;

      function g(e, t) {
        for (let n of d) n(e, t)
      }

      function v(e) {
        p = !0, !l.Fe.isOpening && function(e) {
          return !(e.metaKey || !(0, a.cX)() && e.altKey || e.ctrlKey || "Control" === e.key || "Shift" === e.key || "Meta" === e.key)
        }(e) && (u = "keyboard", c = "keyboard", g("keyboard", e))
      }

      function m(e) {
        u = "pointer", c = "pointerType" in e ? e.pointerType : "mouse", "mousedown" !== e.type && "pointerdown" !== e.type || (p = !0, g("pointer", e))
      }

      function b(e) {
        !l.Fe.isOpening && (0, s.Y)(e) && (p = !0, u = "virtual", c = "virtual")
      }

      function h(e) {
        let t = (0, o.mD)((0, r.wt)(e)),
          n = (0, o.TW)((0, r.wt)(e));
        (0, r.wt)(e) !== t && (0, r.wt)(e) !== n && !i.lR && e.isTrusted && (p || y || (u = "virtual", c = "virtual", g("virtual", e)), p = !1, y = !1)
      }

      function w() {
        i.lR || (p = !1, y = !0)
      }

      function E(e) {
        if ("undefined" == typeof window || "undefined" == typeof document) return;
        const t = (0, o.mD)(e),
          n = (0, o.TW)(e);
        if (f.get(t)) return;
        let r = t.HTMLElement.prototype.focus;
        Reflect.defineProperty(t.HTMLElement.prototype, "focus", {
          configurable: !0,
          writable: !0,
          value: function() {
            p = !0, r.apply(this, arguments)
          }
        }), n.addEventListener("keydown", v, !0), n.addEventListener("keyup", v, !0), n.addEventListener("click", b, !0), t.addEventListener("focus", h, !0), t.addEventListener("blur", w, !1), "undefined" != typeof PointerEvent && (n.addEventListener("pointerdown", m, !0), n.addEventListener("pointermove", m, !0), n.addEventListener("pointerup", m, !0)), t.addEventListener("beforeunload", () => {
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
        t && r.removeEventListener("DOMContentLoaded", t), f.has(n) && (Reflect.defineProperty(n.HTMLElement.prototype, "focus", {
          configurable: !0,
          writable: !0,
          value: f.get(n).focus
        }), r.removeEventListener("keydown", v, !0), r.removeEventListener("keyup", v, !0), r.removeEventListener("click", b, !0), n.removeEventListener("focus", h, !0), n.removeEventListener("blur", w, !1), "undefined" != typeof PointerEvent && (r.removeEventListener("pointerdown", m, !0), r.removeEventListener("pointermove", m, !0), r.removeEventListener("pointerup", m, !0)), f.delete(n))
      };

      function P() {
        return u
      }

      function k(e) {
        u = e, c = "pointer" === e ? "mouse" : e, g(e, null)
      }
      "undefined" != typeof document && function(e) {
        const t = (0, o.TW)(e);
        let n;
        "loading" !== t.readyState ? E(e) : (n = () => {
          E(e)
        }, t.addEventListener("DOMContentLoaded", n))
      }(), new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"])
    },
    10453(e, t, n) {
      n.d(t, {
        Wc: () => y
      });
      var r = n(35516),
        o = n(65911),
        i = n(15812),
        a = n(83540),
        s = n(91217);
      var l = n(96283),
        u = n(28148),
        c = n(93082);
      var d = n(82835),
        f = n(50804);
      let p = c.createContext(null);

      function y(e, t) {
        let {
          focusProps: n
        } = function(e) {
          let {
            isDisabled: t,
            onFocus: n,
            onBlur: r,
            onFocusChange: i
          } = e;
          const s = (0, c.useCallback)(e => {
              if ((0, o.wt)(e) === e.currentTarget) return r && r(e), i && i(!1), !0
            }, [r, i]),
            l = (0, u.yB)(s),
            d = (0, c.useCallback)(e => {
              let t = (0, o.wt)(e);
              const r = (0, a.TW)(t),
                s = r ? (0, o.bq)(r) : (0, o.bq)();
              t === e.currentTarget && t === s && (n && n(e), i && i(!0), l(e))
            }, [i, n, l]);
          return {
            focusProps: {
              onFocus: !t && (n || i || r) ? d : void 0,
              onBlur: t || !r && !i ? void 0 : s
            }
          }
        }(e), {
          keyboardProps: y
        } = (0, d.d)(e), g = (0, l.v)(n, y), v = function(e) {
          let t = (0, c.useContext)(p) || {};
          (0, f.w)(t, e);
          let {
            ref: n,
            ...r
          } = t;
          return r
        }(t), m = e.isDisabled ? {} : v, b = (0, c.useRef)(e.autoFocus);
        (0, c.useEffect)(() => {
          b.current && t.current && function(e) {
            if (!e.isConnected) return;
            const t = (0, a.TW)(e);
            if ("virtual" === (0, i.ME)()) {
              let n = (0, o.bq)(t);
              (0, s.v)(() => {
                const i = (0, o.bq)(t);
                i !== n && i !== t.body || !e.isConnected || (0, r.e)(e)
              })
            } else(0, r.e)(e)
          }(t.current), b.current = !1
        }, [t]);
        let h = e.excludeFromTabOrder ? -1 : 0;
        return e.isDisabled && (h = void 0), {
          focusableProps: (0, l.v)({
            ...g,
            tabIndex: h
          }, m)
        }
      }
    },
    82835(e, t, n) {
      n.d(t, {
        d: () => g
      });
      var r = n(13238);

      function o(e) {
        if (e) return t => {
          let n = !0,
            r = {
              ...t,
              preventDefault() {
                t.preventDefault()
              },
              isDefaultPrevented: () => t.isDefaultPrevented(),
              stopPropagation() {
                n = !0
              },
              continuePropagation() {
                n = !1, "function" == typeof t.continuePropagation && t.continuePropagation()
              },
              isPropagationStopped: () => n
            };
          e(r), !n || "function" == typeof t.isPropagationStopped && t.isPropagationStopped() || t.stopPropagation()
        }
      }
      var i = n(26530);
      const a = new Set(["shift", "alt", "control", "meta", "mod"]),
        s = ["Alt", "Control", "Meta", "Shift"];

      function l(e) {
        return s.filter(t => e.has(t))
      }

      function u(e) {
        let t = e.split("+").reduce((e, t) => {
          let n = t.toLowerCase();
          return a.has(n) ? "shift" === n ? e.shift = !0 : "alt" === n ? e.alt = !0 : "control" === n ? e.ctrl = !0 : "meta" === n ? e.meta = !0 : "mod" === n && (e.mod = !0) : e.key = t, e
        }, {
          shift: !1,
          alt: !1,
          ctrl: !1,
          meta: !1,
          mod: !1,
          key: ""
        });
        if ("" === t.key) throw new Error(`Invalid keyboard shortcut: "${e}". Must include exactly one non-modifier key (e.g. "a", "Enter", "ArrowDown"). Combine any of Shift, Alt, Ctrl, Meta, and Mod.`);
        return t
      }

      function c(e) {
        return e.toLowerCase()
      }
      const d = {
        space: " ",
        esc: "escape",
        del: "delete",
        ins: "insert",
        left: "arrowleft",
        right: "arrowright",
        up: "arrowup",
        down: "arrowdown",
        pageup: "pageup",
        pagedown: "pagedown"
      };

      function f(e) {
        let t = l(function(e) {
            let t = new Set;
            return e.alt && t.add("Alt"), e.shift && t.add("Shift"), e.ctrl && t.add("Control"), e.meta && t.add("Meta"), e.mod && t.add((0, i.cX)() ? "Meta" : "Control"), t
          }(e)),
          n = function(e) {
            let t = c(e),
              n = d[t];
            return null != n ? n : t
          }(e.key);
        return t.length > 0 ? `${t.join("+")}+${n}` : n
      }

      function p(e) {
        let t = new Map;
        for (let [n, r] of Object.entries(e)) {
          let e = u(n);
          t.set(f(e), r)
        }
        return e => {
          let n = function(e) {
              let t = l(function(e) {
                  let t = new Set;
                  return e.altKey && t.add("Alt"), e.ctrlKey && t.add("Control"), e.metaKey && t.add("Meta"), e.shiftKey && t.add("Shift"), t
                }(e)),
                n = c(e.key);
              return (t.length > 0 ? `${t.join("+")}+` : "") + n
            }(e),
            r = t.get(n),
            o = r?.(e);
          void 0 === o && void 0 !== r ? o = {
            shouldContinuePropagation: !1,
            shouldPreventDefault: !0
          } : "boolean" == typeof o && (o = {
            shouldContinuePropagation: !o,
            shouldPreventDefault: o
          }), o?.shouldPreventDefault && e.preventDefault(), r && !o?.shouldContinuePropagation || e.continuePropagation()
        }
      }
      var y = n(65911);

      function g(e) {
        let t, n, {
          shortcuts: i,
          allowRepeats: a = !1,
          allowComposing: s = !1
        } = e;
        if (i) {
          let l = p(i),
            u = o(e => {
              (0, y.sD)(e.currentTarget, (0, y.wt)(e)) ? e.nativeEvent?.repeat && !a || e.nativeEvent?.isComposing && !s ? e.continuePropagation() : l(e): e.continuePropagation()
            }),
            c = o(e => {
              (0, y.sD)(e.currentTarget, (0, y.wt)(e)) ? (e.nativeEvent?.repeat && !a || e.nativeEvent, e.continuePropagation()) : e.continuePropagation()
            });
          t = e.onKeyDown ? (0, r.c)(e.onKeyDown, u) : u, n = e.onKeyUp ? (0, r.c)(e.onKeyUp, c) : c
        } else t = o(e.onKeyDown), n = o(e.onKeyUp);
        return {
          keyboardProps: e.isDisabled ? {} : {
            onKeyDown: t,
            onKeyUp: n
          }
        }
      }
    },
    63368(e, t, n) {
      n.d(t, {
        d: () => M
      });
      var r = n(13238),
        o = n(28148),
        i = n(83540),
        a = n(26530),
        s = n(91217);
      let l = "default",
        u = "",
        c = new WeakMap;

      function d(e) {
        if ((0, a.un)() && (0, a.Tc)()) {
          if ("disabled" !== l) return;
          l = "restoring", setTimeout(() => {
            (0, s.v)(() => {
              if ("restoring" === l) {
                const t = (0, i.TW)(e);
                "none" === t.documentElement.style.webkitUserSelect && (t.documentElement.style.webkitUserSelect = u || ""), u = "", l = "default"
              }
            })
          }, 300)
        } else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && c.has(e)) {
          let t = c.get(e),
            n = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
          "none" === e.style[n] && (e.style[n] = t), "" === e.getAttribute("style") && e.removeAttribute("style"), c.delete(e)
        }
      }
      var f = n(35516),
        p = n(65911);

      function y(e) {
        let t = e?.defaultView;
        return t?.__webpack_nonce__ || globalThis.__webpack_nonce__ || void 0
      }
      let g = new WeakMap;
      var v = n(32036),
        m = n(96283),
        b = n(15815),
        h = n(93082);
      const w = h.createContext({
        register: () => {}
      });
      w.displayName = "PressResponderContext";
      var E = n(43353),
        T = n(92772),
        P = n(50804);
      n(84017);
      class k {
        #e;
        constructor(e, t, n, r) {
          this.#e = !0;
          let o = r?.target ?? n.currentTarget;
          const i = o?.getBoundingClientRect();
          let a, s, l = 0,
            u = null;
          null != n.clientX && null != n.clientY && (s = n.clientX, u = n.clientY), i && (null != s && null != u ? (a = s - i.left, l = u - i.top) : (a = i.width / 2, l = i.height / 2)), this.type = e, this.pointerType = t, this.target = n.currentTarget, this.shiftKey = n.shiftKey, this.metaKey = n.metaKey, this.ctrlKey = n.ctrlKey, this.altKey = n.altKey, this.x = a, this.y = l, this.key = n.key
        }
        continuePropagation() {
          this.#e = !1
        }
        get shouldStopPropagation() {
          return this.#e
        }
      }
      const C = Symbol("linkClicked"),
        S = "react-aria-pressable-style",
        L = "data-react-aria-pressable";

      function M(e) {
        let {
          onPress: t,
          onPressChange: n,
          onPressStart: s,
          onPressEnd: M,
          onPressUp: _,
          onClick: O,
          isDisabled: I,
          isPressed: N,
          preventFocusOnPress: F,
          shouldCancelOnPointerExit: R,
          allowTextSelectionOnPress: W,
          ref: H,
          ...U
        } = function(e) {
          let t = (0, h.useContext)(w);
          if (t) {
            let {
              register: n,
              ref: r,
              ...o
            } = t;
            e = (0, m.v)(o, e), n()
          }
          return (0, P.w)(t, e.ref), e
        }(e), [B, $] = (0, h.useState)(!1), j = (0, h.useRef)({
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
          addGlobalListener: X,
          removeAllGlobalListeners: V
        } = (0, T.A)(), q = (0, h.useCallback)((e, t) => {
          let r = j.current;
          if (I || r.didFirePressStart) return !1;
          let o = !0;
          if (r.isTriggeringEvent = !0, s) {
            let n = new k("pressstart", t, e);
            s(n), o = n.shouldStopPropagation
          }
          return n && n(!0), r.isTriggeringEvent = !1, r.didFirePressStart = !0, $(!0), o
        }, [I, s, n]), Y = (0, h.useCallback)((e, r, o = !0) => {
          let i = j.current;
          if (!i.didFirePressStart) return !1;
          i.didFirePressStart = !1, i.isTriggeringEvent = !0;
          let a = !0;
          if (M) {
            let t = new k("pressend", r, e);
            M(t), a = t.shouldStopPropagation
          }
          if (n && n(!1), $(!1), t && o && !I) {
            let n = new k("press", r, e);
            t(n), a &&= n.shouldStopPropagation
          }
          return i.isTriggeringEvent = !1, a
        }, [I, M, n, t]), z = (0, E.J)(Y), G = (0, h.useCallback)((e, t) => {
          let n = j.current;
          if (I) return !1;
          if (_) {
            n.isTriggeringEvent = !0;
            let r = new k("pressup", t, e);
            return _(r), n.isTriggeringEvent = !1, r.shouldStopPropagation
          }
          return !0
        }, [I, _]), J = (0, E.J)(G), Q = (0, h.useCallback)(e => {
          let t = j.current;
          if (t.isPressed && t.target) {
            t.didFirePressStart && null != t.pointerType && Y(A(t.target, e), t.pointerType, !1), t.isPressed = !1, t.isOverTarget = !1, t.activePointerId = null, t.pointerType = null, V(), W || d(t.target);
            for (let e of t.disposables) e();
            t.disposables = []
          }
        }, [W, V, Y]), Z = (0, E.J)(Q);
        (0, h.useEffect)(() => {
          I && j.current.isPressed && Z({
            currentTarget: j.current.target,
            shiftKey: !1,
            ctrlKey: !1,
            metaKey: !1,
            altKey: !1
          })
        }, [I]);
        let ee = (0, h.useCallback)(e => {
            R && Q(e)
          }, [R, Q]),
          te = (0, h.useCallback)(e => {
            I || O?.(e)
          }, [I, O]),
          ne = (0, h.useCallback)((e, t) => {
            if (!I && O) {
              let n = new MouseEvent("click", e);
              (0, o.o1)(n, t), O((0, o.eg)(n))
            }
          }, [I, O]),
          re = (0, h.useMemo)(() => {
            let e = j.current,
              t = {
                onKeyDown(t) {
                  if (K(t.nativeEvent, t.currentTarget) && (0, p.sD)(t.currentTarget, (0, p.wt)(t))) {
                    x((0, p.wt)(t), t.key) && t.preventDefault();
                    let o = !0;
                    e.isPressed || t.repeat || (e.target = t.currentTarget, e.isPressed = !0, e.pointerType = "keyboard", o = q(t, "keyboard"));
                    let s = t.currentTarget,
                      l = t => {
                        K(t, s) && !t.repeat && (0, p.sD)(s, (0, p.wt)(t)) && e.target && J(A(e.target, t), "keyboard")
                      };
                    X((0, i.TW)(t.currentTarget), "keyup", (0, r.c)(l, n), !0), o && t.stopPropagation(), t.metaKey && (0, a.cX)() && e.metaKeyEvents?.set(t.key, t.nativeEvent)
                  } else "Meta" === t.key && (e.metaKeyEvents = new Map)
                },
                onClick(t) {
                  if ((!t || (0, p.sD)(t.currentTarget, (0, p.wt)(t))) && t && 0 === t.button && !e.isTriggeringEvent && !b.Fe.isOpening) {
                    let n = !0;
                    if (I && t.preventDefault(), e.ignoreEmulatedMouseEvents || e.isPressed || "virtual" !== e.pointerType && !(0, v.Y)(t.nativeEvent)) {
                      if (e.isPressed && "keyboard" !== e.pointerType) {
                        let r = e.pointerType || t.nativeEvent.pointerType || "virtual",
                          o = J(A(t.currentTarget, t), r),
                          i = z(A(t.currentTarget, t), r, !0);
                        n = o && i, e.isOverTarget = !1, te(t), Z(t)
                      }
                    } else {
                      let e = q(t, "virtual"),
                        r = J(t, "virtual"),
                        o = z(t, "virtual");
                      te(t), n = e && r && o
                    }
                    e.ignoreEmulatedMouseEvents = !1, n && t.stopPropagation()
                  }
                }
              },
              n = t => {
                if (e.isPressed && e.target && K(t, e.target)) {
                  x((0, p.wt)(t), t.key) && t.preventDefault();
                  let n = (0, p.wt)(t),
                    r = (0, p.sD)(e.target, n);
                  z(A(e.target, t), "keyboard", r), r && ne(t, e.target), V(), "Enter" !== t.key && D(e.target) && (0, p.sD)(e.target, n) && !t[C] && (t[C] = !0, (0, b.Fe)(e.target, t, !1)), e.isPressed = !1, e.metaKeyEvents?.delete(t.key)
                } else if ("Meta" === t.key && e.metaKeyEvents?.size) {
                  let t = e.metaKeyEvents;
                  e.metaKeyEvents = void 0;
                  for (let n of t.values()) e.target?.dispatchEvent(new KeyboardEvent("keyup", n))
                }
              };
            if ("undefined" != typeof PointerEvent) {
              t.onPointerDown = t => {
                if (0 !== t.button || !(0, p.sD)(t.currentTarget, (0, p.wt)(t))) return;
                if ((0, v.P)(t.nativeEvent)) return void(e.pointerType = "virtual");
                e.pointerType = t.pointerType;
                let o = !0;
                if (!e.isPressed) {
                  e.isPressed = !0, e.isOverTarget = !0, e.activePointerId = t.pointerId, e.target = t.currentTarget, W || function(e) {
                    if ((0, a.un)() && (0, a.Tc)()) {
                      if ("default" === l) {
                        const t = (0, i.TW)(e);
                        u = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = "none"
                      }
                      l = "disabled"
                    } else if (e instanceof HTMLElement || e instanceof SVGElement) {
                      let t = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
                      c.set(e, e.style[t]), e.style[t] = "none"
                    }
                  }(e.target), o = q(t, e.pointerType);
                  let s = (0, p.wt)(t);
                  "releasePointerCapture" in s && ("hasPointerCapture" in s ? s.hasPointerCapture(t.pointerId) && s.releasePointerCapture(t.pointerId) : s.releasePointerCapture(t.pointerId)), X((0, i.TW)(t.currentTarget), "pointerup", n, !1), X((0, i.TW)(t.currentTarget), "pointercancel", r, !1)
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
                t.pointerId === e.activePointerId && e.target && !e.isOverTarget && null != e.pointerType && (e.isOverTarget = !0, q(A(e.target, t), e.pointerType))
              }, t.onPointerLeave = t => {
                t.pointerId === e.activePointerId && e.target && e.isOverTarget && null != e.pointerType && (e.isOverTarget = !1, z(A(e.target, t), e.pointerType, !1), ee(t))
              };
              let n = t => {
                  if (t.pointerId === e.activePointerId && e.isPressed && 0 === t.button && e.target) {
                    if ((0, p.sD)(e.target, (0, p.wt)(t)) && null != e.pointerType) {
                      let n = !1,
                        r = setTimeout(() => {
                          e.isPressed && e.target instanceof HTMLElement && (n ? Z(t) : ((0, f.e)(e.target), e.target.click()))
                        }, 80);
                      X(t.currentTarget, "click", () => n = !0, !0), e.disposables.push(() => clearTimeout(r))
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
          }, [X, I, F, V, W, ee, q, te, ne]);
        return (0, h.useEffect)(() => {
          if (!H) return;
          const e = (0, i.TW)(H.current);
          if (!e || !e.head || e.getElementById(S)) return;
          const t = e.createElement("style");
          t.id = S;
          let n = function(e) {
            let t = e ?? ("undefined" != typeof document ? document : void 0);
            if (!t) return y(t);
            if (g.has(t)) return g.get(t);
            let n = t.querySelector('meta[property="csp-nonce"]'),
              r = n && n instanceof(0, i.mD)(n).HTMLMetaElement && (n.nonce || n.content) || y(t) || void 0;
            return void 0 !== r && g.set(t, r), r
          }(e);
          n && (t.nonce = n), t.textContent = `\n@layer {\n  [${L}] {\n    touch-action: pan-x pan-y pinch-zoom;\n  }\n}\n    `.trim(), e.head.prepend(t)
        }, [H]), (0, h.useEffect)(() => {
          let e = j.current;
          return () => {
            W || d(e.target ?? void 0);
            for (let t of e.disposables) t();
            e.disposables = []
          }
        }, [W]), {
          isPressed: N || B,
          pressProps: (0, m.v)(U, re, {
            [L]: !0
          })
        }
      }

      function D(e) {
        return "A" === e.tagName && e.hasAttribute("href")
      }

      function K(e, t) {
        const {
          key: n,
          code: r
        } = e, o = t, a = o.getAttribute("role");
        return !("Enter" !== n && " " !== n && "Spacebar" !== n && "Space" !== r || o instanceof(0, i.mD)(o).HTMLInputElement && !O(o, n) || o instanceof(0, i.mD)(o).HTMLTextAreaElement || o.isContentEditable || ("link" === a || !a && D(o)) && "Enter" !== n)
      }

      function A(e, t) {
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
        return (!(0, a.cX)() || "Enter" !== t) && (e instanceof HTMLInputElement ? ("Enter" !== t || "checkbox" !== e.type && "radio" !== e.type) && !O(e, t) : function(e) {
          return !(e instanceof HTMLInputElement || (e instanceof HTMLButtonElement ? "submit" === e.type || "reset" === e.type : D(e)))
        }(e))
      }
      const _ = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

      function O(e, t) {
        return "checkbox" === e.type || "radio" === e.type ? " " === t : _.has(e.type)
      }
    },
    28148(e, t, n) {
      n.d(t, {
        LE: () => p,
        eg: () => u,
        lR: () => f,
        o1: () => c,
        yB: () => d
      });
      var r = n(35516),
        o = n(65911),
        i = n(83540),
        a = n(27046),
        s = n(76721),
        l = n(93082);

      function u(e) {
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
        let t = (0, l.useRef)({
          isFocused: !1,
          observer: null
        });
        return (0, s.N)(() => {
          const e = t.current;
          return () => {
            e.observer && (e.observer.disconnect(), e.observer = null)
          }
        }, []), (0, l.useCallback)(n => {
          let r = (0, o.wt)(n);
          if (r instanceof HTMLButtonElement || r instanceof HTMLInputElement || r instanceof HTMLTextAreaElement || r instanceof HTMLSelectElement) {
            t.current.isFocused = !0;
            let n = r,
              i = r => {
                if (t.current.isFocused = !1, n.disabled) {
                  let t = u(r);
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
        for (; e && !(0, a.t)(e, {
            skipVisibilityCheck: !0
          });) e = e.parentElement;
        let t = (0, i.mD)(e),
          n = t.document.activeElement;
        if (!n || n === e) return;
        f = !0;
        let s = !1,
          l = e => {
            ((0, o.wt)(e) === n || s) && e.stopImmediatePropagation()
          },
          u = t => {
            ((0, o.wt)(t) === n || s) && (t.stopImmediatePropagation(), e || s || (s = !0, (0, r.e)(n), p()))
          },
          c = t => {
            ((0, o.wt)(t) === e || s) && t.stopImmediatePropagation()
          },
          d = t => {
            ((0, o.wt)(t) === e || s) && (t.stopImmediatePropagation(), s || (s = !0, (0, r.e)(n), p()))
          };
        t.addEventListener("blur", l, !0), t.addEventListener("focusout", u, !0), t.addEventListener("focusin", d, !0), t.addEventListener("focus", c, !0);
        let p = () => {
            cancelAnimationFrame(y), t.removeEventListener("blur", l, !0), t.removeEventListener("focusout", u, !0), t.removeEventListener("focusin", d, !0), t.removeEventListener("focus", c, !0), f = !1, s = !1
          },
          y = requestAnimationFrame(p);
        return p
      }
    },
    22825(e, t, n) {
      n.d(t, {
        wR: () => f
      });
      var r = n(93082);
      const o = {
          prefix: String(Math.round(1e10 * Math.random())),
          current: 0
        },
        i = r.createContext(o),
        a = r.createContext(!1);
      Boolean("undefined" != typeof window && window.document && window.document.createElement);
      let s = new WeakMap;
      const l = "function" == typeof r.useId ? function(e) {
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

      function u() {
        return !1
      }

      function c() {
        return !0
      }

      function d(e) {
        return () => {}
      }

      function f() {
        return "function" == typeof r.useSyncExternalStore ? r.useSyncExternalStore(d, u, c) : (0, r.useContext)(a)
      }
      n.d(t, ["Cc", 0, l])
    },
    13238(e, t, n) {
      function r(...e) {
        return (...t) => {
          for (let n of e) "function" == typeof n && n(...t)
        }
      }
      n.d(t, {
        c: () => r
      })
    },
    83540(e, t, n) {
      n.d(t, {
        Ng: () => i
      });
      const r = e => {
        return "object" == typeof(t = e) && null != t && "window" in t && t.window === t ? e.document : function(e) {
          return o(e) && 9 === e.nodeType
        }(e) ? e : e?.ownerDocument ?? ("undefined" != typeof document ? document : void 0);
        var t
      };

      function o(e) {
        return null !== e && "object" == typeof e && "nodeType" in e && "number" == typeof e.nodeType
      }

      function i(e) {
        return o(e) && 11 === e.nodeType && "host" in e
      }
      n.d(t, ["TW", 0, r, "mD", 0, e => {
        let t = r(e);
        return t?.defaultView ?? ("undefined" != typeof window ? window : void 0)
      }])
    },
    70995(e, t, n) {
      n.d(t, {
        $: () => u
      });
      const r = new Set(["id"]),
        o = new Set(["aria-label", "aria-labelledby", "aria-describedby", "aria-details"]),
        i = new Set(["href", "hrefLang", "target", "rel", "download", "ping", "referrerPolicy"]),
        a = new Set(["dir", "lang", "hidden", "inert", "translate"]),
        s = new Set(["onClick", "onAuxClick", "onContextMenu", "onDoubleClick", "onMouseDown", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseOut", "onMouseOver", "onMouseUp", "onTouchCancel", "onTouchEnd", "onTouchMove", "onTouchStart", "onPointerDown", "onPointerMove", "onPointerUp", "onPointerCancel", "onPointerEnter", "onPointerLeave", "onPointerOver", "onPointerOut", "onGotPointerCapture", "onLostPointerCapture", "onScroll", "onWheel", "onAnimationStart", "onAnimationEnd", "onAnimationIteration", "onTransitionCancel", "onTransitionEnd", "onTransitionRun", "onTransitionStart"]),
        l = /^(data-.*)$/;

      function u(e, t = {}) {
        let {
          labelable: n,
          isLink: u,
          global: c,
          events: d = c,
          propNames: f
        } = t, p = {};
        for (const t in e) Object.prototype.hasOwnProperty.call(e, t) && (r.has(t) || n && o.has(t) || u && i.has(t) || c && a.has(t) || d && (s.has(t) || t.endsWith("Capture") && s.has(t.slice(0, -7))) || f?.has(t) || l.test(t)) && (p[t] = e[t]);
        return p
      }
    },
    35516(e, t, n) {
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
    27046(e, t, n) {
      n.d(t, {
        t: () => u,
        A: () => c
      });
      var r = n(83540);
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
            } = (0, r.mD)(e);
            let {
              display: n,
              visibility: o
            } = t(e);
            i = "none" !== n && "hidden" !== o && "collapse" !== o
          }
          return i
        }(e) && function(e, t) {
          return !e.hasAttribute("hidden") && !e.hasAttribute("data-react-aria-prevent-focus") && ("DETAILS" !== e.nodeName || !t || "SUMMARY" === t.nodeName || e.hasAttribute("open"))
        }(e, t) && (!e.parentElement || i(e.parentElement, e))
      }
      const a = ["input:not([disabled]):not([type=hidden])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "a[href]", "area[href]", "summary", "iframe", "object", "embed", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable^="false"])', "permission"],
        s = a.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
      a.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
      const l = a.join(':not([hidden]):not([tabindex="-1"]),');

      function u(e, t) {
        return e.matches(s) && !d(e) && (t?.skipVisibilityCheck || i(e))
      }

      function c(e) {
        return e.matches(l) && i(e) && !d(e)
      }

      function d(e) {
        let t = e;
        for (; null != t;) {
          if (t instanceof(0, r.mD)(t).HTMLElement && t.inert) return !0;
          t = t.parentElement
        }
        return !1
      }
    },
    32036(e, t, n) {
      n.d(t, {
        P: () => i,
        Y: () => o
      });
      var r = n(26530);

      function o(e) {
        return !("" !== e.pointerType || !e.isTrusted) || ((0, r.m0)() && e.pointerType ? "click" === e.type && 1 === e.buttons : 0 === e.detail && !e.pointerType)
      }

      function i(e) {
        return !(0, r.m0)() && 0 === e.width && 0 === e.height || (0, r.m0)() && 1 === e.width && 1 === e.height && 0 === e.pressure && 0 === e.detail && "mouse" === e.pointerType
      }
    },
    96283(e, t, n) {
      n.d(t, {
        v: () => l
      });
      var r = n(13238),
        o = n(69089);

      function i(...e) {
        return 1 === e.length && e[0] ? e[0] : t => {
          let n = !1;
          const r = e.map(e => {
            const r = a(e, t);
            return n ||= "function" == typeof r, r
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
      var s = n(81270);

      function l(...e) {
        let t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          let a = e[n];
          for (let e in a) {
            let n = t[e],
              l = a[e];
            "function" == typeof n && "function" == typeof l && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = (0, r.c)(n, l) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof l ? "id" === e && n && l ? t.id = (0, o.Tw)(n, l) : "ref" === e && n && l ? t.ref = i(n, l) : t[e] = void 0 !== l ? l : n : t[e] = (0, s.default)(n, l)
          }
        }
        return t
      }
    },
    15815(e, t, n) {
      n.d(t, {
        Fe: () => l,
        PJ: () => c,
        _h: () => u,
        rd: () => s
      });
      var r = n(35516),
        o = n(26530),
        i = n(93082);
      const a = (0, i.createContext)({
        isNative: !0,
        open: function(e, t) {
          ! function(e, t) {
            if (e instanceof HTMLAnchorElement) t(e);
            else if (e.hasAttribute("data-href")) {
              let n = document.createElement("a");
              n.href = e.getAttribute("data-href"), e.hasAttribute("data-target") && (n.target = e.getAttribute("data-target")), e.hasAttribute("data-rel") && (n.rel = e.getAttribute("data-rel")), e.hasAttribute("data-download") && (n.download = e.getAttribute("data-download")), e.hasAttribute("data-ping") && (n.ping = e.getAttribute("data-ping")), e.hasAttribute("data-referrer-policy") && (n.referrerPolicy = e.getAttribute("data-referrer-policy")), e.appendChild(n), t(n), e.removeChild(n)
            }
          }(e, e => l(e, t))
        },
        useHref: e => e
      });

      function s() {
        return (0, i.useContext)(a)
      }

      function l(e, t, n = !0) {
        let {
          metaKey: i,
          ctrlKey: a,
          altKey: s,
          shiftKey: u
        } = t;
        !(0, o.Tc)() && (0, o.gm)() && window.event?.type?.startsWith("key") && "_blank" === e.target && ((0, o.cX)() ? i = !0 : a = !0);
        let c = (0, o.Tc)() && (0, o.cX)() && !(0, o.bh)() ? new KeyboardEvent("keydown", {
          keyIdentifier: "Enter",
          metaKey: i,
          ctrlKey: a,
          altKey: s,
          shiftKey: u
        }) : new MouseEvent("click", {
          metaKey: i,
          ctrlKey: a,
          altKey: s,
          shiftKey: u,
          detail: 1,
          bubbles: !0,
          cancelable: !0
        });
        l.isOpening = n, (0, r.e)(e), e.dispatchEvent(c), l.isOpening = !1
      }

      function u(e) {
        const t = s().useHref(e?.href ?? "");
        let n = {};
        if (e)
          for (let r of ["href", "target", "rel", "download", "ping", "referrerPolicy"]) r in e && void 0 !== e[r] && (n[r] = "href" === r ? t : e[r]);
        return n
      }

      function c(e, t, n, r) {
        !t.isNative && e.currentTarget instanceof HTMLAnchorElement && e.currentTarget.href && !e.isDefaultPrevented() && function(e, t) {
          let n = e.getAttribute("target");
          return !(n && "_self" !== n || e.origin !== location.origin || e.hasAttribute("download") || t.metaKey || t.ctrlKey || t.altKey || t.shiftKey)
        }(e.currentTarget, e) && n && (e.preventDefault(), t.open(e.currentTarget, e, n, r))
      }
      l.isOpening = !1
    },
    26530(e, t, n) {
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
      const a = i(function() {
          return o(/^Mac/i)
        }),
        s = i(function() {
          return o(/^iPhone/i)
        }),
        l = i(function() {
          return o(/^iPad/i) || a() && navigator.maxTouchPoints > 1
        }),
        u = i(function() {
          return s() || l()
        }),
        c = (i(function() {
          return a() || u()
        }), i(function() {
          return r(/AppleWebKit/i) && (u() || !d())
        })),
        d = (i(function() {
          return c() && !d() && !p()
        }), i(function() {
          return r(/Chrome|CriOS|CrMo/i)
        })),
        f = i(function() {
          return r(/Android/i)
        }),
        p = i(function() {
          return r(/(Firefox|FxiOS)/i)
        });
      n.d(t, ["Tc", 0, c, "bh", 0, l, "cX", 0, a, "gm", 0, p, "m0", 0, f, "un", 0, u])
    },
    91217(e, t, n) {
      n.d(t, {
        v: () => s
      });
      var r = n(65911);
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
    65911(e, t, n) {
      n.d(t, {
        sD: () => i,
        wt: () => a
      });
      var r = n(83540),
        o = n(65045);

      function i(e, t) {
        if (!(0, o.Nf)()) return !(!t || !e) && e.contains(t);
        if (!e || !t) return !1;
        let n = t;
        for (; null !== n;) {
          if (n === e) return !0;
          n = "function" != typeof n.assignedElements && n.assignedSlot?.parentNode ? n.assignedSlot.parentNode : (0, r.Ng)(n) ? n.host : n.parentNode
        }
        return !1
      }

      function a(e) {
        if ((0, o.Nf)() && e.target instanceof Element && e.target.shadowRoot) {
          if ("composedPath" in e) return e.composedPath()[0] ?? null;
          if ("composedPath" in e.nativeEvent) return e.nativeEvent.composedPath()[0] ?? null
        }
        return e.target
      }
      n.d(t, ["bq", 0, (e = document) => {
        if (!(0, o.Nf)()) return e.activeElement;
        let t = e.activeElement;
        for (; t && "shadowRoot" in t && t.shadowRoot?.activeElement;) t = t.shadowRoot.activeElement;
        return t
      }])
    },
    43353(e, t, n) {
      n.d(t, {
        J: () => a
      });
      var r = n(76721),
        o = n(93082);
      const i = o.useInsertionEffect ?? r.N;

      function a(e) {
        const t = (0, o.useRef)(null);
        return i(() => {
          t.current = e
        }, [e]), (0, o.useCallback)((...e) => {
          const n = t.current;
          return n?.(...e)
        }, [])
      }
    },
    92772(e, t, n) {
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
    69089(e, t, n) {
      n.d(t, {
        Tw: () => d,
        Bi: () => c,
        X1: () => f
      });
      var r = n(76721),
        o = n(22825),
        i = n(93082);
      let a, s = Boolean("undefined" != typeof window && window.document && window.document.createElement),
        l = new Map;
      "undefined" != typeof FinalizationRegistry && (a = new FinalizationRegistry(e => {
        l.delete(e)
      }));
      let u = new WeakMap;

      function c(e) {
        let [t, n] = (0, i.useState)(e), c = (0, i.useRef)(null), d = (0, o.Cc)(t), f = (0, i.useRef)(null), p = u.get(f);
        if (a && p !== d && (null != p && a.unregister(f), a.register(f, d, f), u.set(f, d)), s) {
          const e = l.get(d);
          e && !e.includes(c) ? e.push(c) : l.set(d, [c])
        }
        return (0, r.N)(() => {
          let e = d;
          return () => {
            a && (a.unregister(f), u.delete(f)), l.delete(e)
          }
        }, [d]), (0, i.useEffect)(() => {
          let e = c.current;
          return e && n(e), () => {
            e && (c.current = null)
          }
        }), d
      }

      function d(e, t) {
        if (e === t) return e;
        let n = l.get(e);
        if (n) return n.forEach(e => e.current = t), t;
        let r = l.get(t);
        return r ? (r.forEach(t => t.current = e), e) : t
      }

      function f(e = []) {
        let t = c(),
          [n, o] = function(e) {
            let [t, n] = (0, i.useState)(e), o = (0, i.useRef)(t), a = (0, i.useRef)(null), s = (0, i.useRef)(() => {
              if (!a.current) return;
              let e = a.current.next();
              e.done ? a.current = null : o.current === e.value ? s.current() : n(e.value)
            });
            (0, r.N)(() => {
              o.current = t, a.current && s.current()
            });
            let l = (0, i.useCallback)(e => {
              a.current = e(o.current), s.current()
            }, [s]);
            return [t, l]
          }(t),
          a = (0, i.useCallback)(() => {
            o(function*() {
              yield t, yield document.getElementById(t) ? t : void 0
            })
          }, [t, o]);
        return (0, r.N)(a, [t, a, ...e]), n
      }
    },
    76721(e, t, n) {
      var r = n(93082);
      const o = "undefined" != typeof document ? r.useLayoutEffect : () => {};
      n.d(t, ["N", 0, o])
    },
    50804(e, t, n) {
      n.d(t, {
        w: () => o
      });
      var r = n(76721);

      function o(e, t) {
        (0, r.N)(() => {
          if (e && e.ref && t) return e.ref.current = t.current, () => {
            e.ref && (e.ref.current = null)
          }
        })
      }
    },
    65045(e, t, n) {
      n.d(t, {
        Nf: () => r
      });

      function r() {
        return false
      }
    }
  }
]);