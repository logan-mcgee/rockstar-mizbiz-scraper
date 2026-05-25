try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "7ca29b64-78f4-4705-96ef-76c0bd2f2079", e._sentryDebugIdIdentifier = "sentry-dbid-7ca29b64-78f4-4705-96ef-76c0bd2f2079")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [359], {
    359(e, t, n) {
      n.d(t, {
        NP: () => v,
        Ym: () => u,
        zQ: () => l
      });
      var r = n(39793),
        o = (n(77278), n(23743)),
        a = n(93082);
      const i = (0, a.createContext)({
          colorScheme: "dark",
          defaultColorScheme: "dark",
          platformScale: "mobile",
          defaultPlatformScale: "mobile",
          locale: "en-US"
        }),
        s = () => (0, a.useContext)(i),
        l = () => {
          const {
            platformScale: e
          } = s();
          return e
        },
        u = () => {
          const {
            locale: e
          } = s();
          return e
        };
      var c = n(53374),
        d = n(99878);
      const f = e => "dark" === e ? d.xW.dark : d.xW.light;
      var p = n(35959);
      const m = () => p.X3 ? null : document.body,
        v = (0, a.forwardRef)(({
          children: e,
          className: t,
          container: n = m(),
          asChild: s,
          colorScheme: l,
          defaultColorScheme: u,
          defaultPlatformScale: v,
          platformScale: y,
          onPlatformScaleChange: g,
          locale: b = "en-US"
        }, h) => {
          const E = (0, a.useRef)(null),
            w = (0, c.UP)(E, h),
            T = (0, a.useRef)(n),
            {
              ratio: P,
              scale: k
            } = function(e) {
              const [t, n] = (0, a.useState)(e.platformScale || e.defaultPlatformScale), r = (0, a.useCallback)(t => {
                n(t), e.onPlatformScaleChange?.(t)
              }, [e.onPlatformScaleChange]), o = (0, a.useRef)([]), i = () => {
                if (!p.X3) {
                  for (const {
                      handler: e,
                      matchMedia: t
                    }
                    of o.current) t.removeEventListener("change", e);
                  o.current = []
                }
              };
              return (0, a.useEffect)(() => (e.platformScale ? r(e.platformScale) : (() => {
                if (!p.X3) {
                  i();
                  for (const e in d.wj) {
                    const t = window.matchMedia(d.wj[e]),
                      n = t => {
                        t.matches && r(e)
                      };
                    t.addEventListener("change", n), t.matches && r(e), o.current.push({
                      handler: n,
                      matchMedia: t
                    })
                  }
                }
              })(), i), [e.platformScale, r]), {
                scale: t,
                ratio: d.nz[t]
              }
            }({
              onPlatformScaleChange: g,
              defaultPlatformScale: v,
              platformScale: y
            }),
            {
              appearanceClass: S,
              otherAppearanceClasses: L,
              providerColor: C
            } = function({
              colorScheme: e,
              defaultColorScheme: t = "dark"
            }) {
              const n = (0, c.Ub)("(prefers-color-scheme: light)"),
                r = (0, c.Ub)("(prefers-color-scheme: dark)"),
                o = "system" !== e && e || n && "light" || r && "dark" || t,
                i = (0, a.useMemo)(() => f(o), [o]),
                s = (0, a.useMemo)(() => (e => {
                  const t = f(e);
                  return [d.xW.light, d.xW.dark].filter(e => e !== t)
                })(o), [o]);
              return {
                appearanceClass: i,
                otherAppearanceClasses: s,
                providerColor: o
              }
            }({
              colorScheme: l,
              defaultColorScheme: u
            });
          return (({
            container: e,
            currentScale: t,
            appearanceClass: n,
            otherAppearanceClasses: r,
            locale: o,
            className: i
          }) => {
            const s = (0, c.ZC)(i),
              l = (0, c.ZC)(e.current);
            (0, a.useEffect)(() => {
              e.current?.classList.contains(d.X6) || e.current?.classList.add(d.X6), e.current?.classList.contains(d.yU) || e.current?.classList.add(d.yU), e.current?.classList.contains(d.Np) || e.current?.classList.add(d.Np), e.current?.classList.add(n), e.current?.classList.remove(...r), s && i && e.current?.classList.contains(s) ? e.current?.classList.replace(s, i) : s && !i && e.current?.classList.contains(s) ? e.current?.classList.remove(s) : i && e.current?.classList.add(i)
            }, [n, i]), (0, a.useEffect)(() => {
              e.current?.setAttribute("lang", o)
            }, [o]), (0, a.useEffect)(() => (t && e.current?.style.setProperty(d.HZ, t.toString()), () => {
              e.current?.style.removeProperty(d.HZ)
            }), [t]), (0, a.useEffect)(() => {
              l?.classList.remove(d.X6), l?.classList.remove(d.yU), l?.classList.remove(n), l?.style.removeProperty(d.HZ), i && l?.classList.remove(i)
            }, [l])
          })({
            locale: b,
            className: t,
            appearanceClass: S,
            otherAppearanceClasses: L,
            currentScale: y ? P : -0,
            container: s ? E : T
          }), (0, r.jsx)(i.Provider, {
            value: {
              locale: b,
              defaultColorScheme: u,
              colorScheme: C,
              defaultPlatformScale: v,
              platformScale: k
            },
            children: s ? (0, r.jsx)(o.DX, {
              ref: w,
              children: e
            }) : e
          })
        })
    },
    99878(e, t, n) {
      n.d(t, {
        nz: () => r,
        wj: () => o,
        xW: () => a,
        Np: () => i,
        HZ: () => s,
        X6: () => l,
        yU: () => u
      });
      var r = {
          mobile: 1,
          tablet: 1.125,
          desktop: 1.25,
          desktopLarge: 1.375
        },
        o = {
          mobile: "screen and (max-width: 1024px)",
          tablet: "screen and (min-width: 1024px) and (max-width: 1920px)",
          desktop: "screen and (min-width: 1920px) and (max-width: 2560px)",
          desktopLarge: "screen and (min-width: 2560px)"
        },
        a = {
          dark: "foundry_nu8bkpd",
          light: "foundry_nu8bkpc",
          tokens: "foundry_nu8bkp4",
          typography: "foundry_nu8bkp3",
          grid: "foundry_nu8bkpb"
        },
        i = "foundry_nu8bkpb",
        s = "--foundry-platform-scales-ratio-65afb887",
        l = "foundry_nu8bkp4",
        u = "foundry_nu8bkp3"
    },
    53374(e, t, n) {
      n.d(t, {
        sL: () => w,
        UP: () => s,
        ic: () => c,
        iQ: () => f,
        Ub: () => a,
        jt: () => l,
        ZC: () => i,
        rl: () => p
      });
      var r = n(83503),
        o = n(93082);

      function a(e, {
        defaultValue: t = !1,
        initializeWithValue: n = !0
      } = {}) {
        const a = e => r.X || !window.matchMedia ? t : window.matchMedia(e).matches,
          [i, s] = (0, o.useState)(() => n ? a(e) : t);

        function l() {
          s(a(e))
        }
        return (0, o.useEffect)(() => {
          const t = window.matchMedia?.(e);
          return l(), t?.addListener ? t?.addListener(l) : t?.addEventListener("change", l), () => {
            t?.removeListener ? t?.removeListener(l) : t?.removeEventListener("change", l)
          }
        }, [e]), i
      }

      function i(e) {
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
      const l = () => a("(prefers-reduced-motion: reduce)", {
        defaultValue: !1,
        initializeWithValue: !0
      });

      function u(e) {
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
        const [r, a] = function({
          defaultProp: e,
          onChange: t
        }) {
          const n = (0, o.useState)(e),
            [r] = n,
            a = (0, o.useRef)(r),
            i = u(t);
          return (0, o.useEffect)(() => {
            a.current !== r && (i(r), a.current = r)
          }, [r, a, i]), n
        }({
          defaultProp: t,
          onChange: n
        }), i = void 0 !== e, s = i ? e : r, l = u(n), c = (0, o.useCallback)(t => {
          if (i) {
            const n = "function" == typeof t ? t(e) : t;
            n !== e && l(n)
          } else a(t)
        }, [i, e, a, l]);
        return [s, c]
      }

      function d(e, t, n, r) {
        const a = (0, o.useRef)(t);
        (0, o.useEffect)(() => {
          a.current = t
        }, [t]), (0, o.useEffect)(() => {
          const t = n?.current ?? window;
          if (!t || !t.addEventListener) return;
          const o = e => {
            a.current(e)
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
        enabled: a = !0
      }) => {
        const [i, s] = (0, o.useState)(!1);
        return d("focusin", e => {
          s(!0), n?.(e), t?.(!0, e)
        }, e), d("focusout", e => {
          s(!1), r?.(e), t?.(!1, e)
        }, e), {
          isFocused: !!a && i
        }
      };

      function p(e = !0) {
        const t = a("screen and (pointer: coarse) and (hover: none)");
        return !!e && t
      }
      var m = n(42069),
        v = n(37013),
        y = n(38140),
        g = n(13258);
      const b = /^(on.*)$/,
        h = /^(onPress.*)$/;
      var E = n(72965);
      const w = ({
        inert: e,
        className: t,
        onClick: n,
        isLoading: r,
        ...o
      }, a) => {
        const {
          events: i,
          others: s
        } = function(e, {
          onPress: t
        } = {
          onPress: !0
        }) {
          const n = {},
            r = {};
          for (const o in e) Object.prototype.hasOwnProperty.call(e, o) && (h.test(o) ? t ? n[o] = e[o] : r[o] = e[o] : b.test(o) ? n[o] = e[o] : r[o] = e[o]);
          return {
            events: n,
            others: r
          }
        }(o, {
          onPress: !1
        }), {
          buttonProps: l,
          isPressed: u
        } = function(e, t) {
          let n, {
            elementType: r = "button",
            isDisabled: o,
            onPress: a,
            onPressStart: i,
            onPressEnd: s,
            onPressUp: l,
            onPressChange: u,
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
          } = (0, g.d)({
            onPressStart: i,
            onPressEnd: s,
            onPressChange: u,
            onPress: a,
            onPressUp: l,
            onClick: f,
            isDisabled: o,
            preventFocusOnPress: c,
            ref: t
          }), {
            focusableProps: P
          } = (0, y.Wc)(e, t);
          d && (P.tabIndex = o ? -1 : P.tabIndex);
          let k = (0, v.v)(P, w, (0, m.$)(e, {
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
        }, a), c = {
          ...l,
          role: "button",
          "data-pressed": !e && u,
          "data-loading": r,
          "aria-busy": r
        };
        return {
          isPressed: !e && u,
          buttonProps: (0, E.v)(e ? {} : c, {
            ...i,
            className: t
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
        a = n(14142),
        i = n(89896),
        s = n(74402),
        l = n(2577);
      n(93082);
      let u = null,
        c = "keyboard";
      const d = new Set;
      let f = new Map,
        p = !1,
        m = !1;

      function v(e, t) {
        for (let n of d) n(e, t)
      }

      function y(e) {
        p = !0, !l.Fe.isOpening && function(e) {
          return !(e.metaKey || !(0, i.cX)() && e.altKey || e.ctrlKey || "Control" === e.key || "Shift" === e.key || "Meta" === e.key)
        }(e) && (u = "keyboard", c = "keyboard", v("keyboard", e))
      }

      function g(e) {
        u = "pointer", c = "pointerType" in e ? e.pointerType : "mouse", "mousedown" !== e.type && "pointerdown" !== e.type || (p = !0, v("pointer", e))
      }

      function b(e) {
        !l.Fe.isOpening && (0, s.Y)(e) && (p = !0, u = "virtual", c = "virtual")
      }

      function h(e) {
        let t = (0, o.mD)((0, r.wt)(e)),
          n = (0, o.TW)((0, r.wt)(e));
        (0, r.wt)(e) !== t && (0, r.wt)(e) !== n && !a.lR && e.isTrusted && (p || m || (u = "virtual", c = "virtual", v("virtual", e)), p = !1, m = !1)
      }

      function E() {
        a.lR || (p = !1, m = !0)
      }

      function w(e) {
        if ("undefined" == typeof window || "undefined" == typeof document) return;
        const t = (0, o.mD)(e),
          n = (0, o.TW)(e);
        if (f.get(t)) return;
        let r = t.HTMLElement.prototype.focus;
        t.HTMLElement.prototype.focus = function() {
          p = !0, r.apply(this, arguments)
        }, n.addEventListener("keydown", y, !0), n.addEventListener("keyup", y, !0), n.addEventListener("click", b, !0), t.addEventListener("focus", h, !0), t.addEventListener("blur", E, !1), "undefined" != typeof PointerEvent && (n.addEventListener("pointerdown", g, !0), n.addEventListener("pointermove", g, !0), n.addEventListener("pointerup", g, !0)), t.addEventListener("beforeunload", () => {
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
        t && r.removeEventListener("DOMContentLoaded", t), f.has(n) && (n.HTMLElement.prototype.focus = f.get(n).focus, r.removeEventListener("keydown", y, !0), r.removeEventListener("keyup", y, !0), r.removeEventListener("click", b, !0), n.removeEventListener("focus", h, !0), n.removeEventListener("blur", E, !1), "undefined" != typeof PointerEvent && (r.removeEventListener("pointerdown", g, !0), r.removeEventListener("pointermove", g, !0), r.removeEventListener("pointerup", g, !0)), f.delete(n))
      };

      function P() {
        return u
      }

      function k(e) {
        u = e, c = "pointer" === e ? "mouse" : e, v(e, null)
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
        Wc: () => m
      });
      var r = n(4978),
        o = n(14961),
        a = n(99386),
        i = n(28562),
        s = n(1519);
      var l = n(37013),
        u = n(14142),
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

      function m(e, t) {
        let {
          focusProps: n
        } = function(e) {
          let {
            isDisabled: t,
            onFocus: n,
            onBlur: r,
            onFocusChange: a
          } = e;
          const s = (0, c.useCallback)(e => {
              if ((0, o.wt)(e) === e.currentTarget) return r && r(e), a && a(!1), !0
            }, [r, a]),
            l = (0, u.yB)(s),
            d = (0, c.useCallback)(e => {
              let t = (0, o.wt)(e);
              const r = (0, i.TW)(t),
                s = r ? (0, o.bq)(r) : (0, o.bq)();
              t === e.currentTarget && t === s && (n && n(e), a && a(!0), l(e))
            }, [a, n, l]);
          return {
            focusProps: {
              onFocus: !t && (n || a || r) ? d : void 0,
              onBlur: t || !r && !a ? void 0 : s
            }
          }
        }(e), {
          keyboardProps: m
        } = function(e) {
          return {
            keyboardProps: e.isDisabled ? {} : {
              onKeyDown: d(e.onKeyDown),
              onKeyUp: d(e.onKeyUp)
            }
          }
        }(e), v = (0, l.v)(n, m), y = function(e) {
          let t = (0, c.useContext)(p) || {};
          (0, f.w)(t, e);
          let {
            ref: n,
            ...r
          } = t;
          return r
        }(t), g = e.isDisabled ? {} : y, b = (0, c.useRef)(e.autoFocus);
        (0, c.useEffect)(() => {
          b.current && t.current && function(e) {
            if (!e.isConnected) return;
            const t = (0, i.TW)(e);
            if ("virtual" === (0, a.ME)()) {
              let n = (0, o.bq)(t);
              (0, s.v)(() => {
                const a = (0, o.bq)(t);
                a !== n && a !== t.body || !e.isConnected || (0, r.e)(e)
              })
            } else(0, r.e)(e)
          }(t.current), b.current = !1
        }, [t]);
        let h = e.excludeFromTabOrder ? -1 : 0;
        return e.isDisabled && (h = void 0), {
          focusableProps: (0, l.v)({
            ...v,
            tabIndex: h
          }, g)
        }
      }
    },
    13258(e, t, n) {
      n.d(t, {
        d: () => M
      });
      var r = n(43524),
        o = n(14142),
        a = n(28562),
        i = n(89896),
        s = n(1519);
      let l = "default",
        u = "",
        c = new WeakMap;

      function d(e) {
        if ((0, i.un)()) {
          if ("disabled" !== l) return;
          l = "restoring", setTimeout(() => {
            (0, s.v)(() => {
              if ("restoring" === l) {
                const t = (0, a.TW)(e);
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

      function m(e) {
        let t = e?.defaultView;
        return t?.__webpack_nonce__ || globalThis.__webpack_nonce__ || void 0
      }
      let v = new WeakMap;
      var y = n(74402),
        g = n(37013),
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
          const a = o?.getBoundingClientRect();
          let i, s, l = 0,
            u = null;
          null != n.clientX && null != n.clientY && (s = n.clientX, u = n.clientY), a && (null != s && null != u ? (i = s - a.left, l = u - a.top) : (i = a.width / 2, l = a.height / 2)), this.type = e, this.pointerType = t, this.target = n.currentTarget, this.shiftKey = n.shiftKey, this.metaKey = n.metaKey, this.ctrlKey = n.ctrlKey, this.altKey = n.altKey, this.x = i, this.y = l, this.key = n.key
        }
        continuePropagation() {
          this.#e = !1
        }
        get shouldStopPropagation() {
          return this.#e
        }
      }
      const S = Symbol("linkClicked"),
        L = "react-aria-pressable-style",
        C = "data-react-aria-pressable";

      function M(e) {
        let {
          onPress: t,
          onPressChange: n,
          onPressStart: s,
          onPressEnd: M,
          onPressUp: K,
          onClick: _,
          isDisabled: O,
          isPressed: R,
          preventFocusOnPress: I,
          shouldCancelOnPointerExit: F,
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
            e = (0, g.v)(o, e), n()
          }
          return (0, P.w)(t, e.ref), e
        }(e), [X, V] = (0, h.useState)(!1), j = (0, h.useRef)({
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
          removeAllGlobalListeners: B
        } = (0, T.A)(), $ = (0, h.useCallback)((e, t) => {
          let r = j.current;
          if (O || r.didFirePressStart) return !1;
          let o = !0;
          if (r.isTriggeringEvent = !0, s) {
            let n = new k("pressstart", t, e);
            s(n), o = n.shouldStopPropagation
          }
          return n && n(!0), r.isTriggeringEvent = !1, r.didFirePressStart = !0, V(!0), o
        }, [O, s, n]), Y = (0, h.useCallback)((e, r, o = !0) => {
          let a = j.current;
          if (!a.didFirePressStart) return !1;
          a.didFirePressStart = !1, a.isTriggeringEvent = !0;
          let i = !0;
          if (M) {
            let t = new k("pressend", r, e);
            M(t), i = t.shouldStopPropagation
          }
          if (n && n(!1), V(!1), t && o && !O) {
            let n = new k("press", r, e);
            t(n), i &&= n.shouldStopPropagation
          }
          return a.isTriggeringEvent = !1, i
        }, [O, M, n, t]), q = (0, w.J)(Y), G = (0, h.useCallback)((e, t) => {
          let n = j.current;
          if (O) return !1;
          if (K) {
            n.isTriggeringEvent = !0;
            let r = new k("pressup", t, e);
            return K(r), n.isTriggeringEvent = !1, r.shouldStopPropagation
          }
          return !0
        }, [O, K]), Z = (0, w.J)(G), J = (0, h.useCallback)(e => {
          let t = j.current;
          if (t.isPressed && t.target) {
            t.didFirePressStart && null != t.pointerType && Y(A(t.target, e), t.pointerType, !1), t.isPressed = !1, t.isOverTarget = !1, t.activePointerId = null, t.pointerType = null, B(), W || d(t.target);
            for (let e of t.disposables) e();
            t.disposables = []
          }
        }, [W, B, Y]), Q = (0, w.J)(J), ee = (0, h.useCallback)(e => {
          F && J(e)
        }, [F, J]), te = (0, h.useCallback)(e => {
          O || _?.(e)
        }, [O, _]), ne = (0, h.useCallback)((e, t) => {
          if (!O && _) {
            let n = new MouseEvent("click", e);
            (0, o.o1)(n, t), _((0, o.eg)(n))
          }
        }, [O, _]), re = (0, h.useMemo)(() => {
          let e = j.current,
            t = {
              onKeyDown(t) {
                if (x(t.nativeEvent, t.currentTarget) && (0, p.sD)(t.currentTarget, (0, p.wt)(t))) {
                  N((0, p.wt)(t), t.key) && t.preventDefault();
                  let o = !0;
                  e.isPressed || t.repeat || (e.target = t.currentTarget, e.isPressed = !0, e.pointerType = "keyboard", o = $(t, "keyboard"));
                  let s = t.currentTarget,
                    l = t => {
                      x(t, s) && !t.repeat && (0, p.sD)(s, (0, p.wt)(t)) && e.target && Z(A(e.target, t), "keyboard")
                    };
                  z((0, a.TW)(t.currentTarget), "keyup", (0, r.c)(l, n), !0), o && t.stopPropagation(), t.metaKey && (0, i.cX)() && e.metaKeyEvents?.set(t.key, t.nativeEvent)
                } else "Meta" === t.key && (e.metaKeyEvents = new Map)
              },
              onClick(t) {
                if ((!t || (0, p.sD)(t.currentTarget, (0, p.wt)(t))) && t && 0 === t.button && !e.isTriggeringEvent && !b.Fe.isOpening) {
                  let n = !0;
                  if (O && t.preventDefault(), e.ignoreEmulatedMouseEvents || e.isPressed || "virtual" !== e.pointerType && !(0, y.Y)(t.nativeEvent)) {
                    if (e.isPressed && "keyboard" !== e.pointerType) {
                      let r = e.pointerType || t.nativeEvent.pointerType || "virtual",
                        o = Z(A(t.currentTarget, t), r),
                        a = q(A(t.currentTarget, t), r, !0);
                      n = o && a, e.isOverTarget = !1, te(t), Q(t)
                    }
                  } else {
                    let e = $(t, "virtual"),
                      r = Z(t, "virtual"),
                      o = q(t, "virtual");
                    te(t), n = e && r && o
                  }
                  e.ignoreEmulatedMouseEvents = !1, n && t.stopPropagation()
                }
              }
            },
            n = t => {
              if (e.isPressed && e.target && x(t, e.target)) {
                N((0, p.wt)(t), t.key) && t.preventDefault();
                let n = (0, p.wt)(t),
                  r = (0, p.sD)(e.target, n);
                q(A(e.target, t), "keyboard", r), r && ne(t, e.target), B(), "Enter" !== t.key && D(e.target) && (0, p.sD)(e.target, n) && !t[S] && (t[S] = !0, (0, b.Fe)(e.target, t, !1)), e.isPressed = !1, e.metaKeyEvents?.delete(t.key)
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
                  if ((0, i.un)()) {
                    if ("default" === l) {
                      const t = (0, a.TW)(e);
                      u = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = "none"
                    }
                    l = "disabled"
                  } else if (e instanceof HTMLElement || e instanceof SVGElement) {
                    let t = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
                    c.set(e, e.style[t]), e.style[t] = "none"
                  }
                }(e.target), o = $(t, e.pointerType);
                let s = (0, p.wt)(t);
                "releasePointerCapture" in s && ("hasPointerCapture" in s ? s.hasPointerCapture(t.pointerId) && s.releasePointerCapture(t.pointerId) : s.releasePointerCapture(t.pointerId)), z((0, a.TW)(t.currentTarget), "pointerup", n, !1), z((0, a.TW)(t.currentTarget), "pointercancel", r, !1)
              }
              o && t.stopPropagation()
            }, t.onMouseDown = t => {
              if ((0, p.sD)(t.currentTarget, (0, p.wt)(t)) && 0 === t.button) {
                if (I) {
                  let n = (0, o.LE)(t.target);
                  n && e.disposables.push(n)
                }
                t.stopPropagation()
              }
            }, t.onPointerUp = t => {
              (0, p.sD)(t.currentTarget, (0, p.wt)(t)) && "virtual" !== e.pointerType && (0 !== t.button || e.isPressed || Z(t, e.pointerType || t.pointerType))
            }, t.onPointerEnter = t => {
              t.pointerId === e.activePointerId && e.target && !e.isOverTarget && null != e.pointerType && (e.isOverTarget = !0, $(A(e.target, t), e.pointerType))
            }, t.onPointerLeave = t => {
              t.pointerId === e.activePointerId && e.target && e.isOverTarget && null != e.pointerType && (e.isOverTarget = !1, q(A(e.target, t), e.pointerType, !1), ee(t))
            };
            let n = t => {
                if (t.pointerId === e.activePointerId && e.isPressed && 0 === t.button && e.target) {
                  if ((0, p.sD)(e.target, (0, p.wt)(t)) && null != e.pointerType) {
                    let n = !1,
                      r = setTimeout(() => {
                        e.isPressed && e.target instanceof HTMLElement && (n ? Q(t) : ((0, f.e)(e.target), e.target.click()))
                      }, 80);
                    z(t.currentTarget, "click", () => n = !0, !0), e.disposables.push(() => clearTimeout(r))
                  } else Q(t);
                  e.isOverTarget = !1
                }
              },
              r = e => {
                Q(e)
              };
            t.onDragStart = e => {
              (0, p.sD)(e.currentTarget, (0, p.wt)(e)) && Q(e)
            }
          }
          return t
        }, [z, O, I, B, W, ee, $, te, ne]);
        return (0, h.useEffect)(() => {
          if (!H) return;
          const e = (0, a.TW)(H.current);
          if (!e || !e.head || e.getElementById(L)) return;
          const t = e.createElement("style");
          t.id = L;
          let n = function(e) {
            let t = e ?? ("undefined" != typeof document ? document : void 0);
            if (!t) return m(t);
            if (v.has(t)) return v.get(t);
            let n = t.querySelector('meta[property="csp-nonce"]'),
              r = n && n instanceof(0, a.mD)(n).HTMLMetaElement && (n.nonce || n.content) || m(t) || void 0;
            return void 0 !== r && v.set(t, r), r
          }(e);
          n && (t.nonce = n), t.textContent = `\n@layer {\n  [${C}] {\n    touch-action: pan-x pan-y pinch-zoom;\n  }\n}\n    `.trim(), e.head.prepend(t)
        }, [H]), (0, h.useEffect)(() => {
          let e = j.current;
          return () => {
            W || d(e.target ?? void 0);
            for (let t of e.disposables) t();
            e.disposables = []
          }
        }, [W]), {
          isPressed: R || X,
          pressProps: (0, g.v)(U, re, {
            [C]: !0
          })
        }
      }

      function D(e) {
        return "A" === e.tagName && e.hasAttribute("href")
      }

      function x(e, t) {
        const {
          key: n,
          code: r
        } = e, o = t, i = o.getAttribute("role");
        return !("Enter" !== n && " " !== n && "Spacebar" !== n && "Space" !== r || o instanceof(0, a.mD)(o).HTMLInputElement && !_(o, n) || o instanceof(0, a.mD)(o).HTMLTextAreaElement || o.isContentEditable || ("link" === i || !i && D(o)) && "Enter" !== n)
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

      function N(e, t) {
        return e instanceof HTMLInputElement ? !_(e, t) : function(e) {
          return !(e instanceof HTMLInputElement || (e instanceof HTMLButtonElement ? "submit" === e.type || "reset" === e.type : D(e)))
        }(e)
      }
      const K = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

      function _(e, t) {
        return "checkbox" === e.type || "radio" === e.type ? " " === t : K.has(e.type)
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
        a = n(28562),
        i = n(1360),
        s = n(58907),
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
              a = r => {
                if (t.current.isFocused = !1, n.disabled) {
                  let t = u(r);
                  e?.(t)
                }
                t.current.observer && (t.current.observer.disconnect(), t.current.observer = null)
              };
            n.addEventListener("focusout", a, {
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
        for (; e && !(0, i.t)(e, {
            skipVisibilityCheck: !0
          });) e = e.parentElement;
        let t = (0, a.mD)(e),
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
            cancelAnimationFrame(m), t.removeEventListener("blur", l, !0), t.removeEventListener("focusout", u, !0), t.removeEventListener("focusin", d, !0), t.removeEventListener("focus", c, !0), f = !1, s = !1
          },
          m = requestAnimationFrame(p);
        return p
      }
    },
    6859(e, t, n) {
      n.d(t, {
        Cc: () => l,
        wR: () => f
      });
      var r = n(93082);
      const o = {
          prefix: String(Math.round(1e10 * Math.random())),
          current: 0
        },
        a = r.createContext(o),
        i = r.createContext(!1);
      Boolean("undefined" != typeof window && window.document && window.document.createElement);
      let s = new WeakMap;
      const l = "function" == typeof r.useId ? function(e) {
        let t = r.useId(),
          [n] = (0, r.useState)(f());
        return e || `${n?"react-aria":`react-aria${o.prefix}`}-${t}`
      } : function(e) {
        let t = (0, r.useContext)(a),
          n = function(e = !1) {
            let t = (0, r.useContext)(a),
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
        return "function" == typeof r.useSyncExternalStore ? r.useSyncExternalStore(d, u, c) : (0, r.useContext)(i)
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
        Ng: () => a,
        TW: () => r,
        mD: () => o
      });
      const r = e => e?.ownerDocument ?? document,
        o = e => e && "window" in e && e.window === e ? e : r(e).defaultView || window;

      function a(e) {
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
        a = new Set(["href", "hrefLang", "target", "rel", "download", "ping", "referrerPolicy"]),
        i = new Set(["dir", "lang", "hidden", "inert", "translate"]),
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
        for (const t in e) Object.prototype.hasOwnProperty.call(e, t) && (r.has(t) || n && o.has(t) || u && a.has(t) || c && i.has(t) || d && (s.has(t) || t.endsWith("Capture") && s.has(t.slice(0, -7))) || f?.has(t) || l.test(t)) && (p[t] = e[t]);
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

      function a(e, t) {
        return o ? e.checkVisibility({
          visibilityProperty: !0
        }) && !e.closest("[data-react-aria-prevent-focus]") : "#comment" !== e.nodeName && function(e) {
          const t = (0, r.mD)(e);
          if (!(e instanceof t.HTMLElement || e instanceof t.SVGElement)) return !1;
          let {
            display: n,
            visibility: o
          } = e.style, a = "none" !== n && "hidden" !== o && "collapse" !== o;
          if (a) {
            const {
              getComputedStyle: t
            } = e.ownerDocument.defaultView;
            let {
              display: n,
              visibility: r
            } = t(e);
            a = "none" !== n && "hidden" !== r && "collapse" !== r
          }
          return a
        }(e) && function(e, t) {
          return !e.hasAttribute("hidden") && !e.hasAttribute("data-react-aria-prevent-focus") && ("DETAILS" !== e.nodeName || !t || "SUMMARY" === t.nodeName || e.hasAttribute("open"))
        }(e, t) && (!e.parentElement || a(e.parentElement, e))
      }
      const i = ["input:not([disabled]):not([type=hidden])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "a[href]", "area[href]", "summary", "iframe", "object", "embed", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable^="false"])', "permission"],
        s = i.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
      i.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
      const l = i.join(':not([hidden]):not([tabindex="-1"]),');

      function u(e, t) {
        return e.matches(s) && !d(e) && (t?.skipVisibilityCheck || a(e))
      }

      function c(e) {
        return e.matches(l) && a(e) && !d(e)
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
        P: () => a,
        Y: () => o
      });
      var r = n(89896);

      function o(e) {
        return !("" !== e.pointerType || !e.isTrusted) || ((0, r.m0)() && e.pointerType ? "click" === e.type && 1 === e.buttons : 0 === e.detail && !e.pointerType)
      }

      function a(e) {
        return !(0, r.m0)() && 0 === e.width && 0 === e.height || 1 === e.width && 1 === e.height && 0 === e.pressure && 0 === e.detail && "mouse" === e.pointerType
      }
    },
    37013(e, t, n) {
      n.d(t, {
        v: () => l
      });
      var r = n(43524),
        o = n(13087);

      function a(...e) {
        return 1 === e.length && e[0] ? e[0] : t => {
          let n = !1;
          const r = e.map(e => {
            const r = i(e, t);
            return n ||= "function" == typeof r, r
          });
          if (n) return () => {
            r.forEach((t, n) => {
              "function" == typeof t ? t() : i(e[n], null)
            })
          }
        }
      }

      function i(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
      }
      var s = n(81270);

      function l(...e) {
        let t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          let i = e[n];
          for (let e in i) {
            let n = t[e],
              l = i[e];
            "function" == typeof n && "function" == typeof l && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = (0, r.c)(n, l) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof l ? "id" === e && n && l ? t.id = (0, o.Tw)(n, l) : "ref" === e && n && l ? t.ref = a(n, l) : t[e] = void 0 !== l ? l : n : t[e] = (0, s.default)(n, l)
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
        a = n(93082);
      const i = (0, a.createContext)({
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
        return (0, a.useContext)(i)
      }

      function l(e, t, n = !0) {
        let {
          metaKey: a,
          ctrlKey: i,
          altKey: s,
          shiftKey: u
        } = t;
        (0, o.gm)() && window.event?.type?.startsWith("key") && "_blank" === e.target && ((0, o.cX)() ? a = !0 : i = !0);
        let c = (0, o.Tc)() && (0, o.cX)() && !(0, o.bh)() ? new KeyboardEvent("keydown", {
          keyIdentifier: "Enter",
          metaKey: a,
          ctrlKey: i,
          altKey: s,
          shiftKey: u
        }) : new MouseEvent("click", {
          metaKey: a,
          ctrlKey: i,
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

      function a(e) {
        let t = null;
        return () => (null == t && (t = e()), t)
      }
      n.d(t, {
        Tc: () => c,
        bh: () => l,
        cX: () => i,
        gm: () => p,
        m0: () => f,
        un: () => u
      });
      const i = a(function() {
          return o(/^Mac/i)
        }),
        s = a(function() {
          return o(/^iPhone/i)
        }),
        l = a(function() {
          return o(/^iPad/i) || i() && navigator.maxTouchPoints > 1
        }),
        u = a(function() {
          return s() || l()
        }),
        c = (a(function() {
          return i() || u()
        }), a(function() {
          return r(/AppleWebKit/i) && !d()
        })),
        d = a(function() {
          return r(/Chrome/i)
        }),
        f = a(function() {
          return r(/Android/i)
        }),
        p = a(function() {
          return r(/Firefox/i)
        })
    },
    1519(e, t, n) {
      n.d(t, {
        v: () => s
      });
      var r = n(14961);
      let o = new Map,
        a = new Set;

      function i() {
        if ("undefined" == typeof window) return;

        function e(e) {
          return "propertyName" in e
        }
        let t = n => {
          let i = (0, r.wt)(n);
          if (!e(n) || !i) return;
          let s = o.get(i);
          if (s && (s.delete(n.propertyName), 0 === s.size && (i.removeEventListener("transitioncancel", t), o.delete(i)), 0 === o.size)) {
            for (let e of a) e();
            a.clear()
          }
        };
        document.body.addEventListener("transitionrun", n => {
          let a = (0, r.wt)(n);
          if (!e(n) || !a) return;
          let i = o.get(a);
          i || (i = new Set, o.set(a, i), a.addEventListener("transitioncancel", t, {
            once: !0
          })), i.add(n.propertyName)
        }), document.body.addEventListener("transitionend", t)
      }

      function s(e) {
        requestAnimationFrame(() => {
          ! function() {
            for (const [e] of o) "isConnected" in e && !e.isConnected && o.delete(e)
          }(), 0 === o.size ? e() : a.add(e)
        })
      }
      "undefined" != typeof document && ("loading" !== document.readyState ? i() : document.addEventListener("DOMContentLoaded", i))
    },
    14961(e, t, n) {
      n.d(t, {
        bq: () => i,
        sD: () => a,
        wt: () => s
      });
      var r = n(28562),
        o = n(67892);

      function a(e, t) {
        if (!(0, o.Nf)()) return !(!t || !e) && e.contains(t);
        if (!e || !t) return !1;
        let n = t;
        for (; null !== n;) {
          if (n === e) return !0;
          n = "SLOT" === n.tagName && n.assignedSlot ? n.assignedSlot.parentNode : (0, r.Ng)(n) ? n.host : n.parentNode
        }
        return !1
      }
      const i = (e = document) => {
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
        J: () => i
      });
      var r = n(58907),
        o = n(93082);
      const a = o.useInsertionEffect ?? r.N;

      function i(e) {
        const t = (0, o.useRef)(null);
        return a(() => {
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
      var r = n(93082);

      function o() {
        let e = (0, r.useRef)(new Map),
          t = (0, r.useCallback)((t, n, r, o) => {
            let a = o?.once ? (...t) => {
              e.current.delete(r), r(...t)
            } : r;
            e.current.set(r, {
              type: n,
              eventTarget: t,
              fn: a,
              options: o
            }), t.addEventListener(n, a, o)
          }, []),
          n = (0, r.useCallback)((t, n, r, o) => {
            let a = e.current.get(r)?.fn || r;
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
    13087(e, t, n) {
      n.d(t, {
        Tw: () => c,
        Bi: () => u,
        X1: () => d
      });
      var r = n(58907),
        o = n(6859),
        a = n(93082);
      let i, s = Boolean("undefined" != typeof window && window.document && window.document.createElement),
        l = new Map;

      function u(e) {
        let [t, n] = (0, a.useState)(e), u = (0, a.useRef)(null), c = (0, o.Cc)(t), d = (0, a.useRef)(null);
        if (i && i.register(d, c), s) {
          const e = l.get(c);
          e && !e.includes(u) ? e.push(u) : l.set(c, [u])
        }
        return (0, r.N)(() => {
          let e = c;
          return () => {
            i && i.unregister(d), l.delete(e)
          }
        }, [c]), (0, a.useEffect)(() => {
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
            let [t, n] = (0, a.useState)(e), o = (0, a.useRef)(t), i = (0, a.useRef)(null), s = (0, a.useRef)(() => {
              if (!i.current) return;
              let e = i.current.next();
              e.done ? i.current = null : o.current === e.value ? s.current() : n(e.value)
            });
            (0, r.N)(() => {
              o.current = t, i.current && s.current()
            });
            let l = (0, a.useCallback)(e => {
              i.current = e(o.current), s.current()
            }, [s]);
            return [t, l]
          }(t),
          i = (0, a.useCallback)(() => {
            o(function*() {
              yield t, yield document.getElementById(t) ? t : void 0
            })
          }, [t, o]);
        return (0, r.N)(i, [t, i, ...e]), n
      }
      "undefined" != typeof FinalizationRegistry && (i = new FinalizationRegistry(e => {
        l.delete(e)
      }))
    },
    58907(e, t, n) {
      n.d(t, {
        N: () => o
      });
      var r = n(93082);
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