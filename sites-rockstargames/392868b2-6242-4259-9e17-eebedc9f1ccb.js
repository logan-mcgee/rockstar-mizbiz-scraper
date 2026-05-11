try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "392868b2-6242-4259-9e17-eebedc9f1ccb", e._sentryDebugIdIdentifier = "sentry-dbid-392868b2-6242-4259-9e17-eebedc9f1ccb")
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
  [3661], {
    86825(e, t, n) {
      n.d(t, {
        nz: () => r,
        wj: () => o,
        xW: () => i,
        Np: () => a,
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
        i = {
          dark: "foundry_nu8bkpd",
          light: "foundry_nu8bkpc",
          tokens: "foundry_nu8bkp4",
          typography: "foundry_nu8bkp3",
          grid: "foundry_nu8bkpb"
        },
        a = "foundry_nu8bkpb",
        s = "--foundry-platform-scales-ratio-65afb887",
        l = "foundry_nu8bkp4",
        u = "foundry_nu8bkp3"
    },
    46219(e, t, n) {
      n.d(t, {
        sL: () => w,
        UP: () => s,
        ic: () => c,
        iQ: () => f,
        Ub: () => i,
        jt: () => l,
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

        function l() {
          s(i(e))
        }
        return (0, o.useEffect)(() => {
          const t = window.matchMedia?.(e);
          return l(), t?.addListener ? t?.addListener(l) : t?.addEventListener("change", l), () => {
            t?.removeListener ? t?.removeListener(l) : t?.removeEventListener("change", l)
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
      const l = () => i("(prefers-reduced-motion: reduce)", {
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
        const [r, i] = function({
          defaultProp: e,
          onChange: t
        }) {
          const n = (0, o.useState)(e),
            [r] = n,
            i = (0, o.useRef)(r),
            a = u(t);
          return (0, o.useEffect)(() => {
            i.current !== r && (a(r), i.current = r)
          }, [r, i, a]), n
        }({
          defaultProp: t,
          onChange: n
        }), a = void 0 !== e, s = a ? e : r, l = u(n), c = (0, o.useCallback)(t => {
          if (a) {
            const n = "function" == typeof t ? t(e) : t;
            n !== e && l(n)
          } else i(t)
        }, [a, e, i, l]);
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
        m = n(99098),
        y = n(46773),
        g = n(52061);
      const b = /^(on.*)$/,
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
            onPress: i,
            onPressStart: a,
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
          } = (0, y.d)({
            onPressStart: a,
            onPressEnd: s,
            onPressChange: u,
            onPress: i,
            onPressUp: l,
            onClick: f,
            isDisabled: o,
            preventFocusOnPress: c,
            ref: t
          }), {
            focusableProps: P
          } = (0, g.Wc)(e, t);
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
        }, i), c = {
          ...l,
          role: "button",
          "data-pressed": !e && u,
          "data-loading": r,
          "aria-busy": r
        };
        return {
          isPressed: !e && u,
          buttonProps: (0, E.v)(e ? {} : c, {
            ...a,
            className: t
          })
        }
      }
    },
    43661(e, t, n) {
      n.d(t, {
        NP: () => m,
        Ym: () => u,
        zQ: () => l
      });
      var r = n(42295),
        o = (n(10357), n(32067)),
        i = n(71127);
      const a = (0, i.createContext)({
          colorScheme: "dark",
          defaultColorScheme: "dark",
          platformScale: "mobile",
          defaultPlatformScale: "mobile",
          locale: "en-US"
        }),
        s = () => (0, i.useContext)(a),
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
      var c = n(46219),
        d = n(86825);
      const f = e => "dark" === e ? d.xW.dark : d.xW.light;
      var p = n(75523);
      const v = () => p.X3 ? null : document.body,
        m = (0, i.forwardRef)(({
          children: e,
          className: t,
          container: n = v(),
          asChild: s,
          colorScheme: l,
          defaultColorScheme: u,
          defaultPlatformScale: m,
          platformScale: y,
          onPlatformScaleChange: g,
          locale: b = "en-US"
        }, h) => {
          const E = (0, i.useRef)(null),
            w = (0, c.UP)(E, h),
            T = (0, i.useRef)(n),
            {
              ratio: P,
              scale: k
            } = function(e) {
              const [t, n] = (0, i.useState)(e.platformScale || e.defaultPlatformScale), r = (0, i.useCallback)(t => {
                n(t), e.onPlatformScaleChange?.(t)
              }, [e.onPlatformScaleChange]), o = (0, i.useRef)([]), a = () => {
                if (!p.X3) {
                  for (const {
                      handler: e,
                      matchMedia: t
                    }
                    of o.current) t.removeEventListener("change", e);
                  o.current = []
                }
              };
              return (0, i.useEffect)(() => (e.platformScale ? r(e.platformScale) : (() => {
                if (!p.X3) {
                  a();
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
              })(), a), [e.platformScale, r]), {
                scale: t,
                ratio: d.nz[t]
              }
            }({
              onPlatformScaleChange: g,
              defaultPlatformScale: m,
              platformScale: y
            }),
            {
              appearanceClass: L,
              otherAppearanceClasses: S,
              providerColor: C
            } = function({
              colorScheme: e,
              defaultColorScheme: t = "dark"
            }) {
              const n = (0, c.Ub)("(prefers-color-scheme: light)"),
                r = (0, c.Ub)("(prefers-color-scheme: dark)"),
                o = "system" !== e && e || n && "light" || r && "dark" || t,
                a = (0, i.useMemo)(() => f(o), [o]),
                s = (0, i.useMemo)(() => (e => {
                  const t = f(e);
                  return [d.xW.light, d.xW.dark].filter(e => e !== t)
                })(o), [o]);
              return {
                appearanceClass: a,
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
            className: a
          }) => {
            const s = (0, c.ZC)(a),
              l = (0, c.ZC)(e.current);
            (0, i.useEffect)(() => {
              e.current?.classList.contains(d.X6) || e.current?.classList.add(d.X6), e.current?.classList.contains(d.yU) || e.current?.classList.add(d.yU), e.current?.classList.contains(d.Np) || e.current?.classList.add(d.Np), e.current?.classList.add(n), e.current?.classList.remove(...r), s && a && e.current?.classList.contains(s) ? e.current?.classList.replace(s, a) : s && !a && e.current?.classList.contains(s) ? e.current?.classList.remove(s) : a && e.current?.classList.add(a)
            }, [n, a]), (0, i.useEffect)(() => {
              e.current?.setAttribute("lang", o)
            }, [o]), (0, i.useEffect)(() => (t && e.current?.style.setProperty(d.HZ, t.toString()), () => {
              e.current?.style.removeProperty(d.HZ)
            }), [t]), (0, i.useEffect)(() => {
              l?.classList.remove(d.X6), l?.classList.remove(d.yU), l?.classList.remove(n), l?.style.removeProperty(d.HZ), a && l?.classList.remove(a)
            }, [l])
          })({
            locale: b,
            className: t,
            appearanceClass: L,
            otherAppearanceClasses: S,
            currentScale: y ? P : -0,
            container: s ? E : T
          }), (0, r.jsx)(a.Provider, {
            value: {
              locale: b,
              defaultColorScheme: u,
              colorScheme: C,
              defaultPlatformScale: m,
              platformScale: k
            },
            children: s ? (0, r.jsx)(o.DX, {
              ref: w,
              children: e
            }) : e
          })
        })
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
        l = n(61205);
      n(71127);
      let u = null,
        c = "keyboard";
      const d = new Set;
      let f = new Map,
        p = !1,
        v = !1;

      function m(e, t) {
        for (let n of d) n(e, t)
      }

      function y(e) {
        p = !0, !a.Fe.isOpening && function(e) {
          return !(e.metaKey || !(0, s.cX)() && e.altKey || e.ctrlKey || "Control" === e.key || "Shift" === e.key || "Meta" === e.key)
        }(e) && (u = "keyboard", c = "keyboard", m("keyboard", e))
      }

      function g(e) {
        u = "pointer", c = "pointerType" in e ? e.pointerType : "mouse", "mousedown" !== e.type && "pointerdown" !== e.type || (p = !0, m("pointer", e))
      }

      function b(e) {
        !a.Fe.isOpening && (0, l.Y)(e) && (p = !0, u = "virtual", c = "virtual")
      }

      function h(e) {
        (0, o.wt)(e) !== window && (0, o.wt)(e) !== document && !r.lR && e.isTrusted && (p || v || (u = "virtual", c = "virtual", m("virtual", e)), p = !1, v = !1)
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
        }, n.addEventListener("keydown", y, !0), n.addEventListener("keyup", y, !0), n.addEventListener("click", b, !0), t.addEventListener("focus", h, !0), t.addEventListener("blur", E, !1), "undefined" != typeof PointerEvent && (n.addEventListener("pointerdown", g, !0), n.addEventListener("pointermove", g, !0), n.addEventListener("pointerup", g, !0)), t.addEventListener("beforeunload", () => {
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
        t && r.removeEventListener("DOMContentLoaded", t), f.has(n) && (n.HTMLElement.prototype.focus = f.get(n).focus, r.removeEventListener("keydown", y, !0), r.removeEventListener("keyup", y, !0), r.removeEventListener("click", b, !0), n.removeEventListener("focus", h, !0), n.removeEventListener("blur", E, !1), "undefined" != typeof PointerEvent && (r.removeEventListener("pointerdown", g, !0), r.removeEventListener("pointermove", g, !0), r.removeEventListener("pointerup", g, !0)), f.delete(n))
      };

      function P() {
        return u
      }

      function k(e) {
        u = e, c = "pointer" === e ? "mouse" : e, m(e, null)
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
      var l = n(89839),
        u = n(71127);

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
      let p = u.createContext(null);

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
          const s = (0, u.useCallback)(e => {
              if ((0, i.wt)(e) === e.currentTarget) return r && r(e), a && a(!1), !0
            }, [r, a]),
            c = (0, l.yB)(s),
            d = (0, u.useCallback)(e => {
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
        }(e), m = (0, f.v)(n, v), y = function(e) {
          let t = (0, u.useContext)(p) || {};
          (0, d.w)(t, e);
          let {
            ref: n,
            ...r
          } = t;
          return r
        }(t), g = e.isDisabled ? {} : y, b = (0, u.useRef)(e.autoFocus);
        (0, u.useEffect)(() => {
          b.current && t.current && function(e) {
            if (!e.isConnected) return;
            const t = (0, o.TW)(e);
            if ("virtual" === (0, r.ME)()) {
              let n = (0, i.bq)(t);
              (0, a.v)(() => {
                const r = (0, i.bq)(t);
                r !== n && r !== t.body || !e.isConnected || (0, s.e)(e)
              })
            } else(0, s.e)(e)
          }(t.current), b.current = !1
        }, [t]);
        let h = e.excludeFromTabOrder ? -1 : 0;
        return e.isDisabled && (h = void 0), {
          focusableProps: (0, f.v)({
            ...m,
            tabIndex: h
          }, g)
        }
      }
    },
    46773(e, t, n) {
      n.d(t, {
        d: () => x
      });
      var r = n(89839),
        o = n(87263),
        i = n(62993),
        a = n(8324);
      let s = "default",
        l = "",
        u = new WeakMap;

      function c(e) {
        if ((0, o.un)()) {
          if ("disabled" !== s) return;
          s = "restoring", setTimeout(() => {
            (0, a.v)(() => {
              if ("restoring" === s) {
                const t = (0, i.TW)(e);
                "none" === t.documentElement.style.webkitUserSelect && (t.documentElement.style.webkitUserSelect = l || ""), l = "", s = "default"
              }
            })
          }, 300)
        } else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && u.has(e)) {
          let t = u.get(e),
            n = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
          "none" === e.style[n] && (e.style[n] = t), "" === e.getAttribute("style") && e.removeAttribute("style"), u.delete(e)
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
      var m = n(64720),
        y = n(11021),
        g = n(73581),
        b = n(79888),
        h = n(28830),
        E = n(13569),
        w = n(36566),
        T = n(72301),
        P = n(28215),
        k = n(61205);
      n(18429);
      var L = new WeakMap;
      class S {
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
          let l = null !== (o = null == r ? void 0 : r.target) && void 0 !== o ? o : n.currentTarget;
          const u = null == l ? void 0 : l.getBoundingClientRect();
          let c, d, f = 0,
            p = null;
          null != n.clientX && null != n.clientY && (d = n.clientX, p = n.clientY), u && (null != d && null != p ? (c = d - u.left, f = p - u.top) : (c = u.width / 2, f = u.height / 2)), this.type = e, this.pointerType = t, this.target = n.currentTarget, this.shiftKey = n.shiftKey, this.metaKey = n.metaKey, this.ctrlKey = n.ctrlKey, this.altKey = n.altKey, this.x = c, this.y = f, this.key = n.key
        }
      }
      const C = Symbol("linkClicked"),
        M = "react-aria-pressable-style",
        D = "data-react-aria-pressable";

      function x(e) {
        let {
          onPress: t,
          onPressChange: n,
          onPressStart: a,
          onPressEnd: p,
          onPressUp: v,
          onClick: L,
          isDisabled: x,
          isPressed: R,
          preventFocusOnPress: I,
          shouldCancelOnPointerExit: _,
          allowTextSelectionOnPress: F,
          ref: W,
          ...U
        } = function(e) {
          let t = (0, d.useContext)(f);
          if (t) {
            let {
              register: n,
              ref: r,
              ...o
            } = t;
            e = (0, m.v)(o, e), n()
          }
          return (0, y.w)(t, e.ref), e
        }(e), [H, X] = (0, d.useState)(!1), j = (0, d.useRef)({
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
          removeAllGlobalListeners: B,
          removeGlobalListener: V
        } = (0, g.A)(), $ = (0, d.useCallback)((e, t) => {
          let r = j.current;
          if (x || r.didFirePressStart) return !1;
          let o = !0;
          if (r.isTriggeringEvent = !0, a) {
            let n = new S("pressstart", t, e);
            a(n), o = n.shouldStopPropagation
          }
          return n && n(!0), r.isTriggeringEvent = !1, r.didFirePressStart = !0, X(!0), o
        }, [x, a, n]), G = (0, d.useCallback)((e, r, o = !0) => {
          let i = j.current;
          if (!i.didFirePressStart) return !1;
          i.didFirePressStart = !1, i.isTriggeringEvent = !0;
          let a = !0;
          if (p) {
            let t = new S("pressend", r, e);
            p(t), a = t.shouldStopPropagation
          }
          if (n && n(!1), X(!1), t && o && !x) {
            let n = new S("press", r, e);
            t(n), a && (a = n.shouldStopPropagation)
          }
          return i.isTriggeringEvent = !1, a
        }, [x, p, n, t]), Y = (0, b.J)(G), q = (0, d.useCallback)((e, t) => {
          let n = j.current;
          if (x) return !1;
          if (v) {
            n.isTriggeringEvent = !0;
            let r = new S("pressup", t, e);
            return v(r), n.isTriggeringEvent = !1, r.shouldStopPropagation
          }
          return !0
        }, [x, v]), Z = (0, b.J)(q), J = (0, d.useCallback)(e => {
          let t = j.current;
          if (t.isPressed && t.target) {
            t.didFirePressStart && null != t.pointerType && G(K(t.target, e), t.pointerType, !1), t.isPressed = !1, se(null), t.isOverTarget = !1, t.activePointerId = null, t.pointerType = null, B(), F || c(t.target);
            for (let e of t.disposables) e();
            t.disposables = []
          }
        }, [F, B, G]), Q = (0, b.J)(J), ee = (0, d.useCallback)(e => {
          _ && J(e)
        }, [_, J]), te = (0, d.useCallback)(e => {
          x || null == L || L(e)
        }, [x, L]), ne = (0, d.useCallback)((e, t) => {
          if (!x && L) {
            let n = new MouseEvent("click", e);
            (0, r.o1)(n, t), L((0, r.eg)(n))
          }
        }, [x, L]), re = (0, b.J)(ne), [oe, ie] = (0, d.useState)(!1);
        (0, h.N)(() => {
          let e = j.current;
          if (oe) {
            let t = t => {
                var n;
                if (e.isPressed && e.target && N(t, e.target)) {
                  var r;
                  O((0, E.wt)(t), t.key) && t.preventDefault();
                  let n = (0, E.wt)(t),
                    o = (0, E.sD)(e.target, n);
                  Y(K(e.target, t), "keyboard", o), o && re(t, e.target), B(), "Enter" !== t.key && A(e.target) && (0, E.sD)(e.target, n) && !t[C] && (t[C] = !0, (0, w.Fe)(e.target, t, !1)), e.isPressed = !1, ie(!1), null === (r = e.metaKeyEvents) || void 0 === r || r.delete(t.key)
                } else if ("Meta" === t.key && (null === (n = e.metaKeyEvents) || void 0 === n ? void 0 : n.size)) {
                  var o;
                  let t = e.metaKeyEvents;
                  e.metaKeyEvents = void 0;
                  for (let n of t.values()) null === (o = e.target) || void 0 === o || o.dispatchEvent(new KeyboardEvent("keyup", n))
                }
              },
              n = e.target,
              r = t => {
                n && N(t, n) && !t.repeat && (0, E.sD)(n, (0, E.wt)(t)) && e.target && Z(K(e.target, t), "keyboard")
              },
              o = (0, T.c)(r, t);
            return z((0, i.TW)(e.target), "keyup", o, !0), () => {
              V((0, i.TW)(e.target), "keyup", o, !0)
            }
          }
        }, [oe, z, B, V]);
        let [ae, se] = (0, d.useState)(null);
        (0, h.N)(() => {
          let e = j.current;
          if ("pointer" === ae) {
            let t = t => {
                if (t.pointerId === e.activePointerId && e.isPressed && 0 === t.button && e.target) {
                  if ((0, E.sD)(e.target, (0, E.wt)(t)) && null != e.pointerType) {
                    let n = !1,
                      r = setTimeout(() => {
                        e.isPressed && e.target instanceof HTMLElement && (n ? Q(t) : ((0, P.e)(e.target), e.target.click()))
                      }, 80);
                    t.currentTarget && z(t.currentTarget, "click", () => n = !0, !0), e.disposables.push(() => clearTimeout(r))
                  } else Q(t);
                  e.isOverTarget = !1
                }
              },
              n = e => {
                Q(e)
              };
            return z((0, i.TW)(e.target), "pointerup", t, !1), z((0, i.TW)(e.target), "pointercancel", n, !1), () => {
              V((0, i.TW)(e.target), "pointerup", t, !1), V((0, i.TW)(e.target), "pointercancel", n, !1)
            }
          }
        }, [ae, z, V]);
        let le = (0, d.useMemo)(() => {
          let e = j.current,
            t = {
              onKeyDown(t) {
                if (N(t.nativeEvent, t.currentTarget) && (0, E.sD)(t.currentTarget, (0, E.wt)(t))) {
                  var n;
                  O((0, E.wt)(t), t.key) && t.preventDefault();
                  let r = !0;
                  e.isPressed || t.repeat || (e.target = t.currentTarget, e.isPressed = !0, ie(!0), e.pointerType = "keyboard", r = $(t, "keyboard")), r && t.stopPropagation(), t.metaKey && (0, o.cX)() && (null === (n = e.metaKeyEvents) || void 0 === n || n.set(t.key, t.nativeEvent))
                } else "Meta" === t.key && (e.metaKeyEvents = new Map)
              },
              onClick(t) {
                if ((!t || (0, E.sD)(t.currentTarget, (0, E.wt)(t))) && t && 0 === t.button && !e.isTriggeringEvent && !w.Fe.isOpening) {
                  let n = !0;
                  if (x && t.preventDefault(), e.ignoreEmulatedMouseEvents || e.isPressed || "virtual" !== e.pointerType && !(0, k.Y)(t.nativeEvent)) {
                    if (e.isPressed && "keyboard" !== e.pointerType) {
                      let r = e.pointerType || t.nativeEvent.pointerType || "virtual",
                        o = q(K(t.currentTarget, t), r),
                        i = G(K(t.currentTarget, t), r, !0);
                      n = o && i, e.isOverTarget = !1, te(t), J(t)
                    }
                  } else {
                    let e = $(t, "virtual"),
                      r = q(t, "virtual"),
                      o = G(t, "virtual");
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
              e.isPressed = !0, se("pointer"), e.isOverTarget = !0, e.activePointerId = t.pointerId, e.target = t.currentTarget, F || function(e) {
                if ((0, o.un)()) {
                  if ("default" === s) {
                    const t = (0, i.TW)(e);
                    l = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = "none"
                  }
                  s = "disabled"
                } else if (e instanceof HTMLElement || e instanceof SVGElement) {
                  let t = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
                  u.set(e, e.style[t]), e.style[t] = "none"
                }
              }(e.target), n = $(t, e.pointerType);
              let r = (0, E.wt)(t);
              "releasePointerCapture" in r && ("hasPointerCapture" in r ? r.hasPointerCapture(t.pointerId) && r.releasePointerCapture(t.pointerId) : r.releasePointerCapture(t.pointerId))
            }
            n && t.stopPropagation()
          }, t.onMouseDown = t => {
            if ((0, E.sD)(t.currentTarget, (0, E.wt)(t)) && 0 === t.button) {
              if (I) {
                let n = (0, r.LE)(t.target);
                n && e.disposables.push(n)
              }
              t.stopPropagation()
            }
          }, t.onPointerUp = t => {
            (0, E.sD)(t.currentTarget, (0, E.wt)(t)) && "virtual" !== e.pointerType && (0 !== t.button || e.isPressed || q(t, e.pointerType || t.pointerType))
          }, t.onPointerEnter = t => {
            t.pointerId === e.activePointerId && e.target && !e.isOverTarget && null != e.pointerType && (e.isOverTarget = !0, $(K(e.target, t), e.pointerType))
          }, t.onPointerLeave = t => {
            t.pointerId === e.activePointerId && e.target && e.isOverTarget && null != e.pointerType && (e.isOverTarget = !1, G(K(e.target, t), e.pointerType, !1), ee(t))
          }, t.onDragStart = e => {
            (0, E.sD)(e.currentTarget, (0, E.wt)(e)) && J(e)
          }), t
        }, [x, I, B, F, J, ee, G, $, q, te, ne]);
        return (0, d.useEffect)(() => {
          if (!W) return;
          const e = (0, i.TW)(W.current);
          if (!e || !e.head || e.getElementById(M)) return;
          const t = e.createElement("style");
          t.id = M, t.textContent = `\n@layer {\n  [${D}] {\n    touch-action: pan-x pan-y pinch-zoom;\n  }\n}\n    `.trim(), e.head.prepend(t)
        }, [W]), (0, d.useEffect)(() => {
          let e = j.current;
          return () => {
            var t;
            F || c(null !== (t = e.target) && void 0 !== t ? t : void 0);
            for (let t of e.disposables) t();
            e.disposables = []
          }
        }, [F]), {
          isPressed: R || H,
          pressProps: (0, m.v)(U, le, {
            [D]: !0
          })
        }
      }

      function A(e) {
        return "A" === e.tagName && e.hasAttribute("href")
      }

      function N(e, t) {
        const {
          key: n,
          code: r
        } = e, o = t, a = o.getAttribute("role");
        return !("Enter" !== n && " " !== n && "Spacebar" !== n && "Space" !== r || o instanceof(0, i.mD)(o).HTMLInputElement && !I(o, n) || o instanceof(0, i.mD)(o).HTMLTextAreaElement || o.isContentEditable || ("link" === a || !a && A(o)) && "Enter" !== n)
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

      function O(e, t) {
        return e instanceof HTMLInputElement ? !I(e, t) : function(e) {
          return !(e instanceof HTMLInputElement || (e instanceof HTMLButtonElement ? "submit" === e.type || "reset" === e.type : A(e)))
        }(e)
      }
      const R = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

      function I(e, t) {
        return "checkbox" === e.type || "radio" === e.type ? " " === t : R.has(e.type)
      }
    },
    89839(e, t, n) {
      n.d(t, {
        LE: () => p,
        eg: () => u,
        lR: () => f,
        o1: () => c,
        yB: () => d
      });
      var r = n(13569),
        o = n(62993),
        i = n(28215),
        a = n(28830),
        s = n(42351),
        l = n(71127);

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
        return (0, a.N)(() => {
          const e = t.current;
          return () => {
            e.observer && (e.observer.disconnect(), e.observer = null)
          }
        }, []), (0, l.useCallback)(n => {
          let o = (0, r.wt)(n);
          if (o instanceof HTMLButtonElement || o instanceof HTMLInputElement || o instanceof HTMLTextAreaElement || o instanceof HTMLSelectElement) {
            t.current.isFocused = !0;
            let n = o,
              i = r => {
                if (t.current.isFocused = !1, n.disabled) {
                  let t = u(r);
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
          l = e => {
            ((0, r.wt)(e) === n || a) && e.stopImmediatePropagation()
          },
          u = t => {
            ((0, r.wt)(t) === n || a) && (t.stopImmediatePropagation(), e || a || (a = !0, (0, i.e)(n), p()))
          },
          c = t => {
            ((0, r.wt)(t) === e || a) && t.stopImmediatePropagation()
          },
          d = t => {
            ((0, r.wt)(t) === e || a) && (t.stopImmediatePropagation(), a || (a = !0, (0, i.e)(n), p()))
          };
        t.addEventListener("blur", l, !0), t.addEventListener("focusout", u, !0), t.addEventListener("focusin", d, !0), t.addEventListener("focus", c, !0);
        let p = () => {
            cancelAnimationFrame(v), t.removeEventListener("blur", l, !0), t.removeEventListener("focusout", u, !0), t.removeEventListener("focusin", d, !0), t.removeEventListener("focus", c, !0), f = !1, a = !1
          },
          v = requestAnimationFrame(p);
        return p
      }
    },
    50336(e, t, n) {
      n.d(t, {
        Cc: () => l,
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
        for (const t in e) Object.prototype.hasOwnProperty.call(e, t) && (r.has(t) || n && o.has(t) || u && i.has(t) || c && a.has(t) || d && (s.has(t) || t.endsWith("Capture") && s.has(t.slice(0, -7))) || (null == f ? void 0 : f.has(t)) || l.test(t)) && (p[t] = e[t]);
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
        t: () => u,
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
      const l = a.join(':not([hidden]):not([tabindex="-1"]),');

      function u(e) {
        return e.matches(s) && i(e) && !d(e)
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
        v: () => l
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
    36566(e, t, n) {
      n.d(t, {
        Fe: () => l,
        PJ: () => c,
        _h: () => u,
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
          }(e, e => l(e, t))
        },
        useHref: e => e
      });

      function s() {
        return (0, i.useContext)(a)
      }

      function l(e, t, n = !0) {
        var i, a;
        let {
          metaKey: s,
          ctrlKey: u,
          altKey: c,
          shiftKey: d
        } = t;
        (0, o.gm)() && (null === (a = window.event) || void 0 === a || null === (i = a.type) || void 0 === i ? void 0 : i.startsWith("key")) && "_blank" === e.target && ((0, o.cX)() ? s = !0 : u = !0);
        let f = (0, o.Tc)() && (0, o.cX)() && !(0, o.bh)() ? new KeyboardEvent("keydown", {
          keyIdentifier: "Enter",
          metaKey: s,
          ctrlKey: u,
          altKey: c,
          shiftKey: d
        }) : new MouseEvent("click", {
          metaKey: s,
          ctrlKey: u,
          altKey: c,
          shiftKey: d,
          detail: 1,
          bubbles: !0,
          cancelable: !0
        });
        l.isOpening = n, (0, r.e)(e), e.dispatchEvent(f), l.isOpening = !1
      }

      function u(e) {
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
      l.isOpening = !1
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
        Bi: () => u,
        X1: () => d
      });
      var r = n(28830),
        o = n(71127);
      var i = n(50336);
      let a, s = Boolean("undefined" != typeof window && window.document && window.document.createElement),
        l = new Map;

      function u(e) {
        let [t, n] = (0, o.useState)(e), u = (0, o.useRef)(null), c = (0, i.Cc)(t), d = (0, o.useRef)(null);
        if (a && a.register(d, c), s) {
          const e = l.get(c);
          e && !e.includes(u) ? e.push(u) : l.set(c, [u])
        }
        return (0, r.N)(() => {
          let e = c;
          return () => {
            a && a.unregister(d), l.delete(e)
          }
        }, [c]), (0, o.useEffect)(() => {
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
          [n, i] = function(e) {
            let [t, n] = (0, o.useState)(e), i = (0, o.useRef)(t), a = (0, o.useRef)(null), s = (0, o.useRef)(() => {
              if (!a.current) return;
              let e = a.current.next();
              e.done ? a.current = null : i.current === e.value ? s.current() : n(e.value)
            });
            (0, r.N)(() => {
              i.current = t, a.current && s.current()
            });
            let l = (0, o.useCallback)(e => {
              a.current = e(i.current), s.current()
            }, [s]);
            return [t, l]
          }(t),
          a = (0, o.useCallback)(() => {
            i(function*() {
              yield t, yield document.getElementById(t) ? t : void 0
            })
          }, [t, i]);
        return (0, r.N)(a, [t, a, ...e]), n
      }
      "undefined" != typeof FinalizationRegistry && (a = new FinalizationRegistry(e => {
        l.delete(e)
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