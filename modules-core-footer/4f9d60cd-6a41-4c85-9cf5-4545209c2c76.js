try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "4f9d60cd-6a41-4c85-9cf5-4545209c2c76", e._sentryDebugIdIdentifier = "sentry-dbid-4f9d60cd-6a41-4c85-9cf5-4545209c2c76")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-footer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_footer = self.webpackChunk_rockstargames_modules_core_footer || []).push([
  [8710], {
    93400() {},
    32951(e, t, n) {
      n.d(t, {
        s: () => s
      });
      var r = n(42069),
        o = n(37013),
        i = n(38140),
        a = n(13258);

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
          href: b,
          target: m,
          rel: E,
          type: h = "button"
        } = e;
        n = "button" === s ? {
          type: h,
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
          href: "a" !== s || l ? void 0 : b,
          target: "a" === s ? m : void 0,
          type: "input" === s ? h : void 0,
          disabled: "input" === s ? l : void 0,
          "aria-disabled": l && "input" !== s ? l : void 0,
          rel: "a" === s ? E : void 0
        };
        let {
          pressProps: w,
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
        let k = (0, o.v)(P, w, (0, r.$)(e, {
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
    99386(e, t, n) {
      n.d(t, {
        Cl: () => k,
        ME: () => P
      });
      var r = n(14961),
        o = n(28562),
        i = n(14142),
        a = n(89896),
        s = n(74402),
        l = n(2577);
      n(4637);
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

      function b(e) {
        u = "pointer", c = "pointerType" in e ? e.pointerType : "mouse", "mousedown" !== e.type && "pointerdown" !== e.type || (p = !0, g("pointer", e))
      }

      function m(e) {
        !l.Fe.isOpening && (0, s.Y)(e) && (p = !0, u = "virtual", c = "virtual")
      }

      function E(e) {
        let t = (0, o.mD)((0, r.wt)(e)),
          n = (0, o.TW)((0, r.wt)(e));
        (0, r.wt)(e) !== t && (0, r.wt)(e) !== n && !i.lR && e.isTrusted && (p || y || (u = "virtual", c = "virtual", g("virtual", e)), p = !1, y = !1)
      }

      function h() {
        i.lR || (p = !1, y = !0)
      }

      function w(e) {
        if ("undefined" == typeof window || "undefined" == typeof document) return;
        const t = (0, o.mD)(e),
          n = (0, o.TW)(e);
        if (f.get(t)) return;
        let r = t.HTMLElement.prototype.focus;
        t.HTMLElement.prototype.focus = function() {
          p = !0, r.apply(this, arguments)
        }, n.addEventListener("keydown", v, !0), n.addEventListener("keyup", v, !0), n.addEventListener("click", m, !0), t.addEventListener("focus", E, !0), t.addEventListener("blur", h, !1), "undefined" != typeof PointerEvent && (n.addEventListener("pointerdown", b, !0), n.addEventListener("pointermove", b, !0), n.addEventListener("pointerup", b, !0)), t.addEventListener("beforeunload", () => {
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
        t && r.removeEventListener("DOMContentLoaded", t), f.has(n) && (n.HTMLElement.prototype.focus = f.get(n).focus, r.removeEventListener("keydown", v, !0), r.removeEventListener("keyup", v, !0), r.removeEventListener("click", m, !0), n.removeEventListener("focus", E, !0), n.removeEventListener("blur", h, !1), "undefined" != typeof PointerEvent && (r.removeEventListener("pointerdown", b, !0), r.removeEventListener("pointermove", b, !0), r.removeEventListener("pointerup", b, !0)), f.delete(n))
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
        "loading" !== t.readyState ? w(e) : (n = () => {
          w(e)
        }, t.addEventListener("DOMContentLoaded", n))
      }(), new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"])
    },
    38140(e, t, n) {
      n.d(t, {
        Wc: () => y
      });
      var r = n(4978),
        o = n(14961),
        i = n(99386),
        a = n(28562),
        s = n(1519);
      var l = n(37013),
        u = n(14142),
        c = n(4637);

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
        } = function(e) {
          return {
            keyboardProps: e.isDisabled ? {} : {
              onKeyDown: d(e.onKeyDown),
              onKeyUp: d(e.onKeyUp)
            }
          }
        }(e), g = (0, l.v)(n, y), v = function(e) {
          let t = (0, c.useContext)(p) || {};
          (0, f.w)(t, e);
          let {
            ref: n,
            ...r
          } = t;
          return r
        }(t), b = e.isDisabled ? {} : v, m = (0, c.useRef)(e.autoFocus);
        (0, c.useEffect)(() => {
          m.current && t.current && function(e) {
            if (!e.isConnected) return;
            const t = (0, a.TW)(e);
            if ("virtual" === (0, i.ME)()) {
              let n = (0, o.bq)(t);
              (0, s.v)(() => {
                const i = (0, o.bq)(t);
                i !== n && i !== t.body || !e.isConnected || (0, r.e)(e)
              })
            } else(0, r.e)(e)
          }(t.current), m.current = !1
        }, [t]);
        let E = e.excludeFromTabOrder ? -1 : 0;
        return e.isDisabled && (E = void 0), {
          focusableProps: (0, l.v)({
            ...g,
            tabIndex: E
          }, b)
        }
      }
    },
    13258(e, t, n) {
      n.d(t, {
        d: () => M
      });
      var r = n(43524),
        o = n(14142),
        i = n(28562),
        a = n(89896),
        s = n(1519);
      let l = "default",
        u = "",
        c = new WeakMap;

      function d(e) {
        if ((0, a.un)()) {
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
      var f = n(4978),
        p = n(14961);

      function y(e) {
        let t = e?.defaultView;
        return t?.__webpack_nonce__ || globalThis.__webpack_nonce__ || void 0
      }
      let g = new WeakMap;
      var v = n(74402),
        b = n(37013),
        m = n(2577),
        E = n(4637);
      const h = E.createContext({
        register: () => {}
      });
      h.displayName = "PressResponderContext";
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
      const L = Symbol("linkClicked"),
        S = "react-aria-pressable-style",
        C = "data-react-aria-pressable";

      function M(e) {
        let {
          onPress: t,
          onPressChange: n,
          onPressStart: s,
          onPressEnd: M,
          onPressUp: x,
          onClick: N,
          isDisabled: O,
          isPressed: I,
          preventFocusOnPress: F,
          shouldCancelOnPointerExit: R,
          allowTextSelectionOnPress: H,
          ref: W,
          ...U
        } = function(e) {
          let t = (0, E.useContext)(h);
          if (t) {
            let {
              register: n,
              ref: r,
              ...o
            } = t;
            e = (0, b.v)(o, e), n()
          }
          return (0, P.w)(t, e.ref), e
        }(e), [B, V] = (0, E.useState)(!1), q = (0, E.useRef)({
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
          addGlobalListener: G,
          removeAllGlobalListeners: X
        } = (0, T.A)(), Y = (0, E.useCallback)((e, t) => {
          let r = q.current;
          if (O || r.didFirePressStart) return !1;
          let o = !0;
          if (r.isTriggeringEvent = !0, s) {
            let n = new k("pressstart", t, e);
            s(n), o = n.shouldStopPropagation
          }
          return n && n(!0), r.isTriggeringEvent = !1, r.didFirePressStart = !0, V(!0), o
        }, [O, s, n]), $ = (0, E.useCallback)((e, r, o = !0) => {
          let i = q.current;
          if (!i.didFirePressStart) return !1;
          i.didFirePressStart = !1, i.isTriggeringEvent = !0;
          let a = !0;
          if (M) {
            let t = new k("pressend", r, e);
            M(t), a = t.shouldStopPropagation
          }
          if (n && n(!1), V(!1), t && o && !O) {
            let n = new k("press", r, e);
            t(n), a &&= n.shouldStopPropagation
          }
          return i.isTriggeringEvent = !1, a
        }, [O, M, n, t]), z = (0, w.J)($), j = (0, E.useCallback)((e, t) => {
          let n = q.current;
          if (O) return !1;
          if (x) {
            n.isTriggeringEvent = !0;
            let r = new k("pressup", t, e);
            return x(r), n.isTriggeringEvent = !1, r.shouldStopPropagation
          }
          return !0
        }, [O, x]), J = (0, w.J)(j), Q = (0, E.useCallback)(e => {
          let t = q.current;
          if (t.isPressed && t.target) {
            t.didFirePressStart && null != t.pointerType && $(K(t.target, e), t.pointerType, !1), t.isPressed = !1, t.isOverTarget = !1, t.activePointerId = null, t.pointerType = null, X(), H || d(t.target);
            for (let e of t.disposables) e();
            t.disposables = []
          }
        }, [H, X, $]), Z = (0, w.J)(Q), ee = (0, E.useCallback)(e => {
          R && Q(e)
        }, [R, Q]), te = (0, E.useCallback)(e => {
          O || N?.(e)
        }, [O, N]), ne = (0, E.useCallback)((e, t) => {
          if (!O && N) {
            let n = new MouseEvent("click", e);
            (0, o.o1)(n, t), N((0, o.eg)(n))
          }
        }, [O, N]), re = (0, E.useMemo)(() => {
          let e = q.current,
            t = {
              onKeyDown(t) {
                if (A(t.nativeEvent, t.currentTarget) && (0, p.sD)(t.currentTarget, (0, p.wt)(t))) {
                  _((0, p.wt)(t), t.key) && t.preventDefault();
                  let o = !0;
                  e.isPressed || t.repeat || (e.target = t.currentTarget, e.isPressed = !0, e.pointerType = "keyboard", o = Y(t, "keyboard"));
                  let s = t.currentTarget,
                    l = t => {
                      A(t, s) && !t.repeat && (0, p.sD)(s, (0, p.wt)(t)) && e.target && J(K(e.target, t), "keyboard")
                    };
                  G((0, i.TW)(t.currentTarget), "keyup", (0, r.c)(l, n), !0), o && t.stopPropagation(), t.metaKey && (0, a.cX)() && e.metaKeyEvents?.set(t.key, t.nativeEvent)
                } else "Meta" === t.key && (e.metaKeyEvents = new Map)
              },
              onClick(t) {
                if ((!t || (0, p.sD)(t.currentTarget, (0, p.wt)(t))) && t && 0 === t.button && !e.isTriggeringEvent && !m.Fe.isOpening) {
                  let n = !0;
                  if (O && t.preventDefault(), e.ignoreEmulatedMouseEvents || e.isPressed || "virtual" !== e.pointerType && !(0, v.Y)(t.nativeEvent)) {
                    if (e.isPressed && "keyboard" !== e.pointerType) {
                      let r = e.pointerType || t.nativeEvent.pointerType || "virtual",
                        o = J(K(t.currentTarget, t), r),
                        i = z(K(t.currentTarget, t), r, !0);
                      n = o && i, e.isOverTarget = !1, te(t), Z(t)
                    }
                  } else {
                    let e = Y(t, "virtual"),
                      r = J(t, "virtual"),
                      o = z(t, "virtual");
                    te(t), n = e && r && o
                  }
                  e.ignoreEmulatedMouseEvents = !1, n && t.stopPropagation()
                }
              }
            },
            n = t => {
              if (e.isPressed && e.target && A(t, e.target)) {
                _((0, p.wt)(t), t.key) && t.preventDefault();
                let n = (0, p.wt)(t),
                  r = (0, p.sD)(e.target, n);
                z(K(e.target, t), "keyboard", r), r && ne(t, e.target), X(), "Enter" !== t.key && D(e.target) && (0, p.sD)(e.target, n) && !t[L] && (t[L] = !0, (0, m.Fe)(e.target, t, !1)), e.isPressed = !1, e.metaKeyEvents?.delete(t.key)
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
                e.isPressed = !0, e.isOverTarget = !0, e.activePointerId = t.pointerId, e.target = t.currentTarget, H || function(e) {
                  if ((0, a.un)()) {
                    if ("default" === l) {
                      const t = (0, i.TW)(e);
                      u = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = "none"
                    }
                    l = "disabled"
                  } else if (e instanceof HTMLElement || e instanceof SVGElement) {
                    let t = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
                    c.set(e, e.style[t]), e.style[t] = "none"
                  }
                }(e.target), o = Y(t, e.pointerType);
                let s = (0, p.wt)(t);
                "releasePointerCapture" in s && ("hasPointerCapture" in s ? s.hasPointerCapture(t.pointerId) && s.releasePointerCapture(t.pointerId) : s.releasePointerCapture(t.pointerId)), G((0, i.TW)(t.currentTarget), "pointerup", n, !1), G((0, i.TW)(t.currentTarget), "pointercancel", r, !1)
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
              t.pointerId === e.activePointerId && e.target && !e.isOverTarget && null != e.pointerType && (e.isOverTarget = !0, Y(K(e.target, t), e.pointerType))
            }, t.onPointerLeave = t => {
              t.pointerId === e.activePointerId && e.target && e.isOverTarget && null != e.pointerType && (e.isOverTarget = !1, z(K(e.target, t), e.pointerType, !1), ee(t))
            };
            let n = t => {
                if (t.pointerId === e.activePointerId && e.isPressed && 0 === t.button && e.target) {
                  if ((0, p.sD)(e.target, (0, p.wt)(t)) && null != e.pointerType) {
                    let n = !1,
                      r = setTimeout(() => {
                        e.isPressed && e.target instanceof HTMLElement && (n ? Z(t) : ((0, f.e)(e.target), e.target.click()))
                      }, 80);
                    G(t.currentTarget, "click", () => n = !0, !0), e.disposables.push(() => clearTimeout(r))
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
        }, [G, O, F, X, H, ee, Y, te, ne]);
        return (0, E.useEffect)(() => {
          if (!W) return;
          const e = (0, i.TW)(W.current);
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
          n && (t.nonce = n), t.textContent = `\n@layer {\n  [${C}] {\n    touch-action: pan-x pan-y pinch-zoom;\n  }\n}\n    `.trim(), e.head.prepend(t)
        }, [W]), (0, E.useEffect)(() => {
          let e = q.current;
          return () => {
            H || d(e.target ?? void 0);
            for (let t of e.disposables) t();
            e.disposables = []
          }
        }, [H]), {
          isPressed: I || B,
          pressProps: (0, b.v)(U, re, {
            [C]: !0
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
        } = e, o = t, a = o.getAttribute("role");
        return !("Enter" !== n && " " !== n && "Spacebar" !== n && "Space" !== r || o instanceof(0, i.mD)(o).HTMLInputElement && !N(o, n) || o instanceof(0, i.mD)(o).HTMLTextAreaElement || o.isContentEditable || ("link" === a || !a && D(o)) && "Enter" !== n)
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

      function _(e, t) {
        return e instanceof HTMLInputElement ? !N(e, t) : function(e) {
          return !(e instanceof HTMLInputElement || (e instanceof HTMLButtonElement ? "submit" === e.type || "reset" === e.type : D(e)))
        }(e)
      }
      const x = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

      function N(e, t) {
        return "checkbox" === e.type || "radio" === e.type ? " " === t : x.has(e.type)
      }
    },
    14142(e, t, n) {
      n.d(t, {
        LE: () => p,
        eg: () => u,
        lR: () => f,
        o1: () => c,
        yB: () => d
      });
      var r = n(4978),
        o = n(14961),
        i = n(28562),
        a = n(1360),
        s = n(58907),
        l = n(4637);

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
    6859(e, t, n) {
      n.d(t, {
        Cc: () => l,
        wR: () => f
      });
      var r = n(4637);
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
    },
    43524(e, t, n) {
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
    4978(e, t, n) {
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
      n.d(t, {
        t: () => u,
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
          if (t instanceof t.ownerDocument.defaultView.HTMLElement && t.inert) return !0;
          t = t.parentElement
        }
        return !1
      }
    },
    74402(e, t, n) {
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
      n.d(t, {
        v: () => l
      });
      var r = n(43524),
        o = n(13087);

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
      var s = n(4921);

      function l(...e) {
        let t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          let a = e[n];
          for (let e in a) {
            let n = t[e],
              l = a[e];
            "function" == typeof n && "function" == typeof l && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = (0, r.c)(n, l) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof l ? "id" === e && n && l ? t.id = (0, o.Tw)(n, l) : "ref" === e && n && l ? t.ref = i(n, l) : t[e] = void 0 !== l ? l : n : t[e] = (0, s.A)(n, l)
          }
        }
        return t
      }
    },
    2577(e, t, n) {
      n.d(t, {
        Fe: () => l,
        PJ: () => c,
        _h: () => u,
        rd: () => s
      });
      var r = n(4978),
        o = n(89896),
        i = n(4637);
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
        (0, o.gm)() && window.event?.type?.startsWith("key") && "_blank" === e.target && ((0, o.cX)() ? i = !0 : a = !0);
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
      l.isOpening = !1
    },
    89896(e, t, n) {
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
        bh: () => l,
        cX: () => a,
        gm: () => p,
        m0: () => f,
        un: () => u
      });
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
      n.d(t, {
        v: () => s
      });
      var r = n(14961);
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
    14961(e, t, n) {
      n.d(t, {
        bq: () => a,
        sD: () => i,
        wt: () => s
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
      const a = (e = document) => {
        if (!(0, o.Nf)()) return e.activeElement;
        let t = e.activeElement;
        for (; t && "shadowRoot" in t && t.shadowRoot?.activeElement;) t = t.shadowRoot.activeElement;
        return t
      };

      function s(e) {
        if ((0, o.Nf)() && e.target instanceof Element && e.target.shadowRoot) {
          if ("composedPath" in e) return e.composedPath()[0] ?? null;
          if ("composedPath" in e.nativeEvent) return e.nativeEvent.composedPath()[0] ?? null
        }
        return e.target
      }
    },
    96187(e, t, n) {
      n.d(t, {
        J: () => a
      });
      var r = n(58907),
        o = n(4637);
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
    87478(e, t, n) {
      n.d(t, {
        A: () => o
      });
      var r = n(4637);

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
      n.d(t, {
        Tw: () => c,
        Bi: () => u,
        X1: () => d
      });
      var r = n(58907),
        o = n(6859),
        i = n(4637);
      let a, s = Boolean("undefined" != typeof window && window.document && window.document.createElement),
        l = new Map;

      function u(e) {
        let [t, n] = (0, i.useState)(e), u = (0, i.useRef)(null), c = (0, o.Cc)(t), d = (0, i.useRef)(null);
        if (a && a.register(d, c), s) {
          const e = l.get(c);
          e && !e.includes(u) ? e.push(u) : l.set(c, [u])
        }
        return (0, r.N)(() => {
          let e = c;
          return () => {
            a && a.unregister(d), l.delete(e)
          }
        }, [c]), (0, i.useEffect)(() => {
          let e = u.current;
          return e && n(e), () => {
            e && (u.current = null)
          }
        }), c
      }

      function c(e, t) {
        if (e === t) return e;
        let n = l.get(e);
        if (n) return n.forEach(e => e.current = t), t;
        let r = l.get(t);
        return r ? (r.forEach(t => t.current = e), e) : t
      }

      function d(e = []) {
        let t = u(),
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
      "undefined" != typeof FinalizationRegistry && (a = new FinalizationRegistry(e => {
        l.delete(e)
      }))
    },
    58907(e, t, n) {
      n.d(t, {
        N: () => o
      });
      var r = n(4637);
      const o = "undefined" != typeof document ? r.useLayoutEffect : () => {}
    },
    76606(e, t, n) {
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
      n.d(t, {
        Nf: () => r
      });

      function r() {
        return false
      }
    }
  }
]);